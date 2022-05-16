import{S as Nu,i as Iu,s as Gu,e as a,k as c,w as T,t as n,M as Bu,c as r,d as t,m as h,a as d,x as k,h as s,b as m,F as e,g,y as w,q as y,o as E,B as L,v as Qu,L as je}from"../../chunks/vendor-6b77c823.js";import{T as Lo}from"../../chunks/Tip-39098574.js";import{D as x}from"../../chunks/Docstring-1088f2fb.js";import{C as Ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ce}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Oe}from"../../chunks/ExampleCodeBlock-5212b321.js";function Wu($){let l,v,p,u,b;return u=new Ae({props:{code:`from transformers import LEDModel, LEDConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Hu($){let l,v,p,u,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,v),e(l,p),e(p,u),e(l,b)},d(i){i&&t(l)}}}function Vu($){let l,v,p,u,b;return u=new Ae({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Ru($){let l,v,p,u,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,v),e(l,p),e(p,u),e(l,b)},d(i){i&&t(l)}}}function Uu($){let l,v,p,u,b;return u=new Ae({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),v=n("Conditional generation example:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Conditional generation example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Xu($){let l,v,p,u,b;return u=new Ae({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),v=n("Summarization example:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Summarization example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Ju($){let l,v,p,u,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,v),e(l,p),e(p,u),e(l,b)},d(i){i&&t(l)}}}function Zu($){let l,v,p,u,b;return u=new Ae({props:{code:`import torch
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
`}}),{c(){l=a("p"),v=n("Example of single-label classification:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Example of single-label classification:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Ku($){let l,v;return l=new Ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,u){w(l,p,u),v=!0},p:je,i(p){v||(y(l.$$.fragment,p),v=!0)},o(p){E(l.$$.fragment,p),v=!1},d(p){L(l,p)}}}function Yu($){let l,v,p,u,b;return u=new Ae({props:{code:`import torch
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
`}}),{c(){l=a("p"),v=n("Example of multi-label classification:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Example of multi-label classification:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function em($){let l,v;return l=new Ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,u){w(l,p,u),v=!0},p:je,i(p){v||(y(l.$$.fragment,p),v=!0)},o(p){E(l.$$.fragment,p),v=!1},d(p){L(l,p)}}}function tm($){let l,v,p,u,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,v),e(l,p),e(p,u),e(l,b)},d(i){i&&t(l)}}}function om($){let l,v,p,u,b;return u=new Ae({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function nm($){let l,v;return l=new Ae({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,u){w(l,p,u),v=!0},p:je,i(p){v||(y(l.$$.fragment,p),v=!0)},o(p){E(l.$$.fragment,p),v=!1},d(p){L(l,p)}}}function sm($){let l,v,p,u,b,i,f,D,Pe,pe,F,Z,W,ee,Ne,H,Ie,qe,I,V,te,be,C,j,ue,oe,$e,me,R,Ge,De,O,Be,K,S,M,G,Qe,We,P,He,ne,Te;return{c(){l=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),p=c(),u=a("ul"),b=a("li"),i=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=a("li"),Pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),pe=c(),F=a("p"),Z=n("This second option is useful when using "),W=a("code"),ee=n("tf.keras.Model.fit"),Ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),Ie=n("model(inputs)"),qe=n("."),I=c(),V=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be=c(),C=a("ul"),j=a("li"),ue=n("a single Tensor with "),oe=a("code"),$e=n("input_ids"),me=n(" only and nothing else: "),R=a("code"),Ge=n("model(input_ids)"),De=c(),O=a("li"),Be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a("code"),S=n("model([input_ids, attention_mask])"),M=n(" or "),G=a("code"),Qe=n("model([input_ids, attention_mask, token_type_ids])"),We=c(),P=a("li"),He=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(q){l=r(q,"P",{});var z=d(l);v=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),p=h(q),u=r(q,"UL",{});var se=d(u);b=r(se,"LI",{});var ot=d(b);i=s(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),f=h(se),D=r(se,"LI",{});var nt=d(D);Pe=s(nt,"having all inputs as a list, tuple or dict in the first positional arguments."),nt.forEach(t),se.forEach(t),pe=h(q),F=r(q,"P",{});var N=d(F);Z=s(N,"This second option is useful when using "),W=r(N,"CODE",{});var st=d(W);ee=s(st,"tf.keras.Model.fit"),st.forEach(t),Ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var at=d(H);Ie=s(at,"model(inputs)"),at.forEach(t),qe=s(N,"."),N.forEach(t),I=h(q),V=r(q,"P",{});var Fe=d(V);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),be=h(q),C=r(q,"UL",{});var U=d(C);j=r(U,"LI",{});var ae=d(j);ue=s(ae,"a single Tensor with "),oe=r(ae,"CODE",{});var ze=d(oe);$e=s(ze,"input_ids"),ze.forEach(t),me=s(ae," only and nothing else: "),R=r(ae,"CODE",{});var rt=d(R);Ge=s(rt,"model(input_ids)"),rt.forEach(t),ae.forEach(t),De=h(U),O=r(U,"LI",{});var re=d(O);Be=s(re,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(re,"CODE",{});var dt=d(K);S=s(dt,"model([input_ids, attention_mask])"),dt.forEach(t),M=s(re," or "),G=r(re,"CODE",{});var de=d(G);Qe=s(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),re.forEach(t),We=h(U),P=r(U,"LI",{});var Ve=d(P);He=s(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=r(Ve,"CODE",{});var Re=d(ne);Te=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),U.forEach(t)},m(q,z){g(q,l,z),e(l,v),g(q,p,z),g(q,u,z),e(u,b),e(b,i),e(u,f),e(u,D),e(D,Pe),g(q,pe,z),g(q,F,z),e(F,Z),e(F,W),e(W,ee),e(F,Ne),e(F,H),e(H,Ie),e(F,qe),g(q,I,z),g(q,V,z),e(V,te),g(q,be,z),g(q,C,z),e(C,j),e(j,ue),e(j,oe),e(oe,$e),e(j,me),e(j,R),e(R,Ge),e(C,De),e(C,O),e(O,Be),e(O,K),e(K,S),e(O,M),e(O,G),e(G,Qe),e(C,We),e(C,P),e(P,He),e(P,ne),e(ne,Te)},d(q){q&&t(l),q&&t(p),q&&t(u),q&&t(pe),q&&t(F),q&&t(I),q&&t(V),q&&t(be),q&&t(C)}}}function am($){let l,v,p,u,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,v),e(l,p),e(p,u),e(l,b)},d(i){i&&t(l)}}}function rm($){let l,v,p,u,b;return u=new Ae({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),v=n("Example:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function dm($){let l,v,p,u,b,i,f,D,Pe,pe,F,Z,W,ee,Ne,H,Ie,qe,I,V,te,be,C,j,ue,oe,$e,me,R,Ge,De,O,Be,K,S,M,G,Qe,We,P,He,ne,Te;return{c(){l=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),p=c(),u=a("ul"),b=a("li"),i=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=a("li"),Pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),pe=c(),F=a("p"),Z=n("This second option is useful when using "),W=a("code"),ee=n("tf.keras.Model.fit"),Ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),Ie=n("model(inputs)"),qe=n("."),I=c(),V=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be=c(),C=a("ul"),j=a("li"),ue=n("a single Tensor with "),oe=a("code"),$e=n("input_ids"),me=n(" only and nothing else: "),R=a("code"),Ge=n("model(input_ids)"),De=c(),O=a("li"),Be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a("code"),S=n("model([input_ids, attention_mask])"),M=n(" or "),G=a("code"),Qe=n("model([input_ids, attention_mask, token_type_ids])"),We=c(),P=a("li"),He=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(q){l=r(q,"P",{});var z=d(l);v=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),p=h(q),u=r(q,"UL",{});var se=d(u);b=r(se,"LI",{});var ot=d(b);i=s(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),f=h(se),D=r(se,"LI",{});var nt=d(D);Pe=s(nt,"having all inputs as a list, tuple or dict in the first positional arguments."),nt.forEach(t),se.forEach(t),pe=h(q),F=r(q,"P",{});var N=d(F);Z=s(N,"This second option is useful when using "),W=r(N,"CODE",{});var st=d(W);ee=s(st,"tf.keras.Model.fit"),st.forEach(t),Ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var at=d(H);Ie=s(at,"model(inputs)"),at.forEach(t),qe=s(N,"."),N.forEach(t),I=h(q),V=r(q,"P",{});var Fe=d(V);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),be=h(q),C=r(q,"UL",{});var U=d(C);j=r(U,"LI",{});var ae=d(j);ue=s(ae,"a single Tensor with "),oe=r(ae,"CODE",{});var ze=d(oe);$e=s(ze,"input_ids"),ze.forEach(t),me=s(ae," only and nothing else: "),R=r(ae,"CODE",{});var rt=d(R);Ge=s(rt,"model(input_ids)"),rt.forEach(t),ae.forEach(t),De=h(U),O=r(U,"LI",{});var re=d(O);Be=s(re,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(re,"CODE",{});var dt=d(K);S=s(dt,"model([input_ids, attention_mask])"),dt.forEach(t),M=s(re," or "),G=r(re,"CODE",{});var de=d(G);Qe=s(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),re.forEach(t),We=h(U),P=r(U,"LI",{});var Ve=d(P);He=s(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=r(Ve,"CODE",{});var Re=d(ne);Te=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),U.forEach(t)},m(q,z){g(q,l,z),e(l,v),g(q,p,z),g(q,u,z),e(u,b),e(b,i),e(u,f),e(u,D),e(D,Pe),g(q,pe,z),g(q,F,z),e(F,Z),e(F,W),e(W,ee),e(F,Ne),e(F,H),e(H,Ie),e(F,qe),g(q,I,z),g(q,V,z),e(V,te),g(q,be,z),g(q,C,z),e(C,j),e(j,ue),e(j,oe),e(oe,$e),e(j,me),e(j,R),e(R,Ge),e(C,De),e(C,O),e(O,Be),e(O,K),e(K,S),e(O,M),e(O,G),e(G,Qe),e(C,We),e(C,P),e(P,He),e(P,ne),e(ne,Te)},d(q){q&&t(l),q&&t(p),q&&t(u),q&&t(pe),q&&t(F),q&&t(I),q&&t(V),q&&t(be),q&&t(C)}}}function im($){let l,v,p,u,b;return{c(){l=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,v),e(l,p),e(p,u),e(l,b)},d(i){i&&t(l)}}}function lm($){let l,v,p,u,b;return u=new Ae({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),v=n("Examples:"),p=c(),T(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);v=s(f,"Examples:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,v),g(i,p,f),w(u,i,f),b=!0},p:je,i(i){b||(y(u.$$.fragment,i),b=!0)},o(i){E(u.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function cm($){let l,v,p,u,b,i,f,D,Pe,pe,F,Z,W,ee,Ne,H,Ie,qe,I,V,te,be,C,j,ue,oe,$e,me,R,Ge,De,O,Be,K,S,M,G,Qe,We,P,He,ne,Te,q,z,se,ot,nt,N,st,at,Fe,U,ae,ze,rt,re,dt,de,Ve,Re,ad,rd,qs,dd,id,ld,ke,cd,$s,hd,pd,Ds,ud,md,Bn,fd,_d,Fs,gd,vd,bd,X,Td,zs,kd,wd,xs,yd,Ed,Qn,Ld,qd,Ss,$d,Dd,Ms,Fd,zd,Cs,xd,Sd,Md,it,Cd,Os,Od,jd,js,Ad,Pd,Nd,qo,Id,$o,Gd,Bd,Qd,Do,Wd,Fo,Hd,Vd,Wa,jt,Rd,zo,Ud,Xd,Ha,lt,At,As,xo,Jd,Ps,Zd,Va,we,So,Kd,ct,Yd,Wn,ei,ti,Mo,oi,ni,si,ht,ai,Hn,ri,di,Vn,ii,li,ci,Pt,Ra,pt,Nt,Ns,Co,hi,Is,pi,Ua,A,Oo,ui,Gs,mi,fi,It,Rn,_i,gi,Un,vi,bi,Ti,jo,ki,Xn,wi,yi,Ei,Ue,Ao,Li,Bs,qi,$i,Po,Jn,Di,Qs,Fi,zi,Zn,xi,Ws,Si,Mi,Gt,No,Ci,Io,Oi,Hs,ji,Ai,Pi,Bt,Go,Ni,Vs,Ii,Gi,Kn,Bo,Xa,ut,Qt,Rs,Qo,Bi,Us,Qi,Ja,ye,Wo,Wi,Ho,Hi,Xs,Vi,Ri,Ui,Wt,Yn,Xi,Ji,es,Zi,Ki,Yi,Vo,el,ts,tl,ol,Za,mt,Ht,Js,Ro,nl,Zs,sl,Ka,ft,Uo,al,Ks,rl,Ya,_t,Xo,dl,Ys,il,er,gt,Jo,ll,ea,cl,tr,vt,Zo,hl,ta,pl,or,bt,Ko,ul,oa,ml,nr,Tt,Yo,fl,na,_l,sr,kt,en,gl,sa,vl,ar,wt,tn,bl,aa,Tl,rr,yt,Vt,ra,on,kl,da,wl,dr,Ee,nn,yl,sn,El,os,Ll,ql,$l,an,Dl,rn,Fl,zl,xl,xe,dn,Sl,Et,Ml,ns,Cl,Ol,ia,jl,Al,Pl,Rt,Nl,Ut,ir,Lt,Xt,la,ln,Il,ca,Gl,lr,Le,cn,Bl,hn,Ql,ss,Wl,Hl,Vl,pn,Rl,un,Ul,Xl,Jl,fe,mn,Zl,qt,Kl,as,Yl,ec,ha,tc,oc,nc,Jt,sc,Zt,ac,Kt,cr,$t,Yt,pa,fn,rc,ua,dc,hr,ie,_n,ic,ma,lc,cc,gn,hc,rs,pc,uc,mc,vn,fc,bn,_c,gc,vc,B,Tn,bc,Dt,Tc,ds,kc,wc,fa,yc,Ec,Lc,eo,qc,to,$c,oo,Dc,no,Fc,so,pr,Ft,ao,_a,kn,zc,ga,xc,ur,le,wn,Sc,zt,Mc,va,Cc,Oc,ba,jc,Ac,Pc,yn,Nc,is,Ic,Gc,Bc,En,Qc,Ln,Wc,Hc,Vc,_e,qn,Rc,xt,Uc,ls,Xc,Jc,Ta,Zc,Kc,Yc,ro,eh,io,th,lo,mr,St,co,ka,$n,oh,wa,nh,fr,ce,Dn,sh,Fn,ah,cs,rh,dh,ih,zn,lh,xn,ch,hh,ph,ho,uh,Se,Sn,mh,Mt,fh,hs,_h,gh,ya,vh,bh,Th,po,kh,uo,_r,Ct,mo,Ea,Mn,wh,La,yh,gr,he,Cn,Eh,On,Lh,ps,qh,$h,Dh,jn,Fh,An,zh,xh,Sh,fo,Mh,Me,Pn,Ch,Ot,Oh,us,jh,Ah,qa,Ph,Nh,Ih,_o,Gh,go,vr;return i=new Ce({}),ee=new Ce({}),xo=new Ce({}),So=new x({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/configuration_led.py#L31"}}),Pt=new Oe({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[Wu]},$$scope:{ctx:$}}}),Co=new Ce({}),Oo=new x({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/tokenization_led.py#L43"}}),Ao=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new x({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/bart/tokenization_bart.py#L309"}}),Qo=new Ce({}),Wo=new x({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/tokenization_led_fast.py#L44"}}),Ro=new Ce({}),Uo=new x({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L1125"}}),Xo=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L1168"}}),Jo=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L1236"}}),Zo=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L1303"}}),Ko=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L1370"}}),Yo=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_tf_led.py#L1330"}}),en=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_tf_led.py#L1373"}}),tn=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_tf_led.py#L1441"}}),on=new Ce({}),nn=new x({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2157"}}),dn=new x({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2184",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new Lo({props:{$$slots:{default:[Hu]},$$scope:{ctx:$}}}),Ut=new Oe({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[Vu]},$$scope:{ctx:$}}}),ln=new Ce({}),cn=new x({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2280"}}),mn=new x({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2324",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new Lo({props:{$$slots:{default:[Ru]},$$scope:{ctx:$}}}),Zt=new Oe({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[Uu]},$$scope:{ctx:$}}}),Kt=new Oe({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[Xu]},$$scope:{ctx:$}}}),fn=new Ce({}),_n=new x({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2471"}}),Tn=new x({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2484",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new Lo({props:{$$slots:{default:[Ju]},$$scope:{ctx:$}}}),to=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[Zu]},$$scope:{ctx:$}}}),oo=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[Ku]},$$scope:{ctx:$}}}),no=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-3",$$slots:{default:[Yu]},$$scope:{ctx:$}}}),so=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-4",$$slots:{default:[em]},$$scope:{ctx:$}}}),kn=new Ce({}),wn=new x({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2599"}}),qn=new x({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_led.py#L2611",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new Lo({props:{$$slots:{default:[tm]},$$scope:{ctx:$}}}),io=new Oe({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[om]},$$scope:{ctx:$}}}),lo=new Oe({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example-2",$$slots:{default:[nm]},$$scope:{ctx:$}}}),$n=new Ce({}),Dn=new x({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_tf_led.py#L2191"}}),ho=new Lo({props:{$$slots:{default:[sm]},$$scope:{ctx:$}}}),Sn=new x({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_tf_led.py#L2203",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new Lo({props:{$$slots:{default:[am]},$$scope:{ctx:$}}}),uo=new Oe({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[rm]},$$scope:{ctx:$}}}),Mn=new Ce({}),Cn=new x({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_tf_led.py#L2279"}}),fo=new Lo({props:{$$slots:{default:[dm]},$$scope:{ctx:$}}}),Pn=new x({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/led/modeling_tf_led.py#L2312",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.19.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_o=new Lo({props:{$$slots:{default:[im]},$$scope:{ctx:$}}}),go=new Oe({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[lm]},$$scope:{ctx:$}}}),{c(){l=a("meta"),v=c(),p=a("h1"),u=a("a"),b=a("span"),T(i.$$.fragment),f=c(),D=a("span"),Pe=n("LED"),pe=c(),F=a("h2"),Z=a("a"),W=a("span"),T(ee.$$.fragment),Ne=c(),H=a("span"),Ie=n("Overview"),qe=c(),I=a("p"),V=n("The LED model was proposed in "),te=a("a"),be=n("Longformer: The Long-Document Transformer"),C=n(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),j=c(),ue=a("p"),oe=n("The abstract from the paper is the following:"),$e=c(),me=a("p"),R=a("em"),Ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),De=c(),O=a("p"),Be=n("Tips:"),K=c(),S=a("ul"),M=a("li"),G=a("a"),Qe=n("LEDForConditionalGeneration"),We=n(` is an extension of
`),P=a("a"),He=n("BartForConditionalGeneration"),ne=n(" exchanging the traditional "),Te=a("em"),q=n("self-attention"),z=n(` layer with
`),se=a("em"),ot=n("Longformer"),nt=n("\u2019s "),N=a("em"),st=n("chunked self-attention"),at=n(" layer. "),Fe=a("a"),U=n("LEDTokenizer"),ae=n(` is an alias of
`),ze=a("a"),rt=n("BartTokenizer"),re=n("."),dt=c(),de=a("li"),Ve=n("LED works very well on long-range "),Re=a("em"),ad=n("sequence-to-sequence"),rd=n(" tasks where the "),qs=a("code"),dd=n("input_ids"),id=n(` largely exceed a length of
1024 tokens.`),ld=c(),ke=a("li"),cd=n("LED pads the "),$s=a("code"),hd=n("input_ids"),pd=n(" to be a multiple of "),Ds=a("code"),ud=n("config.attention_window"),md=n(` if required. Therefore a small speed-up is
gained, when `),Bn=a("a"),fd=n("LEDTokenizer"),_d=n(" is used with the "),Fs=a("code"),gd=n("pad_to_multiple_of"),vd=n(" argument."),bd=c(),X=a("li"),Td=n("LED makes use of "),zs=a("em"),kd=n("global attention"),wd=n(" by means of the "),xs=a("code"),yd=n("global_attention_mask"),Ed=n(` (see
`),Qn=a("a"),Ld=n("LongformerModel"),qd=n("). For summarization, it is advised to put "),Ss=a("em"),$d=n("global attention"),Dd=n(` only on the first
`),Ms=a("code"),Fd=n("<s>"),zd=n(" token. For question answering, it is advised to put "),Cs=a("em"),xd=n("global attention"),Sd=n(" on all tokens of the question."),Md=c(),it=a("li"),Cd=n("To fine-tune LED on all 16384, it is necessary to enable "),Os=a("em"),Od=n("gradient checkpointing"),jd=n(` by executing
`),js=a("code"),Ad=n("model.gradient_checkpointing_enable()"),Pd=n("."),Nd=c(),qo=a("li"),Id=n("A notebook showing how to evaluate LED, can be accessed "),$o=a("a"),Gd=n("here"),Bd=n("."),Qd=c(),Do=a("li"),Wd=n("A notebook showing how to fine-tune LED, can be accessed "),Fo=a("a"),Hd=n("here"),Vd=n("."),Wa=c(),jt=a("p"),Rd=n("This model was contributed by "),zo=a("a"),Ud=n("patrickvonplaten"),Xd=n("."),Ha=c(),lt=a("h2"),At=a("a"),As=a("span"),T(xo.$$.fragment),Jd=c(),Ps=a("span"),Zd=n("LEDConfig"),Va=c(),we=a("div"),T(So.$$.fragment),Kd=c(),ct=a("p"),Yd=n("This is the configuration class to store the configuration of a "),Wn=a("a"),ei=n("LEDModel"),ti=n(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Mo=a("a"),oi=n("allenai/led-base-16384"),ni=n(" architecture."),si=c(),ht=a("p"),ai=n("Configuration objects inherit from "),Hn=a("a"),ri=n("PretrainedConfig"),di=n(` and can be used to control the model outputs. Read the
documentation from `),Vn=a("a"),ii=n("PretrainedConfig"),li=n(" for more information."),ci=c(),T(Pt.$$.fragment),Ra=c(),pt=a("h2"),Nt=a("a"),Ns=a("span"),T(Co.$$.fragment),hi=c(),Is=a("span"),pi=n("LEDTokenizer"),Ua=c(),A=a("div"),T(Oo.$$.fragment),ui=c(),Gs=a("p"),mi=n("Construct a LED tokenizer."),fi=c(),It=a("p"),Rn=a("a"),_i=n("LEDTokenizer"),gi=n(" is identical to "),Un=a("a"),vi=n("BartTokenizer"),bi=n(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Ti=c(),jo=a("p"),ki=n("Refer to superclass "),Xn=a("a"),wi=n("BartTokenizer"),yi=n(" for usage examples and documentation concerning parameters."),Ei=c(),Ue=a("div"),T(Ao.$$.fragment),Li=c(),Bs=a("p"),qi=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),$i=c(),Po=a("ul"),Jn=a("li"),Di=n("single sequence: "),Qs=a("code"),Fi=n("<s> X </s>"),zi=c(),Zn=a("li"),xi=n("pair of sequences: "),Ws=a("code"),Si=n("<s> A </s></s> B </s>"),Mi=c(),Gt=a("div"),T(No.$$.fragment),Ci=c(),Io=a("p"),Oi=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Hs=a("code"),ji=n("prepare_for_model"),Ai=n(" method."),Pi=c(),Bt=a("div"),T(Go.$$.fragment),Ni=c(),Vs=a("p"),Ii=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Gi=c(),Kn=a("div"),T(Bo.$$.fragment),Xa=c(),ut=a("h2"),Qt=a("a"),Rs=a("span"),T(Qo.$$.fragment),Bi=c(),Us=a("span"),Qi=n("LEDTokenizerFast"),Ja=c(),ye=a("div"),T(Wo.$$.fragment),Wi=c(),Ho=a("p"),Hi=n("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Xs=a("em"),Vi=n("tokenizers"),Ri=n(" library)."),Ui=c(),Wt=a("p"),Yn=a("a"),Xi=n("LEDTokenizerFast"),Ji=n(" is identical to "),es=a("a"),Zi=n("BartTokenizerFast"),Ki=n(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Yi=c(),Vo=a("p"),el=n("Refer to superclass "),ts=a("a"),tl=n("BartTokenizerFast"),ol=n(" for usage examples and documentation concerning parameters."),Za=c(),mt=a("h2"),Ht=a("a"),Js=a("span"),T(Ro.$$.fragment),nl=c(),Zs=a("span"),sl=n("LED specific outputs"),Ka=c(),ft=a("div"),T(Uo.$$.fragment),al=c(),Ks=a("p"),rl=n("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Ya=c(),_t=a("div"),T(Xo.$$.fragment),dl=c(),Ys=a("p"),il=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),er=c(),gt=a("div"),T(Jo.$$.fragment),ll=c(),ea=a("p"),cl=n("Base class for sequence-to-sequence language models outputs."),tr=c(),vt=a("div"),T(Zo.$$.fragment),hl=c(),ta=a("p"),pl=n("Base class for outputs of sequence-to-sequence sentence classification models."),or=c(),bt=a("div"),T(Ko.$$.fragment),ul=c(),oa=a("p"),ml=n("Base class for outputs of sequence-to-sequence question answering models."),nr=c(),Tt=a("div"),T(Yo.$$.fragment),fl=c(),na=a("p"),_l=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),sr=c(),kt=a("div"),T(en.$$.fragment),gl=c(),sa=a("p"),vl=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),ar=c(),wt=a("div"),T(tn.$$.fragment),bl=c(),aa=a("p"),Tl=n("Base class for sequence-to-sequence language models outputs."),rr=c(),yt=a("h2"),Vt=a("a"),ra=a("span"),T(on.$$.fragment),kl=c(),da=a("span"),wl=n("LEDModel"),dr=c(),Ee=a("div"),T(nn.$$.fragment),yl=c(),sn=a("p"),El=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),os=a("a"),Ll=n("PreTrainedModel"),ql=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),$l=c(),an=a("p"),Dl=n("This model is also a PyTorch "),rn=a("a"),Fl=n("torch.nn.Module"),zl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),xl=c(),xe=a("div"),T(dn.$$.fragment),Sl=c(),Et=a("p"),Ml=n("The "),ns=a("a"),Cl=n("LEDModel"),Ol=n(" forward method, overrides the "),ia=a("code"),jl=n("__call__"),Al=n(" special method."),Pl=c(),T(Rt.$$.fragment),Nl=c(),T(Ut.$$.fragment),ir=c(),Lt=a("h2"),Xt=a("a"),la=a("span"),T(ln.$$.fragment),Il=c(),ca=a("span"),Gl=n("LEDForConditionalGeneration"),lr=c(),Le=a("div"),T(cn.$$.fragment),Bl=c(),hn=a("p"),Ql=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ss=a("a"),Wl=n("PreTrainedModel"),Hl=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Vl=c(),pn=a("p"),Rl=n("This model is also a PyTorch "),un=a("a"),Ul=n("torch.nn.Module"),Xl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Jl=c(),fe=a("div"),T(mn.$$.fragment),Zl=c(),qt=a("p"),Kl=n("The "),as=a("a"),Yl=n("LEDForConditionalGeneration"),ec=n(" forward method, overrides the "),ha=a("code"),tc=n("__call__"),oc=n(" special method."),nc=c(),T(Jt.$$.fragment),sc=c(),T(Zt.$$.fragment),ac=c(),T(Kt.$$.fragment),cr=c(),$t=a("h2"),Yt=a("a"),pa=a("span"),T(fn.$$.fragment),rc=c(),ua=a("span"),dc=n("LEDForSequenceClassification"),hr=c(),ie=a("div"),T(_n.$$.fragment),ic=c(),ma=a("p"),lc=n(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),cc=c(),gn=a("p"),hc=n("This model inherits from "),rs=a("a"),pc=n("PreTrainedModel"),uc=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),mc=c(),vn=a("p"),fc=n("This model is also a PyTorch "),bn=a("a"),_c=n("torch.nn.Module"),gc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),vc=c(),B=a("div"),T(Tn.$$.fragment),bc=c(),Dt=a("p"),Tc=n("The "),ds=a("a"),kc=n("LEDForSequenceClassification"),wc=n(" forward method, overrides the "),fa=a("code"),yc=n("__call__"),Ec=n(" special method."),Lc=c(),T(eo.$$.fragment),qc=c(),T(to.$$.fragment),$c=c(),T(oo.$$.fragment),Dc=c(),T(no.$$.fragment),Fc=c(),T(so.$$.fragment),pr=c(),Ft=a("h2"),ao=a("a"),_a=a("span"),T(kn.$$.fragment),zc=c(),ga=a("span"),xc=n("LEDForQuestionAnswering"),ur=c(),le=a("div"),T(wn.$$.fragment),Sc=c(),zt=a("p"),Mc=n(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),va=a("code"),Cc=n("span start logits"),Oc=n(" and "),ba=a("code"),jc=n("span end logits"),Ac=n(")."),Pc=c(),yn=a("p"),Nc=n("This model inherits from "),is=a("a"),Ic=n("PreTrainedModel"),Gc=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Bc=c(),En=a("p"),Qc=n("This model is also a PyTorch "),Ln=a("a"),Wc=n("torch.nn.Module"),Hc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Vc=c(),_e=a("div"),T(qn.$$.fragment),Rc=c(),xt=a("p"),Uc=n("The "),ls=a("a"),Xc=n("LEDForQuestionAnswering"),Jc=n(" forward method, overrides the "),Ta=a("code"),Zc=n("__call__"),Kc=n(" special method."),Yc=c(),T(ro.$$.fragment),eh=c(),T(io.$$.fragment),th=c(),T(lo.$$.fragment),mr=c(),St=a("h2"),co=a("a"),ka=a("span"),T($n.$$.fragment),oh=c(),wa=a("span"),nh=n("TFLEDModel"),fr=c(),ce=a("div"),T(Dn.$$.fragment),sh=c(),Fn=a("p"),ah=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=a("a"),rh=n("TFPreTrainedModel"),dh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih=c(),zn=a("p"),lh=n("This model is also a "),xn=a("a"),ch=n("tf.keras.Model"),hh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ph=c(),T(ho.$$.fragment),uh=c(),Se=a("div"),T(Sn.$$.fragment),mh=c(),Mt=a("p"),fh=n("The "),hs=a("a"),_h=n("TFLEDModel"),gh=n(" forward method, overrides the "),ya=a("code"),vh=n("__call__"),bh=n(" special method."),Th=c(),T(po.$$.fragment),kh=c(),T(uo.$$.fragment),_r=c(),Ct=a("h2"),mo=a("a"),Ea=a("span"),T(Mn.$$.fragment),wh=c(),La=a("span"),yh=n("TFLEDForConditionalGeneration"),gr=c(),he=a("div"),T(Cn.$$.fragment),Eh=c(),On=a("p"),Lh=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ps=a("a"),qh=n("TFPreTrainedModel"),$h=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh=c(),jn=a("p"),Fh=n("This model is also a "),An=a("a"),zh=n("tf.keras.Model"),xh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sh=c(),T(fo.$$.fragment),Mh=c(),Me=a("div"),T(Pn.$$.fragment),Ch=c(),Ot=a("p"),Oh=n("The "),us=a("a"),jh=n("TFLEDForConditionalGeneration"),Ah=n(" forward method, overrides the "),qa=a("code"),Ph=n("__call__"),Nh=n(" special method."),Ih=c(),T(_o.$$.fragment),Gh=c(),T(go.$$.fragment),this.h()},l(o){const _=Bu('[data-svelte="svelte-1phssyn"]',document.head);l=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=h(o),p=r(o,"H1",{class:!0});var Nn=d(p);u=r(Nn,"A",{id:!0,class:!0,href:!0});var $a=d(u);b=r($a,"SPAN",{});var Da=d(b);k(i.$$.fragment,Da),Da.forEach(t),$a.forEach(t),f=h(Nn),D=r(Nn,"SPAN",{});var Fa=d(D);Pe=s(Fa,"LED"),Fa.forEach(t),Nn.forEach(t),pe=h(o),F=r(o,"H2",{class:!0});var In=d(F);Z=r(In,"A",{id:!0,class:!0,href:!0});var za=d(Z);W=r(za,"SPAN",{});var xa=d(W);k(ee.$$.fragment,xa),xa.forEach(t),za.forEach(t),Ne=h(In),H=r(In,"SPAN",{});var Sa=d(H);Ie=s(Sa,"Overview"),Sa.forEach(t),In.forEach(t),qe=h(o),I=r(o,"P",{});var Gn=d(I);V=s(Gn,"The LED model was proposed in "),te=r(Gn,"A",{href:!0,rel:!0});var Ma=d(te);be=s(Ma,"Longformer: The Long-Document Transformer"),Ma.forEach(t),C=s(Gn,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Gn.forEach(t),j=h(o),ue=r(o,"P",{});var Ca=d(ue);oe=s(Ca,"The abstract from the paper is the following:"),Ca.forEach(t),$e=h(o),me=r(o,"P",{});var Oa=d(me);R=r(Oa,"EM",{});var ja=d(R);Ge=s(ja,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),ja.forEach(t),Oa.forEach(t),De=h(o),O=r(o,"P",{});var Aa=d(O);Be=s(Aa,"Tips:"),Aa.forEach(t),K=h(o),S=r(o,"UL",{});var J=d(S);M=r(J,"LI",{});var Q=d(M);G=r(Q,"A",{href:!0});var Pa=d(G);Qe=s(Pa,"LEDForConditionalGeneration"),Pa.forEach(t),We=s(Q,` is an extension of
`),P=r(Q,"A",{href:!0});var Na=d(P);He=s(Na,"BartForConditionalGeneration"),Na.forEach(t),ne=s(Q," exchanging the traditional "),Te=r(Q,"EM",{});var Ia=d(Te);q=s(Ia,"self-attention"),Ia.forEach(t),z=s(Q,` layer with
`),se=r(Q,"EM",{});var Ga=d(se);ot=s(Ga,"Longformer"),Ga.forEach(t),nt=s(Q,"\u2019s "),N=r(Q,"EM",{});var Wh=d(N);st=s(Wh,"chunked self-attention"),Wh.forEach(t),at=s(Q," layer. "),Fe=r(Q,"A",{href:!0});var Hh=d(Fe);U=s(Hh,"LEDTokenizer"),Hh.forEach(t),ae=s(Q,` is an alias of
`),ze=r(Q,"A",{href:!0});var Vh=d(ze);rt=s(Vh,"BartTokenizer"),Vh.forEach(t),re=s(Q,"."),Q.forEach(t),dt=h(J),de=r(J,"LI",{});var ms=d(de);Ve=s(ms,"LED works very well on long-range "),Re=r(ms,"EM",{});var Rh=d(Re);ad=s(Rh,"sequence-to-sequence"),Rh.forEach(t),rd=s(ms," tasks where the "),qs=r(ms,"CODE",{});var Uh=d(qs);dd=s(Uh,"input_ids"),Uh.forEach(t),id=s(ms,` largely exceed a length of
1024 tokens.`),ms.forEach(t),ld=h(J),ke=r(J,"LI",{});var Xe=d(ke);cd=s(Xe,"LED pads the "),$s=r(Xe,"CODE",{});var Xh=d($s);hd=s(Xh,"input_ids"),Xh.forEach(t),pd=s(Xe," to be a multiple of "),Ds=r(Xe,"CODE",{});var Jh=d(Ds);ud=s(Jh,"config.attention_window"),Jh.forEach(t),md=s(Xe,` if required. Therefore a small speed-up is
gained, when `),Bn=r(Xe,"A",{href:!0});var Zh=d(Bn);fd=s(Zh,"LEDTokenizer"),Zh.forEach(t),_d=s(Xe," is used with the "),Fs=r(Xe,"CODE",{});var Kh=d(Fs);gd=s(Kh,"pad_to_multiple_of"),Kh.forEach(t),vd=s(Xe," argument."),Xe.forEach(t),bd=h(J),X=r(J,"LI",{});var ge=d(X);Td=s(ge,"LED makes use of "),zs=r(ge,"EM",{});var Yh=d(zs);kd=s(Yh,"global attention"),Yh.forEach(t),wd=s(ge," by means of the "),xs=r(ge,"CODE",{});var ep=d(xs);yd=s(ep,"global_attention_mask"),ep.forEach(t),Ed=s(ge,` (see
`),Qn=r(ge,"A",{href:!0});var tp=d(Qn);Ld=s(tp,"LongformerModel"),tp.forEach(t),qd=s(ge,"). For summarization, it is advised to put "),Ss=r(ge,"EM",{});var op=d(Ss);$d=s(op,"global attention"),op.forEach(t),Dd=s(ge,` only on the first
`),Ms=r(ge,"CODE",{});var np=d(Ms);Fd=s(np,"<s>"),np.forEach(t),zd=s(ge," token. For question answering, it is advised to put "),Cs=r(ge,"EM",{});var sp=d(Cs);xd=s(sp,"global attention"),sp.forEach(t),Sd=s(ge," on all tokens of the question."),ge.forEach(t),Md=h(J),it=r(J,"LI",{});var fs=d(it);Cd=s(fs,"To fine-tune LED on all 16384, it is necessary to enable "),Os=r(fs,"EM",{});var ap=d(Os);Od=s(ap,"gradient checkpointing"),ap.forEach(t),jd=s(fs,` by executing
`),js=r(fs,"CODE",{});var rp=d(js);Ad=s(rp,"model.gradient_checkpointing_enable()"),rp.forEach(t),Pd=s(fs,"."),fs.forEach(t),Nd=h(J),qo=r(J,"LI",{});var br=d(qo);Id=s(br,"A notebook showing how to evaluate LED, can be accessed "),$o=r(br,"A",{href:!0,rel:!0});var dp=d($o);Gd=s(dp,"here"),dp.forEach(t),Bd=s(br,"."),br.forEach(t),Qd=h(J),Do=r(J,"LI",{});var Tr=d(Do);Wd=s(Tr,"A notebook showing how to fine-tune LED, can be accessed "),Fo=r(Tr,"A",{href:!0,rel:!0});var ip=d(Fo);Hd=s(ip,"here"),ip.forEach(t),Vd=s(Tr,"."),Tr.forEach(t),J.forEach(t),Wa=h(o),jt=r(o,"P",{});var kr=d(jt);Rd=s(kr,"This model was contributed by "),zo=r(kr,"A",{href:!0,rel:!0});var lp=d(zo);Ud=s(lp,"patrickvonplaten"),lp.forEach(t),Xd=s(kr,"."),kr.forEach(t),Ha=h(o),lt=r(o,"H2",{class:!0});var wr=d(lt);At=r(wr,"A",{id:!0,class:!0,href:!0});var cp=d(At);As=r(cp,"SPAN",{});var hp=d(As);k(xo.$$.fragment,hp),hp.forEach(t),cp.forEach(t),Jd=h(wr),Ps=r(wr,"SPAN",{});var pp=d(Ps);Zd=s(pp,"LEDConfig"),pp.forEach(t),wr.forEach(t),Va=h(o),we=r(o,"DIV",{class:!0});var vo=d(we);k(So.$$.fragment,vo),Kd=h(vo),ct=r(vo,"P",{});var _s=d(ct);Yd=s(_s,"This is the configuration class to store the configuration of a "),Wn=r(_s,"A",{href:!0});var up=d(Wn);ei=s(up,"LEDModel"),up.forEach(t),ti=s(_s,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Mo=r(_s,"A",{href:!0,rel:!0});var mp=d(Mo);oi=s(mp,"allenai/led-base-16384"),mp.forEach(t),ni=s(_s," architecture."),_s.forEach(t),si=h(vo),ht=r(vo,"P",{});var gs=d(ht);ai=s(gs,"Configuration objects inherit from "),Hn=r(gs,"A",{href:!0});var fp=d(Hn);ri=s(fp,"PretrainedConfig"),fp.forEach(t),di=s(gs,` and can be used to control the model outputs. Read the
documentation from `),Vn=r(gs,"A",{href:!0});var _p=d(Vn);ii=s(_p,"PretrainedConfig"),_p.forEach(t),li=s(gs," for more information."),gs.forEach(t),ci=h(vo),k(Pt.$$.fragment,vo),vo.forEach(t),Ra=h(o),pt=r(o,"H2",{class:!0});var yr=d(pt);Nt=r(yr,"A",{id:!0,class:!0,href:!0});var gp=d(Nt);Ns=r(gp,"SPAN",{});var vp=d(Ns);k(Co.$$.fragment,vp),vp.forEach(t),gp.forEach(t),hi=h(yr),Is=r(yr,"SPAN",{});var bp=d(Is);pi=s(bp,"LEDTokenizer"),bp.forEach(t),yr.forEach(t),Ua=h(o),A=r(o,"DIV",{class:!0});var Y=d(A);k(Oo.$$.fragment,Y),ui=h(Y),Gs=r(Y,"P",{});var Tp=d(Gs);mi=s(Tp,"Construct a LED tokenizer."),Tp.forEach(t),fi=h(Y),It=r(Y,"P",{});var Ba=d(It);Rn=r(Ba,"A",{href:!0});var kp=d(Rn);_i=s(kp,"LEDTokenizer"),kp.forEach(t),gi=s(Ba," is identical to "),Un=r(Ba,"A",{href:!0});var wp=d(Un);vi=s(wp,"BartTokenizer"),wp.forEach(t),bi=s(Ba,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Ba.forEach(t),Ti=h(Y),jo=r(Y,"P",{});var Er=d(jo);ki=s(Er,"Refer to superclass "),Xn=r(Er,"A",{href:!0});var yp=d(Xn);wi=s(yp,"BartTokenizer"),yp.forEach(t),yi=s(Er," for usage examples and documentation concerning parameters."),Er.forEach(t),Ei=h(Y),Ue=r(Y,"DIV",{class:!0});var vs=d(Ue);k(Ao.$$.fragment,vs),Li=h(vs),Bs=r(vs,"P",{});var Ep=d(Bs);qi=s(Ep,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Ep.forEach(t),$i=h(vs),Po=r(vs,"UL",{});var Lr=d(Po);Jn=r(Lr,"LI",{});var Bh=d(Jn);Di=s(Bh,"single sequence: "),Qs=r(Bh,"CODE",{});var Lp=d(Qs);Fi=s(Lp,"<s> X </s>"),Lp.forEach(t),Bh.forEach(t),zi=h(Lr),Zn=r(Lr,"LI",{});var Qh=d(Zn);xi=s(Qh,"pair of sequences: "),Ws=r(Qh,"CODE",{});var qp=d(Ws);Si=s(qp,"<s> A </s></s> B </s>"),qp.forEach(t),Qh.forEach(t),Lr.forEach(t),vs.forEach(t),Mi=h(Y),Gt=r(Y,"DIV",{class:!0});var qr=d(Gt);k(No.$$.fragment,qr),Ci=h(qr),Io=r(qr,"P",{});var $r=d(Io);Oi=s($r,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Hs=r($r,"CODE",{});var $p=d(Hs);ji=s($p,"prepare_for_model"),$p.forEach(t),Ai=s($r," method."),$r.forEach(t),qr.forEach(t),Pi=h(Y),Bt=r(Y,"DIV",{class:!0});var Dr=d(Bt);k(Go.$$.fragment,Dr),Ni=h(Dr),Vs=r(Dr,"P",{});var Dp=d(Vs);Ii=s(Dp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Dp.forEach(t),Dr.forEach(t),Gi=h(Y),Kn=r(Y,"DIV",{class:!0});var Fp=d(Kn);k(Bo.$$.fragment,Fp),Fp.forEach(t),Y.forEach(t),Xa=h(o),ut=r(o,"H2",{class:!0});var Fr=d(ut);Qt=r(Fr,"A",{id:!0,class:!0,href:!0});var zp=d(Qt);Rs=r(zp,"SPAN",{});var xp=d(Rs);k(Qo.$$.fragment,xp),xp.forEach(t),zp.forEach(t),Bi=h(Fr),Us=r(Fr,"SPAN",{});var Sp=d(Us);Qi=s(Sp,"LEDTokenizerFast"),Sp.forEach(t),Fr.forEach(t),Ja=h(o),ye=r(o,"DIV",{class:!0});var bo=d(ye);k(Wo.$$.fragment,bo),Wi=h(bo),Ho=r(bo,"P",{});var zr=d(Ho);Hi=s(zr,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Xs=r(zr,"EM",{});var Mp=d(Xs);Vi=s(Mp,"tokenizers"),Mp.forEach(t),Ri=s(zr," library)."),zr.forEach(t),Ui=h(bo),Wt=r(bo,"P",{});var Qa=d(Wt);Yn=r(Qa,"A",{href:!0});var Cp=d(Yn);Xi=s(Cp,"LEDTokenizerFast"),Cp.forEach(t),Ji=s(Qa," is identical to "),es=r(Qa,"A",{href:!0});var Op=d(es);Zi=s(Op,"BartTokenizerFast"),Op.forEach(t),Ki=s(Qa,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Qa.forEach(t),Yi=h(bo),Vo=r(bo,"P",{});var xr=d(Vo);el=s(xr,"Refer to superclass "),ts=r(xr,"A",{href:!0});var jp=d(ts);tl=s(jp,"BartTokenizerFast"),jp.forEach(t),ol=s(xr," for usage examples and documentation concerning parameters."),xr.forEach(t),bo.forEach(t),Za=h(o),mt=r(o,"H2",{class:!0});var Sr=d(mt);Ht=r(Sr,"A",{id:!0,class:!0,href:!0});var Ap=d(Ht);Js=r(Ap,"SPAN",{});var Pp=d(Js);k(Ro.$$.fragment,Pp),Pp.forEach(t),Ap.forEach(t),nl=h(Sr),Zs=r(Sr,"SPAN",{});var Np=d(Zs);sl=s(Np,"LED specific outputs"),Np.forEach(t),Sr.forEach(t),Ka=h(o),ft=r(o,"DIV",{class:!0});var Mr=d(ft);k(Uo.$$.fragment,Mr),al=h(Mr),Ks=r(Mr,"P",{});var Ip=d(Ks);rl=s(Ip,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Ip.forEach(t),Mr.forEach(t),Ya=h(o),_t=r(o,"DIV",{class:!0});var Cr=d(_t);k(Xo.$$.fragment,Cr),dl=h(Cr),Ys=r(Cr,"P",{});var Gp=d(Ys);il=s(Gp,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Gp.forEach(t),Cr.forEach(t),er=h(o),gt=r(o,"DIV",{class:!0});var Or=d(gt);k(Jo.$$.fragment,Or),ll=h(Or),ea=r(Or,"P",{});var Bp=d(ea);cl=s(Bp,"Base class for sequence-to-sequence language models outputs."),Bp.forEach(t),Or.forEach(t),tr=h(o),vt=r(o,"DIV",{class:!0});var jr=d(vt);k(Zo.$$.fragment,jr),hl=h(jr),ta=r(jr,"P",{});var Qp=d(ta);pl=s(Qp,"Base class for outputs of sequence-to-sequence sentence classification models."),Qp.forEach(t),jr.forEach(t),or=h(o),bt=r(o,"DIV",{class:!0});var Ar=d(bt);k(Ko.$$.fragment,Ar),ul=h(Ar),oa=r(Ar,"P",{});var Wp=d(oa);ml=s(Wp,"Base class for outputs of sequence-to-sequence question answering models."),Wp.forEach(t),Ar.forEach(t),nr=h(o),Tt=r(o,"DIV",{class:!0});var Pr=d(Tt);k(Yo.$$.fragment,Pr),fl=h(Pr),na=r(Pr,"P",{});var Hp=d(na);_l=s(Hp,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Hp.forEach(t),Pr.forEach(t),sr=h(o),kt=r(o,"DIV",{class:!0});var Nr=d(kt);k(en.$$.fragment,Nr),gl=h(Nr),sa=r(Nr,"P",{});var Vp=d(sa);vl=s(Vp,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Vp.forEach(t),Nr.forEach(t),ar=h(o),wt=r(o,"DIV",{class:!0});var Ir=d(wt);k(tn.$$.fragment,Ir),bl=h(Ir),aa=r(Ir,"P",{});var Rp=d(aa);Tl=s(Rp,"Base class for sequence-to-sequence language models outputs."),Rp.forEach(t),Ir.forEach(t),rr=h(o),yt=r(o,"H2",{class:!0});var Gr=d(yt);Vt=r(Gr,"A",{id:!0,class:!0,href:!0});var Up=d(Vt);ra=r(Up,"SPAN",{});var Xp=d(ra);k(on.$$.fragment,Xp),Xp.forEach(t),Up.forEach(t),kl=h(Gr),da=r(Gr,"SPAN",{});var Jp=d(da);wl=s(Jp,"LEDModel"),Jp.forEach(t),Gr.forEach(t),dr=h(o),Ee=r(o,"DIV",{class:!0});var To=d(Ee);k(nn.$$.fragment,To),yl=h(To),sn=r(To,"P",{});var Br=d(sn);El=s(Br,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),os=r(Br,"A",{href:!0});var Zp=d(os);Ll=s(Zp,"PreTrainedModel"),Zp.forEach(t),ql=s(Br,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Br.forEach(t),$l=h(To),an=r(To,"P",{});var Qr=d(an);Dl=s(Qr,"This model is also a PyTorch "),rn=r(Qr,"A",{href:!0,rel:!0});var Kp=d(rn);Fl=s(Kp,"torch.nn.Module"),Kp.forEach(t),zl=s(Qr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Qr.forEach(t),xl=h(To),xe=r(To,"DIV",{class:!0});var ko=d(xe);k(dn.$$.fragment,ko),Sl=h(ko),Et=r(ko,"P",{});var bs=d(Et);Ml=s(bs,"The "),ns=r(bs,"A",{href:!0});var Yp=d(ns);Cl=s(Yp,"LEDModel"),Yp.forEach(t),Ol=s(bs," forward method, overrides the "),ia=r(bs,"CODE",{});var eu=d(ia);jl=s(eu,"__call__"),eu.forEach(t),Al=s(bs," special method."),bs.forEach(t),Pl=h(ko),k(Rt.$$.fragment,ko),Nl=h(ko),k(Ut.$$.fragment,ko),ko.forEach(t),To.forEach(t),ir=h(o),Lt=r(o,"H2",{class:!0});var Wr=d(Lt);Xt=r(Wr,"A",{id:!0,class:!0,href:!0});var tu=d(Xt);la=r(tu,"SPAN",{});var ou=d(la);k(ln.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Il=h(Wr),ca=r(Wr,"SPAN",{});var nu=d(ca);Gl=s(nu,"LEDForConditionalGeneration"),nu.forEach(t),Wr.forEach(t),lr=h(o),Le=r(o,"DIV",{class:!0});var wo=d(Le);k(cn.$$.fragment,wo),Bl=h(wo),hn=r(wo,"P",{});var Hr=d(hn);Ql=s(Hr,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ss=r(Hr,"A",{href:!0});var su=d(ss);Wl=s(su,"PreTrainedModel"),su.forEach(t),Hl=s(Hr,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Hr.forEach(t),Vl=h(wo),pn=r(wo,"P",{});var Vr=d(pn);Rl=s(Vr,"This model is also a PyTorch "),un=r(Vr,"A",{href:!0,rel:!0});var au=d(un);Ul=s(au,"torch.nn.Module"),au.forEach(t),Xl=s(Vr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Vr.forEach(t),Jl=h(wo),fe=r(wo,"DIV",{class:!0});var Je=d(fe);k(mn.$$.fragment,Je),Zl=h(Je),qt=r(Je,"P",{});var Ts=d(qt);Kl=s(Ts,"The "),as=r(Ts,"A",{href:!0});var ru=d(as);Yl=s(ru,"LEDForConditionalGeneration"),ru.forEach(t),ec=s(Ts," forward method, overrides the "),ha=r(Ts,"CODE",{});var du=d(ha);tc=s(du,"__call__"),du.forEach(t),oc=s(Ts," special method."),Ts.forEach(t),nc=h(Je),k(Jt.$$.fragment,Je),sc=h(Je),k(Zt.$$.fragment,Je),ac=h(Je),k(Kt.$$.fragment,Je),Je.forEach(t),wo.forEach(t),cr=h(o),$t=r(o,"H2",{class:!0});var Rr=d($t);Yt=r(Rr,"A",{id:!0,class:!0,href:!0});var iu=d(Yt);pa=r(iu,"SPAN",{});var lu=d(pa);k(fn.$$.fragment,lu),lu.forEach(t),iu.forEach(t),rc=h(Rr),ua=r(Rr,"SPAN",{});var cu=d(ua);dc=s(cu,"LEDForSequenceClassification"),cu.forEach(t),Rr.forEach(t),hr=h(o),ie=r(o,"DIV",{class:!0});var Ze=d(ie);k(_n.$$.fragment,Ze),ic=h(Ze),ma=r(Ze,"P",{});var hu=d(ma);lc=s(hu,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),hu.forEach(t),cc=h(Ze),gn=r(Ze,"P",{});var Ur=d(gn);hc=s(Ur,"This model inherits from "),rs=r(Ur,"A",{href:!0});var pu=d(rs);pc=s(pu,"PreTrainedModel"),pu.forEach(t),uc=s(Ur,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Ur.forEach(t),mc=h(Ze),vn=r(Ze,"P",{});var Xr=d(vn);fc=s(Xr,"This model is also a PyTorch "),bn=r(Xr,"A",{href:!0,rel:!0});var uu=d(bn);_c=s(uu,"torch.nn.Module"),uu.forEach(t),gc=s(Xr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Xr.forEach(t),vc=h(Ze),B=r(Ze,"DIV",{class:!0});var ve=d(B);k(Tn.$$.fragment,ve),bc=h(ve),Dt=r(ve,"P",{});var ks=d(Dt);Tc=s(ks,"The "),ds=r(ks,"A",{href:!0});var mu=d(ds);kc=s(mu,"LEDForSequenceClassification"),mu.forEach(t),wc=s(ks," forward method, overrides the "),fa=r(ks,"CODE",{});var fu=d(fa);yc=s(fu,"__call__"),fu.forEach(t),Ec=s(ks," special method."),ks.forEach(t),Lc=h(ve),k(eo.$$.fragment,ve),qc=h(ve),k(to.$$.fragment,ve),$c=h(ve),k(oo.$$.fragment,ve),Dc=h(ve),k(no.$$.fragment,ve),Fc=h(ve),k(so.$$.fragment,ve),ve.forEach(t),Ze.forEach(t),pr=h(o),Ft=r(o,"H2",{class:!0});var Jr=d(Ft);ao=r(Jr,"A",{id:!0,class:!0,href:!0});var _u=d(ao);_a=r(_u,"SPAN",{});var gu=d(_a);k(kn.$$.fragment,gu),gu.forEach(t),_u.forEach(t),zc=h(Jr),ga=r(Jr,"SPAN",{});var vu=d(ga);xc=s(vu,"LEDForQuestionAnswering"),vu.forEach(t),Jr.forEach(t),ur=h(o),le=r(o,"DIV",{class:!0});var Ke=d(le);k(wn.$$.fragment,Ke),Sc=h(Ke),zt=r(Ke,"P",{});var ws=d(zt);Mc=s(ws,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),va=r(ws,"CODE",{});var bu=d(va);Cc=s(bu,"span start logits"),bu.forEach(t),Oc=s(ws," and "),ba=r(ws,"CODE",{});var Tu=d(ba);jc=s(Tu,"span end logits"),Tu.forEach(t),Ac=s(ws,")."),ws.forEach(t),Pc=h(Ke),yn=r(Ke,"P",{});var Zr=d(yn);Nc=s(Zr,"This model inherits from "),is=r(Zr,"A",{href:!0});var ku=d(is);Ic=s(ku,"PreTrainedModel"),ku.forEach(t),Gc=s(Zr,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Zr.forEach(t),Bc=h(Ke),En=r(Ke,"P",{});var Kr=d(En);Qc=s(Kr,"This model is also a PyTorch "),Ln=r(Kr,"A",{href:!0,rel:!0});var wu=d(Ln);Wc=s(wu,"torch.nn.Module"),wu.forEach(t),Hc=s(Kr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Kr.forEach(t),Vc=h(Ke),_e=r(Ke,"DIV",{class:!0});var Ye=d(_e);k(qn.$$.fragment,Ye),Rc=h(Ye),xt=r(Ye,"P",{});var ys=d(xt);Uc=s(ys,"The "),ls=r(ys,"A",{href:!0});var yu=d(ls);Xc=s(yu,"LEDForQuestionAnswering"),yu.forEach(t),Jc=s(ys," forward method, overrides the "),Ta=r(ys,"CODE",{});var Eu=d(Ta);Zc=s(Eu,"__call__"),Eu.forEach(t),Kc=s(ys," special method."),ys.forEach(t),Yc=h(Ye),k(ro.$$.fragment,Ye),eh=h(Ye),k(io.$$.fragment,Ye),th=h(Ye),k(lo.$$.fragment,Ye),Ye.forEach(t),Ke.forEach(t),mr=h(o),St=r(o,"H2",{class:!0});var Yr=d(St);co=r(Yr,"A",{id:!0,class:!0,href:!0});var Lu=d(co);ka=r(Lu,"SPAN",{});var qu=d(ka);k($n.$$.fragment,qu),qu.forEach(t),Lu.forEach(t),oh=h(Yr),wa=r(Yr,"SPAN",{});var $u=d(wa);nh=s($u,"TFLEDModel"),$u.forEach(t),Yr.forEach(t),fr=h(o),ce=r(o,"DIV",{class:!0});var et=d(ce);k(Dn.$$.fragment,et),sh=h(et),Fn=r(et,"P",{});var ed=d(Fn);ah=s(ed,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=r(ed,"A",{href:!0});var Du=d(cs);rh=s(Du,"TFPreTrainedModel"),Du.forEach(t),dh=s(ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ed.forEach(t),ih=h(et),zn=r(et,"P",{});var td=d(zn);lh=s(td,"This model is also a "),xn=r(td,"A",{href:!0,rel:!0});var Fu=d(xn);ch=s(Fu,"tf.keras.Model"),Fu.forEach(t),hh=s(td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),td.forEach(t),ph=h(et),k(ho.$$.fragment,et),uh=h(et),Se=r(et,"DIV",{class:!0});var yo=d(Se);k(Sn.$$.fragment,yo),mh=h(yo),Mt=r(yo,"P",{});var Es=d(Mt);fh=s(Es,"The "),hs=r(Es,"A",{href:!0});var zu=d(hs);_h=s(zu,"TFLEDModel"),zu.forEach(t),gh=s(Es," forward method, overrides the "),ya=r(Es,"CODE",{});var xu=d(ya);vh=s(xu,"__call__"),xu.forEach(t),bh=s(Es," special method."),Es.forEach(t),Th=h(yo),k(po.$$.fragment,yo),kh=h(yo),k(uo.$$.fragment,yo),yo.forEach(t),et.forEach(t),_r=h(o),Ct=r(o,"H2",{class:!0});var od=d(Ct);mo=r(od,"A",{id:!0,class:!0,href:!0});var Su=d(mo);Ea=r(Su,"SPAN",{});var Mu=d(Ea);k(Mn.$$.fragment,Mu),Mu.forEach(t),Su.forEach(t),wh=h(od),La=r(od,"SPAN",{});var Cu=d(La);yh=s(Cu,"TFLEDForConditionalGeneration"),Cu.forEach(t),od.forEach(t),gr=h(o),he=r(o,"DIV",{class:!0});var tt=d(he);k(Cn.$$.fragment,tt),Eh=h(tt),On=r(tt,"P",{});var nd=d(On);Lh=s(nd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ps=r(nd,"A",{href:!0});var Ou=d(ps);qh=s(Ou,"TFPreTrainedModel"),Ou.forEach(t),$h=s(nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nd.forEach(t),Dh=h(tt),jn=r(tt,"P",{});var sd=d(jn);Fh=s(sd,"This model is also a "),An=r(sd,"A",{href:!0,rel:!0});var ju=d(An);zh=s(ju,"tf.keras.Model"),ju.forEach(t),xh=s(sd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sd.forEach(t),Sh=h(tt),k(fo.$$.fragment,tt),Mh=h(tt),Me=r(tt,"DIV",{class:!0});var Eo=d(Me);k(Pn.$$.fragment,Eo),Ch=h(Eo),Ot=r(Eo,"P",{});var Ls=d(Ot);Oh=s(Ls,"The "),us=r(Ls,"A",{href:!0});var Au=d(us);jh=s(Au,"TFLEDForConditionalGeneration"),Au.forEach(t),Ah=s(Ls," forward method, overrides the "),qa=r(Ls,"CODE",{});var Pu=d(qa);Ph=s(Pu,"__call__"),Pu.forEach(t),Nh=s(Ls," special method."),Ls.forEach(t),Ih=h(Eo),k(_o.$$.fragment,Eo),Gh=h(Eo),k(go.$$.fragment,Eo),Eo.forEach(t),tt.forEach(t),this.h()},h(){m(l,"name","hf:doc:metadata"),m(l,"content",JSON.stringify(hm)),m(u,"id","led"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#led"),m(p,"class","relative group"),m(Z,"id","overview"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#overview"),m(F,"class","relative group"),m(te,"href","https://arxiv.org/abs/2004.05150"),m(te,"rel","nofollow"),m(G,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDForConditionalGeneration"),m(P,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),m(Fe,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizer"),m(ze,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartTokenizer"),m(Bn,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizer"),m(Qn,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerModel"),m($o,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),m($o,"rel","nofollow"),m(Fo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),m(Fo,"rel","nofollow"),m(zo,"href","https://huggingface.co/patrickvonplaten"),m(zo,"rel","nofollow"),m(At,"id","transformers.LEDConfig"),m(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(At,"href","#transformers.LEDConfig"),m(lt,"class","relative group"),m(Wn,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDModel"),m(Mo,"href","https://huggingface.co/allenai/led-base-16384"),m(Mo,"rel","nofollow"),m(Hn,"href","/docs/transformers/v4.19.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(Vn,"href","/docs/transformers/v4.19.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Nt,"id","transformers.LEDTokenizer"),m(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Nt,"href","#transformers.LEDTokenizer"),m(pt,"class","relative group"),m(Rn,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizer"),m(Un,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartTokenizer"),m(Xn,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartTokenizer"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qt,"id","transformers.LEDTokenizerFast"),m(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qt,"href","#transformers.LEDTokenizerFast"),m(ut,"class","relative group"),m(Yn,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDTokenizerFast"),m(es,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartTokenizerFast"),m(ts,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartTokenizerFast"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ht,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),m(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ht,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),m(mt,"class","relative group"),m(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vt,"id","transformers.LEDModel"),m(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vt,"href","#transformers.LEDModel"),m(yt,"class","relative group"),m(os,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),m(rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(rn,"rel","nofollow"),m(ns,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDModel"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"id","transformers.LEDForConditionalGeneration"),m(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xt,"href","#transformers.LEDForConditionalGeneration"),m(Lt,"class","relative group"),m(ss,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),m(un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(un,"rel","nofollow"),m(as,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDForConditionalGeneration"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yt,"id","transformers.LEDForSequenceClassification"),m(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yt,"href","#transformers.LEDForSequenceClassification"),m($t,"class","relative group"),m(rs,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),m(bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(bn,"rel","nofollow"),m(ds,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDForSequenceClassification"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"id","transformers.LEDForQuestionAnswering"),m(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ao,"href","#transformers.LEDForQuestionAnswering"),m(Ft,"class","relative group"),m(is,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),m(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ln,"rel","nofollow"),m(ls,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.LEDForQuestionAnswering"),m(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(co,"id","transformers.TFLEDModel"),m(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(co,"href","#transformers.TFLEDModel"),m(St,"class","relative group"),m(cs,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(xn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(xn,"rel","nofollow"),m(hs,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.TFLEDModel"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"id","transformers.TFLEDForConditionalGeneration"),m(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mo,"href","#transformers.TFLEDForConditionalGeneration"),m(Ct,"class","relative group"),m(ps,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(An,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(An,"rel","nofollow"),m(us,"href","/docs/transformers/v4.19.2/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),g(o,v,_),g(o,p,_),e(p,u),e(u,b),w(i,b,null),e(p,f),e(p,D),e(D,Pe),g(o,pe,_),g(o,F,_),e(F,Z),e(Z,W),w(ee,W,null),e(F,Ne),e(F,H),e(H,Ie),g(o,qe,_),g(o,I,_),e(I,V),e(I,te),e(te,be),e(I,C),g(o,j,_),g(o,ue,_),e(ue,oe),g(o,$e,_),g(o,me,_),e(me,R),e(R,Ge),g(o,De,_),g(o,O,_),e(O,Be),g(o,K,_),g(o,S,_),e(S,M),e(M,G),e(G,Qe),e(M,We),e(M,P),e(P,He),e(M,ne),e(M,Te),e(Te,q),e(M,z),e(M,se),e(se,ot),e(M,nt),e(M,N),e(N,st),e(M,at),e(M,Fe),e(Fe,U),e(M,ae),e(M,ze),e(ze,rt),e(M,re),e(S,dt),e(S,de),e(de,Ve),e(de,Re),e(Re,ad),e(de,rd),e(de,qs),e(qs,dd),e(de,id),e(S,ld),e(S,ke),e(ke,cd),e(ke,$s),e($s,hd),e(ke,pd),e(ke,Ds),e(Ds,ud),e(ke,md),e(ke,Bn),e(Bn,fd),e(ke,_d),e(ke,Fs),e(Fs,gd),e(ke,vd),e(S,bd),e(S,X),e(X,Td),e(X,zs),e(zs,kd),e(X,wd),e(X,xs),e(xs,yd),e(X,Ed),e(X,Qn),e(Qn,Ld),e(X,qd),e(X,Ss),e(Ss,$d),e(X,Dd),e(X,Ms),e(Ms,Fd),e(X,zd),e(X,Cs),e(Cs,xd),e(X,Sd),e(S,Md),e(S,it),e(it,Cd),e(it,Os),e(Os,Od),e(it,jd),e(it,js),e(js,Ad),e(it,Pd),e(S,Nd),e(S,qo),e(qo,Id),e(qo,$o),e($o,Gd),e(qo,Bd),e(S,Qd),e(S,Do),e(Do,Wd),e(Do,Fo),e(Fo,Hd),e(Do,Vd),g(o,Wa,_),g(o,jt,_),e(jt,Rd),e(jt,zo),e(zo,Ud),e(jt,Xd),g(o,Ha,_),g(o,lt,_),e(lt,At),e(At,As),w(xo,As,null),e(lt,Jd),e(lt,Ps),e(Ps,Zd),g(o,Va,_),g(o,we,_),w(So,we,null),e(we,Kd),e(we,ct),e(ct,Yd),e(ct,Wn),e(Wn,ei),e(ct,ti),e(ct,Mo),e(Mo,oi),e(ct,ni),e(we,si),e(we,ht),e(ht,ai),e(ht,Hn),e(Hn,ri),e(ht,di),e(ht,Vn),e(Vn,ii),e(ht,li),e(we,ci),w(Pt,we,null),g(o,Ra,_),g(o,pt,_),e(pt,Nt),e(Nt,Ns),w(Co,Ns,null),e(pt,hi),e(pt,Is),e(Is,pi),g(o,Ua,_),g(o,A,_),w(Oo,A,null),e(A,ui),e(A,Gs),e(Gs,mi),e(A,fi),e(A,It),e(It,Rn),e(Rn,_i),e(It,gi),e(It,Un),e(Un,vi),e(It,bi),e(A,Ti),e(A,jo),e(jo,ki),e(jo,Xn),e(Xn,wi),e(jo,yi),e(A,Ei),e(A,Ue),w(Ao,Ue,null),e(Ue,Li),e(Ue,Bs),e(Bs,qi),e(Ue,$i),e(Ue,Po),e(Po,Jn),e(Jn,Di),e(Jn,Qs),e(Qs,Fi),e(Po,zi),e(Po,Zn),e(Zn,xi),e(Zn,Ws),e(Ws,Si),e(A,Mi),e(A,Gt),w(No,Gt,null),e(Gt,Ci),e(Gt,Io),e(Io,Oi),e(Io,Hs),e(Hs,ji),e(Io,Ai),e(A,Pi),e(A,Bt),w(Go,Bt,null),e(Bt,Ni),e(Bt,Vs),e(Vs,Ii),e(A,Gi),e(A,Kn),w(Bo,Kn,null),g(o,Xa,_),g(o,ut,_),e(ut,Qt),e(Qt,Rs),w(Qo,Rs,null),e(ut,Bi),e(ut,Us),e(Us,Qi),g(o,Ja,_),g(o,ye,_),w(Wo,ye,null),e(ye,Wi),e(ye,Ho),e(Ho,Hi),e(Ho,Xs),e(Xs,Vi),e(Ho,Ri),e(ye,Ui),e(ye,Wt),e(Wt,Yn),e(Yn,Xi),e(Wt,Ji),e(Wt,es),e(es,Zi),e(Wt,Ki),e(ye,Yi),e(ye,Vo),e(Vo,el),e(Vo,ts),e(ts,tl),e(Vo,ol),g(o,Za,_),g(o,mt,_),e(mt,Ht),e(Ht,Js),w(Ro,Js,null),e(mt,nl),e(mt,Zs),e(Zs,sl),g(o,Ka,_),g(o,ft,_),w(Uo,ft,null),e(ft,al),e(ft,Ks),e(Ks,rl),g(o,Ya,_),g(o,_t,_),w(Xo,_t,null),e(_t,dl),e(_t,Ys),e(Ys,il),g(o,er,_),g(o,gt,_),w(Jo,gt,null),e(gt,ll),e(gt,ea),e(ea,cl),g(o,tr,_),g(o,vt,_),w(Zo,vt,null),e(vt,hl),e(vt,ta),e(ta,pl),g(o,or,_),g(o,bt,_),w(Ko,bt,null),e(bt,ul),e(bt,oa),e(oa,ml),g(o,nr,_),g(o,Tt,_),w(Yo,Tt,null),e(Tt,fl),e(Tt,na),e(na,_l),g(o,sr,_),g(o,kt,_),w(en,kt,null),e(kt,gl),e(kt,sa),e(sa,vl),g(o,ar,_),g(o,wt,_),w(tn,wt,null),e(wt,bl),e(wt,aa),e(aa,Tl),g(o,rr,_),g(o,yt,_),e(yt,Vt),e(Vt,ra),w(on,ra,null),e(yt,kl),e(yt,da),e(da,wl),g(o,dr,_),g(o,Ee,_),w(nn,Ee,null),e(Ee,yl),e(Ee,sn),e(sn,El),e(sn,os),e(os,Ll),e(sn,ql),e(Ee,$l),e(Ee,an),e(an,Dl),e(an,rn),e(rn,Fl),e(an,zl),e(Ee,xl),e(Ee,xe),w(dn,xe,null),e(xe,Sl),e(xe,Et),e(Et,Ml),e(Et,ns),e(ns,Cl),e(Et,Ol),e(Et,ia),e(ia,jl),e(Et,Al),e(xe,Pl),w(Rt,xe,null),e(xe,Nl),w(Ut,xe,null),g(o,ir,_),g(o,Lt,_),e(Lt,Xt),e(Xt,la),w(ln,la,null),e(Lt,Il),e(Lt,ca),e(ca,Gl),g(o,lr,_),g(o,Le,_),w(cn,Le,null),e(Le,Bl),e(Le,hn),e(hn,Ql),e(hn,ss),e(ss,Wl),e(hn,Hl),e(Le,Vl),e(Le,pn),e(pn,Rl),e(pn,un),e(un,Ul),e(pn,Xl),e(Le,Jl),e(Le,fe),w(mn,fe,null),e(fe,Zl),e(fe,qt),e(qt,Kl),e(qt,as),e(as,Yl),e(qt,ec),e(qt,ha),e(ha,tc),e(qt,oc),e(fe,nc),w(Jt,fe,null),e(fe,sc),w(Zt,fe,null),e(fe,ac),w(Kt,fe,null),g(o,cr,_),g(o,$t,_),e($t,Yt),e(Yt,pa),w(fn,pa,null),e($t,rc),e($t,ua),e(ua,dc),g(o,hr,_),g(o,ie,_),w(_n,ie,null),e(ie,ic),e(ie,ma),e(ma,lc),e(ie,cc),e(ie,gn),e(gn,hc),e(gn,rs),e(rs,pc),e(gn,uc),e(ie,mc),e(ie,vn),e(vn,fc),e(vn,bn),e(bn,_c),e(vn,gc),e(ie,vc),e(ie,B),w(Tn,B,null),e(B,bc),e(B,Dt),e(Dt,Tc),e(Dt,ds),e(ds,kc),e(Dt,wc),e(Dt,fa),e(fa,yc),e(Dt,Ec),e(B,Lc),w(eo,B,null),e(B,qc),w(to,B,null),e(B,$c),w(oo,B,null),e(B,Dc),w(no,B,null),e(B,Fc),w(so,B,null),g(o,pr,_),g(o,Ft,_),e(Ft,ao),e(ao,_a),w(kn,_a,null),e(Ft,zc),e(Ft,ga),e(ga,xc),g(o,ur,_),g(o,le,_),w(wn,le,null),e(le,Sc),e(le,zt),e(zt,Mc),e(zt,va),e(va,Cc),e(zt,Oc),e(zt,ba),e(ba,jc),e(zt,Ac),e(le,Pc),e(le,yn),e(yn,Nc),e(yn,is),e(is,Ic),e(yn,Gc),e(le,Bc),e(le,En),e(En,Qc),e(En,Ln),e(Ln,Wc),e(En,Hc),e(le,Vc),e(le,_e),w(qn,_e,null),e(_e,Rc),e(_e,xt),e(xt,Uc),e(xt,ls),e(ls,Xc),e(xt,Jc),e(xt,Ta),e(Ta,Zc),e(xt,Kc),e(_e,Yc),w(ro,_e,null),e(_e,eh),w(io,_e,null),e(_e,th),w(lo,_e,null),g(o,mr,_),g(o,St,_),e(St,co),e(co,ka),w($n,ka,null),e(St,oh),e(St,wa),e(wa,nh),g(o,fr,_),g(o,ce,_),w(Dn,ce,null),e(ce,sh),e(ce,Fn),e(Fn,ah),e(Fn,cs),e(cs,rh),e(Fn,dh),e(ce,ih),e(ce,zn),e(zn,lh),e(zn,xn),e(xn,ch),e(zn,hh),e(ce,ph),w(ho,ce,null),e(ce,uh),e(ce,Se),w(Sn,Se,null),e(Se,mh),e(Se,Mt),e(Mt,fh),e(Mt,hs),e(hs,_h),e(Mt,gh),e(Mt,ya),e(ya,vh),e(Mt,bh),e(Se,Th),w(po,Se,null),e(Se,kh),w(uo,Se,null),g(o,_r,_),g(o,Ct,_),e(Ct,mo),e(mo,Ea),w(Mn,Ea,null),e(Ct,wh),e(Ct,La),e(La,yh),g(o,gr,_),g(o,he,_),w(Cn,he,null),e(he,Eh),e(he,On),e(On,Lh),e(On,ps),e(ps,qh),e(On,$h),e(he,Dh),e(he,jn),e(jn,Fh),e(jn,An),e(An,zh),e(jn,xh),e(he,Sh),w(fo,he,null),e(he,Mh),e(he,Me),w(Pn,Me,null),e(Me,Ch),e(Me,Ot),e(Ot,Oh),e(Ot,us),e(us,jh),e(Ot,Ah),e(Ot,qa),e(qa,Ph),e(Ot,Nh),e(Me,Ih),w(_o,Me,null),e(Me,Gh),w(go,Me,null),vr=!0},p(o,[_]){const Nn={};_&2&&(Nn.$$scope={dirty:_,ctx:o}),Pt.$set(Nn);const $a={};_&2&&($a.$$scope={dirty:_,ctx:o}),Rt.$set($a);const Da={};_&2&&(Da.$$scope={dirty:_,ctx:o}),Ut.$set(Da);const Fa={};_&2&&(Fa.$$scope={dirty:_,ctx:o}),Jt.$set(Fa);const In={};_&2&&(In.$$scope={dirty:_,ctx:o}),Zt.$set(In);const za={};_&2&&(za.$$scope={dirty:_,ctx:o}),Kt.$set(za);const xa={};_&2&&(xa.$$scope={dirty:_,ctx:o}),eo.$set(xa);const Sa={};_&2&&(Sa.$$scope={dirty:_,ctx:o}),to.$set(Sa);const Gn={};_&2&&(Gn.$$scope={dirty:_,ctx:o}),oo.$set(Gn);const Ma={};_&2&&(Ma.$$scope={dirty:_,ctx:o}),no.$set(Ma);const Ca={};_&2&&(Ca.$$scope={dirty:_,ctx:o}),so.$set(Ca);const Oa={};_&2&&(Oa.$$scope={dirty:_,ctx:o}),ro.$set(Oa);const ja={};_&2&&(ja.$$scope={dirty:_,ctx:o}),io.$set(ja);const Aa={};_&2&&(Aa.$$scope={dirty:_,ctx:o}),lo.$set(Aa);const J={};_&2&&(J.$$scope={dirty:_,ctx:o}),ho.$set(J);const Q={};_&2&&(Q.$$scope={dirty:_,ctx:o}),po.$set(Q);const Pa={};_&2&&(Pa.$$scope={dirty:_,ctx:o}),uo.$set(Pa);const Na={};_&2&&(Na.$$scope={dirty:_,ctx:o}),fo.$set(Na);const Ia={};_&2&&(Ia.$$scope={dirty:_,ctx:o}),_o.$set(Ia);const Ga={};_&2&&(Ga.$$scope={dirty:_,ctx:o}),go.$set(Ga)},i(o){vr||(y(i.$$.fragment,o),y(ee.$$.fragment,o),y(xo.$$.fragment,o),y(So.$$.fragment,o),y(Pt.$$.fragment,o),y(Co.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(No.$$.fragment,o),y(Go.$$.fragment,o),y(Bo.$$.fragment,o),y(Qo.$$.fragment,o),y(Wo.$$.fragment,o),y(Ro.$$.fragment,o),y(Uo.$$.fragment,o),y(Xo.$$.fragment,o),y(Jo.$$.fragment,o),y(Zo.$$.fragment,o),y(Ko.$$.fragment,o),y(Yo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(dn.$$.fragment,o),y(Rt.$$.fragment,o),y(Ut.$$.fragment,o),y(ln.$$.fragment,o),y(cn.$$.fragment,o),y(mn.$$.fragment,o),y(Jt.$$.fragment,o),y(Zt.$$.fragment,o),y(Kt.$$.fragment,o),y(fn.$$.fragment,o),y(_n.$$.fragment,o),y(Tn.$$.fragment,o),y(eo.$$.fragment,o),y(to.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(so.$$.fragment,o),y(kn.$$.fragment,o),y(wn.$$.fragment,o),y(qn.$$.fragment,o),y(ro.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y($n.$$.fragment,o),y(Dn.$$.fragment,o),y(ho.$$.fragment,o),y(Sn.$$.fragment,o),y(po.$$.fragment,o),y(uo.$$.fragment,o),y(Mn.$$.fragment,o),y(Cn.$$.fragment,o),y(fo.$$.fragment,o),y(Pn.$$.fragment,o),y(_o.$$.fragment,o),y(go.$$.fragment,o),vr=!0)},o(o){E(i.$$.fragment,o),E(ee.$$.fragment,o),E(xo.$$.fragment,o),E(So.$$.fragment,o),E(Pt.$$.fragment,o),E(Co.$$.fragment,o),E(Oo.$$.fragment,o),E(Ao.$$.fragment,o),E(No.$$.fragment,o),E(Go.$$.fragment,o),E(Bo.$$.fragment,o),E(Qo.$$.fragment,o),E(Wo.$$.fragment,o),E(Ro.$$.fragment,o),E(Uo.$$.fragment,o),E(Xo.$$.fragment,o),E(Jo.$$.fragment,o),E(Zo.$$.fragment,o),E(Ko.$$.fragment,o),E(Yo.$$.fragment,o),E(en.$$.fragment,o),E(tn.$$.fragment,o),E(on.$$.fragment,o),E(nn.$$.fragment,o),E(dn.$$.fragment,o),E(Rt.$$.fragment,o),E(Ut.$$.fragment,o),E(ln.$$.fragment,o),E(cn.$$.fragment,o),E(mn.$$.fragment,o),E(Jt.$$.fragment,o),E(Zt.$$.fragment,o),E(Kt.$$.fragment,o),E(fn.$$.fragment,o),E(_n.$$.fragment,o),E(Tn.$$.fragment,o),E(eo.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(no.$$.fragment,o),E(so.$$.fragment,o),E(kn.$$.fragment,o),E(wn.$$.fragment,o),E(qn.$$.fragment,o),E(ro.$$.fragment,o),E(io.$$.fragment,o),E(lo.$$.fragment,o),E($n.$$.fragment,o),E(Dn.$$.fragment,o),E(ho.$$.fragment,o),E(Sn.$$.fragment,o),E(po.$$.fragment,o),E(uo.$$.fragment,o),E(Mn.$$.fragment,o),E(Cn.$$.fragment,o),E(fo.$$.fragment,o),E(Pn.$$.fragment,o),E(_o.$$.fragment,o),E(go.$$.fragment,o),vr=!1},d(o){t(l),o&&t(v),o&&t(p),L(i),o&&t(pe),o&&t(F),L(ee),o&&t(qe),o&&t(I),o&&t(j),o&&t(ue),o&&t($e),o&&t(me),o&&t(De),o&&t(O),o&&t(K),o&&t(S),o&&t(Wa),o&&t(jt),o&&t(Ha),o&&t(lt),L(xo),o&&t(Va),o&&t(we),L(So),L(Pt),o&&t(Ra),o&&t(pt),L(Co),o&&t(Ua),o&&t(A),L(Oo),L(Ao),L(No),L(Go),L(Bo),o&&t(Xa),o&&t(ut),L(Qo),o&&t(Ja),o&&t(ye),L(Wo),o&&t(Za),o&&t(mt),L(Ro),o&&t(Ka),o&&t(ft),L(Uo),o&&t(Ya),o&&t(_t),L(Xo),o&&t(er),o&&t(gt),L(Jo),o&&t(tr),o&&t(vt),L(Zo),o&&t(or),o&&t(bt),L(Ko),o&&t(nr),o&&t(Tt),L(Yo),o&&t(sr),o&&t(kt),L(en),o&&t(ar),o&&t(wt),L(tn),o&&t(rr),o&&t(yt),L(on),o&&t(dr),o&&t(Ee),L(nn),L(dn),L(Rt),L(Ut),o&&t(ir),o&&t(Lt),L(ln),o&&t(lr),o&&t(Le),L(cn),L(mn),L(Jt),L(Zt),L(Kt),o&&t(cr),o&&t($t),L(fn),o&&t(hr),o&&t(ie),L(_n),L(Tn),L(eo),L(to),L(oo),L(no),L(so),o&&t(pr),o&&t(Ft),L(kn),o&&t(ur),o&&t(le),L(wn),L(qn),L(ro),L(io),L(lo),o&&t(mr),o&&t(St),L($n),o&&t(fr),o&&t(ce),L(Dn),L(ho),L(Sn),L(po),L(uo),o&&t(_r),o&&t(Ct),L(Mn),o&&t(gr),o&&t(he),L(Cn),L(fo),L(Pn),L(_o),L(go)}}}const hm={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function pm($){return Qu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bm extends Nu{constructor(l){super();Iu(this,l,pm,cm,Gu,{})}}export{bm as default,hm as metadata};
