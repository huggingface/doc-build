import{S as Yt,i as Jt,s as Kt,e as m,k as h,w as v,t as d,M as Wt,c as u,d as t,m as _,x as q,a as c,h as f,b as z,G as o,g as i,y as j,o as k,p as de,q as $,B as w,v as Xt,n as fe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ut}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Gt}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Bs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Qt}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as Zt}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function eo(g){let n,l;return n=new Qt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"}]}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function so(g){let n,l;return n=new Qt({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"}]}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function ao(g){let n,l;return n=new Gt({props:{id:"ROxrFOEbsQE"}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function no(g){let n,l;return n=new Gt({props:{id:"M6adb1j2jPI"}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function to(g){let n,l,s,p;return n=new E({props:{code:`import tensorflow as tf
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
model(input_ids)`}}),s=new E({props:{code:"InvalidArgumentError: Input to reshape is a tensor with 14 values, but the requested shape has 196 [Op:Reshape]",highlighted:'InvalidArgumentError: Input to reshape <span class="hljs-keyword">is</span> a tensor <span class="hljs-keyword">with</span> <span class="hljs-number">14</span> values, but the requested shape has <span class="hljs-number">196</span> [Op:Reshape]'}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function oo(g){let n,l,s,p;return n=new E({props:{code:`import torch
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
model(input_ids)`}}),s=new E({props:{code:"IndexError: Dimension out of range (expected to be in range of [-1, 0], but got 1)",highlighted:'IndexError: Dimension out of <span class="hljs-built_in">range</span> (expected to be <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span> of [-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>], but got <span class="hljs-number">1</span>)'}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function ro(g){let n,l,s,p;return n=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="tf")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`<tf.Tensor: shape=(1, 16), dtype=int32, numpy=
array([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662,
        12172,  2607,  2026,  2878,  2166,  1012,   102]], dtype=int32)>`,highlighted:`&lt;tf.Tensor: shape=(<span class="hljs-number">1</span>, <span class="hljs-number">16</span>), dtype=int32, numpy=
array([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>,
        <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]], dtype=int32)&gt;`}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function lo(g){let n,l,s,p;return n=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="pt")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,
          2607,  2026,  2878,  2166,  1012,   102]])`,highlighted:`tensor([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,
          <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]])`}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function io(g){let n,l;return n=new E({props:{code:`import tensorflow as tf
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function po(g){let n,l;return n=new E({props:{code:`import torch
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function mo(g){let n,l;return n=new E({props:{code:`Input IDs: tf.Tensor(
[[ 1045  1005  2310  2042  3403  2005  1037 17662 12172  2607  2026  2878
   2166  1012]], shape=(1, 14), dtype=int32)
Logits: tf.Tensor([[-2.7276208  2.8789377]], shape=(1, 2), dtype=float32)`,highlighted:`Input IDs: tf.Tensor(
[[ <span class="hljs-number">1045</span>  <span class="hljs-number">1005</span>  <span class="hljs-number">2310</span>  <span class="hljs-number">2042</span>  <span class="hljs-number">3403</span>  <span class="hljs-number">2005</span>  <span class="hljs-number">1037</span> <span class="hljs-number">17662</span> <span class="hljs-number">12172</span>  <span class="hljs-number">2607</span>  <span class="hljs-number">2026</span>  <span class="hljs-number">2878</span>
   <span class="hljs-number">2166</span>  <span class="hljs-number">1012</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">14</span>), dtype=int32)
Logits: tf.Tensor([[-<span class="hljs-number">2.7276208</span>  <span class="hljs-number">2.8789377</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function uo(g){let n,l;return n=new E({props:{code:`Input IDs: [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]
Logits: [[-2.7276,  2.8789]]`,highlighted:`Input IDs: [[ <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>]]
Logits: [[-<span class="hljs-number">2.7276</span>,  <span class="hljs-number">2.8789</span>]]`}}),{c(){v(n.$$.fragment)},l(s){q(n.$$.fragment,s)},m(s,p){j(n,s,p),l=!0},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){w(n,s)}}}function co(g){let n,l,s,p,a,b,y,A;return{c(){n=m("p"),l=d("\u270F\uFE0F "),s=m("strong"),p=d("Experimente!"),a=d(" Converta esta lista de "),b=m("code"),y=d("batched_ids"),A=d(" em um tensor e passe-a atrav\xE9s de seu modelo. Verifique se voc\xEA obt\xE9m os mesmos logits que antes (mas duas vezes)!")},l(W){n=u(W,"P",{});var I=c(n);l=f(I,"\u270F\uFE0F "),s=u(I,"STRONG",{});var Oe=c(s);p=f(Oe,"Experimente!"),Oe.forEach(t),a=f(I," Converta esta lista de "),b=u(I,"CODE",{});var he=c(b);y=f(he,"batched_ids"),he.forEach(t),A=f(I," em um tensor e passe-a atrav\xE9s de seu modelo. Verifique se voc\xEA obt\xE9m os mesmos logits que antes (mas duas vezes)!"),I.forEach(t)},m(W,I){i(W,n,I),o(n,l),o(n,s),o(s,p),o(n,a),o(n,b),o(b,y),o(n,A)},d(W){W&&t(n)}}}function fo(g){let n,l,s,p;return n=new E({props:{code:`model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

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
 [ <span class="hljs-number">1.3373486</span> -<span class="hljs-number">1.2163193</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function ho(g){let n,l,s,p;return n=new E({props:{code:`model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

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
        [ <span class="hljs-number">1.3373</span>, -<span class="hljs-number">1.2163</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function _o(g){let n,l,s,p;return n=new E({props:{code:`batched_ids = [
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
 [ <span class="hljs-number">0.5803021</span>  -<span class="hljs-number">0.41252586</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function bo(g){let n,l,s,p;return n=new E({props:{code:`batched_ids = [
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
        [ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){v(n.$$.fragment),l=h(),v(s.$$.fragment)},l(a){q(n.$$.fragment,a),l=_(a),q(s.$$.fragment,a)},m(a,b){j(n,a,b),i(a,l,b),j(s,a,b),p=!0},i(a){p||($(n.$$.fragment,a),$(s.$$.fragment,a),p=!0)},o(a){k(n.$$.fragment,a),k(s.$$.fragment,a),p=!1},d(a){w(n,a),a&&t(l),w(s,a)}}}function ko(g){let n,l,s,p,a;return{c(){n=m("p"),l=d("\u270F\uFE0F "),s=m("strong"),p=d("Experimente!"),a=d(" Aplique a tokeniza\xE7\xE3o manualmente nas duas frases usadas na se\xE7\xE3o 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D e \u201CI hate this so much!\u201D). Passe-as atrav\xE9s do modelo e verifique se voc\xEA obt\xE9m os mesmos logits que na se\xE7\xE3o 2. Agora, agrupe-os usando o token de padding e depois crie a m\xE1scara de aten\xE7\xE3o adequada. Verifique que voc\xEA obtenha os mesmos resultados ao passar pelo modelo!")},l(b){n=u(b,"P",{});var y=c(n);l=f(y,"\u270F\uFE0F "),s=u(y,"STRONG",{});var A=c(s);p=f(A,"Experimente!"),A.forEach(t),a=f(y," Aplique a tokeniza\xE7\xE3o manualmente nas duas frases usadas na se\xE7\xE3o 2 (\u201CI\u2019ve been waiting for a HuggingFace course my whole life.\u201D e \u201CI hate this so much!\u201D). Passe-as atrav\xE9s do modelo e verifique se voc\xEA obt\xE9m os mesmos logits que na se\xE7\xE3o 2. Agora, agrupe-os usando o token de padding e depois crie a m\xE1scara de aten\xE7\xE3o adequada. Verifique que voc\xEA obtenha os mesmos resultados ao passar pelo modelo!"),y.forEach(t)},m(b,y){i(b,n,y),o(n,l),o(n,s),o(s,p),o(n,a)},d(b){b&&t(n)}}}function $o(g){let n,l,s,p,a,b,y,A,W,I,Oe,he,S,x,Le,F,C,He,Be,Sa,Vs,T,bs,xa,Fa,_e,Ca,ks,Ma,Da,Na,$s,Oa,La,gs,Ha,Rs,Ve,Ba,Us,X,ae,vs,be,Va,qs,Ra,Gs,Re,Ua,Qs,M,D,Ue,Ge,Ga,Ys,ne,Qa,js,Ya,Ja,Js,N,O,Qe,Ye,Ka,Ks,L,H,Je,Ke,Wa,Ws,B,V,We,ke,ws,Xa,Za,Xs,$e,Zs,Xe,en,ea,te,sa,oe,sn,zs,an,nn,aa,Z,re,Es,ge,tn,ys,on,na,Ze,rn,ta,ve,oa,Y,ln,As,pn,mn,Is,un,cn,ra,qe,la,le,dn,Ts,fn,hn,ia,R,U,es,ss,_n,pa,J,bn,Ps,kn,$n,Ss,gn,vn,ma,ee,ie,xs,je,qn,Fs,jn,ua,we,Cs,wn,zn,ca,as,En,da,G,Q,ns,ts,yn,fa,os,An,ha,pe,_a,se,me,Ms,ze,In,Ds,Tn,ba,rs,Pn,ka,ue,Ns,Sn,xn,Os,Fn,$a,K,Cn,Ee,Mn,Dn,ye,Nn,On,ga,ce,Ln,Ls,Hn,Bn,va,Ae,qa;s=new Zt({props:{fw:g[0]}}),A=new Bs({});const Un=[so,eo],Ie=[];function Gn(e,r){return e[0]==="pt"?0:1}S=Gn(g),x=Ie[S]=Un[S](g);const Qn=[no,ao],Te=[];function Yn(e,r){return e[0]==="pt"?0:1}F=Yn(g),C=Te[F]=Qn[F](g),be=new Bs({});const Jn=[oo,to],Pe=[];function Kn(e,r){return e[0]==="pt"?0:1}M=Kn(g),D=Pe[M]=Jn[M](g);const Wn=[lo,ro],Se=[];function Xn(e,r){return e[0]==="pt"?0:1}N=Xn(g),O=Se[N]=Wn[N](g);const Zn=[po,io],xe=[];function et(e,r){return e[0]==="pt"?0:1}L=et(g),H=xe[L]=Zn[L](g);const st=[uo,mo],Fe=[];function at(e,r){return e[0]==="pt"?0:1}B=at(g),V=Fe[B]=st[B](g),$e=new E({props:{code:"batched_ids = [ids, ids]",highlighted:'<span class="hljs-attr">batched_ids</span> = [ids, ids]'}}),te=new Ut({props:{$$slots:{default:[co]},$$scope:{ctx:g}}}),ge=new Bs({}),ve=new E({props:{code:`batched_ids = [
    [200, 200, 200],
    [200, 200]
]`,highlighted:`batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>]
]`}}),qe=new E({props:{code:`padding_id = 100

batched_ids = [
    [200, 200, 200],
    [200, 200, padding_id],
]`,highlighted:`padding_id = <span class="hljs-number">100</span>

batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, padding_id],
]`}});const nt=[ho,fo],Ce=[];function tt(e,r){return e[0]==="pt"?0:1}R=tt(g),U=Ce[R]=nt[R](g),je=new Bs({});const ot=[bo,_o],Me=[];function rt(e,r){return e[0]==="pt"?0:1}return G=rt(g),Q=Me[G]=ot[G](g),pe=new Ut({props:{$$slots:{default:[ko]},$$scope:{ctx:g}}}),ze=new Bs({}),Ae=new E({props:{code:"sequence = sequence[:max_sequence_length]",highlighted:"sequence = sequence[:max_sequence_length]"}}),{c(){n=m("meta"),l=h(),v(s.$$.fragment),p=h(),a=m("h1"),b=m("a"),y=m("span"),v(A.$$.fragment),W=h(),I=m("span"),Oe=d("Tratando sequ\xEAncias m\xFAltiplas"),he=h(),x.c(),Le=h(),C.c(),He=h(),Be=m("p"),Sa=d("Na se\xE7\xE3o anterior, exploramos os casos mais simples de uso: fazer infer\xEAncia sobre uma \xFAnica sequ\xEAncia de pequeno comprimento. No entanto, surgem algumas quest\xF5es:"),Vs=h(),T=m("ul"),bs=m("li"),xa=d("Como n\xF3s tratamos diversas sequ\xEAncias?"),Fa=h(),_e=m("li"),Ca=d("Como n\xF3s tratamos diversas sequ\xEAncias "),ks=m("em"),Ma=d("de diferentes tamanhos"),Da=d("?"),Na=h(),$s=m("li"),Oa=d("Os \xEDndices de vocabul\xE1rio s\xE3o as \xFAnicas entradas que permitem que um modelo funcione bem?"),La=h(),gs=m("li"),Ha=d("Existe uma sequ\xEAncia muito longa?"),Rs=h(),Ve=m("p"),Ba=d("Vamos ver que tipos de problemas estas quest\xF5es colocam, e como podemos resolv\xEA-los usando a API do \u{1F917} Transformers."),Us=h(),X=m("h2"),ae=m("a"),vs=m("span"),v(be.$$.fragment),Va=h(),qs=m("span"),Ra=d("Modelos esperam um batch de entradas"),Gs=h(),Re=m("p"),Ua=d("No exerc\xEDcio anterior, voc\xEA viu como as sequ\xEAncias s\xE3o traduzidas em listas de n\xFAmeros. Vamos converter esta lista de n\xFAmeros em um tensor e envi\xE1-la para o modelo:"),Qs=h(),D.c(),Ue=h(),Ge=m("p"),Ga=d("Oh n\xE3o! Por que isso falhou? \u201CSeguimos os passos do pipeline na se\xE7\xE3o 2."),Ys=h(),ne=m("p"),Qa=d("O problema \xE9 que enviamos uma \xFAnica sequ\xEAncia para o modelo, enquanto que os \u{1F917} transformers esperam v\xE1rias senten\xE7as por padr\xE3o. Aqui tentamos fazer tudo o que o tokenizer fez nos bastidores quando o aplicamos a uma "),js=m("code"),Ya=d("sequ\xEAncia"),Ja=d(", mas se voc\xEA olhar com aten\xE7\xE3o, ver\xE1 que ele n\xE3o apenas converteu a lista de IDs de entrada em um tensor, mas acrescentou uma dimens\xE3o em cima dele:"),Js=h(),O.c(),Qe=h(),Ye=m("p"),Ka=d("Vamos tentar novamente e acrescentar uma nova dimens\xE3o:"),Ks=h(),H.c(),Je=h(),Ke=m("p"),Wa=d("Printamos os IDs de entrada assim como os logits resultantes - aqui est\xE1 a sa\xEDda:"),Ws=h(),V.c(),We=h(),ke=m("p"),ws=m("em"),Xa=d("Batching"),Za=d(" \xE9 o ato de enviar m\xFAltiplas senten\xE7as atrav\xE9s do modelo, todas de uma s\xF3 vez. Se voc\xEA tiver apenas uma frase, voc\xEA pode apenas construir um lote com uma \xFAnica sequ\xEAncia:"),Xs=h(),v($e.$$.fragment),Zs=h(),Xe=m("p"),en=d("Este \xE9 um lote de duas sequ\xEAncias id\xEAnticas!"),ea=h(),v(te.$$.fragment),sa=h(),oe=m("p"),sn=d("O Batching permite que o modelo funcione quando voc\xEA o alimenta com v\xE1rias frases. Usar v\xE1rias sequ\xEAncias \xE9 t\xE3o simples quanto construir um lote com uma \xFAnica sequ\xEAncia. H\xE1 uma segunda quest\xE3o, no entanto. Quando voc\xEA est\xE1 tentando agrupar duas (ou mais) senten\xE7as, elas podem ser de comprimentos diferentes. Se voc\xEA j\xE1 trabalhou com tensores antes, voc\xEA sabe que eles precisam ser de forma retangular, ent\xE3o voc\xEA n\xE3o ser\xE1 capaz de converter a lista de IDs de entrada em um tensor diretamente. Para contornar este problema, normalmente realizamos uma "),zs=m("em"),an=d("padroniza\xE7\xE3o"),nn=d(" (padding) nas entradas."),aa=h(),Z=m("h2"),re=m("a"),Es=m("span"),v(ge.$$.fragment),tn=h(),ys=m("span"),on=d("Realizando padding nas entradas"),na=h(),Ze=m("p"),rn=d("A seguinte lista de listas n\xE3o pode ser convertida em um tensor:"),ta=h(),v(ve.$$.fragment),oa=h(),Y=m("p"),ln=d("Para contornar isso, usaremos "),As=m("em"),pn=d("padding"),mn=d(" para fazer com que nossos tensores tenham uma forma retangular. O padding garante que todas as nossas frases tenham o mesmo comprimento, acrescentando uma palavra especial chamada "),Is=m("em"),un=d("padding token"),cn=d(" \xE0s frases com menos valores. Por exemplo, se voc\xEA tiver 10 frases com 10 palavras e 1 frase com 20 palavras, o padding garantir\xE1 que todas as frases tenham 20 palavras. Em nosso exemplo, o tensor resultante se parece com isto:"),ra=h(),v(qe.$$.fragment),la=h(),le=m("p"),dn=d("O padding do ID token pode ser encontrada em "),Ts=m("code"),fn=d("tokenizer.pad_token_id"),hn=d(". Vamos utiliz\xE1-lo e enviar nossas duas frases atrav\xE9s do modelo individualmente e agrupadas em batches:"),ia=h(),U.c(),es=h(),ss=m("p"),_n=d("H\xE1 algo errado com os logits em nossas predi\xE7\xF5es em batches: a segunda fileira deveria ser a mesma que os logits para a segunda frase, mas temos valores completamente diferentes!"),pa=h(),J=m("p"),bn=d("Isto porque a caracter\xEDstica chave dos Transformer s\xE3o as camadas de aten\xE7\xE3o que "),Ps=m("em"),kn=d("contextualizam"),$n=d(" cada token. Estes levar\xE3o em conta os tokens de padding, uma vez que atendem a todos os tokens de uma sequ\xEAncia. Para obter o mesmo resultado ao passar frases individuais de diferentes comprimentos pelo modelo ou ao passar um batch com as mesmas frases e os paddings aplicados, precisamos dizer a essas camadas de aten\xE7\xE3o para ignorar os tokens de padding. Isto \xE9 feito com o uso de uma m\xE1scara de aten\xE7\xE3o ("),Ss=m("em"),gn=d("attention mask"),vn=d(")."),ma=h(),ee=m("h2"),ie=m("a"),xs=m("span"),v(je.$$.fragment),qn=h(),Fs=m("span"),jn=d("Attention masks"),ua=h(),we=m("p"),Cs=m("em"),wn=d("Attention masks"),zn=d(" s\xE3o tensores com a mesma forma exata do tensor de IDs de entrada, preenchidos com 0s e 1s: 1s indicam que os tokens correspondentes devem ser atendidas, e 0s indicam que os tokens correspondentes n\xE3o devem ser atendidas (ou seja, devem ser ignoradas pelas camadas de aten\xE7\xE3o do modelo)."),ca=h(),as=m("p"),En=d("Vamos completar o exemplo anterior com uma m\xE1scara de aten\xE7\xE3o:"),da=h(),Q.c(),ns=h(),ts=m("p"),yn=d("Agora obtemos os mesmos logits para a segunda frase do batch."),fa=h(),os=m("p"),An=d("Observe como o \xFAltimo valor da segunda sequ\xEAncia \xE9 um ID de padding, que \xE9 um valor 0 na m\xE1scara de aten\xE7\xE3o."),ha=h(),v(pe.$$.fragment),_a=h(),se=m("h2"),me=m("a"),Ms=m("span"),v(ze.$$.fragment),In=h(),Ds=m("span"),Tn=d("Sequ\xEAncias mais longas"),ba=h(),rs=m("p"),Pn=d("Com os Transformer, h\xE1 um limite para os comprimentos das sequ\xEAncias, podemos passar os modelos. A maioria dos modelos manipula sequ\xEAncias de at\xE9 512 ou 1024 tokens, e se chocar\xE1 quando solicitados a processar sequ\xEAncias mais longas. H\xE1 duas solu\xE7\xF5es para este problema:"),ka=h(),ue=m("ul"),Ns=m("li"),Sn=d("Use um modelo com suporte a um comprimento mais longo de sequ\xEAncia."),xn=h(),Os=m("li"),Fn=d("Trunque suas sequ\xEAncias."),$a=h(),K=m("p"),Cn=d("Os modelos t\xEAm diferentes comprimentos de sequ\xEAncia suportados, e alguns s\xE3o especializados no tratamento de sequ\xEAncias muito longas. O "),Ee=m("a"),Mn=d("Longformer"),Dn=d(" \xE9 um exemplo, e outro exemplo \xE9 o "),ye=m("a"),Nn=d("LED"),On=d(". Se voc\xEA estiver trabalhando em uma tarefa que requer sequ\xEAncias muito longas, recomendamos que voc\xEA d\xEA uma olhada nesses modelos."),ga=h(),ce=m("p"),Ln=d("Caso contr\xE1rio, recomendamos que voc\xEA trunque suas sequ\xEAncias, especificando o par\xE2metro "),Ls=m("code"),Hn=d("max_sequence_length"),Bn=d(":"),va=h(),v(Ae.$$.fragment),this.h()},l(e){const r=Wt('[data-svelte="svelte-1phssyn"]',document.head);n=u(r,"META",{name:!0,content:!0}),r.forEach(t),l=_(e),q(s.$$.fragment,e),p=_(e),a=u(e,"H1",{class:!0});var De=c(a);b=u(De,"A",{id:!0,class:!0,href:!0});var ls=c(b);y=u(ls,"SPAN",{});var is=c(y);q(A.$$.fragment,is),is.forEach(t),ls.forEach(t),W=_(De),I=u(De,"SPAN",{});var ps=c(I);Oe=f(ps,"Tratando sequ\xEAncias m\xFAltiplas"),ps.forEach(t),De.forEach(t),he=_(e),x.l(e),Le=_(e),C.l(e),He=_(e),Be=u(e,"P",{});var ms=c(Be);Sa=f(ms,"Na se\xE7\xE3o anterior, exploramos os casos mais simples de uso: fazer infer\xEAncia sobre uma \xFAnica sequ\xEAncia de pequeno comprimento. No entanto, surgem algumas quest\xF5es:"),ms.forEach(t),Vs=_(e),T=u(e,"UL",{});var P=c(T);bs=u(P,"LI",{});var us=c(bs);xa=f(us,"Como n\xF3s tratamos diversas sequ\xEAncias?"),us.forEach(t),Fa=_(P),_e=u(P,"LI",{});var Ne=c(_e);Ca=f(Ne,"Como n\xF3s tratamos diversas sequ\xEAncias "),ks=u(Ne,"EM",{});var cs=c(ks);Ma=f(cs,"de diferentes tamanhos"),cs.forEach(t),Da=f(Ne,"?"),Ne.forEach(t),Na=_(P),$s=u(P,"LI",{});var ds=c($s);Oa=f(ds,"Os \xEDndices de vocabul\xE1rio s\xE3o as \xFAnicas entradas que permitem que um modelo funcione bem?"),ds.forEach(t),La=_(P),gs=u(P,"LI",{});var Hs=c(gs);Ha=f(Hs,"Existe uma sequ\xEAncia muito longa?"),Hs.forEach(t),P.forEach(t),Rs=_(e),Ve=u(e,"P",{});var lt=c(Ve);Ba=f(lt,"Vamos ver que tipos de problemas estas quest\xF5es colocam, e como podemos resolv\xEA-los usando a API do \u{1F917} Transformers."),lt.forEach(t),Us=_(e),X=u(e,"H2",{class:!0});var ja=c(X);ae=u(ja,"A",{id:!0,class:!0,href:!0});var it=c(ae);vs=u(it,"SPAN",{});var pt=c(vs);q(be.$$.fragment,pt),pt.forEach(t),it.forEach(t),Va=_(ja),qs=u(ja,"SPAN",{});var mt=c(qs);Ra=f(mt,"Modelos esperam um batch de entradas"),mt.forEach(t),ja.forEach(t),Gs=_(e),Re=u(e,"P",{});var ut=c(Re);Ua=f(ut,"No exerc\xEDcio anterior, voc\xEA viu como as sequ\xEAncias s\xE3o traduzidas em listas de n\xFAmeros. Vamos converter esta lista de n\xFAmeros em um tensor e envi\xE1-la para o modelo:"),ut.forEach(t),Qs=_(e),D.l(e),Ue=_(e),Ge=u(e,"P",{});var ct=c(Ge);Ga=f(ct,"Oh n\xE3o! Por que isso falhou? \u201CSeguimos os passos do pipeline na se\xE7\xE3o 2."),ct.forEach(t),Ys=_(e),ne=u(e,"P",{});var wa=c(ne);Qa=f(wa,"O problema \xE9 que enviamos uma \xFAnica sequ\xEAncia para o modelo, enquanto que os \u{1F917} transformers esperam v\xE1rias senten\xE7as por padr\xE3o. Aqui tentamos fazer tudo o que o tokenizer fez nos bastidores quando o aplicamos a uma "),js=u(wa,"CODE",{});var dt=c(js);Ya=f(dt,"sequ\xEAncia"),dt.forEach(t),Ja=f(wa,", mas se voc\xEA olhar com aten\xE7\xE3o, ver\xE1 que ele n\xE3o apenas converteu a lista de IDs de entrada em um tensor, mas acrescentou uma dimens\xE3o em cima dele:"),wa.forEach(t),Js=_(e),O.l(e),Qe=_(e),Ye=u(e,"P",{});var ft=c(Ye);Ka=f(ft,"Vamos tentar novamente e acrescentar uma nova dimens\xE3o:"),ft.forEach(t),Ks=_(e),H.l(e),Je=_(e),Ke=u(e,"P",{});var ht=c(Ke);Wa=f(ht,"Printamos os IDs de entrada assim como os logits resultantes - aqui est\xE1 a sa\xEDda:"),ht.forEach(t),Ws=_(e),V.l(e),We=_(e),ke=u(e,"P",{});var Vn=c(ke);ws=u(Vn,"EM",{});var _t=c(ws);Xa=f(_t,"Batching"),_t.forEach(t),Za=f(Vn," \xE9 o ato de enviar m\xFAltiplas senten\xE7as atrav\xE9s do modelo, todas de uma s\xF3 vez. Se voc\xEA tiver apenas uma frase, voc\xEA pode apenas construir um lote com uma \xFAnica sequ\xEAncia:"),Vn.forEach(t),Xs=_(e),q($e.$$.fragment,e),Zs=_(e),Xe=u(e,"P",{});var bt=c(Xe);en=f(bt,"Este \xE9 um lote de duas sequ\xEAncias id\xEAnticas!"),bt.forEach(t),ea=_(e),q(te.$$.fragment,e),sa=_(e),oe=u(e,"P",{});var za=c(oe);sn=f(za,"O Batching permite que o modelo funcione quando voc\xEA o alimenta com v\xE1rias frases. Usar v\xE1rias sequ\xEAncias \xE9 t\xE3o simples quanto construir um lote com uma \xFAnica sequ\xEAncia. H\xE1 uma segunda quest\xE3o, no entanto. Quando voc\xEA est\xE1 tentando agrupar duas (ou mais) senten\xE7as, elas podem ser de comprimentos diferentes. Se voc\xEA j\xE1 trabalhou com tensores antes, voc\xEA sabe que eles precisam ser de forma retangular, ent\xE3o voc\xEA n\xE3o ser\xE1 capaz de converter a lista de IDs de entrada em um tensor diretamente. Para contornar este problema, normalmente realizamos uma "),zs=u(za,"EM",{});var kt=c(zs);an=f(kt,"padroniza\xE7\xE3o"),kt.forEach(t),nn=f(za," (padding) nas entradas."),za.forEach(t),aa=_(e),Z=u(e,"H2",{class:!0});var Ea=c(Z);re=u(Ea,"A",{id:!0,class:!0,href:!0});var $t=c(re);Es=u($t,"SPAN",{});var gt=c(Es);q(ge.$$.fragment,gt),gt.forEach(t),$t.forEach(t),tn=_(Ea),ys=u(Ea,"SPAN",{});var vt=c(ys);on=f(vt,"Realizando padding nas entradas"),vt.forEach(t),Ea.forEach(t),na=_(e),Ze=u(e,"P",{});var qt=c(Ze);rn=f(qt,"A seguinte lista de listas n\xE3o pode ser convertida em um tensor:"),qt.forEach(t),ta=_(e),q(ve.$$.fragment,e),oa=_(e),Y=u(e,"P",{});var fs=c(Y);ln=f(fs,"Para contornar isso, usaremos "),As=u(fs,"EM",{});var jt=c(As);pn=f(jt,"padding"),jt.forEach(t),mn=f(fs," para fazer com que nossos tensores tenham uma forma retangular. O padding garante que todas as nossas frases tenham o mesmo comprimento, acrescentando uma palavra especial chamada "),Is=u(fs,"EM",{});var wt=c(Is);un=f(wt,"padding token"),wt.forEach(t),cn=f(fs," \xE0s frases com menos valores. Por exemplo, se voc\xEA tiver 10 frases com 10 palavras e 1 frase com 20 palavras, o padding garantir\xE1 que todas as frases tenham 20 palavras. Em nosso exemplo, o tensor resultante se parece com isto:"),fs.forEach(t),ra=_(e),q(qe.$$.fragment,e),la=_(e),le=u(e,"P",{});var ya=c(le);dn=f(ya,"O padding do ID token pode ser encontrada em "),Ts=u(ya,"CODE",{});var zt=c(Ts);fn=f(zt,"tokenizer.pad_token_id"),zt.forEach(t),hn=f(ya,". Vamos utiliz\xE1-lo e enviar nossas duas frases atrav\xE9s do modelo individualmente e agrupadas em batches:"),ya.forEach(t),ia=_(e),U.l(e),es=_(e),ss=u(e,"P",{});var Et=c(ss);_n=f(Et,"H\xE1 algo errado com os logits em nossas predi\xE7\xF5es em batches: a segunda fileira deveria ser a mesma que os logits para a segunda frase, mas temos valores completamente diferentes!"),Et.forEach(t),pa=_(e),J=u(e,"P",{});var hs=c(J);bn=f(hs,"Isto porque a caracter\xEDstica chave dos Transformer s\xE3o as camadas de aten\xE7\xE3o que "),Ps=u(hs,"EM",{});var yt=c(Ps);kn=f(yt,"contextualizam"),yt.forEach(t),$n=f(hs," cada token. Estes levar\xE3o em conta os tokens de padding, uma vez que atendem a todos os tokens de uma sequ\xEAncia. Para obter o mesmo resultado ao passar frases individuais de diferentes comprimentos pelo modelo ou ao passar um batch com as mesmas frases e os paddings aplicados, precisamos dizer a essas camadas de aten\xE7\xE3o para ignorar os tokens de padding. Isto \xE9 feito com o uso de uma m\xE1scara de aten\xE7\xE3o ("),Ss=u(hs,"EM",{});var At=c(Ss);gn=f(At,"attention mask"),At.forEach(t),vn=f(hs,")."),hs.forEach(t),ma=_(e),ee=u(e,"H2",{class:!0});var Aa=c(ee);ie=u(Aa,"A",{id:!0,class:!0,href:!0});var It=c(ie);xs=u(It,"SPAN",{});var Tt=c(xs);q(je.$$.fragment,Tt),Tt.forEach(t),It.forEach(t),qn=_(Aa),Fs=u(Aa,"SPAN",{});var Pt=c(Fs);jn=f(Pt,"Attention masks"),Pt.forEach(t),Aa.forEach(t),ua=_(e),we=u(e,"P",{});var Rn=c(we);Cs=u(Rn,"EM",{});var St=c(Cs);wn=f(St,"Attention masks"),St.forEach(t),zn=f(Rn," s\xE3o tensores com a mesma forma exata do tensor de IDs de entrada, preenchidos com 0s e 1s: 1s indicam que os tokens correspondentes devem ser atendidas, e 0s indicam que os tokens correspondentes n\xE3o devem ser atendidas (ou seja, devem ser ignoradas pelas camadas de aten\xE7\xE3o do modelo)."),Rn.forEach(t),ca=_(e),as=u(e,"P",{});var xt=c(as);En=f(xt,"Vamos completar o exemplo anterior com uma m\xE1scara de aten\xE7\xE3o:"),xt.forEach(t),da=_(e),Q.l(e),ns=_(e),ts=u(e,"P",{});var Ft=c(ts);yn=f(Ft,"Agora obtemos os mesmos logits para a segunda frase do batch."),Ft.forEach(t),fa=_(e),os=u(e,"P",{});var Ct=c(os);An=f(Ct,"Observe como o \xFAltimo valor da segunda sequ\xEAncia \xE9 um ID de padding, que \xE9 um valor 0 na m\xE1scara de aten\xE7\xE3o."),Ct.forEach(t),ha=_(e),q(pe.$$.fragment,e),_a=_(e),se=u(e,"H2",{class:!0});var Ia=c(se);me=u(Ia,"A",{id:!0,class:!0,href:!0});var Mt=c(me);Ms=u(Mt,"SPAN",{});var Dt=c(Ms);q(ze.$$.fragment,Dt),Dt.forEach(t),Mt.forEach(t),In=_(Ia),Ds=u(Ia,"SPAN",{});var Nt=c(Ds);Tn=f(Nt,"Sequ\xEAncias mais longas"),Nt.forEach(t),Ia.forEach(t),ba=_(e),rs=u(e,"P",{});var Ot=c(rs);Pn=f(Ot,"Com os Transformer, h\xE1 um limite para os comprimentos das sequ\xEAncias, podemos passar os modelos. A maioria dos modelos manipula sequ\xEAncias de at\xE9 512 ou 1024 tokens, e se chocar\xE1 quando solicitados a processar sequ\xEAncias mais longas. H\xE1 duas solu\xE7\xF5es para este problema:"),Ot.forEach(t),ka=_(e),ue=u(e,"UL",{});var Ta=c(ue);Ns=u(Ta,"LI",{});var Lt=c(Ns);Sn=f(Lt,"Use um modelo com suporte a um comprimento mais longo de sequ\xEAncia."),Lt.forEach(t),xn=_(Ta),Os=u(Ta,"LI",{});var Ht=c(Os);Fn=f(Ht,"Trunque suas sequ\xEAncias."),Ht.forEach(t),Ta.forEach(t),$a=_(e),K=u(e,"P",{});var _s=c(K);Cn=f(_s,"Os modelos t\xEAm diferentes comprimentos de sequ\xEAncia suportados, e alguns s\xE3o especializados no tratamento de sequ\xEAncias muito longas. O "),Ee=u(_s,"A",{href:!0,rel:!0});var Bt=c(Ee);Mn=f(Bt,"Longformer"),Bt.forEach(t),Dn=f(_s," \xE9 um exemplo, e outro exemplo \xE9 o "),ye=u(_s,"A",{href:!0,rel:!0});var Vt=c(ye);Nn=f(Vt,"LED"),Vt.forEach(t),On=f(_s,". Se voc\xEA estiver trabalhando em uma tarefa que requer sequ\xEAncias muito longas, recomendamos que voc\xEA d\xEA uma olhada nesses modelos."),_s.forEach(t),ga=_(e),ce=u(e,"P",{});var Pa=c(ce);Ln=f(Pa,"Caso contr\xE1rio, recomendamos que voc\xEA trunque suas sequ\xEAncias, especificando o par\xE2metro "),Ls=u(Pa,"CODE",{});var Rt=c(Ls);Hn=f(Rt,"max_sequence_length"),Rt.forEach(t),Bn=f(Pa,":"),Pa.forEach(t),va=_(e),q(Ae.$$.fragment,e),this.h()},h(){z(n,"name","hf:doc:metadata"),z(n,"content",JSON.stringify(go)),z(b,"id","tratando-sequncias-mltiplas"),z(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(b,"href","#tratando-sequncias-mltiplas"),z(a,"class","relative group"),z(ae,"id","modelos-esperam-um-batch-de-entradas"),z(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(ae,"href","#modelos-esperam-um-batch-de-entradas"),z(X,"class","relative group"),z(re,"id","realizando-padding-nas-entradas"),z(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(re,"href","#realizando-padding-nas-entradas"),z(Z,"class","relative group"),z(ie,"id","attention-masks"),z(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(ie,"href","#attention-masks"),z(ee,"class","relative group"),z(me,"id","sequncias-mais-longas"),z(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(me,"href","#sequncias-mais-longas"),z(se,"class","relative group"),z(Ee,"href","https://huggingface.co/transformers/model_doc/longformer.html"),z(Ee,"rel","nofollow"),z(ye,"href","https://huggingface.co/transformers/model_doc/led.html"),z(ye,"rel","nofollow")},m(e,r){o(document.head,n),i(e,l,r),j(s,e,r),i(e,p,r),i(e,a,r),o(a,b),o(b,y),j(A,y,null),o(a,W),o(a,I),o(I,Oe),i(e,he,r),Ie[S].m(e,r),i(e,Le,r),Te[F].m(e,r),i(e,He,r),i(e,Be,r),o(Be,Sa),i(e,Vs,r),i(e,T,r),o(T,bs),o(bs,xa),o(T,Fa),o(T,_e),o(_e,Ca),o(_e,ks),o(ks,Ma),o(_e,Da),o(T,Na),o(T,$s),o($s,Oa),o(T,La),o(T,gs),o(gs,Ha),i(e,Rs,r),i(e,Ve,r),o(Ve,Ba),i(e,Us,r),i(e,X,r),o(X,ae),o(ae,vs),j(be,vs,null),o(X,Va),o(X,qs),o(qs,Ra),i(e,Gs,r),i(e,Re,r),o(Re,Ua),i(e,Qs,r),Pe[M].m(e,r),i(e,Ue,r),i(e,Ge,r),o(Ge,Ga),i(e,Ys,r),i(e,ne,r),o(ne,Qa),o(ne,js),o(js,Ya),o(ne,Ja),i(e,Js,r),Se[N].m(e,r),i(e,Qe,r),i(e,Ye,r),o(Ye,Ka),i(e,Ks,r),xe[L].m(e,r),i(e,Je,r),i(e,Ke,r),o(Ke,Wa),i(e,Ws,r),Fe[B].m(e,r),i(e,We,r),i(e,ke,r),o(ke,ws),o(ws,Xa),o(ke,Za),i(e,Xs,r),j($e,e,r),i(e,Zs,r),i(e,Xe,r),o(Xe,en),i(e,ea,r),j(te,e,r),i(e,sa,r),i(e,oe,r),o(oe,sn),o(oe,zs),o(zs,an),o(oe,nn),i(e,aa,r),i(e,Z,r),o(Z,re),o(re,Es),j(ge,Es,null),o(Z,tn),o(Z,ys),o(ys,on),i(e,na,r),i(e,Ze,r),o(Ze,rn),i(e,ta,r),j(ve,e,r),i(e,oa,r),i(e,Y,r),o(Y,ln),o(Y,As),o(As,pn),o(Y,mn),o(Y,Is),o(Is,un),o(Y,cn),i(e,ra,r),j(qe,e,r),i(e,la,r),i(e,le,r),o(le,dn),o(le,Ts),o(Ts,fn),o(le,hn),i(e,ia,r),Ce[R].m(e,r),i(e,es,r),i(e,ss,r),o(ss,_n),i(e,pa,r),i(e,J,r),o(J,bn),o(J,Ps),o(Ps,kn),o(J,$n),o(J,Ss),o(Ss,gn),o(J,vn),i(e,ma,r),i(e,ee,r),o(ee,ie),o(ie,xs),j(je,xs,null),o(ee,qn),o(ee,Fs),o(Fs,jn),i(e,ua,r),i(e,we,r),o(we,Cs),o(Cs,wn),o(we,zn),i(e,ca,r),i(e,as,r),o(as,En),i(e,da,r),Me[G].m(e,r),i(e,ns,r),i(e,ts,r),o(ts,yn),i(e,fa,r),i(e,os,r),o(os,An),i(e,ha,r),j(pe,e,r),i(e,_a,r),i(e,se,r),o(se,me),o(me,Ms),j(ze,Ms,null),o(se,In),o(se,Ds),o(Ds,Tn),i(e,ba,r),i(e,rs,r),o(rs,Pn),i(e,ka,r),i(e,ue,r),o(ue,Ns),o(Ns,Sn),o(ue,xn),o(ue,Os),o(Os,Fn),i(e,$a,r),i(e,K,r),o(K,Cn),o(K,Ee),o(Ee,Mn),o(K,Dn),o(K,ye),o(ye,Nn),o(K,On),i(e,ga,r),i(e,ce,r),o(ce,Ln),o(ce,Ls),o(Ls,Hn),o(ce,Bn),i(e,va,r),j(Ae,e,r),qa=!0},p(e,[r]){const De={};r&1&&(De.fw=e[0]),s.$set(De);let ls=S;S=Gn(e),S!==ls&&(fe(),k(Ie[ls],1,1,()=>{Ie[ls]=null}),de(),x=Ie[S],x||(x=Ie[S]=Un[S](e),x.c()),$(x,1),x.m(Le.parentNode,Le));let is=F;F=Yn(e),F!==is&&(fe(),k(Te[is],1,1,()=>{Te[is]=null}),de(),C=Te[F],C||(C=Te[F]=Qn[F](e),C.c()),$(C,1),C.m(He.parentNode,He));let ps=M;M=Kn(e),M!==ps&&(fe(),k(Pe[ps],1,1,()=>{Pe[ps]=null}),de(),D=Pe[M],D||(D=Pe[M]=Jn[M](e),D.c()),$(D,1),D.m(Ue.parentNode,Ue));let ms=N;N=Xn(e),N!==ms&&(fe(),k(Se[ms],1,1,()=>{Se[ms]=null}),de(),O=Se[N],O||(O=Se[N]=Wn[N](e),O.c()),$(O,1),O.m(Qe.parentNode,Qe));let P=L;L=et(e),L!==P&&(fe(),k(xe[P],1,1,()=>{xe[P]=null}),de(),H=xe[L],H||(H=xe[L]=Zn[L](e),H.c()),$(H,1),H.m(Je.parentNode,Je));let us=B;B=at(e),B!==us&&(fe(),k(Fe[us],1,1,()=>{Fe[us]=null}),de(),V=Fe[B],V||(V=Fe[B]=st[B](e),V.c()),$(V,1),V.m(We.parentNode,We));const Ne={};r&2&&(Ne.$$scope={dirty:r,ctx:e}),te.$set(Ne);let cs=R;R=tt(e),R!==cs&&(fe(),k(Ce[cs],1,1,()=>{Ce[cs]=null}),de(),U=Ce[R],U||(U=Ce[R]=nt[R](e),U.c()),$(U,1),U.m(es.parentNode,es));let ds=G;G=rt(e),G!==ds&&(fe(),k(Me[ds],1,1,()=>{Me[ds]=null}),de(),Q=Me[G],Q||(Q=Me[G]=ot[G](e),Q.c()),$(Q,1),Q.m(ns.parentNode,ns));const Hs={};r&2&&(Hs.$$scope={dirty:r,ctx:e}),pe.$set(Hs)},i(e){qa||($(s.$$.fragment,e),$(A.$$.fragment,e),$(x),$(C),$(be.$$.fragment,e),$(D),$(O),$(H),$(V),$($e.$$.fragment,e),$(te.$$.fragment,e),$(ge.$$.fragment,e),$(ve.$$.fragment,e),$(qe.$$.fragment,e),$(U),$(je.$$.fragment,e),$(Q),$(pe.$$.fragment,e),$(ze.$$.fragment,e),$(Ae.$$.fragment,e),qa=!0)},o(e){k(s.$$.fragment,e),k(A.$$.fragment,e),k(x),k(C),k(be.$$.fragment,e),k(D),k(O),k(H),k(V),k($e.$$.fragment,e),k(te.$$.fragment,e),k(ge.$$.fragment,e),k(ve.$$.fragment,e),k(qe.$$.fragment,e),k(U),k(je.$$.fragment,e),k(Q),k(pe.$$.fragment,e),k(ze.$$.fragment,e),k(Ae.$$.fragment,e),qa=!1},d(e){t(n),e&&t(l),w(s,e),e&&t(p),e&&t(a),w(A),e&&t(he),Ie[S].d(e),e&&t(Le),Te[F].d(e),e&&t(He),e&&t(Be),e&&t(Vs),e&&t(T),e&&t(Rs),e&&t(Ve),e&&t(Us),e&&t(X),w(be),e&&t(Gs),e&&t(Re),e&&t(Qs),Pe[M].d(e),e&&t(Ue),e&&t(Ge),e&&t(Ys),e&&t(ne),e&&t(Js),Se[N].d(e),e&&t(Qe),e&&t(Ye),e&&t(Ks),xe[L].d(e),e&&t(Je),e&&t(Ke),e&&t(Ws),Fe[B].d(e),e&&t(We),e&&t(ke),e&&t(Xs),w($e,e),e&&t(Zs),e&&t(Xe),e&&t(ea),w(te,e),e&&t(sa),e&&t(oe),e&&t(aa),e&&t(Z),w(ge),e&&t(na),e&&t(Ze),e&&t(ta),w(ve,e),e&&t(oa),e&&t(Y),e&&t(ra),w(qe,e),e&&t(la),e&&t(le),e&&t(ia),Ce[R].d(e),e&&t(es),e&&t(ss),e&&t(pa),e&&t(J),e&&t(ma),e&&t(ee),w(je),e&&t(ua),e&&t(we),e&&t(ca),e&&t(as),e&&t(da),Me[G].d(e),e&&t(ns),e&&t(ts),e&&t(fa),e&&t(os),e&&t(ha),w(pe,e),e&&t(_a),e&&t(se),w(ze),e&&t(ba),e&&t(rs),e&&t(ka),e&&t(ue),e&&t($a),e&&t(K),e&&t(ga),e&&t(ce),e&&t(va),w(Ae,e)}}}const go={local:"tratando-sequncias-mltiplas",sections:[{local:"modelos-esperam-um-batch-de-entradas",title:"Modelos esperam um batch de entradas"},{local:"realizando-padding-nas-entradas",title:"Realizando padding nas entradas"},{local:"attention-masks",title:"Attention masks"},{local:"sequncias-mais-longas",title:"Sequ\xEAncias mais longas"}],title:"Tratando sequ\xEAncias m\xFAltiplas"};function vo(g,n,l){let s="pt";return Xt(()=>{const p=new URLSearchParams(window.location.search);l(0,s=p.get("fw")||"pt")}),[s]}class Io extends Yt{constructor(n){super();Jt(this,n,vo,$o,Kt,{})}}export{Io as default,go as metadata};
