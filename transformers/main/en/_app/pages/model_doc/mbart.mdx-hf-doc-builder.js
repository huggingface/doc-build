import{S as P2,i as S2,s as O2,e as a,k as c,w as y,t as i,M as A2,c as s,d as t,m as p,a as r,x as v,h as d,b as f,G as e,g as b,y as T,q as w,o as M,B as $,v as I2,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as ft}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as H}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function N2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function D2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=a("p"),k=i("Examples:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function L2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=a("p"),k=i("Examples:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function G2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors="pt")
# model(**model_inputs) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function W2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors="pt")
# model(**model_inputs) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function R2(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function U2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function X2(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function Q2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),{c(){l=a("p"),k=i("Translation example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Translation example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function V2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Mask filling example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function H2(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function K2(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
<span class="hljs-string">&#x27;? Jim Henson was a&#x27;</span>`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function J2(x){let l,k;return l=new C({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.55</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,h){T(l,m,h),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Z2(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function Y2(x){let l,k,m,h,g;return h=new C({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example of single-label classification:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function ex(x){let l,k;return l=new C({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,h){T(l,m,h),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function tx(x){let l,k,m,h,g;return h=new C({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example of multi-label classification:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function ox(x){let l,k;return l=new C({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,h){T(l,m,h),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function nx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function ax(x){let l,k,m,h,g,n,u,q,_t,tt,U,Ge,We,B,ye,ve,gt,ot,X,ue,Re,K,bt,Ue,Te,nt,he,we,Me,kt,Xe,O,I,yt,me,ie,vt,J,Tt,wt,A,Mt,fe,de,_e,le,$e,$t,Z,xt,ge,R,Qe,N,zt,Y,Ve,Ft;return{c(){l=a("p"),k=i("TensorFlow models and layers in "),m=a("code"),h=i("transformers"),g=i(" accept two formats as input:"),n=c(),u=a("ul"),q=a("li"),_t=i("having all inputs as keyword arguments (like PyTorch models), or"),tt=c(),U=a("li"),Ge=i("having all inputs as a list, tuple or dict in the first positional argument."),We=c(),B=a("p"),ye=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ve=a("code"),gt=i("model.fit()"),ot=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),X=a("code"),ue=i("model.fit()"),Re=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),bt=i("fit()"),Ue=i(" and "),Te=a("code"),nt=i("predict()"),he=i(`, such as when creating your own layers or models with
the Keras `),we=a("code"),Me=i("Functional"),kt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Xe=c(),O=a("ul"),I=a("li"),yt=i("a single Tensor with "),me=a("code"),ie=i("input_ids"),vt=i(" only and nothing else: "),J=a("code"),Tt=i("model(input_ids)"),wt=c(),A=a("li"),Mt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),fe=a("code"),de=i("model([input_ids, attention_mask])"),_e=i(" or "),le=a("code"),$e=i("model([input_ids, attention_mask, token_type_ids])"),$t=c(),Z=a("li"),xt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ge=a("code"),R=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe=c(),N=a("p"),zt=i(`Note that when creating models and layers with
`),Y=a("a"),Ve=i("subclassing"),Ft=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TensorFlow models and layers in "),m=s(j,"CODE",{});var Zt=r(m);h=d(Zt,"transformers"),Zt.forEach(t),g=d(j," accept two formats as input:"),j.forEach(t),n=p(z),u=s(z,"UL",{});var He=r(u);q=s(He,"LI",{});var qt=r(q);_t=d(qt,"having all inputs as keyword arguments (like PyTorch models), or"),qt.forEach(t),tt=p(He),U=s(He,"LI",{});var Yt=r(U);Ge=d(Yt,"having all inputs as a list, tuple or dict in the first positional argument."),Yt.forEach(t),He.forEach(t),We=p(z),B=s(z,"P",{});var S=r(B);ye=d(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ve=s(S,"CODE",{});var Dt=r(ve);gt=d(Dt,"model.fit()"),Dt.forEach(t),ot=d(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),X=s(S,"CODE",{});var te=r(X);ue=d(te,"model.fit()"),te.forEach(t),Re=d(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(S,"CODE",{});var eo=r(K);bt=d(eo,"fit()"),eo.forEach(t),Ue=d(S," and "),Te=s(S,"CODE",{});var Ke=r(Te);nt=d(Ke,"predict()"),Ke.forEach(t),he=d(S,`, such as when creating your own layers or models with
the Keras `),we=s(S,"CODE",{});var Bt=r(we);Me=d(Bt,"Functional"),Bt.forEach(t),kt=d(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),Xe=p(z),O=s(z,"UL",{});var ce=r(O);I=s(ce,"LI",{});var xe=r(I);yt=d(xe,"a single Tensor with "),me=s(xe,"CODE",{});var to=r(me);ie=d(to,"input_ids"),to.forEach(t),vt=d(xe," only and nothing else: "),J=s(xe,"CODE",{});var jt=r(J);Tt=d(jt,"model(input_ids)"),jt.forEach(t),xe.forEach(t),wt=p(ce),A=s(ce,"LI",{});var ze=r(A);Mt=d(ze,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),fe=s(ze,"CODE",{});var oo=r(fe);de=d(oo,"model([input_ids, attention_mask])"),oo.forEach(t),_e=d(ze," or "),le=s(ze,"CODE",{});var Ct=r(le);$e=d(Ct,"model([input_ids, attention_mask, token_type_ids])"),Ct.forEach(t),ze.forEach(t),$t=p(ce),Z=s(ce,"LI",{});var Et=r(Z);xt=d(Et,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ge=s(Et,"CODE",{});var no=r(ge);R=d(no,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),no.forEach(t),Et.forEach(t),ce.forEach(t),Qe=p(z),N=s(z,"P",{});var Ee=r(N);zt=d(Ee,`Note that when creating models and layers with
`),Y=s(Ee,"A",{href:!0,rel:!0});var at=r(Y);Ve=d(at,"subclassing"),at.forEach(t),Ft=d(Ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Ee.forEach(t),this.h()},h(){f(Y,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(Y,"rel","nofollow")},m(z,j){b(z,l,j),e(l,k),e(l,m),e(m,h),e(l,g),b(z,n,j),b(z,u,j),e(u,q),e(q,_t),e(u,tt),e(u,U),e(U,Ge),b(z,We,j),b(z,B,j),e(B,ye),e(B,ve),e(ve,gt),e(B,ot),e(B,X),e(X,ue),e(B,Re),e(B,K),e(K,bt),e(B,Ue),e(B,Te),e(Te,nt),e(B,he),e(B,we),e(we,Me),e(B,kt),b(z,Xe,j),b(z,O,j),e(O,I),e(I,yt),e(I,me),e(me,ie),e(I,vt),e(I,J),e(J,Tt),e(O,wt),e(O,A),e(A,Mt),e(A,fe),e(fe,de),e(A,_e),e(A,le),e(le,$e),e(O,$t),e(O,Z),e(Z,xt),e(Z,ge),e(ge,R),b(z,Qe,j),b(z,N,j),e(N,zt),e(N,Y),e(Y,Ve),e(N,Ft)},d(z){z&&t(l),z&&t(n),z&&t(u),z&&t(We),z&&t(B),z&&t(Xe),z&&t(O),z&&t(Qe),z&&t(N)}}}function sx(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function rx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function ix(x){let l,k,m,h,g,n,u,q,_t,tt,U,Ge,We,B,ye,ve,gt,ot,X,ue,Re,K,bt,Ue,Te,nt,he,we,Me,kt,Xe,O,I,yt,me,ie,vt,J,Tt,wt,A,Mt,fe,de,_e,le,$e,$t,Z,xt,ge,R,Qe,N,zt,Y,Ve,Ft;return{c(){l=a("p"),k=i("TensorFlow models and layers in "),m=a("code"),h=i("transformers"),g=i(" accept two formats as input:"),n=c(),u=a("ul"),q=a("li"),_t=i("having all inputs as keyword arguments (like PyTorch models), or"),tt=c(),U=a("li"),Ge=i("having all inputs as a list, tuple or dict in the first positional argument."),We=c(),B=a("p"),ye=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ve=a("code"),gt=i("model.fit()"),ot=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),X=a("code"),ue=i("model.fit()"),Re=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),bt=i("fit()"),Ue=i(" and "),Te=a("code"),nt=i("predict()"),he=i(`, such as when creating your own layers or models with
the Keras `),we=a("code"),Me=i("Functional"),kt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Xe=c(),O=a("ul"),I=a("li"),yt=i("a single Tensor with "),me=a("code"),ie=i("input_ids"),vt=i(" only and nothing else: "),J=a("code"),Tt=i("model(input_ids)"),wt=c(),A=a("li"),Mt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),fe=a("code"),de=i("model([input_ids, attention_mask])"),_e=i(" or "),le=a("code"),$e=i("model([input_ids, attention_mask, token_type_ids])"),$t=c(),Z=a("li"),xt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ge=a("code"),R=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe=c(),N=a("p"),zt=i(`Note that when creating models and layers with
`),Y=a("a"),Ve=i("subclassing"),Ft=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TensorFlow models and layers in "),m=s(j,"CODE",{});var Zt=r(m);h=d(Zt,"transformers"),Zt.forEach(t),g=d(j," accept two formats as input:"),j.forEach(t),n=p(z),u=s(z,"UL",{});var He=r(u);q=s(He,"LI",{});var qt=r(q);_t=d(qt,"having all inputs as keyword arguments (like PyTorch models), or"),qt.forEach(t),tt=p(He),U=s(He,"LI",{});var Yt=r(U);Ge=d(Yt,"having all inputs as a list, tuple or dict in the first positional argument."),Yt.forEach(t),He.forEach(t),We=p(z),B=s(z,"P",{});var S=r(B);ye=d(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ve=s(S,"CODE",{});var Dt=r(ve);gt=d(Dt,"model.fit()"),Dt.forEach(t),ot=d(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),X=s(S,"CODE",{});var te=r(X);ue=d(te,"model.fit()"),te.forEach(t),Re=d(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(S,"CODE",{});var eo=r(K);bt=d(eo,"fit()"),eo.forEach(t),Ue=d(S," and "),Te=s(S,"CODE",{});var Ke=r(Te);nt=d(Ke,"predict()"),Ke.forEach(t),he=d(S,`, such as when creating your own layers or models with
the Keras `),we=s(S,"CODE",{});var Bt=r(we);Me=d(Bt,"Functional"),Bt.forEach(t),kt=d(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),Xe=p(z),O=s(z,"UL",{});var ce=r(O);I=s(ce,"LI",{});var xe=r(I);yt=d(xe,"a single Tensor with "),me=s(xe,"CODE",{});var to=r(me);ie=d(to,"input_ids"),to.forEach(t),vt=d(xe," only and nothing else: "),J=s(xe,"CODE",{});var jt=r(J);Tt=d(jt,"model(input_ids)"),jt.forEach(t),xe.forEach(t),wt=p(ce),A=s(ce,"LI",{});var ze=r(A);Mt=d(ze,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),fe=s(ze,"CODE",{});var oo=r(fe);de=d(oo,"model([input_ids, attention_mask])"),oo.forEach(t),_e=d(ze," or "),le=s(ze,"CODE",{});var Ct=r(le);$e=d(Ct,"model([input_ids, attention_mask, token_type_ids])"),Ct.forEach(t),ze.forEach(t),$t=p(ce),Z=s(ce,"LI",{});var Et=r(Z);xt=d(Et,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ge=s(Et,"CODE",{});var no=r(ge);R=d(no,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),no.forEach(t),Et.forEach(t),ce.forEach(t),Qe=p(z),N=s(z,"P",{});var Ee=r(N);zt=d(Ee,`Note that when creating models and layers with
`),Y=s(Ee,"A",{href:!0,rel:!0});var at=r(Y);Ve=d(at,"subclassing"),at.forEach(t),Ft=d(Ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Ee.forEach(t),this.h()},h(){f(Y,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(Y,"rel","nofollow")},m(z,j){b(z,l,j),e(l,k),e(l,m),e(m,h),e(l,g),b(z,n,j),b(z,u,j),e(u,q),e(q,_t),e(u,tt),e(u,U),e(U,Ge),b(z,We,j),b(z,B,j),e(B,ye),e(B,ve),e(ve,gt),e(B,ot),e(B,X),e(X,ue),e(B,Re),e(B,K),e(K,bt),e(B,Ue),e(B,Te),e(Te,nt),e(B,he),e(B,we),e(we,Me),e(B,kt),b(z,Xe,j),b(z,O,j),e(O,I),e(I,yt),e(I,me),e(me,ie),e(I,vt),e(I,J),e(J,Tt),e(O,wt),e(O,A),e(A,Mt),e(A,fe),e(fe,de),e(A,_e),e(A,le),e(le,$e),e(O,$t),e(O,Z),e(Z,xt),e(Z,ge),e(ge,R),b(z,Qe,j),b(z,N,j),e(N,zt),e(N,Y),e(Y,Ve),e(N,Ft)},d(z){z&&t(l),z&&t(n),z&&t(u),z&&t(We),z&&t(B),z&&t(Xe),z&&t(O),z&&t(Qe),z&&t(N)}}}function dx(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function lx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Summarization example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function cx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Mask filling example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function px(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function ux(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function hx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function mx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function fx(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function _x(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Summarization example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function gx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Mask filling example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function bx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function kx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function yx(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function vx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function Tx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function wx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function Mx(x){let l,k,m,h,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);h=d(q,"Module"),q.forEach(t),g=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,h),e(l,g)},d(n){n&&t(l)}}}function $x(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function xx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function zx(x){let l,k,m,h,g;return h=new C({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=c(),y(h.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=p(n),v(h.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(h,n,u),g=!0},p:P,i(n){g||(w(h.$$.fragment,n),g=!0)},o(n){M(h.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(h,n)}}}function Fx(x){let l,k,m,h,g,n,u,q,_t,tt,U,Ge,We,B,ye,ve,gt,ot,X,ue,Re,K,bt,Ue,Te,nt,he,we,Me,kt,Xe,O,I,yt,me,ie,vt,J,Tt,wt,A,Mt,fe,de,_e,le,$e,$t,Z,xt,ge,R,Qe,N,zt,Y,Ve,Ft,z,j,Zt,He,qt,Yt,S,Dt,te,eo,Ke,Bt,ce,xe,to,jt,ze,oo,Ct,Et,no,Ee,at,yd,Lh,wp,Sa,Mp,Mi,Oa,vd,Gh,Wh,ao,Rh,Td,Uh,Xh,wd,Qh,Vh,$p,Aa,xp,so,Ro,Md,Ia,Hh,$d,Kh,zp,Lt,Jh,Na,Zh,Yh,xd,em,tm,Fp,$i,om,qp,xi,zd,nm,Bp,ro,Uo,Fd,Da,am,qd,sm,jp,st,rm,Bd,im,dm,jd,lm,cm,Cd,pm,um,Cp,Xo,hm,zi,mm,fm,Ep,Fi,Ed,_m,Pp,La,Sp,qi,Ga,Pd,gm,bm,Fe,km,Sd,ym,vm,Od,Tm,wm,Ad,Mm,$m,Id,xm,zm,Nd,Fm,qm,Op,Wa,Ap,io,Qo,Dd,Ra,Bm,Ld,jm,Ip,Je,Ua,Cm,lo,Em,Bi,Pm,Sm,Xa,Om,Am,Im,co,Nm,ji,Dm,Lm,Ci,Gm,Wm,Rm,Vo,Np,po,Ho,Gd,Qa,Um,Wd,Xm,Dp,pe,Va,Qm,Rd,Vm,Hm,Pt,Km,Ei,Jm,Zm,Pi,Ym,ef,Ha,tf,of,nf,uo,af,Ud,sf,rf,Xd,df,lf,cf,Ko,pf,rt,Ka,uf,Ja,hf,Qd,mf,ff,_f,Za,Ya,Vd,gf,bf,Hd,kf,yf,es,Kd,vf,Tf,Jd,wf,Mf,Zd,$f,Lp,ho,Jo,Yd,ts,xf,el,zf,Gp,D,os,Ff,mo,qf,tl,Bf,jf,ns,Cf,Ef,Pf,as,Sf,Si,Of,Af,If,fo,Nf,ol,Df,Lf,nl,Gf,Wf,Rf,Zo,Uf,Pe,ss,Xf,al,Qf,Vf,rs,Hf,sl,Kf,Jf,Zf,is,ds,rl,Yf,e_,il,t_,o_,ls,dl,n_,a_,ll,s_,r_,cl,i_,d_,Yo,cs,l_,pl,c_,p_,en,ps,u_,ul,h_,m_,tn,us,f_,hl,__,Wp,_o,on,ml,hs,g_,fl,b_,Rp,L,ms,k_,fs,y_,_s,v_,T_,w_,gs,M_,Oi,$_,x_,z_,nn,F_,it,bs,q_,ks,B_,_l,j_,C_,E_,ys,vs,gl,P_,S_,bl,O_,A_,Ts,kl,I_,N_,yl,D_,L_,vl,G_,W_,an,ws,R_,Tl,U_,X_,sn,Ms,Q_,$s,V_,wl,H_,K_,J_,rn,xs,Z_,Ml,Y_,eg,dn,zs,tg,$l,og,Up,go,ln,xl,Fs,ng,zl,ag,Xp,ee,qs,sg,bo,rg,Fl,ig,dg,Bs,lg,cg,pg,js,ug,Ai,hg,mg,fg,cn,_g,Se,Cs,gg,ql,bg,kg,Es,yg,Bl,vg,Tg,wg,Ps,Ss,jl,Mg,$g,Cl,xg,zg,Os,El,Fg,qg,Pl,Bg,jg,Sl,Cg,Eg,pn,As,Pg,Ol,Sg,Og,un,Is,Ag,Al,Ig,Qp,ko,hn,Il,Ns,Ng,Nl,Dg,Vp,Ze,Ds,Lg,Ls,Gg,Ii,Wg,Rg,Ug,Gs,Xg,Ws,Qg,Vg,Hg,dt,Rs,Kg,yo,Jg,Ni,Zg,Yg,Dl,eb,tb,ob,mn,nb,fn,Hp,vo,_n,Ll,Us,ab,Gl,sb,Kp,Ye,Xs,rb,Qs,ib,Di,db,lb,cb,Vs,pb,Hs,ub,hb,mb,Oe,Ks,fb,To,_b,Li,gb,bb,Wl,kb,yb,vb,gn,Tb,bn,wb,kn,Jp,wo,yn,Rl,Js,Mb,Ul,$b,Zp,qe,Zs,xb,Mo,zb,Xl,Fb,qb,Ql,Bb,jb,Cb,Ys,Eb,Gi,Pb,Sb,Ob,er,Ab,tr,Ib,Nb,Db,Ae,or,Lb,$o,Gb,Wi,Wb,Rb,Vl,Ub,Xb,Qb,vn,Vb,Tn,Hb,wn,Yp,xo,Mn,Hl,nr,Kb,Kl,Jb,eu,Be,ar,Zb,Jl,Yb,ek,sr,tk,Ri,ok,nk,ak,rr,sk,ir,rk,ik,dk,oe,dr,lk,zo,ck,Ui,pk,uk,Zl,hk,mk,fk,$n,_k,xn,gk,zn,bk,Fn,kk,qn,tu,Fo,Bn,Yl,lr,yk,ec,vk,ou,qo,cr,Tk,jn,pr,wk,Cn,nu,Bo,En,tc,ur,Mk,oc,$k,au,je,hr,xk,mr,zk,Xi,Fk,qk,Bk,fr,jk,_r,Ck,Ek,Pk,Pn,Sk,lt,gr,Ok,jo,Ak,Qi,Ik,Nk,nc,Dk,Lk,Gk,Sn,Wk,On,su,Co,An,ac,br,Rk,sc,Uk,ru,Ce,kr,Xk,yr,Qk,Vi,Vk,Hk,Kk,vr,Jk,Tr,Zk,Yk,ey,In,ty,Ie,wr,oy,Eo,ny,Hi,ay,sy,rc,ry,iy,dy,Nn,ly,Dn,cy,Ln,iu,Po,Gn,ic,Mr,py,dc,uy,du,Q,$r,hy,xr,my,Ki,fy,_y,gy,zr,by,Fr,ky,yy,vy,lc,Ty,wy,St,cc,qr,My,$y,pc,Br,xy,zy,uc,jr,Fy,qy,hc,Cr,By,jy,ct,Er,Cy,So,Ey,mc,Py,Sy,fc,Oy,Ay,Iy,Wn,Ny,Rn,Dy,Un,Pr,Ly,Xn,Gy,Qn,Sr,Wy,Vn,lu,Oo,Hn,_c,Or,Ry,gc,Uy,cu,V,Ar,Xy,Ir,Qy,Ji,Vy,Hy,Ky,Nr,Jy,Dr,Zy,Yy,ev,bc,tv,ov,Ot,kc,Lr,nv,av,yc,Gr,sv,rv,vc,Wr,iv,dv,Tc,Rr,lv,cv,Ne,Ur,pv,Ao,uv,wc,hv,mv,Mc,fv,_v,gv,Kn,bv,Jn,kv,Zn,yv,Yn,Xr,vv,ea,Tv,ta,Qr,wv,oa,pu,Io,na,$c,Vr,Mv,xc,$v,uu,G,Hr,xv,zc,zv,Fv,Kr,qv,Zi,Bv,jv,Cv,Jr,Ev,Zr,Pv,Sv,Ov,Fc,Av,Iv,At,qc,Yr,Nv,Dv,Bc,ei,Lv,Gv,jc,ti,Wv,Rv,Cc,oi,Uv,Xv,pt,ni,Qv,No,Vv,Ec,Hv,Kv,Pc,Jv,Zv,Yv,aa,eT,sa,tT,ra,ai,oT,ia,nT,da,si,aT,la,hu,Do,ca,Sc,ri,sT,Oc,rT,mu,W,ii,iT,Lo,dT,Ac,lT,cT,Ic,pT,uT,hT,di,mT,Yi,fT,_T,gT,li,bT,ci,kT,yT,vT,Nc,TT,wT,It,Dc,pi,MT,$T,Lc,ui,xT,zT,Gc,hi,FT,qT,Wc,mi,BT,jT,ut,fi,CT,Go,ET,Rc,PT,ST,Uc,OT,AT,IT,pa,NT,ua,DT,ha,_i,LT,ma,GT,fa,gi,WT,_a,fu;return n=new H({}),K=new H({}),$e=new H({}),Sa=new C({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),Aa=new C({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),Ia=new H({}),Da=new H({}),La=new C({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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

model(**model_inputs)  <span class="hljs-comment"># forward pass</span>`}}),Wa=new C({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Ra=new H({}),Ua=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/configuration_mbart.py#L34"}}),Vo=new E({props:{anchor:"transformers.MBartConfig.example",$$slots:{default:[N2]},$$scope:{ctx:x}}}),Qa=new H({}),Va=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L53"}}),Ko=new E({props:{anchor:"transformers.MBartTokenizer.example",$$slots:{default:[D2]},$$scope:{ctx:x}}}),Ka=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new H({}),os=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L63"}}),Zo=new E({props:{anchor:"transformers.MBartTokenizerFast.example",$$slots:{default:[L2]},$$scope:{ctx:x}}}),ss=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L161",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L190",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L245"}}),us=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L260"}}),hs=new H({}),ms=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L49"}}),nn=new E({props:{anchor:"transformers.MBart50Tokenizer.example",$$slots:{default:[G2]},$$scope:{ctx:x}}}),bs=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L286",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ws=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L235"}}),Ms=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L256",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xs=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L343"}}),zs=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L349"}}),Fs=new H({}),qs=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L59"}}),cn=new E({props:{anchor:"transformers.MBart50TokenizerFast.example",$$slots:{default:[W2]},$$scope:{ctx:x}}}),Cs=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),As=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L217"}}),Is=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L232"}}),Ns=new H({}),Ds=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1152"}}),Rs=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),mn=new ft({props:{$$slots:{default:[R2]},$$scope:{ctx:x}}}),fn=new E({props:{anchor:"transformers.MBartModel.forward.example",$$slots:{default:[U2]},$$scope:{ctx:x}}}),Us=new H({}),Xs=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1269"}}),Ks=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),gn=new ft({props:{$$slots:{default:[X2]},$$scope:{ctx:x}}}),bn=new E({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example",$$slots:{default:[Q2]},$$scope:{ctx:x}}}),kn=new E({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example-2",$$slots:{default:[V2]},$$scope:{ctx:x}}}),Js=new H({}),Zs=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1570"}}),or=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),vn=new ft({props:{$$slots:{default:[H2]},$$scope:{ctx:x}}}),Tn=new E({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example",$$slots:{default:[K2]},$$scope:{ctx:x}}}),wn=new E({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example-2",$$slots:{default:[J2]},$$scope:{ctx:x}}}),nr=new H({}),ar=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1442"}}),dr=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),$n=new ft({props:{$$slots:{default:[Z2]},$$scope:{ctx:x}}}),xn=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example",$$slots:{default:[Y2]},$$scope:{ctx:x}}}),zn=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-2",$$slots:{default:[ex]},$$scope:{ctx:x}}}),Fn=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-3",$$slots:{default:[tx]},$$scope:{ctx:x}}}),qn=new E({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-4",$$slots:{default:[ox]},$$scope:{ctx:x}}}),lr=new H({}),cr=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1703"}}),pr=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Cn=new E({props:{anchor:"transformers.MBartForCausalLM.forward.example",$$slots:{default:[nx]},$$scope:{ctx:x}}}),ur=new H({}),hr=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1175"}}),Pn=new ft({props:{$$slots:{default:[ax]},$$scope:{ctx:x}}}),gr=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1187",returnDescription:`
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
`}}),Sn=new ft({props:{$$slots:{default:[sx]},$$scope:{ctx:x}}}),On=new E({props:{anchor:"transformers.TFMBartModel.call.example",$$slots:{default:[rx]},$$scope:{ctx:x}}}),br=new H({}),kr=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1282"}}),In=new ft({props:{$$slots:{default:[ix]},$$scope:{ctx:x}}}),wr=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1316",returnDescription:`
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
`}}),Nn=new ft({props:{$$slots:{default:[dx]},$$scope:{ctx:x}}}),Dn=new E({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example",$$slots:{default:[lx]},$$scope:{ctx:x}}}),Ln=new E({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example-2",$$slots:{default:[cx]},$$scope:{ctx:x}}}),Mr=new H({}),$r=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1278"}}),Er=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Wn=new ft({props:{$$slots:{default:[px]},$$scope:{ctx:x}}}),Rn=new E({props:{anchor:"transformers.FlaxMBartModel.__call__.example",$$slots:{default:[ux]},$$scope:{ctx:x}}}),Pr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Xn=new E({props:{anchor:"transformers.FlaxMBartModel.encode.example",$$slots:{default:[hx]},$$scope:{ctx:x}}}),Sr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),Vn=new E({props:{anchor:"transformers.FlaxMBartModel.decode.example",$$slots:{default:[mx]},$$scope:{ctx:x}}}),Or=new H({}),Ar=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1365"}}),Ur=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Kn=new ft({props:{$$slots:{default:[fx]},$$scope:{ctx:x}}}),Jn=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example",$$slots:{default:[_x]},$$scope:{ctx:x}}}),Zn=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example-2",$$slots:{default:[gx]},$$scope:{ctx:x}}}),Xr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ea=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.example",$$slots:{default:[bx]},$$scope:{ctx:x}}}),Qr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),oa=new E({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.example",$$slots:{default:[kx]},$$scope:{ctx:x}}}),Vr=new H({}),Hr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1678"}}),ni=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),aa=new ft({props:{$$slots:{default:[yx]},$$scope:{ctx:x}}}),sa=new E({props:{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.example",$$slots:{default:[vx]},$$scope:{ctx:x}}}),ai=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ia=new E({props:{anchor:"transformers.FlaxMBartForSequenceClassification.encode.example",$$slots:{default:[Tx]},$$scope:{ctx:x}}}),si=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),la=new E({props:{anchor:"transformers.FlaxMBartForSequenceClassification.decode.example",$$slots:{default:[wx]},$$scope:{ctx:x}}}),ri=new H({}),ii=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1766"}}),fi=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),pa=new ft({props:{$$slots:{default:[Mx]},$$scope:{ctx:x}}}),ua=new E({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.example",$$slots:{default:[$x]},$$scope:{ctx:x}}}),_i=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ma=new E({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.example",$$slots:{default:[xx]},$$scope:{ctx:x}}}),gi=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),_a=new E({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.example",$$slots:{default:[zx]},$$scope:{ctx:x}}}),{c(){l=a("meta"),k=c(),m=a("h1"),h=a("a"),g=a("span"),y(n.$$.fragment),u=c(),q=a("span"),_t=i("MBart and MBart-50"),tt=c(),U=a("p"),Ge=a("strong"),We=i("DISCLAIMER:"),B=i(" If you see something strange, file a "),ye=a("a"),ve=i("Github Issue"),gt=i(` and assign
@patrickvonplaten`),ot=c(),X=a("h2"),ue=a("a"),Re=a("span"),y(K.$$.fragment),bt=c(),Ue=a("span"),Te=i("Overview of MBart"),nt=c(),he=a("p"),we=i("The MBart model was presented in "),Me=a("a"),kt=i("Multilingual Denoising Pre-training for Neural Machine Translation"),Xe=i(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),O=c(),I=a("p"),yt=i(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),me=c(),ie=a("p"),vt=i("This model was contributed by "),J=a("a"),Tt=i("valhalla"),wt=i(". The Authors\u2019 code can be found "),A=a("a"),Mt=i("here"),fe=c(),de=a("h3"),_e=a("a"),le=a("span"),y($e.$$.fragment),$t=c(),Z=a("span"),xt=i("Training of MBart"),ge=c(),R=a("p"),Qe=i(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),N=a("code"),zt=i("X [eos, src_lang_code]"),Y=i(" where "),Ve=a("code"),Ft=i("X"),z=i(` is the source text. The
target text format is `),j=a("code"),Zt=i("[tgt_lang_code] X [eos]"),He=i(". "),qt=a("code"),Yt=i("bos"),S=i(" is never used."),Dt=c(),te=a("p"),eo=i("The regular "),Ke=a("a"),Bt=a("strong"),ce=i("call"),xe=i("()"),to=i(" will encode source text format passed as first argument or with the "),jt=a("code"),ze=i("text"),oo=i(`
keyword, and target text format passed with the `),Ct=a("code"),Et=i("text_label"),no=i(" keyword argument."),Ee=c(),at=a("ul"),yd=a("li"),Lh=i("Supervised training"),wp=c(),y(Sa.$$.fragment),Mp=c(),Mi=a("ul"),Oa=a("li"),vd=a("p"),Gh=i("Generation"),Wh=c(),ao=a("p"),Rh=i("While generating the target text set the "),Td=a("code"),Uh=i("decoder_start_token_id"),Xh=i(` to the target language id. The following
example shows how to translate English to Romanian using the `),wd=a("em"),Qh=i("facebook/mbart-large-en-ro"),Vh=i(" model."),$p=c(),y(Aa.$$.fragment),xp=c(),so=a("h2"),Ro=a("a"),Md=a("span"),y(Ia.$$.fragment),Hh=c(),$d=a("span"),Kh=i("Overview of MBart-50"),zp=c(),Lt=a("p"),Jh=i("MBart-50 was introduced in the "),Na=a("a"),Zh=i("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Yh=i(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),xd=a("em"),em=i("mbart-large-cc25"),tm=i(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Fp=c(),$i=a("p"),om=i("According to the abstract"),qp=c(),xi=a("p"),zd=a("em"),nm=i(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),Bp=c(),ro=a("h3"),Uo=a("a"),Fd=a("span"),y(Da.$$.fragment),am=c(),qd=a("span"),sm=i("Training of MBart-50"),jp=c(),st=a("p"),rm=i(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),Bd=a("code"),im=i("[lang_code] X [eos]"),dm=i(", where "),jd=a("code"),lm=i("lang_code"),cm=i(` is source
language id for source text and target language id for target text, with `),Cd=a("code"),pm=i("X"),um=i(` being the source or target text
respectively.`),Cp=c(),Xo=a("p"),hm=i("MBart-50 has its own tokenizer "),zi=a("a"),mm=i("MBart50Tokenizer"),fm=i("."),Ep=c(),Fi=a("ul"),Ed=a("li"),_m=i("Supervised training"),Pp=c(),y(La.$$.fragment),Sp=c(),qi=a("ul"),Ga=a("li"),Pd=a("p"),gm=i("Generation"),bm=c(),Fe=a("p"),km=i("To generate using the mBART-50 multilingual translation models, "),Sd=a("code"),ym=i("eos_token_id"),vm=i(` is used as the
`),Od=a("code"),Tm=i("decoder_start_token_id"),wm=i(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Ad=a("em"),Mm=i("forced_bos_token_id"),$m=i(" parameter to the "),Id=a("em"),xm=i("generate"),zm=i(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Nd=a("em"),Fm=i("facebook/mbart-50-large-many-to-many"),qm=i(" checkpoint."),Op=c(),y(Wa.$$.fragment),Ap=c(),io=a("h2"),Qo=a("a"),Dd=a("span"),y(Ra.$$.fragment),Bm=c(),Ld=a("span"),jm=i("MBartConfig"),Ip=c(),Je=a("div"),y(Ua.$$.fragment),Cm=c(),lo=a("p"),Em=i("This is the configuration class to store the configuration of a "),Bi=a("a"),Pm=i("MBartModel"),Sm=i(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xa=a("a"),Om=i("facebook/mbart-large-cc25"),Am=i(" architecture."),Im=c(),co=a("p"),Nm=i("Configuration objects inherit from "),ji=a("a"),Dm=i("PretrainedConfig"),Lm=i(` and can be used to control the model outputs. Read the
documentation from `),Ci=a("a"),Gm=i("PretrainedConfig"),Wm=i(" for more information."),Rm=c(),y(Vo.$$.fragment),Np=c(),po=a("h2"),Ho=a("a"),Gd=a("span"),y(Qa.$$.fragment),Um=c(),Wd=a("span"),Xm=i("MBartTokenizer"),Dp=c(),pe=a("div"),y(Va.$$.fragment),Qm=c(),Rd=a("p"),Vm=i("Construct an MBART tokenizer."),Hm=c(),Pt=a("p"),Km=i("Adapted from "),Ei=a("a"),Jm=i("RobertaTokenizer"),Zm=i(" and "),Pi=a("a"),Ym=i("XLNetTokenizer"),ef=i(`. Based on
`),Ha=a("a"),tf=i("SentencePiece"),of=i("."),nf=c(),uo=a("p"),af=i("The tokenization method is "),Ud=a("code"),sf=i("<tokens> <eos> <language code>"),rf=i(" for source language documents, and "),Xd=a("code"),df=i("<language code> <tokens> <eos>"),lf=i(" for target language documents."),cf=c(),y(Ko.$$.fragment),pf=c(),rt=a("div"),y(Ka.$$.fragment),uf=c(),Ja=a("p"),hf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Qd=a("code"),mf=i("X"),ff=i(" represents the sequence:"),_f=c(),Za=a("ul"),Ya=a("li"),Vd=a("code"),gf=i("input_ids"),bf=i(" (for encoder) "),Hd=a("code"),kf=i("X [eos, src_lang_code]"),yf=c(),es=a("li"),Kd=a("code"),vf=i("decoder_input_ids"),Tf=i(": (for decoder) "),Jd=a("code"),wf=i("X [eos, tgt_lang_code]"),Mf=c(),Zd=a("p"),$f=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Lp=c(),ho=a("h2"),Jo=a("a"),Yd=a("span"),y(ts.$$.fragment),xf=c(),el=a("span"),zf=i("MBartTokenizerFast"),Gp=c(),D=a("div"),y(os.$$.fragment),Ff=c(),mo=a("p"),qf=i("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),tl=a("em"),Bf=i("tokenizers"),jf=i(` library). Based on
`),ns=a("a"),Cf=i("BPE"),Ef=i("."),Pf=c(),as=a("p"),Sf=i("This tokenizer inherits from "),Si=a("a"),Of=i("PreTrainedTokenizerFast"),Af=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),If=c(),fo=a("p"),Nf=i("The tokenization method is "),ol=a("code"),Df=i("<tokens> <eos> <language code>"),Lf=i(" for source language documents, and "),nl=a("code"),Gf=i("<language code> <tokens> <eos>"),Wf=i(" for target language documents."),Rf=c(),y(Zo.$$.fragment),Uf=c(),Pe=a("div"),y(ss.$$.fragment),Xf=c(),al=a("p"),Qf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Vf=c(),rs=a("p"),Hf=i("An MBART sequence has the following format, where "),sl=a("code"),Kf=i("X"),Jf=i(" represents the sequence:"),Zf=c(),is=a("ul"),ds=a("li"),rl=a("code"),Yf=i("input_ids"),e_=i(" (for encoder) "),il=a("code"),t_=i("X [eos, src_lang_code]"),o_=c(),ls=a("li"),dl=a("code"),n_=i("decoder_input_ids"),a_=i(": (for decoder) "),ll=a("code"),s_=i("X [eos, tgt_lang_code]"),r_=c(),cl=a("p"),i_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),d_=c(),Yo=a("div"),y(cs.$$.fragment),l_=c(),pl=a("p"),c_=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),p_=c(),en=a("div"),y(ps.$$.fragment),u_=c(),ul=a("p"),h_=i("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),m_=c(),tn=a("div"),y(us.$$.fragment),f_=c(),hl=a("p"),__=i("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Wp=c(),_o=a("h2"),on=a("a"),ml=a("span"),y(hs.$$.fragment),g_=c(),fl=a("span"),b_=i("MBart50Tokenizer"),Rp=c(),L=a("div"),y(ms.$$.fragment),k_=c(),fs=a("p"),y_=i("Construct a MBart50 tokenizer. Based on "),_s=a("a"),v_=i("SentencePiece"),T_=i("."),w_=c(),gs=a("p"),M_=i("This tokenizer inherits from "),Oi=a("a"),$_=i("PreTrainedTokenizer"),x_=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),z_=c(),y(nn.$$.fragment),F_=c(),it=a("div"),y(bs.$$.fragment),q_=c(),ks=a("p"),B_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),_l=a("code"),j_=i("X"),C_=i(" represents the sequence:"),E_=c(),ys=a("ul"),vs=a("li"),gl=a("code"),P_=i("input_ids"),S_=i(" (for encoder) "),bl=a("code"),O_=i("[src_lang_code] X [eos]"),A_=c(),Ts=a("li"),kl=a("code"),I_=i("labels"),N_=i(": (for decoder) "),yl=a("code"),D_=i("[tgt_lang_code] X [eos]"),L_=c(),vl=a("p"),G_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),W_=c(),an=a("div"),y(ws.$$.fragment),R_=c(),Tl=a("p"),U_=i("Converts a sequence of tokens (strings for sub-words) in a single string."),X_=c(),sn=a("div"),y(Ms.$$.fragment),Q_=c(),$s=a("p"),V_=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wl=a("code"),H_=i("prepare_for_model"),K_=i(" method."),J_=c(),rn=a("div"),y(xs.$$.fragment),Z_=c(),Ml=a("p"),Y_=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),eg=c(),dn=a("div"),y(zs.$$.fragment),tg=c(),$l=a("p"),og=i("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Up=c(),go=a("h2"),ln=a("a"),xl=a("span"),y(Fs.$$.fragment),ng=c(),zl=a("span"),ag=i("MBart50TokenizerFast"),Xp=c(),ee=a("div"),y(qs.$$.fragment),sg=c(),bo=a("p"),rg=i("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Fl=a("em"),ig=i("tokenizers"),dg=i(` library). Based on
`),Bs=a("a"),lg=i("BPE"),cg=i("."),pg=c(),js=a("p"),ug=i("This tokenizer inherits from "),Ai=a("a"),hg=i("PreTrainedTokenizerFast"),mg=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fg=c(),y(cn.$$.fragment),_g=c(),Se=a("div"),y(Cs.$$.fragment),gg=c(),ql=a("p"),bg=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),kg=c(),Es=a("p"),yg=i("An MBART-50 sequence has the following format, where "),Bl=a("code"),vg=i("X"),Tg=i(" represents the sequence:"),wg=c(),Ps=a("ul"),Ss=a("li"),jl=a("code"),Mg=i("input_ids"),$g=i(" (for encoder) "),Cl=a("code"),xg=i("[src_lang_code] X [eos]"),zg=c(),Os=a("li"),El=a("code"),Fg=i("labels"),qg=i(": (for decoder) "),Pl=a("code"),Bg=i("[tgt_lang_code] X [eos]"),jg=c(),Sl=a("p"),Cg=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Eg=c(),pn=a("div"),y(As.$$.fragment),Pg=c(),Ol=a("p"),Sg=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Og=c(),un=a("div"),y(Is.$$.fragment),Ag=c(),Al=a("p"),Ig=i("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Qp=c(),ko=a("h2"),hn=a("a"),Il=a("span"),y(Ns.$$.fragment),Ng=c(),Nl=a("span"),Dg=i("MBartModel"),Vp=c(),Ze=a("div"),y(Ds.$$.fragment),Lg=c(),Ls=a("p"),Gg=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ii=a("a"),Wg=i("PreTrainedModel"),Rg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=c(),Gs=a("p"),Xg=i("This model is also a PyTorch "),Ws=a("a"),Qg=i("torch.nn.Module"),Vg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hg=c(),dt=a("div"),y(Rs.$$.fragment),Kg=c(),yo=a("p"),Jg=i("The "),Ni=a("a"),Zg=i("MBartModel"),Yg=i(" forward method, overrides the "),Dl=a("code"),eb=i("__call__"),tb=i(" special method."),ob=c(),y(mn.$$.fragment),nb=c(),y(fn.$$.fragment),Hp=c(),vo=a("h2"),_n=a("a"),Ll=a("span"),y(Us.$$.fragment),ab=c(),Gl=a("span"),sb=i("MBartForConditionalGeneration"),Kp=c(),Ye=a("div"),y(Xs.$$.fragment),rb=c(),Qs=a("p"),ib=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Di=a("a"),db=i("PreTrainedModel"),lb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cb=c(),Vs=a("p"),pb=i("This model is also a PyTorch "),Hs=a("a"),ub=i("torch.nn.Module"),hb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mb=c(),Oe=a("div"),y(Ks.$$.fragment),fb=c(),To=a("p"),_b=i("The "),Li=a("a"),gb=i("MBartForConditionalGeneration"),bb=i(" forward method, overrides the "),Wl=a("code"),kb=i("__call__"),yb=i(" special method."),vb=c(),y(gn.$$.fragment),Tb=c(),y(bn.$$.fragment),wb=c(),y(kn.$$.fragment),Jp=c(),wo=a("h2"),yn=a("a"),Rl=a("span"),y(Js.$$.fragment),Mb=c(),Ul=a("span"),$b=i("MBartForQuestionAnswering"),Zp=c(),qe=a("div"),y(Zs.$$.fragment),xb=c(),Mo=a("p"),zb=i(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Xl=a("code"),Fb=i("span start logits"),qb=i(" and "),Ql=a("code"),Bb=i("span end logits"),jb=i(")."),Cb=c(),Ys=a("p"),Eb=i("This model inherits from "),Gi=a("a"),Pb=i("PreTrainedModel"),Sb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ob=c(),er=a("p"),Ab=i("This model is also a PyTorch "),tr=a("a"),Ib=i("torch.nn.Module"),Nb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Db=c(),Ae=a("div"),y(or.$$.fragment),Lb=c(),$o=a("p"),Gb=i("The "),Wi=a("a"),Wb=i("MBartForQuestionAnswering"),Rb=i(" forward method, overrides the "),Vl=a("code"),Ub=i("__call__"),Xb=i(" special method."),Qb=c(),y(vn.$$.fragment),Vb=c(),y(Tn.$$.fragment),Hb=c(),y(wn.$$.fragment),Yp=c(),xo=a("h2"),Mn=a("a"),Hl=a("span"),y(nr.$$.fragment),Kb=c(),Kl=a("span"),Jb=i("MBartForSequenceClassification"),eu=c(),Be=a("div"),y(ar.$$.fragment),Zb=c(),Jl=a("p"),Yb=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ek=c(),sr=a("p"),tk=i("This model inherits from "),Ri=a("a"),ok=i("PreTrainedModel"),nk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak=c(),rr=a("p"),sk=i("This model is also a PyTorch "),ir=a("a"),rk=i("torch.nn.Module"),ik=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dk=c(),oe=a("div"),y(dr.$$.fragment),lk=c(),zo=a("p"),ck=i("The "),Ui=a("a"),pk=i("MBartForSequenceClassification"),uk=i(" forward method, overrides the "),Zl=a("code"),hk=i("__call__"),mk=i(" special method."),fk=c(),y($n.$$.fragment),_k=c(),y(xn.$$.fragment),gk=c(),y(zn.$$.fragment),bk=c(),y(Fn.$$.fragment),kk=c(),y(qn.$$.fragment),tu=c(),Fo=a("h2"),Bn=a("a"),Yl=a("span"),y(lr.$$.fragment),yk=c(),ec=a("span"),vk=i("MBartForCausalLM"),ou=c(),qo=a("div"),y(cr.$$.fragment),Tk=c(),jn=a("div"),y(pr.$$.fragment),wk=c(),y(Cn.$$.fragment),nu=c(),Bo=a("h2"),En=a("a"),tc=a("span"),y(ur.$$.fragment),Mk=c(),oc=a("span"),$k=i("TFMBartModel"),au=c(),je=a("div"),y(hr.$$.fragment),xk=c(),mr=a("p"),zk=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Xi=a("a"),Fk=i("TFPreTrainedModel"),qk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk=c(),fr=a("p"),jk=i("This model is also a "),_r=a("a"),Ck=i("tf.keras.Model"),Ek=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pk=c(),y(Pn.$$.fragment),Sk=c(),lt=a("div"),y(gr.$$.fragment),Ok=c(),jo=a("p"),Ak=i("The "),Qi=a("a"),Ik=i("TFMBartModel"),Nk=i(" forward method, overrides the "),nc=a("code"),Dk=i("__call__"),Lk=i(" special method."),Gk=c(),y(Sn.$$.fragment),Wk=c(),y(On.$$.fragment),su=c(),Co=a("h2"),An=a("a"),ac=a("span"),y(br.$$.fragment),Rk=c(),sc=a("span"),Uk=i("TFMBartForConditionalGeneration"),ru=c(),Ce=a("div"),y(kr.$$.fragment),Xk=c(),yr=a("p"),Qk=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vi=a("a"),Vk=i("TFPreTrainedModel"),Hk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk=c(),vr=a("p"),Jk=i("This model is also a "),Tr=a("a"),Zk=i("tf.keras.Model"),Yk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ey=c(),y(In.$$.fragment),ty=c(),Ie=a("div"),y(wr.$$.fragment),oy=c(),Eo=a("p"),ny=i("The "),Hi=a("a"),ay=i("TFMBartForConditionalGeneration"),sy=i(" forward method, overrides the "),rc=a("code"),ry=i("__call__"),iy=i(" special method."),dy=c(),y(Nn.$$.fragment),ly=c(),y(Dn.$$.fragment),cy=c(),y(Ln.$$.fragment),iu=c(),Po=a("h2"),Gn=a("a"),ic=a("span"),y(Mr.$$.fragment),py=c(),dc=a("span"),uy=i("FlaxMBartModel"),du=c(),Q=a("div"),y($r.$$.fragment),hy=c(),xr=a("p"),my=i(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ki=a("a"),fy=i("FlaxPreTrainedModel"),_y=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gy=c(),zr=a("p"),by=i(`This model is also a Flax Linen
`),Fr=a("a"),ky=i("flax.nn.Module"),yy=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vy=c(),lc=a("p"),Ty=i("Finally, this model supports inherent JAX features such as:"),wy=c(),St=a("ul"),cc=a("li"),qr=a("a"),My=i("Just-In-Time (JIT) compilation"),$y=c(),pc=a("li"),Br=a("a"),xy=i("Automatic Differentiation"),zy=c(),uc=a("li"),jr=a("a"),Fy=i("Vectorization"),qy=c(),hc=a("li"),Cr=a("a"),By=i("Parallelization"),jy=c(),ct=a("div"),y(Er.$$.fragment),Cy=c(),So=a("p"),Ey=i("The "),mc=a("code"),Py=i("FlaxMBartPreTrainedModel"),Sy=i(" forward method, overrides the "),fc=a("code"),Oy=i("__call__"),Ay=i(" special method."),Iy=c(),y(Wn.$$.fragment),Ny=c(),y(Rn.$$.fragment),Dy=c(),Un=a("div"),y(Pr.$$.fragment),Ly=c(),y(Xn.$$.fragment),Gy=c(),Qn=a("div"),y(Sr.$$.fragment),Wy=c(),y(Vn.$$.fragment),lu=c(),Oo=a("h2"),Hn=a("a"),_c=a("span"),y(Or.$$.fragment),Ry=c(),gc=a("span"),Uy=i("FlaxMBartForConditionalGeneration"),cu=c(),V=a("div"),y(Ar.$$.fragment),Xy=c(),Ir=a("p"),Qy=i(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ji=a("a"),Vy=i("FlaxPreTrainedModel"),Hy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ky=c(),Nr=a("p"),Jy=i(`This model is also a Flax Linen
`),Dr=a("a"),Zy=i("flax.nn.Module"),Yy=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ev=c(),bc=a("p"),tv=i("Finally, this model supports inherent JAX features such as:"),ov=c(),Ot=a("ul"),kc=a("li"),Lr=a("a"),nv=i("Just-In-Time (JIT) compilation"),av=c(),yc=a("li"),Gr=a("a"),sv=i("Automatic Differentiation"),rv=c(),vc=a("li"),Wr=a("a"),iv=i("Vectorization"),dv=c(),Tc=a("li"),Rr=a("a"),lv=i("Parallelization"),cv=c(),Ne=a("div"),y(Ur.$$.fragment),pv=c(),Ao=a("p"),uv=i("The "),wc=a("code"),hv=i("FlaxMBartPreTrainedModel"),mv=i(" forward method, overrides the "),Mc=a("code"),fv=i("__call__"),_v=i(" special method."),gv=c(),y(Kn.$$.fragment),bv=c(),y(Jn.$$.fragment),kv=c(),y(Zn.$$.fragment),yv=c(),Yn=a("div"),y(Xr.$$.fragment),vv=c(),y(ea.$$.fragment),Tv=c(),ta=a("div"),y(Qr.$$.fragment),wv=c(),y(oa.$$.fragment),pu=c(),Io=a("h2"),na=a("a"),$c=a("span"),y(Vr.$$.fragment),Mv=c(),xc=a("span"),$v=i("FlaxMBartForSequenceClassification"),uu=c(),G=a("div"),y(Hr.$$.fragment),xv=c(),zc=a("p"),zv=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Fv=c(),Kr=a("p"),qv=i("This model inherits from "),Zi=a("a"),Bv=i("FlaxPreTrainedModel"),jv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cv=c(),Jr=a("p"),Ev=i(`This model is also a Flax Linen
`),Zr=a("a"),Pv=i("flax.nn.Module"),Sv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ov=c(),Fc=a("p"),Av=i("Finally, this model supports inherent JAX features such as:"),Iv=c(),At=a("ul"),qc=a("li"),Yr=a("a"),Nv=i("Just-In-Time (JIT) compilation"),Dv=c(),Bc=a("li"),ei=a("a"),Lv=i("Automatic Differentiation"),Gv=c(),jc=a("li"),ti=a("a"),Wv=i("Vectorization"),Rv=c(),Cc=a("li"),oi=a("a"),Uv=i("Parallelization"),Xv=c(),pt=a("div"),y(ni.$$.fragment),Qv=c(),No=a("p"),Vv=i("The "),Ec=a("code"),Hv=i("FlaxMBartPreTrainedModel"),Kv=i(" forward method, overrides the "),Pc=a("code"),Jv=i("__call__"),Zv=i(" special method."),Yv=c(),y(aa.$$.fragment),eT=c(),y(sa.$$.fragment),tT=c(),ra=a("div"),y(ai.$$.fragment),oT=c(),y(ia.$$.fragment),nT=c(),da=a("div"),y(si.$$.fragment),aT=c(),y(la.$$.fragment),hu=c(),Do=a("h2"),ca=a("a"),Sc=a("span"),y(ri.$$.fragment),sT=c(),Oc=a("span"),rT=i("FlaxMBartForQuestionAnswering"),mu=c(),W=a("div"),y(ii.$$.fragment),iT=c(),Lo=a("p"),dT=i(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ac=a("code"),lT=i("span start logits"),cT=i(" and "),Ic=a("code"),pT=i("span end logits"),uT=i(")."),hT=c(),di=a("p"),mT=i("This model inherits from "),Yi=a("a"),fT=i("FlaxPreTrainedModel"),_T=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gT=c(),li=a("p"),bT=i(`This model is also a Flax Linen
`),ci=a("a"),kT=i("flax.nn.Module"),yT=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vT=c(),Nc=a("p"),TT=i("Finally, this model supports inherent JAX features such as:"),wT=c(),It=a("ul"),Dc=a("li"),pi=a("a"),MT=i("Just-In-Time (JIT) compilation"),$T=c(),Lc=a("li"),ui=a("a"),xT=i("Automatic Differentiation"),zT=c(),Gc=a("li"),hi=a("a"),FT=i("Vectorization"),qT=c(),Wc=a("li"),mi=a("a"),BT=i("Parallelization"),jT=c(),ut=a("div"),y(fi.$$.fragment),CT=c(),Go=a("p"),ET=i("The "),Rc=a("code"),PT=i("FlaxMBartPreTrainedModel"),ST=i(" forward method, overrides the "),Uc=a("code"),OT=i("__call__"),AT=i(" special method."),IT=c(),y(pa.$$.fragment),NT=c(),y(ua.$$.fragment),DT=c(),ha=a("div"),y(_i.$$.fragment),LT=c(),y(ma.$$.fragment),GT=c(),fa=a("div"),y(gi.$$.fragment),WT=c(),y(_a.$$.fragment),this.h()},l(o){const _=A2('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),k=p(o),m=s(o,"H1",{class:!0});var bi=r(m);h=s(bi,"A",{id:!0,class:!0,href:!0});var Xc=r(h);g=s(Xc,"SPAN",{});var Qc=r(g);v(n.$$.fragment,Qc),Qc.forEach(t),Xc.forEach(t),u=p(bi),q=s(bi,"SPAN",{});var Vc=r(q);_t=d(Vc,"MBart and MBart-50"),Vc.forEach(t),bi.forEach(t),tt=p(o),U=s(o,"P",{});var ga=r(U);Ge=s(ga,"STRONG",{});var Hc=r(Ge);We=d(Hc,"DISCLAIMER:"),Hc.forEach(t),B=d(ga," If you see something strange, file a "),ye=s(ga,"A",{href:!0,rel:!0});var Kc=r(ye);ve=d(Kc,"Github Issue"),Kc.forEach(t),gt=d(ga,` and assign
@patrickvonplaten`),ga.forEach(t),ot=p(o),X=s(o,"H2",{class:!0});var ki=r(X);ue=s(ki,"A",{id:!0,class:!0,href:!0});var Jc=r(ue);Re=s(Jc,"SPAN",{});var Zc=r(Re);v(K.$$.fragment,Zc),Zc.forEach(t),Jc.forEach(t),bt=p(ki),Ue=s(ki,"SPAN",{});var Yc=r(Ue);Te=d(Yc,"Overview of MBart"),Yc.forEach(t),ki.forEach(t),nt=p(o),he=s(o,"P",{});var yi=r(he);we=d(yi,"The MBart model was presented in "),Me=s(yi,"A",{href:!0,rel:!0});var ep=r(Me);kt=d(ep,"Multilingual Denoising Pre-training for Neural Machine Translation"),ep.forEach(t),Xe=d(yi,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),yi.forEach(t),O=p(o),I=s(o,"P",{});var tp=r(I);yt=d(tp,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),tp.forEach(t),me=p(o),ie=s(o,"P",{});var ba=r(ie);vt=d(ba,"This model was contributed by "),J=s(ba,"A",{href:!0,rel:!0});var op=r(J);Tt=d(op,"valhalla"),op.forEach(t),wt=d(ba,". The Authors\u2019 code can be found "),A=s(ba,"A",{href:!0,rel:!0});var np=r(A);Mt=d(np,"here"),np.forEach(t),ba.forEach(t),fe=p(o),de=s(o,"H3",{class:!0});var vi=r(de);_e=s(vi,"A",{id:!0,class:!0,href:!0});var ap=r(_e);le=s(ap,"SPAN",{});var sp=r(le);v($e.$$.fragment,sp),sp.forEach(t),ap.forEach(t),$t=p(vi),Z=s(vi,"SPAN",{});var rp=r(Z);xt=d(rp,"Training of MBart"),rp.forEach(t),vi.forEach(t),ge=p(o),R=s(o,"P",{});var et=r(R);Qe=d(et,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),N=s(et,"CODE",{});var ip=r(N);zt=d(ip,"X [eos, src_lang_code]"),ip.forEach(t),Y=d(et," where "),Ve=s(et,"CODE",{});var dp=r(Ve);Ft=d(dp,"X"),dp.forEach(t),z=d(et,` is the source text. The
target text format is `),j=s(et,"CODE",{});var lp=r(j);Zt=d(lp,"[tgt_lang_code] X [eos]"),lp.forEach(t),He=d(et,". "),qt=s(et,"CODE",{});var cp=r(qt);Yt=d(cp,"bos"),cp.forEach(t),S=d(et," is never used."),et.forEach(t),Dt=p(o),te=s(o,"P",{});var Nt=r(te);eo=d(Nt,"The regular "),Ke=s(Nt,"A",{href:!0});var ed=r(Ke);Bt=s(ed,"STRONG",{});var pp=r(Bt);ce=d(pp,"call"),pp.forEach(t),xe=d(ed,"()"),ed.forEach(t),to=d(Nt," will encode source text format passed as first argument or with the "),jt=s(Nt,"CODE",{});var up=r(jt);ze=d(up,"text"),up.forEach(t),oo=d(Nt,`
keyword, and target text format passed with the `),Ct=s(Nt,"CODE",{});var hp=r(Ct);Et=d(hp,"text_label"),hp.forEach(t),no=d(Nt," keyword argument."),Nt.forEach(t),Ee=p(o),at=s(o,"UL",{});var mp=r(at);yd=s(mp,"LI",{});var fp=r(yd);Lh=d(fp,"Supervised training"),fp.forEach(t),mp.forEach(t),wp=p(o),v(Sa.$$.fragment,o),Mp=p(o),Mi=s(o,"UL",{});var _p=r(Mi);Oa=s(_p,"LI",{});var Ti=r(Oa);vd=s(Ti,"P",{});var gp=r(vd);Gh=d(gp,"Generation"),gp.forEach(t),Wh=p(Ti),ao=s(Ti,"P",{});var Wo=r(ao);Rh=d(Wo,"While generating the target text set the "),Td=s(Wo,"CODE",{});var bp=r(Td);Uh=d(bp,"decoder_start_token_id"),bp.forEach(t),Xh=d(Wo,` to the target language id. The following
example shows how to translate English to Romanian using the `),wd=s(Wo,"EM",{});var kp=r(wd);Qh=d(kp,"facebook/mbart-large-en-ro"),kp.forEach(t),Vh=d(Wo," model."),Wo.forEach(t),Ti.forEach(t),_p.forEach(t),$p=p(o),v(Aa.$$.fragment,o),xp=p(o),so=s(o,"H2",{class:!0});var wi=r(so);Ro=s(wi,"A",{id:!0,class:!0,href:!0});var yp=r(Ro);Md=s(yp,"SPAN",{});var vp=r(Md);v(Ia.$$.fragment,vp),vp.forEach(t),yp.forEach(t),Hh=p(wi),$d=s(wi,"SPAN",{});var Tp=r($d);Kh=d(Tp,"Overview of MBart-50"),Tp.forEach(t),wi.forEach(t),zp=p(o),Lt=s(o,"P",{});var td=r(Lt);Jh=d(td,"MBart-50 was introduced in the "),Na=s(td,"A",{href:!0,rel:!0});var RT=r(Na);Zh=d(RT,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),RT.forEach(t),Yh=d(td,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),xd=s(td,"EM",{});var UT=r(xd);em=d(UT,"mbart-large-cc25"),UT.forEach(t),tm=d(td,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),td.forEach(t),Fp=p(o),$i=s(o,"P",{});var XT=r($i);om=d(XT,"According to the abstract"),XT.forEach(t),qp=p(o),xi=s(o,"P",{});var QT=r(xi);zd=s(QT,"EM",{});var VT=r(zd);nm=d(VT,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),VT.forEach(t),QT.forEach(t),Bp=p(o),ro=s(o,"H3",{class:!0});var _u=r(ro);Uo=s(_u,"A",{id:!0,class:!0,href:!0});var HT=r(Uo);Fd=s(HT,"SPAN",{});var KT=r(Fd);v(Da.$$.fragment,KT),KT.forEach(t),HT.forEach(t),am=p(_u),qd=s(_u,"SPAN",{});var JT=r(qd);sm=d(JT,"Training of MBart-50"),JT.forEach(t),_u.forEach(t),jp=p(o),st=s(o,"P",{});var ka=r(st);rm=d(ka,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),Bd=s(ka,"CODE",{});var ZT=r(Bd);im=d(ZT,"[lang_code] X [eos]"),ZT.forEach(t),dm=d(ka,", where "),jd=s(ka,"CODE",{});var YT=r(jd);lm=d(YT,"lang_code"),YT.forEach(t),cm=d(ka,` is source
language id for source text and target language id for target text, with `),Cd=s(ka,"CODE",{});var ew=r(Cd);pm=d(ew,"X"),ew.forEach(t),um=d(ka,` being the source or target text
respectively.`),ka.forEach(t),Cp=p(o),Xo=s(o,"P",{});var gu=r(Xo);hm=d(gu,"MBart-50 has its own tokenizer "),zi=s(gu,"A",{href:!0});var tw=r(zi);mm=d(tw,"MBart50Tokenizer"),tw.forEach(t),fm=d(gu,"."),gu.forEach(t),Ep=p(o),Fi=s(o,"UL",{});var ow=r(Fi);Ed=s(ow,"LI",{});var nw=r(Ed);_m=d(nw,"Supervised training"),nw.forEach(t),ow.forEach(t),Pp=p(o),v(La.$$.fragment,o),Sp=p(o),qi=s(o,"UL",{});var aw=r(qi);Ga=s(aw,"LI",{});var bu=r(Ga);Pd=s(bu,"P",{});var sw=r(Pd);gm=d(sw,"Generation"),sw.forEach(t),bm=p(bu),Fe=s(bu,"P",{});var ht=r(Fe);km=d(ht,"To generate using the mBART-50 multilingual translation models, "),Sd=s(ht,"CODE",{});var rw=r(Sd);ym=d(rw,"eos_token_id"),rw.forEach(t),vm=d(ht,` is used as the
`),Od=s(ht,"CODE",{});var iw=r(Od);Tm=d(iw,"decoder_start_token_id"),iw.forEach(t),wm=d(ht,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Ad=s(ht,"EM",{});var dw=r(Ad);Mm=d(dw,"forced_bos_token_id"),dw.forEach(t),$m=d(ht," parameter to the "),Id=s(ht,"EM",{});var lw=r(Id);xm=d(lw,"generate"),lw.forEach(t),zm=d(ht,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Nd=s(ht,"EM",{});var cw=r(Nd);Fm=d(cw,"facebook/mbart-50-large-many-to-many"),cw.forEach(t),qm=d(ht," checkpoint."),ht.forEach(t),bu.forEach(t),aw.forEach(t),Op=p(o),v(Wa.$$.fragment,o),Ap=p(o),io=s(o,"H2",{class:!0});var ku=r(io);Qo=s(ku,"A",{id:!0,class:!0,href:!0});var pw=r(Qo);Dd=s(pw,"SPAN",{});var uw=r(Dd);v(Ra.$$.fragment,uw),uw.forEach(t),pw.forEach(t),Bm=p(ku),Ld=s(ku,"SPAN",{});var hw=r(Ld);jm=d(hw,"MBartConfig"),hw.forEach(t),ku.forEach(t),Ip=p(o),Je=s(o,"DIV",{class:!0});var ya=r(Je);v(Ua.$$.fragment,ya),Cm=p(ya),lo=s(ya,"P",{});var od=r(lo);Em=d(od,"This is the configuration class to store the configuration of a "),Bi=s(od,"A",{href:!0});var mw=r(Bi);Pm=d(mw,"MBartModel"),mw.forEach(t),Sm=d(od,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xa=s(od,"A",{href:!0,rel:!0});var fw=r(Xa);Om=d(fw,"facebook/mbart-large-cc25"),fw.forEach(t),Am=d(od," architecture."),od.forEach(t),Im=p(ya),co=s(ya,"P",{});var nd=r(co);Nm=d(nd,"Configuration objects inherit from "),ji=s(nd,"A",{href:!0});var _w=r(ji);Dm=d(_w,"PretrainedConfig"),_w.forEach(t),Lm=d(nd,` and can be used to control the model outputs. Read the
documentation from `),Ci=s(nd,"A",{href:!0});var gw=r(Ci);Gm=d(gw,"PretrainedConfig"),gw.forEach(t),Wm=d(nd," for more information."),nd.forEach(t),Rm=p(ya),v(Vo.$$.fragment,ya),ya.forEach(t),Np=p(o),po=s(o,"H2",{class:!0});var yu=r(po);Ho=s(yu,"A",{id:!0,class:!0,href:!0});var bw=r(Ho);Gd=s(bw,"SPAN",{});var kw=r(Gd);v(Qa.$$.fragment,kw),kw.forEach(t),bw.forEach(t),Um=p(yu),Wd=s(yu,"SPAN",{});var yw=r(Wd);Xm=d(yw,"MBartTokenizer"),yw.forEach(t),yu.forEach(t),Dp=p(o),pe=s(o,"DIV",{class:!0});var mt=r(pe);v(Va.$$.fragment,mt),Qm=p(mt),Rd=s(mt,"P",{});var vw=r(Rd);Vm=d(vw,"Construct an MBART tokenizer."),vw.forEach(t),Hm=p(mt),Pt=s(mt,"P",{});var va=r(Pt);Km=d(va,"Adapted from "),Ei=s(va,"A",{href:!0});var Tw=r(Ei);Jm=d(Tw,"RobertaTokenizer"),Tw.forEach(t),Zm=d(va," and "),Pi=s(va,"A",{href:!0});var ww=r(Pi);Ym=d(ww,"XLNetTokenizer"),ww.forEach(t),ef=d(va,`. Based on
`),Ha=s(va,"A",{href:!0,rel:!0});var Mw=r(Ha);tf=d(Mw,"SentencePiece"),Mw.forEach(t),of=d(va,"."),va.forEach(t),nf=p(mt),uo=s(mt,"P",{});var ad=r(uo);af=d(ad,"The tokenization method is "),Ud=s(ad,"CODE",{});var $w=r(Ud);sf=d($w,"<tokens> <eos> <language code>"),$w.forEach(t),rf=d(ad," for source language documents, and "),Xd=s(ad,"CODE",{});var xw=r(Xd);df=d(xw,"<language code> <tokens> <eos>"),xw.forEach(t),lf=d(ad," for target language documents."),ad.forEach(t),cf=p(mt),v(Ko.$$.fragment,mt),pf=p(mt),rt=s(mt,"DIV",{class:!0});var Ta=r(rt);v(Ka.$$.fragment,Ta),uf=p(Ta),Ja=s(Ta,"P",{});var vu=r(Ja);hf=d(vu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Qd=s(vu,"CODE",{});var zw=r(Qd);mf=d(zw,"X"),zw.forEach(t),ff=d(vu," represents the sequence:"),vu.forEach(t),_f=p(Ta),Za=s(Ta,"UL",{});var Tu=r(Za);Ya=s(Tu,"LI",{});var wu=r(Ya);Vd=s(wu,"CODE",{});var Fw=r(Vd);gf=d(Fw,"input_ids"),Fw.forEach(t),bf=d(wu," (for encoder) "),Hd=s(wu,"CODE",{});var qw=r(Hd);kf=d(qw,"X [eos, src_lang_code]"),qw.forEach(t),wu.forEach(t),yf=p(Tu),es=s(Tu,"LI",{});var Mu=r(es);Kd=s(Mu,"CODE",{});var Bw=r(Kd);vf=d(Bw,"decoder_input_ids"),Bw.forEach(t),Tf=d(Mu,": (for decoder) "),Jd=s(Mu,"CODE",{});var jw=r(Jd);wf=d(jw,"X [eos, tgt_lang_code]"),jw.forEach(t),Mu.forEach(t),Tu.forEach(t),Mf=p(Ta),Zd=s(Ta,"P",{});var Cw=r(Zd);$f=d(Cw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Cw.forEach(t),Ta.forEach(t),mt.forEach(t),Lp=p(o),ho=s(o,"H2",{class:!0});var $u=r(ho);Jo=s($u,"A",{id:!0,class:!0,href:!0});var Ew=r(Jo);Yd=s(Ew,"SPAN",{});var Pw=r(Yd);v(ts.$$.fragment,Pw),Pw.forEach(t),Ew.forEach(t),xf=p($u),el=s($u,"SPAN",{});var Sw=r(el);zf=d(Sw,"MBartTokenizerFast"),Sw.forEach(t),$u.forEach(t),Gp=p(o),D=s(o,"DIV",{class:!0});var ne=r(D);v(os.$$.fragment,ne),Ff=p(ne),mo=s(ne,"P",{});var sd=r(mo);qf=d(sd,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),tl=s(sd,"EM",{});var Ow=r(tl);Bf=d(Ow,"tokenizers"),Ow.forEach(t),jf=d(sd,` library). Based on
`),ns=s(sd,"A",{href:!0,rel:!0});var Aw=r(ns);Cf=d(Aw,"BPE"),Aw.forEach(t),Ef=d(sd,"."),sd.forEach(t),Pf=p(ne),as=s(ne,"P",{});var xu=r(as);Sf=d(xu,"This tokenizer inherits from "),Si=s(xu,"A",{href:!0});var Iw=r(Si);Of=d(Iw,"PreTrainedTokenizerFast"),Iw.forEach(t),Af=d(xu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xu.forEach(t),If=p(ne),fo=s(ne,"P",{});var rd=r(fo);Nf=d(rd,"The tokenization method is "),ol=s(rd,"CODE",{});var Nw=r(ol);Df=d(Nw,"<tokens> <eos> <language code>"),Nw.forEach(t),Lf=d(rd," for source language documents, and "),nl=s(rd,"CODE",{});var Dw=r(nl);Gf=d(Dw,"<language code> <tokens> <eos>"),Dw.forEach(t),Wf=d(rd," for target language documents."),rd.forEach(t),Rf=p(ne),v(Zo.$$.fragment,ne),Uf=p(ne),Pe=s(ne,"DIV",{class:!0});var Gt=r(Pe);v(ss.$$.fragment,Gt),Xf=p(Gt),al=s(Gt,"P",{});var Lw=r(al);Qf=d(Lw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Lw.forEach(t),Vf=p(Gt),rs=s(Gt,"P",{});var zu=r(rs);Hf=d(zu,"An MBART sequence has the following format, where "),sl=s(zu,"CODE",{});var Gw=r(sl);Kf=d(Gw,"X"),Gw.forEach(t),Jf=d(zu," represents the sequence:"),zu.forEach(t),Zf=p(Gt),is=s(Gt,"UL",{});var Fu=r(is);ds=s(Fu,"LI",{});var qu=r(ds);rl=s(qu,"CODE",{});var Ww=r(rl);Yf=d(Ww,"input_ids"),Ww.forEach(t),e_=d(qu," (for encoder) "),il=s(qu,"CODE",{});var Rw=r(il);t_=d(Rw,"X [eos, src_lang_code]"),Rw.forEach(t),qu.forEach(t),o_=p(Fu),ls=s(Fu,"LI",{});var Bu=r(ls);dl=s(Bu,"CODE",{});var Uw=r(dl);n_=d(Uw,"decoder_input_ids"),Uw.forEach(t),a_=d(Bu,": (for decoder) "),ll=s(Bu,"CODE",{});var Xw=r(ll);s_=d(Xw,"X [eos, tgt_lang_code]"),Xw.forEach(t),Bu.forEach(t),Fu.forEach(t),r_=p(Gt),cl=s(Gt,"P",{});var Qw=r(cl);i_=d(Qw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Qw.forEach(t),Gt.forEach(t),d_=p(ne),Yo=s(ne,"DIV",{class:!0});var ju=r(Yo);v(cs.$$.fragment,ju),l_=p(ju),pl=s(ju,"P",{});var Vw=r(pl);c_=d(Vw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Vw.forEach(t),ju.forEach(t),p_=p(ne),en=s(ne,"DIV",{class:!0});var Cu=r(en);v(ps.$$.fragment,Cu),u_=p(Cu),ul=s(Cu,"P",{});var Hw=r(ul);h_=d(Hw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),Hw.forEach(t),Cu.forEach(t),m_=p(ne),tn=s(ne,"DIV",{class:!0});var Eu=r(tn);v(us.$$.fragment,Eu),f_=p(Eu),hl=s(Eu,"P",{});var Kw=r(hl);__=d(Kw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Kw.forEach(t),Eu.forEach(t),ne.forEach(t),Wp=p(o),_o=s(o,"H2",{class:!0});var Pu=r(_o);on=s(Pu,"A",{id:!0,class:!0,href:!0});var Jw=r(on);ml=s(Jw,"SPAN",{});var Zw=r(ml);v(hs.$$.fragment,Zw),Zw.forEach(t),Jw.forEach(t),g_=p(Pu),fl=s(Pu,"SPAN",{});var Yw=r(fl);b_=d(Yw,"MBart50Tokenizer"),Yw.forEach(t),Pu.forEach(t),Rp=p(o),L=s(o,"DIV",{class:!0});var ae=r(L);v(ms.$$.fragment,ae),k_=p(ae),fs=s(ae,"P",{});var Su=r(fs);y_=d(Su,"Construct a MBart50 tokenizer. Based on "),_s=s(Su,"A",{href:!0,rel:!0});var eM=r(_s);v_=d(eM,"SentencePiece"),eM.forEach(t),T_=d(Su,"."),Su.forEach(t),w_=p(ae),gs=s(ae,"P",{});var Ou=r(gs);M_=d(Ou,"This tokenizer inherits from "),Oi=s(Ou,"A",{href:!0});var tM=r(Oi);$_=d(tM,"PreTrainedTokenizer"),tM.forEach(t),x_=d(Ou,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ou.forEach(t),z_=p(ae),v(nn.$$.fragment,ae),F_=p(ae),it=s(ae,"DIV",{class:!0});var wa=r(it);v(bs.$$.fragment,wa),q_=p(wa),ks=s(wa,"P",{});var Au=r(ks);B_=d(Au,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),_l=s(Au,"CODE",{});var oM=r(_l);j_=d(oM,"X"),oM.forEach(t),C_=d(Au," represents the sequence:"),Au.forEach(t),E_=p(wa),ys=s(wa,"UL",{});var Iu=r(ys);vs=s(Iu,"LI",{});var Nu=r(vs);gl=s(Nu,"CODE",{});var nM=r(gl);P_=d(nM,"input_ids"),nM.forEach(t),S_=d(Nu," (for encoder) "),bl=s(Nu,"CODE",{});var aM=r(bl);O_=d(aM,"[src_lang_code] X [eos]"),aM.forEach(t),Nu.forEach(t),A_=p(Iu),Ts=s(Iu,"LI",{});var Du=r(Ts);kl=s(Du,"CODE",{});var sM=r(kl);I_=d(sM,"labels"),sM.forEach(t),N_=d(Du,": (for decoder) "),yl=s(Du,"CODE",{});var rM=r(yl);D_=d(rM,"[tgt_lang_code] X [eos]"),rM.forEach(t),Du.forEach(t),Iu.forEach(t),L_=p(wa),vl=s(wa,"P",{});var iM=r(vl);G_=d(iM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),iM.forEach(t),wa.forEach(t),W_=p(ae),an=s(ae,"DIV",{class:!0});var Lu=r(an);v(ws.$$.fragment,Lu),R_=p(Lu),Tl=s(Lu,"P",{});var dM=r(Tl);U_=d(dM,"Converts a sequence of tokens (strings for sub-words) in a single string."),dM.forEach(t),Lu.forEach(t),X_=p(ae),sn=s(ae,"DIV",{class:!0});var Gu=r(sn);v(Ms.$$.fragment,Gu),Q_=p(Gu),$s=s(Gu,"P",{});var Wu=r($s);V_=d(Wu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wl=s(Wu,"CODE",{});var lM=r(wl);H_=d(lM,"prepare_for_model"),lM.forEach(t),K_=d(Wu," method."),Wu.forEach(t),Gu.forEach(t),J_=p(ae),rn=s(ae,"DIV",{class:!0});var Ru=r(rn);v(xs.$$.fragment,Ru),Z_=p(Ru),Ml=s(Ru,"P",{});var cM=r(Ml);Y_=d(cM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),cM.forEach(t),Ru.forEach(t),eg=p(ae),dn=s(ae,"DIV",{class:!0});var Uu=r(dn);v(zs.$$.fragment,Uu),tg=p(Uu),$l=s(Uu,"P",{});var pM=r($l);og=d(pM,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),pM.forEach(t),Uu.forEach(t),ae.forEach(t),Up=p(o),go=s(o,"H2",{class:!0});var Xu=r(go);ln=s(Xu,"A",{id:!0,class:!0,href:!0});var uM=r(ln);xl=s(uM,"SPAN",{});var hM=r(xl);v(Fs.$$.fragment,hM),hM.forEach(t),uM.forEach(t),ng=p(Xu),zl=s(Xu,"SPAN",{});var mM=r(zl);ag=d(mM,"MBart50TokenizerFast"),mM.forEach(t),Xu.forEach(t),Xp=p(o),ee=s(o,"DIV",{class:!0});var De=r(ee);v(qs.$$.fragment,De),sg=p(De),bo=s(De,"P",{});var id=r(bo);rg=d(id,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Fl=s(id,"EM",{});var fM=r(Fl);ig=d(fM,"tokenizers"),fM.forEach(t),dg=d(id,` library). Based on
`),Bs=s(id,"A",{href:!0,rel:!0});var _M=r(Bs);lg=d(_M,"BPE"),_M.forEach(t),cg=d(id,"."),id.forEach(t),pg=p(De),js=s(De,"P",{});var Qu=r(js);ug=d(Qu,"This tokenizer inherits from "),Ai=s(Qu,"A",{href:!0});var gM=r(Ai);hg=d(gM,"PreTrainedTokenizerFast"),gM.forEach(t),mg=d(Qu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Qu.forEach(t),fg=p(De),v(cn.$$.fragment,De),_g=p(De),Se=s(De,"DIV",{class:!0});var Wt=r(Se);v(Cs.$$.fragment,Wt),gg=p(Wt),ql=s(Wt,"P",{});var bM=r(ql);bg=d(bM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),bM.forEach(t),kg=p(Wt),Es=s(Wt,"P",{});var Vu=r(Es);yg=d(Vu,"An MBART-50 sequence has the following format, where "),Bl=s(Vu,"CODE",{});var kM=r(Bl);vg=d(kM,"X"),kM.forEach(t),Tg=d(Vu," represents the sequence:"),Vu.forEach(t),wg=p(Wt),Ps=s(Wt,"UL",{});var Hu=r(Ps);Ss=s(Hu,"LI",{});var Ku=r(Ss);jl=s(Ku,"CODE",{});var yM=r(jl);Mg=d(yM,"input_ids"),yM.forEach(t),$g=d(Ku," (for encoder) "),Cl=s(Ku,"CODE",{});var vM=r(Cl);xg=d(vM,"[src_lang_code] X [eos]"),vM.forEach(t),Ku.forEach(t),zg=p(Hu),Os=s(Hu,"LI",{});var Ju=r(Os);El=s(Ju,"CODE",{});var TM=r(El);Fg=d(TM,"labels"),TM.forEach(t),qg=d(Ju,": (for decoder) "),Pl=s(Ju,"CODE",{});var wM=r(Pl);Bg=d(wM,"[tgt_lang_code] X [eos]"),wM.forEach(t),Ju.forEach(t),Hu.forEach(t),jg=p(Wt),Sl=s(Wt,"P",{});var MM=r(Sl);Cg=d(MM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),MM.forEach(t),Wt.forEach(t),Eg=p(De),pn=s(De,"DIV",{class:!0});var Zu=r(pn);v(As.$$.fragment,Zu),Pg=p(Zu),Ol=s(Zu,"P",{});var $M=r(Ol);Sg=d($M,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),$M.forEach(t),Zu.forEach(t),Og=p(De),un=s(De,"DIV",{class:!0});var Yu=r(un);v(Is.$$.fragment,Yu),Ag=p(Yu),Al=s(Yu,"P",{});var xM=r(Al);Ig=d(xM,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),xM.forEach(t),Yu.forEach(t),De.forEach(t),Qp=p(o),ko=s(o,"H2",{class:!0});var eh=r(ko);hn=s(eh,"A",{id:!0,class:!0,href:!0});var zM=r(hn);Il=s(zM,"SPAN",{});var FM=r(Il);v(Ns.$$.fragment,FM),FM.forEach(t),zM.forEach(t),Ng=p(eh),Nl=s(eh,"SPAN",{});var qM=r(Nl);Dg=d(qM,"MBartModel"),qM.forEach(t),eh.forEach(t),Vp=p(o),Ze=s(o,"DIV",{class:!0});var Ma=r(Ze);v(Ds.$$.fragment,Ma),Lg=p(Ma),Ls=s(Ma,"P",{});var th=r(Ls);Gg=d(th,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ii=s(th,"A",{href:!0});var BM=r(Ii);Wg=d(BM,"PreTrainedModel"),BM.forEach(t),Rg=d(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(t),Ug=p(Ma),Gs=s(Ma,"P",{});var oh=r(Gs);Xg=d(oh,"This model is also a PyTorch "),Ws=s(oh,"A",{href:!0,rel:!0});var jM=r(Ws);Qg=d(jM,"torch.nn.Module"),jM.forEach(t),Vg=d(oh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oh.forEach(t),Hg=p(Ma),dt=s(Ma,"DIV",{class:!0});var $a=r(dt);v(Rs.$$.fragment,$a),Kg=p($a),yo=s($a,"P",{});var dd=r(yo);Jg=d(dd,"The "),Ni=s(dd,"A",{href:!0});var CM=r(Ni);Zg=d(CM,"MBartModel"),CM.forEach(t),Yg=d(dd," forward method, overrides the "),Dl=s(dd,"CODE",{});var EM=r(Dl);eb=d(EM,"__call__"),EM.forEach(t),tb=d(dd," special method."),dd.forEach(t),ob=p($a),v(mn.$$.fragment,$a),nb=p($a),v(fn.$$.fragment,$a),$a.forEach(t),Ma.forEach(t),Hp=p(o),vo=s(o,"H2",{class:!0});var nh=r(vo);_n=s(nh,"A",{id:!0,class:!0,href:!0});var PM=r(_n);Ll=s(PM,"SPAN",{});var SM=r(Ll);v(Us.$$.fragment,SM),SM.forEach(t),PM.forEach(t),ab=p(nh),Gl=s(nh,"SPAN",{});var OM=r(Gl);sb=d(OM,"MBartForConditionalGeneration"),OM.forEach(t),nh.forEach(t),Kp=p(o),Ye=s(o,"DIV",{class:!0});var xa=r(Ye);v(Xs.$$.fragment,xa),rb=p(xa),Qs=s(xa,"P",{});var ah=r(Qs);ib=d(ah,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Di=s(ah,"A",{href:!0});var AM=r(Di);db=d(AM,"PreTrainedModel"),AM.forEach(t),lb=d(ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ah.forEach(t),cb=p(xa),Vs=s(xa,"P",{});var sh=r(Vs);pb=d(sh,"This model is also a PyTorch "),Hs=s(sh,"A",{href:!0,rel:!0});var IM=r(Hs);ub=d(IM,"torch.nn.Module"),IM.forEach(t),hb=d(sh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sh.forEach(t),mb=p(xa),Oe=s(xa,"DIV",{class:!0});var Rt=r(Oe);v(Ks.$$.fragment,Rt),fb=p(Rt),To=s(Rt,"P",{});var ld=r(To);_b=d(ld,"The "),Li=s(ld,"A",{href:!0});var NM=r(Li);gb=d(NM,"MBartForConditionalGeneration"),NM.forEach(t),bb=d(ld," forward method, overrides the "),Wl=s(ld,"CODE",{});var DM=r(Wl);kb=d(DM,"__call__"),DM.forEach(t),yb=d(ld," special method."),ld.forEach(t),vb=p(Rt),v(gn.$$.fragment,Rt),Tb=p(Rt),v(bn.$$.fragment,Rt),wb=p(Rt),v(kn.$$.fragment,Rt),Rt.forEach(t),xa.forEach(t),Jp=p(o),wo=s(o,"H2",{class:!0});var rh=r(wo);yn=s(rh,"A",{id:!0,class:!0,href:!0});var LM=r(yn);Rl=s(LM,"SPAN",{});var GM=r(Rl);v(Js.$$.fragment,GM),GM.forEach(t),LM.forEach(t),Mb=p(rh),Ul=s(rh,"SPAN",{});var WM=r(Ul);$b=d(WM,"MBartForQuestionAnswering"),WM.forEach(t),rh.forEach(t),Zp=p(o),qe=s(o,"DIV",{class:!0});var Ut=r(qe);v(Zs.$$.fragment,Ut),xb=p(Ut),Mo=s(Ut,"P",{});var cd=r(Mo);zb=d(cd,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Xl=s(cd,"CODE",{});var RM=r(Xl);Fb=d(RM,"span start logits"),RM.forEach(t),qb=d(cd," and "),Ql=s(cd,"CODE",{});var UM=r(Ql);Bb=d(UM,"span end logits"),UM.forEach(t),jb=d(cd,")."),cd.forEach(t),Cb=p(Ut),Ys=s(Ut,"P",{});var ih=r(Ys);Eb=d(ih,"This model inherits from "),Gi=s(ih,"A",{href:!0});var XM=r(Gi);Pb=d(XM,"PreTrainedModel"),XM.forEach(t),Sb=d(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),Ob=p(Ut),er=s(Ut,"P",{});var dh=r(er);Ab=d(dh,"This model is also a PyTorch "),tr=s(dh,"A",{href:!0,rel:!0});var QM=r(tr);Ib=d(QM,"torch.nn.Module"),QM.forEach(t),Nb=d(dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dh.forEach(t),Db=p(Ut),Ae=s(Ut,"DIV",{class:!0});var Xt=r(Ae);v(or.$$.fragment,Xt),Lb=p(Xt),$o=s(Xt,"P",{});var pd=r($o);Gb=d(pd,"The "),Wi=s(pd,"A",{href:!0});var VM=r(Wi);Wb=d(VM,"MBartForQuestionAnswering"),VM.forEach(t),Rb=d(pd," forward method, overrides the "),Vl=s(pd,"CODE",{});var HM=r(Vl);Ub=d(HM,"__call__"),HM.forEach(t),Xb=d(pd," special method."),pd.forEach(t),Qb=p(Xt),v(vn.$$.fragment,Xt),Vb=p(Xt),v(Tn.$$.fragment,Xt),Hb=p(Xt),v(wn.$$.fragment,Xt),Xt.forEach(t),Ut.forEach(t),Yp=p(o),xo=s(o,"H2",{class:!0});var lh=r(xo);Mn=s(lh,"A",{id:!0,class:!0,href:!0});var KM=r(Mn);Hl=s(KM,"SPAN",{});var JM=r(Hl);v(nr.$$.fragment,JM),JM.forEach(t),KM.forEach(t),Kb=p(lh),Kl=s(lh,"SPAN",{});var ZM=r(Kl);Jb=d(ZM,"MBartForSequenceClassification"),ZM.forEach(t),lh.forEach(t),eu=p(o),Be=s(o,"DIV",{class:!0});var Qt=r(Be);v(ar.$$.fragment,Qt),Zb=p(Qt),Jl=s(Qt,"P",{});var YM=r(Jl);Yb=d(YM,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),YM.forEach(t),ek=p(Qt),sr=s(Qt,"P",{});var ch=r(sr);tk=d(ch,"This model inherits from "),Ri=s(ch,"A",{href:!0});var e$=r(Ri);ok=d(e$,"PreTrainedModel"),e$.forEach(t),nk=d(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),ak=p(Qt),rr=s(Qt,"P",{});var ph=r(rr);sk=d(ph,"This model is also a PyTorch "),ir=s(ph,"A",{href:!0,rel:!0});var t$=r(ir);rk=d(t$,"torch.nn.Module"),t$.forEach(t),ik=d(ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph.forEach(t),dk=p(Qt),oe=s(Qt,"DIV",{class:!0});var Le=r(oe);v(dr.$$.fragment,Le),lk=p(Le),zo=s(Le,"P",{});var ud=r(zo);ck=d(ud,"The "),Ui=s(ud,"A",{href:!0});var o$=r(Ui);pk=d(o$,"MBartForSequenceClassification"),o$.forEach(t),uk=d(ud," forward method, overrides the "),Zl=s(ud,"CODE",{});var n$=r(Zl);hk=d(n$,"__call__"),n$.forEach(t),mk=d(ud," special method."),ud.forEach(t),fk=p(Le),v($n.$$.fragment,Le),_k=p(Le),v(xn.$$.fragment,Le),gk=p(Le),v(zn.$$.fragment,Le),bk=p(Le),v(Fn.$$.fragment,Le),kk=p(Le),v(qn.$$.fragment,Le),Le.forEach(t),Qt.forEach(t),tu=p(o),Fo=s(o,"H2",{class:!0});var uh=r(Fo);Bn=s(uh,"A",{id:!0,class:!0,href:!0});var a$=r(Bn);Yl=s(a$,"SPAN",{});var s$=r(Yl);v(lr.$$.fragment,s$),s$.forEach(t),a$.forEach(t),yk=p(uh),ec=s(uh,"SPAN",{});var r$=r(ec);vk=d(r$,"MBartForCausalLM"),r$.forEach(t),uh.forEach(t),ou=p(o),qo=s(o,"DIV",{class:!0});var hh=r(qo);v(cr.$$.fragment,hh),Tk=p(hh),jn=s(hh,"DIV",{class:!0});var mh=r(jn);v(pr.$$.fragment,mh),wk=p(mh),v(Cn.$$.fragment,mh),mh.forEach(t),hh.forEach(t),nu=p(o),Bo=s(o,"H2",{class:!0});var fh=r(Bo);En=s(fh,"A",{id:!0,class:!0,href:!0});var i$=r(En);tc=s(i$,"SPAN",{});var d$=r(tc);v(ur.$$.fragment,d$),d$.forEach(t),i$.forEach(t),Mk=p(fh),oc=s(fh,"SPAN",{});var l$=r(oc);$k=d(l$,"TFMBartModel"),l$.forEach(t),fh.forEach(t),au=p(o),je=s(o,"DIV",{class:!0});var Vt=r(je);v(hr.$$.fragment,Vt),xk=p(Vt),mr=s(Vt,"P",{});var _h=r(mr);zk=d(_h,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Xi=s(_h,"A",{href:!0});var c$=r(Xi);Fk=d(c$,"TFPreTrainedModel"),c$.forEach(t),qk=d(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),Bk=p(Vt),fr=s(Vt,"P",{});var gh=r(fr);jk=d(gh,"This model is also a "),_r=s(gh,"A",{href:!0,rel:!0});var p$=r(_r);Ck=d(p$,"tf.keras.Model"),p$.forEach(t),Ek=d(gh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gh.forEach(t),Pk=p(Vt),v(Pn.$$.fragment,Vt),Sk=p(Vt),lt=s(Vt,"DIV",{class:!0});var za=r(lt);v(gr.$$.fragment,za),Ok=p(za),jo=s(za,"P",{});var hd=r(jo);Ak=d(hd,"The "),Qi=s(hd,"A",{href:!0});var u$=r(Qi);Ik=d(u$,"TFMBartModel"),u$.forEach(t),Nk=d(hd," forward method, overrides the "),nc=s(hd,"CODE",{});var h$=r(nc);Dk=d(h$,"__call__"),h$.forEach(t),Lk=d(hd," special method."),hd.forEach(t),Gk=p(za),v(Sn.$$.fragment,za),Wk=p(za),v(On.$$.fragment,za),za.forEach(t),Vt.forEach(t),su=p(o),Co=s(o,"H2",{class:!0});var bh=r(Co);An=s(bh,"A",{id:!0,class:!0,href:!0});var m$=r(An);ac=s(m$,"SPAN",{});var f$=r(ac);v(br.$$.fragment,f$),f$.forEach(t),m$.forEach(t),Rk=p(bh),sc=s(bh,"SPAN",{});var _$=r(sc);Uk=d(_$,"TFMBartForConditionalGeneration"),_$.forEach(t),bh.forEach(t),ru=p(o),Ce=s(o,"DIV",{class:!0});var Ht=r(Ce);v(kr.$$.fragment,Ht),Xk=p(Ht),yr=s(Ht,"P",{});var kh=r(yr);Qk=d(kh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vi=s(kh,"A",{href:!0});var g$=r(Vi);Vk=d(g$,"TFPreTrainedModel"),g$.forEach(t),Hk=d(kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh.forEach(t),Kk=p(Ht),vr=s(Ht,"P",{});var yh=r(vr);Jk=d(yh,"This model is also a "),Tr=s(yh,"A",{href:!0,rel:!0});var b$=r(Tr);Zk=d(b$,"tf.keras.Model"),b$.forEach(t),Yk=d(yh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yh.forEach(t),ey=p(Ht),v(In.$$.fragment,Ht),ty=p(Ht),Ie=s(Ht,"DIV",{class:!0});var Kt=r(Ie);v(wr.$$.fragment,Kt),oy=p(Kt),Eo=s(Kt,"P",{});var md=r(Eo);ny=d(md,"The "),Hi=s(md,"A",{href:!0});var k$=r(Hi);ay=d(k$,"TFMBartForConditionalGeneration"),k$.forEach(t),sy=d(md," forward method, overrides the "),rc=s(md,"CODE",{});var y$=r(rc);ry=d(y$,"__call__"),y$.forEach(t),iy=d(md," special method."),md.forEach(t),dy=p(Kt),v(Nn.$$.fragment,Kt),ly=p(Kt),v(Dn.$$.fragment,Kt),cy=p(Kt),v(Ln.$$.fragment,Kt),Kt.forEach(t),Ht.forEach(t),iu=p(o),Po=s(o,"H2",{class:!0});var vh=r(Po);Gn=s(vh,"A",{id:!0,class:!0,href:!0});var v$=r(Gn);ic=s(v$,"SPAN",{});var T$=r(ic);v(Mr.$$.fragment,T$),T$.forEach(t),v$.forEach(t),py=p(vh),dc=s(vh,"SPAN",{});var w$=r(dc);uy=d(w$,"FlaxMBartModel"),w$.forEach(t),vh.forEach(t),du=p(o),Q=s(o,"DIV",{class:!0});var be=r(Q);v($r.$$.fragment,be),hy=p(be),xr=s(be,"P",{});var Th=r(xr);my=d(Th,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ki=s(Th,"A",{href:!0});var M$=r(Ki);fy=d(M$,"FlaxPreTrainedModel"),M$.forEach(t),_y=d(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),gy=p(be),zr=s(be,"P",{});var wh=r(zr);by=d(wh,`This model is also a Flax Linen
`),Fr=s(wh,"A",{href:!0,rel:!0});var $$=r(Fr);ky=d($$,"flax.nn.Module"),$$.forEach(t),yy=d(wh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wh.forEach(t),vy=p(be),lc=s(be,"P",{});var x$=r(lc);Ty=d(x$,"Finally, this model supports inherent JAX features such as:"),x$.forEach(t),wy=p(be),St=s(be,"UL",{});var Fa=r(St);cc=s(Fa,"LI",{});var z$=r(cc);qr=s(z$,"A",{href:!0,rel:!0});var F$=r(qr);My=d(F$,"Just-In-Time (JIT) compilation"),F$.forEach(t),z$.forEach(t),$y=p(Fa),pc=s(Fa,"LI",{});var q$=r(pc);Br=s(q$,"A",{href:!0,rel:!0});var B$=r(Br);xy=d(B$,"Automatic Differentiation"),B$.forEach(t),q$.forEach(t),zy=p(Fa),uc=s(Fa,"LI",{});var j$=r(uc);jr=s(j$,"A",{href:!0,rel:!0});var C$=r(jr);Fy=d(C$,"Vectorization"),C$.forEach(t),j$.forEach(t),qy=p(Fa),hc=s(Fa,"LI",{});var E$=r(hc);Cr=s(E$,"A",{href:!0,rel:!0});var P$=r(Cr);By=d(P$,"Parallelization"),P$.forEach(t),E$.forEach(t),Fa.forEach(t),jy=p(be),ct=s(be,"DIV",{class:!0});var qa=r(ct);v(Er.$$.fragment,qa),Cy=p(qa),So=s(qa,"P",{});var fd=r(So);Ey=d(fd,"The "),mc=s(fd,"CODE",{});var S$=r(mc);Py=d(S$,"FlaxMBartPreTrainedModel"),S$.forEach(t),Sy=d(fd," forward method, overrides the "),fc=s(fd,"CODE",{});var O$=r(fc);Oy=d(O$,"__call__"),O$.forEach(t),Ay=d(fd," special method."),fd.forEach(t),Iy=p(qa),v(Wn.$$.fragment,qa),Ny=p(qa),v(Rn.$$.fragment,qa),qa.forEach(t),Dy=p(be),Un=s(be,"DIV",{class:!0});var Mh=r(Un);v(Pr.$$.fragment,Mh),Ly=p(Mh),v(Xn.$$.fragment,Mh),Mh.forEach(t),Gy=p(be),Qn=s(be,"DIV",{class:!0});var $h=r(Qn);v(Sr.$$.fragment,$h),Wy=p($h),v(Vn.$$.fragment,$h),$h.forEach(t),be.forEach(t),lu=p(o),Oo=s(o,"H2",{class:!0});var xh=r(Oo);Hn=s(xh,"A",{id:!0,class:!0,href:!0});var A$=r(Hn);_c=s(A$,"SPAN",{});var I$=r(_c);v(Or.$$.fragment,I$),I$.forEach(t),A$.forEach(t),Ry=p(xh),gc=s(xh,"SPAN",{});var N$=r(gc);Uy=d(N$,"FlaxMBartForConditionalGeneration"),N$.forEach(t),xh.forEach(t),cu=p(o),V=s(o,"DIV",{class:!0});var ke=r(V);v(Ar.$$.fragment,ke),Xy=p(ke),Ir=s(ke,"P",{});var zh=r(Ir);Qy=d(zh,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ji=s(zh,"A",{href:!0});var D$=r(Ji);Vy=d(D$,"FlaxPreTrainedModel"),D$.forEach(t),Hy=d(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Ky=p(ke),Nr=s(ke,"P",{});var Fh=r(Nr);Jy=d(Fh,`This model is also a Flax Linen
`),Dr=s(Fh,"A",{href:!0,rel:!0});var L$=r(Dr);Zy=d(L$,"flax.nn.Module"),L$.forEach(t),Yy=d(Fh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fh.forEach(t),ev=p(ke),bc=s(ke,"P",{});var G$=r(bc);tv=d(G$,"Finally, this model supports inherent JAX features such as:"),G$.forEach(t),ov=p(ke),Ot=s(ke,"UL",{});var Ba=r(Ot);kc=s(Ba,"LI",{});var W$=r(kc);Lr=s(W$,"A",{href:!0,rel:!0});var R$=r(Lr);nv=d(R$,"Just-In-Time (JIT) compilation"),R$.forEach(t),W$.forEach(t),av=p(Ba),yc=s(Ba,"LI",{});var U$=r(yc);Gr=s(U$,"A",{href:!0,rel:!0});var X$=r(Gr);sv=d(X$,"Automatic Differentiation"),X$.forEach(t),U$.forEach(t),rv=p(Ba),vc=s(Ba,"LI",{});var Q$=r(vc);Wr=s(Q$,"A",{href:!0,rel:!0});var V$=r(Wr);iv=d(V$,"Vectorization"),V$.forEach(t),Q$.forEach(t),dv=p(Ba),Tc=s(Ba,"LI",{});var H$=r(Tc);Rr=s(H$,"A",{href:!0,rel:!0});var K$=r(Rr);lv=d(K$,"Parallelization"),K$.forEach(t),H$.forEach(t),Ba.forEach(t),cv=p(ke),Ne=s(ke,"DIV",{class:!0});var Jt=r(Ne);v(Ur.$$.fragment,Jt),pv=p(Jt),Ao=s(Jt,"P",{});var _d=r(Ao);uv=d(_d,"The "),wc=s(_d,"CODE",{});var J$=r(wc);hv=d(J$,"FlaxMBartPreTrainedModel"),J$.forEach(t),mv=d(_d," forward method, overrides the "),Mc=s(_d,"CODE",{});var Z$=r(Mc);fv=d(Z$,"__call__"),Z$.forEach(t),_v=d(_d," special method."),_d.forEach(t),gv=p(Jt),v(Kn.$$.fragment,Jt),bv=p(Jt),v(Jn.$$.fragment,Jt),kv=p(Jt),v(Zn.$$.fragment,Jt),Jt.forEach(t),yv=p(ke),Yn=s(ke,"DIV",{class:!0});var qh=r(Yn);v(Xr.$$.fragment,qh),vv=p(qh),v(ea.$$.fragment,qh),qh.forEach(t),Tv=p(ke),ta=s(ke,"DIV",{class:!0});var Bh=r(ta);v(Qr.$$.fragment,Bh),wv=p(Bh),v(oa.$$.fragment,Bh),Bh.forEach(t),ke.forEach(t),pu=p(o),Io=s(o,"H2",{class:!0});var jh=r(Io);na=s(jh,"A",{id:!0,class:!0,href:!0});var Y$=r(na);$c=s(Y$,"SPAN",{});var e2=r($c);v(Vr.$$.fragment,e2),e2.forEach(t),Y$.forEach(t),Mv=p(jh),xc=s(jh,"SPAN",{});var t2=r(xc);$v=d(t2,"FlaxMBartForSequenceClassification"),t2.forEach(t),jh.forEach(t),uu=p(o),G=s(o,"DIV",{class:!0});var se=r(G);v(Hr.$$.fragment,se),xv=p(se),zc=s(se,"P",{});var o2=r(zc);zv=d(o2,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),o2.forEach(t),Fv=p(se),Kr=s(se,"P",{});var Ch=r(Kr);qv=d(Ch,"This model inherits from "),Zi=s(Ch,"A",{href:!0});var n2=r(Zi);Bv=d(n2,"FlaxPreTrainedModel"),n2.forEach(t),jv=d(Ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ch.forEach(t),Cv=p(se),Jr=s(se,"P",{});var Eh=r(Jr);Ev=d(Eh,`This model is also a Flax Linen
`),Zr=s(Eh,"A",{href:!0,rel:!0});var a2=r(Zr);Pv=d(a2,"flax.nn.Module"),a2.forEach(t),Sv=d(Eh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Eh.forEach(t),Ov=p(se),Fc=s(se,"P",{});var s2=r(Fc);Av=d(s2,"Finally, this model supports inherent JAX features such as:"),s2.forEach(t),Iv=p(se),At=s(se,"UL",{});var ja=r(At);qc=s(ja,"LI",{});var r2=r(qc);Yr=s(r2,"A",{href:!0,rel:!0});var i2=r(Yr);Nv=d(i2,"Just-In-Time (JIT) compilation"),i2.forEach(t),r2.forEach(t),Dv=p(ja),Bc=s(ja,"LI",{});var d2=r(Bc);ei=s(d2,"A",{href:!0,rel:!0});var l2=r(ei);Lv=d(l2,"Automatic Differentiation"),l2.forEach(t),d2.forEach(t),Gv=p(ja),jc=s(ja,"LI",{});var c2=r(jc);ti=s(c2,"A",{href:!0,rel:!0});var p2=r(ti);Wv=d(p2,"Vectorization"),p2.forEach(t),c2.forEach(t),Rv=p(ja),Cc=s(ja,"LI",{});var u2=r(Cc);oi=s(u2,"A",{href:!0,rel:!0});var h2=r(oi);Uv=d(h2,"Parallelization"),h2.forEach(t),u2.forEach(t),ja.forEach(t),Xv=p(se),pt=s(se,"DIV",{class:!0});var Ca=r(pt);v(ni.$$.fragment,Ca),Qv=p(Ca),No=s(Ca,"P",{});var gd=r(No);Vv=d(gd,"The "),Ec=s(gd,"CODE",{});var m2=r(Ec);Hv=d(m2,"FlaxMBartPreTrainedModel"),m2.forEach(t),Kv=d(gd," forward method, overrides the "),Pc=s(gd,"CODE",{});var f2=r(Pc);Jv=d(f2,"__call__"),f2.forEach(t),Zv=d(gd," special method."),gd.forEach(t),Yv=p(Ca),v(aa.$$.fragment,Ca),eT=p(Ca),v(sa.$$.fragment,Ca),Ca.forEach(t),tT=p(se),ra=s(se,"DIV",{class:!0});var Ph=r(ra);v(ai.$$.fragment,Ph),oT=p(Ph),v(ia.$$.fragment,Ph),Ph.forEach(t),nT=p(se),da=s(se,"DIV",{class:!0});var Sh=r(da);v(si.$$.fragment,Sh),aT=p(Sh),v(la.$$.fragment,Sh),Sh.forEach(t),se.forEach(t),hu=p(o),Do=s(o,"H2",{class:!0});var Oh=r(Do);ca=s(Oh,"A",{id:!0,class:!0,href:!0});var _2=r(ca);Sc=s(_2,"SPAN",{});var g2=r(Sc);v(ri.$$.fragment,g2),g2.forEach(t),_2.forEach(t),sT=p(Oh),Oc=s(Oh,"SPAN",{});var b2=r(Oc);rT=d(b2,"FlaxMBartForQuestionAnswering"),b2.forEach(t),Oh.forEach(t),mu=p(o),W=s(o,"DIV",{class:!0});var re=r(W);v(ii.$$.fragment,re),iT=p(re),Lo=s(re,"P",{});var bd=r(Lo);dT=d(bd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ac=s(bd,"CODE",{});var k2=r(Ac);lT=d(k2,"span start logits"),k2.forEach(t),cT=d(bd," and "),Ic=s(bd,"CODE",{});var y2=r(Ic);pT=d(y2,"span end logits"),y2.forEach(t),uT=d(bd,")."),bd.forEach(t),hT=p(re),di=s(re,"P",{});var Ah=r(di);mT=d(Ah,"This model inherits from "),Yi=s(Ah,"A",{href:!0});var v2=r(Yi);fT=d(v2,"FlaxPreTrainedModel"),v2.forEach(t),_T=d(Ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah.forEach(t),gT=p(re),li=s(re,"P",{});var Ih=r(li);bT=d(Ih,`This model is also a Flax Linen
`),ci=s(Ih,"A",{href:!0,rel:!0});var T2=r(ci);kT=d(T2,"flax.nn.Module"),T2.forEach(t),yT=d(Ih,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ih.forEach(t),vT=p(re),Nc=s(re,"P",{});var w2=r(Nc);TT=d(w2,"Finally, this model supports inherent JAX features such as:"),w2.forEach(t),wT=p(re),It=s(re,"UL",{});var Ea=r(It);Dc=s(Ea,"LI",{});var M2=r(Dc);pi=s(M2,"A",{href:!0,rel:!0});var $2=r(pi);MT=d($2,"Just-In-Time (JIT) compilation"),$2.forEach(t),M2.forEach(t),$T=p(Ea),Lc=s(Ea,"LI",{});var x2=r(Lc);ui=s(x2,"A",{href:!0,rel:!0});var z2=r(ui);xT=d(z2,"Automatic Differentiation"),z2.forEach(t),x2.forEach(t),zT=p(Ea),Gc=s(Ea,"LI",{});var F2=r(Gc);hi=s(F2,"A",{href:!0,rel:!0});var q2=r(hi);FT=d(q2,"Vectorization"),q2.forEach(t),F2.forEach(t),qT=p(Ea),Wc=s(Ea,"LI",{});var B2=r(Wc);mi=s(B2,"A",{href:!0,rel:!0});var j2=r(mi);BT=d(j2,"Parallelization"),j2.forEach(t),B2.forEach(t),Ea.forEach(t),jT=p(re),ut=s(re,"DIV",{class:!0});var Pa=r(ut);v(fi.$$.fragment,Pa),CT=p(Pa),Go=s(Pa,"P",{});var kd=r(Go);ET=d(kd,"The "),Rc=s(kd,"CODE",{});var C2=r(Rc);PT=d(C2,"FlaxMBartPreTrainedModel"),C2.forEach(t),ST=d(kd," forward method, overrides the "),Uc=s(kd,"CODE",{});var E2=r(Uc);OT=d(E2,"__call__"),E2.forEach(t),AT=d(kd," special method."),kd.forEach(t),IT=p(Pa),v(pa.$$.fragment,Pa),NT=p(Pa),v(ua.$$.fragment,Pa),Pa.forEach(t),DT=p(re),ha=s(re,"DIV",{class:!0});var Nh=r(ha);v(_i.$$.fragment,Nh),LT=p(Nh),v(ma.$$.fragment,Nh),Nh.forEach(t),GT=p(re),fa=s(re,"DIV",{class:!0});var Dh=r(fa);v(gi.$$.fragment,Dh),WT=p(Dh),v(_a.$$.fragment,Dh),Dh.forEach(t),re.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(qx)),f(h,"id","mbart-and-mbart50"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#mbart-and-mbart50"),f(m,"class","relative group"),f(ye,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(ye,"rel","nofollow"),f(ue,"id","overview-of-mbart"),f(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ue,"href","#overview-of-mbart"),f(X,"class","relative group"),f(Me,"href","https://arxiv.org/abs/2001.08210"),f(Me,"rel","nofollow"),f(J,"href","https://huggingface.co/valhalla"),f(J,"rel","nofollow"),f(A,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),f(A,"rel","nofollow"),f(_e,"id","training-of-mbart"),f(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_e,"href","#training-of-mbart"),f(de,"class","relative group"),f(Ke,"href","/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),f(Ro,"id","overview-of-mbart50"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#overview-of-mbart50"),f(so,"class","relative group"),f(Na,"href","https://arxiv.org/abs/2008.00401"),f(Na,"rel","nofollow"),f(Uo,"id","training-of-mbart50"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#training-of-mbart50"),f(ro,"class","relative group"),f(zi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBart50Tokenizer"),f(Qo,"id","transformers.MBartConfig"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.MBartConfig"),f(io,"class","relative group"),f(Bi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(Xa,"href","https://huggingface.co/facebook/mbart-large-cc25"),f(Xa,"rel","nofollow"),f(ji,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ci,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.MBartTokenizer"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.MBartTokenizer"),f(po,"class","relative group"),f(Ei,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),f(Pi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(Ha,"href","https://github.com/google/sentencepiece"),f(Ha,"rel","nofollow"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.MBartTokenizerFast"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.MBartTokenizerFast"),f(ho,"class","relative group"),f(ns,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(ns,"rel","nofollow"),f(Si,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.MBart50Tokenizer"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.MBart50Tokenizer"),f(_o,"class","relative group"),f(_s,"href","https://github.com/google/sentencepiece"),f(_s,"rel","nofollow"),f(Oi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(an,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.MBart50TokenizerFast"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.MBart50TokenizerFast"),f(go,"class","relative group"),f(Bs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(Bs,"rel","nofollow"),f(Ai,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.MBartModel"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.MBartModel"),f(ko,"class","relative group"),f(Ii,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ws,"rel","nofollow"),f(Ni,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_n,"id","transformers.MBartForConditionalGeneration"),f(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_n,"href","#transformers.MBartForConditionalGeneration"),f(vo,"class","relative group"),f(Di,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Hs,"rel","nofollow"),f(Li,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yn,"id","transformers.MBartForQuestionAnswering"),f(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yn,"href","#transformers.MBartForQuestionAnswering"),f(wo,"class","relative group"),f(Gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(tr,"rel","nofollow"),f(Wi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.MBartForSequenceClassification"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.MBartForSequenceClassification"),f(xo,"class","relative group"),f(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ir,"rel","nofollow"),f(Ui,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForSequenceClassification"),f(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bn,"id","transformers.MBartForCausalLM"),f(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bn,"href","#transformers.MBartForCausalLM"),f(Fo,"class","relative group"),f(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"id","transformers.TFMBartModel"),f(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(En,"href","#transformers.TFMBartModel"),f(Bo,"class","relative group"),f(Xi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(_r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(_r,"rel","nofollow"),f(Qi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(An,"id","transformers.TFMBartForConditionalGeneration"),f(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(An,"href","#transformers.TFMBartForConditionalGeneration"),f(Co,"class","relative group"),f(Vi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Tr,"rel","nofollow"),f(Hi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"id","transformers.FlaxMBartModel"),f(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gn,"href","#transformers.FlaxMBartModel"),f(Po,"class","relative group"),f(Ki,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Fr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Fr,"rel","nofollow"),f(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(qr,"rel","nofollow"),f(Br,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Br,"rel","nofollow"),f(jr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(jr,"rel","nofollow"),f(Cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Cr,"rel","nofollow"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hn,"id","transformers.FlaxMBartForConditionalGeneration"),f(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hn,"href","#transformers.FlaxMBartForConditionalGeneration"),f(Oo,"class","relative group"),f(Ji,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Dr,"rel","nofollow"),f(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Lr,"rel","nofollow"),f(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Gr,"rel","nofollow"),f(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Wr,"rel","nofollow"),f(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Rr,"rel","nofollow"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(na,"id","transformers.FlaxMBartForSequenceClassification"),f(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(na,"href","#transformers.FlaxMBartForSequenceClassification"),f(Io,"class","relative group"),f(Zi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Zr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Zr,"rel","nofollow"),f(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Yr,"rel","nofollow"),f(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ei,"rel","nofollow"),f(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ti,"rel","nofollow"),f(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(oi,"rel","nofollow"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ra,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(da,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ca,"id","transformers.FlaxMBartForQuestionAnswering"),f(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ca,"href","#transformers.FlaxMBartForQuestionAnswering"),f(Do,"class","relative group"),f(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ci,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ci,"rel","nofollow"),f(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pi,"rel","nofollow"),f(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ui,"rel","nofollow"),f(hi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(hi,"rel","nofollow"),f(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(mi,"rel","nofollow"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ha,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),b(o,k,_),b(o,m,_),e(m,h),e(h,g),T(n,g,null),e(m,u),e(m,q),e(q,_t),b(o,tt,_),b(o,U,_),e(U,Ge),e(Ge,We),e(U,B),e(U,ye),e(ye,ve),e(U,gt),b(o,ot,_),b(o,X,_),e(X,ue),e(ue,Re),T(K,Re,null),e(X,bt),e(X,Ue),e(Ue,Te),b(o,nt,_),b(o,he,_),e(he,we),e(he,Me),e(Me,kt),e(he,Xe),b(o,O,_),b(o,I,_),e(I,yt),b(o,me,_),b(o,ie,_),e(ie,vt),e(ie,J),e(J,Tt),e(ie,wt),e(ie,A),e(A,Mt),b(o,fe,_),b(o,de,_),e(de,_e),e(_e,le),T($e,le,null),e(de,$t),e(de,Z),e(Z,xt),b(o,ge,_),b(o,R,_),e(R,Qe),e(R,N),e(N,zt),e(R,Y),e(R,Ve),e(Ve,Ft),e(R,z),e(R,j),e(j,Zt),e(R,He),e(R,qt),e(qt,Yt),e(R,S),b(o,Dt,_),b(o,te,_),e(te,eo),e(te,Ke),e(Ke,Bt),e(Bt,ce),e(Ke,xe),e(te,to),e(te,jt),e(jt,ze),e(te,oo),e(te,Ct),e(Ct,Et),e(te,no),b(o,Ee,_),b(o,at,_),e(at,yd),e(yd,Lh),b(o,wp,_),T(Sa,o,_),b(o,Mp,_),b(o,Mi,_),e(Mi,Oa),e(Oa,vd),e(vd,Gh),e(Oa,Wh),e(Oa,ao),e(ao,Rh),e(ao,Td),e(Td,Uh),e(ao,Xh),e(ao,wd),e(wd,Qh),e(ao,Vh),b(o,$p,_),T(Aa,o,_),b(o,xp,_),b(o,so,_),e(so,Ro),e(Ro,Md),T(Ia,Md,null),e(so,Hh),e(so,$d),e($d,Kh),b(o,zp,_),b(o,Lt,_),e(Lt,Jh),e(Lt,Na),e(Na,Zh),e(Lt,Yh),e(Lt,xd),e(xd,em),e(Lt,tm),b(o,Fp,_),b(o,$i,_),e($i,om),b(o,qp,_),b(o,xi,_),e(xi,zd),e(zd,nm),b(o,Bp,_),b(o,ro,_),e(ro,Uo),e(Uo,Fd),T(Da,Fd,null),e(ro,am),e(ro,qd),e(qd,sm),b(o,jp,_),b(o,st,_),e(st,rm),e(st,Bd),e(Bd,im),e(st,dm),e(st,jd),e(jd,lm),e(st,cm),e(st,Cd),e(Cd,pm),e(st,um),b(o,Cp,_),b(o,Xo,_),e(Xo,hm),e(Xo,zi),e(zi,mm),e(Xo,fm),b(o,Ep,_),b(o,Fi,_),e(Fi,Ed),e(Ed,_m),b(o,Pp,_),T(La,o,_),b(o,Sp,_),b(o,qi,_),e(qi,Ga),e(Ga,Pd),e(Pd,gm),e(Ga,bm),e(Ga,Fe),e(Fe,km),e(Fe,Sd),e(Sd,ym),e(Fe,vm),e(Fe,Od),e(Od,Tm),e(Fe,wm),e(Fe,Ad),e(Ad,Mm),e(Fe,$m),e(Fe,Id),e(Id,xm),e(Fe,zm),e(Fe,Nd),e(Nd,Fm),e(Fe,qm),b(o,Op,_),T(Wa,o,_),b(o,Ap,_),b(o,io,_),e(io,Qo),e(Qo,Dd),T(Ra,Dd,null),e(io,Bm),e(io,Ld),e(Ld,jm),b(o,Ip,_),b(o,Je,_),T(Ua,Je,null),e(Je,Cm),e(Je,lo),e(lo,Em),e(lo,Bi),e(Bi,Pm),e(lo,Sm),e(lo,Xa),e(Xa,Om),e(lo,Am),e(Je,Im),e(Je,co),e(co,Nm),e(co,ji),e(ji,Dm),e(co,Lm),e(co,Ci),e(Ci,Gm),e(co,Wm),e(Je,Rm),T(Vo,Je,null),b(o,Np,_),b(o,po,_),e(po,Ho),e(Ho,Gd),T(Qa,Gd,null),e(po,Um),e(po,Wd),e(Wd,Xm),b(o,Dp,_),b(o,pe,_),T(Va,pe,null),e(pe,Qm),e(pe,Rd),e(Rd,Vm),e(pe,Hm),e(pe,Pt),e(Pt,Km),e(Pt,Ei),e(Ei,Jm),e(Pt,Zm),e(Pt,Pi),e(Pi,Ym),e(Pt,ef),e(Pt,Ha),e(Ha,tf),e(Pt,of),e(pe,nf),e(pe,uo),e(uo,af),e(uo,Ud),e(Ud,sf),e(uo,rf),e(uo,Xd),e(Xd,df),e(uo,lf),e(pe,cf),T(Ko,pe,null),e(pe,pf),e(pe,rt),T(Ka,rt,null),e(rt,uf),e(rt,Ja),e(Ja,hf),e(Ja,Qd),e(Qd,mf),e(Ja,ff),e(rt,_f),e(rt,Za),e(Za,Ya),e(Ya,Vd),e(Vd,gf),e(Ya,bf),e(Ya,Hd),e(Hd,kf),e(Za,yf),e(Za,es),e(es,Kd),e(Kd,vf),e(es,Tf),e(es,Jd),e(Jd,wf),e(rt,Mf),e(rt,Zd),e(Zd,$f),b(o,Lp,_),b(o,ho,_),e(ho,Jo),e(Jo,Yd),T(ts,Yd,null),e(ho,xf),e(ho,el),e(el,zf),b(o,Gp,_),b(o,D,_),T(os,D,null),e(D,Ff),e(D,mo),e(mo,qf),e(mo,tl),e(tl,Bf),e(mo,jf),e(mo,ns),e(ns,Cf),e(mo,Ef),e(D,Pf),e(D,as),e(as,Sf),e(as,Si),e(Si,Of),e(as,Af),e(D,If),e(D,fo),e(fo,Nf),e(fo,ol),e(ol,Df),e(fo,Lf),e(fo,nl),e(nl,Gf),e(fo,Wf),e(D,Rf),T(Zo,D,null),e(D,Uf),e(D,Pe),T(ss,Pe,null),e(Pe,Xf),e(Pe,al),e(al,Qf),e(Pe,Vf),e(Pe,rs),e(rs,Hf),e(rs,sl),e(sl,Kf),e(rs,Jf),e(Pe,Zf),e(Pe,is),e(is,ds),e(ds,rl),e(rl,Yf),e(ds,e_),e(ds,il),e(il,t_),e(is,o_),e(is,ls),e(ls,dl),e(dl,n_),e(ls,a_),e(ls,ll),e(ll,s_),e(Pe,r_),e(Pe,cl),e(cl,i_),e(D,d_),e(D,Yo),T(cs,Yo,null),e(Yo,l_),e(Yo,pl),e(pl,c_),e(D,p_),e(D,en),T(ps,en,null),e(en,u_),e(en,ul),e(ul,h_),e(D,m_),e(D,tn),T(us,tn,null),e(tn,f_),e(tn,hl),e(hl,__),b(o,Wp,_),b(o,_o,_),e(_o,on),e(on,ml),T(hs,ml,null),e(_o,g_),e(_o,fl),e(fl,b_),b(o,Rp,_),b(o,L,_),T(ms,L,null),e(L,k_),e(L,fs),e(fs,y_),e(fs,_s),e(_s,v_),e(fs,T_),e(L,w_),e(L,gs),e(gs,M_),e(gs,Oi),e(Oi,$_),e(gs,x_),e(L,z_),T(nn,L,null),e(L,F_),e(L,it),T(bs,it,null),e(it,q_),e(it,ks),e(ks,B_),e(ks,_l),e(_l,j_),e(ks,C_),e(it,E_),e(it,ys),e(ys,vs),e(vs,gl),e(gl,P_),e(vs,S_),e(vs,bl),e(bl,O_),e(ys,A_),e(ys,Ts),e(Ts,kl),e(kl,I_),e(Ts,N_),e(Ts,yl),e(yl,D_),e(it,L_),e(it,vl),e(vl,G_),e(L,W_),e(L,an),T(ws,an,null),e(an,R_),e(an,Tl),e(Tl,U_),e(L,X_),e(L,sn),T(Ms,sn,null),e(sn,Q_),e(sn,$s),e($s,V_),e($s,wl),e(wl,H_),e($s,K_),e(L,J_),e(L,rn),T(xs,rn,null),e(rn,Z_),e(rn,Ml),e(Ml,Y_),e(L,eg),e(L,dn),T(zs,dn,null),e(dn,tg),e(dn,$l),e($l,og),b(o,Up,_),b(o,go,_),e(go,ln),e(ln,xl),T(Fs,xl,null),e(go,ng),e(go,zl),e(zl,ag),b(o,Xp,_),b(o,ee,_),T(qs,ee,null),e(ee,sg),e(ee,bo),e(bo,rg),e(bo,Fl),e(Fl,ig),e(bo,dg),e(bo,Bs),e(Bs,lg),e(bo,cg),e(ee,pg),e(ee,js),e(js,ug),e(js,Ai),e(Ai,hg),e(js,mg),e(ee,fg),T(cn,ee,null),e(ee,_g),e(ee,Se),T(Cs,Se,null),e(Se,gg),e(Se,ql),e(ql,bg),e(Se,kg),e(Se,Es),e(Es,yg),e(Es,Bl),e(Bl,vg),e(Es,Tg),e(Se,wg),e(Se,Ps),e(Ps,Ss),e(Ss,jl),e(jl,Mg),e(Ss,$g),e(Ss,Cl),e(Cl,xg),e(Ps,zg),e(Ps,Os),e(Os,El),e(El,Fg),e(Os,qg),e(Os,Pl),e(Pl,Bg),e(Se,jg),e(Se,Sl),e(Sl,Cg),e(ee,Eg),e(ee,pn),T(As,pn,null),e(pn,Pg),e(pn,Ol),e(Ol,Sg),e(ee,Og),e(ee,un),T(Is,un,null),e(un,Ag),e(un,Al),e(Al,Ig),b(o,Qp,_),b(o,ko,_),e(ko,hn),e(hn,Il),T(Ns,Il,null),e(ko,Ng),e(ko,Nl),e(Nl,Dg),b(o,Vp,_),b(o,Ze,_),T(Ds,Ze,null),e(Ze,Lg),e(Ze,Ls),e(Ls,Gg),e(Ls,Ii),e(Ii,Wg),e(Ls,Rg),e(Ze,Ug),e(Ze,Gs),e(Gs,Xg),e(Gs,Ws),e(Ws,Qg),e(Gs,Vg),e(Ze,Hg),e(Ze,dt),T(Rs,dt,null),e(dt,Kg),e(dt,yo),e(yo,Jg),e(yo,Ni),e(Ni,Zg),e(yo,Yg),e(yo,Dl),e(Dl,eb),e(yo,tb),e(dt,ob),T(mn,dt,null),e(dt,nb),T(fn,dt,null),b(o,Hp,_),b(o,vo,_),e(vo,_n),e(_n,Ll),T(Us,Ll,null),e(vo,ab),e(vo,Gl),e(Gl,sb),b(o,Kp,_),b(o,Ye,_),T(Xs,Ye,null),e(Ye,rb),e(Ye,Qs),e(Qs,ib),e(Qs,Di),e(Di,db),e(Qs,lb),e(Ye,cb),e(Ye,Vs),e(Vs,pb),e(Vs,Hs),e(Hs,ub),e(Vs,hb),e(Ye,mb),e(Ye,Oe),T(Ks,Oe,null),e(Oe,fb),e(Oe,To),e(To,_b),e(To,Li),e(Li,gb),e(To,bb),e(To,Wl),e(Wl,kb),e(To,yb),e(Oe,vb),T(gn,Oe,null),e(Oe,Tb),T(bn,Oe,null),e(Oe,wb),T(kn,Oe,null),b(o,Jp,_),b(o,wo,_),e(wo,yn),e(yn,Rl),T(Js,Rl,null),e(wo,Mb),e(wo,Ul),e(Ul,$b),b(o,Zp,_),b(o,qe,_),T(Zs,qe,null),e(qe,xb),e(qe,Mo),e(Mo,zb),e(Mo,Xl),e(Xl,Fb),e(Mo,qb),e(Mo,Ql),e(Ql,Bb),e(Mo,jb),e(qe,Cb),e(qe,Ys),e(Ys,Eb),e(Ys,Gi),e(Gi,Pb),e(Ys,Sb),e(qe,Ob),e(qe,er),e(er,Ab),e(er,tr),e(tr,Ib),e(er,Nb),e(qe,Db),e(qe,Ae),T(or,Ae,null),e(Ae,Lb),e(Ae,$o),e($o,Gb),e($o,Wi),e(Wi,Wb),e($o,Rb),e($o,Vl),e(Vl,Ub),e($o,Xb),e(Ae,Qb),T(vn,Ae,null),e(Ae,Vb),T(Tn,Ae,null),e(Ae,Hb),T(wn,Ae,null),b(o,Yp,_),b(o,xo,_),e(xo,Mn),e(Mn,Hl),T(nr,Hl,null),e(xo,Kb),e(xo,Kl),e(Kl,Jb),b(o,eu,_),b(o,Be,_),T(ar,Be,null),e(Be,Zb),e(Be,Jl),e(Jl,Yb),e(Be,ek),e(Be,sr),e(sr,tk),e(sr,Ri),e(Ri,ok),e(sr,nk),e(Be,ak),e(Be,rr),e(rr,sk),e(rr,ir),e(ir,rk),e(rr,ik),e(Be,dk),e(Be,oe),T(dr,oe,null),e(oe,lk),e(oe,zo),e(zo,ck),e(zo,Ui),e(Ui,pk),e(zo,uk),e(zo,Zl),e(Zl,hk),e(zo,mk),e(oe,fk),T($n,oe,null),e(oe,_k),T(xn,oe,null),e(oe,gk),T(zn,oe,null),e(oe,bk),T(Fn,oe,null),e(oe,kk),T(qn,oe,null),b(o,tu,_),b(o,Fo,_),e(Fo,Bn),e(Bn,Yl),T(lr,Yl,null),e(Fo,yk),e(Fo,ec),e(ec,vk),b(o,ou,_),b(o,qo,_),T(cr,qo,null),e(qo,Tk),e(qo,jn),T(pr,jn,null),e(jn,wk),T(Cn,jn,null),b(o,nu,_),b(o,Bo,_),e(Bo,En),e(En,tc),T(ur,tc,null),e(Bo,Mk),e(Bo,oc),e(oc,$k),b(o,au,_),b(o,je,_),T(hr,je,null),e(je,xk),e(je,mr),e(mr,zk),e(mr,Xi),e(Xi,Fk),e(mr,qk),e(je,Bk),e(je,fr),e(fr,jk),e(fr,_r),e(_r,Ck),e(fr,Ek),e(je,Pk),T(Pn,je,null),e(je,Sk),e(je,lt),T(gr,lt,null),e(lt,Ok),e(lt,jo),e(jo,Ak),e(jo,Qi),e(Qi,Ik),e(jo,Nk),e(jo,nc),e(nc,Dk),e(jo,Lk),e(lt,Gk),T(Sn,lt,null),e(lt,Wk),T(On,lt,null),b(o,su,_),b(o,Co,_),e(Co,An),e(An,ac),T(br,ac,null),e(Co,Rk),e(Co,sc),e(sc,Uk),b(o,ru,_),b(o,Ce,_),T(kr,Ce,null),e(Ce,Xk),e(Ce,yr),e(yr,Qk),e(yr,Vi),e(Vi,Vk),e(yr,Hk),e(Ce,Kk),e(Ce,vr),e(vr,Jk),e(vr,Tr),e(Tr,Zk),e(vr,Yk),e(Ce,ey),T(In,Ce,null),e(Ce,ty),e(Ce,Ie),T(wr,Ie,null),e(Ie,oy),e(Ie,Eo),e(Eo,ny),e(Eo,Hi),e(Hi,ay),e(Eo,sy),e(Eo,rc),e(rc,ry),e(Eo,iy),e(Ie,dy),T(Nn,Ie,null),e(Ie,ly),T(Dn,Ie,null),e(Ie,cy),T(Ln,Ie,null),b(o,iu,_),b(o,Po,_),e(Po,Gn),e(Gn,ic),T(Mr,ic,null),e(Po,py),e(Po,dc),e(dc,uy),b(o,du,_),b(o,Q,_),T($r,Q,null),e(Q,hy),e(Q,xr),e(xr,my),e(xr,Ki),e(Ki,fy),e(xr,_y),e(Q,gy),e(Q,zr),e(zr,by),e(zr,Fr),e(Fr,ky),e(zr,yy),e(Q,vy),e(Q,lc),e(lc,Ty),e(Q,wy),e(Q,St),e(St,cc),e(cc,qr),e(qr,My),e(St,$y),e(St,pc),e(pc,Br),e(Br,xy),e(St,zy),e(St,uc),e(uc,jr),e(jr,Fy),e(St,qy),e(St,hc),e(hc,Cr),e(Cr,By),e(Q,jy),e(Q,ct),T(Er,ct,null),e(ct,Cy),e(ct,So),e(So,Ey),e(So,mc),e(mc,Py),e(So,Sy),e(So,fc),e(fc,Oy),e(So,Ay),e(ct,Iy),T(Wn,ct,null),e(ct,Ny),T(Rn,ct,null),e(Q,Dy),e(Q,Un),T(Pr,Un,null),e(Un,Ly),T(Xn,Un,null),e(Q,Gy),e(Q,Qn),T(Sr,Qn,null),e(Qn,Wy),T(Vn,Qn,null),b(o,lu,_),b(o,Oo,_),e(Oo,Hn),e(Hn,_c),T(Or,_c,null),e(Oo,Ry),e(Oo,gc),e(gc,Uy),b(o,cu,_),b(o,V,_),T(Ar,V,null),e(V,Xy),e(V,Ir),e(Ir,Qy),e(Ir,Ji),e(Ji,Vy),e(Ir,Hy),e(V,Ky),e(V,Nr),e(Nr,Jy),e(Nr,Dr),e(Dr,Zy),e(Nr,Yy),e(V,ev),e(V,bc),e(bc,tv),e(V,ov),e(V,Ot),e(Ot,kc),e(kc,Lr),e(Lr,nv),e(Ot,av),e(Ot,yc),e(yc,Gr),e(Gr,sv),e(Ot,rv),e(Ot,vc),e(vc,Wr),e(Wr,iv),e(Ot,dv),e(Ot,Tc),e(Tc,Rr),e(Rr,lv),e(V,cv),e(V,Ne),T(Ur,Ne,null),e(Ne,pv),e(Ne,Ao),e(Ao,uv),e(Ao,wc),e(wc,hv),e(Ao,mv),e(Ao,Mc),e(Mc,fv),e(Ao,_v),e(Ne,gv),T(Kn,Ne,null),e(Ne,bv),T(Jn,Ne,null),e(Ne,kv),T(Zn,Ne,null),e(V,yv),e(V,Yn),T(Xr,Yn,null),e(Yn,vv),T(ea,Yn,null),e(V,Tv),e(V,ta),T(Qr,ta,null),e(ta,wv),T(oa,ta,null),b(o,pu,_),b(o,Io,_),e(Io,na),e(na,$c),T(Vr,$c,null),e(Io,Mv),e(Io,xc),e(xc,$v),b(o,uu,_),b(o,G,_),T(Hr,G,null),e(G,xv),e(G,zc),e(zc,zv),e(G,Fv),e(G,Kr),e(Kr,qv),e(Kr,Zi),e(Zi,Bv),e(Kr,jv),e(G,Cv),e(G,Jr),e(Jr,Ev),e(Jr,Zr),e(Zr,Pv),e(Jr,Sv),e(G,Ov),e(G,Fc),e(Fc,Av),e(G,Iv),e(G,At),e(At,qc),e(qc,Yr),e(Yr,Nv),e(At,Dv),e(At,Bc),e(Bc,ei),e(ei,Lv),e(At,Gv),e(At,jc),e(jc,ti),e(ti,Wv),e(At,Rv),e(At,Cc),e(Cc,oi),e(oi,Uv),e(G,Xv),e(G,pt),T(ni,pt,null),e(pt,Qv),e(pt,No),e(No,Vv),e(No,Ec),e(Ec,Hv),e(No,Kv),e(No,Pc),e(Pc,Jv),e(No,Zv),e(pt,Yv),T(aa,pt,null),e(pt,eT),T(sa,pt,null),e(G,tT),e(G,ra),T(ai,ra,null),e(ra,oT),T(ia,ra,null),e(G,nT),e(G,da),T(si,da,null),e(da,aT),T(la,da,null),b(o,hu,_),b(o,Do,_),e(Do,ca),e(ca,Sc),T(ri,Sc,null),e(Do,sT),e(Do,Oc),e(Oc,rT),b(o,mu,_),b(o,W,_),T(ii,W,null),e(W,iT),e(W,Lo),e(Lo,dT),e(Lo,Ac),e(Ac,lT),e(Lo,cT),e(Lo,Ic),e(Ic,pT),e(Lo,uT),e(W,hT),e(W,di),e(di,mT),e(di,Yi),e(Yi,fT),e(di,_T),e(W,gT),e(W,li),e(li,bT),e(li,ci),e(ci,kT),e(li,yT),e(W,vT),e(W,Nc),e(Nc,TT),e(W,wT),e(W,It),e(It,Dc),e(Dc,pi),e(pi,MT),e(It,$T),e(It,Lc),e(Lc,ui),e(ui,xT),e(It,zT),e(It,Gc),e(Gc,hi),e(hi,FT),e(It,qT),e(It,Wc),e(Wc,mi),e(mi,BT),e(W,jT),e(W,ut),T(fi,ut,null),e(ut,CT),e(ut,Go),e(Go,ET),e(Go,Rc),e(Rc,PT),e(Go,ST),e(Go,Uc),e(Uc,OT),e(Go,AT),e(ut,IT),T(pa,ut,null),e(ut,NT),T(ua,ut,null),e(W,DT),e(W,ha),T(_i,ha,null),e(ha,LT),T(ma,ha,null),e(W,GT),e(W,fa),T(gi,fa,null),e(fa,WT),T(_a,fa,null),fu=!0},p(o,[_]){const bi={};_&2&&(bi.$$scope={dirty:_,ctx:o}),Vo.$set(bi);const Xc={};_&2&&(Xc.$$scope={dirty:_,ctx:o}),Ko.$set(Xc);const Qc={};_&2&&(Qc.$$scope={dirty:_,ctx:o}),Zo.$set(Qc);const Vc={};_&2&&(Vc.$$scope={dirty:_,ctx:o}),nn.$set(Vc);const ga={};_&2&&(ga.$$scope={dirty:_,ctx:o}),cn.$set(ga);const Hc={};_&2&&(Hc.$$scope={dirty:_,ctx:o}),mn.$set(Hc);const Kc={};_&2&&(Kc.$$scope={dirty:_,ctx:o}),fn.$set(Kc);const ki={};_&2&&(ki.$$scope={dirty:_,ctx:o}),gn.$set(ki);const Jc={};_&2&&(Jc.$$scope={dirty:_,ctx:o}),bn.$set(Jc);const Zc={};_&2&&(Zc.$$scope={dirty:_,ctx:o}),kn.$set(Zc);const Yc={};_&2&&(Yc.$$scope={dirty:_,ctx:o}),vn.$set(Yc);const yi={};_&2&&(yi.$$scope={dirty:_,ctx:o}),Tn.$set(yi);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:o}),wn.$set(ep);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:o}),$n.$set(tp);const ba={};_&2&&(ba.$$scope={dirty:_,ctx:o}),xn.$set(ba);const op={};_&2&&(op.$$scope={dirty:_,ctx:o}),zn.$set(op);const np={};_&2&&(np.$$scope={dirty:_,ctx:o}),Fn.$set(np);const vi={};_&2&&(vi.$$scope={dirty:_,ctx:o}),qn.$set(vi);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:o}),Cn.$set(ap);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:o}),Pn.$set(sp);const rp={};_&2&&(rp.$$scope={dirty:_,ctx:o}),Sn.$set(rp);const et={};_&2&&(et.$$scope={dirty:_,ctx:o}),On.$set(et);const ip={};_&2&&(ip.$$scope={dirty:_,ctx:o}),In.$set(ip);const dp={};_&2&&(dp.$$scope={dirty:_,ctx:o}),Nn.$set(dp);const lp={};_&2&&(lp.$$scope={dirty:_,ctx:o}),Dn.$set(lp);const cp={};_&2&&(cp.$$scope={dirty:_,ctx:o}),Ln.$set(cp);const Nt={};_&2&&(Nt.$$scope={dirty:_,ctx:o}),Wn.$set(Nt);const ed={};_&2&&(ed.$$scope={dirty:_,ctx:o}),Rn.$set(ed);const pp={};_&2&&(pp.$$scope={dirty:_,ctx:o}),Xn.$set(pp);const up={};_&2&&(up.$$scope={dirty:_,ctx:o}),Vn.$set(up);const hp={};_&2&&(hp.$$scope={dirty:_,ctx:o}),Kn.$set(hp);const mp={};_&2&&(mp.$$scope={dirty:_,ctx:o}),Jn.$set(mp);const fp={};_&2&&(fp.$$scope={dirty:_,ctx:o}),Zn.$set(fp);const _p={};_&2&&(_p.$$scope={dirty:_,ctx:o}),ea.$set(_p);const Ti={};_&2&&(Ti.$$scope={dirty:_,ctx:o}),oa.$set(Ti);const gp={};_&2&&(gp.$$scope={dirty:_,ctx:o}),aa.$set(gp);const Wo={};_&2&&(Wo.$$scope={dirty:_,ctx:o}),sa.$set(Wo);const bp={};_&2&&(bp.$$scope={dirty:_,ctx:o}),ia.$set(bp);const kp={};_&2&&(kp.$$scope={dirty:_,ctx:o}),la.$set(kp);const wi={};_&2&&(wi.$$scope={dirty:_,ctx:o}),pa.$set(wi);const yp={};_&2&&(yp.$$scope={dirty:_,ctx:o}),ua.$set(yp);const vp={};_&2&&(vp.$$scope={dirty:_,ctx:o}),ma.$set(vp);const Tp={};_&2&&(Tp.$$scope={dirty:_,ctx:o}),_a.$set(Tp)},i(o){fu||(w(n.$$.fragment,o),w(K.$$.fragment,o),w($e.$$.fragment,o),w(Sa.$$.fragment,o),w(Aa.$$.fragment,o),w(Ia.$$.fragment,o),w(Da.$$.fragment,o),w(La.$$.fragment,o),w(Wa.$$.fragment,o),w(Ra.$$.fragment,o),w(Ua.$$.fragment,o),w(Vo.$$.fragment,o),w(Qa.$$.fragment,o),w(Va.$$.fragment,o),w(Ko.$$.fragment,o),w(Ka.$$.fragment,o),w(ts.$$.fragment,o),w(os.$$.fragment,o),w(Zo.$$.fragment,o),w(ss.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(us.$$.fragment,o),w(hs.$$.fragment,o),w(ms.$$.fragment,o),w(nn.$$.fragment,o),w(bs.$$.fragment,o),w(ws.$$.fragment,o),w(Ms.$$.fragment,o),w(xs.$$.fragment,o),w(zs.$$.fragment,o),w(Fs.$$.fragment,o),w(qs.$$.fragment,o),w(cn.$$.fragment,o),w(Cs.$$.fragment,o),w(As.$$.fragment,o),w(Is.$$.fragment,o),w(Ns.$$.fragment,o),w(Ds.$$.fragment,o),w(Rs.$$.fragment,o),w(mn.$$.fragment,o),w(fn.$$.fragment,o),w(Us.$$.fragment,o),w(Xs.$$.fragment,o),w(Ks.$$.fragment,o),w(gn.$$.fragment,o),w(bn.$$.fragment,o),w(kn.$$.fragment,o),w(Js.$$.fragment,o),w(Zs.$$.fragment,o),w(or.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(wn.$$.fragment,o),w(nr.$$.fragment,o),w(ar.$$.fragment,o),w(dr.$$.fragment,o),w($n.$$.fragment,o),w(xn.$$.fragment,o),w(zn.$$.fragment,o),w(Fn.$$.fragment,o),w(qn.$$.fragment,o),w(lr.$$.fragment,o),w(cr.$$.fragment,o),w(pr.$$.fragment,o),w(Cn.$$.fragment,o),w(ur.$$.fragment,o),w(hr.$$.fragment,o),w(Pn.$$.fragment,o),w(gr.$$.fragment,o),w(Sn.$$.fragment,o),w(On.$$.fragment,o),w(br.$$.fragment,o),w(kr.$$.fragment,o),w(In.$$.fragment,o),w(wr.$$.fragment,o),w(Nn.$$.fragment,o),w(Dn.$$.fragment,o),w(Ln.$$.fragment,o),w(Mr.$$.fragment,o),w($r.$$.fragment,o),w(Er.$$.fragment,o),w(Wn.$$.fragment,o),w(Rn.$$.fragment,o),w(Pr.$$.fragment,o),w(Xn.$$.fragment,o),w(Sr.$$.fragment,o),w(Vn.$$.fragment,o),w(Or.$$.fragment,o),w(Ar.$$.fragment,o),w(Ur.$$.fragment,o),w(Kn.$$.fragment,o),w(Jn.$$.fragment,o),w(Zn.$$.fragment,o),w(Xr.$$.fragment,o),w(ea.$$.fragment,o),w(Qr.$$.fragment,o),w(oa.$$.fragment,o),w(Vr.$$.fragment,o),w(Hr.$$.fragment,o),w(ni.$$.fragment,o),w(aa.$$.fragment,o),w(sa.$$.fragment,o),w(ai.$$.fragment,o),w(ia.$$.fragment,o),w(si.$$.fragment,o),w(la.$$.fragment,o),w(ri.$$.fragment,o),w(ii.$$.fragment,o),w(fi.$$.fragment,o),w(pa.$$.fragment,o),w(ua.$$.fragment,o),w(_i.$$.fragment,o),w(ma.$$.fragment,o),w(gi.$$.fragment,o),w(_a.$$.fragment,o),fu=!0)},o(o){M(n.$$.fragment,o),M(K.$$.fragment,o),M($e.$$.fragment,o),M(Sa.$$.fragment,o),M(Aa.$$.fragment,o),M(Ia.$$.fragment,o),M(Da.$$.fragment,o),M(La.$$.fragment,o),M(Wa.$$.fragment,o),M(Ra.$$.fragment,o),M(Ua.$$.fragment,o),M(Vo.$$.fragment,o),M(Qa.$$.fragment,o),M(Va.$$.fragment,o),M(Ko.$$.fragment,o),M(Ka.$$.fragment,o),M(ts.$$.fragment,o),M(os.$$.fragment,o),M(Zo.$$.fragment,o),M(ss.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(us.$$.fragment,o),M(hs.$$.fragment,o),M(ms.$$.fragment,o),M(nn.$$.fragment,o),M(bs.$$.fragment,o),M(ws.$$.fragment,o),M(Ms.$$.fragment,o),M(xs.$$.fragment,o),M(zs.$$.fragment,o),M(Fs.$$.fragment,o),M(qs.$$.fragment,o),M(cn.$$.fragment,o),M(Cs.$$.fragment,o),M(As.$$.fragment,o),M(Is.$$.fragment,o),M(Ns.$$.fragment,o),M(Ds.$$.fragment,o),M(Rs.$$.fragment,o),M(mn.$$.fragment,o),M(fn.$$.fragment,o),M(Us.$$.fragment,o),M(Xs.$$.fragment,o),M(Ks.$$.fragment,o),M(gn.$$.fragment,o),M(bn.$$.fragment,o),M(kn.$$.fragment,o),M(Js.$$.fragment,o),M(Zs.$$.fragment,o),M(or.$$.fragment,o),M(vn.$$.fragment,o),M(Tn.$$.fragment,o),M(wn.$$.fragment,o),M(nr.$$.fragment,o),M(ar.$$.fragment,o),M(dr.$$.fragment,o),M($n.$$.fragment,o),M(xn.$$.fragment,o),M(zn.$$.fragment,o),M(Fn.$$.fragment,o),M(qn.$$.fragment,o),M(lr.$$.fragment,o),M(cr.$$.fragment,o),M(pr.$$.fragment,o),M(Cn.$$.fragment,o),M(ur.$$.fragment,o),M(hr.$$.fragment,o),M(Pn.$$.fragment,o),M(gr.$$.fragment,o),M(Sn.$$.fragment,o),M(On.$$.fragment,o),M(br.$$.fragment,o),M(kr.$$.fragment,o),M(In.$$.fragment,o),M(wr.$$.fragment,o),M(Nn.$$.fragment,o),M(Dn.$$.fragment,o),M(Ln.$$.fragment,o),M(Mr.$$.fragment,o),M($r.$$.fragment,o),M(Er.$$.fragment,o),M(Wn.$$.fragment,o),M(Rn.$$.fragment,o),M(Pr.$$.fragment,o),M(Xn.$$.fragment,o),M(Sr.$$.fragment,o),M(Vn.$$.fragment,o),M(Or.$$.fragment,o),M(Ar.$$.fragment,o),M(Ur.$$.fragment,o),M(Kn.$$.fragment,o),M(Jn.$$.fragment,o),M(Zn.$$.fragment,o),M(Xr.$$.fragment,o),M(ea.$$.fragment,o),M(Qr.$$.fragment,o),M(oa.$$.fragment,o),M(Vr.$$.fragment,o),M(Hr.$$.fragment,o),M(ni.$$.fragment,o),M(aa.$$.fragment,o),M(sa.$$.fragment,o),M(ai.$$.fragment,o),M(ia.$$.fragment,o),M(si.$$.fragment,o),M(la.$$.fragment,o),M(ri.$$.fragment,o),M(ii.$$.fragment,o),M(fi.$$.fragment,o),M(pa.$$.fragment,o),M(ua.$$.fragment,o),M(_i.$$.fragment,o),M(ma.$$.fragment,o),M(gi.$$.fragment,o),M(_a.$$.fragment,o),fu=!1},d(o){t(l),o&&t(k),o&&t(m),$(n),o&&t(tt),o&&t(U),o&&t(ot),o&&t(X),$(K),o&&t(nt),o&&t(he),o&&t(O),o&&t(I),o&&t(me),o&&t(ie),o&&t(fe),o&&t(de),$($e),o&&t(ge),o&&t(R),o&&t(Dt),o&&t(te),o&&t(Ee),o&&t(at),o&&t(wp),$(Sa,o),o&&t(Mp),o&&t(Mi),o&&t($p),$(Aa,o),o&&t(xp),o&&t(so),$(Ia),o&&t(zp),o&&t(Lt),o&&t(Fp),o&&t($i),o&&t(qp),o&&t(xi),o&&t(Bp),o&&t(ro),$(Da),o&&t(jp),o&&t(st),o&&t(Cp),o&&t(Xo),o&&t(Ep),o&&t(Fi),o&&t(Pp),$(La,o),o&&t(Sp),o&&t(qi),o&&t(Op),$(Wa,o),o&&t(Ap),o&&t(io),$(Ra),o&&t(Ip),o&&t(Je),$(Ua),$(Vo),o&&t(Np),o&&t(po),$(Qa),o&&t(Dp),o&&t(pe),$(Va),$(Ko),$(Ka),o&&t(Lp),o&&t(ho),$(ts),o&&t(Gp),o&&t(D),$(os),$(Zo),$(ss),$(cs),$(ps),$(us),o&&t(Wp),o&&t(_o),$(hs),o&&t(Rp),o&&t(L),$(ms),$(nn),$(bs),$(ws),$(Ms),$(xs),$(zs),o&&t(Up),o&&t(go),$(Fs),o&&t(Xp),o&&t(ee),$(qs),$(cn),$(Cs),$(As),$(Is),o&&t(Qp),o&&t(ko),$(Ns),o&&t(Vp),o&&t(Ze),$(Ds),$(Rs),$(mn),$(fn),o&&t(Hp),o&&t(vo),$(Us),o&&t(Kp),o&&t(Ye),$(Xs),$(Ks),$(gn),$(bn),$(kn),o&&t(Jp),o&&t(wo),$(Js),o&&t(Zp),o&&t(qe),$(Zs),$(or),$(vn),$(Tn),$(wn),o&&t(Yp),o&&t(xo),$(nr),o&&t(eu),o&&t(Be),$(ar),$(dr),$($n),$(xn),$(zn),$(Fn),$(qn),o&&t(tu),o&&t(Fo),$(lr),o&&t(ou),o&&t(qo),$(cr),$(pr),$(Cn),o&&t(nu),o&&t(Bo),$(ur),o&&t(au),o&&t(je),$(hr),$(Pn),$(gr),$(Sn),$(On),o&&t(su),o&&t(Co),$(br),o&&t(ru),o&&t(Ce),$(kr),$(In),$(wr),$(Nn),$(Dn),$(Ln),o&&t(iu),o&&t(Po),$(Mr),o&&t(du),o&&t(Q),$($r),$(Er),$(Wn),$(Rn),$(Pr),$(Xn),$(Sr),$(Vn),o&&t(lu),o&&t(Oo),$(Or),o&&t(cu),o&&t(V),$(Ar),$(Ur),$(Kn),$(Jn),$(Zn),$(Xr),$(ea),$(Qr),$(oa),o&&t(pu),o&&t(Io),$(Vr),o&&t(uu),o&&t(G),$(Hr),$(ni),$(aa),$(sa),$(ai),$(ia),$(si),$(la),o&&t(hu),o&&t(Do),$(ri),o&&t(mu),o&&t(W),$(ii),$(fi),$(pa),$(ua),$(_i),$(ma),$(gi),$(_a)}}}const qx={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function Bx(x){return I2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ax extends P2{constructor(l){super();S2(this,l,Bx,Fx,O2,{})}}export{Ax as default,qx as metadata};
