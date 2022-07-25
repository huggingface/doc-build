import{S as Ro,i as Go,s as Yo,e as u,k as d,w,t as f,M as Jo,c,d as o,m as b,x as j,a as h,h as m,b as q,G as a,g as i,y as v,o as k,p as fe,q as g,B as y,v as Qo,n as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Bo}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Wo}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Hs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Uo}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as Ko}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Vo($){let n,r;return n=new Uo({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"}]}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function Xo($){let n,r;return n=new Uo({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"}]}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function Zo($){let n,r;return n=new Wo({props:{id:"ROxrFOEbsQE"}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function ea($){let n,r;return n=new Wo({props:{id:"M6adb1j2jPI"}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function sa($){let n,r,s,p;return n=new E({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = tf.constant(ids)
# This line will fail.
model(input_ids)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = tf.constant(ids)
<span class="hljs-comment"># This line will fail.</span>
model(input_ids)`}}),s=new E({props:{code:"InvalidArgumentError: Input to reshape is a tensor with 14 values, but the requested shape has 196 [Op:Reshape]",highlighted:'InvalidArgumentError: Input to reshape <span class="hljs-keyword">is</span> a tensor <span class="hljs-keyword">with</span> <span class="hljs-number">14</span> values, but the requested shape has <span class="hljs-number">196</span> [Op:Reshape]'}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function ta($){let n,r,s,p;return n=new E({props:{code:`import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = torch.tensor(ids)
# This line will fail.
model(input_ids)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = torch.tensor(ids)
<span class="hljs-comment"># This line will fail.</span>
model(input_ids)`}}),s=new E({props:{code:"IndexError: Dimension out of range (expected to be in range of [-1, 0], but got 1)",highlighted:'IndexError: Dimension out of <span class="hljs-built_in">range</span> (expected to be <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span> of [-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>], but got <span class="hljs-number">1</span>)'}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function na($){let n,r,s,p;return n=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="tf")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`<tf.Tensor: shape=(1, 16), dtype=int32, numpy=
array([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662,
        12172,  2607,  2026,  2878,  2166,  1012,   102]], dtype=int32)>`,highlighted:`&lt;tf.Tensor: shape=(<span class="hljs-number">1</span>, <span class="hljs-number">16</span>), dtype=int32, numpy=
array([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>,
        <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]], dtype=int32)&gt;`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function oa($){let n,r,s,p;return n=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="pt")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,
          2607,  2026,  2878,  2166,  1012,   102]])`,highlighted:`tensor([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,
          <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]])`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function aa($){let n,r;return n=new E({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)

input_ids = tf.constant([ids])
print("Input IDs:", input_ids)

output = model(input_ids)
print("Logits:", output.logits)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)

input_ids = tf.constant([ids])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Input IDs:&quot;</span>, input_ids)

output = model(input_ids)
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function la($){let n,r;return n=new E({props:{code:`import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)

input_ids = torch.tensor([ids])
print("Input IDs:", input_ids)

output = model(input_ids)
print("Logits:", output.logits)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)

input_ids = torch.tensor([ids])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Input IDs:&quot;</span>, input_ids)

output = model(input_ids)
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function ra($){let n,r;return n=new E({props:{code:`Input IDs: tf.Tensor(
[[ 1045  1005  2310  2042  3403  2005  1037 17662 12172  2607  2026  2878
   2166  1012]], shape=(1, 14), dtype=int32)
Logits: tf.Tensor([[-2.7276208  2.8789377]], shape=(1, 2), dtype=float32)`,highlighted:`Input IDs: tf.Tensor(
[[ <span class="hljs-number">1045</span>  <span class="hljs-number">1005</span>  <span class="hljs-number">2310</span>  <span class="hljs-number">2042</span>  <span class="hljs-number">3403</span>  <span class="hljs-number">2005</span>  <span class="hljs-number">1037</span> <span class="hljs-number">17662</span> <span class="hljs-number">12172</span>  <span class="hljs-number">2607</span>  <span class="hljs-number">2026</span>  <span class="hljs-number">2878</span>
   <span class="hljs-number">2166</span>  <span class="hljs-number">1012</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">14</span>), dtype=int32)
Logits: tf.Tensor([[-<span class="hljs-number">2.7276208</span>  <span class="hljs-number">2.8789377</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function ia($){let n,r;return n=new E({props:{code:`Input IDs: [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]
Logits: [[-2.7276,  2.8789]]`,highlighted:`Input IDs: [[ <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>]]
Logits: [[-<span class="hljs-number">2.7276</span>,  <span class="hljs-number">2.8789</span>]]`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function pa($){let n,r,s,p,t,_,T,z;return{c(){n=u("p"),r=f("\u270F\uFE0F "),s=u("strong"),p=f("Try it out!"),t=f(" Convert this "),_=u("code"),T=f("batched_ids"),z=f(" list into a tensor and pass it through your model. Check that you obtain the same logits as before (but twice)!")},l(K){n=c(K,"P",{});var A=h(n);r=m(A,"\u270F\uFE0F "),s=c(A,"STRONG",{});var Ne=h(s);p=m(Ne,"Try it out!"),Ne.forEach(o),t=m(A," Convert this "),_=c(A,"CODE",{});var de=h(_);T=m(de,"batched_ids"),de.forEach(o),z=m(A," list into a tensor and pass it through your model. Check that you obtain the same logits as before (but twice)!"),A.forEach(o)},m(K,A){i(K,n,A),a(n,r),a(n,s),a(s,p),a(n,t),a(n,_),a(_,T),a(n,z)},d(K){K&&o(n)}}}function ua($){let n,r,s,p;return n=new E({props:{code:`model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence1_ids = [[200, 200, 200]]
sequence2_ids = [[200, 200]]
batched_ids = [
    [200, 200, 200],
    [200, 200, tokenizer.pad_token_id],
]

print(model(tf.constant(sequence1_ids)).logits)
print(model(tf.constant(sequence2_ids)).logits)
print(model(tf.constant(batched_ids)).logits)`,highlighted:`model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence1_ids = [[<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>]]
sequence2_ids = [[<span class="hljs-number">200</span>, <span class="hljs-number">200</span>]]
batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, tokenizer.pad_token_id],
]

<span class="hljs-built_in">print</span>(model(tf.constant(sequence1_ids)).logits)
<span class="hljs-built_in">print</span>(model(tf.constant(sequence2_ids)).logits)
<span class="hljs-built_in">print</span>(model(tf.constant(batched_ids)).logits)`}}),s=new E({props:{code:`tf.Tensor([[ 1.5693678 -1.3894581]], shape=(1, 2), dtype=float32)
tf.Tensor([[ 0.5803005  -0.41252428]], shape=(1, 2), dtype=float32)
tf.Tensor(
[[ 1.5693681 -1.3894582]
 [ 1.3373486 -1.2163193]], shape=(2, 2), dtype=float32)`,highlighted:`tf.Tensor([[ <span class="hljs-number">1.5693678</span> -<span class="hljs-number">1.3894581</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)
tf.Tensor([[ <span class="hljs-number">0.5803005</span>  -<span class="hljs-number">0.41252428</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)
tf.Tensor(
[[ <span class="hljs-number">1.5693681</span> -<span class="hljs-number">1.3894582</span>]
 [ <span class="hljs-number">1.3373486</span> -<span class="hljs-number">1.2163193</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function ca($){let n,r,s,p;return n=new E({props:{code:`model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence1_ids = [[200, 200, 200]]
sequence2_ids = [[200, 200]]
batched_ids = [
    [200, 200, 200],
    [200, 200, tokenizer.pad_token_id],
]

print(model(torch.tensor(sequence1_ids)).logits)
print(model(torch.tensor(sequence2_ids)).logits)
print(model(torch.tensor(batched_ids)).logits)`,highlighted:`model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence1_ids = [[<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>]]
sequence2_ids = [[<span class="hljs-number">200</span>, <span class="hljs-number">200</span>]]
batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, tokenizer.pad_token_id],
]

<span class="hljs-built_in">print</span>(model(torch.tensor(sequence1_ids)).logits)
<span class="hljs-built_in">print</span>(model(torch.tensor(sequence2_ids)).logits)
<span class="hljs-built_in">print</span>(model(torch.tensor(batched_ids)).logits)`}}),s=new E({props:{code:`tensor([[ 1.5694, -1.3895]], grad_fn=<AddmmBackward>)
tensor([[ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)
tensor([[ 1.5694, -1.3895],
        [ 1.3373, -1.2163]], grad_fn=<AddmmBackward>)`,highlighted:`tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>]], grad_fn=&lt;AddmmBackward&gt;)
tensor([[ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)
tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>],
        [ <span class="hljs-number">1.3373</span>, -<span class="hljs-number">1.2163</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function ha($){let n,r,s,p;return n=new E({props:{code:`batched_ids = [
    [200, 200, 200],
    [200, 200, tokenizer.pad_token_id],
]

attention_mask = [
    [1, 1, 1],
    [1, 1, 0],
]

outputs = model(tf.constant(batched_ids), attention_mask=tf.constant(attention_mask))
print(outputs.logits)`,highlighted:`batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, tokenizer.pad_token_id],
]

attention_mask = [
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
]

outputs = model(tf.constant(batched_ids), attention_mask=tf.constant(attention_mask))
<span class="hljs-built_in">print</span>(outputs.logits)`}}),s=new E({props:{code:`tf.Tensor(
[[ 1.5693681  -1.3894582 ]
 [ 0.5803021  -0.41252586]], shape=(2, 2), dtype=float32)`,highlighted:`tf.Tensor(
[[ <span class="hljs-number">1.5693681</span>  -<span class="hljs-number">1.3894582</span> ]
 [ <span class="hljs-number">0.5803021</span>  -<span class="hljs-number">0.41252586</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function fa($){let n,r,s,p;return n=new E({props:{code:`batched_ids = [
    [200, 200, 200],
    [200, 200, tokenizer.pad_token_id],
]

attention_mask = [
    [1, 1, 1],
    [1, 1, 0],
]

outputs = model(torch.tensor(batched_ids), attention_mask=torch.tensor(attention_mask))
print(outputs.logits)`,highlighted:`batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, tokenizer.pad_token_id],
]

attention_mask = [
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
]

outputs = model(torch.tensor(batched_ids), attention_mask=torch.tensor(attention_mask))
<span class="hljs-built_in">print</span>(outputs.logits)`}}),s=new E({props:{code:`tensor([[ 1.5694, -1.3895],
        [ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)`,highlighted:`tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>],
        [ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&o(r),y(s,t)}}}function ma($){let n,r,s,p,t;return{c(){n=u("p"),r=f("\u270F\uFE0F "),s=u("strong"),p=f("Try it out!"),t=f(" Apply the tokenization manually on the two sentences used in section 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D and \u201CI hate this so much!\u201D). Pass them through the model and check that you get the same logits as in section 2. Now batch them together using the padding token, then create the proper attention mask. Check that you obtain the same results when going through the model!")},l(_){n=c(_,"P",{});var T=h(n);r=m(T,"\u270F\uFE0F "),s=c(T,"STRONG",{});var z=h(s);p=m(z,"Try it out!"),z.forEach(o),t=m(T," Apply the tokenization manually on the two sentences used in section 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D and \u201CI hate this so much!\u201D). Pass them through the model and check that you get the same logits as in section 2. Now batch them together using the padding token, then create the proper attention mask. Check that you obtain the same results when going through the model!"),T.forEach(o)},m(_,T){i(_,n,T),a(n,r),a(n,s),a(s,p),a(n,t)},d(_){_&&o(n)}}}function da($){let n,r,s,p,t,_,T,z,K,A,Ne,de,x,F,He,S,M,Oe,Be,Pt,Os,I,bs,xt,Ft,be,St,_s,Mt,Ct,Lt,ks,Dt,Nt,gs,Ht,Bs,We,Ot,Ws,V,se,$s,_e,Bt,ws,Wt,Us,Ue,Ut,Rs,C,L,Re,Ge,Rt,Gs,te,Gt,js,Yt,Jt,Ys,D,N,Ye,Je,Qt,Js,H,O,Qe,Ke,Kt,Qs,B,W,Ve,ke,vs,Vt,Xt,Ks,ge,Vs,Xe,Zt,Xs,ne,Zs,oe,en,ys,sn,tn,et,X,ae,qs,$e,nn,Es,on,st,Ze,an,tt,we,nt,J,ln,Ts,rn,pn,zs,un,cn,ot,je,at,le,hn,As,fn,mn,lt,U,R,es,ss,dn,rt,re,bn,Is,_n,kn,it,Z,ie,Ps,ve,gn,xs,$n,pt,ye,Fs,wn,jn,ut,ts,vn,ct,G,Y,ns,os,yn,ht,as,qn,ft,pe,mt,ee,ue,Ss,qe,En,Ms,Tn,dt,ls,zn,bt,ce,Cs,An,In,Ls,Pn,_t,Q,xn,Ee,Fn,Sn,Te,Mn,Cn,kt,he,Ln,Ds,Dn,Nn,gt,ze,$t;s=new Ko({props:{fw:$[0]}}),z=new Hs({});const Bn=[Xo,Vo],Ae=[];function Wn(e,l){return e[0]==="pt"?0:1}x=Wn($),F=Ae[x]=Bn[x]($);const Un=[ea,Zo],Ie=[];function Rn(e,l){return e[0]==="pt"?0:1}S=Rn($),M=Ie[S]=Un[S]($),_e=new Hs({});const Gn=[ta,sa],Pe=[];function Yn(e,l){return e[0]==="pt"?0:1}C=Yn($),L=Pe[C]=Gn[C]($);const Jn=[oa,na],xe=[];function Qn(e,l){return e[0]==="pt"?0:1}D=Qn($),N=xe[D]=Jn[D]($);const Kn=[la,aa],Fe=[];function Vn(e,l){return e[0]==="pt"?0:1}H=Vn($),O=Fe[H]=Kn[H]($);const Xn=[ia,ra],Se=[];function Zn(e,l){return e[0]==="pt"?0:1}B=Zn($),W=Se[B]=Xn[B]($),ge=new E({props:{code:"batched_ids = [ids, ids]",highlighted:'<span class="hljs-attr">batched_ids</span> = [ids, ids]'}}),ne=new Bo({props:{$$slots:{default:[pa]},$$scope:{ctx:$}}}),$e=new Hs({}),we=new E({props:{code:`batched_ids = [
    [200, 200, 200],
    [200, 200]
]`,highlighted:`batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>]
]`}}),je=new E({props:{code:`padding_id = 100

batched_ids = [
    [200, 200, 200],
    [200, 200, padding_id],
]`,highlighted:`padding_id = <span class="hljs-number">100</span>

batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, padding_id],
]`}});const eo=[ca,ua],Me=[];function so(e,l){return e[0]==="pt"?0:1}U=so($),R=Me[U]=eo[U]($),ve=new Hs({});const to=[fa,ha],Ce=[];function no(e,l){return e[0]==="pt"?0:1}return G=no($),Y=Ce[G]=to[G]($),pe=new Bo({props:{$$slots:{default:[ma]},$$scope:{ctx:$}}}),qe=new Hs({}),ze=new E({props:{code:"sequence = sequence[:max_sequence_length]",highlighted:"sequence = sequence[:max_sequence_length]"}}),{c(){n=u("meta"),r=d(),w(s.$$.fragment),p=d(),t=u("h1"),_=u("a"),T=u("span"),w(z.$$.fragment),K=d(),A=u("span"),Ne=f("Handling multiple sequences"),de=d(),F.c(),He=d(),M.c(),Oe=d(),Be=u("p"),Pt=f("In the previous section, we explored the simplest of use cases: doing inference on a single sequence of a small length. However, some questions emerge already:"),Os=d(),I=u("ul"),bs=u("li"),xt=f("How do we handle multiple sequences?"),Ft=d(),be=u("li"),St=f("How do we handle multiple sequences "),_s=u("em"),Mt=f("of different lengths"),Ct=f("?"),Lt=d(),ks=u("li"),Dt=f("Are vocabulary indices the only inputs that allow a model to work well?"),Nt=d(),gs=u("li"),Ht=f("Is there such a thing as too long a sequence?"),Bs=d(),We=u("p"),Ot=f("Let\u2019s see what kinds of problems these questions pose, and how we can solve them using the \u{1F917} Transformers API."),Ws=d(),V=u("h2"),se=u("a"),$s=u("span"),w(_e.$$.fragment),Bt=d(),ws=u("span"),Wt=f("Models expect a batch of inputs"),Us=d(),Ue=u("p"),Ut=f("In the previous exercise you saw how sequences get translated into lists of numbers. Let\u2019s convert this list of numbers to a tensor and send it to the model:"),Rs=d(),L.c(),Re=d(),Ge=u("p"),Rt=f("Oh no! Why did this fail? \u201CWe followed the steps from the pipeline in section 2."),Gs=d(),te=u("p"),Gt=f("The problem is that we sent a single sequence to the model, whereas \u{1F917} Transformers models expect multiple sentences by default. Here we tried to do everything the tokenizer did behind the scenes when we applied it to a "),js=u("code"),Yt=f("sequence"),Jt=f(", but if you look closely, you\u2019ll see that it didn\u2019t just convert the list of input IDs into a tensor, it added a dimension on top of it:"),Ys=d(),N.c(),Ye=d(),Je=u("p"),Qt=f("Let\u2019s try again and add a new dimension:"),Js=d(),O.c(),Qe=d(),Ke=u("p"),Kt=f("We print the input IDs as well as the resulting logits \u2014 here\u2019s the output:"),Qs=d(),W.c(),Ve=d(),ke=u("p"),vs=u("em"),Vt=f("Batching"),Xt=f(" is the act of sending multiple sentences through the model, all at once. If you only have one sentence, you can just build a batch with a single sequence:"),Ks=d(),w(ge.$$.fragment),Vs=d(),Xe=u("p"),Zt=f("This is a batch of two identical sequences!"),Xs=d(),w(ne.$$.fragment),Zs=d(),oe=u("p"),en=f("Batching allows the model to work when you feed it multiple sentences. Using multiple sequences is just as simple as building a batch with a single sequence. There\u2019s a second issue, though. When you\u2019re trying to batch together two (or more) sentences, they might be of different lengths. If you\u2019ve ever worked with tensors before, you know that they need to be of rectangular shape, so you won\u2019t be able to convert the list of input IDs into a tensor directly. To work around this problem, we usually "),ys=u("em"),sn=f("pad"),tn=f(" the inputs."),et=d(),X=u("h2"),ae=u("a"),qs=u("span"),w($e.$$.fragment),nn=d(),Es=u("span"),on=f("Padding the inputs"),st=d(),Ze=u("p"),an=f("The following list of lists cannot be converted to a tensor:"),tt=d(),w(we.$$.fragment),nt=d(),J=u("p"),ln=f("In order to work around this, we\u2019ll use "),Ts=u("em"),rn=f("padding"),pn=f(" to make our tensors have a rectangular shape. Padding makes sure all our sentences have the same length by adding a special word called the "),zs=u("em"),un=f("padding token"),cn=f(" to the sentences with fewer values. For example, if you have 10 sentences with 10 words and 1 sentence with 20 words, padding will ensure all the sentences have 20 words. In our example, the resulting tensor looks like this:"),ot=d(),w(je.$$.fragment),at=d(),le=u("p"),hn=f("The padding token ID can be found in "),As=u("code"),fn=f("tokenizer.pad_token_id"),mn=f(". Let\u2019s use it and send our two sentences through the model individually and batched together:"),lt=d(),R.c(),es=d(),ss=u("p"),dn=f("There\u2019s something wrong with the logits in our batched predictions: the second row should be the same as the logits for the second sentence, but we\u2019ve got completely different values!"),rt=d(),re=u("p"),bn=f("This is because the key feature of Transformer models is attention layers that "),Is=u("em"),_n=f("contextualize"),kn=f(" each token. These will take into account the padding tokens since they attend to all of the tokens of a sequence. To get the same result when passing individual sentences of different lengths through the model or when passing a batch with the same sentences and padding applied, we need to tell those attention layers to ignore the padding tokens. This is done by using an attention mask."),it=d(),Z=u("h2"),ie=u("a"),Ps=u("span"),w(ve.$$.fragment),gn=d(),xs=u("span"),$n=f("Attention masks"),pt=d(),ye=u("p"),Fs=u("em"),wn=f("Attention masks"),jn=f(" are tensors with the exact same shape as the input IDs tensor, filled with 0s and 1s: 1s indicate the corresponding tokens should be attended to, and 0s indicate the corresponding tokens should not be attended to (i.e., they should be ignored by the attention layers of the model)."),ut=d(),ts=u("p"),vn=f("Let\u2019s complete the previous example with an attention mask:"),ct=d(),Y.c(),ns=d(),os=u("p"),yn=f("Now we get the same logits for the second sentence in the batch."),ht=d(),as=u("p"),qn=f("Notice how the last value of the second sequence is a padding ID, which is a 0 value in the attention mask."),ft=d(),w(pe.$$.fragment),mt=d(),ee=u("h2"),ue=u("a"),Ss=u("span"),w(qe.$$.fragment),En=d(),Ms=u("span"),Tn=f("Longer sequences"),dt=d(),ls=u("p"),zn=f("With Transformer models, there is a limit to the lengths of the sequences we can pass the models. Most models handle sequences of up to 512 or 1024 tokens, and will crash when asked to process longer sequences. There are two solutions to this problem:"),bt=d(),ce=u("ul"),Cs=u("li"),An=f("Use a model with a longer supported sequence length."),In=d(),Ls=u("li"),Pn=f("Truncate your sequences."),_t=d(),Q=u("p"),xn=f("Models have different supported sequence lengths, and some specialize in handling very long sequences. "),Ee=u("a"),Fn=f("Longformer"),Sn=f(" is one example, and another is "),Te=u("a"),Mn=f("LED"),Cn=f(". If you\u2019re working on a task that requires very long sequences, we recommend you take a look at those models."),kt=d(),he=u("p"),Ln=f("Otherwise, we recommend you truncate your sequences by specifying the "),Ds=u("code"),Dn=f("max_sequence_length"),Nn=f(" parameter:"),gt=d(),w(ze.$$.fragment),this.h()},l(e){const l=Jo('[data-svelte="svelte-1phssyn"]',document.head);n=c(l,"META",{name:!0,content:!0}),l.forEach(o),r=b(e),j(s.$$.fragment,e),p=b(e),t=c(e,"H1",{class:!0});var Le=h(t);_=c(Le,"A",{id:!0,class:!0,href:!0});var rs=h(_);T=c(rs,"SPAN",{});var is=h(T);j(z.$$.fragment,is),is.forEach(o),rs.forEach(o),K=b(Le),A=c(Le,"SPAN",{});var ps=h(A);Ne=m(ps,"Handling multiple sequences"),ps.forEach(o),Le.forEach(o),de=b(e),F.l(e),He=b(e),M.l(e),Oe=b(e),Be=c(e,"P",{});var us=h(Be);Pt=m(us,"In the previous section, we explored the simplest of use cases: doing inference on a single sequence of a small length. However, some questions emerge already:"),us.forEach(o),Os=b(e),I=c(e,"UL",{});var P=h(I);bs=c(P,"LI",{});var cs=h(bs);xt=m(cs,"How do we handle multiple sequences?"),cs.forEach(o),Ft=b(P),be=c(P,"LI",{});var De=h(be);St=m(De,"How do we handle multiple sequences "),_s=c(De,"EM",{});var hs=h(_s);Mt=m(hs,"of different lengths"),hs.forEach(o),Ct=m(De,"?"),De.forEach(o),Lt=b(P),ks=c(P,"LI",{});var fs=h(ks);Dt=m(fs,"Are vocabulary indices the only inputs that allow a model to work well?"),fs.forEach(o),Nt=b(P),gs=c(P,"LI",{});var Ns=h(gs);Ht=m(Ns,"Is there such a thing as too long a sequence?"),Ns.forEach(o),P.forEach(o),Bs=b(e),We=c(e,"P",{});var oo=h(We);Ot=m(oo,"Let\u2019s see what kinds of problems these questions pose, and how we can solve them using the \u{1F917} Transformers API."),oo.forEach(o),Ws=b(e),V=c(e,"H2",{class:!0});var wt=h(V);se=c(wt,"A",{id:!0,class:!0,href:!0});var ao=h(se);$s=c(ao,"SPAN",{});var lo=h($s);j(_e.$$.fragment,lo),lo.forEach(o),ao.forEach(o),Bt=b(wt),ws=c(wt,"SPAN",{});var ro=h(ws);Wt=m(ro,"Models expect a batch of inputs"),ro.forEach(o),wt.forEach(o),Us=b(e),Ue=c(e,"P",{});var io=h(Ue);Ut=m(io,"In the previous exercise you saw how sequences get translated into lists of numbers. Let\u2019s convert this list of numbers to a tensor and send it to the model:"),io.forEach(o),Rs=b(e),L.l(e),Re=b(e),Ge=c(e,"P",{});var po=h(Ge);Rt=m(po,"Oh no! Why did this fail? \u201CWe followed the steps from the pipeline in section 2."),po.forEach(o),Gs=b(e),te=c(e,"P",{});var jt=h(te);Gt=m(jt,"The problem is that we sent a single sequence to the model, whereas \u{1F917} Transformers models expect multiple sentences by default. Here we tried to do everything the tokenizer did behind the scenes when we applied it to a "),js=c(jt,"CODE",{});var uo=h(js);Yt=m(uo,"sequence"),uo.forEach(o),Jt=m(jt,", but if you look closely, you\u2019ll see that it didn\u2019t just convert the list of input IDs into a tensor, it added a dimension on top of it:"),jt.forEach(o),Ys=b(e),N.l(e),Ye=b(e),Je=c(e,"P",{});var co=h(Je);Qt=m(co,"Let\u2019s try again and add a new dimension:"),co.forEach(o),Js=b(e),O.l(e),Qe=b(e),Ke=c(e,"P",{});var ho=h(Ke);Kt=m(ho,"We print the input IDs as well as the resulting logits \u2014 here\u2019s the output:"),ho.forEach(o),Qs=b(e),W.l(e),Ve=b(e),ke=c(e,"P",{});var Hn=h(ke);vs=c(Hn,"EM",{});var fo=h(vs);Vt=m(fo,"Batching"),fo.forEach(o),Xt=m(Hn," is the act of sending multiple sentences through the model, all at once. If you only have one sentence, you can just build a batch with a single sequence:"),Hn.forEach(o),Ks=b(e),j(ge.$$.fragment,e),Vs=b(e),Xe=c(e,"P",{});var mo=h(Xe);Zt=m(mo,"This is a batch of two identical sequences!"),mo.forEach(o),Xs=b(e),j(ne.$$.fragment,e),Zs=b(e),oe=c(e,"P",{});var vt=h(oe);en=m(vt,"Batching allows the model to work when you feed it multiple sentences. Using multiple sequences is just as simple as building a batch with a single sequence. There\u2019s a second issue, though. When you\u2019re trying to batch together two (or more) sentences, they might be of different lengths. If you\u2019ve ever worked with tensors before, you know that they need to be of rectangular shape, so you won\u2019t be able to convert the list of input IDs into a tensor directly. To work around this problem, we usually "),ys=c(vt,"EM",{});var bo=h(ys);sn=m(bo,"pad"),bo.forEach(o),tn=m(vt," the inputs."),vt.forEach(o),et=b(e),X=c(e,"H2",{class:!0});var yt=h(X);ae=c(yt,"A",{id:!0,class:!0,href:!0});var _o=h(ae);qs=c(_o,"SPAN",{});var ko=h(qs);j($e.$$.fragment,ko),ko.forEach(o),_o.forEach(o),nn=b(yt),Es=c(yt,"SPAN",{});var go=h(Es);on=m(go,"Padding the inputs"),go.forEach(o),yt.forEach(o),st=b(e),Ze=c(e,"P",{});var $o=h(Ze);an=m($o,"The following list of lists cannot be converted to a tensor:"),$o.forEach(o),tt=b(e),j(we.$$.fragment,e),nt=b(e),J=c(e,"P",{});var ms=h(J);ln=m(ms,"In order to work around this, we\u2019ll use "),Ts=c(ms,"EM",{});var wo=h(Ts);rn=m(wo,"padding"),wo.forEach(o),pn=m(ms," to make our tensors have a rectangular shape. Padding makes sure all our sentences have the same length by adding a special word called the "),zs=c(ms,"EM",{});var jo=h(zs);un=m(jo,"padding token"),jo.forEach(o),cn=m(ms," to the sentences with fewer values. For example, if you have 10 sentences with 10 words and 1 sentence with 20 words, padding will ensure all the sentences have 20 words. In our example, the resulting tensor looks like this:"),ms.forEach(o),ot=b(e),j(je.$$.fragment,e),at=b(e),le=c(e,"P",{});var qt=h(le);hn=m(qt,"The padding token ID can be found in "),As=c(qt,"CODE",{});var vo=h(As);fn=m(vo,"tokenizer.pad_token_id"),vo.forEach(o),mn=m(qt,". Let\u2019s use it and send our two sentences through the model individually and batched together:"),qt.forEach(o),lt=b(e),R.l(e),es=b(e),ss=c(e,"P",{});var yo=h(ss);dn=m(yo,"There\u2019s something wrong with the logits in our batched predictions: the second row should be the same as the logits for the second sentence, but we\u2019ve got completely different values!"),yo.forEach(o),rt=b(e),re=c(e,"P",{});var Et=h(re);bn=m(Et,"This is because the key feature of Transformer models is attention layers that "),Is=c(Et,"EM",{});var qo=h(Is);_n=m(qo,"contextualize"),qo.forEach(o),kn=m(Et," each token. These will take into account the padding tokens since they attend to all of the tokens of a sequence. To get the same result when passing individual sentences of different lengths through the model or when passing a batch with the same sentences and padding applied, we need to tell those attention layers to ignore the padding tokens. This is done by using an attention mask."),Et.forEach(o),it=b(e),Z=c(e,"H2",{class:!0});var Tt=h(Z);ie=c(Tt,"A",{id:!0,class:!0,href:!0});var Eo=h(ie);Ps=c(Eo,"SPAN",{});var To=h(Ps);j(ve.$$.fragment,To),To.forEach(o),Eo.forEach(o),gn=b(Tt),xs=c(Tt,"SPAN",{});var zo=h(xs);$n=m(zo,"Attention masks"),zo.forEach(o),Tt.forEach(o),pt=b(e),ye=c(e,"P",{});var On=h(ye);Fs=c(On,"EM",{});var Ao=h(Fs);wn=m(Ao,"Attention masks"),Ao.forEach(o),jn=m(On," are tensors with the exact same shape as the input IDs tensor, filled with 0s and 1s: 1s indicate the corresponding tokens should be attended to, and 0s indicate the corresponding tokens should not be attended to (i.e., they should be ignored by the attention layers of the model)."),On.forEach(o),ut=b(e),ts=c(e,"P",{});var Io=h(ts);vn=m(Io,"Let\u2019s complete the previous example with an attention mask:"),Io.forEach(o),ct=b(e),Y.l(e),ns=b(e),os=c(e,"P",{});var Po=h(os);yn=m(Po,"Now we get the same logits for the second sentence in the batch."),Po.forEach(o),ht=b(e),as=c(e,"P",{});var xo=h(as);qn=m(xo,"Notice how the last value of the second sequence is a padding ID, which is a 0 value in the attention mask."),xo.forEach(o),ft=b(e),j(pe.$$.fragment,e),mt=b(e),ee=c(e,"H2",{class:!0});var zt=h(ee);ue=c(zt,"A",{id:!0,class:!0,href:!0});var Fo=h(ue);Ss=c(Fo,"SPAN",{});var So=h(Ss);j(qe.$$.fragment,So),So.forEach(o),Fo.forEach(o),En=b(zt),Ms=c(zt,"SPAN",{});var Mo=h(Ms);Tn=m(Mo,"Longer sequences"),Mo.forEach(o),zt.forEach(o),dt=b(e),ls=c(e,"P",{});var Co=h(ls);zn=m(Co,"With Transformer models, there is a limit to the lengths of the sequences we can pass the models. Most models handle sequences of up to 512 or 1024 tokens, and will crash when asked to process longer sequences. There are two solutions to this problem:"),Co.forEach(o),bt=b(e),ce=c(e,"UL",{});var At=h(ce);Cs=c(At,"LI",{});var Lo=h(Cs);An=m(Lo,"Use a model with a longer supported sequence length."),Lo.forEach(o),In=b(At),Ls=c(At,"LI",{});var Do=h(Ls);Pn=m(Do,"Truncate your sequences."),Do.forEach(o),At.forEach(o),_t=b(e),Q=c(e,"P",{});var ds=h(Q);xn=m(ds,"Models have different supported sequence lengths, and some specialize in handling very long sequences. "),Ee=c(ds,"A",{href:!0,rel:!0});var No=h(Ee);Fn=m(No,"Longformer"),No.forEach(o),Sn=m(ds," is one example, and another is "),Te=c(ds,"A",{href:!0,rel:!0});var Ho=h(Te);Mn=m(Ho,"LED"),Ho.forEach(o),Cn=m(ds,". If you\u2019re working on a task that requires very long sequences, we recommend you take a look at those models."),ds.forEach(o),kt=b(e),he=c(e,"P",{});var It=h(he);Ln=m(It,"Otherwise, we recommend you truncate your sequences by specifying the "),Ds=c(It,"CODE",{});var Oo=h(Ds);Dn=m(Oo,"max_sequence_length"),Oo.forEach(o),Nn=m(It," parameter:"),It.forEach(o),gt=b(e),j(ze.$$.fragment,e),this.h()},h(){q(n,"name","hf:doc:metadata"),q(n,"content",JSON.stringify(ba)),q(_,"id","handling-multiple-sequences"),q(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(_,"href","#handling-multiple-sequences"),q(t,"class","relative group"),q(se,"id","models-expect-a-batch-of-inputs"),q(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(se,"href","#models-expect-a-batch-of-inputs"),q(V,"class","relative group"),q(ae,"id","padding-the-inputs"),q(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(ae,"href","#padding-the-inputs"),q(X,"class","relative group"),q(ie,"id","attention-masks"),q(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(ie,"href","#attention-masks"),q(Z,"class","relative group"),q(ue,"id","longer-sequences"),q(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(ue,"href","#longer-sequences"),q(ee,"class","relative group"),q(Ee,"href","https://huggingface.co/transformers/model_doc/longformer.html"),q(Ee,"rel","nofollow"),q(Te,"href","https://huggingface.co/transformers/model_doc/led.html"),q(Te,"rel","nofollow")},m(e,l){a(document.head,n),i(e,r,l),v(s,e,l),i(e,p,l),i(e,t,l),a(t,_),a(_,T),v(z,T,null),a(t,K),a(t,A),a(A,Ne),i(e,de,l),Ae[x].m(e,l),i(e,He,l),Ie[S].m(e,l),i(e,Oe,l),i(e,Be,l),a(Be,Pt),i(e,Os,l),i(e,I,l),a(I,bs),a(bs,xt),a(I,Ft),a(I,be),a(be,St),a(be,_s),a(_s,Mt),a(be,Ct),a(I,Lt),a(I,ks),a(ks,Dt),a(I,Nt),a(I,gs),a(gs,Ht),i(e,Bs,l),i(e,We,l),a(We,Ot),i(e,Ws,l),i(e,V,l),a(V,se),a(se,$s),v(_e,$s,null),a(V,Bt),a(V,ws),a(ws,Wt),i(e,Us,l),i(e,Ue,l),a(Ue,Ut),i(e,Rs,l),Pe[C].m(e,l),i(e,Re,l),i(e,Ge,l),a(Ge,Rt),i(e,Gs,l),i(e,te,l),a(te,Gt),a(te,js),a(js,Yt),a(te,Jt),i(e,Ys,l),xe[D].m(e,l),i(e,Ye,l),i(e,Je,l),a(Je,Qt),i(e,Js,l),Fe[H].m(e,l),i(e,Qe,l),i(e,Ke,l),a(Ke,Kt),i(e,Qs,l),Se[B].m(e,l),i(e,Ve,l),i(e,ke,l),a(ke,vs),a(vs,Vt),a(ke,Xt),i(e,Ks,l),v(ge,e,l),i(e,Vs,l),i(e,Xe,l),a(Xe,Zt),i(e,Xs,l),v(ne,e,l),i(e,Zs,l),i(e,oe,l),a(oe,en),a(oe,ys),a(ys,sn),a(oe,tn),i(e,et,l),i(e,X,l),a(X,ae),a(ae,qs),v($e,qs,null),a(X,nn),a(X,Es),a(Es,on),i(e,st,l),i(e,Ze,l),a(Ze,an),i(e,tt,l),v(we,e,l),i(e,nt,l),i(e,J,l),a(J,ln),a(J,Ts),a(Ts,rn),a(J,pn),a(J,zs),a(zs,un),a(J,cn),i(e,ot,l),v(je,e,l),i(e,at,l),i(e,le,l),a(le,hn),a(le,As),a(As,fn),a(le,mn),i(e,lt,l),Me[U].m(e,l),i(e,es,l),i(e,ss,l),a(ss,dn),i(e,rt,l),i(e,re,l),a(re,bn),a(re,Is),a(Is,_n),a(re,kn),i(e,it,l),i(e,Z,l),a(Z,ie),a(ie,Ps),v(ve,Ps,null),a(Z,gn),a(Z,xs),a(xs,$n),i(e,pt,l),i(e,ye,l),a(ye,Fs),a(Fs,wn),a(ye,jn),i(e,ut,l),i(e,ts,l),a(ts,vn),i(e,ct,l),Ce[G].m(e,l),i(e,ns,l),i(e,os,l),a(os,yn),i(e,ht,l),i(e,as,l),a(as,qn),i(e,ft,l),v(pe,e,l),i(e,mt,l),i(e,ee,l),a(ee,ue),a(ue,Ss),v(qe,Ss,null),a(ee,En),a(ee,Ms),a(Ms,Tn),i(e,dt,l),i(e,ls,l),a(ls,zn),i(e,bt,l),i(e,ce,l),a(ce,Cs),a(Cs,An),a(ce,In),a(ce,Ls),a(Ls,Pn),i(e,_t,l),i(e,Q,l),a(Q,xn),a(Q,Ee),a(Ee,Fn),a(Q,Sn),a(Q,Te),a(Te,Mn),a(Q,Cn),i(e,kt,l),i(e,he,l),a(he,Ln),a(he,Ds),a(Ds,Dn),a(he,Nn),i(e,gt,l),v(ze,e,l),$t=!0},p(e,[l]){const Le={};l&1&&(Le.fw=e[0]),s.$set(Le);let rs=x;x=Wn(e),x!==rs&&(me(),k(Ae[rs],1,1,()=>{Ae[rs]=null}),fe(),F=Ae[x],F||(F=Ae[x]=Bn[x](e),F.c()),g(F,1),F.m(He.parentNode,He));let is=S;S=Rn(e),S!==is&&(me(),k(Ie[is],1,1,()=>{Ie[is]=null}),fe(),M=Ie[S],M||(M=Ie[S]=Un[S](e),M.c()),g(M,1),M.m(Oe.parentNode,Oe));let ps=C;C=Yn(e),C!==ps&&(me(),k(Pe[ps],1,1,()=>{Pe[ps]=null}),fe(),L=Pe[C],L||(L=Pe[C]=Gn[C](e),L.c()),g(L,1),L.m(Re.parentNode,Re));let us=D;D=Qn(e),D!==us&&(me(),k(xe[us],1,1,()=>{xe[us]=null}),fe(),N=xe[D],N||(N=xe[D]=Jn[D](e),N.c()),g(N,1),N.m(Ye.parentNode,Ye));let P=H;H=Vn(e),H!==P&&(me(),k(Fe[P],1,1,()=>{Fe[P]=null}),fe(),O=Fe[H],O||(O=Fe[H]=Kn[H](e),O.c()),g(O,1),O.m(Qe.parentNode,Qe));let cs=B;B=Zn(e),B!==cs&&(me(),k(Se[cs],1,1,()=>{Se[cs]=null}),fe(),W=Se[B],W||(W=Se[B]=Xn[B](e),W.c()),g(W,1),W.m(Ve.parentNode,Ve));const De={};l&2&&(De.$$scope={dirty:l,ctx:e}),ne.$set(De);let hs=U;U=so(e),U!==hs&&(me(),k(Me[hs],1,1,()=>{Me[hs]=null}),fe(),R=Me[U],R||(R=Me[U]=eo[U](e),R.c()),g(R,1),R.m(es.parentNode,es));let fs=G;G=no(e),G!==fs&&(me(),k(Ce[fs],1,1,()=>{Ce[fs]=null}),fe(),Y=Ce[G],Y||(Y=Ce[G]=to[G](e),Y.c()),g(Y,1),Y.m(ns.parentNode,ns));const Ns={};l&2&&(Ns.$$scope={dirty:l,ctx:e}),pe.$set(Ns)},i(e){$t||(g(s.$$.fragment,e),g(z.$$.fragment,e),g(F),g(M),g(_e.$$.fragment,e),g(L),g(N),g(O),g(W),g(ge.$$.fragment,e),g(ne.$$.fragment,e),g($e.$$.fragment,e),g(we.$$.fragment,e),g(je.$$.fragment,e),g(R),g(ve.$$.fragment,e),g(Y),g(pe.$$.fragment,e),g(qe.$$.fragment,e),g(ze.$$.fragment,e),$t=!0)},o(e){k(s.$$.fragment,e),k(z.$$.fragment,e),k(F),k(M),k(_e.$$.fragment,e),k(L),k(N),k(O),k(W),k(ge.$$.fragment,e),k(ne.$$.fragment,e),k($e.$$.fragment,e),k(we.$$.fragment,e),k(je.$$.fragment,e),k(R),k(ve.$$.fragment,e),k(Y),k(pe.$$.fragment,e),k(qe.$$.fragment,e),k(ze.$$.fragment,e),$t=!1},d(e){o(n),e&&o(r),y(s,e),e&&o(p),e&&o(t),y(z),e&&o(de),Ae[x].d(e),e&&o(He),Ie[S].d(e),e&&o(Oe),e&&o(Be),e&&o(Os),e&&o(I),e&&o(Bs),e&&o(We),e&&o(Ws),e&&o(V),y(_e),e&&o(Us),e&&o(Ue),e&&o(Rs),Pe[C].d(e),e&&o(Re),e&&o(Ge),e&&o(Gs),e&&o(te),e&&o(Ys),xe[D].d(e),e&&o(Ye),e&&o(Je),e&&o(Js),Fe[H].d(e),e&&o(Qe),e&&o(Ke),e&&o(Qs),Se[B].d(e),e&&o(Ve),e&&o(ke),e&&o(Ks),y(ge,e),e&&o(Vs),e&&o(Xe),e&&o(Xs),y(ne,e),e&&o(Zs),e&&o(oe),e&&o(et),e&&o(X),y($e),e&&o(st),e&&o(Ze),e&&o(tt),y(we,e),e&&o(nt),e&&o(J),e&&o(ot),y(je,e),e&&o(at),e&&o(le),e&&o(lt),Me[U].d(e),e&&o(es),e&&o(ss),e&&o(rt),e&&o(re),e&&o(it),e&&o(Z),y(ve),e&&o(pt),e&&o(ye),e&&o(ut),e&&o(ts),e&&o(ct),Ce[G].d(e),e&&o(ns),e&&o(os),e&&o(ht),e&&o(as),e&&o(ft),y(pe,e),e&&o(mt),e&&o(ee),y(qe),e&&o(dt),e&&o(ls),e&&o(bt),e&&o(ce),e&&o(_t),e&&o(Q),e&&o(kt),e&&o(he),e&&o(gt),y(ze,e)}}}const ba={local:"handling-multiple-sequences",sections:[{local:"models-expect-a-batch-of-inputs",title:"Models expect a batch of inputs"},{local:"padding-the-inputs",title:"Padding the inputs"},{local:"attention-masks",title:"Attention masks"},{local:"longer-sequences",title:"Longer sequences"}],title:"Handling multiple sequences"};function _a($,n,r){let s="pt";return Qo(()=>{const p=new URLSearchParams(window.location.search);r(0,s=p.get("fw")||"pt")}),[s]}class qa extends Ro{constructor(n){super();Go(this,n,_a,da,Yo,{})}}export{qa as default,ba as metadata};
