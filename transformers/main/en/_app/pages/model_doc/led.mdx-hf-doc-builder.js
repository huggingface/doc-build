import{S as hm,i as pm,s as um,e as a,k as c,w as T,t as n,M as mm,c as r,d as t,m as h,a as i,x as w,h as s,b as f,G as e,g as _,y,q as v,o as E,B as q,v as fm,L as De}from"../../chunks/vendor-hf-doc-builder.js";import{T as yt}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ze}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gm($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDModel, LEDConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function _m($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer
tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),b=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function bm($){let l,b,p,m,k;return{c(){l=a("p"),b=n("When used with "),p=a("code"),m=n("is_split_into_words=True"),k=n(", this tokenizer will add a space before each word (even the first one).")},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"When used with "),p=r(u,"CODE",{});var D=i(p);m=s(D,"is_split_into_words=True"),D.forEach(t),k=s(u,", this tokenizer will add a space before each word (even the first one)."),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function km($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizerFast
tokenizer = LEDTokenizerFast.from_pretrained("allenai/led-base-16384")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LEDTokenizerFast.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),b=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Tm($){let l,b,p,m,k,d,u,D;return{c(){l=a("p"),b=n("When used with "),p=a("code"),m=n("is_split_into_words=True"),k=n(", this tokenizer needs to be instantiated with "),d=a("code"),u=n("add_prefix_space=True"),D=n(".")},l(ee){l=r(ee,"P",{});var A=i(l);b=s(A,"When used with "),p=r(A,"CODE",{});var P=i(p);m=s(P,"is_split_into_words=True"),P.forEach(t),k=s(A,", this tokenizer needs to be instantiated with "),d=r(A,"CODE",{});var W=i(d);u=s(W,"add_prefix_space=True"),W.forEach(t),D=s(A,"."),A.forEach(t)},m(ee,A){_(ee,l,A),e(l,b),e(l,p),e(p,m),e(l,k),e(l,d),e(d,u),e(l,D)},d(ee){ee&&t(l)}}}function wm($){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function ym($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function vm($){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function Em($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),b=n("Conditional generation example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Conditional generation example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function qm($){let l,b,p,m,k;return m=new ze({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),b=n("Summarization example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Summarization example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Lm($){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function $m($){let l,b,p,m,k;return m=new ze({props:{code:`import torch
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
`}}),{c(){l=a("p"),b=n("Example of single-label classification:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example of single-label classification:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Dm($){let l,b;return l=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(p){w(l.$$.fragment,p)},m(p,m){y(l,p,m),b=!0},p:De,i(p){b||(v(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){q(l,p)}}}function zm($){let l,b,p,m,k;return m=new ze({props:{code:`import torch
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
`}}),{c(){l=a("p"),b=n("Example of multi-label classification:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example of multi-label classification:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Fm($){let l,b;return l=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(p){w(l.$$.fragment,p)},m(p,m){y(l,p,m),b=!0},p:De,i(p){b||(v(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){q(l,p)}}}function xm($){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function Sm($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Mm($){let l,b;return l=new ze({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(p){w(l.$$.fragment,p)},m(p,m){y(l,p,m),b=!0},p:De,i(p){b||(v(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){q(l,p)}}}function Om($){let l,b,p,m,k,d,u,D,ee,A,P,W,ie,z,Ue,te,Re,Pe,Q,Ve,de,le,Ke,Ne,X,Xe,Ae,J,Fe,Je,be,M,I,Ie,x,j,ke,ce,Ze,Te,G,Ye,oe,et,tt,ne,ot,nt,U,st,he,we,xe,B,ye,R,at,rt;return{c(){l=a("p"),b=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),k=n(" accept two formats as input:"),d=c(),u=a("ul"),D=a("li"),ee=n("having all inputs as keyword arguments (like PyTorch models), or"),A=c(),P=a("li"),W=n("having all inputs as a list, tuple or dict in the first positional argument."),ie=c(),z=a("p"),Ue=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),te=a("code"),Re=n("model.fit()"),Pe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Ve=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),le=a("code"),Ke=n("fit()"),Ne=n(" and "),X=a("code"),Xe=n("predict()"),Ae=n(`, such as when creating your own layers or models with
the Keras `),J=a("code"),Fe=n("Functional"),Je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),be=c(),M=a("ul"),I=a("li"),Ie=n("a single Tensor with "),x=a("code"),j=n("input_ids"),ke=n(" only and nothing else: "),ce=a("code"),Ze=n("model(input_ids)"),Te=c(),G=a("li"),Ye=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=a("code"),et=n("model([input_ids, attention_mask])"),tt=n(" or "),ne=a("code"),ot=n("model([input_ids, attention_mask, token_type_ids])"),nt=c(),U=a("li"),st=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe=c(),B=a("p"),ye=n(`Note that when creating models and layers with
`),R=a("a"),at=n("subclassing"),rt=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(L){l=r(L,"P",{});var F=i(l);b=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var it=i(p);m=s(it,"transformers"),it.forEach(t),k=s(F," accept two formats as input:"),F.forEach(t),d=h(L),u=r(L,"UL",{});var Se=i(u);D=r(Se,"LI",{});var vt=i(D);ee=s(vt,"having all inputs as keyword arguments (like PyTorch models), or"),vt.forEach(t),A=h(Se),P=r(Se,"LI",{});var dt=i(P);W=s(dt,"having all inputs as a list, tuple or dict in the first positional argument."),dt.forEach(t),Se.forEach(t),ie=h(L),z=r(L,"P",{});var S=i(z);Ue=s(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),te=r(S,"CODE",{});var Et=i(te);Re=s(Et,"model.fit()"),Et.forEach(t),Pe=s(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(S,"CODE",{});var qt=i(Q);Ve=s(qt,"model.fit()"),qt.forEach(t),de=s(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),le=r(S,"CODE",{});var V=i(le);Ke=s(V,"fit()"),V.forEach(t),Ne=s(S," and "),X=r(S,"CODE",{});var Lt=i(X);Xe=s(Lt,"predict()"),Lt.forEach(t),Ae=s(S,`, such as when creating your own layers or models with
the Keras `),J=r(S,"CODE",{});var lt=i(J);Fe=s(lt,"Functional"),lt.forEach(t),Je=s(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),be=h(L),M=r(L,"UL",{});var se=i(M);I=r(se,"LI",{});var pe=i(I);Ie=s(pe,"a single Tensor with "),x=r(pe,"CODE",{});var ct=i(x);j=s(ct,"input_ids"),ct.forEach(t),ke=s(pe," only and nothing else: "),ce=r(pe,"CODE",{});var $t=i(ce);Ze=s($t,"model(input_ids)"),$t.forEach(t),pe.forEach(t),Te=h(se),G=r(se,"LI",{});var ue=i(G);Ye=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=r(ue,"CODE",{});var Ge=i(oe);et=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),tt=s(ue," or "),ne=r(ue,"CODE",{});var Dt=i(ne);ot=s(Dt,"model([input_ids, attention_mask, token_type_ids])"),Dt.forEach(t),ue.forEach(t),nt=h(se),U=r(se,"LI",{});var ht=i(U);st=s(ht,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=r(ht,"CODE",{});var pt=i(he);we=s(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),ht.forEach(t),se.forEach(t),xe=h(L),B=r(L,"P",{});var Me=i(B);ye=s(Me,`Note that when creating models and layers with
`),R=r(Me,"A",{href:!0,rel:!0});var zt=i(R);at=s(zt,"subclassing"),zt.forEach(t),rt=s(Me,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Me.forEach(t),this.h()},h(){f(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(R,"rel","nofollow")},m(L,F){_(L,l,F),e(l,b),e(l,p),e(p,m),e(l,k),_(L,d,F),_(L,u,F),e(u,D),e(D,ee),e(u,A),e(u,P),e(P,W),_(L,ie,F),_(L,z,F),e(z,Ue),e(z,te),e(te,Re),e(z,Pe),e(z,Q),e(Q,Ve),e(z,de),e(z,le),e(le,Ke),e(z,Ne),e(z,X),e(X,Xe),e(z,Ae),e(z,J),e(J,Fe),e(z,Je),_(L,be,F),_(L,M,F),e(M,I),e(I,Ie),e(I,x),e(x,j),e(I,ke),e(I,ce),e(ce,Ze),e(M,Te),e(M,G),e(G,Ye),e(G,oe),e(oe,et),e(G,tt),e(G,ne),e(ne,ot),e(M,nt),e(M,U),e(U,st),e(U,he),e(he,we),_(L,xe,F),_(L,B,F),e(B,ye),e(B,R),e(R,at),e(B,rt)},d(L){L&&t(l),L&&t(d),L&&t(u),L&&t(ie),L&&t(z),L&&t(be),L&&t(M),L&&t(xe),L&&t(B)}}}function Cm($){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function jm($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Pm($){let l,b,p,m,k,d,u,D,ee,A,P,W,ie,z,Ue,te,Re,Pe,Q,Ve,de,le,Ke,Ne,X,Xe,Ae,J,Fe,Je,be,M,I,Ie,x,j,ke,ce,Ze,Te,G,Ye,oe,et,tt,ne,ot,nt,U,st,he,we,xe,B,ye,R,at,rt;return{c(){l=a("p"),b=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),k=n(" accept two formats as input:"),d=c(),u=a("ul"),D=a("li"),ee=n("having all inputs as keyword arguments (like PyTorch models), or"),A=c(),P=a("li"),W=n("having all inputs as a list, tuple or dict in the first positional argument."),ie=c(),z=a("p"),Ue=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),te=a("code"),Re=n("model.fit()"),Pe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Ve=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),le=a("code"),Ke=n("fit()"),Ne=n(" and "),X=a("code"),Xe=n("predict()"),Ae=n(`, such as when creating your own layers or models with
the Keras `),J=a("code"),Fe=n("Functional"),Je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),be=c(),M=a("ul"),I=a("li"),Ie=n("a single Tensor with "),x=a("code"),j=n("input_ids"),ke=n(" only and nothing else: "),ce=a("code"),Ze=n("model(input_ids)"),Te=c(),G=a("li"),Ye=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=a("code"),et=n("model([input_ids, attention_mask])"),tt=n(" or "),ne=a("code"),ot=n("model([input_ids, attention_mask, token_type_ids])"),nt=c(),U=a("li"),st=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe=c(),B=a("p"),ye=n(`Note that when creating models and layers with
`),R=a("a"),at=n("subclassing"),rt=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(L){l=r(L,"P",{});var F=i(l);b=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var it=i(p);m=s(it,"transformers"),it.forEach(t),k=s(F," accept two formats as input:"),F.forEach(t),d=h(L),u=r(L,"UL",{});var Se=i(u);D=r(Se,"LI",{});var vt=i(D);ee=s(vt,"having all inputs as keyword arguments (like PyTorch models), or"),vt.forEach(t),A=h(Se),P=r(Se,"LI",{});var dt=i(P);W=s(dt,"having all inputs as a list, tuple or dict in the first positional argument."),dt.forEach(t),Se.forEach(t),ie=h(L),z=r(L,"P",{});var S=i(z);Ue=s(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),te=r(S,"CODE",{});var Et=i(te);Re=s(Et,"model.fit()"),Et.forEach(t),Pe=s(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(S,"CODE",{});var qt=i(Q);Ve=s(qt,"model.fit()"),qt.forEach(t),de=s(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),le=r(S,"CODE",{});var V=i(le);Ke=s(V,"fit()"),V.forEach(t),Ne=s(S," and "),X=r(S,"CODE",{});var Lt=i(X);Xe=s(Lt,"predict()"),Lt.forEach(t),Ae=s(S,`, such as when creating your own layers or models with
the Keras `),J=r(S,"CODE",{});var lt=i(J);Fe=s(lt,"Functional"),lt.forEach(t),Je=s(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),be=h(L),M=r(L,"UL",{});var se=i(M);I=r(se,"LI",{});var pe=i(I);Ie=s(pe,"a single Tensor with "),x=r(pe,"CODE",{});var ct=i(x);j=s(ct,"input_ids"),ct.forEach(t),ke=s(pe," only and nothing else: "),ce=r(pe,"CODE",{});var $t=i(ce);Ze=s($t,"model(input_ids)"),$t.forEach(t),pe.forEach(t),Te=h(se),G=r(se,"LI",{});var ue=i(G);Ye=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=r(ue,"CODE",{});var Ge=i(oe);et=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),tt=s(ue," or "),ne=r(ue,"CODE",{});var Dt=i(ne);ot=s(Dt,"model([input_ids, attention_mask, token_type_ids])"),Dt.forEach(t),ue.forEach(t),nt=h(se),U=r(se,"LI",{});var ht=i(U);st=s(ht,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=r(ht,"CODE",{});var pt=i(he);we=s(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),ht.forEach(t),se.forEach(t),xe=h(L),B=r(L,"P",{});var Me=i(B);ye=s(Me,`Note that when creating models and layers with
`),R=r(Me,"A",{href:!0,rel:!0});var zt=i(R);at=s(zt,"subclassing"),zt.forEach(t),rt=s(Me,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Me.forEach(t),this.h()},h(){f(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(R,"rel","nofollow")},m(L,F){_(L,l,F),e(l,b),e(l,p),e(p,m),e(l,k),_(L,d,F),_(L,u,F),e(u,D),e(D,ee),e(u,A),e(u,P),e(P,W),_(L,ie,F),_(L,z,F),e(z,Ue),e(z,te),e(te,Re),e(z,Pe),e(z,Q),e(Q,Ve),e(z,de),e(z,le),e(le,Ke),e(z,Ne),e(z,X),e(X,Xe),e(z,Ae),e(z,J),e(J,Fe),e(z,Je),_(L,be,F),_(L,M,F),e(M,I),e(I,Ie),e(I,x),e(x,j),e(I,ke),e(I,ce),e(ce,Ze),e(M,Te),e(M,G),e(G,Ye),e(G,oe),e(oe,et),e(G,tt),e(G,ne),e(ne,ot),e(M,nt),e(M,U),e(U,st),e(U,he),e(he,we),_(L,xe,F),_(L,B,F),e(B,ye),e(B,R),e(R,at),e(B,rt)},d(L){L&&t(l),L&&t(d),L&&t(u),L&&t(ie),L&&t(z),L&&t(be),L&&t(M),L&&t(xe),L&&t(B)}}}function Nm($){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function Am($){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),b=n("Examples:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Examples:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Im($){let l,b,p,m,k,d,u,D,ee,A,P,W,ie,z,Ue,te,Re,Pe,Q,Ve,de,le,Ke,Ne,X,Xe,Ae,J,Fe,Je,be,M,I,Ie,x,j,ke,ce,Ze,Te,G,Ye,oe,et,tt,ne,ot,nt,U,st,he,we,xe,B,ye,R,at,rt,L,F,it,Se,vt,dt,S,Et,qt,V,Lt,lt,se,pe,ct,$t,ue,Ge,Dt,ht,pt,Me,zt,Si,ae,Mi,Us,Oi,Ci,Rs,ji,Pi,fs,Ni,Ai,Vs,Ii,Gi,Ks,Bi,Hi,Xs,Qi,Wi,Ui,ut,Ri,Js,Vi,Ki,Zs,Xi,Ji,Ys,Zi,Yi,ed,Xo,td,Jo,od,nd,sd,Zo,ad,Yo,rd,id,dd,ea,ld,mr,so,cd,en,hd,pd,fr,Ft,ao,ta,tn,ud,oa,md,gr,Oe,on,fd,xt,gd,gs,_d,bd,nn,kd,Td,wd,St,yd,_s,vd,Ed,bs,qd,Ld,$d,ro,_r,Mt,io,na,sn,Dd,sa,zd,br,C,an,Fd,aa,xd,Sd,ra,Md,Od,lo,Cd,rn,jd,ia,Pd,Nd,Ad,co,Id,dn,Gd,ks,Bd,Hd,Qd,mt,ln,Wd,da,Ud,Rd,cn,Ts,Vd,la,Kd,Xd,ws,Jd,ca,Zd,Yd,ho,hn,el,pn,tl,ha,ol,nl,sl,po,un,al,pa,rl,il,ys,mn,kr,Ot,uo,ua,fn,dl,ma,ll,Tr,H,gn,cl,_n,hl,fa,pl,ul,ml,ga,fl,gl,mo,_l,bn,bl,_a,kl,Tl,wl,fo,yl,kn,vl,vs,El,ql,Ll,go,Tn,$l,ba,Dl,wr,Ct,_o,ka,wn,zl,Ta,Fl,yr,jt,yn,xl,wa,Sl,vr,Pt,vn,Ml,ya,Ol,Er,Nt,En,Cl,va,jl,qr,At,qn,Pl,Ea,Nl,Lr,It,Ln,Al,qa,Il,$r,Gt,$n,Gl,La,Bl,Dr,Bt,Dn,Hl,$a,Ql,zr,Ht,zn,Wl,Da,Ul,Fr,Qt,bo,za,Fn,Rl,Fa,Vl,xr,Ce,xn,Kl,Sn,Xl,Es,Jl,Zl,Yl,Mn,ec,On,tc,oc,nc,Be,Cn,sc,Wt,ac,qs,rc,ic,xa,dc,lc,cc,ko,hc,To,Sr,Ut,wo,Sa,jn,pc,Ma,uc,Mr,je,Pn,mc,Nn,fc,Ls,gc,_c,bc,An,kc,In,Tc,wc,yc,ve,Gn,vc,Rt,Ec,$s,qc,Lc,Oa,$c,Dc,zc,yo,Fc,vo,xc,Eo,Or,Vt,qo,Ca,Bn,Sc,ja,Mc,Cr,me,Hn,Oc,Pa,Cc,jc,Qn,Pc,Ds,Nc,Ac,Ic,Wn,Gc,Un,Bc,Hc,Qc,Z,Rn,Wc,Kt,Uc,zs,Rc,Vc,Na,Kc,Xc,Jc,Lo,Zc,$o,Yc,Do,eh,zo,th,Fo,jr,Xt,xo,Aa,Vn,oh,Ia,nh,Pr,fe,Kn,sh,Jt,ah,Ga,rh,ih,Ba,dh,lh,ch,Xn,hh,Fs,ph,uh,mh,Jn,fh,Zn,gh,_h,bh,Ee,Yn,kh,Zt,Th,xs,wh,yh,Ha,vh,Eh,qh,So,Lh,Mo,$h,Oo,Nr,Yt,Co,Qa,es,Dh,Wa,zh,Ar,ge,ts,Fh,os,xh,Ss,Sh,Mh,Oh,ns,Ch,ss,jh,Ph,Nh,jo,Ah,He,as,Ih,eo,Gh,Ms,Bh,Hh,Ua,Qh,Wh,Uh,Po,Rh,No,Ir,to,Ao,Ra,rs,Vh,Va,Kh,Gr,_e,is,Xh,ds,Jh,Os,Zh,Yh,ep,ls,tp,cs,op,np,sp,Io,ap,Qe,hs,rp,oo,ip,Cs,dp,lp,Ka,cp,hp,pp,Go,up,Bo,Br;return d=new We({}),z=new We({}),tn=new We({}),on=new O({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/configuration_led.py#L31"}}),ro=new $e({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[gm]},$$scope:{ctx:$}}}),sn=new We({}),an=new O({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LEDTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LEDTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LEDTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LEDTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LEDTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LEDTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LEDTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LEDTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LEDTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LEDTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L93"}}),lo=new $e({props:{anchor:"transformers.LEDTokenizer.example",$$slots:{default:[_m]},$$scope:{ctx:$}}}),co=new yt({props:{$$slots:{default:[bm]},$$scope:{ctx:$}}}),ln=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L340",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hn=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L366",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),un=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L394",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mn=new O({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L310"}}),fn=new We({}),gn=new O({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LEDTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LEDTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LEDTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LEDTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LEDTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LEDTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LEDTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LEDTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LEDTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LEDTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (LED tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LEDTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L50"}}),mo=new $e({props:{anchor:"transformers.LEDTokenizerFast.example",$$slots:{default:[km]},$$scope:{ctx:$}}}),fo=new yt({props:{$$slots:{default:[Tm]},$$scope:{ctx:$}}}),Tn=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L271",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wn=new We({}),yn=new O({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1180"}}),vn=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1223"}}),En=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1291"}}),qn=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1358"}}),Ln=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1425"}}),$n=new O({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1356"}}),Dn=new O({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1399"}}),zn=new O({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1467"}}),Fn=new We({}),xn=new O({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2214"}}),Cn=new O({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2241",returnDescription:`
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
`}}),ko=new yt({props:{$$slots:{default:[wm]},$$scope:{ctx:$}}}),To=new $e({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[ym]},$$scope:{ctx:$}}}),jn=new We({}),Pn=new O({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2337"}}),Gn=new O({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2381",returnDescription:`
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
`}}),yo=new yt({props:{$$slots:{default:[vm]},$$scope:{ctx:$}}}),vo=new $e({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[Em]},$$scope:{ctx:$}}}),Eo=new $e({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[qm]},$$scope:{ctx:$}}}),Bn=new We({}),Hn=new O({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2530"}}),Rn=new O({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2549",returnDescription:`
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
`}}),Lo=new yt({props:{$$slots:{default:[Lm]},$$scope:{ctx:$}}}),$o=new $e({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[$m]},$$scope:{ctx:$}}}),Do=new $e({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[Dm]},$$scope:{ctx:$}}}),zo=new $e({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-3",$$slots:{default:[zm]},$$scope:{ctx:$}}}),Fo=new $e({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-4",$$slots:{default:[Fm]},$$scope:{ctx:$}}}),Vn=new We({}),Kn=new O({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2664"}}),Yn=new O({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2676",returnDescription:`
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
`}}),So=new yt({props:{$$slots:{default:[xm]},$$scope:{ctx:$}}}),Mo=new $e({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[Sm]},$$scope:{ctx:$}}}),Oo=new $e({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example-2",$$slots:{default:[Mm]},$$scope:{ctx:$}}}),es=new We({}),ts=new O({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2257"}}),jo=new yt({props:{$$slots:{default:[Om]},$$scope:{ctx:$}}}),as=new O({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2269",returnDescription:`
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
`}}),Po=new yt({props:{$$slots:{default:[Cm]},$$scope:{ctx:$}}}),No=new $e({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[jm]},$$scope:{ctx:$}}}),rs=new We({}),is=new O({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2363"}}),Io=new yt({props:{$$slots:{default:[Pm]},$$scope:{ctx:$}}}),hs=new O({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2404",returnDescription:`
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
`}}),Go=new yt({props:{$$slots:{default:[Nm]},$$scope:{ctx:$}}}),Bo=new $e({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[Am]},$$scope:{ctx:$}}}),{c(){l=a("meta"),b=c(),p=a("h1"),m=a("a"),k=a("span"),T(d.$$.fragment),u=c(),D=a("span"),ee=n("LED"),A=c(),P=a("h2"),W=a("a"),ie=a("span"),T(z.$$.fragment),Ue=c(),te=a("span"),Re=n("Overview"),Pe=c(),Q=a("p"),Ve=n("The LED model was proposed in "),de=a("a"),le=n("Longformer: The Long-Document Transformer"),Ke=n(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Ne=c(),X=a("p"),Xe=n("The abstract from the paper is the following:"),Ae=c(),J=a("p"),Fe=a("em"),Je=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),be=c(),M=a("p"),I=n("Tips:"),Ie=c(),x=a("ul"),j=a("li"),ke=a("a"),ce=n("LEDForConditionalGeneration"),Ze=n(` is an extension of
`),Te=a("a"),G=n("BartForConditionalGeneration"),Ye=n(" exchanging the traditional "),oe=a("em"),et=n("self-attention"),tt=n(` layer with
`),ne=a("em"),ot=n("Longformer"),nt=n("\u2019s "),U=a("em"),st=n("chunked self-attention"),he=n(" layer. "),we=a("a"),xe=n("LEDTokenizer"),B=n(` is an alias of
`),ye=a("a"),R=n("BartTokenizer"),at=n("."),rt=c(),L=a("li"),F=n("LED works very well on long-range "),it=a("em"),Se=n("sequence-to-sequence"),vt=n(" tasks where the "),dt=a("code"),S=n("input_ids"),Et=n(` largely exceed a length of
1024 tokens.`),qt=c(),V=a("li"),Lt=n("LED pads the "),lt=a("code"),se=n("input_ids"),pe=n(" to be a multiple of "),ct=a("code"),$t=n("config.attention_window"),ue=n(` if required. Therefore a small speed-up is
gained, when `),Ge=a("a"),Dt=n("LEDTokenizer"),ht=n(" is used with the "),pt=a("code"),Me=n("pad_to_multiple_of"),zt=n(" argument."),Si=c(),ae=a("li"),Mi=n("LED makes use of "),Us=a("em"),Oi=n("global attention"),Ci=n(" by means of the "),Rs=a("code"),ji=n("global_attention_mask"),Pi=n(` (see
`),fs=a("a"),Ni=n("LongformerModel"),Ai=n("). For summarization, it is advised to put "),Vs=a("em"),Ii=n("global attention"),Gi=n(` only on the first
`),Ks=a("code"),Bi=n("<s>"),Hi=n(" token. For question answering, it is advised to put "),Xs=a("em"),Qi=n("global attention"),Wi=n(" on all tokens of the question."),Ui=c(),ut=a("li"),Ri=n("To fine-tune LED on all 16384, "),Js=a("em"),Vi=n("gradient checkpointing"),Ki=n(` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),Zs=a("code"),Xi=n("model.gradient_checkpointing_enable()"),Ji=n(`.
Moreover, the `),Ys=a("code"),Zi=n("use_cache=False"),Yi=n(`
flag can be used to disable the caching mechanism to save memory.`),ed=c(),Xo=a("li"),td=n("A notebook showing how to evaluate LED, can be accessed "),Jo=a("a"),od=n("here"),nd=n("."),sd=c(),Zo=a("li"),ad=n("A notebook showing how to fine-tune LED, can be accessed "),Yo=a("a"),rd=n("here"),id=n("."),dd=c(),ea=a("li"),ld=n(`LED is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),mr=c(),so=a("p"),cd=n("This model was contributed by "),en=a("a"),hd=n("patrickvonplaten"),pd=n("."),fr=c(),Ft=a("h2"),ao=a("a"),ta=a("span"),T(tn.$$.fragment),ud=c(),oa=a("span"),md=n("LEDConfig"),gr=c(),Oe=a("div"),T(on.$$.fragment),fd=c(),xt=a("p"),gd=n("This is the configuration class to store the configuration of a "),gs=a("a"),_d=n("LEDModel"),bd=n(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),nn=a("a"),kd=n("allenai/led-base-16384"),Td=n(" architecture."),wd=c(),St=a("p"),yd=n("Configuration objects inherit from "),_s=a("a"),vd=n("PretrainedConfig"),Ed=n(` and can be used to control the model outputs. Read the
documentation from `),bs=a("a"),qd=n("PretrainedConfig"),Ld=n(" for more information."),$d=c(),T(ro.$$.fragment),_r=c(),Mt=a("h2"),io=a("a"),na=a("span"),T(sn.$$.fragment),Dd=c(),sa=a("span"),zd=n("LEDTokenizer"),br=c(),C=a("div"),T(an.$$.fragment),Fd=c(),aa=a("p"),xd=n("Constructs a LED tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),Sd=c(),ra=a("p"),Md=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Od=c(),T(lo.$$.fragment),Cd=c(),rn=a("p"),jd=n("You can get around that behavior by passing "),ia=a("code"),Pd=n("add_prefix_space=True"),Nd=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ad=c(),T(co.$$.fragment),Id=c(),dn=a("p"),Gd=n("This tokenizer inherits from "),ks=a("a"),Bd=n("PreTrainedTokenizer"),Hd=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qd=c(),mt=a("div"),T(ln.$$.fragment),Wd=c(),da=a("p"),Ud=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LED sequence has the following format:`),Rd=c(),cn=a("ul"),Ts=a("li"),Vd=n("single sequence: "),la=a("code"),Kd=n("<s> X </s>"),Xd=c(),ws=a("li"),Jd=n("pair of sequences: "),ca=a("code"),Zd=n("<s> A </s></s> B </s>"),Yd=c(),ho=a("div"),T(hn.$$.fragment),el=c(),pn=a("p"),tl=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ha=a("code"),ol=n("prepare_for_model"),nl=n(" method."),sl=c(),po=a("div"),T(un.$$.fragment),al=c(),pa=a("p"),rl=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),il=c(),ys=a("div"),T(mn.$$.fragment),kr=c(),Ot=a("h2"),uo=a("a"),ua=a("span"),T(fn.$$.fragment),dl=c(),ma=a("span"),ll=n("LEDTokenizerFast"),Tr=c(),H=a("div"),T(gn.$$.fragment),cl=c(),_n=a("p"),hl=n("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),fa=a("em"),pl=n("tokenizers"),ul=n(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),ml=c(),ga=a("p"),fl=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),gl=c(),T(mo.$$.fragment),_l=c(),bn=a("p"),bl=n("You can get around that behavior by passing "),_a=a("code"),kl=n("add_prefix_space=True"),Tl=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),wl=c(),T(fo.$$.fragment),yl=c(),kn=a("p"),vl=n("This tokenizer inherits from "),vs=a("a"),El=n("PreTrainedTokenizerFast"),ql=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ll=c(),go=a("div"),T(Tn.$$.fragment),$l=c(),ba=a("p"),Dl=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),wr=c(),Ct=a("h2"),_o=a("a"),ka=a("span"),T(wn.$$.fragment),zl=c(),Ta=a("span"),Fl=n("LED specific outputs"),yr=c(),jt=a("div"),T(yn.$$.fragment),xl=c(),wa=a("p"),Sl=n("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),vr=c(),Pt=a("div"),T(vn.$$.fragment),Ml=c(),ya=a("p"),Ol=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Er=c(),Nt=a("div"),T(En.$$.fragment),Cl=c(),va=a("p"),jl=n("Base class for sequence-to-sequence language models outputs."),qr=c(),At=a("div"),T(qn.$$.fragment),Pl=c(),Ea=a("p"),Nl=n("Base class for outputs of sequence-to-sequence sentence classification models."),Lr=c(),It=a("div"),T(Ln.$$.fragment),Al=c(),qa=a("p"),Il=n("Base class for outputs of sequence-to-sequence question answering models."),$r=c(),Gt=a("div"),T($n.$$.fragment),Gl=c(),La=a("p"),Bl=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Dr=c(),Bt=a("div"),T(Dn.$$.fragment),Hl=c(),$a=a("p"),Ql=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),zr=c(),Ht=a("div"),T(zn.$$.fragment),Wl=c(),Da=a("p"),Ul=n("Base class for sequence-to-sequence language models outputs."),Fr=c(),Qt=a("h2"),bo=a("a"),za=a("span"),T(Fn.$$.fragment),Rl=c(),Fa=a("span"),Vl=n("LEDModel"),xr=c(),Ce=a("div"),T(xn.$$.fragment),Kl=c(),Sn=a("p"),Xl=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Es=a("a"),Jl=n("PreTrainedModel"),Zl=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Yl=c(),Mn=a("p"),ec=n("This model is also a PyTorch "),On=a("a"),tc=n("torch.nn.Module"),oc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),nc=c(),Be=a("div"),T(Cn.$$.fragment),sc=c(),Wt=a("p"),ac=n("The "),qs=a("a"),rc=n("LEDModel"),ic=n(" forward method, overrides the "),xa=a("code"),dc=n("__call__"),lc=n(" special method."),cc=c(),T(ko.$$.fragment),hc=c(),T(To.$$.fragment),Sr=c(),Ut=a("h2"),wo=a("a"),Sa=a("span"),T(jn.$$.fragment),pc=c(),Ma=a("span"),uc=n("LEDForConditionalGeneration"),Mr=c(),je=a("div"),T(Pn.$$.fragment),mc=c(),Nn=a("p"),fc=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ls=a("a"),gc=n("PreTrainedModel"),_c=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),bc=c(),An=a("p"),kc=n("This model is also a PyTorch "),In=a("a"),Tc=n("torch.nn.Module"),wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),yc=c(),ve=a("div"),T(Gn.$$.fragment),vc=c(),Rt=a("p"),Ec=n("The "),$s=a("a"),qc=n("LEDForConditionalGeneration"),Lc=n(" forward method, overrides the "),Oa=a("code"),$c=n("__call__"),Dc=n(" special method."),zc=c(),T(yo.$$.fragment),Fc=c(),T(vo.$$.fragment),xc=c(),T(Eo.$$.fragment),Or=c(),Vt=a("h2"),qo=a("a"),Ca=a("span"),T(Bn.$$.fragment),Sc=c(),ja=a("span"),Mc=n("LEDForSequenceClassification"),Cr=c(),me=a("div"),T(Hn.$$.fragment),Oc=c(),Pa=a("p"),Cc=n(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),jc=c(),Qn=a("p"),Pc=n("This model inherits from "),Ds=a("a"),Nc=n("PreTrainedModel"),Ac=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Ic=c(),Wn=a("p"),Gc=n("This model is also a PyTorch "),Un=a("a"),Bc=n("torch.nn.Module"),Hc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Qc=c(),Z=a("div"),T(Rn.$$.fragment),Wc=c(),Kt=a("p"),Uc=n("The "),zs=a("a"),Rc=n("LEDForSequenceClassification"),Vc=n(" forward method, overrides the "),Na=a("code"),Kc=n("__call__"),Xc=n(" special method."),Jc=c(),T(Lo.$$.fragment),Zc=c(),T($o.$$.fragment),Yc=c(),T(Do.$$.fragment),eh=c(),T(zo.$$.fragment),th=c(),T(Fo.$$.fragment),jr=c(),Xt=a("h2"),xo=a("a"),Aa=a("span"),T(Vn.$$.fragment),oh=c(),Ia=a("span"),nh=n("LEDForQuestionAnswering"),Pr=c(),fe=a("div"),T(Kn.$$.fragment),sh=c(),Jt=a("p"),ah=n(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ga=a("code"),rh=n("span start logits"),ih=n(" and "),Ba=a("code"),dh=n("span end logits"),lh=n(")."),ch=c(),Xn=a("p"),hh=n("This model inherits from "),Fs=a("a"),ph=n("PreTrainedModel"),uh=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),mh=c(),Jn=a("p"),fh=n("This model is also a PyTorch "),Zn=a("a"),gh=n("torch.nn.Module"),_h=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),bh=c(),Ee=a("div"),T(Yn.$$.fragment),kh=c(),Zt=a("p"),Th=n("The "),xs=a("a"),wh=n("LEDForQuestionAnswering"),yh=n(" forward method, overrides the "),Ha=a("code"),vh=n("__call__"),Eh=n(" special method."),qh=c(),T(So.$$.fragment),Lh=c(),T(Mo.$$.fragment),$h=c(),T(Oo.$$.fragment),Nr=c(),Yt=a("h2"),Co=a("a"),Qa=a("span"),T(es.$$.fragment),Dh=c(),Wa=a("span"),zh=n("TFLEDModel"),Ar=c(),ge=a("div"),T(ts.$$.fragment),Fh=c(),os=a("p"),xh=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=a("a"),Sh=n("TFPreTrainedModel"),Mh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=c(),ns=a("p"),Ch=n("This model is also a "),ss=a("a"),jh=n("tf.keras.Model"),Ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nh=c(),T(jo.$$.fragment),Ah=c(),He=a("div"),T(as.$$.fragment),Ih=c(),eo=a("p"),Gh=n("The "),Ms=a("a"),Bh=n("TFLEDModel"),Hh=n(" forward method, overrides the "),Ua=a("code"),Qh=n("__call__"),Wh=n(" special method."),Uh=c(),T(Po.$$.fragment),Rh=c(),T(No.$$.fragment),Ir=c(),to=a("h2"),Ao=a("a"),Ra=a("span"),T(rs.$$.fragment),Vh=c(),Va=a("span"),Kh=n("TFLEDForConditionalGeneration"),Gr=c(),_e=a("div"),T(is.$$.fragment),Xh=c(),ds=a("p"),Jh=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Os=a("a"),Zh=n("TFPreTrainedModel"),Yh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=c(),ls=a("p"),tp=n("This model is also a "),cs=a("a"),op=n("tf.keras.Model"),np=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sp=c(),T(Io.$$.fragment),ap=c(),Qe=a("div"),T(hs.$$.fragment),rp=c(),oo=a("p"),ip=n("The "),Cs=a("a"),dp=n("TFLEDForConditionalGeneration"),lp=n(" forward method, overrides the "),Ka=a("code"),cp=n("__call__"),hp=n(" special method."),pp=c(),T(Go.$$.fragment),up=c(),T(Bo.$$.fragment),this.h()},l(o){const g=mm('[data-svelte="svelte-1phssyn"]',document.head);l=r(g,"META",{name:!0,content:!0}),g.forEach(t),b=h(o),p=r(o,"H1",{class:!0});var ps=i(p);m=r(ps,"A",{id:!0,class:!0,href:!0});var Xa=i(m);k=r(Xa,"SPAN",{});var Ja=i(k);w(d.$$.fragment,Ja),Ja.forEach(t),Xa.forEach(t),u=h(ps),D=r(ps,"SPAN",{});var Za=i(D);ee=s(Za,"LED"),Za.forEach(t),ps.forEach(t),A=h(o),P=r(o,"H2",{class:!0});var us=i(P);W=r(us,"A",{id:!0,class:!0,href:!0});var Ya=i(W);ie=r(Ya,"SPAN",{});var er=i(ie);w(z.$$.fragment,er),er.forEach(t),Ya.forEach(t),Ue=h(us),te=r(us,"SPAN",{});var tr=i(te);Re=s(tr,"Overview"),tr.forEach(t),us.forEach(t),Pe=h(o),Q=r(o,"P",{});var ms=i(Q);Ve=s(ms,"The LED model was proposed in "),de=r(ms,"A",{href:!0,rel:!0});var or=i(de);le=s(or,"Longformer: The Long-Document Transformer"),or.forEach(t),Ke=s(ms,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),ms.forEach(t),Ne=h(o),X=r(o,"P",{});var nr=i(X);Xe=s(nr,"The abstract from the paper is the following:"),nr.forEach(t),Ae=h(o),J=r(o,"P",{});var sr=i(J);Fe=r(sr,"EM",{});var ar=i(Fe);Je=s(ar,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),ar.forEach(t),sr.forEach(t),be=h(o),M=r(o,"P",{});var rr=i(M);I=s(rr,"Tips:"),rr.forEach(t),Ie=h(o),x=r(o,"UL",{});var K=i(x);j=r(K,"LI",{});var Y=i(j);ke=r(Y,"A",{href:!0});var ir=i(ke);ce=s(ir,"LEDForConditionalGeneration"),ir.forEach(t),Ze=s(Y,` is an extension of
`),Te=r(Y,"A",{href:!0});var dr=i(Te);G=s(dr,"BartForConditionalGeneration"),dr.forEach(t),Ye=s(Y," exchanging the traditional "),oe=r(Y,"EM",{});var lr=i(oe);et=s(lr,"self-attention"),lr.forEach(t),tt=s(Y,` layer with
`),ne=r(Y,"EM",{});var cr=i(ne);ot=s(cr,"Longformer"),cr.forEach(t),nt=s(Y,"\u2019s "),U=r(Y,"EM",{});var hr=i(U);st=s(hr,"chunked self-attention"),hr.forEach(t),he=s(Y," layer. "),we=r(Y,"A",{href:!0});var pr=i(we);xe=s(pr,"LEDTokenizer"),pr.forEach(t),B=s(Y,` is an alias of
`),ye=r(Y,"A",{href:!0});var ur=i(ye);R=s(ur,"BartTokenizer"),ur.forEach(t),at=s(Y,"."),Y.forEach(t),rt=h(K),L=r(K,"LI",{});var no=i(L);F=s(no,"LED works very well on long-range "),it=r(no,"EM",{});var gp=i(it);Se=s(gp,"sequence-to-sequence"),gp.forEach(t),vt=s(no," tasks where the "),dt=r(no,"CODE",{});var _p=i(dt);S=s(_p,"input_ids"),_p.forEach(t),Et=s(no,` largely exceed a length of
1024 tokens.`),no.forEach(t),qt=h(K),V=r(K,"LI",{});var ft=i(V);Lt=s(ft,"LED pads the "),lt=r(ft,"CODE",{});var bp=i(lt);se=s(bp,"input_ids"),bp.forEach(t),pe=s(ft," to be a multiple of "),ct=r(ft,"CODE",{});var kp=i(ct);$t=s(kp,"config.attention_window"),kp.forEach(t),ue=s(ft,` if required. Therefore a small speed-up is
gained, when `),Ge=r(ft,"A",{href:!0});var Tp=i(Ge);Dt=s(Tp,"LEDTokenizer"),Tp.forEach(t),ht=s(ft," is used with the "),pt=r(ft,"CODE",{});var wp=i(pt);Me=s(wp,"pad_to_multiple_of"),wp.forEach(t),zt=s(ft," argument."),ft.forEach(t),Si=h(K),ae=r(K,"LI",{});var qe=i(ae);Mi=s(qe,"LED makes use of "),Us=r(qe,"EM",{});var yp=i(Us);Oi=s(yp,"global attention"),yp.forEach(t),Ci=s(qe," by means of the "),Rs=r(qe,"CODE",{});var vp=i(Rs);ji=s(vp,"global_attention_mask"),vp.forEach(t),Pi=s(qe,` (see
`),fs=r(qe,"A",{href:!0});var Ep=i(fs);Ni=s(Ep,"LongformerModel"),Ep.forEach(t),Ai=s(qe,"). For summarization, it is advised to put "),Vs=r(qe,"EM",{});var qp=i(Vs);Ii=s(qp,"global attention"),qp.forEach(t),Gi=s(qe,` only on the first
`),Ks=r(qe,"CODE",{});var Lp=i(Ks);Bi=s(Lp,"<s>"),Lp.forEach(t),Hi=s(qe," token. For question answering, it is advised to put "),Xs=r(qe,"EM",{});var $p=i(Xs);Qi=s($p,"global attention"),$p.forEach(t),Wi=s(qe," on all tokens of the question."),qe.forEach(t),Ui=h(K),ut=r(K,"LI",{});var Ho=i(ut);Ri=s(Ho,"To fine-tune LED on all 16384, "),Js=r(Ho,"EM",{});var Dp=i(Js);Vi=s(Dp,"gradient checkpointing"),Dp.forEach(t),Ki=s(Ho,` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),Zs=r(Ho,"CODE",{});var zp=i(Zs);Xi=s(zp,"model.gradient_checkpointing_enable()"),zp.forEach(t),Ji=s(Ho,`.
Moreover, the `),Ys=r(Ho,"CODE",{});var Fp=i(Ys);Zi=s(Fp,"use_cache=False"),Fp.forEach(t),Yi=s(Ho,`
flag can be used to disable the caching mechanism to save memory.`),Ho.forEach(t),ed=h(K),Xo=r(K,"LI",{});var Hr=i(Xo);td=s(Hr,"A notebook showing how to evaluate LED, can be accessed "),Jo=r(Hr,"A",{href:!0,rel:!0});var xp=i(Jo);od=s(xp,"here"),xp.forEach(t),nd=s(Hr,"."),Hr.forEach(t),sd=h(K),Zo=r(K,"LI",{});var Qr=i(Zo);ad=s(Qr,"A notebook showing how to fine-tune LED, can be accessed "),Yo=r(Qr,"A",{href:!0,rel:!0});var Sp=i(Yo);rd=s(Sp,"here"),Sp.forEach(t),id=s(Qr,"."),Qr.forEach(t),dd=h(K),ea=r(K,"LI",{});var Mp=i(ea);ld=s(Mp,`LED is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Mp.forEach(t),K.forEach(t),mr=h(o),so=r(o,"P",{});var Wr=i(so);cd=s(Wr,"This model was contributed by "),en=r(Wr,"A",{href:!0,rel:!0});var Op=i(en);hd=s(Op,"patrickvonplaten"),Op.forEach(t),pd=s(Wr,"."),Wr.forEach(t),fr=h(o),Ft=r(o,"H2",{class:!0});var Ur=i(Ft);ao=r(Ur,"A",{id:!0,class:!0,href:!0});var Cp=i(ao);ta=r(Cp,"SPAN",{});var jp=i(ta);w(tn.$$.fragment,jp),jp.forEach(t),Cp.forEach(t),ud=h(Ur),oa=r(Ur,"SPAN",{});var Pp=i(oa);md=s(Pp,"LEDConfig"),Pp.forEach(t),Ur.forEach(t),gr=h(o),Oe=r(o,"DIV",{class:!0});var Qo=i(Oe);w(on.$$.fragment,Qo),fd=h(Qo),xt=r(Qo,"P",{});var js=i(xt);gd=s(js,"This is the configuration class to store the configuration of a "),gs=r(js,"A",{href:!0});var Np=i(gs);_d=s(Np,"LEDModel"),Np.forEach(t),bd=s(js,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),nn=r(js,"A",{href:!0,rel:!0});var Ap=i(nn);kd=s(Ap,"allenai/led-base-16384"),Ap.forEach(t),Td=s(js," architecture."),js.forEach(t),wd=h(Qo),St=r(Qo,"P",{});var Ps=i(St);yd=s(Ps,"Configuration objects inherit from "),_s=r(Ps,"A",{href:!0});var Ip=i(_s);vd=s(Ip,"PretrainedConfig"),Ip.forEach(t),Ed=s(Ps,` and can be used to control the model outputs. Read the
documentation from `),bs=r(Ps,"A",{href:!0});var Gp=i(bs);qd=s(Gp,"PretrainedConfig"),Gp.forEach(t),Ld=s(Ps," for more information."),Ps.forEach(t),$d=h(Qo),w(ro.$$.fragment,Qo),Qo.forEach(t),_r=h(o),Mt=r(o,"H2",{class:!0});var Rr=i(Mt);io=r(Rr,"A",{id:!0,class:!0,href:!0});var Bp=i(io);na=r(Bp,"SPAN",{});var Hp=i(na);w(sn.$$.fragment,Hp),Hp.forEach(t),Bp.forEach(t),Dd=h(Rr),sa=r(Rr,"SPAN",{});var Qp=i(sa);zd=s(Qp,"LEDTokenizer"),Qp.forEach(t),Rr.forEach(t),br=h(o),C=r(o,"DIV",{class:!0});var N=i(C);w(an.$$.fragment,N),Fd=h(N),aa=r(N,"P",{});var Wp=i(aa);xd=s(Wp,"Constructs a LED tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),Wp.forEach(t),Sd=h(N),ra=r(N,"P",{});var Up=i(ra);Md=s(Up,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Up.forEach(t),Od=h(N),w(lo.$$.fragment,N),Cd=h(N),rn=r(N,"P",{});var Vr=i(rn);jd=s(Vr,"You can get around that behavior by passing "),ia=r(Vr,"CODE",{});var Rp=i(ia);Pd=s(Rp,"add_prefix_space=True"),Rp.forEach(t),Nd=s(Vr,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Vr.forEach(t),Ad=h(N),w(co.$$.fragment,N),Id=h(N),dn=r(N,"P",{});var Kr=i(dn);Gd=s(Kr,"This tokenizer inherits from "),ks=r(Kr,"A",{href:!0});var Vp=i(ks);Bd=s(Vp,"PreTrainedTokenizer"),Vp.forEach(t),Hd=s(Kr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Kr.forEach(t),Qd=h(N),mt=r(N,"DIV",{class:!0});var Ns=i(mt);w(ln.$$.fragment,Ns),Wd=h(Ns),da=r(Ns,"P",{});var Kp=i(da);Ud=s(Kp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LED sequence has the following format:`),Kp.forEach(t),Rd=h(Ns),cn=r(Ns,"UL",{});var Xr=i(cn);Ts=r(Xr,"LI",{});var mp=i(Ts);Vd=s(mp,"single sequence: "),la=r(mp,"CODE",{});var Xp=i(la);Kd=s(Xp,"<s> X </s>"),Xp.forEach(t),mp.forEach(t),Xd=h(Xr),ws=r(Xr,"LI",{});var fp=i(ws);Jd=s(fp,"pair of sequences: "),ca=r(fp,"CODE",{});var Jp=i(ca);Zd=s(Jp,"<s> A </s></s> B </s>"),Jp.forEach(t),fp.forEach(t),Xr.forEach(t),Ns.forEach(t),Yd=h(N),ho=r(N,"DIV",{class:!0});var Jr=i(ho);w(hn.$$.fragment,Jr),el=h(Jr),pn=r(Jr,"P",{});var Zr=i(pn);tl=s(Zr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ha=r(Zr,"CODE",{});var Zp=i(ha);ol=s(Zp,"prepare_for_model"),Zp.forEach(t),nl=s(Zr," method."),Zr.forEach(t),Jr.forEach(t),sl=h(N),po=r(N,"DIV",{class:!0});var Yr=i(po);w(un.$$.fragment,Yr),al=h(Yr),pa=r(Yr,"P",{});var Yp=i(pa);rl=s(Yp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),Yp.forEach(t),Yr.forEach(t),il=h(N),ys=r(N,"DIV",{class:!0});var eu=i(ys);w(mn.$$.fragment,eu),eu.forEach(t),N.forEach(t),kr=h(o),Ot=r(o,"H2",{class:!0});var ei=i(Ot);uo=r(ei,"A",{id:!0,class:!0,href:!0});var tu=i(uo);ua=r(tu,"SPAN",{});var ou=i(ua);w(fn.$$.fragment,ou),ou.forEach(t),tu.forEach(t),dl=h(ei),ma=r(ei,"SPAN",{});var nu=i(ma);ll=s(nu,"LEDTokenizerFast"),nu.forEach(t),ei.forEach(t),Tr=h(o),H=r(o,"DIV",{class:!0});var re=i(H);w(gn.$$.fragment,re),cl=h(re),_n=r(re,"P",{});var ti=i(_n);hl=s(ti,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),fa=r(ti,"EM",{});var su=i(fa);pl=s(su,"tokenizers"),su.forEach(t),ul=s(ti,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),ti.forEach(t),ml=h(re),ga=r(re,"P",{});var au=i(ga);fl=s(au,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),au.forEach(t),gl=h(re),w(mo.$$.fragment,re),_l=h(re),bn=r(re,"P",{});var oi=i(bn);bl=s(oi,"You can get around that behavior by passing "),_a=r(oi,"CODE",{});var ru=i(_a);kl=s(ru,"add_prefix_space=True"),ru.forEach(t),Tl=s(oi,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),oi.forEach(t),wl=h(re),w(fo.$$.fragment,re),yl=h(re),kn=r(re,"P",{});var ni=i(kn);vl=s(ni,"This tokenizer inherits from "),vs=r(ni,"A",{href:!0});var iu=i(vs);El=s(iu,"PreTrainedTokenizerFast"),iu.forEach(t),ql=s(ni,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ni.forEach(t),Ll=h(re),go=r(re,"DIV",{class:!0});var si=i(go);w(Tn.$$.fragment,si),$l=h(si),ba=r(si,"P",{});var du=i(ba);Dl=s(du,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),du.forEach(t),si.forEach(t),re.forEach(t),wr=h(o),Ct=r(o,"H2",{class:!0});var ai=i(Ct);_o=r(ai,"A",{id:!0,class:!0,href:!0});var lu=i(_o);ka=r(lu,"SPAN",{});var cu=i(ka);w(wn.$$.fragment,cu),cu.forEach(t),lu.forEach(t),zl=h(ai),Ta=r(ai,"SPAN",{});var hu=i(Ta);Fl=s(hu,"LED specific outputs"),hu.forEach(t),ai.forEach(t),yr=h(o),jt=r(o,"DIV",{class:!0});var ri=i(jt);w(yn.$$.fragment,ri),xl=h(ri),wa=r(ri,"P",{});var pu=i(wa);Sl=s(pu,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),pu.forEach(t),ri.forEach(t),vr=h(o),Pt=r(o,"DIV",{class:!0});var ii=i(Pt);w(vn.$$.fragment,ii),Ml=h(ii),ya=r(ii,"P",{});var uu=i(ya);Ol=s(uu,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),uu.forEach(t),ii.forEach(t),Er=h(o),Nt=r(o,"DIV",{class:!0});var di=i(Nt);w(En.$$.fragment,di),Cl=h(di),va=r(di,"P",{});var mu=i(va);jl=s(mu,"Base class for sequence-to-sequence language models outputs."),mu.forEach(t),di.forEach(t),qr=h(o),At=r(o,"DIV",{class:!0});var li=i(At);w(qn.$$.fragment,li),Pl=h(li),Ea=r(li,"P",{});var fu=i(Ea);Nl=s(fu,"Base class for outputs of sequence-to-sequence sentence classification models."),fu.forEach(t),li.forEach(t),Lr=h(o),It=r(o,"DIV",{class:!0});var ci=i(It);w(Ln.$$.fragment,ci),Al=h(ci),qa=r(ci,"P",{});var gu=i(qa);Il=s(gu,"Base class for outputs of sequence-to-sequence question answering models."),gu.forEach(t),ci.forEach(t),$r=h(o),Gt=r(o,"DIV",{class:!0});var hi=i(Gt);w($n.$$.fragment,hi),Gl=h(hi),La=r(hi,"P",{});var _u=i(La);Bl=s(_u,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),_u.forEach(t),hi.forEach(t),Dr=h(o),Bt=r(o,"DIV",{class:!0});var pi=i(Bt);w(Dn.$$.fragment,pi),Hl=h(pi),$a=r(pi,"P",{});var bu=i($a);Ql=s(bu,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),bu.forEach(t),pi.forEach(t),zr=h(o),Ht=r(o,"DIV",{class:!0});var ui=i(Ht);w(zn.$$.fragment,ui),Wl=h(ui),Da=r(ui,"P",{});var ku=i(Da);Ul=s(ku,"Base class for sequence-to-sequence language models outputs."),ku.forEach(t),ui.forEach(t),Fr=h(o),Qt=r(o,"H2",{class:!0});var mi=i(Qt);bo=r(mi,"A",{id:!0,class:!0,href:!0});var Tu=i(bo);za=r(Tu,"SPAN",{});var wu=i(za);w(Fn.$$.fragment,wu),wu.forEach(t),Tu.forEach(t),Rl=h(mi),Fa=r(mi,"SPAN",{});var yu=i(Fa);Vl=s(yu,"LEDModel"),yu.forEach(t),mi.forEach(t),xr=h(o),Ce=r(o,"DIV",{class:!0});var Wo=i(Ce);w(xn.$$.fragment,Wo),Kl=h(Wo),Sn=r(Wo,"P",{});var fi=i(Sn);Xl=s(fi,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Es=r(fi,"A",{href:!0});var vu=i(Es);Jl=s(vu,"PreTrainedModel"),vu.forEach(t),Zl=s(fi,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),fi.forEach(t),Yl=h(Wo),Mn=r(Wo,"P",{});var gi=i(Mn);ec=s(gi,"This model is also a PyTorch "),On=r(gi,"A",{href:!0,rel:!0});var Eu=i(On);tc=s(Eu,"torch.nn.Module"),Eu.forEach(t),oc=s(gi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),gi.forEach(t),nc=h(Wo),Be=r(Wo,"DIV",{class:!0});var Uo=i(Be);w(Cn.$$.fragment,Uo),sc=h(Uo),Wt=r(Uo,"P",{});var As=i(Wt);ac=s(As,"The "),qs=r(As,"A",{href:!0});var qu=i(qs);rc=s(qu,"LEDModel"),qu.forEach(t),ic=s(As," forward method, overrides the "),xa=r(As,"CODE",{});var Lu=i(xa);dc=s(Lu,"__call__"),Lu.forEach(t),lc=s(As," special method."),As.forEach(t),cc=h(Uo),w(ko.$$.fragment,Uo),hc=h(Uo),w(To.$$.fragment,Uo),Uo.forEach(t),Wo.forEach(t),Sr=h(o),Ut=r(o,"H2",{class:!0});var _i=i(Ut);wo=r(_i,"A",{id:!0,class:!0,href:!0});var $u=i(wo);Sa=r($u,"SPAN",{});var Du=i(Sa);w(jn.$$.fragment,Du),Du.forEach(t),$u.forEach(t),pc=h(_i),Ma=r(_i,"SPAN",{});var zu=i(Ma);uc=s(zu,"LEDForConditionalGeneration"),zu.forEach(t),_i.forEach(t),Mr=h(o),je=r(o,"DIV",{class:!0});var Ro=i(je);w(Pn.$$.fragment,Ro),mc=h(Ro),Nn=r(Ro,"P",{});var bi=i(Nn);fc=s(bi,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ls=r(bi,"A",{href:!0});var Fu=i(Ls);gc=s(Fu,"PreTrainedModel"),Fu.forEach(t),_c=s(bi,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),bi.forEach(t),bc=h(Ro),An=r(Ro,"P",{});var ki=i(An);kc=s(ki,"This model is also a PyTorch "),In=r(ki,"A",{href:!0,rel:!0});var xu=i(In);Tc=s(xu,"torch.nn.Module"),xu.forEach(t),wc=s(ki,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),ki.forEach(t),yc=h(Ro),ve=r(Ro,"DIV",{class:!0});var gt=i(ve);w(Gn.$$.fragment,gt),vc=h(gt),Rt=r(gt,"P",{});var Is=i(Rt);Ec=s(Is,"The "),$s=r(Is,"A",{href:!0});var Su=i($s);qc=s(Su,"LEDForConditionalGeneration"),Su.forEach(t),Lc=s(Is," forward method, overrides the "),Oa=r(Is,"CODE",{});var Mu=i(Oa);$c=s(Mu,"__call__"),Mu.forEach(t),Dc=s(Is," special method."),Is.forEach(t),zc=h(gt),w(yo.$$.fragment,gt),Fc=h(gt),w(vo.$$.fragment,gt),xc=h(gt),w(Eo.$$.fragment,gt),gt.forEach(t),Ro.forEach(t),Or=h(o),Vt=r(o,"H2",{class:!0});var Ti=i(Vt);qo=r(Ti,"A",{id:!0,class:!0,href:!0});var Ou=i(qo);Ca=r(Ou,"SPAN",{});var Cu=i(Ca);w(Bn.$$.fragment,Cu),Cu.forEach(t),Ou.forEach(t),Sc=h(Ti),ja=r(Ti,"SPAN",{});var ju=i(ja);Mc=s(ju,"LEDForSequenceClassification"),ju.forEach(t),Ti.forEach(t),Cr=h(o),me=r(o,"DIV",{class:!0});var _t=i(me);w(Hn.$$.fragment,_t),Oc=h(_t),Pa=r(_t,"P",{});var Pu=i(Pa);Cc=s(Pu,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Pu.forEach(t),jc=h(_t),Qn=r(_t,"P",{});var wi=i(Qn);Pc=s(wi,"This model inherits from "),Ds=r(wi,"A",{href:!0});var Nu=i(Ds);Nc=s(Nu,"PreTrainedModel"),Nu.forEach(t),Ac=s(wi,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),wi.forEach(t),Ic=h(_t),Wn=r(_t,"P",{});var yi=i(Wn);Gc=s(yi,"This model is also a PyTorch "),Un=r(yi,"A",{href:!0,rel:!0});var Au=i(Un);Bc=s(Au,"torch.nn.Module"),Au.forEach(t),Hc=s(yi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),yi.forEach(t),Qc=h(_t),Z=r(_t,"DIV",{class:!0});var Le=i(Z);w(Rn.$$.fragment,Le),Wc=h(Le),Kt=r(Le,"P",{});var Gs=i(Kt);Uc=s(Gs,"The "),zs=r(Gs,"A",{href:!0});var Iu=i(zs);Rc=s(Iu,"LEDForSequenceClassification"),Iu.forEach(t),Vc=s(Gs," forward method, overrides the "),Na=r(Gs,"CODE",{});var Gu=i(Na);Kc=s(Gu,"__call__"),Gu.forEach(t),Xc=s(Gs," special method."),Gs.forEach(t),Jc=h(Le),w(Lo.$$.fragment,Le),Zc=h(Le),w($o.$$.fragment,Le),Yc=h(Le),w(Do.$$.fragment,Le),eh=h(Le),w(zo.$$.fragment,Le),th=h(Le),w(Fo.$$.fragment,Le),Le.forEach(t),_t.forEach(t),jr=h(o),Xt=r(o,"H2",{class:!0});var vi=i(Xt);xo=r(vi,"A",{id:!0,class:!0,href:!0});var Bu=i(xo);Aa=r(Bu,"SPAN",{});var Hu=i(Aa);w(Vn.$$.fragment,Hu),Hu.forEach(t),Bu.forEach(t),oh=h(vi),Ia=r(vi,"SPAN",{});var Qu=i(Ia);nh=s(Qu,"LEDForQuestionAnswering"),Qu.forEach(t),vi.forEach(t),Pr=h(o),fe=r(o,"DIV",{class:!0});var bt=i(fe);w(Kn.$$.fragment,bt),sh=h(bt),Jt=r(bt,"P",{});var Bs=i(Jt);ah=s(Bs,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ga=r(Bs,"CODE",{});var Wu=i(Ga);rh=s(Wu,"span start logits"),Wu.forEach(t),ih=s(Bs," and "),Ba=r(Bs,"CODE",{});var Uu=i(Ba);dh=s(Uu,"span end logits"),Uu.forEach(t),lh=s(Bs,")."),Bs.forEach(t),ch=h(bt),Xn=r(bt,"P",{});var Ei=i(Xn);hh=s(Ei,"This model inherits from "),Fs=r(Ei,"A",{href:!0});var Ru=i(Fs);ph=s(Ru,"PreTrainedModel"),Ru.forEach(t),uh=s(Ei,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Ei.forEach(t),mh=h(bt),Jn=r(bt,"P",{});var qi=i(Jn);fh=s(qi,"This model is also a PyTorch "),Zn=r(qi,"A",{href:!0,rel:!0});var Vu=i(Zn);gh=s(Vu,"torch.nn.Module"),Vu.forEach(t),_h=s(qi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),qi.forEach(t),bh=h(bt),Ee=r(bt,"DIV",{class:!0});var kt=i(Ee);w(Yn.$$.fragment,kt),kh=h(kt),Zt=r(kt,"P",{});var Hs=i(Zt);Th=s(Hs,"The "),xs=r(Hs,"A",{href:!0});var Ku=i(xs);wh=s(Ku,"LEDForQuestionAnswering"),Ku.forEach(t),yh=s(Hs," forward method, overrides the "),Ha=r(Hs,"CODE",{});var Xu=i(Ha);vh=s(Xu,"__call__"),Xu.forEach(t),Eh=s(Hs," special method."),Hs.forEach(t),qh=h(kt),w(So.$$.fragment,kt),Lh=h(kt),w(Mo.$$.fragment,kt),$h=h(kt),w(Oo.$$.fragment,kt),kt.forEach(t),bt.forEach(t),Nr=h(o),Yt=r(o,"H2",{class:!0});var Li=i(Yt);Co=r(Li,"A",{id:!0,class:!0,href:!0});var Ju=i(Co);Qa=r(Ju,"SPAN",{});var Zu=i(Qa);w(es.$$.fragment,Zu),Zu.forEach(t),Ju.forEach(t),Dh=h(Li),Wa=r(Li,"SPAN",{});var Yu=i(Wa);zh=s(Yu,"TFLEDModel"),Yu.forEach(t),Li.forEach(t),Ar=h(o),ge=r(o,"DIV",{class:!0});var Tt=i(ge);w(ts.$$.fragment,Tt),Fh=h(Tt),os=r(Tt,"P",{});var $i=i(os);xh=s($i,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=r($i,"A",{href:!0});var em=i(Ss);Sh=s(em,"TFPreTrainedModel"),em.forEach(t),Mh=s($i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$i.forEach(t),Oh=h(Tt),ns=r(Tt,"P",{});var Di=i(ns);Ch=s(Di,"This model is also a "),ss=r(Di,"A",{href:!0,rel:!0});var tm=i(ss);jh=s(tm,"tf.keras.Model"),tm.forEach(t),Ph=s(Di,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Di.forEach(t),Nh=h(Tt),w(jo.$$.fragment,Tt),Ah=h(Tt),He=r(Tt,"DIV",{class:!0});var Vo=i(He);w(as.$$.fragment,Vo),Ih=h(Vo),eo=r(Vo,"P",{});var Qs=i(eo);Gh=s(Qs,"The "),Ms=r(Qs,"A",{href:!0});var om=i(Ms);Bh=s(om,"TFLEDModel"),om.forEach(t),Hh=s(Qs," forward method, overrides the "),Ua=r(Qs,"CODE",{});var nm=i(Ua);Qh=s(nm,"__call__"),nm.forEach(t),Wh=s(Qs," special method."),Qs.forEach(t),Uh=h(Vo),w(Po.$$.fragment,Vo),Rh=h(Vo),w(No.$$.fragment,Vo),Vo.forEach(t),Tt.forEach(t),Ir=h(o),to=r(o,"H2",{class:!0});var zi=i(to);Ao=r(zi,"A",{id:!0,class:!0,href:!0});var sm=i(Ao);Ra=r(sm,"SPAN",{});var am=i(Ra);w(rs.$$.fragment,am),am.forEach(t),sm.forEach(t),Vh=h(zi),Va=r(zi,"SPAN",{});var rm=i(Va);Kh=s(rm,"TFLEDForConditionalGeneration"),rm.forEach(t),zi.forEach(t),Gr=h(o),_e=r(o,"DIV",{class:!0});var wt=i(_e);w(is.$$.fragment,wt),Xh=h(wt),ds=r(wt,"P",{});var Fi=i(ds);Jh=s(Fi,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Os=r(Fi,"A",{href:!0});var im=i(Os);Zh=s(im,"TFPreTrainedModel"),im.forEach(t),Yh=s(Fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fi.forEach(t),ep=h(wt),ls=r(wt,"P",{});var xi=i(ls);tp=s(xi,"This model is also a "),cs=r(xi,"A",{href:!0,rel:!0});var dm=i(cs);op=s(dm,"tf.keras.Model"),dm.forEach(t),np=s(xi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xi.forEach(t),sp=h(wt),w(Io.$$.fragment,wt),ap=h(wt),Qe=r(wt,"DIV",{class:!0});var Ko=i(Qe);w(hs.$$.fragment,Ko),rp=h(Ko),oo=r(Ko,"P",{});var Ws=i(oo);ip=s(Ws,"The "),Cs=r(Ws,"A",{href:!0});var lm=i(Cs);dp=s(lm,"TFLEDForConditionalGeneration"),lm.forEach(t),lp=s(Ws," forward method, overrides the "),Ka=r(Ws,"CODE",{});var cm=i(Ka);cp=s(cm,"__call__"),cm.forEach(t),hp=s(Ws," special method."),Ws.forEach(t),pp=h(Ko),w(Go.$$.fragment,Ko),up=h(Ko),w(Bo.$$.fragment,Ko),Ko.forEach(t),wt.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(Gm)),f(m,"id","led"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#led"),f(p,"class","relative group"),f(W,"id","overview"),f(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(W,"href","#overview"),f(P,"class","relative group"),f(de,"href","https://arxiv.org/abs/2004.05150"),f(de,"rel","nofollow"),f(ke,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),f(Te,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(we,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),f(ye,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),f(Ge,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),f(fs,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),f(Jo,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),f(Jo,"rel","nofollow"),f(Yo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),f(Yo,"rel","nofollow"),f(en,"href","https://huggingface.co/patrickvonplaten"),f(en,"rel","nofollow"),f(ao,"id","transformers.LEDConfig"),f(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ao,"href","#transformers.LEDConfig"),f(Ft,"class","relative group"),f(gs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),f(nn,"href","https://huggingface.co/allenai/led-base-16384"),f(nn,"rel","nofollow"),f(_s,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(bs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(io,"id","transformers.LEDTokenizer"),f(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(io,"href","#transformers.LEDTokenizer"),f(Mt,"class","relative group"),f(ks,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ys,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(uo,"id","transformers.LEDTokenizerFast"),f(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(uo,"href","#transformers.LEDTokenizerFast"),f(Ot,"class","relative group"),f(vs,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_o,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),f(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_o,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),f(Ct,"class","relative group"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bo,"id","transformers.LEDModel"),f(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bo,"href","#transformers.LEDModel"),f(Qt,"class","relative group"),f(Es,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(On,"rel","nofollow"),f(qs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wo,"id","transformers.LEDForConditionalGeneration"),f(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wo,"href","#transformers.LEDForConditionalGeneration"),f(Ut,"class","relative group"),f(Ls,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(In,"rel","nofollow"),f($s,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),f(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qo,"id","transformers.LEDForSequenceClassification"),f(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qo,"href","#transformers.LEDForSequenceClassification"),f(Vt,"class","relative group"),f(Ds,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Un,"rel","nofollow"),f(zs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xo,"id","transformers.LEDForQuestionAnswering"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#transformers.LEDForQuestionAnswering"),f(Xt,"class","relative group"),f(Fs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Zn,"rel","nofollow"),f(xs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.TFLEDModel"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.TFLEDModel"),f(Yt,"class","relative group"),f(Ss,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ss,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ss,"rel","nofollow"),f(Ms,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"id","transformers.TFLEDForConditionalGeneration"),f(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ao,"href","#transformers.TFLEDForConditionalGeneration"),f(to,"class","relative group"),f(Os,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(cs,"rel","nofollow"),f(Cs,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),_(o,b,g),_(o,p,g),e(p,m),e(m,k),y(d,k,null),e(p,u),e(p,D),e(D,ee),_(o,A,g),_(o,P,g),e(P,W),e(W,ie),y(z,ie,null),e(P,Ue),e(P,te),e(te,Re),_(o,Pe,g),_(o,Q,g),e(Q,Ve),e(Q,de),e(de,le),e(Q,Ke),_(o,Ne,g),_(o,X,g),e(X,Xe),_(o,Ae,g),_(o,J,g),e(J,Fe),e(Fe,Je),_(o,be,g),_(o,M,g),e(M,I),_(o,Ie,g),_(o,x,g),e(x,j),e(j,ke),e(ke,ce),e(j,Ze),e(j,Te),e(Te,G),e(j,Ye),e(j,oe),e(oe,et),e(j,tt),e(j,ne),e(ne,ot),e(j,nt),e(j,U),e(U,st),e(j,he),e(j,we),e(we,xe),e(j,B),e(j,ye),e(ye,R),e(j,at),e(x,rt),e(x,L),e(L,F),e(L,it),e(it,Se),e(L,vt),e(L,dt),e(dt,S),e(L,Et),e(x,qt),e(x,V),e(V,Lt),e(V,lt),e(lt,se),e(V,pe),e(V,ct),e(ct,$t),e(V,ue),e(V,Ge),e(Ge,Dt),e(V,ht),e(V,pt),e(pt,Me),e(V,zt),e(x,Si),e(x,ae),e(ae,Mi),e(ae,Us),e(Us,Oi),e(ae,Ci),e(ae,Rs),e(Rs,ji),e(ae,Pi),e(ae,fs),e(fs,Ni),e(ae,Ai),e(ae,Vs),e(Vs,Ii),e(ae,Gi),e(ae,Ks),e(Ks,Bi),e(ae,Hi),e(ae,Xs),e(Xs,Qi),e(ae,Wi),e(x,Ui),e(x,ut),e(ut,Ri),e(ut,Js),e(Js,Vi),e(ut,Ki),e(ut,Zs),e(Zs,Xi),e(ut,Ji),e(ut,Ys),e(Ys,Zi),e(ut,Yi),e(x,ed),e(x,Xo),e(Xo,td),e(Xo,Jo),e(Jo,od),e(Xo,nd),e(x,sd),e(x,Zo),e(Zo,ad),e(Zo,Yo),e(Yo,rd),e(Zo,id),e(x,dd),e(x,ea),e(ea,ld),_(o,mr,g),_(o,so,g),e(so,cd),e(so,en),e(en,hd),e(so,pd),_(o,fr,g),_(o,Ft,g),e(Ft,ao),e(ao,ta),y(tn,ta,null),e(Ft,ud),e(Ft,oa),e(oa,md),_(o,gr,g),_(o,Oe,g),y(on,Oe,null),e(Oe,fd),e(Oe,xt),e(xt,gd),e(xt,gs),e(gs,_d),e(xt,bd),e(xt,nn),e(nn,kd),e(xt,Td),e(Oe,wd),e(Oe,St),e(St,yd),e(St,_s),e(_s,vd),e(St,Ed),e(St,bs),e(bs,qd),e(St,Ld),e(Oe,$d),y(ro,Oe,null),_(o,_r,g),_(o,Mt,g),e(Mt,io),e(io,na),y(sn,na,null),e(Mt,Dd),e(Mt,sa),e(sa,zd),_(o,br,g),_(o,C,g),y(an,C,null),e(C,Fd),e(C,aa),e(aa,xd),e(C,Sd),e(C,ra),e(ra,Md),e(C,Od),y(lo,C,null),e(C,Cd),e(C,rn),e(rn,jd),e(rn,ia),e(ia,Pd),e(rn,Nd),e(C,Ad),y(co,C,null),e(C,Id),e(C,dn),e(dn,Gd),e(dn,ks),e(ks,Bd),e(dn,Hd),e(C,Qd),e(C,mt),y(ln,mt,null),e(mt,Wd),e(mt,da),e(da,Ud),e(mt,Rd),e(mt,cn),e(cn,Ts),e(Ts,Vd),e(Ts,la),e(la,Kd),e(cn,Xd),e(cn,ws),e(ws,Jd),e(ws,ca),e(ca,Zd),e(C,Yd),e(C,ho),y(hn,ho,null),e(ho,el),e(ho,pn),e(pn,tl),e(pn,ha),e(ha,ol),e(pn,nl),e(C,sl),e(C,po),y(un,po,null),e(po,al),e(po,pa),e(pa,rl),e(C,il),e(C,ys),y(mn,ys,null),_(o,kr,g),_(o,Ot,g),e(Ot,uo),e(uo,ua),y(fn,ua,null),e(Ot,dl),e(Ot,ma),e(ma,ll),_(o,Tr,g),_(o,H,g),y(gn,H,null),e(H,cl),e(H,_n),e(_n,hl),e(_n,fa),e(fa,pl),e(_n,ul),e(H,ml),e(H,ga),e(ga,fl),e(H,gl),y(mo,H,null),e(H,_l),e(H,bn),e(bn,bl),e(bn,_a),e(_a,kl),e(bn,Tl),e(H,wl),y(fo,H,null),e(H,yl),e(H,kn),e(kn,vl),e(kn,vs),e(vs,El),e(kn,ql),e(H,Ll),e(H,go),y(Tn,go,null),e(go,$l),e(go,ba),e(ba,Dl),_(o,wr,g),_(o,Ct,g),e(Ct,_o),e(_o,ka),y(wn,ka,null),e(Ct,zl),e(Ct,Ta),e(Ta,Fl),_(o,yr,g),_(o,jt,g),y(yn,jt,null),e(jt,xl),e(jt,wa),e(wa,Sl),_(o,vr,g),_(o,Pt,g),y(vn,Pt,null),e(Pt,Ml),e(Pt,ya),e(ya,Ol),_(o,Er,g),_(o,Nt,g),y(En,Nt,null),e(Nt,Cl),e(Nt,va),e(va,jl),_(o,qr,g),_(o,At,g),y(qn,At,null),e(At,Pl),e(At,Ea),e(Ea,Nl),_(o,Lr,g),_(o,It,g),y(Ln,It,null),e(It,Al),e(It,qa),e(qa,Il),_(o,$r,g),_(o,Gt,g),y($n,Gt,null),e(Gt,Gl),e(Gt,La),e(La,Bl),_(o,Dr,g),_(o,Bt,g),y(Dn,Bt,null),e(Bt,Hl),e(Bt,$a),e($a,Ql),_(o,zr,g),_(o,Ht,g),y(zn,Ht,null),e(Ht,Wl),e(Ht,Da),e(Da,Ul),_(o,Fr,g),_(o,Qt,g),e(Qt,bo),e(bo,za),y(Fn,za,null),e(Qt,Rl),e(Qt,Fa),e(Fa,Vl),_(o,xr,g),_(o,Ce,g),y(xn,Ce,null),e(Ce,Kl),e(Ce,Sn),e(Sn,Xl),e(Sn,Es),e(Es,Jl),e(Sn,Zl),e(Ce,Yl),e(Ce,Mn),e(Mn,ec),e(Mn,On),e(On,tc),e(Mn,oc),e(Ce,nc),e(Ce,Be),y(Cn,Be,null),e(Be,sc),e(Be,Wt),e(Wt,ac),e(Wt,qs),e(qs,rc),e(Wt,ic),e(Wt,xa),e(xa,dc),e(Wt,lc),e(Be,cc),y(ko,Be,null),e(Be,hc),y(To,Be,null),_(o,Sr,g),_(o,Ut,g),e(Ut,wo),e(wo,Sa),y(jn,Sa,null),e(Ut,pc),e(Ut,Ma),e(Ma,uc),_(o,Mr,g),_(o,je,g),y(Pn,je,null),e(je,mc),e(je,Nn),e(Nn,fc),e(Nn,Ls),e(Ls,gc),e(Nn,_c),e(je,bc),e(je,An),e(An,kc),e(An,In),e(In,Tc),e(An,wc),e(je,yc),e(je,ve),y(Gn,ve,null),e(ve,vc),e(ve,Rt),e(Rt,Ec),e(Rt,$s),e($s,qc),e(Rt,Lc),e(Rt,Oa),e(Oa,$c),e(Rt,Dc),e(ve,zc),y(yo,ve,null),e(ve,Fc),y(vo,ve,null),e(ve,xc),y(Eo,ve,null),_(o,Or,g),_(o,Vt,g),e(Vt,qo),e(qo,Ca),y(Bn,Ca,null),e(Vt,Sc),e(Vt,ja),e(ja,Mc),_(o,Cr,g),_(o,me,g),y(Hn,me,null),e(me,Oc),e(me,Pa),e(Pa,Cc),e(me,jc),e(me,Qn),e(Qn,Pc),e(Qn,Ds),e(Ds,Nc),e(Qn,Ac),e(me,Ic),e(me,Wn),e(Wn,Gc),e(Wn,Un),e(Un,Bc),e(Wn,Hc),e(me,Qc),e(me,Z),y(Rn,Z,null),e(Z,Wc),e(Z,Kt),e(Kt,Uc),e(Kt,zs),e(zs,Rc),e(Kt,Vc),e(Kt,Na),e(Na,Kc),e(Kt,Xc),e(Z,Jc),y(Lo,Z,null),e(Z,Zc),y($o,Z,null),e(Z,Yc),y(Do,Z,null),e(Z,eh),y(zo,Z,null),e(Z,th),y(Fo,Z,null),_(o,jr,g),_(o,Xt,g),e(Xt,xo),e(xo,Aa),y(Vn,Aa,null),e(Xt,oh),e(Xt,Ia),e(Ia,nh),_(o,Pr,g),_(o,fe,g),y(Kn,fe,null),e(fe,sh),e(fe,Jt),e(Jt,ah),e(Jt,Ga),e(Ga,rh),e(Jt,ih),e(Jt,Ba),e(Ba,dh),e(Jt,lh),e(fe,ch),e(fe,Xn),e(Xn,hh),e(Xn,Fs),e(Fs,ph),e(Xn,uh),e(fe,mh),e(fe,Jn),e(Jn,fh),e(Jn,Zn),e(Zn,gh),e(Jn,_h),e(fe,bh),e(fe,Ee),y(Yn,Ee,null),e(Ee,kh),e(Ee,Zt),e(Zt,Th),e(Zt,xs),e(xs,wh),e(Zt,yh),e(Zt,Ha),e(Ha,vh),e(Zt,Eh),e(Ee,qh),y(So,Ee,null),e(Ee,Lh),y(Mo,Ee,null),e(Ee,$h),y(Oo,Ee,null),_(o,Nr,g),_(o,Yt,g),e(Yt,Co),e(Co,Qa),y(es,Qa,null),e(Yt,Dh),e(Yt,Wa),e(Wa,zh),_(o,Ar,g),_(o,ge,g),y(ts,ge,null),e(ge,Fh),e(ge,os),e(os,xh),e(os,Ss),e(Ss,Sh),e(os,Mh),e(ge,Oh),e(ge,ns),e(ns,Ch),e(ns,ss),e(ss,jh),e(ns,Ph),e(ge,Nh),y(jo,ge,null),e(ge,Ah),e(ge,He),y(as,He,null),e(He,Ih),e(He,eo),e(eo,Gh),e(eo,Ms),e(Ms,Bh),e(eo,Hh),e(eo,Ua),e(Ua,Qh),e(eo,Wh),e(He,Uh),y(Po,He,null),e(He,Rh),y(No,He,null),_(o,Ir,g),_(o,to,g),e(to,Ao),e(Ao,Ra),y(rs,Ra,null),e(to,Vh),e(to,Va),e(Va,Kh),_(o,Gr,g),_(o,_e,g),y(is,_e,null),e(_e,Xh),e(_e,ds),e(ds,Jh),e(ds,Os),e(Os,Zh),e(ds,Yh),e(_e,ep),e(_e,ls),e(ls,tp),e(ls,cs),e(cs,op),e(ls,np),e(_e,sp),y(Io,_e,null),e(_e,ap),e(_e,Qe),y(hs,Qe,null),e(Qe,rp),e(Qe,oo),e(oo,ip),e(oo,Cs),e(Cs,dp),e(oo,lp),e(oo,Ka),e(Ka,cp),e(oo,hp),e(Qe,pp),y(Go,Qe,null),e(Qe,up),y(Bo,Qe,null),Br=!0},p(o,[g]){const ps={};g&2&&(ps.$$scope={dirty:g,ctx:o}),ro.$set(ps);const Xa={};g&2&&(Xa.$$scope={dirty:g,ctx:o}),lo.$set(Xa);const Ja={};g&2&&(Ja.$$scope={dirty:g,ctx:o}),co.$set(Ja);const Za={};g&2&&(Za.$$scope={dirty:g,ctx:o}),mo.$set(Za);const us={};g&2&&(us.$$scope={dirty:g,ctx:o}),fo.$set(us);const Ya={};g&2&&(Ya.$$scope={dirty:g,ctx:o}),ko.$set(Ya);const er={};g&2&&(er.$$scope={dirty:g,ctx:o}),To.$set(er);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:o}),yo.$set(tr);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:o}),vo.$set(ms);const or={};g&2&&(or.$$scope={dirty:g,ctx:o}),Eo.$set(or);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:o}),Lo.$set(nr);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:o}),$o.$set(sr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:o}),Do.$set(ar);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:o}),zo.$set(rr);const K={};g&2&&(K.$$scope={dirty:g,ctx:o}),Fo.$set(K);const Y={};g&2&&(Y.$$scope={dirty:g,ctx:o}),So.$set(Y);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:o}),Mo.$set(ir);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:o}),Oo.$set(dr);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:o}),jo.$set(lr);const cr={};g&2&&(cr.$$scope={dirty:g,ctx:o}),Po.$set(cr);const hr={};g&2&&(hr.$$scope={dirty:g,ctx:o}),No.$set(hr);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:o}),Io.$set(pr);const ur={};g&2&&(ur.$$scope={dirty:g,ctx:o}),Go.$set(ur);const no={};g&2&&(no.$$scope={dirty:g,ctx:o}),Bo.$set(no)},i(o){Br||(v(d.$$.fragment,o),v(z.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(ro.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(lo.$$.fragment,o),v(co.$$.fragment,o),v(ln.$$.fragment,o),v(hn.$$.fragment,o),v(un.$$.fragment,o),v(mn.$$.fragment,o),v(fn.$$.fragment,o),v(gn.$$.fragment,o),v(mo.$$.fragment,o),v(fo.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(vn.$$.fragment,o),v(En.$$.fragment,o),v(qn.$$.fragment,o),v(Ln.$$.fragment,o),v($n.$$.fragment,o),v(Dn.$$.fragment,o),v(zn.$$.fragment,o),v(Fn.$$.fragment,o),v(xn.$$.fragment,o),v(Cn.$$.fragment,o),v(ko.$$.fragment,o),v(To.$$.fragment,o),v(jn.$$.fragment,o),v(Pn.$$.fragment,o),v(Gn.$$.fragment,o),v(yo.$$.fragment,o),v(vo.$$.fragment,o),v(Eo.$$.fragment,o),v(Bn.$$.fragment,o),v(Hn.$$.fragment,o),v(Rn.$$.fragment,o),v(Lo.$$.fragment,o),v($o.$$.fragment,o),v(Do.$$.fragment,o),v(zo.$$.fragment,o),v(Fo.$$.fragment,o),v(Vn.$$.fragment,o),v(Kn.$$.fragment,o),v(Yn.$$.fragment,o),v(So.$$.fragment,o),v(Mo.$$.fragment,o),v(Oo.$$.fragment,o),v(es.$$.fragment,o),v(ts.$$.fragment,o),v(jo.$$.fragment,o),v(as.$$.fragment,o),v(Po.$$.fragment,o),v(No.$$.fragment,o),v(rs.$$.fragment,o),v(is.$$.fragment,o),v(Io.$$.fragment,o),v(hs.$$.fragment,o),v(Go.$$.fragment,o),v(Bo.$$.fragment,o),Br=!0)},o(o){E(d.$$.fragment,o),E(z.$$.fragment,o),E(tn.$$.fragment,o),E(on.$$.fragment,o),E(ro.$$.fragment,o),E(sn.$$.fragment,o),E(an.$$.fragment,o),E(lo.$$.fragment,o),E(co.$$.fragment,o),E(ln.$$.fragment,o),E(hn.$$.fragment,o),E(un.$$.fragment,o),E(mn.$$.fragment,o),E(fn.$$.fragment,o),E(gn.$$.fragment,o),E(mo.$$.fragment,o),E(fo.$$.fragment,o),E(Tn.$$.fragment,o),E(wn.$$.fragment,o),E(yn.$$.fragment,o),E(vn.$$.fragment,o),E(En.$$.fragment,o),E(qn.$$.fragment,o),E(Ln.$$.fragment,o),E($n.$$.fragment,o),E(Dn.$$.fragment,o),E(zn.$$.fragment,o),E(Fn.$$.fragment,o),E(xn.$$.fragment,o),E(Cn.$$.fragment,o),E(ko.$$.fragment,o),E(To.$$.fragment,o),E(jn.$$.fragment,o),E(Pn.$$.fragment,o),E(Gn.$$.fragment,o),E(yo.$$.fragment,o),E(vo.$$.fragment,o),E(Eo.$$.fragment,o),E(Bn.$$.fragment,o),E(Hn.$$.fragment,o),E(Rn.$$.fragment,o),E(Lo.$$.fragment,o),E($o.$$.fragment,o),E(Do.$$.fragment,o),E(zo.$$.fragment,o),E(Fo.$$.fragment,o),E(Vn.$$.fragment,o),E(Kn.$$.fragment,o),E(Yn.$$.fragment,o),E(So.$$.fragment,o),E(Mo.$$.fragment,o),E(Oo.$$.fragment,o),E(es.$$.fragment,o),E(ts.$$.fragment,o),E(jo.$$.fragment,o),E(as.$$.fragment,o),E(Po.$$.fragment,o),E(No.$$.fragment,o),E(rs.$$.fragment,o),E(is.$$.fragment,o),E(Io.$$.fragment,o),E(hs.$$.fragment,o),E(Go.$$.fragment,o),E(Bo.$$.fragment,o),Br=!1},d(o){t(l),o&&t(b),o&&t(p),q(d),o&&t(A),o&&t(P),q(z),o&&t(Pe),o&&t(Q),o&&t(Ne),o&&t(X),o&&t(Ae),o&&t(J),o&&t(be),o&&t(M),o&&t(Ie),o&&t(x),o&&t(mr),o&&t(so),o&&t(fr),o&&t(Ft),q(tn),o&&t(gr),o&&t(Oe),q(on),q(ro),o&&t(_r),o&&t(Mt),q(sn),o&&t(br),o&&t(C),q(an),q(lo),q(co),q(ln),q(hn),q(un),q(mn),o&&t(kr),o&&t(Ot),q(fn),o&&t(Tr),o&&t(H),q(gn),q(mo),q(fo),q(Tn),o&&t(wr),o&&t(Ct),q(wn),o&&t(yr),o&&t(jt),q(yn),o&&t(vr),o&&t(Pt),q(vn),o&&t(Er),o&&t(Nt),q(En),o&&t(qr),o&&t(At),q(qn),o&&t(Lr),o&&t(It),q(Ln),o&&t($r),o&&t(Gt),q($n),o&&t(Dr),o&&t(Bt),q(Dn),o&&t(zr),o&&t(Ht),q(zn),o&&t(Fr),o&&t(Qt),q(Fn),o&&t(xr),o&&t(Ce),q(xn),q(Cn),q(ko),q(To),o&&t(Sr),o&&t(Ut),q(jn),o&&t(Mr),o&&t(je),q(Pn),q(Gn),q(yo),q(vo),q(Eo),o&&t(Or),o&&t(Vt),q(Bn),o&&t(Cr),o&&t(me),q(Hn),q(Rn),q(Lo),q($o),q(Do),q(zo),q(Fo),o&&t(jr),o&&t(Xt),q(Vn),o&&t(Pr),o&&t(fe),q(Kn),q(Yn),q(So),q(Mo),q(Oo),o&&t(Nr),o&&t(Yt),q(es),o&&t(Ar),o&&t(ge),q(ts),q(jo),q(as),q(Po),q(No),o&&t(Ir),o&&t(to),q(rs),o&&t(Gr),o&&t(_e),q(is),q(Io),q(hs),q(Go),q(Bo)}}}const Gm={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Bm($){return fm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Km extends hm{constructor(l){super();pm(this,l,Bm,Im,um,{})}}export{Km as default,Gm as metadata};
