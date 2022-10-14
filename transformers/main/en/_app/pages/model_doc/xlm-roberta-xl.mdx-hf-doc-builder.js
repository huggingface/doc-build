import{S as Rd,i as Fd,s as zd,e as i,k as g,w as k,t as a,M as Cd,c as l,d as o,m as _,a as d,x as M,h as r,b as m,G as e,g as L,y as X,q as w,o as $,B as v,v as qd,L as O}from"../../chunks/vendor-hf-doc-builder.js";import{T as io}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as A}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as P}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ed(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaXLModel, XLMRobertaXLConfig

# Initializing a XLM_ROBERTA_XL bert-base-uncased style configuration
configuration = XLMRobertaXLConfig()

# Initializing a model from the bert-base-uncased style configuration
model = XLMRobertaXLModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaXLModel, XLMRobertaXLConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLM_ROBERTA_XL bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLMRobertaXLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=i("p"),f=a("Examples:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Examples:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function jd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(o),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Pd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLModel
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLModel.from_pretrained("xlm-roberta-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLModel.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function Od(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(o),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Ad(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
config = RobertaConfig.from_pretrained("roberta-base")
config.is_decoder = True
model = RobertaForCausalLM.from_pretrained("roberta-base", config=config)
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForCausalLM, RobertaConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RobertaConfig.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>, config=config)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function Sd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(o),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Nd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForMaskedLM
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForMaskedLM.from_pretrained("xlm-roberta-xlarge")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaXLForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForMaskedLM.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function Id(T){let s,f;return s=new A({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){X(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){$(s.$$.fragment,c),f=!1},d(c){v(s,c)}}}function Dd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(o),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Wd(T){let s,f,c,p,b;return p=new A({props:{code:`import torch
from transformers import XLMRobertaTokenizer, XLMRobertaXLForSequenceClassification

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForSequenceClassification.from_pretrained("xlm-roberta-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),f=a("Example of single-label classification:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example of single-label classification:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function Bd(T){let s,f;return s=new A({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMRobertaXLForSequenceClassification.from_pretrained("xlm-roberta-xlarge", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){X(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){$(s.$$.fragment,c),f=!1},d(c){v(s,c)}}}function Qd(T){let s,f,c,p,b;return p=new A({props:{code:`import torch
from transformers import XLMRobertaTokenizer, XLMRobertaXLForSequenceClassification

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForSequenceClassification.from_pretrained("xlm-roberta-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),f=a("Example of multi-label classification:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example of multi-label classification:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function Hd(T){let s,f;return s=new A({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMRobertaXLForSequenceClassification.from_pretrained(
    "xlm-roberta-xlarge", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){X(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){$(s.$$.fragment,c),f=!1},d(c){v(s,c)}}}function Ud(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(o),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Vd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForMultipleChoice
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForMultipleChoice.from_pretrained("xlm-roberta-xlarge")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaXLForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function Gd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(o),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Jd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForTokenClassification
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForTokenClassification.from_pretrained("xlm-roberta-xlarge")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaXLForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function Kd(T){let s,f;return s=new A({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){X(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){$(s.$$.fragment,c),f=!1},d(c){v(s,c)}}}function Yd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(o),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Zd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForQuestionAnswering
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForQuestionAnswering.from_pretrained("xlm-roberta-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaXLForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),X(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),v(p,n)}}}function ec(T){let s,f;return s=new A({props:{code:`# target is "nice puppet"
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
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){X(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){$(s.$$.fragment,c),f=!1},d(c){v(s,c)}}}function tc(T){let s,f,c,p,b,n,h,y,Fs,Yn,re,Re,Ho,bt,zs,Uo,Cs,Zn,Fe,qs,Lt,Es,js,es,lo,Ps,ts,co,Vo,Os,os,po,As,ns,ho,kt,Ss,Go,Ns,Is,ss,Q,Ds,Mt,Ws,Bs,Xt,Qs,Hs,wt,Us,Vs,as,ie,ze,Jo,$t,Gs,Ko,Js,rs,S,vt,Ks,G,Ys,mo,Zs,ea,Yo,ta,oa,Tt,na,sa,aa,le,ra,uo,ia,la,fo,da,ca,pa,Ce,is,de,qe,Zo,yt,ha,en,ma,ls,N,xt,ua,ce,fa,go,ga,_a,Rt,ba,La,ka,te,Ma,tn,Xa,R,wa,on,$a,va,nn,Ta,ya,sn,xa,Ra,an,Fa,za,rn,Ca,qa,ln,Ea,ja,dn,Pa,Oa,Ft,Aa,Sa,H,zt,Na,pe,Ia,_o,Da,Wa,cn,Ba,Qa,Ha,Ee,Ua,je,ds,he,Pe,pn,Ct,Va,hn,Ga,cs,J,qt,Ja,K,Ka,mn,Ya,Za,bo,er,tr,Et,or,nr,sr,U,jt,ar,me,rr,Lo,ir,lr,un,dr,cr,pr,Oe,hr,Ae,ps,ue,Se,fn,Pt,mr,gn,ur,hs,Y,Ot,fr,Z,gr,_n,_r,br,ko,Lr,kr,At,Mr,Xr,wr,z,St,$r,fe,vr,Mo,Tr,yr,bn,xr,Rr,Fr,Ne,zr,Ie,Cr,De,ms,ge,We,Ln,Nt,qr,kn,Er,us,I,It,jr,Mn,Pr,Or,_e,Ar,Xo,Sr,Nr,Dt,Ir,Dr,Wr,x,Wt,Br,be,Qr,wo,Hr,Ur,Xn,Vr,Gr,Jr,Be,Kr,Qe,Yr,He,Zr,Ue,ei,Ve,fs,Le,Ge,wn,Bt,ti,$n,oi,gs,D,Qt,ni,vn,si,ai,ke,ri,$o,ii,li,Ht,di,ci,pi,V,Ut,hi,Me,mi,vo,ui,fi,Tn,gi,_i,bi,Je,Li,Ke,_s,Xe,Ye,yn,Vt,ki,xn,Mi,bs,W,Gt,Xi,Rn,wi,$i,we,vi,To,Ti,yi,Jt,xi,Ri,Fi,C,Kt,zi,$e,Ci,yo,qi,Ei,Fn,ji,Pi,Oi,Ze,Ai,et,Si,tt,Ls,ve,ot,zn,Yt,Ni,Cn,Ii,ks,B,Zt,Di,Te,Wi,qn,Bi,Qi,En,Hi,Ui,Vi,ye,Gi,xo,Ji,Ki,eo,Yi,Zi,el,q,to,tl,xe,ol,Ro,nl,sl,jn,al,rl,il,nt,ll,st,dl,at,Ms;return n=new ae({}),bt=new ae({}),$t=new ae({}),vt=new F({props:{name:"class transformers.XLMRobertaXLConfig",anchor:"transformers.XLMRobertaXLConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 2560"},{name:"num_hidden_layers",val:" = 36"},{name:"num_attention_heads",val:" = 32"},{name:"intermediate_size",val:" = 10240"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 514"},{name:"type_vocab_size",val:" = 1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250880) &#x2014;
Vocabulary size of the XLM_ROBERTA_XL model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel">XLMRobertaXLModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMRobertaXLConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2560) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XLMRobertaXLConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 36) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.XLMRobertaXLConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.XLMRobertaXLConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 10240) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.XLMRobertaXLConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.XLMRobertaXLConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.XLMRobertaXLConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.XLMRobertaXLConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 514) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMRobertaXLConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel">XLMRobertaXLModel</a> or
<code>TFXLMRobertaXLModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.XLMRobertaXLConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLMRobertaXLConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMRobertaXLConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.XLMRobertaXLConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.XLMRobertaXLConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/configuration_xlm_roberta_xl.py#L34"}}),Ce=new P({props:{anchor:"transformers.XLMRobertaXLConfig.example",$$slots:{default:[Ed]},$$scope:{ctx:T}}}),yt=new ae({}),xt=new F({props:{name:"class transformers.XLMRobertaXLModel",anchor:"transformers.XLMRobertaXLModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L665"}}),zt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaXLModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaXLModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaXLModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L705",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new io({props:{$$slots:{default:[jd]},$$scope:{ctx:T}}}),je=new P({props:{anchor:"transformers.XLMRobertaXLModel.forward.example",$$slots:{default:[Pd]},$$scope:{ctx:T}}}),Ct=new ae({}),qt=new F({props:{name:"class transformers.XLMRobertaXLForCausalLM",anchor:"transformers.XLMRobertaXLForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L847"}}),jt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L872",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new io({props:{$$slots:{default:[Od]},$$scope:{ctx:T}}}),Ae=new P({props:{anchor:"transformers.XLMRobertaXLForCausalLM.forward.example",$$slots:{default:[Ad]},$$scope:{ctx:T}}}),Pt=new ae({}),Ot=new F({props:{name:"class transformers.XLMRobertaXLForMaskedLM",anchor:"transformers.XLMRobertaXLForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L997"}}),St=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1025",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new io({props:{$$slots:{default:[Sd]},$$scope:{ctx:T}}}),Ie=new P({props:{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.example",$$slots:{default:[Nd]},$$scope:{ctx:T}}}),De=new P({props:{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.example-2",$$slots:{default:[Id]},$$scope:{ctx:T}}}),Nt=new ae({}),It=new F({props:{name:"class transformers.XLMRobertaXLForSequenceClassification",anchor:"transformers.XLMRobertaXLForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1125"}}),Wt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1138",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new io({props:{$$slots:{default:[Dd]},$$scope:{ctx:T}}}),Qe=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example",$$slots:{default:[Wd]},$$scope:{ctx:T}}}),He=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-2",$$slots:{default:[Bd]},$$scope:{ctx:T}}}),Ue=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-3",$$slots:{default:[Qd]},$$scope:{ctx:T}}}),Ve=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-4",$$slots:{default:[Hd]},$$scope:{ctx:T}}}),Bt=new ae({}),Qt=new F({props:{name:"class transformers.XLMRobertaXLForMultipleChoice",anchor:"transformers.XLMRobertaXLForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1222"}}),Ut=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1234",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new io({props:{$$slots:{default:[Ud]},$$scope:{ctx:T}}}),Ke=new P({props:{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:T}}}),Vt=new ae({}),Gt=new F({props:{name:"class transformers.XLMRobertaXLForTokenClassification",anchor:"transformers.XLMRobertaXLForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1316"}}),Kt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new io({props:{$$slots:{default:[Gd]},$$scope:{ctx:T}}}),et=new P({props:{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.example",$$slots:{default:[Jd]},$$scope:{ctx:T}}}),tt=new P({props:{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.example-2",$$slots:{default:[Kd]},$$scope:{ctx:T}}}),Yt=new ae({}),Zt=new F({props:{name:"class transformers.XLMRobertaXLForQuestionAnswering",anchor:"transformers.XLMRobertaXLForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1431"}}),to=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nt=new io({props:{$$slots:{default:[Yd]},$$scope:{ctx:T}}}),st=new P({props:{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.example",$$slots:{default:[Zd]},$$scope:{ctx:T}}}),at=new P({props:{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.example-2",$$slots:{default:[ec]},$$scope:{ctx:T}}}),{c(){s=i("meta"),f=g(),c=i("h1"),p=i("a"),b=i("span"),k(n.$$.fragment),h=g(),y=i("span"),Fs=a("XLM-RoBERTa-XL"),Yn=g(),re=i("h2"),Re=i("a"),Ho=i("span"),k(bt.$$.fragment),zs=g(),Uo=i("span"),Cs=a("Overview"),Zn=g(),Fe=i("p"),qs=a("The XLM-RoBERTa-XL model was proposed in "),Lt=i("a"),Es=a("Larger-Scale Transformers for Multilingual Masked Language Modeling"),js=a(" by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau."),es=g(),lo=i("p"),Ps=a("The abstract from the paper is the following:"),ts=g(),co=i("p"),Vo=i("em"),Os=a("Recent work has demonstrated the effectiveness of cross-lingual language model pretraining for cross-lingual understanding. In this study, we present the results of two larger multilingual masked language models, with 3.5B and 10.7B parameters. Our two new models dubbed XLM-R XL and XLM-R XXL outperform XLM-R by 1.8% and 2.4% average accuracy on XNLI. Our model also outperforms the RoBERTa-Large model on several English tasks of the GLUE benchmark by 0.3% on average while handling 99 more languages. This suggests pretrained models with larger capacity may obtain both strong performance on high-resource languages while greatly improving low-resource languages. We make our code and models publicly available."),os=g(),po=i("p"),As=a("Tips:"),ns=g(),ho=i("ul"),kt=i("li"),Ss=a(`XLM-RoBERTa-XL is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Go=i("code"),Ns=a("lang"),Is=a(` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),ss=g(),Q=i("p"),Ds=a("This model was contributed by "),Mt=i("a"),Ws=a("Soonhwan-Kwon"),Bs=a(" and "),Xt=i("a"),Qs=a("stefan-it"),Hs=a(". The original code can be found "),wt=i("a"),Us=a("here"),Vs=a("."),as=g(),ie=i("h2"),ze=i("a"),Jo=i("span"),k($t.$$.fragment),Gs=g(),Ko=i("span"),Js=a("XLMRobertaXLConfig"),rs=g(),S=i("div"),k(vt.$$.fragment),Ks=g(),G=i("p"),Ys=a("This is the configuration class to store the configuration of a "),mo=i("a"),Zs=a("XLMRobertaXLModel"),ea=a(" or a "),Yo=i("code"),ta=a("TFXLMRobertaXLModel"),oa=a(`.
It is used to instantiate a XLM_ROBERTA_XL model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLM_ROBERTA_XL `),Tt=i("a"),na=a("facebook/xlm-roberta-xl"),sa=a(" architecture."),aa=g(),le=i("p"),ra=a("Configuration objects inherit from "),uo=i("a"),ia=a("PretrainedConfig"),la=a(` and can be used to control the model outputs. Read the
documentation from `),fo=i("a"),da=a("PretrainedConfig"),ca=a(" for more information."),pa=g(),k(Ce.$$.fragment),is=g(),de=i("h2"),qe=i("a"),Zo=i("span"),k(yt.$$.fragment),ha=g(),en=i("span"),ma=a("XLMRobertaXLModel"),ls=g(),N=i("div"),k(xt.$$.fragment),ua=g(),ce=i("p"),fa=a(`The bare XLM-RoBERTa-xlarge Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),go=i("a"),ga=a("PreTrainedModel"),_a=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Rt=i("a"),ba=a("torch.nn.Module"),La=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ka=g(),te=i("p"),Ma=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),tn=i("em"),Xa=a(`Attention is
all you need`),R=i("em"),wa=a(`by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin. To behave as an decoder the model needs to be initialized with the `),on=i("code"),$a=a("is_decoder"),va=a(`
argument of the configuration set to `),nn=i("code"),Ta=a("True"),ya=a(`. To be used in a Seq2Seq model, the model needs to initialized with
both `),sn=i("code"),xa=a("is_decoder"),Ra=a(" argument and "),an=i("code"),Fa=a("add_cross_attention"),za=a(" set to "),rn=i("code"),Ca=a("True"),qa=a("; an "),ln=i("code"),Ea=a("encoder_hidden_states"),ja=a(` is then expected as
an input to the forward pass. .. `),dn=i("em"),Pa=a("Attention is all you need"),Oa=a(": "),Ft=i("a"),Aa=a("https://arxiv.org/abs/1706.03762"),Sa=g(),H=i("div"),k(zt.$$.fragment),Na=g(),pe=i("p"),Ia=a("The "),_o=i("a"),Da=a("XLMRobertaXLModel"),Wa=a(" forward method, overrides the "),cn=i("code"),Ba=a("__call__"),Qa=a(" special method."),Ha=g(),k(Ee.$$.fragment),Ua=g(),k(je.$$.fragment),ds=g(),he=i("h2"),Pe=i("a"),pn=i("span"),k(Ct.$$.fragment),Va=g(),hn=i("span"),Ga=a("XLMRobertaXLForCausalLM"),cs=g(),J=i("div"),k(qt.$$.fragment),Ja=g(),K=i("p"),Ka=a("XLM-RoBERTa-xlarge Model with a "),mn=i("code"),Ya=a("language modeling"),Za=a(` head on top for CLM fine-tuning.
This model inherits from `),bo=i("a"),er=a("PreTrainedModel"),tr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Et=i("a"),or=a("torch.nn.Module"),nr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),sr=g(),U=i("div"),k(jt.$$.fragment),ar=g(),me=i("p"),rr=a("The "),Lo=i("a"),ir=a("XLMRobertaXLForCausalLM"),lr=a(" forward method, overrides the "),un=i("code"),dr=a("__call__"),cr=a(" special method."),pr=g(),k(Oe.$$.fragment),hr=g(),k(Ae.$$.fragment),ps=g(),ue=i("h2"),Se=i("a"),fn=i("span"),k(Pt.$$.fragment),mr=g(),gn=i("span"),ur=a("XLMRobertaXLForMaskedLM"),hs=g(),Y=i("div"),k(Ot.$$.fragment),fr=g(),Z=i("p"),gr=a("XLM-RoBERTa-xlarge Model with a "),_n=i("code"),_r=a("language modeling"),br=a(` head on top.
This model inherits from `),ko=i("a"),Lr=a("PreTrainedModel"),kr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),At=i("a"),Mr=a("torch.nn.Module"),Xr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),wr=g(),z=i("div"),k(St.$$.fragment),$r=g(),fe=i("p"),vr=a("The "),Mo=i("a"),Tr=a("XLMRobertaXLForMaskedLM"),yr=a(" forward method, overrides the "),bn=i("code"),xr=a("__call__"),Rr=a(" special method."),Fr=g(),k(Ne.$$.fragment),zr=g(),k(Ie.$$.fragment),Cr=g(),k(De.$$.fragment),ms=g(),ge=i("h2"),We=i("a"),Ln=i("span"),k(Nt.$$.fragment),qr=g(),kn=i("span"),Er=a("XLMRobertaXLForSequenceClassification"),us=g(),I=i("div"),k(It.$$.fragment),jr=g(),Mn=i("p"),Pr=a(`XLM-RoBERTa-xlarge Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`),Or=g(),_e=i("p"),Ar=a("This model inherits from "),Xo=i("a"),Sr=a("PreTrainedModel"),Nr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Dt=i("a"),Ir=a("torch.nn.Module"),Dr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Wr=g(),x=i("div"),k(Wt.$$.fragment),Br=g(),be=i("p"),Qr=a("The "),wo=i("a"),Hr=a("XLMRobertaXLForSequenceClassification"),Ur=a(" forward method, overrides the "),Xn=i("code"),Vr=a("__call__"),Gr=a(" special method."),Jr=g(),k(Be.$$.fragment),Kr=g(),k(Qe.$$.fragment),Yr=g(),k(He.$$.fragment),Zr=g(),k(Ue.$$.fragment),ei=g(),k(Ve.$$.fragment),fs=g(),Le=i("h2"),Ge=i("a"),wn=i("span"),k(Bt.$$.fragment),ti=g(),$n=i("span"),oi=a("XLMRobertaXLForMultipleChoice"),gs=g(),D=i("div"),k(Qt.$$.fragment),ni=g(),vn=i("p"),si=a(`XLM-Roberta-xlarge Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`),ai=g(),ke=i("p"),ri=a("This model inherits from "),$o=i("a"),ii=a("PreTrainedModel"),li=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Ht=i("a"),di=a("torch.nn.Module"),ci=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),pi=g(),V=i("div"),k(Ut.$$.fragment),hi=g(),Me=i("p"),mi=a("The "),vo=i("a"),ui=a("XLMRobertaXLForMultipleChoice"),fi=a(" forward method, overrides the "),Tn=i("code"),gi=a("__call__"),_i=a(" special method."),bi=g(),k(Je.$$.fragment),Li=g(),k(Ke.$$.fragment),_s=g(),Xe=i("h2"),Ye=i("a"),yn=i("span"),k(Vt.$$.fragment),ki=g(),xn=i("span"),Mi=a("XLMRobertaXLForTokenClassification"),bs=g(),W=i("div"),k(Gt.$$.fragment),Xi=g(),Rn=i("p"),wi=a(`XLM-Roberta-xlarge Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),$i=g(),we=i("p"),vi=a("This model inherits from "),To=i("a"),Ti=a("PreTrainedModel"),yi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Jt=i("a"),xi=a("torch.nn.Module"),Ri=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Fi=g(),C=i("div"),k(Kt.$$.fragment),zi=g(),$e=i("p"),Ci=a("The "),yo=i("a"),qi=a("XLMRobertaXLForTokenClassification"),Ei=a(" forward method, overrides the "),Fn=i("code"),ji=a("__call__"),Pi=a(" special method."),Oi=g(),k(Ze.$$.fragment),Ai=g(),k(et.$$.fragment),Si=g(),k(tt.$$.fragment),Ls=g(),ve=i("h2"),ot=i("a"),zn=i("span"),k(Yt.$$.fragment),Ni=g(),Cn=i("span"),Ii=a("XLMRobertaXLForQuestionAnswering"),ks=g(),B=i("div"),k(Zt.$$.fragment),Di=g(),Te=i("p"),Wi=a(`XLM-Roberta-xlarge Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),qn=i("code"),Bi=a("span start logits"),Qi=a(" and "),En=i("code"),Hi=a("span end logits"),Ui=a(")."),Vi=g(),ye=i("p"),Gi=a("This model inherits from "),xo=i("a"),Ji=a("PreTrainedModel"),Ki=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),eo=i("a"),Yi=a("torch.nn.Module"),Zi=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),el=g(),q=i("div"),k(to.$$.fragment),tl=g(),xe=i("p"),ol=a("The "),Ro=i("a"),nl=a("XLMRobertaXLForQuestionAnswering"),sl=a(" forward method, overrides the "),jn=i("code"),al=a("__call__"),rl=a(" special method."),il=g(),k(nt.$$.fragment),ll=g(),k(st.$$.fragment),dl=g(),k(at.$$.fragment),this.h()},l(t){const u=Cd('[data-svelte="svelte-1phssyn"]',document.head);s=l(u,"META",{name:!0,content:!0}),u.forEach(o),f=_(t),c=l(t,"H1",{class:!0});var oo=d(c);p=l(oo,"A",{id:!0,class:!0,href:!0});var Pn=d(p);b=l(Pn,"SPAN",{});var On=d(b);M(n.$$.fragment,On),On.forEach(o),Pn.forEach(o),h=_(oo),y=l(oo,"SPAN",{});var An=d(y);Fs=r(An,"XLM-RoBERTa-XL"),An.forEach(o),oo.forEach(o),Yn=_(t),re=l(t,"H2",{class:!0});var no=d(re);Re=l(no,"A",{id:!0,class:!0,href:!0});var Sn=d(Re);Ho=l(Sn,"SPAN",{});var Nn=d(Ho);M(bt.$$.fragment,Nn),Nn.forEach(o),Sn.forEach(o),zs=_(no),Uo=l(no,"SPAN",{});var In=d(Uo);Cs=r(In,"Overview"),In.forEach(o),no.forEach(o),Zn=_(t),Fe=l(t,"P",{});var so=d(Fe);qs=r(so,"The XLM-RoBERTa-XL model was proposed in "),Lt=l(so,"A",{href:!0,rel:!0});var Dn=d(Lt);Es=r(Dn,"Larger-Scale Transformers for Multilingual Masked Language Modeling"),Dn.forEach(o),js=r(so," by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau."),so.forEach(o),es=_(t),lo=l(t,"P",{});var Wn=d(lo);Ps=r(Wn,"The abstract from the paper is the following:"),Wn.forEach(o),ts=_(t),co=l(t,"P",{});var Bn=d(co);Vo=l(Bn,"EM",{});var Qn=d(Vo);Os=r(Qn,"Recent work has demonstrated the effectiveness of cross-lingual language model pretraining for cross-lingual understanding. In this study, we present the results of two larger multilingual masked language models, with 3.5B and 10.7B parameters. Our two new models dubbed XLM-R XL and XLM-R XXL outperform XLM-R by 1.8% and 2.4% average accuracy on XNLI. Our model also outperforms the RoBERTa-Large model on several English tasks of the GLUE benchmark by 0.3% on average while handling 99 more languages. This suggests pretrained models with larger capacity may obtain both strong performance on high-resource languages while greatly improving low-resource languages. We make our code and models publicly available."),Qn.forEach(o),Bn.forEach(o),os=_(t),po=l(t,"P",{});var Hn=d(po);As=r(Hn,"Tips:"),Hn.forEach(o),ns=_(t),ho=l(t,"UL",{});var Un=d(ho);kt=l(Un,"LI",{});var ao=d(kt);Ss=r(ao,`XLM-RoBERTa-XL is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Go=l(ao,"CODE",{});var Vn=d(Go);Ns=r(Vn,"lang"),Vn.forEach(o),Is=r(ao,` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),ao.forEach(o),Un.forEach(o),ss=_(t),Q=l(t,"P",{});var ee=d(Q);Ds=r(ee,"This model was contributed by "),Mt=l(ee,"A",{href:!0,rel:!0});var Gn=d(Mt);Ws=r(Gn,"Soonhwan-Kwon"),Gn.forEach(o),Bs=r(ee," and "),Xt=l(ee,"A",{href:!0,rel:!0});var Jn=d(Xt);Qs=r(Jn,"stefan-it"),Jn.forEach(o),Hs=r(ee,". The original code can be found "),wt=l(ee,"A",{href:!0,rel:!0});var Kn=d(wt);Us=r(Kn,"here"),Kn.forEach(o),Vs=r(ee,"."),ee.forEach(o),as=_(t),ie=l(t,"H2",{class:!0});var Xs=d(ie);ze=l(Xs,"A",{id:!0,class:!0,href:!0});var cl=d(ze);Jo=l(cl,"SPAN",{});var pl=d(Jo);M($t.$$.fragment,pl),pl.forEach(o),cl.forEach(o),Gs=_(Xs),Ko=l(Xs,"SPAN",{});var hl=d(Ko);Js=r(hl,"XLMRobertaXLConfig"),hl.forEach(o),Xs.forEach(o),rs=_(t),S=l(t,"DIV",{class:!0});var rt=d(S);M(vt.$$.fragment,rt),Ks=_(rt),G=l(rt,"P",{});var it=d(G);Ys=r(it,"This is the configuration class to store the configuration of a "),mo=l(it,"A",{href:!0});var ml=d(mo);Zs=r(ml,"XLMRobertaXLModel"),ml.forEach(o),ea=r(it," or a "),Yo=l(it,"CODE",{});var ul=d(Yo);ta=r(ul,"TFXLMRobertaXLModel"),ul.forEach(o),oa=r(it,`.
It is used to instantiate a XLM_ROBERTA_XL model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLM_ROBERTA_XL `),Tt=l(it,"A",{href:!0,rel:!0});var fl=d(Tt);na=r(fl,"facebook/xlm-roberta-xl"),fl.forEach(o),sa=r(it," architecture."),it.forEach(o),aa=_(rt),le=l(rt,"P",{});var Fo=d(le);ra=r(Fo,"Configuration objects inherit from "),uo=l(Fo,"A",{href:!0});var gl=d(uo);ia=r(gl,"PretrainedConfig"),gl.forEach(o),la=r(Fo,` and can be used to control the model outputs. Read the
documentation from `),fo=l(Fo,"A",{href:!0});var _l=d(fo);da=r(_l,"PretrainedConfig"),_l.forEach(o),ca=r(Fo," for more information."),Fo.forEach(o),pa=_(rt),M(Ce.$$.fragment,rt),rt.forEach(o),is=_(t),de=l(t,"H2",{class:!0});var ws=d(de);qe=l(ws,"A",{id:!0,class:!0,href:!0});var bl=d(qe);Zo=l(bl,"SPAN",{});var Ll=d(Zo);M(yt.$$.fragment,Ll),Ll.forEach(o),bl.forEach(o),ha=_(ws),en=l(ws,"SPAN",{});var kl=d(en);ma=r(kl,"XLMRobertaXLModel"),kl.forEach(o),ws.forEach(o),ls=_(t),N=l(t,"DIV",{class:!0});var lt=d(N);M(xt.$$.fragment,lt),ua=_(lt),ce=l(lt,"P",{});var zo=d(ce);fa=r(zo,`The bare XLM-RoBERTa-xlarge Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),go=l(zo,"A",{href:!0});var Ml=d(go);ga=r(Ml,"PreTrainedModel"),Ml.forEach(o),_a=r(zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Rt=l(zo,"A",{href:!0,rel:!0});var Xl=d(Rt);ba=r(Xl,"torch.nn.Module"),Xl.forEach(o),La=r(zo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),zo.forEach(o),ka=_(lt),te=l(lt,"P",{});var ro=d(te);Ma=r(ro,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),tn=l(ro,"EM",{});var wl=d(tn);Xa=r(wl,`Attention is
all you need`),wl.forEach(o),R=l(ro,"EM",{});var E=d(R);wa=r(E,`by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin. To behave as an decoder the model needs to be initialized with the `),on=l(E,"CODE",{});var $l=d(on);$a=r($l,"is_decoder"),$l.forEach(o),va=r(E,`
argument of the configuration set to `),nn=l(E,"CODE",{});var vl=d(nn);Ta=r(vl,"True"),vl.forEach(o),ya=r(E,`. To be used in a Seq2Seq model, the model needs to initialized with
both `),sn=l(E,"CODE",{});var Tl=d(sn);xa=r(Tl,"is_decoder"),Tl.forEach(o),Ra=r(E," argument and "),an=l(E,"CODE",{});var yl=d(an);Fa=r(yl,"add_cross_attention"),yl.forEach(o),za=r(E," set to "),rn=l(E,"CODE",{});var xl=d(rn);Ca=r(xl,"True"),xl.forEach(o),qa=r(E,"; an "),ln=l(E,"CODE",{});var Rl=d(ln);Ea=r(Rl,"encoder_hidden_states"),Rl.forEach(o),ja=r(E,` is then expected as
an input to the forward pass. .. `),E.forEach(o),dn=l(ro,"EM",{});var Fl=d(dn);Pa=r(Fl,"Attention is all you need"),Fl.forEach(o),Oa=r(ro,": "),Ft=l(ro,"A",{href:!0,rel:!0});var zl=d(Ft);Aa=r(zl,"https://arxiv.org/abs/1706.03762"),zl.forEach(o),ro.forEach(o),Sa=_(lt),H=l(lt,"DIV",{class:!0});var dt=d(H);M(zt.$$.fragment,dt),Na=_(dt),pe=l(dt,"P",{});var Co=d(pe);Ia=r(Co,"The "),_o=l(Co,"A",{href:!0});var Cl=d(_o);Da=r(Cl,"XLMRobertaXLModel"),Cl.forEach(o),Wa=r(Co," forward method, overrides the "),cn=l(Co,"CODE",{});var ql=d(cn);Ba=r(ql,"__call__"),ql.forEach(o),Qa=r(Co," special method."),Co.forEach(o),Ha=_(dt),M(Ee.$$.fragment,dt),Ua=_(dt),M(je.$$.fragment,dt),dt.forEach(o),lt.forEach(o),ds=_(t),he=l(t,"H2",{class:!0});var $s=d(he);Pe=l($s,"A",{id:!0,class:!0,href:!0});var El=d(Pe);pn=l(El,"SPAN",{});var jl=d(pn);M(Ct.$$.fragment,jl),jl.forEach(o),El.forEach(o),Va=_($s),hn=l($s,"SPAN",{});var Pl=d(hn);Ga=r(Pl,"XLMRobertaXLForCausalLM"),Pl.forEach(o),$s.forEach(o),cs=_(t),J=l(t,"DIV",{class:!0});var qo=d(J);M(qt.$$.fragment,qo),Ja=_(qo),K=l(qo,"P",{});var ct=d(K);Ka=r(ct,"XLM-RoBERTa-xlarge Model with a "),mn=l(ct,"CODE",{});var Ol=d(mn);Ya=r(Ol,"language modeling"),Ol.forEach(o),Za=r(ct,` head on top for CLM fine-tuning.
This model inherits from `),bo=l(ct,"A",{href:!0});var Al=d(bo);er=r(Al,"PreTrainedModel"),Al.forEach(o),tr=r(ct,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Et=l(ct,"A",{href:!0,rel:!0});var Sl=d(Et);or=r(Sl,"torch.nn.Module"),Sl.forEach(o),nr=r(ct,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ct.forEach(o),sr=_(qo),U=l(qo,"DIV",{class:!0});var pt=d(U);M(jt.$$.fragment,pt),ar=_(pt),me=l(pt,"P",{});var Eo=d(me);rr=r(Eo,"The "),Lo=l(Eo,"A",{href:!0});var Nl=d(Lo);ir=r(Nl,"XLMRobertaXLForCausalLM"),Nl.forEach(o),lr=r(Eo," forward method, overrides the "),un=l(Eo,"CODE",{});var Il=d(un);dr=r(Il,"__call__"),Il.forEach(o),cr=r(Eo," special method."),Eo.forEach(o),pr=_(pt),M(Oe.$$.fragment,pt),hr=_(pt),M(Ae.$$.fragment,pt),pt.forEach(o),qo.forEach(o),ps=_(t),ue=l(t,"H2",{class:!0});var vs=d(ue);Se=l(vs,"A",{id:!0,class:!0,href:!0});var Dl=d(Se);fn=l(Dl,"SPAN",{});var Wl=d(fn);M(Pt.$$.fragment,Wl),Wl.forEach(o),Dl.forEach(o),mr=_(vs),gn=l(vs,"SPAN",{});var Bl=d(gn);ur=r(Bl,"XLMRobertaXLForMaskedLM"),Bl.forEach(o),vs.forEach(o),hs=_(t),Y=l(t,"DIV",{class:!0});var jo=d(Y);M(Ot.$$.fragment,jo),fr=_(jo),Z=l(jo,"P",{});var ht=d(Z);gr=r(ht,"XLM-RoBERTa-xlarge Model with a "),_n=l(ht,"CODE",{});var Ql=d(_n);_r=r(Ql,"language modeling"),Ql.forEach(o),br=r(ht,` head on top.
This model inherits from `),ko=l(ht,"A",{href:!0});var Hl=d(ko);Lr=r(Hl,"PreTrainedModel"),Hl.forEach(o),kr=r(ht,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),At=l(ht,"A",{href:!0,rel:!0});var Ul=d(At);Mr=r(Ul,"torch.nn.Module"),Ul.forEach(o),Xr=r(ht,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ht.forEach(o),wr=_(jo),z=l(jo,"DIV",{class:!0});var oe=d(z);M(St.$$.fragment,oe),$r=_(oe),fe=l(oe,"P",{});var Po=d(fe);vr=r(Po,"The "),Mo=l(Po,"A",{href:!0});var Vl=d(Mo);Tr=r(Vl,"XLMRobertaXLForMaskedLM"),Vl.forEach(o),yr=r(Po," forward method, overrides the "),bn=l(Po,"CODE",{});var Gl=d(bn);xr=r(Gl,"__call__"),Gl.forEach(o),Rr=r(Po," special method."),Po.forEach(o),Fr=_(oe),M(Ne.$$.fragment,oe),zr=_(oe),M(Ie.$$.fragment,oe),Cr=_(oe),M(De.$$.fragment,oe),oe.forEach(o),jo.forEach(o),ms=_(t),ge=l(t,"H2",{class:!0});var Ts=d(ge);We=l(Ts,"A",{id:!0,class:!0,href:!0});var Jl=d(We);Ln=l(Jl,"SPAN",{});var Kl=d(Ln);M(Nt.$$.fragment,Kl),Kl.forEach(o),Jl.forEach(o),qr=_(Ts),kn=l(Ts,"SPAN",{});var Yl=d(kn);Er=r(Yl,"XLMRobertaXLForSequenceClassification"),Yl.forEach(o),Ts.forEach(o),us=_(t),I=l(t,"DIV",{class:!0});var mt=d(I);M(It.$$.fragment,mt),jr=_(mt),Mn=l(mt,"P",{});var Zl=d(Mn);Pr=r(Zl,`XLM-RoBERTa-xlarge Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`),Zl.forEach(o),Or=_(mt),_e=l(mt,"P",{});var Oo=d(_e);Ar=r(Oo,"This model inherits from "),Xo=l(Oo,"A",{href:!0});var ed=d(Xo);Sr=r(ed,"PreTrainedModel"),ed.forEach(o),Nr=r(Oo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Dt=l(Oo,"A",{href:!0,rel:!0});var td=d(Dt);Ir=r(td,"torch.nn.Module"),td.forEach(o),Dr=r(Oo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Oo.forEach(o),Wr=_(mt),x=l(mt,"DIV",{class:!0});var j=d(x);M(Wt.$$.fragment,j),Br=_(j),be=l(j,"P",{});var Ao=d(be);Qr=r(Ao,"The "),wo=l(Ao,"A",{href:!0});var od=d(wo);Hr=r(od,"XLMRobertaXLForSequenceClassification"),od.forEach(o),Ur=r(Ao," forward method, overrides the "),Xn=l(Ao,"CODE",{});var nd=d(Xn);Vr=r(nd,"__call__"),nd.forEach(o),Gr=r(Ao," special method."),Ao.forEach(o),Jr=_(j),M(Be.$$.fragment,j),Kr=_(j),M(Qe.$$.fragment,j),Yr=_(j),M(He.$$.fragment,j),Zr=_(j),M(Ue.$$.fragment,j),ei=_(j),M(Ve.$$.fragment,j),j.forEach(o),mt.forEach(o),fs=_(t),Le=l(t,"H2",{class:!0});var ys=d(Le);Ge=l(ys,"A",{id:!0,class:!0,href:!0});var sd=d(Ge);wn=l(sd,"SPAN",{});var ad=d(wn);M(Bt.$$.fragment,ad),ad.forEach(o),sd.forEach(o),ti=_(ys),$n=l(ys,"SPAN",{});var rd=d($n);oi=r(rd,"XLMRobertaXLForMultipleChoice"),rd.forEach(o),ys.forEach(o),gs=_(t),D=l(t,"DIV",{class:!0});var ut=d(D);M(Qt.$$.fragment,ut),ni=_(ut),vn=l(ut,"P",{});var id=d(vn);si=r(id,`XLM-Roberta-xlarge Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`),id.forEach(o),ai=_(ut),ke=l(ut,"P",{});var So=d(ke);ri=r(So,"This model inherits from "),$o=l(So,"A",{href:!0});var ld=d($o);ii=r(ld,"PreTrainedModel"),ld.forEach(o),li=r(So,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Ht=l(So,"A",{href:!0,rel:!0});var dd=d(Ht);di=r(dd,"torch.nn.Module"),dd.forEach(o),ci=r(So,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),So.forEach(o),pi=_(ut),V=l(ut,"DIV",{class:!0});var ft=d(V);M(Ut.$$.fragment,ft),hi=_(ft),Me=l(ft,"P",{});var No=d(Me);mi=r(No,"The "),vo=l(No,"A",{href:!0});var cd=d(vo);ui=r(cd,"XLMRobertaXLForMultipleChoice"),cd.forEach(o),fi=r(No," forward method, overrides the "),Tn=l(No,"CODE",{});var pd=d(Tn);gi=r(pd,"__call__"),pd.forEach(o),_i=r(No," special method."),No.forEach(o),bi=_(ft),M(Je.$$.fragment,ft),Li=_(ft),M(Ke.$$.fragment,ft),ft.forEach(o),ut.forEach(o),_s=_(t),Xe=l(t,"H2",{class:!0});var xs=d(Xe);Ye=l(xs,"A",{id:!0,class:!0,href:!0});var hd=d(Ye);yn=l(hd,"SPAN",{});var md=d(yn);M(Vt.$$.fragment,md),md.forEach(o),hd.forEach(o),ki=_(xs),xn=l(xs,"SPAN",{});var ud=d(xn);Mi=r(ud,"XLMRobertaXLForTokenClassification"),ud.forEach(o),xs.forEach(o),bs=_(t),W=l(t,"DIV",{class:!0});var gt=d(W);M(Gt.$$.fragment,gt),Xi=_(gt),Rn=l(gt,"P",{});var fd=d(Rn);wi=r(fd,`XLM-Roberta-xlarge Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),fd.forEach(o),$i=_(gt),we=l(gt,"P",{});var Io=d(we);vi=r(Io,"This model inherits from "),To=l(Io,"A",{href:!0});var gd=d(To);Ti=r(gd,"PreTrainedModel"),gd.forEach(o),yi=r(Io,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Jt=l(Io,"A",{href:!0,rel:!0});var _d=d(Jt);xi=r(_d,"torch.nn.Module"),_d.forEach(o),Ri=r(Io,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Io.forEach(o),Fi=_(gt),C=l(gt,"DIV",{class:!0});var ne=d(C);M(Kt.$$.fragment,ne),zi=_(ne),$e=l(ne,"P",{});var Do=d($e);Ci=r(Do,"The "),yo=l(Do,"A",{href:!0});var bd=d(yo);qi=r(bd,"XLMRobertaXLForTokenClassification"),bd.forEach(o),Ei=r(Do," forward method, overrides the "),Fn=l(Do,"CODE",{});var Ld=d(Fn);ji=r(Ld,"__call__"),Ld.forEach(o),Pi=r(Do," special method."),Do.forEach(o),Oi=_(ne),M(Ze.$$.fragment,ne),Ai=_(ne),M(et.$$.fragment,ne),Si=_(ne),M(tt.$$.fragment,ne),ne.forEach(o),gt.forEach(o),Ls=_(t),ve=l(t,"H2",{class:!0});var Rs=d(ve);ot=l(Rs,"A",{id:!0,class:!0,href:!0});var kd=d(ot);zn=l(kd,"SPAN",{});var Md=d(zn);M(Yt.$$.fragment,Md),Md.forEach(o),kd.forEach(o),Ni=_(Rs),Cn=l(Rs,"SPAN",{});var Xd=d(Cn);Ii=r(Xd,"XLMRobertaXLForQuestionAnswering"),Xd.forEach(o),Rs.forEach(o),ks=_(t),B=l(t,"DIV",{class:!0});var _t=d(B);M(Zt.$$.fragment,_t),Di=_(_t),Te=l(_t,"P",{});var Wo=d(Te);Wi=r(Wo,`XLM-Roberta-xlarge Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),qn=l(Wo,"CODE",{});var wd=d(qn);Bi=r(wd,"span start logits"),wd.forEach(o),Qi=r(Wo," and "),En=l(Wo,"CODE",{});var $d=d(En);Hi=r($d,"span end logits"),$d.forEach(o),Ui=r(Wo,")."),Wo.forEach(o),Vi=_(_t),ye=l(_t,"P",{});var Bo=d(ye);Gi=r(Bo,"This model inherits from "),xo=l(Bo,"A",{href:!0});var vd=d(xo);Ji=r(vd,"PreTrainedModel"),vd.forEach(o),Ki=r(Bo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),eo=l(Bo,"A",{href:!0,rel:!0});var Td=d(eo);Yi=r(Td,"torch.nn.Module"),Td.forEach(o),Zi=r(Bo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Bo.forEach(o),el=_(_t),q=l(_t,"DIV",{class:!0});var se=d(q);M(to.$$.fragment,se),tl=_(se),xe=l(se,"P",{});var Qo=d(xe);ol=r(Qo,"The "),Ro=l(Qo,"A",{href:!0});var yd=d(Ro);nl=r(yd,"XLMRobertaXLForQuestionAnswering"),yd.forEach(o),sl=r(Qo," forward method, overrides the "),jn=l(Qo,"CODE",{});var xd=d(jn);al=r(xd,"__call__"),xd.forEach(o),rl=r(Qo," special method."),Qo.forEach(o),il=_(se),M(nt.$$.fragment,se),ll=_(se),M(st.$$.fragment,se),dl=_(se),M(at.$$.fragment,se),se.forEach(o),_t.forEach(o),this.h()},h(){m(s,"name","hf:doc:metadata"),m(s,"content",JSON.stringify(oc)),m(p,"id","xlmrobertaxl"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#xlmrobertaxl"),m(c,"class","relative group"),m(Re,"id","overview"),m(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Re,"href","#overview"),m(re,"class","relative group"),m(Lt,"href","https://arxiv.org/abs/2105.00572"),m(Lt,"rel","nofollow"),m(Mt,"href","https://github.com/Soonhwan-Kwon"),m(Mt,"rel","nofollow"),m(Xt,"href","https://huggingface.co/stefan-it"),m(Xt,"rel","nofollow"),m(wt,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),m(wt,"rel","nofollow"),m(ze,"id","transformers.XLMRobertaXLConfig"),m(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ze,"href","#transformers.XLMRobertaXLConfig"),m(ie,"class","relative group"),m(mo,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel"),m(Tt,"href","https://huggingface.co/facebook/xlm-roberta-xl"),m(Tt,"rel","nofollow"),m(uo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(fo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.XLMRobertaXLModel"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.XLMRobertaXLModel"),m(de,"class","relative group"),m(go,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Rt,"rel","nofollow"),m(Ft,"href","https://arxiv.org/abs/1706.03762"),m(Ft,"rel","nofollow"),m(_o,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"id","transformers.XLMRobertaXLForCausalLM"),m(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pe,"href","#transformers.XLMRobertaXLForCausalLM"),m(he,"class","relative group"),m(bo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Et,"rel","nofollow"),m(Lo,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForCausalLM"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"id","transformers.XLMRobertaXLForMaskedLM"),m(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Se,"href","#transformers.XLMRobertaXLForMaskedLM"),m(ue,"class","relative group"),m(ko,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(At,"rel","nofollow"),m(Mo,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForMaskedLM"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.XLMRobertaXLForSequenceClassification"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.XLMRobertaXLForSequenceClassification"),m(ge,"class","relative group"),m(Xo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Dt,"rel","nofollow"),m(wo,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForSequenceClassification"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"id","transformers.XLMRobertaXLForMultipleChoice"),m(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ge,"href","#transformers.XLMRobertaXLForMultipleChoice"),m(Le,"class","relative group"),m($o,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ht,"rel","nofollow"),m(vo,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForMultipleChoice"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"id","transformers.XLMRobertaXLForTokenClassification"),m(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ye,"href","#transformers.XLMRobertaXLForTokenClassification"),m(Xe,"class","relative group"),m(To,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jt,"rel","nofollow"),m(yo,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForTokenClassification"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"id","transformers.XLMRobertaXLForQuestionAnswering"),m(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ot,"href","#transformers.XLMRobertaXLForQuestionAnswering"),m(ve,"class","relative group"),m(xo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(eo,"rel","nofollow"),m(Ro,"href","/docs/transformers/main/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForQuestionAnswering"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,s),L(t,f,u),L(t,c,u),e(c,p),e(p,b),X(n,b,null),e(c,h),e(c,y),e(y,Fs),L(t,Yn,u),L(t,re,u),e(re,Re),e(Re,Ho),X(bt,Ho,null),e(re,zs),e(re,Uo),e(Uo,Cs),L(t,Zn,u),L(t,Fe,u),e(Fe,qs),e(Fe,Lt),e(Lt,Es),e(Fe,js),L(t,es,u),L(t,lo,u),e(lo,Ps),L(t,ts,u),L(t,co,u),e(co,Vo),e(Vo,Os),L(t,os,u),L(t,po,u),e(po,As),L(t,ns,u),L(t,ho,u),e(ho,kt),e(kt,Ss),e(kt,Go),e(Go,Ns),e(kt,Is),L(t,ss,u),L(t,Q,u),e(Q,Ds),e(Q,Mt),e(Mt,Ws),e(Q,Bs),e(Q,Xt),e(Xt,Qs),e(Q,Hs),e(Q,wt),e(wt,Us),e(Q,Vs),L(t,as,u),L(t,ie,u),e(ie,ze),e(ze,Jo),X($t,Jo,null),e(ie,Gs),e(ie,Ko),e(Ko,Js),L(t,rs,u),L(t,S,u),X(vt,S,null),e(S,Ks),e(S,G),e(G,Ys),e(G,mo),e(mo,Zs),e(G,ea),e(G,Yo),e(Yo,ta),e(G,oa),e(G,Tt),e(Tt,na),e(G,sa),e(S,aa),e(S,le),e(le,ra),e(le,uo),e(uo,ia),e(le,la),e(le,fo),e(fo,da),e(le,ca),e(S,pa),X(Ce,S,null),L(t,is,u),L(t,de,u),e(de,qe),e(qe,Zo),X(yt,Zo,null),e(de,ha),e(de,en),e(en,ma),L(t,ls,u),L(t,N,u),X(xt,N,null),e(N,ua),e(N,ce),e(ce,fa),e(ce,go),e(go,ga),e(ce,_a),e(ce,Rt),e(Rt,ba),e(ce,La),e(N,ka),e(N,te),e(te,Ma),e(te,tn),e(tn,Xa),e(te,R),e(R,wa),e(R,on),e(on,$a),e(R,va),e(R,nn),e(nn,Ta),e(R,ya),e(R,sn),e(sn,xa),e(R,Ra),e(R,an),e(an,Fa),e(R,za),e(R,rn),e(rn,Ca),e(R,qa),e(R,ln),e(ln,Ea),e(R,ja),e(te,dn),e(dn,Pa),e(te,Oa),e(te,Ft),e(Ft,Aa),e(N,Sa),e(N,H),X(zt,H,null),e(H,Na),e(H,pe),e(pe,Ia),e(pe,_o),e(_o,Da),e(pe,Wa),e(pe,cn),e(cn,Ba),e(pe,Qa),e(H,Ha),X(Ee,H,null),e(H,Ua),X(je,H,null),L(t,ds,u),L(t,he,u),e(he,Pe),e(Pe,pn),X(Ct,pn,null),e(he,Va),e(he,hn),e(hn,Ga),L(t,cs,u),L(t,J,u),X(qt,J,null),e(J,Ja),e(J,K),e(K,Ka),e(K,mn),e(mn,Ya),e(K,Za),e(K,bo),e(bo,er),e(K,tr),e(K,Et),e(Et,or),e(K,nr),e(J,sr),e(J,U),X(jt,U,null),e(U,ar),e(U,me),e(me,rr),e(me,Lo),e(Lo,ir),e(me,lr),e(me,un),e(un,dr),e(me,cr),e(U,pr),X(Oe,U,null),e(U,hr),X(Ae,U,null),L(t,ps,u),L(t,ue,u),e(ue,Se),e(Se,fn),X(Pt,fn,null),e(ue,mr),e(ue,gn),e(gn,ur),L(t,hs,u),L(t,Y,u),X(Ot,Y,null),e(Y,fr),e(Y,Z),e(Z,gr),e(Z,_n),e(_n,_r),e(Z,br),e(Z,ko),e(ko,Lr),e(Z,kr),e(Z,At),e(At,Mr),e(Z,Xr),e(Y,wr),e(Y,z),X(St,z,null),e(z,$r),e(z,fe),e(fe,vr),e(fe,Mo),e(Mo,Tr),e(fe,yr),e(fe,bn),e(bn,xr),e(fe,Rr),e(z,Fr),X(Ne,z,null),e(z,zr),X(Ie,z,null),e(z,Cr),X(De,z,null),L(t,ms,u),L(t,ge,u),e(ge,We),e(We,Ln),X(Nt,Ln,null),e(ge,qr),e(ge,kn),e(kn,Er),L(t,us,u),L(t,I,u),X(It,I,null),e(I,jr),e(I,Mn),e(Mn,Pr),e(I,Or),e(I,_e),e(_e,Ar),e(_e,Xo),e(Xo,Sr),e(_e,Nr),e(_e,Dt),e(Dt,Ir),e(_e,Dr),e(I,Wr),e(I,x),X(Wt,x,null),e(x,Br),e(x,be),e(be,Qr),e(be,wo),e(wo,Hr),e(be,Ur),e(be,Xn),e(Xn,Vr),e(be,Gr),e(x,Jr),X(Be,x,null),e(x,Kr),X(Qe,x,null),e(x,Yr),X(He,x,null),e(x,Zr),X(Ue,x,null),e(x,ei),X(Ve,x,null),L(t,fs,u),L(t,Le,u),e(Le,Ge),e(Ge,wn),X(Bt,wn,null),e(Le,ti),e(Le,$n),e($n,oi),L(t,gs,u),L(t,D,u),X(Qt,D,null),e(D,ni),e(D,vn),e(vn,si),e(D,ai),e(D,ke),e(ke,ri),e(ke,$o),e($o,ii),e(ke,li),e(ke,Ht),e(Ht,di),e(ke,ci),e(D,pi),e(D,V),X(Ut,V,null),e(V,hi),e(V,Me),e(Me,mi),e(Me,vo),e(vo,ui),e(Me,fi),e(Me,Tn),e(Tn,gi),e(Me,_i),e(V,bi),X(Je,V,null),e(V,Li),X(Ke,V,null),L(t,_s,u),L(t,Xe,u),e(Xe,Ye),e(Ye,yn),X(Vt,yn,null),e(Xe,ki),e(Xe,xn),e(xn,Mi),L(t,bs,u),L(t,W,u),X(Gt,W,null),e(W,Xi),e(W,Rn),e(Rn,wi),e(W,$i),e(W,we),e(we,vi),e(we,To),e(To,Ti),e(we,yi),e(we,Jt),e(Jt,xi),e(we,Ri),e(W,Fi),e(W,C),X(Kt,C,null),e(C,zi),e(C,$e),e($e,Ci),e($e,yo),e(yo,qi),e($e,Ei),e($e,Fn),e(Fn,ji),e($e,Pi),e(C,Oi),X(Ze,C,null),e(C,Ai),X(et,C,null),e(C,Si),X(tt,C,null),L(t,Ls,u),L(t,ve,u),e(ve,ot),e(ot,zn),X(Yt,zn,null),e(ve,Ni),e(ve,Cn),e(Cn,Ii),L(t,ks,u),L(t,B,u),X(Zt,B,null),e(B,Di),e(B,Te),e(Te,Wi),e(Te,qn),e(qn,Bi),e(Te,Qi),e(Te,En),e(En,Hi),e(Te,Ui),e(B,Vi),e(B,ye),e(ye,Gi),e(ye,xo),e(xo,Ji),e(ye,Ki),e(ye,eo),e(eo,Yi),e(ye,Zi),e(B,el),e(B,q),X(to,q,null),e(q,tl),e(q,xe),e(xe,ol),e(xe,Ro),e(Ro,nl),e(xe,sl),e(xe,jn),e(jn,al),e(xe,rl),e(q,il),X(nt,q,null),e(q,ll),X(st,q,null),e(q,dl),X(at,q,null),Ms=!0},p(t,[u]){const oo={};u&2&&(oo.$$scope={dirty:u,ctx:t}),Ce.$set(oo);const Pn={};u&2&&(Pn.$$scope={dirty:u,ctx:t}),Ee.$set(Pn);const On={};u&2&&(On.$$scope={dirty:u,ctx:t}),je.$set(On);const An={};u&2&&(An.$$scope={dirty:u,ctx:t}),Oe.$set(An);const no={};u&2&&(no.$$scope={dirty:u,ctx:t}),Ae.$set(no);const Sn={};u&2&&(Sn.$$scope={dirty:u,ctx:t}),Ne.$set(Sn);const Nn={};u&2&&(Nn.$$scope={dirty:u,ctx:t}),Ie.$set(Nn);const In={};u&2&&(In.$$scope={dirty:u,ctx:t}),De.$set(In);const so={};u&2&&(so.$$scope={dirty:u,ctx:t}),Be.$set(so);const Dn={};u&2&&(Dn.$$scope={dirty:u,ctx:t}),Qe.$set(Dn);const Wn={};u&2&&(Wn.$$scope={dirty:u,ctx:t}),He.$set(Wn);const Bn={};u&2&&(Bn.$$scope={dirty:u,ctx:t}),Ue.$set(Bn);const Qn={};u&2&&(Qn.$$scope={dirty:u,ctx:t}),Ve.$set(Qn);const Hn={};u&2&&(Hn.$$scope={dirty:u,ctx:t}),Je.$set(Hn);const Un={};u&2&&(Un.$$scope={dirty:u,ctx:t}),Ke.$set(Un);const ao={};u&2&&(ao.$$scope={dirty:u,ctx:t}),Ze.$set(ao);const Vn={};u&2&&(Vn.$$scope={dirty:u,ctx:t}),et.$set(Vn);const ee={};u&2&&(ee.$$scope={dirty:u,ctx:t}),tt.$set(ee);const Gn={};u&2&&(Gn.$$scope={dirty:u,ctx:t}),nt.$set(Gn);const Jn={};u&2&&(Jn.$$scope={dirty:u,ctx:t}),st.$set(Jn);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:t}),at.$set(Kn)},i(t){Ms||(w(n.$$.fragment,t),w(bt.$$.fragment,t),w($t.$$.fragment,t),w(vt.$$.fragment,t),w(Ce.$$.fragment,t),w(yt.$$.fragment,t),w(xt.$$.fragment,t),w(zt.$$.fragment,t),w(Ee.$$.fragment,t),w(je.$$.fragment,t),w(Ct.$$.fragment,t),w(qt.$$.fragment,t),w(jt.$$.fragment,t),w(Oe.$$.fragment,t),w(Ae.$$.fragment,t),w(Pt.$$.fragment,t),w(Ot.$$.fragment,t),w(St.$$.fragment,t),w(Ne.$$.fragment,t),w(Ie.$$.fragment,t),w(De.$$.fragment,t),w(Nt.$$.fragment,t),w(It.$$.fragment,t),w(Wt.$$.fragment,t),w(Be.$$.fragment,t),w(Qe.$$.fragment,t),w(He.$$.fragment,t),w(Ue.$$.fragment,t),w(Ve.$$.fragment,t),w(Bt.$$.fragment,t),w(Qt.$$.fragment,t),w(Ut.$$.fragment,t),w(Je.$$.fragment,t),w(Ke.$$.fragment,t),w(Vt.$$.fragment,t),w(Gt.$$.fragment,t),w(Kt.$$.fragment,t),w(Ze.$$.fragment,t),w(et.$$.fragment,t),w(tt.$$.fragment,t),w(Yt.$$.fragment,t),w(Zt.$$.fragment,t),w(to.$$.fragment,t),w(nt.$$.fragment,t),w(st.$$.fragment,t),w(at.$$.fragment,t),Ms=!0)},o(t){$(n.$$.fragment,t),$(bt.$$.fragment,t),$($t.$$.fragment,t),$(vt.$$.fragment,t),$(Ce.$$.fragment,t),$(yt.$$.fragment,t),$(xt.$$.fragment,t),$(zt.$$.fragment,t),$(Ee.$$.fragment,t),$(je.$$.fragment,t),$(Ct.$$.fragment,t),$(qt.$$.fragment,t),$(jt.$$.fragment,t),$(Oe.$$.fragment,t),$(Ae.$$.fragment,t),$(Pt.$$.fragment,t),$(Ot.$$.fragment,t),$(St.$$.fragment,t),$(Ne.$$.fragment,t),$(Ie.$$.fragment,t),$(De.$$.fragment,t),$(Nt.$$.fragment,t),$(It.$$.fragment,t),$(Wt.$$.fragment,t),$(Be.$$.fragment,t),$(Qe.$$.fragment,t),$(He.$$.fragment,t),$(Ue.$$.fragment,t),$(Ve.$$.fragment,t),$(Bt.$$.fragment,t),$(Qt.$$.fragment,t),$(Ut.$$.fragment,t),$(Je.$$.fragment,t),$(Ke.$$.fragment,t),$(Vt.$$.fragment,t),$(Gt.$$.fragment,t),$(Kt.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(tt.$$.fragment,t),$(Yt.$$.fragment,t),$(Zt.$$.fragment,t),$(to.$$.fragment,t),$(nt.$$.fragment,t),$(st.$$.fragment,t),$(at.$$.fragment,t),Ms=!1},d(t){o(s),t&&o(f),t&&o(c),v(n),t&&o(Yn),t&&o(re),v(bt),t&&o(Zn),t&&o(Fe),t&&o(es),t&&o(lo),t&&o(ts),t&&o(co),t&&o(os),t&&o(po),t&&o(ns),t&&o(ho),t&&o(ss),t&&o(Q),t&&o(as),t&&o(ie),v($t),t&&o(rs),t&&o(S),v(vt),v(Ce),t&&o(is),t&&o(de),v(yt),t&&o(ls),t&&o(N),v(xt),v(zt),v(Ee),v(je),t&&o(ds),t&&o(he),v(Ct),t&&o(cs),t&&o(J),v(qt),v(jt),v(Oe),v(Ae),t&&o(ps),t&&o(ue),v(Pt),t&&o(hs),t&&o(Y),v(Ot),v(St),v(Ne),v(Ie),v(De),t&&o(ms),t&&o(ge),v(Nt),t&&o(us),t&&o(I),v(It),v(Wt),v(Be),v(Qe),v(He),v(Ue),v(Ve),t&&o(fs),t&&o(Le),v(Bt),t&&o(gs),t&&o(D),v(Qt),v(Ut),v(Je),v(Ke),t&&o(_s),t&&o(Xe),v(Vt),t&&o(bs),t&&o(W),v(Gt),v(Kt),v(Ze),v(et),v(tt),t&&o(Ls),t&&o(ve),v(Yt),t&&o(ks),t&&o(B),v(Zt),v(to),v(nt),v(st),v(at)}}}const oc={local:"xlmrobertaxl",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaXLConfig",title:"XLMRobertaXLConfig"},{local:"transformers.XLMRobertaXLModel",title:"XLMRobertaXLModel"},{local:"transformers.XLMRobertaXLForCausalLM",title:"XLMRobertaXLForCausalLM"},{local:"transformers.XLMRobertaXLForMaskedLM",title:"XLMRobertaXLForMaskedLM"},{local:"transformers.XLMRobertaXLForSequenceClassification",title:"XLMRobertaXLForSequenceClassification"},{local:"transformers.XLMRobertaXLForMultipleChoice",title:"XLMRobertaXLForMultipleChoice"},{local:"transformers.XLMRobertaXLForTokenClassification",title:"XLMRobertaXLForTokenClassification"},{local:"transformers.XLMRobertaXLForQuestionAnswering",title:"XLMRobertaXLForQuestionAnswering"}],title:"XLM-RoBERTa-XL"};function nc(T){return qd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cc extends Rd{constructor(s){super();Fd(this,s,nc,tc,zd,{})}}export{cc as default,oc as metadata};
