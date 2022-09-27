import{S as gm,i as _m,s as vm,e as o,k as l,w as M,t as r,M as km,c as s,d as t,m as c,a,x as b,h as i,b as p,G as e,g as f,y,q as x,o as w,B as $,v as Tm,L as Vt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as Z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Rt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Mm(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianModel, MarianConfig

# Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration
configuration = MarianConfig()

# Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration
model = MarianModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianModel, MarianConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MarianConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=o("p"),k=r("Examples:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Examples:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function bm(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
src_texts = ["I am a small frog.", "Tom asked his teacher for advice."]
tgt_texts = ["Ich bin ein kleiner Frosch.", "Tom bat seinen Lehrer um Rat."]  # optional
inputs = tokenizer(src_texts, text_target=tgt_texts, return_tensors="pt", padding=True)

outputs = model(**inputs)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_texts = [<span class="hljs-string">&quot;I am a small frog.&quot;</span>, <span class="hljs-string">&quot;Tom asked his teacher for advice.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_texts = [<span class="hljs-string">&quot;Ich bin ein kleiner Frosch.&quot;</span>, <span class="hljs-string">&quot;Tom bat seinen Lehrer um Rat.&quot;</span>]  <span class="hljs-comment"># optional</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(src_texts, text_target=tgt_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># keys  [input_ids, attention_mask, labels].</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`}}),{c(){h=o("p"),k=r("Examples:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Examples:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function ym(E){let h,k,_,g,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var q=a(_);g=i(q,"Module"),q.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,h,u),e(h,k),e(h,_),e(_,g),e(h,v)},d(d){d&&t(h)}}}function xm(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer, MarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = MarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer(
    "<pad> Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen",
    return_tensors="pt",
    add_special_tokens=False,
)
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&lt;pad&gt; Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>    add_special_tokens=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">26</span>, <span class="hljs-number">512</span>]`}}),{c(){h=o("p"),k=r("Example:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function wm(E){let h,k,_,g,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var q=a(_);g=i(q,"Module"),q.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,h,u),e(h,k),e(h,_),e(_,g),e(h,v)},d(d){d&&t(h)}}}function $m(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer, MarianMTModel

src = "fr"  # source language
trg = "en"  # target language

model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"
model = MarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)

sample_text = "o\xF9 est l'arr\xEAt de bus ?"
batch = tokenizer([sample_text], return_tensors="pt")

