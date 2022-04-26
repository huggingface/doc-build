import{S as Km,i as Ym,s as Zm,e as a,k as p,w,t as n,M as Qm,c as s,d as t,m,a as r,x,h as i,b as d,F as e,g as _,y as $,q as y,o as T,B,v as eh,L as xt}from"../../chunks/vendor-6b77c823.js";import{T as vt}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as $t}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as wt}from"../../chunks/ExampleCodeBlock-5212b321.js";function th(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitModel, BeitConfig

# Initializing a BEiT beit-base-patch16-224-in22k style configuration
configuration = BeitConfig()

# Initializing a model from the beit-base-patch16-224-in22k style configuration
model = BeitModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitModel, BeitConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BEiT beit-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BeitConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the beit-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function oh(F){let c,v;return{c(){c=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=s(u,"P",{});var f=r(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(u,f){_(u,c,f),e(c,v)},d(u){u&&t(c)}}}function ah(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function sh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function rh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function nh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function ih(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
tabby, tabby cat`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function dh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function ch(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")
model = BeitForSemanticSegmentation.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
# logits are of shape (batch_size, num_labels, height, width)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># logits are of shape (batch_size, num_labels, height, width)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function ph(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function mh(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function hh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function uh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function _h(F){let c,v,u,f,b,l,h,E,Qr,Ys,de,Ce,ja,yt,en,Pa,tn,Zs,V,on,Tt,an,sn,Bt,rn,nn,Ft,ln,dn,Qs,Xo,cn,er,Go,Ca,pn,tr,Ko,mn,or,C,k,hn,Yo,fn,un,Zo,gn,_n,Et,bn,vn,Qo,wn,xn,ea,$n,yn,ta,Tn,Bn,oa,Fn,En,kn,kt,Mn,Mt,In,jn,Pn,It,Cn,aa,zn,An,qn,ce,Ln,za,Nn,Sn,jt,On,Dn,Wn,pe,Vn,Pt,Un,Rn,Ct,Hn,Jn,Xn,S,Gn,Aa,Kn,Yn,qa,Zn,Qn,sa,ei,ti,La,oi,ai,ar,U,si,zt,ri,ni,At,ii,li,qt,di,ci,sr,me,ze,Na,Lt,pi,Sa,mi,rr,he,Nt,hi,St,fi,ra,ui,gi,nr,fe,Ot,_i,Dt,bi,na,vi,wi,ir,ue,Ae,Oa,Wt,xi,Da,$i,lr,Q,Vt,yi,ge,Ti,ia,Bi,Fi,Ut,Ei,ki,Mi,qe,dr,_e,Le,Wa,Rt,Ii,Va,ji,cr,O,Ht,Pi,Ua,Ci,zi,Jt,Ai,la,qi,Li,Ni,ne,Xt,Si,Ra,Oi,Di,Ne,pr,be,Se,Ha,Gt,Wi,Ja,Vi,mr,ee,Kt,Ui,Yt,Ri,Zt,Hi,Ji,Xi,R,Qt,Gi,ve,Ki,da,Yi,Zi,Xa,Qi,el,tl,Oe,ol,De,hr,we,We,Ga,eo,al,Ka,sl,fr,te,to,rl,oo,nl,ao,il,ll,dl,H,so,cl,xe,pl,ca,ml,hl,Ya,fl,ul,gl,Ve,_l,Ue,ur,$e,Re,Za,ro,bl,Qa,vl,gr,D,no,wl,es,xl,$l,io,yl,lo,Tl,Bl,Fl,J,co,El,ye,kl,pa,Ml,Il,ts,jl,Pl,Cl,He,zl,Je,_r,Te,Xe,os,po,Al,as,ql,br,W,mo,Ll,ss,Nl,Sl,ho,Ol,fo,Dl,Wl,Vl,X,uo,Ul,Be,Rl,ma,Hl,Jl,rs,Xl,Gl,Kl,Ge,Yl,Ke,vr,Fe,Ye,ns,go,Zl,is,Ql,wr,M,_o,ed,ls,td,od,bo,ad,ha,sd,rd,nd,vo,id,wo,ld,dd,cd,ds,pd,md,oe,cs,xo,hd,fd,ps,$o,ud,gd,ms,yo,_d,bd,hs,To,vd,wd,G,Bo,xd,Ee,$d,fs,yd,Td,us,Bd,Fd,Ed,Ze,kd,Qe,xr,ke,et,gs,Fo,Md,_s,Id,$r,I,Eo,jd,bs,Pd,Cd,ko,zd,fa,Ad,qd,Ld,Mo,Nd,Io,Sd,Od,Dd,vs,Wd,Vd,ae,ws,jo,Ud,Rd,xs,Po,Hd,Jd,$s,Co,Xd,Gd,ys,zo,Kd,Yd,A,Ao,Zd,Me,Qd,Ts,ec,tc,Bs,oc,ac,sc,tt,rc,Ie,nc,Fs,ic,lc,Es,dc,cc,pc,ot,yr,je,at,ks,qo,mc,Ms,hc,Tr,j,Lo,fc,Is,uc,gc,No,_c,ua,bc,vc,wc,So,xc,Oo,$c,yc,Tc,js,Bc,Fc,se,Ps,Do,Ec,kc,Cs,Wo,Mc,Ic,zs,Vo,jc,Pc,As,Uo,Cc,zc,K,Ro,Ac,Pe,qc,qs,Lc,Nc,Ls,Sc,Oc,Dc,st,Wc,rt,Br;return l=new Z({}),yt=new Z({}),Lt=new Z({}),Nt=new P({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L68"}}),Ot=new P({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_flax_beit.py#L45"}}),Wt=new Z({}),Vt=new P({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
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
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/configuration_beit.py#L34"}}),qe=new wt({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[th]},$$scope:{ctx:F}}}),Rt=new Z({}),Ht=new P({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/feature_extraction_beit.py#L36"}}),Xt=new P({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.BeitFeatureExtractor.__call__.segmentation_maps",description:`<strong>segmentation_maps</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding semantic segmentation maps with the pixel-wise annotations.`,name:"segmentation_maps"},{anchor:"transformers.BeitFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/feature_extraction_beit.py#L97",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>labels</strong> \u2014 Optional labels to be fed to a model (when <code>segmentation_maps</code> are provided)</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ne=new vt({props:{warning:!0,$$slots:{default:[oh]},$$scope:{ctx:F}}}),Gt=new Z({}),Kt=new P({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L629"}}),Qt=new P({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new vt({props:{$$slots:{default:[ah]},$$scope:{ctx:F}}}),De=new wt({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[sh]},$$scope:{ctx:F}}}),eo=new Z({}),to=new P({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitModel"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L737"}}),so=new P({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"},{anchor:"transformers.BeitForMaskedImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L751",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new vt({props:{$$slots:{default:[rh]},$$scope:{ctx:F}}}),Ue=new wt({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[nh]},$$scope:{ctx:F}}}),ro=new Z({}),no=new P({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitModel"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L837"}}),co=new P({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L850",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig"
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
`}}),He=new vt({props:{$$slots:{default:[ih]},$$scope:{ctx:F}}}),Je=new wt({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[lh]},$$scope:{ctx:F}}}),po=new Z({}),mo=new P({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L1146"}}),uo=new P({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_beit.py#L1190",returnDescription:`
<p>A <code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig"
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
`}}),Ge=new vt({props:{$$slots:{default:[dh]},$$scope:{ctx:F}}}),Ke=new wt({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[ch]},$$scope:{ctx:F}}}),go=new Z({}),_o=new P({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_flax_beit.py#L724"}}),Bo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_flax_beit.py#L610",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
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
  href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new vt({props:{$$slots:{default:[ph]},$$scope:{ctx:F}}}),Qe=new wt({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[mh]},$$scope:{ctx:F}}}),Fo=new Z({}),Eo=new P({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_flax_beit.py#L808"}}),Ao=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_flax_beit.py#L610",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new vt({props:{$$slots:{default:[hh]},$$scope:{ctx:F}}}),ot=new wt({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[fh]},$$scope:{ctx:F}}}),qo=new Z({}),Lo=new P({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_flax_beit.py#L895"}}),Ro=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/beit/modeling_flax_beit.py#L610",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new vt({props:{$$slots:{default:[uh]},$$scope:{ctx:F}}}),rt=new wt({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[gh]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=p(),u=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=p(),E=a("span"),Qr=n("BEiT"),Ys=p(),de=a("h2"),Ce=a("a"),ja=a("span"),w(yt.$$.fragment),en=p(),Pa=a("span"),tn=n("Overview"),Zs=p(),V=a("p"),on=n("The BEiT model was proposed in "),Tt=a("a"),an=n("BEiT: BERT Pre-Training of Image Transformers"),sn=n(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Bt=a("a"),rn=n("original ViT paper"),nn=n(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Ft=a("a"),ln=n("DALL-E model"),dn=n(` given masked
patches.`),Qs=p(),Xo=a("p"),cn=n("The abstract from the paper is the following:"),er=p(),Go=a("p"),Ca=a("em"),pn=n(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),tr=p(),Ko=a("p"),mn=n("Tips:"),or=p(),C=a("ul"),k=a("li"),hn=n(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Yo=a("a"),fn=n("original model (ViT)"),un=n(" as well as "),Zo=a("a"),gn=n("Data-efficient Image Transformers (DeiT)"),_n=n(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Et=a("a"),bn=n("here"),vn=n(` (you can just replace
`),Qo=a("a"),wn=n("ViTFeatureExtractor"),xn=n(" by "),ea=a("a"),$n=n("BeitFeatureExtractor"),yn=n(` and
`),ta=a("a"),Tn=n("ViTForImageClassification"),Bn=n(" by "),oa=a("a"),Fn=n("BeitForImageClassification"),En=n(")."),kn=p(),kt=a("li"),Mn=n(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Mt=a("a"),In=n("here"),jn=n("."),Pn=p(),It=a("li"),Cn=n(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),aa=a("a"),zn=n("BeitFeatureExtractor"),An=n(" to resize (or rescale) and normalize images for the model."),qn=p(),ce=a("li"),Ln=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),za=a("code"),Nn=n("microsoft/beit-base-patch16-224"),Sn=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),jt=a("a"),On=n("hub"),Dn=n("."),Wn=p(),pe=a("li"),Vn=n("The available checkpoints are either (1) pre-trained on "),Pt=a("a"),Un=n("ImageNet-22k"),Rn=n(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Ct=a("a"),Hn=n("ImageNet-1k"),Jn=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Xn=p(),S=a("li"),Gn=n(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Aa=a("code"),Kn=n("use_relative_position_bias"),Yn=n(` or the
`),qa=a("code"),Zn=n("use_relative_position_bias"),Qn=n(" attribute of "),sa=a("a"),ei=n("BeitConfig"),ti=n(" to "),La=a("code"),oi=n("True"),ai=n(` in order to add
position embeddings.`),ar=p(),U=a("p"),si=n("This model was contributed by "),zt=a("a"),ri=n("nielsr"),ni=n(`. The JAX/FLAX version of this model was
contributed by `),At=a("a"),ii=n("kamalkraj"),li=n(". The original code can be found "),qt=a("a"),di=n("here"),ci=n("."),sr=p(),me=a("h2"),ze=a("a"),Na=a("span"),w(Lt.$$.fragment),pi=p(),Sa=a("span"),mi=n("BEiT specific outputs"),rr=p(),he=a("div"),w(Nt.$$.fragment),hi=p(),St=a("p"),fi=n("Class for outputs of "),ra=a("a"),ui=n("BeitModel"),gi=n("."),nr=p(),fe=a("div"),w(Ot.$$.fragment),_i=p(),Dt=a("p"),bi=n("Class for outputs of "),na=a("a"),vi=n("FlaxBeitModel"),wi=n("."),ir=p(),ue=a("h2"),Ae=a("a"),Oa=a("span"),w(Wt.$$.fragment),xi=p(),Da=a("span"),$i=n("BeitConfig"),lr=p(),Q=a("div"),w(Vt.$$.fragment),yi=p(),ge=a("p"),Ti=n("This is the configuration class to store the configuration of a "),ia=a("a"),Bi=n("BeitModel"),Fi=n(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ut=a("a"),Ei=n("microsoft/beit-base-patch16-224-in22k"),ki=n(" architecture."),Mi=p(),w(qe.$$.fragment),dr=p(),_e=a("h2"),Le=a("a"),Wa=a("span"),w(Rt.$$.fragment),Ii=p(),Va=a("span"),ji=n("BeitFeatureExtractor"),cr=p(),O=a("div"),w(Ht.$$.fragment),Pi=p(),Ua=a("p"),Ci=n("Constructs a BEiT feature extractor."),zi=p(),Jt=a("p"),Ai=n("This feature extractor inherits from "),la=a("a"),qi=n("FeatureExtractionMixin"),Li=n(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Ni=p(),ne=a("div"),w(Xt.$$.fragment),Si=p(),Ra=a("p"),Oi=n("Main method to prepare for the model one or several image(s)."),Di=p(),w(Ne.$$.fragment),pr=p(),be=a("h2"),Se=a("a"),Ha=a("span"),w(Gt.$$.fragment),Wi=p(),Ja=a("span"),Vi=n("BeitModel"),mr=p(),ee=a("div"),w(Kt.$$.fragment),Ui=p(),Yt=a("p"),Ri=n(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zt=a("a"),Hi=n("torch.nn.Module"),Ji=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi=p(),R=a("div"),w(Qt.$$.fragment),Gi=p(),ve=a("p"),Ki=n("The "),da=a("a"),Yi=n("BeitModel"),Zi=n(" forward method, overrides the "),Xa=a("code"),Qi=n("__call__"),el=n(" special method."),tl=p(),w(Oe.$$.fragment),ol=p(),w(De.$$.fragment),hr=p(),we=a("h2"),We=a("a"),Ga=a("span"),w(eo.$$.fragment),al=p(),Ka=a("span"),sl=n("BeitForMaskedImageModeling"),fr=p(),te=a("div"),w(to.$$.fragment),rl=p(),oo=a("p"),nl=n(`Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens).
This model is a PyTorch `),ao=a("a"),il=n("torch.nn.Module"),ll=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=p(),H=a("div"),w(so.$$.fragment),cl=p(),xe=a("p"),pl=n("The "),ca=a("a"),ml=n("BeitForMaskedImageModeling"),hl=n(" forward method, overrides the "),Ya=a("code"),fl=n("__call__"),ul=n(" special method."),gl=p(),w(Ve.$$.fragment),_l=p(),w(Ue.$$.fragment),ur=p(),$e=a("h2"),Re=a("a"),Za=a("span"),w(ro.$$.fragment),bl=p(),Qa=a("span"),vl=n("BeitForImageClassification"),gr=p(),D=a("div"),w(no.$$.fragment),wl=p(),es=a("p"),xl=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),$l=p(),io=a("p"),yl=n("This model is a PyTorch "),lo=a("a"),Tl=n("torch.nn.Module"),Bl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fl=p(),J=a("div"),w(co.$$.fragment),El=p(),ye=a("p"),kl=n("The "),pa=a("a"),Ml=n("BeitForImageClassification"),Il=n(" forward method, overrides the "),ts=a("code"),jl=n("__call__"),Pl=n(" special method."),Cl=p(),w(He.$$.fragment),zl=p(),w(Je.$$.fragment),_r=p(),Te=a("h2"),Xe=a("a"),os=a("span"),w(po.$$.fragment),Al=p(),as=a("span"),ql=n("BeitForSemanticSegmentation"),br=p(),W=a("div"),w(mo.$$.fragment),Ll=p(),ss=a("p"),Nl=n("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Sl=p(),ho=a("p"),Ol=n("This model is a PyTorch "),fo=a("a"),Dl=n("torch.nn.Module"),Wl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vl=p(),X=a("div"),w(uo.$$.fragment),Ul=p(),Be=a("p"),Rl=n("The "),ma=a("a"),Hl=n("BeitForSemanticSegmentation"),Jl=n(" forward method, overrides the "),rs=a("code"),Xl=n("__call__"),Gl=n(" special method."),Kl=p(),w(Ge.$$.fragment),Yl=p(),w(Ke.$$.fragment),vr=p(),Fe=a("h2"),Ye=a("a"),ns=a("span"),w(go.$$.fragment),Zl=p(),is=a("span"),Ql=n("FlaxBeitModel"),wr=p(),M=a("div"),w(_o.$$.fragment),ed=p(),ls=a("p"),td=n("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),od=p(),bo=a("p"),ad=n("This model inherits from "),ha=a("a"),sd=n("FlaxPreTrainedModel"),rd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nd=p(),vo=a("p"),id=n("This model is also a Flax Linen "),wo=a("a"),ld=n("flax.linen.Module"),dd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cd=p(),ds=a("p"),pd=n("Finally, this model supports inherent JAX features such as:"),md=p(),oe=a("ul"),cs=a("li"),xo=a("a"),hd=n("Just-In-Time (JIT) compilation"),fd=p(),ps=a("li"),$o=a("a"),ud=n("Automatic Differentiation"),gd=p(),ms=a("li"),yo=a("a"),_d=n("Vectorization"),bd=p(),hs=a("li"),To=a("a"),vd=n("Parallelization"),wd=p(),G=a("div"),w(Bo.$$.fragment),xd=p(),Ee=a("p"),$d=n("The "),fs=a("code"),yd=n("FlaxBeitPreTrainedModel"),Td=n(" forward method, overrides the "),us=a("code"),Bd=n("__call__"),Fd=n(" special method."),Ed=p(),w(Ze.$$.fragment),kd=p(),w(Qe.$$.fragment),xr=p(),ke=a("h2"),et=a("a"),gs=a("span"),w(Fo.$$.fragment),Md=p(),_s=a("span"),Id=n("FlaxBeitForMaskedImageModeling"),$r=p(),I=a("div"),w(Eo.$$.fragment),jd=p(),bs=a("p"),Pd=n("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Cd=p(),ko=a("p"),zd=n("This model inherits from "),fa=a("a"),Ad=n("FlaxPreTrainedModel"),qd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ld=p(),Mo=a("p"),Nd=n("This model is also a Flax Linen "),Io=a("a"),Sd=n("flax.linen.Module"),Od=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dd=p(),vs=a("p"),Wd=n("Finally, this model supports inherent JAX features such as:"),Vd=p(),ae=a("ul"),ws=a("li"),jo=a("a"),Ud=n("Just-In-Time (JIT) compilation"),Rd=p(),xs=a("li"),Po=a("a"),Hd=n("Automatic Differentiation"),Jd=p(),$s=a("li"),Co=a("a"),Xd=n("Vectorization"),Gd=p(),ys=a("li"),zo=a("a"),Kd=n("Parallelization"),Yd=p(),A=a("div"),w(Ao.$$.fragment),Zd=p(),Me=a("p"),Qd=n("The "),Ts=a("code"),ec=n("FlaxBeitPreTrainedModel"),tc=n(" forward method, overrides the "),Bs=a("code"),oc=n("__call__"),ac=n(" special method."),sc=p(),w(tt.$$.fragment),rc=p(),Ie=a("p"),nc=n("bool_masked_pos ("),Fs=a("code"),ic=n("numpy.ndarray"),lc=n(" of shape "),Es=a("code"),dc=n("(batch_size, num_patches)"),cc=n(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),pc=p(),w(ot.$$.fragment),yr=p(),je=a("h2"),at=a("a"),ks=a("span"),w(qo.$$.fragment),mc=p(),Ms=a("span"),hc=n("FlaxBeitForImageClassification"),Tr=p(),j=a("div"),w(Lo.$$.fragment),fc=p(),Is=a("p"),uc=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),gc=p(),No=a("p"),_c=n("This model inherits from "),ua=a("a"),bc=n("FlaxPreTrainedModel"),vc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wc=p(),So=a("p"),xc=n("This model is also a Flax Linen "),Oo=a("a"),$c=n("flax.linen.Module"),yc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tc=p(),js=a("p"),Bc=n("Finally, this model supports inherent JAX features such as:"),Fc=p(),se=a("ul"),Ps=a("li"),Do=a("a"),Ec=n("Just-In-Time (JIT) compilation"),kc=p(),Cs=a("li"),Wo=a("a"),Mc=n("Automatic Differentiation"),Ic=p(),zs=a("li"),Vo=a("a"),jc=n("Vectorization"),Pc=p(),As=a("li"),Uo=a("a"),Cc=n("Parallelization"),zc=p(),K=a("div"),w(Ro.$$.fragment),Ac=p(),Pe=a("p"),qc=n("The "),qs=a("code"),Lc=n("FlaxBeitPreTrainedModel"),Nc=n(" forward method, overrides the "),Ls=a("code"),Sc=n("__call__"),Oc=n(" special method."),Dc=p(),w(st.$$.fragment),Wc=p(),w(rt.$$.fragment),this.h()},l(o){const g=Qm('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),v=m(o),u=s(o,"H1",{class:!0});var Ho=r(u);f=s(Ho,"A",{id:!0,class:!0,href:!0});var Ns=r(f);b=s(Ns,"SPAN",{});var Ss=r(b);x(l.$$.fragment,Ss),Ss.forEach(t),Ns.forEach(t),h=m(Ho),E=s(Ho,"SPAN",{});var Os=r(E);Qr=i(Os,"BEiT"),Os.forEach(t),Ho.forEach(t),Ys=m(o),de=s(o,"H2",{class:!0});var Jo=r(de);Ce=s(Jo,"A",{id:!0,class:!0,href:!0});var Ds=r(Ce);ja=s(Ds,"SPAN",{});var Ws=r(ja);x(yt.$$.fragment,Ws),Ws.forEach(t),Ds.forEach(t),en=m(Jo),Pa=s(Jo,"SPAN",{});var Vs=r(Pa);tn=i(Vs,"Overview"),Vs.forEach(t),Jo.forEach(t),Zs=m(o),V=s(o,"P",{});var re=r(V);on=i(re,"The BEiT model was proposed in "),Tt=s(re,"A",{href:!0,rel:!0});var Us=r(Tt);an=i(Us,"BEiT: BERT Pre-Training of Image Transformers"),Us.forEach(t),sn=i(re,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Bt=s(re,"A",{href:!0,rel:!0});var Rs=r(Bt);rn=i(Rs,"original ViT paper"),Rs.forEach(t),nn=i(re,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Ft=s(re,"A",{href:!0,rel:!0});var Hs=r(Ft);ln=i(Hs,"DALL-E model"),Hs.forEach(t),dn=i(re,` given masked
patches.`),re.forEach(t),Qs=m(o),Xo=s(o,"P",{});var Js=r(Xo);cn=i(Js,"The abstract from the paper is the following:"),Js.forEach(t),er=m(o),Go=s(o,"P",{});var Xs=r(Go);Ca=s(Xs,"EM",{});var Gs=r(Ca);pn=i(Gs,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),Gs.forEach(t),Xs.forEach(t),tr=m(o),Ko=s(o,"P",{});var Ks=r(Ko);mn=i(Ks,"Tips:"),Ks.forEach(t),or=m(o),C=s(o,"UL",{});var Y=r(C);k=s(Y,"LI",{});var z=r(k);hn=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Yo=s(z,"A",{href:!0});var Vc=r(Yo);fn=i(Vc,"original model (ViT)"),Vc.forEach(t),un=i(z," as well as "),Zo=s(z,"A",{href:!0});var Uc=r(Zo);gn=i(Uc,"Data-efficient Image Transformers (DeiT)"),Uc.forEach(t),_n=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Et=s(z,"A",{href:!0,rel:!0});var Rc=r(Et);bn=i(Rc,"here"),Rc.forEach(t),vn=i(z,` (you can just replace
`),Qo=s(z,"A",{href:!0});var Hc=r(Qo);wn=i(Hc,"ViTFeatureExtractor"),Hc.forEach(t),xn=i(z," by "),ea=s(z,"A",{href:!0});var Jc=r(ea);$n=i(Jc,"BeitFeatureExtractor"),Jc.forEach(t),yn=i(z,` and
`),ta=s(z,"A",{href:!0});var Xc=r(ta);Tn=i(Xc,"ViTForImageClassification"),Xc.forEach(t),Bn=i(z," by "),oa=s(z,"A",{href:!0});var Gc=r(oa);Fn=i(Gc,"BeitForImageClassification"),Gc.forEach(t),En=i(z,")."),z.forEach(t),kn=m(Y),kt=s(Y,"LI",{});var Fr=r(kt);Mn=i(Fr,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Mt=s(Fr,"A",{href:!0,rel:!0});var Kc=r(Mt);In=i(Kc,"here"),Kc.forEach(t),jn=i(Fr,"."),Fr.forEach(t),Pn=m(Y),It=s(Y,"LI",{});var Er=r(It);Cn=i(Er,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),aa=s(Er,"A",{href:!0});var Yc=r(aa);zn=i(Yc,"BeitFeatureExtractor"),Yc.forEach(t),An=i(Er," to resize (or rescale) and normalize images for the model."),Er.forEach(t),qn=m(Y),ce=s(Y,"LI",{});var ga=r(ce);Ln=i(ga,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),za=s(ga,"CODE",{});var Zc=r(za);Nn=i(Zc,"microsoft/beit-base-patch16-224"),Zc.forEach(t),Sn=i(ga,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),jt=s(ga,"A",{href:!0,rel:!0});var Qc=r(jt);On=i(Qc,"hub"),Qc.forEach(t),Dn=i(ga,"."),ga.forEach(t),Wn=m(Y),pe=s(Y,"LI",{});var _a=r(pe);Vn=i(_a,"The available checkpoints are either (1) pre-trained on "),Pt=s(_a,"A",{href:!0,rel:!0});var ep=r(Pt);Un=i(ep,"ImageNet-22k"),ep.forEach(t),Rn=i(_a,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Ct=s(_a,"A",{href:!0,rel:!0});var tp=r(Ct);Hn=i(tp,"ImageNet-1k"),tp.forEach(t),Jn=i(_a,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),_a.forEach(t),Xn=m(Y),S=s(Y,"LI",{});var ie=r(S);Gn=i(ie,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Aa=s(ie,"CODE",{});var op=r(Aa);Kn=i(op,"use_relative_position_bias"),op.forEach(t),Yn=i(ie,` or the
`),qa=s(ie,"CODE",{});var ap=r(qa);Zn=i(ap,"use_relative_position_bias"),ap.forEach(t),Qn=i(ie," attribute of "),sa=s(ie,"A",{href:!0});var sp=r(sa);ei=i(sp,"BeitConfig"),sp.forEach(t),ti=i(ie," to "),La=s(ie,"CODE",{});var rp=r(La);oi=i(rp,"True"),rp.forEach(t),ai=i(ie,` in order to add
position embeddings.`),ie.forEach(t),Y.forEach(t),ar=m(o),U=s(o,"P",{});var nt=r(U);si=i(nt,"This model was contributed by "),zt=s(nt,"A",{href:!0,rel:!0});var np=r(zt);ri=i(np,"nielsr"),np.forEach(t),ni=i(nt,`. The JAX/FLAX version of this model was
contributed by `),At=s(nt,"A",{href:!0,rel:!0});var ip=r(At);ii=i(ip,"kamalkraj"),ip.forEach(t),li=i(nt,". The original code can be found "),qt=s(nt,"A",{href:!0,rel:!0});var lp=r(qt);di=i(lp,"here"),lp.forEach(t),ci=i(nt,"."),nt.forEach(t),sr=m(o),me=s(o,"H2",{class:!0});var kr=r(me);ze=s(kr,"A",{id:!0,class:!0,href:!0});var dp=r(ze);Na=s(dp,"SPAN",{});var cp=r(Na);x(Lt.$$.fragment,cp),cp.forEach(t),dp.forEach(t),pi=m(kr),Sa=s(kr,"SPAN",{});var pp=r(Sa);mi=i(pp,"BEiT specific outputs"),pp.forEach(t),kr.forEach(t),rr=m(o),he=s(o,"DIV",{class:!0});var Mr=r(he);x(Nt.$$.fragment,Mr),hi=m(Mr),St=s(Mr,"P",{});var Ir=r(St);fi=i(Ir,"Class for outputs of "),ra=s(Ir,"A",{href:!0});var mp=r(ra);ui=i(mp,"BeitModel"),mp.forEach(t),gi=i(Ir,"."),Ir.forEach(t),Mr.forEach(t),nr=m(o),fe=s(o,"DIV",{class:!0});var jr=r(fe);x(Ot.$$.fragment,jr),_i=m(jr),Dt=s(jr,"P",{});var Pr=r(Dt);bi=i(Pr,"Class for outputs of "),na=s(Pr,"A",{href:!0});var hp=r(na);vi=i(hp,"FlaxBeitModel"),hp.forEach(t),wi=i(Pr,"."),Pr.forEach(t),jr.forEach(t),ir=m(o),ue=s(o,"H2",{class:!0});var Cr=r(ue);Ae=s(Cr,"A",{id:!0,class:!0,href:!0});var fp=r(Ae);Oa=s(fp,"SPAN",{});var up=r(Oa);x(Wt.$$.fragment,up),up.forEach(t),fp.forEach(t),xi=m(Cr),Da=s(Cr,"SPAN",{});var gp=r(Da);$i=i(gp,"BeitConfig"),gp.forEach(t),Cr.forEach(t),lr=m(o),Q=s(o,"DIV",{class:!0});var ba=r(Q);x(Vt.$$.fragment,ba),yi=m(ba),ge=s(ba,"P",{});var va=r(ge);Ti=i(va,"This is the configuration class to store the configuration of a "),ia=s(va,"A",{href:!0});var _p=r(ia);Bi=i(_p,"BeitModel"),_p.forEach(t),Fi=i(va,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ut=s(va,"A",{href:!0,rel:!0});var bp=r(Ut);Ei=i(bp,"microsoft/beit-base-patch16-224-in22k"),bp.forEach(t),ki=i(va," architecture."),va.forEach(t),Mi=m(ba),x(qe.$$.fragment,ba),ba.forEach(t),dr=m(o),_e=s(o,"H2",{class:!0});var zr=r(_e);Le=s(zr,"A",{id:!0,class:!0,href:!0});var vp=r(Le);Wa=s(vp,"SPAN",{});var wp=r(Wa);x(Rt.$$.fragment,wp),wp.forEach(t),vp.forEach(t),Ii=m(zr),Va=s(zr,"SPAN",{});var xp=r(Va);ji=i(xp,"BeitFeatureExtractor"),xp.forEach(t),zr.forEach(t),cr=m(o),O=s(o,"DIV",{class:!0});var it=r(O);x(Ht.$$.fragment,it),Pi=m(it),Ua=s(it,"P",{});var $p=r(Ua);Ci=i($p,"Constructs a BEiT feature extractor."),$p.forEach(t),zi=m(it),Jt=s(it,"P",{});var Ar=r(Jt);Ai=i(Ar,"This feature extractor inherits from "),la=s(Ar,"A",{href:!0});var yp=r(la);qi=i(yp,"FeatureExtractionMixin"),yp.forEach(t),Li=i(Ar,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Ar.forEach(t),Ni=m(it),ne=s(it,"DIV",{class:!0});var wa=r(ne);x(Xt.$$.fragment,wa),Si=m(wa),Ra=s(wa,"P",{});var Tp=r(Ra);Oi=i(Tp,"Main method to prepare for the model one or several image(s)."),Tp.forEach(t),Di=m(wa),x(Ne.$$.fragment,wa),wa.forEach(t),it.forEach(t),pr=m(o),be=s(o,"H2",{class:!0});var qr=r(be);Se=s(qr,"A",{id:!0,class:!0,href:!0});var Bp=r(Se);Ha=s(Bp,"SPAN",{});var Fp=r(Ha);x(Gt.$$.fragment,Fp),Fp.forEach(t),Bp.forEach(t),Wi=m(qr),Ja=s(qr,"SPAN",{});var Ep=r(Ja);Vi=i(Ep,"BeitModel"),Ep.forEach(t),qr.forEach(t),mr=m(o),ee=s(o,"DIV",{class:!0});var xa=r(ee);x(Kt.$$.fragment,xa),Ui=m(xa),Yt=s(xa,"P",{});var Lr=r(Yt);Ri=i(Lr,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zt=s(Lr,"A",{href:!0,rel:!0});var kp=r(Zt);Hi=i(kp,"torch.nn.Module"),kp.forEach(t),Ji=i(Lr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lr.forEach(t),Xi=m(xa),R=s(xa,"DIV",{class:!0});var lt=r(R);x(Qt.$$.fragment,lt),Gi=m(lt),ve=s(lt,"P",{});var $a=r(ve);Ki=i($a,"The "),da=s($a,"A",{href:!0});var Mp=r(da);Yi=i(Mp,"BeitModel"),Mp.forEach(t),Zi=i($a," forward method, overrides the "),Xa=s($a,"CODE",{});var Ip=r(Xa);Qi=i(Ip,"__call__"),Ip.forEach(t),el=i($a," special method."),$a.forEach(t),tl=m(lt),x(Oe.$$.fragment,lt),ol=m(lt),x(De.$$.fragment,lt),lt.forEach(t),xa.forEach(t),hr=m(o),we=s(o,"H2",{class:!0});var Nr=r(we);We=s(Nr,"A",{id:!0,class:!0,href:!0});var jp=r(We);Ga=s(jp,"SPAN",{});var Pp=r(Ga);x(eo.$$.fragment,Pp),Pp.forEach(t),jp.forEach(t),al=m(Nr),Ka=s(Nr,"SPAN",{});var Cp=r(Ka);sl=i(Cp,"BeitForMaskedImageModeling"),Cp.forEach(t),Nr.forEach(t),fr=m(o),te=s(o,"DIV",{class:!0});var ya=r(te);x(to.$$.fragment,ya),rl=m(ya),oo=s(ya,"P",{});var Sr=r(oo);nl=i(Sr,`Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens).
This model is a PyTorch `),ao=s(Sr,"A",{href:!0,rel:!0});var zp=r(ao);il=i(zp,"torch.nn.Module"),zp.forEach(t),ll=i(Sr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sr.forEach(t),dl=m(ya),H=s(ya,"DIV",{class:!0});var dt=r(H);x(so.$$.fragment,dt),cl=m(dt),xe=s(dt,"P",{});var Ta=r(xe);pl=i(Ta,"The "),ca=s(Ta,"A",{href:!0});var Ap=r(ca);ml=i(Ap,"BeitForMaskedImageModeling"),Ap.forEach(t),hl=i(Ta," forward method, overrides the "),Ya=s(Ta,"CODE",{});var qp=r(Ya);fl=i(qp,"__call__"),qp.forEach(t),ul=i(Ta," special method."),Ta.forEach(t),gl=m(dt),x(Ve.$$.fragment,dt),_l=m(dt),x(Ue.$$.fragment,dt),dt.forEach(t),ya.forEach(t),ur=m(o),$e=s(o,"H2",{class:!0});var Or=r($e);Re=s(Or,"A",{id:!0,class:!0,href:!0});var Lp=r(Re);Za=s(Lp,"SPAN",{});var Np=r(Za);x(ro.$$.fragment,Np),Np.forEach(t),Lp.forEach(t),bl=m(Or),Qa=s(Or,"SPAN",{});var Sp=r(Qa);vl=i(Sp,"BeitForImageClassification"),Sp.forEach(t),Or.forEach(t),gr=m(o),D=s(o,"DIV",{class:!0});var ct=r(D);x(no.$$.fragment,ct),wl=m(ct),es=s(ct,"P",{});var Op=r(es);xl=i(Op,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Op.forEach(t),$l=m(ct),io=s(ct,"P",{});var Dr=r(io);yl=i(Dr,"This model is a PyTorch "),lo=s(Dr,"A",{href:!0,rel:!0});var Dp=r(lo);Tl=i(Dp,"torch.nn.Module"),Dp.forEach(t),Bl=i(Dr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dr.forEach(t),Fl=m(ct),J=s(ct,"DIV",{class:!0});var pt=r(J);x(co.$$.fragment,pt),El=m(pt),ye=s(pt,"P",{});var Ba=r(ye);kl=i(Ba,"The "),pa=s(Ba,"A",{href:!0});var Wp=r(pa);Ml=i(Wp,"BeitForImageClassification"),Wp.forEach(t),Il=i(Ba," forward method, overrides the "),ts=s(Ba,"CODE",{});var Vp=r(ts);jl=i(Vp,"__call__"),Vp.forEach(t),Pl=i(Ba," special method."),Ba.forEach(t),Cl=m(pt),x(He.$$.fragment,pt),zl=m(pt),x(Je.$$.fragment,pt),pt.forEach(t),ct.forEach(t),_r=m(o),Te=s(o,"H2",{class:!0});var Wr=r(Te);Xe=s(Wr,"A",{id:!0,class:!0,href:!0});var Up=r(Xe);os=s(Up,"SPAN",{});var Rp=r(os);x(po.$$.fragment,Rp),Rp.forEach(t),Up.forEach(t),Al=m(Wr),as=s(Wr,"SPAN",{});var Hp=r(as);ql=i(Hp,"BeitForSemanticSegmentation"),Hp.forEach(t),Wr.forEach(t),br=m(o),W=s(o,"DIV",{class:!0});var mt=r(W);x(mo.$$.fragment,mt),Ll=m(mt),ss=s(mt,"P",{});var Jp=r(ss);Nl=i(Jp,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Jp.forEach(t),Sl=m(mt),ho=s(mt,"P",{});var Vr=r(ho);Ol=i(Vr,"This model is a PyTorch "),fo=s(Vr,"A",{href:!0,rel:!0});var Xp=r(fo);Dl=i(Xp,"torch.nn.Module"),Xp.forEach(t),Wl=i(Vr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vr.forEach(t),Vl=m(mt),X=s(mt,"DIV",{class:!0});var ht=r(X);x(uo.$$.fragment,ht),Ul=m(ht),Be=s(ht,"P",{});var Fa=r(Be);Rl=i(Fa,"The "),ma=s(Fa,"A",{href:!0});var Gp=r(ma);Hl=i(Gp,"BeitForSemanticSegmentation"),Gp.forEach(t),Jl=i(Fa," forward method, overrides the "),rs=s(Fa,"CODE",{});var Kp=r(rs);Xl=i(Kp,"__call__"),Kp.forEach(t),Gl=i(Fa," special method."),Fa.forEach(t),Kl=m(ht),x(Ge.$$.fragment,ht),Yl=m(ht),x(Ke.$$.fragment,ht),ht.forEach(t),mt.forEach(t),vr=m(o),Fe=s(o,"H2",{class:!0});var Ur=r(Fe);Ye=s(Ur,"A",{id:!0,class:!0,href:!0});var Yp=r(Ye);ns=s(Yp,"SPAN",{});var Zp=r(ns);x(go.$$.fragment,Zp),Zp.forEach(t),Yp.forEach(t),Zl=m(Ur),is=s(Ur,"SPAN",{});var Qp=r(is);Ql=i(Qp,"FlaxBeitModel"),Qp.forEach(t),Ur.forEach(t),wr=m(o),M=s(o,"DIV",{class:!0});var q=r(M);x(_o.$$.fragment,q),ed=m(q),ls=s(q,"P",{});var em=r(ls);td=i(em,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),em.forEach(t),od=m(q),bo=s(q,"P",{});var Rr=r(bo);ad=i(Rr,"This model inherits from "),ha=s(Rr,"A",{href:!0});var tm=r(ha);sd=i(tm,"FlaxPreTrainedModel"),tm.forEach(t),rd=i(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rr.forEach(t),nd=m(q),vo=s(q,"P",{});var Hr=r(vo);id=i(Hr,"This model is also a Flax Linen "),wo=s(Hr,"A",{href:!0,rel:!0});var om=r(wo);ld=i(om,"flax.linen.Module"),om.forEach(t),dd=i(Hr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hr.forEach(t),cd=m(q),ds=s(q,"P",{});var am=r(ds);pd=i(am,"Finally, this model supports inherent JAX features such as:"),am.forEach(t),md=m(q),oe=s(q,"UL",{});var ft=r(oe);cs=s(ft,"LI",{});var sm=r(cs);xo=s(sm,"A",{href:!0,rel:!0});var rm=r(xo);hd=i(rm,"Just-In-Time (JIT) compilation"),rm.forEach(t),sm.forEach(t),fd=m(ft),ps=s(ft,"LI",{});var nm=r(ps);$o=s(nm,"A",{href:!0,rel:!0});var im=r($o);ud=i(im,"Automatic Differentiation"),im.forEach(t),nm.forEach(t),gd=m(ft),ms=s(ft,"LI",{});var lm=r(ms);yo=s(lm,"A",{href:!0,rel:!0});var dm=r(yo);_d=i(dm,"Vectorization"),dm.forEach(t),lm.forEach(t),bd=m(ft),hs=s(ft,"LI",{});var cm=r(hs);To=s(cm,"A",{href:!0,rel:!0});var pm=r(To);vd=i(pm,"Parallelization"),pm.forEach(t),cm.forEach(t),ft.forEach(t),wd=m(q),G=s(q,"DIV",{class:!0});var ut=r(G);x(Bo.$$.fragment,ut),xd=m(ut),Ee=s(ut,"P",{});var Ea=r(Ee);$d=i(Ea,"The "),fs=s(Ea,"CODE",{});var mm=r(fs);yd=i(mm,"FlaxBeitPreTrainedModel"),mm.forEach(t),Td=i(Ea," forward method, overrides the "),us=s(Ea,"CODE",{});var hm=r(us);Bd=i(hm,"__call__"),hm.forEach(t),Fd=i(Ea," special method."),Ea.forEach(t),Ed=m(ut),x(Ze.$$.fragment,ut),kd=m(ut),x(Qe.$$.fragment,ut),ut.forEach(t),q.forEach(t),xr=m(o),ke=s(o,"H2",{class:!0});var Jr=r(ke);et=s(Jr,"A",{id:!0,class:!0,href:!0});var fm=r(et);gs=s(fm,"SPAN",{});var um=r(gs);x(Fo.$$.fragment,um),um.forEach(t),fm.forEach(t),Md=m(Jr),_s=s(Jr,"SPAN",{});var gm=r(_s);Id=i(gm,"FlaxBeitForMaskedImageModeling"),gm.forEach(t),Jr.forEach(t),$r=m(o),I=s(o,"DIV",{class:!0});var L=r(I);x(Eo.$$.fragment,L),jd=m(L),bs=s(L,"P",{});var _m=r(bs);Pd=i(_m,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),_m.forEach(t),Cd=m(L),ko=s(L,"P",{});var Xr=r(ko);zd=i(Xr,"This model inherits from "),fa=s(Xr,"A",{href:!0});var bm=r(fa);Ad=i(bm,"FlaxPreTrainedModel"),bm.forEach(t),qd=i(Xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xr.forEach(t),Ld=m(L),Mo=s(L,"P",{});var Gr=r(Mo);Nd=i(Gr,"This model is also a Flax Linen "),Io=s(Gr,"A",{href:!0,rel:!0});var vm=r(Io);Sd=i(vm,"flax.linen.Module"),vm.forEach(t),Od=i(Gr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gr.forEach(t),Dd=m(L),vs=s(L,"P",{});var wm=r(vs);Wd=i(wm,"Finally, this model supports inherent JAX features such as:"),wm.forEach(t),Vd=m(L),ae=s(L,"UL",{});var gt=r(ae);ws=s(gt,"LI",{});var xm=r(ws);jo=s(xm,"A",{href:!0,rel:!0});var $m=r(jo);Ud=i($m,"Just-In-Time (JIT) compilation"),$m.forEach(t),xm.forEach(t),Rd=m(gt),xs=s(gt,"LI",{});var ym=r(xs);Po=s(ym,"A",{href:!0,rel:!0});var Tm=r(Po);Hd=i(Tm,"Automatic Differentiation"),Tm.forEach(t),ym.forEach(t),Jd=m(gt),$s=s(gt,"LI",{});var Bm=r($s);Co=s(Bm,"A",{href:!0,rel:!0});var Fm=r(Co);Xd=i(Fm,"Vectorization"),Fm.forEach(t),Bm.forEach(t),Gd=m(gt),ys=s(gt,"LI",{});var Em=r(ys);zo=s(Em,"A",{href:!0,rel:!0});var km=r(zo);Kd=i(km,"Parallelization"),km.forEach(t),Em.forEach(t),gt.forEach(t),Yd=m(L),A=s(L,"DIV",{class:!0});var le=r(A);x(Ao.$$.fragment,le),Zd=m(le),Me=s(le,"P",{});var ka=r(Me);Qd=i(ka,"The "),Ts=s(ka,"CODE",{});var Mm=r(Ts);ec=i(Mm,"FlaxBeitPreTrainedModel"),Mm.forEach(t),tc=i(ka," forward method, overrides the "),Bs=s(ka,"CODE",{});var Im=r(Bs);oc=i(Im,"__call__"),Im.forEach(t),ac=i(ka," special method."),ka.forEach(t),sc=m(le),x(tt.$$.fragment,le),rc=m(le),Ie=s(le,"P",{});var Ma=r(Ie);nc=i(Ma,"bool_masked_pos ("),Fs=s(Ma,"CODE",{});var jm=r(Fs);ic=i(jm,"numpy.ndarray"),jm.forEach(t),lc=i(Ma," of shape "),Es=s(Ma,"CODE",{});var Pm=r(Es);dc=i(Pm,"(batch_size, num_patches)"),Pm.forEach(t),cc=i(Ma,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Ma.forEach(t),pc=m(le),x(ot.$$.fragment,le),le.forEach(t),L.forEach(t),yr=m(o),je=s(o,"H2",{class:!0});var Kr=r(je);at=s(Kr,"A",{id:!0,class:!0,href:!0});var Cm=r(at);ks=s(Cm,"SPAN",{});var zm=r(ks);x(qo.$$.fragment,zm),zm.forEach(t),Cm.forEach(t),mc=m(Kr),Ms=s(Kr,"SPAN",{});var Am=r(Ms);hc=i(Am,"FlaxBeitForImageClassification"),Am.forEach(t),Kr.forEach(t),Tr=m(o),j=s(o,"DIV",{class:!0});var N=r(j);x(Lo.$$.fragment,N),fc=m(N),Is=s(N,"P",{});var qm=r(Is);uc=i(qm,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),qm.forEach(t),gc=m(N),No=s(N,"P",{});var Yr=r(No);_c=i(Yr,"This model inherits from "),ua=s(Yr,"A",{href:!0});var Lm=r(ua);bc=i(Lm,"FlaxPreTrainedModel"),Lm.forEach(t),vc=i(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yr.forEach(t),wc=m(N),So=s(N,"P",{});var Zr=r(So);xc=i(Zr,"This model is also a Flax Linen "),Oo=s(Zr,"A",{href:!0,rel:!0});var Nm=r(Oo);$c=i(Nm,"flax.linen.Module"),Nm.forEach(t),yc=i(Zr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zr.forEach(t),Tc=m(N),js=s(N,"P",{});var Sm=r(js);Bc=i(Sm,"Finally, this model supports inherent JAX features such as:"),Sm.forEach(t),Fc=m(N),se=s(N,"UL",{});var _t=r(se);Ps=s(_t,"LI",{});var Om=r(Ps);Do=s(Om,"A",{href:!0,rel:!0});var Dm=r(Do);Ec=i(Dm,"Just-In-Time (JIT) compilation"),Dm.forEach(t),Om.forEach(t),kc=m(_t),Cs=s(_t,"LI",{});var Wm=r(Cs);Wo=s(Wm,"A",{href:!0,rel:!0});var Vm=r(Wo);Mc=i(Vm,"Automatic Differentiation"),Vm.forEach(t),Wm.forEach(t),Ic=m(_t),zs=s(_t,"LI",{});var Um=r(zs);Vo=s(Um,"A",{href:!0,rel:!0});var Rm=r(Vo);jc=i(Rm,"Vectorization"),Rm.forEach(t),Um.forEach(t),Pc=m(_t),As=s(_t,"LI",{});var Hm=r(As);Uo=s(Hm,"A",{href:!0,rel:!0});var Jm=r(Uo);Cc=i(Jm,"Parallelization"),Jm.forEach(t),Hm.forEach(t),_t.forEach(t),zc=m(N),K=s(N,"DIV",{class:!0});var bt=r(K);x(Ro.$$.fragment,bt),Ac=m(bt),Pe=s(bt,"P",{});var Ia=r(Pe);qc=i(Ia,"The "),qs=s(Ia,"CODE",{});var Xm=r(qs);Lc=i(Xm,"FlaxBeitPreTrainedModel"),Xm.forEach(t),Nc=i(Ia," forward method, overrides the "),Ls=s(Ia,"CODE",{});var Gm=r(Ls);Sc=i(Gm,"__call__"),Gm.forEach(t),Oc=i(Ia," special method."),Ia.forEach(t),Dc=m(bt),x(st.$$.fragment,bt),Wc=m(bt),x(rt.$$.fragment,bt),bt.forEach(t),N.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(bh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(u,"class","relative group"),d(Ce,"id","overview"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#overview"),d(de,"class","relative group"),d(Tt,"href","https://arxiv.org/abs/2106.08254"),d(Tt,"rel","nofollow"),d(Bt,"href","https://arxiv.org/abs/2010.11929"),d(Bt,"rel","nofollow"),d(Ft,"href","https://arxiv.org/abs/2102.12092"),d(Ft,"rel","nofollow"),d(Yo,"href","vit"),d(Zo,"href","deit"),d(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(Et,"rel","nofollow"),d(Qo,"href","/docs/transformers/v4.18.0/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(ea,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(ta,"href","/docs/transformers/v4.18.0/en/model_doc/vit#transformers.ViTForImageClassification"),d(oa,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitForImageClassification"),d(Mt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(Mt,"rel","nofollow"),d(aa,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(jt,"href","https://huggingface.co/models?search=microsoft/beit"),d(jt,"rel","nofollow"),d(Pt,"href","http://www.image-net.org/"),d(Pt,"rel","nofollow"),d(Ct,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(Ct,"rel","nofollow"),d(sa,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitConfig"),d(zt,"href","https://huggingface.co/nielsr"),d(zt,"rel","nofollow"),d(At,"href","https://huggingface.co/kamalkraj"),d(At,"rel","nofollow"),d(qt,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(qt,"rel","nofollow"),d(ze,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(me,"class","relative group"),d(ra,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitModel"),d(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(na,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.FlaxBeitModel"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.BeitConfig"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.BeitConfig"),d(ue,"class","relative group"),d(ia,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitModel"),d(Ut,"href","https://huggingface.co/microsoft/beit-base-patch16-224-in22k"),d(Ut,"rel","nofollow"),d(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Le,"id","transformers.BeitFeatureExtractor"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.BeitFeatureExtractor"),d(_e,"class","relative group"),d(la,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.BeitModel"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.BeitModel"),d(be,"class","relative group"),d(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Zt,"rel","nofollow"),d(da,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitForMaskedImageModeling"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitForMaskedImageModeling"),d(we,"class","relative group"),d(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ao,"rel","nofollow"),d(ca,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.BeitForImageClassification"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.BeitForImageClassification"),d($e,"class","relative group"),d(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lo,"rel","nofollow"),d(pa,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForSemanticSegmentation"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForSemanticSegmentation"),d(Te,"class","relative group"),d(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(fo,"rel","nofollow"),d(ma,"href","/docs/transformers/v4.18.0/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ye,"id","transformers.FlaxBeitModel"),d(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ye,"href","#transformers.FlaxBeitModel"),d(Fe,"class","relative group"),d(ha,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(wo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(wo,"rel","nofollow"),d(xo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(xo,"rel","nofollow"),d($o,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d($o,"rel","nofollow"),d(yo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(yo,"rel","nofollow"),d(To,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(To,"rel","nofollow"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(et,"id","transformers.FlaxBeitForMaskedImageModeling"),d(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(et,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(ke,"class","relative group"),d(fa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Io,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Io,"rel","nofollow"),d(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(jo,"rel","nofollow"),d(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Po,"rel","nofollow"),d(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Co,"rel","nofollow"),d(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(zo,"rel","nofollow"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(at,"id","transformers.FlaxBeitForImageClassification"),d(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(at,"href","#transformers.FlaxBeitForImageClassification"),d(je,"class","relative group"),d(ua,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Oo,"rel","nofollow"),d(Do,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Do,"rel","nofollow"),d(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wo,"rel","nofollow"),d(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Vo,"rel","nofollow"),d(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Uo,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,u,g),e(u,f),e(f,b),$(l,b,null),e(u,h),e(u,E),e(E,Qr),_(o,Ys,g),_(o,de,g),e(de,Ce),e(Ce,ja),$(yt,ja,null),e(de,en),e(de,Pa),e(Pa,tn),_(o,Zs,g),_(o,V,g),e(V,on),e(V,Tt),e(Tt,an),e(V,sn),e(V,Bt),e(Bt,rn),e(V,nn),e(V,Ft),e(Ft,ln),e(V,dn),_(o,Qs,g),_(o,Xo,g),e(Xo,cn),_(o,er,g),_(o,Go,g),e(Go,Ca),e(Ca,pn),_(o,tr,g),_(o,Ko,g),e(Ko,mn),_(o,or,g),_(o,C,g),e(C,k),e(k,hn),e(k,Yo),e(Yo,fn),e(k,un),e(k,Zo),e(Zo,gn),e(k,_n),e(k,Et),e(Et,bn),e(k,vn),e(k,Qo),e(Qo,wn),e(k,xn),e(k,ea),e(ea,$n),e(k,yn),e(k,ta),e(ta,Tn),e(k,Bn),e(k,oa),e(oa,Fn),e(k,En),e(C,kn),e(C,kt),e(kt,Mn),e(kt,Mt),e(Mt,In),e(kt,jn),e(C,Pn),e(C,It),e(It,Cn),e(It,aa),e(aa,zn),e(It,An),e(C,qn),e(C,ce),e(ce,Ln),e(ce,za),e(za,Nn),e(ce,Sn),e(ce,jt),e(jt,On),e(ce,Dn),e(C,Wn),e(C,pe),e(pe,Vn),e(pe,Pt),e(Pt,Un),e(pe,Rn),e(pe,Ct),e(Ct,Hn),e(pe,Jn),e(C,Xn),e(C,S),e(S,Gn),e(S,Aa),e(Aa,Kn),e(S,Yn),e(S,qa),e(qa,Zn),e(S,Qn),e(S,sa),e(sa,ei),e(S,ti),e(S,La),e(La,oi),e(S,ai),_(o,ar,g),_(o,U,g),e(U,si),e(U,zt),e(zt,ri),e(U,ni),e(U,At),e(At,ii),e(U,li),e(U,qt),e(qt,di),e(U,ci),_(o,sr,g),_(o,me,g),e(me,ze),e(ze,Na),$(Lt,Na,null),e(me,pi),e(me,Sa),e(Sa,mi),_(o,rr,g),_(o,he,g),$(Nt,he,null),e(he,hi),e(he,St),e(St,fi),e(St,ra),e(ra,ui),e(St,gi),_(o,nr,g),_(o,fe,g),$(Ot,fe,null),e(fe,_i),e(fe,Dt),e(Dt,bi),e(Dt,na),e(na,vi),e(Dt,wi),_(o,ir,g),_(o,ue,g),e(ue,Ae),e(Ae,Oa),$(Wt,Oa,null),e(ue,xi),e(ue,Da),e(Da,$i),_(o,lr,g),_(o,Q,g),$(Vt,Q,null),e(Q,yi),e(Q,ge),e(ge,Ti),e(ge,ia),e(ia,Bi),e(ge,Fi),e(ge,Ut),e(Ut,Ei),e(ge,ki),e(Q,Mi),$(qe,Q,null),_(o,dr,g),_(o,_e,g),e(_e,Le),e(Le,Wa),$(Rt,Wa,null),e(_e,Ii),e(_e,Va),e(Va,ji),_(o,cr,g),_(o,O,g),$(Ht,O,null),e(O,Pi),e(O,Ua),e(Ua,Ci),e(O,zi),e(O,Jt),e(Jt,Ai),e(Jt,la),e(la,qi),e(Jt,Li),e(O,Ni),e(O,ne),$(Xt,ne,null),e(ne,Si),e(ne,Ra),e(Ra,Oi),e(ne,Di),$(Ne,ne,null),_(o,pr,g),_(o,be,g),e(be,Se),e(Se,Ha),$(Gt,Ha,null),e(be,Wi),e(be,Ja),e(Ja,Vi),_(o,mr,g),_(o,ee,g),$(Kt,ee,null),e(ee,Ui),e(ee,Yt),e(Yt,Ri),e(Yt,Zt),e(Zt,Hi),e(Yt,Ji),e(ee,Xi),e(ee,R),$(Qt,R,null),e(R,Gi),e(R,ve),e(ve,Ki),e(ve,da),e(da,Yi),e(ve,Zi),e(ve,Xa),e(Xa,Qi),e(ve,el),e(R,tl),$(Oe,R,null),e(R,ol),$(De,R,null),_(o,hr,g),_(o,we,g),e(we,We),e(We,Ga),$(eo,Ga,null),e(we,al),e(we,Ka),e(Ka,sl),_(o,fr,g),_(o,te,g),$(to,te,null),e(te,rl),e(te,oo),e(oo,nl),e(oo,ao),e(ao,il),e(oo,ll),e(te,dl),e(te,H),$(so,H,null),e(H,cl),e(H,xe),e(xe,pl),e(xe,ca),e(ca,ml),e(xe,hl),e(xe,Ya),e(Ya,fl),e(xe,ul),e(H,gl),$(Ve,H,null),e(H,_l),$(Ue,H,null),_(o,ur,g),_(o,$e,g),e($e,Re),e(Re,Za),$(ro,Za,null),e($e,bl),e($e,Qa),e(Qa,vl),_(o,gr,g),_(o,D,g),$(no,D,null),e(D,wl),e(D,es),e(es,xl),e(D,$l),e(D,io),e(io,yl),e(io,lo),e(lo,Tl),e(io,Bl),e(D,Fl),e(D,J),$(co,J,null),e(J,El),e(J,ye),e(ye,kl),e(ye,pa),e(pa,Ml),e(ye,Il),e(ye,ts),e(ts,jl),e(ye,Pl),e(J,Cl),$(He,J,null),e(J,zl),$(Je,J,null),_(o,_r,g),_(o,Te,g),e(Te,Xe),e(Xe,os),$(po,os,null),e(Te,Al),e(Te,as),e(as,ql),_(o,br,g),_(o,W,g),$(mo,W,null),e(W,Ll),e(W,ss),e(ss,Nl),e(W,Sl),e(W,ho),e(ho,Ol),e(ho,fo),e(fo,Dl),e(ho,Wl),e(W,Vl),e(W,X),$(uo,X,null),e(X,Ul),e(X,Be),e(Be,Rl),e(Be,ma),e(ma,Hl),e(Be,Jl),e(Be,rs),e(rs,Xl),e(Be,Gl),e(X,Kl),$(Ge,X,null),e(X,Yl),$(Ke,X,null),_(o,vr,g),_(o,Fe,g),e(Fe,Ye),e(Ye,ns),$(go,ns,null),e(Fe,Zl),e(Fe,is),e(is,Ql),_(o,wr,g),_(o,M,g),$(_o,M,null),e(M,ed),e(M,ls),e(ls,td),e(M,od),e(M,bo),e(bo,ad),e(bo,ha),e(ha,sd),e(bo,rd),e(M,nd),e(M,vo),e(vo,id),e(vo,wo),e(wo,ld),e(vo,dd),e(M,cd),e(M,ds),e(ds,pd),e(M,md),e(M,oe),e(oe,cs),e(cs,xo),e(xo,hd),e(oe,fd),e(oe,ps),e(ps,$o),e($o,ud),e(oe,gd),e(oe,ms),e(ms,yo),e(yo,_d),e(oe,bd),e(oe,hs),e(hs,To),e(To,vd),e(M,wd),e(M,G),$(Bo,G,null),e(G,xd),e(G,Ee),e(Ee,$d),e(Ee,fs),e(fs,yd),e(Ee,Td),e(Ee,us),e(us,Bd),e(Ee,Fd),e(G,Ed),$(Ze,G,null),e(G,kd),$(Qe,G,null),_(o,xr,g),_(o,ke,g),e(ke,et),e(et,gs),$(Fo,gs,null),e(ke,Md),e(ke,_s),e(_s,Id),_(o,$r,g),_(o,I,g),$(Eo,I,null),e(I,jd),e(I,bs),e(bs,Pd),e(I,Cd),e(I,ko),e(ko,zd),e(ko,fa),e(fa,Ad),e(ko,qd),e(I,Ld),e(I,Mo),e(Mo,Nd),e(Mo,Io),e(Io,Sd),e(Mo,Od),e(I,Dd),e(I,vs),e(vs,Wd),e(I,Vd),e(I,ae),e(ae,ws),e(ws,jo),e(jo,Ud),e(ae,Rd),e(ae,xs),e(xs,Po),e(Po,Hd),e(ae,Jd),e(ae,$s),e($s,Co),e(Co,Xd),e(ae,Gd),e(ae,ys),e(ys,zo),e(zo,Kd),e(I,Yd),e(I,A),$(Ao,A,null),e(A,Zd),e(A,Me),e(Me,Qd),e(Me,Ts),e(Ts,ec),e(Me,tc),e(Me,Bs),e(Bs,oc),e(Me,ac),e(A,sc),$(tt,A,null),e(A,rc),e(A,Ie),e(Ie,nc),e(Ie,Fs),e(Fs,ic),e(Ie,lc),e(Ie,Es),e(Es,dc),e(Ie,cc),e(A,pc),$(ot,A,null),_(o,yr,g),_(o,je,g),e(je,at),e(at,ks),$(qo,ks,null),e(je,mc),e(je,Ms),e(Ms,hc),_(o,Tr,g),_(o,j,g),$(Lo,j,null),e(j,fc),e(j,Is),e(Is,uc),e(j,gc),e(j,No),e(No,_c),e(No,ua),e(ua,bc),e(No,vc),e(j,wc),e(j,So),e(So,xc),e(So,Oo),e(Oo,$c),e(So,yc),e(j,Tc),e(j,js),e(js,Bc),e(j,Fc),e(j,se),e(se,Ps),e(Ps,Do),e(Do,Ec),e(se,kc),e(se,Cs),e(Cs,Wo),e(Wo,Mc),e(se,Ic),e(se,zs),e(zs,Vo),e(Vo,jc),e(se,Pc),e(se,As),e(As,Uo),e(Uo,Cc),e(j,zc),e(j,K),$(Ro,K,null),e(K,Ac),e(K,Pe),e(Pe,qc),e(Pe,qs),e(qs,Lc),e(Pe,Nc),e(Pe,Ls),e(Ls,Sc),e(Pe,Oc),e(K,Dc),$(st,K,null),e(K,Wc),$(rt,K,null),Br=!0},p(o,[g]){const Ho={};g&2&&(Ho.$$scope={dirty:g,ctx:o}),qe.$set(Ho);const Ns={};g&2&&(Ns.$$scope={dirty:g,ctx:o}),Ne.$set(Ns);const Ss={};g&2&&(Ss.$$scope={dirty:g,ctx:o}),Oe.$set(Ss);const Os={};g&2&&(Os.$$scope={dirty:g,ctx:o}),De.$set(Os);const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:o}),Ve.$set(Jo);const Ds={};g&2&&(Ds.$$scope={dirty:g,ctx:o}),Ue.$set(Ds);const Ws={};g&2&&(Ws.$$scope={dirty:g,ctx:o}),He.$set(Ws);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:o}),Je.$set(Vs);const re={};g&2&&(re.$$scope={dirty:g,ctx:o}),Ge.$set(re);const Us={};g&2&&(Us.$$scope={dirty:g,ctx:o}),Ke.$set(Us);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:o}),Ze.$set(Rs);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:o}),Qe.$set(Hs);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:o}),tt.$set(Js);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:o}),ot.$set(Xs);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:o}),st.$set(Gs);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:o}),rt.$set(Ks)},i(o){Br||(y(l.$$.fragment,o),y(yt.$$.fragment,o),y(Lt.$$.fragment,o),y(Nt.$$.fragment,o),y(Ot.$$.fragment,o),y(Wt.$$.fragment,o),y(Vt.$$.fragment,o),y(qe.$$.fragment,o),y(Rt.$$.fragment,o),y(Ht.$$.fragment,o),y(Xt.$$.fragment,o),y(Ne.$$.fragment,o),y(Gt.$$.fragment,o),y(Kt.$$.fragment,o),y(Qt.$$.fragment,o),y(Oe.$$.fragment,o),y(De.$$.fragment,o),y(eo.$$.fragment,o),y(to.$$.fragment,o),y(so.$$.fragment,o),y(Ve.$$.fragment,o),y(Ue.$$.fragment,o),y(ro.$$.fragment,o),y(no.$$.fragment,o),y(co.$$.fragment,o),y(He.$$.fragment,o),y(Je.$$.fragment,o),y(po.$$.fragment,o),y(mo.$$.fragment,o),y(uo.$$.fragment,o),y(Ge.$$.fragment,o),y(Ke.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(Bo.$$.fragment,o),y(Ze.$$.fragment,o),y(Qe.$$.fragment,o),y(Fo.$$.fragment,o),y(Eo.$$.fragment,o),y(Ao.$$.fragment,o),y(tt.$$.fragment,o),y(ot.$$.fragment,o),y(qo.$$.fragment,o),y(Lo.$$.fragment,o),y(Ro.$$.fragment,o),y(st.$$.fragment,o),y(rt.$$.fragment,o),Br=!0)},o(o){T(l.$$.fragment,o),T(yt.$$.fragment,o),T(Lt.$$.fragment,o),T(Nt.$$.fragment,o),T(Ot.$$.fragment,o),T(Wt.$$.fragment,o),T(Vt.$$.fragment,o),T(qe.$$.fragment,o),T(Rt.$$.fragment,o),T(Ht.$$.fragment,o),T(Xt.$$.fragment,o),T(Ne.$$.fragment,o),T(Gt.$$.fragment,o),T(Kt.$$.fragment,o),T(Qt.$$.fragment,o),T(Oe.$$.fragment,o),T(De.$$.fragment,o),T(eo.$$.fragment,o),T(to.$$.fragment,o),T(so.$$.fragment,o),T(Ve.$$.fragment,o),T(Ue.$$.fragment,o),T(ro.$$.fragment,o),T(no.$$.fragment,o),T(co.$$.fragment,o),T(He.$$.fragment,o),T(Je.$$.fragment,o),T(po.$$.fragment,o),T(mo.$$.fragment,o),T(uo.$$.fragment,o),T(Ge.$$.fragment,o),T(Ke.$$.fragment,o),T(go.$$.fragment,o),T(_o.$$.fragment,o),T(Bo.$$.fragment,o),T(Ze.$$.fragment,o),T(Qe.$$.fragment,o),T(Fo.$$.fragment,o),T(Eo.$$.fragment,o),T(Ao.$$.fragment,o),T(tt.$$.fragment,o),T(ot.$$.fragment,o),T(qo.$$.fragment,o),T(Lo.$$.fragment,o),T(Ro.$$.fragment,o),T(st.$$.fragment,o),T(rt.$$.fragment,o),Br=!1},d(o){t(c),o&&t(v),o&&t(u),B(l),o&&t(Ys),o&&t(de),B(yt),o&&t(Zs),o&&t(V),o&&t(Qs),o&&t(Xo),o&&t(er),o&&t(Go),o&&t(tr),o&&t(Ko),o&&t(or),o&&t(C),o&&t(ar),o&&t(U),o&&t(sr),o&&t(me),B(Lt),o&&t(rr),o&&t(he),B(Nt),o&&t(nr),o&&t(fe),B(Ot),o&&t(ir),o&&t(ue),B(Wt),o&&t(lr),o&&t(Q),B(Vt),B(qe),o&&t(dr),o&&t(_e),B(Rt),o&&t(cr),o&&t(O),B(Ht),B(Xt),B(Ne),o&&t(pr),o&&t(be),B(Gt),o&&t(mr),o&&t(ee),B(Kt),B(Qt),B(Oe),B(De),o&&t(hr),o&&t(we),B(eo),o&&t(fr),o&&t(te),B(to),B(so),B(Ve),B(Ue),o&&t(ur),o&&t($e),B(ro),o&&t(gr),o&&t(D),B(no),B(co),B(He),B(Je),o&&t(_r),o&&t(Te),B(po),o&&t(br),o&&t(W),B(mo),B(uo),B(Ge),B(Ke),o&&t(vr),o&&t(Fe),B(go),o&&t(wr),o&&t(M),B(_o),B(Bo),B(Ze),B(Qe),o&&t(xr),o&&t(ke),B(Fo),o&&t($r),o&&t(I),B(Eo),B(Ao),B(tt),B(ot),o&&t(yr),o&&t(je),B(qo),o&&t(Tr),o&&t(j),B(Lo),B(Ro),B(st),B(rt)}}}const bh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function vh(F){return eh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fh extends Km{constructor(c){super();Ym(this,c,vh,_h,Zm,{})}}export{Fh as default,bh as metadata};
