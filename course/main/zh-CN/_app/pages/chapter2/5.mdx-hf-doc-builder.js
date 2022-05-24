import{S as St,i as Dt,s as Ct,e as f,k as i,w as g,t as h,M as Mt,c as m,d as l,m as u,x as w,a as d,h as k,b as O,G as c,g as o,y as q,o as _,p as J,q as b,B as v,v as Lt,n as Q}from"../../chunks/vendor-hf-doc-builder.js";import{T as It}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Ft}from"../../chunks/Youtube-hf-doc-builder.js";import{C as y}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Pt}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as xt}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Ht(j){let t,r;return t=new Pt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"}]}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Nt(j){let t,r;return t=new Pt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"}]}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Bt(j){let t,r;return t=new Ft({props:{id:"ROxrFOEbsQE"}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ut(j){let t,r;return t=new Ft({props:{id:"M6adb1j2jPI"}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ot(j){let t,r,e,p;return t=new y({props:{code:`import tensorflow as tf
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
model(input_ids)`}}),e=new y({props:{code:"InvalidArgumentError: Input to reshape is a tensor with 14 values, but the requested shape has 196 [Op:Reshape]",highlighted:'InvalidArgumentError: Input to reshape <span class="hljs-keyword">is</span> a tensor <span class="hljs-keyword">with</span> <span class="hljs-number">14</span> values, but the requested shape has <span class="hljs-number">196</span> [Op:Reshape]'}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function Rt(j){let t,r,e,p;return t=new y({props:{code:`import torch
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
model(input_ids)`}}),e=new y({props:{code:"IndexError: Dimension out of range (expected to be in range of [-1, 0], but got 1)",highlighted:'IndexError: Dimension out of <span class="hljs-built_in">range</span> (expected to be <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span> of [-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>], but got <span class="hljs-number">1</span>)'}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function Gt(j){let t,r,e,p;return t=new y({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="tf")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),e=new y({props:{code:`tf.Tensor: shape=(1, 16), dtype=int32, numpy=
array([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662,
        12172,  2607,  2026,  2878,  2166,  1012,   102]], dtype=int32)>`,highlighted:`tf.Tensor: shape=(<span class="hljs-number">1</span>, <span class="hljs-number">16</span>), dtype=int32, numpy=
array([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>,
        <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]], dtype=int32)&gt;`}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function Yt(j){let t,r,e,p;return t=new y({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="pt")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),e=new y({props:{code:`tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,
          2607,  2026,  2878,  2166,  1012,   102]])`,highlighted:`tensor([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,
          <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]])`}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function Jt(j){let t,r;return t=new y({props:{code:`import tensorflow as tf
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Qt(j){let t,r;return t=new y({props:{code:`import torch
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Kt(j){let t,r;return t=new y({props:{code:`Input IDs: tf.Tensor(
[[ 1045  1005  2310  2042  3403  2005  1037 17662 12172  2607  2026  2878
   2166  1012]], shape=(1, 14), dtype=int32)
Logits: tf.Tensor([[-2.7276208  2.8789377]], shape=(1, 2), dtype=float32)`,highlighted:`Input IDs: tf.Tensor(
[[ <span class="hljs-number">1045</span>  <span class="hljs-number">1005</span>  <span class="hljs-number">2310</span>  <span class="hljs-number">2042</span>  <span class="hljs-number">3403</span>  <span class="hljs-number">2005</span>  <span class="hljs-number">1037</span> <span class="hljs-number">17662</span> <span class="hljs-number">12172</span>  <span class="hljs-number">2607</span>  <span class="hljs-number">2026</span>  <span class="hljs-number">2878</span>
   <span class="hljs-number">2166</span>  <span class="hljs-number">1012</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">14</span>), dtype=int32)
Logits: tf.Tensor([[-<span class="hljs-number">2.7276208</span>  <span class="hljs-number">2.8789377</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Vt(j){let t,r;return t=new y({props:{code:`Input IDs: [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]
Logits: [[-2.7276,  2.8789]]`,highlighted:`Input IDs: [[ <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>]]
Logits: [[-<span class="hljs-number">2.7276</span>,  <span class="hljs-number">2.8789</span>]]`}}),{c(){g(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,p){q(t,e,p),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Wt(j){let t,r,e,p,n;return{c(){t=f("p"),r=h("\u270F\uFE0F "),e=f("strong"),p=h("Try it out!"),n=h(" \u8BD5\u8BD5\u770B\uFF01\u5C06\u6B64\u5217\u8868\u8F6C\u6362\u4E3A\u5F20\u91CF\u5E76\u901A\u8FC7\u6A21\u578B\u4F20\u9012\u3002\u68C0\u67E5\u60A8\u662F\u5426\u83B7\u5F97\u4E0E\u4E4B\u524D\u76F8\u540C\u7684\u767B\u5F55\uFF08\u4F46\u662F\u53EA\u6709\u4E24\u6B21\uFF09")},l($){t=m($,"P",{});var E=d(t);r=k(E,"\u270F\uFE0F "),e=m(E,"STRONG",{});var z=d(e);p=k(z,"Try it out!"),z.forEach(l),n=k(E," \u8BD5\u8BD5\u770B\uFF01\u5C06\u6B64\u5217\u8868\u8F6C\u6362\u4E3A\u5F20\u91CF\u5E76\u901A\u8FC7\u6A21\u578B\u4F20\u9012\u3002\u68C0\u67E5\u60A8\u662F\u5426\u83B7\u5F97\u4E0E\u4E4B\u524D\u76F8\u540C\u7684\u767B\u5F55\uFF08\u4F46\u662F\u53EA\u6709\u4E24\u6B21\uFF09"),E.forEach(l)},m($,E){o($,t,E),c(t,r),c(t,e),c(e,p),c(t,n)},d($){$&&l(t)}}}function Xt(j){let t,r,e,p;return t=new y({props:{code:`model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

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
<span class="hljs-built_in">print</span>(model(tf.constant(batched_ids)).logits)`}}),e=new y({props:{code:`tf.Tensor([[ 1.5693678 -1.3894581]], shape=(1, 2), dtype=float32)
tf.Tensor([[ 0.5803005  -0.41252428]], shape=(1, 2), dtype=float32)
tf.Tensor(
[[ 1.5693681 -1.3894582]
 [ 1.3373486 -1.2163193]], shape=(2, 2), dtype=float32)`,highlighted:`tf.Tensor([[ <span class="hljs-number">1.5693678</span> -<span class="hljs-number">1.3894581</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)
tf.Tensor([[ <span class="hljs-number">0.5803005</span>  -<span class="hljs-number">0.41252428</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)
tf.Tensor(
[[ <span class="hljs-number">1.5693681</span> -<span class="hljs-number">1.3894582</span>]
 [ <span class="hljs-number">1.3373486</span> -<span class="hljs-number">1.2163193</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function Zt(j){let t,r,e,p;return t=new y({props:{code:`model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

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
<span class="hljs-built_in">print</span>(model(torch.tensor(batched_ids)).logits)`}}),e=new y({props:{code:`tensor([[ 1.5694, -1.3895]], grad_fn=<AddmmBackward>)
tensor([[ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)
tensor([[ 1.5694, -1.3895],
        [ 1.3373, -1.2163]], grad_fn=<AddmmBackward>)`,highlighted:`tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>]], grad_fn=&lt;AddmmBackward&gt;)
tensor([[ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)
tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>],
        [ <span class="hljs-number">1.3373</span>, -<span class="hljs-number">1.2163</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function sl(j){let t,r,e,p;return t=new y({props:{code:`batched_ids = [
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
<span class="hljs-built_in">print</span>(outputs.logits)`}}),e=new y({props:{code:`tf.Tensor(
[[ 1.5693681  -1.3894582 ]
 [ 0.5803021  -0.41252586]], shape=(2, 2), dtype=float32)`,highlighted:`tf.Tensor(
[[ <span class="hljs-number">1.5693681</span>  -<span class="hljs-number">1.3894582</span> ]
 [ <span class="hljs-number">0.5803021</span>  -<span class="hljs-number">0.41252586</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function el(j){let t,r,e,p;return t=new y({props:{code:`batched_ids = [
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
<span class="hljs-built_in">print</span>(outputs.logits)`}}),e=new y({props:{code:`tensor([[ 1.5694, -1.3895],
        [ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)`,highlighted:`tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>],
        [ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){g(t.$$.fragment),r=i(),g(e.$$.fragment)},l(n){w(t.$$.fragment,n),r=u(n),w(e.$$.fragment,n)},m(n,$){q(t,n,$),o(n,r,$),q(e,n,$),p=!0},i(n){p||(b(t.$$.fragment,n),b(e.$$.fragment,n),p=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),p=!1},d(n){v(t,n),n&&l(r),v(e,n)}}}function nl(j){let t,r;return{c(){t=f("p"),r=h("\u270F\uFE0F \u8BD5\u8BD5\u770B\uFF01\u5728\u7B2C2\u8282\u4E2D\u4F7F\u7528\u7684\u4E24\u4E2A\u53E5\u5B50\u4E0A\u624B\u52A8\u5E94\u7528\u6807\u8BB0\u5316\uFF08\u201C\u6211\u4E00\u751F\u90FD\u5728\u7B49\u5F85\u62E5\u62B1\u8BFE\u7A0B\u3002\u201D\u548C\u201C\u6211\u975E\u5E38\u8BA8\u538C\u8FD9\u4E2A\uFF01\u201D\uFF09\u3002\u901A\u8FC7\u6A21\u578B\u4F20\u9012\u5B83\u4EEC\uFF0C\u5E76\u68C0\u67E5\u60A8\u662F\u5426\u83B7\u5F97\u4E0E\u7B2C2\u8282\u4E2D\u76F8\u540C\u7684\u767B\u5F55\u3002\u73B0\u5728\u4F7F\u7528\u586B\u5145\u6807\u8BB0\u5C06\u5B83\u4EEC\u6279\u5904\u7406\u5728\u4E00\u8D77\uFF0C\u7136\u540E\u521B\u5EFA\u9002\u5F53\u7684\u6CE8\u610F\u63A9\u7801\u3002\u68C0\u67E5\u901A\u8FC7\u6A21\u578B\u65F6\u662F\u5426\u83B7\u5F97\u76F8\u540C\u7684\u7ED3\u679C\uFF01")},l(e){t=m(e,"P",{});var p=d(t);r=k(p,"\u270F\uFE0F \u8BD5\u8BD5\u770B\uFF01\u5728\u7B2C2\u8282\u4E2D\u4F7F\u7528\u7684\u4E24\u4E2A\u53E5\u5B50\u4E0A\u624B\u52A8\u5E94\u7528\u6807\u8BB0\u5316\uFF08\u201C\u6211\u4E00\u751F\u90FD\u5728\u7B49\u5F85\u62E5\u62B1\u8BFE\u7A0B\u3002\u201D\u548C\u201C\u6211\u975E\u5E38\u8BA8\u538C\u8FD9\u4E2A\uFF01\u201D\uFF09\u3002\u901A\u8FC7\u6A21\u578B\u4F20\u9012\u5B83\u4EEC\uFF0C\u5E76\u68C0\u67E5\u60A8\u662F\u5426\u83B7\u5F97\u4E0E\u7B2C2\u8282\u4E2D\u76F8\u540C\u7684\u767B\u5F55\u3002\u73B0\u5728\u4F7F\u7528\u586B\u5145\u6807\u8BB0\u5C06\u5B83\u4EEC\u6279\u5904\u7406\u5728\u4E00\u8D77\uFF0C\u7136\u540E\u521B\u5EFA\u9002\u5F53\u7684\u6CE8\u610F\u63A9\u7801\u3002\u68C0\u67E5\u901A\u8FC7\u6A21\u578B\u65F6\u662F\u5426\u83B7\u5F97\u76F8\u540C\u7684\u7ED3\u679C\uFF01"),p.forEach(l)},m(e,p){o(e,t,p),c(t,r)},d(e){e&&l(t)}}}function tl(j){let t,r,e,p,n,$,E,z,T,bs,A,I,ds,hs,Xe,_e,ks,te,Ze,be,$s,le,sn,de,js,ae,en,he,gs,re,nn,ke,ws,tn,$e,K,ln,je,qs,an,ge,F,P,vs,ys,rn,we,zs,on,qe,S,D,Es,Ts,pn,ve,C,M,As,Is,un,ye,L,x,Fs,V,oe,cn,fn,ze,W,Ee,Ps,mn,Te,G,Ae,Ss,_n,Ie,X,bn,Fe,Ds,dn,Pe,Z,Se,Cs,hn,De,ss,Ce,Ms,kn,Me,H,N,Ls,xs,$n,Le,Hs,jn,xe,es,gn,He,ns,pe,wn,qn,Ne,Ns,vn,Be,B,U,Bs,Us,yn,Ue,Os,zn,Oe,Y,Re,ts,En,Ge,Rs,Tn,Ye,Gs,ie,An,Je,Ys,ue,In,Qe,R,Fn,ls,Pn,Sn,as,Dn,Cn,Ke,Js,Mn,Ve,rs,We;e=new xt({props:{fw:j[0]}});const Hn=[Nt,Ht],os=[];function Nn(s,a){return s[0]==="pt"?0:1}z=Nn(j),T=os[z]=Hn[z](j);const Bn=[Ut,Bt],ps=[];function Un(s,a){return s[0]==="pt"?0:1}A=Un(j),I=ps[A]=Bn[A](j);const On=[Rt,Ot],is=[];function Rn(s,a){return s[0]==="pt"?0:1}F=Rn(j),P=is[F]=On[F](j);const Gn=[Yt,Gt],us=[];function Yn(s,a){return s[0]==="pt"?0:1}S=Yn(j),D=us[S]=Gn[S](j);const Jn=[Qt,Jt],cs=[];function Qn(s,a){return s[0]==="pt"?0:1}C=Qn(j),M=cs[C]=Jn[C](j);const Kn=[Vt,Kt],fs=[];function Vn(s,a){return s[0]==="pt"?0:1}L=Vn(j),x=fs[L]=Kn[L](j),W=new y({props:{code:"batched_ids = [ids, ids]",highlighted:'<span class="hljs-attr">batched_ids</span> = [ids, ids]'}}),G=new It({props:{$$slots:{default:[Wt]},$$scope:{ctx:j}}}),Z=new y({props:{code:`batched_ids = [
    [200, 200, 200],
    [200, 200]
]`,highlighted:`batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>]
]`}}),ss=new y({props:{code:`padding_id = 100

batched_ids = [
    [200, 200, 200],
    [200, 200, padding_id],
]`,highlighted:`padding_id = <span class="hljs-number">100</span>

batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, padding_id],
]`}});const Wn=[Zt,Xt],ms=[];function Xn(s,a){return s[0]==="pt"?0:1}H=Xn(j),N=ms[H]=Wn[H](j);const Zn=[el,sl],_s=[];function st(s,a){return s[0]==="pt"?0:1}return B=st(j),U=_s[B]=Zn[B](j),Y=new It({props:{$$slots:{default:[nl]},$$scope:{ctx:j}}}),rs=new y({props:{code:"sequence = sequence[:max_sequence_length]",highlighted:"sequence = sequence[:max_sequence_length]"}}),{c(){t=f("meta"),r=i(),g(e.$$.fragment),p=i(),n=f("h1"),$=h("\u5904\u7406\u591A\u4E2A\u5E8F\u5217"),E=i(),T.c(),bs=i(),I.c(),ds=i(),hs=f("p"),Xe=h("\u5728\u4E0A\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u63A2\u8BA8\u4E86\u6700\u7B80\u5355\u7684\u7528\u4F8B\uFF1A\u5BF9\u4E00\u4E2A\u5C0F\u957F\u5EA6\u7684\u5E8F\u5217\u8FDB\u884C\u63A8\u7406\u3002\u7136\u800C\uFF0C\u4E00\u4E9B\u95EE\u9898\u5DF2\u7ECF\u51FA\u73B0\uFF1A"),_e=i(),ks=f("ul"),te=f("li"),Ze=h("\u6211\u4EEC\u5982\u4F55\u5904\u7406\u591A\u4E2A\u5E8F\u5217\uFF1F"),be=i(),$s=f("ul"),le=f("li"),sn=h("\u6211\u4EEC\u5982\u4F55\u5904\u7406\u591A\u4E2A\u5E8F\u5217\u4E0D\u540C\u957F\u5EA6?"),de=i(),js=f("ul"),ae=f("li"),en=h("\u8BCD\u6C47\u7D22\u5F15\u662F\u8BA9\u6A21\u578B\u6B63\u5E38\u5DE5\u4F5C\u7684\u552F\u4E00\u8F93\u5165\u5417\uFF1F"),he=i(),gs=f("ul"),re=f("li"),nn=h("\u662F\u5426\u5B58\u5728\u5E8F\u5217\u592A\u957F\u7684\u95EE\u9898\uFF1F"),ke=i(),ws=f("p"),tn=h("\u8BA9\u6211\u4EEC\u770B\u770B\u8FD9\u4E9B\u95EE\u9898\u4F1A\u5E26\u6765\u4EC0\u4E48\u6837\u7684\u95EE\u9898\uFF0C\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u{1F917} Transformers API\u89E3\u51B3\u5B83\u4EEC"),$e=i(),K=f("h2"),ln=h("\u6A21\u578B\u9700\u8981\u4E00\u6279\u8F93\u5165"),je=i(),qs=f("p"),an=h("\u5728\u4E0A\u4E00\u4E2A\u7EC3\u4E60\u4E2D\uFF0C\u60A8\u770B\u5230\u4E86\u5E8F\u5217\u5982\u4F55\u8F6C\u6362\u4E3A\u6570\u5B57\u5217\u8868\u3002\u8BA9\u6211\u4EEC\u5C06\u6B64\u6570\u5B57\u5217\u8868\u8F6C\u6362\u4E3A\u5F20\u91CF\uFF0C\u5E76\u5C06\u5176\u53D1\u9001\u5230\u6A21\u578B\uFF1A"),ge=i(),P.c(),vs=i(),ys=f("p"),rn=h("\u54E6\uFF0C\u4E0D\uFF01\u4E3A\u4EC0\u4E48\u5931\u8D25\u4E86\uFF1F\u201C\u6211\u4EEC\u9075\u5FAA\u4E86\u7B2C2\u8282\u4E2D\u7BA1\u9053\u7684\u6B65\u9AA4\u3002"),we=i(),zs=f("p"),on=h("\u95EE\u9898\u662F\u6211\u4EEC\u5411\u6A21\u578B\u53D1\u9001\u4E86\u4E00\u4E2A\u5E8F\u5217\uFF0C\u800C\u{1F917} Transformers\u6A21\u578B\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u9700\u8981\u591A\u4E2A\u53E5\u5B50\u3002\u5728\u8FD9\u91CC\uFF0C\u5F53\u6211\u4EEC\u5C06\u5206\u8BCD\u5668\u5E94\u7528\u4E8E\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u5728\u5E55\u540E\u5B8C\u6210\u5206\u8BCD\u5668\u6240\u505A\u7684\u4E00\u5207\uFF0C\u4F46\u5982\u679C\u4ED4\u7EC6\u89C2\u5BDF\uFF0C\u60A8\u4F1A\u53D1\u73B0\u5B83\u4E0D\u4EC5\u5C06\u8F93\u5165ID\u5217\u8868\u8F6C\u6362\u4E3A\u5F20\u91CF\uFF0C\u8FD8\u5728\u5176\u9876\u90E8\u6DFB\u52A0\u4E86\u4E00\u4E2A\u7EF4\u5EA6\uFF1A"),qe=i(),D.c(),Es=i(),Ts=f("p"),pn=h("\u8BA9\u6211\u4EEC\u91CD\u8BD5\u5E76\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7EF4\u5EA6\uFF1A"),ve=i(),M.c(),As=i(),Is=f("p"),un=h("\u6211\u4EEC\u6253\u5370\u8F93\u5165ID\u4EE5\u53CA\u751F\u6210\u7684logits-\u4EE5\u4E0B\u662F\u8F93\u51FA\uFF1A"),ye=i(),x.c(),Fs=i(),V=f("p"),oe=f("em"),cn=h("Batching"),fn=h(" \u662F\u4E00\u6B21\u901A\u8FC7\u6A21\u578B\u53D1\u9001\u591A\u4E2A\u53E5\u5B50\u7684\u884C\u4E3A\u3002\u5982\u679C\u4F60\u53EA\u6709\u4E00\u53E5\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u7528\u4E00\u4E2A\u5E8F\u5217\u6784\u5EFA\u4E00\u4E2A\u6279\u6B21\uFF1A"),ze=i(),g(W.$$.fragment),Ee=i(),Ps=f("p"),mn=h("\u8FD9\u662F\u4E00\u6279\u4E24\u4E2A\u76F8\u540C\u7684\u5E8F\u5217\uFF01"),Te=i(),g(G.$$.fragment),Ae=i(),Ss=f("p"),_n=h("\u6279\u5904\u7406\u5141\u8BB8\u6A21\u578B\u5728\u8F93\u5165\u591A\u4E2A\u53E5\u5B50\u65F6\u5DE5\u4F5C\u3002\u4F7F\u7528\u591A\u4E2A\u5E8F\u5217\u5C31\u50CF\u4F7F\u7528\u5355\u4E2A\u5E8F\u5217\u6784\u5EFA\u6279\u4E00\u6837\u7B80\u5355\u3002\u4E0D\u8FC7\uFF0C\u8FD8\u6709\u7B2C\u4E8C\u4E2A\u95EE\u9898\u3002\u5F53\u4F60\u8BD5\u56FE\u5C06\u4E24\u4E2A\uFF08\u6216\u66F4\u591A\uFF09\u53E5\u5B50\u7EC4\u5408\u5728\u4E00\u8D77\u65F6\uFF0C\u5B83\u4EEC\u7684\u957F\u5EA6\u53EF\u80FD\u4E0D\u540C\u3002\u5982\u679C\u60A8\u4EE5\u524D\u4F7F\u7528\u8FC7\u5F20\u91CF\uFF0C\u90A3\u4E48\u60A8\u77E5\u9053\u5B83\u4EEC\u5FC5\u987B\u662F\u77E9\u5F62\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5C06\u8F93\u5165ID\u5217\u8868\u76F4\u63A5\u8F6C\u6362\u4E3A\u5F20\u91CF\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u901A\u5E38\u586B\u5145\u8F93\u5165\u3002"),Ie=i(),X=f("h2"),bn=h("\u586B\u5145\u8F93\u5165"),Fe=i(),Ds=f("p"),dn=h("\u4EE5\u4E0B\u5217\u8868\u4E0D\u80FD\u8F6C\u6362\u4E3A\u5F20\u91CF\uFF1A"),Pe=i(),g(Z.$$.fragment),Se=i(),Cs=f("p"),hn=h("\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u586B\u5145\u4F7F\u5F20\u91CF\u5177\u6709\u77E9\u5F62\u3002Padding\u901A\u8FC7\u5728\u503C\u8F83\u5C11\u7684\u53E5\u5B50\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u540D\u4E3APadding token\u7684\u7279\u6B8A\u5355\u8BCD\u6765\u786E\u4FDD\u6211\u4EEC\u6240\u6709\u7684\u53E5\u5B50\u957F\u5EA6\u76F8\u540C\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u670910\u4E2A\u5305\u542B10\u4E2A\u5355\u8BCD\u7684\u53E5\u5B50\u548C1\u4E2A\u5305\u542B20\u4E2A\u5355\u8BCD\u7684\u53E5\u5B50\uFF0C\u586B\u5145\u5C06\u786E\u4FDD\u6240\u6709\u53E5\u5B50\u90FD\u5305\u542B20\u4E2A\u5355\u8BCD\u3002\u5728\u6211\u4EEC\u7684\u793A\u4F8B\u4E2D\uFF0C\u751F\u6210\u7684\u5F20\u91CF\u5982\u4E0B\u6240\u793A\uFF1A"),De=i(),g(ss.$$.fragment),Ce=i(),Ms=f("p"),kn=h("\u53EF\u4EE5\u5728tokenizer.pad_token_id\u4E2D\u627E\u5230\u586B\u5145\u4EE4\u724CID. \u8BA9\u6211\u4EEC\u4F7F\u7528\u5B83\uFF0C\u5C06\u6211\u4EEC\u7684\u4E24\u53E5\u8BDD\u5206\u522B\u53D1\u9001\u5230\u6A21\u578B\u4E2D\uFF0C\u5E76\u5206\u6279\u53D1\u9001\u5230\u4E00\u8D77\uFF1A"),Me=i(),N.c(),Ls=i(),xs=f("p"),$n=h("\u6211\u4EEC\u6279\u5904\u7406\u9884\u6D4B\u4E2D\u7684logits\u6709\u70B9\u95EE\u9898\uFF1A\u7B2C\u4E8C\u884C\u5E94\u8BE5\u4E0E\u7B2C\u4E8C\u53E5\u7684logits\u76F8\u540C\uFF0C\u4F46\u6211\u4EEC\u5F97\u5230\u4E86\u5B8C\u5168\u4E0D\u540C\u7684\u503C\uFF01"),Le=i(),Hs=f("p"),jn=h("\u8FD9\u662F\u56E0\u4E3ATransformer\u6A21\u578B\u7684\u5173\u952E\u7279\u6027\u662F\u5173\u6CE8\u5C42\uFF0C\u5B83\u5C06\u6BCF\u4E2A\u6807\u8BB0\u4E0A\u4E0B\u6587\u5316\u3002\u8FD9\u4E9B\u5C06\u8003\u8651\u586B\u5145\u6807\u8BB0\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u6D89\u53CA\u5E8F\u5217\u4E2D\u7684\u6240\u6709\u6807\u8BB0\u3002\u4E3A\u4E86\u5728\u901A\u8FC7\u6A21\u578B\u4F20\u9012\u4E0D\u540C\u957F\u5EA6\u7684\u5355\u4E2A\u53E5\u5B50\u65F6\uFF0C\u6216\u8005\u5728\u4F20\u9012\u4E00\u6279\u5E94\u7528\u4E86\u76F8\u540C\u53E5\u5B50\u548C\u586B\u5145\u7684\u53E5\u5B50\u65F6\u83B7\u5F97\u76F8\u540C\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u544A\u8BC9\u8FD9\u4E9B\u6CE8\u610F\u5C42\u5FFD\u7565\u586B\u5145\u6807\u8BB0\u3002\u8FD9\u662F\u901A\u8FC7\u4F7F\u7528 attention mask\u6765\u5B9E\u73B0\u7684\u3002"),xe=i(),es=f("h2"),gn=h("\u6CE8\u610F\u529B\u9762\u5177"),He=i(),ns=f("p"),pe=f("em"),wn=h("Attention masks"),qn=h("\u662F\u4E0E\u8F93\u5165ID\u5F20\u91CF\u5F62\u72B6\u5B8C\u5168\u76F8\u540C\u7684\u5F20\u91CF\uFF0C\u75280\u548C1\u586B\u5145\uFF1A1s\u8868\u793A\u5E94\u6CE8\u610F\u76F8\u5E94\u7684\u6807\u8BB0\uFF0C0s\u8868\u793A\u4E0D\u5E94\u6CE8\u610F\u76F8\u5E94\u7684\u6807\u8BB0\uFF08\u5373\uFF0C\u6A21\u578B\u7684\u6CE8\u610F\u529B\u5C42\u5E94\u5FFD\u7565\u5B83\u4EEC\uFF09\u3002"),Ne=i(),Ns=f("p"),vn=h("\u8BA9\u6211\u4EEC\u7528attention mask\u5B8C\u6210\u4E0A\u4E00\u4E2A\u793A\u4F8B\uFF1A"),Be=i(),U.c(),Bs=i(),Us=f("p"),yn=h("\u73B0\u5728\u6211\u4EEC\u5F97\u5230\u4E86\u8BE5\u6279\u4E2D\u7B2C\u4E8C\u4E2A\u53E5\u5B50\u7684\u76F8\u540C\u767B\u5F55\u3002"),Ue=i(),Os=f("p"),zn=h("\u8BF7\u6CE8\u610F\uFF0C\u7B2C\u4E8C\u4E2A\u5E8F\u5217\u7684\u6700\u540E\u4E00\u4E2A\u503C\u662F\u4E00\u4E2A\u586B\u5145ID\uFF0C\u5B83\u5728attention mask\u4E2D\u662F\u4E00\u4E2A0\u503C\u3002"),Oe=i(),g(Y.$$.fragment),Re=i(),ts=f("h2"),En=h("\u957F\u5E8F\u5217"),Ge=i(),Rs=f("p"),Tn=h("\u5BF9\u4E8ETransformers\u6A21\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6A21\u578B\u7684\u5E8F\u5217\u957F\u5EA6\u662F\u6709\u9650\u7684\u3002\u5927\u591A\u6570\u6A21\u578B\u5904\u7406\u591A\u8FBE512\u62161024\u4E2A\u4EE4\u724C\u7684\u5E8F\u5217\uFF0C\u5F53\u8981\u6C42\u5904\u7406\u66F4\u957F\u7684\u5E8F\u5217\u65F6\uFF0C\u4F1A\u5D29\u6E83\u3002\u6B64\u95EE\u9898\u6709\u4E24\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A"),Ye=i(),Gs=f("ul"),ie=f("li"),An=h("\u4F7F\u7528\u652F\u6301\u7684\u5E8F\u5217\u957F\u5EA6\u8F83\u957F\u7684\u6A21\u578B\u3002"),Je=i(),Ys=f("ul"),ue=f("li"),In=h("\u622A\u65AD\u5E8F\u5217\u3002"),Qe=i(),R=f("p"),Fn=h(`\u6A21\u578B\u6709\u4E0D\u540C\u7684\u652F\u6301\u5E8F\u5217\u957F\u5EA6\uFF0C\u6709\u4E9B\u6A21\u578B\u4E13\u95E8\u5904\u7406\u5F88\u957F\u7684\u5E8F\u5217\u3002
`),ls=f("a"),Pn=h("Longformer"),Sn=h(`
\u8FD9\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u53E6\u4E00\u4E2A\u662F
`),as=f("a"),Dn=h("LED"),Cn=h(`
. \u5982\u679C\u60A8\u6B63\u5728\u5904\u7406\u4E00\u9879\u9700\u8981\u5F88\u957F\u5E8F\u5217\u7684\u4EFB\u52A1\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u67E5\u770B\u8FD9\u4E9B\u6A21\u578B\u3002`),Ke=i(),Js=f("p"),Mn=h("\u5426\u5219\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u901A\u8FC7\u6307\u5B9Amax_sequence_length\u53C2\u6570\uFF1A"),Ve=i(),g(rs.$$.fragment),this.h()},l(s){const a=Mt('[data-svelte="svelte-1phssyn"]',document.head);t=m(a,"META",{name:!0,content:!0}),a.forEach(l),r=u(s),w(e.$$.fragment,s),p=u(s),n=m(s,"H1",{id:!0});var ce=d(n);$=k(ce,"\u5904\u7406\u591A\u4E2A\u5E8F\u5217"),ce.forEach(l),E=u(s),T.l(s),bs=u(s),I.l(s),ds=u(s),hs=m(s,"P",{});var Qs=d(hs);Xe=k(Qs,"\u5728\u4E0A\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u63A2\u8BA8\u4E86\u6700\u7B80\u5355\u7684\u7528\u4F8B\uFF1A\u5BF9\u4E00\u4E2A\u5C0F\u957F\u5EA6\u7684\u5E8F\u5217\u8FDB\u884C\u63A8\u7406\u3002\u7136\u800C\uFF0C\u4E00\u4E9B\u95EE\u9898\u5DF2\u7ECF\u51FA\u73B0\uFF1A"),Qs.forEach(l),_e=u(s),ks=m(s,"UL",{});var Ks=d(ks);te=m(Ks,"LI",{});var Vs=d(te);Ze=k(Vs,"\u6211\u4EEC\u5982\u4F55\u5904\u7406\u591A\u4E2A\u5E8F\u5217\uFF1F"),Vs.forEach(l),Ks.forEach(l),be=u(s),$s=m(s,"UL",{});var Ws=d($s);le=m(Ws,"LI",{});var Xs=d(le);sn=k(Xs,"\u6211\u4EEC\u5982\u4F55\u5904\u7406\u591A\u4E2A\u5E8F\u5217\u4E0D\u540C\u957F\u5EA6?"),Xs.forEach(l),Ws.forEach(l),de=u(s),js=m(s,"UL",{});var Zs=d(js);ae=m(Zs,"LI",{});var fe=d(ae);en=k(fe,"\u8BCD\u6C47\u7D22\u5F15\u662F\u8BA9\u6A21\u578B\u6B63\u5E38\u5DE5\u4F5C\u7684\u552F\u4E00\u8F93\u5165\u5417\uFF1F"),fe.forEach(l),Zs.forEach(l),he=u(s),gs=m(s,"UL",{});var se=d(gs);re=m(se,"LI",{});var ee=d(re);nn=k(ee,"\u662F\u5426\u5B58\u5728\u5E8F\u5217\u592A\u957F\u7684\u95EE\u9898\uFF1F"),ee.forEach(l),se.forEach(l),ke=u(s),ws=m(s,"P",{});var me=d(ws);tn=k(me,"\u8BA9\u6211\u4EEC\u770B\u770B\u8FD9\u4E9B\u95EE\u9898\u4F1A\u5E26\u6765\u4EC0\u4E48\u6837\u7684\u95EE\u9898\uFF0C\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u{1F917} Transformers API\u89E3\u51B3\u5B83\u4EEC"),me.forEach(l),$e=u(s),K=m(s,"H2",{id:!0});var et=d(K);ln=k(et,"\u6A21\u578B\u9700\u8981\u4E00\u6279\u8F93\u5165"),et.forEach(l),je=u(s),qs=m(s,"P",{});var nt=d(qs);an=k(nt,"\u5728\u4E0A\u4E00\u4E2A\u7EC3\u4E60\u4E2D\uFF0C\u60A8\u770B\u5230\u4E86\u5E8F\u5217\u5982\u4F55\u8F6C\u6362\u4E3A\u6570\u5B57\u5217\u8868\u3002\u8BA9\u6211\u4EEC\u5C06\u6B64\u6570\u5B57\u5217\u8868\u8F6C\u6362\u4E3A\u5F20\u91CF\uFF0C\u5E76\u5C06\u5176\u53D1\u9001\u5230\u6A21\u578B\uFF1A"),nt.forEach(l),ge=u(s),P.l(s),vs=u(s),ys=m(s,"P",{});var tt=d(ys);rn=k(tt,"\u54E6\uFF0C\u4E0D\uFF01\u4E3A\u4EC0\u4E48\u5931\u8D25\u4E86\uFF1F\u201C\u6211\u4EEC\u9075\u5FAA\u4E86\u7B2C2\u8282\u4E2D\u7BA1\u9053\u7684\u6B65\u9AA4\u3002"),tt.forEach(l),we=u(s),zs=m(s,"P",{});var lt=d(zs);on=k(lt,"\u95EE\u9898\u662F\u6211\u4EEC\u5411\u6A21\u578B\u53D1\u9001\u4E86\u4E00\u4E2A\u5E8F\u5217\uFF0C\u800C\u{1F917} Transformers\u6A21\u578B\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u9700\u8981\u591A\u4E2A\u53E5\u5B50\u3002\u5728\u8FD9\u91CC\uFF0C\u5F53\u6211\u4EEC\u5C06\u5206\u8BCD\u5668\u5E94\u7528\u4E8E\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u5728\u5E55\u540E\u5B8C\u6210\u5206\u8BCD\u5668\u6240\u505A\u7684\u4E00\u5207\uFF0C\u4F46\u5982\u679C\u4ED4\u7EC6\u89C2\u5BDF\uFF0C\u60A8\u4F1A\u53D1\u73B0\u5B83\u4E0D\u4EC5\u5C06\u8F93\u5165ID\u5217\u8868\u8F6C\u6362\u4E3A\u5F20\u91CF\uFF0C\u8FD8\u5728\u5176\u9876\u90E8\u6DFB\u52A0\u4E86\u4E00\u4E2A\u7EF4\u5EA6\uFF1A"),lt.forEach(l),qe=u(s),D.l(s),Es=u(s),Ts=m(s,"P",{});var at=d(Ts);pn=k(at,"\u8BA9\u6211\u4EEC\u91CD\u8BD5\u5E76\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7EF4\u5EA6\uFF1A"),at.forEach(l),ve=u(s),M.l(s),As=u(s),Is=m(s,"P",{});var rt=d(Is);un=k(rt,"\u6211\u4EEC\u6253\u5370\u8F93\u5165ID\u4EE5\u53CA\u751F\u6210\u7684logits-\u4EE5\u4E0B\u662F\u8F93\u51FA\uFF1A"),rt.forEach(l),ye=u(s),x.l(s),Fs=u(s),V=m(s,"P",{});var Ln=d(V);oe=m(Ln,"EM",{});var ot=d(oe);cn=k(ot,"Batching"),ot.forEach(l),fn=k(Ln," \u662F\u4E00\u6B21\u901A\u8FC7\u6A21\u578B\u53D1\u9001\u591A\u4E2A\u53E5\u5B50\u7684\u884C\u4E3A\u3002\u5982\u679C\u4F60\u53EA\u6709\u4E00\u53E5\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u7528\u4E00\u4E2A\u5E8F\u5217\u6784\u5EFA\u4E00\u4E2A\u6279\u6B21\uFF1A"),Ln.forEach(l),ze=u(s),w(W.$$.fragment,s),Ee=u(s),Ps=m(s,"P",{});var pt=d(Ps);mn=k(pt,"\u8FD9\u662F\u4E00\u6279\u4E24\u4E2A\u76F8\u540C\u7684\u5E8F\u5217\uFF01"),pt.forEach(l),Te=u(s),w(G.$$.fragment,s),Ae=u(s),Ss=m(s,"P",{});var it=d(Ss);_n=k(it,"\u6279\u5904\u7406\u5141\u8BB8\u6A21\u578B\u5728\u8F93\u5165\u591A\u4E2A\u53E5\u5B50\u65F6\u5DE5\u4F5C\u3002\u4F7F\u7528\u591A\u4E2A\u5E8F\u5217\u5C31\u50CF\u4F7F\u7528\u5355\u4E2A\u5E8F\u5217\u6784\u5EFA\u6279\u4E00\u6837\u7B80\u5355\u3002\u4E0D\u8FC7\uFF0C\u8FD8\u6709\u7B2C\u4E8C\u4E2A\u95EE\u9898\u3002\u5F53\u4F60\u8BD5\u56FE\u5C06\u4E24\u4E2A\uFF08\u6216\u66F4\u591A\uFF09\u53E5\u5B50\u7EC4\u5408\u5728\u4E00\u8D77\u65F6\uFF0C\u5B83\u4EEC\u7684\u957F\u5EA6\u53EF\u80FD\u4E0D\u540C\u3002\u5982\u679C\u60A8\u4EE5\u524D\u4F7F\u7528\u8FC7\u5F20\u91CF\uFF0C\u90A3\u4E48\u60A8\u77E5\u9053\u5B83\u4EEC\u5FC5\u987B\u662F\u77E9\u5F62\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5C06\u8F93\u5165ID\u5217\u8868\u76F4\u63A5\u8F6C\u6362\u4E3A\u5F20\u91CF\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u901A\u5E38\u586B\u5145\u8F93\u5165\u3002"),it.forEach(l),Ie=u(s),X=m(s,"H2",{id:!0});var ut=d(X);bn=k(ut,"\u586B\u5145\u8F93\u5165"),ut.forEach(l),Fe=u(s),Ds=m(s,"P",{});var ct=d(Ds);dn=k(ct,"\u4EE5\u4E0B\u5217\u8868\u4E0D\u80FD\u8F6C\u6362\u4E3A\u5F20\u91CF\uFF1A"),ct.forEach(l),Pe=u(s),w(Z.$$.fragment,s),Se=u(s),Cs=m(s,"P",{});var ft=d(Cs);hn=k(ft,"\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u586B\u5145\u4F7F\u5F20\u91CF\u5177\u6709\u77E9\u5F62\u3002Padding\u901A\u8FC7\u5728\u503C\u8F83\u5C11\u7684\u53E5\u5B50\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u540D\u4E3APadding token\u7684\u7279\u6B8A\u5355\u8BCD\u6765\u786E\u4FDD\u6211\u4EEC\u6240\u6709\u7684\u53E5\u5B50\u957F\u5EA6\u76F8\u540C\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u670910\u4E2A\u5305\u542B10\u4E2A\u5355\u8BCD\u7684\u53E5\u5B50\u548C1\u4E2A\u5305\u542B20\u4E2A\u5355\u8BCD\u7684\u53E5\u5B50\uFF0C\u586B\u5145\u5C06\u786E\u4FDD\u6240\u6709\u53E5\u5B50\u90FD\u5305\u542B20\u4E2A\u5355\u8BCD\u3002\u5728\u6211\u4EEC\u7684\u793A\u4F8B\u4E2D\uFF0C\u751F\u6210\u7684\u5F20\u91CF\u5982\u4E0B\u6240\u793A\uFF1A"),ft.forEach(l),De=u(s),w(ss.$$.fragment,s),Ce=u(s),Ms=m(s,"P",{});var mt=d(Ms);kn=k(mt,"\u53EF\u4EE5\u5728tokenizer.pad_token_id\u4E2D\u627E\u5230\u586B\u5145\u4EE4\u724CID. \u8BA9\u6211\u4EEC\u4F7F\u7528\u5B83\uFF0C\u5C06\u6211\u4EEC\u7684\u4E24\u53E5\u8BDD\u5206\u522B\u53D1\u9001\u5230\u6A21\u578B\u4E2D\uFF0C\u5E76\u5206\u6279\u53D1\u9001\u5230\u4E00\u8D77\uFF1A"),mt.forEach(l),Me=u(s),N.l(s),Ls=u(s),xs=m(s,"P",{});var _t=d(xs);$n=k(_t,"\u6211\u4EEC\u6279\u5904\u7406\u9884\u6D4B\u4E2D\u7684logits\u6709\u70B9\u95EE\u9898\uFF1A\u7B2C\u4E8C\u884C\u5E94\u8BE5\u4E0E\u7B2C\u4E8C\u53E5\u7684logits\u76F8\u540C\uFF0C\u4F46\u6211\u4EEC\u5F97\u5230\u4E86\u5B8C\u5168\u4E0D\u540C\u7684\u503C\uFF01"),_t.forEach(l),Le=u(s),Hs=m(s,"P",{});var bt=d(Hs);jn=k(bt,"\u8FD9\u662F\u56E0\u4E3ATransformer\u6A21\u578B\u7684\u5173\u952E\u7279\u6027\u662F\u5173\u6CE8\u5C42\uFF0C\u5B83\u5C06\u6BCF\u4E2A\u6807\u8BB0\u4E0A\u4E0B\u6587\u5316\u3002\u8FD9\u4E9B\u5C06\u8003\u8651\u586B\u5145\u6807\u8BB0\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u6D89\u53CA\u5E8F\u5217\u4E2D\u7684\u6240\u6709\u6807\u8BB0\u3002\u4E3A\u4E86\u5728\u901A\u8FC7\u6A21\u578B\u4F20\u9012\u4E0D\u540C\u957F\u5EA6\u7684\u5355\u4E2A\u53E5\u5B50\u65F6\uFF0C\u6216\u8005\u5728\u4F20\u9012\u4E00\u6279\u5E94\u7528\u4E86\u76F8\u540C\u53E5\u5B50\u548C\u586B\u5145\u7684\u53E5\u5B50\u65F6\u83B7\u5F97\u76F8\u540C\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u544A\u8BC9\u8FD9\u4E9B\u6CE8\u610F\u5C42\u5FFD\u7565\u586B\u5145\u6807\u8BB0\u3002\u8FD9\u662F\u901A\u8FC7\u4F7F\u7528 attention mask\u6765\u5B9E\u73B0\u7684\u3002"),bt.forEach(l),xe=u(s),es=m(s,"H2",{id:!0});var dt=d(es);gn=k(dt,"\u6CE8\u610F\u529B\u9762\u5177"),dt.forEach(l),He=u(s),ns=m(s,"P",{});var xn=d(ns);pe=m(xn,"EM",{});var ht=d(pe);wn=k(ht,"Attention masks"),ht.forEach(l),qn=k(xn,"\u662F\u4E0E\u8F93\u5165ID\u5F20\u91CF\u5F62\u72B6\u5B8C\u5168\u76F8\u540C\u7684\u5F20\u91CF\uFF0C\u75280\u548C1\u586B\u5145\uFF1A1s\u8868\u793A\u5E94\u6CE8\u610F\u76F8\u5E94\u7684\u6807\u8BB0\uFF0C0s\u8868\u793A\u4E0D\u5E94\u6CE8\u610F\u76F8\u5E94\u7684\u6807\u8BB0\uFF08\u5373\uFF0C\u6A21\u578B\u7684\u6CE8\u610F\u529B\u5C42\u5E94\u5FFD\u7565\u5B83\u4EEC\uFF09\u3002"),xn.forEach(l),Ne=u(s),Ns=m(s,"P",{});var kt=d(Ns);vn=k(kt,"\u8BA9\u6211\u4EEC\u7528attention mask\u5B8C\u6210\u4E0A\u4E00\u4E2A\u793A\u4F8B\uFF1A"),kt.forEach(l),Be=u(s),U.l(s),Bs=u(s),Us=m(s,"P",{});var $t=d(Us);yn=k($t,"\u73B0\u5728\u6211\u4EEC\u5F97\u5230\u4E86\u8BE5\u6279\u4E2D\u7B2C\u4E8C\u4E2A\u53E5\u5B50\u7684\u76F8\u540C\u767B\u5F55\u3002"),$t.forEach(l),Ue=u(s),Os=m(s,"P",{});var jt=d(Os);zn=k(jt,"\u8BF7\u6CE8\u610F\uFF0C\u7B2C\u4E8C\u4E2A\u5E8F\u5217\u7684\u6700\u540E\u4E00\u4E2A\u503C\u662F\u4E00\u4E2A\u586B\u5145ID\uFF0C\u5B83\u5728attention mask\u4E2D\u662F\u4E00\u4E2A0\u503C\u3002"),jt.forEach(l),Oe=u(s),w(Y.$$.fragment,s),Re=u(s),ts=m(s,"H2",{id:!0});var gt=d(ts);En=k(gt,"\u957F\u5E8F\u5217"),gt.forEach(l),Ge=u(s),Rs=m(s,"P",{});var wt=d(Rs);Tn=k(wt,"\u5BF9\u4E8ETransformers\u6A21\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6A21\u578B\u7684\u5E8F\u5217\u957F\u5EA6\u662F\u6709\u9650\u7684\u3002\u5927\u591A\u6570\u6A21\u578B\u5904\u7406\u591A\u8FBE512\u62161024\u4E2A\u4EE4\u724C\u7684\u5E8F\u5217\uFF0C\u5F53\u8981\u6C42\u5904\u7406\u66F4\u957F\u7684\u5E8F\u5217\u65F6\uFF0C\u4F1A\u5D29\u6E83\u3002\u6B64\u95EE\u9898\u6709\u4E24\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A"),wt.forEach(l),Ye=u(s),Gs=m(s,"UL",{});var qt=d(Gs);ie=m(qt,"LI",{});var vt=d(ie);An=k(vt,"\u4F7F\u7528\u652F\u6301\u7684\u5E8F\u5217\u957F\u5EA6\u8F83\u957F\u7684\u6A21\u578B\u3002"),vt.forEach(l),qt.forEach(l),Je=u(s),Ys=m(s,"UL",{});var yt=d(Ys);ue=m(yt,"LI",{});var zt=d(ue);In=k(zt,"\u622A\u65AD\u5E8F\u5217\u3002"),zt.forEach(l),yt.forEach(l),Qe=u(s),R=m(s,"P",{});var ne=d(R);Fn=k(ne,`\u6A21\u578B\u6709\u4E0D\u540C\u7684\u652F\u6301\u5E8F\u5217\u957F\u5EA6\uFF0C\u6709\u4E9B\u6A21\u578B\u4E13\u95E8\u5904\u7406\u5F88\u957F\u7684\u5E8F\u5217\u3002
`),ls=m(ne,"A",{href:!0,rel:!0});var Et=d(ls);Pn=k(Et,"Longformer"),Et.forEach(l),Sn=k(ne,`
\u8FD9\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u53E6\u4E00\u4E2A\u662F
`),as=m(ne,"A",{href:!0,rel:!0});var Tt=d(as);Dn=k(Tt,"LED"),Tt.forEach(l),Cn=k(ne,`
. \u5982\u679C\u60A8\u6B63\u5728\u5904\u7406\u4E00\u9879\u9700\u8981\u5F88\u957F\u5E8F\u5217\u7684\u4EFB\u52A1\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u67E5\u770B\u8FD9\u4E9B\u6A21\u578B\u3002`),ne.forEach(l),Ke=u(s),Js=m(s,"P",{});var At=d(Js);Mn=k(At,"\u5426\u5219\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u901A\u8FC7\u6307\u5B9Amax_sequence_length\u53C2\u6570\uFF1A"),At.forEach(l),Ve=u(s),w(rs.$$.fragment,s),this.h()},h(){O(t,"name","hf:doc:metadata"),O(t,"content",JSON.stringify(ll)),O(n,"id",""),O(K,"id",""),O(X,"id",""),O(es,"id",""),O(ts,"id",""),O(ls,"href","https://huggingface.co/transformers/model_doc/longformer.html"),O(ls,"rel","nofollow"),O(as,"href","https://huggingface.co/transformers/model_doc/led.html"),O(as,"rel","nofollow")},m(s,a){c(document.head,t),o(s,r,a),q(e,s,a),o(s,p,a),o(s,n,a),c(n,$),o(s,E,a),os[z].m(s,a),o(s,bs,a),ps[A].m(s,a),o(s,ds,a),o(s,hs,a),c(hs,Xe),o(s,_e,a),o(s,ks,a),c(ks,te),c(te,Ze),o(s,be,a),o(s,$s,a),c($s,le),c(le,sn),o(s,de,a),o(s,js,a),c(js,ae),c(ae,en),o(s,he,a),o(s,gs,a),c(gs,re),c(re,nn),o(s,ke,a),o(s,ws,a),c(ws,tn),o(s,$e,a),o(s,K,a),c(K,ln),o(s,je,a),o(s,qs,a),c(qs,an),o(s,ge,a),is[F].m(s,a),o(s,vs,a),o(s,ys,a),c(ys,rn),o(s,we,a),o(s,zs,a),c(zs,on),o(s,qe,a),us[S].m(s,a),o(s,Es,a),o(s,Ts,a),c(Ts,pn),o(s,ve,a),cs[C].m(s,a),o(s,As,a),o(s,Is,a),c(Is,un),o(s,ye,a),fs[L].m(s,a),o(s,Fs,a),o(s,V,a),c(V,oe),c(oe,cn),c(V,fn),o(s,ze,a),q(W,s,a),o(s,Ee,a),o(s,Ps,a),c(Ps,mn),o(s,Te,a),q(G,s,a),o(s,Ae,a),o(s,Ss,a),c(Ss,_n),o(s,Ie,a),o(s,X,a),c(X,bn),o(s,Fe,a),o(s,Ds,a),c(Ds,dn),o(s,Pe,a),q(Z,s,a),o(s,Se,a),o(s,Cs,a),c(Cs,hn),o(s,De,a),q(ss,s,a),o(s,Ce,a),o(s,Ms,a),c(Ms,kn),o(s,Me,a),ms[H].m(s,a),o(s,Ls,a),o(s,xs,a),c(xs,$n),o(s,Le,a),o(s,Hs,a),c(Hs,jn),o(s,xe,a),o(s,es,a),c(es,gn),o(s,He,a),o(s,ns,a),c(ns,pe),c(pe,wn),c(ns,qn),o(s,Ne,a),o(s,Ns,a),c(Ns,vn),o(s,Be,a),_s[B].m(s,a),o(s,Bs,a),o(s,Us,a),c(Us,yn),o(s,Ue,a),o(s,Os,a),c(Os,zn),o(s,Oe,a),q(Y,s,a),o(s,Re,a),o(s,ts,a),c(ts,En),o(s,Ge,a),o(s,Rs,a),c(Rs,Tn),o(s,Ye,a),o(s,Gs,a),c(Gs,ie),c(ie,An),o(s,Je,a),o(s,Ys,a),c(Ys,ue),c(ue,In),o(s,Qe,a),o(s,R,a),c(R,Fn),c(R,ls),c(ls,Pn),c(R,Sn),c(R,as),c(as,Dn),c(R,Cn),o(s,Ke,a),o(s,Js,a),c(Js,Mn),o(s,Ve,a),q(rs,s,a),We=!0},p(s,[a]){const ce={};a&1&&(ce.fw=s[0]),e.$set(ce);let Qs=z;z=Nn(s),z!==Qs&&(Q(),_(os[Qs],1,1,()=>{os[Qs]=null}),J(),T=os[z],T||(T=os[z]=Hn[z](s),T.c()),b(T,1),T.m(bs.parentNode,bs));let Ks=A;A=Un(s),A!==Ks&&(Q(),_(ps[Ks],1,1,()=>{ps[Ks]=null}),J(),I=ps[A],I||(I=ps[A]=Bn[A](s),I.c()),b(I,1),I.m(ds.parentNode,ds));let Vs=F;F=Rn(s),F!==Vs&&(Q(),_(is[Vs],1,1,()=>{is[Vs]=null}),J(),P=is[F],P||(P=is[F]=On[F](s),P.c()),b(P,1),P.m(vs.parentNode,vs));let Ws=S;S=Yn(s),S!==Ws&&(Q(),_(us[Ws],1,1,()=>{us[Ws]=null}),J(),D=us[S],D||(D=us[S]=Gn[S](s),D.c()),b(D,1),D.m(Es.parentNode,Es));let Xs=C;C=Qn(s),C!==Xs&&(Q(),_(cs[Xs],1,1,()=>{cs[Xs]=null}),J(),M=cs[C],M||(M=cs[C]=Jn[C](s),M.c()),b(M,1),M.m(As.parentNode,As));let Zs=L;L=Vn(s),L!==Zs&&(Q(),_(fs[Zs],1,1,()=>{fs[Zs]=null}),J(),x=fs[L],x||(x=fs[L]=Kn[L](s),x.c()),b(x,1),x.m(Fs.parentNode,Fs));const fe={};a&2&&(fe.$$scope={dirty:a,ctx:s}),G.$set(fe);let se=H;H=Xn(s),H!==se&&(Q(),_(ms[se],1,1,()=>{ms[se]=null}),J(),N=ms[H],N||(N=ms[H]=Wn[H](s),N.c()),b(N,1),N.m(Ls.parentNode,Ls));let ee=B;B=st(s),B!==ee&&(Q(),_(_s[ee],1,1,()=>{_s[ee]=null}),J(),U=_s[B],U||(U=_s[B]=Zn[B](s),U.c()),b(U,1),U.m(Bs.parentNode,Bs));const me={};a&2&&(me.$$scope={dirty:a,ctx:s}),Y.$set(me)},i(s){We||(b(e.$$.fragment,s),b(T),b(I),b(P),b(D),b(M),b(x),b(W.$$.fragment,s),b(G.$$.fragment,s),b(Z.$$.fragment,s),b(ss.$$.fragment,s),b(N),b(U),b(Y.$$.fragment,s),b(rs.$$.fragment,s),We=!0)},o(s){_(e.$$.fragment,s),_(T),_(I),_(P),_(D),_(M),_(x),_(W.$$.fragment,s),_(G.$$.fragment,s),_(Z.$$.fragment,s),_(ss.$$.fragment,s),_(N),_(U),_(Y.$$.fragment,s),_(rs.$$.fragment,s),We=!1},d(s){l(t),s&&l(r),v(e,s),s&&l(p),s&&l(n),s&&l(E),os[z].d(s),s&&l(bs),ps[A].d(s),s&&l(ds),s&&l(hs),s&&l(_e),s&&l(ks),s&&l(be),s&&l($s),s&&l(de),s&&l(js),s&&l(he),s&&l(gs),s&&l(ke),s&&l(ws),s&&l($e),s&&l(K),s&&l(je),s&&l(qs),s&&l(ge),is[F].d(s),s&&l(vs),s&&l(ys),s&&l(we),s&&l(zs),s&&l(qe),us[S].d(s),s&&l(Es),s&&l(Ts),s&&l(ve),cs[C].d(s),s&&l(As),s&&l(Is),s&&l(ye),fs[L].d(s),s&&l(Fs),s&&l(V),s&&l(ze),v(W,s),s&&l(Ee),s&&l(Ps),s&&l(Te),v(G,s),s&&l(Ae),s&&l(Ss),s&&l(Ie),s&&l(X),s&&l(Fe),s&&l(Ds),s&&l(Pe),v(Z,s),s&&l(Se),s&&l(Cs),s&&l(De),v(ss,s),s&&l(Ce),s&&l(Ms),s&&l(Me),ms[H].d(s),s&&l(Ls),s&&l(xs),s&&l(Le),s&&l(Hs),s&&l(xe),s&&l(es),s&&l(He),s&&l(ns),s&&l(Ne),s&&l(Ns),s&&l(Be),_s[B].d(s),s&&l(Bs),s&&l(Us),s&&l(Ue),s&&l(Os),s&&l(Oe),v(Y,s),s&&l(Re),s&&l(ts),s&&l(Ge),s&&l(Rs),s&&l(Ye),s&&l(Gs),s&&l(Je),s&&l(Ys),s&&l(Qe),s&&l(R),s&&l(Ke),s&&l(Js),s&&l(Ve),v(rs,s)}}}const ll={local:"",sections:[{local:"",title:"\u6A21\u578B\u9700\u8981\u4E00\u6279\u8F93\u5165"},{local:"",title:"\u586B\u5145\u8F93\u5165"},{local:"",title:"\u6CE8\u610F\u529B\u9762\u5177"},{local:"",title:"\u957F\u5E8F\u5217"}],title:"\u5904\u7406\u591A\u4E2A\u5E8F\u5217"};function al(j,t,r){let e="pt";return Lt(()=>{const p=new URLSearchParams(window.location.search);r(0,e=p.get("fw")||"pt")}),[e]}class fl extends St{constructor(t){super();Dt(this,t,al,tl,Ct,{})}}export{fl as default,ll as metadata};
