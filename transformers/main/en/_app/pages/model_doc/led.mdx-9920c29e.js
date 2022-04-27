import{S as Ym,i as ef,s as tf,e as n,k as c,w as T,t as r,M as of,c as s,d as t,m as h,a,x as k,h as d,b as p,F as e,g,y as w,q as y,o as E,B as q,v as nf,L as Pe}from"../../chunks/vendor-6b77c823.js";import{T as xo}from"../../chunks/Tip-39098574.js";import{D as x}from"../../chunks/Docstring-1088f2fb.js";import{C as Ne}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as me}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ae}from"../../chunks/ExampleCodeBlock-5212b321.js";function sf($){let l,b,u,m,v;return m=new Ne({props:{code:"",highlighted:""}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function af($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function rf($){let l,b,u,m,v;return m=new Ne({props:{code:`from transformers import LEDTokenizer, LEDModel
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function df($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function lf($){let l,b,u,m,v;return m=new Ne({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
TXT = "My friends are <mask> but they eat too many carbs."

model = LEDForConditionalGeneration.from_pretrained("allenai/led-base-16384")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]

prediction = model.generate(input_ids)[0]
print(tokenizer.decode(prediction, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){l=n("p"),b=r("Conditional generation example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Conditional generation example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function cf($){let l,b,u,m,v;return m=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration

model = LEDForConditionalGeneration.from_pretrained("allenai/led-large-16384-arxiv")
tokenizer = LEDTokenizer.from_pretrained("allenai/led-large-16384-arxiv")

ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
    results in a wide range of natural language tasks including generative language modeling
    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
    This success is partly due to the self-attention component which enables the network to capture contextual
    information from the entire sequence. While powerful, the memory and computational requirements of
    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
    process long sequences. To address this limitation, we present Longformer, a modified Transformer
    architecture with a self-attention operation that scales linearly with the sequence length, making it
    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
    long document classification, question answering (QA), and coreference resolution, where existing approaches
    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
    cross-partition information, and to mitigate this problem, existing methods often rely on complex
    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
    contextual representations of the entire context using multiple layers of attention, reducing the need for
    task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors="pt")

# Global attention on the first token (cf. Beltagy et al. 2020)
global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1

# Generate Summary
summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=3, max_length=32)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&#x27;&#x27;&#x27;Transformers (Vaswani et al., 2017) have achieved state-of-the-art
<span class="hljs-meta">... </span>    results in a wide range of natural language tasks including generative language modeling
<span class="hljs-meta">... </span>    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
<span class="hljs-meta">... </span>    This success is partly due to the self-attention component which enables the network to capture contextual
<span class="hljs-meta">... </span>    information from the entire sequence. While powerful, the memory and computational requirements of
<span class="hljs-meta">... </span>    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
<span class="hljs-meta">... </span>    process long sequences. To address this limitation, we present Longformer, a modified Transformer
<span class="hljs-meta">... </span>    architecture with a self-attention operation that scales linearly with the sequence length, making it
<span class="hljs-meta">... </span>    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
<span class="hljs-meta">... </span>    long document classification, question answering (QA), and coreference resolution, where existing approaches
<span class="hljs-meta">... </span>    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
<span class="hljs-meta">... </span>    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
<span class="hljs-meta">... </span>    cross-partition information, and to mitigate this problem, existing methods often rely on complex
<span class="hljs-meta">... </span>    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
<span class="hljs-meta">... </span>    contextual representations of the entire context using multiple layers of attention, reducing the need for
<span class="hljs-meta">... </span>    task-specific architectures.&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Global attention on the first token (cf. Beltagy et al. 2020)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros_like(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[:, <span class="hljs-number">0</span>] = <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=<span class="hljs-number">3</span>, max_length=<span class="hljs-number">32</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),{c(){l=n("p"),b=r("Summarization example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Summarization example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function hf($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function pf($){let l,b,u,m,v;return m=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=n("p"),b=r("Example of single-label classification:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example of single-label classification:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function uf($){let l,b;return l=new Ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(u){k(l.$$.fragment,u)},m(u,m){w(l,u,m),b=!0},p:Pe,i(u){b||(y(l.$$.fragment,u),b=!0)},o(u){E(l.$$.fragment,u),b=!1},d(u){q(l,u)}}}function mf($){let l,b,u,m,v;return m=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=n("p"),b=r("Example of multi-label classification:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example of multi-label classification:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function ff($){let l,b;return l=new Ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained(
    "allenai/led-base-16384", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(u){k(l.$$.fragment,u)},m(u,m){w(l,u,m),b=!0},p:Pe,i(u){b||(y(l.$$.fragment,u),b=!0)},o(u){E(l.$$.fragment,u),b=!1},d(u){q(l,u)}}}function _f($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function gf($){let l,b,u,m,v;return m=new Ne({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForQuestionAnswering.from_pretrained("allenai/led-base-16384")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function bf($){let l,b;return l=new Ne({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(u){k(l.$$.fragment,u)},m(u,m){w(l,u,m),b=!0},p:Pe,i(u){b||(y(l.$$.fragment,u),b=!0)},o(u){E(l.$$.fragment,u),b=!1},d(u){q(l,u)}}}function vf($){let l,b,u,m,v,i,f,D,je,fe,F,Z,W,oe,Ie,U,Ge,De,G,V,ne,we,C,A,_e,se,Fe,ge,R,Be,ze,O,Qe,Y,S,M,B,He,We,j,Ue,ae,ye;return{c(){l=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),u=c(),m=n("ul"),v=n("li"),i=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=c(),F=n("p"),Z=r("This second option is useful when using "),W=n("code"),oe=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),Ge=r("model(inputs)"),De=r("."),G=c(),V=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we=c(),C=n("ul"),A=n("li"),_e=r("a single Tensor with "),se=n("code"),Fe=r("input_ids"),ge=r(" only and nothing else: "),R=n("code"),Be=r("model(input_ids)"),ze=c(),O=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),S=r("model([input_ids, attention_mask])"),M=r(" or "),B=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=c(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(L){l=s(L,"P",{});var z=a(l);b=d(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),u=h(L),m=s(L,"UL",{});var re=a(m);v=s(re,"LI",{});var nt=a(v);i=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),f=h(re),D=s(re,"LI",{});var st=a(D);je=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),re.forEach(t),fe=h(L),F=s(L,"P",{});var I=a(F);Z=d(I,"This second option is useful when using "),W=s(I,"CODE",{});var at=a(W);oe=d(at,"tf.keras.Model.fit"),at.forEach(t),Ie=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(I,"CODE",{});var rt=a(U);Ge=d(rt,"model(inputs)"),rt.forEach(t),De=d(I,"."),I.forEach(t),G=h(L),V=s(L,"P",{});var xe=a(V);ne=d(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),we=h(L),C=s(L,"UL",{});var K=a(C);A=s(K,"LI",{});var de=a(A);_e=d(de,"a single Tensor with "),se=s(de,"CODE",{});var Se=a(se);Fe=d(Se,"input_ids"),Se.forEach(t),ge=d(de," only and nothing else: "),R=s(de,"CODE",{});var dt=a(R);Be=d(dt,"model(input_ids)"),dt.forEach(t),de.forEach(t),ze=h(K),O=s(K,"LI",{});var ie=a(O);Qe=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(ie,"CODE",{});var it=a(Y);S=d(it,"model([input_ids, attention_mask])"),it.forEach(t),M=d(ie," or "),B=s(ie,"CODE",{});var le=a(B);He=d(le,"model([input_ids, attention_mask, token_type_ids])"),le.forEach(t),ie.forEach(t),We=h(K),j=s(K,"LI",{});var Ve=a(j);Ue=d(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=s(Ve,"CODE",{});var Re=a(ae);ye=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),K.forEach(t)},m(L,z){g(L,l,z),e(l,b),g(L,u,z),g(L,m,z),e(m,v),e(v,i),e(m,f),e(m,D),e(D,je),g(L,fe,z),g(L,F,z),e(F,Z),e(F,W),e(W,oe),e(F,Ie),e(F,U),e(U,Ge),e(F,De),g(L,G,z),g(L,V,z),e(V,ne),g(L,we,z),g(L,C,z),e(C,A),e(A,_e),e(A,se),e(se,Fe),e(A,ge),e(A,R),e(R,Be),e(C,ze),e(C,O),e(O,Qe),e(O,Y),e(Y,S),e(O,M),e(O,B),e(B,He),e(C,We),e(C,j),e(j,Ue),e(j,ae),e(ae,ye)},d(L){L&&t(l),L&&t(u),L&&t(m),L&&t(fe),L&&t(F),L&&t(G),L&&t(V),L&&t(we),L&&t(C)}}}function Tf($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function kf($){let l,b,u,m,v;return m=new Ne({props:{code:`from transformers import LEDTokenizer, TFLEDModel
import tensorflow as tf

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = TFLEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function wf($){let l,b,u,m,v,i,f,D,je,fe,F,Z,W,oe,Ie,U,Ge,De,G,V,ne,we,C,A,_e,se,Fe,ge,R,Be,ze,O,Qe,Y,S,M,B,He,We,j,Ue,ae,ye;return{c(){l=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),u=c(),m=n("ul"),v=n("li"),i=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=c(),F=n("p"),Z=r("This second option is useful when using "),W=n("code"),oe=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),Ge=r("model(inputs)"),De=r("."),G=c(),V=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we=c(),C=n("ul"),A=n("li"),_e=r("a single Tensor with "),se=n("code"),Fe=r("input_ids"),ge=r(" only and nothing else: "),R=n("code"),Be=r("model(input_ids)"),ze=c(),O=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),S=r("model([input_ids, attention_mask])"),M=r(" or "),B=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=c(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(L){l=s(L,"P",{});var z=a(l);b=d(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),u=h(L),m=s(L,"UL",{});var re=a(m);v=s(re,"LI",{});var nt=a(v);i=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),f=h(re),D=s(re,"LI",{});var st=a(D);je=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),re.forEach(t),fe=h(L),F=s(L,"P",{});var I=a(F);Z=d(I,"This second option is useful when using "),W=s(I,"CODE",{});var at=a(W);oe=d(at,"tf.keras.Model.fit"),at.forEach(t),Ie=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(I,"CODE",{});var rt=a(U);Ge=d(rt,"model(inputs)"),rt.forEach(t),De=d(I,"."),I.forEach(t),G=h(L),V=s(L,"P",{});var xe=a(V);ne=d(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),we=h(L),C=s(L,"UL",{});var K=a(C);A=s(K,"LI",{});var de=a(A);_e=d(de,"a single Tensor with "),se=s(de,"CODE",{});var Se=a(se);Fe=d(Se,"input_ids"),Se.forEach(t),ge=d(de," only and nothing else: "),R=s(de,"CODE",{});var dt=a(R);Be=d(dt,"model(input_ids)"),dt.forEach(t),de.forEach(t),ze=h(K),O=s(K,"LI",{});var ie=a(O);Qe=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(ie,"CODE",{});var it=a(Y);S=d(it,"model([input_ids, attention_mask])"),it.forEach(t),M=d(ie," or "),B=s(ie,"CODE",{});var le=a(B);He=d(le,"model([input_ids, attention_mask, token_type_ids])"),le.forEach(t),ie.forEach(t),We=h(K),j=s(K,"LI",{});var Ve=a(j);Ue=d(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=s(Ve,"CODE",{});var Re=a(ae);ye=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),K.forEach(t)},m(L,z){g(L,l,z),e(l,b),g(L,u,z),g(L,m,z),e(m,v),e(v,i),e(m,f),e(m,D),e(D,je),g(L,fe,z),g(L,F,z),e(F,Z),e(F,W),e(W,oe),e(F,Ie),e(F,U),e(U,Ge),e(F,De),g(L,G,z),g(L,V,z),e(V,ne),g(L,we,z),g(L,C,z),e(C,A),e(A,_e),e(A,se),e(se,Fe),e(A,ge),e(A,R),e(R,Be),e(C,ze),e(C,O),e(O,Qe),e(O,Y),e(Y,S),e(O,M),e(O,B),e(B,He),e(C,We),e(C,j),e(j,Ue),e(j,ae),e(ae,ye)},d(L){L&&t(l),L&&t(u),L&&t(m),L&&t(fe),L&&t(F),L&&t(G),L&&t(V),L&&t(we),L&&t(C)}}}function yf($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function Ef($){let l,b,u,m,v;return m=new Ne({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
import tensorflow as tf

mname = "allenai/led-base-16384"
tokenizer = LEDTokenizer.from_pretrained(mname)
TXT = "My friends are <mask> but they eat too many carbs."
model = TFLEDForConditionalGeneration.from_pretrained(mname)
batch = tokenizer([TXT], return_tensors="tf")
logits = model(inputs=batch.input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=n("p"),b=r("Examples:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Examples:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:Pe,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function qf($){let l,b,u,m,v,i,f,D,je,fe,F,Z,W,oe,Ie,U,Ge,De,G,V,ne,we,C,A,_e,se,Fe,ge,R,Be,ze,O,Qe,Y,S,M,B,He,We,j,Ue,ae,ye,L,z,re,nt,st,I,at,rt,xe,K,de,Se,dt,ie,it,le,Ve,Re,Nd,jd,As,Id,Gd,Bd,Ee,Qd,Ps,Hd,Wd,Ns,Ud,Vd,Zn,Rd,Kd,js,Xd,Jd,Zd,X,Yd,Is,ei,ti,Gs,oi,ni,Yn,si,ai,Bs,ri,di,Qs,ii,li,Hs,ci,hi,pi,lt,ui,Ws,mi,fi,Us,_i,gi,bi,So,vi,Mo,Ti,ki,wi,Co,yi,Oo,Ei,qi,vr,Pt,Li,Ao,$i,Di,Tr,ct,Nt,Vs,Po,Fi,Rs,zi,kr,P,No,xi,ht,Si,es,Mi,Ci,jo,Oi,Ai,Pi,pt,Ni,ts,ji,Ii,os,Gi,Bi,Qi,jt,Hi,Ks,Xs,Js,Zs,Wi,Ui,Ys,ea,ta,It,Gt,oa,Io,Vi,na,Ri,Ki,sa,aa,Go,Bt,Qt,ra,Bo,Xi,da,Ji,Zi,ia,Yi,el,la,ca,ha,Ht,Wt,pa,Qo,tl,ua,ol,wr,ut,Ut,ma,Ho,nl,fa,sl,yr,N,Wo,al,_a,rl,dl,Vt,ns,il,ll,ss,cl,hl,pl,Uo,ul,as,ml,fl,_l,Ke,Vo,gl,ga,bl,vl,Ro,rs,Tl,ba,kl,wl,ds,yl,va,El,ql,Rt,Ko,Ll,Xo,$l,Ta,Dl,Fl,zl,Kt,Jo,xl,ka,Sl,Ml,is,Zo,Er,mt,Xt,wa,Yo,Cl,ya,Ol,qr,qe,en,Al,tn,Pl,Ea,Nl,jl,Il,Jt,ls,Gl,Bl,cs,Ql,Hl,Wl,on,Ul,hs,Vl,Rl,Lr,ft,Zt,qa,nn,Kl,La,Xl,$r,_t,sn,Jl,$a,Zl,Dr,gt,an,Yl,Da,ec,Fr,bt,rn,tc,Fa,oc,zr,vt,dn,nc,za,sc,xr,Tt,ln,ac,xa,rc,Sr,kt,cn,dc,Sa,ic,Mr,wt,hn,lc,Ma,cc,Cr,yt,pn,hc,Ca,pc,Or,Et,Yt,Oa,un,uc,Aa,mc,Ar,Le,mn,fc,fn,_c,ps,gc,bc,vc,_n,Tc,gn,kc,wc,yc,Me,bn,Ec,qt,qc,us,Lc,$c,Pa,Dc,Fc,zc,eo,xc,to,Pr,Lt,oo,Na,vn,Sc,ja,Mc,Nr,$e,Tn,Cc,kn,Oc,ms,Ac,Pc,Nc,wn,jc,yn,Ic,Gc,Bc,be,En,Qc,$t,Hc,fs,Wc,Uc,Ia,Vc,Rc,Kc,no,Xc,so,Jc,ao,jr,Dt,ro,Ga,qn,Zc,Ba,Yc,Ir,ce,Ln,eh,Qa,th,oh,$n,nh,_s,sh,ah,rh,Dn,dh,Fn,ih,lh,ch,Q,zn,hh,Ft,ph,gs,uh,mh,Ha,fh,_h,gh,io,bh,lo,vh,co,Th,ho,kh,po,Gr,zt,uo,Wa,xn,wh,Ua,yh,Br,he,Sn,Eh,xt,qh,Va,Lh,$h,Ra,Dh,Fh,zh,Mn,xh,bs,Sh,Mh,Ch,Cn,Oh,On,Ah,Ph,Nh,ve,An,jh,St,Ih,vs,Gh,Bh,Ka,Qh,Hh,Wh,mo,Uh,fo,Vh,_o,Qr,Mt,go,Xa,Pn,Rh,Ja,Kh,Hr,pe,Nn,Xh,jn,Jh,Ts,Zh,Yh,ep,In,tp,Gn,op,np,sp,bo,ap,Ce,Bn,rp,Ct,dp,ks,ip,lp,Za,cp,hp,pp,vo,up,To,Wr,Ot,ko,Ya,Qn,mp,er,fp,Ur,ue,Hn,_p,Wn,gp,ws,bp,vp,Tp,Un,kp,Vn,wp,yp,Ep,wo,qp,Oe,Rn,Lp,At,$p,ys,Dp,Fp,tr,zp,xp,Sp,yo,Mp,Eo,Vr;return i=new me({}),oe=new me({}),Po=new me({}),No=new x({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LEDConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.LEDConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.LEDConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.LEDConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.LEDConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.LEDConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.LEDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.LEDConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.LEDConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.LEDConfig.max_encoder_position_embeddings",description:`<strong>max_encoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the encoder might ever be used with.`,name:"max_encoder_position_embeddings"},{anchor:"transformers.LEDConfig.max_decoder_position_embeddings",description:`<strong>max_decoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the decoder might ever be used with.`,name:"max_decoder_position_embeddings"},{anchor:"transformers.LEDConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/configuration_led.py#L31"}}),jt=new Ae({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[sf]},$$scope:{ctx:$}}}),Io=new me({}),Bo=new me({}),Qo=new me({}),Ho=new me({}),Wo=new x({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/tokenization_led.py#L43"}}),Vo=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ko=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zo=new x({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bart/tokenization_bart.py#L309"}}),Yo=new me({}),en=new x({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/tokenization_led_fast.py#L44"}}),nn=new me({}),sn=new x({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L1125"}}),an=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L1168"}}),rn=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L1236"}}),dn=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L1303"}}),ln=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L1370"}}),cn=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_tf_led.py#L1330"}}),hn=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_tf_led.py#L1373"}}),pn=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_tf_led.py#L1441"}}),un=new me({}),mn=new x({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2159"}}),bn=new x({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2186",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),eo=new xo({props:{$$slots:{default:[af]},$$scope:{ctx:$}}}),to=new Ae({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[rf]},$$scope:{ctx:$}}}),vn=new me({}),Tn=new x({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2282"}}),En=new x({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2326",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),no=new xo({props:{$$slots:{default:[df]},$$scope:{ctx:$}}}),so=new Ae({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[lf]},$$scope:{ctx:$}}}),ao=new Ae({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[cf]},$$scope:{ctx:$}}}),qn=new me({}),Ln=new x({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2473"}}),zn=new x({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2486",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),io=new xo({props:{$$slots:{default:[hf]},$$scope:{ctx:$}}}),lo=new Ae({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[pf]},$$scope:{ctx:$}}}),co=new Ae({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[uf]},$$scope:{ctx:$}}}),ho=new Ae({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-3",$$slots:{default:[mf]},$$scope:{ctx:$}}}),po=new Ae({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-4",$$slots:{default:[ff]},$$scope:{ctx:$}}}),xn=new me({}),Sn=new x({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2601"}}),An=new x({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_led.py#L2613",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),mo=new xo({props:{$$slots:{default:[_f]},$$scope:{ctx:$}}}),fo=new Ae({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[gf]},$$scope:{ctx:$}}}),_o=new Ae({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example-2",$$slots:{default:[bf]},$$scope:{ctx:$}}}),Pn=new me({}),Nn=new x({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_tf_led.py#L2191"}}),bo=new xo({props:{$$slots:{default:[vf]},$$scope:{ctx:$}}}),Bn=new x({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_tf_led.py#L2203",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new xo({props:{$$slots:{default:[Tf]},$$scope:{ctx:$}}}),To=new Ae({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[kf]},$$scope:{ctx:$}}}),Qn=new me({}),Hn=new x({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_tf_led.py#L2279"}}),wo=new xo({props:{$$slots:{default:[wf]},$$scope:{ctx:$}}}),Rn=new x({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/led/modeling_tf_led.py#L2312",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yo=new xo({props:{$$slots:{default:[yf]},$$scope:{ctx:$}}}),Eo=new Ae({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[Ef]},$$scope:{ctx:$}}}),{c(){l=n("meta"),b=c(),u=n("h1"),m=n("a"),v=n("span"),T(i.$$.fragment),f=c(),D=n("span"),je=r("LED"),fe=c(),F=n("h2"),Z=n("a"),W=n("span"),T(oe.$$.fragment),Ie=c(),U=n("span"),Ge=r("Overview"),De=c(),G=n("p"),V=r("The LED model was proposed in "),ne=n("a"),we=r("Longformer: The Long-Document Transformer"),C=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),A=c(),_e=n("p"),se=r("The abstract from the paper is the following:"),Fe=c(),ge=n("p"),R=n("em"),Be=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),ze=c(),O=n("p"),Qe=r("Tips:"),Y=c(),S=n("ul"),M=n("li"),B=n("a"),He=r("LEDForConditionalGeneration"),We=r(` is an extension of
`),j=n("a"),Ue=r("BartForConditionalGeneration"),ae=r(" exchanging the traditional "),ye=n("em"),L=r("self-attention"),z=r(` layer with
`),re=n("em"),nt=r("Longformer"),st=r("\u2019s "),I=n("em"),at=r("chunked self-attention"),rt=r(" layer. "),xe=n("a"),K=r("LEDTokenizer"),de=r(` is an alias of
`),Se=n("a"),dt=r("BartTokenizer"),ie=r("."),it=c(),le=n("li"),Ve=r("LED works very well on long-range "),Re=n("em"),Nd=r("sequence-to-sequence"),jd=r(" tasks where the "),As=n("code"),Id=r("input_ids"),Gd=r(` largely exceed a length of
1024 tokens.`),Bd=c(),Ee=n("li"),Qd=r("LED pads the "),Ps=n("code"),Hd=r("input_ids"),Wd=r(" to be a multiple of "),Ns=n("code"),Ud=r("config.attention_window"),Vd=r(` if required. Therefore a small speed-up is
gained, when `),Zn=n("a"),Rd=r("LEDTokenizer"),Kd=r(" is used with the "),js=n("code"),Xd=r("pad_to_multiple_of"),Jd=r(" argument."),Zd=c(),X=n("li"),Yd=r("LED makes use of "),Is=n("em"),ei=r("global attention"),ti=r(" by means of the "),Gs=n("code"),oi=r("global_attention_mask"),ni=r(` (see
`),Yn=n("a"),si=r("LongformerModel"),ai=r("). For summarization, it is advised to put "),Bs=n("em"),ri=r("global attention"),di=r(` only on the first
`),Qs=n("code"),ii=r("<s>"),li=r(" token. For question answering, it is advised to put "),Hs=n("em"),ci=r("global attention"),hi=r(" on all tokens of the question."),pi=c(),lt=n("li"),ui=r("To fine-tune LED on all 16384, it is necessary to enable "),Ws=n("em"),mi=r("gradient checkpointing"),fi=r(` by executing
`),Us=n("code"),_i=r("model.gradient_checkpointing_enable()"),gi=r("."),bi=c(),So=n("li"),vi=r("A notebook showing how to evaluate LED, can be accessed "),Mo=n("a"),Ti=r("here"),ki=r("."),wi=c(),Co=n("li"),yi=r("A notebook showing how to fine-tune LED, can be accessed "),Oo=n("a"),Ei=r("here"),qi=r("."),vr=c(),Pt=n("p"),Li=r("This model was contributed by "),Ao=n("a"),$i=r("patrickvonplaten"),Di=r("."),Tr=c(),ct=n("h2"),Nt=n("a"),Vs=n("span"),T(Po.$$.fragment),Fi=c(),Rs=n("span"),zi=r("LEDConfig"),kr=c(),P=n("div"),T(No.$$.fragment),xi=c(),ht=n("p"),Si=r("This is the configuration class to store the configuration of a "),es=n("a"),Mi=r("LEDModel"),Ci=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),jo=n("a"),Oi=r("allenai/led-base-16384"),Ai=r(" architecture."),Pi=c(),pt=n("p"),Ni=r("Configuration objects inherit from "),ts=n("a"),ji=r("PretrainedConfig"),Ii=r(` and can be used to control the model outputs. Read the
documentation from `),os=n("a"),Gi=r("PretrainedConfig"),Bi=r(" for more information."),Qi=c(),T(jt.$$.fragment),Hi=c(),Ks=n("blockquote"),Xs=n("blockquote"),Js=n("blockquote"),Zs=n("p"),Wi=r("from transformers import LEDModel, LEDConfig"),Ui=c(),Ys=n("blockquote"),ea=n("blockquote"),ta=n("blockquote"),It=n("h1"),Gt=n("a"),oa=n("span"),T(Io.$$.fragment),Vi=c(),na=n("span"),Ri=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Ki=c(),sa=n("blockquote"),aa=n("blockquote"),Go=n("blockquote"),Bt=n("h1"),Qt=n("a"),ra=n("span"),T(Bo.$$.fragment),Xi=c(),da=n("span"),Ji=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Zi=c(),ia=n("p"),Yi=r("LEDModel(configuration)"),el=c(),la=n("blockquote"),ca=n("blockquote"),ha=n("blockquote"),Ht=n("h1"),Wt=n("a"),pa=n("span"),T(Qo.$$.fragment),tl=c(),ua=n("span"),ol=r("Accessing the model configuration >>> configuration = model.config"),wr=c(),ut=n("h2"),Ut=n("a"),ma=n("span"),T(Ho.$$.fragment),nl=c(),fa=n("span"),sl=r("LEDTokenizer"),yr=c(),N=n("div"),T(Wo.$$.fragment),al=c(),_a=n("p"),rl=r("Construct a LED tokenizer."),dl=c(),Vt=n("p"),ns=n("a"),il=r("LEDTokenizer"),ll=r(" is identical to "),ss=n("a"),cl=r("BartTokenizer"),hl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),pl=c(),Uo=n("p"),ul=r("Refer to superclass "),as=n("a"),ml=r("BartTokenizer"),fl=r(" for usage examples and documentation concerning parameters."),_l=c(),Ke=n("div"),T(Vo.$$.fragment),gl=c(),ga=n("p"),bl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),vl=c(),Ro=n("ul"),rs=n("li"),Tl=r("single sequence: "),ba=n("code"),kl=r("<s> X </s>"),wl=c(),ds=n("li"),yl=r("pair of sequences: "),va=n("code"),El=r("<s> A </s></s> B </s>"),ql=c(),Rt=n("div"),T(Ko.$$.fragment),Ll=c(),Xo=n("p"),$l=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ta=n("code"),Dl=r("prepare_for_model"),Fl=r(" method."),zl=c(),Kt=n("div"),T(Jo.$$.fragment),xl=c(),ka=n("p"),Sl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Ml=c(),is=n("div"),T(Zo.$$.fragment),Er=c(),mt=n("h2"),Xt=n("a"),wa=n("span"),T(Yo.$$.fragment),Cl=c(),ya=n("span"),Ol=r("LEDTokenizerFast"),qr=c(),qe=n("div"),T(en.$$.fragment),Al=c(),tn=n("p"),Pl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Ea=n("em"),Nl=r("tokenizers"),jl=r(" library)."),Il=c(),Jt=n("p"),ls=n("a"),Gl=r("LEDTokenizerFast"),Bl=r(" is identical to "),cs=n("a"),Ql=r("BartTokenizerFast"),Hl=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Wl=c(),on=n("p"),Ul=r("Refer to superclass "),hs=n("a"),Vl=r("BartTokenizerFast"),Rl=r(" for usage examples and documentation concerning parameters."),Lr=c(),ft=n("h2"),Zt=n("a"),qa=n("span"),T(nn.$$.fragment),Kl=c(),La=n("span"),Xl=r("LED specific outputs"),$r=c(),_t=n("div"),T(sn.$$.fragment),Jl=c(),$a=n("p"),Zl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Dr=c(),gt=n("div"),T(an.$$.fragment),Yl=c(),Da=n("p"),ec=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Fr=c(),bt=n("div"),T(rn.$$.fragment),tc=c(),Fa=n("p"),oc=r("Base class for sequence-to-sequence language models outputs."),zr=c(),vt=n("div"),T(dn.$$.fragment),nc=c(),za=n("p"),sc=r("Base class for outputs of sequence-to-sequence sentence classification models."),xr=c(),Tt=n("div"),T(ln.$$.fragment),ac=c(),xa=n("p"),rc=r("Base class for outputs of sequence-to-sequence question answering models."),Sr=c(),kt=n("div"),T(cn.$$.fragment),dc=c(),Sa=n("p"),ic=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Mr=c(),wt=n("div"),T(hn.$$.fragment),lc=c(),Ma=n("p"),cc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Cr=c(),yt=n("div"),T(pn.$$.fragment),hc=c(),Ca=n("p"),pc=r("Base class for sequence-to-sequence language models outputs."),Or=c(),Et=n("h2"),Yt=n("a"),Oa=n("span"),T(un.$$.fragment),uc=c(),Aa=n("span"),mc=r("LEDModel"),Ar=c(),Le=n("div"),T(mn.$$.fragment),fc=c(),fn=n("p"),_c=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=n("a"),gc=r("PreTrainedModel"),bc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=c(),_n=n("p"),Tc=r("This model is also a PyTorch "),gn=n("a"),kc=r("torch.nn.Module"),wc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yc=c(),Me=n("div"),T(bn.$$.fragment),Ec=c(),qt=n("p"),qc=r("The "),us=n("a"),Lc=r("LEDModel"),$c=r(" forward method, overrides the "),Pa=n("code"),Dc=r("__call__"),Fc=r(" special method."),zc=c(),T(eo.$$.fragment),xc=c(),T(to.$$.fragment),Pr=c(),Lt=n("h2"),oo=n("a"),Na=n("span"),T(vn.$$.fragment),Sc=c(),ja=n("span"),Mc=r("LEDForConditionalGeneration"),Nr=c(),$e=n("div"),T(Tn.$$.fragment),Cc=c(),kn=n("p"),Oc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ms=n("a"),Ac=r("PreTrainedModel"),Pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc=c(),wn=n("p"),jc=r("This model is also a PyTorch "),yn=n("a"),Ic=r("torch.nn.Module"),Gc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bc=c(),be=n("div"),T(En.$$.fragment),Qc=c(),$t=n("p"),Hc=r("The "),fs=n("a"),Wc=r("LEDForConditionalGeneration"),Uc=r(" forward method, overrides the "),Ia=n("code"),Vc=r("__call__"),Rc=r(" special method."),Kc=c(),T(no.$$.fragment),Xc=c(),T(so.$$.fragment),Jc=c(),T(ao.$$.fragment),jr=c(),Dt=n("h2"),ro=n("a"),Ga=n("span"),T(qn.$$.fragment),Zc=c(),Ba=n("span"),Yc=r("LEDForSequenceClassification"),Ir=c(),ce=n("div"),T(Ln.$$.fragment),eh=c(),Qa=n("p"),th=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),oh=c(),$n=n("p"),nh=r("This model inherits from "),_s=n("a"),sh=r("PreTrainedModel"),ah=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh=c(),Dn=n("p"),dh=r("This model is also a PyTorch "),Fn=n("a"),ih=r("torch.nn.Module"),lh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ch=c(),Q=n("div"),T(zn.$$.fragment),hh=c(),Ft=n("p"),ph=r("The "),gs=n("a"),uh=r("LEDForSequenceClassification"),mh=r(" forward method, overrides the "),Ha=n("code"),fh=r("__call__"),_h=r(" special method."),gh=c(),T(io.$$.fragment),bh=c(),T(lo.$$.fragment),vh=c(),T(co.$$.fragment),Th=c(),T(ho.$$.fragment),kh=c(),T(po.$$.fragment),Gr=c(),zt=n("h2"),uo=n("a"),Wa=n("span"),T(xn.$$.fragment),wh=c(),Ua=n("span"),yh=r("LEDForQuestionAnswering"),Br=c(),he=n("div"),T(Sn.$$.fragment),Eh=c(),xt=n("p"),qh=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Va=n("code"),Lh=r("span start logits"),$h=r(" and "),Ra=n("code"),Dh=r("span end logits"),Fh=r(")."),zh=c(),Mn=n("p"),xh=r("This model inherits from "),bs=n("a"),Sh=r("PreTrainedModel"),Mh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ch=c(),Cn=n("p"),Oh=r("This model is also a PyTorch "),On=n("a"),Ah=r("torch.nn.Module"),Ph=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nh=c(),ve=n("div"),T(An.$$.fragment),jh=c(),St=n("p"),Ih=r("The "),vs=n("a"),Gh=r("LEDForQuestionAnswering"),Bh=r(" forward method, overrides the "),Ka=n("code"),Qh=r("__call__"),Hh=r(" special method."),Wh=c(),T(mo.$$.fragment),Uh=c(),T(fo.$$.fragment),Vh=c(),T(_o.$$.fragment),Qr=c(),Mt=n("h2"),go=n("a"),Xa=n("span"),T(Pn.$$.fragment),Rh=c(),Ja=n("span"),Kh=r("TFLEDModel"),Hr=c(),pe=n("div"),T(Nn.$$.fragment),Xh=c(),jn=n("p"),Jh=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ts=n("a"),Zh=r("TFPreTrainedModel"),Yh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=c(),In=n("p"),tp=r("This model is also a "),Gn=n("a"),op=r("tf.keras.Model"),np=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sp=c(),T(bo.$$.fragment),ap=c(),Ce=n("div"),T(Bn.$$.fragment),rp=c(),Ct=n("p"),dp=r("The "),ks=n("a"),ip=r("TFLEDModel"),lp=r(" forward method, overrides the "),Za=n("code"),cp=r("__call__"),hp=r(" special method."),pp=c(),T(vo.$$.fragment),up=c(),T(To.$$.fragment),Wr=c(),Ot=n("h2"),ko=n("a"),Ya=n("span"),T(Qn.$$.fragment),mp=c(),er=n("span"),fp=r("TFLEDForConditionalGeneration"),Ur=c(),ue=n("div"),T(Hn.$$.fragment),_p=c(),Wn=n("p"),gp=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ws=n("a"),bp=r("TFPreTrainedModel"),vp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp=c(),Un=n("p"),kp=r("This model is also a "),Vn=n("a"),wp=r("tf.keras.Model"),yp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ep=c(),T(wo.$$.fragment),qp=c(),Oe=n("div"),T(Rn.$$.fragment),Lp=c(),At=n("p"),$p=r("The "),ys=n("a"),Dp=r("TFLEDForConditionalGeneration"),Fp=r(" forward method, overrides the "),tr=n("code"),zp=r("__call__"),xp=r(" special method."),Sp=c(),T(yo.$$.fragment),Mp=c(),T(Eo.$$.fragment),this.h()},l(o){const _=of('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(o),u=s(o,"H1",{class:!0});var Kn=a(u);m=s(Kn,"A",{id:!0,class:!0,href:!0});var or=a(m);v=s(or,"SPAN",{});var nr=a(v);k(i.$$.fragment,nr),nr.forEach(t),or.forEach(t),f=h(Kn),D=s(Kn,"SPAN",{});var sr=a(D);je=d(sr,"LED"),sr.forEach(t),Kn.forEach(t),fe=h(o),F=s(o,"H2",{class:!0});var Xn=a(F);Z=s(Xn,"A",{id:!0,class:!0,href:!0});var ar=a(Z);W=s(ar,"SPAN",{});var rr=a(W);k(oe.$$.fragment,rr),rr.forEach(t),ar.forEach(t),Ie=h(Xn),U=s(Xn,"SPAN",{});var dr=a(U);Ge=d(dr,"Overview"),dr.forEach(t),Xn.forEach(t),De=h(o),G=s(o,"P",{});var Jn=a(G);V=d(Jn,"The LED model was proposed in "),ne=s(Jn,"A",{href:!0,rel:!0});var ir=a(ne);we=d(ir,"Longformer: The Long-Document Transformer"),ir.forEach(t),C=d(Jn,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Jn.forEach(t),A=h(o),_e=s(o,"P",{});var lr=a(_e);se=d(lr,"The abstract from the paper is the following:"),lr.forEach(t),Fe=h(o),ge=s(o,"P",{});var cr=a(ge);R=s(cr,"EM",{});var hr=a(R);Be=d(hr,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),hr.forEach(t),cr.forEach(t),ze=h(o),O=s(o,"P",{});var pr=a(O);Qe=d(pr,"Tips:"),pr.forEach(t),Y=h(o),S=s(o,"UL",{});var J=a(S);M=s(J,"LI",{});var H=a(M);B=s(H,"A",{href:!0});var ur=a(B);He=d(ur,"LEDForConditionalGeneration"),ur.forEach(t),We=d(H,` is an extension of
`),j=s(H,"A",{href:!0});var mr=a(j);Ue=d(mr,"BartForConditionalGeneration"),mr.forEach(t),ae=d(H," exchanging the traditional "),ye=s(H,"EM",{});var fr=a(ye);L=d(fr,"self-attention"),fr.forEach(t),z=d(H,` layer with
`),re=s(H,"EM",{});var _r=a(re);nt=d(_r,"Longformer"),_r.forEach(t),st=d(H,"\u2019s "),I=s(H,"EM",{});var Ap=a(I);at=d(Ap,"chunked self-attention"),Ap.forEach(t),rt=d(H," layer. "),xe=s(H,"A",{href:!0});var Pp=a(xe);K=d(Pp,"LEDTokenizer"),Pp.forEach(t),de=d(H,` is an alias of
`),Se=s(H,"A",{href:!0});var Np=a(Se);dt=d(Np,"BartTokenizer"),Np.forEach(t),ie=d(H,"."),H.forEach(t),it=h(J),le=s(J,"LI",{});var Es=a(le);Ve=d(Es,"LED works very well on long-range "),Re=s(Es,"EM",{});var jp=a(Re);Nd=d(jp,"sequence-to-sequence"),jp.forEach(t),jd=d(Es," tasks where the "),As=s(Es,"CODE",{});var Ip=a(As);Id=d(Ip,"input_ids"),Ip.forEach(t),Gd=d(Es,` largely exceed a length of
1024 tokens.`),Es.forEach(t),Bd=h(J),Ee=s(J,"LI",{});var Xe=a(Ee);Qd=d(Xe,"LED pads the "),Ps=s(Xe,"CODE",{});var Gp=a(Ps);Hd=d(Gp,"input_ids"),Gp.forEach(t),Wd=d(Xe," to be a multiple of "),Ns=s(Xe,"CODE",{});var Bp=a(Ns);Ud=d(Bp,"config.attention_window"),Bp.forEach(t),Vd=d(Xe,` if required. Therefore a small speed-up is
gained, when `),Zn=s(Xe,"A",{href:!0});var Qp=a(Zn);Rd=d(Qp,"LEDTokenizer"),Qp.forEach(t),Kd=d(Xe," is used with the "),js=s(Xe,"CODE",{});var Hp=a(js);Xd=d(Hp,"pad_to_multiple_of"),Hp.forEach(t),Jd=d(Xe," argument."),Xe.forEach(t),Zd=h(J),X=s(J,"LI",{});var Te=a(X);Yd=d(Te,"LED makes use of "),Is=s(Te,"EM",{});var Wp=a(Is);ei=d(Wp,"global attention"),Wp.forEach(t),ti=d(Te," by means of the "),Gs=s(Te,"CODE",{});var Up=a(Gs);oi=d(Up,"global_attention_mask"),Up.forEach(t),ni=d(Te,` (see
`),Yn=s(Te,"A",{href:!0});var Vp=a(Yn);si=d(Vp,"LongformerModel"),Vp.forEach(t),ai=d(Te,"). For summarization, it is advised to put "),Bs=s(Te,"EM",{});var Rp=a(Bs);ri=d(Rp,"global attention"),Rp.forEach(t),di=d(Te,` only on the first
`),Qs=s(Te,"CODE",{});var Kp=a(Qs);ii=d(Kp,"<s>"),Kp.forEach(t),li=d(Te," token. For question answering, it is advised to put "),Hs=s(Te,"EM",{});var Xp=a(Hs);ci=d(Xp,"global attention"),Xp.forEach(t),hi=d(Te," on all tokens of the question."),Te.forEach(t),pi=h(J),lt=s(J,"LI",{});var qs=a(lt);ui=d(qs,"To fine-tune LED on all 16384, it is necessary to enable "),Ws=s(qs,"EM",{});var Jp=a(Ws);mi=d(Jp,"gradient checkpointing"),Jp.forEach(t),fi=d(qs,` by executing
`),Us=s(qs,"CODE",{});var Zp=a(Us);_i=d(Zp,"model.gradient_checkpointing_enable()"),Zp.forEach(t),gi=d(qs,"."),qs.forEach(t),bi=h(J),So=s(J,"LI",{});var Rr=a(So);vi=d(Rr,"A notebook showing how to evaluate LED, can be accessed "),Mo=s(Rr,"A",{href:!0,rel:!0});var Yp=a(Mo);Ti=d(Yp,"here"),Yp.forEach(t),ki=d(Rr,"."),Rr.forEach(t),wi=h(J),Co=s(J,"LI",{});var Kr=a(Co);yi=d(Kr,"A notebook showing how to fine-tune LED, can be accessed "),Oo=s(Kr,"A",{href:!0,rel:!0});var eu=a(Oo);Ei=d(eu,"here"),eu.forEach(t),qi=d(Kr,"."),Kr.forEach(t),J.forEach(t),vr=h(o),Pt=s(o,"P",{});var Xr=a(Pt);Li=d(Xr,"This model was contributed by "),Ao=s(Xr,"A",{href:!0,rel:!0});var tu=a(Ao);$i=d(tu,"patrickvonplaten"),tu.forEach(t),Di=d(Xr,"."),Xr.forEach(t),Tr=h(o),ct=s(o,"H2",{class:!0});var Jr=a(ct);Nt=s(Jr,"A",{id:!0,class:!0,href:!0});var ou=a(Nt);Vs=s(ou,"SPAN",{});var nu=a(Vs);k(Po.$$.fragment,nu),nu.forEach(t),ou.forEach(t),Fi=h(Jr),Rs=s(Jr,"SPAN",{});var su=a(Rs);zi=d(su,"LEDConfig"),su.forEach(t),Jr.forEach(t),kr=h(o),P=s(o,"DIV",{class:!0});var ee=a(P);k(No.$$.fragment,ee),xi=h(ee),ht=s(ee,"P",{});var Ls=a(ht);Si=d(Ls,"This is the configuration class to store the configuration of a "),es=s(Ls,"A",{href:!0});var au=a(es);Mi=d(au,"LEDModel"),au.forEach(t),Ci=d(Ls,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),jo=s(Ls,"A",{href:!0,rel:!0});var ru=a(jo);Oi=d(ru,"allenai/led-base-16384"),ru.forEach(t),Ai=d(Ls," architecture."),Ls.forEach(t),Pi=h(ee),pt=s(ee,"P",{});var $s=a(pt);Ni=d($s,"Configuration objects inherit from "),ts=s($s,"A",{href:!0});var du=a(ts);ji=d(du,"PretrainedConfig"),du.forEach(t),Ii=d($s,` and can be used to control the model outputs. Read the
documentation from `),os=s($s,"A",{href:!0});var iu=a(os);Gi=d(iu,"PretrainedConfig"),iu.forEach(t),Bi=d($s," for more information."),$s.forEach(t),Qi=h(ee),k(jt.$$.fragment,ee),Hi=h(ee),Ks=s(ee,"BLOCKQUOTE",{});var lu=a(Ks);Xs=s(lu,"BLOCKQUOTE",{});var cu=a(Xs);Js=s(cu,"BLOCKQUOTE",{});var hu=a(Js);Zs=s(hu,"P",{});var pu=a(Zs);Wi=d(pu,"from transformers import LEDModel, LEDConfig"),pu.forEach(t),hu.forEach(t),cu.forEach(t),lu.forEach(t),Ui=h(ee),Ys=s(ee,"BLOCKQUOTE",{});var uu=a(Ys);ea=s(uu,"BLOCKQUOTE",{});var mu=a(ea);ta=s(mu,"BLOCKQUOTE",{});var fu=a(ta);It=s(fu,"H1",{class:!0});var Zr=a(It);Gt=s(Zr,"A",{id:!0,class:!0,href:!0});var _u=a(Gt);oa=s(_u,"SPAN",{});var gu=a(oa);k(Io.$$.fragment,gu),gu.forEach(t),_u.forEach(t),Vi=h(Zr),na=s(Zr,"SPAN",{});var bu=a(na);Ri=d(bu,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),bu.forEach(t),Zr.forEach(t),fu.forEach(t),mu.forEach(t),uu.forEach(t),Ki=h(ee),sa=s(ee,"BLOCKQUOTE",{});var vu=a(sa);aa=s(vu,"BLOCKQUOTE",{});var Tu=a(aa);Go=s(Tu,"BLOCKQUOTE",{});var Yr=a(Go);Bt=s(Yr,"H1",{class:!0});var ed=a(Bt);Qt=s(ed,"A",{id:!0,class:!0,href:!0});var ku=a(Qt);ra=s(ku,"SPAN",{});var wu=a(ra);k(Bo.$$.fragment,wu),wu.forEach(t),ku.forEach(t),Xi=h(ed),da=s(ed,"SPAN",{});var yu=a(da);Ji=d(yu,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),yu.forEach(t),ed.forEach(t),Zi=h(Yr),ia=s(Yr,"P",{});var Eu=a(ia);Yi=d(Eu,"LEDModel(configuration)"),Eu.forEach(t),Yr.forEach(t),Tu.forEach(t),vu.forEach(t),el=h(ee),la=s(ee,"BLOCKQUOTE",{});var qu=a(la);ca=s(qu,"BLOCKQUOTE",{});var Lu=a(ca);ha=s(Lu,"BLOCKQUOTE",{});var $u=a(ha);Ht=s($u,"H1",{class:!0});var td=a(Ht);Wt=s(td,"A",{id:!0,class:!0,href:!0});var Du=a(Wt);pa=s(Du,"SPAN",{});var Fu=a(pa);k(Qo.$$.fragment,Fu),Fu.forEach(t),Du.forEach(t),tl=h(td),ua=s(td,"SPAN",{});var zu=a(ua);ol=d(zu,"Accessing the model configuration >>> configuration = model.config"),zu.forEach(t),td.forEach(t),$u.forEach(t),Lu.forEach(t),qu.forEach(t),ee.forEach(t),wr=h(o),ut=s(o,"H2",{class:!0});var od=a(ut);Ut=s(od,"A",{id:!0,class:!0,href:!0});var xu=a(Ut);ma=s(xu,"SPAN",{});var Su=a(ma);k(Ho.$$.fragment,Su),Su.forEach(t),xu.forEach(t),nl=h(od),fa=s(od,"SPAN",{});var Mu=a(fa);sl=d(Mu,"LEDTokenizer"),Mu.forEach(t),od.forEach(t),yr=h(o),N=s(o,"DIV",{class:!0});var te=a(N);k(Wo.$$.fragment,te),al=h(te),_a=s(te,"P",{});var Cu=a(_a);rl=d(Cu,"Construct a LED tokenizer."),Cu.forEach(t),dl=h(te),Vt=s(te,"P",{});var gr=a(Vt);ns=s(gr,"A",{href:!0});var Ou=a(ns);il=d(Ou,"LEDTokenizer"),Ou.forEach(t),ll=d(gr," is identical to "),ss=s(gr,"A",{href:!0});var Au=a(ss);cl=d(Au,"BartTokenizer"),Au.forEach(t),hl=d(gr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),gr.forEach(t),pl=h(te),Uo=s(te,"P",{});var nd=a(Uo);ul=d(nd,"Refer to superclass "),as=s(nd,"A",{href:!0});var Pu=a(as);ml=d(Pu,"BartTokenizer"),Pu.forEach(t),fl=d(nd," for usage examples and documentation concerning parameters."),nd.forEach(t),_l=h(te),Ke=s(te,"DIV",{class:!0});var Ds=a(Ke);k(Vo.$$.fragment,Ds),gl=h(Ds),ga=s(Ds,"P",{});var Nu=a(ga);bl=d(Nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Nu.forEach(t),vl=h(Ds),Ro=s(Ds,"UL",{});var sd=a(Ro);rs=s(sd,"LI",{});var Cp=a(rs);Tl=d(Cp,"single sequence: "),ba=s(Cp,"CODE",{});var ju=a(ba);kl=d(ju,"<s> X </s>"),ju.forEach(t),Cp.forEach(t),wl=h(sd),ds=s(sd,"LI",{});var Op=a(ds);yl=d(Op,"pair of sequences: "),va=s(Op,"CODE",{});var Iu=a(va);El=d(Iu,"<s> A </s></s> B </s>"),Iu.forEach(t),Op.forEach(t),sd.forEach(t),Ds.forEach(t),ql=h(te),Rt=s(te,"DIV",{class:!0});var ad=a(Rt);k(Ko.$$.fragment,ad),Ll=h(ad),Xo=s(ad,"P",{});var rd=a(Xo);$l=d(rd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ta=s(rd,"CODE",{});var Gu=a(Ta);Dl=d(Gu,"prepare_for_model"),Gu.forEach(t),Fl=d(rd," method."),rd.forEach(t),ad.forEach(t),zl=h(te),Kt=s(te,"DIV",{class:!0});var dd=a(Kt);k(Jo.$$.fragment,dd),xl=h(dd),ka=s(dd,"P",{});var Bu=a(ka);Sl=d(Bu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Bu.forEach(t),dd.forEach(t),Ml=h(te),is=s(te,"DIV",{class:!0});var Qu=a(is);k(Zo.$$.fragment,Qu),Qu.forEach(t),te.forEach(t),Er=h(o),mt=s(o,"H2",{class:!0});var id=a(mt);Xt=s(id,"A",{id:!0,class:!0,href:!0});var Hu=a(Xt);wa=s(Hu,"SPAN",{});var Wu=a(wa);k(Yo.$$.fragment,Wu),Wu.forEach(t),Hu.forEach(t),Cl=h(id),ya=s(id,"SPAN",{});var Uu=a(ya);Ol=d(Uu,"LEDTokenizerFast"),Uu.forEach(t),id.forEach(t),qr=h(o),qe=s(o,"DIV",{class:!0});var qo=a(qe);k(en.$$.fragment,qo),Al=h(qo),tn=s(qo,"P",{});var ld=a(tn);Pl=d(ld,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Ea=s(ld,"EM",{});var Vu=a(Ea);Nl=d(Vu,"tokenizers"),Vu.forEach(t),jl=d(ld," library)."),ld.forEach(t),Il=h(qo),Jt=s(qo,"P",{});var br=a(Jt);ls=s(br,"A",{href:!0});var Ru=a(ls);Gl=d(Ru,"LEDTokenizerFast"),Ru.forEach(t),Bl=d(br," is identical to "),cs=s(br,"A",{href:!0});var Ku=a(cs);Ql=d(Ku,"BartTokenizerFast"),Ku.forEach(t),Hl=d(br,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),br.forEach(t),Wl=h(qo),on=s(qo,"P",{});var cd=a(on);Ul=d(cd,"Refer to superclass "),hs=s(cd,"A",{href:!0});var Xu=a(hs);Vl=d(Xu,"BartTokenizerFast"),Xu.forEach(t),Rl=d(cd," for usage examples and documentation concerning parameters."),cd.forEach(t),qo.forEach(t),Lr=h(o),ft=s(o,"H2",{class:!0});var hd=a(ft);Zt=s(hd,"A",{id:!0,class:!0,href:!0});var Ju=a(Zt);qa=s(Ju,"SPAN",{});var Zu=a(qa);k(nn.$$.fragment,Zu),Zu.forEach(t),Ju.forEach(t),Kl=h(hd),La=s(hd,"SPAN",{});var Yu=a(La);Xl=d(Yu,"LED specific outputs"),Yu.forEach(t),hd.forEach(t),$r=h(o),_t=s(o,"DIV",{class:!0});var pd=a(_t);k(sn.$$.fragment,pd),Jl=h(pd),$a=s(pd,"P",{});var em=a($a);Zl=d(em,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),em.forEach(t),pd.forEach(t),Dr=h(o),gt=s(o,"DIV",{class:!0});var ud=a(gt);k(an.$$.fragment,ud),Yl=h(ud),Da=s(ud,"P",{});var tm=a(Da);ec=d(tm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),tm.forEach(t),ud.forEach(t),Fr=h(o),bt=s(o,"DIV",{class:!0});var md=a(bt);k(rn.$$.fragment,md),tc=h(md),Fa=s(md,"P",{});var om=a(Fa);oc=d(om,"Base class for sequence-to-sequence language models outputs."),om.forEach(t),md.forEach(t),zr=h(o),vt=s(o,"DIV",{class:!0});var fd=a(vt);k(dn.$$.fragment,fd),nc=h(fd),za=s(fd,"P",{});var nm=a(za);sc=d(nm,"Base class for outputs of sequence-to-sequence sentence classification models."),nm.forEach(t),fd.forEach(t),xr=h(o),Tt=s(o,"DIV",{class:!0});var _d=a(Tt);k(ln.$$.fragment,_d),ac=h(_d),xa=s(_d,"P",{});var sm=a(xa);rc=d(sm,"Base class for outputs of sequence-to-sequence question answering models."),sm.forEach(t),_d.forEach(t),Sr=h(o),kt=s(o,"DIV",{class:!0});var gd=a(kt);k(cn.$$.fragment,gd),dc=h(gd),Sa=s(gd,"P",{});var am=a(Sa);ic=d(am,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),am.forEach(t),gd.forEach(t),Mr=h(o),wt=s(o,"DIV",{class:!0});var bd=a(wt);k(hn.$$.fragment,bd),lc=h(bd),Ma=s(bd,"P",{});var rm=a(Ma);cc=d(rm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),rm.forEach(t),bd.forEach(t),Cr=h(o),yt=s(o,"DIV",{class:!0});var vd=a(yt);k(pn.$$.fragment,vd),hc=h(vd),Ca=s(vd,"P",{});var dm=a(Ca);pc=d(dm,"Base class for sequence-to-sequence language models outputs."),dm.forEach(t),vd.forEach(t),Or=h(o),Et=s(o,"H2",{class:!0});var Td=a(Et);Yt=s(Td,"A",{id:!0,class:!0,href:!0});var im=a(Yt);Oa=s(im,"SPAN",{});var lm=a(Oa);k(un.$$.fragment,lm),lm.forEach(t),im.forEach(t),uc=h(Td),Aa=s(Td,"SPAN",{});var cm=a(Aa);mc=d(cm,"LEDModel"),cm.forEach(t),Td.forEach(t),Ar=h(o),Le=s(o,"DIV",{class:!0});var Lo=a(Le);k(mn.$$.fragment,Lo),fc=h(Lo),fn=s(Lo,"P",{});var kd=a(fn);_c=d(kd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=s(kd,"A",{href:!0});var hm=a(ps);gc=d(hm,"PreTrainedModel"),hm.forEach(t),bc=d(kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kd.forEach(t),vc=h(Lo),_n=s(Lo,"P",{});var wd=a(_n);Tc=d(wd,"This model is also a PyTorch "),gn=s(wd,"A",{href:!0,rel:!0});var pm=a(gn);kc=d(pm,"torch.nn.Module"),pm.forEach(t),wc=d(wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wd.forEach(t),yc=h(Lo),Me=s(Lo,"DIV",{class:!0});var $o=a(Me);k(bn.$$.fragment,$o),Ec=h($o),qt=s($o,"P",{});var Fs=a(qt);qc=d(Fs,"The "),us=s(Fs,"A",{href:!0});var um=a(us);Lc=d(um,"LEDModel"),um.forEach(t),$c=d(Fs," forward method, overrides the "),Pa=s(Fs,"CODE",{});var mm=a(Pa);Dc=d(mm,"__call__"),mm.forEach(t),Fc=d(Fs," special method."),Fs.forEach(t),zc=h($o),k(eo.$$.fragment,$o),xc=h($o),k(to.$$.fragment,$o),$o.forEach(t),Lo.forEach(t),Pr=h(o),Lt=s(o,"H2",{class:!0});var yd=a(Lt);oo=s(yd,"A",{id:!0,class:!0,href:!0});var fm=a(oo);Na=s(fm,"SPAN",{});var _m=a(Na);k(vn.$$.fragment,_m),_m.forEach(t),fm.forEach(t),Sc=h(yd),ja=s(yd,"SPAN",{});var gm=a(ja);Mc=d(gm,"LEDForConditionalGeneration"),gm.forEach(t),yd.forEach(t),Nr=h(o),$e=s(o,"DIV",{class:!0});var Do=a($e);k(Tn.$$.fragment,Do),Cc=h(Do),kn=s(Do,"P",{});var Ed=a(kn);Oc=d(Ed,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ms=s(Ed,"A",{href:!0});var bm=a(ms);Ac=d(bm,"PreTrainedModel"),bm.forEach(t),Pc=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Nc=h(Do),wn=s(Do,"P",{});var qd=a(wn);jc=d(qd,"This model is also a PyTorch "),yn=s(qd,"A",{href:!0,rel:!0});var vm=a(yn);Ic=d(vm,"torch.nn.Module"),vm.forEach(t),Gc=d(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Bc=h(Do),be=s(Do,"DIV",{class:!0});var Je=a(be);k(En.$$.fragment,Je),Qc=h(Je),$t=s(Je,"P",{});var zs=a($t);Hc=d(zs,"The "),fs=s(zs,"A",{href:!0});var Tm=a(fs);Wc=d(Tm,"LEDForConditionalGeneration"),Tm.forEach(t),Uc=d(zs," forward method, overrides the "),Ia=s(zs,"CODE",{});var km=a(Ia);Vc=d(km,"__call__"),km.forEach(t),Rc=d(zs," special method."),zs.forEach(t),Kc=h(Je),k(no.$$.fragment,Je),Xc=h(Je),k(so.$$.fragment,Je),Jc=h(Je),k(ao.$$.fragment,Je),Je.forEach(t),Do.forEach(t),jr=h(o),Dt=s(o,"H2",{class:!0});var Ld=a(Dt);ro=s(Ld,"A",{id:!0,class:!0,href:!0});var wm=a(ro);Ga=s(wm,"SPAN",{});var ym=a(Ga);k(qn.$$.fragment,ym),ym.forEach(t),wm.forEach(t),Zc=h(Ld),Ba=s(Ld,"SPAN",{});var Em=a(Ba);Yc=d(Em,"LEDForSequenceClassification"),Em.forEach(t),Ld.forEach(t),Ir=h(o),ce=s(o,"DIV",{class:!0});var Ze=a(ce);k(Ln.$$.fragment,Ze),eh=h(Ze),Qa=s(Ze,"P",{});var qm=a(Qa);th=d(qm,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),qm.forEach(t),oh=h(Ze),$n=s(Ze,"P",{});var $d=a($n);nh=d($d,"This model inherits from "),_s=s($d,"A",{href:!0});var Lm=a(_s);sh=d(Lm,"PreTrainedModel"),Lm.forEach(t),ah=d($d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$d.forEach(t),rh=h(Ze),Dn=s(Ze,"P",{});var Dd=a(Dn);dh=d(Dd,"This model is also a PyTorch "),Fn=s(Dd,"A",{href:!0,rel:!0});var $m=a(Fn);ih=d($m,"torch.nn.Module"),$m.forEach(t),lh=d(Dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd.forEach(t),ch=h(Ze),Q=s(Ze,"DIV",{class:!0});var ke=a(Q);k(zn.$$.fragment,ke),hh=h(ke),Ft=s(ke,"P",{});var xs=a(Ft);ph=d(xs,"The "),gs=s(xs,"A",{href:!0});var Dm=a(gs);uh=d(Dm,"LEDForSequenceClassification"),Dm.forEach(t),mh=d(xs," forward method, overrides the "),Ha=s(xs,"CODE",{});var Fm=a(Ha);fh=d(Fm,"__call__"),Fm.forEach(t),_h=d(xs," special method."),xs.forEach(t),gh=h(ke),k(io.$$.fragment,ke),bh=h(ke),k(lo.$$.fragment,ke),vh=h(ke),k(co.$$.fragment,ke),Th=h(ke),k(ho.$$.fragment,ke),kh=h(ke),k(po.$$.fragment,ke),ke.forEach(t),Ze.forEach(t),Gr=h(o),zt=s(o,"H2",{class:!0});var Fd=a(zt);uo=s(Fd,"A",{id:!0,class:!0,href:!0});var zm=a(uo);Wa=s(zm,"SPAN",{});var xm=a(Wa);k(xn.$$.fragment,xm),xm.forEach(t),zm.forEach(t),wh=h(Fd),Ua=s(Fd,"SPAN",{});var Sm=a(Ua);yh=d(Sm,"LEDForQuestionAnswering"),Sm.forEach(t),Fd.forEach(t),Br=h(o),he=s(o,"DIV",{class:!0});var Ye=a(he);k(Sn.$$.fragment,Ye),Eh=h(Ye),xt=s(Ye,"P",{});var Ss=a(xt);qh=d(Ss,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Va=s(Ss,"CODE",{});var Mm=a(Va);Lh=d(Mm,"span start logits"),Mm.forEach(t),$h=d(Ss," and "),Ra=s(Ss,"CODE",{});var Cm=a(Ra);Dh=d(Cm,"span end logits"),Cm.forEach(t),Fh=d(Ss,")."),Ss.forEach(t),zh=h(Ye),Mn=s(Ye,"P",{});var zd=a(Mn);xh=d(zd,"This model inherits from "),bs=s(zd,"A",{href:!0});var Om=a(bs);Sh=d(Om,"PreTrainedModel"),Om.forEach(t),Mh=d(zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd.forEach(t),Ch=h(Ye),Cn=s(Ye,"P",{});var xd=a(Cn);Oh=d(xd,"This model is also a PyTorch "),On=s(xd,"A",{href:!0,rel:!0});var Am=a(On);Ah=d(Am,"torch.nn.Module"),Am.forEach(t),Ph=d(xd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd.forEach(t),Nh=h(Ye),ve=s(Ye,"DIV",{class:!0});var et=a(ve);k(An.$$.fragment,et),jh=h(et),St=s(et,"P",{});var Ms=a(St);Ih=d(Ms,"The "),vs=s(Ms,"A",{href:!0});var Pm=a(vs);Gh=d(Pm,"LEDForQuestionAnswering"),Pm.forEach(t),Bh=d(Ms," forward method, overrides the "),Ka=s(Ms,"CODE",{});var Nm=a(Ka);Qh=d(Nm,"__call__"),Nm.forEach(t),Hh=d(Ms," special method."),Ms.forEach(t),Wh=h(et),k(mo.$$.fragment,et),Uh=h(et),k(fo.$$.fragment,et),Vh=h(et),k(_o.$$.fragment,et),et.forEach(t),Ye.forEach(t),Qr=h(o),Mt=s(o,"H2",{class:!0});var Sd=a(Mt);go=s(Sd,"A",{id:!0,class:!0,href:!0});var jm=a(go);Xa=s(jm,"SPAN",{});var Im=a(Xa);k(Pn.$$.fragment,Im),Im.forEach(t),jm.forEach(t),Rh=h(Sd),Ja=s(Sd,"SPAN",{});var Gm=a(Ja);Kh=d(Gm,"TFLEDModel"),Gm.forEach(t),Sd.forEach(t),Hr=h(o),pe=s(o,"DIV",{class:!0});var tt=a(pe);k(Nn.$$.fragment,tt),Xh=h(tt),jn=s(tt,"P",{});var Md=a(jn);Jh=d(Md,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ts=s(Md,"A",{href:!0});var Bm=a(Ts);Zh=d(Bm,"TFPreTrainedModel"),Bm.forEach(t),Yh=d(Md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md.forEach(t),ep=h(tt),In=s(tt,"P",{});var Cd=a(In);tp=d(Cd,"This model is also a "),Gn=s(Cd,"A",{href:!0,rel:!0});var Qm=a(Gn);op=d(Qm,"tf.keras.Model"),Qm.forEach(t),np=d(Cd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cd.forEach(t),sp=h(tt),k(bo.$$.fragment,tt),ap=h(tt),Ce=s(tt,"DIV",{class:!0});var Fo=a(Ce);k(Bn.$$.fragment,Fo),rp=h(Fo),Ct=s(Fo,"P",{});var Cs=a(Ct);dp=d(Cs,"The "),ks=s(Cs,"A",{href:!0});var Hm=a(ks);ip=d(Hm,"TFLEDModel"),Hm.forEach(t),lp=d(Cs," forward method, overrides the "),Za=s(Cs,"CODE",{});var Wm=a(Za);cp=d(Wm,"__call__"),Wm.forEach(t),hp=d(Cs," special method."),Cs.forEach(t),pp=h(Fo),k(vo.$$.fragment,Fo),up=h(Fo),k(To.$$.fragment,Fo),Fo.forEach(t),tt.forEach(t),Wr=h(o),Ot=s(o,"H2",{class:!0});var Od=a(Ot);ko=s(Od,"A",{id:!0,class:!0,href:!0});var Um=a(ko);Ya=s(Um,"SPAN",{});var Vm=a(Ya);k(Qn.$$.fragment,Vm),Vm.forEach(t),Um.forEach(t),mp=h(Od),er=s(Od,"SPAN",{});var Rm=a(er);fp=d(Rm,"TFLEDForConditionalGeneration"),Rm.forEach(t),Od.forEach(t),Ur=h(o),ue=s(o,"DIV",{class:!0});var ot=a(ue);k(Hn.$$.fragment,ot),_p=h(ot),Wn=s(ot,"P",{});var Ad=a(Wn);gp=d(Ad,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ws=s(Ad,"A",{href:!0});var Km=a(ws);bp=d(Km,"TFPreTrainedModel"),Km.forEach(t),vp=d(Ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ad.forEach(t),Tp=h(ot),Un=s(ot,"P",{});var Pd=a(Un);kp=d(Pd,"This model is also a "),Vn=s(Pd,"A",{href:!0,rel:!0});var Xm=a(Vn);wp=d(Xm,"tf.keras.Model"),Xm.forEach(t),yp=d(Pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pd.forEach(t),Ep=h(ot),k(wo.$$.fragment,ot),qp=h(ot),Oe=s(ot,"DIV",{class:!0});var zo=a(Oe);k(Rn.$$.fragment,zo),Lp=h(zo),At=s(zo,"P",{});var Os=a(At);$p=d(Os,"The "),ys=s(Os,"A",{href:!0});var Jm=a(ys);Dp=d(Jm,"TFLEDForConditionalGeneration"),Jm.forEach(t),Fp=d(Os," forward method, overrides the "),tr=s(Os,"CODE",{});var Zm=a(tr);zp=d(Zm,"__call__"),Zm.forEach(t),xp=d(Os," special method."),Os.forEach(t),Sp=h(zo),k(yo.$$.fragment,zo),Mp=h(zo),k(Eo.$$.fragment,zo),zo.forEach(t),ot.forEach(t),this.h()},h(){p(l,"name","hf:doc:metadata"),p(l,"content",JSON.stringify(Lf)),p(m,"id","led"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#led"),p(u,"class","relative group"),p(Z,"id","overview"),p(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Z,"href","#overview"),p(F,"class","relative group"),p(ne,"href","https://arxiv.org/abs/2004.05150"),p(ne,"rel","nofollow"),p(B,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),p(j,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(xe,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),p(Se,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),p(Zn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),p(Yn,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),p(Mo,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),p(Mo,"rel","nofollow"),p(Oo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),p(Oo,"rel","nofollow"),p(Ao,"href","https://huggingface.co/patrickvonplaten"),p(Ao,"rel","nofollow"),p(Nt,"id","transformers.LEDConfig"),p(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Nt,"href","#transformers.LEDConfig"),p(ct,"class","relative group"),p(es,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),p(jo,"href","https://huggingface.co/allenai/led-base-16384"),p(jo,"rel","nofollow"),p(ts,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(os,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(Gt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),p(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Gt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),p(It,"class","relative group"),p(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),p(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),p(Bt,"class","relative group"),p(Wt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),p(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Wt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),p(Ht,"class","relative group"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ut,"id","transformers.LEDTokenizer"),p(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ut,"href","#transformers.LEDTokenizer"),p(ut,"class","relative group"),p(ns,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),p(ss,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),p(as,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),p(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(is,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Xt,"id","transformers.LEDTokenizerFast"),p(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Xt,"href","#transformers.LEDTokenizerFast"),p(mt,"class","relative group"),p(ls,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizerFast"),p(cs,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),p(hs,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),p(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),p(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),p(ft,"class","relative group"),p(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Yt,"id","transformers.LEDModel"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.LEDModel"),p(Et,"class","relative group"),p(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(gn,"rel","nofollow"),p(us,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),p(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(oo,"id","transformers.LEDForConditionalGeneration"),p(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oo,"href","#transformers.LEDForConditionalGeneration"),p(Lt,"class","relative group"),p(ms,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(yn,"rel","nofollow"),p(fs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),p(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ro,"id","transformers.LEDForSequenceClassification"),p(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ro,"href","#transformers.LEDForSequenceClassification"),p(Dt,"class","relative group"),p(_s,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Fn,"rel","nofollow"),p(gs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(uo,"id","transformers.LEDForQuestionAnswering"),p(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(uo,"href","#transformers.LEDForQuestionAnswering"),p(zt,"class","relative group"),p(bs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(On,"rel","nofollow"),p(vs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering"),p(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(go,"id","transformers.TFLEDModel"),p(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(go,"href","#transformers.TFLEDModel"),p(Mt,"class","relative group"),p(Ts,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),p(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Gn,"rel","nofollow"),p(ks,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel"),p(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ko,"id","transformers.TFLEDForConditionalGeneration"),p(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ko,"href","#transformers.TFLEDForConditionalGeneration"),p(Ot,"class","relative group"),p(ws,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),p(Vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Vn,"rel","nofollow"),p(ys,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),p(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),g(o,b,_),g(o,u,_),e(u,m),e(m,v),w(i,v,null),e(u,f),e(u,D),e(D,je),g(o,fe,_),g(o,F,_),e(F,Z),e(Z,W),w(oe,W,null),e(F,Ie),e(F,U),e(U,Ge),g(o,De,_),g(o,G,_),e(G,V),e(G,ne),e(ne,we),e(G,C),g(o,A,_),g(o,_e,_),e(_e,se),g(o,Fe,_),g(o,ge,_),e(ge,R),e(R,Be),g(o,ze,_),g(o,O,_),e(O,Qe),g(o,Y,_),g(o,S,_),e(S,M),e(M,B),e(B,He),e(M,We),e(M,j),e(j,Ue),e(M,ae),e(M,ye),e(ye,L),e(M,z),e(M,re),e(re,nt),e(M,st),e(M,I),e(I,at),e(M,rt),e(M,xe),e(xe,K),e(M,de),e(M,Se),e(Se,dt),e(M,ie),e(S,it),e(S,le),e(le,Ve),e(le,Re),e(Re,Nd),e(le,jd),e(le,As),e(As,Id),e(le,Gd),e(S,Bd),e(S,Ee),e(Ee,Qd),e(Ee,Ps),e(Ps,Hd),e(Ee,Wd),e(Ee,Ns),e(Ns,Ud),e(Ee,Vd),e(Ee,Zn),e(Zn,Rd),e(Ee,Kd),e(Ee,js),e(js,Xd),e(Ee,Jd),e(S,Zd),e(S,X),e(X,Yd),e(X,Is),e(Is,ei),e(X,ti),e(X,Gs),e(Gs,oi),e(X,ni),e(X,Yn),e(Yn,si),e(X,ai),e(X,Bs),e(Bs,ri),e(X,di),e(X,Qs),e(Qs,ii),e(X,li),e(X,Hs),e(Hs,ci),e(X,hi),e(S,pi),e(S,lt),e(lt,ui),e(lt,Ws),e(Ws,mi),e(lt,fi),e(lt,Us),e(Us,_i),e(lt,gi),e(S,bi),e(S,So),e(So,vi),e(So,Mo),e(Mo,Ti),e(So,ki),e(S,wi),e(S,Co),e(Co,yi),e(Co,Oo),e(Oo,Ei),e(Co,qi),g(o,vr,_),g(o,Pt,_),e(Pt,Li),e(Pt,Ao),e(Ao,$i),e(Pt,Di),g(o,Tr,_),g(o,ct,_),e(ct,Nt),e(Nt,Vs),w(Po,Vs,null),e(ct,Fi),e(ct,Rs),e(Rs,zi),g(o,kr,_),g(o,P,_),w(No,P,null),e(P,xi),e(P,ht),e(ht,Si),e(ht,es),e(es,Mi),e(ht,Ci),e(ht,jo),e(jo,Oi),e(ht,Ai),e(P,Pi),e(P,pt),e(pt,Ni),e(pt,ts),e(ts,ji),e(pt,Ii),e(pt,os),e(os,Gi),e(pt,Bi),e(P,Qi),w(jt,P,null),e(P,Hi),e(P,Ks),e(Ks,Xs),e(Xs,Js),e(Js,Zs),e(Zs,Wi),e(P,Ui),e(P,Ys),e(Ys,ea),e(ea,ta),e(ta,It),e(It,Gt),e(Gt,oa),w(Io,oa,null),e(It,Vi),e(It,na),e(na,Ri),e(P,Ki),e(P,sa),e(sa,aa),e(aa,Go),e(Go,Bt),e(Bt,Qt),e(Qt,ra),w(Bo,ra,null),e(Bt,Xi),e(Bt,da),e(da,Ji),e(Go,Zi),e(Go,ia),e(ia,Yi),e(P,el),e(P,la),e(la,ca),e(ca,ha),e(ha,Ht),e(Ht,Wt),e(Wt,pa),w(Qo,pa,null),e(Ht,tl),e(Ht,ua),e(ua,ol),g(o,wr,_),g(o,ut,_),e(ut,Ut),e(Ut,ma),w(Ho,ma,null),e(ut,nl),e(ut,fa),e(fa,sl),g(o,yr,_),g(o,N,_),w(Wo,N,null),e(N,al),e(N,_a),e(_a,rl),e(N,dl),e(N,Vt),e(Vt,ns),e(ns,il),e(Vt,ll),e(Vt,ss),e(ss,cl),e(Vt,hl),e(N,pl),e(N,Uo),e(Uo,ul),e(Uo,as),e(as,ml),e(Uo,fl),e(N,_l),e(N,Ke),w(Vo,Ke,null),e(Ke,gl),e(Ke,ga),e(ga,bl),e(Ke,vl),e(Ke,Ro),e(Ro,rs),e(rs,Tl),e(rs,ba),e(ba,kl),e(Ro,wl),e(Ro,ds),e(ds,yl),e(ds,va),e(va,El),e(N,ql),e(N,Rt),w(Ko,Rt,null),e(Rt,Ll),e(Rt,Xo),e(Xo,$l),e(Xo,Ta),e(Ta,Dl),e(Xo,Fl),e(N,zl),e(N,Kt),w(Jo,Kt,null),e(Kt,xl),e(Kt,ka),e(ka,Sl),e(N,Ml),e(N,is),w(Zo,is,null),g(o,Er,_),g(o,mt,_),e(mt,Xt),e(Xt,wa),w(Yo,wa,null),e(mt,Cl),e(mt,ya),e(ya,Ol),g(o,qr,_),g(o,qe,_),w(en,qe,null),e(qe,Al),e(qe,tn),e(tn,Pl),e(tn,Ea),e(Ea,Nl),e(tn,jl),e(qe,Il),e(qe,Jt),e(Jt,ls),e(ls,Gl),e(Jt,Bl),e(Jt,cs),e(cs,Ql),e(Jt,Hl),e(qe,Wl),e(qe,on),e(on,Ul),e(on,hs),e(hs,Vl),e(on,Rl),g(o,Lr,_),g(o,ft,_),e(ft,Zt),e(Zt,qa),w(nn,qa,null),e(ft,Kl),e(ft,La),e(La,Xl),g(o,$r,_),g(o,_t,_),w(sn,_t,null),e(_t,Jl),e(_t,$a),e($a,Zl),g(o,Dr,_),g(o,gt,_),w(an,gt,null),e(gt,Yl),e(gt,Da),e(Da,ec),g(o,Fr,_),g(o,bt,_),w(rn,bt,null),e(bt,tc),e(bt,Fa),e(Fa,oc),g(o,zr,_),g(o,vt,_),w(dn,vt,null),e(vt,nc),e(vt,za),e(za,sc),g(o,xr,_),g(o,Tt,_),w(ln,Tt,null),e(Tt,ac),e(Tt,xa),e(xa,rc),g(o,Sr,_),g(o,kt,_),w(cn,kt,null),e(kt,dc),e(kt,Sa),e(Sa,ic),g(o,Mr,_),g(o,wt,_),w(hn,wt,null),e(wt,lc),e(wt,Ma),e(Ma,cc),g(o,Cr,_),g(o,yt,_),w(pn,yt,null),e(yt,hc),e(yt,Ca),e(Ca,pc),g(o,Or,_),g(o,Et,_),e(Et,Yt),e(Yt,Oa),w(un,Oa,null),e(Et,uc),e(Et,Aa),e(Aa,mc),g(o,Ar,_),g(o,Le,_),w(mn,Le,null),e(Le,fc),e(Le,fn),e(fn,_c),e(fn,ps),e(ps,gc),e(fn,bc),e(Le,vc),e(Le,_n),e(_n,Tc),e(_n,gn),e(gn,kc),e(_n,wc),e(Le,yc),e(Le,Me),w(bn,Me,null),e(Me,Ec),e(Me,qt),e(qt,qc),e(qt,us),e(us,Lc),e(qt,$c),e(qt,Pa),e(Pa,Dc),e(qt,Fc),e(Me,zc),w(eo,Me,null),e(Me,xc),w(to,Me,null),g(o,Pr,_),g(o,Lt,_),e(Lt,oo),e(oo,Na),w(vn,Na,null),e(Lt,Sc),e(Lt,ja),e(ja,Mc),g(o,Nr,_),g(o,$e,_),w(Tn,$e,null),e($e,Cc),e($e,kn),e(kn,Oc),e(kn,ms),e(ms,Ac),e(kn,Pc),e($e,Nc),e($e,wn),e(wn,jc),e(wn,yn),e(yn,Ic),e(wn,Gc),e($e,Bc),e($e,be),w(En,be,null),e(be,Qc),e(be,$t),e($t,Hc),e($t,fs),e(fs,Wc),e($t,Uc),e($t,Ia),e(Ia,Vc),e($t,Rc),e(be,Kc),w(no,be,null),e(be,Xc),w(so,be,null),e(be,Jc),w(ao,be,null),g(o,jr,_),g(o,Dt,_),e(Dt,ro),e(ro,Ga),w(qn,Ga,null),e(Dt,Zc),e(Dt,Ba),e(Ba,Yc),g(o,Ir,_),g(o,ce,_),w(Ln,ce,null),e(ce,eh),e(ce,Qa),e(Qa,th),e(ce,oh),e(ce,$n),e($n,nh),e($n,_s),e(_s,sh),e($n,ah),e(ce,rh),e(ce,Dn),e(Dn,dh),e(Dn,Fn),e(Fn,ih),e(Dn,lh),e(ce,ch),e(ce,Q),w(zn,Q,null),e(Q,hh),e(Q,Ft),e(Ft,ph),e(Ft,gs),e(gs,uh),e(Ft,mh),e(Ft,Ha),e(Ha,fh),e(Ft,_h),e(Q,gh),w(io,Q,null),e(Q,bh),w(lo,Q,null),e(Q,vh),w(co,Q,null),e(Q,Th),w(ho,Q,null),e(Q,kh),w(po,Q,null),g(o,Gr,_),g(o,zt,_),e(zt,uo),e(uo,Wa),w(xn,Wa,null),e(zt,wh),e(zt,Ua),e(Ua,yh),g(o,Br,_),g(o,he,_),w(Sn,he,null),e(he,Eh),e(he,xt),e(xt,qh),e(xt,Va),e(Va,Lh),e(xt,$h),e(xt,Ra),e(Ra,Dh),e(xt,Fh),e(he,zh),e(he,Mn),e(Mn,xh),e(Mn,bs),e(bs,Sh),e(Mn,Mh),e(he,Ch),e(he,Cn),e(Cn,Oh),e(Cn,On),e(On,Ah),e(Cn,Ph),e(he,Nh),e(he,ve),w(An,ve,null),e(ve,jh),e(ve,St),e(St,Ih),e(St,vs),e(vs,Gh),e(St,Bh),e(St,Ka),e(Ka,Qh),e(St,Hh),e(ve,Wh),w(mo,ve,null),e(ve,Uh),w(fo,ve,null),e(ve,Vh),w(_o,ve,null),g(o,Qr,_),g(o,Mt,_),e(Mt,go),e(go,Xa),w(Pn,Xa,null),e(Mt,Rh),e(Mt,Ja),e(Ja,Kh),g(o,Hr,_),g(o,pe,_),w(Nn,pe,null),e(pe,Xh),e(pe,jn),e(jn,Jh),e(jn,Ts),e(Ts,Zh),e(jn,Yh),e(pe,ep),e(pe,In),e(In,tp),e(In,Gn),e(Gn,op),e(In,np),e(pe,sp),w(bo,pe,null),e(pe,ap),e(pe,Ce),w(Bn,Ce,null),e(Ce,rp),e(Ce,Ct),e(Ct,dp),e(Ct,ks),e(ks,ip),e(Ct,lp),e(Ct,Za),e(Za,cp),e(Ct,hp),e(Ce,pp),w(vo,Ce,null),e(Ce,up),w(To,Ce,null),g(o,Wr,_),g(o,Ot,_),e(Ot,ko),e(ko,Ya),w(Qn,Ya,null),e(Ot,mp),e(Ot,er),e(er,fp),g(o,Ur,_),g(o,ue,_),w(Hn,ue,null),e(ue,_p),e(ue,Wn),e(Wn,gp),e(Wn,ws),e(ws,bp),e(Wn,vp),e(ue,Tp),e(ue,Un),e(Un,kp),e(Un,Vn),e(Vn,wp),e(Un,yp),e(ue,Ep),w(wo,ue,null),e(ue,qp),e(ue,Oe),w(Rn,Oe,null),e(Oe,Lp),e(Oe,At),e(At,$p),e(At,ys),e(ys,Dp),e(At,Fp),e(At,tr),e(tr,zp),e(At,xp),e(Oe,Sp),w(yo,Oe,null),e(Oe,Mp),w(Eo,Oe,null),Vr=!0},p(o,[_]){const Kn={};_&2&&(Kn.$$scope={dirty:_,ctx:o}),jt.$set(Kn);const or={};_&2&&(or.$$scope={dirty:_,ctx:o}),eo.$set(or);const nr={};_&2&&(nr.$$scope={dirty:_,ctx:o}),to.$set(nr);const sr={};_&2&&(sr.$$scope={dirty:_,ctx:o}),no.$set(sr);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:o}),so.$set(Xn);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:o}),ao.$set(ar);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:o}),io.$set(rr);const dr={};_&2&&(dr.$$scope={dirty:_,ctx:o}),lo.$set(dr);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),co.$set(Jn);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:o}),ho.$set(ir);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:o}),po.$set(lr);const cr={};_&2&&(cr.$$scope={dirty:_,ctx:o}),mo.$set(cr);const hr={};_&2&&(hr.$$scope={dirty:_,ctx:o}),fo.$set(hr);const pr={};_&2&&(pr.$$scope={dirty:_,ctx:o}),_o.$set(pr);const J={};_&2&&(J.$$scope={dirty:_,ctx:o}),bo.$set(J);const H={};_&2&&(H.$$scope={dirty:_,ctx:o}),vo.$set(H);const ur={};_&2&&(ur.$$scope={dirty:_,ctx:o}),To.$set(ur);const mr={};_&2&&(mr.$$scope={dirty:_,ctx:o}),wo.$set(mr);const fr={};_&2&&(fr.$$scope={dirty:_,ctx:o}),yo.$set(fr);const _r={};_&2&&(_r.$$scope={dirty:_,ctx:o}),Eo.$set(_r)},i(o){Vr||(y(i.$$.fragment,o),y(oe.$$.fragment,o),y(Po.$$.fragment,o),y(No.$$.fragment,o),y(jt.$$.fragment,o),y(Io.$$.fragment,o),y(Bo.$$.fragment,o),y(Qo.$$.fragment,o),y(Ho.$$.fragment,o),y(Wo.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Jo.$$.fragment,o),y(Zo.$$.fragment,o),y(Yo.$$.fragment,o),y(en.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(dn.$$.fragment,o),y(ln.$$.fragment,o),y(cn.$$.fragment,o),y(hn.$$.fragment,o),y(pn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(bn.$$.fragment,o),y(eo.$$.fragment,o),y(to.$$.fragment,o),y(vn.$$.fragment,o),y(Tn.$$.fragment,o),y(En.$$.fragment,o),y(no.$$.fragment,o),y(so.$$.fragment,o),y(ao.$$.fragment,o),y(qn.$$.fragment,o),y(Ln.$$.fragment,o),y(zn.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(ho.$$.fragment,o),y(po.$$.fragment,o),y(xn.$$.fragment,o),y(Sn.$$.fragment,o),y(An.$$.fragment,o),y(mo.$$.fragment,o),y(fo.$$.fragment,o),y(_o.$$.fragment,o),y(Pn.$$.fragment,o),y(Nn.$$.fragment,o),y(bo.$$.fragment,o),y(Bn.$$.fragment,o),y(vo.$$.fragment,o),y(To.$$.fragment,o),y(Qn.$$.fragment,o),y(Hn.$$.fragment,o),y(wo.$$.fragment,o),y(Rn.$$.fragment,o),y(yo.$$.fragment,o),y(Eo.$$.fragment,o),Vr=!0)},o(o){E(i.$$.fragment,o),E(oe.$$.fragment,o),E(Po.$$.fragment,o),E(No.$$.fragment,o),E(jt.$$.fragment,o),E(Io.$$.fragment,o),E(Bo.$$.fragment,o),E(Qo.$$.fragment,o),E(Ho.$$.fragment,o),E(Wo.$$.fragment,o),E(Vo.$$.fragment,o),E(Ko.$$.fragment,o),E(Jo.$$.fragment,o),E(Zo.$$.fragment,o),E(Yo.$$.fragment,o),E(en.$$.fragment,o),E(nn.$$.fragment,o),E(sn.$$.fragment,o),E(an.$$.fragment,o),E(rn.$$.fragment,o),E(dn.$$.fragment,o),E(ln.$$.fragment,o),E(cn.$$.fragment,o),E(hn.$$.fragment,o),E(pn.$$.fragment,o),E(un.$$.fragment,o),E(mn.$$.fragment,o),E(bn.$$.fragment,o),E(eo.$$.fragment,o),E(to.$$.fragment,o),E(vn.$$.fragment,o),E(Tn.$$.fragment,o),E(En.$$.fragment,o),E(no.$$.fragment,o),E(so.$$.fragment,o),E(ao.$$.fragment,o),E(qn.$$.fragment,o),E(Ln.$$.fragment,o),E(zn.$$.fragment,o),E(io.$$.fragment,o),E(lo.$$.fragment,o),E(co.$$.fragment,o),E(ho.$$.fragment,o),E(po.$$.fragment,o),E(xn.$$.fragment,o),E(Sn.$$.fragment,o),E(An.$$.fragment,o),E(mo.$$.fragment,o),E(fo.$$.fragment,o),E(_o.$$.fragment,o),E(Pn.$$.fragment,o),E(Nn.$$.fragment,o),E(bo.$$.fragment,o),E(Bn.$$.fragment,o),E(vo.$$.fragment,o),E(To.$$.fragment,o),E(Qn.$$.fragment,o),E(Hn.$$.fragment,o),E(wo.$$.fragment,o),E(Rn.$$.fragment,o),E(yo.$$.fragment,o),E(Eo.$$.fragment,o),Vr=!1},d(o){t(l),o&&t(b),o&&t(u),q(i),o&&t(fe),o&&t(F),q(oe),o&&t(De),o&&t(G),o&&t(A),o&&t(_e),o&&t(Fe),o&&t(ge),o&&t(ze),o&&t(O),o&&t(Y),o&&t(S),o&&t(vr),o&&t(Pt),o&&t(Tr),o&&t(ct),q(Po),o&&t(kr),o&&t(P),q(No),q(jt),q(Io),q(Bo),q(Qo),o&&t(wr),o&&t(ut),q(Ho),o&&t(yr),o&&t(N),q(Wo),q(Vo),q(Ko),q(Jo),q(Zo),o&&t(Er),o&&t(mt),q(Yo),o&&t(qr),o&&t(qe),q(en),o&&t(Lr),o&&t(ft),q(nn),o&&t($r),o&&t(_t),q(sn),o&&t(Dr),o&&t(gt),q(an),o&&t(Fr),o&&t(bt),q(rn),o&&t(zr),o&&t(vt),q(dn),o&&t(xr),o&&t(Tt),q(ln),o&&t(Sr),o&&t(kt),q(cn),o&&t(Mr),o&&t(wt),q(hn),o&&t(Cr),o&&t(yt),q(pn),o&&t(Or),o&&t(Et),q(un),o&&t(Ar),o&&t(Le),q(mn),q(bn),q(eo),q(to),o&&t(Pr),o&&t(Lt),q(vn),o&&t(Nr),o&&t($e),q(Tn),q(En),q(no),q(so),q(ao),o&&t(jr),o&&t(Dt),q(qn),o&&t(Ir),o&&t(ce),q(Ln),q(zn),q(io),q(lo),q(co),q(ho),q(po),o&&t(Gr),o&&t(zt),q(xn),o&&t(Br),o&&t(he),q(Sn),q(An),q(mo),q(fo),q(_o),o&&t(Qr),o&&t(Mt),q(Pn),o&&t(Hr),o&&t(pe),q(Nn),q(bo),q(Bn),q(vo),q(To),o&&t(Wr),o&&t(Ot),q(Qn),o&&t(Ur),o&&t(ue),q(Hn),q(wo),q(Rn),q(yo),q(Eo)}}}const Lf={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function $f($){return nf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Cf extends Ym{constructor(l){super();ef(this,l,$f,qf,tf,{})}}export{Cf as default,Lf as metadata};
