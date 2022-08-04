import{S as BM,i as jM,s as EM,e as a,k as p,w as v,t as i,M as CM,c as s,d as t,m as u,a as r,x as y,h as d,b as f,G as e,g as b,y as T,q as w,o as M,B as $,v as PM,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as at}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as B}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as R}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as C}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function SM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function AM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function OM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function IM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function NM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function DM(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function LM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function GM(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function WM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro")

example_english_phrase = "42 is the answer"
inputs = tokenizer(example_english_phrase, return_tensors="pt")

# Translate
generated_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;42 is the answer&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Translate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),{c(){l=a("p"),k=i("Translation example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Translation example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function UM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function RM(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function XM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForQuestionAnswering.from_pretrained("hf-internal-testing/tiny-random-mbart")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;? Jim Henson was a&#x27;</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function QM(x){let l,k;return l=new B({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.55</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function HM(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function VM(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of single-label classification:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function JM(x){let l,k;return l=new B({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function KM(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of multi-label classification:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function ZM(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-mbart", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function YM(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function e$(x){let l,k,m,c,g,n,h,q,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,_e,Qe,ae,ge,be,ut,se,ke,ve,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),he=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ut=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ye=r(c);g=s(ye,"LI",{});var De=r(g);n=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),h=u(ye),q=s(ye,"LI",{});var jt=r(q);st=d(jt,"having all inputs as a list, tuple or dict in the first positional arguments."),jt.forEach(t),ye.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Et=r(he);rt=d(Et,"tf.keras.Model.fit"),Et.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ne=u(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Ct=r(le);ce=d(Ct,"input_ids"),Ct.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var Pt=r(H);ct=d(Pt,"model(input_ids)"),Pt.forEach(t),ie.forEach(t),pt=u(re),G=s(re,"LI",{});var de=r(G);Fe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(de,"CODE",{});var St=r(_e);Qe=d(St,"model([input_ids, attention_mask])"),St.forEach(t),ae=d(de," or "),ge=s(de,"CODE",{});var At=r(ge);be=d(At,"model([input_ids, attention_mask, token_type_ids])"),At.forEach(t),de.forEach(t),ut=u(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=s(Le,"CODE",{});var Ot=r(ve);He=d(Ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ot.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,he),e(he,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,ne,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,Fe),e(G,_e),e(_e,Qe),e(G,ae),e(G,ge),e(ge,be),e(S,ut),e(S,se),e(se,ke),e(se,ve),e(ve,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(ne),z&&t(S)}}}function t$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function o$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function n$(x){let l,k,m,c,g,n,h,q,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,_e,Qe,ae,ge,be,ut,se,ke,ve,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),he=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ut=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ye=r(c);g=s(ye,"LI",{});var De=r(g);n=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),h=u(ye),q=s(ye,"LI",{});var jt=r(q);st=d(jt,"having all inputs as a list, tuple or dict in the first positional arguments."),jt.forEach(t),ye.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Et=r(he);rt=d(Et,"tf.keras.Model.fit"),Et.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ne=u(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Ct=r(le);ce=d(Ct,"input_ids"),Ct.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var Pt=r(H);ct=d(Pt,"model(input_ids)"),Pt.forEach(t),ie.forEach(t),pt=u(re),G=s(re,"LI",{});var de=r(G);Fe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(de,"CODE",{});var St=r(_e);Qe=d(St,"model([input_ids, attention_mask])"),St.forEach(t),ae=d(de," or "),ge=s(de,"CODE",{});var At=r(ge);be=d(At,"model([input_ids, attention_mask, token_type_ids])"),At.forEach(t),de.forEach(t),ut=u(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=s(Le,"CODE",{});var Ot=r(ve);He=d(Ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ot.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,he),e(he,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,ne,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,Fe),e(G,_e),e(_e,Qe),e(G,ae),e(G,ge),e(ge,be),e(S,ut),e(S,se),e(se,ke),e(se,ve),e(ve,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(ne),z&&t(S)}}}function a$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function s$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function r$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function i$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function d$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function l$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function c$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function p$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function u$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function h$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="np")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function m$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function f$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function _$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function g$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function b$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function k$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function v$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function y$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function T$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function w$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),v(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),y(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function M$(x){let l,k,m,c,g,n,h,q,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,_e,Qe,ae,ge,be,ut,se,ke,ve,He,z,j,ye,De,jt,V,Et,bt,X,re,ie,Ct,Pt,de,St,At,Le,Ot,Bh,ad,jh,Eh,ip,kt,Ch,_a,sd,Ph,Sh,Ah,li,Oh,Ih,dp,ci,rd,Nh,lp,ga,cp,pi,ba,id,Dh,Lh,It,Gh,dd,Wh,Uh,ld,Rh,Xh,pp,ka,up,Nt,Mo,cd,va,Qh,pd,Hh,hp,vt,Vh,ya,Jh,Kh,ud,Zh,Yh,mp,ui,em,fp,hi,hd,tm,_p,Dt,$o,md,Ta,om,fd,nm,gp,Ve,am,_d,sm,rm,gd,im,dm,bd,lm,cm,bp,xo,pm,mi,um,hm,kp,fi,kd,mm,vp,wa,yp,_i,Ma,vd,fm,_m,Te,gm,yd,bm,km,Td,vm,ym,wd,Tm,wm,Md,Mm,$m,$d,xm,zm,Tp,$a,wp,Lt,zo,xd,xa,Fm,zd,qm,Mp,Ge,za,Bm,Gt,jm,gi,Em,Cm,Fa,Pm,Sm,Am,Wt,Om,bi,Im,Nm,ki,Dm,Lm,Gm,Fo,$p,Ut,qo,Fd,qa,Wm,qd,Um,xp,J,Ba,Rm,Bd,Xm,Qm,ht,Hm,vi,Vm,Jm,yi,Km,Zm,ja,Ym,ef,tf,Ea,of,jd,nf,af,sf,Bo,rf,jo,Ca,df,Ed,lf,cf,Je,Pa,pf,Sa,uf,Cd,hf,mf,ff,Aa,Oa,Pd,_f,gf,Sd,bf,kf,Ia,Ad,vf,yf,Od,Tf,wf,Id,Mf,zp,Rt,Eo,Nd,Na,$f,Dd,xf,Fp,O,Da,zf,Xt,Ff,Ld,qf,Bf,La,jf,Ef,Cf,Ga,Pf,Ti,Sf,Af,Of,Wa,If,Gd,Nf,Df,Lf,Co,Gf,qe,Ua,Wf,Wd,Uf,Rf,Ra,Xf,Ud,Qf,Hf,Vf,Xa,Qa,Rd,Jf,Kf,Xd,Zf,Yf,Ha,Qd,e_,t_,Hd,o_,n_,Vd,a_,s_,Po,Va,r_,Jd,i_,d_,So,Ja,l_,Kd,c_,p_,Ao,Ka,u_,Zd,h_,qp,Qt,Oo,Yd,Za,m_,el,f_,Bp,I,Ya,__,es,g_,ts,b_,k_,v_,os,y_,wi,T_,w_,M_,Io,$_,Ke,ns,x_,as,z_,tl,F_,q_,B_,ss,rs,ol,j_,E_,nl,C_,P_,is,al,S_,A_,sl,O_,I_,rl,N_,D_,No,ds,L_,il,G_,W_,Do,ls,U_,cs,R_,dl,X_,Q_,H_,Lo,ps,V_,ll,J_,K_,Go,us,Z_,cl,Y_,jp,Ht,Wo,pl,hs,eg,ul,tg,Ep,K,ms,og,Vt,ng,hl,ag,sg,fs,rg,ig,dg,_s,lg,Mi,cg,pg,ug,Uo,hg,Be,gs,mg,ml,fg,_g,bs,gg,fl,bg,kg,vg,ks,vs,_l,yg,Tg,gl,wg,Mg,ys,bl,$g,xg,kl,zg,Fg,vl,qg,Bg,Ro,Ts,jg,yl,Eg,Cg,Xo,ws,Pg,Tl,Sg,Cp,Jt,Qo,wl,Ms,Ag,Ml,Og,Pp,We,$s,Ig,xs,Ng,$i,Dg,Lg,Gg,zs,Wg,Fs,Ug,Rg,Xg,Ze,qs,Qg,Kt,Hg,xi,Vg,Jg,$l,Kg,Zg,Yg,Ho,eb,Vo,Sp,Zt,Jo,xl,Bs,tb,zl,ob,Ap,Ue,js,nb,Es,ab,zi,sb,rb,ib,Cs,db,Ps,lb,cb,pb,je,Ss,ub,Yt,hb,Fi,mb,fb,Fl,_b,gb,bb,Ko,kb,Zo,vb,Yo,Op,eo,en,ql,As,yb,Bl,Tb,Ip,we,Os,wb,to,Mb,jl,$b,xb,El,zb,Fb,qb,Is,Bb,qi,jb,Eb,Cb,Ns,Pb,Ds,Sb,Ab,Ob,Ee,Ls,Ib,oo,Nb,Bi,Db,Lb,Cl,Gb,Wb,Ub,tn,Rb,on,Xb,nn,Np,no,an,Pl,Gs,Qb,Sl,Hb,Dp,Me,Ws,Vb,Al,Jb,Kb,Us,Zb,ji,Yb,ek,tk,Rs,ok,Xs,nk,ak,sk,Z,Qs,rk,ao,ik,Ei,dk,lk,Ol,ck,pk,uk,sn,hk,rn,mk,dn,fk,ln,_k,cn,Lp,so,pn,Il,Hs,gk,Nl,bk,Gp,ro,Vs,kk,un,Js,vk,hn,Wp,io,mn,Dl,Ks,yk,Ll,Tk,Up,$e,Zs,wk,Ys,Mk,Ci,$k,xk,zk,er,Fk,tr,qk,Bk,jk,fn,Ek,Ye,or,Ck,lo,Pk,Pi,Sk,Ak,Gl,Ok,Ik,Nk,_n,Dk,gn,Rp,co,bn,Wl,nr,Lk,Ul,Gk,Xp,xe,ar,Wk,sr,Uk,Si,Rk,Xk,Qk,rr,Hk,ir,Vk,Jk,Kk,kn,Zk,Ce,dr,Yk,po,ev,Ai,tv,ov,Rl,nv,av,sv,vn,rv,yn,iv,Tn,Qp,uo,wn,Xl,lr,dv,Ql,lv,Hp,W,cr,cv,pr,pv,Oi,uv,hv,mv,ur,fv,hr,_v,gv,bv,Hl,kv,vv,mt,Vl,mr,yv,Tv,Jl,fr,wv,Mv,Kl,_r,$v,xv,Zl,gr,zv,Fv,et,br,qv,ho,Bv,Yl,jv,Ev,ec,Cv,Pv,Sv,Mn,Av,$n,Ov,xn,kr,Iv,zn,Nv,Fn,vr,Dv,qn,Vp,mo,Bn,tc,yr,Lv,oc,Gv,Jp,U,Tr,Wv,wr,Uv,Ii,Rv,Xv,Qv,Mr,Hv,$r,Vv,Jv,Kv,nc,Zv,Yv,ft,ac,xr,ey,ty,sc,zr,oy,ny,rc,Fr,ay,sy,ic,qr,ry,iy,Pe,Br,dy,fo,ly,dc,cy,py,lc,uy,hy,my,jn,fy,En,_y,Cn,gy,Pn,jr,by,Sn,ky,An,Er,vy,On,Kp,_o,In,cc,Cr,yy,pc,Ty,Zp,N,Pr,wy,uc,My,$y,Sr,xy,Ni,zy,Fy,qy,Ar,By,Or,jy,Ey,Cy,hc,Py,Sy,_t,mc,Ir,Ay,Oy,fc,Nr,Iy,Ny,_c,Dr,Dy,Ly,gc,Lr,Gy,Wy,tt,Gr,Uy,go,Ry,bc,Xy,Qy,kc,Hy,Vy,Jy,Nn,Ky,Dn,Zy,Ln,Wr,Yy,Gn,e1,Wn,Ur,t1,Un,Yp,bo,Rn,vc,Rr,o1,yc,n1,eu,D,Xr,a1,ko,s1,Tc,r1,i1,wc,d1,l1,c1,Qr,p1,Di,u1,h1,m1,Hr,f1,Vr,_1,g1,b1,Mc,k1,v1,gt,$c,Jr,y1,T1,xc,Kr,w1,M1,zc,Zr,$1,x1,Fc,Yr,z1,F1,ot,ei,q1,vo,B1,qc,j1,E1,Bc,C1,P1,S1,Xn,A1,Qn,O1,Hn,ti,I1,Vn,N1,Jn,oi,D1,Kn,tu;return n=new R({}),ne=new R({}),De=new R({}),ga=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),ka=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),va=new R({}),Ta=new R({}),wa=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),$a=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = "\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948"
article_ar = "\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627."

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")

