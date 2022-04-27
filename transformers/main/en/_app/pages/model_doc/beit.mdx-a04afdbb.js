import{S as Kp,i as Yp,s as Zp,e as a,k as m,w,t as r,M as Qp,c as n,d as t,m as p,a as s,x,h as i,b as d,F as e,g as _,y as $,q as y,o as T,B,v as eh,L as xt}from"../../chunks/vendor-6b77c823.js";import{T as vt}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as $t}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as wt}from"../../chunks/ExampleCodeBlock-5212b321.js";function th(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitModel, BeitConfig

# Initializing a BEiT beit-base-patch16-224-pt22k style configuration
configuration = BeitConfig()

# Initializing a model from the beit-base-patch16-224-pt22k style configuration
model = BeitModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitModel, BeitConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BEiT beit-base-patch16-224-pt22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BeitConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the beit-base-patch16-224-pt22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function oh(F){let c,v;return{c(){c=a("p"),v=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=n(u,"P",{});var f=s(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(u,f){_(u,c,f),e(c,v)},d(u){u&&t(c)}}}function ah(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function nh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k")
model = BeitModel.from_pretrained("microsoft/beit-base-patch16-224-pt22k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitModel.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function sh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function rh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k")
model = BeitForMaskedImageModeling.from_pretrained("microsoft/beit-base-patch16-224-pt22k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, logits = outputs.loss, outputs.logits
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function ih(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function lh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224")
model = BeitForImageClassification.from_pretrained("microsoft/beit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function dh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function ch(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import AutoFeatureExtractor, BeitForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")
model = BeitForSemanticSegmentation.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
# logits are of shape (batch_size, num_labels, height, width)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, BeitForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># logits are of shape (batch_size, num_labels, height, width)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function mh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function ph(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k-ft22k")
model = FlaxBeitModel.from_pretrained("microsoft/beit-base-patch16-224-pt22k-ft22k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, FlaxBeitModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k-ft22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBeitModel.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k-ft22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function hh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function fh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k")
model = BeitForMaskedImageModeling.from_pretrained("microsoft/beit-base-patch16-224-pt22k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function uh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function gh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitForImageClassification
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224")
model = FlaxBeitForImageClassification.from_pretrained("microsoft/beit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, FlaxBeitForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBeitForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function _h(F){let c,v,u,f,b,l,h,E,er,Zn,de,Ce,ja,yt,tr,Pa,or,Qn,V,ar,Tt,nr,sr,Bt,rr,ir,Ft,lr,dr,es,Xo,cr,ts,Go,Ca,mr,os,Ko,pr,as,C,k,hr,Yo,fr,ur,Zo,gr,_r,Et,br,vr,Qo,wr,xr,ea,$r,yr,ta,Tr,Br,oa,Fr,Er,kr,kt,Mr,Mt,Ir,jr,Pr,It,Cr,aa,zr,Ar,qr,ce,Lr,za,Nr,Sr,jt,Or,Dr,Wr,me,Vr,Pt,Ur,Rr,Ct,Hr,Jr,Xr,S,Gr,Aa,Kr,Yr,qa,Zr,Qr,na,ei,ti,La,oi,ai,ns,U,ni,zt,si,ri,At,ii,li,qt,di,ci,ss,pe,ze,Na,Lt,mi,Sa,pi,rs,he,Nt,hi,St,fi,sa,ui,gi,is,fe,Ot,_i,Dt,bi,ra,vi,wi,ls,ue,Ae,Oa,Wt,xi,Da,$i,ds,Q,Vt,yi,ge,Ti,ia,Bi,Fi,Ut,Ei,ki,Mi,qe,cs,_e,Le,Wa,Rt,Ii,Va,ji,ms,O,Ht,Pi,Ua,Ci,zi,Jt,Ai,la,qi,Li,Ni,re,Xt,Si,Ra,Oi,Di,Ne,ps,be,Se,Ha,Gt,Wi,Ja,Vi,hs,ee,Kt,Ui,Yt,Ri,Zt,Hi,Ji,Xi,R,Qt,Gi,ve,Ki,da,Yi,Zi,Xa,Qi,el,tl,Oe,ol,De,fs,we,We,Ga,eo,al,Ka,nl,us,te,to,sl,oo,rl,ao,il,ll,dl,H,no,cl,xe,ml,ca,pl,hl,Ya,fl,ul,gl,Ve,_l,Ue,gs,$e,Re,Za,so,bl,Qa,vl,_s,D,ro,wl,en,xl,$l,io,yl,lo,Tl,Bl,Fl,J,co,El,ye,kl,ma,Ml,Il,tn,jl,Pl,Cl,He,zl,Je,bs,Te,Xe,on,mo,Al,an,ql,vs,W,po,Ll,nn,Nl,Sl,ho,Ol,fo,Dl,Wl,Vl,X,uo,Ul,Be,Rl,pa,Hl,Jl,sn,Xl,Gl,Kl,Ge,Yl,Ke,ws,Fe,Ye,rn,go,Zl,ln,Ql,xs,M,_o,ed,dn,td,od,bo,ad,ha,nd,sd,rd,vo,id,wo,ld,dd,cd,cn,md,pd,oe,mn,xo,hd,fd,pn,$o,ud,gd,hn,yo,_d,bd,fn,To,vd,wd,G,Bo,xd,Ee,$d,un,yd,Td,gn,Bd,Fd,Ed,Ze,kd,Qe,$s,ke,et,_n,Fo,Md,bn,Id,ys,I,Eo,jd,vn,Pd,Cd,ko,zd,fa,Ad,qd,Ld,Mo,Nd,Io,Sd,Od,Dd,wn,Wd,Vd,ae,xn,jo,Ud,Rd,$n,Po,Hd,Jd,yn,Co,Xd,Gd,Tn,zo,Kd,Yd,A,Ao,Zd,Me,Qd,Bn,ec,tc,Fn,oc,ac,nc,tt,sc,Ie,rc,En,ic,lc,kn,dc,cc,mc,ot,Ts,je,at,Mn,qo,pc,In,hc,Bs,j,Lo,fc,jn,uc,gc,No,_c,ua,bc,vc,wc,So,xc,Oo,$c,yc,Tc,Pn,Bc,Fc,ne,Cn,Do,Ec,kc,zn,Wo,Mc,Ic,An,Vo,jc,Pc,qn,Uo,Cc,zc,K,Ro,Ac,Pe,qc,Ln,Lc,Nc,Nn,Sc,Oc,Dc,nt,Wc,st,Fs;return l=new Z({}),yt=new Z({}),Lt=new Z({}),Nt=new P({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L69"}}),Ot=new P({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_flax_beit.py#L46"}}),Wt=new Z({}),Vt=new P({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
Vocabulary size of the BEiT model. Defines the number of different image tokens that can be used during
pre-training.`,name:"vocab_size"},{anchor:"transformers.BeitConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BeitConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BeitConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BeitConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BeitConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BeitConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BeitConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BeitConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BeitConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BeitConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.BeitConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.BeitConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.BeitConfig.use_mask_token",description:`<strong>use_mask_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a mask token for masked image modeling.`,name:"use_mask_token"},{anchor:"transformers.BeitConfig.use_absolute_position_embeddings",description:`<strong>use_absolute_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use BERT-style absolute position embeddings.`,name:"use_absolute_position_embeddings"},{anchor:"transformers.BeitConfig.use_relative_position_bias",description:`<strong>use_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use T5-style relative position embeddings in the self-attention layers.`,name:"use_relative_position_bias"},{anchor:"transformers.BeitConfig.use_shared_relative_position_bias",description:`<strong>use_shared_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use the same relative position embeddings across all self-attention layers of the Transformer.`,name:"use_shared_relative_position_bias"},{anchor:"transformers.BeitConfig.layer_scale_init_value",description:`<strong>layer_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Scale to use in the self-attention layers. 0.1 for base, 1e-5 for large. Set 0 to disable layer scale.`,name:"layer_scale_init_value"},{anchor:"transformers.BeitConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate per sample (when applied in the main path of residual layers).`,name:"drop_path_rate"},{anchor:"transformers.BeitConfig.use_mean_pooling",description:`<strong>use_mean_pooling</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to mean pool the final hidden states of the patches instead of using the final hidden state of the
CLS token, before applying the classification head.`,name:"use_mean_pooling"},{anchor:"transformers.BeitConfig.out_indices",description:`<strong>out_indices</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 5, 7, 11]</code>) &#x2014;
Indices of the feature maps to use for semantic segmentation.`,name:"out_indices"},{anchor:"transformers.BeitConfig.pool_scales",description:`<strong>pool_scales</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 6]</code>) &#x2014;
Pooling scales used in Pooling Pyramid Module applied on the last feature map.`,name:"pool_scales"},{anchor:"transformers.BeitConfig.use_auxiliary_head",description:`<strong>use_auxiliary_head</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use an auxiliary head during training.`,name:"use_auxiliary_head"},{anchor:"transformers.BeitConfig.auxiliary_loss_weight",description:`<strong>auxiliary_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Weight of the cross-entropy loss of the auxiliary head.`,name:"auxiliary_loss_weight"},{anchor:"transformers.BeitConfig.auxiliary_channels",description:`<strong>auxiliary_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Number of channels to use in the auxiliary head.`,name:"auxiliary_channels"},{anchor:"transformers.BeitConfig.auxiliary_num_convs",description:`<strong>auxiliary_num_convs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of convolutional layers to use in the auxiliary head.`,name:"auxiliary_num_convs"},{anchor:"transformers.BeitConfig.auxiliary_concat_input",description:`<strong>auxiliary_concat_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to concatenate the output of the auxiliary head with the input before the classification layer.`,name:"auxiliary_concat_input"},{anchor:"transformers.BeitConfig.semantic_loss_ignore_index",description:`<strong>semantic_loss_ignore_index</strong> (<code>int</code>, <em>optional</em>, defaults to 255) &#x2014;
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/configuration_beit.py#L34"}}),qe=new wt({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[th]},$$scope:{ctx:F}}}),Rt=new Z({}),Ht=new P({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.BeitFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.BeitFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.BeitFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.BeitFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.BeitFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.BeitFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.BeitFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.BeitFeatureExtractor.reduce_labels",description:`<strong>reduce_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to reduce all label values of segmentation maps by 1. Usually used for datasets where 0 is
used for background, and background itself is not included in all classes of a dataset (e.g. ADE20k). The
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/feature_extraction_beit.py#L36"}}),Xt=new P({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.BeitFeatureExtractor.__call__.segmentation_maps",description:`<strong>segmentation_maps</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding semantic segmentation maps with the pixel-wise annotations.`,name:"segmentation_maps"},{anchor:"transformers.BeitFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/feature_extraction_beit.py#L97",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>labels</strong> \u2014 Optional labels to be fed to a model (when <code>segmentation_maps</code> are provided)</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ne=new vt({props:{warning:!0,$$slots:{default:[oh]},$$scope:{ctx:F}}}),Gt=new Z({}),Kt=new P({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L630"}}),Qt=new P({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L657",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new vt({props:{$$slots:{default:[ah]},$$scope:{ctx:F}}}),De=new wt({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[nh]},$$scope:{ctx:F}}}),eo=new Z({}),to=new P({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L739"}}),no=new P({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"},{anchor:"transformers.BeitForMaskedImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L753",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
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
`}}),Ve=new vt({props:{$$slots:{default:[sh]},$$scope:{ctx:F}}}),Ue=new wt({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[rh]},$$scope:{ctx:F}}}),so=new Z({}),ro=new P({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L839"}}),co=new P({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L852",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
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
<p><code>transformers.modeling_outputs.ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new vt({props:{$$slots:{default:[ih]},$$scope:{ctx:F}}}),Je=new wt({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[lh]},$$scope:{ctx:F}}}),mo=new Z({}),po=new P({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L1148"}}),uo=new P({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_beit.py#L1192",returnDescription:`
<p>A <code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new vt({props:{$$slots:{default:[dh]},$$scope:{ctx:F}}}),Ke=new wt({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[ch]},$$scope:{ctx:F}}}),go=new Z({}),_o=new P({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_flax_beit.py#L743"}}),Bo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_flax_beit.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.beit.configuration_beit.BeitConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</li>
<li><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</li>
<li><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new vt({props:{$$slots:{default:[mh]},$$scope:{ctx:F}}}),Qe=new wt({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[ph]},$$scope:{ctx:F}}}),Fo=new Z({}),Eo=new P({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_flax_beit.py#L827"}}),Ao=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_flax_beit.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.beit.configuration_beit.BeitConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new vt({props:{$$slots:{default:[hh]},$$scope:{ctx:F}}}),ot=new wt({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[fh]},$$scope:{ctx:F}}}),qo=new Z({}),Lo=new P({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_flax_beit.py#L914"}}),Ro=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/beit/modeling_flax_beit.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.beit.configuration_beit.BeitConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nt=new vt({props:{$$slots:{default:[uh]},$$scope:{ctx:F}}}),st=new wt({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[gh]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=m(),u=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=m(),E=a("span"),er=r("BEiT"),Zn=m(),de=a("h2"),Ce=a("a"),ja=a("span"),w(yt.$$.fragment),tr=m(),Pa=a("span"),or=r("Overview"),Qn=m(),V=a("p"),ar=r("The BEiT model was proposed in "),Tt=a("a"),nr=r("BEiT: BERT Pre-Training of Image Transformers"),sr=r(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Bt=a("a"),rr=r("original ViT paper"),ir=r(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Ft=a("a"),lr=r("DALL-E model"),dr=r(` given masked
patches.`),es=m(),Xo=a("p"),cr=r("The abstract from the paper is the following:"),ts=m(),Go=a("p"),Ca=a("em"),mr=r(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),os=m(),Ko=a("p"),pr=r("Tips:"),as=m(),C=a("ul"),k=a("li"),hr=r(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Yo=a("a"),fr=r("original model (ViT)"),ur=r(" as well as "),Zo=a("a"),gr=r("Data-efficient Image Transformers (DeiT)"),_r=r(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Et=a("a"),br=r("here"),vr=r(` (you can just replace
`),Qo=a("a"),wr=r("ViTFeatureExtractor"),xr=r(" by "),ea=a("a"),$r=r("BeitFeatureExtractor"),yr=r(` and
`),ta=a("a"),Tr=r("ViTForImageClassification"),Br=r(" by "),oa=a("a"),Fr=r("BeitForImageClassification"),Er=r(")."),kr=m(),kt=a("li"),Mr=r(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Mt=a("a"),Ir=r("here"),jr=r("."),Pr=m(),It=a("li"),Cr=r(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),aa=a("a"),zr=r("BeitFeatureExtractor"),Ar=r(" to resize (or rescale) and normalize images for the model."),qr=m(),ce=a("li"),Lr=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),za=a("code"),Nr=r("microsoft/beit-base-patch16-224"),Sr=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),jt=a("a"),Or=r("hub"),Dr=r("."),Wr=m(),me=a("li"),Vr=r("The available checkpoints are either (1) pre-trained on "),Pt=a("a"),Ur=r("ImageNet-22k"),Rr=r(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Ct=a("a"),Hr=r("ImageNet-1k"),Jr=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Xr=m(),S=a("li"),Gr=r(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Aa=a("code"),Kr=r("use_relative_position_bias"),Yr=r(` or the
`),qa=a("code"),Zr=r("use_relative_position_bias"),Qr=r(" attribute of "),na=a("a"),ei=r("BeitConfig"),ti=r(" to "),La=a("code"),oi=r("True"),ai=r(` in order to add
position embeddings.`),ns=m(),U=a("p"),ni=r("This model was contributed by "),zt=a("a"),si=r("nielsr"),ri=r(`. The JAX/FLAX version of this model was
contributed by `),At=a("a"),ii=r("kamalkraj"),li=r(". The original code can be found "),qt=a("a"),di=r("here"),ci=r("."),ss=m(),pe=a("h2"),ze=a("a"),Na=a("span"),w(Lt.$$.fragment),mi=m(),Sa=a("span"),pi=r("BEiT specific outputs"),rs=m(),he=a("div"),w(Nt.$$.fragment),hi=m(),St=a("p"),fi=r("Class for outputs of "),sa=a("a"),ui=r("BeitModel"),gi=r("."),is=m(),fe=a("div"),w(Ot.$$.fragment),_i=m(),Dt=a("p"),bi=r("Class for outputs of "),ra=a("a"),vi=r("FlaxBeitModel"),wi=r("."),ls=m(),ue=a("h2"),Ae=a("a"),Oa=a("span"),w(Wt.$$.fragment),xi=m(),Da=a("span"),$i=r("BeitConfig"),ds=m(),Q=a("div"),w(Vt.$$.fragment),yi=m(),ge=a("p"),Ti=r("This is the configuration class to store the configuration of a "),ia=a("a"),Bi=r("BeitModel"),Fi=r(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ut=a("a"),Ei=r("microsoft/beit-base-patch16-224-pt22k"),ki=r(" architecture."),Mi=m(),w(qe.$$.fragment),cs=m(),_e=a("h2"),Le=a("a"),Wa=a("span"),w(Rt.$$.fragment),Ii=m(),Va=a("span"),ji=r("BeitFeatureExtractor"),ms=m(),O=a("div"),w(Ht.$$.fragment),Pi=m(),Ua=a("p"),Ci=r("Constructs a BEiT feature extractor."),zi=m(),Jt=a("p"),Ai=r("This feature extractor inherits from "),la=a("a"),qi=r("FeatureExtractionMixin"),Li=r(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Ni=m(),re=a("div"),w(Xt.$$.fragment),Si=m(),Ra=a("p"),Oi=r("Main method to prepare for the model one or several image(s)."),Di=m(),w(Ne.$$.fragment),ps=m(),be=a("h2"),Se=a("a"),Ha=a("span"),w(Gt.$$.fragment),Wi=m(),Ja=a("span"),Vi=r("BeitModel"),hs=m(),ee=a("div"),w(Kt.$$.fragment),Ui=m(),Yt=a("p"),Ri=r(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zt=a("a"),Hi=r("torch.nn.Module"),Ji=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi=m(),R=a("div"),w(Qt.$$.fragment),Gi=m(),ve=a("p"),Ki=r("The "),da=a("a"),Yi=r("BeitModel"),Zi=r(" forward method, overrides the "),Xa=a("code"),Qi=r("__call__"),el=r(" special method."),tl=m(),w(Oe.$$.fragment),ol=m(),w(De.$$.fragment),fs=m(),we=a("h2"),We=a("a"),Ga=a("span"),w(eo.$$.fragment),al=m(),Ka=a("span"),nl=r("BeitForMaskedImageModeling"),us=m(),te=a("div"),w(to.$$.fragment),sl=m(),oo=a("p"),rl=r(`Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens).
This model is a PyTorch `),ao=a("a"),il=r("torch.nn.Module"),ll=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=m(),H=a("div"),w(no.$$.fragment),cl=m(),xe=a("p"),ml=r("The "),ca=a("a"),pl=r("BeitForMaskedImageModeling"),hl=r(" forward method, overrides the "),Ya=a("code"),fl=r("__call__"),ul=r(" special method."),gl=m(),w(Ve.$$.fragment),_l=m(),w(Ue.$$.fragment),gs=m(),$e=a("h2"),Re=a("a"),Za=a("span"),w(so.$$.fragment),bl=m(),Qa=a("span"),vl=r("BeitForImageClassification"),_s=m(),D=a("div"),w(ro.$$.fragment),wl=m(),en=a("p"),xl=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),$l=m(),io=a("p"),yl=r("This model is a PyTorch "),lo=a("a"),Tl=r("torch.nn.Module"),Bl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fl=m(),J=a("div"),w(co.$$.fragment),El=m(),ye=a("p"),kl=r("The "),ma=a("a"),Ml=r("BeitForImageClassification"),Il=r(" forward method, overrides the "),tn=a("code"),jl=r("__call__"),Pl=r(" special method."),Cl=m(),w(He.$$.fragment),zl=m(),w(Je.$$.fragment),bs=m(),Te=a("h2"),Xe=a("a"),on=a("span"),w(mo.$$.fragment),Al=m(),an=a("span"),ql=r("BeitForSemanticSegmentation"),vs=m(),W=a("div"),w(po.$$.fragment),Ll=m(),nn=a("p"),Nl=r("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Sl=m(),ho=a("p"),Ol=r("This model is a PyTorch "),fo=a("a"),Dl=r("torch.nn.Module"),Wl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vl=m(),X=a("div"),w(uo.$$.fragment),Ul=m(),Be=a("p"),Rl=r("The "),pa=a("a"),Hl=r("BeitForSemanticSegmentation"),Jl=r(" forward method, overrides the "),sn=a("code"),Xl=r("__call__"),Gl=r(" special method."),Kl=m(),w(Ge.$$.fragment),Yl=m(),w(Ke.$$.fragment),ws=m(),Fe=a("h2"),Ye=a("a"),rn=a("span"),w(go.$$.fragment),Zl=m(),ln=a("span"),Ql=r("FlaxBeitModel"),xs=m(),M=a("div"),w(_o.$$.fragment),ed=m(),dn=a("p"),td=r("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),od=m(),bo=a("p"),ad=r("This model inherits from "),ha=a("a"),nd=r("FlaxPreTrainedModel"),sd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rd=m(),vo=a("p"),id=r("This model is also a Flax Linen "),wo=a("a"),ld=r("flax.linen.Module"),dd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cd=m(),cn=a("p"),md=r("Finally, this model supports inherent JAX features such as:"),pd=m(),oe=a("ul"),mn=a("li"),xo=a("a"),hd=r("Just-In-Time (JIT) compilation"),fd=m(),pn=a("li"),$o=a("a"),ud=r("Automatic Differentiation"),gd=m(),hn=a("li"),yo=a("a"),_d=r("Vectorization"),bd=m(),fn=a("li"),To=a("a"),vd=r("Parallelization"),wd=m(),G=a("div"),w(Bo.$$.fragment),xd=m(),Ee=a("p"),$d=r("The "),un=a("code"),yd=r("FlaxBeitPreTrainedModel"),Td=r(" forward method, overrides the "),gn=a("code"),Bd=r("__call__"),Fd=r(" special method."),Ed=m(),w(Ze.$$.fragment),kd=m(),w(Qe.$$.fragment),$s=m(),ke=a("h2"),et=a("a"),_n=a("span"),w(Fo.$$.fragment),Md=m(),bn=a("span"),Id=r("FlaxBeitForMaskedImageModeling"),ys=m(),I=a("div"),w(Eo.$$.fragment),jd=m(),vn=a("p"),Pd=r("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Cd=m(),ko=a("p"),zd=r("This model inherits from "),fa=a("a"),Ad=r("FlaxPreTrainedModel"),qd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ld=m(),Mo=a("p"),Nd=r("This model is also a Flax Linen "),Io=a("a"),Sd=r("flax.linen.Module"),Od=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dd=m(),wn=a("p"),Wd=r("Finally, this model supports inherent JAX features such as:"),Vd=m(),ae=a("ul"),xn=a("li"),jo=a("a"),Ud=r("Just-In-Time (JIT) compilation"),Rd=m(),$n=a("li"),Po=a("a"),Hd=r("Automatic Differentiation"),Jd=m(),yn=a("li"),Co=a("a"),Xd=r("Vectorization"),Gd=m(),Tn=a("li"),zo=a("a"),Kd=r("Parallelization"),Yd=m(),A=a("div"),w(Ao.$$.fragment),Zd=m(),Me=a("p"),Qd=r("The "),Bn=a("code"),ec=r("FlaxBeitPreTrainedModel"),tc=r(" forward method, overrides the "),Fn=a("code"),oc=r("__call__"),ac=r(" special method."),nc=m(),w(tt.$$.fragment),sc=m(),Ie=a("p"),rc=r("bool_masked_pos ("),En=a("code"),ic=r("numpy.ndarray"),lc=r(" of shape "),kn=a("code"),dc=r("(batch_size, num_patches)"),cc=r(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),mc=m(),w(ot.$$.fragment),Ts=m(),je=a("h2"),at=a("a"),Mn=a("span"),w(qo.$$.fragment),pc=m(),In=a("span"),hc=r("FlaxBeitForImageClassification"),Bs=m(),j=a("div"),w(Lo.$$.fragment),fc=m(),jn=a("p"),uc=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),gc=m(),No=a("p"),_c=r("This model inherits from "),ua=a("a"),bc=r("FlaxPreTrainedModel"),vc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wc=m(),So=a("p"),xc=r("This model is also a Flax Linen "),Oo=a("a"),$c=r("flax.linen.Module"),yc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tc=m(),Pn=a("p"),Bc=r("Finally, this model supports inherent JAX features such as:"),Fc=m(),ne=a("ul"),Cn=a("li"),Do=a("a"),Ec=r("Just-In-Time (JIT) compilation"),kc=m(),zn=a("li"),Wo=a("a"),Mc=r("Automatic Differentiation"),Ic=m(),An=a("li"),Vo=a("a"),jc=r("Vectorization"),Pc=m(),qn=a("li"),Uo=a("a"),Cc=r("Parallelization"),zc=m(),K=a("div"),w(Ro.$$.fragment),Ac=m(),Pe=a("p"),qc=r("The "),Ln=a("code"),Lc=r("FlaxBeitPreTrainedModel"),Nc=r(" forward method, overrides the "),Nn=a("code"),Sc=r("__call__"),Oc=r(" special method."),Dc=m(),w(nt.$$.fragment),Wc=m(),w(st.$$.fragment),this.h()},l(o){const g=Qp('[data-svelte="svelte-1phssyn"]',document.head);c=n(g,"META",{name:!0,content:!0}),g.forEach(t),v=p(o),u=n(o,"H1",{class:!0});var Ho=s(u);f=n(Ho,"A",{id:!0,class:!0,href:!0});var Sn=s(f);b=n(Sn,"SPAN",{});var On=s(b);x(l.$$.fragment,On),On.forEach(t),Sn.forEach(t),h=p(Ho),E=n(Ho,"SPAN",{});var Dn=s(E);er=i(Dn,"BEiT"),Dn.forEach(t),Ho.forEach(t),Zn=p(o),de=n(o,"H2",{class:!0});var Jo=s(de);Ce=n(Jo,"A",{id:!0,class:!0,href:!0});var Wn=s(Ce);ja=n(Wn,"SPAN",{});var Vn=s(ja);x(yt.$$.fragment,Vn),Vn.forEach(t),Wn.forEach(t),tr=p(Jo),Pa=n(Jo,"SPAN",{});var Un=s(Pa);or=i(Un,"Overview"),Un.forEach(t),Jo.forEach(t),Qn=p(o),V=n(o,"P",{});var se=s(V);ar=i(se,"The BEiT model was proposed in "),Tt=n(se,"A",{href:!0,rel:!0});var Rn=s(Tt);nr=i(Rn,"BEiT: BERT Pre-Training of Image Transformers"),Rn.forEach(t),sr=i(se,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Bt=n(se,"A",{href:!0,rel:!0});var Hn=s(Bt);rr=i(Hn,"original ViT paper"),Hn.forEach(t),ir=i(se,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Ft=n(se,"A",{href:!0,rel:!0});var Jn=s(Ft);lr=i(Jn,"DALL-E model"),Jn.forEach(t),dr=i(se,` given masked
patches.`),se.forEach(t),es=p(o),Xo=n(o,"P",{});var Xn=s(Xo);cr=i(Xn,"The abstract from the paper is the following:"),Xn.forEach(t),ts=p(o),Go=n(o,"P",{});var Gn=s(Go);Ca=n(Gn,"EM",{});var Kn=s(Ca);mr=i(Kn,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),Kn.forEach(t),Gn.forEach(t),os=p(o),Ko=n(o,"P",{});var Yn=s(Ko);pr=i(Yn,"Tips:"),Yn.forEach(t),as=p(o),C=n(o,"UL",{});var Y=s(C);k=n(Y,"LI",{});var z=s(k);hr=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Yo=n(z,"A",{href:!0});var Vc=s(Yo);fr=i(Vc,"original model (ViT)"),Vc.forEach(t),ur=i(z," as well as "),Zo=n(z,"A",{href:!0});var Uc=s(Zo);gr=i(Uc,"Data-efficient Image Transformers (DeiT)"),Uc.forEach(t),_r=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Et=n(z,"A",{href:!0,rel:!0});var Rc=s(Et);br=i(Rc,"here"),Rc.forEach(t),vr=i(z,` (you can just replace
`),Qo=n(z,"A",{href:!0});var Hc=s(Qo);wr=i(Hc,"ViTFeatureExtractor"),Hc.forEach(t),xr=i(z," by "),ea=n(z,"A",{href:!0});var Jc=s(ea);$r=i(Jc,"BeitFeatureExtractor"),Jc.forEach(t),yr=i(z,` and
`),ta=n(z,"A",{href:!0});var Xc=s(ta);Tr=i(Xc,"ViTForImageClassification"),Xc.forEach(t),Br=i(z," by "),oa=n(z,"A",{href:!0});var Gc=s(oa);Fr=i(Gc,"BeitForImageClassification"),Gc.forEach(t),Er=i(z,")."),z.forEach(t),kr=p(Y),kt=n(Y,"LI",{});var Es=s(kt);Mr=i(Es,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Mt=n(Es,"A",{href:!0,rel:!0});var Kc=s(Mt);Ir=i(Kc,"here"),Kc.forEach(t),jr=i(Es,"."),Es.forEach(t),Pr=p(Y),It=n(Y,"LI",{});var ks=s(It);Cr=i(ks,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),aa=n(ks,"A",{href:!0});var Yc=s(aa);zr=i(Yc,"BeitFeatureExtractor"),Yc.forEach(t),Ar=i(ks," to resize (or rescale) and normalize images for the model."),ks.forEach(t),qr=p(Y),ce=n(Y,"LI",{});var ga=s(ce);Lr=i(ga,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),za=n(ga,"CODE",{});var Zc=s(za);Nr=i(Zc,"microsoft/beit-base-patch16-224"),Zc.forEach(t),Sr=i(ga,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),jt=n(ga,"A",{href:!0,rel:!0});var Qc=s(jt);Or=i(Qc,"hub"),Qc.forEach(t),Dr=i(ga,"."),ga.forEach(t),Wr=p(Y),me=n(Y,"LI",{});var _a=s(me);Vr=i(_a,"The available checkpoints are either (1) pre-trained on "),Pt=n(_a,"A",{href:!0,rel:!0});var em=s(Pt);Ur=i(em,"ImageNet-22k"),em.forEach(t),Rr=i(_a,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Ct=n(_a,"A",{href:!0,rel:!0});var tm=s(Ct);Hr=i(tm,"ImageNet-1k"),tm.forEach(t),Jr=i(_a,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),_a.forEach(t),Xr=p(Y),S=n(Y,"LI",{});var ie=s(S);Gr=i(ie,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Aa=n(ie,"CODE",{});var om=s(Aa);Kr=i(om,"use_relative_position_bias"),om.forEach(t),Yr=i(ie,` or the
`),qa=n(ie,"CODE",{});var am=s(qa);Zr=i(am,"use_relative_position_bias"),am.forEach(t),Qr=i(ie," attribute of "),na=n(ie,"A",{href:!0});var nm=s(na);ei=i(nm,"BeitConfig"),nm.forEach(t),ti=i(ie," to "),La=n(ie,"CODE",{});var sm=s(La);oi=i(sm,"True"),sm.forEach(t),ai=i(ie,` in order to add
position embeddings.`),ie.forEach(t),Y.forEach(t),ns=p(o),U=n(o,"P",{});var rt=s(U);ni=i(rt,"This model was contributed by "),zt=n(rt,"A",{href:!0,rel:!0});var rm=s(zt);si=i(rm,"nielsr"),rm.forEach(t),ri=i(rt,`. The JAX/FLAX version of this model was
contributed by `),At=n(rt,"A",{href:!0,rel:!0});var im=s(At);ii=i(im,"kamalkraj"),im.forEach(t),li=i(rt,". The original code can be found "),qt=n(rt,"A",{href:!0,rel:!0});var lm=s(qt);di=i(lm,"here"),lm.forEach(t),ci=i(rt,"."),rt.forEach(t),ss=p(o),pe=n(o,"H2",{class:!0});var Ms=s(pe);ze=n(Ms,"A",{id:!0,class:!0,href:!0});var dm=s(ze);Na=n(dm,"SPAN",{});var cm=s(Na);x(Lt.$$.fragment,cm),cm.forEach(t),dm.forEach(t),mi=p(Ms),Sa=n(Ms,"SPAN",{});var mm=s(Sa);pi=i(mm,"BEiT specific outputs"),mm.forEach(t),Ms.forEach(t),rs=p(o),he=n(o,"DIV",{class:!0});var Is=s(he);x(Nt.$$.fragment,Is),hi=p(Is),St=n(Is,"P",{});var js=s(St);fi=i(js,"Class for outputs of "),sa=n(js,"A",{href:!0});var pm=s(sa);ui=i(pm,"BeitModel"),pm.forEach(t),gi=i(js,"."),js.forEach(t),Is.forEach(t),is=p(o),fe=n(o,"DIV",{class:!0});var Ps=s(fe);x(Ot.$$.fragment,Ps),_i=p(Ps),Dt=n(Ps,"P",{});var Cs=s(Dt);bi=i(Cs,"Class for outputs of "),ra=n(Cs,"A",{href:!0});var hm=s(ra);vi=i(hm,"FlaxBeitModel"),hm.forEach(t),wi=i(Cs,"."),Cs.forEach(t),Ps.forEach(t),ls=p(o),ue=n(o,"H2",{class:!0});var zs=s(ue);Ae=n(zs,"A",{id:!0,class:!0,href:!0});var fm=s(Ae);Oa=n(fm,"SPAN",{});var um=s(Oa);x(Wt.$$.fragment,um),um.forEach(t),fm.forEach(t),xi=p(zs),Da=n(zs,"SPAN",{});var gm=s(Da);$i=i(gm,"BeitConfig"),gm.forEach(t),zs.forEach(t),ds=p(o),Q=n(o,"DIV",{class:!0});var ba=s(Q);x(Vt.$$.fragment,ba),yi=p(ba),ge=n(ba,"P",{});var va=s(ge);Ti=i(va,"This is the configuration class to store the configuration of a "),ia=n(va,"A",{href:!0});var _m=s(ia);Bi=i(_m,"BeitModel"),_m.forEach(t),Fi=i(va,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ut=n(va,"A",{href:!0,rel:!0});var bm=s(Ut);Ei=i(bm,"microsoft/beit-base-patch16-224-pt22k"),bm.forEach(t),ki=i(va," architecture."),va.forEach(t),Mi=p(ba),x(qe.$$.fragment,ba),ba.forEach(t),cs=p(o),_e=n(o,"H2",{class:!0});var As=s(_e);Le=n(As,"A",{id:!0,class:!0,href:!0});var vm=s(Le);Wa=n(vm,"SPAN",{});var wm=s(Wa);x(Rt.$$.fragment,wm),wm.forEach(t),vm.forEach(t),Ii=p(As),Va=n(As,"SPAN",{});var xm=s(Va);ji=i(xm,"BeitFeatureExtractor"),xm.forEach(t),As.forEach(t),ms=p(o),O=n(o,"DIV",{class:!0});var it=s(O);x(Ht.$$.fragment,it),Pi=p(it),Ua=n(it,"P",{});var $m=s(Ua);Ci=i($m,"Constructs a BEiT feature extractor."),$m.forEach(t),zi=p(it),Jt=n(it,"P",{});var qs=s(Jt);Ai=i(qs,"This feature extractor inherits from "),la=n(qs,"A",{href:!0});var ym=s(la);qi=i(ym,"FeatureExtractionMixin"),ym.forEach(t),Li=i(qs,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),qs.forEach(t),Ni=p(it),re=n(it,"DIV",{class:!0});var wa=s(re);x(Xt.$$.fragment,wa),Si=p(wa),Ra=n(wa,"P",{});var Tm=s(Ra);Oi=i(Tm,"Main method to prepare for the model one or several image(s)."),Tm.forEach(t),Di=p(wa),x(Ne.$$.fragment,wa),wa.forEach(t),it.forEach(t),ps=p(o),be=n(o,"H2",{class:!0});var Ls=s(be);Se=n(Ls,"A",{id:!0,class:!0,href:!0});var Bm=s(Se);Ha=n(Bm,"SPAN",{});var Fm=s(Ha);x(Gt.$$.fragment,Fm),Fm.forEach(t),Bm.forEach(t),Wi=p(Ls),Ja=n(Ls,"SPAN",{});var Em=s(Ja);Vi=i(Em,"BeitModel"),Em.forEach(t),Ls.forEach(t),hs=p(o),ee=n(o,"DIV",{class:!0});var xa=s(ee);x(Kt.$$.fragment,xa),Ui=p(xa),Yt=n(xa,"P",{});var Ns=s(Yt);Ri=i(Ns,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zt=n(Ns,"A",{href:!0,rel:!0});var km=s(Zt);Hi=i(km,"torch.nn.Module"),km.forEach(t),Ji=i(Ns,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ns.forEach(t),Xi=p(xa),R=n(xa,"DIV",{class:!0});var lt=s(R);x(Qt.$$.fragment,lt),Gi=p(lt),ve=n(lt,"P",{});var $a=s(ve);Ki=i($a,"The "),da=n($a,"A",{href:!0});var Mm=s(da);Yi=i(Mm,"BeitModel"),Mm.forEach(t),Zi=i($a," forward method, overrides the "),Xa=n($a,"CODE",{});var Im=s(Xa);Qi=i(Im,"__call__"),Im.forEach(t),el=i($a," special method."),$a.forEach(t),tl=p(lt),x(Oe.$$.fragment,lt),ol=p(lt),x(De.$$.fragment,lt),lt.forEach(t),xa.forEach(t),fs=p(o),we=n(o,"H2",{class:!0});var Ss=s(we);We=n(Ss,"A",{id:!0,class:!0,href:!0});var jm=s(We);Ga=n(jm,"SPAN",{});var Pm=s(Ga);x(eo.$$.fragment,Pm),Pm.forEach(t),jm.forEach(t),al=p(Ss),Ka=n(Ss,"SPAN",{});var Cm=s(Ka);nl=i(Cm,"BeitForMaskedImageModeling"),Cm.forEach(t),Ss.forEach(t),us=p(o),te=n(o,"DIV",{class:!0});var ya=s(te);x(to.$$.fragment,ya),sl=p(ya),oo=n(ya,"P",{});var Os=s(oo);rl=i(Os,`Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens).
This model is a PyTorch `),ao=n(Os,"A",{href:!0,rel:!0});var zm=s(ao);il=i(zm,"torch.nn.Module"),zm.forEach(t),ll=i(Os,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(t),dl=p(ya),H=n(ya,"DIV",{class:!0});var dt=s(H);x(no.$$.fragment,dt),cl=p(dt),xe=n(dt,"P",{});var Ta=s(xe);ml=i(Ta,"The "),ca=n(Ta,"A",{href:!0});var Am=s(ca);pl=i(Am,"BeitForMaskedImageModeling"),Am.forEach(t),hl=i(Ta," forward method, overrides the "),Ya=n(Ta,"CODE",{});var qm=s(Ya);fl=i(qm,"__call__"),qm.forEach(t),ul=i(Ta," special method."),Ta.forEach(t),gl=p(dt),x(Ve.$$.fragment,dt),_l=p(dt),x(Ue.$$.fragment,dt),dt.forEach(t),ya.forEach(t),gs=p(o),$e=n(o,"H2",{class:!0});var Ds=s($e);Re=n(Ds,"A",{id:!0,class:!0,href:!0});var Lm=s(Re);Za=n(Lm,"SPAN",{});var Nm=s(Za);x(so.$$.fragment,Nm),Nm.forEach(t),Lm.forEach(t),bl=p(Ds),Qa=n(Ds,"SPAN",{});var Sm=s(Qa);vl=i(Sm,"BeitForImageClassification"),Sm.forEach(t),Ds.forEach(t),_s=p(o),D=n(o,"DIV",{class:!0});var ct=s(D);x(ro.$$.fragment,ct),wl=p(ct),en=n(ct,"P",{});var Om=s(en);xl=i(Om,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Om.forEach(t),$l=p(ct),io=n(ct,"P",{});var Ws=s(io);yl=i(Ws,"This model is a PyTorch "),lo=n(Ws,"A",{href:!0,rel:!0});var Dm=s(lo);Tl=i(Dm,"torch.nn.Module"),Dm.forEach(t),Bl=i(Ws,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ws.forEach(t),Fl=p(ct),J=n(ct,"DIV",{class:!0});var mt=s(J);x(co.$$.fragment,mt),El=p(mt),ye=n(mt,"P",{});var Ba=s(ye);kl=i(Ba,"The "),ma=n(Ba,"A",{href:!0});var Wm=s(ma);Ml=i(Wm,"BeitForImageClassification"),Wm.forEach(t),Il=i(Ba," forward method, overrides the "),tn=n(Ba,"CODE",{});var Vm=s(tn);jl=i(Vm,"__call__"),Vm.forEach(t),Pl=i(Ba," special method."),Ba.forEach(t),Cl=p(mt),x(He.$$.fragment,mt),zl=p(mt),x(Je.$$.fragment,mt),mt.forEach(t),ct.forEach(t),bs=p(o),Te=n(o,"H2",{class:!0});var Vs=s(Te);Xe=n(Vs,"A",{id:!0,class:!0,href:!0});var Um=s(Xe);on=n(Um,"SPAN",{});var Rm=s(on);x(mo.$$.fragment,Rm),Rm.forEach(t),Um.forEach(t),Al=p(Vs),an=n(Vs,"SPAN",{});var Hm=s(an);ql=i(Hm,"BeitForSemanticSegmentation"),Hm.forEach(t),Vs.forEach(t),vs=p(o),W=n(o,"DIV",{class:!0});var pt=s(W);x(po.$$.fragment,pt),Ll=p(pt),nn=n(pt,"P",{});var Jm=s(nn);Nl=i(Jm,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Jm.forEach(t),Sl=p(pt),ho=n(pt,"P",{});var Us=s(ho);Ol=i(Us,"This model is a PyTorch "),fo=n(Us,"A",{href:!0,rel:!0});var Xm=s(fo);Dl=i(Xm,"torch.nn.Module"),Xm.forEach(t),Wl=i(Us,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Us.forEach(t),Vl=p(pt),X=n(pt,"DIV",{class:!0});var ht=s(X);x(uo.$$.fragment,ht),Ul=p(ht),Be=n(ht,"P",{});var Fa=s(Be);Rl=i(Fa,"The "),pa=n(Fa,"A",{href:!0});var Gm=s(pa);Hl=i(Gm,"BeitForSemanticSegmentation"),Gm.forEach(t),Jl=i(Fa," forward method, overrides the "),sn=n(Fa,"CODE",{});var Km=s(sn);Xl=i(Km,"__call__"),Km.forEach(t),Gl=i(Fa," special method."),Fa.forEach(t),Kl=p(ht),x(Ge.$$.fragment,ht),Yl=p(ht),x(Ke.$$.fragment,ht),ht.forEach(t),pt.forEach(t),ws=p(o),Fe=n(o,"H2",{class:!0});var Rs=s(Fe);Ye=n(Rs,"A",{id:!0,class:!0,href:!0});var Ym=s(Ye);rn=n(Ym,"SPAN",{});var Zm=s(rn);x(go.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),Zl=p(Rs),ln=n(Rs,"SPAN",{});var Qm=s(ln);Ql=i(Qm,"FlaxBeitModel"),Qm.forEach(t),Rs.forEach(t),xs=p(o),M=n(o,"DIV",{class:!0});var q=s(M);x(_o.$$.fragment,q),ed=p(q),dn=n(q,"P",{});var ep=s(dn);td=i(ep,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),ep.forEach(t),od=p(q),bo=n(q,"P",{});var Hs=s(bo);ad=i(Hs,"This model inherits from "),ha=n(Hs,"A",{href:!0});var tp=s(ha);nd=i(tp,"FlaxPreTrainedModel"),tp.forEach(t),sd=i(Hs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hs.forEach(t),rd=p(q),vo=n(q,"P",{});var Js=s(vo);id=i(Js,"This model is also a Flax Linen "),wo=n(Js,"A",{href:!0,rel:!0});var op=s(wo);ld=i(op,"flax.linen.Module"),op.forEach(t),dd=i(Js,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Js.forEach(t),cd=p(q),cn=n(q,"P",{});var ap=s(cn);md=i(ap,"Finally, this model supports inherent JAX features such as:"),ap.forEach(t),pd=p(q),oe=n(q,"UL",{});var ft=s(oe);mn=n(ft,"LI",{});var np=s(mn);xo=n(np,"A",{href:!0,rel:!0});var sp=s(xo);hd=i(sp,"Just-In-Time (JIT) compilation"),sp.forEach(t),np.forEach(t),fd=p(ft),pn=n(ft,"LI",{});var rp=s(pn);$o=n(rp,"A",{href:!0,rel:!0});var ip=s($o);ud=i(ip,"Automatic Differentiation"),ip.forEach(t),rp.forEach(t),gd=p(ft),hn=n(ft,"LI",{});var lp=s(hn);yo=n(lp,"A",{href:!0,rel:!0});var dp=s(yo);_d=i(dp,"Vectorization"),dp.forEach(t),lp.forEach(t),bd=p(ft),fn=n(ft,"LI",{});var cp=s(fn);To=n(cp,"A",{href:!0,rel:!0});var mp=s(To);vd=i(mp,"Parallelization"),mp.forEach(t),cp.forEach(t),ft.forEach(t),wd=p(q),G=n(q,"DIV",{class:!0});var ut=s(G);x(Bo.$$.fragment,ut),xd=p(ut),Ee=n(ut,"P",{});var Ea=s(Ee);$d=i(Ea,"The "),un=n(Ea,"CODE",{});var pp=s(un);yd=i(pp,"FlaxBeitPreTrainedModel"),pp.forEach(t),Td=i(Ea," forward method, overrides the "),gn=n(Ea,"CODE",{});var hp=s(gn);Bd=i(hp,"__call__"),hp.forEach(t),Fd=i(Ea," special method."),Ea.forEach(t),Ed=p(ut),x(Ze.$$.fragment,ut),kd=p(ut),x(Qe.$$.fragment,ut),ut.forEach(t),q.forEach(t),$s=p(o),ke=n(o,"H2",{class:!0});var Xs=s(ke);et=n(Xs,"A",{id:!0,class:!0,href:!0});var fp=s(et);_n=n(fp,"SPAN",{});var up=s(_n);x(Fo.$$.fragment,up),up.forEach(t),fp.forEach(t),Md=p(Xs),bn=n(Xs,"SPAN",{});var gp=s(bn);Id=i(gp,"FlaxBeitForMaskedImageModeling"),gp.forEach(t),Xs.forEach(t),ys=p(o),I=n(o,"DIV",{class:!0});var L=s(I);x(Eo.$$.fragment,L),jd=p(L),vn=n(L,"P",{});var _p=s(vn);Pd=i(_p,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),_p.forEach(t),Cd=p(L),ko=n(L,"P",{});var Gs=s(ko);zd=i(Gs,"This model inherits from "),fa=n(Gs,"A",{href:!0});var bp=s(fa);Ad=i(bp,"FlaxPreTrainedModel"),bp.forEach(t),qd=i(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gs.forEach(t),Ld=p(L),Mo=n(L,"P",{});var Ks=s(Mo);Nd=i(Ks,"This model is also a Flax Linen "),Io=n(Ks,"A",{href:!0,rel:!0});var vp=s(Io);Sd=i(vp,"flax.linen.Module"),vp.forEach(t),Od=i(Ks,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ks.forEach(t),Dd=p(L),wn=n(L,"P",{});var wp=s(wn);Wd=i(wp,"Finally, this model supports inherent JAX features such as:"),wp.forEach(t),Vd=p(L),ae=n(L,"UL",{});var gt=s(ae);xn=n(gt,"LI",{});var xp=s(xn);jo=n(xp,"A",{href:!0,rel:!0});var $p=s(jo);Ud=i($p,"Just-In-Time (JIT) compilation"),$p.forEach(t),xp.forEach(t),Rd=p(gt),$n=n(gt,"LI",{});var yp=s($n);Po=n(yp,"A",{href:!0,rel:!0});var Tp=s(Po);Hd=i(Tp,"Automatic Differentiation"),Tp.forEach(t),yp.forEach(t),Jd=p(gt),yn=n(gt,"LI",{});var Bp=s(yn);Co=n(Bp,"A",{href:!0,rel:!0});var Fp=s(Co);Xd=i(Fp,"Vectorization"),Fp.forEach(t),Bp.forEach(t),Gd=p(gt),Tn=n(gt,"LI",{});var Ep=s(Tn);zo=n(Ep,"A",{href:!0,rel:!0});var kp=s(zo);Kd=i(kp,"Parallelization"),kp.forEach(t),Ep.forEach(t),gt.forEach(t),Yd=p(L),A=n(L,"DIV",{class:!0});var le=s(A);x(Ao.$$.fragment,le),Zd=p(le),Me=n(le,"P",{});var ka=s(Me);Qd=i(ka,"The "),Bn=n(ka,"CODE",{});var Mp=s(Bn);ec=i(Mp,"FlaxBeitPreTrainedModel"),Mp.forEach(t),tc=i(ka," forward method, overrides the "),Fn=n(ka,"CODE",{});var Ip=s(Fn);oc=i(Ip,"__call__"),Ip.forEach(t),ac=i(ka," special method."),ka.forEach(t),nc=p(le),x(tt.$$.fragment,le),sc=p(le),Ie=n(le,"P",{});var Ma=s(Ie);rc=i(Ma,"bool_masked_pos ("),En=n(Ma,"CODE",{});var jp=s(En);ic=i(jp,"numpy.ndarray"),jp.forEach(t),lc=i(Ma," of shape "),kn=n(Ma,"CODE",{});var Pp=s(kn);dc=i(Pp,"(batch_size, num_patches)"),Pp.forEach(t),cc=i(Ma,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Ma.forEach(t),mc=p(le),x(ot.$$.fragment,le),le.forEach(t),L.forEach(t),Ts=p(o),je=n(o,"H2",{class:!0});var Ys=s(je);at=n(Ys,"A",{id:!0,class:!0,href:!0});var Cp=s(at);Mn=n(Cp,"SPAN",{});var zp=s(Mn);x(qo.$$.fragment,zp),zp.forEach(t),Cp.forEach(t),pc=p(Ys),In=n(Ys,"SPAN",{});var Ap=s(In);hc=i(Ap,"FlaxBeitForImageClassification"),Ap.forEach(t),Ys.forEach(t),Bs=p(o),j=n(o,"DIV",{class:!0});var N=s(j);x(Lo.$$.fragment,N),fc=p(N),jn=n(N,"P",{});var qp=s(jn);uc=i(qp,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),qp.forEach(t),gc=p(N),No=n(N,"P",{});var Zs=s(No);_c=i(Zs,"This model inherits from "),ua=n(Zs,"A",{href:!0});var Lp=s(ua);bc=i(Lp,"FlaxPreTrainedModel"),Lp.forEach(t),vc=i(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zs.forEach(t),wc=p(N),So=n(N,"P",{});var Qs=s(So);xc=i(Qs,"This model is also a Flax Linen "),Oo=n(Qs,"A",{href:!0,rel:!0});var Np=s(Oo);$c=i(Np,"flax.linen.Module"),Np.forEach(t),yc=i(Qs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qs.forEach(t),Tc=p(N),Pn=n(N,"P",{});var Sp=s(Pn);Bc=i(Sp,"Finally, this model supports inherent JAX features such as:"),Sp.forEach(t),Fc=p(N),ne=n(N,"UL",{});var _t=s(ne);Cn=n(_t,"LI",{});var Op=s(Cn);Do=n(Op,"A",{href:!0,rel:!0});var Dp=s(Do);Ec=i(Dp,"Just-In-Time (JIT) compilation"),Dp.forEach(t),Op.forEach(t),kc=p(_t),zn=n(_t,"LI",{});var Wp=s(zn);Wo=n(Wp,"A",{href:!0,rel:!0});var Vp=s(Wo);Mc=i(Vp,"Automatic Differentiation"),Vp.forEach(t),Wp.forEach(t),Ic=p(_t),An=n(_t,"LI",{});var Up=s(An);Vo=n(Up,"A",{href:!0,rel:!0});var Rp=s(Vo);jc=i(Rp,"Vectorization"),Rp.forEach(t),Up.forEach(t),Pc=p(_t),qn=n(_t,"LI",{});var Hp=s(qn);Uo=n(Hp,"A",{href:!0,rel:!0});var Jp=s(Uo);Cc=i(Jp,"Parallelization"),Jp.forEach(t),Hp.forEach(t),_t.forEach(t),zc=p(N),K=n(N,"DIV",{class:!0});var bt=s(K);x(Ro.$$.fragment,bt),Ac=p(bt),Pe=n(bt,"P",{});var Ia=s(Pe);qc=i(Ia,"The "),Ln=n(Ia,"CODE",{});var Xp=s(Ln);Lc=i(Xp,"FlaxBeitPreTrainedModel"),Xp.forEach(t),Nc=i(Ia," forward method, overrides the "),Nn=n(Ia,"CODE",{});var Gp=s(Nn);Sc=i(Gp,"__call__"),Gp.forEach(t),Oc=i(Ia," special method."),Ia.forEach(t),Dc=p(bt),x(nt.$$.fragment,bt),Wc=p(bt),x(st.$$.fragment,bt),bt.forEach(t),N.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(bh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(u,"class","relative group"),d(Ce,"id","overview"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#overview"),d(de,"class","relative group"),d(Tt,"href","https://arxiv.org/abs/2106.08254"),d(Tt,"rel","nofollow"),d(Bt,"href","https://arxiv.org/abs/2010.11929"),d(Bt,"rel","nofollow"),d(Ft,"href","https://arxiv.org/abs/2102.12092"),d(Ft,"rel","nofollow"),d(Yo,"href","vit"),d(Zo,"href","deit"),d(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(Et,"rel","nofollow"),d(Qo,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(ea,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(ta,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),d(oa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(Mt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(Mt,"rel","nofollow"),d(aa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(jt,"href","https://huggingface.co/models?search=microsoft/beit"),d(jt,"rel","nofollow"),d(Pt,"href","http://www.image-net.org/"),d(Pt,"rel","nofollow"),d(Ct,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(Ct,"rel","nofollow"),d(na,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"),d(zt,"href","https://huggingface.co/nielsr"),d(zt,"rel","nofollow"),d(At,"href","https://huggingface.co/kamalkraj"),d(At,"rel","nofollow"),d(qt,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(qt,"rel","nofollow"),d(ze,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(pe,"class","relative group"),d(sa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ra,"href","/docs/transformers/main/en/model_doc/beit#transformers.FlaxBeitModel"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.BeitConfig"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.BeitConfig"),d(ue,"class","relative group"),d(ia,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(Ut,"href","https://huggingface.co/microsoft/beit-base-patch16-224-pt22k"),d(Ut,"rel","nofollow"),d(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Le,"id","transformers.BeitFeatureExtractor"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.BeitFeatureExtractor"),d(_e,"class","relative group"),d(la,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.BeitModel"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.BeitModel"),d(be,"class","relative group"),d(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Zt,"rel","nofollow"),d(da,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitForMaskedImageModeling"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitForMaskedImageModeling"),d(we,"class","relative group"),d(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ao,"rel","nofollow"),d(ca,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.BeitForImageClassification"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.BeitForImageClassification"),d($e,"class","relative group"),d(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lo,"rel","nofollow"),d(ma,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForSemanticSegmentation"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForSemanticSegmentation"),d(Te,"class","relative group"),d(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(fo,"rel","nofollow"),d(pa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ye,"id","transformers.FlaxBeitModel"),d(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ye,"href","#transformers.FlaxBeitModel"),d(Fe,"class","relative group"),d(ha,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(wo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(wo,"rel","nofollow"),d(xo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(xo,"rel","nofollow"),d($o,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d($o,"rel","nofollow"),d(yo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(yo,"rel","nofollow"),d(To,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(To,"rel","nofollow"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(et,"id","transformers.FlaxBeitForMaskedImageModeling"),d(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(et,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(ke,"class","relative group"),d(fa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Io,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Io,"rel","nofollow"),d(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(jo,"rel","nofollow"),d(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Po,"rel","nofollow"),d(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Co,"rel","nofollow"),d(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(zo,"rel","nofollow"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(at,"id","transformers.FlaxBeitForImageClassification"),d(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(at,"href","#transformers.FlaxBeitForImageClassification"),d(je,"class","relative group"),d(ua,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Oo,"rel","nofollow"),d(Do,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Do,"rel","nofollow"),d(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wo,"rel","nofollow"),d(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Vo,"rel","nofollow"),d(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Uo,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,u,g),e(u,f),e(f,b),$(l,b,null),e(u,h),e(u,E),e(E,er),_(o,Zn,g),_(o,de,g),e(de,Ce),e(Ce,ja),$(yt,ja,null),e(de,tr),e(de,Pa),e(Pa,or),_(o,Qn,g),_(o,V,g),e(V,ar),e(V,Tt),e(Tt,nr),e(V,sr),e(V,Bt),e(Bt,rr),e(V,ir),e(V,Ft),e(Ft,lr),e(V,dr),_(o,es,g),_(o,Xo,g),e(Xo,cr),_(o,ts,g),_(o,Go,g),e(Go,Ca),e(Ca,mr),_(o,os,g),_(o,Ko,g),e(Ko,pr),_(o,as,g),_(o,C,g),e(C,k),e(k,hr),e(k,Yo),e(Yo,fr),e(k,ur),e(k,Zo),e(Zo,gr),e(k,_r),e(k,Et),e(Et,br),e(k,vr),e(k,Qo),e(Qo,wr),e(k,xr),e(k,ea),e(ea,$r),e(k,yr),e(k,ta),e(ta,Tr),e(k,Br),e(k,oa),e(oa,Fr),e(k,Er),e(C,kr),e(C,kt),e(kt,Mr),e(kt,Mt),e(Mt,Ir),e(kt,jr),e(C,Pr),e(C,It),e(It,Cr),e(It,aa),e(aa,zr),e(It,Ar),e(C,qr),e(C,ce),e(ce,Lr),e(ce,za),e(za,Nr),e(ce,Sr),e(ce,jt),e(jt,Or),e(ce,Dr),e(C,Wr),e(C,me),e(me,Vr),e(me,Pt),e(Pt,Ur),e(me,Rr),e(me,Ct),e(Ct,Hr),e(me,Jr),e(C,Xr),e(C,S),e(S,Gr),e(S,Aa),e(Aa,Kr),e(S,Yr),e(S,qa),e(qa,Zr),e(S,Qr),e(S,na),e(na,ei),e(S,ti),e(S,La),e(La,oi),e(S,ai),_(o,ns,g),_(o,U,g),e(U,ni),e(U,zt),e(zt,si),e(U,ri),e(U,At),e(At,ii),e(U,li),e(U,qt),e(qt,di),e(U,ci),_(o,ss,g),_(o,pe,g),e(pe,ze),e(ze,Na),$(Lt,Na,null),e(pe,mi),e(pe,Sa),e(Sa,pi),_(o,rs,g),_(o,he,g),$(Nt,he,null),e(he,hi),e(he,St),e(St,fi),e(St,sa),e(sa,ui),e(St,gi),_(o,is,g),_(o,fe,g),$(Ot,fe,null),e(fe,_i),e(fe,Dt),e(Dt,bi),e(Dt,ra),e(ra,vi),e(Dt,wi),_(o,ls,g),_(o,ue,g),e(ue,Ae),e(Ae,Oa),$(Wt,Oa,null),e(ue,xi),e(ue,Da),e(Da,$i),_(o,ds,g),_(o,Q,g),$(Vt,Q,null),e(Q,yi),e(Q,ge),e(ge,Ti),e(ge,ia),e(ia,Bi),e(ge,Fi),e(ge,Ut),e(Ut,Ei),e(ge,ki),e(Q,Mi),$(qe,Q,null),_(o,cs,g),_(o,_e,g),e(_e,Le),e(Le,Wa),$(Rt,Wa,null),e(_e,Ii),e(_e,Va),e(Va,ji),_(o,ms,g),_(o,O,g),$(Ht,O,null),e(O,Pi),e(O,Ua),e(Ua,Ci),e(O,zi),e(O,Jt),e(Jt,Ai),e(Jt,la),e(la,qi),e(Jt,Li),e(O,Ni),e(O,re),$(Xt,re,null),e(re,Si),e(re,Ra),e(Ra,Oi),e(re,Di),$(Ne,re,null),_(o,ps,g),_(o,be,g),e(be,Se),e(Se,Ha),$(Gt,Ha,null),e(be,Wi),e(be,Ja),e(Ja,Vi),_(o,hs,g),_(o,ee,g),$(Kt,ee,null),e(ee,Ui),e(ee,Yt),e(Yt,Ri),e(Yt,Zt),e(Zt,Hi),e(Yt,Ji),e(ee,Xi),e(ee,R),$(Qt,R,null),e(R,Gi),e(R,ve),e(ve,Ki),e(ve,da),e(da,Yi),e(ve,Zi),e(ve,Xa),e(Xa,Qi),e(ve,el),e(R,tl),$(Oe,R,null),e(R,ol),$(De,R,null),_(o,fs,g),_(o,we,g),e(we,We),e(We,Ga),$(eo,Ga,null),e(we,al),e(we,Ka),e(Ka,nl),_(o,us,g),_(o,te,g),$(to,te,null),e(te,sl),e(te,oo),e(oo,rl),e(oo,ao),e(ao,il),e(oo,ll),e(te,dl),e(te,H),$(no,H,null),e(H,cl),e(H,xe),e(xe,ml),e(xe,ca),e(ca,pl),e(xe,hl),e(xe,Ya),e(Ya,fl),e(xe,ul),e(H,gl),$(Ve,H,null),e(H,_l),$(Ue,H,null),_(o,gs,g),_(o,$e,g),e($e,Re),e(Re,Za),$(so,Za,null),e($e,bl),e($e,Qa),e(Qa,vl),_(o,_s,g),_(o,D,g),$(ro,D,null),e(D,wl),e(D,en),e(en,xl),e(D,$l),e(D,io),e(io,yl),e(io,lo),e(lo,Tl),e(io,Bl),e(D,Fl),e(D,J),$(co,J,null),e(J,El),e(J,ye),e(ye,kl),e(ye,ma),e(ma,Ml),e(ye,Il),e(ye,tn),e(tn,jl),e(ye,Pl),e(J,Cl),$(He,J,null),e(J,zl),$(Je,J,null),_(o,bs,g),_(o,Te,g),e(Te,Xe),e(Xe,on),$(mo,on,null),e(Te,Al),e(Te,an),e(an,ql),_(o,vs,g),_(o,W,g),$(po,W,null),e(W,Ll),e(W,nn),e(nn,Nl),e(W,Sl),e(W,ho),e(ho,Ol),e(ho,fo),e(fo,Dl),e(ho,Wl),e(W,Vl),e(W,X),$(uo,X,null),e(X,Ul),e(X,Be),e(Be,Rl),e(Be,pa),e(pa,Hl),e(Be,Jl),e(Be,sn),e(sn,Xl),e(Be,Gl),e(X,Kl),$(Ge,X,null),e(X,Yl),$(Ke,X,null),_(o,ws,g),_(o,Fe,g),e(Fe,Ye),e(Ye,rn),$(go,rn,null),e(Fe,Zl),e(Fe,ln),e(ln,Ql),_(o,xs,g),_(o,M,g),$(_o,M,null),e(M,ed),e(M,dn),e(dn,td),e(M,od),e(M,bo),e(bo,ad),e(bo,ha),e(ha,nd),e(bo,sd),e(M,rd),e(M,vo),e(vo,id),e(vo,wo),e(wo,ld),e(vo,dd),e(M,cd),e(M,cn),e(cn,md),e(M,pd),e(M,oe),e(oe,mn),e(mn,xo),e(xo,hd),e(oe,fd),e(oe,pn),e(pn,$o),e($o,ud),e(oe,gd),e(oe,hn),e(hn,yo),e(yo,_d),e(oe,bd),e(oe,fn),e(fn,To),e(To,vd),e(M,wd),e(M,G),$(Bo,G,null),e(G,xd),e(G,Ee),e(Ee,$d),e(Ee,un),e(un,yd),e(Ee,Td),e(Ee,gn),e(gn,Bd),e(Ee,Fd),e(G,Ed),$(Ze,G,null),e(G,kd),$(Qe,G,null),_(o,$s,g),_(o,ke,g),e(ke,et),e(et,_n),$(Fo,_n,null),e(ke,Md),e(ke,bn),e(bn,Id),_(o,ys,g),_(o,I,g),$(Eo,I,null),e(I,jd),e(I,vn),e(vn,Pd),e(I,Cd),e(I,ko),e(ko,zd),e(ko,fa),e(fa,Ad),e(ko,qd),e(I,Ld),e(I,Mo),e(Mo,Nd),e(Mo,Io),e(Io,Sd),e(Mo,Od),e(I,Dd),e(I,wn),e(wn,Wd),e(I,Vd),e(I,ae),e(ae,xn),e(xn,jo),e(jo,Ud),e(ae,Rd),e(ae,$n),e($n,Po),e(Po,Hd),e(ae,Jd),e(ae,yn),e(yn,Co),e(Co,Xd),e(ae,Gd),e(ae,Tn),e(Tn,zo),e(zo,Kd),e(I,Yd),e(I,A),$(Ao,A,null),e(A,Zd),e(A,Me),e(Me,Qd),e(Me,Bn),e(Bn,ec),e(Me,tc),e(Me,Fn),e(Fn,oc),e(Me,ac),e(A,nc),$(tt,A,null),e(A,sc),e(A,Ie),e(Ie,rc),e(Ie,En),e(En,ic),e(Ie,lc),e(Ie,kn),e(kn,dc),e(Ie,cc),e(A,mc),$(ot,A,null),_(o,Ts,g),_(o,je,g),e(je,at),e(at,Mn),$(qo,Mn,null),e(je,pc),e(je,In),e(In,hc),_(o,Bs,g),_(o,j,g),$(Lo,j,null),e(j,fc),e(j,jn),e(jn,uc),e(j,gc),e(j,No),e(No,_c),e(No,ua),e(ua,bc),e(No,vc),e(j,wc),e(j,So),e(So,xc),e(So,Oo),e(Oo,$c),e(So,yc),e(j,Tc),e(j,Pn),e(Pn,Bc),e(j,Fc),e(j,ne),e(ne,Cn),e(Cn,Do),e(Do,Ec),e(ne,kc),e(ne,zn),e(zn,Wo),e(Wo,Mc),e(ne,Ic),e(ne,An),e(An,Vo),e(Vo,jc),e(ne,Pc),e(ne,qn),e(qn,Uo),e(Uo,Cc),e(j,zc),e(j,K),$(Ro,K,null),e(K,Ac),e(K,Pe),e(Pe,qc),e(Pe,Ln),e(Ln,Lc),e(Pe,Nc),e(Pe,Nn),e(Nn,Sc),e(Pe,Oc),e(K,Dc),$(nt,K,null),e(K,Wc),$(st,K,null),Fs=!0},p(o,[g]){const Ho={};g&2&&(Ho.$$scope={dirty:g,ctx:o}),qe.$set(Ho);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:o}),Ne.$set(Sn);const On={};g&2&&(On.$$scope={dirty:g,ctx:o}),Oe.$set(On);const Dn={};g&2&&(Dn.$$scope={dirty:g,ctx:o}),De.$set(Dn);const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:o}),Ve.$set(Jo);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:o}),Ue.$set(Wn);const Vn={};g&2&&(Vn.$$scope={dirty:g,ctx:o}),He.$set(Vn);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:o}),Je.$set(Un);const se={};g&2&&(se.$$scope={dirty:g,ctx:o}),Ge.$set(se);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:o}),Ke.$set(Rn);const Hn={};g&2&&(Hn.$$scope={dirty:g,ctx:o}),Ze.$set(Hn);const Jn={};g&2&&(Jn.$$scope={dirty:g,ctx:o}),Qe.$set(Jn);const Xn={};g&2&&(Xn.$$scope={dirty:g,ctx:o}),tt.$set(Xn);const Gn={};g&2&&(Gn.$$scope={dirty:g,ctx:o}),ot.$set(Gn);const Kn={};g&2&&(Kn.$$scope={dirty:g,ctx:o}),nt.$set(Kn);const Yn={};g&2&&(Yn.$$scope={dirty:g,ctx:o}),st.$set(Yn)},i(o){Fs||(y(l.$$.fragment,o),y(yt.$$.fragment,o),y(Lt.$$.fragment,o),y(Nt.$$.fragment,o),y(Ot.$$.fragment,o),y(Wt.$$.fragment,o),y(Vt.$$.fragment,o),y(qe.$$.fragment,o),y(Rt.$$.fragment,o),y(Ht.$$.fragment,o),y(Xt.$$.fragment,o),y(Ne.$$.fragment,o),y(Gt.$$.fragment,o),y(Kt.$$.fragment,o),y(Qt.$$.fragment,o),y(Oe.$$.fragment,o),y(De.$$.fragment,o),y(eo.$$.fragment,o),y(to.$$.fragment,o),y(no.$$.fragment,o),y(Ve.$$.fragment,o),y(Ue.$$.fragment,o),y(so.$$.fragment,o),y(ro.$$.fragment,o),y(co.$$.fragment,o),y(He.$$.fragment,o),y(Je.$$.fragment,o),y(mo.$$.fragment,o),y(po.$$.fragment,o),y(uo.$$.fragment,o),y(Ge.$$.fragment,o),y(Ke.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(Bo.$$.fragment,o),y(Ze.$$.fragment,o),y(Qe.$$.fragment,o),y(Fo.$$.fragment,o),y(Eo.$$.fragment,o),y(Ao.$$.fragment,o),y(tt.$$.fragment,o),y(ot.$$.fragment,o),y(qo.$$.fragment,o),y(Lo.$$.fragment,o),y(Ro.$$.fragment,o),y(nt.$$.fragment,o),y(st.$$.fragment,o),Fs=!0)},o(o){T(l.$$.fragment,o),T(yt.$$.fragment,o),T(Lt.$$.fragment,o),T(Nt.$$.fragment,o),T(Ot.$$.fragment,o),T(Wt.$$.fragment,o),T(Vt.$$.fragment,o),T(qe.$$.fragment,o),T(Rt.$$.fragment,o),T(Ht.$$.fragment,o),T(Xt.$$.fragment,o),T(Ne.$$.fragment,o),T(Gt.$$.fragment,o),T(Kt.$$.fragment,o),T(Qt.$$.fragment,o),T(Oe.$$.fragment,o),T(De.$$.fragment,o),T(eo.$$.fragment,o),T(to.$$.fragment,o),T(no.$$.fragment,o),T(Ve.$$.fragment,o),T(Ue.$$.fragment,o),T(so.$$.fragment,o),T(ro.$$.fragment,o),T(co.$$.fragment,o),T(He.$$.fragment,o),T(Je.$$.fragment,o),T(mo.$$.fragment,o),T(po.$$.fragment,o),T(uo.$$.fragment,o),T(Ge.$$.fragment,o),T(Ke.$$.fragment,o),T(go.$$.fragment,o),T(_o.$$.fragment,o),T(Bo.$$.fragment,o),T(Ze.$$.fragment,o),T(Qe.$$.fragment,o),T(Fo.$$.fragment,o),T(Eo.$$.fragment,o),T(Ao.$$.fragment,o),T(tt.$$.fragment,o),T(ot.$$.fragment,o),T(qo.$$.fragment,o),T(Lo.$$.fragment,o),T(Ro.$$.fragment,o),T(nt.$$.fragment,o),T(st.$$.fragment,o),Fs=!1},d(o){t(c),o&&t(v),o&&t(u),B(l),o&&t(Zn),o&&t(de),B(yt),o&&t(Qn),o&&t(V),o&&t(es),o&&t(Xo),o&&t(ts),o&&t(Go),o&&t(os),o&&t(Ko),o&&t(as),o&&t(C),o&&t(ns),o&&t(U),o&&t(ss),o&&t(pe),B(Lt),o&&t(rs),o&&t(he),B(Nt),o&&t(is),o&&t(fe),B(Ot),o&&t(ls),o&&t(ue),B(Wt),o&&t(ds),o&&t(Q),B(Vt),B(qe),o&&t(cs),o&&t(_e),B(Rt),o&&t(ms),o&&t(O),B(Ht),B(Xt),B(Ne),o&&t(ps),o&&t(be),B(Gt),o&&t(hs),o&&t(ee),B(Kt),B(Qt),B(Oe),B(De),o&&t(fs),o&&t(we),B(eo),o&&t(us),o&&t(te),B(to),B(no),B(Ve),B(Ue),o&&t(gs),o&&t($e),B(so),o&&t(_s),o&&t(D),B(ro),B(co),B(He),B(Je),o&&t(bs),o&&t(Te),B(mo),o&&t(vs),o&&t(W),B(po),B(uo),B(Ge),B(Ke),o&&t(ws),o&&t(Fe),B(go),o&&t(xs),o&&t(M),B(_o),B(Bo),B(Ze),B(Qe),o&&t($s),o&&t(ke),B(Fo),o&&t(ys),o&&t(I),B(Eo),B(Ao),B(tt),B(ot),o&&t(Ts),o&&t(je),B(qo),o&&t(Bs),o&&t(j),B(Lo),B(Ro),B(nt),B(st)}}}const bh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function vh(F){return eh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fh extends Kp{constructor(c){super();Yp(this,c,vh,_h,Zp,{})}}export{Fh as default,bh as metadata};
