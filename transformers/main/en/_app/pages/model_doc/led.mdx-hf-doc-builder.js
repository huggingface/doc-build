import{S as Qu,i as Wu,s as Hu,e as a,k as c,w as v,t as n,M as Vu,c as r,d as t,m as h,a as d,x as k,h as s,b as m,G as e,g,y as w,q as y,o as E,B as L,v as Ru,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as qo}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ae}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Oe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Uu($){let l,b,p,u,T;return u=new Ae({props:{code:`from transformers import LEDModel, LEDConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),b=n("Example:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Xu($){let l,b,p,u,T;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(i){i&&t(l)}}}function Ju($){let l,b,p,u,T;return u=new Ae({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=n("Example:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Zu($){let l,b,p,u,T;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(i){i&&t(l)}}}function Ku($){let l,b,p,u,T;return u=new Ae({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),b=n("Conditional generation example:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Conditional generation example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function Yu($){let l,b,p,u,T;return u=new Ae({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),b=n("Summarization example:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Summarization example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function em($){let l,b,p,u,T;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(i){i&&t(l)}}}function tm($){let l,b,p,u,T;return u=new Ae({props:{code:`import torch
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
`}}),{c(){l=a("p"),b=n("Example of single-label classification:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Example of single-label classification:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function om($){let l,b;return l=new Ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,u){w(l,p,u),b=!0},p:je,i(p){b||(y(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function nm($){let l,b,p,u,T;return u=new Ae({props:{code:`import torch
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
`}}),{c(){l=a("p"),b=n("Example of multi-label classification:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Example of multi-label classification:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function sm($){let l,b;return l=new Ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,u){w(l,p,u),b=!0},p:je,i(p){b||(y(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function am($){let l,b,p,u,T;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(i){i&&t(l)}}}function rm($){let l,b,p,u,T;return u=new Ae({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
`}}),{c(){l=a("p"),b=n("Example:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function dm($){let l,b;return l=new Ae({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(l.$$.fragment)},l(p){k(l.$$.fragment,p)},m(p,u){w(l,p,u),b=!0},p:je,i(p){b||(y(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function im($){let l,b,p,u,T,i,f,D,Pe,pe,F,Z,W,ee,Ne,H,Ie,qe,I,V,te,Te,C,j,ue,oe,$e,me,R,Ge,De,O,Be,K,M,S,G,Qe,We,P,He,ne,ve;return{c(){l=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),p=c(),u=a("ul"),T=a("li"),i=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=a("li"),Pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),pe=c(),F=a("p"),Z=n("This second option is useful when using "),W=a("code"),ee=n("tf.keras.Model.fit"),Ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),Ie=n("model(inputs)"),qe=n("."),I=c(),V=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=c(),C=a("ul"),j=a("li"),ue=n("a single Tensor with "),oe=a("code"),$e=n("input_ids"),me=n(" only and nothing else: "),R=a("code"),Ge=n("model(input_ids)"),De=c(),O=a("li"),Be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a("code"),M=n("model([input_ids, attention_mask])"),S=n(" or "),G=a("code"),Qe=n("model([input_ids, attention_mask, token_type_ids])"),We=c(),P=a("li"),He=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(q){l=r(q,"P",{});var z=d(l);b=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),p=h(q),u=r(q,"UL",{});var se=d(u);T=r(se,"LI",{});var nt=d(T);i=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),f=h(se),D=r(se,"LI",{});var st=d(D);Pe=s(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),se.forEach(t),pe=h(q),F=r(q,"P",{});var N=d(F);Z=s(N,"This second option is useful when using "),W=r(N,"CODE",{});var at=d(W);ee=s(at,"tf.keras.Model.fit"),at.forEach(t),Ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var rt=d(H);Ie=s(rt,"model(inputs)"),rt.forEach(t),qe=s(N,"."),N.forEach(t),I=h(q),V=r(q,"P",{});var Fe=d(V);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Te=h(q),C=r(q,"UL",{});var U=d(C);j=r(U,"LI",{});var ae=d(j);ue=s(ae,"a single Tensor with "),oe=r(ae,"CODE",{});var ze=d(oe);$e=s(ze,"input_ids"),ze.forEach(t),me=s(ae," only and nothing else: "),R=r(ae,"CODE",{});var dt=d(R);Ge=s(dt,"model(input_ids)"),dt.forEach(t),ae.forEach(t),De=h(U),O=r(U,"LI",{});var re=d(O);Be=s(re,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(re,"CODE",{});var it=d(K);M=s(it,"model([input_ids, attention_mask])"),it.forEach(t),S=s(re," or "),G=r(re,"CODE",{});var de=d(G);Qe=s(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),re.forEach(t),We=h(U),P=r(U,"LI",{});var Ve=d(P);He=s(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=r(Ve,"CODE",{});var Re=d(ne);ve=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),U.forEach(t)},m(q,z){g(q,l,z),e(l,b),g(q,p,z),g(q,u,z),e(u,T),e(T,i),e(u,f),e(u,D),e(D,Pe),g(q,pe,z),g(q,F,z),e(F,Z),e(F,W),e(W,ee),e(F,Ne),e(F,H),e(H,Ie),e(F,qe),g(q,I,z),g(q,V,z),e(V,te),g(q,Te,z),g(q,C,z),e(C,j),e(j,ue),e(j,oe),e(oe,$e),e(j,me),e(j,R),e(R,Ge),e(C,De),e(C,O),e(O,Be),e(O,K),e(K,M),e(O,S),e(O,G),e(G,Qe),e(C,We),e(C,P),e(P,He),e(P,ne),e(ne,ve)},d(q){q&&t(l),q&&t(p),q&&t(u),q&&t(pe),q&&t(F),q&&t(I),q&&t(V),q&&t(Te),q&&t(C)}}}function lm($){let l,b,p,u,T;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(i){i&&t(l)}}}function cm($){let l,b,p,u,T;return u=new Ae({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=n("Example:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Example:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function hm($){let l,b,p,u,T,i,f,D,Pe,pe,F,Z,W,ee,Ne,H,Ie,qe,I,V,te,Te,C,j,ue,oe,$e,me,R,Ge,De,O,Be,K,M,S,G,Qe,We,P,He,ne,ve;return{c(){l=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),p=c(),u=a("ul"),T=a("li"),i=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=a("li"),Pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),pe=c(),F=a("p"),Z=n("This second option is useful when using "),W=a("code"),ee=n("tf.keras.Model.fit"),Ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),Ie=n("model(inputs)"),qe=n("."),I=c(),V=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=c(),C=a("ul"),j=a("li"),ue=n("a single Tensor with "),oe=a("code"),$e=n("input_ids"),me=n(" only and nothing else: "),R=a("code"),Ge=n("model(input_ids)"),De=c(),O=a("li"),Be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a("code"),M=n("model([input_ids, attention_mask])"),S=n(" or "),G=a("code"),Qe=n("model([input_ids, attention_mask, token_type_ids])"),We=c(),P=a("li"),He=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(q){l=r(q,"P",{});var z=d(l);b=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),p=h(q),u=r(q,"UL",{});var se=d(u);T=r(se,"LI",{});var nt=d(T);i=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),f=h(se),D=r(se,"LI",{});var st=d(D);Pe=s(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),se.forEach(t),pe=h(q),F=r(q,"P",{});var N=d(F);Z=s(N,"This second option is useful when using "),W=r(N,"CODE",{});var at=d(W);ee=s(at,"tf.keras.Model.fit"),at.forEach(t),Ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var rt=d(H);Ie=s(rt,"model(inputs)"),rt.forEach(t),qe=s(N,"."),N.forEach(t),I=h(q),V=r(q,"P",{});var Fe=d(V);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Te=h(q),C=r(q,"UL",{});var U=d(C);j=r(U,"LI",{});var ae=d(j);ue=s(ae,"a single Tensor with "),oe=r(ae,"CODE",{});var ze=d(oe);$e=s(ze,"input_ids"),ze.forEach(t),me=s(ae," only and nothing else: "),R=r(ae,"CODE",{});var dt=d(R);Ge=s(dt,"model(input_ids)"),dt.forEach(t),ae.forEach(t),De=h(U),O=r(U,"LI",{});var re=d(O);Be=s(re,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(re,"CODE",{});var it=d(K);M=s(it,"model([input_ids, attention_mask])"),it.forEach(t),S=s(re," or "),G=r(re,"CODE",{});var de=d(G);Qe=s(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),re.forEach(t),We=h(U),P=r(U,"LI",{});var Ve=d(P);He=s(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ne=r(Ve,"CODE",{});var Re=d(ne);ve=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),U.forEach(t)},m(q,z){g(q,l,z),e(l,b),g(q,p,z),g(q,u,z),e(u,T),e(T,i),e(u,f),e(u,D),e(D,Pe),g(q,pe,z),g(q,F,z),e(F,Z),e(F,W),e(W,ee),e(F,Ne),e(F,H),e(H,Ie),e(F,qe),g(q,I,z),g(q,V,z),e(V,te),g(q,Te,z),g(q,C,z),e(C,j),e(j,ue),e(j,oe),e(oe,$e),e(j,me),e(j,R),e(R,Ge),e(C,De),e(C,O),e(O,Be),e(O,K),e(K,M),e(O,S),e(O,G),e(G,Qe),e(C,We),e(C,P),e(P,He),e(P,ne),e(ne,ve)},d(q){q&&t(l),q&&t(p),q&&t(u),q&&t(pe),q&&t(F),q&&t(I),q&&t(V),q&&t(Te),q&&t(C)}}}function pm($){let l,b,p,u,T;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),u=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(f,"CODE",{});var D=d(p);u=s(D,"Module"),D.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(i){i&&t(l)}}}function um($){let l,b,p,u,T;return u=new Ae({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),b=n("Examples:"),p=c(),v(u.$$.fragment)},l(i){l=r(i,"P",{});var f=d(l);b=s(f,"Examples:"),f.forEach(t),p=h(i),k(u.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,p,f),w(u,i,f),T=!0},p:je,i(i){T||(y(u.$$.fragment,i),T=!0)},o(i){E(u.$$.fragment,i),T=!1},d(i){i&&t(l),i&&t(p),L(u,i)}}}function mm($){let l,b,p,u,T,i,f,D,Pe,pe,F,Z,W,ee,Ne,H,Ie,qe,I,V,te,Te,C,j,ue,oe,$e,me,R,Ge,De,O,Be,K,M,S,G,Qe,We,P,He,ne,ve,q,z,se,nt,st,N,at,rt,Fe,U,ae,ze,dt,re,it,de,Ve,Re,rd,dd,qs,id,ld,cd,ke,hd,$s,pd,ud,Ds,md,fd,Qn,_d,gd,Fs,bd,Td,vd,X,kd,zs,wd,yd,xs,Ed,Ld,Wn,qd,$d,Ms,Dd,Fd,Ss,zd,xd,Cs,Md,Sd,Cd,Ue,Od,Os,jd,Ad,js,Pd,Nd,As,Id,Gd,Bd,$o,Qd,Do,Wd,Hd,Vd,Fo,Rd,zo,Ud,Xd,Ha,jt,Jd,xo,Zd,Kd,Va,lt,At,Ps,Mo,Yd,Ns,ei,Ra,we,So,ti,ct,oi,Hn,ni,si,Co,ai,ri,di,ht,ii,Vn,li,ci,Rn,hi,pi,ui,Pt,Ua,pt,Nt,Is,Oo,mi,Gs,fi,Xa,A,jo,_i,Bs,gi,bi,It,Un,Ti,vi,Xn,ki,wi,yi,Ao,Ei,Jn,Li,qi,$i,Xe,Po,Di,Qs,Fi,zi,No,Zn,xi,Ws,Mi,Si,Kn,Ci,Hs,Oi,ji,Gt,Io,Ai,Go,Pi,Vs,Ni,Ii,Gi,Bt,Bo,Bi,Rs,Qi,Wi,Yn,Qo,Ja,ut,Qt,Us,Wo,Hi,Xs,Vi,Za,ye,Ho,Ri,Vo,Ui,Js,Xi,Ji,Zi,Wt,es,Ki,Yi,ts,el,tl,ol,Ro,nl,os,sl,al,Ka,mt,Ht,Zs,Uo,rl,Ks,dl,Ya,ft,Xo,il,Ys,ll,er,_t,Jo,cl,ea,hl,tr,gt,Zo,pl,ta,ul,or,bt,Ko,ml,oa,fl,nr,Tt,Yo,_l,na,gl,sr,vt,en,bl,sa,Tl,ar,kt,tn,vl,aa,kl,rr,wt,on,wl,ra,yl,dr,yt,Vt,da,nn,El,ia,Ll,ir,Ee,sn,ql,an,$l,ns,Dl,Fl,zl,rn,xl,dn,Ml,Sl,Cl,xe,ln,Ol,Et,jl,ss,Al,Pl,la,Nl,Il,Gl,Rt,Bl,Ut,lr,Lt,Xt,ca,cn,Ql,ha,Wl,cr,Le,hn,Hl,pn,Vl,as,Rl,Ul,Xl,un,Jl,mn,Zl,Kl,Yl,fe,fn,ec,qt,tc,rs,oc,nc,pa,sc,ac,rc,Jt,dc,Zt,ic,Kt,hr,$t,Yt,ua,_n,lc,ma,cc,pr,ie,gn,hc,fa,pc,uc,bn,mc,ds,fc,_c,gc,Tn,bc,vn,Tc,vc,kc,B,kn,wc,Dt,yc,is,Ec,Lc,_a,qc,$c,Dc,eo,Fc,to,zc,oo,xc,no,Mc,so,ur,Ft,ao,ga,wn,Sc,ba,Cc,mr,le,yn,Oc,zt,jc,Ta,Ac,Pc,va,Nc,Ic,Gc,En,Bc,ls,Qc,Wc,Hc,Ln,Vc,qn,Rc,Uc,Xc,_e,$n,Jc,xt,Zc,cs,Kc,Yc,ka,eh,th,oh,ro,nh,io,sh,lo,fr,Mt,co,wa,Dn,ah,ya,rh,_r,ce,Fn,dh,zn,ih,hs,lh,ch,hh,xn,ph,Mn,uh,mh,fh,ho,_h,Me,Sn,gh,St,bh,ps,Th,vh,Ea,kh,wh,yh,po,Eh,uo,gr,Ct,mo,La,Cn,Lh,qa,qh,br,he,On,$h,jn,Dh,us,Fh,zh,xh,An,Mh,Pn,Sh,Ch,Oh,fo,jh,Se,Nn,Ah,Ot,Ph,ms,Nh,Ih,$a,Gh,Bh,Qh,_o,Wh,go,Tr;return i=new Ce({}),ee=new Ce({}),Mo=new Ce({}),So=new x({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.LEDConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.LEDConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/configuration_led.py#L31"}}),Pt=new Oe({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[Uu]},$$scope:{ctx:$}}}),Oo=new Ce({}),jo=new x({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L43"}}),Po=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Io=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qo=new x({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L309"}}),Wo=new Ce({}),Ho=new x({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L44"}}),Uo=new Ce({}),Xo=new x({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1179"}}),Jo=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1222"}}),Zo=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1290"}}),Ko=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1357"}}),Yo=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1424"}}),en=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1368"}}),tn=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1411"}}),on=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1479"}}),nn=new Ce({}),sn=new x({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2213"}}),ln=new x({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2240",returnDescription:`
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
`}}),Rt=new qo({props:{$$slots:{default:[Xu]},$$scope:{ctx:$}}}),Ut=new Oe({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[Ju]},$$scope:{ctx:$}}}),cn=new Ce({}),hn=new x({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2336"}}),fn=new x({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2380",returnDescription:`
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
`}}),Jt=new qo({props:{$$slots:{default:[Zu]},$$scope:{ctx:$}}}),Zt=new Oe({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[Ku]},$$scope:{ctx:$}}}),Kt=new Oe({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[Yu]},$$scope:{ctx:$}}}),_n=new Ce({}),gn=new x({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2529"}}),kn=new x({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2542",returnDescription:`
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
`}}),eo=new qo({props:{$$slots:{default:[em]},$$scope:{ctx:$}}}),to=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[tm]},$$scope:{ctx:$}}}),oo=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[om]},$$scope:{ctx:$}}}),no=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-3",$$slots:{default:[nm]},$$scope:{ctx:$}}}),so=new Oe({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-4",$$slots:{default:[sm]},$$scope:{ctx:$}}}),wn=new Ce({}),yn=new x({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2657"}}),$n=new x({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2669",returnDescription:`
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
`}}),ro=new qo({props:{$$slots:{default:[am]},$$scope:{ctx:$}}}),io=new Oe({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[rm]},$$scope:{ctx:$}}}),lo=new Oe({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example-2",$$slots:{default:[dm]},$$scope:{ctx:$}}}),Dn=new Ce({}),Fn=new x({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2235"}}),ho=new qo({props:{$$slots:{default:[im]},$$scope:{ctx:$}}}),Sn=new x({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2247",returnDescription:`
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
`}}),po=new qo({props:{$$slots:{default:[lm]},$$scope:{ctx:$}}}),uo=new Oe({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[cm]},$$scope:{ctx:$}}}),Cn=new Ce({}),On=new x({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2341"}}),fo=new qo({props:{$$slots:{default:[hm]},$$scope:{ctx:$}}}),Nn=new x({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2377",returnDescription:`
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
`}}),_o=new qo({props:{$$slots:{default:[pm]},$$scope:{ctx:$}}}),go=new Oe({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[um]},$$scope:{ctx:$}}}),{c(){l=a("meta"),b=c(),p=a("h1"),u=a("a"),T=a("span"),v(i.$$.fragment),f=c(),D=a("span"),Pe=n("LED"),pe=c(),F=a("h2"),Z=a("a"),W=a("span"),v(ee.$$.fragment),Ne=c(),H=a("span"),Ie=n("Overview"),qe=c(),I=a("p"),V=n("The LED model was proposed in "),te=a("a"),Te=n("Longformer: The Long-Document Transformer"),C=n(` by Iz
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
dataset.`),De=c(),O=a("p"),Be=n("Tips:"),K=c(),M=a("ul"),S=a("li"),G=a("a"),Qe=n("LEDForConditionalGeneration"),We=n(` is an extension of
`),P=a("a"),He=n("BartForConditionalGeneration"),ne=n(" exchanging the traditional "),ve=a("em"),q=n("self-attention"),z=n(` layer with
`),se=a("em"),nt=n("Longformer"),st=n("\u2019s "),N=a("em"),at=n("chunked self-attention"),rt=n(" layer. "),Fe=a("a"),U=n("LEDTokenizer"),ae=n(` is an alias of
`),ze=a("a"),dt=n("BartTokenizer"),re=n("."),it=c(),de=a("li"),Ve=n("LED works very well on long-range "),Re=a("em"),rd=n("sequence-to-sequence"),dd=n(" tasks where the "),qs=a("code"),id=n("input_ids"),ld=n(` largely exceed a length of
1024 tokens.`),cd=c(),ke=a("li"),hd=n("LED pads the "),$s=a("code"),pd=n("input_ids"),ud=n(" to be a multiple of "),Ds=a("code"),md=n("config.attention_window"),fd=n(` if required. Therefore a small speed-up is
gained, when `),Qn=a("a"),_d=n("LEDTokenizer"),gd=n(" is used with the "),Fs=a("code"),bd=n("pad_to_multiple_of"),Td=n(" argument."),vd=c(),X=a("li"),kd=n("LED makes use of "),zs=a("em"),wd=n("global attention"),yd=n(" by means of the "),xs=a("code"),Ed=n("global_attention_mask"),Ld=n(` (see
`),Wn=a("a"),qd=n("LongformerModel"),$d=n("). For summarization, it is advised to put "),Ms=a("em"),Dd=n("global attention"),Fd=n(` only on the first
`),Ss=a("code"),zd=n("<s>"),xd=n(" token. For question answering, it is advised to put "),Cs=a("em"),Md=n("global attention"),Sd=n(" on all tokens of the question."),Cd=c(),Ue=a("li"),Od=n("To fine-tune LED on all 16384, "),Os=a("em"),jd=n("gradient checkpointing"),Ad=n(` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),js=a("code"),Pd=n("model.gradient_checkpointing_enable()"),Nd=n(`.
Moreover, the `),As=a("code"),Id=n("use_cache=False"),Gd=n(`
flag can be used to disable the caching mechanism to save memory.`),Bd=c(),$o=a("li"),Qd=n("A notebook showing how to evaluate LED, can be accessed "),Do=a("a"),Wd=n("here"),Hd=n("."),Vd=c(),Fo=a("li"),Rd=n("A notebook showing how to fine-tune LED, can be accessed "),zo=a("a"),Ud=n("here"),Xd=n("."),Ha=c(),jt=a("p"),Jd=n("This model was contributed by "),xo=a("a"),Zd=n("patrickvonplaten"),Kd=n("."),Va=c(),lt=a("h2"),At=a("a"),Ps=a("span"),v(Mo.$$.fragment),Yd=c(),Ns=a("span"),ei=n("LEDConfig"),Ra=c(),we=a("div"),v(So.$$.fragment),ti=c(),ct=a("p"),oi=n("This is the configuration class to store the configuration of a "),Hn=a("a"),ni=n("LEDModel"),si=n(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Co=a("a"),ai=n("allenai/led-base-16384"),ri=n(" architecture."),di=c(),ht=a("p"),ii=n("Configuration objects inherit from "),Vn=a("a"),li=n("PretrainedConfig"),ci=n(` and can be used to control the model outputs. Read the
documentation from `),Rn=a("a"),hi=n("PretrainedConfig"),pi=n(" for more information."),ui=c(),v(Pt.$$.fragment),Ua=c(),pt=a("h2"),Nt=a("a"),Is=a("span"),v(Oo.$$.fragment),mi=c(),Gs=a("span"),fi=n("LEDTokenizer"),Xa=c(),A=a("div"),v(jo.$$.fragment),_i=c(),Bs=a("p"),gi=n("Construct a LED tokenizer."),bi=c(),It=a("p"),Un=a("a"),Ti=n("LEDTokenizer"),vi=n(" is identical to "),Xn=a("a"),ki=n("BartTokenizer"),wi=n(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),yi=c(),Ao=a("p"),Ei=n("Refer to superclass "),Jn=a("a"),Li=n("BartTokenizer"),qi=n(" for usage examples and documentation concerning parameters."),$i=c(),Xe=a("div"),v(Po.$$.fragment),Di=c(),Qs=a("p"),Fi=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),zi=c(),No=a("ul"),Zn=a("li"),xi=n("single sequence: "),Ws=a("code"),Mi=n("<s> X </s>"),Si=c(),Kn=a("li"),Ci=n("pair of sequences: "),Hs=a("code"),Oi=n("<s> A </s></s> B </s>"),ji=c(),Gt=a("div"),v(Io.$$.fragment),Ai=c(),Go=a("p"),Pi=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vs=a("code"),Ni=n("prepare_for_model"),Ii=n(" method."),Gi=c(),Bt=a("div"),v(Bo.$$.fragment),Bi=c(),Rs=a("p"),Qi=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Wi=c(),Yn=a("div"),v(Qo.$$.fragment),Ja=c(),ut=a("h2"),Qt=a("a"),Us=a("span"),v(Wo.$$.fragment),Hi=c(),Xs=a("span"),Vi=n("LEDTokenizerFast"),Za=c(),ye=a("div"),v(Ho.$$.fragment),Ri=c(),Vo=a("p"),Ui=n("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Js=a("em"),Xi=n("tokenizers"),Ji=n(" library)."),Zi=c(),Wt=a("p"),es=a("a"),Ki=n("LEDTokenizerFast"),Yi=n(" is identical to "),ts=a("a"),el=n("BartTokenizerFast"),tl=n(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),ol=c(),Ro=a("p"),nl=n("Refer to superclass "),os=a("a"),sl=n("BartTokenizerFast"),al=n(" for usage examples and documentation concerning parameters."),Ka=c(),mt=a("h2"),Ht=a("a"),Zs=a("span"),v(Uo.$$.fragment),rl=c(),Ks=a("span"),dl=n("LED specific outputs"),Ya=c(),ft=a("div"),v(Xo.$$.fragment),il=c(),Ys=a("p"),ll=n("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),er=c(),_t=a("div"),v(Jo.$$.fragment),cl=c(),ea=a("p"),hl=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),tr=c(),gt=a("div"),v(Zo.$$.fragment),pl=c(),ta=a("p"),ul=n("Base class for sequence-to-sequence language models outputs."),or=c(),bt=a("div"),v(Ko.$$.fragment),ml=c(),oa=a("p"),fl=n("Base class for outputs of sequence-to-sequence sentence classification models."),nr=c(),Tt=a("div"),v(Yo.$$.fragment),_l=c(),na=a("p"),gl=n("Base class for outputs of sequence-to-sequence question answering models."),sr=c(),vt=a("div"),v(en.$$.fragment),bl=c(),sa=a("p"),Tl=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),ar=c(),kt=a("div"),v(tn.$$.fragment),vl=c(),aa=a("p"),kl=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),rr=c(),wt=a("div"),v(on.$$.fragment),wl=c(),ra=a("p"),yl=n("Base class for sequence-to-sequence language models outputs."),dr=c(),yt=a("h2"),Vt=a("a"),da=a("span"),v(nn.$$.fragment),El=c(),ia=a("span"),Ll=n("LEDModel"),ir=c(),Ee=a("div"),v(sn.$$.fragment),ql=c(),an=a("p"),$l=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ns=a("a"),Dl=n("PreTrainedModel"),Fl=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),zl=c(),rn=a("p"),xl=n("This model is also a PyTorch "),dn=a("a"),Ml=n("torch.nn.Module"),Sl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Cl=c(),xe=a("div"),v(ln.$$.fragment),Ol=c(),Et=a("p"),jl=n("The "),ss=a("a"),Al=n("LEDModel"),Pl=n(" forward method, overrides the "),la=a("code"),Nl=n("__call__"),Il=n(" special method."),Gl=c(),v(Rt.$$.fragment),Bl=c(),v(Ut.$$.fragment),lr=c(),Lt=a("h2"),Xt=a("a"),ca=a("span"),v(cn.$$.fragment),Ql=c(),ha=a("span"),Wl=n("LEDForConditionalGeneration"),cr=c(),Le=a("div"),v(hn.$$.fragment),Hl=c(),pn=a("p"),Vl=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),as=a("a"),Rl=n("PreTrainedModel"),Ul=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Xl=c(),un=a("p"),Jl=n("This model is also a PyTorch "),mn=a("a"),Zl=n("torch.nn.Module"),Kl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Yl=c(),fe=a("div"),v(fn.$$.fragment),ec=c(),qt=a("p"),tc=n("The "),rs=a("a"),oc=n("LEDForConditionalGeneration"),nc=n(" forward method, overrides the "),pa=a("code"),sc=n("__call__"),ac=n(" special method."),rc=c(),v(Jt.$$.fragment),dc=c(),v(Zt.$$.fragment),ic=c(),v(Kt.$$.fragment),hr=c(),$t=a("h2"),Yt=a("a"),ua=a("span"),v(_n.$$.fragment),lc=c(),ma=a("span"),cc=n("LEDForSequenceClassification"),pr=c(),ie=a("div"),v(gn.$$.fragment),hc=c(),fa=a("p"),pc=n(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),uc=c(),bn=a("p"),mc=n("This model inherits from "),ds=a("a"),fc=n("PreTrainedModel"),_c=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),gc=c(),Tn=a("p"),bc=n("This model is also a PyTorch "),vn=a("a"),Tc=n("torch.nn.Module"),vc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),kc=c(),B=a("div"),v(kn.$$.fragment),wc=c(),Dt=a("p"),yc=n("The "),is=a("a"),Ec=n("LEDForSequenceClassification"),Lc=n(" forward method, overrides the "),_a=a("code"),qc=n("__call__"),$c=n(" special method."),Dc=c(),v(eo.$$.fragment),Fc=c(),v(to.$$.fragment),zc=c(),v(oo.$$.fragment),xc=c(),v(no.$$.fragment),Mc=c(),v(so.$$.fragment),ur=c(),Ft=a("h2"),ao=a("a"),ga=a("span"),v(wn.$$.fragment),Sc=c(),ba=a("span"),Cc=n("LEDForQuestionAnswering"),mr=c(),le=a("div"),v(yn.$$.fragment),Oc=c(),zt=a("p"),jc=n(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ta=a("code"),Ac=n("span start logits"),Pc=n(" and "),va=a("code"),Nc=n("span end logits"),Ic=n(")."),Gc=c(),En=a("p"),Bc=n("This model inherits from "),ls=a("a"),Qc=n("PreTrainedModel"),Wc=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Hc=c(),Ln=a("p"),Vc=n("This model is also a PyTorch "),qn=a("a"),Rc=n("torch.nn.Module"),Uc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Xc=c(),_e=a("div"),v($n.$$.fragment),Jc=c(),xt=a("p"),Zc=n("The "),cs=a("a"),Kc=n("LEDForQuestionAnswering"),Yc=n(" forward method, overrides the "),ka=a("code"),eh=n("__call__"),th=n(" special method."),oh=c(),v(ro.$$.fragment),nh=c(),v(io.$$.fragment),sh=c(),v(lo.$$.fragment),fr=c(),Mt=a("h2"),co=a("a"),wa=a("span"),v(Dn.$$.fragment),ah=c(),ya=a("span"),rh=n("TFLEDModel"),_r=c(),ce=a("div"),v(Fn.$$.fragment),dh=c(),zn=a("p"),ih=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hs=a("a"),lh=n("TFPreTrainedModel"),ch=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh=c(),xn=a("p"),ph=n("This model is also a "),Mn=a("a"),uh=n("tf.keras.Model"),mh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fh=c(),v(ho.$$.fragment),_h=c(),Me=a("div"),v(Sn.$$.fragment),gh=c(),St=a("p"),bh=n("The "),ps=a("a"),Th=n("TFLEDModel"),vh=n(" forward method, overrides the "),Ea=a("code"),kh=n("__call__"),wh=n(" special method."),yh=c(),v(po.$$.fragment),Eh=c(),v(uo.$$.fragment),gr=c(),Ct=a("h2"),mo=a("a"),La=a("span"),v(Cn.$$.fragment),Lh=c(),qa=a("span"),qh=n("TFLEDForConditionalGeneration"),br=c(),he=a("div"),v(On.$$.fragment),$h=c(),jn=a("p"),Dh=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=a("a"),Fh=n("TFPreTrainedModel"),zh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh=c(),An=a("p"),Mh=n("This model is also a "),Pn=a("a"),Sh=n("tf.keras.Model"),Ch=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oh=c(),v(fo.$$.fragment),jh=c(),Se=a("div"),v(Nn.$$.fragment),Ah=c(),Ot=a("p"),Ph=n("The "),ms=a("a"),Nh=n("TFLEDForConditionalGeneration"),Ih=n(" forward method, overrides the "),$a=a("code"),Gh=n("__call__"),Bh=n(" special method."),Qh=c(),v(_o.$$.fragment),Wh=c(),v(go.$$.fragment),this.h()},l(o){const _=Vu('[data-svelte="svelte-1phssyn"]',document.head);l=r(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(o),p=r(o,"H1",{class:!0});var In=d(p);u=r(In,"A",{id:!0,class:!0,href:!0});var Da=d(u);T=r(Da,"SPAN",{});var Fa=d(T);k(i.$$.fragment,Fa),Fa.forEach(t),Da.forEach(t),f=h(In),D=r(In,"SPAN",{});var za=d(D);Pe=s(za,"LED"),za.forEach(t),In.forEach(t),pe=h(o),F=r(o,"H2",{class:!0});var Gn=d(F);Z=r(Gn,"A",{id:!0,class:!0,href:!0});var xa=d(Z);W=r(xa,"SPAN",{});var Ma=d(W);k(ee.$$.fragment,Ma),Ma.forEach(t),xa.forEach(t),Ne=h(Gn),H=r(Gn,"SPAN",{});var Sa=d(H);Ie=s(Sa,"Overview"),Sa.forEach(t),Gn.forEach(t),qe=h(o),I=r(o,"P",{});var Bn=d(I);V=s(Bn,"The LED model was proposed in "),te=r(Bn,"A",{href:!0,rel:!0});var Ca=d(te);Te=s(Ca,"Longformer: The Long-Document Transformer"),Ca.forEach(t),C=s(Bn,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Bn.forEach(t),j=h(o),ue=r(o,"P",{});var Oa=d(ue);oe=s(Oa,"The abstract from the paper is the following:"),Oa.forEach(t),$e=h(o),me=r(o,"P",{});var ja=d(me);R=r(ja,"EM",{});var Aa=d(R);Ge=s(Aa,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Aa.forEach(t),ja.forEach(t),De=h(o),O=r(o,"P",{});var Pa=d(O);Be=s(Pa,"Tips:"),Pa.forEach(t),K=h(o),M=r(o,"UL",{});var J=d(M);S=r(J,"LI",{});var Q=d(S);G=r(Q,"A",{href:!0});var Na=d(G);Qe=s(Na,"LEDForConditionalGeneration"),Na.forEach(t),We=s(Q,` is an extension of
`),P=r(Q,"A",{href:!0});var Ia=d(P);He=s(Ia,"BartForConditionalGeneration"),Ia.forEach(t),ne=s(Q," exchanging the traditional "),ve=r(Q,"EM",{});var Ga=d(ve);q=s(Ga,"self-attention"),Ga.forEach(t),z=s(Q,` layer with
`),se=r(Q,"EM",{});var Ba=d(se);nt=s(Ba,"Longformer"),Ba.forEach(t),st=s(Q,"\u2019s "),N=r(Q,"EM",{});var Rh=d(N);at=s(Rh,"chunked self-attention"),Rh.forEach(t),rt=s(Q," layer. "),Fe=r(Q,"A",{href:!0});var Uh=d(Fe);U=s(Uh,"LEDTokenizer"),Uh.forEach(t),ae=s(Q,` is an alias of
`),ze=r(Q,"A",{href:!0});var Xh=d(ze);dt=s(Xh,"BartTokenizer"),Xh.forEach(t),re=s(Q,"."),Q.forEach(t),it=h(J),de=r(J,"LI",{});var fs=d(de);Ve=s(fs,"LED works very well on long-range "),Re=r(fs,"EM",{});var Jh=d(Re);rd=s(Jh,"sequence-to-sequence"),Jh.forEach(t),dd=s(fs," tasks where the "),qs=r(fs,"CODE",{});var Zh=d(qs);id=s(Zh,"input_ids"),Zh.forEach(t),ld=s(fs,` largely exceed a length of
1024 tokens.`),fs.forEach(t),cd=h(J),ke=r(J,"LI",{});var Je=d(ke);hd=s(Je,"LED pads the "),$s=r(Je,"CODE",{});var Kh=d($s);pd=s(Kh,"input_ids"),Kh.forEach(t),ud=s(Je," to be a multiple of "),Ds=r(Je,"CODE",{});var Yh=d(Ds);md=s(Yh,"config.attention_window"),Yh.forEach(t),fd=s(Je,` if required. Therefore a small speed-up is
gained, when `),Qn=r(Je,"A",{href:!0});var ep=d(Qn);_d=s(ep,"LEDTokenizer"),ep.forEach(t),gd=s(Je," is used with the "),Fs=r(Je,"CODE",{});var tp=d(Fs);bd=s(tp,"pad_to_multiple_of"),tp.forEach(t),Td=s(Je," argument."),Je.forEach(t),vd=h(J),X=r(J,"LI",{});var ge=d(X);kd=s(ge,"LED makes use of "),zs=r(ge,"EM",{});var op=d(zs);wd=s(op,"global attention"),op.forEach(t),yd=s(ge," by means of the "),xs=r(ge,"CODE",{});var np=d(xs);Ed=s(np,"global_attention_mask"),np.forEach(t),Ld=s(ge,` (see
`),Wn=r(ge,"A",{href:!0});var sp=d(Wn);qd=s(sp,"LongformerModel"),sp.forEach(t),$d=s(ge,"). For summarization, it is advised to put "),Ms=r(ge,"EM",{});var ap=d(Ms);Dd=s(ap,"global attention"),ap.forEach(t),Fd=s(ge,` only on the first
`),Ss=r(ge,"CODE",{});var rp=d(Ss);zd=s(rp,"<s>"),rp.forEach(t),xd=s(ge," token. For question answering, it is advised to put "),Cs=r(ge,"EM",{});var dp=d(Cs);Md=s(dp,"global attention"),dp.forEach(t),Sd=s(ge," on all tokens of the question."),ge.forEach(t),Cd=h(J),Ue=r(J,"LI",{});var bo=d(Ue);Od=s(bo,"To fine-tune LED on all 16384, "),Os=r(bo,"EM",{});var ip=d(Os);jd=s(ip,"gradient checkpointing"),ip.forEach(t),Ad=s(bo,` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),js=r(bo,"CODE",{});var lp=d(js);Pd=s(lp,"model.gradient_checkpointing_enable()"),lp.forEach(t),Nd=s(bo,`.
Moreover, the `),As=r(bo,"CODE",{});var cp=d(As);Id=s(cp,"use_cache=False"),cp.forEach(t),Gd=s(bo,`
flag can be used to disable the caching mechanism to save memory.`),bo.forEach(t),Bd=h(J),$o=r(J,"LI",{});var vr=d($o);Qd=s(vr,"A notebook showing how to evaluate LED, can be accessed "),Do=r(vr,"A",{href:!0,rel:!0});var hp=d(Do);Wd=s(hp,"here"),hp.forEach(t),Hd=s(vr,"."),vr.forEach(t),Vd=h(J),Fo=r(J,"LI",{});var kr=d(Fo);Rd=s(kr,"A notebook showing how to fine-tune LED, can be accessed "),zo=r(kr,"A",{href:!0,rel:!0});var pp=d(zo);Ud=s(pp,"here"),pp.forEach(t),Xd=s(kr,"."),kr.forEach(t),J.forEach(t),Ha=h(o),jt=r(o,"P",{});var wr=d(jt);Jd=s(wr,"This model was contributed by "),xo=r(wr,"A",{href:!0,rel:!0});var up=d(xo);Zd=s(up,"patrickvonplaten"),up.forEach(t),Kd=s(wr,"."),wr.forEach(t),Va=h(o),lt=r(o,"H2",{class:!0});var yr=d(lt);At=r(yr,"A",{id:!0,class:!0,href:!0});var mp=d(At);Ps=r(mp,"SPAN",{});var fp=d(Ps);k(Mo.$$.fragment,fp),fp.forEach(t),mp.forEach(t),Yd=h(yr),Ns=r(yr,"SPAN",{});var _p=d(Ns);ei=s(_p,"LEDConfig"),_p.forEach(t),yr.forEach(t),Ra=h(o),we=r(o,"DIV",{class:!0});var To=d(we);k(So.$$.fragment,To),ti=h(To),ct=r(To,"P",{});var _s=d(ct);oi=s(_s,"This is the configuration class to store the configuration of a "),Hn=r(_s,"A",{href:!0});var gp=d(Hn);ni=s(gp,"LEDModel"),gp.forEach(t),si=s(_s,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Co=r(_s,"A",{href:!0,rel:!0});var bp=d(Co);ai=s(bp,"allenai/led-base-16384"),bp.forEach(t),ri=s(_s," architecture."),_s.forEach(t),di=h(To),ht=r(To,"P",{});var gs=d(ht);ii=s(gs,"Configuration objects inherit from "),Vn=r(gs,"A",{href:!0});var Tp=d(Vn);li=s(Tp,"PretrainedConfig"),Tp.forEach(t),ci=s(gs,` and can be used to control the model outputs. Read the
documentation from `),Rn=r(gs,"A",{href:!0});var vp=d(Rn);hi=s(vp,"PretrainedConfig"),vp.forEach(t),pi=s(gs," for more information."),gs.forEach(t),ui=h(To),k(Pt.$$.fragment,To),To.forEach(t),Ua=h(o),pt=r(o,"H2",{class:!0});var Er=d(pt);Nt=r(Er,"A",{id:!0,class:!0,href:!0});var kp=d(Nt);Is=r(kp,"SPAN",{});var wp=d(Is);k(Oo.$$.fragment,wp),wp.forEach(t),kp.forEach(t),mi=h(Er),Gs=r(Er,"SPAN",{});var yp=d(Gs);fi=s(yp,"LEDTokenizer"),yp.forEach(t),Er.forEach(t),Xa=h(o),A=r(o,"DIV",{class:!0});var Y=d(A);k(jo.$$.fragment,Y),_i=h(Y),Bs=r(Y,"P",{});var Ep=d(Bs);gi=s(Ep,"Construct a LED tokenizer."),Ep.forEach(t),bi=h(Y),It=r(Y,"P",{});var Qa=d(It);Un=r(Qa,"A",{href:!0});var Lp=d(Un);Ti=s(Lp,"LEDTokenizer"),Lp.forEach(t),vi=s(Qa," is identical to "),Xn=r(Qa,"A",{href:!0});var qp=d(Xn);ki=s(qp,"BartTokenizer"),qp.forEach(t),wi=s(Qa,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Qa.forEach(t),yi=h(Y),Ao=r(Y,"P",{});var Lr=d(Ao);Ei=s(Lr,"Refer to superclass "),Jn=r(Lr,"A",{href:!0});var $p=d(Jn);Li=s($p,"BartTokenizer"),$p.forEach(t),qi=s(Lr," for usage examples and documentation concerning parameters."),Lr.forEach(t),$i=h(Y),Xe=r(Y,"DIV",{class:!0});var bs=d(Xe);k(Po.$$.fragment,bs),Di=h(bs),Qs=r(bs,"P",{});var Dp=d(Qs);Fi=s(Dp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Dp.forEach(t),zi=h(bs),No=r(bs,"UL",{});var qr=d(No);Zn=r(qr,"LI",{});var Hh=d(Zn);xi=s(Hh,"single sequence: "),Ws=r(Hh,"CODE",{});var Fp=d(Ws);Mi=s(Fp,"<s> X </s>"),Fp.forEach(t),Hh.forEach(t),Si=h(qr),Kn=r(qr,"LI",{});var Vh=d(Kn);Ci=s(Vh,"pair of sequences: "),Hs=r(Vh,"CODE",{});var zp=d(Hs);Oi=s(zp,"<s> A </s></s> B </s>"),zp.forEach(t),Vh.forEach(t),qr.forEach(t),bs.forEach(t),ji=h(Y),Gt=r(Y,"DIV",{class:!0});var $r=d(Gt);k(Io.$$.fragment,$r),Ai=h($r),Go=r($r,"P",{});var Dr=d(Go);Pi=s(Dr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vs=r(Dr,"CODE",{});var xp=d(Vs);Ni=s(xp,"prepare_for_model"),xp.forEach(t),Ii=s(Dr," method."),Dr.forEach(t),$r.forEach(t),Gi=h(Y),Bt=r(Y,"DIV",{class:!0});var Fr=d(Bt);k(Bo.$$.fragment,Fr),Bi=h(Fr),Rs=r(Fr,"P",{});var Mp=d(Rs);Qi=s(Mp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Mp.forEach(t),Fr.forEach(t),Wi=h(Y),Yn=r(Y,"DIV",{class:!0});var Sp=d(Yn);k(Qo.$$.fragment,Sp),Sp.forEach(t),Y.forEach(t),Ja=h(o),ut=r(o,"H2",{class:!0});var zr=d(ut);Qt=r(zr,"A",{id:!0,class:!0,href:!0});var Cp=d(Qt);Us=r(Cp,"SPAN",{});var Op=d(Us);k(Wo.$$.fragment,Op),Op.forEach(t),Cp.forEach(t),Hi=h(zr),Xs=r(zr,"SPAN",{});var jp=d(Xs);Vi=s(jp,"LEDTokenizerFast"),jp.forEach(t),zr.forEach(t),Za=h(o),ye=r(o,"DIV",{class:!0});var vo=d(ye);k(Ho.$$.fragment,vo),Ri=h(vo),Vo=r(vo,"P",{});var xr=d(Vo);Ui=s(xr,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Js=r(xr,"EM",{});var Ap=d(Js);Xi=s(Ap,"tokenizers"),Ap.forEach(t),Ji=s(xr," library)."),xr.forEach(t),Zi=h(vo),Wt=r(vo,"P",{});var Wa=d(Wt);es=r(Wa,"A",{href:!0});var Pp=d(es);Ki=s(Pp,"LEDTokenizerFast"),Pp.forEach(t),Yi=s(Wa," is identical to "),ts=r(Wa,"A",{href:!0});var Np=d(ts);el=s(Np,"BartTokenizerFast"),Np.forEach(t),tl=s(Wa,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Wa.forEach(t),ol=h(vo),Ro=r(vo,"P",{});var Mr=d(Ro);nl=s(Mr,"Refer to superclass "),os=r(Mr,"A",{href:!0});var Ip=d(os);sl=s(Ip,"BartTokenizerFast"),Ip.forEach(t),al=s(Mr," for usage examples and documentation concerning parameters."),Mr.forEach(t),vo.forEach(t),Ka=h(o),mt=r(o,"H2",{class:!0});var Sr=d(mt);Ht=r(Sr,"A",{id:!0,class:!0,href:!0});var Gp=d(Ht);Zs=r(Gp,"SPAN",{});var Bp=d(Zs);k(Uo.$$.fragment,Bp),Bp.forEach(t),Gp.forEach(t),rl=h(Sr),Ks=r(Sr,"SPAN",{});var Qp=d(Ks);dl=s(Qp,"LED specific outputs"),Qp.forEach(t),Sr.forEach(t),Ya=h(o),ft=r(o,"DIV",{class:!0});var Cr=d(ft);k(Xo.$$.fragment,Cr),il=h(Cr),Ys=r(Cr,"P",{});var Wp=d(Ys);ll=s(Wp,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Wp.forEach(t),Cr.forEach(t),er=h(o),_t=r(o,"DIV",{class:!0});var Or=d(_t);k(Jo.$$.fragment,Or),cl=h(Or),ea=r(Or,"P",{});var Hp=d(ea);hl=s(Hp,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Hp.forEach(t),Or.forEach(t),tr=h(o),gt=r(o,"DIV",{class:!0});var jr=d(gt);k(Zo.$$.fragment,jr),pl=h(jr),ta=r(jr,"P",{});var Vp=d(ta);ul=s(Vp,"Base class for sequence-to-sequence language models outputs."),Vp.forEach(t),jr.forEach(t),or=h(o),bt=r(o,"DIV",{class:!0});var Ar=d(bt);k(Ko.$$.fragment,Ar),ml=h(Ar),oa=r(Ar,"P",{});var Rp=d(oa);fl=s(Rp,"Base class for outputs of sequence-to-sequence sentence classification models."),Rp.forEach(t),Ar.forEach(t),nr=h(o),Tt=r(o,"DIV",{class:!0});var Pr=d(Tt);k(Yo.$$.fragment,Pr),_l=h(Pr),na=r(Pr,"P",{});var Up=d(na);gl=s(Up,"Base class for outputs of sequence-to-sequence question answering models."),Up.forEach(t),Pr.forEach(t),sr=h(o),vt=r(o,"DIV",{class:!0});var Nr=d(vt);k(en.$$.fragment,Nr),bl=h(Nr),sa=r(Nr,"P",{});var Xp=d(sa);Tl=s(Xp,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Xp.forEach(t),Nr.forEach(t),ar=h(o),kt=r(o,"DIV",{class:!0});var Ir=d(kt);k(tn.$$.fragment,Ir),vl=h(Ir),aa=r(Ir,"P",{});var Jp=d(aa);kl=s(Jp,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Jp.forEach(t),Ir.forEach(t),rr=h(o),wt=r(o,"DIV",{class:!0});var Gr=d(wt);k(on.$$.fragment,Gr),wl=h(Gr),ra=r(Gr,"P",{});var Zp=d(ra);yl=s(Zp,"Base class for sequence-to-sequence language models outputs."),Zp.forEach(t),Gr.forEach(t),dr=h(o),yt=r(o,"H2",{class:!0});var Br=d(yt);Vt=r(Br,"A",{id:!0,class:!0,href:!0});var Kp=d(Vt);da=r(Kp,"SPAN",{});var Yp=d(da);k(nn.$$.fragment,Yp),Yp.forEach(t),Kp.forEach(t),El=h(Br),ia=r(Br,"SPAN",{});var eu=d(ia);Ll=s(eu,"LEDModel"),eu.forEach(t),Br.forEach(t),ir=h(o),Ee=r(o,"DIV",{class:!0});var ko=d(Ee);k(sn.$$.fragment,ko),ql=h(ko),an=r(ko,"P",{});var Qr=d(an);$l=s(Qr,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ns=r(Qr,"A",{href:!0});var tu=d(ns);Dl=s(tu,"PreTrainedModel"),tu.forEach(t),Fl=s(Qr,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Qr.forEach(t),zl=h(ko),rn=r(ko,"P",{});var Wr=d(rn);xl=s(Wr,"This model is also a PyTorch "),dn=r(Wr,"A",{href:!0,rel:!0});var ou=d(dn);Ml=s(ou,"torch.nn.Module"),ou.forEach(t),Sl=s(Wr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Wr.forEach(t),Cl=h(ko),xe=r(ko,"DIV",{class:!0});var wo=d(xe);k(ln.$$.fragment,wo),Ol=h(wo),Et=r(wo,"P",{});var Ts=d(Et);jl=s(Ts,"The "),ss=r(Ts,"A",{href:!0});var nu=d(ss);Al=s(nu,"LEDModel"),nu.forEach(t),Pl=s(Ts," forward method, overrides the "),la=r(Ts,"CODE",{});var su=d(la);Nl=s(su,"__call__"),su.forEach(t),Il=s(Ts," special method."),Ts.forEach(t),Gl=h(wo),k(Rt.$$.fragment,wo),Bl=h(wo),k(Ut.$$.fragment,wo),wo.forEach(t),ko.forEach(t),lr=h(o),Lt=r(o,"H2",{class:!0});var Hr=d(Lt);Xt=r(Hr,"A",{id:!0,class:!0,href:!0});var au=d(Xt);ca=r(au,"SPAN",{});var ru=d(ca);k(cn.$$.fragment,ru),ru.forEach(t),au.forEach(t),Ql=h(Hr),ha=r(Hr,"SPAN",{});var du=d(ha);Wl=s(du,"LEDForConditionalGeneration"),du.forEach(t),Hr.forEach(t),cr=h(o),Le=r(o,"DIV",{class:!0});var yo=d(Le);k(hn.$$.fragment,yo),Hl=h(yo),pn=r(yo,"P",{});var Vr=d(pn);Vl=s(Vr,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),as=r(Vr,"A",{href:!0});var iu=d(as);Rl=s(iu,"PreTrainedModel"),iu.forEach(t),Ul=s(Vr,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Vr.forEach(t),Xl=h(yo),un=r(yo,"P",{});var Rr=d(un);Jl=s(Rr,"This model is also a PyTorch "),mn=r(Rr,"A",{href:!0,rel:!0});var lu=d(mn);Zl=s(lu,"torch.nn.Module"),lu.forEach(t),Kl=s(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Rr.forEach(t),Yl=h(yo),fe=r(yo,"DIV",{class:!0});var Ze=d(fe);k(fn.$$.fragment,Ze),ec=h(Ze),qt=r(Ze,"P",{});var vs=d(qt);tc=s(vs,"The "),rs=r(vs,"A",{href:!0});var cu=d(rs);oc=s(cu,"LEDForConditionalGeneration"),cu.forEach(t),nc=s(vs," forward method, overrides the "),pa=r(vs,"CODE",{});var hu=d(pa);sc=s(hu,"__call__"),hu.forEach(t),ac=s(vs," special method."),vs.forEach(t),rc=h(Ze),k(Jt.$$.fragment,Ze),dc=h(Ze),k(Zt.$$.fragment,Ze),ic=h(Ze),k(Kt.$$.fragment,Ze),Ze.forEach(t),yo.forEach(t),hr=h(o),$t=r(o,"H2",{class:!0});var Ur=d($t);Yt=r(Ur,"A",{id:!0,class:!0,href:!0});var pu=d(Yt);ua=r(pu,"SPAN",{});var uu=d(ua);k(_n.$$.fragment,uu),uu.forEach(t),pu.forEach(t),lc=h(Ur),ma=r(Ur,"SPAN",{});var mu=d(ma);cc=s(mu,"LEDForSequenceClassification"),mu.forEach(t),Ur.forEach(t),pr=h(o),ie=r(o,"DIV",{class:!0});var Ke=d(ie);k(gn.$$.fragment,Ke),hc=h(Ke),fa=r(Ke,"P",{});var fu=d(fa);pc=s(fu,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),fu.forEach(t),uc=h(Ke),bn=r(Ke,"P",{});var Xr=d(bn);mc=s(Xr,"This model inherits from "),ds=r(Xr,"A",{href:!0});var _u=d(ds);fc=s(_u,"PreTrainedModel"),_u.forEach(t),_c=s(Xr,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Xr.forEach(t),gc=h(Ke),Tn=r(Ke,"P",{});var Jr=d(Tn);bc=s(Jr,"This model is also a PyTorch "),vn=r(Jr,"A",{href:!0,rel:!0});var gu=d(vn);Tc=s(gu,"torch.nn.Module"),gu.forEach(t),vc=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Jr.forEach(t),kc=h(Ke),B=r(Ke,"DIV",{class:!0});var be=d(B);k(kn.$$.fragment,be),wc=h(be),Dt=r(be,"P",{});var ks=d(Dt);yc=s(ks,"The "),is=r(ks,"A",{href:!0});var bu=d(is);Ec=s(bu,"LEDForSequenceClassification"),bu.forEach(t),Lc=s(ks," forward method, overrides the "),_a=r(ks,"CODE",{});var Tu=d(_a);qc=s(Tu,"__call__"),Tu.forEach(t),$c=s(ks," special method."),ks.forEach(t),Dc=h(be),k(eo.$$.fragment,be),Fc=h(be),k(to.$$.fragment,be),zc=h(be),k(oo.$$.fragment,be),xc=h(be),k(no.$$.fragment,be),Mc=h(be),k(so.$$.fragment,be),be.forEach(t),Ke.forEach(t),ur=h(o),Ft=r(o,"H2",{class:!0});var Zr=d(Ft);ao=r(Zr,"A",{id:!0,class:!0,href:!0});var vu=d(ao);ga=r(vu,"SPAN",{});var ku=d(ga);k(wn.$$.fragment,ku),ku.forEach(t),vu.forEach(t),Sc=h(Zr),ba=r(Zr,"SPAN",{});var wu=d(ba);Cc=s(wu,"LEDForQuestionAnswering"),wu.forEach(t),Zr.forEach(t),mr=h(o),le=r(o,"DIV",{class:!0});var Ye=d(le);k(yn.$$.fragment,Ye),Oc=h(Ye),zt=r(Ye,"P",{});var ws=d(zt);jc=s(ws,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ta=r(ws,"CODE",{});var yu=d(Ta);Ac=s(yu,"span start logits"),yu.forEach(t),Pc=s(ws," and "),va=r(ws,"CODE",{});var Eu=d(va);Nc=s(Eu,"span end logits"),Eu.forEach(t),Ic=s(ws,")."),ws.forEach(t),Gc=h(Ye),En=r(Ye,"P",{});var Kr=d(En);Bc=s(Kr,"This model inherits from "),ls=r(Kr,"A",{href:!0});var Lu=d(ls);Qc=s(Lu,"PreTrainedModel"),Lu.forEach(t),Wc=s(Kr,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Kr.forEach(t),Hc=h(Ye),Ln=r(Ye,"P",{});var Yr=d(Ln);Vc=s(Yr,"This model is also a PyTorch "),qn=r(Yr,"A",{href:!0,rel:!0});var qu=d(qn);Rc=s(qu,"torch.nn.Module"),qu.forEach(t),Uc=s(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Yr.forEach(t),Xc=h(Ye),_e=r(Ye,"DIV",{class:!0});var et=d(_e);k($n.$$.fragment,et),Jc=h(et),xt=r(et,"P",{});var ys=d(xt);Zc=s(ys,"The "),cs=r(ys,"A",{href:!0});var $u=d(cs);Kc=s($u,"LEDForQuestionAnswering"),$u.forEach(t),Yc=s(ys," forward method, overrides the "),ka=r(ys,"CODE",{});var Du=d(ka);eh=s(Du,"__call__"),Du.forEach(t),th=s(ys," special method."),ys.forEach(t),oh=h(et),k(ro.$$.fragment,et),nh=h(et),k(io.$$.fragment,et),sh=h(et),k(lo.$$.fragment,et),et.forEach(t),Ye.forEach(t),fr=h(o),Mt=r(o,"H2",{class:!0});var ed=d(Mt);co=r(ed,"A",{id:!0,class:!0,href:!0});var Fu=d(co);wa=r(Fu,"SPAN",{});var zu=d(wa);k(Dn.$$.fragment,zu),zu.forEach(t),Fu.forEach(t),ah=h(ed),ya=r(ed,"SPAN",{});var xu=d(ya);rh=s(xu,"TFLEDModel"),xu.forEach(t),ed.forEach(t),_r=h(o),ce=r(o,"DIV",{class:!0});var tt=d(ce);k(Fn.$$.fragment,tt),dh=h(tt),zn=r(tt,"P",{});var td=d(zn);ih=s(td,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hs=r(td,"A",{href:!0});var Mu=d(hs);lh=s(Mu,"TFPreTrainedModel"),Mu.forEach(t),ch=s(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),hh=h(tt),xn=r(tt,"P",{});var od=d(xn);ph=s(od,"This model is also a "),Mn=r(od,"A",{href:!0,rel:!0});var Su=d(Mn);uh=s(Su,"tf.keras.Model"),Su.forEach(t),mh=s(od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od.forEach(t),fh=h(tt),k(ho.$$.fragment,tt),_h=h(tt),Me=r(tt,"DIV",{class:!0});var Eo=d(Me);k(Sn.$$.fragment,Eo),gh=h(Eo),St=r(Eo,"P",{});var Es=d(St);bh=s(Es,"The "),ps=r(Es,"A",{href:!0});var Cu=d(ps);Th=s(Cu,"TFLEDModel"),Cu.forEach(t),vh=s(Es," forward method, overrides the "),Ea=r(Es,"CODE",{});var Ou=d(Ea);kh=s(Ou,"__call__"),Ou.forEach(t),wh=s(Es," special method."),Es.forEach(t),yh=h(Eo),k(po.$$.fragment,Eo),Eh=h(Eo),k(uo.$$.fragment,Eo),Eo.forEach(t),tt.forEach(t),gr=h(o),Ct=r(o,"H2",{class:!0});var nd=d(Ct);mo=r(nd,"A",{id:!0,class:!0,href:!0});var ju=d(mo);La=r(ju,"SPAN",{});var Au=d(La);k(Cn.$$.fragment,Au),Au.forEach(t),ju.forEach(t),Lh=h(nd),qa=r(nd,"SPAN",{});var Pu=d(qa);qh=s(Pu,"TFLEDForConditionalGeneration"),Pu.forEach(t),nd.forEach(t),br=h(o),he=r(o,"DIV",{class:!0});var ot=d(he);k(On.$$.fragment,ot),$h=h(ot),jn=r(ot,"P",{});var sd=d(jn);Dh=s(sd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=r(sd,"A",{href:!0});var Nu=d(us);Fh=s(Nu,"TFPreTrainedModel"),Nu.forEach(t),zh=s(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),xh=h(ot),An=r(ot,"P",{});var ad=d(An);Mh=s(ad,"This model is also a "),Pn=r(ad,"A",{href:!0,rel:!0});var Iu=d(Pn);Sh=s(Iu,"tf.keras.Model"),Iu.forEach(t),Ch=s(ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ad.forEach(t),Oh=h(ot),k(fo.$$.fragment,ot),jh=h(ot),Se=r(ot,"DIV",{class:!0});var Lo=d(Se);k(Nn.$$.fragment,Lo),Ah=h(Lo),Ot=r(Lo,"P",{});var Ls=d(Ot);Ph=s(Ls,"The "),ms=r(Ls,"A",{href:!0});var Gu=d(ms);Nh=s(Gu,"TFLEDForConditionalGeneration"),Gu.forEach(t),Ih=s(Ls," forward method, overrides the "),$a=r(Ls,"CODE",{});var Bu=d($a);Gh=s(Bu,"__call__"),Bu.forEach(t),Bh=s(Ls," special method."),Ls.forEach(t),Qh=h(Lo),k(_o.$$.fragment,Lo),Wh=h(Lo),k(go.$$.fragment,Lo),Lo.forEach(t),ot.forEach(t),this.h()},h(){m(l,"name","hf:doc:metadata"),m(l,"content",JSON.stringify(fm)),m(u,"id","led"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#led"),m(p,"class","relative group"),m(Z,"id","overview"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#overview"),m(F,"class","relative group"),m(te,"href","https://arxiv.org/abs/2004.05150"),m(te,"rel","nofollow"),m(G,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),m(P,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),m(Fe,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),m(ze,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),m(Qn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),m(Wn,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),m(Do,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),m(Do,"rel","nofollow"),m(zo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),m(zo,"rel","nofollow"),m(xo,"href","https://huggingface.co/patrickvonplaten"),m(xo,"rel","nofollow"),m(At,"id","transformers.LEDConfig"),m(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(At,"href","#transformers.LEDConfig"),m(lt,"class","relative group"),m(Hn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),m(Co,"href","https://huggingface.co/allenai/led-base-16384"),m(Co,"rel","nofollow"),m(Vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Rn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Nt,"id","transformers.LEDTokenizer"),m(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Nt,"href","#transformers.LEDTokenizer"),m(pt,"class","relative group"),m(Un,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),m(Xn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),m(Jn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qt,"id","transformers.LEDTokenizerFast"),m(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qt,"href","#transformers.LEDTokenizerFast"),m(ut,"class","relative group"),m(es,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizerFast"),m(ts,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),m(os,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ht,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),m(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ht,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),m(mt,"class","relative group"),m(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vt,"id","transformers.LEDModel"),m(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vt,"href","#transformers.LEDModel"),m(yt,"class","relative group"),m(ns,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dn,"rel","nofollow"),m(ss,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"id","transformers.LEDForConditionalGeneration"),m(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xt,"href","#transformers.LEDForConditionalGeneration"),m(Lt,"class","relative group"),m(as,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(mn,"rel","nofollow"),m(rs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yt,"id","transformers.LEDForSequenceClassification"),m(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yt,"href","#transformers.LEDForSequenceClassification"),m($t,"class","relative group"),m(ds,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(vn,"rel","nofollow"),m(is,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"id","transformers.LEDForQuestionAnswering"),m(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ao,"href","#transformers.LEDForQuestionAnswering"),m(Ft,"class","relative group"),m(ls,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qn,"rel","nofollow"),m(cs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering"),m(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(co,"id","transformers.TFLEDModel"),m(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(co,"href","#transformers.TFLEDModel"),m(Mt,"class","relative group"),m(hs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Mn,"rel","nofollow"),m(ps,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"id","transformers.TFLEDForConditionalGeneration"),m(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mo,"href","#transformers.TFLEDForConditionalGeneration"),m(Ct,"class","relative group"),m(us,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Pn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Pn,"rel","nofollow"),m(ms,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),g(o,b,_),g(o,p,_),e(p,u),e(u,T),w(i,T,null),e(p,f),e(p,D),e(D,Pe),g(o,pe,_),g(o,F,_),e(F,Z),e(Z,W),w(ee,W,null),e(F,Ne),e(F,H),e(H,Ie),g(o,qe,_),g(o,I,_),e(I,V),e(I,te),e(te,Te),e(I,C),g(o,j,_),g(o,ue,_),e(ue,oe),g(o,$e,_),g(o,me,_),e(me,R),e(R,Ge),g(o,De,_),g(o,O,_),e(O,Be),g(o,K,_),g(o,M,_),e(M,S),e(S,G),e(G,Qe),e(S,We),e(S,P),e(P,He),e(S,ne),e(S,ve),e(ve,q),e(S,z),e(S,se),e(se,nt),e(S,st),e(S,N),e(N,at),e(S,rt),e(S,Fe),e(Fe,U),e(S,ae),e(S,ze),e(ze,dt),e(S,re),e(M,it),e(M,de),e(de,Ve),e(de,Re),e(Re,rd),e(de,dd),e(de,qs),e(qs,id),e(de,ld),e(M,cd),e(M,ke),e(ke,hd),e(ke,$s),e($s,pd),e(ke,ud),e(ke,Ds),e(Ds,md),e(ke,fd),e(ke,Qn),e(Qn,_d),e(ke,gd),e(ke,Fs),e(Fs,bd),e(ke,Td),e(M,vd),e(M,X),e(X,kd),e(X,zs),e(zs,wd),e(X,yd),e(X,xs),e(xs,Ed),e(X,Ld),e(X,Wn),e(Wn,qd),e(X,$d),e(X,Ms),e(Ms,Dd),e(X,Fd),e(X,Ss),e(Ss,zd),e(X,xd),e(X,Cs),e(Cs,Md),e(X,Sd),e(M,Cd),e(M,Ue),e(Ue,Od),e(Ue,Os),e(Os,jd),e(Ue,Ad),e(Ue,js),e(js,Pd),e(Ue,Nd),e(Ue,As),e(As,Id),e(Ue,Gd),e(M,Bd),e(M,$o),e($o,Qd),e($o,Do),e(Do,Wd),e($o,Hd),e(M,Vd),e(M,Fo),e(Fo,Rd),e(Fo,zo),e(zo,Ud),e(Fo,Xd),g(o,Ha,_),g(o,jt,_),e(jt,Jd),e(jt,xo),e(xo,Zd),e(jt,Kd),g(o,Va,_),g(o,lt,_),e(lt,At),e(At,Ps),w(Mo,Ps,null),e(lt,Yd),e(lt,Ns),e(Ns,ei),g(o,Ra,_),g(o,we,_),w(So,we,null),e(we,ti),e(we,ct),e(ct,oi),e(ct,Hn),e(Hn,ni),e(ct,si),e(ct,Co),e(Co,ai),e(ct,ri),e(we,di),e(we,ht),e(ht,ii),e(ht,Vn),e(Vn,li),e(ht,ci),e(ht,Rn),e(Rn,hi),e(ht,pi),e(we,ui),w(Pt,we,null),g(o,Ua,_),g(o,pt,_),e(pt,Nt),e(Nt,Is),w(Oo,Is,null),e(pt,mi),e(pt,Gs),e(Gs,fi),g(o,Xa,_),g(o,A,_),w(jo,A,null),e(A,_i),e(A,Bs),e(Bs,gi),e(A,bi),e(A,It),e(It,Un),e(Un,Ti),e(It,vi),e(It,Xn),e(Xn,ki),e(It,wi),e(A,yi),e(A,Ao),e(Ao,Ei),e(Ao,Jn),e(Jn,Li),e(Ao,qi),e(A,$i),e(A,Xe),w(Po,Xe,null),e(Xe,Di),e(Xe,Qs),e(Qs,Fi),e(Xe,zi),e(Xe,No),e(No,Zn),e(Zn,xi),e(Zn,Ws),e(Ws,Mi),e(No,Si),e(No,Kn),e(Kn,Ci),e(Kn,Hs),e(Hs,Oi),e(A,ji),e(A,Gt),w(Io,Gt,null),e(Gt,Ai),e(Gt,Go),e(Go,Pi),e(Go,Vs),e(Vs,Ni),e(Go,Ii),e(A,Gi),e(A,Bt),w(Bo,Bt,null),e(Bt,Bi),e(Bt,Rs),e(Rs,Qi),e(A,Wi),e(A,Yn),w(Qo,Yn,null),g(o,Ja,_),g(o,ut,_),e(ut,Qt),e(Qt,Us),w(Wo,Us,null),e(ut,Hi),e(ut,Xs),e(Xs,Vi),g(o,Za,_),g(o,ye,_),w(Ho,ye,null),e(ye,Ri),e(ye,Vo),e(Vo,Ui),e(Vo,Js),e(Js,Xi),e(Vo,Ji),e(ye,Zi),e(ye,Wt),e(Wt,es),e(es,Ki),e(Wt,Yi),e(Wt,ts),e(ts,el),e(Wt,tl),e(ye,ol),e(ye,Ro),e(Ro,nl),e(Ro,os),e(os,sl),e(Ro,al),g(o,Ka,_),g(o,mt,_),e(mt,Ht),e(Ht,Zs),w(Uo,Zs,null),e(mt,rl),e(mt,Ks),e(Ks,dl),g(o,Ya,_),g(o,ft,_),w(Xo,ft,null),e(ft,il),e(ft,Ys),e(Ys,ll),g(o,er,_),g(o,_t,_),w(Jo,_t,null),e(_t,cl),e(_t,ea),e(ea,hl),g(o,tr,_),g(o,gt,_),w(Zo,gt,null),e(gt,pl),e(gt,ta),e(ta,ul),g(o,or,_),g(o,bt,_),w(Ko,bt,null),e(bt,ml),e(bt,oa),e(oa,fl),g(o,nr,_),g(o,Tt,_),w(Yo,Tt,null),e(Tt,_l),e(Tt,na),e(na,gl),g(o,sr,_),g(o,vt,_),w(en,vt,null),e(vt,bl),e(vt,sa),e(sa,Tl),g(o,ar,_),g(o,kt,_),w(tn,kt,null),e(kt,vl),e(kt,aa),e(aa,kl),g(o,rr,_),g(o,wt,_),w(on,wt,null),e(wt,wl),e(wt,ra),e(ra,yl),g(o,dr,_),g(o,yt,_),e(yt,Vt),e(Vt,da),w(nn,da,null),e(yt,El),e(yt,ia),e(ia,Ll),g(o,ir,_),g(o,Ee,_),w(sn,Ee,null),e(Ee,ql),e(Ee,an),e(an,$l),e(an,ns),e(ns,Dl),e(an,Fl),e(Ee,zl),e(Ee,rn),e(rn,xl),e(rn,dn),e(dn,Ml),e(rn,Sl),e(Ee,Cl),e(Ee,xe),w(ln,xe,null),e(xe,Ol),e(xe,Et),e(Et,jl),e(Et,ss),e(ss,Al),e(Et,Pl),e(Et,la),e(la,Nl),e(Et,Il),e(xe,Gl),w(Rt,xe,null),e(xe,Bl),w(Ut,xe,null),g(o,lr,_),g(o,Lt,_),e(Lt,Xt),e(Xt,ca),w(cn,ca,null),e(Lt,Ql),e(Lt,ha),e(ha,Wl),g(o,cr,_),g(o,Le,_),w(hn,Le,null),e(Le,Hl),e(Le,pn),e(pn,Vl),e(pn,as),e(as,Rl),e(pn,Ul),e(Le,Xl),e(Le,un),e(un,Jl),e(un,mn),e(mn,Zl),e(un,Kl),e(Le,Yl),e(Le,fe),w(fn,fe,null),e(fe,ec),e(fe,qt),e(qt,tc),e(qt,rs),e(rs,oc),e(qt,nc),e(qt,pa),e(pa,sc),e(qt,ac),e(fe,rc),w(Jt,fe,null),e(fe,dc),w(Zt,fe,null),e(fe,ic),w(Kt,fe,null),g(o,hr,_),g(o,$t,_),e($t,Yt),e(Yt,ua),w(_n,ua,null),e($t,lc),e($t,ma),e(ma,cc),g(o,pr,_),g(o,ie,_),w(gn,ie,null),e(ie,hc),e(ie,fa),e(fa,pc),e(ie,uc),e(ie,bn),e(bn,mc),e(bn,ds),e(ds,fc),e(bn,_c),e(ie,gc),e(ie,Tn),e(Tn,bc),e(Tn,vn),e(vn,Tc),e(Tn,vc),e(ie,kc),e(ie,B),w(kn,B,null),e(B,wc),e(B,Dt),e(Dt,yc),e(Dt,is),e(is,Ec),e(Dt,Lc),e(Dt,_a),e(_a,qc),e(Dt,$c),e(B,Dc),w(eo,B,null),e(B,Fc),w(to,B,null),e(B,zc),w(oo,B,null),e(B,xc),w(no,B,null),e(B,Mc),w(so,B,null),g(o,ur,_),g(o,Ft,_),e(Ft,ao),e(ao,ga),w(wn,ga,null),e(Ft,Sc),e(Ft,ba),e(ba,Cc),g(o,mr,_),g(o,le,_),w(yn,le,null),e(le,Oc),e(le,zt),e(zt,jc),e(zt,Ta),e(Ta,Ac),e(zt,Pc),e(zt,va),e(va,Nc),e(zt,Ic),e(le,Gc),e(le,En),e(En,Bc),e(En,ls),e(ls,Qc),e(En,Wc),e(le,Hc),e(le,Ln),e(Ln,Vc),e(Ln,qn),e(qn,Rc),e(Ln,Uc),e(le,Xc),e(le,_e),w($n,_e,null),e(_e,Jc),e(_e,xt),e(xt,Zc),e(xt,cs),e(cs,Kc),e(xt,Yc),e(xt,ka),e(ka,eh),e(xt,th),e(_e,oh),w(ro,_e,null),e(_e,nh),w(io,_e,null),e(_e,sh),w(lo,_e,null),g(o,fr,_),g(o,Mt,_),e(Mt,co),e(co,wa),w(Dn,wa,null),e(Mt,ah),e(Mt,ya),e(ya,rh),g(o,_r,_),g(o,ce,_),w(Fn,ce,null),e(ce,dh),e(ce,zn),e(zn,ih),e(zn,hs),e(hs,lh),e(zn,ch),e(ce,hh),e(ce,xn),e(xn,ph),e(xn,Mn),e(Mn,uh),e(xn,mh),e(ce,fh),w(ho,ce,null),e(ce,_h),e(ce,Me),w(Sn,Me,null),e(Me,gh),e(Me,St),e(St,bh),e(St,ps),e(ps,Th),e(St,vh),e(St,Ea),e(Ea,kh),e(St,wh),e(Me,yh),w(po,Me,null),e(Me,Eh),w(uo,Me,null),g(o,gr,_),g(o,Ct,_),e(Ct,mo),e(mo,La),w(Cn,La,null),e(Ct,Lh),e(Ct,qa),e(qa,qh),g(o,br,_),g(o,he,_),w(On,he,null),e(he,$h),e(he,jn),e(jn,Dh),e(jn,us),e(us,Fh),e(jn,zh),e(he,xh),e(he,An),e(An,Mh),e(An,Pn),e(Pn,Sh),e(An,Ch),e(he,Oh),w(fo,he,null),e(he,jh),e(he,Se),w(Nn,Se,null),e(Se,Ah),e(Se,Ot),e(Ot,Ph),e(Ot,ms),e(ms,Nh),e(Ot,Ih),e(Ot,$a),e($a,Gh),e(Ot,Bh),e(Se,Qh),w(_o,Se,null),e(Se,Wh),w(go,Se,null),Tr=!0},p(o,[_]){const In={};_&2&&(In.$$scope={dirty:_,ctx:o}),Pt.$set(In);const Da={};_&2&&(Da.$$scope={dirty:_,ctx:o}),Rt.$set(Da);const Fa={};_&2&&(Fa.$$scope={dirty:_,ctx:o}),Ut.$set(Fa);const za={};_&2&&(za.$$scope={dirty:_,ctx:o}),Jt.$set(za);const Gn={};_&2&&(Gn.$$scope={dirty:_,ctx:o}),Zt.$set(Gn);const xa={};_&2&&(xa.$$scope={dirty:_,ctx:o}),Kt.$set(xa);const Ma={};_&2&&(Ma.$$scope={dirty:_,ctx:o}),eo.$set(Ma);const Sa={};_&2&&(Sa.$$scope={dirty:_,ctx:o}),to.$set(Sa);const Bn={};_&2&&(Bn.$$scope={dirty:_,ctx:o}),oo.$set(Bn);const Ca={};_&2&&(Ca.$$scope={dirty:_,ctx:o}),no.$set(Ca);const Oa={};_&2&&(Oa.$$scope={dirty:_,ctx:o}),so.$set(Oa);const ja={};_&2&&(ja.$$scope={dirty:_,ctx:o}),ro.$set(ja);const Aa={};_&2&&(Aa.$$scope={dirty:_,ctx:o}),io.$set(Aa);const Pa={};_&2&&(Pa.$$scope={dirty:_,ctx:o}),lo.$set(Pa);const J={};_&2&&(J.$$scope={dirty:_,ctx:o}),ho.$set(J);const Q={};_&2&&(Q.$$scope={dirty:_,ctx:o}),po.$set(Q);const Na={};_&2&&(Na.$$scope={dirty:_,ctx:o}),uo.$set(Na);const Ia={};_&2&&(Ia.$$scope={dirty:_,ctx:o}),fo.$set(Ia);const Ga={};_&2&&(Ga.$$scope={dirty:_,ctx:o}),_o.$set(Ga);const Ba={};_&2&&(Ba.$$scope={dirty:_,ctx:o}),go.$set(Ba)},i(o){Tr||(y(i.$$.fragment,o),y(ee.$$.fragment,o),y(Mo.$$.fragment,o),y(So.$$.fragment,o),y(Pt.$$.fragment,o),y(Oo.$$.fragment,o),y(jo.$$.fragment,o),y(Po.$$.fragment,o),y(Io.$$.fragment,o),y(Bo.$$.fragment,o),y(Qo.$$.fragment,o),y(Wo.$$.fragment,o),y(Ho.$$.fragment,o),y(Uo.$$.fragment,o),y(Xo.$$.fragment,o),y(Jo.$$.fragment,o),y(Zo.$$.fragment,o),y(Ko.$$.fragment,o),y(Yo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(ln.$$.fragment,o),y(Rt.$$.fragment,o),y(Ut.$$.fragment,o),y(cn.$$.fragment,o),y(hn.$$.fragment,o),y(fn.$$.fragment,o),y(Jt.$$.fragment,o),y(Zt.$$.fragment,o),y(Kt.$$.fragment,o),y(_n.$$.fragment,o),y(gn.$$.fragment,o),y(kn.$$.fragment,o),y(eo.$$.fragment,o),y(to.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(so.$$.fragment,o),y(wn.$$.fragment,o),y(yn.$$.fragment,o),y($n.$$.fragment,o),y(ro.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(Dn.$$.fragment,o),y(Fn.$$.fragment,o),y(ho.$$.fragment,o),y(Sn.$$.fragment,o),y(po.$$.fragment,o),y(uo.$$.fragment,o),y(Cn.$$.fragment,o),y(On.$$.fragment,o),y(fo.$$.fragment,o),y(Nn.$$.fragment,o),y(_o.$$.fragment,o),y(go.$$.fragment,o),Tr=!0)},o(o){E(i.$$.fragment,o),E(ee.$$.fragment,o),E(Mo.$$.fragment,o),E(So.$$.fragment,o),E(Pt.$$.fragment,o),E(Oo.$$.fragment,o),E(jo.$$.fragment,o),E(Po.$$.fragment,o),E(Io.$$.fragment,o),E(Bo.$$.fragment,o),E(Qo.$$.fragment,o),E(Wo.$$.fragment,o),E(Ho.$$.fragment,o),E(Uo.$$.fragment,o),E(Xo.$$.fragment,o),E(Jo.$$.fragment,o),E(Zo.$$.fragment,o),E(Ko.$$.fragment,o),E(Yo.$$.fragment,o),E(en.$$.fragment,o),E(tn.$$.fragment,o),E(on.$$.fragment,o),E(nn.$$.fragment,o),E(sn.$$.fragment,o),E(ln.$$.fragment,o),E(Rt.$$.fragment,o),E(Ut.$$.fragment,o),E(cn.$$.fragment,o),E(hn.$$.fragment,o),E(fn.$$.fragment,o),E(Jt.$$.fragment,o),E(Zt.$$.fragment,o),E(Kt.$$.fragment,o),E(_n.$$.fragment,o),E(gn.$$.fragment,o),E(kn.$$.fragment,o),E(eo.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(no.$$.fragment,o),E(so.$$.fragment,o),E(wn.$$.fragment,o),E(yn.$$.fragment,o),E($n.$$.fragment,o),E(ro.$$.fragment,o),E(io.$$.fragment,o),E(lo.$$.fragment,o),E(Dn.$$.fragment,o),E(Fn.$$.fragment,o),E(ho.$$.fragment,o),E(Sn.$$.fragment,o),E(po.$$.fragment,o),E(uo.$$.fragment,o),E(Cn.$$.fragment,o),E(On.$$.fragment,o),E(fo.$$.fragment,o),E(Nn.$$.fragment,o),E(_o.$$.fragment,o),E(go.$$.fragment,o),Tr=!1},d(o){t(l),o&&t(b),o&&t(p),L(i),o&&t(pe),o&&t(F),L(ee),o&&t(qe),o&&t(I),o&&t(j),o&&t(ue),o&&t($e),o&&t(me),o&&t(De),o&&t(O),o&&t(K),o&&t(M),o&&t(Ha),o&&t(jt),o&&t(Va),o&&t(lt),L(Mo),o&&t(Ra),o&&t(we),L(So),L(Pt),o&&t(Ua),o&&t(pt),L(Oo),o&&t(Xa),o&&t(A),L(jo),L(Po),L(Io),L(Bo),L(Qo),o&&t(Ja),o&&t(ut),L(Wo),o&&t(Za),o&&t(ye),L(Ho),o&&t(Ka),o&&t(mt),L(Uo),o&&t(Ya),o&&t(ft),L(Xo),o&&t(er),o&&t(_t),L(Jo),o&&t(tr),o&&t(gt),L(Zo),o&&t(or),o&&t(bt),L(Ko),o&&t(nr),o&&t(Tt),L(Yo),o&&t(sr),o&&t(vt),L(en),o&&t(ar),o&&t(kt),L(tn),o&&t(rr),o&&t(wt),L(on),o&&t(dr),o&&t(yt),L(nn),o&&t(ir),o&&t(Ee),L(sn),L(ln),L(Rt),L(Ut),o&&t(lr),o&&t(Lt),L(cn),o&&t(cr),o&&t(Le),L(hn),L(fn),L(Jt),L(Zt),L(Kt),o&&t(hr),o&&t($t),L(_n),o&&t(pr),o&&t(ie),L(gn),L(kn),L(eo),L(to),L(oo),L(no),L(so),o&&t(ur),o&&t(Ft),L(wn),o&&t(mr),o&&t(le),L(yn),L($n),L(ro),L(io),L(lo),o&&t(fr),o&&t(Mt),L(Dn),o&&t(_r),o&&t(ce),L(Fn),L(ho),L(Sn),L(po),L(uo),o&&t(gr),o&&t(Ct),L(Cn),o&&t(br),o&&t(he),L(On),L(fo),L(Nn),L(_o),L(go)}}}const fm={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function _m($){return Ru(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ym extends Qu{constructor(l){super();Wu(this,l,_m,mm,Hu,{})}}export{ym as default,fm as metadata};
