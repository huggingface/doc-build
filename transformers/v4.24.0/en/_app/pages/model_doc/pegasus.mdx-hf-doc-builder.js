import{S as K_,i as R_,s as H_,e as n,k as l,w as y,t as r,M as V_,c as s,d as t,m as c,a,x as b,h as i,b as p,G as e,g as f,y as T,q as w,o as P,B as $,v as Q_,L as ht}from"../../chunks/vendor-hf-doc-builder.js";import{T as dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ut}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function J_(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusConfig, PegasusModel

# Initializing a PEGASUS google/pegasus-large style configuration
configuration = PegasusConfig()

# Initializing a model (with random weights) from the google/pegasus-large style configuration
model = PegasusModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusConfig, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PEGASUS google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PegasusConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function X_(z){let u,v,_,m,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,u,h),e(u,v),e(u,_),e(_,m),e(u,k)},d(d){d&&t(u)}}}function Z_(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, PegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1024</span>]`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function Y_(z){let u,v,_,m,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,u,h),e(u,v),e(u,_),e(_,m),e(u,k)},d(d){d&&t(u)}}}function ek(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, PegasusForConditionalGeneration

model = PegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"])
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`}}),{c(){u=n("p"),v=r("Summarization example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Summarization example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function tk(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusForCausalLM.from_pretrained("google/pegasus-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function ok(z){let u,v,_,m,k,d,h,E,Qe,Ne,L,Pe,$e,q,ie,de,Je,Le,G,ee,xe,K,Xe,ze,le,Ge,te,ce,pe,Ze,Fe,S,A,Ye,oe,ne,qe,ue,et,Ee,D,De,N,tt,he,me,ot,fe,Q,nt,se,J,V,I,ge,R,Me,st;return{c(){u=n("p"),v=r("TensorFlow models and layers in "),_=n("code"),m=r("transformers"),k=r(" accept two formats as input:"),d=l(),h=n("ul"),E=n("li"),Qe=r("having all inputs as keyword arguments (like PyTorch models), or"),Ne=l(),L=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional argument."),$e=l(),q=n("p"),ie=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Je=r("model.fit()"),Le=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=n("code"),ee=r("model.fit()"),xe=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=n("code"),Xe=r("fit()"),ze=r(" and "),le=n("code"),Ge=r("predict()"),te=r(`, such as when creating your own layers or models with
the Keras `),ce=n("code"),pe=r("Functional"),Ze=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Fe=l(),S=n("ul"),A=n("li"),Ye=r("a single Tensor with "),oe=n("code"),ne=r("input_ids"),qe=r(" only and nothing else: "),ue=n("code"),et=r("model(input_ids)"),Ee=l(),D=n("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=n("code"),tt=r("model([input_ids, attention_mask])"),he=r(" or "),me=n("code"),ot=r("model([input_ids, attention_mask, token_type_ids])"),fe=l(),Q=n("li"),nt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),J=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),V=l(),I=n("p"),ge=r(`Note that when creating models and layers with
`),R=n("a"),Me=r("subclassing"),st=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){u=s(x,"P",{});var F=a(u);v=i(F,"TensorFlow models and layers in "),_=s(F,"CODE",{});var Tt=a(_);m=i(Tt,"transformers"),Tt.forEach(t),k=i(F," accept two formats as input:"),F.forEach(t),d=c(x),h=s(x,"UL",{});var X=a(h);E=s(X,"LI",{});var wt=a(E);Qe=i(wt,"having all inputs as keyword arguments (like PyTorch models), or"),wt.forEach(t),Ne=c(X),L=s(X,"LI",{});var Pt=a(L);Pe=i(Pt,"having all inputs as a list, tuple or dict in the first positional argument."),Pt.forEach(t),X.forEach(t),$e=c(x),q=s(x,"P",{});var M=a(q);ie=i(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=s(M,"CODE",{});var $t=a(de);Je=i($t,"model.fit()"),$t.forEach(t),Le=i(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=s(M,"CODE",{});var xt=a(G);ee=i(xt,"model.fit()"),xt.forEach(t),xe=i(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(M,"CODE",{});var mt=a(K);Xe=i(mt,"fit()"),mt.forEach(t),ze=i(M," and "),le=s(M,"CODE",{});var W=a(le);Ge=i(W,"predict()"),W.forEach(t),te=i(M,`, such as when creating your own layers or models with
the Keras `),ce=s(M,"CODE",{});var at=a(ce);pe=i(at,"Functional"),at.forEach(t),Ze=i(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Fe=c(x),S=s(x,"UL",{});var Z=a(S);A=s(Z,"LI",{});var _e=a(A);Ye=i(_e,"a single Tensor with "),oe=s(_e,"CODE",{});var rt=a(oe);ne=i(rt,"input_ids"),rt.forEach(t),qe=i(_e," only and nothing else: "),ue=s(_e,"CODE",{});var zt=a(ue);et=i(zt,"model(input_ids)"),zt.forEach(t),_e.forEach(t),Ee=c(Z),D=s(Z,"LI",{});var ke=a(D);De=i(ke,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=s(ke,"CODE",{});var it=a(N);tt=i(it,"model([input_ids, attention_mask])"),it.forEach(t),he=i(ke," or "),me=s(ke,"CODE",{});var Ft=a(me);ot=i(Ft,"model([input_ids, attention_mask, token_type_ids])"),Ft.forEach(t),ke.forEach(t),fe=c(Z),Q=s(Z,"LI",{});var dt=a(Q);nt=i(dt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(dt,"CODE",{});var Ce=a(se);J=i(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),dt.forEach(t),Z.forEach(t),V=c(x),I=s(x,"P",{});var je=a(I);ge=i(je,`Note that when creating models and layers with
`),R=s(je,"A",{href:!0,rel:!0});var Se=a(R);Me=i(Se,"subclassing"),Se.forEach(t),st=i(je,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),je.forEach(t),this.h()},h(){p(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),p(R,"rel","nofollow")},m(x,F){f(x,u,F),e(u,v),e(u,_),e(_,m),e(u,k),f(x,d,F),f(x,h,F),e(h,E),e(E,Qe),e(h,Ne),e(h,L),e(L,Pe),f(x,$e,F),f(x,q,F),e(q,ie),e(q,de),e(de,Je),e(q,Le),e(q,G),e(G,ee),e(q,xe),e(q,K),e(K,Xe),e(q,ze),e(q,le),e(le,Ge),e(q,te),e(q,ce),e(ce,pe),e(q,Ze),f(x,Fe,F),f(x,S,F),e(S,A),e(A,Ye),e(A,oe),e(oe,ne),e(A,qe),e(A,ue),e(ue,et),e(S,Ee),e(S,D),e(D,De),e(D,N),e(N,tt),e(D,he),e(D,me),e(me,ot),e(S,fe),e(S,Q),e(Q,nt),e(Q,se),e(se,J),f(x,V,F),f(x,I,F),e(I,ge),e(I,R),e(R,Me),e(I,st)},d(x){x&&t(u),x&&t(d),x&&t(h),x&&t($e),x&&t(q),x&&t(Fe),x&&t(S),x&&t(V),x&&t(I)}}}function nk(z){let u,v,_,m,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,u,h),e(u,v),e(u,_),e(_,m),e(u,k)},d(d){d&&t(u)}}}function sk(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
import tensorflow as tf

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = TFPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function ak(z){let u,v,_,m,k,d,h,E,Qe,Ne,L,Pe,$e,q,ie,de,Je,Le,G,ee,xe,K,Xe,ze,le,Ge,te,ce,pe,Ze,Fe,S,A,Ye,oe,ne,qe,ue,et,Ee,D,De,N,tt,he,me,ot,fe,Q,nt,se,J,V,I,ge,R,Me,st;return{c(){u=n("p"),v=r("TensorFlow models and layers in "),_=n("code"),m=r("transformers"),k=r(" accept two formats as input:"),d=l(),h=n("ul"),E=n("li"),Qe=r("having all inputs as keyword arguments (like PyTorch models), or"),Ne=l(),L=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional argument."),$e=l(),q=n("p"),ie=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Je=r("model.fit()"),Le=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=n("code"),ee=r("model.fit()"),xe=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=n("code"),Xe=r("fit()"),ze=r(" and "),le=n("code"),Ge=r("predict()"),te=r(`, such as when creating your own layers or models with
the Keras `),ce=n("code"),pe=r("Functional"),Ze=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Fe=l(),S=n("ul"),A=n("li"),Ye=r("a single Tensor with "),oe=n("code"),ne=r("input_ids"),qe=r(" only and nothing else: "),ue=n("code"),et=r("model(input_ids)"),Ee=l(),D=n("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=n("code"),tt=r("model([input_ids, attention_mask])"),he=r(" or "),me=n("code"),ot=r("model([input_ids, attention_mask, token_type_ids])"),fe=l(),Q=n("li"),nt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),J=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),V=l(),I=n("p"),ge=r(`Note that when creating models and layers with
`),R=n("a"),Me=r("subclassing"),st=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){u=s(x,"P",{});var F=a(u);v=i(F,"TensorFlow models and layers in "),_=s(F,"CODE",{});var Tt=a(_);m=i(Tt,"transformers"),Tt.forEach(t),k=i(F," accept two formats as input:"),F.forEach(t),d=c(x),h=s(x,"UL",{});var X=a(h);E=s(X,"LI",{});var wt=a(E);Qe=i(wt,"having all inputs as keyword arguments (like PyTorch models), or"),wt.forEach(t),Ne=c(X),L=s(X,"LI",{});var Pt=a(L);Pe=i(Pt,"having all inputs as a list, tuple or dict in the first positional argument."),Pt.forEach(t),X.forEach(t),$e=c(x),q=s(x,"P",{});var M=a(q);ie=i(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=s(M,"CODE",{});var $t=a(de);Je=i($t,"model.fit()"),$t.forEach(t),Le=i(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=s(M,"CODE",{});var xt=a(G);ee=i(xt,"model.fit()"),xt.forEach(t),xe=i(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(M,"CODE",{});var mt=a(K);Xe=i(mt,"fit()"),mt.forEach(t),ze=i(M," and "),le=s(M,"CODE",{});var W=a(le);Ge=i(W,"predict()"),W.forEach(t),te=i(M,`, such as when creating your own layers or models with
the Keras `),ce=s(M,"CODE",{});var at=a(ce);pe=i(at,"Functional"),at.forEach(t),Ze=i(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Fe=c(x),S=s(x,"UL",{});var Z=a(S);A=s(Z,"LI",{});var _e=a(A);Ye=i(_e,"a single Tensor with "),oe=s(_e,"CODE",{});var rt=a(oe);ne=i(rt,"input_ids"),rt.forEach(t),qe=i(_e," only and nothing else: "),ue=s(_e,"CODE",{});var zt=a(ue);et=i(zt,"model(input_ids)"),zt.forEach(t),_e.forEach(t),Ee=c(Z),D=s(Z,"LI",{});var ke=a(D);De=i(ke,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=s(ke,"CODE",{});var it=a(N);tt=i(it,"model([input_ids, attention_mask])"),it.forEach(t),he=i(ke," or "),me=s(ke,"CODE",{});var Ft=a(me);ot=i(Ft,"model([input_ids, attention_mask, token_type_ids])"),Ft.forEach(t),ke.forEach(t),fe=c(Z),Q=s(Z,"LI",{});var dt=a(Q);nt=i(dt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(dt,"CODE",{});var Ce=a(se);J=i(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),dt.forEach(t),Z.forEach(t),V=c(x),I=s(x,"P",{});var je=a(I);ge=i(je,`Note that when creating models and layers with
`),R=s(je,"A",{href:!0,rel:!0});var Se=a(R);Me=i(Se,"subclassing"),Se.forEach(t),st=i(je,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),je.forEach(t),this.h()},h(){p(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),p(R,"rel","nofollow")},m(x,F){f(x,u,F),e(u,v),e(u,_),e(_,m),e(u,k),f(x,d,F),f(x,h,F),e(h,E),e(E,Qe),e(h,Ne),e(h,L),e(L,Pe),f(x,$e,F),f(x,q,F),e(q,ie),e(q,de),e(de,Je),e(q,Le),e(q,G),e(G,ee),e(q,xe),e(q,K),e(K,Xe),e(q,ze),e(q,le),e(le,Ge),e(q,te),e(q,ce),e(ce,pe),e(q,Ze),f(x,Fe,F),f(x,S,F),e(S,A),e(A,Ye),e(A,oe),e(oe,ne),e(A,qe),e(A,ue),e(ue,et),e(S,Ee),e(S,D),e(D,De),e(D,N),e(N,tt),e(D,he),e(D,me),e(me,ot),e(S,fe),e(S,Q),e(Q,nt),e(Q,se),e(se,J),f(x,V,F),f(x,I,F),e(I,ge),e(I,R),e(R,Me),e(I,st)},d(x){x&&t(u),x&&t(d),x&&t(h),x&&t($e),x&&t(q),x&&t(Fe),x&&t(S),x&&t(V),x&&t(I)}}}function rk(z){let u,v,_,m,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,u,h),e(u,v),e(u,_),e(_,m),e(u,k)},d(d){d&&t(u)}}}function ik(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration

model = TFPegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(input_ids)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){u=n("p"),v=r("Summarization example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Summarization example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function dk(z){let u,v,_,m,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,u,h),e(u,v),e(u,_),e(_,m),e(u,k)},d(d){d&&t(u)}}}function lk(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = FlaxPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function ck(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function pk(z){let u,v,_,m,k;return m=new Ve({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function uk(z){let u,v,_,m,k;return{c(){u=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,u,h),e(u,v),e(u,_),e(_,m),e(u,k)},d(d){d&&t(u)}}}function hk(z){let u,v,_,m,k;return m=new Ve({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function mk(z){let u,v,_,m,k;return m=new Ve({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("p"),v=r("Example:"),_=l(),y(m.$$.fragment)},l(d){u=s(d,"P",{});var h=a(u);v=i(h,"Example:"),h.forEach(t),_=c(d),b(m.$$.fragment,d)},m(d,h){f(d,u,h),e(u,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(u),d&&t(_),$(m,d)}}}function fk(z){let u,v,_,m,k,d,h,E,Qe,Ne,L,Pe,$e,q,ie,de,Je,Le,G,ee,xe,K,Xe,ze,le,Ge,te,ce,pe,Ze,Fe,S,A,Ye,oe,ne,qe,ue,et,Ee,D,De,N,tt,he,me,ot,fe,Q,nt,se,J,V,I,ge,R,Me,st,x,F,Tt,X,wt,Pt,M,$t,xt,mt,W,at,Z,_e,rt,zt,ke,it,Ft,dt,Ce,je,Se,ll,cl,pl,to,ln,ul,hl,cn,ml,fl,Li,qt,oo,$a,pn,gl,xa,_l,Gi,ft,no,un,kl,vl,hn,yl,bl,Tl,za,wl,Pl,Fa,$l,Di,Et,so,qa,mn,xl,Ea,zl,Ui,Te,Ma,Ca,Fl,ql,ja,Rs,El,Hs,Ml,Cl,fn,Sa,jl,Sl,Mt,Oa,Ol,Al,Aa,Il,Nl,gn,Ll,Ia,Gl,Dl,Ul,Na,lt,Bl,La,Wl,Kl,Ga,Rl,Hl,Da,Vl,Ql,Jl,Ua,Ct,Xl,_n,Zl,Yl,Ba,ec,tc,Bi,jt,ao,Wa,kn,oc,Ka,nc,Wi,vn,Ki,St,ro,Ra,yn,sc,Ha,ac,Ri,Oe,bn,rc,Ot,ic,Vs,dc,lc,Tn,cc,pc,uc,At,hc,Qs,mc,fc,Js,gc,_c,kc,io,Hi,It,lo,Va,wn,vc,Qa,yc,Vi,co,bc,Ja,Tc,wc,Qi,H,Pn,Pc,$n,$c,xn,xc,zc,Fc,zn,qc,Xs,Ec,Mc,Cc,Ue,Fn,jc,qn,Sc,Xa,Oc,Ac,Ic,En,Zs,Nc,Za,Lc,Gc,Mn,Dc,Ya,Uc,Bc,Wc,er,Kc,Rc,po,Cn,Hc,tr,Vc,Qc,uo,jn,Jc,or,Xc,Zc,ho,Sn,Yc,nr,ep,Ji,Nt,mo,sr,On,tp,ar,op,Xi,ve,An,np,Lt,sp,rr,ap,rp,In,ip,dp,lp,Nn,cp,Ys,pp,up,hp,gt,Ln,mp,ir,fp,gp,Gn,ea,_p,dr,kp,vp,Dn,yp,lr,bp,Tp,wp,fo,Un,Pp,cr,$p,Zi,Gt,go,pr,Bn,xp,ur,zp,Yi,Ae,Wn,Fp,Kn,qp,ta,Ep,Mp,Cp,Rn,jp,Hn,Sp,Op,Ap,Be,Vn,Ip,Dt,Np,oa,Lp,Gp,hr,Dp,Up,Bp,_o,Wp,ko,ed,Ut,vo,mr,Qn,Kp,fr,Rp,td,Ie,Jn,Hp,Xn,Vp,na,Qp,Jp,Xp,Zn,Zp,Yn,Yp,eu,tu,We,es,ou,Bt,nu,sa,su,au,gr,ru,iu,du,yo,lu,bo,od,Wt,To,_r,ts,cu,kr,pu,nd,Kt,os,uu,wo,ns,hu,Po,sd,Rt,$o,vr,ss,mu,yr,fu,ad,ye,as,gu,rs,_u,aa,ku,vu,yu,is,bu,ds,Tu,wu,Pu,xo,$u,Ke,ls,xu,Ht,zu,ra,Fu,qu,br,Eu,Mu,Cu,zo,ju,Fo,rd,Vt,qo,Tr,cs,Su,wr,Ou,id,be,ps,Au,us,Iu,ia,Nu,Lu,Gu,hs,Du,ms,Uu,Bu,Wu,Eo,Ku,Re,fs,Ru,Qt,Hu,da,Vu,Qu,Pr,Ju,Xu,Zu,Mo,Yu,Co,dd,Jt,jo,$r,gs,eh,xr,th,ld,U,_s,oh,ks,nh,la,sh,ah,rh,vs,ih,ys,dh,lh,ch,zr,ph,uh,ct,Fr,bs,hh,mh,qr,Ts,fh,gh,Er,ws,_h,kh,Mr,Ps,vh,yh,He,$s,bh,Xt,Th,Cr,wh,Ph,jr,$h,xh,zh,So,Fh,Oo,qh,Ao,xs,Eh,Io,Mh,No,zs,Ch,Lo,cd,Zt,Go,Sr,Fs,jh,Or,Sh,pd,B,qs,Oh,Es,Ah,ca,Ih,Nh,Lh,Ms,Gh,Cs,Dh,Uh,Bh,Ar,Wh,Kh,pt,Ir,js,Rh,Hh,Nr,Ss,Vh,Qh,Lr,Os,Jh,Xh,Gr,As,Zh,Yh,C,Is,em,Yt,tm,Dr,om,nm,Ur,sm,am,rm,Do,im,Br,dm,lm,Wr,Kr,Rr,Hr,cm,pm,Vr,Qr,Jr,Xr,um,hm,Zr,Yr,ei,ti,mm,fm,oi,ni,Ns,Uo,Bo,si,Ls,gm,ai,_m,km,ri,vm,ym,ii,bm,Tm,di,li,ci,pi,wm,Pm,ui,hi,mi,fi,$m,xm,gi,_i,ki,vi,zm,Fm,yi,bi,Ti,wi,qm,Em,Wo,Gs,Mm,Ko,Cm,Ro,Ds,jm,Ho,ud;return d=new Y({}),K=new Y({}),ge=new Y({}),pn=new Y({}),mn=new Y({}),kn=new Y({}),vn=new Ve({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import torch

src_text = [
    """ PG&E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."""
]

model_name = "google/pegasus-xsum"
device = "cuda" if torch.cuda.is_available() else "cpu"
tokenizer = PegasusTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
batch = tokenizer(src_text, truncation=True, padding="longest", return_tensors="pt").to(device)
translated = model.generate(**batch)
tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)
assert (
    tgt_text[0]
    == "California's largest electricity provider has turned off power to hundreds of thousands of customers."
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusForConditionalGeneration, PegasusTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&quot;&quot; PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;&quot;&quot;</span>
<span class="hljs-meta">... </span>]

<span class="hljs-meta">... </span>model_name = <span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>
<span class="hljs-meta">... </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>
<span class="hljs-meta">... </span>tokenizer = PegasusTokenizer.from_pretrained(model_name)
<span class="hljs-meta">... </span>model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
<span class="hljs-meta">... </span>batch = tokenizer(src_text, truncation=<span class="hljs-literal">True</span>, padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device)
<span class="hljs-meta">... </span>translated = model.generate(**batch)
<span class="hljs-meta">... </span>tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span><span class="hljs-keyword">assert</span> (
<span class="hljs-meta">... </span>    tgt_text[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    == <span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>
<span class="hljs-meta">... </span>)`}}),yn=new Y({}),bn=new j({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PegasusConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PegasusConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PegasusConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PegasusConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PegasusConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PegasusConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PegasusConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PegasusConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PegasusConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PegasusConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PegasusConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.PegasusConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.PegasusConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.PegasusConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PegasusConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/configuration_pegasus.py#L29"}}),io=new ut({props:{anchor:"transformers.PegasusConfig.example",$$slots:{default:[J_]},$$scope:{ctx:z}}}),wn=new Y({}),Pn=new j({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizer.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"},{anchor:"transformers.PegasusTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus.py#L41"}}),Fn=new j({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus.py#L258",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cn=new j({props:{name:"convert_tokens_to_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus.py#L232"}}),jn=new j({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus.py#L247"}}),Sn=new j({props:{name:"num_special_tokens_to_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus.py#L237"}}),On=new Y({}),An=new j({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L51"}}),Ln=new j({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L180",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new j({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L169"}}),Bn=new Y({}),Wn=new j({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_pegasus.py#L1142"}}),Vn=new j({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_pegasus.py#L1192",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new dn({props:{$$slots:{default:[X_]},$$scope:{ctx:z}}}),ko=new ut({props:{anchor:"transformers.PegasusModel.forward.example",$$slots:{default:[Z_]},$$scope:{ctx:z}}}),Qn=new Y({}),Jn=new j({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_pegasus.py#L1291"}}),es=new j({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_pegasus.py#L1359",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new dn({props:{$$slots:{default:[Y_]},$$scope:{ctx:z}}}),bo=new ut({props:{anchor:"transformers.PegasusForConditionalGeneration.forward.example",$$slots:{default:[ek]},$$scope:{ctx:z}}}),ts=new Y({}),os=new j({props:{name:"class transformers.PegasusForCausalLM",anchor:"transformers.PegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_pegasus.py#L1498"}}),ns=new j({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PegasusForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PegasusForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PegasusForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_pegasus.py#L1551",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new ut({props:{anchor:"transformers.PegasusForCausalLM.forward.example",$$slots:{default:[tk]},$$scope:{ctx:z}}}),ss=new Y({}),as=new j({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1214"}}),xo=new dn({props:{$$slots:{default:[ok]},$$scope:{ctx:z}}}),ls=new j({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFPegasusModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1226",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new dn({props:{$$slots:{default:[nk]},$$scope:{ctx:z}}}),Fo=new ut({props:{anchor:"transformers.TFPegasusModel.call.example",$$slots:{default:[sk]},$$scope:{ctx:z}}}),cs=new Y({}),ps=new j({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1321"}}),Eo=new dn({props:{$$slots:{default:[ak]},$$scope:{ctx:z}}}),fs=new j({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1359",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Mo=new dn({props:{$$slots:{default:[rk]},$$scope:{ctx:z}}}),Co=new ut({props:{anchor:"transformers.TFPegasusForConditionalGeneration.call.example",$$slots:{default:[ik]},$$scope:{ctx:z}}}),gs=new Y({}),_s=new j({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1228"}}),$s=new j({props:{name:"__call__",anchor:"transformers.FlaxPegasusModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1163",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new dn({props:{$$slots:{default:[dk]},$$scope:{ctx:z}}}),Oo=new ut({props:{anchor:"transformers.FlaxPegasusModel.__call__.example",$$slots:{default:[lk]},$$scope:{ctx:z}}}),xs=new j({props:{name:"encode",anchor:"transformers.FlaxPegasusModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new ut({props:{anchor:"transformers.FlaxPegasusModel.encode.example",$$slots:{default:[ck]},$$scope:{ctx:z}}}),zs=new j({props:{name:"decode",anchor:"transformers.FlaxPegasusModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new ut({props:{anchor:"transformers.FlaxPegasusModel.decode.example",$$slots:{default:[pk]},$$scope:{ctx:z}}}),Fs=new Y({}),qs=new j({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1315"}}),Is=new j({props:{name:"__call__",anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1163",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new dn({props:{$$slots:{default:[uk]},$$scope:{ctx:z}}}),Ls=new Y({}),Gs=new j({props:{name:"encode",anchor:"transformers.FlaxPegasusForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new ut({props:{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.example",$$slots:{default:[hk]},$$scope:{ctx:z}}}),Ds=new j({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1319",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new ut({props:{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.example",$$slots:{default:[mk]},$$scope:{ctx:z}}}),{c(){u=n("meta"),v=l(),_=n("h1"),m=n("a"),k=n("span"),y(d.$$.fragment),h=l(),E=n("span"),Qe=r("Pegasus"),Ne=l(),L=n("p"),Pe=n("strong"),$e=r("DISCLAIMER:"),q=r(" If you see something strange, file a "),ie=n("a"),de=r("Github Issue"),Je=r(`
and assign @patrickvonplaten.`),Le=l(),G=n("h2"),ee=n("a"),xe=n("span"),y(K.$$.fragment),Xe=l(),ze=n("span"),le=r("Overview"),Ge=l(),te=n("p"),ce=r("The Pegasus model was proposed in "),pe=n("a"),Ze=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),Fe=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),S=l(),A=n("p"),Ye=r("According to the abstract,"),oe=l(),ne=n("ul"),qe=n("li"),ue=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),et=l(),Ee=n("li"),D=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),De=l(),N=n("p"),tt=r("This model was contributed by "),he=n("a"),me=r("sshleifer"),ot=r(". The Authors\u2019 code can be found "),fe=n("a"),Q=r("here"),nt=r("."),se=l(),J=n("h2"),V=n("a"),I=n("span"),y(ge.$$.fragment),R=l(),Me=n("span"),st=r("Checkpoints"),x=l(),F=n("p"),Tt=r("All the "),X=n("a"),wt=r("checkpoints"),Pt=r(` are fine-tuned for summarization, besides
`),M=n("em"),$t=r("pegasus-large"),xt=r(", whence the other checkpoints are fine-tuned:"),mt=l(),W=n("ul"),at=n("li"),Z=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),_e=l(),rt=n("li"),zt=r("FP16 is not supported (help/ideas on this appreciated!)."),ke=l(),it=n("li"),Ft=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),dt=l(),Ce=n("li"),je=r("Full replication results and correctly pre-processed data can be found in this "),Se=n("a"),ll=r("Issue"),cl=r("."),pl=l(),to=n("li"),ln=n("a"),ul=r("Distilled checkpoints"),hl=r(" are described in this "),cn=n("a"),ml=r("paper"),fl=r("."),Li=l(),qt=n("h3"),oo=n("a"),$a=n("span"),y(pn.$$.fragment),gl=l(),xa=n("span"),_l=r("Examples"),Gi=l(),ft=n("ul"),no=n("li"),un=n("a"),kl=r("Script"),vl=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),hn=n("a"),yl=r("examples/pytorch/summarization/"),bl=r("."),Tl=l(),za=n("li"),wl=r("FP16 is not supported (help/ideas on this appreciated!)."),Pl=l(),Fa=n("li"),$l=r("The adafactor optimizer is recommended for pegasus fine-tuning."),Di=l(),Et=n("h2"),so=n("a"),qa=n("span"),y(mn.$$.fragment),xl=l(),Ea=n("span"),zl=r("Implementation Notes"),Ui=l(),Te=n("ul"),Ma=n("li"),Ca=n("p"),Fl=r("All models are transformer encoder-decoders with 16 layers in each component."),ql=l(),ja=n("li"),Rs=n("p"),El=r("The implementation is completely inherited from "),Hs=n("a"),Ml=r("BartForConditionalGeneration"),Cl=l(),fn=n("li"),Sa=n("p"),jl=r("Some key configuration differences:"),Sl=l(),Mt=n("ul"),Oa=n("li"),Ol=r("static, sinusoidal position embeddings"),Al=l(),Aa=n("li"),Il=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Nl=l(),gn=n("li"),Ll=r("more beams are used ("),Ia=n("code"),Gl=r("num_beams=8"),Dl=r(")"),Ul=l(),Na=n("li"),lt=n("p"),Bl=r("All pretrained pegasus checkpoints are the same besides three attributes: "),La=n("code"),Wl=r("tokenizer.model_max_length"),Kl=r(` (maximum
input size), `),Ga=n("code"),Rl=r("max_length"),Hl=r(" (the maximum number of tokens to generate) and "),Da=n("code"),Vl=r("length_penalty"),Ql=r("."),Jl=l(),Ua=n("li"),Ct=n("p"),Xl=r("The code to convert checkpoints trained in the author\u2019s "),_n=n("a"),Zl=r("repo"),Yl=r(` can be
found in `),Ba=n("code"),ec=r("convert_pegasus_tf_to_pytorch.py"),tc=r("."),Bi=l(),jt=n("h2"),ao=n("a"),Wa=n("span"),y(kn.$$.fragment),oc=l(),Ka=n("span"),nc=r("Usage Example"),Wi=l(),y(vn.$$.fragment),Ki=l(),St=n("h2"),ro=n("a"),Ra=n("span"),y(yn.$$.fragment),sc=l(),Ha=n("span"),ac=r("PegasusConfig"),Ri=l(),Oe=n("div"),y(bn.$$.fragment),rc=l(),Ot=n("p"),ic=r("This is the configuration class to store the configuration of a "),Vs=n("a"),dc=r("PegasusModel"),lc=r(`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Tn=n("a"),cc=r("google/pegasus-large"),pc=r(" architecture."),uc=l(),At=n("p"),hc=r("Configuration objects inherit from "),Qs=n("a"),mc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),Js=n("a"),gc=r("PretrainedConfig"),_c=r(" for more information."),kc=l(),y(io.$$.fragment),Hi=l(),It=n("h2"),lo=n("a"),Va=n("span"),y(wn.$$.fragment),vc=l(),Qa=n("span"),yc=r("PegasusTokenizer"),Vi=l(),co=n("p"),bc=r("warning: "),Ja=n("code"),Tc=r("add_tokens"),wc=r(" does not work at the moment."),Qi=l(),H=n("div"),y(Pn.$$.fragment),Pc=l(),$n=n("p"),$c=r("Construct a PEGASUS tokenizer. Based on "),xn=n("a"),xc=r("SentencePiece"),zc=r("."),Fc=l(),zn=n("p"),qc=r("This tokenizer inherits from "),Xs=n("a"),Ec=r("PreTrainedTokenizer"),Mc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Cc=l(),Ue=n("div"),y(Fn.$$.fragment),jc=l(),qn=n("p"),Sc=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Xa=n("code"),Oc=r("X"),Ac=r(" represents the sequence:"),Ic=l(),En=n("ul"),Zs=n("li"),Nc=r("single sequence: "),Za=n("code"),Lc=r("X </s>"),Gc=l(),Mn=n("li"),Dc=r("pair of sequences: "),Ya=n("code"),Uc=r("A B </s>"),Bc=r(" (not intended use)"),Wc=l(),er=n("p"),Kc=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Rc=l(),po=n("div"),y(Cn.$$.fragment),Hc=l(),tr=n("p"),Vc=r("Converts a sequence of tokens (string) in a single string."),Qc=l(),uo=n("div"),y(jn.$$.fragment),Jc=l(),or=n("p"),Xc=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Zc=l(),ho=n("div"),y(Sn.$$.fragment),Yc=l(),nr=n("p"),ep=r("Just EOS"),Ji=l(),Nt=n("h2"),mo=n("a"),sr=n("span"),y(On.$$.fragment),tp=l(),ar=n("span"),op=r("PegasusTokenizerFast"),Xi=l(),ve=n("div"),y(An.$$.fragment),np=l(),Lt=n("p"),sp=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),rr=n("em"),ap=r("tokenizers"),rp=r(` library). Based on
`),In=n("a"),ip=r("Unigram"),dp=r("."),lp=l(),Nn=n("p"),cp=r("This tokenizer inherits from "),Ys=n("a"),pp=r("PreTrainedTokenizerFast"),up=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hp=l(),gt=n("div"),y(Ln.$$.fragment),mp=l(),ir=n("p"),fp=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),gp=l(),Gn=n("ul"),ea=n("li"),_p=r("single sequence: "),dr=n("code"),kp=r("X </s>"),vp=l(),Dn=n("li"),yp=r("pair of sequences: "),lr=n("code"),bp=r("A B </s>"),Tp=r(" (not intended use)"),wp=l(),fo=n("div"),y(Un.$$.fragment),Pp=l(),cr=n("p"),$p=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Zi=l(),Gt=n("h2"),go=n("a"),pr=n("span"),y(Bn.$$.fragment),xp=l(),ur=n("span"),zp=r("PegasusModel"),Yi=l(),Ae=n("div"),y(Wn.$$.fragment),Fp=l(),Kn=n("p"),qp=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=n("a"),Ep=r("PreTrainedModel"),Mp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp=l(),Rn=n("p"),jp=r("This model is also a PyTorch "),Hn=n("a"),Sp=r("torch.nn.Module"),Op=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ap=l(),Be=n("div"),y(Vn.$$.fragment),Ip=l(),Dt=n("p"),Np=r("The "),oa=n("a"),Lp=r("PegasusModel"),Gp=r(" forward method, overrides the "),hr=n("code"),Dp=r("__call__"),Up=r(" special method."),Bp=l(),y(_o.$$.fragment),Wp=l(),y(ko.$$.fragment),ed=l(),Ut=n("h2"),vo=n("a"),mr=n("span"),y(Qn.$$.fragment),Kp=l(),fr=n("span"),Rp=r("PegasusForConditionalGeneration"),td=l(),Ie=n("div"),y(Jn.$$.fragment),Hp=l(),Xn=n("p"),Vp=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),na=n("a"),Qp=r("PreTrainedModel"),Jp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=l(),Zn=n("p"),Zp=r("This model is also a PyTorch "),Yn=n("a"),Yp=r("torch.nn.Module"),eu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tu=l(),We=n("div"),y(es.$$.fragment),ou=l(),Bt=n("p"),nu=r("The "),sa=n("a"),su=r("PegasusForConditionalGeneration"),au=r(" forward method, overrides the "),gr=n("code"),ru=r("__call__"),iu=r(" special method."),du=l(),y(yo.$$.fragment),lu=l(),y(bo.$$.fragment),od=l(),Wt=n("h2"),To=n("a"),_r=n("span"),y(ts.$$.fragment),cu=l(),kr=n("span"),pu=r("PegasusForCausalLM"),nd=l(),Kt=n("div"),y(os.$$.fragment),uu=l(),wo=n("div"),y(ns.$$.fragment),hu=l(),y(Po.$$.fragment),sd=l(),Rt=n("h2"),$o=n("a"),vr=n("span"),y(ss.$$.fragment),mu=l(),yr=n("span"),fu=r("TFPegasusModel"),ad=l(),ye=n("div"),y(as.$$.fragment),gu=l(),rs=n("p"),_u=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),aa=n("a"),ku=r("TFPreTrainedModel"),vu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu=l(),is=n("p"),bu=r("This model is also a "),ds=n("a"),Tu=r("tf.keras.Model"),wu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu=l(),y(xo.$$.fragment),$u=l(),Ke=n("div"),y(ls.$$.fragment),xu=l(),Ht=n("p"),zu=r("The "),ra=n("a"),Fu=r("TFPegasusModel"),qu=r(" forward method, overrides the "),br=n("code"),Eu=r("__call__"),Mu=r(" special method."),Cu=l(),y(zo.$$.fragment),ju=l(),y(Fo.$$.fragment),rd=l(),Vt=n("h2"),qo=n("a"),Tr=n("span"),y(cs.$$.fragment),Su=l(),wr=n("span"),Ou=r("TFPegasusForConditionalGeneration"),id=l(),be=n("div"),y(ps.$$.fragment),Au=l(),us=n("p"),Iu=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=n("a"),Nu=r("TFPreTrainedModel"),Lu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu=l(),hs=n("p"),Du=r("This model is also a "),ms=n("a"),Uu=r("tf.keras.Model"),Bu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wu=l(),y(Eo.$$.fragment),Ku=l(),Re=n("div"),y(fs.$$.fragment),Ru=l(),Qt=n("p"),Hu=r("The "),da=n("a"),Vu=r("TFPegasusForConditionalGeneration"),Qu=r(" forward method, overrides the "),Pr=n("code"),Ju=r("__call__"),Xu=r(" special method."),Zu=l(),y(Mo.$$.fragment),Yu=l(),y(Co.$$.fragment),dd=l(),Jt=n("h2"),jo=n("a"),$r=n("span"),y(gs.$$.fragment),eh=l(),xr=n("span"),th=r("FlaxPegasusModel"),ld=l(),U=n("div"),y(_s.$$.fragment),oh=l(),ks=n("p"),nh=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),la=n("a"),sh=r("FlaxPreTrainedModel"),ah=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh=l(),vs=n("p"),ih=r(`This model is also a Flax Linen
`),ys=n("a"),dh=r("flax.nn.Module"),lh=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ch=l(),zr=n("p"),ph=r("Finally, this model supports inherent JAX features such as:"),uh=l(),ct=n("ul"),Fr=n("li"),bs=n("a"),hh=r("Just-In-Time (JIT) compilation"),mh=l(),qr=n("li"),Ts=n("a"),fh=r("Automatic Differentiation"),gh=l(),Er=n("li"),ws=n("a"),_h=r("Vectorization"),kh=l(),Mr=n("li"),Ps=n("a"),vh=r("Parallelization"),yh=l(),He=n("div"),y($s.$$.fragment),bh=l(),Xt=n("p"),Th=r("The "),Cr=n("code"),wh=r("FlaxPegasusPreTrainedModel"),Ph=r(" forward method, overrides the "),jr=n("code"),$h=r("__call__"),xh=r(" special method."),zh=l(),y(So.$$.fragment),Fh=l(),y(Oo.$$.fragment),qh=l(),Ao=n("div"),y(xs.$$.fragment),Eh=l(),y(Io.$$.fragment),Mh=l(),No=n("div"),y(zs.$$.fragment),Ch=l(),y(Lo.$$.fragment),cd=l(),Zt=n("h2"),Go=n("a"),Sr=n("span"),y(Fs.$$.fragment),jh=l(),Or=n("span"),Sh=r("FlaxPegasusForConditionalGeneration"),pd=l(),B=n("div"),y(qs.$$.fragment),Oh=l(),Es=n("p"),Ah=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ca=n("a"),Ih=r("FlaxPreTrainedModel"),Nh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh=l(),Ms=n("p"),Gh=r(`This model is also a Flax Linen
`),Cs=n("a"),Dh=r("flax.nn.Module"),Uh=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bh=l(),Ar=n("p"),Wh=r("Finally, this model supports inherent JAX features such as:"),Kh=l(),pt=n("ul"),Ir=n("li"),js=n("a"),Rh=r("Just-In-Time (JIT) compilation"),Hh=l(),Nr=n("li"),Ss=n("a"),Vh=r("Automatic Differentiation"),Qh=l(),Lr=n("li"),Os=n("a"),Jh=r("Vectorization"),Xh=l(),Gr=n("li"),As=n("a"),Zh=r("Parallelization"),Yh=l(),C=n("div"),y(Is.$$.fragment),em=l(),Yt=n("p"),tm=r("The "),Dr=n("code"),om=r("FlaxPegasusPreTrainedModel"),nm=r(" forward method, overrides the "),Ur=n("code"),sm=r("__call__"),am=r(" special method."),rm=l(),y(Do.$$.fragment),im=l(),Br=n("p"),dm=r("Summarization example:"),lm=l(),Wr=n("blockquote"),Kr=n("blockquote"),Rr=n("blockquote"),Hr=n("p"),cm=r("from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),pm=l(),Vr=n("blockquote"),Qr=n("blockquote"),Jr=n("blockquote"),Xr=n("p"),um=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),hm=l(),Zr=n("blockquote"),Yr=n("blockquote"),ei=n("blockquote"),ti=n("p"),mm=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),fm=l(),oi=n("blockquote"),ni=n("blockquote"),Ns=n("blockquote"),Uo=n("h1"),Bo=n("a"),si=n("span"),y(Ls.$$.fragment),gm=l(),ai=n("span"),_m=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),km=l(),ri=n("p"),vm=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),ym=l(),ii=n("p"),bm=r("Mask filling example:"),Tm=l(),di=n("blockquote"),li=n("blockquote"),ci=n("blockquote"),pi=n("p"),wm=r(`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),Pm=l(),ui=n("blockquote"),hi=n("blockquote"),mi=n("blockquote"),fi=n("p"),$m=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),xm=l(),gi=n("blockquote"),_i=n("blockquote"),ki=n("blockquote"),vi=n("p"),zm=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Fm=l(),yi=n("blockquote"),bi=n("blockquote"),Ti=n("blockquote"),wi=n("p"),qm=r("tokenizer.decode(predictions).split()"),Em=l(),Wo=n("div"),y(Gs.$$.fragment),Mm=l(),y(Ko.$$.fragment),Cm=l(),Ro=n("div"),y(Ds.$$.fragment),jm=l(),y(Ho.$$.fragment),this.h()},l(o){const g=V_('[data-svelte="svelte-1phssyn"]',document.head);u=s(g,"META",{name:!0,content:!0}),g.forEach(t),v=c(o),_=s(o,"H1",{class:!0});var Us=a(_);m=s(Us,"A",{id:!0,class:!0,href:!0});var Pi=a(m);k=s(Pi,"SPAN",{});var $i=a(k);b(d.$$.fragment,$i),$i.forEach(t),Pi.forEach(t),h=c(Us),E=s(Us,"SPAN",{});var xi=a(E);Qe=i(xi,"Pegasus"),xi.forEach(t),Us.forEach(t),Ne=c(o),L=s(o,"P",{});var Vo=a(L);Pe=s(Vo,"STRONG",{});var zi=a(Pe);$e=i(zi,"DISCLAIMER:"),zi.forEach(t),q=i(Vo," If you see something strange, file a "),ie=s(Vo,"A",{href:!0,rel:!0});var Fi=a(ie);de=i(Fi,"Github Issue"),Fi.forEach(t),Je=i(Vo,`
and assign @patrickvonplaten.`),Vo.forEach(t),Le=c(o),G=s(o,"H2",{class:!0});var Bs=a(G);ee=s(Bs,"A",{id:!0,class:!0,href:!0});var qi=a(ee);xe=s(qi,"SPAN",{});var Ei=a(xe);b(K.$$.fragment,Ei),Ei.forEach(t),qi.forEach(t),Xe=c(Bs),ze=s(Bs,"SPAN",{});var Mi=a(ze);le=i(Mi,"Overview"),Mi.forEach(t),Bs.forEach(t),Ge=c(o),te=s(o,"P",{});var Ws=a(te);ce=i(Ws,"The Pegasus model was proposed in "),pe=s(Ws,"A",{href:!0,rel:!0});var Ci=a(pe);Ze=i(Ci,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),Ci.forEach(t),Fe=i(Ws," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),Ws.forEach(t),S=c(o),A=s(o,"P",{});var ji=a(A);Ye=i(ji,"According to the abstract,"),ji.forEach(t),oe=c(o),ne=s(o,"UL",{});var Ks=a(ne);qe=s(Ks,"LI",{});var Si=a(qe);ue=i(Si,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),Si.forEach(t),et=c(Ks),Ee=s(Ks,"LI",{});var Oi=a(Ee);D=i(Oi,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),Oi.forEach(t),Ks.forEach(t),De=c(o),N=s(o,"P",{});var eo=a(N);tt=i(eo,"This model was contributed by "),he=s(eo,"A",{href:!0,rel:!0});var Ai=a(he);me=i(Ai,"sshleifer"),Ai.forEach(t),ot=i(eo,". The Authors\u2019 code can be found "),fe=s(eo,"A",{href:!0,rel:!0});var Im=a(fe);Q=i(Im,"here"),Im.forEach(t),nt=i(eo,"."),eo.forEach(t),se=c(o),J=s(o,"H2",{class:!0});var hd=a(J);V=s(hd,"A",{id:!0,class:!0,href:!0});var Nm=a(V);I=s(Nm,"SPAN",{});var Lm=a(I);b(ge.$$.fragment,Lm),Lm.forEach(t),Nm.forEach(t),R=c(hd),Me=s(hd,"SPAN",{});var Gm=a(Me);st=i(Gm,"Checkpoints"),Gm.forEach(t),hd.forEach(t),x=c(o),F=s(o,"P",{});var pa=a(F);Tt=i(pa,"All the "),X=s(pa,"A",{href:!0,rel:!0});var Dm=a(X);wt=i(Dm,"checkpoints"),Dm.forEach(t),Pt=i(pa,` are fine-tuned for summarization, besides
`),M=s(pa,"EM",{});var Um=a(M);$t=i(Um,"pegasus-large"),Um.forEach(t),xt=i(pa,", whence the other checkpoints are fine-tuned:"),pa.forEach(t),mt=c(o),W=s(o,"UL",{});var _t=a(W);at=s(_t,"LI",{});var Bm=a(at);Z=i(Bm,"Each checkpoint is 2.2 GB on disk and 568M parameters."),Bm.forEach(t),_e=c(_t),rt=s(_t,"LI",{});var Wm=a(rt);zt=i(Wm,"FP16 is not supported (help/ideas on this appreciated!)."),Wm.forEach(t),ke=c(_t),it=s(_t,"LI",{});var Km=a(it);Ft=i(Km,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Km.forEach(t),dt=c(_t),Ce=s(_t,"LI",{});var md=a(Ce);je=i(md,"Full replication results and correctly pre-processed data can be found in this "),Se=s(md,"A",{href:!0,rel:!0});var Rm=a(Se);ll=i(Rm,"Issue"),Rm.forEach(t),cl=i(md,"."),md.forEach(t),pl=c(_t),to=s(_t,"LI",{});var Ii=a(to);ln=s(Ii,"A",{href:!0,rel:!0});var Hm=a(ln);ul=i(Hm,"Distilled checkpoints"),Hm.forEach(t),hl=i(Ii," are described in this "),cn=s(Ii,"A",{href:!0,rel:!0});var Vm=a(cn);ml=i(Vm,"paper"),Vm.forEach(t),fl=i(Ii,"."),Ii.forEach(t),_t.forEach(t),Li=c(o),qt=s(o,"H3",{class:!0});var fd=a(qt);oo=s(fd,"A",{id:!0,class:!0,href:!0});var Qm=a(oo);$a=s(Qm,"SPAN",{});var Jm=a($a);b(pn.$$.fragment,Jm),Jm.forEach(t),Qm.forEach(t),gl=c(fd),xa=s(fd,"SPAN",{});var Xm=a(xa);_l=i(Xm,"Examples"),Xm.forEach(t),fd.forEach(t),Gi=c(o),ft=s(o,"UL",{});var ua=a(ft);no=s(ua,"LI",{});var Ni=a(no);un=s(Ni,"A",{href:!0,rel:!0});var Zm=a(un);kl=i(Zm,"Script"),Zm.forEach(t),vl=i(Ni,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),hn=s(Ni,"A",{href:!0,rel:!0});var Ym=a(hn);yl=i(Ym,"examples/pytorch/summarization/"),Ym.forEach(t),bl=i(Ni,"."),Ni.forEach(t),Tl=c(ua),za=s(ua,"LI",{});var ef=a(za);wl=i(ef,"FP16 is not supported (help/ideas on this appreciated!)."),ef.forEach(t),Pl=c(ua),Fa=s(ua,"LI",{});var tf=a(Fa);$l=i(tf,"The adafactor optimizer is recommended for pegasus fine-tuning."),tf.forEach(t),ua.forEach(t),Di=c(o),Et=s(o,"H2",{class:!0});var gd=a(Et);so=s(gd,"A",{id:!0,class:!0,href:!0});var of=a(so);qa=s(of,"SPAN",{});var nf=a(qa);b(mn.$$.fragment,nf),nf.forEach(t),of.forEach(t),xl=c(gd),Ea=s(gd,"SPAN",{});var sf=a(Ea);zl=i(sf,"Implementation Notes"),sf.forEach(t),gd.forEach(t),Ui=c(o),Te=s(o,"UL",{});var kt=a(Te);Ma=s(kt,"LI",{});var af=a(Ma);Ca=s(af,"P",{});var rf=a(Ca);Fl=i(rf,"All models are transformer encoder-decoders with 16 layers in each component."),rf.forEach(t),af.forEach(t),ql=c(kt),ja=s(kt,"LI",{});var df=a(ja);Rs=s(df,"P",{});var Sm=a(Rs);El=i(Sm,"The implementation is completely inherited from "),Hs=s(Sm,"A",{href:!0});var lf=a(Hs);Ml=i(lf,"BartForConditionalGeneration"),lf.forEach(t),Sm.forEach(t),df.forEach(t),Cl=c(kt),fn=s(kt,"LI",{});var _d=a(fn);Sa=s(_d,"P",{});var cf=a(Sa);jl=i(cf,"Some key configuration differences:"),cf.forEach(t),Sl=c(_d),Mt=s(_d,"UL",{});var ha=a(Mt);Oa=s(ha,"LI",{});var pf=a(Oa);Ol=i(pf,"static, sinusoidal position embeddings"),pf.forEach(t),Al=c(ha),Aa=s(ha,"LI",{});var uf=a(Aa);Il=i(uf,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),uf.forEach(t),Nl=c(ha),gn=s(ha,"LI",{});var kd=a(gn);Ll=i(kd,"more beams are used ("),Ia=s(kd,"CODE",{});var hf=a(Ia);Gl=i(hf,"num_beams=8"),hf.forEach(t),Dl=i(kd,")"),kd.forEach(t),ha.forEach(t),_d.forEach(t),Ul=c(kt),Na=s(kt,"LI",{});var mf=a(Na);lt=s(mf,"P",{});var Qo=a(lt);Bl=i(Qo,"All pretrained pegasus checkpoints are the same besides three attributes: "),La=s(Qo,"CODE",{});var ff=a(La);Wl=i(ff,"tokenizer.model_max_length"),ff.forEach(t),Kl=i(Qo,` (maximum
input size), `),Ga=s(Qo,"CODE",{});var gf=a(Ga);Rl=i(gf,"max_length"),gf.forEach(t),Hl=i(Qo," (the maximum number of tokens to generate) and "),Da=s(Qo,"CODE",{});var _f=a(Da);Vl=i(_f,"length_penalty"),_f.forEach(t),Ql=i(Qo,"."),Qo.forEach(t),mf.forEach(t),Jl=c(kt),Ua=s(kt,"LI",{});var kf=a(Ua);Ct=s(kf,"P",{});var ma=a(Ct);Xl=i(ma,"The code to convert checkpoints trained in the author\u2019s "),_n=s(ma,"A",{href:!0,rel:!0});var vf=a(_n);Zl=i(vf,"repo"),vf.forEach(t),Yl=i(ma,` can be
found in `),Ba=s(ma,"CODE",{});var yf=a(Ba);ec=i(yf,"convert_pegasus_tf_to_pytorch.py"),yf.forEach(t),tc=i(ma,"."),ma.forEach(t),kf.forEach(t),kt.forEach(t),Bi=c(o),jt=s(o,"H2",{class:!0});var vd=a(jt);ao=s(vd,"A",{id:!0,class:!0,href:!0});var bf=a(ao);Wa=s(bf,"SPAN",{});var Tf=a(Wa);b(kn.$$.fragment,Tf),Tf.forEach(t),bf.forEach(t),oc=c(vd),Ka=s(vd,"SPAN",{});var wf=a(Ka);nc=i(wf,"Usage Example"),wf.forEach(t),vd.forEach(t),Wi=c(o),b(vn.$$.fragment,o),Ki=c(o),St=s(o,"H2",{class:!0});var yd=a(St);ro=s(yd,"A",{id:!0,class:!0,href:!0});var Pf=a(ro);Ra=s(Pf,"SPAN",{});var $f=a(Ra);b(yn.$$.fragment,$f),$f.forEach(t),Pf.forEach(t),sc=c(yd),Ha=s(yd,"SPAN",{});var xf=a(Ha);ac=i(xf,"PegasusConfig"),xf.forEach(t),yd.forEach(t),Ri=c(o),Oe=s(o,"DIV",{class:!0});var Jo=a(Oe);b(bn.$$.fragment,Jo),rc=c(Jo),Ot=s(Jo,"P",{});var fa=a(Ot);ic=i(fa,"This is the configuration class to store the configuration of a "),Vs=s(fa,"A",{href:!0});var zf=a(Vs);dc=i(zf,"PegasusModel"),zf.forEach(t),lc=i(fa,`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Tn=s(fa,"A",{href:!0,rel:!0});var Ff=a(Tn);cc=i(Ff,"google/pegasus-large"),Ff.forEach(t),pc=i(fa," architecture."),fa.forEach(t),uc=c(Jo),At=s(Jo,"P",{});var ga=a(At);hc=i(ga,"Configuration objects inherit from "),Qs=s(ga,"A",{href:!0});var qf=a(Qs);mc=i(qf,"PretrainedConfig"),qf.forEach(t),fc=i(ga,` and can be used to control the model outputs. Read the
documentation from `),Js=s(ga,"A",{href:!0});var Ef=a(Js);gc=i(Ef,"PretrainedConfig"),Ef.forEach(t),_c=i(ga," for more information."),ga.forEach(t),kc=c(Jo),b(io.$$.fragment,Jo),Jo.forEach(t),Hi=c(o),It=s(o,"H2",{class:!0});var bd=a(It);lo=s(bd,"A",{id:!0,class:!0,href:!0});var Mf=a(lo);Va=s(Mf,"SPAN",{});var Cf=a(Va);b(wn.$$.fragment,Cf),Cf.forEach(t),Mf.forEach(t),vc=c(bd),Qa=s(bd,"SPAN",{});var jf=a(Qa);yc=i(jf,"PegasusTokenizer"),jf.forEach(t),bd.forEach(t),Vi=c(o),co=s(o,"P",{});var Td=a(co);bc=i(Td,"warning: "),Ja=s(Td,"CODE",{});var Sf=a(Ja);Tc=i(Sf,"add_tokens"),Sf.forEach(t),wc=i(Td," does not work at the moment."),Td.forEach(t),Qi=c(o),H=s(o,"DIV",{class:!0});var we=a(H);b(Pn.$$.fragment,we),Pc=c(we),$n=s(we,"P",{});var wd=a($n);$c=i(wd,"Construct a PEGASUS tokenizer. Based on "),xn=s(wd,"A",{href:!0,rel:!0});var Of=a(xn);xc=i(Of,"SentencePiece"),Of.forEach(t),zc=i(wd,"."),wd.forEach(t),Fc=c(we),zn=s(we,"P",{});var Pd=a(zn);qc=i(Pd,"This tokenizer inherits from "),Xs=s(Pd,"A",{href:!0});var Af=a(Xs);Ec=i(Af,"PreTrainedTokenizer"),Af.forEach(t),Mc=i(Pd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Pd.forEach(t),Cc=c(we),Ue=s(we,"DIV",{class:!0});var Xo=a(Ue);b(Fn.$$.fragment,Xo),jc=c(Xo),qn=s(Xo,"P",{});var $d=a(qn);Sc=i($d,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Xa=s($d,"CODE",{});var If=a(Xa);Oc=i(If,"X"),If.forEach(t),Ac=i($d," represents the sequence:"),$d.forEach(t),Ic=c(Xo),En=s(Xo,"UL",{});var xd=a(En);Zs=s(xd,"LI",{});var Om=a(Zs);Nc=i(Om,"single sequence: "),Za=s(Om,"CODE",{});var Nf=a(Za);Lc=i(Nf,"X </s>"),Nf.forEach(t),Om.forEach(t),Gc=c(xd),Mn=s(xd,"LI",{});var zd=a(Mn);Dc=i(zd,"pair of sequences: "),Ya=s(zd,"CODE",{});var Lf=a(Ya);Uc=i(Lf,"A B </s>"),Lf.forEach(t),Bc=i(zd," (not intended use)"),zd.forEach(t),xd.forEach(t),Wc=c(Xo),er=s(Xo,"P",{});var Gf=a(er);Kc=i(Gf,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Gf.forEach(t),Xo.forEach(t),Rc=c(we),po=s(we,"DIV",{class:!0});var Fd=a(po);b(Cn.$$.fragment,Fd),Hc=c(Fd),tr=s(Fd,"P",{});var Df=a(tr);Vc=i(Df,"Converts a sequence of tokens (string) in a single string."),Df.forEach(t),Fd.forEach(t),Qc=c(we),uo=s(we,"DIV",{class:!0});var qd=a(uo);b(jn.$$.fragment,qd),Jc=c(qd),or=s(qd,"P",{});var Uf=a(or);Xc=i(Uf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Uf.forEach(t),qd.forEach(t),Zc=c(we),ho=s(we,"DIV",{class:!0});var Ed=a(ho);b(Sn.$$.fragment,Ed),Yc=c(Ed),nr=s(Ed,"P",{});var Bf=a(nr);ep=i(Bf,"Just EOS"),Bf.forEach(t),Ed.forEach(t),we.forEach(t),Ji=c(o),Nt=s(o,"H2",{class:!0});var Md=a(Nt);mo=s(Md,"A",{id:!0,class:!0,href:!0});var Wf=a(mo);sr=s(Wf,"SPAN",{});var Kf=a(sr);b(On.$$.fragment,Kf),Kf.forEach(t),Wf.forEach(t),tp=c(Md),ar=s(Md,"SPAN",{});var Rf=a(ar);op=i(Rf,"PegasusTokenizerFast"),Rf.forEach(t),Md.forEach(t),Xi=c(o),ve=s(o,"DIV",{class:!0});var vt=a(ve);b(An.$$.fragment,vt),np=c(vt),Lt=s(vt,"P",{});var _a=a(Lt);sp=i(_a,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),rr=s(_a,"EM",{});var Hf=a(rr);ap=i(Hf,"tokenizers"),Hf.forEach(t),rp=i(_a,` library). Based on
`),In=s(_a,"A",{href:!0,rel:!0});var Vf=a(In);ip=i(Vf,"Unigram"),Vf.forEach(t),dp=i(_a,"."),_a.forEach(t),lp=c(vt),Nn=s(vt,"P",{});var Cd=a(Nn);cp=i(Cd,"This tokenizer inherits from "),Ys=s(Cd,"A",{href:!0});var Qf=a(Ys);pp=i(Qf,"PreTrainedTokenizerFast"),Qf.forEach(t),up=i(Cd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Cd.forEach(t),hp=c(vt),gt=s(vt,"DIV",{class:!0});var ka=a(gt);b(Ln.$$.fragment,ka),mp=c(ka),ir=s(ka,"P",{});var Jf=a(ir);fp=i(Jf,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),Jf.forEach(t),gp=c(ka),Gn=s(ka,"UL",{});var jd=a(Gn);ea=s(jd,"LI",{});var Am=a(ea);_p=i(Am,"single sequence: "),dr=s(Am,"CODE",{});var Xf=a(dr);kp=i(Xf,"X </s>"),Xf.forEach(t),Am.forEach(t),vp=c(jd),Dn=s(jd,"LI",{});var Sd=a(Dn);yp=i(Sd,"pair of sequences: "),lr=s(Sd,"CODE",{});var Zf=a(lr);bp=i(Zf,"A B </s>"),Zf.forEach(t),Tp=i(Sd," (not intended use)"),Sd.forEach(t),jd.forEach(t),ka.forEach(t),wp=c(vt),fo=s(vt,"DIV",{class:!0});var Od=a(fo);b(Un.$$.fragment,Od),Pp=c(Od),cr=s(Od,"P",{});var Yf=a(cr);$p=i(Yf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Yf.forEach(t),Od.forEach(t),vt.forEach(t),Zi=c(o),Gt=s(o,"H2",{class:!0});var Ad=a(Gt);go=s(Ad,"A",{id:!0,class:!0,href:!0});var eg=a(go);pr=s(eg,"SPAN",{});var tg=a(pr);b(Bn.$$.fragment,tg),tg.forEach(t),eg.forEach(t),xp=c(Ad),ur=s(Ad,"SPAN",{});var og=a(ur);zp=i(og,"PegasusModel"),og.forEach(t),Ad.forEach(t),Yi=c(o),Ae=s(o,"DIV",{class:!0});var Zo=a(Ae);b(Wn.$$.fragment,Zo),Fp=c(Zo),Kn=s(Zo,"P",{});var Id=a(Kn);qp=i(Id,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=s(Id,"A",{href:!0});var ng=a(ta);Ep=i(ng,"PreTrainedModel"),ng.forEach(t),Mp=i(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Cp=c(Zo),Rn=s(Zo,"P",{});var Nd=a(Rn);jp=i(Nd,"This model is also a PyTorch "),Hn=s(Nd,"A",{href:!0,rel:!0});var sg=a(Hn);Sp=i(sg,"torch.nn.Module"),sg.forEach(t),Op=i(Nd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd.forEach(t),Ap=c(Zo),Be=s(Zo,"DIV",{class:!0});var Yo=a(Be);b(Vn.$$.fragment,Yo),Ip=c(Yo),Dt=s(Yo,"P",{});var va=a(Dt);Np=i(va,"The "),oa=s(va,"A",{href:!0});var ag=a(oa);Lp=i(ag,"PegasusModel"),ag.forEach(t),Gp=i(va," forward method, overrides the "),hr=s(va,"CODE",{});var rg=a(hr);Dp=i(rg,"__call__"),rg.forEach(t),Up=i(va," special method."),va.forEach(t),Bp=c(Yo),b(_o.$$.fragment,Yo),Wp=c(Yo),b(ko.$$.fragment,Yo),Yo.forEach(t),Zo.forEach(t),ed=c(o),Ut=s(o,"H2",{class:!0});var Ld=a(Ut);vo=s(Ld,"A",{id:!0,class:!0,href:!0});var ig=a(vo);mr=s(ig,"SPAN",{});var dg=a(mr);b(Qn.$$.fragment,dg),dg.forEach(t),ig.forEach(t),Kp=c(Ld),fr=s(Ld,"SPAN",{});var lg=a(fr);Rp=i(lg,"PegasusForConditionalGeneration"),lg.forEach(t),Ld.forEach(t),td=c(o),Ie=s(o,"DIV",{class:!0});var en=a(Ie);b(Jn.$$.fragment,en),Hp=c(en),Xn=s(en,"P",{});var Gd=a(Xn);Vp=i(Gd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),na=s(Gd,"A",{href:!0});var cg=a(na);Qp=i(cg,"PreTrainedModel"),cg.forEach(t),Jp=i(Gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gd.forEach(t),Xp=c(en),Zn=s(en,"P",{});var Dd=a(Zn);Zp=i(Dd,"This model is also a PyTorch "),Yn=s(Dd,"A",{href:!0,rel:!0});var pg=a(Yn);Yp=i(pg,"torch.nn.Module"),pg.forEach(t),eu=i(Dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd.forEach(t),tu=c(en),We=s(en,"DIV",{class:!0});var tn=a(We);b(es.$$.fragment,tn),ou=c(tn),Bt=s(tn,"P",{});var ya=a(Bt);nu=i(ya,"The "),sa=s(ya,"A",{href:!0});var ug=a(sa);su=i(ug,"PegasusForConditionalGeneration"),ug.forEach(t),au=i(ya," forward method, overrides the "),gr=s(ya,"CODE",{});var hg=a(gr);ru=i(hg,"__call__"),hg.forEach(t),iu=i(ya," special method."),ya.forEach(t),du=c(tn),b(yo.$$.fragment,tn),lu=c(tn),b(bo.$$.fragment,tn),tn.forEach(t),en.forEach(t),od=c(o),Wt=s(o,"H2",{class:!0});var Ud=a(Wt);To=s(Ud,"A",{id:!0,class:!0,href:!0});var mg=a(To);_r=s(mg,"SPAN",{});var fg=a(_r);b(ts.$$.fragment,fg),fg.forEach(t),mg.forEach(t),cu=c(Ud),kr=s(Ud,"SPAN",{});var gg=a(kr);pu=i(gg,"PegasusForCausalLM"),gg.forEach(t),Ud.forEach(t),nd=c(o),Kt=s(o,"DIV",{class:!0});var Bd=a(Kt);b(os.$$.fragment,Bd),uu=c(Bd),wo=s(Bd,"DIV",{class:!0});var Wd=a(wo);b(ns.$$.fragment,Wd),hu=c(Wd),b(Po.$$.fragment,Wd),Wd.forEach(t),Bd.forEach(t),sd=c(o),Rt=s(o,"H2",{class:!0});var Kd=a(Rt);$o=s(Kd,"A",{id:!0,class:!0,href:!0});var _g=a($o);vr=s(_g,"SPAN",{});var kg=a(vr);b(ss.$$.fragment,kg),kg.forEach(t),_g.forEach(t),mu=c(Kd),yr=s(Kd,"SPAN",{});var vg=a(yr);fu=i(vg,"TFPegasusModel"),vg.forEach(t),Kd.forEach(t),ad=c(o),ye=s(o,"DIV",{class:!0});var yt=a(ye);b(as.$$.fragment,yt),gu=c(yt),rs=s(yt,"P",{});var Rd=a(rs);_u=i(Rd,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),aa=s(Rd,"A",{href:!0});var yg=a(aa);ku=i(yg,"TFPreTrainedModel"),yg.forEach(t),vu=i(Rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rd.forEach(t),yu=c(yt),is=s(yt,"P",{});var Hd=a(is);bu=i(Hd,"This model is also a "),ds=s(Hd,"A",{href:!0,rel:!0});var bg=a(ds);Tu=i(bg,"tf.keras.Model"),bg.forEach(t),wu=i(Hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hd.forEach(t),Pu=c(yt),b(xo.$$.fragment,yt),$u=c(yt),Ke=s(yt,"DIV",{class:!0});var on=a(Ke);b(ls.$$.fragment,on),xu=c(on),Ht=s(on,"P",{});var ba=a(Ht);zu=i(ba,"The "),ra=s(ba,"A",{href:!0});var Tg=a(ra);Fu=i(Tg,"TFPegasusModel"),Tg.forEach(t),qu=i(ba," forward method, overrides the "),br=s(ba,"CODE",{});var wg=a(br);Eu=i(wg,"__call__"),wg.forEach(t),Mu=i(ba," special method."),ba.forEach(t),Cu=c(on),b(zo.$$.fragment,on),ju=c(on),b(Fo.$$.fragment,on),on.forEach(t),yt.forEach(t),rd=c(o),Vt=s(o,"H2",{class:!0});var Vd=a(Vt);qo=s(Vd,"A",{id:!0,class:!0,href:!0});var Pg=a(qo);Tr=s(Pg,"SPAN",{});var $g=a(Tr);b(cs.$$.fragment,$g),$g.forEach(t),Pg.forEach(t),Su=c(Vd),wr=s(Vd,"SPAN",{});var xg=a(wr);Ou=i(xg,"TFPegasusForConditionalGeneration"),xg.forEach(t),Vd.forEach(t),id=c(o),be=s(o,"DIV",{class:!0});var bt=a(be);b(ps.$$.fragment,bt),Au=c(bt),us=s(bt,"P",{});var Qd=a(us);Iu=i(Qd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=s(Qd,"A",{href:!0});var zg=a(ia);Nu=i(zg,"TFPreTrainedModel"),zg.forEach(t),Lu=i(Qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd.forEach(t),Gu=c(bt),hs=s(bt,"P",{});var Jd=a(hs);Du=i(Jd,"This model is also a "),ms=s(Jd,"A",{href:!0,rel:!0});var Fg=a(ms);Uu=i(Fg,"tf.keras.Model"),Fg.forEach(t),Bu=i(Jd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jd.forEach(t),Wu=c(bt),b(Eo.$$.fragment,bt),Ku=c(bt),Re=s(bt,"DIV",{class:!0});var nn=a(Re);b(fs.$$.fragment,nn),Ru=c(nn),Qt=s(nn,"P",{});var Ta=a(Qt);Hu=i(Ta,"The "),da=s(Ta,"A",{href:!0});var qg=a(da);Vu=i(qg,"TFPegasusForConditionalGeneration"),qg.forEach(t),Qu=i(Ta," forward method, overrides the "),Pr=s(Ta,"CODE",{});var Eg=a(Pr);Ju=i(Eg,"__call__"),Eg.forEach(t),Xu=i(Ta," special method."),Ta.forEach(t),Zu=c(nn),b(Mo.$$.fragment,nn),Yu=c(nn),b(Co.$$.fragment,nn),nn.forEach(t),bt.forEach(t),dd=c(o),Jt=s(o,"H2",{class:!0});var Xd=a(Jt);jo=s(Xd,"A",{id:!0,class:!0,href:!0});var Mg=a(jo);$r=s(Mg,"SPAN",{});var Cg=a($r);b(gs.$$.fragment,Cg),Cg.forEach(t),Mg.forEach(t),eh=c(Xd),xr=s(Xd,"SPAN",{});var jg=a(xr);th=i(jg,"FlaxPegasusModel"),jg.forEach(t),Xd.forEach(t),ld=c(o),U=s(o,"DIV",{class:!0});var ae=a(U);b(_s.$$.fragment,ae),oh=c(ae),ks=s(ae,"P",{});var Zd=a(ks);nh=i(Zd,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),la=s(Zd,"A",{href:!0});var Sg=a(la);sh=i(Sg,"FlaxPreTrainedModel"),Sg.forEach(t),ah=i(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),rh=c(ae),vs=s(ae,"P",{});var Yd=a(vs);ih=i(Yd,`This model is also a Flax Linen
`),ys=s(Yd,"A",{href:!0,rel:!0});var Og=a(ys);dh=i(Og,"flax.nn.Module"),Og.forEach(t),lh=i(Yd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yd.forEach(t),ch=c(ae),zr=s(ae,"P",{});var Ag=a(zr);ph=i(Ag,"Finally, this model supports inherent JAX features such as:"),Ag.forEach(t),uh=c(ae),ct=s(ae,"UL",{});var sn=a(ct);Fr=s(sn,"LI",{});var Ig=a(Fr);bs=s(Ig,"A",{href:!0,rel:!0});var Ng=a(bs);hh=i(Ng,"Just-In-Time (JIT) compilation"),Ng.forEach(t),Ig.forEach(t),mh=c(sn),qr=s(sn,"LI",{});var Lg=a(qr);Ts=s(Lg,"A",{href:!0,rel:!0});var Gg=a(Ts);fh=i(Gg,"Automatic Differentiation"),Gg.forEach(t),Lg.forEach(t),gh=c(sn),Er=s(sn,"LI",{});var Dg=a(Er);ws=s(Dg,"A",{href:!0,rel:!0});var Ug=a(ws);_h=i(Ug,"Vectorization"),Ug.forEach(t),Dg.forEach(t),kh=c(sn),Mr=s(sn,"LI",{});var Bg=a(Mr);Ps=s(Bg,"A",{href:!0,rel:!0});var Wg=a(Ps);vh=i(Wg,"Parallelization"),Wg.forEach(t),Bg.forEach(t),sn.forEach(t),yh=c(ae),He=s(ae,"DIV",{class:!0});var an=a(He);b($s.$$.fragment,an),bh=c(an),Xt=s(an,"P",{});var wa=a(Xt);Th=i(wa,"The "),Cr=s(wa,"CODE",{});var Kg=a(Cr);wh=i(Kg,"FlaxPegasusPreTrainedModel"),Kg.forEach(t),Ph=i(wa," forward method, overrides the "),jr=s(wa,"CODE",{});var Rg=a(jr);$h=i(Rg,"__call__"),Rg.forEach(t),xh=i(wa," special method."),wa.forEach(t),zh=c(an),b(So.$$.fragment,an),Fh=c(an),b(Oo.$$.fragment,an),an.forEach(t),qh=c(ae),Ao=s(ae,"DIV",{class:!0});var el=a(Ao);b(xs.$$.fragment,el),Eh=c(el),b(Io.$$.fragment,el),el.forEach(t),Mh=c(ae),No=s(ae,"DIV",{class:!0});var tl=a(No);b(zs.$$.fragment,tl),Ch=c(tl),b(Lo.$$.fragment,tl),tl.forEach(t),ae.forEach(t),cd=c(o),Zt=s(o,"H2",{class:!0});var ol=a(Zt);Go=s(ol,"A",{id:!0,class:!0,href:!0});var Hg=a(Go);Sr=s(Hg,"SPAN",{});var Vg=a(Sr);b(Fs.$$.fragment,Vg),Vg.forEach(t),Hg.forEach(t),jh=c(ol),Or=s(ol,"SPAN",{});var Qg=a(Or);Sh=i(Qg,"FlaxPegasusForConditionalGeneration"),Qg.forEach(t),ol.forEach(t),pd=c(o),B=s(o,"DIV",{class:!0});var re=a(B);b(qs.$$.fragment,re),Oh=c(re),Es=s(re,"P",{});var nl=a(Es);Ah=i(nl,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ca=s(nl,"A",{href:!0});var Jg=a(ca);Ih=i(Jg,"FlaxPreTrainedModel"),Jg.forEach(t),Nh=i(nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nl.forEach(t),Lh=c(re),Ms=s(re,"P",{});var sl=a(Ms);Gh=i(sl,`This model is also a Flax Linen
`),Cs=s(sl,"A",{href:!0,rel:!0});var Xg=a(Cs);Dh=i(Xg,"flax.nn.Module"),Xg.forEach(t),Uh=i(sl,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sl.forEach(t),Bh=c(re),Ar=s(re,"P",{});var Zg=a(Ar);Wh=i(Zg,"Finally, this model supports inherent JAX features such as:"),Zg.forEach(t),Kh=c(re),pt=s(re,"UL",{});var rn=a(pt);Ir=s(rn,"LI",{});var Yg=a(Ir);js=s(Yg,"A",{href:!0,rel:!0});var e_=a(js);Rh=i(e_,"Just-In-Time (JIT) compilation"),e_.forEach(t),Yg.forEach(t),Hh=c(rn),Nr=s(rn,"LI",{});var t_=a(Nr);Ss=s(t_,"A",{href:!0,rel:!0});var o_=a(Ss);Vh=i(o_,"Automatic Differentiation"),o_.forEach(t),t_.forEach(t),Qh=c(rn),Lr=s(rn,"LI",{});var n_=a(Lr);Os=s(n_,"A",{href:!0,rel:!0});var s_=a(Os);Jh=i(s_,"Vectorization"),s_.forEach(t),n_.forEach(t),Xh=c(rn),Gr=s(rn,"LI",{});var a_=a(Gr);As=s(a_,"A",{href:!0,rel:!0});var r_=a(As);Zh=i(r_,"Parallelization"),r_.forEach(t),a_.forEach(t),rn.forEach(t),Yh=c(re),C=s(re,"DIV",{class:!0});var O=a(C);b(Is.$$.fragment,O),em=c(O),Yt=s(O,"P",{});var Pa=a(Yt);tm=i(Pa,"The "),Dr=s(Pa,"CODE",{});var i_=a(Dr);om=i(i_,"FlaxPegasusPreTrainedModel"),i_.forEach(t),nm=i(Pa," forward method, overrides the "),Ur=s(Pa,"CODE",{});var d_=a(Ur);sm=i(d_,"__call__"),d_.forEach(t),am=i(Pa," special method."),Pa.forEach(t),rm=c(O),b(Do.$$.fragment,O),im=c(O),Br=s(O,"P",{});var l_=a(Br);dm=i(l_,"Summarization example:"),l_.forEach(t),lm=c(O),Wr=s(O,"BLOCKQUOTE",{});var c_=a(Wr);Kr=s(c_,"BLOCKQUOTE",{});var p_=a(Kr);Rr=s(p_,"BLOCKQUOTE",{});var u_=a(Rr);Hr=s(u_,"P",{});var h_=a(Hr);cm=i(h_,"from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),h_.forEach(t),u_.forEach(t),p_.forEach(t),c_.forEach(t),pm=c(O),Vr=s(O,"BLOCKQUOTE",{});var m_=a(Vr);Qr=s(m_,"BLOCKQUOTE",{});var f_=a(Qr);Jr=s(f_,"BLOCKQUOTE",{});var g_=a(Jr);Xr=s(g_,"P",{});var __=a(Xr);um=i(__,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),__.forEach(t),g_.forEach(t),f_.forEach(t),m_.forEach(t),hm=c(O),Zr=s(O,"BLOCKQUOTE",{});var k_=a(Zr);Yr=s(k_,"BLOCKQUOTE",{});var v_=a(Yr);ei=s(v_,"BLOCKQUOTE",{});var y_=a(ei);ti=s(y_,"P",{});var b_=a(ti);mm=i(b_,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),b_.forEach(t),y_.forEach(t),v_.forEach(t),k_.forEach(t),fm=c(O),oi=s(O,"BLOCKQUOTE",{});var T_=a(oi);ni=s(T_,"BLOCKQUOTE",{});var w_=a(ni);Ns=s(w_,"BLOCKQUOTE",{});var al=a(Ns);Uo=s(al,"H1",{class:!0});var rl=a(Uo);Bo=s(rl,"A",{id:!0,class:!0,href:!0});var P_=a(Bo);si=s(P_,"SPAN",{});var $_=a(si);b(Ls.$$.fragment,$_),$_.forEach(t),P_.forEach(t),gm=c(rl),ai=s(rl,"SPAN",{});var x_=a(ai);_m=i(x_,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),x_.forEach(t),rl.forEach(t),km=c(al),ri=s(al,"P",{});var z_=a(ri);vm=i(z_,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),z_.forEach(t),al.forEach(t),w_.forEach(t),T_.forEach(t),ym=c(O),ii=s(O,"P",{});var F_=a(ii);bm=i(F_,"Mask filling example:"),F_.forEach(t),Tm=c(O),di=s(O,"BLOCKQUOTE",{});var q_=a(di);li=s(q_,"BLOCKQUOTE",{});var E_=a(li);ci=s(E_,"BLOCKQUOTE",{});var M_=a(ci);pi=s(M_,"P",{});var C_=a(pi);wm=i(C_,`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),C_.forEach(t),M_.forEach(t),E_.forEach(t),q_.forEach(t),Pm=c(O),ui=s(O,"BLOCKQUOTE",{});var j_=a(ui);hi=s(j_,"BLOCKQUOTE",{});var S_=a(hi);mi=s(S_,"BLOCKQUOTE",{});var O_=a(mi);fi=s(O_,"P",{});var A_=a(fi);$m=i(A_,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),A_.forEach(t),O_.forEach(t),S_.forEach(t),j_.forEach(t),xm=c(O),gi=s(O,"BLOCKQUOTE",{});var I_=a(gi);_i=s(I_,"BLOCKQUOTE",{});var N_=a(_i);ki=s(N_,"BLOCKQUOTE",{});var L_=a(ki);vi=s(L_,"P",{});var G_=a(vi);zm=i(G_,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),G_.forEach(t),L_.forEach(t),N_.forEach(t),I_.forEach(t),Fm=c(O),yi=s(O,"BLOCKQUOTE",{});var D_=a(yi);bi=s(D_,"BLOCKQUOTE",{});var U_=a(bi);Ti=s(U_,"BLOCKQUOTE",{});var B_=a(Ti);wi=s(B_,"P",{});var W_=a(wi);qm=i(W_,"tokenizer.decode(predictions).split()"),W_.forEach(t),B_.forEach(t),U_.forEach(t),D_.forEach(t),O.forEach(t),Em=c(re),Wo=s(re,"DIV",{class:!0});var il=a(Wo);b(Gs.$$.fragment,il),Mm=c(il),b(Ko.$$.fragment,il),il.forEach(t),Cm=c(re),Ro=s(re,"DIV",{class:!0});var dl=a(Ro);b(Ds.$$.fragment,dl),jm=c(dl),b(Ho.$$.fragment,dl),dl.forEach(t),re.forEach(t),this.h()},h(){p(u,"name","hf:doc:metadata"),p(u,"content",JSON.stringify(gk)),p(m,"id","pegasus"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#pegasus"),p(_,"class","relative group"),p(ie,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),p(ie,"rel","nofollow"),p(ee,"id","overview"),p(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ee,"href","#overview"),p(G,"class","relative group"),p(pe,"href","https://arxiv.org/pdf/1912.08777.pdf"),p(pe,"rel","nofollow"),p(he,"href","https://huggingface.co/sshleifer"),p(he,"rel","nofollow"),p(fe,"href","https://github.com/google-research/pegasus"),p(fe,"rel","nofollow"),p(V,"id","checkpoints"),p(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(V,"href","#checkpoints"),p(J,"class","relative group"),p(X,"href","https://huggingface.co/models?search=pegasus"),p(X,"rel","nofollow"),p(Se,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),p(Se,"rel","nofollow"),p(ln,"href","https://huggingface.co/models?search=distill-pegasus"),p(ln,"rel","nofollow"),p(cn,"href","https://arxiv.org/abs/2010.13002"),p(cn,"rel","nofollow"),p(oo,"id","examples"),p(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oo,"href","#examples"),p(qt,"class","relative group"),p(un,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),p(un,"rel","nofollow"),p(hn,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),p(hn,"rel","nofollow"),p(so,"id","implementation-notes"),p(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(so,"href","#implementation-notes"),p(Et,"class","relative group"),p(Hs,"href","/docs/transformers/v4.24.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(_n,"href","https://github.com/google-research/pegasus"),p(_n,"rel","nofollow"),p(ao,"id","usage-example"),p(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ao,"href","#usage-example"),p(jt,"class","relative group"),p(ro,"id","transformers.PegasusConfig"),p(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ro,"href","#transformers.PegasusConfig"),p(St,"class","relative group"),p(Vs,"href","/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusModel"),p(Tn,"href","https://huggingface.co/google/pegasus-large"),p(Tn,"rel","nofollow"),p(Qs,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),p(Js,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),p(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(lo,"id","transformers.PegasusTokenizer"),p(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(lo,"href","#transformers.PegasusTokenizer"),p(It,"class","relative group"),p(xn,"href","https://github.com/google/sentencepiece"),p(xn,"rel","nofollow"),p(Xs,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(mo,"id","transformers.PegasusTokenizerFast"),p(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(mo,"href","#transformers.PegasusTokenizerFast"),p(Nt,"class","relative group"),p(In,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),p(In,"rel","nofollow"),p(Ys,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(go,"id","transformers.PegasusModel"),p(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(go,"href","#transformers.PegasusModel"),p(Gt,"class","relative group"),p(ta,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),p(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Hn,"rel","nofollow"),p(oa,"href","/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusModel"),p(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vo,"id","transformers.PegasusForConditionalGeneration"),p(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(vo,"href","#transformers.PegasusForConditionalGeneration"),p(Ut,"class","relative group"),p(na,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),p(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Yn,"rel","nofollow"),p(sa,"href","/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),p(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(To,"id","transformers.PegasusForCausalLM"),p(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(To,"href","#transformers.PegasusForCausalLM"),p(Wt,"class","relative group"),p(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($o,"id","transformers.TFPegasusModel"),p($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($o,"href","#transformers.TFPegasusModel"),p(Rt,"class","relative group"),p(aa,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),p(ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(ds,"rel","nofollow"),p(ra,"href","/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.TFPegasusModel"),p(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(qo,"id","transformers.TFPegasusForConditionalGeneration"),p(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qo,"href","#transformers.TFPegasusForConditionalGeneration"),p(Vt,"class","relative group"),p(ia,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),p(ms,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(ms,"rel","nofollow"),p(da,"href","/docs/transformers/v4.24.0/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),p(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(jo,"id","transformers.FlaxPegasusModel"),p(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(jo,"href","#transformers.FlaxPegasusModel"),p(Jt,"class","relative group"),p(la,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(ys,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(ys,"rel","nofollow"),p(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(bs,"rel","nofollow"),p(Ts,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Ts,"rel","nofollow"),p(ws,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(ws,"rel","nofollow"),p(Ps,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Ps,"rel","nofollow"),p(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Go,"id","transformers.FlaxPegasusForConditionalGeneration"),p(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Go,"href","#transformers.FlaxPegasusForConditionalGeneration"),p(Zt,"class","relative group"),p(ca,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(Cs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(Cs,"rel","nofollow"),p(js,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(js,"rel","nofollow"),p(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Ss,"rel","nofollow"),p(Os,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Os,"rel","nofollow"),p(As,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(As,"rel","nofollow"),p(Bo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),p(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Bo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),p(Uo,"class","relative group"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,u),f(o,v,g),f(o,_,g),e(_,m),e(m,k),T(d,k,null),e(_,h),e(_,E),e(E,Qe),f(o,Ne,g),f(o,L,g),e(L,Pe),e(Pe,$e),e(L,q),e(L,ie),e(ie,de),e(L,Je),f(o,Le,g),f(o,G,g),e(G,ee),e(ee,xe),T(K,xe,null),e(G,Xe),e(G,ze),e(ze,le),f(o,Ge,g),f(o,te,g),e(te,ce),e(te,pe),e(pe,Ze),e(te,Fe),f(o,S,g),f(o,A,g),e(A,Ye),f(o,oe,g),f(o,ne,g),e(ne,qe),e(qe,ue),e(ne,et),e(ne,Ee),e(Ee,D),f(o,De,g),f(o,N,g),e(N,tt),e(N,he),e(he,me),e(N,ot),e(N,fe),e(fe,Q),e(N,nt),f(o,se,g),f(o,J,g),e(J,V),e(V,I),T(ge,I,null),e(J,R),e(J,Me),e(Me,st),f(o,x,g),f(o,F,g),e(F,Tt),e(F,X),e(X,wt),e(F,Pt),e(F,M),e(M,$t),e(F,xt),f(o,mt,g),f(o,W,g),e(W,at),e(at,Z),e(W,_e),e(W,rt),e(rt,zt),e(W,ke),e(W,it),e(it,Ft),e(W,dt),e(W,Ce),e(Ce,je),e(Ce,Se),e(Se,ll),e(Ce,cl),e(W,pl),e(W,to),e(to,ln),e(ln,ul),e(to,hl),e(to,cn),e(cn,ml),e(to,fl),f(o,Li,g),f(o,qt,g),e(qt,oo),e(oo,$a),T(pn,$a,null),e(qt,gl),e(qt,xa),e(xa,_l),f(o,Gi,g),f(o,ft,g),e(ft,no),e(no,un),e(un,kl),e(no,vl),e(no,hn),e(hn,yl),e(no,bl),e(ft,Tl),e(ft,za),e(za,wl),e(ft,Pl),e(ft,Fa),e(Fa,$l),f(o,Di,g),f(o,Et,g),e(Et,so),e(so,qa),T(mn,qa,null),e(Et,xl),e(Et,Ea),e(Ea,zl),f(o,Ui,g),f(o,Te,g),e(Te,Ma),e(Ma,Ca),e(Ca,Fl),e(Te,ql),e(Te,ja),e(ja,Rs),e(Rs,El),e(Rs,Hs),e(Hs,Ml),e(Te,Cl),e(Te,fn),e(fn,Sa),e(Sa,jl),e(fn,Sl),e(fn,Mt),e(Mt,Oa),e(Oa,Ol),e(Mt,Al),e(Mt,Aa),e(Aa,Il),e(Mt,Nl),e(Mt,gn),e(gn,Ll),e(gn,Ia),e(Ia,Gl),e(gn,Dl),e(Te,Ul),e(Te,Na),e(Na,lt),e(lt,Bl),e(lt,La),e(La,Wl),e(lt,Kl),e(lt,Ga),e(Ga,Rl),e(lt,Hl),e(lt,Da),e(Da,Vl),e(lt,Ql),e(Te,Jl),e(Te,Ua),e(Ua,Ct),e(Ct,Xl),e(Ct,_n),e(_n,Zl),e(Ct,Yl),e(Ct,Ba),e(Ba,ec),e(Ct,tc),f(o,Bi,g),f(o,jt,g),e(jt,ao),e(ao,Wa),T(kn,Wa,null),e(jt,oc),e(jt,Ka),e(Ka,nc),f(o,Wi,g),T(vn,o,g),f(o,Ki,g),f(o,St,g),e(St,ro),e(ro,Ra),T(yn,Ra,null),e(St,sc),e(St,Ha),e(Ha,ac),f(o,Ri,g),f(o,Oe,g),T(bn,Oe,null),e(Oe,rc),e(Oe,Ot),e(Ot,ic),e(Ot,Vs),e(Vs,dc),e(Ot,lc),e(Ot,Tn),e(Tn,cc),e(Ot,pc),e(Oe,uc),e(Oe,At),e(At,hc),e(At,Qs),e(Qs,mc),e(At,fc),e(At,Js),e(Js,gc),e(At,_c),e(Oe,kc),T(io,Oe,null),f(o,Hi,g),f(o,It,g),e(It,lo),e(lo,Va),T(wn,Va,null),e(It,vc),e(It,Qa),e(Qa,yc),f(o,Vi,g),f(o,co,g),e(co,bc),e(co,Ja),e(Ja,Tc),e(co,wc),f(o,Qi,g),f(o,H,g),T(Pn,H,null),e(H,Pc),e(H,$n),e($n,$c),e($n,xn),e(xn,xc),e($n,zc),e(H,Fc),e(H,zn),e(zn,qc),e(zn,Xs),e(Xs,Ec),e(zn,Mc),e(H,Cc),e(H,Ue),T(Fn,Ue,null),e(Ue,jc),e(Ue,qn),e(qn,Sc),e(qn,Xa),e(Xa,Oc),e(qn,Ac),e(Ue,Ic),e(Ue,En),e(En,Zs),e(Zs,Nc),e(Zs,Za),e(Za,Lc),e(En,Gc),e(En,Mn),e(Mn,Dc),e(Mn,Ya),e(Ya,Uc),e(Mn,Bc),e(Ue,Wc),e(Ue,er),e(er,Kc),e(H,Rc),e(H,po),T(Cn,po,null),e(po,Hc),e(po,tr),e(tr,Vc),e(H,Qc),e(H,uo),T(jn,uo,null),e(uo,Jc),e(uo,or),e(or,Xc),e(H,Zc),e(H,ho),T(Sn,ho,null),e(ho,Yc),e(ho,nr),e(nr,ep),f(o,Ji,g),f(o,Nt,g),e(Nt,mo),e(mo,sr),T(On,sr,null),e(Nt,tp),e(Nt,ar),e(ar,op),f(o,Xi,g),f(o,ve,g),T(An,ve,null),e(ve,np),e(ve,Lt),e(Lt,sp),e(Lt,rr),e(rr,ap),e(Lt,rp),e(Lt,In),e(In,ip),e(Lt,dp),e(ve,lp),e(ve,Nn),e(Nn,cp),e(Nn,Ys),e(Ys,pp),e(Nn,up),e(ve,hp),e(ve,gt),T(Ln,gt,null),e(gt,mp),e(gt,ir),e(ir,fp),e(gt,gp),e(gt,Gn),e(Gn,ea),e(ea,_p),e(ea,dr),e(dr,kp),e(Gn,vp),e(Gn,Dn),e(Dn,yp),e(Dn,lr),e(lr,bp),e(Dn,Tp),e(ve,wp),e(ve,fo),T(Un,fo,null),e(fo,Pp),e(fo,cr),e(cr,$p),f(o,Zi,g),f(o,Gt,g),e(Gt,go),e(go,pr),T(Bn,pr,null),e(Gt,xp),e(Gt,ur),e(ur,zp),f(o,Yi,g),f(o,Ae,g),T(Wn,Ae,null),e(Ae,Fp),e(Ae,Kn),e(Kn,qp),e(Kn,ta),e(ta,Ep),e(Kn,Mp),e(Ae,Cp),e(Ae,Rn),e(Rn,jp),e(Rn,Hn),e(Hn,Sp),e(Rn,Op),e(Ae,Ap),e(Ae,Be),T(Vn,Be,null),e(Be,Ip),e(Be,Dt),e(Dt,Np),e(Dt,oa),e(oa,Lp),e(Dt,Gp),e(Dt,hr),e(hr,Dp),e(Dt,Up),e(Be,Bp),T(_o,Be,null),e(Be,Wp),T(ko,Be,null),f(o,ed,g),f(o,Ut,g),e(Ut,vo),e(vo,mr),T(Qn,mr,null),e(Ut,Kp),e(Ut,fr),e(fr,Rp),f(o,td,g),f(o,Ie,g),T(Jn,Ie,null),e(Ie,Hp),e(Ie,Xn),e(Xn,Vp),e(Xn,na),e(na,Qp),e(Xn,Jp),e(Ie,Xp),e(Ie,Zn),e(Zn,Zp),e(Zn,Yn),e(Yn,Yp),e(Zn,eu),e(Ie,tu),e(Ie,We),T(es,We,null),e(We,ou),e(We,Bt),e(Bt,nu),e(Bt,sa),e(sa,su),e(Bt,au),e(Bt,gr),e(gr,ru),e(Bt,iu),e(We,du),T(yo,We,null),e(We,lu),T(bo,We,null),f(o,od,g),f(o,Wt,g),e(Wt,To),e(To,_r),T(ts,_r,null),e(Wt,cu),e(Wt,kr),e(kr,pu),f(o,nd,g),f(o,Kt,g),T(os,Kt,null),e(Kt,uu),e(Kt,wo),T(ns,wo,null),e(wo,hu),T(Po,wo,null),f(o,sd,g),f(o,Rt,g),e(Rt,$o),e($o,vr),T(ss,vr,null),e(Rt,mu),e(Rt,yr),e(yr,fu),f(o,ad,g),f(o,ye,g),T(as,ye,null),e(ye,gu),e(ye,rs),e(rs,_u),e(rs,aa),e(aa,ku),e(rs,vu),e(ye,yu),e(ye,is),e(is,bu),e(is,ds),e(ds,Tu),e(is,wu),e(ye,Pu),T(xo,ye,null),e(ye,$u),e(ye,Ke),T(ls,Ke,null),e(Ke,xu),e(Ke,Ht),e(Ht,zu),e(Ht,ra),e(ra,Fu),e(Ht,qu),e(Ht,br),e(br,Eu),e(Ht,Mu),e(Ke,Cu),T(zo,Ke,null),e(Ke,ju),T(Fo,Ke,null),f(o,rd,g),f(o,Vt,g),e(Vt,qo),e(qo,Tr),T(cs,Tr,null),e(Vt,Su),e(Vt,wr),e(wr,Ou),f(o,id,g),f(o,be,g),T(ps,be,null),e(be,Au),e(be,us),e(us,Iu),e(us,ia),e(ia,Nu),e(us,Lu),e(be,Gu),e(be,hs),e(hs,Du),e(hs,ms),e(ms,Uu),e(hs,Bu),e(be,Wu),T(Eo,be,null),e(be,Ku),e(be,Re),T(fs,Re,null),e(Re,Ru),e(Re,Qt),e(Qt,Hu),e(Qt,da),e(da,Vu),e(Qt,Qu),e(Qt,Pr),e(Pr,Ju),e(Qt,Xu),e(Re,Zu),T(Mo,Re,null),e(Re,Yu),T(Co,Re,null),f(o,dd,g),f(o,Jt,g),e(Jt,jo),e(jo,$r),T(gs,$r,null),e(Jt,eh),e(Jt,xr),e(xr,th),f(o,ld,g),f(o,U,g),T(_s,U,null),e(U,oh),e(U,ks),e(ks,nh),e(ks,la),e(la,sh),e(ks,ah),e(U,rh),e(U,vs),e(vs,ih),e(vs,ys),e(ys,dh),e(vs,lh),e(U,ch),e(U,zr),e(zr,ph),e(U,uh),e(U,ct),e(ct,Fr),e(Fr,bs),e(bs,hh),e(ct,mh),e(ct,qr),e(qr,Ts),e(Ts,fh),e(ct,gh),e(ct,Er),e(Er,ws),e(ws,_h),e(ct,kh),e(ct,Mr),e(Mr,Ps),e(Ps,vh),e(U,yh),e(U,He),T($s,He,null),e(He,bh),e(He,Xt),e(Xt,Th),e(Xt,Cr),e(Cr,wh),e(Xt,Ph),e(Xt,jr),e(jr,$h),e(Xt,xh),e(He,zh),T(So,He,null),e(He,Fh),T(Oo,He,null),e(U,qh),e(U,Ao),T(xs,Ao,null),e(Ao,Eh),T(Io,Ao,null),e(U,Mh),e(U,No),T(zs,No,null),e(No,Ch),T(Lo,No,null),f(o,cd,g),f(o,Zt,g),e(Zt,Go),e(Go,Sr),T(Fs,Sr,null),e(Zt,jh),e(Zt,Or),e(Or,Sh),f(o,pd,g),f(o,B,g),T(qs,B,null),e(B,Oh),e(B,Es),e(Es,Ah),e(Es,ca),e(ca,Ih),e(Es,Nh),e(B,Lh),e(B,Ms),e(Ms,Gh),e(Ms,Cs),e(Cs,Dh),e(Ms,Uh),e(B,Bh),e(B,Ar),e(Ar,Wh),e(B,Kh),e(B,pt),e(pt,Ir),e(Ir,js),e(js,Rh),e(pt,Hh),e(pt,Nr),e(Nr,Ss),e(Ss,Vh),e(pt,Qh),e(pt,Lr),e(Lr,Os),e(Os,Jh),e(pt,Xh),e(pt,Gr),e(Gr,As),e(As,Zh),e(B,Yh),e(B,C),T(Is,C,null),e(C,em),e(C,Yt),e(Yt,tm),e(Yt,Dr),e(Dr,om),e(Yt,nm),e(Yt,Ur),e(Ur,sm),e(Yt,am),e(C,rm),T(Do,C,null),e(C,im),e(C,Br),e(Br,dm),e(C,lm),e(C,Wr),e(Wr,Kr),e(Kr,Rr),e(Rr,Hr),e(Hr,cm),e(C,pm),e(C,Vr),e(Vr,Qr),e(Qr,Jr),e(Jr,Xr),e(Xr,um),e(C,hm),e(C,Zr),e(Zr,Yr),e(Yr,ei),e(ei,ti),e(ti,mm),e(C,fm),e(C,oi),e(oi,ni),e(ni,Ns),e(Ns,Uo),e(Uo,Bo),e(Bo,si),T(Ls,si,null),e(Uo,gm),e(Uo,ai),e(ai,_m),e(Ns,km),e(Ns,ri),e(ri,vm),e(C,ym),e(C,ii),e(ii,bm),e(C,Tm),e(C,di),e(di,li),e(li,ci),e(ci,pi),e(pi,wm),e(C,Pm),e(C,ui),e(ui,hi),e(hi,mi),e(mi,fi),e(fi,$m),e(C,xm),e(C,gi),e(gi,_i),e(_i,ki),e(ki,vi),e(vi,zm),e(C,Fm),e(C,yi),e(yi,bi),e(bi,Ti),e(Ti,wi),e(wi,qm),e(B,Em),e(B,Wo),T(Gs,Wo,null),e(Wo,Mm),T(Ko,Wo,null),e(B,Cm),e(B,Ro),T(Ds,Ro,null),e(Ro,jm),T(Ho,Ro,null),ud=!0},p(o,[g]){const Us={};g&2&&(Us.$$scope={dirty:g,ctx:o}),io.$set(Us);const Pi={};g&2&&(Pi.$$scope={dirty:g,ctx:o}),_o.$set(Pi);const $i={};g&2&&($i.$$scope={dirty:g,ctx:o}),ko.$set($i);const xi={};g&2&&(xi.$$scope={dirty:g,ctx:o}),yo.$set(xi);const Vo={};g&2&&(Vo.$$scope={dirty:g,ctx:o}),bo.$set(Vo);const zi={};g&2&&(zi.$$scope={dirty:g,ctx:o}),Po.$set(zi);const Fi={};g&2&&(Fi.$$scope={dirty:g,ctx:o}),xo.$set(Fi);const Bs={};g&2&&(Bs.$$scope={dirty:g,ctx:o}),zo.$set(Bs);const qi={};g&2&&(qi.$$scope={dirty:g,ctx:o}),Fo.$set(qi);const Ei={};g&2&&(Ei.$$scope={dirty:g,ctx:o}),Eo.$set(Ei);const Mi={};g&2&&(Mi.$$scope={dirty:g,ctx:o}),Mo.$set(Mi);const Ws={};g&2&&(Ws.$$scope={dirty:g,ctx:o}),Co.$set(Ws);const Ci={};g&2&&(Ci.$$scope={dirty:g,ctx:o}),So.$set(Ci);const ji={};g&2&&(ji.$$scope={dirty:g,ctx:o}),Oo.$set(ji);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:o}),Io.$set(Ks);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:o}),Lo.$set(Si);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:o}),Do.$set(Oi);const eo={};g&2&&(eo.$$scope={dirty:g,ctx:o}),Ko.$set(eo);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:o}),Ho.$set(Ai)},i(o){ud||(w(d.$$.fragment,o),w(K.$$.fragment,o),w(ge.$$.fragment,o),w(pn.$$.fragment,o),w(mn.$$.fragment,o),w(kn.$$.fragment,o),w(vn.$$.fragment,o),w(yn.$$.fragment,o),w(bn.$$.fragment,o),w(io.$$.fragment,o),w(wn.$$.fragment,o),w(Pn.$$.fragment,o),w(Fn.$$.fragment,o),w(Cn.$$.fragment,o),w(jn.$$.fragment,o),w(Sn.$$.fragment,o),w(On.$$.fragment,o),w(An.$$.fragment,o),w(Ln.$$.fragment,o),w(Un.$$.fragment,o),w(Bn.$$.fragment,o),w(Wn.$$.fragment,o),w(Vn.$$.fragment,o),w(_o.$$.fragment,o),w(ko.$$.fragment,o),w(Qn.$$.fragment,o),w(Jn.$$.fragment,o),w(es.$$.fragment,o),w(yo.$$.fragment,o),w(bo.$$.fragment,o),w(ts.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(Po.$$.fragment,o),w(ss.$$.fragment,o),w(as.$$.fragment,o),w(xo.$$.fragment,o),w(ls.$$.fragment,o),w(zo.$$.fragment,o),w(Fo.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(Eo.$$.fragment,o),w(fs.$$.fragment,o),w(Mo.$$.fragment,o),w(Co.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w($s.$$.fragment,o),w(So.$$.fragment,o),w(Oo.$$.fragment,o),w(xs.$$.fragment,o),w(Io.$$.fragment,o),w(zs.$$.fragment,o),w(Lo.$$.fragment,o),w(Fs.$$.fragment,o),w(qs.$$.fragment,o),w(Is.$$.fragment,o),w(Do.$$.fragment,o),w(Ls.$$.fragment,o),w(Gs.$$.fragment,o),w(Ko.$$.fragment,o),w(Ds.$$.fragment,o),w(Ho.$$.fragment,o),ud=!0)},o(o){P(d.$$.fragment,o),P(K.$$.fragment,o),P(ge.$$.fragment,o),P(pn.$$.fragment,o),P(mn.$$.fragment,o),P(kn.$$.fragment,o),P(vn.$$.fragment,o),P(yn.$$.fragment,o),P(bn.$$.fragment,o),P(io.$$.fragment,o),P(wn.$$.fragment,o),P(Pn.$$.fragment,o),P(Fn.$$.fragment,o),P(Cn.$$.fragment,o),P(jn.$$.fragment,o),P(Sn.$$.fragment,o),P(On.$$.fragment,o),P(An.$$.fragment,o),P(Ln.$$.fragment,o),P(Un.$$.fragment,o),P(Bn.$$.fragment,o),P(Wn.$$.fragment,o),P(Vn.$$.fragment,o),P(_o.$$.fragment,o),P(ko.$$.fragment,o),P(Qn.$$.fragment,o),P(Jn.$$.fragment,o),P(es.$$.fragment,o),P(yo.$$.fragment,o),P(bo.$$.fragment,o),P(ts.$$.fragment,o),P(os.$$.fragment,o),P(ns.$$.fragment,o),P(Po.$$.fragment,o),P(ss.$$.fragment,o),P(as.$$.fragment,o),P(xo.$$.fragment,o),P(ls.$$.fragment,o),P(zo.$$.fragment,o),P(Fo.$$.fragment,o),P(cs.$$.fragment,o),P(ps.$$.fragment,o),P(Eo.$$.fragment,o),P(fs.$$.fragment,o),P(Mo.$$.fragment,o),P(Co.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P($s.$$.fragment,o),P(So.$$.fragment,o),P(Oo.$$.fragment,o),P(xs.$$.fragment,o),P(Io.$$.fragment,o),P(zs.$$.fragment,o),P(Lo.$$.fragment,o),P(Fs.$$.fragment,o),P(qs.$$.fragment,o),P(Is.$$.fragment,o),P(Do.$$.fragment,o),P(Ls.$$.fragment,o),P(Gs.$$.fragment,o),P(Ko.$$.fragment,o),P(Ds.$$.fragment,o),P(Ho.$$.fragment,o),ud=!1},d(o){t(u),o&&t(v),o&&t(_),$(d),o&&t(Ne),o&&t(L),o&&t(Le),o&&t(G),$(K),o&&t(Ge),o&&t(te),o&&t(S),o&&t(A),o&&t(oe),o&&t(ne),o&&t(De),o&&t(N),o&&t(se),o&&t(J),$(ge),o&&t(x),o&&t(F),o&&t(mt),o&&t(W),o&&t(Li),o&&t(qt),$(pn),o&&t(Gi),o&&t(ft),o&&t(Di),o&&t(Et),$(mn),o&&t(Ui),o&&t(Te),o&&t(Bi),o&&t(jt),$(kn),o&&t(Wi),$(vn,o),o&&t(Ki),o&&t(St),$(yn),o&&t(Ri),o&&t(Oe),$(bn),$(io),o&&t(Hi),o&&t(It),$(wn),o&&t(Vi),o&&t(co),o&&t(Qi),o&&t(H),$(Pn),$(Fn),$(Cn),$(jn),$(Sn),o&&t(Ji),o&&t(Nt),$(On),o&&t(Xi),o&&t(ve),$(An),$(Ln),$(Un),o&&t(Zi),o&&t(Gt),$(Bn),o&&t(Yi),o&&t(Ae),$(Wn),$(Vn),$(_o),$(ko),o&&t(ed),o&&t(Ut),$(Qn),o&&t(td),o&&t(Ie),$(Jn),$(es),$(yo),$(bo),o&&t(od),o&&t(Wt),$(ts),o&&t(nd),o&&t(Kt),$(os),$(ns),$(Po),o&&t(sd),o&&t(Rt),$(ss),o&&t(ad),o&&t(ye),$(as),$(xo),$(ls),$(zo),$(Fo),o&&t(rd),o&&t(Vt),$(cs),o&&t(id),o&&t(be),$(ps),$(Eo),$(fs),$(Mo),$(Co),o&&t(dd),o&&t(Jt),$(gs),o&&t(ld),o&&t(U),$(_s),$($s),$(So),$(Oo),$(xs),$(Io),$(zs),$(Lo),o&&t(cd),o&&t(Zt),$(Fs),o&&t(pd),o&&t(B),$(qs),$(Is),$(Do),$(Ls),$(Gs),$(Ko),$(Ds),$(Ho)}}}const gk={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function _k(z){return Q_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pk extends K_{constructor(u){super();R_(this,u,_k,fk,H_,{})}}export{Pk as default,gk as metadata};
