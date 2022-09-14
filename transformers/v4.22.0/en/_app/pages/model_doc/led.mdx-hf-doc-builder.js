import{S as Qu,i as Wu,s as Hu,e as a,k as c,w as T,t as n,M as Vu,c as r,d as t,m as h,a as d,x as k,h as s,b as u,G as e,g,y as w,q as y,o as E,B as L,v as Ru,L as Be}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ho}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Qe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Uu($){let l,v,p,f,b;return f=new Qe({props:{code:`from transformers import LEDModel, LEDConfig

# Initializing a LED allenai/led-base-16384 style configuration
configuration = LEDConfig()

# Initializing a model from the allenai/led-base-16384 style configuration
model = LEDModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDModel, LEDConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LED allenai/led-base-16384 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LEDConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the allenai/led-base-16384 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Example:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function Ku($){let l,v,p,f,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(m,"CODE",{});var F=d(p);f=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){g(i,l,m),e(l,v),e(l,p),e(p,f),e(l,b)},d(i){i&&t(l)}}}function Xu($){let l,v,p,f,b;return f=new Qe({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Example:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function Ju($){let l,v,p,f,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(m,"CODE",{});var F=d(p);f=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){g(i,l,m),e(l,v),e(l,p),e(p,f),e(l,b)},d(i){i&&t(l)}}}function Zu($){let l,v,p,f,b;return f=new Qe({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),v=n("Conditional generation example:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Conditional generation example:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function Yu($){let l,v,p,f,b;return f=new Qe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),v=n("Summarization example:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Summarization example:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function em($){let l,v,p,f,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(m,"CODE",{});var F=d(p);f=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){g(i,l,m),e(l,v),e(l,p),e(p,f),e(l,b)},d(i){i&&t(l)}}}function tm($){let l,v,p,f,b;return f=new Qe({props:{code:`import torch
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
`}}),{c(){l=a("p"),v=n("Example of single-label classification:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Example of single-label classification:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function om($){let l,v;return l=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,f){w(l,p,f),v=!0},p:Be,i(p){v||(y(l.$$.fragment,p),v=!0)},o(p){E(l.$$.fragment,p),v=!1},d(p){L(l,p)}}}function nm($){let l,v,p,f,b;return f=new Qe({props:{code:`import torch
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
`}}),{c(){l=a("p"),v=n("Example of multi-label classification:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Example of multi-label classification:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function sm($){let l,v;return l=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,f){w(l,p,f),v=!0},p:Be,i(p){v||(y(l.$$.fragment,p),v=!0)},o(p){E(l.$$.fragment,p),v=!1},d(p){L(l,p)}}}function am($){let l,v,p,f,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(m,"CODE",{});var F=d(p);f=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){g(i,l,m),e(l,v),e(l,p),e(p,f),e(l,b)},d(i){i&&t(l)}}}function rm($){let l,v,p,f,b;return f=new Qe({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Example:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function dm($){let l,v;return l=new Qe({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,f){w(l,p,f),v=!0},p:Be,i(p){v||(y(l.$$.fragment,p),v=!0)},o(p){E(l.$$.fragment,p),v=!1},d(p){L(l,p)}}}function im($){let l,v,p,f,b,i,m,F,We,xe,j,te,ne,D,He,K,Ve,Se,G,Re,se,ae,Ue,Me,H,Ke,Ce,V,ye,Xe,me,M,P,Oe,x,O,fe,re,Je,_e,A,Ze,X,Ye,et,J,tt,ot,B,nt,de,ge,Ee,N,ve,Q,st,at;return{c(){l=a("p"),v=n("TensorFlow models and layers in "),p=a("code"),f=n("transformers"),b=n(" accept two formats as input:"),i=c(),m=a("ul"),F=a("li"),We=n("having all inputs as keyword arguments (like PyTorch models), or"),xe=c(),j=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),ne=c(),D=a("p"),He=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Ve=n("model.fit()"),Se=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Re=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=a("code"),Ue=n("fit()"),Me=n(" and "),H=a("code"),Ke=n("predict()"),Ce=n(`, such as when creating your own layers or models with
the Keras `),V=a("code"),ye=n("Functional"),Xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),me=c(),M=a("ul"),P=a("li"),Oe=n("a single Tensor with "),x=a("code"),O=n("input_ids"),fe=n(" only and nothing else: "),re=a("code"),Je=n("model(input_ids)"),_e=c(),A=a("li"),Ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=a("code"),Ye=n("model([input_ids, attention_mask])"),et=n(" or "),J=a("code"),tt=n("model([input_ids, attention_mask, token_type_ids])"),ot=c(),B=a("li"),nt=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),de=a("code"),ge=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee=c(),N=a("p"),ve=n(`Note that when creating models and layers with
`),Q=a("a"),st=n("subclassing"),at=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(q){l=r(q,"P",{});var z=d(l);v=s(z,"TensorFlow models and layers in "),p=r(z,"CODE",{});var rt=d(p);f=s(rt,"transformers"),rt.forEach(t),b=s(z," accept two formats as input:"),z.forEach(t),i=h(q),m=r(q,"UL",{});var Le=d(m);F=r(Le,"LI",{});var kt=d(F);We=s(kt,"having all inputs as keyword arguments (like PyTorch models), or"),kt.forEach(t),xe=h(Le),j=r(Le,"LI",{});var dt=d(j);te=s(dt,"having all inputs as a list, tuple or dict in the first positional argument."),dt.forEach(t),Le.forEach(t),ne=h(q),D=r(q,"P",{});var S=d(D);He=s(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(S,"CODE",{});var wt=d(K);Ve=s(wt,"model.fit()"),wt.forEach(t),Se=s(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(S,"CODE",{});var yt=d(G);Re=s(yt,"model.fit()"),yt.forEach(t),se=s(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=r(S,"CODE",{});var W=d(ae);Ue=s(W,"fit()"),W.forEach(t),Me=s(S," and "),H=r(S,"CODE",{});var Et=d(H);Ke=s(Et,"predict()"),Et.forEach(t),Ce=s(S,`, such as when creating your own layers or models with
the Keras `),V=r(S,"CODE",{});var it=d(V);ye=s(it,"Functional"),it.forEach(t),Xe=s(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),me=h(q),M=r(q,"UL",{});var Z=d(M);P=r(Z,"LI",{});var ie=d(P);Oe=s(ie,"a single Tensor with "),x=r(ie,"CODE",{});var lt=d(x);O=s(lt,"input_ids"),lt.forEach(t),fe=s(ie," only and nothing else: "),re=r(ie,"CODE",{});var Lt=d(re);Je=s(Lt,"model(input_ids)"),Lt.forEach(t),ie.forEach(t),_e=h(Z),A=r(Z,"LI",{});var le=d(A);Ze=s(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=r(le,"CODE",{});var je=d(X);Ye=s(je,"model([input_ids, attention_mask])"),je.forEach(t),et=s(le," or "),J=r(le,"CODE",{});var qt=d(J);tt=s(qt,"model([input_ids, attention_mask, token_type_ids])"),qt.forEach(t),le.forEach(t),ot=h(Z),B=r(Z,"LI",{});var ct=d(B);nt=s(ct,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),de=r(ct,"CODE",{});var ht=d(de);ge=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),ct.forEach(t),Z.forEach(t),Ee=h(q),N=r(q,"P",{});var qe=d(N);ve=s(qe,`Note that when creating models and layers with
`),Q=r(qe,"A",{href:!0,rel:!0});var $t=d(Q);st=s($t,"subclassing"),$t.forEach(t),at=s(qe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),qe.forEach(t),this.h()},h(){u(Q,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(Q,"rel","nofollow")},m(q,z){g(q,l,z),e(l,v),e(l,p),e(p,f),e(l,b),g(q,i,z),g(q,m,z),e(m,F),e(F,We),e(m,xe),e(m,j),e(j,te),g(q,ne,z),g(q,D,z),e(D,He),e(D,K),e(K,Ve),e(D,Se),e(D,G),e(G,Re),e(D,se),e(D,ae),e(ae,Ue),e(D,Me),e(D,H),e(H,Ke),e(D,Ce),e(D,V),e(V,ye),e(D,Xe),g(q,me,z),g(q,M,z),e(M,P),e(P,Oe),e(P,x),e(x,O),e(P,fe),e(P,re),e(re,Je),e(M,_e),e(M,A),e(A,Ze),e(A,X),e(X,Ye),e(A,et),e(A,J),e(J,tt),e(M,ot),e(M,B),e(B,nt),e(B,de),e(de,ge),g(q,Ee,z),g(q,N,z),e(N,ve),e(N,Q),e(Q,st),e(N,at)},d(q){q&&t(l),q&&t(i),q&&t(m),q&&t(ne),q&&t(D),q&&t(me),q&&t(M),q&&t(Ee),q&&t(N)}}}function lm($){let l,v,p,f,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(m,"CODE",{});var F=d(p);f=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){g(i,l,m),e(l,v),e(l,p),e(p,f),e(l,b)},d(i){i&&t(l)}}}function cm($){let l,v,p,f,b;return f=new Qe({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Example:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function hm($){let l,v,p,f,b,i,m,F,We,xe,j,te,ne,D,He,K,Ve,Se,G,Re,se,ae,Ue,Me,H,Ke,Ce,V,ye,Xe,me,M,P,Oe,x,O,fe,re,Je,_e,A,Ze,X,Ye,et,J,tt,ot,B,nt,de,ge,Ee,N,ve,Q,st,at;return{c(){l=a("p"),v=n("TensorFlow models and layers in "),p=a("code"),f=n("transformers"),b=n(" accept two formats as input:"),i=c(),m=a("ul"),F=a("li"),We=n("having all inputs as keyword arguments (like PyTorch models), or"),xe=c(),j=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),ne=c(),D=a("p"),He=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Ve=n("model.fit()"),Se=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Re=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=a("code"),Ue=n("fit()"),Me=n(" and "),H=a("code"),Ke=n("predict()"),Ce=n(`, such as when creating your own layers or models with
the Keras `),V=a("code"),ye=n("Functional"),Xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),me=c(),M=a("ul"),P=a("li"),Oe=n("a single Tensor with "),x=a("code"),O=n("input_ids"),fe=n(" only and nothing else: "),re=a("code"),Je=n("model(input_ids)"),_e=c(),A=a("li"),Ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=a("code"),Ye=n("model([input_ids, attention_mask])"),et=n(" or "),J=a("code"),tt=n("model([input_ids, attention_mask, token_type_ids])"),ot=c(),B=a("li"),nt=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),de=a("code"),ge=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee=c(),N=a("p"),ve=n(`Note that when creating models and layers with
`),Q=a("a"),st=n("subclassing"),at=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(q){l=r(q,"P",{});var z=d(l);v=s(z,"TensorFlow models and layers in "),p=r(z,"CODE",{});var rt=d(p);f=s(rt,"transformers"),rt.forEach(t),b=s(z," accept two formats as input:"),z.forEach(t),i=h(q),m=r(q,"UL",{});var Le=d(m);F=r(Le,"LI",{});var kt=d(F);We=s(kt,"having all inputs as keyword arguments (like PyTorch models), or"),kt.forEach(t),xe=h(Le),j=r(Le,"LI",{});var dt=d(j);te=s(dt,"having all inputs as a list, tuple or dict in the first positional argument."),dt.forEach(t),Le.forEach(t),ne=h(q),D=r(q,"P",{});var S=d(D);He=s(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(S,"CODE",{});var wt=d(K);Ve=s(wt,"model.fit()"),wt.forEach(t),Se=s(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(S,"CODE",{});var yt=d(G);Re=s(yt,"model.fit()"),yt.forEach(t),se=s(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=r(S,"CODE",{});var W=d(ae);Ue=s(W,"fit()"),W.forEach(t),Me=s(S," and "),H=r(S,"CODE",{});var Et=d(H);Ke=s(Et,"predict()"),Et.forEach(t),Ce=s(S,`, such as when creating your own layers or models with
the Keras `),V=r(S,"CODE",{});var it=d(V);ye=s(it,"Functional"),it.forEach(t),Xe=s(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),me=h(q),M=r(q,"UL",{});var Z=d(M);P=r(Z,"LI",{});var ie=d(P);Oe=s(ie,"a single Tensor with "),x=r(ie,"CODE",{});var lt=d(x);O=s(lt,"input_ids"),lt.forEach(t),fe=s(ie," only and nothing else: "),re=r(ie,"CODE",{});var Lt=d(re);Je=s(Lt,"model(input_ids)"),Lt.forEach(t),ie.forEach(t),_e=h(Z),A=r(Z,"LI",{});var le=d(A);Ze=s(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=r(le,"CODE",{});var je=d(X);Ye=s(je,"model([input_ids, attention_mask])"),je.forEach(t),et=s(le," or "),J=r(le,"CODE",{});var qt=d(J);tt=s(qt,"model([input_ids, attention_mask, token_type_ids])"),qt.forEach(t),le.forEach(t),ot=h(Z),B=r(Z,"LI",{});var ct=d(B);nt=s(ct,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),de=r(ct,"CODE",{});var ht=d(de);ge=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(t),ct.forEach(t),Z.forEach(t),Ee=h(q),N=r(q,"P",{});var qe=d(N);ve=s(qe,`Note that when creating models and layers with
`),Q=r(qe,"A",{href:!0,rel:!0});var $t=d(Q);st=s($t,"subclassing"),$t.forEach(t),at=s(qe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),qe.forEach(t),this.h()},h(){u(Q,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(Q,"rel","nofollow")},m(q,z){g(q,l,z),e(l,v),e(l,p),e(p,f),e(l,b),g(q,i,z),g(q,m,z),e(m,F),e(F,We),e(m,xe),e(m,j),e(j,te),g(q,ne,z),g(q,D,z),e(D,He),e(D,K),e(K,Ve),e(D,Se),e(D,G),e(G,Re),e(D,se),e(D,ae),e(ae,Ue),e(D,Me),e(D,H),e(H,Ke),e(D,Ce),e(D,V),e(V,ye),e(D,Xe),g(q,me,z),g(q,M,z),e(M,P),e(P,Oe),e(P,x),e(x,O),e(P,fe),e(P,re),e(re,Je),e(M,_e),e(M,A),e(A,Ze),e(A,X),e(X,Ye),e(A,et),e(A,J),e(J,tt),e(M,ot),e(M,B),e(B,nt),e(B,de),e(de,ge),g(q,Ee,z),g(q,N,z),e(N,ve),e(N,Q),e(Q,st),e(N,at)},d(q){q&&t(l),q&&t(i),q&&t(m),q&&t(ne),q&&t(D),q&&t(me),q&&t(M),q&&t(Ee),q&&t(N)}}}function pm($){let l,v,p,f,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(m,"CODE",{});var F=d(p);f=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){g(i,l,m),e(l,v),e(l,p),e(p,f),e(l,b)},d(i){i&&t(l)}}}function um($){let l,v,p,f,b;return f=new Qe({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),v=n("Examples:"),p=c(),T(f.$$.fragment)},l(i){l=r(i,"P",{});var m=d(l);v=s(m,"Examples:"),m.forEach(t),p=h(i),k(f.$$.fragment,i)},m(i,m){g(i,l,m),e(l,v),g(i,p,m),w(f,i,m),b=!0},p:Be,i(i){b||(y(f.$$.fragment,i),b=!0)},o(i){E(f.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(f,i)}}}function mm($){let l,v,p,f,b,i,m,F,We,xe,j,te,ne,D,He,K,Ve,Se,G,Re,se,ae,Ue,Me,H,Ke,Ce,V,ye,Xe,me,M,P,Oe,x,O,fe,re,Je,_e,A,Ze,X,Ye,et,J,tt,ot,B,nt,de,ge,Ee,N,ve,Q,st,at,q,z,rt,Le,kt,dt,S,wt,yt,W,Et,it,Z,ie,lt,Lt,le,je,qt,ct,ht,qe,$t,Td,Y,kd,Ws,wd,yd,Hs,Ed,Ld,is,qd,$d,Vs,Dd,Fd,Rs,zd,xd,Us,Sd,Md,Cd,pt,Od,Ks,jd,Pd,Xs,Ad,Nd,Js,Id,Gd,Bd,Vo,Qd,Ro,Wd,Hd,Vd,Uo,Rd,Ko,Ud,Kd,ar,to,Xd,Xo,Jd,Zd,rr,Dt,oo,Zs,Jo,Yd,Ys,ei,dr,$e,Zo,ti,Ft,oi,ls,ni,si,Yo,ai,ri,di,zt,ii,cs,li,ci,hs,hi,pi,ui,no,ir,xt,so,ea,en,mi,ta,fi,lr,I,tn,_i,oa,gi,vi,ao,ps,bi,Ti,us,ki,wi,yi,on,Ei,ms,Li,qi,$i,ut,nn,Di,na,Fi,zi,sn,fs,xi,sa,Si,Mi,_s,Ci,aa,Oi,ji,ro,an,Pi,rn,Ai,ra,Ni,Ii,Gi,io,dn,Bi,da,Qi,Wi,gs,ln,cr,St,lo,ia,cn,Hi,la,Vi,hr,De,hn,Ri,pn,Ui,ca,Ki,Xi,Ji,co,vs,Zi,Yi,bs,el,tl,ol,un,nl,Ts,sl,al,pr,Mt,ho,ha,mn,rl,pa,dl,ur,Ct,fn,il,ua,ll,mr,Ot,_n,cl,ma,hl,fr,jt,gn,pl,fa,ul,_r,Pt,vn,ml,_a,fl,gr,At,bn,_l,ga,gl,vr,Nt,Tn,vl,va,bl,br,It,kn,Tl,ba,kl,Tr,Gt,wn,wl,Ta,yl,kr,Bt,po,ka,yn,El,wa,Ll,wr,Fe,En,ql,Ln,$l,ks,Dl,Fl,zl,qn,xl,$n,Sl,Ml,Cl,Pe,Dn,Ol,Qt,jl,ws,Pl,Al,ya,Nl,Il,Gl,uo,Bl,mo,yr,Wt,fo,Ea,Fn,Ql,La,Wl,Er,ze,zn,Hl,xn,Vl,ys,Rl,Ul,Kl,Sn,Xl,Mn,Jl,Zl,Yl,be,Cn,ec,Ht,tc,Es,oc,nc,qa,sc,ac,rc,_o,dc,go,ic,vo,Lr,Vt,bo,$a,On,lc,Da,cc,qr,ce,jn,hc,Fa,pc,uc,Pn,mc,Ls,fc,_c,gc,An,vc,Nn,bc,Tc,kc,R,In,wc,Rt,yc,qs,Ec,Lc,za,qc,$c,Dc,To,Fc,ko,zc,wo,xc,yo,Sc,Eo,$r,Ut,Lo,xa,Gn,Mc,Sa,Cc,Dr,he,Bn,Oc,Kt,jc,Ma,Pc,Ac,Ca,Nc,Ic,Gc,Qn,Bc,$s,Qc,Wc,Hc,Wn,Vc,Hn,Rc,Uc,Kc,Te,Vn,Xc,Xt,Jc,Ds,Zc,Yc,Oa,eh,th,oh,qo,nh,$o,sh,Do,Fr,Jt,Fo,ja,Rn,ah,Pa,rh,zr,pe,Un,dh,Kn,ih,Fs,lh,ch,hh,Xn,ph,Jn,uh,mh,fh,zo,_h,Ae,Zn,gh,Zt,vh,zs,bh,Th,Aa,kh,wh,yh,xo,Eh,So,xr,Yt,Mo,Na,Yn,Lh,Ia,qh,Sr,ue,es,$h,ts,Dh,xs,Fh,zh,xh,os,Sh,ns,Mh,Ch,Oh,Co,jh,Ne,ss,Ph,eo,Ah,Ss,Nh,Ih,Ga,Gh,Bh,Qh,Oo,Wh,jo,Mr;return i=new Ie({}),D=new Ie({}),Jo=new Ie({}),Zo=new C({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.LEDConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.LEDConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/configuration_led.py#L31"}}),no=new Ge({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[Uu]},$$scope:{ctx:$}}}),en=new Ie({}),tn=new C({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/tokenization_led.py#L43"}}),nn=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),dn=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ln=new C({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bart/tokenization_bart.py#L309"}}),cn=new Ie({}),hn=new C({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/tokenization_led_fast.py#L44"}}),mn=new Ie({}),fn=new C({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L1179"}}),_n=new C({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L1222"}}),gn=new C({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L1290"}}),vn=new C({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L1357"}}),bn=new C({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L1424"}}),Tn=new C({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_tf_led.py#L1368"}}),kn=new C({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_tf_led.py#L1411"}}),wn=new C({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_tf_led.py#L1479"}}),yn=new Ie({}),En=new C({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2213"}}),Dn=new C({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2240",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Ho({props:{$$slots:{default:[Ku]},$$scope:{ctx:$}}}),mo=new Ge({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[Xu]},$$scope:{ctx:$}}}),Fn=new Ie({}),zn=new C({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2336"}}),Cn=new C({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2380",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Ho({props:{$$slots:{default:[Ju]},$$scope:{ctx:$}}}),go=new Ge({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[Zu]},$$scope:{ctx:$}}}),vo=new Ge({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[Yu]},$$scope:{ctx:$}}}),On=new Ie({}),jn=new C({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2529"}}),In=new C({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2542",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new Ho({props:{$$slots:{default:[em]},$$scope:{ctx:$}}}),ko=new Ge({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[tm]},$$scope:{ctx:$}}}),wo=new Ge({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[om]},$$scope:{ctx:$}}}),yo=new Ge({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-3",$$slots:{default:[nm]},$$scope:{ctx:$}}}),Eo=new Ge({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-4",$$slots:{default:[sm]},$$scope:{ctx:$}}}),Gn=new Ie({}),Bn=new C({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2657"}}),Vn=new C({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_led.py#L2669",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new Ho({props:{$$slots:{default:[am]},$$scope:{ctx:$}}}),$o=new Ge({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[rm]},$$scope:{ctx:$}}}),Do=new Ge({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example-2",$$slots:{default:[dm]},$$scope:{ctx:$}}}),Rn=new Ie({}),Un=new C({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_tf_led.py#L2240"}}),zo=new Ho({props:{$$slots:{default:[im]},$$scope:{ctx:$}}}),Zn=new C({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_tf_led.py#L2252",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new Ho({props:{$$slots:{default:[lm]},$$scope:{ctx:$}}}),So=new Ge({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[cm]},$$scope:{ctx:$}}}),Yn=new Ie({}),es=new C({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_tf_led.py#L2346"}}),Co=new Ho({props:{$$slots:{default:[hm]},$$scope:{ctx:$}}}),ss=new C({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/led/modeling_tf_led.py#L2382",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Oo=new Ho({props:{$$slots:{default:[pm]},$$scope:{ctx:$}}}),jo=new Ge({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[um]},$$scope:{ctx:$}}}),{c(){l=a("meta"),v=c(),p=a("h1"),f=a("a"),b=a("span"),T(i.$$.fragment),m=c(),F=a("span"),We=n("LED"),xe=c(),j=a("h2"),te=a("a"),ne=a("span"),T(D.$$.fragment),He=c(),K=a("span"),Ve=n("Overview"),Se=c(),G=a("p"),Re=n("The LED model was proposed in "),se=a("a"),ae=n("Longformer: The Long-Document Transformer"),Ue=n(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Me=c(),H=a("p"),Ke=n("The abstract from the paper is the following:"),Ce=c(),V=a("p"),ye=a("em"),Xe=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),me=c(),M=a("p"),P=n("Tips:"),Oe=c(),x=a("ul"),O=a("li"),fe=a("a"),re=n("LEDForConditionalGeneration"),Je=n(` is an extension of
`),_e=a("a"),A=n("BartForConditionalGeneration"),Ze=n(" exchanging the traditional "),X=a("em"),Ye=n("self-attention"),et=n(` layer with
`),J=a("em"),tt=n("Longformer"),ot=n("\u2019s "),B=a("em"),nt=n("chunked self-attention"),de=n(" layer. "),ge=a("a"),Ee=n("LEDTokenizer"),N=n(` is an alias of
`),ve=a("a"),Q=n("BartTokenizer"),st=n("."),at=c(),q=a("li"),z=n("LED works very well on long-range "),rt=a("em"),Le=n("sequence-to-sequence"),kt=n(" tasks where the "),dt=a("code"),S=n("input_ids"),wt=n(` largely exceed a length of
1024 tokens.`),yt=c(),W=a("li"),Et=n("LED pads the "),it=a("code"),Z=n("input_ids"),ie=n(" to be a multiple of "),lt=a("code"),Lt=n("config.attention_window"),le=n(` if required. Therefore a small speed-up is
gained, when `),je=a("a"),qt=n("LEDTokenizer"),ct=n(" is used with the "),ht=a("code"),qe=n("pad_to_multiple_of"),$t=n(" argument."),Td=c(),Y=a("li"),kd=n("LED makes use of "),Ws=a("em"),wd=n("global attention"),yd=n(" by means of the "),Hs=a("code"),Ed=n("global_attention_mask"),Ld=n(` (see
`),is=a("a"),qd=n("LongformerModel"),$d=n("). For summarization, it is advised to put "),Vs=a("em"),Dd=n("global attention"),Fd=n(` only on the first
`),Rs=a("code"),zd=n("<s>"),xd=n(" token. For question answering, it is advised to put "),Us=a("em"),Sd=n("global attention"),Md=n(" on all tokens of the question."),Cd=c(),pt=a("li"),Od=n("To fine-tune LED on all 16384, "),Ks=a("em"),jd=n("gradient checkpointing"),Pd=n(` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),Xs=a("code"),Ad=n("model.gradient_checkpointing_enable()"),Nd=n(`.
Moreover, the `),Js=a("code"),Id=n("use_cache=False"),Gd=n(`
flag can be used to disable the caching mechanism to save memory.`),Bd=c(),Vo=a("li"),Qd=n("A notebook showing how to evaluate LED, can be accessed "),Ro=a("a"),Wd=n("here"),Hd=n("."),Vd=c(),Uo=a("li"),Rd=n("A notebook showing how to fine-tune LED, can be accessed "),Ko=a("a"),Ud=n("here"),Kd=n("."),ar=c(),to=a("p"),Xd=n("This model was contributed by "),Xo=a("a"),Jd=n("patrickvonplaten"),Zd=n("."),rr=c(),Dt=a("h2"),oo=a("a"),Zs=a("span"),T(Jo.$$.fragment),Yd=c(),Ys=a("span"),ei=n("LEDConfig"),dr=c(),$e=a("div"),T(Zo.$$.fragment),ti=c(),Ft=a("p"),oi=n("This is the configuration class to store the configuration of a "),ls=a("a"),ni=n("LEDModel"),si=n(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Yo=a("a"),ai=n("allenai/led-base-16384"),ri=n(" architecture."),di=c(),zt=a("p"),ii=n("Configuration objects inherit from "),cs=a("a"),li=n("PretrainedConfig"),ci=n(` and can be used to control the model outputs. Read the
documentation from `),hs=a("a"),hi=n("PretrainedConfig"),pi=n(" for more information."),ui=c(),T(no.$$.fragment),ir=c(),xt=a("h2"),so=a("a"),ea=a("span"),T(en.$$.fragment),mi=c(),ta=a("span"),fi=n("LEDTokenizer"),lr=c(),I=a("div"),T(tn.$$.fragment),_i=c(),oa=a("p"),gi=n("Construct a LED tokenizer."),vi=c(),ao=a("p"),ps=a("a"),bi=n("LEDTokenizer"),Ti=n(" is identical to "),us=a("a"),ki=n("BartTokenizer"),wi=n(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),yi=c(),on=a("p"),Ei=n("Refer to superclass "),ms=a("a"),Li=n("BartTokenizer"),qi=n(" for usage examples and documentation concerning parameters."),$i=c(),ut=a("div"),T(nn.$$.fragment),Di=c(),na=a("p"),Fi=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),zi=c(),sn=a("ul"),fs=a("li"),xi=n("single sequence: "),sa=a("code"),Si=n("<s> X </s>"),Mi=c(),_s=a("li"),Ci=n("pair of sequences: "),aa=a("code"),Oi=n("<s> A </s></s> B </s>"),ji=c(),ro=a("div"),T(an.$$.fragment),Pi=c(),rn=a("p"),Ai=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ra=a("code"),Ni=n("prepare_for_model"),Ii=n(" method."),Gi=c(),io=a("div"),T(dn.$$.fragment),Bi=c(),da=a("p"),Qi=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Wi=c(),gs=a("div"),T(ln.$$.fragment),cr=c(),St=a("h2"),lo=a("a"),ia=a("span"),T(cn.$$.fragment),Hi=c(),la=a("span"),Vi=n("LEDTokenizerFast"),hr=c(),De=a("div"),T(hn.$$.fragment),Ri=c(),pn=a("p"),Ui=n("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ca=a("em"),Ki=n("tokenizers"),Xi=n(" library)."),Ji=c(),co=a("p"),vs=a("a"),Zi=n("LEDTokenizerFast"),Yi=n(" is identical to "),bs=a("a"),el=n("BartTokenizerFast"),tl=n(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),ol=c(),un=a("p"),nl=n("Refer to superclass "),Ts=a("a"),sl=n("BartTokenizerFast"),al=n(" for usage examples and documentation concerning parameters."),pr=c(),Mt=a("h2"),ho=a("a"),ha=a("span"),T(mn.$$.fragment),rl=c(),pa=a("span"),dl=n("LED specific outputs"),ur=c(),Ct=a("div"),T(fn.$$.fragment),il=c(),ua=a("p"),ll=n("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),mr=c(),Ot=a("div"),T(_n.$$.fragment),cl=c(),ma=a("p"),hl=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),fr=c(),jt=a("div"),T(gn.$$.fragment),pl=c(),fa=a("p"),ul=n("Base class for sequence-to-sequence language models outputs."),_r=c(),Pt=a("div"),T(vn.$$.fragment),ml=c(),_a=a("p"),fl=n("Base class for outputs of sequence-to-sequence sentence classification models."),gr=c(),At=a("div"),T(bn.$$.fragment),_l=c(),ga=a("p"),gl=n("Base class for outputs of sequence-to-sequence question answering models."),vr=c(),Nt=a("div"),T(Tn.$$.fragment),vl=c(),va=a("p"),bl=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),br=c(),It=a("div"),T(kn.$$.fragment),Tl=c(),ba=a("p"),kl=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Tr=c(),Gt=a("div"),T(wn.$$.fragment),wl=c(),Ta=a("p"),yl=n("Base class for sequence-to-sequence language models outputs."),kr=c(),Bt=a("h2"),po=a("a"),ka=a("span"),T(yn.$$.fragment),El=c(),wa=a("span"),Ll=n("LEDModel"),wr=c(),Fe=a("div"),T(En.$$.fragment),ql=c(),Ln=a("p"),$l=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ks=a("a"),Dl=n("PreTrainedModel"),Fl=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),zl=c(),qn=a("p"),xl=n("This model is also a PyTorch "),$n=a("a"),Sl=n("torch.nn.Module"),Ml=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Cl=c(),Pe=a("div"),T(Dn.$$.fragment),Ol=c(),Qt=a("p"),jl=n("The "),ws=a("a"),Pl=n("LEDModel"),Al=n(" forward method, overrides the "),ya=a("code"),Nl=n("__call__"),Il=n(" special method."),Gl=c(),T(uo.$$.fragment),Bl=c(),T(mo.$$.fragment),yr=c(),Wt=a("h2"),fo=a("a"),Ea=a("span"),T(Fn.$$.fragment),Ql=c(),La=a("span"),Wl=n("LEDForConditionalGeneration"),Er=c(),ze=a("div"),T(zn.$$.fragment),Hl=c(),xn=a("p"),Vl=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ys=a("a"),Rl=n("PreTrainedModel"),Ul=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Kl=c(),Sn=a("p"),Xl=n("This model is also a PyTorch "),Mn=a("a"),Jl=n("torch.nn.Module"),Zl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Yl=c(),be=a("div"),T(Cn.$$.fragment),ec=c(),Ht=a("p"),tc=n("The "),Es=a("a"),oc=n("LEDForConditionalGeneration"),nc=n(" forward method, overrides the "),qa=a("code"),sc=n("__call__"),ac=n(" special method."),rc=c(),T(_o.$$.fragment),dc=c(),T(go.$$.fragment),ic=c(),T(vo.$$.fragment),Lr=c(),Vt=a("h2"),bo=a("a"),$a=a("span"),T(On.$$.fragment),lc=c(),Da=a("span"),cc=n("LEDForSequenceClassification"),qr=c(),ce=a("div"),T(jn.$$.fragment),hc=c(),Fa=a("p"),pc=n(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),uc=c(),Pn=a("p"),mc=n("This model inherits from "),Ls=a("a"),fc=n("PreTrainedModel"),_c=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),gc=c(),An=a("p"),vc=n("This model is also a PyTorch "),Nn=a("a"),bc=n("torch.nn.Module"),Tc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),kc=c(),R=a("div"),T(In.$$.fragment),wc=c(),Rt=a("p"),yc=n("The "),qs=a("a"),Ec=n("LEDForSequenceClassification"),Lc=n(" forward method, overrides the "),za=a("code"),qc=n("__call__"),$c=n(" special method."),Dc=c(),T(To.$$.fragment),Fc=c(),T(ko.$$.fragment),zc=c(),T(wo.$$.fragment),xc=c(),T(yo.$$.fragment),Sc=c(),T(Eo.$$.fragment),$r=c(),Ut=a("h2"),Lo=a("a"),xa=a("span"),T(Gn.$$.fragment),Mc=c(),Sa=a("span"),Cc=n("LEDForQuestionAnswering"),Dr=c(),he=a("div"),T(Bn.$$.fragment),Oc=c(),Kt=a("p"),jc=n(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ma=a("code"),Pc=n("span start logits"),Ac=n(" and "),Ca=a("code"),Nc=n("span end logits"),Ic=n(")."),Gc=c(),Qn=a("p"),Bc=n("This model inherits from "),$s=a("a"),Qc=n("PreTrainedModel"),Wc=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Hc=c(),Wn=a("p"),Vc=n("This model is also a PyTorch "),Hn=a("a"),Rc=n("torch.nn.Module"),Uc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Kc=c(),Te=a("div"),T(Vn.$$.fragment),Xc=c(),Xt=a("p"),Jc=n("The "),Ds=a("a"),Zc=n("LEDForQuestionAnswering"),Yc=n(" forward method, overrides the "),Oa=a("code"),eh=n("__call__"),th=n(" special method."),oh=c(),T(qo.$$.fragment),nh=c(),T($o.$$.fragment),sh=c(),T(Do.$$.fragment),Fr=c(),Jt=a("h2"),Fo=a("a"),ja=a("span"),T(Rn.$$.fragment),ah=c(),Pa=a("span"),rh=n("TFLEDModel"),zr=c(),pe=a("div"),T(Un.$$.fragment),dh=c(),Kn=a("p"),ih=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fs=a("a"),lh=n("TFPreTrainedModel"),ch=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh=c(),Xn=a("p"),ph=n("This model is also a "),Jn=a("a"),uh=n("tf.keras.Model"),mh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fh=c(),T(zo.$$.fragment),_h=c(),Ae=a("div"),T(Zn.$$.fragment),gh=c(),Zt=a("p"),vh=n("The "),zs=a("a"),bh=n("TFLEDModel"),Th=n(" forward method, overrides the "),Aa=a("code"),kh=n("__call__"),wh=n(" special method."),yh=c(),T(xo.$$.fragment),Eh=c(),T(So.$$.fragment),xr=c(),Yt=a("h2"),Mo=a("a"),Na=a("span"),T(Yn.$$.fragment),Lh=c(),Ia=a("span"),qh=n("TFLEDForConditionalGeneration"),Sr=c(),ue=a("div"),T(es.$$.fragment),$h=c(),ts=a("p"),Dh=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),xs=a("a"),Fh=n("TFPreTrainedModel"),zh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh=c(),os=a("p"),Sh=n("This model is also a "),ns=a("a"),Mh=n("tf.keras.Model"),Ch=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oh=c(),T(Co.$$.fragment),jh=c(),Ne=a("div"),T(ss.$$.fragment),Ph=c(),eo=a("p"),Ah=n("The "),Ss=a("a"),Nh=n("TFLEDForConditionalGeneration"),Ih=n(" forward method, overrides the "),Ga=a("code"),Gh=n("__call__"),Bh=n(" special method."),Qh=c(),T(Oo.$$.fragment),Wh=c(),T(jo.$$.fragment),this.h()},l(o){const _=Vu('[data-svelte="svelte-1phssyn"]',document.head);l=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=h(o),p=r(o,"H1",{class:!0});var as=d(p);f=r(as,"A",{id:!0,class:!0,href:!0});var Ba=d(f);b=r(Ba,"SPAN",{});var Qa=d(b);k(i.$$.fragment,Qa),Qa.forEach(t),Ba.forEach(t),m=h(as),F=r(as,"SPAN",{});var Wa=d(F);We=s(Wa,"LED"),Wa.forEach(t),as.forEach(t),xe=h(o),j=r(o,"H2",{class:!0});var rs=d(j);te=r(rs,"A",{id:!0,class:!0,href:!0});var Ha=d(te);ne=r(Ha,"SPAN",{});var Va=d(ne);k(D.$$.fragment,Va),Va.forEach(t),Ha.forEach(t),He=h(rs),K=r(rs,"SPAN",{});var Ra=d(K);Ve=s(Ra,"Overview"),Ra.forEach(t),rs.forEach(t),Se=h(o),G=r(o,"P",{});var ds=d(G);Re=s(ds,"The LED model was proposed in "),se=r(ds,"A",{href:!0,rel:!0});var Ua=d(se);ae=s(Ua,"Longformer: The Long-Document Transformer"),Ua.forEach(t),Ue=s(ds,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),ds.forEach(t),Me=h(o),H=r(o,"P",{});var Ka=d(H);Ke=s(Ka,"The abstract from the paper is the following:"),Ka.forEach(t),Ce=h(o),V=r(o,"P",{});var Xa=d(V);ye=r(Xa,"EM",{});var Ja=d(ye);Xe=s(Ja,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Ja.forEach(t),Xa.forEach(t),me=h(o),M=r(o,"P",{});var Za=d(M);P=s(Za,"Tips:"),Za.forEach(t),Oe=h(o),x=r(o,"UL",{});var ee=d(x);O=r(ee,"LI",{});var U=d(O);fe=r(U,"A",{href:!0});var Ya=d(fe);re=s(Ya,"LEDForConditionalGeneration"),Ya.forEach(t),Je=s(U,` is an extension of
`),_e=r(U,"A",{href:!0});var er=d(_e);A=s(er,"BartForConditionalGeneration"),er.forEach(t),Ze=s(U," exchanging the traditional "),X=r(U,"EM",{});var tr=d(X);Ye=s(tr,"self-attention"),tr.forEach(t),et=s(U,` layer with
`),J=r(U,"EM",{});var or=d(J);tt=s(or,"Longformer"),or.forEach(t),ot=s(U,"\u2019s "),B=r(U,"EM",{});var Rh=d(B);nt=s(Rh,"chunked self-attention"),Rh.forEach(t),de=s(U," layer. "),ge=r(U,"A",{href:!0});var Uh=d(ge);Ee=s(Uh,"LEDTokenizer"),Uh.forEach(t),N=s(U,` is an alias of
`),ve=r(U,"A",{href:!0});var Kh=d(ve);Q=s(Kh,"BartTokenizer"),Kh.forEach(t),st=s(U,"."),U.forEach(t),at=h(ee),q=r(ee,"LI",{});var Ms=d(q);z=s(Ms,"LED works very well on long-range "),rt=r(Ms,"EM",{});var Xh=d(rt);Le=s(Xh,"sequence-to-sequence"),Xh.forEach(t),kt=s(Ms," tasks where the "),dt=r(Ms,"CODE",{});var Jh=d(dt);S=s(Jh,"input_ids"),Jh.forEach(t),wt=s(Ms,` largely exceed a length of
1024 tokens.`),Ms.forEach(t),yt=h(ee),W=r(ee,"LI",{});var mt=d(W);Et=s(mt,"LED pads the "),it=r(mt,"CODE",{});var Zh=d(it);Z=s(Zh,"input_ids"),Zh.forEach(t),ie=s(mt," to be a multiple of "),lt=r(mt,"CODE",{});var Yh=d(lt);Lt=s(Yh,"config.attention_window"),Yh.forEach(t),le=s(mt,` if required. Therefore a small speed-up is
gained, when `),je=r(mt,"A",{href:!0});var ep=d(je);qt=s(ep,"LEDTokenizer"),ep.forEach(t),ct=s(mt," is used with the "),ht=r(mt,"CODE",{});var tp=d(ht);qe=s(tp,"pad_to_multiple_of"),tp.forEach(t),$t=s(mt," argument."),mt.forEach(t),Td=h(ee),Y=r(ee,"LI",{});var ke=d(Y);kd=s(ke,"LED makes use of "),Ws=r(ke,"EM",{});var op=d(Ws);wd=s(op,"global attention"),op.forEach(t),yd=s(ke," by means of the "),Hs=r(ke,"CODE",{});var np=d(Hs);Ed=s(np,"global_attention_mask"),np.forEach(t),Ld=s(ke,` (see
`),is=r(ke,"A",{href:!0});var sp=d(is);qd=s(sp,"LongformerModel"),sp.forEach(t),$d=s(ke,"). For summarization, it is advised to put "),Vs=r(ke,"EM",{});var ap=d(Vs);Dd=s(ap,"global attention"),ap.forEach(t),Fd=s(ke,` only on the first
`),Rs=r(ke,"CODE",{});var rp=d(Rs);zd=s(rp,"<s>"),rp.forEach(t),xd=s(ke," token. For question answering, it is advised to put "),Us=r(ke,"EM",{});var dp=d(Us);Sd=s(dp,"global attention"),dp.forEach(t),Md=s(ke," on all tokens of the question."),ke.forEach(t),Cd=h(ee),pt=r(ee,"LI",{});var Po=d(pt);Od=s(Po,"To fine-tune LED on all 16384, "),Ks=r(Po,"EM",{});var ip=d(Ks);jd=s(ip,"gradient checkpointing"),ip.forEach(t),Pd=s(Po,` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),Xs=r(Po,"CODE",{});var lp=d(Xs);Ad=s(lp,"model.gradient_checkpointing_enable()"),lp.forEach(t),Nd=s(Po,`.
Moreover, the `),Js=r(Po,"CODE",{});var cp=d(Js);Id=s(cp,"use_cache=False"),cp.forEach(t),Gd=s(Po,`
flag can be used to disable the caching mechanism to save memory.`),Po.forEach(t),Bd=h(ee),Vo=r(ee,"LI",{});var Cr=d(Vo);Qd=s(Cr,"A notebook showing how to evaluate LED, can be accessed "),Ro=r(Cr,"A",{href:!0,rel:!0});var hp=d(Ro);Wd=s(hp,"here"),hp.forEach(t),Hd=s(Cr,"."),Cr.forEach(t),Vd=h(ee),Uo=r(ee,"LI",{});var Or=d(Uo);Rd=s(Or,"A notebook showing how to fine-tune LED, can be accessed "),Ko=r(Or,"A",{href:!0,rel:!0});var pp=d(Ko);Ud=s(pp,"here"),pp.forEach(t),Kd=s(Or,"."),Or.forEach(t),ee.forEach(t),ar=h(o),to=r(o,"P",{});var jr=d(to);Xd=s(jr,"This model was contributed by "),Xo=r(jr,"A",{href:!0,rel:!0});var up=d(Xo);Jd=s(up,"patrickvonplaten"),up.forEach(t),Zd=s(jr,"."),jr.forEach(t),rr=h(o),Dt=r(o,"H2",{class:!0});var Pr=d(Dt);oo=r(Pr,"A",{id:!0,class:!0,href:!0});var mp=d(oo);Zs=r(mp,"SPAN",{});var fp=d(Zs);k(Jo.$$.fragment,fp),fp.forEach(t),mp.forEach(t),Yd=h(Pr),Ys=r(Pr,"SPAN",{});var _p=d(Ys);ei=s(_p,"LEDConfig"),_p.forEach(t),Pr.forEach(t),dr=h(o),$e=r(o,"DIV",{class:!0});var Ao=d($e);k(Zo.$$.fragment,Ao),ti=h(Ao),Ft=r(Ao,"P",{});var Cs=d(Ft);oi=s(Cs,"This is the configuration class to store the configuration of a "),ls=r(Cs,"A",{href:!0});var gp=d(ls);ni=s(gp,"LEDModel"),gp.forEach(t),si=s(Cs,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Yo=r(Cs,"A",{href:!0,rel:!0});var vp=d(Yo);ai=s(vp,"allenai/led-base-16384"),vp.forEach(t),ri=s(Cs," architecture."),Cs.forEach(t),di=h(Ao),zt=r(Ao,"P",{});var Os=d(zt);ii=s(Os,"Configuration objects inherit from "),cs=r(Os,"A",{href:!0});var bp=d(cs);li=s(bp,"PretrainedConfig"),bp.forEach(t),ci=s(Os,` and can be used to control the model outputs. Read the
documentation from `),hs=r(Os,"A",{href:!0});var Tp=d(hs);hi=s(Tp,"PretrainedConfig"),Tp.forEach(t),pi=s(Os," for more information."),Os.forEach(t),ui=h(Ao),k(no.$$.fragment,Ao),Ao.forEach(t),ir=h(o),xt=r(o,"H2",{class:!0});var Ar=d(xt);so=r(Ar,"A",{id:!0,class:!0,href:!0});var kp=d(so);ea=r(kp,"SPAN",{});var wp=d(ea);k(en.$$.fragment,wp),wp.forEach(t),kp.forEach(t),mi=h(Ar),ta=r(Ar,"SPAN",{});var yp=d(ta);fi=s(yp,"LEDTokenizer"),yp.forEach(t),Ar.forEach(t),lr=h(o),I=r(o,"DIV",{class:!0});var oe=d(I);k(tn.$$.fragment,oe),_i=h(oe),oa=r(oe,"P",{});var Ep=d(oa);gi=s(Ep,"Construct a LED tokenizer."),Ep.forEach(t),vi=h(oe),ao=r(oe,"P",{});var nr=d(ao);ps=r(nr,"A",{href:!0});var Lp=d(ps);bi=s(Lp,"LEDTokenizer"),Lp.forEach(t),Ti=s(nr," is identical to "),us=r(nr,"A",{href:!0});var qp=d(us);ki=s(qp,"BartTokenizer"),qp.forEach(t),wi=s(nr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),nr.forEach(t),yi=h(oe),on=r(oe,"P",{});var Nr=d(on);Ei=s(Nr,"Refer to superclass "),ms=r(Nr,"A",{href:!0});var $p=d(ms);Li=s($p,"BartTokenizer"),$p.forEach(t),qi=s(Nr," for usage examples and documentation concerning parameters."),Nr.forEach(t),$i=h(oe),ut=r(oe,"DIV",{class:!0});var js=d(ut);k(nn.$$.fragment,js),Di=h(js),na=r(js,"P",{});var Dp=d(na);Fi=s(Dp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Dp.forEach(t),zi=h(js),sn=r(js,"UL",{});var Ir=d(sn);fs=r(Ir,"LI",{});var Hh=d(fs);xi=s(Hh,"single sequence: "),sa=r(Hh,"CODE",{});var Fp=d(sa);Si=s(Fp,"<s> X </s>"),Fp.forEach(t),Hh.forEach(t),Mi=h(Ir),_s=r(Ir,"LI",{});var Vh=d(_s);Ci=s(Vh,"pair of sequences: "),aa=r(Vh,"CODE",{});var zp=d(aa);Oi=s(zp,"<s> A </s></s> B </s>"),zp.forEach(t),Vh.forEach(t),Ir.forEach(t),js.forEach(t),ji=h(oe),ro=r(oe,"DIV",{class:!0});var Gr=d(ro);k(an.$$.fragment,Gr),Pi=h(Gr),rn=r(Gr,"P",{});var Br=d(rn);Ai=s(Br,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ra=r(Br,"CODE",{});var xp=d(ra);Ni=s(xp,"prepare_for_model"),xp.forEach(t),Ii=s(Br," method."),Br.forEach(t),Gr.forEach(t),Gi=h(oe),io=r(oe,"DIV",{class:!0});var Qr=d(io);k(dn.$$.fragment,Qr),Bi=h(Qr),da=r(Qr,"P",{});var Sp=d(da);Qi=s(Sp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Sp.forEach(t),Qr.forEach(t),Wi=h(oe),gs=r(oe,"DIV",{class:!0});var Mp=d(gs);k(ln.$$.fragment,Mp),Mp.forEach(t),oe.forEach(t),cr=h(o),St=r(o,"H2",{class:!0});var Wr=d(St);lo=r(Wr,"A",{id:!0,class:!0,href:!0});var Cp=d(lo);ia=r(Cp,"SPAN",{});var Op=d(ia);k(cn.$$.fragment,Op),Op.forEach(t),Cp.forEach(t),Hi=h(Wr),la=r(Wr,"SPAN",{});var jp=d(la);Vi=s(jp,"LEDTokenizerFast"),jp.forEach(t),Wr.forEach(t),hr=h(o),De=r(o,"DIV",{class:!0});var No=d(De);k(hn.$$.fragment,No),Ri=h(No),pn=r(No,"P",{});var Hr=d(pn);Ui=s(Hr,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ca=r(Hr,"EM",{});var Pp=d(ca);Ki=s(Pp,"tokenizers"),Pp.forEach(t),Xi=s(Hr," library)."),Hr.forEach(t),Ji=h(No),co=r(No,"P",{});var sr=d(co);vs=r(sr,"A",{href:!0});var Ap=d(vs);Zi=s(Ap,"LEDTokenizerFast"),Ap.forEach(t),Yi=s(sr," is identical to "),bs=r(sr,"A",{href:!0});var Np=d(bs);el=s(Np,"BartTokenizerFast"),Np.forEach(t),tl=s(sr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),sr.forEach(t),ol=h(No),un=r(No,"P",{});var Vr=d(un);nl=s(Vr,"Refer to superclass "),Ts=r(Vr,"A",{href:!0});var Ip=d(Ts);sl=s(Ip,"BartTokenizerFast"),Ip.forEach(t),al=s(Vr," for usage examples and documentation concerning parameters."),Vr.forEach(t),No.forEach(t),pr=h(o),Mt=r(o,"H2",{class:!0});var Rr=d(Mt);ho=r(Rr,"A",{id:!0,class:!0,href:!0});var Gp=d(ho);ha=r(Gp,"SPAN",{});var Bp=d(ha);k(mn.$$.fragment,Bp),Bp.forEach(t),Gp.forEach(t),rl=h(Rr),pa=r(Rr,"SPAN",{});var Qp=d(pa);dl=s(Qp,"LED specific outputs"),Qp.forEach(t),Rr.forEach(t),ur=h(o),Ct=r(o,"DIV",{class:!0});var Ur=d(Ct);k(fn.$$.fragment,Ur),il=h(Ur),ua=r(Ur,"P",{});var Wp=d(ua);ll=s(Wp,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Wp.forEach(t),Ur.forEach(t),mr=h(o),Ot=r(o,"DIV",{class:!0});var Kr=d(Ot);k(_n.$$.fragment,Kr),cl=h(Kr),ma=r(Kr,"P",{});var Hp=d(ma);hl=s(Hp,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Hp.forEach(t),Kr.forEach(t),fr=h(o),jt=r(o,"DIV",{class:!0});var Xr=d(jt);k(gn.$$.fragment,Xr),pl=h(Xr),fa=r(Xr,"P",{});var Vp=d(fa);ul=s(Vp,"Base class for sequence-to-sequence language models outputs."),Vp.forEach(t),Xr.forEach(t),_r=h(o),Pt=r(o,"DIV",{class:!0});var Jr=d(Pt);k(vn.$$.fragment,Jr),ml=h(Jr),_a=r(Jr,"P",{});var Rp=d(_a);fl=s(Rp,"Base class for outputs of sequence-to-sequence sentence classification models."),Rp.forEach(t),Jr.forEach(t),gr=h(o),At=r(o,"DIV",{class:!0});var Zr=d(At);k(bn.$$.fragment,Zr),_l=h(Zr),ga=r(Zr,"P",{});var Up=d(ga);gl=s(Up,"Base class for outputs of sequence-to-sequence question answering models."),Up.forEach(t),Zr.forEach(t),vr=h(o),Nt=r(o,"DIV",{class:!0});var Yr=d(Nt);k(Tn.$$.fragment,Yr),vl=h(Yr),va=r(Yr,"P",{});var Kp=d(va);bl=s(Kp,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Kp.forEach(t),Yr.forEach(t),br=h(o),It=r(o,"DIV",{class:!0});var ed=d(It);k(kn.$$.fragment,ed),Tl=h(ed),ba=r(ed,"P",{});var Xp=d(ba);kl=s(Xp,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Xp.forEach(t),ed.forEach(t),Tr=h(o),Gt=r(o,"DIV",{class:!0});var td=d(Gt);k(wn.$$.fragment,td),wl=h(td),Ta=r(td,"P",{});var Jp=d(Ta);yl=s(Jp,"Base class for sequence-to-sequence language models outputs."),Jp.forEach(t),td.forEach(t),kr=h(o),Bt=r(o,"H2",{class:!0});var od=d(Bt);po=r(od,"A",{id:!0,class:!0,href:!0});var Zp=d(po);ka=r(Zp,"SPAN",{});var Yp=d(ka);k(yn.$$.fragment,Yp),Yp.forEach(t),Zp.forEach(t),El=h(od),wa=r(od,"SPAN",{});var eu=d(wa);Ll=s(eu,"LEDModel"),eu.forEach(t),od.forEach(t),wr=h(o),Fe=r(o,"DIV",{class:!0});var Io=d(Fe);k(En.$$.fragment,Io),ql=h(Io),Ln=r(Io,"P",{});var nd=d(Ln);$l=s(nd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ks=r(nd,"A",{href:!0});var tu=d(ks);Dl=s(tu,"PreTrainedModel"),tu.forEach(t),Fl=s(nd,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),nd.forEach(t),zl=h(Io),qn=r(Io,"P",{});var sd=d(qn);xl=s(sd,"This model is also a PyTorch "),$n=r(sd,"A",{href:!0,rel:!0});var ou=d($n);Sl=s(ou,"torch.nn.Module"),ou.forEach(t),Ml=s(sd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),sd.forEach(t),Cl=h(Io),Pe=r(Io,"DIV",{class:!0});var Go=d(Pe);k(Dn.$$.fragment,Go),Ol=h(Go),Qt=r(Go,"P",{});var Ps=d(Qt);jl=s(Ps,"The "),ws=r(Ps,"A",{href:!0});var nu=d(ws);Pl=s(nu,"LEDModel"),nu.forEach(t),Al=s(Ps," forward method, overrides the "),ya=r(Ps,"CODE",{});var su=d(ya);Nl=s(su,"__call__"),su.forEach(t),Il=s(Ps," special method."),Ps.forEach(t),Gl=h(Go),k(uo.$$.fragment,Go),Bl=h(Go),k(mo.$$.fragment,Go),Go.forEach(t),Io.forEach(t),yr=h(o),Wt=r(o,"H2",{class:!0});var ad=d(Wt);fo=r(ad,"A",{id:!0,class:!0,href:!0});var au=d(fo);Ea=r(au,"SPAN",{});var ru=d(Ea);k(Fn.$$.fragment,ru),ru.forEach(t),au.forEach(t),Ql=h(ad),La=r(ad,"SPAN",{});var du=d(La);Wl=s(du,"LEDForConditionalGeneration"),du.forEach(t),ad.forEach(t),Er=h(o),ze=r(o,"DIV",{class:!0});var Bo=d(ze);k(zn.$$.fragment,Bo),Hl=h(Bo),xn=r(Bo,"P",{});var rd=d(xn);Vl=s(rd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ys=r(rd,"A",{href:!0});var iu=d(ys);Rl=s(iu,"PreTrainedModel"),iu.forEach(t),Ul=s(rd,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),rd.forEach(t),Kl=h(Bo),Sn=r(Bo,"P",{});var dd=d(Sn);Xl=s(dd,"This model is also a PyTorch "),Mn=r(dd,"A",{href:!0,rel:!0});var lu=d(Mn);Jl=s(lu,"torch.nn.Module"),lu.forEach(t),Zl=s(dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),dd.forEach(t),Yl=h(Bo),be=r(Bo,"DIV",{class:!0});var ft=d(be);k(Cn.$$.fragment,ft),ec=h(ft),Ht=r(ft,"P",{});var As=d(Ht);tc=s(As,"The "),Es=r(As,"A",{href:!0});var cu=d(Es);oc=s(cu,"LEDForConditionalGeneration"),cu.forEach(t),nc=s(As," forward method, overrides the "),qa=r(As,"CODE",{});var hu=d(qa);sc=s(hu,"__call__"),hu.forEach(t),ac=s(As," special method."),As.forEach(t),rc=h(ft),k(_o.$$.fragment,ft),dc=h(ft),k(go.$$.fragment,ft),ic=h(ft),k(vo.$$.fragment,ft),ft.forEach(t),Bo.forEach(t),Lr=h(o),Vt=r(o,"H2",{class:!0});var id=d(Vt);bo=r(id,"A",{id:!0,class:!0,href:!0});var pu=d(bo);$a=r(pu,"SPAN",{});var uu=d($a);k(On.$$.fragment,uu),uu.forEach(t),pu.forEach(t),lc=h(id),Da=r(id,"SPAN",{});var mu=d(Da);cc=s(mu,"LEDForSequenceClassification"),mu.forEach(t),id.forEach(t),qr=h(o),ce=r(o,"DIV",{class:!0});var _t=d(ce);k(jn.$$.fragment,_t),hc=h(_t),Fa=r(_t,"P",{});var fu=d(Fa);pc=s(fu,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),fu.forEach(t),uc=h(_t),Pn=r(_t,"P",{});var ld=d(Pn);mc=s(ld,"This model inherits from "),Ls=r(ld,"A",{href:!0});var _u=d(Ls);fc=s(_u,"PreTrainedModel"),_u.forEach(t),_c=s(ld,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),ld.forEach(t),gc=h(_t),An=r(_t,"P",{});var cd=d(An);vc=s(cd,"This model is also a PyTorch "),Nn=r(cd,"A",{href:!0,rel:!0});var gu=d(Nn);bc=s(gu,"torch.nn.Module"),gu.forEach(t),Tc=s(cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),cd.forEach(t),kc=h(_t),R=r(_t,"DIV",{class:!0});var we=d(R);k(In.$$.fragment,we),wc=h(we),Rt=r(we,"P",{});var Ns=d(Rt);yc=s(Ns,"The "),qs=r(Ns,"A",{href:!0});var vu=d(qs);Ec=s(vu,"LEDForSequenceClassification"),vu.forEach(t),Lc=s(Ns," forward method, overrides the "),za=r(Ns,"CODE",{});var bu=d(za);qc=s(bu,"__call__"),bu.forEach(t),$c=s(Ns," special method."),Ns.forEach(t),Dc=h(we),k(To.$$.fragment,we),Fc=h(we),k(ko.$$.fragment,we),zc=h(we),k(wo.$$.fragment,we),xc=h(we),k(yo.$$.fragment,we),Sc=h(we),k(Eo.$$.fragment,we),we.forEach(t),_t.forEach(t),$r=h(o),Ut=r(o,"H2",{class:!0});var hd=d(Ut);Lo=r(hd,"A",{id:!0,class:!0,href:!0});var Tu=d(Lo);xa=r(Tu,"SPAN",{});var ku=d(xa);k(Gn.$$.fragment,ku),ku.forEach(t),Tu.forEach(t),Mc=h(hd),Sa=r(hd,"SPAN",{});var wu=d(Sa);Cc=s(wu,"LEDForQuestionAnswering"),wu.forEach(t),hd.forEach(t),Dr=h(o),he=r(o,"DIV",{class:!0});var gt=d(he);k(Bn.$$.fragment,gt),Oc=h(gt),Kt=r(gt,"P",{});var Is=d(Kt);jc=s(Is,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ma=r(Is,"CODE",{});var yu=d(Ma);Pc=s(yu,"span start logits"),yu.forEach(t),Ac=s(Is," and "),Ca=r(Is,"CODE",{});var Eu=d(Ca);Nc=s(Eu,"span end logits"),Eu.forEach(t),Ic=s(Is,")."),Is.forEach(t),Gc=h(gt),Qn=r(gt,"P",{});var pd=d(Qn);Bc=s(pd,"This model inherits from "),$s=r(pd,"A",{href:!0});var Lu=d($s);Qc=s(Lu,"PreTrainedModel"),Lu.forEach(t),Wc=s(pd,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),pd.forEach(t),Hc=h(gt),Wn=r(gt,"P",{});var ud=d(Wn);Vc=s(ud,"This model is also a PyTorch "),Hn=r(ud,"A",{href:!0,rel:!0});var qu=d(Hn);Rc=s(qu,"torch.nn.Module"),qu.forEach(t),Uc=s(ud,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),ud.forEach(t),Kc=h(gt),Te=r(gt,"DIV",{class:!0});var vt=d(Te);k(Vn.$$.fragment,vt),Xc=h(vt),Xt=r(vt,"P",{});var Gs=d(Xt);Jc=s(Gs,"The "),Ds=r(Gs,"A",{href:!0});var $u=d(Ds);Zc=s($u,"LEDForQuestionAnswering"),$u.forEach(t),Yc=s(Gs," forward method, overrides the "),Oa=r(Gs,"CODE",{});var Du=d(Oa);eh=s(Du,"__call__"),Du.forEach(t),th=s(Gs," special method."),Gs.forEach(t),oh=h(vt),k(qo.$$.fragment,vt),nh=h(vt),k($o.$$.fragment,vt),sh=h(vt),k(Do.$$.fragment,vt),vt.forEach(t),gt.forEach(t),Fr=h(o),Jt=r(o,"H2",{class:!0});var md=d(Jt);Fo=r(md,"A",{id:!0,class:!0,href:!0});var Fu=d(Fo);ja=r(Fu,"SPAN",{});var zu=d(ja);k(Rn.$$.fragment,zu),zu.forEach(t),Fu.forEach(t),ah=h(md),Pa=r(md,"SPAN",{});var xu=d(Pa);rh=s(xu,"TFLEDModel"),xu.forEach(t),md.forEach(t),zr=h(o),pe=r(o,"DIV",{class:!0});var bt=d(pe);k(Un.$$.fragment,bt),dh=h(bt),Kn=r(bt,"P",{});var fd=d(Kn);ih=s(fd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fs=r(fd,"A",{href:!0});var Su=d(Fs);lh=s(Su,"TFPreTrainedModel"),Su.forEach(t),ch=s(fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd.forEach(t),hh=h(bt),Xn=r(bt,"P",{});var _d=d(Xn);ph=s(_d,"This model is also a "),Jn=r(_d,"A",{href:!0,rel:!0});var Mu=d(Jn);uh=s(Mu,"tf.keras.Model"),Mu.forEach(t),mh=s(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(t),fh=h(bt),k(zo.$$.fragment,bt),_h=h(bt),Ae=r(bt,"DIV",{class:!0});var Qo=d(Ae);k(Zn.$$.fragment,Qo),gh=h(Qo),Zt=r(Qo,"P",{});var Bs=d(Zt);vh=s(Bs,"The "),zs=r(Bs,"A",{href:!0});var Cu=d(zs);bh=s(Cu,"TFLEDModel"),Cu.forEach(t),Th=s(Bs," forward method, overrides the "),Aa=r(Bs,"CODE",{});var Ou=d(Aa);kh=s(Ou,"__call__"),Ou.forEach(t),wh=s(Bs," special method."),Bs.forEach(t),yh=h(Qo),k(xo.$$.fragment,Qo),Eh=h(Qo),k(So.$$.fragment,Qo),Qo.forEach(t),bt.forEach(t),xr=h(o),Yt=r(o,"H2",{class:!0});var gd=d(Yt);Mo=r(gd,"A",{id:!0,class:!0,href:!0});var ju=d(Mo);Na=r(ju,"SPAN",{});var Pu=d(Na);k(Yn.$$.fragment,Pu),Pu.forEach(t),ju.forEach(t),Lh=h(gd),Ia=r(gd,"SPAN",{});var Au=d(Ia);qh=s(Au,"TFLEDForConditionalGeneration"),Au.forEach(t),gd.forEach(t),Sr=h(o),ue=r(o,"DIV",{class:!0});var Tt=d(ue);k(es.$$.fragment,Tt),$h=h(Tt),ts=r(Tt,"P",{});var vd=d(ts);Dh=s(vd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),xs=r(vd,"A",{href:!0});var Nu=d(xs);Fh=s(Nu,"TFPreTrainedModel"),Nu.forEach(t),zh=s(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),xh=h(Tt),os=r(Tt,"P",{});var bd=d(os);Sh=s(bd,"This model is also a "),ns=r(bd,"A",{href:!0,rel:!0});var Iu=d(ns);Mh=s(Iu,"tf.keras.Model"),Iu.forEach(t),Ch=s(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Oh=h(Tt),k(Co.$$.fragment,Tt),jh=h(Tt),Ne=r(Tt,"DIV",{class:!0});var Wo=d(Ne);k(ss.$$.fragment,Wo),Ph=h(Wo),eo=r(Wo,"P",{});var Qs=d(eo);Ah=s(Qs,"The "),Ss=r(Qs,"A",{href:!0});var Gu=d(Ss);Nh=s(Gu,"TFLEDForConditionalGeneration"),Gu.forEach(t),Ih=s(Qs," forward method, overrides the "),Ga=r(Qs,"CODE",{});var Bu=d(Ga);Gh=s(Bu,"__call__"),Bu.forEach(t),Bh=s(Qs," special method."),Qs.forEach(t),Qh=h(Wo),k(Oo.$$.fragment,Wo),Wh=h(Wo),k(jo.$$.fragment,Wo),Wo.forEach(t),Tt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(fm)),u(f,"id","led"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#led"),u(p,"class","relative group"),u(te,"id","overview"),u(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(te,"href","#overview"),u(j,"class","relative group"),u(se,"href","https://arxiv.org/abs/2004.05150"),u(se,"rel","nofollow"),u(fe,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDForConditionalGeneration"),u(_e,"href","/docs/transformers/v4.22.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(ge,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizer"),u(ve,"href","/docs/transformers/v4.22.0/en/model_doc/bart#transformers.BartTokenizer"),u(je,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizer"),u(is,"href","/docs/transformers/v4.22.0/en/model_doc/longformer#transformers.LongformerModel"),u(Ro,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),u(Ro,"rel","nofollow"),u(Ko,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),u(Ko,"rel","nofollow"),u(Xo,"href","https://huggingface.co/patrickvonplaten"),u(Xo,"rel","nofollow"),u(oo,"id","transformers.LEDConfig"),u(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oo,"href","#transformers.LEDConfig"),u(Dt,"class","relative group"),u(ls,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDModel"),u(Yo,"href","https://huggingface.co/allenai/led-base-16384"),u(Yo,"rel","nofollow"),u(cs,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(hs,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"id","transformers.LEDTokenizer"),u(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(so,"href","#transformers.LEDTokenizer"),u(xt,"class","relative group"),u(ps,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizer"),u(us,"href","/docs/transformers/v4.22.0/en/model_doc/bart#transformers.BartTokenizer"),u(ms,"href","/docs/transformers/v4.22.0/en/model_doc/bart#transformers.BartTokenizer"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"id","transformers.LEDTokenizerFast"),u(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lo,"href","#transformers.LEDTokenizerFast"),u(St,"class","relative group"),u(vs,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDTokenizerFast"),u(bs,"href","/docs/transformers/v4.22.0/en/model_doc/bart#transformers.BartTokenizerFast"),u(Ts,"href","/docs/transformers/v4.22.0/en/model_doc/bart#transformers.BartTokenizerFast"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),u(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ho,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),u(Mt,"class","relative group"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"id","transformers.LEDModel"),u(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(po,"href","#transformers.LEDModel"),u(Bt,"class","relative group"),u(ks,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u($n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($n,"rel","nofollow"),u(ws,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDModel"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"id","transformers.LEDForConditionalGeneration"),u(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fo,"href","#transformers.LEDForConditionalGeneration"),u(Wt,"class","relative group"),u(ys,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Mn,"rel","nofollow"),u(Es,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDForConditionalGeneration"),u(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bo,"id","transformers.LEDForSequenceClassification"),u(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bo,"href","#transformers.LEDForSequenceClassification"),u(Vt,"class","relative group"),u(Ls,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nn,"rel","nofollow"),u(qs,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDForSequenceClassification"),u(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"id","transformers.LEDForQuestionAnswering"),u(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lo,"href","#transformers.LEDForQuestionAnswering"),u(Ut,"class","relative group"),u($s,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hn,"rel","nofollow"),u(Ds,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.LEDForQuestionAnswering"),u(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"id","transformers.TFLEDModel"),u(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fo,"href","#transformers.TFLEDModel"),u(Jt,"class","relative group"),u(Fs,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Jn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Jn,"rel","nofollow"),u(zs,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.TFLEDModel"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mo,"id","transformers.TFLEDForConditionalGeneration"),u(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mo,"href","#transformers.TFLEDForConditionalGeneration"),u(Yt,"class","relative group"),u(xs,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ns,"rel","nofollow"),u(Ss,"href","/docs/transformers/v4.22.0/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),g(o,v,_),g(o,p,_),e(p,f),e(f,b),w(i,b,null),e(p,m),e(p,F),e(F,We),g(o,xe,_),g(o,j,_),e(j,te),e(te,ne),w(D,ne,null),e(j,He),e(j,K),e(K,Ve),g(o,Se,_),g(o,G,_),e(G,Re),e(G,se),e(se,ae),e(G,Ue),g(o,Me,_),g(o,H,_),e(H,Ke),g(o,Ce,_),g(o,V,_),e(V,ye),e(ye,Xe),g(o,me,_),g(o,M,_),e(M,P),g(o,Oe,_),g(o,x,_),e(x,O),e(O,fe),e(fe,re),e(O,Je),e(O,_e),e(_e,A),e(O,Ze),e(O,X),e(X,Ye),e(O,et),e(O,J),e(J,tt),e(O,ot),e(O,B),e(B,nt),e(O,de),e(O,ge),e(ge,Ee),e(O,N),e(O,ve),e(ve,Q),e(O,st),e(x,at),e(x,q),e(q,z),e(q,rt),e(rt,Le),e(q,kt),e(q,dt),e(dt,S),e(q,wt),e(x,yt),e(x,W),e(W,Et),e(W,it),e(it,Z),e(W,ie),e(W,lt),e(lt,Lt),e(W,le),e(W,je),e(je,qt),e(W,ct),e(W,ht),e(ht,qe),e(W,$t),e(x,Td),e(x,Y),e(Y,kd),e(Y,Ws),e(Ws,wd),e(Y,yd),e(Y,Hs),e(Hs,Ed),e(Y,Ld),e(Y,is),e(is,qd),e(Y,$d),e(Y,Vs),e(Vs,Dd),e(Y,Fd),e(Y,Rs),e(Rs,zd),e(Y,xd),e(Y,Us),e(Us,Sd),e(Y,Md),e(x,Cd),e(x,pt),e(pt,Od),e(pt,Ks),e(Ks,jd),e(pt,Pd),e(pt,Xs),e(Xs,Ad),e(pt,Nd),e(pt,Js),e(Js,Id),e(pt,Gd),e(x,Bd),e(x,Vo),e(Vo,Qd),e(Vo,Ro),e(Ro,Wd),e(Vo,Hd),e(x,Vd),e(x,Uo),e(Uo,Rd),e(Uo,Ko),e(Ko,Ud),e(Uo,Kd),g(o,ar,_),g(o,to,_),e(to,Xd),e(to,Xo),e(Xo,Jd),e(to,Zd),g(o,rr,_),g(o,Dt,_),e(Dt,oo),e(oo,Zs),w(Jo,Zs,null),e(Dt,Yd),e(Dt,Ys),e(Ys,ei),g(o,dr,_),g(o,$e,_),w(Zo,$e,null),e($e,ti),e($e,Ft),e(Ft,oi),e(Ft,ls),e(ls,ni),e(Ft,si),e(Ft,Yo),e(Yo,ai),e(Ft,ri),e($e,di),e($e,zt),e(zt,ii),e(zt,cs),e(cs,li),e(zt,ci),e(zt,hs),e(hs,hi),e(zt,pi),e($e,ui),w(no,$e,null),g(o,ir,_),g(o,xt,_),e(xt,so),e(so,ea),w(en,ea,null),e(xt,mi),e(xt,ta),e(ta,fi),g(o,lr,_),g(o,I,_),w(tn,I,null),e(I,_i),e(I,oa),e(oa,gi),e(I,vi),e(I,ao),e(ao,ps),e(ps,bi),e(ao,Ti),e(ao,us),e(us,ki),e(ao,wi),e(I,yi),e(I,on),e(on,Ei),e(on,ms),e(ms,Li),e(on,qi),e(I,$i),e(I,ut),w(nn,ut,null),e(ut,Di),e(ut,na),e(na,Fi),e(ut,zi),e(ut,sn),e(sn,fs),e(fs,xi),e(fs,sa),e(sa,Si),e(sn,Mi),e(sn,_s),e(_s,Ci),e(_s,aa),e(aa,Oi),e(I,ji),e(I,ro),w(an,ro,null),e(ro,Pi),e(ro,rn),e(rn,Ai),e(rn,ra),e(ra,Ni),e(rn,Ii),e(I,Gi),e(I,io),w(dn,io,null),e(io,Bi),e(io,da),e(da,Qi),e(I,Wi),e(I,gs),w(ln,gs,null),g(o,cr,_),g(o,St,_),e(St,lo),e(lo,ia),w(cn,ia,null),e(St,Hi),e(St,la),e(la,Vi),g(o,hr,_),g(o,De,_),w(hn,De,null),e(De,Ri),e(De,pn),e(pn,Ui),e(pn,ca),e(ca,Ki),e(pn,Xi),e(De,Ji),e(De,co),e(co,vs),e(vs,Zi),e(co,Yi),e(co,bs),e(bs,el),e(co,tl),e(De,ol),e(De,un),e(un,nl),e(un,Ts),e(Ts,sl),e(un,al),g(o,pr,_),g(o,Mt,_),e(Mt,ho),e(ho,ha),w(mn,ha,null),e(Mt,rl),e(Mt,pa),e(pa,dl),g(o,ur,_),g(o,Ct,_),w(fn,Ct,null),e(Ct,il),e(Ct,ua),e(ua,ll),g(o,mr,_),g(o,Ot,_),w(_n,Ot,null),e(Ot,cl),e(Ot,ma),e(ma,hl),g(o,fr,_),g(o,jt,_),w(gn,jt,null),e(jt,pl),e(jt,fa),e(fa,ul),g(o,_r,_),g(o,Pt,_),w(vn,Pt,null),e(Pt,ml),e(Pt,_a),e(_a,fl),g(o,gr,_),g(o,At,_),w(bn,At,null),e(At,_l),e(At,ga),e(ga,gl),g(o,vr,_),g(o,Nt,_),w(Tn,Nt,null),e(Nt,vl),e(Nt,va),e(va,bl),g(o,br,_),g(o,It,_),w(kn,It,null),e(It,Tl),e(It,ba),e(ba,kl),g(o,Tr,_),g(o,Gt,_),w(wn,Gt,null),e(Gt,wl),e(Gt,Ta),e(Ta,yl),g(o,kr,_),g(o,Bt,_),e(Bt,po),e(po,ka),w(yn,ka,null),e(Bt,El),e(Bt,wa),e(wa,Ll),g(o,wr,_),g(o,Fe,_),w(En,Fe,null),e(Fe,ql),e(Fe,Ln),e(Ln,$l),e(Ln,ks),e(ks,Dl),e(Ln,Fl),e(Fe,zl),e(Fe,qn),e(qn,xl),e(qn,$n),e($n,Sl),e(qn,Ml),e(Fe,Cl),e(Fe,Pe),w(Dn,Pe,null),e(Pe,Ol),e(Pe,Qt),e(Qt,jl),e(Qt,ws),e(ws,Pl),e(Qt,Al),e(Qt,ya),e(ya,Nl),e(Qt,Il),e(Pe,Gl),w(uo,Pe,null),e(Pe,Bl),w(mo,Pe,null),g(o,yr,_),g(o,Wt,_),e(Wt,fo),e(fo,Ea),w(Fn,Ea,null),e(Wt,Ql),e(Wt,La),e(La,Wl),g(o,Er,_),g(o,ze,_),w(zn,ze,null),e(ze,Hl),e(ze,xn),e(xn,Vl),e(xn,ys),e(ys,Rl),e(xn,Ul),e(ze,Kl),e(ze,Sn),e(Sn,Xl),e(Sn,Mn),e(Mn,Jl),e(Sn,Zl),e(ze,Yl),e(ze,be),w(Cn,be,null),e(be,ec),e(be,Ht),e(Ht,tc),e(Ht,Es),e(Es,oc),e(Ht,nc),e(Ht,qa),e(qa,sc),e(Ht,ac),e(be,rc),w(_o,be,null),e(be,dc),w(go,be,null),e(be,ic),w(vo,be,null),g(o,Lr,_),g(o,Vt,_),e(Vt,bo),e(bo,$a),w(On,$a,null),e(Vt,lc),e(Vt,Da),e(Da,cc),g(o,qr,_),g(o,ce,_),w(jn,ce,null),e(ce,hc),e(ce,Fa),e(Fa,pc),e(ce,uc),e(ce,Pn),e(Pn,mc),e(Pn,Ls),e(Ls,fc),e(Pn,_c),e(ce,gc),e(ce,An),e(An,vc),e(An,Nn),e(Nn,bc),e(An,Tc),e(ce,kc),e(ce,R),w(In,R,null),e(R,wc),e(R,Rt),e(Rt,yc),e(Rt,qs),e(qs,Ec),e(Rt,Lc),e(Rt,za),e(za,qc),e(Rt,$c),e(R,Dc),w(To,R,null),e(R,Fc),w(ko,R,null),e(R,zc),w(wo,R,null),e(R,xc),w(yo,R,null),e(R,Sc),w(Eo,R,null),g(o,$r,_),g(o,Ut,_),e(Ut,Lo),e(Lo,xa),w(Gn,xa,null),e(Ut,Mc),e(Ut,Sa),e(Sa,Cc),g(o,Dr,_),g(o,he,_),w(Bn,he,null),e(he,Oc),e(he,Kt),e(Kt,jc),e(Kt,Ma),e(Ma,Pc),e(Kt,Ac),e(Kt,Ca),e(Ca,Nc),e(Kt,Ic),e(he,Gc),e(he,Qn),e(Qn,Bc),e(Qn,$s),e($s,Qc),e(Qn,Wc),e(he,Hc),e(he,Wn),e(Wn,Vc),e(Wn,Hn),e(Hn,Rc),e(Wn,Uc),e(he,Kc),e(he,Te),w(Vn,Te,null),e(Te,Xc),e(Te,Xt),e(Xt,Jc),e(Xt,Ds),e(Ds,Zc),e(Xt,Yc),e(Xt,Oa),e(Oa,eh),e(Xt,th),e(Te,oh),w(qo,Te,null),e(Te,nh),w($o,Te,null),e(Te,sh),w(Do,Te,null),g(o,Fr,_),g(o,Jt,_),e(Jt,Fo),e(Fo,ja),w(Rn,ja,null),e(Jt,ah),e(Jt,Pa),e(Pa,rh),g(o,zr,_),g(o,pe,_),w(Un,pe,null),e(pe,dh),e(pe,Kn),e(Kn,ih),e(Kn,Fs),e(Fs,lh),e(Kn,ch),e(pe,hh),e(pe,Xn),e(Xn,ph),e(Xn,Jn),e(Jn,uh),e(Xn,mh),e(pe,fh),w(zo,pe,null),e(pe,_h),e(pe,Ae),w(Zn,Ae,null),e(Ae,gh),e(Ae,Zt),e(Zt,vh),e(Zt,zs),e(zs,bh),e(Zt,Th),e(Zt,Aa),e(Aa,kh),e(Zt,wh),e(Ae,yh),w(xo,Ae,null),e(Ae,Eh),w(So,Ae,null),g(o,xr,_),g(o,Yt,_),e(Yt,Mo),e(Mo,Na),w(Yn,Na,null),e(Yt,Lh),e(Yt,Ia),e(Ia,qh),g(o,Sr,_),g(o,ue,_),w(es,ue,null),e(ue,$h),e(ue,ts),e(ts,Dh),e(ts,xs),e(xs,Fh),e(ts,zh),e(ue,xh),e(ue,os),e(os,Sh),e(os,ns),e(ns,Mh),e(os,Ch),e(ue,Oh),w(Co,ue,null),e(ue,jh),e(ue,Ne),w(ss,Ne,null),e(Ne,Ph),e(Ne,eo),e(eo,Ah),e(eo,Ss),e(Ss,Nh),e(eo,Ih),e(eo,Ga),e(Ga,Gh),e(eo,Bh),e(Ne,Qh),w(Oo,Ne,null),e(Ne,Wh),w(jo,Ne,null),Mr=!0},p(o,[_]){const as={};_&2&&(as.$$scope={dirty:_,ctx:o}),no.$set(as);const Ba={};_&2&&(Ba.$$scope={dirty:_,ctx:o}),uo.$set(Ba);const Qa={};_&2&&(Qa.$$scope={dirty:_,ctx:o}),mo.$set(Qa);const Wa={};_&2&&(Wa.$$scope={dirty:_,ctx:o}),_o.$set(Wa);const rs={};_&2&&(rs.$$scope={dirty:_,ctx:o}),go.$set(rs);const Ha={};_&2&&(Ha.$$scope={dirty:_,ctx:o}),vo.$set(Ha);const Va={};_&2&&(Va.$$scope={dirty:_,ctx:o}),To.$set(Va);const Ra={};_&2&&(Ra.$$scope={dirty:_,ctx:o}),ko.$set(Ra);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:o}),wo.$set(ds);const Ua={};_&2&&(Ua.$$scope={dirty:_,ctx:o}),yo.$set(Ua);const Ka={};_&2&&(Ka.$$scope={dirty:_,ctx:o}),Eo.$set(Ka);const Xa={};_&2&&(Xa.$$scope={dirty:_,ctx:o}),qo.$set(Xa);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:o}),$o.$set(Ja);const Za={};_&2&&(Za.$$scope={dirty:_,ctx:o}),Do.$set(Za);const ee={};_&2&&(ee.$$scope={dirty:_,ctx:o}),zo.$set(ee);const U={};_&2&&(U.$$scope={dirty:_,ctx:o}),xo.$set(U);const Ya={};_&2&&(Ya.$$scope={dirty:_,ctx:o}),So.$set(Ya);const er={};_&2&&(er.$$scope={dirty:_,ctx:o}),Co.$set(er);const tr={};_&2&&(tr.$$scope={dirty:_,ctx:o}),Oo.$set(tr);const or={};_&2&&(or.$$scope={dirty:_,ctx:o}),jo.$set(or)},i(o){Mr||(y(i.$$.fragment,o),y(D.$$.fragment,o),y(Jo.$$.fragment,o),y(Zo.$$.fragment,o),y(no.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(an.$$.fragment,o),y(dn.$$.fragment,o),y(ln.$$.fragment,o),y(cn.$$.fragment,o),y(hn.$$.fragment,o),y(mn.$$.fragment,o),y(fn.$$.fragment,o),y(_n.$$.fragment,o),y(gn.$$.fragment,o),y(vn.$$.fragment,o),y(bn.$$.fragment,o),y(Tn.$$.fragment,o),y(kn.$$.fragment,o),y(wn.$$.fragment,o),y(yn.$$.fragment,o),y(En.$$.fragment,o),y(Dn.$$.fragment,o),y(uo.$$.fragment,o),y(mo.$$.fragment,o),y(Fn.$$.fragment,o),y(zn.$$.fragment,o),y(Cn.$$.fragment,o),y(_o.$$.fragment,o),y(go.$$.fragment,o),y(vo.$$.fragment,o),y(On.$$.fragment,o),y(jn.$$.fragment,o),y(In.$$.fragment,o),y(To.$$.fragment,o),y(ko.$$.fragment,o),y(wo.$$.fragment,o),y(yo.$$.fragment,o),y(Eo.$$.fragment,o),y(Gn.$$.fragment,o),y(Bn.$$.fragment,o),y(Vn.$$.fragment,o),y(qo.$$.fragment,o),y($o.$$.fragment,o),y(Do.$$.fragment,o),y(Rn.$$.fragment,o),y(Un.$$.fragment,o),y(zo.$$.fragment,o),y(Zn.$$.fragment,o),y(xo.$$.fragment,o),y(So.$$.fragment,o),y(Yn.$$.fragment,o),y(es.$$.fragment,o),y(Co.$$.fragment,o),y(ss.$$.fragment,o),y(Oo.$$.fragment,o),y(jo.$$.fragment,o),Mr=!0)},o(o){E(i.$$.fragment,o),E(D.$$.fragment,o),E(Jo.$$.fragment,o),E(Zo.$$.fragment,o),E(no.$$.fragment,o),E(en.$$.fragment,o),E(tn.$$.fragment,o),E(nn.$$.fragment,o),E(an.$$.fragment,o),E(dn.$$.fragment,o),E(ln.$$.fragment,o),E(cn.$$.fragment,o),E(hn.$$.fragment,o),E(mn.$$.fragment,o),E(fn.$$.fragment,o),E(_n.$$.fragment,o),E(gn.$$.fragment,o),E(vn.$$.fragment,o),E(bn.$$.fragment,o),E(Tn.$$.fragment,o),E(kn.$$.fragment,o),E(wn.$$.fragment,o),E(yn.$$.fragment,o),E(En.$$.fragment,o),E(Dn.$$.fragment,o),E(uo.$$.fragment,o),E(mo.$$.fragment,o),E(Fn.$$.fragment,o),E(zn.$$.fragment,o),E(Cn.$$.fragment,o),E(_o.$$.fragment,o),E(go.$$.fragment,o),E(vo.$$.fragment,o),E(On.$$.fragment,o),E(jn.$$.fragment,o),E(In.$$.fragment,o),E(To.$$.fragment,o),E(ko.$$.fragment,o),E(wo.$$.fragment,o),E(yo.$$.fragment,o),E(Eo.$$.fragment,o),E(Gn.$$.fragment,o),E(Bn.$$.fragment,o),E(Vn.$$.fragment,o),E(qo.$$.fragment,o),E($o.$$.fragment,o),E(Do.$$.fragment,o),E(Rn.$$.fragment,o),E(Un.$$.fragment,o),E(zo.$$.fragment,o),E(Zn.$$.fragment,o),E(xo.$$.fragment,o),E(So.$$.fragment,o),E(Yn.$$.fragment,o),E(es.$$.fragment,o),E(Co.$$.fragment,o),E(ss.$$.fragment,o),E(Oo.$$.fragment,o),E(jo.$$.fragment,o),Mr=!1},d(o){t(l),o&&t(v),o&&t(p),L(i),o&&t(xe),o&&t(j),L(D),o&&t(Se),o&&t(G),o&&t(Me),o&&t(H),o&&t(Ce),o&&t(V),o&&t(me),o&&t(M),o&&t(Oe),o&&t(x),o&&t(ar),o&&t(to),o&&t(rr),o&&t(Dt),L(Jo),o&&t(dr),o&&t($e),L(Zo),L(no),o&&t(ir),o&&t(xt),L(en),o&&t(lr),o&&t(I),L(tn),L(nn),L(an),L(dn),L(ln),o&&t(cr),o&&t(St),L(cn),o&&t(hr),o&&t(De),L(hn),o&&t(pr),o&&t(Mt),L(mn),o&&t(ur),o&&t(Ct),L(fn),o&&t(mr),o&&t(Ot),L(_n),o&&t(fr),o&&t(jt),L(gn),o&&t(_r),o&&t(Pt),L(vn),o&&t(gr),o&&t(At),L(bn),o&&t(vr),o&&t(Nt),L(Tn),o&&t(br),o&&t(It),L(kn),o&&t(Tr),o&&t(Gt),L(wn),o&&t(kr),o&&t(Bt),L(yn),o&&t(wr),o&&t(Fe),L(En),L(Dn),L(uo),L(mo),o&&t(yr),o&&t(Wt),L(Fn),o&&t(Er),o&&t(ze),L(zn),L(Cn),L(_o),L(go),L(vo),o&&t(Lr),o&&t(Vt),L(On),o&&t(qr),o&&t(ce),L(jn),L(In),L(To),L(ko),L(wo),L(yo),L(Eo),o&&t($r),o&&t(Ut),L(Gn),o&&t(Dr),o&&t(he),L(Bn),L(Vn),L(qo),L($o),L(Do),o&&t(Fr),o&&t(Jt),L(Rn),o&&t(zr),o&&t(pe),L(Un),L(zo),L(Zn),L(xo),L(So),o&&t(xr),o&&t(Yt),L(Yn),o&&t(Sr),o&&t(ue),L(es),L(Co),L(ss),L(Oo),L(jo)}}}const fm={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function _m($){return Ru(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ym extends Qu{constructor(l){super();Wu(this,l,_m,mm,Hu,{})}}export{ym as default,fm as metadata};
