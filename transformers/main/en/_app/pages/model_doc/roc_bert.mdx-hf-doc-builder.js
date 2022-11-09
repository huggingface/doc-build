import{S as zc,i as Bc,s as Rc,e as r,k as m,w as T,t as d,M as qc,c as a,d as t,m as u,a as i,x as w,h as c,b as f,G as e,g as k,y as v,q as C,o as $,B as y,v as Mc,L as x}from"../../chunks/vendor-hf-doc-builder.js";import{T as Bo}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as P}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as J}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as F}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fc(z){let s,g;return s=new P({props:{code:`from transformers import RoCBertModel, RoCBertConfig

# Initializing a RoCBert weiweishi/roc-bert-base-zh style configuration
configuration = RoCBertConfig()

# Initializing a model from the weiweishi/roc-bert-base-zh style configuration
model = RoCBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertModel, RoCBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoCBert weiweishi/roc-bert-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RoCBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the weiweishi/roc-bert-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){T(s.$$.fragment)},l(l){w(s.$$.fragment,l)},m(l,p){v(s,l,p),g=!0},p:x,i(l){g||(C(s.$$.fragment,l),g=!0)},o(l){$(s.$$.fragment,l),g=!1},d(l){y(s,l)}}}function xc(z){let s,g,l,p,b;return p=new P({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){s=r("p"),g=d("pair mask has the following format:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"pair mask has the following format:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Pc(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function jc(z){let s,g,l,p,b;return p=new P({props:{code:`from transformers import RoCBertTokenizer, RoCBertModel
import torch

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertModel.from_pretrained("weiweishi/roc-bert-base-zh")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertModel.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=r("p"),g=d("Example:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Ec(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function Oc(z){let s,g,l,p,b;return p=new P({props:{code:`from transformers import RoCBertTokenizer, RoCBertForPreTraining
import torch

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertForPreTraining.from_pretrained("weiweishi/roc-bert-base-zh")

inputs = tokenizer("\u4F60\u597D\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60", return_tensors="pt")
attack_inputs = tokenizer("\u4F60\u53F7\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60", return_tensors="pt")
attack_keys = list(attack_inputs.keys())
for key in attack_keys:
    attack_inputs[f"attack_{key}"] = attack_inputs.pop(key)
label_inputs = tokenizer("\u4F60\u597D\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60", return_tensors="pt")
label_keys = list(attack_inputs.keys())
for key in label_keys:
    label_inputs[f"labels_{key}"] = label_inputs.pop(key)

inputs.update(label_inputs)
inputs.update(attack_inputs)
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;\u4F60\u597D\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>attack_inputs = tokenizer(<span class="hljs-string">&quot;\u4F60\u53F7\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>attack_keys = <span class="hljs-built_in">list</span>(attack_inputs.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> attack_keys:
<span class="hljs-meta">... </span>    attack_inputs[<span class="hljs-string">f&quot;attack_<span class="hljs-subst">{key}</span>&quot;</span>] = attack_inputs.pop(key)
<span class="hljs-meta">&gt;&gt;&gt; </span>label_inputs = tokenizer(<span class="hljs-string">&quot;\u4F60\u597D\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>label_keys = <span class="hljs-built_in">list</span>(attack_inputs.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> label_keys:
<span class="hljs-meta">... </span>    label_inputs[<span class="hljs-string">f&quot;labels_<span class="hljs-subst">{key}</span>&quot;</span>] = label_inputs.pop(key)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.update(label_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.update(attack_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=r("p"),g=d("Example:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Lc(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function Ic(z){let s,g,l,p,b;return p=new P({props:{code:`from transformers import RoCBertTokenizer, RoCBertForCausalLM, RoCBertConfig
import torch

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
config = RoCBertConfig.from_pretrained("weiweishi/roc-bert-base-zh")
config.is_decoder = True
model = RoCBertForCausalLM.from_pretrained("weiweishi/roc-bert-base-zh", config=config)

inputs = tokenizer("\u4F60\u597D\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForCausalLM, RoCBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RoCBertConfig.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;\u4F60\u597D\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){s=r("p"),g=d("Example:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Sc(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function Ac(z){let s,g,l,p,b;return p=new P({props:{code:`from transformers import RoCBertTokenizer, RoCBertForMaskedLM
import torch

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertForMaskedLM.from_pretrained("weiweishi/roc-bert-base-zh")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=r("p"),g=d("Example:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Nc(z){let s,g;return s=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(s.$$.fragment)},l(l){w(s.$$.fragment,l)},m(l,p){v(s,l,p),g=!0},p:x,i(l){g||(C(s.$$.fragment,l),g=!0)},o(l){$(s.$$.fragment,l),g=!1},d(l){y(s,l)}}}function Dc(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function Wc(z){let s,g,l,p,b;return p=new P({props:{code:`import torch
from transformers import RoCBertTokenizer, RoCBertForSequenceClassification

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertForSequenceClassification.from_pretrained("weiweishi/roc-bert-base-zh")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),g=d("Example of single-label classification:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example of single-label classification:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Qc(z){let s,g;return s=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoCBertForSequenceClassification.from_pretrained("weiweishi/roc-bert-base-zh", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(s.$$.fragment)},l(l){w(s.$$.fragment,l)},m(l,p){v(s,l,p),g=!0},p:x,i(l){g||(C(s.$$.fragment,l),g=!0)},o(l){$(s.$$.fragment,l),g=!1},d(l){y(s,l)}}}function Hc(z){let s,g,l,p,b;return p=new P({props:{code:`import torch
from transformers import RoCBertTokenizer, RoCBertForSequenceClassification

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertForSequenceClassification.from_pretrained("weiweishi/roc-bert-base-zh", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),g=d("Example of multi-label classification:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example of multi-label classification:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Uc(z){let s,g;return s=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoCBertForSequenceClassification.from_pretrained(
    "weiweishi/roc-bert-base-zh", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(s.$$.fragment)},l(l){w(s.$$.fragment,l)},m(l,p){v(s,l,p),g=!0},p:x,i(l){g||(C(s.$$.fragment,l),g=!0)},o(l){$(s.$$.fragment,l),g=!1},d(l){y(s,l)}}}function Vc(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function Jc(z){let s,g,l,p,b;return p=new P({props:{code:`from transformers import RoCBertTokenizer, RoCBertForMultipleChoice
import torch

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertForMultipleChoice.from_pretrained("weiweishi/roc-bert-base-zh")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=r("p"),g=d("Example:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Kc(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function Gc(z){let s,g,l,p,b;return p=new P({props:{code:`from transformers import RoCBertTokenizer, RoCBertForTokenClassification
import torch

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertForTokenClassification.from_pretrained("weiweishi/roc-bert-base-zh")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

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
`}}),{c(){s=r("p"),g=d("Example:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function Xc(z){let s,g;return s=new P({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(s.$$.fragment)},l(l){w(s.$$.fragment,l)},m(l,p){v(s,l,p),g=!0},p:x,i(l){g||(C(s.$$.fragment,l),g=!0)},o(l){$(s.$$.fragment,l),g=!1},d(l){y(s,l)}}}function Zc(z){let s,g,l,p,b;return{c(){s=r("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r("code"),p=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a(h,"CODE",{});var B=i(l);p=c(B,"Module"),B.forEach(t),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){k(n,s,h),e(s,g),e(s,l),e(l,p),e(s,b)},d(n){n&&t(s)}}}function Yc(z){let s,g,l,p,b;return p=new P({props:{code:`from transformers import RoCBertTokenizer, RoCBertForQuestionAnswering
import torch

tokenizer = RoCBertTokenizer.from_pretrained("weiweishi/roc-bert-base-zh")
model = RoCBertForQuestionAnswering.from_pretrained("weiweishi/roc-bert-base-zh")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertTokenizer, RoCBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoCBertTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
`}}),{c(){s=r("p"),g=d("Example:"),l=m(),T(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=c(h,"Example:"),h.forEach(t),l=u(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,l,h),v(p,n,h),b=!0},p:x,i(n){b||(C(p.$$.fragment,n),b=!0)},o(n){$(p.$$.fragment,n),b=!1},d(n){n&&t(s),n&&t(l),y(p,n)}}}function ep(z){let s,g;return s=new P({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(s.$$.fragment)},l(l){w(s.$$.fragment,l)},m(l,p){v(s,l,p),g=!0},p:x,i(l){g||(C(s.$$.fragment,l),g=!0)},o(l){$(s.$$.fragment,l),g=!1},d(l){y(s,l)}}}function op(z){let s,g,l,p,b,n,h,B,ur,$s,de,Ee,mn,Ro,fr,un,gr,ys,Oe,_r,qo,br,kr,zs,xt,Tr,Bs,Pt,fn,wr,Rs,Le,vr,Mo,Cr,$r,qs,ce,Ie,gn,Fo,yr,_n,zr,Ms,N,xo,Br,pe,Rr,jt,qr,Mr,Po,Fr,xr,Pr,he,jr,Et,Er,Or,Ot,Lr,Ir,Sr,Se,Fs,me,Ae,bn,jo,Ar,kn,Nr,xs,j,Eo,Dr,ne,Oo,Wr,Tn,Qr,Hr,Lo,Lt,Ur,wn,Vr,Jr,It,Kr,vn,Gr,Xr,Ne,Io,Zr,So,Yr,Cn,ea,oa,ta,W,Ao,na,$n,sa,ra,De,aa,ue,ia,yn,la,da,zn,ca,pa,ha,St,No,Ps,fe,We,Bn,Do,ma,Rn,ua,js,E,Wo,fa,Qo,ga,Ho,_a,ba,ka,Uo,Ta,Vo,wa,va,Ca,M,$a,qn,ya,za,Mn,Ba,Ra,Fn,qa,Ma,xn,Fa,xa,Pn,Pa,ja,jn,Ea,Oa,La,Q,Jo,Ia,ge,Sa,At,Aa,Na,En,Da,Wa,Qa,Qe,Ha,He,Es,_e,Ue,On,Ko,Ua,Ln,Va,Os,D,Go,Ja,In,Ka,Ga,Xo,Xa,Zo,Za,Ya,ei,H,Yo,oi,be,ti,Nt,ni,si,Sn,ri,ai,ii,Ve,li,Je,Ls,ke,Ke,An,et,di,Nn,ci,Is,K,ot,pi,Te,hi,Dn,mi,ui,tt,fi,gi,_i,U,nt,bi,we,ki,Dt,Ti,wi,Wn,vi,Ci,$i,Ge,yi,Xe,Ss,ve,Ze,Qn,st,zi,Hn,Bi,As,G,rt,Ri,Ce,qi,Un,Mi,Fi,at,xi,Pi,ji,O,it,Ei,$e,Oi,Wt,Li,Ii,Vn,Si,Ai,Ni,Ye,Di,eo,Wi,oo,Ns,ye,to,Jn,lt,Qi,Kn,Hi,Ds,X,dt,Ui,ct,Vi,pt,Ji,Ki,Gi,q,ht,Xi,ze,Zi,Qt,Yi,el,Gn,ol,tl,nl,no,sl,so,rl,ro,al,ao,il,io,Ws,Be,lo,Xn,mt,ll,Zn,dl,Qs,Z,ut,cl,ft,pl,gt,hl,ml,ul,V,_t,fl,Re,gl,Ht,_l,bl,Yn,kl,Tl,wl,co,vl,po,Hs,qe,ho,es,bt,Cl,os,$l,Us,Y,kt,yl,Tt,zl,wt,Bl,Rl,ql,L,vt,Ml,Me,Fl,Ut,xl,Pl,ts,jl,El,Ol,mo,Ll,uo,Il,fo,Vs,Fe,go,ns,Ct,Sl,ss,Al,Js,ee,$t,Nl,oe,Dl,rs,Wl,Ql,as,Hl,Ul,yt,Vl,Jl,Kl,I,zt,Gl,xe,Xl,Vt,Zl,Yl,is,ed,od,td,_o,nd,bo,sd,ko,Ks;return n=new J({}),Ro=new J({}),Fo=new J({}),xo=new R({props:{name:"class transformers.RoCBertConfig",anchor:"transformers.RoCBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"classifier_dropout",val:" = None"},{name:"enable_cls",val:" = True"},{name:"enable_pronunciation",val:" = True"},{name:"enable_shape",val:" = True"},{name:"pronunciation_embed_dim",val:" = 768"},{name:"pronunciation_vocab_size",val:" = 910"},{name:"shape_embed_dim",val:" = 512"},{name:"shape_vocab_size",val:" = 24858"},{name:"concat_input",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoCBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RoCBert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoCBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RoCBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RoCBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RoCBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RoCBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RoCBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RoCBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RoCBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RoCBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoCBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoCBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoCBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoCBertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.RoCBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.RoCBertConfig.enable_cls",description:`<strong>enable_cls</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model use cls loss when pretrained.`,name:"enable_cls"},{anchor:"transformers.RoCBertConfig.enable_pronunciation",description:`<strong>enable_pronunciation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model use pronunciation embed when training.`,name:"enable_pronunciation"},{anchor:"transformers.RoCBertConfig.enable_shape",description:`<strong>enable_shape</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model use shape embed when training.`,name:"enable_shape"},{anchor:"transformers.RoCBertConfig.pronunciation_embed_dim",description:`<strong>pronunciation_embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the pronunciation_embed.`,name:"pronunciation_embed_dim"},{anchor:"transformers.RoCBertConfig.pronunciation_vocab_size",description:`<strong>pronunciation_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 910) &#x2014;
Pronunciation Vocabulary size of the RoCBert model. Defines the number of different tokens that can be
represented by the <code>input_pronunciation_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"pronunciation_vocab_size"},{anchor:"transformers.RoCBertConfig.shape_embed_dim",description:`<strong>shape_embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimension of the shape_embed.`,name:"shape_embed_dim"},{anchor:"transformers.RoCBertConfig.shape_vocab_size",description:`<strong>shape_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 24858) &#x2014;
Shape Vocabulary size of the RoCBert model. Defines the number of different tokens that can be represented
by the <code>input_shape_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"shape_vocab_size"},{anchor:"transformers.RoCBertConfig.concat_input",description:`<strong>concat_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Defines the way of merging the shape_embed, pronunciation_embed and word_embed, if the value is true,
output_embed = torch.cat((word_embed, shape_embed, pronunciation_embed), -1), else output_embed =
(word_embed + shape_embed + pronunciation_embed) / 3
Example &#x2014;`,name:"concat_input"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/configuration_roc_bert.py#L28"}}),Se=new F({props:{anchor:"transformers.RoCBertConfig.example",$$slots:{default:[Fc]},$$scope:{ctx:z}}}),jo=new J({}),Eo=new R({props:{name:"class transformers.RoCBertTokenizer",anchor:"transformers.RoCBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"word_shape_file",val:""},{name:"word_pronunciation_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.Construct",description:'<strong>Construct</strong> a RoCBert tokenizer. Based on WordPiece. This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which &#x2014;',name:"Construct"},{anchor:"transformers.RoCBertTokenizer.contains",description:`<strong>contains</strong> most of the main methods. Users should refer to this superclass for more information regarding those &#x2014;
methods. &#x2014;
vocab_file (<code>str</code>):
File containing the vocabulary.
word_shape_file (<code>str</code>):
File containing the word =&gt; shape info.
word_pronunciation_file (<code>str</code>):
File containing the word =&gt; pronunciation info.
do_lower_case (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not to lowercase the input when tokenizing.
do_basic_tokenize (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not to do basic tokenization before WordPiece.
never_split (<code>Iterable</code>, <em>optional</em>):
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>
unk_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>):
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.
sep_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>):
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.
pad_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>):
The token used for padding, for example when batching sequences of different lengths.
cls_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>):
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.
mask_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>):
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.
tokenize_chinese_chars (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"contains"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L95"}}),Oo=new R({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoCBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"cls_token_id",val:": int = None"},{name:"sep_token_id",val:": int = None"}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoCBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L783",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Io=new R({props:{name:"get_special_tokens_mask",anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L813",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new R({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L842",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),De=new F({props:{anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[xc]},$$scope:{ctx:z}}}),No=new R({props:{name:"save_vocabulary",anchor:"transformers.RoCBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L871"}}),Do=new J({}),Wo=new R({props:{name:"class transformers.RoCBertModel",anchor:"transformers.RoCBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RoCBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L852"}}),Jo=new R({props:{name:"forward",anchor:"transformers.RoCBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoCBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertModel.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertModel.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoCBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoCBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoCBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L907",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),Qe=new Bo({props:{$$slots:{default:[Pc]},$$scope:{ctx:z}}}),He=new F({props:{anchor:"transformers.RoCBertModel.forward.example",$$slots:{default:[jc]},$$scope:{ctx:z}}}),Ko=new J({}),Go=new R({props:{name:"class transformers.RoCBertForPreTraining",anchor:"transformers.RoCBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1053"}}),Yo=new R({props:{name:"forward",anchor:"transformers.RoCBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attack_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attack_input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attack_input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attack_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"attack_token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"labels_input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"labels_input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"labels_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels_token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>attack_input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
attack sample ids for computing the contrastive loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
attack_input_shape_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
attack sample shape ids for computing the contrastive loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
attack_input_pronunciation_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
attack sample pronunciation ids for computing the contrastive loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
labels_input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
target ids for computing the contrastive loss and masked_lm_loss . Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
labels_input_shape_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
target shape ids for computing the contrastive loss and masked_lm_loss . Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
labels_input_pronunciation_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
target pronunciation ids for computing the contrastive loss and masked_lm_loss . Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code></p>
<p>kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),Ve=new Bo({props:{$$slots:{default:[Ec]},$$scope:{ctx:z}}}),Je=new F({props:{anchor:"transformers.RoCBertForPreTraining.forward.example",$$slots:{default:[Oc]},$$scope:{ctx:z}}}),et=new J({}),ot=new R({props:{name:"class transformers.RoCBertForCausalLM",anchor:"transformers.RoCBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1364"}}),nt=new R({props:{name:"forward",anchor:"transformers.RoCBertForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoCBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoCBertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoCBertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional tensors are
only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoCBertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RoCBertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1389",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),Ge=new Bo({props:{$$slots:{default:[Lc]},$$scope:{ctx:z}}}),Xe=new F({props:{anchor:"transformers.RoCBertForCausalLM.forward.example",$$slots:{default:[Ic]},$$scope:{ctx:z}}}),st=new J({}),rt=new R({props:{name:"class transformers.RoCBertForMaskedLM",anchor:"transformers.RoCBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1238"}}),it=new R({props:{name:"forward",anchor:"transformers.RoCBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoCBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1266",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),Ye=new Bo({props:{$$slots:{default:[Sc]},$$scope:{ctx:z}}}),eo=new F({props:{anchor:"transformers.RoCBertForMaskedLM.forward.example",$$slots:{default:[Ac]},$$scope:{ctx:z}}}),oo=new F({props:{anchor:"transformers.RoCBertForMaskedLM.forward.example-2",$$slots:{default:[Nc]},$$scope:{ctx:z}}}),lt=new J({}),dt=new R({props:{name:"class transformers.RoCBertForSequenceClassification",anchor:"transformers.RoCBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1546"}}),ht=new R({props:{name:"forward",anchor:"transformers.RoCBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoCBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1563",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),no=new Bo({props:{$$slots:{default:[Dc]},$$scope:{ctx:z}}}),so=new F({props:{anchor:"transformers.RoCBertForSequenceClassification.forward.example",$$slots:{default:[Wc]},$$scope:{ctx:z}}}),ro=new F({props:{anchor:"transformers.RoCBertForSequenceClassification.forward.example-2",$$slots:{default:[Qc]},$$scope:{ctx:z}}}),ao=new F({props:{anchor:"transformers.RoCBertForSequenceClassification.forward.example-3",$$slots:{default:[Hc]},$$scope:{ctx:z}}}),io=new F({props:{anchor:"transformers.RoCBertForSequenceClassification.forward.example-4",$$slots:{default:[Uc]},$$scope:{ctx:z}}}),mt=new J({}),ut=new R({props:{name:"class transformers.RoCBertForMultipleChoice",anchor:"transformers.RoCBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1651"}}),_t=new R({props:{name:"forward",anchor:"transformers.RoCBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoCBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1666",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),co=new Bo({props:{$$slots:{default:[Vc]},$$scope:{ctx:z}}}),po=new F({props:{anchor:"transformers.RoCBertForMultipleChoice.forward.example",$$slots:{default:[Jc]},$$scope:{ctx:z}}}),bt=new J({}),kt=new R({props:{name:"class transformers.RoCBertForTokenClassification",anchor:"transformers.RoCBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1757"}}),vt=new R({props:{name:"forward",anchor:"transformers.RoCBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoCBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1775",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),mo=new Bo({props:{$$slots:{default:[Kc]},$$scope:{ctx:z}}}),uo=new F({props:{anchor:"transformers.RoCBertForTokenClassification.forward.example",$$slots:{default:[Gc]},$$scope:{ctx:z}}}),fo=new F({props:{anchor:"transformers.RoCBertForTokenClassification.forward.example-2",$$slots:{default:[Xc]},$$scope:{ctx:z}}}),Ct=new J({}),$t=new R({props:{name:"class transformers.RoCBertForQuestionAnswering",anchor:"transformers.RoCBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1844"}}),zt=new R({props:{name:"forward",anchor:"transformers.RoCBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_shape_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_pronunciation_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoCBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertTokenizer">RoCBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1858",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),_o=new Bo({props:{$$slots:{default:[Zc]},$$scope:{ctx:z}}}),bo=new F({props:{anchor:"transformers.RoCBertForQuestionAnswering.forward.example",$$slots:{default:[Yc]},$$scope:{ctx:z}}}),ko=new F({props:{anchor:"transformers.RoCBertForQuestionAnswering.forward.example-2",$$slots:{default:[ep]},$$scope:{ctx:z}}}),{c(){s=r("meta"),g=m(),l=r("h1"),p=r("a"),b=r("span"),T(n.$$.fragment),h=m(),B=r("span"),ur=d("RoCBert"),$s=m(),de=r("h2"),Ee=r("a"),mn=r("span"),T(Ro.$$.fragment),fr=m(),un=r("span"),gr=d("Overview"),ys=m(),Oe=r("p"),_r=d("The RoCBert model was proposed in "),qo=r("a"),br=d("RoCBert: Robust Chinese Bert with Multimodal Contrastive Pretraining"),kr=d(`  by HuiSu, WeiweiShi, XiaoyuShen, XiaoZhou, TuoJi, JiaruiFang, JieZhou.
It\u2019s a pretrained Chinese language model that is robust under various forms of adversarial attacks.`),zs=m(),xt=r("p"),Tr=d("The abstract from the paper is the following:"),Bs=m(),Pt=r("p"),fn=r("em"),wr=d(`Large-scale pretrained language models have achieved SOTA results on NLP tasks. However, they have been shown
vulnerable to adversarial attacks especially for logographic languages like Chinese. In this work, we propose
ROCBERT: a pretrained Chinese Bert that is robust to various forms of adversarial attacks like word perturbation,
synonyms, typos, etc. It is pretrained with the contrastive learning objective which maximizes the label consistency
under different synthesized adversarial examples. The model takes as input multimodal information including the
semantic, phonetic and visual features. We show all these features are important to the model robustness since the
attack can be performed in all the three forms. Across 5 Chinese NLU tasks, ROCBERT outperforms strong baselines under
three blackbox adversarial algorithms without sacrificing the performance on clean testset. It also performs the best
in the toxic content detection task under human-made attacks.`),Rs=m(),Le=r("p"),vr=d("This model was contributed by "),Mo=r("a"),Cr=d("weiweishi"),$r=d("."),qs=m(),ce=r("h2"),Ie=r("a"),gn=r("span"),T(Fo.$$.fragment),yr=m(),_n=r("span"),zr=d("RoCBertConfig"),Ms=m(),N=r("div"),T(xo.$$.fragment),Br=m(),pe=r("p"),Rr=d("This is the configuration class to store the configuration of a "),jt=r("a"),qr=d("RoCBertModel"),Mr=d(`. It is used to instantiate a
RoCBert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoCBert
`),Po=r("a"),Fr=d("weiweishi/roc-bert-base-zh"),xr=d(" architecture."),Pr=m(),he=r("p"),jr=d("Configuration objects inherit from "),Et=r("a"),Er=d("PretrainedConfig"),Or=d(` and can be used to control the model outputs. Read the
documentation from `),Ot=r("a"),Lr=d("PretrainedConfig"),Ir=d(" for more information."),Sr=m(),T(Se.$$.fragment),Fs=m(),me=r("h2"),Ae=r("a"),bn=r("span"),T(jo.$$.fragment),Ar=m(),kn=r("span"),Nr=d("RoCBertTokenizer"),xs=m(),j=r("div"),T(Eo.$$.fragment),Dr=m(),ne=r("div"),T(Oo.$$.fragment),Wr=m(),Tn=r("p"),Qr=d(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Hr=m(),Lo=r("ul"),Lt=r("li"),Ur=d("single sequence: "),wn=r("code"),Vr=d("[CLS] X [SEP]"),Jr=m(),It=r("li"),Kr=d("pair of sequences: "),vn=r("code"),Gr=d("[CLS] A [SEP] B [SEP]"),Xr=m(),Ne=r("div"),T(Io.$$.fragment),Zr=m(),So=r("p"),Yr=d(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Cn=r("code"),ea=d("prepare_for_model"),oa=d(" method."),ta=m(),W=r("div"),T(Ao.$$.fragment),na=m(),$n=r("p"),sa=d("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ra=m(),T(De.$$.fragment),aa=m(),ue=r("p"),ia=d("If "),yn=r("code"),la=d("token_ids_1"),da=d(" is "),zn=r("code"),ca=d("None"),pa=d(", this method only returns the first portion of the mask (0s)."),ha=m(),St=r("div"),T(No.$$.fragment),Ps=m(),fe=r("h2"),We=r("a"),Bn=r("span"),T(Do.$$.fragment),ma=m(),Rn=r("span"),ua=d("RoCBertModel"),js=m(),E=r("div"),T(Wo.$$.fragment),fa=m(),Qo=r("p"),ga=d(`The bare RoCBert Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ho=r("a"),_a=d("torch.nn.Module"),ba=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ka=m(),Uo=r("p"),Ta=d(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Vo=r("a"),wa=d(`Attention is
all you need`),va=d(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ca=m(),M=r("p"),$a=d("To behave as an decoder the model needs to be initialized with the "),qn=r("code"),ya=d("is_decoder"),za=d(` argument of the configuration set
to `),Mn=r("code"),Ba=d("True"),Ra=d(". To be used in a Seq2Seq model, the model needs to be initialized with both "),Fn=r("code"),qa=d("is_decoder"),Ma=d(` argument and
`),xn=r("code"),Fa=d("add_cross_attention"),xa=d(" set to "),Pn=r("code"),Pa=d("True"),ja=d("; an "),jn=r("code"),Ea=d("encoder_hidden_states"),Oa=d(" is then expected as an input to the forward pass."),La=m(),Q=r("div"),T(Jo.$$.fragment),Ia=m(),ge=r("p"),Sa=d("The "),At=r("a"),Aa=d("RoCBertModel"),Na=d(" forward method, overrides the "),En=r("code"),Da=d("__call__"),Wa=d(" special method."),Qa=m(),T(Qe.$$.fragment),Ha=m(),T(He.$$.fragment),Es=m(),_e=r("h2"),Ue=r("a"),On=r("span"),T(Ko.$$.fragment),Ua=m(),Ln=r("span"),Va=d("RoCBertForPreTraining"),Os=m(),D=r("div"),T(Go.$$.fragment),Ja=m(),In=r("p"),Ka=d("RoCBert Model with contrastive loss and masked_lm_loss during the pretraining."),Ga=m(),Xo=r("p"),Xa=d("This model is a PyTorch "),Zo=r("a"),Za=d("torch.nn.Module"),Ya=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ei=m(),H=r("div"),T(Yo.$$.fragment),oi=m(),be=r("p"),ti=d("The "),Nt=r("a"),ni=d("RoCBertForPreTraining"),si=d(" forward method, overrides the "),Sn=r("code"),ri=d("__call__"),ai=d(" special method."),ii=m(),T(Ve.$$.fragment),li=m(),T(Je.$$.fragment),Ls=m(),ke=r("h2"),Ke=r("a"),An=r("span"),T(et.$$.fragment),di=m(),Nn=r("span"),ci=d("RoCBertForCausalLM"),Is=m(),K=r("div"),T(ot.$$.fragment),pi=m(),Te=r("p"),hi=d("RoCBert Model with a "),Dn=r("code"),mi=d("language modeling"),ui=d(` head on top for CLM fine-tuning.
This model is a PyTorch `),tt=r("a"),fi=d("torch.nn.Module"),gi=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_i=m(),U=r("div"),T(nt.$$.fragment),bi=m(),we=r("p"),ki=d("The "),Dt=r("a"),Ti=d("RoCBertForCausalLM"),wi=d(" forward method, overrides the "),Wn=r("code"),vi=d("__call__"),Ci=d(" special method."),$i=m(),T(Ge.$$.fragment),yi=m(),T(Xe.$$.fragment),Ss=m(),ve=r("h2"),Ze=r("a"),Qn=r("span"),T(st.$$.fragment),zi=m(),Hn=r("span"),Bi=d("RoCBertForMaskedLM"),As=m(),G=r("div"),T(rt.$$.fragment),Ri=m(),Ce=r("p"),qi=d("RoCBert Model with a "),Un=r("code"),Mi=d("language modeling"),Fi=d(` head on top.
This model is a PyTorch `),at=r("a"),xi=d("torch.nn.Module"),Pi=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ji=m(),O=r("div"),T(it.$$.fragment),Ei=m(),$e=r("p"),Oi=d("The "),Wt=r("a"),Li=d("RoCBertForMaskedLM"),Ii=d(" forward method, overrides the "),Vn=r("code"),Si=d("__call__"),Ai=d(" special method."),Ni=m(),T(Ye.$$.fragment),Di=m(),T(eo.$$.fragment),Wi=m(),T(oo.$$.fragment),Ns=m(),ye=r("h2"),to=r("a"),Jn=r("span"),T(lt.$$.fragment),Qi=m(),Kn=r("span"),Hi=d("RoCBertForSequenceClassification"),Ds=m(),X=r("div"),T(dt.$$.fragment),Ui=m(),ct=r("p"),Vi=d(`RoCBert Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.
This model is a PyTorch `),pt=r("a"),Ji=d("torch.nn.Module"),Ki=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi=m(),q=r("div"),T(ht.$$.fragment),Xi=m(),ze=r("p"),Zi=d("The "),Qt=r("a"),Yi=d("RoCBertForSequenceClassification"),el=d(" forward method, overrides the "),Gn=r("code"),ol=d("__call__"),tl=d(" special method."),nl=m(),T(no.$$.fragment),sl=m(),T(so.$$.fragment),rl=m(),T(ro.$$.fragment),al=m(),T(ao.$$.fragment),il=m(),T(io.$$.fragment),Ws=m(),Be=r("h2"),lo=r("a"),Xn=r("span"),T(mt.$$.fragment),ll=m(),Zn=r("span"),dl=d("RoCBertForMultipleChoice"),Qs=m(),Z=r("div"),T(ut.$$.fragment),cl=m(),ft=r("p"),pl=d(`RoCBert Model with a multiple choice classification head on top (a linear layer on top of
the pooled output and a softmax) e.g. for RocStories/SWAG tasks.
This model is a PyTorch `),gt=r("a"),hl=d("torch.nn.Module"),ml=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul=m(),V=r("div"),T(_t.$$.fragment),fl=m(),Re=r("p"),gl=d("The "),Ht=r("a"),_l=d("RoCBertForMultipleChoice"),bl=d(" forward method, overrides the "),Yn=r("code"),kl=d("__call__"),Tl=d(" special method."),wl=m(),T(co.$$.fragment),vl=m(),T(po.$$.fragment),Hs=m(),qe=r("h2"),ho=r("a"),es=r("span"),T(bt.$$.fragment),Cl=m(),os=r("span"),$l=d("RoCBertForTokenClassification"),Us=m(),Y=r("div"),T(kt.$$.fragment),yl=m(),Tt=r("p"),zl=d(`RoCBert Model with a token classification head on top (a linear layer on top of
the hidden-states output) e.g. for Named-Entity-Recognition (NER) tasks.
This model is a PyTorch `),wt=r("a"),Bl=d("torch.nn.Module"),Rl=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ql=m(),L=r("div"),T(vt.$$.fragment),Ml=m(),Me=r("p"),Fl=d("The "),Ut=r("a"),xl=d("RoCBertForTokenClassification"),Pl=d(" forward method, overrides the "),ts=r("code"),jl=d("__call__"),El=d(" special method."),Ol=m(),T(mo.$$.fragment),Ll=m(),T(uo.$$.fragment),Il=m(),T(fo.$$.fragment),Vs=m(),Fe=r("h2"),go=r("a"),ns=r("span"),T(Ct.$$.fragment),Sl=m(),ss=r("span"),Al=d("RoCBertForQuestionAnswering"),Js=m(),ee=r("div"),T($t.$$.fragment),Nl=m(),oe=r("p"),Dl=d(`RoCBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rs=r("code"),Wl=d("span start logits"),Ql=d(" and "),as=r("code"),Hl=d("span end logits"),Ul=d(`).
This model is a PyTorch `),yt=r("a"),Vl=d("torch.nn.Module"),Jl=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kl=m(),I=r("div"),T(zt.$$.fragment),Gl=m(),xe=r("p"),Xl=d("The "),Vt=r("a"),Zl=d("RoCBertForQuestionAnswering"),Yl=d(" forward method, overrides the "),is=r("code"),ed=d("__call__"),od=d(" special method."),td=m(),T(_o.$$.fragment),nd=m(),T(bo.$$.fragment),sd=m(),T(ko.$$.fragment),this.h()},l(o){const _=qc('[data-svelte="svelte-1phssyn"]',document.head);s=a(_,"META",{name:!0,content:!0}),_.forEach(t),g=u(o),l=a(o,"H1",{class:!0});var Bt=i(l);p=a(Bt,"A",{id:!0,class:!0,href:!0});var ls=i(p);b=a(ls,"SPAN",{});var ds=i(b);w(n.$$.fragment,ds),ds.forEach(t),ls.forEach(t),h=u(Bt),B=a(Bt,"SPAN",{});var cs=i(B);ur=c(cs,"RoCBert"),cs.forEach(t),Bt.forEach(t),$s=u(o),de=a(o,"H2",{class:!0});var Rt=i(de);Ee=a(Rt,"A",{id:!0,class:!0,href:!0});var ps=i(Ee);mn=a(ps,"SPAN",{});var hs=i(mn);w(Ro.$$.fragment,hs),hs.forEach(t),ps.forEach(t),fr=u(Rt),un=a(Rt,"SPAN",{});var ms=i(un);gr=c(ms,"Overview"),ms.forEach(t),Rt.forEach(t),ys=u(o),Oe=a(o,"P",{});var qt=i(Oe);_r=c(qt,"The RoCBert model was proposed in "),qo=a(qt,"A",{href:!0,rel:!0});var us=i(qo);br=c(us,"RoCBert: Robust Chinese Bert with Multimodal Contrastive Pretraining"),us.forEach(t),kr=c(qt,`  by HuiSu, WeiweiShi, XiaoyuShen, XiaoZhou, TuoJi, JiaruiFang, JieZhou.
It\u2019s a pretrained Chinese language model that is robust under various forms of adversarial attacks.`),qt.forEach(t),zs=u(o),xt=a(o,"P",{});var fs=i(xt);Tr=c(fs,"The abstract from the paper is the following:"),fs.forEach(t),Bs=u(o),Pt=a(o,"P",{});var gs=i(Pt);fn=a(gs,"EM",{});var _s=i(fn);wr=c(_s,`Large-scale pretrained language models have achieved SOTA results on NLP tasks. However, they have been shown
vulnerable to adversarial attacks especially for logographic languages like Chinese. In this work, we propose
ROCBERT: a pretrained Chinese Bert that is robust to various forms of adversarial attacks like word perturbation,
synonyms, typos, etc. It is pretrained with the contrastive learning objective which maximizes the label consistency
under different synthesized adversarial examples. The model takes as input multimodal information including the
semantic, phonetic and visual features. We show all these features are important to the model robustness since the
attack can be performed in all the three forms. Across 5 Chinese NLU tasks, ROCBERT outperforms strong baselines under
three blackbox adversarial algorithms without sacrificing the performance on clean testset. It also performs the best
in the toxic content detection task under human-made attacks.`),_s.forEach(t),gs.forEach(t),Rs=u(o),Le=a(o,"P",{});var Mt=i(Le);vr=c(Mt,"This model was contributed by "),Mo=a(Mt,"A",{href:!0,rel:!0});var bs=i(Mo);Cr=c(bs,"weiweishi"),bs.forEach(t),$r=c(Mt,"."),Mt.forEach(t),qs=u(o),ce=a(o,"H2",{class:!0});var Ft=i(ce);Ie=a(Ft,"A",{id:!0,class:!0,href:!0});var ks=i(Ie);gn=a(ks,"SPAN",{});var Ts=i(gn);w(Fo.$$.fragment,Ts),Ts.forEach(t),ks.forEach(t),yr=u(Ft),_n=a(Ft,"SPAN",{});var ws=i(_n);zr=c(ws,"RoCBertConfig"),ws.forEach(t),Ft.forEach(t),Ms=u(o),N=a(o,"DIV",{class:!0});var te=i(N);w(xo.$$.fragment,te),Br=u(te),pe=a(te,"P",{});var Pe=i(pe);Rr=c(Pe,"This is the configuration class to store the configuration of a "),jt=a(Pe,"A",{href:!0});var vs=i(jt);qr=c(vs,"RoCBertModel"),vs.forEach(t),Mr=c(Pe,`. It is used to instantiate a
RoCBert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoCBert
`),Po=a(Pe,"A",{href:!0,rel:!0});var Cs=i(Po);Fr=c(Cs,"weiweishi/roc-bert-base-zh"),Cs.forEach(t),xr=c(Pe," architecture."),Pe.forEach(t),Pr=u(te),he=a(te,"P",{});var je=i(he);jr=c(je,"Configuration objects inherit from "),Et=a(je,"A",{href:!0});var id=i(Et);Er=c(id,"PretrainedConfig"),id.forEach(t),Or=c(je,` and can be used to control the model outputs. Read the
documentation from `),Ot=a(je,"A",{href:!0});var ld=i(Ot);Lr=c(ld,"PretrainedConfig"),ld.forEach(t),Ir=c(je," for more information."),je.forEach(t),Sr=u(te),w(Se.$$.fragment,te),te.forEach(t),Fs=u(o),me=a(o,"H2",{class:!0});var Gs=i(me);Ae=a(Gs,"A",{id:!0,class:!0,href:!0});var dd=i(Ae);bn=a(dd,"SPAN",{});var cd=i(bn);w(jo.$$.fragment,cd),cd.forEach(t),dd.forEach(t),Ar=u(Gs),kn=a(Gs,"SPAN",{});var pd=i(kn);Nr=c(pd,"RoCBertTokenizer"),pd.forEach(t),Gs.forEach(t),xs=u(o),j=a(o,"DIV",{class:!0});var se=i(j);w(Eo.$$.fragment,se),Dr=u(se),ne=a(se,"DIV",{class:!0});var Jt=i(ne);w(Oo.$$.fragment,Jt),Wr=u(Jt),Tn=a(Jt,"P",{});var hd=i(Tn);Qr=c(hd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),hd.forEach(t),Hr=u(Jt),Lo=a(Jt,"UL",{});var Xs=i(Lo);Lt=a(Xs,"LI",{});var rd=i(Lt);Ur=c(rd,"single sequence: "),wn=a(rd,"CODE",{});var md=i(wn);Vr=c(md,"[CLS] X [SEP]"),md.forEach(t),rd.forEach(t),Jr=u(Xs),It=a(Xs,"LI",{});var ad=i(It);Kr=c(ad,"pair of sequences: "),vn=a(ad,"CODE",{});var ud=i(vn);Gr=c(ud,"[CLS] A [SEP] B [SEP]"),ud.forEach(t),ad.forEach(t),Xs.forEach(t),Jt.forEach(t),Xr=u(se),Ne=a(se,"DIV",{class:!0});var Zs=i(Ne);w(Io.$$.fragment,Zs),Zr=u(Zs),So=a(Zs,"P",{});var Ys=i(So);Yr=c(Ys,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Cn=a(Ys,"CODE",{});var fd=i(Cn);ea=c(fd,"prepare_for_model"),fd.forEach(t),oa=c(Ys," method."),Ys.forEach(t),Zs.forEach(t),ta=u(se),W=a(se,"DIV",{class:!0});var To=i(W);w(Ao.$$.fragment,To),na=u(To),$n=a(To,"P",{});var gd=i($n);sa=c(gd,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),gd.forEach(t),ra=u(To),w(De.$$.fragment,To),aa=u(To),ue=a(To,"P",{});var Kt=i(ue);ia=c(Kt,"If "),yn=a(Kt,"CODE",{});var _d=i(yn);la=c(_d,"token_ids_1"),_d.forEach(t),da=c(Kt," is "),zn=a(Kt,"CODE",{});var bd=i(zn);ca=c(bd,"None"),bd.forEach(t),pa=c(Kt,", this method only returns the first portion of the mask (0s)."),Kt.forEach(t),To.forEach(t),ha=u(se),St=a(se,"DIV",{class:!0});var kd=i(St);w(No.$$.fragment,kd),kd.forEach(t),se.forEach(t),Ps=u(o),fe=a(o,"H2",{class:!0});var er=i(fe);We=a(er,"A",{id:!0,class:!0,href:!0});var Td=i(We);Bn=a(Td,"SPAN",{});var wd=i(Bn);w(Do.$$.fragment,wd),wd.forEach(t),Td.forEach(t),ma=u(er),Rn=a(er,"SPAN",{});var vd=i(Rn);ua=c(vd,"RoCBertModel"),vd.forEach(t),er.forEach(t),js=u(o),E=a(o,"DIV",{class:!0});var re=i(E);w(Wo.$$.fragment,re),fa=u(re),Qo=a(re,"P",{});var or=i(Qo);ga=c(or,`The bare RoCBert Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ho=a(or,"A",{href:!0,rel:!0});var Cd=i(Ho);_a=c(Cd,"torch.nn.Module"),Cd.forEach(t),ba=c(or,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),or.forEach(t),ka=u(re),Uo=a(re,"P",{});var tr=i(Uo);Ta=c(tr,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Vo=a(tr,"A",{href:!0,rel:!0});var $d=i(Vo);wa=c($d,`Attention is
all you need`),$d.forEach(t),va=c(tr,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),tr.forEach(t),Ca=u(re),M=a(re,"P",{});var S=i(M);$a=c(S,"To behave as an decoder the model needs to be initialized with the "),qn=a(S,"CODE",{});var yd=i(qn);ya=c(yd,"is_decoder"),yd.forEach(t),za=c(S,` argument of the configuration set
to `),Mn=a(S,"CODE",{});var zd=i(Mn);Ba=c(zd,"True"),zd.forEach(t),Ra=c(S,". To be used in a Seq2Seq model, the model needs to be initialized with both "),Fn=a(S,"CODE",{});var Bd=i(Fn);qa=c(Bd,"is_decoder"),Bd.forEach(t),Ma=c(S,` argument and
`),xn=a(S,"CODE",{});var Rd=i(xn);Fa=c(Rd,"add_cross_attention"),Rd.forEach(t),xa=c(S," set to "),Pn=a(S,"CODE",{});var qd=i(Pn);Pa=c(qd,"True"),qd.forEach(t),ja=c(S,"; an "),jn=a(S,"CODE",{});var Md=i(jn);Ea=c(Md,"encoder_hidden_states"),Md.forEach(t),Oa=c(S," is then expected as an input to the forward pass."),S.forEach(t),La=u(re),Q=a(re,"DIV",{class:!0});var wo=i(Q);w(Jo.$$.fragment,wo),Ia=u(wo),ge=a(wo,"P",{});var Gt=i(ge);Sa=c(Gt,"The "),At=a(Gt,"A",{href:!0});var Fd=i(At);Aa=c(Fd,"RoCBertModel"),Fd.forEach(t),Na=c(Gt," forward method, overrides the "),En=a(Gt,"CODE",{});var xd=i(En);Da=c(xd,"__call__"),xd.forEach(t),Wa=c(Gt," special method."),Gt.forEach(t),Qa=u(wo),w(Qe.$$.fragment,wo),Ha=u(wo),w(He.$$.fragment,wo),wo.forEach(t),re.forEach(t),Es=u(o),_e=a(o,"H2",{class:!0});var nr=i(_e);Ue=a(nr,"A",{id:!0,class:!0,href:!0});var Pd=i(Ue);On=a(Pd,"SPAN",{});var jd=i(On);w(Ko.$$.fragment,jd),jd.forEach(t),Pd.forEach(t),Ua=u(nr),Ln=a(nr,"SPAN",{});var Ed=i(Ln);Va=c(Ed,"RoCBertForPreTraining"),Ed.forEach(t),nr.forEach(t),Os=u(o),D=a(o,"DIV",{class:!0});var vo=i(D);w(Go.$$.fragment,vo),Ja=u(vo),In=a(vo,"P",{});var Od=i(In);Ka=c(Od,"RoCBert Model with contrastive loss and masked_lm_loss during the pretraining."),Od.forEach(t),Ga=u(vo),Xo=a(vo,"P",{});var sr=i(Xo);Xa=c(sr,"This model is a PyTorch "),Zo=a(sr,"A",{href:!0,rel:!0});var Ld=i(Zo);Za=c(Ld,"torch.nn.Module"),Ld.forEach(t),Ya=c(sr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sr.forEach(t),ei=u(vo),H=a(vo,"DIV",{class:!0});var Co=i(H);w(Yo.$$.fragment,Co),oi=u(Co),be=a(Co,"P",{});var Xt=i(be);ti=c(Xt,"The "),Nt=a(Xt,"A",{href:!0});var Id=i(Nt);ni=c(Id,"RoCBertForPreTraining"),Id.forEach(t),si=c(Xt," forward method, overrides the "),Sn=a(Xt,"CODE",{});var Sd=i(Sn);ri=c(Sd,"__call__"),Sd.forEach(t),ai=c(Xt," special method."),Xt.forEach(t),ii=u(Co),w(Ve.$$.fragment,Co),li=u(Co),w(Je.$$.fragment,Co),Co.forEach(t),vo.forEach(t),Ls=u(o),ke=a(o,"H2",{class:!0});var rr=i(ke);Ke=a(rr,"A",{id:!0,class:!0,href:!0});var Ad=i(Ke);An=a(Ad,"SPAN",{});var Nd=i(An);w(et.$$.fragment,Nd),Nd.forEach(t),Ad.forEach(t),di=u(rr),Nn=a(rr,"SPAN",{});var Dd=i(Nn);ci=c(Dd,"RoCBertForCausalLM"),Dd.forEach(t),rr.forEach(t),Is=u(o),K=a(o,"DIV",{class:!0});var Zt=i(K);w(ot.$$.fragment,Zt),pi=u(Zt),Te=a(Zt,"P",{});var Yt=i(Te);hi=c(Yt,"RoCBert Model with a "),Dn=a(Yt,"CODE",{});var Wd=i(Dn);mi=c(Wd,"language modeling"),Wd.forEach(t),ui=c(Yt,` head on top for CLM fine-tuning.
This model is a PyTorch `),tt=a(Yt,"A",{href:!0,rel:!0});var Qd=i(tt);fi=c(Qd,"torch.nn.Module"),Qd.forEach(t),gi=c(Yt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yt.forEach(t),_i=u(Zt),U=a(Zt,"DIV",{class:!0});var $o=i(U);w(nt.$$.fragment,$o),bi=u($o),we=a($o,"P",{});var en=i(we);ki=c(en,"The "),Dt=a(en,"A",{href:!0});var Hd=i(Dt);Ti=c(Hd,"RoCBertForCausalLM"),Hd.forEach(t),wi=c(en," forward method, overrides the "),Wn=a(en,"CODE",{});var Ud=i(Wn);vi=c(Ud,"__call__"),Ud.forEach(t),Ci=c(en," special method."),en.forEach(t),$i=u($o),w(Ge.$$.fragment,$o),yi=u($o),w(Xe.$$.fragment,$o),$o.forEach(t),Zt.forEach(t),Ss=u(o),ve=a(o,"H2",{class:!0});var ar=i(ve);Ze=a(ar,"A",{id:!0,class:!0,href:!0});var Vd=i(Ze);Qn=a(Vd,"SPAN",{});var Jd=i(Qn);w(st.$$.fragment,Jd),Jd.forEach(t),Vd.forEach(t),zi=u(ar),Hn=a(ar,"SPAN",{});var Kd=i(Hn);Bi=c(Kd,"RoCBertForMaskedLM"),Kd.forEach(t),ar.forEach(t),As=u(o),G=a(o,"DIV",{class:!0});var on=i(G);w(rt.$$.fragment,on),Ri=u(on),Ce=a(on,"P",{});var tn=i(Ce);qi=c(tn,"RoCBert Model with a "),Un=a(tn,"CODE",{});var Gd=i(Un);Mi=c(Gd,"language modeling"),Gd.forEach(t),Fi=c(tn,` head on top.
This model is a PyTorch `),at=a(tn,"A",{href:!0,rel:!0});var Xd=i(at);xi=c(Xd,"torch.nn.Module"),Xd.forEach(t),Pi=c(tn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tn.forEach(t),ji=u(on),O=a(on,"DIV",{class:!0});var ae=i(O);w(it.$$.fragment,ae),Ei=u(ae),$e=a(ae,"P",{});var nn=i($e);Oi=c(nn,"The "),Wt=a(nn,"A",{href:!0});var Zd=i(Wt);Li=c(Zd,"RoCBertForMaskedLM"),Zd.forEach(t),Ii=c(nn," forward method, overrides the "),Vn=a(nn,"CODE",{});var Yd=i(Vn);Si=c(Yd,"__call__"),Yd.forEach(t),Ai=c(nn," special method."),nn.forEach(t),Ni=u(ae),w(Ye.$$.fragment,ae),Di=u(ae),w(eo.$$.fragment,ae),Wi=u(ae),w(oo.$$.fragment,ae),ae.forEach(t),on.forEach(t),Ns=u(o),ye=a(o,"H2",{class:!0});var ir=i(ye);to=a(ir,"A",{id:!0,class:!0,href:!0});var ec=i(to);Jn=a(ec,"SPAN",{});var oc=i(Jn);w(lt.$$.fragment,oc),oc.forEach(t),ec.forEach(t),Qi=u(ir),Kn=a(ir,"SPAN",{});var tc=i(Kn);Hi=c(tc,"RoCBertForSequenceClassification"),tc.forEach(t),ir.forEach(t),Ds=u(o),X=a(o,"DIV",{class:!0});var sn=i(X);w(dt.$$.fragment,sn),Ui=u(sn),ct=a(sn,"P",{});var lr=i(ct);Vi=c(lr,`RoCBert Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.
This model is a PyTorch `),pt=a(lr,"A",{href:!0,rel:!0});var nc=i(pt);Ji=c(nc,"torch.nn.Module"),nc.forEach(t),Ki=c(lr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lr.forEach(t),Gi=u(sn),q=a(sn,"DIV",{class:!0});var A=i(q);w(ht.$$.fragment,A),Xi=u(A),ze=a(A,"P",{});var rn=i(ze);Zi=c(rn,"The "),Qt=a(rn,"A",{href:!0});var sc=i(Qt);Yi=c(sc,"RoCBertForSequenceClassification"),sc.forEach(t),el=c(rn," forward method, overrides the "),Gn=a(rn,"CODE",{});var rc=i(Gn);ol=c(rc,"__call__"),rc.forEach(t),tl=c(rn," special method."),rn.forEach(t),nl=u(A),w(no.$$.fragment,A),sl=u(A),w(so.$$.fragment,A),rl=u(A),w(ro.$$.fragment,A),al=u(A),w(ao.$$.fragment,A),il=u(A),w(io.$$.fragment,A),A.forEach(t),sn.forEach(t),Ws=u(o),Be=a(o,"H2",{class:!0});var dr=i(Be);lo=a(dr,"A",{id:!0,class:!0,href:!0});var ac=i(lo);Xn=a(ac,"SPAN",{});var ic=i(Xn);w(mt.$$.fragment,ic),ic.forEach(t),ac.forEach(t),ll=u(dr),Zn=a(dr,"SPAN",{});var lc=i(Zn);dl=c(lc,"RoCBertForMultipleChoice"),lc.forEach(t),dr.forEach(t),Qs=u(o),Z=a(o,"DIV",{class:!0});var an=i(Z);w(ut.$$.fragment,an),cl=u(an),ft=a(an,"P",{});var cr=i(ft);pl=c(cr,`RoCBert Model with a multiple choice classification head on top (a linear layer on top of
the pooled output and a softmax) e.g. for RocStories/SWAG tasks.
This model is a PyTorch `),gt=a(cr,"A",{href:!0,rel:!0});var dc=i(gt);hl=c(dc,"torch.nn.Module"),dc.forEach(t),ml=c(cr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cr.forEach(t),ul=u(an),V=a(an,"DIV",{class:!0});var yo=i(V);w(_t.$$.fragment,yo),fl=u(yo),Re=a(yo,"P",{});var ln=i(Re);gl=c(ln,"The "),Ht=a(ln,"A",{href:!0});var cc=i(Ht);_l=c(cc,"RoCBertForMultipleChoice"),cc.forEach(t),bl=c(ln," forward method, overrides the "),Yn=a(ln,"CODE",{});var pc=i(Yn);kl=c(pc,"__call__"),pc.forEach(t),Tl=c(ln," special method."),ln.forEach(t),wl=u(yo),w(co.$$.fragment,yo),vl=u(yo),w(po.$$.fragment,yo),yo.forEach(t),an.forEach(t),Hs=u(o),qe=a(o,"H2",{class:!0});var pr=i(qe);ho=a(pr,"A",{id:!0,class:!0,href:!0});var hc=i(ho);es=a(hc,"SPAN",{});var mc=i(es);w(bt.$$.fragment,mc),mc.forEach(t),hc.forEach(t),Cl=u(pr),os=a(pr,"SPAN",{});var uc=i(os);$l=c(uc,"RoCBertForTokenClassification"),uc.forEach(t),pr.forEach(t),Us=u(o),Y=a(o,"DIV",{class:!0});var dn=i(Y);w(kt.$$.fragment,dn),yl=u(dn),Tt=a(dn,"P",{});var hr=i(Tt);zl=c(hr,`RoCBert Model with a token classification head on top (a linear layer on top of
the hidden-states output) e.g. for Named-Entity-Recognition (NER) tasks.
This model is a PyTorch `),wt=a(hr,"A",{href:!0,rel:!0});var fc=i(wt);Bl=c(fc,"torch.nn.Module"),fc.forEach(t),Rl=c(hr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hr.forEach(t),ql=u(dn),L=a(dn,"DIV",{class:!0});var ie=i(L);w(vt.$$.fragment,ie),Ml=u(ie),Me=a(ie,"P",{});var cn=i(Me);Fl=c(cn,"The "),Ut=a(cn,"A",{href:!0});var gc=i(Ut);xl=c(gc,"RoCBertForTokenClassification"),gc.forEach(t),Pl=c(cn," forward method, overrides the "),ts=a(cn,"CODE",{});var _c=i(ts);jl=c(_c,"__call__"),_c.forEach(t),El=c(cn," special method."),cn.forEach(t),Ol=u(ie),w(mo.$$.fragment,ie),Ll=u(ie),w(uo.$$.fragment,ie),Il=u(ie),w(fo.$$.fragment,ie),ie.forEach(t),dn.forEach(t),Vs=u(o),Fe=a(o,"H2",{class:!0});var mr=i(Fe);go=a(mr,"A",{id:!0,class:!0,href:!0});var bc=i(go);ns=a(bc,"SPAN",{});var kc=i(ns);w(Ct.$$.fragment,kc),kc.forEach(t),bc.forEach(t),Sl=u(mr),ss=a(mr,"SPAN",{});var Tc=i(ss);Al=c(Tc,"RoCBertForQuestionAnswering"),Tc.forEach(t),mr.forEach(t),Js=u(o),ee=a(o,"DIV",{class:!0});var pn=i(ee);w($t.$$.fragment,pn),Nl=u(pn),oe=a(pn,"P",{});var zo=i(oe);Dl=c(zo,`RoCBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rs=a(zo,"CODE",{});var wc=i(rs);Wl=c(wc,"span start logits"),wc.forEach(t),Ql=c(zo," and "),as=a(zo,"CODE",{});var vc=i(as);Hl=c(vc,"span end logits"),vc.forEach(t),Ul=c(zo,`).
This model is a PyTorch `),yt=a(zo,"A",{href:!0,rel:!0});var Cc=i(yt);Vl=c(Cc,"torch.nn.Module"),Cc.forEach(t),Jl=c(zo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zo.forEach(t),Kl=u(pn),I=a(pn,"DIV",{class:!0});var le=i(I);w(zt.$$.fragment,le),Gl=u(le),xe=a(le,"P",{});var hn=i(xe);Xl=c(hn,"The "),Vt=a(hn,"A",{href:!0});var $c=i(Vt);Zl=c($c,"RoCBertForQuestionAnswering"),$c.forEach(t),Yl=c(hn," forward method, overrides the "),is=a(hn,"CODE",{});var yc=i(is);ed=c(yc,"__call__"),yc.forEach(t),od=c(hn," special method."),hn.forEach(t),td=u(le),w(_o.$$.fragment,le),nd=u(le),w(bo.$$.fragment,le),sd=u(le),w(ko.$$.fragment,le),le.forEach(t),pn.forEach(t),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(tp)),f(p,"id","rocbert"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#rocbert"),f(l,"class","relative group"),f(Ee,"id","overview"),f(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ee,"href","#overview"),f(de,"class","relative group"),f(qo,"href","https://aclanthology.org/2022.acl-long.65.pdf"),f(qo,"rel","nofollow"),f(Mo,"href","https://huggingface.co/weiweishi"),f(Mo,"rel","nofollow"),f(Ie,"id","transformers.RoCBertConfig"),f(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ie,"href","#transformers.RoCBertConfig"),f(ce,"class","relative group"),f(jt,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel"),f(Po,"href","https://huggingface.co/weiweishi/roc-bert-base-zh"),f(Po,"rel","nofollow"),f(Et,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ot,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"id","transformers.RoCBertTokenizer"),f(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ae,"href","#transformers.RoCBertTokenizer"),f(me,"class","relative group"),f(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"id","transformers.RoCBertModel"),f(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(We,"href","#transformers.RoCBertModel"),f(fe,"class","relative group"),f(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ho,"rel","nofollow"),f(Vo,"href","https://arxiv.org/abs/1706.03762"),f(Vo,"rel","nofollow"),f(At,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"id","transformers.RoCBertForPreTraining"),f(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ue,"href","#transformers.RoCBertForPreTraining"),f(_e,"class","relative group"),f(Zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Zo,"rel","nofollow"),f(Nt,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForPreTraining"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"id","transformers.RoCBertForCausalLM"),f(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ke,"href","#transformers.RoCBertForCausalLM"),f(ke,"class","relative group"),f(tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(tt,"rel","nofollow"),f(Dt,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForCausalLM"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"id","transformers.RoCBertForMaskedLM"),f(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ze,"href","#transformers.RoCBertForMaskedLM"),f(ve,"class","relative group"),f(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(at,"rel","nofollow"),f(Wt,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForMaskedLM"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(to,"id","transformers.RoCBertForSequenceClassification"),f(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(to,"href","#transformers.RoCBertForSequenceClassification"),f(ye,"class","relative group"),f(pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(pt,"rel","nofollow"),f(Qt,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForSequenceClassification"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lo,"id","transformers.RoCBertForMultipleChoice"),f(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(lo,"href","#transformers.RoCBertForMultipleChoice"),f(Be,"class","relative group"),f(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(gt,"rel","nofollow"),f(Ht,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForMultipleChoice"),f(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ho,"id","transformers.RoCBertForTokenClassification"),f(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ho,"href","#transformers.RoCBertForTokenClassification"),f(qe,"class","relative group"),f(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(wt,"rel","nofollow"),f(Ut,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForTokenClassification"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(go,"id","transformers.RoCBertForQuestionAnswering"),f(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(go,"href","#transformers.RoCBertForQuestionAnswering"),f(Fe,"class","relative group"),f(yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(yt,"rel","nofollow"),f(Vt,"href","/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForQuestionAnswering"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,s),k(o,g,_),k(o,l,_),e(l,p),e(p,b),v(n,b,null),e(l,h),e(l,B),e(B,ur),k(o,$s,_),k(o,de,_),e(de,Ee),e(Ee,mn),v(Ro,mn,null),e(de,fr),e(de,un),e(un,gr),k(o,ys,_),k(o,Oe,_),e(Oe,_r),e(Oe,qo),e(qo,br),e(Oe,kr),k(o,zs,_),k(o,xt,_),e(xt,Tr),k(o,Bs,_),k(o,Pt,_),e(Pt,fn),e(fn,wr),k(o,Rs,_),k(o,Le,_),e(Le,vr),e(Le,Mo),e(Mo,Cr),e(Le,$r),k(o,qs,_),k(o,ce,_),e(ce,Ie),e(Ie,gn),v(Fo,gn,null),e(ce,yr),e(ce,_n),e(_n,zr),k(o,Ms,_),k(o,N,_),v(xo,N,null),e(N,Br),e(N,pe),e(pe,Rr),e(pe,jt),e(jt,qr),e(pe,Mr),e(pe,Po),e(Po,Fr),e(pe,xr),e(N,Pr),e(N,he),e(he,jr),e(he,Et),e(Et,Er),e(he,Or),e(he,Ot),e(Ot,Lr),e(he,Ir),e(N,Sr),v(Se,N,null),k(o,Fs,_),k(o,me,_),e(me,Ae),e(Ae,bn),v(jo,bn,null),e(me,Ar),e(me,kn),e(kn,Nr),k(o,xs,_),k(o,j,_),v(Eo,j,null),e(j,Dr),e(j,ne),v(Oo,ne,null),e(ne,Wr),e(ne,Tn),e(Tn,Qr),e(ne,Hr),e(ne,Lo),e(Lo,Lt),e(Lt,Ur),e(Lt,wn),e(wn,Vr),e(Lo,Jr),e(Lo,It),e(It,Kr),e(It,vn),e(vn,Gr),e(j,Xr),e(j,Ne),v(Io,Ne,null),e(Ne,Zr),e(Ne,So),e(So,Yr),e(So,Cn),e(Cn,ea),e(So,oa),e(j,ta),e(j,W),v(Ao,W,null),e(W,na),e(W,$n),e($n,sa),e(W,ra),v(De,W,null),e(W,aa),e(W,ue),e(ue,ia),e(ue,yn),e(yn,la),e(ue,da),e(ue,zn),e(zn,ca),e(ue,pa),e(j,ha),e(j,St),v(No,St,null),k(o,Ps,_),k(o,fe,_),e(fe,We),e(We,Bn),v(Do,Bn,null),e(fe,ma),e(fe,Rn),e(Rn,ua),k(o,js,_),k(o,E,_),v(Wo,E,null),e(E,fa),e(E,Qo),e(Qo,ga),e(Qo,Ho),e(Ho,_a),e(Qo,ba),e(E,ka),e(E,Uo),e(Uo,Ta),e(Uo,Vo),e(Vo,wa),e(Uo,va),e(E,Ca),e(E,M),e(M,$a),e(M,qn),e(qn,ya),e(M,za),e(M,Mn),e(Mn,Ba),e(M,Ra),e(M,Fn),e(Fn,qa),e(M,Ma),e(M,xn),e(xn,Fa),e(M,xa),e(M,Pn),e(Pn,Pa),e(M,ja),e(M,jn),e(jn,Ea),e(M,Oa),e(E,La),e(E,Q),v(Jo,Q,null),e(Q,Ia),e(Q,ge),e(ge,Sa),e(ge,At),e(At,Aa),e(ge,Na),e(ge,En),e(En,Da),e(ge,Wa),e(Q,Qa),v(Qe,Q,null),e(Q,Ha),v(He,Q,null),k(o,Es,_),k(o,_e,_),e(_e,Ue),e(Ue,On),v(Ko,On,null),e(_e,Ua),e(_e,Ln),e(Ln,Va),k(o,Os,_),k(o,D,_),v(Go,D,null),e(D,Ja),e(D,In),e(In,Ka),e(D,Ga),e(D,Xo),e(Xo,Xa),e(Xo,Zo),e(Zo,Za),e(Xo,Ya),e(D,ei),e(D,H),v(Yo,H,null),e(H,oi),e(H,be),e(be,ti),e(be,Nt),e(Nt,ni),e(be,si),e(be,Sn),e(Sn,ri),e(be,ai),e(H,ii),v(Ve,H,null),e(H,li),v(Je,H,null),k(o,Ls,_),k(o,ke,_),e(ke,Ke),e(Ke,An),v(et,An,null),e(ke,di),e(ke,Nn),e(Nn,ci),k(o,Is,_),k(o,K,_),v(ot,K,null),e(K,pi),e(K,Te),e(Te,hi),e(Te,Dn),e(Dn,mi),e(Te,ui),e(Te,tt),e(tt,fi),e(Te,gi),e(K,_i),e(K,U),v(nt,U,null),e(U,bi),e(U,we),e(we,ki),e(we,Dt),e(Dt,Ti),e(we,wi),e(we,Wn),e(Wn,vi),e(we,Ci),e(U,$i),v(Ge,U,null),e(U,yi),v(Xe,U,null),k(o,Ss,_),k(o,ve,_),e(ve,Ze),e(Ze,Qn),v(st,Qn,null),e(ve,zi),e(ve,Hn),e(Hn,Bi),k(o,As,_),k(o,G,_),v(rt,G,null),e(G,Ri),e(G,Ce),e(Ce,qi),e(Ce,Un),e(Un,Mi),e(Ce,Fi),e(Ce,at),e(at,xi),e(Ce,Pi),e(G,ji),e(G,O),v(it,O,null),e(O,Ei),e(O,$e),e($e,Oi),e($e,Wt),e(Wt,Li),e($e,Ii),e($e,Vn),e(Vn,Si),e($e,Ai),e(O,Ni),v(Ye,O,null),e(O,Di),v(eo,O,null),e(O,Wi),v(oo,O,null),k(o,Ns,_),k(o,ye,_),e(ye,to),e(to,Jn),v(lt,Jn,null),e(ye,Qi),e(ye,Kn),e(Kn,Hi),k(o,Ds,_),k(o,X,_),v(dt,X,null),e(X,Ui),e(X,ct),e(ct,Vi),e(ct,pt),e(pt,Ji),e(ct,Ki),e(X,Gi),e(X,q),v(ht,q,null),e(q,Xi),e(q,ze),e(ze,Zi),e(ze,Qt),e(Qt,Yi),e(ze,el),e(ze,Gn),e(Gn,ol),e(ze,tl),e(q,nl),v(no,q,null),e(q,sl),v(so,q,null),e(q,rl),v(ro,q,null),e(q,al),v(ao,q,null),e(q,il),v(io,q,null),k(o,Ws,_),k(o,Be,_),e(Be,lo),e(lo,Xn),v(mt,Xn,null),e(Be,ll),e(Be,Zn),e(Zn,dl),k(o,Qs,_),k(o,Z,_),v(ut,Z,null),e(Z,cl),e(Z,ft),e(ft,pl),e(ft,gt),e(gt,hl),e(ft,ml),e(Z,ul),e(Z,V),v(_t,V,null),e(V,fl),e(V,Re),e(Re,gl),e(Re,Ht),e(Ht,_l),e(Re,bl),e(Re,Yn),e(Yn,kl),e(Re,Tl),e(V,wl),v(co,V,null),e(V,vl),v(po,V,null),k(o,Hs,_),k(o,qe,_),e(qe,ho),e(ho,es),v(bt,es,null),e(qe,Cl),e(qe,os),e(os,$l),k(o,Us,_),k(o,Y,_),v(kt,Y,null),e(Y,yl),e(Y,Tt),e(Tt,zl),e(Tt,wt),e(wt,Bl),e(Tt,Rl),e(Y,ql),e(Y,L),v(vt,L,null),e(L,Ml),e(L,Me),e(Me,Fl),e(Me,Ut),e(Ut,xl),e(Me,Pl),e(Me,ts),e(ts,jl),e(Me,El),e(L,Ol),v(mo,L,null),e(L,Ll),v(uo,L,null),e(L,Il),v(fo,L,null),k(o,Vs,_),k(o,Fe,_),e(Fe,go),e(go,ns),v(Ct,ns,null),e(Fe,Sl),e(Fe,ss),e(ss,Al),k(o,Js,_),k(o,ee,_),v($t,ee,null),e(ee,Nl),e(ee,oe),e(oe,Dl),e(oe,rs),e(rs,Wl),e(oe,Ql),e(oe,as),e(as,Hl),e(oe,Ul),e(oe,yt),e(yt,Vl),e(oe,Jl),e(ee,Kl),e(ee,I),v(zt,I,null),e(I,Gl),e(I,xe),e(xe,Xl),e(xe,Vt),e(Vt,Zl),e(xe,Yl),e(xe,is),e(is,ed),e(xe,od),e(I,td),v(_o,I,null),e(I,nd),v(bo,I,null),e(I,sd),v(ko,I,null),Ks=!0},p(o,[_]){const Bt={};_&2&&(Bt.$$scope={dirty:_,ctx:o}),Se.$set(Bt);const ls={};_&2&&(ls.$$scope={dirty:_,ctx:o}),De.$set(ls);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:o}),Qe.$set(ds);const cs={};_&2&&(cs.$$scope={dirty:_,ctx:o}),He.$set(cs);const Rt={};_&2&&(Rt.$$scope={dirty:_,ctx:o}),Ve.$set(Rt);const ps={};_&2&&(ps.$$scope={dirty:_,ctx:o}),Je.$set(ps);const hs={};_&2&&(hs.$$scope={dirty:_,ctx:o}),Ge.$set(hs);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:o}),Xe.$set(ms);const qt={};_&2&&(qt.$$scope={dirty:_,ctx:o}),Ye.$set(qt);const us={};_&2&&(us.$$scope={dirty:_,ctx:o}),eo.$set(us);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:o}),oo.$set(fs);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:o}),no.$set(gs);const _s={};_&2&&(_s.$$scope={dirty:_,ctx:o}),so.$set(_s);const Mt={};_&2&&(Mt.$$scope={dirty:_,ctx:o}),ro.$set(Mt);const bs={};_&2&&(bs.$$scope={dirty:_,ctx:o}),ao.$set(bs);const Ft={};_&2&&(Ft.$$scope={dirty:_,ctx:o}),io.$set(Ft);const ks={};_&2&&(ks.$$scope={dirty:_,ctx:o}),co.$set(ks);const Ts={};_&2&&(Ts.$$scope={dirty:_,ctx:o}),po.$set(Ts);const ws={};_&2&&(ws.$$scope={dirty:_,ctx:o}),mo.$set(ws);const te={};_&2&&(te.$$scope={dirty:_,ctx:o}),uo.$set(te);const Pe={};_&2&&(Pe.$$scope={dirty:_,ctx:o}),fo.$set(Pe);const vs={};_&2&&(vs.$$scope={dirty:_,ctx:o}),_o.$set(vs);const Cs={};_&2&&(Cs.$$scope={dirty:_,ctx:o}),bo.$set(Cs);const je={};_&2&&(je.$$scope={dirty:_,ctx:o}),ko.$set(je)},i(o){Ks||(C(n.$$.fragment,o),C(Ro.$$.fragment,o),C(Fo.$$.fragment,o),C(xo.$$.fragment,o),C(Se.$$.fragment,o),C(jo.$$.fragment,o),C(Eo.$$.fragment,o),C(Oo.$$.fragment,o),C(Io.$$.fragment,o),C(Ao.$$.fragment,o),C(De.$$.fragment,o),C(No.$$.fragment,o),C(Do.$$.fragment,o),C(Wo.$$.fragment,o),C(Jo.$$.fragment,o),C(Qe.$$.fragment,o),C(He.$$.fragment,o),C(Ko.$$.fragment,o),C(Go.$$.fragment,o),C(Yo.$$.fragment,o),C(Ve.$$.fragment,o),C(Je.$$.fragment,o),C(et.$$.fragment,o),C(ot.$$.fragment,o),C(nt.$$.fragment,o),C(Ge.$$.fragment,o),C(Xe.$$.fragment,o),C(st.$$.fragment,o),C(rt.$$.fragment,o),C(it.$$.fragment,o),C(Ye.$$.fragment,o),C(eo.$$.fragment,o),C(oo.$$.fragment,o),C(lt.$$.fragment,o),C(dt.$$.fragment,o),C(ht.$$.fragment,o),C(no.$$.fragment,o),C(so.$$.fragment,o),C(ro.$$.fragment,o),C(ao.$$.fragment,o),C(io.$$.fragment,o),C(mt.$$.fragment,o),C(ut.$$.fragment,o),C(_t.$$.fragment,o),C(co.$$.fragment,o),C(po.$$.fragment,o),C(bt.$$.fragment,o),C(kt.$$.fragment,o),C(vt.$$.fragment,o),C(mo.$$.fragment,o),C(uo.$$.fragment,o),C(fo.$$.fragment,o),C(Ct.$$.fragment,o),C($t.$$.fragment,o),C(zt.$$.fragment,o),C(_o.$$.fragment,o),C(bo.$$.fragment,o),C(ko.$$.fragment,o),Ks=!0)},o(o){$(n.$$.fragment,o),$(Ro.$$.fragment,o),$(Fo.$$.fragment,o),$(xo.$$.fragment,o),$(Se.$$.fragment,o),$(jo.$$.fragment,o),$(Eo.$$.fragment,o),$(Oo.$$.fragment,o),$(Io.$$.fragment,o),$(Ao.$$.fragment,o),$(De.$$.fragment,o),$(No.$$.fragment,o),$(Do.$$.fragment,o),$(Wo.$$.fragment,o),$(Jo.$$.fragment,o),$(Qe.$$.fragment,o),$(He.$$.fragment,o),$(Ko.$$.fragment,o),$(Go.$$.fragment,o),$(Yo.$$.fragment,o),$(Ve.$$.fragment,o),$(Je.$$.fragment,o),$(et.$$.fragment,o),$(ot.$$.fragment,o),$(nt.$$.fragment,o),$(Ge.$$.fragment,o),$(Xe.$$.fragment,o),$(st.$$.fragment,o),$(rt.$$.fragment,o),$(it.$$.fragment,o),$(Ye.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(lt.$$.fragment,o),$(dt.$$.fragment,o),$(ht.$$.fragment,o),$(no.$$.fragment,o),$(so.$$.fragment,o),$(ro.$$.fragment,o),$(ao.$$.fragment,o),$(io.$$.fragment,o),$(mt.$$.fragment,o),$(ut.$$.fragment,o),$(_t.$$.fragment,o),$(co.$$.fragment,o),$(po.$$.fragment,o),$(bt.$$.fragment,o),$(kt.$$.fragment,o),$(vt.$$.fragment,o),$(mo.$$.fragment,o),$(uo.$$.fragment,o),$(fo.$$.fragment,o),$(Ct.$$.fragment,o),$($t.$$.fragment,o),$(zt.$$.fragment,o),$(_o.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),Ks=!1},d(o){t(s),o&&t(g),o&&t(l),y(n),o&&t($s),o&&t(de),y(Ro),o&&t(ys),o&&t(Oe),o&&t(zs),o&&t(xt),o&&t(Bs),o&&t(Pt),o&&t(Rs),o&&t(Le),o&&t(qs),o&&t(ce),y(Fo),o&&t(Ms),o&&t(N),y(xo),y(Se),o&&t(Fs),o&&t(me),y(jo),o&&t(xs),o&&t(j),y(Eo),y(Oo),y(Io),y(Ao),y(De),y(No),o&&t(Ps),o&&t(fe),y(Do),o&&t(js),o&&t(E),y(Wo),y(Jo),y(Qe),y(He),o&&t(Es),o&&t(_e),y(Ko),o&&t(Os),o&&t(D),y(Go),y(Yo),y(Ve),y(Je),o&&t(Ls),o&&t(ke),y(et),o&&t(Is),o&&t(K),y(ot),y(nt),y(Ge),y(Xe),o&&t(Ss),o&&t(ve),y(st),o&&t(As),o&&t(G),y(rt),y(it),y(Ye),y(eo),y(oo),o&&t(Ns),o&&t(ye),y(lt),o&&t(Ds),o&&t(X),y(dt),y(ht),y(no),y(so),y(ro),y(ao),y(io),o&&t(Ws),o&&t(Be),y(mt),o&&t(Qs),o&&t(Z),y(ut),y(_t),y(co),y(po),o&&t(Hs),o&&t(qe),y(bt),o&&t(Us),o&&t(Y),y(kt),y(vt),y(mo),y(uo),y(fo),o&&t(Vs),o&&t(Fe),y(Ct),o&&t(Js),o&&t(ee),y($t),y(zt),y(_o),y(bo),y(ko)}}}const tp={local:"rocbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoCBertConfig",title:"RoCBertConfig"},{local:"transformers.RoCBertTokenizer",title:"RoCBertTokenizer"},{local:"transformers.RoCBertModel",title:"RoCBertModel"},{local:"transformers.RoCBertForPreTraining",title:"RoCBertForPreTraining"},{local:"transformers.RoCBertForCausalLM",title:"RoCBertForCausalLM"},{local:"transformers.RoCBertForMaskedLM",title:"RoCBertForMaskedLM"},{local:"transformers.RoCBertForSequenceClassification",title:"RoCBertForSequenceClassification"},{local:"transformers.RoCBertForMultipleChoice",title:"RoCBertForMultipleChoice"},{local:"transformers.RoCBertForTokenClassification",title:"RoCBertForTokenClassification"},{local:"transformers.RoCBertForQuestionAnswering",title:"RoCBertForQuestionAnswering"}],title:"RoCBert"};function np(z){return Mc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cp extends zc{constructor(s){super();Bc(this,s,np,op,Rc,{})}}export{cp as default,tp as metadata};
