import{S as qc,i as zc,s as Ac,e as s,k as f,w,t as i,M as Nc,c as n,d as o,m as u,a as r,x as v,h as l,b as p,G as e,g as T,y as $,q as y,o as D,B as F,v as Oc,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as M}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ce}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as X}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Lc(k){let d,b,m,h,_;return{c(){d=s("p"),b=i(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=s("a"),h=i("Github Issue"),_=i("."),this.h()},l(a){d=n(a,"P",{});var c=r(d);b=l(c,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=n(c,"A",{href:!0,rel:!0});var x=r(m);h=l(x,"Github Issue"),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){p(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),p(m,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Wc(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTModel, DeiTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Sc(k){let d,b;return{c(){d=s("p"),b=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){d=n(m,"P",{});var h=r(d);b=l(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(m,h){T(m,d,h),e(d,b)},d(m){m&&o(d)}}}function Vc(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Bc(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Hc(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Uc(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Rc(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Jc(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=s("p"),b=i("Examples:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Gc(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Kc(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Xc(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Zc(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function Qc(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function Yc(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function eh(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function th(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassification
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
predicted_class_idx = tf.math.argmax(logits, axis=-1)[0]
print("Predicted class:", model.config.id2label[int(predicted_class_idx)])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, TFDeiTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])
Predicted <span class="hljs-keyword">class</span>: ptarmigan`}}),{c(){d=s("p"),b=i("Examples:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function oh(k){let d,b,m,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(c,"CODE",{});var x=r(m);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,m),e(m,h),e(d,_)},d(a){a&&o(d)}}}function ah(k){let d,b,m,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),m=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),m=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,m,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(m),F(h,a)}}}function sh(k){let d,b,m,h,_,a,c,x,ln,us,Pe,gs,ne,qe,ia,vt,dn,la,cn,_s,L,hn,$t,pn,mn,$o,fn,un,yt,gn,_n,Ts,yo,Tn,bs,Do,da,bn,ws,Fo,wn,vs,P,ca,vn,$n,re,yn,ko,Dn,Fn,xo,kn,xn,In,ha,Mn,En,pa,jn,Cn,I,Pn,Io,qn,zn,Mo,An,Nn,ma,On,Ln,fa,Wn,Sn,ua,Vn,Bn,ga,Hn,Un,Eo,Rn,Jn,$s,oe,Gn,Dt,Kn,Xn,Ft,Zn,Qn,ys,ie,ze,_a,kt,Yn,Ta,er,Ds,q,xt,tr,le,or,jo,ar,sr,It,nr,rr,ir,de,lr,Co,dr,cr,Po,hr,pr,mr,Ae,Fs,ce,Ne,ba,Mt,fr,wa,ur,ks,z,Et,gr,va,_r,Tr,jt,br,qo,wr,vr,$r,ae,Ct,yr,$a,Dr,Fr,Oe,xs,he,Le,ya,Pt,kr,Da,xr,Is,Z,qt,Ir,zt,Mr,At,Er,jr,Cr,W,Nt,Pr,pe,qr,zo,zr,Ar,Fa,Nr,Or,Lr,We,Wr,Se,Ms,me,Ve,ka,Ot,Sr,xa,Vr,Es,Q,Lt,Br,fe,Hr,Wt,Ur,Rr,St,Jr,Gr,Kr,S,Vt,Xr,ue,Zr,Ao,Qr,Yr,Ia,ei,ti,oi,Be,ai,He,js,ge,Ue,Ma,Bt,si,Ea,ni,Cs,A,Ht,ri,ja,ii,li,Ut,di,Rt,ci,hi,pi,V,Jt,mi,_e,fi,No,ui,gi,Ca,_i,Ti,bi,Re,wi,Je,Ps,Te,Ge,Pa,Gt,vi,qa,$i,qs,E,Kt,yi,za,Di,Fi,Aa,ki,xi,Na,Ii,Mi,Xt,Ei,Zt,ji,Ci,Pi,B,Qt,qi,be,zi,Oo,Ai,Ni,Oa,Oi,Li,Wi,Ke,Si,Xe,zs,we,Ze,La,Yt,Vi,Wa,Bi,As,Y,eo,Hi,to,Ui,oo,Ri,Ji,Gi,H,ao,Ki,ve,Xi,Lo,Zi,Qi,Sa,Yi,el,tl,Qe,ol,Ye,Ns,$e,et,Va,so,al,Ba,sl,Os,ee,no,nl,ye,rl,ro,il,ll,io,dl,cl,hl,U,lo,pl,De,ml,Wo,fl,ul,Ha,gl,_l,Tl,tt,bl,ot,Ls,Fe,at,Ua,co,wl,Ra,vl,Ws,N,ho,$l,Ja,yl,Dl,po,Fl,mo,kl,xl,Il,R,fo,Ml,ke,El,So,jl,Cl,Ga,Pl,ql,zl,st,Al,nt,Ss,xe,rt,Ka,uo,Nl,Xa,Ol,Vs,j,go,Ll,Za,Wl,Sl,Qa,Vl,Bl,Ya,Hl,Ul,_o,Rl,To,Jl,Gl,Kl,J,bo,Xl,Ie,Zl,Vo,Ql,Yl,es,ed,td,od,it,ad,lt,Bs;return a=new X({}),Pe=new se({props:{$$slots:{default:[Lc]},$$scope:{ctx:k}}}),vt=new X({}),kt=new X({}),xt=new M({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/configuration_deit.py#L37"}}),Ae=new Ee({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[Wc]},$$scope:{ctx:k}}}),Mt=new X({}),Et=new M({props:{name:"class transformers.DeiTFeatureExtractor",anchor:"transformers.DeiTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/feature_extraction_deit.py#L36"}}),Ct=new M({props:{name:"__call__",anchor:"transformers.DeiTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DeiTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/feature_extraction_deit.py#L91",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Oe=new se({props:{warning:!0,$$slots:{default:[Sc]},$$scope:{ctx:k}}}),Pt=new X({}),qt=new M({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L457"}}),Nt=new M({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L482",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new se({props:{$$slots:{default:[Vc]},$$scope:{ctx:k}}}),Se=new Ee({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[Bc]},$$scope:{ctx:k}}}),Ot=new X({}),Lt=new M({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L562"}}),Vt=new M({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L580",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new se({props:{$$slots:{default:[Hc]},$$scope:{ctx:k}}}),He=new Ee({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[Uc]},$$scope:{ctx:k}}}),Bt=new X({}),Ht=new M({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L674"}}),Jt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L687",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new se({props:{$$slots:{default:[Rc]},$$scope:{ctx:k}}}),Je=new Ee({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[Jc]},$$scope:{ctx:k}}}),Gt=new X({}),Kt=new M({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L823"}}),Qt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L841",returnDescription:`
<p>A <code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
`}}),Ke=new se({props:{$$slots:{default:[Gc]},$$scope:{ctx:k}}}),Xe=new Ee({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[Kc]},$$scope:{ctx:k}}}),Yt=new X({}),eo=new M({props:{name:"class transformers.TFDeiTModel",anchor:"transformers.TFDeiTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L641"}}),ao=new M({props:{name:"call",anchor:"transformers.TFDeiTModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L651",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qe=new se({props:{$$slots:{default:[Xc]},$$scope:{ctx:k}}}),Ye=new Ee({props:{anchor:"transformers.TFDeiTModel.call.example",$$slots:{default:[Zc]},$$scope:{ctx:k}}}),so=new X({}),no=new M({props:{name:"class transformers.TFDeiTForMaskedImageModeling",anchor:"transformers.TFDeiTForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L761"}}),lo=new M({props:{name:"call",anchor:"transformers.TFDeiTForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of type bool and shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L768",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tt=new se({props:{$$slots:{default:[Qc]},$$scope:{ctx:k}}}),ot=new Ee({props:{anchor:"transformers.TFDeiTForMaskedImageModeling.call.example",$$slots:{default:[Yc]},$$scope:{ctx:k}}}),co=new X({}),ho=new M({props:{name:"class transformers.TFDeiTForImageClassification",anchor:"transformers.TFDeiTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L882"}}),fo=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L896",returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
`}}),st=new se({props:{$$slots:{default:[eh]},$$scope:{ctx:k}}}),nt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassification.call.example",$$slots:{default:[th]},$$scope:{ctx:k}}}),uo=new X({}),go=new M({props:{name:"class transformers.TFDeiTForImageClassificationWithTeacher",anchor:"transformers.TFDeiTForImageClassificationWithTeacher",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L990"}}),bo=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L1009",returnDescription:`
<p>A <code>transformers.models.deit.modeling_tf_deit.TFDeiTForImageClassificationWithTeacherOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig"
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
`}}),it=new se({props:{$$slots:{default:[oh]},$$scope:{ctx:k}}}),lt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.example",$$slots:{default:[ah]},$$scope:{ctx:k}}}),{c(){d=s("meta"),b=f(),m=s("h1"),h=s("a"),_=s("span"),w(a.$$.fragment),c=f(),x=s("span"),ln=i("DeiT"),us=f(),w(Pe.$$.fragment),gs=f(),ne=s("h2"),qe=s("a"),ia=s("span"),w(vt.$$.fragment),dn=f(),la=s("span"),cn=i("Overview"),_s=f(),L=s("p"),hn=i("The DeiT model was proposed in "),$t=s("a"),pn=i("Training data-efficient image transformers & distillation through attention"),mn=i(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),$o=s("a"),fn=i("Vision Transformer (ViT)"),un=i(" introduced in "),yt=s("a"),gn=i("Dosovitskiy et al., 2020"),_n=i(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),Ts=f(),yo=s("p"),Tn=i("The abstract from the paper is the following:"),bs=f(),Do=s("p"),da=s("em"),bn=i(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ws=f(),Fo=s("p"),wn=i("Tips:"),vs=f(),P=s("ul"),ca=s("li"),vn=i(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),$n=f(),re=s("li"),yn=i(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),ko=s("a"),Dn=i("DeiTForImageClassification"),Fn=i(` and (2) corresponds to
`),xo=s("a"),kn=i("DeiTForImageClassificationWithTeacher"),xn=i("."),In=f(),ha=s("li"),Mn=i(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),En=f(),pa=s("li"),jn=i(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),Cn=f(),I=s("li"),Pn=i(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Io=s("a"),qn=i("ViTModel"),zn=i(" or "),Mo=s("a"),An=i("ViTForImageClassification"),Nn=i(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ma=s("em"),On=i("facebook/deit-tiny-patch16-224"),Ln=i(", "),fa=s("em"),Wn=i("facebook/deit-small-patch16-224"),Sn=i(", "),ua=s("em"),Vn=i("facebook/deit-base-patch16-224"),Bn=i(` and
`),ga=s("em"),Hn=i("facebook/deit-base-patch16-384"),Un=i(". Note that one should use "),Eo=s("a"),Rn=i("DeiTFeatureExtractor"),Jn=i(` in order to
prepare images for the model.`),$s=f(),oe=s("p"),Gn=i("This model was contributed by "),Dt=s("a"),Kn=i("nielsr"),Xn=i(". The TensorFlow version of this model was added by "),Ft=s("a"),Zn=i("amyeroberts"),Qn=i("."),ys=f(),ie=s("h2"),ze=s("a"),_a=s("span"),w(kt.$$.fragment),Yn=f(),Ta=s("span"),er=i("DeiTConfig"),Ds=f(),q=s("div"),w(xt.$$.fragment),tr=f(),le=s("p"),or=i("This is the configuration class to store the configuration of a "),jo=s("a"),ar=i("DeiTModel"),sr=i(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),It=s("a"),nr=i("facebook/deit-base-distilled-patch16-224"),rr=i(`
architecture.`),ir=f(),de=s("p"),lr=i("Configuration objects inherit from "),Co=s("a"),dr=i("PretrainedConfig"),cr=i(` and can be used to control the model outputs. Read the
documentation from `),Po=s("a"),hr=i("PretrainedConfig"),pr=i(" for more information."),mr=f(),w(Ae.$$.fragment),Fs=f(),ce=s("h2"),Ne=s("a"),ba=s("span"),w(Mt.$$.fragment),fr=f(),wa=s("span"),ur=i("DeiTFeatureExtractor"),ks=f(),z=s("div"),w(Et.$$.fragment),gr=f(),va=s("p"),_r=i("Constructs a DeiT feature extractor."),Tr=f(),jt=s("p"),br=i("This feature extractor inherits from "),qo=s("a"),wr=i("FeatureExtractionMixin"),vr=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),$r=f(),ae=s("div"),w(Ct.$$.fragment),yr=f(),$a=s("p"),Dr=i("Main method to prepare for the model one or several image(s)."),Fr=f(),w(Oe.$$.fragment),xs=f(),he=s("h2"),Le=s("a"),ya=s("span"),w(Pt.$$.fragment),kr=f(),Da=s("span"),xr=i("DeiTModel"),Is=f(),Z=s("div"),w(qt.$$.fragment),Ir=f(),zt=s("p"),Mr=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=s("a"),Er=i("torch.nn.Module"),jr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cr=f(),W=s("div"),w(Nt.$$.fragment),Pr=f(),pe=s("p"),qr=i("The "),zo=s("a"),zr=i("DeiTModel"),Ar=i(" forward method, overrides the "),Fa=s("code"),Nr=i("__call__"),Or=i(" special method."),Lr=f(),w(We.$$.fragment),Wr=f(),w(Se.$$.fragment),Ms=f(),me=s("h2"),Ve=s("a"),ka=s("span"),w(Ot.$$.fragment),Sr=f(),xa=s("span"),Vr=i("DeiTForMaskedImageModeling"),Es=f(),Q=s("div"),w(Lt.$$.fragment),Br=f(),fe=s("p"),Hr=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Wt=s("a"),Ur=i("SimMIM"),Rr=i(`.
This model is a PyTorch `),St=s("a"),Jr=i("torch.nn.Module"),Gr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kr=f(),S=s("div"),w(Vt.$$.fragment),Xr=f(),ue=s("p"),Zr=i("The "),Ao=s("a"),Qr=i("DeiTForMaskedImageModeling"),Yr=i(" forward method, overrides the "),Ia=s("code"),ei=i("__call__"),ti=i(" special method."),oi=f(),w(Be.$$.fragment),ai=f(),w(He.$$.fragment),js=f(),ge=s("h2"),Ue=s("a"),Ma=s("span"),w(Bt.$$.fragment),si=f(),Ea=s("span"),ni=i("DeiTForImageClassification"),Cs=f(),A=s("div"),w(Ht.$$.fragment),ri=f(),ja=s("p"),ii=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),li=f(),Ut=s("p"),di=i("This model is a PyTorch "),Rt=s("a"),ci=i("torch.nn.Module"),hi=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi=f(),V=s("div"),w(Jt.$$.fragment),mi=f(),_e=s("p"),fi=i("The "),No=s("a"),ui=i("DeiTForImageClassification"),gi=i(" forward method, overrides the "),Ca=s("code"),_i=i("__call__"),Ti=i(" special method."),bi=f(),w(Re.$$.fragment),wi=f(),w(Je.$$.fragment),Ps=f(),Te=s("h2"),Ge=s("a"),Pa=s("span"),w(Gt.$$.fragment),vi=f(),qa=s("span"),$i=i("DeiTForImageClassificationWithTeacher"),qs=f(),E=s("div"),w(Kt.$$.fragment),yi=f(),za=s("p"),Di=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Fi=f(),Aa=s("p"),ki=i(".. warning::"),xi=f(),Na=s("p"),Ii=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Mi=f(),Xt=s("p"),Ei=i("This model is a PyTorch "),Zt=s("a"),ji=i("torch.nn.Module"),Ci=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pi=f(),B=s("div"),w(Qt.$$.fragment),qi=f(),be=s("p"),zi=i("The "),Oo=s("a"),Ai=i("DeiTForImageClassificationWithTeacher"),Ni=i(" forward method, overrides the "),Oa=s("code"),Oi=i("__call__"),Li=i(" special method."),Wi=f(),w(Ke.$$.fragment),Si=f(),w(Xe.$$.fragment),zs=f(),we=s("h2"),Ze=s("a"),La=s("span"),w(Yt.$$.fragment),Vi=f(),Wa=s("span"),Bi=i("TFDeiTModel"),As=f(),Y=s("div"),w(eo.$$.fragment),Hi=f(),to=s("p"),Ui=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),oo=s("a"),Ri=i("tf.keras.layers.Layer"),Ji=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Gi=f(),H=s("div"),w(ao.$$.fragment),Ki=f(),ve=s("p"),Xi=i("The "),Lo=s("a"),Zi=i("TFDeiTModel"),Qi=i(" forward method, overrides the "),Sa=s("code"),Yi=i("__call__"),el=i(" special method."),tl=f(),w(Qe.$$.fragment),ol=f(),w(Ye.$$.fragment),Ns=f(),$e=s("h2"),et=s("a"),Va=s("span"),w(so.$$.fragment),al=f(),Ba=s("span"),sl=i("TFDeiTForMaskedImageModeling"),Os=f(),ee=s("div"),w(no.$$.fragment),nl=f(),ye=s("p"),rl=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),ro=s("a"),il=i("SimMIM"),ll=i(`.
This model is a TensorFlow
`),io=s("a"),dl=i("tf.keras.layers.Layer"),cl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),hl=f(),U=s("div"),w(lo.$$.fragment),pl=f(),De=s("p"),ml=i("The "),Wo=s("a"),fl=i("TFDeiTForMaskedImageModeling"),ul=i(" forward method, overrides the "),Ha=s("code"),gl=i("__call__"),_l=i(" special method."),Tl=f(),w(tt.$$.fragment),bl=f(),w(ot.$$.fragment),Ls=f(),Fe=s("h2"),at=s("a"),Ua=s("span"),w(co.$$.fragment),wl=f(),Ra=s("span"),vl=i("TFDeiTForImageClassification"),Ws=f(),N=s("div"),w(ho.$$.fragment),$l=f(),Ja=s("p"),yl=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Dl=f(),po=s("p"),Fl=i(`This model is a TensorFlow
`),mo=s("a"),kl=i("tf.keras.layers.Layer"),xl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Il=f(),R=s("div"),w(fo.$$.fragment),Ml=f(),ke=s("p"),El=i("The "),So=s("a"),jl=i("TFDeiTForImageClassification"),Cl=i(" forward method, overrides the "),Ga=s("code"),Pl=i("__call__"),ql=i(" special method."),zl=f(),w(st.$$.fragment),Al=f(),w(nt.$$.fragment),Ss=f(),xe=s("h2"),rt=s("a"),Ka=s("span"),w(uo.$$.fragment),Nl=f(),Xa=s("span"),Ol=i("TFDeiTForImageClassificationWithTeacher"),Vs=f(),j=s("div"),w(go.$$.fragment),Ll=f(),Za=s("p"),Wl=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Sl=f(),Qa=s("p"),Vl=i(".. warning::"),Bl=f(),Ya=s("p"),Hl=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ul=f(),_o=s("p"),Rl=i(`This model is a TensorFlow
`),To=s("a"),Jl=i("tf.keras.layers.Layer"),Gl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Kl=f(),J=s("div"),w(bo.$$.fragment),Xl=f(),Ie=s("p"),Zl=i("The "),Vo=s("a"),Ql=i("TFDeiTForImageClassificationWithTeacher"),Yl=i(" forward method, overrides the "),es=s("code"),ed=i("__call__"),td=i(" special method."),od=f(),w(it.$$.fragment),ad=f(),w(lt.$$.fragment),this.h()},l(t){const g=Nc('[data-svelte="svelte-1phssyn"]',document.head);d=n(g,"META",{name:!0,content:!0}),g.forEach(o),b=u(t),m=n(t,"H1",{class:!0});var wo=r(m);h=n(wo,"A",{id:!0,class:!0,href:!0});var ts=r(h);_=n(ts,"SPAN",{});var os=r(_);v(a.$$.fragment,os),os.forEach(o),ts.forEach(o),c=u(wo),x=n(wo,"SPAN",{});var as=r(x);ln=l(as,"DeiT"),as.forEach(o),wo.forEach(o),us=u(t),v(Pe.$$.fragment,t),gs=u(t),ne=n(t,"H2",{class:!0});var vo=r(ne);qe=n(vo,"A",{id:!0,class:!0,href:!0});var ss=r(qe);ia=n(ss,"SPAN",{});var ns=r(ia);v(vt.$$.fragment,ns),ns.forEach(o),ss.forEach(o),dn=u(vo),la=n(vo,"SPAN",{});var rs=r(la);cn=l(rs,"Overview"),rs.forEach(o),vo.forEach(o),_s=u(t),L=n(t,"P",{});var te=r(L);hn=l(te,"The DeiT model was proposed in "),$t=n(te,"A",{href:!0,rel:!0});var is=r($t);pn=l(is,"Training data-efficient image transformers & distillation through attention"),is.forEach(o),mn=l(te,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),$o=n(te,"A",{href:!0});var ls=r($o);fn=l(ls,"Vision Transformer (ViT)"),ls.forEach(o),un=l(te," introduced in "),yt=n(te,"A",{href:!0,rel:!0});var ds=r(yt);gn=l(ds,"Dosovitskiy et al., 2020"),ds.forEach(o),_n=l(te,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),te.forEach(o),Ts=u(t),yo=n(t,"P",{});var cs=r(yo);Tn=l(cs,"The abstract from the paper is the following:"),cs.forEach(o),bs=u(t),Do=n(t,"P",{});var hs=r(Do);da=n(hs,"EM",{});var ps=r(da);bn=l(ps,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ps.forEach(o),hs.forEach(o),ws=u(t),Fo=n(t,"P",{});var ms=r(Fo);wn=l(ms,"Tips:"),ms.forEach(o),vs=u(t),P=n(t,"UL",{});var O=r(P);ca=n(O,"LI",{});var fs=r(ca);vn=l(fs,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),fs.forEach(o),$n=u(O),re=n(O,"LI",{});var Me=r(re);yn=l(Me,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),ko=n(Me,"A",{href:!0});var sd=r(ko);Dn=l(sd,"DeiTForImageClassification"),sd.forEach(o),Fn=l(Me,` and (2) corresponds to
`),xo=n(Me,"A",{href:!0});var nd=r(xo);kn=l(nd,"DeiTForImageClassificationWithTeacher"),nd.forEach(o),xn=l(Me,"."),Me.forEach(o),In=u(O),ha=n(O,"LI",{});var rd=r(ha);Mn=l(rd,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),rd.forEach(o),En=u(O),pa=n(O,"LI",{});var id=r(pa);jn=l(id,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),id.forEach(o),Cn=u(O),I=n(O,"LI",{});var C=r(I);Pn=l(C,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Io=n(C,"A",{href:!0});var ld=r(Io);qn=l(ld,"ViTModel"),ld.forEach(o),zn=l(C," or "),Mo=n(C,"A",{href:!0});var dd=r(Mo);An=l(dd,"ViTForImageClassification"),dd.forEach(o),Nn=l(C,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ma=n(C,"EM",{});var cd=r(ma);On=l(cd,"facebook/deit-tiny-patch16-224"),cd.forEach(o),Ln=l(C,", "),fa=n(C,"EM",{});var hd=r(fa);Wn=l(hd,"facebook/deit-small-patch16-224"),hd.forEach(o),Sn=l(C,", "),ua=n(C,"EM",{});var pd=r(ua);Vn=l(pd,"facebook/deit-base-patch16-224"),pd.forEach(o),Bn=l(C,` and
`),ga=n(C,"EM",{});var md=r(ga);Hn=l(md,"facebook/deit-base-patch16-384"),md.forEach(o),Un=l(C,". Note that one should use "),Eo=n(C,"A",{href:!0});var fd=r(Eo);Rn=l(fd,"DeiTFeatureExtractor"),fd.forEach(o),Jn=l(C,` in order to
prepare images for the model.`),C.forEach(o),O.forEach(o),$s=u(t),oe=n(t,"P",{});var Bo=r(oe);Gn=l(Bo,"This model was contributed by "),Dt=n(Bo,"A",{href:!0,rel:!0});var ud=r(Dt);Kn=l(ud,"nielsr"),ud.forEach(o),Xn=l(Bo,". The TensorFlow version of this model was added by "),Ft=n(Bo,"A",{href:!0,rel:!0});var gd=r(Ft);Zn=l(gd,"amyeroberts"),gd.forEach(o),Qn=l(Bo,"."),Bo.forEach(o),ys=u(t),ie=n(t,"H2",{class:!0});var Hs=r(ie);ze=n(Hs,"A",{id:!0,class:!0,href:!0});var _d=r(ze);_a=n(_d,"SPAN",{});var Td=r(_a);v(kt.$$.fragment,Td),Td.forEach(o),_d.forEach(o),Yn=u(Hs),Ta=n(Hs,"SPAN",{});var bd=r(Ta);er=l(bd,"DeiTConfig"),bd.forEach(o),Hs.forEach(o),Ds=u(t),q=n(t,"DIV",{class:!0});var dt=r(q);v(xt.$$.fragment,dt),tr=u(dt),le=n(dt,"P",{});var Ho=r(le);or=l(Ho,"This is the configuration class to store the configuration of a "),jo=n(Ho,"A",{href:!0});var wd=r(jo);ar=l(wd,"DeiTModel"),wd.forEach(o),sr=l(Ho,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),It=n(Ho,"A",{href:!0,rel:!0});var vd=r(It);nr=l(vd,"facebook/deit-base-distilled-patch16-224"),vd.forEach(o),rr=l(Ho,`
architecture.`),Ho.forEach(o),ir=u(dt),de=n(dt,"P",{});var Uo=r(de);lr=l(Uo,"Configuration objects inherit from "),Co=n(Uo,"A",{href:!0});var $d=r(Co);dr=l($d,"PretrainedConfig"),$d.forEach(o),cr=l(Uo,` and can be used to control the model outputs. Read the
documentation from `),Po=n(Uo,"A",{href:!0});var yd=r(Po);hr=l(yd,"PretrainedConfig"),yd.forEach(o),pr=l(Uo," for more information."),Uo.forEach(o),mr=u(dt),v(Ae.$$.fragment,dt),dt.forEach(o),Fs=u(t),ce=n(t,"H2",{class:!0});var Us=r(ce);Ne=n(Us,"A",{id:!0,class:!0,href:!0});var Dd=r(Ne);ba=n(Dd,"SPAN",{});var Fd=r(ba);v(Mt.$$.fragment,Fd),Fd.forEach(o),Dd.forEach(o),fr=u(Us),wa=n(Us,"SPAN",{});var kd=r(wa);ur=l(kd,"DeiTFeatureExtractor"),kd.forEach(o),Us.forEach(o),ks=u(t),z=n(t,"DIV",{class:!0});var ct=r(z);v(Et.$$.fragment,ct),gr=u(ct),va=n(ct,"P",{});var xd=r(va);_r=l(xd,"Constructs a DeiT feature extractor."),xd.forEach(o),Tr=u(ct),jt=n(ct,"P",{});var Rs=r(jt);br=l(Rs,"This feature extractor inherits from "),qo=n(Rs,"A",{href:!0});var Id=r(qo);wr=l(Id,"FeatureExtractionMixin"),Id.forEach(o),vr=l(Rs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Rs.forEach(o),$r=u(ct),ae=n(ct,"DIV",{class:!0});var Ro=r(ae);v(Ct.$$.fragment,Ro),yr=u(Ro),$a=n(Ro,"P",{});var Md=r($a);Dr=l(Md,"Main method to prepare for the model one or several image(s)."),Md.forEach(o),Fr=u(Ro),v(Oe.$$.fragment,Ro),Ro.forEach(o),ct.forEach(o),xs=u(t),he=n(t,"H2",{class:!0});var Js=r(he);Le=n(Js,"A",{id:!0,class:!0,href:!0});var Ed=r(Le);ya=n(Ed,"SPAN",{});var jd=r(ya);v(Pt.$$.fragment,jd),jd.forEach(o),Ed.forEach(o),kr=u(Js),Da=n(Js,"SPAN",{});var Cd=r(Da);xr=l(Cd,"DeiTModel"),Cd.forEach(o),Js.forEach(o),Is=u(t),Z=n(t,"DIV",{class:!0});var Jo=r(Z);v(qt.$$.fragment,Jo),Ir=u(Jo),zt=n(Jo,"P",{});var Gs=r(zt);Mr=l(Gs,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=n(Gs,"A",{href:!0,rel:!0});var Pd=r(At);Er=l(Pd,"torch.nn.Module"),Pd.forEach(o),jr=l(Gs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gs.forEach(o),Cr=u(Jo),W=n(Jo,"DIV",{class:!0});var ht=r(W);v(Nt.$$.fragment,ht),Pr=u(ht),pe=n(ht,"P",{});var Go=r(pe);qr=l(Go,"The "),zo=n(Go,"A",{href:!0});var qd=r(zo);zr=l(qd,"DeiTModel"),qd.forEach(o),Ar=l(Go," forward method, overrides the "),Fa=n(Go,"CODE",{});var zd=r(Fa);Nr=l(zd,"__call__"),zd.forEach(o),Or=l(Go," special method."),Go.forEach(o),Lr=u(ht),v(We.$$.fragment,ht),Wr=u(ht),v(Se.$$.fragment,ht),ht.forEach(o),Jo.forEach(o),Ms=u(t),me=n(t,"H2",{class:!0});var Ks=r(me);Ve=n(Ks,"A",{id:!0,class:!0,href:!0});var Ad=r(Ve);ka=n(Ad,"SPAN",{});var Nd=r(ka);v(Ot.$$.fragment,Nd),Nd.forEach(o),Ad.forEach(o),Sr=u(Ks),xa=n(Ks,"SPAN",{});var Od=r(xa);Vr=l(Od,"DeiTForMaskedImageModeling"),Od.forEach(o),Ks.forEach(o),Es=u(t),Q=n(t,"DIV",{class:!0});var Ko=r(Q);v(Lt.$$.fragment,Ko),Br=u(Ko),fe=n(Ko,"P",{});var Xo=r(fe);Hr=l(Xo,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Wt=n(Xo,"A",{href:!0,rel:!0});var Ld=r(Wt);Ur=l(Ld,"SimMIM"),Ld.forEach(o),Rr=l(Xo,`.
This model is a PyTorch `),St=n(Xo,"A",{href:!0,rel:!0});var Wd=r(St);Jr=l(Wd,"torch.nn.Module"),Wd.forEach(o),Gr=l(Xo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xo.forEach(o),Kr=u(Ko),S=n(Ko,"DIV",{class:!0});var pt=r(S);v(Vt.$$.fragment,pt),Xr=u(pt),ue=n(pt,"P",{});var Zo=r(ue);Zr=l(Zo,"The "),Ao=n(Zo,"A",{href:!0});var Sd=r(Ao);Qr=l(Sd,"DeiTForMaskedImageModeling"),Sd.forEach(o),Yr=l(Zo," forward method, overrides the "),Ia=n(Zo,"CODE",{});var Vd=r(Ia);ei=l(Vd,"__call__"),Vd.forEach(o),ti=l(Zo," special method."),Zo.forEach(o),oi=u(pt),v(Be.$$.fragment,pt),ai=u(pt),v(He.$$.fragment,pt),pt.forEach(o),Ko.forEach(o),js=u(t),ge=n(t,"H2",{class:!0});var Xs=r(ge);Ue=n(Xs,"A",{id:!0,class:!0,href:!0});var Bd=r(Ue);Ma=n(Bd,"SPAN",{});var Hd=r(Ma);v(Bt.$$.fragment,Hd),Hd.forEach(o),Bd.forEach(o),si=u(Xs),Ea=n(Xs,"SPAN",{});var Ud=r(Ea);ni=l(Ud,"DeiTForImageClassification"),Ud.forEach(o),Xs.forEach(o),Cs=u(t),A=n(t,"DIV",{class:!0});var mt=r(A);v(Ht.$$.fragment,mt),ri=u(mt),ja=n(mt,"P",{});var Rd=r(ja);ii=l(Rd,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Rd.forEach(o),li=u(mt),Ut=n(mt,"P",{});var Zs=r(Ut);di=l(Zs,"This model is a PyTorch "),Rt=n(Zs,"A",{href:!0,rel:!0});var Jd=r(Rt);ci=l(Jd,"torch.nn.Module"),Jd.forEach(o),hi=l(Zs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zs.forEach(o),pi=u(mt),V=n(mt,"DIV",{class:!0});var ft=r(V);v(Jt.$$.fragment,ft),mi=u(ft),_e=n(ft,"P",{});var Qo=r(_e);fi=l(Qo,"The "),No=n(Qo,"A",{href:!0});var Gd=r(No);ui=l(Gd,"DeiTForImageClassification"),Gd.forEach(o),gi=l(Qo," forward method, overrides the "),Ca=n(Qo,"CODE",{});var Kd=r(Ca);_i=l(Kd,"__call__"),Kd.forEach(o),Ti=l(Qo," special method."),Qo.forEach(o),bi=u(ft),v(Re.$$.fragment,ft),wi=u(ft),v(Je.$$.fragment,ft),ft.forEach(o),mt.forEach(o),Ps=u(t),Te=n(t,"H2",{class:!0});var Qs=r(Te);Ge=n(Qs,"A",{id:!0,class:!0,href:!0});var Xd=r(Ge);Pa=n(Xd,"SPAN",{});var Zd=r(Pa);v(Gt.$$.fragment,Zd),Zd.forEach(o),Xd.forEach(o),vi=u(Qs),qa=n(Qs,"SPAN",{});var Qd=r(qa);$i=l(Qd,"DeiTForImageClassificationWithTeacher"),Qd.forEach(o),Qs.forEach(o),qs=u(t),E=n(t,"DIV",{class:!0});var G=r(E);v(Kt.$$.fragment,G),yi=u(G),za=n(G,"P",{});var Yd=r(za);Di=l(Yd,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Yd.forEach(o),Fi=u(G),Aa=n(G,"P",{});var ec=r(Aa);ki=l(ec,".. warning::"),ec.forEach(o),xi=u(G),Na=n(G,"P",{});var tc=r(Na);Ii=l(tc,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),tc.forEach(o),Mi=u(G),Xt=n(G,"P",{});var Ys=r(Xt);Ei=l(Ys,"This model is a PyTorch "),Zt=n(Ys,"A",{href:!0,rel:!0});var oc=r(Zt);ji=l(oc,"torch.nn.Module"),oc.forEach(o),Ci=l(Ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys.forEach(o),Pi=u(G),B=n(G,"DIV",{class:!0});var ut=r(B);v(Qt.$$.fragment,ut),qi=u(ut),be=n(ut,"P",{});var Yo=r(be);zi=l(Yo,"The "),Oo=n(Yo,"A",{href:!0});var ac=r(Oo);Ai=l(ac,"DeiTForImageClassificationWithTeacher"),ac.forEach(o),Ni=l(Yo," forward method, overrides the "),Oa=n(Yo,"CODE",{});var sc=r(Oa);Oi=l(sc,"__call__"),sc.forEach(o),Li=l(Yo," special method."),Yo.forEach(o),Wi=u(ut),v(Ke.$$.fragment,ut),Si=u(ut),v(Xe.$$.fragment,ut),ut.forEach(o),G.forEach(o),zs=u(t),we=n(t,"H2",{class:!0});var en=r(we);Ze=n(en,"A",{id:!0,class:!0,href:!0});var nc=r(Ze);La=n(nc,"SPAN",{});var rc=r(La);v(Yt.$$.fragment,rc),rc.forEach(o),nc.forEach(o),Vi=u(en),Wa=n(en,"SPAN",{});var ic=r(Wa);Bi=l(ic,"TFDeiTModel"),ic.forEach(o),en.forEach(o),As=u(t),Y=n(t,"DIV",{class:!0});var ea=r(Y);v(eo.$$.fragment,ea),Hi=u(ea),to=n(ea,"P",{});var tn=r(to);Ui=l(tn,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),oo=n(tn,"A",{href:!0,rel:!0});var lc=r(oo);Ri=l(lc,"tf.keras.layers.Layer"),lc.forEach(o),Ji=l(tn,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),tn.forEach(o),Gi=u(ea),H=n(ea,"DIV",{class:!0});var gt=r(H);v(ao.$$.fragment,gt),Ki=u(gt),ve=n(gt,"P",{});var ta=r(ve);Xi=l(ta,"The "),Lo=n(ta,"A",{href:!0});var dc=r(Lo);Zi=l(dc,"TFDeiTModel"),dc.forEach(o),Qi=l(ta," forward method, overrides the "),Sa=n(ta,"CODE",{});var cc=r(Sa);Yi=l(cc,"__call__"),cc.forEach(o),el=l(ta," special method."),ta.forEach(o),tl=u(gt),v(Qe.$$.fragment,gt),ol=u(gt),v(Ye.$$.fragment,gt),gt.forEach(o),ea.forEach(o),Ns=u(t),$e=n(t,"H2",{class:!0});var on=r($e);et=n(on,"A",{id:!0,class:!0,href:!0});var hc=r(et);Va=n(hc,"SPAN",{});var pc=r(Va);v(so.$$.fragment,pc),pc.forEach(o),hc.forEach(o),al=u(on),Ba=n(on,"SPAN",{});var mc=r(Ba);sl=l(mc,"TFDeiTForMaskedImageModeling"),mc.forEach(o),on.forEach(o),Os=u(t),ee=n(t,"DIV",{class:!0});var oa=r(ee);v(no.$$.fragment,oa),nl=u(oa),ye=n(oa,"P",{});var aa=r(ye);rl=l(aa,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),ro=n(aa,"A",{href:!0,rel:!0});var fc=r(ro);il=l(fc,"SimMIM"),fc.forEach(o),ll=l(aa,`.
This model is a TensorFlow
`),io=n(aa,"A",{href:!0,rel:!0});var uc=r(io);dl=l(uc,"tf.keras.layers.Layer"),uc.forEach(o),cl=l(aa,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),aa.forEach(o),hl=u(oa),U=n(oa,"DIV",{class:!0});var _t=r(U);v(lo.$$.fragment,_t),pl=u(_t),De=n(_t,"P",{});var sa=r(De);ml=l(sa,"The "),Wo=n(sa,"A",{href:!0});var gc=r(Wo);fl=l(gc,"TFDeiTForMaskedImageModeling"),gc.forEach(o),ul=l(sa," forward method, overrides the "),Ha=n(sa,"CODE",{});var _c=r(Ha);gl=l(_c,"__call__"),_c.forEach(o),_l=l(sa," special method."),sa.forEach(o),Tl=u(_t),v(tt.$$.fragment,_t),bl=u(_t),v(ot.$$.fragment,_t),_t.forEach(o),oa.forEach(o),Ls=u(t),Fe=n(t,"H2",{class:!0});var an=r(Fe);at=n(an,"A",{id:!0,class:!0,href:!0});var Tc=r(at);Ua=n(Tc,"SPAN",{});var bc=r(Ua);v(co.$$.fragment,bc),bc.forEach(o),Tc.forEach(o),wl=u(an),Ra=n(an,"SPAN",{});var wc=r(Ra);vl=l(wc,"TFDeiTForImageClassification"),wc.forEach(o),an.forEach(o),Ws=u(t),N=n(t,"DIV",{class:!0});var Tt=r(N);v(ho.$$.fragment,Tt),$l=u(Tt),Ja=n(Tt,"P",{});var vc=r(Ja);yl=l(vc,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),vc.forEach(o),Dl=u(Tt),po=n(Tt,"P",{});var sn=r(po);Fl=l(sn,`This model is a TensorFlow
`),mo=n(sn,"A",{href:!0,rel:!0});var $c=r(mo);kl=l($c,"tf.keras.layers.Layer"),$c.forEach(o),xl=l(sn,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),sn.forEach(o),Il=u(Tt),R=n(Tt,"DIV",{class:!0});var bt=r(R);v(fo.$$.fragment,bt),Ml=u(bt),ke=n(bt,"P",{});var na=r(ke);El=l(na,"The "),So=n(na,"A",{href:!0});var yc=r(So);jl=l(yc,"TFDeiTForImageClassification"),yc.forEach(o),Cl=l(na," forward method, overrides the "),Ga=n(na,"CODE",{});var Dc=r(Ga);Pl=l(Dc,"__call__"),Dc.forEach(o),ql=l(na," special method."),na.forEach(o),zl=u(bt),v(st.$$.fragment,bt),Al=u(bt),v(nt.$$.fragment,bt),bt.forEach(o),Tt.forEach(o),Ss=u(t),xe=n(t,"H2",{class:!0});var nn=r(xe);rt=n(nn,"A",{id:!0,class:!0,href:!0});var Fc=r(rt);Ka=n(Fc,"SPAN",{});var kc=r(Ka);v(uo.$$.fragment,kc),kc.forEach(o),Fc.forEach(o),Nl=u(nn),Xa=n(nn,"SPAN",{});var xc=r(Xa);Ol=l(xc,"TFDeiTForImageClassificationWithTeacher"),xc.forEach(o),nn.forEach(o),Vs=u(t),j=n(t,"DIV",{class:!0});var K=r(j);v(go.$$.fragment,K),Ll=u(K),Za=n(K,"P",{});var Ic=r(Za);Wl=l(Ic,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Ic.forEach(o),Sl=u(K),Qa=n(K,"P",{});var Mc=r(Qa);Vl=l(Mc,".. warning::"),Mc.forEach(o),Bl=u(K),Ya=n(K,"P",{});var Ec=r(Ya);Hl=l(Ec,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ec.forEach(o),Ul=u(K),_o=n(K,"P",{});var rn=r(_o);Rl=l(rn,`This model is a TensorFlow
`),To=n(rn,"A",{href:!0,rel:!0});var jc=r(To);Jl=l(jc,"tf.keras.layers.Layer"),jc.forEach(o),Gl=l(rn,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),rn.forEach(o),Kl=u(K),J=n(K,"DIV",{class:!0});var wt=r(J);v(bo.$$.fragment,wt),Xl=u(wt),Ie=n(wt,"P",{});var ra=r(Ie);Zl=l(ra,"The "),Vo=n(ra,"A",{href:!0});var Cc=r(Vo);Ql=l(Cc,"TFDeiTForImageClassificationWithTeacher"),Cc.forEach(o),Yl=l(ra," forward method, overrides the "),es=n(ra,"CODE",{});var Pc=r(es);ed=l(Pc,"__call__"),Pc.forEach(o),td=l(ra," special method."),ra.forEach(o),od=u(wt),v(it.$$.fragment,wt),ad=u(wt),v(lt.$$.fragment,wt),wt.forEach(o),K.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(nh)),p(h,"id","deit"),p(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(h,"href","#deit"),p(m,"class","relative group"),p(qe,"id","overview"),p(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qe,"href","#overview"),p(ne,"class","relative group"),p($t,"href","https://arxiv.org/abs/2012.12877"),p($t,"rel","nofollow"),p($o,"href","vit"),p(yt,"href","https://arxiv.org/abs/2010.11929"),p(yt,"rel","nofollow"),p(ko,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),p(xo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),p(Io,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),p(Mo,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),p(Eo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor"),p(Dt,"href","https://huggingface.co/nielsr"),p(Dt,"rel","nofollow"),p(Ft,"href","https://huggingface.co/amyeroberts"),p(Ft,"rel","nofollow"),p(ze,"id","transformers.DeiTConfig"),p(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ze,"href","#transformers.DeiTConfig"),p(ie,"class","relative group"),p(jo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),p(It,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),p(It,"rel","nofollow"),p(Co,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(Po,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ne,"id","transformers.DeiTFeatureExtractor"),p(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ne,"href","#transformers.DeiTFeatureExtractor"),p(ce,"class","relative group"),p(qo,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),p(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Le,"id","transformers.DeiTModel"),p(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Le,"href","#transformers.DeiTModel"),p(he,"class","relative group"),p(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(At,"rel","nofollow"),p(zo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ve,"id","transformers.DeiTForMaskedImageModeling"),p(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ve,"href","#transformers.DeiTForMaskedImageModeling"),p(me,"class","relative group"),p(Wt,"href","https://arxiv.org/abs/2111.09886"),p(Wt,"rel","nofollow"),p(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(St,"rel","nofollow"),p(Ao,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ue,"id","transformers.DeiTForImageClassification"),p(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ue,"href","#transformers.DeiTForImageClassification"),p(ge,"class","relative group"),p(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Rt,"rel","nofollow"),p(No,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ge,"id","transformers.DeiTForImageClassificationWithTeacher"),p(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ge,"href","#transformers.DeiTForImageClassificationWithTeacher"),p(Te,"class","relative group"),p(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Zt,"rel","nofollow"),p(Oo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ze,"id","transformers.TFDeiTModel"),p(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ze,"href","#transformers.TFDeiTModel"),p(we,"class","relative group"),p(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(oo,"rel","nofollow"),p(Lo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTModel"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(et,"id","transformers.TFDeiTForMaskedImageModeling"),p(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(et,"href","#transformers.TFDeiTForMaskedImageModeling"),p($e,"class","relative group"),p(ro,"href","https://arxiv.org/abs/2111.09886"),p(ro,"rel","nofollow"),p(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(io,"rel","nofollow"),p(Wo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForMaskedImageModeling"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(at,"id","transformers.TFDeiTForImageClassification"),p(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(at,"href","#transformers.TFDeiTForImageClassification"),p(Fe,"class","relative group"),p(mo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(mo,"rel","nofollow"),p(So,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassification"),p(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(rt,"id","transformers.TFDeiTForImageClassificationWithTeacher"),p(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rt,"href","#transformers.TFDeiTForImageClassificationWithTeacher"),p(xe,"class","relative group"),p(To,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(To,"rel","nofollow"),p(Vo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassificationWithTeacher"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),T(t,b,g),T(t,m,g),e(m,h),e(h,_),$(a,_,null),e(m,c),e(m,x),e(x,ln),T(t,us,g),$(Pe,t,g),T(t,gs,g),T(t,ne,g),e(ne,qe),e(qe,ia),$(vt,ia,null),e(ne,dn),e(ne,la),e(la,cn),T(t,_s,g),T(t,L,g),e(L,hn),e(L,$t),e($t,pn),e(L,mn),e(L,$o),e($o,fn),e(L,un),e(L,yt),e(yt,gn),e(L,_n),T(t,Ts,g),T(t,yo,g),e(yo,Tn),T(t,bs,g),T(t,Do,g),e(Do,da),e(da,bn),T(t,ws,g),T(t,Fo,g),e(Fo,wn),T(t,vs,g),T(t,P,g),e(P,ca),e(ca,vn),e(P,$n),e(P,re),e(re,yn),e(re,ko),e(ko,Dn),e(re,Fn),e(re,xo),e(xo,kn),e(re,xn),e(P,In),e(P,ha),e(ha,Mn),e(P,En),e(P,pa),e(pa,jn),e(P,Cn),e(P,I),e(I,Pn),e(I,Io),e(Io,qn),e(I,zn),e(I,Mo),e(Mo,An),e(I,Nn),e(I,ma),e(ma,On),e(I,Ln),e(I,fa),e(fa,Wn),e(I,Sn),e(I,ua),e(ua,Vn),e(I,Bn),e(I,ga),e(ga,Hn),e(I,Un),e(I,Eo),e(Eo,Rn),e(I,Jn),T(t,$s,g),T(t,oe,g),e(oe,Gn),e(oe,Dt),e(Dt,Kn),e(oe,Xn),e(oe,Ft),e(Ft,Zn),e(oe,Qn),T(t,ys,g),T(t,ie,g),e(ie,ze),e(ze,_a),$(kt,_a,null),e(ie,Yn),e(ie,Ta),e(Ta,er),T(t,Ds,g),T(t,q,g),$(xt,q,null),e(q,tr),e(q,le),e(le,or),e(le,jo),e(jo,ar),e(le,sr),e(le,It),e(It,nr),e(le,rr),e(q,ir),e(q,de),e(de,lr),e(de,Co),e(Co,dr),e(de,cr),e(de,Po),e(Po,hr),e(de,pr),e(q,mr),$(Ae,q,null),T(t,Fs,g),T(t,ce,g),e(ce,Ne),e(Ne,ba),$(Mt,ba,null),e(ce,fr),e(ce,wa),e(wa,ur),T(t,ks,g),T(t,z,g),$(Et,z,null),e(z,gr),e(z,va),e(va,_r),e(z,Tr),e(z,jt),e(jt,br),e(jt,qo),e(qo,wr),e(jt,vr),e(z,$r),e(z,ae),$(Ct,ae,null),e(ae,yr),e(ae,$a),e($a,Dr),e(ae,Fr),$(Oe,ae,null),T(t,xs,g),T(t,he,g),e(he,Le),e(Le,ya),$(Pt,ya,null),e(he,kr),e(he,Da),e(Da,xr),T(t,Is,g),T(t,Z,g),$(qt,Z,null),e(Z,Ir),e(Z,zt),e(zt,Mr),e(zt,At),e(At,Er),e(zt,jr),e(Z,Cr),e(Z,W),$(Nt,W,null),e(W,Pr),e(W,pe),e(pe,qr),e(pe,zo),e(zo,zr),e(pe,Ar),e(pe,Fa),e(Fa,Nr),e(pe,Or),e(W,Lr),$(We,W,null),e(W,Wr),$(Se,W,null),T(t,Ms,g),T(t,me,g),e(me,Ve),e(Ve,ka),$(Ot,ka,null),e(me,Sr),e(me,xa),e(xa,Vr),T(t,Es,g),T(t,Q,g),$(Lt,Q,null),e(Q,Br),e(Q,fe),e(fe,Hr),e(fe,Wt),e(Wt,Ur),e(fe,Rr),e(fe,St),e(St,Jr),e(fe,Gr),e(Q,Kr),e(Q,S),$(Vt,S,null),e(S,Xr),e(S,ue),e(ue,Zr),e(ue,Ao),e(Ao,Qr),e(ue,Yr),e(ue,Ia),e(Ia,ei),e(ue,ti),e(S,oi),$(Be,S,null),e(S,ai),$(He,S,null),T(t,js,g),T(t,ge,g),e(ge,Ue),e(Ue,Ma),$(Bt,Ma,null),e(ge,si),e(ge,Ea),e(Ea,ni),T(t,Cs,g),T(t,A,g),$(Ht,A,null),e(A,ri),e(A,ja),e(ja,ii),e(A,li),e(A,Ut),e(Ut,di),e(Ut,Rt),e(Rt,ci),e(Ut,hi),e(A,pi),e(A,V),$(Jt,V,null),e(V,mi),e(V,_e),e(_e,fi),e(_e,No),e(No,ui),e(_e,gi),e(_e,Ca),e(Ca,_i),e(_e,Ti),e(V,bi),$(Re,V,null),e(V,wi),$(Je,V,null),T(t,Ps,g),T(t,Te,g),e(Te,Ge),e(Ge,Pa),$(Gt,Pa,null),e(Te,vi),e(Te,qa),e(qa,$i),T(t,qs,g),T(t,E,g),$(Kt,E,null),e(E,yi),e(E,za),e(za,Di),e(E,Fi),e(E,Aa),e(Aa,ki),e(E,xi),e(E,Na),e(Na,Ii),e(E,Mi),e(E,Xt),e(Xt,Ei),e(Xt,Zt),e(Zt,ji),e(Xt,Ci),e(E,Pi),e(E,B),$(Qt,B,null),e(B,qi),e(B,be),e(be,zi),e(be,Oo),e(Oo,Ai),e(be,Ni),e(be,Oa),e(Oa,Oi),e(be,Li),e(B,Wi),$(Ke,B,null),e(B,Si),$(Xe,B,null),T(t,zs,g),T(t,we,g),e(we,Ze),e(Ze,La),$(Yt,La,null),e(we,Vi),e(we,Wa),e(Wa,Bi),T(t,As,g),T(t,Y,g),$(eo,Y,null),e(Y,Hi),e(Y,to),e(to,Ui),e(to,oo),e(oo,Ri),e(to,Ji),e(Y,Gi),e(Y,H),$(ao,H,null),e(H,Ki),e(H,ve),e(ve,Xi),e(ve,Lo),e(Lo,Zi),e(ve,Qi),e(ve,Sa),e(Sa,Yi),e(ve,el),e(H,tl),$(Qe,H,null),e(H,ol),$(Ye,H,null),T(t,Ns,g),T(t,$e,g),e($e,et),e(et,Va),$(so,Va,null),e($e,al),e($e,Ba),e(Ba,sl),T(t,Os,g),T(t,ee,g),$(no,ee,null),e(ee,nl),e(ee,ye),e(ye,rl),e(ye,ro),e(ro,il),e(ye,ll),e(ye,io),e(io,dl),e(ye,cl),e(ee,hl),e(ee,U),$(lo,U,null),e(U,pl),e(U,De),e(De,ml),e(De,Wo),e(Wo,fl),e(De,ul),e(De,Ha),e(Ha,gl),e(De,_l),e(U,Tl),$(tt,U,null),e(U,bl),$(ot,U,null),T(t,Ls,g),T(t,Fe,g),e(Fe,at),e(at,Ua),$(co,Ua,null),e(Fe,wl),e(Fe,Ra),e(Ra,vl),T(t,Ws,g),T(t,N,g),$(ho,N,null),e(N,$l),e(N,Ja),e(Ja,yl),e(N,Dl),e(N,po),e(po,Fl),e(po,mo),e(mo,kl),e(po,xl),e(N,Il),e(N,R),$(fo,R,null),e(R,Ml),e(R,ke),e(ke,El),e(ke,So),e(So,jl),e(ke,Cl),e(ke,Ga),e(Ga,Pl),e(ke,ql),e(R,zl),$(st,R,null),e(R,Al),$(nt,R,null),T(t,Ss,g),T(t,xe,g),e(xe,rt),e(rt,Ka),$(uo,Ka,null),e(xe,Nl),e(xe,Xa),e(Xa,Ol),T(t,Vs,g),T(t,j,g),$(go,j,null),e(j,Ll),e(j,Za),e(Za,Wl),e(j,Sl),e(j,Qa),e(Qa,Vl),e(j,Bl),e(j,Ya),e(Ya,Hl),e(j,Ul),e(j,_o),e(_o,Rl),e(_o,To),e(To,Jl),e(_o,Gl),e(j,Kl),e(j,J),$(bo,J,null),e(J,Xl),e(J,Ie),e(Ie,Zl),e(Ie,Vo),e(Vo,Ql),e(Ie,Yl),e(Ie,es),e(es,ed),e(Ie,td),e(J,od),$(it,J,null),e(J,ad),$(lt,J,null),Bs=!0},p(t,[g]){const wo={};g&2&&(wo.$$scope={dirty:g,ctx:t}),Pe.$set(wo);const ts={};g&2&&(ts.$$scope={dirty:g,ctx:t}),Ae.$set(ts);const os={};g&2&&(os.$$scope={dirty:g,ctx:t}),Oe.$set(os);const as={};g&2&&(as.$$scope={dirty:g,ctx:t}),We.$set(as);const vo={};g&2&&(vo.$$scope={dirty:g,ctx:t}),Se.$set(vo);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:t}),Be.$set(ss);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:t}),He.$set(ns);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:t}),Re.$set(rs);const te={};g&2&&(te.$$scope={dirty:g,ctx:t}),Je.$set(te);const is={};g&2&&(is.$$scope={dirty:g,ctx:t}),Ke.$set(is);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:t}),Xe.$set(ls);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:t}),Qe.$set(ds);const cs={};g&2&&(cs.$$scope={dirty:g,ctx:t}),Ye.$set(cs);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:t}),tt.$set(hs);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:t}),ot.$set(ps);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:t}),st.$set(ms);const O={};g&2&&(O.$$scope={dirty:g,ctx:t}),nt.$set(O);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:t}),it.$set(fs);const Me={};g&2&&(Me.$$scope={dirty:g,ctx:t}),lt.$set(Me)},i(t){Bs||(y(a.$$.fragment,t),y(Pe.$$.fragment,t),y(vt.$$.fragment,t),y(kt.$$.fragment,t),y(xt.$$.fragment,t),y(Ae.$$.fragment,t),y(Mt.$$.fragment,t),y(Et.$$.fragment,t),y(Ct.$$.fragment,t),y(Oe.$$.fragment,t),y(Pt.$$.fragment,t),y(qt.$$.fragment,t),y(Nt.$$.fragment,t),y(We.$$.fragment,t),y(Se.$$.fragment,t),y(Ot.$$.fragment,t),y(Lt.$$.fragment,t),y(Vt.$$.fragment,t),y(Be.$$.fragment,t),y(He.$$.fragment,t),y(Bt.$$.fragment,t),y(Ht.$$.fragment,t),y(Jt.$$.fragment,t),y(Re.$$.fragment,t),y(Je.$$.fragment,t),y(Gt.$$.fragment,t),y(Kt.$$.fragment,t),y(Qt.$$.fragment,t),y(Ke.$$.fragment,t),y(Xe.$$.fragment,t),y(Yt.$$.fragment,t),y(eo.$$.fragment,t),y(ao.$$.fragment,t),y(Qe.$$.fragment,t),y(Ye.$$.fragment,t),y(so.$$.fragment,t),y(no.$$.fragment,t),y(lo.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(co.$$.fragment,t),y(ho.$$.fragment,t),y(fo.$$.fragment,t),y(st.$$.fragment,t),y(nt.$$.fragment,t),y(uo.$$.fragment,t),y(go.$$.fragment,t),y(bo.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),Bs=!0)},o(t){D(a.$$.fragment,t),D(Pe.$$.fragment,t),D(vt.$$.fragment,t),D(kt.$$.fragment,t),D(xt.$$.fragment,t),D(Ae.$$.fragment,t),D(Mt.$$.fragment,t),D(Et.$$.fragment,t),D(Ct.$$.fragment,t),D(Oe.$$.fragment,t),D(Pt.$$.fragment,t),D(qt.$$.fragment,t),D(Nt.$$.fragment,t),D(We.$$.fragment,t),D(Se.$$.fragment,t),D(Ot.$$.fragment,t),D(Lt.$$.fragment,t),D(Vt.$$.fragment,t),D(Be.$$.fragment,t),D(He.$$.fragment,t),D(Bt.$$.fragment,t),D(Ht.$$.fragment,t),D(Jt.$$.fragment,t),D(Re.$$.fragment,t),D(Je.$$.fragment,t),D(Gt.$$.fragment,t),D(Kt.$$.fragment,t),D(Qt.$$.fragment,t),D(Ke.$$.fragment,t),D(Xe.$$.fragment,t),D(Yt.$$.fragment,t),D(eo.$$.fragment,t),D(ao.$$.fragment,t),D(Qe.$$.fragment,t),D(Ye.$$.fragment,t),D(so.$$.fragment,t),D(no.$$.fragment,t),D(lo.$$.fragment,t),D(tt.$$.fragment,t),D(ot.$$.fragment,t),D(co.$$.fragment,t),D(ho.$$.fragment,t),D(fo.$$.fragment,t),D(st.$$.fragment,t),D(nt.$$.fragment,t),D(uo.$$.fragment,t),D(go.$$.fragment,t),D(bo.$$.fragment,t),D(it.$$.fragment,t),D(lt.$$.fragment,t),Bs=!1},d(t){o(d),t&&o(b),t&&o(m),F(a),t&&o(us),F(Pe,t),t&&o(gs),t&&o(ne),F(vt),t&&o(_s),t&&o(L),t&&o(Ts),t&&o(yo),t&&o(bs),t&&o(Do),t&&o(ws),t&&o(Fo),t&&o(vs),t&&o(P),t&&o($s),t&&o(oe),t&&o(ys),t&&o(ie),F(kt),t&&o(Ds),t&&o(q),F(xt),F(Ae),t&&o(Fs),t&&o(ce),F(Mt),t&&o(ks),t&&o(z),F(Et),F(Ct),F(Oe),t&&o(xs),t&&o(he),F(Pt),t&&o(Is),t&&o(Z),F(qt),F(Nt),F(We),F(Se),t&&o(Ms),t&&o(me),F(Ot),t&&o(Es),t&&o(Q),F(Lt),F(Vt),F(Be),F(He),t&&o(js),t&&o(ge),F(Bt),t&&o(Cs),t&&o(A),F(Ht),F(Jt),F(Re),F(Je),t&&o(Ps),t&&o(Te),F(Gt),t&&o(qs),t&&o(E),F(Kt),F(Qt),F(Ke),F(Xe),t&&o(zs),t&&o(we),F(Yt),t&&o(As),t&&o(Y),F(eo),F(ao),F(Qe),F(Ye),t&&o(Ns),t&&o($e),F(so),t&&o(Os),t&&o(ee),F(no),F(lo),F(tt),F(ot),t&&o(Ls),t&&o(Fe),F(co),t&&o(Ws),t&&o(N),F(ho),F(fo),F(st),F(nt),t&&o(Ss),t&&o(xe),F(uo),t&&o(Vs),t&&o(j),F(go),F(bo),F(it),F(lt)}}}const nh={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTFeatureExtractor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"},{local:"transformers.TFDeiTModel",title:"TFDeiTModel"},{local:"transformers.TFDeiTForMaskedImageModeling",title:"TFDeiTForMaskedImageModeling"},{local:"transformers.TFDeiTForImageClassification",title:"TFDeiTForImageClassification"},{local:"transformers.TFDeiTForImageClassificationWithTeacher",title:"TFDeiTForImageClassificationWithTeacher"}],title:"DeiT"};function rh(k){return Oc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mh extends qc{constructor(d){super();zc(this,d,rh,sh,Ac,{})}}export{mh as default,nh as metadata};
