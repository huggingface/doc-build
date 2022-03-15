import{S as Xm,i as Vm,s as Jm,e as l,k as m,w as j,t as r,M as Km,c as i,d as t,m as g,a as p,x as k,h as o,b as d,F as e,g as u,y as w,q as x,o as b,B as y,L as R}from"../chunks/vendor-6b77c823.js";import{T as Zm}from"../chunks/Tip-39098574.js";import{I as ws}from"../chunks/IconCopyLink-7a11ce68.js";import{C as A}from"../chunks/CodeBlock-3a8b25a8.js";import{D as sg}from"../chunks/DocNotebookDropdown-b2654249.js";import{F as we,M as H}from"../chunks/Markdown-4489c441.js";function eg($){let n,c,a,f,_;return{c(){n=l("p"),c=r(`All tasks presented here leverage pre-trained checkpoints that were fine-tuned on specific tasks. Loading a
checkpoint that was not fine-tuned on a specific task would load only the base transformer layers and not the
additional head that is used for the task, initializing the weights of that head randomly.`),a=m(),f=l("p"),_=r("This would produce random output.")},l(q){n=i(q,"P",{});var E=p(n);c=o(E,`All tasks presented here leverage pre-trained checkpoints that were fine-tuned on specific tasks. Loading a
checkpoint that was not fine-tuned on a specific task would load only the base transformer layers and not the
additional head that is used for the task, initializing the weights of that head randomly.`),E.forEach(t),a=g(q),f=i(q,"P",{});var I=p(f);_=o(I,"This would produce random output."),I.forEach(t)},m(q,E){u(q,n,E),e(n,c),u(q,a,E),u(q,f,E),e(f,_)},d(q){q&&t(n),q&&t(a),q&&t(f)}}}function tg($){let n,c;return n=new A({props:{code:`from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased-finetuned-mrpc")
model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased-finetuned-mrpc")

classes = ["not paraphrase", "is paraphrase"]

sequence_0 = "The company HuggingFace is based in New York City"
sequence_1 = "Apples are especially bad for your health"
sequence_2 = "HuggingFace's headquarters are situated in Manhattan"

# The tokenizer will automatically add any model specific separators (i.e. <CLS> and <SEP>) and tokens to
# the sequence, as well as compute the attention masks.
paraphrase = tokenizer(sequence_0, sequence_2, return_tensors="pt")
not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors="pt")

paraphrase_classification_logits = model(**paraphrase).logits
not_paraphrase_classification_logits = model(**not_paraphrase).logits

paraphrase_results = torch.softmax(paraphrase_classification_logits, dim=1).tolist()[0]
not_paraphrase_results = torch.softmax(not_paraphrase_classification_logits, dim=1).tolist()[0]

# Should be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(paraphrase_results[i] * 100))}%")

# Should not be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(not_paraphrase_results[i] * 100))}%")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>classes = [<span class="hljs-string">&quot;not paraphrase&quot;</span>, <span class="hljs-string">&quot;is paraphrase&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_0 = <span class="hljs-string">&quot;The company HuggingFace is based in New York City&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_1 = <span class="hljs-string">&quot;Apples are especially bad for your health&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_2 = <span class="hljs-string">&quot;HuggingFace&#x27;s headquarters are situated in Manhattan&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The tokenizer will automatically add any model specific separators (i.e. &lt;CLS&gt; and &lt;SEP&gt;) and tokens to</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the sequence, as well as compute the attention masks.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase = tokenizer(sequence_0, sequence_2, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_classification_logits = model(**paraphrase).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_classification_logits = model(**not_paraphrase).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_results = torch.softmax(paraphrase_classification_logits, dim=<span class="hljs-number">1</span>).tolist()[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_results = torch.softmax(not_paraphrase_classification_logits, dim=<span class="hljs-number">1</span>).tolist()[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">10</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">90</span>%

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should not be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(not_paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">94</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">6</span>%`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function ag($){let n,c;return n=new H({props:{$$slots:{default:[tg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function ng($){let n,c;return n=new A({props:{code:`from transformers import AutoTokenizer, TFAutoModelForSequenceClassification
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased-finetuned-mrpc")
model = TFAutoModelForSequenceClassification.from_pretrained("bert-base-cased-finetuned-mrpc")

classes = ["not paraphrase", "is paraphrase"]

sequence_0 = "The company HuggingFace is based in New York City"
sequence_1 = "Apples are especially bad for your health"
sequence_2 = "HuggingFace's headquarters are situated in Manhattan"

# The tokenizer will automatically add any model specific separators (i.e. <CLS> and <SEP>) and tokens to
# the sequence, as well as compute the attention masks.
paraphrase = tokenizer(sequence_0, sequence_2, return_tensors="tf")
not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors="tf")

paraphrase_classification_logits = model(paraphrase).logits
not_paraphrase_classification_logits = model(not_paraphrase).logits

paraphrase_results = tf.nn.softmax(paraphrase_classification_logits, axis=1).numpy()[0]
not_paraphrase_results = tf.nn.softmax(not_paraphrase_classification_logits, axis=1).numpy()[0]

# Should be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(paraphrase_results[i] * 100))}%")

# Should not be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(not_paraphrase_results[i] * 100))}%")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>classes = [<span class="hljs-string">&quot;not paraphrase&quot;</span>, <span class="hljs-string">&quot;is paraphrase&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_0 = <span class="hljs-string">&quot;The company HuggingFace is based in New York City&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_1 = <span class="hljs-string">&quot;Apples are especially bad for your health&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_2 = <span class="hljs-string">&quot;HuggingFace&#x27;s headquarters are situated in Manhattan&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The tokenizer will automatically add any model specific separators (i.e. &lt;CLS&gt; and &lt;SEP&gt;) and tokens to</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the sequence, as well as compute the attention masks.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase = tokenizer(sequence_0, sequence_2, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_classification_logits = model(paraphrase).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_classification_logits = model(not_paraphrase).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_results = tf.nn.softmax(paraphrase_classification_logits, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_results = tf.nn.softmax(not_paraphrase_classification_logits, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">10</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">90</span>%

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should not be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(not_paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">94</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">6</span>%`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function rg($){let n,c;return n=new H({props:{$$slots:{default:[ng]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function og($){let n,c;return n=new A({props:{code:`from transformers import AutoTokenizer, AutoModelForQuestionAnswering
import torch

tokenizer = AutoTokenizer.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")
model = AutoModelForQuestionAnswering.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")

text = r"""
\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
TensorFlow 2.0 and PyTorch.
"""

questions = [
    "How many pretrained models are available in \u{1F917} Transformers?",
    "What does \u{1F917} Transformers provide?",
    "\u{1F917} Transformers provides interoperability between which frameworks?",
]

for question in questions:
    inputs = tokenizer(question, text, add_special_tokens=True, return_tensors="pt")
    input_ids = inputs["input_ids"].tolist()[0]

    outputs = model(**inputs)
    answer_start_scores = outputs.start_logits
    answer_end_scores = outputs.end_logits

    # Get the most likely beginning of answer with the argmax of the score
    answer_start = torch.argmax(answer_start_scores)
    # Get the most likely end of answer with the argmax of the score
    answer_end = torch.argmax(answer_end_scores) + 1

    answer = tokenizer.convert_tokens_to_string(
        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
    )

    print(f"Question: {question}")
    print(f"Answer: {answer}")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">r&quot;&quot;&quot;
<span class="hljs-meta">... </span>\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
<span class="hljs-meta">... </span>architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
<span class="hljs-meta">... </span>Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
<span class="hljs-meta">... </span>TensorFlow 2.0 and PyTorch.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>questions = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many pretrained models are available in \u{1F917} Transformers?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What does \u{1F917} Transformers provide?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;\u{1F917} Transformers provides interoperability between which frameworks?&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> question <span class="hljs-keyword">in</span> questions:
<span class="hljs-meta">... </span>    inputs = tokenizer(question, text, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">... </span>    input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].tolist()[<span class="hljs-number">0</span>]

<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    answer_start_scores = outputs.start_logits
<span class="hljs-meta">... </span>    answer_end_scores = outputs.end_logits

<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely beginning of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_start = torch.argmax(answer_start_scores)
<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely end of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_end = torch.argmax(answer_end_scores) + <span class="hljs-number">1</span>

<span class="hljs-meta">... </span>    answer = tokenizer.convert_tokens_to_string(
<span class="hljs-meta">... </span>        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
<span class="hljs-meta">... </span>    )

<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Question: <span class="hljs-subst">{question}</span>&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Answer: <span class="hljs-subst">{answer}</span>&quot;</span>)
Question: How many pretrained models are available <span class="hljs-keyword">in</span> \u{1F917} Transformers?
Answer: over <span class="hljs-number">32</span> +
Question: What does \u{1F917} Transformers provide?
Answer: general - purpose architectures
Question: \u{1F917} Transformers provides interoperability between which frameworks?
Answer: tensorflow <span class="hljs-number">2.</span> <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> pytorch`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function lg($){let n,c;return n=new H({props:{$$slots:{default:[og]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function ig($){let n,c;return n=new A({props:{code:`from transformers import AutoTokenizer, TFAutoModelForQuestionAnswering
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")
model = TFAutoModelForQuestionAnswering.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")

text = r"""
\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
TensorFlow 2.0 and PyTorch.
"""

questions = [
    "How many pretrained models are available in \u{1F917} Transformers?",
    "What does \u{1F917} Transformers provide?",
    "\u{1F917} Transformers provides interoperability between which frameworks?",
]

for question in questions:
    inputs = tokenizer(question, text, add_special_tokens=True, return_tensors="tf")
    input_ids = inputs["input_ids"].numpy()[0]

    outputs = model(inputs)
    answer_start_scores = outputs.start_logits
    answer_end_scores = outputs.end_logits

    # Get the most likely beginning of answer with the argmax of the score
    answer_start = tf.argmax(answer_start_scores, axis=1).numpy()[0]
    # Get the most likely end of answer with the argmax of the score
    answer_end = tf.argmax(answer_end_scores, axis=1).numpy()[0] + 1

    answer = tokenizer.convert_tokens_to_string(
        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
    )

    print(f"Question: {question}")
    print(f"Answer: {answer}")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">r&quot;&quot;&quot;
<span class="hljs-meta">... </span>\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
<span class="hljs-meta">... </span>architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
<span class="hljs-meta">... </span>Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
<span class="hljs-meta">... </span>TensorFlow 2.0 and PyTorch.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>questions = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many pretrained models are available in \u{1F917} Transformers?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What does \u{1F917} Transformers provide?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;\u{1F917} Transformers provides interoperability between which frameworks?&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> question <span class="hljs-keyword">in</span> questions:
<span class="hljs-meta">... </span>    inputs = tokenizer(question, text, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">... </span>    input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>]

<span class="hljs-meta">... </span>    outputs = model(inputs)
<span class="hljs-meta">... </span>    answer_start_scores = outputs.start_logits
<span class="hljs-meta">... </span>    answer_end_scores = outputs.end_logits

<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely beginning of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_start = tf.argmax(answer_start_scores, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely end of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_end = tf.argmax(answer_end_scores, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>

<span class="hljs-meta">... </span>    answer = tokenizer.convert_tokens_to_string(
<span class="hljs-meta">... </span>        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
<span class="hljs-meta">... </span>    )

<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Question: <span class="hljs-subst">{question}</span>&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Answer: <span class="hljs-subst">{answer}</span>&quot;</span>)
Question: How many pretrained models are available <span class="hljs-keyword">in</span> \u{1F917} Transformers?
Answer: over <span class="hljs-number">32</span> +
Question: What does \u{1F917} Transformers provide?
Answer: general - purpose architectures
Question: \u{1F917} Transformers provides interoperability between which frameworks?
Answer: tensorflow <span class="hljs-number">2.</span> <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> pytorch`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function pg($){let n,c;return n=new H({props:{$$slots:{default:[ig]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function hg($){let n,c;return n=new A({props:{code:`from transformers import AutoModelForMaskedLM, AutoTokenizer
import torch

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-cased")
model = AutoModelForMaskedLM.from_pretrained("distilbert-base-cased")

sequence = (
    "Distilled models are smaller than the models they mimic. Using them instead of the large "
    f"versions would help {tokenizer.mask_token} our carbon footprint."
)

inputs = tokenizer(sequence, return_tensors="pt")
mask_token_index = torch.where(inputs["input_ids"] == tokenizer.mask_token_id)[1]

token_logits = model(**inputs).logits
mask_token_logits = token_logits[0, mask_token_index, :]

top_5_tokens = torch.topk(mask_token_logits, 5, dim=1).indices[0].tolist()

for token in top_5_tokens:
    print(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMaskedLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Distilled models are smaller than the models they mimic. Using them instead of the large &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;versions would help <span class="hljs-subst">{tokenizer.mask_token}</span> our carbon footprint.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = torch.where(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>] == tokenizer.mask_token_id)[<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_logits = token_logits[<span class="hljs-number">0</span>, mask_token_index, :]

<span class="hljs-meta">&gt;&gt;&gt; </span>top_5_tokens = torch.topk(mask_token_logits, <span class="hljs-number">5</span>, dim=<span class="hljs-number">1</span>).indices[<span class="hljs-number">0</span>].tolist()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> token <span class="hljs-keyword">in</span> top_5_tokens:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> reduce our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> increase our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> decrease our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> offset our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> improve our carbon footprint.`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function cg($){let n,c;return n=new H({props:{$$slots:{default:[hg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function ug($){let n,c;return n=new A({props:{code:`from transformers import TFAutoModelForMaskedLM, AutoTokenizer
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-cased")
model = TFAutoModelForMaskedLM.from_pretrained("distilbert-base-cased")

sequence = (
    "Distilled models are smaller than the models they mimic. Using them instead of the large "
    f"versions would help {tokenizer.mask_token} our carbon footprint."
)

inputs = tokenizer(sequence, return_tensors="tf")
mask_token_index = tf.where(inputs["input_ids"] == tokenizer.mask_token_id)[0, 1]

token_logits = model(**inputs).logits
mask_token_logits = token_logits[0, mask_token_index, :]

top_5_tokens = tf.math.top_k(mask_token_logits, 5).indices.numpy()

for token in top_5_tokens:
    print(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMaskedLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Distilled models are smaller than the models they mimic. Using them instead of the large &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;versions would help <span class="hljs-subst">{tokenizer.mask_token}</span> our carbon footprint.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>] == tokenizer.mask_token_id)[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_logits = token_logits[<span class="hljs-number">0</span>, mask_token_index, :]

<span class="hljs-meta">&gt;&gt;&gt; </span>top_5_tokens = tf.math.top_k(mask_token_logits, <span class="hljs-number">5</span>).indices.numpy()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> token <span class="hljs-keyword">in</span> top_5_tokens:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> reduce our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> increase our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> decrease our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> offset our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> improve our carbon footprint.`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function mg($){let n,c;return n=new H({props:{$$slots:{default:[ug]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function gg($){let n,c,a,f,_,q,E,I;return E=new A({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer, top_k_top_p_filtering
import torch
from torch import nn

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

sequence = f"Hugging Face is based in DUMBO, New York City, and"

inputs = tokenizer(sequence, return_tensors="pt")
input_ids = inputs["input_ids"]

# get logits of last hidden state
next_token_logits = model(**inputs).logits[:, -1, :]

# filter
filtered_next_token_logits = top_k_top_p_filtering(next_token_logits, top_k=50, top_p=1.0)

# sample
probs = nn.functional.softmax(filtered_next_token_logits, dim=-1)
next_token = torch.multinomial(probs, num_samples=1)

generated = torch.cat([input_ids, next_token], dim=-1)

resulting_string = tokenizer.decode(generated.tolist()[0])
print(resulting_string)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer, top_k_top_p_filtering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torch <span class="hljs-keyword">import</span> nn

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">f&quot;Hugging Face is based in DUMBO, New York City, and&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># get logits of last hidden state</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = model(**inputs).logits[:, -<span class="hljs-number">1</span>, :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># filter</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filtered_next_token_logits = top_k_top_p_filtering(next_token_logits, top_k=<span class="hljs-number">50</span>, top_p=<span class="hljs-number">1.0</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = nn.functional.softmax(filtered_next_token_logits, dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token = torch.multinomial(probs, num_samples=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated = torch.cat([input_ids, next_token], dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>resulting_string = tokenizer.decode(generated.tolist()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(resulting_string)
Hugging Face <span class="hljs-keyword">is</span> based <span class="hljs-keyword">in</span> DUMBO, New York City, <span class="hljs-keyword">and</span> ...`}}),{c(){n=l("p"),c=r(`Here is an example of using the tokenizer and model and leveraging the
`),a=l("a"),f=r("top_k_top_p_filtering()"),_=r(` method to sample the next token following an input sequence
of tokens.`),q=m(),j(E.$$.fragment),this.h()},l(v){n=i(v,"P",{});var z=p(n);c=o(z,`Here is an example of using the tokenizer and model and leveraging the
`),a=i(z,"A",{href:!0});var F=p(a);f=o(F,"top_k_top_p_filtering()"),F.forEach(t),_=o(z,` method to sample the next token following an input sequence
of tokens.`),z.forEach(t),q=g(v),k(E.$$.fragment,v),this.h()},h(){d(a,"href","/docs/transformers/master/en/internal/generation_utils#transformers.top_k_top_p_filtering")},m(v,z){u(v,n,z),e(n,c),e(n,a),e(a,f),e(n,_),u(v,q,z),w(E,v,z),I=!0},p:R,i(v){I||(x(E.$$.fragment,v),I=!0)},o(v){b(E.$$.fragment,v),I=!1},d(v){v&&t(n),v&&t(q),y(E,v)}}}function fg($){let n,c;return n=new H({props:{$$slots:{default:[gg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function dg($){let n,c,a,f,_,q,E,I;return E=new A({props:{code:`from transformers import TFAutoModelForCausalLM, AutoTokenizer, tf_top_k_top_p_filtering
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = TFAutoModelForCausalLM.from_pretrained("gpt2")

sequence = f"Hugging Face is based in DUMBO, New York City, and"

inputs = tokenizer(sequence, return_tensors="tf")
input_ids = inputs["input_ids"]

# get logits of last hidden state
next_token_logits = model(**inputs).logits[:, -1, :]

# filter
filtered_next_token_logits = tf_top_k_top_p_filtering(next_token_logits, top_k=50, top_p=1.0)

# sample
next_token = tf.random.categorical(filtered_next_token_logits, dtype=tf.int32, num_samples=1)

generated = tf.concat([input_ids, next_token], axis=1)

resulting_string = tokenizer.decode(generated.numpy().tolist()[0])
print(resulting_string)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForCausalLM, AutoTokenizer, tf_top_k_top_p_filtering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">f&quot;Hugging Face is based in DUMBO, New York City, and&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># get logits of last hidden state</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = model(**inputs).logits[:, -<span class="hljs-number">1</span>, :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># filter</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filtered_next_token_logits = tf_top_k_top_p_filtering(next_token_logits, top_k=<span class="hljs-number">50</span>, top_p=<span class="hljs-number">1.0</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token = tf.random.categorical(filtered_next_token_logits, dtype=tf.int32, num_samples=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated = tf.concat([input_ids, next_token], axis=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>resulting_string = tokenizer.decode(generated.numpy().tolist()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(resulting_string)
Hugging Face <span class="hljs-keyword">is</span> based <span class="hljs-keyword">in</span> DUMBO, New York City, <span class="hljs-keyword">and</span> ...`}}),{c(){n=l("p"),c=r(`Here is an example of using the tokenizer and model and leveraging the
`),a=l("a"),f=r("tf_top_k_top_p_filtering()"),_=r(` method to sample the next token following an input sequence
of tokens.`),q=m(),j(E.$$.fragment),this.h()},l(v){n=i(v,"P",{});var z=p(n);c=o(z,`Here is an example of using the tokenizer and model and leveraging the
`),a=i(z,"A",{href:!0});var F=p(a);f=o(F,"tf_top_k_top_p_filtering()"),F.forEach(t),_=o(z,` method to sample the next token following an input sequence
of tokens.`),z.forEach(t),q=g(v),k(E.$$.fragment,v),this.h()},h(){d(a,"href","/docs/transformers/master/en/internal/generation_utils#transformers.tf_top_k_top_p_filtering")},m(v,z){u(v,n,z),e(n,c),e(n,a),e(a,f),e(n,_),u(v,q,z),w(E,v,z),I=!0},p:R,i(v){I||(x(E.$$.fragment,v),I=!0)},o(v){b(E.$$.fragment,v),I=!1},d(v){v&&t(n),v&&t(q),y(E,v)}}}function _g($){let n,c;return n=new H({props:{$$slots:{default:[dg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function jg($){let n,c,a,f,_,q,E,I,v,z,F,Ss,os,xs,Ds,V,bs,ls,xe,Os,G,is,ys,Bs,J,U,be,$s,Rs,rs,K;return n=new A({props:{code:`from transformers import pipeline

text_generator = pipeline("text-generation")
print(text_generator("As far as I am concerned, I will", max_length=50, do_sample=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>text_generator = pipeline(<span class="hljs-string">&quot;text-generation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(text_generator(<span class="hljs-string">&quot;As far as I am concerned, I will&quot;</span>, max_length=<span class="hljs-number">50</span>, do_sample=<span class="hljs-literal">False</span>))
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;As far as I am concerned, I will be the first to admit that I am not a fan of the idea of a
&quot;free market.&quot; I think that the idea of a free market is a bit of a stretch. I think that the idea&#x27;</span>}]`}}),rs=new A({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("xlnet-base-cased")
tokenizer = AutoTokenizer.from_pretrained("xlnet-base-cased")

# Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology
PADDING_TEXT = """In 1991, the remains of Russian Tsar Nicholas II and his family
(except for Alexei and Maria) are discovered.
The voice of Nicholas's young son, Tsarevich Alexei Nikolaevich, narrates the
remainder of the story. 1883 Western Siberia,
a young Grigori Rasputin is asked by his father and a group of men to perform magic.
Rasputin has a vision and denounces one of the men as a horse thief. Although his
father initially slaps him for making such an accusation, Rasputin watches as the
man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
with people, even a bishop, begging for his blessing. <eod> </s> <eos>"""

prompt = "Today the weather is really nice and I am planning on "
inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=False, return_tensors="pt")["input_ids"]

prompt_length = len(tokenizer.decode(inputs[0]))
outputs = model.generate(inputs, max_length=250, do_sample=True, top_p=0.95, top_k=60)
generated = prompt + tokenizer.decode(outputs[0])[prompt_length + 1 :]

print(generated)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>PADDING_TEXT = <span class="hljs-string">&quot;&quot;&quot;In 1991, the remains of Russian Tsar Nicholas II and his family
<span class="hljs-meta">... </span>(except for Alexei and Maria) are discovered.
<span class="hljs-meta">... </span>The voice of Nicholas&#x27;s young son, Tsarevich Alexei Nikolaevich, narrates the
<span class="hljs-meta">... </span>remainder of the story. 1883 Western Siberia,
<span class="hljs-meta">... </span>a young Grigori Rasputin is asked by his father and a group of men to perform magic.
<span class="hljs-meta">... </span>Rasputin has a vision and denounces one of the men as a horse thief. Although his
<span class="hljs-meta">... </span>father initially slaps him for making such an accusation, Rasputin watches as the
<span class="hljs-meta">... </span>man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
<span class="hljs-meta">... </span>the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
<span class="hljs-meta">... </span>with people, even a bishop, begging for his blessing. &lt;eod&gt; &lt;/s&gt; &lt;eos&gt;&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today the weather is really nice and I am planning on &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt_length = <span class="hljs-built_in">len</span>(tokenizer.decode(inputs[<span class="hljs-number">0</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs, max_length=<span class="hljs-number">250</span>, do_sample=<span class="hljs-literal">True</span>, top_p=<span class="hljs-number">0.95</span>, top_k=<span class="hljs-number">60</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = prompt + tokenizer.decode(outputs[<span class="hljs-number">0</span>])[prompt_length + <span class="hljs-number">1</span> :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated)
Today the weather <span class="hljs-keyword">is</span> really nice <span class="hljs-keyword">and</span> I am planning ...`}}),{c(){j(n.$$.fragment),c=m(),a=l("p"),f=r("Here, the model generates a random text with a total maximal length of "),_=l("em"),q=r("50"),E=r(" tokens from context "),I=l("em"),v=r(`\u201CAs far as I am
concerned, I will\u201D`),z=r(`. Behind the scenes, the pipeline object calls the method
`),F=l("a"),Ss=r("PreTrainedModel.generate()"),os=r(` to generate text. The default arguments for this method can be
overridden in the pipeline, as is shown above for the arguments `),xs=l("code"),Ds=r("max_length"),V=r(" and "),bs=l("code"),ls=r("do_sample"),xe=r("."),Os=m(),G=l("p"),is=r("Below is an example of text generation using "),ys=l("code"),Bs=r("XLNet"),J=r(" and its tokenizer, which includes calling "),U=l("code"),be=r("generate()"),$s=r(" directly:"),Rs=m(),j(rs.$$.fragment),this.h()},l(T){k(n.$$.fragment,T),c=g(T),a=i(T,"P",{});var M=p(a);f=o(M,"Here, the model generates a random text with a total maximal length of "),_=i(M,"EM",{});var ft=p(_);q=o(ft,"50"),ft.forEach(t),E=o(M," tokens from context "),I=i(M,"EM",{});var ps=p(I);v=o(ps,`\u201CAs far as I am
concerned, I will\u201D`),ps.forEach(t),z=o(M,`. Behind the scenes, the pipeline object calls the method
`),F=i(M,"A",{href:!0});var dt=p(F);Ss=o(dt,"PreTrainedModel.generate()"),dt.forEach(t),os=o(M,` to generate text. The default arguments for this method can be
overridden in the pipeline, as is shown above for the arguments `),xs=i(M,"CODE",{});var hs=p(xs);Ds=o(hs,"max_length"),hs.forEach(t),V=o(M," and "),bs=i(M,"CODE",{});var _t=p(bs);ls=o(_t,"do_sample"),_t.forEach(t),xe=o(M,"."),M.forEach(t),Os=g(T),G=i(T,"P",{});var cs=p(G);is=o(cs,"Below is an example of text generation using "),ys=i(cs,"CODE",{});var ye=p(ys);Bs=o(ye,"XLNet"),ye.forEach(t),J=o(cs," and its tokenizer, which includes calling "),U=i(cs,"CODE",{});var vs=p(U);be=o(vs,"generate()"),vs.forEach(t),$s=o(cs," directly:"),cs.forEach(t),Rs=g(T),k(rs.$$.fragment,T),this.h()},h(){d(F,"href","/docs/transformers/master/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate")},m(T,M){w(n,T,M),u(T,c,M),u(T,a,M),e(a,f),e(a,_),e(_,q),e(a,E),e(a,I),e(I,v),e(a,z),e(a,F),e(F,Ss),e(a,os),e(a,xs),e(xs,Ds),e(a,V),e(a,bs),e(bs,ls),e(a,xe),u(T,Os,M),u(T,G,M),e(G,is),e(G,ys),e(ys,Bs),e(G,J),e(G,U),e(U,be),e(G,$s),u(T,Rs,M),w(rs,T,M),K=!0},p:R,i(T){K||(x(n.$$.fragment,T),x(rs.$$.fragment,T),K=!0)},o(T){b(n.$$.fragment,T),b(rs.$$.fragment,T),K=!1},d(T){y(n,T),T&&t(c),T&&t(a),T&&t(Os),T&&t(G),T&&t(Rs),y(rs,T)}}}function kg($){let n,c;return n=new H({props:{$$slots:{default:[jg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function wg($){let n,c;return n=new A({props:{code:`from transformers import TFAutoModelForCausalLM, AutoTokenizer

model = TFAutoModelForCausalLM.from_pretrained("xlnet-base-cased")
tokenizer = AutoTokenizer.from_pretrained("xlnet-base-cased")

# Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology
PADDING_TEXT = """In 1991, the remains of Russian Tsar Nicholas II and his family
(except for Alexei and Maria) are discovered.
The voice of Nicholas's young son, Tsarevich Alexei Nikolaevich, narrates the
remainder of the story. 1883 Western Siberia,
a young Grigori Rasputin is asked by his father and a group of men to perform magic.
Rasputin has a vision and denounces one of the men as a horse thief. Although his
father initially slaps him for making such an accusation, Rasputin watches as the
man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
with people, even a bishop, begging for his blessing. <eod> </s> <eos>"""

prompt = "Today the weather is really nice and I am planning on "
inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=False, return_tensors="tf")["input_ids"]

prompt_length = len(tokenizer.decode(inputs[0]))
outputs = model.generate(inputs, max_length=250, do_sample=True, top_p=0.95, top_k=60)
generated = prompt + tokenizer.decode(outputs[0])[prompt_length + 1 :]

print(generated)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>PADDING_TEXT = <span class="hljs-string">&quot;&quot;&quot;In 1991, the remains of Russian Tsar Nicholas II and his family
<span class="hljs-meta">... </span>(except for Alexei and Maria) are discovered.
<span class="hljs-meta">... </span>The voice of Nicholas&#x27;s young son, Tsarevich Alexei Nikolaevich, narrates the
<span class="hljs-meta">... </span>remainder of the story. 1883 Western Siberia,
<span class="hljs-meta">... </span>a young Grigori Rasputin is asked by his father and a group of men to perform magic.
<span class="hljs-meta">... </span>Rasputin has a vision and denounces one of the men as a horse thief. Although his
<span class="hljs-meta">... </span>father initially slaps him for making such an accusation, Rasputin watches as the
<span class="hljs-meta">... </span>man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
<span class="hljs-meta">... </span>the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
<span class="hljs-meta">... </span>with people, even a bishop, begging for his blessing. &lt;eod&gt; &lt;/s&gt; &lt;eos&gt;&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today the weather is really nice and I am planning on &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt_length = <span class="hljs-built_in">len</span>(tokenizer.decode(inputs[<span class="hljs-number">0</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs, max_length=<span class="hljs-number">250</span>, do_sample=<span class="hljs-literal">True</span>, top_p=<span class="hljs-number">0.95</span>, top_k=<span class="hljs-number">60</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = prompt + tokenizer.decode(outputs[<span class="hljs-number">0</span>])[prompt_length + <span class="hljs-number">1</span> :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated)
Today the weather <span class="hljs-keyword">is</span> really nice <span class="hljs-keyword">and</span> I am planning ...`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function xg($){let n,c;return n=new H({props:{$$slots:{default:[wg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function bg($){let n,c;return n=new A({props:{code:`from transformers import AutoModelForTokenClassification, AutoTokenizer
import torch

model = AutoModelForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

sequence = (
    "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, "
    "therefore very close to the Manhattan Bridge."
)

inputs = tokenizer(sequence, return_tensors="pt")
tokens = inputs.tokens()

outputs = model(**inputs).logits
predictions = torch.argmax(outputs, dim=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;therefore very close to the Manhattan Bridge.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = inputs.tokens()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predictions = torch.argmax(outputs, dim=<span class="hljs-number">2</span>)`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function yg($){let n,c;return n=new H({props:{$$slots:{default:[bg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function $g($){let n,c;return n=new A({props:{code:`from transformers import TFAutoModelForTokenClassification, AutoTokenizer
import tensorflow as tf

model = TFAutoModelForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

sequence = (
    "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, "
    "therefore very close to the Manhattan Bridge."
)

inputs = tokenizer(sequence, return_tensors="tf")
tokens = inputs.tokens()

outputs = model(**inputs)[0]
predictions = tf.argmax(outputs, axis=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;therefore very close to the Manhattan Bridge.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = inputs.tokens()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predictions = tf.argmax(outputs, axis=<span class="hljs-number">2</span>)`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function vg($){let n,c;return n=new H({props:{$$slots:{default:[$g]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function qg($){let n,c;return n=new A({props:{code:`from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

# T5 uses a max_length of 512 so we cut the article to 512 tokens.
inputs = tokenizer("summarize: " + ARTICLE, return_tensors="pt", max_length=512, truncation=True)
outputs = model.generate(
    inputs["input_ids"], max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True
)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># T5 uses a max_length of 512 so we cut the article to 512 tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;summarize: &quot;</span> + ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, max_length=<span class="hljs-number">512</span>, truncation=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">150</span>, min_length=<span class="hljs-number">40</span>, length_penalty=<span class="hljs-number">2.0</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; prosecutors say the marriages were part of an immigration scam. <span class="hljs-keyword">if</span> convicted, barrientos faces two criminal
counts of <span class="hljs-string">&quot;offering a false instrument for filing in the first degree&quot;</span> she has been married <span class="hljs-number">10</span> times, nine of them
between <span class="hljs-number">1999</span> <span class="hljs-keyword">and</span> <span class="hljs-number">2002.</span>&lt;/s&gt;`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function Tg($){let n,c;return n=new H({props:{$$slots:{default:[qg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function Eg($){let n,c;return n=new A({props:{code:`from transformers import TFAutoModelForSeq2SeqLM, AutoTokenizer

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

# T5 uses a max_length of 512 so we cut the article to 512 tokens.
inputs = tokenizer("summarize: " + ARTICLE, return_tensors="tf", max_length=512)
outputs = model.generate(
    inputs["input_ids"], max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True
)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># T5 uses a max_length of 512 so we cut the article to 512 tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;summarize: &quot;</span> + ARTICLE, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, max_length=<span class="hljs-number">512</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">150</span>, min_length=<span class="hljs-number">40</span>, length_penalty=<span class="hljs-number">2.0</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; prosecutors say the marriages were part of an immigration scam. <span class="hljs-keyword">if</span> convicted, barrientos faces two criminal
counts of <span class="hljs-string">&quot;offering a false instrument for filing in the first degree&quot;</span> she has been married <span class="hljs-number">10</span> times, nine of them
between <span class="hljs-number">1999</span> <span class="hljs-keyword">and</span> <span class="hljs-number">2002.</span>`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function Ag($){let n,c;return n=new H({props:{$$slots:{default:[Eg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function zg($){let n,c;return n=new A({props:{code:`from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

inputs = tokenizer(
    "translate English to German: Hugging Face is a technology company based in New York and Paris",
    return_tensors="pt",
)
outputs = model.generate(inputs["input_ids"], max_length=40, num_beams=4, early_stopping=True)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;translate English to German: Hugging Face is a technology company based in New York and Paris&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">40</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; Hugging Face ist ein Technologieunternehmen mit Sitz <span class="hljs-keyword">in</span> New York und Paris.&lt;/s&gt;`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function Ig($){let n,c;return n=new H({props:{$$slots:{default:[zg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function Mg($){let n,c;return n=new A({props:{code:`from transformers import TFAutoModelForSeq2SeqLM, AutoTokenizer

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

inputs = tokenizer(
    "translate English to German: Hugging Face is a technology company based in New York and Paris",
    return_tensors="tf",
)
outputs = model.generate(inputs["input_ids"], max_length=40, num_beams=4, early_stopping=True)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;translate English to German: Hugging Face is a technology company based in New York and Paris&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">40</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; Hugging Face ist ein Technologieunternehmen mit Sitz <span class="hljs-keyword">in</span> New York und Paris.`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p:R,i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function Lg($){let n,c;return n=new H({props:{$$slots:{default:[Mg]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),c=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){c||(x(n.$$.fragment,a),c=!0)},o(a){b(n.$$.fragment,a),c=!1},d(a){y(n,a)}}}function Pg($){let n,c,a,f,_,q,E,I,v,z,F,Ss,os,xs,Ds,V,bs,ls,xe,Os,G,is,ys,Bs,J,U,be,$s,Rs,rs,K,T,M,ft,ps,dt,hs,_t,cs,ye,vs,No,Dn,Hs,Kt,Co,So,Zt,Do,On,jt,Oo,Bn,Gs,Rn,qs,Us,sa,$e,Bo,ea,Ro,Hn,Q,Ho,ve,Go,Uo,qe,Qo,Yo,Te,Wo,Xo,Ee,Vo,Jo,Gn,kt,Ko,Un,wt,Zo,Qn,Ae,Yn,xt,sl,Wn,Y,ta,el,tl,aa,al,nl,na,rl,ol,ra,ll,il,oa,pl,Xn,Qs,Vn,Ts,Ys,la,ze,hl,ia,cl,Jn,us,ul,Ie,ml,gl,Me,fl,dl,Kn,bt,_l,Zn,Le,sr,yt,jl,er,Pe,tr,$t,kl,ar,C,pa,wl,xl,ha,bl,yl,ca,$l,vl,ua,ql,Tl,ma,El,Al,ga,zl,Il,fa,Ml,nr,Ws,rr,Es,Xs,da,Fe,Ll,_a,Pl,or,vt,Fl,lr,Vs,Nl,Ne,Cl,Sl,ir,As,Js,ja,Ce,Dl,ka,Ol,pr,ms,Bl,Se,Rl,Hl,De,Gl,Ul,hr,qt,Ql,cr,Oe,ur,Tt,Yl,mr,Be,gr,Et,Wl,fr,D,wa,Xl,Vl,Re,Jl,xa,Kl,Zl,si,ba,ei,ti,ya,ai,ni,zs,ri,$a,oi,li,va,ii,pi,hi,qa,ci,dr,Ks,_r,At,ui,jr,Is,Zs,Ta,He,mi,Ea,gi,kr,se,fi,Ge,di,_i,wr,zt,ji,xr,ee,br,gs,ki,Aa,wi,xi,za,bi,yi,yr,te,$i,It,vi,qi,$r,Ms,ae,Ia,Ue,Ti,Ma,Ei,vr,O,Ai,La,zi,Ii,Pa,Mi,Li,Fa,Pi,Fi,Na,Ni,Ci,Qe,Si,Di,qr,ne,Tr,L,Oi,Ca,Bi,Ri,Sa,Hi,Gi,Da,Ui,Qi,Oa,Yi,Wi,Ba,Xi,Vi,Ra,Ji,Ki,Ha,Zi,sp,Ga,ep,tp,Ua,ap,np,Er,re,rp,Ye,op,lp,Ar,Ls,oe,Qa,We,ip,Ya,pp,zr,le,hp,Xe,cp,up,Ir,Mt,mp,Mr,P,Wa,gp,fp,Xa,dp,_p,Va,jp,kp,Ja,wp,xp,Ka,bp,yp,Za,$p,vp,sn,qp,Tp,en,Ep,Ap,tn,zp,Lr,fs,Ip,Ve,Mp,Lp,Je,Pp,Fp,Pr,Ke,Fr,Lt,Np,Nr,Ze,Cr,Pt,Cp,Sr,Ft,Sp,Dr,B,an,Dp,Op,nn,Bp,Rp,rn,Hp,Gp,on,Up,Qp,ln,Yp,Wp,pn,Xp,Or,ie,Br,Nt,Vp,Rr,ds,Jp,hn,Kp,Zp,cn,sh,eh,Hr,st,Gr,Ps,pe,un,et,th,mn,ah,Ur,he,nh,tt,rh,oh,Qr,ce,lh,at,ih,ph,Yr,Ct,hh,Wr,nt,Xr,W,ch,gn,uh,mh,fn,gh,fh,dn,dh,_h,_n,jh,kh,Vr,rt,Jr,St,wh,Kr,Z,Fs,xh,jn,bh,yh,kn,$h,vh,qh,wn,Th,Eh,xn,Ah,zh,ot,Ih,bn,Mh,Lh,Zr,Dt,Ph,so,ue,eo,Ns,me,yn,lt,Fh,$n,Nh,to,ge,Ch,it,Sh,Dh,ao,fe,Oh,pt,Bh,Rh,no,Ot,Hh,ro,ht,oo,ss,Gh,vn,Uh,Qh,qn,Yh,Wh,Tn,Xh,Vh,lo,Bt,Jh,io,es,Cs,Kh,En,Zh,sc,An,ec,tc,ac,zn,nc,rc,In,oc,lc,ct,ic,Mn,pc,hc,po,de,ho,Rt,cc,co;return q=new ws({}),F=new sg({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/task_summary.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/task_summary.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/task_summary.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/task_summary.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/task_summary.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/task_summary.ipynb"}]}}),Gs=new Zm({props:{$$slots:{default:[eg]},$$scope:{ctx:$}}}),$e=new ws({}),Ae=new A({props:{code:`from transformers import pipeline

classifier = pipeline("sentiment-analysis")

result = classifier("I hate you")[0]
print(f"label: {result['label']}, with score: {round(result['score'], 4)}")

result = classifier("I love you")[0]
print(f"label: {result['label']}, with score: {round(result['score'], 4)}")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(<span class="hljs-string">&quot;sentiment-analysis&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>result = classifier(<span class="hljs-string">&quot;I hate you&quot;</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;label: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;label&#x27;</span>]}</span>, with score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>&quot;</span>)
label: NEGATIVE, <span class="hljs-keyword">with</span> score: <span class="hljs-number">0.9991</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>result = classifier(<span class="hljs-string">&quot;I love you&quot;</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;label: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;label&#x27;</span>]}</span>, with score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>&quot;</span>)
label: POSITIVE, <span class="hljs-keyword">with</span> score: <span class="hljs-number">0.9999</span>`}}),Qs=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[rg],pytorch:[ag]},$$scope:{ctx:$}}}),ze=new ws({}),Le=new A({props:{code:`from transformers import pipeline

question_answerer = pipeline("question-answering")

context = r"""
Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune
a model on a SQuAD task, you may leverage the examples/pytorch/question-answering/run_squad.py script.
"""`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>question_answerer = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">r&quot;&quot;&quot;
<span class="hljs-meta">... </span>Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
<span class="hljs-meta">... </span>question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune
<span class="hljs-meta">... </span>a model on a SQuAD task, you may leverage the examples/pytorch/question-answering/run_squad.py script.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>`}}),Pe=new A({props:{code:`result = question_answerer(question="What is extractive question answering?", context=context)
print(
    f"Answer: '{result['answer']}', score: {round(result['score'], 4)}, start: {result['start']}, end: {result['end']}"
)

result = question_answerer(question="What is a good example of a question answering dataset?", context=context)
print(
    f"Answer: '{result['answer']}', score: {round(result['score'], 4)}, start: {result['start']}, end: {result['end']}"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>result = question_answerer(question=<span class="hljs-string">&quot;What is extractive question answering?&quot;</span>, context=context)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;Answer: &#x27;<span class="hljs-subst">{result[<span class="hljs-string">&#x27;answer&#x27;</span>]}</span>&#x27;, score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>, start: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;start&#x27;</span>]}</span>, end: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;end&#x27;</span>]}</span>&quot;</span>
<span class="hljs-meta">... </span>)
Answer: <span class="hljs-string">&#x27;the task of extracting an answer from a text given a question&#x27;</span>, score: <span class="hljs-number">0.6177</span>, start: <span class="hljs-number">34</span>, end: <span class="hljs-number">95</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>result = question_answerer(question=<span class="hljs-string">&quot;What is a good example of a question answering dataset?&quot;</span>, context=context)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;Answer: &#x27;<span class="hljs-subst">{result[<span class="hljs-string">&#x27;answer&#x27;</span>]}</span>&#x27;, score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>, start: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;start&#x27;</span>]}</span>, end: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;end&#x27;</span>]}</span>&quot;</span>
<span class="hljs-meta">... </span>)
Answer: <span class="hljs-string">&#x27;SQuAD dataset&#x27;</span>, score: <span class="hljs-number">0.5152</span>, start: <span class="hljs-number">147</span>, end: <span class="hljs-number">160</span>`}}),Ws=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[pg],pytorch:[lg]},$$scope:{ctx:$}}}),Fe=new ws({}),Ce=new ws({}),Oe=new A({props:{code:`from transformers import pipeline

unmasker = pipeline("fill-mask")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>unmasker = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>)`}}),Be=new A({props:{code:`from pprint import pprint

pprint(
    unmasker(
        f"HuggingFace is creating a {unmasker.tokenizer.mask_token} that the community uses to solve NLP tasks."
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pprint <span class="hljs-keyword">import</span> pprint

<span class="hljs-meta">&gt;&gt;&gt; </span>pprint(
<span class="hljs-meta">... </span>    unmasker(
<span class="hljs-meta">... </span>        <span class="hljs-string">f&quot;HuggingFace is creating a <span class="hljs-subst">{unmasker.tokenizer.mask_token}</span> that the community uses to solve NLP tasks.&quot;</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)
[{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1793</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a tool that the community uses to solve &#x27;</span>
              <span class="hljs-string">&#x27;NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">3944</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; tool&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1135</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a framework that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7208</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; framework&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0524</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a library that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">5560</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; library&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0349</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a database that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">8503</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; database&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0286</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a prototype that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">17715</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; prototype&#x27;</span>}]`}}),Ks=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[mg],pytorch:[cg]},$$scope:{ctx:$}}}),He=new ws({}),ee=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[_g],pytorch:[fg]},$$scope:{ctx:$}}}),Ue=new ws({}),ne=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[xg],pytorch:[kg]},$$scope:{ctx:$}}}),We=new ws({}),Ke=new A({props:{code:`from transformers import pipeline

ner_pipe = pipeline("ner")

sequence = """Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO,
therefore very close to the Manhattan Bridge which is visible from the window."""`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>ner_pipe = pipeline(<span class="hljs-string">&quot;ner&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">&quot;&quot;&quot;Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO,
<span class="hljs-meta">... </span>therefore very close to the Manhattan Bridge which is visible from the window.&quot;&quot;&quot;</span>`}}),Ze=new A({props:{code:`for entity in ner_pipe(sequence):
    print(entity)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> entity <span class="hljs-keyword">in</span> ner_pipe(sequence):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(entity)
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9996</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">1</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Hu&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">2</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9910</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">2</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;##gging&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">2</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">7</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9982</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">3</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Face&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">8</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">12</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9995</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">4</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Inc&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">13</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">16</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9994</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">11</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;New&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">40</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">43</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9993</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">12</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;York&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">44</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">48</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9994</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">13</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;City&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">49</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">53</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9863</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">19</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;D&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">79</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">80</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9514</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">20</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;##UM&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">80</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">82</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9337</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">21</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;##BO&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">82</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">84</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9762</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">28</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Manhattan&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">114</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">123</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9915</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">29</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Bridge&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">124</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">130</span>}`}}),ie=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[vg],pytorch:[yg]},$$scope:{ctx:$}}}),st=new A({props:{code:`for token, prediction in zip(tokens, predictions[0].numpy()):
    print((token, model.config.id2label[prediction]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> token, prediction <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(tokens, predictions[<span class="hljs-number">0</span>].numpy()):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>((token, model.config.id2label[prediction]))
(<span class="hljs-string">&#x27;[CLS]&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;Hu&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;##gging&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;Face&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;Inc&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;company&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;based&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;in&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;New&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;York&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;City&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;Its&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;headquarters&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;are&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;in&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;D&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;##UM&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;##BO&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;,&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;therefore&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;very&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;close&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;to&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;Manhattan&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;Bridge&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;[SEP]&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)`}}),et=new ws({}),nt=new A({props:{code:`from transformers import pipeline

summarizer = pipeline("summarization")

ARTICLE = """ New York (CNN)When Liana Barrientos was 23 years old, she got married in Westchester County, New York.
A year later, she got married again in Westchester County, but to a different man and without divorcing her first husband.
Only 18 days after that marriage, she got hitched yet again. Then, Barrientos declared "I do" five more times, sometimes only within two weeks of each other.
In 2010, she married once more, this time in the Bronx. In an application for a marriage license, she stated it was her "first and only" marriage.
Barrientos, now 39, is facing two criminal counts of "offering a false instrument for filing in the first degree," referring to her false statements on the
2010 marriage license application, according to court documents.
Prosecutors said the marriages were part of an immigration scam.
On Friday, she pleaded not guilty at State Supreme Court in the Bronx, according to her attorney, Christopher Wright, who declined to comment further.
After leaving court, Barrientos was arrested and charged with theft of service and criminal trespass for allegedly sneaking into the New York subway through an emergency exit, said Detective
Annette Markowski, a police spokeswoman. In total, Barrientos has been married 10 times, with nine of her marriages occurring between 1999 and 2002.
All occurred either in Westchester County, Long Island, New Jersey or the Bronx. She is believed to still be married to four men, and at one time, she was married to eight men at once, prosecutors say.
Prosecutors said the immigration scam involved some of her husbands, who filed for permanent residence status shortly after the marriages.
Any divorces happened only after such filings were approved. It was unclear whether any of the men will be prosecuted.
The case was referred to the Bronx District Attorney\\'s Office by Immigration and Customs Enforcement and the Department of Homeland Security\\'s
Investigation Division. Seven of the men are from so-called "red-flagged" countries, including Egypt, Turkey, Georgia, Pakistan and Mali.
Her eighth husband, Rashid Rajput, was deported in 2006 to his native Pakistan after an investigation by the Joint Terrorism Task Force.
If convicted, Barrientos faces up to four years in prison.  Her next court appearance is scheduled for May 18.
"""`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>summarizer = pipeline(<span class="hljs-string">&quot;summarization&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = <span class="hljs-string">&quot;&quot;&quot; New York (CNN)When Liana Barrientos was 23 years old, she got married in Westchester County, New York.
<span class="hljs-meta">... </span>A year later, she got married again in Westchester County, but to a different man and without divorcing her first husband.
<span class="hljs-meta">... </span>Only 18 days after that marriage, she got hitched yet again. Then, Barrientos declared &quot;I do&quot; five more times, sometimes only within two weeks of each other.
<span class="hljs-meta">... </span>In 2010, she married once more, this time in the Bronx. In an application for a marriage license, she stated it was her &quot;first and only&quot; marriage.
<span class="hljs-meta">... </span>Barrientos, now 39, is facing two criminal counts of &quot;offering a false instrument for filing in the first degree,&quot; referring to her false statements on the
<span class="hljs-meta">... </span>2010 marriage license application, according to court documents.
<span class="hljs-meta">... </span>Prosecutors said the marriages were part of an immigration scam.
<span class="hljs-meta">... </span>On Friday, she pleaded not guilty at State Supreme Court in the Bronx, according to her attorney, Christopher Wright, who declined to comment further.
<span class="hljs-meta">... </span>After leaving court, Barrientos was arrested and charged with theft of service and criminal trespass for allegedly sneaking into the New York subway through an emergency exit, said Detective
<span class="hljs-meta">... </span>Annette Markowski, a police spokeswoman. In total, Barrientos has been married 10 times, with nine of her marriages occurring between 1999 and 2002.
<span class="hljs-meta">... </span>All occurred either in Westchester County, Long Island, New Jersey or the Bronx. She is believed to still be married to four men, and at one time, she was married to eight men at once, prosecutors say.
<span class="hljs-meta">... </span>Prosecutors said the immigration scam involved some of her husbands, who filed for permanent residence status shortly after the marriages.
<span class="hljs-meta">... </span>Any divorces happened only after such filings were approved. It was unclear whether any of the men will be prosecuted.
<span class="hljs-meta">... </span>The case was referred to the Bronx District Attorney\\&#x27;s Office by Immigration and Customs Enforcement and the Department of Homeland Security\\&#x27;s
<span class="hljs-meta">... </span>Investigation Division. Seven of the men are from so-called &quot;red-flagged&quot; countries, including Egypt, Turkey, Georgia, Pakistan and Mali.
<span class="hljs-meta">... </span>Her eighth husband, Rashid Rajput, was deported in 2006 to his native Pakistan after an investigation by the Joint Terrorism Task Force.
<span class="hljs-meta">... </span>If convicted, Barrientos faces up to four years in prison.  Her next court appearance is scheduled for May 18.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>`}}),rt=new A({props:{code:"print(summarizer(ARTICLE, max_length=130, min_length=30, do_sample=False))",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(summarizer(ARTICLE, max_length=<span class="hljs-number">130</span>, min_length=<span class="hljs-number">30</span>, do_sample=<span class="hljs-literal">False</span>))
[{<span class="hljs-string">&#x27;summary_text&#x27;</span>: <span class="hljs-string">&#x27; Liana Barrientos, 39, is charged with two counts of &quot;offering a false instrument for filing in
the first degree&quot; In total, she has been married 10 times, with nine of her marriages occurring between 1999 and
2002 . At one time, she was married to eight men at once, prosecutors say .&#x27;</span>}]`}}),ue=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ag],pytorch:[Tg]},$$scope:{ctx:$}}}),lt=new ws({}),ht=new A({props:{code:`from transformers import pipeline

translator = pipeline("translation_en_to_de")
print(translator("Hugging Face is a technology company based in New York and Paris", max_length=40))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>translator = pipeline(<span class="hljs-string">&quot;translation_en_to_de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(translator(<span class="hljs-string">&quot;Hugging Face is a technology company based in New York and Paris&quot;</span>, max_length=<span class="hljs-number">40</span>))
[{<span class="hljs-string">&#x27;translation_text&#x27;</span>: <span class="hljs-string">&#x27;Hugging Face ist ein Technologieunternehmen mit Sitz in New York und Paris.&#x27;</span>}]`}}),de=new we({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Lg],pytorch:[Ig]},$$scope:{ctx:$}}}),{c(){n=l("meta"),c=m(),a=l("h1"),f=l("a"),_=l("span"),j(q.$$.fragment),E=m(),I=l("span"),v=r("Summary of the tasks"),z=m(),j(F.$$.fragment),Ss=m(),os=l("p"),xs=r(`This page shows the most frequent use-cases when using the library. The models available allow for many different
configurations and a great versatility in use-cases. The most simple ones are presented here, showcasing usage for
tasks such as question answering, sequence classification, named entity recognition and others.`),Ds=m(),V=l("p"),bs=r(`These examples leverage auto-models, which are classes that will instantiate a model according to a given checkpoint,
automatically selecting the correct model architecture. Please check the `),ls=l("a"),xe=r("AutoModel"),Os=r(` documentation
for more information. Feel free to modify the code to be more specific and adapt it to your specific use-case.`),G=m(),is=l("p"),ys=r(`In order for a model to perform well on a task, it must be loaded from a checkpoint corresponding to that task. These
checkpoints are usually pre-trained on a large corpus of data and fine-tuned on a specific task. This means the
following:`),Bs=m(),J=l("ul"),U=l("li"),be=r(`Not all models were fine-tuned on all tasks. If you want to fine-tune a model on a specific task, you can leverage
one of the `),$s=l("em"),Rs=r("run_$TASK.py"),rs=r(" scripts in the "),K=l("a"),T=r("examples"),M=r(" directory."),ft=m(),ps=l("li"),dt=r(`Fine-tuned models were fine-tuned on a specific dataset. This dataset may or may not overlap with your use-case and
domain. As mentioned previously, you may leverage the `),hs=l("a"),_t=r("examples"),cs=r(` scripts to fine-tune your model, or you may
create your own training script.`),ye=m(),vs=l("p"),No=r("In order to do an inference on a task, several mechanisms are made available by the library:"),Dn=m(),Hs=l("ul"),Kt=l("li"),Co=r("Pipelines: very easy-to-use abstractions, which require as little as two lines of code."),So=m(),Zt=l("li"),Do=r(`Direct model use: Less abstractions, but more flexibility and power via a direct access to a tokenizer
(PyTorch/TensorFlow) and full inference capacity.`),On=m(),jt=l("p"),Oo=r("Both approaches are showcased here."),Bn=m(),j(Gs.$$.fragment),Rn=m(),qs=l("h2"),Us=l("a"),sa=l("span"),j($e.$$.fragment),Bo=m(),ea=l("span"),Ro=r("Sequence Classification"),Hn=m(),Q=l("p"),Ho=r(`Sequence classification is the task of classifying sequences according to a given number of classes. An example of
sequence classification is the GLUE dataset, which is entirely based on that task. If you would like to fine-tune a
model on a GLUE sequence classification task, you may leverage the `),ve=l("a"),Go=r("run_glue.py"),Uo=r(", "),qe=l("a"),Qo=r("run_tf_glue.py"),Yo=r(", "),Te=l("a"),Wo=r("run_tf_text_classification.py"),Xo=r(" or "),Ee=l("a"),Vo=r("run_xnli.py"),Jo=r(" scripts."),Gn=m(),kt=l("p"),Ko=r(`Here is an example of using pipelines to do sentiment analysis: identifying if a sequence is positive or negative. It
leverages a fine-tuned model on sst2, which is a GLUE task.`),Un=m(),wt=l("p"),Zo=r("This returns a label (\u201CPOSITIVE\u201D or \u201CNEGATIVE\u201D) alongside a score, as follows:"),Qn=m(),j(Ae.$$.fragment),Yn=m(),xt=l("p"),sl=r(`Here is an example of doing a sequence classification using a model to determine if two sequences are paraphrases of
each other. The process is the following:`),Wn=m(),Y=l("ol"),ta=l("li"),el=r(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),tl=m(),aa=l("li"),al=r(`Build a sequence from the two sentences, with the correct model-specific separators, token type ids and attention
masks (which will be created automatically by the tokenizer).`),nl=m(),na=l("li"),rl=r(`Pass this sequence through the model so that it is classified in one of the two available classes: 0 (not a
paraphrase) and 1 (is a paraphrase).`),ol=m(),ra=l("li"),ll=r("Compute the softmax of the result to get probabilities over the classes."),il=m(),oa=l("li"),pl=r("Print the results."),Xn=m(),j(Qs.$$.fragment),Vn=m(),Ts=l("h2"),Ys=l("a"),la=l("span"),j(ze.$$.fragment),hl=m(),ia=l("span"),cl=r("Extractive Question Answering"),Jn=m(),us=l("p"),ul=r(`Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune a
model on a SQuAD task, you may leverage the `),Ie=l("a"),ml=r("run_qa.py"),gl=r(` and
`),Me=l("a"),fl=r("run_tf_squad.py"),dl=r(`
scripts.`),Kn=m(),bt=l("p"),_l=r(`Here is an example of using pipelines to do question answering: extracting an answer from a text given a question. It
leverages a fine-tuned model on SQuAD.`),Zn=m(),j(Le.$$.fragment),sr=m(),yt=l("p"),jl=r(`This returns an answer extracted from the text, a confidence score, alongside \u201Cstart\u201D and \u201Cend\u201D values, which are the
positions of the extracted answer in the text.`),er=m(),j(Pe.$$.fragment),tr=m(),$t=l("p"),kl=r("Here is an example of question answering using a model and a tokenizer. The process is the following:"),ar=m(),C=l("ol"),pa=l("li"),wl=r(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),xl=m(),ha=l("li"),bl=r("Define a text and a few questions."),yl=m(),ca=l("li"),$l=r(`Iterate over the questions and build a sequence from the text and the current question, with the correct
model-specific separators token type ids and attention masks.`),vl=m(),ua=l("li"),ql=r(`Pass this sequence through the model. This outputs a range of scores across the entire sequence tokens (question and
text), for both the start and end positions.`),Tl=m(),ma=l("li"),El=r("Compute the softmax of the result to get probabilities over the tokens."),Al=m(),ga=l("li"),zl=r("Fetch the tokens from the identified start and stop values, convert those tokens to a string."),Il=m(),fa=l("li"),Ml=r("Print the results."),nr=m(),j(Ws.$$.fragment),rr=m(),Es=l("h2"),Xs=l("a"),da=l("span"),j(Fe.$$.fragment),Ll=m(),_a=l("span"),Pl=r("Language Modeling"),or=m(),vt=l("p"),Fl=r(`Language modeling is the task of fitting a model to a corpus, which can be domain specific. All popular
transformer-based models are trained using a variant of language modeling, e.g. BERT with masked language modeling,
GPT-2 with causal language modeling.`),lr=m(),Vs=l("p"),Nl=r(`Language modeling can be useful outside of pretraining as well, for example to shift the model distribution to be
domain-specific: using a language model trained over a very large corpus, and then fine-tuning it to a news dataset or
on scientific papers e.g. `),Ne=l("a"),Cl=r("LysandreJik/arxiv-nlp"),Sl=r("."),ir=m(),As=l("h3"),Js=l("a"),ja=l("span"),j(Ce.$$.fragment),Dl=m(),ka=l("span"),Ol=r("Masked Language Modeling"),pr=m(),ms=l("p"),Bl=r(`Masked language modeling is the task of masking tokens in a sequence with a masking token, and prompting the model to
fill that mask with an appropriate token. This allows the model to attend to both the right context (tokens on the
right of the mask) and the left context (tokens on the left of the mask). Such a training creates a strong basis for
downstream tasks requiring bi-directional context, such as SQuAD (question answering, see `),Se=l("a"),Rl=r("Lewis, Lui, Goyal et al."),Hl=r(`, part 4.2). If you would like to fine-tune a model on a masked language modeling
task, you may leverage the `),De=l("a"),Gl=r("run_mlm.py"),Ul=r(" script."),hr=m(),qt=l("p"),Ql=r("Here is an example of using pipelines to replace a mask from a sequence:"),cr=m(),j(Oe.$$.fragment),ur=m(),Tt=l("p"),Yl=r("This outputs the sequences with the mask filled, the confidence score, and the token id in the tokenizer vocabulary:"),mr=m(),j(Be.$$.fragment),gr=m(),Et=l("p"),Wl=r("Here is an example of doing masked language modeling using a model and a tokenizer. The process is the following:"),fr=m(),D=l("ol"),wa=l("li"),Xl=r(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a DistilBERT model and
loads it with the weights stored in the checkpoint.`),Vl=m(),Re=l("li"),Jl=r("Define a sequence with a masked token, placing the "),xa=l("code"),Kl=r("tokenizer.mask_token"),Zl=r(" instead of a word."),si=m(),ba=l("li"),ei=r("Encode that sequence into a list of IDs and find the position of the masked token in that list."),ti=m(),ya=l("li"),ai=r(`Retrieve the predictions at the index of the mask token: this tensor has the same size as the vocabulary, and the
values are the scores attributed to each token. The model gives higher score to tokens it deems probable in that
context.`),ni=m(),zs=l("li"),ri=r("Retrieve the top 5 tokens using the PyTorch "),$a=l("code"),oi=r("topk"),li=r(" or TensorFlow "),va=l("code"),ii=r("top_k"),pi=r(" methods."),hi=m(),qa=l("li"),ci=r("Replace the mask token by the tokens and print the results"),dr=m(),j(Ks.$$.fragment),_r=m(),At=l("p"),ui=r("This prints five sequences, with the top 5 tokens predicted by the model."),jr=m(),Is=l("h3"),Zs=l("a"),Ta=l("span"),j(He.$$.fragment),mi=m(),Ea=l("span"),gi=r("Causal Language Modeling"),kr=m(),se=l("p"),fi=r(`Causal language modeling is the task of predicting the token following a sequence of tokens. In this situation, the
model only attends to the left context (tokens on the left of the mask). Such a training is particularly interesting
for generation tasks. If you would like to fine-tune a model on a causal language modeling task, you may leverage the
`),Ge=l("a"),di=r("run_clm.py"),_i=r(" script."),wr=m(),zt=l("p"),ji=r(`Usually, the next token is predicted by sampling from the logits of the last hidden state the model produces from the
input sequence.`),xr=m(),j(ee.$$.fragment),br=m(),gs=l("p"),ki=r("This outputs a (hopefully) coherent next token following the original sequence, which in our case is the word "),Aa=l("em"),wi=r("is"),xi=r(` or
`),za=l("em"),bi=r("features"),yi=r("."),yr=m(),te=l("p"),$i=r("In the next section, we show how "),It=l("a"),vi=r("generation_utils.GenerationMixin.generate()"),qi=r(` can be used to
generate multiple tokens up to a specified length instead of one token at a time.`),$r=m(),Ms=l("h3"),ae=l("a"),Ia=l("span"),j(Ue.$$.fragment),Ti=m(),Ma=l("span"),Ei=r("Text Generation"),vr=m(),O=l("p"),Ai=r("In text generation ("),La=l("em"),zi=r("a.k.a"),Ii=m(),Pa=l("em"),Mi=r("open-ended text generation"),Li=r(`) the goal is to create a coherent portion of text that is a
continuation from the given context. The following example shows how `),Fa=l("em"),Pi=r("GPT-2"),Fi=r(` can be used in pipelines to generate text.
As a default all models apply `),Na=l("em"),Ni=r("Top-K"),Ci=r(` sampling when used in pipelines, as configured in their respective configurations
(see `),Qe=l("a"),Si=r("gpt-2 config"),Di=r(" for example)."),qr=m(),j(ne.$$.fragment),Tr=m(),L=l("p"),Oi=r("Text generation is currently possible with "),Ca=l("em"),Bi=r("GPT-2"),Ri=r(", "),Sa=l("em"),Hi=r("OpenAi-GPT"),Gi=r(", "),Da=l("em"),Ui=r("CTRL"),Qi=r(", "),Oa=l("em"),Yi=r("XLNet"),Wi=r(", "),Ba=l("em"),Xi=r("Transfo-XL"),Vi=r(" and "),Ra=l("em"),Ji=r("Reformer"),Ki=r(` in
PyTorch and for most models in Tensorflow as well. As can be seen in the example above `),Ha=l("em"),Zi=r("XLNet"),sp=r(" and "),Ga=l("em"),ep=r("Transfo-XL"),tp=r(` often
need to be padded to work well. GPT-2 is usually a good choice for `),Ua=l("em"),ap=r("open-ended text generation"),np=r(` because it was trained
on millions of webpages with a causal language modeling objective.`),Er=m(),re=l("p"),rp=r(`For more information on how to apply different decoding strategies for text generation, please also refer to our text
generation blog post `),Ye=l("a"),op=r("here"),lp=r("."),Ar=m(),Ls=l("h2"),oe=l("a"),Qa=l("span"),j(We.$$.fragment),ip=m(),Ya=l("span"),pp=r("Named Entity Recognition"),zr=m(),le=l("p"),hp=r(`Named Entity Recognition (NER) is the task of classifying tokens according to a class, for example, identifying a token
as a person, an organisation or a location. An example of a named entity recognition dataset is the CoNLL-2003 dataset,
which is entirely based on that task. If you would like to fine-tune a model on an NER task, you may leverage the
`),Xe=l("a"),cp=r("run_ner.py"),up=r(" script."),Ir=m(),Mt=l("p"),mp=r(`Here is an example of using pipelines to do named entity recognition, specifically, trying to identify tokens as
belonging to one of 9 classes:`),Mr=m(),P=l("ul"),Wa=l("li"),gp=r("O, Outside of a named entity"),fp=m(),Xa=l("li"),dp=r("B-MIS, Beginning of a miscellaneous entity right after another miscellaneous entity"),_p=m(),Va=l("li"),jp=r("I-MIS, Miscellaneous entity"),kp=m(),Ja=l("li"),wp=r("B-PER, Beginning of a person\u2019s name right after another person\u2019s name"),xp=m(),Ka=l("li"),bp=r("I-PER, Person\u2019s name"),yp=m(),Za=l("li"),$p=r("B-ORG, Beginning of an organisation right after another organisation"),vp=m(),sn=l("li"),qp=r("I-ORG, Organisation"),Tp=m(),en=l("li"),Ep=r("B-LOC, Beginning of a location right after another location"),Ap=m(),tn=l("li"),zp=r("I-LOC, Location"),Lr=m(),fs=l("p"),Ip=r("It leverages a fine-tuned model on CoNLL-2003, fine-tuned by "),Ve=l("a"),Mp=r("@stefan-it"),Lp=r(" from "),Je=l("a"),Pp=r("dbmdz"),Fp=r("."),Pr=m(),j(Ke.$$.fragment),Fr=m(),Lt=l("p"),Np=r(`This outputs a list of all words that have been identified as one of the entities from the 9 classes defined above.
Here are the expected results:`),Nr=m(),j(Ze.$$.fragment),Cr=m(),Pt=l("p"),Cp=r(`Note how the tokens of the sequence \u201CHugging Face\u201D have been identified as an organisation, and \u201CNew York City\u201D,
\u201CDUMBO\u201D and \u201CManhattan Bridge\u201D have been identified as locations.`),Sr=m(),Ft=l("p"),Sp=r("Here is an example of doing named entity recognition, using a model and a tokenizer. The process is the following:"),Dr=m(),B=l("ol"),an=l("li"),Dp=r(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),Op=m(),nn=l("li"),Bp=r("Define a sequence with known entities, such as \u201CHugging Face\u201D as an organisation and \u201CNew York City\u201D as a location."),Rp=m(),rn=l("li"),Hp=r(`Split words into tokens so that they can be mapped to predictions. We use a small hack by, first, completely
encoding and decoding the sequence, so that we\u2019re left with a string that contains the special tokens.`),Gp=m(),on=l("li"),Up=r("Encode that sequence into IDs (special tokens are added automatically)."),Qp=m(),ln=l("li"),Yp=r(`Retrieve the predictions by passing the input to the model and getting the first output. This results in a
distribution over the 9 possible classes for each token. We take the argmax to retrieve the most likely class for
each token.`),Wp=m(),pn=l("li"),Xp=r("Zip together each token with its prediction and print it."),Or=m(),j(ie.$$.fragment),Br=m(),Nt=l("p"),Vp=r(`This outputs a list of each token mapped to its corresponding prediction. Differently from the pipeline, here every
token has a prediction as we didn\u2019t remove the \u201C0\u201Dth class, which means that no particular entity was found on that
token.`),Rr=m(),ds=l("p"),Jp=r("In the above example, "),hn=l("code"),Kp=r("predictions"),Zp=r(` is an integer that corresponds to the predicted class. We can use the
`),cn=l("code"),sh=r("model.config.id2label"),eh=r(` property in order to recover the class name corresponding to the class number, which is
illustrated below:`),Hr=m(),j(st.$$.fragment),Gr=m(),Ps=l("h2"),pe=l("a"),un=l("span"),j(et.$$.fragment),th=m(),mn=l("span"),ah=r("Summarization"),Ur=m(),he=l("p"),nh=r(`Summarization is the task of summarizing a document or an article into a shorter text. If you would like to fine-tune a
model on a summarization task, you may leverage the `),tt=l("a"),rh=r("run_summarization.py"),oh=r(`
script.`),Qr=m(),ce=l("p"),lh=r(`An example of a summarization dataset is the CNN / Daily Mail dataset, which consists of long news articles and was
created for the task of summarization. If you would like to fine-tune a model on a summarization task, various
approaches are described in this `),at=l("a"),ih=r("document"),ph=r("."),Yr=m(),Ct=l("p"),hh=r(`Here is an example of using the pipelines to do summarization. It leverages a Bart model that was fine-tuned on the CNN
/ Daily Mail data set.`),Wr=m(),j(nt.$$.fragment),Xr=m(),W=l("p"),ch=r("Because the summarization pipeline depends on the "),gn=l("code"),uh=r("PreTrainedModel.generate()"),mh=r(` method, we can override the default
arguments of `),fn=l("code"),gh=r("PreTrainedModel.generate()"),fh=r(" directly in the pipeline for "),dn=l("code"),dh=r("max_length"),_h=r(" and "),_n=l("code"),jh=r("min_length"),kh=r(` as shown
below. This outputs the following summary:`),Vr=m(),j(rt.$$.fragment),Jr=m(),St=l("p"),wh=r("Here is an example of doing summarization using a model and a tokenizer. The process is the following:"),Kr=m(),Z=l("ol"),Fs=l("li"),xh=r(`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),jn=l("code"),bh=r("Bart"),yh=r(" or "),kn=l("code"),$h=r("T5"),vh=r("."),qh=m(),wn=l("li"),Th=r("Define the article that should be summarized."),Eh=m(),xn=l("li"),Ah=r("Add the T5 specific prefix \u201Csummarize: \u201C."),zh=m(),ot=l("li"),Ih=r("Use the "),bn=l("code"),Mh=r("PreTrainedModel.generate()"),Lh=r(" method to generate the summary."),Zr=m(),Dt=l("p"),Ph=r(`In this example we use Google\u2019s T5 model. Even though it was pre-trained only on a multi-task mixed dataset (including
CNN / Daily Mail), it yields very good results.`),so=m(),j(ue.$$.fragment),eo=m(),Ns=l("h2"),me=l("a"),yn=l("span"),j(lt.$$.fragment),Fh=m(),$n=l("span"),Nh=r("Translation"),to=m(),ge=l("p"),Ch=r(`Translation is the task of translating a text from one language to another. If you would like to fine-tune a model on a
translation task, you may leverage the `),it=l("a"),Sh=r("run_translation.py"),Dh=r(" script."),ao=m(),fe=l("p"),Oh=r(`An example of a translation dataset is the WMT English to German dataset, which has sentences in English as the input
data and the corresponding sentences in German as the target data. If you would like to fine-tune a model on a
translation task, various approaches are described in this `),pt=l("a"),Bh=r("document"),Rh=r("."),no=m(),Ot=l("p"),Hh=r(`Here is an example of using the pipelines to do translation. It leverages a T5 model that was only pre-trained on a
multi-task mixture dataset (including WMT), yet, yielding impressive translation results.`),ro=m(),j(ht.$$.fragment),oo=m(),ss=l("p"),Gh=r("Because the translation pipeline depends on the "),vn=l("code"),Uh=r("PreTrainedModel.generate()"),Qh=r(` method, we can override the default
arguments of `),qn=l("code"),Yh=r("PreTrainedModel.generate()"),Wh=r(" directly in the pipeline as is shown for "),Tn=l("code"),Xh=r("max_length"),Vh=r(" above."),lo=m(),Bt=l("p"),Jh=r("Here is an example of doing translation using a model and a tokenizer. The process is the following:"),io=m(),es=l("ol"),Cs=l("li"),Kh=r(`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),En=l("code"),Zh=r("Bart"),sc=r(" or "),An=l("code"),ec=r("T5"),tc=r("."),ac=m(),zn=l("li"),nc=r("Define the article that should be summarized."),rc=m(),In=l("li"),oc=r("Add the T5 specific prefix \u201Ctranslate English to German: \u201D"),lc=m(),ct=l("li"),ic=r("Use the "),Mn=l("code"),pc=r("PreTrainedModel.generate()"),hc=r(" method to perform the translation."),po=m(),j(de.$$.fragment),ho=m(),Rt=l("p"),cc=r("We get the same translation as with the pipeline example."),this.h()},l(s){const h=Km('[data-svelte="svelte-1phssyn"]',document.head);n=i(h,"META",{name:!0,content:!0}),h.forEach(t),c=g(s),a=i(s,"H1",{class:!0});var ut=p(a);f=i(ut,"A",{id:!0,class:!0,href:!0});var Ln=p(f);_=i(Ln,"SPAN",{});var Pn=p(_);k(q.$$.fragment,Pn),Pn.forEach(t),Ln.forEach(t),E=g(ut),I=i(ut,"SPAN",{});var Fn=p(I);v=o(Fn,"Summary of the tasks"),Fn.forEach(t),ut.forEach(t),z=g(s),k(F.$$.fragment,s),Ss=g(s),os=i(s,"P",{});var Nn=p(os);xs=o(Nn,`This page shows the most frequent use-cases when using the library. The models available allow for many different
configurations and a great versatility in use-cases. The most simple ones are presented here, showcasing usage for
tasks such as question answering, sequence classification, named entity recognition and others.`),Nn.forEach(t),Ds=g(s),V=i(s,"P",{});var mt=p(V);bs=o(mt,`These examples leverage auto-models, which are classes that will instantiate a model according to a given checkpoint,
automatically selecting the correct model architecture. Please check the `),ls=i(mt,"A",{href:!0});var Cn=p(ls);xe=o(Cn,"AutoModel"),Cn.forEach(t),Os=o(mt,` documentation
for more information. Feel free to modify the code to be more specific and adapt it to your specific use-case.`),mt.forEach(t),G=g(s),is=i(s,"P",{});var Sn=p(is);ys=o(Sn,`In order for a model to perform well on a task, it must be loaded from a checkpoint corresponding to that task. These
checkpoints are usually pre-trained on a large corpus of data and fine-tuned on a specific task. This means the
following:`),Sn.forEach(t),Bs=g(s),J=i(s,"UL",{});var gt=p(J);U=i(gt,"LI",{});var Ht=p(U);be=o(Ht,`Not all models were fine-tuned on all tasks. If you want to fine-tune a model on a specific task, you can leverage
one of the `),$s=i(Ht,"EM",{});var uc=p($s);Rs=o(uc,"run_$TASK.py"),uc.forEach(t),rs=o(Ht," scripts in the "),K=i(Ht,"A",{href:!0,rel:!0});var mc=p(K);T=o(mc,"examples"),mc.forEach(t),M=o(Ht," directory."),Ht.forEach(t),ft=g(gt),ps=i(gt,"LI",{});var uo=p(ps);dt=o(uo,`Fine-tuned models were fine-tuned on a specific dataset. This dataset may or may not overlap with your use-case and
domain. As mentioned previously, you may leverage the `),hs=i(uo,"A",{href:!0,rel:!0});var gc=p(hs);_t=o(gc,"examples"),gc.forEach(t),cs=o(uo,` scripts to fine-tune your model, or you may
create your own training script.`),uo.forEach(t),gt.forEach(t),ye=g(s),vs=i(s,"P",{});var fc=p(vs);No=o(fc,"In order to do an inference on a task, several mechanisms are made available by the library:"),fc.forEach(t),Dn=g(s),Hs=i(s,"UL",{});var mo=p(Hs);Kt=i(mo,"LI",{});var dc=p(Kt);Co=o(dc,"Pipelines: very easy-to-use abstractions, which require as little as two lines of code."),dc.forEach(t),So=g(mo),Zt=i(mo,"LI",{});var _c=p(Zt);Do=o(_c,`Direct model use: Less abstractions, but more flexibility and power via a direct access to a tokenizer
(PyTorch/TensorFlow) and full inference capacity.`),_c.forEach(t),mo.forEach(t),On=g(s),jt=i(s,"P",{});var jc=p(jt);Oo=o(jc,"Both approaches are showcased here."),jc.forEach(t),Bn=g(s),k(Gs.$$.fragment,s),Rn=g(s),qs=i(s,"H2",{class:!0});var go=p(qs);Us=i(go,"A",{id:!0,class:!0,href:!0});var kc=p(Us);sa=i(kc,"SPAN",{});var wc=p(sa);k($e.$$.fragment,wc),wc.forEach(t),kc.forEach(t),Bo=g(go),ea=i(go,"SPAN",{});var xc=p(ea);Ro=o(xc,"Sequence Classification"),xc.forEach(t),go.forEach(t),Hn=g(s),Q=i(s,"P",{});var _s=p(Q);Ho=o(_s,`Sequence classification is the task of classifying sequences according to a given number of classes. An example of
sequence classification is the GLUE dataset, which is entirely based on that task. If you would like to fine-tune a
model on a GLUE sequence classification task, you may leverage the `),ve=i(_s,"A",{href:!0,rel:!0});var bc=p(ve);Go=o(bc,"run_glue.py"),bc.forEach(t),Uo=o(_s,", "),qe=i(_s,"A",{href:!0,rel:!0});var yc=p(qe);Qo=o(yc,"run_tf_glue.py"),yc.forEach(t),Yo=o(_s,", "),Te=i(_s,"A",{href:!0,rel:!0});var $c=p(Te);Wo=o($c,"run_tf_text_classification.py"),$c.forEach(t),Xo=o(_s," or "),Ee=i(_s,"A",{href:!0,rel:!0});var vc=p(Ee);Vo=o(vc,"run_xnli.py"),vc.forEach(t),Jo=o(_s," scripts."),_s.forEach(t),Gn=g(s),kt=i(s,"P",{});var qc=p(kt);Ko=o(qc,`Here is an example of using pipelines to do sentiment analysis: identifying if a sequence is positive or negative. It
leverages a fine-tuned model on sst2, which is a GLUE task.`),qc.forEach(t),Un=g(s),wt=i(s,"P",{});var Tc=p(wt);Zo=o(Tc,"This returns a label (\u201CPOSITIVE\u201D or \u201CNEGATIVE\u201D) alongside a score, as follows:"),Tc.forEach(t),Qn=g(s),k(Ae.$$.fragment,s),Yn=g(s),xt=i(s,"P",{});var Ec=p(xt);sl=o(Ec,`Here is an example of doing a sequence classification using a model to determine if two sequences are paraphrases of
each other. The process is the following:`),Ec.forEach(t),Wn=g(s),Y=i(s,"OL",{});var js=p(Y);ta=i(js,"LI",{});var Ac=p(ta);el=o(Ac,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),Ac.forEach(t),tl=g(js),aa=i(js,"LI",{});var zc=p(aa);al=o(zc,`Build a sequence from the two sentences, with the correct model-specific separators, token type ids and attention
masks (which will be created automatically by the tokenizer).`),zc.forEach(t),nl=g(js),na=i(js,"LI",{});var Ic=p(na);rl=o(Ic,`Pass this sequence through the model so that it is classified in one of the two available classes: 0 (not a
paraphrase) and 1 (is a paraphrase).`),Ic.forEach(t),ol=g(js),ra=i(js,"LI",{});var Mc=p(ra);ll=o(Mc,"Compute the softmax of the result to get probabilities over the classes."),Mc.forEach(t),il=g(js),oa=i(js,"LI",{});var Lc=p(oa);pl=o(Lc,"Print the results."),Lc.forEach(t),js.forEach(t),Xn=g(s),k(Qs.$$.fragment,s),Vn=g(s),Ts=i(s,"H2",{class:!0});var fo=p(Ts);Ys=i(fo,"A",{id:!0,class:!0,href:!0});var Pc=p(Ys);la=i(Pc,"SPAN",{});var Fc=p(la);k(ze.$$.fragment,Fc),Fc.forEach(t),Pc.forEach(t),hl=g(fo),ia=i(fo,"SPAN",{});var Nc=p(ia);cl=o(Nc,"Extractive Question Answering"),Nc.forEach(t),fo.forEach(t),Jn=g(s),us=i(s,"P",{});var Gt=p(us);ul=o(Gt,`Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune a
model on a SQuAD task, you may leverage the `),Ie=i(Gt,"A",{href:!0,rel:!0});var Cc=p(Ie);ml=o(Cc,"run_qa.py"),Cc.forEach(t),gl=o(Gt,` and
`),Me=i(Gt,"A",{href:!0,rel:!0});var Sc=p(Me);fl=o(Sc,"run_tf_squad.py"),Sc.forEach(t),dl=o(Gt,`
scripts.`),Gt.forEach(t),Kn=g(s),bt=i(s,"P",{});var Dc=p(bt);_l=o(Dc,`Here is an example of using pipelines to do question answering: extracting an answer from a text given a question. It
leverages a fine-tuned model on SQuAD.`),Dc.forEach(t),Zn=g(s),k(Le.$$.fragment,s),sr=g(s),yt=i(s,"P",{});var Oc=p(yt);jl=o(Oc,`This returns an answer extracted from the text, a confidence score, alongside \u201Cstart\u201D and \u201Cend\u201D values, which are the
positions of the extracted answer in the text.`),Oc.forEach(t),er=g(s),k(Pe.$$.fragment,s),tr=g(s),$t=i(s,"P",{});var Bc=p($t);kl=o(Bc,"Here is an example of question answering using a model and a tokenizer. The process is the following:"),Bc.forEach(t),ar=g(s),C=i(s,"OL",{});var X=p(C);pa=i(X,"LI",{});var Rc=p(pa);wl=o(Rc,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),Rc.forEach(t),xl=g(X),ha=i(X,"LI",{});var Hc=p(ha);bl=o(Hc,"Define a text and a few questions."),Hc.forEach(t),yl=g(X),ca=i(X,"LI",{});var Gc=p(ca);$l=o(Gc,`Iterate over the questions and build a sequence from the text and the current question, with the correct
model-specific separators token type ids and attention masks.`),Gc.forEach(t),vl=g(X),ua=i(X,"LI",{});var Uc=p(ua);ql=o(Uc,`Pass this sequence through the model. This outputs a range of scores across the entire sequence tokens (question and
text), for both the start and end positions.`),Uc.forEach(t),Tl=g(X),ma=i(X,"LI",{});var Qc=p(ma);El=o(Qc,"Compute the softmax of the result to get probabilities over the tokens."),Qc.forEach(t),Al=g(X),ga=i(X,"LI",{});var Yc=p(ga);zl=o(Yc,"Fetch the tokens from the identified start and stop values, convert those tokens to a string."),Yc.forEach(t),Il=g(X),fa=i(X,"LI",{});var Wc=p(fa);Ml=o(Wc,"Print the results."),Wc.forEach(t),X.forEach(t),nr=g(s),k(Ws.$$.fragment,s),rr=g(s),Es=i(s,"H2",{class:!0});var _o=p(Es);Xs=i(_o,"A",{id:!0,class:!0,href:!0});var Xc=p(Xs);da=i(Xc,"SPAN",{});var Vc=p(da);k(Fe.$$.fragment,Vc),Vc.forEach(t),Xc.forEach(t),Ll=g(_o),_a=i(_o,"SPAN",{});var Jc=p(_a);Pl=o(Jc,"Language Modeling"),Jc.forEach(t),_o.forEach(t),or=g(s),vt=i(s,"P",{});var Kc=p(vt);Fl=o(Kc,`Language modeling is the task of fitting a model to a corpus, which can be domain specific. All popular
transformer-based models are trained using a variant of language modeling, e.g. BERT with masked language modeling,
GPT-2 with causal language modeling.`),Kc.forEach(t),lr=g(s),Vs=i(s,"P",{});var jo=p(Vs);Nl=o(jo,`Language modeling can be useful outside of pretraining as well, for example to shift the model distribution to be
domain-specific: using a language model trained over a very large corpus, and then fine-tuning it to a news dataset or
on scientific papers e.g. `),Ne=i(jo,"A",{href:!0,rel:!0});var Zc=p(Ne);Cl=o(Zc,"LysandreJik/arxiv-nlp"),Zc.forEach(t),Sl=o(jo,"."),jo.forEach(t),ir=g(s),As=i(s,"H3",{class:!0});var ko=p(As);Js=i(ko,"A",{id:!0,class:!0,href:!0});var su=p(Js);ja=i(su,"SPAN",{});var eu=p(ja);k(Ce.$$.fragment,eu),eu.forEach(t),su.forEach(t),Dl=g(ko),ka=i(ko,"SPAN",{});var tu=p(ka);Ol=o(tu,"Masked Language Modeling"),tu.forEach(t),ko.forEach(t),pr=g(s),ms=i(s,"P",{});var Ut=p(ms);Bl=o(Ut,`Masked language modeling is the task of masking tokens in a sequence with a masking token, and prompting the model to
fill that mask with an appropriate token. This allows the model to attend to both the right context (tokens on the
right of the mask) and the left context (tokens on the left of the mask). Such a training creates a strong basis for
downstream tasks requiring bi-directional context, such as SQuAD (question answering, see `),Se=i(Ut,"A",{href:!0,rel:!0});var au=p(Se);Rl=o(au,"Lewis, Lui, Goyal et al."),au.forEach(t),Hl=o(Ut,`, part 4.2). If you would like to fine-tune a model on a masked language modeling
task, you may leverage the `),De=i(Ut,"A",{href:!0,rel:!0});var nu=p(De);Gl=o(nu,"run_mlm.py"),nu.forEach(t),Ul=o(Ut," script."),Ut.forEach(t),hr=g(s),qt=i(s,"P",{});var ru=p(qt);Ql=o(ru,"Here is an example of using pipelines to replace a mask from a sequence:"),ru.forEach(t),cr=g(s),k(Oe.$$.fragment,s),ur=g(s),Tt=i(s,"P",{});var ou=p(Tt);Yl=o(ou,"This outputs the sequences with the mask filled, the confidence score, and the token id in the tokenizer vocabulary:"),ou.forEach(t),mr=g(s),k(Be.$$.fragment,s),gr=g(s),Et=i(s,"P",{});var lu=p(Et);Wl=o(lu,"Here is an example of doing masked language modeling using a model and a tokenizer. The process is the following:"),lu.forEach(t),fr=g(s),D=i(s,"OL",{});var ts=p(D);wa=i(ts,"LI",{});var iu=p(wa);Xl=o(iu,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a DistilBERT model and
loads it with the weights stored in the checkpoint.`),iu.forEach(t),Vl=g(ts),Re=i(ts,"LI",{});var wo=p(Re);Jl=o(wo,"Define a sequence with a masked token, placing the "),xa=i(wo,"CODE",{});var pu=p(xa);Kl=o(pu,"tokenizer.mask_token"),pu.forEach(t),Zl=o(wo," instead of a word."),wo.forEach(t),si=g(ts),ba=i(ts,"LI",{});var hu=p(ba);ei=o(hu,"Encode that sequence into a list of IDs and find the position of the masked token in that list."),hu.forEach(t),ti=g(ts),ya=i(ts,"LI",{});var cu=p(ya);ai=o(cu,`Retrieve the predictions at the index of the mask token: this tensor has the same size as the vocabulary, and the
values are the scores attributed to each token. The model gives higher score to tokens it deems probable in that
context.`),cu.forEach(t),ni=g(ts),zs=i(ts,"LI",{});var Qt=p(zs);ri=o(Qt,"Retrieve the top 5 tokens using the PyTorch "),$a=i(Qt,"CODE",{});var uu=p($a);oi=o(uu,"topk"),uu.forEach(t),li=o(Qt," or TensorFlow "),va=i(Qt,"CODE",{});var mu=p(va);ii=o(mu,"top_k"),mu.forEach(t),pi=o(Qt," methods."),Qt.forEach(t),hi=g(ts),qa=i(ts,"LI",{});var gu=p(qa);ci=o(gu,"Replace the mask token by the tokens and print the results"),gu.forEach(t),ts.forEach(t),dr=g(s),k(Ks.$$.fragment,s),_r=g(s),At=i(s,"P",{});var fu=p(At);ui=o(fu,"This prints five sequences, with the top 5 tokens predicted by the model."),fu.forEach(t),jr=g(s),Is=i(s,"H3",{class:!0});var xo=p(Is);Zs=i(xo,"A",{id:!0,class:!0,href:!0});var du=p(Zs);Ta=i(du,"SPAN",{});var _u=p(Ta);k(He.$$.fragment,_u),_u.forEach(t),du.forEach(t),mi=g(xo),Ea=i(xo,"SPAN",{});var ju=p(Ea);gi=o(ju,"Causal Language Modeling"),ju.forEach(t),xo.forEach(t),kr=g(s),se=i(s,"P",{});var bo=p(se);fi=o(bo,`Causal language modeling is the task of predicting the token following a sequence of tokens. In this situation, the
model only attends to the left context (tokens on the left of the mask). Such a training is particularly interesting
for generation tasks. If you would like to fine-tune a model on a causal language modeling task, you may leverage the
`),Ge=i(bo,"A",{href:!0,rel:!0});var ku=p(Ge);di=o(ku,"run_clm.py"),ku.forEach(t),_i=o(bo," script."),bo.forEach(t),wr=g(s),zt=i(s,"P",{});var wu=p(zt);ji=o(wu,`Usually, the next token is predicted by sampling from the logits of the last hidden state the model produces from the
input sequence.`),wu.forEach(t),xr=g(s),k(ee.$$.fragment,s),br=g(s),gs=i(s,"P",{});var Yt=p(gs);ki=o(Yt,"This outputs a (hopefully) coherent next token following the original sequence, which in our case is the word "),Aa=i(Yt,"EM",{});var xu=p(Aa);wi=o(xu,"is"),xu.forEach(t),xi=o(Yt,` or
`),za=i(Yt,"EM",{});var bu=p(za);bi=o(bu,"features"),bu.forEach(t),yi=o(Yt,"."),Yt.forEach(t),yr=g(s),te=i(s,"P",{});var yo=p(te);$i=o(yo,"In the next section, we show how "),It=i(yo,"A",{href:!0});var yu=p(It);vi=o(yu,"generation_utils.GenerationMixin.generate()"),yu.forEach(t),qi=o(yo,` can be used to
generate multiple tokens up to a specified length instead of one token at a time.`),yo.forEach(t),$r=g(s),Ms=i(s,"H3",{class:!0});var $o=p(Ms);ae=i($o,"A",{id:!0,class:!0,href:!0});var $u=p(ae);Ia=i($u,"SPAN",{});var vu=p(Ia);k(Ue.$$.fragment,vu),vu.forEach(t),$u.forEach(t),Ti=g($o),Ma=i($o,"SPAN",{});var qu=p(Ma);Ei=o(qu,"Text Generation"),qu.forEach(t),$o.forEach(t),vr=g(s),O=i(s,"P",{});var as=p(O);Ai=o(as,"In text generation ("),La=i(as,"EM",{});var Tu=p(La);zi=o(Tu,"a.k.a"),Tu.forEach(t),Ii=g(as),Pa=i(as,"EM",{});var Eu=p(Pa);Mi=o(Eu,"open-ended text generation"),Eu.forEach(t),Li=o(as,`) the goal is to create a coherent portion of text that is a
continuation from the given context. The following example shows how `),Fa=i(as,"EM",{});var Au=p(Fa);Pi=o(Au,"GPT-2"),Au.forEach(t),Fi=o(as,` can be used in pipelines to generate text.
As a default all models apply `),Na=i(as,"EM",{});var zu=p(Na);Ni=o(zu,"Top-K"),zu.forEach(t),Ci=o(as,` sampling when used in pipelines, as configured in their respective configurations
(see `),Qe=i(as,"A",{href:!0,rel:!0});var Iu=p(Qe);Si=o(Iu,"gpt-2 config"),Iu.forEach(t),Di=o(as," for example)."),as.forEach(t),qr=g(s),k(ne.$$.fragment,s),Tr=g(s),L=i(s,"P",{});var N=p(L);Oi=o(N,"Text generation is currently possible with "),Ca=i(N,"EM",{});var Mu=p(Ca);Bi=o(Mu,"GPT-2"),Mu.forEach(t),Ri=o(N,", "),Sa=i(N,"EM",{});var Lu=p(Sa);Hi=o(Lu,"OpenAi-GPT"),Lu.forEach(t),Gi=o(N,", "),Da=i(N,"EM",{});var Pu=p(Da);Ui=o(Pu,"CTRL"),Pu.forEach(t),Qi=o(N,", "),Oa=i(N,"EM",{});var Fu=p(Oa);Yi=o(Fu,"XLNet"),Fu.forEach(t),Wi=o(N,", "),Ba=i(N,"EM",{});var Nu=p(Ba);Xi=o(Nu,"Transfo-XL"),Nu.forEach(t),Vi=o(N," and "),Ra=i(N,"EM",{});var Cu=p(Ra);Ji=o(Cu,"Reformer"),Cu.forEach(t),Ki=o(N,` in
PyTorch and for most models in Tensorflow as well. As can be seen in the example above `),Ha=i(N,"EM",{});var Su=p(Ha);Zi=o(Su,"XLNet"),Su.forEach(t),sp=o(N," and "),Ga=i(N,"EM",{});var Du=p(Ga);ep=o(Du,"Transfo-XL"),Du.forEach(t),tp=o(N,` often
need to be padded to work well. GPT-2 is usually a good choice for `),Ua=i(N,"EM",{});var Ou=p(Ua);ap=o(Ou,"open-ended text generation"),Ou.forEach(t),np=o(N,` because it was trained
on millions of webpages with a causal language modeling objective.`),N.forEach(t),Er=g(s),re=i(s,"P",{});var vo=p(re);rp=o(vo,`For more information on how to apply different decoding strategies for text generation, please also refer to our text
generation blog post `),Ye=i(vo,"A",{href:!0,rel:!0});var Bu=p(Ye);op=o(Bu,"here"),Bu.forEach(t),lp=o(vo,"."),vo.forEach(t),Ar=g(s),Ls=i(s,"H2",{class:!0});var qo=p(Ls);oe=i(qo,"A",{id:!0,class:!0,href:!0});var Ru=p(oe);Qa=i(Ru,"SPAN",{});var Hu=p(Qa);k(We.$$.fragment,Hu),Hu.forEach(t),Ru.forEach(t),ip=g(qo),Ya=i(qo,"SPAN",{});var Gu=p(Ya);pp=o(Gu,"Named Entity Recognition"),Gu.forEach(t),qo.forEach(t),zr=g(s),le=i(s,"P",{});var To=p(le);hp=o(To,`Named Entity Recognition (NER) is the task of classifying tokens according to a class, for example, identifying a token
as a person, an organisation or a location. An example of a named entity recognition dataset is the CoNLL-2003 dataset,
which is entirely based on that task. If you would like to fine-tune a model on an NER task, you may leverage the
`),Xe=i(To,"A",{href:!0,rel:!0});var Uu=p(Xe);cp=o(Uu,"run_ner.py"),Uu.forEach(t),up=o(To," script."),To.forEach(t),Ir=g(s),Mt=i(s,"P",{});var Qu=p(Mt);mp=o(Qu,`Here is an example of using pipelines to do named entity recognition, specifically, trying to identify tokens as
belonging to one of 9 classes:`),Qu.forEach(t),Mr=g(s),P=i(s,"UL",{});var S=p(P);Wa=i(S,"LI",{});var Yu=p(Wa);gp=o(Yu,"O, Outside of a named entity"),Yu.forEach(t),fp=g(S),Xa=i(S,"LI",{});var Wu=p(Xa);dp=o(Wu,"B-MIS, Beginning of a miscellaneous entity right after another miscellaneous entity"),Wu.forEach(t),_p=g(S),Va=i(S,"LI",{});var Xu=p(Va);jp=o(Xu,"I-MIS, Miscellaneous entity"),Xu.forEach(t),kp=g(S),Ja=i(S,"LI",{});var Vu=p(Ja);wp=o(Vu,"B-PER, Beginning of a person\u2019s name right after another person\u2019s name"),Vu.forEach(t),xp=g(S),Ka=i(S,"LI",{});var Ju=p(Ka);bp=o(Ju,"I-PER, Person\u2019s name"),Ju.forEach(t),yp=g(S),Za=i(S,"LI",{});var Ku=p(Za);$p=o(Ku,"B-ORG, Beginning of an organisation right after another organisation"),Ku.forEach(t),vp=g(S),sn=i(S,"LI",{});var Zu=p(sn);qp=o(Zu,"I-ORG, Organisation"),Zu.forEach(t),Tp=g(S),en=i(S,"LI",{});var sm=p(en);Ep=o(sm,"B-LOC, Beginning of a location right after another location"),sm.forEach(t),Ap=g(S),tn=i(S,"LI",{});var em=p(tn);zp=o(em,"I-LOC, Location"),em.forEach(t),S.forEach(t),Lr=g(s),fs=i(s,"P",{});var Wt=p(fs);Ip=o(Wt,"It leverages a fine-tuned model on CoNLL-2003, fine-tuned by "),Ve=i(Wt,"A",{href:!0,rel:!0});var tm=p(Ve);Mp=o(tm,"@stefan-it"),tm.forEach(t),Lp=o(Wt," from "),Je=i(Wt,"A",{href:!0,rel:!0});var am=p(Je);Pp=o(am,"dbmdz"),am.forEach(t),Fp=o(Wt,"."),Wt.forEach(t),Pr=g(s),k(Ke.$$.fragment,s),Fr=g(s),Lt=i(s,"P",{});var nm=p(Lt);Np=o(nm,`This outputs a list of all words that have been identified as one of the entities from the 9 classes defined above.
Here are the expected results:`),nm.forEach(t),Nr=g(s),k(Ze.$$.fragment,s),Cr=g(s),Pt=i(s,"P",{});var rm=p(Pt);Cp=o(rm,`Note how the tokens of the sequence \u201CHugging Face\u201D have been identified as an organisation, and \u201CNew York City\u201D,
\u201CDUMBO\u201D and \u201CManhattan Bridge\u201D have been identified as locations.`),rm.forEach(t),Sr=g(s),Ft=i(s,"P",{});var om=p(Ft);Sp=o(om,"Here is an example of doing named entity recognition, using a model and a tokenizer. The process is the following:"),om.forEach(t),Dr=g(s),B=i(s,"OL",{});var ns=p(B);an=i(ns,"LI",{});var lm=p(an);Dp=o(lm,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),lm.forEach(t),Op=g(ns),nn=i(ns,"LI",{});var im=p(nn);Bp=o(im,"Define a sequence with known entities, such as \u201CHugging Face\u201D as an organisation and \u201CNew York City\u201D as a location."),im.forEach(t),Rp=g(ns),rn=i(ns,"LI",{});var pm=p(rn);Hp=o(pm,`Split words into tokens so that they can be mapped to predictions. We use a small hack by, first, completely
encoding and decoding the sequence, so that we\u2019re left with a string that contains the special tokens.`),pm.forEach(t),Gp=g(ns),on=i(ns,"LI",{});var hm=p(on);Up=o(hm,"Encode that sequence into IDs (special tokens are added automatically)."),hm.forEach(t),Qp=g(ns),ln=i(ns,"LI",{});var cm=p(ln);Yp=o(cm,`Retrieve the predictions by passing the input to the model and getting the first output. This results in a
distribution over the 9 possible classes for each token. We take the argmax to retrieve the most likely class for
each token.`),cm.forEach(t),Wp=g(ns),pn=i(ns,"LI",{});var um=p(pn);Xp=o(um,"Zip together each token with its prediction and print it."),um.forEach(t),ns.forEach(t),Or=g(s),k(ie.$$.fragment,s),Br=g(s),Nt=i(s,"P",{});var mm=p(Nt);Vp=o(mm,`This outputs a list of each token mapped to its corresponding prediction. Differently from the pipeline, here every
token has a prediction as we didn\u2019t remove the \u201C0\u201Dth class, which means that no particular entity was found on that
token.`),mm.forEach(t),Rr=g(s),ds=i(s,"P",{});var Xt=p(ds);Jp=o(Xt,"In the above example, "),hn=i(Xt,"CODE",{});var gm=p(hn);Kp=o(gm,"predictions"),gm.forEach(t),Zp=o(Xt,` is an integer that corresponds to the predicted class. We can use the
`),cn=i(Xt,"CODE",{});var fm=p(cn);sh=o(fm,"model.config.id2label"),fm.forEach(t),eh=o(Xt,` property in order to recover the class name corresponding to the class number, which is
illustrated below:`),Xt.forEach(t),Hr=g(s),k(st.$$.fragment,s),Gr=g(s),Ps=i(s,"H2",{class:!0});var Eo=p(Ps);pe=i(Eo,"A",{id:!0,class:!0,href:!0});var dm=p(pe);un=i(dm,"SPAN",{});var _m=p(un);k(et.$$.fragment,_m),_m.forEach(t),dm.forEach(t),th=g(Eo),mn=i(Eo,"SPAN",{});var jm=p(mn);ah=o(jm,"Summarization"),jm.forEach(t),Eo.forEach(t),Ur=g(s),he=i(s,"P",{});var Ao=p(he);nh=o(Ao,`Summarization is the task of summarizing a document or an article into a shorter text. If you would like to fine-tune a
model on a summarization task, you may leverage the `),tt=i(Ao,"A",{href:!0,rel:!0});var km=p(tt);rh=o(km,"run_summarization.py"),km.forEach(t),oh=o(Ao,`
script.`),Ao.forEach(t),Qr=g(s),ce=i(s,"P",{});var zo=p(ce);lh=o(zo,`An example of a summarization dataset is the CNN / Daily Mail dataset, which consists of long news articles and was
created for the task of summarization. If you would like to fine-tune a model on a summarization task, various
approaches are described in this `),at=i(zo,"A",{href:!0,rel:!0});var wm=p(at);ih=o(wm,"document"),wm.forEach(t),ph=o(zo,"."),zo.forEach(t),Yr=g(s),Ct=i(s,"P",{});var xm=p(Ct);hh=o(xm,`Here is an example of using the pipelines to do summarization. It leverages a Bart model that was fine-tuned on the CNN
/ Daily Mail data set.`),xm.forEach(t),Wr=g(s),k(nt.$$.fragment,s),Xr=g(s),W=i(s,"P",{});var ks=p(W);ch=o(ks,"Because the summarization pipeline depends on the "),gn=i(ks,"CODE",{});var bm=p(gn);uh=o(bm,"PreTrainedModel.generate()"),bm.forEach(t),mh=o(ks,` method, we can override the default
arguments of `),fn=i(ks,"CODE",{});var ym=p(fn);gh=o(ym,"PreTrainedModel.generate()"),ym.forEach(t),fh=o(ks," directly in the pipeline for "),dn=i(ks,"CODE",{});var $m=p(dn);dh=o($m,"max_length"),$m.forEach(t),_h=o(ks," and "),_n=i(ks,"CODE",{});var vm=p(_n);jh=o(vm,"min_length"),vm.forEach(t),kh=o(ks,` as shown
below. This outputs the following summary:`),ks.forEach(t),Vr=g(s),k(rt.$$.fragment,s),Jr=g(s),St=i(s,"P",{});var qm=p(St);wh=o(qm,"Here is an example of doing summarization using a model and a tokenizer. The process is the following:"),qm.forEach(t),Kr=g(s),Z=i(s,"OL",{});var _e=p(Z);Fs=i(_e,"LI",{});var Vt=p(Fs);xh=o(Vt,`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),jn=i(Vt,"CODE",{});var Tm=p(jn);bh=o(Tm,"Bart"),Tm.forEach(t),yh=o(Vt," or "),kn=i(Vt,"CODE",{});var Em=p(kn);$h=o(Em,"T5"),Em.forEach(t),vh=o(Vt,"."),Vt.forEach(t),qh=g(_e),wn=i(_e,"LI",{});var Am=p(wn);Th=o(Am,"Define the article that should be summarized."),Am.forEach(t),Eh=g(_e),xn=i(_e,"LI",{});var zm=p(xn);Ah=o(zm,"Add the T5 specific prefix \u201Csummarize: \u201C."),zm.forEach(t),zh=g(_e),ot=i(_e,"LI",{});var Io=p(ot);Ih=o(Io,"Use the "),bn=i(Io,"CODE",{});var Im=p(bn);Mh=o(Im,"PreTrainedModel.generate()"),Im.forEach(t),Lh=o(Io," method to generate the summary."),Io.forEach(t),_e.forEach(t),Zr=g(s),Dt=i(s,"P",{});var Mm=p(Dt);Ph=o(Mm,`In this example we use Google\u2019s T5 model. Even though it was pre-trained only on a multi-task mixed dataset (including
CNN / Daily Mail), it yields very good results.`),Mm.forEach(t),so=g(s),k(ue.$$.fragment,s),eo=g(s),Ns=i(s,"H2",{class:!0});var Mo=p(Ns);me=i(Mo,"A",{id:!0,class:!0,href:!0});var Lm=p(me);yn=i(Lm,"SPAN",{});var Pm=p(yn);k(lt.$$.fragment,Pm),Pm.forEach(t),Lm.forEach(t),Fh=g(Mo),$n=i(Mo,"SPAN",{});var Fm=p($n);Nh=o(Fm,"Translation"),Fm.forEach(t),Mo.forEach(t),to=g(s),ge=i(s,"P",{});var Lo=p(ge);Ch=o(Lo,`Translation is the task of translating a text from one language to another. If you would like to fine-tune a model on a
translation task, you may leverage the `),it=i(Lo,"A",{href:!0,rel:!0});var Nm=p(it);Sh=o(Nm,"run_translation.py"),Nm.forEach(t),Dh=o(Lo," script."),Lo.forEach(t),ao=g(s),fe=i(s,"P",{});var Po=p(fe);Oh=o(Po,`An example of a translation dataset is the WMT English to German dataset, which has sentences in English as the input
data and the corresponding sentences in German as the target data. If you would like to fine-tune a model on a
translation task, various approaches are described in this `),pt=i(Po,"A",{href:!0,rel:!0});var Cm=p(pt);Bh=o(Cm,"document"),Cm.forEach(t),Rh=o(Po,"."),Po.forEach(t),no=g(s),Ot=i(s,"P",{});var Sm=p(Ot);Hh=o(Sm,`Here is an example of using the pipelines to do translation. It leverages a T5 model that was only pre-trained on a
multi-task mixture dataset (including WMT), yet, yielding impressive translation results.`),Sm.forEach(t),ro=g(s),k(ht.$$.fragment,s),oo=g(s),ss=i(s,"P",{});var je=p(ss);Gh=o(je,"Because the translation pipeline depends on the "),vn=i(je,"CODE",{});var Dm=p(vn);Uh=o(Dm,"PreTrainedModel.generate()"),Dm.forEach(t),Qh=o(je,` method, we can override the default
arguments of `),qn=i(je,"CODE",{});var Om=p(qn);Yh=o(Om,"PreTrainedModel.generate()"),Om.forEach(t),Wh=o(je," directly in the pipeline as is shown for "),Tn=i(je,"CODE",{});var Bm=p(Tn);Xh=o(Bm,"max_length"),Bm.forEach(t),Vh=o(je," above."),je.forEach(t),lo=g(s),Bt=i(s,"P",{});var Rm=p(Bt);Jh=o(Rm,"Here is an example of doing translation using a model and a tokenizer. The process is the following:"),Rm.forEach(t),io=g(s),es=i(s,"OL",{});var ke=p(es);Cs=i(ke,"LI",{});var Jt=p(Cs);Kh=o(Jt,`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),En=i(Jt,"CODE",{});var Hm=p(En);Zh=o(Hm,"Bart"),Hm.forEach(t),sc=o(Jt," or "),An=i(Jt,"CODE",{});var Gm=p(An);ec=o(Gm,"T5"),Gm.forEach(t),tc=o(Jt,"."),Jt.forEach(t),ac=g(ke),zn=i(ke,"LI",{});var Um=p(zn);nc=o(Um,"Define the article that should be summarized."),Um.forEach(t),rc=g(ke),In=i(ke,"LI",{});var Qm=p(In);oc=o(Qm,"Add the T5 specific prefix \u201Ctranslate English to German: \u201D"),Qm.forEach(t),lc=g(ke),ct=i(ke,"LI",{});var Fo=p(ct);ic=o(Fo,"Use the "),Mn=i(Fo,"CODE",{});var Ym=p(Mn);pc=o(Ym,"PreTrainedModel.generate()"),Ym.forEach(t),hc=o(Fo," method to perform the translation."),Fo.forEach(t),ke.forEach(t),po=g(s),k(de.$$.fragment,s),ho=g(s),Rt=i(s,"P",{});var Wm=p(Rt);cc=o(Wm,"We get the same translation as with the pipeline example."),Wm.forEach(t),this.h()},h(){d(n,"name","hf:doc:metadata"),d(n,"content",JSON.stringify(Fg)),d(f,"id","summary-of-the-tasks"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#summary-of-the-tasks"),d(a,"class","relative group"),d(ls,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoModel"),d(K,"href","https://github.com/huggingface/transformers/tree/master/examples"),d(K,"rel","nofollow"),d(hs,"href","https://github.com/huggingface/transformers/tree/master/examples"),d(hs,"rel","nofollow"),d(Us,"id","sequence-classification"),d(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Us,"href","#sequence-classification"),d(qs,"class","relative group"),d(ve,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-classification/run_glue.py"),d(ve,"rel","nofollow"),d(qe,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/text-classification/run_tf_glue.py"),d(qe,"rel","nofollow"),d(Te,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/text-classification/run_tf_text_classification.py"),d(Te,"rel","nofollow"),d(Ee,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-classification/run_xnli.py"),d(Ee,"rel","nofollow"),d(Ys,"id","extractive-question-answering"),d(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ys,"href","#extractive-question-answering"),d(Ts,"class","relative group"),d(Ie,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/question-answering/run_qa.py"),d(Ie,"rel","nofollow"),d(Me,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/question-answering/run_tf_squad.py"),d(Me,"rel","nofollow"),d(Xs,"id","language-modeling"),d(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xs,"href","#language-modeling"),d(Es,"class","relative group"),d(Ne,"href","https://huggingface.co/lysandre/arxiv-nlp"),d(Ne,"rel","nofollow"),d(Js,"id","masked-language-modeling"),d(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Js,"href","#masked-language-modeling"),d(As,"class","relative group"),d(Se,"href","https://arxiv.org/abs/1910.13461"),d(Se,"rel","nofollow"),d(De,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/language-modeling/run_mlm.py"),d(De,"rel","nofollow"),d(Zs,"id","causal-language-modeling"),d(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Zs,"href","#causal-language-modeling"),d(Is,"class","relative group"),d(Ge,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/language-modeling/run_clm.py"),d(Ge,"rel","nofollow"),d(It,"href","/docs/transformers/master/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),d(ae,"id","text-generation"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#text-generation"),d(Ms,"class","relative group"),d(Qe,"href","https://huggingface.co/gpt2/blob/main/config.json"),d(Qe,"rel","nofollow"),d(Ye,"href","https://huggingface.co/blog/how-to-generate"),d(Ye,"rel","nofollow"),d(oe,"id","named-entity-recognition"),d(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oe,"href","#named-entity-recognition"),d(Ls,"class","relative group"),d(Xe,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/token-classification/run_ner.py"),d(Xe,"rel","nofollow"),d(Ve,"href","https://github.com/stefan-it"),d(Ve,"rel","nofollow"),d(Je,"href","https://github.com/dbmdz"),d(Je,"rel","nofollow"),d(pe,"id","summarization"),d(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(pe,"href","#summarization"),d(Ps,"class","relative group"),d(tt,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/run_summarization.py"),d(tt,"rel","nofollow"),d(at,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),d(at,"rel","nofollow"),d(me,"id","translation"),d(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(me,"href","#translation"),d(Ns,"class","relative group"),d(it,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation/run_translation.py"),d(it,"rel","nofollow"),d(pt,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation/README.md"),d(pt,"rel","nofollow")},m(s,h){e(document.head,n),u(s,c,h),u(s,a,h),e(a,f),e(f,_),w(q,_,null),e(a,E),e(a,I),e(I,v),u(s,z,h),w(F,s,h),u(s,Ss,h),u(s,os,h),e(os,xs),u(s,Ds,h),u(s,V,h),e(V,bs),e(V,ls),e(ls,xe),e(V,Os),u(s,G,h),u(s,is,h),e(is,ys),u(s,Bs,h),u(s,J,h),e(J,U),e(U,be),e(U,$s),e($s,Rs),e(U,rs),e(U,K),e(K,T),e(U,M),e(J,ft),e(J,ps),e(ps,dt),e(ps,hs),e(hs,_t),e(ps,cs),u(s,ye,h),u(s,vs,h),e(vs,No),u(s,Dn,h),u(s,Hs,h),e(Hs,Kt),e(Kt,Co),e(Hs,So),e(Hs,Zt),e(Zt,Do),u(s,On,h),u(s,jt,h),e(jt,Oo),u(s,Bn,h),w(Gs,s,h),u(s,Rn,h),u(s,qs,h),e(qs,Us),e(Us,sa),w($e,sa,null),e(qs,Bo),e(qs,ea),e(ea,Ro),u(s,Hn,h),u(s,Q,h),e(Q,Ho),e(Q,ve),e(ve,Go),e(Q,Uo),e(Q,qe),e(qe,Qo),e(Q,Yo),e(Q,Te),e(Te,Wo),e(Q,Xo),e(Q,Ee),e(Ee,Vo),e(Q,Jo),u(s,Gn,h),u(s,kt,h),e(kt,Ko),u(s,Un,h),u(s,wt,h),e(wt,Zo),u(s,Qn,h),w(Ae,s,h),u(s,Yn,h),u(s,xt,h),e(xt,sl),u(s,Wn,h),u(s,Y,h),e(Y,ta),e(ta,el),e(Y,tl),e(Y,aa),e(aa,al),e(Y,nl),e(Y,na),e(na,rl),e(Y,ol),e(Y,ra),e(ra,ll),e(Y,il),e(Y,oa),e(oa,pl),u(s,Xn,h),w(Qs,s,h),u(s,Vn,h),u(s,Ts,h),e(Ts,Ys),e(Ys,la),w(ze,la,null),e(Ts,hl),e(Ts,ia),e(ia,cl),u(s,Jn,h),u(s,us,h),e(us,ul),e(us,Ie),e(Ie,ml),e(us,gl),e(us,Me),e(Me,fl),e(us,dl),u(s,Kn,h),u(s,bt,h),e(bt,_l),u(s,Zn,h),w(Le,s,h),u(s,sr,h),u(s,yt,h),e(yt,jl),u(s,er,h),w(Pe,s,h),u(s,tr,h),u(s,$t,h),e($t,kl),u(s,ar,h),u(s,C,h),e(C,pa),e(pa,wl),e(C,xl),e(C,ha),e(ha,bl),e(C,yl),e(C,ca),e(ca,$l),e(C,vl),e(C,ua),e(ua,ql),e(C,Tl),e(C,ma),e(ma,El),e(C,Al),e(C,ga),e(ga,zl),e(C,Il),e(C,fa),e(fa,Ml),u(s,nr,h),w(Ws,s,h),u(s,rr,h),u(s,Es,h),e(Es,Xs),e(Xs,da),w(Fe,da,null),e(Es,Ll),e(Es,_a),e(_a,Pl),u(s,or,h),u(s,vt,h),e(vt,Fl),u(s,lr,h),u(s,Vs,h),e(Vs,Nl),e(Vs,Ne),e(Ne,Cl),e(Vs,Sl),u(s,ir,h),u(s,As,h),e(As,Js),e(Js,ja),w(Ce,ja,null),e(As,Dl),e(As,ka),e(ka,Ol),u(s,pr,h),u(s,ms,h),e(ms,Bl),e(ms,Se),e(Se,Rl),e(ms,Hl),e(ms,De),e(De,Gl),e(ms,Ul),u(s,hr,h),u(s,qt,h),e(qt,Ql),u(s,cr,h),w(Oe,s,h),u(s,ur,h),u(s,Tt,h),e(Tt,Yl),u(s,mr,h),w(Be,s,h),u(s,gr,h),u(s,Et,h),e(Et,Wl),u(s,fr,h),u(s,D,h),e(D,wa),e(wa,Xl),e(D,Vl),e(D,Re),e(Re,Jl),e(Re,xa),e(xa,Kl),e(Re,Zl),e(D,si),e(D,ba),e(ba,ei),e(D,ti),e(D,ya),e(ya,ai),e(D,ni),e(D,zs),e(zs,ri),e(zs,$a),e($a,oi),e(zs,li),e(zs,va),e(va,ii),e(zs,pi),e(D,hi),e(D,qa),e(qa,ci),u(s,dr,h),w(Ks,s,h),u(s,_r,h),u(s,At,h),e(At,ui),u(s,jr,h),u(s,Is,h),e(Is,Zs),e(Zs,Ta),w(He,Ta,null),e(Is,mi),e(Is,Ea),e(Ea,gi),u(s,kr,h),u(s,se,h),e(se,fi),e(se,Ge),e(Ge,di),e(se,_i),u(s,wr,h),u(s,zt,h),e(zt,ji),u(s,xr,h),w(ee,s,h),u(s,br,h),u(s,gs,h),e(gs,ki),e(gs,Aa),e(Aa,wi),e(gs,xi),e(gs,za),e(za,bi),e(gs,yi),u(s,yr,h),u(s,te,h),e(te,$i),e(te,It),e(It,vi),e(te,qi),u(s,$r,h),u(s,Ms,h),e(Ms,ae),e(ae,Ia),w(Ue,Ia,null),e(Ms,Ti),e(Ms,Ma),e(Ma,Ei),u(s,vr,h),u(s,O,h),e(O,Ai),e(O,La),e(La,zi),e(O,Ii),e(O,Pa),e(Pa,Mi),e(O,Li),e(O,Fa),e(Fa,Pi),e(O,Fi),e(O,Na),e(Na,Ni),e(O,Ci),e(O,Qe),e(Qe,Si),e(O,Di),u(s,qr,h),w(ne,s,h),u(s,Tr,h),u(s,L,h),e(L,Oi),e(L,Ca),e(Ca,Bi),e(L,Ri),e(L,Sa),e(Sa,Hi),e(L,Gi),e(L,Da),e(Da,Ui),e(L,Qi),e(L,Oa),e(Oa,Yi),e(L,Wi),e(L,Ba),e(Ba,Xi),e(L,Vi),e(L,Ra),e(Ra,Ji),e(L,Ki),e(L,Ha),e(Ha,Zi),e(L,sp),e(L,Ga),e(Ga,ep),e(L,tp),e(L,Ua),e(Ua,ap),e(L,np),u(s,Er,h),u(s,re,h),e(re,rp),e(re,Ye),e(Ye,op),e(re,lp),u(s,Ar,h),u(s,Ls,h),e(Ls,oe),e(oe,Qa),w(We,Qa,null),e(Ls,ip),e(Ls,Ya),e(Ya,pp),u(s,zr,h),u(s,le,h),e(le,hp),e(le,Xe),e(Xe,cp),e(le,up),u(s,Ir,h),u(s,Mt,h),e(Mt,mp),u(s,Mr,h),u(s,P,h),e(P,Wa),e(Wa,gp),e(P,fp),e(P,Xa),e(Xa,dp),e(P,_p),e(P,Va),e(Va,jp),e(P,kp),e(P,Ja),e(Ja,wp),e(P,xp),e(P,Ka),e(Ka,bp),e(P,yp),e(P,Za),e(Za,$p),e(P,vp),e(P,sn),e(sn,qp),e(P,Tp),e(P,en),e(en,Ep),e(P,Ap),e(P,tn),e(tn,zp),u(s,Lr,h),u(s,fs,h),e(fs,Ip),e(fs,Ve),e(Ve,Mp),e(fs,Lp),e(fs,Je),e(Je,Pp),e(fs,Fp),u(s,Pr,h),w(Ke,s,h),u(s,Fr,h),u(s,Lt,h),e(Lt,Np),u(s,Nr,h),w(Ze,s,h),u(s,Cr,h),u(s,Pt,h),e(Pt,Cp),u(s,Sr,h),u(s,Ft,h),e(Ft,Sp),u(s,Dr,h),u(s,B,h),e(B,an),e(an,Dp),e(B,Op),e(B,nn),e(nn,Bp),e(B,Rp),e(B,rn),e(rn,Hp),e(B,Gp),e(B,on),e(on,Up),e(B,Qp),e(B,ln),e(ln,Yp),e(B,Wp),e(B,pn),e(pn,Xp),u(s,Or,h),w(ie,s,h),u(s,Br,h),u(s,Nt,h),e(Nt,Vp),u(s,Rr,h),u(s,ds,h),e(ds,Jp),e(ds,hn),e(hn,Kp),e(ds,Zp),e(ds,cn),e(cn,sh),e(ds,eh),u(s,Hr,h),w(st,s,h),u(s,Gr,h),u(s,Ps,h),e(Ps,pe),e(pe,un),w(et,un,null),e(Ps,th),e(Ps,mn),e(mn,ah),u(s,Ur,h),u(s,he,h),e(he,nh),e(he,tt),e(tt,rh),e(he,oh),u(s,Qr,h),u(s,ce,h),e(ce,lh),e(ce,at),e(at,ih),e(ce,ph),u(s,Yr,h),u(s,Ct,h),e(Ct,hh),u(s,Wr,h),w(nt,s,h),u(s,Xr,h),u(s,W,h),e(W,ch),e(W,gn),e(gn,uh),e(W,mh),e(W,fn),e(fn,gh),e(W,fh),e(W,dn),e(dn,dh),e(W,_h),e(W,_n),e(_n,jh),e(W,kh),u(s,Vr,h),w(rt,s,h),u(s,Jr,h),u(s,St,h),e(St,wh),u(s,Kr,h),u(s,Z,h),e(Z,Fs),e(Fs,xh),e(Fs,jn),e(jn,bh),e(Fs,yh),e(Fs,kn),e(kn,$h),e(Fs,vh),e(Z,qh),e(Z,wn),e(wn,Th),e(Z,Eh),e(Z,xn),e(xn,Ah),e(Z,zh),e(Z,ot),e(ot,Ih),e(ot,bn),e(bn,Mh),e(ot,Lh),u(s,Zr,h),u(s,Dt,h),e(Dt,Ph),u(s,so,h),w(ue,s,h),u(s,eo,h),u(s,Ns,h),e(Ns,me),e(me,yn),w(lt,yn,null),e(Ns,Fh),e(Ns,$n),e($n,Nh),u(s,to,h),u(s,ge,h),e(ge,Ch),e(ge,it),e(it,Sh),e(ge,Dh),u(s,ao,h),u(s,fe,h),e(fe,Oh),e(fe,pt),e(pt,Bh),e(fe,Rh),u(s,no,h),u(s,Ot,h),e(Ot,Hh),u(s,ro,h),w(ht,s,h),u(s,oo,h),u(s,ss,h),e(ss,Gh),e(ss,vn),e(vn,Uh),e(ss,Qh),e(ss,qn),e(qn,Yh),e(ss,Wh),e(ss,Tn),e(Tn,Xh),e(ss,Vh),u(s,lo,h),u(s,Bt,h),e(Bt,Jh),u(s,io,h),u(s,es,h),e(es,Cs),e(Cs,Kh),e(Cs,En),e(En,Zh),e(Cs,sc),e(Cs,An),e(An,ec),e(Cs,tc),e(es,ac),e(es,zn),e(zn,nc),e(es,rc),e(es,In),e(In,oc),e(es,lc),e(es,ct),e(ct,ic),e(ct,Mn),e(Mn,pc),e(ct,hc),u(s,po,h),w(de,s,h),u(s,ho,h),u(s,Rt,h),e(Rt,cc),co=!0},p(s,[h]){const ut={};h&2&&(ut.$$scope={dirty:h,ctx:s}),Gs.$set(ut);const Ln={};h&2&&(Ln.$$scope={dirty:h,ctx:s}),Qs.$set(Ln);const Pn={};h&2&&(Pn.$$scope={dirty:h,ctx:s}),Ws.$set(Pn);const Fn={};h&2&&(Fn.$$scope={dirty:h,ctx:s}),Ks.$set(Fn);const Nn={};h&2&&(Nn.$$scope={dirty:h,ctx:s}),ee.$set(Nn);const mt={};h&2&&(mt.$$scope={dirty:h,ctx:s}),ne.$set(mt);const Cn={};h&2&&(Cn.$$scope={dirty:h,ctx:s}),ie.$set(Cn);const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:s}),ue.$set(Sn);const gt={};h&2&&(gt.$$scope={dirty:h,ctx:s}),de.$set(gt)},i(s){co||(x(q.$$.fragment,s),x(F.$$.fragment,s),x(Gs.$$.fragment,s),x($e.$$.fragment,s),x(Ae.$$.fragment,s),x(Qs.$$.fragment,s),x(ze.$$.fragment,s),x(Le.$$.fragment,s),x(Pe.$$.fragment,s),x(Ws.$$.fragment,s),x(Fe.$$.fragment,s),x(Ce.$$.fragment,s),x(Oe.$$.fragment,s),x(Be.$$.fragment,s),x(Ks.$$.fragment,s),x(He.$$.fragment,s),x(ee.$$.fragment,s),x(Ue.$$.fragment,s),x(ne.$$.fragment,s),x(We.$$.fragment,s),x(Ke.$$.fragment,s),x(Ze.$$.fragment,s),x(ie.$$.fragment,s),x(st.$$.fragment,s),x(et.$$.fragment,s),x(nt.$$.fragment,s),x(rt.$$.fragment,s),x(ue.$$.fragment,s),x(lt.$$.fragment,s),x(ht.$$.fragment,s),x(de.$$.fragment,s),co=!0)},o(s){b(q.$$.fragment,s),b(F.$$.fragment,s),b(Gs.$$.fragment,s),b($e.$$.fragment,s),b(Ae.$$.fragment,s),b(Qs.$$.fragment,s),b(ze.$$.fragment,s),b(Le.$$.fragment,s),b(Pe.$$.fragment,s),b(Ws.$$.fragment,s),b(Fe.$$.fragment,s),b(Ce.$$.fragment,s),b(Oe.$$.fragment,s),b(Be.$$.fragment,s),b(Ks.$$.fragment,s),b(He.$$.fragment,s),b(ee.$$.fragment,s),b(Ue.$$.fragment,s),b(ne.$$.fragment,s),b(We.$$.fragment,s),b(Ke.$$.fragment,s),b(Ze.$$.fragment,s),b(ie.$$.fragment,s),b(st.$$.fragment,s),b(et.$$.fragment,s),b(nt.$$.fragment,s),b(rt.$$.fragment,s),b(ue.$$.fragment,s),b(lt.$$.fragment,s),b(ht.$$.fragment,s),b(de.$$.fragment,s),co=!1},d(s){t(n),s&&t(c),s&&t(a),y(q),s&&t(z),y(F,s),s&&t(Ss),s&&t(os),s&&t(Ds),s&&t(V),s&&t(G),s&&t(is),s&&t(Bs),s&&t(J),s&&t(ye),s&&t(vs),s&&t(Dn),s&&t(Hs),s&&t(On),s&&t(jt),s&&t(Bn),y(Gs,s),s&&t(Rn),s&&t(qs),y($e),s&&t(Hn),s&&t(Q),s&&t(Gn),s&&t(kt),s&&t(Un),s&&t(wt),s&&t(Qn),y(Ae,s),s&&t(Yn),s&&t(xt),s&&t(Wn),s&&t(Y),s&&t(Xn),y(Qs,s),s&&t(Vn),s&&t(Ts),y(ze),s&&t(Jn),s&&t(us),s&&t(Kn),s&&t(bt),s&&t(Zn),y(Le,s),s&&t(sr),s&&t(yt),s&&t(er),y(Pe,s),s&&t(tr),s&&t($t),s&&t(ar),s&&t(C),s&&t(nr),y(Ws,s),s&&t(rr),s&&t(Es),y(Fe),s&&t(or),s&&t(vt),s&&t(lr),s&&t(Vs),s&&t(ir),s&&t(As),y(Ce),s&&t(pr),s&&t(ms),s&&t(hr),s&&t(qt),s&&t(cr),y(Oe,s),s&&t(ur),s&&t(Tt),s&&t(mr),y(Be,s),s&&t(gr),s&&t(Et),s&&t(fr),s&&t(D),s&&t(dr),y(Ks,s),s&&t(_r),s&&t(At),s&&t(jr),s&&t(Is),y(He),s&&t(kr),s&&t(se),s&&t(wr),s&&t(zt),s&&t(xr),y(ee,s),s&&t(br),s&&t(gs),s&&t(yr),s&&t(te),s&&t($r),s&&t(Ms),y(Ue),s&&t(vr),s&&t(O),s&&t(qr),y(ne,s),s&&t(Tr),s&&t(L),s&&t(Er),s&&t(re),s&&t(Ar),s&&t(Ls),y(We),s&&t(zr),s&&t(le),s&&t(Ir),s&&t(Mt),s&&t(Mr),s&&t(P),s&&t(Lr),s&&t(fs),s&&t(Pr),y(Ke,s),s&&t(Fr),s&&t(Lt),s&&t(Nr),y(Ze,s),s&&t(Cr),s&&t(Pt),s&&t(Sr),s&&t(Ft),s&&t(Dr),s&&t(B),s&&t(Or),y(ie,s),s&&t(Br),s&&t(Nt),s&&t(Rr),s&&t(ds),s&&t(Hr),y(st,s),s&&t(Gr),s&&t(Ps),y(et),s&&t(Ur),s&&t(he),s&&t(Qr),s&&t(ce),s&&t(Yr),s&&t(Ct),s&&t(Wr),y(nt,s),s&&t(Xr),s&&t(W),s&&t(Vr),y(rt,s),s&&t(Jr),s&&t(St),s&&t(Kr),s&&t(Z),s&&t(Zr),s&&t(Dt),s&&t(so),y(ue,s),s&&t(eo),s&&t(Ns),y(lt),s&&t(to),s&&t(ge),s&&t(ao),s&&t(fe),s&&t(no),s&&t(Ot),s&&t(ro),y(ht,s),s&&t(oo),s&&t(ss),s&&t(lo),s&&t(Bt),s&&t(io),s&&t(es),s&&t(po),y(de,s),s&&t(ho),s&&t(Rt)}}}const Fg={local:"summary-of-the-tasks",sections:[{local:"sequence-classification",title:"Sequence Classification"},{local:"extractive-question-answering",title:"Extractive Question Answering"},{local:"language-modeling",sections:[{local:"masked-language-modeling",title:"Masked Language Modeling"},{local:"causal-language-modeling",title:"Causal Language Modeling"},{local:"text-generation",title:"Text Generation"}],title:"Language Modeling"},{local:"named-entity-recognition",title:"Named Entity Recognition"},{local:"summarization",title:"Summarization"},{local:"translation",title:"Translation"}],title:"Summary of the tasks"};function Ng($,n,c){let{fw:a}=n;return $.$$set=f=>{"fw"in f&&c(0,a=f.fw)},[a]}class Hg extends Xm{constructor(n){super();Vm(this,n,Ng,Pg,Jm,{fw:0})}}export{Hg as default,Fg as metadata};