generated_ids = model.generate(**batch)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Where&#x27;s the bus stop?&quot;</span>`}}),{c(){h=o("p"),k=r("Examples:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Examples:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function zm(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-fr-en")
model = MarianForCausalLM.from_pretrained("Helsinki-NLP/opus-mt-fr-en", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){h=o("p"),k=r("Example:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function jm(E){let h,k,_,g,v,d,u,q,Ve,Ne,C,ve,ke,z,Q,ee,Ke,Ce,R,Ge,Le,L,X,Te,H,Je,Me,te,Ie,F,ne,N,I,Ye,V,oe,Ze,U,Xe,Qe,A,be,O,et,se,ae,tt,re,K,nt,ie,ye,de,S,ot,D,xe,st;return{c(){h=o("p"),k=r("TensorFlow models and layers in "),_=o("code"),g=r("transformers"),v=r(" accept two formats as input:"),d=l(),u=o("ul"),q=o("li"),Ve=r("having all inputs as keyword arguments (like PyTorch models), or"),Ne=l(),C=o("li"),ve=r("having all inputs as a list, tuple or dict in the first positional argument."),ke=l(),z=o("p"),Q=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=o("code"),Ke=r("model.fit()"),Ce=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=o("code"),Ge=r("model.fit()"),Le=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),L=o("code"),X=r("fit()"),Te=r(" and "),H=o("code"),Je=r("predict()"),Me=r(`, such as when creating your own layers or models with
the Keras `),te=o("code"),Ie=r("Functional"),F=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=l(),N=o("ul"),I=o("li"),Ye=r("a single Tensor with "),V=o("code"),oe=r("input_ids"),Ze=r(" only and nothing else: "),U=o("code"),Xe=r("model(input_ids)"),Qe=l(),A=o("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=o("code"),et=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),tt=r("model([input_ids, attention_mask, token_type_ids])"),re=l(),K=o("li"),nt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),de=l(),S=o("p"),ot=r(`Note that when creating models and layers with
`),D=o("a"),xe=r("subclassing"),st=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){h=s(T,"P",{});var j=a(h);k=i(j,"TensorFlow models and layers in "),_=s(j,"CODE",{});var we=a(_);g=i(we,"transformers"),we.forEach(t),v=i(j," accept two formats as input:"),j.forEach(t),d=c(T),u=s(T,"UL",{});var $e=a(u);q=s($e,"LI",{});var Ae=a(q);Ve=i(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),Ne=c($e),C=s($e,"LI",{});var ft=a(C);ve=i(ft,"having all inputs as a list, tuple or dict in the first positional argument."),ft.forEach(t),$e.forEach(t),ke=c(T),z=s(T,"P",{});var P=a(z);Q=i(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=s(P,"CODE",{});var gt=a(ee);Ke=i(gt,"model.fit()"),gt.forEach(t),Ce=i(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=s(P,"CODE",{});var le=a(R);Ge=i(le,"model.fit()"),le.forEach(t),Le=i(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),L=s(P,"CODE",{});var ze=a(L);X=i(ze,"fit()"),ze.forEach(t),Te=i(P," and "),H=s(P,"CODE",{});var _t=a(H);Je=i(_t,"predict()"),_t.forEach(t),Me=i(P,`, such as when creating your own layers or models with
the Keras `),te=s(P,"CODE",{});var at=a(te);Ie=i(at,"Functional"),at.forEach(t),F=i(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),ne=c(T),N=s(T,"UL",{});var G=a(N);I=s(G,"LI",{});var ce=a(I);Ye=i(ce,"a single Tensor with "),V=s(ce,"CODE",{});var vt=a(V);oe=i(vt,"input_ids"),vt.forEach(t),Ze=i(ce," only and nothing else: "),U=s(ce,"CODE",{});var je=a(U);Xe=i(je,"model(input_ids)"),je.forEach(t),ce.forEach(t),Qe=c(G),A=s(G,"LI",{});var pe=a(A);be=i(pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=s(pe,"CODE",{});var rt=a(O);et=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),se=i(pe," or "),ae=s(pe,"CODE",{});var kt=a(ae);tt=i(kt,"model([input_ids, attention_mask, token_type_ids])"),kt.forEach(t),pe.forEach(t),re=c(G),K=s(G,"LI",{});var it=a(K);nt=i(it,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=s(it,"CODE",{});var Tt=a(ie);ye=i(Tt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Tt.forEach(t),it.forEach(t),G.forEach(t),de=c(T),S=s(T,"P",{});var B=a(S);ot=i(B,`Note that when creating models and layers with
`),D=s(B,"A",{href:!0,rel:!0});var Mt=a(D);xe=i(Mt,"subclassing"),Mt.forEach(t),st=i(B,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),B.forEach(t),this.h()},h(){p(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),p(D,"rel","nofollow")},m(T,j){f(T,h,j),e(h,k),e(h,_),e(_,g),e(h,v),f(T,d,j),f(T,u,j),e(u,q),e(q,Ve),e(u,Ne),e(u,C),e(C,ve),f(T,ke,j),f(T,z,j),e(z,Q),e(z,ee),e(ee,Ke),e(z,Ce),e(z,R),e(R,Ge),e(z,Le),e(z,L),e(L,X),e(z,Te),e(z,H),e(H,Je),e(z,Me),e(z,te),e(te,Ie),e(z,F),f(T,ne,j),f(T,N,j),e(N,I),e(I,Ye),e(I,V),e(V,oe),e(I,Ze),e(I,U),e(U,Xe),e(N,Qe),e(N,A),e(A,be),e(A,O),e(O,et),e(A,se),e(A,ae),e(ae,tt),e(N,re),e(N,K),e(K,nt),e(K,ie),e(ie,ye),f(T,de,j),f(T,S,j),e(S,ot),e(S,D),e(D,xe),e(S,st)},d(T){T&&t(h),T&&t(d),T&&t(u),T&&t(ke),T&&t(z),T&&t(ne),T&&t(N),T&&t(de),T&&t(S)}}}function Em(E){let h,k,_,g,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var q=a(_);g=i(q,"Module"),q.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,h,u),e(h,k),e(h,_),e(_,g),e(h,v)},d(d){d&&t(h)}}}function qm(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer, TFMarianModel
import tensorflow as tf

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = TFMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=o("p"),k=r("Example:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function Pm(E){let h,k,_,g,v,d,u,q,Ve,Ne,C,ve,ke,z,Q,ee,Ke,Ce,R,Ge,Le,L,X,Te,H,Je,Me,te,Ie,F,ne,N,I,Ye,V,oe,Ze,U,Xe,Qe,A,be,O,et,se,ae,tt,re,K,nt,ie,ye,de,S,ot,D,xe,st;return{c(){h=o("p"),k=r("TensorFlow models and layers in "),_=o("code"),g=r("transformers"),v=r(" accept two formats as input:"),d=l(),u=o("ul"),q=o("li"),Ve=r("having all inputs as keyword arguments (like PyTorch models), or"),Ne=l(),C=o("li"),ve=r("having all inputs as a list, tuple or dict in the first positional argument."),ke=l(),z=o("p"),Q=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=o("code"),Ke=r("model.fit()"),Ce=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=o("code"),Ge=r("model.fit()"),Le=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),L=o("code"),X=r("fit()"),Te=r(" and "),H=o("code"),Je=r("predict()"),Me=r(`, such as when creating your own layers or models with
the Keras `),te=o("code"),Ie=r("Functional"),F=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=l(),N=o("ul"),I=o("li"),Ye=r("a single Tensor with "),V=o("code"),oe=r("input_ids"),Ze=r(" only and nothing else: "),U=o("code"),Xe=r("model(input_ids)"),Qe=l(),A=o("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=o("code"),et=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),tt=r("model([input_ids, attention_mask, token_type_ids])"),re=l(),K=o("li"),nt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),de=l(),S=o("p"),ot=r(`Note that when creating models and layers with
`),D=o("a"),xe=r("subclassing"),st=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){h=s(T,"P",{});var j=a(h);k=i(j,"TensorFlow models and layers in "),_=s(j,"CODE",{});var we=a(_);g=i(we,"transformers"),we.forEach(t),v=i(j," accept two formats as input:"),j.forEach(t),d=c(T),u=s(T,"UL",{});var $e=a(u);q=s($e,"LI",{});var Ae=a(q);Ve=i(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),Ne=c($e),C=s($e,"LI",{});var ft=a(C);ve=i(ft,"having all inputs as a list, tuple or dict in the first positional argument."),ft.forEach(t),$e.forEach(t),ke=c(T),z=s(T,"P",{});var P=a(z);Q=i(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=s(P,"CODE",{});var gt=a(ee);Ke=i(gt,"model.fit()"),gt.forEach(t),Ce=i(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=s(P,"CODE",{});var le=a(R);Ge=i(le,"model.fit()"),le.forEach(t),Le=i(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),L=s(P,"CODE",{});var ze=a(L);X=i(ze,"fit()"),ze.forEach(t),Te=i(P," and "),H=s(P,"CODE",{});var _t=a(H);Je=i(_t,"predict()"),_t.forEach(t),Me=i(P,`, such as when creating your own layers or models with
the Keras `),te=s(P,"CODE",{});var at=a(te);Ie=i(at,"Functional"),at.forEach(t),F=i(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),ne=c(T),N=s(T,"UL",{});var G=a(N);I=s(G,"LI",{});var ce=a(I);Ye=i(ce,"a single Tensor with "),V=s(ce,"CODE",{});var vt=a(V);oe=i(vt,"input_ids"),vt.forEach(t),Ze=i(ce," only and nothing else: "),U=s(ce,"CODE",{});var je=a(U);Xe=i(je,"model(input_ids)"),je.forEach(t),ce.forEach(t),Qe=c(G),A=s(G,"LI",{});var pe=a(A);be=i(pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=s(pe,"CODE",{});var rt=a(O);et=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),se=i(pe," or "),ae=s(pe,"CODE",{});var kt=a(ae);tt=i(kt,"model([input_ids, attention_mask, token_type_ids])"),kt.forEach(t),pe.forEach(t),re=c(G),K=s(G,"LI",{});var it=a(K);nt=i(it,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=s(it,"CODE",{});var Tt=a(ie);ye=i(Tt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Tt.forEach(t),it.forEach(t),G.forEach(t),de=c(T),S=s(T,"P",{});var B=a(S);ot=i(B,`Note that when creating models and layers with
`),D=s(B,"A",{href:!0,rel:!0});var Mt=a(D);xe=i(Mt,"subclassing"),Mt.forEach(t),st=i(B,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),B.forEach(t),this.h()},h(){p(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),p(D,"rel","nofollow")},m(T,j){f(T,h,j),e(h,k),e(h,_),e(_,g),e(h,v),f(T,d,j),f(T,u,j),e(u,q),e(q,Ve),e(u,Ne),e(u,C),e(C,ve),f(T,ke,j),f(T,z,j),e(z,Q),e(z,ee),e(ee,Ke),e(z,Ce),e(z,R),e(R,Ge),e(z,Le),e(z,L),e(L,X),e(z,Te),e(z,H),e(H,Je),e(z,Me),e(z,te),e(te,Ie),e(z,F),f(T,ne,j),f(T,N,j),e(N,I),e(I,Ye),e(I,V),e(V,oe),e(I,Ze),e(I,U),e(U,Xe),e(N,Qe),e(N,A),e(A,be),e(A,O),e(O,et),e(A,se),e(A,ae),e(ae,tt),e(N,re),e(N,K),e(K,nt),e(K,ie),e(ie,ye),f(T,de,j),f(T,S,j),e(S,ot),e(S,D),e(D,xe),e(S,st)},d(T){T&&t(h),T&&t(d),T&&t(u),T&&t(ke),T&&t(z),T&&t(ne),T&&t(N),T&&t(de),T&&t(S)}}}function Fm(E){let h,k,_,g,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var q=a(_);g=i(q,"Module"),q.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,h,u),e(h,k),e(h,_),e(_,g),e(h,v)},d(d){d&&t(h)}}}function Nm(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
from typing import List

src = "fr"  # source language
trg = "en"  # target language
sample_text = "o\xF9 est l'arr\xEAt de bus ?"
model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"

model = TFMarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)
batch = tokenizer([sample_text], return_tensors="tf")
gen = model.generate(**batch)
tokenizer.batch_decode(gen, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),{c(){h=o("p"),k=r("Examples:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Examples:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function Cm(E){let h,k,_,g,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var q=a(_);g=i(q,"Module"),q.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,h,u),e(h,k),e(h,_),e(_,g),e(h,v)},d(d){d&&t(h)}}}function Lm(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = FlaxMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=o("p"),k=r("Example:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function Im(E){let h,k,_,g,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var q=a(_);g=i(q,"Module"),q.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,h,u),e(h,k),e(h,_),e(_,g),e(h,v)},d(d){d&&t(h)}}}function Am(E){let h,k,_,g,v;return g=new Fe({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

model = FlaxMarianMTModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")
tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")

text = "My friends are cool but they eat too many carbs."
input_ids = tokenizer(text, max_length=64, return_tensors="jax").input_ids

sequences = model.generate(input_ids, max_length=64, num_beams=2).sequences

outputs = tokenizer.batch_decode(sequences, skip_special_tokens=True)
# should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianMTModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(text, max_length=<span class="hljs-number">64</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, max_length=<span class="hljs-number">64</span>, num_beams=<span class="hljs-number">2</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`}}),{c(){h=o("p"),k=r("Example:"),_=l(),M(g.$$.fragment)},l(d){h=s(d,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),_=c(d),b(g.$$.fragment,d)},m(d,u){f(d,h,u),e(h,k),f(d,_,u),y(g,d,u),v=!0},p:Vt,i(d){v||(x(g.$$.fragment,d),v=!0)},o(d){w(g.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(g,d)}}}function Om(E){let h,k,_,g,v,d,u,q,Ve,Ne,C,ve,ke,z,Q,ee,Ke,Ce,R,Ge,Le,L,X,Te,H,Je,Me,te,Ie,F,ne,N,I,Ye,V,oe,Ze,U,Xe,Qe,A,be,O,et,se,ae,tt,re,K,nt,ie,ye,de,S,ot,D,xe,st,T,j,we,$e,Ae,ft,P,gt,le,ze,_t,at,G,ce,vt,je,pe,rt,kt,it,Tt,B,Mt,Ks,Li,Ii,Gs,Ai,Oi,Si,Js,Hn,Di,Ys,Hi,Ui,Bi,Zs,Un,Wi,Bn,Ri,Vi,cr,bt,Kt,Xs,Wn,Ki,Qs,Gi,pr,Oe,_s,Ji,ea,Yi,Zi,Rn,Xi,Vn,Qi,ed,td,yt,nd,ta,od,sd,na,ad,rd,id,oa,dd,hr,xt,Gt,sa,Kn,ld,aa,cd,ur,Jt,ra,pd,hd,ia,Gn,ud,mr,wt,Yt,da,Jn,md,la,fd,fr,Se,Yn,gd,ca,_d,vd,kd,Zn,Td,pa,Md,bd,yd,Xn,xd,Qn,wd,$d,zd,eo,jd,ha,Ed,qd,gr,Zt,Pd,to,Fd,Nd,_r,no,vr,vs,Cd,kr,oo,Tr,$t,Xt,ua,so,Ld,ma,Id,Mr,ks,Ad,br,ao,yr,Ts,Od,xr,ro,wr,zt,Qt,fa,io,Sd,ga,Dd,$r,Ee,lo,Hd,jt,Ud,Ms,Bd,Wd,co,Rd,Vd,Kd,Et,Gd,bs,Jd,Yd,ys,Zd,Xd,Qd,en,zr,qt,tn,_a,po,el,va,tl,jr,he,ho,nl,uo,ol,mo,sl,al,rl,fo,il,xs,dl,ll,cl,nn,pl,on,go,hl,ka,ul,Er,Pt,sn,Ta,_o,ml,Ma,fl,qr,qe,vo,gl,ko,_l,ws,vl,kl,Tl,To,Ml,Mo,bl,yl,xl,De,bo,wl,Ft,$l,$s,zl,jl,ba,El,ql,Pl,an,Fl,rn,Pr,Nt,dn,ya,yo,Nl,xa,Cl,Fr,Pe,xo,Ll,wo,Il,zs,Al,Ol,Sl,$o,Dl,zo,Hl,Ul,Bl,ge,jo,Wl,Ct,Rl,js,Vl,Kl,wa,Gl,Jl,Yl,ln,Zl,Eo,Xl,qo,Ql,ec,tc,cn,Nr,Lt,pn,$a,Po,nc,za,oc,Cr,It,Fo,sc,hn,No,ac,un,Lr,At,mn,ja,Co,rc,Ea,ic,Ir,ue,Lo,dc,Io,lc,Es,cc,pc,hc,Ao,uc,Oo,mc,fc,gc,fn,_c,He,So,vc,Ot,kc,qs,Tc,Mc,qa,bc,yc,xc,gn,wc,_n,Ar,St,vn,Pa,Do,$c,Fa,zc,Or,me,Ho,jc,Uo,Ec,Ps,qc,Pc,Fc,Bo,Nc,Wo,Cc,Lc,Ic,kn,Ac,_e,Ro,Oc,Dt,Sc,Fs,Dc,Hc,Na,Uc,Bc,Wc,Tn,Rc,Vo,Vc,Ko,Kc,Gc,Jc,Mn,Sr,Ht,bn,Ca,Go,Yc,La,Zc,Dr,J,Jo,Xc,Yo,Qc,Ns,ep,tp,np,Zo,op,Xo,sp,ap,rp,Ia,ip,dp,dt,Aa,Qo,lp,cp,Oa,es,pp,hp,Sa,ts,up,mp,Da,ns,fp,gp,Ue,os,_p,Ut,vp,Ha,kp,Tp,Ua,Mp,bp,yp,yn,xp,xn,Hr,Bt,wn,Ba,ss,wp,Wa,$p,Ur,Y,as,zp,rs,jp,Cs,Ep,qp,Pp,is,Fp,ds,Np,Cp,Lp,Ra,Ip,Ap,lt,Va,ls,Op,Sp,Ka,cs,Dp,Hp,Ga,ps,Up,Bp,Ja,hs,Wp,Rp,Be,us,Vp,Wt,Kp,Ya,Gp,Jp,Za,Yp,Zp,Xp,$n,Qp,zn,Br;return d=new fe({}),H=new fe({}),Wn=new fe({}),Kn=new fe({}),Jn=new fe({}),no=new Fe({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fra<< this is a sentence in english that we want to translate to french",
    ">>por<< This should go to portuguese",
    ">>esp<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-roa"
tokenizer = MarianTokenizer.from_pretrained(model_name)
print(tokenizer.supported_language_codes)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
[tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fra&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;por&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;esp&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-roa&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.supported_language_codes)
[<span class="hljs-string">&#x27;&gt;&gt;zlm_Latn&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;mfe&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;hat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;pap&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ast&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;cat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ind&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;glg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;wln&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;spa&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;fra&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ron&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;por&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ita&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;oci&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;arg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;min&lt;&lt;&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>[tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>,
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),oo=new Fe({props:{code:`from huggingface_hub import list_models

model_list = list_models()
org = "Helsinki-NLP"
model_ids = [x.modelId for x in model_list if x.modelId.startswith(org)]
suffix = [x.split("/")[1] for x in model_ids]
old_style_multi_models = [f"{org}/{s}" for s in suffix if s != s.lower()]`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&quot;/&quot;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&quot;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&quot;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),so=new fe({}),ao=new Fe({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
 'Helsinki-NLP/opus-mt-ROMANCE-en',
 'Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA',
 'Helsinki-NLP/opus-mt-de-ZH',
 'Helsinki-NLP/opus-mt-en-CELTIC',
 'Helsinki-NLP/opus-mt-en-ROMANCE',
 'Helsinki-NLP/opus-mt-es-NORWAY',
 'Helsinki-NLP/opus-mt-fi-NORWAY',
 'Helsinki-NLP/opus-mt-fi-ZH',
 'Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI',
 'Helsinki-NLP/opus-mt-sv-NORWAY',
 'Helsinki-NLP/opus-mt-sv-ZH']
GROUP_MEMBERS = {
 'ZH': ['cmn', 'cn', 'yue', 'ze_zh', 'zh_cn', 'zh_CN', 'zh_HK', 'zh_tw', 'zh_TW', 'zh_yue', 'zhs', 'zht', 'zh'],
 'ROMANCE': ['fr', 'fr_BE', 'fr_CA', 'fr_FR', 'wa', 'frp', 'oc', 'ca', 'rm', 'lld', 'fur', 'lij', 'lmo', 'es', 'es_AR', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_ES', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PE', 'es_PR', 'es_SV', 'es_UY', 'es_VE', 'pt', 'pt_br', 'pt_BR', 'pt_PT', 'gl', 'lad', 'an', 'mwl', 'it', 'it_IT', 'co', 'nap', 'scn', 'vec', 'sc', 'ro', 'la'],
 'NORTH_EU': ['de', 'nl', 'fy', 'af', 'da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SCANDINAVIA': ['da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SAMI': ['se', 'sma', 'smj', 'smn', 'sms'],
 'NORWAY': ['nb_NO', 'nb', 'nn_NO', 'nn', 'nog', 'no_nb', 'no'],
 'CELTIC': ['ga', 'cy', 'br', 'gd', 'kw', 'gv']
}`,highlighted:`[<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-ROMANCE-en&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-de-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-CELTIC&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-ROMANCE&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-es-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-ZH&#x27;</span>]
GROUP_MEMBERS = {
 <span class="hljs-string">&#x27;ZH&#x27;</span>: [<span class="hljs-string">&#x27;cmn&#x27;</span>, <span class="hljs-string">&#x27;cn&#x27;</span>, <span class="hljs-string">&#x27;yue&#x27;</span>, <span class="hljs-string">&#x27;ze_zh&#x27;</span>, <span class="hljs-string">&#x27;zh_cn&#x27;</span>, <span class="hljs-string">&#x27;zh_CN&#x27;</span>, <span class="hljs-string">&#x27;zh_HK&#x27;</span>, <span class="hljs-string">&#x27;zh_tw&#x27;</span>, <span class="hljs-string">&#x27;zh_TW&#x27;</span>, <span class="hljs-string">&#x27;zh_yue&#x27;</span>, <span class="hljs-string">&#x27;zhs&#x27;</span>, <span class="hljs-string">&#x27;zht&#x27;</span>, <span class="hljs-string">&#x27;zh&#x27;</span>],
 <span class="hljs-string">&#x27;ROMANCE&#x27;</span>: [<span class="hljs-string">&#x27;fr&#x27;</span>, <span class="hljs-string">&#x27;fr_BE&#x27;</span>, <span class="hljs-string">&#x27;fr_CA&#x27;</span>, <span class="hljs-string">&#x27;fr_FR&#x27;</span>, <span class="hljs-string">&#x27;wa&#x27;</span>, <span class="hljs-string">&#x27;frp&#x27;</span>, <span class="hljs-string">&#x27;oc&#x27;</span>, <span class="hljs-string">&#x27;ca&#x27;</span>, <span class="hljs-string">&#x27;rm&#x27;</span>, <span class="hljs-string">&#x27;lld&#x27;</span>, <span class="hljs-string">&#x27;fur&#x27;</span>, <span class="hljs-string">&#x27;lij&#x27;</span>, <span class="hljs-string">&#x27;lmo&#x27;</span>, <span class="hljs-string">&#x27;es&#x27;</span>, <span class="hljs-string">&#x27;es_AR&#x27;</span>, <span class="hljs-string">&#x27;es_CL&#x27;</span>, <span class="hljs-string">&#x27;es_CO&#x27;</span>, <span class="hljs-string">&#x27;es_CR&#x27;</span>, <span class="hljs-string">&#x27;es_DO&#x27;</span>, <span class="hljs-string">&#x27;es_EC&#x27;</span>, <span class="hljs-string">&#x27;es_ES&#x27;</span>, <span class="hljs-string">&#x27;es_GT&#x27;</span>, <span class="hljs-string">&#x27;es_HN&#x27;</span>, <span class="hljs-string">&#x27;es_MX&#x27;</span>, <span class="hljs-string">&#x27;es_NI&#x27;</span>, <span class="hljs-string">&#x27;es_PA&#x27;</span>, <span class="hljs-string">&#x27;es_PE&#x27;</span>, <span class="hljs-string">&#x27;es_PR&#x27;</span>, <span class="hljs-string">&#x27;es_SV&#x27;</span>, <span class="hljs-string">&#x27;es_UY&#x27;</span>, <span class="hljs-string">&#x27;es_VE&#x27;</span>, <span class="hljs-string">&#x27;pt&#x27;</span>, <span class="hljs-string">&#x27;pt_br&#x27;</span>, <span class="hljs-string">&#x27;pt_BR&#x27;</span>, <span class="hljs-string">&#x27;pt_PT&#x27;</span>, <span class="hljs-string">&#x27;gl&#x27;</span>, <span class="hljs-string">&#x27;lad&#x27;</span>, <span class="hljs-string">&#x27;an&#x27;</span>, <span class="hljs-string">&#x27;mwl&#x27;</span>, <span class="hljs-string">&#x27;it&#x27;</span>, <span class="hljs-string">&#x27;it_IT&#x27;</span>, <span class="hljs-string">&#x27;co&#x27;</span>, <span class="hljs-string">&#x27;nap&#x27;</span>, <span class="hljs-string">&#x27;scn&#x27;</span>, <span class="hljs-string">&#x27;vec&#x27;</span>, <span class="hljs-string">&#x27;sc&#x27;</span>, <span class="hljs-string">&#x27;ro&#x27;</span>, <span class="hljs-string">&#x27;la&#x27;</span>],
 <span class="hljs-string">&#x27;NORTH_EU&#x27;</span>: [<span class="hljs-string">&#x27;de&#x27;</span>, <span class="hljs-string">&#x27;nl&#x27;</span>, <span class="hljs-string">&#x27;fy&#x27;</span>, <span class="hljs-string">&#x27;af&#x27;</span>, <span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SCANDINAVIA&#x27;</span>: [<span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SAMI&#x27;</span>: [<span class="hljs-string">&#x27;se&#x27;</span>, <span class="hljs-string">&#x27;sma&#x27;</span>, <span class="hljs-string">&#x27;smj&#x27;</span>, <span class="hljs-string">&#x27;smn&#x27;</span>, <span class="hljs-string">&#x27;sms&#x27;</span>],
 <span class="hljs-string">&#x27;NORWAY&#x27;</span>: [<span class="hljs-string">&#x27;nb_NO&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn_NO&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;nog&#x27;</span>, <span class="hljs-string">&#x27;no_nb&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>],
 <span class="hljs-string">&#x27;CELTIC&#x27;</span>: [<span class="hljs-string">&#x27;ga&#x27;</span>, <span class="hljs-string">&#x27;cy&#x27;</span>, <span class="hljs-string">&#x27;br&#x27;</span>, <span class="hljs-string">&#x27;gd&#x27;</span>, <span class="hljs-string">&#x27;kw&#x27;</span>, <span class="hljs-string">&#x27;gv&#x27;</span>]
}`}}),ro=new Fe({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fr<< this is a sentence in english that we want to translate to french",
    ">>pt<< This should go to portuguese",
    ">>es<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-ROMANCE"
tokenizer = MarianTokenizer.from_pretrained(model_name)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
tgt_text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fr&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;pt&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;es&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-ROMANCE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = [tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>, 
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),io=new fe({}),lo=new Z({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"decoder_vocab_size",val:" = None"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"share_encoder_decoder_embeddings",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MarianConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MarianConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MarianConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MarianConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MarianConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MarianConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MarianConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MarianConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MarianConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MarianConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MarianConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.MarianConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.MarianConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/configuration_marian.py#L34"}}),en=new Rt({props:{anchor:"transformers.MarianConfig.example",$$slots:{default:[Mm]},$$scope:{ctx:E}}}),po=new fe({}),ho=new Z({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"vocab",val:""},{name:"target_vocab_file",val:" = None"},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"separate_vocabs",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the source language.`,name:"source_spm"},{anchor:"transformers.MarianTokenizer.target_spm",description:`<strong>target_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the target language.`,name:"target_spm"},{anchor:"transformers.MarianTokenizer.source_lang",description:`<strong>source_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"source_lang"},{anchor:"transformers.MarianTokenizer.target_lang",description:`<strong>target_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"target_lang"},{anchor:"transformers.MarianTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MarianTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MarianTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MarianTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sentence length the model accepts.`,name:"model_max_length"},{anchor:"transformers.MarianTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.MarianTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/tokenization_marian.py#L61"}}),nn=new Rt({props:{anchor:"transformers.MarianTokenizer.example",$$slots:{default:[bm]},$$scope:{ctx:E}}}),go=new Z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MarianTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/tokenization_marian.py#L273"}}),_o=new fe({}),vo=new Z({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_marian.py#L1089"}}),bo=new Z({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_marian.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),an=new Dn({props:{$$slots:{default:[ym]},$$scope:{ctx:E}}}),rn=new Rt({props:{anchor:"transformers.MarianModel.forward.example",$$slots:{default:[xm]},$$scope:{ctx:E}}}),yo=new fe({}),xo=new Z({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_marian.py#L1273"}}),jo=new Z({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianMTModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianMTModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianMTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_marian.py#L1398",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),ln=new Dn({props:{$$slots:{default:[wm]},$$scope:{ctx:E}}}),cn=new Rt({props:{anchor:"transformers.MarianMTModel.forward.example",$$slots:{default:[$m]},$$scope:{ctx:E}}}),Po=new fe({}),Fo=new Z({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_marian.py#L1542"}}),No=new Z({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MarianForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MarianForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_marian.py#L1573",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),un=new Rt({props:{anchor:"transformers.MarianForCausalLM.forward.example",$$slots:{default:[zm]},$$scope:{ctx:E}}}),Co=new fe({}),Lo=new Z({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_tf_marian.py#L1193"}}),fn=new Dn({props:{$$slots:{default:[jm]},$$scope:{ctx:E}}}),So=new Z({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMarianModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_tf_marian.py#L1205",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),gn=new Dn({props:{$$slots:{default:[Em]},$$scope:{ctx:E}}}),_n=new Rt({props:{anchor:"transformers.TFMarianModel.call.example",$$slots:{default:[qm]},$$scope:{ctx:E}}}),Do=new fe({}),Ho=new Z({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_tf_marian.py#L1299"}}),kn=new Dn({props:{$$slots:{default:[Pm]},$$scope:{ctx:E}}}),Ro=new Z({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianMTModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMarianMTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianMTModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianMTModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianMTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianMTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianMTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianMTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianMTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_tf_marian.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),Tn=new Dn({props:{$$slots:{default:[Fm]},$$scope:{ctx:E}}}),Mn=new Rt({props:{anchor:"transformers.TFMarianMTModel.call.example",$$slots:{default:[Nm]},$$scope:{ctx:E}}}),Go=new fe({}),Jo=new Z({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_flax_marian.py#L1207"}}),os=new Z({props:{name:"__call__",anchor:"transformers.FlaxMarianModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_flax_marian.py#L1142",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),yn=new Dn({props:{$$slots:{default:[Cm]},$$scope:{ctx:E}}}),xn=new Rt({props:{anchor:"transformers.FlaxMarianModel.__call__.example",$$slots:{default:[Lm]},$$scope:{ctx:E}}}),ss=new fe({}),as=new Z({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_flax_marian.py#L1293"}}),us=new Z({props:{name:"__call__",anchor:"transformers.FlaxMarianMTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianMTModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/marian/modeling_flax_marian.py#L1142",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),$n=new Dn({props:{$$slots:{default:[Im]},$$scope:{ctx:E}}}),zn=new Rt({props:{anchor:"transformers.FlaxMarianMTModel.__call__.example",$$slots:{default:[Am]},$$scope:{ctx:E}}}),{c(){h=o("meta"),k=l(),_=o("h1"),g=o("a"),v=o("span"),M(d.$$.fragment),u=l(),q=o("span"),Ve=r("MarianMT"),Ne=l(),C=o("p"),ve=o("strong"),ke=r("Bugs:"),z=r(" If you see something strange, file a "),Q=o("a"),ee=r("Github Issue"),Ke=r(`
and assign @patrickvonplaten.`),Ce=l(),R=o("p"),Ge=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),Le=l(),L=o("h2"),X=o("a"),Te=o("span"),M(H.$$.fragment),Je=l(),Me=o("span"),te=r("Implementation Notes"),Ie=l(),F=o("ul"),ne=o("li"),N=o("p"),I=r("Each model is about 298 MB on disk, there are more than 1,000 models."),Ye=l(),V=o("li"),oe=o("p"),Ze=r("The list of supported language pairs can be found "),U=o("a"),Xe=r("here"),Qe=r("."),A=l(),be=o("li"),O=o("p"),et=r("Models were originally trained by "),se=o("a"),ae=r("J\xF6rg Tiedemann"),tt=r(" using the "),re=o("a"),K=r("Marian"),nt=r(" C++ library, which supports fast training and translation."),ie=l(),ye=o("li"),de=o("p"),S=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),ot=l(),D=o("li"),xe=o("p"),st=r("The 80 opus models that require BPE preprocessing are not supported."),T=l(),j=o("li"),we=o("p"),$e=r("The modeling code is the same as "),Ae=o("a"),ft=r("BartForConditionalGeneration"),P=r(" with a few minor modifications:"),gt=l(),le=o("ul"),ze=o("li"),_t=r("static (sinusoid) positional embeddings ("),at=o("code"),G=r("MarianConfig.static_position_embeddings=True"),ce=r(")"),vt=l(),je=o("li"),pe=r("no layernorm_embedding ("),rt=o("code"),kt=r("MarianConfig.normalize_embedding=False"),it=r(")"),Tt=l(),B=o("li"),Mt=r("the model starts generating with "),Ks=o("code"),Li=r("pad_token_id"),Ii=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Gs=o("code"),Ai=r("<s/>"),Oi=r("),"),Si=l(),Js=o("li"),Hn=o("p"),Di=r("Code to bulk convert models can be found in "),Ys=o("code"),Hi=r("convert_marian_to_pytorch.py"),Ui=r("."),Bi=l(),Zs=o("li"),Un=o("p"),Wi=r("This model was contributed by "),Bn=o("a"),Ri=r("sshleifer"),Vi=r("."),cr=l(),bt=o("h2"),Kt=o("a"),Xs=o("span"),M(Wn.$$.fragment),Ki=l(),Qs=o("span"),Gi=r("Naming"),pr=l(),Oe=o("ul"),_s=o("li"),Ji=r("All model names use the following format: "),ea=o("code"),Yi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Zi=l(),Rn=o("li"),Xi=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),Vn=o("a"),Qi=r("here"),ed=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),td=l(),yt=o("li"),nd=r("Codes formatted like "),ta=o("code"),od=r("es_AR"),sd=r(" are usually "),na=o("code"),ad=r("code_{region}"),rd=r(". That one is Spanish from Argentina."),id=l(),oa=o("li"),dd=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),hr=l(),xt=o("h2"),Gt=o("a"),sa=o("span"),M(Kn.$$.fragment),ld=l(),aa=o("span"),cd=r("Examples"),ur=l(),Jt=o("ul"),ra=o("li"),pd=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),hd=l(),ia=o("li"),Gn=o("a"),ud=r("Fine-tune on GPU"),mr=l(),wt=o("h2"),Yt=o("a"),da=o("span"),M(Jn.$$.fragment),md=l(),la=o("span"),fd=r("Multilingual Models"),fr=l(),Se=o("ul"),Yn=o("li"),gd=r("All model names use the following format: "),ca=o("code"),_d=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),vd=r(":"),kd=l(),Zn=o("li"),Td=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),pa=o("code"),Md=r("src_text"),bd=r("."),yd=l(),Xn=o("li"),xd=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),Qn=o("a"),wd=r("opus-mt-en-roa"),$d=r("."),zd=l(),eo=o("li"),jd=r("Note that if a model is only multilingual on the source side, like "),ha=o("code"),Ed=r("Helsinki-NLP/opus-mt-roa-en"),qd=r(`, no language
codes are required.`),gr=l(),Zt=o("p"),Pd=r("New multi-lingual models from the "),to=o("a"),Fd=r("Tatoeba-Challenge repo"),Nd=r(`
require 3 character language codes:`),_r=l(),M(no.$$.fragment),vr=l(),vs=o("p"),Cd=r("Here is the code to see all available pretrained models on the hub:"),kr=l(),M(oo.$$.fragment),Tr=l(),$t=o("h2"),Xt=o("a"),ua=o("span"),M(so.$$.fragment),Ld=l(),ma=o("span"),Id=r("Old Style Multi-Lingual Models"),Mr=l(),ks=o("p"),Ad=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),br=l(),M(ao.$$.fragment),yr=l(),Ts=o("p"),Od=r("Example of translating english to many romance languages, using old-style 2 character language codes"),xr=l(),M(ro.$$.fragment),wr=l(),zt=o("h2"),Qt=o("a"),fa=o("span"),M(io.$$.fragment),Sd=l(),ga=o("span"),Dd=r("MarianConfig"),$r=l(),Ee=o("div"),M(lo.$$.fragment),Hd=l(),jt=o("p"),Ud=r("This is the configuration class to store the configuration of a "),Ms=o("a"),Bd=r("MarianModel"),Wd=r(`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),co=o("a"),Rd=r("Helsinki-NLP/opus-mt-en-de"),Vd=r(" architecture."),Kd=l(),Et=o("p"),Gd=r("Configuration objects inherit from "),bs=o("a"),Jd=r("PretrainedConfig"),Yd=r(` and can be used to control the model outputs. Read the
documentation from `),ys=o("a"),Zd=r("PretrainedConfig"),Xd=r(" for more information."),Qd=l(),M(en.$$.fragment),zr=l(),qt=o("h2"),tn=o("a"),_a=o("span"),M(po.$$.fragment),el=l(),va=o("span"),tl=r("MarianTokenizer"),jr=l(),he=o("div"),M(ho.$$.fragment),nl=l(),uo=o("p"),ol=r("Construct a Marian tokenizer. Based on "),mo=o("a"),sl=r("SentencePiece"),al=r("."),rl=l(),fo=o("p"),il=r("This tokenizer inherits from "),xs=o("a"),dl=r("PreTrainedTokenizer"),ll=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),cl=l(),M(nn.$$.fragment),pl=l(),on=o("div"),M(go.$$.fragment),hl=l(),ka=o("p"),ul=r("Build model inputs from a sequence by appending eos_token_id."),Er=l(),Pt=o("h2"),sn=o("a"),Ta=o("span"),M(_o.$$.fragment),ml=l(),Ma=o("span"),fl=r("MarianModel"),qr=l(),qe=o("div"),M(vo.$$.fragment),gl=l(),ko=o("p"),_l=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ws=o("a"),vl=r("PreTrainedModel"),kl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl=l(),To=o("p"),Ml=r("This model is also a PyTorch "),Mo=o("a"),bl=r("torch.nn.Module"),yl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xl=l(),De=o("div"),M(bo.$$.fragment),wl=l(),Ft=o("p"),$l=r("The "),$s=o("a"),zl=r("MarianModel"),jl=r(" forward method, overrides the "),ba=o("code"),El=r("__call__"),ql=r(" special method."),Pl=l(),M(an.$$.fragment),Fl=l(),M(rn.$$.fragment),Pr=l(),Nt=o("h2"),dn=o("a"),ya=o("span"),M(yo.$$.fragment),Nl=l(),xa=o("span"),Cl=r("MarianMTModel"),Fr=l(),Pe=o("div"),M(xo.$$.fragment),Ll=l(),wo=o("p"),Il=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),zs=o("a"),Al=r("PreTrainedModel"),Ol=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sl=l(),$o=o("p"),Dl=r("This model is also a PyTorch "),zo=o("a"),Hl=r("torch.nn.Module"),Ul=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bl=l(),ge=o("div"),M(jo.$$.fragment),Wl=l(),Ct=o("p"),Rl=r("The "),js=o("a"),Vl=r("MarianMTModel"),Kl=r(" forward method, overrides the "),wa=o("code"),Gl=r("__call__"),Jl=r(" special method."),Yl=l(),M(ln.$$.fragment),Zl=l(),Eo=o("p"),Xl=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),qo=o("a"),Ql=r("here"),ec=r("."),tc=l(),M(cn.$$.fragment),Nr=l(),Lt=o("h2"),pn=o("a"),$a=o("span"),M(Po.$$.fragment),nc=l(),za=o("span"),oc=r("MarianForCausalLM"),Cr=l(),It=o("div"),M(Fo.$$.fragment),sc=l(),hn=o("div"),M(No.$$.fragment),ac=l(),M(un.$$.fragment),Lr=l(),At=o("h2"),mn=o("a"),ja=o("span"),M(Co.$$.fragment),rc=l(),Ea=o("span"),ic=r("TFMarianModel"),Ir=l(),ue=o("div"),M(Lo.$$.fragment),dc=l(),Io=o("p"),lc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Es=o("a"),cc=r("TFPreTrainedModel"),pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc=l(),Ao=o("p"),uc=r("This model is also a "),Oo=o("a"),mc=r("tf.keras.Model"),fc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gc=l(),M(fn.$$.fragment),_c=l(),He=o("div"),M(So.$$.fragment),vc=l(),Ot=o("p"),kc=r("The "),qs=o("a"),Tc=r("TFMarianModel"),Mc=r(" forward method, overrides the "),qa=o("code"),bc=r("__call__"),yc=r(" special method."),xc=l(),M(gn.$$.fragment),wc=l(),M(_n.$$.fragment),Ar=l(),St=o("h2"),vn=o("a"),Pa=o("span"),M(Do.$$.fragment),$c=l(),Fa=o("span"),zc=r("TFMarianMTModel"),Or=l(),me=o("div"),M(Ho.$$.fragment),jc=l(),Uo=o("p"),Ec=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ps=o("a"),qc=r("TFPreTrainedModel"),Pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fc=l(),Bo=o("p"),Nc=r("This model is also a "),Wo=o("a"),Cc=r("tf.keras.Model"),Lc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ic=l(),M(kn.$$.fragment),Ac=l(),_e=o("div"),M(Ro.$$.fragment),Oc=l(),Dt=o("p"),Sc=r("The "),Fs=o("a"),Dc=r("TFMarianMTModel"),Hc=r(" forward method, overrides the "),Na=o("code"),Uc=r("__call__"),Bc=r(" special method."),Wc=l(),M(Tn.$$.fragment),Rc=l(),Vo=o("p"),Vc=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),Ko=o("a"),Kc=r("here"),Gc=r("."),Jc=l(),M(Mn.$$.fragment),Sr=l(),Ht=o("h2"),bn=o("a"),Ca=o("span"),M(Go.$$.fragment),Yc=l(),La=o("span"),Zc=r("FlaxMarianModel"),Dr=l(),J=o("div"),M(Jo.$$.fragment),Xc=l(),Yo=o("p"),Qc=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ns=o("a"),ep=r("FlaxPreTrainedModel"),tp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=l(),Zo=o("p"),op=r(`This model is also a Flax Linen
`),Xo=o("a"),sp=r("flax.nn.Module"),ap=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rp=l(),Ia=o("p"),ip=r("Finally, this model supports inherent JAX features such as:"),dp=l(),dt=o("ul"),Aa=o("li"),Qo=o("a"),lp=r("Just-In-Time (JIT) compilation"),cp=l(),Oa=o("li"),es=o("a"),pp=r("Automatic Differentiation"),hp=l(),Sa=o("li"),ts=o("a"),up=r("Vectorization"),mp=l(),Da=o("li"),ns=o("a"),fp=r("Parallelization"),gp=l(),Ue=o("div"),M(os.$$.fragment),_p=l(),Ut=o("p"),vp=r("The "),Ha=o("code"),kp=r("FlaxMarianPreTrainedModel"),Tp=r(" forward method, overrides the "),Ua=o("code"),Mp=r("__call__"),bp=r(" special method."),yp=l(),M(yn.$$.fragment),xp=l(),M(xn.$$.fragment),Hr=l(),Bt=o("h2"),wn=o("a"),Ba=o("span"),M(ss.$$.fragment),wp=l(),Wa=o("span"),$p=r("FlaxMarianMTModel"),Ur=l(),Y=o("div"),M(as.$$.fragment),zp=l(),rs=o("p"),jp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),Cs=o("a"),Ep=r("FlaxPreTrainedModel"),qp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp=l(),is=o("p"),Fp=r(`This model is also a Flax Linen
`),ds=o("a"),Np=r("flax.nn.Module"),Cp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lp=l(),Ra=o("p"),Ip=r("Finally, this model supports inherent JAX features such as:"),Ap=l(),lt=o("ul"),Va=o("li"),ls=o("a"),Op=r("Just-In-Time (JIT) compilation"),Sp=l(),Ka=o("li"),cs=o("a"),Dp=r("Automatic Differentiation"),Hp=l(),Ga=o("li"),ps=o("a"),Up=r("Vectorization"),Bp=l(),Ja=o("li"),hs=o("a"),Wp=r("Parallelization"),Rp=l(),Be=o("div"),M(us.$$.fragment),Vp=l(),Wt=o("p"),Kp=r("The "),Ya=o("code"),Gp=r("FlaxMarianPreTrainedModel"),Jp=r(" forward method, overrides the "),Za=o("code"),Yp=r("__call__"),Zp=r(" special method."),Xp=l(),M($n.$$.fragment),Qp=l(),M(zn.$$.fragment),this.h()},l(n){const m=km('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),k=c(n),_=s(n,"H1",{class:!0});var ms=a(_);g=s(ms,"A",{id:!0,class:!0,href:!0});var Xa=a(g);v=s(Xa,"SPAN",{});var Qa=a(v);b(d.$$.fragment,Qa),Qa.forEach(t),Xa.forEach(t),u=c(ms),q=s(ms,"SPAN",{});var er=a(q);Ve=i(er,"MarianMT"),er.forEach(t),ms.forEach(t),Ne=c(n),C=s(n,"P",{});var jn=a(C);ve=s(jn,"STRONG",{});var tr=a(ve);ke=i(tr,"Bugs:"),tr.forEach(t),z=i(jn," If you see something strange, file a "),Q=s(jn,"A",{href:!0,rel:!0});var nr=a(Q);ee=i(nr,"Github Issue"),nr.forEach(t),Ke=i(jn,`
and assign @patrickvonplaten.`),jn.forEach(t),Ce=c(n),R=s(n,"P",{});var or=a(R);Ge=i(or,"Translations should be similar, but not identical to output in the test set linked to in each model card."),or.forEach(t),Le=c(n),L=s(n,"H2",{class:!0});var fs=a(L);X=s(fs,"A",{id:!0,class:!0,href:!0});var sr=a(X);Te=s(sr,"SPAN",{});var ar=a(Te);b(H.$$.fragment,ar),ar.forEach(t),sr.forEach(t),Je=c(fs),Me=s(fs,"SPAN",{});var rr=a(Me);te=i(rr,"Implementation Notes"),rr.forEach(t),fs.forEach(t),Ie=c(n),F=s(n,"UL",{});var W=a(F);ne=s(W,"LI",{});var ir=a(ne);N=s(ir,"P",{});var dr=a(N);I=i(dr,"Each model is about 298 MB on disk, there are more than 1,000 models."),dr.forEach(t),ir.forEach(t),Ye=c(W),V=s(W,"LI",{});var lr=a(V);oe=s(lr,"P",{});var gs=a(oe);Ze=i(gs,"The list of supported language pairs can be found "),U=s(gs,"A",{href:!0,rel:!0});var th=a(U);Xe=i(th,"here"),th.forEach(t),Qe=i(gs,"."),gs.forEach(t),lr.forEach(t),A=c(W),be=s(W,"LI",{});var nh=a(be);O=s(nh,"P",{});var Ls=a(O);et=i(Ls,"Models were originally trained by "),se=s(Ls,"A",{href:!0,rel:!0});var oh=a(se);ae=i(oh,"J\xF6rg Tiedemann"),oh.forEach(t),tt=i(Ls," using the "),re=s(Ls,"A",{href:!0,rel:!0});var sh=a(re);K=i(sh,"Marian"),sh.forEach(t),nt=i(Ls," C++ library, which supports fast training and translation."),Ls.forEach(t),nh.forEach(t),ie=c(W),ye=s(W,"LI",{});var ah=a(ye);de=s(ah,"P",{});var rh=a(de);S=i(rh,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),rh.forEach(t),ah.forEach(t),ot=c(W),D=s(W,"LI",{});var ih=a(D);xe=s(ih,"P",{});var dh=a(xe);st=i(dh,"The 80 opus models that require BPE preprocessing are not supported."),dh.forEach(t),ih.forEach(t),T=c(W),j=s(W,"LI",{});var Wr=a(j);we=s(Wr,"P",{});var Rr=a(we);$e=i(Rr,"The modeling code is the same as "),Ae=s(Rr,"A",{href:!0});var lh=a(Ae);ft=i(lh,"BartForConditionalGeneration"),lh.forEach(t),P=i(Rr," with a few minor modifications:"),Rr.forEach(t),gt=c(Wr),le=s(Wr,"UL",{});var Is=a(le);ze=s(Is,"LI",{});var Vr=a(ze);_t=i(Vr,"static (sinusoid) positional embeddings ("),at=s(Vr,"CODE",{});var ch=a(at);G=i(ch,"MarianConfig.static_position_embeddings=True"),ch.forEach(t),ce=i(Vr,")"),Vr.forEach(t),vt=c(Is),je=s(Is,"LI",{});var Kr=a(je);pe=i(Kr,"no layernorm_embedding ("),rt=s(Kr,"CODE",{});var ph=a(rt);kt=i(ph,"MarianConfig.normalize_embedding=False"),ph.forEach(t),it=i(Kr,")"),Kr.forEach(t),Tt=c(Is),B=s(Is,"LI",{});var As=a(B);Mt=i(As,"the model starts generating with "),Ks=s(As,"CODE",{});var hh=a(Ks);Li=i(hh,"pad_token_id"),hh.forEach(t),Ii=i(As,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Gs=s(As,"CODE",{});var uh=a(Gs);Ai=i(uh,"<s/>"),uh.forEach(t),Oi=i(As,"),"),As.forEach(t),Is.forEach(t),Wr.forEach(t),Si=c(W),Js=s(W,"LI",{});var mh=a(Js);Hn=s(mh,"P",{});var Gr=a(Hn);Di=i(Gr,"Code to bulk convert models can be found in "),Ys=s(Gr,"CODE",{});var fh=a(Ys);Hi=i(fh,"convert_marian_to_pytorch.py"),fh.forEach(t),Ui=i(Gr,"."),Gr.forEach(t),mh.forEach(t),Bi=c(W),Zs=s(W,"LI",{});var gh=a(Zs);Un=s(gh,"P",{});var Jr=a(Un);Wi=i(Jr,"This model was contributed by "),Bn=s(Jr,"A",{href:!0,rel:!0});var _h=a(Bn);Ri=i(_h,"sshleifer"),_h.forEach(t),Vi=i(Jr,"."),Jr.forEach(t),gh.forEach(t),W.forEach(t),cr=c(n),bt=s(n,"H2",{class:!0});var Yr=a(bt);Kt=s(Yr,"A",{id:!0,class:!0,href:!0});var vh=a(Kt);Xs=s(vh,"SPAN",{});var kh=a(Xs);b(Wn.$$.fragment,kh),kh.forEach(t),vh.forEach(t),Ki=c(Yr),Qs=s(Yr,"SPAN",{});var Th=a(Qs);Gi=i(Th,"Naming"),Th.forEach(t),Yr.forEach(t),pr=c(n),Oe=s(n,"UL",{});var En=a(Oe);_s=s(En,"LI",{});var eh=a(_s);Ji=i(eh,"All model names use the following format: "),ea=s(eh,"CODE",{});var Mh=a(ea);Yi=i(Mh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Mh.forEach(t),eh.forEach(t),Zi=c(En),Rn=s(En,"LI",{});var Zr=a(Rn);Xi=i(Zr,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),Vn=s(Zr,"A",{href:!0,rel:!0});var bh=a(Vn);Qi=i(bh,"here"),bh.forEach(t),ed=i(Zr,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Zr.forEach(t),td=c(En),yt=s(En,"LI",{});var Os=a(yt);nd=i(Os,"Codes formatted like "),ta=s(Os,"CODE",{});var yh=a(ta);od=i(yh,"es_AR"),yh.forEach(t),sd=i(Os," are usually "),na=s(Os,"CODE",{});var xh=a(na);ad=i(xh,"code_{region}"),xh.forEach(t),rd=i(Os,". That one is Spanish from Argentina."),Os.forEach(t),id=c(En),oa=s(En,"LI",{});var wh=a(oa);dd=i(wh,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),wh.forEach(t),En.forEach(t),hr=c(n),xt=s(n,"H2",{class:!0});var Xr=a(xt);Gt=s(Xr,"A",{id:!0,class:!0,href:!0});var $h=a(Gt);sa=s($h,"SPAN",{});var zh=a(sa);b(Kn.$$.fragment,zh),zh.forEach(t),$h.forEach(t),ld=c(Xr),aa=s(Xr,"SPAN",{});var jh=a(aa);cd=i(jh,"Examples"),jh.forEach(t),Xr.forEach(t),ur=c(n),Jt=s(n,"UL",{});var Qr=a(Jt);ra=s(Qr,"LI",{});var Eh=a(ra);pd=i(Eh,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),Eh.forEach(t),hd=c(Qr),ia=s(Qr,"LI",{});var qh=a(ia);Gn=s(qh,"A",{href:!0,rel:!0});var Ph=a(Gn);ud=i(Ph,"Fine-tune on GPU"),Ph.forEach(t),qh.forEach(t),Qr.forEach(t),mr=c(n),wt=s(n,"H2",{class:!0});var ei=a(wt);Yt=s(ei,"A",{id:!0,class:!0,href:!0});var Fh=a(Yt);da=s(Fh,"SPAN",{});var Nh=a(da);b(Jn.$$.fragment,Nh),Nh.forEach(t),Fh.forEach(t),md=c(ei),la=s(ei,"SPAN",{});var Ch=a(la);fd=i(Ch,"Multilingual Models"),Ch.forEach(t),ei.forEach(t),fr=c(n),Se=s(n,"UL",{});var qn=a(Se);Yn=s(qn,"LI",{});var ti=a(Yn);gd=i(ti,"All model names use the following format: "),ca=s(ti,"CODE",{});var Lh=a(ca);_d=i(Lh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Lh.forEach(t),vd=i(ti,":"),ti.forEach(t),kd=c(qn),Zn=s(qn,"LI",{});var ni=a(Zn);Td=i(ni,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),pa=s(ni,"CODE",{});var Ih=a(pa);Md=i(Ih,"src_text"),Ih.forEach(t),bd=i(ni,"."),ni.forEach(t),yd=c(qn),Xn=s(qn,"LI",{});var oi=a(Xn);xd=i(oi,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),Qn=s(oi,"A",{href:!0,rel:!0});var Ah=a(Qn);wd=i(Ah,"opus-mt-en-roa"),Ah.forEach(t),$d=i(oi,"."),oi.forEach(t),zd=c(qn),eo=s(qn,"LI",{});var si=a(eo);jd=i(si,"Note that if a model is only multilingual on the source side, like "),ha=s(si,"CODE",{});var Oh=a(ha);Ed=i(Oh,"Helsinki-NLP/opus-mt-roa-en"),Oh.forEach(t),qd=i(si,`, no language
codes are required.`),si.forEach(t),qn.forEach(t),gr=c(n),Zt=s(n,"P",{});var ai=a(Zt);Pd=i(ai,"New multi-lingual models from the "),to=s(ai,"A",{href:!0,rel:!0});var Sh=a(to);Fd=i(Sh,"Tatoeba-Challenge repo"),Sh.forEach(t),Nd=i(ai,`
require 3 character language codes:`),ai.forEach(t),_r=c(n),b(no.$$.fragment,n),vr=c(n),vs=s(n,"P",{});var Dh=a(vs);Cd=i(Dh,"Here is the code to see all available pretrained models on the hub:"),Dh.forEach(t),kr=c(n),b(oo.$$.fragment,n),Tr=c(n),$t=s(n,"H2",{class:!0});var ri=a($t);Xt=s(ri,"A",{id:!0,class:!0,href:!0});var Hh=a(Xt);ua=s(Hh,"SPAN",{});var Uh=a(ua);b(so.$$.fragment,Uh),Uh.forEach(t),Hh.forEach(t),Ld=c(ri),ma=s(ri,"SPAN",{});var Bh=a(ma);Id=i(Bh,"Old Style Multi-Lingual Models"),Bh.forEach(t),ri.forEach(t),Mr=c(n),ks=s(n,"P",{});var Wh=a(ks);Ad=i(Wh,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),Wh.forEach(t),br=c(n),b(ao.$$.fragment,n),yr=c(n),Ts=s(n,"P",{});var Rh=a(Ts);Od=i(Rh,"Example of translating english to many romance languages, using old-style 2 character language codes"),Rh.forEach(t),xr=c(n),b(ro.$$.fragment,n),wr=c(n),zt=s(n,"H2",{class:!0});var ii=a(zt);Qt=s(ii,"A",{id:!0,class:!0,href:!0});var Vh=a(Qt);fa=s(Vh,"SPAN",{});var Kh=a(fa);b(io.$$.fragment,Kh),Kh.forEach(t),Vh.forEach(t),Sd=c(ii),ga=s(ii,"SPAN",{});var Gh=a(ga);Dd=i(Gh,"MarianConfig"),Gh.forEach(t),ii.forEach(t),$r=c(n),Ee=s(n,"DIV",{class:!0});var Pn=a(Ee);b(lo.$$.fragment,Pn),Hd=c(Pn),jt=s(Pn,"P",{});var Ss=a(jt);Ud=i(Ss,"This is the configuration class to store the configuration of a "),Ms=s(Ss,"A",{href:!0});var Jh=a(Ms);Bd=i(Jh,"MarianModel"),Jh.forEach(t),Wd=i(Ss,`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),co=s(Ss,"A",{href:!0,rel:!0});var Yh=a(co);Rd=i(Yh,"Helsinki-NLP/opus-mt-en-de"),Yh.forEach(t),Vd=i(Ss," architecture."),Ss.forEach(t),Kd=c(Pn),Et=s(Pn,"P",{});var Ds=a(Et);Gd=i(Ds,"Configuration objects inherit from "),bs=s(Ds,"A",{href:!0});var Zh=a(bs);Jd=i(Zh,"PretrainedConfig"),Zh.forEach(t),Yd=i(Ds,` and can be used to control the model outputs. Read the
documentation from `),ys=s(Ds,"A",{href:!0});var Xh=a(ys);Zd=i(Xh,"PretrainedConfig"),Xh.forEach(t),Xd=i(Ds," for more information."),Ds.forEach(t),Qd=c(Pn),b(en.$$.fragment,Pn),Pn.forEach(t),zr=c(n),qt=s(n,"H2",{class:!0});var di=a(qt);tn=s(di,"A",{id:!0,class:!0,href:!0});var Qh=a(tn);_a=s(Qh,"SPAN",{});var eu=a(_a);b(po.$$.fragment,eu),eu.forEach(t),Qh.forEach(t),el=c(di),va=s(di,"SPAN",{});var tu=a(va);tl=i(tu,"MarianTokenizer"),tu.forEach(t),di.forEach(t),jr=c(n),he=s(n,"DIV",{class:!0});var ct=a(he);b(ho.$$.fragment,ct),nl=c(ct),uo=s(ct,"P",{});var li=a(uo);ol=i(li,"Construct a Marian tokenizer. Based on "),mo=s(li,"A",{href:!0,rel:!0});var nu=a(mo);sl=i(nu,"SentencePiece"),nu.forEach(t),al=i(li,"."),li.forEach(t),rl=c(ct),fo=s(ct,"P",{});var ci=a(fo);il=i(ci,"This tokenizer inherits from "),xs=s(ci,"A",{href:!0});var ou=a(xs);dl=i(ou,"PreTrainedTokenizer"),ou.forEach(t),ll=i(ci,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ci.forEach(t),cl=c(ct),b(nn.$$.fragment,ct),pl=c(ct),on=s(ct,"DIV",{class:!0});var pi=a(on);b(go.$$.fragment,pi),hl=c(pi),ka=s(pi,"P",{});var su=a(ka);ul=i(su,"Build model inputs from a sequence by appending eos_token_id."),su.forEach(t),pi.forEach(t),ct.forEach(t),Er=c(n),Pt=s(n,"H2",{class:!0});var hi=a(Pt);sn=s(hi,"A",{id:!0,class:!0,href:!0});var au=a(sn);Ta=s(au,"SPAN",{});var ru=a(Ta);b(_o.$$.fragment,ru),ru.forEach(t),au.forEach(t),ml=c(hi),Ma=s(hi,"SPAN",{});var iu=a(Ma);fl=i(iu,"MarianModel"),iu.forEach(t),hi.forEach(t),qr=c(n),qe=s(n,"DIV",{class:!0});var Fn=a(qe);b(vo.$$.fragment,Fn),gl=c(Fn),ko=s(Fn,"P",{});var ui=a(ko);_l=i(ui,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ws=s(ui,"A",{href:!0});var du=a(ws);vl=i(du,"PreTrainedModel"),du.forEach(t),kl=i(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),Tl=c(Fn),To=s(Fn,"P",{});var mi=a(To);Ml=i(mi,"This model is also a PyTorch "),Mo=s(mi,"A",{href:!0,rel:!0});var lu=a(Mo);bl=i(lu,"torch.nn.Module"),lu.forEach(t),yl=i(mi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mi.forEach(t),xl=c(Fn),De=s(Fn,"DIV",{class:!0});var Nn=a(De);b(bo.$$.fragment,Nn),wl=c(Nn),Ft=s(Nn,"P",{});var Hs=a(Ft);$l=i(Hs,"The "),$s=s(Hs,"A",{href:!0});var cu=a($s);zl=i(cu,"MarianModel"),cu.forEach(t),jl=i(Hs," forward method, overrides the "),ba=s(Hs,"CODE",{});var pu=a(ba);El=i(pu,"__call__"),pu.forEach(t),ql=i(Hs," special method."),Hs.forEach(t),Pl=c(Nn),b(an.$$.fragment,Nn),Fl=c(Nn),b(rn.$$.fragment,Nn),Nn.forEach(t),Fn.forEach(t),Pr=c(n),Nt=s(n,"H2",{class:!0});var fi=a(Nt);dn=s(fi,"A",{id:!0,class:!0,href:!0});var hu=a(dn);ya=s(hu,"SPAN",{});var uu=a(ya);b(yo.$$.fragment,uu),uu.forEach(t),hu.forEach(t),Nl=c(fi),xa=s(fi,"SPAN",{});var mu=a(xa);Cl=i(mu,"MarianMTModel"),mu.forEach(t),fi.forEach(t),Fr=c(n),Pe=s(n,"DIV",{class:!0});var Cn=a(Pe);b(xo.$$.fragment,Cn),Ll=c(Cn),wo=s(Cn,"P",{});var gi=a(wo);Il=i(gi,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),zs=s(gi,"A",{href:!0});var fu=a(zs);Al=i(fu,"PreTrainedModel"),fu.forEach(t),Ol=i(gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gi.forEach(t),Sl=c(Cn),$o=s(Cn,"P",{});var _i=a($o);Dl=i(_i,"This model is also a PyTorch "),zo=s(_i,"A",{href:!0,rel:!0});var gu=a(zo);Hl=i(gu,"torch.nn.Module"),gu.forEach(t),Ul=i(_i,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_i.forEach(t),Bl=c(Cn),ge=s(Cn,"DIV",{class:!0});var pt=a(ge);b(jo.$$.fragment,pt),Wl=c(pt),Ct=s(pt,"P",{});var Us=a(Ct);Rl=i(Us,"The "),js=s(Us,"A",{href:!0});var _u=a(js);Vl=i(_u,"MarianMTModel"),_u.forEach(t),Kl=i(Us," forward method, overrides the "),wa=s(Us,"CODE",{});var vu=a(wa);Gl=i(vu,"__call__"),vu.forEach(t),Jl=i(Us," special method."),Us.forEach(t),Yl=c(pt),b(ln.$$.fragment,pt),Zl=c(pt),Eo=s(pt,"P",{});var vi=a(Eo);Xl=i(vi,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),qo=s(vi,"A",{href:!0,rel:!0});var ku=a(qo);Ql=i(ku,"here"),ku.forEach(t),ec=i(vi,"."),vi.forEach(t),tc=c(pt),b(cn.$$.fragment,pt),pt.forEach(t),Cn.forEach(t),Nr=c(n),Lt=s(n,"H2",{class:!0});var ki=a(Lt);pn=s(ki,"A",{id:!0,class:!0,href:!0});var Tu=a(pn);$a=s(Tu,"SPAN",{});var Mu=a($a);b(Po.$$.fragment,Mu),Mu.forEach(t),Tu.forEach(t),nc=c(ki),za=s(ki,"SPAN",{});var bu=a(za);oc=i(bu,"MarianForCausalLM"),bu.forEach(t),ki.forEach(t),Cr=c(n),It=s(n,"DIV",{class:!0});var Ti=a(It);b(Fo.$$.fragment,Ti),sc=c(Ti),hn=s(Ti,"DIV",{class:!0});var Mi=a(hn);b(No.$$.fragment,Mi),ac=c(Mi),b(un.$$.fragment,Mi),Mi.forEach(t),Ti.forEach(t),Lr=c(n),At=s(n,"H2",{class:!0});var bi=a(At);mn=s(bi,"A",{id:!0,class:!0,href:!0});var yu=a(mn);ja=s(yu,"SPAN",{});var xu=a(ja);b(Co.$$.fragment,xu),xu.forEach(t),yu.forEach(t),rc=c(bi),Ea=s(bi,"SPAN",{});var wu=a(Ea);ic=i(wu,"TFMarianModel"),wu.forEach(t),bi.forEach(t),Ir=c(n),ue=s(n,"DIV",{class:!0});var ht=a(ue);b(Lo.$$.fragment,ht),dc=c(ht),Io=s(ht,"P",{});var yi=a(Io);lc=i(yi,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Es=s(yi,"A",{href:!0});var $u=a(Es);cc=i($u,"TFPreTrainedModel"),$u.forEach(t),pc=i(yi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi.forEach(t),hc=c(ht),Ao=s(ht,"P",{});var xi=a(Ao);uc=i(xi,"This model is also a "),Oo=s(xi,"A",{href:!0,rel:!0});var zu=a(Oo);mc=i(zu,"tf.keras.Model"),zu.forEach(t),fc=i(xi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xi.forEach(t),gc=c(ht),b(fn.$$.fragment,ht),_c=c(ht),He=s(ht,"DIV",{class:!0});var Ln=a(He);b(So.$$.fragment,Ln),vc=c(Ln),Ot=s(Ln,"P",{});var Bs=a(Ot);kc=i(Bs,"The "),qs=s(Bs,"A",{href:!0});var ju=a(qs);Tc=i(ju,"TFMarianModel"),ju.forEach(t),Mc=i(Bs," forward method, overrides the "),qa=s(Bs,"CODE",{});var Eu=a(qa);bc=i(Eu,"__call__"),Eu.forEach(t),yc=i(Bs," special method."),Bs.forEach(t),xc=c(Ln),b(gn.$$.fragment,Ln),wc=c(Ln),b(_n.$$.fragment,Ln),Ln.forEach(t),ht.forEach(t),Ar=c(n),St=s(n,"H2",{class:!0});var wi=a(St);vn=s(wi,"A",{id:!0,class:!0,href:!0});var qu=a(vn);Pa=s(qu,"SPAN",{});var Pu=a(Pa);b(Do.$$.fragment,Pu),Pu.forEach(t),qu.forEach(t),$c=c(wi),Fa=s(wi,"SPAN",{});var Fu=a(Fa);zc=i(Fu,"TFMarianMTModel"),Fu.forEach(t),wi.forEach(t),Or=c(n),me=s(n,"DIV",{class:!0});var ut=a(me);b(Ho.$$.fragment,ut),jc=c(ut),Uo=s(ut,"P",{});var $i=a(Uo);Ec=i($i,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ps=s($i,"A",{href:!0});var Nu=a(Ps);qc=i(Nu,"TFPreTrainedModel"),Nu.forEach(t),Pc=i($i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$i.forEach(t),Fc=c(ut),Bo=s(ut,"P",{});var zi=a(Bo);Nc=i(zi,"This model is also a "),Wo=s(zi,"A",{href:!0,rel:!0});var Cu=a(Wo);Cc=i(Cu,"tf.keras.Model"),Cu.forEach(t),Lc=i(zi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zi.forEach(t),Ic=c(ut),b(kn.$$.fragment,ut),Ac=c(ut),_e=s(ut,"DIV",{class:!0});var mt=a(_e);b(Ro.$$.fragment,mt),Oc=c(mt),Dt=s(mt,"P",{});var Ws=a(Dt);Sc=i(Ws,"The "),Fs=s(Ws,"A",{href:!0});var Lu=a(Fs);Dc=i(Lu,"TFMarianMTModel"),Lu.forEach(t),Hc=i(Ws," forward method, overrides the "),Na=s(Ws,"CODE",{});var Iu=a(Na);Uc=i(Iu,"__call__"),Iu.forEach(t),Bc=i(Ws," special method."),Ws.forEach(t),Wc=c(mt),b(Tn.$$.fragment,mt),Rc=c(mt),Vo=s(mt,"P",{});var ji=a(Vo);Vc=i(ji,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),Ko=s(ji,"A",{href:!0,rel:!0});var Au=a(Ko);Kc=i(Au,"here"),Au.forEach(t),Gc=i(ji,"."),ji.forEach(t),Jc=c(mt),b(Mn.$$.fragment,mt),mt.forEach(t),ut.forEach(t),Sr=c(n),Ht=s(n,"H2",{class:!0});var Ei=a(Ht);bn=s(Ei,"A",{id:!0,class:!0,href:!0});var Ou=a(bn);Ca=s(Ou,"SPAN",{});var Su=a(Ca);b(Go.$$.fragment,Su),Su.forEach(t),Ou.forEach(t),Yc=c(Ei),La=s(Ei,"SPAN",{});var Du=a(La);Zc=i(Du,"FlaxMarianModel"),Du.forEach(t),Ei.forEach(t),Dr=c(n),J=s(n,"DIV",{class:!0});var We=a(J);b(Jo.$$.fragment,We),Xc=c(We),Yo=s(We,"P",{});var qi=a(Yo);Qc=i(qi,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ns=s(qi,"A",{href:!0});var Hu=a(Ns);ep=i(Hu,"FlaxPreTrainedModel"),Hu.forEach(t),tp=i(qi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qi.forEach(t),np=c(We),Zo=s(We,"P",{});var Pi=a(Zo);op=i(Pi,`This model is also a Flax Linen
`),Xo=s(Pi,"A",{href:!0,rel:!0});var Uu=a(Xo);sp=i(Uu,"flax.nn.Module"),Uu.forEach(t),ap=i(Pi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Pi.forEach(t),rp=c(We),Ia=s(We,"P",{});var Bu=a(Ia);ip=i(Bu,"Finally, this model supports inherent JAX features such as:"),Bu.forEach(t),dp=c(We),dt=s(We,"UL",{});var In=a(dt);Aa=s(In,"LI",{});var Wu=a(Aa);Qo=s(Wu,"A",{href:!0,rel:!0});var Ru=a(Qo);lp=i(Ru,"Just-In-Time (JIT) compilation"),Ru.forEach(t),Wu.forEach(t),cp=c(In),Oa=s(In,"LI",{});var Vu=a(Oa);es=s(Vu,"A",{href:!0,rel:!0});var Ku=a(es);pp=i(Ku,"Automatic Differentiation"),Ku.forEach(t),Vu.forEach(t),hp=c(In),Sa=s(In,"LI",{});var Gu=a(Sa);ts=s(Gu,"A",{href:!0,rel:!0});var Ju=a(ts);up=i(Ju,"Vectorization"),Ju.forEach(t),Gu.forEach(t),mp=c(In),Da=s(In,"LI",{});var Yu=a(Da);ns=s(Yu,"A",{href:!0,rel:!0});var Zu=a(ns);fp=i(Zu,"Parallelization"),Zu.forEach(t),Yu.forEach(t),In.forEach(t),gp=c(We),Ue=s(We,"DIV",{class:!0});var An=a(Ue);b(os.$$.fragment,An),_p=c(An),Ut=s(An,"P",{});var Rs=a(Ut);vp=i(Rs,"The "),Ha=s(Rs,"CODE",{});var Xu=a(Ha);kp=i(Xu,"FlaxMarianPreTrainedModel"),Xu.forEach(t),Tp=i(Rs," forward method, overrides the "),Ua=s(Rs,"CODE",{});var Qu=a(Ua);Mp=i(Qu,"__call__"),Qu.forEach(t),bp=i(Rs," special method."),Rs.forEach(t),yp=c(An),b(yn.$$.fragment,An),xp=c(An),b(xn.$$.fragment,An),An.forEach(t),We.forEach(t),Hr=c(n),Bt=s(n,"H2",{class:!0});var Fi=a(Bt);wn=s(Fi,"A",{id:!0,class:!0,href:!0});var em=a(wn);Ba=s(em,"SPAN",{});var tm=a(Ba);b(ss.$$.fragment,tm),tm.forEach(t),em.forEach(t),wp=c(Fi),Wa=s(Fi,"SPAN",{});var nm=a(Wa);$p=i(nm,"FlaxMarianMTModel"),nm.forEach(t),Fi.forEach(t),Ur=c(n),Y=s(n,"DIV",{class:!0});var Re=a(Y);b(as.$$.fragment,Re),zp=c(Re),rs=s(Re,"P",{});var Ni=a(rs);jp=i(Ni,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),Cs=s(Ni,"A",{href:!0});var om=a(Cs);Ep=i(om,"FlaxPreTrainedModel"),om.forEach(t),qp=i(Ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ni.forEach(t),Pp=c(Re),is=s(Re,"P",{});var Ci=a(is);Fp=i(Ci,`This model is also a Flax Linen
`),ds=s(Ci,"A",{href:!0,rel:!0});var sm=a(ds);Np=i(sm,"flax.nn.Module"),sm.forEach(t),Cp=i(Ci,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ci.forEach(t),Lp=c(Re),Ra=s(Re,"P",{});var am=a(Ra);Ip=i(am,"Finally, this model supports inherent JAX features such as:"),am.forEach(t),Ap=c(Re),lt=s(Re,"UL",{});var On=a(lt);Va=s(On,"LI",{});var rm=a(Va);ls=s(rm,"A",{href:!0,rel:!0});var im=a(ls);Op=i(im,"Just-In-Time (JIT) compilation"),im.forEach(t),rm.forEach(t),Sp=c(On),Ka=s(On,"LI",{});var dm=a(Ka);cs=s(dm,"A",{href:!0,rel:!0});var lm=a(cs);Dp=i(lm,"Automatic Differentiation"),lm.forEach(t),dm.forEach(t),Hp=c(On),Ga=s(On,"LI",{});var cm=a(Ga);ps=s(cm,"A",{href:!0,rel:!0});var pm=a(ps);Up=i(pm,"Vectorization"),pm.forEach(t),cm.forEach(t),Bp=c(On),Ja=s(On,"LI",{});var hm=a(Ja);hs=s(hm,"A",{href:!0,rel:!0});var um=a(hs);Wp=i(um,"Parallelization"),um.forEach(t),hm.forEach(t),On.forEach(t),Rp=c(Re),Be=s(Re,"DIV",{class:!0});var Sn=a(Be);b(us.$$.fragment,Sn),Vp=c(Sn),Wt=s(Sn,"P",{});var Vs=a(Wt);Kp=i(Vs,"The "),Ya=s(Vs,"CODE",{});var mm=a(Ya);Gp=i(mm,"FlaxMarianPreTrainedModel"),mm.forEach(t),Jp=i(Vs," forward method, overrides the "),Za=s(Vs,"CODE",{});var fm=a(Za);Yp=i(fm,"__call__"),fm.forEach(t),Zp=i(Vs," special method."),Vs.forEach(t),Xp=c(Sn),b($n.$$.fragment,Sn),Qp=c(Sn),b(zn.$$.fragment,Sn),Sn.forEach(t),Re.forEach(t),this.h()},h(){p(h,"name","hf:doc:metadata"),p(h,"content",JSON.stringify(Sm)),p(g,"id","marianmt"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#marianmt"),p(_,"class","relative group"),p(Q,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),p(Q,"rel","nofollow"),p(X,"id","implementation-notes"),p(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(X,"href","#implementation-notes"),p(L,"class","relative group"),p(U,"href","https://huggingface.co/Helsinki-NLP"),p(U,"rel","nofollow"),p(se,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),p(se,"rel","nofollow"),p(re,"href","https://marian-nmt.github.io/"),p(re,"rel","nofollow"),p(Ae,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(Bn,"href","https://huggingface.co/sshleifer"),p(Bn,"rel","nofollow"),p(Kt,"id","naming"),p(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Kt,"href","#naming"),p(bt,"class","relative group"),p(Vn,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),p(Vn,"rel","nofollow"),p(Gt,"id","examples"),p(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Gt,"href","#examples"),p(xt,"class","relative group"),p(Gn,"href","https://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh"),p(Gn,"rel","nofollow"),p(Yt,"id","multilingual-models"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#multilingual-models"),p(wt,"class","relative group"),p(Qn,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),p(Qn,"rel","nofollow"),p(to,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),p(to,"rel","nofollow"),p(Xt,"id","old-style-multilingual-models"),p(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Xt,"href","#old-style-multilingual-models"),p($t,"class","relative group"),p(Qt,"id","transformers.MarianConfig"),p(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qt,"href","#transformers.MarianConfig"),p(zt,"class","relative group"),p(Ms,"href","/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianModel"),p(co,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),p(co,"rel","nofollow"),p(bs,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),p(ys,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),p(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(tn,"id","transformers.MarianTokenizer"),p(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(tn,"href","#transformers.MarianTokenizer"),p(qt,"class","relative group"),p(mo,"href","https://github.com/google/sentencepiece"),p(mo,"rel","nofollow"),p(xs,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(sn,"id","transformers.MarianModel"),p(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(sn,"href","#transformers.MarianModel"),p(Pt,"class","relative group"),p(ws,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),p(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Mo,"rel","nofollow"),p($s,"href","/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianModel"),p(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(dn,"id","transformers.MarianMTModel"),p(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(dn,"href","#transformers.MarianMTModel"),p(Nt,"class","relative group"),p(zs,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),p(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(zo,"rel","nofollow"),p(js,"href","/docs/transformers/v4.22.2/en/model_doc/marian#transformers.MarianMTModel"),p(qo,"href","https://huggingface.co/models?search=Helsinki-NLP"),p(qo,"rel","nofollow"),p(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pn,"id","transformers.MarianForCausalLM"),p(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(pn,"href","#transformers.MarianForCausalLM"),p(Lt,"class","relative group"),p(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(mn,"id","transformers.TFMarianModel"),p(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(mn,"href","#transformers.TFMarianModel"),p(At,"class","relative group"),p(Es,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),p(Oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Oo,"rel","nofollow"),p(qs,"href","/docs/transformers/v4.22.2/en/model_doc/marian#transformers.TFMarianModel"),p(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vn,"id","transformers.TFMarianMTModel"),p(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(vn,"href","#transformers.TFMarianMTModel"),p(St,"class","relative group"),p(Ps,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),p(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Wo,"rel","nofollow"),p(Fs,"href","/docs/transformers/v4.22.2/en/model_doc/marian#transformers.TFMarianMTModel"),p(Ko,"href","https://huggingface.co/models?search=Helsinki-NLP"),p(Ko,"rel","nofollow"),p(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(bn,"id","transformers.FlaxMarianModel"),p(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(bn,"href","#transformers.FlaxMarianModel"),p(Ht,"class","relative group"),p(Ns,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(Xo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(Xo,"rel","nofollow"),p(Qo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Qo,"rel","nofollow"),p(es,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(es,"rel","nofollow"),p(ts,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(ts,"rel","nofollow"),p(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(ns,"rel","nofollow"),p(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(wn,"id","transformers.FlaxMarianMTModel"),p(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(wn,"href","#transformers.FlaxMarianMTModel"),p(Bt,"class","relative group"),p(Cs,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(ds,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(ds,"rel","nofollow"),p(ls,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(ls,"rel","nofollow"),p(cs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(cs,"rel","nofollow"),p(ps,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(ps,"rel","nofollow"),p(hs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(hs,"rel","nofollow"),p(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,m){e(document.head,h),f(n,k,m),f(n,_,m),e(_,g),e(g,v),y(d,v,null),e(_,u),e(_,q),e(q,Ve),f(n,Ne,m),f(n,C,m),e(C,ve),e(ve,ke),e(C,z),e(C,Q),e(Q,ee),e(C,Ke),f(n,Ce,m),f(n,R,m),e(R,Ge),f(n,Le,m),f(n,L,m),e(L,X),e(X,Te),y(H,Te,null),e(L,Je),e(L,Me),e(Me,te),f(n,Ie,m),f(n,F,m),e(F,ne),e(ne,N),e(N,I),e(F,Ye),e(F,V),e(V,oe),e(oe,Ze),e(oe,U),e(U,Xe),e(oe,Qe),e(F,A),e(F,be),e(be,O),e(O,et),e(O,se),e(se,ae),e(O,tt),e(O,re),e(re,K),e(O,nt),e(F,ie),e(F,ye),e(ye,de),e(de,S),e(F,ot),e(F,D),e(D,xe),e(xe,st),e(F,T),e(F,j),e(j,we),e(we,$e),e(we,Ae),e(Ae,ft),e(we,P),e(j,gt),e(j,le),e(le,ze),e(ze,_t),e(ze,at),e(at,G),e(ze,ce),e(le,vt),e(le,je),e(je,pe),e(je,rt),e(rt,kt),e(je,it),e(le,Tt),e(le,B),e(B,Mt),e(B,Ks),e(Ks,Li),e(B,Ii),e(B,Gs),e(Gs,Ai),e(B,Oi),e(F,Si),e(F,Js),e(Js,Hn),e(Hn,Di),e(Hn,Ys),e(Ys,Hi),e(Hn,Ui),e(F,Bi),e(F,Zs),e(Zs,Un),e(Un,Wi),e(Un,Bn),e(Bn,Ri),e(Un,Vi),f(n,cr,m),f(n,bt,m),e(bt,Kt),e(Kt,Xs),y(Wn,Xs,null),e(bt,Ki),e(bt,Qs),e(Qs,Gi),f(n,pr,m),f(n,Oe,m),e(Oe,_s),e(_s,Ji),e(_s,ea),e(ea,Yi),e(Oe,Zi),e(Oe,Rn),e(Rn,Xi),e(Rn,Vn),e(Vn,Qi),e(Rn,ed),e(Oe,td),e(Oe,yt),e(yt,nd),e(yt,ta),e(ta,od),e(yt,sd),e(yt,na),e(na,ad),e(yt,rd),e(Oe,id),e(Oe,oa),e(oa,dd),f(n,hr,m),f(n,xt,m),e(xt,Gt),e(Gt,sa),y(Kn,sa,null),e(xt,ld),e(xt,aa),e(aa,cd),f(n,ur,m),f(n,Jt,m),e(Jt,ra),e(ra,pd),e(Jt,hd),e(Jt,ia),e(ia,Gn),e(Gn,ud),f(n,mr,m),f(n,wt,m),e(wt,Yt),e(Yt,da),y(Jn,da,null),e(wt,md),e(wt,la),e(la,fd),f(n,fr,m),f(n,Se,m),e(Se,Yn),e(Yn,gd),e(Yn,ca),e(ca,_d),e(Yn,vd),e(Se,kd),e(Se,Zn),e(Zn,Td),e(Zn,pa),e(pa,Md),e(Zn,bd),e(Se,yd),e(Se,Xn),e(Xn,xd),e(Xn,Qn),e(Qn,wd),e(Xn,$d),e(Se,zd),e(Se,eo),e(eo,jd),e(eo,ha),e(ha,Ed),e(eo,qd),f(n,gr,m),f(n,Zt,m),e(Zt,Pd),e(Zt,to),e(to,Fd),e(Zt,Nd),f(n,_r,m),y(no,n,m),f(n,vr,m),f(n,vs,m),e(vs,Cd),f(n,kr,m),y(oo,n,m),f(n,Tr,m),f(n,$t,m),e($t,Xt),e(Xt,ua),y(so,ua,null),e($t,Ld),e($t,ma),e(ma,Id),f(n,Mr,m),f(n,ks,m),e(ks,Ad),f(n,br,m),y(ao,n,m),f(n,yr,m),f(n,Ts,m),e(Ts,Od),f(n,xr,m),y(ro,n,m),f(n,wr,m),f(n,zt,m),e(zt,Qt),e(Qt,fa),y(io,fa,null),e(zt,Sd),e(zt,ga),e(ga,Dd),f(n,$r,m),f(n,Ee,m),y(lo,Ee,null),e(Ee,Hd),e(Ee,jt),e(jt,Ud),e(jt,Ms),e(Ms,Bd),e(jt,Wd),e(jt,co),e(co,Rd),e(jt,Vd),e(Ee,Kd),e(Ee,Et),e(Et,Gd),e(Et,bs),e(bs,Jd),e(Et,Yd),e(Et,ys),e(ys,Zd),e(Et,Xd),e(Ee,Qd),y(en,Ee,null),f(n,zr,m),f(n,qt,m),e(qt,tn),e(tn,_a),y(po,_a,null),e(qt,el),e(qt,va),e(va,tl),f(n,jr,m),f(n,he,m),y(ho,he,null),e(he,nl),e(he,uo),e(uo,ol),e(uo,mo),e(mo,sl),e(uo,al),e(he,rl),e(he,fo),e(fo,il),e(fo,xs),e(xs,dl),e(fo,ll),e(he,cl),y(nn,he,null),e(he,pl),e(he,on),y(go,on,null),e(on,hl),e(on,ka),e(ka,ul),f(n,Er,m),f(n,Pt,m),e(Pt,sn),e(sn,Ta),y(_o,Ta,null),e(Pt,ml),e(Pt,Ma),e(Ma,fl),f(n,qr,m),f(n,qe,m),y(vo,qe,null),e(qe,gl),e(qe,ko),e(ko,_l),e(ko,ws),e(ws,vl),e(ko,kl),e(qe,Tl),e(qe,To),e(To,Ml),e(To,Mo),e(Mo,bl),e(To,yl),e(qe,xl),e(qe,De),y(bo,De,null),e(De,wl),e(De,Ft),e(Ft,$l),e(Ft,$s),e($s,zl),e(Ft,jl),e(Ft,ba),e(ba,El),e(Ft,ql),e(De,Pl),y(an,De,null),e(De,Fl),y(rn,De,null),f(n,Pr,m),f(n,Nt,m),e(Nt,dn),e(dn,ya),y(yo,ya,null),e(Nt,Nl),e(Nt,xa),e(xa,Cl),f(n,Fr,m),f(n,Pe,m),y(xo,Pe,null),e(Pe,Ll),e(Pe,wo),e(wo,Il),e(wo,zs),e(zs,Al),e(wo,Ol),e(Pe,Sl),e(Pe,$o),e($o,Dl),e($o,zo),e(zo,Hl),e($o,Ul),e(Pe,Bl),e(Pe,ge),y(jo,ge,null),e(ge,Wl),e(ge,Ct),e(Ct,Rl),e(Ct,js),e(js,Vl),e(Ct,Kl),e(Ct,wa),e(wa,Gl),e(Ct,Jl),e(ge,Yl),y(ln,ge,null),e(ge,Zl),e(ge,Eo),e(Eo,Xl),e(Eo,qo),e(qo,Ql),e(Eo,ec),e(ge,tc),y(cn,ge,null),f(n,Nr,m),f(n,Lt,m),e(Lt,pn),e(pn,$a),y(Po,$a,null),e(Lt,nc),e(Lt,za),e(za,oc),f(n,Cr,m),f(n,It,m),y(Fo,It,null),e(It,sc),e(It,hn),y(No,hn,null),e(hn,ac),y(un,hn,null),f(n,Lr,m),f(n,At,m),e(At,mn),e(mn,ja),y(Co,ja,null),e(At,rc),e(At,Ea),e(Ea,ic),f(n,Ir,m),f(n,ue,m),y(Lo,ue,null),e(ue,dc),e(ue,Io),e(Io,lc),e(Io,Es),e(Es,cc),e(Io,pc),e(ue,hc),e(ue,Ao),e(Ao,uc),e(Ao,Oo),e(Oo,mc),e(Ao,fc),e(ue,gc),y(fn,ue,null),e(ue,_c),e(ue,He),y(So,He,null),e(He,vc),e(He,Ot),e(Ot,kc),e(Ot,qs),e(qs,Tc),e(Ot,Mc),e(Ot,qa),e(qa,bc),e(Ot,yc),e(He,xc),y(gn,He,null),e(He,wc),y(_n,He,null),f(n,Ar,m),f(n,St,m),e(St,vn),e(vn,Pa),y(Do,Pa,null),e(St,$c),e(St,Fa),e(Fa,zc),f(n,Or,m),f(n,me,m),y(Ho,me,null),e(me,jc),e(me,Uo),e(Uo,Ec),e(Uo,Ps),e(Ps,qc),e(Uo,Pc),e(me,Fc),e(me,Bo),e(Bo,Nc),e(Bo,Wo),e(Wo,Cc),e(Bo,Lc),e(me,Ic),y(kn,me,null),e(me,Ac),e(me,_e),y(Ro,_e,null),e(_e,Oc),e(_e,Dt),e(Dt,Sc),e(Dt,Fs),e(Fs,Dc),e(Dt,Hc),e(Dt,Na),e(Na,Uc),e(Dt,Bc),e(_e,Wc),y(Tn,_e,null),e(_e,Rc),e(_e,Vo),e(Vo,Vc),e(Vo,Ko),e(Ko,Kc),e(Vo,Gc),e(_e,Jc),y(Mn,_e,null),f(n,Sr,m),f(n,Ht,m),e(Ht,bn),e(bn,Ca),y(Go,Ca,null),e(Ht,Yc),e(Ht,La),e(La,Zc),f(n,Dr,m),f(n,J,m),y(Jo,J,null),e(J,Xc),e(J,Yo),e(Yo,Qc),e(Yo,Ns),e(Ns,ep),e(Yo,tp),e(J,np),e(J,Zo),e(Zo,op),e(Zo,Xo),e(Xo,sp),e(Zo,ap),e(J,rp),e(J,Ia),e(Ia,ip),e(J,dp),e(J,dt),e(dt,Aa),e(Aa,Qo),e(Qo,lp),e(dt,cp),e(dt,Oa),e(Oa,es),e(es,pp),e(dt,hp),e(dt,Sa),e(Sa,ts),e(ts,up),e(dt,mp),e(dt,Da),e(Da,ns),e(ns,fp),e(J,gp),e(J,Ue),y(os,Ue,null),e(Ue,_p),e(Ue,Ut),e(Ut,vp),e(Ut,Ha),e(Ha,kp),e(Ut,Tp),e(Ut,Ua),e(Ua,Mp),e(Ut,bp),e(Ue,yp),y(yn,Ue,null),e(Ue,xp),y(xn,Ue,null),f(n,Hr,m),f(n,Bt,m),e(Bt,wn),e(wn,Ba),y(ss,Ba,null),e(Bt,wp),e(Bt,Wa),e(Wa,$p),f(n,Ur,m),f(n,Y,m),y(as,Y,null),e(Y,zp),e(Y,rs),e(rs,jp),e(rs,Cs),e(Cs,Ep),e(rs,qp),e(Y,Pp),e(Y,is),e(is,Fp),e(is,ds),e(ds,Np),e(is,Cp),e(Y,Lp),e(Y,Ra),e(Ra,Ip),e(Y,Ap),e(Y,lt),e(lt,Va),e(Va,ls),e(ls,Op),e(lt,Sp),e(lt,Ka),e(Ka,cs),e(cs,Dp),e(lt,Hp),e(lt,Ga),e(Ga,ps),e(ps,Up),e(lt,Bp),e(lt,Ja),e(Ja,hs),e(hs,Wp),e(Y,Rp),e(Y,Be),y(us,Be,null),e(Be,Vp),e(Be,Wt),e(Wt,Kp),e(Wt,Ya),e(Ya,Gp),e(Wt,Jp),e(Wt,Za),e(Za,Yp),e(Wt,Zp),e(Be,Xp),y($n,Be,null),e(Be,Qp),y(zn,Be,null),Br=!0},p(n,[m]){const ms={};m&2&&(ms.$$scope={dirty:m,ctx:n}),en.$set(ms);const Xa={};m&2&&(Xa.$$scope={dirty:m,ctx:n}),nn.$set(Xa);const Qa={};m&2&&(Qa.$$scope={dirty:m,ctx:n}),an.$set(Qa);const er={};m&2&&(er.$$scope={dirty:m,ctx:n}),rn.$set(er);const jn={};m&2&&(jn.$$scope={dirty:m,ctx:n}),ln.$set(jn);const tr={};m&2&&(tr.$$scope={dirty:m,ctx:n}),cn.$set(tr);const nr={};m&2&&(nr.$$scope={dirty:m,ctx:n}),un.$set(nr);const or={};m&2&&(or.$$scope={dirty:m,ctx:n}),fn.$set(or);const fs={};m&2&&(fs.$$scope={dirty:m,ctx:n}),gn.$set(fs);const sr={};m&2&&(sr.$$scope={dirty:m,ctx:n}),_n.$set(sr);const ar={};m&2&&(ar.$$scope={dirty:m,ctx:n}),kn.$set(ar);const rr={};m&2&&(rr.$$scope={dirty:m,ctx:n}),Tn.$set(rr);const W={};m&2&&(W.$$scope={dirty:m,ctx:n}),Mn.$set(W);const ir={};m&2&&(ir.$$scope={dirty:m,ctx:n}),yn.$set(ir);const dr={};m&2&&(dr.$$scope={dirty:m,ctx:n}),xn.$set(dr);const lr={};m&2&&(lr.$$scope={dirty:m,ctx:n}),$n.$set(lr);const gs={};m&2&&(gs.$$scope={dirty:m,ctx:n}),zn.$set(gs)},i(n){Br||(x(d.$$.fragment,n),x(H.$$.fragment,n),x(Wn.$$.fragment,n),x(Kn.$$.fragment,n),x(Jn.$$.fragment,n),x(no.$$.fragment,n),x(oo.$$.fragment,n),x(so.$$.fragment,n),x(ao.$$.fragment,n),x(ro.$$.fragment,n),x(io.$$.fragment,n),x(lo.$$.fragment,n),x(en.$$.fragment,n),x(po.$$.fragment,n),x(ho.$$.fragment,n),x(nn.$$.fragment,n),x(go.$$.fragment,n),x(_o.$$.fragment,n),x(vo.$$.fragment,n),x(bo.$$.fragment,n),x(an.$$.fragment,n),x(rn.$$.fragment,n),x(yo.$$.fragment,n),x(xo.$$.fragment,n),x(jo.$$.fragment,n),x(ln.$$.fragment,n),x(cn.$$.fragment,n),x(Po.$$.fragment,n),x(Fo.$$.fragment,n),x(No.$$.fragment,n),x(un.$$.fragment,n),x(Co.$$.fragment,n),x(Lo.$$.fragment,n),x(fn.$$.fragment,n),x(So.$$.fragment,n),x(gn.$$.fragment,n),x(_n.$$.fragment,n),x(Do.$$.fragment,n),x(Ho.$$.fragment,n),x(kn.$$.fragment,n),x(Ro.$$.fragment,n),x(Tn.$$.fragment,n),x(Mn.$$.fragment,n),x(Go.$$.fragment,n),x(Jo.$$.fragment,n),x(os.$$.fragment,n),x(yn.$$.fragment,n),x(xn.$$.fragment,n),x(ss.$$.fragment,n),x(as.$$.fragment,n),x(us.$$.fragment,n),x($n.$$.fragment,n),x(zn.$$.fragment,n),Br=!0)},o(n){w(d.$$.fragment,n),w(H.$$.fragment,n),w(Wn.$$.fragment,n),w(Kn.$$.fragment,n),w(Jn.$$.fragment,n),w(no.$$.fragment,n),w(oo.$$.fragment,n),w(so.$$.fragment,n),w(ao.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(lo.$$.fragment,n),w(en.$$.fragment,n),w(po.$$.fragment,n),w(ho.$$.fragment,n),w(nn.$$.fragment,n),w(go.$$.fragment,n),w(_o.$$.fragment,n),w(vo.$$.fragment,n),w(bo.$$.fragment,n),w(an.$$.fragment,n),w(rn.$$.fragment,n),w(yo.$$.fragment,n),w(xo.$$.fragment,n),w(jo.$$.fragment,n),w(ln.$$.fragment,n),w(cn.$$.fragment,n),w(Po.$$.fragment,n),w(Fo.$$.fragment,n),w(No.$$.fragment,n),w(un.$$.fragment,n),w(Co.$$.fragment,n),w(Lo.$$.fragment,n),w(fn.$$.fragment,n),w(So.$$.fragment,n),w(gn.$$.fragment,n),w(_n.$$.fragment,n),w(Do.$$.fragment,n),w(Ho.$$.fragment,n),w(kn.$$.fragment,n),w(Ro.$$.fragment,n),w(Tn.$$.fragment,n),w(Mn.$$.fragment,n),w(Go.$$.fragment,n),w(Jo.$$.fragment,n),w(os.$$.fragment,n),w(yn.$$.fragment,n),w(xn.$$.fragment,n),w(ss.$$.fragment,n),w(as.$$.fragment,n),w(us.$$.fragment,n),w($n.$$.fragment,n),w(zn.$$.fragment,n),Br=!1},d(n){t(h),n&&t(k),n&&t(_),$(d),n&&t(Ne),n&&t(C),n&&t(Ce),n&&t(R),n&&t(Le),n&&t(L),$(H),n&&t(Ie),n&&t(F),n&&t(cr),n&&t(bt),$(Wn),n&&t(pr),n&&t(Oe),n&&t(hr),n&&t(xt),$(Kn),n&&t(ur),n&&t(Jt),n&&t(mr),n&&t(wt),$(Jn),n&&t(fr),n&&t(Se),n&&t(gr),n&&t(Zt),n&&t(_r),$(no,n),n&&t(vr),n&&t(vs),n&&t(kr),$(oo,n),n&&t(Tr),n&&t($t),$(so),n&&t(Mr),n&&t(ks),n&&t(br),$(ao,n),n&&t(yr),n&&t(Ts),n&&t(xr),$(ro,n),n&&t(wr),n&&t(zt),$(io),n&&t($r),n&&t(Ee),$(lo),$(en),n&&t(zr),n&&t(qt),$(po),n&&t(jr),n&&t(he),$(ho),$(nn),$(go),n&&t(Er),n&&t(Pt),$(_o),n&&t(qr),n&&t(qe),$(vo),$(bo),$(an),$(rn),n&&t(Pr),n&&t(Nt),$(yo),n&&t(Fr),n&&t(Pe),$(xo),$(jo),$(ln),$(cn),n&&t(Nr),n&&t(Lt),$(Po),n&&t(Cr),n&&t(It),$(Fo),$(No),$(un),n&&t(Lr),n&&t(At),$(Co),n&&t(Ir),n&&t(ue),$(Lo),$(fn),$(So),$(gn),$(_n),n&&t(Ar),n&&t(St),$(Do),n&&t(Or),n&&t(me),$(Ho),$(kn),$(Ro),$(Tn),$(Mn),n&&t(Sr),n&&t(Ht),$(Go),n&&t(Dr),n&&t(J),$(Jo),$(os),$(yn),$(xn),n&&t(Hr),n&&t(Bt),$(ss),n&&t(Ur),n&&t(Y),$(as),$(us),$($n),$(zn)}}}const Sm={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function Dm(E){return Tm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Km extends gm{constructor(h){super();_m(this,h,Dm,Om,vm,{})}}export{Km as default,Sm as metadata};
