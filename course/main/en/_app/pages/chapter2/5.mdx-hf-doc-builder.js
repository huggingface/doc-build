import{S as Ua,i as Ra,s as Ga,e as u,k as d,w,t as f,M as Ya,c,d as a,m as b,x as j,a as h,h as m,b as q,G as o,g as i,y as v,o as k,p as fe,q as g,B as y,v as Ja,n as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ba}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Oa}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Hs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as Wa}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as Qa}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Ka($){let n,r;return n=new Wa({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"}]}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function Va($){let n,r;return n=new Wa({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"}]}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function Xa($){let n,r;return n=new Oa({props:{id:"ROxrFOEbsQE"}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function Za($){let n,r;return n=new Oa({props:{id:"M6adb1j2jPI"}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function eo($){let n,r,s,p;return n=new E({props:{code:`import tensorflow as tf
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
model(input_ids)`}}),s=new E({props:{code:"InvalidArgumentError: Input to reshape is a tensor with 14 values, but the requested shape has 196 [Op:Reshape]",highlighted:'InvalidArgumentError: Input to reshape <span class="hljs-keyword">is</span> a tensor <span class="hljs-keyword">with</span> <span class="hljs-number">14</span> values, but the requested shape has <span class="hljs-number">196</span> [Op:Reshape]'}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function so($){let n,r,s,p;return n=new E({props:{code:`import torch
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
model(input_ids)`}}),s=new E({props:{code:"IndexError: Dimension out of range (expected to be in range of [-1, 0], but got 1)",highlighted:'IndexError: Dimension out of <span class="hljs-built_in">range</span> (expected to be <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span> of [-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>], but got <span class="hljs-number">1</span>)'}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function to($){let n,r,s,p;return n=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="tf")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`<tf.Tensor: shape=(1, 16), dtype=int32, numpy=
array([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662,
        12172,  2607,  2026,  2878,  2166,  1012,   102]], dtype=int32)>`,highlighted:`&lt;tf.Tensor: shape=(<span class="hljs-number">1</span>, <span class="hljs-number">16</span>), dtype=int32, numpy=
array([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>,
        <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]], dtype=int32)&gt;`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function no($){let n,r,s,p;return n=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="pt")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,
          2607,  2026,  2878,  2166,  1012,   102]])`,highlighted:`tensor([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,
          <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]])`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function ao($){let n,r;return n=new E({props:{code:`import tensorflow as tf
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function oo($){let n,r;return n=new E({props:{code:`import torch
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function lo($){let n,r;return n=new E({props:{code:`Input IDs: tf.Tensor(
[[ 1045  1005  2310  2042  3403  2005  1037 17662 12172  2607  2026  2878
   2166  1012]], shape=(1, 14), dtype=int32)
Logits: tf.Tensor([[-2.7276208  2.8789377]], shape=(1, 2), dtype=float32)`,highlighted:`Input IDs: tf.Tensor(
[[ <span class="hljs-number">1045</span>  <span class="hljs-number">1005</span>  <span class="hljs-number">2310</span>  <span class="hljs-number">2042</span>  <span class="hljs-number">3403</span>  <span class="hljs-number">2005</span>  <span class="hljs-number">1037</span> <span class="hljs-number">17662</span> <span class="hljs-number">12172</span>  <span class="hljs-number">2607</span>  <span class="hljs-number">2026</span>  <span class="hljs-number">2878</span>
   <span class="hljs-number">2166</span>  <span class="hljs-number">1012</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">14</span>), dtype=int32)
Logits: tf.Tensor([[-<span class="hljs-number">2.7276208</span>  <span class="hljs-number">2.8789377</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function ro($){let n,r;return n=new E({props:{code:`Input IDs: [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]
Logits: [[-2.7276,  2.8789]]`,highlighted:`Input IDs: [[ <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>]]
Logits: [[-<span class="hljs-number">2.7276</span>,  <span class="hljs-number">2.8789</span>]]`}}),{c(){w(n.$$.fragment)},l(s){j(n.$$.fragment,s)},m(s,p){v(n,s,p),r=!0},i(s){r||(g(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){y(n,s)}}}function io($){let n,r,s,p,t,_,T,z;return{c(){n=u("p"),r=f("\u270F\uFE0F "),s=u("strong"),p=f("Try it out!"),t=f(" Convert this "),_=u("code"),T=f("batched_ids"),z=f(" list into a tensor and pass it through your model. Check that you obtain the same logits as before (but twice)!")},l(K){n=c(K,"P",{});var A=h(n);r=m(A,"\u270F\uFE0F "),s=c(A,"STRONG",{});var De=h(s);p=m(De,"Try it out!"),De.forEach(a),t=m(A," Convert this "),_=c(A,"CODE",{});var de=h(_);T=m(de,"batched_ids"),de.forEach(a),z=m(A," list into a tensor and pass it through your model. Check that you obtain the same logits as before (but twice)!"),A.forEach(a)},m(K,A){i(K,n,A),o(n,r),o(n,s),o(s,p),o(n,t),o(n,_),o(_,T),o(n,z)},d(K){K&&a(n)}}}function po($){let n,r,s,p;return n=new E({props:{code:`model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

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
 [ <span class="hljs-number">1.3373486</span> -<span class="hljs-number">1.2163193</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function uo($){let n,r,s,p;return n=new E({props:{code:`model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

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
        [ <span class="hljs-number">1.3373</span>, -<span class="hljs-number">1.2163</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function co($){let n,r,s,p;return n=new E({props:{code:`batched_ids = [
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
 [ <span class="hljs-number">0.5803021</span>  -<span class="hljs-number">0.41252586</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function ho($){let n,r,s,p;return n=new E({props:{code:`batched_ids = [
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
        [ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){w(n.$$.fragment),r=d(),w(s.$$.fragment)},l(t){j(n.$$.fragment,t),r=b(t),j(s.$$.fragment,t)},m(t,_){v(n,t,_),i(t,r,_),v(s,t,_),p=!0},i(t){p||(g(n.$$.fragment,t),g(s.$$.fragment,t),p=!0)},o(t){k(n.$$.fragment,t),k(s.$$.fragment,t),p=!1},d(t){y(n,t),t&&a(r),y(s,t)}}}function fo($){let n,r,s,p,t;return{c(){n=u("p"),r=f("\u270F\uFE0F "),s=u("strong"),p=f("Try it out!"),t=f(" Apply the tokenization manually on the two sentences used in section 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D and \u201CI hate this so much!\u201D). Pass them through the model and check that you get the same logits as in section 2. Now batch them together using the padding token, then create the proper attention mask. Check that you obtain the same results when going through the model!")},l(_){n=c(_,"P",{});var T=h(n);r=m(T,"\u270F\uFE0F "),s=c(T,"STRONG",{});var z=h(s);p=m(z,"Try it out!"),z.forEach(a),t=m(T," Apply the tokenization manually on the two sentences used in section 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D and \u201CI hate this so much!\u201D). Pass them through the model and check that you get the same logits as in section 2. Now batch them together using the padding token, then create the proper attention mask. Check that you obtain the same results when going through the model!"),T.forEach(a)},m(_,T){i(_,n,T),o(n,r),o(n,s),o(s,p),o(n,t)},d(_){_&&a(n)}}}function mo($){let n,r,s,p,t,_,T,z,K,A,De,de,P,x,He,C,S,Be,Oe,Ft,Bs,I,bs,Pt,xt,be,Ct,_s,St,Mt,Lt,ks,Nt,Dt,gs,Ht,Os,We,Bt,Ws,V,se,$s,_e,Ot,ws,Wt,Us,Ue,Ut,Rs,M,L,Re,Ge,Rt,Gs,te,Gt,js,Yt,Jt,Ys,N,D,Ye,Je,Qt,Js,H,B,Qe,Ke,Kt,Qs,O,W,Ve,ke,vs,Vt,Xt,Ks,ge,Vs,Xe,Zt,Xs,ne,Zs,ae,en,ys,sn,tn,et,X,oe,qs,$e,nn,Es,an,st,Ze,on,tt,we,nt,J,ln,Ts,rn,pn,zs,un,cn,at,je,ot,le,hn,As,fn,mn,lt,U,R,es,ss,dn,rt,re,bn,Is,_n,kn,it,Z,ie,Fs,ve,gn,Ps,$n,pt,ye,xs,wn,jn,ut,ts,vn,ct,G,Y,ns,as,yn,ht,os,qn,ft,pe,mt,ee,ue,Cs,qe,En,Ss,Tn,dt,ls,zn,bt,ce,Ms,An,In,Ls,Fn,_t,Q,Pn,Ee,xn,Cn,Te,Sn,Mn,kt,he,Ln,Ns,Nn,Dn,gt,ze,$t;s=new Qa({props:{fw:$[0]}}),z=new Hs({});const On=[Va,Ka],Ae=[];function Wn(e,l){return e[0]==="pt"?0:1}P=Wn($),x=Ae[P]=On[P]($);const Un=[Za,Xa],Ie=[];function Rn(e,l){return e[0]==="pt"?0:1}C=Rn($),S=Ie[C]=Un[C]($),_e=new Hs({});const Gn=[so,eo],Fe=[];function Yn(e,l){return e[0]==="pt"?0:1}M=Yn($),L=Fe[M]=Gn[M]($);const Jn=[no,to],Pe=[];function Qn(e,l){return e[0]==="pt"?0:1}N=Qn($),D=Pe[N]=Jn[N]($);const Kn=[oo,ao],xe=[];function Vn(e,l){return e[0]==="pt"?0:1}H=Vn($),B=xe[H]=Kn[H]($);const Xn=[ro,lo],Ce=[];function Zn(e,l){return e[0]==="pt"?0:1}O=Zn($),W=Ce[O]=Xn[O]($),ge=new E({props:{code:"batched_ids = [ids, ids]",highlighted:'<span class="hljs-attr">batched_ids</span> = [ids, ids]'}}),ne=new Ba({props:{$$slots:{default:[io]},$$scope:{ctx:$}}}),$e=new Hs({}),we=new E({props:{code:`batched_ids = [
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
]`}});const ea=[uo,po],Se=[];function sa(e,l){return e[0]==="pt"?0:1}U=sa($),R=Se[U]=ea[U]($),ve=new Hs({});const ta=[ho,co],Me=[];function na(e,l){return e[0]==="pt"?0:1}return G=na($),Y=Me[G]=ta[G]($),pe=new Ba({props:{$$slots:{default:[fo]},$$scope:{ctx:$}}}),qe=new Hs({}),ze=new E({props:{code:"sequence = sequence[:max_sequence_length]",highlighted:"sequence = sequence[:max_sequence_length]"}}),{c(){n=u("meta"),r=d(),w(s.$$.fragment),p=d(),t=u("h1"),_=u("a"),T=u("span"),w(z.$$.fragment),K=d(),A=u("span"),De=f("Handling multiple sequences"),de=d(),x.c(),He=d(),S.c(),Be=d(),Oe=u("p"),Ft=f("In the previous section, we explored the simplest of use cases: doing inference on a single sequence of a small length. However, some questions emerge already:"),Bs=d(),I=u("ul"),bs=u("li"),Pt=f("How do we handle multiple sequences?"),xt=d(),be=u("li"),Ct=f("How do we handle multiple sequences "),_s=u("em"),St=f("of different lengths"),Mt=f("?"),Lt=d(),ks=u("li"),Nt=f("Are vocabulary indices the only inputs that allow a model to work well?"),Dt=d(),gs=u("li"),Ht=f("Is there such a thing as too long a sequence?"),Os=d(),We=u("p"),Bt=f("Let\u2019s see what kinds of problems these questions pose, and how we can solve them using the \u{1F917} Transformers API."),Ws=d(),V=u("h2"),se=u("a"),$s=u("span"),w(_e.$$.fragment),Ot=d(),ws=u("span"),Wt=f("Models expect a batch of inputs"),Us=d(),Ue=u("p"),Ut=f("In the previous exercise you saw how sequences get translated into lists of numbers. Let\u2019s convert this list of numbers to a tensor and send it to the model:"),Rs=d(),L.c(),Re=d(),Ge=u("p"),Rt=f("Oh no! Why did this fail? \u201CWe followed the steps from the pipeline in section 2."),Gs=d(),te=u("p"),Gt=f("The problem is that we sent a single sequence to the model, whereas \u{1F917} Transformers models expect multiple sentences by default. Here we tried to do everything the tokenizer did behind the scenes when we applied it to a "),js=u("code"),Yt=f("sequence"),Jt=f(", but if you look closely, you\u2019ll see that it didn\u2019t just convert the list of input IDs into a tensor, it added a dimension on top of it:"),Ys=d(),D.c(),Ye=d(),Je=u("p"),Qt=f("Let\u2019s try again and add a new dimension:"),Js=d(),B.c(),Qe=d(),Ke=u("p"),Kt=f("We print the input IDs as well as the resulting logits \u2014 here\u2019s the output:"),Qs=d(),W.c(),Ve=d(),ke=u("p"),vs=u("em"),Vt=f("Batching"),Xt=f(" is the act of sending multiple sentences through the model, all at once. If you only have one sentence, you can just build a batch with a single sequence:"),Ks=d(),w(ge.$$.fragment),Vs=d(),Xe=u("p"),Zt=f("This is a batch of two identical sequences!"),Xs=d(),w(ne.$$.fragment),Zs=d(),ae=u("p"),en=f("Batching allows the model to work when you feed it multiple sentences. Using multiple sequences is just as simple as building a batch with a single sequence. There\u2019s a second issue, though. When you\u2019re trying to batch together two (or more) sentences, they might be of different lengths. If you\u2019ve ever worked with tensors before, you know that they need to be of rectangular shape, so you won\u2019t be able to convert the list of input IDs into a tensor directly. To work around this problem, we usually "),ys=u("em"),sn=f("pad"),tn=f(" the inputs."),et=d(),X=u("h2"),oe=u("a"),qs=u("span"),w($e.$$.fragment),nn=d(),Es=u("span"),an=f("Padding the inputs"),st=d(),Ze=u("p"),on=f("The following list of lists cannot be converted to a tensor:"),tt=d(),w(we.$$.fragment),nt=d(),J=u("p"),ln=f("In order to work around this, we\u2019ll use "),Ts=u("em"),rn=f("padding"),pn=f(" to make our tensors have a rectangular shape. Padding makes sure all our sentences have the same length by adding a special word called the "),zs=u("em"),un=f("padding token"),cn=f(" to the sentences with fewer values. For example, if you have 10 sentences with 10 words and 1 sentence with 20 words, padding will ensure all the sentences have 20 words. In our example, the resulting tensor looks like this:"),at=d(),w(je.$$.fragment),ot=d(),le=u("p"),hn=f("The padding token ID can be found in "),As=u("code"),fn=f("tokenizer.pad_token_id"),mn=f(". Let\u2019s use it and send our two sentences through the model individually and batched together:"),lt=d(),R.c(),es=d(),ss=u("p"),dn=f("There\u2019s something wrong with the logits in our batched predictions: the second row should be the same as the logits for the second sentence, but we\u2019ve got completely different values!"),rt=d(),re=u("p"),bn=f("This is because the key feature of Transformer models is attention layers that "),Is=u("em"),_n=f("contextualize"),kn=f(" each token. These will take into account the padding tokens since they attend to all of the tokens of a sequence. To get the same result when passing individual sentences of different lengths through the model or when passing a batch with the same sentences and padding applied, we need to tell those attention layers to ignore the padding tokens. This is done by using an attention mask."),it=d(),Z=u("h2"),ie=u("a"),Fs=u("span"),w(ve.$$.fragment),gn=d(),Ps=u("span"),$n=f("Attention masks"),pt=d(),ye=u("p"),xs=u("em"),wn=f("Attention masks"),jn=f(" are tensors with the exact same shape as the input IDs tensor, filled with 0s and 1s: 1s indicate the corresponding tokens should be attended to, and 0s indicate the corresponding tokens should not be attended to (i.e., they should be ignored by the attention layers of the model)."),ut=d(),ts=u("p"),vn=f("Let\u2019s complete the previous example with an attention mask:"),ct=d(),Y.c(),ns=d(),as=u("p"),yn=f("Now we get the same logits for the second sentence in the batch."),ht=d(),os=u("p"),qn=f("Notice how the last value of the second sequence is a padding ID, which is a 0 value in the attention mask."),ft=d(),w(pe.$$.fragment),mt=d(),ee=u("h2"),ue=u("a"),Cs=u("span"),w(qe.$$.fragment),En=d(),Ss=u("span"),Tn=f("Longer sequences"),dt=d(),ls=u("p"),zn=f("With Transformer models, there is a limit to the lengths of the sequences we can pass the models. Most models handle sequences of up to 512 or 1024 tokens, and will crash when asked to process longer sequences. There are two solutions to this problem:"),bt=d(),ce=u("ul"),Ms=u("li"),An=f("Use a model with a longer supported sequence length."),In=d(),Ls=u("li"),Fn=f("Truncate your sequences."),_t=d(),Q=u("p"),Pn=f("Models have different supported sequence lengths, and some specialize in handling very long sequences. "),Ee=u("a"),xn=f("Longformer"),Cn=f(" is one example, and another is "),Te=u("a"),Sn=f("LED"),Mn=f(". If you\u2019re working on a task that requires very long sequences, we recommend you take a look at those models."),kt=d(),he=u("p"),Ln=f("Otherwise, we recommend you truncate your sequences by specifying the "),Ns=u("code"),Nn=f("max_sequence_length"),Dn=f(" parameter:"),gt=d(),w(ze.$$.fragment),this.h()},l(e){const l=Ya('[data-svelte="svelte-1phssyn"]',document.head);n=c(l,"META",{name:!0,content:!0}),l.forEach(a),r=b(e),j(s.$$.fragment,e),p=b(e),t=c(e,"H1",{class:!0});var Le=h(t);_=c(Le,"A",{id:!0,class:!0,href:!0});var rs=h(_);T=c(rs,"SPAN",{});var is=h(T);j(z.$$.fragment,is),is.forEach(a),rs.forEach(a),K=b(Le),A=c(Le,"SPAN",{});var ps=h(A);De=m(ps,"Handling multiple sequences"),ps.forEach(a),Le.forEach(a),de=b(e),x.l(e),He=b(e),S.l(e),Be=b(e),Oe=c(e,"P",{});var us=h(Oe);Ft=m(us,"In the previous section, we explored the simplest of use cases: doing inference on a single sequence of a small length. However, some questions emerge already:"),us.forEach(a),Bs=b(e),I=c(e,"UL",{});var F=h(I);bs=c(F,"LI",{});var cs=h(bs);Pt=m(cs,"How do we handle multiple sequences?"),cs.forEach(a),xt=b(F),be=c(F,"LI",{});var Ne=h(be);Ct=m(Ne,"How do we handle multiple sequences "),_s=c(Ne,"EM",{});var hs=h(_s);St=m(hs,"of different lengths"),hs.forEach(a),Mt=m(Ne,"?"),Ne.forEach(a),Lt=b(F),ks=c(F,"LI",{});var fs=h(ks);Nt=m(fs,"Are vocabulary indices the only inputs that allow a model to work well?"),fs.forEach(a),Dt=b(F),gs=c(F,"LI",{});var Ds=h(gs);Ht=m(Ds,"Is there such a thing as too long a sequence?"),Ds.forEach(a),F.forEach(a),Os=b(e),We=c(e,"P",{});var aa=h(We);Bt=m(aa,"Let\u2019s see what kinds of problems these questions pose, and how we can solve them using the \u{1F917} Transformers API."),aa.forEach(a),Ws=b(e),V=c(e,"H2",{class:!0});var wt=h(V);se=c(wt,"A",{id:!0,class:!0,href:!0});var oa=h(se);$s=c(oa,"SPAN",{});var la=h($s);j(_e.$$.fragment,la),la.forEach(a),oa.forEach(a),Ot=b(wt),ws=c(wt,"SPAN",{});var ra=h(ws);Wt=m(ra,"Models expect a batch of inputs"),ra.forEach(a),wt.forEach(a),Us=b(e),Ue=c(e,"P",{});var ia=h(Ue);Ut=m(ia,"In the previous exercise you saw how sequences get translated into lists of numbers. Let\u2019s convert this list of numbers to a tensor and send it to the model:"),ia.forEach(a),Rs=b(e),L.l(e),Re=b(e),Ge=c(e,"P",{});var pa=h(Ge);Rt=m(pa,"Oh no! Why did this fail? \u201CWe followed the steps from the pipeline in section 2."),pa.forEach(a),Gs=b(e),te=c(e,"P",{});var jt=h(te);Gt=m(jt,"The problem is that we sent a single sequence to the model, whereas \u{1F917} Transformers models expect multiple sentences by default. Here we tried to do everything the tokenizer did behind the scenes when we applied it to a "),js=c(jt,"CODE",{});var ua=h(js);Yt=m(ua,"sequence"),ua.forEach(a),Jt=m(jt,", but if you look closely, you\u2019ll see that it didn\u2019t just convert the list of input IDs into a tensor, it added a dimension on top of it:"),jt.forEach(a),Ys=b(e),D.l(e),Ye=b(e),Je=c(e,"P",{});var ca=h(Je);Qt=m(ca,"Let\u2019s try again and add a new dimension:"),ca.forEach(a),Js=b(e),B.l(e),Qe=b(e),Ke=c(e,"P",{});var ha=h(Ke);Kt=m(ha,"We print the input IDs as well as the resulting logits \u2014 here\u2019s the output:"),ha.forEach(a),Qs=b(e),W.l(e),Ve=b(e),ke=c(e,"P",{});var Hn=h(ke);vs=c(Hn,"EM",{});var fa=h(vs);Vt=m(fa,"Batching"),fa.forEach(a),Xt=m(Hn," is the act of sending multiple sentences through the model, all at once. If you only have one sentence, you can just build a batch with a single sequence:"),Hn.forEach(a),Ks=b(e),j(ge.$$.fragment,e),Vs=b(e),Xe=c(e,"P",{});var ma=h(Xe);Zt=m(ma,"This is a batch of two identical sequences!"),ma.forEach(a),Xs=b(e),j(ne.$$.fragment,e),Zs=b(e),ae=c(e,"P",{});var vt=h(ae);en=m(vt,"Batching allows the model to work when you feed it multiple sentences. Using multiple sequences is just as simple as building a batch with a single sequence. There\u2019s a second issue, though. When you\u2019re trying to batch together two (or more) sentences, they might be of different lengths. If you\u2019ve ever worked with tensors before, you know that they need to be of rectangular shape, so you won\u2019t be able to convert the list of input IDs into a tensor directly. To work around this problem, we usually "),ys=c(vt,"EM",{});var da=h(ys);sn=m(da,"pad"),da.forEach(a),tn=m(vt," the inputs."),vt.forEach(a),et=b(e),X=c(e,"H2",{class:!0});var yt=h(X);oe=c(yt,"A",{id:!0,class:!0,href:!0});var ba=h(oe);qs=c(ba,"SPAN",{});var _a=h(qs);j($e.$$.fragment,_a),_a.forEach(a),ba.forEach(a),nn=b(yt),Es=c(yt,"SPAN",{});var ka=h(Es);an=m(ka,"Padding the inputs"),ka.forEach(a),yt.forEach(a),st=b(e),Ze=c(e,"P",{});var ga=h(Ze);on=m(ga,"The following list of lists cannot be converted to a tensor:"),ga.forEach(a),tt=b(e),j(we.$$.fragment,e),nt=b(e),J=c(e,"P",{});var ms=h(J);ln=m(ms,"In order to work around this, we\u2019ll use "),Ts=c(ms,"EM",{});var $a=h(Ts);rn=m($a,"padding"),$a.forEach(a),pn=m(ms," to make our tensors have a rectangular shape. Padding makes sure all our sentences have the same length by adding a special word called the "),zs=c(ms,"EM",{});var wa=h(zs);un=m(wa,"padding token"),wa.forEach(a),cn=m(ms," to the sentences with fewer values. For example, if you have 10 sentences with 10 words and 1 sentence with 20 words, padding will ensure all the sentences have 20 words. In our example, the resulting tensor looks like this:"),ms.forEach(a),at=b(e),j(je.$$.fragment,e),ot=b(e),le=c(e,"P",{});var qt=h(le);hn=m(qt,"The padding token ID can be found in "),As=c(qt,"CODE",{});var ja=h(As);fn=m(ja,"tokenizer.pad_token_id"),ja.forEach(a),mn=m(qt,". Let\u2019s use it and send our two sentences through the model individually and batched together:"),qt.forEach(a),lt=b(e),R.l(e),es=b(e),ss=c(e,"P",{});var va=h(ss);dn=m(va,"There\u2019s something wrong with the logits in our batched predictions: the second row should be the same as the logits for the second sentence, but we\u2019ve got completely different values!"),va.forEach(a),rt=b(e),re=c(e,"P",{});var Et=h(re);bn=m(Et,"This is because the key feature of Transformer models is attention layers that "),Is=c(Et,"EM",{});var ya=h(Is);_n=m(ya,"contextualize"),ya.forEach(a),kn=m(Et," each token. These will take into account the padding tokens since they attend to all of the tokens of a sequence. To get the same result when passing individual sentences of different lengths through the model or when passing a batch with the same sentences and padding applied, we need to tell those attention layers to ignore the padding tokens. This is done by using an attention mask."),Et.forEach(a),it=b(e),Z=c(e,"H2",{class:!0});var Tt=h(Z);ie=c(Tt,"A",{id:!0,class:!0,href:!0});var qa=h(ie);Fs=c(qa,"SPAN",{});var Ea=h(Fs);j(ve.$$.fragment,Ea),Ea.forEach(a),qa.forEach(a),gn=b(Tt),Ps=c(Tt,"SPAN",{});var Ta=h(Ps);$n=m(Ta,"Attention masks"),Ta.forEach(a),Tt.forEach(a),pt=b(e),ye=c(e,"P",{});var Bn=h(ye);xs=c(Bn,"EM",{});var za=h(xs);wn=m(za,"Attention masks"),za.forEach(a),jn=m(Bn," are tensors with the exact same shape as the input IDs tensor, filled with 0s and 1s: 1s indicate the corresponding tokens should be attended to, and 0s indicate the corresponding tokens should not be attended to (i.e., they should be ignored by the attention layers of the model)."),Bn.forEach(a),ut=b(e),ts=c(e,"P",{});var Aa=h(ts);vn=m(Aa,"Let\u2019s complete the previous example with an attention mask:"),Aa.forEach(a),ct=b(e),Y.l(e),ns=b(e),as=c(e,"P",{});var Ia=h(as);yn=m(Ia,"Now we get the same logits for the second sentence in the batch."),Ia.forEach(a),ht=b(e),os=c(e,"P",{});var Fa=h(os);qn=m(Fa,"Notice how the last value of the second sequence is a padding ID, which is a 0 value in the attention mask."),Fa.forEach(a),ft=b(e),j(pe.$$.fragment,e),mt=b(e),ee=c(e,"H2",{class:!0});var zt=h(ee);ue=c(zt,"A",{id:!0,class:!0,href:!0});var Pa=h(ue);Cs=c(Pa,"SPAN",{});var xa=h(Cs);j(qe.$$.fragment,xa),xa.forEach(a),Pa.forEach(a),En=b(zt),Ss=c(zt,"SPAN",{});var Ca=h(Ss);Tn=m(Ca,"Longer sequences"),Ca.forEach(a),zt.forEach(a),dt=b(e),ls=c(e,"P",{});var Sa=h(ls);zn=m(Sa,"With Transformer models, there is a limit to the lengths of the sequences we can pass the models. Most models handle sequences of up to 512 or 1024 tokens, and will crash when asked to process longer sequences. There are two solutions to this problem:"),Sa.forEach(a),bt=b(e),ce=c(e,"UL",{});var At=h(ce);Ms=c(At,"LI",{});var Ma=h(Ms);An=m(Ma,"Use a model with a longer supported sequence length."),Ma.forEach(a),In=b(At),Ls=c(At,"LI",{});var La=h(Ls);Fn=m(La,"Truncate your sequences."),La.forEach(a),At.forEach(a),_t=b(e),Q=c(e,"P",{});var ds=h(Q);Pn=m(ds,"Models have different supported sequence lengths, and some specialize in handling very long sequences. "),Ee=c(ds,"A",{href:!0,rel:!0});var Na=h(Ee);xn=m(Na,"Longformer"),Na.forEach(a),Cn=m(ds," is one example, and another is "),Te=c(ds,"A",{href:!0,rel:!0});var Da=h(Te);Sn=m(Da,"LED"),Da.forEach(a),Mn=m(ds,". If you\u2019re working on a task that requires very long sequences, we recommend you take a look at those models."),ds.forEach(a),kt=b(e),he=c(e,"P",{});var It=h(he);Ln=m(It,"Otherwise, we recommend you truncate your sequences by specifying the "),Ns=c(It,"CODE",{});var Ha=h(Ns);Nn=m(Ha,"max_sequence_length"),Ha.forEach(a),Dn=m(It," parameter:"),It.forEach(a),gt=b(e),j(ze.$$.fragment,e),this.h()},h(){q(n,"name","hf:doc:metadata"),q(n,"content",JSON.stringify(bo)),q(_,"id","handling-multiple-sequences"),q(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(_,"href","#handling-multiple-sequences"),q(t,"class","relative group"),q(se,"id","models-expect-a-batch-of-inputs"),q(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(se,"href","#models-expect-a-batch-of-inputs"),q(V,"class","relative group"),q(oe,"id","padding-the-inputs"),q(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(oe,"href","#padding-the-inputs"),q(X,"class","relative group"),q(ie,"id","attention-masks"),q(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(ie,"href","#attention-masks"),q(Z,"class","relative group"),q(ue,"id","longer-sequences"),q(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),q(ue,"href","#longer-sequences"),q(ee,"class","relative group"),q(Ee,"href","https://huggingface.co/transformers/model_doc/longformer.html"),q(Ee,"rel","nofollow"),q(Te,"href","https://huggingface.co/transformers/model_doc/led.html"),q(Te,"rel","nofollow")},m(e,l){o(document.head,n),i(e,r,l),v(s,e,l),i(e,p,l),i(e,t,l),o(t,_),o(_,T),v(z,T,null),o(t,K),o(t,A),o(A,De),i(e,de,l),Ae[P].m(e,l),i(e,He,l),Ie[C].m(e,l),i(e,Be,l),i(e,Oe,l),o(Oe,Ft),i(e,Bs,l),i(e,I,l),o(I,bs),o(bs,Pt),o(I,xt),o(I,be),o(be,Ct),o(be,_s),o(_s,St),o(be,Mt),o(I,Lt),o(I,ks),o(ks,Nt),o(I,Dt),o(I,gs),o(gs,Ht),i(e,Os,l),i(e,We,l),o(We,Bt),i(e,Ws,l),i(e,V,l),o(V,se),o(se,$s),v(_e,$s,null),o(V,Ot),o(V,ws),o(ws,Wt),i(e,Us,l),i(e,Ue,l),o(Ue,Ut),i(e,Rs,l),Fe[M].m(e,l),i(e,Re,l),i(e,Ge,l),o(Ge,Rt),i(e,Gs,l),i(e,te,l),o(te,Gt),o(te,js),o(js,Yt),o(te,Jt),i(e,Ys,l),Pe[N].m(e,l),i(e,Ye,l),i(e,Je,l),o(Je,Qt),i(e,Js,l),xe[H].m(e,l),i(e,Qe,l),i(e,Ke,l),o(Ke,Kt),i(e,Qs,l),Ce[O].m(e,l),i(e,Ve,l),i(e,ke,l),o(ke,vs),o(vs,Vt),o(ke,Xt),i(e,Ks,l),v(ge,e,l),i(e,Vs,l),i(e,Xe,l),o(Xe,Zt),i(e,Xs,l),v(ne,e,l),i(e,Zs,l),i(e,ae,l),o(ae,en),o(ae,ys),o(ys,sn),o(ae,tn),i(e,et,l),i(e,X,l),o(X,oe),o(oe,qs),v($e,qs,null),o(X,nn),o(X,Es),o(Es,an),i(e,st,l),i(e,Ze,l),o(Ze,on),i(e,tt,l),v(we,e,l),i(e,nt,l),i(e,J,l),o(J,ln),o(J,Ts),o(Ts,rn),o(J,pn),o(J,zs),o(zs,un),o(J,cn),i(e,at,l),v(je,e,l),i(e,ot,l),i(e,le,l),o(le,hn),o(le,As),o(As,fn),o(le,mn),i(e,lt,l),Se[U].m(e,l),i(e,es,l),i(e,ss,l),o(ss,dn),i(e,rt,l),i(e,re,l),o(re,bn),o(re,Is),o(Is,_n),o(re,kn),i(e,it,l),i(e,Z,l),o(Z,ie),o(ie,Fs),v(ve,Fs,null),o(Z,gn),o(Z,Ps),o(Ps,$n),i(e,pt,l),i(e,ye,l),o(ye,xs),o(xs,wn),o(ye,jn),i(e,ut,l),i(e,ts,l),o(ts,vn),i(e,ct,l),Me[G].m(e,l),i(e,ns,l),i(e,as,l),o(as,yn),i(e,ht,l),i(e,os,l),o(os,qn),i(e,ft,l),v(pe,e,l),i(e,mt,l),i(e,ee,l),o(ee,ue),o(ue,Cs),v(qe,Cs,null),o(ee,En),o(ee,Ss),o(Ss,Tn),i(e,dt,l),i(e,ls,l),o(ls,zn),i(e,bt,l),i(e,ce,l),o(ce,Ms),o(Ms,An),o(ce,In),o(ce,Ls),o(Ls,Fn),i(e,_t,l),i(e,Q,l),o(Q,Pn),o(Q,Ee),o(Ee,xn),o(Q,Cn),o(Q,Te),o(Te,Sn),o(Q,Mn),i(e,kt,l),i(e,he,l),o(he,Ln),o(he,Ns),o(Ns,Nn),o(he,Dn),i(e,gt,l),v(ze,e,l),$t=!0},p(e,[l]){const Le={};l&1&&(Le.fw=e[0]),s.$set(Le);let rs=P;P=Wn(e),P!==rs&&(me(),k(Ae[rs],1,1,()=>{Ae[rs]=null}),fe(),x=Ae[P],x||(x=Ae[P]=On[P](e),x.c()),g(x,1),x.m(He.parentNode,He));let is=C;C=Rn(e),C!==is&&(me(),k(Ie[is],1,1,()=>{Ie[is]=null}),fe(),S=Ie[C],S||(S=Ie[C]=Un[C](e),S.c()),g(S,1),S.m(Be.parentNode,Be));let ps=M;M=Yn(e),M!==ps&&(me(),k(Fe[ps],1,1,()=>{Fe[ps]=null}),fe(),L=Fe[M],L||(L=Fe[M]=Gn[M](e),L.c()),g(L,1),L.m(Re.parentNode,Re));let us=N;N=Qn(e),N!==us&&(me(),k(Pe[us],1,1,()=>{Pe[us]=null}),fe(),D=Pe[N],D||(D=Pe[N]=Jn[N](e),D.c()),g(D,1),D.m(Ye.parentNode,Ye));let F=H;H=Vn(e),H!==F&&(me(),k(xe[F],1,1,()=>{xe[F]=null}),fe(),B=xe[H],B||(B=xe[H]=Kn[H](e),B.c()),g(B,1),B.m(Qe.parentNode,Qe));let cs=O;O=Zn(e),O!==cs&&(me(),k(Ce[cs],1,1,()=>{Ce[cs]=null}),fe(),W=Ce[O],W||(W=Ce[O]=Xn[O](e),W.c()),g(W,1),W.m(Ve.parentNode,Ve));const Ne={};l&2&&(Ne.$$scope={dirty:l,ctx:e}),ne.$set(Ne);let hs=U;U=sa(e),U!==hs&&(me(),k(Se[hs],1,1,()=>{Se[hs]=null}),fe(),R=Se[U],R||(R=Se[U]=ea[U](e),R.c()),g(R,1),R.m(es.parentNode,es));let fs=G;G=na(e),G!==fs&&(me(),k(Me[fs],1,1,()=>{Me[fs]=null}),fe(),Y=Me[G],Y||(Y=Me[G]=ta[G](e),Y.c()),g(Y,1),Y.m(ns.parentNode,ns));const Ds={};l&2&&(Ds.$$scope={dirty:l,ctx:e}),pe.$set(Ds)},i(e){$t||(g(s.$$.fragment,e),g(z.$$.fragment,e),g(x),g(S),g(_e.$$.fragment,e),g(L),g(D),g(B),g(W),g(ge.$$.fragment,e),g(ne.$$.fragment,e),g($e.$$.fragment,e),g(we.$$.fragment,e),g(je.$$.fragment,e),g(R),g(ve.$$.fragment,e),g(Y),g(pe.$$.fragment,e),g(qe.$$.fragment,e),g(ze.$$.fragment,e),$t=!0)},o(e){k(s.$$.fragment,e),k(z.$$.fragment,e),k(x),k(S),k(_e.$$.fragment,e),k(L),k(D),k(B),k(W),k(ge.$$.fragment,e),k(ne.$$.fragment,e),k($e.$$.fragment,e),k(we.$$.fragment,e),k(je.$$.fragment,e),k(R),k(ve.$$.fragment,e),k(Y),k(pe.$$.fragment,e),k(qe.$$.fragment,e),k(ze.$$.fragment,e),$t=!1},d(e){a(n),e&&a(r),y(s,e),e&&a(p),e&&a(t),y(z),e&&a(de),Ae[P].d(e),e&&a(He),Ie[C].d(e),e&&a(Be),e&&a(Oe),e&&a(Bs),e&&a(I),e&&a(Os),e&&a(We),e&&a(Ws),e&&a(V),y(_e),e&&a(Us),e&&a(Ue),e&&a(Rs),Fe[M].d(e),e&&a(Re),e&&a(Ge),e&&a(Gs),e&&a(te),e&&a(Ys),Pe[N].d(e),e&&a(Ye),e&&a(Je),e&&a(Js),xe[H].d(e),e&&a(Qe),e&&a(Ke),e&&a(Qs),Ce[O].d(e),e&&a(Ve),e&&a(ke),e&&a(Ks),y(ge,e),e&&a(Vs),e&&a(Xe),e&&a(Xs),y(ne,e),e&&a(Zs),e&&a(ae),e&&a(et),e&&a(X),y($e),e&&a(st),e&&a(Ze),e&&a(tt),y(we,e),e&&a(nt),e&&a(J),e&&a(at),y(je,e),e&&a(ot),e&&a(le),e&&a(lt),Se[U].d(e),e&&a(es),e&&a(ss),e&&a(rt),e&&a(re),e&&a(it),e&&a(Z),y(ve),e&&a(pt),e&&a(ye),e&&a(ut),e&&a(ts),e&&a(ct),Me[G].d(e),e&&a(ns),e&&a(as),e&&a(ht),e&&a(os),e&&a(ft),y(pe,e),e&&a(mt),e&&a(ee),y(qe),e&&a(dt),e&&a(ls),e&&a(bt),e&&a(ce),e&&a(_t),e&&a(Q),e&&a(kt),e&&a(he),e&&a(gt),y(ze,e)}}}const bo={local:"handling-multiple-sequences",sections:[{local:"models-expect-a-batch-of-inputs",title:"Models expect a batch of inputs"},{local:"padding-the-inputs",title:"Padding the inputs"},{local:"attention-masks",title:"Attention masks"},{local:"longer-sequences",title:"Longer sequences"}],title:"Handling multiple sequences"};function _o($,n,r){let s="pt";return Ja(()=>{const p=new URLSearchParams(window.location.search);r(0,s=p.get("fw")||"pt")}),[s]}class qo extends Ua{constructor(n){super();Ra(this,n,_o,mo,Ga,{})}}export{qo as default,bo as metadata};
