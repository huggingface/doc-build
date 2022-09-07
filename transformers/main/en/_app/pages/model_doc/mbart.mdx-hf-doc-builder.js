import{S as P2,i as S2,s as O2,e as a,k as p,w as y,t as i,M as A2,c as s,d as t,m as u,a as r,x as v,h as d,b as f,G as e,g as b,y as T,q as w,o as M,B as $,v as I2,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as st}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as B}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as U}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function N2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function D2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function L2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function G2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors="pt")
# model(**model_inputs) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function W2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors="pt")
# model(**model_inputs) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function R2(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function U2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function X2(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Q2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),{c(){l=a("p"),k=i("Translation example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Translation example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function V2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function H2(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function J2(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
<span class="hljs-string">&#x27;? Jim Henson was a&#x27;</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function K2(x){let l,k;return l=new B({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.55</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Z2(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Y2(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of single-label classification:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function ex(x){let l,k;return l=new B({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function tx(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of multi-label classification:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function ox(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function nx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function ax(x){let l,k,m,c,g,n,h,q,rt,ze,C,Ae,he,it,me,fe,dt,Ue,Q,L,Ie,oe,S,O,lt,le,ce,ct,V,pt,ut,G,Fe,_e,Xe,ne,ge,be,ht,ae,ke,ye,Qe;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),rt=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),C=a("p"),Ae=i("This second option is useful when using "),he=a("code"),it=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),dt=i("model(inputs)"),Ue=i("."),Q=p(),L=a("p"),Ie=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),S=a("ul"),O=a("li"),lt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),ct=i(" only and nothing else: "),V=a("code"),pt=i("model(input_ids)"),ut=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Xe=i("model([input_ids, attention_mask])"),ne=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ht=p(),ae=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Qe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);g=s(ve,"LI",{});var Ne=r(g);n=d(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),h=u(ve),q=s(ve,"LI",{});var Ct=r(q);rt=d(Ct,"having all inputs as a list, tuple or dict in the first positional arguments."),Ct.forEach(t),ve.forEach(t),ze=u(z),C=s(z,"P",{});var H=r(C);Ae=d(H,"This second option is useful when using "),he=s(H,"CODE",{});var Et=r(he);it=d(Et,"tf.keras.Model.fit"),Et.forEach(t),me=d(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(H,"CODE",{});var yt=r(fe);dt=d(yt,"model(inputs)"),yt.forEach(t),Ue=d(H,"."),H.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ie=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),oe=u(z),S=s(z,"UL",{});var se=r(S);O=s(se,"LI",{});var re=r(O);lt=d(re,"a single Tensor with "),le=s(re,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),ct=d(re," only and nothing else: "),V=s(re,"CODE",{});var St=r(V);pt=d(St,"model(input_ids)"),St.forEach(t),re.forEach(t),ut=u(se),G=s(se,"LI",{});var ie=r(G);Fe=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(ie,"CODE",{});var Ot=r(_e);Xe=d(Ot,"model([input_ids, attention_mask])"),Ot.forEach(t),ne=d(ie," or "),ge=s(ie,"CODE",{});var At=r(ge);be=d(At,"model([input_ids, attention_mask, token_type_ids])"),At.forEach(t),ie.forEach(t),ht=u(se),ae=s(se,"LI",{});var De=r(ae);ke=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var It=r(ye);Qe=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),De.forEach(t),se.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,rt),b(z,ze,j),b(z,C,j),e(C,Ae),e(C,he),e(he,it),e(C,me),e(C,fe),e(fe,dt),e(C,Ue),b(z,Q,j),b(z,L,j),e(L,Ie),b(z,oe,j),b(z,S,j),e(S,O),e(O,lt),e(O,le),e(le,ce),e(O,ct),e(O,V),e(V,pt),e(S,ut),e(S,G),e(G,Fe),e(G,_e),e(_e,Xe),e(G,ne),e(G,ge),e(ge,be),e(S,ht),e(S,ae),e(ae,ke),e(ae,ye),e(ye,Qe)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(C),z&&t(Q),z&&t(L),z&&t(oe),z&&t(S)}}}function sx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function rx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function ix(x){let l,k,m,c,g,n,h,q,rt,ze,C,Ae,he,it,me,fe,dt,Ue,Q,L,Ie,oe,S,O,lt,le,ce,ct,V,pt,ut,G,Fe,_e,Xe,ne,ge,be,ht,ae,ke,ye,Qe;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),rt=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),C=a("p"),Ae=i("This second option is useful when using "),he=a("code"),it=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),dt=i("model(inputs)"),Ue=i("."),Q=p(),L=a("p"),Ie=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),S=a("ul"),O=a("li"),lt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),ct=i(" only and nothing else: "),V=a("code"),pt=i("model(input_ids)"),ut=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Xe=i("model([input_ids, attention_mask])"),ne=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ht=p(),ae=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Qe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);g=s(ve,"LI",{});var Ne=r(g);n=d(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),h=u(ve),q=s(ve,"LI",{});var Ct=r(q);rt=d(Ct,"having all inputs as a list, tuple or dict in the first positional arguments."),Ct.forEach(t),ve.forEach(t),ze=u(z),C=s(z,"P",{});var H=r(C);Ae=d(H,"This second option is useful when using "),he=s(H,"CODE",{});var Et=r(he);it=d(Et,"tf.keras.Model.fit"),Et.forEach(t),me=d(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(H,"CODE",{});var yt=r(fe);dt=d(yt,"model(inputs)"),yt.forEach(t),Ue=d(H,"."),H.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ie=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),oe=u(z),S=s(z,"UL",{});var se=r(S);O=s(se,"LI",{});var re=r(O);lt=d(re,"a single Tensor with "),le=s(re,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),ct=d(re," only and nothing else: "),V=s(re,"CODE",{});var St=r(V);pt=d(St,"model(input_ids)"),St.forEach(t),re.forEach(t),ut=u(se),G=s(se,"LI",{});var ie=r(G);Fe=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(ie,"CODE",{});var Ot=r(_e);Xe=d(Ot,"model([input_ids, attention_mask])"),Ot.forEach(t),ne=d(ie," or "),ge=s(ie,"CODE",{});var At=r(ge);be=d(At,"model([input_ids, attention_mask, token_type_ids])"),At.forEach(t),ie.forEach(t),ht=u(se),ae=s(se,"LI",{});var De=r(ae);ke=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var It=r(ye);Qe=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),De.forEach(t),se.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,rt),b(z,ze,j),b(z,C,j),e(C,Ae),e(C,he),e(he,it),e(C,me),e(C,fe),e(fe,dt),e(C,Ue),b(z,Q,j),b(z,L,j),e(L,Ie),b(z,oe,j),b(z,S,j),e(S,O),e(O,lt),e(O,le),e(le,ce),e(O,ct),e(O,V),e(V,pt),e(S,ut),e(S,G),e(G,Fe),e(G,_e),e(_e,Xe),e(G,ne),e(G,ge),e(ge,be),e(S,ht),e(S,ae),e(ae,ke),e(ae,ye),e(ye,Qe)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(C),z&&t(Q),z&&t(L),z&&t(oe),z&&t(S)}}}function dx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function lx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function cx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function px(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function ux(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function hx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function mx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function fx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function _x(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function gx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function bx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function kx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function yx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function vx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Tx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function wx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Mx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function $x(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function xx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function zx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Fx(x){let l,k,m,c,g,n,h,q,rt,ze,C,Ae,he,it,me,fe,dt,Ue,Q,L,Ie,oe,S,O,lt,le,ce,ct,V,pt,ut,G,Fe,_e,Xe,ne,ge,be,ht,ae,ke,ye,Qe,z,j,ve,Ne,Ct,H,Et,yt,X,se,re,Pt,St,ie,Ot,At,De,It,Bh,nd,jh,Ch,cp,Ve,Eh,_a,ad,Ph,Sh,Oh,sd,Ah,Ih,rd,Nh,Dh,pp,ri,id,Lh,up,ga,hp,ii,ba,dd,Gh,Wh,Nt,Rh,ld,Uh,Xh,cd,Qh,Vh,mp,ka,fp,Dt,$o,pd,ya,Hh,ud,Jh,_p,vt,Kh,va,Zh,Yh,hd,em,tm,gp,di,om,bp,li,md,nm,kp,Lt,xo,fd,Ta,am,_d,sm,yp,He,rm,gd,im,dm,bd,lm,cm,kd,pm,um,vp,zo,hm,ci,mm,fm,Tp,pi,yd,_m,wp,wa,Mp,ui,Ma,vd,gm,bm,Te,km,Td,ym,vm,wd,Tm,wm,Md,Mm,$m,$d,xm,zm,xd,Fm,qm,$p,$a,xp,Gt,Fo,zd,xa,Bm,Fd,jm,zp,Le,za,Cm,Wt,Em,hi,Pm,Sm,Fa,Om,Am,Im,Rt,Nm,mi,Dm,Lm,fi,Gm,Wm,Rm,qo,Fp,Ut,Bo,qd,qa,Um,Bd,Xm,qp,de,Ba,Qm,jd,Vm,Hm,mt,Jm,_i,Km,Zm,gi,Ym,ef,ja,tf,of,nf,Xt,af,Cd,sf,rf,Ed,df,lf,cf,jo,pf,Je,Ca,uf,Ea,hf,Pd,mf,ff,_f,Pa,Sa,Sd,gf,bf,Od,kf,yf,Oa,Ad,vf,Tf,Id,wf,Mf,Nd,$f,Bp,Qt,Co,Dd,Aa,xf,Ld,zf,jp,A,Ia,Ff,Vt,qf,Gd,Bf,jf,Na,Cf,Ef,Pf,Da,Sf,bi,Of,Af,If,Ht,Nf,Wd,Df,Lf,Rd,Gf,Wf,Rf,Eo,Uf,qe,La,Xf,Ud,Qf,Vf,Ga,Hf,Xd,Jf,Kf,Zf,Wa,Ra,Qd,Yf,e_,Vd,t_,o_,Ua,Hd,n_,a_,Jd,s_,r_,Kd,i_,d_,Po,Xa,l_,Zd,c_,p_,So,Qa,u_,Yd,h_,m_,Oo,Va,f_,el,__,Cp,Jt,Ao,tl,Ha,g_,ol,b_,Ep,I,Ja,k_,Ka,y_,Za,v_,T_,w_,Ya,M_,ki,$_,x_,z_,Io,F_,Ke,es,q_,ts,B_,nl,j_,C_,E_,os,ns,al,P_,S_,sl,O_,A_,as,rl,I_,N_,il,D_,L_,dl,G_,W_,No,ss,R_,ll,U_,X_,Do,rs,Q_,is,V_,cl,H_,J_,K_,Lo,ds,Z_,pl,Y_,eg,Go,ls,tg,ul,og,Pp,Kt,Wo,hl,cs,ng,ml,ag,Sp,J,ps,sg,Zt,rg,fl,ig,dg,us,lg,cg,pg,hs,ug,yi,hg,mg,fg,Ro,_g,Be,ms,gg,_l,bg,kg,fs,yg,gl,vg,Tg,wg,_s,gs,bl,Mg,$g,kl,xg,zg,bs,yl,Fg,qg,vl,Bg,jg,Tl,Cg,Eg,Uo,ks,Pg,wl,Sg,Og,Xo,ys,Ag,Ml,Ig,Op,Yt,Qo,$l,vs,Ng,xl,Dg,Ap,Ge,Ts,Lg,ws,Gg,vi,Wg,Rg,Ug,Ms,Xg,$s,Qg,Vg,Hg,Ze,xs,Jg,eo,Kg,Ti,Zg,Yg,zl,eb,tb,ob,Vo,nb,Ho,Ip,to,Jo,Fl,zs,ab,ql,sb,Np,We,Fs,rb,qs,ib,wi,db,lb,cb,Bs,pb,js,ub,hb,mb,je,Cs,fb,oo,_b,Mi,gb,bb,Bl,kb,yb,vb,Ko,Tb,Zo,wb,Yo,Dp,no,en,jl,Es,Mb,Cl,$b,Lp,we,Ps,xb,ao,zb,El,Fb,qb,Pl,Bb,jb,Cb,Ss,Eb,$i,Pb,Sb,Ob,Os,Ab,As,Ib,Nb,Db,Ce,Is,Lb,so,Gb,xi,Wb,Rb,Sl,Ub,Xb,Qb,tn,Vb,on,Hb,nn,Gp,ro,an,Ol,Ns,Jb,Al,Kb,Wp,Me,Ds,Zb,Il,Yb,ek,Ls,tk,zi,ok,nk,ak,Gs,sk,Ws,rk,ik,dk,K,Rs,lk,io,ck,Fi,pk,uk,Nl,hk,mk,fk,sn,_k,rn,gk,dn,bk,ln,kk,cn,Rp,lo,pn,Dl,Us,yk,Ll,vk,Up,co,Xs,Tk,un,Qs,wk,hn,Xp,po,mn,Gl,Vs,Mk,Wl,$k,Qp,$e,Hs,xk,Js,zk,qi,Fk,qk,Bk,Ks,jk,Zs,Ck,Ek,Pk,fn,Sk,Ye,Ys,Ok,uo,Ak,Bi,Ik,Nk,Rl,Dk,Lk,Gk,_n,Wk,gn,Vp,ho,bn,Ul,er,Rk,Xl,Uk,Hp,xe,tr,Xk,or,Qk,ji,Vk,Hk,Jk,nr,Kk,ar,Zk,Yk,ey,kn,ty,Ee,sr,oy,mo,ny,Ci,ay,sy,Ql,ry,iy,dy,yn,ly,vn,cy,Tn,Jp,fo,wn,Vl,rr,py,Hl,uy,Kp,W,ir,hy,dr,my,Ei,fy,_y,gy,lr,by,cr,ky,yy,vy,Jl,Ty,wy,ft,Kl,pr,My,$y,Zl,ur,xy,zy,Yl,hr,Fy,qy,ec,mr,By,jy,et,fr,Cy,_o,Ey,tc,Py,Sy,oc,Oy,Ay,Iy,Mn,Ny,$n,Dy,xn,_r,Ly,zn,Gy,Fn,gr,Wy,qn,Zp,go,Bn,nc,br,Ry,ac,Uy,Yp,R,kr,Xy,yr,Qy,Pi,Vy,Hy,Jy,vr,Ky,Tr,Zy,Yy,ev,sc,tv,ov,_t,rc,wr,nv,av,ic,Mr,sv,rv,dc,$r,iv,dv,lc,xr,lv,cv,Pe,zr,pv,bo,uv,cc,hv,mv,pc,fv,_v,gv,jn,bv,Cn,kv,En,yv,Pn,Fr,vv,Sn,Tv,On,qr,wv,An,eu,ko,In,uc,Br,Mv,hc,$v,tu,N,jr,xv,mc,zv,Fv,Cr,qv,Si,Bv,jv,Cv,Er,Ev,Pr,Pv,Sv,Ov,fc,Av,Iv,gt,_c,Sr,Nv,Dv,gc,Or,Lv,Gv,bc,Ar,Wv,Rv,kc,Ir,Uv,Xv,tt,Nr,Qv,yo,Vv,yc,Hv,Jv,vc,Kv,Zv,Yv,Nn,eT,Dn,tT,Ln,Dr,oT,Gn,nT,Wn,Lr,aT,Rn,ou,vo,Un,Tc,Gr,sT,wc,rT,nu,D,Wr,iT,To,dT,Mc,lT,cT,$c,pT,uT,hT,Rr,mT,Oi,fT,_T,gT,Ur,bT,Xr,kT,yT,vT,xc,TT,wT,bt,zc,Qr,MT,$T,Fc,Vr,xT,zT,qc,Hr,FT,qT,Bc,Jr,BT,jT,ot,Kr,CT,wo,ET,jc,PT,ST,Cc,OT,AT,IT,Xn,NT,Qn,DT,Vn,Zr,LT,Hn,GT,Jn,Yr,WT,Kn,au;return n=new U({}),oe=new U({}),Ne=new U({}),ga=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),ka=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),ya=new U({}),Ta=new U({}),wa=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors="pt")

model(**model_inputs)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

