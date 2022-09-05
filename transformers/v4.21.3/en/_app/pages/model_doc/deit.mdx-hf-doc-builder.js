import{S as qc,i as zc,s as Ac,e as s,k as f,w as b,t as i,M as Nc,c as r,d as o,m as u,a as n,x as w,h as l,b as p,G as e,g as T,y as $,q as y,o as D,B as F,v as Oc,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as M}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ce}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as X}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Lc(k){let d,v,m,h,_;return{c(){d=s("p"),v=i(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=s("a"),h=i("Github Issue"),_=i("."),this.h()},l(a){d=r(a,"P",{});var c=n(d);v=l(c,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=r(c,"A",{href:!0,rel:!0});var x=n(m);h=l(x,"Github Issue"),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){p(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),p(m,"rel","nofollow")},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Wc(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTModel, DeiTConfig

# Initializing a DeiT deit-base-distilled-patch16-224 style configuration
configuration = DeiTConfig()

# Initializing a model from the deit-base-distilled-patch16-224 style configuration
model = DeiTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTModel, DeiTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeiT deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DeiTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),v=i("Example:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Sc(k){let d,v;return{c(){d=s("p"),v=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){d=r(m,"P",{});var h=n(d);v=l(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(m,h){T(m,d,h),e(d,v)},d(m){m&&o(d)}}}function Vc(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Bc(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTModel.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),v=i("Example:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Hc(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Uc(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForMaskedImageModeling.from_pretrained("facebook/deit-base-distilled-patch16-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),v=i("Examples:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Rc(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Jc(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
import torch
from PIL import Image
import requests

torch.manual_seed(3)
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

# note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,
# so the head will be randomly initialized, hence the predictions will be random
feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassification.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=s("p"),v=i("Examples:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Gc(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Kc(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassificationWithTeacher.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassificationWithTeacher.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=s("p"),v=i("Example:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Xc(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Zc(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = TFDeiTModel.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, TFDeiTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDeiTModel.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),v=i("Example:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Qc(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Yc(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForMaskedImageModeling
import tensorflow as tf
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = TFDeiTForMaskedImageModeling.from_pretrained("facebook/deit-base-distilled-patch16-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="tf").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = tf.cast(tf.random.uniform((1, num_patches), minval=0, maxval=2, dtype=tf.int32), tf.bool)

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, TFDeiTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDeiTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = tf.cast(tf.random.uniform((<span class="hljs-number">1</span>, num_patches), minval=<span class="hljs-number">0</span>, maxval=<span class="hljs-number">2</span>, dtype=tf.int32), tf.<span class="hljs-built_in">bool</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),v=i("Examples:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function eh(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function th(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassification
import tensorflow as tf
from PIL import Image
import requests

tf.random.set_seed(3)
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

# note: we are loading a TFDeiTForImageClassificationWithTeacher from the hub here,
# so the head will be randomly initialized, hence the predictions will be random
feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = TFDeiTForImageClassification.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, TFDeiTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>tf.random.set_seed(<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a TFDeiTForImageClassificationWithTeacher from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDeiTForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=s("p"),v=i("Examples:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function oh(k){let d,v,m,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(c,"CODE",{});var x=n(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function ah(k){let d,v,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = TFDeiTForImageClassificationWithTeacher.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDeiTForImageClassificationWithTeacher.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=s("p"),v=i("Example:"),m=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),m=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function sh(k){let d,v,m,h,_,a,c,x,ir,us,Pe,gs,re,qe,ia,wt,lr,la,dr,_s,L,cr,$t,hr,pr,$o,mr,fr,yt,ur,gr,Ts,yo,_r,vs,Do,da,Tr,bs,Fo,vr,ws,P,ca,br,wr,ne,$r,ko,yr,Dr,xo,Fr,kr,xr,ha,Ir,Mr,pa,Er,jr,I,Cr,Io,Pr,qr,Mo,zr,Ar,ma,Nr,Or,fa,Lr,Wr,ua,Sr,Vr,ga,Br,Hr,Eo,Ur,Rr,$s,oe,Jr,Dt,Gr,Kr,Ft,Xr,Zr,ys,ie,ze,_a,kt,Qr,Ta,Yr,Ds,q,xt,en,le,tn,jo,on,an,It,sn,rn,nn,de,ln,Co,dn,cn,Po,hn,pn,mn,Ae,Fs,ce,Ne,va,Mt,fn,ba,un,ks,z,Et,gn,wa,_n,Tn,jt,vn,qo,bn,wn,$n,ae,Ct,yn,$a,Dn,Fn,Oe,xs,he,Le,ya,Pt,kn,Da,xn,Is,Z,qt,In,zt,Mn,At,En,jn,Cn,W,Nt,Pn,pe,qn,zo,zn,An,Fa,Nn,On,Ln,We,Wn,Se,Ms,me,Ve,ka,Ot,Sn,xa,Vn,Es,Q,Lt,Bn,fe,Hn,Wt,Un,Rn,St,Jn,Gn,Kn,S,Vt,Xn,ue,Zn,Ao,Qn,Yn,Ia,ei,ti,oi,Be,ai,He,js,ge,Ue,Ma,Bt,si,Ea,ri,Cs,A,Ht,ni,ja,ii,li,Ut,di,Rt,ci,hi,pi,V,Jt,mi,_e,fi,No,ui,gi,Ca,_i,Ti,vi,Re,bi,Je,Ps,Te,Ge,Pa,Gt,wi,qa,$i,qs,E,Kt,yi,za,Di,Fi,Aa,ki,xi,Na,Ii,Mi,Xt,Ei,Zt,ji,Ci,Pi,B,Qt,qi,ve,zi,Oo,Ai,Ni,Oa,Oi,Li,Wi,Ke,Si,Xe,zs,be,Ze,La,Yt,Vi,Wa,Bi,As,Y,eo,Hi,to,Ui,oo,Ri,Ji,Gi,H,ao,Ki,we,Xi,Lo,Zi,Qi,Sa,Yi,el,tl,Qe,ol,Ye,Ns,$e,et,Va,so,al,Ba,sl,Os,ee,ro,rl,ye,nl,no,il,ll,io,dl,cl,hl,U,lo,pl,De,ml,Wo,fl,ul,Ha,gl,_l,Tl,tt,vl,ot,Ls,Fe,at,Ua,co,bl,Ra,wl,Ws,N,ho,$l,Ja,yl,Dl,po,Fl,mo,kl,xl,Il,R,fo,Ml,ke,El,So,jl,Cl,Ga,Pl,ql,zl,st,Al,rt,Ss,xe,nt,Ka,uo,Nl,Xa,Ol,Vs,j,go,Ll,Za,Wl,Sl,Qa,Vl,Bl,Ya,Hl,Ul,_o,Rl,To,Jl,Gl,Kl,J,vo,Xl,Ie,Zl,Vo,Ql,Yl,es,ed,td,od,it,ad,lt,Bs;return a=new X({}),Pe=new se({props:{$$slots:{default:[Lc]},$$scope:{ctx:k}}}),wt=new X({}),kt=new X({}),xt=new M({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DeiTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DeiTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DeiTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DeiTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DeiTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DeiTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DeiTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DeiTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DeiTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DeiTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DeiTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DeiTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DeiTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/configuration_deit.py#L37"}}),Ae=new Ee({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[Wc]},$$scope:{ctx:k}}}),Mt=new X({}),Et=new M({props:{name:"class transformers.DeiTFeatureExtractor",anchor:"transformers.DeiTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DeiTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DeiTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DeiTFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.DeiTFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.DeiTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.DeiTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DeiTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/feature_extraction_deit.py#L36"}}),Ct=new M({props:{name:"__call__",anchor:"transformers.DeiTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DeiTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.3/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/feature_extraction_deit.py#L91",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Oe=new se({props:{warning:!0,$$slots:{default:[Sc]},$$scope:{ctx:k}}}),Pt=new X({}),qt=new M({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L457"}}),Nt=new M({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L482",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new se({props:{$$slots:{default:[Vc]},$$scope:{ctx:k}}}),Se=new Ee({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[Bc]},$$scope:{ctx:k}}}),Ot=new X({}),Lt=new M({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L562"}}),Vt=new M({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L580",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new se({props:{$$slots:{default:[Hc]},$$scope:{ctx:k}}}),He=new Ee({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[Uc]},$$scope:{ctx:k}}}),Bt=new X({}),Ht=new M({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L674"}}),Jt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L687",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new se({props:{$$slots:{default:[Rc]},$$scope:{ctx:k}}}),Je=new Ee({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[Jc]},$$scope:{ctx:k}}}),Gt=new X({}),Kt=new M({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L823"}}),Qt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_deit.py#L841",returnDescription:`
<p>A <code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores as the average of the cls_logits and distillation logits.</li>
<li><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the classification head (i.e. the linear layer on top of the final hidden state of the
class token).</li>
<li><strong>distillation_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the distillation head (i.e. the linear layer on top of the final hidden state of the
distillation token).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new se({props:{$$slots:{default:[Gc]},$$scope:{ctx:k}}}),Xe=new Ee({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[Kc]},$$scope:{ctx:k}}}),Yt=new X({}),eo=new M({props:{name:"class transformers.TFDeiTModel",anchor:"transformers.TFDeiTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L641"}}),ao=new M({props:{name:"call",anchor:"transformers.TFDeiTModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L651",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qe=new se({props:{$$slots:{default:[Xc]},$$scope:{ctx:k}}}),Ye=new Ee({props:{anchor:"transformers.TFDeiTModel.call.example",$$slots:{default:[Zc]},$$scope:{ctx:k}}}),so=new X({}),ro=new M({props:{name:"class transformers.TFDeiTForMaskedImageModeling",anchor:"transformers.TFDeiTForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L761"}}),lo=new M({props:{name:"call",anchor:"transformers.TFDeiTForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of type bool and shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L768",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tt=new se({props:{$$slots:{default:[Qc]},$$scope:{ctx:k}}}),ot=new Ee({props:{anchor:"transformers.TFDeiTForMaskedImageModeling.call.example",$$slots:{default:[Yc]},$$scope:{ctx:k}}}),co=new X({}),ho=new M({props:{name:"class transformers.TFDeiTForImageClassification",anchor:"transformers.TFDeiTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L881"}}),fo=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L895",returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings, if the model has an embedding layer, + one for
the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states (also called
feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_tf_outputs.TFImageClassifierOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),st=new se({props:{$$slots:{default:[eh]},$$scope:{ctx:k}}}),rt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassification.call.example",$$slots:{default:[th]},$$scope:{ctx:k}}}),uo=new X({}),go=new M({props:{name:"class transformers.TFDeiTForImageClassificationWithTeacher",anchor:"transformers.TFDeiTForImageClassificationWithTeacher",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L989"}}),vo=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/deit/modeling_tf_deit.py#L1008",returnDescription:`
<p>A <code>transformers.models.deit.modeling_tf_deit.TFDeiTForImageClassificationWithTeacherOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores as the average of the cls_logits and distillation logits.</li>
<li><strong>cls_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the classification head (i.e. the linear layer on top of the final hidden state of the
class token).</li>
<li><strong>distillation_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the distillation head (i.e. the linear layer on top of the final hidden state of the
distillation token).</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.deit.modeling_tf_deit.TFDeiTForImageClassificationWithTeacherOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new se({props:{$$slots:{default:[oh]},$$scope:{ctx:k}}}),lt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.example",$$slots:{default:[ah]},$$scope:{ctx:k}}}),{c(){d=s("meta"),v=f(),m=s("h1"),h=s("a"),_=s("span"),b(a.$$.fragment),c=f(),x=s("span"),ir=i("DeiT"),us=f(),b(Pe.$$.fragment),gs=f(),re=s("h2"),qe=s("a"),ia=s("span"),b(wt.$$.fragment),lr=f(),la=s("span"),dr=i("Overview"),_s=f(),L=s("p"),cr=i("The DeiT model was proposed in "),$t=s("a"),hr=i("Training data-efficient image transformers & distillation through attention"),pr=i(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),$o=s("a"),mr=i("Vision Transformer (ViT)"),fr=i(" introduced in "),yt=s("a"),ur=i("Dosovitskiy et al., 2020"),gr=i(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),Ts=f(),yo=s("p"),_r=i("The abstract from the paper is the following:"),vs=f(),Do=s("p"),da=s("em"),Tr=i(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),bs=f(),Fo=s("p"),vr=i("Tips:"),ws=f(),P=s("ul"),ca=s("li"),br=i(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),wr=f(),ne=s("li"),$r=i(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),ko=s("a"),yr=i("DeiTForImageClassification"),Dr=i(` and (2) corresponds to
`),xo=s("a"),Fr=i("DeiTForImageClassificationWithTeacher"),kr=i("."),xr=f(),ha=s("li"),Ir=i(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Mr=f(),pa=s("li"),Er=i(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),jr=f(),I=s("li"),Cr=i(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Io=s("a"),Pr=i("ViTModel"),qr=i(" or "),Mo=s("a"),zr=i("ViTForImageClassification"),Ar=i(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ma=s("em"),Nr=i("facebook/deit-tiny-patch16-224"),Or=i(", "),fa=s("em"),Lr=i("facebook/deit-small-patch16-224"),Wr=i(", "),ua=s("em"),Sr=i("facebook/deit-base-patch16-224"),Vr=i(` and
`),ga=s("em"),Br=i("facebook/deit-base-patch16-384"),Hr=i(". Note that one should use "),Eo=s("a"),Ur=i("DeiTFeatureExtractor"),Rr=i(` in order to
prepare images for the model.`),$s=f(),oe=s("p"),Jr=i("This model was contributed by "),Dt=s("a"),Gr=i("nielsr"),Kr=i(". The TensorFlow version of this model was added by "),Ft=s("a"),Xr=i("amyeroberts"),Zr=i("."),ys=f(),ie=s("h2"),ze=s("a"),_a=s("span"),b(kt.$$.fragment),Qr=f(),Ta=s("span"),Yr=i("DeiTConfig"),Ds=f(),q=s("div"),b(xt.$$.fragment),en=f(),le=s("p"),tn=i("This is the configuration class to store the configuration of a "),jo=s("a"),on=i("DeiTModel"),an=i(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),It=s("a"),sn=i("facebook/deit-base-distilled-patch16-224"),rn=i(`
architecture.`),nn=f(),de=s("p"),ln=i("Configuration objects inherit from "),Co=s("a"),dn=i("PretrainedConfig"),cn=i(` and can be used to control the model outputs. Read the
documentation from `),Po=s("a"),hn=i("PretrainedConfig"),pn=i(" for more information."),mn=f(),b(Ae.$$.fragment),Fs=f(),ce=s("h2"),Ne=s("a"),va=s("span"),b(Mt.$$.fragment),fn=f(),ba=s("span"),un=i("DeiTFeatureExtractor"),ks=f(),z=s("div"),b(Et.$$.fragment),gn=f(),wa=s("p"),_n=i("Constructs a DeiT feature extractor."),Tn=f(),jt=s("p"),vn=i("This feature extractor inherits from "),qo=s("a"),bn=i("FeatureExtractionMixin"),wn=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),$n=f(),ae=s("div"),b(Ct.$$.fragment),yn=f(),$a=s("p"),Dn=i("Main method to prepare for the model one or several image(s)."),Fn=f(),b(Oe.$$.fragment),xs=f(),he=s("h2"),Le=s("a"),ya=s("span"),b(Pt.$$.fragment),kn=f(),Da=s("span"),xn=i("DeiTModel"),Is=f(),Z=s("div"),b(qt.$$.fragment),In=f(),zt=s("p"),Mn=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=s("a"),En=i("torch.nn.Module"),jn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cn=f(),W=s("div"),b(Nt.$$.fragment),Pn=f(),pe=s("p"),qn=i("The "),zo=s("a"),zn=i("DeiTModel"),An=i(" forward method, overrides the "),Fa=s("code"),Nn=i("__call__"),On=i(" special method."),Ln=f(),b(We.$$.fragment),Wn=f(),b(Se.$$.fragment),Ms=f(),me=s("h2"),Ve=s("a"),ka=s("span"),b(Ot.$$.fragment),Sn=f(),xa=s("span"),Vn=i("DeiTForMaskedImageModeling"),Es=f(),Q=s("div"),b(Lt.$$.fragment),Bn=f(),fe=s("p"),Hn=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Wt=s("a"),Un=i("SimMIM"),Rn=i(`.
This model is a PyTorch `),St=s("a"),Jn=i("torch.nn.Module"),Gn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kn=f(),S=s("div"),b(Vt.$$.fragment),Xn=f(),ue=s("p"),Zn=i("The "),Ao=s("a"),Qn=i("DeiTForMaskedImageModeling"),Yn=i(" forward method, overrides the "),Ia=s("code"),ei=i("__call__"),ti=i(" special method."),oi=f(),b(Be.$$.fragment),ai=f(),b(He.$$.fragment),js=f(),ge=s("h2"),Ue=s("a"),Ma=s("span"),b(Bt.$$.fragment),si=f(),Ea=s("span"),ri=i("DeiTForImageClassification"),Cs=f(),A=s("div"),b(Ht.$$.fragment),ni=f(),ja=s("p"),ii=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),li=f(),Ut=s("p"),di=i("This model is a PyTorch "),Rt=s("a"),ci=i("torch.nn.Module"),hi=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi=f(),V=s("div"),b(Jt.$$.fragment),mi=f(),_e=s("p"),fi=i("The "),No=s("a"),ui=i("DeiTForImageClassification"),gi=i(" forward method, overrides the "),Ca=s("code"),_i=i("__call__"),Ti=i(" special method."),vi=f(),b(Re.$$.fragment),bi=f(),b(Je.$$.fragment),Ps=f(),Te=s("h2"),Ge=s("a"),Pa=s("span"),b(Gt.$$.fragment),wi=f(),qa=s("span"),$i=i("DeiTForImageClassificationWithTeacher"),qs=f(),E=s("div"),b(Kt.$$.fragment),yi=f(),za=s("p"),Di=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Fi=f(),Aa=s("p"),ki=i(".. warning::"),xi=f(),Na=s("p"),Ii=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Mi=f(),Xt=s("p"),Ei=i("This model is a PyTorch "),Zt=s("a"),ji=i("torch.nn.Module"),Ci=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pi=f(),B=s("div"),b(Qt.$$.fragment),qi=f(),ve=s("p"),zi=i("The "),Oo=s("a"),Ai=i("DeiTForImageClassificationWithTeacher"),Ni=i(" forward method, overrides the "),Oa=s("code"),Oi=i("__call__"),Li=i(" special method."),Wi=f(),b(Ke.$$.fragment),Si=f(),b(Xe.$$.fragment),zs=f(),be=s("h2"),Ze=s("a"),La=s("span"),b(Yt.$$.fragment),Vi=f(),Wa=s("span"),Bi=i("TFDeiTModel"),As=f(),Y=s("div"),b(eo.$$.fragment),Hi=f(),to=s("p"),Ui=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),oo=s("a"),Ri=i("tf.keras.layers.Layer"),Ji=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Gi=f(),H=s("div"),b(ao.$$.fragment),Ki=f(),we=s("p"),Xi=i("The "),Lo=s("a"),Zi=i("TFDeiTModel"),Qi=i(" forward method, overrides the "),Sa=s("code"),Yi=i("__call__"),el=i(" special method."),tl=f(),b(Qe.$$.fragment),ol=f(),b(Ye.$$.fragment),Ns=f(),$e=s("h2"),et=s("a"),Va=s("span"),b(so.$$.fragment),al=f(),Ba=s("span"),sl=i("TFDeiTForMaskedImageModeling"),Os=f(),ee=s("div"),b(ro.$$.fragment),rl=f(),ye=s("p"),nl=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),no=s("a"),il=i("SimMIM"),ll=i(`.
This model is a TensorFlow
`),io=s("a"),dl=i("tf.keras.layers.Layer"),cl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),hl=f(),U=s("div"),b(lo.$$.fragment),pl=f(),De=s("p"),ml=i("The "),Wo=s("a"),fl=i("TFDeiTForMaskedImageModeling"),ul=i(" forward method, overrides the "),Ha=s("code"),gl=i("__call__"),_l=i(" special method."),Tl=f(),b(tt.$$.fragment),vl=f(),b(ot.$$.fragment),Ls=f(),Fe=s("h2"),at=s("a"),Ua=s("span"),b(co.$$.fragment),bl=f(),Ra=s("span"),wl=i("TFDeiTForImageClassification"),Ws=f(),N=s("div"),b(ho.$$.fragment),$l=f(),Ja=s("p"),yl=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Dl=f(),po=s("p"),Fl=i(`This model is a TensorFlow
`),mo=s("a"),kl=i("tf.keras.layers.Layer"),xl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Il=f(),R=s("div"),b(fo.$$.fragment),Ml=f(),ke=s("p"),El=i("The "),So=s("a"),jl=i("TFDeiTForImageClassification"),Cl=i(" forward method, overrides the "),Ga=s("code"),Pl=i("__call__"),ql=i(" special method."),zl=f(),b(st.$$.fragment),Al=f(),b(rt.$$.fragment),Ss=f(),xe=s("h2"),nt=s("a"),Ka=s("span"),b(uo.$$.fragment),Nl=f(),Xa=s("span"),Ol=i("TFDeiTForImageClassificationWithTeacher"),Vs=f(),j=s("div"),b(go.$$.fragment),Ll=f(),Za=s("p"),Wl=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Sl=f(),Qa=s("p"),Vl=i(".. warning::"),Bl=f(),Ya=s("p"),Hl=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ul=f(),_o=s("p"),Rl=i(`This model is a TensorFlow
`),To=s("a"),Jl=i("tf.keras.layers.Layer"),Gl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Kl=f(),J=s("div"),b(vo.$$.fragment),Xl=f(),Ie=s("p"),Zl=i("The "),Vo=s("a"),Ql=i("TFDeiTForImageClassificationWithTeacher"),Yl=i(" forward method, overrides the "),es=s("code"),ed=i("__call__"),td=i(" special method."),od=f(),b(it.$$.fragment),ad=f(),b(lt.$$.fragment),this.h()},l(t){const g=Nc('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),v=u(t),m=r(t,"H1",{class:!0});var bo=n(m);h=r(bo,"A",{id:!0,class:!0,href:!0});var ts=n(h);_=r(ts,"SPAN",{});var os=n(_);w(a.$$.fragment,os),os.forEach(o),ts.forEach(o),c=u(bo),x=r(bo,"SPAN",{});var as=n(x);ir=l(as,"DeiT"),as.forEach(o),bo.forEach(o),us=u(t),w(Pe.$$.fragment,t),gs=u(t),re=r(t,"H2",{class:!0});var wo=n(re);qe=r(wo,"A",{id:!0,class:!0,href:!0});var ss=n(qe);ia=r(ss,"SPAN",{});var rs=n(ia);w(wt.$$.fragment,rs),rs.forEach(o),ss.forEach(o),lr=u(wo),la=r(wo,"SPAN",{});var ns=n(la);dr=l(ns,"Overview"),ns.forEach(o),wo.forEach(o),_s=u(t),L=r(t,"P",{});var te=n(L);cr=l(te,"The DeiT model was proposed in "),$t=r(te,"A",{href:!0,rel:!0});var is=n($t);hr=l(is,"Training data-efficient image transformers & distillation through attention"),is.forEach(o),pr=l(te,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),$o=r(te,"A",{href:!0});var ls=n($o);mr=l(ls,"Vision Transformer (ViT)"),ls.forEach(o),fr=l(te," introduced in "),yt=r(te,"A",{href:!0,rel:!0});var ds=n(yt);ur=l(ds,"Dosovitskiy et al., 2020"),ds.forEach(o),gr=l(te,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),te.forEach(o),Ts=u(t),yo=r(t,"P",{});var cs=n(yo);_r=l(cs,"The abstract from the paper is the following:"),cs.forEach(o),vs=u(t),Do=r(t,"P",{});var hs=n(Do);da=r(hs,"EM",{});var ps=n(da);Tr=l(ps,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ps.forEach(o),hs.forEach(o),bs=u(t),Fo=r(t,"P",{});var ms=n(Fo);vr=l(ms,"Tips:"),ms.forEach(o),ws=u(t),P=r(t,"UL",{});var O=n(P);ca=r(O,"LI",{});var fs=n(ca);br=l(fs,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),fs.forEach(o),wr=u(O),ne=r(O,"LI",{});var Me=n(ne);$r=l(Me,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),ko=r(Me,"A",{href:!0});var sd=n(ko);yr=l(sd,"DeiTForImageClassification"),sd.forEach(o),Dr=l(Me,` and (2) corresponds to
`),xo=r(Me,"A",{href:!0});var rd=n(xo);Fr=l(rd,"DeiTForImageClassificationWithTeacher"),rd.forEach(o),kr=l(Me,"."),Me.forEach(o),xr=u(O),ha=r(O,"LI",{});var nd=n(ha);Ir=l(nd,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),nd.forEach(o),Mr=u(O),pa=r(O,"LI",{});var id=n(pa);Er=l(id,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),id.forEach(o),jr=u(O),I=r(O,"LI",{});var C=n(I);Cr=l(C,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Io=r(C,"A",{href:!0});var ld=n(Io);Pr=l(ld,"ViTModel"),ld.forEach(o),qr=l(C," or "),Mo=r(C,"A",{href:!0});var dd=n(Mo);zr=l(dd,"ViTForImageClassification"),dd.forEach(o),Ar=l(C,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ma=r(C,"EM",{});var cd=n(ma);Nr=l(cd,"facebook/deit-tiny-patch16-224"),cd.forEach(o),Or=l(C,", "),fa=r(C,"EM",{});var hd=n(fa);Lr=l(hd,"facebook/deit-small-patch16-224"),hd.forEach(o),Wr=l(C,", "),ua=r(C,"EM",{});var pd=n(ua);Sr=l(pd,"facebook/deit-base-patch16-224"),pd.forEach(o),Vr=l(C,` and
`),ga=r(C,"EM",{});var md=n(ga);Br=l(md,"facebook/deit-base-patch16-384"),md.forEach(o),Hr=l(C,". Note that one should use "),Eo=r(C,"A",{href:!0});var fd=n(Eo);Ur=l(fd,"DeiTFeatureExtractor"),fd.forEach(o),Rr=l(C,` in order to
prepare images for the model.`),C.forEach(o),O.forEach(o),$s=u(t),oe=r(t,"P",{});var Bo=n(oe);Jr=l(Bo,"This model was contributed by "),Dt=r(Bo,"A",{href:!0,rel:!0});var ud=n(Dt);Gr=l(ud,"nielsr"),ud.forEach(o),Kr=l(Bo,". The TensorFlow version of this model was added by "),Ft=r(Bo,"A",{href:!0,rel:!0});var gd=n(Ft);Xr=l(gd,"amyeroberts"),gd.forEach(o),Zr=l(Bo,"."),Bo.forEach(o),ys=u(t),ie=r(t,"H2",{class:!0});var Hs=n(ie);ze=r(Hs,"A",{id:!0,class:!0,href:!0});var _d=n(ze);_a=r(_d,"SPAN",{});var Td=n(_a);w(kt.$$.fragment,Td),Td.forEach(o),_d.forEach(o),Qr=u(Hs),Ta=r(Hs,"SPAN",{});var vd=n(Ta);Yr=l(vd,"DeiTConfig"),vd.forEach(o),Hs.forEach(o),Ds=u(t),q=r(t,"DIV",{class:!0});var dt=n(q);w(xt.$$.fragment,dt),en=u(dt),le=r(dt,"P",{});var Ho=n(le);tn=l(Ho,"This is the configuration class to store the configuration of a "),jo=r(Ho,"A",{href:!0});var bd=n(jo);on=l(bd,"DeiTModel"),bd.forEach(o),an=l(Ho,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),It=r(Ho,"A",{href:!0,rel:!0});var wd=n(It);sn=l(wd,"facebook/deit-base-distilled-patch16-224"),wd.forEach(o),rn=l(Ho,`
architecture.`),Ho.forEach(o),nn=u(dt),de=r(dt,"P",{});var Uo=n(de);ln=l(Uo,"Configuration objects inherit from "),Co=r(Uo,"A",{href:!0});var $d=n(Co);dn=l($d,"PretrainedConfig"),$d.forEach(o),cn=l(Uo,` and can be used to control the model outputs. Read the
documentation from `),Po=r(Uo,"A",{href:!0});var yd=n(Po);hn=l(yd,"PretrainedConfig"),yd.forEach(o),pn=l(Uo," for more information."),Uo.forEach(o),mn=u(dt),w(Ae.$$.fragment,dt),dt.forEach(o),Fs=u(t),ce=r(t,"H2",{class:!0});var Us=n(ce);Ne=r(Us,"A",{id:!0,class:!0,href:!0});var Dd=n(Ne);va=r(Dd,"SPAN",{});var Fd=n(va);w(Mt.$$.fragment,Fd),Fd.forEach(o),Dd.forEach(o),fn=u(Us),ba=r(Us,"SPAN",{});var kd=n(ba);un=l(kd,"DeiTFeatureExtractor"),kd.forEach(o),Us.forEach(o),ks=u(t),z=r(t,"DIV",{class:!0});var ct=n(z);w(Et.$$.fragment,ct),gn=u(ct),wa=r(ct,"P",{});var xd=n(wa);_n=l(xd,"Constructs a DeiT feature extractor."),xd.forEach(o),Tn=u(ct),jt=r(ct,"P",{});var Rs=n(jt);vn=l(Rs,"This feature extractor inherits from "),qo=r(Rs,"A",{href:!0});var Id=n(qo);bn=l(Id,"FeatureExtractionMixin"),Id.forEach(o),wn=l(Rs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Rs.forEach(o),$n=u(ct),ae=r(ct,"DIV",{class:!0});var Ro=n(ae);w(Ct.$$.fragment,Ro),yn=u(Ro),$a=r(Ro,"P",{});var Md=n($a);Dn=l(Md,"Main method to prepare for the model one or several image(s)."),Md.forEach(o),Fn=u(Ro),w(Oe.$$.fragment,Ro),Ro.forEach(o),ct.forEach(o),xs=u(t),he=r(t,"H2",{class:!0});var Js=n(he);Le=r(Js,"A",{id:!0,class:!0,href:!0});var Ed=n(Le);ya=r(Ed,"SPAN",{});var jd=n(ya);w(Pt.$$.fragment,jd),jd.forEach(o),Ed.forEach(o),kn=u(Js),Da=r(Js,"SPAN",{});var Cd=n(Da);xn=l(Cd,"DeiTModel"),Cd.forEach(o),Js.forEach(o),Is=u(t),Z=r(t,"DIV",{class:!0});var Jo=n(Z);w(qt.$$.fragment,Jo),In=u(Jo),zt=r(Jo,"P",{});var Gs=n(zt);Mn=l(Gs,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=r(Gs,"A",{href:!0,rel:!0});var Pd=n(At);En=l(Pd,"torch.nn.Module"),Pd.forEach(o),jn=l(Gs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gs.forEach(o),Cn=u(Jo),W=r(Jo,"DIV",{class:!0});var ht=n(W);w(Nt.$$.fragment,ht),Pn=u(ht),pe=r(ht,"P",{});var Go=n(pe);qn=l(Go,"The "),zo=r(Go,"A",{href:!0});var qd=n(zo);zn=l(qd,"DeiTModel"),qd.forEach(o),An=l(Go," forward method, overrides the "),Fa=r(Go,"CODE",{});var zd=n(Fa);Nn=l(zd,"__call__"),zd.forEach(o),On=l(Go," special method."),Go.forEach(o),Ln=u(ht),w(We.$$.fragment,ht),Wn=u(ht),w(Se.$$.fragment,ht),ht.forEach(o),Jo.forEach(o),Ms=u(t),me=r(t,"H2",{class:!0});var Ks=n(me);Ve=r(Ks,"A",{id:!0,class:!0,href:!0});var Ad=n(Ve);ka=r(Ad,"SPAN",{});var Nd=n(ka);w(Ot.$$.fragment,Nd),Nd.forEach(o),Ad.forEach(o),Sn=u(Ks),xa=r(Ks,"SPAN",{});var Od=n(xa);Vn=l(Od,"DeiTForMaskedImageModeling"),Od.forEach(o),Ks.forEach(o),Es=u(t),Q=r(t,"DIV",{class:!0});var Ko=n(Q);w(Lt.$$.fragment,Ko),Bn=u(Ko),fe=r(Ko,"P",{});var Xo=n(fe);Hn=l(Xo,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Wt=r(Xo,"A",{href:!0,rel:!0});var Ld=n(Wt);Un=l(Ld,"SimMIM"),Ld.forEach(o),Rn=l(Xo,`.
This model is a PyTorch `),St=r(Xo,"A",{href:!0,rel:!0});var Wd=n(St);Jn=l(Wd,"torch.nn.Module"),Wd.forEach(o),Gn=l(Xo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xo.forEach(o),Kn=u(Ko),S=r(Ko,"DIV",{class:!0});var pt=n(S);w(Vt.$$.fragment,pt),Xn=u(pt),ue=r(pt,"P",{});var Zo=n(ue);Zn=l(Zo,"The "),Ao=r(Zo,"A",{href:!0});var Sd=n(Ao);Qn=l(Sd,"DeiTForMaskedImageModeling"),Sd.forEach(o),Yn=l(Zo," forward method, overrides the "),Ia=r(Zo,"CODE",{});var Vd=n(Ia);ei=l(Vd,"__call__"),Vd.forEach(o),ti=l(Zo," special method."),Zo.forEach(o),oi=u(pt),w(Be.$$.fragment,pt),ai=u(pt),w(He.$$.fragment,pt),pt.forEach(o),Ko.forEach(o),js=u(t),ge=r(t,"H2",{class:!0});var Xs=n(ge);Ue=r(Xs,"A",{id:!0,class:!0,href:!0});var Bd=n(Ue);Ma=r(Bd,"SPAN",{});var Hd=n(Ma);w(Bt.$$.fragment,Hd),Hd.forEach(o),Bd.forEach(o),si=u(Xs),Ea=r(Xs,"SPAN",{});var Ud=n(Ea);ri=l(Ud,"DeiTForImageClassification"),Ud.forEach(o),Xs.forEach(o),Cs=u(t),A=r(t,"DIV",{class:!0});var mt=n(A);w(Ht.$$.fragment,mt),ni=u(mt),ja=r(mt,"P",{});var Rd=n(ja);ii=l(Rd,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Rd.forEach(o),li=u(mt),Ut=r(mt,"P",{});var Zs=n(Ut);di=l(Zs,"This model is a PyTorch "),Rt=r(Zs,"A",{href:!0,rel:!0});var Jd=n(Rt);ci=l(Jd,"torch.nn.Module"),Jd.forEach(o),hi=l(Zs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zs.forEach(o),pi=u(mt),V=r(mt,"DIV",{class:!0});var ft=n(V);w(Jt.$$.fragment,ft),mi=u(ft),_e=r(ft,"P",{});var Qo=n(_e);fi=l(Qo,"The "),No=r(Qo,"A",{href:!0});var Gd=n(No);ui=l(Gd,"DeiTForImageClassification"),Gd.forEach(o),gi=l(Qo," forward method, overrides the "),Ca=r(Qo,"CODE",{});var Kd=n(Ca);_i=l(Kd,"__call__"),Kd.forEach(o),Ti=l(Qo," special method."),Qo.forEach(o),vi=u(ft),w(Re.$$.fragment,ft),bi=u(ft),w(Je.$$.fragment,ft),ft.forEach(o),mt.forEach(o),Ps=u(t),Te=r(t,"H2",{class:!0});var Qs=n(Te);Ge=r(Qs,"A",{id:!0,class:!0,href:!0});var Xd=n(Ge);Pa=r(Xd,"SPAN",{});var Zd=n(Pa);w(Gt.$$.fragment,Zd),Zd.forEach(o),Xd.forEach(o),wi=u(Qs),qa=r(Qs,"SPAN",{});var Qd=n(qa);$i=l(Qd,"DeiTForImageClassificationWithTeacher"),Qd.forEach(o),Qs.forEach(o),qs=u(t),E=r(t,"DIV",{class:!0});var G=n(E);w(Kt.$$.fragment,G),yi=u(G),za=r(G,"P",{});var Yd=n(za);Di=l(Yd,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Yd.forEach(o),Fi=u(G),Aa=r(G,"P",{});var ec=n(Aa);ki=l(ec,".. warning::"),ec.forEach(o),xi=u(G),Na=r(G,"P",{});var tc=n(Na);Ii=l(tc,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),tc.forEach(o),Mi=u(G),Xt=r(G,"P",{});var Ys=n(Xt);Ei=l(Ys,"This model is a PyTorch "),Zt=r(Ys,"A",{href:!0,rel:!0});var oc=n(Zt);ji=l(oc,"torch.nn.Module"),oc.forEach(o),Ci=l(Ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys.forEach(o),Pi=u(G),B=r(G,"DIV",{class:!0});var ut=n(B);w(Qt.$$.fragment,ut),qi=u(ut),ve=r(ut,"P",{});var Yo=n(ve);zi=l(Yo,"The "),Oo=r(Yo,"A",{href:!0});var ac=n(Oo);Ai=l(ac,"DeiTForImageClassificationWithTeacher"),ac.forEach(o),Ni=l(Yo," forward method, overrides the "),Oa=r(Yo,"CODE",{});var sc=n(Oa);Oi=l(sc,"__call__"),sc.forEach(o),Li=l(Yo," special method."),Yo.forEach(o),Wi=u(ut),w(Ke.$$.fragment,ut),Si=u(ut),w(Xe.$$.fragment,ut),ut.forEach(o),G.forEach(o),zs=u(t),be=r(t,"H2",{class:!0});var er=n(be);Ze=r(er,"A",{id:!0,class:!0,href:!0});var rc=n(Ze);La=r(rc,"SPAN",{});var nc=n(La);w(Yt.$$.fragment,nc),nc.forEach(o),rc.forEach(o),Vi=u(er),Wa=r(er,"SPAN",{});var ic=n(Wa);Bi=l(ic,"TFDeiTModel"),ic.forEach(o),er.forEach(o),As=u(t),Y=r(t,"DIV",{class:!0});var ea=n(Y);w(eo.$$.fragment,ea),Hi=u(ea),to=r(ea,"P",{});var tr=n(to);Ui=l(tr,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),oo=r(tr,"A",{href:!0,rel:!0});var lc=n(oo);Ri=l(lc,"tf.keras.layers.Layer"),lc.forEach(o),Ji=l(tr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),tr.forEach(o),Gi=u(ea),H=r(ea,"DIV",{class:!0});var gt=n(H);w(ao.$$.fragment,gt),Ki=u(gt),we=r(gt,"P",{});var ta=n(we);Xi=l(ta,"The "),Lo=r(ta,"A",{href:!0});var dc=n(Lo);Zi=l(dc,"TFDeiTModel"),dc.forEach(o),Qi=l(ta," forward method, overrides the "),Sa=r(ta,"CODE",{});var cc=n(Sa);Yi=l(cc,"__call__"),cc.forEach(o),el=l(ta," special method."),ta.forEach(o),tl=u(gt),w(Qe.$$.fragment,gt),ol=u(gt),w(Ye.$$.fragment,gt),gt.forEach(o),ea.forEach(o),Ns=u(t),$e=r(t,"H2",{class:!0});var or=n($e);et=r(or,"A",{id:!0,class:!0,href:!0});var hc=n(et);Va=r(hc,"SPAN",{});var pc=n(Va);w(so.$$.fragment,pc),pc.forEach(o),hc.forEach(o),al=u(or),Ba=r(or,"SPAN",{});var mc=n(Ba);sl=l(mc,"TFDeiTForMaskedImageModeling"),mc.forEach(o),or.forEach(o),Os=u(t),ee=r(t,"DIV",{class:!0});var oa=n(ee);w(ro.$$.fragment,oa),rl=u(oa),ye=r(oa,"P",{});var aa=n(ye);nl=l(aa,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),no=r(aa,"A",{href:!0,rel:!0});var fc=n(no);il=l(fc,"SimMIM"),fc.forEach(o),ll=l(aa,`.
This model is a TensorFlow
`),io=r(aa,"A",{href:!0,rel:!0});var uc=n(io);dl=l(uc,"tf.keras.layers.Layer"),uc.forEach(o),cl=l(aa,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),aa.forEach(o),hl=u(oa),U=r(oa,"DIV",{class:!0});var _t=n(U);w(lo.$$.fragment,_t),pl=u(_t),De=r(_t,"P",{});var sa=n(De);ml=l(sa,"The "),Wo=r(sa,"A",{href:!0});var gc=n(Wo);fl=l(gc,"TFDeiTForMaskedImageModeling"),gc.forEach(o),ul=l(sa," forward method, overrides the "),Ha=r(sa,"CODE",{});var _c=n(Ha);gl=l(_c,"__call__"),_c.forEach(o),_l=l(sa," special method."),sa.forEach(o),Tl=u(_t),w(tt.$$.fragment,_t),vl=u(_t),w(ot.$$.fragment,_t),_t.forEach(o),oa.forEach(o),Ls=u(t),Fe=r(t,"H2",{class:!0});var ar=n(Fe);at=r(ar,"A",{id:!0,class:!0,href:!0});var Tc=n(at);Ua=r(Tc,"SPAN",{});var vc=n(Ua);w(co.$$.fragment,vc),vc.forEach(o),Tc.forEach(o),bl=u(ar),Ra=r(ar,"SPAN",{});var bc=n(Ra);wl=l(bc,"TFDeiTForImageClassification"),bc.forEach(o),ar.forEach(o),Ws=u(t),N=r(t,"DIV",{class:!0});var Tt=n(N);w(ho.$$.fragment,Tt),$l=u(Tt),Ja=r(Tt,"P",{});var wc=n(Ja);yl=l(wc,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),wc.forEach(o),Dl=u(Tt),po=r(Tt,"P",{});var sr=n(po);Fl=l(sr,`This model is a TensorFlow
`),mo=r(sr,"A",{href:!0,rel:!0});var $c=n(mo);kl=l($c,"tf.keras.layers.Layer"),$c.forEach(o),xl=l(sr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),sr.forEach(o),Il=u(Tt),R=r(Tt,"DIV",{class:!0});var vt=n(R);w(fo.$$.fragment,vt),Ml=u(vt),ke=r(vt,"P",{});var ra=n(ke);El=l(ra,"The "),So=r(ra,"A",{href:!0});var yc=n(So);jl=l(yc,"TFDeiTForImageClassification"),yc.forEach(o),Cl=l(ra," forward method, overrides the "),Ga=r(ra,"CODE",{});var Dc=n(Ga);Pl=l(Dc,"__call__"),Dc.forEach(o),ql=l(ra," special method."),ra.forEach(o),zl=u(vt),w(st.$$.fragment,vt),Al=u(vt),w(rt.$$.fragment,vt),vt.forEach(o),Tt.forEach(o),Ss=u(t),xe=r(t,"H2",{class:!0});var rr=n(xe);nt=r(rr,"A",{id:!0,class:!0,href:!0});var Fc=n(nt);Ka=r(Fc,"SPAN",{});var kc=n(Ka);w(uo.$$.fragment,kc),kc.forEach(o),Fc.forEach(o),Nl=u(rr),Xa=r(rr,"SPAN",{});var xc=n(Xa);Ol=l(xc,"TFDeiTForImageClassificationWithTeacher"),xc.forEach(o),rr.forEach(o),Vs=u(t),j=r(t,"DIV",{class:!0});var K=n(j);w(go.$$.fragment,K),Ll=u(K),Za=r(K,"P",{});var Ic=n(Za);Wl=l(Ic,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Ic.forEach(o),Sl=u(K),Qa=r(K,"P",{});var Mc=n(Qa);Vl=l(Mc,".. warning::"),Mc.forEach(o),Bl=u(K),Ya=r(K,"P",{});var Ec=n(Ya);Hl=l(Ec,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ec.forEach(o),Ul=u(K),_o=r(K,"P",{});var nr=n(_o);Rl=l(nr,`This model is a TensorFlow
`),To=r(nr,"A",{href:!0,rel:!0});var jc=n(To);Jl=l(jc,"tf.keras.layers.Layer"),jc.forEach(o),Gl=l(nr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),nr.forEach(o),Kl=u(K),J=r(K,"DIV",{class:!0});var bt=n(J);w(vo.$$.fragment,bt),Xl=u(bt),Ie=r(bt,"P",{});var na=n(Ie);Zl=l(na,"The "),Vo=r(na,"A",{href:!0});var Cc=n(Vo);Ql=l(Cc,"TFDeiTForImageClassificationWithTeacher"),Cc.forEach(o),Yl=l(na," forward method, overrides the "),es=r(na,"CODE",{});var Pc=n(es);ed=l(Pc,"__call__"),Pc.forEach(o),td=l(na," special method."),na.forEach(o),od=u(bt),w(it.$$.fragment,bt),ad=u(bt),w(lt.$$.fragment,bt),bt.forEach(o),K.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(rh)),p(h,"id","deit"),p(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(h,"href","#deit"),p(m,"class","relative group"),p(qe,"id","overview"),p(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qe,"href","#overview"),p(re,"class","relative group"),p($t,"href","https://arxiv.org/abs/2012.12877"),p($t,"rel","nofollow"),p($o,"href","vit"),p(yt,"href","https://arxiv.org/abs/2010.11929"),p(yt,"rel","nofollow"),p(ko,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTForImageClassification"),p(xo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),p(Io,"href","/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTModel"),p(Mo,"href","/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTForImageClassification"),p(Eo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTFeatureExtractor"),p(Dt,"href","https://huggingface.co/nielsr"),p(Dt,"rel","nofollow"),p(Ft,"href","https://huggingface.co/amyeroberts"),p(Ft,"rel","nofollow"),p(ze,"id","transformers.DeiTConfig"),p(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ze,"href","#transformers.DeiTConfig"),p(ie,"class","relative group"),p(jo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTModel"),p(It,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),p(It,"rel","nofollow"),p(Co,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),p(Po,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ne,"id","transformers.DeiTFeatureExtractor"),p(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ne,"href","#transformers.DeiTFeatureExtractor"),p(ce,"class","relative group"),p(qo,"href","/docs/transformers/v4.21.3/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),p(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Le,"id","transformers.DeiTModel"),p(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Le,"href","#transformers.DeiTModel"),p(he,"class","relative group"),p(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(At,"rel","nofollow"),p(zo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTModel"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ve,"id","transformers.DeiTForMaskedImageModeling"),p(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ve,"href","#transformers.DeiTForMaskedImageModeling"),p(me,"class","relative group"),p(Wt,"href","https://arxiv.org/abs/2111.09886"),p(Wt,"rel","nofollow"),p(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(St,"rel","nofollow"),p(Ao,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ue,"id","transformers.DeiTForImageClassification"),p(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ue,"href","#transformers.DeiTForImageClassification"),p(ge,"class","relative group"),p(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Rt,"rel","nofollow"),p(No,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTForImageClassification"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ge,"id","transformers.DeiTForImageClassificationWithTeacher"),p(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ge,"href","#transformers.DeiTForImageClassificationWithTeacher"),p(Te,"class","relative group"),p(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Zt,"rel","nofollow"),p(Oo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ze,"id","transformers.TFDeiTModel"),p(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ze,"href","#transformers.TFDeiTModel"),p(be,"class","relative group"),p(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(oo,"rel","nofollow"),p(Lo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.TFDeiTModel"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(et,"id","transformers.TFDeiTForMaskedImageModeling"),p(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(et,"href","#transformers.TFDeiTForMaskedImageModeling"),p($e,"class","relative group"),p(no,"href","https://arxiv.org/abs/2111.09886"),p(no,"rel","nofollow"),p(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(io,"rel","nofollow"),p(Wo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.TFDeiTForMaskedImageModeling"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(at,"id","transformers.TFDeiTForImageClassification"),p(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(at,"href","#transformers.TFDeiTForImageClassification"),p(Fe,"class","relative group"),p(mo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(mo,"rel","nofollow"),p(So,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.TFDeiTForImageClassification"),p(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(nt,"id","transformers.TFDeiTForImageClassificationWithTeacher"),p(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(nt,"href","#transformers.TFDeiTForImageClassificationWithTeacher"),p(xe,"class","relative group"),p(To,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(To,"rel","nofollow"),p(Vo,"href","/docs/transformers/v4.21.3/en/model_doc/deit#transformers.TFDeiTForImageClassificationWithTeacher"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),T(t,v,g),T(t,m,g),e(m,h),e(h,_),$(a,_,null),e(m,c),e(m,x),e(x,ir),T(t,us,g),$(Pe,t,g),T(t,gs,g),T(t,re,g),e(re,qe),e(qe,ia),$(wt,ia,null),e(re,lr),e(re,la),e(la,dr),T(t,_s,g),T(t,L,g),e(L,cr),e(L,$t),e($t,hr),e(L,pr),e(L,$o),e($o,mr),e(L,fr),e(L,yt),e(yt,ur),e(L,gr),T(t,Ts,g),T(t,yo,g),e(yo,_r),T(t,vs,g),T(t,Do,g),e(Do,da),e(da,Tr),T(t,bs,g),T(t,Fo,g),e(Fo,vr),T(t,ws,g),T(t,P,g),e(P,ca),e(ca,br),e(P,wr),e(P,ne),e(ne,$r),e(ne,ko),e(ko,yr),e(ne,Dr),e(ne,xo),e(xo,Fr),e(ne,kr),e(P,xr),e(P,ha),e(ha,Ir),e(P,Mr),e(P,pa),e(pa,Er),e(P,jr),e(P,I),e(I,Cr),e(I,Io),e(Io,Pr),e(I,qr),e(I,Mo),e(Mo,zr),e(I,Ar),e(I,ma),e(ma,Nr),e(I,Or),e(I,fa),e(fa,Lr),e(I,Wr),e(I,ua),e(ua,Sr),e(I,Vr),e(I,ga),e(ga,Br),e(I,Hr),e(I,Eo),e(Eo,Ur),e(I,Rr),T(t,$s,g),T(t,oe,g),e(oe,Jr),e(oe,Dt),e(Dt,Gr),e(oe,Kr),e(oe,Ft),e(Ft,Xr),e(oe,Zr),T(t,ys,g),T(t,ie,g),e(ie,ze),e(ze,_a),$(kt,_a,null),e(ie,Qr),e(ie,Ta),e(Ta,Yr),T(t,Ds,g),T(t,q,g),$(xt,q,null),e(q,en),e(q,le),e(le,tn),e(le,jo),e(jo,on),e(le,an),e(le,It),e(It,sn),e(le,rn),e(q,nn),e(q,de),e(de,ln),e(de,Co),e(Co,dn),e(de,cn),e(de,Po),e(Po,hn),e(de,pn),e(q,mn),$(Ae,q,null),T(t,Fs,g),T(t,ce,g),e(ce,Ne),e(Ne,va),$(Mt,va,null),e(ce,fn),e(ce,ba),e(ba,un),T(t,ks,g),T(t,z,g),$(Et,z,null),e(z,gn),e(z,wa),e(wa,_n),e(z,Tn),e(z,jt),e(jt,vn),e(jt,qo),e(qo,bn),e(jt,wn),e(z,$n),e(z,ae),$(Ct,ae,null),e(ae,yn),e(ae,$a),e($a,Dn),e(ae,Fn),$(Oe,ae,null),T(t,xs,g),T(t,he,g),e(he,Le),e(Le,ya),$(Pt,ya,null),e(he,kn),e(he,Da),e(Da,xn),T(t,Is,g),T(t,Z,g),$(qt,Z,null),e(Z,In),e(Z,zt),e(zt,Mn),e(zt,At),e(At,En),e(zt,jn),e(Z,Cn),e(Z,W),$(Nt,W,null),e(W,Pn),e(W,pe),e(pe,qn),e(pe,zo),e(zo,zn),e(pe,An),e(pe,Fa),e(Fa,Nn),e(pe,On),e(W,Ln),$(We,W,null),e(W,Wn),$(Se,W,null),T(t,Ms,g),T(t,me,g),e(me,Ve),e(Ve,ka),$(Ot,ka,null),e(me,Sn),e(me,xa),e(xa,Vn),T(t,Es,g),T(t,Q,g),$(Lt,Q,null),e(Q,Bn),e(Q,fe),e(fe,Hn),e(fe,Wt),e(Wt,Un),e(fe,Rn),e(fe,St),e(St,Jn),e(fe,Gn),e(Q,Kn),e(Q,S),$(Vt,S,null),e(S,Xn),e(S,ue),e(ue,Zn),e(ue,Ao),e(Ao,Qn),e(ue,Yn),e(ue,Ia),e(Ia,ei),e(ue,ti),e(S,oi),$(Be,S,null),e(S,ai),$(He,S,null),T(t,js,g),T(t,ge,g),e(ge,Ue),e(Ue,Ma),$(Bt,Ma,null),e(ge,si),e(ge,Ea),e(Ea,ri),T(t,Cs,g),T(t,A,g),$(Ht,A,null),e(A,ni),e(A,ja),e(ja,ii),e(A,li),e(A,Ut),e(Ut,di),e(Ut,Rt),e(Rt,ci),e(Ut,hi),e(A,pi),e(A,V),$(Jt,V,null),e(V,mi),e(V,_e),e(_e,fi),e(_e,No),e(No,ui),e(_e,gi),e(_e,Ca),e(Ca,_i),e(_e,Ti),e(V,vi),$(Re,V,null),e(V,bi),$(Je,V,null),T(t,Ps,g),T(t,Te,g),e(Te,Ge),e(Ge,Pa),$(Gt,Pa,null),e(Te,wi),e(Te,qa),e(qa,$i),T(t,qs,g),T(t,E,g),$(Kt,E,null),e(E,yi),e(E,za),e(za,Di),e(E,Fi),e(E,Aa),e(Aa,ki),e(E,xi),e(E,Na),e(Na,Ii),e(E,Mi),e(E,Xt),e(Xt,Ei),e(Xt,Zt),e(Zt,ji),e(Xt,Ci),e(E,Pi),e(E,B),$(Qt,B,null),e(B,qi),e(B,ve),e(ve,zi),e(ve,Oo),e(Oo,Ai),e(ve,Ni),e(ve,Oa),e(Oa,Oi),e(ve,Li),e(B,Wi),$(Ke,B,null),e(B,Si),$(Xe,B,null),T(t,zs,g),T(t,be,g),e(be,Ze),e(Ze,La),$(Yt,La,null),e(be,Vi),e(be,Wa),e(Wa,Bi),T(t,As,g),T(t,Y,g),$(eo,Y,null),e(Y,Hi),e(Y,to),e(to,Ui),e(to,oo),e(oo,Ri),e(to,Ji),e(Y,Gi),e(Y,H),$(ao,H,null),e(H,Ki),e(H,we),e(we,Xi),e(we,Lo),e(Lo,Zi),e(we,Qi),e(we,Sa),e(Sa,Yi),e(we,el),e(H,tl),$(Qe,H,null),e(H,ol),$(Ye,H,null),T(t,Ns,g),T(t,$e,g),e($e,et),e(et,Va),$(so,Va,null),e($e,al),e($e,Ba),e(Ba,sl),T(t,Os,g),T(t,ee,g),$(ro,ee,null),e(ee,rl),e(ee,ye),e(ye,nl),e(ye,no),e(no,il),e(ye,ll),e(ye,io),e(io,dl),e(ye,cl),e(ee,hl),e(ee,U),$(lo,U,null),e(U,pl),e(U,De),e(De,ml),e(De,Wo),e(Wo,fl),e(De,ul),e(De,Ha),e(Ha,gl),e(De,_l),e(U,Tl),$(tt,U,null),e(U,vl),$(ot,U,null),T(t,Ls,g),T(t,Fe,g),e(Fe,at),e(at,Ua),$(co,Ua,null),e(Fe,bl),e(Fe,Ra),e(Ra,wl),T(t,Ws,g),T(t,N,g),$(ho,N,null),e(N,$l),e(N,Ja),e(Ja,yl),e(N,Dl),e(N,po),e(po,Fl),e(po,mo),e(mo,kl),e(po,xl),e(N,Il),e(N,R),$(fo,R,null),e(R,Ml),e(R,ke),e(ke,El),e(ke,So),e(So,jl),e(ke,Cl),e(ke,Ga),e(Ga,Pl),e(ke,ql),e(R,zl),$(st,R,null),e(R,Al),$(rt,R,null),T(t,Ss,g),T(t,xe,g),e(xe,nt),e(nt,Ka),$(uo,Ka,null),e(xe,Nl),e(xe,Xa),e(Xa,Ol),T(t,Vs,g),T(t,j,g),$(go,j,null),e(j,Ll),e(j,Za),e(Za,Wl),e(j,Sl),e(j,Qa),e(Qa,Vl),e(j,Bl),e(j,Ya),e(Ya,Hl),e(j,Ul),e(j,_o),e(_o,Rl),e(_o,To),e(To,Jl),e(_o,Gl),e(j,Kl),e(j,J),$(vo,J,null),e(J,Xl),e(J,Ie),e(Ie,Zl),e(Ie,Vo),e(Vo,Ql),e(Ie,Yl),e(Ie,es),e(es,ed),e(Ie,td),e(J,od),$(it,J,null),e(J,ad),$(lt,J,null),Bs=!0},p(t,[g]){const bo={};g&2&&(bo.$$scope={dirty:g,ctx:t}),Pe.$set(bo);const ts={};g&2&&(ts.$$scope={dirty:g,ctx:t}),Ae.$set(ts);const os={};g&2&&(os.$$scope={dirty:g,ctx:t}),Oe.$set(os);const as={};g&2&&(as.$$scope={dirty:g,ctx:t}),We.$set(as);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:t}),Se.$set(wo);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:t}),Be.$set(ss);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:t}),He.$set(rs);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:t}),Re.$set(ns);const te={};g&2&&(te.$$scope={dirty:g,ctx:t}),Je.$set(te);const is={};g&2&&(is.$$scope={dirty:g,ctx:t}),Ke.$set(is);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:t}),Xe.$set(ls);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:t}),Qe.$set(ds);const cs={};g&2&&(cs.$$scope={dirty:g,ctx:t}),Ye.$set(cs);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:t}),tt.$set(hs);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:t}),ot.$set(ps);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:t}),st.$set(ms);const O={};g&2&&(O.$$scope={dirty:g,ctx:t}),rt.$set(O);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:t}),it.$set(fs);const Me={};g&2&&(Me.$$scope={dirty:g,ctx:t}),lt.$set(Me)},i(t){Bs||(y(a.$$.fragment,t),y(Pe.$$.fragment,t),y(wt.$$.fragment,t),y(kt.$$.fragment,t),y(xt.$$.fragment,t),y(Ae.$$.fragment,t),y(Mt.$$.fragment,t),y(Et.$$.fragment,t),y(Ct.$$.fragment,t),y(Oe.$$.fragment,t),y(Pt.$$.fragment,t),y(qt.$$.fragment,t),y(Nt.$$.fragment,t),y(We.$$.fragment,t),y(Se.$$.fragment,t),y(Ot.$$.fragment,t),y(Lt.$$.fragment,t),y(Vt.$$.fragment,t),y(Be.$$.fragment,t),y(He.$$.fragment,t),y(Bt.$$.fragment,t),y(Ht.$$.fragment,t),y(Jt.$$.fragment,t),y(Re.$$.fragment,t),y(Je.$$.fragment,t),y(Gt.$$.fragment,t),y(Kt.$$.fragment,t),y(Qt.$$.fragment,t),y(Ke.$$.fragment,t),y(Xe.$$.fragment,t),y(Yt.$$.fragment,t),y(eo.$$.fragment,t),y(ao.$$.fragment,t),y(Qe.$$.fragment,t),y(Ye.$$.fragment,t),y(so.$$.fragment,t),y(ro.$$.fragment,t),y(lo.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(co.$$.fragment,t),y(ho.$$.fragment,t),y(fo.$$.fragment,t),y(st.$$.fragment,t),y(rt.$$.fragment,t),y(uo.$$.fragment,t),y(go.$$.fragment,t),y(vo.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),Bs=!0)},o(t){D(a.$$.fragment,t),D(Pe.$$.fragment,t),D(wt.$$.fragment,t),D(kt.$$.fragment,t),D(xt.$$.fragment,t),D(Ae.$$.fragment,t),D(Mt.$$.fragment,t),D(Et.$$.fragment,t),D(Ct.$$.fragment,t),D(Oe.$$.fragment,t),D(Pt.$$.fragment,t),D(qt.$$.fragment,t),D(Nt.$$.fragment,t),D(We.$$.fragment,t),D(Se.$$.fragment,t),D(Ot.$$.fragment,t),D(Lt.$$.fragment,t),D(Vt.$$.fragment,t),D(Be.$$.fragment,t),D(He.$$.fragment,t),D(Bt.$$.fragment,t),D(Ht.$$.fragment,t),D(Jt.$$.fragment,t),D(Re.$$.fragment,t),D(Je.$$.fragment,t),D(Gt.$$.fragment,t),D(Kt.$$.fragment,t),D(Qt.$$.fragment,t),D(Ke.$$.fragment,t),D(Xe.$$.fragment,t),D(Yt.$$.fragment,t),D(eo.$$.fragment,t),D(ao.$$.fragment,t),D(Qe.$$.fragment,t),D(Ye.$$.fragment,t),D(so.$$.fragment,t),D(ro.$$.fragment,t),D(lo.$$.fragment,t),D(tt.$$.fragment,t),D(ot.$$.fragment,t),D(co.$$.fragment,t),D(ho.$$.fragment,t),D(fo.$$.fragment,t),D(st.$$.fragment,t),D(rt.$$.fragment,t),D(uo.$$.fragment,t),D(go.$$.fragment,t),D(vo.$$.fragment,t),D(it.$$.fragment,t),D(lt.$$.fragment,t),Bs=!1},d(t){o(d),t&&o(v),t&&o(m),F(a),t&&o(us),F(Pe,t),t&&o(gs),t&&o(re),F(wt),t&&o(_s),t&&o(L),t&&o(Ts),t&&o(yo),t&&o(vs),t&&o(Do),t&&o(bs),t&&o(Fo),t&&o(ws),t&&o(P),t&&o($s),t&&o(oe),t&&o(ys),t&&o(ie),F(kt),t&&o(Ds),t&&o(q),F(xt),F(Ae),t&&o(Fs),t&&o(ce),F(Mt),t&&o(ks),t&&o(z),F(Et),F(Ct),F(Oe),t&&o(xs),t&&o(he),F(Pt),t&&o(Is),t&&o(Z),F(qt),F(Nt),F(We),F(Se),t&&o(Ms),t&&o(me),F(Ot),t&&o(Es),t&&o(Q),F(Lt),F(Vt),F(Be),F(He),t&&o(js),t&&o(ge),F(Bt),t&&o(Cs),t&&o(A),F(Ht),F(Jt),F(Re),F(Je),t&&o(Ps),t&&o(Te),F(Gt),t&&o(qs),t&&o(E),F(Kt),F(Qt),F(Ke),F(Xe),t&&o(zs),t&&o(be),F(Yt),t&&o(As),t&&o(Y),F(eo),F(ao),F(Qe),F(Ye),t&&o(Ns),t&&o($e),F(so),t&&o(Os),t&&o(ee),F(ro),F(lo),F(tt),F(ot),t&&o(Ls),t&&o(Fe),F(co),t&&o(Ws),t&&o(N),F(ho),F(fo),F(st),F(rt),t&&o(Ss),t&&o(xe),F(uo),t&&o(Vs),t&&o(j),F(go),F(vo),F(it),F(lt)}}}const rh={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTFeatureExtractor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"},{local:"transformers.TFDeiTModel",title:"TFDeiTModel"},{local:"transformers.TFDeiTForMaskedImageModeling",title:"TFDeiTForMaskedImageModeling"},{local:"transformers.TFDeiTForImageClassification",title:"TFDeiTForImageClassification"},{local:"transformers.TFDeiTForImageClassificationWithTeacher",title:"TFDeiTForImageClassificationWithTeacher"}],title:"DeiT"};function nh(k){return Oc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mh extends qc{constructor(d){super();zc(this,d,nh,sh,Ac,{})}}export{mh as default,rh as metadata};
