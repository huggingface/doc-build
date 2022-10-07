import{S as im,i as dm,s as lm,e as a,k as c,w as T,t as n,M as cm,c as r,d as t,m as h,a as i,x as w,h as s,b as f,G as e,g as _,y,q as v,o as E,B as q,v as hm,L as De}from"../../chunks/vendor-hf-doc-builder.js";import{T as yt}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ze}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Le}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function pm(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDModel, LEDConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function um(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer
tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),b=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function mm(L){let l,b,p,m,k;return{c(){l=a("p"),b=n("When used with "),p=a("code"),m=n("is_split_into_words=True"),k=n(", this tokenizer will add a space before each word (even the first one).")},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"When used with "),p=r(u,"CODE",{});var D=i(p);m=s(D,"is_split_into_words=True"),D.forEach(t),k=s(u,", this tokenizer will add a space before each word (even the first one)."),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function fm(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizerFast
tokenizer = LEDTokenizerFast.from_pretrained("allenai/led-base-16384")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LEDTokenizerFast.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),b=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function gm(L){let l,b,p,m,k,d,u,D;return{c(){l=a("p"),b=n("When used with "),p=a("code"),m=n("is_split_into_words=True"),k=n(", this tokenizer needs to be instantiated with "),d=a("code"),u=n("add_prefix_space=True"),D=n(".")},l(Y){l=r(Y,"P",{});var A=i(l);b=s(A,"When used with "),p=r(A,"CODE",{});var P=i(p);m=s(P,"is_split_into_words=True"),P.forEach(t),k=s(A,", this tokenizer needs to be instantiated with "),d=r(A,"CODE",{});var W=i(d);u=s(W,"add_prefix_space=True"),W.forEach(t),D=s(A,"."),A.forEach(t)},m(Y,A){_(Y,l,A),e(l,b),e(l,p),e(p,m),e(l,k),e(l,d),e(d,u),e(l,D)},d(Y){Y&&t(l)}}}function _m(L){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function bm(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function km(L){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function Tm(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),b=n("Conditional generation example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Conditional generation example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function wm(L){let l,b,p,m,k;return m=new ze({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),{c(){l=a("p"),b=n("Summarization example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Summarization example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function ym(L){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function vm(L){let l,b,p,m,k;return m=new ze({props:{code:`import torch
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
`}}),{c(){l=a("p"),b=n("Example of single-label classification:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example of single-label classification:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Em(L){let l,b;return l=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(p){w(l.$$.fragment,p)},m(p,m){y(l,p,m),b=!0},p:De,i(p){b||(v(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){q(l,p)}}}function qm(L){let l,b,p,m,k;return m=new ze({props:{code:`import torch
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
`}}),{c(){l=a("p"),b=n("Example of multi-label classification:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example of multi-label classification:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function $m(L){let l,b;return l=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(p){w(l.$$.fragment,p)},m(p,m){y(l,p,m),b=!0},p:De,i(p){b||(v(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){q(l,p)}}}function Lm(L){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function Dm(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function zm(L){let l,b;return l=new ze({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(p){w(l.$$.fragment,p)},m(p,m){y(l,p,m),b=!0},p:De,i(p){b||(v(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){q(l,p)}}}function Fm(L){let l,b,p,m,k,d,u,D,Y,A,P,W,ie,z,Ue,ee,Re,Pe,Q,Ve,de,le,Ke,Ne,K,Xe,Ae,X,Fe,Je,be,M,I,Ie,x,j,ke,ce,Ze,Te,G,Ye,te,et,tt,oe,ot,nt,U,st,he,we,xe,B,ye,R,at,rt;return{c(){l=a("p"),b=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),k=n(" accept two formats as input:"),d=c(),u=a("ul"),D=a("li"),Y=n("having all inputs as keyword arguments (like PyTorch models), or"),A=c(),P=a("li"),W=n("having all inputs as a list, tuple or dict in the first positional argument."),ie=c(),z=a("p"),Ue=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=a("code"),Re=n("model.fit()"),Pe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Ve=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),le=a("code"),Ke=n("fit()"),Ne=n(" and "),K=a("code"),Xe=n("predict()"),Ae=n(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=n("Functional"),Je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),be=c(),M=a("ul"),I=a("li"),Ie=n("a single Tensor with "),x=a("code"),j=n("input_ids"),ke=n(" only and nothing else: "),ce=a("code"),Ze=n("model(input_ids)"),Te=c(),G=a("li"),Ye=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=a("code"),et=n("model([input_ids, attention_mask])"),tt=n(" or "),oe=a("code"),ot=n("model([input_ids, attention_mask, token_type_ids])"),nt=c(),U=a("li"),st=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe=c(),B=a("p"),ye=n(`Note that when creating models and layers with
`),R=a("a"),at=n("subclassing"),rt=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l($){l=r($,"P",{});var F=i(l);b=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var it=i(p);m=s(it,"transformers"),it.forEach(t),k=s(F," accept two formats as input:"),F.forEach(t),d=h($),u=r($,"UL",{});var Se=i(u);D=r(Se,"LI",{});var vt=i(D);Y=s(vt,"having all inputs as keyword arguments (like PyTorch models), or"),vt.forEach(t),A=h(Se),P=r(Se,"LI",{});var dt=i(P);W=s(dt,"having all inputs as a list, tuple or dict in the first positional argument."),dt.forEach(t),Se.forEach(t),ie=h($),z=r($,"P",{});var S=i(z);Ue=s(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=r(S,"CODE",{});var Et=i(ee);Re=s(Et,"model.fit()"),Et.forEach(t),Pe=s(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(S,"CODE",{});var qt=i(Q);Ve=s(qt,"model.fit()"),qt.forEach(t),de=s(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),le=r(S,"CODE",{});var V=i(le);Ke=s(V,"fit()"),V.forEach(t),Ne=s(S," and "),K=r(S,"CODE",{});var $t=i(K);Xe=s($t,"predict()"),$t.forEach(t),Ae=s(S,`, such as when creating your own layers or models with
the Keras `),X=r(S,"CODE",{});var lt=i(X);Fe=s(lt,"Functional"),lt.forEach(t),Je=s(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),be=h($),M=r($,"UL",{});var ne=i(M);I=r(ne,"LI",{});var pe=i(I);Ie=s(pe,"a single Tensor with "),x=r(pe,"CODE",{});var ct=i(x);j=s(ct,"input_ids"),ct.forEach(t),ke=s(pe," only and nothing else: "),ce=r(pe,"CODE",{});var Lt=i(ce);Ze=s(Lt,"model(input_ids)"),Lt.forEach(t),pe.forEach(t),Te=h(ne),G=r(ne,"LI",{});var ue=i(G);Ye=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=r(ue,"CODE",{});var Ge=i(te);et=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),tt=s(ue," or "),oe=r(ue,"CODE",{});var Dt=i(oe);ot=s(Dt,"model([input_ids, attention_mask, token_type_ids])"),Dt.forEach(t),ue.forEach(t),nt=h(ne),U=r(ne,"LI",{});var ht=i(U);st=s(ht,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=r(ht,"CODE",{});var pt=i(he);we=s(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),ht.forEach(t),ne.forEach(t),xe=h($),B=r($,"P",{});var Me=i(B);ye=s(Me,`Note that when creating models and layers with
`),R=r(Me,"A",{href:!0,rel:!0});var zt=i(R);at=s(zt,"subclassing"),zt.forEach(t),rt=s(Me,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Me.forEach(t),this.h()},h(){f(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(R,"rel","nofollow")},m($,F){_($,l,F),e(l,b),e(l,p),e(p,m),e(l,k),_($,d,F),_($,u,F),e(u,D),e(D,Y),e(u,A),e(u,P),e(P,W),_($,ie,F),_($,z,F),e(z,Ue),e(z,ee),e(ee,Re),e(z,Pe),e(z,Q),e(Q,Ve),e(z,de),e(z,le),e(le,Ke),e(z,Ne),e(z,K),e(K,Xe),e(z,Ae),e(z,X),e(X,Fe),e(z,Je),_($,be,F),_($,M,F),e(M,I),e(I,Ie),e(I,x),e(x,j),e(I,ke),e(I,ce),e(ce,Ze),e(M,Te),e(M,G),e(G,Ye),e(G,te),e(te,et),e(G,tt),e(G,oe),e(oe,ot),e(M,nt),e(M,U),e(U,st),e(U,he),e(he,we),_($,xe,F),_($,B,F),e(B,ye),e(B,R),e(R,at),e(B,rt)},d($){$&&t(l),$&&t(d),$&&t(u),$&&t(ie),$&&t(z),$&&t(be),$&&t(M),$&&t(xe),$&&t(B)}}}function xm(L){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function Sm(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=n("Example:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Example:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function Mm(L){let l,b,p,m,k,d,u,D,Y,A,P,W,ie,z,Ue,ee,Re,Pe,Q,Ve,de,le,Ke,Ne,K,Xe,Ae,X,Fe,Je,be,M,I,Ie,x,j,ke,ce,Ze,Te,G,Ye,te,et,tt,oe,ot,nt,U,st,he,we,xe,B,ye,R,at,rt;return{c(){l=a("p"),b=n("TensorFlow models and layers in "),p=a("code"),m=n("transformers"),k=n(" accept two formats as input:"),d=c(),u=a("ul"),D=a("li"),Y=n("having all inputs as keyword arguments (like PyTorch models), or"),A=c(),P=a("li"),W=n("having all inputs as a list, tuple or dict in the first positional argument."),ie=c(),z=a("p"),Ue=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=a("code"),Re=n("model.fit()"),Pe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Ve=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),le=a("code"),Ke=n("fit()"),Ne=n(" and "),K=a("code"),Xe=n("predict()"),Ae=n(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=n("Functional"),Je=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),be=c(),M=a("ul"),I=a("li"),Ie=n("a single Tensor with "),x=a("code"),j=n("input_ids"),ke=n(" only and nothing else: "),ce=a("code"),Ze=n("model(input_ids)"),Te=c(),G=a("li"),Ye=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=a("code"),et=n("model([input_ids, attention_mask])"),tt=n(" or "),oe=a("code"),ot=n("model([input_ids, attention_mask, token_type_ids])"),nt=c(),U=a("li"),st=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe=c(),B=a("p"),ye=n(`Note that when creating models and layers with
`),R=a("a"),at=n("subclassing"),rt=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l($){l=r($,"P",{});var F=i(l);b=s(F,"TensorFlow models and layers in "),p=r(F,"CODE",{});var it=i(p);m=s(it,"transformers"),it.forEach(t),k=s(F," accept two formats as input:"),F.forEach(t),d=h($),u=r($,"UL",{});var Se=i(u);D=r(Se,"LI",{});var vt=i(D);Y=s(vt,"having all inputs as keyword arguments (like PyTorch models), or"),vt.forEach(t),A=h(Se),P=r(Se,"LI",{});var dt=i(P);W=s(dt,"having all inputs as a list, tuple or dict in the first positional argument."),dt.forEach(t),Se.forEach(t),ie=h($),z=r($,"P",{});var S=i(z);Ue=s(S,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ee=r(S,"CODE",{});var Et=i(ee);Re=s(Et,"model.fit()"),Et.forEach(t),Pe=s(S,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(S,"CODE",{});var qt=i(Q);Ve=s(qt,"model.fit()"),qt.forEach(t),de=s(S,` supports! If, however, you want to use the second
format outside of Keras methods like `),le=r(S,"CODE",{});var V=i(le);Ke=s(V,"fit()"),V.forEach(t),Ne=s(S," and "),K=r(S,"CODE",{});var $t=i(K);Xe=s($t,"predict()"),$t.forEach(t),Ae=s(S,`, such as when creating your own layers or models with
the Keras `),X=r(S,"CODE",{});var lt=i(X);Fe=s(lt,"Functional"),lt.forEach(t),Je=s(S,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),S.forEach(t),be=h($),M=r($,"UL",{});var ne=i(M);I=r(ne,"LI",{});var pe=i(I);Ie=s(pe,"a single Tensor with "),x=r(pe,"CODE",{});var ct=i(x);j=s(ct,"input_ids"),ct.forEach(t),ke=s(pe," only and nothing else: "),ce=r(pe,"CODE",{});var Lt=i(ce);Ze=s(Lt,"model(input_ids)"),Lt.forEach(t),pe.forEach(t),Te=h(ne),G=r(ne,"LI",{});var ue=i(G);Ye=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=r(ue,"CODE",{});var Ge=i(te);et=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),tt=s(ue," or "),oe=r(ue,"CODE",{});var Dt=i(oe);ot=s(Dt,"model([input_ids, attention_mask, token_type_ids])"),Dt.forEach(t),ue.forEach(t),nt=h(ne),U=r(ne,"LI",{});var ht=i(U);st=s(ht,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=r(ht,"CODE",{});var pt=i(he);we=s(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),ht.forEach(t),ne.forEach(t),xe=h($),B=r($,"P",{});var Me=i(B);ye=s(Me,`Note that when creating models and layers with
`),R=r(Me,"A",{href:!0,rel:!0});var zt=i(R);at=s(zt,"subclassing"),zt.forEach(t),rt=s(Me,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Me.forEach(t),this.h()},h(){f(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(R,"rel","nofollow")},m($,F){_($,l,F),e(l,b),e(l,p),e(p,m),e(l,k),_($,d,F),_($,u,F),e(u,D),e(D,Y),e(u,A),e(u,P),e(P,W),_($,ie,F),_($,z,F),e(z,Ue),e(z,ee),e(ee,Re),e(z,Pe),e(z,Q),e(Q,Ve),e(z,de),e(z,le),e(le,Ke),e(z,Ne),e(z,K),e(K,Xe),e(z,Ae),e(z,X),e(X,Fe),e(z,Je),_($,be,F),_($,M,F),e(M,I),e(I,Ie),e(I,x),e(x,j),e(I,ke),e(I,ce),e(ce,Ze),e(M,Te),e(M,G),e(G,Ye),e(G,te),e(te,et),e(G,tt),e(G,oe),e(oe,ot),e(M,nt),e(M,U),e(U,st),e(U,he),e(he,we),_($,xe,F),_($,B,F),e(B,ye),e(B,R),e(R,at),e(B,rt)},d($){$&&t(l),$&&t(d),$&&t(u),$&&t(ie),$&&t(z),$&&t(be),$&&t(M),$&&t(xe),$&&t(B)}}}function Om(L){let l,b,p,m,k;return{c(){l=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var D=i(p);m=s(D,"Module"),D.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,b),e(l,p),e(p,m),e(l,k)},d(d){d&&t(l)}}}function Cm(L){let l,b,p,m,k;return m=new ze({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),b=n("Examples:"),p=c(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);b=s(u,"Examples:"),u.forEach(t),p=h(d),w(m.$$.fragment,d)},m(d,u){_(d,l,u),e(l,b),_(d,p,u),y(m,d,u),k=!0},p:De,i(d){k||(v(m.$$.fragment,d),k=!0)},o(d){E(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(p),q(m,d)}}}function jm(L){let l,b,p,m,k,d,u,D,Y,A,P,W,ie,z,Ue,ee,Re,Pe,Q,Ve,de,le,Ke,Ne,K,Xe,Ae,X,Fe,Je,be,M,I,Ie,x,j,ke,ce,Ze,Te,G,Ye,te,et,tt,oe,ot,nt,U,st,he,we,xe,B,ye,R,at,rt,$,F,it,Se,vt,dt,S,Et,qt,V,$t,lt,ne,pe,ct,Lt,ue,Ge,Dt,ht,pt,Me,zt,xi,se,Si,Us,Mi,Oi,Rs,Ci,ji,fs,Pi,Ni,Vs,Ai,Ii,Ks,Gi,Bi,Xs,Hi,Qi,Wi,ut,Ui,Js,Ri,Vi,Zs,Ki,Xi,Ys,Ji,Zi,Yi,Xo,ed,Jo,td,od,nd,Zo,sd,Yo,ad,rd,ur,so,id,en,dd,ld,mr,Ft,ao,ea,tn,cd,ta,hd,fr,Oe,on,pd,xt,ud,gs,md,fd,nn,gd,_d,bd,St,kd,_s,Td,wd,bs,yd,vd,Ed,ro,gr,Mt,io,oa,sn,qd,na,$d,_r,C,an,Ld,sa,Dd,zd,aa,Fd,xd,lo,Sd,rn,Md,ra,Od,Cd,jd,co,Pd,dn,Nd,ks,Ad,Id,Gd,mt,ln,Bd,ia,Hd,Qd,cn,Ts,Wd,da,Ud,Rd,ws,Vd,la,Kd,Xd,ho,hn,Jd,pn,Zd,ca,Yd,el,tl,po,un,ol,ha,nl,sl,ys,mn,br,Ot,uo,pa,fn,al,ua,rl,kr,H,gn,il,_n,dl,ma,ll,cl,hl,fa,pl,ul,mo,ml,bn,fl,ga,gl,_l,bl,fo,kl,kn,Tl,vs,wl,yl,vl,go,Tn,El,_a,ql,Tr,Ct,_o,ba,wn,$l,ka,Ll,wr,jt,yn,Dl,Ta,zl,yr,Pt,vn,Fl,wa,xl,vr,Nt,En,Sl,ya,Ml,Er,At,qn,Ol,va,Cl,qr,It,$n,jl,Ea,Pl,$r,Gt,Ln,Nl,qa,Al,Lr,Bt,Dn,Il,$a,Gl,Dr,Ht,zn,Bl,La,Hl,zr,Qt,bo,Da,Fn,Ql,za,Wl,Fr,Ce,xn,Ul,Sn,Rl,Es,Vl,Kl,Xl,Mn,Jl,On,Zl,Yl,ec,Be,Cn,tc,Wt,oc,qs,nc,sc,Fa,ac,rc,ic,ko,dc,To,xr,Ut,wo,xa,jn,lc,Sa,cc,Sr,je,Pn,hc,Nn,pc,$s,uc,mc,fc,An,gc,In,_c,bc,kc,ve,Gn,Tc,Rt,wc,Ls,yc,vc,Ma,Ec,qc,$c,yo,Lc,vo,Dc,Eo,Mr,Vt,qo,Oa,Bn,zc,Ca,Fc,Or,me,Hn,xc,ja,Sc,Mc,Qn,Oc,Ds,Cc,jc,Pc,Wn,Nc,Un,Ac,Ic,Gc,J,Rn,Bc,Kt,Hc,zs,Qc,Wc,Pa,Uc,Rc,Vc,$o,Kc,Lo,Xc,Do,Jc,zo,Zc,Fo,Cr,Xt,xo,Na,Vn,Yc,Aa,eh,jr,fe,Kn,th,Jt,oh,Ia,nh,sh,Ga,ah,rh,ih,Xn,dh,Fs,lh,ch,hh,Jn,ph,Zn,uh,mh,fh,Ee,Yn,gh,Zt,_h,xs,bh,kh,Ba,Th,wh,yh,So,vh,Mo,Eh,Oo,Pr,Yt,Co,Ha,es,qh,Qa,$h,Nr,ge,ts,Lh,os,Dh,Ss,zh,Fh,xh,ns,Sh,ss,Mh,Oh,Ch,jo,jh,He,as,Ph,eo,Nh,Ms,Ah,Ih,Wa,Gh,Bh,Hh,Po,Qh,No,Ar,to,Ao,Ua,rs,Wh,Ra,Uh,Ir,_e,is,Rh,ds,Vh,Os,Kh,Xh,Jh,ls,Zh,cs,Yh,ep,tp,Io,op,Qe,hs,np,oo,sp,Cs,ap,rp,Va,ip,dp,lp,Go,cp,Bo,Gr;return d=new We({}),z=new We({}),tn=new We({}),on=new O({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/configuration_led.py#L31"}}),ro=new Le({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[pm]},$$scope:{ctx:L}}}),sn=new We({}),an=new O({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L93"}}),lo=new Le({props:{anchor:"transformers.LEDTokenizer.example",$$slots:{default:[um]},$$scope:{ctx:L}}}),co=new yt({props:{$$slots:{default:[mm]},$$scope:{ctx:L}}}),ln=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L50"}}),mo=new Le({props:{anchor:"transformers.LEDTokenizerFast.example",$$slots:{default:[fm]},$$scope:{ctx:L}}}),fo=new yt({props:{$$slots:{default:[gm]},$$scope:{ctx:L}}}),Tn=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1179"}}),vn=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1222"}}),En=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1290"}}),qn=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1357"}}),$n=new O({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1424"}}),Ln=new O({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2213"}}),Cn=new O({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ko=new yt({props:{$$slots:{default:[_m]},$$scope:{ctx:L}}}),To=new Le({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[bm]},$$scope:{ctx:L}}}),jn=new We({}),Pn=new O({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2336"}}),Gn=new O({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),yo=new yt({props:{$$slots:{default:[km]},$$scope:{ctx:L}}}),vo=new Le({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[Tm]},$$scope:{ctx:L}}}),Eo=new Le({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[wm]},$$scope:{ctx:L}}}),Bn=new We({}),Hn=new O({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2529"}}),Rn=new O({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),$o=new yt({props:{$$slots:{default:[ym]},$$scope:{ctx:L}}}),Lo=new Le({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[vm]},$$scope:{ctx:L}}}),Do=new Le({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[Em]},$$scope:{ctx:L}}}),zo=new Le({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-3",$$slots:{default:[qm]},$$scope:{ctx:L}}}),Fo=new Le({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-4",$$slots:{default:[$m]},$$scope:{ctx:L}}}),Vn=new We({}),Kn=new O({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2657"}}),Yn=new O({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),So=new yt({props:{$$slots:{default:[Lm]},$$scope:{ctx:L}}}),Mo=new Le({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[Dm]},$$scope:{ctx:L}}}),Oo=new Le({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example-2",$$slots:{default:[zm]},$$scope:{ctx:L}}}),es=new We({}),ts=new O({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2248"}}),jo=new yt({props:{$$slots:{default:[Fm]},$$scope:{ctx:L}}}),as=new O({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2260",returnDescription:`
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
`}}),Po=new yt({props:{$$slots:{default:[xm]},$$scope:{ctx:L}}}),No=new Le({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[Sm]},$$scope:{ctx:L}}}),rs=new We({}),is=new O({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2354"}}),Io=new yt({props:{$$slots:{default:[Mm]},$$scope:{ctx:L}}}),hs=new O({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2390",returnDescription:`
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
`}}),Go=new yt({props:{$$slots:{default:[Om]},$$scope:{ctx:L}}}),Bo=new Le({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[Cm]},$$scope:{ctx:L}}}),{c(){l=a("meta"),b=c(),p=a("h1"),m=a("a"),k=a("span"),T(d.$$.fragment),u=c(),D=a("span"),Y=n("LED"),A=c(),P=a("h2"),W=a("a"),ie=a("span"),T(z.$$.fragment),Ue=c(),ee=a("span"),Re=n("Overview"),Pe=c(),Q=a("p"),Ve=n("The LED model was proposed in "),de=a("a"),le=n("Longformer: The Long-Document Transformer"),Ke=n(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Ne=c(),K=a("p"),Xe=n("The abstract from the paper is the following:"),Ae=c(),X=a("p"),Fe=a("em"),Je=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
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
`),Te=a("a"),G=n("BartForConditionalGeneration"),Ye=n(" exchanging the traditional "),te=a("em"),et=n("self-attention"),tt=n(` layer with
`),oe=a("em"),ot=n("Longformer"),nt=n("\u2019s "),U=a("em"),st=n("chunked self-attention"),he=n(" layer. "),we=a("a"),xe=n("LEDTokenizer"),B=n(` is an alias of
`),ye=a("a"),R=n("BartTokenizer"),at=n("."),rt=c(),$=a("li"),F=n("LED works very well on long-range "),it=a("em"),Se=n("sequence-to-sequence"),vt=n(" tasks where the "),dt=a("code"),S=n("input_ids"),Et=n(` largely exceed a length of
1024 tokens.`),qt=c(),V=a("li"),$t=n("LED pads the "),lt=a("code"),ne=n("input_ids"),pe=n(" to be a multiple of "),ct=a("code"),Lt=n("config.attention_window"),ue=n(` if required. Therefore a small speed-up is
gained, when `),Ge=a("a"),Dt=n("LEDTokenizer"),ht=n(" is used with the "),pt=a("code"),Me=n("pad_to_multiple_of"),zt=n(" argument."),xi=c(),se=a("li"),Si=n("LED makes use of "),Us=a("em"),Mi=n("global attention"),Oi=n(" by means of the "),Rs=a("code"),Ci=n("global_attention_mask"),ji=n(` (see
`),fs=a("a"),Pi=n("LongformerModel"),Ni=n("). For summarization, it is advised to put "),Vs=a("em"),Ai=n("global attention"),Ii=n(` only on the first
`),Ks=a("code"),Gi=n("<s>"),Bi=n(" token. For question answering, it is advised to put "),Xs=a("em"),Hi=n("global attention"),Qi=n(" on all tokens of the question."),Wi=c(),ut=a("li"),Ui=n("To fine-tune LED on all 16384, "),Js=a("em"),Ri=n("gradient checkpointing"),Vi=n(` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),Zs=a("code"),Ki=n("model.gradient_checkpointing_enable()"),Xi=n(`.
Moreover, the `),Ys=a("code"),Ji=n("use_cache=False"),Zi=n(`
flag can be used to disable the caching mechanism to save memory.`),Yi=c(),Xo=a("li"),ed=n("A notebook showing how to evaluate LED, can be accessed "),Jo=a("a"),td=n("here"),od=n("."),nd=c(),Zo=a("li"),sd=n("A notebook showing how to fine-tune LED, can be accessed "),Yo=a("a"),ad=n("here"),rd=n("."),ur=c(),so=a("p"),id=n("This model was contributed by "),en=a("a"),dd=n("patrickvonplaten"),ld=n("."),mr=c(),Ft=a("h2"),ao=a("a"),ea=a("span"),T(tn.$$.fragment),cd=c(),ta=a("span"),hd=n("LEDConfig"),fr=c(),Oe=a("div"),T(on.$$.fragment),pd=c(),xt=a("p"),ud=n("This is the configuration class to store the configuration of a "),gs=a("a"),md=n("LEDModel"),fd=n(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),nn=a("a"),gd=n("allenai/led-base-16384"),_d=n(" architecture."),bd=c(),St=a("p"),kd=n("Configuration objects inherit from "),_s=a("a"),Td=n("PretrainedConfig"),wd=n(` and can be used to control the model outputs. Read the
documentation from `),bs=a("a"),yd=n("PretrainedConfig"),vd=n(" for more information."),Ed=c(),T(ro.$$.fragment),gr=c(),Mt=a("h2"),io=a("a"),oa=a("span"),T(sn.$$.fragment),qd=c(),na=a("span"),$d=n("LEDTokenizer"),_r=c(),C=a("div"),T(an.$$.fragment),Ld=c(),sa=a("p"),Dd=n("Constructs a LED tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),zd=c(),aa=a("p"),Fd=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),xd=c(),T(lo.$$.fragment),Sd=c(),rn=a("p"),Md=n("You can get around that behavior by passing "),ra=a("code"),Od=n("add_prefix_space=True"),Cd=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),jd=c(),T(co.$$.fragment),Pd=c(),dn=a("p"),Nd=n("This tokenizer inherits from "),ks=a("a"),Ad=n("PreTrainedTokenizer"),Id=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gd=c(),mt=a("div"),T(ln.$$.fragment),Bd=c(),ia=a("p"),Hd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LED sequence has the following format:`),Qd=c(),cn=a("ul"),Ts=a("li"),Wd=n("single sequence: "),da=a("code"),Ud=n("<s> X </s>"),Rd=c(),ws=a("li"),Vd=n("pair of sequences: "),la=a("code"),Kd=n("<s> A </s></s> B </s>"),Xd=c(),ho=a("div"),T(hn.$$.fragment),Jd=c(),pn=a("p"),Zd=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ca=a("code"),Yd=n("prepare_for_model"),el=n(" method."),tl=c(),po=a("div"),T(un.$$.fragment),ol=c(),ha=a("p"),nl=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),sl=c(),ys=a("div"),T(mn.$$.fragment),br=c(),Ot=a("h2"),uo=a("a"),pa=a("span"),T(fn.$$.fragment),al=c(),ua=a("span"),rl=n("LEDTokenizerFast"),kr=c(),H=a("div"),T(gn.$$.fragment),il=c(),_n=a("p"),dl=n("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ma=a("em"),ll=n("tokenizers"),cl=n(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),hl=c(),fa=a("p"),pl=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ul=c(),T(mo.$$.fragment),ml=c(),bn=a("p"),fl=n("You can get around that behavior by passing "),ga=a("code"),gl=n("add_prefix_space=True"),_l=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),bl=c(),T(fo.$$.fragment),kl=c(),kn=a("p"),Tl=n("This tokenizer inherits from "),vs=a("a"),wl=n("PreTrainedTokenizerFast"),yl=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vl=c(),go=a("div"),T(Tn.$$.fragment),El=c(),_a=a("p"),ql=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),Tr=c(),Ct=a("h2"),_o=a("a"),ba=a("span"),T(wn.$$.fragment),$l=c(),ka=a("span"),Ll=n("LED specific outputs"),wr=c(),jt=a("div"),T(yn.$$.fragment),Dl=c(),Ta=a("p"),zl=n("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),yr=c(),Pt=a("div"),T(vn.$$.fragment),Fl=c(),wa=a("p"),xl=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),vr=c(),Nt=a("div"),T(En.$$.fragment),Sl=c(),ya=a("p"),Ml=n("Base class for sequence-to-sequence language models outputs."),Er=c(),At=a("div"),T(qn.$$.fragment),Ol=c(),va=a("p"),Cl=n("Base class for outputs of sequence-to-sequence sentence classification models."),qr=c(),It=a("div"),T($n.$$.fragment),jl=c(),Ea=a("p"),Pl=n("Base class for outputs of sequence-to-sequence question answering models."),$r=c(),Gt=a("div"),T(Ln.$$.fragment),Nl=c(),qa=a("p"),Al=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Lr=c(),Bt=a("div"),T(Dn.$$.fragment),Il=c(),$a=a("p"),Gl=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Dr=c(),Ht=a("div"),T(zn.$$.fragment),Bl=c(),La=a("p"),Hl=n("Base class for sequence-to-sequence language models outputs."),zr=c(),Qt=a("h2"),bo=a("a"),Da=a("span"),T(Fn.$$.fragment),Ql=c(),za=a("span"),Wl=n("LEDModel"),Fr=c(),Ce=a("div"),T(xn.$$.fragment),Ul=c(),Sn=a("p"),Rl=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Es=a("a"),Vl=n("PreTrainedModel"),Kl=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Xl=c(),Mn=a("p"),Jl=n("This model is also a PyTorch "),On=a("a"),Zl=n("torch.nn.Module"),Yl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),ec=c(),Be=a("div"),T(Cn.$$.fragment),tc=c(),Wt=a("p"),oc=n("The "),qs=a("a"),nc=n("LEDModel"),sc=n(" forward method, overrides the "),Fa=a("code"),ac=n("__call__"),rc=n(" special method."),ic=c(),T(ko.$$.fragment),dc=c(),T(To.$$.fragment),xr=c(),Ut=a("h2"),wo=a("a"),xa=a("span"),T(jn.$$.fragment),lc=c(),Sa=a("span"),cc=n("LEDForConditionalGeneration"),Sr=c(),je=a("div"),T(Pn.$$.fragment),hc=c(),Nn=a("p"),pc=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),$s=a("a"),uc=n("PreTrainedModel"),mc=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),fc=c(),An=a("p"),gc=n("This model is also a PyTorch "),In=a("a"),_c=n("torch.nn.Module"),bc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),kc=c(),ve=a("div"),T(Gn.$$.fragment),Tc=c(),Rt=a("p"),wc=n("The "),Ls=a("a"),yc=n("LEDForConditionalGeneration"),vc=n(" forward method, overrides the "),Ma=a("code"),Ec=n("__call__"),qc=n(" special method."),$c=c(),T(yo.$$.fragment),Lc=c(),T(vo.$$.fragment),Dc=c(),T(Eo.$$.fragment),Mr=c(),Vt=a("h2"),qo=a("a"),Oa=a("span"),T(Bn.$$.fragment),zc=c(),Ca=a("span"),Fc=n("LEDForSequenceClassification"),Or=c(),me=a("div"),T(Hn.$$.fragment),xc=c(),ja=a("p"),Sc=n(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Mc=c(),Qn=a("p"),Oc=n("This model inherits from "),Ds=a("a"),Cc=n("PreTrainedModel"),jc=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Pc=c(),Wn=a("p"),Nc=n("This model is also a PyTorch "),Un=a("a"),Ac=n("torch.nn.Module"),Ic=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Gc=c(),J=a("div"),T(Rn.$$.fragment),Bc=c(),Kt=a("p"),Hc=n("The "),zs=a("a"),Qc=n("LEDForSequenceClassification"),Wc=n(" forward method, overrides the "),Pa=a("code"),Uc=n("__call__"),Rc=n(" special method."),Vc=c(),T($o.$$.fragment),Kc=c(),T(Lo.$$.fragment),Xc=c(),T(Do.$$.fragment),Jc=c(),T(zo.$$.fragment),Zc=c(),T(Fo.$$.fragment),Cr=c(),Xt=a("h2"),xo=a("a"),Na=a("span"),T(Vn.$$.fragment),Yc=c(),Aa=a("span"),eh=n("LEDForQuestionAnswering"),jr=c(),fe=a("div"),T(Kn.$$.fragment),th=c(),Jt=a("p"),oh=n(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ia=a("code"),nh=n("span start logits"),sh=n(" and "),Ga=a("code"),ah=n("span end logits"),rh=n(")."),ih=c(),Xn=a("p"),dh=n("This model inherits from "),Fs=a("a"),lh=n("PreTrainedModel"),ch=n(`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),hh=c(),Jn=a("p"),ph=n("This model is also a PyTorch "),Zn=a("a"),uh=n("torch.nn.Module"),mh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),fh=c(),Ee=a("div"),T(Yn.$$.fragment),gh=c(),Zt=a("p"),_h=n("The "),xs=a("a"),bh=n("LEDForQuestionAnswering"),kh=n(" forward method, overrides the "),Ba=a("code"),Th=n("__call__"),wh=n(" special method."),yh=c(),T(So.$$.fragment),vh=c(),T(Mo.$$.fragment),Eh=c(),T(Oo.$$.fragment),Pr=c(),Yt=a("h2"),Co=a("a"),Ha=a("span"),T(es.$$.fragment),qh=c(),Qa=a("span"),$h=n("TFLEDModel"),Nr=c(),ge=a("div"),T(ts.$$.fragment),Lh=c(),os=a("p"),Dh=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=a("a"),zh=n("TFPreTrainedModel"),Fh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh=c(),ns=a("p"),Sh=n("This model is also a "),ss=a("a"),Mh=n("tf.keras.Model"),Oh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ch=c(),T(jo.$$.fragment),jh=c(),He=a("div"),T(as.$$.fragment),Ph=c(),eo=a("p"),Nh=n("The "),Ms=a("a"),Ah=n("TFLEDModel"),Ih=n(" forward method, overrides the "),Wa=a("code"),Gh=n("__call__"),Bh=n(" special method."),Hh=c(),T(Po.$$.fragment),Qh=c(),T(No.$$.fragment),Ar=c(),to=a("h2"),Ao=a("a"),Ua=a("span"),T(rs.$$.fragment),Wh=c(),Ra=a("span"),Uh=n("TFLEDForConditionalGeneration"),Ir=c(),_e=a("div"),T(is.$$.fragment),Rh=c(),ds=a("p"),Vh=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Os=a("a"),Kh=n("TFPreTrainedModel"),Xh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jh=c(),ls=a("p"),Zh=n("This model is also a "),cs=a("a"),Yh=n("tf.keras.Model"),ep=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tp=c(),T(Io.$$.fragment),op=c(),Qe=a("div"),T(hs.$$.fragment),np=c(),oo=a("p"),sp=n("The "),Cs=a("a"),ap=n("TFLEDForConditionalGeneration"),rp=n(" forward method, overrides the "),Va=a("code"),ip=n("__call__"),dp=n(" special method."),lp=c(),T(Go.$$.fragment),cp=c(),T(Bo.$$.fragment),this.h()},l(o){const g=cm('[data-svelte="svelte-1phssyn"]',document.head);l=r(g,"META",{name:!0,content:!0}),g.forEach(t),b=h(o),p=r(o,"H1",{class:!0});var ps=i(p);m=r(ps,"A",{id:!0,class:!0,href:!0});var Ka=i(m);k=r(Ka,"SPAN",{});var Xa=i(k);w(d.$$.fragment,Xa),Xa.forEach(t),Ka.forEach(t),u=h(ps),D=r(ps,"SPAN",{});var Ja=i(D);Y=s(Ja,"LED"),Ja.forEach(t),ps.forEach(t),A=h(o),P=r(o,"H2",{class:!0});var us=i(P);W=r(us,"A",{id:!0,class:!0,href:!0});var Za=i(W);ie=r(Za,"SPAN",{});var Ya=i(ie);w(z.$$.fragment,Ya),Ya.forEach(t),Za.forEach(t),Ue=h(us),ee=r(us,"SPAN",{});var er=i(ee);Re=s(er,"Overview"),er.forEach(t),us.forEach(t),Pe=h(o),Q=r(o,"P",{});var ms=i(Q);Ve=s(ms,"The LED model was proposed in "),de=r(ms,"A",{href:!0,rel:!0});var tr=i(de);le=s(tr,"Longformer: The Long-Document Transformer"),tr.forEach(t),Ke=s(ms,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),ms.forEach(t),Ne=h(o),K=r(o,"P",{});var or=i(K);Xe=s(or,"The abstract from the paper is the following:"),or.forEach(t),Ae=h(o),X=r(o,"P",{});var nr=i(X);Fe=r(nr,"EM",{});var sr=i(Fe);Je=s(sr,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),sr.forEach(t),nr.forEach(t),be=h(o),M=r(o,"P",{});var ar=i(M);I=s(ar,"Tips:"),ar.forEach(t),Ie=h(o),x=r(o,"UL",{});var ae=i(x);j=r(ae,"LI",{});var Z=i(j);ke=r(Z,"A",{href:!0});var rr=i(ke);ce=s(rr,"LEDForConditionalGeneration"),rr.forEach(t),Ze=s(Z,` is an extension of
`),Te=r(Z,"A",{href:!0});var ir=i(Te);G=s(ir,"BartForConditionalGeneration"),ir.forEach(t),Ye=s(Z," exchanging the traditional "),te=r(Z,"EM",{});var dr=i(te);et=s(dr,"self-attention"),dr.forEach(t),tt=s(Z,` layer with
`),oe=r(Z,"EM",{});var lr=i(oe);ot=s(lr,"Longformer"),lr.forEach(t),nt=s(Z,"\u2019s "),U=r(Z,"EM",{});var cr=i(U);st=s(cr,"chunked self-attention"),cr.forEach(t),he=s(Z," layer. "),we=r(Z,"A",{href:!0});var hr=i(we);xe=s(hr,"LEDTokenizer"),hr.forEach(t),B=s(Z,` is an alias of
`),ye=r(Z,"A",{href:!0});var pr=i(ye);R=s(pr,"BartTokenizer"),pr.forEach(t),at=s(Z,"."),Z.forEach(t),rt=h(ae),$=r(ae,"LI",{});var no=i($);F=s(no,"LED works very well on long-range "),it=r(no,"EM",{});var up=i(it);Se=s(up,"sequence-to-sequence"),up.forEach(t),vt=s(no," tasks where the "),dt=r(no,"CODE",{});var mp=i(dt);S=s(mp,"input_ids"),mp.forEach(t),Et=s(no,` largely exceed a length of
1024 tokens.`),no.forEach(t),qt=h(ae),V=r(ae,"LI",{});var ft=i(V);$t=s(ft,"LED pads the "),lt=r(ft,"CODE",{});var fp=i(lt);ne=s(fp,"input_ids"),fp.forEach(t),pe=s(ft," to be a multiple of "),ct=r(ft,"CODE",{});var gp=i(ct);Lt=s(gp,"config.attention_window"),gp.forEach(t),ue=s(ft,` if required. Therefore a small speed-up is
gained, when `),Ge=r(ft,"A",{href:!0});var _p=i(Ge);Dt=s(_p,"LEDTokenizer"),_p.forEach(t),ht=s(ft," is used with the "),pt=r(ft,"CODE",{});var bp=i(pt);Me=s(bp,"pad_to_multiple_of"),bp.forEach(t),zt=s(ft," argument."),ft.forEach(t),xi=h(ae),se=r(ae,"LI",{});var qe=i(se);Si=s(qe,"LED makes use of "),Us=r(qe,"EM",{});var kp=i(Us);Mi=s(kp,"global attention"),kp.forEach(t),Oi=s(qe," by means of the "),Rs=r(qe,"CODE",{});var Tp=i(Rs);Ci=s(Tp,"global_attention_mask"),Tp.forEach(t),ji=s(qe,` (see
`),fs=r(qe,"A",{href:!0});var wp=i(fs);Pi=s(wp,"LongformerModel"),wp.forEach(t),Ni=s(qe,"). For summarization, it is advised to put "),Vs=r(qe,"EM",{});var yp=i(Vs);Ai=s(yp,"global attention"),yp.forEach(t),Ii=s(qe,` only on the first
`),Ks=r(qe,"CODE",{});var vp=i(Ks);Gi=s(vp,"<s>"),vp.forEach(t),Bi=s(qe," token. For question answering, it is advised to put "),Xs=r(qe,"EM",{});var Ep=i(Xs);Hi=s(Ep,"global attention"),Ep.forEach(t),Qi=s(qe," on all tokens of the question."),qe.forEach(t),Wi=h(ae),ut=r(ae,"LI",{});var Ho=i(ut);Ui=s(Ho,"To fine-tune LED on all 16384, "),Js=r(Ho,"EM",{});var qp=i(Js);Ri=s(qp,"gradient checkpointing"),qp.forEach(t),Vi=s(Ho,` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing `),Zs=r(Ho,"CODE",{});var $p=i(Zs);Ki=s($p,"model.gradient_checkpointing_enable()"),$p.forEach(t),Xi=s(Ho,`.
Moreover, the `),Ys=r(Ho,"CODE",{});var Lp=i(Ys);Ji=s(Lp,"use_cache=False"),Lp.forEach(t),Zi=s(Ho,`
flag can be used to disable the caching mechanism to save memory.`),Ho.forEach(t),Yi=h(ae),Xo=r(ae,"LI",{});var Br=i(Xo);ed=s(Br,"A notebook showing how to evaluate LED, can be accessed "),Jo=r(Br,"A",{href:!0,rel:!0});var Dp=i(Jo);td=s(Dp,"here"),Dp.forEach(t),od=s(Br,"."),Br.forEach(t),nd=h(ae),Zo=r(ae,"LI",{});var Hr=i(Zo);sd=s(Hr,"A notebook showing how to fine-tune LED, can be accessed "),Yo=r(Hr,"A",{href:!0,rel:!0});var zp=i(Yo);ad=s(zp,"here"),zp.forEach(t),rd=s(Hr,"."),Hr.forEach(t),ae.forEach(t),ur=h(o),so=r(o,"P",{});var Qr=i(so);id=s(Qr,"This model was contributed by "),en=r(Qr,"A",{href:!0,rel:!0});var Fp=i(en);dd=s(Fp,"patrickvonplaten"),Fp.forEach(t),ld=s(Qr,"."),Qr.forEach(t),mr=h(o),Ft=r(o,"H2",{class:!0});var Wr=i(Ft);ao=r(Wr,"A",{id:!0,class:!0,href:!0});var xp=i(ao);ea=r(xp,"SPAN",{});var Sp=i(ea);w(tn.$$.fragment,Sp),Sp.forEach(t),xp.forEach(t),cd=h(Wr),ta=r(Wr,"SPAN",{});var Mp=i(ta);hd=s(Mp,"LEDConfig"),Mp.forEach(t),Wr.forEach(t),fr=h(o),Oe=r(o,"DIV",{class:!0});var Qo=i(Oe);w(on.$$.fragment,Qo),pd=h(Qo),xt=r(Qo,"P",{});var js=i(xt);ud=s(js,"This is the configuration class to store the configuration of a "),gs=r(js,"A",{href:!0});var Op=i(gs);md=s(Op,"LEDModel"),Op.forEach(t),fd=s(js,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),nn=r(js,"A",{href:!0,rel:!0});var Cp=i(nn);gd=s(Cp,"allenai/led-base-16384"),Cp.forEach(t),_d=s(js," architecture."),js.forEach(t),bd=h(Qo),St=r(Qo,"P",{});var Ps=i(St);kd=s(Ps,"Configuration objects inherit from "),_s=r(Ps,"A",{href:!0});var jp=i(_s);Td=s(jp,"PretrainedConfig"),jp.forEach(t),wd=s(Ps,` and can be used to control the model outputs. Read the
documentation from `),bs=r(Ps,"A",{href:!0});var Pp=i(bs);yd=s(Pp,"PretrainedConfig"),Pp.forEach(t),vd=s(Ps," for more information."),Ps.forEach(t),Ed=h(Qo),w(ro.$$.fragment,Qo),Qo.forEach(t),gr=h(o),Mt=r(o,"H2",{class:!0});var Ur=i(Mt);io=r(Ur,"A",{id:!0,class:!0,href:!0});var Np=i(io);oa=r(Np,"SPAN",{});var Ap=i(oa);w(sn.$$.fragment,Ap),Ap.forEach(t),Np.forEach(t),qd=h(Ur),na=r(Ur,"SPAN",{});var Ip=i(na);$d=s(Ip,"LEDTokenizer"),Ip.forEach(t),Ur.forEach(t),_r=h(o),C=r(o,"DIV",{class:!0});var N=i(C);w(an.$$.fragment,N),Ld=h(N),sa=r(N,"P",{});var Gp=i(sa);Dd=s(Gp,"Constructs a LED tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),Gp.forEach(t),zd=h(N),aa=r(N,"P",{});var Bp=i(aa);Fd=s(Bp,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Bp.forEach(t),xd=h(N),w(lo.$$.fragment,N),Sd=h(N),rn=r(N,"P",{});var Rr=i(rn);Md=s(Rr,"You can get around that behavior by passing "),ra=r(Rr,"CODE",{});var Hp=i(ra);Od=s(Hp,"add_prefix_space=True"),Hp.forEach(t),Cd=s(Rr,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Rr.forEach(t),jd=h(N),w(co.$$.fragment,N),Pd=h(N),dn=r(N,"P",{});var Vr=i(dn);Nd=s(Vr,"This tokenizer inherits from "),ks=r(Vr,"A",{href:!0});var Qp=i(ks);Ad=s(Qp,"PreTrainedTokenizer"),Qp.forEach(t),Id=s(Vr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vr.forEach(t),Gd=h(N),mt=r(N,"DIV",{class:!0});var Ns=i(mt);w(ln.$$.fragment,Ns),Bd=h(Ns),ia=r(Ns,"P",{});var Wp=i(ia);Hd=s(Wp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LED sequence has the following format:`),Wp.forEach(t),Qd=h(Ns),cn=r(Ns,"UL",{});var Kr=i(cn);Ts=r(Kr,"LI",{});var hp=i(Ts);Wd=s(hp,"single sequence: "),da=r(hp,"CODE",{});var Up=i(da);Ud=s(Up,"<s> X </s>"),Up.forEach(t),hp.forEach(t),Rd=h(Kr),ws=r(Kr,"LI",{});var pp=i(ws);Vd=s(pp,"pair of sequences: "),la=r(pp,"CODE",{});var Rp=i(la);Kd=s(Rp,"<s> A </s></s> B </s>"),Rp.forEach(t),pp.forEach(t),Kr.forEach(t),Ns.forEach(t),Xd=h(N),ho=r(N,"DIV",{class:!0});var Xr=i(ho);w(hn.$$.fragment,Xr),Jd=h(Xr),pn=r(Xr,"P",{});var Jr=i(pn);Zd=s(Jr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ca=r(Jr,"CODE",{});var Vp=i(ca);Yd=s(Vp,"prepare_for_model"),Vp.forEach(t),el=s(Jr," method."),Jr.forEach(t),Xr.forEach(t),tl=h(N),po=r(N,"DIV",{class:!0});var Zr=i(po);w(un.$$.fragment,Zr),ol=h(Zr),ha=r(Zr,"P",{});var Kp=i(ha);nl=s(Kp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),Kp.forEach(t),Zr.forEach(t),sl=h(N),ys=r(N,"DIV",{class:!0});var Xp=i(ys);w(mn.$$.fragment,Xp),Xp.forEach(t),N.forEach(t),br=h(o),Ot=r(o,"H2",{class:!0});var Yr=i(Ot);uo=r(Yr,"A",{id:!0,class:!0,href:!0});var Jp=i(uo);pa=r(Jp,"SPAN",{});var Zp=i(pa);w(fn.$$.fragment,Zp),Zp.forEach(t),Jp.forEach(t),al=h(Yr),ua=r(Yr,"SPAN",{});var Yp=i(ua);rl=s(Yp,"LEDTokenizerFast"),Yp.forEach(t),Yr.forEach(t),kr=h(o),H=r(o,"DIV",{class:!0});var re=i(H);w(gn.$$.fragment,re),il=h(re),_n=r(re,"P",{});var ei=i(_n);dl=s(ei,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ma=r(ei,"EM",{});var eu=i(ma);ll=s(eu,"tokenizers"),eu.forEach(t),cl=s(ei,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),ei.forEach(t),hl=h(re),fa=r(re,"P",{});var tu=i(fa);pl=s(tu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),tu.forEach(t),ul=h(re),w(mo.$$.fragment,re),ml=h(re),bn=r(re,"P",{});var ti=i(bn);fl=s(ti,"You can get around that behavior by passing "),ga=r(ti,"CODE",{});var ou=i(ga);gl=s(ou,"add_prefix_space=True"),ou.forEach(t),_l=s(ti,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),ti.forEach(t),bl=h(re),w(fo.$$.fragment,re),kl=h(re),kn=r(re,"P",{});var oi=i(kn);Tl=s(oi,"This tokenizer inherits from "),vs=r(oi,"A",{href:!0});var nu=i(vs);wl=s(nu,"PreTrainedTokenizerFast"),nu.forEach(t),yl=s(oi,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),oi.forEach(t),vl=h(re),go=r(re,"DIV",{class:!0});var ni=i(go);w(Tn.$$.fragment,ni),El=h(ni),_a=r(ni,"P",{});var su=i(_a);ql=s(su,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`),su.forEach(t),ni.forEach(t),re.forEach(t),Tr=h(o),Ct=r(o,"H2",{class:!0});var si=i(Ct);_o=r(si,"A",{id:!0,class:!0,href:!0});var au=i(_o);ba=r(au,"SPAN",{});var ru=i(ba);w(wn.$$.fragment,ru),ru.forEach(t),au.forEach(t),$l=h(si),ka=r(si,"SPAN",{});var iu=i(ka);Ll=s(iu,"LED specific outputs"),iu.forEach(t),si.forEach(t),wr=h(o),jt=r(o,"DIV",{class:!0});var ai=i(jt);w(yn.$$.fragment,ai),Dl=h(ai),Ta=r(ai,"P",{});var du=i(Ta);zl=s(du,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),du.forEach(t),ai.forEach(t),yr=h(o),Pt=r(o,"DIV",{class:!0});var ri=i(Pt);w(vn.$$.fragment,ri),Fl=h(ri),wa=r(ri,"P",{});var lu=i(wa);xl=s(lu,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),lu.forEach(t),ri.forEach(t),vr=h(o),Nt=r(o,"DIV",{class:!0});var ii=i(Nt);w(En.$$.fragment,ii),Sl=h(ii),ya=r(ii,"P",{});var cu=i(ya);Ml=s(cu,"Base class for sequence-to-sequence language models outputs."),cu.forEach(t),ii.forEach(t),Er=h(o),At=r(o,"DIV",{class:!0});var di=i(At);w(qn.$$.fragment,di),Ol=h(di),va=r(di,"P",{});var hu=i(va);Cl=s(hu,"Base class for outputs of sequence-to-sequence sentence classification models."),hu.forEach(t),di.forEach(t),qr=h(o),It=r(o,"DIV",{class:!0});var li=i(It);w($n.$$.fragment,li),jl=h(li),Ea=r(li,"P",{});var pu=i(Ea);Pl=s(pu,"Base class for outputs of sequence-to-sequence question answering models."),pu.forEach(t),li.forEach(t),$r=h(o),Gt=r(o,"DIV",{class:!0});var ci=i(Gt);w(Ln.$$.fragment,ci),Nl=h(ci),qa=r(ci,"P",{});var uu=i(qa);Al=s(uu,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),uu.forEach(t),ci.forEach(t),Lr=h(o),Bt=r(o,"DIV",{class:!0});var hi=i(Bt);w(Dn.$$.fragment,hi),Il=h(hi),$a=r(hi,"P",{});var mu=i($a);Gl=s(mu,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),mu.forEach(t),hi.forEach(t),Dr=h(o),Ht=r(o,"DIV",{class:!0});var pi=i(Ht);w(zn.$$.fragment,pi),Bl=h(pi),La=r(pi,"P",{});var fu=i(La);Hl=s(fu,"Base class for sequence-to-sequence language models outputs."),fu.forEach(t),pi.forEach(t),zr=h(o),Qt=r(o,"H2",{class:!0});var ui=i(Qt);bo=r(ui,"A",{id:!0,class:!0,href:!0});var gu=i(bo);Da=r(gu,"SPAN",{});var _u=i(Da);w(Fn.$$.fragment,_u),_u.forEach(t),gu.forEach(t),Ql=h(ui),za=r(ui,"SPAN",{});var bu=i(za);Wl=s(bu,"LEDModel"),bu.forEach(t),ui.forEach(t),Fr=h(o),Ce=r(o,"DIV",{class:!0});var Wo=i(Ce);w(xn.$$.fragment,Wo),Ul=h(Wo),Sn=r(Wo,"P",{});var mi=i(Sn);Rl=s(mi,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Es=r(mi,"A",{href:!0});var ku=i(Es);Vl=s(ku,"PreTrainedModel"),ku.forEach(t),Kl=s(mi,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),mi.forEach(t),Xl=h(Wo),Mn=r(Wo,"P",{});var fi=i(Mn);Jl=s(fi,"This model is also a PyTorch "),On=r(fi,"A",{href:!0,rel:!0});var Tu=i(On);Zl=s(Tu,"torch.nn.Module"),Tu.forEach(t),Yl=s(fi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),fi.forEach(t),ec=h(Wo),Be=r(Wo,"DIV",{class:!0});var Uo=i(Be);w(Cn.$$.fragment,Uo),tc=h(Uo),Wt=r(Uo,"P",{});var As=i(Wt);oc=s(As,"The "),qs=r(As,"A",{href:!0});var wu=i(qs);nc=s(wu,"LEDModel"),wu.forEach(t),sc=s(As," forward method, overrides the "),Fa=r(As,"CODE",{});var yu=i(Fa);ac=s(yu,"__call__"),yu.forEach(t),rc=s(As," special method."),As.forEach(t),ic=h(Uo),w(ko.$$.fragment,Uo),dc=h(Uo),w(To.$$.fragment,Uo),Uo.forEach(t),Wo.forEach(t),xr=h(o),Ut=r(o,"H2",{class:!0});var gi=i(Ut);wo=r(gi,"A",{id:!0,class:!0,href:!0});var vu=i(wo);xa=r(vu,"SPAN",{});var Eu=i(xa);w(jn.$$.fragment,Eu),Eu.forEach(t),vu.forEach(t),lc=h(gi),Sa=r(gi,"SPAN",{});var qu=i(Sa);cc=s(qu,"LEDForConditionalGeneration"),qu.forEach(t),gi.forEach(t),Sr=h(o),je=r(o,"DIV",{class:!0});var Ro=i(je);w(Pn.$$.fragment,Ro),hc=h(Ro),Nn=r(Ro,"P",{});var _i=i(Nn);pc=s(_i,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),$s=r(_i,"A",{href:!0});var $u=i($s);uc=s($u,"PreTrainedModel"),$u.forEach(t),mc=s(_i,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),_i.forEach(t),fc=h(Ro),An=r(Ro,"P",{});var bi=i(An);gc=s(bi,"This model is also a PyTorch "),In=r(bi,"A",{href:!0,rel:!0});var Lu=i(In);_c=s(Lu,"torch.nn.Module"),Lu.forEach(t),bc=s(bi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),bi.forEach(t),kc=h(Ro),ve=r(Ro,"DIV",{class:!0});var gt=i(ve);w(Gn.$$.fragment,gt),Tc=h(gt),Rt=r(gt,"P",{});var Is=i(Rt);wc=s(Is,"The "),Ls=r(Is,"A",{href:!0});var Du=i(Ls);yc=s(Du,"LEDForConditionalGeneration"),Du.forEach(t),vc=s(Is," forward method, overrides the "),Ma=r(Is,"CODE",{});var zu=i(Ma);Ec=s(zu,"__call__"),zu.forEach(t),qc=s(Is," special method."),Is.forEach(t),$c=h(gt),w(yo.$$.fragment,gt),Lc=h(gt),w(vo.$$.fragment,gt),Dc=h(gt),w(Eo.$$.fragment,gt),gt.forEach(t),Ro.forEach(t),Mr=h(o),Vt=r(o,"H2",{class:!0});var ki=i(Vt);qo=r(ki,"A",{id:!0,class:!0,href:!0});var Fu=i(qo);Oa=r(Fu,"SPAN",{});var xu=i(Oa);w(Bn.$$.fragment,xu),xu.forEach(t),Fu.forEach(t),zc=h(ki),Ca=r(ki,"SPAN",{});var Su=i(Ca);Fc=s(Su,"LEDForSequenceClassification"),Su.forEach(t),ki.forEach(t),Or=h(o),me=r(o,"DIV",{class:!0});var _t=i(me);w(Hn.$$.fragment,_t),xc=h(_t),ja=r(_t,"P",{});var Mu=i(ja);Sc=s(Mu,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Mu.forEach(t),Mc=h(_t),Qn=r(_t,"P",{});var Ti=i(Qn);Oc=s(Ti,"This model inherits from "),Ds=r(Ti,"A",{href:!0});var Ou=i(Ds);Cc=s(Ou,"PreTrainedModel"),Ou.forEach(t),jc=s(Ti,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),Ti.forEach(t),Pc=h(_t),Wn=r(_t,"P",{});var wi=i(Wn);Nc=s(wi,"This model is also a PyTorch "),Un=r(wi,"A",{href:!0,rel:!0});var Cu=i(Un);Ac=s(Cu,"torch.nn.Module"),Cu.forEach(t),Ic=s(wi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),wi.forEach(t),Gc=h(_t),J=r(_t,"DIV",{class:!0});var $e=i(J);w(Rn.$$.fragment,$e),Bc=h($e),Kt=r($e,"P",{});var Gs=i(Kt);Hc=s(Gs,"The "),zs=r(Gs,"A",{href:!0});var ju=i(zs);Qc=s(ju,"LEDForSequenceClassification"),ju.forEach(t),Wc=s(Gs," forward method, overrides the "),Pa=r(Gs,"CODE",{});var Pu=i(Pa);Uc=s(Pu,"__call__"),Pu.forEach(t),Rc=s(Gs," special method."),Gs.forEach(t),Vc=h($e),w($o.$$.fragment,$e),Kc=h($e),w(Lo.$$.fragment,$e),Xc=h($e),w(Do.$$.fragment,$e),Jc=h($e),w(zo.$$.fragment,$e),Zc=h($e),w(Fo.$$.fragment,$e),$e.forEach(t),_t.forEach(t),Cr=h(o),Xt=r(o,"H2",{class:!0});var yi=i(Xt);xo=r(yi,"A",{id:!0,class:!0,href:!0});var Nu=i(xo);Na=r(Nu,"SPAN",{});var Au=i(Na);w(Vn.$$.fragment,Au),Au.forEach(t),Nu.forEach(t),Yc=h(yi),Aa=r(yi,"SPAN",{});var Iu=i(Aa);eh=s(Iu,"LEDForQuestionAnswering"),Iu.forEach(t),yi.forEach(t),jr=h(o),fe=r(o,"DIV",{class:!0});var bt=i(fe);w(Kn.$$.fragment,bt),th=h(bt),Jt=r(bt,"P",{});var Bs=i(Jt);oh=s(Bs,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ia=r(Bs,"CODE",{});var Gu=i(Ia);nh=s(Gu,"span start logits"),Gu.forEach(t),sh=s(Bs," and "),Ga=r(Bs,"CODE",{});var Bu=i(Ga);ah=s(Bu,"span end logits"),Bu.forEach(t),rh=s(Bs,")."),Bs.forEach(t),ih=h(bt),Xn=r(bt,"P",{});var vi=i(Xn);dh=s(vi,"This model inherits from "),Fs=r(vi,"A",{href:!0});var Hu=i(Fs);lh=s(Hu,"PreTrainedModel"),Hu.forEach(t),ch=s(vi,`. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`),vi.forEach(t),hh=h(bt),Jn=r(bt,"P",{});var Ei=i(Jn);ph=s(Ei,"This model is also a PyTorch "),Zn=r(Ei,"A",{href:!0,rel:!0});var Qu=i(Zn);uh=s(Qu,"torch.nn.Module"),Qu.forEach(t),mh=s(Ei,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`),Ei.forEach(t),fh=h(bt),Ee=r(bt,"DIV",{class:!0});var kt=i(Ee);w(Yn.$$.fragment,kt),gh=h(kt),Zt=r(kt,"P",{});var Hs=i(Zt);_h=s(Hs,"The "),xs=r(Hs,"A",{href:!0});var Wu=i(xs);bh=s(Wu,"LEDForQuestionAnswering"),Wu.forEach(t),kh=s(Hs," forward method, overrides the "),Ba=r(Hs,"CODE",{});var Uu=i(Ba);Th=s(Uu,"__call__"),Uu.forEach(t),wh=s(Hs," special method."),Hs.forEach(t),yh=h(kt),w(So.$$.fragment,kt),vh=h(kt),w(Mo.$$.fragment,kt),Eh=h(kt),w(Oo.$$.fragment,kt),kt.forEach(t),bt.forEach(t),Pr=h(o),Yt=r(o,"H2",{class:!0});var qi=i(Yt);Co=r(qi,"A",{id:!0,class:!0,href:!0});var Ru=i(Co);Ha=r(Ru,"SPAN",{});var Vu=i(Ha);w(es.$$.fragment,Vu),Vu.forEach(t),Ru.forEach(t),qh=h(qi),Qa=r(qi,"SPAN",{});var Ku=i(Qa);$h=s(Ku,"TFLEDModel"),Ku.forEach(t),qi.forEach(t),Nr=h(o),ge=r(o,"DIV",{class:!0});var Tt=i(ge);w(ts.$$.fragment,Tt),Lh=h(Tt),os=r(Tt,"P",{});var $i=i(os);Dh=s($i,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=r($i,"A",{href:!0});var Xu=i(Ss);zh=s(Xu,"TFPreTrainedModel"),Xu.forEach(t),Fh=s($i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$i.forEach(t),xh=h(Tt),ns=r(Tt,"P",{});var Li=i(ns);Sh=s(Li,"This model is also a "),ss=r(Li,"A",{href:!0,rel:!0});var Ju=i(ss);Mh=s(Ju,"tf.keras.Model"),Ju.forEach(t),Oh=s(Li,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Li.forEach(t),Ch=h(Tt),w(jo.$$.fragment,Tt),jh=h(Tt),He=r(Tt,"DIV",{class:!0});var Vo=i(He);w(as.$$.fragment,Vo),Ph=h(Vo),eo=r(Vo,"P",{});var Qs=i(eo);Nh=s(Qs,"The "),Ms=r(Qs,"A",{href:!0});var Zu=i(Ms);Ah=s(Zu,"TFLEDModel"),Zu.forEach(t),Ih=s(Qs," forward method, overrides the "),Wa=r(Qs,"CODE",{});var Yu=i(Wa);Gh=s(Yu,"__call__"),Yu.forEach(t),Bh=s(Qs," special method."),Qs.forEach(t),Hh=h(Vo),w(Po.$$.fragment,Vo),Qh=h(Vo),w(No.$$.fragment,Vo),Vo.forEach(t),Tt.forEach(t),Ar=h(o),to=r(o,"H2",{class:!0});var Di=i(to);Ao=r(Di,"A",{id:!0,class:!0,href:!0});var em=i(Ao);Ua=r(em,"SPAN",{});var tm=i(Ua);w(rs.$$.fragment,tm),tm.forEach(t),em.forEach(t),Wh=h(Di),Ra=r(Di,"SPAN",{});var om=i(Ra);Uh=s(om,"TFLEDForConditionalGeneration"),om.forEach(t),Di.forEach(t),Ir=h(o),_e=r(o,"DIV",{class:!0});var wt=i(_e);w(is.$$.fragment,wt),Rh=h(wt),ds=r(wt,"P",{});var zi=i(ds);Vh=s(zi,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Os=r(zi,"A",{href:!0});var nm=i(Os);Kh=s(nm,"TFPreTrainedModel"),nm.forEach(t),Xh=s(zi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zi.forEach(t),Jh=h(wt),ls=r(wt,"P",{});var Fi=i(ls);Zh=s(Fi,"This model is also a "),cs=r(Fi,"A",{href:!0,rel:!0});var sm=i(cs);Yh=s(sm,"tf.keras.Model"),sm.forEach(t),ep=s(Fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fi.forEach(t),tp=h(wt),w(Io.$$.fragment,wt),op=h(wt),Qe=r(wt,"DIV",{class:!0});var Ko=i(Qe);w(hs.$$.fragment,Ko),np=h(Ko),oo=r(Ko,"P",{});var Ws=i(oo);sp=s(Ws,"The "),Cs=r(Ws,"A",{href:!0});var am=i(Cs);ap=s(am,"TFLEDForConditionalGeneration"),am.forEach(t),rp=s(Ws," forward method, overrides the "),Va=r(Ws,"CODE",{});var rm=i(Va);ip=s(rm,"__call__"),rm.forEach(t),dp=s(Ws," special method."),Ws.forEach(t),lp=h(Ko),w(Go.$$.fragment,Ko),cp=h(Ko),w(Bo.$$.fragment,Ko),Ko.forEach(t),wt.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(Pm)),f(m,"id","led"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#led"),f(p,"class","relative group"),f(W,"id","overview"),f(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(W,"href","#overview"),f(P,"class","relative group"),f(de,"href","https://arxiv.org/abs/2004.05150"),f(de,"rel","nofollow"),f(ke,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),f(Te,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(we,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),f(ye,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),f(Ge,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),f(fs,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),f(Jo,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),f(Jo,"rel","nofollow"),f(Yo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),f(Yo,"rel","nofollow"),f(en,"href","https://huggingface.co/patrickvonplaten"),f(en,"rel","nofollow"),f(ao,"id","transformers.LEDConfig"),f(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ao,"href","#transformers.LEDConfig"),f(Ft,"class","relative group"),f(gs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),f(nn,"href","https://huggingface.co/allenai/led-base-16384"),f(nn,"rel","nofollow"),f(_s,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(bs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(io,"id","transformers.LEDTokenizer"),f(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(io,"href","#transformers.LEDTokenizer"),f(Mt,"class","relative group"),f(ks,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ys,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(uo,"id","transformers.LEDTokenizerFast"),f(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(uo,"href","#transformers.LEDTokenizerFast"),f(Ot,"class","relative group"),f(vs,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_o,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),f(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_o,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),f(Ct,"class","relative group"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bo,"id","transformers.LEDModel"),f(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bo,"href","#transformers.LEDModel"),f(Qt,"class","relative group"),f(Es,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(On,"rel","nofollow"),f(qs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wo,"id","transformers.LEDForConditionalGeneration"),f(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wo,"href","#transformers.LEDForConditionalGeneration"),f(Ut,"class","relative group"),f($s,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(In,"rel","nofollow"),f(Ls,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),f(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qo,"id","transformers.LEDForSequenceClassification"),f(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qo,"href","#transformers.LEDForSequenceClassification"),f(Vt,"class","relative group"),f(Ds,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Un,"rel","nofollow"),f(zs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xo,"id","transformers.LEDForQuestionAnswering"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#transformers.LEDForQuestionAnswering"),f(Xt,"class","relative group"),f(Fs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Zn,"rel","nofollow"),f(xs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.TFLEDModel"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.TFLEDModel"),f(Yt,"class","relative group"),f(Ss,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ss,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ss,"rel","nofollow"),f(Ms,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"id","transformers.TFLEDForConditionalGeneration"),f(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ao,"href","#transformers.TFLEDForConditionalGeneration"),f(to,"class","relative group"),f(Os,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(cs,"rel","nofollow"),f(Cs,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),_(o,b,g),_(o,p,g),e(p,m),e(m,k),y(d,k,null),e(p,u),e(p,D),e(D,Y),_(o,A,g),_(o,P,g),e(P,W),e(W,ie),y(z,ie,null),e(P,Ue),e(P,ee),e(ee,Re),_(o,Pe,g),_(o,Q,g),e(Q,Ve),e(Q,de),e(de,le),e(Q,Ke),_(o,Ne,g),_(o,K,g),e(K,Xe),_(o,Ae,g),_(o,X,g),e(X,Fe),e(Fe,Je),_(o,be,g),_(o,M,g),e(M,I),_(o,Ie,g),_(o,x,g),e(x,j),e(j,ke),e(ke,ce),e(j,Ze),e(j,Te),e(Te,G),e(j,Ye),e(j,te),e(te,et),e(j,tt),e(j,oe),e(oe,ot),e(j,nt),e(j,U),e(U,st),e(j,he),e(j,we),e(we,xe),e(j,B),e(j,ye),e(ye,R),e(j,at),e(x,rt),e(x,$),e($,F),e($,it),e(it,Se),e($,vt),e($,dt),e(dt,S),e($,Et),e(x,qt),e(x,V),e(V,$t),e(V,lt),e(lt,ne),e(V,pe),e(V,ct),e(ct,Lt),e(V,ue),e(V,Ge),e(Ge,Dt),e(V,ht),e(V,pt),e(pt,Me),e(V,zt),e(x,xi),e(x,se),e(se,Si),e(se,Us),e(Us,Mi),e(se,Oi),e(se,Rs),e(Rs,Ci),e(se,ji),e(se,fs),e(fs,Pi),e(se,Ni),e(se,Vs),e(Vs,Ai),e(se,Ii),e(se,Ks),e(Ks,Gi),e(se,Bi),e(se,Xs),e(Xs,Hi),e(se,Qi),e(x,Wi),e(x,ut),e(ut,Ui),e(ut,Js),e(Js,Ri),e(ut,Vi),e(ut,Zs),e(Zs,Ki),e(ut,Xi),e(ut,Ys),e(Ys,Ji),e(ut,Zi),e(x,Yi),e(x,Xo),e(Xo,ed),e(Xo,Jo),e(Jo,td),e(Xo,od),e(x,nd),e(x,Zo),e(Zo,sd),e(Zo,Yo),e(Yo,ad),e(Zo,rd),_(o,ur,g),_(o,so,g),e(so,id),e(so,en),e(en,dd),e(so,ld),_(o,mr,g),_(o,Ft,g),e(Ft,ao),e(ao,ea),y(tn,ea,null),e(Ft,cd),e(Ft,ta),e(ta,hd),_(o,fr,g),_(o,Oe,g),y(on,Oe,null),e(Oe,pd),e(Oe,xt),e(xt,ud),e(xt,gs),e(gs,md),e(xt,fd),e(xt,nn),e(nn,gd),e(xt,_d),e(Oe,bd),e(Oe,St),e(St,kd),e(St,_s),e(_s,Td),e(St,wd),e(St,bs),e(bs,yd),e(St,vd),e(Oe,Ed),y(ro,Oe,null),_(o,gr,g),_(o,Mt,g),e(Mt,io),e(io,oa),y(sn,oa,null),e(Mt,qd),e(Mt,na),e(na,$d),_(o,_r,g),_(o,C,g),y(an,C,null),e(C,Ld),e(C,sa),e(sa,Dd),e(C,zd),e(C,aa),e(aa,Fd),e(C,xd),y(lo,C,null),e(C,Sd),e(C,rn),e(rn,Md),e(rn,ra),e(ra,Od),e(rn,Cd),e(C,jd),y(co,C,null),e(C,Pd),e(C,dn),e(dn,Nd),e(dn,ks),e(ks,Ad),e(dn,Id),e(C,Gd),e(C,mt),y(ln,mt,null),e(mt,Bd),e(mt,ia),e(ia,Hd),e(mt,Qd),e(mt,cn),e(cn,Ts),e(Ts,Wd),e(Ts,da),e(da,Ud),e(cn,Rd),e(cn,ws),e(ws,Vd),e(ws,la),e(la,Kd),e(C,Xd),e(C,ho),y(hn,ho,null),e(ho,Jd),e(ho,pn),e(pn,Zd),e(pn,ca),e(ca,Yd),e(pn,el),e(C,tl),e(C,po),y(un,po,null),e(po,ol),e(po,ha),e(ha,nl),e(C,sl),e(C,ys),y(mn,ys,null),_(o,br,g),_(o,Ot,g),e(Ot,uo),e(uo,pa),y(fn,pa,null),e(Ot,al),e(Ot,ua),e(ua,rl),_(o,kr,g),_(o,H,g),y(gn,H,null),e(H,il),e(H,_n),e(_n,dl),e(_n,ma),e(ma,ll),e(_n,cl),e(H,hl),e(H,fa),e(fa,pl),e(H,ul),y(mo,H,null),e(H,ml),e(H,bn),e(bn,fl),e(bn,ga),e(ga,gl),e(bn,_l),e(H,bl),y(fo,H,null),e(H,kl),e(H,kn),e(kn,Tl),e(kn,vs),e(vs,wl),e(kn,yl),e(H,vl),e(H,go),y(Tn,go,null),e(go,El),e(go,_a),e(_a,ql),_(o,Tr,g),_(o,Ct,g),e(Ct,_o),e(_o,ba),y(wn,ba,null),e(Ct,$l),e(Ct,ka),e(ka,Ll),_(o,wr,g),_(o,jt,g),y(yn,jt,null),e(jt,Dl),e(jt,Ta),e(Ta,zl),_(o,yr,g),_(o,Pt,g),y(vn,Pt,null),e(Pt,Fl),e(Pt,wa),e(wa,xl),_(o,vr,g),_(o,Nt,g),y(En,Nt,null),e(Nt,Sl),e(Nt,ya),e(ya,Ml),_(o,Er,g),_(o,At,g),y(qn,At,null),e(At,Ol),e(At,va),e(va,Cl),_(o,qr,g),_(o,It,g),y($n,It,null),e(It,jl),e(It,Ea),e(Ea,Pl),_(o,$r,g),_(o,Gt,g),y(Ln,Gt,null),e(Gt,Nl),e(Gt,qa),e(qa,Al),_(o,Lr,g),_(o,Bt,g),y(Dn,Bt,null),e(Bt,Il),e(Bt,$a),e($a,Gl),_(o,Dr,g),_(o,Ht,g),y(zn,Ht,null),e(Ht,Bl),e(Ht,La),e(La,Hl),_(o,zr,g),_(o,Qt,g),e(Qt,bo),e(bo,Da),y(Fn,Da,null),e(Qt,Ql),e(Qt,za),e(za,Wl),_(o,Fr,g),_(o,Ce,g),y(xn,Ce,null),e(Ce,Ul),e(Ce,Sn),e(Sn,Rl),e(Sn,Es),e(Es,Vl),e(Sn,Kl),e(Ce,Xl),e(Ce,Mn),e(Mn,Jl),e(Mn,On),e(On,Zl),e(Mn,Yl),e(Ce,ec),e(Ce,Be),y(Cn,Be,null),e(Be,tc),e(Be,Wt),e(Wt,oc),e(Wt,qs),e(qs,nc),e(Wt,sc),e(Wt,Fa),e(Fa,ac),e(Wt,rc),e(Be,ic),y(ko,Be,null),e(Be,dc),y(To,Be,null),_(o,xr,g),_(o,Ut,g),e(Ut,wo),e(wo,xa),y(jn,xa,null),e(Ut,lc),e(Ut,Sa),e(Sa,cc),_(o,Sr,g),_(o,je,g),y(Pn,je,null),e(je,hc),e(je,Nn),e(Nn,pc),e(Nn,$s),e($s,uc),e(Nn,mc),e(je,fc),e(je,An),e(An,gc),e(An,In),e(In,_c),e(An,bc),e(je,kc),e(je,ve),y(Gn,ve,null),e(ve,Tc),e(ve,Rt),e(Rt,wc),e(Rt,Ls),e(Ls,yc),e(Rt,vc),e(Rt,Ma),e(Ma,Ec),e(Rt,qc),e(ve,$c),y(yo,ve,null),e(ve,Lc),y(vo,ve,null),e(ve,Dc),y(Eo,ve,null),_(o,Mr,g),_(o,Vt,g),e(Vt,qo),e(qo,Oa),y(Bn,Oa,null),e(Vt,zc),e(Vt,Ca),e(Ca,Fc),_(o,Or,g),_(o,me,g),y(Hn,me,null),e(me,xc),e(me,ja),e(ja,Sc),e(me,Mc),e(me,Qn),e(Qn,Oc),e(Qn,Ds),e(Ds,Cc),e(Qn,jc),e(me,Pc),e(me,Wn),e(Wn,Nc),e(Wn,Un),e(Un,Ac),e(Wn,Ic),e(me,Gc),e(me,J),y(Rn,J,null),e(J,Bc),e(J,Kt),e(Kt,Hc),e(Kt,zs),e(zs,Qc),e(Kt,Wc),e(Kt,Pa),e(Pa,Uc),e(Kt,Rc),e(J,Vc),y($o,J,null),e(J,Kc),y(Lo,J,null),e(J,Xc),y(Do,J,null),e(J,Jc),y(zo,J,null),e(J,Zc),y(Fo,J,null),_(o,Cr,g),_(o,Xt,g),e(Xt,xo),e(xo,Na),y(Vn,Na,null),e(Xt,Yc),e(Xt,Aa),e(Aa,eh),_(o,jr,g),_(o,fe,g),y(Kn,fe,null),e(fe,th),e(fe,Jt),e(Jt,oh),e(Jt,Ia),e(Ia,nh),e(Jt,sh),e(Jt,Ga),e(Ga,ah),e(Jt,rh),e(fe,ih),e(fe,Xn),e(Xn,dh),e(Xn,Fs),e(Fs,lh),e(Xn,ch),e(fe,hh),e(fe,Jn),e(Jn,ph),e(Jn,Zn),e(Zn,uh),e(Jn,mh),e(fe,fh),e(fe,Ee),y(Yn,Ee,null),e(Ee,gh),e(Ee,Zt),e(Zt,_h),e(Zt,xs),e(xs,bh),e(Zt,kh),e(Zt,Ba),e(Ba,Th),e(Zt,wh),e(Ee,yh),y(So,Ee,null),e(Ee,vh),y(Mo,Ee,null),e(Ee,Eh),y(Oo,Ee,null),_(o,Pr,g),_(o,Yt,g),e(Yt,Co),e(Co,Ha),y(es,Ha,null),e(Yt,qh),e(Yt,Qa),e(Qa,$h),_(o,Nr,g),_(o,ge,g),y(ts,ge,null),e(ge,Lh),e(ge,os),e(os,Dh),e(os,Ss),e(Ss,zh),e(os,Fh),e(ge,xh),e(ge,ns),e(ns,Sh),e(ns,ss),e(ss,Mh),e(ns,Oh),e(ge,Ch),y(jo,ge,null),e(ge,jh),e(ge,He),y(as,He,null),e(He,Ph),e(He,eo),e(eo,Nh),e(eo,Ms),e(Ms,Ah),e(eo,Ih),e(eo,Wa),e(Wa,Gh),e(eo,Bh),e(He,Hh),y(Po,He,null),e(He,Qh),y(No,He,null),_(o,Ar,g),_(o,to,g),e(to,Ao),e(Ao,Ua),y(rs,Ua,null),e(to,Wh),e(to,Ra),e(Ra,Uh),_(o,Ir,g),_(o,_e,g),y(is,_e,null),e(_e,Rh),e(_e,ds),e(ds,Vh),e(ds,Os),e(Os,Kh),e(ds,Xh),e(_e,Jh),e(_e,ls),e(ls,Zh),e(ls,cs),e(cs,Yh),e(ls,ep),e(_e,tp),y(Io,_e,null),e(_e,op),e(_e,Qe),y(hs,Qe,null),e(Qe,np),e(Qe,oo),e(oo,sp),e(oo,Cs),e(Cs,ap),e(oo,rp),e(oo,Va),e(Va,ip),e(oo,dp),e(Qe,lp),y(Go,Qe,null),e(Qe,cp),y(Bo,Qe,null),Gr=!0},p(o,[g]){const ps={};g&2&&(ps.$$scope={dirty:g,ctx:o}),ro.$set(ps);const Ka={};g&2&&(Ka.$$scope={dirty:g,ctx:o}),lo.$set(Ka);const Xa={};g&2&&(Xa.$$scope={dirty:g,ctx:o}),co.$set(Xa);const Ja={};g&2&&(Ja.$$scope={dirty:g,ctx:o}),mo.$set(Ja);const us={};g&2&&(us.$$scope={dirty:g,ctx:o}),fo.$set(us);const Za={};g&2&&(Za.$$scope={dirty:g,ctx:o}),ko.$set(Za);const Ya={};g&2&&(Ya.$$scope={dirty:g,ctx:o}),To.$set(Ya);const er={};g&2&&(er.$$scope={dirty:g,ctx:o}),yo.$set(er);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:o}),vo.$set(ms);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:o}),Eo.$set(tr);const or={};g&2&&(or.$$scope={dirty:g,ctx:o}),$o.$set(or);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:o}),Lo.$set(nr);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:o}),Do.$set(sr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:o}),zo.$set(ar);const ae={};g&2&&(ae.$$scope={dirty:g,ctx:o}),Fo.$set(ae);const Z={};g&2&&(Z.$$scope={dirty:g,ctx:o}),So.$set(Z);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:o}),Mo.$set(rr);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:o}),Oo.$set(ir);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:o}),jo.$set(dr);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:o}),Po.$set(lr);const cr={};g&2&&(cr.$$scope={dirty:g,ctx:o}),No.$set(cr);const hr={};g&2&&(hr.$$scope={dirty:g,ctx:o}),Io.$set(hr);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:o}),Go.$set(pr);const no={};g&2&&(no.$$scope={dirty:g,ctx:o}),Bo.$set(no)},i(o){Gr||(v(d.$$.fragment,o),v(z.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(ro.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(lo.$$.fragment,o),v(co.$$.fragment,o),v(ln.$$.fragment,o),v(hn.$$.fragment,o),v(un.$$.fragment,o),v(mn.$$.fragment,o),v(fn.$$.fragment,o),v(gn.$$.fragment,o),v(mo.$$.fragment,o),v(fo.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(vn.$$.fragment,o),v(En.$$.fragment,o),v(qn.$$.fragment,o),v($n.$$.fragment,o),v(Ln.$$.fragment,o),v(Dn.$$.fragment,o),v(zn.$$.fragment,o),v(Fn.$$.fragment,o),v(xn.$$.fragment,o),v(Cn.$$.fragment,o),v(ko.$$.fragment,o),v(To.$$.fragment,o),v(jn.$$.fragment,o),v(Pn.$$.fragment,o),v(Gn.$$.fragment,o),v(yo.$$.fragment,o),v(vo.$$.fragment,o),v(Eo.$$.fragment,o),v(Bn.$$.fragment,o),v(Hn.$$.fragment,o),v(Rn.$$.fragment,o),v($o.$$.fragment,o),v(Lo.$$.fragment,o),v(Do.$$.fragment,o),v(zo.$$.fragment,o),v(Fo.$$.fragment,o),v(Vn.$$.fragment,o),v(Kn.$$.fragment,o),v(Yn.$$.fragment,o),v(So.$$.fragment,o),v(Mo.$$.fragment,o),v(Oo.$$.fragment,o),v(es.$$.fragment,o),v(ts.$$.fragment,o),v(jo.$$.fragment,o),v(as.$$.fragment,o),v(Po.$$.fragment,o),v(No.$$.fragment,o),v(rs.$$.fragment,o),v(is.$$.fragment,o),v(Io.$$.fragment,o),v(hs.$$.fragment,o),v(Go.$$.fragment,o),v(Bo.$$.fragment,o),Gr=!0)},o(o){E(d.$$.fragment,o),E(z.$$.fragment,o),E(tn.$$.fragment,o),E(on.$$.fragment,o),E(ro.$$.fragment,o),E(sn.$$.fragment,o),E(an.$$.fragment,o),E(lo.$$.fragment,o),E(co.$$.fragment,o),E(ln.$$.fragment,o),E(hn.$$.fragment,o),E(un.$$.fragment,o),E(mn.$$.fragment,o),E(fn.$$.fragment,o),E(gn.$$.fragment,o),E(mo.$$.fragment,o),E(fo.$$.fragment,o),E(Tn.$$.fragment,o),E(wn.$$.fragment,o),E(yn.$$.fragment,o),E(vn.$$.fragment,o),E(En.$$.fragment,o),E(qn.$$.fragment,o),E($n.$$.fragment,o),E(Ln.$$.fragment,o),E(Dn.$$.fragment,o),E(zn.$$.fragment,o),E(Fn.$$.fragment,o),E(xn.$$.fragment,o),E(Cn.$$.fragment,o),E(ko.$$.fragment,o),E(To.$$.fragment,o),E(jn.$$.fragment,o),E(Pn.$$.fragment,o),E(Gn.$$.fragment,o),E(yo.$$.fragment,o),E(vo.$$.fragment,o),E(Eo.$$.fragment,o),E(Bn.$$.fragment,o),E(Hn.$$.fragment,o),E(Rn.$$.fragment,o),E($o.$$.fragment,o),E(Lo.$$.fragment,o),E(Do.$$.fragment,o),E(zo.$$.fragment,o),E(Fo.$$.fragment,o),E(Vn.$$.fragment,o),E(Kn.$$.fragment,o),E(Yn.$$.fragment,o),E(So.$$.fragment,o),E(Mo.$$.fragment,o),E(Oo.$$.fragment,o),E(es.$$.fragment,o),E(ts.$$.fragment,o),E(jo.$$.fragment,o),E(as.$$.fragment,o),E(Po.$$.fragment,o),E(No.$$.fragment,o),E(rs.$$.fragment,o),E(is.$$.fragment,o),E(Io.$$.fragment,o),E(hs.$$.fragment,o),E(Go.$$.fragment,o),E(Bo.$$.fragment,o),Gr=!1},d(o){t(l),o&&t(b),o&&t(p),q(d),o&&t(A),o&&t(P),q(z),o&&t(Pe),o&&t(Q),o&&t(Ne),o&&t(K),o&&t(Ae),o&&t(X),o&&t(be),o&&t(M),o&&t(Ie),o&&t(x),o&&t(ur),o&&t(so),o&&t(mr),o&&t(Ft),q(tn),o&&t(fr),o&&t(Oe),q(on),q(ro),o&&t(gr),o&&t(Mt),q(sn),o&&t(_r),o&&t(C),q(an),q(lo),q(co),q(ln),q(hn),q(un),q(mn),o&&t(br),o&&t(Ot),q(fn),o&&t(kr),o&&t(H),q(gn),q(mo),q(fo),q(Tn),o&&t(Tr),o&&t(Ct),q(wn),o&&t(wr),o&&t(jt),q(yn),o&&t(yr),o&&t(Pt),q(vn),o&&t(vr),o&&t(Nt),q(En),o&&t(Er),o&&t(At),q(qn),o&&t(qr),o&&t(It),q($n),o&&t($r),o&&t(Gt),q(Ln),o&&t(Lr),o&&t(Bt),q(Dn),o&&t(Dr),o&&t(Ht),q(zn),o&&t(zr),o&&t(Qt),q(Fn),o&&t(Fr),o&&t(Ce),q(xn),q(Cn),q(ko),q(To),o&&t(xr),o&&t(Ut),q(jn),o&&t(Sr),o&&t(je),q(Pn),q(Gn),q(yo),q(vo),q(Eo),o&&t(Mr),o&&t(Vt),q(Bn),o&&t(Or),o&&t(me),q(Hn),q(Rn),q($o),q(Lo),q(Do),q(zo),q(Fo),o&&t(Cr),o&&t(Xt),q(Vn),o&&t(jr),o&&t(fe),q(Kn),q(Yn),q(So),q(Mo),q(Oo),o&&t(Pr),o&&t(Yt),q(es),o&&t(Nr),o&&t(ge),q(ts),q(jo),q(as),q(Po),q(No),o&&t(Ar),o&&t(to),q(rs),o&&t(Ir),o&&t(_e),q(is),q(Io),q(hs),q(Go),q(Bo)}}}const Pm={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Nm(L){return hm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wm extends im{constructor(l){super();dm(this,l,Nm,jm,lm,{})}}export{Wm as default,Pm as metadata};
