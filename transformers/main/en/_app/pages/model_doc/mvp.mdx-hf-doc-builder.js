import{S as mp,i as up,s as fp,e as n,k as p,w as k,t as r,M as gp,c as s,d as o,m as h,a,x as b,h as i,b as m,G as e,g as v,y as w,q as y,o as T,B as M,v as _p,L as ee}from"../../chunks/vendor-hf-doc-builder.js";import{T as Jo}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as B}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as K}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function vp(z){let d,g,l,f,$;return f=new B({props:{code:`from transformers import MvpModel, MvpConfig

# Initializing a MVP RUCAIBox/mvp style configuration
configuration = MvpConfig()

# Initializing a model from the RUCAIBox/mvp style configuration
model = MvpModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpModel, MvpConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MVP RUCAIBox/mvp style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MvpConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the RUCAIBox/mvp style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Example:"),l=p(),k(f.$$.fragment)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"Example:"),_.forEach(o),l=h(c),b(f.$$.fragment,c)},m(c,_){v(c,d,_),e(d,g),v(c,l,_),w(f,c,_),$=!0},p:ee,i(c){$||(y(f.$$.fragment,c),$=!0)},o(c){T(f.$$.fragment,c),$=!1},d(c){c&&o(d),c&&o(l),M(f,c)}}}function kp(z){let d,g,l,f,$;return f=new B({props:{code:`from transformers import MvpTokenizer
tokenizer = MvpTokenizer.from_pretrained("RUCAIBox/mvp")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),l=p(),k(f.$$.fragment)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),_.forEach(o),l=h(c),b(f.$$.fragment,c)},m(c,_){v(c,d,_),e(d,g),v(c,l,_),w(f,c,_),$=!0},p:ee,i(c){$||(y(f.$$.fragment,c),$=!0)},o(c){T(f.$$.fragment,c),$=!1},d(c){c&&o(d),c&&o(l),M(f,c)}}}function bp(z){let d,g,l,f,$;return{c(){d=n("p"),g=r("When used with "),l=n("code"),f=r("is_split_into_words=True"),$=r(", this tokenizer will add a space before each word (even the first one).")},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"When used with "),l=s(_,"CODE",{});var q=a(l);f=i(q,"is_split_into_words=True"),q.forEach(o),$=i(_,", this tokenizer will add a space before each word (even the first one)."),_.forEach(o)},m(c,_){v(c,d,_),e(d,g),e(d,l),e(l,f),e(d,$)},d(c){c&&o(d)}}}function wp(z){let d,g,l,f,$;return f=new B({props:{code:`from transformers import MvpTokenizerFast
tokenizer = MvpTokenizerFast.from_pretrained("RUCAIBox/mvp")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = MvpTokenizerFast.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),l=p(),k(f.$$.fragment)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),_.forEach(o),l=h(c),b(f.$$.fragment,c)},m(c,_){v(c,d,_),e(d,g),v(c,l,_),w(f,c,_),$=!0},p:ee,i(c){$||(y(f.$$.fragment,c),$=!0)},o(c){T(f.$$.fragment,c),$=!1},d(c){c&&o(d),c&&o(l),M(f,c)}}}function yp(z){let d,g,l,f,$,c,_,q;return{c(){d=n("p"),g=r("When used with "),l=n("code"),f=r("is_split_into_words=True"),$=r(", this tokenizer needs to be instantiated with "),c=n("code"),_=r("add_prefix_space=True"),q=r(".")},l(re){d=s(re,"P",{});var U=a(d);g=i(U,"When used with "),l=s(U,"CODE",{});var W=a(l);f=i(W,"is_split_into_words=True"),W.forEach(o),$=i(U,", this tokenizer needs to be instantiated with "),c=s(U,"CODE",{});var Y=a(c);_=i(Y,"add_prefix_space=True"),Y.forEach(o),q=i(U,"."),U.forEach(o)},m(re,U){v(re,d,U),e(d,g),e(d,l),e(l,f),e(d,$),e(d,c),e(c,_),e(d,q)},d(re){re&&o(d)}}}function Tp(z){let d,g,l,f,$;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=n("code"),f=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=s(_,"CODE",{});var q=a(l);f=i(q,"Module"),q.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(c,_){v(c,d,_),e(d,g),e(d,l),e(l,f),e(d,$)},d(c){c&&o(d)}}}function Mp(z){let d,g,l,f,$;return f=new B({props:{code:`from transformers import MvpTokenizer, MvpModel
import torch

tokenizer = MvpTokenizer.from_pretrained("RUCAIBox/mvp")
model = MvpModel.from_pretrained("RUCAIBox/mvp")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer, MvpModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpModel.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),l=p(),k(f.$$.fragment)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"Example:"),_.forEach(o),l=h(c),b(f.$$.fragment,c)},m(c,_){v(c,d,_),e(d,g),v(c,l,_),w(f,c,_),$=!0},p:ee,i(c){$||(y(f.$$.fragment,c),$=!0)},o(c){T(f.$$.fragment,c),$=!1},d(c){c&&o(d),c&&o(l),M(f,c)}}}function $p(z){let d,g,l,f,$;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=n("code"),f=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=s(_,"CODE",{});var q=a(l);f=i(q,"Module"),q.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(c,_){v(c,d,_),e(d,g),e(d,l),e(l,f),e(d,$)},d(c){c&&o(d)}}}function zp(z){let d,g;return d=new B({props:{code:`import torch
from transformers import MvpTokenizer, MvpForConditionalGeneration

tokenizer = MvpTokenizer.from_pretrained("RUCAIBox/mvp")
model = MvpForConditionalGeneration.from_pretrained("RUCAIBox/mvp")

inputs = tokenizer(
    "Summarize: You may want to stick it to your boss and leave your job, but don't do it if these are your reasons.",
    return_tensors="pt",
)
labels = tokenizer("Bad Reasons To Quit Your Job", return_tensors="pt")["input_ids"]

loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer, MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Summarize: You may want to stick it to your boss and leave your job, but don&#x27;t do it if these are your reasons.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Bad Reasons To Quit Your Job&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(l){b(d.$$.fragment,l)},m(l,f){w(d,l,f),g=!0},p:ee,i(l){g||(y(d.$$.fragment,l),g=!0)},o(l){T(d.$$.fragment,l),g=!1},d(l){M(d,l)}}}function xp(z){let d,g;return d=new B({props:{code:`with torch.no_grad():
    generated_ids = model.generate(**inputs)

generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    generated_ids = model.generate(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){k(d.$$.fragment)},l(l){b(d.$$.fragment,l)},m(l,f){w(d,l,f),g=!0},p:ee,i(l){g||(y(d.$$.fragment,l),g=!0)},o(l){T(d.$$.fragment,l),g=!1},d(l){M(d,l)}}}function qp(z){let d,g,l,f,$;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=n("code"),f=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=s(_,"CODE",{});var q=a(l);f=i(q,"Module"),q.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(c,_){v(c,d,_),e(d,g),e(d,l),e(l,f),e(d,$)},d(c){c&&o(d)}}}function Cp(z){let d,g;return d=new B({props:{code:`import torch
from transformers import MvpTokenizer, MvpForSequenceClassification

num_labels = 2  # for example, this is a binary classification task
tokenizer = MvpTokenizer.from_pretrained("RUCAIBox/mvp")
model = MvpForSequenceClassification.from_pretrained("RUCAIBox/mvp", num_labels=num_labels)

inputs = tokenizer("Classify: Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor(1)  # the real label for inputs

loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer, MvpForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-number">2</span>  <span class="hljs-comment"># for example, this is a binary classification task</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Classify: Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)  <span class="hljs-comment"># the real label for inputs</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(l){b(d.$$.fragment,l)},m(l,f){w(d,l,f),g=!0},p:ee,i(l){g||(y(d.$$.fragment,l),g=!0)},o(l){T(d.$$.fragment,l),g=!1},d(l){M(d,l)}}}function Fp(z){let d,g;return d=new B({props:{code:`with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax()`}}),{c(){k(d.$$.fragment)},l(l){b(d.$$.fragment,l)},m(l,f){w(d,l,f),g=!0},p:ee,i(l){g||(y(d.$$.fragment,l),g=!0)},o(l){T(d.$$.fragment,l),g=!1},d(l){M(d,l)}}}function Pp(z){let d,g,l,f,$;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=n("code"),f=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=s(_,"CODE",{});var q=a(l);f=i(q,"Module"),q.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(c,_){v(c,d,_),e(d,g),e(d,l),e(l,f),e(d,$)},d(c){c&&o(d)}}}function jp(z){let d,g;return d=new B({props:{code:`import torch
from transformers import MvpTokenizer, MvpForQuestionAnswering

tokenizer = MvpTokenizer.from_pretrained("RUCAIBox/mvp")
model = MvpForQuestionAnswering.from_pretrained("RUCAIBox/mvp")

inputs = tokenizer(
    "Answer the following question: Who was Jim Henson? [SEP] Jim Henson was a nice puppet",
    return_tensors="pt",
)
target_start_index = torch.tensor([18])
target_end_index = torch.tensor([19])

loss = model(**inputs, start_positions=target_start_index, end_positions=target_end_index).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer, MvpForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Answer the following question: Who was Jim Henson? [SEP] Jim Henson was a nice puppet&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">18</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">19</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, start_positions=target_start_index, end_positions=target_end_index).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(l){b(d.$$.fragment,l)},m(l,f){w(d,l,f),g=!0},p:ee,i(l){g||(y(d.$$.fragment,l),g=!0)},o(l){T(d.$$.fragment,l),g=!1},d(l){M(d,l)}}}function Ep(z){let d,g;return d=new B({props:{code:`with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
predict_answer = tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer = tokenizer.decode(predict_answer_tokens)`}}),{c(){k(d.$$.fragment)},l(l){b(d.$$.fragment,l)},m(l,f){w(d,l,f),g=!0},p:ee,i(l){g||(y(d.$$.fragment,l),g=!0)},o(l){T(d.$$.fragment,l),g=!1},d(l){M(d,l)}}}function Ip(z){let d,g,l,f,$;return f=new B({props:{code:`from transformers import MvpTokenizer, MvpForCausalLM

tokenizer = MvpTokenizer.from_pretrained("RUCAIBox/mvp")
model = MvpForCausalLM.from_pretrained("RUCAIBox/mvp", add_cross_attention=False)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer, MvpForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForCausalLM.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">8</span>, <span class="hljs-number">50267</span>]`}}),{c(){d=n("p"),g=r("Example:"),l=p(),k(f.$$.fragment)},l(c){d=s(c,"P",{});var _=a(d);g=i(_,"Example:"),_.forEach(o),l=h(c),b(f.$$.fragment,c)},m(c,_){v(c,d,_),e(d,g),v(c,l,_),w(f,c,_),$=!0},p:ee,i(c){$||(y(f.$$.fragment,c),$=!0)},o(c){T(f.$$.fragment,c),$=!1},d(c){c&&o(d),c&&o(l),M(f,c)}}}function Ap(z){let d,g,l,f,$,c,_,q,re,U,W,Y,Yo,dt,ya,Xo,Ta,ms,$e,Ma,lt,$a,za,us,ko,xa,fs,Q,Zo,qa,Ca,Ko,Fa,Pa,en,ja,Ea,tn,Ia,gs,bo,Aa,_s,H,ct,La,pt,Oa,Sa,Na,ht,Da,on,Ba,Ua,Va,mt,Ga,nn,Ra,Wa,Qa,ie,Ha,ut,Ja,Ya,sn,Xa,Za,vs,te,Ka,ft,er,tr,gt,or,nr,ks,de,ze,an,_t,sr,rn,ar,bs,vt,ws,wo,rr,ys,kt,Ts,oe,ir,dn,dr,lr,bt,cr,pr,Ms,wt,$s,le,xe,ln,yt,hr,cn,mr,zs,V,Tt,ur,ce,fr,yo,gr,_r,Mt,vr,kr,br,pe,wr,To,yr,Tr,Mo,Mr,$r,zr,qe,xs,he,Ce,pn,$t,xr,hn,qr,qs,x,zt,Cr,mn,Fr,Pr,un,jr,Er,Fe,Ir,xt,Ar,fn,Lr,Or,Sr,Pe,Nr,qt,Dr,$o,Br,Ur,Vr,ne,Ct,Gr,gn,Rr,Wr,Ft,zo,Qr,_n,Hr,Jr,xo,Yr,vn,Xr,Zr,je,Pt,Kr,kn,ei,ti,Ee,jt,oi,bn,ni,si,Ie,Et,ai,It,ri,wn,ii,di,Cs,me,Ae,yn,At,li,Tn,ci,Fs,F,Lt,pi,Ot,hi,Mn,mi,ui,fi,$n,gi,_i,Le,vi,St,ki,zn,bi,wi,yi,Oe,Ti,Nt,Mi,qo,$i,zi,xi,Se,Dt,qi,xn,Ci,Ps,ue,Ne,qn,Bt,Fi,Cn,Pi,js,G,Ut,ji,Vt,Ei,Co,Ii,Ai,Li,Gt,Oi,Rt,Si,Ni,Di,J,Wt,Bi,fe,Ui,Fo,Vi,Gi,Fn,Ri,Wi,Qi,De,Hi,Be,Es,ge,Ue,Pn,Qt,Ji,jn,Yi,Is,R,Ht,Xi,Jt,Zi,Po,Ki,ed,td,Yt,od,Xt,nd,sd,ad,P,Zt,rd,_e,id,jo,dd,ld,En,cd,pd,hd,Ve,md,In,ud,fd,An,gd,_d,Ge,vd,Ln,kd,bd,Re,As,ve,We,On,Kt,wd,Sn,yd,Ls,N,eo,Td,Nn,Md,$d,to,zd,Eo,xd,qd,Cd,oo,Fd,no,Pd,jd,Ed,j,so,Id,ke,Ad,Io,Ld,Od,Dn,Sd,Nd,Dd,Qe,Bd,Bn,Ud,Vd,ao,Gd,Un,Rd,Wd,Qd,He,Hd,Vn,Jd,Yd,Je,Os,be,Ye,Gn,ro,Xd,Rn,Zd,Ss,D,io,Kd,we,el,Wn,tl,ol,Qn,nl,sl,al,lo,rl,Ao,il,dl,ll,co,cl,po,pl,hl,ml,E,ho,ul,ye,fl,Lo,gl,_l,Hn,vl,kl,bl,Xe,wl,Jn,yl,Tl,Oo,Ml,Yn,$l,zl,Ze,xl,Xn,ql,Cl,Ke,Ns,Te,et,Zn,mo,Fl,Kn,Pl,Ds,Me,uo,jl,tt,fo,El,ot,Bs;return c=new Z({}),dt=new Z({}),_t=new Z({}),vt=new B({props:{code:`from transformers import MvpTokenizer, MvpForConditionalGeneration

tokenizer = MvpTokenizer.from_pretrained("RUCAIBox/mvp")
model = MvpForConditionalGeneration.from_pretrained("RUCAIBox/mvp")
model_with_prompt = MvpForConditionalGeneration.from_pretrained("RUCAIBox/mvp-summarization")

inputs = tokenizer(
    "Summarize: You may want to stick it to your boss and leave your job, but don't do it if these are your reasons.",
    return_tensors="pt",
)
generated_ids = model.generate(**inputs)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)

generated_ids = model_with_prompt.generate(**inputs)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer, MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model_with_prompt = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp-summarization&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Summarize: You may want to stick it to your boss and leave your job, but don&#x27;t do it if these are your reasons.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&quot;Why You Shouldn&#x27;t Quit Your Job&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model_with_prompt.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&quot;Don&#x27;t do it if these are your reasons&quot;</span>]`}}),kt=new B({props:{code:`from transformers import MvpTokenizerFast, MvpForConditionalGeneration

tokenizer = MvpTokenizerFast.from_pretrained("RUCAIBox/mvp")
model = MvpForConditionalGeneration.from_pretrained("RUCAIBox/mvp")
model_with_mtl = MvpForConditionalGeneration.from_pretrained("RUCAIBox/mtl-data-to-text")

inputs = tokenizer(
    "Describe the following data: Iron Man | instance of | Superhero [SEP] Stan Lee | creator | Iron Man",
    return_tensors="pt",
)
generated_ids = model.generate(**inputs)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)

generated_ids = model_with_mtl.generate(**inputs)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizerFast, MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizerFast.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model_with_mtl = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mtl-data-to-text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Describe the following data: Iron Man | instance of | Superhero [SEP] Stan Lee | creator | Iron Man&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Stan Lee created the character of Iron Man, a fictional superhero appearing in American comic&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model_with_mtl.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.&#x27;</span>]`}}),wt=new B({props:{code:`from transformers import MvpForConditionalGeneration

model = MvpForConditionalGeneration.from_pretrained("RUCAIBox/mvp", use_prompt=True)
# the number of trainable parameters (full tuning)
sum(p.numel() for p in model.parameters() if p.requires_grad)

# lightweight tuning with randomly initialized prompts
model.set_lightweight_tuning()
# the number of trainable parameters (lightweight tuning)
sum(p.numel() for p in model.parameters() if p.requires_grad)

# lightweight tuning with task-specific prompts
model = MvpForConditionalGeneration.from_pretrained("RUCAIBox/mtl-data-to-text")
model.set_lightweight_tuning()
# original lightweight Prefix-tuning
model = MvpForConditionalGeneration.from_pretrained("facebook/bart-large", use_prompt=True)
model.set_lightweight_tuning()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>, use_prompt=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the number of trainable parameters (full tuning)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">sum</span>(p.numel() <span class="hljs-keyword">for</span> p <span class="hljs-keyword">in</span> model.parameters() <span class="hljs-keyword">if</span> p.requires_grad)
<span class="hljs-number">468116832</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lightweight tuning with randomly initialized prompts</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.set_lightweight_tuning()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the number of trainable parameters (lightweight tuning)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">sum</span>(p.numel() <span class="hljs-keyword">for</span> p <span class="hljs-keyword">in</span> model.parameters() <span class="hljs-keyword">if</span> p.requires_grad)
<span class="hljs-number">61823328</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lightweight tuning with task-specific prompts</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mtl-data-to-text&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.set_lightweight_tuning()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># original lightweight Prefix-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, use_prompt=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.set_lightweight_tuning()`}}),yt=new Z({}),Tt=new I({props:{name:"class transformers.MvpConfig",anchor:"transformers.MvpConfig",parameters:[{name:"vocab_size",val:" = 50267"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"use_prompt",val:" = False"},{name:"prompt_length",val:" = 100"},{name:"prompt_mid_dim",val:" = 800"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50267) &#x2014;
Vocabulary size of the MVP model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpModel">MvpModel</a>.`,name:"vocab_size"},{anchor:"transformers.MvpConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MvpConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MvpConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MvpConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MvpConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MvpConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MvpConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MvpConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MvpConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MvpConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MvpConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MvpConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MvpConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MvpConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.MvpConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.MvpConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.MvpConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MvpConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.MvpConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"},{anchor:"transformers.MvpConfig.use_prompt",description:`<strong>use_prompt</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use prompt.`,name:"use_prompt"},{anchor:"transformers.MvpConfig.prompt_length",description:`<strong>prompt_length</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The length of prompt.`,name:"prompt_length"},{anchor:"transformers.MvpConfig.prompt_mid_dim",description:`<strong>prompt_mid_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 800) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; layer in prompt.`,name:"prompt_mid_dim"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/configuration_mvp.py#L29"}}),qe=new K({props:{anchor:"transformers.MvpConfig.example",$$slots:{default:[vp]},$$scope:{ctx:z}}}),$t=new Z({}),zt=new I({props:{name:"class transformers.MvpTokenizer",anchor:"transformers.MvpTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MvpTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.MvpTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.MvpTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MvpTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MvpTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MvpTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MvpTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MvpTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MvpTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MvpTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (MVP tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L89"}}),Fe=new K({props:{anchor:"transformers.MvpTokenizer.example",$$slots:{default:[kp]},$$scope:{ctx:z}}}),Pe=new Jo({props:{$$slots:{default:[bp]},$$scope:{ctx:z}}}),Ct=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MvpTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MvpTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L325",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pt=new I({props:{name:"convert_tokens_to_string",anchor:"transformers.MvpTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L290"}}),jt=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MvpTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MvpTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L377",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Et=new I({props:{name:"get_special_tokens_mask",anchor:"transformers.MvpTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MvpTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MvpTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L350",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),At=new Z({}),Lt=new I({props:{name:"class transformers.MvpTokenizerFast",anchor:"transformers.MvpTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MvpTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.MvpTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.MvpTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MvpTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MvpTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MvpTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MvpTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MvpTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MvpTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MvpTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (MVP tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.MvpTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/tokenization_mvp_fast.py#L53"}}),Le=new K({props:{anchor:"transformers.MvpTokenizerFast.example",$$slots:{default:[wp]},$$scope:{ctx:z}}}),Oe=new Jo({props:{$$slots:{default:[yp]},$$scope:{ctx:z}}}),Dt=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MvpTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MvpTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/tokenization_mvp_fast.py#L266",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bt=new Z({}),Ut=new I({props:{name:"class transformers.MvpModel",anchor:"transformers.MvpModel",parameters:[{name:"config",val:": MvpConfig"}],parametersDescription:[{anchor:"transformers.MvpModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1293"}}),Wt=new I({props:{name:"forward",anchor:"transformers.MvpModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MvpModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MvpModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig"
>MvpConfig</a>) and inputs.</p>
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
`}}),De=new Jo({props:{$$slots:{default:[Tp]},$$scope:{ctx:z}}}),Be=new K({props:{anchor:"transformers.MvpModel.forward.example",$$slots:{default:[Mp]},$$scope:{ctx:z}}}),Qt=new Z({}),Ht=new I({props:{name:"class transformers.MvpForConditionalGeneration",anchor:"transformers.MvpForConditionalGeneration",parameters:[{name:"config",val:": MvpConfig"}],parametersDescription:[{anchor:"transformers.MvpForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1431"}}),Zt=new I({props:{name:"forward",anchor:"transformers.MvpForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MvpForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MvpForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1471",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig"
>MvpConfig</a>) and inputs.</p>
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
`}}),Ve=new Jo({props:{$$slots:{default:[$p]},$$scope:{ctx:z}}}),Ge=new K({props:{anchor:"transformers.MvpForConditionalGeneration.forward.example",$$slots:{default:[zp]},$$scope:{ctx:z}}}),Re=new K({props:{anchor:"transformers.MvpForConditionalGeneration.forward.example-2",$$slots:{default:[xp]},$$scope:{ctx:z}}}),Kt=new Z({}),eo=new I({props:{name:"class transformers.MvpForSequenceClassification",anchor:"transformers.MvpForSequenceClassification",parameters:[{name:"config",val:": MvpConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1601"}}),so=new I({props:{name:"forward",anchor:"transformers.MvpForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MvpForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MvpForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1621"}}),Qe=new Jo({props:{$$slots:{default:[qp]},$$scope:{ctx:z}}}),He=new K({props:{anchor:"transformers.MvpForSequenceClassification.forward.example",$$slots:{default:[Cp]},$$scope:{ctx:z}}}),Je=new K({props:{anchor:"transformers.MvpForSequenceClassification.forward.example-2",$$slots:{default:[Fp]},$$scope:{ctx:z}}}),ro=new Z({}),io=new I({props:{name:"class transformers.MvpForQuestionAnswering",anchor:"transformers.MvpForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MvpForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1728"}}),ho=new I({props:{name:"forward",anchor:"transformers.MvpForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MvpForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MvpForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MvpForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1746"}}),Xe=new Jo({props:{$$slots:{default:[Pp]},$$scope:{ctx:z}}}),Ze=new K({props:{anchor:"transformers.MvpForQuestionAnswering.forward.example",$$slots:{default:[jp]},$$scope:{ctx:z}}}),Ke=new K({props:{anchor:"transformers.MvpForQuestionAnswering.forward.example-2",$$slots:{default:[Ep]},$$scope:{ctx:z}}}),mo=new Z({}),uo=new I({props:{name:"class transformers.MvpForCausalLM",anchor:"transformers.MvpForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1858"}}),fo=new I({props:{name:"forward",anchor:"transformers.MvpForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MvpForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpTokenizer">MvpTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MvpForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MvpForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MvpForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MvpForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MvpForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1893",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig"
>MvpConfig</a>) and inputs.</p>
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
`}}),ot=new K({props:{anchor:"transformers.MvpForCausalLM.forward.example",$$slots:{default:[Ip]},$$scope:{ctx:z}}}),{c(){d=n("meta"),g=p(),l=n("h1"),f=n("a"),$=n("span"),k(c.$$.fragment),_=p(),q=n("span"),re=r("MVP"),U=p(),W=n("h2"),Y=n("a"),Yo=n("span"),k(dt.$$.fragment),ya=p(),Xo=n("span"),Ta=r("Overview"),ms=p(),$e=n("p"),Ma=r("The MVP model was proposed in "),lt=n("a"),$a=r("MVP: Multi-task Supervised Pre-training for Natural Language Generation"),za=r(" by Tianyi Tang, Junyi Li, Wayne Xin Zhao and Ji-Rong Wen."),us=p(),ko=n("p"),xa=r("According to the abstract,"),fs=p(),Q=n("ul"),Zo=n("li"),qa=r("MVP follows a standard Transformer encoder-decoder architecture."),Ca=p(),Ko=n("li"),Fa=r("MVP is supervised pre-trained using labeled datasets."),Pa=p(),en=n("li"),ja=r("MVP also has task-specific soft prompts to stimulate the model\u2019s capacity in performing a certain task."),Ea=p(),tn=n("li"),Ia=r("MVP is specially designed for natural language generation and can be adapted to a wide range of generation tasks, including but not limited to summarization, data-to-text generation, open-ended dialogue system, story generation, question answering, question generation, task-oriented dialogue system, commonsense generation, paraphrase generation, text style transfer, and text simplification. Our model can also be adapted to natural language understanding tasks such as sequence classification and (extractive) question answering."),gs=p(),bo=n("p"),Aa=r("Tips:"),_s=p(),H=n("ul"),ct=n("li"),La=r("We have released a series of models "),pt=n("a"),Oa=r("here"),Sa=r(", including MVP, MVP with task-specific prompts, and multi-task pre-trained variants."),Na=p(),ht=n("li"),Da=r("If you want to use a model without prompts (standard Transformer), you can load it through "),on=n("code"),Ba=r("MvpForConditionalGeneration.from_pretrained('RUCAIBox/mvp')"),Ua=r("."),Va=p(),mt=n("li"),Ga=r("If you want to use a model with task-specific prompts, such as summarization, you can load it through "),nn=n("code"),Ra=r("MvpForConditionalGeneration.from_pretrained('RUCAIBox/mvp-summarization')"),Wa=r("."),Qa=p(),ie=n("li"),Ha=r("Our model supports lightweight prompt tuning following "),ut=n("a"),Ja=r("Prefix-tuning"),Ya=r(" with method "),sn=n("code"),Xa=r("set_lightweight_tuning()"),Za=r("."),vs=p(),te=n("p"),Ka=r("This model was contributed by "),ft=n("a"),er=r("Tianyi Tang"),tr=r(". The detailed information and instructions can be found "),gt=n("a"),or=r("here"),nr=r("."),ks=p(),de=n("h2"),ze=n("a"),an=n("span"),k(_t.$$.fragment),sr=p(),rn=n("span"),ar=r("Examples"),bs=r(`

For summarization, it is an example to use MVP and MVP with summarization-specific prompts.

	`),k(vt.$$.fragment),ws=p(),wo=n("p"),rr=r("For data-to-text generation, it is an example to use MVP and multi-task pre-trained variants."),ys=p(),k(kt.$$.fragment),Ts=p(),oe=n("p"),ir=r("For lightweight tuning, "),dn=n("em"),dr=r("i.e."),lr=r(", fixing the model and only tuning prompts, you can load MVP with randomly initialized prompts or with task-specific prompts. Our code also supports Prefix-tuning with BART following the "),bt=n("a"),cr=r("original paper"),pr=r("."),Ms=p(),k(wt.$$.fragment),$s=p(),le=n("h2"),xe=n("a"),ln=n("span"),k(yt.$$.fragment),hr=p(),cn=n("span"),mr=r("MvpConfig"),zs=p(),V=n("div"),k(Tt.$$.fragment),ur=p(),ce=n("p"),fr=r("This is the configuration class to store the configuration of a "),yo=n("a"),gr=r("MvpModel"),_r=r(`. It is used to instantiate a MVP model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MVP `),Mt=n("a"),vr=r("RUCAIBox/mvp"),kr=r(`
architecture.`),br=p(),pe=n("p"),wr=r("Configuration objects inherit from "),To=n("a"),yr=r("PretrainedConfig"),Tr=r(` and can be used to control the model outputs. Read the
documentation from `),Mo=n("a"),Mr=r("PretrainedConfig"),$r=r(" for more information."),zr=p(),k(qe.$$.fragment),xs=p(),he=n("h2"),Ce=n("a"),pn=n("span"),k($t.$$.fragment),xr=p(),hn=n("span"),qr=r("MvpTokenizer"),qs=p(),x=n("div"),k(zt.$$.fragment),Cr=p(),mn=n("p"),Fr=r("Constructs a MVP tokenizer, which is smilar to the RoBERTa tokenizer, using byte-level Byte-Pair-Encoding."),Pr=p(),un=n("p"),jr=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Er=p(),k(Fe.$$.fragment),Ir=p(),xt=n("p"),Ar=r("You can get around that behavior by passing "),fn=n("code"),Lr=r("add_prefix_space=True"),Or=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Sr=p(),k(Pe.$$.fragment),Nr=p(),qt=n("p"),Dr=r("This tokenizer inherits from "),$o=n("a"),Br=r("PreTrainedTokenizer"),Ur=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vr=p(),ne=n("div"),k(Ct.$$.fragment),Gr=p(),gn=n("p"),Rr=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MVP sequence has the following format:`),Wr=p(),Ft=n("ul"),zo=n("li"),Qr=r("single sequence: "),_n=n("code"),Hr=r("<s> X </s>"),Jr=p(),xo=n("li"),Yr=r("pair of sequences: "),vn=n("code"),Xr=r("<s> A </s></s> B </s>"),Zr=p(),je=n("div"),k(Pt.$$.fragment),Kr=p(),kn=n("p"),ei=r("Converts a sequence of tokens (string) in a single string."),ti=p(),Ee=n("div"),k(jt.$$.fragment),oi=p(),bn=n("p"),ni=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. MVP does not
make use of token type ids, therefore a list of zeros is returned.`),si=p(),Ie=n("div"),k(Et.$$.fragment),ai=p(),It=n("p"),ri=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wn=n("code"),ii=r("prepare_for_model"),di=r(" method."),Cs=p(),me=n("h2"),Ae=n("a"),yn=n("span"),k(At.$$.fragment),li=p(),Tn=n("span"),ci=r("MvpTokenizerFast"),Fs=p(),F=n("div"),k(Lt.$$.fragment),pi=p(),Ot=n("p"),hi=r("Construct a \u201Cfast\u201D MVP tokenizer (backed by HuggingFace\u2019s "),Mn=n("em"),mi=r("tokenizers"),ui=r(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),fi=p(),$n=n("p"),gi=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),_i=p(),k(Le.$$.fragment),vi=p(),St=n("p"),ki=r("You can get around that behavior by passing "),zn=n("code"),bi=r("add_prefix_space=True"),wi=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),yi=p(),k(Oe.$$.fragment),Ti=p(),Nt=n("p"),Mi=r("This tokenizer inherits from "),qo=n("a"),$i=r("PreTrainedTokenizerFast"),zi=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xi=p(),Se=n("div"),k(Dt.$$.fragment),qi=p(),xn=n("p"),Ci=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. MVP does not
make use of token type ids, therefore a list of zeros is returned.`),Ps=p(),ue=n("h2"),Ne=n("a"),qn=n("span"),k(Bt.$$.fragment),Fi=p(),Cn=n("span"),Pi=r("MvpModel"),js=p(),G=n("div"),k(Ut.$$.fragment),ji=p(),Vt=n("p"),Ei=r(`The bare MVP Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Co=n("a"),Ii=r("PreTrainedModel"),Ai=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li=p(),Gt=n("p"),Oi=r("This model is also a PyTorch "),Rt=n("a"),Si=r("torch.nn.Module"),Ni=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Di=p(),J=n("div"),k(Wt.$$.fragment),Bi=p(),fe=n("p"),Ui=r("The "),Fo=n("a"),Vi=r("MvpModel"),Gi=r(" forward method, overrides the "),Fn=n("code"),Ri=r("__call__"),Wi=r(" special method."),Qi=p(),k(De.$$.fragment),Hi=p(),k(Be.$$.fragment),Es=p(),ge=n("h2"),Ue=n("a"),Pn=n("span"),k(Qt.$$.fragment),Ji=p(),jn=n("span"),Yi=r("MvpForConditionalGeneration"),Is=p(),R=n("div"),k(Ht.$$.fragment),Xi=p(),Jt=n("p"),Zi=r(`The MVP Model with a language modeling head. Can be used for various text generation tasks.
This model inherits from `),Po=n("a"),Ki=r("PreTrainedModel"),ed=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td=p(),Yt=n("p"),od=r("This model is also a PyTorch "),Xt=n("a"),nd=r("torch.nn.Module"),sd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ad=p(),P=n("div"),k(Zt.$$.fragment),rd=p(),_e=n("p"),id=r("The "),jo=n("a"),dd=r("MvpForConditionalGeneration"),ld=r(" forward method, overrides the "),En=n("code"),cd=r("__call__"),pd=r(" special method."),hd=p(),k(Ve.$$.fragment),md=p(),In=n("p"),ud=r("Example of summarization:"),fd=p(),An=n("p"),gd=r("Fine-tuning a model"),_d=p(),k(Ge.$$.fragment),vd=p(),Ln=n("p"),kd=r("Inference after the model fine-tuned"),bd=p(),k(Re.$$.fragment),As=p(),ve=n("h2"),We=n("a"),On=n("span"),k(Kt.$$.fragment),wd=p(),Sn=n("span"),yd=r("MvpForSequenceClassification"),Ls=p(),N=n("div"),k(eo.$$.fragment),Td=p(),Nn=n("p"),Md=r(`Mvp model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),$d=p(),to=n("p"),zd=r("This model inherits from "),Eo=n("a"),xd=r("PreTrainedModel"),qd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd=p(),oo=n("p"),Fd=r("This model is also a PyTorch "),no=n("a"),Pd=r("torch.nn.Module"),jd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed=p(),j=n("div"),k(so.$$.fragment),Id=p(),ke=n("p"),Ad=r("The "),Io=n("a"),Ld=r("MvpForSequenceClassification"),Od=r(" forward method, overrides the "),Dn=n("code"),Sd=r("__call__"),Nd=r(" special method."),Dd=p(),k(Qe.$$.fragment),Bd=p(),Bn=n("p"),Ud=r("Example of single-label classification:"),Vd=p(),ao=n("p"),Gd=r("Fine-tuning a model on "),Un=n("code"),Rd=r("num_labels"),Wd=r(" classes"),Qd=p(),k(He.$$.fragment),Hd=p(),Vn=n("p"),Jd=r("Inference after the model fine-tuned"),Yd=p(),k(Je.$$.fragment),Os=p(),be=n("h2"),Ye=n("a"),Gn=n("span"),k(ro.$$.fragment),Xd=p(),Rn=n("span"),Zd=r("MvpForQuestionAnswering"),Ss=p(),D=n("div"),k(io.$$.fragment),Kd=p(),we=n("p"),el=r(`MVP Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Wn=n("code"),tl=r("span start logits"),ol=r(" and "),Qn=n("code"),nl=r("span end logits"),sl=r(")."),al=p(),lo=n("p"),rl=r("This model inherits from "),Ao=n("a"),il=r("PreTrainedModel"),dl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ll=p(),co=n("p"),cl=r("This model is also a PyTorch "),po=n("a"),pl=r("torch.nn.Module"),hl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ml=p(),E=n("div"),k(ho.$$.fragment),ul=p(),ye=n("p"),fl=r("The "),Lo=n("a"),gl=r("MvpForQuestionAnswering"),_l=r(" forward method, overrides the "),Hn=n("code"),vl=r("__call__"),kl=r(" special method."),bl=p(),k(Xe.$$.fragment),wl=p(),Jn=n("p"),yl=r("Example:"),Tl=p(),Oo=n("p"),Ml=r(`Fine-tuning a model for extrative question answering, and our model also supports generative question answering
using `),Yn=n("code"),$l=r("BartForConditionalGeneration"),zl=p(),k(Ze.$$.fragment),xl=p(),Xn=n("p"),ql=r("Inference after the model fine-tuned"),Cl=p(),k(Ke.$$.fragment),Ns=p(),Te=n("h2"),et=n("a"),Zn=n("span"),k(mo.$$.fragment),Fl=p(),Kn=n("span"),Pl=r("MvpForCausalLM"),Ds=p(),Me=n("div"),k(uo.$$.fragment),jl=p(),tt=n("div"),k(fo.$$.fragment),El=p(),k(ot.$$.fragment),this.h()},l(t){const u=gp('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(o),g=h(t),l=s(t,"H1",{class:!0});var go=a(l);f=s(go,"A",{id:!0,class:!0,href:!0});var es=a(f);$=s(es,"SPAN",{});var ts=a($);b(c.$$.fragment,ts),ts.forEach(o),es.forEach(o),_=h(go),q=s(go,"SPAN",{});var os=a(q);re=i(os,"MVP"),os.forEach(o),go.forEach(o),U=h(t),W=s(t,"H2",{class:!0});var _o=a(W);Y=s(_o,"A",{id:!0,class:!0,href:!0});var ns=a(Y);Yo=s(ns,"SPAN",{});var ss=a(Yo);b(dt.$$.fragment,ss),ss.forEach(o),ns.forEach(o),ya=h(_o),Xo=s(_o,"SPAN",{});var as=a(Xo);Ta=i(as,"Overview"),as.forEach(o),_o.forEach(o),ms=h(t),$e=s(t,"P",{});var vo=a($e);Ma=i(vo,"The MVP model was proposed in "),lt=s(vo,"A",{href:!0,rel:!0});var rs=a(lt);$a=i(rs,"MVP: Multi-task Supervised Pre-training for Natural Language Generation"),rs.forEach(o),za=i(vo," by Tianyi Tang, Junyi Li, Wayne Xin Zhao and Ji-Rong Wen."),vo.forEach(o),us=h(t),ko=s(t,"P",{});var is=a(ko);xa=i(is,"According to the abstract,"),is.forEach(o),fs=h(t),Q=s(t,"UL",{});var X=a(Q);Zo=s(X,"LI",{});var ds=a(Zo);qa=i(ds,"MVP follows a standard Transformer encoder-decoder architecture."),ds.forEach(o),Ca=h(X),Ko=s(X,"LI",{});var ls=a(Ko);Fa=i(ls,"MVP is supervised pre-trained using labeled datasets."),ls.forEach(o),Pa=h(X),en=s(X,"LI",{});var cs=a(en);ja=i(cs,"MVP also has task-specific soft prompts to stimulate the model\u2019s capacity in performing a certain task."),cs.forEach(o),Ea=h(X),tn=s(X,"LI",{});var ps=a(tn);Ia=i(ps,"MVP is specially designed for natural language generation and can be adapted to a wide range of generation tasks, including but not limited to summarization, data-to-text generation, open-ended dialogue system, story generation, question answering, question generation, task-oriented dialogue system, commonsense generation, paraphrase generation, text style transfer, and text simplification. Our model can also be adapted to natural language understanding tasks such as sequence classification and (extractive) question answering."),ps.forEach(o),X.forEach(o),gs=h(t),bo=s(t,"P",{});var hs=a(bo);Aa=i(hs,"Tips:"),hs.forEach(o),_s=h(t),H=s(t,"UL",{});var nt=a(H);ct=s(nt,"LI",{});var Us=a(ct);La=i(Us,"We have released a series of models "),pt=s(Us,"A",{href:!0,rel:!0});var Ol=a(pt);Oa=i(Ol,"here"),Ol.forEach(o),Sa=i(Us,", including MVP, MVP with task-specific prompts, and multi-task pre-trained variants."),Us.forEach(o),Na=h(nt),ht=s(nt,"LI",{});var Vs=a(ht);Da=i(Vs,"If you want to use a model without prompts (standard Transformer), you can load it through "),on=s(Vs,"CODE",{});var Sl=a(on);Ba=i(Sl,"MvpForConditionalGeneration.from_pretrained('RUCAIBox/mvp')"),Sl.forEach(o),Ua=i(Vs,"."),Vs.forEach(o),Va=h(nt),mt=s(nt,"LI",{});var Gs=a(mt);Ga=i(Gs,"If you want to use a model with task-specific prompts, such as summarization, you can load it through "),nn=s(Gs,"CODE",{});var Nl=a(nn);Ra=i(Nl,"MvpForConditionalGeneration.from_pretrained('RUCAIBox/mvp-summarization')"),Nl.forEach(o),Wa=i(Gs,"."),Gs.forEach(o),Qa=h(nt),ie=s(nt,"LI",{});var So=a(ie);Ha=i(So,"Our model supports lightweight prompt tuning following "),ut=s(So,"A",{href:!0,rel:!0});var Dl=a(ut);Ja=i(Dl,"Prefix-tuning"),Dl.forEach(o),Ya=i(So," with method "),sn=s(So,"CODE",{});var Bl=a(sn);Xa=i(Bl,"set_lightweight_tuning()"),Bl.forEach(o),Za=i(So,"."),So.forEach(o),nt.forEach(o),vs=h(t),te=s(t,"P",{});var No=a(te);Ka=i(No,"This model was contributed by "),ft=s(No,"A",{href:!0,rel:!0});var Ul=a(ft);er=i(Ul,"Tianyi Tang"),Ul.forEach(o),tr=i(No,". The detailed information and instructions can be found "),gt=s(No,"A",{href:!0,rel:!0});var Vl=a(gt);or=i(Vl,"here"),Vl.forEach(o),nr=i(No,"."),No.forEach(o),ks=h(t),de=s(t,"H2",{class:!0});var Rs=a(de);ze=s(Rs,"A",{id:!0,class:!0,href:!0});var Gl=a(ze);an=s(Gl,"SPAN",{});var Rl=a(an);b(_t.$$.fragment,Rl),Rl.forEach(o),Gl.forEach(o),sr=h(Rs),rn=s(Rs,"SPAN",{});var Wl=a(rn);ar=i(Wl,"Examples"),Wl.forEach(o),Rs.forEach(o),bs=i(t,`

For summarization, it is an example to use MVP and MVP with summarization-specific prompts.

	`),b(vt.$$.fragment,t),ws=h(t),wo=s(t,"P",{});var Ql=a(wo);rr=i(Ql,"For data-to-text generation, it is an example to use MVP and multi-task pre-trained variants."),Ql.forEach(o),ys=h(t),b(kt.$$.fragment,t),Ts=h(t),oe=s(t,"P",{});var Do=a(oe);ir=i(Do,"For lightweight tuning, "),dn=s(Do,"EM",{});var Hl=a(dn);dr=i(Hl,"i.e."),Hl.forEach(o),lr=i(Do,", fixing the model and only tuning prompts, you can load MVP with randomly initialized prompts or with task-specific prompts. Our code also supports Prefix-tuning with BART following the "),bt=s(Do,"A",{href:!0,rel:!0});var Jl=a(bt);cr=i(Jl,"original paper"),Jl.forEach(o),pr=i(Do,"."),Do.forEach(o),Ms=h(t),b(wt.$$.fragment,t),$s=h(t),le=s(t,"H2",{class:!0});var Ws=a(le);xe=s(Ws,"A",{id:!0,class:!0,href:!0});var Yl=a(xe);ln=s(Yl,"SPAN",{});var Xl=a(ln);b(yt.$$.fragment,Xl),Xl.forEach(o),Yl.forEach(o),hr=h(Ws),cn=s(Ws,"SPAN",{});var Zl=a(cn);mr=i(Zl,"MvpConfig"),Zl.forEach(o),Ws.forEach(o),zs=h(t),V=s(t,"DIV",{class:!0});var st=a(V);b(Tt.$$.fragment,st),ur=h(st),ce=s(st,"P",{});var Bo=a(ce);fr=i(Bo,"This is the configuration class to store the configuration of a "),yo=s(Bo,"A",{href:!0});var Kl=a(yo);gr=i(Kl,"MvpModel"),Kl.forEach(o),_r=i(Bo,`. It is used to instantiate a MVP model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MVP `),Mt=s(Bo,"A",{href:!0,rel:!0});var ec=a(Mt);vr=i(ec,"RUCAIBox/mvp"),ec.forEach(o),kr=i(Bo,`
architecture.`),Bo.forEach(o),br=h(st),pe=s(st,"P",{});var Uo=a(pe);wr=i(Uo,"Configuration objects inherit from "),To=s(Uo,"A",{href:!0});var tc=a(To);yr=i(tc,"PretrainedConfig"),tc.forEach(o),Tr=i(Uo,` and can be used to control the model outputs. Read the
documentation from `),Mo=s(Uo,"A",{href:!0});var oc=a(Mo);Mr=i(oc,"PretrainedConfig"),oc.forEach(o),$r=i(Uo," for more information."),Uo.forEach(o),zr=h(st),b(qe.$$.fragment,st),st.forEach(o),xs=h(t),he=s(t,"H2",{class:!0});var Qs=a(he);Ce=s(Qs,"A",{id:!0,class:!0,href:!0});var nc=a(Ce);pn=s(nc,"SPAN",{});var sc=a(pn);b($t.$$.fragment,sc),sc.forEach(o),nc.forEach(o),xr=h(Qs),hn=s(Qs,"SPAN",{});var ac=a(hn);qr=i(ac,"MvpTokenizer"),ac.forEach(o),Qs.forEach(o),qs=h(t),x=s(t,"DIV",{class:!0});var C=a(x);b(zt.$$.fragment,C),Cr=h(C),mn=s(C,"P",{});var rc=a(mn);Fr=i(rc,"Constructs a MVP tokenizer, which is smilar to the RoBERTa tokenizer, using byte-level Byte-Pair-Encoding."),rc.forEach(o),Pr=h(C),un=s(C,"P",{});var ic=a(un);jr=i(ic,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ic.forEach(o),Er=h(C),b(Fe.$$.fragment,C),Ir=h(C),xt=s(C,"P",{});var Hs=a(xt);Ar=i(Hs,"You can get around that behavior by passing "),fn=s(Hs,"CODE",{});var dc=a(fn);Lr=i(dc,"add_prefix_space=True"),dc.forEach(o),Or=i(Hs,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Hs.forEach(o),Sr=h(C),b(Pe.$$.fragment,C),Nr=h(C),qt=s(C,"P",{});var Js=a(qt);Dr=i(Js,"This tokenizer inherits from "),$o=s(Js,"A",{href:!0});var lc=a($o);Br=i(lc,"PreTrainedTokenizer"),lc.forEach(o),Ur=i(Js,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Js.forEach(o),Vr=h(C),ne=s(C,"DIV",{class:!0});var Vo=a(ne);b(Ct.$$.fragment,Vo),Gr=h(Vo),gn=s(Vo,"P",{});var cc=a(gn);Rr=i(cc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MVP sequence has the following format:`),cc.forEach(o),Wr=h(Vo),Ft=s(Vo,"UL",{});var Ys=a(Ft);zo=s(Ys,"LI",{});var Il=a(zo);Qr=i(Il,"single sequence: "),_n=s(Il,"CODE",{});var pc=a(_n);Hr=i(pc,"<s> X </s>"),pc.forEach(o),Il.forEach(o),Jr=h(Ys),xo=s(Ys,"LI",{});var Al=a(xo);Yr=i(Al,"pair of sequences: "),vn=s(Al,"CODE",{});var hc=a(vn);Xr=i(hc,"<s> A </s></s> B </s>"),hc.forEach(o),Al.forEach(o),Ys.forEach(o),Vo.forEach(o),Zr=h(C),je=s(C,"DIV",{class:!0});var Xs=a(je);b(Pt.$$.fragment,Xs),Kr=h(Xs),kn=s(Xs,"P",{});var mc=a(kn);ei=i(mc,"Converts a sequence of tokens (string) in a single string."),mc.forEach(o),Xs.forEach(o),ti=h(C),Ee=s(C,"DIV",{class:!0});var Zs=a(Ee);b(jt.$$.fragment,Zs),oi=h(Zs),bn=s(Zs,"P",{});var uc=a(bn);ni=i(uc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. MVP does not
make use of token type ids, therefore a list of zeros is returned.`),uc.forEach(o),Zs.forEach(o),si=h(C),Ie=s(C,"DIV",{class:!0});var Ks=a(Ie);b(Et.$$.fragment,Ks),ai=h(Ks),It=s(Ks,"P",{});var ea=a(It);ri=i(ea,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wn=s(ea,"CODE",{});var fc=a(wn);ii=i(fc,"prepare_for_model"),fc.forEach(o),di=i(ea," method."),ea.forEach(o),Ks.forEach(o),C.forEach(o),Cs=h(t),me=s(t,"H2",{class:!0});var ta=a(me);Ae=s(ta,"A",{id:!0,class:!0,href:!0});var gc=a(Ae);yn=s(gc,"SPAN",{});var _c=a(yn);b(At.$$.fragment,_c),_c.forEach(o),gc.forEach(o),li=h(ta),Tn=s(ta,"SPAN",{});var vc=a(Tn);ci=i(vc,"MvpTokenizerFast"),vc.forEach(o),ta.forEach(o),Fs=h(t),F=s(t,"DIV",{class:!0});var A=a(F);b(Lt.$$.fragment,A),pi=h(A),Ot=s(A,"P",{});var oa=a(Ot);hi=i(oa,"Construct a \u201Cfast\u201D MVP tokenizer (backed by HuggingFace\u2019s "),Mn=s(oa,"EM",{});var kc=a(Mn);mi=i(kc,"tokenizers"),kc.forEach(o),ui=i(oa,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),oa.forEach(o),fi=h(A),$n=s(A,"P",{});var bc=a($n);gi=i(bc,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),bc.forEach(o),_i=h(A),b(Le.$$.fragment,A),vi=h(A),St=s(A,"P",{});var na=a(St);ki=i(na,"You can get around that behavior by passing "),zn=s(na,"CODE",{});var wc=a(zn);bi=i(wc,"add_prefix_space=True"),wc.forEach(o),wi=i(na,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),na.forEach(o),yi=h(A),b(Oe.$$.fragment,A),Ti=h(A),Nt=s(A,"P",{});var sa=a(Nt);Mi=i(sa,"This tokenizer inherits from "),qo=s(sa,"A",{href:!0});var yc=a(qo);$i=i(yc,"PreTrainedTokenizerFast"),yc.forEach(o),zi=i(sa,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),sa.forEach(o),xi=h(A),Se=s(A,"DIV",{class:!0});var aa=a(Se);b(Dt.$$.fragment,aa),qi=h(aa),xn=s(aa,"P",{});var Tc=a(xn);Ci=i(Tc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. MVP does not
make use of token type ids, therefore a list of zeros is returned.`),Tc.forEach(o),aa.forEach(o),A.forEach(o),Ps=h(t),ue=s(t,"H2",{class:!0});var ra=a(ue);Ne=s(ra,"A",{id:!0,class:!0,href:!0});var Mc=a(Ne);qn=s(Mc,"SPAN",{});var $c=a(qn);b(Bt.$$.fragment,$c),$c.forEach(o),Mc.forEach(o),Fi=h(ra),Cn=s(ra,"SPAN",{});var zc=a(Cn);Pi=i(zc,"MvpModel"),zc.forEach(o),ra.forEach(o),js=h(t),G=s(t,"DIV",{class:!0});var at=a(G);b(Ut.$$.fragment,at),ji=h(at),Vt=s(at,"P",{});var ia=a(Vt);Ei=i(ia,`The bare MVP Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Co=s(ia,"A",{href:!0});var xc=a(Co);Ii=i(xc,"PreTrainedModel"),xc.forEach(o),Ai=i(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(o),Li=h(at),Gt=s(at,"P",{});var da=a(Gt);Oi=i(da,"This model is also a PyTorch "),Rt=s(da,"A",{href:!0,rel:!0});var qc=a(Rt);Si=i(qc,"torch.nn.Module"),qc.forEach(o),Ni=i(da,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),da.forEach(o),Di=h(at),J=s(at,"DIV",{class:!0});var rt=a(J);b(Wt.$$.fragment,rt),Bi=h(rt),fe=s(rt,"P",{});var Go=a(fe);Ui=i(Go,"The "),Fo=s(Go,"A",{href:!0});var Cc=a(Fo);Vi=i(Cc,"MvpModel"),Cc.forEach(o),Gi=i(Go," forward method, overrides the "),Fn=s(Go,"CODE",{});var Fc=a(Fn);Ri=i(Fc,"__call__"),Fc.forEach(o),Wi=i(Go," special method."),Go.forEach(o),Qi=h(rt),b(De.$$.fragment,rt),Hi=h(rt),b(Be.$$.fragment,rt),rt.forEach(o),at.forEach(o),Es=h(t),ge=s(t,"H2",{class:!0});var la=a(ge);Ue=s(la,"A",{id:!0,class:!0,href:!0});var Pc=a(Ue);Pn=s(Pc,"SPAN",{});var jc=a(Pn);b(Qt.$$.fragment,jc),jc.forEach(o),Pc.forEach(o),Ji=h(la),jn=s(la,"SPAN",{});var Ec=a(jn);Yi=i(Ec,"MvpForConditionalGeneration"),Ec.forEach(o),la.forEach(o),Is=h(t),R=s(t,"DIV",{class:!0});var it=a(R);b(Ht.$$.fragment,it),Xi=h(it),Jt=s(it,"P",{});var ca=a(Jt);Zi=i(ca,`The MVP Model with a language modeling head. Can be used for various text generation tasks.
This model inherits from `),Po=s(ca,"A",{href:!0});var Ic=a(Po);Ki=i(Ic,"PreTrainedModel"),Ic.forEach(o),ed=i(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(o),td=h(it),Yt=s(it,"P",{});var pa=a(Yt);od=i(pa,"This model is also a PyTorch "),Xt=s(pa,"A",{href:!0,rel:!0});var Ac=a(Xt);nd=i(Ac,"torch.nn.Module"),Ac.forEach(o),sd=i(pa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pa.forEach(o),ad=h(it),P=s(it,"DIV",{class:!0});var L=a(P);b(Zt.$$.fragment,L),rd=h(L),_e=s(L,"P",{});var Ro=a(_e);id=i(Ro,"The "),jo=s(Ro,"A",{href:!0});var Lc=a(jo);dd=i(Lc,"MvpForConditionalGeneration"),Lc.forEach(o),ld=i(Ro," forward method, overrides the "),En=s(Ro,"CODE",{});var Oc=a(En);cd=i(Oc,"__call__"),Oc.forEach(o),pd=i(Ro," special method."),Ro.forEach(o),hd=h(L),b(Ve.$$.fragment,L),md=h(L),In=s(L,"P",{});var Sc=a(In);ud=i(Sc,"Example of summarization:"),Sc.forEach(o),fd=h(L),An=s(L,"P",{});var Nc=a(An);gd=i(Nc,"Fine-tuning a model"),Nc.forEach(o),_d=h(L),b(Ge.$$.fragment,L),vd=h(L),Ln=s(L,"P",{});var Dc=a(Ln);kd=i(Dc,"Inference after the model fine-tuned"),Dc.forEach(o),bd=h(L),b(Re.$$.fragment,L),L.forEach(o),it.forEach(o),As=h(t),ve=s(t,"H2",{class:!0});var ha=a(ve);We=s(ha,"A",{id:!0,class:!0,href:!0});var Bc=a(We);On=s(Bc,"SPAN",{});var Uc=a(On);b(Kt.$$.fragment,Uc),Uc.forEach(o),Bc.forEach(o),wd=h(ha),Sn=s(ha,"SPAN",{});var Vc=a(Sn);yd=i(Vc,"MvpForSequenceClassification"),Vc.forEach(o),ha.forEach(o),Ls=h(t),N=s(t,"DIV",{class:!0});var se=a(N);b(eo.$$.fragment,se),Td=h(se),Nn=s(se,"P",{});var Gc=a(Nn);Md=i(Gc,`Mvp model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Gc.forEach(o),$d=h(se),to=s(se,"P",{});var ma=a(to);zd=i(ma,"This model inherits from "),Eo=s(ma,"A",{href:!0});var Rc=a(Eo);xd=i(Rc,"PreTrainedModel"),Rc.forEach(o),qd=i(ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma.forEach(o),Cd=h(se),oo=s(se,"P",{});var ua=a(oo);Fd=i(ua,"This model is also a PyTorch "),no=s(ua,"A",{href:!0,rel:!0});var Wc=a(no);Pd=i(Wc,"torch.nn.Module"),Wc.forEach(o),jd=i(ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ua.forEach(o),Ed=h(se),j=s(se,"DIV",{class:!0});var O=a(j);b(so.$$.fragment,O),Id=h(O),ke=s(O,"P",{});var Wo=a(ke);Ad=i(Wo,"The "),Io=s(Wo,"A",{href:!0});var Qc=a(Io);Ld=i(Qc,"MvpForSequenceClassification"),Qc.forEach(o),Od=i(Wo," forward method, overrides the "),Dn=s(Wo,"CODE",{});var Hc=a(Dn);Sd=i(Hc,"__call__"),Hc.forEach(o),Nd=i(Wo," special method."),Wo.forEach(o),Dd=h(O),b(Qe.$$.fragment,O),Bd=h(O),Bn=s(O,"P",{});var Jc=a(Bn);Ud=i(Jc,"Example of single-label classification:"),Jc.forEach(o),Vd=h(O),ao=s(O,"P",{});var fa=a(ao);Gd=i(fa,"Fine-tuning a model on "),Un=s(fa,"CODE",{});var Yc=a(Un);Rd=i(Yc,"num_labels"),Yc.forEach(o),Wd=i(fa," classes"),fa.forEach(o),Qd=h(O),b(He.$$.fragment,O),Hd=h(O),Vn=s(O,"P",{});var Xc=a(Vn);Jd=i(Xc,"Inference after the model fine-tuned"),Xc.forEach(o),Yd=h(O),b(Je.$$.fragment,O),O.forEach(o),se.forEach(o),Os=h(t),be=s(t,"H2",{class:!0});var ga=a(be);Ye=s(ga,"A",{id:!0,class:!0,href:!0});var Zc=a(Ye);Gn=s(Zc,"SPAN",{});var Kc=a(Gn);b(ro.$$.fragment,Kc),Kc.forEach(o),Zc.forEach(o),Xd=h(ga),Rn=s(ga,"SPAN",{});var ep=a(Rn);Zd=i(ep,"MvpForQuestionAnswering"),ep.forEach(o),ga.forEach(o),Ss=h(t),D=s(t,"DIV",{class:!0});var ae=a(D);b(io.$$.fragment,ae),Kd=h(ae),we=s(ae,"P",{});var Qo=a(we);el=i(Qo,`MVP Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Wn=s(Qo,"CODE",{});var tp=a(Wn);tl=i(tp,"span start logits"),tp.forEach(o),ol=i(Qo," and "),Qn=s(Qo,"CODE",{});var op=a(Qn);nl=i(op,"span end logits"),op.forEach(o),sl=i(Qo,")."),Qo.forEach(o),al=h(ae),lo=s(ae,"P",{});var _a=a(lo);rl=i(_a,"This model inherits from "),Ao=s(_a,"A",{href:!0});var np=a(Ao);il=i(np,"PreTrainedModel"),np.forEach(o),dl=i(_a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_a.forEach(o),ll=h(ae),co=s(ae,"P",{});var va=a(co);cl=i(va,"This model is also a PyTorch "),po=s(va,"A",{href:!0,rel:!0});var sp=a(po);pl=i(sp,"torch.nn.Module"),sp.forEach(o),hl=i(va,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),va.forEach(o),ml=h(ae),E=s(ae,"DIV",{class:!0});var S=a(E);b(ho.$$.fragment,S),ul=h(S),ye=s(S,"P",{});var Ho=a(ye);fl=i(Ho,"The "),Lo=s(Ho,"A",{href:!0});var ap=a(Lo);gl=i(ap,"MvpForQuestionAnswering"),ap.forEach(o),_l=i(Ho," forward method, overrides the "),Hn=s(Ho,"CODE",{});var rp=a(Hn);vl=i(rp,"__call__"),rp.forEach(o),kl=i(Ho," special method."),Ho.forEach(o),bl=h(S),b(Xe.$$.fragment,S),wl=h(S),Jn=s(S,"P",{});var ip=a(Jn);yl=i(ip,"Example:"),ip.forEach(o),Tl=h(S),Oo=s(S,"P",{});var Ll=a(Oo);Ml=i(Ll,`Fine-tuning a model for extrative question answering, and our model also supports generative question answering
using `),Yn=s(Ll,"CODE",{});var dp=a(Yn);$l=i(dp,"BartForConditionalGeneration"),dp.forEach(o),Ll.forEach(o),zl=h(S),b(Ze.$$.fragment,S),xl=h(S),Xn=s(S,"P",{});var lp=a(Xn);ql=i(lp,"Inference after the model fine-tuned"),lp.forEach(o),Cl=h(S),b(Ke.$$.fragment,S),S.forEach(o),ae.forEach(o),Ns=h(t),Te=s(t,"H2",{class:!0});var ka=a(Te);et=s(ka,"A",{id:!0,class:!0,href:!0});var cp=a(et);Zn=s(cp,"SPAN",{});var pp=a(Zn);b(mo.$$.fragment,pp),pp.forEach(o),cp.forEach(o),Fl=h(ka),Kn=s(ka,"SPAN",{});var hp=a(Kn);Pl=i(hp,"MvpForCausalLM"),hp.forEach(o),ka.forEach(o),Ds=h(t),Me=s(t,"DIV",{class:!0});var ba=a(Me);b(uo.$$.fragment,ba),jl=h(ba),tt=s(ba,"DIV",{class:!0});var wa=a(tt);b(fo.$$.fragment,wa),El=h(wa),b(ot.$$.fragment,wa),wa.forEach(o),ba.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(Lp)),m(f,"id","mvp"),m(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(f,"href","#mvp"),m(l,"class","relative group"),m(Y,"id","overview"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#overview"),m(W,"class","relative group"),m(lt,"href","https://arxiv.org/abs/2206.12131"),m(lt,"rel","nofollow"),m(pt,"href","https://huggingface.co/models?filter=mvp"),m(pt,"rel","nofollow"),m(ut,"href","https://arxiv.org/abs/2101.00190"),m(ut,"rel","nofollow"),m(ft,"href","https://huggingface.co/StevenTang"),m(ft,"rel","nofollow"),m(gt,"href","https://github.com/RUCAIBox/MVP"),m(gt,"rel","nofollow"),m(ze,"id","examples"),m(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ze,"href","#examples"),m(de,"class","relative group"),m(bt,"href","https://arxiv.org/abs/2101.00190"),m(bt,"rel","nofollow"),m(xe,"id","transformers.MvpConfig"),m(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xe,"href","#transformers.MvpConfig"),m(le,"class","relative group"),m(yo,"href","/docs/transformers/main/en/model_doc/mvp#transformers.MvpModel"),m(Mt,"href","https://huggingface.co/RUCAIBox/mvp"),m(Mt,"rel","nofollow"),m(To,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Mo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"id","transformers.MvpTokenizer"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#transformers.MvpTokenizer"),m(he,"class","relative group"),m($o,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"id","transformers.MvpTokenizerFast"),m(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ae,"href","#transformers.MvpTokenizerFast"),m(me,"class","relative group"),m(qo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"id","transformers.MvpModel"),m(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ne,"href","#transformers.MvpModel"),m(ue,"class","relative group"),m(Co,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Rt,"rel","nofollow"),m(Fo,"href","/docs/transformers/main/en/model_doc/mvp#transformers.MvpModel"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"id","transformers.MvpForConditionalGeneration"),m(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ue,"href","#transformers.MvpForConditionalGeneration"),m(ge,"class","relative group"),m(Po,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Xt,"rel","nofollow"),m(jo,"href","/docs/transformers/main/en/model_doc/mvp#transformers.MvpForConditionalGeneration"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.MvpForSequenceClassification"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.MvpForSequenceClassification"),m(ve,"class","relative group"),m(Eo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(no,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(no,"rel","nofollow"),m(Io,"href","/docs/transformers/main/en/model_doc/mvp#transformers.MvpForSequenceClassification"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"id","transformers.MvpForQuestionAnswering"),m(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ye,"href","#transformers.MvpForQuestionAnswering"),m(be,"class","relative group"),m(Ao,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(po,"rel","nofollow"),m(Lo,"href","/docs/transformers/main/en/model_doc/mvp#transformers.MvpForQuestionAnswering"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"id","transformers.MvpForCausalLM"),m(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(et,"href","#transformers.MvpForCausalLM"),m(Te,"class","relative group"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),v(t,g,u),v(t,l,u),e(l,f),e(f,$),w(c,$,null),e(l,_),e(l,q),e(q,re),v(t,U,u),v(t,W,u),e(W,Y),e(Y,Yo),w(dt,Yo,null),e(W,ya),e(W,Xo),e(Xo,Ta),v(t,ms,u),v(t,$e,u),e($e,Ma),e($e,lt),e(lt,$a),e($e,za),v(t,us,u),v(t,ko,u),e(ko,xa),v(t,fs,u),v(t,Q,u),e(Q,Zo),e(Zo,qa),e(Q,Ca),e(Q,Ko),e(Ko,Fa),e(Q,Pa),e(Q,en),e(en,ja),e(Q,Ea),e(Q,tn),e(tn,Ia),v(t,gs,u),v(t,bo,u),e(bo,Aa),v(t,_s,u),v(t,H,u),e(H,ct),e(ct,La),e(ct,pt),e(pt,Oa),e(ct,Sa),e(H,Na),e(H,ht),e(ht,Da),e(ht,on),e(on,Ba),e(ht,Ua),e(H,Va),e(H,mt),e(mt,Ga),e(mt,nn),e(nn,Ra),e(mt,Wa),e(H,Qa),e(H,ie),e(ie,Ha),e(ie,ut),e(ut,Ja),e(ie,Ya),e(ie,sn),e(sn,Xa),e(ie,Za),v(t,vs,u),v(t,te,u),e(te,Ka),e(te,ft),e(ft,er),e(te,tr),e(te,gt),e(gt,or),e(te,nr),v(t,ks,u),v(t,de,u),e(de,ze),e(ze,an),w(_t,an,null),e(de,sr),e(de,rn),e(rn,ar),v(t,bs,u),w(vt,t,u),v(t,ws,u),v(t,wo,u),e(wo,rr),v(t,ys,u),w(kt,t,u),v(t,Ts,u),v(t,oe,u),e(oe,ir),e(oe,dn),e(dn,dr),e(oe,lr),e(oe,bt),e(bt,cr),e(oe,pr),v(t,Ms,u),w(wt,t,u),v(t,$s,u),v(t,le,u),e(le,xe),e(xe,ln),w(yt,ln,null),e(le,hr),e(le,cn),e(cn,mr),v(t,zs,u),v(t,V,u),w(Tt,V,null),e(V,ur),e(V,ce),e(ce,fr),e(ce,yo),e(yo,gr),e(ce,_r),e(ce,Mt),e(Mt,vr),e(ce,kr),e(V,br),e(V,pe),e(pe,wr),e(pe,To),e(To,yr),e(pe,Tr),e(pe,Mo),e(Mo,Mr),e(pe,$r),e(V,zr),w(qe,V,null),v(t,xs,u),v(t,he,u),e(he,Ce),e(Ce,pn),w($t,pn,null),e(he,xr),e(he,hn),e(hn,qr),v(t,qs,u),v(t,x,u),w(zt,x,null),e(x,Cr),e(x,mn),e(mn,Fr),e(x,Pr),e(x,un),e(un,jr),e(x,Er),w(Fe,x,null),e(x,Ir),e(x,xt),e(xt,Ar),e(xt,fn),e(fn,Lr),e(xt,Or),e(x,Sr),w(Pe,x,null),e(x,Nr),e(x,qt),e(qt,Dr),e(qt,$o),e($o,Br),e(qt,Ur),e(x,Vr),e(x,ne),w(Ct,ne,null),e(ne,Gr),e(ne,gn),e(gn,Rr),e(ne,Wr),e(ne,Ft),e(Ft,zo),e(zo,Qr),e(zo,_n),e(_n,Hr),e(Ft,Jr),e(Ft,xo),e(xo,Yr),e(xo,vn),e(vn,Xr),e(x,Zr),e(x,je),w(Pt,je,null),e(je,Kr),e(je,kn),e(kn,ei),e(x,ti),e(x,Ee),w(jt,Ee,null),e(Ee,oi),e(Ee,bn),e(bn,ni),e(x,si),e(x,Ie),w(Et,Ie,null),e(Ie,ai),e(Ie,It),e(It,ri),e(It,wn),e(wn,ii),e(It,di),v(t,Cs,u),v(t,me,u),e(me,Ae),e(Ae,yn),w(At,yn,null),e(me,li),e(me,Tn),e(Tn,ci),v(t,Fs,u),v(t,F,u),w(Lt,F,null),e(F,pi),e(F,Ot),e(Ot,hi),e(Ot,Mn),e(Mn,mi),e(Ot,ui),e(F,fi),e(F,$n),e($n,gi),e(F,_i),w(Le,F,null),e(F,vi),e(F,St),e(St,ki),e(St,zn),e(zn,bi),e(St,wi),e(F,yi),w(Oe,F,null),e(F,Ti),e(F,Nt),e(Nt,Mi),e(Nt,qo),e(qo,$i),e(Nt,zi),e(F,xi),e(F,Se),w(Dt,Se,null),e(Se,qi),e(Se,xn),e(xn,Ci),v(t,Ps,u),v(t,ue,u),e(ue,Ne),e(Ne,qn),w(Bt,qn,null),e(ue,Fi),e(ue,Cn),e(Cn,Pi),v(t,js,u),v(t,G,u),w(Ut,G,null),e(G,ji),e(G,Vt),e(Vt,Ei),e(Vt,Co),e(Co,Ii),e(Vt,Ai),e(G,Li),e(G,Gt),e(Gt,Oi),e(Gt,Rt),e(Rt,Si),e(Gt,Ni),e(G,Di),e(G,J),w(Wt,J,null),e(J,Bi),e(J,fe),e(fe,Ui),e(fe,Fo),e(Fo,Vi),e(fe,Gi),e(fe,Fn),e(Fn,Ri),e(fe,Wi),e(J,Qi),w(De,J,null),e(J,Hi),w(Be,J,null),v(t,Es,u),v(t,ge,u),e(ge,Ue),e(Ue,Pn),w(Qt,Pn,null),e(ge,Ji),e(ge,jn),e(jn,Yi),v(t,Is,u),v(t,R,u),w(Ht,R,null),e(R,Xi),e(R,Jt),e(Jt,Zi),e(Jt,Po),e(Po,Ki),e(Jt,ed),e(R,td),e(R,Yt),e(Yt,od),e(Yt,Xt),e(Xt,nd),e(Yt,sd),e(R,ad),e(R,P),w(Zt,P,null),e(P,rd),e(P,_e),e(_e,id),e(_e,jo),e(jo,dd),e(_e,ld),e(_e,En),e(En,cd),e(_e,pd),e(P,hd),w(Ve,P,null),e(P,md),e(P,In),e(In,ud),e(P,fd),e(P,An),e(An,gd),e(P,_d),w(Ge,P,null),e(P,vd),e(P,Ln),e(Ln,kd),e(P,bd),w(Re,P,null),v(t,As,u),v(t,ve,u),e(ve,We),e(We,On),w(Kt,On,null),e(ve,wd),e(ve,Sn),e(Sn,yd),v(t,Ls,u),v(t,N,u),w(eo,N,null),e(N,Td),e(N,Nn),e(Nn,Md),e(N,$d),e(N,to),e(to,zd),e(to,Eo),e(Eo,xd),e(to,qd),e(N,Cd),e(N,oo),e(oo,Fd),e(oo,no),e(no,Pd),e(oo,jd),e(N,Ed),e(N,j),w(so,j,null),e(j,Id),e(j,ke),e(ke,Ad),e(ke,Io),e(Io,Ld),e(ke,Od),e(ke,Dn),e(Dn,Sd),e(ke,Nd),e(j,Dd),w(Qe,j,null),e(j,Bd),e(j,Bn),e(Bn,Ud),e(j,Vd),e(j,ao),e(ao,Gd),e(ao,Un),e(Un,Rd),e(ao,Wd),e(j,Qd),w(He,j,null),e(j,Hd),e(j,Vn),e(Vn,Jd),e(j,Yd),w(Je,j,null),v(t,Os,u),v(t,be,u),e(be,Ye),e(Ye,Gn),w(ro,Gn,null),e(be,Xd),e(be,Rn),e(Rn,Zd),v(t,Ss,u),v(t,D,u),w(io,D,null),e(D,Kd),e(D,we),e(we,el),e(we,Wn),e(Wn,tl),e(we,ol),e(we,Qn),e(Qn,nl),e(we,sl),e(D,al),e(D,lo),e(lo,rl),e(lo,Ao),e(Ao,il),e(lo,dl),e(D,ll),e(D,co),e(co,cl),e(co,po),e(po,pl),e(co,hl),e(D,ml),e(D,E),w(ho,E,null),e(E,ul),e(E,ye),e(ye,fl),e(ye,Lo),e(Lo,gl),e(ye,_l),e(ye,Hn),e(Hn,vl),e(ye,kl),e(E,bl),w(Xe,E,null),e(E,wl),e(E,Jn),e(Jn,yl),e(E,Tl),e(E,Oo),e(Oo,Ml),e(Oo,Yn),e(Yn,$l),e(E,zl),w(Ze,E,null),e(E,xl),e(E,Xn),e(Xn,ql),e(E,Cl),w(Ke,E,null),v(t,Ns,u),v(t,Te,u),e(Te,et),e(et,Zn),w(mo,Zn,null),e(Te,Fl),e(Te,Kn),e(Kn,Pl),v(t,Ds,u),v(t,Me,u),w(uo,Me,null),e(Me,jl),e(Me,tt),w(fo,tt,null),e(tt,El),w(ot,tt,null),Bs=!0},p(t,[u]){const go={};u&2&&(go.$$scope={dirty:u,ctx:t}),qe.$set(go);const es={};u&2&&(es.$$scope={dirty:u,ctx:t}),Fe.$set(es);const ts={};u&2&&(ts.$$scope={dirty:u,ctx:t}),Pe.$set(ts);const os={};u&2&&(os.$$scope={dirty:u,ctx:t}),Le.$set(os);const _o={};u&2&&(_o.$$scope={dirty:u,ctx:t}),Oe.$set(_o);const ns={};u&2&&(ns.$$scope={dirty:u,ctx:t}),De.$set(ns);const ss={};u&2&&(ss.$$scope={dirty:u,ctx:t}),Be.$set(ss);const as={};u&2&&(as.$$scope={dirty:u,ctx:t}),Ve.$set(as);const vo={};u&2&&(vo.$$scope={dirty:u,ctx:t}),Ge.$set(vo);const rs={};u&2&&(rs.$$scope={dirty:u,ctx:t}),Re.$set(rs);const is={};u&2&&(is.$$scope={dirty:u,ctx:t}),Qe.$set(is);const X={};u&2&&(X.$$scope={dirty:u,ctx:t}),He.$set(X);const ds={};u&2&&(ds.$$scope={dirty:u,ctx:t}),Je.$set(ds);const ls={};u&2&&(ls.$$scope={dirty:u,ctx:t}),Xe.$set(ls);const cs={};u&2&&(cs.$$scope={dirty:u,ctx:t}),Ze.$set(cs);const ps={};u&2&&(ps.$$scope={dirty:u,ctx:t}),Ke.$set(ps);const hs={};u&2&&(hs.$$scope={dirty:u,ctx:t}),ot.$set(hs)},i(t){Bs||(y(c.$$.fragment,t),y(dt.$$.fragment,t),y(_t.$$.fragment,t),y(vt.$$.fragment,t),y(kt.$$.fragment,t),y(wt.$$.fragment,t),y(yt.$$.fragment,t),y(Tt.$$.fragment,t),y(qe.$$.fragment,t),y($t.$$.fragment,t),y(zt.$$.fragment,t),y(Fe.$$.fragment,t),y(Pe.$$.fragment,t),y(Ct.$$.fragment,t),y(Pt.$$.fragment,t),y(jt.$$.fragment,t),y(Et.$$.fragment,t),y(At.$$.fragment,t),y(Lt.$$.fragment,t),y(Le.$$.fragment,t),y(Oe.$$.fragment,t),y(Dt.$$.fragment,t),y(Bt.$$.fragment,t),y(Ut.$$.fragment,t),y(Wt.$$.fragment,t),y(De.$$.fragment,t),y(Be.$$.fragment,t),y(Qt.$$.fragment,t),y(Ht.$$.fragment,t),y(Zt.$$.fragment,t),y(Ve.$$.fragment,t),y(Ge.$$.fragment,t),y(Re.$$.fragment,t),y(Kt.$$.fragment,t),y(eo.$$.fragment,t),y(so.$$.fragment,t),y(Qe.$$.fragment,t),y(He.$$.fragment,t),y(Je.$$.fragment,t),y(ro.$$.fragment,t),y(io.$$.fragment,t),y(ho.$$.fragment,t),y(Xe.$$.fragment,t),y(Ze.$$.fragment,t),y(Ke.$$.fragment,t),y(mo.$$.fragment,t),y(uo.$$.fragment,t),y(fo.$$.fragment,t),y(ot.$$.fragment,t),Bs=!0)},o(t){T(c.$$.fragment,t),T(dt.$$.fragment,t),T(_t.$$.fragment,t),T(vt.$$.fragment,t),T(kt.$$.fragment,t),T(wt.$$.fragment,t),T(yt.$$.fragment,t),T(Tt.$$.fragment,t),T(qe.$$.fragment,t),T($t.$$.fragment,t),T(zt.$$.fragment,t),T(Fe.$$.fragment,t),T(Pe.$$.fragment,t),T(Ct.$$.fragment,t),T(Pt.$$.fragment,t),T(jt.$$.fragment,t),T(Et.$$.fragment,t),T(At.$$.fragment,t),T(Lt.$$.fragment,t),T(Le.$$.fragment,t),T(Oe.$$.fragment,t),T(Dt.$$.fragment,t),T(Bt.$$.fragment,t),T(Ut.$$.fragment,t),T(Wt.$$.fragment,t),T(De.$$.fragment,t),T(Be.$$.fragment,t),T(Qt.$$.fragment,t),T(Ht.$$.fragment,t),T(Zt.$$.fragment,t),T(Ve.$$.fragment,t),T(Ge.$$.fragment,t),T(Re.$$.fragment,t),T(Kt.$$.fragment,t),T(eo.$$.fragment,t),T(so.$$.fragment,t),T(Qe.$$.fragment,t),T(He.$$.fragment,t),T(Je.$$.fragment,t),T(ro.$$.fragment,t),T(io.$$.fragment,t),T(ho.$$.fragment,t),T(Xe.$$.fragment,t),T(Ze.$$.fragment,t),T(Ke.$$.fragment,t),T(mo.$$.fragment,t),T(uo.$$.fragment,t),T(fo.$$.fragment,t),T(ot.$$.fragment,t),Bs=!1},d(t){o(d),t&&o(g),t&&o(l),M(c),t&&o(U),t&&o(W),M(dt),t&&o(ms),t&&o($e),t&&o(us),t&&o(ko),t&&o(fs),t&&o(Q),t&&o(gs),t&&o(bo),t&&o(_s),t&&o(H),t&&o(vs),t&&o(te),t&&o(ks),t&&o(de),M(_t),t&&o(bs),M(vt,t),t&&o(ws),t&&o(wo),t&&o(ys),M(kt,t),t&&o(Ts),t&&o(oe),t&&o(Ms),M(wt,t),t&&o($s),t&&o(le),M(yt),t&&o(zs),t&&o(V),M(Tt),M(qe),t&&o(xs),t&&o(he),M($t),t&&o(qs),t&&o(x),M(zt),M(Fe),M(Pe),M(Ct),M(Pt),M(jt),M(Et),t&&o(Cs),t&&o(me),M(At),t&&o(Fs),t&&o(F),M(Lt),M(Le),M(Oe),M(Dt),t&&o(Ps),t&&o(ue),M(Bt),t&&o(js),t&&o(G),M(Ut),M(Wt),M(De),M(Be),t&&o(Es),t&&o(ge),M(Qt),t&&o(Is),t&&o(R),M(Ht),M(Zt),M(Ve),M(Ge),M(Re),t&&o(As),t&&o(ve),M(Kt),t&&o(Ls),t&&o(N),M(eo),M(so),M(Qe),M(He),M(Je),t&&o(Os),t&&o(be),M(ro),t&&o(Ss),t&&o(D),M(io),M(ho),M(Xe),M(Ze),M(Ke),t&&o(Ns),t&&o(Te),M(mo),t&&o(Ds),t&&o(Me),M(uo),M(fo),M(ot)}}}const Lp={local:"mvp",sections:[{local:"overview",title:"Overview"},{local:"examples",title:"Examples"},{local:"transformers.MvpConfig",title:"MvpConfig"},{local:"transformers.MvpTokenizer",title:"MvpTokenizer"},{local:"transformers.MvpTokenizerFast",title:"MvpTokenizerFast"},{local:"transformers.MvpModel",title:"MvpModel"},{local:"transformers.MvpForConditionalGeneration",title:"MvpForConditionalGeneration"},{local:"transformers.MvpForSequenceClassification",title:"MvpForSequenceClassification"},{local:"transformers.MvpForQuestionAnswering",title:"MvpForQuestionAnswering"},{local:"transformers.MvpForCausalLM",title:"MvpForCausalLM"}],title:"MVP"};function Op(z){return _p(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gp extends mp{constructor(d){super();up(this,d,Op,Ap,fp,{})}}export{Gp as default,Lp as metadata};
