import{S as Rt,i as Gt,s as Vt,e as u,k as h,w as j,t as m,M as Yt,c,d as t,m as _,x as v,a as d,h as f,b as w,G as o,g as i,y as q,o as k,p as me,q as $,B as y,v as Jt,n as fe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ot}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Bt}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Os}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Ut}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as Qt}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Kt(g){let a,r;return a=new Ut({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_tf.ipynb"}]}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function Wt(g){let a,r;return a=new Ut({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter2/section5_pt.ipynb"}]}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function Xt(g){let a,r;return a=new Bt({props:{id:"ROxrFOEbsQE"}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function Zt(g){let a,r;return a=new Bt({props:{id:"M6adb1j2jPI"}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function eo(g){let a,r,s,p;return a=new E({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = tf.constant(ids)
# Esta l\xEDnea va a fallar:
model(input_ids)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = tf.constant(ids)
<span class="hljs-comment"># Esta l\xEDnea va a fallar:</span>
model(input_ids)`}}),s=new E({props:{code:"InvalidArgumentError: Input to reshape is a tensor with 14 values, but the requested shape has 196 [Op:Reshape]",highlighted:'InvalidArgumentError: Input to reshape <span class="hljs-keyword">is</span> a tensor <span class="hljs-keyword">with</span> <span class="hljs-number">14</span> values, but the requested shape has <span class="hljs-number">196</span> [Op:Reshape]'}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function so(g){let a,r,s,p;return a=new E({props:{code:`import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = torch.tensor(ids)
# Esta l\xEDnea va a fallar:
model(input_ids)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
input_ids = torch.tensor(ids)
<span class="hljs-comment"># Esta l\xEDnea va a fallar:</span>
model(input_ids)`}}),s=new E({props:{code:"IndexError: Dimension out of range (expected to be in range of [-1, 0], but got 1)",highlighted:'IndexError: Dimension out of <span class="hljs-built_in">range</span> (expected to be <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span> of [-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>], but got <span class="hljs-number">1</span>)'}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function no(g){let a,r,s,p;return a=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="tf")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`<tf.Tensor: shape=(1, 16), dtype=int32, numpy=
array([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662,
        12172,  2607,  2026,  2878,  2166,  1012,   102]], dtype=int32)>`,highlighted:`&lt;tf.Tensor: shape=(<span class="hljs-number">1</span>, <span class="hljs-number">16</span>), dtype=int32, numpy=
array([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>,
        <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]], dtype=int32)&gt;`}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function ao(g){let a,r,s,p;return a=new E({props:{code:`tokenized_inputs = tokenizer(sequence, return_tensors="pt")
print(tokenized_inputs["input_ids"])`,highlighted:`tokenized_inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(tokenized_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),s=new E({props:{code:`tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,
          2607,  2026,  2878,  2166,  1012,   102]])`,highlighted:`tensor([[  <span class="hljs-number">101</span>,  <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,
          <span class="hljs-number">2607</span>,  <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>,   <span class="hljs-number">102</span>]])`}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function to(g){let a,r;return a=new E({props:{code:`import tensorflow as tf
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function oo(g){let a,r;return a=new E({props:{code:`import torch
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Logits:&quot;</span>, output.logits)`}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function lo(g){let a,r;return a=new E({props:{code:`Input IDs: tf.Tensor(
[[ 1045  1005  2310  2042  3403  2005  1037 17662 12172  2607  2026  2878
   2166  1012]], shape=(1, 14), dtype=int32)
Logits: tf.Tensor([[-2.7276208  2.8789377]], shape=(1, 2), dtype=float32)`,highlighted:`Input IDs: tf.Tensor(
[[ <span class="hljs-number">1045</span>  <span class="hljs-number">1005</span>  <span class="hljs-number">2310</span>  <span class="hljs-number">2042</span>  <span class="hljs-number">3403</span>  <span class="hljs-number">2005</span>  <span class="hljs-number">1037</span> <span class="hljs-number">17662</span> <span class="hljs-number">12172</span>  <span class="hljs-number">2607</span>  <span class="hljs-number">2026</span>  <span class="hljs-number">2878</span>
   <span class="hljs-number">2166</span>  <span class="hljs-number">1012</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">14</span>), dtype=int32)
Logits: tf.Tensor([[-<span class="hljs-number">2.7276208</span>  <span class="hljs-number">2.8789377</span>]], shape=(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function ro(g){let a,r;return a=new E({props:{code:`Input IDs: [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]
Logits: [[-2.7276,  2.8789]]`,highlighted:`Input IDs: [[ <span class="hljs-number">1045</span>,  <span class="hljs-number">1005</span>,  <span class="hljs-number">2310</span>,  <span class="hljs-number">2042</span>,  <span class="hljs-number">3403</span>,  <span class="hljs-number">2005</span>,  <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>,  <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>,  <span class="hljs-number">2878</span>,  <span class="hljs-number">2166</span>,  <span class="hljs-number">1012</span>]]
Logits: [[-<span class="hljs-number">2.7276</span>,  <span class="hljs-number">2.8789</span>]]`}}),{c(){j(a.$$.fragment)},l(s){v(a.$$.fragment,s)},m(s,p){q(a,s,p),r=!0},i(s){r||($(a.$$.fragment,s),r=!0)},o(s){k(a.$$.fragment,s),r=!1},d(s){y(a,s)}}}function io(g){let a,r,s,p,n,b,z,A;return{c(){a=u("p"),r=m("\u270F\uFE0F "),s=u("strong"),p=m("Try it out!"),n=m(" Convierte esta lista "),b=u("code"),z=m("batched_ids"),A=m(" en un tensor y p\xE1salo por tu modelo. Comprueba que obtienes los mismos logits que antes (\xA1pero dos veces!).")},l(W){a=c(W,"P",{});var S=d(a);r=f(S,"\u270F\uFE0F "),s=c(S,"STRONG",{});var Ne=d(s);p=f(Ne,"Try it out!"),Ne.forEach(t),n=f(S," Convierte esta lista "),b=c(S,"CODE",{});var he=d(b);z=f(he,"batched_ids"),he.forEach(t),A=f(S," en un tensor y p\xE1salo por tu modelo. Comprueba que obtienes los mismos logits que antes (\xA1pero dos veces!)."),S.forEach(t)},m(W,S){i(W,a,S),o(a,r),o(a,s),o(s,p),o(a,n),o(a,b),o(b,z),o(a,A)},d(W){W&&t(a)}}}function po(g){let a,r,s,p;return a=new E({props:{code:`model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)

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
 [ <span class="hljs-number">1.3373486</span> -<span class="hljs-number">1.2163193</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function uo(g){let a,r,s,p;return a=new E({props:{code:`model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

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
        [ <span class="hljs-number">1.3373</span>, -<span class="hljs-number">1.2163</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function co(g){let a,r,s,p;return a=new E({props:{code:`batched_ids = [
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
 [ <span class="hljs-number">0.5803021</span>  -<span class="hljs-number">0.41252586</span>]], shape=(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), dtype=float32)`}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function mo(g){let a,r,s,p;return a=new E({props:{code:`batched_ids = [
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
        [ <span class="hljs-number">0.5803</span>, -<span class="hljs-number">0.4125</span>]], grad_fn=&lt;AddmmBackward&gt;)`}}),{c(){j(a.$$.fragment),r=h(),j(s.$$.fragment)},l(n){v(a.$$.fragment,n),r=_(n),v(s.$$.fragment,n)},m(n,b){q(a,n,b),i(n,r,b),q(s,n,b),p=!0},i(n){p||($(a.$$.fragment,n),$(s.$$.fragment,n),p=!0)},o(n){k(a.$$.fragment,n),k(s.$$.fragment,n),p=!1},d(n){y(a,n),n&&t(r),y(s,n)}}}function fo(g){let a,r,s,p,n;return{c(){a=u("p"),r=m("\u270F\uFE0F "),s=u("strong"),p=m("Try it out!"),n=m(" Aplique la tokenizaci\xF3n manualmente a las dos frases utilizadas en la secci\xF3n 2 (\u201CLlevo toda la vida esperando un curso de HuggingFace\u201D y \u201C\xA1Odio tanto esto!\u201D). P\xE1selas por el modelo y compruebe que obtiene los mismos logits que en la secci\xF3n 2. Ahora j\xFAntalos usando el token de relleno, y luego crea la m\xE1scara de atenci\xF3n adecuada. Comprueba que obtienes los mismos resultados al pasarlos por el modelo.")},l(b){a=c(b,"P",{});var z=d(a);r=f(z,"\u270F\uFE0F "),s=c(z,"STRONG",{});var A=d(s);p=f(A,"Try it out!"),A.forEach(t),n=f(z," Aplique la tokenizaci\xF3n manualmente a las dos frases utilizadas en la secci\xF3n 2 (\u201CLlevo toda la vida esperando un curso de HuggingFace\u201D y \u201C\xA1Odio tanto esto!\u201D). P\xE1selas por el modelo y compruebe que obtiene los mismos logits que en la secci\xF3n 2. Ahora j\xFAntalos usando el token de relleno, y luego crea la m\xE1scara de atenci\xF3n adecuada. Comprueba que obtienes los mismos resultados al pasarlos por el modelo."),z.forEach(t)},m(b,z){i(b,a,z),o(a,r),o(a,s),o(s,p),o(a,n)},d(b){b&&t(a)}}}function ho(g){let a,r,s,p,n,b,z,A,W,S,Ne,he,P,C,He,F,M,Oe,Be,In,Bs,T,_s,Pn,Cn,_e,Fn,bs,Mn,Ln,Dn,ks,xn,Nn,$s,Hn,Us,Ue,On,Rs,X,ne,gs,be,Bn,js,Un,Gs,Re,Rn,Vs,L,D,Ge,Ve,Gn,Ys,ae,Vn,vs,Yn,Jn,Js,x,N,Ye,Je,Qn,Qs,H,O,Qe,Ke,Kn,Ks,B,U,We,ke,qs,Wn,Xn,Ws,$e,Xs,Xe,Zn,Zs,te,en,oe,ea,ys,sa,na,sn,Z,le,ws,ge,aa,Es,ta,nn,Ze,oa,an,je,tn,J,la,zs,ra,ia,As,pa,ua,on,ve,ln,Q,ca,Ss,da,ma,Ts,fa,ha,rn,R,G,es,ss,_a,pn,re,ba,Is,ka,$a,un,ee,ie,Ps,qe,ga,Cs,ja,cn,ye,Fs,va,qa,dn,V,Y,ns,as,ya,mn,ts,wa,fn,pe,hn,se,ue,Ms,we,Ea,Ls,za,_n,os,Aa,bn,ce,Ds,Sa,Ta,xs,Ia,kn,K,Pa,Ee,Ca,Fa,ze,Ma,La,$n,de,Da,Ns,xa,Na,gn,Ae,jn;s=new Qt({props:{fw:g[0]}}),A=new Os({});const Ba=[Wt,Kt],Se=[];function Ua(e,l){return e[0]==="pt"?0:1}P=Ua(g),C=Se[P]=Ba[P](g);const Ra=[Zt,Xt],Te=[];function Ga(e,l){return e[0]==="pt"?0:1}F=Ga(g),M=Te[F]=Ra[F](g),be=new Os({});const Va=[so,eo],Ie=[];function Ya(e,l){return e[0]==="pt"?0:1}L=Ya(g),D=Ie[L]=Va[L](g);const Ja=[ao,no],Pe=[];function Qa(e,l){return e[0]==="pt"?0:1}x=Qa(g),N=Pe[x]=Ja[x](g);const Ka=[oo,to],Ce=[];function Wa(e,l){return e[0]==="pt"?0:1}H=Wa(g),O=Ce[H]=Ka[H](g);const Xa=[ro,lo],Fe=[];function Za(e,l){return e[0]==="pt"?0:1}B=Za(g),U=Fe[B]=Xa[B](g),$e=new E({props:{code:"batched_ids = [ids, ids]",highlighted:'<span class="hljs-attr">batched_ids</span> = [ids, ids]'}}),te=new Ot({props:{$$slots:{default:[io]},$$scope:{ctx:g}}}),ge=new Os({}),je=new E({props:{code:`batched_ids = [
    [200, 200, 200],
    [200, 200]
]`,highlighted:`batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>]
]`}}),ve=new E({props:{code:`padding_id = 100

batched_ids = [
    [200, 200, 200],
    [200, 200, padding_id],
]`,highlighted:`padding_id = <span class="hljs-number">100</span>

batched_ids = [
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">200</span>],
    [<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, padding_id],
]`}});const et=[uo,po],Me=[];function st(e,l){return e[0]==="pt"?0:1}R=st(g),G=Me[R]=et[R](g),qe=new Os({});const nt=[mo,co],Le=[];function at(e,l){return e[0]==="pt"?0:1}return V=at(g),Y=Le[V]=nt[V](g),pe=new Ot({props:{$$slots:{default:[fo]},$$scope:{ctx:g}}}),we=new Os({}),Ae=new E({props:{code:"sequence = sequence[:max_sequence_length]",highlighted:"sequence = sequence[:max_sequence_length]"}}),{c(){a=u("meta"),r=h(),j(s.$$.fragment),p=h(),n=u("h1"),b=u("a"),z=u("span"),j(A.$$.fragment),W=h(),S=u("span"),Ne=m("Manejando Secuencias M\xFAltiples"),he=h(),C.c(),He=h(),M.c(),Oe=h(),Be=u("p"),In=m("En la secci\xF3n anterior, hemos explorado el caso de uso m\xE1s sencillo: hacer inferencia sobre una \xFAnica secuencia de poca longitud. Sin embargo, surgen algunas preguntas:"),Bs=h(),T=u("ul"),_s=u("li"),Pn=m("\xBFC\xF3mo manejamos las secuencias m\xFAltiples?"),Cn=h(),_e=u("li"),Fn=m("\xBFC\xF3mo manejamos las secuencias m\xFAltiples "),bs=u("em"),Mn=m("de diferentes longitudes"),Ln=m("?"),Dn=h(),ks=u("li"),xn=m("\xBFSon los \xEDndices de vocabulario las \xFAnicas entradas que permiten que un modelo funcione bien?"),Nn=h(),$s=u("li"),Hn=m("\xBFExiste una secuencia demasiado larga?"),Us=h(),Ue=u("p"),On=m("Veamos qu\xE9 tipo de problemas plantean estas preguntas, y c\xF3mo podemos resolverlos utilizando la API de Transformers \u{1F917}."),Rs=h(),X=u("h2"),ne=u("a"),gs=u("span"),j(be.$$.fragment),Bn=h(),js=u("span"),Un=m("Los modelos esperan Baches de entrada"),Gs=h(),Re=u("p"),Rn=m("En el ejercicio anterior has visto c\xF3mo las secuencias se traducen en listas de n\xFAmeros. Convirtamos esta lista de n\xFAmeros en un tensor y envi\xE9moslo al modelo:"),Vs=h(),D.c(),Ge=h(),Ve=u("p"),Gn=m("\xA1Oh, no! \xBFPor qu\xE9 ha fallado esto? \u201CHemos seguido los pasos de la tuber\xEDa en la secci\xF3n 2."),Ys=h(),ae=u("p"),Vn=m("El problema es que enviamos una sola secuencia al modelo, mientras que los modelos de \u{1F917} Transformers esperan m\xFAltiples frases por defecto. Aqu\xED tratamos de hacer todo lo que el tokenizador hizo detr\xE1s de escena cuando lo aplicamos a una "),vs=u("code"),Yn=m("secuencia"),Jn=m(", pero si te fijas bien, ver\xE1s que no s\xF3lo convirti\xF3 la lista de IDs de entrada en un tensor, sino que le agreg\xF3 una dimensi\xF3n encima:"),Js=h(),N.c(),Ye=h(),Je=u("p"),Qn=m("Intent\xE9moslo de nuevo y a\xF1adamos una nueva dimensi\xF3n encima:"),Qs=h(),O.c(),Qe=h(),Ke=u("p"),Kn=m("Imprimimos los IDs de entrada as\xED como los logits resultantes - aqu\xED est\xE1 la salida:"),Ks=h(),U.c(),We=h(),ke=u("p"),qs=u("em"),Wn=m("El \u201Cbatching\u201D"),Xn=m(" es el acto de enviar varias frases a trav\xE9s del modelo, todas a la vez. Si s\xF3lo tienes una frase, puedes construir un lote con una sola secuencia:"),Ws=h(),j($e.$$.fragment),Xs=h(),Xe=u("p"),Zn=m("Se trata de un lote de dos secuencias id\xE9nticas."),Zs=h(),j(te.$$.fragment),en=h(),oe=u("p"),ea=m("La creaci\xF3n de lotes permite que el modelo funcione cuando lo alimentas con m\xFAltiples sentencias. Utilizar varias secuencias es tan sencillo como crear un lote con una sola secuencia. Sin embargo, hay un segundo problema. Cuando se trata de agrupar dos (o m\xE1s) frases, \xE9stas pueden ser de diferente longitud. Si alguna vez ha trabajado con tensores, sabr\xE1 que deben tener forma rectangular, por lo que no podr\xE1 convertir la lista de IDs de entrada en un tensor directamente. Para evitar este problema, usamos el "),ys=u("em"),sa=m("padding"),na=m(" para las entradas."),sn=h(),Z=u("h2"),le=u("a"),ws=u("span"),j(ge.$$.fragment),aa=h(),Es=u("span"),ta=m("Padding a las entradas"),nn=h(),Ze=u("p"),oa=m("La siguiente lista de listas no se puede convertir en un tensor:"),an=h(),j(je.$$.fragment),tn=h(),J=u("p"),la=m("Para solucionar esto, utilizaremos "),zs=u("em"),ra=m("padding"),ia=m(" para que nuestros tensores tengan una forma rectangular. El acolchado asegura que todas nuestras sentencias tengan la misma longitud a\xF1adiendo una palabra especial llamada "),As=u("em"),pa=m("padding token"),ua=m(" a las sentencias con menos valores. Por ejemplo, si tienes 10 frases con 10 palabras y 1 frase con 20 palabras, el relleno asegurar\xE1 que todas las frases tengan 20 palabras. En nuestro ejemplo, el tensor resultante tiene este aspecto:"),on=h(),j(ve.$$.fragment),ln=h(),Q=u("p"),ca=m("El ID del "),Ss=u("em"),da=m("padding token"),ma=m(" se puede encontrar en "),Ts=u("code"),fa=m("tokenizer.pad_token_id"),ha=m(". Us\xE9moslo y enviemos nuestras dos sentencias a trav\xE9s del modelo de forma individual y por lotes:"),rn=h(),G.c(),es=h(),ss=u("p"),_a=m("Hay un problema con los logits en nuestras predicciones por lotes: la segunda fila deber\xEDa ser la misma que los logits de la segunda frase, \xA1pero tenemos valores completamente diferentes!"),pn=h(),re=u("p"),ba=m("Esto se debe a que la caracter\xEDstica clave de los modelos Transformer son las capas de atenci\xF3n que "),Is=u("em"),ka=m("contextualizan"),$a=m(" cada token. \xC9stas tendr\xE1n en cuenta los tokens de relleno, ya que atienden a todos los tokens de una secuencia. Para obtener el mismo resultado al pasar oraciones individuales de diferente longitud por el modelo o al pasar un lote con las mismas oraciones y el padding aplicado, tenemos que decirles a esas capas de atenci\xF3n que ignoren los tokens de padding. Esto se hace utilizando una m\xE1scara de atenci\xF3n."),un=h(),ee=u("h2"),ie=u("a"),Ps=u("span"),j(qe.$$.fragment),ga=h(),Cs=u("span"),ja=m("M\xE1scaras de atenci\xF3n"),cn=h(),ye=u("p"),Fs=u("em"),va=m("Las m\xE1scaras de atenci\xF3n"),qa=m(" son tensores con la misma forma que el tensor de IDs de entrada, rellenados con 0s y 1s: los 1s indican que los tokens correspondientes deben ser atendidos, y los 0s indican que los tokens correspondientes no deben ser atendidos (es decir, deben ser ignorados por las capas de atenci\xF3n del modelo)."),dn=h(),Y.c(),ns=h(),as=u("p"),ya=m("Ahora obtenemos los mismos logits para la segunda frase del lote."),mn=h(),ts=u("p"),wa=m("Podemos ver que el \xFAltimo valor de la segunda secuencia es un ID de relleno, que es un valor 0 en la m\xE1scara de atenci\xF3n."),fn=h(),j(pe.$$.fragment),hn=h(),se=u("h2"),ue=u("a"),Ms=u("span"),j(we.$$.fragment),Ea=h(),Ls=u("span"),za=m("Secuencias largas"),_n=h(),os=u("p"),Aa=m("Con los modelos Transformer, hay un l\xEDmite en la longitud de las secuencias que podemos pasar a los modelos. La mayor\xEDa de los modelos manejan secuencias de hasta 512 o 1024 tokens, y se bloquean cuando se les pide que procesen secuencias m\xE1s largas. Hay dos soluciones a este problema:"),bn=h(),ce=u("ul"),Ds=u("li"),Sa=m("Usar un modelo que soporte secuencias largas"),Ta=h(),xs=u("li"),Ia=m("Truncar tus secuencias"),kn=h(),K=u("p"),Pa=m("Los modelos tienen diferentes longitudes de secuencia soportadas, y algunos se especializan en el manejo de secuencias muy largas. Un ejemplo es "),Ee=u("a"),Ca=m("Longformer"),Fa=m(" y otro es "),ze=u("a"),Ma=m("LED"),La=m(". Si est\xE1s trabajando en una tarea que requiere secuencias muy largas, te recomendamos que eches un vistazo a esos modelos."),$n=h(),de=u("p"),Da=m("En caso contrario, le recomendamos que trunque sus secuencias especificando el par\xE1metro "),Ns=u("code"),xa=m("max_sequence_length"),Na=m(":"),gn=h(),j(Ae.$$.fragment),this.h()},l(e){const l=Yt('[data-svelte="svelte-1phssyn"]',document.head);a=c(l,"META",{name:!0,content:!0}),l.forEach(t),r=_(e),v(s.$$.fragment,e),p=_(e),n=c(e,"H1",{class:!0});var De=d(n);b=c(De,"A",{id:!0,class:!0,href:!0});var ls=d(b);z=c(ls,"SPAN",{});var rs=d(z);v(A.$$.fragment,rs),rs.forEach(t),ls.forEach(t),W=_(De),S=c(De,"SPAN",{});var is=d(S);Ne=f(is,"Manejando Secuencias M\xFAltiples"),is.forEach(t),De.forEach(t),he=_(e),C.l(e),He=_(e),M.l(e),Oe=_(e),Be=c(e,"P",{});var ps=d(Be);In=f(ps,"En la secci\xF3n anterior, hemos explorado el caso de uso m\xE1s sencillo: hacer inferencia sobre una \xFAnica secuencia de poca longitud. Sin embargo, surgen algunas preguntas:"),ps.forEach(t),Bs=_(e),T=c(e,"UL",{});var I=d(T);_s=c(I,"LI",{});var us=d(_s);Pn=f(us,"\xBFC\xF3mo manejamos las secuencias m\xFAltiples?"),us.forEach(t),Cn=_(I),_e=c(I,"LI",{});var xe=d(_e);Fn=f(xe,"\xBFC\xF3mo manejamos las secuencias m\xFAltiples "),bs=c(xe,"EM",{});var cs=d(bs);Mn=f(cs,"de diferentes longitudes"),cs.forEach(t),Ln=f(xe,"?"),xe.forEach(t),Dn=_(I),ks=c(I,"LI",{});var ds=d(ks);xn=f(ds,"\xBFSon los \xEDndices de vocabulario las \xFAnicas entradas que permiten que un modelo funcione bien?"),ds.forEach(t),Nn=_(I),$s=c(I,"LI",{});var Hs=d($s);Hn=f(Hs,"\xBFExiste una secuencia demasiado larga?"),Hs.forEach(t),I.forEach(t),Us=_(e),Ue=c(e,"P",{});var tt=d(Ue);On=f(tt,"Veamos qu\xE9 tipo de problemas plantean estas preguntas, y c\xF3mo podemos resolverlos utilizando la API de Transformers \u{1F917}."),tt.forEach(t),Rs=_(e),X=c(e,"H2",{class:!0});var vn=d(X);ne=c(vn,"A",{id:!0,class:!0,href:!0});var ot=d(ne);gs=c(ot,"SPAN",{});var lt=d(gs);v(be.$$.fragment,lt),lt.forEach(t),ot.forEach(t),Bn=_(vn),js=c(vn,"SPAN",{});var rt=d(js);Un=f(rt,"Los modelos esperan Baches de entrada"),rt.forEach(t),vn.forEach(t),Gs=_(e),Re=c(e,"P",{});var it=d(Re);Rn=f(it,"En el ejercicio anterior has visto c\xF3mo las secuencias se traducen en listas de n\xFAmeros. Convirtamos esta lista de n\xFAmeros en un tensor y envi\xE9moslo al modelo:"),it.forEach(t),Vs=_(e),D.l(e),Ge=_(e),Ve=c(e,"P",{});var pt=d(Ve);Gn=f(pt,"\xA1Oh, no! \xBFPor qu\xE9 ha fallado esto? \u201CHemos seguido los pasos de la tuber\xEDa en la secci\xF3n 2."),pt.forEach(t),Ys=_(e),ae=c(e,"P",{});var qn=d(ae);Vn=f(qn,"El problema es que enviamos una sola secuencia al modelo, mientras que los modelos de \u{1F917} Transformers esperan m\xFAltiples frases por defecto. Aqu\xED tratamos de hacer todo lo que el tokenizador hizo detr\xE1s de escena cuando lo aplicamos a una "),vs=c(qn,"CODE",{});var ut=d(vs);Yn=f(ut,"secuencia"),ut.forEach(t),Jn=f(qn,", pero si te fijas bien, ver\xE1s que no s\xF3lo convirti\xF3 la lista de IDs de entrada en un tensor, sino que le agreg\xF3 una dimensi\xF3n encima:"),qn.forEach(t),Js=_(e),N.l(e),Ye=_(e),Je=c(e,"P",{});var ct=d(Je);Qn=f(ct,"Intent\xE9moslo de nuevo y a\xF1adamos una nueva dimensi\xF3n encima:"),ct.forEach(t),Qs=_(e),O.l(e),Qe=_(e),Ke=c(e,"P",{});var dt=d(Ke);Kn=f(dt,"Imprimimos los IDs de entrada as\xED como los logits resultantes - aqu\xED est\xE1 la salida:"),dt.forEach(t),Ks=_(e),U.l(e),We=_(e),ke=c(e,"P",{});var Ha=d(ke);qs=c(Ha,"EM",{});var mt=d(qs);Wn=f(mt,"El \u201Cbatching\u201D"),mt.forEach(t),Xn=f(Ha," es el acto de enviar varias frases a trav\xE9s del modelo, todas a la vez. Si s\xF3lo tienes una frase, puedes construir un lote con una sola secuencia:"),Ha.forEach(t),Ws=_(e),v($e.$$.fragment,e),Xs=_(e),Xe=c(e,"P",{});var ft=d(Xe);Zn=f(ft,"Se trata de un lote de dos secuencias id\xE9nticas."),ft.forEach(t),Zs=_(e),v(te.$$.fragment,e),en=_(e),oe=c(e,"P",{});var yn=d(oe);ea=f(yn,"La creaci\xF3n de lotes permite que el modelo funcione cuando lo alimentas con m\xFAltiples sentencias. Utilizar varias secuencias es tan sencillo como crear un lote con una sola secuencia. Sin embargo, hay un segundo problema. Cuando se trata de agrupar dos (o m\xE1s) frases, \xE9stas pueden ser de diferente longitud. Si alguna vez ha trabajado con tensores, sabr\xE1 que deben tener forma rectangular, por lo que no podr\xE1 convertir la lista de IDs de entrada en un tensor directamente. Para evitar este problema, usamos el "),ys=c(yn,"EM",{});var ht=d(ys);sa=f(ht,"padding"),ht.forEach(t),na=f(yn," para las entradas."),yn.forEach(t),sn=_(e),Z=c(e,"H2",{class:!0});var wn=d(Z);le=c(wn,"A",{id:!0,class:!0,href:!0});var _t=d(le);ws=c(_t,"SPAN",{});var bt=d(ws);v(ge.$$.fragment,bt),bt.forEach(t),_t.forEach(t),aa=_(wn),Es=c(wn,"SPAN",{});var kt=d(Es);ta=f(kt,"Padding a las entradas"),kt.forEach(t),wn.forEach(t),nn=_(e),Ze=c(e,"P",{});var $t=d(Ze);oa=f($t,"La siguiente lista de listas no se puede convertir en un tensor:"),$t.forEach(t),an=_(e),v(je.$$.fragment,e),tn=_(e),J=c(e,"P",{});var ms=d(J);la=f(ms,"Para solucionar esto, utilizaremos "),zs=c(ms,"EM",{});var gt=d(zs);ra=f(gt,"padding"),gt.forEach(t),ia=f(ms," para que nuestros tensores tengan una forma rectangular. El acolchado asegura que todas nuestras sentencias tengan la misma longitud a\xF1adiendo una palabra especial llamada "),As=c(ms,"EM",{});var jt=d(As);pa=f(jt,"padding token"),jt.forEach(t),ua=f(ms," a las sentencias con menos valores. Por ejemplo, si tienes 10 frases con 10 palabras y 1 frase con 20 palabras, el relleno asegurar\xE1 que todas las frases tengan 20 palabras. En nuestro ejemplo, el tensor resultante tiene este aspecto:"),ms.forEach(t),on=_(e),v(ve.$$.fragment,e),ln=_(e),Q=c(e,"P",{});var fs=d(Q);ca=f(fs,"El ID del "),Ss=c(fs,"EM",{});var vt=d(Ss);da=f(vt,"padding token"),vt.forEach(t),ma=f(fs," se puede encontrar en "),Ts=c(fs,"CODE",{});var qt=d(Ts);fa=f(qt,"tokenizer.pad_token_id"),qt.forEach(t),ha=f(fs,". Us\xE9moslo y enviemos nuestras dos sentencias a trav\xE9s del modelo de forma individual y por lotes:"),fs.forEach(t),rn=_(e),G.l(e),es=_(e),ss=c(e,"P",{});var yt=d(ss);_a=f(yt,"Hay un problema con los logits en nuestras predicciones por lotes: la segunda fila deber\xEDa ser la misma que los logits de la segunda frase, \xA1pero tenemos valores completamente diferentes!"),yt.forEach(t),pn=_(e),re=c(e,"P",{});var En=d(re);ba=f(En,"Esto se debe a que la caracter\xEDstica clave de los modelos Transformer son las capas de atenci\xF3n que "),Is=c(En,"EM",{});var wt=d(Is);ka=f(wt,"contextualizan"),wt.forEach(t),$a=f(En," cada token. \xC9stas tendr\xE1n en cuenta los tokens de relleno, ya que atienden a todos los tokens de una secuencia. Para obtener el mismo resultado al pasar oraciones individuales de diferente longitud por el modelo o al pasar un lote con las mismas oraciones y el padding aplicado, tenemos que decirles a esas capas de atenci\xF3n que ignoren los tokens de padding. Esto se hace utilizando una m\xE1scara de atenci\xF3n."),En.forEach(t),un=_(e),ee=c(e,"H2",{class:!0});var zn=d(ee);ie=c(zn,"A",{id:!0,class:!0,href:!0});var Et=d(ie);Ps=c(Et,"SPAN",{});var zt=d(Ps);v(qe.$$.fragment,zt),zt.forEach(t),Et.forEach(t),ga=_(zn),Cs=c(zn,"SPAN",{});var At=d(Cs);ja=f(At,"M\xE1scaras de atenci\xF3n"),At.forEach(t),zn.forEach(t),cn=_(e),ye=c(e,"P",{});var Oa=d(ye);Fs=c(Oa,"EM",{});var St=d(Fs);va=f(St,"Las m\xE1scaras de atenci\xF3n"),St.forEach(t),qa=f(Oa," son tensores con la misma forma que el tensor de IDs de entrada, rellenados con 0s y 1s: los 1s indican que los tokens correspondientes deben ser atendidos, y los 0s indican que los tokens correspondientes no deben ser atendidos (es decir, deben ser ignorados por las capas de atenci\xF3n del modelo)."),Oa.forEach(t),dn=_(e),Y.l(e),ns=_(e),as=c(e,"P",{});var Tt=d(as);ya=f(Tt,"Ahora obtenemos los mismos logits para la segunda frase del lote."),Tt.forEach(t),mn=_(e),ts=c(e,"P",{});var It=d(ts);wa=f(It,"Podemos ver que el \xFAltimo valor de la segunda secuencia es un ID de relleno, que es un valor 0 en la m\xE1scara de atenci\xF3n."),It.forEach(t),fn=_(e),v(pe.$$.fragment,e),hn=_(e),se=c(e,"H2",{class:!0});var An=d(se);ue=c(An,"A",{id:!0,class:!0,href:!0});var Pt=d(ue);Ms=c(Pt,"SPAN",{});var Ct=d(Ms);v(we.$$.fragment,Ct),Ct.forEach(t),Pt.forEach(t),Ea=_(An),Ls=c(An,"SPAN",{});var Ft=d(Ls);za=f(Ft,"Secuencias largas"),Ft.forEach(t),An.forEach(t),_n=_(e),os=c(e,"P",{});var Mt=d(os);Aa=f(Mt,"Con los modelos Transformer, hay un l\xEDmite en la longitud de las secuencias que podemos pasar a los modelos. La mayor\xEDa de los modelos manejan secuencias de hasta 512 o 1024 tokens, y se bloquean cuando se les pide que procesen secuencias m\xE1s largas. Hay dos soluciones a este problema:"),Mt.forEach(t),bn=_(e),ce=c(e,"UL",{});var Sn=d(ce);Ds=c(Sn,"LI",{});var Lt=d(Ds);Sa=f(Lt,"Usar un modelo que soporte secuencias largas"),Lt.forEach(t),Ta=_(Sn),xs=c(Sn,"LI",{});var Dt=d(xs);Ia=f(Dt,"Truncar tus secuencias"),Dt.forEach(t),Sn.forEach(t),kn=_(e),K=c(e,"P",{});var hs=d(K);Pa=f(hs,"Los modelos tienen diferentes longitudes de secuencia soportadas, y algunos se especializan en el manejo de secuencias muy largas. Un ejemplo es "),Ee=c(hs,"A",{href:!0,rel:!0});var xt=d(Ee);Ca=f(xt,"Longformer"),xt.forEach(t),Fa=f(hs," y otro es "),ze=c(hs,"A",{href:!0,rel:!0});var Nt=d(ze);Ma=f(Nt,"LED"),Nt.forEach(t),La=f(hs,". Si est\xE1s trabajando en una tarea que requiere secuencias muy largas, te recomendamos que eches un vistazo a esos modelos."),hs.forEach(t),$n=_(e),de=c(e,"P",{});var Tn=d(de);Da=f(Tn,"En caso contrario, le recomendamos que trunque sus secuencias especificando el par\xE1metro "),Ns=c(Tn,"CODE",{});var Ht=d(Ns);xa=f(Ht,"max_sequence_length"),Ht.forEach(t),Na=f(Tn,":"),Tn.forEach(t),gn=_(e),v(Ae.$$.fragment,e),this.h()},h(){w(a,"name","hf:doc:metadata"),w(a,"content",JSON.stringify(_o)),w(b,"id","manejando-secuencias-mltiples"),w(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(b,"href","#manejando-secuencias-mltiples"),w(n,"class","relative group"),w(ne,"id","los-modelos-esperan-baches-de-entrada"),w(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ne,"href","#los-modelos-esperan-baches-de-entrada"),w(X,"class","relative group"),w(le,"id","padding-a-las-entradas"),w(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(le,"href","#padding-a-las-entradas"),w(Z,"class","relative group"),w(ie,"id","mscaras-de-atencin"),w(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ie,"href","#mscaras-de-atencin"),w(ee,"class","relative group"),w(ue,"id","secuencias-largas"),w(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ue,"href","#secuencias-largas"),w(se,"class","relative group"),w(Ee,"href","https://huggingface.co/transformers/model_doc/longformer.html"),w(Ee,"rel","nofollow"),w(ze,"href","https://huggingface.co/transformers/model_doc/led.html"),w(ze,"rel","nofollow")},m(e,l){o(document.head,a),i(e,r,l),q(s,e,l),i(e,p,l),i(e,n,l),o(n,b),o(b,z),q(A,z,null),o(n,W),o(n,S),o(S,Ne),i(e,he,l),Se[P].m(e,l),i(e,He,l),Te[F].m(e,l),i(e,Oe,l),i(e,Be,l),o(Be,In),i(e,Bs,l),i(e,T,l),o(T,_s),o(_s,Pn),o(T,Cn),o(T,_e),o(_e,Fn),o(_e,bs),o(bs,Mn),o(_e,Ln),o(T,Dn),o(T,ks),o(ks,xn),o(T,Nn),o(T,$s),o($s,Hn),i(e,Us,l),i(e,Ue,l),o(Ue,On),i(e,Rs,l),i(e,X,l),o(X,ne),o(ne,gs),q(be,gs,null),o(X,Bn),o(X,js),o(js,Un),i(e,Gs,l),i(e,Re,l),o(Re,Rn),i(e,Vs,l),Ie[L].m(e,l),i(e,Ge,l),i(e,Ve,l),o(Ve,Gn),i(e,Ys,l),i(e,ae,l),o(ae,Vn),o(ae,vs),o(vs,Yn),o(ae,Jn),i(e,Js,l),Pe[x].m(e,l),i(e,Ye,l),i(e,Je,l),o(Je,Qn),i(e,Qs,l),Ce[H].m(e,l),i(e,Qe,l),i(e,Ke,l),o(Ke,Kn),i(e,Ks,l),Fe[B].m(e,l),i(e,We,l),i(e,ke,l),o(ke,qs),o(qs,Wn),o(ke,Xn),i(e,Ws,l),q($e,e,l),i(e,Xs,l),i(e,Xe,l),o(Xe,Zn),i(e,Zs,l),q(te,e,l),i(e,en,l),i(e,oe,l),o(oe,ea),o(oe,ys),o(ys,sa),o(oe,na),i(e,sn,l),i(e,Z,l),o(Z,le),o(le,ws),q(ge,ws,null),o(Z,aa),o(Z,Es),o(Es,ta),i(e,nn,l),i(e,Ze,l),o(Ze,oa),i(e,an,l),q(je,e,l),i(e,tn,l),i(e,J,l),o(J,la),o(J,zs),o(zs,ra),o(J,ia),o(J,As),o(As,pa),o(J,ua),i(e,on,l),q(ve,e,l),i(e,ln,l),i(e,Q,l),o(Q,ca),o(Q,Ss),o(Ss,da),o(Q,ma),o(Q,Ts),o(Ts,fa),o(Q,ha),i(e,rn,l),Me[R].m(e,l),i(e,es,l),i(e,ss,l),o(ss,_a),i(e,pn,l),i(e,re,l),o(re,ba),o(re,Is),o(Is,ka),o(re,$a),i(e,un,l),i(e,ee,l),o(ee,ie),o(ie,Ps),q(qe,Ps,null),o(ee,ga),o(ee,Cs),o(Cs,ja),i(e,cn,l),i(e,ye,l),o(ye,Fs),o(Fs,va),o(ye,qa),i(e,dn,l),Le[V].m(e,l),i(e,ns,l),i(e,as,l),o(as,ya),i(e,mn,l),i(e,ts,l),o(ts,wa),i(e,fn,l),q(pe,e,l),i(e,hn,l),i(e,se,l),o(se,ue),o(ue,Ms),q(we,Ms,null),o(se,Ea),o(se,Ls),o(Ls,za),i(e,_n,l),i(e,os,l),o(os,Aa),i(e,bn,l),i(e,ce,l),o(ce,Ds),o(Ds,Sa),o(ce,Ta),o(ce,xs),o(xs,Ia),i(e,kn,l),i(e,K,l),o(K,Pa),o(K,Ee),o(Ee,Ca),o(K,Fa),o(K,ze),o(ze,Ma),o(K,La),i(e,$n,l),i(e,de,l),o(de,Da),o(de,Ns),o(Ns,xa),o(de,Na),i(e,gn,l),q(Ae,e,l),jn=!0},p(e,[l]){const De={};l&1&&(De.fw=e[0]),s.$set(De);let ls=P;P=Ua(e),P!==ls&&(fe(),k(Se[ls],1,1,()=>{Se[ls]=null}),me(),C=Se[P],C||(C=Se[P]=Ba[P](e),C.c()),$(C,1),C.m(He.parentNode,He));let rs=F;F=Ga(e),F!==rs&&(fe(),k(Te[rs],1,1,()=>{Te[rs]=null}),me(),M=Te[F],M||(M=Te[F]=Ra[F](e),M.c()),$(M,1),M.m(Oe.parentNode,Oe));let is=L;L=Ya(e),L!==is&&(fe(),k(Ie[is],1,1,()=>{Ie[is]=null}),me(),D=Ie[L],D||(D=Ie[L]=Va[L](e),D.c()),$(D,1),D.m(Ge.parentNode,Ge));let ps=x;x=Qa(e),x!==ps&&(fe(),k(Pe[ps],1,1,()=>{Pe[ps]=null}),me(),N=Pe[x],N||(N=Pe[x]=Ja[x](e),N.c()),$(N,1),N.m(Ye.parentNode,Ye));let I=H;H=Wa(e),H!==I&&(fe(),k(Ce[I],1,1,()=>{Ce[I]=null}),me(),O=Ce[H],O||(O=Ce[H]=Ka[H](e),O.c()),$(O,1),O.m(Qe.parentNode,Qe));let us=B;B=Za(e),B!==us&&(fe(),k(Fe[us],1,1,()=>{Fe[us]=null}),me(),U=Fe[B],U||(U=Fe[B]=Xa[B](e),U.c()),$(U,1),U.m(We.parentNode,We));const xe={};l&2&&(xe.$$scope={dirty:l,ctx:e}),te.$set(xe);let cs=R;R=st(e),R!==cs&&(fe(),k(Me[cs],1,1,()=>{Me[cs]=null}),me(),G=Me[R],G||(G=Me[R]=et[R](e),G.c()),$(G,1),G.m(es.parentNode,es));let ds=V;V=at(e),V!==ds&&(fe(),k(Le[ds],1,1,()=>{Le[ds]=null}),me(),Y=Le[V],Y||(Y=Le[V]=nt[V](e),Y.c()),$(Y,1),Y.m(ns.parentNode,ns));const Hs={};l&2&&(Hs.$$scope={dirty:l,ctx:e}),pe.$set(Hs)},i(e){jn||($(s.$$.fragment,e),$(A.$$.fragment,e),$(C),$(M),$(be.$$.fragment,e),$(D),$(N),$(O),$(U),$($e.$$.fragment,e),$(te.$$.fragment,e),$(ge.$$.fragment,e),$(je.$$.fragment,e),$(ve.$$.fragment,e),$(G),$(qe.$$.fragment,e),$(Y),$(pe.$$.fragment,e),$(we.$$.fragment,e),$(Ae.$$.fragment,e),jn=!0)},o(e){k(s.$$.fragment,e),k(A.$$.fragment,e),k(C),k(M),k(be.$$.fragment,e),k(D),k(N),k(O),k(U),k($e.$$.fragment,e),k(te.$$.fragment,e),k(ge.$$.fragment,e),k(je.$$.fragment,e),k(ve.$$.fragment,e),k(G),k(qe.$$.fragment,e),k(Y),k(pe.$$.fragment,e),k(we.$$.fragment,e),k(Ae.$$.fragment,e),jn=!1},d(e){t(a),e&&t(r),y(s,e),e&&t(p),e&&t(n),y(A),e&&t(he),Se[P].d(e),e&&t(He),Te[F].d(e),e&&t(Oe),e&&t(Be),e&&t(Bs),e&&t(T),e&&t(Us),e&&t(Ue),e&&t(Rs),e&&t(X),y(be),e&&t(Gs),e&&t(Re),e&&t(Vs),Ie[L].d(e),e&&t(Ge),e&&t(Ve),e&&t(Ys),e&&t(ae),e&&t(Js),Pe[x].d(e),e&&t(Ye),e&&t(Je),e&&t(Qs),Ce[H].d(e),e&&t(Qe),e&&t(Ke),e&&t(Ks),Fe[B].d(e),e&&t(We),e&&t(ke),e&&t(Ws),y($e,e),e&&t(Xs),e&&t(Xe),e&&t(Zs),y(te,e),e&&t(en),e&&t(oe),e&&t(sn),e&&t(Z),y(ge),e&&t(nn),e&&t(Ze),e&&t(an),y(je,e),e&&t(tn),e&&t(J),e&&t(on),y(ve,e),e&&t(ln),e&&t(Q),e&&t(rn),Me[R].d(e),e&&t(es),e&&t(ss),e&&t(pn),e&&t(re),e&&t(un),e&&t(ee),y(qe),e&&t(cn),e&&t(ye),e&&t(dn),Le[V].d(e),e&&t(ns),e&&t(as),e&&t(mn),e&&t(ts),e&&t(fn),y(pe,e),e&&t(hn),e&&t(se),y(we),e&&t(_n),e&&t(os),e&&t(bn),e&&t(ce),e&&t(kn),e&&t(K),e&&t($n),e&&t(de),e&&t(gn),y(Ae,e)}}}const _o={local:"manejando-secuencias-mltiples",sections:[{local:"los-modelos-esperan-baches-de-entrada",title:"Los modelos esperan Baches de entrada "},{local:"padding-a-las-entradas",title:"Padding a las entradas"},{local:"mscaras-de-atencin",title:"M\xE1scaras de atenci\xF3n"},{local:"secuencias-largas",title:"Secuencias largas"}],title:"Manejando Secuencias M\xFAltiples"};function bo(g,a,r){let s="pt";return Jt(()=>{const p=new URLSearchParams(window.location.search);r(0,s=p.get("fw")||"pt")}),[s]}class wo extends Rt{constructor(a){super();Gt(this,a,bo,ho,Vt,{})}}export{wo as default,_o as metadata};