model(**model_inputs)  <span class="hljs-comment"># forward pass</span>`}}),$a=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),xa=new U({}),za=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.MBartConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.MBartConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/configuration_mbart.py#L34"}}),qo=new E({props:{anchor:"transformers.MBartConfig.example",$$slots:{default:[N2]},$$scope:{ctx:x}}}),qa=new U({}),Ba=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L53"}}),jo=new E({props:{anchor:"transformers.MBartTokenizer.example",$$slots:{default:[D2]},$$scope:{ctx:x}}}),Ca=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Aa=new U({}),Ia=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L63"}}),Eo=new E({props:{anchor:"transformers.MBartTokenizerFast.example",$$slots:{default:[L2]},$$scope:{ctx:x}}}),La=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L161",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xa=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L190",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qa=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L245"}}),Va=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L260"}}),Ha=new U({}),Ja=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L49"}}),Io=new E({props:{anchor:"transformers.MBart50Tokenizer.example",$$slots:{default:[G2]},$$scope:{ctx:x}}}),es=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L286",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L235"}}),rs=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L256",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L343"}}),ls=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L349"}}),cs=new U({}),ps=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L59"}}),Ro=new E({props:{anchor:"transformers.MBart50TokenizerFast.example",$$slots:{default:[W2]},$$scope:{ctx:x}}}),ms=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ks=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L217"}}),ys=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L232"}}),vs=new U({}),Ts=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1152"}}),xs=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new st({props:{$$slots:{default:[R2]},$$scope:{ctx:x}}}),Ho=new E({props:{anchor:"transformers.MBartModel.forward.example",$$slots:{default:[U2]},$$scope:{ctx:x}}}),zs=new U({}),Fs=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1269"}}),Cs=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1313",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new st({props:{$$slots:{default:[X2]},$$scope:{ctx:x}}}),Zo=new E({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example",$$slots:{default:[Q2]},$$scope:{ctx:x}}}),Yo=new E({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example-2",$$slots:{default:[V2]},$$scope:{ctx:x}}}),Es=new U({}),Ps=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1570"}}),Is=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1582",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new st({props:{$$slots:{default:[H2]},$$scope:{ctx:x}}}),on=new E({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example",$$slots:{default:[J2]},$$scope:{ctx:x}}}),nn=new E({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example-2",$$slots:{default:[K2]},$$scope:{ctx:x}}}),Ns=new U({}),Ds=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1442"}}),Rs=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1455",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new st({props:{$$slots:{default:[Z2]},$$scope:{ctx:x}}}),rn=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example",$$slots:{default:[Y2]},$$scope:{ctx:x}}}),dn=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-2",$$slots:{default:[ex]},$$scope:{ctx:x}}}),ln=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-3",$$slots:{default:[tx]},$$scope:{ctx:x}}}),cn=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-4",$$slots:{default:[ox]},$$scope:{ctx:x}}}),Us=new U({}),Xs=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1703"}}),Qs=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1734",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new E({props:{anchor:"transformers.MBartForCausalLM.forward.example",$$slots:{default:[nx]},$$scope:{ctx:x}}}),Vs=new U({}),Hs=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1184"}}),fn=new st({props:{$$slots:{default:[ax]},$$scope:{ctx:x}}}),Ys=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_n=new st({props:{$$slots:{default:[sx]},$$scope:{ctx:x}}}),gn=new E({props:{anchor:"transformers.TFMBartModel.call.example",$$slots:{default:[rx]},$$scope:{ctx:x}}}),er=new U({}),tr=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1291"}}),kn=new st({props:{$$slots:{default:[ix]},$$scope:{ctx:x}}}),sr=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1325",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yn=new st({props:{$$slots:{default:[dx]},$$scope:{ctx:x}}}),vn=new E({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example",$$slots:{default:[lx]},$$scope:{ctx:x}}}),Tn=new E({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example-2",$$slots:{default:[cx]},$$scope:{ctx:x}}}),rr=new U({}),ir=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1278"}}),fr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new st({props:{$$slots:{default:[px]},$$scope:{ctx:x}}}),$n=new E({props:{anchor:"transformers.FlaxMBartModel.__call__.example",$$slots:{default:[ux]},$$scope:{ctx:x}}}),_r=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new E({props:{anchor:"transformers.FlaxMBartModel.encode.example",$$slots:{default:[hx]},$$scope:{ctx:x}}}),gr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qn=new E({props:{anchor:"transformers.FlaxMBartModel.decode.example",$$slots:{default:[mx]},$$scope:{ctx:x}}}),br=new U({}),kr=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1365"}}),zr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new st({props:{$$slots:{default:[fx]},$$scope:{ctx:x}}}),Cn=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example",$$slots:{default:[_x]},$$scope:{ctx:x}}}),En=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example-2",$$slots:{default:[gx]},$$scope:{ctx:x}}}),Fr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.example",$$slots:{default:[bx]},$$scope:{ctx:x}}}),qr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1369",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.example",$$slots:{default:[kx]},$$scope:{ctx:x}}}),Br=new U({}),jr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1678"}}),Nr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new st({props:{$$slots:{default:[yx]},$$scope:{ctx:x}}}),Dn=new E({props:{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.example",$$slots:{default:[vx]},$$scope:{ctx:x}}}),Dr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gn=new E({props:{anchor:"transformers.FlaxMBartForSequenceClassification.encode.example",$$slots:{default:[Tx]},$$scope:{ctx:x}}}),Lr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new E({props:{anchor:"transformers.FlaxMBartForSequenceClassification.decode.example",$$slots:{default:[wx]},$$scope:{ctx:x}}}),Gr=new U({}),Wr=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1766"}}),Kr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new st({props:{$$slots:{default:[Mx]},$$scope:{ctx:x}}}),Qn=new E({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.example",$$slots:{default:[$x]},$$scope:{ctx:x}}}),Zr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1039",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new E({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.example",$$slots:{default:[xx]},$$scope:{ctx:x}}}),Yr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new E({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.example",$$slots:{default:[zx]},$$scope:{ctx:x}}}),{c(){l=a("meta"),k=p(),m=a("h1"),c=a("a"),g=a("span"),y(n.$$.fragment),h=p(),q=a("span"),rt=i("MBart and MBart-50"),ze=p(),C=a("p"),Ae=a("strong"),he=i("DISCLAIMER:"),it=i(" If you see something strange, file a "),me=a("a"),fe=i("Github Issue"),dt=i(` and assign
@patrickvonplaten`),Ue=p(),Q=a("h2"),L=a("a"),Ie=a("span"),y(oe.$$.fragment),S=p(),O=a("span"),lt=i("Overview of MBart"),le=p(),ce=a("p"),ct=i("The MBart model was presented in "),V=a("a"),pt=i("Multilingual Denoising Pre-training for Neural Machine Translation"),ut=i(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),G=p(),Fe=a("p"),_e=i(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Xe=p(),ne=a("p"),ge=i("This model was contributed by "),be=a("a"),ht=i("valhalla"),ae=i(". The Authors\u2019 code can be found "),ke=a("a"),ye=i("here"),Qe=p(),z=a("h3"),j=a("a"),ve=a("span"),y(Ne.$$.fragment),Ct=p(),H=a("span"),Et=i("Training of MBart"),yt=p(),X=a("p"),se=i(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),re=a("code"),Pt=i("X [eos, src_lang_code]"),St=i(" where "),ie=a("code"),Ot=i("X"),At=i(` is the source text. The
target text format is `),De=a("code"),It=i("[tgt_lang_code] X [eos]"),Bh=i(". "),nd=a("code"),jh=i("bos"),Ch=i(" is never used."),cp=p(),Ve=a("p"),Eh=i("The regular "),_a=a("a"),ad=a("strong"),Ph=i("call"),Sh=i("()"),Oh=i(" will encode source text format passed as first argument or with the "),sd=a("code"),Ah=i("text"),Ih=i(`
keyword, and target text format passed with the `),rd=a("code"),Nh=i("text_label"),Dh=i(" keyword argument."),pp=p(),ri=a("ul"),id=a("li"),Lh=i("Supervised training"),up=p(),y(ga.$$.fragment),hp=p(),ii=a("ul"),ba=a("li"),dd=a("p"),Gh=i("Generation"),Wh=p(),Nt=a("p"),Rh=i("While generating the target text set the "),ld=a("code"),Uh=i("decoder_start_token_id"),Xh=i(` to the target language id. The following
example shows how to translate English to Romanian using the `),cd=a("em"),Qh=i("facebook/mbart-large-en-ro"),Vh=i(" model."),mp=p(),y(ka.$$.fragment),fp=p(),Dt=a("h2"),$o=a("a"),pd=a("span"),y(ya.$$.fragment),Hh=p(),ud=a("span"),Jh=i("Overview of MBart-50"),_p=p(),vt=a("p"),Kh=i("MBart-50 was introduced in the "),va=a("a"),Zh=i("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Yh=i(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=a("em"),em=i("mbart-large-cc25"),tm=i(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),gp=p(),di=a("p"),om=i("According to the abstract"),bp=p(),li=a("p"),md=a("em"),nm=i(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),kp=p(),Lt=a("h3"),xo=a("a"),fd=a("span"),y(Ta.$$.fragment),am=p(),_d=a("span"),sm=i("Training of MBart-50"),yp=p(),He=a("p"),rm=i(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=a("code"),im=i("[lang_code] X [eos]"),dm=i(", where "),bd=a("code"),lm=i("lang_code"),cm=i(` is source
language id for source text and target language id for target text, with `),kd=a("code"),pm=i("X"),um=i(` being the source or target text
respectively.`),vp=p(),zo=a("p"),hm=i("MBart-50 has its own tokenizer "),ci=a("a"),mm=i("MBart50Tokenizer"),fm=i("."),Tp=p(),pi=a("ul"),yd=a("li"),_m=i("Supervised training"),wp=p(),y(wa.$$.fragment),Mp=p(),ui=a("ul"),Ma=a("li"),vd=a("p"),gm=i("Generation"),bm=p(),Te=a("p"),km=i("To generate using the mBART-50 multilingual translation models, "),Td=a("code"),ym=i("eos_token_id"),vm=i(` is used as the
`),wd=a("code"),Tm=i("decoder_start_token_id"),wm=i(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Md=a("em"),Mm=i("forced_bos_token_id"),$m=i(" parameter to the "),$d=a("em"),xm=i("generate"),zm=i(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),xd=a("em"),Fm=i("facebook/mbart-50-large-many-to-many"),qm=i(" checkpoint."),$p=p(),y($a.$$.fragment),xp=p(),Gt=a("h2"),Fo=a("a"),zd=a("span"),y(xa.$$.fragment),Bm=p(),Fd=a("span"),jm=i("MBartConfig"),zp=p(),Le=a("div"),y(za.$$.fragment),Cm=p(),Wt=a("p"),Em=i("This is the configuration class to store the configuration of a "),hi=a("a"),Pm=i("MBartModel"),Sm=i(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Fa=a("a"),Om=i("facebook/mbart-large-cc25"),Am=i(" architecture."),Im=p(),Rt=a("p"),Nm=i("Configuration objects inherit from "),mi=a("a"),Dm=i("PretrainedConfig"),Lm=i(` and can be used to control the model outputs. Read the
documentation from `),fi=a("a"),Gm=i("PretrainedConfig"),Wm=i(" for more information."),Rm=p(),y(qo.$$.fragment),Fp=p(),Ut=a("h2"),Bo=a("a"),qd=a("span"),y(qa.$$.fragment),Um=p(),Bd=a("span"),Xm=i("MBartTokenizer"),qp=p(),de=a("div"),y(Ba.$$.fragment),Qm=p(),jd=a("p"),Vm=i("Construct an MBART tokenizer."),Hm=p(),mt=a("p"),Jm=i("Adapted from "),_i=a("a"),Km=i("RobertaTokenizer"),Zm=i(" and "),gi=a("a"),Ym=i("XLNetTokenizer"),ef=i(`. Based on
`),ja=a("a"),tf=i("SentencePiece"),of=i("."),nf=p(),Xt=a("p"),af=i("The tokenization method is "),Cd=a("code"),sf=i("<tokens> <eos> <language code>"),rf=i(" for source language documents, and "),Ed=a("code"),df=i("<language code> <tokens> <eos>"),lf=i(" for target language documents."),cf=p(),y(jo.$$.fragment),pf=p(),Je=a("div"),y(Ca.$$.fragment),uf=p(),Ea=a("p"),hf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Pd=a("code"),mf=i("X"),ff=i(" represents the sequence:"),_f=p(),Pa=a("ul"),Sa=a("li"),Sd=a("code"),gf=i("input_ids"),bf=i(" (for encoder) "),Od=a("code"),kf=i("X [eos, src_lang_code]"),yf=p(),Oa=a("li"),Ad=a("code"),vf=i("decoder_input_ids"),Tf=i(": (for decoder) "),Id=a("code"),wf=i("X [eos, tgt_lang_code]"),Mf=p(),Nd=a("p"),$f=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Bp=p(),Qt=a("h2"),Co=a("a"),Dd=a("span"),y(Aa.$$.fragment),xf=p(),Ld=a("span"),zf=i("MBartTokenizerFast"),jp=p(),A=a("div"),y(Ia.$$.fragment),Ff=p(),Vt=a("p"),qf=i("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Gd=a("em"),Bf=i("tokenizers"),jf=i(` library). Based on
`),Na=a("a"),Cf=i("BPE"),Ef=i("."),Pf=p(),Da=a("p"),Sf=i("This tokenizer inherits from "),bi=a("a"),Of=i("PreTrainedTokenizerFast"),Af=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),If=p(),Ht=a("p"),Nf=i("The tokenization method is "),Wd=a("code"),Df=i("<tokens> <eos> <language code>"),Lf=i(" for source language documents, and "),Rd=a("code"),Gf=i("<language code> <tokens> <eos>"),Wf=i(" for target language documents."),Rf=p(),y(Eo.$$.fragment),Uf=p(),qe=a("div"),y(La.$$.fragment),Xf=p(),Ud=a("p"),Qf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Vf=p(),Ga=a("p"),Hf=i("An MBART sequence has the following format, where "),Xd=a("code"),Jf=i("X"),Kf=i(" represents the sequence:"),Zf=p(),Wa=a("ul"),Ra=a("li"),Qd=a("code"),Yf=i("input_ids"),e_=i(" (for encoder) "),Vd=a("code"),t_=i("X [eos, src_lang_code]"),o_=p(),Ua=a("li"),Hd=a("code"),n_=i("decoder_input_ids"),a_=i(": (for decoder) "),Jd=a("code"),s_=i("X [eos, tgt_lang_code]"),r_=p(),Kd=a("p"),i_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),d_=p(),Po=a("div"),y(Xa.$$.fragment),l_=p(),Zd=a("p"),c_=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),p_=p(),So=a("div"),y(Qa.$$.fragment),u_=p(),Yd=a("p"),h_=i("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),m_=p(),Oo=a("div"),y(Va.$$.fragment),f_=p(),el=a("p"),__=i("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Cp=p(),Jt=a("h2"),Ao=a("a"),tl=a("span"),y(Ha.$$.fragment),g_=p(),ol=a("span"),b_=i("MBart50Tokenizer"),Ep=p(),I=a("div"),y(Ja.$$.fragment),k_=p(),Ka=a("p"),y_=i("Construct a MBart50 tokenizer. Based on "),Za=a("a"),v_=i("SentencePiece"),T_=i("."),w_=p(),Ya=a("p"),M_=i("This tokenizer inherits from "),ki=a("a"),$_=i("PreTrainedTokenizer"),x_=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),z_=p(),y(Io.$$.fragment),F_=p(),Ke=a("div"),y(es.$$.fragment),q_=p(),ts=a("p"),B_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),nl=a("code"),j_=i("X"),C_=i(" represents the sequence:"),E_=p(),os=a("ul"),ns=a("li"),al=a("code"),P_=i("input_ids"),S_=i(" (for encoder) "),sl=a("code"),O_=i("[src_lang_code] X [eos]"),A_=p(),as=a("li"),rl=a("code"),I_=i("labels"),N_=i(": (for decoder) "),il=a("code"),D_=i("[tgt_lang_code] X [eos]"),L_=p(),dl=a("p"),G_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),W_=p(),No=a("div"),y(ss.$$.fragment),R_=p(),ll=a("p"),U_=i("Converts a sequence of tokens (strings for sub-words) in a single string."),X_=p(),Do=a("div"),y(rs.$$.fragment),Q_=p(),is=a("p"),V_=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),cl=a("code"),H_=i("prepare_for_model"),J_=i(" method."),K_=p(),Lo=a("div"),y(ds.$$.fragment),Z_=p(),pl=a("p"),Y_=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),eg=p(),Go=a("div"),y(ls.$$.fragment),tg=p(),ul=a("p"),og=i("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Pp=p(),Kt=a("h2"),Wo=a("a"),hl=a("span"),y(cs.$$.fragment),ng=p(),ml=a("span"),ag=i("MBart50TokenizerFast"),Sp=p(),J=a("div"),y(ps.$$.fragment),sg=p(),Zt=a("p"),rg=i("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),fl=a("em"),ig=i("tokenizers"),dg=i(` library). Based on
`),us=a("a"),lg=i("BPE"),cg=i("."),pg=p(),hs=a("p"),ug=i("This tokenizer inherits from "),yi=a("a"),hg=i("PreTrainedTokenizerFast"),mg=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fg=p(),y(Ro.$$.fragment),_g=p(),Be=a("div"),y(ms.$$.fragment),gg=p(),_l=a("p"),bg=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),kg=p(),fs=a("p"),yg=i("An MBART-50 sequence has the following format, where "),gl=a("code"),vg=i("X"),Tg=i(" represents the sequence:"),wg=p(),_s=a("ul"),gs=a("li"),bl=a("code"),Mg=i("input_ids"),$g=i(" (for encoder) "),kl=a("code"),xg=i("[src_lang_code] X [eos]"),zg=p(),bs=a("li"),yl=a("code"),Fg=i("labels"),qg=i(": (for decoder) "),vl=a("code"),Bg=i("[tgt_lang_code] X [eos]"),jg=p(),Tl=a("p"),Cg=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Eg=p(),Uo=a("div"),y(ks.$$.fragment),Pg=p(),wl=a("p"),Sg=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Og=p(),Xo=a("div"),y(ys.$$.fragment),Ag=p(),Ml=a("p"),Ig=i("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Op=p(),Yt=a("h2"),Qo=a("a"),$l=a("span"),y(vs.$$.fragment),Ng=p(),xl=a("span"),Dg=i("MBartModel"),Ap=p(),Ge=a("div"),y(Ts.$$.fragment),Lg=p(),ws=a("p"),Gg=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vi=a("a"),Wg=i("PreTrainedModel"),Rg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=p(),Ms=a("p"),Xg=i("This model is also a PyTorch "),$s=a("a"),Qg=i("torch.nn.Module"),Vg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hg=p(),Ze=a("div"),y(xs.$$.fragment),Jg=p(),eo=a("p"),Kg=i("The "),Ti=a("a"),Zg=i("MBartModel"),Yg=i(" forward method, overrides the "),zl=a("code"),eb=i("__call__"),tb=i(" special method."),ob=p(),y(Vo.$$.fragment),nb=p(),y(Ho.$$.fragment),Ip=p(),to=a("h2"),Jo=a("a"),Fl=a("span"),y(zs.$$.fragment),ab=p(),ql=a("span"),sb=i("MBartForConditionalGeneration"),Np=p(),We=a("div"),y(Fs.$$.fragment),rb=p(),qs=a("p"),ib=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),wi=a("a"),db=i("PreTrainedModel"),lb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cb=p(),Bs=a("p"),pb=i("This model is also a PyTorch "),js=a("a"),ub=i("torch.nn.Module"),hb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mb=p(),je=a("div"),y(Cs.$$.fragment),fb=p(),oo=a("p"),_b=i("The "),Mi=a("a"),gb=i("MBartForConditionalGeneration"),bb=i(" forward method, overrides the "),Bl=a("code"),kb=i("__call__"),yb=i(" special method."),vb=p(),y(Ko.$$.fragment),Tb=p(),y(Zo.$$.fragment),wb=p(),y(Yo.$$.fragment),Dp=p(),no=a("h2"),en=a("a"),jl=a("span"),y(Es.$$.fragment),Mb=p(),Cl=a("span"),$b=i("MBartForQuestionAnswering"),Lp=p(),we=a("div"),y(Ps.$$.fragment),xb=p(),ao=a("p"),zb=i(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),El=a("code"),Fb=i("span start logits"),qb=i(" and "),Pl=a("code"),Bb=i("span end logits"),jb=i(")."),Cb=p(),Ss=a("p"),Eb=i("This model inherits from "),$i=a("a"),Pb=i("PreTrainedModel"),Sb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ob=p(),Os=a("p"),Ab=i("This model is also a PyTorch "),As=a("a"),Ib=i("torch.nn.Module"),Nb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Db=p(),Ce=a("div"),y(Is.$$.fragment),Lb=p(),so=a("p"),Gb=i("The "),xi=a("a"),Wb=i("MBartForQuestionAnswering"),Rb=i(" forward method, overrides the "),Sl=a("code"),Ub=i("__call__"),Xb=i(" special method."),Qb=p(),y(tn.$$.fragment),Vb=p(),y(on.$$.fragment),Hb=p(),y(nn.$$.fragment),Gp=p(),ro=a("h2"),an=a("a"),Ol=a("span"),y(Ns.$$.fragment),Jb=p(),Al=a("span"),Kb=i("MBartForSequenceClassification"),Wp=p(),Me=a("div"),y(Ds.$$.fragment),Zb=p(),Il=a("p"),Yb=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ek=p(),Ls=a("p"),tk=i("This model inherits from "),zi=a("a"),ok=i("PreTrainedModel"),nk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak=p(),Gs=a("p"),sk=i("This model is also a PyTorch "),Ws=a("a"),rk=i("torch.nn.Module"),ik=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dk=p(),K=a("div"),y(Rs.$$.fragment),lk=p(),io=a("p"),ck=i("The "),Fi=a("a"),pk=i("MBartForSequenceClassification"),uk=i(" forward method, overrides the "),Nl=a("code"),hk=i("__call__"),mk=i(" special method."),fk=p(),y(sn.$$.fragment),_k=p(),y(rn.$$.fragment),gk=p(),y(dn.$$.fragment),bk=p(),y(ln.$$.fragment),kk=p(),y(cn.$$.fragment),Rp=p(),lo=a("h2"),pn=a("a"),Dl=a("span"),y(Us.$$.fragment),yk=p(),Ll=a("span"),vk=i("MBartForCausalLM"),Up=p(),co=a("div"),y(Xs.$$.fragment),Tk=p(),un=a("div"),y(Qs.$$.fragment),wk=p(),y(hn.$$.fragment),Xp=p(),po=a("h2"),mn=a("a"),Gl=a("span"),y(Vs.$$.fragment),Mk=p(),Wl=a("span"),$k=i("TFMBartModel"),Qp=p(),$e=a("div"),y(Hs.$$.fragment),xk=p(),Js=a("p"),zk=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a("a"),Fk=i("TFPreTrainedModel"),qk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk=p(),Ks=a("p"),jk=i("This model is also a "),Zs=a("a"),Ck=i("tf.keras.Model"),Ek=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pk=p(),y(fn.$$.fragment),Sk=p(),Ye=a("div"),y(Ys.$$.fragment),Ok=p(),uo=a("p"),Ak=i("The "),Bi=a("a"),Ik=i("TFMBartModel"),Nk=i(" forward method, overrides the "),Rl=a("code"),Dk=i("__call__"),Lk=i(" special method."),Gk=p(),y(_n.$$.fragment),Wk=p(),y(gn.$$.fragment),Vp=p(),ho=a("h2"),bn=a("a"),Ul=a("span"),y(er.$$.fragment),Rk=p(),Xl=a("span"),Uk=i("TFMBartForConditionalGeneration"),Hp=p(),xe=a("div"),y(tr.$$.fragment),Xk=p(),or=a("p"),Qk=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ji=a("a"),Vk=i("TFPreTrainedModel"),Hk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=p(),nr=a("p"),Kk=i("This model is also a "),ar=a("a"),Zk=i("tf.keras.Model"),Yk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ey=p(),y(kn.$$.fragment),ty=p(),Ee=a("div"),y(sr.$$.fragment),oy=p(),mo=a("p"),ny=i("The "),Ci=a("a"),ay=i("TFMBartForConditionalGeneration"),sy=i(" forward method, overrides the "),Ql=a("code"),ry=i("__call__"),iy=i(" special method."),dy=p(),y(yn.$$.fragment),ly=p(),y(vn.$$.fragment),cy=p(),y(Tn.$$.fragment),Jp=p(),fo=a("h2"),wn=a("a"),Vl=a("span"),y(rr.$$.fragment),py=p(),Hl=a("span"),uy=i("FlaxMBartModel"),Kp=p(),W=a("div"),y(ir.$$.fragment),hy=p(),dr=a("p"),my=i(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ei=a("a"),fy=i("FlaxPreTrainedModel"),_y=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gy=p(),lr=a("p"),by=i(`This model is also a Flax Linen
`),cr=a("a"),ky=i("flax.nn.Module"),yy=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vy=p(),Jl=a("p"),Ty=i("Finally, this model supports inherent JAX features such as:"),wy=p(),ft=a("ul"),Kl=a("li"),pr=a("a"),My=i("Just-In-Time (JIT) compilation"),$y=p(),Zl=a("li"),ur=a("a"),xy=i("Automatic Differentiation"),zy=p(),Yl=a("li"),hr=a("a"),Fy=i("Vectorization"),qy=p(),ec=a("li"),mr=a("a"),By=i("Parallelization"),jy=p(),et=a("div"),y(fr.$$.fragment),Cy=p(),_o=a("p"),Ey=i("The "),tc=a("code"),Py=i("FlaxMBartPreTrainedModel"),Sy=i(" forward method, overrides the "),oc=a("code"),Oy=i("__call__"),Ay=i(" special method."),Iy=p(),y(Mn.$$.fragment),Ny=p(),y($n.$$.fragment),Dy=p(),xn=a("div"),y(_r.$$.fragment),Ly=p(),y(zn.$$.fragment),Gy=p(),Fn=a("div"),y(gr.$$.fragment),Wy=p(),y(qn.$$.fragment),Zp=p(),go=a("h2"),Bn=a("a"),nc=a("span"),y(br.$$.fragment),Ry=p(),ac=a("span"),Uy=i("FlaxMBartForConditionalGeneration"),Yp=p(),R=a("div"),y(kr.$$.fragment),Xy=p(),yr=a("p"),Qy=i(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pi=a("a"),Vy=i("FlaxPreTrainedModel"),Hy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jy=p(),vr=a("p"),Ky=i(`This model is also a Flax Linen
`),Tr=a("a"),Zy=i("flax.nn.Module"),Yy=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ev=p(),sc=a("p"),tv=i("Finally, this model supports inherent JAX features such as:"),ov=p(),_t=a("ul"),rc=a("li"),wr=a("a"),nv=i("Just-In-Time (JIT) compilation"),av=p(),ic=a("li"),Mr=a("a"),sv=i("Automatic Differentiation"),rv=p(),dc=a("li"),$r=a("a"),iv=i("Vectorization"),dv=p(),lc=a("li"),xr=a("a"),lv=i("Parallelization"),cv=p(),Pe=a("div"),y(zr.$$.fragment),pv=p(),bo=a("p"),uv=i("The "),cc=a("code"),hv=i("FlaxMBartPreTrainedModel"),mv=i(" forward method, overrides the "),pc=a("code"),fv=i("__call__"),_v=i(" special method."),gv=p(),y(jn.$$.fragment),bv=p(),y(Cn.$$.fragment),kv=p(),y(En.$$.fragment),yv=p(),Pn=a("div"),y(Fr.$$.fragment),vv=p(),y(Sn.$$.fragment),Tv=p(),On=a("div"),y(qr.$$.fragment),wv=p(),y(An.$$.fragment),eu=p(),ko=a("h2"),In=a("a"),uc=a("span"),y(Br.$$.fragment),Mv=p(),hc=a("span"),$v=i("FlaxMBartForSequenceClassification"),tu=p(),N=a("div"),y(jr.$$.fragment),xv=p(),mc=a("p"),zv=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Fv=p(),Cr=a("p"),qv=i("This model inherits from "),Si=a("a"),Bv=i("FlaxPreTrainedModel"),jv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cv=p(),Er=a("p"),Ev=i(`This model is also a Flax Linen
`),Pr=a("a"),Pv=i("flax.nn.Module"),Sv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ov=p(),fc=a("p"),Av=i("Finally, this model supports inherent JAX features such as:"),Iv=p(),gt=a("ul"),_c=a("li"),Sr=a("a"),Nv=i("Just-In-Time (JIT) compilation"),Dv=p(),gc=a("li"),Or=a("a"),Lv=i("Automatic Differentiation"),Gv=p(),bc=a("li"),Ar=a("a"),Wv=i("Vectorization"),Rv=p(),kc=a("li"),Ir=a("a"),Uv=i("Parallelization"),Xv=p(),tt=a("div"),y(Nr.$$.fragment),Qv=p(),yo=a("p"),Vv=i("The "),yc=a("code"),Hv=i("FlaxMBartPreTrainedModel"),Jv=i(" forward method, overrides the "),vc=a("code"),Kv=i("__call__"),Zv=i(" special method."),Yv=p(),y(Nn.$$.fragment),eT=p(),y(Dn.$$.fragment),tT=p(),Ln=a("div"),y(Dr.$$.fragment),oT=p(),y(Gn.$$.fragment),nT=p(),Wn=a("div"),y(Lr.$$.fragment),aT=p(),y(Rn.$$.fragment),ou=p(),vo=a("h2"),Un=a("a"),Tc=a("span"),y(Gr.$$.fragment),sT=p(),wc=a("span"),rT=i("FlaxMBartForQuestionAnswering"),nu=p(),D=a("div"),y(Wr.$$.fragment),iT=p(),To=a("p"),dT=i(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Mc=a("code"),lT=i("span start logits"),cT=i(" and "),$c=a("code"),pT=i("span end logits"),uT=i(")."),hT=p(),Rr=a("p"),mT=i("This model inherits from "),Oi=a("a"),fT=i("FlaxPreTrainedModel"),_T=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gT=p(),Ur=a("p"),bT=i(`This model is also a Flax Linen
`),Xr=a("a"),kT=i("flax.nn.Module"),yT=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vT=p(),xc=a("p"),TT=i("Finally, this model supports inherent JAX features such as:"),wT=p(),bt=a("ul"),zc=a("li"),Qr=a("a"),MT=i("Just-In-Time (JIT) compilation"),$T=p(),Fc=a("li"),Vr=a("a"),xT=i("Automatic Differentiation"),zT=p(),qc=a("li"),Hr=a("a"),FT=i("Vectorization"),qT=p(),Bc=a("li"),Jr=a("a"),BT=i("Parallelization"),jT=p(),ot=a("div"),y(Kr.$$.fragment),CT=p(),wo=a("p"),ET=i("The "),jc=a("code"),PT=i("FlaxMBartPreTrainedModel"),ST=i(" forward method, overrides the "),Cc=a("code"),OT=i("__call__"),AT=i(" special method."),IT=p(),y(Xn.$$.fragment),NT=p(),y(Qn.$$.fragment),DT=p(),Vn=a("div"),y(Zr.$$.fragment),LT=p(),y(Hn.$$.fragment),GT=p(),Jn=a("div"),y(Yr.$$.fragment),WT=p(),y(Kn.$$.fragment),this.h()},l(o){const _=A2('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),k=u(o),m=s(o,"H1",{class:!0});var ei=r(m);c=s(ei,"A",{id:!0,class:!0,href:!0});var Ec=r(c);g=s(Ec,"SPAN",{});var Pc=r(g);v(n.$$.fragment,Pc),Pc.forEach(t),Ec.forEach(t),h=u(ei),q=s(ei,"SPAN",{});var Sc=r(q);rt=d(Sc,"MBart and MBart-50"),Sc.forEach(t),ei.forEach(t),ze=u(o),C=s(o,"P",{});var Zn=r(C);Ae=s(Zn,"STRONG",{});var Oc=r(Ae);he=d(Oc,"DISCLAIMER:"),Oc.forEach(t),it=d(Zn," If you see something strange, file a "),me=s(Zn,"A",{href:!0,rel:!0});var Ac=r(me);fe=d(Ac,"Github Issue"),Ac.forEach(t),dt=d(Zn,` and assign
@patrickvonplaten`),Zn.forEach(t),Ue=u(o),Q=s(o,"H2",{class:!0});var ti=r(Q);L=s(ti,"A",{id:!0,class:!0,href:!0});var Ic=r(L);Ie=s(Ic,"SPAN",{});var Nc=r(Ie);v(oe.$$.fragment,Nc),Nc.forEach(t),Ic.forEach(t),S=u(ti),O=s(ti,"SPAN",{});var Dc=r(O);lt=d(Dc,"Overview of MBart"),Dc.forEach(t),ti.forEach(t),le=u(o),ce=s(o,"P",{});var oi=r(ce);ct=d(oi,"The MBart model was presented in "),V=s(oi,"A",{href:!0,rel:!0});var Lc=r(V);pt=d(Lc,"Multilingual Denoising Pre-training for Neural Machine Translation"),Lc.forEach(t),ut=d(oi,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),oi.forEach(t),G=u(o),Fe=s(o,"P",{});var Gc=r(Fe);_e=d(Gc,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Gc.forEach(t),Xe=u(o),ne=s(o,"P",{});var Yn=r(ne);ge=d(Yn,"This model was contributed by "),be=s(Yn,"A",{href:!0,rel:!0});var Wc=r(be);ht=d(Wc,"valhalla"),Wc.forEach(t),ae=d(Yn,". The Authors\u2019 code can be found "),ke=s(Yn,"A",{href:!0,rel:!0});var Rc=r(ke);ye=d(Rc,"here"),Rc.forEach(t),Yn.forEach(t),Qe=u(o),z=s(o,"H3",{class:!0});var ni=r(z);j=s(ni,"A",{id:!0,class:!0,href:!0});var Uc=r(j);ve=s(Uc,"SPAN",{});var Xc=r(ve);v(Ne.$$.fragment,Xc),Xc.forEach(t),Uc.forEach(t),Ct=u(ni),H=s(ni,"SPAN",{});var Qc=r(H);Et=d(Qc,"Training of MBart"),Qc.forEach(t),ni.forEach(t),yt=u(o),X=s(o,"P",{});var Re=r(X);se=d(Re,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),re=s(Re,"CODE",{});var Vc=r(re);Pt=d(Vc,"X [eos, src_lang_code]"),Vc.forEach(t),St=d(Re," where "),ie=s(Re,"CODE",{});var Hc=r(ie);Ot=d(Hc,"X"),Hc.forEach(t),At=d(Re,` is the source text. The
target text format is `),De=s(Re,"CODE",{});var Jc=r(De);It=d(Jc,"[tgt_lang_code] X [eos]"),Jc.forEach(t),Bh=d(Re,". "),nd=s(Re,"CODE",{});var Kc=r(nd);jh=d(Kc,"bos"),Kc.forEach(t),Ch=d(Re," is never used."),Re.forEach(t),cp=u(o),Ve=s(o,"P",{});var kt=r(Ve);Eh=d(kt,"The regular "),_a=s(kt,"A",{href:!0});var Ai=r(_a);ad=s(Ai,"STRONG",{});var Zc=r(ad);Ph=d(Zc,"call"),Zc.forEach(t),Sh=d(Ai,"()"),Ai.forEach(t),Oh=d(kt," will encode source text format passed as first argument or with the "),sd=s(kt,"CODE",{});var Yc=r(sd);Ah=d(Yc,"text"),Yc.forEach(t),Ih=d(kt,`
keyword, and target text format passed with the `),rd=s(kt,"CODE",{});var ep=r(rd);Nh=d(ep,"text_label"),ep.forEach(t),Dh=d(kt," keyword argument."),kt.forEach(t),pp=u(o),ri=s(o,"UL",{});var tp=r(ri);id=s(tp,"LI",{});var op=r(id);Lh=d(op,"Supervised training"),op.forEach(t),tp.forEach(t),up=u(o),v(ga.$$.fragment,o),hp=u(o),ii=s(o,"UL",{});var np=r(ii);ba=s(np,"LI",{});var ai=r(ba);dd=s(ai,"P",{});var ap=r(dd);Gh=d(ap,"Generation"),ap.forEach(t),Wh=u(ai),Nt=s(ai,"P",{});var Mo=r(Nt);Rh=d(Mo,"While generating the target text set the "),ld=s(Mo,"CODE",{});var sp=r(ld);Uh=d(sp,"decoder_start_token_id"),sp.forEach(t),Xh=d(Mo,` to the target language id. The following
example shows how to translate English to Romanian using the `),cd=s(Mo,"EM",{});var rp=r(cd);Qh=d(rp,"facebook/mbart-large-en-ro"),rp.forEach(t),Vh=d(Mo," model."),Mo.forEach(t),ai.forEach(t),np.forEach(t),mp=u(o),v(ka.$$.fragment,o),fp=u(o),Dt=s(o,"H2",{class:!0});var si=r(Dt);$o=s(si,"A",{id:!0,class:!0,href:!0});var ip=r($o);pd=s(ip,"SPAN",{});var dp=r(pd);v(ya.$$.fragment,dp),dp.forEach(t),ip.forEach(t),Hh=u(si),ud=s(si,"SPAN",{});var lp=r(ud);Jh=d(lp,"Overview of MBart-50"),lp.forEach(t),si.forEach(t),_p=u(o),vt=s(o,"P",{});var Ii=r(vt);Kh=d(Ii,"MBart-50 was introduced in the "),va=s(Ii,"A",{href:!0,rel:!0});var RT=r(va);Zh=d(RT,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),RT.forEach(t),Yh=d(Ii,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=s(Ii,"EM",{});var UT=r(hd);em=d(UT,"mbart-large-cc25"),UT.forEach(t),tm=d(Ii,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Ii.forEach(t),gp=u(o),di=s(o,"P",{});var XT=r(di);om=d(XT,"According to the abstract"),XT.forEach(t),bp=u(o),li=s(o,"P",{});var QT=r(li);md=s(QT,"EM",{});var VT=r(md);nm=d(VT,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),VT.forEach(t),QT.forEach(t),kp=u(o),Lt=s(o,"H3",{class:!0});var su=r(Lt);xo=s(su,"A",{id:!0,class:!0,href:!0});var HT=r(xo);fd=s(HT,"SPAN",{});var JT=r(fd);v(Ta.$$.fragment,JT),JT.forEach(t),HT.forEach(t),am=u(su),_d=s(su,"SPAN",{});var KT=r(_d);sm=d(KT,"Training of MBart-50"),KT.forEach(t),su.forEach(t),yp=u(o),He=s(o,"P",{});var ea=r(He);rm=d(ea,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=s(ea,"CODE",{});var ZT=r(gd);im=d(ZT,"[lang_code] X [eos]"),ZT.forEach(t),dm=d(ea,", where "),bd=s(ea,"CODE",{});var YT=r(bd);lm=d(YT,"lang_code"),YT.forEach(t),cm=d(ea,` is source
language id for source text and target language id for target text, with `),kd=s(ea,"CODE",{});var ew=r(kd);pm=d(ew,"X"),ew.forEach(t),um=d(ea,` being the source or target text
respectively.`),ea.forEach(t),vp=u(o),zo=s(o,"P",{});var ru=r(zo);hm=d(ru,"MBart-50 has its own tokenizer "),ci=s(ru,"A",{href:!0});var tw=r(ci);mm=d(tw,"MBart50Tokenizer"),tw.forEach(t),fm=d(ru,"."),ru.forEach(t),Tp=u(o),pi=s(o,"UL",{});var ow=r(pi);yd=s(ow,"LI",{});var nw=r(yd);_m=d(nw,"Supervised training"),nw.forEach(t),ow.forEach(t),wp=u(o),v(wa.$$.fragment,o),Mp=u(o),ui=s(o,"UL",{});var aw=r(ui);Ma=s(aw,"LI",{});var iu=r(Ma);vd=s(iu,"P",{});var sw=r(vd);gm=d(sw,"Generation"),sw.forEach(t),bm=u(iu),Te=s(iu,"P",{});var nt=r(Te);km=d(nt,"To generate using the mBART-50 multilingual translation models, "),Td=s(nt,"CODE",{});var rw=r(Td);ym=d(rw,"eos_token_id"),rw.forEach(t),vm=d(nt,` is used as the
`),wd=s(nt,"CODE",{});var iw=r(wd);Tm=d(iw,"decoder_start_token_id"),iw.forEach(t),wm=d(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Md=s(nt,"EM",{});var dw=r(Md);Mm=d(dw,"forced_bos_token_id"),dw.forEach(t),$m=d(nt," parameter to the "),$d=s(nt,"EM",{});var lw=r($d);xm=d(lw,"generate"),lw.forEach(t),zm=d(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),xd=s(nt,"EM",{});var cw=r(xd);Fm=d(cw,"facebook/mbart-50-large-many-to-many"),cw.forEach(t),qm=d(nt," checkpoint."),nt.forEach(t),iu.forEach(t),aw.forEach(t),$p=u(o),v($a.$$.fragment,o),xp=u(o),Gt=s(o,"H2",{class:!0});var du=r(Gt);Fo=s(du,"A",{id:!0,class:!0,href:!0});var pw=r(Fo);zd=s(pw,"SPAN",{});var uw=r(zd);v(xa.$$.fragment,uw),uw.forEach(t),pw.forEach(t),Bm=u(du),Fd=s(du,"SPAN",{});var hw=r(Fd);jm=d(hw,"MBartConfig"),hw.forEach(t),du.forEach(t),zp=u(o),Le=s(o,"DIV",{class:!0});var ta=r(Le);v(za.$$.fragment,ta),Cm=u(ta),Wt=s(ta,"P",{});var Ni=r(Wt);Em=d(Ni,"This is the configuration class to store the configuration of a "),hi=s(Ni,"A",{href:!0});var mw=r(hi);Pm=d(mw,"MBartModel"),mw.forEach(t),Sm=d(Ni,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Fa=s(Ni,"A",{href:!0,rel:!0});var fw=r(Fa);Om=d(fw,"facebook/mbart-large-cc25"),fw.forEach(t),Am=d(Ni," architecture."),Ni.forEach(t),Im=u(ta),Rt=s(ta,"P",{});var Di=r(Rt);Nm=d(Di,"Configuration objects inherit from "),mi=s(Di,"A",{href:!0});var _w=r(mi);Dm=d(_w,"PretrainedConfig"),_w.forEach(t),Lm=d(Di,` and can be used to control the model outputs. Read the
documentation from `),fi=s(Di,"A",{href:!0});var gw=r(fi);Gm=d(gw,"PretrainedConfig"),gw.forEach(t),Wm=d(Di," for more information."),Di.forEach(t),Rm=u(ta),v(qo.$$.fragment,ta),ta.forEach(t),Fp=u(o),Ut=s(o,"H2",{class:!0});var lu=r(Ut);Bo=s(lu,"A",{id:!0,class:!0,href:!0});var bw=r(Bo);qd=s(bw,"SPAN",{});var kw=r(qd);v(qa.$$.fragment,kw),kw.forEach(t),bw.forEach(t),Um=u(lu),Bd=s(lu,"SPAN",{});var yw=r(Bd);Xm=d(yw,"MBartTokenizer"),yw.forEach(t),lu.forEach(t),qp=u(o),de=s(o,"DIV",{class:!0});var at=r(de);v(Ba.$$.fragment,at),Qm=u(at),jd=s(at,"P",{});var vw=r(jd);Vm=d(vw,"Construct an MBART tokenizer."),vw.forEach(t),Hm=u(at),mt=s(at,"P",{});var oa=r(mt);Jm=d(oa,"Adapted from "),_i=s(oa,"A",{href:!0});var Tw=r(_i);Km=d(Tw,"RobertaTokenizer"),Tw.forEach(t),Zm=d(oa," and "),gi=s(oa,"A",{href:!0});var ww=r(gi);Ym=d(ww,"XLNetTokenizer"),ww.forEach(t),ef=d(oa,`. Based on
`),ja=s(oa,"A",{href:!0,rel:!0});var Mw=r(ja);tf=d(Mw,"SentencePiece"),Mw.forEach(t),of=d(oa,"."),oa.forEach(t),nf=u(at),Xt=s(at,"P",{});var Li=r(Xt);af=d(Li,"The tokenization method is "),Cd=s(Li,"CODE",{});var $w=r(Cd);sf=d($w,"<tokens> <eos> <language code>"),$w.forEach(t),rf=d(Li," for source language documents, and "),Ed=s(Li,"CODE",{});var xw=r(Ed);df=d(xw,"<language code> <tokens> <eos>"),xw.forEach(t),lf=d(Li," for target language documents."),Li.forEach(t),cf=u(at),v(jo.$$.fragment,at),pf=u(at),Je=s(at,"DIV",{class:!0});var na=r(Je);v(Ca.$$.fragment,na),uf=u(na),Ea=s(na,"P",{});var cu=r(Ea);hf=d(cu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Pd=s(cu,"CODE",{});var zw=r(Pd);mf=d(zw,"X"),zw.forEach(t),ff=d(cu," represents the sequence:"),cu.forEach(t),_f=u(na),Pa=s(na,"UL",{});var pu=r(Pa);Sa=s(pu,"LI",{});var uu=r(Sa);Sd=s(uu,"CODE",{});var Fw=r(Sd);gf=d(Fw,"input_ids"),Fw.forEach(t),bf=d(uu," (for encoder) "),Od=s(uu,"CODE",{});var qw=r(Od);kf=d(qw,"X [eos, src_lang_code]"),qw.forEach(t),uu.forEach(t),yf=u(pu),Oa=s(pu,"LI",{});var hu=r(Oa);Ad=s(hu,"CODE",{});var Bw=r(Ad);vf=d(Bw,"decoder_input_ids"),Bw.forEach(t),Tf=d(hu,": (for decoder) "),Id=s(hu,"CODE",{});var jw=r(Id);wf=d(jw,"X [eos, tgt_lang_code]"),jw.forEach(t),hu.forEach(t),pu.forEach(t),Mf=u(na),Nd=s(na,"P",{});var Cw=r(Nd);$f=d(Cw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Cw.forEach(t),na.forEach(t),at.forEach(t),Bp=u(o),Qt=s(o,"H2",{class:!0});var mu=r(Qt);Co=s(mu,"A",{id:!0,class:!0,href:!0});var Ew=r(Co);Dd=s(Ew,"SPAN",{});var Pw=r(Dd);v(Aa.$$.fragment,Pw),Pw.forEach(t),Ew.forEach(t),xf=u(mu),Ld=s(mu,"SPAN",{});var Sw=r(Ld);zf=d(Sw,"MBartTokenizerFast"),Sw.forEach(t),mu.forEach(t),jp=u(o),A=s(o,"DIV",{class:!0});var Z=r(A);v(Ia.$$.fragment,Z),Ff=u(Z),Vt=s(Z,"P",{});var Gi=r(Vt);qf=d(Gi,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Gd=s(Gi,"EM",{});var Ow=r(Gd);Bf=d(Ow,"tokenizers"),Ow.forEach(t),jf=d(Gi,` library). Based on
`),Na=s(Gi,"A",{href:!0,rel:!0});var Aw=r(Na);Cf=d(Aw,"BPE"),Aw.forEach(t),Ef=d(Gi,"."),Gi.forEach(t),Pf=u(Z),Da=s(Z,"P",{});var fu=r(Da);Sf=d(fu,"This tokenizer inherits from "),bi=s(fu,"A",{href:!0});var Iw=r(bi);Of=d(Iw,"PreTrainedTokenizerFast"),Iw.forEach(t),Af=d(fu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fu.forEach(t),If=u(Z),Ht=s(Z,"P",{});var Wi=r(Ht);Nf=d(Wi,"The tokenization method is "),Wd=s(Wi,"CODE",{});var Nw=r(Wd);Df=d(Nw,"<tokens> <eos> <language code>"),Nw.forEach(t),Lf=d(Wi," for source language documents, and "),Rd=s(Wi,"CODE",{});var Dw=r(Rd);Gf=d(Dw,"<language code> <tokens> <eos>"),Dw.forEach(t),Wf=d(Wi," for target language documents."),Wi.forEach(t),Rf=u(Z),v(Eo.$$.fragment,Z),Uf=u(Z),qe=s(Z,"DIV",{class:!0});var Tt=r(qe);v(La.$$.fragment,Tt),Xf=u(Tt),Ud=s(Tt,"P",{});var Lw=r(Ud);Qf=d(Lw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Lw.forEach(t),Vf=u(Tt),Ga=s(Tt,"P",{});var _u=r(Ga);Hf=d(_u,"An MBART sequence has the following format, where "),Xd=s(_u,"CODE",{});var Gw=r(Xd);Jf=d(Gw,"X"),Gw.forEach(t),Kf=d(_u," represents the sequence:"),_u.forEach(t),Zf=u(Tt),Wa=s(Tt,"UL",{});var gu=r(Wa);Ra=s(gu,"LI",{});var bu=r(Ra);Qd=s(bu,"CODE",{});var Ww=r(Qd);Yf=d(Ww,"input_ids"),Ww.forEach(t),e_=d(bu," (for encoder) "),Vd=s(bu,"CODE",{});var Rw=r(Vd);t_=d(Rw,"X [eos, src_lang_code]"),Rw.forEach(t),bu.forEach(t),o_=u(gu),Ua=s(gu,"LI",{});var ku=r(Ua);Hd=s(ku,"CODE",{});var Uw=r(Hd);n_=d(Uw,"decoder_input_ids"),Uw.forEach(t),a_=d(ku,": (for decoder) "),Jd=s(ku,"CODE",{});var Xw=r(Jd);s_=d(Xw,"X [eos, tgt_lang_code]"),Xw.forEach(t),ku.forEach(t),gu.forEach(t),r_=u(Tt),Kd=s(Tt,"P",{});var Qw=r(Kd);i_=d(Qw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Qw.forEach(t),Tt.forEach(t),d_=u(Z),Po=s(Z,"DIV",{class:!0});var yu=r(Po);v(Xa.$$.fragment,yu),l_=u(yu),Zd=s(yu,"P",{});var Vw=r(Zd);c_=d(Vw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Vw.forEach(t),yu.forEach(t),p_=u(Z),So=s(Z,"DIV",{class:!0});var vu=r(So);v(Qa.$$.fragment,vu),u_=u(vu),Yd=s(vu,"P",{});var Hw=r(Yd);h_=d(Hw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),Hw.forEach(t),vu.forEach(t),m_=u(Z),Oo=s(Z,"DIV",{class:!0});var Tu=r(Oo);v(Va.$$.fragment,Tu),f_=u(Tu),el=s(Tu,"P",{});var Jw=r(el);__=d(Jw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Jw.forEach(t),Tu.forEach(t),Z.forEach(t),Cp=u(o),Jt=s(o,"H2",{class:!0});var wu=r(Jt);Ao=s(wu,"A",{id:!0,class:!0,href:!0});var Kw=r(Ao);tl=s(Kw,"SPAN",{});var Zw=r(tl);v(Ha.$$.fragment,Zw),Zw.forEach(t),Kw.forEach(t),g_=u(wu),ol=s(wu,"SPAN",{});var Yw=r(ol);b_=d(Yw,"MBart50Tokenizer"),Yw.forEach(t),wu.forEach(t),Ep=u(o),I=s(o,"DIV",{class:!0});var Y=r(I);v(Ja.$$.fragment,Y),k_=u(Y),Ka=s(Y,"P",{});var Mu=r(Ka);y_=d(Mu,"Construct a MBart50 tokenizer. Based on "),Za=s(Mu,"A",{href:!0,rel:!0});var eM=r(Za);v_=d(eM,"SentencePiece"),eM.forEach(t),T_=d(Mu,"."),Mu.forEach(t),w_=u(Y),Ya=s(Y,"P",{});var $u=r(Ya);M_=d($u,"This tokenizer inherits from "),ki=s($u,"A",{href:!0});var tM=r(ki);$_=d(tM,"PreTrainedTokenizer"),tM.forEach(t),x_=d($u,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$u.forEach(t),z_=u(Y),v(Io.$$.fragment,Y),F_=u(Y),Ke=s(Y,"DIV",{class:!0});var aa=r(Ke);v(es.$$.fragment,aa),q_=u(aa),ts=s(aa,"P",{});var xu=r(ts);B_=d(xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),nl=s(xu,"CODE",{});var oM=r(nl);j_=d(oM,"X"),oM.forEach(t),C_=d(xu," represents the sequence:"),xu.forEach(t),E_=u(aa),os=s(aa,"UL",{});var zu=r(os);ns=s(zu,"LI",{});var Fu=r(ns);al=s(Fu,"CODE",{});var nM=r(al);P_=d(nM,"input_ids"),nM.forEach(t),S_=d(Fu," (for encoder) "),sl=s(Fu,"CODE",{});var aM=r(sl);O_=d(aM,"[src_lang_code] X [eos]"),aM.forEach(t),Fu.forEach(t),A_=u(zu),as=s(zu,"LI",{});var qu=r(as);rl=s(qu,"CODE",{});var sM=r(rl);I_=d(sM,"labels"),sM.forEach(t),N_=d(qu,": (for decoder) "),il=s(qu,"CODE",{});var rM=r(il);D_=d(rM,"[tgt_lang_code] X [eos]"),rM.forEach(t),qu.forEach(t),zu.forEach(t),L_=u(aa),dl=s(aa,"P",{});var iM=r(dl);G_=d(iM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),iM.forEach(t),aa.forEach(t),W_=u(Y),No=s(Y,"DIV",{class:!0});var Bu=r(No);v(ss.$$.fragment,Bu),R_=u(Bu),ll=s(Bu,"P",{});var dM=r(ll);U_=d(dM,"Converts a sequence of tokens (strings for sub-words) in a single string."),dM.forEach(t),Bu.forEach(t),X_=u(Y),Do=s(Y,"DIV",{class:!0});var ju=r(Do);v(rs.$$.fragment,ju),Q_=u(ju),is=s(ju,"P",{});var Cu=r(is);V_=d(Cu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),cl=s(Cu,"CODE",{});var lM=r(cl);H_=d(lM,"prepare_for_model"),lM.forEach(t),J_=d(Cu," method."),Cu.forEach(t),ju.forEach(t),K_=u(Y),Lo=s(Y,"DIV",{class:!0});var Eu=r(Lo);v(ds.$$.fragment,Eu),Z_=u(Eu),pl=s(Eu,"P",{});var cM=r(pl);Y_=d(cM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),cM.forEach(t),Eu.forEach(t),eg=u(Y),Go=s(Y,"DIV",{class:!0});var Pu=r(Go);v(ls.$$.fragment,Pu),tg=u(Pu),ul=s(Pu,"P",{});var pM=r(ul);og=d(pM,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),pM.forEach(t),Pu.forEach(t),Y.forEach(t),Pp=u(o),Kt=s(o,"H2",{class:!0});var Su=r(Kt);Wo=s(Su,"A",{id:!0,class:!0,href:!0});var uM=r(Wo);hl=s(uM,"SPAN",{});var hM=r(hl);v(cs.$$.fragment,hM),hM.forEach(t),uM.forEach(t),ng=u(Su),ml=s(Su,"SPAN",{});var mM=r(ml);ag=d(mM,"MBart50TokenizerFast"),mM.forEach(t),Su.forEach(t),Sp=u(o),J=s(o,"DIV",{class:!0});var Se=r(J);v(ps.$$.fragment,Se),sg=u(Se),Zt=s(Se,"P",{});var Ri=r(Zt);rg=d(Ri,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),fl=s(Ri,"EM",{});var fM=r(fl);ig=d(fM,"tokenizers"),fM.forEach(t),dg=d(Ri,` library). Based on
`),us=s(Ri,"A",{href:!0,rel:!0});var _M=r(us);lg=d(_M,"BPE"),_M.forEach(t),cg=d(Ri,"."),Ri.forEach(t),pg=u(Se),hs=s(Se,"P",{});var Ou=r(hs);ug=d(Ou,"This tokenizer inherits from "),yi=s(Ou,"A",{href:!0});var gM=r(yi);hg=d(gM,"PreTrainedTokenizerFast"),gM.forEach(t),mg=d(Ou,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ou.forEach(t),fg=u(Se),v(Ro.$$.fragment,Se),_g=u(Se),Be=s(Se,"DIV",{class:!0});var wt=r(Be);v(ms.$$.fragment,wt),gg=u(wt),_l=s(wt,"P",{});var bM=r(_l);bg=d(bM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),bM.forEach(t),kg=u(wt),fs=s(wt,"P",{});var Au=r(fs);yg=d(Au,"An MBART-50 sequence has the following format, where "),gl=s(Au,"CODE",{});var kM=r(gl);vg=d(kM,"X"),kM.forEach(t),Tg=d(Au," represents the sequence:"),Au.forEach(t),wg=u(wt),_s=s(wt,"UL",{});var Iu=r(_s);gs=s(Iu,"LI",{});var Nu=r(gs);bl=s(Nu,"CODE",{});var yM=r(bl);Mg=d(yM,"input_ids"),yM.forEach(t),$g=d(Nu," (for encoder) "),kl=s(Nu,"CODE",{});var vM=r(kl);xg=d(vM,"[src_lang_code] X [eos]"),vM.forEach(t),Nu.forEach(t),zg=u(Iu),bs=s(Iu,"LI",{});var Du=r(bs);yl=s(Du,"CODE",{});var TM=r(yl);Fg=d(TM,"labels"),TM.forEach(t),qg=d(Du,": (for decoder) "),vl=s(Du,"CODE",{});var wM=r(vl);Bg=d(wM,"[tgt_lang_code] X [eos]"),wM.forEach(t),Du.forEach(t),Iu.forEach(t),jg=u(wt),Tl=s(wt,"P",{});var MM=r(Tl);Cg=d(MM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),MM.forEach(t),wt.forEach(t),Eg=u(Se),Uo=s(Se,"DIV",{class:!0});var Lu=r(Uo);v(ks.$$.fragment,Lu),Pg=u(Lu),wl=s(Lu,"P",{});var $M=r(wl);Sg=d($M,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),$M.forEach(t),Lu.forEach(t),Og=u(Se),Xo=s(Se,"DIV",{class:!0});var Gu=r(Xo);v(ys.$$.fragment,Gu),Ag=u(Gu),Ml=s(Gu,"P",{});var xM=r(Ml);Ig=d(xM,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),xM.forEach(t),Gu.forEach(t),Se.forEach(t),Op=u(o),Yt=s(o,"H2",{class:!0});var Wu=r(Yt);Qo=s(Wu,"A",{id:!0,class:!0,href:!0});var zM=r(Qo);$l=s(zM,"SPAN",{});var FM=r($l);v(vs.$$.fragment,FM),FM.forEach(t),zM.forEach(t),Ng=u(Wu),xl=s(Wu,"SPAN",{});var qM=r(xl);Dg=d(qM,"MBartModel"),qM.forEach(t),Wu.forEach(t),Ap=u(o),Ge=s(o,"DIV",{class:!0});var sa=r(Ge);v(Ts.$$.fragment,sa),Lg=u(sa),ws=s(sa,"P",{});var Ru=r(ws);Gg=d(Ru,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vi=s(Ru,"A",{href:!0});var BM=r(vi);Wg=d(BM,"PreTrainedModel"),BM.forEach(t),Rg=d(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),Ug=u(sa),Ms=s(sa,"P",{});var Uu=r(Ms);Xg=d(Uu,"This model is also a PyTorch "),$s=s(Uu,"A",{href:!0,rel:!0});var jM=r($s);Qg=d(jM,"torch.nn.Module"),jM.forEach(t),Vg=d(Uu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uu.forEach(t),Hg=u(sa),Ze=s(sa,"DIV",{class:!0});var ra=r(Ze);v(xs.$$.fragment,ra),Jg=u(ra),eo=s(ra,"P",{});var Ui=r(eo);Kg=d(Ui,"The "),Ti=s(Ui,"A",{href:!0});var CM=r(Ti);Zg=d(CM,"MBartModel"),CM.forEach(t),Yg=d(Ui," forward method, overrides the "),zl=s(Ui,"CODE",{});var EM=r(zl);eb=d(EM,"__call__"),EM.forEach(t),tb=d(Ui," special method."),Ui.forEach(t),ob=u(ra),v(Vo.$$.fragment,ra),nb=u(ra),v(Ho.$$.fragment,ra),ra.forEach(t),sa.forEach(t),Ip=u(o),to=s(o,"H2",{class:!0});var Xu=r(to);Jo=s(Xu,"A",{id:!0,class:!0,href:!0});var PM=r(Jo);Fl=s(PM,"SPAN",{});var SM=r(Fl);v(zs.$$.fragment,SM),SM.forEach(t),PM.forEach(t),ab=u(Xu),ql=s(Xu,"SPAN",{});var OM=r(ql);sb=d(OM,"MBartForConditionalGeneration"),OM.forEach(t),Xu.forEach(t),Np=u(o),We=s(o,"DIV",{class:!0});var ia=r(We);v(Fs.$$.fragment,ia),rb=u(ia),qs=s(ia,"P",{});var Qu=r(qs);ib=d(Qu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),wi=s(Qu,"A",{href:!0});var AM=r(wi);db=d(AM,"PreTrainedModel"),AM.forEach(t),lb=d(Qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qu.forEach(t),cb=u(ia),Bs=s(ia,"P",{});var Vu=r(Bs);pb=d(Vu,"This model is also a PyTorch "),js=s(Vu,"A",{href:!0,rel:!0});var IM=r(js);ub=d(IM,"torch.nn.Module"),IM.forEach(t),hb=d(Vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vu.forEach(t),mb=u(ia),je=s(ia,"DIV",{class:!0});var Mt=r(je);v(Cs.$$.fragment,Mt),fb=u(Mt),oo=s(Mt,"P",{});var Xi=r(oo);_b=d(Xi,"The "),Mi=s(Xi,"A",{href:!0});var NM=r(Mi);gb=d(NM,"MBartForConditionalGeneration"),NM.forEach(t),bb=d(Xi," forward method, overrides the "),Bl=s(Xi,"CODE",{});var DM=r(Bl);kb=d(DM,"__call__"),DM.forEach(t),yb=d(Xi," special method."),Xi.forEach(t),vb=u(Mt),v(Ko.$$.fragment,Mt),Tb=u(Mt),v(Zo.$$.fragment,Mt),wb=u(Mt),v(Yo.$$.fragment,Mt),Mt.forEach(t),ia.forEach(t),Dp=u(o),no=s(o,"H2",{class:!0});var Hu=r(no);en=s(Hu,"A",{id:!0,class:!0,href:!0});var LM=r(en);jl=s(LM,"SPAN",{});var GM=r(jl);v(Es.$$.fragment,GM),GM.forEach(t),LM.forEach(t),Mb=u(Hu),Cl=s(Hu,"SPAN",{});var WM=r(Cl);$b=d(WM,"MBartForQuestionAnswering"),WM.forEach(t),Hu.forEach(t),Lp=u(o),we=s(o,"DIV",{class:!0});var $t=r(we);v(Ps.$$.fragment,$t),xb=u($t),ao=s($t,"P",{});var Qi=r(ao);zb=d(Qi,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),El=s(Qi,"CODE",{});var RM=r(El);Fb=d(RM,"span start logits"),RM.forEach(t),qb=d(Qi," and "),Pl=s(Qi,"CODE",{});var UM=r(Pl);Bb=d(UM,"span end logits"),UM.forEach(t),jb=d(Qi,")."),Qi.forEach(t),Cb=u($t),Ss=s($t,"P",{});var Ju=r(Ss);Eb=d(Ju,"This model inherits from "),$i=s(Ju,"A",{href:!0});var XM=r($i);Pb=d(XM,"PreTrainedModel"),XM.forEach(t),Sb=d(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju.forEach(t),Ob=u($t),Os=s($t,"P",{});var Ku=r(Os);Ab=d(Ku,"This model is also a PyTorch "),As=s(Ku,"A",{href:!0,rel:!0});var QM=r(As);Ib=d(QM,"torch.nn.Module"),QM.forEach(t),Nb=d(Ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ku.forEach(t),Db=u($t),Ce=s($t,"DIV",{class:!0});var xt=r(Ce);v(Is.$$.fragment,xt),Lb=u(xt),so=s(xt,"P",{});var Vi=r(so);Gb=d(Vi,"The "),xi=s(Vi,"A",{href:!0});var VM=r(xi);Wb=d(VM,"MBartForQuestionAnswering"),VM.forEach(t),Rb=d(Vi," forward method, overrides the "),Sl=s(Vi,"CODE",{});var HM=r(Sl);Ub=d(HM,"__call__"),HM.forEach(t),Xb=d(Vi," special method."),Vi.forEach(t),Qb=u(xt),v(tn.$$.fragment,xt),Vb=u(xt),v(on.$$.fragment,xt),Hb=u(xt),v(nn.$$.fragment,xt),xt.forEach(t),$t.forEach(t),Gp=u(o),ro=s(o,"H2",{class:!0});var Zu=r(ro);an=s(Zu,"A",{id:!0,class:!0,href:!0});var JM=r(an);Ol=s(JM,"SPAN",{});var KM=r(Ol);v(Ns.$$.fragment,KM),KM.forEach(t),JM.forEach(t),Jb=u(Zu),Al=s(Zu,"SPAN",{});var ZM=r(Al);Kb=d(ZM,"MBartForSequenceClassification"),ZM.forEach(t),Zu.forEach(t),Wp=u(o),Me=s(o,"DIV",{class:!0});var zt=r(Me);v(Ds.$$.fragment,zt),Zb=u(zt),Il=s(zt,"P",{});var YM=r(Il);Yb=d(YM,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),YM.forEach(t),ek=u(zt),Ls=s(zt,"P",{});var Yu=r(Ls);tk=d(Yu,"This model inherits from "),zi=s(Yu,"A",{href:!0});var e$=r(zi);ok=d(e$,"PreTrainedModel"),e$.forEach(t),nk=d(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yu.forEach(t),ak=u(zt),Gs=s(zt,"P",{});var eh=r(Gs);sk=d(eh,"This model is also a PyTorch "),Ws=s(eh,"A",{href:!0,rel:!0});var t$=r(Ws);rk=d(t$,"torch.nn.Module"),t$.forEach(t),ik=d(eh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh.forEach(t),dk=u(zt),K=s(zt,"DIV",{class:!0});var Oe=r(K);v(Rs.$$.fragment,Oe),lk=u(Oe),io=s(Oe,"P",{});var Hi=r(io);ck=d(Hi,"The "),Fi=s(Hi,"A",{href:!0});var o$=r(Fi);pk=d(o$,"MBartForSequenceClassification"),o$.forEach(t),uk=d(Hi," forward method, overrides the "),Nl=s(Hi,"CODE",{});var n$=r(Nl);hk=d(n$,"__call__"),n$.forEach(t),mk=d(Hi," special method."),Hi.forEach(t),fk=u(Oe),v(sn.$$.fragment,Oe),_k=u(Oe),v(rn.$$.fragment,Oe),gk=u(Oe),v(dn.$$.fragment,Oe),bk=u(Oe),v(ln.$$.fragment,Oe),kk=u(Oe),v(cn.$$.fragment,Oe),Oe.forEach(t),zt.forEach(t),Rp=u(o),lo=s(o,"H2",{class:!0});var th=r(lo);pn=s(th,"A",{id:!0,class:!0,href:!0});var a$=r(pn);Dl=s(a$,"SPAN",{});var s$=r(Dl);v(Us.$$.fragment,s$),s$.forEach(t),a$.forEach(t),yk=u(th),Ll=s(th,"SPAN",{});var r$=r(Ll);vk=d(r$,"MBartForCausalLM"),r$.forEach(t),th.forEach(t),Up=u(o),co=s(o,"DIV",{class:!0});var oh=r(co);v(Xs.$$.fragment,oh),Tk=u(oh),un=s(oh,"DIV",{class:!0});var nh=r(un);v(Qs.$$.fragment,nh),wk=u(nh),v(hn.$$.fragment,nh),nh.forEach(t),oh.forEach(t),Xp=u(o),po=s(o,"H2",{class:!0});var ah=r(po);mn=s(ah,"A",{id:!0,class:!0,href:!0});var i$=r(mn);Gl=s(i$,"SPAN",{});var d$=r(Gl);v(Vs.$$.fragment,d$),d$.forEach(t),i$.forEach(t),Mk=u(ah),Wl=s(ah,"SPAN",{});var l$=r(Wl);$k=d(l$,"TFMBartModel"),l$.forEach(t),ah.forEach(t),Qp=u(o),$e=s(o,"DIV",{class:!0});var Ft=r($e);v(Hs.$$.fragment,Ft),xk=u(Ft),Js=s(Ft,"P",{});var sh=r(Js);zk=d(sh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=s(sh,"A",{href:!0});var c$=r(qi);Fk=d(c$,"TFPreTrainedModel"),c$.forEach(t),qk=d(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),Bk=u(Ft),Ks=s(Ft,"P",{});var rh=r(Ks);jk=d(rh,"This model is also a "),Zs=s(rh,"A",{href:!0,rel:!0});var p$=r(Zs);Ck=d(p$,"tf.keras.Model"),p$.forEach(t),Ek=d(rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh.forEach(t),Pk=u(Ft),v(fn.$$.fragment,Ft),Sk=u(Ft),Ye=s(Ft,"DIV",{class:!0});var da=r(Ye);v(Ys.$$.fragment,da),Ok=u(da),uo=s(da,"P",{});var Ji=r(uo);Ak=d(Ji,"The "),Bi=s(Ji,"A",{href:!0});var u$=r(Bi);Ik=d(u$,"TFMBartModel"),u$.forEach(t),Nk=d(Ji," forward method, overrides the "),Rl=s(Ji,"CODE",{});var h$=r(Rl);Dk=d(h$,"__call__"),h$.forEach(t),Lk=d(Ji," special method."),Ji.forEach(t),Gk=u(da),v(_n.$$.fragment,da),Wk=u(da),v(gn.$$.fragment,da),da.forEach(t),Ft.forEach(t),Vp=u(o),ho=s(o,"H2",{class:!0});var ih=r(ho);bn=s(ih,"A",{id:!0,class:!0,href:!0});var m$=r(bn);Ul=s(m$,"SPAN",{});var f$=r(Ul);v(er.$$.fragment,f$),f$.forEach(t),m$.forEach(t),Rk=u(ih),Xl=s(ih,"SPAN",{});var _$=r(Xl);Uk=d(_$,"TFMBartForConditionalGeneration"),_$.forEach(t),ih.forEach(t),Hp=u(o),xe=s(o,"DIV",{class:!0});var qt=r(xe);v(tr.$$.fragment,qt),Xk=u(qt),or=s(qt,"P",{});var dh=r(or);Qk=d(dh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ji=s(dh,"A",{href:!0});var g$=r(ji);Vk=d(g$,"TFPreTrainedModel"),g$.forEach(t),Hk=d(dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dh.forEach(t),Jk=u(qt),nr=s(qt,"P",{});var lh=r(nr);Kk=d(lh,"This model is also a "),ar=s(lh,"A",{href:!0,rel:!0});var b$=r(ar);Zk=d(b$,"tf.keras.Model"),b$.forEach(t),Yk=d(lh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh.forEach(t),ey=u(qt),v(kn.$$.fragment,qt),ty=u(qt),Ee=s(qt,"DIV",{class:!0});var Bt=r(Ee);v(sr.$$.fragment,Bt),oy=u(Bt),mo=s(Bt,"P",{});var Ki=r(mo);ny=d(Ki,"The "),Ci=s(Ki,"A",{href:!0});var k$=r(Ci);ay=d(k$,"TFMBartForConditionalGeneration"),k$.forEach(t),sy=d(Ki," forward method, overrides the "),Ql=s(Ki,"CODE",{});var y$=r(Ql);ry=d(y$,"__call__"),y$.forEach(t),iy=d(Ki," special method."),Ki.forEach(t),dy=u(Bt),v(yn.$$.fragment,Bt),ly=u(Bt),v(vn.$$.fragment,Bt),cy=u(Bt),v(Tn.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),Jp=u(o),fo=s(o,"H2",{class:!0});var ch=r(fo);wn=s(ch,"A",{id:!0,class:!0,href:!0});var v$=r(wn);Vl=s(v$,"SPAN",{});var T$=r(Vl);v(rr.$$.fragment,T$),T$.forEach(t),v$.forEach(t),py=u(ch),Hl=s(ch,"SPAN",{});var w$=r(Hl);uy=d(w$,"FlaxMBartModel"),w$.forEach(t),ch.forEach(t),Kp=u(o),W=s(o,"DIV",{class:!0});var pe=r(W);v(ir.$$.fragment,pe),hy=u(pe),dr=s(pe,"P",{});var ph=r(dr);my=d(ph,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ei=s(ph,"A",{href:!0});var M$=r(Ei);fy=d(M$,"FlaxPreTrainedModel"),M$.forEach(t),_y=d(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph.forEach(t),gy=u(pe),lr=s(pe,"P",{});var uh=r(lr);by=d(uh,`This model is also a Flax Linen
`),cr=s(uh,"A",{href:!0,rel:!0});var $$=r(cr);ky=d($$,"flax.nn.Module"),$$.forEach(t),yy=d(uh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),uh.forEach(t),vy=u(pe),Jl=s(pe,"P",{});var x$=r(Jl);Ty=d(x$,"Finally, this model supports inherent JAX features such as:"),x$.forEach(t),wy=u(pe),ft=s(pe,"UL",{});var la=r(ft);Kl=s(la,"LI",{});var z$=r(Kl);pr=s(z$,"A",{href:!0,rel:!0});var F$=r(pr);My=d(F$,"Just-In-Time (JIT) compilation"),F$.forEach(t),z$.forEach(t),$y=u(la),Zl=s(la,"LI",{});var q$=r(Zl);ur=s(q$,"A",{href:!0,rel:!0});var B$=r(ur);xy=d(B$,"Automatic Differentiation"),B$.forEach(t),q$.forEach(t),zy=u(la),Yl=s(la,"LI",{});var j$=r(Yl);hr=s(j$,"A",{href:!0,rel:!0});var C$=r(hr);Fy=d(C$,"Vectorization"),C$.forEach(t),j$.forEach(t),qy=u(la),ec=s(la,"LI",{});var E$=r(ec);mr=s(E$,"A",{href:!0,rel:!0});var P$=r(mr);By=d(P$,"Parallelization"),P$.forEach(t),E$.forEach(t),la.forEach(t),jy=u(pe),et=s(pe,"DIV",{class:!0});var ca=r(et);v(fr.$$.fragment,ca),Cy=u(ca),_o=s(ca,"P",{});var Zi=r(_o);Ey=d(Zi,"The "),tc=s(Zi,"CODE",{});var S$=r(tc);Py=d(S$,"FlaxMBartPreTrainedModel"),S$.forEach(t),Sy=d(Zi," forward method, overrides the "),oc=s(Zi,"CODE",{});var O$=r(oc);Oy=d(O$,"__call__"),O$.forEach(t),Ay=d(Zi," special method."),Zi.forEach(t),Iy=u(ca),v(Mn.$$.fragment,ca),Ny=u(ca),v($n.$$.fragment,ca),ca.forEach(t),Dy=u(pe),xn=s(pe,"DIV",{class:!0});var hh=r(xn);v(_r.$$.fragment,hh),Ly=u(hh),v(zn.$$.fragment,hh),hh.forEach(t),Gy=u(pe),Fn=s(pe,"DIV",{class:!0});var mh=r(Fn);v(gr.$$.fragment,mh),Wy=u(mh),v(qn.$$.fragment,mh),mh.forEach(t),pe.forEach(t),Zp=u(o),go=s(o,"H2",{class:!0});var fh=r(go);Bn=s(fh,"A",{id:!0,class:!0,href:!0});var A$=r(Bn);nc=s(A$,"SPAN",{});var I$=r(nc);v(br.$$.fragment,I$),I$.forEach(t),A$.forEach(t),Ry=u(fh),ac=s(fh,"SPAN",{});var N$=r(ac);Uy=d(N$,"FlaxMBartForConditionalGeneration"),N$.forEach(t),fh.forEach(t),Yp=u(o),R=s(o,"DIV",{class:!0});var ue=r(R);v(kr.$$.fragment,ue),Xy=u(ue),yr=s(ue,"P",{});var _h=r(yr);Qy=d(_h,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pi=s(_h,"A",{href:!0});var D$=r(Pi);Vy=d(D$,"FlaxPreTrainedModel"),D$.forEach(t),Hy=d(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),Jy=u(ue),vr=s(ue,"P",{});var gh=r(vr);Ky=d(gh,`This model is also a Flax Linen
`),Tr=s(gh,"A",{href:!0,rel:!0});var L$=r(Tr);Zy=d(L$,"flax.nn.Module"),L$.forEach(t),Yy=d(gh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gh.forEach(t),ev=u(ue),sc=s(ue,"P",{});var G$=r(sc);tv=d(G$,"Finally, this model supports inherent JAX features such as:"),G$.forEach(t),ov=u(ue),_t=s(ue,"UL",{});var pa=r(_t);rc=s(pa,"LI",{});var W$=r(rc);wr=s(W$,"A",{href:!0,rel:!0});var R$=r(wr);nv=d(R$,"Just-In-Time (JIT) compilation"),R$.forEach(t),W$.forEach(t),av=u(pa),ic=s(pa,"LI",{});var U$=r(ic);Mr=s(U$,"A",{href:!0,rel:!0});var X$=r(Mr);sv=d(X$,"Automatic Differentiation"),X$.forEach(t),U$.forEach(t),rv=u(pa),dc=s(pa,"LI",{});var Q$=r(dc);$r=s(Q$,"A",{href:!0,rel:!0});var V$=r($r);iv=d(V$,"Vectorization"),V$.forEach(t),Q$.forEach(t),dv=u(pa),lc=s(pa,"LI",{});var H$=r(lc);xr=s(H$,"A",{href:!0,rel:!0});var J$=r(xr);lv=d(J$,"Parallelization"),J$.forEach(t),H$.forEach(t),pa.forEach(t),cv=u(ue),Pe=s(ue,"DIV",{class:!0});var jt=r(Pe);v(zr.$$.fragment,jt),pv=u(jt),bo=s(jt,"P",{});var Yi=r(bo);uv=d(Yi,"The "),cc=s(Yi,"CODE",{});var K$=r(cc);hv=d(K$,"FlaxMBartPreTrainedModel"),K$.forEach(t),mv=d(Yi," forward method, overrides the "),pc=s(Yi,"CODE",{});var Z$=r(pc);fv=d(Z$,"__call__"),Z$.forEach(t),_v=d(Yi," special method."),Yi.forEach(t),gv=u(jt),v(jn.$$.fragment,jt),bv=u(jt),v(Cn.$$.fragment,jt),kv=u(jt),v(En.$$.fragment,jt),jt.forEach(t),yv=u(ue),Pn=s(ue,"DIV",{class:!0});var bh=r(Pn);v(Fr.$$.fragment,bh),vv=u(bh),v(Sn.$$.fragment,bh),bh.forEach(t),Tv=u(ue),On=s(ue,"DIV",{class:!0});var kh=r(On);v(qr.$$.fragment,kh),wv=u(kh),v(An.$$.fragment,kh),kh.forEach(t),ue.forEach(t),eu=u(o),ko=s(o,"H2",{class:!0});var yh=r(ko);In=s(yh,"A",{id:!0,class:!0,href:!0});var Y$=r(In);uc=s(Y$,"SPAN",{});var e2=r(uc);v(Br.$$.fragment,e2),e2.forEach(t),Y$.forEach(t),Mv=u(yh),hc=s(yh,"SPAN",{});var t2=r(hc);$v=d(t2,"FlaxMBartForSequenceClassification"),t2.forEach(t),yh.forEach(t),tu=u(o),N=s(o,"DIV",{class:!0});var ee=r(N);v(jr.$$.fragment,ee),xv=u(ee),mc=s(ee,"P",{});var o2=r(mc);zv=d(o2,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),o2.forEach(t),Fv=u(ee),Cr=s(ee,"P",{});var vh=r(Cr);qv=d(vh,"This model inherits from "),Si=s(vh,"A",{href:!0});var n2=r(Si);Bv=d(n2,"FlaxPreTrainedModel"),n2.forEach(t),jv=d(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh.forEach(t),Cv=u(ee),Er=s(ee,"P",{});var Th=r(Er);Ev=d(Th,`This model is also a Flax Linen
`),Pr=s(Th,"A",{href:!0,rel:!0});var a2=r(Pr);Pv=d(a2,"flax.nn.Module"),a2.forEach(t),Sv=d(Th,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Th.forEach(t),Ov=u(ee),fc=s(ee,"P",{});var s2=r(fc);Av=d(s2,"Finally, this model supports inherent JAX features such as:"),s2.forEach(t),Iv=u(ee),gt=s(ee,"UL",{});var ua=r(gt);_c=s(ua,"LI",{});var r2=r(_c);Sr=s(r2,"A",{href:!0,rel:!0});var i2=r(Sr);Nv=d(i2,"Just-In-Time (JIT) compilation"),i2.forEach(t),r2.forEach(t),Dv=u(ua),gc=s(ua,"LI",{});var d2=r(gc);Or=s(d2,"A",{href:!0,rel:!0});var l2=r(Or);Lv=d(l2,"Automatic Differentiation"),l2.forEach(t),d2.forEach(t),Gv=u(ua),bc=s(ua,"LI",{});var c2=r(bc);Ar=s(c2,"A",{href:!0,rel:!0});var p2=r(Ar);Wv=d(p2,"Vectorization"),p2.forEach(t),c2.forEach(t),Rv=u(ua),kc=s(ua,"LI",{});var u2=r(kc);Ir=s(u2,"A",{href:!0,rel:!0});var h2=r(Ir);Uv=d(h2,"Parallelization"),h2.forEach(t),u2.forEach(t),ua.forEach(t),Xv=u(ee),tt=s(ee,"DIV",{class:!0});var ha=r(tt);v(Nr.$$.fragment,ha),Qv=u(ha),yo=s(ha,"P",{});var ed=r(yo);Vv=d(ed,"The "),yc=s(ed,"CODE",{});var m2=r(yc);Hv=d(m2,"FlaxMBartPreTrainedModel"),m2.forEach(t),Jv=d(ed," forward method, overrides the "),vc=s(ed,"CODE",{});var f2=r(vc);Kv=d(f2,"__call__"),f2.forEach(t),Zv=d(ed," special method."),ed.forEach(t),Yv=u(ha),v(Nn.$$.fragment,ha),eT=u(ha),v(Dn.$$.fragment,ha),ha.forEach(t),tT=u(ee),Ln=s(ee,"DIV",{class:!0});var wh=r(Ln);v(Dr.$$.fragment,wh),oT=u(wh),v(Gn.$$.fragment,wh),wh.forEach(t),nT=u(ee),Wn=s(ee,"DIV",{class:!0});var Mh=r(Wn);v(Lr.$$.fragment,Mh),aT=u(Mh),v(Rn.$$.fragment,Mh),Mh.forEach(t),ee.forEach(t),ou=u(o),vo=s(o,"H2",{class:!0});var $h=r(vo);Un=s($h,"A",{id:!0,class:!0,href:!0});var _2=r(Un);Tc=s(_2,"SPAN",{});var g2=r(Tc);v(Gr.$$.fragment,g2),g2.forEach(t),_2.forEach(t),sT=u($h),wc=s($h,"SPAN",{});var b2=r(wc);rT=d(b2,"FlaxMBartForQuestionAnswering"),b2.forEach(t),$h.forEach(t),nu=u(o),D=s(o,"DIV",{class:!0});var te=r(D);v(Wr.$$.fragment,te),iT=u(te),To=s(te,"P",{});var td=r(To);dT=d(td,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Mc=s(td,"CODE",{});var k2=r(Mc);lT=d(k2,"span start logits"),k2.forEach(t),cT=d(td," and "),$c=s(td,"CODE",{});var y2=r($c);pT=d(y2,"span end logits"),y2.forEach(t),uT=d(td,")."),td.forEach(t),hT=u(te),Rr=s(te,"P",{});var xh=r(Rr);mT=d(xh,"This model inherits from "),Oi=s(xh,"A",{href:!0});var v2=r(Oi);fT=d(v2,"FlaxPreTrainedModel"),v2.forEach(t),_T=d(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),gT=u(te),Ur=s(te,"P",{});var zh=r(Ur);bT=d(zh,`This model is also a Flax Linen
`),Xr=s(zh,"A",{href:!0,rel:!0});var T2=r(Xr);kT=d(T2,"flax.nn.Module"),T2.forEach(t),yT=d(zh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zh.forEach(t),vT=u(te),xc=s(te,"P",{});var w2=r(xc);TT=d(w2,"Finally, this model supports inherent JAX features such as:"),w2.forEach(t),wT=u(te),bt=s(te,"UL",{});var ma=r(bt);zc=s(ma,"LI",{});var M2=r(zc);Qr=s(M2,"A",{href:!0,rel:!0});var $2=r(Qr);MT=d($2,"Just-In-Time (JIT) compilation"),$2.forEach(t),M2.forEach(t),$T=u(ma),Fc=s(ma,"LI",{});var x2=r(Fc);Vr=s(x2,"A",{href:!0,rel:!0});var z2=r(Vr);xT=d(z2,"Automatic Differentiation"),z2.forEach(t),x2.forEach(t),zT=u(ma),qc=s(ma,"LI",{});var F2=r(qc);Hr=s(F2,"A",{href:!0,rel:!0});var q2=r(Hr);FT=d(q2,"Vectorization"),q2.forEach(t),F2.forEach(t),qT=u(ma),Bc=s(ma,"LI",{});var B2=r(Bc);Jr=s(B2,"A",{href:!0,rel:!0});var j2=r(Jr);BT=d(j2,"Parallelization"),j2.forEach(t),B2.forEach(t),ma.forEach(t),jT=u(te),ot=s(te,"DIV",{class:!0});var fa=r(ot);v(Kr.$$.fragment,fa),CT=u(fa),wo=s(fa,"P",{});var od=r(wo);ET=d(od,"The "),jc=s(od,"CODE",{});var C2=r(jc);PT=d(C2,"FlaxMBartPreTrainedModel"),C2.forEach(t),ST=d(od," forward method, overrides the "),Cc=s(od,"CODE",{});var E2=r(Cc);OT=d(E2,"__call__"),E2.forEach(t),AT=d(od," special method."),od.forEach(t),IT=u(fa),v(Xn.$$.fragment,fa),NT=u(fa),v(Qn.$$.fragment,fa),fa.forEach(t),DT=u(te),Vn=s(te,"DIV",{class:!0});var Fh=r(Vn);v(Zr.$$.fragment,Fh),LT=u(Fh),v(Hn.$$.fragment,Fh),Fh.forEach(t),GT=u(te),Jn=s(te,"DIV",{class:!0});var qh=r(Jn);v(Yr.$$.fragment,qh),WT=u(qh),v(Kn.$$.fragment,qh),qh.forEach(t),te.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(qx)),f(c,"id","mbart-and-mbart50"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#mbart-and-mbart50"),f(m,"class","relative group"),f(me,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(me,"rel","nofollow"),f(L,"id","overview-of-mbart"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#overview-of-mbart"),f(Q,"class","relative group"),f(V,"href","https://arxiv.org/abs/2001.08210"),f(V,"rel","nofollow"),f(be,"href","https://huggingface.co/valhalla"),f(be,"rel","nofollow"),f(ke,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),f(ke,"rel","nofollow"),f(j,"id","training-of-mbart"),f(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(j,"href","#training-of-mbart"),f(z,"class","relative group"),f(_a,"href","/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),f($o,"id","overview-of-mbart50"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#overview-of-mbart50"),f(Dt,"class","relative group"),f(va,"href","https://arxiv.org/abs/2008.00401"),f(va,"rel","nofollow"),f(xo,"id","training-of-mbart50"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#training-of-mbart50"),f(Lt,"class","relative group"),f(ci,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBart50Tokenizer"),f(Fo,"id","transformers.MBartConfig"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.MBartConfig"),f(Gt,"class","relative group"),f(hi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(Fa,"href","https://huggingface.co/facebook/mbart-large-cc25"),f(Fa,"rel","nofollow"),f(mi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(fi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"id","transformers.MBartTokenizer"),f(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bo,"href","#transformers.MBartTokenizer"),f(Ut,"class","relative group"),f(_i,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),f(gi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(ja,"href","https://github.com/google/sentencepiece"),f(ja,"rel","nofollow"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.MBartTokenizerFast"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.MBartTokenizerFast"),f(Qt,"class","relative group"),f(Na,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(Na,"rel","nofollow"),f(bi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"id","transformers.MBart50Tokenizer"),f(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ao,"href","#transformers.MBart50Tokenizer"),f(Jt,"class","relative group"),f(Za,"href","https://github.com/google/sentencepiece"),f(Za,"rel","nofollow"),f(ki,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"id","transformers.MBart50TokenizerFast"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.MBart50TokenizerFast"),f(Kt,"class","relative group"),f(us,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(us,"rel","nofollow"),f(yi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.MBartModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.MBartModel"),f(Yt,"class","relative group"),f(vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f($s,"rel","nofollow"),f(Ti,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.MBartForConditionalGeneration"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.MBartForConditionalGeneration"),f(to,"class","relative group"),f(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(js,"rel","nofollow"),f(Mi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(en,"id","transformers.MBartForQuestionAnswering"),f(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(en,"href","#transformers.MBartForQuestionAnswering"),f(no,"class","relative group"),f($i,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(As,"rel","nofollow"),f(xi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(an,"id","transformers.MBartForSequenceClassification"),f(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(an,"href","#transformers.MBartForSequenceClassification"),f(ro,"class","relative group"),f(zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ws,"rel","nofollow"),f(Fi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForSequenceClassification"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.MBartForCausalLM"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.MBartForCausalLM"),f(lo,"class","relative group"),f(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.TFMBartModel"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.TFMBartModel"),f(po,"class","relative group"),f(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Zs,"rel","nofollow"),f(Bi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"id","transformers.TFMBartForConditionalGeneration"),f(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bn,"href","#transformers.TFMBartForConditionalGeneration"),f(ho,"class","relative group"),f(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ar,"rel","nofollow"),f(Ci,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wn,"id","transformers.FlaxMBartModel"),f(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wn,"href","#transformers.FlaxMBartModel"),f(fo,"class","relative group"),f(Ei,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(cr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(cr,"rel","nofollow"),f(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pr,"rel","nofollow"),f(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ur,"rel","nofollow"),f(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(hr,"rel","nofollow"),f(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(mr,"rel","nofollow"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bn,"id","transformers.FlaxMBartForConditionalGeneration"),f(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bn,"href","#transformers.FlaxMBartForConditionalGeneration"),f(go,"class","relative group"),f(Pi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Tr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Tr,"rel","nofollow"),f(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(wr,"rel","nofollow"),f(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Mr,"rel","nofollow"),f($r,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f($r,"rel","nofollow"),f(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(xr,"rel","nofollow"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(In,"id","transformers.FlaxMBartForSequenceClassification"),f(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(In,"href","#transformers.FlaxMBartForSequenceClassification"),f(ko,"class","relative group"),f(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Pr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Pr,"rel","nofollow"),f(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Sr,"rel","nofollow"),f(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Or,"rel","nofollow"),f(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ar,"rel","nofollow"),f(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ir,"rel","nofollow"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Un,"id","transformers.FlaxMBartForQuestionAnswering"),f(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Un,"href","#transformers.FlaxMBartForQuestionAnswering"),f(vo,"class","relative group"),f(Oi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Xr,"rel","nofollow"),f(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Qr,"rel","nofollow"),f(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Vr,"rel","nofollow"),f(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Hr,"rel","nofollow"),f(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Jr,"rel","nofollow"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),b(o,k,_),b(o,m,_),e(m,c),e(c,g),T(n,g,null),e(m,h),e(m,q),e(q,rt),b(o,ze,_),b(o,C,_),e(C,Ae),e(Ae,he),e(C,it),e(C,me),e(me,fe),e(C,dt),b(o,Ue,_),b(o,Q,_),e(Q,L),e(L,Ie),T(oe,Ie,null),e(Q,S),e(Q,O),e(O,lt),b(o,le,_),b(o,ce,_),e(ce,ct),e(ce,V),e(V,pt),e(ce,ut),b(o,G,_),b(o,Fe,_),e(Fe,_e),b(o,Xe,_),b(o,ne,_),e(ne,ge),e(ne,be),e(be,ht),e(ne,ae),e(ne,ke),e(ke,ye),b(o,Qe,_),b(o,z,_),e(z,j),e(j,ve),T(Ne,ve,null),e(z,Ct),e(z,H),e(H,Et),b(o,yt,_),b(o,X,_),e(X,se),e(X,re),e(re,Pt),e(X,St),e(X,ie),e(ie,Ot),e(X,At),e(X,De),e(De,It),e(X,Bh),e(X,nd),e(nd,jh),e(X,Ch),b(o,cp,_),b(o,Ve,_),e(Ve,Eh),e(Ve,_a),e(_a,ad),e(ad,Ph),e(_a,Sh),e(Ve,Oh),e(Ve,sd),e(sd,Ah),e(Ve,Ih),e(Ve,rd),e(rd,Nh),e(Ve,Dh),b(o,pp,_),b(o,ri,_),e(ri,id),e(id,Lh),b(o,up,_),T(ga,o,_),b(o,hp,_),b(o,ii,_),e(ii,ba),e(ba,dd),e(dd,Gh),e(ba,Wh),e(ba,Nt),e(Nt,Rh),e(Nt,ld),e(ld,Uh),e(Nt,Xh),e(Nt,cd),e(cd,Qh),e(Nt,Vh),b(o,mp,_),T(ka,o,_),b(o,fp,_),b(o,Dt,_),e(Dt,$o),e($o,pd),T(ya,pd,null),e(Dt,Hh),e(Dt,ud),e(ud,Jh),b(o,_p,_),b(o,vt,_),e(vt,Kh),e(vt,va),e(va,Zh),e(vt,Yh),e(vt,hd),e(hd,em),e(vt,tm),b(o,gp,_),b(o,di,_),e(di,om),b(o,bp,_),b(o,li,_),e(li,md),e(md,nm),b(o,kp,_),b(o,Lt,_),e(Lt,xo),e(xo,fd),T(Ta,fd,null),e(Lt,am),e(Lt,_d),e(_d,sm),b(o,yp,_),b(o,He,_),e(He,rm),e(He,gd),e(gd,im),e(He,dm),e(He,bd),e(bd,lm),e(He,cm),e(He,kd),e(kd,pm),e(He,um),b(o,vp,_),b(o,zo,_),e(zo,hm),e(zo,ci),e(ci,mm),e(zo,fm),b(o,Tp,_),b(o,pi,_),e(pi,yd),e(yd,_m),b(o,wp,_),T(wa,o,_),b(o,Mp,_),b(o,ui,_),e(ui,Ma),e(Ma,vd),e(vd,gm),e(Ma,bm),e(Ma,Te),e(Te,km),e(Te,Td),e(Td,ym),e(Te,vm),e(Te,wd),e(wd,Tm),e(Te,wm),e(Te,Md),e(Md,Mm),e(Te,$m),e(Te,$d),e($d,xm),e(Te,zm),e(Te,xd),e(xd,Fm),e(Te,qm),b(o,$p,_),T($a,o,_),b(o,xp,_),b(o,Gt,_),e(Gt,Fo),e(Fo,zd),T(xa,zd,null),e(Gt,Bm),e(Gt,Fd),e(Fd,jm),b(o,zp,_),b(o,Le,_),T(za,Le,null),e(Le,Cm),e(Le,Wt),e(Wt,Em),e(Wt,hi),e(hi,Pm),e(Wt,Sm),e(Wt,Fa),e(Fa,Om),e(Wt,Am),e(Le,Im),e(Le,Rt),e(Rt,Nm),e(Rt,mi),e(mi,Dm),e(Rt,Lm),e(Rt,fi),e(fi,Gm),e(Rt,Wm),e(Le,Rm),T(qo,Le,null),b(o,Fp,_),b(o,Ut,_),e(Ut,Bo),e(Bo,qd),T(qa,qd,null),e(Ut,Um),e(Ut,Bd),e(Bd,Xm),b(o,qp,_),b(o,de,_),T(Ba,de,null),e(de,Qm),e(de,jd),e(jd,Vm),e(de,Hm),e(de,mt),e(mt,Jm),e(mt,_i),e(_i,Km),e(mt,Zm),e(mt,gi),e(gi,Ym),e(mt,ef),e(mt,ja),e(ja,tf),e(mt,of),e(de,nf),e(de,Xt),e(Xt,af),e(Xt,Cd),e(Cd,sf),e(Xt,rf),e(Xt,Ed),e(Ed,df),e(Xt,lf),e(de,cf),T(jo,de,null),e(de,pf),e(de,Je),T(Ca,Je,null),e(Je,uf),e(Je,Ea),e(Ea,hf),e(Ea,Pd),e(Pd,mf),e(Ea,ff),e(Je,_f),e(Je,Pa),e(Pa,Sa),e(Sa,Sd),e(Sd,gf),e(Sa,bf),e(Sa,Od),e(Od,kf),e(Pa,yf),e(Pa,Oa),e(Oa,Ad),e(Ad,vf),e(Oa,Tf),e(Oa,Id),e(Id,wf),e(Je,Mf),e(Je,Nd),e(Nd,$f),b(o,Bp,_),b(o,Qt,_),e(Qt,Co),e(Co,Dd),T(Aa,Dd,null),e(Qt,xf),e(Qt,Ld),e(Ld,zf),b(o,jp,_),b(o,A,_),T(Ia,A,null),e(A,Ff),e(A,Vt),e(Vt,qf),e(Vt,Gd),e(Gd,Bf),e(Vt,jf),e(Vt,Na),e(Na,Cf),e(Vt,Ef),e(A,Pf),e(A,Da),e(Da,Sf),e(Da,bi),e(bi,Of),e(Da,Af),e(A,If),e(A,Ht),e(Ht,Nf),e(Ht,Wd),e(Wd,Df),e(Ht,Lf),e(Ht,Rd),e(Rd,Gf),e(Ht,Wf),e(A,Rf),T(Eo,A,null),e(A,Uf),e(A,qe),T(La,qe,null),e(qe,Xf),e(qe,Ud),e(Ud,Qf),e(qe,Vf),e(qe,Ga),e(Ga,Hf),e(Ga,Xd),e(Xd,Jf),e(Ga,Kf),e(qe,Zf),e(qe,Wa),e(Wa,Ra),e(Ra,Qd),e(Qd,Yf),e(Ra,e_),e(Ra,Vd),e(Vd,t_),e(Wa,o_),e(Wa,Ua),e(Ua,Hd),e(Hd,n_),e(Ua,a_),e(Ua,Jd),e(Jd,s_),e(qe,r_),e(qe,Kd),e(Kd,i_),e(A,d_),e(A,Po),T(Xa,Po,null),e(Po,l_),e(Po,Zd),e(Zd,c_),e(A,p_),e(A,So),T(Qa,So,null),e(So,u_),e(So,Yd),e(Yd,h_),e(A,m_),e(A,Oo),T(Va,Oo,null),e(Oo,f_),e(Oo,el),e(el,__),b(o,Cp,_),b(o,Jt,_),e(Jt,Ao),e(Ao,tl),T(Ha,tl,null),e(Jt,g_),e(Jt,ol),e(ol,b_),b(o,Ep,_),b(o,I,_),T(Ja,I,null),e(I,k_),e(I,Ka),e(Ka,y_),e(Ka,Za),e(Za,v_),e(Ka,T_),e(I,w_),e(I,Ya),e(Ya,M_),e(Ya,ki),e(ki,$_),e(Ya,x_),e(I,z_),T(Io,I,null),e(I,F_),e(I,Ke),T(es,Ke,null),e(Ke,q_),e(Ke,ts),e(ts,B_),e(ts,nl),e(nl,j_),e(ts,C_),e(Ke,E_),e(Ke,os),e(os,ns),e(ns,al),e(al,P_),e(ns,S_),e(ns,sl),e(sl,O_),e(os,A_),e(os,as),e(as,rl),e(rl,I_),e(as,N_),e(as,il),e(il,D_),e(Ke,L_),e(Ke,dl),e(dl,G_),e(I,W_),e(I,No),T(ss,No,null),e(No,R_),e(No,ll),e(ll,U_),e(I,X_),e(I,Do),T(rs,Do,null),e(Do,Q_),e(Do,is),e(is,V_),e(is,cl),e(cl,H_),e(is,J_),e(I,K_),e(I,Lo),T(ds,Lo,null),e(Lo,Z_),e(Lo,pl),e(pl,Y_),e(I,eg),e(I,Go),T(ls,Go,null),e(Go,tg),e(Go,ul),e(ul,og),b(o,Pp,_),b(o,Kt,_),e(Kt,Wo),e(Wo,hl),T(cs,hl,null),e(Kt,ng),e(Kt,ml),e(ml,ag),b(o,Sp,_),b(o,J,_),T(ps,J,null),e(J,sg),e(J,Zt),e(Zt,rg),e(Zt,fl),e(fl,ig),e(Zt,dg),e(Zt,us),e(us,lg),e(Zt,cg),e(J,pg),e(J,hs),e(hs,ug),e(hs,yi),e(yi,hg),e(hs,mg),e(J,fg),T(Ro,J,null),e(J,_g),e(J,Be),T(ms,Be,null),e(Be,gg),e(Be,_l),e(_l,bg),e(Be,kg),e(Be,fs),e(fs,yg),e(fs,gl),e(gl,vg),e(fs,Tg),e(Be,wg),e(Be,_s),e(_s,gs),e(gs,bl),e(bl,Mg),e(gs,$g),e(gs,kl),e(kl,xg),e(_s,zg),e(_s,bs),e(bs,yl),e(yl,Fg),e(bs,qg),e(bs,vl),e(vl,Bg),e(Be,jg),e(Be,Tl),e(Tl,Cg),e(J,Eg),e(J,Uo),T(ks,Uo,null),e(Uo,Pg),e(Uo,wl),e(wl,Sg),e(J,Og),e(J,Xo),T(ys,Xo,null),e(Xo,Ag),e(Xo,Ml),e(Ml,Ig),b(o,Op,_),b(o,Yt,_),e(Yt,Qo),e(Qo,$l),T(vs,$l,null),e(Yt,Ng),e(Yt,xl),e(xl,Dg),b(o,Ap,_),b(o,Ge,_),T(Ts,Ge,null),e(Ge,Lg),e(Ge,ws),e(ws,Gg),e(ws,vi),e(vi,Wg),e(ws,Rg),e(Ge,Ug),e(Ge,Ms),e(Ms,Xg),e(Ms,$s),e($s,Qg),e(Ms,Vg),e(Ge,Hg),e(Ge,Ze),T(xs,Ze,null),e(Ze,Jg),e(Ze,eo),e(eo,Kg),e(eo,Ti),e(Ti,Zg),e(eo,Yg),e(eo,zl),e(zl,eb),e(eo,tb),e(Ze,ob),T(Vo,Ze,null),e(Ze,nb),T(Ho,Ze,null),b(o,Ip,_),b(o,to,_),e(to,Jo),e(Jo,Fl),T(zs,Fl,null),e(to,ab),e(to,ql),e(ql,sb),b(o,Np,_),b(o,We,_),T(Fs,We,null),e(We,rb),e(We,qs),e(qs,ib),e(qs,wi),e(wi,db),e(qs,lb),e(We,cb),e(We,Bs),e(Bs,pb),e(Bs,js),e(js,ub),e(Bs,hb),e(We,mb),e(We,je),T(Cs,je,null),e(je,fb),e(je,oo),e(oo,_b),e(oo,Mi),e(Mi,gb),e(oo,bb),e(oo,Bl),e(Bl,kb),e(oo,yb),e(je,vb),T(Ko,je,null),e(je,Tb),T(Zo,je,null),e(je,wb),T(Yo,je,null),b(o,Dp,_),b(o,no,_),e(no,en),e(en,jl),T(Es,jl,null),e(no,Mb),e(no,Cl),e(Cl,$b),b(o,Lp,_),b(o,we,_),T(Ps,we,null),e(we,xb),e(we,ao),e(ao,zb),e(ao,El),e(El,Fb),e(ao,qb),e(ao,Pl),e(Pl,Bb),e(ao,jb),e(we,Cb),e(we,Ss),e(Ss,Eb),e(Ss,$i),e($i,Pb),e(Ss,Sb),e(we,Ob),e(we,Os),e(Os,Ab),e(Os,As),e(As,Ib),e(Os,Nb),e(we,Db),e(we,Ce),T(Is,Ce,null),e(Ce,Lb),e(Ce,so),e(so,Gb),e(so,xi),e(xi,Wb),e(so,Rb),e(so,Sl),e(Sl,Ub),e(so,Xb),e(Ce,Qb),T(tn,Ce,null),e(Ce,Vb),T(on,Ce,null),e(Ce,Hb),T(nn,Ce,null),b(o,Gp,_),b(o,ro,_),e(ro,an),e(an,Ol),T(Ns,Ol,null),e(ro,Jb),e(ro,Al),e(Al,Kb),b(o,Wp,_),b(o,Me,_),T(Ds,Me,null),e(Me,Zb),e(Me,Il),e(Il,Yb),e(Me,ek),e(Me,Ls),e(Ls,tk),e(Ls,zi),e(zi,ok),e(Ls,nk),e(Me,ak),e(Me,Gs),e(Gs,sk),e(Gs,Ws),e(Ws,rk),e(Gs,ik),e(Me,dk),e(Me,K),T(Rs,K,null),e(K,lk),e(K,io),e(io,ck),e(io,Fi),e(Fi,pk),e(io,uk),e(io,Nl),e(Nl,hk),e(io,mk),e(K,fk),T(sn,K,null),e(K,_k),T(rn,K,null),e(K,gk),T(dn,K,null),e(K,bk),T(ln,K,null),e(K,kk),T(cn,K,null),b(o,Rp,_),b(o,lo,_),e(lo,pn),e(pn,Dl),T(Us,Dl,null),e(lo,yk),e(lo,Ll),e(Ll,vk),b(o,Up,_),b(o,co,_),T(Xs,co,null),e(co,Tk),e(co,un),T(Qs,un,null),e(un,wk),T(hn,un,null),b(o,Xp,_),b(o,po,_),e(po,mn),e(mn,Gl),T(Vs,Gl,null),e(po,Mk),e(po,Wl),e(Wl,$k),b(o,Qp,_),b(o,$e,_),T(Hs,$e,null),e($e,xk),e($e,Js),e(Js,zk),e(Js,qi),e(qi,Fk),e(Js,qk),e($e,Bk),e($e,Ks),e(Ks,jk),e(Ks,Zs),e(Zs,Ck),e(Ks,Ek),e($e,Pk),T(fn,$e,null),e($e,Sk),e($e,Ye),T(Ys,Ye,null),e(Ye,Ok),e(Ye,uo),e(uo,Ak),e(uo,Bi),e(Bi,Ik),e(uo,Nk),e(uo,Rl),e(Rl,Dk),e(uo,Lk),e(Ye,Gk),T(_n,Ye,null),e(Ye,Wk),T(gn,Ye,null),b(o,Vp,_),b(o,ho,_),e(ho,bn),e(bn,Ul),T(er,Ul,null),e(ho,Rk),e(ho,Xl),e(Xl,Uk),b(o,Hp,_),b(o,xe,_),T(tr,xe,null),e(xe,Xk),e(xe,or),e(or,Qk),e(or,ji),e(ji,Vk),e(or,Hk),e(xe,Jk),e(xe,nr),e(nr,Kk),e(nr,ar),e(ar,Zk),e(nr,Yk),e(xe,ey),T(kn,xe,null),e(xe,ty),e(xe,Ee),T(sr,Ee,null),e(Ee,oy),e(Ee,mo),e(mo,ny),e(mo,Ci),e(Ci,ay),e(mo,sy),e(mo,Ql),e(Ql,ry),e(mo,iy),e(Ee,dy),T(yn,Ee,null),e(Ee,ly),T(vn,Ee,null),e(Ee,cy),T(Tn,Ee,null),b(o,Jp,_),b(o,fo,_),e(fo,wn),e(wn,Vl),T(rr,Vl,null),e(fo,py),e(fo,Hl),e(Hl,uy),b(o,Kp,_),b(o,W,_),T(ir,W,null),e(W,hy),e(W,dr),e(dr,my),e(dr,Ei),e(Ei,fy),e(dr,_y),e(W,gy),e(W,lr),e(lr,by),e(lr,cr),e(cr,ky),e(lr,yy),e(W,vy),e(W,Jl),e(Jl,Ty),e(W,wy),e(W,ft),e(ft,Kl),e(Kl,pr),e(pr,My),e(ft,$y),e(ft,Zl),e(Zl,ur),e(ur,xy),e(ft,zy),e(ft,Yl),e(Yl,hr),e(hr,Fy),e(ft,qy),e(ft,ec),e(ec,mr),e(mr,By),e(W,jy),e(W,et),T(fr,et,null),e(et,Cy),e(et,_o),e(_o,Ey),e(_o,tc),e(tc,Py),e(_o,Sy),e(_o,oc),e(oc,Oy),e(_o,Ay),e(et,Iy),T(Mn,et,null),e(et,Ny),T($n,et,null),e(W,Dy),e(W,xn),T(_r,xn,null),e(xn,Ly),T(zn,xn,null),e(W,Gy),e(W,Fn),T(gr,Fn,null),e(Fn,Wy),T(qn,Fn,null),b(o,Zp,_),b(o,go,_),e(go,Bn),e(Bn,nc),T(br,nc,null),e(go,Ry),e(go,ac),e(ac,Uy),b(o,Yp,_),b(o,R,_),T(kr,R,null),e(R,Xy),e(R,yr),e(yr,Qy),e(yr,Pi),e(Pi,Vy),e(yr,Hy),e(R,Jy),e(R,vr),e(vr,Ky),e(vr,Tr),e(Tr,Zy),e(vr,Yy),e(R,ev),e(R,sc),e(sc,tv),e(R,ov),e(R,_t),e(_t,rc),e(rc,wr),e(wr,nv),e(_t,av),e(_t,ic),e(ic,Mr),e(Mr,sv),e(_t,rv),e(_t,dc),e(dc,$r),e($r,iv),e(_t,dv),e(_t,lc),e(lc,xr),e(xr,lv),e(R,cv),e(R,Pe),T(zr,Pe,null),e(Pe,pv),e(Pe,bo),e(bo,uv),e(bo,cc),e(cc,hv),e(bo,mv),e(bo,pc),e(pc,fv),e(bo,_v),e(Pe,gv),T(jn,Pe,null),e(Pe,bv),T(Cn,Pe,null),e(Pe,kv),T(En,Pe,null),e(R,yv),e(R,Pn),T(Fr,Pn,null),e(Pn,vv),T(Sn,Pn,null),e(R,Tv),e(R,On),T(qr,On,null),e(On,wv),T(An,On,null),b(o,eu,_),b(o,ko,_),e(ko,In),e(In,uc),T(Br,uc,null),e(ko,Mv),e(ko,hc),e(hc,$v),b(o,tu,_),b(o,N,_),T(jr,N,null),e(N,xv),e(N,mc),e(mc,zv),e(N,Fv),e(N,Cr),e(Cr,qv),e(Cr,Si),e(Si,Bv),e(Cr,jv),e(N,Cv),e(N,Er),e(Er,Ev),e(Er,Pr),e(Pr,Pv),e(Er,Sv),e(N,Ov),e(N,fc),e(fc,Av),e(N,Iv),e(N,gt),e(gt,_c),e(_c,Sr),e(Sr,Nv),e(gt,Dv),e(gt,gc),e(gc,Or),e(Or,Lv),e(gt,Gv),e(gt,bc),e(bc,Ar),e(Ar,Wv),e(gt,Rv),e(gt,kc),e(kc,Ir),e(Ir,Uv),e(N,Xv),e(N,tt),T(Nr,tt,null),e(tt,Qv),e(tt,yo),e(yo,Vv),e(yo,yc),e(yc,Hv),e(yo,Jv),e(yo,vc),e(vc,Kv),e(yo,Zv),e(tt,Yv),T(Nn,tt,null),e(tt,eT),T(Dn,tt,null),e(N,tT),e(N,Ln),T(Dr,Ln,null),e(Ln,oT),T(Gn,Ln,null),e(N,nT),e(N,Wn),T(Lr,Wn,null),e(Wn,aT),T(Rn,Wn,null),b(o,ou,_),b(o,vo,_),e(vo,Un),e(Un,Tc),T(Gr,Tc,null),e(vo,sT),e(vo,wc),e(wc,rT),b(o,nu,_),b(o,D,_),T(Wr,D,null),e(D,iT),e(D,To),e(To,dT),e(To,Mc),e(Mc,lT),e(To,cT),e(To,$c),e($c,pT),e(To,uT),e(D,hT),e(D,Rr),e(Rr,mT),e(Rr,Oi),e(Oi,fT),e(Rr,_T),e(D,gT),e(D,Ur),e(Ur,bT),e(Ur,Xr),e(Xr,kT),e(Ur,yT),e(D,vT),e(D,xc),e(xc,TT),e(D,wT),e(D,bt),e(bt,zc),e(zc,Qr),e(Qr,MT),e(bt,$T),e(bt,Fc),e(Fc,Vr),e(Vr,xT),e(bt,zT),e(bt,qc),e(qc,Hr),e(Hr,FT),e(bt,qT),e(bt,Bc),e(Bc,Jr),e(Jr,BT),e(D,jT),e(D,ot),T(Kr,ot,null),e(ot,CT),e(ot,wo),e(wo,ET),e(wo,jc),e(jc,PT),e(wo,ST),e(wo,Cc),e(Cc,OT),e(wo,AT),e(ot,IT),T(Xn,ot,null),e(ot,NT),T(Qn,ot,null),e(D,DT),e(D,Vn),T(Zr,Vn,null),e(Vn,LT),T(Hn,Vn,null),e(D,GT),e(D,Jn),T(Yr,Jn,null),e(Jn,WT),T(Kn,Jn,null),au=!0},p(o,[_]){const ei={};_&2&&(ei.$$scope={dirty:_,ctx:o}),qo.$set(ei);const Ec={};_&2&&(Ec.$$scope={dirty:_,ctx:o}),jo.$set(Ec);const Pc={};_&2&&(Pc.$$scope={dirty:_,ctx:o}),Eo.$set(Pc);const Sc={};_&2&&(Sc.$$scope={dirty:_,ctx:o}),Io.$set(Sc);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:o}),Ro.$set(Zn);const Oc={};_&2&&(Oc.$$scope={dirty:_,ctx:o}),Vo.$set(Oc);const Ac={};_&2&&(Ac.$$scope={dirty:_,ctx:o}),Ho.$set(Ac);const ti={};_&2&&(ti.$$scope={dirty:_,ctx:o}),Ko.$set(ti);const Ic={};_&2&&(Ic.$$scope={dirty:_,ctx:o}),Zo.$set(Ic);const Nc={};_&2&&(Nc.$$scope={dirty:_,ctx:o}),Yo.$set(Nc);const Dc={};_&2&&(Dc.$$scope={dirty:_,ctx:o}),tn.$set(Dc);const oi={};_&2&&(oi.$$scope={dirty:_,ctx:o}),on.$set(oi);const Lc={};_&2&&(Lc.$$scope={dirty:_,ctx:o}),nn.$set(Lc);const Gc={};_&2&&(Gc.$$scope={dirty:_,ctx:o}),sn.$set(Gc);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:o}),rn.$set(Yn);const Wc={};_&2&&(Wc.$$scope={dirty:_,ctx:o}),dn.$set(Wc);const Rc={};_&2&&(Rc.$$scope={dirty:_,ctx:o}),ln.$set(Rc);const ni={};_&2&&(ni.$$scope={dirty:_,ctx:o}),cn.$set(ni);const Uc={};_&2&&(Uc.$$scope={dirty:_,ctx:o}),hn.$set(Uc);const Xc={};_&2&&(Xc.$$scope={dirty:_,ctx:o}),fn.$set(Xc);const Qc={};_&2&&(Qc.$$scope={dirty:_,ctx:o}),_n.$set(Qc);const Re={};_&2&&(Re.$$scope={dirty:_,ctx:o}),gn.$set(Re);const Vc={};_&2&&(Vc.$$scope={dirty:_,ctx:o}),kn.$set(Vc);const Hc={};_&2&&(Hc.$$scope={dirty:_,ctx:o}),yn.$set(Hc);const Jc={};_&2&&(Jc.$$scope={dirty:_,ctx:o}),vn.$set(Jc);const Kc={};_&2&&(Kc.$$scope={dirty:_,ctx:o}),Tn.$set(Kc);const kt={};_&2&&(kt.$$scope={dirty:_,ctx:o}),Mn.$set(kt);const Ai={};_&2&&(Ai.$$scope={dirty:_,ctx:o}),$n.$set(Ai);const Zc={};_&2&&(Zc.$$scope={dirty:_,ctx:o}),zn.$set(Zc);const Yc={};_&2&&(Yc.$$scope={dirty:_,ctx:o}),qn.$set(Yc);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:o}),jn.$set(ep);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:o}),Cn.$set(tp);const op={};_&2&&(op.$$scope={dirty:_,ctx:o}),En.$set(op);const np={};_&2&&(np.$$scope={dirty:_,ctx:o}),Sn.$set(np);const ai={};_&2&&(ai.$$scope={dirty:_,ctx:o}),An.$set(ai);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:o}),Nn.$set(ap);const Mo={};_&2&&(Mo.$$scope={dirty:_,ctx:o}),Dn.$set(Mo);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:o}),Gn.$set(sp);const rp={};_&2&&(rp.$$scope={dirty:_,ctx:o}),Rn.$set(rp);const si={};_&2&&(si.$$scope={dirty:_,ctx:o}),Xn.$set(si);const ip={};_&2&&(ip.$$scope={dirty:_,ctx:o}),Qn.$set(ip);const dp={};_&2&&(dp.$$scope={dirty:_,ctx:o}),Hn.$set(dp);const lp={};_&2&&(lp.$$scope={dirty:_,ctx:o}),Kn.$set(lp)},i(o){au||(w(n.$$.fragment,o),w(oe.$$.fragment,o),w(Ne.$$.fragment,o),w(ga.$$.fragment,o),w(ka.$$.fragment,o),w(ya.$$.fragment,o),w(Ta.$$.fragment,o),w(wa.$$.fragment,o),w($a.$$.fragment,o),w(xa.$$.fragment,o),w(za.$$.fragment,o),w(qo.$$.fragment,o),w(qa.$$.fragment,o),w(Ba.$$.fragment,o),w(jo.$$.fragment,o),w(Ca.$$.fragment,o),w(Aa.$$.fragment,o),w(Ia.$$.fragment,o),w(Eo.$$.fragment,o),w(La.$$.fragment,o),w(Xa.$$.fragment,o),w(Qa.$$.fragment,o),w(Va.$$.fragment,o),w(Ha.$$.fragment,o),w(Ja.$$.fragment,o),w(Io.$$.fragment,o),w(es.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(ds.$$.fragment,o),w(ls.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(Ro.$$.fragment,o),w(ms.$$.fragment,o),w(ks.$$.fragment,o),w(ys.$$.fragment,o),w(vs.$$.fragment,o),w(Ts.$$.fragment,o),w(xs.$$.fragment,o),w(Vo.$$.fragment,o),w(Ho.$$.fragment,o),w(zs.$$.fragment,o),w(Fs.$$.fragment,o),w(Cs.$$.fragment,o),w(Ko.$$.fragment,o),w(Zo.$$.fragment,o),w(Yo.$$.fragment,o),w(Es.$$.fragment,o),w(Ps.$$.fragment,o),w(Is.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(Ns.$$.fragment,o),w(Ds.$$.fragment,o),w(Rs.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(Us.$$.fragment,o),w(Xs.$$.fragment,o),w(Qs.$$.fragment,o),w(hn.$$.fragment,o),w(Vs.$$.fragment,o),w(Hs.$$.fragment,o),w(fn.$$.fragment,o),w(Ys.$$.fragment,o),w(_n.$$.fragment,o),w(gn.$$.fragment,o),w(er.$$.fragment,o),w(tr.$$.fragment,o),w(kn.$$.fragment,o),w(sr.$$.fragment,o),w(yn.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(rr.$$.fragment,o),w(ir.$$.fragment,o),w(fr.$$.fragment,o),w(Mn.$$.fragment,o),w($n.$$.fragment,o),w(_r.$$.fragment,o),w(zn.$$.fragment,o),w(gr.$$.fragment,o),w(qn.$$.fragment,o),w(br.$$.fragment,o),w(kr.$$.fragment,o),w(zr.$$.fragment,o),w(jn.$$.fragment,o),w(Cn.$$.fragment,o),w(En.$$.fragment,o),w(Fr.$$.fragment,o),w(Sn.$$.fragment,o),w(qr.$$.fragment,o),w(An.$$.fragment,o),w(Br.$$.fragment,o),w(jr.$$.fragment,o),w(Nr.$$.fragment,o),w(Nn.$$.fragment,o),w(Dn.$$.fragment,o),w(Dr.$$.fragment,o),w(Gn.$$.fragment,o),w(Lr.$$.fragment,o),w(Rn.$$.fragment,o),w(Gr.$$.fragment,o),w(Wr.$$.fragment,o),w(Kr.$$.fragment,o),w(Xn.$$.fragment,o),w(Qn.$$.fragment,o),w(Zr.$$.fragment,o),w(Hn.$$.fragment,o),w(Yr.$$.fragment,o),w(Kn.$$.fragment,o),au=!0)},o(o){M(n.$$.fragment,o),M(oe.$$.fragment,o),M(Ne.$$.fragment,o),M(ga.$$.fragment,o),M(ka.$$.fragment,o),M(ya.$$.fragment,o),M(Ta.$$.fragment,o),M(wa.$$.fragment,o),M($a.$$.fragment,o),M(xa.$$.fragment,o),M(za.$$.fragment,o),M(qo.$$.fragment,o),M(qa.$$.fragment,o),M(Ba.$$.fragment,o),M(jo.$$.fragment,o),M(Ca.$$.fragment,o),M(Aa.$$.fragment,o),M(Ia.$$.fragment,o),M(Eo.$$.fragment,o),M(La.$$.fragment,o),M(Xa.$$.fragment,o),M(Qa.$$.fragment,o),M(Va.$$.fragment,o),M(Ha.$$.fragment,o),M(Ja.$$.fragment,o),M(Io.$$.fragment,o),M(es.$$.fragment,o),M(ss.$$.fragment,o),M(rs.$$.fragment,o),M(ds.$$.fragment,o),M(ls.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(Ro.$$.fragment,o),M(ms.$$.fragment,o),M(ks.$$.fragment,o),M(ys.$$.fragment,o),M(vs.$$.fragment,o),M(Ts.$$.fragment,o),M(xs.$$.fragment,o),M(Vo.$$.fragment,o),M(Ho.$$.fragment,o),M(zs.$$.fragment,o),M(Fs.$$.fragment,o),M(Cs.$$.fragment,o),M(Ko.$$.fragment,o),M(Zo.$$.fragment,o),M(Yo.$$.fragment,o),M(Es.$$.fragment,o),M(Ps.$$.fragment,o),M(Is.$$.fragment,o),M(tn.$$.fragment,o),M(on.$$.fragment,o),M(nn.$$.fragment,o),M(Ns.$$.fragment,o),M(Ds.$$.fragment,o),M(Rs.$$.fragment,o),M(sn.$$.fragment,o),M(rn.$$.fragment,o),M(dn.$$.fragment,o),M(ln.$$.fragment,o),M(cn.$$.fragment,o),M(Us.$$.fragment,o),M(Xs.$$.fragment,o),M(Qs.$$.fragment,o),M(hn.$$.fragment,o),M(Vs.$$.fragment,o),M(Hs.$$.fragment,o),M(fn.$$.fragment,o),M(Ys.$$.fragment,o),M(_n.$$.fragment,o),M(gn.$$.fragment,o),M(er.$$.fragment,o),M(tr.$$.fragment,o),M(kn.$$.fragment,o),M(sr.$$.fragment,o),M(yn.$$.fragment,o),M(vn.$$.fragment,o),M(Tn.$$.fragment,o),M(rr.$$.fragment,o),M(ir.$$.fragment,o),M(fr.$$.fragment,o),M(Mn.$$.fragment,o),M($n.$$.fragment,o),M(_r.$$.fragment,o),M(zn.$$.fragment,o),M(gr.$$.fragment,o),M(qn.$$.fragment,o),M(br.$$.fragment,o),M(kr.$$.fragment,o),M(zr.$$.fragment,o),M(jn.$$.fragment,o),M(Cn.$$.fragment,o),M(En.$$.fragment,o),M(Fr.$$.fragment,o),M(Sn.$$.fragment,o),M(qr.$$.fragment,o),M(An.$$.fragment,o),M(Br.$$.fragment,o),M(jr.$$.fragment,o),M(Nr.$$.fragment,o),M(Nn.$$.fragment,o),M(Dn.$$.fragment,o),M(Dr.$$.fragment,o),M(Gn.$$.fragment,o),M(Lr.$$.fragment,o),M(Rn.$$.fragment,o),M(Gr.$$.fragment,o),M(Wr.$$.fragment,o),M(Kr.$$.fragment,o),M(Xn.$$.fragment,o),M(Qn.$$.fragment,o),M(Zr.$$.fragment,o),M(Hn.$$.fragment,o),M(Yr.$$.fragment,o),M(Kn.$$.fragment,o),au=!1},d(o){t(l),o&&t(k),o&&t(m),$(n),o&&t(ze),o&&t(C),o&&t(Ue),o&&t(Q),$(oe),o&&t(le),o&&t(ce),o&&t(G),o&&t(Fe),o&&t(Xe),o&&t(ne),o&&t(Qe),o&&t(z),$(Ne),o&&t(yt),o&&t(X),o&&t(cp),o&&t(Ve),o&&t(pp),o&&t(ri),o&&t(up),$(ga,o),o&&t(hp),o&&t(ii),o&&t(mp),$(ka,o),o&&t(fp),o&&t(Dt),$(ya),o&&t(_p),o&&t(vt),o&&t(gp),o&&t(di),o&&t(bp),o&&t(li),o&&t(kp),o&&t(Lt),$(Ta),o&&t(yp),o&&t(He),o&&t(vp),o&&t(zo),o&&t(Tp),o&&t(pi),o&&t(wp),$(wa,o),o&&t(Mp),o&&t(ui),o&&t($p),$($a,o),o&&t(xp),o&&t(Gt),$(xa),o&&t(zp),o&&t(Le),$(za),$(qo),o&&t(Fp),o&&t(Ut),$(qa),o&&t(qp),o&&t(de),$(Ba),$(jo),$(Ca),o&&t(Bp),o&&t(Qt),$(Aa),o&&t(jp),o&&t(A),$(Ia),$(Eo),$(La),$(Xa),$(Qa),$(Va),o&&t(Cp),o&&t(Jt),$(Ha),o&&t(Ep),o&&t(I),$(Ja),$(Io),$(es),$(ss),$(rs),$(ds),$(ls),o&&t(Pp),o&&t(Kt),$(cs),o&&t(Sp),o&&t(J),$(ps),$(Ro),$(ms),$(ks),$(ys),o&&t(Op),o&&t(Yt),$(vs),o&&t(Ap),o&&t(Ge),$(Ts),$(xs),$(Vo),$(Ho),o&&t(Ip),o&&t(to),$(zs),o&&t(Np),o&&t(We),$(Fs),$(Cs),$(Ko),$(Zo),$(Yo),o&&t(Dp),o&&t(no),$(Es),o&&t(Lp),o&&t(we),$(Ps),$(Is),$(tn),$(on),$(nn),o&&t(Gp),o&&t(ro),$(Ns),o&&t(Wp),o&&t(Me),$(Ds),$(Rs),$(sn),$(rn),$(dn),$(ln),$(cn),o&&t(Rp),o&&t(lo),$(Us),o&&t(Up),o&&t(co),$(Xs),$(Qs),$(hn),o&&t(Xp),o&&t(po),$(Vs),o&&t(Qp),o&&t($e),$(Hs),$(fn),$(Ys),$(_n),$(gn),o&&t(Vp),o&&t(ho),$(er),o&&t(Hp),o&&t(xe),$(tr),$(kn),$(sr),$(yn),$(vn),$(Tn),o&&t(Jp),o&&t(fo),$(rr),o&&t(Kp),o&&t(W),$(ir),$(fr),$(Mn),$($n),$(_r),$(zn),$(gr),$(qn),o&&t(Zp),o&&t(go),$(br),o&&t(Yp),o&&t(R),$(kr),$(zr),$(jn),$(Cn),$(En),$(Fr),$(Sn),$(qr),$(An),o&&t(eu),o&&t(ko),$(Br),o&&t(tu),o&&t(N),$(jr),$(Nr),$(Nn),$(Dn),$(Dr),$(Gn),$(Lr),$(Rn),o&&t(ou),o&&t(vo),$(Gr),o&&t(nu),o&&t(D),$(Wr),$(Kr),$(Xn),$(Qn),$(Zr),$(Hn),$(Yr),$(Kn)}}}const qx={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function Bx(x){return I2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ax extends P2{constructor(l){super();S2(this,l,Bx,Fx,O2,{})}}export{Ax as default,qx as metadata};
