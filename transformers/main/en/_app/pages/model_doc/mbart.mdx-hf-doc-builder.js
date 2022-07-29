import{S as xx,i as zx,s as Fx,e as a,k as p,w as y,t as i,M as qx,c as s,d as t,m as u,a as r,x as v,h as d,b as f,G as e,g as b,y as T,q as w,o as M,B as $,v as Bx,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as st}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as B}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as U}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as C}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function jx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Ex(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Cx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, text_target=expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Px(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors="pt")
# model(**model_inputs) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Sx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors="pt")
# model(**model_inputs) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, text_target=tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Ax(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Ox(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Ix(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Nx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),{c(){l=a("p"),k=i("Translation example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Translation example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Dx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Lx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Gx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
<span class="hljs-string">&#x27;? Jim Henson was a&#x27;</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Wx(x){let l,k;return l=new B({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.55</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Rx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Ux(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of single-label classification:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Xx(x){let l,k;return l=new B({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Qx(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of multi-label classification:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Hx(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function Vx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Jx(x){let l,k,m,c,g,n,h,q,rt,ze,E,Oe,he,it,me,fe,dt,Ue,Q,L,Ie,oe,S,A,lt,le,ce,ct,H,pt,ut,G,Fe,_e,Xe,ne,ge,be,ht,ae,ke,ye,Qe;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),rt=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Oe=i("This second option is useful when using "),he=a("code"),it=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),dt=i("model(inputs)"),Ue=i("."),Q=p(),L=a("p"),Ie=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),S=a("ul"),A=a("li"),lt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),ct=i(" only and nothing else: "),H=a("code"),pt=i("model(input_ids)"),ut=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Xe=i("model([input_ids, attention_mask])"),ne=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ht=p(),ae=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Qe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);g=s(ve,"LI",{});var Ne=r(g);n=d(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),h=u(ve),q=s(ve,"LI",{});var Et=r(q);rt=d(Et,"having all inputs as a list, tuple or dict in the first positional arguments."),Et.forEach(t),ve.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Oe=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Ct=r(he);it=d(Ct,"tf.keras.Model.fit"),Ct.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var yt=r(fe);dt=d(yt,"model(inputs)"),yt.forEach(t),Ue=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ie=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),oe=u(z),S=s(z,"UL",{});var se=r(S);A=s(se,"LI",{});var re=r(A);lt=d(re,"a single Tensor with "),le=s(re,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),ct=d(re," only and nothing else: "),H=s(re,"CODE",{});var St=r(H);pt=d(St,"model(input_ids)"),St.forEach(t),re.forEach(t),ut=u(se),G=s(se,"LI",{});var ie=r(G);Fe=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(ie,"CODE",{});var At=r(_e);Xe=d(At,"model([input_ids, attention_mask])"),At.forEach(t),ne=d(ie," or "),ge=s(ie,"CODE",{});var Ot=r(ge);be=d(Ot,"model([input_ids, attention_mask, token_type_ids])"),Ot.forEach(t),ie.forEach(t),ht=u(se),ae=s(se,"LI",{});var De=r(ae);ke=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var It=r(ye);Qe=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),De.forEach(t),se.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,rt),b(z,ze,j),b(z,E,j),e(E,Oe),e(E,he),e(he,it),e(E,me),e(E,fe),e(fe,dt),e(E,Ue),b(z,Q,j),b(z,L,j),e(L,Ie),b(z,oe,j),b(z,S,j),e(S,A),e(A,lt),e(A,le),e(le,ce),e(A,ct),e(A,H),e(H,pt),e(S,ut),e(S,G),e(G,Fe),e(G,_e),e(_e,Xe),e(G,ne),e(G,ge),e(ge,be),e(S,ht),e(S,ae),e(ae,ke),e(ae,ye),e(ye,Qe)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(oe),z&&t(S)}}}function Kx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Zx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Yx(x){let l,k,m,c,g,n,h,q,rt,ze,E,Oe,he,it,me,fe,dt,Ue,Q,L,Ie,oe,S,A,lt,le,ce,ct,H,pt,ut,G,Fe,_e,Xe,ne,ge,be,ht,ae,ke,ye,Qe;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),rt=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Oe=i("This second option is useful when using "),he=a("code"),it=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),dt=i("model(inputs)"),Ue=i("."),Q=p(),L=a("p"),Ie=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),S=a("ul"),A=a("li"),lt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),ct=i(" only and nothing else: "),H=a("code"),pt=i("model(input_ids)"),ut=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Xe=i("model([input_ids, attention_mask])"),ne=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ht=p(),ae=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Qe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);g=s(ve,"LI",{});var Ne=r(g);n=d(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),h=u(ve),q=s(ve,"LI",{});var Et=r(q);rt=d(Et,"having all inputs as a list, tuple or dict in the first positional arguments."),Et.forEach(t),ve.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Oe=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Ct=r(he);it=d(Ct,"tf.keras.Model.fit"),Ct.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var yt=r(fe);dt=d(yt,"model(inputs)"),yt.forEach(t),Ue=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ie=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),oe=u(z),S=s(z,"UL",{});var se=r(S);A=s(se,"LI",{});var re=r(A);lt=d(re,"a single Tensor with "),le=s(re,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),ct=d(re," only and nothing else: "),H=s(re,"CODE",{});var St=r(H);pt=d(St,"model(input_ids)"),St.forEach(t),re.forEach(t),ut=u(se),G=s(se,"LI",{});var ie=r(G);Fe=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(ie,"CODE",{});var At=r(_e);Xe=d(At,"model([input_ids, attention_mask])"),At.forEach(t),ne=d(ie," or "),ge=s(ie,"CODE",{});var Ot=r(ge);be=d(Ot,"model([input_ids, attention_mask, token_type_ids])"),Ot.forEach(t),ie.forEach(t),ht=u(se),ae=s(se,"LI",{});var De=r(ae);ke=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var It=r(ye);Qe=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),De.forEach(t),se.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,rt),b(z,ze,j),b(z,E,j),e(E,Oe),e(E,he),e(he,it),e(E,me),e(E,fe),e(fe,dt),e(E,Ue),b(z,Q,j),b(z,L,j),e(L,Ie),b(z,oe,j),b(z,S,j),e(S,A),e(A,lt),e(A,le),e(le,ce),e(A,ct),e(A,H),e(H,pt),e(S,ut),e(S,G),e(G,Fe),e(G,_e),e(_e,Xe),e(G,ne),e(G,ge),e(ge,be),e(S,ht),e(S,ae),e(ae,ke),e(ae,ye),e(ye,Qe)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(oe),z&&t(S)}}}function e1(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function t1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function o1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function n1(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function a1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function s1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function r1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function i1(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function d1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function l1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function c1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function p1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function u1(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function h1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function m1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function f1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function _1(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function g1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function b1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function k1(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function y1(x){let l,k,m,c,g,n,h,q,rt,ze,E,Oe,he,it,me,fe,dt,Ue,Q,L,Ie,oe,S,A,lt,le,ce,ct,H,pt,ut,G,Fe,_e,Xe,ne,ge,be,ht,ae,ke,ye,Qe,z,j,ve,Ne,Et,V,Ct,yt,X,se,re,Pt,St,ie,At,Ot,De,It,Fh,td,qh,Bh,rp,He,jh,ma,od,Eh,Ch,Ph,nd,Sh,Ah,ad,Oh,Ih,ip,ri,sd,Nh,dp,fa,lp,ii,_a,rd,Dh,Lh,Nt,Gh,id,Wh,Rh,dd,Uh,Xh,cp,ga,pp,Dt,wo,ld,ba,Qh,cd,Hh,up,vt,Vh,ka,Jh,Kh,pd,Zh,Yh,hp,di,em,mp,li,ud,tm,fp,Lt,Mo,hd,ya,om,md,nm,_p,Ve,am,fd,sm,rm,_d,im,dm,gd,lm,cm,gp,$o,pm,ci,um,hm,bp,pi,bd,mm,kp,va,yp,ui,Ta,kd,fm,_m,Te,gm,yd,bm,km,vd,ym,vm,Td,Tm,wm,wd,Mm,$m,Md,xm,zm,vp,wa,Tp,Gt,xo,$d,Ma,Fm,xd,qm,wp,Le,$a,Bm,Wt,jm,hi,Em,Cm,xa,Pm,Sm,Am,Rt,Om,mi,Im,Nm,fi,Dm,Lm,Gm,zo,Mp,Ut,Fo,zd,za,Wm,Fd,Rm,$p,de,Fa,Um,qd,Xm,Qm,mt,Hm,_i,Vm,Jm,gi,Km,Zm,qa,Ym,ef,tf,Ba,of,Bd,nf,af,sf,qo,rf,Je,ja,df,Ea,lf,jd,cf,pf,uf,Ca,Pa,Ed,hf,mf,Cd,ff,_f,Sa,Pd,gf,bf,Sd,kf,yf,Ad,vf,xp,Xt,Bo,Od,Aa,Tf,Id,wf,zp,O,Oa,Mf,Qt,$f,Nd,xf,zf,Ia,Ff,qf,Bf,Na,jf,bi,Ef,Cf,Pf,Da,Sf,Dd,Af,Of,If,jo,Nf,qe,La,Df,Ld,Lf,Gf,Ga,Wf,Gd,Rf,Uf,Xf,Wa,Ra,Wd,Qf,Hf,Rd,Vf,Jf,Ua,Ud,Kf,Zf,Xd,Yf,e_,Qd,t_,o_,Eo,Xa,n_,Hd,a_,s_,Co,Qa,r_,Vd,i_,d_,Po,Ha,l_,Jd,c_,Fp,Ht,So,Kd,Va,p_,Zd,u_,qp,I,Ja,h_,Ka,m_,Za,f_,__,g_,Ya,b_,ki,k_,y_,v_,Ao,T_,Ke,es,w_,ts,M_,Yd,$_,x_,z_,os,ns,el,F_,q_,tl,B_,j_,as,ol,E_,C_,nl,P_,S_,al,A_,O_,Oo,ss,I_,sl,N_,D_,Io,rs,L_,is,G_,rl,W_,R_,U_,No,ds,X_,il,Q_,H_,Do,ls,V_,dl,J_,Bp,Vt,Lo,ll,cs,K_,cl,Z_,jp,J,ps,Y_,Jt,eg,pl,tg,og,us,ng,ag,sg,hs,rg,yi,ig,dg,lg,Go,cg,Be,ms,pg,ul,ug,hg,fs,mg,hl,fg,_g,gg,_s,gs,ml,bg,kg,fl,yg,vg,bs,_l,Tg,wg,gl,Mg,$g,bl,xg,zg,Wo,ks,Fg,kl,qg,Bg,Ro,ys,jg,yl,Eg,Ep,Kt,Uo,vl,vs,Cg,Tl,Pg,Cp,Ge,Ts,Sg,ws,Ag,vi,Og,Ig,Ng,Ms,Dg,$s,Lg,Gg,Wg,Ze,xs,Rg,Zt,Ug,Ti,Xg,Qg,wl,Hg,Vg,Jg,Xo,Kg,Qo,Pp,Yt,Ho,Ml,zs,Zg,$l,Yg,Sp,We,Fs,eb,qs,tb,wi,ob,nb,ab,Bs,sb,js,rb,ib,db,je,Es,lb,eo,cb,Mi,pb,ub,xl,hb,mb,fb,Vo,_b,Jo,gb,Ko,Ap,to,Zo,zl,Cs,bb,Fl,kb,Op,we,Ps,yb,oo,vb,ql,Tb,wb,Bl,Mb,$b,xb,Ss,zb,$i,Fb,qb,Bb,As,jb,Os,Eb,Cb,Pb,Ee,Is,Sb,no,Ab,xi,Ob,Ib,jl,Nb,Db,Lb,Yo,Gb,en,Wb,tn,Ip,ao,on,El,Ns,Rb,Cl,Ub,Np,Me,Ds,Xb,Pl,Qb,Hb,Ls,Vb,zi,Jb,Kb,Zb,Gs,Yb,Ws,ek,tk,ok,K,Rs,nk,so,ak,Fi,sk,rk,Sl,ik,dk,lk,nn,ck,an,pk,sn,uk,rn,hk,dn,Dp,ro,ln,Al,Us,mk,Ol,fk,Lp,io,Xs,_k,cn,Qs,gk,pn,Gp,lo,un,Il,Hs,bk,Nl,kk,Wp,$e,Vs,yk,Js,vk,qi,Tk,wk,Mk,Ks,$k,Zs,xk,zk,Fk,hn,qk,Ye,Ys,Bk,co,jk,Bi,Ek,Ck,Dl,Pk,Sk,Ak,mn,Ok,fn,Rp,po,_n,Ll,er,Ik,Gl,Nk,Up,xe,tr,Dk,or,Lk,ji,Gk,Wk,Rk,nr,Uk,ar,Xk,Qk,Hk,gn,Vk,Ce,sr,Jk,uo,Kk,Ei,Zk,Yk,Wl,ey,ty,oy,bn,ny,kn,ay,yn,Xp,ho,vn,Rl,rr,sy,Ul,ry,Qp,W,ir,iy,dr,dy,Ci,ly,cy,py,lr,uy,cr,hy,my,fy,Xl,_y,gy,ft,Ql,pr,by,ky,Hl,ur,yy,vy,Vl,hr,Ty,wy,Jl,mr,My,$y,et,fr,xy,mo,zy,Kl,Fy,qy,Zl,By,jy,Ey,Tn,Cy,wn,Py,Mn,_r,Sy,$n,Ay,xn,gr,Oy,zn,Hp,fo,Fn,Yl,br,Iy,ec,Ny,Vp,R,kr,Dy,yr,Ly,Pi,Gy,Wy,Ry,vr,Uy,Tr,Xy,Qy,Hy,tc,Vy,Jy,_t,oc,wr,Ky,Zy,nc,Mr,Yy,ev,ac,$r,tv,ov,sc,xr,nv,av,Pe,zr,sv,_o,rv,rc,iv,dv,ic,lv,cv,pv,qn,uv,Bn,hv,jn,mv,En,Fr,fv,Cn,_v,Pn,qr,gv,Sn,Jp,go,An,dc,Br,bv,lc,kv,Kp,N,jr,yv,cc,vv,Tv,Er,wv,Si,Mv,$v,xv,Cr,zv,Pr,Fv,qv,Bv,pc,jv,Ev,gt,uc,Sr,Cv,Pv,hc,Ar,Sv,Av,mc,Or,Ov,Iv,fc,Ir,Nv,Dv,tt,Nr,Lv,bo,Gv,_c,Wv,Rv,gc,Uv,Xv,Qv,On,Hv,In,Vv,Nn,Dr,Jv,Dn,Kv,Ln,Lr,Zv,Gn,Zp,ko,Wn,bc,Gr,Yv,kc,eT,Yp,D,Wr,tT,yo,oT,yc,nT,aT,vc,sT,rT,iT,Rr,dT,Ai,lT,cT,pT,Ur,uT,Xr,hT,mT,fT,Tc,_T,gT,bt,wc,Qr,bT,kT,Mc,Hr,yT,vT,$c,Vr,TT,wT,xc,Jr,MT,$T,ot,Kr,xT,vo,zT,zc,FT,qT,Fc,BT,jT,ET,Rn,CT,Un,PT,Xn,Zr,ST,Qn,AT,Hn,Yr,OT,Vn,eu;return n=new U({}),oe=new U({}),Ne=new U({}),fa=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),ga=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),ba=new U({}),ya=new U({}),va=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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

model(**model_inputs)  <span class="hljs-comment"># forward pass</span>`}}),wa=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Ma=new U({}),$a=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/configuration_mbart.py#L34"}}),zo=new C({props:{anchor:"transformers.MBartConfig.example",$$slots:{default:[jx]},$$scope:{ctx:x}}}),za=new U({}),Fa=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L53"}}),qo=new C({props:{anchor:"transformers.MBartTokenizer.example",$$slots:{default:[Ex]},$$scope:{ctx:x}}}),ja=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Aa=new U({}),Oa=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L63"}}),jo=new C({props:{anchor:"transformers.MBartTokenizerFast.example",$$slots:{default:[Cx]},$$scope:{ctx:x}}}),La=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
`}}),Qa=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L245"}}),Ha=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L260"}}),Va=new U({}),Ja=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L49"}}),Ao=new C({props:{anchor:"transformers.MBart50Tokenizer.example",$$slots:{default:[Px]},$$scope:{ctx:x}}}),es=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L59"}}),Go=new C({props:{anchor:"transformers.MBart50TokenizerFast.example",$$slots:{default:[Sx]},$$scope:{ctx:x}}}),ms=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ks=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L217"}}),ys=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L232"}}),vs=new U({}),Ts=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1145"}}),xs=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1172",returnDescription:`
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
`}}),Xo=new st({props:{$$slots:{default:[Ax]},$$scope:{ctx:x}}}),Qo=new C({props:{anchor:"transformers.MBartModel.forward.example",$$slots:{default:[Ox]},$$scope:{ctx:x}}}),zs=new U({}),Fs=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1262"}}),Es=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1306",returnDescription:`
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
`}}),Vo=new st({props:{$$slots:{default:[Ix]},$$scope:{ctx:x}}}),Jo=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example",$$slots:{default:[Nx]},$$scope:{ctx:x}}}),Ko=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example-2",$$slots:{default:[Dx]},$$scope:{ctx:x}}}),Cs=new U({}),Ps=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1563"}}),Is=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1575",returnDescription:`
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
`}}),Yo=new st({props:{$$slots:{default:[Lx]},$$scope:{ctx:x}}}),en=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example",$$slots:{default:[Gx]},$$scope:{ctx:x}}}),tn=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example-2",$$slots:{default:[Wx]},$$scope:{ctx:x}}}),Ns=new U({}),Ds=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1435"}}),Rs=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1448",returnDescription:`
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
`}}),nn=new st({props:{$$slots:{default:[Rx]},$$scope:{ctx:x}}}),an=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example",$$slots:{default:[Ux]},$$scope:{ctx:x}}}),sn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-2",$$slots:{default:[Xx]},$$scope:{ctx:x}}}),rn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-3",$$slots:{default:[Qx]},$$scope:{ctx:x}}}),dn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-4",$$slots:{default:[Hx]},$$scope:{ctx:x}}}),Us=new U({}),Xs=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1696"}}),Qs=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1727",returnDescription:`
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
`}}),pn=new C({props:{anchor:"transformers.MBartForCausalLM.forward.example",$$slots:{default:[Vx]},$$scope:{ctx:x}}}),Hs=new U({}),Vs=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1184"}}),hn=new st({props:{$$slots:{default:[Jx]},$$scope:{ctx:x}}}),Ys=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),mn=new st({props:{$$slots:{default:[Kx]},$$scope:{ctx:x}}}),fn=new C({props:{anchor:"transformers.TFMBartModel.call.example",$$slots:{default:[Zx]},$$scope:{ctx:x}}}),er=new U({}),tr=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1273"}}),gn=new st({props:{$$slots:{default:[Yx]},$$scope:{ctx:x}}}),sr=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1306",returnDescription:`
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
`}}),bn=new st({props:{$$slots:{default:[e1]},$$scope:{ctx:x}}}),kn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example",$$slots:{default:[t1]},$$scope:{ctx:x}}}),yn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example-2",$$slots:{default:[o1]},$$scope:{ctx:x}}}),rr=new U({}),ir=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Tn=new st({props:{$$slots:{default:[n1]},$$scope:{ctx:x}}}),wn=new C({props:{anchor:"transformers.FlaxMBartModel.__call__.example",$$slots:{default:[a1]},$$scope:{ctx:x}}}),_r=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),$n=new C({props:{anchor:"transformers.FlaxMBartModel.encode.example",$$slots:{default:[s1]},$$scope:{ctx:x}}}),gr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),zn=new C({props:{anchor:"transformers.FlaxMBartModel.decode.example",$$slots:{default:[r1]},$$scope:{ctx:x}}}),br=new U({}),kr=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),qn=new st({props:{$$slots:{default:[i1]},$$scope:{ctx:x}}}),Bn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example",$$slots:{default:[d1]},$$scope:{ctx:x}}}),jn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example-2",$$slots:{default:[l1]},$$scope:{ctx:x}}}),Fr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Cn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.example",$$slots:{default:[c1]},$$scope:{ctx:x}}}),qr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Sn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.example",$$slots:{default:[p1]},$$scope:{ctx:x}}}),Br=new U({}),jr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),On=new st({props:{$$slots:{default:[u1]},$$scope:{ctx:x}}}),In=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.example",$$slots:{default:[h1]},$$scope:{ctx:x}}}),Dr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Dn=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.encode.example",$$slots:{default:[m1]},$$scope:{ctx:x}}}),Lr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Gn=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.decode.example",$$slots:{default:[f1]},$$scope:{ctx:x}}}),Gr=new U({}),Wr=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Rn=new st({props:{$$slots:{default:[_1]},$$scope:{ctx:x}}}),Un=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.example",$$slots:{default:[g1]},$$scope:{ctx:x}}}),Zr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.example",$$slots:{default:[b1]},$$scope:{ctx:x}}}),Yr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Vn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.example",$$slots:{default:[k1]},$$scope:{ctx:x}}}),{c(){l=a("meta"),k=p(),m=a("h1"),c=a("a"),g=a("span"),y(n.$$.fragment),h=p(),q=a("span"),rt=i("MBart and MBart-50"),ze=p(),E=a("p"),Oe=a("strong"),he=i("DISCLAIMER:"),it=i(" If you see something strange, file a "),me=a("a"),fe=i("Github Issue"),dt=i(` and assign
@patrickvonplaten`),Ue=p(),Q=a("h2"),L=a("a"),Ie=a("span"),y(oe.$$.fragment),S=p(),A=a("span"),lt=i("Overview of MBart"),le=p(),ce=a("p"),ct=i("The MBart model was presented in "),H=a("a"),pt=i("Multilingual Denoising Pre-training for Neural Machine Translation"),ut=i(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),G=p(),Fe=a("p"),_e=i(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Xe=p(),ne=a("p"),ge=i("This model was contributed by "),be=a("a"),ht=i("valhalla"),ae=i(". The Authors\u2019 code can be found "),ke=a("a"),ye=i("here"),Qe=p(),z=a("h3"),j=a("a"),ve=a("span"),y(Ne.$$.fragment),Et=p(),V=a("span"),Ct=i("Training of MBart"),yt=p(),X=a("p"),se=i(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),re=a("code"),Pt=i("X [eos, src_lang_code]"),St=i(" where "),ie=a("code"),At=i("X"),Ot=i(` is the source text. The
target text format is `),De=a("code"),It=i("[tgt_lang_code] X [eos]"),Fh=i(". "),td=a("code"),qh=i("bos"),Bh=i(" is never used."),rp=p(),He=a("p"),jh=i("The regular "),ma=a("a"),od=a("strong"),Eh=i("call"),Ch=i("()"),Ph=i(" will encode source text format passed as first argument or with the "),nd=a("code"),Sh=i("text"),Ah=i(`
keyword, and target text format passed with the `),ad=a("code"),Oh=i("text_label"),Ih=i(" keyword argument."),ip=p(),ri=a("ul"),sd=a("li"),Nh=i("Supervised training"),dp=p(),y(fa.$$.fragment),lp=p(),ii=a("ul"),_a=a("li"),rd=a("p"),Dh=i("Generation"),Lh=p(),Nt=a("p"),Gh=i("While generating the target text set the "),id=a("code"),Wh=i("decoder_start_token_id"),Rh=i(` to the target language id. The following
example shows how to translate English to Romanian using the `),dd=a("em"),Uh=i("facebook/mbart-large-en-ro"),Xh=i(" model."),cp=p(),y(ga.$$.fragment),pp=p(),Dt=a("h2"),wo=a("a"),ld=a("span"),y(ba.$$.fragment),Qh=p(),cd=a("span"),Hh=i("Overview of MBart-50"),up=p(),vt=a("p"),Vh=i("MBart-50 was introduced in the "),ka=a("a"),Jh=i("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Kh=i(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),pd=a("em"),Zh=i("mbart-large-cc25"),Yh=i(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),hp=p(),di=a("p"),em=i("According to the abstract"),mp=p(),li=a("p"),ud=a("em"),tm=i(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),fp=p(),Lt=a("h3"),Mo=a("a"),hd=a("span"),y(ya.$$.fragment),om=p(),md=a("span"),nm=i("Training of MBart-50"),_p=p(),Ve=a("p"),am=i(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),fd=a("code"),sm=i("[lang_code] X [eos]"),rm=i(", where "),_d=a("code"),im=i("lang_code"),dm=i(` is source
language id for source text and target language id for target text, with `),gd=a("code"),lm=i("X"),cm=i(` being the source or target text
respectively.`),gp=p(),$o=a("p"),pm=i("MBart-50 has its own tokenizer "),ci=a("a"),um=i("MBart50Tokenizer"),hm=i("."),bp=p(),pi=a("ul"),bd=a("li"),mm=i("Supervised training"),kp=p(),y(va.$$.fragment),yp=p(),ui=a("ul"),Ta=a("li"),kd=a("p"),fm=i("Generation"),_m=p(),Te=a("p"),gm=i("To generate using the mBART-50 multilingual translation models, "),yd=a("code"),bm=i("eos_token_id"),km=i(` is used as the
`),vd=a("code"),ym=i("decoder_start_token_id"),vm=i(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Td=a("em"),Tm=i("forced_bos_token_id"),wm=i(" parameter to the "),wd=a("em"),Mm=i("generate"),$m=i(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Md=a("em"),xm=i("facebook/mbart-50-large-many-to-many"),zm=i(" checkpoint."),vp=p(),y(wa.$$.fragment),Tp=p(),Gt=a("h2"),xo=a("a"),$d=a("span"),y(Ma.$$.fragment),Fm=p(),xd=a("span"),qm=i("MBartConfig"),wp=p(),Le=a("div"),y($a.$$.fragment),Bm=p(),Wt=a("p"),jm=i("This is the configuration class to store the configuration of a "),hi=a("a"),Em=i("MBartModel"),Cm=i(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),xa=a("a"),Pm=i("facebook/mbart-large-cc25"),Sm=i(" architecture."),Am=p(),Rt=a("p"),Om=i("Configuration objects inherit from "),mi=a("a"),Im=i("PretrainedConfig"),Nm=i(` and can be used to control the model outputs. Read the
documentation from `),fi=a("a"),Dm=i("PretrainedConfig"),Lm=i(" for more information."),Gm=p(),y(zo.$$.fragment),Mp=p(),Ut=a("h2"),Fo=a("a"),zd=a("span"),y(za.$$.fragment),Wm=p(),Fd=a("span"),Rm=i("MBartTokenizer"),$p=p(),de=a("div"),y(Fa.$$.fragment),Um=p(),qd=a("p"),Xm=i("Construct an MBART tokenizer."),Qm=p(),mt=a("p"),Hm=i("Adapted from "),_i=a("a"),Vm=i("RobertaTokenizer"),Jm=i(" and "),gi=a("a"),Km=i("XLNetTokenizer"),Zm=i(`. Based on
`),qa=a("a"),Ym=i("SentencePiece"),ef=i("."),tf=p(),Ba=a("p"),of=i("The tokenization method is "),Bd=a("code"),nf=i("<tokens> <eos> <language code>"),af=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),sf=p(),y(qo.$$.fragment),rf=p(),Je=a("div"),y(ja.$$.fragment),df=p(),Ea=a("p"),lf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),jd=a("code"),cf=i("X"),pf=i(" represents the sequence:"),uf=p(),Ca=a("ul"),Pa=a("li"),Ed=a("code"),hf=i("input_ids"),mf=i(" (for encoder) "),Cd=a("code"),ff=i("X [eos, src_lang_code]"),_f=p(),Sa=a("li"),Pd=a("code"),gf=i("decoder_input_ids"),bf=i(": (for decoder) "),Sd=a("code"),kf=i("X [eos, tgt_lang_code]"),yf=p(),Ad=a("p"),vf=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),xp=p(),Xt=a("h2"),Bo=a("a"),Od=a("span"),y(Aa.$$.fragment),Tf=p(),Id=a("span"),wf=i("MBartTokenizerFast"),zp=p(),O=a("div"),y(Oa.$$.fragment),Mf=p(),Qt=a("p"),$f=i("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Nd=a("em"),xf=i("tokenizers"),zf=i(` library). Based on
`),Ia=a("a"),Ff=i("BPE"),qf=i("."),Bf=p(),Na=a("p"),jf=i("This tokenizer inherits from "),bi=a("a"),Ef=i("PreTrainedTokenizerFast"),Cf=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Pf=p(),Da=a("p"),Sf=i("The tokenization method is "),Dd=a("code"),Af=i("<tokens> <eos> <language code>"),Of=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),If=p(),y(jo.$$.fragment),Nf=p(),qe=a("div"),y(La.$$.fragment),Df=p(),Ld=a("p"),Lf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Gf=p(),Ga=a("p"),Wf=i("An MBART sequence has the following format, where "),Gd=a("code"),Rf=i("X"),Uf=i(" represents the sequence:"),Xf=p(),Wa=a("ul"),Ra=a("li"),Wd=a("code"),Qf=i("input_ids"),Hf=i(" (for encoder) "),Rd=a("code"),Vf=i("X [eos, src_lang_code]"),Jf=p(),Ua=a("li"),Ud=a("code"),Kf=i("decoder_input_ids"),Zf=i(": (for decoder) "),Xd=a("code"),Yf=i("X [eos, tgt_lang_code]"),e_=p(),Qd=a("p"),t_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),o_=p(),Eo=a("div"),y(Xa.$$.fragment),n_=p(),Hd=a("p"),a_=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),s_=p(),Co=a("div"),y(Qa.$$.fragment),r_=p(),Vd=a("p"),i_=i("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),d_=p(),Po=a("div"),y(Ha.$$.fragment),l_=p(),Jd=a("p"),c_=i("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Fp=p(),Ht=a("h2"),So=a("a"),Kd=a("span"),y(Va.$$.fragment),p_=p(),Zd=a("span"),u_=i("MBart50Tokenizer"),qp=p(),I=a("div"),y(Ja.$$.fragment),h_=p(),Ka=a("p"),m_=i("Construct a MBart50 tokenizer. Based on "),Za=a("a"),f_=i("SentencePiece"),__=i("."),g_=p(),Ya=a("p"),b_=i("This tokenizer inherits from "),ki=a("a"),k_=i("PreTrainedTokenizer"),y_=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),v_=p(),y(Ao.$$.fragment),T_=p(),Ke=a("div"),y(es.$$.fragment),w_=p(),ts=a("p"),M_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),Yd=a("code"),$_=i("X"),x_=i(" represents the sequence:"),z_=p(),os=a("ul"),ns=a("li"),el=a("code"),F_=i("input_ids"),q_=i(" (for encoder) "),tl=a("code"),B_=i("[src_lang_code] X [eos]"),j_=p(),as=a("li"),ol=a("code"),E_=i("labels"),C_=i(": (for decoder) "),nl=a("code"),P_=i("[tgt_lang_code] X [eos]"),S_=p(),al=a("p"),A_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),O_=p(),Oo=a("div"),y(ss.$$.fragment),I_=p(),sl=a("p"),N_=i("Converts a sequence of tokens (strings for sub-words) in a single string."),D_=p(),Io=a("div"),y(rs.$$.fragment),L_=p(),is=a("p"),G_=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rl=a("code"),W_=i("prepare_for_model"),R_=i(" method."),U_=p(),No=a("div"),y(ds.$$.fragment),X_=p(),il=a("p"),Q_=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),H_=p(),Do=a("div"),y(ls.$$.fragment),V_=p(),dl=a("p"),J_=i("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Bp=p(),Vt=a("h2"),Lo=a("a"),ll=a("span"),y(cs.$$.fragment),K_=p(),cl=a("span"),Z_=i("MBart50TokenizerFast"),jp=p(),J=a("div"),y(ps.$$.fragment),Y_=p(),Jt=a("p"),eg=i("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),pl=a("em"),tg=i("tokenizers"),og=i(` library). Based on
`),us=a("a"),ng=i("BPE"),ag=i("."),sg=p(),hs=a("p"),rg=i("This tokenizer inherits from "),yi=a("a"),ig=i("PreTrainedTokenizerFast"),dg=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),lg=p(),y(Go.$$.fragment),cg=p(),Be=a("div"),y(ms.$$.fragment),pg=p(),ul=a("p"),ug=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),hg=p(),fs=a("p"),mg=i("An MBART-50 sequence has the following format, where "),hl=a("code"),fg=i("X"),_g=i(" represents the sequence:"),gg=p(),_s=a("ul"),gs=a("li"),ml=a("code"),bg=i("input_ids"),kg=i(" (for encoder) "),fl=a("code"),yg=i("[src_lang_code] X [eos]"),vg=p(),bs=a("li"),_l=a("code"),Tg=i("labels"),wg=i(": (for decoder) "),gl=a("code"),Mg=i("[tgt_lang_code] X [eos]"),$g=p(),bl=a("p"),xg=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),zg=p(),Wo=a("div"),y(ks.$$.fragment),Fg=p(),kl=a("p"),qg=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Bg=p(),Ro=a("div"),y(ys.$$.fragment),jg=p(),yl=a("p"),Eg=i("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Ep=p(),Kt=a("h2"),Uo=a("a"),vl=a("span"),y(vs.$$.fragment),Cg=p(),Tl=a("span"),Pg=i("MBartModel"),Cp=p(),Ge=a("div"),y(Ts.$$.fragment),Sg=p(),ws=a("p"),Ag=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vi=a("a"),Og=i("PreTrainedModel"),Ig=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=p(),Ms=a("p"),Dg=i("This model is also a PyTorch "),$s=a("a"),Lg=i("torch.nn.Module"),Gg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wg=p(),Ze=a("div"),y(xs.$$.fragment),Rg=p(),Zt=a("p"),Ug=i("The "),Ti=a("a"),Xg=i("MBartModel"),Qg=i(" forward method, overrides the "),wl=a("code"),Hg=i("__call__"),Vg=i(" special method."),Jg=p(),y(Xo.$$.fragment),Kg=p(),y(Qo.$$.fragment),Pp=p(),Yt=a("h2"),Ho=a("a"),Ml=a("span"),y(zs.$$.fragment),Zg=p(),$l=a("span"),Yg=i("MBartForConditionalGeneration"),Sp=p(),We=a("div"),y(Fs.$$.fragment),eb=p(),qs=a("p"),tb=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),wi=a("a"),ob=i("PreTrainedModel"),nb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ab=p(),Bs=a("p"),sb=i("This model is also a PyTorch "),js=a("a"),rb=i("torch.nn.Module"),ib=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),db=p(),je=a("div"),y(Es.$$.fragment),lb=p(),eo=a("p"),cb=i("The "),Mi=a("a"),pb=i("MBartForConditionalGeneration"),ub=i(" forward method, overrides the "),xl=a("code"),hb=i("__call__"),mb=i(" special method."),fb=p(),y(Vo.$$.fragment),_b=p(),y(Jo.$$.fragment),gb=p(),y(Ko.$$.fragment),Ap=p(),to=a("h2"),Zo=a("a"),zl=a("span"),y(Cs.$$.fragment),bb=p(),Fl=a("span"),kb=i("MBartForQuestionAnswering"),Op=p(),we=a("div"),y(Ps.$$.fragment),yb=p(),oo=a("p"),vb=i(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ql=a("code"),Tb=i("span start logits"),wb=i(" and "),Bl=a("code"),Mb=i("span end logits"),$b=i(")."),xb=p(),Ss=a("p"),zb=i("This model inherits from "),$i=a("a"),Fb=i("PreTrainedModel"),qb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bb=p(),As=a("p"),jb=i("This model is also a PyTorch "),Os=a("a"),Eb=i("torch.nn.Module"),Cb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pb=p(),Ee=a("div"),y(Is.$$.fragment),Sb=p(),no=a("p"),Ab=i("The "),xi=a("a"),Ob=i("MBartForQuestionAnswering"),Ib=i(" forward method, overrides the "),jl=a("code"),Nb=i("__call__"),Db=i(" special method."),Lb=p(),y(Yo.$$.fragment),Gb=p(),y(en.$$.fragment),Wb=p(),y(tn.$$.fragment),Ip=p(),ao=a("h2"),on=a("a"),El=a("span"),y(Ns.$$.fragment),Rb=p(),Cl=a("span"),Ub=i("MBartForSequenceClassification"),Np=p(),Me=a("div"),y(Ds.$$.fragment),Xb=p(),Pl=a("p"),Qb=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Hb=p(),Ls=a("p"),Vb=i("This model inherits from "),zi=a("a"),Jb=i("PreTrainedModel"),Kb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb=p(),Gs=a("p"),Yb=i("This model is also a PyTorch "),Ws=a("a"),ek=i("torch.nn.Module"),tk=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ok=p(),K=a("div"),y(Rs.$$.fragment),nk=p(),so=a("p"),ak=i("The "),Fi=a("a"),sk=i("MBartForSequenceClassification"),rk=i(" forward method, overrides the "),Sl=a("code"),ik=i("__call__"),dk=i(" special method."),lk=p(),y(nn.$$.fragment),ck=p(),y(an.$$.fragment),pk=p(),y(sn.$$.fragment),uk=p(),y(rn.$$.fragment),hk=p(),y(dn.$$.fragment),Dp=p(),ro=a("h2"),ln=a("a"),Al=a("span"),y(Us.$$.fragment),mk=p(),Ol=a("span"),fk=i("MBartForCausalLM"),Lp=p(),io=a("div"),y(Xs.$$.fragment),_k=p(),cn=a("div"),y(Qs.$$.fragment),gk=p(),y(pn.$$.fragment),Gp=p(),lo=a("h2"),un=a("a"),Il=a("span"),y(Hs.$$.fragment),bk=p(),Nl=a("span"),kk=i("TFMBartModel"),Wp=p(),$e=a("div"),y(Vs.$$.fragment),yk=p(),Js=a("p"),vk=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a("a"),Tk=i("TFPreTrainedModel"),wk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mk=p(),Ks=a("p"),$k=i("This model is also a "),Zs=a("a"),xk=i("tf.keras.Model"),zk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fk=p(),y(hn.$$.fragment),qk=p(),Ye=a("div"),y(Ys.$$.fragment),Bk=p(),co=a("p"),jk=i("The "),Bi=a("a"),Ek=i("TFMBartModel"),Ck=i(" forward method, overrides the "),Dl=a("code"),Pk=i("__call__"),Sk=i(" special method."),Ak=p(),y(mn.$$.fragment),Ok=p(),y(fn.$$.fragment),Rp=p(),po=a("h2"),_n=a("a"),Ll=a("span"),y(er.$$.fragment),Ik=p(),Gl=a("span"),Nk=i("TFMBartForConditionalGeneration"),Up=p(),xe=a("div"),y(tr.$$.fragment),Dk=p(),or=a("p"),Lk=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ji=a("a"),Gk=i("TFPreTrainedModel"),Wk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rk=p(),nr=a("p"),Uk=i("This model is also a "),ar=a("a"),Xk=i("tf.keras.Model"),Qk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hk=p(),y(gn.$$.fragment),Vk=p(),Ce=a("div"),y(sr.$$.fragment),Jk=p(),uo=a("p"),Kk=i("The "),Ei=a("a"),Zk=i("TFMBartForConditionalGeneration"),Yk=i(" forward method, overrides the "),Wl=a("code"),ey=i("__call__"),ty=i(" special method."),oy=p(),y(bn.$$.fragment),ny=p(),y(kn.$$.fragment),ay=p(),y(yn.$$.fragment),Xp=p(),ho=a("h2"),vn=a("a"),Rl=a("span"),y(rr.$$.fragment),sy=p(),Ul=a("span"),ry=i("FlaxMBartModel"),Qp=p(),W=a("div"),y(ir.$$.fragment),iy=p(),dr=a("p"),dy=i(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ci=a("a"),ly=i("FlaxPreTrainedModel"),cy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),py=p(),lr=a("p"),uy=i(`This model is also a Flax Linen
`),cr=a("a"),hy=i("flax.nn.Module"),my=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fy=p(),Xl=a("p"),_y=i("Finally, this model supports inherent JAX features such as:"),gy=p(),ft=a("ul"),Ql=a("li"),pr=a("a"),by=i("Just-In-Time (JIT) compilation"),ky=p(),Hl=a("li"),ur=a("a"),yy=i("Automatic Differentiation"),vy=p(),Vl=a("li"),hr=a("a"),Ty=i("Vectorization"),wy=p(),Jl=a("li"),mr=a("a"),My=i("Parallelization"),$y=p(),et=a("div"),y(fr.$$.fragment),xy=p(),mo=a("p"),zy=i("The "),Kl=a("code"),Fy=i("FlaxMBartPreTrainedModel"),qy=i(" forward method, overrides the "),Zl=a("code"),By=i("__call__"),jy=i(" special method."),Ey=p(),y(Tn.$$.fragment),Cy=p(),y(wn.$$.fragment),Py=p(),Mn=a("div"),y(_r.$$.fragment),Sy=p(),y($n.$$.fragment),Ay=p(),xn=a("div"),y(gr.$$.fragment),Oy=p(),y(zn.$$.fragment),Hp=p(),fo=a("h2"),Fn=a("a"),Yl=a("span"),y(br.$$.fragment),Iy=p(),ec=a("span"),Ny=i("FlaxMBartForConditionalGeneration"),Vp=p(),R=a("div"),y(kr.$$.fragment),Dy=p(),yr=a("p"),Ly=i(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pi=a("a"),Gy=i("FlaxPreTrainedModel"),Wy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ry=p(),vr=a("p"),Uy=i(`This model is also a Flax Linen
`),Tr=a("a"),Xy=i("flax.nn.Module"),Qy=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hy=p(),tc=a("p"),Vy=i("Finally, this model supports inherent JAX features such as:"),Jy=p(),_t=a("ul"),oc=a("li"),wr=a("a"),Ky=i("Just-In-Time (JIT) compilation"),Zy=p(),nc=a("li"),Mr=a("a"),Yy=i("Automatic Differentiation"),ev=p(),ac=a("li"),$r=a("a"),tv=i("Vectorization"),ov=p(),sc=a("li"),xr=a("a"),nv=i("Parallelization"),av=p(),Pe=a("div"),y(zr.$$.fragment),sv=p(),_o=a("p"),rv=i("The "),rc=a("code"),iv=i("FlaxMBartPreTrainedModel"),dv=i(" forward method, overrides the "),ic=a("code"),lv=i("__call__"),cv=i(" special method."),pv=p(),y(qn.$$.fragment),uv=p(),y(Bn.$$.fragment),hv=p(),y(jn.$$.fragment),mv=p(),En=a("div"),y(Fr.$$.fragment),fv=p(),y(Cn.$$.fragment),_v=p(),Pn=a("div"),y(qr.$$.fragment),gv=p(),y(Sn.$$.fragment),Jp=p(),go=a("h2"),An=a("a"),dc=a("span"),y(Br.$$.fragment),bv=p(),lc=a("span"),kv=i("FlaxMBartForSequenceClassification"),Kp=p(),N=a("div"),y(jr.$$.fragment),yv=p(),cc=a("p"),vv=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Tv=p(),Er=a("p"),wv=i("This model inherits from "),Si=a("a"),Mv=i("FlaxPreTrainedModel"),$v=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xv=p(),Cr=a("p"),zv=i(`This model is also a Flax Linen
`),Pr=a("a"),Fv=i("flax.nn.Module"),qv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bv=p(),pc=a("p"),jv=i("Finally, this model supports inherent JAX features such as:"),Ev=p(),gt=a("ul"),uc=a("li"),Sr=a("a"),Cv=i("Just-In-Time (JIT) compilation"),Pv=p(),hc=a("li"),Ar=a("a"),Sv=i("Automatic Differentiation"),Av=p(),mc=a("li"),Or=a("a"),Ov=i("Vectorization"),Iv=p(),fc=a("li"),Ir=a("a"),Nv=i("Parallelization"),Dv=p(),tt=a("div"),y(Nr.$$.fragment),Lv=p(),bo=a("p"),Gv=i("The "),_c=a("code"),Wv=i("FlaxMBartPreTrainedModel"),Rv=i(" forward method, overrides the "),gc=a("code"),Uv=i("__call__"),Xv=i(" special method."),Qv=p(),y(On.$$.fragment),Hv=p(),y(In.$$.fragment),Vv=p(),Nn=a("div"),y(Dr.$$.fragment),Jv=p(),y(Dn.$$.fragment),Kv=p(),Ln=a("div"),y(Lr.$$.fragment),Zv=p(),y(Gn.$$.fragment),Zp=p(),ko=a("h2"),Wn=a("a"),bc=a("span"),y(Gr.$$.fragment),Yv=p(),kc=a("span"),eT=i("FlaxMBartForQuestionAnswering"),Yp=p(),D=a("div"),y(Wr.$$.fragment),tT=p(),yo=a("p"),oT=i(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yc=a("code"),nT=i("span start logits"),aT=i(" and "),vc=a("code"),sT=i("span end logits"),rT=i(")."),iT=p(),Rr=a("p"),dT=i("This model inherits from "),Ai=a("a"),lT=i("FlaxPreTrainedModel"),cT=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pT=p(),Ur=a("p"),uT=i(`This model is also a Flax Linen
`),Xr=a("a"),hT=i("flax.nn.Module"),mT=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fT=p(),Tc=a("p"),_T=i("Finally, this model supports inherent JAX features such as:"),gT=p(),bt=a("ul"),wc=a("li"),Qr=a("a"),bT=i("Just-In-Time (JIT) compilation"),kT=p(),Mc=a("li"),Hr=a("a"),yT=i("Automatic Differentiation"),vT=p(),$c=a("li"),Vr=a("a"),TT=i("Vectorization"),wT=p(),xc=a("li"),Jr=a("a"),MT=i("Parallelization"),$T=p(),ot=a("div"),y(Kr.$$.fragment),xT=p(),vo=a("p"),zT=i("The "),zc=a("code"),FT=i("FlaxMBartPreTrainedModel"),qT=i(" forward method, overrides the "),Fc=a("code"),BT=i("__call__"),jT=i(" special method."),ET=p(),y(Rn.$$.fragment),CT=p(),y(Un.$$.fragment),PT=p(),Xn=a("div"),y(Zr.$$.fragment),ST=p(),y(Qn.$$.fragment),AT=p(),Hn=a("div"),y(Yr.$$.fragment),OT=p(),y(Vn.$$.fragment),this.h()},l(o){const _=qx('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),k=u(o),m=s(o,"H1",{class:!0});var ei=r(m);c=s(ei,"A",{id:!0,class:!0,href:!0});var qc=r(c);g=s(qc,"SPAN",{});var Bc=r(g);v(n.$$.fragment,Bc),Bc.forEach(t),qc.forEach(t),h=u(ei),q=s(ei,"SPAN",{});var jc=r(q);rt=d(jc,"MBart and MBart-50"),jc.forEach(t),ei.forEach(t),ze=u(o),E=s(o,"P",{});var Jn=r(E);Oe=s(Jn,"STRONG",{});var Ec=r(Oe);he=d(Ec,"DISCLAIMER:"),Ec.forEach(t),it=d(Jn," If you see something strange, file a "),me=s(Jn,"A",{href:!0,rel:!0});var Cc=r(me);fe=d(Cc,"Github Issue"),Cc.forEach(t),dt=d(Jn,` and assign
@patrickvonplaten`),Jn.forEach(t),Ue=u(o),Q=s(o,"H2",{class:!0});var ti=r(Q);L=s(ti,"A",{id:!0,class:!0,href:!0});var Pc=r(L);Ie=s(Pc,"SPAN",{});var Sc=r(Ie);v(oe.$$.fragment,Sc),Sc.forEach(t),Pc.forEach(t),S=u(ti),A=s(ti,"SPAN",{});var Ac=r(A);lt=d(Ac,"Overview of MBart"),Ac.forEach(t),ti.forEach(t),le=u(o),ce=s(o,"P",{});var oi=r(ce);ct=d(oi,"The MBart model was presented in "),H=s(oi,"A",{href:!0,rel:!0});var Oc=r(H);pt=d(Oc,"Multilingual Denoising Pre-training for Neural Machine Translation"),Oc.forEach(t),ut=d(oi,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),oi.forEach(t),G=u(o),Fe=s(o,"P",{});var Ic=r(Fe);_e=d(Ic,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ic.forEach(t),Xe=u(o),ne=s(o,"P",{});var Kn=r(ne);ge=d(Kn,"This model was contributed by "),be=s(Kn,"A",{href:!0,rel:!0});var Nc=r(be);ht=d(Nc,"valhalla"),Nc.forEach(t),ae=d(Kn,". The Authors\u2019 code can be found "),ke=s(Kn,"A",{href:!0,rel:!0});var Dc=r(ke);ye=d(Dc,"here"),Dc.forEach(t),Kn.forEach(t),Qe=u(o),z=s(o,"H3",{class:!0});var ni=r(z);j=s(ni,"A",{id:!0,class:!0,href:!0});var Lc=r(j);ve=s(Lc,"SPAN",{});var Gc=r(ve);v(Ne.$$.fragment,Gc),Gc.forEach(t),Lc.forEach(t),Et=u(ni),V=s(ni,"SPAN",{});var Wc=r(V);Ct=d(Wc,"Training of MBart"),Wc.forEach(t),ni.forEach(t),yt=u(o),X=s(o,"P",{});var Re=r(X);se=d(Re,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),re=s(Re,"CODE",{});var Rc=r(re);Pt=d(Rc,"X [eos, src_lang_code]"),Rc.forEach(t),St=d(Re," where "),ie=s(Re,"CODE",{});var Uc=r(ie);At=d(Uc,"X"),Uc.forEach(t),Ot=d(Re,` is the source text. The
target text format is `),De=s(Re,"CODE",{});var Xc=r(De);It=d(Xc,"[tgt_lang_code] X [eos]"),Xc.forEach(t),Fh=d(Re,". "),td=s(Re,"CODE",{});var Qc=r(td);qh=d(Qc,"bos"),Qc.forEach(t),Bh=d(Re," is never used."),Re.forEach(t),rp=u(o),He=s(o,"P",{});var kt=r(He);jh=d(kt,"The regular "),ma=s(kt,"A",{href:!0});var Oi=r(ma);od=s(Oi,"STRONG",{});var Hc=r(od);Eh=d(Hc,"call"),Hc.forEach(t),Ch=d(Oi,"()"),Oi.forEach(t),Ph=d(kt," will encode source text format passed as first argument or with the "),nd=s(kt,"CODE",{});var Vc=r(nd);Sh=d(Vc,"text"),Vc.forEach(t),Ah=d(kt,`
keyword, and target text format passed with the `),ad=s(kt,"CODE",{});var Jc=r(ad);Oh=d(Jc,"text_label"),Jc.forEach(t),Ih=d(kt," keyword argument."),kt.forEach(t),ip=u(o),ri=s(o,"UL",{});var Kc=r(ri);sd=s(Kc,"LI",{});var Zc=r(sd);Nh=d(Zc,"Supervised training"),Zc.forEach(t),Kc.forEach(t),dp=u(o),v(fa.$$.fragment,o),lp=u(o),ii=s(o,"UL",{});var Yc=r(ii);_a=s(Yc,"LI",{});var ai=r(_a);rd=s(ai,"P",{});var ep=r(rd);Dh=d(ep,"Generation"),ep.forEach(t),Lh=u(ai),Nt=s(ai,"P",{});var To=r(Nt);Gh=d(To,"While generating the target text set the "),id=s(To,"CODE",{});var tp=r(id);Wh=d(tp,"decoder_start_token_id"),tp.forEach(t),Rh=d(To,` to the target language id. The following
example shows how to translate English to Romanian using the `),dd=s(To,"EM",{});var op=r(dd);Uh=d(op,"facebook/mbart-large-en-ro"),op.forEach(t),Xh=d(To," model."),To.forEach(t),ai.forEach(t),Yc.forEach(t),cp=u(o),v(ga.$$.fragment,o),pp=u(o),Dt=s(o,"H2",{class:!0});var si=r(Dt);wo=s(si,"A",{id:!0,class:!0,href:!0});var np=r(wo);ld=s(np,"SPAN",{});var ap=r(ld);v(ba.$$.fragment,ap),ap.forEach(t),np.forEach(t),Qh=u(si),cd=s(si,"SPAN",{});var sp=r(cd);Hh=d(sp,"Overview of MBart-50"),sp.forEach(t),si.forEach(t),up=u(o),vt=s(o,"P",{});var Ii=r(vt);Vh=d(Ii,"MBart-50 was introduced in the "),ka=s(Ii,"A",{href:!0,rel:!0});var IT=r(ka);Jh=d(IT,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),IT.forEach(t),Kh=d(Ii,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),pd=s(Ii,"EM",{});var NT=r(pd);Zh=d(NT,"mbart-large-cc25"),NT.forEach(t),Yh=d(Ii,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Ii.forEach(t),hp=u(o),di=s(o,"P",{});var DT=r(di);em=d(DT,"According to the abstract"),DT.forEach(t),mp=u(o),li=s(o,"P",{});var LT=r(li);ud=s(LT,"EM",{});var GT=r(ud);tm=d(GT,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),GT.forEach(t),LT.forEach(t),fp=u(o),Lt=s(o,"H3",{class:!0});var tu=r(Lt);Mo=s(tu,"A",{id:!0,class:!0,href:!0});var WT=r(Mo);hd=s(WT,"SPAN",{});var RT=r(hd);v(ya.$$.fragment,RT),RT.forEach(t),WT.forEach(t),om=u(tu),md=s(tu,"SPAN",{});var UT=r(md);nm=d(UT,"Training of MBart-50"),UT.forEach(t),tu.forEach(t),_p=u(o),Ve=s(o,"P",{});var Zn=r(Ve);am=d(Zn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),fd=s(Zn,"CODE",{});var XT=r(fd);sm=d(XT,"[lang_code] X [eos]"),XT.forEach(t),rm=d(Zn,", where "),_d=s(Zn,"CODE",{});var QT=r(_d);im=d(QT,"lang_code"),QT.forEach(t),dm=d(Zn,` is source
language id for source text and target language id for target text, with `),gd=s(Zn,"CODE",{});var HT=r(gd);lm=d(HT,"X"),HT.forEach(t),cm=d(Zn,` being the source or target text
respectively.`),Zn.forEach(t),gp=u(o),$o=s(o,"P",{});var ou=r($o);pm=d(ou,"MBart-50 has its own tokenizer "),ci=s(ou,"A",{href:!0});var VT=r(ci);um=d(VT,"MBart50Tokenizer"),VT.forEach(t),hm=d(ou,"."),ou.forEach(t),bp=u(o),pi=s(o,"UL",{});var JT=r(pi);bd=s(JT,"LI",{});var KT=r(bd);mm=d(KT,"Supervised training"),KT.forEach(t),JT.forEach(t),kp=u(o),v(va.$$.fragment,o),yp=u(o),ui=s(o,"UL",{});var ZT=r(ui);Ta=s(ZT,"LI",{});var nu=r(Ta);kd=s(nu,"P",{});var YT=r(kd);fm=d(YT,"Generation"),YT.forEach(t),_m=u(nu),Te=s(nu,"P",{});var nt=r(Te);gm=d(nt,"To generate using the mBART-50 multilingual translation models, "),yd=s(nt,"CODE",{});var ew=r(yd);bm=d(ew,"eos_token_id"),ew.forEach(t),km=d(nt,` is used as the
`),vd=s(nt,"CODE",{});var tw=r(vd);ym=d(tw,"decoder_start_token_id"),tw.forEach(t),vm=d(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Td=s(nt,"EM",{});var ow=r(Td);Tm=d(ow,"forced_bos_token_id"),ow.forEach(t),wm=d(nt," parameter to the "),wd=s(nt,"EM",{});var nw=r(wd);Mm=d(nw,"generate"),nw.forEach(t),$m=d(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Md=s(nt,"EM",{});var aw=r(Md);xm=d(aw,"facebook/mbart-50-large-many-to-many"),aw.forEach(t),zm=d(nt," checkpoint."),nt.forEach(t),nu.forEach(t),ZT.forEach(t),vp=u(o),v(wa.$$.fragment,o),Tp=u(o),Gt=s(o,"H2",{class:!0});var au=r(Gt);xo=s(au,"A",{id:!0,class:!0,href:!0});var sw=r(xo);$d=s(sw,"SPAN",{});var rw=r($d);v(Ma.$$.fragment,rw),rw.forEach(t),sw.forEach(t),Fm=u(au),xd=s(au,"SPAN",{});var iw=r(xd);qm=d(iw,"MBartConfig"),iw.forEach(t),au.forEach(t),wp=u(o),Le=s(o,"DIV",{class:!0});var Yn=r(Le);v($a.$$.fragment,Yn),Bm=u(Yn),Wt=s(Yn,"P",{});var Ni=r(Wt);jm=d(Ni,"This is the configuration class to store the configuration of a "),hi=s(Ni,"A",{href:!0});var dw=r(hi);Em=d(dw,"MBartModel"),dw.forEach(t),Cm=d(Ni,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),xa=s(Ni,"A",{href:!0,rel:!0});var lw=r(xa);Pm=d(lw,"facebook/mbart-large-cc25"),lw.forEach(t),Sm=d(Ni," architecture."),Ni.forEach(t),Am=u(Yn),Rt=s(Yn,"P",{});var Di=r(Rt);Om=d(Di,"Configuration objects inherit from "),mi=s(Di,"A",{href:!0});var cw=r(mi);Im=d(cw,"PretrainedConfig"),cw.forEach(t),Nm=d(Di,` and can be used to control the model outputs. Read the
documentation from `),fi=s(Di,"A",{href:!0});var pw=r(fi);Dm=d(pw,"PretrainedConfig"),pw.forEach(t),Lm=d(Di," for more information."),Di.forEach(t),Gm=u(Yn),v(zo.$$.fragment,Yn),Yn.forEach(t),Mp=u(o),Ut=s(o,"H2",{class:!0});var su=r(Ut);Fo=s(su,"A",{id:!0,class:!0,href:!0});var uw=r(Fo);zd=s(uw,"SPAN",{});var hw=r(zd);v(za.$$.fragment,hw),hw.forEach(t),uw.forEach(t),Wm=u(su),Fd=s(su,"SPAN",{});var mw=r(Fd);Rm=d(mw,"MBartTokenizer"),mw.forEach(t),su.forEach(t),$p=u(o),de=s(o,"DIV",{class:!0});var at=r(de);v(Fa.$$.fragment,at),Um=u(at),qd=s(at,"P",{});var fw=r(qd);Xm=d(fw,"Construct an MBART tokenizer."),fw.forEach(t),Qm=u(at),mt=s(at,"P",{});var ea=r(mt);Hm=d(ea,"Adapted from "),_i=s(ea,"A",{href:!0});var _w=r(_i);Vm=d(_w,"RobertaTokenizer"),_w.forEach(t),Jm=d(ea," and "),gi=s(ea,"A",{href:!0});var gw=r(gi);Km=d(gw,"XLNetTokenizer"),gw.forEach(t),Zm=d(ea,`. Based on
`),qa=s(ea,"A",{href:!0,rel:!0});var bw=r(qa);Ym=d(bw,"SentencePiece"),bw.forEach(t),ef=d(ea,"."),ea.forEach(t),tf=u(at),Ba=s(at,"P",{});var ru=r(Ba);of=d(ru,"The tokenization method is "),Bd=s(ru,"CODE",{});var kw=r(Bd);nf=d(kw,"<tokens> <eos> <language code>"),kw.forEach(t),af=d(ru," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),ru.forEach(t),sf=u(at),v(qo.$$.fragment,at),rf=u(at),Je=s(at,"DIV",{class:!0});var ta=r(Je);v(ja.$$.fragment,ta),df=u(ta),Ea=s(ta,"P",{});var iu=r(Ea);lf=d(iu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),jd=s(iu,"CODE",{});var yw=r(jd);cf=d(yw,"X"),yw.forEach(t),pf=d(iu," represents the sequence:"),iu.forEach(t),uf=u(ta),Ca=s(ta,"UL",{});var du=r(Ca);Pa=s(du,"LI",{});var lu=r(Pa);Ed=s(lu,"CODE",{});var vw=r(Ed);hf=d(vw,"input_ids"),vw.forEach(t),mf=d(lu," (for encoder) "),Cd=s(lu,"CODE",{});var Tw=r(Cd);ff=d(Tw,"X [eos, src_lang_code]"),Tw.forEach(t),lu.forEach(t),_f=u(du),Sa=s(du,"LI",{});var cu=r(Sa);Pd=s(cu,"CODE",{});var ww=r(Pd);gf=d(ww,"decoder_input_ids"),ww.forEach(t),bf=d(cu,": (for decoder) "),Sd=s(cu,"CODE",{});var Mw=r(Sd);kf=d(Mw,"X [eos, tgt_lang_code]"),Mw.forEach(t),cu.forEach(t),du.forEach(t),yf=u(ta),Ad=s(ta,"P",{});var $w=r(Ad);vf=d($w,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),$w.forEach(t),ta.forEach(t),at.forEach(t),xp=u(o),Xt=s(o,"H2",{class:!0});var pu=r(Xt);Bo=s(pu,"A",{id:!0,class:!0,href:!0});var xw=r(Bo);Od=s(xw,"SPAN",{});var zw=r(Od);v(Aa.$$.fragment,zw),zw.forEach(t),xw.forEach(t),Tf=u(pu),Id=s(pu,"SPAN",{});var Fw=r(Id);wf=d(Fw,"MBartTokenizerFast"),Fw.forEach(t),pu.forEach(t),zp=u(o),O=s(o,"DIV",{class:!0});var Z=r(O);v(Oa.$$.fragment,Z),Mf=u(Z),Qt=s(Z,"P",{});var Li=r(Qt);$f=d(Li,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Nd=s(Li,"EM",{});var qw=r(Nd);xf=d(qw,"tokenizers"),qw.forEach(t),zf=d(Li,` library). Based on
`),Ia=s(Li,"A",{href:!0,rel:!0});var Bw=r(Ia);Ff=d(Bw,"BPE"),Bw.forEach(t),qf=d(Li,"."),Li.forEach(t),Bf=u(Z),Na=s(Z,"P",{});var uu=r(Na);jf=d(uu,"This tokenizer inherits from "),bi=s(uu,"A",{href:!0});var jw=r(bi);Ef=d(jw,"PreTrainedTokenizerFast"),jw.forEach(t),Cf=d(uu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),uu.forEach(t),Pf=u(Z),Da=s(Z,"P",{});var hu=r(Da);Sf=d(hu,"The tokenization method is "),Dd=s(hu,"CODE",{});var Ew=r(Dd);Af=d(Ew,"<tokens> <eos> <language code>"),Ew.forEach(t),Of=d(hu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),hu.forEach(t),If=u(Z),v(jo.$$.fragment,Z),Nf=u(Z),qe=s(Z,"DIV",{class:!0});var Tt=r(qe);v(La.$$.fragment,Tt),Df=u(Tt),Ld=s(Tt,"P",{});var Cw=r(Ld);Lf=d(Cw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Cw.forEach(t),Gf=u(Tt),Ga=s(Tt,"P",{});var mu=r(Ga);Wf=d(mu,"An MBART sequence has the following format, where "),Gd=s(mu,"CODE",{});var Pw=r(Gd);Rf=d(Pw,"X"),Pw.forEach(t),Uf=d(mu," represents the sequence:"),mu.forEach(t),Xf=u(Tt),Wa=s(Tt,"UL",{});var fu=r(Wa);Ra=s(fu,"LI",{});var _u=r(Ra);Wd=s(_u,"CODE",{});var Sw=r(Wd);Qf=d(Sw,"input_ids"),Sw.forEach(t),Hf=d(_u," (for encoder) "),Rd=s(_u,"CODE",{});var Aw=r(Rd);Vf=d(Aw,"X [eos, src_lang_code]"),Aw.forEach(t),_u.forEach(t),Jf=u(fu),Ua=s(fu,"LI",{});var gu=r(Ua);Ud=s(gu,"CODE",{});var Ow=r(Ud);Kf=d(Ow,"decoder_input_ids"),Ow.forEach(t),Zf=d(gu,": (for decoder) "),Xd=s(gu,"CODE",{});var Iw=r(Xd);Yf=d(Iw,"X [eos, tgt_lang_code]"),Iw.forEach(t),gu.forEach(t),fu.forEach(t),e_=u(Tt),Qd=s(Tt,"P",{});var Nw=r(Qd);t_=d(Nw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Nw.forEach(t),Tt.forEach(t),o_=u(Z),Eo=s(Z,"DIV",{class:!0});var bu=r(Eo);v(Xa.$$.fragment,bu),n_=u(bu),Hd=s(bu,"P",{});var Dw=r(Hd);a_=d(Dw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Dw.forEach(t),bu.forEach(t),s_=u(Z),Co=s(Z,"DIV",{class:!0});var ku=r(Co);v(Qa.$$.fragment,ku),r_=u(ku),Vd=s(ku,"P",{});var Lw=r(Vd);i_=d(Lw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),Lw.forEach(t),ku.forEach(t),d_=u(Z),Po=s(Z,"DIV",{class:!0});var yu=r(Po);v(Ha.$$.fragment,yu),l_=u(yu),Jd=s(yu,"P",{});var Gw=r(Jd);c_=d(Gw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Gw.forEach(t),yu.forEach(t),Z.forEach(t),Fp=u(o),Ht=s(o,"H2",{class:!0});var vu=r(Ht);So=s(vu,"A",{id:!0,class:!0,href:!0});var Ww=r(So);Kd=s(Ww,"SPAN",{});var Rw=r(Kd);v(Va.$$.fragment,Rw),Rw.forEach(t),Ww.forEach(t),p_=u(vu),Zd=s(vu,"SPAN",{});var Uw=r(Zd);u_=d(Uw,"MBart50Tokenizer"),Uw.forEach(t),vu.forEach(t),qp=u(o),I=s(o,"DIV",{class:!0});var Y=r(I);v(Ja.$$.fragment,Y),h_=u(Y),Ka=s(Y,"P",{});var Tu=r(Ka);m_=d(Tu,"Construct a MBart50 tokenizer. Based on "),Za=s(Tu,"A",{href:!0,rel:!0});var Xw=r(Za);f_=d(Xw,"SentencePiece"),Xw.forEach(t),__=d(Tu,"."),Tu.forEach(t),g_=u(Y),Ya=s(Y,"P",{});var wu=r(Ya);b_=d(wu,"This tokenizer inherits from "),ki=s(wu,"A",{href:!0});var Qw=r(ki);k_=d(Qw,"PreTrainedTokenizer"),Qw.forEach(t),y_=d(wu,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wu.forEach(t),v_=u(Y),v(Ao.$$.fragment,Y),T_=u(Y),Ke=s(Y,"DIV",{class:!0});var oa=r(Ke);v(es.$$.fragment,oa),w_=u(oa),ts=s(oa,"P",{});var Mu=r(ts);M_=d(Mu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),Yd=s(Mu,"CODE",{});var Hw=r(Yd);$_=d(Hw,"X"),Hw.forEach(t),x_=d(Mu," represents the sequence:"),Mu.forEach(t),z_=u(oa),os=s(oa,"UL",{});var $u=r(os);ns=s($u,"LI",{});var xu=r(ns);el=s(xu,"CODE",{});var Vw=r(el);F_=d(Vw,"input_ids"),Vw.forEach(t),q_=d(xu," (for encoder) "),tl=s(xu,"CODE",{});var Jw=r(tl);B_=d(Jw,"[src_lang_code] X [eos]"),Jw.forEach(t),xu.forEach(t),j_=u($u),as=s($u,"LI",{});var zu=r(as);ol=s(zu,"CODE",{});var Kw=r(ol);E_=d(Kw,"labels"),Kw.forEach(t),C_=d(zu,": (for decoder) "),nl=s(zu,"CODE",{});var Zw=r(nl);P_=d(Zw,"[tgt_lang_code] X [eos]"),Zw.forEach(t),zu.forEach(t),$u.forEach(t),S_=u(oa),al=s(oa,"P",{});var Yw=r(al);A_=d(Yw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Yw.forEach(t),oa.forEach(t),O_=u(Y),Oo=s(Y,"DIV",{class:!0});var Fu=r(Oo);v(ss.$$.fragment,Fu),I_=u(Fu),sl=s(Fu,"P",{});var eM=r(sl);N_=d(eM,"Converts a sequence of tokens (strings for sub-words) in a single string."),eM.forEach(t),Fu.forEach(t),D_=u(Y),Io=s(Y,"DIV",{class:!0});var qu=r(Io);v(rs.$$.fragment,qu),L_=u(qu),is=s(qu,"P",{});var Bu=r(is);G_=d(Bu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rl=s(Bu,"CODE",{});var tM=r(rl);W_=d(tM,"prepare_for_model"),tM.forEach(t),R_=d(Bu," method."),Bu.forEach(t),qu.forEach(t),U_=u(Y),No=s(Y,"DIV",{class:!0});var ju=r(No);v(ds.$$.fragment,ju),X_=u(ju),il=s(ju,"P",{});var oM=r(il);Q_=d(oM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),oM.forEach(t),ju.forEach(t),H_=u(Y),Do=s(Y,"DIV",{class:!0});var Eu=r(Do);v(ls.$$.fragment,Eu),V_=u(Eu),dl=s(Eu,"P",{});var nM=r(dl);J_=d(nM,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),nM.forEach(t),Eu.forEach(t),Y.forEach(t),Bp=u(o),Vt=s(o,"H2",{class:!0});var Cu=r(Vt);Lo=s(Cu,"A",{id:!0,class:!0,href:!0});var aM=r(Lo);ll=s(aM,"SPAN",{});var sM=r(ll);v(cs.$$.fragment,sM),sM.forEach(t),aM.forEach(t),K_=u(Cu),cl=s(Cu,"SPAN",{});var rM=r(cl);Z_=d(rM,"MBart50TokenizerFast"),rM.forEach(t),Cu.forEach(t),jp=u(o),J=s(o,"DIV",{class:!0});var Se=r(J);v(ps.$$.fragment,Se),Y_=u(Se),Jt=s(Se,"P",{});var Gi=r(Jt);eg=d(Gi,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),pl=s(Gi,"EM",{});var iM=r(pl);tg=d(iM,"tokenizers"),iM.forEach(t),og=d(Gi,` library). Based on
`),us=s(Gi,"A",{href:!0,rel:!0});var dM=r(us);ng=d(dM,"BPE"),dM.forEach(t),ag=d(Gi,"."),Gi.forEach(t),sg=u(Se),hs=s(Se,"P",{});var Pu=r(hs);rg=d(Pu,"This tokenizer inherits from "),yi=s(Pu,"A",{href:!0});var lM=r(yi);ig=d(lM,"PreTrainedTokenizerFast"),lM.forEach(t),dg=d(Pu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Pu.forEach(t),lg=u(Se),v(Go.$$.fragment,Se),cg=u(Se),Be=s(Se,"DIV",{class:!0});var wt=r(Be);v(ms.$$.fragment,wt),pg=u(wt),ul=s(wt,"P",{});var cM=r(ul);ug=d(cM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),cM.forEach(t),hg=u(wt),fs=s(wt,"P",{});var Su=r(fs);mg=d(Su,"An MBART-50 sequence has the following format, where "),hl=s(Su,"CODE",{});var pM=r(hl);fg=d(pM,"X"),pM.forEach(t),_g=d(Su," represents the sequence:"),Su.forEach(t),gg=u(wt),_s=s(wt,"UL",{});var Au=r(_s);gs=s(Au,"LI",{});var Ou=r(gs);ml=s(Ou,"CODE",{});var uM=r(ml);bg=d(uM,"input_ids"),uM.forEach(t),kg=d(Ou," (for encoder) "),fl=s(Ou,"CODE",{});var hM=r(fl);yg=d(hM,"[src_lang_code] X [eos]"),hM.forEach(t),Ou.forEach(t),vg=u(Au),bs=s(Au,"LI",{});var Iu=r(bs);_l=s(Iu,"CODE",{});var mM=r(_l);Tg=d(mM,"labels"),mM.forEach(t),wg=d(Iu,": (for decoder) "),gl=s(Iu,"CODE",{});var fM=r(gl);Mg=d(fM,"[tgt_lang_code] X [eos]"),fM.forEach(t),Iu.forEach(t),Au.forEach(t),$g=u(wt),bl=s(wt,"P",{});var _M=r(bl);xg=d(_M,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),_M.forEach(t),wt.forEach(t),zg=u(Se),Wo=s(Se,"DIV",{class:!0});var Nu=r(Wo);v(ks.$$.fragment,Nu),Fg=u(Nu),kl=s(Nu,"P",{});var gM=r(kl);qg=d(gM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),gM.forEach(t),Nu.forEach(t),Bg=u(Se),Ro=s(Se,"DIV",{class:!0});var Du=r(Ro);v(ys.$$.fragment,Du),jg=u(Du),yl=s(Du,"P",{});var bM=r(yl);Eg=d(bM,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),bM.forEach(t),Du.forEach(t),Se.forEach(t),Ep=u(o),Kt=s(o,"H2",{class:!0});var Lu=r(Kt);Uo=s(Lu,"A",{id:!0,class:!0,href:!0});var kM=r(Uo);vl=s(kM,"SPAN",{});var yM=r(vl);v(vs.$$.fragment,yM),yM.forEach(t),kM.forEach(t),Cg=u(Lu),Tl=s(Lu,"SPAN",{});var vM=r(Tl);Pg=d(vM,"MBartModel"),vM.forEach(t),Lu.forEach(t),Cp=u(o),Ge=s(o,"DIV",{class:!0});var na=r(Ge);v(Ts.$$.fragment,na),Sg=u(na),ws=s(na,"P",{});var Gu=r(ws);Ag=d(Gu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vi=s(Gu,"A",{href:!0});var TM=r(vi);Og=d(TM,"PreTrainedModel"),TM.forEach(t),Ig=d(Gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu.forEach(t),Ng=u(na),Ms=s(na,"P",{});var Wu=r(Ms);Dg=d(Wu,"This model is also a PyTorch "),$s=s(Wu,"A",{href:!0,rel:!0});var wM=r($s);Lg=d(wM,"torch.nn.Module"),wM.forEach(t),Gg=d(Wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wu.forEach(t),Wg=u(na),Ze=s(na,"DIV",{class:!0});var aa=r(Ze);v(xs.$$.fragment,aa),Rg=u(aa),Zt=s(aa,"P",{});var Wi=r(Zt);Ug=d(Wi,"The "),Ti=s(Wi,"A",{href:!0});var MM=r(Ti);Xg=d(MM,"MBartModel"),MM.forEach(t),Qg=d(Wi," forward method, overrides the "),wl=s(Wi,"CODE",{});var $M=r(wl);Hg=d($M,"__call__"),$M.forEach(t),Vg=d(Wi," special method."),Wi.forEach(t),Jg=u(aa),v(Xo.$$.fragment,aa),Kg=u(aa),v(Qo.$$.fragment,aa),aa.forEach(t),na.forEach(t),Pp=u(o),Yt=s(o,"H2",{class:!0});var Ru=r(Yt);Ho=s(Ru,"A",{id:!0,class:!0,href:!0});var xM=r(Ho);Ml=s(xM,"SPAN",{});var zM=r(Ml);v(zs.$$.fragment,zM),zM.forEach(t),xM.forEach(t),Zg=u(Ru),$l=s(Ru,"SPAN",{});var FM=r($l);Yg=d(FM,"MBartForConditionalGeneration"),FM.forEach(t),Ru.forEach(t),Sp=u(o),We=s(o,"DIV",{class:!0});var sa=r(We);v(Fs.$$.fragment,sa),eb=u(sa),qs=s(sa,"P",{});var Uu=r(qs);tb=d(Uu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),wi=s(Uu,"A",{href:!0});var qM=r(wi);ob=d(qM,"PreTrainedModel"),qM.forEach(t),nb=d(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uu.forEach(t),ab=u(sa),Bs=s(sa,"P",{});var Xu=r(Bs);sb=d(Xu,"This model is also a PyTorch "),js=s(Xu,"A",{href:!0,rel:!0});var BM=r(js);rb=d(BM,"torch.nn.Module"),BM.forEach(t),ib=d(Xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xu.forEach(t),db=u(sa),je=s(sa,"DIV",{class:!0});var Mt=r(je);v(Es.$$.fragment,Mt),lb=u(Mt),eo=s(Mt,"P",{});var Ri=r(eo);cb=d(Ri,"The "),Mi=s(Ri,"A",{href:!0});var jM=r(Mi);pb=d(jM,"MBartForConditionalGeneration"),jM.forEach(t),ub=d(Ri," forward method, overrides the "),xl=s(Ri,"CODE",{});var EM=r(xl);hb=d(EM,"__call__"),EM.forEach(t),mb=d(Ri," special method."),Ri.forEach(t),fb=u(Mt),v(Vo.$$.fragment,Mt),_b=u(Mt),v(Jo.$$.fragment,Mt),gb=u(Mt),v(Ko.$$.fragment,Mt),Mt.forEach(t),sa.forEach(t),Ap=u(o),to=s(o,"H2",{class:!0});var Qu=r(to);Zo=s(Qu,"A",{id:!0,class:!0,href:!0});var CM=r(Zo);zl=s(CM,"SPAN",{});var PM=r(zl);v(Cs.$$.fragment,PM),PM.forEach(t),CM.forEach(t),bb=u(Qu),Fl=s(Qu,"SPAN",{});var SM=r(Fl);kb=d(SM,"MBartForQuestionAnswering"),SM.forEach(t),Qu.forEach(t),Op=u(o),we=s(o,"DIV",{class:!0});var $t=r(we);v(Ps.$$.fragment,$t),yb=u($t),oo=s($t,"P",{});var Ui=r(oo);vb=d(Ui,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ql=s(Ui,"CODE",{});var AM=r(ql);Tb=d(AM,"span start logits"),AM.forEach(t),wb=d(Ui," and "),Bl=s(Ui,"CODE",{});var OM=r(Bl);Mb=d(OM,"span end logits"),OM.forEach(t),$b=d(Ui,")."),Ui.forEach(t),xb=u($t),Ss=s($t,"P",{});var Hu=r(Ss);zb=d(Hu,"This model inherits from "),$i=s(Hu,"A",{href:!0});var IM=r($i);Fb=d(IM,"PreTrainedModel"),IM.forEach(t),qb=d(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),Bb=u($t),As=s($t,"P",{});var Vu=r(As);jb=d(Vu,"This model is also a PyTorch "),Os=s(Vu,"A",{href:!0,rel:!0});var NM=r(Os);Eb=d(NM,"torch.nn.Module"),NM.forEach(t),Cb=d(Vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vu.forEach(t),Pb=u($t),Ee=s($t,"DIV",{class:!0});var xt=r(Ee);v(Is.$$.fragment,xt),Sb=u(xt),no=s(xt,"P",{});var Xi=r(no);Ab=d(Xi,"The "),xi=s(Xi,"A",{href:!0});var DM=r(xi);Ob=d(DM,"MBartForQuestionAnswering"),DM.forEach(t),Ib=d(Xi," forward method, overrides the "),jl=s(Xi,"CODE",{});var LM=r(jl);Nb=d(LM,"__call__"),LM.forEach(t),Db=d(Xi," special method."),Xi.forEach(t),Lb=u(xt),v(Yo.$$.fragment,xt),Gb=u(xt),v(en.$$.fragment,xt),Wb=u(xt),v(tn.$$.fragment,xt),xt.forEach(t),$t.forEach(t),Ip=u(o),ao=s(o,"H2",{class:!0});var Ju=r(ao);on=s(Ju,"A",{id:!0,class:!0,href:!0});var GM=r(on);El=s(GM,"SPAN",{});var WM=r(El);v(Ns.$$.fragment,WM),WM.forEach(t),GM.forEach(t),Rb=u(Ju),Cl=s(Ju,"SPAN",{});var RM=r(Cl);Ub=d(RM,"MBartForSequenceClassification"),RM.forEach(t),Ju.forEach(t),Np=u(o),Me=s(o,"DIV",{class:!0});var zt=r(Me);v(Ds.$$.fragment,zt),Xb=u(zt),Pl=s(zt,"P",{});var UM=r(Pl);Qb=d(UM,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),UM.forEach(t),Hb=u(zt),Ls=s(zt,"P",{});var Ku=r(Ls);Vb=d(Ku,"This model inherits from "),zi=s(Ku,"A",{href:!0});var XM=r(zi);Jb=d(XM,"PreTrainedModel"),XM.forEach(t),Kb=d(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(t),Zb=u(zt),Gs=s(zt,"P",{});var Zu=r(Gs);Yb=d(Zu,"This model is also a PyTorch "),Ws=s(Zu,"A",{href:!0,rel:!0});var QM=r(Ws);ek=d(QM,"torch.nn.Module"),QM.forEach(t),tk=d(Zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zu.forEach(t),ok=u(zt),K=s(zt,"DIV",{class:!0});var Ae=r(K);v(Rs.$$.fragment,Ae),nk=u(Ae),so=s(Ae,"P",{});var Qi=r(so);ak=d(Qi,"The "),Fi=s(Qi,"A",{href:!0});var HM=r(Fi);sk=d(HM,"MBartForSequenceClassification"),HM.forEach(t),rk=d(Qi," forward method, overrides the "),Sl=s(Qi,"CODE",{});var VM=r(Sl);ik=d(VM,"__call__"),VM.forEach(t),dk=d(Qi," special method."),Qi.forEach(t),lk=u(Ae),v(nn.$$.fragment,Ae),ck=u(Ae),v(an.$$.fragment,Ae),pk=u(Ae),v(sn.$$.fragment,Ae),uk=u(Ae),v(rn.$$.fragment,Ae),hk=u(Ae),v(dn.$$.fragment,Ae),Ae.forEach(t),zt.forEach(t),Dp=u(o),ro=s(o,"H2",{class:!0});var Yu=r(ro);ln=s(Yu,"A",{id:!0,class:!0,href:!0});var JM=r(ln);Al=s(JM,"SPAN",{});var KM=r(Al);v(Us.$$.fragment,KM),KM.forEach(t),JM.forEach(t),mk=u(Yu),Ol=s(Yu,"SPAN",{});var ZM=r(Ol);fk=d(ZM,"MBartForCausalLM"),ZM.forEach(t),Yu.forEach(t),Lp=u(o),io=s(o,"DIV",{class:!0});var eh=r(io);v(Xs.$$.fragment,eh),_k=u(eh),cn=s(eh,"DIV",{class:!0});var th=r(cn);v(Qs.$$.fragment,th),gk=u(th),v(pn.$$.fragment,th),th.forEach(t),eh.forEach(t),Gp=u(o),lo=s(o,"H2",{class:!0});var oh=r(lo);un=s(oh,"A",{id:!0,class:!0,href:!0});var YM=r(un);Il=s(YM,"SPAN",{});var e$=r(Il);v(Hs.$$.fragment,e$),e$.forEach(t),YM.forEach(t),bk=u(oh),Nl=s(oh,"SPAN",{});var t$=r(Nl);kk=d(t$,"TFMBartModel"),t$.forEach(t),oh.forEach(t),Wp=u(o),$e=s(o,"DIV",{class:!0});var Ft=r($e);v(Vs.$$.fragment,Ft),yk=u(Ft),Js=s(Ft,"P",{});var nh=r(Js);vk=d(nh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=s(nh,"A",{href:!0});var o$=r(qi);Tk=d(o$,"TFPreTrainedModel"),o$.forEach(t),wk=d(nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nh.forEach(t),Mk=u(Ft),Ks=s(Ft,"P",{});var ah=r(Ks);$k=d(ah,"This model is also a "),Zs=s(ah,"A",{href:!0,rel:!0});var n$=r(Zs);xk=d(n$,"tf.keras.Model"),n$.forEach(t),zk=d(ah,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ah.forEach(t),Fk=u(Ft),v(hn.$$.fragment,Ft),qk=u(Ft),Ye=s(Ft,"DIV",{class:!0});var ra=r(Ye);v(Ys.$$.fragment,ra),Bk=u(ra),co=s(ra,"P",{});var Hi=r(co);jk=d(Hi,"The "),Bi=s(Hi,"A",{href:!0});var a$=r(Bi);Ek=d(a$,"TFMBartModel"),a$.forEach(t),Ck=d(Hi," forward method, overrides the "),Dl=s(Hi,"CODE",{});var s$=r(Dl);Pk=d(s$,"__call__"),s$.forEach(t),Sk=d(Hi," special method."),Hi.forEach(t),Ak=u(ra),v(mn.$$.fragment,ra),Ok=u(ra),v(fn.$$.fragment,ra),ra.forEach(t),Ft.forEach(t),Rp=u(o),po=s(o,"H2",{class:!0});var sh=r(po);_n=s(sh,"A",{id:!0,class:!0,href:!0});var r$=r(_n);Ll=s(r$,"SPAN",{});var i$=r(Ll);v(er.$$.fragment,i$),i$.forEach(t),r$.forEach(t),Ik=u(sh),Gl=s(sh,"SPAN",{});var d$=r(Gl);Nk=d(d$,"TFMBartForConditionalGeneration"),d$.forEach(t),sh.forEach(t),Up=u(o),xe=s(o,"DIV",{class:!0});var qt=r(xe);v(tr.$$.fragment,qt),Dk=u(qt),or=s(qt,"P",{});var rh=r(or);Lk=d(rh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ji=s(rh,"A",{href:!0});var l$=r(ji);Gk=d(l$,"TFPreTrainedModel"),l$.forEach(t),Wk=d(rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh.forEach(t),Rk=u(qt),nr=s(qt,"P",{});var ih=r(nr);Uk=d(ih,"This model is also a "),ar=s(ih,"A",{href:!0,rel:!0});var c$=r(ar);Xk=d(c$,"tf.keras.Model"),c$.forEach(t),Qk=d(ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ih.forEach(t),Hk=u(qt),v(gn.$$.fragment,qt),Vk=u(qt),Ce=s(qt,"DIV",{class:!0});var Bt=r(Ce);v(sr.$$.fragment,Bt),Jk=u(Bt),uo=s(Bt,"P",{});var Vi=r(uo);Kk=d(Vi,"The "),Ei=s(Vi,"A",{href:!0});var p$=r(Ei);Zk=d(p$,"TFMBartForConditionalGeneration"),p$.forEach(t),Yk=d(Vi," forward method, overrides the "),Wl=s(Vi,"CODE",{});var u$=r(Wl);ey=d(u$,"__call__"),u$.forEach(t),ty=d(Vi," special method."),Vi.forEach(t),oy=u(Bt),v(bn.$$.fragment,Bt),ny=u(Bt),v(kn.$$.fragment,Bt),ay=u(Bt),v(yn.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),Xp=u(o),ho=s(o,"H2",{class:!0});var dh=r(ho);vn=s(dh,"A",{id:!0,class:!0,href:!0});var h$=r(vn);Rl=s(h$,"SPAN",{});var m$=r(Rl);v(rr.$$.fragment,m$),m$.forEach(t),h$.forEach(t),sy=u(dh),Ul=s(dh,"SPAN",{});var f$=r(Ul);ry=d(f$,"FlaxMBartModel"),f$.forEach(t),dh.forEach(t),Qp=u(o),W=s(o,"DIV",{class:!0});var pe=r(W);v(ir.$$.fragment,pe),iy=u(pe),dr=s(pe,"P",{});var lh=r(dr);dy=d(lh,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ci=s(lh,"A",{href:!0});var _$=r(Ci);ly=d(_$,"FlaxPreTrainedModel"),_$.forEach(t),cy=d(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(t),py=u(pe),lr=s(pe,"P",{});var ch=r(lr);uy=d(ch,`This model is also a Flax Linen
`),cr=s(ch,"A",{href:!0,rel:!0});var g$=r(cr);hy=d(g$,"flax.nn.Module"),g$.forEach(t),my=d(ch,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ch.forEach(t),fy=u(pe),Xl=s(pe,"P",{});var b$=r(Xl);_y=d(b$,"Finally, this model supports inherent JAX features such as:"),b$.forEach(t),gy=u(pe),ft=s(pe,"UL",{});var ia=r(ft);Ql=s(ia,"LI",{});var k$=r(Ql);pr=s(k$,"A",{href:!0,rel:!0});var y$=r(pr);by=d(y$,"Just-In-Time (JIT) compilation"),y$.forEach(t),k$.forEach(t),ky=u(ia),Hl=s(ia,"LI",{});var v$=r(Hl);ur=s(v$,"A",{href:!0,rel:!0});var T$=r(ur);yy=d(T$,"Automatic Differentiation"),T$.forEach(t),v$.forEach(t),vy=u(ia),Vl=s(ia,"LI",{});var w$=r(Vl);hr=s(w$,"A",{href:!0,rel:!0});var M$=r(hr);Ty=d(M$,"Vectorization"),M$.forEach(t),w$.forEach(t),wy=u(ia),Jl=s(ia,"LI",{});var $$=r(Jl);mr=s($$,"A",{href:!0,rel:!0});var x$=r(mr);My=d(x$,"Parallelization"),x$.forEach(t),$$.forEach(t),ia.forEach(t),$y=u(pe),et=s(pe,"DIV",{class:!0});var da=r(et);v(fr.$$.fragment,da),xy=u(da),mo=s(da,"P",{});var Ji=r(mo);zy=d(Ji,"The "),Kl=s(Ji,"CODE",{});var z$=r(Kl);Fy=d(z$,"FlaxMBartPreTrainedModel"),z$.forEach(t),qy=d(Ji," forward method, overrides the "),Zl=s(Ji,"CODE",{});var F$=r(Zl);By=d(F$,"__call__"),F$.forEach(t),jy=d(Ji," special method."),Ji.forEach(t),Ey=u(da),v(Tn.$$.fragment,da),Cy=u(da),v(wn.$$.fragment,da),da.forEach(t),Py=u(pe),Mn=s(pe,"DIV",{class:!0});var ph=r(Mn);v(_r.$$.fragment,ph),Sy=u(ph),v($n.$$.fragment,ph),ph.forEach(t),Ay=u(pe),xn=s(pe,"DIV",{class:!0});var uh=r(xn);v(gr.$$.fragment,uh),Oy=u(uh),v(zn.$$.fragment,uh),uh.forEach(t),pe.forEach(t),Hp=u(o),fo=s(o,"H2",{class:!0});var hh=r(fo);Fn=s(hh,"A",{id:!0,class:!0,href:!0});var q$=r(Fn);Yl=s(q$,"SPAN",{});var B$=r(Yl);v(br.$$.fragment,B$),B$.forEach(t),q$.forEach(t),Iy=u(hh),ec=s(hh,"SPAN",{});var j$=r(ec);Ny=d(j$,"FlaxMBartForConditionalGeneration"),j$.forEach(t),hh.forEach(t),Vp=u(o),R=s(o,"DIV",{class:!0});var ue=r(R);v(kr.$$.fragment,ue),Dy=u(ue),yr=s(ue,"P",{});var mh=r(yr);Ly=d(mh,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pi=s(mh,"A",{href:!0});var E$=r(Pi);Gy=d(E$,"FlaxPreTrainedModel"),E$.forEach(t),Wy=d(mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh.forEach(t),Ry=u(ue),vr=s(ue,"P",{});var fh=r(vr);Uy=d(fh,`This model is also a Flax Linen
`),Tr=s(fh,"A",{href:!0,rel:!0});var C$=r(Tr);Xy=d(C$,"flax.nn.Module"),C$.forEach(t),Qy=d(fh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fh.forEach(t),Hy=u(ue),tc=s(ue,"P",{});var P$=r(tc);Vy=d(P$,"Finally, this model supports inherent JAX features such as:"),P$.forEach(t),Jy=u(ue),_t=s(ue,"UL",{});var la=r(_t);oc=s(la,"LI",{});var S$=r(oc);wr=s(S$,"A",{href:!0,rel:!0});var A$=r(wr);Ky=d(A$,"Just-In-Time (JIT) compilation"),A$.forEach(t),S$.forEach(t),Zy=u(la),nc=s(la,"LI",{});var O$=r(nc);Mr=s(O$,"A",{href:!0,rel:!0});var I$=r(Mr);Yy=d(I$,"Automatic Differentiation"),I$.forEach(t),O$.forEach(t),ev=u(la),ac=s(la,"LI",{});var N$=r(ac);$r=s(N$,"A",{href:!0,rel:!0});var D$=r($r);tv=d(D$,"Vectorization"),D$.forEach(t),N$.forEach(t),ov=u(la),sc=s(la,"LI",{});var L$=r(sc);xr=s(L$,"A",{href:!0,rel:!0});var G$=r(xr);nv=d(G$,"Parallelization"),G$.forEach(t),L$.forEach(t),la.forEach(t),av=u(ue),Pe=s(ue,"DIV",{class:!0});var jt=r(Pe);v(zr.$$.fragment,jt),sv=u(jt),_o=s(jt,"P",{});var Ki=r(_o);rv=d(Ki,"The "),rc=s(Ki,"CODE",{});var W$=r(rc);iv=d(W$,"FlaxMBartPreTrainedModel"),W$.forEach(t),dv=d(Ki," forward method, overrides the "),ic=s(Ki,"CODE",{});var R$=r(ic);lv=d(R$,"__call__"),R$.forEach(t),cv=d(Ki," special method."),Ki.forEach(t),pv=u(jt),v(qn.$$.fragment,jt),uv=u(jt),v(Bn.$$.fragment,jt),hv=u(jt),v(jn.$$.fragment,jt),jt.forEach(t),mv=u(ue),En=s(ue,"DIV",{class:!0});var _h=r(En);v(Fr.$$.fragment,_h),fv=u(_h),v(Cn.$$.fragment,_h),_h.forEach(t),_v=u(ue),Pn=s(ue,"DIV",{class:!0});var gh=r(Pn);v(qr.$$.fragment,gh),gv=u(gh),v(Sn.$$.fragment,gh),gh.forEach(t),ue.forEach(t),Jp=u(o),go=s(o,"H2",{class:!0});var bh=r(go);An=s(bh,"A",{id:!0,class:!0,href:!0});var U$=r(An);dc=s(U$,"SPAN",{});var X$=r(dc);v(Br.$$.fragment,X$),X$.forEach(t),U$.forEach(t),bv=u(bh),lc=s(bh,"SPAN",{});var Q$=r(lc);kv=d(Q$,"FlaxMBartForSequenceClassification"),Q$.forEach(t),bh.forEach(t),Kp=u(o),N=s(o,"DIV",{class:!0});var ee=r(N);v(jr.$$.fragment,ee),yv=u(ee),cc=s(ee,"P",{});var H$=r(cc);vv=d(H$,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),H$.forEach(t),Tv=u(ee),Er=s(ee,"P",{});var kh=r(Er);wv=d(kh,"This model inherits from "),Si=s(kh,"A",{href:!0});var V$=r(Si);Mv=d(V$,"FlaxPreTrainedModel"),V$.forEach(t),$v=d(kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh.forEach(t),xv=u(ee),Cr=s(ee,"P",{});var yh=r(Cr);zv=d(yh,`This model is also a Flax Linen
`),Pr=s(yh,"A",{href:!0,rel:!0});var J$=r(Pr);Fv=d(J$,"flax.nn.Module"),J$.forEach(t),qv=d(yh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yh.forEach(t),Bv=u(ee),pc=s(ee,"P",{});var K$=r(pc);jv=d(K$,"Finally, this model supports inherent JAX features such as:"),K$.forEach(t),Ev=u(ee),gt=s(ee,"UL",{});var ca=r(gt);uc=s(ca,"LI",{});var Z$=r(uc);Sr=s(Z$,"A",{href:!0,rel:!0});var Y$=r(Sr);Cv=d(Y$,"Just-In-Time (JIT) compilation"),Y$.forEach(t),Z$.forEach(t),Pv=u(ca),hc=s(ca,"LI",{});var ex=r(hc);Ar=s(ex,"A",{href:!0,rel:!0});var tx=r(Ar);Sv=d(tx,"Automatic Differentiation"),tx.forEach(t),ex.forEach(t),Av=u(ca),mc=s(ca,"LI",{});var ox=r(mc);Or=s(ox,"A",{href:!0,rel:!0});var nx=r(Or);Ov=d(nx,"Vectorization"),nx.forEach(t),ox.forEach(t),Iv=u(ca),fc=s(ca,"LI",{});var ax=r(fc);Ir=s(ax,"A",{href:!0,rel:!0});var sx=r(Ir);Nv=d(sx,"Parallelization"),sx.forEach(t),ax.forEach(t),ca.forEach(t),Dv=u(ee),tt=s(ee,"DIV",{class:!0});var pa=r(tt);v(Nr.$$.fragment,pa),Lv=u(pa),bo=s(pa,"P",{});var Zi=r(bo);Gv=d(Zi,"The "),_c=s(Zi,"CODE",{});var rx=r(_c);Wv=d(rx,"FlaxMBartPreTrainedModel"),rx.forEach(t),Rv=d(Zi," forward method, overrides the "),gc=s(Zi,"CODE",{});var ix=r(gc);Uv=d(ix,"__call__"),ix.forEach(t),Xv=d(Zi," special method."),Zi.forEach(t),Qv=u(pa),v(On.$$.fragment,pa),Hv=u(pa),v(In.$$.fragment,pa),pa.forEach(t),Vv=u(ee),Nn=s(ee,"DIV",{class:!0});var vh=r(Nn);v(Dr.$$.fragment,vh),Jv=u(vh),v(Dn.$$.fragment,vh),vh.forEach(t),Kv=u(ee),Ln=s(ee,"DIV",{class:!0});var Th=r(Ln);v(Lr.$$.fragment,Th),Zv=u(Th),v(Gn.$$.fragment,Th),Th.forEach(t),ee.forEach(t),Zp=u(o),ko=s(o,"H2",{class:!0});var wh=r(ko);Wn=s(wh,"A",{id:!0,class:!0,href:!0});var dx=r(Wn);bc=s(dx,"SPAN",{});var lx=r(bc);v(Gr.$$.fragment,lx),lx.forEach(t),dx.forEach(t),Yv=u(wh),kc=s(wh,"SPAN",{});var cx=r(kc);eT=d(cx,"FlaxMBartForQuestionAnswering"),cx.forEach(t),wh.forEach(t),Yp=u(o),D=s(o,"DIV",{class:!0});var te=r(D);v(Wr.$$.fragment,te),tT=u(te),yo=s(te,"P",{});var Yi=r(yo);oT=d(Yi,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yc=s(Yi,"CODE",{});var px=r(yc);nT=d(px,"span start logits"),px.forEach(t),aT=d(Yi," and "),vc=s(Yi,"CODE",{});var ux=r(vc);sT=d(ux,"span end logits"),ux.forEach(t),rT=d(Yi,")."),Yi.forEach(t),iT=u(te),Rr=s(te,"P",{});var Mh=r(Rr);dT=d(Mh,"This model inherits from "),Ai=s(Mh,"A",{href:!0});var hx=r(Ai);lT=d(hx,"FlaxPreTrainedModel"),hx.forEach(t),cT=d(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mh.forEach(t),pT=u(te),Ur=s(te,"P",{});var $h=r(Ur);uT=d($h,`This model is also a Flax Linen
`),Xr=s($h,"A",{href:!0,rel:!0});var mx=r(Xr);hT=d(mx,"flax.nn.Module"),mx.forEach(t),mT=d($h,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$h.forEach(t),fT=u(te),Tc=s(te,"P",{});var fx=r(Tc);_T=d(fx,"Finally, this model supports inherent JAX features such as:"),fx.forEach(t),gT=u(te),bt=s(te,"UL",{});var ua=r(bt);wc=s(ua,"LI",{});var _x=r(wc);Qr=s(_x,"A",{href:!0,rel:!0});var gx=r(Qr);bT=d(gx,"Just-In-Time (JIT) compilation"),gx.forEach(t),_x.forEach(t),kT=u(ua),Mc=s(ua,"LI",{});var bx=r(Mc);Hr=s(bx,"A",{href:!0,rel:!0});var kx=r(Hr);yT=d(kx,"Automatic Differentiation"),kx.forEach(t),bx.forEach(t),vT=u(ua),$c=s(ua,"LI",{});var yx=r($c);Vr=s(yx,"A",{href:!0,rel:!0});var vx=r(Vr);TT=d(vx,"Vectorization"),vx.forEach(t),yx.forEach(t),wT=u(ua),xc=s(ua,"LI",{});var Tx=r(xc);Jr=s(Tx,"A",{href:!0,rel:!0});var wx=r(Jr);MT=d(wx,"Parallelization"),wx.forEach(t),Tx.forEach(t),ua.forEach(t),$T=u(te),ot=s(te,"DIV",{class:!0});var ha=r(ot);v(Kr.$$.fragment,ha),xT=u(ha),vo=s(ha,"P",{});var ed=r(vo);zT=d(ed,"The "),zc=s(ed,"CODE",{});var Mx=r(zc);FT=d(Mx,"FlaxMBartPreTrainedModel"),Mx.forEach(t),qT=d(ed," forward method, overrides the "),Fc=s(ed,"CODE",{});var $x=r(Fc);BT=d($x,"__call__"),$x.forEach(t),jT=d(ed," special method."),ed.forEach(t),ET=u(ha),v(Rn.$$.fragment,ha),CT=u(ha),v(Un.$$.fragment,ha),ha.forEach(t),PT=u(te),Xn=s(te,"DIV",{class:!0});var xh=r(Xn);v(Zr.$$.fragment,xh),ST=u(xh),v(Qn.$$.fragment,xh),xh.forEach(t),AT=u(te),Hn=s(te,"DIV",{class:!0});var zh=r(Hn);v(Yr.$$.fragment,zh),OT=u(zh),v(Vn.$$.fragment,zh),zh.forEach(t),te.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(v1)),f(c,"id","mbart-and-mbart50"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#mbart-and-mbart50"),f(m,"class","relative group"),f(me,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(me,"rel","nofollow"),f(L,"id","overview-of-mbart"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#overview-of-mbart"),f(Q,"class","relative group"),f(H,"href","https://arxiv.org/abs/2001.08210"),f(H,"rel","nofollow"),f(be,"href","https://huggingface.co/valhalla"),f(be,"rel","nofollow"),f(ke,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),f(ke,"rel","nofollow"),f(j,"id","training-of-mbart"),f(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(j,"href","#training-of-mbart"),f(z,"class","relative group"),f(ma,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),f(wo,"id","overview-of-mbart50"),f(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wo,"href","#overview-of-mbart50"),f(Dt,"class","relative group"),f(ka,"href","https://arxiv.org/abs/2008.00401"),f(ka,"rel","nofollow"),f(Mo,"id","training-of-mbart50"),f(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mo,"href","#training-of-mbart50"),f(Lt,"class","relative group"),f(ci,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBart50Tokenizer"),f(xo,"id","transformers.MBartConfig"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#transformers.MBartConfig"),f(Gt,"class","relative group"),f(hi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(xa,"href","https://huggingface.co/facebook/mbart-large-cc25"),f(xa,"rel","nofollow"),f(mi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(fi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.MBartTokenizer"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.MBartTokenizer"),f(Ut,"class","relative group"),f(_i,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),f(gi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(qa,"href","https://github.com/google/sentencepiece"),f(qa,"rel","nofollow"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"id","transformers.MBartTokenizerFast"),f(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bo,"href","#transformers.MBartTokenizerFast"),f(Xt,"class","relative group"),f(Ia,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(Ia,"rel","nofollow"),f(bi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.MBart50Tokenizer"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.MBart50Tokenizer"),f(Ht,"class","relative group"),f(Za,"href","https://github.com/google/sentencepiece"),f(Za,"rel","nofollow"),f(ki,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"id","transformers.MBart50TokenizerFast"),f(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Lo,"href","#transformers.MBart50TokenizerFast"),f(Vt,"class","relative group"),f(us,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(us,"rel","nofollow"),f(yi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.MBartModel"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.MBartModel"),f(Kt,"class","relative group"),f(vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f($s,"rel","nofollow"),f(Ti,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.MBartForConditionalGeneration"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.MBartForConditionalGeneration"),f(Yt,"class","relative group"),f(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(js,"rel","nofollow"),f(Mi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zo,"id","transformers.MBartForQuestionAnswering"),f(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zo,"href","#transformers.MBartForQuestionAnswering"),f(to,"class","relative group"),f($i,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Os,"rel","nofollow"),f(xi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.MBartForSequenceClassification"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.MBartForSequenceClassification"),f(ao,"class","relative group"),f(zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ws,"rel","nofollow"),f(Fi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForSequenceClassification"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.MBartForCausalLM"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.MBartForCausalLM"),f(ro,"class","relative group"),f(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"id","transformers.TFMBartModel"),f(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(un,"href","#transformers.TFMBartModel"),f(lo,"class","relative group"),f(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Zs,"rel","nofollow"),f(Bi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_n,"id","transformers.TFMBartForConditionalGeneration"),f(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_n,"href","#transformers.TFMBartForConditionalGeneration"),f(po,"class","relative group"),f(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ar,"rel","nofollow"),f(Ei,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vn,"id","transformers.FlaxMBartModel"),f(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vn,"href","#transformers.FlaxMBartModel"),f(ho,"class","relative group"),f(Ci,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(cr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(cr,"rel","nofollow"),f(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pr,"rel","nofollow"),f(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ur,"rel","nofollow"),f(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(hr,"rel","nofollow"),f(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(mr,"rel","nofollow"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.FlaxMBartForConditionalGeneration"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.FlaxMBartForConditionalGeneration"),f(fo,"class","relative group"),f(Pi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Tr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Tr,"rel","nofollow"),f(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(wr,"rel","nofollow"),f(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Mr,"rel","nofollow"),f($r,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f($r,"rel","nofollow"),f(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(xr,"rel","nofollow"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(An,"id","transformers.FlaxMBartForSequenceClassification"),f(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(An,"href","#transformers.FlaxMBartForSequenceClassification"),f(go,"class","relative group"),f(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Pr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Pr,"rel","nofollow"),f(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Sr,"rel","nofollow"),f(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ar,"rel","nofollow"),f(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Or,"rel","nofollow"),f(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ir,"rel","nofollow"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wn,"id","transformers.FlaxMBartForQuestionAnswering"),f(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wn,"href","#transformers.FlaxMBartForQuestionAnswering"),f(ko,"class","relative group"),f(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Xr,"rel","nofollow"),f(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Qr,"rel","nofollow"),f(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Hr,"rel","nofollow"),f(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Vr,"rel","nofollow"),f(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Jr,"rel","nofollow"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),b(o,k,_),b(o,m,_),e(m,c),e(c,g),T(n,g,null),e(m,h),e(m,q),e(q,rt),b(o,ze,_),b(o,E,_),e(E,Oe),e(Oe,he),e(E,it),e(E,me),e(me,fe),e(E,dt),b(o,Ue,_),b(o,Q,_),e(Q,L),e(L,Ie),T(oe,Ie,null),e(Q,S),e(Q,A),e(A,lt),b(o,le,_),b(o,ce,_),e(ce,ct),e(ce,H),e(H,pt),e(ce,ut),b(o,G,_),b(o,Fe,_),e(Fe,_e),b(o,Xe,_),b(o,ne,_),e(ne,ge),e(ne,be),e(be,ht),e(ne,ae),e(ne,ke),e(ke,ye),b(o,Qe,_),b(o,z,_),e(z,j),e(j,ve),T(Ne,ve,null),e(z,Et),e(z,V),e(V,Ct),b(o,yt,_),b(o,X,_),e(X,se),e(X,re),e(re,Pt),e(X,St),e(X,ie),e(ie,At),e(X,Ot),e(X,De),e(De,It),e(X,Fh),e(X,td),e(td,qh),e(X,Bh),b(o,rp,_),b(o,He,_),e(He,jh),e(He,ma),e(ma,od),e(od,Eh),e(ma,Ch),e(He,Ph),e(He,nd),e(nd,Sh),e(He,Ah),e(He,ad),e(ad,Oh),e(He,Ih),b(o,ip,_),b(o,ri,_),e(ri,sd),e(sd,Nh),b(o,dp,_),T(fa,o,_),b(o,lp,_),b(o,ii,_),e(ii,_a),e(_a,rd),e(rd,Dh),e(_a,Lh),e(_a,Nt),e(Nt,Gh),e(Nt,id),e(id,Wh),e(Nt,Rh),e(Nt,dd),e(dd,Uh),e(Nt,Xh),b(o,cp,_),T(ga,o,_),b(o,pp,_),b(o,Dt,_),e(Dt,wo),e(wo,ld),T(ba,ld,null),e(Dt,Qh),e(Dt,cd),e(cd,Hh),b(o,up,_),b(o,vt,_),e(vt,Vh),e(vt,ka),e(ka,Jh),e(vt,Kh),e(vt,pd),e(pd,Zh),e(vt,Yh),b(o,hp,_),b(o,di,_),e(di,em),b(o,mp,_),b(o,li,_),e(li,ud),e(ud,tm),b(o,fp,_),b(o,Lt,_),e(Lt,Mo),e(Mo,hd),T(ya,hd,null),e(Lt,om),e(Lt,md),e(md,nm),b(o,_p,_),b(o,Ve,_),e(Ve,am),e(Ve,fd),e(fd,sm),e(Ve,rm),e(Ve,_d),e(_d,im),e(Ve,dm),e(Ve,gd),e(gd,lm),e(Ve,cm),b(o,gp,_),b(o,$o,_),e($o,pm),e($o,ci),e(ci,um),e($o,hm),b(o,bp,_),b(o,pi,_),e(pi,bd),e(bd,mm),b(o,kp,_),T(va,o,_),b(o,yp,_),b(o,ui,_),e(ui,Ta),e(Ta,kd),e(kd,fm),e(Ta,_m),e(Ta,Te),e(Te,gm),e(Te,yd),e(yd,bm),e(Te,km),e(Te,vd),e(vd,ym),e(Te,vm),e(Te,Td),e(Td,Tm),e(Te,wm),e(Te,wd),e(wd,Mm),e(Te,$m),e(Te,Md),e(Md,xm),e(Te,zm),b(o,vp,_),T(wa,o,_),b(o,Tp,_),b(o,Gt,_),e(Gt,xo),e(xo,$d),T(Ma,$d,null),e(Gt,Fm),e(Gt,xd),e(xd,qm),b(o,wp,_),b(o,Le,_),T($a,Le,null),e(Le,Bm),e(Le,Wt),e(Wt,jm),e(Wt,hi),e(hi,Em),e(Wt,Cm),e(Wt,xa),e(xa,Pm),e(Wt,Sm),e(Le,Am),e(Le,Rt),e(Rt,Om),e(Rt,mi),e(mi,Im),e(Rt,Nm),e(Rt,fi),e(fi,Dm),e(Rt,Lm),e(Le,Gm),T(zo,Le,null),b(o,Mp,_),b(o,Ut,_),e(Ut,Fo),e(Fo,zd),T(za,zd,null),e(Ut,Wm),e(Ut,Fd),e(Fd,Rm),b(o,$p,_),b(o,de,_),T(Fa,de,null),e(de,Um),e(de,qd),e(qd,Xm),e(de,Qm),e(de,mt),e(mt,Hm),e(mt,_i),e(_i,Vm),e(mt,Jm),e(mt,gi),e(gi,Km),e(mt,Zm),e(mt,qa),e(qa,Ym),e(mt,ef),e(de,tf),e(de,Ba),e(Ba,of),e(Ba,Bd),e(Bd,nf),e(Ba,af),e(de,sf),T(qo,de,null),e(de,rf),e(de,Je),T(ja,Je,null),e(Je,df),e(Je,Ea),e(Ea,lf),e(Ea,jd),e(jd,cf),e(Ea,pf),e(Je,uf),e(Je,Ca),e(Ca,Pa),e(Pa,Ed),e(Ed,hf),e(Pa,mf),e(Pa,Cd),e(Cd,ff),e(Ca,_f),e(Ca,Sa),e(Sa,Pd),e(Pd,gf),e(Sa,bf),e(Sa,Sd),e(Sd,kf),e(Je,yf),e(Je,Ad),e(Ad,vf),b(o,xp,_),b(o,Xt,_),e(Xt,Bo),e(Bo,Od),T(Aa,Od,null),e(Xt,Tf),e(Xt,Id),e(Id,wf),b(o,zp,_),b(o,O,_),T(Oa,O,null),e(O,Mf),e(O,Qt),e(Qt,$f),e(Qt,Nd),e(Nd,xf),e(Qt,zf),e(Qt,Ia),e(Ia,Ff),e(Qt,qf),e(O,Bf),e(O,Na),e(Na,jf),e(Na,bi),e(bi,Ef),e(Na,Cf),e(O,Pf),e(O,Da),e(Da,Sf),e(Da,Dd),e(Dd,Af),e(Da,Of),e(O,If),T(jo,O,null),e(O,Nf),e(O,qe),T(La,qe,null),e(qe,Df),e(qe,Ld),e(Ld,Lf),e(qe,Gf),e(qe,Ga),e(Ga,Wf),e(Ga,Gd),e(Gd,Rf),e(Ga,Uf),e(qe,Xf),e(qe,Wa),e(Wa,Ra),e(Ra,Wd),e(Wd,Qf),e(Ra,Hf),e(Ra,Rd),e(Rd,Vf),e(Wa,Jf),e(Wa,Ua),e(Ua,Ud),e(Ud,Kf),e(Ua,Zf),e(Ua,Xd),e(Xd,Yf),e(qe,e_),e(qe,Qd),e(Qd,t_),e(O,o_),e(O,Eo),T(Xa,Eo,null),e(Eo,n_),e(Eo,Hd),e(Hd,a_),e(O,s_),e(O,Co),T(Qa,Co,null),e(Co,r_),e(Co,Vd),e(Vd,i_),e(O,d_),e(O,Po),T(Ha,Po,null),e(Po,l_),e(Po,Jd),e(Jd,c_),b(o,Fp,_),b(o,Ht,_),e(Ht,So),e(So,Kd),T(Va,Kd,null),e(Ht,p_),e(Ht,Zd),e(Zd,u_),b(o,qp,_),b(o,I,_),T(Ja,I,null),e(I,h_),e(I,Ka),e(Ka,m_),e(Ka,Za),e(Za,f_),e(Ka,__),e(I,g_),e(I,Ya),e(Ya,b_),e(Ya,ki),e(ki,k_),e(Ya,y_),e(I,v_),T(Ao,I,null),e(I,T_),e(I,Ke),T(es,Ke,null),e(Ke,w_),e(Ke,ts),e(ts,M_),e(ts,Yd),e(Yd,$_),e(ts,x_),e(Ke,z_),e(Ke,os),e(os,ns),e(ns,el),e(el,F_),e(ns,q_),e(ns,tl),e(tl,B_),e(os,j_),e(os,as),e(as,ol),e(ol,E_),e(as,C_),e(as,nl),e(nl,P_),e(Ke,S_),e(Ke,al),e(al,A_),e(I,O_),e(I,Oo),T(ss,Oo,null),e(Oo,I_),e(Oo,sl),e(sl,N_),e(I,D_),e(I,Io),T(rs,Io,null),e(Io,L_),e(Io,is),e(is,G_),e(is,rl),e(rl,W_),e(is,R_),e(I,U_),e(I,No),T(ds,No,null),e(No,X_),e(No,il),e(il,Q_),e(I,H_),e(I,Do),T(ls,Do,null),e(Do,V_),e(Do,dl),e(dl,J_),b(o,Bp,_),b(o,Vt,_),e(Vt,Lo),e(Lo,ll),T(cs,ll,null),e(Vt,K_),e(Vt,cl),e(cl,Z_),b(o,jp,_),b(o,J,_),T(ps,J,null),e(J,Y_),e(J,Jt),e(Jt,eg),e(Jt,pl),e(pl,tg),e(Jt,og),e(Jt,us),e(us,ng),e(Jt,ag),e(J,sg),e(J,hs),e(hs,rg),e(hs,yi),e(yi,ig),e(hs,dg),e(J,lg),T(Go,J,null),e(J,cg),e(J,Be),T(ms,Be,null),e(Be,pg),e(Be,ul),e(ul,ug),e(Be,hg),e(Be,fs),e(fs,mg),e(fs,hl),e(hl,fg),e(fs,_g),e(Be,gg),e(Be,_s),e(_s,gs),e(gs,ml),e(ml,bg),e(gs,kg),e(gs,fl),e(fl,yg),e(_s,vg),e(_s,bs),e(bs,_l),e(_l,Tg),e(bs,wg),e(bs,gl),e(gl,Mg),e(Be,$g),e(Be,bl),e(bl,xg),e(J,zg),e(J,Wo),T(ks,Wo,null),e(Wo,Fg),e(Wo,kl),e(kl,qg),e(J,Bg),e(J,Ro),T(ys,Ro,null),e(Ro,jg),e(Ro,yl),e(yl,Eg),b(o,Ep,_),b(o,Kt,_),e(Kt,Uo),e(Uo,vl),T(vs,vl,null),e(Kt,Cg),e(Kt,Tl),e(Tl,Pg),b(o,Cp,_),b(o,Ge,_),T(Ts,Ge,null),e(Ge,Sg),e(Ge,ws),e(ws,Ag),e(ws,vi),e(vi,Og),e(ws,Ig),e(Ge,Ng),e(Ge,Ms),e(Ms,Dg),e(Ms,$s),e($s,Lg),e(Ms,Gg),e(Ge,Wg),e(Ge,Ze),T(xs,Ze,null),e(Ze,Rg),e(Ze,Zt),e(Zt,Ug),e(Zt,Ti),e(Ti,Xg),e(Zt,Qg),e(Zt,wl),e(wl,Hg),e(Zt,Vg),e(Ze,Jg),T(Xo,Ze,null),e(Ze,Kg),T(Qo,Ze,null),b(o,Pp,_),b(o,Yt,_),e(Yt,Ho),e(Ho,Ml),T(zs,Ml,null),e(Yt,Zg),e(Yt,$l),e($l,Yg),b(o,Sp,_),b(o,We,_),T(Fs,We,null),e(We,eb),e(We,qs),e(qs,tb),e(qs,wi),e(wi,ob),e(qs,nb),e(We,ab),e(We,Bs),e(Bs,sb),e(Bs,js),e(js,rb),e(Bs,ib),e(We,db),e(We,je),T(Es,je,null),e(je,lb),e(je,eo),e(eo,cb),e(eo,Mi),e(Mi,pb),e(eo,ub),e(eo,xl),e(xl,hb),e(eo,mb),e(je,fb),T(Vo,je,null),e(je,_b),T(Jo,je,null),e(je,gb),T(Ko,je,null),b(o,Ap,_),b(o,to,_),e(to,Zo),e(Zo,zl),T(Cs,zl,null),e(to,bb),e(to,Fl),e(Fl,kb),b(o,Op,_),b(o,we,_),T(Ps,we,null),e(we,yb),e(we,oo),e(oo,vb),e(oo,ql),e(ql,Tb),e(oo,wb),e(oo,Bl),e(Bl,Mb),e(oo,$b),e(we,xb),e(we,Ss),e(Ss,zb),e(Ss,$i),e($i,Fb),e(Ss,qb),e(we,Bb),e(we,As),e(As,jb),e(As,Os),e(Os,Eb),e(As,Cb),e(we,Pb),e(we,Ee),T(Is,Ee,null),e(Ee,Sb),e(Ee,no),e(no,Ab),e(no,xi),e(xi,Ob),e(no,Ib),e(no,jl),e(jl,Nb),e(no,Db),e(Ee,Lb),T(Yo,Ee,null),e(Ee,Gb),T(en,Ee,null),e(Ee,Wb),T(tn,Ee,null),b(o,Ip,_),b(o,ao,_),e(ao,on),e(on,El),T(Ns,El,null),e(ao,Rb),e(ao,Cl),e(Cl,Ub),b(o,Np,_),b(o,Me,_),T(Ds,Me,null),e(Me,Xb),e(Me,Pl),e(Pl,Qb),e(Me,Hb),e(Me,Ls),e(Ls,Vb),e(Ls,zi),e(zi,Jb),e(Ls,Kb),e(Me,Zb),e(Me,Gs),e(Gs,Yb),e(Gs,Ws),e(Ws,ek),e(Gs,tk),e(Me,ok),e(Me,K),T(Rs,K,null),e(K,nk),e(K,so),e(so,ak),e(so,Fi),e(Fi,sk),e(so,rk),e(so,Sl),e(Sl,ik),e(so,dk),e(K,lk),T(nn,K,null),e(K,ck),T(an,K,null),e(K,pk),T(sn,K,null),e(K,uk),T(rn,K,null),e(K,hk),T(dn,K,null),b(o,Dp,_),b(o,ro,_),e(ro,ln),e(ln,Al),T(Us,Al,null),e(ro,mk),e(ro,Ol),e(Ol,fk),b(o,Lp,_),b(o,io,_),T(Xs,io,null),e(io,_k),e(io,cn),T(Qs,cn,null),e(cn,gk),T(pn,cn,null),b(o,Gp,_),b(o,lo,_),e(lo,un),e(un,Il),T(Hs,Il,null),e(lo,bk),e(lo,Nl),e(Nl,kk),b(o,Wp,_),b(o,$e,_),T(Vs,$e,null),e($e,yk),e($e,Js),e(Js,vk),e(Js,qi),e(qi,Tk),e(Js,wk),e($e,Mk),e($e,Ks),e(Ks,$k),e(Ks,Zs),e(Zs,xk),e(Ks,zk),e($e,Fk),T(hn,$e,null),e($e,qk),e($e,Ye),T(Ys,Ye,null),e(Ye,Bk),e(Ye,co),e(co,jk),e(co,Bi),e(Bi,Ek),e(co,Ck),e(co,Dl),e(Dl,Pk),e(co,Sk),e(Ye,Ak),T(mn,Ye,null),e(Ye,Ok),T(fn,Ye,null),b(o,Rp,_),b(o,po,_),e(po,_n),e(_n,Ll),T(er,Ll,null),e(po,Ik),e(po,Gl),e(Gl,Nk),b(o,Up,_),b(o,xe,_),T(tr,xe,null),e(xe,Dk),e(xe,or),e(or,Lk),e(or,ji),e(ji,Gk),e(or,Wk),e(xe,Rk),e(xe,nr),e(nr,Uk),e(nr,ar),e(ar,Xk),e(nr,Qk),e(xe,Hk),T(gn,xe,null),e(xe,Vk),e(xe,Ce),T(sr,Ce,null),e(Ce,Jk),e(Ce,uo),e(uo,Kk),e(uo,Ei),e(Ei,Zk),e(uo,Yk),e(uo,Wl),e(Wl,ey),e(uo,ty),e(Ce,oy),T(bn,Ce,null),e(Ce,ny),T(kn,Ce,null),e(Ce,ay),T(yn,Ce,null),b(o,Xp,_),b(o,ho,_),e(ho,vn),e(vn,Rl),T(rr,Rl,null),e(ho,sy),e(ho,Ul),e(Ul,ry),b(o,Qp,_),b(o,W,_),T(ir,W,null),e(W,iy),e(W,dr),e(dr,dy),e(dr,Ci),e(Ci,ly),e(dr,cy),e(W,py),e(W,lr),e(lr,uy),e(lr,cr),e(cr,hy),e(lr,my),e(W,fy),e(W,Xl),e(Xl,_y),e(W,gy),e(W,ft),e(ft,Ql),e(Ql,pr),e(pr,by),e(ft,ky),e(ft,Hl),e(Hl,ur),e(ur,yy),e(ft,vy),e(ft,Vl),e(Vl,hr),e(hr,Ty),e(ft,wy),e(ft,Jl),e(Jl,mr),e(mr,My),e(W,$y),e(W,et),T(fr,et,null),e(et,xy),e(et,mo),e(mo,zy),e(mo,Kl),e(Kl,Fy),e(mo,qy),e(mo,Zl),e(Zl,By),e(mo,jy),e(et,Ey),T(Tn,et,null),e(et,Cy),T(wn,et,null),e(W,Py),e(W,Mn),T(_r,Mn,null),e(Mn,Sy),T($n,Mn,null),e(W,Ay),e(W,xn),T(gr,xn,null),e(xn,Oy),T(zn,xn,null),b(o,Hp,_),b(o,fo,_),e(fo,Fn),e(Fn,Yl),T(br,Yl,null),e(fo,Iy),e(fo,ec),e(ec,Ny),b(o,Vp,_),b(o,R,_),T(kr,R,null),e(R,Dy),e(R,yr),e(yr,Ly),e(yr,Pi),e(Pi,Gy),e(yr,Wy),e(R,Ry),e(R,vr),e(vr,Uy),e(vr,Tr),e(Tr,Xy),e(vr,Qy),e(R,Hy),e(R,tc),e(tc,Vy),e(R,Jy),e(R,_t),e(_t,oc),e(oc,wr),e(wr,Ky),e(_t,Zy),e(_t,nc),e(nc,Mr),e(Mr,Yy),e(_t,ev),e(_t,ac),e(ac,$r),e($r,tv),e(_t,ov),e(_t,sc),e(sc,xr),e(xr,nv),e(R,av),e(R,Pe),T(zr,Pe,null),e(Pe,sv),e(Pe,_o),e(_o,rv),e(_o,rc),e(rc,iv),e(_o,dv),e(_o,ic),e(ic,lv),e(_o,cv),e(Pe,pv),T(qn,Pe,null),e(Pe,uv),T(Bn,Pe,null),e(Pe,hv),T(jn,Pe,null),e(R,mv),e(R,En),T(Fr,En,null),e(En,fv),T(Cn,En,null),e(R,_v),e(R,Pn),T(qr,Pn,null),e(Pn,gv),T(Sn,Pn,null),b(o,Jp,_),b(o,go,_),e(go,An),e(An,dc),T(Br,dc,null),e(go,bv),e(go,lc),e(lc,kv),b(o,Kp,_),b(o,N,_),T(jr,N,null),e(N,yv),e(N,cc),e(cc,vv),e(N,Tv),e(N,Er),e(Er,wv),e(Er,Si),e(Si,Mv),e(Er,$v),e(N,xv),e(N,Cr),e(Cr,zv),e(Cr,Pr),e(Pr,Fv),e(Cr,qv),e(N,Bv),e(N,pc),e(pc,jv),e(N,Ev),e(N,gt),e(gt,uc),e(uc,Sr),e(Sr,Cv),e(gt,Pv),e(gt,hc),e(hc,Ar),e(Ar,Sv),e(gt,Av),e(gt,mc),e(mc,Or),e(Or,Ov),e(gt,Iv),e(gt,fc),e(fc,Ir),e(Ir,Nv),e(N,Dv),e(N,tt),T(Nr,tt,null),e(tt,Lv),e(tt,bo),e(bo,Gv),e(bo,_c),e(_c,Wv),e(bo,Rv),e(bo,gc),e(gc,Uv),e(bo,Xv),e(tt,Qv),T(On,tt,null),e(tt,Hv),T(In,tt,null),e(N,Vv),e(N,Nn),T(Dr,Nn,null),e(Nn,Jv),T(Dn,Nn,null),e(N,Kv),e(N,Ln),T(Lr,Ln,null),e(Ln,Zv),T(Gn,Ln,null),b(o,Zp,_),b(o,ko,_),e(ko,Wn),e(Wn,bc),T(Gr,bc,null),e(ko,Yv),e(ko,kc),e(kc,eT),b(o,Yp,_),b(o,D,_),T(Wr,D,null),e(D,tT),e(D,yo),e(yo,oT),e(yo,yc),e(yc,nT),e(yo,aT),e(yo,vc),e(vc,sT),e(yo,rT),e(D,iT),e(D,Rr),e(Rr,dT),e(Rr,Ai),e(Ai,lT),e(Rr,cT),e(D,pT),e(D,Ur),e(Ur,uT),e(Ur,Xr),e(Xr,hT),e(Ur,mT),e(D,fT),e(D,Tc),e(Tc,_T),e(D,gT),e(D,bt),e(bt,wc),e(wc,Qr),e(Qr,bT),e(bt,kT),e(bt,Mc),e(Mc,Hr),e(Hr,yT),e(bt,vT),e(bt,$c),e($c,Vr),e(Vr,TT),e(bt,wT),e(bt,xc),e(xc,Jr),e(Jr,MT),e(D,$T),e(D,ot),T(Kr,ot,null),e(ot,xT),e(ot,vo),e(vo,zT),e(vo,zc),e(zc,FT),e(vo,qT),e(vo,Fc),e(Fc,BT),e(vo,jT),e(ot,ET),T(Rn,ot,null),e(ot,CT),T(Un,ot,null),e(D,PT),e(D,Xn),T(Zr,Xn,null),e(Xn,ST),T(Qn,Xn,null),e(D,AT),e(D,Hn),T(Yr,Hn,null),e(Hn,OT),T(Vn,Hn,null),eu=!0},p(o,[_]){const ei={};_&2&&(ei.$$scope={dirty:_,ctx:o}),zo.$set(ei);const qc={};_&2&&(qc.$$scope={dirty:_,ctx:o}),qo.$set(qc);const Bc={};_&2&&(Bc.$$scope={dirty:_,ctx:o}),jo.$set(Bc);const jc={};_&2&&(jc.$$scope={dirty:_,ctx:o}),Ao.$set(jc);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),Go.$set(Jn);const Ec={};_&2&&(Ec.$$scope={dirty:_,ctx:o}),Xo.$set(Ec);const Cc={};_&2&&(Cc.$$scope={dirty:_,ctx:o}),Qo.$set(Cc);const ti={};_&2&&(ti.$$scope={dirty:_,ctx:o}),Vo.$set(ti);const Pc={};_&2&&(Pc.$$scope={dirty:_,ctx:o}),Jo.$set(Pc);const Sc={};_&2&&(Sc.$$scope={dirty:_,ctx:o}),Ko.$set(Sc);const Ac={};_&2&&(Ac.$$scope={dirty:_,ctx:o}),Yo.$set(Ac);const oi={};_&2&&(oi.$$scope={dirty:_,ctx:o}),en.$set(oi);const Oc={};_&2&&(Oc.$$scope={dirty:_,ctx:o}),tn.$set(Oc);const Ic={};_&2&&(Ic.$$scope={dirty:_,ctx:o}),nn.$set(Ic);const Kn={};_&2&&(Kn.$$scope={dirty:_,ctx:o}),an.$set(Kn);const Nc={};_&2&&(Nc.$$scope={dirty:_,ctx:o}),sn.$set(Nc);const Dc={};_&2&&(Dc.$$scope={dirty:_,ctx:o}),rn.$set(Dc);const ni={};_&2&&(ni.$$scope={dirty:_,ctx:o}),dn.$set(ni);const Lc={};_&2&&(Lc.$$scope={dirty:_,ctx:o}),pn.$set(Lc);const Gc={};_&2&&(Gc.$$scope={dirty:_,ctx:o}),hn.$set(Gc);const Wc={};_&2&&(Wc.$$scope={dirty:_,ctx:o}),mn.$set(Wc);const Re={};_&2&&(Re.$$scope={dirty:_,ctx:o}),fn.$set(Re);const Rc={};_&2&&(Rc.$$scope={dirty:_,ctx:o}),gn.$set(Rc);const Uc={};_&2&&(Uc.$$scope={dirty:_,ctx:o}),bn.$set(Uc);const Xc={};_&2&&(Xc.$$scope={dirty:_,ctx:o}),kn.$set(Xc);const Qc={};_&2&&(Qc.$$scope={dirty:_,ctx:o}),yn.$set(Qc);const kt={};_&2&&(kt.$$scope={dirty:_,ctx:o}),Tn.$set(kt);const Oi={};_&2&&(Oi.$$scope={dirty:_,ctx:o}),wn.$set(Oi);const Hc={};_&2&&(Hc.$$scope={dirty:_,ctx:o}),$n.$set(Hc);const Vc={};_&2&&(Vc.$$scope={dirty:_,ctx:o}),zn.$set(Vc);const Jc={};_&2&&(Jc.$$scope={dirty:_,ctx:o}),qn.$set(Jc);const Kc={};_&2&&(Kc.$$scope={dirty:_,ctx:o}),Bn.$set(Kc);const Zc={};_&2&&(Zc.$$scope={dirty:_,ctx:o}),jn.$set(Zc);const Yc={};_&2&&(Yc.$$scope={dirty:_,ctx:o}),Cn.$set(Yc);const ai={};_&2&&(ai.$$scope={dirty:_,ctx:o}),Sn.$set(ai);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:o}),On.$set(ep);const To={};_&2&&(To.$$scope={dirty:_,ctx:o}),In.$set(To);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:o}),Dn.$set(tp);const op={};_&2&&(op.$$scope={dirty:_,ctx:o}),Gn.$set(op);const si={};_&2&&(si.$$scope={dirty:_,ctx:o}),Rn.$set(si);const np={};_&2&&(np.$$scope={dirty:_,ctx:o}),Un.$set(np);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:o}),Qn.$set(ap);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:o}),Vn.$set(sp)},i(o){eu||(w(n.$$.fragment,o),w(oe.$$.fragment,o),w(Ne.$$.fragment,o),w(fa.$$.fragment,o),w(ga.$$.fragment,o),w(ba.$$.fragment,o),w(ya.$$.fragment,o),w(va.$$.fragment,o),w(wa.$$.fragment,o),w(Ma.$$.fragment,o),w($a.$$.fragment,o),w(zo.$$.fragment,o),w(za.$$.fragment,o),w(Fa.$$.fragment,o),w(qo.$$.fragment,o),w(ja.$$.fragment,o),w(Aa.$$.fragment,o),w(Oa.$$.fragment,o),w(jo.$$.fragment,o),w(La.$$.fragment,o),w(Xa.$$.fragment,o),w(Qa.$$.fragment,o),w(Ha.$$.fragment,o),w(Va.$$.fragment,o),w(Ja.$$.fragment,o),w(Ao.$$.fragment,o),w(es.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(ds.$$.fragment,o),w(ls.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(Go.$$.fragment,o),w(ms.$$.fragment,o),w(ks.$$.fragment,o),w(ys.$$.fragment,o),w(vs.$$.fragment,o),w(Ts.$$.fragment,o),w(xs.$$.fragment,o),w(Xo.$$.fragment,o),w(Qo.$$.fragment,o),w(zs.$$.fragment,o),w(Fs.$$.fragment,o),w(Es.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Ko.$$.fragment,o),w(Cs.$$.fragment,o),w(Ps.$$.fragment,o),w(Is.$$.fragment,o),w(Yo.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(Ns.$$.fragment,o),w(Ds.$$.fragment,o),w(Rs.$$.fragment,o),w(nn.$$.fragment,o),w(an.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(Us.$$.fragment,o),w(Xs.$$.fragment,o),w(Qs.$$.fragment,o),w(pn.$$.fragment,o),w(Hs.$$.fragment,o),w(Vs.$$.fragment,o),w(hn.$$.fragment,o),w(Ys.$$.fragment,o),w(mn.$$.fragment,o),w(fn.$$.fragment,o),w(er.$$.fragment,o),w(tr.$$.fragment,o),w(gn.$$.fragment,o),w(sr.$$.fragment,o),w(bn.$$.fragment,o),w(kn.$$.fragment,o),w(yn.$$.fragment,o),w(rr.$$.fragment,o),w(ir.$$.fragment,o),w(fr.$$.fragment,o),w(Tn.$$.fragment,o),w(wn.$$.fragment,o),w(_r.$$.fragment,o),w($n.$$.fragment,o),w(gr.$$.fragment,o),w(zn.$$.fragment,o),w(br.$$.fragment,o),w(kr.$$.fragment,o),w(zr.$$.fragment,o),w(qn.$$.fragment,o),w(Bn.$$.fragment,o),w(jn.$$.fragment,o),w(Fr.$$.fragment,o),w(Cn.$$.fragment,o),w(qr.$$.fragment,o),w(Sn.$$.fragment,o),w(Br.$$.fragment,o),w(jr.$$.fragment,o),w(Nr.$$.fragment,o),w(On.$$.fragment,o),w(In.$$.fragment,o),w(Dr.$$.fragment,o),w(Dn.$$.fragment,o),w(Lr.$$.fragment,o),w(Gn.$$.fragment,o),w(Gr.$$.fragment,o),w(Wr.$$.fragment,o),w(Kr.$$.fragment,o),w(Rn.$$.fragment,o),w(Un.$$.fragment,o),w(Zr.$$.fragment,o),w(Qn.$$.fragment,o),w(Yr.$$.fragment,o),w(Vn.$$.fragment,o),eu=!0)},o(o){M(n.$$.fragment,o),M(oe.$$.fragment,o),M(Ne.$$.fragment,o),M(fa.$$.fragment,o),M(ga.$$.fragment,o),M(ba.$$.fragment,o),M(ya.$$.fragment,o),M(va.$$.fragment,o),M(wa.$$.fragment,o),M(Ma.$$.fragment,o),M($a.$$.fragment,o),M(zo.$$.fragment,o),M(za.$$.fragment,o),M(Fa.$$.fragment,o),M(qo.$$.fragment,o),M(ja.$$.fragment,o),M(Aa.$$.fragment,o),M(Oa.$$.fragment,o),M(jo.$$.fragment,o),M(La.$$.fragment,o),M(Xa.$$.fragment,o),M(Qa.$$.fragment,o),M(Ha.$$.fragment,o),M(Va.$$.fragment,o),M(Ja.$$.fragment,o),M(Ao.$$.fragment,o),M(es.$$.fragment,o),M(ss.$$.fragment,o),M(rs.$$.fragment,o),M(ds.$$.fragment,o),M(ls.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(Go.$$.fragment,o),M(ms.$$.fragment,o),M(ks.$$.fragment,o),M(ys.$$.fragment,o),M(vs.$$.fragment,o),M(Ts.$$.fragment,o),M(xs.$$.fragment,o),M(Xo.$$.fragment,o),M(Qo.$$.fragment,o),M(zs.$$.fragment,o),M(Fs.$$.fragment,o),M(Es.$$.fragment,o),M(Vo.$$.fragment,o),M(Jo.$$.fragment,o),M(Ko.$$.fragment,o),M(Cs.$$.fragment,o),M(Ps.$$.fragment,o),M(Is.$$.fragment,o),M(Yo.$$.fragment,o),M(en.$$.fragment,o),M(tn.$$.fragment,o),M(Ns.$$.fragment,o),M(Ds.$$.fragment,o),M(Rs.$$.fragment,o),M(nn.$$.fragment,o),M(an.$$.fragment,o),M(sn.$$.fragment,o),M(rn.$$.fragment,o),M(dn.$$.fragment,o),M(Us.$$.fragment,o),M(Xs.$$.fragment,o),M(Qs.$$.fragment,o),M(pn.$$.fragment,o),M(Hs.$$.fragment,o),M(Vs.$$.fragment,o),M(hn.$$.fragment,o),M(Ys.$$.fragment,o),M(mn.$$.fragment,o),M(fn.$$.fragment,o),M(er.$$.fragment,o),M(tr.$$.fragment,o),M(gn.$$.fragment,o),M(sr.$$.fragment,o),M(bn.$$.fragment,o),M(kn.$$.fragment,o),M(yn.$$.fragment,o),M(rr.$$.fragment,o),M(ir.$$.fragment,o),M(fr.$$.fragment,o),M(Tn.$$.fragment,o),M(wn.$$.fragment,o),M(_r.$$.fragment,o),M($n.$$.fragment,o),M(gr.$$.fragment,o),M(zn.$$.fragment,o),M(br.$$.fragment,o),M(kr.$$.fragment,o),M(zr.$$.fragment,o),M(qn.$$.fragment,o),M(Bn.$$.fragment,o),M(jn.$$.fragment,o),M(Fr.$$.fragment,o),M(Cn.$$.fragment,o),M(qr.$$.fragment,o),M(Sn.$$.fragment,o),M(Br.$$.fragment,o),M(jr.$$.fragment,o),M(Nr.$$.fragment,o),M(On.$$.fragment,o),M(In.$$.fragment,o),M(Dr.$$.fragment,o),M(Dn.$$.fragment,o),M(Lr.$$.fragment,o),M(Gn.$$.fragment,o),M(Gr.$$.fragment,o),M(Wr.$$.fragment,o),M(Kr.$$.fragment,o),M(Rn.$$.fragment,o),M(Un.$$.fragment,o),M(Zr.$$.fragment,o),M(Qn.$$.fragment,o),M(Yr.$$.fragment,o),M(Vn.$$.fragment,o),eu=!1},d(o){t(l),o&&t(k),o&&t(m),$(n),o&&t(ze),o&&t(E),o&&t(Ue),o&&t(Q),$(oe),o&&t(le),o&&t(ce),o&&t(G),o&&t(Fe),o&&t(Xe),o&&t(ne),o&&t(Qe),o&&t(z),$(Ne),o&&t(yt),o&&t(X),o&&t(rp),o&&t(He),o&&t(ip),o&&t(ri),o&&t(dp),$(fa,o),o&&t(lp),o&&t(ii),o&&t(cp),$(ga,o),o&&t(pp),o&&t(Dt),$(ba),o&&t(up),o&&t(vt),o&&t(hp),o&&t(di),o&&t(mp),o&&t(li),o&&t(fp),o&&t(Lt),$(ya),o&&t(_p),o&&t(Ve),o&&t(gp),o&&t($o),o&&t(bp),o&&t(pi),o&&t(kp),$(va,o),o&&t(yp),o&&t(ui),o&&t(vp),$(wa,o),o&&t(Tp),o&&t(Gt),$(Ma),o&&t(wp),o&&t(Le),$($a),$(zo),o&&t(Mp),o&&t(Ut),$(za),o&&t($p),o&&t(de),$(Fa),$(qo),$(ja),o&&t(xp),o&&t(Xt),$(Aa),o&&t(zp),o&&t(O),$(Oa),$(jo),$(La),$(Xa),$(Qa),$(Ha),o&&t(Fp),o&&t(Ht),$(Va),o&&t(qp),o&&t(I),$(Ja),$(Ao),$(es),$(ss),$(rs),$(ds),$(ls),o&&t(Bp),o&&t(Vt),$(cs),o&&t(jp),o&&t(J),$(ps),$(Go),$(ms),$(ks),$(ys),o&&t(Ep),o&&t(Kt),$(vs),o&&t(Cp),o&&t(Ge),$(Ts),$(xs),$(Xo),$(Qo),o&&t(Pp),o&&t(Yt),$(zs),o&&t(Sp),o&&t(We),$(Fs),$(Es),$(Vo),$(Jo),$(Ko),o&&t(Ap),o&&t(to),$(Cs),o&&t(Op),o&&t(we),$(Ps),$(Is),$(Yo),$(en),$(tn),o&&t(Ip),o&&t(ao),$(Ns),o&&t(Np),o&&t(Me),$(Ds),$(Rs),$(nn),$(an),$(sn),$(rn),$(dn),o&&t(Dp),o&&t(ro),$(Us),o&&t(Lp),o&&t(io),$(Xs),$(Qs),$(pn),o&&t(Gp),o&&t(lo),$(Hs),o&&t(Wp),o&&t($e),$(Vs),$(hn),$(Ys),$(mn),$(fn),o&&t(Rp),o&&t(po),$(er),o&&t(Up),o&&t(xe),$(tr),$(gn),$(sr),$(bn),$(kn),$(yn),o&&t(Xp),o&&t(ho),$(rr),o&&t(Qp),o&&t(W),$(ir),$(fr),$(Tn),$(wn),$(_r),$($n),$(gr),$(zn),o&&t(Hp),o&&t(fo),$(br),o&&t(Vp),o&&t(R),$(kr),$(zr),$(qn),$(Bn),$(jn),$(Fr),$(Cn),$(qr),$(Sn),o&&t(Jp),o&&t(go),$(Br),o&&t(Kp),o&&t(N),$(jr),$(Nr),$(On),$(In),$(Dr),$(Dn),$(Lr),$(Gn),o&&t(Zp),o&&t(ko),$(Gr),o&&t(Yp),o&&t(D),$(Wr),$(Kr),$(Rn),$(Un),$(Zr),$(Qn),$(Yr),$(Vn)}}}const v1={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function T1(x){return Bx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class q1 extends xx{constructor(l){super();zx(this,l,T1,y1,Fx,{})}}export{q1 as default,v1 as metadata};
