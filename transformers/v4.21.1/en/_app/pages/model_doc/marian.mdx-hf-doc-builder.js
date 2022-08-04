import{S as gm,i as _m,s as vm,e as o,k as d,w as M,t as r,M as km,c as s,d as t,m as c,a,x as b,h as i,b as p,G as e,g,y,q as x,o as w,B as $,v as Tm,L as jt}from"../../chunks/vendor-hf-doc-builder.js";import{T as bn}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as de}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as zt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Mm(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianModel, MarianConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=o("p"),k=r("Examples:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Examples:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function bm(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
src_texts = ["I am a small frog.", "Tom asked his teacher for advice."]
tgt_texts = ["Ich bin ein kleiner Frosch.", "Tom bat seinen Lehrer um Rat."]  # optional
inputs = tokenizer(src_texts, return_tensors="pt", padding=True)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_texts, return_tensors="pt", padding=True)
inputs["labels"] = labels["input_ids"]

outputs = model(**inputs)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_texts = [<span class="hljs-string">&quot;I am a small frog.&quot;</span>, <span class="hljs-string">&quot;Tom asked his teacher for advice.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_texts = [<span class="hljs-string">&quot;Ich bin ein kleiner Frosch.&quot;</span>, <span class="hljs-string">&quot;Tom bat seinen Lehrer um Rat.&quot;</span>]  <span class="hljs-comment"># optional</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(src_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-comment"># keys  [input_ids, attention_mask, labels].</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`}}),{c(){h=o("p"),k=r("Examples:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Examples:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function ym(z){let h,k,_,u,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var j=a(_);u=i(j,"Module"),j.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,h,m),e(h,k),e(h,_),e(_,u),e(h,v)},d(l){l&&t(h)}}}function xm(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer, MarianModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">26</span>, <span class="hljs-number">512</span>]`}}),{c(){h=o("p"),k=r("Example:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Example:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function wm(z){let h,k,_,u,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var j=a(_);u=i(j,"Module"),j.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,h,m),e(h,k),e(h,_),e(_,u),e(h,v)},d(l){l&&t(h)}}}function $m(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer, MarianMTModel

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
<span class="hljs-string">&quot;Where&#x27;s the bus stop?&quot;</span>`}}),{c(){h=o("p"),k=r("Examples:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Examples:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function zm(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){h=o("p"),k=r("Example:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Example:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function jm(z){let h,k,_,u,v,l,m,j,Ce,ce,E,ue,Y,Le,K,Z,Ie,xe,G,O,we,L,F,N,X,Q,me,Ae,J,P,fe,C,Oe,ee,ge,te,ne,oe,Se,S,He,H,D;return{c(){h=o("p"),k=r("TF 2.0 models accepts two formats as inputs:"),_=d(),u=o("ul"),v=o("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),j=o("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=d(),E=o("p"),ue=r("This second option is useful when using "),Y=o("code"),Le=r("tf.keras.Model.fit"),K=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=o("code"),Ie=r("model(inputs)"),xe=r("."),G=d(),O=o("p"),we=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),L=d(),F=o("ul"),N=o("li"),X=r("a single Tensor with "),Q=o("code"),me=r("input_ids"),Ae=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),fe=d(),C=o("li"),Oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=o("code"),ge=r("model([input_ids, attention_mask])"),te=r(" or "),ne=o("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),Se=d(),S=o("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=s(T,"P",{});var q=a(h);k=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),_=c(T),u=s(T,"UL",{});var _e=a(u);v=s(_e,"LI",{});var Ke=a(v);l=i(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),m=c(_e),j=s(_e,"LI",{});var ve=a(j);Ce=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),_e.forEach(t),ce=c(T),E=s(T,"P",{});var U=a(E);ue=i(U,"This second option is useful when using "),Y=s(U,"CODE",{});var Ze=a(Y);Le=i(Ze,"tf.keras.Model.fit"),Ze.forEach(t),K=i(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=s(U,"CODE",{});var Xe=a(Z);Ie=i(Xe,"model(inputs)"),Xe.forEach(t),xe=i(U,"."),U.forEach(t),G=c(T),O=s(T,"P",{});var De=a(O);we=i(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),L=c(T),F=s(T,"UL",{});var I=a(F);N=s(I,"LI",{});var se=a(N);X=i(se,"a single Tensor with "),Q=s(se,"CODE",{});var Qe=a(Q);me=i(Qe,"input_ids"),Qe.forEach(t),Ae=i(se," only and nothing else: "),J=s(se,"CODE",{});var Ue=a(J);P=i(Ue,"model(input_ids)"),Ue.forEach(t),se.forEach(t),fe=c(I),C=s(I,"LI",{});var W=a(C);Oe=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(W,"CODE",{});var et=a(ee);ge=i(et,"model([input_ids, attention_mask])"),et.forEach(t),te=i(W," or "),ne=s(W,"CODE",{});var tt=a(ne);oe=i(tt,"model([input_ids, attention_mask, token_type_ids])"),tt.forEach(t),W.forEach(t),Se=c(I),S=s(I,"LI",{});var ae=a(S);He=i(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s(ae,"CODE",{});var ke=a(H);D=i(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),ae.forEach(t),I.forEach(t)},m(T,q){g(T,h,q),e(h,k),g(T,_,q),g(T,u,q),e(u,v),e(v,l),e(u,m),e(u,j),e(j,Ce),g(T,ce,q),g(T,E,q),e(E,ue),e(E,Y),e(Y,Le),e(E,K),e(E,Z),e(Z,Ie),e(E,xe),g(T,G,q),g(T,O,q),e(O,we),g(T,L,q),g(T,F,q),e(F,N),e(N,X),e(N,Q),e(Q,me),e(N,Ae),e(N,J),e(J,P),e(F,fe),e(F,C),e(C,Oe),e(C,ee),e(ee,ge),e(C,te),e(C,ne),e(ne,oe),e(F,Se),e(F,S),e(S,He),e(S,H),e(H,D)},d(T){T&&t(h),T&&t(_),T&&t(u),T&&t(ce),T&&t(E),T&&t(G),T&&t(O),T&&t(L),T&&t(F)}}}function qm(z){let h,k,_,u,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var j=a(_);u=i(j,"Module"),j.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,h,m),e(h,k),e(h,_),e(_,u),e(h,v)},d(l){l&&t(h)}}}function Em(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer, TFMarianModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=o("p"),k=r("Example:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Example:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function Fm(z){let h,k,_,u,v,l,m,j,Ce,ce,E,ue,Y,Le,K,Z,Ie,xe,G,O,we,L,F,N,X,Q,me,Ae,J,P,fe,C,Oe,ee,ge,te,ne,oe,Se,S,He,H,D;return{c(){h=o("p"),k=r("TF 2.0 models accepts two formats as inputs:"),_=d(),u=o("ul"),v=o("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),j=o("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=d(),E=o("p"),ue=r("This second option is useful when using "),Y=o("code"),Le=r("tf.keras.Model.fit"),K=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=o("code"),Ie=r("model(inputs)"),xe=r("."),G=d(),O=o("p"),we=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),L=d(),F=o("ul"),N=o("li"),X=r("a single Tensor with "),Q=o("code"),me=r("input_ids"),Ae=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),fe=d(),C=o("li"),Oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=o("code"),ge=r("model([input_ids, attention_mask])"),te=r(" or "),ne=o("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),Se=d(),S=o("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=s(T,"P",{});var q=a(h);k=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),_=c(T),u=s(T,"UL",{});var _e=a(u);v=s(_e,"LI",{});var Ke=a(v);l=i(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),m=c(_e),j=s(_e,"LI",{});var ve=a(j);Ce=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),_e.forEach(t),ce=c(T),E=s(T,"P",{});var U=a(E);ue=i(U,"This second option is useful when using "),Y=s(U,"CODE",{});var Ze=a(Y);Le=i(Ze,"tf.keras.Model.fit"),Ze.forEach(t),K=i(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),Z=s(U,"CODE",{});var Xe=a(Z);Ie=i(Xe,"model(inputs)"),Xe.forEach(t),xe=i(U,"."),U.forEach(t),G=c(T),O=s(T,"P",{});var De=a(O);we=i(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),L=c(T),F=s(T,"UL",{});var I=a(F);N=s(I,"LI",{});var se=a(N);X=i(se,"a single Tensor with "),Q=s(se,"CODE",{});var Qe=a(Q);me=i(Qe,"input_ids"),Qe.forEach(t),Ae=i(se," only and nothing else: "),J=s(se,"CODE",{});var Ue=a(J);P=i(Ue,"model(input_ids)"),Ue.forEach(t),se.forEach(t),fe=c(I),C=s(I,"LI",{});var W=a(C);Oe=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(W,"CODE",{});var et=a(ee);ge=i(et,"model([input_ids, attention_mask])"),et.forEach(t),te=i(W," or "),ne=s(W,"CODE",{});var tt=a(ne);oe=i(tt,"model([input_ids, attention_mask, token_type_ids])"),tt.forEach(t),W.forEach(t),Se=c(I),S=s(I,"LI",{});var ae=a(S);He=i(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s(ae,"CODE",{});var ke=a(H);D=i(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),ae.forEach(t),I.forEach(t)},m(T,q){g(T,h,q),e(h,k),g(T,_,q),g(T,u,q),e(u,v),e(v,l),e(u,m),e(u,j),e(j,Ce),g(T,ce,q),g(T,E,q),e(E,ue),e(E,Y),e(Y,Le),e(E,K),e(E,Z),e(Z,Ie),e(E,xe),g(T,G,q),g(T,O,q),e(O,we),g(T,L,q),g(T,F,q),e(F,N),e(N,X),e(N,Q),e(Q,me),e(N,Ae),e(N,J),e(J,P),e(F,fe),e(F,C),e(C,Oe),e(C,ee),e(ee,ge),e(C,te),e(C,ne),e(ne,oe),e(F,Se),e(F,S),e(S,He),e(S,H),e(H,D)},d(T){T&&t(h),T&&t(_),T&&t(u),T&&t(ce),T&&t(E),T&&t(G),T&&t(O),T&&t(L),T&&t(F)}}}function Pm(z){let h,k,_,u,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var j=a(_);u=i(j,"Module"),j.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,h,m),e(h,k),e(h,_),e(_,u),e(h,v)},d(l){l&&t(h)}}}function Nm(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
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
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),{c(){h=o("p"),k=r("Examples:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Examples:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function Cm(z){let h,k,_,u,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var j=a(_);u=i(j,"Module"),j.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,h,m),e(h,k),e(h,_),e(_,u),e(h,v)},d(l){l&&t(h)}}}function Lm(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = FlaxMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=o("p"),k=r("Example:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Example:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function Im(z){let h,k,_,u,v;return{c(){h=o("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=o("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var j=a(_);u=i(j,"Module"),j.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,h,m),e(h,k),e(h,_),e(_,u),e(h,v)},d(l){l&&t(h)}}}function Am(z){let h,k,_,u,v;return u=new ye({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`}}),{c(){h=o("p"),k=r("Example:"),_=d(),M(u.$$.fragment)},l(l){h=s(l,"P",{});var m=a(h);k=i(m,"Example:"),m.forEach(t),_=c(l),b(u.$$.fragment,l)},m(l,m){g(l,h,m),e(h,k),g(l,_,m),y(u,l,m),v=!0},p:jt,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){w(u.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(_),$(u,l)}}}function Om(z){let h,k,_,u,v,l,m,j,Ce,ce,E,ue,Y,Le,K,Z,Ie,xe,G,O,we,L,F,N,X,Q,me,Ae,J,P,fe,C,Oe,ee,ge,te,ne,oe,Se,S,He,H,D,T,q,_e,Ke,ve,U,Ze,Xe,De,I,se,Qe,Ue,W,et,tt,ae,ke,bi,ts,yi,xi,wi,nt,yn,$i,Ps,zi,ji,qi,xn,Ei,Ns,Fi,Pi,Ni,ot,Ci,Cs,Li,Ii,Ls,Ai,Oi,Si,Is,wn,Hi,As,Di,Ui,Wi,Os,$n,Ri,zn,Vi,Bi,Za,st,qt,Ss,jn,Gi,Hs,Ji,Xa,$e,ns,Yi,Ds,Ki,Zi,qn,Xi,En,Qi,el,tl,at,nl,Us,ol,sl,Ws,al,rl,il,Rs,ll,Qa,rt,Et,Vs,Fn,dl,Bs,cl,er,Ft,Gs,pl,hl,Js,Pn,ul,tr,it,Pt,Ys,Nn,ml,Ks,fl,nr,ze,Cn,gl,Zs,_l,vl,kl,Ln,Tl,Xs,Ml,bl,yl,In,xl,An,wl,$l,zl,On,jl,Qs,ql,El,or,Nt,Fl,Sn,Pl,Nl,sr,Hn,ar,os,Cl,rr,Dn,ir,lt,Ct,ea,Un,Ll,ta,Il,lr,ss,Al,dr,Wn,cr,as,Ol,pr,Rn,hr,dt,Lt,na,Vn,Sl,oa,Hl,ur,Te,Bn,Dl,ct,Ul,rs,Wl,Rl,Gn,Vl,Bl,Gl,pt,Jl,is,Yl,Kl,ls,Zl,Xl,Ql,It,mr,ht,At,sa,Jn,ed,aa,td,fr,re,Yn,nd,Kn,od,Zn,sd,ad,rd,Xn,id,ds,ld,dd,cd,Ot,pd,St,Qn,hd,ra,ud,gr,ut,Ht,ia,eo,md,la,fd,_r,Me,to,gd,no,_d,cs,vd,kd,Td,oo,Md,so,bd,yd,xd,je,ao,wd,mt,$d,ps,zd,jd,da,qd,Ed,Fd,Dt,Pd,Ut,vr,ft,Wt,ca,ro,Nd,pa,Cd,kr,be,io,Ld,lo,Id,hs,Ad,Od,Sd,co,Hd,po,Dd,Ud,Wd,pe,ho,Rd,gt,Vd,us,Bd,Gd,ha,Jd,Yd,Kd,Rt,Zd,uo,Xd,mo,Qd,ec,tc,Vt,Tr,_t,Bt,ua,fo,nc,ma,oc,Mr,vt,go,sc,Gt,_o,ac,Jt,br,kt,Yt,fa,vo,rc,ga,ic,yr,ie,ko,lc,To,dc,ms,cc,pc,hc,Mo,uc,bo,mc,fc,gc,Kt,_c,qe,yo,vc,Tt,kc,fs,Tc,Mc,_a,bc,yc,xc,Zt,wc,Xt,xr,Mt,Qt,va,xo,$c,ka,zc,wr,le,wo,jc,$o,qc,gs,Ec,Fc,Pc,zo,Nc,jo,Cc,Lc,Ic,en,Ac,he,qo,Oc,bt,Sc,_s,Hc,Dc,Ta,Uc,Wc,Rc,tn,Vc,Eo,Bc,Fo,Gc,Jc,Yc,nn,$r,yt,on,Ma,Po,Kc,ba,Zc,zr,R,No,Xc,Co,Qc,vs,ep,tp,np,Lo,op,Io,sp,ap,rp,ya,ip,lp,We,xa,Ao,dp,cp,wa,Oo,pp,hp,$a,So,up,mp,za,Ho,fp,gp,Ee,Do,_p,xt,vp,ja,kp,Tp,qa,Mp,bp,yp,sn,xp,an,jr,wt,rn,Ea,Uo,wp,Fa,$p,qr,V,Wo,zp,Ro,jp,ks,qp,Ep,Fp,Vo,Pp,Bo,Np,Cp,Lp,Pa,Ip,Ap,Re,Na,Go,Op,Sp,Ca,Jo,Hp,Dp,La,Yo,Up,Wp,Ia,Ko,Rp,Vp,Fe,Zo,Bp,$t,Gp,Aa,Jp,Yp,Oa,Kp,Zp,Xp,ln,Qp,dn,Er;return l=new de({}),X=new de({}),jn=new de({}),Fn=new de({}),Nn=new de({}),Hn=new ye({props:{code:`from transformers import MarianMTModel, MarianTokenizer

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
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Dn=new ye({props:{code:`from huggingface_hub import list_models

model_list = list_models()
org = "Helsinki-NLP"
model_ids = [x.modelId for x in model_list if x.modelId.startswith(org)]
suffix = [x.split("/")[1] for x in model_ids]
old_style_multi_models = [f"{org}/{s}" for s in suffix if s != s.lower()]`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&quot;/&quot;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&quot;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&quot;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),Un=new de({}),Wn=new ye({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
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
}`}}),Rn=new ye({props:{code:`from transformers import MarianMTModel, MarianTokenizer

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
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Vn=new de({}),Bn=new B({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"decoder_vocab_size",val:" = None"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"share_encoder_decoder_embeddings",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/configuration_marian.py#L34"}}),It=new zt({props:{anchor:"transformers.MarianConfig.example",$$slots:{default:[Mm]},$$scope:{ctx:z}}}),Jn=new de({}),Yn=new B({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"vocab",val:""},{name:"target_vocab_file",val:" = None"},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"separate_vocabs",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/tokenization_marian.py#L62"}}),Ot=new zt({props:{anchor:"transformers.MarianTokenizer.example",$$slots:{default:[bm]},$$scope:{ctx:z}}}),Qn=new B({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/tokenization_marian.py#L284"}}),eo=new de({}),to=new B({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_marian.py#L1087"}}),ao=new B({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_marian.py#L1169",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dt=new bn({props:{$$slots:{default:[ym]},$$scope:{ctx:z}}}),Ut=new zt({props:{anchor:"transformers.MarianModel.forward.example",$$slots:{default:[xm]},$$scope:{ctx:z}}}),ro=new de({}),io=new B({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_marian.py#L1271"}}),ho=new B({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_marian.py#L1396",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new bn({props:{$$slots:{default:[wm]},$$scope:{ctx:z}}}),Vt=new zt({props:{anchor:"transformers.MarianMTModel.forward.example",$$slots:{default:[$m]},$$scope:{ctx:z}}}),fo=new de({}),go=new B({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_marian.py#L1540"}}),_o=new B({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_marian.py#L1571",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new zt({props:{anchor:"transformers.MarianForCausalLM.forward.example",$$slots:{default:[zm]},$$scope:{ctx:z}}}),vo=new de({}),ko=new B({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_tf_marian.py#L1188"}}),Kt=new bn({props:{$$slots:{default:[jm]},$$scope:{ctx:z}}}),yo=new B({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_tf_marian.py#L1200",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zt=new bn({props:{$$slots:{default:[qm]},$$scope:{ctx:z}}}),Xt=new zt({props:{anchor:"transformers.TFMarianModel.call.example",$$slots:{default:[Em]},$$scope:{ctx:z}}}),xo=new de({}),wo=new B({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_tf_marian.py#L1276"}}),en=new bn({props:{$$slots:{default:[Fm]},$$scope:{ctx:z}}}),qo=new B({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_tf_marian.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tn=new bn({props:{$$slots:{default:[Pm]},$$scope:{ctx:z}}}),nn=new zt({props:{anchor:"transformers.TFMarianMTModel.call.example",$$slots:{default:[Nm]},$$scope:{ctx:z}}}),Po=new de({}),No=new B({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_flax_marian.py#L1207"}}),Do=new B({props:{name:"__call__",anchor:"transformers.FlaxMarianModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_flax_marian.py#L1142",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new bn({props:{$$slots:{default:[Cm]},$$scope:{ctx:z}}}),an=new zt({props:{anchor:"transformers.FlaxMarianModel.__call__.example",$$slots:{default:[Lm]},$$scope:{ctx:z}}}),Uo=new de({}),Wo=new B({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_flax_marian.py#L1293"}}),Zo=new B({props:{name:"__call__",anchor:"transformers.FlaxMarianMTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/marian/modeling_flax_marian.py#L1142",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new bn({props:{$$slots:{default:[Im]},$$scope:{ctx:z}}}),dn=new zt({props:{anchor:"transformers.FlaxMarianMTModel.__call__.example",$$slots:{default:[Am]},$$scope:{ctx:z}}}),{c(){h=o("meta"),k=d(),_=o("h1"),u=o("a"),v=o("span"),M(l.$$.fragment),m=d(),j=o("span"),Ce=r("MarianMT"),ce=d(),E=o("p"),ue=o("strong"),Y=r("Bugs:"),Le=r(" If you see something strange, file a "),K=o("a"),Z=r("Github Issue"),Ie=r(`
and assign @patrickvonplaten.`),xe=d(),G=o("p"),O=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),we=d(),L=o("h2"),F=o("a"),N=o("span"),M(X.$$.fragment),Q=d(),me=o("span"),Ae=r("Implementation Notes"),J=d(),P=o("ul"),fe=o("li"),C=o("p"),Oe=r("Each model is about 298 MB on disk, there are more than 1,000 models."),ee=d(),ge=o("li"),te=o("p"),ne=r("The list of supported language pairs can be found "),oe=o("a"),Se=r("here"),S=r("."),He=d(),H=o("li"),D=o("p"),T=r("Models were originally trained by "),q=o("a"),_e=r("J\xF6rg Tiedemann"),Ke=r(" using the "),ve=o("a"),U=r("Marian"),Ze=r(" C++ library, which supports fast training and translation."),Xe=d(),De=o("li"),I=o("p"),se=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),Qe=d(),Ue=o("li"),W=o("p"),et=r("The 80 opus models that require BPE preprocessing are not supported."),tt=d(),ae=o("li"),ke=o("p"),bi=r("The modeling code is the same as "),ts=o("a"),yi=r("BartForConditionalGeneration"),xi=r(" with a few minor modifications:"),wi=d(),nt=o("ul"),yn=o("li"),$i=r("static (sinusoid) positional embeddings ("),Ps=o("code"),zi=r("MarianConfig.static_position_embeddings=True"),ji=r(")"),qi=d(),xn=o("li"),Ei=r("no layernorm_embedding ("),Ns=o("code"),Fi=r("MarianConfig.normalize_embedding=False"),Pi=r(")"),Ni=d(),ot=o("li"),Ci=r("the model starts generating with "),Cs=o("code"),Li=r("pad_token_id"),Ii=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Ls=o("code"),Ai=r("<s/>"),Oi=r("),"),Si=d(),Is=o("li"),wn=o("p"),Hi=r("Code to bulk convert models can be found in "),As=o("code"),Di=r("convert_marian_to_pytorch.py"),Ui=r("."),Wi=d(),Os=o("li"),$n=o("p"),Ri=r("This model was contributed by "),zn=o("a"),Vi=r("sshleifer"),Bi=r("."),Za=d(),st=o("h2"),qt=o("a"),Ss=o("span"),M(jn.$$.fragment),Gi=d(),Hs=o("span"),Ji=r("Naming"),Xa=d(),$e=o("ul"),ns=o("li"),Yi=r("All model names use the following format: "),Ds=o("code"),Ki=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Zi=d(),qn=o("li"),Xi=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),En=o("a"),Qi=r("here"),el=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),tl=d(),at=o("li"),nl=r("Codes formatted like "),Us=o("code"),ol=r("es_AR"),sl=r(" are usually "),Ws=o("code"),al=r("code_{region}"),rl=r(". That one is Spanish from Argentina."),il=d(),Rs=o("li"),ll=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),Qa=d(),rt=o("h2"),Et=o("a"),Vs=o("span"),M(Fn.$$.fragment),dl=d(),Bs=o("span"),cl=r("Examples"),er=d(),Ft=o("ul"),Gs=o("li"),pl=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),hl=d(),Js=o("li"),Pn=o("a"),ul=r("Fine-tune on GPU"),tr=d(),it=o("h2"),Pt=o("a"),Ys=o("span"),M(Nn.$$.fragment),ml=d(),Ks=o("span"),fl=r("Multilingual Models"),nr=d(),ze=o("ul"),Cn=o("li"),gl=r("All model names use the following format: "),Zs=o("code"),_l=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),vl=r(":"),kl=d(),Ln=o("li"),Tl=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Xs=o("code"),Ml=r("src_text"),bl=r("."),yl=d(),In=o("li"),xl=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),An=o("a"),wl=r("opus-mt-en-roa"),$l=r("."),zl=d(),On=o("li"),jl=r("Note that if a model is only multilingual on the source side, like "),Qs=o("code"),ql=r("Helsinki-NLP/opus-mt-roa-en"),El=r(`, no language
codes are required.`),or=d(),Nt=o("p"),Fl=r("New multi-lingual models from the "),Sn=o("a"),Pl=r("Tatoeba-Challenge repo"),Nl=r(`
require 3 character language codes:`),sr=d(),M(Hn.$$.fragment),ar=d(),os=o("p"),Cl=r("Here is the code to see all available pretrained models on the hub:"),rr=d(),M(Dn.$$.fragment),ir=d(),lt=o("h2"),Ct=o("a"),ea=o("span"),M(Un.$$.fragment),Ll=d(),ta=o("span"),Il=r("Old Style Multi-Lingual Models"),lr=d(),ss=o("p"),Al=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),dr=d(),M(Wn.$$.fragment),cr=d(),as=o("p"),Ol=r("Example of translating english to many romance languages, using old-style 2 character language codes"),pr=d(),M(Rn.$$.fragment),hr=d(),dt=o("h2"),Lt=o("a"),na=o("span"),M(Vn.$$.fragment),Sl=d(),oa=o("span"),Hl=r("MarianConfig"),ur=d(),Te=o("div"),M(Bn.$$.fragment),Dl=d(),ct=o("p"),Ul=r("This is the configuration class to store the configuration of a "),rs=o("a"),Wl=r("MarianModel"),Rl=r(`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),Gn=o("a"),Vl=r("Helsinki-NLP/opus-mt-en-de"),Bl=r(" architecture."),Gl=d(),pt=o("p"),Jl=r("Configuration objects inherit from "),is=o("a"),Yl=r("PretrainedConfig"),Kl=r(` and can be used to control the model outputs. Read the
documentation from `),ls=o("a"),Zl=r("PretrainedConfig"),Xl=r(" for more information."),Ql=d(),M(It.$$.fragment),mr=d(),ht=o("h2"),At=o("a"),sa=o("span"),M(Jn.$$.fragment),ed=d(),aa=o("span"),td=r("MarianTokenizer"),fr=d(),re=o("div"),M(Yn.$$.fragment),nd=d(),Kn=o("p"),od=r("Construct a Marian tokenizer. Based on "),Zn=o("a"),sd=r("SentencePiece"),ad=r("."),rd=d(),Xn=o("p"),id=r("This tokenizer inherits from "),ds=o("a"),ld=r("PreTrainedTokenizer"),dd=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),cd=d(),M(Ot.$$.fragment),pd=d(),St=o("div"),M(Qn.$$.fragment),hd=d(),ra=o("p"),ud=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),gr=d(),ut=o("h2"),Ht=o("a"),ia=o("span"),M(eo.$$.fragment),md=d(),la=o("span"),fd=r("MarianModel"),_r=d(),Me=o("div"),M(to.$$.fragment),gd=d(),no=o("p"),_d=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=o("a"),vd=r("PreTrainedModel"),kd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td=d(),oo=o("p"),Md=r("This model is also a PyTorch "),so=o("a"),bd=r("torch.nn.Module"),yd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=d(),je=o("div"),M(ao.$$.fragment),wd=d(),mt=o("p"),$d=r("The "),ps=o("a"),zd=r("MarianModel"),jd=r(" forward method, overrides the "),da=o("code"),qd=r("__call__"),Ed=r(" special method."),Fd=d(),M(Dt.$$.fragment),Pd=d(),M(Ut.$$.fragment),vr=d(),ft=o("h2"),Wt=o("a"),ca=o("span"),M(ro.$$.fragment),Nd=d(),pa=o("span"),Cd=r("MarianMTModel"),kr=d(),be=o("div"),M(io.$$.fragment),Ld=d(),lo=o("p"),Id=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=o("a"),Ad=r("PreTrainedModel"),Od=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd=d(),co=o("p"),Hd=r("This model is also a PyTorch "),po=o("a"),Dd=r("torch.nn.Module"),Ud=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wd=d(),pe=o("div"),M(ho.$$.fragment),Rd=d(),gt=o("p"),Vd=r("The "),us=o("a"),Bd=r("MarianMTModel"),Gd=r(" forward method, overrides the "),ha=o("code"),Jd=r("__call__"),Yd=r(" special method."),Kd=d(),M(Rt.$$.fragment),Zd=d(),uo=o("p"),Xd=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),mo=o("a"),Qd=r("here"),ec=r("."),tc=d(),M(Vt.$$.fragment),Tr=d(),_t=o("h2"),Bt=o("a"),ua=o("span"),M(fo.$$.fragment),nc=d(),ma=o("span"),oc=r("MarianForCausalLM"),Mr=d(),vt=o("div"),M(go.$$.fragment),sc=d(),Gt=o("div"),M(_o.$$.fragment),ac=d(),M(Jt.$$.fragment),br=d(),kt=o("h2"),Yt=o("a"),fa=o("span"),M(vo.$$.fragment),rc=d(),ga=o("span"),ic=r("TFMarianModel"),yr=d(),ie=o("div"),M(ko.$$.fragment),lc=d(),To=o("p"),dc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=o("a"),cc=r("TFPreTrainedModel"),pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc=d(),Mo=o("p"),uc=r("This model is also a "),bo=o("a"),mc=r("tf.keras.Model"),fc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gc=d(),M(Kt.$$.fragment),_c=d(),qe=o("div"),M(yo.$$.fragment),vc=d(),Tt=o("p"),kc=r("The "),fs=o("a"),Tc=r("TFMarianModel"),Mc=r(" forward method, overrides the "),_a=o("code"),bc=r("__call__"),yc=r(" special method."),xc=d(),M(Zt.$$.fragment),wc=d(),M(Xt.$$.fragment),xr=d(),Mt=o("h2"),Qt=o("a"),va=o("span"),M(xo.$$.fragment),$c=d(),ka=o("span"),zc=r("TFMarianMTModel"),wr=d(),le=o("div"),M(wo.$$.fragment),jc=d(),$o=o("p"),qc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),gs=o("a"),Ec=r("TFPreTrainedModel"),Fc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc=d(),zo=o("p"),Nc=r("This model is also a "),jo=o("a"),Cc=r("tf.keras.Model"),Lc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ic=d(),M(en.$$.fragment),Ac=d(),he=o("div"),M(qo.$$.fragment),Oc=d(),bt=o("p"),Sc=r("The "),_s=o("a"),Hc=r("TFMarianMTModel"),Dc=r(" forward method, overrides the "),Ta=o("code"),Uc=r("__call__"),Wc=r(" special method."),Rc=d(),M(tn.$$.fragment),Vc=d(),Eo=o("p"),Bc=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),Fo=o("a"),Gc=r("here"),Jc=r("."),Yc=d(),M(nn.$$.fragment),$r=d(),yt=o("h2"),on=o("a"),Ma=o("span"),M(Po.$$.fragment),Kc=d(),ba=o("span"),Zc=r("FlaxMarianModel"),zr=d(),R=o("div"),M(No.$$.fragment),Xc=d(),Co=o("p"),Qc=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),vs=o("a"),ep=r("FlaxPreTrainedModel"),tp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=d(),Lo=o("p"),op=r(`This model is also a Flax Linen
`),Io=o("a"),sp=r("flax.nn.Module"),ap=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rp=d(),ya=o("p"),ip=r("Finally, this model supports inherent JAX features such as:"),lp=d(),We=o("ul"),xa=o("li"),Ao=o("a"),dp=r("Just-In-Time (JIT) compilation"),cp=d(),wa=o("li"),Oo=o("a"),pp=r("Automatic Differentiation"),hp=d(),$a=o("li"),So=o("a"),up=r("Vectorization"),mp=d(),za=o("li"),Ho=o("a"),fp=r("Parallelization"),gp=d(),Ee=o("div"),M(Do.$$.fragment),_p=d(),xt=o("p"),vp=r("The "),ja=o("code"),kp=r("FlaxMarianPreTrainedModel"),Tp=r(" forward method, overrides the "),qa=o("code"),Mp=r("__call__"),bp=r(" special method."),yp=d(),M(sn.$$.fragment),xp=d(),M(an.$$.fragment),jr=d(),wt=o("h2"),rn=o("a"),Ea=o("span"),M(Uo.$$.fragment),wp=d(),Fa=o("span"),$p=r("FlaxMarianMTModel"),qr=d(),V=o("div"),M(Wo.$$.fragment),zp=d(),Ro=o("p"),jp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),ks=o("a"),qp=r("FlaxPreTrainedModel"),Ep=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp=d(),Vo=o("p"),Pp=r(`This model is also a Flax Linen
`),Bo=o("a"),Np=r("flax.nn.Module"),Cp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lp=d(),Pa=o("p"),Ip=r("Finally, this model supports inherent JAX features such as:"),Ap=d(),Re=o("ul"),Na=o("li"),Go=o("a"),Op=r("Just-In-Time (JIT) compilation"),Sp=d(),Ca=o("li"),Jo=o("a"),Hp=r("Automatic Differentiation"),Dp=d(),La=o("li"),Yo=o("a"),Up=r("Vectorization"),Wp=d(),Ia=o("li"),Ko=o("a"),Rp=r("Parallelization"),Vp=d(),Fe=o("div"),M(Zo.$$.fragment),Bp=d(),$t=o("p"),Gp=r("The "),Aa=o("code"),Jp=r("FlaxMarianPreTrainedModel"),Yp=r(" forward method, overrides the "),Oa=o("code"),Kp=r("__call__"),Zp=r(" special method."),Xp=d(),M(ln.$$.fragment),Qp=d(),M(dn.$$.fragment),this.h()},l(n){const f=km('[data-svelte="svelte-1phssyn"]',document.head);h=s(f,"META",{name:!0,content:!0}),f.forEach(t),k=c(n),_=s(n,"H1",{class:!0});var Xo=a(_);u=s(Xo,"A",{id:!0,class:!0,href:!0});var Sa=a(u);v=s(Sa,"SPAN",{});var Ha=a(v);b(l.$$.fragment,Ha),Ha.forEach(t),Sa.forEach(t),m=c(Xo),j=s(Xo,"SPAN",{});var Da=a(j);Ce=i(Da,"MarianMT"),Da.forEach(t),Xo.forEach(t),ce=c(n),E=s(n,"P",{});var cn=a(E);ue=s(cn,"STRONG",{});var Ua=a(ue);Y=i(Ua,"Bugs:"),Ua.forEach(t),Le=i(cn," If you see something strange, file a "),K=s(cn,"A",{href:!0,rel:!0});var Wa=a(K);Z=i(Wa,"Github Issue"),Wa.forEach(t),Ie=i(cn,`
and assign @patrickvonplaten.`),cn.forEach(t),xe=c(n),G=s(n,"P",{});var Ra=a(G);O=i(Ra,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Ra.forEach(t),we=c(n),L=s(n,"H2",{class:!0});var Qo=a(L);F=s(Qo,"A",{id:!0,class:!0,href:!0});var Va=a(F);N=s(Va,"SPAN",{});var Ba=a(N);b(X.$$.fragment,Ba),Ba.forEach(t),Va.forEach(t),Q=c(Qo),me=s(Qo,"SPAN",{});var Ga=a(me);Ae=i(Ga,"Implementation Notes"),Ga.forEach(t),Qo.forEach(t),J=c(n),P=s(n,"UL",{});var A=a(P);fe=s(A,"LI",{});var Ja=a(fe);C=s(Ja,"P",{});var Ya=a(C);Oe=i(Ya,"Each model is about 298 MB on disk, there are more than 1,000 models."),Ya.forEach(t),Ja.forEach(t),ee=c(A),ge=s(A,"LI",{});var Ka=a(ge);te=s(Ka,"P",{});var es=a(te);ne=i(es,"The list of supported language pairs can be found "),oe=s(es,"A",{href:!0,rel:!0});var th=a(oe);Se=i(th,"here"),th.forEach(t),S=i(es,"."),es.forEach(t),Ka.forEach(t),He=c(A),H=s(A,"LI",{});var nh=a(H);D=s(nh,"P",{});var Ts=a(D);T=i(Ts,"Models were originally trained by "),q=s(Ts,"A",{href:!0,rel:!0});var oh=a(q);_e=i(oh,"J\xF6rg Tiedemann"),oh.forEach(t),Ke=i(Ts," using the "),ve=s(Ts,"A",{href:!0,rel:!0});var sh=a(ve);U=i(sh,"Marian"),sh.forEach(t),Ze=i(Ts," C++ library, which supports fast training and translation."),Ts.forEach(t),nh.forEach(t),Xe=c(A),De=s(A,"LI",{});var ah=a(De);I=s(ah,"P",{});var rh=a(I);se=i(rh,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),rh.forEach(t),ah.forEach(t),Qe=c(A),Ue=s(A,"LI",{});var ih=a(Ue);W=s(ih,"P",{});var lh=a(W);et=i(lh,"The 80 opus models that require BPE preprocessing are not supported."),lh.forEach(t),ih.forEach(t),tt=c(A),ae=s(A,"LI",{});var Fr=a(ae);ke=s(Fr,"P",{});var Pr=a(ke);bi=i(Pr,"The modeling code is the same as "),ts=s(Pr,"A",{href:!0});var dh=a(ts);yi=i(dh,"BartForConditionalGeneration"),dh.forEach(t),xi=i(Pr," with a few minor modifications:"),Pr.forEach(t),wi=c(Fr),nt=s(Fr,"UL",{});var Ms=a(nt);yn=s(Ms,"LI",{});var Nr=a(yn);$i=i(Nr,"static (sinusoid) positional embeddings ("),Ps=s(Nr,"CODE",{});var ch=a(Ps);zi=i(ch,"MarianConfig.static_position_embeddings=True"),ch.forEach(t),ji=i(Nr,")"),Nr.forEach(t),qi=c(Ms),xn=s(Ms,"LI",{});var Cr=a(xn);Ei=i(Cr,"no layernorm_embedding ("),Ns=s(Cr,"CODE",{});var ph=a(Ns);Fi=i(ph,"MarianConfig.normalize_embedding=False"),ph.forEach(t),Pi=i(Cr,")"),Cr.forEach(t),Ni=c(Ms),ot=s(Ms,"LI",{});var bs=a(ot);Ci=i(bs,"the model starts generating with "),Cs=s(bs,"CODE",{});var hh=a(Cs);Li=i(hh,"pad_token_id"),hh.forEach(t),Ii=i(bs,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Ls=s(bs,"CODE",{});var uh=a(Ls);Ai=i(uh,"<s/>"),uh.forEach(t),Oi=i(bs,"),"),bs.forEach(t),Ms.forEach(t),Fr.forEach(t),Si=c(A),Is=s(A,"LI",{});var mh=a(Is);wn=s(mh,"P",{});var Lr=a(wn);Hi=i(Lr,"Code to bulk convert models can be found in "),As=s(Lr,"CODE",{});var fh=a(As);Di=i(fh,"convert_marian_to_pytorch.py"),fh.forEach(t),Ui=i(Lr,"."),Lr.forEach(t),mh.forEach(t),Wi=c(A),Os=s(A,"LI",{});var gh=a(Os);$n=s(gh,"P",{});var Ir=a($n);Ri=i(Ir,"This model was contributed by "),zn=s(Ir,"A",{href:!0,rel:!0});var _h=a(zn);Vi=i(_h,"sshleifer"),_h.forEach(t),Bi=i(Ir,"."),Ir.forEach(t),gh.forEach(t),A.forEach(t),Za=c(n),st=s(n,"H2",{class:!0});var Ar=a(st);qt=s(Ar,"A",{id:!0,class:!0,href:!0});var vh=a(qt);Ss=s(vh,"SPAN",{});var kh=a(Ss);b(jn.$$.fragment,kh),kh.forEach(t),vh.forEach(t),Gi=c(Ar),Hs=s(Ar,"SPAN",{});var Th=a(Hs);Ji=i(Th,"Naming"),Th.forEach(t),Ar.forEach(t),Xa=c(n),$e=s(n,"UL",{});var pn=a($e);ns=s(pn,"LI",{});var eh=a(ns);Yi=i(eh,"All model names use the following format: "),Ds=s(eh,"CODE",{});var Mh=a(Ds);Ki=i(Mh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Mh.forEach(t),eh.forEach(t),Zi=c(pn),qn=s(pn,"LI",{});var Or=a(qn);Xi=i(Or,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),En=s(Or,"A",{href:!0,rel:!0});var bh=a(En);Qi=i(bh,"here"),bh.forEach(t),el=i(Or,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Or.forEach(t),tl=c(pn),at=s(pn,"LI",{});var ys=a(at);nl=i(ys,"Codes formatted like "),Us=s(ys,"CODE",{});var yh=a(Us);ol=i(yh,"es_AR"),yh.forEach(t),sl=i(ys," are usually "),Ws=s(ys,"CODE",{});var xh=a(Ws);al=i(xh,"code_{region}"),xh.forEach(t),rl=i(ys,". That one is Spanish from Argentina."),ys.forEach(t),il=c(pn),Rs=s(pn,"LI",{});var wh=a(Rs);ll=i(wh,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),wh.forEach(t),pn.forEach(t),Qa=c(n),rt=s(n,"H2",{class:!0});var Sr=a(rt);Et=s(Sr,"A",{id:!0,class:!0,href:!0});var $h=a(Et);Vs=s($h,"SPAN",{});var zh=a(Vs);b(Fn.$$.fragment,zh),zh.forEach(t),$h.forEach(t),dl=c(Sr),Bs=s(Sr,"SPAN",{});var jh=a(Bs);cl=i(jh,"Examples"),jh.forEach(t),Sr.forEach(t),er=c(n),Ft=s(n,"UL",{});var Hr=a(Ft);Gs=s(Hr,"LI",{});var qh=a(Gs);pl=i(qh,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),qh.forEach(t),hl=c(Hr),Js=s(Hr,"LI",{});var Eh=a(Js);Pn=s(Eh,"A",{href:!0,rel:!0});var Fh=a(Pn);ul=i(Fh,"Fine-tune on GPU"),Fh.forEach(t),Eh.forEach(t),Hr.forEach(t),tr=c(n),it=s(n,"H2",{class:!0});var Dr=a(it);Pt=s(Dr,"A",{id:!0,class:!0,href:!0});var Ph=a(Pt);Ys=s(Ph,"SPAN",{});var Nh=a(Ys);b(Nn.$$.fragment,Nh),Nh.forEach(t),Ph.forEach(t),ml=c(Dr),Ks=s(Dr,"SPAN",{});var Ch=a(Ks);fl=i(Ch,"Multilingual Models"),Ch.forEach(t),Dr.forEach(t),nr=c(n),ze=s(n,"UL",{});var hn=a(ze);Cn=s(hn,"LI",{});var Ur=a(Cn);gl=i(Ur,"All model names use the following format: "),Zs=s(Ur,"CODE",{});var Lh=a(Zs);_l=i(Lh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Lh.forEach(t),vl=i(Ur,":"),Ur.forEach(t),kl=c(hn),Ln=s(hn,"LI",{});var Wr=a(Ln);Tl=i(Wr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Xs=s(Wr,"CODE",{});var Ih=a(Xs);Ml=i(Ih,"src_text"),Ih.forEach(t),bl=i(Wr,"."),Wr.forEach(t),yl=c(hn),In=s(hn,"LI",{});var Rr=a(In);xl=i(Rr,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),An=s(Rr,"A",{href:!0,rel:!0});var Ah=a(An);wl=i(Ah,"opus-mt-en-roa"),Ah.forEach(t),$l=i(Rr,"."),Rr.forEach(t),zl=c(hn),On=s(hn,"LI",{});var Vr=a(On);jl=i(Vr,"Note that if a model is only multilingual on the source side, like "),Qs=s(Vr,"CODE",{});var Oh=a(Qs);ql=i(Oh,"Helsinki-NLP/opus-mt-roa-en"),Oh.forEach(t),El=i(Vr,`, no language
codes are required.`),Vr.forEach(t),hn.forEach(t),or=c(n),Nt=s(n,"P",{});var Br=a(Nt);Fl=i(Br,"New multi-lingual models from the "),Sn=s(Br,"A",{href:!0,rel:!0});var Sh=a(Sn);Pl=i(Sh,"Tatoeba-Challenge repo"),Sh.forEach(t),Nl=i(Br,`
require 3 character language codes:`),Br.forEach(t),sr=c(n),b(Hn.$$.fragment,n),ar=c(n),os=s(n,"P",{});var Hh=a(os);Cl=i(Hh,"Here is the code to see all available pretrained models on the hub:"),Hh.forEach(t),rr=c(n),b(Dn.$$.fragment,n),ir=c(n),lt=s(n,"H2",{class:!0});var Gr=a(lt);Ct=s(Gr,"A",{id:!0,class:!0,href:!0});var Dh=a(Ct);ea=s(Dh,"SPAN",{});var Uh=a(ea);b(Un.$$.fragment,Uh),Uh.forEach(t),Dh.forEach(t),Ll=c(Gr),ta=s(Gr,"SPAN",{});var Wh=a(ta);Il=i(Wh,"Old Style Multi-Lingual Models"),Wh.forEach(t),Gr.forEach(t),lr=c(n),ss=s(n,"P",{});var Rh=a(ss);Al=i(Rh,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),Rh.forEach(t),dr=c(n),b(Wn.$$.fragment,n),cr=c(n),as=s(n,"P",{});var Vh=a(as);Ol=i(Vh,"Example of translating english to many romance languages, using old-style 2 character language codes"),Vh.forEach(t),pr=c(n),b(Rn.$$.fragment,n),hr=c(n),dt=s(n,"H2",{class:!0});var Jr=a(dt);Lt=s(Jr,"A",{id:!0,class:!0,href:!0});var Bh=a(Lt);na=s(Bh,"SPAN",{});var Gh=a(na);b(Vn.$$.fragment,Gh),Gh.forEach(t),Bh.forEach(t),Sl=c(Jr),oa=s(Jr,"SPAN",{});var Jh=a(oa);Hl=i(Jh,"MarianConfig"),Jh.forEach(t),Jr.forEach(t),ur=c(n),Te=s(n,"DIV",{class:!0});var un=a(Te);b(Bn.$$.fragment,un),Dl=c(un),ct=s(un,"P",{});var xs=a(ct);Ul=i(xs,"This is the configuration class to store the configuration of a "),rs=s(xs,"A",{href:!0});var Yh=a(rs);Wl=i(Yh,"MarianModel"),Yh.forEach(t),Rl=i(xs,`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),Gn=s(xs,"A",{href:!0,rel:!0});var Kh=a(Gn);Vl=i(Kh,"Helsinki-NLP/opus-mt-en-de"),Kh.forEach(t),Bl=i(xs," architecture."),xs.forEach(t),Gl=c(un),pt=s(un,"P",{});var ws=a(pt);Jl=i(ws,"Configuration objects inherit from "),is=s(ws,"A",{href:!0});var Zh=a(is);Yl=i(Zh,"PretrainedConfig"),Zh.forEach(t),Kl=i(ws,` and can be used to control the model outputs. Read the
documentation from `),ls=s(ws,"A",{href:!0});var Xh=a(ls);Zl=i(Xh,"PretrainedConfig"),Xh.forEach(t),Xl=i(ws," for more information."),ws.forEach(t),Ql=c(un),b(It.$$.fragment,un),un.forEach(t),mr=c(n),ht=s(n,"H2",{class:!0});var Yr=a(ht);At=s(Yr,"A",{id:!0,class:!0,href:!0});var Qh=a(At);sa=s(Qh,"SPAN",{});var eu=a(sa);b(Jn.$$.fragment,eu),eu.forEach(t),Qh.forEach(t),ed=c(Yr),aa=s(Yr,"SPAN",{});var tu=a(aa);td=i(tu,"MarianTokenizer"),tu.forEach(t),Yr.forEach(t),fr=c(n),re=s(n,"DIV",{class:!0});var Ve=a(re);b(Yn.$$.fragment,Ve),nd=c(Ve),Kn=s(Ve,"P",{});var Kr=a(Kn);od=i(Kr,"Construct a Marian tokenizer. Based on "),Zn=s(Kr,"A",{href:!0,rel:!0});var nu=a(Zn);sd=i(nu,"SentencePiece"),nu.forEach(t),ad=i(Kr,"."),Kr.forEach(t),rd=c(Ve),Xn=s(Ve,"P",{});var Zr=a(Xn);id=i(Zr,"This tokenizer inherits from "),ds=s(Zr,"A",{href:!0});var ou=a(ds);ld=i(ou,"PreTrainedTokenizer"),ou.forEach(t),dd=i(Zr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Zr.forEach(t),cd=c(Ve),b(Ot.$$.fragment,Ve),pd=c(Ve),St=s(Ve,"DIV",{class:!0});var Xr=a(St);b(Qn.$$.fragment,Xr),hd=c(Xr),ra=s(Xr,"P",{});var su=a(ra);ud=i(su,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),su.forEach(t),Xr.forEach(t),Ve.forEach(t),gr=c(n),ut=s(n,"H2",{class:!0});var Qr=a(ut);Ht=s(Qr,"A",{id:!0,class:!0,href:!0});var au=a(Ht);ia=s(au,"SPAN",{});var ru=a(ia);b(eo.$$.fragment,ru),ru.forEach(t),au.forEach(t),md=c(Qr),la=s(Qr,"SPAN",{});var iu=a(la);fd=i(iu,"MarianModel"),iu.forEach(t),Qr.forEach(t),_r=c(n),Me=s(n,"DIV",{class:!0});var mn=a(Me);b(to.$$.fragment,mn),gd=c(mn),no=s(mn,"P",{});var ei=a(no);_d=i(ei,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=s(ei,"A",{href:!0});var lu=a(cs);vd=i(lu,"PreTrainedModel"),lu.forEach(t),kd=i(ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei.forEach(t),Td=c(mn),oo=s(mn,"P",{});var ti=a(oo);Md=i(ti,"This model is also a PyTorch "),so=s(ti,"A",{href:!0,rel:!0});var du=a(so);bd=i(du,"torch.nn.Module"),du.forEach(t),yd=i(ti,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ti.forEach(t),xd=c(mn),je=s(mn,"DIV",{class:!0});var fn=a(je);b(ao.$$.fragment,fn),wd=c(fn),mt=s(fn,"P",{});var $s=a(mt);$d=i($s,"The "),ps=s($s,"A",{href:!0});var cu=a(ps);zd=i(cu,"MarianModel"),cu.forEach(t),jd=i($s," forward method, overrides the "),da=s($s,"CODE",{});var pu=a(da);qd=i(pu,"__call__"),pu.forEach(t),Ed=i($s," special method."),$s.forEach(t),Fd=c(fn),b(Dt.$$.fragment,fn),Pd=c(fn),b(Ut.$$.fragment,fn),fn.forEach(t),mn.forEach(t),vr=c(n),ft=s(n,"H2",{class:!0});var ni=a(ft);Wt=s(ni,"A",{id:!0,class:!0,href:!0});var hu=a(Wt);ca=s(hu,"SPAN",{});var uu=a(ca);b(ro.$$.fragment,uu),uu.forEach(t),hu.forEach(t),Nd=c(ni),pa=s(ni,"SPAN",{});var mu=a(pa);Cd=i(mu,"MarianMTModel"),mu.forEach(t),ni.forEach(t),kr=c(n),be=s(n,"DIV",{class:!0});var gn=a(be);b(io.$$.fragment,gn),Ld=c(gn),lo=s(gn,"P",{});var oi=a(lo);Id=i(oi,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=s(oi,"A",{href:!0});var fu=a(hs);Ad=i(fu,"PreTrainedModel"),fu.forEach(t),Od=i(oi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oi.forEach(t),Sd=c(gn),co=s(gn,"P",{});var si=a(co);Hd=i(si,"This model is also a PyTorch "),po=s(si,"A",{href:!0,rel:!0});var gu=a(po);Dd=i(gu,"torch.nn.Module"),gu.forEach(t),Ud=i(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),Wd=c(gn),pe=s(gn,"DIV",{class:!0});var Be=a(pe);b(ho.$$.fragment,Be),Rd=c(Be),gt=s(Be,"P",{});var zs=a(gt);Vd=i(zs,"The "),us=s(zs,"A",{href:!0});var _u=a(us);Bd=i(_u,"MarianMTModel"),_u.forEach(t),Gd=i(zs," forward method, overrides the "),ha=s(zs,"CODE",{});var vu=a(ha);Jd=i(vu,"__call__"),vu.forEach(t),Yd=i(zs," special method."),zs.forEach(t),Kd=c(Be),b(Rt.$$.fragment,Be),Zd=c(Be),uo=s(Be,"P",{});var ai=a(uo);Xd=i(ai,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),mo=s(ai,"A",{href:!0,rel:!0});var ku=a(mo);Qd=i(ku,"here"),ku.forEach(t),ec=i(ai,"."),ai.forEach(t),tc=c(Be),b(Vt.$$.fragment,Be),Be.forEach(t),gn.forEach(t),Tr=c(n),_t=s(n,"H2",{class:!0});var ri=a(_t);Bt=s(ri,"A",{id:!0,class:!0,href:!0});var Tu=a(Bt);ua=s(Tu,"SPAN",{});var Mu=a(ua);b(fo.$$.fragment,Mu),Mu.forEach(t),Tu.forEach(t),nc=c(ri),ma=s(ri,"SPAN",{});var bu=a(ma);oc=i(bu,"MarianForCausalLM"),bu.forEach(t),ri.forEach(t),Mr=c(n),vt=s(n,"DIV",{class:!0});var ii=a(vt);b(go.$$.fragment,ii),sc=c(ii),Gt=s(ii,"DIV",{class:!0});var li=a(Gt);b(_o.$$.fragment,li),ac=c(li),b(Jt.$$.fragment,li),li.forEach(t),ii.forEach(t),br=c(n),kt=s(n,"H2",{class:!0});var di=a(kt);Yt=s(di,"A",{id:!0,class:!0,href:!0});var yu=a(Yt);fa=s(yu,"SPAN",{});var xu=a(fa);b(vo.$$.fragment,xu),xu.forEach(t),yu.forEach(t),rc=c(di),ga=s(di,"SPAN",{});var wu=a(ga);ic=i(wu,"TFMarianModel"),wu.forEach(t),di.forEach(t),yr=c(n),ie=s(n,"DIV",{class:!0});var Ge=a(ie);b(ko.$$.fragment,Ge),lc=c(Ge),To=s(Ge,"P",{});var ci=a(To);dc=i(ci,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=s(ci,"A",{href:!0});var $u=a(ms);cc=i($u,"TFPreTrainedModel"),$u.forEach(t),pc=i(ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ci.forEach(t),hc=c(Ge),Mo=s(Ge,"P",{});var pi=a(Mo);uc=i(pi,"This model is also a "),bo=s(pi,"A",{href:!0,rel:!0});var zu=a(bo);mc=i(zu,"tf.keras.Model"),zu.forEach(t),fc=i(pi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pi.forEach(t),gc=c(Ge),b(Kt.$$.fragment,Ge),_c=c(Ge),qe=s(Ge,"DIV",{class:!0});var _n=a(qe);b(yo.$$.fragment,_n),vc=c(_n),Tt=s(_n,"P",{});var js=a(Tt);kc=i(js,"The "),fs=s(js,"A",{href:!0});var ju=a(fs);Tc=i(ju,"TFMarianModel"),ju.forEach(t),Mc=i(js," forward method, overrides the "),_a=s(js,"CODE",{});var qu=a(_a);bc=i(qu,"__call__"),qu.forEach(t),yc=i(js," special method."),js.forEach(t),xc=c(_n),b(Zt.$$.fragment,_n),wc=c(_n),b(Xt.$$.fragment,_n),_n.forEach(t),Ge.forEach(t),xr=c(n),Mt=s(n,"H2",{class:!0});var hi=a(Mt);Qt=s(hi,"A",{id:!0,class:!0,href:!0});var Eu=a(Qt);va=s(Eu,"SPAN",{});var Fu=a(va);b(xo.$$.fragment,Fu),Fu.forEach(t),Eu.forEach(t),$c=c(hi),ka=s(hi,"SPAN",{});var Pu=a(ka);zc=i(Pu,"TFMarianMTModel"),Pu.forEach(t),hi.forEach(t),wr=c(n),le=s(n,"DIV",{class:!0});var Je=a(le);b(wo.$$.fragment,Je),jc=c(Je),$o=s(Je,"P",{});var ui=a($o);qc=i(ui,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),gs=s(ui,"A",{href:!0});var Nu=a(gs);Ec=i(Nu,"TFPreTrainedModel"),Nu.forEach(t),Fc=i(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),Pc=c(Je),zo=s(Je,"P",{});var mi=a(zo);Nc=i(mi,"This model is also a "),jo=s(mi,"A",{href:!0,rel:!0});var Cu=a(jo);Cc=i(Cu,"tf.keras.Model"),Cu.forEach(t),Lc=i(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),Ic=c(Je),b(en.$$.fragment,Je),Ac=c(Je),he=s(Je,"DIV",{class:!0});var Ye=a(he);b(qo.$$.fragment,Ye),Oc=c(Ye),bt=s(Ye,"P",{});var qs=a(bt);Sc=i(qs,"The "),_s=s(qs,"A",{href:!0});var Lu=a(_s);Hc=i(Lu,"TFMarianMTModel"),Lu.forEach(t),Dc=i(qs," forward method, overrides the "),Ta=s(qs,"CODE",{});var Iu=a(Ta);Uc=i(Iu,"__call__"),Iu.forEach(t),Wc=i(qs," special method."),qs.forEach(t),Rc=c(Ye),b(tn.$$.fragment,Ye),Vc=c(Ye),Eo=s(Ye,"P",{});var fi=a(Eo);Bc=i(fi,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),Fo=s(fi,"A",{href:!0,rel:!0});var Au=a(Fo);Gc=i(Au,"here"),Au.forEach(t),Jc=i(fi,"."),fi.forEach(t),Yc=c(Ye),b(nn.$$.fragment,Ye),Ye.forEach(t),Je.forEach(t),$r=c(n),yt=s(n,"H2",{class:!0});var gi=a(yt);on=s(gi,"A",{id:!0,class:!0,href:!0});var Ou=a(on);Ma=s(Ou,"SPAN",{});var Su=a(Ma);b(Po.$$.fragment,Su),Su.forEach(t),Ou.forEach(t),Kc=c(gi),ba=s(gi,"SPAN",{});var Hu=a(ba);Zc=i(Hu,"FlaxMarianModel"),Hu.forEach(t),gi.forEach(t),zr=c(n),R=s(n,"DIV",{class:!0});var Pe=a(R);b(No.$$.fragment,Pe),Xc=c(Pe),Co=s(Pe,"P",{});var _i=a(Co);Qc=i(_i,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),vs=s(_i,"A",{href:!0});var Du=a(vs);ep=i(Du,"FlaxPreTrainedModel"),Du.forEach(t),tp=i(_i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_i.forEach(t),np=c(Pe),Lo=s(Pe,"P",{});var vi=a(Lo);op=i(vi,`This model is also a Flax Linen
`),Io=s(vi,"A",{href:!0,rel:!0});var Uu=a(Io);sp=i(Uu,"flax.nn.Module"),Uu.forEach(t),ap=i(vi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vi.forEach(t),rp=c(Pe),ya=s(Pe,"P",{});var Wu=a(ya);ip=i(Wu,"Finally, this model supports inherent JAX features such as:"),Wu.forEach(t),lp=c(Pe),We=s(Pe,"UL",{});var vn=a(We);xa=s(vn,"LI",{});var Ru=a(xa);Ao=s(Ru,"A",{href:!0,rel:!0});var Vu=a(Ao);dp=i(Vu,"Just-In-Time (JIT) compilation"),Vu.forEach(t),Ru.forEach(t),cp=c(vn),wa=s(vn,"LI",{});var Bu=a(wa);Oo=s(Bu,"A",{href:!0,rel:!0});var Gu=a(Oo);pp=i(Gu,"Automatic Differentiation"),Gu.forEach(t),Bu.forEach(t),hp=c(vn),$a=s(vn,"LI",{});var Ju=a($a);So=s(Ju,"A",{href:!0,rel:!0});var Yu=a(So);up=i(Yu,"Vectorization"),Yu.forEach(t),Ju.forEach(t),mp=c(vn),za=s(vn,"LI",{});var Ku=a(za);Ho=s(Ku,"A",{href:!0,rel:!0});var Zu=a(Ho);fp=i(Zu,"Parallelization"),Zu.forEach(t),Ku.forEach(t),vn.forEach(t),gp=c(Pe),Ee=s(Pe,"DIV",{class:!0});var kn=a(Ee);b(Do.$$.fragment,kn),_p=c(kn),xt=s(kn,"P",{});var Es=a(xt);vp=i(Es,"The "),ja=s(Es,"CODE",{});var Xu=a(ja);kp=i(Xu,"FlaxMarianPreTrainedModel"),Xu.forEach(t),Tp=i(Es," forward method, overrides the "),qa=s(Es,"CODE",{});var Qu=a(qa);Mp=i(Qu,"__call__"),Qu.forEach(t),bp=i(Es," special method."),Es.forEach(t),yp=c(kn),b(sn.$$.fragment,kn),xp=c(kn),b(an.$$.fragment,kn),kn.forEach(t),Pe.forEach(t),jr=c(n),wt=s(n,"H2",{class:!0});var ki=a(wt);rn=s(ki,"A",{id:!0,class:!0,href:!0});var em=a(rn);Ea=s(em,"SPAN",{});var tm=a(Ea);b(Uo.$$.fragment,tm),tm.forEach(t),em.forEach(t),wp=c(ki),Fa=s(ki,"SPAN",{});var nm=a(Fa);$p=i(nm,"FlaxMarianMTModel"),nm.forEach(t),ki.forEach(t),qr=c(n),V=s(n,"DIV",{class:!0});var Ne=a(V);b(Wo.$$.fragment,Ne),zp=c(Ne),Ro=s(Ne,"P",{});var Ti=a(Ro);jp=i(Ti,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),ks=s(Ti,"A",{href:!0});var om=a(ks);qp=i(om,"FlaxPreTrainedModel"),om.forEach(t),Ep=i(Ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ti.forEach(t),Fp=c(Ne),Vo=s(Ne,"P",{});var Mi=a(Vo);Pp=i(Mi,`This model is also a Flax Linen
`),Bo=s(Mi,"A",{href:!0,rel:!0});var sm=a(Bo);Np=i(sm,"flax.nn.Module"),sm.forEach(t),Cp=i(Mi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mi.forEach(t),Lp=c(Ne),Pa=s(Ne,"P",{});var am=a(Pa);Ip=i(am,"Finally, this model supports inherent JAX features such as:"),am.forEach(t),Ap=c(Ne),Re=s(Ne,"UL",{});var Tn=a(Re);Na=s(Tn,"LI",{});var rm=a(Na);Go=s(rm,"A",{href:!0,rel:!0});var im=a(Go);Op=i(im,"Just-In-Time (JIT) compilation"),im.forEach(t),rm.forEach(t),Sp=c(Tn),Ca=s(Tn,"LI",{});var lm=a(Ca);Jo=s(lm,"A",{href:!0,rel:!0});var dm=a(Jo);Hp=i(dm,"Automatic Differentiation"),dm.forEach(t),lm.forEach(t),Dp=c(Tn),La=s(Tn,"LI",{});var cm=a(La);Yo=s(cm,"A",{href:!0,rel:!0});var pm=a(Yo);Up=i(pm,"Vectorization"),pm.forEach(t),cm.forEach(t),Wp=c(Tn),Ia=s(Tn,"LI",{});var hm=a(Ia);Ko=s(hm,"A",{href:!0,rel:!0});var um=a(Ko);Rp=i(um,"Parallelization"),um.forEach(t),hm.forEach(t),Tn.forEach(t),Vp=c(Ne),Fe=s(Ne,"DIV",{class:!0});var Mn=a(Fe);b(Zo.$$.fragment,Mn),Bp=c(Mn),$t=s(Mn,"P",{});var Fs=a($t);Gp=i(Fs,"The "),Aa=s(Fs,"CODE",{});var mm=a(Aa);Jp=i(mm,"FlaxMarianPreTrainedModel"),mm.forEach(t),Yp=i(Fs," forward method, overrides the "),Oa=s(Fs,"CODE",{});var fm=a(Oa);Kp=i(fm,"__call__"),fm.forEach(t),Zp=i(Fs," special method."),Fs.forEach(t),Xp=c(Mn),b(ln.$$.fragment,Mn),Qp=c(Mn),b(dn.$$.fragment,Mn),Mn.forEach(t),Ne.forEach(t),this.h()},h(){p(h,"name","hf:doc:metadata"),p(h,"content",JSON.stringify(Sm)),p(u,"id","marianmt"),p(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(u,"href","#marianmt"),p(_,"class","relative group"),p(K,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),p(K,"rel","nofollow"),p(F,"id","implementation-notes"),p(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(F,"href","#implementation-notes"),p(L,"class","relative group"),p(oe,"href","https://huggingface.co/Helsinki-NLP"),p(oe,"rel","nofollow"),p(q,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),p(q,"rel","nofollow"),p(ve,"href","https://marian-nmt.github.io/"),p(ve,"rel","nofollow"),p(ts,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(zn,"href","https://huggingface.co/sshleifer"),p(zn,"rel","nofollow"),p(qt,"id","naming"),p(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qt,"href","#naming"),p(st,"class","relative group"),p(En,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),p(En,"rel","nofollow"),p(Et,"id","examples"),p(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Et,"href","#examples"),p(rt,"class","relative group"),p(Pn,"href","https://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh"),p(Pn,"rel","nofollow"),p(Pt,"id","multilingual-models"),p(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pt,"href","#multilingual-models"),p(it,"class","relative group"),p(An,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),p(An,"rel","nofollow"),p(Sn,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),p(Sn,"rel","nofollow"),p(Ct,"id","old-style-multilingual-models"),p(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ct,"href","#old-style-multilingual-models"),p(lt,"class","relative group"),p(Lt,"id","transformers.MarianConfig"),p(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Lt,"href","#transformers.MarianConfig"),p(dt,"class","relative group"),p(rs,"href","/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianModel"),p(Gn,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),p(Gn,"rel","nofollow"),p(is,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(ls,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(At,"id","transformers.MarianTokenizer"),p(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(At,"href","#transformers.MarianTokenizer"),p(ht,"class","relative group"),p(Zn,"href","https://github.com/google/sentencepiece"),p(Zn,"rel","nofollow"),p(ds,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ht,"id","transformers.MarianModel"),p(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ht,"href","#transformers.MarianModel"),p(ut,"class","relative group"),p(cs,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),p(so,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(so,"rel","nofollow"),p(ps,"href","/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianModel"),p(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Wt,"id","transformers.MarianMTModel"),p(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Wt,"href","#transformers.MarianMTModel"),p(ft,"class","relative group"),p(hs,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),p(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(po,"rel","nofollow"),p(us,"href","/docs/transformers/v4.21.1/en/model_doc/marian#transformers.MarianMTModel"),p(mo,"href","https://huggingface.co/models?search=Helsinki-NLP"),p(mo,"rel","nofollow"),p(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Bt,"id","transformers.MarianForCausalLM"),p(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Bt,"href","#transformers.MarianForCausalLM"),p(_t,"class","relative group"),p(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Yt,"id","transformers.TFMarianModel"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.TFMarianModel"),p(kt,"class","relative group"),p(ms,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),p(bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(bo,"rel","nofollow"),p(fs,"href","/docs/transformers/v4.21.1/en/model_doc/marian#transformers.TFMarianModel"),p(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Qt,"id","transformers.TFMarianMTModel"),p(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qt,"href","#transformers.TFMarianMTModel"),p(Mt,"class","relative group"),p(gs,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),p(jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(jo,"rel","nofollow"),p(_s,"href","/docs/transformers/v4.21.1/en/model_doc/marian#transformers.TFMarianMTModel"),p(Fo,"href","https://huggingface.co/models?search=Helsinki-NLP"),p(Fo,"rel","nofollow"),p(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(on,"id","transformers.FlaxMarianModel"),p(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(on,"href","#transformers.FlaxMarianModel"),p(yt,"class","relative group"),p(vs,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(Io,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(Io,"rel","nofollow"),p(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Ao,"rel","nofollow"),p(Oo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Oo,"rel","nofollow"),p(So,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(So,"rel","nofollow"),p(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Ho,"rel","nofollow"),p(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(rn,"id","transformers.FlaxMarianMTModel"),p(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rn,"href","#transformers.FlaxMarianMTModel"),p(wt,"class","relative group"),p(ks,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(Bo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(Bo,"rel","nofollow"),p(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Go,"rel","nofollow"),p(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Jo,"rel","nofollow"),p(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Yo,"rel","nofollow"),p(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Ko,"rel","nofollow"),p(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){e(document.head,h),g(n,k,f),g(n,_,f),e(_,u),e(u,v),y(l,v,null),e(_,m),e(_,j),e(j,Ce),g(n,ce,f),g(n,E,f),e(E,ue),e(ue,Y),e(E,Le),e(E,K),e(K,Z),e(E,Ie),g(n,xe,f),g(n,G,f),e(G,O),g(n,we,f),g(n,L,f),e(L,F),e(F,N),y(X,N,null),e(L,Q),e(L,me),e(me,Ae),g(n,J,f),g(n,P,f),e(P,fe),e(fe,C),e(C,Oe),e(P,ee),e(P,ge),e(ge,te),e(te,ne),e(te,oe),e(oe,Se),e(te,S),e(P,He),e(P,H),e(H,D),e(D,T),e(D,q),e(q,_e),e(D,Ke),e(D,ve),e(ve,U),e(D,Ze),e(P,Xe),e(P,De),e(De,I),e(I,se),e(P,Qe),e(P,Ue),e(Ue,W),e(W,et),e(P,tt),e(P,ae),e(ae,ke),e(ke,bi),e(ke,ts),e(ts,yi),e(ke,xi),e(ae,wi),e(ae,nt),e(nt,yn),e(yn,$i),e(yn,Ps),e(Ps,zi),e(yn,ji),e(nt,qi),e(nt,xn),e(xn,Ei),e(xn,Ns),e(Ns,Fi),e(xn,Pi),e(nt,Ni),e(nt,ot),e(ot,Ci),e(ot,Cs),e(Cs,Li),e(ot,Ii),e(ot,Ls),e(Ls,Ai),e(ot,Oi),e(P,Si),e(P,Is),e(Is,wn),e(wn,Hi),e(wn,As),e(As,Di),e(wn,Ui),e(P,Wi),e(P,Os),e(Os,$n),e($n,Ri),e($n,zn),e(zn,Vi),e($n,Bi),g(n,Za,f),g(n,st,f),e(st,qt),e(qt,Ss),y(jn,Ss,null),e(st,Gi),e(st,Hs),e(Hs,Ji),g(n,Xa,f),g(n,$e,f),e($e,ns),e(ns,Yi),e(ns,Ds),e(Ds,Ki),e($e,Zi),e($e,qn),e(qn,Xi),e(qn,En),e(En,Qi),e(qn,el),e($e,tl),e($e,at),e(at,nl),e(at,Us),e(Us,ol),e(at,sl),e(at,Ws),e(Ws,al),e(at,rl),e($e,il),e($e,Rs),e(Rs,ll),g(n,Qa,f),g(n,rt,f),e(rt,Et),e(Et,Vs),y(Fn,Vs,null),e(rt,dl),e(rt,Bs),e(Bs,cl),g(n,er,f),g(n,Ft,f),e(Ft,Gs),e(Gs,pl),e(Ft,hl),e(Ft,Js),e(Js,Pn),e(Pn,ul),g(n,tr,f),g(n,it,f),e(it,Pt),e(Pt,Ys),y(Nn,Ys,null),e(it,ml),e(it,Ks),e(Ks,fl),g(n,nr,f),g(n,ze,f),e(ze,Cn),e(Cn,gl),e(Cn,Zs),e(Zs,_l),e(Cn,vl),e(ze,kl),e(ze,Ln),e(Ln,Tl),e(Ln,Xs),e(Xs,Ml),e(Ln,bl),e(ze,yl),e(ze,In),e(In,xl),e(In,An),e(An,wl),e(In,$l),e(ze,zl),e(ze,On),e(On,jl),e(On,Qs),e(Qs,ql),e(On,El),g(n,or,f),g(n,Nt,f),e(Nt,Fl),e(Nt,Sn),e(Sn,Pl),e(Nt,Nl),g(n,sr,f),y(Hn,n,f),g(n,ar,f),g(n,os,f),e(os,Cl),g(n,rr,f),y(Dn,n,f),g(n,ir,f),g(n,lt,f),e(lt,Ct),e(Ct,ea),y(Un,ea,null),e(lt,Ll),e(lt,ta),e(ta,Il),g(n,lr,f),g(n,ss,f),e(ss,Al),g(n,dr,f),y(Wn,n,f),g(n,cr,f),g(n,as,f),e(as,Ol),g(n,pr,f),y(Rn,n,f),g(n,hr,f),g(n,dt,f),e(dt,Lt),e(Lt,na),y(Vn,na,null),e(dt,Sl),e(dt,oa),e(oa,Hl),g(n,ur,f),g(n,Te,f),y(Bn,Te,null),e(Te,Dl),e(Te,ct),e(ct,Ul),e(ct,rs),e(rs,Wl),e(ct,Rl),e(ct,Gn),e(Gn,Vl),e(ct,Bl),e(Te,Gl),e(Te,pt),e(pt,Jl),e(pt,is),e(is,Yl),e(pt,Kl),e(pt,ls),e(ls,Zl),e(pt,Xl),e(Te,Ql),y(It,Te,null),g(n,mr,f),g(n,ht,f),e(ht,At),e(At,sa),y(Jn,sa,null),e(ht,ed),e(ht,aa),e(aa,td),g(n,fr,f),g(n,re,f),y(Yn,re,null),e(re,nd),e(re,Kn),e(Kn,od),e(Kn,Zn),e(Zn,sd),e(Kn,ad),e(re,rd),e(re,Xn),e(Xn,id),e(Xn,ds),e(ds,ld),e(Xn,dd),e(re,cd),y(Ot,re,null),e(re,pd),e(re,St),y(Qn,St,null),e(St,hd),e(St,ra),e(ra,ud),g(n,gr,f),g(n,ut,f),e(ut,Ht),e(Ht,ia),y(eo,ia,null),e(ut,md),e(ut,la),e(la,fd),g(n,_r,f),g(n,Me,f),y(to,Me,null),e(Me,gd),e(Me,no),e(no,_d),e(no,cs),e(cs,vd),e(no,kd),e(Me,Td),e(Me,oo),e(oo,Md),e(oo,so),e(so,bd),e(oo,yd),e(Me,xd),e(Me,je),y(ao,je,null),e(je,wd),e(je,mt),e(mt,$d),e(mt,ps),e(ps,zd),e(mt,jd),e(mt,da),e(da,qd),e(mt,Ed),e(je,Fd),y(Dt,je,null),e(je,Pd),y(Ut,je,null),g(n,vr,f),g(n,ft,f),e(ft,Wt),e(Wt,ca),y(ro,ca,null),e(ft,Nd),e(ft,pa),e(pa,Cd),g(n,kr,f),g(n,be,f),y(io,be,null),e(be,Ld),e(be,lo),e(lo,Id),e(lo,hs),e(hs,Ad),e(lo,Od),e(be,Sd),e(be,co),e(co,Hd),e(co,po),e(po,Dd),e(co,Ud),e(be,Wd),e(be,pe),y(ho,pe,null),e(pe,Rd),e(pe,gt),e(gt,Vd),e(gt,us),e(us,Bd),e(gt,Gd),e(gt,ha),e(ha,Jd),e(gt,Yd),e(pe,Kd),y(Rt,pe,null),e(pe,Zd),e(pe,uo),e(uo,Xd),e(uo,mo),e(mo,Qd),e(uo,ec),e(pe,tc),y(Vt,pe,null),g(n,Tr,f),g(n,_t,f),e(_t,Bt),e(Bt,ua),y(fo,ua,null),e(_t,nc),e(_t,ma),e(ma,oc),g(n,Mr,f),g(n,vt,f),y(go,vt,null),e(vt,sc),e(vt,Gt),y(_o,Gt,null),e(Gt,ac),y(Jt,Gt,null),g(n,br,f),g(n,kt,f),e(kt,Yt),e(Yt,fa),y(vo,fa,null),e(kt,rc),e(kt,ga),e(ga,ic),g(n,yr,f),g(n,ie,f),y(ko,ie,null),e(ie,lc),e(ie,To),e(To,dc),e(To,ms),e(ms,cc),e(To,pc),e(ie,hc),e(ie,Mo),e(Mo,uc),e(Mo,bo),e(bo,mc),e(Mo,fc),e(ie,gc),y(Kt,ie,null),e(ie,_c),e(ie,qe),y(yo,qe,null),e(qe,vc),e(qe,Tt),e(Tt,kc),e(Tt,fs),e(fs,Tc),e(Tt,Mc),e(Tt,_a),e(_a,bc),e(Tt,yc),e(qe,xc),y(Zt,qe,null),e(qe,wc),y(Xt,qe,null),g(n,xr,f),g(n,Mt,f),e(Mt,Qt),e(Qt,va),y(xo,va,null),e(Mt,$c),e(Mt,ka),e(ka,zc),g(n,wr,f),g(n,le,f),y(wo,le,null),e(le,jc),e(le,$o),e($o,qc),e($o,gs),e(gs,Ec),e($o,Fc),e(le,Pc),e(le,zo),e(zo,Nc),e(zo,jo),e(jo,Cc),e(zo,Lc),e(le,Ic),y(en,le,null),e(le,Ac),e(le,he),y(qo,he,null),e(he,Oc),e(he,bt),e(bt,Sc),e(bt,_s),e(_s,Hc),e(bt,Dc),e(bt,Ta),e(Ta,Uc),e(bt,Wc),e(he,Rc),y(tn,he,null),e(he,Vc),e(he,Eo),e(Eo,Bc),e(Eo,Fo),e(Fo,Gc),e(Eo,Jc),e(he,Yc),y(nn,he,null),g(n,$r,f),g(n,yt,f),e(yt,on),e(on,Ma),y(Po,Ma,null),e(yt,Kc),e(yt,ba),e(ba,Zc),g(n,zr,f),g(n,R,f),y(No,R,null),e(R,Xc),e(R,Co),e(Co,Qc),e(Co,vs),e(vs,ep),e(Co,tp),e(R,np),e(R,Lo),e(Lo,op),e(Lo,Io),e(Io,sp),e(Lo,ap),e(R,rp),e(R,ya),e(ya,ip),e(R,lp),e(R,We),e(We,xa),e(xa,Ao),e(Ao,dp),e(We,cp),e(We,wa),e(wa,Oo),e(Oo,pp),e(We,hp),e(We,$a),e($a,So),e(So,up),e(We,mp),e(We,za),e(za,Ho),e(Ho,fp),e(R,gp),e(R,Ee),y(Do,Ee,null),e(Ee,_p),e(Ee,xt),e(xt,vp),e(xt,ja),e(ja,kp),e(xt,Tp),e(xt,qa),e(qa,Mp),e(xt,bp),e(Ee,yp),y(sn,Ee,null),e(Ee,xp),y(an,Ee,null),g(n,jr,f),g(n,wt,f),e(wt,rn),e(rn,Ea),y(Uo,Ea,null),e(wt,wp),e(wt,Fa),e(Fa,$p),g(n,qr,f),g(n,V,f),y(Wo,V,null),e(V,zp),e(V,Ro),e(Ro,jp),e(Ro,ks),e(ks,qp),e(Ro,Ep),e(V,Fp),e(V,Vo),e(Vo,Pp),e(Vo,Bo),e(Bo,Np),e(Vo,Cp),e(V,Lp),e(V,Pa),e(Pa,Ip),e(V,Ap),e(V,Re),e(Re,Na),e(Na,Go),e(Go,Op),e(Re,Sp),e(Re,Ca),e(Ca,Jo),e(Jo,Hp),e(Re,Dp),e(Re,La),e(La,Yo),e(Yo,Up),e(Re,Wp),e(Re,Ia),e(Ia,Ko),e(Ko,Rp),e(V,Vp),e(V,Fe),y(Zo,Fe,null),e(Fe,Bp),e(Fe,$t),e($t,Gp),e($t,Aa),e(Aa,Jp),e($t,Yp),e($t,Oa),e(Oa,Kp),e($t,Zp),e(Fe,Xp),y(ln,Fe,null),e(Fe,Qp),y(dn,Fe,null),Er=!0},p(n,[f]){const Xo={};f&2&&(Xo.$$scope={dirty:f,ctx:n}),It.$set(Xo);const Sa={};f&2&&(Sa.$$scope={dirty:f,ctx:n}),Ot.$set(Sa);const Ha={};f&2&&(Ha.$$scope={dirty:f,ctx:n}),Dt.$set(Ha);const Da={};f&2&&(Da.$$scope={dirty:f,ctx:n}),Ut.$set(Da);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:n}),Rt.$set(cn);const Ua={};f&2&&(Ua.$$scope={dirty:f,ctx:n}),Vt.$set(Ua);const Wa={};f&2&&(Wa.$$scope={dirty:f,ctx:n}),Jt.$set(Wa);const Ra={};f&2&&(Ra.$$scope={dirty:f,ctx:n}),Kt.$set(Ra);const Qo={};f&2&&(Qo.$$scope={dirty:f,ctx:n}),Zt.$set(Qo);const Va={};f&2&&(Va.$$scope={dirty:f,ctx:n}),Xt.$set(Va);const Ba={};f&2&&(Ba.$$scope={dirty:f,ctx:n}),en.$set(Ba);const Ga={};f&2&&(Ga.$$scope={dirty:f,ctx:n}),tn.$set(Ga);const A={};f&2&&(A.$$scope={dirty:f,ctx:n}),nn.$set(A);const Ja={};f&2&&(Ja.$$scope={dirty:f,ctx:n}),sn.$set(Ja);const Ya={};f&2&&(Ya.$$scope={dirty:f,ctx:n}),an.$set(Ya);const Ka={};f&2&&(Ka.$$scope={dirty:f,ctx:n}),ln.$set(Ka);const es={};f&2&&(es.$$scope={dirty:f,ctx:n}),dn.$set(es)},i(n){Er||(x(l.$$.fragment,n),x(X.$$.fragment,n),x(jn.$$.fragment,n),x(Fn.$$.fragment,n),x(Nn.$$.fragment,n),x(Hn.$$.fragment,n),x(Dn.$$.fragment,n),x(Un.$$.fragment,n),x(Wn.$$.fragment,n),x(Rn.$$.fragment,n),x(Vn.$$.fragment,n),x(Bn.$$.fragment,n),x(It.$$.fragment,n),x(Jn.$$.fragment,n),x(Yn.$$.fragment,n),x(Ot.$$.fragment,n),x(Qn.$$.fragment,n),x(eo.$$.fragment,n),x(to.$$.fragment,n),x(ao.$$.fragment,n),x(Dt.$$.fragment,n),x(Ut.$$.fragment,n),x(ro.$$.fragment,n),x(io.$$.fragment,n),x(ho.$$.fragment,n),x(Rt.$$.fragment,n),x(Vt.$$.fragment,n),x(fo.$$.fragment,n),x(go.$$.fragment,n),x(_o.$$.fragment,n),x(Jt.$$.fragment,n),x(vo.$$.fragment,n),x(ko.$$.fragment,n),x(Kt.$$.fragment,n),x(yo.$$.fragment,n),x(Zt.$$.fragment,n),x(Xt.$$.fragment,n),x(xo.$$.fragment,n),x(wo.$$.fragment,n),x(en.$$.fragment,n),x(qo.$$.fragment,n),x(tn.$$.fragment,n),x(nn.$$.fragment,n),x(Po.$$.fragment,n),x(No.$$.fragment,n),x(Do.$$.fragment,n),x(sn.$$.fragment,n),x(an.$$.fragment,n),x(Uo.$$.fragment,n),x(Wo.$$.fragment,n),x(Zo.$$.fragment,n),x(ln.$$.fragment,n),x(dn.$$.fragment,n),Er=!0)},o(n){w(l.$$.fragment,n),w(X.$$.fragment,n),w(jn.$$.fragment,n),w(Fn.$$.fragment,n),w(Nn.$$.fragment,n),w(Hn.$$.fragment,n),w(Dn.$$.fragment,n),w(Un.$$.fragment,n),w(Wn.$$.fragment,n),w(Rn.$$.fragment,n),w(Vn.$$.fragment,n),w(Bn.$$.fragment,n),w(It.$$.fragment,n),w(Jn.$$.fragment,n),w(Yn.$$.fragment,n),w(Ot.$$.fragment,n),w(Qn.$$.fragment,n),w(eo.$$.fragment,n),w(to.$$.fragment,n),w(ao.$$.fragment,n),w(Dt.$$.fragment,n),w(Ut.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(ho.$$.fragment,n),w(Rt.$$.fragment,n),w(Vt.$$.fragment,n),w(fo.$$.fragment,n),w(go.$$.fragment,n),w(_o.$$.fragment,n),w(Jt.$$.fragment,n),w(vo.$$.fragment,n),w(ko.$$.fragment,n),w(Kt.$$.fragment,n),w(yo.$$.fragment,n),w(Zt.$$.fragment,n),w(Xt.$$.fragment,n),w(xo.$$.fragment,n),w(wo.$$.fragment,n),w(en.$$.fragment,n),w(qo.$$.fragment,n),w(tn.$$.fragment,n),w(nn.$$.fragment,n),w(Po.$$.fragment,n),w(No.$$.fragment,n),w(Do.$$.fragment,n),w(sn.$$.fragment,n),w(an.$$.fragment,n),w(Uo.$$.fragment,n),w(Wo.$$.fragment,n),w(Zo.$$.fragment,n),w(ln.$$.fragment,n),w(dn.$$.fragment,n),Er=!1},d(n){t(h),n&&t(k),n&&t(_),$(l),n&&t(ce),n&&t(E),n&&t(xe),n&&t(G),n&&t(we),n&&t(L),$(X),n&&t(J),n&&t(P),n&&t(Za),n&&t(st),$(jn),n&&t(Xa),n&&t($e),n&&t(Qa),n&&t(rt),$(Fn),n&&t(er),n&&t(Ft),n&&t(tr),n&&t(it),$(Nn),n&&t(nr),n&&t(ze),n&&t(or),n&&t(Nt),n&&t(sr),$(Hn,n),n&&t(ar),n&&t(os),n&&t(rr),$(Dn,n),n&&t(ir),n&&t(lt),$(Un),n&&t(lr),n&&t(ss),n&&t(dr),$(Wn,n),n&&t(cr),n&&t(as),n&&t(pr),$(Rn,n),n&&t(hr),n&&t(dt),$(Vn),n&&t(ur),n&&t(Te),$(Bn),$(It),n&&t(mr),n&&t(ht),$(Jn),n&&t(fr),n&&t(re),$(Yn),$(Ot),$(Qn),n&&t(gr),n&&t(ut),$(eo),n&&t(_r),n&&t(Me),$(to),$(ao),$(Dt),$(Ut),n&&t(vr),n&&t(ft),$(ro),n&&t(kr),n&&t(be),$(io),$(ho),$(Rt),$(Vt),n&&t(Tr),n&&t(_t),$(fo),n&&t(Mr),n&&t(vt),$(go),$(_o),$(Jt),n&&t(br),n&&t(kt),$(vo),n&&t(yr),n&&t(ie),$(ko),$(Kt),$(yo),$(Zt),$(Xt),n&&t(xr),n&&t(Mt),$(xo),n&&t(wr),n&&t(le),$(wo),$(en),$(qo),$(tn),$(nn),n&&t($r),n&&t(yt),$(Po),n&&t(zr),n&&t(R),$(No),$(Do),$(sn),$(an),n&&t(jr),n&&t(wt),$(Uo),n&&t(qr),n&&t(V),$(Wo),$(Zo),$(ln),$(dn)}}}const Sm={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function Hm(z){return Tm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gm extends gm{constructor(h){super();_m(this,h,Hm,Om,vm,{})}}export{Gm as default,Sm as metadata};