# translate Hindi to French
tokenizer.src_lang = "hi_IN"
encoded_hi = tokenizer(article_hi, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id["fr_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "Le chef de l 'ONU affirme qu 'il n 'y a pas de solution militaire en Syria."

# translate Arabic to English
tokenizer.src_lang = "ar_AR"
encoded_ar = tokenizer(article_ar, return_tensors="pt")
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "The Secretary-General of the United Nations says there is no military solution in Syria."`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = <span class="hljs-string">&quot;\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948&quot;</span>
article_ar = <span class="hljs-string">&quot;\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627.&quot;</span>

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)

<span class="hljs-comment"># translate Hindi to French</span>
tokenizer.src_lang = <span class="hljs-string">&quot;hi_IN&quot;</span>
encoded_hi = tokenizer(article_hi, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;Le chef de l &#x27;ONU affirme qu &#x27;il n &#x27;y a pas de solution militaire en Syria.&quot;</span>

<span class="hljs-comment"># translate Arabic to English</span>
tokenizer.src_lang = <span class="hljs-string">&quot;ar_AR&quot;</span>
encoded_ar = tokenizer(article_ar, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),xa=new R({}),za=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/configuration_mbart.py#L34"}}),Fo=new C({props:{anchor:"transformers.MBartConfig.example",$$slots:{default:[SM]},$$scope:{ctx:x}}}),qa=new R({}),Ba=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart.py#L54"}}),Bo=new C({props:{anchor:"transformers.MBartTokenizer.example",$$slots:{default:[AM]},$$scope:{ctx:x}}}),Ca=new F({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart.py#L343"}}),Pa=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart.py#L222",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Na=new R({}),Da=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L64"}}),Co=new C({props:{anchor:"transformers.MBartTokenizerFast.example",$$slots:{default:[OM]},$$scope:{ctx:x}}}),Ua=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L165",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Va=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L194",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ja=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L253"}}),Ka=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L268"}}),Za=new R({}),Ya=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MBart50Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50.py#L50"}}),Io=new C({props:{anchor:"transformers.MBart50Tokenizer.example",$$slots:{default:[IM]},$$scope:{ctx:x}}}),ns=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50.py#L289",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50.py#L238"}}),ls=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50.py#L259",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50.py#L350"}}),us=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50.py#L356"}}),hs=new R({}),ms=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50TokenizerFast.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50TokenizerFast.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L60"}}),Uo=new C({props:{anchor:"transformers.MBart50TokenizerFast.example",$$slots:{default:[NM]},$$scope:{ctx:x}}}),gs=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L173",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L224"}}),ws=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L239"}}),Ms=new R({}),$s=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1145"}}),qs=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),Ho=new at({props:{$$slots:{default:[DM]},$$scope:{ctx:x}}}),Vo=new C({props:{anchor:"transformers.MBartModel.forward.example",$$slots:{default:[LM]},$$scope:{ctx:x}}}),Bs=new R({}),js=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1262"}}),Ss=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1306",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),Ko=new at({props:{$$slots:{default:[GM]},$$scope:{ctx:x}}}),Zo=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example",$$slots:{default:[WM]},$$scope:{ctx:x}}}),Yo=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example-2",$$slots:{default:[UM]},$$scope:{ctx:x}}}),As=new R({}),Os=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1563"}}),Ls=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1575",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new at({props:{$$slots:{default:[RM]},$$scope:{ctx:x}}}),on=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example",$$slots:{default:[XM]},$$scope:{ctx:x}}}),nn=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example-2",$$slots:{default:[QM]},$$scope:{ctx:x}}}),Gs=new R({}),Ws=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1435"}}),Qs=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1448",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new at({props:{$$slots:{default:[HM]},$$scope:{ctx:x}}}),rn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example",$$slots:{default:[VM]},$$scope:{ctx:x}}}),dn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-2",$$slots:{default:[JM]},$$scope:{ctx:x}}}),ln=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-3",$$slots:{default:[KM]},$$scope:{ctx:x}}}),cn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-4",$$slots:{default:[ZM]},$$scope:{ctx:x}}}),Hs=new R({}),Vs=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1696"}}),Js=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_mbart.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),hn=new C({props:{anchor:"transformers.MBartForCausalLM.forward.example",$$slots:{default:[YM]},$$scope:{ctx:x}}}),Ks=new R({}),Zs=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1184"}}),fn=new at({props:{$$slots:{default:[e$]},$$scope:{ctx:x}}}),or=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),_n=new at({props:{$$slots:{default:[t$]},$$scope:{ctx:x}}}),gn=new C({props:{anchor:"transformers.TFMBartModel.call.example",$$slots:{default:[o$]},$$scope:{ctx:x}}}),nr=new R({}),ar=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1273"}}),kn=new at({props:{$$slots:{default:[n$]},$$scope:{ctx:x}}}),dr=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1306",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),vn=new at({props:{$$slots:{default:[a$]},$$scope:{ctx:x}}}),yn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example",$$slots:{default:[s$]},$$scope:{ctx:x}}}),Tn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example-2",$$slots:{default:[r$]},$$scope:{ctx:x}}}),lr=new R({}),cr=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1278"}}),br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),Mn=new at({props:{$$slots:{default:[i$]},$$scope:{ctx:x}}}),$n=new C({props:{anchor:"transformers.FlaxMBartModel.__call__.example",$$slots:{default:[d$]},$$scope:{ctx:x}}}),kr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new C({props:{anchor:"transformers.FlaxMBartModel.encode.example",$$slots:{default:[l$]},$$scope:{ctx:x}}}),vr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qn=new C({props:{anchor:"transformers.FlaxMBartModel.decode.example",$$slots:{default:[c$]},$$scope:{ctx:x}}}),yr=new R({}),Tr=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1365"}}),Br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),jn=new at({props:{$$slots:{default:[p$]},$$scope:{ctx:x}}}),En=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example",$$slots:{default:[u$]},$$scope:{ctx:x}}}),Cn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example-2",$$slots:{default:[h$]},$$scope:{ctx:x}}}),jr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.example",$$slots:{default:[m$]},$$scope:{ctx:x}}}),Er=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1369",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.example",$$slots:{default:[f$]},$$scope:{ctx:x}}}),Cr=new R({}),Pr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1678"}}),Gr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new at({props:{$$slots:{default:[_$]},$$scope:{ctx:x}}}),Dn=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.example",$$slots:{default:[g$]},$$scope:{ctx:x}}}),Wr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gn=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.encode.example",$$slots:{default:[b$]},$$scope:{ctx:x}}}),Ur=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.decode.example",$$slots:{default:[k$]},$$scope:{ctx:x}}}),Rr=new R({}),Xr=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1766"}}),ei=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new at({props:{$$slots:{default:[v$]},$$scope:{ctx:x}}}),Qn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.example",$$slots:{default:[y$]},$$scope:{ctx:x}}}),ti=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.example",$$slots:{default:[T$]},$$scope:{ctx:x}}}),oi=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.example",$$slots:{default:[w$]},$$scope:{ctx:x}}}),{c(){l=a("meta"),k=p(),m=a("h1"),c=a("a"),g=a("span"),v(n.$$.fragment),h=p(),q=a("span"),st=i("MBart and MBart-50"),ze=p(),E=a("p"),Ie=a("strong"),he=i("DISCLAIMER:"),rt=i(" If you see something strange, file a "),me=a("a"),fe=i("Github Issue"),it=i(` and assign
@patrickvonplaten`),Xe=p(),Q=a("h2"),L=a("a"),Ne=a("span"),v(ne.$$.fragment),S=p(),A=a("span"),dt=i("Overview of MBart"),le=p(),ce=a("p"),lt=i("The MBart model was presented in "),H=a("a"),ct=i("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=i(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),G=p(),Fe=a("p"),_e=i(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Qe=p(),ae=a("p"),ge=i("This model was contributed by "),be=a("a"),ut=i("valhalla"),se=i(". The Authors\u2019 code can be found "),ke=a("a"),ve=i("here"),He=p(),z=a("h3"),j=a("a"),ye=a("span"),v(De.$$.fragment),jt=p(),V=a("span"),Et=i("Training of MBart"),bt=p(),X=a("p"),re=i(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=a("code"),Ct=i("X [eos, src_lang_code]"),Pt=i(" where "),de=a("code"),St=i("X"),At=i(` is the source text. The
target text format is `),Le=a("code"),Ot=i("[tgt_lang_code] X [eos]"),Bh=i(". "),ad=a("code"),jh=i("bos"),Eh=i(" is never used."),ip=p(),kt=a("p"),Ch=i("The regular "),_a=a("a"),sd=a("strong"),Ph=i("call"),Sh=i("()"),Ah=i(` will encode source text format, and it should be wrapped
inside the context manager `),li=a("a"),Oh=i("as_target_tokenizer()"),Ih=i(" to encode target text format."),dp=p(),ci=a("ul"),rd=a("li"),Nh=i("Supervised training"),lp=p(),v(ga.$$.fragment),cp=p(),pi=a("ul"),ba=a("li"),id=a("p"),Dh=i("Generation"),Lh=p(),It=a("p"),Gh=i("While generating the target text set the "),dd=a("code"),Wh=i("decoder_start_token_id"),Uh=i(` to the target language id. The following
example shows how to translate English to Romanian using the `),ld=a("em"),Rh=i("facebook/mbart-large-en-ro"),Xh=i(" model."),pp=p(),v(ka.$$.fragment),up=p(),Nt=a("h2"),Mo=a("a"),cd=a("span"),v(va.$$.fragment),Qh=p(),pd=a("span"),Hh=i("Overview of MBart-50"),hp=p(),vt=a("p"),Vh=i("MBart-50 was introduced in the "),ya=a("a"),Jh=i("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Kh=i(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),ud=a("em"),Zh=i("mbart-large-cc25"),Yh=i(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),mp=p(),ui=a("p"),em=i("According to the abstract"),fp=p(),hi=a("p"),hd=a("em"),tm=i(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),_p=p(),Dt=a("h3"),$o=a("a"),md=a("span"),v(Ta.$$.fragment),om=p(),fd=a("span"),nm=i("Training of MBart-50"),gp=p(),Ve=a("p"),am=i(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),_d=a("code"),sm=i("[lang_code] X [eos]"),rm=i(", where "),gd=a("code"),im=i("lang_code"),dm=i(` is source
language id for source text and target language id for target text, with `),bd=a("code"),lm=i("X"),cm=i(` being the source or target text
respectively.`),bp=p(),xo=a("p"),pm=i("MBart-50 has its own tokenizer "),mi=a("a"),um=i("MBart50Tokenizer"),hm=i("."),kp=p(),fi=a("ul"),kd=a("li"),mm=i("Supervised training"),vp=p(),v(wa.$$.fragment),yp=p(),_i=a("ul"),Ma=a("li"),vd=a("p"),fm=i("Generation"),_m=p(),Te=a("p"),gm=i("To generate using the mBART-50 multilingual translation models, "),yd=a("code"),bm=i("eos_token_id"),km=i(` is used as the
`),Td=a("code"),vm=i("decoder_start_token_id"),ym=i(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=a("em"),Tm=i("forced_bos_token_id"),wm=i(" parameter to the "),Md=a("em"),Mm=i("generate"),$m=i(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),$d=a("em"),xm=i("facebook/mbart-50-large-many-to-many"),zm=i(" checkpoint."),Tp=p(),v($a.$$.fragment),wp=p(),Lt=a("h2"),zo=a("a"),xd=a("span"),v(xa.$$.fragment),Fm=p(),zd=a("span"),qm=i("MBartConfig"),Mp=p(),Ge=a("div"),v(za.$$.fragment),Bm=p(),Gt=a("p"),jm=i("This is the configuration class to store the configuration of a "),gi=a("a"),Em=i("MBartModel"),Cm=i(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Fa=a("a"),Pm=i("facebook/mbart-large-cc25"),Sm=i(" architecture."),Am=p(),Wt=a("p"),Om=i("Configuration objects inherit from "),bi=a("a"),Im=i("PretrainedConfig"),Nm=i(` and can be used to control the model outputs. Read the
documentation from `),ki=a("a"),Dm=i("PretrainedConfig"),Lm=i(" for more information."),Gm=p(),v(Fo.$$.fragment),$p=p(),Ut=a("h2"),qo=a("a"),Fd=a("span"),v(qa.$$.fragment),Wm=p(),qd=a("span"),Um=i("MBartTokenizer"),xp=p(),J=a("div"),v(Ba.$$.fragment),Rm=p(),Bd=a("p"),Xm=i("Construct an MBART tokenizer."),Qm=p(),ht=a("p"),Hm=i("Adapted from "),vi=a("a"),Vm=i("RobertaTokenizer"),Jm=i(" and "),yi=a("a"),Km=i("XLNetTokenizer"),Zm=i(`. Based on
`),ja=a("a"),Ym=i("SentencePiece"),ef=i("."),tf=p(),Ea=a("p"),of=i("The tokenization method is "),jd=a("code"),nf=i("<tokens> <eos> <language code>"),af=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),sf=p(),v(Bo.$$.fragment),rf=p(),jo=a("div"),v(Ca.$$.fragment),df=p(),Ed=a("p"),lf=i(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),cf=p(),Je=a("div"),v(Pa.$$.fragment),pf=p(),Sa=a("p"),uf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Cd=a("code"),hf=i("X"),mf=i(" represents the sequence:"),ff=p(),Aa=a("ul"),Oa=a("li"),Pd=a("code"),_f=i("input_ids"),gf=i(" (for encoder) "),Sd=a("code"),bf=i("X [eos, src_lang_code]"),kf=p(),Ia=a("li"),Ad=a("code"),vf=i("decoder_input_ids"),yf=i(": (for decoder) "),Od=a("code"),Tf=i("X [eos, tgt_lang_code]"),wf=p(),Id=a("p"),Mf=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),zp=p(),Rt=a("h2"),Eo=a("a"),Nd=a("span"),v(Na.$$.fragment),$f=p(),Dd=a("span"),xf=i("MBartTokenizerFast"),Fp=p(),O=a("div"),v(Da.$$.fragment),zf=p(),Xt=a("p"),Ff=i("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ld=a("em"),qf=i("tokenizers"),Bf=i(` library). Based on
`),La=a("a"),jf=i("BPE"),Ef=i("."),Cf=p(),Ga=a("p"),Pf=i("This tokenizer inherits from "),Ti=a("a"),Sf=i("PreTrainedTokenizerFast"),Af=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Of=p(),Wa=a("p"),If=i("The tokenization method is "),Gd=a("code"),Nf=i("<tokens> <eos> <language code>"),Df=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Lf=p(),v(Co.$$.fragment),Gf=p(),qe=a("div"),v(Ua.$$.fragment),Wf=p(),Wd=a("p"),Uf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Rf=p(),Ra=a("p"),Xf=i("An MBART sequence has the following format, where "),Ud=a("code"),Qf=i("X"),Hf=i(" represents the sequence:"),Vf=p(),Xa=a("ul"),Qa=a("li"),Rd=a("code"),Jf=i("input_ids"),Kf=i(" (for encoder) "),Xd=a("code"),Zf=i("X [eos, src_lang_code]"),Yf=p(),Ha=a("li"),Qd=a("code"),e_=i("decoder_input_ids"),t_=i(": (for decoder) "),Hd=a("code"),o_=i("X [eos, tgt_lang_code]"),n_=p(),Vd=a("p"),a_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),s_=p(),Po=a("div"),v(Va.$$.fragment),r_=p(),Jd=a("p"),i_=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),d_=p(),So=a("div"),v(Ja.$$.fragment),l_=p(),Kd=a("p"),c_=i("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),p_=p(),Ao=a("div"),v(Ka.$$.fragment),u_=p(),Zd=a("p"),h_=i("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),qp=p(),Qt=a("h2"),Oo=a("a"),Yd=a("span"),v(Za.$$.fragment),m_=p(),el=a("span"),f_=i("MBart50Tokenizer"),Bp=p(),I=a("div"),v(Ya.$$.fragment),__=p(),es=a("p"),g_=i("Construct a MBart50 tokenizer. Based on "),ts=a("a"),b_=i("SentencePiece"),k_=i("."),v_=p(),os=a("p"),y_=i("This tokenizer inherits from "),wi=a("a"),T_=i("PreTrainedTokenizer"),w_=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),M_=p(),v(Io.$$.fragment),$_=p(),Ke=a("div"),v(ns.$$.fragment),x_=p(),as=a("p"),z_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),tl=a("code"),F_=i("X"),q_=i(" represents the sequence:"),B_=p(),ss=a("ul"),rs=a("li"),ol=a("code"),j_=i("input_ids"),E_=i(" (for encoder) "),nl=a("code"),C_=i("[src_lang_code] X [eos]"),P_=p(),is=a("li"),al=a("code"),S_=i("labels"),A_=i(": (for decoder) "),sl=a("code"),O_=i("[tgt_lang_code] X [eos]"),I_=p(),rl=a("p"),N_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),D_=p(),No=a("div"),v(ds.$$.fragment),L_=p(),il=a("p"),G_=i("Converts a sequence of tokens (strings for sub-words) in a single string."),W_=p(),Do=a("div"),v(ls.$$.fragment),U_=p(),cs=a("p"),R_=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dl=a("code"),X_=i("prepare_for_model"),Q_=i(" method."),H_=p(),Lo=a("div"),v(ps.$$.fragment),V_=p(),ll=a("p"),J_=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),K_=p(),Go=a("div"),v(us.$$.fragment),Z_=p(),cl=a("p"),Y_=i("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),jp=p(),Ht=a("h2"),Wo=a("a"),pl=a("span"),v(hs.$$.fragment),eg=p(),ul=a("span"),tg=i("MBart50TokenizerFast"),Ep=p(),K=a("div"),v(ms.$$.fragment),og=p(),Vt=a("p"),ng=i("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),hl=a("em"),ag=i("tokenizers"),sg=i(` library). Based on
`),fs=a("a"),rg=i("BPE"),ig=i("."),dg=p(),_s=a("p"),lg=i("This tokenizer inherits from "),Mi=a("a"),cg=i("PreTrainedTokenizerFast"),pg=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ug=p(),v(Uo.$$.fragment),hg=p(),Be=a("div"),v(gs.$$.fragment),mg=p(),ml=a("p"),fg=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),_g=p(),bs=a("p"),gg=i("An MBART-50 sequence has the following format, where "),fl=a("code"),bg=i("X"),kg=i(" represents the sequence:"),vg=p(),ks=a("ul"),vs=a("li"),_l=a("code"),yg=i("input_ids"),Tg=i(" (for encoder) "),gl=a("code"),wg=i("[src_lang_code] X [eos]"),Mg=p(),ys=a("li"),bl=a("code"),$g=i("labels"),xg=i(": (for decoder) "),kl=a("code"),zg=i("[tgt_lang_code] X [eos]"),Fg=p(),vl=a("p"),qg=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Bg=p(),Ro=a("div"),v(Ts.$$.fragment),jg=p(),yl=a("p"),Eg=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Cg=p(),Xo=a("div"),v(ws.$$.fragment),Pg=p(),Tl=a("p"),Sg=i("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Cp=p(),Jt=a("h2"),Qo=a("a"),wl=a("span"),v(Ms.$$.fragment),Ag=p(),Ml=a("span"),Og=i("MBartModel"),Pp=p(),We=a("div"),v($s.$$.fragment),Ig=p(),xs=a("p"),Ng=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$i=a("a"),Dg=i("PreTrainedModel"),Lg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gg=p(),zs=a("p"),Wg=i("This model is also a PyTorch "),Fs=a("a"),Ug=i("torch.nn.Module"),Rg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xg=p(),Ze=a("div"),v(qs.$$.fragment),Qg=p(),Kt=a("p"),Hg=i("The "),xi=a("a"),Vg=i("MBartModel"),Jg=i(" forward method, overrides the "),$l=a("code"),Kg=i("__call__"),Zg=i(" special method."),Yg=p(),v(Ho.$$.fragment),eb=p(),v(Vo.$$.fragment),Sp=p(),Zt=a("h2"),Jo=a("a"),xl=a("span"),v(Bs.$$.fragment),tb=p(),zl=a("span"),ob=i("MBartForConditionalGeneration"),Ap=p(),Ue=a("div"),v(js.$$.fragment),nb=p(),Es=a("p"),ab=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=a("a"),sb=i("PreTrainedModel"),rb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ib=p(),Cs=a("p"),db=i("This model is also a PyTorch "),Ps=a("a"),lb=i("torch.nn.Module"),cb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pb=p(),je=a("div"),v(Ss.$$.fragment),ub=p(),Yt=a("p"),hb=i("The "),Fi=a("a"),mb=i("MBartForConditionalGeneration"),fb=i(" forward method, overrides the "),Fl=a("code"),_b=i("__call__"),gb=i(" special method."),bb=p(),v(Ko.$$.fragment),kb=p(),v(Zo.$$.fragment),vb=p(),v(Yo.$$.fragment),Op=p(),eo=a("h2"),en=a("a"),ql=a("span"),v(As.$$.fragment),yb=p(),Bl=a("span"),Tb=i("MBartForQuestionAnswering"),Ip=p(),we=a("div"),v(Os.$$.fragment),wb=p(),to=a("p"),Mb=i(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),jl=a("code"),$b=i("span start logits"),xb=i(" and "),El=a("code"),zb=i("span end logits"),Fb=i(")."),qb=p(),Is=a("p"),Bb=i("This model inherits from "),qi=a("a"),jb=i("PreTrainedModel"),Eb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb=p(),Ns=a("p"),Pb=i("This model is also a PyTorch "),Ds=a("a"),Sb=i("torch.nn.Module"),Ab=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ob=p(),Ee=a("div"),v(Ls.$$.fragment),Ib=p(),oo=a("p"),Nb=i("The "),Bi=a("a"),Db=i("MBartForQuestionAnswering"),Lb=i(" forward method, overrides the "),Cl=a("code"),Gb=i("__call__"),Wb=i(" special method."),Ub=p(),v(tn.$$.fragment),Rb=p(),v(on.$$.fragment),Xb=p(),v(nn.$$.fragment),Np=p(),no=a("h2"),an=a("a"),Pl=a("span"),v(Gs.$$.fragment),Qb=p(),Sl=a("span"),Hb=i("MBartForSequenceClassification"),Dp=p(),Me=a("div"),v(Ws.$$.fragment),Vb=p(),Al=a("p"),Jb=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Kb=p(),Us=a("p"),Zb=i("This model inherits from "),ji=a("a"),Yb=i("PreTrainedModel"),ek=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tk=p(),Rs=a("p"),ok=i("This model is also a PyTorch "),Xs=a("a"),nk=i("torch.nn.Module"),ak=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sk=p(),Z=a("div"),v(Qs.$$.fragment),rk=p(),ao=a("p"),ik=i("The "),Ei=a("a"),dk=i("MBartForSequenceClassification"),lk=i(" forward method, overrides the "),Ol=a("code"),ck=i("__call__"),pk=i(" special method."),uk=p(),v(sn.$$.fragment),hk=p(),v(rn.$$.fragment),mk=p(),v(dn.$$.fragment),fk=p(),v(ln.$$.fragment),_k=p(),v(cn.$$.fragment),Lp=p(),so=a("h2"),pn=a("a"),Il=a("span"),v(Hs.$$.fragment),gk=p(),Nl=a("span"),bk=i("MBartForCausalLM"),Gp=p(),ro=a("div"),v(Vs.$$.fragment),kk=p(),un=a("div"),v(Js.$$.fragment),vk=p(),v(hn.$$.fragment),Wp=p(),io=a("h2"),mn=a("a"),Dl=a("span"),v(Ks.$$.fragment),yk=p(),Ll=a("span"),Tk=i("TFMBartModel"),Up=p(),$e=a("div"),v(Zs.$$.fragment),wk=p(),Ys=a("p"),Mk=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ci=a("a"),$k=i("TFPreTrainedModel"),xk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk=p(),er=a("p"),Fk=i("This model is also a "),tr=a("a"),qk=i("tf.keras.Model"),Bk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jk=p(),v(fn.$$.fragment),Ek=p(),Ye=a("div"),v(or.$$.fragment),Ck=p(),lo=a("p"),Pk=i("The "),Pi=a("a"),Sk=i("TFMBartModel"),Ak=i(" forward method, overrides the "),Gl=a("code"),Ok=i("__call__"),Ik=i(" special method."),Nk=p(),v(_n.$$.fragment),Dk=p(),v(gn.$$.fragment),Rp=p(),co=a("h2"),bn=a("a"),Wl=a("span"),v(nr.$$.fragment),Lk=p(),Ul=a("span"),Gk=i("TFMBartForConditionalGeneration"),Xp=p(),xe=a("div"),v(ar.$$.fragment),Wk=p(),sr=a("p"),Uk=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Si=a("a"),Rk=i("TFPreTrainedModel"),Xk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qk=p(),rr=a("p"),Hk=i("This model is also a "),ir=a("a"),Vk=i("tf.keras.Model"),Jk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kk=p(),v(kn.$$.fragment),Zk=p(),Ce=a("div"),v(dr.$$.fragment),Yk=p(),po=a("p"),ev=i("The "),Ai=a("a"),tv=i("TFMBartForConditionalGeneration"),ov=i(" forward method, overrides the "),Rl=a("code"),nv=i("__call__"),av=i(" special method."),sv=p(),v(vn.$$.fragment),rv=p(),v(yn.$$.fragment),iv=p(),v(Tn.$$.fragment),Qp=p(),uo=a("h2"),wn=a("a"),Xl=a("span"),v(lr.$$.fragment),dv=p(),Ql=a("span"),lv=i("FlaxMBartModel"),Hp=p(),W=a("div"),v(cr.$$.fragment),cv=p(),pr=a("p"),pv=i(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Oi=a("a"),uv=i("FlaxPreTrainedModel"),hv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mv=p(),ur=a("p"),fv=i(`This model is also a Flax Linen
`),hr=a("a"),_v=i("flax.nn.Module"),gv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bv=p(),Hl=a("p"),kv=i("Finally, this model supports inherent JAX features such as:"),vv=p(),mt=a("ul"),Vl=a("li"),mr=a("a"),yv=i("Just-In-Time (JIT) compilation"),Tv=p(),Jl=a("li"),fr=a("a"),wv=i("Automatic Differentiation"),Mv=p(),Kl=a("li"),_r=a("a"),$v=i("Vectorization"),xv=p(),Zl=a("li"),gr=a("a"),zv=i("Parallelization"),Fv=p(),et=a("div"),v(br.$$.fragment),qv=p(),ho=a("p"),Bv=i("The "),Yl=a("code"),jv=i("FlaxMBartPreTrainedModel"),Ev=i(" forward method, overrides the "),ec=a("code"),Cv=i("__call__"),Pv=i(" special method."),Sv=p(),v(Mn.$$.fragment),Av=p(),v($n.$$.fragment),Ov=p(),xn=a("div"),v(kr.$$.fragment),Iv=p(),v(zn.$$.fragment),Nv=p(),Fn=a("div"),v(vr.$$.fragment),Dv=p(),v(qn.$$.fragment),Vp=p(),mo=a("h2"),Bn=a("a"),tc=a("span"),v(yr.$$.fragment),Lv=p(),oc=a("span"),Gv=i("FlaxMBartForConditionalGeneration"),Jp=p(),U=a("div"),v(Tr.$$.fragment),Wv=p(),wr=a("p"),Uv=i(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=a("a"),Rv=i("FlaxPreTrainedModel"),Xv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qv=p(),Mr=a("p"),Hv=i(`This model is also a Flax Linen
`),$r=a("a"),Vv=i("flax.nn.Module"),Jv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kv=p(),nc=a("p"),Zv=i("Finally, this model supports inherent JAX features such as:"),Yv=p(),ft=a("ul"),ac=a("li"),xr=a("a"),ey=i("Just-In-Time (JIT) compilation"),ty=p(),sc=a("li"),zr=a("a"),oy=i("Automatic Differentiation"),ny=p(),rc=a("li"),Fr=a("a"),ay=i("Vectorization"),sy=p(),ic=a("li"),qr=a("a"),ry=i("Parallelization"),iy=p(),Pe=a("div"),v(Br.$$.fragment),dy=p(),fo=a("p"),ly=i("The "),dc=a("code"),cy=i("FlaxMBartPreTrainedModel"),py=i(" forward method, overrides the "),lc=a("code"),uy=i("__call__"),hy=i(" special method."),my=p(),v(jn.$$.fragment),fy=p(),v(En.$$.fragment),_y=p(),v(Cn.$$.fragment),gy=p(),Pn=a("div"),v(jr.$$.fragment),by=p(),v(Sn.$$.fragment),ky=p(),An=a("div"),v(Er.$$.fragment),vy=p(),v(On.$$.fragment),Kp=p(),_o=a("h2"),In=a("a"),cc=a("span"),v(Cr.$$.fragment),yy=p(),pc=a("span"),Ty=i("FlaxMBartForSequenceClassification"),Zp=p(),N=a("div"),v(Pr.$$.fragment),wy=p(),uc=a("p"),My=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),$y=p(),Sr=a("p"),xy=i("This model inherits from "),Ni=a("a"),zy=i("FlaxPreTrainedModel"),Fy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qy=p(),Ar=a("p"),By=i(`This model is also a Flax Linen
`),Or=a("a"),jy=i("flax.nn.Module"),Ey=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cy=p(),hc=a("p"),Py=i("Finally, this model supports inherent JAX features such as:"),Sy=p(),_t=a("ul"),mc=a("li"),Ir=a("a"),Ay=i("Just-In-Time (JIT) compilation"),Oy=p(),fc=a("li"),Nr=a("a"),Iy=i("Automatic Differentiation"),Ny=p(),_c=a("li"),Dr=a("a"),Dy=i("Vectorization"),Ly=p(),gc=a("li"),Lr=a("a"),Gy=i("Parallelization"),Wy=p(),tt=a("div"),v(Gr.$$.fragment),Uy=p(),go=a("p"),Ry=i("The "),bc=a("code"),Xy=i("FlaxMBartPreTrainedModel"),Qy=i(" forward method, overrides the "),kc=a("code"),Hy=i("__call__"),Vy=i(" special method."),Jy=p(),v(Nn.$$.fragment),Ky=p(),v(Dn.$$.fragment),Zy=p(),Ln=a("div"),v(Wr.$$.fragment),Yy=p(),v(Gn.$$.fragment),e1=p(),Wn=a("div"),v(Ur.$$.fragment),t1=p(),v(Un.$$.fragment),Yp=p(),bo=a("h2"),Rn=a("a"),vc=a("span"),v(Rr.$$.fragment),o1=p(),yc=a("span"),n1=i("FlaxMBartForQuestionAnswering"),eu=p(),D=a("div"),v(Xr.$$.fragment),a1=p(),ko=a("p"),s1=i(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Tc=a("code"),r1=i("span start logits"),i1=i(" and "),wc=a("code"),d1=i("span end logits"),l1=i(")."),c1=p(),Qr=a("p"),p1=i("This model inherits from "),Di=a("a"),u1=i("FlaxPreTrainedModel"),h1=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m1=p(),Hr=a("p"),f1=i(`This model is also a Flax Linen
`),Vr=a("a"),_1=i("flax.nn.Module"),g1=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),b1=p(),Mc=a("p"),k1=i("Finally, this model supports inherent JAX features such as:"),v1=p(),gt=a("ul"),$c=a("li"),Jr=a("a"),y1=i("Just-In-Time (JIT) compilation"),T1=p(),xc=a("li"),Kr=a("a"),w1=i("Automatic Differentiation"),M1=p(),zc=a("li"),Zr=a("a"),$1=i("Vectorization"),x1=p(),Fc=a("li"),Yr=a("a"),z1=i("Parallelization"),F1=p(),ot=a("div"),v(ei.$$.fragment),q1=p(),vo=a("p"),B1=i("The "),qc=a("code"),j1=i("FlaxMBartPreTrainedModel"),E1=i(" forward method, overrides the "),Bc=a("code"),C1=i("__call__"),P1=i(" special method."),S1=p(),v(Xn.$$.fragment),A1=p(),v(Qn.$$.fragment),O1=p(),Hn=a("div"),v(ti.$$.fragment),I1=p(),v(Vn.$$.fragment),N1=p(),Jn=a("div"),v(oi.$$.fragment),D1=p(),v(Kn.$$.fragment),this.h()},l(o){const _=CM('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),k=u(o),m=s(o,"H1",{class:!0});var ni=r(m);c=s(ni,"A",{id:!0,class:!0,href:!0});var jc=r(c);g=s(jc,"SPAN",{});var Ec=r(g);y(n.$$.fragment,Ec),Ec.forEach(t),jc.forEach(t),h=u(ni),q=s(ni,"SPAN",{});var Cc=r(q);st=d(Cc,"MBart and MBart-50"),Cc.forEach(t),ni.forEach(t),ze=u(o),E=s(o,"P",{});var Zn=r(E);Ie=s(Zn,"STRONG",{});var Pc=r(Ie);he=d(Pc,"DISCLAIMER:"),Pc.forEach(t),rt=d(Zn," If you see something strange, file a "),me=s(Zn,"A",{href:!0,rel:!0});var Sc=r(me);fe=d(Sc,"Github Issue"),Sc.forEach(t),it=d(Zn,` and assign
@patrickvonplaten`),Zn.forEach(t),Xe=u(o),Q=s(o,"H2",{class:!0});var ai=r(Q);L=s(ai,"A",{id:!0,class:!0,href:!0});var Ac=r(L);Ne=s(Ac,"SPAN",{});var Oc=r(Ne);y(ne.$$.fragment,Oc),Oc.forEach(t),Ac.forEach(t),S=u(ai),A=s(ai,"SPAN",{});var Ic=r(A);dt=d(Ic,"Overview of MBart"),Ic.forEach(t),ai.forEach(t),le=u(o),ce=s(o,"P",{});var si=r(ce);lt=d(si,"The MBart model was presented in "),H=s(si,"A",{href:!0,rel:!0});var Nc=r(H);ct=d(Nc,"Multilingual Denoising Pre-training for Neural Machine Translation"),Nc.forEach(t),pt=d(si,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),si.forEach(t),G=u(o),Fe=s(o,"P",{});var Dc=r(Fe);_e=d(Dc,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Dc.forEach(t),Qe=u(o),ae=s(o,"P",{});var Yn=r(ae);ge=d(Yn,"This model was contributed by "),be=s(Yn,"A",{href:!0,rel:!0});var Lc=r(be);ut=d(Lc,"valhalla"),Lc.forEach(t),se=d(Yn,". The Authors\u2019 code can be found "),ke=s(Yn,"A",{href:!0,rel:!0});var Gc=r(ke);ve=d(Gc,"here"),Gc.forEach(t),Yn.forEach(t),He=u(o),z=s(o,"H3",{class:!0});var ri=r(z);j=s(ri,"A",{id:!0,class:!0,href:!0});var Wc=r(j);ye=s(Wc,"SPAN",{});var Uc=r(ye);y(De.$$.fragment,Uc),Uc.forEach(t),Wc.forEach(t),jt=u(ri),V=s(ri,"SPAN",{});var Rc=r(V);Et=d(Rc,"Training of MBart"),Rc.forEach(t),ri.forEach(t),bt=u(o),X=s(o,"P",{});var Re=r(X);re=d(Re,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=s(Re,"CODE",{});var Xc=r(ie);Ct=d(Xc,"X [eos, src_lang_code]"),Xc.forEach(t),Pt=d(Re," where "),de=s(Re,"CODE",{});var Qc=r(de);St=d(Qc,"X"),Qc.forEach(t),At=d(Re,` is the source text. The
target text format is `),Le=s(Re,"CODE",{});var Hc=r(Le);Ot=d(Hc,"[tgt_lang_code] X [eos]"),Hc.forEach(t),Bh=d(Re,". "),ad=s(Re,"CODE",{});var Vc=r(ad);jh=d(Vc,"bos"),Vc.forEach(t),Eh=d(Re," is never used."),Re.forEach(t),ip=u(o),kt=s(o,"P",{});var yo=r(kt);Ch=d(yo,"The regular "),_a=s(yo,"A",{href:!0});var Li=r(_a);sd=s(Li,"STRONG",{});var Jc=r(sd);Ph=d(Jc,"call"),Jc.forEach(t),Sh=d(Li,"()"),Li.forEach(t),Ah=d(yo,` will encode source text format, and it should be wrapped
inside the context manager `),li=s(yo,"A",{href:!0});var Kc=r(li);Oh=d(Kc,"as_target_tokenizer()"),Kc.forEach(t),Ih=d(yo," to encode target text format."),yo.forEach(t),dp=u(o),ci=s(o,"UL",{});var Zc=r(ci);rd=s(Zc,"LI",{});var Yc=r(rd);Nh=d(Yc,"Supervised training"),Yc.forEach(t),Zc.forEach(t),lp=u(o),y(ga.$$.fragment,o),cp=u(o),pi=s(o,"UL",{});var ep=r(pi);ba=s(ep,"LI",{});var ii=r(ba);id=s(ii,"P",{});var tp=r(id);Dh=d(tp,"Generation"),tp.forEach(t),Lh=u(ii),It=s(ii,"P",{});var To=r(It);Gh=d(To,"While generating the target text set the "),dd=s(To,"CODE",{});var op=r(dd);Wh=d(op,"decoder_start_token_id"),op.forEach(t),Uh=d(To,` to the target language id. The following
example shows how to translate English to Romanian using the `),ld=s(To,"EM",{});var np=r(ld);Rh=d(np,"facebook/mbart-large-en-ro"),np.forEach(t),Xh=d(To," model."),To.forEach(t),ii.forEach(t),ep.forEach(t),pp=u(o),y(ka.$$.fragment,o),up=u(o),Nt=s(o,"H2",{class:!0});var di=r(Nt);Mo=s(di,"A",{id:!0,class:!0,href:!0});var ap=r(Mo);cd=s(ap,"SPAN",{});var sp=r(cd);y(va.$$.fragment,sp),sp.forEach(t),ap.forEach(t),Qh=u(di),pd=s(di,"SPAN",{});var rp=r(pd);Hh=d(rp,"Overview of MBart-50"),rp.forEach(t),di.forEach(t),hp=u(o),vt=s(o,"P",{});var wo=r(vt);Vh=d(wo,"MBart-50 was introduced in the "),ya=s(wo,"A",{href:!0,rel:!0});var L1=r(ya);Jh=d(L1,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),L1.forEach(t),Kh=d(wo,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),ud=s(wo,"EM",{});var G1=r(ud);Zh=d(G1,"mbart-large-cc25"),G1.forEach(t),Yh=d(wo,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),wo.forEach(t),mp=u(o),ui=s(o,"P",{});var W1=r(ui);em=d(W1,"According to the abstract"),W1.forEach(t),fp=u(o),hi=s(o,"P",{});var U1=r(hi);hd=s(U1,"EM",{});var R1=r(hd);tm=d(R1,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),R1.forEach(t),U1.forEach(t),_p=u(o),Dt=s(o,"H3",{class:!0});var ou=r(Dt);$o=s(ou,"A",{id:!0,class:!0,href:!0});var X1=r($o);md=s(X1,"SPAN",{});var Q1=r(md);y(Ta.$$.fragment,Q1),Q1.forEach(t),X1.forEach(t),om=u(ou),fd=s(ou,"SPAN",{});var H1=r(fd);nm=d(H1,"Training of MBart-50"),H1.forEach(t),ou.forEach(t),gp=u(o),Ve=s(o,"P",{});var ea=r(Ve);am=d(ea,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),_d=s(ea,"CODE",{});var V1=r(_d);sm=d(V1,"[lang_code] X [eos]"),V1.forEach(t),rm=d(ea,", where "),gd=s(ea,"CODE",{});var J1=r(gd);im=d(J1,"lang_code"),J1.forEach(t),dm=d(ea,` is source
language id for source text and target language id for target text, with `),bd=s(ea,"CODE",{});var K1=r(bd);lm=d(K1,"X"),K1.forEach(t),cm=d(ea,` being the source or target text
respectively.`),ea.forEach(t),bp=u(o),xo=s(o,"P",{});var nu=r(xo);pm=d(nu,"MBart-50 has its own tokenizer "),mi=s(nu,"A",{href:!0});var Z1=r(mi);um=d(Z1,"MBart50Tokenizer"),Z1.forEach(t),hm=d(nu,"."),nu.forEach(t),kp=u(o),fi=s(o,"UL",{});var Y1=r(fi);kd=s(Y1,"LI",{});var eT=r(kd);mm=d(eT,"Supervised training"),eT.forEach(t),Y1.forEach(t),vp=u(o),y(wa.$$.fragment,o),yp=u(o),_i=s(o,"UL",{});var tT=r(_i);Ma=s(tT,"LI",{});var au=r(Ma);vd=s(au,"P",{});var oT=r(vd);fm=d(oT,"Generation"),oT.forEach(t),_m=u(au),Te=s(au,"P",{});var nt=r(Te);gm=d(nt,"To generate using the mBART-50 multilingual translation models, "),yd=s(nt,"CODE",{});var nT=r(yd);bm=d(nT,"eos_token_id"),nT.forEach(t),km=d(nt,` is used as the
`),Td=s(nt,"CODE",{});var aT=r(Td);vm=d(aT,"decoder_start_token_id"),aT.forEach(t),ym=d(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=s(nt,"EM",{});var sT=r(wd);Tm=d(sT,"forced_bos_token_id"),sT.forEach(t),wm=d(nt," parameter to the "),Md=s(nt,"EM",{});var rT=r(Md);Mm=d(rT,"generate"),rT.forEach(t),$m=d(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),$d=s(nt,"EM",{});var iT=r($d);xm=d(iT,"facebook/mbart-50-large-many-to-many"),iT.forEach(t),zm=d(nt," checkpoint."),nt.forEach(t),au.forEach(t),tT.forEach(t),Tp=u(o),y($a.$$.fragment,o),wp=u(o),Lt=s(o,"H2",{class:!0});var su=r(Lt);zo=s(su,"A",{id:!0,class:!0,href:!0});var dT=r(zo);xd=s(dT,"SPAN",{});var lT=r(xd);y(xa.$$.fragment,lT),lT.forEach(t),dT.forEach(t),Fm=u(su),zd=s(su,"SPAN",{});var cT=r(zd);qm=d(cT,"MBartConfig"),cT.forEach(t),su.forEach(t),Mp=u(o),Ge=s(o,"DIV",{class:!0});var ta=r(Ge);y(za.$$.fragment,ta),Bm=u(ta),Gt=s(ta,"P",{});var Gi=r(Gt);jm=d(Gi,"This is the configuration class to store the configuration of a "),gi=s(Gi,"A",{href:!0});var pT=r(gi);Em=d(pT,"MBartModel"),pT.forEach(t),Cm=d(Gi,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Fa=s(Gi,"A",{href:!0,rel:!0});var uT=r(Fa);Pm=d(uT,"facebook/mbart-large-cc25"),uT.forEach(t),Sm=d(Gi," architecture."),Gi.forEach(t),Am=u(ta),Wt=s(ta,"P",{});var Wi=r(Wt);Om=d(Wi,"Configuration objects inherit from "),bi=s(Wi,"A",{href:!0});var hT=r(bi);Im=d(hT,"PretrainedConfig"),hT.forEach(t),Nm=d(Wi,` and can be used to control the model outputs. Read the
documentation from `),ki=s(Wi,"A",{href:!0});var mT=r(ki);Dm=d(mT,"PretrainedConfig"),mT.forEach(t),Lm=d(Wi," for more information."),Wi.forEach(t),Gm=u(ta),y(Fo.$$.fragment,ta),ta.forEach(t),$p=u(o),Ut=s(o,"H2",{class:!0});var ru=r(Ut);qo=s(ru,"A",{id:!0,class:!0,href:!0});var fT=r(qo);Fd=s(fT,"SPAN",{});var _T=r(Fd);y(qa.$$.fragment,_T),_T.forEach(t),fT.forEach(t),Wm=u(ru),qd=s(ru,"SPAN",{});var gT=r(qd);Um=d(gT,"MBartTokenizer"),gT.forEach(t),ru.forEach(t),xp=u(o),J=s(o,"DIV",{class:!0});var Se=r(J);y(Ba.$$.fragment,Se),Rm=u(Se),Bd=s(Se,"P",{});var bT=r(Bd);Xm=d(bT,"Construct an MBART tokenizer."),bT.forEach(t),Qm=u(Se),ht=s(Se,"P",{});var oa=r(ht);Hm=d(oa,"Adapted from "),vi=s(oa,"A",{href:!0});var kT=r(vi);Vm=d(kT,"RobertaTokenizer"),kT.forEach(t),Jm=d(oa," and "),yi=s(oa,"A",{href:!0});var vT=r(yi);Km=d(vT,"XLNetTokenizer"),vT.forEach(t),Zm=d(oa,`. Based on
`),ja=s(oa,"A",{href:!0,rel:!0});var yT=r(ja);Ym=d(yT,"SentencePiece"),yT.forEach(t),ef=d(oa,"."),oa.forEach(t),tf=u(Se),Ea=s(Se,"P",{});var iu=r(Ea);of=d(iu,"The tokenization method is "),jd=s(iu,"CODE",{});var TT=r(jd);nf=d(TT,"<tokens> <eos> <language code>"),TT.forEach(t),af=d(iu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),iu.forEach(t),sf=u(Se),y(Bo.$$.fragment,Se),rf=u(Se),jo=s(Se,"DIV",{class:!0});var du=r(jo);y(Ca.$$.fragment,du),df=u(du),Ed=s(du,"P",{});var wT=r(Ed);lf=d(wT,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),wT.forEach(t),du.forEach(t),cf=u(Se),Je=s(Se,"DIV",{class:!0});var na=r(Je);y(Pa.$$.fragment,na),pf=u(na),Sa=s(na,"P",{});var lu=r(Sa);uf=d(lu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Cd=s(lu,"CODE",{});var MT=r(Cd);hf=d(MT,"X"),MT.forEach(t),mf=d(lu," represents the sequence:"),lu.forEach(t),ff=u(na),Aa=s(na,"UL",{});var cu=r(Aa);Oa=s(cu,"LI",{});var pu=r(Oa);Pd=s(pu,"CODE",{});var $T=r(Pd);_f=d($T,"input_ids"),$T.forEach(t),gf=d(pu," (for encoder) "),Sd=s(pu,"CODE",{});var xT=r(Sd);bf=d(xT,"X [eos, src_lang_code]"),xT.forEach(t),pu.forEach(t),kf=u(cu),Ia=s(cu,"LI",{});var uu=r(Ia);Ad=s(uu,"CODE",{});var zT=r(Ad);vf=d(zT,"decoder_input_ids"),zT.forEach(t),yf=d(uu,": (for decoder) "),Od=s(uu,"CODE",{});var FT=r(Od);Tf=d(FT,"X [eos, tgt_lang_code]"),FT.forEach(t),uu.forEach(t),cu.forEach(t),wf=u(na),Id=s(na,"P",{});var qT=r(Id);Mf=d(qT,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),qT.forEach(t),na.forEach(t),Se.forEach(t),zp=u(o),Rt=s(o,"H2",{class:!0});var hu=r(Rt);Eo=s(hu,"A",{id:!0,class:!0,href:!0});var BT=r(Eo);Nd=s(BT,"SPAN",{});var jT=r(Nd);y(Na.$$.fragment,jT),jT.forEach(t),BT.forEach(t),$f=u(hu),Dd=s(hu,"SPAN",{});var ET=r(Dd);xf=d(ET,"MBartTokenizerFast"),ET.forEach(t),hu.forEach(t),Fp=u(o),O=s(o,"DIV",{class:!0});var Y=r(O);y(Da.$$.fragment,Y),zf=u(Y),Xt=s(Y,"P",{});var Ui=r(Xt);Ff=d(Ui,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ld=s(Ui,"EM",{});var CT=r(Ld);qf=d(CT,"tokenizers"),CT.forEach(t),Bf=d(Ui,` library). Based on
`),La=s(Ui,"A",{href:!0,rel:!0});var PT=r(La);jf=d(PT,"BPE"),PT.forEach(t),Ef=d(Ui,"."),Ui.forEach(t),Cf=u(Y),Ga=s(Y,"P",{});var mu=r(Ga);Pf=d(mu,"This tokenizer inherits from "),Ti=s(mu,"A",{href:!0});var ST=r(Ti);Sf=d(ST,"PreTrainedTokenizerFast"),ST.forEach(t),Af=d(mu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),mu.forEach(t),Of=u(Y),Wa=s(Y,"P",{});var fu=r(Wa);If=d(fu,"The tokenization method is "),Gd=s(fu,"CODE",{});var AT=r(Gd);Nf=d(AT,"<tokens> <eos> <language code>"),AT.forEach(t),Df=d(fu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),fu.forEach(t),Lf=u(Y),y(Co.$$.fragment,Y),Gf=u(Y),qe=s(Y,"DIV",{class:!0});var yt=r(qe);y(Ua.$$.fragment,yt),Wf=u(yt),Wd=s(yt,"P",{});var OT=r(Wd);Uf=d(OT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),OT.forEach(t),Rf=u(yt),Ra=s(yt,"P",{});var _u=r(Ra);Xf=d(_u,"An MBART sequence has the following format, where "),Ud=s(_u,"CODE",{});var IT=r(Ud);Qf=d(IT,"X"),IT.forEach(t),Hf=d(_u," represents the sequence:"),_u.forEach(t),Vf=u(yt),Xa=s(yt,"UL",{});var gu=r(Xa);Qa=s(gu,"LI",{});var bu=r(Qa);Rd=s(bu,"CODE",{});var NT=r(Rd);Jf=d(NT,"input_ids"),NT.forEach(t),Kf=d(bu," (for encoder) "),Xd=s(bu,"CODE",{});var DT=r(Xd);Zf=d(DT,"X [eos, src_lang_code]"),DT.forEach(t),bu.forEach(t),Yf=u(gu),Ha=s(gu,"LI",{});var ku=r(Ha);Qd=s(ku,"CODE",{});var LT=r(Qd);e_=d(LT,"decoder_input_ids"),LT.forEach(t),t_=d(ku,": (for decoder) "),Hd=s(ku,"CODE",{});var GT=r(Hd);o_=d(GT,"X [eos, tgt_lang_code]"),GT.forEach(t),ku.forEach(t),gu.forEach(t),n_=u(yt),Vd=s(yt,"P",{});var WT=r(Vd);a_=d(WT,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),WT.forEach(t),yt.forEach(t),s_=u(Y),Po=s(Y,"DIV",{class:!0});var vu=r(Po);y(Va.$$.fragment,vu),r_=u(vu),Jd=s(vu,"P",{});var UT=r(Jd);i_=d(UT,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),UT.forEach(t),vu.forEach(t),d_=u(Y),So=s(Y,"DIV",{class:!0});var yu=r(So);y(Ja.$$.fragment,yu),l_=u(yu),Kd=s(yu,"P",{});var RT=r(Kd);c_=d(RT,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),RT.forEach(t),yu.forEach(t),p_=u(Y),Ao=s(Y,"DIV",{class:!0});var Tu=r(Ao);y(Ka.$$.fragment,Tu),u_=u(Tu),Zd=s(Tu,"P",{});var XT=r(Zd);h_=d(XT,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),XT.forEach(t),Tu.forEach(t),Y.forEach(t),qp=u(o),Qt=s(o,"H2",{class:!0});var wu=r(Qt);Oo=s(wu,"A",{id:!0,class:!0,href:!0});var QT=r(Oo);Yd=s(QT,"SPAN",{});var HT=r(Yd);y(Za.$$.fragment,HT),HT.forEach(t),QT.forEach(t),m_=u(wu),el=s(wu,"SPAN",{});var VT=r(el);f_=d(VT,"MBart50Tokenizer"),VT.forEach(t),wu.forEach(t),Bp=u(o),I=s(o,"DIV",{class:!0});var ee=r(I);y(Ya.$$.fragment,ee),__=u(ee),es=s(ee,"P",{});var Mu=r(es);g_=d(Mu,"Construct a MBart50 tokenizer. Based on "),ts=s(Mu,"A",{href:!0,rel:!0});var JT=r(ts);b_=d(JT,"SentencePiece"),JT.forEach(t),k_=d(Mu,"."),Mu.forEach(t),v_=u(ee),os=s(ee,"P",{});var $u=r(os);y_=d($u,"This tokenizer inherits from "),wi=s($u,"A",{href:!0});var KT=r(wi);T_=d(KT,"PreTrainedTokenizer"),KT.forEach(t),w_=d($u,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$u.forEach(t),M_=u(ee),y(Io.$$.fragment,ee),$_=u(ee),Ke=s(ee,"DIV",{class:!0});var aa=r(Ke);y(ns.$$.fragment,aa),x_=u(aa),as=s(aa,"P",{});var xu=r(as);z_=d(xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),tl=s(xu,"CODE",{});var ZT=r(tl);F_=d(ZT,"X"),ZT.forEach(t),q_=d(xu," represents the sequence:"),xu.forEach(t),B_=u(aa),ss=s(aa,"UL",{});var zu=r(ss);rs=s(zu,"LI",{});var Fu=r(rs);ol=s(Fu,"CODE",{});var YT=r(ol);j_=d(YT,"input_ids"),YT.forEach(t),E_=d(Fu," (for encoder) "),nl=s(Fu,"CODE",{});var e2=r(nl);C_=d(e2,"[src_lang_code] X [eos]"),e2.forEach(t),Fu.forEach(t),P_=u(zu),is=s(zu,"LI",{});var qu=r(is);al=s(qu,"CODE",{});var t2=r(al);S_=d(t2,"labels"),t2.forEach(t),A_=d(qu,": (for decoder) "),sl=s(qu,"CODE",{});var o2=r(sl);O_=d(o2,"[tgt_lang_code] X [eos]"),o2.forEach(t),qu.forEach(t),zu.forEach(t),I_=u(aa),rl=s(aa,"P",{});var n2=r(rl);N_=d(n2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),n2.forEach(t),aa.forEach(t),D_=u(ee),No=s(ee,"DIV",{class:!0});var Bu=r(No);y(ds.$$.fragment,Bu),L_=u(Bu),il=s(Bu,"P",{});var a2=r(il);G_=d(a2,"Converts a sequence of tokens (strings for sub-words) in a single string."),a2.forEach(t),Bu.forEach(t),W_=u(ee),Do=s(ee,"DIV",{class:!0});var ju=r(Do);y(ls.$$.fragment,ju),U_=u(ju),cs=s(ju,"P",{});var Eu=r(cs);R_=d(Eu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dl=s(Eu,"CODE",{});var s2=r(dl);X_=d(s2,"prepare_for_model"),s2.forEach(t),Q_=d(Eu," method."),Eu.forEach(t),ju.forEach(t),H_=u(ee),Lo=s(ee,"DIV",{class:!0});var Cu=r(Lo);y(ps.$$.fragment,Cu),V_=u(Cu),ll=s(Cu,"P",{});var r2=r(ll);J_=d(r2,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),r2.forEach(t),Cu.forEach(t),K_=u(ee),Go=s(ee,"DIV",{class:!0});var Pu=r(Go);y(us.$$.fragment,Pu),Z_=u(Pu),cl=s(Pu,"P",{});var i2=r(cl);Y_=d(i2,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),i2.forEach(t),Pu.forEach(t),ee.forEach(t),jp=u(o),Ht=s(o,"H2",{class:!0});var Su=r(Ht);Wo=s(Su,"A",{id:!0,class:!0,href:!0});var d2=r(Wo);pl=s(d2,"SPAN",{});var l2=r(pl);y(hs.$$.fragment,l2),l2.forEach(t),d2.forEach(t),eg=u(Su),ul=s(Su,"SPAN",{});var c2=r(ul);tg=d(c2,"MBart50TokenizerFast"),c2.forEach(t),Su.forEach(t),Ep=u(o),K=s(o,"DIV",{class:!0});var Ae=r(K);y(ms.$$.fragment,Ae),og=u(Ae),Vt=s(Ae,"P",{});var Ri=r(Vt);ng=d(Ri,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),hl=s(Ri,"EM",{});var p2=r(hl);ag=d(p2,"tokenizers"),p2.forEach(t),sg=d(Ri,` library). Based on
`),fs=s(Ri,"A",{href:!0,rel:!0});var u2=r(fs);rg=d(u2,"BPE"),u2.forEach(t),ig=d(Ri,"."),Ri.forEach(t),dg=u(Ae),_s=s(Ae,"P",{});var Au=r(_s);lg=d(Au,"This tokenizer inherits from "),Mi=s(Au,"A",{href:!0});var h2=r(Mi);cg=d(h2,"PreTrainedTokenizerFast"),h2.forEach(t),pg=d(Au,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Au.forEach(t),ug=u(Ae),y(Uo.$$.fragment,Ae),hg=u(Ae),Be=s(Ae,"DIV",{class:!0});var Tt=r(Be);y(gs.$$.fragment,Tt),mg=u(Tt),ml=s(Tt,"P",{});var m2=r(ml);fg=d(m2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),m2.forEach(t),_g=u(Tt),bs=s(Tt,"P",{});var Ou=r(bs);gg=d(Ou,"An MBART-50 sequence has the following format, where "),fl=s(Ou,"CODE",{});var f2=r(fl);bg=d(f2,"X"),f2.forEach(t),kg=d(Ou," represents the sequence:"),Ou.forEach(t),vg=u(Tt),ks=s(Tt,"UL",{});var Iu=r(ks);vs=s(Iu,"LI",{});var Nu=r(vs);_l=s(Nu,"CODE",{});var _2=r(_l);yg=d(_2,"input_ids"),_2.forEach(t),Tg=d(Nu," (for encoder) "),gl=s(Nu,"CODE",{});var g2=r(gl);wg=d(g2,"[src_lang_code] X [eos]"),g2.forEach(t),Nu.forEach(t),Mg=u(Iu),ys=s(Iu,"LI",{});var Du=r(ys);bl=s(Du,"CODE",{});var b2=r(bl);$g=d(b2,"labels"),b2.forEach(t),xg=d(Du,": (for decoder) "),kl=s(Du,"CODE",{});var k2=r(kl);zg=d(k2,"[tgt_lang_code] X [eos]"),k2.forEach(t),Du.forEach(t),Iu.forEach(t),Fg=u(Tt),vl=s(Tt,"P",{});var v2=r(vl);qg=d(v2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),v2.forEach(t),Tt.forEach(t),Bg=u(Ae),Ro=s(Ae,"DIV",{class:!0});var Lu=r(Ro);y(Ts.$$.fragment,Lu),jg=u(Lu),yl=s(Lu,"P",{});var y2=r(yl);Eg=d(y2,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),y2.forEach(t),Lu.forEach(t),Cg=u(Ae),Xo=s(Ae,"DIV",{class:!0});var Gu=r(Xo);y(ws.$$.fragment,Gu),Pg=u(Gu),Tl=s(Gu,"P",{});var T2=r(Tl);Sg=d(T2,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),T2.forEach(t),Gu.forEach(t),Ae.forEach(t),Cp=u(o),Jt=s(o,"H2",{class:!0});var Wu=r(Jt);Qo=s(Wu,"A",{id:!0,class:!0,href:!0});var w2=r(Qo);wl=s(w2,"SPAN",{});var M2=r(wl);y(Ms.$$.fragment,M2),M2.forEach(t),w2.forEach(t),Ag=u(Wu),Ml=s(Wu,"SPAN",{});var $2=r(Ml);Og=d($2,"MBartModel"),$2.forEach(t),Wu.forEach(t),Pp=u(o),We=s(o,"DIV",{class:!0});var sa=r(We);y($s.$$.fragment,sa),Ig=u(sa),xs=s(sa,"P",{});var Uu=r(xs);Ng=d(Uu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$i=s(Uu,"A",{href:!0});var x2=r($i);Dg=d(x2,"PreTrainedModel"),x2.forEach(t),Lg=d(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uu.forEach(t),Gg=u(sa),zs=s(sa,"P",{});var Ru=r(zs);Wg=d(Ru,"This model is also a PyTorch "),Fs=s(Ru,"A",{href:!0,rel:!0});var z2=r(Fs);Ug=d(z2,"torch.nn.Module"),z2.forEach(t),Rg=d(Ru,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ru.forEach(t),Xg=u(sa),Ze=s(sa,"DIV",{class:!0});var ra=r(Ze);y(qs.$$.fragment,ra),Qg=u(ra),Kt=s(ra,"P",{});var Xi=r(Kt);Hg=d(Xi,"The "),xi=s(Xi,"A",{href:!0});var F2=r(xi);Vg=d(F2,"MBartModel"),F2.forEach(t),Jg=d(Xi," forward method, overrides the "),$l=s(Xi,"CODE",{});var q2=r($l);Kg=d(q2,"__call__"),q2.forEach(t),Zg=d(Xi," special method."),Xi.forEach(t),Yg=u(ra),y(Ho.$$.fragment,ra),eb=u(ra),y(Vo.$$.fragment,ra),ra.forEach(t),sa.forEach(t),Sp=u(o),Zt=s(o,"H2",{class:!0});var Xu=r(Zt);Jo=s(Xu,"A",{id:!0,class:!0,href:!0});var B2=r(Jo);xl=s(B2,"SPAN",{});var j2=r(xl);y(Bs.$$.fragment,j2),j2.forEach(t),B2.forEach(t),tb=u(Xu),zl=s(Xu,"SPAN",{});var E2=r(zl);ob=d(E2,"MBartForConditionalGeneration"),E2.forEach(t),Xu.forEach(t),Ap=u(o),Ue=s(o,"DIV",{class:!0});var ia=r(Ue);y(js.$$.fragment,ia),nb=u(ia),Es=s(ia,"P",{});var Qu=r(Es);ab=d(Qu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=s(Qu,"A",{href:!0});var C2=r(zi);sb=d(C2,"PreTrainedModel"),C2.forEach(t),rb=d(Qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qu.forEach(t),ib=u(ia),Cs=s(ia,"P",{});var Hu=r(Cs);db=d(Hu,"This model is also a PyTorch "),Ps=s(Hu,"A",{href:!0,rel:!0});var P2=r(Ps);lb=d(P2,"torch.nn.Module"),P2.forEach(t),cb=d(Hu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hu.forEach(t),pb=u(ia),je=s(ia,"DIV",{class:!0});var wt=r(je);y(Ss.$$.fragment,wt),ub=u(wt),Yt=s(wt,"P",{});var Qi=r(Yt);hb=d(Qi,"The "),Fi=s(Qi,"A",{href:!0});var S2=r(Fi);mb=d(S2,"MBartForConditionalGeneration"),S2.forEach(t),fb=d(Qi," forward method, overrides the "),Fl=s(Qi,"CODE",{});var A2=r(Fl);_b=d(A2,"__call__"),A2.forEach(t),gb=d(Qi," special method."),Qi.forEach(t),bb=u(wt),y(Ko.$$.fragment,wt),kb=u(wt),y(Zo.$$.fragment,wt),vb=u(wt),y(Yo.$$.fragment,wt),wt.forEach(t),ia.forEach(t),Op=u(o),eo=s(o,"H2",{class:!0});var Vu=r(eo);en=s(Vu,"A",{id:!0,class:!0,href:!0});var O2=r(en);ql=s(O2,"SPAN",{});var I2=r(ql);y(As.$$.fragment,I2),I2.forEach(t),O2.forEach(t),yb=u(Vu),Bl=s(Vu,"SPAN",{});var N2=r(Bl);Tb=d(N2,"MBartForQuestionAnswering"),N2.forEach(t),Vu.forEach(t),Ip=u(o),we=s(o,"DIV",{class:!0});var Mt=r(we);y(Os.$$.fragment,Mt),wb=u(Mt),to=s(Mt,"P",{});var Hi=r(to);Mb=d(Hi,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),jl=s(Hi,"CODE",{});var D2=r(jl);$b=d(D2,"span start logits"),D2.forEach(t),xb=d(Hi," and "),El=s(Hi,"CODE",{});var L2=r(El);zb=d(L2,"span end logits"),L2.forEach(t),Fb=d(Hi,")."),Hi.forEach(t),qb=u(Mt),Is=s(Mt,"P",{});var Ju=r(Is);Bb=d(Ju,"This model inherits from "),qi=s(Ju,"A",{href:!0});var G2=r(qi);jb=d(G2,"PreTrainedModel"),G2.forEach(t),Eb=d(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju.forEach(t),Cb=u(Mt),Ns=s(Mt,"P",{});var Ku=r(Ns);Pb=d(Ku,"This model is also a PyTorch "),Ds=s(Ku,"A",{href:!0,rel:!0});var W2=r(Ds);Sb=d(W2,"torch.nn.Module"),W2.forEach(t),Ab=d(Ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ku.forEach(t),Ob=u(Mt),Ee=s(Mt,"DIV",{class:!0});var $t=r(Ee);y(Ls.$$.fragment,$t),Ib=u($t),oo=s($t,"P",{});var Vi=r(oo);Nb=d(Vi,"The "),Bi=s(Vi,"A",{href:!0});var U2=r(Bi);Db=d(U2,"MBartForQuestionAnswering"),U2.forEach(t),Lb=d(Vi," forward method, overrides the "),Cl=s(Vi,"CODE",{});var R2=r(Cl);Gb=d(R2,"__call__"),R2.forEach(t),Wb=d(Vi," special method."),Vi.forEach(t),Ub=u($t),y(tn.$$.fragment,$t),Rb=u($t),y(on.$$.fragment,$t),Xb=u($t),y(nn.$$.fragment,$t),$t.forEach(t),Mt.forEach(t),Np=u(o),no=s(o,"H2",{class:!0});var Zu=r(no);an=s(Zu,"A",{id:!0,class:!0,href:!0});var X2=r(an);Pl=s(X2,"SPAN",{});var Q2=r(Pl);y(Gs.$$.fragment,Q2),Q2.forEach(t),X2.forEach(t),Qb=u(Zu),Sl=s(Zu,"SPAN",{});var H2=r(Sl);Hb=d(H2,"MBartForSequenceClassification"),H2.forEach(t),Zu.forEach(t),Dp=u(o),Me=s(o,"DIV",{class:!0});var xt=r(Me);y(Ws.$$.fragment,xt),Vb=u(xt),Al=s(xt,"P",{});var V2=r(Al);Jb=d(V2,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),V2.forEach(t),Kb=u(xt),Us=s(xt,"P",{});var Yu=r(Us);Zb=d(Yu,"This model inherits from "),ji=s(Yu,"A",{href:!0});var J2=r(ji);Yb=d(J2,"PreTrainedModel"),J2.forEach(t),ek=d(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yu.forEach(t),tk=u(xt),Rs=s(xt,"P",{});var eh=r(Rs);ok=d(eh,"This model is also a PyTorch "),Xs=s(eh,"A",{href:!0,rel:!0});var K2=r(Xs);nk=d(K2,"torch.nn.Module"),K2.forEach(t),ak=d(eh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh.forEach(t),sk=u(xt),Z=s(xt,"DIV",{class:!0});var Oe=r(Z);y(Qs.$$.fragment,Oe),rk=u(Oe),ao=s(Oe,"P",{});var Ji=r(ao);ik=d(Ji,"The "),Ei=s(Ji,"A",{href:!0});var Z2=r(Ei);dk=d(Z2,"MBartForSequenceClassification"),Z2.forEach(t),lk=d(Ji," forward method, overrides the "),Ol=s(Ji,"CODE",{});var Y2=r(Ol);ck=d(Y2,"__call__"),Y2.forEach(t),pk=d(Ji," special method."),Ji.forEach(t),uk=u(Oe),y(sn.$$.fragment,Oe),hk=u(Oe),y(rn.$$.fragment,Oe),mk=u(Oe),y(dn.$$.fragment,Oe),fk=u(Oe),y(ln.$$.fragment,Oe),_k=u(Oe),y(cn.$$.fragment,Oe),Oe.forEach(t),xt.forEach(t),Lp=u(o),so=s(o,"H2",{class:!0});var th=r(so);pn=s(th,"A",{id:!0,class:!0,href:!0});var ew=r(pn);Il=s(ew,"SPAN",{});var tw=r(Il);y(Hs.$$.fragment,tw),tw.forEach(t),ew.forEach(t),gk=u(th),Nl=s(th,"SPAN",{});var ow=r(Nl);bk=d(ow,"MBartForCausalLM"),ow.forEach(t),th.forEach(t),Gp=u(o),ro=s(o,"DIV",{class:!0});var oh=r(ro);y(Vs.$$.fragment,oh),kk=u(oh),un=s(oh,"DIV",{class:!0});var nh=r(un);y(Js.$$.fragment,nh),vk=u(nh),y(hn.$$.fragment,nh),nh.forEach(t),oh.forEach(t),Wp=u(o),io=s(o,"H2",{class:!0});var ah=r(io);mn=s(ah,"A",{id:!0,class:!0,href:!0});var nw=r(mn);Dl=s(nw,"SPAN",{});var aw=r(Dl);y(Ks.$$.fragment,aw),aw.forEach(t),nw.forEach(t),yk=u(ah),Ll=s(ah,"SPAN",{});var sw=r(Ll);Tk=d(sw,"TFMBartModel"),sw.forEach(t),ah.forEach(t),Up=u(o),$e=s(o,"DIV",{class:!0});var zt=r($e);y(Zs.$$.fragment,zt),wk=u(zt),Ys=s(zt,"P",{});var sh=r(Ys);Mk=d(sh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ci=s(sh,"A",{href:!0});var rw=r(Ci);$k=d(rw,"TFPreTrainedModel"),rw.forEach(t),xk=d(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),zk=u(zt),er=s(zt,"P",{});var rh=r(er);Fk=d(rh,"This model is also a "),tr=s(rh,"A",{href:!0,rel:!0});var iw=r(tr);qk=d(iw,"tf.keras.Model"),iw.forEach(t),Bk=d(rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh.forEach(t),jk=u(zt),y(fn.$$.fragment,zt),Ek=u(zt),Ye=s(zt,"DIV",{class:!0});var da=r(Ye);y(or.$$.fragment,da),Ck=u(da),lo=s(da,"P",{});var Ki=r(lo);Pk=d(Ki,"The "),Pi=s(Ki,"A",{href:!0});var dw=r(Pi);Sk=d(dw,"TFMBartModel"),dw.forEach(t),Ak=d(Ki," forward method, overrides the "),Gl=s(Ki,"CODE",{});var lw=r(Gl);Ok=d(lw,"__call__"),lw.forEach(t),Ik=d(Ki," special method."),Ki.forEach(t),Nk=u(da),y(_n.$$.fragment,da),Dk=u(da),y(gn.$$.fragment,da),da.forEach(t),zt.forEach(t),Rp=u(o),co=s(o,"H2",{class:!0});var ih=r(co);bn=s(ih,"A",{id:!0,class:!0,href:!0});var cw=r(bn);Wl=s(cw,"SPAN",{});var pw=r(Wl);y(nr.$$.fragment,pw),pw.forEach(t),cw.forEach(t),Lk=u(ih),Ul=s(ih,"SPAN",{});var uw=r(Ul);Gk=d(uw,"TFMBartForConditionalGeneration"),uw.forEach(t),ih.forEach(t),Xp=u(o),xe=s(o,"DIV",{class:!0});var Ft=r(xe);y(ar.$$.fragment,Ft),Wk=u(Ft),sr=s(Ft,"P",{});var dh=r(sr);Uk=d(dh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Si=s(dh,"A",{href:!0});var hw=r(Si);Rk=d(hw,"TFPreTrainedModel"),hw.forEach(t),Xk=d(dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dh.forEach(t),Qk=u(Ft),rr=s(Ft,"P",{});var lh=r(rr);Hk=d(lh,"This model is also a "),ir=s(lh,"A",{href:!0,rel:!0});var mw=r(ir);Vk=d(mw,"tf.keras.Model"),mw.forEach(t),Jk=d(lh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh.forEach(t),Kk=u(Ft),y(kn.$$.fragment,Ft),Zk=u(Ft),Ce=s(Ft,"DIV",{class:!0});var qt=r(Ce);y(dr.$$.fragment,qt),Yk=u(qt),po=s(qt,"P",{});var Zi=r(po);ev=d(Zi,"The "),Ai=s(Zi,"A",{href:!0});var fw=r(Ai);tv=d(fw,"TFMBartForConditionalGeneration"),fw.forEach(t),ov=d(Zi," forward method, overrides the "),Rl=s(Zi,"CODE",{});var _w=r(Rl);nv=d(_w,"__call__"),_w.forEach(t),av=d(Zi," special method."),Zi.forEach(t),sv=u(qt),y(vn.$$.fragment,qt),rv=u(qt),y(yn.$$.fragment,qt),iv=u(qt),y(Tn.$$.fragment,qt),qt.forEach(t),Ft.forEach(t),Qp=u(o),uo=s(o,"H2",{class:!0});var ch=r(uo);wn=s(ch,"A",{id:!0,class:!0,href:!0});var gw=r(wn);Xl=s(gw,"SPAN",{});var bw=r(Xl);y(lr.$$.fragment,bw),bw.forEach(t),gw.forEach(t),dv=u(ch),Ql=s(ch,"SPAN",{});var kw=r(Ql);lv=d(kw,"FlaxMBartModel"),kw.forEach(t),ch.forEach(t),Hp=u(o),W=s(o,"DIV",{class:!0});var pe=r(W);y(cr.$$.fragment,pe),cv=u(pe),pr=s(pe,"P",{});var ph=r(pr);pv=d(ph,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Oi=s(ph,"A",{href:!0});var vw=r(Oi);uv=d(vw,"FlaxPreTrainedModel"),vw.forEach(t),hv=d(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph.forEach(t),mv=u(pe),ur=s(pe,"P",{});var uh=r(ur);fv=d(uh,`This model is also a Flax Linen
`),hr=s(uh,"A",{href:!0,rel:!0});var yw=r(hr);_v=d(yw,"flax.nn.Module"),yw.forEach(t),gv=d(uh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),uh.forEach(t),bv=u(pe),Hl=s(pe,"P",{});var Tw=r(Hl);kv=d(Tw,"Finally, this model supports inherent JAX features such as:"),Tw.forEach(t),vv=u(pe),mt=s(pe,"UL",{});var la=r(mt);Vl=s(la,"LI",{});var ww=r(Vl);mr=s(ww,"A",{href:!0,rel:!0});var Mw=r(mr);yv=d(Mw,"Just-In-Time (JIT) compilation"),Mw.forEach(t),ww.forEach(t),Tv=u(la),Jl=s(la,"LI",{});var $w=r(Jl);fr=s($w,"A",{href:!0,rel:!0});var xw=r(fr);wv=d(xw,"Automatic Differentiation"),xw.forEach(t),$w.forEach(t),Mv=u(la),Kl=s(la,"LI",{});var zw=r(Kl);_r=s(zw,"A",{href:!0,rel:!0});var Fw=r(_r);$v=d(Fw,"Vectorization"),Fw.forEach(t),zw.forEach(t),xv=u(la),Zl=s(la,"LI",{});var qw=r(Zl);gr=s(qw,"A",{href:!0,rel:!0});var Bw=r(gr);zv=d(Bw,"Parallelization"),Bw.forEach(t),qw.forEach(t),la.forEach(t),Fv=u(pe),et=s(pe,"DIV",{class:!0});var ca=r(et);y(br.$$.fragment,ca),qv=u(ca),ho=s(ca,"P",{});var Yi=r(ho);Bv=d(Yi,"The "),Yl=s(Yi,"CODE",{});var jw=r(Yl);jv=d(jw,"FlaxMBartPreTrainedModel"),jw.forEach(t),Ev=d(Yi," forward method, overrides the "),ec=s(Yi,"CODE",{});var Ew=r(ec);Cv=d(Ew,"__call__"),Ew.forEach(t),Pv=d(Yi," special method."),Yi.forEach(t),Sv=u(ca),y(Mn.$$.fragment,ca),Av=u(ca),y($n.$$.fragment,ca),ca.forEach(t),Ov=u(pe),xn=s(pe,"DIV",{class:!0});var hh=r(xn);y(kr.$$.fragment,hh),Iv=u(hh),y(zn.$$.fragment,hh),hh.forEach(t),Nv=u(pe),Fn=s(pe,"DIV",{class:!0});var mh=r(Fn);y(vr.$$.fragment,mh),Dv=u(mh),y(qn.$$.fragment,mh),mh.forEach(t),pe.forEach(t),Vp=u(o),mo=s(o,"H2",{class:!0});var fh=r(mo);Bn=s(fh,"A",{id:!0,class:!0,href:!0});var Cw=r(Bn);tc=s(Cw,"SPAN",{});var Pw=r(tc);y(yr.$$.fragment,Pw),Pw.forEach(t),Cw.forEach(t),Lv=u(fh),oc=s(fh,"SPAN",{});var Sw=r(oc);Gv=d(Sw,"FlaxMBartForConditionalGeneration"),Sw.forEach(t),fh.forEach(t),Jp=u(o),U=s(o,"DIV",{class:!0});var ue=r(U);y(Tr.$$.fragment,ue),Wv=u(ue),wr=s(ue,"P",{});var _h=r(wr);Uv=d(_h,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=s(_h,"A",{href:!0});var Aw=r(Ii);Rv=d(Aw,"FlaxPreTrainedModel"),Aw.forEach(t),Xv=d(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),Qv=u(ue),Mr=s(ue,"P",{});var gh=r(Mr);Hv=d(gh,`This model is also a Flax Linen
`),$r=s(gh,"A",{href:!0,rel:!0});var Ow=r($r);Vv=d(Ow,"flax.nn.Module"),Ow.forEach(t),Jv=d(gh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gh.forEach(t),Kv=u(ue),nc=s(ue,"P",{});var Iw=r(nc);Zv=d(Iw,"Finally, this model supports inherent JAX features such as:"),Iw.forEach(t),Yv=u(ue),ft=s(ue,"UL",{});var pa=r(ft);ac=s(pa,"LI",{});var Nw=r(ac);xr=s(Nw,"A",{href:!0,rel:!0});var Dw=r(xr);ey=d(Dw,"Just-In-Time (JIT) compilation"),Dw.forEach(t),Nw.forEach(t),ty=u(pa),sc=s(pa,"LI",{});var Lw=r(sc);zr=s(Lw,"A",{href:!0,rel:!0});var Gw=r(zr);oy=d(Gw,"Automatic Differentiation"),Gw.forEach(t),Lw.forEach(t),ny=u(pa),rc=s(pa,"LI",{});var Ww=r(rc);Fr=s(Ww,"A",{href:!0,rel:!0});var Uw=r(Fr);ay=d(Uw,"Vectorization"),Uw.forEach(t),Ww.forEach(t),sy=u(pa),ic=s(pa,"LI",{});var Rw=r(ic);qr=s(Rw,"A",{href:!0,rel:!0});var Xw=r(qr);ry=d(Xw,"Parallelization"),Xw.forEach(t),Rw.forEach(t),pa.forEach(t),iy=u(ue),Pe=s(ue,"DIV",{class:!0});var Bt=r(Pe);y(Br.$$.fragment,Bt),dy=u(Bt),fo=s(Bt,"P",{});var ed=r(fo);ly=d(ed,"The "),dc=s(ed,"CODE",{});var Qw=r(dc);cy=d(Qw,"FlaxMBartPreTrainedModel"),Qw.forEach(t),py=d(ed," forward method, overrides the "),lc=s(ed,"CODE",{});var Hw=r(lc);uy=d(Hw,"__call__"),Hw.forEach(t),hy=d(ed," special method."),ed.forEach(t),my=u(Bt),y(jn.$$.fragment,Bt),fy=u(Bt),y(En.$$.fragment,Bt),_y=u(Bt),y(Cn.$$.fragment,Bt),Bt.forEach(t),gy=u(ue),Pn=s(ue,"DIV",{class:!0});var bh=r(Pn);y(jr.$$.fragment,bh),by=u(bh),y(Sn.$$.fragment,bh),bh.forEach(t),ky=u(ue),An=s(ue,"DIV",{class:!0});var kh=r(An);y(Er.$$.fragment,kh),vy=u(kh),y(On.$$.fragment,kh),kh.forEach(t),ue.forEach(t),Kp=u(o),_o=s(o,"H2",{class:!0});var vh=r(_o);In=s(vh,"A",{id:!0,class:!0,href:!0});var Vw=r(In);cc=s(Vw,"SPAN",{});var Jw=r(cc);y(Cr.$$.fragment,Jw),Jw.forEach(t),Vw.forEach(t),yy=u(vh),pc=s(vh,"SPAN",{});var Kw=r(pc);Ty=d(Kw,"FlaxMBartForSequenceClassification"),Kw.forEach(t),vh.forEach(t),Zp=u(o),N=s(o,"DIV",{class:!0});var te=r(N);y(Pr.$$.fragment,te),wy=u(te),uc=s(te,"P",{});var Zw=r(uc);My=d(Zw,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Zw.forEach(t),$y=u(te),Sr=s(te,"P",{});var yh=r(Sr);xy=d(yh,"This model inherits from "),Ni=s(yh,"A",{href:!0});var Yw=r(Ni);zy=d(Yw,"FlaxPreTrainedModel"),Yw.forEach(t),Fy=d(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),qy=u(te),Ar=s(te,"P",{});var Th=r(Ar);By=d(Th,`This model is also a Flax Linen
`),Or=s(Th,"A",{href:!0,rel:!0});var eM=r(Or);jy=d(eM,"flax.nn.Module"),eM.forEach(t),Ey=d(Th,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Th.forEach(t),Cy=u(te),hc=s(te,"P",{});var tM=r(hc);Py=d(tM,"Finally, this model supports inherent JAX features such as:"),tM.forEach(t),Sy=u(te),_t=s(te,"UL",{});var ua=r(_t);mc=s(ua,"LI",{});var oM=r(mc);Ir=s(oM,"A",{href:!0,rel:!0});var nM=r(Ir);Ay=d(nM,"Just-In-Time (JIT) compilation"),nM.forEach(t),oM.forEach(t),Oy=u(ua),fc=s(ua,"LI",{});var aM=r(fc);Nr=s(aM,"A",{href:!0,rel:!0});var sM=r(Nr);Iy=d(sM,"Automatic Differentiation"),sM.forEach(t),aM.forEach(t),Ny=u(ua),_c=s(ua,"LI",{});var rM=r(_c);Dr=s(rM,"A",{href:!0,rel:!0});var iM=r(Dr);Dy=d(iM,"Vectorization"),iM.forEach(t),rM.forEach(t),Ly=u(ua),gc=s(ua,"LI",{});var dM=r(gc);Lr=s(dM,"A",{href:!0,rel:!0});var lM=r(Lr);Gy=d(lM,"Parallelization"),lM.forEach(t),dM.forEach(t),ua.forEach(t),Wy=u(te),tt=s(te,"DIV",{class:!0});var ha=r(tt);y(Gr.$$.fragment,ha),Uy=u(ha),go=s(ha,"P",{});var td=r(go);Ry=d(td,"The "),bc=s(td,"CODE",{});var cM=r(bc);Xy=d(cM,"FlaxMBartPreTrainedModel"),cM.forEach(t),Qy=d(td," forward method, overrides the "),kc=s(td,"CODE",{});var pM=r(kc);Hy=d(pM,"__call__"),pM.forEach(t),Vy=d(td," special method."),td.forEach(t),Jy=u(ha),y(Nn.$$.fragment,ha),Ky=u(ha),y(Dn.$$.fragment,ha),ha.forEach(t),Zy=u(te),Ln=s(te,"DIV",{class:!0});var wh=r(Ln);y(Wr.$$.fragment,wh),Yy=u(wh),y(Gn.$$.fragment,wh),wh.forEach(t),e1=u(te),Wn=s(te,"DIV",{class:!0});var Mh=r(Wn);y(Ur.$$.fragment,Mh),t1=u(Mh),y(Un.$$.fragment,Mh),Mh.forEach(t),te.forEach(t),Yp=u(o),bo=s(o,"H2",{class:!0});var $h=r(bo);Rn=s($h,"A",{id:!0,class:!0,href:!0});var uM=r(Rn);vc=s(uM,"SPAN",{});var hM=r(vc);y(Rr.$$.fragment,hM),hM.forEach(t),uM.forEach(t),o1=u($h),yc=s($h,"SPAN",{});var mM=r(yc);n1=d(mM,"FlaxMBartForQuestionAnswering"),mM.forEach(t),$h.forEach(t),eu=u(o),D=s(o,"DIV",{class:!0});var oe=r(D);y(Xr.$$.fragment,oe),a1=u(oe),ko=s(oe,"P",{});var od=r(ko);s1=d(od,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Tc=s(od,"CODE",{});var fM=r(Tc);r1=d(fM,"span start logits"),fM.forEach(t),i1=d(od," and "),wc=s(od,"CODE",{});var _M=r(wc);d1=d(_M,"span end logits"),_M.forEach(t),l1=d(od,")."),od.forEach(t),c1=u(oe),Qr=s(oe,"P",{});var xh=r(Qr);p1=d(xh,"This model inherits from "),Di=s(xh,"A",{href:!0});var gM=r(Di);u1=d(gM,"FlaxPreTrainedModel"),gM.forEach(t),h1=d(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),m1=u(oe),Hr=s(oe,"P",{});var zh=r(Hr);f1=d(zh,`This model is also a Flax Linen
`),Vr=s(zh,"A",{href:!0,rel:!0});var bM=r(Vr);_1=d(bM,"flax.nn.Module"),bM.forEach(t),g1=d(zh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zh.forEach(t),b1=u(oe),Mc=s(oe,"P",{});var kM=r(Mc);k1=d(kM,"Finally, this model supports inherent JAX features such as:"),kM.forEach(t),v1=u(oe),gt=s(oe,"UL",{});var ma=r(gt);$c=s(ma,"LI",{});var vM=r($c);Jr=s(vM,"A",{href:!0,rel:!0});var yM=r(Jr);y1=d(yM,"Just-In-Time (JIT) compilation"),yM.forEach(t),vM.forEach(t),T1=u(ma),xc=s(ma,"LI",{});var TM=r(xc);Kr=s(TM,"A",{href:!0,rel:!0});var wM=r(Kr);w1=d(wM,"Automatic Differentiation"),wM.forEach(t),TM.forEach(t),M1=u(ma),zc=s(ma,"LI",{});var MM=r(zc);Zr=s(MM,"A",{href:!0,rel:!0});var $M=r(Zr);$1=d($M,"Vectorization"),$M.forEach(t),MM.forEach(t),x1=u(ma),Fc=s(ma,"LI",{});var xM=r(Fc);Yr=s(xM,"A",{href:!0,rel:!0});var zM=r(Yr);z1=d(zM,"Parallelization"),zM.forEach(t),xM.forEach(t),ma.forEach(t),F1=u(oe),ot=s(oe,"DIV",{class:!0});var fa=r(ot);y(ei.$$.fragment,fa),q1=u(fa),vo=s(fa,"P",{});var nd=r(vo);B1=d(nd,"The "),qc=s(nd,"CODE",{});var FM=r(qc);j1=d(FM,"FlaxMBartPreTrainedModel"),FM.forEach(t),E1=d(nd," forward method, overrides the "),Bc=s(nd,"CODE",{});var qM=r(Bc);C1=d(qM,"__call__"),qM.forEach(t),P1=d(nd," special method."),nd.forEach(t),S1=u(fa),y(Xn.$$.fragment,fa),A1=u(fa),y(Qn.$$.fragment,fa),fa.forEach(t),O1=u(oe),Hn=s(oe,"DIV",{class:!0});var Fh=r(Hn);y(ti.$$.fragment,Fh),I1=u(Fh),y(Vn.$$.fragment,Fh),Fh.forEach(t),N1=u(oe),Jn=s(oe,"DIV",{class:!0});var qh=r(Jn);y(oi.$$.fragment,qh),D1=u(qh),y(Kn.$$.fragment,qh),qh.forEach(t),oe.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify($$)),f(c,"id","mbart-and-mbart50"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#mbart-and-mbart50"),f(m,"class","relative group"),f(me,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(me,"rel","nofollow"),f(L,"id","overview-of-mbart"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#overview-of-mbart"),f(Q,"class","relative group"),f(H,"href","https://arxiv.org/abs/2001.08210"),f(H,"rel","nofollow"),f(be,"href","https://huggingface.co/valhalla"),f(be,"rel","nofollow"),f(ke,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),f(ke,"rel","nofollow"),f(j,"id","training-of-mbart"),f(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(j,"href","#training-of-mbart"),f(z,"class","relative group"),f(_a,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),f(li,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),f(Mo,"id","overview-of-mbart50"),f(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mo,"href","#overview-of-mbart50"),f(Nt,"class","relative group"),f(ya,"href","https://arxiv.org/abs/2008.00401"),f(ya,"rel","nofollow"),f($o,"id","training-of-mbart50"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#training-of-mbart50"),f(Dt,"class","relative group"),f(mi,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBart50Tokenizer"),f(zo,"id","transformers.MBartConfig"),f(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zo,"href","#transformers.MBartConfig"),f(Lt,"class","relative group"),f(gi,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartModel"),f(Fa,"href","https://huggingface.co/facebook/mbart-large-cc25"),f(Fa,"rel","nofollow"),f(bi,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(ki,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qo,"id","transformers.MBartTokenizer"),f(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qo,"href","#transformers.MBartTokenizer"),f(Ut,"class","relative group"),f(vi,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),f(yi,"href","/docs/transformers/v4.21.1/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(ja,"href","https://github.com/google/sentencepiece"),f(ja,"rel","nofollow"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Eo,"id","transformers.MBartTokenizerFast"),f(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Eo,"href","#transformers.MBartTokenizerFast"),f(Rt,"class","relative group"),f(La,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(La,"rel","nofollow"),f(Ti,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"id","transformers.MBart50Tokenizer"),f(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oo,"href","#transformers.MBart50Tokenizer"),f(Qt,"class","relative group"),f(ts,"href","https://github.com/google/sentencepiece"),f(ts,"rel","nofollow"),f(wi,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"id","transformers.MBart50TokenizerFast"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.MBart50TokenizerFast"),f(Ht,"class","relative group"),f(fs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(fs,"rel","nofollow"),f(Mi,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.MBartModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.MBartModel"),f(Jt,"class","relative group"),f($i,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fs,"rel","nofollow"),f(xi,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartModel"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.MBartForConditionalGeneration"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.MBartForConditionalGeneration"),f(Zt,"class","relative group"),f(zi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ps,"rel","nofollow"),f(Fi,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(en,"id","transformers.MBartForQuestionAnswering"),f(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(en,"href","#transformers.MBartForQuestionAnswering"),f(eo,"class","relative group"),f(qi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ds,"rel","nofollow"),f(Bi,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(an,"id","transformers.MBartForSequenceClassification"),f(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(an,"href","#transformers.MBartForSequenceClassification"),f(no,"class","relative group"),f(ji,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xs,"rel","nofollow"),f(Ei,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.MBartForSequenceClassification"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.MBartForCausalLM"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.MBartForCausalLM"),f(so,"class","relative group"),f(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.TFMBartModel"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.TFMBartModel"),f(io,"class","relative group"),f(Ci,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(tr,"rel","nofollow"),f(Pi,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.TFMBartModel"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"id","transformers.TFMBartForConditionalGeneration"),f(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bn,"href","#transformers.TFMBartForConditionalGeneration"),f(co,"class","relative group"),f(Si,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ir,"rel","nofollow"),f(Ai,"href","/docs/transformers/v4.21.1/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wn,"id","transformers.FlaxMBartModel"),f(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wn,"href","#transformers.FlaxMBartModel"),f(uo,"class","relative group"),f(Oi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(hr,"rel","nofollow"),f(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(mr,"rel","nofollow"),f(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(fr,"rel","nofollow"),f(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(_r,"rel","nofollow"),f(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gr,"rel","nofollow"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bn,"id","transformers.FlaxMBartForConditionalGeneration"),f(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bn,"href","#transformers.FlaxMBartForConditionalGeneration"),f(mo,"class","relative group"),f(Ii,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f($r,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f($r,"rel","nofollow"),f(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(xr,"rel","nofollow"),f(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(zr,"rel","nofollow"),f(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Fr,"rel","nofollow"),f(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(qr,"rel","nofollow"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(In,"id","transformers.FlaxMBartForSequenceClassification"),f(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(In,"href","#transformers.FlaxMBartForSequenceClassification"),f(_o,"class","relative group"),f(Ni,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Or,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Or,"rel","nofollow"),f(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ir,"rel","nofollow"),f(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Nr,"rel","nofollow"),f(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Dr,"rel","nofollow"),f(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Lr,"rel","nofollow"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rn,"id","transformers.FlaxMBartForQuestionAnswering"),f(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rn,"href","#transformers.FlaxMBartForQuestionAnswering"),f(bo,"class","relative group"),f(Di,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Vr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Vr,"rel","nofollow"),f(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Jr,"rel","nofollow"),f(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Kr,"rel","nofollow"),f(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Zr,"rel","nofollow"),f(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Yr,"rel","nofollow"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),b(o,k,_),b(o,m,_),e(m,c),e(c,g),T(n,g,null),e(m,h),e(m,q),e(q,st),b(o,ze,_),b(o,E,_),e(E,Ie),e(Ie,he),e(E,rt),e(E,me),e(me,fe),e(E,it),b(o,Xe,_),b(o,Q,_),e(Q,L),e(L,Ne),T(ne,Ne,null),e(Q,S),e(Q,A),e(A,dt),b(o,le,_),b(o,ce,_),e(ce,lt),e(ce,H),e(H,ct),e(ce,pt),b(o,G,_),b(o,Fe,_),e(Fe,_e),b(o,Qe,_),b(o,ae,_),e(ae,ge),e(ae,be),e(be,ut),e(ae,se),e(ae,ke),e(ke,ve),b(o,He,_),b(o,z,_),e(z,j),e(j,ye),T(De,ye,null),e(z,jt),e(z,V),e(V,Et),b(o,bt,_),b(o,X,_),e(X,re),e(X,ie),e(ie,Ct),e(X,Pt),e(X,de),e(de,St),e(X,At),e(X,Le),e(Le,Ot),e(X,Bh),e(X,ad),e(ad,jh),e(X,Eh),b(o,ip,_),b(o,kt,_),e(kt,Ch),e(kt,_a),e(_a,sd),e(sd,Ph),e(_a,Sh),e(kt,Ah),e(kt,li),e(li,Oh),e(kt,Ih),b(o,dp,_),b(o,ci,_),e(ci,rd),e(rd,Nh),b(o,lp,_),T(ga,o,_),b(o,cp,_),b(o,pi,_),e(pi,ba),e(ba,id),e(id,Dh),e(ba,Lh),e(ba,It),e(It,Gh),e(It,dd),e(dd,Wh),e(It,Uh),e(It,ld),e(ld,Rh),e(It,Xh),b(o,pp,_),T(ka,o,_),b(o,up,_),b(o,Nt,_),e(Nt,Mo),e(Mo,cd),T(va,cd,null),e(Nt,Qh),e(Nt,pd),e(pd,Hh),b(o,hp,_),b(o,vt,_),e(vt,Vh),e(vt,ya),e(ya,Jh),e(vt,Kh),e(vt,ud),e(ud,Zh),e(vt,Yh),b(o,mp,_),b(o,ui,_),e(ui,em),b(o,fp,_),b(o,hi,_),e(hi,hd),e(hd,tm),b(o,_p,_),b(o,Dt,_),e(Dt,$o),e($o,md),T(Ta,md,null),e(Dt,om),e(Dt,fd),e(fd,nm),b(o,gp,_),b(o,Ve,_),e(Ve,am),e(Ve,_d),e(_d,sm),e(Ve,rm),e(Ve,gd),e(gd,im),e(Ve,dm),e(Ve,bd),e(bd,lm),e(Ve,cm),b(o,bp,_),b(o,xo,_),e(xo,pm),e(xo,mi),e(mi,um),e(xo,hm),b(o,kp,_),b(o,fi,_),e(fi,kd),e(kd,mm),b(o,vp,_),T(wa,o,_),b(o,yp,_),b(o,_i,_),e(_i,Ma),e(Ma,vd),e(vd,fm),e(Ma,_m),e(Ma,Te),e(Te,gm),e(Te,yd),e(yd,bm),e(Te,km),e(Te,Td),e(Td,vm),e(Te,ym),e(Te,wd),e(wd,Tm),e(Te,wm),e(Te,Md),e(Md,Mm),e(Te,$m),e(Te,$d),e($d,xm),e(Te,zm),b(o,Tp,_),T($a,o,_),b(o,wp,_),b(o,Lt,_),e(Lt,zo),e(zo,xd),T(xa,xd,null),e(Lt,Fm),e(Lt,zd),e(zd,qm),b(o,Mp,_),b(o,Ge,_),T(za,Ge,null),e(Ge,Bm),e(Ge,Gt),e(Gt,jm),e(Gt,gi),e(gi,Em),e(Gt,Cm),e(Gt,Fa),e(Fa,Pm),e(Gt,Sm),e(Ge,Am),e(Ge,Wt),e(Wt,Om),e(Wt,bi),e(bi,Im),e(Wt,Nm),e(Wt,ki),e(ki,Dm),e(Wt,Lm),e(Ge,Gm),T(Fo,Ge,null),b(o,$p,_),b(o,Ut,_),e(Ut,qo),e(qo,Fd),T(qa,Fd,null),e(Ut,Wm),e(Ut,qd),e(qd,Um),b(o,xp,_),b(o,J,_),T(Ba,J,null),e(J,Rm),e(J,Bd),e(Bd,Xm),e(J,Qm),e(J,ht),e(ht,Hm),e(ht,vi),e(vi,Vm),e(ht,Jm),e(ht,yi),e(yi,Km),e(ht,Zm),e(ht,ja),e(ja,Ym),e(ht,ef),e(J,tf),e(J,Ea),e(Ea,of),e(Ea,jd),e(jd,nf),e(Ea,af),e(J,sf),T(Bo,J,null),e(J,rf),e(J,jo),T(Ca,jo,null),e(jo,df),e(jo,Ed),e(Ed,lf),e(J,cf),e(J,Je),T(Pa,Je,null),e(Je,pf),e(Je,Sa),e(Sa,uf),e(Sa,Cd),e(Cd,hf),e(Sa,mf),e(Je,ff),e(Je,Aa),e(Aa,Oa),e(Oa,Pd),e(Pd,_f),e(Oa,gf),e(Oa,Sd),e(Sd,bf),e(Aa,kf),e(Aa,Ia),e(Ia,Ad),e(Ad,vf),e(Ia,yf),e(Ia,Od),e(Od,Tf),e(Je,wf),e(Je,Id),e(Id,Mf),b(o,zp,_),b(o,Rt,_),e(Rt,Eo),e(Eo,Nd),T(Na,Nd,null),e(Rt,$f),e(Rt,Dd),e(Dd,xf),b(o,Fp,_),b(o,O,_),T(Da,O,null),e(O,zf),e(O,Xt),e(Xt,Ff),e(Xt,Ld),e(Ld,qf),e(Xt,Bf),e(Xt,La),e(La,jf),e(Xt,Ef),e(O,Cf),e(O,Ga),e(Ga,Pf),e(Ga,Ti),e(Ti,Sf),e(Ga,Af),e(O,Of),e(O,Wa),e(Wa,If),e(Wa,Gd),e(Gd,Nf),e(Wa,Df),e(O,Lf),T(Co,O,null),e(O,Gf),e(O,qe),T(Ua,qe,null),e(qe,Wf),e(qe,Wd),e(Wd,Uf),e(qe,Rf),e(qe,Ra),e(Ra,Xf),e(Ra,Ud),e(Ud,Qf),e(Ra,Hf),e(qe,Vf),e(qe,Xa),e(Xa,Qa),e(Qa,Rd),e(Rd,Jf),e(Qa,Kf),e(Qa,Xd),e(Xd,Zf),e(Xa,Yf),e(Xa,Ha),e(Ha,Qd),e(Qd,e_),e(Ha,t_),e(Ha,Hd),e(Hd,o_),e(qe,n_),e(qe,Vd),e(Vd,a_),e(O,s_),e(O,Po),T(Va,Po,null),e(Po,r_),e(Po,Jd),e(Jd,i_),e(O,d_),e(O,So),T(Ja,So,null),e(So,l_),e(So,Kd),e(Kd,c_),e(O,p_),e(O,Ao),T(Ka,Ao,null),e(Ao,u_),e(Ao,Zd),e(Zd,h_),b(o,qp,_),b(o,Qt,_),e(Qt,Oo),e(Oo,Yd),T(Za,Yd,null),e(Qt,m_),e(Qt,el),e(el,f_),b(o,Bp,_),b(o,I,_),T(Ya,I,null),e(I,__),e(I,es),e(es,g_),e(es,ts),e(ts,b_),e(es,k_),e(I,v_),e(I,os),e(os,y_),e(os,wi),e(wi,T_),e(os,w_),e(I,M_),T(Io,I,null),e(I,$_),e(I,Ke),T(ns,Ke,null),e(Ke,x_),e(Ke,as),e(as,z_),e(as,tl),e(tl,F_),e(as,q_),e(Ke,B_),e(Ke,ss),e(ss,rs),e(rs,ol),e(ol,j_),e(rs,E_),e(rs,nl),e(nl,C_),e(ss,P_),e(ss,is),e(is,al),e(al,S_),e(is,A_),e(is,sl),e(sl,O_),e(Ke,I_),e(Ke,rl),e(rl,N_),e(I,D_),e(I,No),T(ds,No,null),e(No,L_),e(No,il),e(il,G_),e(I,W_),e(I,Do),T(ls,Do,null),e(Do,U_),e(Do,cs),e(cs,R_),e(cs,dl),e(dl,X_),e(cs,Q_),e(I,H_),e(I,Lo),T(ps,Lo,null),e(Lo,V_),e(Lo,ll),e(ll,J_),e(I,K_),e(I,Go),T(us,Go,null),e(Go,Z_),e(Go,cl),e(cl,Y_),b(o,jp,_),b(o,Ht,_),e(Ht,Wo),e(Wo,pl),T(hs,pl,null),e(Ht,eg),e(Ht,ul),e(ul,tg),b(o,Ep,_),b(o,K,_),T(ms,K,null),e(K,og),e(K,Vt),e(Vt,ng),e(Vt,hl),e(hl,ag),e(Vt,sg),e(Vt,fs),e(fs,rg),e(Vt,ig),e(K,dg),e(K,_s),e(_s,lg),e(_s,Mi),e(Mi,cg),e(_s,pg),e(K,ug),T(Uo,K,null),e(K,hg),e(K,Be),T(gs,Be,null),e(Be,mg),e(Be,ml),e(ml,fg),e(Be,_g),e(Be,bs),e(bs,gg),e(bs,fl),e(fl,bg),e(bs,kg),e(Be,vg),e(Be,ks),e(ks,vs),e(vs,_l),e(_l,yg),e(vs,Tg),e(vs,gl),e(gl,wg),e(ks,Mg),e(ks,ys),e(ys,bl),e(bl,$g),e(ys,xg),e(ys,kl),e(kl,zg),e(Be,Fg),e(Be,vl),e(vl,qg),e(K,Bg),e(K,Ro),T(Ts,Ro,null),e(Ro,jg),e(Ro,yl),e(yl,Eg),e(K,Cg),e(K,Xo),T(ws,Xo,null),e(Xo,Pg),e(Xo,Tl),e(Tl,Sg),b(o,Cp,_),b(o,Jt,_),e(Jt,Qo),e(Qo,wl),T(Ms,wl,null),e(Jt,Ag),e(Jt,Ml),e(Ml,Og),b(o,Pp,_),b(o,We,_),T($s,We,null),e(We,Ig),e(We,xs),e(xs,Ng),e(xs,$i),e($i,Dg),e(xs,Lg),e(We,Gg),e(We,zs),e(zs,Wg),e(zs,Fs),e(Fs,Ug),e(zs,Rg),e(We,Xg),e(We,Ze),T(qs,Ze,null),e(Ze,Qg),e(Ze,Kt),e(Kt,Hg),e(Kt,xi),e(xi,Vg),e(Kt,Jg),e(Kt,$l),e($l,Kg),e(Kt,Zg),e(Ze,Yg),T(Ho,Ze,null),e(Ze,eb),T(Vo,Ze,null),b(o,Sp,_),b(o,Zt,_),e(Zt,Jo),e(Jo,xl),T(Bs,xl,null),e(Zt,tb),e(Zt,zl),e(zl,ob),b(o,Ap,_),b(o,Ue,_),T(js,Ue,null),e(Ue,nb),e(Ue,Es),e(Es,ab),e(Es,zi),e(zi,sb),e(Es,rb),e(Ue,ib),e(Ue,Cs),e(Cs,db),e(Cs,Ps),e(Ps,lb),e(Cs,cb),e(Ue,pb),e(Ue,je),T(Ss,je,null),e(je,ub),e(je,Yt),e(Yt,hb),e(Yt,Fi),e(Fi,mb),e(Yt,fb),e(Yt,Fl),e(Fl,_b),e(Yt,gb),e(je,bb),T(Ko,je,null),e(je,kb),T(Zo,je,null),e(je,vb),T(Yo,je,null),b(o,Op,_),b(o,eo,_),e(eo,en),e(en,ql),T(As,ql,null),e(eo,yb),e(eo,Bl),e(Bl,Tb),b(o,Ip,_),b(o,we,_),T(Os,we,null),e(we,wb),e(we,to),e(to,Mb),e(to,jl),e(jl,$b),e(to,xb),e(to,El),e(El,zb),e(to,Fb),e(we,qb),e(we,Is),e(Is,Bb),e(Is,qi),e(qi,jb),e(Is,Eb),e(we,Cb),e(we,Ns),e(Ns,Pb),e(Ns,Ds),e(Ds,Sb),e(Ns,Ab),e(we,Ob),e(we,Ee),T(Ls,Ee,null),e(Ee,Ib),e(Ee,oo),e(oo,Nb),e(oo,Bi),e(Bi,Db),e(oo,Lb),e(oo,Cl),e(Cl,Gb),e(oo,Wb),e(Ee,Ub),T(tn,Ee,null),e(Ee,Rb),T(on,Ee,null),e(Ee,Xb),T(nn,Ee,null),b(o,Np,_),b(o,no,_),e(no,an),e(an,Pl),T(Gs,Pl,null),e(no,Qb),e(no,Sl),e(Sl,Hb),b(o,Dp,_),b(o,Me,_),T(Ws,Me,null),e(Me,Vb),e(Me,Al),e(Al,Jb),e(Me,Kb),e(Me,Us),e(Us,Zb),e(Us,ji),e(ji,Yb),e(Us,ek),e(Me,tk),e(Me,Rs),e(Rs,ok),e(Rs,Xs),e(Xs,nk),e(Rs,ak),e(Me,sk),e(Me,Z),T(Qs,Z,null),e(Z,rk),e(Z,ao),e(ao,ik),e(ao,Ei),e(Ei,dk),e(ao,lk),e(ao,Ol),e(Ol,ck),e(ao,pk),e(Z,uk),T(sn,Z,null),e(Z,hk),T(rn,Z,null),e(Z,mk),T(dn,Z,null),e(Z,fk),T(ln,Z,null),e(Z,_k),T(cn,Z,null),b(o,Lp,_),b(o,so,_),e(so,pn),e(pn,Il),T(Hs,Il,null),e(so,gk),e(so,Nl),e(Nl,bk),b(o,Gp,_),b(o,ro,_),T(Vs,ro,null),e(ro,kk),e(ro,un),T(Js,un,null),e(un,vk),T(hn,un,null),b(o,Wp,_),b(o,io,_),e(io,mn),e(mn,Dl),T(Ks,Dl,null),e(io,yk),e(io,Ll),e(Ll,Tk),b(o,Up,_),b(o,$e,_),T(Zs,$e,null),e($e,wk),e($e,Ys),e(Ys,Mk),e(Ys,Ci),e(Ci,$k),e(Ys,xk),e($e,zk),e($e,er),e(er,Fk),e(er,tr),e(tr,qk),e(er,Bk),e($e,jk),T(fn,$e,null),e($e,Ek),e($e,Ye),T(or,Ye,null),e(Ye,Ck),e(Ye,lo),e(lo,Pk),e(lo,Pi),e(Pi,Sk),e(lo,Ak),e(lo,Gl),e(Gl,Ok),e(lo,Ik),e(Ye,Nk),T(_n,Ye,null),e(Ye,Dk),T(gn,Ye,null),b(o,Rp,_),b(o,co,_),e(co,bn),e(bn,Wl),T(nr,Wl,null),e(co,Lk),e(co,Ul),e(Ul,Gk),b(o,Xp,_),b(o,xe,_),T(ar,xe,null),e(xe,Wk),e(xe,sr),e(sr,Uk),e(sr,Si),e(Si,Rk),e(sr,Xk),e(xe,Qk),e(xe,rr),e(rr,Hk),e(rr,ir),e(ir,Vk),e(rr,Jk),e(xe,Kk),T(kn,xe,null),e(xe,Zk),e(xe,Ce),T(dr,Ce,null),e(Ce,Yk),e(Ce,po),e(po,ev),e(po,Ai),e(Ai,tv),e(po,ov),e(po,Rl),e(Rl,nv),e(po,av),e(Ce,sv),T(vn,Ce,null),e(Ce,rv),T(yn,Ce,null),e(Ce,iv),T(Tn,Ce,null),b(o,Qp,_),b(o,uo,_),e(uo,wn),e(wn,Xl),T(lr,Xl,null),e(uo,dv),e(uo,Ql),e(Ql,lv),b(o,Hp,_),b(o,W,_),T(cr,W,null),e(W,cv),e(W,pr),e(pr,pv),e(pr,Oi),e(Oi,uv),e(pr,hv),e(W,mv),e(W,ur),e(ur,fv),e(ur,hr),e(hr,_v),e(ur,gv),e(W,bv),e(W,Hl),e(Hl,kv),e(W,vv),e(W,mt),e(mt,Vl),e(Vl,mr),e(mr,yv),e(mt,Tv),e(mt,Jl),e(Jl,fr),e(fr,wv),e(mt,Mv),e(mt,Kl),e(Kl,_r),e(_r,$v),e(mt,xv),e(mt,Zl),e(Zl,gr),e(gr,zv),e(W,Fv),e(W,et),T(br,et,null),e(et,qv),e(et,ho),e(ho,Bv),e(ho,Yl),e(Yl,jv),e(ho,Ev),e(ho,ec),e(ec,Cv),e(ho,Pv),e(et,Sv),T(Mn,et,null),e(et,Av),T($n,et,null),e(W,Ov),e(W,xn),T(kr,xn,null),e(xn,Iv),T(zn,xn,null),e(W,Nv),e(W,Fn),T(vr,Fn,null),e(Fn,Dv),T(qn,Fn,null),b(o,Vp,_),b(o,mo,_),e(mo,Bn),e(Bn,tc),T(yr,tc,null),e(mo,Lv),e(mo,oc),e(oc,Gv),b(o,Jp,_),b(o,U,_),T(Tr,U,null),e(U,Wv),e(U,wr),e(wr,Uv),e(wr,Ii),e(Ii,Rv),e(wr,Xv),e(U,Qv),e(U,Mr),e(Mr,Hv),e(Mr,$r),e($r,Vv),e(Mr,Jv),e(U,Kv),e(U,nc),e(nc,Zv),e(U,Yv),e(U,ft),e(ft,ac),e(ac,xr),e(xr,ey),e(ft,ty),e(ft,sc),e(sc,zr),e(zr,oy),e(ft,ny),e(ft,rc),e(rc,Fr),e(Fr,ay),e(ft,sy),e(ft,ic),e(ic,qr),e(qr,ry),e(U,iy),e(U,Pe),T(Br,Pe,null),e(Pe,dy),e(Pe,fo),e(fo,ly),e(fo,dc),e(dc,cy),e(fo,py),e(fo,lc),e(lc,uy),e(fo,hy),e(Pe,my),T(jn,Pe,null),e(Pe,fy),T(En,Pe,null),e(Pe,_y),T(Cn,Pe,null),e(U,gy),e(U,Pn),T(jr,Pn,null),e(Pn,by),T(Sn,Pn,null),e(U,ky),e(U,An),T(Er,An,null),e(An,vy),T(On,An,null),b(o,Kp,_),b(o,_o,_),e(_o,In),e(In,cc),T(Cr,cc,null),e(_o,yy),e(_o,pc),e(pc,Ty),b(o,Zp,_),b(o,N,_),T(Pr,N,null),e(N,wy),e(N,uc),e(uc,My),e(N,$y),e(N,Sr),e(Sr,xy),e(Sr,Ni),e(Ni,zy),e(Sr,Fy),e(N,qy),e(N,Ar),e(Ar,By),e(Ar,Or),e(Or,jy),e(Ar,Ey),e(N,Cy),e(N,hc),e(hc,Py),e(N,Sy),e(N,_t),e(_t,mc),e(mc,Ir),e(Ir,Ay),e(_t,Oy),e(_t,fc),e(fc,Nr),e(Nr,Iy),e(_t,Ny),e(_t,_c),e(_c,Dr),e(Dr,Dy),e(_t,Ly),e(_t,gc),e(gc,Lr),e(Lr,Gy),e(N,Wy),e(N,tt),T(Gr,tt,null),e(tt,Uy),e(tt,go),e(go,Ry),e(go,bc),e(bc,Xy),e(go,Qy),e(go,kc),e(kc,Hy),e(go,Vy),e(tt,Jy),T(Nn,tt,null),e(tt,Ky),T(Dn,tt,null),e(N,Zy),e(N,Ln),T(Wr,Ln,null),e(Ln,Yy),T(Gn,Ln,null),e(N,e1),e(N,Wn),T(Ur,Wn,null),e(Wn,t1),T(Un,Wn,null),b(o,Yp,_),b(o,bo,_),e(bo,Rn),e(Rn,vc),T(Rr,vc,null),e(bo,o1),e(bo,yc),e(yc,n1),b(o,eu,_),b(o,D,_),T(Xr,D,null),e(D,a1),e(D,ko),e(ko,s1),e(ko,Tc),e(Tc,r1),e(ko,i1),e(ko,wc),e(wc,d1),e(ko,l1),e(D,c1),e(D,Qr),e(Qr,p1),e(Qr,Di),e(Di,u1),e(Qr,h1),e(D,m1),e(D,Hr),e(Hr,f1),e(Hr,Vr),e(Vr,_1),e(Hr,g1),e(D,b1),e(D,Mc),e(Mc,k1),e(D,v1),e(D,gt),e(gt,$c),e($c,Jr),e(Jr,y1),e(gt,T1),e(gt,xc),e(xc,Kr),e(Kr,w1),e(gt,M1),e(gt,zc),e(zc,Zr),e(Zr,$1),e(gt,x1),e(gt,Fc),e(Fc,Yr),e(Yr,z1),e(D,F1),e(D,ot),T(ei,ot,null),e(ot,q1),e(ot,vo),e(vo,B1),e(vo,qc),e(qc,j1),e(vo,E1),e(vo,Bc),e(Bc,C1),e(vo,P1),e(ot,S1),T(Xn,ot,null),e(ot,A1),T(Qn,ot,null),e(D,O1),e(D,Hn),T(ti,Hn,null),e(Hn,I1),T(Vn,Hn,null),e(D,N1),e(D,Jn),T(oi,Jn,null),e(Jn,D1),T(Kn,Jn,null),tu=!0},p(o,[_]){const ni={};_&2&&(ni.$$scope={dirty:_,ctx:o}),Fo.$set(ni);const jc={};_&2&&(jc.$$scope={dirty:_,ctx:o}),Bo.$set(jc);const Ec={};_&2&&(Ec.$$scope={dirty:_,ctx:o}),Co.$set(Ec);const Cc={};_&2&&(Cc.$$scope={dirty:_,ctx:o}),Io.$set(Cc);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:o}),Uo.$set(Zn);const Pc={};_&2&&(Pc.$$scope={dirty:_,ctx:o}),Ho.$set(Pc);const Sc={};_&2&&(Sc.$$scope={dirty:_,ctx:o}),Vo.$set(Sc);const ai={};_&2&&(ai.$$scope={dirty:_,ctx:o}),Ko.$set(ai);const Ac={};_&2&&(Ac.$$scope={dirty:_,ctx:o}),Zo.$set(Ac);const Oc={};_&2&&(Oc.$$scope={dirty:_,ctx:o}),Yo.$set(Oc);const Ic={};_&2&&(Ic.$$scope={dirty:_,ctx:o}),tn.$set(Ic);const si={};_&2&&(si.$$scope={dirty:_,ctx:o}),on.$set(si);const Nc={};_&2&&(Nc.$$scope={dirty:_,ctx:o}),nn.$set(Nc);const Dc={};_&2&&(Dc.$$scope={dirty:_,ctx:o}),sn.$set(Dc);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:o}),rn.$set(Yn);const Lc={};_&2&&(Lc.$$scope={dirty:_,ctx:o}),dn.$set(Lc);const Gc={};_&2&&(Gc.$$scope={dirty:_,ctx:o}),ln.$set(Gc);const ri={};_&2&&(ri.$$scope={dirty:_,ctx:o}),cn.$set(ri);const Wc={};_&2&&(Wc.$$scope={dirty:_,ctx:o}),hn.$set(Wc);const Uc={};_&2&&(Uc.$$scope={dirty:_,ctx:o}),fn.$set(Uc);const Rc={};_&2&&(Rc.$$scope={dirty:_,ctx:o}),_n.$set(Rc);const Re={};_&2&&(Re.$$scope={dirty:_,ctx:o}),gn.$set(Re);const Xc={};_&2&&(Xc.$$scope={dirty:_,ctx:o}),kn.$set(Xc);const Qc={};_&2&&(Qc.$$scope={dirty:_,ctx:o}),vn.$set(Qc);const Hc={};_&2&&(Hc.$$scope={dirty:_,ctx:o}),yn.$set(Hc);const Vc={};_&2&&(Vc.$$scope={dirty:_,ctx:o}),Tn.$set(Vc);const yo={};_&2&&(yo.$$scope={dirty:_,ctx:o}),Mn.$set(yo);const Li={};_&2&&(Li.$$scope={dirty:_,ctx:o}),$n.$set(Li);const Jc={};_&2&&(Jc.$$scope={dirty:_,ctx:o}),zn.$set(Jc);const Kc={};_&2&&(Kc.$$scope={dirty:_,ctx:o}),qn.$set(Kc);const Zc={};_&2&&(Zc.$$scope={dirty:_,ctx:o}),jn.$set(Zc);const Yc={};_&2&&(Yc.$$scope={dirty:_,ctx:o}),En.$set(Yc);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:o}),Cn.$set(ep);const ii={};_&2&&(ii.$$scope={dirty:_,ctx:o}),Sn.$set(ii);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:o}),On.$set(tp);const To={};_&2&&(To.$$scope={dirty:_,ctx:o}),Nn.$set(To);const op={};_&2&&(op.$$scope={dirty:_,ctx:o}),Dn.$set(op);const np={};_&2&&(np.$$scope={dirty:_,ctx:o}),Gn.$set(np);const di={};_&2&&(di.$$scope={dirty:_,ctx:o}),Un.$set(di);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:o}),Xn.$set(ap);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:o}),Qn.$set(sp);const rp={};_&2&&(rp.$$scope={dirty:_,ctx:o}),Vn.$set(rp);const wo={};_&2&&(wo.$$scope={dirty:_,ctx:o}),Kn.$set(wo)},i(o){tu||(w(n.$$.fragment,o),w(ne.$$.fragment,o),w(De.$$.fragment,o),w(ga.$$.fragment,o),w(ka.$$.fragment,o),w(va.$$.fragment,o),w(Ta.$$.fragment,o),w(wa.$$.fragment,o),w($a.$$.fragment,o),w(xa.$$.fragment,o),w(za.$$.fragment,o),w(Fo.$$.fragment,o),w(qa.$$.fragment,o),w(Ba.$$.fragment,o),w(Bo.$$.fragment,o),w(Ca.$$.fragment,o),w(Pa.$$.fragment,o),w(Na.$$.fragment,o),w(Da.$$.fragment,o),w(Co.$$.fragment,o),w(Ua.$$.fragment,o),w(Va.$$.fragment,o),w(Ja.$$.fragment,o),w(Ka.$$.fragment,o),w(Za.$$.fragment,o),w(Ya.$$.fragment,o),w(Io.$$.fragment,o),w(ns.$$.fragment,o),w(ds.$$.fragment,o),w(ls.$$.fragment,o),w(ps.$$.fragment,o),w(us.$$.fragment,o),w(hs.$$.fragment,o),w(ms.$$.fragment,o),w(Uo.$$.fragment,o),w(gs.$$.fragment,o),w(Ts.$$.fragment,o),w(ws.$$.fragment,o),w(Ms.$$.fragment,o),w($s.$$.fragment,o),w(qs.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Bs.$$.fragment,o),w(js.$$.fragment,o),w(Ss.$$.fragment,o),w(Ko.$$.fragment,o),w(Zo.$$.fragment,o),w(Yo.$$.fragment,o),w(As.$$.fragment,o),w(Os.$$.fragment,o),w(Ls.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(Gs.$$.fragment,o),w(Ws.$$.fragment,o),w(Qs.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(Hs.$$.fragment,o),w(Vs.$$.fragment,o),w(Js.$$.fragment,o),w(hn.$$.fragment,o),w(Ks.$$.fragment,o),w(Zs.$$.fragment,o),w(fn.$$.fragment,o),w(or.$$.fragment,o),w(_n.$$.fragment,o),w(gn.$$.fragment,o),w(nr.$$.fragment,o),w(ar.$$.fragment,o),w(kn.$$.fragment,o),w(dr.$$.fragment,o),w(vn.$$.fragment,o),w(yn.$$.fragment,o),w(Tn.$$.fragment,o),w(lr.$$.fragment,o),w(cr.$$.fragment,o),w(br.$$.fragment,o),w(Mn.$$.fragment,o),w($n.$$.fragment,o),w(kr.$$.fragment,o),w(zn.$$.fragment,o),w(vr.$$.fragment,o),w(qn.$$.fragment,o),w(yr.$$.fragment,o),w(Tr.$$.fragment,o),w(Br.$$.fragment,o),w(jn.$$.fragment,o),w(En.$$.fragment,o),w(Cn.$$.fragment,o),w(jr.$$.fragment,o),w(Sn.$$.fragment,o),w(Er.$$.fragment,o),w(On.$$.fragment,o),w(Cr.$$.fragment,o),w(Pr.$$.fragment,o),w(Gr.$$.fragment,o),w(Nn.$$.fragment,o),w(Dn.$$.fragment,o),w(Wr.$$.fragment,o),w(Gn.$$.fragment,o),w(Ur.$$.fragment,o),w(Un.$$.fragment,o),w(Rr.$$.fragment,o),w(Xr.$$.fragment,o),w(ei.$$.fragment,o),w(Xn.$$.fragment,o),w(Qn.$$.fragment,o),w(ti.$$.fragment,o),w(Vn.$$.fragment,o),w(oi.$$.fragment,o),w(Kn.$$.fragment,o),tu=!0)},o(o){M(n.$$.fragment,o),M(ne.$$.fragment,o),M(De.$$.fragment,o),M(ga.$$.fragment,o),M(ka.$$.fragment,o),M(va.$$.fragment,o),M(Ta.$$.fragment,o),M(wa.$$.fragment,o),M($a.$$.fragment,o),M(xa.$$.fragment,o),M(za.$$.fragment,o),M(Fo.$$.fragment,o),M(qa.$$.fragment,o),M(Ba.$$.fragment,o),M(Bo.$$.fragment,o),M(Ca.$$.fragment,o),M(Pa.$$.fragment,o),M(Na.$$.fragment,o),M(Da.$$.fragment,o),M(Co.$$.fragment,o),M(Ua.$$.fragment,o),M(Va.$$.fragment,o),M(Ja.$$.fragment,o),M(Ka.$$.fragment,o),M(Za.$$.fragment,o),M(Ya.$$.fragment,o),M(Io.$$.fragment,o),M(ns.$$.fragment,o),M(ds.$$.fragment,o),M(ls.$$.fragment,o),M(ps.$$.fragment,o),M(us.$$.fragment,o),M(hs.$$.fragment,o),M(ms.$$.fragment,o),M(Uo.$$.fragment,o),M(gs.$$.fragment,o),M(Ts.$$.fragment,o),M(ws.$$.fragment,o),M(Ms.$$.fragment,o),M($s.$$.fragment,o),M(qs.$$.fragment,o),M(Ho.$$.fragment,o),M(Vo.$$.fragment,o),M(Bs.$$.fragment,o),M(js.$$.fragment,o),M(Ss.$$.fragment,o),M(Ko.$$.fragment,o),M(Zo.$$.fragment,o),M(Yo.$$.fragment,o),M(As.$$.fragment,o),M(Os.$$.fragment,o),M(Ls.$$.fragment,o),M(tn.$$.fragment,o),M(on.$$.fragment,o),M(nn.$$.fragment,o),M(Gs.$$.fragment,o),M(Ws.$$.fragment,o),M(Qs.$$.fragment,o),M(sn.$$.fragment,o),M(rn.$$.fragment,o),M(dn.$$.fragment,o),M(ln.$$.fragment,o),M(cn.$$.fragment,o),M(Hs.$$.fragment,o),M(Vs.$$.fragment,o),M(Js.$$.fragment,o),M(hn.$$.fragment,o),M(Ks.$$.fragment,o),M(Zs.$$.fragment,o),M(fn.$$.fragment,o),M(or.$$.fragment,o),M(_n.$$.fragment,o),M(gn.$$.fragment,o),M(nr.$$.fragment,o),M(ar.$$.fragment,o),M(kn.$$.fragment,o),M(dr.$$.fragment,o),M(vn.$$.fragment,o),M(yn.$$.fragment,o),M(Tn.$$.fragment,o),M(lr.$$.fragment,o),M(cr.$$.fragment,o),M(br.$$.fragment,o),M(Mn.$$.fragment,o),M($n.$$.fragment,o),M(kr.$$.fragment,o),M(zn.$$.fragment,o),M(vr.$$.fragment,o),M(qn.$$.fragment,o),M(yr.$$.fragment,o),M(Tr.$$.fragment,o),M(Br.$$.fragment,o),M(jn.$$.fragment,o),M(En.$$.fragment,o),M(Cn.$$.fragment,o),M(jr.$$.fragment,o),M(Sn.$$.fragment,o),M(Er.$$.fragment,o),M(On.$$.fragment,o),M(Cr.$$.fragment,o),M(Pr.$$.fragment,o),M(Gr.$$.fragment,o),M(Nn.$$.fragment,o),M(Dn.$$.fragment,o),M(Wr.$$.fragment,o),M(Gn.$$.fragment,o),M(Ur.$$.fragment,o),M(Un.$$.fragment,o),M(Rr.$$.fragment,o),M(Xr.$$.fragment,o),M(ei.$$.fragment,o),M(Xn.$$.fragment,o),M(Qn.$$.fragment,o),M(ti.$$.fragment,o),M(Vn.$$.fragment,o),M(oi.$$.fragment,o),M(Kn.$$.fragment,o),tu=!1},d(o){t(l),o&&t(k),o&&t(m),$(n),o&&t(ze),o&&t(E),o&&t(Xe),o&&t(Q),$(ne),o&&t(le),o&&t(ce),o&&t(G),o&&t(Fe),o&&t(Qe),o&&t(ae),o&&t(He),o&&t(z),$(De),o&&t(bt),o&&t(X),o&&t(ip),o&&t(kt),o&&t(dp),o&&t(ci),o&&t(lp),$(ga,o),o&&t(cp),o&&t(pi),o&&t(pp),$(ka,o),o&&t(up),o&&t(Nt),$(va),o&&t(hp),o&&t(vt),o&&t(mp),o&&t(ui),o&&t(fp),o&&t(hi),o&&t(_p),o&&t(Dt),$(Ta),o&&t(gp),o&&t(Ve),o&&t(bp),o&&t(xo),o&&t(kp),o&&t(fi),o&&t(vp),$(wa,o),o&&t(yp),o&&t(_i),o&&t(Tp),$($a,o),o&&t(wp),o&&t(Lt),$(xa),o&&t(Mp),o&&t(Ge),$(za),$(Fo),o&&t($p),o&&t(Ut),$(qa),o&&t(xp),o&&t(J),$(Ba),$(Bo),$(Ca),$(Pa),o&&t(zp),o&&t(Rt),$(Na),o&&t(Fp),o&&t(O),$(Da),$(Co),$(Ua),$(Va),$(Ja),$(Ka),o&&t(qp),o&&t(Qt),$(Za),o&&t(Bp),o&&t(I),$(Ya),$(Io),$(ns),$(ds),$(ls),$(ps),$(us),o&&t(jp),o&&t(Ht),$(hs),o&&t(Ep),o&&t(K),$(ms),$(Uo),$(gs),$(Ts),$(ws),o&&t(Cp),o&&t(Jt),$(Ms),o&&t(Pp),o&&t(We),$($s),$(qs),$(Ho),$(Vo),o&&t(Sp),o&&t(Zt),$(Bs),o&&t(Ap),o&&t(Ue),$(js),$(Ss),$(Ko),$(Zo),$(Yo),o&&t(Op),o&&t(eo),$(As),o&&t(Ip),o&&t(we),$(Os),$(Ls),$(tn),$(on),$(nn),o&&t(Np),o&&t(no),$(Gs),o&&t(Dp),o&&t(Me),$(Ws),$(Qs),$(sn),$(rn),$(dn),$(ln),$(cn),o&&t(Lp),o&&t(so),$(Hs),o&&t(Gp),o&&t(ro),$(Vs),$(Js),$(hn),o&&t(Wp),o&&t(io),$(Ks),o&&t(Up),o&&t($e),$(Zs),$(fn),$(or),$(_n),$(gn),o&&t(Rp),o&&t(co),$(nr),o&&t(Xp),o&&t(xe),$(ar),$(kn),$(dr),$(vn),$(yn),$(Tn),o&&t(Qp),o&&t(uo),$(lr),o&&t(Hp),o&&t(W),$(cr),$(br),$(Mn),$($n),$(kr),$(zn),$(vr),$(qn),o&&t(Vp),o&&t(mo),$(yr),o&&t(Jp),o&&t(U),$(Tr),$(Br),$(jn),$(En),$(Cn),$(jr),$(Sn),$(Er),$(On),o&&t(Kp),o&&t(_o),$(Cr),o&&t(Zp),o&&t(N),$(Pr),$(Gr),$(Nn),$(Dn),$(Wr),$(Gn),$(Ur),$(Un),o&&t(Yp),o&&t(bo),$(Rr),o&&t(eu),o&&t(D),$(Xr),$(ei),$(Xn),$(Qn),$(ti),$(Vn),$(oi),$(Kn)}}}const $$={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function x$(x){return PM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class C$ extends BM{constructor(l){super();jM(this,l,x$,M$,EM,{})}}export{C$ as default,$$ as metadata};
