import{S as sh,i as rh,s as nh,e as a,k as m,w,t as n,M as ih,c as s,d as t,m as p,a as r,x,h as i,b as d,G as e,g as _,y as $,q as y,o as T,B,v as lh,L as yt}from"../../chunks/vendor-hf-doc-builder.js";import{T as xt}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function dh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitModel, BeitConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=n("Example:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function ch(F){let c,v;return{c(){c=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=s(u,"P",{});var f=r(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(u,f){_(u,c,f),e(c,v)},d(u){u&&t(c)}}}function mh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=n("Example:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function hh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=n("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function uh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
tabby, tabby cat`}}),{c(){c=a("p"),v=n("Example:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function _h(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function vh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=n("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function xh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function yh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(h,"CODE",{});var E=r(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=n("Example:"),u=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function Bh(F){let c,v,u,f,b,l,h,E,tn,er,ce,ze,za,Bt,on,Aa,an,tr,W,sn,Ft,rn,nn,Et,ln,dn,kt,cn,mn,or,Xo,pn,ar,Ko,qa,hn,sr,Yo,fn,rr,C,k,un,Qo,gn,_n,Zo,bn,vn,Mt,wn,xn,ea,$n,yn,ta,Tn,Bn,oa,Fn,En,aa,kn,Mn,In,It,jn,jt,Pn,Cn,zn,Pt,An,sa,qn,Ln,Sn,me,Nn,La,On,Dn,Ct,Vn,Wn,Un,pe,Rn,zt,Hn,Jn,At,Gn,Xn,Kn,N,Yn,Sa,Qn,Zn,Na,ei,ti,ra,oi,ai,Oa,si,ri,nr,U,ni,qt,ii,li,Lt,di,ci,St,mi,pi,ir,he,Ae,Da,Nt,hi,Va,fi,lr,fe,Ot,ui,Dt,gi,na,_i,bi,dr,ue,Vt,vi,Wt,wi,ia,xi,$i,cr,ge,qe,Wa,Ut,yi,Ua,Ti,mr,Z,Rt,Bi,_e,Fi,la,Ei,ki,Ht,Mi,Ii,ji,Le,pr,be,Se,Ra,Jt,Pi,Ha,Ci,hr,O,Gt,zi,Ja,Ai,qi,Xt,Li,da,Si,Ni,Oi,ie,Kt,Di,Ga,Vi,Wi,Ne,fr,ve,Oe,Xa,Yt,Ui,Ka,Ri,ur,ee,Qt,Hi,Zt,Ji,eo,Gi,Xi,Ki,R,to,Yi,we,Qi,ca,Zi,el,Ya,tl,ol,al,De,sl,Ve,gr,xe,We,Qa,oo,rl,Za,nl,_r,te,ao,il,oe,ll,ma,dl,cl,pa,ml,pl,so,hl,fl,ul,H,ro,gl,$e,_l,ha,bl,vl,es,wl,xl,$l,Ue,yl,Re,br,ye,He,ts,no,Tl,os,Bl,vr,D,io,Fl,as,El,kl,lo,Ml,co,Il,jl,Pl,J,mo,Cl,Te,zl,fa,Al,ql,ss,Ll,Sl,Nl,Je,Ol,Ge,wr,Be,Xe,rs,po,Dl,ns,Vl,xr,V,ho,Wl,is,Ul,Rl,fo,Hl,uo,Jl,Gl,Xl,G,go,Kl,Fe,Yl,ua,Ql,Zl,ls,ed,td,od,Ke,ad,Ye,$r,Ee,Qe,ds,_o,sd,cs,rd,yr,M,bo,nd,ms,id,ld,vo,dd,ga,cd,md,pd,wo,hd,xo,fd,ud,gd,ps,_d,bd,ae,hs,$o,vd,wd,fs,yo,xd,$d,us,To,yd,Td,gs,Bo,Bd,Fd,X,Fo,Ed,ke,kd,_s,Md,Id,bs,jd,Pd,Cd,Ze,zd,et,Tr,Me,tt,vs,Eo,Ad,ws,qd,Br,I,ko,Ld,xs,Sd,Nd,Mo,Od,_a,Dd,Vd,Wd,Io,Ud,jo,Rd,Hd,Jd,$s,Gd,Xd,se,ys,Po,Kd,Yd,Ts,Co,Qd,Zd,Bs,zo,ec,tc,Fs,Ao,oc,ac,A,qo,sc,Ie,rc,Es,nc,ic,ks,lc,dc,cc,ot,mc,je,pc,Ms,hc,fc,Is,uc,gc,_c,at,Fr,Pe,st,js,Lo,bc,Ps,vc,Er,j,So,wc,Cs,xc,$c,No,yc,ba,Tc,Bc,Fc,Oo,Ec,Do,kc,Mc,Ic,zs,jc,Pc,re,As,Vo,Cc,zc,qs,Wo,Ac,qc,Ls,Uo,Lc,Sc,Ss,Ro,Nc,Oc,K,Ho,Dc,Ce,Vc,Ns,Wc,Uc,Os,Rc,Hc,Jc,rt,Gc,nt,kr;return l=new Q({}),Bt=new Q({}),Nt=new Q({}),Ot=new P({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L69"}}),Vt=new P({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_flax_beit.py#L46"}}),Ut=new Q({}),Rt=new P({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
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
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/configuration_beit.py#L36"}}),Le=new $t({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[dh]},$$scope:{ctx:F}}}),Jt=new Q({}),Gt=new P({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/feature_extraction_beit.py#L36"}}),Kt=new P({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.BeitFeatureExtractor.__call__.segmentation_maps",description:`<strong>segmentation_maps</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding semantic segmentation maps with the pixel-wise annotations.`,name:"segmentation_maps"},{anchor:"transformers.BeitFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/feature_extraction_beit.py#L97",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>labels</strong> \u2014 Optional labels to be fed to a model (when <code>segmentation_maps</code> are provided)</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ne=new xt({props:{warning:!0,$$slots:{default:[ch]},$$scope:{ctx:F}}}),Yt=new Q({}),Qt=new P({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L620"}}),to=new P({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L647",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new xt({props:{$$slots:{default:[mh]},$$scope:{ctx:F}}}),Ve=new $t({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[ph]},$$scope:{ctx:F}}}),oo=new Q({}),ao=new P({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L732"}}),ro=new P({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"},{anchor:"transformers.BeitForMaskedImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new xt({props:{$$slots:{default:[hh]},$$scope:{ctx:F}}}),Re=new $t({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[fh]},$$scope:{ctx:F}}}),no=new Q({}),io=new P({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L832"}}),mo=new P({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L845",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new xt({props:{$$slots:{default:[uh]},$$scope:{ctx:F}}}),Ge=new $t({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[gh]},$$scope:{ctx:F}}}),po=new Q({}),ho=new P({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L1156"}}),go=new P({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_beit.py#L1200",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new xt({props:{$$slots:{default:[_h]},$$scope:{ctx:F}}}),Ye=new $t({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[bh]},$$scope:{ctx:F}}}),_o=new Q({}),bo=new P({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_flax_beit.py#L749"}}),Fo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
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
  href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new xt({props:{$$slots:{default:[vh]},$$scope:{ctx:F}}}),et=new $t({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[wh]},$$scope:{ctx:F}}}),Eo=new Q({}),ko=new P({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_flax_beit.py#L833"}}),qo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ot=new xt({props:{$$slots:{default:[xh]},$$scope:{ctx:F}}}),at=new $t({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[$h]},$$scope:{ctx:F}}}),Lo=new Q({}),So=new P({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_flax_beit.py#L920"}}),Ho=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new xt({props:{$$slots:{default:[yh]},$$scope:{ctx:F}}}),nt=new $t({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[Th]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=m(),u=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=m(),E=a("span"),tn=n("BEiT"),er=m(),ce=a("h2"),ze=a("a"),za=a("span"),w(Bt.$$.fragment),on=m(),Aa=a("span"),an=n("Overview"),tr=m(),W=a("p"),sn=n("The BEiT model was proposed in "),Ft=a("a"),rn=n("BEiT: BERT Pre-Training of Image Transformers"),nn=n(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Et=a("a"),ln=n("original ViT paper"),dn=n(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),kt=a("a"),cn=n("DALL-E model"),mn=n(` given masked
patches.`),or=m(),Xo=a("p"),pn=n("The abstract from the paper is the following:"),ar=m(),Ko=a("p"),qa=a("em"),hn=n(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),sr=m(),Yo=a("p"),fn=n("Tips:"),rr=m(),C=a("ul"),k=a("li"),un=n(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Qo=a("a"),gn=n("original model (ViT)"),_n=n(" as well as "),Zo=a("a"),bn=n("Data-efficient Image Transformers (DeiT)"),vn=n(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Mt=a("a"),wn=n("here"),xn=n(` (you can just replace
`),ea=a("a"),$n=n("ViTFeatureExtractor"),yn=n(" by "),ta=a("a"),Tn=n("BeitFeatureExtractor"),Bn=n(` and
`),oa=a("a"),Fn=n("ViTForImageClassification"),En=n(" by "),aa=a("a"),kn=n("BeitForImageClassification"),Mn=n(")."),In=m(),It=a("li"),jn=n(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),jt=a("a"),Pn=n("here"),Cn=n("."),zn=m(),Pt=a("li"),An=n(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),sa=a("a"),qn=n("BeitFeatureExtractor"),Ln=n(" to resize (or rescale) and normalize images for the model."),Sn=m(),me=a("li"),Nn=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),La=a("code"),On=n("microsoft/beit-base-patch16-224"),Dn=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Ct=a("a"),Vn=n("hub"),Wn=n("."),Un=m(),pe=a("li"),Rn=n("The available checkpoints are either (1) pre-trained on "),zt=a("a"),Hn=n("ImageNet-22k"),Jn=n(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),At=a("a"),Gn=n("ImageNet-1k"),Xn=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Kn=m(),N=a("li"),Yn=n(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Sa=a("code"),Qn=n("use_relative_position_bias"),Zn=n(` or the
`),Na=a("code"),ei=n("use_relative_position_bias"),ti=n(" attribute of "),ra=a("a"),oi=n("BeitConfig"),ai=n(" to "),Oa=a("code"),si=n("True"),ri=n(` in order to add
position embeddings.`),nr=m(),U=a("p"),ni=n("This model was contributed by "),qt=a("a"),ii=n("nielsr"),li=n(`. The JAX/FLAX version of this model was
contributed by `),Lt=a("a"),di=n("kamalkraj"),ci=n(". The original code can be found "),St=a("a"),mi=n("here"),pi=n("."),ir=m(),he=a("h2"),Ae=a("a"),Da=a("span"),w(Nt.$$.fragment),hi=m(),Va=a("span"),fi=n("BEiT specific outputs"),lr=m(),fe=a("div"),w(Ot.$$.fragment),ui=m(),Dt=a("p"),gi=n("Class for outputs of "),na=a("a"),_i=n("BeitModel"),bi=n("."),dr=m(),ue=a("div"),w(Vt.$$.fragment),vi=m(),Wt=a("p"),wi=n("Class for outputs of "),ia=a("a"),xi=n("FlaxBeitModel"),$i=n("."),cr=m(),ge=a("h2"),qe=a("a"),Wa=a("span"),w(Ut.$$.fragment),yi=m(),Ua=a("span"),Ti=n("BeitConfig"),mr=m(),Z=a("div"),w(Rt.$$.fragment),Bi=m(),_e=a("p"),Fi=n("This is the configuration class to store the configuration of a "),la=a("a"),Ei=n("BeitModel"),ki=n(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ht=a("a"),Mi=n("microsoft/beit-base-patch16-224-pt22k"),Ii=n(" architecture."),ji=m(),w(Le.$$.fragment),pr=m(),be=a("h2"),Se=a("a"),Ra=a("span"),w(Jt.$$.fragment),Pi=m(),Ha=a("span"),Ci=n("BeitFeatureExtractor"),hr=m(),O=a("div"),w(Gt.$$.fragment),zi=m(),Ja=a("p"),Ai=n("Constructs a BEiT feature extractor."),qi=m(),Xt=a("p"),Li=n("This feature extractor inherits from "),da=a("a"),Si=n("FeatureExtractionMixin"),Ni=n(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Oi=m(),ie=a("div"),w(Kt.$$.fragment),Di=m(),Ga=a("p"),Vi=n("Main method to prepare for the model one or several image(s)."),Wi=m(),w(Ne.$$.fragment),fr=m(),ve=a("h2"),Oe=a("a"),Xa=a("span"),w(Yt.$$.fragment),Ui=m(),Ka=a("span"),Ri=n("BeitModel"),ur=m(),ee=a("div"),w(Qt.$$.fragment),Hi=m(),Zt=a("p"),Ji=n(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),eo=a("a"),Gi=n("torch.nn.Module"),Xi=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ki=m(),R=a("div"),w(to.$$.fragment),Yi=m(),we=a("p"),Qi=n("The "),ca=a("a"),Zi=n("BeitModel"),el=n(" forward method, overrides the "),Ya=a("code"),tl=n("__call__"),ol=n(" special method."),al=m(),w(De.$$.fragment),sl=m(),w(Ve.$$.fragment),gr=m(),xe=a("h2"),We=a("a"),Qa=a("span"),w(oo.$$.fragment),rl=m(),Za=a("span"),nl=n("BeitForMaskedImageModeling"),_r=m(),te=a("div"),w(ao.$$.fragment),il=m(),oe=a("p"),ll=n(`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ma=a("a"),dl=n("AutoModelForMaskedImageModeling"),cl=n(`, so you
will need to use `),pa=a("a"),ml=n("BeitForMaskedImageModeling"),pl=n(` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),so=a("a"),hl=n("torch.nn.Module"),fl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul=m(),H=a("div"),w(ro.$$.fragment),gl=m(),$e=a("p"),_l=n("The "),ha=a("a"),bl=n("BeitForMaskedImageModeling"),vl=n(" forward method, overrides the "),es=a("code"),wl=n("__call__"),xl=n(" special method."),$l=m(),w(Ue.$$.fragment),yl=m(),w(Re.$$.fragment),br=m(),ye=a("h2"),He=a("a"),ts=a("span"),w(no.$$.fragment),Tl=m(),os=a("span"),Bl=n("BeitForImageClassification"),vr=m(),D=a("div"),w(io.$$.fragment),Fl=m(),as=a("p"),El=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),kl=m(),lo=a("p"),Ml=n("This model is a PyTorch "),co=a("a"),Il=n("torch.nn.Module"),jl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pl=m(),J=a("div"),w(mo.$$.fragment),Cl=m(),Te=a("p"),zl=n("The "),fa=a("a"),Al=n("BeitForImageClassification"),ql=n(" forward method, overrides the "),ss=a("code"),Ll=n("__call__"),Sl=n(" special method."),Nl=m(),w(Je.$$.fragment),Ol=m(),w(Ge.$$.fragment),wr=m(),Be=a("h2"),Xe=a("a"),rs=a("span"),w(po.$$.fragment),Dl=m(),ns=a("span"),Vl=n("BeitForSemanticSegmentation"),xr=m(),V=a("div"),w(ho.$$.fragment),Wl=m(),is=a("p"),Ul=n("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Rl=m(),fo=a("p"),Hl=n("This model is a PyTorch "),uo=a("a"),Jl=n("torch.nn.Module"),Gl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xl=m(),G=a("div"),w(go.$$.fragment),Kl=m(),Fe=a("p"),Yl=n("The "),ua=a("a"),Ql=n("BeitForSemanticSegmentation"),Zl=n(" forward method, overrides the "),ls=a("code"),ed=n("__call__"),td=n(" special method."),od=m(),w(Ke.$$.fragment),ad=m(),w(Ye.$$.fragment),$r=m(),Ee=a("h2"),Qe=a("a"),ds=a("span"),w(_o.$$.fragment),sd=m(),cs=a("span"),rd=n("FlaxBeitModel"),yr=m(),M=a("div"),w(bo.$$.fragment),nd=m(),ms=a("p"),id=n("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),ld=m(),vo=a("p"),dd=n("This model inherits from "),ga=a("a"),cd=n("FlaxPreTrainedModel"),md=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pd=m(),wo=a("p"),hd=n("This model is also a Flax Linen "),xo=a("a"),fd=n("flax.linen.Module"),ud=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gd=m(),ps=a("p"),_d=n("Finally, this model supports inherent JAX features such as:"),bd=m(),ae=a("ul"),hs=a("li"),$o=a("a"),vd=n("Just-In-Time (JIT) compilation"),wd=m(),fs=a("li"),yo=a("a"),xd=n("Automatic Differentiation"),$d=m(),us=a("li"),To=a("a"),yd=n("Vectorization"),Td=m(),gs=a("li"),Bo=a("a"),Bd=n("Parallelization"),Fd=m(),X=a("div"),w(Fo.$$.fragment),Ed=m(),ke=a("p"),kd=n("The "),_s=a("code"),Md=n("FlaxBeitPreTrainedModel"),Id=n(" forward method, overrides the "),bs=a("code"),jd=n("__call__"),Pd=n(" special method."),Cd=m(),w(Ze.$$.fragment),zd=m(),w(et.$$.fragment),Tr=m(),Me=a("h2"),tt=a("a"),vs=a("span"),w(Eo.$$.fragment),Ad=m(),ws=a("span"),qd=n("FlaxBeitForMaskedImageModeling"),Br=m(),I=a("div"),w(ko.$$.fragment),Ld=m(),xs=a("p"),Sd=n("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Nd=m(),Mo=a("p"),Od=n("This model inherits from "),_a=a("a"),Dd=n("FlaxPreTrainedModel"),Vd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wd=m(),Io=a("p"),Ud=n("This model is also a Flax Linen "),jo=a("a"),Rd=n("flax.linen.Module"),Hd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jd=m(),$s=a("p"),Gd=n("Finally, this model supports inherent JAX features such as:"),Xd=m(),se=a("ul"),ys=a("li"),Po=a("a"),Kd=n("Just-In-Time (JIT) compilation"),Yd=m(),Ts=a("li"),Co=a("a"),Qd=n("Automatic Differentiation"),Zd=m(),Bs=a("li"),zo=a("a"),ec=n("Vectorization"),tc=m(),Fs=a("li"),Ao=a("a"),oc=n("Parallelization"),ac=m(),A=a("div"),w(qo.$$.fragment),sc=m(),Ie=a("p"),rc=n("The "),Es=a("code"),nc=n("FlaxBeitPreTrainedModel"),ic=n(" forward method, overrides the "),ks=a("code"),lc=n("__call__"),dc=n(" special method."),cc=m(),w(ot.$$.fragment),mc=m(),je=a("p"),pc=n("bool_masked_pos ("),Ms=a("code"),hc=n("numpy.ndarray"),fc=n(" of shape "),Is=a("code"),uc=n("(batch_size, num_patches)"),gc=n(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),_c=m(),w(at.$$.fragment),Fr=m(),Pe=a("h2"),st=a("a"),js=a("span"),w(Lo.$$.fragment),bc=m(),Ps=a("span"),vc=n("FlaxBeitForImageClassification"),Er=m(),j=a("div"),w(So.$$.fragment),wc=m(),Cs=a("p"),xc=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),$c=m(),No=a("p"),yc=n("This model inherits from "),ba=a("a"),Tc=n("FlaxPreTrainedModel"),Bc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fc=m(),Oo=a("p"),Ec=n("This model is also a Flax Linen "),Do=a("a"),kc=n("flax.linen.Module"),Mc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ic=m(),zs=a("p"),jc=n("Finally, this model supports inherent JAX features such as:"),Pc=m(),re=a("ul"),As=a("li"),Vo=a("a"),Cc=n("Just-In-Time (JIT) compilation"),zc=m(),qs=a("li"),Wo=a("a"),Ac=n("Automatic Differentiation"),qc=m(),Ls=a("li"),Uo=a("a"),Lc=n("Vectorization"),Sc=m(),Ss=a("li"),Ro=a("a"),Nc=n("Parallelization"),Oc=m(),K=a("div"),w(Ho.$$.fragment),Dc=m(),Ce=a("p"),Vc=n("The "),Ns=a("code"),Wc=n("FlaxBeitPreTrainedModel"),Uc=n(" forward method, overrides the "),Os=a("code"),Rc=n("__call__"),Hc=n(" special method."),Jc=m(),w(rt.$$.fragment),Gc=m(),w(nt.$$.fragment),this.h()},l(o){const g=ih('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),v=p(o),u=s(o,"H1",{class:!0});var Jo=r(u);f=s(Jo,"A",{id:!0,class:!0,href:!0});var Ds=r(f);b=s(Ds,"SPAN",{});var Vs=r(b);x(l.$$.fragment,Vs),Vs.forEach(t),Ds.forEach(t),h=p(Jo),E=s(Jo,"SPAN",{});var Ws=r(E);tn=i(Ws,"BEiT"),Ws.forEach(t),Jo.forEach(t),er=p(o),ce=s(o,"H2",{class:!0});var Go=r(ce);ze=s(Go,"A",{id:!0,class:!0,href:!0});var Us=r(ze);za=s(Us,"SPAN",{});var Rs=r(za);x(Bt.$$.fragment,Rs),Rs.forEach(t),Us.forEach(t),on=p(Go),Aa=s(Go,"SPAN",{});var Hs=r(Aa);an=i(Hs,"Overview"),Hs.forEach(t),Go.forEach(t),tr=p(o),W=s(o,"P",{});var ne=r(W);sn=i(ne,"The BEiT model was proposed in "),Ft=s(ne,"A",{href:!0,rel:!0});var Js=r(Ft);rn=i(Js,"BEiT: BERT Pre-Training of Image Transformers"),Js.forEach(t),nn=i(ne,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Et=s(ne,"A",{href:!0,rel:!0});var Gs=r(Et);ln=i(Gs,"original ViT paper"),Gs.forEach(t),dn=i(ne,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),kt=s(ne,"A",{href:!0,rel:!0});var Xs=r(kt);cn=i(Xs,"DALL-E model"),Xs.forEach(t),mn=i(ne,` given masked
patches.`),ne.forEach(t),or=p(o),Xo=s(o,"P",{});var Ks=r(Xo);pn=i(Ks,"The abstract from the paper is the following:"),Ks.forEach(t),ar=p(o),Ko=s(o,"P",{});var Ys=r(Ko);qa=s(Ys,"EM",{});var Qs=r(qa);hn=i(Qs,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),Qs.forEach(t),Ys.forEach(t),sr=p(o),Yo=s(o,"P",{});var Zs=r(Yo);fn=i(Zs,"Tips:"),Zs.forEach(t),rr=p(o),C=s(o,"UL",{});var Y=r(C);k=s(Y,"LI",{});var z=r(k);un=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Qo=s(z,"A",{href:!0});var Xc=r(Qo);gn=i(Xc,"original model (ViT)"),Xc.forEach(t),_n=i(z," as well as "),Zo=s(z,"A",{href:!0});var Kc=r(Zo);bn=i(Kc,"Data-efficient Image Transformers (DeiT)"),Kc.forEach(t),vn=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Mt=s(z,"A",{href:!0,rel:!0});var Yc=r(Mt);wn=i(Yc,"here"),Yc.forEach(t),xn=i(z,` (you can just replace
`),ea=s(z,"A",{href:!0});var Qc=r(ea);$n=i(Qc,"ViTFeatureExtractor"),Qc.forEach(t),yn=i(z," by "),ta=s(z,"A",{href:!0});var Zc=r(ta);Tn=i(Zc,"BeitFeatureExtractor"),Zc.forEach(t),Bn=i(z,` and
`),oa=s(z,"A",{href:!0});var em=r(oa);Fn=i(em,"ViTForImageClassification"),em.forEach(t),En=i(z," by "),aa=s(z,"A",{href:!0});var tm=r(aa);kn=i(tm,"BeitForImageClassification"),tm.forEach(t),Mn=i(z,")."),z.forEach(t),In=p(Y),It=s(Y,"LI",{});var Mr=r(It);jn=i(Mr,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),jt=s(Mr,"A",{href:!0,rel:!0});var om=r(jt);Pn=i(om,"here"),om.forEach(t),Cn=i(Mr,"."),Mr.forEach(t),zn=p(Y),Pt=s(Y,"LI",{});var Ir=r(Pt);An=i(Ir,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),sa=s(Ir,"A",{href:!0});var am=r(sa);qn=i(am,"BeitFeatureExtractor"),am.forEach(t),Ln=i(Ir," to resize (or rescale) and normalize images for the model."),Ir.forEach(t),Sn=p(Y),me=s(Y,"LI",{});var va=r(me);Nn=i(va,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),La=s(va,"CODE",{});var sm=r(La);On=i(sm,"microsoft/beit-base-patch16-224"),sm.forEach(t),Dn=i(va,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Ct=s(va,"A",{href:!0,rel:!0});var rm=r(Ct);Vn=i(rm,"hub"),rm.forEach(t),Wn=i(va,"."),va.forEach(t),Un=p(Y),pe=s(Y,"LI",{});var wa=r(pe);Rn=i(wa,"The available checkpoints are either (1) pre-trained on "),zt=s(wa,"A",{href:!0,rel:!0});var nm=r(zt);Hn=i(nm,"ImageNet-22k"),nm.forEach(t),Jn=i(wa,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),At=s(wa,"A",{href:!0,rel:!0});var im=r(At);Gn=i(im,"ImageNet-1k"),im.forEach(t),Xn=i(wa,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),wa.forEach(t),Kn=p(Y),N=s(Y,"LI",{});var le=r(N);Yn=i(le,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Sa=s(le,"CODE",{});var lm=r(Sa);Qn=i(lm,"use_relative_position_bias"),lm.forEach(t),Zn=i(le,` or the
`),Na=s(le,"CODE",{});var dm=r(Na);ei=i(dm,"use_relative_position_bias"),dm.forEach(t),ti=i(le," attribute of "),ra=s(le,"A",{href:!0});var cm=r(ra);oi=i(cm,"BeitConfig"),cm.forEach(t),ai=i(le," to "),Oa=s(le,"CODE",{});var mm=r(Oa);si=i(mm,"True"),mm.forEach(t),ri=i(le,` in order to add
position embeddings.`),le.forEach(t),Y.forEach(t),nr=p(o),U=s(o,"P",{});var it=r(U);ni=i(it,"This model was contributed by "),qt=s(it,"A",{href:!0,rel:!0});var pm=r(qt);ii=i(pm,"nielsr"),pm.forEach(t),li=i(it,`. The JAX/FLAX version of this model was
contributed by `),Lt=s(it,"A",{href:!0,rel:!0});var hm=r(Lt);di=i(hm,"kamalkraj"),hm.forEach(t),ci=i(it,". The original code can be found "),St=s(it,"A",{href:!0,rel:!0});var fm=r(St);mi=i(fm,"here"),fm.forEach(t),pi=i(it,"."),it.forEach(t),ir=p(o),he=s(o,"H2",{class:!0});var jr=r(he);Ae=s(jr,"A",{id:!0,class:!0,href:!0});var um=r(Ae);Da=s(um,"SPAN",{});var gm=r(Da);x(Nt.$$.fragment,gm),gm.forEach(t),um.forEach(t),hi=p(jr),Va=s(jr,"SPAN",{});var _m=r(Va);fi=i(_m,"BEiT specific outputs"),_m.forEach(t),jr.forEach(t),lr=p(o),fe=s(o,"DIV",{class:!0});var Pr=r(fe);x(Ot.$$.fragment,Pr),ui=p(Pr),Dt=s(Pr,"P",{});var Cr=r(Dt);gi=i(Cr,"Class for outputs of "),na=s(Cr,"A",{href:!0});var bm=r(na);_i=i(bm,"BeitModel"),bm.forEach(t),bi=i(Cr,"."),Cr.forEach(t),Pr.forEach(t),dr=p(o),ue=s(o,"DIV",{class:!0});var zr=r(ue);x(Vt.$$.fragment,zr),vi=p(zr),Wt=s(zr,"P",{});var Ar=r(Wt);wi=i(Ar,"Class for outputs of "),ia=s(Ar,"A",{href:!0});var vm=r(ia);xi=i(vm,"FlaxBeitModel"),vm.forEach(t),$i=i(Ar,"."),Ar.forEach(t),zr.forEach(t),cr=p(o),ge=s(o,"H2",{class:!0});var qr=r(ge);qe=s(qr,"A",{id:!0,class:!0,href:!0});var wm=r(qe);Wa=s(wm,"SPAN",{});var xm=r(Wa);x(Ut.$$.fragment,xm),xm.forEach(t),wm.forEach(t),yi=p(qr),Ua=s(qr,"SPAN",{});var $m=r(Ua);Ti=i($m,"BeitConfig"),$m.forEach(t),qr.forEach(t),mr=p(o),Z=s(o,"DIV",{class:!0});var xa=r(Z);x(Rt.$$.fragment,xa),Bi=p(xa),_e=s(xa,"P",{});var $a=r(_e);Fi=i($a,"This is the configuration class to store the configuration of a "),la=s($a,"A",{href:!0});var ym=r(la);Ei=i(ym,"BeitModel"),ym.forEach(t),ki=i($a,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ht=s($a,"A",{href:!0,rel:!0});var Tm=r(Ht);Mi=i(Tm,"microsoft/beit-base-patch16-224-pt22k"),Tm.forEach(t),Ii=i($a," architecture."),$a.forEach(t),ji=p(xa),x(Le.$$.fragment,xa),xa.forEach(t),pr=p(o),be=s(o,"H2",{class:!0});var Lr=r(be);Se=s(Lr,"A",{id:!0,class:!0,href:!0});var Bm=r(Se);Ra=s(Bm,"SPAN",{});var Fm=r(Ra);x(Jt.$$.fragment,Fm),Fm.forEach(t),Bm.forEach(t),Pi=p(Lr),Ha=s(Lr,"SPAN",{});var Em=r(Ha);Ci=i(Em,"BeitFeatureExtractor"),Em.forEach(t),Lr.forEach(t),hr=p(o),O=s(o,"DIV",{class:!0});var lt=r(O);x(Gt.$$.fragment,lt),zi=p(lt),Ja=s(lt,"P",{});var km=r(Ja);Ai=i(km,"Constructs a BEiT feature extractor."),km.forEach(t),qi=p(lt),Xt=s(lt,"P",{});var Sr=r(Xt);Li=i(Sr,"This feature extractor inherits from "),da=s(Sr,"A",{href:!0});var Mm=r(da);Si=i(Mm,"FeatureExtractionMixin"),Mm.forEach(t),Ni=i(Sr,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Sr.forEach(t),Oi=p(lt),ie=s(lt,"DIV",{class:!0});var ya=r(ie);x(Kt.$$.fragment,ya),Di=p(ya),Ga=s(ya,"P",{});var Im=r(Ga);Vi=i(Im,"Main method to prepare for the model one or several image(s)."),Im.forEach(t),Wi=p(ya),x(Ne.$$.fragment,ya),ya.forEach(t),lt.forEach(t),fr=p(o),ve=s(o,"H2",{class:!0});var Nr=r(ve);Oe=s(Nr,"A",{id:!0,class:!0,href:!0});var jm=r(Oe);Xa=s(jm,"SPAN",{});var Pm=r(Xa);x(Yt.$$.fragment,Pm),Pm.forEach(t),jm.forEach(t),Ui=p(Nr),Ka=s(Nr,"SPAN",{});var Cm=r(Ka);Ri=i(Cm,"BeitModel"),Cm.forEach(t),Nr.forEach(t),ur=p(o),ee=s(o,"DIV",{class:!0});var Ta=r(ee);x(Qt.$$.fragment,Ta),Hi=p(Ta),Zt=s(Ta,"P",{});var Or=r(Zt);Ji=i(Or,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),eo=s(Or,"A",{href:!0,rel:!0});var zm=r(eo);Gi=i(zm,"torch.nn.Module"),zm.forEach(t),Xi=i(Or,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Or.forEach(t),Ki=p(Ta),R=s(Ta,"DIV",{class:!0});var dt=r(R);x(to.$$.fragment,dt),Yi=p(dt),we=s(dt,"P",{});var Ba=r(we);Qi=i(Ba,"The "),ca=s(Ba,"A",{href:!0});var Am=r(ca);Zi=i(Am,"BeitModel"),Am.forEach(t),el=i(Ba," forward method, overrides the "),Ya=s(Ba,"CODE",{});var qm=r(Ya);tl=i(qm,"__call__"),qm.forEach(t),ol=i(Ba," special method."),Ba.forEach(t),al=p(dt),x(De.$$.fragment,dt),sl=p(dt),x(Ve.$$.fragment,dt),dt.forEach(t),Ta.forEach(t),gr=p(o),xe=s(o,"H2",{class:!0});var Dr=r(xe);We=s(Dr,"A",{id:!0,class:!0,href:!0});var Lm=r(We);Qa=s(Lm,"SPAN",{});var Sm=r(Qa);x(oo.$$.fragment,Sm),Sm.forEach(t),Lm.forEach(t),rl=p(Dr),Za=s(Dr,"SPAN",{});var Nm=r(Za);nl=i(Nm,"BeitForMaskedImageModeling"),Nm.forEach(t),Dr.forEach(t),_r=p(o),te=s(o,"DIV",{class:!0});var Fa=r(te);x(ao.$$.fragment,Fa),il=p(Fa),oe=s(Fa,"P",{});var ct=r(oe);ll=i(ct,`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ma=s(ct,"A",{href:!0});var Om=r(ma);dl=i(Om,"AutoModelForMaskedImageModeling"),Om.forEach(t),cl=i(ct,`, so you
will need to use `),pa=s(ct,"A",{href:!0});var Dm=r(pa);ml=i(Dm,"BeitForMaskedImageModeling"),Dm.forEach(t),pl=i(ct,` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),so=s(ct,"A",{href:!0,rel:!0});var Vm=r(so);hl=i(Vm,"torch.nn.Module"),Vm.forEach(t),fl=i(ct,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ct.forEach(t),ul=p(Fa),H=s(Fa,"DIV",{class:!0});var mt=r(H);x(ro.$$.fragment,mt),gl=p(mt),$e=s(mt,"P",{});var Ea=r($e);_l=i(Ea,"The "),ha=s(Ea,"A",{href:!0});var Wm=r(ha);bl=i(Wm,"BeitForMaskedImageModeling"),Wm.forEach(t),vl=i(Ea," forward method, overrides the "),es=s(Ea,"CODE",{});var Um=r(es);wl=i(Um,"__call__"),Um.forEach(t),xl=i(Ea," special method."),Ea.forEach(t),$l=p(mt),x(Ue.$$.fragment,mt),yl=p(mt),x(Re.$$.fragment,mt),mt.forEach(t),Fa.forEach(t),br=p(o),ye=s(o,"H2",{class:!0});var Vr=r(ye);He=s(Vr,"A",{id:!0,class:!0,href:!0});var Rm=r(He);ts=s(Rm,"SPAN",{});var Hm=r(ts);x(no.$$.fragment,Hm),Hm.forEach(t),Rm.forEach(t),Tl=p(Vr),os=s(Vr,"SPAN",{});var Jm=r(os);Bl=i(Jm,"BeitForImageClassification"),Jm.forEach(t),Vr.forEach(t),vr=p(o),D=s(o,"DIV",{class:!0});var pt=r(D);x(io.$$.fragment,pt),Fl=p(pt),as=s(pt,"P",{});var Gm=r(as);El=i(Gm,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Gm.forEach(t),kl=p(pt),lo=s(pt,"P",{});var Wr=r(lo);Ml=i(Wr,"This model is a PyTorch "),co=s(Wr,"A",{href:!0,rel:!0});var Xm=r(co);Il=i(Xm,"torch.nn.Module"),Xm.forEach(t),jl=i(Wr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wr.forEach(t),Pl=p(pt),J=s(pt,"DIV",{class:!0});var ht=r(J);x(mo.$$.fragment,ht),Cl=p(ht),Te=s(ht,"P",{});var ka=r(Te);zl=i(ka,"The "),fa=s(ka,"A",{href:!0});var Km=r(fa);Al=i(Km,"BeitForImageClassification"),Km.forEach(t),ql=i(ka," forward method, overrides the "),ss=s(ka,"CODE",{});var Ym=r(ss);Ll=i(Ym,"__call__"),Ym.forEach(t),Sl=i(ka," special method."),ka.forEach(t),Nl=p(ht),x(Je.$$.fragment,ht),Ol=p(ht),x(Ge.$$.fragment,ht),ht.forEach(t),pt.forEach(t),wr=p(o),Be=s(o,"H2",{class:!0});var Ur=r(Be);Xe=s(Ur,"A",{id:!0,class:!0,href:!0});var Qm=r(Xe);rs=s(Qm,"SPAN",{});var Zm=r(rs);x(po.$$.fragment,Zm),Zm.forEach(t),Qm.forEach(t),Dl=p(Ur),ns=s(Ur,"SPAN",{});var ep=r(ns);Vl=i(ep,"BeitForSemanticSegmentation"),ep.forEach(t),Ur.forEach(t),xr=p(o),V=s(o,"DIV",{class:!0});var ft=r(V);x(ho.$$.fragment,ft),Wl=p(ft),is=s(ft,"P",{});var tp=r(is);Ul=i(tp,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),tp.forEach(t),Rl=p(ft),fo=s(ft,"P",{});var Rr=r(fo);Hl=i(Rr,"This model is a PyTorch "),uo=s(Rr,"A",{href:!0,rel:!0});var op=r(uo);Jl=i(op,"torch.nn.Module"),op.forEach(t),Gl=i(Rr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rr.forEach(t),Xl=p(ft),G=s(ft,"DIV",{class:!0});var ut=r(G);x(go.$$.fragment,ut),Kl=p(ut),Fe=s(ut,"P",{});var Ma=r(Fe);Yl=i(Ma,"The "),ua=s(Ma,"A",{href:!0});var ap=r(ua);Ql=i(ap,"BeitForSemanticSegmentation"),ap.forEach(t),Zl=i(Ma," forward method, overrides the "),ls=s(Ma,"CODE",{});var sp=r(ls);ed=i(sp,"__call__"),sp.forEach(t),td=i(Ma," special method."),Ma.forEach(t),od=p(ut),x(Ke.$$.fragment,ut),ad=p(ut),x(Ye.$$.fragment,ut),ut.forEach(t),ft.forEach(t),$r=p(o),Ee=s(o,"H2",{class:!0});var Hr=r(Ee);Qe=s(Hr,"A",{id:!0,class:!0,href:!0});var rp=r(Qe);ds=s(rp,"SPAN",{});var np=r(ds);x(_o.$$.fragment,np),np.forEach(t),rp.forEach(t),sd=p(Hr),cs=s(Hr,"SPAN",{});var ip=r(cs);rd=i(ip,"FlaxBeitModel"),ip.forEach(t),Hr.forEach(t),yr=p(o),M=s(o,"DIV",{class:!0});var q=r(M);x(bo.$$.fragment,q),nd=p(q),ms=s(q,"P",{});var lp=r(ms);id=i(lp,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),lp.forEach(t),ld=p(q),vo=s(q,"P",{});var Jr=r(vo);dd=i(Jr,"This model inherits from "),ga=s(Jr,"A",{href:!0});var dp=r(ga);cd=i(dp,"FlaxPreTrainedModel"),dp.forEach(t),md=i(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jr.forEach(t),pd=p(q),wo=s(q,"P",{});var Gr=r(wo);hd=i(Gr,"This model is also a Flax Linen "),xo=s(Gr,"A",{href:!0,rel:!0});var cp=r(xo);fd=i(cp,"flax.linen.Module"),cp.forEach(t),ud=i(Gr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gr.forEach(t),gd=p(q),ps=s(q,"P",{});var mp=r(ps);_d=i(mp,"Finally, this model supports inherent JAX features such as:"),mp.forEach(t),bd=p(q),ae=s(q,"UL",{});var gt=r(ae);hs=s(gt,"LI",{});var pp=r(hs);$o=s(pp,"A",{href:!0,rel:!0});var hp=r($o);vd=i(hp,"Just-In-Time (JIT) compilation"),hp.forEach(t),pp.forEach(t),wd=p(gt),fs=s(gt,"LI",{});var fp=r(fs);yo=s(fp,"A",{href:!0,rel:!0});var up=r(yo);xd=i(up,"Automatic Differentiation"),up.forEach(t),fp.forEach(t),$d=p(gt),us=s(gt,"LI",{});var gp=r(us);To=s(gp,"A",{href:!0,rel:!0});var _p=r(To);yd=i(_p,"Vectorization"),_p.forEach(t),gp.forEach(t),Td=p(gt),gs=s(gt,"LI",{});var bp=r(gs);Bo=s(bp,"A",{href:!0,rel:!0});var vp=r(Bo);Bd=i(vp,"Parallelization"),vp.forEach(t),bp.forEach(t),gt.forEach(t),Fd=p(q),X=s(q,"DIV",{class:!0});var _t=r(X);x(Fo.$$.fragment,_t),Ed=p(_t),ke=s(_t,"P",{});var Ia=r(ke);kd=i(Ia,"The "),_s=s(Ia,"CODE",{});var wp=r(_s);Md=i(wp,"FlaxBeitPreTrainedModel"),wp.forEach(t),Id=i(Ia," forward method, overrides the "),bs=s(Ia,"CODE",{});var xp=r(bs);jd=i(xp,"__call__"),xp.forEach(t),Pd=i(Ia," special method."),Ia.forEach(t),Cd=p(_t),x(Ze.$$.fragment,_t),zd=p(_t),x(et.$$.fragment,_t),_t.forEach(t),q.forEach(t),Tr=p(o),Me=s(o,"H2",{class:!0});var Xr=r(Me);tt=s(Xr,"A",{id:!0,class:!0,href:!0});var $p=r(tt);vs=s($p,"SPAN",{});var yp=r(vs);x(Eo.$$.fragment,yp),yp.forEach(t),$p.forEach(t),Ad=p(Xr),ws=s(Xr,"SPAN",{});var Tp=r(ws);qd=i(Tp,"FlaxBeitForMaskedImageModeling"),Tp.forEach(t),Xr.forEach(t),Br=p(o),I=s(o,"DIV",{class:!0});var L=r(I);x(ko.$$.fragment,L),Ld=p(L),xs=s(L,"P",{});var Bp=r(xs);Sd=i(Bp,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Bp.forEach(t),Nd=p(L),Mo=s(L,"P",{});var Kr=r(Mo);Od=i(Kr,"This model inherits from "),_a=s(Kr,"A",{href:!0});var Fp=r(_a);Dd=i(Fp,"FlaxPreTrainedModel"),Fp.forEach(t),Vd=i(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kr.forEach(t),Wd=p(L),Io=s(L,"P",{});var Yr=r(Io);Ud=i(Yr,"This model is also a Flax Linen "),jo=s(Yr,"A",{href:!0,rel:!0});var Ep=r(jo);Rd=i(Ep,"flax.linen.Module"),Ep.forEach(t),Hd=i(Yr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yr.forEach(t),Jd=p(L),$s=s(L,"P",{});var kp=r($s);Gd=i(kp,"Finally, this model supports inherent JAX features such as:"),kp.forEach(t),Xd=p(L),se=s(L,"UL",{});var bt=r(se);ys=s(bt,"LI",{});var Mp=r(ys);Po=s(Mp,"A",{href:!0,rel:!0});var Ip=r(Po);Kd=i(Ip,"Just-In-Time (JIT) compilation"),Ip.forEach(t),Mp.forEach(t),Yd=p(bt),Ts=s(bt,"LI",{});var jp=r(Ts);Co=s(jp,"A",{href:!0,rel:!0});var Pp=r(Co);Qd=i(Pp,"Automatic Differentiation"),Pp.forEach(t),jp.forEach(t),Zd=p(bt),Bs=s(bt,"LI",{});var Cp=r(Bs);zo=s(Cp,"A",{href:!0,rel:!0});var zp=r(zo);ec=i(zp,"Vectorization"),zp.forEach(t),Cp.forEach(t),tc=p(bt),Fs=s(bt,"LI",{});var Ap=r(Fs);Ao=s(Ap,"A",{href:!0,rel:!0});var qp=r(Ao);oc=i(qp,"Parallelization"),qp.forEach(t),Ap.forEach(t),bt.forEach(t),ac=p(L),A=s(L,"DIV",{class:!0});var de=r(A);x(qo.$$.fragment,de),sc=p(de),Ie=s(de,"P",{});var ja=r(Ie);rc=i(ja,"The "),Es=s(ja,"CODE",{});var Lp=r(Es);nc=i(Lp,"FlaxBeitPreTrainedModel"),Lp.forEach(t),ic=i(ja," forward method, overrides the "),ks=s(ja,"CODE",{});var Sp=r(ks);lc=i(Sp,"__call__"),Sp.forEach(t),dc=i(ja," special method."),ja.forEach(t),cc=p(de),x(ot.$$.fragment,de),mc=p(de),je=s(de,"P",{});var Pa=r(je);pc=i(Pa,"bool_masked_pos ("),Ms=s(Pa,"CODE",{});var Np=r(Ms);hc=i(Np,"numpy.ndarray"),Np.forEach(t),fc=i(Pa," of shape "),Is=s(Pa,"CODE",{});var Op=r(Is);uc=i(Op,"(batch_size, num_patches)"),Op.forEach(t),gc=i(Pa,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Pa.forEach(t),_c=p(de),x(at.$$.fragment,de),de.forEach(t),L.forEach(t),Fr=p(o),Pe=s(o,"H2",{class:!0});var Qr=r(Pe);st=s(Qr,"A",{id:!0,class:!0,href:!0});var Dp=r(st);js=s(Dp,"SPAN",{});var Vp=r(js);x(Lo.$$.fragment,Vp),Vp.forEach(t),Dp.forEach(t),bc=p(Qr),Ps=s(Qr,"SPAN",{});var Wp=r(Ps);vc=i(Wp,"FlaxBeitForImageClassification"),Wp.forEach(t),Qr.forEach(t),Er=p(o),j=s(o,"DIV",{class:!0});var S=r(j);x(So.$$.fragment,S),wc=p(S),Cs=s(S,"P",{});var Up=r(Cs);xc=i(Up,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Up.forEach(t),$c=p(S),No=s(S,"P",{});var Zr=r(No);yc=i(Zr,"This model inherits from "),ba=s(Zr,"A",{href:!0});var Rp=r(ba);Tc=i(Rp,"FlaxPreTrainedModel"),Rp.forEach(t),Bc=i(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zr.forEach(t),Fc=p(S),Oo=s(S,"P",{});var en=r(Oo);Ec=i(en,"This model is also a Flax Linen "),Do=s(en,"A",{href:!0,rel:!0});var Hp=r(Do);kc=i(Hp,"flax.linen.Module"),Hp.forEach(t),Mc=i(en,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),en.forEach(t),Ic=p(S),zs=s(S,"P",{});var Jp=r(zs);jc=i(Jp,"Finally, this model supports inherent JAX features such as:"),Jp.forEach(t),Pc=p(S),re=s(S,"UL",{});var vt=r(re);As=s(vt,"LI",{});var Gp=r(As);Vo=s(Gp,"A",{href:!0,rel:!0});var Xp=r(Vo);Cc=i(Xp,"Just-In-Time (JIT) compilation"),Xp.forEach(t),Gp.forEach(t),zc=p(vt),qs=s(vt,"LI",{});var Kp=r(qs);Wo=s(Kp,"A",{href:!0,rel:!0});var Yp=r(Wo);Ac=i(Yp,"Automatic Differentiation"),Yp.forEach(t),Kp.forEach(t),qc=p(vt),Ls=s(vt,"LI",{});var Qp=r(Ls);Uo=s(Qp,"A",{href:!0,rel:!0});var Zp=r(Uo);Lc=i(Zp,"Vectorization"),Zp.forEach(t),Qp.forEach(t),Sc=p(vt),Ss=s(vt,"LI",{});var eh=r(Ss);Ro=s(eh,"A",{href:!0,rel:!0});var th=r(Ro);Nc=i(th,"Parallelization"),th.forEach(t),eh.forEach(t),vt.forEach(t),Oc=p(S),K=s(S,"DIV",{class:!0});var wt=r(K);x(Ho.$$.fragment,wt),Dc=p(wt),Ce=s(wt,"P",{});var Ca=r(Ce);Vc=i(Ca,"The "),Ns=s(Ca,"CODE",{});var oh=r(Ns);Wc=i(oh,"FlaxBeitPreTrainedModel"),oh.forEach(t),Uc=i(Ca," forward method, overrides the "),Os=s(Ca,"CODE",{});var ah=r(Os);Rc=i(ah,"__call__"),ah.forEach(t),Hc=i(Ca," special method."),Ca.forEach(t),Jc=p(wt),x(rt.$$.fragment,wt),Gc=p(wt),x(nt.$$.fragment,wt),wt.forEach(t),S.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Fh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(u,"class","relative group"),d(ze,"id","overview"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#overview"),d(ce,"class","relative group"),d(Ft,"href","https://arxiv.org/abs/2106.08254"),d(Ft,"rel","nofollow"),d(Et,"href","https://arxiv.org/abs/2010.11929"),d(Et,"rel","nofollow"),d(kt,"href","https://arxiv.org/abs/2102.12092"),d(kt,"rel","nofollow"),d(Qo,"href","vit"),d(Zo,"href","deit"),d(Mt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(Mt,"rel","nofollow"),d(ea,"href","/docs/transformers/v4.22.1/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(ta,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(oa,"href","/docs/transformers/v4.22.1/en/model_doc/vit#transformers.ViTForImageClassification"),d(aa,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitForImageClassification"),d(jt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(jt,"rel","nofollow"),d(sa,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(Ct,"href","https://huggingface.co/models?search=microsoft/beit"),d(Ct,"rel","nofollow"),d(zt,"href","http://www.image-net.org/"),d(zt,"rel","nofollow"),d(At,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(At,"rel","nofollow"),d(ra,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitConfig"),d(qt,"href","https://huggingface.co/nielsr"),d(qt,"rel","nofollow"),d(Lt,"href","https://huggingface.co/kamalkraj"),d(Lt,"rel","nofollow"),d(St,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(St,"rel","nofollow"),d(Ae,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(he,"class","relative group"),d(na,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitModel"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ia,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.FlaxBeitModel"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qe,"id","transformers.BeitConfig"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.BeitConfig"),d(ge,"class","relative group"),d(la,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitModel"),d(Ht,"href","https://huggingface.co/microsoft/beit-base-patch16-224-pt22k"),d(Ht,"rel","nofollow"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.BeitFeatureExtractor"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.BeitFeatureExtractor"),d(be,"class","relative group"),d(da,"href","/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Oe,"id","transformers.BeitModel"),d(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Oe,"href","#transformers.BeitModel"),d(ve,"class","relative group"),d(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(eo,"rel","nofollow"),d(ca,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitForMaskedImageModeling"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitForMaskedImageModeling"),d(xe,"class","relative group"),d(ma,"href","/docs/transformers/v4.22.1/en/model_doc/auto#transformers.AutoModelForMaskedImageModeling"),d(pa,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(so,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(so,"rel","nofollow"),d(ha,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.BeitForImageClassification"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.BeitForImageClassification"),d(ye,"class","relative group"),d(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(co,"rel","nofollow"),d(fa,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForSemanticSegmentation"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForSemanticSegmentation"),d(Be,"class","relative group"),d(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(uo,"rel","nofollow"),d(ua,"href","/docs/transformers/v4.22.1/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"id","transformers.FlaxBeitModel"),d(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Qe,"href","#transformers.FlaxBeitModel"),d(Ee,"class","relative group"),d(ga,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(xo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(xo,"rel","nofollow"),d($o,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d($o,"rel","nofollow"),d(yo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(yo,"rel","nofollow"),d(To,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(To,"rel","nofollow"),d(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Bo,"rel","nofollow"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(tt,"id","transformers.FlaxBeitForMaskedImageModeling"),d(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(tt,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(Me,"class","relative group"),d(_a,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(jo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(jo,"rel","nofollow"),d(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Po,"rel","nofollow"),d(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Co,"rel","nofollow"),d(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(zo,"rel","nofollow"),d(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ao,"rel","nofollow"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(st,"id","transformers.FlaxBeitForImageClassification"),d(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(st,"href","#transformers.FlaxBeitForImageClassification"),d(Pe,"class","relative group"),d(ba,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Do,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Do,"rel","nofollow"),d(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Vo,"rel","nofollow"),d(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wo,"rel","nofollow"),d(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Uo,"rel","nofollow"),d(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ro,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,u,g),e(u,f),e(f,b),$(l,b,null),e(u,h),e(u,E),e(E,tn),_(o,er,g),_(o,ce,g),e(ce,ze),e(ze,za),$(Bt,za,null),e(ce,on),e(ce,Aa),e(Aa,an),_(o,tr,g),_(o,W,g),e(W,sn),e(W,Ft),e(Ft,rn),e(W,nn),e(W,Et),e(Et,ln),e(W,dn),e(W,kt),e(kt,cn),e(W,mn),_(o,or,g),_(o,Xo,g),e(Xo,pn),_(o,ar,g),_(o,Ko,g),e(Ko,qa),e(qa,hn),_(o,sr,g),_(o,Yo,g),e(Yo,fn),_(o,rr,g),_(o,C,g),e(C,k),e(k,un),e(k,Qo),e(Qo,gn),e(k,_n),e(k,Zo),e(Zo,bn),e(k,vn),e(k,Mt),e(Mt,wn),e(k,xn),e(k,ea),e(ea,$n),e(k,yn),e(k,ta),e(ta,Tn),e(k,Bn),e(k,oa),e(oa,Fn),e(k,En),e(k,aa),e(aa,kn),e(k,Mn),e(C,In),e(C,It),e(It,jn),e(It,jt),e(jt,Pn),e(It,Cn),e(C,zn),e(C,Pt),e(Pt,An),e(Pt,sa),e(sa,qn),e(Pt,Ln),e(C,Sn),e(C,me),e(me,Nn),e(me,La),e(La,On),e(me,Dn),e(me,Ct),e(Ct,Vn),e(me,Wn),e(C,Un),e(C,pe),e(pe,Rn),e(pe,zt),e(zt,Hn),e(pe,Jn),e(pe,At),e(At,Gn),e(pe,Xn),e(C,Kn),e(C,N),e(N,Yn),e(N,Sa),e(Sa,Qn),e(N,Zn),e(N,Na),e(Na,ei),e(N,ti),e(N,ra),e(ra,oi),e(N,ai),e(N,Oa),e(Oa,si),e(N,ri),_(o,nr,g),_(o,U,g),e(U,ni),e(U,qt),e(qt,ii),e(U,li),e(U,Lt),e(Lt,di),e(U,ci),e(U,St),e(St,mi),e(U,pi),_(o,ir,g),_(o,he,g),e(he,Ae),e(Ae,Da),$(Nt,Da,null),e(he,hi),e(he,Va),e(Va,fi),_(o,lr,g),_(o,fe,g),$(Ot,fe,null),e(fe,ui),e(fe,Dt),e(Dt,gi),e(Dt,na),e(na,_i),e(Dt,bi),_(o,dr,g),_(o,ue,g),$(Vt,ue,null),e(ue,vi),e(ue,Wt),e(Wt,wi),e(Wt,ia),e(ia,xi),e(Wt,$i),_(o,cr,g),_(o,ge,g),e(ge,qe),e(qe,Wa),$(Ut,Wa,null),e(ge,yi),e(ge,Ua),e(Ua,Ti),_(o,mr,g),_(o,Z,g),$(Rt,Z,null),e(Z,Bi),e(Z,_e),e(_e,Fi),e(_e,la),e(la,Ei),e(_e,ki),e(_e,Ht),e(Ht,Mi),e(_e,Ii),e(Z,ji),$(Le,Z,null),_(o,pr,g),_(o,be,g),e(be,Se),e(Se,Ra),$(Jt,Ra,null),e(be,Pi),e(be,Ha),e(Ha,Ci),_(o,hr,g),_(o,O,g),$(Gt,O,null),e(O,zi),e(O,Ja),e(Ja,Ai),e(O,qi),e(O,Xt),e(Xt,Li),e(Xt,da),e(da,Si),e(Xt,Ni),e(O,Oi),e(O,ie),$(Kt,ie,null),e(ie,Di),e(ie,Ga),e(Ga,Vi),e(ie,Wi),$(Ne,ie,null),_(o,fr,g),_(o,ve,g),e(ve,Oe),e(Oe,Xa),$(Yt,Xa,null),e(ve,Ui),e(ve,Ka),e(Ka,Ri),_(o,ur,g),_(o,ee,g),$(Qt,ee,null),e(ee,Hi),e(ee,Zt),e(Zt,Ji),e(Zt,eo),e(eo,Gi),e(Zt,Xi),e(ee,Ki),e(ee,R),$(to,R,null),e(R,Yi),e(R,we),e(we,Qi),e(we,ca),e(ca,Zi),e(we,el),e(we,Ya),e(Ya,tl),e(we,ol),e(R,al),$(De,R,null),e(R,sl),$(Ve,R,null),_(o,gr,g),_(o,xe,g),e(xe,We),e(We,Qa),$(oo,Qa,null),e(xe,rl),e(xe,Za),e(Za,nl),_(o,_r,g),_(o,te,g),$(ao,te,null),e(te,il),e(te,oe),e(oe,ll),e(oe,ma),e(ma,dl),e(oe,cl),e(oe,pa),e(pa,ml),e(oe,pl),e(oe,so),e(so,hl),e(oe,fl),e(te,ul),e(te,H),$(ro,H,null),e(H,gl),e(H,$e),e($e,_l),e($e,ha),e(ha,bl),e($e,vl),e($e,es),e(es,wl),e($e,xl),e(H,$l),$(Ue,H,null),e(H,yl),$(Re,H,null),_(o,br,g),_(o,ye,g),e(ye,He),e(He,ts),$(no,ts,null),e(ye,Tl),e(ye,os),e(os,Bl),_(o,vr,g),_(o,D,g),$(io,D,null),e(D,Fl),e(D,as),e(as,El),e(D,kl),e(D,lo),e(lo,Ml),e(lo,co),e(co,Il),e(lo,jl),e(D,Pl),e(D,J),$(mo,J,null),e(J,Cl),e(J,Te),e(Te,zl),e(Te,fa),e(fa,Al),e(Te,ql),e(Te,ss),e(ss,Ll),e(Te,Sl),e(J,Nl),$(Je,J,null),e(J,Ol),$(Ge,J,null),_(o,wr,g),_(o,Be,g),e(Be,Xe),e(Xe,rs),$(po,rs,null),e(Be,Dl),e(Be,ns),e(ns,Vl),_(o,xr,g),_(o,V,g),$(ho,V,null),e(V,Wl),e(V,is),e(is,Ul),e(V,Rl),e(V,fo),e(fo,Hl),e(fo,uo),e(uo,Jl),e(fo,Gl),e(V,Xl),e(V,G),$(go,G,null),e(G,Kl),e(G,Fe),e(Fe,Yl),e(Fe,ua),e(ua,Ql),e(Fe,Zl),e(Fe,ls),e(ls,ed),e(Fe,td),e(G,od),$(Ke,G,null),e(G,ad),$(Ye,G,null),_(o,$r,g),_(o,Ee,g),e(Ee,Qe),e(Qe,ds),$(_o,ds,null),e(Ee,sd),e(Ee,cs),e(cs,rd),_(o,yr,g),_(o,M,g),$(bo,M,null),e(M,nd),e(M,ms),e(ms,id),e(M,ld),e(M,vo),e(vo,dd),e(vo,ga),e(ga,cd),e(vo,md),e(M,pd),e(M,wo),e(wo,hd),e(wo,xo),e(xo,fd),e(wo,ud),e(M,gd),e(M,ps),e(ps,_d),e(M,bd),e(M,ae),e(ae,hs),e(hs,$o),e($o,vd),e(ae,wd),e(ae,fs),e(fs,yo),e(yo,xd),e(ae,$d),e(ae,us),e(us,To),e(To,yd),e(ae,Td),e(ae,gs),e(gs,Bo),e(Bo,Bd),e(M,Fd),e(M,X),$(Fo,X,null),e(X,Ed),e(X,ke),e(ke,kd),e(ke,_s),e(_s,Md),e(ke,Id),e(ke,bs),e(bs,jd),e(ke,Pd),e(X,Cd),$(Ze,X,null),e(X,zd),$(et,X,null),_(o,Tr,g),_(o,Me,g),e(Me,tt),e(tt,vs),$(Eo,vs,null),e(Me,Ad),e(Me,ws),e(ws,qd),_(o,Br,g),_(o,I,g),$(ko,I,null),e(I,Ld),e(I,xs),e(xs,Sd),e(I,Nd),e(I,Mo),e(Mo,Od),e(Mo,_a),e(_a,Dd),e(Mo,Vd),e(I,Wd),e(I,Io),e(Io,Ud),e(Io,jo),e(jo,Rd),e(Io,Hd),e(I,Jd),e(I,$s),e($s,Gd),e(I,Xd),e(I,se),e(se,ys),e(ys,Po),e(Po,Kd),e(se,Yd),e(se,Ts),e(Ts,Co),e(Co,Qd),e(se,Zd),e(se,Bs),e(Bs,zo),e(zo,ec),e(se,tc),e(se,Fs),e(Fs,Ao),e(Ao,oc),e(I,ac),e(I,A),$(qo,A,null),e(A,sc),e(A,Ie),e(Ie,rc),e(Ie,Es),e(Es,nc),e(Ie,ic),e(Ie,ks),e(ks,lc),e(Ie,dc),e(A,cc),$(ot,A,null),e(A,mc),e(A,je),e(je,pc),e(je,Ms),e(Ms,hc),e(je,fc),e(je,Is),e(Is,uc),e(je,gc),e(A,_c),$(at,A,null),_(o,Fr,g),_(o,Pe,g),e(Pe,st),e(st,js),$(Lo,js,null),e(Pe,bc),e(Pe,Ps),e(Ps,vc),_(o,Er,g),_(o,j,g),$(So,j,null),e(j,wc),e(j,Cs),e(Cs,xc),e(j,$c),e(j,No),e(No,yc),e(No,ba),e(ba,Tc),e(No,Bc),e(j,Fc),e(j,Oo),e(Oo,Ec),e(Oo,Do),e(Do,kc),e(Oo,Mc),e(j,Ic),e(j,zs),e(zs,jc),e(j,Pc),e(j,re),e(re,As),e(As,Vo),e(Vo,Cc),e(re,zc),e(re,qs),e(qs,Wo),e(Wo,Ac),e(re,qc),e(re,Ls),e(Ls,Uo),e(Uo,Lc),e(re,Sc),e(re,Ss),e(Ss,Ro),e(Ro,Nc),e(j,Oc),e(j,K),$(Ho,K,null),e(K,Dc),e(K,Ce),e(Ce,Vc),e(Ce,Ns),e(Ns,Wc),e(Ce,Uc),e(Ce,Os),e(Os,Rc),e(Ce,Hc),e(K,Jc),$(rt,K,null),e(K,Gc),$(nt,K,null),kr=!0},p(o,[g]){const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:o}),Le.$set(Jo);const Ds={};g&2&&(Ds.$$scope={dirty:g,ctx:o}),Ne.$set(Ds);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:o}),De.$set(Vs);const Ws={};g&2&&(Ws.$$scope={dirty:g,ctx:o}),Ve.$set(Ws);const Go={};g&2&&(Go.$$scope={dirty:g,ctx:o}),Ue.$set(Go);const Us={};g&2&&(Us.$$scope={dirty:g,ctx:o}),Re.$set(Us);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:o}),Je.$set(Rs);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:o}),Ge.$set(Hs);const ne={};g&2&&(ne.$$scope={dirty:g,ctx:o}),Ke.$set(ne);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:o}),Ye.$set(Js);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:o}),Ze.$set(Gs);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:o}),et.$set(Xs);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:o}),ot.$set(Ks);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:o}),at.$set(Ys);const Qs={};g&2&&(Qs.$$scope={dirty:g,ctx:o}),rt.$set(Qs);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:o}),nt.$set(Zs)},i(o){kr||(y(l.$$.fragment,o),y(Bt.$$.fragment,o),y(Nt.$$.fragment,o),y(Ot.$$.fragment,o),y(Vt.$$.fragment,o),y(Ut.$$.fragment,o),y(Rt.$$.fragment,o),y(Le.$$.fragment,o),y(Jt.$$.fragment,o),y(Gt.$$.fragment,o),y(Kt.$$.fragment,o),y(Ne.$$.fragment,o),y(Yt.$$.fragment,o),y(Qt.$$.fragment,o),y(to.$$.fragment,o),y(De.$$.fragment,o),y(Ve.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(Ue.$$.fragment,o),y(Re.$$.fragment,o),y(no.$$.fragment,o),y(io.$$.fragment,o),y(mo.$$.fragment,o),y(Je.$$.fragment,o),y(Ge.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(go.$$.fragment,o),y(Ke.$$.fragment,o),y(Ye.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(Fo.$$.fragment,o),y(Ze.$$.fragment,o),y(et.$$.fragment,o),y(Eo.$$.fragment,o),y(ko.$$.fragment,o),y(qo.$$.fragment,o),y(ot.$$.fragment,o),y(at.$$.fragment,o),y(Lo.$$.fragment,o),y(So.$$.fragment,o),y(Ho.$$.fragment,o),y(rt.$$.fragment,o),y(nt.$$.fragment,o),kr=!0)},o(o){T(l.$$.fragment,o),T(Bt.$$.fragment,o),T(Nt.$$.fragment,o),T(Ot.$$.fragment,o),T(Vt.$$.fragment,o),T(Ut.$$.fragment,o),T(Rt.$$.fragment,o),T(Le.$$.fragment,o),T(Jt.$$.fragment,o),T(Gt.$$.fragment,o),T(Kt.$$.fragment,o),T(Ne.$$.fragment,o),T(Yt.$$.fragment,o),T(Qt.$$.fragment,o),T(to.$$.fragment,o),T(De.$$.fragment,o),T(Ve.$$.fragment,o),T(oo.$$.fragment,o),T(ao.$$.fragment,o),T(ro.$$.fragment,o),T(Ue.$$.fragment,o),T(Re.$$.fragment,o),T(no.$$.fragment,o),T(io.$$.fragment,o),T(mo.$$.fragment,o),T(Je.$$.fragment,o),T(Ge.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(go.$$.fragment,o),T(Ke.$$.fragment,o),T(Ye.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(Fo.$$.fragment,o),T(Ze.$$.fragment,o),T(et.$$.fragment,o),T(Eo.$$.fragment,o),T(ko.$$.fragment,o),T(qo.$$.fragment,o),T(ot.$$.fragment,o),T(at.$$.fragment,o),T(Lo.$$.fragment,o),T(So.$$.fragment,o),T(Ho.$$.fragment,o),T(rt.$$.fragment,o),T(nt.$$.fragment,o),kr=!1},d(o){t(c),o&&t(v),o&&t(u),B(l),o&&t(er),o&&t(ce),B(Bt),o&&t(tr),o&&t(W),o&&t(or),o&&t(Xo),o&&t(ar),o&&t(Ko),o&&t(sr),o&&t(Yo),o&&t(rr),o&&t(C),o&&t(nr),o&&t(U),o&&t(ir),o&&t(he),B(Nt),o&&t(lr),o&&t(fe),B(Ot),o&&t(dr),o&&t(ue),B(Vt),o&&t(cr),o&&t(ge),B(Ut),o&&t(mr),o&&t(Z),B(Rt),B(Le),o&&t(pr),o&&t(be),B(Jt),o&&t(hr),o&&t(O),B(Gt),B(Kt),B(Ne),o&&t(fr),o&&t(ve),B(Yt),o&&t(ur),o&&t(ee),B(Qt),B(to),B(De),B(Ve),o&&t(gr),o&&t(xe),B(oo),o&&t(_r),o&&t(te),B(ao),B(ro),B(Ue),B(Re),o&&t(br),o&&t(ye),B(no),o&&t(vr),o&&t(D),B(io),B(mo),B(Je),B(Ge),o&&t(wr),o&&t(Be),B(po),o&&t(xr),o&&t(V),B(ho),B(go),B(Ke),B(Ye),o&&t($r),o&&t(Ee),B(_o),o&&t(yr),o&&t(M),B(bo),B(Fo),B(Ze),B(et),o&&t(Tr),o&&t(Me),B(Eo),o&&t(Br),o&&t(I),B(ko),B(qo),B(ot),B(at),o&&t(Fr),o&&t(Pe),B(Lo),o&&t(Er),o&&t(j),B(So),B(Ho),B(rt),B(nt)}}}const Fh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function Eh(F){return lh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zh extends sh{constructor(c){super();rh(this,c,Eh,Bh,nh,{})}}export{zh as default,Fh as metadata};
