import{S as K_,i as V_,s as R_,e as n,k as l,w as b,t as r,M as H_,c as s,d as t,m as c,a,x as y,h as i,b as u,G as e,g as f,y as T,q as w,o as P,B as $,v as Q_,L as ht}from"../../chunks/vendor-hf-doc-builder.js";import{T as dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as He}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function J_(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusModel, PegasusConfig

# Initializing a PEGASUS google/pegasus-large style configuration
configuration = PegasusConfig()

# Initializing a model from the google/pegasus-large style configuration
model = PegasusModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusModel, PegasusConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PEGASUS google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PegasusConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function X_(z){let p,v,_,m,k;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,p,h),e(p,v),e(p,_),e(_,m),e(p,k)},d(d){d&&t(p)}}}function Z_(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, PegasusModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1024</span>]`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function Y_(z){let p,v,_,m,k;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,p,h),e(p,v),e(p,_),e(_,m),e(p,k)},d(d){d&&t(p)}}}function ek(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, PegasusForConditionalGeneration

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
<span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`}}),{c(){p=n("p"),v=r("Summarization example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Summarization example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function tk(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function ok(z){let p,v,_,m,k,d,h,E,Qe,Ge,L,Pe,$e,q,ie,de,Je,Le,N,ee,xe,K,Xe,ze,le,Ne,te,ce,ue,Ze,Fe,S,A,Ye,oe,ne,qe,pe,et,Ee,D,De,G,tt,he,me,ot,fe,Q,nt,se,J,H,I,ge,V,Ce,st;return{c(){p=n("p"),v=r("TensorFlow models and layers in "),_=n("code"),m=r("transformers"),k=r(" accept two formats as input:"),d=l(),h=n("ul"),E=n("li"),Qe=r("having all inputs as keyword arguments (like PyTorch models), or"),Ge=l(),L=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional argument."),$e=l(),q=n("p"),ie=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Je=r("model.fit()"),Le=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=n("code"),ee=r("model.fit()"),xe=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=n("code"),Xe=r("fit()"),ze=r(" and "),le=n("code"),Ne=r("predict()"),te=r(`, such as when creating your own layers or models with
the Keras `),ce=n("code"),ue=r("Functional"),Ze=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Fe=l(),S=n("ul"),A=n("li"),Ye=r("a single Tensor with "),oe=n("code"),ne=r("input_ids"),qe=r(" only and nothing else: "),pe=n("code"),et=r("model(input_ids)"),Ee=l(),D=n("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),tt=r("model([input_ids, attention_mask])"),he=r(" or "),me=n("code"),ot=r("model([input_ids, attention_mask, token_type_ids])"),fe=l(),Q=n("li"),nt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),J=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),H=l(),I=n("p"),ge=r(`Note that when creating models and layers with
`),V=n("a"),Ce=r("subclassing"),st=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){p=s(x,"P",{});var F=a(p);v=i(F,"TensorFlow models and layers in "),_=s(F,"CODE",{});var Tt=a(_);m=i(Tt,"transformers"),Tt.forEach(t),k=i(F," accept two formats as input:"),F.forEach(t),d=c(x),h=s(x,"UL",{});var X=a(h);E=s(X,"LI",{});var wt=a(E);Qe=i(wt,"having all inputs as keyword arguments (like PyTorch models), or"),wt.forEach(t),Ge=c(X),L=s(X,"LI",{});var Pt=a(L);Pe=i(Pt,"having all inputs as a list, tuple or dict in the first positional argument."),Pt.forEach(t),X.forEach(t),$e=c(x),q=s(x,"P",{});var C=a(q);ie=i(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=s(C,"CODE",{});var $t=a(de);Je=i($t,"model.fit()"),$t.forEach(t),Le=i(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s(C,"CODE",{});var xt=a(N);ee=i(xt,"model.fit()"),xt.forEach(t),xe=i(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(C,"CODE",{});var mt=a(K);Xe=i(mt,"fit()"),mt.forEach(t),ze=i(C," and "),le=s(C,"CODE",{});var B=a(le);Ne=i(B,"predict()"),B.forEach(t),te=i(C,`, such as when creating your own layers or models with
the Keras `),ce=s(C,"CODE",{});var at=a(ce);ue=i(at,"Functional"),at.forEach(t),Ze=i(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),Fe=c(x),S=s(x,"UL",{});var Z=a(S);A=s(Z,"LI",{});var _e=a(A);Ye=i(_e,"a single Tensor with "),oe=s(_e,"CODE",{});var rt=a(oe);ne=i(rt,"input_ids"),rt.forEach(t),qe=i(_e," only and nothing else: "),pe=s(_e,"CODE",{});var zt=a(pe);et=i(zt,"model(input_ids)"),zt.forEach(t),_e.forEach(t),Ee=c(Z),D=s(Z,"LI",{});var ke=a(D);De=i(ke,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(ke,"CODE",{});var it=a(G);tt=i(it,"model([input_ids, attention_mask])"),it.forEach(t),he=i(ke," or "),me=s(ke,"CODE",{});var Ft=a(me);ot=i(Ft,"model([input_ids, attention_mask, token_type_ids])"),Ft.forEach(t),ke.forEach(t),fe=c(Z),Q=s(Z,"LI",{});var dt=a(Q);nt=i(dt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(dt,"CODE",{});var Me=a(se);J=i(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),dt.forEach(t),Z.forEach(t),H=c(x),I=s(x,"P",{});var je=a(I);ge=i(je,`Note that when creating models and layers with
`),V=s(je,"A",{href:!0,rel:!0});var Se=a(V);Ce=i(Se,"subclassing"),Se.forEach(t),st=i(je,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),je.forEach(t),this.h()},h(){u(V,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(V,"rel","nofollow")},m(x,F){f(x,p,F),e(p,v),e(p,_),e(_,m),e(p,k),f(x,d,F),f(x,h,F),e(h,E),e(E,Qe),e(h,Ge),e(h,L),e(L,Pe),f(x,$e,F),f(x,q,F),e(q,ie),e(q,de),e(de,Je),e(q,Le),e(q,N),e(N,ee),e(q,xe),e(q,K),e(K,Xe),e(q,ze),e(q,le),e(le,Ne),e(q,te),e(q,ce),e(ce,ue),e(q,Ze),f(x,Fe,F),f(x,S,F),e(S,A),e(A,Ye),e(A,oe),e(oe,ne),e(A,qe),e(A,pe),e(pe,et),e(S,Ee),e(S,D),e(D,De),e(D,G),e(G,tt),e(D,he),e(D,me),e(me,ot),e(S,fe),e(S,Q),e(Q,nt),e(Q,se),e(se,J),f(x,H,F),f(x,I,F),e(I,ge),e(I,V),e(V,Ce),e(I,st)},d(x){x&&t(p),x&&t(d),x&&t(h),x&&t($e),x&&t(q),x&&t(Fe),x&&t(S),x&&t(H),x&&t(I)}}}function nk(z){let p,v,_,m,k;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,p,h),e(p,v),e(p,_),e(_,m),e(p,k)},d(d){d&&t(p)}}}function sk(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function ak(z){let p,v,_,m,k,d,h,E,Qe,Ge,L,Pe,$e,q,ie,de,Je,Le,N,ee,xe,K,Xe,ze,le,Ne,te,ce,ue,Ze,Fe,S,A,Ye,oe,ne,qe,pe,et,Ee,D,De,G,tt,he,me,ot,fe,Q,nt,se,J,H,I,ge,V,Ce,st;return{c(){p=n("p"),v=r("TensorFlow models and layers in "),_=n("code"),m=r("transformers"),k=r(" accept two formats as input:"),d=l(),h=n("ul"),E=n("li"),Qe=r("having all inputs as keyword arguments (like PyTorch models), or"),Ge=l(),L=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional argument."),$e=l(),q=n("p"),ie=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Je=r("model.fit()"),Le=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=n("code"),ee=r("model.fit()"),xe=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=n("code"),Xe=r("fit()"),ze=r(" and "),le=n("code"),Ne=r("predict()"),te=r(`, such as when creating your own layers or models with
the Keras `),ce=n("code"),ue=r("Functional"),Ze=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Fe=l(),S=n("ul"),A=n("li"),Ye=r("a single Tensor with "),oe=n("code"),ne=r("input_ids"),qe=r(" only and nothing else: "),pe=n("code"),et=r("model(input_ids)"),Ee=l(),D=n("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),tt=r("model([input_ids, attention_mask])"),he=r(" or "),me=n("code"),ot=r("model([input_ids, attention_mask, token_type_ids])"),fe=l(),Q=n("li"),nt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),J=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),H=l(),I=n("p"),ge=r(`Note that when creating models and layers with
`),V=n("a"),Ce=r("subclassing"),st=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){p=s(x,"P",{});var F=a(p);v=i(F,"TensorFlow models and layers in "),_=s(F,"CODE",{});var Tt=a(_);m=i(Tt,"transformers"),Tt.forEach(t),k=i(F," accept two formats as input:"),F.forEach(t),d=c(x),h=s(x,"UL",{});var X=a(h);E=s(X,"LI",{});var wt=a(E);Qe=i(wt,"having all inputs as keyword arguments (like PyTorch models), or"),wt.forEach(t),Ge=c(X),L=s(X,"LI",{});var Pt=a(L);Pe=i(Pt,"having all inputs as a list, tuple or dict in the first positional argument."),Pt.forEach(t),X.forEach(t),$e=c(x),q=s(x,"P",{});var C=a(q);ie=i(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=s(C,"CODE",{});var $t=a(de);Je=i($t,"model.fit()"),$t.forEach(t),Le=i(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s(C,"CODE",{});var xt=a(N);ee=i(xt,"model.fit()"),xt.forEach(t),xe=i(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(C,"CODE",{});var mt=a(K);Xe=i(mt,"fit()"),mt.forEach(t),ze=i(C," and "),le=s(C,"CODE",{});var B=a(le);Ne=i(B,"predict()"),B.forEach(t),te=i(C,`, such as when creating your own layers or models with
the Keras `),ce=s(C,"CODE",{});var at=a(ce);ue=i(at,"Functional"),at.forEach(t),Ze=i(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),Fe=c(x),S=s(x,"UL",{});var Z=a(S);A=s(Z,"LI",{});var _e=a(A);Ye=i(_e,"a single Tensor with "),oe=s(_e,"CODE",{});var rt=a(oe);ne=i(rt,"input_ids"),rt.forEach(t),qe=i(_e," only and nothing else: "),pe=s(_e,"CODE",{});var zt=a(pe);et=i(zt,"model(input_ids)"),zt.forEach(t),_e.forEach(t),Ee=c(Z),D=s(Z,"LI",{});var ke=a(D);De=i(ke,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(ke,"CODE",{});var it=a(G);tt=i(it,"model([input_ids, attention_mask])"),it.forEach(t),he=i(ke," or "),me=s(ke,"CODE",{});var Ft=a(me);ot=i(Ft,"model([input_ids, attention_mask, token_type_ids])"),Ft.forEach(t),ke.forEach(t),fe=c(Z),Q=s(Z,"LI",{});var dt=a(Q);nt=i(dt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(dt,"CODE",{});var Me=a(se);J=i(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),dt.forEach(t),Z.forEach(t),H=c(x),I=s(x,"P",{});var je=a(I);ge=i(je,`Note that when creating models and layers with
`),V=s(je,"A",{href:!0,rel:!0});var Se=a(V);Ce=i(Se,"subclassing"),Se.forEach(t),st=i(je,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),je.forEach(t),this.h()},h(){u(V,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(V,"rel","nofollow")},m(x,F){f(x,p,F),e(p,v),e(p,_),e(_,m),e(p,k),f(x,d,F),f(x,h,F),e(h,E),e(E,Qe),e(h,Ge),e(h,L),e(L,Pe),f(x,$e,F),f(x,q,F),e(q,ie),e(q,de),e(de,Je),e(q,Le),e(q,N),e(N,ee),e(q,xe),e(q,K),e(K,Xe),e(q,ze),e(q,le),e(le,Ne),e(q,te),e(q,ce),e(ce,ue),e(q,Ze),f(x,Fe,F),f(x,S,F),e(S,A),e(A,Ye),e(A,oe),e(oe,ne),e(A,qe),e(A,pe),e(pe,et),e(S,Ee),e(S,D),e(D,De),e(D,G),e(G,tt),e(D,he),e(D,me),e(me,ot),e(S,fe),e(S,Q),e(Q,nt),e(Q,se),e(se,J),f(x,H,F),f(x,I,F),e(I,ge),e(I,V),e(V,Ce),e(I,st)},d(x){x&&t(p),x&&t(d),x&&t(h),x&&t($e),x&&t(q),x&&t(Fe),x&&t(S),x&&t(H),x&&t(I)}}}function rk(z){let p,v,_,m,k;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,p,h),e(p,v),e(p,_),e(_,m),e(p,k)},d(d){d&&t(p)}}}function ik(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){p=n("p"),v=r("Summarization example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Summarization example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function dk(z){let p,v,_,m,k;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,p,h),e(p,v),e(p,_),e(_,m),e(p,k)},d(d){d&&t(p)}}}function lk(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = FlaxPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function ck(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function uk(z){let p,v,_,m,k;return m=new He({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function pk(z){let p,v,_,m,k;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(h,"CODE",{});var E=a(_);m=i(E,"Module"),E.forEach(t),k=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){f(d,p,h),e(p,v),e(p,_),e(_,m),e(p,k)},d(d){d&&t(p)}}}function hk(z){let p,v,_,m,k;return m=new He({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function mk(z){let p,v,_,m,k;return m=new He({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),v=r("Example:"),_=l(),b(m.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);v=i(h,"Example:"),h.forEach(t),_=c(d),y(m.$$.fragment,d)},m(d,h){f(d,p,h),e(p,v),f(d,_,h),T(m,d,h),k=!0},p:ht,i(d){k||(w(m.$$.fragment,d),k=!0)},o(d){P(m.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(_),$(m,d)}}}function fk(z){let p,v,_,m,k,d,h,E,Qe,Ge,L,Pe,$e,q,ie,de,Je,Le,N,ee,xe,K,Xe,ze,le,Ne,te,ce,ue,Ze,Fe,S,A,Ye,oe,ne,qe,pe,et,Ee,D,De,G,tt,he,me,ot,fe,Q,nt,se,J,H,I,ge,V,Ce,st,x,F,Tt,X,wt,Pt,C,$t,xt,mt,B,at,Z,_e,rt,zt,ke,it,Ft,dt,Me,je,Se,ll,cl,ul,to,ln,pl,hl,cn,ml,fl,Li,qt,oo,$a,un,gl,xa,_l,Ni,ft,no,pn,kl,vl,hn,bl,yl,Tl,za,wl,Pl,Fa,$l,Di,Et,so,qa,mn,xl,Ea,zl,Ui,Te,Ca,Ma,Fl,ql,ja,Vs,El,Rs,Cl,Ml,fn,Sa,jl,Sl,Ct,Oa,Ol,Al,Aa,Il,Gl,gn,Ll,Ia,Nl,Dl,Ul,Ga,lt,Wl,La,Bl,Kl,Na,Vl,Rl,Da,Hl,Ql,Jl,Ua,Mt,Xl,_n,Zl,Yl,Wa,ec,tc,Wi,jt,ao,Ba,kn,oc,Ka,nc,Bi,vn,Ki,St,ro,Va,bn,sc,Ra,ac,Vi,Oe,yn,rc,Ot,ic,Hs,dc,lc,Tn,cc,uc,pc,At,hc,Qs,mc,fc,Js,gc,_c,kc,io,Ri,It,lo,Ha,wn,vc,Qa,bc,Hi,co,yc,Ja,Tc,wc,Qi,R,Pn,Pc,$n,$c,xn,xc,zc,Fc,zn,qc,Xs,Ec,Cc,Mc,Ue,Fn,jc,qn,Sc,Xa,Oc,Ac,Ic,En,Zs,Gc,Za,Lc,Nc,Cn,Dc,Ya,Uc,Wc,Bc,er,Kc,Vc,uo,Mn,Rc,tr,Hc,Qc,po,jn,Jc,or,Xc,Zc,ho,Sn,Yc,nr,eu,Ji,Gt,mo,sr,On,tu,ar,ou,Xi,ve,An,nu,Lt,su,rr,au,ru,In,iu,du,lu,Gn,cu,Ys,uu,pu,hu,gt,Ln,mu,ir,fu,gu,Nn,ea,_u,dr,ku,vu,Dn,bu,lr,yu,Tu,wu,fo,Un,Pu,cr,$u,Zi,Nt,go,ur,Wn,xu,pr,zu,Yi,Ae,Bn,Fu,Kn,qu,ta,Eu,Cu,Mu,Vn,ju,Rn,Su,Ou,Au,We,Hn,Iu,Dt,Gu,oa,Lu,Nu,hr,Du,Uu,Wu,_o,Bu,ko,ed,Ut,vo,mr,Qn,Ku,fr,Vu,td,Ie,Jn,Ru,Xn,Hu,na,Qu,Ju,Xu,Zn,Zu,Yn,Yu,ep,tp,Be,es,op,Wt,np,sa,sp,ap,gr,rp,ip,dp,bo,lp,yo,od,Bt,To,_r,ts,cp,kr,up,nd,Kt,os,pp,wo,ns,hp,Po,sd,Vt,$o,vr,ss,mp,br,fp,ad,be,as,gp,rs,_p,aa,kp,vp,bp,is,yp,ds,Tp,wp,Pp,xo,$p,Ke,ls,xp,Rt,zp,ra,Fp,qp,yr,Ep,Cp,Mp,zo,jp,Fo,rd,Ht,qo,Tr,cs,Sp,wr,Op,id,ye,us,Ap,ps,Ip,ia,Gp,Lp,Np,hs,Dp,ms,Up,Wp,Bp,Eo,Kp,Ve,fs,Vp,Qt,Rp,da,Hp,Qp,Pr,Jp,Xp,Zp,Co,Yp,Mo,dd,Jt,jo,$r,gs,eh,xr,th,ld,U,_s,oh,ks,nh,la,sh,ah,rh,vs,ih,bs,dh,lh,ch,zr,uh,ph,ct,Fr,ys,hh,mh,qr,Ts,fh,gh,Er,ws,_h,kh,Cr,Ps,vh,bh,Re,$s,yh,Xt,Th,Mr,wh,Ph,jr,$h,xh,zh,So,Fh,Oo,qh,Ao,xs,Eh,Io,Ch,Go,zs,Mh,Lo,cd,Zt,No,Sr,Fs,jh,Or,Sh,ud,W,qs,Oh,Es,Ah,ca,Ih,Gh,Lh,Cs,Nh,Ms,Dh,Uh,Wh,Ar,Bh,Kh,ut,Ir,js,Vh,Rh,Gr,Ss,Hh,Qh,Lr,Os,Jh,Xh,Nr,As,Zh,Yh,M,Is,em,Yt,tm,Dr,om,nm,Ur,sm,am,rm,Do,im,Wr,dm,lm,Br,Kr,Vr,Rr,cm,um,Hr,Qr,Jr,Xr,pm,hm,Zr,Yr,ei,ti,mm,fm,oi,ni,Gs,Uo,Wo,si,Ls,gm,ai,_m,km,ri,vm,bm,ii,ym,Tm,di,li,ci,ui,wm,Pm,pi,hi,mi,fi,$m,xm,gi,_i,ki,vi,zm,Fm,bi,yi,Ti,wi,qm,Em,Bo,Ns,Cm,Ko,Mm,Vo,Ds,jm,Ro,pd;return d=new Y({}),K=new Y({}),ge=new Y({}),un=new Y({}),mn=new Y({}),kn=new Y({}),vn=new He({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
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
<span class="hljs-meta">... </span>)`}}),bn=new Y({}),yn=new j({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/configuration_pegasus.py#L29"}}),io=new pt({props:{anchor:"transformers.PegasusConfig.example",$$slots:{default:[J_]},$$scope:{ctx:z}}}),wn=new Y({}),Pn=new j({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L41"}}),Fn=new j({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L258",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mn=new j({props:{name:"convert_tokens_to_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L232"}}),jn=new j({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L247"}}),Sn=new j({props:{name:"num_special_tokens_to_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L237"}}),On=new Y({}),An=new j({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L51"}}),Ln=new j({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L180",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new j({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L169"}}),Wn=new Y({}),Bn=new j({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1142"}}),Hn=new j({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1192",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new dn({props:{$$slots:{default:[X_]},$$scope:{ctx:z}}}),ko=new pt({props:{anchor:"transformers.PegasusModel.forward.example",$$slots:{default:[Z_]},$$scope:{ctx:z}}}),Qn=new Y({}),Jn=new j({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1291"}}),es=new j({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1359",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new dn({props:{$$slots:{default:[Y_]},$$scope:{ctx:z}}}),yo=new pt({props:{anchor:"transformers.PegasusForConditionalGeneration.forward.example",$$slots:{default:[ek]},$$scope:{ctx:z}}}),ts=new Y({}),os=new j({props:{name:"class transformers.PegasusForCausalLM",anchor:"transformers.PegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1498"}}),ns=new j({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1551",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new pt({props:{anchor:"transformers.PegasusForCausalLM.forward.example",$$slots:{default:[tk]},$$scope:{ctx:z}}}),ss=new Y({}),as=new j({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1205"}}),xo=new dn({props:{$$slots:{default:[ok]},$$scope:{ctx:z}}}),ls=new j({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1217",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new dn({props:{$$slots:{default:[nk]},$$scope:{ctx:z}}}),Fo=new pt({props:{anchor:"transformers.TFPegasusModel.call.example",$$slots:{default:[sk]},$$scope:{ctx:z}}}),cs=new Y({}),us=new j({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1312"}}),Eo=new dn({props:{$$slots:{default:[ak]},$$scope:{ctx:z}}}),fs=new j({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1346",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Co=new dn({props:{$$slots:{default:[rk]},$$scope:{ctx:z}}}),Mo=new pt({props:{anchor:"transformers.TFPegasusForConditionalGeneration.call.example",$$slots:{default:[ik]},$$scope:{ctx:z}}}),gs=new Y({}),_s=new j({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1228"}}),$s=new j({props:{name:"__call__",anchor:"transformers.FlaxPegasusModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1163",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new dn({props:{$$slots:{default:[dk]},$$scope:{ctx:z}}}),Oo=new pt({props:{anchor:"transformers.FlaxPegasusModel.__call__.example",$$slots:{default:[lk]},$$scope:{ctx:z}}}),xs=new j({props:{name:"encode",anchor:"transformers.FlaxPegasusModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new pt({props:{anchor:"transformers.FlaxPegasusModel.encode.example",$$slots:{default:[ck]},$$scope:{ctx:z}}}),zs=new j({props:{name:"decode",anchor:"transformers.FlaxPegasusModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new pt({props:{anchor:"transformers.FlaxPegasusModel.decode.example",$$slots:{default:[uk]},$$scope:{ctx:z}}}),Fs=new Y({}),qs=new j({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1315"}}),Is=new j({props:{name:"__call__",anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1163",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new dn({props:{$$slots:{default:[pk]},$$scope:{ctx:z}}}),Ls=new Y({}),Ns=new j({props:{name:"encode",anchor:"transformers.FlaxPegasusForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new pt({props:{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.example",$$slots:{default:[hk]},$$scope:{ctx:z}}}),Ds=new j({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1319",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new pt({props:{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.example",$$slots:{default:[mk]},$$scope:{ctx:z}}}),{c(){p=n("meta"),v=l(),_=n("h1"),m=n("a"),k=n("span"),b(d.$$.fragment),h=l(),E=n("span"),Qe=r("Pegasus"),Ge=l(),L=n("p"),Pe=n("strong"),$e=r("DISCLAIMER:"),q=r(" If you see something strange, file a "),ie=n("a"),de=r("Github Issue"),Je=r(`
and assign @patrickvonplaten.`),Le=l(),N=n("h2"),ee=n("a"),xe=n("span"),b(K.$$.fragment),Xe=l(),ze=n("span"),le=r("Overview"),Ne=l(),te=n("p"),ce=r("The Pegasus model was proposed in "),ue=n("a"),Ze=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),Fe=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),S=l(),A=n("p"),Ye=r("According to the abstract,"),oe=l(),ne=n("ul"),qe=n("li"),pe=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),et=l(),Ee=n("li"),D=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),De=l(),G=n("p"),tt=r("This model was contributed by "),he=n("a"),me=r("sshleifer"),ot=r(". The Authors\u2019 code can be found "),fe=n("a"),Q=r("here"),nt=r("."),se=l(),J=n("h2"),H=n("a"),I=n("span"),b(ge.$$.fragment),V=l(),Ce=n("span"),st=r("Checkpoints"),x=l(),F=n("p"),Tt=r("All the "),X=n("a"),wt=r("checkpoints"),Pt=r(` are fine-tuned for summarization, besides
`),C=n("em"),$t=r("pegasus-large"),xt=r(", whence the other checkpoints are fine-tuned:"),mt=l(),B=n("ul"),at=n("li"),Z=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),_e=l(),rt=n("li"),zt=r("FP16 is not supported (help/ideas on this appreciated!)."),ke=l(),it=n("li"),Ft=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),dt=l(),Me=n("li"),je=r("Full replication results and correctly pre-processed data can be found in this "),Se=n("a"),ll=r("Issue"),cl=r("."),ul=l(),to=n("li"),ln=n("a"),pl=r("Distilled checkpoints"),hl=r(" are described in this "),cn=n("a"),ml=r("paper"),fl=r("."),Li=l(),qt=n("h3"),oo=n("a"),$a=n("span"),b(un.$$.fragment),gl=l(),xa=n("span"),_l=r("Examples"),Ni=l(),ft=n("ul"),no=n("li"),pn=n("a"),kl=r("Script"),vl=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),hn=n("a"),bl=r("examples/pytorch/summarization/"),yl=r("."),Tl=l(),za=n("li"),wl=r("FP16 is not supported (help/ideas on this appreciated!)."),Pl=l(),Fa=n("li"),$l=r("The adafactor optimizer is recommended for pegasus fine-tuning."),Di=l(),Et=n("h2"),so=n("a"),qa=n("span"),b(mn.$$.fragment),xl=l(),Ea=n("span"),zl=r("Implementation Notes"),Ui=l(),Te=n("ul"),Ca=n("li"),Ma=n("p"),Fl=r("All models are transformer encoder-decoders with 16 layers in each component."),ql=l(),ja=n("li"),Vs=n("p"),El=r("The implementation is completely inherited from "),Rs=n("a"),Cl=r("BartForConditionalGeneration"),Ml=l(),fn=n("li"),Sa=n("p"),jl=r("Some key configuration differences:"),Sl=l(),Ct=n("ul"),Oa=n("li"),Ol=r("static, sinusoidal position embeddings"),Al=l(),Aa=n("li"),Il=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Gl=l(),gn=n("li"),Ll=r("more beams are used ("),Ia=n("code"),Nl=r("num_beams=8"),Dl=r(")"),Ul=l(),Ga=n("li"),lt=n("p"),Wl=r("All pretrained pegasus checkpoints are the same besides three attributes: "),La=n("code"),Bl=r("tokenizer.model_max_length"),Kl=r(` (maximum
input size), `),Na=n("code"),Vl=r("max_length"),Rl=r(" (the maximum number of tokens to generate) and "),Da=n("code"),Hl=r("length_penalty"),Ql=r("."),Jl=l(),Ua=n("li"),Mt=n("p"),Xl=r("The code to convert checkpoints trained in the author\u2019s "),_n=n("a"),Zl=r("repo"),Yl=r(` can be
found in `),Wa=n("code"),ec=r("convert_pegasus_tf_to_pytorch.py"),tc=r("."),Wi=l(),jt=n("h2"),ao=n("a"),Ba=n("span"),b(kn.$$.fragment),oc=l(),Ka=n("span"),nc=r("Usage Example"),Bi=l(),b(vn.$$.fragment),Ki=l(),St=n("h2"),ro=n("a"),Va=n("span"),b(bn.$$.fragment),sc=l(),Ra=n("span"),ac=r("PegasusConfig"),Vi=l(),Oe=n("div"),b(yn.$$.fragment),rc=l(),Ot=n("p"),ic=r("This is the configuration class to store the configuration of a "),Hs=n("a"),dc=r("PegasusModel"),lc=r(`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Tn=n("a"),cc=r("google/pegasus-large"),uc=r(" architecture."),pc=l(),At=n("p"),hc=r("Configuration objects inherit from "),Qs=n("a"),mc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),Js=n("a"),gc=r("PretrainedConfig"),_c=r(" for more information."),kc=l(),b(io.$$.fragment),Ri=l(),It=n("h2"),lo=n("a"),Ha=n("span"),b(wn.$$.fragment),vc=l(),Qa=n("span"),bc=r("PegasusTokenizer"),Hi=l(),co=n("p"),yc=r("warning: "),Ja=n("code"),Tc=r("add_tokens"),wc=r(" does not work at the moment."),Qi=l(),R=n("div"),b(Pn.$$.fragment),Pc=l(),$n=n("p"),$c=r("Construct a PEGASUS tokenizer. Based on "),xn=n("a"),xc=r("SentencePiece"),zc=r("."),Fc=l(),zn=n("p"),qc=r("This tokenizer inherits from "),Xs=n("a"),Ec=r("PreTrainedTokenizer"),Cc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mc=l(),Ue=n("div"),b(Fn.$$.fragment),jc=l(),qn=n("p"),Sc=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Xa=n("code"),Oc=r("X"),Ac=r(" represents the sequence:"),Ic=l(),En=n("ul"),Zs=n("li"),Gc=r("single sequence: "),Za=n("code"),Lc=r("X </s>"),Nc=l(),Cn=n("li"),Dc=r("pair of sequences: "),Ya=n("code"),Uc=r("A B </s>"),Wc=r(" (not intended use)"),Bc=l(),er=n("p"),Kc=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Vc=l(),uo=n("div"),b(Mn.$$.fragment),Rc=l(),tr=n("p"),Hc=r("Converts a sequence of tokens (string) in a single string."),Qc=l(),po=n("div"),b(jn.$$.fragment),Jc=l(),or=n("p"),Xc=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Zc=l(),ho=n("div"),b(Sn.$$.fragment),Yc=l(),nr=n("p"),eu=r("Just EOS"),Ji=l(),Gt=n("h2"),mo=n("a"),sr=n("span"),b(On.$$.fragment),tu=l(),ar=n("span"),ou=r("PegasusTokenizerFast"),Xi=l(),ve=n("div"),b(An.$$.fragment),nu=l(),Lt=n("p"),su=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),rr=n("em"),au=r("tokenizers"),ru=r(` library). Based on
`),In=n("a"),iu=r("Unigram"),du=r("."),lu=l(),Gn=n("p"),cu=r("This tokenizer inherits from "),Ys=n("a"),uu=r("PreTrainedTokenizerFast"),pu=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hu=l(),gt=n("div"),b(Ln.$$.fragment),mu=l(),ir=n("p"),fu=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),gu=l(),Nn=n("ul"),ea=n("li"),_u=r("single sequence: "),dr=n("code"),ku=r("X </s>"),vu=l(),Dn=n("li"),bu=r("pair of sequences: "),lr=n("code"),yu=r("A B </s>"),Tu=r(" (not intended use)"),wu=l(),fo=n("div"),b(Un.$$.fragment),Pu=l(),cr=n("p"),$u=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Zi=l(),Nt=n("h2"),go=n("a"),ur=n("span"),b(Wn.$$.fragment),xu=l(),pr=n("span"),zu=r("PegasusModel"),Yi=l(),Ae=n("div"),b(Bn.$$.fragment),Fu=l(),Kn=n("p"),qu=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=n("a"),Eu=r("PreTrainedModel"),Cu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu=l(),Vn=n("p"),ju=r("This model is also a PyTorch "),Rn=n("a"),Su=r("torch.nn.Module"),Ou=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Au=l(),We=n("div"),b(Hn.$$.fragment),Iu=l(),Dt=n("p"),Gu=r("The "),oa=n("a"),Lu=r("PegasusModel"),Nu=r(" forward method, overrides the "),hr=n("code"),Du=r("__call__"),Uu=r(" special method."),Wu=l(),b(_o.$$.fragment),Bu=l(),b(ko.$$.fragment),ed=l(),Ut=n("h2"),vo=n("a"),mr=n("span"),b(Qn.$$.fragment),Ku=l(),fr=n("span"),Vu=r("PegasusForConditionalGeneration"),td=l(),Ie=n("div"),b(Jn.$$.fragment),Ru=l(),Xn=n("p"),Hu=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),na=n("a"),Qu=r("PreTrainedModel"),Ju=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu=l(),Zn=n("p"),Zu=r("This model is also a PyTorch "),Yn=n("a"),Yu=r("torch.nn.Module"),ep=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp=l(),Be=n("div"),b(es.$$.fragment),op=l(),Wt=n("p"),np=r("The "),sa=n("a"),sp=r("PegasusForConditionalGeneration"),ap=r(" forward method, overrides the "),gr=n("code"),rp=r("__call__"),ip=r(" special method."),dp=l(),b(bo.$$.fragment),lp=l(),b(yo.$$.fragment),od=l(),Bt=n("h2"),To=n("a"),_r=n("span"),b(ts.$$.fragment),cp=l(),kr=n("span"),up=r("PegasusForCausalLM"),nd=l(),Kt=n("div"),b(os.$$.fragment),pp=l(),wo=n("div"),b(ns.$$.fragment),hp=l(),b(Po.$$.fragment),sd=l(),Vt=n("h2"),$o=n("a"),vr=n("span"),b(ss.$$.fragment),mp=l(),br=n("span"),fp=r("TFPegasusModel"),ad=l(),be=n("div"),b(as.$$.fragment),gp=l(),rs=n("p"),_p=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),aa=n("a"),kp=r("TFPreTrainedModel"),vp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp=l(),is=n("p"),yp=r("This model is also a "),ds=n("a"),Tp=r("tf.keras.Model"),wp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp=l(),b(xo.$$.fragment),$p=l(),Ke=n("div"),b(ls.$$.fragment),xp=l(),Rt=n("p"),zp=r("The "),ra=n("a"),Fp=r("TFPegasusModel"),qp=r(" forward method, overrides the "),yr=n("code"),Ep=r("__call__"),Cp=r(" special method."),Mp=l(),b(zo.$$.fragment),jp=l(),b(Fo.$$.fragment),rd=l(),Ht=n("h2"),qo=n("a"),Tr=n("span"),b(cs.$$.fragment),Sp=l(),wr=n("span"),Op=r("TFPegasusForConditionalGeneration"),id=l(),ye=n("div"),b(us.$$.fragment),Ap=l(),ps=n("p"),Ip=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=n("a"),Gp=r("TFPreTrainedModel"),Lp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np=l(),hs=n("p"),Dp=r("This model is also a "),ms=n("a"),Up=r("tf.keras.Model"),Wp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bp=l(),b(Eo.$$.fragment),Kp=l(),Ve=n("div"),b(fs.$$.fragment),Vp=l(),Qt=n("p"),Rp=r("The "),da=n("a"),Hp=r("TFPegasusForConditionalGeneration"),Qp=r(" forward method, overrides the "),Pr=n("code"),Jp=r("__call__"),Xp=r(" special method."),Zp=l(),b(Co.$$.fragment),Yp=l(),b(Mo.$$.fragment),dd=l(),Jt=n("h2"),jo=n("a"),$r=n("span"),b(gs.$$.fragment),eh=l(),xr=n("span"),th=r("FlaxPegasusModel"),ld=l(),U=n("div"),b(_s.$$.fragment),oh=l(),ks=n("p"),nh=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),la=n("a"),sh=r("FlaxPreTrainedModel"),ah=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh=l(),vs=n("p"),ih=r(`This model is also a Flax Linen
`),bs=n("a"),dh=r("flax.nn.Module"),lh=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ch=l(),zr=n("p"),uh=r("Finally, this model supports inherent JAX features such as:"),ph=l(),ct=n("ul"),Fr=n("li"),ys=n("a"),hh=r("Just-In-Time (JIT) compilation"),mh=l(),qr=n("li"),Ts=n("a"),fh=r("Automatic Differentiation"),gh=l(),Er=n("li"),ws=n("a"),_h=r("Vectorization"),kh=l(),Cr=n("li"),Ps=n("a"),vh=r("Parallelization"),bh=l(),Re=n("div"),b($s.$$.fragment),yh=l(),Xt=n("p"),Th=r("The "),Mr=n("code"),wh=r("FlaxPegasusPreTrainedModel"),Ph=r(" forward method, overrides the "),jr=n("code"),$h=r("__call__"),xh=r(" special method."),zh=l(),b(So.$$.fragment),Fh=l(),b(Oo.$$.fragment),qh=l(),Ao=n("div"),b(xs.$$.fragment),Eh=l(),b(Io.$$.fragment),Ch=l(),Go=n("div"),b(zs.$$.fragment),Mh=l(),b(Lo.$$.fragment),cd=l(),Zt=n("h2"),No=n("a"),Sr=n("span"),b(Fs.$$.fragment),jh=l(),Or=n("span"),Sh=r("FlaxPegasusForConditionalGeneration"),ud=l(),W=n("div"),b(qs.$$.fragment),Oh=l(),Es=n("p"),Ah=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ca=n("a"),Ih=r("FlaxPreTrainedModel"),Gh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh=l(),Cs=n("p"),Nh=r(`This model is also a Flax Linen
`),Ms=n("a"),Dh=r("flax.nn.Module"),Uh=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wh=l(),Ar=n("p"),Bh=r("Finally, this model supports inherent JAX features such as:"),Kh=l(),ut=n("ul"),Ir=n("li"),js=n("a"),Vh=r("Just-In-Time (JIT) compilation"),Rh=l(),Gr=n("li"),Ss=n("a"),Hh=r("Automatic Differentiation"),Qh=l(),Lr=n("li"),Os=n("a"),Jh=r("Vectorization"),Xh=l(),Nr=n("li"),As=n("a"),Zh=r("Parallelization"),Yh=l(),M=n("div"),b(Is.$$.fragment),em=l(),Yt=n("p"),tm=r("The "),Dr=n("code"),om=r("FlaxPegasusPreTrainedModel"),nm=r(" forward method, overrides the "),Ur=n("code"),sm=r("__call__"),am=r(" special method."),rm=l(),b(Do.$$.fragment),im=l(),Wr=n("p"),dm=r("Summarization example:"),lm=l(),Br=n("blockquote"),Kr=n("blockquote"),Vr=n("blockquote"),Rr=n("p"),cm=r("from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),um=l(),Hr=n("blockquote"),Qr=n("blockquote"),Jr=n("blockquote"),Xr=n("p"),pm=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),hm=l(),Zr=n("blockquote"),Yr=n("blockquote"),ei=n("blockquote"),ti=n("p"),mm=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),fm=l(),oi=n("blockquote"),ni=n("blockquote"),Gs=n("blockquote"),Uo=n("h1"),Wo=n("a"),si=n("span"),b(Ls.$$.fragment),gm=l(),ai=n("span"),_m=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),km=l(),ri=n("p"),vm=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),bm=l(),ii=n("p"),ym=r("Mask filling example:"),Tm=l(),di=n("blockquote"),li=n("blockquote"),ci=n("blockquote"),ui=n("p"),wm=r(`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),Pm=l(),pi=n("blockquote"),hi=n("blockquote"),mi=n("blockquote"),fi=n("p"),$m=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),xm=l(),gi=n("blockquote"),_i=n("blockquote"),ki=n("blockquote"),vi=n("p"),zm=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Fm=l(),bi=n("blockquote"),yi=n("blockquote"),Ti=n("blockquote"),wi=n("p"),qm=r("tokenizer.decode(predictions).split()"),Em=l(),Bo=n("div"),b(Ns.$$.fragment),Cm=l(),b(Ko.$$.fragment),Mm=l(),Vo=n("div"),b(Ds.$$.fragment),jm=l(),b(Ro.$$.fragment),this.h()},l(o){const g=H_('[data-svelte="svelte-1phssyn"]',document.head);p=s(g,"META",{name:!0,content:!0}),g.forEach(t),v=c(o),_=s(o,"H1",{class:!0});var Us=a(_);m=s(Us,"A",{id:!0,class:!0,href:!0});var Pi=a(m);k=s(Pi,"SPAN",{});var $i=a(k);y(d.$$.fragment,$i),$i.forEach(t),Pi.forEach(t),h=c(Us),E=s(Us,"SPAN",{});var xi=a(E);Qe=i(xi,"Pegasus"),xi.forEach(t),Us.forEach(t),Ge=c(o),L=s(o,"P",{});var Ho=a(L);Pe=s(Ho,"STRONG",{});var zi=a(Pe);$e=i(zi,"DISCLAIMER:"),zi.forEach(t),q=i(Ho," If you see something strange, file a "),ie=s(Ho,"A",{href:!0,rel:!0});var Fi=a(ie);de=i(Fi,"Github Issue"),Fi.forEach(t),Je=i(Ho,`
and assign @patrickvonplaten.`),Ho.forEach(t),Le=c(o),N=s(o,"H2",{class:!0});var Ws=a(N);ee=s(Ws,"A",{id:!0,class:!0,href:!0});var qi=a(ee);xe=s(qi,"SPAN",{});var Ei=a(xe);y(K.$$.fragment,Ei),Ei.forEach(t),qi.forEach(t),Xe=c(Ws),ze=s(Ws,"SPAN",{});var Ci=a(ze);le=i(Ci,"Overview"),Ci.forEach(t),Ws.forEach(t),Ne=c(o),te=s(o,"P",{});var Bs=a(te);ce=i(Bs,"The Pegasus model was proposed in "),ue=s(Bs,"A",{href:!0,rel:!0});var Mi=a(ue);Ze=i(Mi,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),Mi.forEach(t),Fe=i(Bs," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),Bs.forEach(t),S=c(o),A=s(o,"P",{});var ji=a(A);Ye=i(ji,"According to the abstract,"),ji.forEach(t),oe=c(o),ne=s(o,"UL",{});var Ks=a(ne);qe=s(Ks,"LI",{});var Si=a(qe);pe=i(Si,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),Si.forEach(t),et=c(Ks),Ee=s(Ks,"LI",{});var Oi=a(Ee);D=i(Oi,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),Oi.forEach(t),Ks.forEach(t),De=c(o),G=s(o,"P",{});var eo=a(G);tt=i(eo,"This model was contributed by "),he=s(eo,"A",{href:!0,rel:!0});var Ai=a(he);me=i(Ai,"sshleifer"),Ai.forEach(t),ot=i(eo,". The Authors\u2019 code can be found "),fe=s(eo,"A",{href:!0,rel:!0});var Im=a(fe);Q=i(Im,"here"),Im.forEach(t),nt=i(eo,"."),eo.forEach(t),se=c(o),J=s(o,"H2",{class:!0});var hd=a(J);H=s(hd,"A",{id:!0,class:!0,href:!0});var Gm=a(H);I=s(Gm,"SPAN",{});var Lm=a(I);y(ge.$$.fragment,Lm),Lm.forEach(t),Gm.forEach(t),V=c(hd),Ce=s(hd,"SPAN",{});var Nm=a(Ce);st=i(Nm,"Checkpoints"),Nm.forEach(t),hd.forEach(t),x=c(o),F=s(o,"P",{});var ua=a(F);Tt=i(ua,"All the "),X=s(ua,"A",{href:!0,rel:!0});var Dm=a(X);wt=i(Dm,"checkpoints"),Dm.forEach(t),Pt=i(ua,` are fine-tuned for summarization, besides
`),C=s(ua,"EM",{});var Um=a(C);$t=i(Um,"pegasus-large"),Um.forEach(t),xt=i(ua,", whence the other checkpoints are fine-tuned:"),ua.forEach(t),mt=c(o),B=s(o,"UL",{});var _t=a(B);at=s(_t,"LI",{});var Wm=a(at);Z=i(Wm,"Each checkpoint is 2.2 GB on disk and 568M parameters."),Wm.forEach(t),_e=c(_t),rt=s(_t,"LI",{});var Bm=a(rt);zt=i(Bm,"FP16 is not supported (help/ideas on this appreciated!)."),Bm.forEach(t),ke=c(_t),it=s(_t,"LI",{});var Km=a(it);Ft=i(Km,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Km.forEach(t),dt=c(_t),Me=s(_t,"LI",{});var md=a(Me);je=i(md,"Full replication results and correctly pre-processed data can be found in this "),Se=s(md,"A",{href:!0,rel:!0});var Vm=a(Se);ll=i(Vm,"Issue"),Vm.forEach(t),cl=i(md,"."),md.forEach(t),ul=c(_t),to=s(_t,"LI",{});var Ii=a(to);ln=s(Ii,"A",{href:!0,rel:!0});var Rm=a(ln);pl=i(Rm,"Distilled checkpoints"),Rm.forEach(t),hl=i(Ii," are described in this "),cn=s(Ii,"A",{href:!0,rel:!0});var Hm=a(cn);ml=i(Hm,"paper"),Hm.forEach(t),fl=i(Ii,"."),Ii.forEach(t),_t.forEach(t),Li=c(o),qt=s(o,"H3",{class:!0});var fd=a(qt);oo=s(fd,"A",{id:!0,class:!0,href:!0});var Qm=a(oo);$a=s(Qm,"SPAN",{});var Jm=a($a);y(un.$$.fragment,Jm),Jm.forEach(t),Qm.forEach(t),gl=c(fd),xa=s(fd,"SPAN",{});var Xm=a(xa);_l=i(Xm,"Examples"),Xm.forEach(t),fd.forEach(t),Ni=c(o),ft=s(o,"UL",{});var pa=a(ft);no=s(pa,"LI",{});var Gi=a(no);pn=s(Gi,"A",{href:!0,rel:!0});var Zm=a(pn);kl=i(Zm,"Script"),Zm.forEach(t),vl=i(Gi,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),hn=s(Gi,"A",{href:!0,rel:!0});var Ym=a(hn);bl=i(Ym,"examples/pytorch/summarization/"),Ym.forEach(t),yl=i(Gi,"."),Gi.forEach(t),Tl=c(pa),za=s(pa,"LI",{});var ef=a(za);wl=i(ef,"FP16 is not supported (help/ideas on this appreciated!)."),ef.forEach(t),Pl=c(pa),Fa=s(pa,"LI",{});var tf=a(Fa);$l=i(tf,"The adafactor optimizer is recommended for pegasus fine-tuning."),tf.forEach(t),pa.forEach(t),Di=c(o),Et=s(o,"H2",{class:!0});var gd=a(Et);so=s(gd,"A",{id:!0,class:!0,href:!0});var of=a(so);qa=s(of,"SPAN",{});var nf=a(qa);y(mn.$$.fragment,nf),nf.forEach(t),of.forEach(t),xl=c(gd),Ea=s(gd,"SPAN",{});var sf=a(Ea);zl=i(sf,"Implementation Notes"),sf.forEach(t),gd.forEach(t),Ui=c(o),Te=s(o,"UL",{});var kt=a(Te);Ca=s(kt,"LI",{});var af=a(Ca);Ma=s(af,"P",{});var rf=a(Ma);Fl=i(rf,"All models are transformer encoder-decoders with 16 layers in each component."),rf.forEach(t),af.forEach(t),ql=c(kt),ja=s(kt,"LI",{});var df=a(ja);Vs=s(df,"P",{});var Sm=a(Vs);El=i(Sm,"The implementation is completely inherited from "),Rs=s(Sm,"A",{href:!0});var lf=a(Rs);Cl=i(lf,"BartForConditionalGeneration"),lf.forEach(t),Sm.forEach(t),df.forEach(t),Ml=c(kt),fn=s(kt,"LI",{});var _d=a(fn);Sa=s(_d,"P",{});var cf=a(Sa);jl=i(cf,"Some key configuration differences:"),cf.forEach(t),Sl=c(_d),Ct=s(_d,"UL",{});var ha=a(Ct);Oa=s(ha,"LI",{});var uf=a(Oa);Ol=i(uf,"static, sinusoidal position embeddings"),uf.forEach(t),Al=c(ha),Aa=s(ha,"LI",{});var pf=a(Aa);Il=i(pf,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),pf.forEach(t),Gl=c(ha),gn=s(ha,"LI",{});var kd=a(gn);Ll=i(kd,"more beams are used ("),Ia=s(kd,"CODE",{});var hf=a(Ia);Nl=i(hf,"num_beams=8"),hf.forEach(t),Dl=i(kd,")"),kd.forEach(t),ha.forEach(t),_d.forEach(t),Ul=c(kt),Ga=s(kt,"LI",{});var mf=a(Ga);lt=s(mf,"P",{});var Qo=a(lt);Wl=i(Qo,"All pretrained pegasus checkpoints are the same besides three attributes: "),La=s(Qo,"CODE",{});var ff=a(La);Bl=i(ff,"tokenizer.model_max_length"),ff.forEach(t),Kl=i(Qo,` (maximum
input size), `),Na=s(Qo,"CODE",{});var gf=a(Na);Vl=i(gf,"max_length"),gf.forEach(t),Rl=i(Qo," (the maximum number of tokens to generate) and "),Da=s(Qo,"CODE",{});var _f=a(Da);Hl=i(_f,"length_penalty"),_f.forEach(t),Ql=i(Qo,"."),Qo.forEach(t),mf.forEach(t),Jl=c(kt),Ua=s(kt,"LI",{});var kf=a(Ua);Mt=s(kf,"P",{});var ma=a(Mt);Xl=i(ma,"The code to convert checkpoints trained in the author\u2019s "),_n=s(ma,"A",{href:!0,rel:!0});var vf=a(_n);Zl=i(vf,"repo"),vf.forEach(t),Yl=i(ma,` can be
found in `),Wa=s(ma,"CODE",{});var bf=a(Wa);ec=i(bf,"convert_pegasus_tf_to_pytorch.py"),bf.forEach(t),tc=i(ma,"."),ma.forEach(t),kf.forEach(t),kt.forEach(t),Wi=c(o),jt=s(o,"H2",{class:!0});var vd=a(jt);ao=s(vd,"A",{id:!0,class:!0,href:!0});var yf=a(ao);Ba=s(yf,"SPAN",{});var Tf=a(Ba);y(kn.$$.fragment,Tf),Tf.forEach(t),yf.forEach(t),oc=c(vd),Ka=s(vd,"SPAN",{});var wf=a(Ka);nc=i(wf,"Usage Example"),wf.forEach(t),vd.forEach(t),Bi=c(o),y(vn.$$.fragment,o),Ki=c(o),St=s(o,"H2",{class:!0});var bd=a(St);ro=s(bd,"A",{id:!0,class:!0,href:!0});var Pf=a(ro);Va=s(Pf,"SPAN",{});var $f=a(Va);y(bn.$$.fragment,$f),$f.forEach(t),Pf.forEach(t),sc=c(bd),Ra=s(bd,"SPAN",{});var xf=a(Ra);ac=i(xf,"PegasusConfig"),xf.forEach(t),bd.forEach(t),Vi=c(o),Oe=s(o,"DIV",{class:!0});var Jo=a(Oe);y(yn.$$.fragment,Jo),rc=c(Jo),Ot=s(Jo,"P",{});var fa=a(Ot);ic=i(fa,"This is the configuration class to store the configuration of a "),Hs=s(fa,"A",{href:!0});var zf=a(Hs);dc=i(zf,"PegasusModel"),zf.forEach(t),lc=i(fa,`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Tn=s(fa,"A",{href:!0,rel:!0});var Ff=a(Tn);cc=i(Ff,"google/pegasus-large"),Ff.forEach(t),uc=i(fa," architecture."),fa.forEach(t),pc=c(Jo),At=s(Jo,"P",{});var ga=a(At);hc=i(ga,"Configuration objects inherit from "),Qs=s(ga,"A",{href:!0});var qf=a(Qs);mc=i(qf,"PretrainedConfig"),qf.forEach(t),fc=i(ga,` and can be used to control the model outputs. Read the
documentation from `),Js=s(ga,"A",{href:!0});var Ef=a(Js);gc=i(Ef,"PretrainedConfig"),Ef.forEach(t),_c=i(ga," for more information."),ga.forEach(t),kc=c(Jo),y(io.$$.fragment,Jo),Jo.forEach(t),Ri=c(o),It=s(o,"H2",{class:!0});var yd=a(It);lo=s(yd,"A",{id:!0,class:!0,href:!0});var Cf=a(lo);Ha=s(Cf,"SPAN",{});var Mf=a(Ha);y(wn.$$.fragment,Mf),Mf.forEach(t),Cf.forEach(t),vc=c(yd),Qa=s(yd,"SPAN",{});var jf=a(Qa);bc=i(jf,"PegasusTokenizer"),jf.forEach(t),yd.forEach(t),Hi=c(o),co=s(o,"P",{});var Td=a(co);yc=i(Td,"warning: "),Ja=s(Td,"CODE",{});var Sf=a(Ja);Tc=i(Sf,"add_tokens"),Sf.forEach(t),wc=i(Td," does not work at the moment."),Td.forEach(t),Qi=c(o),R=s(o,"DIV",{class:!0});var we=a(R);y(Pn.$$.fragment,we),Pc=c(we),$n=s(we,"P",{});var wd=a($n);$c=i(wd,"Construct a PEGASUS tokenizer. Based on "),xn=s(wd,"A",{href:!0,rel:!0});var Of=a(xn);xc=i(Of,"SentencePiece"),Of.forEach(t),zc=i(wd,"."),wd.forEach(t),Fc=c(we),zn=s(we,"P",{});var Pd=a(zn);qc=i(Pd,"This tokenizer inherits from "),Xs=s(Pd,"A",{href:!0});var Af=a(Xs);Ec=i(Af,"PreTrainedTokenizer"),Af.forEach(t),Cc=i(Pd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Pd.forEach(t),Mc=c(we),Ue=s(we,"DIV",{class:!0});var Xo=a(Ue);y(Fn.$$.fragment,Xo),jc=c(Xo),qn=s(Xo,"P",{});var $d=a(qn);Sc=i($d,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Xa=s($d,"CODE",{});var If=a(Xa);Oc=i(If,"X"),If.forEach(t),Ac=i($d," represents the sequence:"),$d.forEach(t),Ic=c(Xo),En=s(Xo,"UL",{});var xd=a(En);Zs=s(xd,"LI",{});var Om=a(Zs);Gc=i(Om,"single sequence: "),Za=s(Om,"CODE",{});var Gf=a(Za);Lc=i(Gf,"X </s>"),Gf.forEach(t),Om.forEach(t),Nc=c(xd),Cn=s(xd,"LI",{});var zd=a(Cn);Dc=i(zd,"pair of sequences: "),Ya=s(zd,"CODE",{});var Lf=a(Ya);Uc=i(Lf,"A B </s>"),Lf.forEach(t),Wc=i(zd," (not intended use)"),zd.forEach(t),xd.forEach(t),Bc=c(Xo),er=s(Xo,"P",{});var Nf=a(er);Kc=i(Nf,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Nf.forEach(t),Xo.forEach(t),Vc=c(we),uo=s(we,"DIV",{class:!0});var Fd=a(uo);y(Mn.$$.fragment,Fd),Rc=c(Fd),tr=s(Fd,"P",{});var Df=a(tr);Hc=i(Df,"Converts a sequence of tokens (string) in a single string."),Df.forEach(t),Fd.forEach(t),Qc=c(we),po=s(we,"DIV",{class:!0});var qd=a(po);y(jn.$$.fragment,qd),Jc=c(qd),or=s(qd,"P",{});var Uf=a(or);Xc=i(Uf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Uf.forEach(t),qd.forEach(t),Zc=c(we),ho=s(we,"DIV",{class:!0});var Ed=a(ho);y(Sn.$$.fragment,Ed),Yc=c(Ed),nr=s(Ed,"P",{});var Wf=a(nr);eu=i(Wf,"Just EOS"),Wf.forEach(t),Ed.forEach(t),we.forEach(t),Ji=c(o),Gt=s(o,"H2",{class:!0});var Cd=a(Gt);mo=s(Cd,"A",{id:!0,class:!0,href:!0});var Bf=a(mo);sr=s(Bf,"SPAN",{});var Kf=a(sr);y(On.$$.fragment,Kf),Kf.forEach(t),Bf.forEach(t),tu=c(Cd),ar=s(Cd,"SPAN",{});var Vf=a(ar);ou=i(Vf,"PegasusTokenizerFast"),Vf.forEach(t),Cd.forEach(t),Xi=c(o),ve=s(o,"DIV",{class:!0});var vt=a(ve);y(An.$$.fragment,vt),nu=c(vt),Lt=s(vt,"P",{});var _a=a(Lt);su=i(_a,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),rr=s(_a,"EM",{});var Rf=a(rr);au=i(Rf,"tokenizers"),Rf.forEach(t),ru=i(_a,` library). Based on
`),In=s(_a,"A",{href:!0,rel:!0});var Hf=a(In);iu=i(Hf,"Unigram"),Hf.forEach(t),du=i(_a,"."),_a.forEach(t),lu=c(vt),Gn=s(vt,"P",{});var Md=a(Gn);cu=i(Md,"This tokenizer inherits from "),Ys=s(Md,"A",{href:!0});var Qf=a(Ys);uu=i(Qf,"PreTrainedTokenizerFast"),Qf.forEach(t),pu=i(Md,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Md.forEach(t),hu=c(vt),gt=s(vt,"DIV",{class:!0});var ka=a(gt);y(Ln.$$.fragment,ka),mu=c(ka),ir=s(ka,"P",{});var Jf=a(ir);fu=i(Jf,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),Jf.forEach(t),gu=c(ka),Nn=s(ka,"UL",{});var jd=a(Nn);ea=s(jd,"LI",{});var Am=a(ea);_u=i(Am,"single sequence: "),dr=s(Am,"CODE",{});var Xf=a(dr);ku=i(Xf,"X </s>"),Xf.forEach(t),Am.forEach(t),vu=c(jd),Dn=s(jd,"LI",{});var Sd=a(Dn);bu=i(Sd,"pair of sequences: "),lr=s(Sd,"CODE",{});var Zf=a(lr);yu=i(Zf,"A B </s>"),Zf.forEach(t),Tu=i(Sd," (not intended use)"),Sd.forEach(t),jd.forEach(t),ka.forEach(t),wu=c(vt),fo=s(vt,"DIV",{class:!0});var Od=a(fo);y(Un.$$.fragment,Od),Pu=c(Od),cr=s(Od,"P",{});var Yf=a(cr);$u=i(Yf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Yf.forEach(t),Od.forEach(t),vt.forEach(t),Zi=c(o),Nt=s(o,"H2",{class:!0});var Ad=a(Nt);go=s(Ad,"A",{id:!0,class:!0,href:!0});var eg=a(go);ur=s(eg,"SPAN",{});var tg=a(ur);y(Wn.$$.fragment,tg),tg.forEach(t),eg.forEach(t),xu=c(Ad),pr=s(Ad,"SPAN",{});var og=a(pr);zu=i(og,"PegasusModel"),og.forEach(t),Ad.forEach(t),Yi=c(o),Ae=s(o,"DIV",{class:!0});var Zo=a(Ae);y(Bn.$$.fragment,Zo),Fu=c(Zo),Kn=s(Zo,"P",{});var Id=a(Kn);qu=i(Id,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=s(Id,"A",{href:!0});var ng=a(ta);Eu=i(ng,"PreTrainedModel"),ng.forEach(t),Cu=i(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Mu=c(Zo),Vn=s(Zo,"P",{});var Gd=a(Vn);ju=i(Gd,"This model is also a PyTorch "),Rn=s(Gd,"A",{href:!0,rel:!0});var sg=a(Rn);Su=i(sg,"torch.nn.Module"),sg.forEach(t),Ou=i(Gd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gd.forEach(t),Au=c(Zo),We=s(Zo,"DIV",{class:!0});var Yo=a(We);y(Hn.$$.fragment,Yo),Iu=c(Yo),Dt=s(Yo,"P",{});var va=a(Dt);Gu=i(va,"The "),oa=s(va,"A",{href:!0});var ag=a(oa);Lu=i(ag,"PegasusModel"),ag.forEach(t),Nu=i(va," forward method, overrides the "),hr=s(va,"CODE",{});var rg=a(hr);Du=i(rg,"__call__"),rg.forEach(t),Uu=i(va," special method."),va.forEach(t),Wu=c(Yo),y(_o.$$.fragment,Yo),Bu=c(Yo),y(ko.$$.fragment,Yo),Yo.forEach(t),Zo.forEach(t),ed=c(o),Ut=s(o,"H2",{class:!0});var Ld=a(Ut);vo=s(Ld,"A",{id:!0,class:!0,href:!0});var ig=a(vo);mr=s(ig,"SPAN",{});var dg=a(mr);y(Qn.$$.fragment,dg),dg.forEach(t),ig.forEach(t),Ku=c(Ld),fr=s(Ld,"SPAN",{});var lg=a(fr);Vu=i(lg,"PegasusForConditionalGeneration"),lg.forEach(t),Ld.forEach(t),td=c(o),Ie=s(o,"DIV",{class:!0});var en=a(Ie);y(Jn.$$.fragment,en),Ru=c(en),Xn=s(en,"P",{});var Nd=a(Xn);Hu=i(Nd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),na=s(Nd,"A",{href:!0});var cg=a(na);Qu=i(cg,"PreTrainedModel"),cg.forEach(t),Ju=i(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),Xu=c(en),Zn=s(en,"P",{});var Dd=a(Zn);Zu=i(Dd,"This model is also a PyTorch "),Yn=s(Dd,"A",{href:!0,rel:!0});var ug=a(Yn);Yu=i(ug,"torch.nn.Module"),ug.forEach(t),ep=i(Dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd.forEach(t),tp=c(en),Be=s(en,"DIV",{class:!0});var tn=a(Be);y(es.$$.fragment,tn),op=c(tn),Wt=s(tn,"P",{});var ba=a(Wt);np=i(ba,"The "),sa=s(ba,"A",{href:!0});var pg=a(sa);sp=i(pg,"PegasusForConditionalGeneration"),pg.forEach(t),ap=i(ba," forward method, overrides the "),gr=s(ba,"CODE",{});var hg=a(gr);rp=i(hg,"__call__"),hg.forEach(t),ip=i(ba," special method."),ba.forEach(t),dp=c(tn),y(bo.$$.fragment,tn),lp=c(tn),y(yo.$$.fragment,tn),tn.forEach(t),en.forEach(t),od=c(o),Bt=s(o,"H2",{class:!0});var Ud=a(Bt);To=s(Ud,"A",{id:!0,class:!0,href:!0});var mg=a(To);_r=s(mg,"SPAN",{});var fg=a(_r);y(ts.$$.fragment,fg),fg.forEach(t),mg.forEach(t),cp=c(Ud),kr=s(Ud,"SPAN",{});var gg=a(kr);up=i(gg,"PegasusForCausalLM"),gg.forEach(t),Ud.forEach(t),nd=c(o),Kt=s(o,"DIV",{class:!0});var Wd=a(Kt);y(os.$$.fragment,Wd),pp=c(Wd),wo=s(Wd,"DIV",{class:!0});var Bd=a(wo);y(ns.$$.fragment,Bd),hp=c(Bd),y(Po.$$.fragment,Bd),Bd.forEach(t),Wd.forEach(t),sd=c(o),Vt=s(o,"H2",{class:!0});var Kd=a(Vt);$o=s(Kd,"A",{id:!0,class:!0,href:!0});var _g=a($o);vr=s(_g,"SPAN",{});var kg=a(vr);y(ss.$$.fragment,kg),kg.forEach(t),_g.forEach(t),mp=c(Kd),br=s(Kd,"SPAN",{});var vg=a(br);fp=i(vg,"TFPegasusModel"),vg.forEach(t),Kd.forEach(t),ad=c(o),be=s(o,"DIV",{class:!0});var bt=a(be);y(as.$$.fragment,bt),gp=c(bt),rs=s(bt,"P",{});var Vd=a(rs);_p=i(Vd,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),aa=s(Vd,"A",{href:!0});var bg=a(aa);kp=i(bg,"TFPreTrainedModel"),bg.forEach(t),vp=i(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),bp=c(bt),is=s(bt,"P",{});var Rd=a(is);yp=i(Rd,"This model is also a "),ds=s(Rd,"A",{href:!0,rel:!0});var yg=a(ds);Tp=i(yg,"tf.keras.Model"),yg.forEach(t),wp=i(Rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rd.forEach(t),Pp=c(bt),y(xo.$$.fragment,bt),$p=c(bt),Ke=s(bt,"DIV",{class:!0});var on=a(Ke);y(ls.$$.fragment,on),xp=c(on),Rt=s(on,"P",{});var ya=a(Rt);zp=i(ya,"The "),ra=s(ya,"A",{href:!0});var Tg=a(ra);Fp=i(Tg,"TFPegasusModel"),Tg.forEach(t),qp=i(ya," forward method, overrides the "),yr=s(ya,"CODE",{});var wg=a(yr);Ep=i(wg,"__call__"),wg.forEach(t),Cp=i(ya," special method."),ya.forEach(t),Mp=c(on),y(zo.$$.fragment,on),jp=c(on),y(Fo.$$.fragment,on),on.forEach(t),bt.forEach(t),rd=c(o),Ht=s(o,"H2",{class:!0});var Hd=a(Ht);qo=s(Hd,"A",{id:!0,class:!0,href:!0});var Pg=a(qo);Tr=s(Pg,"SPAN",{});var $g=a(Tr);y(cs.$$.fragment,$g),$g.forEach(t),Pg.forEach(t),Sp=c(Hd),wr=s(Hd,"SPAN",{});var xg=a(wr);Op=i(xg,"TFPegasusForConditionalGeneration"),xg.forEach(t),Hd.forEach(t),id=c(o),ye=s(o,"DIV",{class:!0});var yt=a(ye);y(us.$$.fragment,yt),Ap=c(yt),ps=s(yt,"P",{});var Qd=a(ps);Ip=i(Qd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=s(Qd,"A",{href:!0});var zg=a(ia);Gp=i(zg,"TFPreTrainedModel"),zg.forEach(t),Lp=i(Qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd.forEach(t),Np=c(yt),hs=s(yt,"P",{});var Jd=a(hs);Dp=i(Jd,"This model is also a "),ms=s(Jd,"A",{href:!0,rel:!0});var Fg=a(ms);Up=i(Fg,"tf.keras.Model"),Fg.forEach(t),Wp=i(Jd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jd.forEach(t),Bp=c(yt),y(Eo.$$.fragment,yt),Kp=c(yt),Ve=s(yt,"DIV",{class:!0});var nn=a(Ve);y(fs.$$.fragment,nn),Vp=c(nn),Qt=s(nn,"P",{});var Ta=a(Qt);Rp=i(Ta,"The "),da=s(Ta,"A",{href:!0});var qg=a(da);Hp=i(qg,"TFPegasusForConditionalGeneration"),qg.forEach(t),Qp=i(Ta," forward method, overrides the "),Pr=s(Ta,"CODE",{});var Eg=a(Pr);Jp=i(Eg,"__call__"),Eg.forEach(t),Xp=i(Ta," special method."),Ta.forEach(t),Zp=c(nn),y(Co.$$.fragment,nn),Yp=c(nn),y(Mo.$$.fragment,nn),nn.forEach(t),yt.forEach(t),dd=c(o),Jt=s(o,"H2",{class:!0});var Xd=a(Jt);jo=s(Xd,"A",{id:!0,class:!0,href:!0});var Cg=a(jo);$r=s(Cg,"SPAN",{});var Mg=a($r);y(gs.$$.fragment,Mg),Mg.forEach(t),Cg.forEach(t),eh=c(Xd),xr=s(Xd,"SPAN",{});var jg=a(xr);th=i(jg,"FlaxPegasusModel"),jg.forEach(t),Xd.forEach(t),ld=c(o),U=s(o,"DIV",{class:!0});var ae=a(U);y(_s.$$.fragment,ae),oh=c(ae),ks=s(ae,"P",{});var Zd=a(ks);nh=i(Zd,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),la=s(Zd,"A",{href:!0});var Sg=a(la);sh=i(Sg,"FlaxPreTrainedModel"),Sg.forEach(t),ah=i(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),rh=c(ae),vs=s(ae,"P",{});var Yd=a(vs);ih=i(Yd,`This model is also a Flax Linen
`),bs=s(Yd,"A",{href:!0,rel:!0});var Og=a(bs);dh=i(Og,"flax.nn.Module"),Og.forEach(t),lh=i(Yd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yd.forEach(t),ch=c(ae),zr=s(ae,"P",{});var Ag=a(zr);uh=i(Ag,"Finally, this model supports inherent JAX features such as:"),Ag.forEach(t),ph=c(ae),ct=s(ae,"UL",{});var sn=a(ct);Fr=s(sn,"LI",{});var Ig=a(Fr);ys=s(Ig,"A",{href:!0,rel:!0});var Gg=a(ys);hh=i(Gg,"Just-In-Time (JIT) compilation"),Gg.forEach(t),Ig.forEach(t),mh=c(sn),qr=s(sn,"LI",{});var Lg=a(qr);Ts=s(Lg,"A",{href:!0,rel:!0});var Ng=a(Ts);fh=i(Ng,"Automatic Differentiation"),Ng.forEach(t),Lg.forEach(t),gh=c(sn),Er=s(sn,"LI",{});var Dg=a(Er);ws=s(Dg,"A",{href:!0,rel:!0});var Ug=a(ws);_h=i(Ug,"Vectorization"),Ug.forEach(t),Dg.forEach(t),kh=c(sn),Cr=s(sn,"LI",{});var Wg=a(Cr);Ps=s(Wg,"A",{href:!0,rel:!0});var Bg=a(Ps);vh=i(Bg,"Parallelization"),Bg.forEach(t),Wg.forEach(t),sn.forEach(t),bh=c(ae),Re=s(ae,"DIV",{class:!0});var an=a(Re);y($s.$$.fragment,an),yh=c(an),Xt=s(an,"P",{});var wa=a(Xt);Th=i(wa,"The "),Mr=s(wa,"CODE",{});var Kg=a(Mr);wh=i(Kg,"FlaxPegasusPreTrainedModel"),Kg.forEach(t),Ph=i(wa," forward method, overrides the "),jr=s(wa,"CODE",{});var Vg=a(jr);$h=i(Vg,"__call__"),Vg.forEach(t),xh=i(wa," special method."),wa.forEach(t),zh=c(an),y(So.$$.fragment,an),Fh=c(an),y(Oo.$$.fragment,an),an.forEach(t),qh=c(ae),Ao=s(ae,"DIV",{class:!0});var el=a(Ao);y(xs.$$.fragment,el),Eh=c(el),y(Io.$$.fragment,el),el.forEach(t),Ch=c(ae),Go=s(ae,"DIV",{class:!0});var tl=a(Go);y(zs.$$.fragment,tl),Mh=c(tl),y(Lo.$$.fragment,tl),tl.forEach(t),ae.forEach(t),cd=c(o),Zt=s(o,"H2",{class:!0});var ol=a(Zt);No=s(ol,"A",{id:!0,class:!0,href:!0});var Rg=a(No);Sr=s(Rg,"SPAN",{});var Hg=a(Sr);y(Fs.$$.fragment,Hg),Hg.forEach(t),Rg.forEach(t),jh=c(ol),Or=s(ol,"SPAN",{});var Qg=a(Or);Sh=i(Qg,"FlaxPegasusForConditionalGeneration"),Qg.forEach(t),ol.forEach(t),ud=c(o),W=s(o,"DIV",{class:!0});var re=a(W);y(qs.$$.fragment,re),Oh=c(re),Es=s(re,"P",{});var nl=a(Es);Ah=i(nl,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),ca=s(nl,"A",{href:!0});var Jg=a(ca);Ih=i(Jg,"FlaxPreTrainedModel"),Jg.forEach(t),Gh=i(nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nl.forEach(t),Lh=c(re),Cs=s(re,"P",{});var sl=a(Cs);Nh=i(sl,`This model is also a Flax Linen
`),Ms=s(sl,"A",{href:!0,rel:!0});var Xg=a(Ms);Dh=i(Xg,"flax.nn.Module"),Xg.forEach(t),Uh=i(sl,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sl.forEach(t),Wh=c(re),Ar=s(re,"P",{});var Zg=a(Ar);Bh=i(Zg,"Finally, this model supports inherent JAX features such as:"),Zg.forEach(t),Kh=c(re),ut=s(re,"UL",{});var rn=a(ut);Ir=s(rn,"LI",{});var Yg=a(Ir);js=s(Yg,"A",{href:!0,rel:!0});var e_=a(js);Vh=i(e_,"Just-In-Time (JIT) compilation"),e_.forEach(t),Yg.forEach(t),Rh=c(rn),Gr=s(rn,"LI",{});var t_=a(Gr);Ss=s(t_,"A",{href:!0,rel:!0});var o_=a(Ss);Hh=i(o_,"Automatic Differentiation"),o_.forEach(t),t_.forEach(t),Qh=c(rn),Lr=s(rn,"LI",{});var n_=a(Lr);Os=s(n_,"A",{href:!0,rel:!0});var s_=a(Os);Jh=i(s_,"Vectorization"),s_.forEach(t),n_.forEach(t),Xh=c(rn),Nr=s(rn,"LI",{});var a_=a(Nr);As=s(a_,"A",{href:!0,rel:!0});var r_=a(As);Zh=i(r_,"Parallelization"),r_.forEach(t),a_.forEach(t),rn.forEach(t),Yh=c(re),M=s(re,"DIV",{class:!0});var O=a(M);y(Is.$$.fragment,O),em=c(O),Yt=s(O,"P",{});var Pa=a(Yt);tm=i(Pa,"The "),Dr=s(Pa,"CODE",{});var i_=a(Dr);om=i(i_,"FlaxPegasusPreTrainedModel"),i_.forEach(t),nm=i(Pa," forward method, overrides the "),Ur=s(Pa,"CODE",{});var d_=a(Ur);sm=i(d_,"__call__"),d_.forEach(t),am=i(Pa," special method."),Pa.forEach(t),rm=c(O),y(Do.$$.fragment,O),im=c(O),Wr=s(O,"P",{});var l_=a(Wr);dm=i(l_,"Summarization example:"),l_.forEach(t),lm=c(O),Br=s(O,"BLOCKQUOTE",{});var c_=a(Br);Kr=s(c_,"BLOCKQUOTE",{});var u_=a(Kr);Vr=s(u_,"BLOCKQUOTE",{});var p_=a(Vr);Rr=s(p_,"P",{});var h_=a(Rr);cm=i(h_,"from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),h_.forEach(t),p_.forEach(t),u_.forEach(t),c_.forEach(t),um=c(O),Hr=s(O,"BLOCKQUOTE",{});var m_=a(Hr);Qr=s(m_,"BLOCKQUOTE",{});var f_=a(Qr);Jr=s(f_,"BLOCKQUOTE",{});var g_=a(Jr);Xr=s(g_,"P",{});var __=a(Xr);pm=i(__,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),__.forEach(t),g_.forEach(t),f_.forEach(t),m_.forEach(t),hm=c(O),Zr=s(O,"BLOCKQUOTE",{});var k_=a(Zr);Yr=s(k_,"BLOCKQUOTE",{});var v_=a(Yr);ei=s(v_,"BLOCKQUOTE",{});var b_=a(ei);ti=s(b_,"P",{});var y_=a(ti);mm=i(y_,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),y_.forEach(t),b_.forEach(t),v_.forEach(t),k_.forEach(t),fm=c(O),oi=s(O,"BLOCKQUOTE",{});var T_=a(oi);ni=s(T_,"BLOCKQUOTE",{});var w_=a(ni);Gs=s(w_,"BLOCKQUOTE",{});var al=a(Gs);Uo=s(al,"H1",{class:!0});var rl=a(Uo);Wo=s(rl,"A",{id:!0,class:!0,href:!0});var P_=a(Wo);si=s(P_,"SPAN",{});var $_=a(si);y(Ls.$$.fragment,$_),$_.forEach(t),P_.forEach(t),gm=c(rl),ai=s(rl,"SPAN",{});var x_=a(ai);_m=i(x_,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),x_.forEach(t),rl.forEach(t),km=c(al),ri=s(al,"P",{});var z_=a(ri);vm=i(z_,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),z_.forEach(t),al.forEach(t),w_.forEach(t),T_.forEach(t),bm=c(O),ii=s(O,"P",{});var F_=a(ii);ym=i(F_,"Mask filling example:"),F_.forEach(t),Tm=c(O),di=s(O,"BLOCKQUOTE",{});var q_=a(di);li=s(q_,"BLOCKQUOTE",{});var E_=a(li);ci=s(E_,"BLOCKQUOTE",{});var C_=a(ci);ui=s(C_,"P",{});var M_=a(ui);wm=i(M_,`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),M_.forEach(t),C_.forEach(t),E_.forEach(t),q_.forEach(t),Pm=c(O),pi=s(O,"BLOCKQUOTE",{});var j_=a(pi);hi=s(j_,"BLOCKQUOTE",{});var S_=a(hi);mi=s(S_,"BLOCKQUOTE",{});var O_=a(mi);fi=s(O_,"P",{});var A_=a(fi);$m=i(A_,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),A_.forEach(t),O_.forEach(t),S_.forEach(t),j_.forEach(t),xm=c(O),gi=s(O,"BLOCKQUOTE",{});var I_=a(gi);_i=s(I_,"BLOCKQUOTE",{});var G_=a(_i);ki=s(G_,"BLOCKQUOTE",{});var L_=a(ki);vi=s(L_,"P",{});var N_=a(vi);zm=i(N_,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),N_.forEach(t),L_.forEach(t),G_.forEach(t),I_.forEach(t),Fm=c(O),bi=s(O,"BLOCKQUOTE",{});var D_=a(bi);yi=s(D_,"BLOCKQUOTE",{});var U_=a(yi);Ti=s(U_,"BLOCKQUOTE",{});var W_=a(Ti);wi=s(W_,"P",{});var B_=a(wi);qm=i(B_,"tokenizer.decode(predictions).split()"),B_.forEach(t),W_.forEach(t),U_.forEach(t),D_.forEach(t),O.forEach(t),Em=c(re),Bo=s(re,"DIV",{class:!0});var il=a(Bo);y(Ns.$$.fragment,il),Cm=c(il),y(Ko.$$.fragment,il),il.forEach(t),Mm=c(re),Vo=s(re,"DIV",{class:!0});var dl=a(Vo);y(Ds.$$.fragment,dl),jm=c(dl),y(Ro.$$.fragment,dl),dl.forEach(t),re.forEach(t),this.h()},h(){u(p,"name","hf:doc:metadata"),u(p,"content",JSON.stringify(gk)),u(m,"id","pegasus"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#pegasus"),u(_,"class","relative group"),u(ie,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),u(ie,"rel","nofollow"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(N,"class","relative group"),u(ue,"href","https://arxiv.org/pdf/1912.08777.pdf"),u(ue,"rel","nofollow"),u(he,"href","https://huggingface.co/sshleifer"),u(he,"rel","nofollow"),u(fe,"href","https://github.com/google-research/pegasus"),u(fe,"rel","nofollow"),u(H,"id","checkpoints"),u(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(H,"href","#checkpoints"),u(J,"class","relative group"),u(X,"href","https://huggingface.co/models?search=pegasus"),u(X,"rel","nofollow"),u(Se,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),u(Se,"rel","nofollow"),u(ln,"href","https://huggingface.co/models?search=distill-pegasus"),u(ln,"rel","nofollow"),u(cn,"href","https://arxiv.org/abs/2010.13002"),u(cn,"rel","nofollow"),u(oo,"id","examples"),u(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oo,"href","#examples"),u(qt,"class","relative group"),u(pn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),u(pn,"rel","nofollow"),u(hn,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),u(hn,"rel","nofollow"),u(so,"id","implementation-notes"),u(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(so,"href","#implementation-notes"),u(Et,"class","relative group"),u(Rs,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(_n,"href","https://github.com/google-research/pegasus"),u(_n,"rel","nofollow"),u(ao,"id","usage-example"),u(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ao,"href","#usage-example"),u(jt,"class","relative group"),u(ro,"id","transformers.PegasusConfig"),u(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ro,"href","#transformers.PegasusConfig"),u(St,"class","relative group"),u(Hs,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusModel"),u(Tn,"href","https://huggingface.co/google/pegasus-large"),u(Tn,"rel","nofollow"),u(Qs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Js,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"id","transformers.PegasusTokenizer"),u(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lo,"href","#transformers.PegasusTokenizer"),u(It,"class","relative group"),u(xn,"href","https://github.com/google/sentencepiece"),u(xn,"rel","nofollow"),u(Xs,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"id","transformers.PegasusTokenizerFast"),u(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mo,"href","#transformers.PegasusTokenizerFast"),u(Gt,"class","relative group"),u(In,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(In,"rel","nofollow"),u(Ys,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"id","transformers.PegasusModel"),u(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(go,"href","#transformers.PegasusModel"),u(Nt,"class","relative group"),u(ta,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rn,"rel","nofollow"),u(oa,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusModel"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"id","transformers.PegasusForConditionalGeneration"),u(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vo,"href","#transformers.PegasusForConditionalGeneration"),u(Ut,"class","relative group"),u(na,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yn,"rel","nofollow"),u(sa,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(To,"id","transformers.PegasusForCausalLM"),u(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(To,"href","#transformers.PegasusForCausalLM"),u(Bt,"class","relative group"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($o,"id","transformers.TFPegasusModel"),u($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($o,"href","#transformers.TFPegasusModel"),u(Vt,"class","relative group"),u(aa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ds,"rel","nofollow"),u(ra,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.TFPegasusModel"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qo,"id","transformers.TFPegasusForConditionalGeneration"),u(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qo,"href","#transformers.TFPegasusForConditionalGeneration"),u(Ht,"class","relative group"),u(ia,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ms,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ms,"rel","nofollow"),u(da,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jo,"id","transformers.FlaxPegasusModel"),u(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jo,"href","#transformers.FlaxPegasusModel"),u(Jt,"class","relative group"),u(la,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(bs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(bs,"rel","nofollow"),u(ys,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ys,"rel","nofollow"),u(Ts,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ts,"rel","nofollow"),u(ws,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ws,"rel","nofollow"),u(Ps,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ps,"rel","nofollow"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.FlaxPegasusForConditionalGeneration"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.FlaxPegasusForConditionalGeneration"),u(Zt,"class","relative group"),u(ca,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ms,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Ms,"rel","nofollow"),u(js,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(js,"rel","nofollow"),u(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ss,"rel","nofollow"),u(Os,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Os,"rel","nofollow"),u(As,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(As,"rel","nofollow"),u(Wo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),u(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),u(Uo,"class","relative group"),u(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,p),f(o,v,g),f(o,_,g),e(_,m),e(m,k),T(d,k,null),e(_,h),e(_,E),e(E,Qe),f(o,Ge,g),f(o,L,g),e(L,Pe),e(Pe,$e),e(L,q),e(L,ie),e(ie,de),e(L,Je),f(o,Le,g),f(o,N,g),e(N,ee),e(ee,xe),T(K,xe,null),e(N,Xe),e(N,ze),e(ze,le),f(o,Ne,g),f(o,te,g),e(te,ce),e(te,ue),e(ue,Ze),e(te,Fe),f(o,S,g),f(o,A,g),e(A,Ye),f(o,oe,g),f(o,ne,g),e(ne,qe),e(qe,pe),e(ne,et),e(ne,Ee),e(Ee,D),f(o,De,g),f(o,G,g),e(G,tt),e(G,he),e(he,me),e(G,ot),e(G,fe),e(fe,Q),e(G,nt),f(o,se,g),f(o,J,g),e(J,H),e(H,I),T(ge,I,null),e(J,V),e(J,Ce),e(Ce,st),f(o,x,g),f(o,F,g),e(F,Tt),e(F,X),e(X,wt),e(F,Pt),e(F,C),e(C,$t),e(F,xt),f(o,mt,g),f(o,B,g),e(B,at),e(at,Z),e(B,_e),e(B,rt),e(rt,zt),e(B,ke),e(B,it),e(it,Ft),e(B,dt),e(B,Me),e(Me,je),e(Me,Se),e(Se,ll),e(Me,cl),e(B,ul),e(B,to),e(to,ln),e(ln,pl),e(to,hl),e(to,cn),e(cn,ml),e(to,fl),f(o,Li,g),f(o,qt,g),e(qt,oo),e(oo,$a),T(un,$a,null),e(qt,gl),e(qt,xa),e(xa,_l),f(o,Ni,g),f(o,ft,g),e(ft,no),e(no,pn),e(pn,kl),e(no,vl),e(no,hn),e(hn,bl),e(no,yl),e(ft,Tl),e(ft,za),e(za,wl),e(ft,Pl),e(ft,Fa),e(Fa,$l),f(o,Di,g),f(o,Et,g),e(Et,so),e(so,qa),T(mn,qa,null),e(Et,xl),e(Et,Ea),e(Ea,zl),f(o,Ui,g),f(o,Te,g),e(Te,Ca),e(Ca,Ma),e(Ma,Fl),e(Te,ql),e(Te,ja),e(ja,Vs),e(Vs,El),e(Vs,Rs),e(Rs,Cl),e(Te,Ml),e(Te,fn),e(fn,Sa),e(Sa,jl),e(fn,Sl),e(fn,Ct),e(Ct,Oa),e(Oa,Ol),e(Ct,Al),e(Ct,Aa),e(Aa,Il),e(Ct,Gl),e(Ct,gn),e(gn,Ll),e(gn,Ia),e(Ia,Nl),e(gn,Dl),e(Te,Ul),e(Te,Ga),e(Ga,lt),e(lt,Wl),e(lt,La),e(La,Bl),e(lt,Kl),e(lt,Na),e(Na,Vl),e(lt,Rl),e(lt,Da),e(Da,Hl),e(lt,Ql),e(Te,Jl),e(Te,Ua),e(Ua,Mt),e(Mt,Xl),e(Mt,_n),e(_n,Zl),e(Mt,Yl),e(Mt,Wa),e(Wa,ec),e(Mt,tc),f(o,Wi,g),f(o,jt,g),e(jt,ao),e(ao,Ba),T(kn,Ba,null),e(jt,oc),e(jt,Ka),e(Ka,nc),f(o,Bi,g),T(vn,o,g),f(o,Ki,g),f(o,St,g),e(St,ro),e(ro,Va),T(bn,Va,null),e(St,sc),e(St,Ra),e(Ra,ac),f(o,Vi,g),f(o,Oe,g),T(yn,Oe,null),e(Oe,rc),e(Oe,Ot),e(Ot,ic),e(Ot,Hs),e(Hs,dc),e(Ot,lc),e(Ot,Tn),e(Tn,cc),e(Ot,uc),e(Oe,pc),e(Oe,At),e(At,hc),e(At,Qs),e(Qs,mc),e(At,fc),e(At,Js),e(Js,gc),e(At,_c),e(Oe,kc),T(io,Oe,null),f(o,Ri,g),f(o,It,g),e(It,lo),e(lo,Ha),T(wn,Ha,null),e(It,vc),e(It,Qa),e(Qa,bc),f(o,Hi,g),f(o,co,g),e(co,yc),e(co,Ja),e(Ja,Tc),e(co,wc),f(o,Qi,g),f(o,R,g),T(Pn,R,null),e(R,Pc),e(R,$n),e($n,$c),e($n,xn),e(xn,xc),e($n,zc),e(R,Fc),e(R,zn),e(zn,qc),e(zn,Xs),e(Xs,Ec),e(zn,Cc),e(R,Mc),e(R,Ue),T(Fn,Ue,null),e(Ue,jc),e(Ue,qn),e(qn,Sc),e(qn,Xa),e(Xa,Oc),e(qn,Ac),e(Ue,Ic),e(Ue,En),e(En,Zs),e(Zs,Gc),e(Zs,Za),e(Za,Lc),e(En,Nc),e(En,Cn),e(Cn,Dc),e(Cn,Ya),e(Ya,Uc),e(Cn,Wc),e(Ue,Bc),e(Ue,er),e(er,Kc),e(R,Vc),e(R,uo),T(Mn,uo,null),e(uo,Rc),e(uo,tr),e(tr,Hc),e(R,Qc),e(R,po),T(jn,po,null),e(po,Jc),e(po,or),e(or,Xc),e(R,Zc),e(R,ho),T(Sn,ho,null),e(ho,Yc),e(ho,nr),e(nr,eu),f(o,Ji,g),f(o,Gt,g),e(Gt,mo),e(mo,sr),T(On,sr,null),e(Gt,tu),e(Gt,ar),e(ar,ou),f(o,Xi,g),f(o,ve,g),T(An,ve,null),e(ve,nu),e(ve,Lt),e(Lt,su),e(Lt,rr),e(rr,au),e(Lt,ru),e(Lt,In),e(In,iu),e(Lt,du),e(ve,lu),e(ve,Gn),e(Gn,cu),e(Gn,Ys),e(Ys,uu),e(Gn,pu),e(ve,hu),e(ve,gt),T(Ln,gt,null),e(gt,mu),e(gt,ir),e(ir,fu),e(gt,gu),e(gt,Nn),e(Nn,ea),e(ea,_u),e(ea,dr),e(dr,ku),e(Nn,vu),e(Nn,Dn),e(Dn,bu),e(Dn,lr),e(lr,yu),e(Dn,Tu),e(ve,wu),e(ve,fo),T(Un,fo,null),e(fo,Pu),e(fo,cr),e(cr,$u),f(o,Zi,g),f(o,Nt,g),e(Nt,go),e(go,ur),T(Wn,ur,null),e(Nt,xu),e(Nt,pr),e(pr,zu),f(o,Yi,g),f(o,Ae,g),T(Bn,Ae,null),e(Ae,Fu),e(Ae,Kn),e(Kn,qu),e(Kn,ta),e(ta,Eu),e(Kn,Cu),e(Ae,Mu),e(Ae,Vn),e(Vn,ju),e(Vn,Rn),e(Rn,Su),e(Vn,Ou),e(Ae,Au),e(Ae,We),T(Hn,We,null),e(We,Iu),e(We,Dt),e(Dt,Gu),e(Dt,oa),e(oa,Lu),e(Dt,Nu),e(Dt,hr),e(hr,Du),e(Dt,Uu),e(We,Wu),T(_o,We,null),e(We,Bu),T(ko,We,null),f(o,ed,g),f(o,Ut,g),e(Ut,vo),e(vo,mr),T(Qn,mr,null),e(Ut,Ku),e(Ut,fr),e(fr,Vu),f(o,td,g),f(o,Ie,g),T(Jn,Ie,null),e(Ie,Ru),e(Ie,Xn),e(Xn,Hu),e(Xn,na),e(na,Qu),e(Xn,Ju),e(Ie,Xu),e(Ie,Zn),e(Zn,Zu),e(Zn,Yn),e(Yn,Yu),e(Zn,ep),e(Ie,tp),e(Ie,Be),T(es,Be,null),e(Be,op),e(Be,Wt),e(Wt,np),e(Wt,sa),e(sa,sp),e(Wt,ap),e(Wt,gr),e(gr,rp),e(Wt,ip),e(Be,dp),T(bo,Be,null),e(Be,lp),T(yo,Be,null),f(o,od,g),f(o,Bt,g),e(Bt,To),e(To,_r),T(ts,_r,null),e(Bt,cp),e(Bt,kr),e(kr,up),f(o,nd,g),f(o,Kt,g),T(os,Kt,null),e(Kt,pp),e(Kt,wo),T(ns,wo,null),e(wo,hp),T(Po,wo,null),f(o,sd,g),f(o,Vt,g),e(Vt,$o),e($o,vr),T(ss,vr,null),e(Vt,mp),e(Vt,br),e(br,fp),f(o,ad,g),f(o,be,g),T(as,be,null),e(be,gp),e(be,rs),e(rs,_p),e(rs,aa),e(aa,kp),e(rs,vp),e(be,bp),e(be,is),e(is,yp),e(is,ds),e(ds,Tp),e(is,wp),e(be,Pp),T(xo,be,null),e(be,$p),e(be,Ke),T(ls,Ke,null),e(Ke,xp),e(Ke,Rt),e(Rt,zp),e(Rt,ra),e(ra,Fp),e(Rt,qp),e(Rt,yr),e(yr,Ep),e(Rt,Cp),e(Ke,Mp),T(zo,Ke,null),e(Ke,jp),T(Fo,Ke,null),f(o,rd,g),f(o,Ht,g),e(Ht,qo),e(qo,Tr),T(cs,Tr,null),e(Ht,Sp),e(Ht,wr),e(wr,Op),f(o,id,g),f(o,ye,g),T(us,ye,null),e(ye,Ap),e(ye,ps),e(ps,Ip),e(ps,ia),e(ia,Gp),e(ps,Lp),e(ye,Np),e(ye,hs),e(hs,Dp),e(hs,ms),e(ms,Up),e(hs,Wp),e(ye,Bp),T(Eo,ye,null),e(ye,Kp),e(ye,Ve),T(fs,Ve,null),e(Ve,Vp),e(Ve,Qt),e(Qt,Rp),e(Qt,da),e(da,Hp),e(Qt,Qp),e(Qt,Pr),e(Pr,Jp),e(Qt,Xp),e(Ve,Zp),T(Co,Ve,null),e(Ve,Yp),T(Mo,Ve,null),f(o,dd,g),f(o,Jt,g),e(Jt,jo),e(jo,$r),T(gs,$r,null),e(Jt,eh),e(Jt,xr),e(xr,th),f(o,ld,g),f(o,U,g),T(_s,U,null),e(U,oh),e(U,ks),e(ks,nh),e(ks,la),e(la,sh),e(ks,ah),e(U,rh),e(U,vs),e(vs,ih),e(vs,bs),e(bs,dh),e(vs,lh),e(U,ch),e(U,zr),e(zr,uh),e(U,ph),e(U,ct),e(ct,Fr),e(Fr,ys),e(ys,hh),e(ct,mh),e(ct,qr),e(qr,Ts),e(Ts,fh),e(ct,gh),e(ct,Er),e(Er,ws),e(ws,_h),e(ct,kh),e(ct,Cr),e(Cr,Ps),e(Ps,vh),e(U,bh),e(U,Re),T($s,Re,null),e(Re,yh),e(Re,Xt),e(Xt,Th),e(Xt,Mr),e(Mr,wh),e(Xt,Ph),e(Xt,jr),e(jr,$h),e(Xt,xh),e(Re,zh),T(So,Re,null),e(Re,Fh),T(Oo,Re,null),e(U,qh),e(U,Ao),T(xs,Ao,null),e(Ao,Eh),T(Io,Ao,null),e(U,Ch),e(U,Go),T(zs,Go,null),e(Go,Mh),T(Lo,Go,null),f(o,cd,g),f(o,Zt,g),e(Zt,No),e(No,Sr),T(Fs,Sr,null),e(Zt,jh),e(Zt,Or),e(Or,Sh),f(o,ud,g),f(o,W,g),T(qs,W,null),e(W,Oh),e(W,Es),e(Es,Ah),e(Es,ca),e(ca,Ih),e(Es,Gh),e(W,Lh),e(W,Cs),e(Cs,Nh),e(Cs,Ms),e(Ms,Dh),e(Cs,Uh),e(W,Wh),e(W,Ar),e(Ar,Bh),e(W,Kh),e(W,ut),e(ut,Ir),e(Ir,js),e(js,Vh),e(ut,Rh),e(ut,Gr),e(Gr,Ss),e(Ss,Hh),e(ut,Qh),e(ut,Lr),e(Lr,Os),e(Os,Jh),e(ut,Xh),e(ut,Nr),e(Nr,As),e(As,Zh),e(W,Yh),e(W,M),T(Is,M,null),e(M,em),e(M,Yt),e(Yt,tm),e(Yt,Dr),e(Dr,om),e(Yt,nm),e(Yt,Ur),e(Ur,sm),e(Yt,am),e(M,rm),T(Do,M,null),e(M,im),e(M,Wr),e(Wr,dm),e(M,lm),e(M,Br),e(Br,Kr),e(Kr,Vr),e(Vr,Rr),e(Rr,cm),e(M,um),e(M,Hr),e(Hr,Qr),e(Qr,Jr),e(Jr,Xr),e(Xr,pm),e(M,hm),e(M,Zr),e(Zr,Yr),e(Yr,ei),e(ei,ti),e(ti,mm),e(M,fm),e(M,oi),e(oi,ni),e(ni,Gs),e(Gs,Uo),e(Uo,Wo),e(Wo,si),T(Ls,si,null),e(Uo,gm),e(Uo,ai),e(ai,_m),e(Gs,km),e(Gs,ri),e(ri,vm),e(M,bm),e(M,ii),e(ii,ym),e(M,Tm),e(M,di),e(di,li),e(li,ci),e(ci,ui),e(ui,wm),e(M,Pm),e(M,pi),e(pi,hi),e(hi,mi),e(mi,fi),e(fi,$m),e(M,xm),e(M,gi),e(gi,_i),e(_i,ki),e(ki,vi),e(vi,zm),e(M,Fm),e(M,bi),e(bi,yi),e(yi,Ti),e(Ti,wi),e(wi,qm),e(W,Em),e(W,Bo),T(Ns,Bo,null),e(Bo,Cm),T(Ko,Bo,null),e(W,Mm),e(W,Vo),T(Ds,Vo,null),e(Vo,jm),T(Ro,Vo,null),pd=!0},p(o,[g]){const Us={};g&2&&(Us.$$scope={dirty:g,ctx:o}),io.$set(Us);const Pi={};g&2&&(Pi.$$scope={dirty:g,ctx:o}),_o.$set(Pi);const $i={};g&2&&($i.$$scope={dirty:g,ctx:o}),ko.$set($i);const xi={};g&2&&(xi.$$scope={dirty:g,ctx:o}),bo.$set(xi);const Ho={};g&2&&(Ho.$$scope={dirty:g,ctx:o}),yo.$set(Ho);const zi={};g&2&&(zi.$$scope={dirty:g,ctx:o}),Po.$set(zi);const Fi={};g&2&&(Fi.$$scope={dirty:g,ctx:o}),xo.$set(Fi);const Ws={};g&2&&(Ws.$$scope={dirty:g,ctx:o}),zo.$set(Ws);const qi={};g&2&&(qi.$$scope={dirty:g,ctx:o}),Fo.$set(qi);const Ei={};g&2&&(Ei.$$scope={dirty:g,ctx:o}),Eo.$set(Ei);const Ci={};g&2&&(Ci.$$scope={dirty:g,ctx:o}),Co.$set(Ci);const Bs={};g&2&&(Bs.$$scope={dirty:g,ctx:o}),Mo.$set(Bs);const Mi={};g&2&&(Mi.$$scope={dirty:g,ctx:o}),So.$set(Mi);const ji={};g&2&&(ji.$$scope={dirty:g,ctx:o}),Oo.$set(ji);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:o}),Io.$set(Ks);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:o}),Lo.$set(Si);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:o}),Do.$set(Oi);const eo={};g&2&&(eo.$$scope={dirty:g,ctx:o}),Ko.$set(eo);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:o}),Ro.$set(Ai)},i(o){pd||(w(d.$$.fragment,o),w(K.$$.fragment,o),w(ge.$$.fragment,o),w(un.$$.fragment,o),w(mn.$$.fragment,o),w(kn.$$.fragment,o),w(vn.$$.fragment,o),w(bn.$$.fragment,o),w(yn.$$.fragment,o),w(io.$$.fragment,o),w(wn.$$.fragment,o),w(Pn.$$.fragment,o),w(Fn.$$.fragment,o),w(Mn.$$.fragment,o),w(jn.$$.fragment,o),w(Sn.$$.fragment,o),w(On.$$.fragment,o),w(An.$$.fragment,o),w(Ln.$$.fragment,o),w(Un.$$.fragment,o),w(Wn.$$.fragment,o),w(Bn.$$.fragment,o),w(Hn.$$.fragment,o),w(_o.$$.fragment,o),w(ko.$$.fragment,o),w(Qn.$$.fragment,o),w(Jn.$$.fragment,o),w(es.$$.fragment,o),w(bo.$$.fragment,o),w(yo.$$.fragment,o),w(ts.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(Po.$$.fragment,o),w(ss.$$.fragment,o),w(as.$$.fragment,o),w(xo.$$.fragment,o),w(ls.$$.fragment,o),w(zo.$$.fragment,o),w(Fo.$$.fragment,o),w(cs.$$.fragment,o),w(us.$$.fragment,o),w(Eo.$$.fragment,o),w(fs.$$.fragment,o),w(Co.$$.fragment,o),w(Mo.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w($s.$$.fragment,o),w(So.$$.fragment,o),w(Oo.$$.fragment,o),w(xs.$$.fragment,o),w(Io.$$.fragment,o),w(zs.$$.fragment,o),w(Lo.$$.fragment,o),w(Fs.$$.fragment,o),w(qs.$$.fragment,o),w(Is.$$.fragment,o),w(Do.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(Ko.$$.fragment,o),w(Ds.$$.fragment,o),w(Ro.$$.fragment,o),pd=!0)},o(o){P(d.$$.fragment,o),P(K.$$.fragment,o),P(ge.$$.fragment,o),P(un.$$.fragment,o),P(mn.$$.fragment,o),P(kn.$$.fragment,o),P(vn.$$.fragment,o),P(bn.$$.fragment,o),P(yn.$$.fragment,o),P(io.$$.fragment,o),P(wn.$$.fragment,o),P(Pn.$$.fragment,o),P(Fn.$$.fragment,o),P(Mn.$$.fragment,o),P(jn.$$.fragment,o),P(Sn.$$.fragment,o),P(On.$$.fragment,o),P(An.$$.fragment,o),P(Ln.$$.fragment,o),P(Un.$$.fragment,o),P(Wn.$$.fragment,o),P(Bn.$$.fragment,o),P(Hn.$$.fragment,o),P(_o.$$.fragment,o),P(ko.$$.fragment,o),P(Qn.$$.fragment,o),P(Jn.$$.fragment,o),P(es.$$.fragment,o),P(bo.$$.fragment,o),P(yo.$$.fragment,o),P(ts.$$.fragment,o),P(os.$$.fragment,o),P(ns.$$.fragment,o),P(Po.$$.fragment,o),P(ss.$$.fragment,o),P(as.$$.fragment,o),P(xo.$$.fragment,o),P(ls.$$.fragment,o),P(zo.$$.fragment,o),P(Fo.$$.fragment,o),P(cs.$$.fragment,o),P(us.$$.fragment,o),P(Eo.$$.fragment,o),P(fs.$$.fragment,o),P(Co.$$.fragment,o),P(Mo.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P($s.$$.fragment,o),P(So.$$.fragment,o),P(Oo.$$.fragment,o),P(xs.$$.fragment,o),P(Io.$$.fragment,o),P(zs.$$.fragment,o),P(Lo.$$.fragment,o),P(Fs.$$.fragment,o),P(qs.$$.fragment,o),P(Is.$$.fragment,o),P(Do.$$.fragment,o),P(Ls.$$.fragment,o),P(Ns.$$.fragment,o),P(Ko.$$.fragment,o),P(Ds.$$.fragment,o),P(Ro.$$.fragment,o),pd=!1},d(o){t(p),o&&t(v),o&&t(_),$(d),o&&t(Ge),o&&t(L),o&&t(Le),o&&t(N),$(K),o&&t(Ne),o&&t(te),o&&t(S),o&&t(A),o&&t(oe),o&&t(ne),o&&t(De),o&&t(G),o&&t(se),o&&t(J),$(ge),o&&t(x),o&&t(F),o&&t(mt),o&&t(B),o&&t(Li),o&&t(qt),$(un),o&&t(Ni),o&&t(ft),o&&t(Di),o&&t(Et),$(mn),o&&t(Ui),o&&t(Te),o&&t(Wi),o&&t(jt),$(kn),o&&t(Bi),$(vn,o),o&&t(Ki),o&&t(St),$(bn),o&&t(Vi),o&&t(Oe),$(yn),$(io),o&&t(Ri),o&&t(It),$(wn),o&&t(Hi),o&&t(co),o&&t(Qi),o&&t(R),$(Pn),$(Fn),$(Mn),$(jn),$(Sn),o&&t(Ji),o&&t(Gt),$(On),o&&t(Xi),o&&t(ve),$(An),$(Ln),$(Un),o&&t(Zi),o&&t(Nt),$(Wn),o&&t(Yi),o&&t(Ae),$(Bn),$(Hn),$(_o),$(ko),o&&t(ed),o&&t(Ut),$(Qn),o&&t(td),o&&t(Ie),$(Jn),$(es),$(bo),$(yo),o&&t(od),o&&t(Bt),$(ts),o&&t(nd),o&&t(Kt),$(os),$(ns),$(Po),o&&t(sd),o&&t(Vt),$(ss),o&&t(ad),o&&t(be),$(as),$(xo),$(ls),$(zo),$(Fo),o&&t(rd),o&&t(Ht),$(cs),o&&t(id),o&&t(ye),$(us),$(Eo),$(fs),$(Co),$(Mo),o&&t(dd),o&&t(Jt),$(gs),o&&t(ld),o&&t(U),$(_s),$($s),$(So),$(Oo),$(xs),$(Io),$(zs),$(Lo),o&&t(cd),o&&t(Zt),$(Fs),o&&t(ud),o&&t(W),$(qs),$(Is),$(Do),$(Ls),$(Ns),$(Ko),$(Ds),$(Ro)}}}const gk={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function _k(z){return Q_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pk extends K_{constructor(p){super();V_(this,p,_k,fk,R_,{})}}export{Pk as default,gk as metadata};
