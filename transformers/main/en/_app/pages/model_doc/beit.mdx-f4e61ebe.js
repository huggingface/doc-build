import{S as nh,i as sh,s as rh,e as a,k as m,w,t as r,M as ih,c as n,d as t,m as p,a as s,x,h as i,b as d,F as e,g as _,y as $,q as y,o as T,B,v as lh,L as yt}from"../../chunks/vendor-6b77c823.js";import{T as xt}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as Tt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Q}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as $t}from"../../chunks/ExampleCodeBlock-5212b321.js";function dh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitModel, BeitConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function ch(F){let c,v;return{c(){c=a("p"),v=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=n(u,"P",{});var f=s(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(u,f){_(u,c,f),e(c,v)},d(u){u&&t(c)}}}function mh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function ph(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function hh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function fh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function uh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function gh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitForImageClassification
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
tabby, tabby cat`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function _h(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function bh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import AutoFeatureExtractor, BeitForSemanticSegmentation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function vh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function wh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function xh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function $h(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function yh(F){let c,v,u,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function Th(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=r("Example:"),u=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function Bh(F){let c,v,u,f,b,l,h,E,or,ts,ce,ze,za,Bt,ar,Aa,nr,os,W,sr,Ft,rr,ir,Et,lr,dr,kt,cr,mr,as,Xo,pr,ns,Ko,qa,hr,ss,Yo,fr,rs,C,k,ur,Qo,gr,_r,Zo,br,vr,Mt,wr,xr,ea,$r,yr,ta,Tr,Br,oa,Fr,Er,aa,kr,Mr,Ir,It,jr,jt,Pr,Cr,zr,Pt,Ar,na,qr,Lr,Sr,me,Nr,La,Or,Dr,Ct,Vr,Wr,Ur,pe,Rr,zt,Hr,Jr,At,Gr,Xr,Kr,N,Yr,Sa,Qr,Zr,Na,ei,ti,sa,oi,ai,Oa,ni,si,is,U,ri,qt,ii,li,Lt,di,ci,St,mi,pi,ls,he,Ae,Da,Nt,hi,Va,fi,ds,fe,Ot,ui,Dt,gi,ra,_i,bi,cs,ue,Vt,vi,Wt,wi,ia,xi,$i,ms,ge,qe,Wa,Ut,yi,Ua,Ti,ps,Z,Rt,Bi,_e,Fi,la,Ei,ki,Ht,Mi,Ii,ji,Le,hs,be,Se,Ra,Jt,Pi,Ha,Ci,fs,O,Gt,zi,Ja,Ai,qi,Xt,Li,da,Si,Ni,Oi,ie,Kt,Di,Ga,Vi,Wi,Ne,us,ve,Oe,Xa,Yt,Ui,Ka,Ri,gs,ee,Qt,Hi,Zt,Ji,eo,Gi,Xi,Ki,R,to,Yi,we,Qi,ca,Zi,el,Ya,tl,ol,al,De,nl,Ve,_s,xe,We,Qa,oo,sl,Za,rl,bs,te,ao,il,oe,ll,ma,dl,cl,pa,ml,pl,no,hl,fl,ul,H,so,gl,$e,_l,ha,bl,vl,en,wl,xl,$l,Ue,yl,Re,vs,ye,He,tn,ro,Tl,on,Bl,ws,D,io,Fl,an,El,kl,lo,Ml,co,Il,jl,Pl,J,mo,Cl,Te,zl,fa,Al,ql,nn,Ll,Sl,Nl,Je,Ol,Ge,xs,Be,Xe,sn,po,Dl,rn,Vl,$s,V,ho,Wl,ln,Ul,Rl,fo,Hl,uo,Jl,Gl,Xl,G,go,Kl,Fe,Yl,ua,Ql,Zl,dn,ed,td,od,Ke,ad,Ye,ys,Ee,Qe,cn,_o,nd,mn,sd,Ts,M,bo,rd,pn,id,ld,vo,dd,ga,cd,md,pd,wo,hd,xo,fd,ud,gd,hn,_d,bd,ae,fn,$o,vd,wd,un,yo,xd,$d,gn,To,yd,Td,_n,Bo,Bd,Fd,X,Fo,Ed,ke,kd,bn,Md,Id,vn,jd,Pd,Cd,Ze,zd,et,Bs,Me,tt,wn,Eo,Ad,xn,qd,Fs,I,ko,Ld,$n,Sd,Nd,Mo,Od,_a,Dd,Vd,Wd,Io,Ud,jo,Rd,Hd,Jd,yn,Gd,Xd,ne,Tn,Po,Kd,Yd,Bn,Co,Qd,Zd,Fn,zo,ec,tc,En,Ao,oc,ac,A,qo,nc,Ie,sc,kn,rc,ic,Mn,lc,dc,cc,ot,mc,je,pc,In,hc,fc,jn,uc,gc,_c,at,Es,Pe,nt,Pn,Lo,bc,Cn,vc,ks,j,So,wc,zn,xc,$c,No,yc,ba,Tc,Bc,Fc,Oo,Ec,Do,kc,Mc,Ic,An,jc,Pc,se,qn,Vo,Cc,zc,Ln,Wo,Ac,qc,Sn,Uo,Lc,Sc,Nn,Ro,Nc,Oc,K,Ho,Dc,Ce,Vc,On,Wc,Uc,Dn,Rc,Hc,Jc,st,Gc,rt,Ms;return l=new Q({}),Bt=new Q({}),Nt=new Q({}),Ot=new P({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L69"}}),Vt=new P({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L46"}}),Ut=new Q({}),Rt=new P({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
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
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/configuration_beit.py#L36"}}),Le=new $t({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[dh]},$$scope:{ctx:F}}}),Jt=new Q({}),Gt=new P({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/feature_extraction_beit.py#L36"}}),Kt=new P({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/feature_extraction_beit.py#L97",returnDescription:`
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
`}}),Ne=new xt({props:{warning:!0,$$slots:{default:[ch]},$$scope:{ctx:F}}}),Yt=new Q({}),Qt=new P({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L630"}}),to=new P({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L657",returnDescription:`
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
`}}),De=new xt({props:{$$slots:{default:[mh]},$$scope:{ctx:F}}}),Ve=new $t({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[ph]},$$scope:{ctx:F}}}),oo=new Q({}),ao=new P({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L742"}}),so=new P({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L756",returnDescription:`
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
`}}),Ue=new xt({props:{$$slots:{default:[hh]},$$scope:{ctx:F}}}),Re=new $t({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[fh]},$$scope:{ctx:F}}}),ro=new Q({}),io=new P({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L842"}}),mo=new P({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new xt({props:{$$slots:{default:[uh]},$$scope:{ctx:F}}}),Ge=new $t({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[gh]},$$scope:{ctx:F}}}),po=new Q({}),ho=new P({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L1151"}}),go=new P({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L1195",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new xt({props:{$$slots:{default:[_h]},$$scope:{ctx:F}}}),Ye=new $t({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[bh]},$$scope:{ctx:F}}}),_o=new Q({}),bo=new P({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L743"}}),Fo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L629",returnDescription:`
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
`}}),Ze=new xt({props:{$$slots:{default:[vh]},$$scope:{ctx:F}}}),et=new $t({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[wh]},$$scope:{ctx:F}}}),Eo=new Q({}),ko=new P({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L827"}}),qo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L629",returnDescription:`
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
`}}),ot=new xt({props:{$$slots:{default:[xh]},$$scope:{ctx:F}}}),at=new $t({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[$h]},$$scope:{ctx:F}}}),Lo=new Q({}),So=new P({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L914"}}),Ho=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L629",returnDescription:`
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
`}}),st=new xt({props:{$$slots:{default:[yh]},$$scope:{ctx:F}}}),rt=new $t({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[Th]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=m(),u=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=m(),E=a("span"),or=r("BEiT"),ts=m(),ce=a("h2"),ze=a("a"),za=a("span"),w(Bt.$$.fragment),ar=m(),Aa=a("span"),nr=r("Overview"),os=m(),W=a("p"),sr=r("The BEiT model was proposed in "),Ft=a("a"),rr=r("BEiT: BERT Pre-Training of Image Transformers"),ir=r(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Et=a("a"),lr=r("original ViT paper"),dr=r(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),kt=a("a"),cr=r("DALL-E model"),mr=r(` given masked
patches.`),as=m(),Xo=a("p"),pr=r("The abstract from the paper is the following:"),ns=m(),Ko=a("p"),qa=a("em"),hr=r(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),ss=m(),Yo=a("p"),fr=r("Tips:"),rs=m(),C=a("ul"),k=a("li"),ur=r(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Qo=a("a"),gr=r("original model (ViT)"),_r=r(" as well as "),Zo=a("a"),br=r("Data-efficient Image Transformers (DeiT)"),vr=r(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Mt=a("a"),wr=r("here"),xr=r(` (you can just replace
`),ea=a("a"),$r=r("ViTFeatureExtractor"),yr=r(" by "),ta=a("a"),Tr=r("BeitFeatureExtractor"),Br=r(` and
`),oa=a("a"),Fr=r("ViTForImageClassification"),Er=r(" by "),aa=a("a"),kr=r("BeitForImageClassification"),Mr=r(")."),Ir=m(),It=a("li"),jr=r(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),jt=a("a"),Pr=r("here"),Cr=r("."),zr=m(),Pt=a("li"),Ar=r(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),na=a("a"),qr=r("BeitFeatureExtractor"),Lr=r(" to resize (or rescale) and normalize images for the model."),Sr=m(),me=a("li"),Nr=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),La=a("code"),Or=r("microsoft/beit-base-patch16-224"),Dr=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Ct=a("a"),Vr=r("hub"),Wr=r("."),Ur=m(),pe=a("li"),Rr=r("The available checkpoints are either (1) pre-trained on "),zt=a("a"),Hr=r("ImageNet-22k"),Jr=r(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),At=a("a"),Gr=r("ImageNet-1k"),Xr=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Kr=m(),N=a("li"),Yr=r(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Sa=a("code"),Qr=r("use_relative_position_bias"),Zr=r(` or the
`),Na=a("code"),ei=r("use_relative_position_bias"),ti=r(" attribute of "),sa=a("a"),oi=r("BeitConfig"),ai=r(" to "),Oa=a("code"),ni=r("True"),si=r(` in order to add
position embeddings.`),is=m(),U=a("p"),ri=r("This model was contributed by "),qt=a("a"),ii=r("nielsr"),li=r(`. The JAX/FLAX version of this model was
contributed by `),Lt=a("a"),di=r("kamalkraj"),ci=r(". The original code can be found "),St=a("a"),mi=r("here"),pi=r("."),ls=m(),he=a("h2"),Ae=a("a"),Da=a("span"),w(Nt.$$.fragment),hi=m(),Va=a("span"),fi=r("BEiT specific outputs"),ds=m(),fe=a("div"),w(Ot.$$.fragment),ui=m(),Dt=a("p"),gi=r("Class for outputs of "),ra=a("a"),_i=r("BeitModel"),bi=r("."),cs=m(),ue=a("div"),w(Vt.$$.fragment),vi=m(),Wt=a("p"),wi=r("Class for outputs of "),ia=a("a"),xi=r("FlaxBeitModel"),$i=r("."),ms=m(),ge=a("h2"),qe=a("a"),Wa=a("span"),w(Ut.$$.fragment),yi=m(),Ua=a("span"),Ti=r("BeitConfig"),ps=m(),Z=a("div"),w(Rt.$$.fragment),Bi=m(),_e=a("p"),Fi=r("This is the configuration class to store the configuration of a "),la=a("a"),Ei=r("BeitModel"),ki=r(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ht=a("a"),Mi=r("microsoft/beit-base-patch16-224-pt22k"),Ii=r(" architecture."),ji=m(),w(Le.$$.fragment),hs=m(),be=a("h2"),Se=a("a"),Ra=a("span"),w(Jt.$$.fragment),Pi=m(),Ha=a("span"),Ci=r("BeitFeatureExtractor"),fs=m(),O=a("div"),w(Gt.$$.fragment),zi=m(),Ja=a("p"),Ai=r("Constructs a BEiT feature extractor."),qi=m(),Xt=a("p"),Li=r("This feature extractor inherits from "),da=a("a"),Si=r("FeatureExtractionMixin"),Ni=r(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Oi=m(),ie=a("div"),w(Kt.$$.fragment),Di=m(),Ga=a("p"),Vi=r("Main method to prepare for the model one or several image(s)."),Wi=m(),w(Ne.$$.fragment),us=m(),ve=a("h2"),Oe=a("a"),Xa=a("span"),w(Yt.$$.fragment),Ui=m(),Ka=a("span"),Ri=r("BeitModel"),gs=m(),ee=a("div"),w(Qt.$$.fragment),Hi=m(),Zt=a("p"),Ji=r(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),eo=a("a"),Gi=r("torch.nn.Module"),Xi=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ki=m(),R=a("div"),w(to.$$.fragment),Yi=m(),we=a("p"),Qi=r("The "),ca=a("a"),Zi=r("BeitModel"),el=r(" forward method, overrides the "),Ya=a("code"),tl=r("__call__"),ol=r(" special method."),al=m(),w(De.$$.fragment),nl=m(),w(Ve.$$.fragment),_s=m(),xe=a("h2"),We=a("a"),Qa=a("span"),w(oo.$$.fragment),sl=m(),Za=a("span"),rl=r("BeitForMaskedImageModeling"),bs=m(),te=a("div"),w(ao.$$.fragment),il=m(),oe=a("p"),ll=r(`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ma=a("a"),dl=r("AutoModelForMaskedImageModeling"),cl=r(`, so you
will need to use `),pa=a("a"),ml=r("BeitForMaskedImageModeling"),pl=r(` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),no=a("a"),hl=r("torch.nn.Module"),fl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul=m(),H=a("div"),w(so.$$.fragment),gl=m(),$e=a("p"),_l=r("The "),ha=a("a"),bl=r("BeitForMaskedImageModeling"),vl=r(" forward method, overrides the "),en=a("code"),wl=r("__call__"),xl=r(" special method."),$l=m(),w(Ue.$$.fragment),yl=m(),w(Re.$$.fragment),vs=m(),ye=a("h2"),He=a("a"),tn=a("span"),w(ro.$$.fragment),Tl=m(),on=a("span"),Bl=r("BeitForImageClassification"),ws=m(),D=a("div"),w(io.$$.fragment),Fl=m(),an=a("p"),El=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),kl=m(),lo=a("p"),Ml=r("This model is a PyTorch "),co=a("a"),Il=r("torch.nn.Module"),jl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pl=m(),J=a("div"),w(mo.$$.fragment),Cl=m(),Te=a("p"),zl=r("The "),fa=a("a"),Al=r("BeitForImageClassification"),ql=r(" forward method, overrides the "),nn=a("code"),Ll=r("__call__"),Sl=r(" special method."),Nl=m(),w(Je.$$.fragment),Ol=m(),w(Ge.$$.fragment),xs=m(),Be=a("h2"),Xe=a("a"),sn=a("span"),w(po.$$.fragment),Dl=m(),rn=a("span"),Vl=r("BeitForSemanticSegmentation"),$s=m(),V=a("div"),w(ho.$$.fragment),Wl=m(),ln=a("p"),Ul=r("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Rl=m(),fo=a("p"),Hl=r("This model is a PyTorch "),uo=a("a"),Jl=r("torch.nn.Module"),Gl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xl=m(),G=a("div"),w(go.$$.fragment),Kl=m(),Fe=a("p"),Yl=r("The "),ua=a("a"),Ql=r("BeitForSemanticSegmentation"),Zl=r(" forward method, overrides the "),dn=a("code"),ed=r("__call__"),td=r(" special method."),od=m(),w(Ke.$$.fragment),ad=m(),w(Ye.$$.fragment),ys=m(),Ee=a("h2"),Qe=a("a"),cn=a("span"),w(_o.$$.fragment),nd=m(),mn=a("span"),sd=r("FlaxBeitModel"),Ts=m(),M=a("div"),w(bo.$$.fragment),rd=m(),pn=a("p"),id=r("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),ld=m(),vo=a("p"),dd=r("This model inherits from "),ga=a("a"),cd=r("FlaxPreTrainedModel"),md=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pd=m(),wo=a("p"),hd=r("This model is also a Flax Linen "),xo=a("a"),fd=r("flax.linen.Module"),ud=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gd=m(),hn=a("p"),_d=r("Finally, this model supports inherent JAX features such as:"),bd=m(),ae=a("ul"),fn=a("li"),$o=a("a"),vd=r("Just-In-Time (JIT) compilation"),wd=m(),un=a("li"),yo=a("a"),xd=r("Automatic Differentiation"),$d=m(),gn=a("li"),To=a("a"),yd=r("Vectorization"),Td=m(),_n=a("li"),Bo=a("a"),Bd=r("Parallelization"),Fd=m(),X=a("div"),w(Fo.$$.fragment),Ed=m(),ke=a("p"),kd=r("The "),bn=a("code"),Md=r("FlaxBeitPreTrainedModel"),Id=r(" forward method, overrides the "),vn=a("code"),jd=r("__call__"),Pd=r(" special method."),Cd=m(),w(Ze.$$.fragment),zd=m(),w(et.$$.fragment),Bs=m(),Me=a("h2"),tt=a("a"),wn=a("span"),w(Eo.$$.fragment),Ad=m(),xn=a("span"),qd=r("FlaxBeitForMaskedImageModeling"),Fs=m(),I=a("div"),w(ko.$$.fragment),Ld=m(),$n=a("p"),Sd=r("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Nd=m(),Mo=a("p"),Od=r("This model inherits from "),_a=a("a"),Dd=r("FlaxPreTrainedModel"),Vd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wd=m(),Io=a("p"),Ud=r("This model is also a Flax Linen "),jo=a("a"),Rd=r("flax.linen.Module"),Hd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jd=m(),yn=a("p"),Gd=r("Finally, this model supports inherent JAX features such as:"),Xd=m(),ne=a("ul"),Tn=a("li"),Po=a("a"),Kd=r("Just-In-Time (JIT) compilation"),Yd=m(),Bn=a("li"),Co=a("a"),Qd=r("Automatic Differentiation"),Zd=m(),Fn=a("li"),zo=a("a"),ec=r("Vectorization"),tc=m(),En=a("li"),Ao=a("a"),oc=r("Parallelization"),ac=m(),A=a("div"),w(qo.$$.fragment),nc=m(),Ie=a("p"),sc=r("The "),kn=a("code"),rc=r("FlaxBeitPreTrainedModel"),ic=r(" forward method, overrides the "),Mn=a("code"),lc=r("__call__"),dc=r(" special method."),cc=m(),w(ot.$$.fragment),mc=m(),je=a("p"),pc=r("bool_masked_pos ("),In=a("code"),hc=r("numpy.ndarray"),fc=r(" of shape "),jn=a("code"),uc=r("(batch_size, num_patches)"),gc=r(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),_c=m(),w(at.$$.fragment),Es=m(),Pe=a("h2"),nt=a("a"),Pn=a("span"),w(Lo.$$.fragment),bc=m(),Cn=a("span"),vc=r("FlaxBeitForImageClassification"),ks=m(),j=a("div"),w(So.$$.fragment),wc=m(),zn=a("p"),xc=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),$c=m(),No=a("p"),yc=r("This model inherits from "),ba=a("a"),Tc=r("FlaxPreTrainedModel"),Bc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fc=m(),Oo=a("p"),Ec=r("This model is also a Flax Linen "),Do=a("a"),kc=r("flax.linen.Module"),Mc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ic=m(),An=a("p"),jc=r("Finally, this model supports inherent JAX features such as:"),Pc=m(),se=a("ul"),qn=a("li"),Vo=a("a"),Cc=r("Just-In-Time (JIT) compilation"),zc=m(),Ln=a("li"),Wo=a("a"),Ac=r("Automatic Differentiation"),qc=m(),Sn=a("li"),Uo=a("a"),Lc=r("Vectorization"),Sc=m(),Nn=a("li"),Ro=a("a"),Nc=r("Parallelization"),Oc=m(),K=a("div"),w(Ho.$$.fragment),Dc=m(),Ce=a("p"),Vc=r("The "),On=a("code"),Wc=r("FlaxBeitPreTrainedModel"),Uc=r(" forward method, overrides the "),Dn=a("code"),Rc=r("__call__"),Hc=r(" special method."),Jc=m(),w(st.$$.fragment),Gc=m(),w(rt.$$.fragment),this.h()},l(o){const g=ih('[data-svelte="svelte-1phssyn"]',document.head);c=n(g,"META",{name:!0,content:!0}),g.forEach(t),v=p(o),u=n(o,"H1",{class:!0});var Jo=s(u);f=n(Jo,"A",{id:!0,class:!0,href:!0});var Vn=s(f);b=n(Vn,"SPAN",{});var Wn=s(b);x(l.$$.fragment,Wn),Wn.forEach(t),Vn.forEach(t),h=p(Jo),E=n(Jo,"SPAN",{});var Un=s(E);or=i(Un,"BEiT"),Un.forEach(t),Jo.forEach(t),ts=p(o),ce=n(o,"H2",{class:!0});var Go=s(ce);ze=n(Go,"A",{id:!0,class:!0,href:!0});var Rn=s(ze);za=n(Rn,"SPAN",{});var Hn=s(za);x(Bt.$$.fragment,Hn),Hn.forEach(t),Rn.forEach(t),ar=p(Go),Aa=n(Go,"SPAN",{});var Jn=s(Aa);nr=i(Jn,"Overview"),Jn.forEach(t),Go.forEach(t),os=p(o),W=n(o,"P",{});var re=s(W);sr=i(re,"The BEiT model was proposed in "),Ft=n(re,"A",{href:!0,rel:!0});var Gn=s(Ft);rr=i(Gn,"BEiT: BERT Pre-Training of Image Transformers"),Gn.forEach(t),ir=i(re,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Et=n(re,"A",{href:!0,rel:!0});var Xn=s(Et);lr=i(Xn,"original ViT paper"),Xn.forEach(t),dr=i(re,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),kt=n(re,"A",{href:!0,rel:!0});var Kn=s(kt);cr=i(Kn,"DALL-E model"),Kn.forEach(t),mr=i(re,` given masked
patches.`),re.forEach(t),as=p(o),Xo=n(o,"P",{});var Yn=s(Xo);pr=i(Yn,"The abstract from the paper is the following:"),Yn.forEach(t),ns=p(o),Ko=n(o,"P",{});var Qn=s(Ko);qa=n(Qn,"EM",{});var Zn=s(qa);hr=i(Zn,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),Zn.forEach(t),Qn.forEach(t),ss=p(o),Yo=n(o,"P",{});var es=s(Yo);fr=i(es,"Tips:"),es.forEach(t),rs=p(o),C=n(o,"UL",{});var Y=s(C);k=n(Y,"LI",{});var z=s(k);ur=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Qo=n(z,"A",{href:!0});var Xc=s(Qo);gr=i(Xc,"original model (ViT)"),Xc.forEach(t),_r=i(z," as well as "),Zo=n(z,"A",{href:!0});var Kc=s(Zo);br=i(Kc,"Data-efficient Image Transformers (DeiT)"),Kc.forEach(t),vr=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Mt=n(z,"A",{href:!0,rel:!0});var Yc=s(Mt);wr=i(Yc,"here"),Yc.forEach(t),xr=i(z,` (you can just replace
`),ea=n(z,"A",{href:!0});var Qc=s(ea);$r=i(Qc,"ViTFeatureExtractor"),Qc.forEach(t),yr=i(z," by "),ta=n(z,"A",{href:!0});var Zc=s(ta);Tr=i(Zc,"BeitFeatureExtractor"),Zc.forEach(t),Br=i(z,` and
`),oa=n(z,"A",{href:!0});var em=s(oa);Fr=i(em,"ViTForImageClassification"),em.forEach(t),Er=i(z," by "),aa=n(z,"A",{href:!0});var tm=s(aa);kr=i(tm,"BeitForImageClassification"),tm.forEach(t),Mr=i(z,")."),z.forEach(t),Ir=p(Y),It=n(Y,"LI",{});var Is=s(It);jr=i(Is,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),jt=n(Is,"A",{href:!0,rel:!0});var om=s(jt);Pr=i(om,"here"),om.forEach(t),Cr=i(Is,"."),Is.forEach(t),zr=p(Y),Pt=n(Y,"LI",{});var js=s(Pt);Ar=i(js,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),na=n(js,"A",{href:!0});var am=s(na);qr=i(am,"BeitFeatureExtractor"),am.forEach(t),Lr=i(js," to resize (or rescale) and normalize images for the model."),js.forEach(t),Sr=p(Y),me=n(Y,"LI",{});var va=s(me);Nr=i(va,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),La=n(va,"CODE",{});var nm=s(La);Or=i(nm,"microsoft/beit-base-patch16-224"),nm.forEach(t),Dr=i(va,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Ct=n(va,"A",{href:!0,rel:!0});var sm=s(Ct);Vr=i(sm,"hub"),sm.forEach(t),Wr=i(va,"."),va.forEach(t),Ur=p(Y),pe=n(Y,"LI",{});var wa=s(pe);Rr=i(wa,"The available checkpoints are either (1) pre-trained on "),zt=n(wa,"A",{href:!0,rel:!0});var rm=s(zt);Hr=i(rm,"ImageNet-22k"),rm.forEach(t),Jr=i(wa,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),At=n(wa,"A",{href:!0,rel:!0});var im=s(At);Gr=i(im,"ImageNet-1k"),im.forEach(t),Xr=i(wa,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),wa.forEach(t),Kr=p(Y),N=n(Y,"LI",{});var le=s(N);Yr=i(le,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Sa=n(le,"CODE",{});var lm=s(Sa);Qr=i(lm,"use_relative_position_bias"),lm.forEach(t),Zr=i(le,` or the
`),Na=n(le,"CODE",{});var dm=s(Na);ei=i(dm,"use_relative_position_bias"),dm.forEach(t),ti=i(le," attribute of "),sa=n(le,"A",{href:!0});var cm=s(sa);oi=i(cm,"BeitConfig"),cm.forEach(t),ai=i(le," to "),Oa=n(le,"CODE",{});var mm=s(Oa);ni=i(mm,"True"),mm.forEach(t),si=i(le,` in order to add
position embeddings.`),le.forEach(t),Y.forEach(t),is=p(o),U=n(o,"P",{});var it=s(U);ri=i(it,"This model was contributed by "),qt=n(it,"A",{href:!0,rel:!0});var pm=s(qt);ii=i(pm,"nielsr"),pm.forEach(t),li=i(it,`. The JAX/FLAX version of this model was
contributed by `),Lt=n(it,"A",{href:!0,rel:!0});var hm=s(Lt);di=i(hm,"kamalkraj"),hm.forEach(t),ci=i(it,". The original code can be found "),St=n(it,"A",{href:!0,rel:!0});var fm=s(St);mi=i(fm,"here"),fm.forEach(t),pi=i(it,"."),it.forEach(t),ls=p(o),he=n(o,"H2",{class:!0});var Ps=s(he);Ae=n(Ps,"A",{id:!0,class:!0,href:!0});var um=s(Ae);Da=n(um,"SPAN",{});var gm=s(Da);x(Nt.$$.fragment,gm),gm.forEach(t),um.forEach(t),hi=p(Ps),Va=n(Ps,"SPAN",{});var _m=s(Va);fi=i(_m,"BEiT specific outputs"),_m.forEach(t),Ps.forEach(t),ds=p(o),fe=n(o,"DIV",{class:!0});var Cs=s(fe);x(Ot.$$.fragment,Cs),ui=p(Cs),Dt=n(Cs,"P",{});var zs=s(Dt);gi=i(zs,"Class for outputs of "),ra=n(zs,"A",{href:!0});var bm=s(ra);_i=i(bm,"BeitModel"),bm.forEach(t),bi=i(zs,"."),zs.forEach(t),Cs.forEach(t),cs=p(o),ue=n(o,"DIV",{class:!0});var As=s(ue);x(Vt.$$.fragment,As),vi=p(As),Wt=n(As,"P",{});var qs=s(Wt);wi=i(qs,"Class for outputs of "),ia=n(qs,"A",{href:!0});var vm=s(ia);xi=i(vm,"FlaxBeitModel"),vm.forEach(t),$i=i(qs,"."),qs.forEach(t),As.forEach(t),ms=p(o),ge=n(o,"H2",{class:!0});var Ls=s(ge);qe=n(Ls,"A",{id:!0,class:!0,href:!0});var wm=s(qe);Wa=n(wm,"SPAN",{});var xm=s(Wa);x(Ut.$$.fragment,xm),xm.forEach(t),wm.forEach(t),yi=p(Ls),Ua=n(Ls,"SPAN",{});var $m=s(Ua);Ti=i($m,"BeitConfig"),$m.forEach(t),Ls.forEach(t),ps=p(o),Z=n(o,"DIV",{class:!0});var xa=s(Z);x(Rt.$$.fragment,xa),Bi=p(xa),_e=n(xa,"P",{});var $a=s(_e);Fi=i($a,"This is the configuration class to store the configuration of a "),la=n($a,"A",{href:!0});var ym=s(la);Ei=i(ym,"BeitModel"),ym.forEach(t),ki=i($a,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ht=n($a,"A",{href:!0,rel:!0});var Tm=s(Ht);Mi=i(Tm,"microsoft/beit-base-patch16-224-pt22k"),Tm.forEach(t),Ii=i($a," architecture."),$a.forEach(t),ji=p(xa),x(Le.$$.fragment,xa),xa.forEach(t),hs=p(o),be=n(o,"H2",{class:!0});var Ss=s(be);Se=n(Ss,"A",{id:!0,class:!0,href:!0});var Bm=s(Se);Ra=n(Bm,"SPAN",{});var Fm=s(Ra);x(Jt.$$.fragment,Fm),Fm.forEach(t),Bm.forEach(t),Pi=p(Ss),Ha=n(Ss,"SPAN",{});var Em=s(Ha);Ci=i(Em,"BeitFeatureExtractor"),Em.forEach(t),Ss.forEach(t),fs=p(o),O=n(o,"DIV",{class:!0});var lt=s(O);x(Gt.$$.fragment,lt),zi=p(lt),Ja=n(lt,"P",{});var km=s(Ja);Ai=i(km,"Constructs a BEiT feature extractor."),km.forEach(t),qi=p(lt),Xt=n(lt,"P",{});var Ns=s(Xt);Li=i(Ns,"This feature extractor inherits from "),da=n(Ns,"A",{href:!0});var Mm=s(da);Si=i(Mm,"FeatureExtractionMixin"),Mm.forEach(t),Ni=i(Ns,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Ns.forEach(t),Oi=p(lt),ie=n(lt,"DIV",{class:!0});var ya=s(ie);x(Kt.$$.fragment,ya),Di=p(ya),Ga=n(ya,"P",{});var Im=s(Ga);Vi=i(Im,"Main method to prepare for the model one or several image(s)."),Im.forEach(t),Wi=p(ya),x(Ne.$$.fragment,ya),ya.forEach(t),lt.forEach(t),us=p(o),ve=n(o,"H2",{class:!0});var Os=s(ve);Oe=n(Os,"A",{id:!0,class:!0,href:!0});var jm=s(Oe);Xa=n(jm,"SPAN",{});var Pm=s(Xa);x(Yt.$$.fragment,Pm),Pm.forEach(t),jm.forEach(t),Ui=p(Os),Ka=n(Os,"SPAN",{});var Cm=s(Ka);Ri=i(Cm,"BeitModel"),Cm.forEach(t),Os.forEach(t),gs=p(o),ee=n(o,"DIV",{class:!0});var Ta=s(ee);x(Qt.$$.fragment,Ta),Hi=p(Ta),Zt=n(Ta,"P",{});var Ds=s(Zt);Ji=i(Ds,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),eo=n(Ds,"A",{href:!0,rel:!0});var zm=s(eo);Gi=i(zm,"torch.nn.Module"),zm.forEach(t),Xi=i(Ds,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds.forEach(t),Ki=p(Ta),R=n(Ta,"DIV",{class:!0});var dt=s(R);x(to.$$.fragment,dt),Yi=p(dt),we=n(dt,"P",{});var Ba=s(we);Qi=i(Ba,"The "),ca=n(Ba,"A",{href:!0});var Am=s(ca);Zi=i(Am,"BeitModel"),Am.forEach(t),el=i(Ba," forward method, overrides the "),Ya=n(Ba,"CODE",{});var qm=s(Ya);tl=i(qm,"__call__"),qm.forEach(t),ol=i(Ba," special method."),Ba.forEach(t),al=p(dt),x(De.$$.fragment,dt),nl=p(dt),x(Ve.$$.fragment,dt),dt.forEach(t),Ta.forEach(t),_s=p(o),xe=n(o,"H2",{class:!0});var Vs=s(xe);We=n(Vs,"A",{id:!0,class:!0,href:!0});var Lm=s(We);Qa=n(Lm,"SPAN",{});var Sm=s(Qa);x(oo.$$.fragment,Sm),Sm.forEach(t),Lm.forEach(t),sl=p(Vs),Za=n(Vs,"SPAN",{});var Nm=s(Za);rl=i(Nm,"BeitForMaskedImageModeling"),Nm.forEach(t),Vs.forEach(t),bs=p(o),te=n(o,"DIV",{class:!0});var Fa=s(te);x(ao.$$.fragment,Fa),il=p(Fa),oe=n(Fa,"P",{});var ct=s(oe);ll=i(ct,`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ma=n(ct,"A",{href:!0});var Om=s(ma);dl=i(Om,"AutoModelForMaskedImageModeling"),Om.forEach(t),cl=i(ct,`, so you
will need to use `),pa=n(ct,"A",{href:!0});var Dm=s(pa);ml=i(Dm,"BeitForMaskedImageModeling"),Dm.forEach(t),pl=i(ct,` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),no=n(ct,"A",{href:!0,rel:!0});var Vm=s(no);hl=i(Vm,"torch.nn.Module"),Vm.forEach(t),fl=i(ct,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ct.forEach(t),ul=p(Fa),H=n(Fa,"DIV",{class:!0});var mt=s(H);x(so.$$.fragment,mt),gl=p(mt),$e=n(mt,"P",{});var Ea=s($e);_l=i(Ea,"The "),ha=n(Ea,"A",{href:!0});var Wm=s(ha);bl=i(Wm,"BeitForMaskedImageModeling"),Wm.forEach(t),vl=i(Ea," forward method, overrides the "),en=n(Ea,"CODE",{});var Um=s(en);wl=i(Um,"__call__"),Um.forEach(t),xl=i(Ea," special method."),Ea.forEach(t),$l=p(mt),x(Ue.$$.fragment,mt),yl=p(mt),x(Re.$$.fragment,mt),mt.forEach(t),Fa.forEach(t),vs=p(o),ye=n(o,"H2",{class:!0});var Ws=s(ye);He=n(Ws,"A",{id:!0,class:!0,href:!0});var Rm=s(He);tn=n(Rm,"SPAN",{});var Hm=s(tn);x(ro.$$.fragment,Hm),Hm.forEach(t),Rm.forEach(t),Tl=p(Ws),on=n(Ws,"SPAN",{});var Jm=s(on);Bl=i(Jm,"BeitForImageClassification"),Jm.forEach(t),Ws.forEach(t),ws=p(o),D=n(o,"DIV",{class:!0});var pt=s(D);x(io.$$.fragment,pt),Fl=p(pt),an=n(pt,"P",{});var Gm=s(an);El=i(Gm,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Gm.forEach(t),kl=p(pt),lo=n(pt,"P",{});var Us=s(lo);Ml=i(Us,"This model is a PyTorch "),co=n(Us,"A",{href:!0,rel:!0});var Xm=s(co);Il=i(Xm,"torch.nn.Module"),Xm.forEach(t),jl=i(Us,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Us.forEach(t),Pl=p(pt),J=n(pt,"DIV",{class:!0});var ht=s(J);x(mo.$$.fragment,ht),Cl=p(ht),Te=n(ht,"P",{});var ka=s(Te);zl=i(ka,"The "),fa=n(ka,"A",{href:!0});var Km=s(fa);Al=i(Km,"BeitForImageClassification"),Km.forEach(t),ql=i(ka," forward method, overrides the "),nn=n(ka,"CODE",{});var Ym=s(nn);Ll=i(Ym,"__call__"),Ym.forEach(t),Sl=i(ka," special method."),ka.forEach(t),Nl=p(ht),x(Je.$$.fragment,ht),Ol=p(ht),x(Ge.$$.fragment,ht),ht.forEach(t),pt.forEach(t),xs=p(o),Be=n(o,"H2",{class:!0});var Rs=s(Be);Xe=n(Rs,"A",{id:!0,class:!0,href:!0});var Qm=s(Xe);sn=n(Qm,"SPAN",{});var Zm=s(sn);x(po.$$.fragment,Zm),Zm.forEach(t),Qm.forEach(t),Dl=p(Rs),rn=n(Rs,"SPAN",{});var ep=s(rn);Vl=i(ep,"BeitForSemanticSegmentation"),ep.forEach(t),Rs.forEach(t),$s=p(o),V=n(o,"DIV",{class:!0});var ft=s(V);x(ho.$$.fragment,ft),Wl=p(ft),ln=n(ft,"P",{});var tp=s(ln);Ul=i(tp,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),tp.forEach(t),Rl=p(ft),fo=n(ft,"P",{});var Hs=s(fo);Hl=i(Hs,"This model is a PyTorch "),uo=n(Hs,"A",{href:!0,rel:!0});var op=s(uo);Jl=i(op,"torch.nn.Module"),op.forEach(t),Gl=i(Hs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hs.forEach(t),Xl=p(ft),G=n(ft,"DIV",{class:!0});var ut=s(G);x(go.$$.fragment,ut),Kl=p(ut),Fe=n(ut,"P",{});var Ma=s(Fe);Yl=i(Ma,"The "),ua=n(Ma,"A",{href:!0});var ap=s(ua);Ql=i(ap,"BeitForSemanticSegmentation"),ap.forEach(t),Zl=i(Ma," forward method, overrides the "),dn=n(Ma,"CODE",{});var np=s(dn);ed=i(np,"__call__"),np.forEach(t),td=i(Ma," special method."),Ma.forEach(t),od=p(ut),x(Ke.$$.fragment,ut),ad=p(ut),x(Ye.$$.fragment,ut),ut.forEach(t),ft.forEach(t),ys=p(o),Ee=n(o,"H2",{class:!0});var Js=s(Ee);Qe=n(Js,"A",{id:!0,class:!0,href:!0});var sp=s(Qe);cn=n(sp,"SPAN",{});var rp=s(cn);x(_o.$$.fragment,rp),rp.forEach(t),sp.forEach(t),nd=p(Js),mn=n(Js,"SPAN",{});var ip=s(mn);sd=i(ip,"FlaxBeitModel"),ip.forEach(t),Js.forEach(t),Ts=p(o),M=n(o,"DIV",{class:!0});var q=s(M);x(bo.$$.fragment,q),rd=p(q),pn=n(q,"P",{});var lp=s(pn);id=i(lp,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),lp.forEach(t),ld=p(q),vo=n(q,"P",{});var Gs=s(vo);dd=i(Gs,"This model inherits from "),ga=n(Gs,"A",{href:!0});var dp=s(ga);cd=i(dp,"FlaxPreTrainedModel"),dp.forEach(t),md=i(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gs.forEach(t),pd=p(q),wo=n(q,"P",{});var Xs=s(wo);hd=i(Xs,"This model is also a Flax Linen "),xo=n(Xs,"A",{href:!0,rel:!0});var cp=s(xo);fd=i(cp,"flax.linen.Module"),cp.forEach(t),ud=i(Xs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xs.forEach(t),gd=p(q),hn=n(q,"P",{});var mp=s(hn);_d=i(mp,"Finally, this model supports inherent JAX features such as:"),mp.forEach(t),bd=p(q),ae=n(q,"UL",{});var gt=s(ae);fn=n(gt,"LI",{});var pp=s(fn);$o=n(pp,"A",{href:!0,rel:!0});var hp=s($o);vd=i(hp,"Just-In-Time (JIT) compilation"),hp.forEach(t),pp.forEach(t),wd=p(gt),un=n(gt,"LI",{});var fp=s(un);yo=n(fp,"A",{href:!0,rel:!0});var up=s(yo);xd=i(up,"Automatic Differentiation"),up.forEach(t),fp.forEach(t),$d=p(gt),gn=n(gt,"LI",{});var gp=s(gn);To=n(gp,"A",{href:!0,rel:!0});var _p=s(To);yd=i(_p,"Vectorization"),_p.forEach(t),gp.forEach(t),Td=p(gt),_n=n(gt,"LI",{});var bp=s(_n);Bo=n(bp,"A",{href:!0,rel:!0});var vp=s(Bo);Bd=i(vp,"Parallelization"),vp.forEach(t),bp.forEach(t),gt.forEach(t),Fd=p(q),X=n(q,"DIV",{class:!0});var _t=s(X);x(Fo.$$.fragment,_t),Ed=p(_t),ke=n(_t,"P",{});var Ia=s(ke);kd=i(Ia,"The "),bn=n(Ia,"CODE",{});var wp=s(bn);Md=i(wp,"FlaxBeitPreTrainedModel"),wp.forEach(t),Id=i(Ia," forward method, overrides the "),vn=n(Ia,"CODE",{});var xp=s(vn);jd=i(xp,"__call__"),xp.forEach(t),Pd=i(Ia," special method."),Ia.forEach(t),Cd=p(_t),x(Ze.$$.fragment,_t),zd=p(_t),x(et.$$.fragment,_t),_t.forEach(t),q.forEach(t),Bs=p(o),Me=n(o,"H2",{class:!0});var Ks=s(Me);tt=n(Ks,"A",{id:!0,class:!0,href:!0});var $p=s(tt);wn=n($p,"SPAN",{});var yp=s(wn);x(Eo.$$.fragment,yp),yp.forEach(t),$p.forEach(t),Ad=p(Ks),xn=n(Ks,"SPAN",{});var Tp=s(xn);qd=i(Tp,"FlaxBeitForMaskedImageModeling"),Tp.forEach(t),Ks.forEach(t),Fs=p(o),I=n(o,"DIV",{class:!0});var L=s(I);x(ko.$$.fragment,L),Ld=p(L),$n=n(L,"P",{});var Bp=s($n);Sd=i(Bp,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Bp.forEach(t),Nd=p(L),Mo=n(L,"P",{});var Ys=s(Mo);Od=i(Ys,"This model inherits from "),_a=n(Ys,"A",{href:!0});var Fp=s(_a);Dd=i(Fp,"FlaxPreTrainedModel"),Fp.forEach(t),Vd=i(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ys.forEach(t),Wd=p(L),Io=n(L,"P",{});var Qs=s(Io);Ud=i(Qs,"This model is also a Flax Linen "),jo=n(Qs,"A",{href:!0,rel:!0});var Ep=s(jo);Rd=i(Ep,"flax.linen.Module"),Ep.forEach(t),Hd=i(Qs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qs.forEach(t),Jd=p(L),yn=n(L,"P",{});var kp=s(yn);Gd=i(kp,"Finally, this model supports inherent JAX features such as:"),kp.forEach(t),Xd=p(L),ne=n(L,"UL",{});var bt=s(ne);Tn=n(bt,"LI",{});var Mp=s(Tn);Po=n(Mp,"A",{href:!0,rel:!0});var Ip=s(Po);Kd=i(Ip,"Just-In-Time (JIT) compilation"),Ip.forEach(t),Mp.forEach(t),Yd=p(bt),Bn=n(bt,"LI",{});var jp=s(Bn);Co=n(jp,"A",{href:!0,rel:!0});var Pp=s(Co);Qd=i(Pp,"Automatic Differentiation"),Pp.forEach(t),jp.forEach(t),Zd=p(bt),Fn=n(bt,"LI",{});var Cp=s(Fn);zo=n(Cp,"A",{href:!0,rel:!0});var zp=s(zo);ec=i(zp,"Vectorization"),zp.forEach(t),Cp.forEach(t),tc=p(bt),En=n(bt,"LI",{});var Ap=s(En);Ao=n(Ap,"A",{href:!0,rel:!0});var qp=s(Ao);oc=i(qp,"Parallelization"),qp.forEach(t),Ap.forEach(t),bt.forEach(t),ac=p(L),A=n(L,"DIV",{class:!0});var de=s(A);x(qo.$$.fragment,de),nc=p(de),Ie=n(de,"P",{});var ja=s(Ie);sc=i(ja,"The "),kn=n(ja,"CODE",{});var Lp=s(kn);rc=i(Lp,"FlaxBeitPreTrainedModel"),Lp.forEach(t),ic=i(ja," forward method, overrides the "),Mn=n(ja,"CODE",{});var Sp=s(Mn);lc=i(Sp,"__call__"),Sp.forEach(t),dc=i(ja," special method."),ja.forEach(t),cc=p(de),x(ot.$$.fragment,de),mc=p(de),je=n(de,"P",{});var Pa=s(je);pc=i(Pa,"bool_masked_pos ("),In=n(Pa,"CODE",{});var Np=s(In);hc=i(Np,"numpy.ndarray"),Np.forEach(t),fc=i(Pa," of shape "),jn=n(Pa,"CODE",{});var Op=s(jn);uc=i(Op,"(batch_size, num_patches)"),Op.forEach(t),gc=i(Pa,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Pa.forEach(t),_c=p(de),x(at.$$.fragment,de),de.forEach(t),L.forEach(t),Es=p(o),Pe=n(o,"H2",{class:!0});var Zs=s(Pe);nt=n(Zs,"A",{id:!0,class:!0,href:!0});var Dp=s(nt);Pn=n(Dp,"SPAN",{});var Vp=s(Pn);x(Lo.$$.fragment,Vp),Vp.forEach(t),Dp.forEach(t),bc=p(Zs),Cn=n(Zs,"SPAN",{});var Wp=s(Cn);vc=i(Wp,"FlaxBeitForImageClassification"),Wp.forEach(t),Zs.forEach(t),ks=p(o),j=n(o,"DIV",{class:!0});var S=s(j);x(So.$$.fragment,S),wc=p(S),zn=n(S,"P",{});var Up=s(zn);xc=i(Up,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Up.forEach(t),$c=p(S),No=n(S,"P",{});var er=s(No);yc=i(er,"This model inherits from "),ba=n(er,"A",{href:!0});var Rp=s(ba);Tc=i(Rp,"FlaxPreTrainedModel"),Rp.forEach(t),Bc=i(er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),er.forEach(t),Fc=p(S),Oo=n(S,"P",{});var tr=s(Oo);Ec=i(tr,"This model is also a Flax Linen "),Do=n(tr,"A",{href:!0,rel:!0});var Hp=s(Do);kc=i(Hp,"flax.linen.Module"),Hp.forEach(t),Mc=i(tr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tr.forEach(t),Ic=p(S),An=n(S,"P",{});var Jp=s(An);jc=i(Jp,"Finally, this model supports inherent JAX features such as:"),Jp.forEach(t),Pc=p(S),se=n(S,"UL",{});var vt=s(se);qn=n(vt,"LI",{});var Gp=s(qn);Vo=n(Gp,"A",{href:!0,rel:!0});var Xp=s(Vo);Cc=i(Xp,"Just-In-Time (JIT) compilation"),Xp.forEach(t),Gp.forEach(t),zc=p(vt),Ln=n(vt,"LI",{});var Kp=s(Ln);Wo=n(Kp,"A",{href:!0,rel:!0});var Yp=s(Wo);Ac=i(Yp,"Automatic Differentiation"),Yp.forEach(t),Kp.forEach(t),qc=p(vt),Sn=n(vt,"LI",{});var Qp=s(Sn);Uo=n(Qp,"A",{href:!0,rel:!0});var Zp=s(Uo);Lc=i(Zp,"Vectorization"),Zp.forEach(t),Qp.forEach(t),Sc=p(vt),Nn=n(vt,"LI",{});var eh=s(Nn);Ro=n(eh,"A",{href:!0,rel:!0});var th=s(Ro);Nc=i(th,"Parallelization"),th.forEach(t),eh.forEach(t),vt.forEach(t),Oc=p(S),K=n(S,"DIV",{class:!0});var wt=s(K);x(Ho.$$.fragment,wt),Dc=p(wt),Ce=n(wt,"P",{});var Ca=s(Ce);Vc=i(Ca,"The "),On=n(Ca,"CODE",{});var oh=s(On);Wc=i(oh,"FlaxBeitPreTrainedModel"),oh.forEach(t),Uc=i(Ca," forward method, overrides the "),Dn=n(Ca,"CODE",{});var ah=s(Dn);Rc=i(ah,"__call__"),ah.forEach(t),Hc=i(Ca," special method."),Ca.forEach(t),Jc=p(wt),x(st.$$.fragment,wt),Gc=p(wt),x(rt.$$.fragment,wt),wt.forEach(t),S.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Fh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(u,"class","relative group"),d(ze,"id","overview"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#overview"),d(ce,"class","relative group"),d(Ft,"href","https://arxiv.org/abs/2106.08254"),d(Ft,"rel","nofollow"),d(Et,"href","https://arxiv.org/abs/2010.11929"),d(Et,"rel","nofollow"),d(kt,"href","https://arxiv.org/abs/2102.12092"),d(kt,"rel","nofollow"),d(Qo,"href","vit"),d(Zo,"href","deit"),d(Mt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(Mt,"rel","nofollow"),d(ea,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(ta,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(oa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),d(aa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(jt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(jt,"rel","nofollow"),d(na,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(Ct,"href","https://huggingface.co/models?search=microsoft/beit"),d(Ct,"rel","nofollow"),d(zt,"href","http://www.image-net.org/"),d(zt,"rel","nofollow"),d(At,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(At,"rel","nofollow"),d(sa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"),d(qt,"href","https://huggingface.co/nielsr"),d(qt,"rel","nofollow"),d(Lt,"href","https://huggingface.co/kamalkraj"),d(Lt,"rel","nofollow"),d(St,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(St,"rel","nofollow"),d(Ae,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(he,"class","relative group"),d(ra,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ia,"href","/docs/transformers/main/en/model_doc/beit#transformers.FlaxBeitModel"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qe,"id","transformers.BeitConfig"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.BeitConfig"),d(ge,"class","relative group"),d(la,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(Ht,"href","https://huggingface.co/microsoft/beit-base-patch16-224-pt22k"),d(Ht,"rel","nofollow"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.BeitFeatureExtractor"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.BeitFeatureExtractor"),d(be,"class","relative group"),d(da,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Oe,"id","transformers.BeitModel"),d(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Oe,"href","#transformers.BeitModel"),d(ve,"class","relative group"),d(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(eo,"rel","nofollow"),d(ca,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitForMaskedImageModeling"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitForMaskedImageModeling"),d(xe,"class","relative group"),d(ma,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoModelForMaskedImageModeling"),d(pa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(no,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(no,"rel","nofollow"),d(ha,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.BeitForImageClassification"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.BeitForImageClassification"),d(ye,"class","relative group"),d(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(co,"rel","nofollow"),d(fa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForSemanticSegmentation"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForSemanticSegmentation"),d(Be,"class","relative group"),d(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(uo,"rel","nofollow"),d(ua,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"id","transformers.FlaxBeitModel"),d(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Qe,"href","#transformers.FlaxBeitModel"),d(Ee,"class","relative group"),d(ga,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(xo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(xo,"rel","nofollow"),d($o,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d($o,"rel","nofollow"),d(yo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(yo,"rel","nofollow"),d(To,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(To,"rel","nofollow"),d(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Bo,"rel","nofollow"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(tt,"id","transformers.FlaxBeitForMaskedImageModeling"),d(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(tt,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(Me,"class","relative group"),d(_a,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(jo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(jo,"rel","nofollow"),d(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Po,"rel","nofollow"),d(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Co,"rel","nofollow"),d(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(zo,"rel","nofollow"),d(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ao,"rel","nofollow"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(nt,"id","transformers.FlaxBeitForImageClassification"),d(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(nt,"href","#transformers.FlaxBeitForImageClassification"),d(Pe,"class","relative group"),d(ba,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Do,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Do,"rel","nofollow"),d(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Vo,"rel","nofollow"),d(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wo,"rel","nofollow"),d(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Uo,"rel","nofollow"),d(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ro,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,u,g),e(u,f),e(f,b),$(l,b,null),e(u,h),e(u,E),e(E,or),_(o,ts,g),_(o,ce,g),e(ce,ze),e(ze,za),$(Bt,za,null),e(ce,ar),e(ce,Aa),e(Aa,nr),_(o,os,g),_(o,W,g),e(W,sr),e(W,Ft),e(Ft,rr),e(W,ir),e(W,Et),e(Et,lr),e(W,dr),e(W,kt),e(kt,cr),e(W,mr),_(o,as,g),_(o,Xo,g),e(Xo,pr),_(o,ns,g),_(o,Ko,g),e(Ko,qa),e(qa,hr),_(o,ss,g),_(o,Yo,g),e(Yo,fr),_(o,rs,g),_(o,C,g),e(C,k),e(k,ur),e(k,Qo),e(Qo,gr),e(k,_r),e(k,Zo),e(Zo,br),e(k,vr),e(k,Mt),e(Mt,wr),e(k,xr),e(k,ea),e(ea,$r),e(k,yr),e(k,ta),e(ta,Tr),e(k,Br),e(k,oa),e(oa,Fr),e(k,Er),e(k,aa),e(aa,kr),e(k,Mr),e(C,Ir),e(C,It),e(It,jr),e(It,jt),e(jt,Pr),e(It,Cr),e(C,zr),e(C,Pt),e(Pt,Ar),e(Pt,na),e(na,qr),e(Pt,Lr),e(C,Sr),e(C,me),e(me,Nr),e(me,La),e(La,Or),e(me,Dr),e(me,Ct),e(Ct,Vr),e(me,Wr),e(C,Ur),e(C,pe),e(pe,Rr),e(pe,zt),e(zt,Hr),e(pe,Jr),e(pe,At),e(At,Gr),e(pe,Xr),e(C,Kr),e(C,N),e(N,Yr),e(N,Sa),e(Sa,Qr),e(N,Zr),e(N,Na),e(Na,ei),e(N,ti),e(N,sa),e(sa,oi),e(N,ai),e(N,Oa),e(Oa,ni),e(N,si),_(o,is,g),_(o,U,g),e(U,ri),e(U,qt),e(qt,ii),e(U,li),e(U,Lt),e(Lt,di),e(U,ci),e(U,St),e(St,mi),e(U,pi),_(o,ls,g),_(o,he,g),e(he,Ae),e(Ae,Da),$(Nt,Da,null),e(he,hi),e(he,Va),e(Va,fi),_(o,ds,g),_(o,fe,g),$(Ot,fe,null),e(fe,ui),e(fe,Dt),e(Dt,gi),e(Dt,ra),e(ra,_i),e(Dt,bi),_(o,cs,g),_(o,ue,g),$(Vt,ue,null),e(ue,vi),e(ue,Wt),e(Wt,wi),e(Wt,ia),e(ia,xi),e(Wt,$i),_(o,ms,g),_(o,ge,g),e(ge,qe),e(qe,Wa),$(Ut,Wa,null),e(ge,yi),e(ge,Ua),e(Ua,Ti),_(o,ps,g),_(o,Z,g),$(Rt,Z,null),e(Z,Bi),e(Z,_e),e(_e,Fi),e(_e,la),e(la,Ei),e(_e,ki),e(_e,Ht),e(Ht,Mi),e(_e,Ii),e(Z,ji),$(Le,Z,null),_(o,hs,g),_(o,be,g),e(be,Se),e(Se,Ra),$(Jt,Ra,null),e(be,Pi),e(be,Ha),e(Ha,Ci),_(o,fs,g),_(o,O,g),$(Gt,O,null),e(O,zi),e(O,Ja),e(Ja,Ai),e(O,qi),e(O,Xt),e(Xt,Li),e(Xt,da),e(da,Si),e(Xt,Ni),e(O,Oi),e(O,ie),$(Kt,ie,null),e(ie,Di),e(ie,Ga),e(Ga,Vi),e(ie,Wi),$(Ne,ie,null),_(o,us,g),_(o,ve,g),e(ve,Oe),e(Oe,Xa),$(Yt,Xa,null),e(ve,Ui),e(ve,Ka),e(Ka,Ri),_(o,gs,g),_(o,ee,g),$(Qt,ee,null),e(ee,Hi),e(ee,Zt),e(Zt,Ji),e(Zt,eo),e(eo,Gi),e(Zt,Xi),e(ee,Ki),e(ee,R),$(to,R,null),e(R,Yi),e(R,we),e(we,Qi),e(we,ca),e(ca,Zi),e(we,el),e(we,Ya),e(Ya,tl),e(we,ol),e(R,al),$(De,R,null),e(R,nl),$(Ve,R,null),_(o,_s,g),_(o,xe,g),e(xe,We),e(We,Qa),$(oo,Qa,null),e(xe,sl),e(xe,Za),e(Za,rl),_(o,bs,g),_(o,te,g),$(ao,te,null),e(te,il),e(te,oe),e(oe,ll),e(oe,ma),e(ma,dl),e(oe,cl),e(oe,pa),e(pa,ml),e(oe,pl),e(oe,no),e(no,hl),e(oe,fl),e(te,ul),e(te,H),$(so,H,null),e(H,gl),e(H,$e),e($e,_l),e($e,ha),e(ha,bl),e($e,vl),e($e,en),e(en,wl),e($e,xl),e(H,$l),$(Ue,H,null),e(H,yl),$(Re,H,null),_(o,vs,g),_(o,ye,g),e(ye,He),e(He,tn),$(ro,tn,null),e(ye,Tl),e(ye,on),e(on,Bl),_(o,ws,g),_(o,D,g),$(io,D,null),e(D,Fl),e(D,an),e(an,El),e(D,kl),e(D,lo),e(lo,Ml),e(lo,co),e(co,Il),e(lo,jl),e(D,Pl),e(D,J),$(mo,J,null),e(J,Cl),e(J,Te),e(Te,zl),e(Te,fa),e(fa,Al),e(Te,ql),e(Te,nn),e(nn,Ll),e(Te,Sl),e(J,Nl),$(Je,J,null),e(J,Ol),$(Ge,J,null),_(o,xs,g),_(o,Be,g),e(Be,Xe),e(Xe,sn),$(po,sn,null),e(Be,Dl),e(Be,rn),e(rn,Vl),_(o,$s,g),_(o,V,g),$(ho,V,null),e(V,Wl),e(V,ln),e(ln,Ul),e(V,Rl),e(V,fo),e(fo,Hl),e(fo,uo),e(uo,Jl),e(fo,Gl),e(V,Xl),e(V,G),$(go,G,null),e(G,Kl),e(G,Fe),e(Fe,Yl),e(Fe,ua),e(ua,Ql),e(Fe,Zl),e(Fe,dn),e(dn,ed),e(Fe,td),e(G,od),$(Ke,G,null),e(G,ad),$(Ye,G,null),_(o,ys,g),_(o,Ee,g),e(Ee,Qe),e(Qe,cn),$(_o,cn,null),e(Ee,nd),e(Ee,mn),e(mn,sd),_(o,Ts,g),_(o,M,g),$(bo,M,null),e(M,rd),e(M,pn),e(pn,id),e(M,ld),e(M,vo),e(vo,dd),e(vo,ga),e(ga,cd),e(vo,md),e(M,pd),e(M,wo),e(wo,hd),e(wo,xo),e(xo,fd),e(wo,ud),e(M,gd),e(M,hn),e(hn,_d),e(M,bd),e(M,ae),e(ae,fn),e(fn,$o),e($o,vd),e(ae,wd),e(ae,un),e(un,yo),e(yo,xd),e(ae,$d),e(ae,gn),e(gn,To),e(To,yd),e(ae,Td),e(ae,_n),e(_n,Bo),e(Bo,Bd),e(M,Fd),e(M,X),$(Fo,X,null),e(X,Ed),e(X,ke),e(ke,kd),e(ke,bn),e(bn,Md),e(ke,Id),e(ke,vn),e(vn,jd),e(ke,Pd),e(X,Cd),$(Ze,X,null),e(X,zd),$(et,X,null),_(o,Bs,g),_(o,Me,g),e(Me,tt),e(tt,wn),$(Eo,wn,null),e(Me,Ad),e(Me,xn),e(xn,qd),_(o,Fs,g),_(o,I,g),$(ko,I,null),e(I,Ld),e(I,$n),e($n,Sd),e(I,Nd),e(I,Mo),e(Mo,Od),e(Mo,_a),e(_a,Dd),e(Mo,Vd),e(I,Wd),e(I,Io),e(Io,Ud),e(Io,jo),e(jo,Rd),e(Io,Hd),e(I,Jd),e(I,yn),e(yn,Gd),e(I,Xd),e(I,ne),e(ne,Tn),e(Tn,Po),e(Po,Kd),e(ne,Yd),e(ne,Bn),e(Bn,Co),e(Co,Qd),e(ne,Zd),e(ne,Fn),e(Fn,zo),e(zo,ec),e(ne,tc),e(ne,En),e(En,Ao),e(Ao,oc),e(I,ac),e(I,A),$(qo,A,null),e(A,nc),e(A,Ie),e(Ie,sc),e(Ie,kn),e(kn,rc),e(Ie,ic),e(Ie,Mn),e(Mn,lc),e(Ie,dc),e(A,cc),$(ot,A,null),e(A,mc),e(A,je),e(je,pc),e(je,In),e(In,hc),e(je,fc),e(je,jn),e(jn,uc),e(je,gc),e(A,_c),$(at,A,null),_(o,Es,g),_(o,Pe,g),e(Pe,nt),e(nt,Pn),$(Lo,Pn,null),e(Pe,bc),e(Pe,Cn),e(Cn,vc),_(o,ks,g),_(o,j,g),$(So,j,null),e(j,wc),e(j,zn),e(zn,xc),e(j,$c),e(j,No),e(No,yc),e(No,ba),e(ba,Tc),e(No,Bc),e(j,Fc),e(j,Oo),e(Oo,Ec),e(Oo,Do),e(Do,kc),e(Oo,Mc),e(j,Ic),e(j,An),e(An,jc),e(j,Pc),e(j,se),e(se,qn),e(qn,Vo),e(Vo,Cc),e(se,zc),e(se,Ln),e(Ln,Wo),e(Wo,Ac),e(se,qc),e(se,Sn),e(Sn,Uo),e(Uo,Lc),e(se,Sc),e(se,Nn),e(Nn,Ro),e(Ro,Nc),e(j,Oc),e(j,K),$(Ho,K,null),e(K,Dc),e(K,Ce),e(Ce,Vc),e(Ce,On),e(On,Wc),e(Ce,Uc),e(Ce,Dn),e(Dn,Rc),e(Ce,Hc),e(K,Jc),$(st,K,null),e(K,Gc),$(rt,K,null),Ms=!0},p(o,[g]){const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:o}),Le.$set(Jo);const Vn={};g&2&&(Vn.$$scope={dirty:g,ctx:o}),Ne.$set(Vn);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:o}),De.$set(Wn);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:o}),Ve.$set(Un);const Go={};g&2&&(Go.$$scope={dirty:g,ctx:o}),Ue.$set(Go);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:o}),Re.$set(Rn);const Hn={};g&2&&(Hn.$$scope={dirty:g,ctx:o}),Je.$set(Hn);const Jn={};g&2&&(Jn.$$scope={dirty:g,ctx:o}),Ge.$set(Jn);const re={};g&2&&(re.$$scope={dirty:g,ctx:o}),Ke.$set(re);const Gn={};g&2&&(Gn.$$scope={dirty:g,ctx:o}),Ye.$set(Gn);const Xn={};g&2&&(Xn.$$scope={dirty:g,ctx:o}),Ze.$set(Xn);const Kn={};g&2&&(Kn.$$scope={dirty:g,ctx:o}),et.$set(Kn);const Yn={};g&2&&(Yn.$$scope={dirty:g,ctx:o}),ot.$set(Yn);const Qn={};g&2&&(Qn.$$scope={dirty:g,ctx:o}),at.$set(Qn);const Zn={};g&2&&(Zn.$$scope={dirty:g,ctx:o}),st.$set(Zn);const es={};g&2&&(es.$$scope={dirty:g,ctx:o}),rt.$set(es)},i(o){Ms||(y(l.$$.fragment,o),y(Bt.$$.fragment,o),y(Nt.$$.fragment,o),y(Ot.$$.fragment,o),y(Vt.$$.fragment,o),y(Ut.$$.fragment,o),y(Rt.$$.fragment,o),y(Le.$$.fragment,o),y(Jt.$$.fragment,o),y(Gt.$$.fragment,o),y(Kt.$$.fragment,o),y(Ne.$$.fragment,o),y(Yt.$$.fragment,o),y(Qt.$$.fragment,o),y(to.$$.fragment,o),y(De.$$.fragment,o),y(Ve.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(so.$$.fragment,o),y(Ue.$$.fragment,o),y(Re.$$.fragment,o),y(ro.$$.fragment,o),y(io.$$.fragment,o),y(mo.$$.fragment,o),y(Je.$$.fragment,o),y(Ge.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(go.$$.fragment,o),y(Ke.$$.fragment,o),y(Ye.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(Fo.$$.fragment,o),y(Ze.$$.fragment,o),y(et.$$.fragment,o),y(Eo.$$.fragment,o),y(ko.$$.fragment,o),y(qo.$$.fragment,o),y(ot.$$.fragment,o),y(at.$$.fragment,o),y(Lo.$$.fragment,o),y(So.$$.fragment,o),y(Ho.$$.fragment,o),y(st.$$.fragment,o),y(rt.$$.fragment,o),Ms=!0)},o(o){T(l.$$.fragment,o),T(Bt.$$.fragment,o),T(Nt.$$.fragment,o),T(Ot.$$.fragment,o),T(Vt.$$.fragment,o),T(Ut.$$.fragment,o),T(Rt.$$.fragment,o),T(Le.$$.fragment,o),T(Jt.$$.fragment,o),T(Gt.$$.fragment,o),T(Kt.$$.fragment,o),T(Ne.$$.fragment,o),T(Yt.$$.fragment,o),T(Qt.$$.fragment,o),T(to.$$.fragment,o),T(De.$$.fragment,o),T(Ve.$$.fragment,o),T(oo.$$.fragment,o),T(ao.$$.fragment,o),T(so.$$.fragment,o),T(Ue.$$.fragment,o),T(Re.$$.fragment,o),T(ro.$$.fragment,o),T(io.$$.fragment,o),T(mo.$$.fragment,o),T(Je.$$.fragment,o),T(Ge.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(go.$$.fragment,o),T(Ke.$$.fragment,o),T(Ye.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(Fo.$$.fragment,o),T(Ze.$$.fragment,o),T(et.$$.fragment,o),T(Eo.$$.fragment,o),T(ko.$$.fragment,o),T(qo.$$.fragment,o),T(ot.$$.fragment,o),T(at.$$.fragment,o),T(Lo.$$.fragment,o),T(So.$$.fragment,o),T(Ho.$$.fragment,o),T(st.$$.fragment,o),T(rt.$$.fragment,o),Ms=!1},d(o){t(c),o&&t(v),o&&t(u),B(l),o&&t(ts),o&&t(ce),B(Bt),o&&t(os),o&&t(W),o&&t(as),o&&t(Xo),o&&t(ns),o&&t(Ko),o&&t(ss),o&&t(Yo),o&&t(rs),o&&t(C),o&&t(is),o&&t(U),o&&t(ls),o&&t(he),B(Nt),o&&t(ds),o&&t(fe),B(Ot),o&&t(cs),o&&t(ue),B(Vt),o&&t(ms),o&&t(ge),B(Ut),o&&t(ps),o&&t(Z),B(Rt),B(Le),o&&t(hs),o&&t(be),B(Jt),o&&t(fs),o&&t(O),B(Gt),B(Kt),B(Ne),o&&t(us),o&&t(ve),B(Yt),o&&t(gs),o&&t(ee),B(Qt),B(to),B(De),B(Ve),o&&t(_s),o&&t(xe),B(oo),o&&t(bs),o&&t(te),B(ao),B(so),B(Ue),B(Re),o&&t(vs),o&&t(ye),B(ro),o&&t(ws),o&&t(D),B(io),B(mo),B(Je),B(Ge),o&&t(xs),o&&t(Be),B(po),o&&t($s),o&&t(V),B(ho),B(go),B(Ke),B(Ye),o&&t(ys),o&&t(Ee),B(_o),o&&t(Ts),o&&t(M),B(bo),B(Fo),B(Ze),B(et),o&&t(Bs),o&&t(Me),B(Eo),o&&t(Fs),o&&t(I),B(ko),B(qo),B(ot),B(at),o&&t(Es),o&&t(Pe),B(Lo),o&&t(ks),o&&t(j),B(So),B(Ho),B(st),B(rt)}}}const Fh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function Eh(F){return lh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zh extends nh{constructor(c){super();sh(this,c,Eh,Bh,rh,{})}}export{zh as default,Fh as metadata};
