import{S as Rd,i as Fd,s as Cd,e as i,k as g,w as k,t as a,M as zd,c as l,d as t,m as _,a as d,x as v,h as r,b as m,G as e,g as L,y as M,q as w,o as X,B as $,v as qd,L as O}from"../../chunks/vendor-hf-doc-builder.js";import{T as lt}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as A}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as P}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ed(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaXLModel, XLMRobertaXLConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=i("p"),f=a("Examples:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Examples:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function jd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(t),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&t(s)}}}function Pd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function Od(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(t),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&t(s)}}}function Ad(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function Sd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(t),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&t(s)}}}function Nd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForMaskedLM
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
`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function Id(T){let s,f;return s=new A({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){M(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Dd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(t),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&t(s)}}}function Wd(T){let s,f,c,p,b;return p=new A({props:{code:`import torch
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
`}}),{c(){s=i("p"),f=a("Example of single-label classification:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example of single-label classification:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function Bd(T){let s,f;return s=new A({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){M(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Qd(T){let s,f,c,p,b;return p=new A({props:{code:`import torch
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
`}}),{c(){s=i("p"),f=a("Example of multi-label classification:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example of multi-label classification:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function Hd(T){let s,f;return s=new A({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){M(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Ud(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(t),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&t(s)}}}function Vd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function Gd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(t),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&t(s)}}}function Jd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForTokenClassification
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
`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function Kd(T){let s,f;return s=new A({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){M(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Yd(T){let s,f,c,p,b;return{c(){s=i("p"),f=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=r(y,"Module"),y.forEach(t),b=r(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&t(s)}}}function Zd(T){let s,f,c,p,b;return p=new A({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaXLForQuestionAnswering
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
`}}),{c(){s=i("p"),f=a("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=r(h,"Example:"),h.forEach(t),c=_(n),v(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),M(p,n,h),b=!0},p:O,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(c),$(p,n)}}}function ec(T){let s,f;return s=new A({props:{code:`# target is "nice puppet"
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
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){M(s,c,p),f=!0},p:O,i(c){f||(w(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function oc(T){let s,f,c,p,b,n,h,y,Fs,Yn,re,Re,Ht,Lo,Cs,Ut,zs,Zn,Fe,qs,ko,Es,js,es,dt,Ps,os,ct,Vt,Os,ts,pt,As,ns,ht,vo,Ss,Gt,Ns,Is,ss,Q,Ds,Mo,Ws,Bs,wo,Qs,Hs,Xo,Us,Vs,as,ie,Ce,Jt,$o,Gs,Kt,Js,rs,S,To,Ks,G,Ys,mt,Zs,ea,Yt,oa,ta,yo,na,sa,aa,le,ra,ut,ia,la,ft,da,ca,pa,ze,is,de,qe,Zt,xo,ha,en,ma,ls,N,Ro,ua,ce,fa,gt,ga,_a,Fo,ba,La,ka,oe,va,on,Ma,R,wa,tn,Xa,$a,nn,Ta,ya,sn,xa,Ra,an,Fa,Ca,rn,za,qa,ln,Ea,ja,dn,Pa,Oa,Co,Aa,Sa,H,zo,Na,pe,Ia,_t,Da,Wa,cn,Ba,Qa,Ha,Ee,Ua,je,ds,he,Pe,pn,qo,Va,hn,Ga,cs,J,Eo,Ja,K,Ka,mn,Ya,Za,bt,er,or,jo,tr,nr,sr,U,Po,ar,me,rr,Lt,ir,lr,un,dr,cr,pr,Oe,hr,Ae,ps,ue,Se,fn,Oo,mr,gn,ur,hs,Y,Ao,fr,Z,gr,_n,_r,br,kt,Lr,kr,So,vr,Mr,wr,C,No,Xr,fe,$r,vt,Tr,yr,bn,xr,Rr,Fr,Ne,Cr,Ie,zr,De,ms,ge,We,Ln,Io,qr,kn,Er,us,I,Do,jr,vn,Pr,Or,_e,Ar,Mt,Sr,Nr,Wo,Ir,Dr,Wr,x,Bo,Br,be,Qr,wt,Hr,Ur,Mn,Vr,Gr,Jr,Be,Kr,Qe,Yr,He,Zr,Ue,ei,Ve,fs,Le,Ge,wn,Qo,oi,Xn,ti,gs,D,Ho,ni,$n,si,ai,ke,ri,Xt,ii,li,Uo,di,ci,pi,V,Vo,hi,ve,mi,$t,ui,fi,Tn,gi,_i,bi,Je,Li,Ke,_s,Me,Ye,yn,Go,ki,xn,vi,bs,W,Jo,Mi,Rn,wi,Xi,we,$i,Tt,Ti,yi,Ko,xi,Ri,Fi,z,Yo,Ci,Xe,zi,yt,qi,Ei,Fn,ji,Pi,Oi,Ze,Ai,eo,Si,oo,Ls,$e,to,Cn,Zo,Ni,zn,Ii,ks,B,et,Di,Te,Wi,qn,Bi,Qi,En,Hi,Ui,Vi,ye,Gi,xt,Ji,Ki,ot,Yi,Zi,el,q,tt,ol,xe,tl,Rt,nl,sl,jn,al,rl,il,no,ll,so,dl,ao,vs;return n=new ae({}),Lo=new ae({}),$o=new ae({}),To=new F({props:{name:"class transformers.XLMRobertaXLConfig",anchor:"transformers.XLMRobertaXLConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 2560"},{name:"num_hidden_layers",val:" = 36"},{name:"num_attention_heads",val:" = 32"},{name:"intermediate_size",val:" = 10240"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 514"},{name:"type_vocab_size",val:" = 1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250880) &#x2014;
Vocabulary size of the XLM_ROBERTA_XL model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel">XLMRobertaXLModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMRobertaXLConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2560) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel">XLMRobertaXLModel</a> or
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/configuration_xlm_roberta_xl.py#L34"}}),ze=new P({props:{anchor:"transformers.XLMRobertaXLConfig.example",$$slots:{default:[Ed]},$$scope:{ctx:T}}}),xo=new ae({}),Ro=new F({props:{name:"class transformers.XLMRobertaXLModel",anchor:"transformers.XLMRobertaXLModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L673"}}),zo=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L713",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new lt({props:{$$slots:{default:[jd]},$$scope:{ctx:T}}}),je=new P({props:{anchor:"transformers.XLMRobertaXLModel.forward.example",$$slots:{default:[Pd]},$$scope:{ctx:T}}}),qo=new ae({}),Eo=new F({props:{name:"class transformers.XLMRobertaXLForCausalLM",anchor:"transformers.XLMRobertaXLForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L855"}}),Po=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L880",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new lt({props:{$$slots:{default:[Od]},$$scope:{ctx:T}}}),Ae=new P({props:{anchor:"transformers.XLMRobertaXLForCausalLM.forward.example",$$slots:{default:[Ad]},$$scope:{ctx:T}}}),Oo=new ae({}),Ao=new F({props:{name:"class transformers.XLMRobertaXLForMaskedLM",anchor:"transformers.XLMRobertaXLForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1005"}}),No=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1033",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new lt({props:{$$slots:{default:[Sd]},$$scope:{ctx:T}}}),Ie=new P({props:{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.example",$$slots:{default:[Nd]},$$scope:{ctx:T}}}),De=new P({props:{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.example-2",$$slots:{default:[Id]},$$scope:{ctx:T}}}),Io=new ae({}),Do=new F({props:{name:"class transformers.XLMRobertaXLForSequenceClassification",anchor:"transformers.XLMRobertaXLForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1133"}}),Bo=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1146",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new lt({props:{$$slots:{default:[Dd]},$$scope:{ctx:T}}}),Qe=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example",$$slots:{default:[Wd]},$$scope:{ctx:T}}}),He=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-2",$$slots:{default:[Bd]},$$scope:{ctx:T}}}),Ue=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-3",$$slots:{default:[Qd]},$$scope:{ctx:T}}}),Ve=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-4",$$slots:{default:[Hd]},$$scope:{ctx:T}}}),Qo=new ae({}),Ho=new F({props:{name:"class transformers.XLMRobertaXLForMultipleChoice",anchor:"transformers.XLMRobertaXLForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1230"}}),Vo=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1242",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new lt({props:{$$slots:{default:[Ud]},$$scope:{ctx:T}}}),Ke=new P({props:{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:T}}}),Go=new ae({}),Jo=new F({props:{name:"class transformers.XLMRobertaXLForTokenClassification",anchor:"transformers.XLMRobertaXLForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1324"}}),Yo=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1341",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new lt({props:{$$slots:{default:[Gd]},$$scope:{ctx:T}}}),eo=new P({props:{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.example",$$slots:{default:[Jd]},$$scope:{ctx:T}}}),oo=new P({props:{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.example-2",$$slots:{default:[Kd]},$$scope:{ctx:T}}}),Zo=new ae({}),et=new F({props:{name:"class transformers.XLMRobertaXLForQuestionAnswering",anchor:"transformers.XLMRobertaXLForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1439"}}),tt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1452",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new lt({props:{$$slots:{default:[Yd]},$$scope:{ctx:T}}}),so=new P({props:{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.example",$$slots:{default:[Zd]},$$scope:{ctx:T}}}),ao=new P({props:{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.example-2",$$slots:{default:[ec]},$$scope:{ctx:T}}}),{c(){s=i("meta"),f=g(),c=i("h1"),p=i("a"),b=i("span"),k(n.$$.fragment),h=g(),y=i("span"),Fs=a("XLM-RoBERTa-XL"),Yn=g(),re=i("h2"),Re=i("a"),Ht=i("span"),k(Lo.$$.fragment),Cs=g(),Ut=i("span"),zs=a("Overview"),Zn=g(),Fe=i("p"),qs=a("The XLM-RoBERTa-XL model was proposed in "),ko=i("a"),Es=a("Larger-Scale Transformers for Multilingual Masked Language Modeling"),js=a(" by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau."),es=g(),dt=i("p"),Ps=a("The abstract from the paper is the following:"),os=g(),ct=i("p"),Vt=i("em"),Os=a("Recent work has demonstrated the effectiveness of cross-lingual language model pretraining for cross-lingual understanding. In this study, we present the results of two larger multilingual masked language models, with 3.5B and 10.7B parameters. Our two new models dubbed XLM-R XL and XLM-R XXL outperform XLM-R by 1.8% and 2.4% average accuracy on XNLI. Our model also outperforms the RoBERTa-Large model on several English tasks of the GLUE benchmark by 0.3% on average while handling 99 more languages. This suggests pretrained models with larger capacity may obtain both strong performance on high-resource languages while greatly improving low-resource languages. We make our code and models publicly available."),ts=g(),pt=i("p"),As=a("Tips:"),ns=g(),ht=i("ul"),vo=i("li"),Ss=a(`XLM-RoBERTa-XL is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Gt=i("code"),Ns=a("lang"),Is=a(` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),ss=g(),Q=i("p"),Ds=a("This model was contributed by "),Mo=i("a"),Ws=a("Soonhwan-Kwon"),Bs=a(" and "),wo=i("a"),Qs=a("stefan-it"),Hs=a(". The original code can be found "),Xo=i("a"),Us=a("here"),Vs=a("."),as=g(),ie=i("h2"),Ce=i("a"),Jt=i("span"),k($o.$$.fragment),Gs=g(),Kt=i("span"),Js=a("XLMRobertaXLConfig"),rs=g(),S=i("div"),k(To.$$.fragment),Ks=g(),G=i("p"),Ys=a("This is the configuration class to store the configuration of a "),mt=i("a"),Zs=a("XLMRobertaXLModel"),ea=a(" or a "),Yt=i("code"),oa=a("TFXLMRobertaXLModel"),ta=a(`.
It is used to instantiate a XLM_ROBERTA_XL model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLM_ROBERTA_XL `),yo=i("a"),na=a("facebook/xlm-roberta-xl"),sa=a(" architecture."),aa=g(),le=i("p"),ra=a("Configuration objects inherit from "),ut=i("a"),ia=a("PretrainedConfig"),la=a(` and can be used to control the model outputs. Read the
documentation from `),ft=i("a"),da=a("PretrainedConfig"),ca=a(" for more information."),pa=g(),k(ze.$$.fragment),is=g(),de=i("h2"),qe=i("a"),Zt=i("span"),k(xo.$$.fragment),ha=g(),en=i("span"),ma=a("XLMRobertaXLModel"),ls=g(),N=i("div"),k(Ro.$$.fragment),ua=g(),ce=i("p"),fa=a(`The bare XLM-RoBERTa-xlarge Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),gt=i("a"),ga=a("PreTrainedModel"),_a=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Fo=i("a"),ba=a("torch.nn.Module"),La=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ka=g(),oe=i("p"),va=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),on=i("em"),Ma=a(`Attention is
all you need`),R=i("em"),wa=a(`by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin. To behave as an decoder the model needs to be initialized with the `),tn=i("code"),Xa=a("is_decoder"),$a=a(`
argument of the configuration set to `),nn=i("code"),Ta=a("True"),ya=a(`. To be used in a Seq2Seq model, the model needs to initialized with
both `),sn=i("code"),xa=a("is_decoder"),Ra=a(" argument and "),an=i("code"),Fa=a("add_cross_attention"),Ca=a(" set to "),rn=i("code"),za=a("True"),qa=a("; an "),ln=i("code"),Ea=a("encoder_hidden_states"),ja=a(` is then expected as
an input to the forward pass. .. `),dn=i("em"),Pa=a("Attention is all you need"),Oa=a(": "),Co=i("a"),Aa=a("https://arxiv.org/abs/1706.03762"),Sa=g(),H=i("div"),k(zo.$$.fragment),Na=g(),pe=i("p"),Ia=a("The "),_t=i("a"),Da=a("XLMRobertaXLModel"),Wa=a(" forward method, overrides the "),cn=i("code"),Ba=a("__call__"),Qa=a(" special method."),Ha=g(),k(Ee.$$.fragment),Ua=g(),k(je.$$.fragment),ds=g(),he=i("h2"),Pe=i("a"),pn=i("span"),k(qo.$$.fragment),Va=g(),hn=i("span"),Ga=a("XLMRobertaXLForCausalLM"),cs=g(),J=i("div"),k(Eo.$$.fragment),Ja=g(),K=i("p"),Ka=a("XLM-RoBERTa-xlarge Model with a "),mn=i("code"),Ya=a("language modeling"),Za=a(` head on top for CLM fine-tuning.
This model inherits from `),bt=i("a"),er=a("PreTrainedModel"),or=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),jo=i("a"),tr=a("torch.nn.Module"),nr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),sr=g(),U=i("div"),k(Po.$$.fragment),ar=g(),me=i("p"),rr=a("The "),Lt=i("a"),ir=a("XLMRobertaXLForCausalLM"),lr=a(" forward method, overrides the "),un=i("code"),dr=a("__call__"),cr=a(" special method."),pr=g(),k(Oe.$$.fragment),hr=g(),k(Ae.$$.fragment),ps=g(),ue=i("h2"),Se=i("a"),fn=i("span"),k(Oo.$$.fragment),mr=g(),gn=i("span"),ur=a("XLMRobertaXLForMaskedLM"),hs=g(),Y=i("div"),k(Ao.$$.fragment),fr=g(),Z=i("p"),gr=a("XLM-RoBERTa-xlarge Model with a "),_n=i("code"),_r=a("language modeling"),br=a(` head on top.
This model inherits from `),kt=i("a"),Lr=a("PreTrainedModel"),kr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),So=i("a"),vr=a("torch.nn.Module"),Mr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),wr=g(),C=i("div"),k(No.$$.fragment),Xr=g(),fe=i("p"),$r=a("The "),vt=i("a"),Tr=a("XLMRobertaXLForMaskedLM"),yr=a(" forward method, overrides the "),bn=i("code"),xr=a("__call__"),Rr=a(" special method."),Fr=g(),k(Ne.$$.fragment),Cr=g(),k(Ie.$$.fragment),zr=g(),k(De.$$.fragment),ms=g(),ge=i("h2"),We=i("a"),Ln=i("span"),k(Io.$$.fragment),qr=g(),kn=i("span"),Er=a("XLMRobertaXLForSequenceClassification"),us=g(),I=i("div"),k(Do.$$.fragment),jr=g(),vn=i("p"),Pr=a(`XLM-RoBERTa-xlarge Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`),Or=g(),_e=i("p"),Ar=a("This model inherits from "),Mt=i("a"),Sr=a("PreTrainedModel"),Nr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Wo=i("a"),Ir=a("torch.nn.Module"),Dr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Wr=g(),x=i("div"),k(Bo.$$.fragment),Br=g(),be=i("p"),Qr=a("The "),wt=i("a"),Hr=a("XLMRobertaXLForSequenceClassification"),Ur=a(" forward method, overrides the "),Mn=i("code"),Vr=a("__call__"),Gr=a(" special method."),Jr=g(),k(Be.$$.fragment),Kr=g(),k(Qe.$$.fragment),Yr=g(),k(He.$$.fragment),Zr=g(),k(Ue.$$.fragment),ei=g(),k(Ve.$$.fragment),fs=g(),Le=i("h2"),Ge=i("a"),wn=i("span"),k(Qo.$$.fragment),oi=g(),Xn=i("span"),ti=a("XLMRobertaXLForMultipleChoice"),gs=g(),D=i("div"),k(Ho.$$.fragment),ni=g(),$n=i("p"),si=a(`XLM-Roberta-xlarge Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`),ai=g(),ke=i("p"),ri=a("This model inherits from "),Xt=i("a"),ii=a("PreTrainedModel"),li=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Uo=i("a"),di=a("torch.nn.Module"),ci=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),pi=g(),V=i("div"),k(Vo.$$.fragment),hi=g(),ve=i("p"),mi=a("The "),$t=i("a"),ui=a("XLMRobertaXLForMultipleChoice"),fi=a(" forward method, overrides the "),Tn=i("code"),gi=a("__call__"),_i=a(" special method."),bi=g(),k(Je.$$.fragment),Li=g(),k(Ke.$$.fragment),_s=g(),Me=i("h2"),Ye=i("a"),yn=i("span"),k(Go.$$.fragment),ki=g(),xn=i("span"),vi=a("XLMRobertaXLForTokenClassification"),bs=g(),W=i("div"),k(Jo.$$.fragment),Mi=g(),Rn=i("p"),wi=a(`XLM-Roberta-xlarge Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Xi=g(),we=i("p"),$i=a("This model inherits from "),Tt=i("a"),Ti=a("PreTrainedModel"),yi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Ko=i("a"),xi=a("torch.nn.Module"),Ri=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Fi=g(),z=i("div"),k(Yo.$$.fragment),Ci=g(),Xe=i("p"),zi=a("The "),yt=i("a"),qi=a("XLMRobertaXLForTokenClassification"),Ei=a(" forward method, overrides the "),Fn=i("code"),ji=a("__call__"),Pi=a(" special method."),Oi=g(),k(Ze.$$.fragment),Ai=g(),k(eo.$$.fragment),Si=g(),k(oo.$$.fragment),Ls=g(),$e=i("h2"),to=i("a"),Cn=i("span"),k(Zo.$$.fragment),Ni=g(),zn=i("span"),Ii=a("XLMRobertaXLForQuestionAnswering"),ks=g(),B=i("div"),k(et.$$.fragment),Di=g(),Te=i("p"),Wi=a(`XLM-Roberta-xlarge Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),qn=i("code"),Bi=a("span start logits"),Qi=a(" and "),En=i("code"),Hi=a("span end logits"),Ui=a(")."),Vi=g(),ye=i("p"),Gi=a("This model inherits from "),xt=i("a"),Ji=a("PreTrainedModel"),Ki=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),ot=i("a"),Yi=a("torch.nn.Module"),Zi=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),el=g(),q=i("div"),k(tt.$$.fragment),ol=g(),xe=i("p"),tl=a("The "),Rt=i("a"),nl=a("XLMRobertaXLForQuestionAnswering"),sl=a(" forward method, overrides the "),jn=i("code"),al=a("__call__"),rl=a(" special method."),il=g(),k(no.$$.fragment),ll=g(),k(so.$$.fragment),dl=g(),k(ao.$$.fragment),this.h()},l(o){const u=zd('[data-svelte="svelte-1phssyn"]',document.head);s=l(u,"META",{name:!0,content:!0}),u.forEach(t),f=_(o),c=l(o,"H1",{class:!0});var nt=d(c);p=l(nt,"A",{id:!0,class:!0,href:!0});var Pn=d(p);b=l(Pn,"SPAN",{});var On=d(b);v(n.$$.fragment,On),On.forEach(t),Pn.forEach(t),h=_(nt),y=l(nt,"SPAN",{});var An=d(y);Fs=r(An,"XLM-RoBERTa-XL"),An.forEach(t),nt.forEach(t),Yn=_(o),re=l(o,"H2",{class:!0});var st=d(re);Re=l(st,"A",{id:!0,class:!0,href:!0});var Sn=d(Re);Ht=l(Sn,"SPAN",{});var Nn=d(Ht);v(Lo.$$.fragment,Nn),Nn.forEach(t),Sn.forEach(t),Cs=_(st),Ut=l(st,"SPAN",{});var In=d(Ut);zs=r(In,"Overview"),In.forEach(t),st.forEach(t),Zn=_(o),Fe=l(o,"P",{});var at=d(Fe);qs=r(at,"The XLM-RoBERTa-XL model was proposed in "),ko=l(at,"A",{href:!0,rel:!0});var Dn=d(ko);Es=r(Dn,"Larger-Scale Transformers for Multilingual Masked Language Modeling"),Dn.forEach(t),js=r(at," by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau."),at.forEach(t),es=_(o),dt=l(o,"P",{});var Wn=d(dt);Ps=r(Wn,"The abstract from the paper is the following:"),Wn.forEach(t),os=_(o),ct=l(o,"P",{});var Bn=d(ct);Vt=l(Bn,"EM",{});var Qn=d(Vt);Os=r(Qn,"Recent work has demonstrated the effectiveness of cross-lingual language model pretraining for cross-lingual understanding. In this study, we present the results of two larger multilingual masked language models, with 3.5B and 10.7B parameters. Our two new models dubbed XLM-R XL and XLM-R XXL outperform XLM-R by 1.8% and 2.4% average accuracy on XNLI. Our model also outperforms the RoBERTa-Large model on several English tasks of the GLUE benchmark by 0.3% on average while handling 99 more languages. This suggests pretrained models with larger capacity may obtain both strong performance on high-resource languages while greatly improving low-resource languages. We make our code and models publicly available."),Qn.forEach(t),Bn.forEach(t),ts=_(o),pt=l(o,"P",{});var Hn=d(pt);As=r(Hn,"Tips:"),Hn.forEach(t),ns=_(o),ht=l(o,"UL",{});var Un=d(ht);vo=l(Un,"LI",{});var rt=d(vo);Ss=r(rt,`XLM-RoBERTa-XL is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Gt=l(rt,"CODE",{});var Vn=d(Gt);Ns=r(Vn,"lang"),Vn.forEach(t),Is=r(rt,` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),rt.forEach(t),Un.forEach(t),ss=_(o),Q=l(o,"P",{});var ee=d(Q);Ds=r(ee,"This model was contributed by "),Mo=l(ee,"A",{href:!0,rel:!0});var Gn=d(Mo);Ws=r(Gn,"Soonhwan-Kwon"),Gn.forEach(t),Bs=r(ee," and "),wo=l(ee,"A",{href:!0,rel:!0});var Jn=d(wo);Qs=r(Jn,"stefan-it"),Jn.forEach(t),Hs=r(ee,". The original code can be found "),Xo=l(ee,"A",{href:!0,rel:!0});var Kn=d(Xo);Us=r(Kn,"here"),Kn.forEach(t),Vs=r(ee,"."),ee.forEach(t),as=_(o),ie=l(o,"H2",{class:!0});var Ms=d(ie);Ce=l(Ms,"A",{id:!0,class:!0,href:!0});var cl=d(Ce);Jt=l(cl,"SPAN",{});var pl=d(Jt);v($o.$$.fragment,pl),pl.forEach(t),cl.forEach(t),Gs=_(Ms),Kt=l(Ms,"SPAN",{});var hl=d(Kt);Js=r(hl,"XLMRobertaXLConfig"),hl.forEach(t),Ms.forEach(t),rs=_(o),S=l(o,"DIV",{class:!0});var ro=d(S);v(To.$$.fragment,ro),Ks=_(ro),G=l(ro,"P",{});var io=d(G);Ys=r(io,"This is the configuration class to store the configuration of a "),mt=l(io,"A",{href:!0});var ml=d(mt);Zs=r(ml,"XLMRobertaXLModel"),ml.forEach(t),ea=r(io," or a "),Yt=l(io,"CODE",{});var ul=d(Yt);oa=r(ul,"TFXLMRobertaXLModel"),ul.forEach(t),ta=r(io,`.
It is used to instantiate a XLM_ROBERTA_XL model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLM_ROBERTA_XL `),yo=l(io,"A",{href:!0,rel:!0});var fl=d(yo);na=r(fl,"facebook/xlm-roberta-xl"),fl.forEach(t),sa=r(io," architecture."),io.forEach(t),aa=_(ro),le=l(ro,"P",{});var Ft=d(le);ra=r(Ft,"Configuration objects inherit from "),ut=l(Ft,"A",{href:!0});var gl=d(ut);ia=r(gl,"PretrainedConfig"),gl.forEach(t),la=r(Ft,` and can be used to control the model outputs. Read the
documentation from `),ft=l(Ft,"A",{href:!0});var _l=d(ft);da=r(_l,"PretrainedConfig"),_l.forEach(t),ca=r(Ft," for more information."),Ft.forEach(t),pa=_(ro),v(ze.$$.fragment,ro),ro.forEach(t),is=_(o),de=l(o,"H2",{class:!0});var ws=d(de);qe=l(ws,"A",{id:!0,class:!0,href:!0});var bl=d(qe);Zt=l(bl,"SPAN",{});var Ll=d(Zt);v(xo.$$.fragment,Ll),Ll.forEach(t),bl.forEach(t),ha=_(ws),en=l(ws,"SPAN",{});var kl=d(en);ma=r(kl,"XLMRobertaXLModel"),kl.forEach(t),ws.forEach(t),ls=_(o),N=l(o,"DIV",{class:!0});var lo=d(N);v(Ro.$$.fragment,lo),ua=_(lo),ce=l(lo,"P",{});var Ct=d(ce);fa=r(Ct,`The bare XLM-RoBERTa-xlarge Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),gt=l(Ct,"A",{href:!0});var vl=d(gt);ga=r(vl,"PreTrainedModel"),vl.forEach(t),_a=r(Ct,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Fo=l(Ct,"A",{href:!0,rel:!0});var Ml=d(Fo);ba=r(Ml,"torch.nn.Module"),Ml.forEach(t),La=r(Ct,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ct.forEach(t),ka=_(lo),oe=l(lo,"P",{});var it=d(oe);va=r(it,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),on=l(it,"EM",{});var wl=d(on);Ma=r(wl,`Attention is
all you need`),wl.forEach(t),R=l(it,"EM",{});var E=d(R);wa=r(E,`by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin. To behave as an decoder the model needs to be initialized with the `),tn=l(E,"CODE",{});var Xl=d(tn);Xa=r(Xl,"is_decoder"),Xl.forEach(t),$a=r(E,`
argument of the configuration set to `),nn=l(E,"CODE",{});var $l=d(nn);Ta=r($l,"True"),$l.forEach(t),ya=r(E,`. To be used in a Seq2Seq model, the model needs to initialized with
both `),sn=l(E,"CODE",{});var Tl=d(sn);xa=r(Tl,"is_decoder"),Tl.forEach(t),Ra=r(E," argument and "),an=l(E,"CODE",{});var yl=d(an);Fa=r(yl,"add_cross_attention"),yl.forEach(t),Ca=r(E," set to "),rn=l(E,"CODE",{});var xl=d(rn);za=r(xl,"True"),xl.forEach(t),qa=r(E,"; an "),ln=l(E,"CODE",{});var Rl=d(ln);Ea=r(Rl,"encoder_hidden_states"),Rl.forEach(t),ja=r(E,` is then expected as
an input to the forward pass. .. `),E.forEach(t),dn=l(it,"EM",{});var Fl=d(dn);Pa=r(Fl,"Attention is all you need"),Fl.forEach(t),Oa=r(it,": "),Co=l(it,"A",{href:!0,rel:!0});var Cl=d(Co);Aa=r(Cl,"https://arxiv.org/abs/1706.03762"),Cl.forEach(t),it.forEach(t),Sa=_(lo),H=l(lo,"DIV",{class:!0});var co=d(H);v(zo.$$.fragment,co),Na=_(co),pe=l(co,"P",{});var zt=d(pe);Ia=r(zt,"The "),_t=l(zt,"A",{href:!0});var zl=d(_t);Da=r(zl,"XLMRobertaXLModel"),zl.forEach(t),Wa=r(zt," forward method, overrides the "),cn=l(zt,"CODE",{});var ql=d(cn);Ba=r(ql,"__call__"),ql.forEach(t),Qa=r(zt," special method."),zt.forEach(t),Ha=_(co),v(Ee.$$.fragment,co),Ua=_(co),v(je.$$.fragment,co),co.forEach(t),lo.forEach(t),ds=_(o),he=l(o,"H2",{class:!0});var Xs=d(he);Pe=l(Xs,"A",{id:!0,class:!0,href:!0});var El=d(Pe);pn=l(El,"SPAN",{});var jl=d(pn);v(qo.$$.fragment,jl),jl.forEach(t),El.forEach(t),Va=_(Xs),hn=l(Xs,"SPAN",{});var Pl=d(hn);Ga=r(Pl,"XLMRobertaXLForCausalLM"),Pl.forEach(t),Xs.forEach(t),cs=_(o),J=l(o,"DIV",{class:!0});var qt=d(J);v(Eo.$$.fragment,qt),Ja=_(qt),K=l(qt,"P",{});var po=d(K);Ka=r(po,"XLM-RoBERTa-xlarge Model with a "),mn=l(po,"CODE",{});var Ol=d(mn);Ya=r(Ol,"language modeling"),Ol.forEach(t),Za=r(po,` head on top for CLM fine-tuning.
This model inherits from `),bt=l(po,"A",{href:!0});var Al=d(bt);er=r(Al,"PreTrainedModel"),Al.forEach(t),or=r(po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),jo=l(po,"A",{href:!0,rel:!0});var Sl=d(jo);tr=r(Sl,"torch.nn.Module"),Sl.forEach(t),nr=r(po,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),po.forEach(t),sr=_(qt),U=l(qt,"DIV",{class:!0});var ho=d(U);v(Po.$$.fragment,ho),ar=_(ho),me=l(ho,"P",{});var Et=d(me);rr=r(Et,"The "),Lt=l(Et,"A",{href:!0});var Nl=d(Lt);ir=r(Nl,"XLMRobertaXLForCausalLM"),Nl.forEach(t),lr=r(Et," forward method, overrides the "),un=l(Et,"CODE",{});var Il=d(un);dr=r(Il,"__call__"),Il.forEach(t),cr=r(Et," special method."),Et.forEach(t),pr=_(ho),v(Oe.$$.fragment,ho),hr=_(ho),v(Ae.$$.fragment,ho),ho.forEach(t),qt.forEach(t),ps=_(o),ue=l(o,"H2",{class:!0});var $s=d(ue);Se=l($s,"A",{id:!0,class:!0,href:!0});var Dl=d(Se);fn=l(Dl,"SPAN",{});var Wl=d(fn);v(Oo.$$.fragment,Wl),Wl.forEach(t),Dl.forEach(t),mr=_($s),gn=l($s,"SPAN",{});var Bl=d(gn);ur=r(Bl,"XLMRobertaXLForMaskedLM"),Bl.forEach(t),$s.forEach(t),hs=_(o),Y=l(o,"DIV",{class:!0});var jt=d(Y);v(Ao.$$.fragment,jt),fr=_(jt),Z=l(jt,"P",{});var mo=d(Z);gr=r(mo,"XLM-RoBERTa-xlarge Model with a "),_n=l(mo,"CODE",{});var Ql=d(_n);_r=r(Ql,"language modeling"),Ql.forEach(t),br=r(mo,` head on top.
This model inherits from `),kt=l(mo,"A",{href:!0});var Hl=d(kt);Lr=r(Hl,"PreTrainedModel"),Hl.forEach(t),kr=r(mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),So=l(mo,"A",{href:!0,rel:!0});var Ul=d(So);vr=r(Ul,"torch.nn.Module"),Ul.forEach(t),Mr=r(mo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),mo.forEach(t),wr=_(jt),C=l(jt,"DIV",{class:!0});var te=d(C);v(No.$$.fragment,te),Xr=_(te),fe=l(te,"P",{});var Pt=d(fe);$r=r(Pt,"The "),vt=l(Pt,"A",{href:!0});var Vl=d(vt);Tr=r(Vl,"XLMRobertaXLForMaskedLM"),Vl.forEach(t),yr=r(Pt," forward method, overrides the "),bn=l(Pt,"CODE",{});var Gl=d(bn);xr=r(Gl,"__call__"),Gl.forEach(t),Rr=r(Pt," special method."),Pt.forEach(t),Fr=_(te),v(Ne.$$.fragment,te),Cr=_(te),v(Ie.$$.fragment,te),zr=_(te),v(De.$$.fragment,te),te.forEach(t),jt.forEach(t),ms=_(o),ge=l(o,"H2",{class:!0});var Ts=d(ge);We=l(Ts,"A",{id:!0,class:!0,href:!0});var Jl=d(We);Ln=l(Jl,"SPAN",{});var Kl=d(Ln);v(Io.$$.fragment,Kl),Kl.forEach(t),Jl.forEach(t),qr=_(Ts),kn=l(Ts,"SPAN",{});var Yl=d(kn);Er=r(Yl,"XLMRobertaXLForSequenceClassification"),Yl.forEach(t),Ts.forEach(t),us=_(o),I=l(o,"DIV",{class:!0});var uo=d(I);v(Do.$$.fragment,uo),jr=_(uo),vn=l(uo,"P",{});var Zl=d(vn);Pr=r(Zl,`XLM-RoBERTa-xlarge Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`),Zl.forEach(t),Or=_(uo),_e=l(uo,"P",{});var Ot=d(_e);Ar=r(Ot,"This model inherits from "),Mt=l(Ot,"A",{href:!0});var ed=d(Mt);Sr=r(ed,"PreTrainedModel"),ed.forEach(t),Nr=r(Ot,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Wo=l(Ot,"A",{href:!0,rel:!0});var od=d(Wo);Ir=r(od,"torch.nn.Module"),od.forEach(t),Dr=r(Ot,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ot.forEach(t),Wr=_(uo),x=l(uo,"DIV",{class:!0});var j=d(x);v(Bo.$$.fragment,j),Br=_(j),be=l(j,"P",{});var At=d(be);Qr=r(At,"The "),wt=l(At,"A",{href:!0});var td=d(wt);Hr=r(td,"XLMRobertaXLForSequenceClassification"),td.forEach(t),Ur=r(At," forward method, overrides the "),Mn=l(At,"CODE",{});var nd=d(Mn);Vr=r(nd,"__call__"),nd.forEach(t),Gr=r(At," special method."),At.forEach(t),Jr=_(j),v(Be.$$.fragment,j),Kr=_(j),v(Qe.$$.fragment,j),Yr=_(j),v(He.$$.fragment,j),Zr=_(j),v(Ue.$$.fragment,j),ei=_(j),v(Ve.$$.fragment,j),j.forEach(t),uo.forEach(t),fs=_(o),Le=l(o,"H2",{class:!0});var ys=d(Le);Ge=l(ys,"A",{id:!0,class:!0,href:!0});var sd=d(Ge);wn=l(sd,"SPAN",{});var ad=d(wn);v(Qo.$$.fragment,ad),ad.forEach(t),sd.forEach(t),oi=_(ys),Xn=l(ys,"SPAN",{});var rd=d(Xn);ti=r(rd,"XLMRobertaXLForMultipleChoice"),rd.forEach(t),ys.forEach(t),gs=_(o),D=l(o,"DIV",{class:!0});var fo=d(D);v(Ho.$$.fragment,fo),ni=_(fo),$n=l(fo,"P",{});var id=d($n);si=r(id,`XLM-Roberta-xlarge Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`),id.forEach(t),ai=_(fo),ke=l(fo,"P",{});var St=d(ke);ri=r(St,"This model inherits from "),Xt=l(St,"A",{href:!0});var ld=d(Xt);ii=r(ld,"PreTrainedModel"),ld.forEach(t),li=r(St,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Uo=l(St,"A",{href:!0,rel:!0});var dd=d(Uo);di=r(dd,"torch.nn.Module"),dd.forEach(t),ci=r(St,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),St.forEach(t),pi=_(fo),V=l(fo,"DIV",{class:!0});var go=d(V);v(Vo.$$.fragment,go),hi=_(go),ve=l(go,"P",{});var Nt=d(ve);mi=r(Nt,"The "),$t=l(Nt,"A",{href:!0});var cd=d($t);ui=r(cd,"XLMRobertaXLForMultipleChoice"),cd.forEach(t),fi=r(Nt," forward method, overrides the "),Tn=l(Nt,"CODE",{});var pd=d(Tn);gi=r(pd,"__call__"),pd.forEach(t),_i=r(Nt," special method."),Nt.forEach(t),bi=_(go),v(Je.$$.fragment,go),Li=_(go),v(Ke.$$.fragment,go),go.forEach(t),fo.forEach(t),_s=_(o),Me=l(o,"H2",{class:!0});var xs=d(Me);Ye=l(xs,"A",{id:!0,class:!0,href:!0});var hd=d(Ye);yn=l(hd,"SPAN",{});var md=d(yn);v(Go.$$.fragment,md),md.forEach(t),hd.forEach(t),ki=_(xs),xn=l(xs,"SPAN",{});var ud=d(xn);vi=r(ud,"XLMRobertaXLForTokenClassification"),ud.forEach(t),xs.forEach(t),bs=_(o),W=l(o,"DIV",{class:!0});var _o=d(W);v(Jo.$$.fragment,_o),Mi=_(_o),Rn=l(_o,"P",{});var fd=d(Rn);wi=r(fd,`XLM-Roberta-xlarge Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),fd.forEach(t),Xi=_(_o),we=l(_o,"P",{});var It=d(we);$i=r(It,"This model inherits from "),Tt=l(It,"A",{href:!0});var gd=d(Tt);Ti=r(gd,"PreTrainedModel"),gd.forEach(t),yi=r(It,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Ko=l(It,"A",{href:!0,rel:!0});var _d=d(Ko);xi=r(_d,"torch.nn.Module"),_d.forEach(t),Ri=r(It,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),It.forEach(t),Fi=_(_o),z=l(_o,"DIV",{class:!0});var ne=d(z);v(Yo.$$.fragment,ne),Ci=_(ne),Xe=l(ne,"P",{});var Dt=d(Xe);zi=r(Dt,"The "),yt=l(Dt,"A",{href:!0});var bd=d(yt);qi=r(bd,"XLMRobertaXLForTokenClassification"),bd.forEach(t),Ei=r(Dt," forward method, overrides the "),Fn=l(Dt,"CODE",{});var Ld=d(Fn);ji=r(Ld,"__call__"),Ld.forEach(t),Pi=r(Dt," special method."),Dt.forEach(t),Oi=_(ne),v(Ze.$$.fragment,ne),Ai=_(ne),v(eo.$$.fragment,ne),Si=_(ne),v(oo.$$.fragment,ne),ne.forEach(t),_o.forEach(t),Ls=_(o),$e=l(o,"H2",{class:!0});var Rs=d($e);to=l(Rs,"A",{id:!0,class:!0,href:!0});var kd=d(to);Cn=l(kd,"SPAN",{});var vd=d(Cn);v(Zo.$$.fragment,vd),vd.forEach(t),kd.forEach(t),Ni=_(Rs),zn=l(Rs,"SPAN",{});var Md=d(zn);Ii=r(Md,"XLMRobertaXLForQuestionAnswering"),Md.forEach(t),Rs.forEach(t),ks=_(o),B=l(o,"DIV",{class:!0});var bo=d(B);v(et.$$.fragment,bo),Di=_(bo),Te=l(bo,"P",{});var Wt=d(Te);Wi=r(Wt,`XLM-Roberta-xlarge Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),qn=l(Wt,"CODE",{});var wd=d(qn);Bi=r(wd,"span start logits"),wd.forEach(t),Qi=r(Wt," and "),En=l(Wt,"CODE",{});var Xd=d(En);Hi=r(Xd,"span end logits"),Xd.forEach(t),Ui=r(Wt,")."),Wt.forEach(t),Vi=_(bo),ye=l(bo,"P",{});var Bt=d(ye);Gi=r(Bt,"This model inherits from "),xt=l(Bt,"A",{href:!0});var $d=d(xt);Ji=r($d,"PreTrainedModel"),$d.forEach(t),Ki=r(Bt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),ot=l(Bt,"A",{href:!0,rel:!0});var Td=d(ot);Yi=r(Td,"torch.nn.Module"),Td.forEach(t),Zi=r(Bt,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Bt.forEach(t),el=_(bo),q=l(bo,"DIV",{class:!0});var se=d(q);v(tt.$$.fragment,se),ol=_(se),xe=l(se,"P",{});var Qt=d(xe);tl=r(Qt,"The "),Rt=l(Qt,"A",{href:!0});var yd=d(Rt);nl=r(yd,"XLMRobertaXLForQuestionAnswering"),yd.forEach(t),sl=r(Qt," forward method, overrides the "),jn=l(Qt,"CODE",{});var xd=d(jn);al=r(xd,"__call__"),xd.forEach(t),rl=r(Qt," special method."),Qt.forEach(t),il=_(se),v(no.$$.fragment,se),ll=_(se),v(so.$$.fragment,se),dl=_(se),v(ao.$$.fragment,se),se.forEach(t),bo.forEach(t),this.h()},h(){m(s,"name","hf:doc:metadata"),m(s,"content",JSON.stringify(tc)),m(p,"id","xlmrobertaxl"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#xlmrobertaxl"),m(c,"class","relative group"),m(Re,"id","overview"),m(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Re,"href","#overview"),m(re,"class","relative group"),m(ko,"href","https://arxiv.org/abs/2105.00572"),m(ko,"rel","nofollow"),m(Mo,"href","https://github.com/Soonhwan-Kwon"),m(Mo,"rel","nofollow"),m(wo,"href","https://huggingface.co/stefan-it"),m(wo,"rel","nofollow"),m(Xo,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),m(Xo,"rel","nofollow"),m(Ce,"id","transformers.XLMRobertaXLConfig"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#transformers.XLMRobertaXLConfig"),m(ie,"class","relative group"),m(mt,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel"),m(yo,"href","https://huggingface.co/facebook/xlm-roberta-xl"),m(yo,"rel","nofollow"),m(ut,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(ft,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.XLMRobertaXLModel"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.XLMRobertaXLModel"),m(de,"class","relative group"),m(gt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Fo,"rel","nofollow"),m(Co,"href","https://arxiv.org/abs/1706.03762"),m(Co,"rel","nofollow"),m(_t,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"id","transformers.XLMRobertaXLForCausalLM"),m(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pe,"href","#transformers.XLMRobertaXLForCausalLM"),m(he,"class","relative group"),m(bt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(jo,"rel","nofollow"),m(Lt,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForCausalLM"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"id","transformers.XLMRobertaXLForMaskedLM"),m(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Se,"href","#transformers.XLMRobertaXLForMaskedLM"),m(ue,"class","relative group"),m(kt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(So,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(So,"rel","nofollow"),m(vt,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForMaskedLM"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.XLMRobertaXLForSequenceClassification"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.XLMRobertaXLForSequenceClassification"),m(ge,"class","relative group"),m(Mt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Wo,"rel","nofollow"),m(wt,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForSequenceClassification"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"id","transformers.XLMRobertaXLForMultipleChoice"),m(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ge,"href","#transformers.XLMRobertaXLForMultipleChoice"),m(Le,"class","relative group"),m(Xt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Uo,"rel","nofollow"),m($t,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForMultipleChoice"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"id","transformers.XLMRobertaXLForTokenClassification"),m(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ye,"href","#transformers.XLMRobertaXLForTokenClassification"),m(Me,"class","relative group"),m(Tt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ko,"rel","nofollow"),m(yt,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForTokenClassification"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(to,"id","transformers.XLMRobertaXLForQuestionAnswering"),m(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(to,"href","#transformers.XLMRobertaXLForQuestionAnswering"),m($e,"class","relative group"),m(xt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ot,"rel","nofollow"),m(Rt,"href","/docs/transformers/v4.22.1/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForQuestionAnswering"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,s),L(o,f,u),L(o,c,u),e(c,p),e(p,b),M(n,b,null),e(c,h),e(c,y),e(y,Fs),L(o,Yn,u),L(o,re,u),e(re,Re),e(Re,Ht),M(Lo,Ht,null),e(re,Cs),e(re,Ut),e(Ut,zs),L(o,Zn,u),L(o,Fe,u),e(Fe,qs),e(Fe,ko),e(ko,Es),e(Fe,js),L(o,es,u),L(o,dt,u),e(dt,Ps),L(o,os,u),L(o,ct,u),e(ct,Vt),e(Vt,Os),L(o,ts,u),L(o,pt,u),e(pt,As),L(o,ns,u),L(o,ht,u),e(ht,vo),e(vo,Ss),e(vo,Gt),e(Gt,Ns),e(vo,Is),L(o,ss,u),L(o,Q,u),e(Q,Ds),e(Q,Mo),e(Mo,Ws),e(Q,Bs),e(Q,wo),e(wo,Qs),e(Q,Hs),e(Q,Xo),e(Xo,Us),e(Q,Vs),L(o,as,u),L(o,ie,u),e(ie,Ce),e(Ce,Jt),M($o,Jt,null),e(ie,Gs),e(ie,Kt),e(Kt,Js),L(o,rs,u),L(o,S,u),M(To,S,null),e(S,Ks),e(S,G),e(G,Ys),e(G,mt),e(mt,Zs),e(G,ea),e(G,Yt),e(Yt,oa),e(G,ta),e(G,yo),e(yo,na),e(G,sa),e(S,aa),e(S,le),e(le,ra),e(le,ut),e(ut,ia),e(le,la),e(le,ft),e(ft,da),e(le,ca),e(S,pa),M(ze,S,null),L(o,is,u),L(o,de,u),e(de,qe),e(qe,Zt),M(xo,Zt,null),e(de,ha),e(de,en),e(en,ma),L(o,ls,u),L(o,N,u),M(Ro,N,null),e(N,ua),e(N,ce),e(ce,fa),e(ce,gt),e(gt,ga),e(ce,_a),e(ce,Fo),e(Fo,ba),e(ce,La),e(N,ka),e(N,oe),e(oe,va),e(oe,on),e(on,Ma),e(oe,R),e(R,wa),e(R,tn),e(tn,Xa),e(R,$a),e(R,nn),e(nn,Ta),e(R,ya),e(R,sn),e(sn,xa),e(R,Ra),e(R,an),e(an,Fa),e(R,Ca),e(R,rn),e(rn,za),e(R,qa),e(R,ln),e(ln,Ea),e(R,ja),e(oe,dn),e(dn,Pa),e(oe,Oa),e(oe,Co),e(Co,Aa),e(N,Sa),e(N,H),M(zo,H,null),e(H,Na),e(H,pe),e(pe,Ia),e(pe,_t),e(_t,Da),e(pe,Wa),e(pe,cn),e(cn,Ba),e(pe,Qa),e(H,Ha),M(Ee,H,null),e(H,Ua),M(je,H,null),L(o,ds,u),L(o,he,u),e(he,Pe),e(Pe,pn),M(qo,pn,null),e(he,Va),e(he,hn),e(hn,Ga),L(o,cs,u),L(o,J,u),M(Eo,J,null),e(J,Ja),e(J,K),e(K,Ka),e(K,mn),e(mn,Ya),e(K,Za),e(K,bt),e(bt,er),e(K,or),e(K,jo),e(jo,tr),e(K,nr),e(J,sr),e(J,U),M(Po,U,null),e(U,ar),e(U,me),e(me,rr),e(me,Lt),e(Lt,ir),e(me,lr),e(me,un),e(un,dr),e(me,cr),e(U,pr),M(Oe,U,null),e(U,hr),M(Ae,U,null),L(o,ps,u),L(o,ue,u),e(ue,Se),e(Se,fn),M(Oo,fn,null),e(ue,mr),e(ue,gn),e(gn,ur),L(o,hs,u),L(o,Y,u),M(Ao,Y,null),e(Y,fr),e(Y,Z),e(Z,gr),e(Z,_n),e(_n,_r),e(Z,br),e(Z,kt),e(kt,Lr),e(Z,kr),e(Z,So),e(So,vr),e(Z,Mr),e(Y,wr),e(Y,C),M(No,C,null),e(C,Xr),e(C,fe),e(fe,$r),e(fe,vt),e(vt,Tr),e(fe,yr),e(fe,bn),e(bn,xr),e(fe,Rr),e(C,Fr),M(Ne,C,null),e(C,Cr),M(Ie,C,null),e(C,zr),M(De,C,null),L(o,ms,u),L(o,ge,u),e(ge,We),e(We,Ln),M(Io,Ln,null),e(ge,qr),e(ge,kn),e(kn,Er),L(o,us,u),L(o,I,u),M(Do,I,null),e(I,jr),e(I,vn),e(vn,Pr),e(I,Or),e(I,_e),e(_e,Ar),e(_e,Mt),e(Mt,Sr),e(_e,Nr),e(_e,Wo),e(Wo,Ir),e(_e,Dr),e(I,Wr),e(I,x),M(Bo,x,null),e(x,Br),e(x,be),e(be,Qr),e(be,wt),e(wt,Hr),e(be,Ur),e(be,Mn),e(Mn,Vr),e(be,Gr),e(x,Jr),M(Be,x,null),e(x,Kr),M(Qe,x,null),e(x,Yr),M(He,x,null),e(x,Zr),M(Ue,x,null),e(x,ei),M(Ve,x,null),L(o,fs,u),L(o,Le,u),e(Le,Ge),e(Ge,wn),M(Qo,wn,null),e(Le,oi),e(Le,Xn),e(Xn,ti),L(o,gs,u),L(o,D,u),M(Ho,D,null),e(D,ni),e(D,$n),e($n,si),e(D,ai),e(D,ke),e(ke,ri),e(ke,Xt),e(Xt,ii),e(ke,li),e(ke,Uo),e(Uo,di),e(ke,ci),e(D,pi),e(D,V),M(Vo,V,null),e(V,hi),e(V,ve),e(ve,mi),e(ve,$t),e($t,ui),e(ve,fi),e(ve,Tn),e(Tn,gi),e(ve,_i),e(V,bi),M(Je,V,null),e(V,Li),M(Ke,V,null),L(o,_s,u),L(o,Me,u),e(Me,Ye),e(Ye,yn),M(Go,yn,null),e(Me,ki),e(Me,xn),e(xn,vi),L(o,bs,u),L(o,W,u),M(Jo,W,null),e(W,Mi),e(W,Rn),e(Rn,wi),e(W,Xi),e(W,we),e(we,$i),e(we,Tt),e(Tt,Ti),e(we,yi),e(we,Ko),e(Ko,xi),e(we,Ri),e(W,Fi),e(W,z),M(Yo,z,null),e(z,Ci),e(z,Xe),e(Xe,zi),e(Xe,yt),e(yt,qi),e(Xe,Ei),e(Xe,Fn),e(Fn,ji),e(Xe,Pi),e(z,Oi),M(Ze,z,null),e(z,Ai),M(eo,z,null),e(z,Si),M(oo,z,null),L(o,Ls,u),L(o,$e,u),e($e,to),e(to,Cn),M(Zo,Cn,null),e($e,Ni),e($e,zn),e(zn,Ii),L(o,ks,u),L(o,B,u),M(et,B,null),e(B,Di),e(B,Te),e(Te,Wi),e(Te,qn),e(qn,Bi),e(Te,Qi),e(Te,En),e(En,Hi),e(Te,Ui),e(B,Vi),e(B,ye),e(ye,Gi),e(ye,xt),e(xt,Ji),e(ye,Ki),e(ye,ot),e(ot,Yi),e(ye,Zi),e(B,el),e(B,q),M(tt,q,null),e(q,ol),e(q,xe),e(xe,tl),e(xe,Rt),e(Rt,nl),e(xe,sl),e(xe,jn),e(jn,al),e(xe,rl),e(q,il),M(no,q,null),e(q,ll),M(so,q,null),e(q,dl),M(ao,q,null),vs=!0},p(o,[u]){const nt={};u&2&&(nt.$$scope={dirty:u,ctx:o}),ze.$set(nt);const Pn={};u&2&&(Pn.$$scope={dirty:u,ctx:o}),Ee.$set(Pn);const On={};u&2&&(On.$$scope={dirty:u,ctx:o}),je.$set(On);const An={};u&2&&(An.$$scope={dirty:u,ctx:o}),Oe.$set(An);const st={};u&2&&(st.$$scope={dirty:u,ctx:o}),Ae.$set(st);const Sn={};u&2&&(Sn.$$scope={dirty:u,ctx:o}),Ne.$set(Sn);const Nn={};u&2&&(Nn.$$scope={dirty:u,ctx:o}),Ie.$set(Nn);const In={};u&2&&(In.$$scope={dirty:u,ctx:o}),De.$set(In);const at={};u&2&&(at.$$scope={dirty:u,ctx:o}),Be.$set(at);const Dn={};u&2&&(Dn.$$scope={dirty:u,ctx:o}),Qe.$set(Dn);const Wn={};u&2&&(Wn.$$scope={dirty:u,ctx:o}),He.$set(Wn);const Bn={};u&2&&(Bn.$$scope={dirty:u,ctx:o}),Ue.$set(Bn);const Qn={};u&2&&(Qn.$$scope={dirty:u,ctx:o}),Ve.$set(Qn);const Hn={};u&2&&(Hn.$$scope={dirty:u,ctx:o}),Je.$set(Hn);const Un={};u&2&&(Un.$$scope={dirty:u,ctx:o}),Ke.$set(Un);const rt={};u&2&&(rt.$$scope={dirty:u,ctx:o}),Ze.$set(rt);const Vn={};u&2&&(Vn.$$scope={dirty:u,ctx:o}),eo.$set(Vn);const ee={};u&2&&(ee.$$scope={dirty:u,ctx:o}),oo.$set(ee);const Gn={};u&2&&(Gn.$$scope={dirty:u,ctx:o}),no.$set(Gn);const Jn={};u&2&&(Jn.$$scope={dirty:u,ctx:o}),so.$set(Jn);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:o}),ao.$set(Kn)},i(o){vs||(w(n.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(To.$$.fragment,o),w(ze.$$.fragment,o),w(xo.$$.fragment,o),w(Ro.$$.fragment,o),w(zo.$$.fragment,o),w(Ee.$$.fragment,o),w(je.$$.fragment,o),w(qo.$$.fragment,o),w(Eo.$$.fragment,o),w(Po.$$.fragment,o),w(Oe.$$.fragment,o),w(Ae.$$.fragment,o),w(Oo.$$.fragment,o),w(Ao.$$.fragment,o),w(No.$$.fragment,o),w(Ne.$$.fragment,o),w(Ie.$$.fragment,o),w(De.$$.fragment,o),w(Io.$$.fragment,o),w(Do.$$.fragment,o),w(Bo.$$.fragment,o),w(Be.$$.fragment,o),w(Qe.$$.fragment,o),w(He.$$.fragment,o),w(Ue.$$.fragment,o),w(Ve.$$.fragment,o),w(Qo.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Je.$$.fragment,o),w(Ke.$$.fragment,o),w(Go.$$.fragment,o),w(Jo.$$.fragment,o),w(Yo.$$.fragment,o),w(Ze.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(Zo.$$.fragment,o),w(et.$$.fragment,o),w(tt.$$.fragment,o),w(no.$$.fragment,o),w(so.$$.fragment,o),w(ao.$$.fragment,o),vs=!0)},o(o){X(n.$$.fragment,o),X(Lo.$$.fragment,o),X($o.$$.fragment,o),X(To.$$.fragment,o),X(ze.$$.fragment,o),X(xo.$$.fragment,o),X(Ro.$$.fragment,o),X(zo.$$.fragment,o),X(Ee.$$.fragment,o),X(je.$$.fragment,o),X(qo.$$.fragment,o),X(Eo.$$.fragment,o),X(Po.$$.fragment,o),X(Oe.$$.fragment,o),X(Ae.$$.fragment,o),X(Oo.$$.fragment,o),X(Ao.$$.fragment,o),X(No.$$.fragment,o),X(Ne.$$.fragment,o),X(Ie.$$.fragment,o),X(De.$$.fragment,o),X(Io.$$.fragment,o),X(Do.$$.fragment,o),X(Bo.$$.fragment,o),X(Be.$$.fragment,o),X(Qe.$$.fragment,o),X(He.$$.fragment,o),X(Ue.$$.fragment,o),X(Ve.$$.fragment,o),X(Qo.$$.fragment,o),X(Ho.$$.fragment,o),X(Vo.$$.fragment,o),X(Je.$$.fragment,o),X(Ke.$$.fragment,o),X(Go.$$.fragment,o),X(Jo.$$.fragment,o),X(Yo.$$.fragment,o),X(Ze.$$.fragment,o),X(eo.$$.fragment,o),X(oo.$$.fragment,o),X(Zo.$$.fragment,o),X(et.$$.fragment,o),X(tt.$$.fragment,o),X(no.$$.fragment,o),X(so.$$.fragment,o),X(ao.$$.fragment,o),vs=!1},d(o){t(s),o&&t(f),o&&t(c),$(n),o&&t(Yn),o&&t(re),$(Lo),o&&t(Zn),o&&t(Fe),o&&t(es),o&&t(dt),o&&t(os),o&&t(ct),o&&t(ts),o&&t(pt),o&&t(ns),o&&t(ht),o&&t(ss),o&&t(Q),o&&t(as),o&&t(ie),$($o),o&&t(rs),o&&t(S),$(To),$(ze),o&&t(is),o&&t(de),$(xo),o&&t(ls),o&&t(N),$(Ro),$(zo),$(Ee),$(je),o&&t(ds),o&&t(he),$(qo),o&&t(cs),o&&t(J),$(Eo),$(Po),$(Oe),$(Ae),o&&t(ps),o&&t(ue),$(Oo),o&&t(hs),o&&t(Y),$(Ao),$(No),$(Ne),$(Ie),$(De),o&&t(ms),o&&t(ge),$(Io),o&&t(us),o&&t(I),$(Do),$(Bo),$(Be),$(Qe),$(He),$(Ue),$(Ve),o&&t(fs),o&&t(Le),$(Qo),o&&t(gs),o&&t(D),$(Ho),$(Vo),$(Je),$(Ke),o&&t(_s),o&&t(Me),$(Go),o&&t(bs),o&&t(W),$(Jo),$(Yo),$(Ze),$(eo),$(oo),o&&t(Ls),o&&t($e),$(Zo),o&&t(ks),o&&t(B),$(et),$(tt),$(no),$(so),$(ao)}}}const tc={local:"xlmrobertaxl",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaXLConfig",title:"XLMRobertaXLConfig"},{local:"transformers.XLMRobertaXLModel",title:"XLMRobertaXLModel"},{local:"transformers.XLMRobertaXLForCausalLM",title:"XLMRobertaXLForCausalLM"},{local:"transformers.XLMRobertaXLForMaskedLM",title:"XLMRobertaXLForMaskedLM"},{local:"transformers.XLMRobertaXLForSequenceClassification",title:"XLMRobertaXLForSequenceClassification"},{local:"transformers.XLMRobertaXLForMultipleChoice",title:"XLMRobertaXLForMultipleChoice"},{local:"transformers.XLMRobertaXLForTokenClassification",title:"XLMRobertaXLForTokenClassification"},{local:"transformers.XLMRobertaXLForQuestionAnswering",title:"XLMRobertaXLForQuestionAnswering"}],title:"XLM-RoBERTa-XL"};function nc(T){return qd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cc extends Rd{constructor(s){super();Fd(this,s,nc,oc,Cd,{})}}export{cc as default,tc as metadata};
