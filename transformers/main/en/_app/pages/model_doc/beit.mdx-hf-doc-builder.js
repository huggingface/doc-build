import{S as fh,i as uh,s as gh,e as a,k as m,w,t as r,M as _h,c as n,d as t,m as p,a as s,x,h as i,b as d,N as bh,G as e,g as _,y as $,q as y,o as T,B,v as vh,L as Tt}from"../../chunks/vendor-hf-doc-builder.js";import{T as $t}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Bt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as yt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wh(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import BeitModel, BeitConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function xh(F){let c,v;return{c(){c=a("p"),v=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(g){c=n(g,"P",{});var f=s(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(g,f){_(g,c,f),e(c,v)},d(g){g&&t(c)}}}function $h(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function yh(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import BeitFeatureExtractor, BeitModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Th(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Bh(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Fh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Eh(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import BeitFeatureExtractor, BeitForImageClassification
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
tabby, tabby cat`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function kh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Mh(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import AutoFeatureExtractor, BeitForSemanticSegmentation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Ih(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function jh(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Ph(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Ch(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function zh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Ah(F){let c,v,g,f,b;return f=new Bt({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Tt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function qh(F){let c,v,g,f,b,l,h,E,ir,ns,ce,ze,La,Ft,lr,Sa,dr,ss,W,cr,Et,mr,pr,kt,hr,fr,Mt,ur,gr,rs,Yo,_r,is,Qo,Na,br,ls,Zo,vr,ds,C,k,wr,ea,xr,$r,ta,yr,Tr,It,Br,Fr,oa,Er,kr,aa,Mr,Ir,na,jr,Pr,sa,Cr,zr,Ar,jt,qr,Pt,Lr,Sr,Nr,Ct,Or,ra,Dr,Vr,Wr,me,Ur,Oa,Rr,Hr,zt,Jr,Gr,Xr,pe,Kr,At,Yr,Qr,qt,Zr,ei,ti,N,oi,Da,ai,ni,Va,si,ri,ia,ii,li,Wa,di,ci,cs,Ae,am,ms,Lt,mi,la,pi,ps,U,hi,St,fi,ui,Nt,gi,_i,Ot,bi,vi,hs,he,qe,Ua,Dt,wi,Ra,xi,fs,fe,Vt,$i,Wt,yi,da,Ti,Bi,us,ue,Ut,Fi,Rt,Ei,ca,ki,Mi,gs,ge,Le,Ha,Ht,Ii,Ja,ji,_s,Z,Jt,Pi,_e,Ci,ma,zi,Ai,Gt,qi,Li,Si,Se,bs,be,Ne,Ga,Xt,Ni,Xa,Oi,vs,O,Kt,Di,Ka,Vi,Wi,Yt,Ui,pa,Ri,Hi,Ji,ie,Qt,Gi,Ya,Xi,Ki,Oe,ws,ve,De,Qa,Zt,Yi,Za,Qi,xs,ee,eo,Zi,to,el,oo,tl,ol,al,R,ao,nl,we,sl,ha,rl,il,en,ll,dl,cl,Ve,ml,We,$s,xe,Ue,tn,no,pl,on,hl,ys,te,so,fl,oe,ul,fa,gl,_l,ua,bl,vl,ro,wl,xl,$l,H,io,yl,$e,Tl,ga,Bl,Fl,an,El,kl,Ml,Re,Il,He,Ts,ye,Je,nn,lo,jl,sn,Pl,Bs,D,co,Cl,rn,zl,Al,mo,ql,po,Ll,Sl,Nl,J,ho,Ol,Te,Dl,_a,Vl,Wl,ln,Ul,Rl,Hl,Ge,Jl,Xe,Fs,Be,Ke,dn,fo,Gl,cn,Xl,Es,V,uo,Kl,mn,Yl,Ql,go,Zl,_o,ed,td,od,G,bo,ad,Fe,nd,ba,sd,rd,pn,id,ld,dd,Ye,cd,Qe,ks,Ee,Ze,hn,vo,md,fn,pd,Ms,M,wo,hd,un,fd,ud,xo,gd,va,_d,bd,vd,$o,wd,yo,xd,$d,yd,gn,Td,Bd,ae,_n,To,Fd,Ed,bn,Bo,kd,Md,vn,Fo,Id,jd,wn,Eo,Pd,Cd,X,ko,zd,ke,Ad,xn,qd,Ld,$n,Sd,Nd,Od,et,Dd,tt,Is,Me,ot,yn,Mo,Vd,Tn,Wd,js,I,Io,Ud,Bn,Rd,Hd,jo,Jd,wa,Gd,Xd,Kd,Po,Yd,Co,Qd,Zd,ec,Fn,tc,oc,ne,En,zo,ac,nc,kn,Ao,sc,rc,Mn,qo,ic,lc,In,Lo,dc,cc,A,So,mc,Ie,pc,jn,hc,fc,Pn,uc,gc,_c,at,bc,je,vc,Cn,wc,xc,zn,$c,yc,Tc,nt,Ps,Pe,st,An,No,Bc,qn,Fc,Cs,j,Oo,Ec,Ln,kc,Mc,Do,Ic,xa,jc,Pc,Cc,Vo,zc,Wo,Ac,qc,Lc,Sn,Sc,Nc,se,Nn,Uo,Oc,Dc,On,Ro,Vc,Wc,Dn,Ho,Uc,Rc,Vn,Jo,Hc,Jc,K,Go,Gc,Ce,Xc,Wn,Kc,Yc,Un,Qc,Zc,em,rt,tm,it,zs;return l=new Q({}),Ft=new Q({}),Dt=new Q({}),Vt=new P({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L69"}}),Ut=new P({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L46"}}),Ht=new Q({}),Jt=new P({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
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
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/configuration_beit.py#L36"}}),Se=new yt({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[wh]},$$scope:{ctx:F}}}),Xt=new Q({}),Kt=new P({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/feature_extraction_beit.py#L36"}}),Qt=new P({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),Oe=new $t({props:{warning:!0,$$slots:{default:[xh]},$$scope:{ctx:F}}}),Zt=new Q({}),eo=new P({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L620"}}),ao=new P({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L647",returnDescription:`
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
`}}),Ve=new $t({props:{$$slots:{default:[$h]},$$scope:{ctx:F}}}),We=new yt({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[yh]},$$scope:{ctx:F}}}),no=new Q({}),so=new P({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L732"}}),io=new P({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L746",returnDescription:`
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
`}}),Re=new $t({props:{$$slots:{default:[Th]},$$scope:{ctx:F}}}),He=new yt({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[Bh]},$$scope:{ctx:F}}}),lo=new Q({}),co=new P({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L832"}}),ho=new P({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L845",returnDescription:`
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
`}}),Ge=new $t({props:{$$slots:{default:[Fh]},$$scope:{ctx:F}}}),Xe=new yt({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[Eh]},$$scope:{ctx:F}}}),fo=new Q({}),uo=new P({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L1156"}}),bo=new P({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L1200",returnDescription:`
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
`}}),Ye=new $t({props:{$$slots:{default:[kh]},$$scope:{ctx:F}}}),Qe=new yt({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[Mh]},$$scope:{ctx:F}}}),vo=new Q({}),wo=new P({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L749"}}),ko=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
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
`}}),et=new $t({props:{$$slots:{default:[Ih]},$$scope:{ctx:F}}}),tt=new yt({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[jh]},$$scope:{ctx:F}}}),Mo=new Q({}),Io=new P({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L833"}}),So=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
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
`}}),at=new $t({props:{$$slots:{default:[Ph]},$$scope:{ctx:F}}}),nt=new yt({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[Ch]},$$scope:{ctx:F}}}),No=new Q({}),Oo=new P({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L920"}}),Go=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
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
`}}),rt=new $t({props:{$$slots:{default:[zh]},$$scope:{ctx:F}}}),it=new yt({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[Ah]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=m(),g=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=m(),E=a("span"),ir=r("BEiT"),ns=m(),ce=a("h2"),ze=a("a"),La=a("span"),w(Ft.$$.fragment),lr=m(),Sa=a("span"),dr=r("Overview"),ss=m(),W=a("p"),cr=r("The BEiT model was proposed in "),Et=a("a"),mr=r("BEiT: BERT Pre-Training of Image Transformers"),pr=r(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),kt=a("a"),hr=r("original ViT paper"),fr=r(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Mt=a("a"),ur=r("DALL-E model"),gr=r(` given masked
patches.`),rs=m(),Yo=a("p"),_r=r("The abstract from the paper is the following:"),is=m(),Qo=a("p"),Na=a("em"),br=r(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),ls=m(),Zo=a("p"),vr=r("Tips:"),ds=m(),C=a("ul"),k=a("li"),wr=r(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),ea=a("a"),xr=r("original model (ViT)"),$r=r(" as well as "),ta=a("a"),yr=r("Data-efficient Image Transformers (DeiT)"),Tr=r(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),It=a("a"),Br=r("here"),Fr=r(` (you can just replace
`),oa=a("a"),Er=r("ViTFeatureExtractor"),kr=r(" by "),aa=a("a"),Mr=r("BeitFeatureExtractor"),Ir=r(` and
`),na=a("a"),jr=r("ViTForImageClassification"),Pr=r(" by "),sa=a("a"),Cr=r("BeitForImageClassification"),zr=r(")."),Ar=m(),jt=a("li"),qr=r(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Pt=a("a"),Lr=r("here"),Sr=r("."),Nr=m(),Ct=a("li"),Or=r(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),ra=a("a"),Dr=r("BeitFeatureExtractor"),Vr=r(" to resize (or rescale) and normalize images for the model."),Wr=m(),me=a("li"),Ur=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Oa=a("code"),Rr=r("microsoft/beit-base-patch16-224"),Hr=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),zt=a("a"),Jr=r("hub"),Gr=r("."),Xr=m(),pe=a("li"),Kr=r("The available checkpoints are either (1) pre-trained on "),At=a("a"),Yr=r("ImageNet-22k"),Qr=r(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),qt=a("a"),Zr=r("ImageNet-1k"),ei=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),ti=m(),N=a("li"),oi=r(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Da=a("code"),ai=r("use_relative_position_bias"),ni=r(` or the
`),Va=a("code"),si=r("use_relative_position_bias"),ri=r(" attribute of "),ia=a("a"),ii=r("BeitConfig"),li=r(" to "),Wa=a("code"),di=r("True"),ci=r(` in order to add
position embeddings.`),cs=m(),Ae=a("img"),ms=m(),Lt=a("small"),mi=r("BEiT pre-training. Taken from the "),la=a("a"),pi=r("original paper."),ps=m(),U=a("p"),hi=r("This model was contributed by "),St=a("a"),fi=r("nielsr"),ui=r(`. The JAX/FLAX version of this model was
contributed by `),Nt=a("a"),gi=r("kamalkraj"),_i=r(". The original code can be found "),Ot=a("a"),bi=r("here"),vi=r("."),hs=m(),he=a("h2"),qe=a("a"),Ua=a("span"),w(Dt.$$.fragment),wi=m(),Ra=a("span"),xi=r("BEiT specific outputs"),fs=m(),fe=a("div"),w(Vt.$$.fragment),$i=m(),Wt=a("p"),yi=r("Class for outputs of "),da=a("a"),Ti=r("BeitModel"),Bi=r("."),us=m(),ue=a("div"),w(Ut.$$.fragment),Fi=m(),Rt=a("p"),Ei=r("Class for outputs of "),ca=a("a"),ki=r("FlaxBeitModel"),Mi=r("."),gs=m(),ge=a("h2"),Le=a("a"),Ha=a("span"),w(Ht.$$.fragment),Ii=m(),Ja=a("span"),ji=r("BeitConfig"),_s=m(),Z=a("div"),w(Jt.$$.fragment),Pi=m(),_e=a("p"),Ci=r("This is the configuration class to store the configuration of a "),ma=a("a"),zi=r("BeitModel"),Ai=r(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Gt=a("a"),qi=r("microsoft/beit-base-patch16-224-pt22k"),Li=r(" architecture."),Si=m(),w(Se.$$.fragment),bs=m(),be=a("h2"),Ne=a("a"),Ga=a("span"),w(Xt.$$.fragment),Ni=m(),Xa=a("span"),Oi=r("BeitFeatureExtractor"),vs=m(),O=a("div"),w(Kt.$$.fragment),Di=m(),Ka=a("p"),Vi=r("Constructs a BEiT feature extractor."),Wi=m(),Yt=a("p"),Ui=r("This feature extractor inherits from "),pa=a("a"),Ri=r("FeatureExtractionMixin"),Hi=r(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Ji=m(),ie=a("div"),w(Qt.$$.fragment),Gi=m(),Ya=a("p"),Xi=r("Main method to prepare for the model one or several image(s)."),Ki=m(),w(Oe.$$.fragment),ws=m(),ve=a("h2"),De=a("a"),Qa=a("span"),w(Zt.$$.fragment),Yi=m(),Za=a("span"),Qi=r("BeitModel"),xs=m(),ee=a("div"),w(eo.$$.fragment),Zi=m(),to=a("p"),el=r(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),oo=a("a"),tl=r("torch.nn.Module"),ol=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),al=m(),R=a("div"),w(ao.$$.fragment),nl=m(),we=a("p"),sl=r("The "),ha=a("a"),rl=r("BeitModel"),il=r(" forward method, overrides the "),en=a("code"),ll=r("__call__"),dl=r(" special method."),cl=m(),w(Ve.$$.fragment),ml=m(),w(We.$$.fragment),$s=m(),xe=a("h2"),Ue=a("a"),tn=a("span"),w(no.$$.fragment),pl=m(),on=a("span"),hl=r("BeitForMaskedImageModeling"),ys=m(),te=a("div"),w(so.$$.fragment),fl=m(),oe=a("p"),ul=r(`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),fa=a("a"),gl=r("AutoModelForMaskedImageModeling"),_l=r(`, so you
will need to use `),ua=a("a"),bl=r("BeitForMaskedImageModeling"),vl=r(` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),ro=a("a"),wl=r("torch.nn.Module"),xl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$l=m(),H=a("div"),w(io.$$.fragment),yl=m(),$e=a("p"),Tl=r("The "),ga=a("a"),Bl=r("BeitForMaskedImageModeling"),Fl=r(" forward method, overrides the "),an=a("code"),El=r("__call__"),kl=r(" special method."),Ml=m(),w(Re.$$.fragment),Il=m(),w(He.$$.fragment),Ts=m(),ye=a("h2"),Je=a("a"),nn=a("span"),w(lo.$$.fragment),jl=m(),sn=a("span"),Pl=r("BeitForImageClassification"),Bs=m(),D=a("div"),w(co.$$.fragment),Cl=m(),rn=a("p"),zl=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Al=m(),mo=a("p"),ql=r("This model is a PyTorch "),po=a("a"),Ll=r("torch.nn.Module"),Sl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nl=m(),J=a("div"),w(ho.$$.fragment),Ol=m(),Te=a("p"),Dl=r("The "),_a=a("a"),Vl=r("BeitForImageClassification"),Wl=r(" forward method, overrides the "),ln=a("code"),Ul=r("__call__"),Rl=r(" special method."),Hl=m(),w(Ge.$$.fragment),Jl=m(),w(Xe.$$.fragment),Fs=m(),Be=a("h2"),Ke=a("a"),dn=a("span"),w(fo.$$.fragment),Gl=m(),cn=a("span"),Xl=r("BeitForSemanticSegmentation"),Es=m(),V=a("div"),w(uo.$$.fragment),Kl=m(),mn=a("p"),Yl=r("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Ql=m(),go=a("p"),Zl=r("This model is a PyTorch "),_o=a("a"),ed=r("torch.nn.Module"),td=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),od=m(),G=a("div"),w(bo.$$.fragment),ad=m(),Fe=a("p"),nd=r("The "),ba=a("a"),sd=r("BeitForSemanticSegmentation"),rd=r(" forward method, overrides the "),pn=a("code"),id=r("__call__"),ld=r(" special method."),dd=m(),w(Ye.$$.fragment),cd=m(),w(Qe.$$.fragment),ks=m(),Ee=a("h2"),Ze=a("a"),hn=a("span"),w(vo.$$.fragment),md=m(),fn=a("span"),pd=r("FlaxBeitModel"),Ms=m(),M=a("div"),w(wo.$$.fragment),hd=m(),un=a("p"),fd=r("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),ud=m(),xo=a("p"),gd=r("This model inherits from "),va=a("a"),_d=r("FlaxPreTrainedModel"),bd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vd=m(),$o=a("p"),wd=r("This model is also a Flax Linen "),yo=a("a"),xd=r("flax.linen.Module"),$d=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yd=m(),gn=a("p"),Td=r("Finally, this model supports inherent JAX features such as:"),Bd=m(),ae=a("ul"),_n=a("li"),To=a("a"),Fd=r("Just-In-Time (JIT) compilation"),Ed=m(),bn=a("li"),Bo=a("a"),kd=r("Automatic Differentiation"),Md=m(),vn=a("li"),Fo=a("a"),Id=r("Vectorization"),jd=m(),wn=a("li"),Eo=a("a"),Pd=r("Parallelization"),Cd=m(),X=a("div"),w(ko.$$.fragment),zd=m(),ke=a("p"),Ad=r("The "),xn=a("code"),qd=r("FlaxBeitPreTrainedModel"),Ld=r(" forward method, overrides the "),$n=a("code"),Sd=r("__call__"),Nd=r(" special method."),Od=m(),w(et.$$.fragment),Dd=m(),w(tt.$$.fragment),Is=m(),Me=a("h2"),ot=a("a"),yn=a("span"),w(Mo.$$.fragment),Vd=m(),Tn=a("span"),Wd=r("FlaxBeitForMaskedImageModeling"),js=m(),I=a("div"),w(Io.$$.fragment),Ud=m(),Bn=a("p"),Rd=r("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Hd=m(),jo=a("p"),Jd=r("This model inherits from "),wa=a("a"),Gd=r("FlaxPreTrainedModel"),Xd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kd=m(),Po=a("p"),Yd=r("This model is also a Flax Linen "),Co=a("a"),Qd=r("flax.linen.Module"),Zd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ec=m(),Fn=a("p"),tc=r("Finally, this model supports inherent JAX features such as:"),oc=m(),ne=a("ul"),En=a("li"),zo=a("a"),ac=r("Just-In-Time (JIT) compilation"),nc=m(),kn=a("li"),Ao=a("a"),sc=r("Automatic Differentiation"),rc=m(),Mn=a("li"),qo=a("a"),ic=r("Vectorization"),lc=m(),In=a("li"),Lo=a("a"),dc=r("Parallelization"),cc=m(),A=a("div"),w(So.$$.fragment),mc=m(),Ie=a("p"),pc=r("The "),jn=a("code"),hc=r("FlaxBeitPreTrainedModel"),fc=r(" forward method, overrides the "),Pn=a("code"),uc=r("__call__"),gc=r(" special method."),_c=m(),w(at.$$.fragment),bc=m(),je=a("p"),vc=r("bool_masked_pos ("),Cn=a("code"),wc=r("numpy.ndarray"),xc=r(" of shape "),zn=a("code"),$c=r("(batch_size, num_patches)"),yc=r(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Tc=m(),w(nt.$$.fragment),Ps=m(),Pe=a("h2"),st=a("a"),An=a("span"),w(No.$$.fragment),Bc=m(),qn=a("span"),Fc=r("FlaxBeitForImageClassification"),Cs=m(),j=a("div"),w(Oo.$$.fragment),Ec=m(),Ln=a("p"),kc=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Mc=m(),Do=a("p"),Ic=r("This model inherits from "),xa=a("a"),jc=r("FlaxPreTrainedModel"),Pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cc=m(),Vo=a("p"),zc=r("This model is also a Flax Linen "),Wo=a("a"),Ac=r("flax.linen.Module"),qc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lc=m(),Sn=a("p"),Sc=r("Finally, this model supports inherent JAX features such as:"),Nc=m(),se=a("ul"),Nn=a("li"),Uo=a("a"),Oc=r("Just-In-Time (JIT) compilation"),Dc=m(),On=a("li"),Ro=a("a"),Vc=r("Automatic Differentiation"),Wc=m(),Dn=a("li"),Ho=a("a"),Uc=r("Vectorization"),Rc=m(),Vn=a("li"),Jo=a("a"),Hc=r("Parallelization"),Jc=m(),K=a("div"),w(Go.$$.fragment),Gc=m(),Ce=a("p"),Xc=r("The "),Wn=a("code"),Kc=r("FlaxBeitPreTrainedModel"),Yc=r(" forward method, overrides the "),Un=a("code"),Qc=r("__call__"),Zc=r(" special method."),em=m(),w(rt.$$.fragment),tm=m(),w(it.$$.fragment),this.h()},l(o){const u=_h('[data-svelte="svelte-1phssyn"]',document.head);c=n(u,"META",{name:!0,content:!0}),u.forEach(t),v=p(o),g=n(o,"H1",{class:!0});var Xo=s(g);f=n(Xo,"A",{id:!0,class:!0,href:!0});var Rn=s(f);b=n(Rn,"SPAN",{});var Hn=s(b);x(l.$$.fragment,Hn),Hn.forEach(t),Rn.forEach(t),h=p(Xo),E=n(Xo,"SPAN",{});var Jn=s(E);ir=i(Jn,"BEiT"),Jn.forEach(t),Xo.forEach(t),ns=p(o),ce=n(o,"H2",{class:!0});var Ko=s(ce);ze=n(Ko,"A",{id:!0,class:!0,href:!0});var Gn=s(ze);La=n(Gn,"SPAN",{});var Xn=s(La);x(Ft.$$.fragment,Xn),Xn.forEach(t),Gn.forEach(t),lr=p(Ko),Sa=n(Ko,"SPAN",{});var Kn=s(Sa);dr=i(Kn,"Overview"),Kn.forEach(t),Ko.forEach(t),ss=p(o),W=n(o,"P",{});var re=s(W);cr=i(re,"The BEiT model was proposed in "),Et=n(re,"A",{href:!0,rel:!0});var Yn=s(Et);mr=i(Yn,"BEiT: BERT Pre-Training of Image Transformers"),Yn.forEach(t),pr=i(re,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),kt=n(re,"A",{href:!0,rel:!0});var Qn=s(kt);hr=i(Qn,"original ViT paper"),Qn.forEach(t),fr=i(re,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Mt=n(re,"A",{href:!0,rel:!0});var Zn=s(Mt);ur=i(Zn,"DALL-E model"),Zn.forEach(t),gr=i(re,` given masked
patches.`),re.forEach(t),rs=p(o),Yo=n(o,"P",{});var es=s(Yo);_r=i(es,"The abstract from the paper is the following:"),es.forEach(t),is=p(o),Qo=n(o,"P",{});var ts=s(Qo);Na=n(ts,"EM",{});var os=s(Na);br=i(os,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),os.forEach(t),ts.forEach(t),ls=p(o),Zo=n(o,"P",{});var as=s(Zo);vr=i(as,"Tips:"),as.forEach(t),ds=p(o),C=n(o,"UL",{});var Y=s(C);k=n(Y,"LI",{});var z=s(k);wr=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),ea=n(z,"A",{href:!0});var nm=s(ea);xr=i(nm,"original model (ViT)"),nm.forEach(t),$r=i(z," as well as "),ta=n(z,"A",{href:!0});var sm=s(ta);yr=i(sm,"Data-efficient Image Transformers (DeiT)"),sm.forEach(t),Tr=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),It=n(z,"A",{href:!0,rel:!0});var rm=s(It);Br=i(rm,"here"),rm.forEach(t),Fr=i(z,` (you can just replace
`),oa=n(z,"A",{href:!0});var im=s(oa);Er=i(im,"ViTFeatureExtractor"),im.forEach(t),kr=i(z," by "),aa=n(z,"A",{href:!0});var lm=s(aa);Mr=i(lm,"BeitFeatureExtractor"),lm.forEach(t),Ir=i(z,` and
`),na=n(z,"A",{href:!0});var dm=s(na);jr=i(dm,"ViTForImageClassification"),dm.forEach(t),Pr=i(z," by "),sa=n(z,"A",{href:!0});var cm=s(sa);Cr=i(cm,"BeitForImageClassification"),cm.forEach(t),zr=i(z,")."),z.forEach(t),Ar=p(Y),jt=n(Y,"LI",{});var As=s(jt);qr=i(As,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Pt=n(As,"A",{href:!0,rel:!0});var mm=s(Pt);Lr=i(mm,"here"),mm.forEach(t),Sr=i(As,"."),As.forEach(t),Nr=p(Y),Ct=n(Y,"LI",{});var qs=s(Ct);Or=i(qs,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),ra=n(qs,"A",{href:!0});var pm=s(ra);Dr=i(pm,"BeitFeatureExtractor"),pm.forEach(t),Vr=i(qs," to resize (or rescale) and normalize images for the model."),qs.forEach(t),Wr=p(Y),me=n(Y,"LI",{});var $a=s(me);Ur=i($a,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Oa=n($a,"CODE",{});var hm=s(Oa);Rr=i(hm,"microsoft/beit-base-patch16-224"),hm.forEach(t),Hr=i($a,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),zt=n($a,"A",{href:!0,rel:!0});var fm=s(zt);Jr=i(fm,"hub"),fm.forEach(t),Gr=i($a,"."),$a.forEach(t),Xr=p(Y),pe=n(Y,"LI",{});var ya=s(pe);Kr=i(ya,"The available checkpoints are either (1) pre-trained on "),At=n(ya,"A",{href:!0,rel:!0});var um=s(At);Yr=i(um,"ImageNet-22k"),um.forEach(t),Qr=i(ya,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),qt=n(ya,"A",{href:!0,rel:!0});var gm=s(qt);Zr=i(gm,"ImageNet-1k"),gm.forEach(t),ei=i(ya,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),ya.forEach(t),ti=p(Y),N=n(Y,"LI",{});var le=s(N);oi=i(le,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Da=n(le,"CODE",{});var _m=s(Da);ai=i(_m,"use_relative_position_bias"),_m.forEach(t),ni=i(le,` or the
`),Va=n(le,"CODE",{});var bm=s(Va);si=i(bm,"use_relative_position_bias"),bm.forEach(t),ri=i(le," attribute of "),ia=n(le,"A",{href:!0});var vm=s(ia);ii=i(vm,"BeitConfig"),vm.forEach(t),li=i(le," to "),Wa=n(le,"CODE",{});var wm=s(Wa);di=i(wm,"True"),wm.forEach(t),ci=i(le,` in order to add
position embeddings.`),le.forEach(t),Y.forEach(t),cs=p(o),Ae=n(o,"IMG",{src:!0,alt:!0,width:!0}),ms=p(o),Lt=n(o,"SMALL",{});var om=s(Lt);mi=i(om,"BEiT pre-training. Taken from the "),la=n(om,"A",{href:!0});var xm=s(la);pi=i(xm,"original paper."),xm.forEach(t),om.forEach(t),ps=p(o),U=n(o,"P",{});var lt=s(U);hi=i(lt,"This model was contributed by "),St=n(lt,"A",{href:!0,rel:!0});var $m=s(St);fi=i($m,"nielsr"),$m.forEach(t),ui=i(lt,`. The JAX/FLAX version of this model was
contributed by `),Nt=n(lt,"A",{href:!0,rel:!0});var ym=s(Nt);gi=i(ym,"kamalkraj"),ym.forEach(t),_i=i(lt,". The original code can be found "),Ot=n(lt,"A",{href:!0,rel:!0});var Tm=s(Ot);bi=i(Tm,"here"),Tm.forEach(t),vi=i(lt,"."),lt.forEach(t),hs=p(o),he=n(o,"H2",{class:!0});var Ls=s(he);qe=n(Ls,"A",{id:!0,class:!0,href:!0});var Bm=s(qe);Ua=n(Bm,"SPAN",{});var Fm=s(Ua);x(Dt.$$.fragment,Fm),Fm.forEach(t),Bm.forEach(t),wi=p(Ls),Ra=n(Ls,"SPAN",{});var Em=s(Ra);xi=i(Em,"BEiT specific outputs"),Em.forEach(t),Ls.forEach(t),fs=p(o),fe=n(o,"DIV",{class:!0});var Ss=s(fe);x(Vt.$$.fragment,Ss),$i=p(Ss),Wt=n(Ss,"P",{});var Ns=s(Wt);yi=i(Ns,"Class for outputs of "),da=n(Ns,"A",{href:!0});var km=s(da);Ti=i(km,"BeitModel"),km.forEach(t),Bi=i(Ns,"."),Ns.forEach(t),Ss.forEach(t),us=p(o),ue=n(o,"DIV",{class:!0});var Os=s(ue);x(Ut.$$.fragment,Os),Fi=p(Os),Rt=n(Os,"P",{});var Ds=s(Rt);Ei=i(Ds,"Class for outputs of "),ca=n(Ds,"A",{href:!0});var Mm=s(ca);ki=i(Mm,"FlaxBeitModel"),Mm.forEach(t),Mi=i(Ds,"."),Ds.forEach(t),Os.forEach(t),gs=p(o),ge=n(o,"H2",{class:!0});var Vs=s(ge);Le=n(Vs,"A",{id:!0,class:!0,href:!0});var Im=s(Le);Ha=n(Im,"SPAN",{});var jm=s(Ha);x(Ht.$$.fragment,jm),jm.forEach(t),Im.forEach(t),Ii=p(Vs),Ja=n(Vs,"SPAN",{});var Pm=s(Ja);ji=i(Pm,"BeitConfig"),Pm.forEach(t),Vs.forEach(t),_s=p(o),Z=n(o,"DIV",{class:!0});var Ta=s(Z);x(Jt.$$.fragment,Ta),Pi=p(Ta),_e=n(Ta,"P",{});var Ba=s(_e);Ci=i(Ba,"This is the configuration class to store the configuration of a "),ma=n(Ba,"A",{href:!0});var Cm=s(ma);zi=i(Cm,"BeitModel"),Cm.forEach(t),Ai=i(Ba,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Gt=n(Ba,"A",{href:!0,rel:!0});var zm=s(Gt);qi=i(zm,"microsoft/beit-base-patch16-224-pt22k"),zm.forEach(t),Li=i(Ba," architecture."),Ba.forEach(t),Si=p(Ta),x(Se.$$.fragment,Ta),Ta.forEach(t),bs=p(o),be=n(o,"H2",{class:!0});var Ws=s(be);Ne=n(Ws,"A",{id:!0,class:!0,href:!0});var Am=s(Ne);Ga=n(Am,"SPAN",{});var qm=s(Ga);x(Xt.$$.fragment,qm),qm.forEach(t),Am.forEach(t),Ni=p(Ws),Xa=n(Ws,"SPAN",{});var Lm=s(Xa);Oi=i(Lm,"BeitFeatureExtractor"),Lm.forEach(t),Ws.forEach(t),vs=p(o),O=n(o,"DIV",{class:!0});var dt=s(O);x(Kt.$$.fragment,dt),Di=p(dt),Ka=n(dt,"P",{});var Sm=s(Ka);Vi=i(Sm,"Constructs a BEiT feature extractor."),Sm.forEach(t),Wi=p(dt),Yt=n(dt,"P",{});var Us=s(Yt);Ui=i(Us,"This feature extractor inherits from "),pa=n(Us,"A",{href:!0});var Nm=s(pa);Ri=i(Nm,"FeatureExtractionMixin"),Nm.forEach(t),Hi=i(Us,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Us.forEach(t),Ji=p(dt),ie=n(dt,"DIV",{class:!0});var Fa=s(ie);x(Qt.$$.fragment,Fa),Gi=p(Fa),Ya=n(Fa,"P",{});var Om=s(Ya);Xi=i(Om,"Main method to prepare for the model one or several image(s)."),Om.forEach(t),Ki=p(Fa),x(Oe.$$.fragment,Fa),Fa.forEach(t),dt.forEach(t),ws=p(o),ve=n(o,"H2",{class:!0});var Rs=s(ve);De=n(Rs,"A",{id:!0,class:!0,href:!0});var Dm=s(De);Qa=n(Dm,"SPAN",{});var Vm=s(Qa);x(Zt.$$.fragment,Vm),Vm.forEach(t),Dm.forEach(t),Yi=p(Rs),Za=n(Rs,"SPAN",{});var Wm=s(Za);Qi=i(Wm,"BeitModel"),Wm.forEach(t),Rs.forEach(t),xs=p(o),ee=n(o,"DIV",{class:!0});var Ea=s(ee);x(eo.$$.fragment,Ea),Zi=p(Ea),to=n(Ea,"P",{});var Hs=s(to);el=i(Hs,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),oo=n(Hs,"A",{href:!0,rel:!0});var Um=s(oo);tl=i(Um,"torch.nn.Module"),Um.forEach(t),ol=i(Hs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hs.forEach(t),al=p(Ea),R=n(Ea,"DIV",{class:!0});var ct=s(R);x(ao.$$.fragment,ct),nl=p(ct),we=n(ct,"P",{});var ka=s(we);sl=i(ka,"The "),ha=n(ka,"A",{href:!0});var Rm=s(ha);rl=i(Rm,"BeitModel"),Rm.forEach(t),il=i(ka," forward method, overrides the "),en=n(ka,"CODE",{});var Hm=s(en);ll=i(Hm,"__call__"),Hm.forEach(t),dl=i(ka," special method."),ka.forEach(t),cl=p(ct),x(Ve.$$.fragment,ct),ml=p(ct),x(We.$$.fragment,ct),ct.forEach(t),Ea.forEach(t),$s=p(o),xe=n(o,"H2",{class:!0});var Js=s(xe);Ue=n(Js,"A",{id:!0,class:!0,href:!0});var Jm=s(Ue);tn=n(Jm,"SPAN",{});var Gm=s(tn);x(no.$$.fragment,Gm),Gm.forEach(t),Jm.forEach(t),pl=p(Js),on=n(Js,"SPAN",{});var Xm=s(on);hl=i(Xm,"BeitForMaskedImageModeling"),Xm.forEach(t),Js.forEach(t),ys=p(o),te=n(o,"DIV",{class:!0});var Ma=s(te);x(so.$$.fragment,Ma),fl=p(Ma),oe=n(Ma,"P",{});var mt=s(oe);ul=i(mt,`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),fa=n(mt,"A",{href:!0});var Km=s(fa);gl=i(Km,"AutoModelForMaskedImageModeling"),Km.forEach(t),_l=i(mt,`, so you
will need to use `),ua=n(mt,"A",{href:!0});var Ym=s(ua);bl=i(Ym,"BeitForMaskedImageModeling"),Ym.forEach(t),vl=i(mt,` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),ro=n(mt,"A",{href:!0,rel:!0});var Qm=s(ro);wl=i(Qm,"torch.nn.Module"),Qm.forEach(t),xl=i(mt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mt.forEach(t),$l=p(Ma),H=n(Ma,"DIV",{class:!0});var pt=s(H);x(io.$$.fragment,pt),yl=p(pt),$e=n(pt,"P",{});var Ia=s($e);Tl=i(Ia,"The "),ga=n(Ia,"A",{href:!0});var Zm=s(ga);Bl=i(Zm,"BeitForMaskedImageModeling"),Zm.forEach(t),Fl=i(Ia," forward method, overrides the "),an=n(Ia,"CODE",{});var ep=s(an);El=i(ep,"__call__"),ep.forEach(t),kl=i(Ia," special method."),Ia.forEach(t),Ml=p(pt),x(Re.$$.fragment,pt),Il=p(pt),x(He.$$.fragment,pt),pt.forEach(t),Ma.forEach(t),Ts=p(o),ye=n(o,"H2",{class:!0});var Gs=s(ye);Je=n(Gs,"A",{id:!0,class:!0,href:!0});var tp=s(Je);nn=n(tp,"SPAN",{});var op=s(nn);x(lo.$$.fragment,op),op.forEach(t),tp.forEach(t),jl=p(Gs),sn=n(Gs,"SPAN",{});var ap=s(sn);Pl=i(ap,"BeitForImageClassification"),ap.forEach(t),Gs.forEach(t),Bs=p(o),D=n(o,"DIV",{class:!0});var ht=s(D);x(co.$$.fragment,ht),Cl=p(ht),rn=n(ht,"P",{});var np=s(rn);zl=i(np,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),np.forEach(t),Al=p(ht),mo=n(ht,"P",{});var Xs=s(mo);ql=i(Xs,"This model is a PyTorch "),po=n(Xs,"A",{href:!0,rel:!0});var sp=s(po);Ll=i(sp,"torch.nn.Module"),sp.forEach(t),Sl=i(Xs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xs.forEach(t),Nl=p(ht),J=n(ht,"DIV",{class:!0});var ft=s(J);x(ho.$$.fragment,ft),Ol=p(ft),Te=n(ft,"P",{});var ja=s(Te);Dl=i(ja,"The "),_a=n(ja,"A",{href:!0});var rp=s(_a);Vl=i(rp,"BeitForImageClassification"),rp.forEach(t),Wl=i(ja," forward method, overrides the "),ln=n(ja,"CODE",{});var ip=s(ln);Ul=i(ip,"__call__"),ip.forEach(t),Rl=i(ja," special method."),ja.forEach(t),Hl=p(ft),x(Ge.$$.fragment,ft),Jl=p(ft),x(Xe.$$.fragment,ft),ft.forEach(t),ht.forEach(t),Fs=p(o),Be=n(o,"H2",{class:!0});var Ks=s(Be);Ke=n(Ks,"A",{id:!0,class:!0,href:!0});var lp=s(Ke);dn=n(lp,"SPAN",{});var dp=s(dn);x(fo.$$.fragment,dp),dp.forEach(t),lp.forEach(t),Gl=p(Ks),cn=n(Ks,"SPAN",{});var cp=s(cn);Xl=i(cp,"BeitForSemanticSegmentation"),cp.forEach(t),Ks.forEach(t),Es=p(o),V=n(o,"DIV",{class:!0});var ut=s(V);x(uo.$$.fragment,ut),Kl=p(ut),mn=n(ut,"P",{});var mp=s(mn);Yl=i(mp,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),mp.forEach(t),Ql=p(ut),go=n(ut,"P",{});var Ys=s(go);Zl=i(Ys,"This model is a PyTorch "),_o=n(Ys,"A",{href:!0,rel:!0});var pp=s(_o);ed=i(pp,"torch.nn.Module"),pp.forEach(t),td=i(Ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys.forEach(t),od=p(ut),G=n(ut,"DIV",{class:!0});var gt=s(G);x(bo.$$.fragment,gt),ad=p(gt),Fe=n(gt,"P",{});var Pa=s(Fe);nd=i(Pa,"The "),ba=n(Pa,"A",{href:!0});var hp=s(ba);sd=i(hp,"BeitForSemanticSegmentation"),hp.forEach(t),rd=i(Pa," forward method, overrides the "),pn=n(Pa,"CODE",{});var fp=s(pn);id=i(fp,"__call__"),fp.forEach(t),ld=i(Pa," special method."),Pa.forEach(t),dd=p(gt),x(Ye.$$.fragment,gt),cd=p(gt),x(Qe.$$.fragment,gt),gt.forEach(t),ut.forEach(t),ks=p(o),Ee=n(o,"H2",{class:!0});var Qs=s(Ee);Ze=n(Qs,"A",{id:!0,class:!0,href:!0});var up=s(Ze);hn=n(up,"SPAN",{});var gp=s(hn);x(vo.$$.fragment,gp),gp.forEach(t),up.forEach(t),md=p(Qs),fn=n(Qs,"SPAN",{});var _p=s(fn);pd=i(_p,"FlaxBeitModel"),_p.forEach(t),Qs.forEach(t),Ms=p(o),M=n(o,"DIV",{class:!0});var q=s(M);x(wo.$$.fragment,q),hd=p(q),un=n(q,"P",{});var bp=s(un);fd=i(bp,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),bp.forEach(t),ud=p(q),xo=n(q,"P",{});var Zs=s(xo);gd=i(Zs,"This model inherits from "),va=n(Zs,"A",{href:!0});var vp=s(va);_d=i(vp,"FlaxPreTrainedModel"),vp.forEach(t),bd=i(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zs.forEach(t),vd=p(q),$o=n(q,"P",{});var er=s($o);wd=i(er,"This model is also a Flax Linen "),yo=n(er,"A",{href:!0,rel:!0});var wp=s(yo);xd=i(wp,"flax.linen.Module"),wp.forEach(t),$d=i(er,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),er.forEach(t),yd=p(q),gn=n(q,"P",{});var xp=s(gn);Td=i(xp,"Finally, this model supports inherent JAX features such as:"),xp.forEach(t),Bd=p(q),ae=n(q,"UL",{});var _t=s(ae);_n=n(_t,"LI",{});var $p=s(_n);To=n($p,"A",{href:!0,rel:!0});var yp=s(To);Fd=i(yp,"Just-In-Time (JIT) compilation"),yp.forEach(t),$p.forEach(t),Ed=p(_t),bn=n(_t,"LI",{});var Tp=s(bn);Bo=n(Tp,"A",{href:!0,rel:!0});var Bp=s(Bo);kd=i(Bp,"Automatic Differentiation"),Bp.forEach(t),Tp.forEach(t),Md=p(_t),vn=n(_t,"LI",{});var Fp=s(vn);Fo=n(Fp,"A",{href:!0,rel:!0});var Ep=s(Fo);Id=i(Ep,"Vectorization"),Ep.forEach(t),Fp.forEach(t),jd=p(_t),wn=n(_t,"LI",{});var kp=s(wn);Eo=n(kp,"A",{href:!0,rel:!0});var Mp=s(Eo);Pd=i(Mp,"Parallelization"),Mp.forEach(t),kp.forEach(t),_t.forEach(t),Cd=p(q),X=n(q,"DIV",{class:!0});var bt=s(X);x(ko.$$.fragment,bt),zd=p(bt),ke=n(bt,"P",{});var Ca=s(ke);Ad=i(Ca,"The "),xn=n(Ca,"CODE",{});var Ip=s(xn);qd=i(Ip,"FlaxBeitPreTrainedModel"),Ip.forEach(t),Ld=i(Ca," forward method, overrides the "),$n=n(Ca,"CODE",{});var jp=s($n);Sd=i(jp,"__call__"),jp.forEach(t),Nd=i(Ca," special method."),Ca.forEach(t),Od=p(bt),x(et.$$.fragment,bt),Dd=p(bt),x(tt.$$.fragment,bt),bt.forEach(t),q.forEach(t),Is=p(o),Me=n(o,"H2",{class:!0});var tr=s(Me);ot=n(tr,"A",{id:!0,class:!0,href:!0});var Pp=s(ot);yn=n(Pp,"SPAN",{});var Cp=s(yn);x(Mo.$$.fragment,Cp),Cp.forEach(t),Pp.forEach(t),Vd=p(tr),Tn=n(tr,"SPAN",{});var zp=s(Tn);Wd=i(zp,"FlaxBeitForMaskedImageModeling"),zp.forEach(t),tr.forEach(t),js=p(o),I=n(o,"DIV",{class:!0});var L=s(I);x(Io.$$.fragment,L),Ud=p(L),Bn=n(L,"P",{});var Ap=s(Bn);Rd=i(Ap,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Ap.forEach(t),Hd=p(L),jo=n(L,"P",{});var or=s(jo);Jd=i(or,"This model inherits from "),wa=n(or,"A",{href:!0});var qp=s(wa);Gd=i(qp,"FlaxPreTrainedModel"),qp.forEach(t),Xd=i(or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),or.forEach(t),Kd=p(L),Po=n(L,"P",{});var ar=s(Po);Yd=i(ar,"This model is also a Flax Linen "),Co=n(ar,"A",{href:!0,rel:!0});var Lp=s(Co);Qd=i(Lp,"flax.linen.Module"),Lp.forEach(t),Zd=i(ar,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ar.forEach(t),ec=p(L),Fn=n(L,"P",{});var Sp=s(Fn);tc=i(Sp,"Finally, this model supports inherent JAX features such as:"),Sp.forEach(t),oc=p(L),ne=n(L,"UL",{});var vt=s(ne);En=n(vt,"LI",{});var Np=s(En);zo=n(Np,"A",{href:!0,rel:!0});var Op=s(zo);ac=i(Op,"Just-In-Time (JIT) compilation"),Op.forEach(t),Np.forEach(t),nc=p(vt),kn=n(vt,"LI",{});var Dp=s(kn);Ao=n(Dp,"A",{href:!0,rel:!0});var Vp=s(Ao);sc=i(Vp,"Automatic Differentiation"),Vp.forEach(t),Dp.forEach(t),rc=p(vt),Mn=n(vt,"LI",{});var Wp=s(Mn);qo=n(Wp,"A",{href:!0,rel:!0});var Up=s(qo);ic=i(Up,"Vectorization"),Up.forEach(t),Wp.forEach(t),lc=p(vt),In=n(vt,"LI",{});var Rp=s(In);Lo=n(Rp,"A",{href:!0,rel:!0});var Hp=s(Lo);dc=i(Hp,"Parallelization"),Hp.forEach(t),Rp.forEach(t),vt.forEach(t),cc=p(L),A=n(L,"DIV",{class:!0});var de=s(A);x(So.$$.fragment,de),mc=p(de),Ie=n(de,"P",{});var za=s(Ie);pc=i(za,"The "),jn=n(za,"CODE",{});var Jp=s(jn);hc=i(Jp,"FlaxBeitPreTrainedModel"),Jp.forEach(t),fc=i(za," forward method, overrides the "),Pn=n(za,"CODE",{});var Gp=s(Pn);uc=i(Gp,"__call__"),Gp.forEach(t),gc=i(za," special method."),za.forEach(t),_c=p(de),x(at.$$.fragment,de),bc=p(de),je=n(de,"P",{});var Aa=s(je);vc=i(Aa,"bool_masked_pos ("),Cn=n(Aa,"CODE",{});var Xp=s(Cn);wc=i(Xp,"numpy.ndarray"),Xp.forEach(t),xc=i(Aa," of shape "),zn=n(Aa,"CODE",{});var Kp=s(zn);$c=i(Kp,"(batch_size, num_patches)"),Kp.forEach(t),yc=i(Aa,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Aa.forEach(t),Tc=p(de),x(nt.$$.fragment,de),de.forEach(t),L.forEach(t),Ps=p(o),Pe=n(o,"H2",{class:!0});var nr=s(Pe);st=n(nr,"A",{id:!0,class:!0,href:!0});var Yp=s(st);An=n(Yp,"SPAN",{});var Qp=s(An);x(No.$$.fragment,Qp),Qp.forEach(t),Yp.forEach(t),Bc=p(nr),qn=n(nr,"SPAN",{});var Zp=s(qn);Fc=i(Zp,"FlaxBeitForImageClassification"),Zp.forEach(t),nr.forEach(t),Cs=p(o),j=n(o,"DIV",{class:!0});var S=s(j);x(Oo.$$.fragment,S),Ec=p(S),Ln=n(S,"P",{});var eh=s(Ln);kc=i(eh,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),eh.forEach(t),Mc=p(S),Do=n(S,"P",{});var sr=s(Do);Ic=i(sr,"This model inherits from "),xa=n(sr,"A",{href:!0});var th=s(xa);jc=i(th,"FlaxPreTrainedModel"),th.forEach(t),Pc=i(sr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sr.forEach(t),Cc=p(S),Vo=n(S,"P",{});var rr=s(Vo);zc=i(rr,"This model is also a Flax Linen "),Wo=n(rr,"A",{href:!0,rel:!0});var oh=s(Wo);Ac=i(oh,"flax.linen.Module"),oh.forEach(t),qc=i(rr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rr.forEach(t),Lc=p(S),Sn=n(S,"P",{});var ah=s(Sn);Sc=i(ah,"Finally, this model supports inherent JAX features such as:"),ah.forEach(t),Nc=p(S),se=n(S,"UL",{});var wt=s(se);Nn=n(wt,"LI",{});var nh=s(Nn);Uo=n(nh,"A",{href:!0,rel:!0});var sh=s(Uo);Oc=i(sh,"Just-In-Time (JIT) compilation"),sh.forEach(t),nh.forEach(t),Dc=p(wt),On=n(wt,"LI",{});var rh=s(On);Ro=n(rh,"A",{href:!0,rel:!0});var ih=s(Ro);Vc=i(ih,"Automatic Differentiation"),ih.forEach(t),rh.forEach(t),Wc=p(wt),Dn=n(wt,"LI",{});var lh=s(Dn);Ho=n(lh,"A",{href:!0,rel:!0});var dh=s(Ho);Uc=i(dh,"Vectorization"),dh.forEach(t),lh.forEach(t),Rc=p(wt),Vn=n(wt,"LI",{});var ch=s(Vn);Jo=n(ch,"A",{href:!0,rel:!0});var mh=s(Jo);Hc=i(mh,"Parallelization"),mh.forEach(t),ch.forEach(t),wt.forEach(t),Jc=p(S),K=n(S,"DIV",{class:!0});var xt=s(K);x(Go.$$.fragment,xt),Gc=p(xt),Ce=n(xt,"P",{});var qa=s(Ce);Xc=i(qa,"The "),Wn=n(qa,"CODE",{});var ph=s(Wn);Kc=i(ph,"FlaxBeitPreTrainedModel"),ph.forEach(t),Yc=i(qa," forward method, overrides the "),Un=n(qa,"CODE",{});var hh=s(Un);Qc=i(hh,"__call__"),hh.forEach(t),Zc=i(qa," special method."),qa.forEach(t),em=p(xt),x(rt.$$.fragment,xt),tm=p(xt),x(it.$$.fragment,xt),xt.forEach(t),S.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Lh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(g,"class","relative group"),d(ze,"id","overview"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#overview"),d(ce,"class","relative group"),d(Et,"href","https://arxiv.org/abs/2106.08254"),d(Et,"rel","nofollow"),d(kt,"href","https://arxiv.org/abs/2010.11929"),d(kt,"rel","nofollow"),d(Mt,"href","https://arxiv.org/abs/2102.12092"),d(Mt,"rel","nofollow"),d(ea,"href","vit"),d(ta,"href","deit"),d(It,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(It,"rel","nofollow"),d(oa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(aa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(na,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),d(sa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(Pt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(Pt,"rel","nofollow"),d(ra,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(zt,"href","https://huggingface.co/models?search=microsoft/beit"),d(zt,"rel","nofollow"),d(At,"href","http://www.image-net.org/"),d(At,"rel","nofollow"),d(qt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(qt,"rel","nofollow"),d(ia,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"),bh(Ae.src,am="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/beit_architecture.jpg")||d(Ae,"src",am),d(Ae,"alt","drawing"),d(Ae,"width","600"),d(la,"href","https://arxiv.org/abs/2106.08254"),d(St,"href","https://huggingface.co/nielsr"),d(St,"rel","nofollow"),d(Nt,"href","https://huggingface.co/kamalkraj"),d(Nt,"rel","nofollow"),d(Ot,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(Ot,"rel","nofollow"),d(qe,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(he,"class","relative group"),d(da,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ca,"href","/docs/transformers/main/en/model_doc/beit#transformers.FlaxBeitModel"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Le,"id","transformers.BeitConfig"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.BeitConfig"),d(ge,"class","relative group"),d(ma,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(Gt,"href","https://huggingface.co/microsoft/beit-base-patch16-224-pt22k"),d(Gt,"rel","nofollow"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ne,"id","transformers.BeitFeatureExtractor"),d(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ne,"href","#transformers.BeitFeatureExtractor"),d(be,"class","relative group"),d(pa,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(De,"id","transformers.BeitModel"),d(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(De,"href","#transformers.BeitModel"),d(ve,"class","relative group"),d(oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(oo,"rel","nofollow"),d(ha,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"id","transformers.BeitForMaskedImageModeling"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.BeitForMaskedImageModeling"),d(xe,"class","relative group"),d(fa,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoModelForMaskedImageModeling"),d(ua,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ro,"rel","nofollow"),d(ga,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Je,"id","transformers.BeitForImageClassification"),d(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Je,"href","#transformers.BeitForImageClassification"),d(ye,"class","relative group"),d(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(po,"rel","nofollow"),d(_a,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ke,"id","transformers.BeitForSemanticSegmentation"),d(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ke,"href","#transformers.BeitForSemanticSegmentation"),d(Be,"class","relative group"),d(_o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(_o,"rel","nofollow"),d(ba,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ze,"id","transformers.FlaxBeitModel"),d(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ze,"href","#transformers.FlaxBeitModel"),d(Ee,"class","relative group"),d(va,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(yo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(yo,"rel","nofollow"),d(To,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(To,"rel","nofollow"),d(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Bo,"rel","nofollow"),d(Fo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Fo,"rel","nofollow"),d(Eo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Eo,"rel","nofollow"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ot,"id","transformers.FlaxBeitForMaskedImageModeling"),d(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ot,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(Me,"class","relative group"),d(wa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Co,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Co,"rel","nofollow"),d(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(zo,"rel","nofollow"),d(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Ao,"rel","nofollow"),d(qo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(qo,"rel","nofollow"),d(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Lo,"rel","nofollow"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(st,"id","transformers.FlaxBeitForImageClassification"),d(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(st,"href","#transformers.FlaxBeitForImageClassification"),d(Pe,"class","relative group"),d(xa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Wo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Wo,"rel","nofollow"),d(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Uo,"rel","nofollow"),d(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Ro,"rel","nofollow"),d(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Ho,"rel","nofollow"),d(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Jo,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,c),_(o,v,u),_(o,g,u),e(g,f),e(f,b),$(l,b,null),e(g,h),e(g,E),e(E,ir),_(o,ns,u),_(o,ce,u),e(ce,ze),e(ze,La),$(Ft,La,null),e(ce,lr),e(ce,Sa),e(Sa,dr),_(o,ss,u),_(o,W,u),e(W,cr),e(W,Et),e(Et,mr),e(W,pr),e(W,kt),e(kt,hr),e(W,fr),e(W,Mt),e(Mt,ur),e(W,gr),_(o,rs,u),_(o,Yo,u),e(Yo,_r),_(o,is,u),_(o,Qo,u),e(Qo,Na),e(Na,br),_(o,ls,u),_(o,Zo,u),e(Zo,vr),_(o,ds,u),_(o,C,u),e(C,k),e(k,wr),e(k,ea),e(ea,xr),e(k,$r),e(k,ta),e(ta,yr),e(k,Tr),e(k,It),e(It,Br),e(k,Fr),e(k,oa),e(oa,Er),e(k,kr),e(k,aa),e(aa,Mr),e(k,Ir),e(k,na),e(na,jr),e(k,Pr),e(k,sa),e(sa,Cr),e(k,zr),e(C,Ar),e(C,jt),e(jt,qr),e(jt,Pt),e(Pt,Lr),e(jt,Sr),e(C,Nr),e(C,Ct),e(Ct,Or),e(Ct,ra),e(ra,Dr),e(Ct,Vr),e(C,Wr),e(C,me),e(me,Ur),e(me,Oa),e(Oa,Rr),e(me,Hr),e(me,zt),e(zt,Jr),e(me,Gr),e(C,Xr),e(C,pe),e(pe,Kr),e(pe,At),e(At,Yr),e(pe,Qr),e(pe,qt),e(qt,Zr),e(pe,ei),e(C,ti),e(C,N),e(N,oi),e(N,Da),e(Da,ai),e(N,ni),e(N,Va),e(Va,si),e(N,ri),e(N,ia),e(ia,ii),e(N,li),e(N,Wa),e(Wa,di),e(N,ci),_(o,cs,u),_(o,Ae,u),_(o,ms,u),_(o,Lt,u),e(Lt,mi),e(Lt,la),e(la,pi),_(o,ps,u),_(o,U,u),e(U,hi),e(U,St),e(St,fi),e(U,ui),e(U,Nt),e(Nt,gi),e(U,_i),e(U,Ot),e(Ot,bi),e(U,vi),_(o,hs,u),_(o,he,u),e(he,qe),e(qe,Ua),$(Dt,Ua,null),e(he,wi),e(he,Ra),e(Ra,xi),_(o,fs,u),_(o,fe,u),$(Vt,fe,null),e(fe,$i),e(fe,Wt),e(Wt,yi),e(Wt,da),e(da,Ti),e(Wt,Bi),_(o,us,u),_(o,ue,u),$(Ut,ue,null),e(ue,Fi),e(ue,Rt),e(Rt,Ei),e(Rt,ca),e(ca,ki),e(Rt,Mi),_(o,gs,u),_(o,ge,u),e(ge,Le),e(Le,Ha),$(Ht,Ha,null),e(ge,Ii),e(ge,Ja),e(Ja,ji),_(o,_s,u),_(o,Z,u),$(Jt,Z,null),e(Z,Pi),e(Z,_e),e(_e,Ci),e(_e,ma),e(ma,zi),e(_e,Ai),e(_e,Gt),e(Gt,qi),e(_e,Li),e(Z,Si),$(Se,Z,null),_(o,bs,u),_(o,be,u),e(be,Ne),e(Ne,Ga),$(Xt,Ga,null),e(be,Ni),e(be,Xa),e(Xa,Oi),_(o,vs,u),_(o,O,u),$(Kt,O,null),e(O,Di),e(O,Ka),e(Ka,Vi),e(O,Wi),e(O,Yt),e(Yt,Ui),e(Yt,pa),e(pa,Ri),e(Yt,Hi),e(O,Ji),e(O,ie),$(Qt,ie,null),e(ie,Gi),e(ie,Ya),e(Ya,Xi),e(ie,Ki),$(Oe,ie,null),_(o,ws,u),_(o,ve,u),e(ve,De),e(De,Qa),$(Zt,Qa,null),e(ve,Yi),e(ve,Za),e(Za,Qi),_(o,xs,u),_(o,ee,u),$(eo,ee,null),e(ee,Zi),e(ee,to),e(to,el),e(to,oo),e(oo,tl),e(to,ol),e(ee,al),e(ee,R),$(ao,R,null),e(R,nl),e(R,we),e(we,sl),e(we,ha),e(ha,rl),e(we,il),e(we,en),e(en,ll),e(we,dl),e(R,cl),$(Ve,R,null),e(R,ml),$(We,R,null),_(o,$s,u),_(o,xe,u),e(xe,Ue),e(Ue,tn),$(no,tn,null),e(xe,pl),e(xe,on),e(on,hl),_(o,ys,u),_(o,te,u),$(so,te,null),e(te,fl),e(te,oe),e(oe,ul),e(oe,fa),e(fa,gl),e(oe,_l),e(oe,ua),e(ua,bl),e(oe,vl),e(oe,ro),e(ro,wl),e(oe,xl),e(te,$l),e(te,H),$(io,H,null),e(H,yl),e(H,$e),e($e,Tl),e($e,ga),e(ga,Bl),e($e,Fl),e($e,an),e(an,El),e($e,kl),e(H,Ml),$(Re,H,null),e(H,Il),$(He,H,null),_(o,Ts,u),_(o,ye,u),e(ye,Je),e(Je,nn),$(lo,nn,null),e(ye,jl),e(ye,sn),e(sn,Pl),_(o,Bs,u),_(o,D,u),$(co,D,null),e(D,Cl),e(D,rn),e(rn,zl),e(D,Al),e(D,mo),e(mo,ql),e(mo,po),e(po,Ll),e(mo,Sl),e(D,Nl),e(D,J),$(ho,J,null),e(J,Ol),e(J,Te),e(Te,Dl),e(Te,_a),e(_a,Vl),e(Te,Wl),e(Te,ln),e(ln,Ul),e(Te,Rl),e(J,Hl),$(Ge,J,null),e(J,Jl),$(Xe,J,null),_(o,Fs,u),_(o,Be,u),e(Be,Ke),e(Ke,dn),$(fo,dn,null),e(Be,Gl),e(Be,cn),e(cn,Xl),_(o,Es,u),_(o,V,u),$(uo,V,null),e(V,Kl),e(V,mn),e(mn,Yl),e(V,Ql),e(V,go),e(go,Zl),e(go,_o),e(_o,ed),e(go,td),e(V,od),e(V,G),$(bo,G,null),e(G,ad),e(G,Fe),e(Fe,nd),e(Fe,ba),e(ba,sd),e(Fe,rd),e(Fe,pn),e(pn,id),e(Fe,ld),e(G,dd),$(Ye,G,null),e(G,cd),$(Qe,G,null),_(o,ks,u),_(o,Ee,u),e(Ee,Ze),e(Ze,hn),$(vo,hn,null),e(Ee,md),e(Ee,fn),e(fn,pd),_(o,Ms,u),_(o,M,u),$(wo,M,null),e(M,hd),e(M,un),e(un,fd),e(M,ud),e(M,xo),e(xo,gd),e(xo,va),e(va,_d),e(xo,bd),e(M,vd),e(M,$o),e($o,wd),e($o,yo),e(yo,xd),e($o,$d),e(M,yd),e(M,gn),e(gn,Td),e(M,Bd),e(M,ae),e(ae,_n),e(_n,To),e(To,Fd),e(ae,Ed),e(ae,bn),e(bn,Bo),e(Bo,kd),e(ae,Md),e(ae,vn),e(vn,Fo),e(Fo,Id),e(ae,jd),e(ae,wn),e(wn,Eo),e(Eo,Pd),e(M,Cd),e(M,X),$(ko,X,null),e(X,zd),e(X,ke),e(ke,Ad),e(ke,xn),e(xn,qd),e(ke,Ld),e(ke,$n),e($n,Sd),e(ke,Nd),e(X,Od),$(et,X,null),e(X,Dd),$(tt,X,null),_(o,Is,u),_(o,Me,u),e(Me,ot),e(ot,yn),$(Mo,yn,null),e(Me,Vd),e(Me,Tn),e(Tn,Wd),_(o,js,u),_(o,I,u),$(Io,I,null),e(I,Ud),e(I,Bn),e(Bn,Rd),e(I,Hd),e(I,jo),e(jo,Jd),e(jo,wa),e(wa,Gd),e(jo,Xd),e(I,Kd),e(I,Po),e(Po,Yd),e(Po,Co),e(Co,Qd),e(Po,Zd),e(I,ec),e(I,Fn),e(Fn,tc),e(I,oc),e(I,ne),e(ne,En),e(En,zo),e(zo,ac),e(ne,nc),e(ne,kn),e(kn,Ao),e(Ao,sc),e(ne,rc),e(ne,Mn),e(Mn,qo),e(qo,ic),e(ne,lc),e(ne,In),e(In,Lo),e(Lo,dc),e(I,cc),e(I,A),$(So,A,null),e(A,mc),e(A,Ie),e(Ie,pc),e(Ie,jn),e(jn,hc),e(Ie,fc),e(Ie,Pn),e(Pn,uc),e(Ie,gc),e(A,_c),$(at,A,null),e(A,bc),e(A,je),e(je,vc),e(je,Cn),e(Cn,wc),e(je,xc),e(je,zn),e(zn,$c),e(je,yc),e(A,Tc),$(nt,A,null),_(o,Ps,u),_(o,Pe,u),e(Pe,st),e(st,An),$(No,An,null),e(Pe,Bc),e(Pe,qn),e(qn,Fc),_(o,Cs,u),_(o,j,u),$(Oo,j,null),e(j,Ec),e(j,Ln),e(Ln,kc),e(j,Mc),e(j,Do),e(Do,Ic),e(Do,xa),e(xa,jc),e(Do,Pc),e(j,Cc),e(j,Vo),e(Vo,zc),e(Vo,Wo),e(Wo,Ac),e(Vo,qc),e(j,Lc),e(j,Sn),e(Sn,Sc),e(j,Nc),e(j,se),e(se,Nn),e(Nn,Uo),e(Uo,Oc),e(se,Dc),e(se,On),e(On,Ro),e(Ro,Vc),e(se,Wc),e(se,Dn),e(Dn,Ho),e(Ho,Uc),e(se,Rc),e(se,Vn),e(Vn,Jo),e(Jo,Hc),e(j,Jc),e(j,K),$(Go,K,null),e(K,Gc),e(K,Ce),e(Ce,Xc),e(Ce,Wn),e(Wn,Kc),e(Ce,Yc),e(Ce,Un),e(Un,Qc),e(Ce,Zc),e(K,em),$(rt,K,null),e(K,tm),$(it,K,null),zs=!0},p(o,[u]){const Xo={};u&2&&(Xo.$$scope={dirty:u,ctx:o}),Se.$set(Xo);const Rn={};u&2&&(Rn.$$scope={dirty:u,ctx:o}),Oe.$set(Rn);const Hn={};u&2&&(Hn.$$scope={dirty:u,ctx:o}),Ve.$set(Hn);const Jn={};u&2&&(Jn.$$scope={dirty:u,ctx:o}),We.$set(Jn);const Ko={};u&2&&(Ko.$$scope={dirty:u,ctx:o}),Re.$set(Ko);const Gn={};u&2&&(Gn.$$scope={dirty:u,ctx:o}),He.$set(Gn);const Xn={};u&2&&(Xn.$$scope={dirty:u,ctx:o}),Ge.$set(Xn);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:o}),Xe.$set(Kn);const re={};u&2&&(re.$$scope={dirty:u,ctx:o}),Ye.$set(re);const Yn={};u&2&&(Yn.$$scope={dirty:u,ctx:o}),Qe.$set(Yn);const Qn={};u&2&&(Qn.$$scope={dirty:u,ctx:o}),et.$set(Qn);const Zn={};u&2&&(Zn.$$scope={dirty:u,ctx:o}),tt.$set(Zn);const es={};u&2&&(es.$$scope={dirty:u,ctx:o}),at.$set(es);const ts={};u&2&&(ts.$$scope={dirty:u,ctx:o}),nt.$set(ts);const os={};u&2&&(os.$$scope={dirty:u,ctx:o}),rt.$set(os);const as={};u&2&&(as.$$scope={dirty:u,ctx:o}),it.$set(as)},i(o){zs||(y(l.$$.fragment,o),y(Ft.$$.fragment,o),y(Dt.$$.fragment,o),y(Vt.$$.fragment,o),y(Ut.$$.fragment,o),y(Ht.$$.fragment,o),y(Jt.$$.fragment,o),y(Se.$$.fragment,o),y(Xt.$$.fragment,o),y(Kt.$$.fragment,o),y(Qt.$$.fragment,o),y(Oe.$$.fragment,o),y(Zt.$$.fragment,o),y(eo.$$.fragment,o),y(ao.$$.fragment,o),y(Ve.$$.fragment,o),y(We.$$.fragment,o),y(no.$$.fragment,o),y(so.$$.fragment,o),y(io.$$.fragment,o),y(Re.$$.fragment,o),y(He.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(ho.$$.fragment,o),y(Ge.$$.fragment,o),y(Xe.$$.fragment,o),y(fo.$$.fragment,o),y(uo.$$.fragment,o),y(bo.$$.fragment,o),y(Ye.$$.fragment,o),y(Qe.$$.fragment,o),y(vo.$$.fragment,o),y(wo.$$.fragment,o),y(ko.$$.fragment,o),y(et.$$.fragment,o),y(tt.$$.fragment,o),y(Mo.$$.fragment,o),y(Io.$$.fragment,o),y(So.$$.fragment,o),y(at.$$.fragment,o),y(nt.$$.fragment,o),y(No.$$.fragment,o),y(Oo.$$.fragment,o),y(Go.$$.fragment,o),y(rt.$$.fragment,o),y(it.$$.fragment,o),zs=!0)},o(o){T(l.$$.fragment,o),T(Ft.$$.fragment,o),T(Dt.$$.fragment,o),T(Vt.$$.fragment,o),T(Ut.$$.fragment,o),T(Ht.$$.fragment,o),T(Jt.$$.fragment,o),T(Se.$$.fragment,o),T(Xt.$$.fragment,o),T(Kt.$$.fragment,o),T(Qt.$$.fragment,o),T(Oe.$$.fragment,o),T(Zt.$$.fragment,o),T(eo.$$.fragment,o),T(ao.$$.fragment,o),T(Ve.$$.fragment,o),T(We.$$.fragment,o),T(no.$$.fragment,o),T(so.$$.fragment,o),T(io.$$.fragment,o),T(Re.$$.fragment,o),T(He.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T(ho.$$.fragment,o),T(Ge.$$.fragment,o),T(Xe.$$.fragment,o),T(fo.$$.fragment,o),T(uo.$$.fragment,o),T(bo.$$.fragment,o),T(Ye.$$.fragment,o),T(Qe.$$.fragment,o),T(vo.$$.fragment,o),T(wo.$$.fragment,o),T(ko.$$.fragment,o),T(et.$$.fragment,o),T(tt.$$.fragment,o),T(Mo.$$.fragment,o),T(Io.$$.fragment,o),T(So.$$.fragment,o),T(at.$$.fragment,o),T(nt.$$.fragment,o),T(No.$$.fragment,o),T(Oo.$$.fragment,o),T(Go.$$.fragment,o),T(rt.$$.fragment,o),T(it.$$.fragment,o),zs=!1},d(o){t(c),o&&t(v),o&&t(g),B(l),o&&t(ns),o&&t(ce),B(Ft),o&&t(ss),o&&t(W),o&&t(rs),o&&t(Yo),o&&t(is),o&&t(Qo),o&&t(ls),o&&t(Zo),o&&t(ds),o&&t(C),o&&t(cs),o&&t(Ae),o&&t(ms),o&&t(Lt),o&&t(ps),o&&t(U),o&&t(hs),o&&t(he),B(Dt),o&&t(fs),o&&t(fe),B(Vt),o&&t(us),o&&t(ue),B(Ut),o&&t(gs),o&&t(ge),B(Ht),o&&t(_s),o&&t(Z),B(Jt),B(Se),o&&t(bs),o&&t(be),B(Xt),o&&t(vs),o&&t(O),B(Kt),B(Qt),B(Oe),o&&t(ws),o&&t(ve),B(Zt),o&&t(xs),o&&t(ee),B(eo),B(ao),B(Ve),B(We),o&&t($s),o&&t(xe),B(no),o&&t(ys),o&&t(te),B(so),B(io),B(Re),B(He),o&&t(Ts),o&&t(ye),B(lo),o&&t(Bs),o&&t(D),B(co),B(ho),B(Ge),B(Xe),o&&t(Fs),o&&t(Be),B(fo),o&&t(Es),o&&t(V),B(uo),B(bo),B(Ye),B(Qe),o&&t(ks),o&&t(Ee),B(vo),o&&t(Ms),o&&t(M),B(wo),B(ko),B(et),B(tt),o&&t(Is),o&&t(Me),B(Mo),o&&t(js),o&&t(I),B(Io),B(So),B(at),B(nt),o&&t(Ps),o&&t(Pe),B(No),o&&t(Cs),o&&t(j),B(Oo),B(Go),B(rt),B(it)}}}const Lh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function Sh(F){return vh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rh extends fh{constructor(c){super();uh(this,c,Sh,qh,gh,{})}}export{Rh as default,Lh as metadata};
