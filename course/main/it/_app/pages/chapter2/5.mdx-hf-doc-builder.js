import{S as Ua,i as Ra,s as Va,e as u,k as h,w as z,t as d,M as Ya,c,d as a,m as _,x as v,a as m,h as f,b as w,G as i,g as r,y as j,o as g,p as fe,q as k,B as q,v as Ja,n as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ba}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Qa}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Hs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as y}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as Ga}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as Ka}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";import"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function Wa($){let t,l;return t=new Ga({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/en/chapter2/section5_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/en/chapter2/section5_tf.ipynb"}]}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function Xa($){let t,l;return t=new Ga({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/en/chapter2/section5_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/en/chapter2/section5_pt.ipynb"}]}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function Za($){let t,l;return t=new Qa({props:{id:"ROxrFOEbsQE"}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function ei($){let t,l;return t=new Qa({props:{id:"M6adb1j2jPI"}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function si($){let t,l,s,p;return t=new y({props:{code:`import tensorflow as tf
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
model(input_ids)`}}),s=new y({props:{code:"InvalidArgumentError: Input to reshape is a tensor with 14 values, but the requested shape has 196 [Op:Reshape]",highlighted:'InvalidArgumentError: Input to reshape <span class="hljs-keyword">is</span> a tensor <span class="hljs-keyword">with</span> <span class="hljs-number">14</span> values, but the requested shape has <span class="hljs-number">196</span> [Op:Reshape]'}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function ni($){let t,l,s,p;return t=new y({props:{code:`import torch
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
model(input_ids)`}}),s=new y({props:{code:"IndexError: Dimension out of range (expected to be in range of [-1, 0], but got 1)",highlighted:'IndexError: Dimension out of <span class="hljs-built_in">range</span> (expected to be <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span> of [-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>], but got <span class="hljs-number">1</span>)'}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function ti($){let t,l,s,p;return t=new y({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="tf")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new y({props:{code:`<tf.Tensor: shape=(1, 16), dtype=int32, numpy=
array([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662,
        12172,  2607,  2026,  2878,  2166,  1012,   102]], dtype=int32)>`,highlighted:`&lt;tf.Tensor: shape=(<span class="hljs-number">1</span>, <span class="hljs-number">16</span>), dtype=int32, numpy=
array([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>,
        <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]], dtype=int32)&gt;`}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function ai($){let t,l,s,p;return t=new y({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="pt")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new y({props:{code:`tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,
          2607,  2026,  2878,  2166,  1012,   102]])`,highlighted:`tensor([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,
          <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]])`}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function ii($){let t,l;return t=new y({props:{code:`import tensorflow as tf
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function oi($){let t,l;return t=new y({props:{code:`import torch
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function li($){let t,l;return t=new y({props:{code:`Input IDs: tf.Tensor(
[[ 1045  1005  2310  2042  3403  2005  1037 17662 12172  2607  2026  2878
   2166  1012]], shape=(1, 14), dtype=int32)
Logits: tf.Tensor([[-2.7276208  2.8789377]], shape=(1, 2), dtype=float32)`,highlighted:`Input IDs: tf.Tensor(
[[ <span class="hljs-number">1045</span>  <span class="hljs-number">1005</span>  <span class="hljs-number">2310</span>  <span class="hljs-number">2042</span>  <span class="hljs-number">3403</span>  <span class="hljs-number">2005</span>  <span class="hljs-number">1037</span> <span class="hljs-number">17662</span> <span class="hljs-number">12172</span>  <span class="hljs-number">2607</span>  <span class="hljs-number">2026</span>  <span class="hljs-number">2878</span>
   <span class="hljs-number">2166</span>  <span class="hljs-number">1012</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">14</span>), dtype=int32)
Logits: tf.Tensor([[-<span class="hljs-number">2.7276208</span>  <span class="hljs-number">2.8789377</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function ri($){let t,l;return t=new y({props:{code:`Input IDs: [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]
Logits: [[-2.7276,  2.8789]]`,highlighted:`Input IDs: [[ <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>]]
Logits: [[-<span class="hljs-number">2.7276</span>,  <span class="hljs-number">2.8789</span>]]`}}),{c(){z(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,p){j(t,s,p),l=!0},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){q(t,s)}}}function pi($){let t,l,s,p,n,b,E,A;return{c(){t=u("p"),l=d("\u270F\uFE0F "),s=u("strong"),p=d("Try it out!"),n=d(" Convert this "),b=u("code"),E=d("batched_ids"),A=d(" list into a tensor and pass it through your model. Check that you obtain the same logits as before (but twice)!")},l(K){t=c(K,"P",{});var I=m(t);l=f(I,"\u270F\uFE0F "),s=c(I,"STRONG",{});var xe=m(s);p=f(xe,"Try it out!"),xe.forEach(a),n=f(I," Convert this "),b=c(I,"CODE",{});var _e=m(b);E=f(_e,"batched_ids"),_e.forEach(a),A=f(I," list into a tensor and pass it through your model. Check that you obtain the same logits as before (but twice)!"),I.forEach(a)},m(K,I){r(K,t,I),i(t,l),i(t,s),i(s,p),i(t,n),i(t,b),i(b,E),i(t,A)},d(K){K&&a(t)}}}function ui($){let t,l,s,p;return t=new y({props:{code:`model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

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
<span class="hljs-built_in">print</span>(model(tf.constant(batched_ids)).logits)`}}),s=new y({props:{code:`tf.Tensor([[ 1.5693678 -1.3894581]], shape=(1, 2), dtype=float32)
tf.Tensor([[ 0.5803005  -0.41252428]], shape=(1, 2), dtype=float32)
tf.Tensor(
[[ 1.5693681 -1.3894582]
 [ 1.3373486 -1.2163193]], shape=(2, 2), dtype=float32)`,highlighted:`tf.Tensor([[ <span class="hljs-number">1.5693678</span> -<span class="hljs-number">1.3894581</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)
tf.Tensor([[ <span class="hljs-number">0.5803005</span>  -<span class="hljs-number">0.41252428</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)
tf.Tensor(
[[ <span class="hljs-number">1.5693681</span> -<span class="hljs-number">1.3894582</span>]
 [ <span class="hljs-number">1.3373486</span> -<span class="hljs-number">1.2163193</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function ci($){let t,l,s,p;return t=new y({props:{code:`model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

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
<span class="hljs-built_in">print</span>(model(torch.tensor(batched_ids)).logits)`}}),s=new y({props:{code:`tensor([[ 1.5694, -1.3895]], grad_fn=<AddmmBackward>)
tensor([[ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)
tensor([[ 1.5694, -1.3895],
        [ 1.3373, -1.2163]], grad_fn=<AddmmBackward>)`,highlighted:`tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>]], grad_fn=&lt;AddmmBackward&gt;)
tensor([[ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)
tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>],
        [ <span class="hljs-number">1.3373</span>, -<span class="hljs-number">1.2163</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function mi($){let t,l,s,p;return t=new y({props:{code:`batched_ids = [
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
<span class="hljs-built_in">print</span>(outputs.logits)`}}),s=new y({props:{code:`tf.Tensor(
[[ 1.5693681  -1.3894582 ]
 [ 0.5803021  -0.41252586]], shape=(2, 2), dtype=float32)`,highlighted:`tf.Tensor(
[[ <span class="hljs-number">1.5693681</span>  -<span class="hljs-number">1.3894582</span> ]
 [ <span class="hljs-number">0.5803021</span>  -<span class="hljs-number">0.41252586</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function di($){let t,l,s,p;return t=new y({props:{code:`batched_ids = [
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
<span class="hljs-built_in">print</span>(outputs.logits)`}}),s=new y({props:{code:`tensor([[ 1.5694, -1.3895],
        [ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)`,highlighted:`tensor([[ <span class="hljs-number">1.5694</span>, -<span class="hljs-number">1.3895</span>],
        [ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){z(t.$$.fragment),l=h(),z(s.$$.fragment)},l(n){v(t.$$.fragment,n),l=_(n),v(s.$$.fragment,n)},m(n,b){j(t,n,b),r(n,l,b),j(s,n,b),p=!0},i(n){p||(k(t.$$.fragment,n),k(s.$$.fragment,n),p=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),p=!1},d(n){q(t,n),n&&a(l),q(s,n)}}}function fi($){let t,l,s,p,n;return{c(){t=u("p"),l=d("\u270F\uFE0F "),s=u("strong"),p=d("Provaci anche tu"),n=d(" Applicate manualmente la tokenizzazione alle due frasi utilizzate nella sezione 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D e \u201CI hate this so much!\u201D). Passatele attraverso il modello e verificate che si ottengano gli stessi logits della sezione 2. A questo punto, batchateli insieme utilizzando il token di padding e successivamente create la maschera di attenzione appropriata. Verificate di ottenere gli stessi risultati passando attraverso il modello!")},l(b){t=c(b,"P",{});var E=m(t);l=f(E,"\u270F\uFE0F "),s=c(E,"STRONG",{});var A=m(s);p=f(A,"Provaci anche tu"),A.forEach(a),n=f(E," Applicate manualmente la tokenizzazione alle due frasi utilizzate nella sezione 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D e \u201CI hate this so much!\u201D). Passatele attraverso il modello e verificate che si ottengano gli stessi logits della sezione 2. A questo punto, batchateli insieme utilizzando il token di padding e successivamente create la maschera di attenzione appropriata. Verificate di ottenere gli stessi risultati passando attraverso il modello!"),E.forEach(a)},m(b,E){r(b,t,E),i(t,l),i(t,s),i(s,p),i(t,n)},d(b){b&&a(t)}}}function hi($){let t,l,s,p,n,b,E,A,K,I,xe,_e,P,C,He,F,M,Oe,Be,Cn,Os,T,_s,Fn,Mn,be,Nn,bs,Dn,Ln,xn,gs,Hn,On,ks,Bn,Bs,Qe,Qn,Qs,W,se,$s,ge,Gn,zs,Un,Gs,Ge,Rn,Us,N,D,Ue,Re,Vn,Rs,ne,Yn,vs,Jn,Kn,Vs,L,x,Ve,Ye,Wn,Ys,H,O,Je,Ke,Xn,Js,B,Q,We,ke,js,Zn,et,Ks,$e,Ws,Xe,st,Xs,te,Zs,ae,nt,qs,tt,at,en,X,ie,ws,ze,it,ys,ot,sn,Ze,lt,nn,ve,tn,Y,rt,Es,pt,ut,As,ct,mt,an,je,on,oe,dt,Is,ft,ht,ln,G,U,es,ss,_t,rn,le,bt,Ts,gt,kt,pn,Z,re,Ss,qe,$t,Ps,zt,un,pe,vt,Cs,jt,qt,cn,ns,wt,mn,R,V,ts,as,yt,dn,is,Et,fn,ue,hn,ee,ce,Fs,we,At,Ms,It,_n,os,Tt,bn,me,Ns,St,Pt,Ds,Ct,gn,J,Ft,ye,Mt,Nt,Ee,Dt,Lt,kn,de,xt,Ls,Ht,Ot,$n,Ae,zn;s=new Ka({props:{fw:$[0]}}),A=new Hs({});const Qt=[Xa,Wa],Ie=[];function Gt(e,o){return e[0]==="pt"?0:1}P=Gt($),C=Ie[P]=Qt[P]($);const Ut=[ei,Za],Te=[];function Rt(e,o){return e[0]==="pt"?0:1}F=Rt($),M=Te[F]=Ut[F]($),ge=new Hs({});const Vt=[ni,si],Se=[];function Yt(e,o){return e[0]==="pt"?0:1}N=Yt($),D=Se[N]=Vt[N]($);const Jt=[ai,ti],Pe=[];function Kt(e,o){return e[0]==="pt"?0:1}L=Kt($),x=Pe[L]=Jt[L]($);const Wt=[oi,ii],Ce=[];function Xt(e,o){return e[0]==="pt"?0:1}H=Xt($),O=Ce[H]=Wt[H]($);const Zt=[ri,li],Fe=[];function ea(e,o){return e[0]==="pt"?0:1}B=ea($),Q=Fe[B]=Zt[B]($),$e=new y({props:{code:"batched_ids = [ids, ids]",highlighted:'<span class="hljs-attr">batched_ids</span> = [ids, ids]'}}),te=new Ba({props:{$$slots:{default:[pi]},$$scope:{ctx:$}}}),ze=new Hs({}),ve=new y({props:{code:`batched_ids = [
    [200, 200, 200],
    [200, 200]
]`,highlighted:`batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>]
]`}}),je=new y({props:{code:`padding_id = 100

batched_ids = [
    [200, 200, 200],
    [200, 200, padding_id],
]`,highlighted:`padding_id = <span class="hljs-number">100</span>

batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, padding_id],
]`}});const sa=[ci,ui],Me=[];function na(e,o){return e[0]==="pt"?0:1}G=na($),U=Me[G]=sa[G]($),qe=new Hs({});const ta=[di,mi],Ne=[];function aa(e,o){return e[0]==="pt"?0:1}return R=aa($),V=Ne[R]=ta[R]($),ue=new Ba({props:{$$slots:{default:[fi]},$$scope:{ctx:$}}}),we=new Hs({}),Ae=new y({props:{code:"sequence = sequence[:max_sequence_length]",highlighted:"sequence = sequence[:max_sequence_length]"}}),{c(){t=u("meta"),l=h(),z(s.$$.fragment),p=h(),n=u("h1"),b=u("a"),E=u("span"),z(A.$$.fragment),K=h(),I=u("span"),xe=d("Gestione di sequenze multiple"),_e=h(),C.c(),He=h(),M.c(),Oe=h(),Be=u("p"),Cn=d("Nella sezione precedente abbiamo esplorato il pi\xF9 semplice dei casi d\u2019uso: fare inferenza su una singola sequenza di lunghezza ridotta. Tuttavia, emergono gi\xE0 alcune domande:"),Os=h(),T=u("ul"),_s=u("li"),Fn=d("Come si gestiscono le sequenze multiple?"),Mn=h(),be=u("li"),Nn=d("Come gestiamo sequenze multiple "),bs=u("em"),Dn=d("di lunghezza diversa"),Ln=d("?"),xn=h(),gs=u("li"),Hn=d("Gli indici del vocabolario sono gli unici input che permettono a un modello di funzionare bene?"),On=h(),ks=u("li"),Bn=d("Esiste una sequenza troppo lunga?"),Bs=h(),Qe=u("p"),Qn=d("Vediamo quali tipi di problemi pongono queste domande e come possiamo risolverli utilizzando l\u2019API \u{1F917} Transformers."),Qs=h(),W=u("h2"),se=u("a"),$s=u("span"),z(ge.$$.fragment),Gn=h(),zs=u("span"),Un=d("I modelli si aspettano un gruppo di input"),Gs=h(),Ge=u("p"),Rn=d("Nell\u2019esercizio precedente abbiamo visto come le sequenze vengono tradotte in liste di numeri. Convertiamo questo elenco di numeri in un tensore e inviamolo al modello:"),Us=h(),D.c(),Ue=h(),Re=u("p"),Vn=d("Oh no! Perch\xE9 non ha funzionato?"),Rs=h(),ne=u("p"),Yn=d("Il problema \xE8 che abbiamo inviato una singola sequenza al modello, mentre i modelli \u{1F917} Transformers si aspettano frasi multiple per impostazione predefinita. Qui abbiamo cercato di fare tutto ci\xF2 che il tokenizer ha fatto dietro le quinte, quando lo abbiamo applicato a una "),vs=u("code"),Jn=d("sequenza"),Kn=d(". Ma se si osserva attentamente, si noter\xE0 che il tokenizer non si \xE8 limitato a convertire l\u2019elenco degli ID in ingresso in un tensore, ma ha aggiunto una dimensione:"),Vs=h(),x.c(),Ve=h(),Ye=u("p"),Wn=d("Proviamo di nuovo e aggiungiamo una nuova dimensione:"),Ys=h(),O.c(),Je=h(),Ke=u("p"),Xn=d("Stampiamo gli ID di input e i logit risultanti \u2014  ecco l\u2019output:"),Js=h(),Q.c(),We=h(),ke=u("p"),js=u("em"),Zn=d("Il batch"),et=d(" \xE8 la procedura di invio di pi\xF9 frasi nel modello, tutte in una volta. Se si ha una sola frase, si pu\xF2 creare un batch con una sola sequenza:"),Ks=h(),z($e.$$.fragment),Ws=h(),Xe=u("p"),st=d("Si tratta di un batch di due sequenze identiche!"),Xs=h(),z(te.$$.fragment),Zs=h(),ae=u("p"),nt=d("Il batching consente al modello di funzionare quando si inseriscono pi\xF9 frasi. Utilizzare pi\xF9 sequenze \xE8 altrettanto semplice che creare un batch con una singola sequenza. C\u2019\xE8 per\xF2 un secondo problema. Quando si cerca di raggruppare due (o pi\xF9) frasi, queste potrebbero essere di lunghezza diversa. Se si \xE8 gi\xE0 lavorato con i tensori, si sa che devono essere di forma rettangolare, quindi non \xE8 possibile convertire direttamente l\u2019elenco degli ID in ingresso in un tensore. Per ovviare a questo problema, di solito, utilizziamo la tecnica del "),qs=u("em"),tt=d("padding"),at=d(" sugli input."),en=h(),X=u("h2"),ie=u("a"),ws=u("span"),z(ze.$$.fragment),it=h(),ys=u("span"),ot=d("Aggiungere il padding all'input"),sn=h(),Ze=u("p"),lt=d("Il seguente elenco di liste non pu\xF2 essere convertito in un tensore:"),nn=h(),z(ve.$$.fragment),tn=h(),Y=u("p"),rt=d("Per ovviare a questo problema, useremo il "),Es=u("em"),pt=d("padding"),ut=d(" per dare ai nostri tensori una forma rettangolare. Il padding assicura che tutte le frasi abbiano la stessa lunghezza, aggiungendo una parola speciale chiamata "),As=u("em"),ct=d("padding token"),mt=d(" alle frasi con meno valori. Ad esempio, se si hanno 10 frasi con 10 parole e 1 frase con 20 parole, il padding assicura che tutte le frasi abbiano 20 parole. Nel nostro esempio, il tensore risultante ha il seguente aspetto:"),an=h(),z(je.$$.fragment),on=h(),oe=u("p"),dt=d("L\u2019ID del token di padding si trova in "),Is=u("code"),ft=d("tokenizer.pad_token_id"),ht=d(". Utilizziamolo e inviamo le nostre due frasi attraverso il modello singolarmente e insieme:"),ln=h(),U.c(),es=h(),ss=u("p"),_t=d("C\u2019\xE8 qualcosa che non va con i logit nelle nostre previsioni raggruppate: la seconda riga dovrebbe essere uguale ai logit della seconda frase, ma abbiamo valori completamente diversi!"),rn=h(),le=u("p"),bt=d("Questo perch\xE9 la caratteristica principale dei modelli Transformer sono i livelli di attenzione che "),Ts=u("em"),gt=d("contestualizzano"),kt=d(" ogni token. Questi terranno conto dei token del padding, poich\xE9 si occupano di tutti i token di una sequenza. Per ottenere lo stesso risultato quando si passano nel modello singole frasi di lunghezza diversa o quando si passa un gruppo con le stesse frasi e l\u2019applicazione di un padding, occorre dire a questi livelli di attenzione di ignorare i token del padding. Questo si ottiene utilizzando una maschera di attenzione."),pn=h(),Z=u("h2"),re=u("a"),Ss=u("span"),z(qe.$$.fragment),$t=h(),Ps=u("span"),zt=d("Attention masks"),un=h(),pe=u("p"),vt=d("Le "),Cs=u("em"),jt=d("maschere di attenzione"),qt=d(" sono tensori con la stessa forma del tensore degli ID in ingresso, riempiti con 0 e 1: 1 indica che i token corrispondenti devono essere presi in considerazione, mentre 0 indica che i token corrispondenti non devono essere presi in considerazione (cio\xE8, devono essere ignorati dagli strati di attenzione del modello)."),cn=h(),ns=u("p"),wt=d("Completiamo l\u2019esempio precedente con una maschera di attenzione:"),mn=h(),V.c(),ts=h(),as=u("p"),yt=d("Ora otteniamo gli stessi logits per la seconda frase del batch."),dn=h(),is=u("p"),Et=d("Si noti che l\u2019ultimo valore della seconda sequenza \xE8 un ID di riempimento, che \xE8 un valore 0 nella maschera di attenzione."),fn=h(),z(ue.$$.fragment),hn=h(),ee=u("h2"),ce=u("a"),Fs=u("span"),z(we.$$.fragment),At=h(),Ms=u("span"),It=d("Sequenze pi\xF9 lunghe"),_n=h(),os=u("p"),Tt=d("Con i modelli Transformer, c\u2019\xE8 un limite alla lunghezza delle sequenze che possiamo passare ai modelli. La maggior parte dei modelli gestisce sequenze fino a 512 o 1024 token e si blocca quando viene chiesto di elaborare sequenze pi\xF9 lunghe. Esistono due soluzioni a questo problema:"),bn=h(),me=u("ul"),Ns=u("li"),St=d("Utilizzare un modello con una lunghezza di sequenza supportata maggiore."),Pt=h(),Ds=u("li"),Ct=d("Troncare le sequenze."),gn=h(),J=u("p"),Ft=d("I modelli hanno diverse lunghezze di sequenza supportate e alcuni sono specializzati nella gestione di sequenze molto lunghe. "),ye=u("a"),Mt=d("Longformer"),Nt=d(" \xE8 un esempio, un altro \xE8 "),Ee=u("a"),Dt=d("LED"),Lt=d(".  Se state lavorando a un\u2019attivit\xE0 che richiede sequenze molto lunghe, vi consigliamo di dare un\u2019occhiata a questi modelli."),kn=h(),de=u("p"),xt=d("Altrimenti, si consiglia di troncare le sequenze specificando il parametro "),Ls=u("code"),Ht=d("max_sequence_length"),Ot=d(":"),$n=h(),z(Ae.$$.fragment),this.h()},l(e){const o=Ya('[data-svelte="svelte-1phssyn"]',document.head);t=c(o,"META",{name:!0,content:!0}),o.forEach(a),l=_(e),v(s.$$.fragment,e),p=_(e),n=c(e,"H1",{class:!0});var De=m(n);b=c(De,"A",{id:!0,class:!0,href:!0});var ls=m(b);E=c(ls,"SPAN",{});var rs=m(E);v(A.$$.fragment,rs),rs.forEach(a),ls.forEach(a),K=_(De),I=c(De,"SPAN",{});var ps=m(I);xe=f(ps,"Gestione di sequenze multiple"),ps.forEach(a),De.forEach(a),_e=_(e),C.l(e),He=_(e),M.l(e),Oe=_(e),Be=c(e,"P",{});var us=m(Be);Cn=f(us,"Nella sezione precedente abbiamo esplorato il pi\xF9 semplice dei casi d\u2019uso: fare inferenza su una singola sequenza di lunghezza ridotta. Tuttavia, emergono gi\xE0 alcune domande:"),us.forEach(a),Os=_(e),T=c(e,"UL",{});var S=m(T);_s=c(S,"LI",{});var cs=m(_s);Fn=f(cs,"Come si gestiscono le sequenze multiple?"),cs.forEach(a),Mn=_(S),be=c(S,"LI",{});var Le=m(be);Nn=f(Le,"Come gestiamo sequenze multiple "),bs=c(Le,"EM",{});var ms=m(bs);Dn=f(ms,"di lunghezza diversa"),ms.forEach(a),Ln=f(Le,"?"),Le.forEach(a),xn=_(S),gs=c(S,"LI",{});var ds=m(gs);Hn=f(ds,"Gli indici del vocabolario sono gli unici input che permettono a un modello di funzionare bene?"),ds.forEach(a),On=_(S),ks=c(S,"LI",{});var xs=m(ks);Bn=f(xs,"Esiste una sequenza troppo lunga?"),xs.forEach(a),S.forEach(a),Bs=_(e),Qe=c(e,"P",{});var ia=m(Qe);Qn=f(ia,"Vediamo quali tipi di problemi pongono queste domande e come possiamo risolverli utilizzando l\u2019API \u{1F917} Transformers."),ia.forEach(a),Qs=_(e),W=c(e,"H2",{class:!0});var vn=m(W);se=c(vn,"A",{id:!0,class:!0,href:!0});var oa=m(se);$s=c(oa,"SPAN",{});var la=m($s);v(ge.$$.fragment,la),la.forEach(a),oa.forEach(a),Gn=_(vn),zs=c(vn,"SPAN",{});var ra=m(zs);Un=f(ra,"I modelli si aspettano un gruppo di input"),ra.forEach(a),vn.forEach(a),Gs=_(e),Ge=c(e,"P",{});var pa=m(Ge);Rn=f(pa,"Nell\u2019esercizio precedente abbiamo visto come le sequenze vengono tradotte in liste di numeri. Convertiamo questo elenco di numeri in un tensore e inviamolo al modello:"),pa.forEach(a),Us=_(e),D.l(e),Ue=_(e),Re=c(e,"P",{});var ua=m(Re);Vn=f(ua,"Oh no! Perch\xE9 non ha funzionato?"),ua.forEach(a),Rs=_(e),ne=c(e,"P",{});var jn=m(ne);Yn=f(jn,"Il problema \xE8 che abbiamo inviato una singola sequenza al modello, mentre i modelli \u{1F917} Transformers si aspettano frasi multiple per impostazione predefinita. Qui abbiamo cercato di fare tutto ci\xF2 che il tokenizer ha fatto dietro le quinte, quando lo abbiamo applicato a una "),vs=c(jn,"CODE",{});var ca=m(vs);Jn=f(ca,"sequenza"),ca.forEach(a),Kn=f(jn,". Ma se si osserva attentamente, si noter\xE0 che il tokenizer non si \xE8 limitato a convertire l\u2019elenco degli ID in ingresso in un tensore, ma ha aggiunto una dimensione:"),jn.forEach(a),Vs=_(e),x.l(e),Ve=_(e),Ye=c(e,"P",{});var ma=m(Ye);Wn=f(ma,"Proviamo di nuovo e aggiungiamo una nuova dimensione:"),ma.forEach(a),Ys=_(e),O.l(e),Je=_(e),Ke=c(e,"P",{});var da=m(Ke);Xn=f(da,"Stampiamo gli ID di input e i logit risultanti \u2014  ecco l\u2019output:"),da.forEach(a),Js=_(e),Q.l(e),We=_(e),ke=c(e,"P",{});var Bt=m(ke);js=c(Bt,"EM",{});var fa=m(js);Zn=f(fa,"Il batch"),fa.forEach(a),et=f(Bt," \xE8 la procedura di invio di pi\xF9 frasi nel modello, tutte in una volta. Se si ha una sola frase, si pu\xF2 creare un batch con una sola sequenza:"),Bt.forEach(a),Ks=_(e),v($e.$$.fragment,e),Ws=_(e),Xe=c(e,"P",{});var ha=m(Xe);st=f(ha,"Si tratta di un batch di due sequenze identiche!"),ha.forEach(a),Xs=_(e),v(te.$$.fragment,e),Zs=_(e),ae=c(e,"P",{});var qn=m(ae);nt=f(qn,"Il batching consente al modello di funzionare quando si inseriscono pi\xF9 frasi. Utilizzare pi\xF9 sequenze \xE8 altrettanto semplice che creare un batch con una singola sequenza. C\u2019\xE8 per\xF2 un secondo problema. Quando si cerca di raggruppare due (o pi\xF9) frasi, queste potrebbero essere di lunghezza diversa. Se si \xE8 gi\xE0 lavorato con i tensori, si sa che devono essere di forma rettangolare, quindi non \xE8 possibile convertire direttamente l\u2019elenco degli ID in ingresso in un tensore. Per ovviare a questo problema, di solito, utilizziamo la tecnica del "),qs=c(qn,"EM",{});var _a=m(qs);tt=f(_a,"padding"),_a.forEach(a),at=f(qn," sugli input."),qn.forEach(a),en=_(e),X=c(e,"H2",{class:!0});var wn=m(X);ie=c(wn,"A",{id:!0,class:!0,href:!0});var ba=m(ie);ws=c(ba,"SPAN",{});var ga=m(ws);v(ze.$$.fragment,ga),ga.forEach(a),ba.forEach(a),it=_(wn),ys=c(wn,"SPAN",{});var ka=m(ys);ot=f(ka,"Aggiungere il padding all'input"),ka.forEach(a),wn.forEach(a),sn=_(e),Ze=c(e,"P",{});var $a=m(Ze);lt=f($a,"Il seguente elenco di liste non pu\xF2 essere convertito in un tensore:"),$a.forEach(a),nn=_(e),v(ve.$$.fragment,e),tn=_(e),Y=c(e,"P",{});var fs=m(Y);rt=f(fs,"Per ovviare a questo problema, useremo il "),Es=c(fs,"EM",{});var za=m(Es);pt=f(za,"padding"),za.forEach(a),ut=f(fs," per dare ai nostri tensori una forma rettangolare. Il padding assicura che tutte le frasi abbiano la stessa lunghezza, aggiungendo una parola speciale chiamata "),As=c(fs,"EM",{});var va=m(As);ct=f(va,"padding token"),va.forEach(a),mt=f(fs," alle frasi con meno valori. Ad esempio, se si hanno 10 frasi con 10 parole e 1 frase con 20 parole, il padding assicura che tutte le frasi abbiano 20 parole. Nel nostro esempio, il tensore risultante ha il seguente aspetto:"),fs.forEach(a),an=_(e),v(je.$$.fragment,e),on=_(e),oe=c(e,"P",{});var yn=m(oe);dt=f(yn,"L\u2019ID del token di padding si trova in "),Is=c(yn,"CODE",{});var ja=m(Is);ft=f(ja,"tokenizer.pad_token_id"),ja.forEach(a),ht=f(yn,". Utilizziamolo e inviamo le nostre due frasi attraverso il modello singolarmente e insieme:"),yn.forEach(a),ln=_(e),U.l(e),es=_(e),ss=c(e,"P",{});var qa=m(ss);_t=f(qa,"C\u2019\xE8 qualcosa che non va con i logit nelle nostre previsioni raggruppate: la seconda riga dovrebbe essere uguale ai logit della seconda frase, ma abbiamo valori completamente diversi!"),qa.forEach(a),rn=_(e),le=c(e,"P",{});var En=m(le);bt=f(En,"Questo perch\xE9 la caratteristica principale dei modelli Transformer sono i livelli di attenzione che "),Ts=c(En,"EM",{});var wa=m(Ts);gt=f(wa,"contestualizzano"),wa.forEach(a),kt=f(En," ogni token. Questi terranno conto dei token del padding, poich\xE9 si occupano di tutti i token di una sequenza. Per ottenere lo stesso risultato quando si passano nel modello singole frasi di lunghezza diversa o quando si passa un gruppo con le stesse frasi e l\u2019applicazione di un padding, occorre dire a questi livelli di attenzione di ignorare i token del padding. Questo si ottiene utilizzando una maschera di attenzione."),En.forEach(a),pn=_(e),Z=c(e,"H2",{class:!0});var An=m(Z);re=c(An,"A",{id:!0,class:!0,href:!0});var ya=m(re);Ss=c(ya,"SPAN",{});var Ea=m(Ss);v(qe.$$.fragment,Ea),Ea.forEach(a),ya.forEach(a),$t=_(An),Ps=c(An,"SPAN",{});var Aa=m(Ps);zt=f(Aa,"Attention masks"),Aa.forEach(a),An.forEach(a),un=_(e),pe=c(e,"P",{});var In=m(pe);vt=f(In,"Le "),Cs=c(In,"EM",{});var Ia=m(Cs);jt=f(Ia,"maschere di attenzione"),Ia.forEach(a),qt=f(In," sono tensori con la stessa forma del tensore degli ID in ingresso, riempiti con 0 e 1: 1 indica che i token corrispondenti devono essere presi in considerazione, mentre 0 indica che i token corrispondenti non devono essere presi in considerazione (cio\xE8, devono essere ignorati dagli strati di attenzione del modello)."),In.forEach(a),cn=_(e),ns=c(e,"P",{});var Ta=m(ns);wt=f(Ta,"Completiamo l\u2019esempio precedente con una maschera di attenzione:"),Ta.forEach(a),mn=_(e),V.l(e),ts=_(e),as=c(e,"P",{});var Sa=m(as);yt=f(Sa,"Ora otteniamo gli stessi logits per la seconda frase del batch."),Sa.forEach(a),dn=_(e),is=c(e,"P",{});var Pa=m(is);Et=f(Pa,"Si noti che l\u2019ultimo valore della seconda sequenza \xE8 un ID di riempimento, che \xE8 un valore 0 nella maschera di attenzione."),Pa.forEach(a),fn=_(e),v(ue.$$.fragment,e),hn=_(e),ee=c(e,"H2",{class:!0});var Tn=m(ee);ce=c(Tn,"A",{id:!0,class:!0,href:!0});var Ca=m(ce);Fs=c(Ca,"SPAN",{});var Fa=m(Fs);v(we.$$.fragment,Fa),Fa.forEach(a),Ca.forEach(a),At=_(Tn),Ms=c(Tn,"SPAN",{});var Ma=m(Ms);It=f(Ma,"Sequenze pi\xF9 lunghe"),Ma.forEach(a),Tn.forEach(a),_n=_(e),os=c(e,"P",{});var Na=m(os);Tt=f(Na,"Con i modelli Transformer, c\u2019\xE8 un limite alla lunghezza delle sequenze che possiamo passare ai modelli. La maggior parte dei modelli gestisce sequenze fino a 512 o 1024 token e si blocca quando viene chiesto di elaborare sequenze pi\xF9 lunghe. Esistono due soluzioni a questo problema:"),Na.forEach(a),bn=_(e),me=c(e,"UL",{});var Sn=m(me);Ns=c(Sn,"LI",{});var Da=m(Ns);St=f(Da,"Utilizzare un modello con una lunghezza di sequenza supportata maggiore."),Da.forEach(a),Pt=_(Sn),Ds=c(Sn,"LI",{});var La=m(Ds);Ct=f(La,"Troncare le sequenze."),La.forEach(a),Sn.forEach(a),gn=_(e),J=c(e,"P",{});var hs=m(J);Ft=f(hs,"I modelli hanno diverse lunghezze di sequenza supportate e alcuni sono specializzati nella gestione di sequenze molto lunghe. "),ye=c(hs,"A",{href:!0,rel:!0});var xa=m(ye);Mt=f(xa,"Longformer"),xa.forEach(a),Nt=f(hs," \xE8 un esempio, un altro \xE8 "),Ee=c(hs,"A",{href:!0,rel:!0});var Ha=m(Ee);Dt=f(Ha,"LED"),Ha.forEach(a),Lt=f(hs,".  Se state lavorando a un\u2019attivit\xE0 che richiede sequenze molto lunghe, vi consigliamo di dare un\u2019occhiata a questi modelli."),hs.forEach(a),kn=_(e),de=c(e,"P",{});var Pn=m(de);xt=f(Pn,"Altrimenti, si consiglia di troncare le sequenze specificando il parametro "),Ls=c(Pn,"CODE",{});var Oa=m(Ls);Ht=f(Oa,"max_sequence_length"),Oa.forEach(a),Ot=f(Pn,":"),Pn.forEach(a),$n=_(e),v(Ae.$$.fragment,e),this.h()},h(){w(t,"name","hf:doc:metadata"),w(t,"content",JSON.stringify(_i)),w(b,"id","gestione-di-sequenze-multiple"),w(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(b,"href","#gestione-di-sequenze-multiple"),w(n,"class","relative group"),w(se,"id","i-modelli-si-aspettano-un-gruppo-di-input"),w(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(se,"href","#i-modelli-si-aspettano-un-gruppo-di-input"),w(W,"class","relative group"),w(ie,"id","aggiungere-il-padding-allinput"),w(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ie,"href","#aggiungere-il-padding-allinput"),w(X,"class","relative group"),w(re,"id","attention-masks"),w(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(re,"href","#attention-masks"),w(Z,"class","relative group"),w(ce,"id","sequenze-pi-lunghe"),w(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ce,"href","#sequenze-pi-lunghe"),w(ee,"class","relative group"),w(ye,"href","https://huggingface.co/transformers/model_doc/longformer.html"),w(ye,"rel","nofollow"),w(Ee,"href","https://huggingface.co/transformers/model_doc/led.html"),w(Ee,"rel","nofollow")},m(e,o){i(document.head,t),r(e,l,o),j(s,e,o),r(e,p,o),r(e,n,o),i(n,b),i(b,E),j(A,E,null),i(n,K),i(n,I),i(I,xe),r(e,_e,o),Ie[P].m(e,o),r(e,He,o),Te[F].m(e,o),r(e,Oe,o),r(e,Be,o),i(Be,Cn),r(e,Os,o),r(e,T,o),i(T,_s),i(_s,Fn),i(T,Mn),i(T,be),i(be,Nn),i(be,bs),i(bs,Dn),i(be,Ln),i(T,xn),i(T,gs),i(gs,Hn),i(T,On),i(T,ks),i(ks,Bn),r(e,Bs,o),r(e,Qe,o),i(Qe,Qn),r(e,Qs,o),r(e,W,o),i(W,se),i(se,$s),j(ge,$s,null),i(W,Gn),i(W,zs),i(zs,Un),r(e,Gs,o),r(e,Ge,o),i(Ge,Rn),r(e,Us,o),Se[N].m(e,o),r(e,Ue,o),r(e,Re,o),i(Re,Vn),r(e,Rs,o),r(e,ne,o),i(ne,Yn),i(ne,vs),i(vs,Jn),i(ne,Kn),r(e,Vs,o),Pe[L].m(e,o),r(e,Ve,o),r(e,Ye,o),i(Ye,Wn),r(e,Ys,o),Ce[H].m(e,o),r(e,Je,o),r(e,Ke,o),i(Ke,Xn),r(e,Js,o),Fe[B].m(e,o),r(e,We,o),r(e,ke,o),i(ke,js),i(js,Zn),i(ke,et),r(e,Ks,o),j($e,e,o),r(e,Ws,o),r(e,Xe,o),i(Xe,st),r(e,Xs,o),j(te,e,o),r(e,Zs,o),r(e,ae,o),i(ae,nt),i(ae,qs),i(qs,tt),i(ae,at),r(e,en,o),r(e,X,o),i(X,ie),i(ie,ws),j(ze,ws,null),i(X,it),i(X,ys),i(ys,ot),r(e,sn,o),r(e,Ze,o),i(Ze,lt),r(e,nn,o),j(ve,e,o),r(e,tn,o),r(e,Y,o),i(Y,rt),i(Y,Es),i(Es,pt),i(Y,ut),i(Y,As),i(As,ct),i(Y,mt),r(e,an,o),j(je,e,o),r(e,on,o),r(e,oe,o),i(oe,dt),i(oe,Is),i(Is,ft),i(oe,ht),r(e,ln,o),Me[G].m(e,o),r(e,es,o),r(e,ss,o),i(ss,_t),r(e,rn,o),r(e,le,o),i(le,bt),i(le,Ts),i(Ts,gt),i(le,kt),r(e,pn,o),r(e,Z,o),i(Z,re),i(re,Ss),j(qe,Ss,null),i(Z,$t),i(Z,Ps),i(Ps,zt),r(e,un,o),r(e,pe,o),i(pe,vt),i(pe,Cs),i(Cs,jt),i(pe,qt),r(e,cn,o),r(e,ns,o),i(ns,wt),r(e,mn,o),Ne[R].m(e,o),r(e,ts,o),r(e,as,o),i(as,yt),r(e,dn,o),r(e,is,o),i(is,Et),r(e,fn,o),j(ue,e,o),r(e,hn,o),r(e,ee,o),i(ee,ce),i(ce,Fs),j(we,Fs,null),i(ee,At),i(ee,Ms),i(Ms,It),r(e,_n,o),r(e,os,o),i(os,Tt),r(e,bn,o),r(e,me,o),i(me,Ns),i(Ns,St),i(me,Pt),i(me,Ds),i(Ds,Ct),r(e,gn,o),r(e,J,o),i(J,Ft),i(J,ye),i(ye,Mt),i(J,Nt),i(J,Ee),i(Ee,Dt),i(J,Lt),r(e,kn,o),r(e,de,o),i(de,xt),i(de,Ls),i(Ls,Ht),i(de,Ot),r(e,$n,o),j(Ae,e,o),zn=!0},p(e,[o]){const De={};o&1&&(De.fw=e[0]),s.$set(De);let ls=P;P=Gt(e),P!==ls&&(he(),g(Ie[ls],1,1,()=>{Ie[ls]=null}),fe(),C=Ie[P],C||(C=Ie[P]=Qt[P](e),C.c()),k(C,1),C.m(He.parentNode,He));let rs=F;F=Rt(e),F!==rs&&(he(),g(Te[rs],1,1,()=>{Te[rs]=null}),fe(),M=Te[F],M||(M=Te[F]=Ut[F](e),M.c()),k(M,1),M.m(Oe.parentNode,Oe));let ps=N;N=Yt(e),N!==ps&&(he(),g(Se[ps],1,1,()=>{Se[ps]=null}),fe(),D=Se[N],D||(D=Se[N]=Vt[N](e),D.c()),k(D,1),D.m(Ue.parentNode,Ue));let us=L;L=Kt(e),L!==us&&(he(),g(Pe[us],1,1,()=>{Pe[us]=null}),fe(),x=Pe[L],x||(x=Pe[L]=Jt[L](e),x.c()),k(x,1),x.m(Ve.parentNode,Ve));let S=H;H=Xt(e),H!==S&&(he(),g(Ce[S],1,1,()=>{Ce[S]=null}),fe(),O=Ce[H],O||(O=Ce[H]=Wt[H](e),O.c()),k(O,1),O.m(Je.parentNode,Je));let cs=B;B=ea(e),B!==cs&&(he(),g(Fe[cs],1,1,()=>{Fe[cs]=null}),fe(),Q=Fe[B],Q||(Q=Fe[B]=Zt[B](e),Q.c()),k(Q,1),Q.m(We.parentNode,We));const Le={};o&2&&(Le.$$scope={dirty:o,ctx:e}),te.$set(Le);let ms=G;G=na(e),G!==ms&&(he(),g(Me[ms],1,1,()=>{Me[ms]=null}),fe(),U=Me[G],U||(U=Me[G]=sa[G](e),U.c()),k(U,1),U.m(es.parentNode,es));let ds=R;R=aa(e),R!==ds&&(he(),g(Ne[ds],1,1,()=>{Ne[ds]=null}),fe(),V=Ne[R],V||(V=Ne[R]=ta[R](e),V.c()),k(V,1),V.m(ts.parentNode,ts));const xs={};o&2&&(xs.$$scope={dirty:o,ctx:e}),ue.$set(xs)},i(e){zn||(k(s.$$.fragment,e),k(A.$$.fragment,e),k(C),k(M),k(ge.$$.fragment,e),k(D),k(x),k(O),k(Q),k($e.$$.fragment,e),k(te.$$.fragment,e),k(ze.$$.fragment,e),k(ve.$$.fragment,e),k(je.$$.fragment,e),k(U),k(qe.$$.fragment,e),k(V),k(ue.$$.fragment,e),k(we.$$.fragment,e),k(Ae.$$.fragment,e),zn=!0)},o(e){g(s.$$.fragment,e),g(A.$$.fragment,e),g(C),g(M),g(ge.$$.fragment,e),g(D),g(x),g(O),g(Q),g($e.$$.fragment,e),g(te.$$.fragment,e),g(ze.$$.fragment,e),g(ve.$$.fragment,e),g(je.$$.fragment,e),g(U),g(qe.$$.fragment,e),g(V),g(ue.$$.fragment,e),g(we.$$.fragment,e),g(Ae.$$.fragment,e),zn=!1},d(e){a(t),e&&a(l),q(s,e),e&&a(p),e&&a(n),q(A),e&&a(_e),Ie[P].d(e),e&&a(He),Te[F].d(e),e&&a(Oe),e&&a(Be),e&&a(Os),e&&a(T),e&&a(Bs),e&&a(Qe),e&&a(Qs),e&&a(W),q(ge),e&&a(Gs),e&&a(Ge),e&&a(Us),Se[N].d(e),e&&a(Ue),e&&a(Re),e&&a(Rs),e&&a(ne),e&&a(Vs),Pe[L].d(e),e&&a(Ve),e&&a(Ye),e&&a(Ys),Ce[H].d(e),e&&a(Je),e&&a(Ke),e&&a(Js),Fe[B].d(e),e&&a(We),e&&a(ke),e&&a(Ks),q($e,e),e&&a(Ws),e&&a(Xe),e&&a(Xs),q(te,e),e&&a(Zs),e&&a(ae),e&&a(en),e&&a(X),q(ze),e&&a(sn),e&&a(Ze),e&&a(nn),q(ve,e),e&&a(tn),e&&a(Y),e&&a(an),q(je,e),e&&a(on),e&&a(oe),e&&a(ln),Me[G].d(e),e&&a(es),e&&a(ss),e&&a(rn),e&&a(le),e&&a(pn),e&&a(Z),q(qe),e&&a(un),e&&a(pe),e&&a(cn),e&&a(ns),e&&a(mn),Ne[R].d(e),e&&a(ts),e&&a(as),e&&a(dn),e&&a(is),e&&a(fn),q(ue,e),e&&a(hn),e&&a(ee),q(we),e&&a(_n),e&&a(os),e&&a(bn),e&&a(me),e&&a(gn),e&&a(J),e&&a(kn),e&&a(de),e&&a($n),q(Ae,e)}}}const _i={local:"gestione-di-sequenze-multiple",sections:[{local:"i-modelli-si-aspettano-un-gruppo-di-input",title:"I modelli si aspettano un gruppo di input"},{local:"aggiungere-il-padding-allinput",title:"Aggiungere il padding all'input"},{local:"attention-masks",title:"Attention masks"},{local:"sequenze-pi-lunghe",title:"Sequenze pi\xF9 lunghe"}],title:"Gestione di sequenze multiple"};function bi($,t,l){let s="pt";return Ja(()=>{const p=new URLSearchParams(window.location.search);l(0,s=p.get("fw")||"pt")}),[s]}class yi extends Ua{constructor(t){super();Ra(this,t,bi,hi,Va,{})}}export{yi as default,_i as metadata};
