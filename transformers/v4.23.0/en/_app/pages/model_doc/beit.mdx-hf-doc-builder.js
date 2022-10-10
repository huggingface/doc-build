import{S as Fh,i as Eh,s as kh,e as a,k as m,w,t as n,M as Mh,c as s,d as t,m as p,a as r,x,h as i,b as d,N as Ih,G as e,g as _,y as $,q as y,o as T,B,v as jh,L as Bt}from"../../chunks/vendor-hf-doc-builder.js";import{T as yt}from"../../chunks/Tip-hf-doc-builder.js";import{D as k}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ft}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Tt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ph(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitModel, BeitConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=n("Example:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Ch(F){let c,v;return{c(){c=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(g){c=s(g,"P",{});var f=r(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(g,f){_(g,c,f),e(c,v)},d(g){g&&t(c)}}}function zh(F){let c,v,g,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var E=r(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Ah(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitFeatureExtractor, BeitModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=n("Example:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function qh(F){let c,v,g,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var E=r(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Lh(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=n("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Sh(F){let c,v,g,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var E=r(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Nh(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitFeatureExtractor, BeitForImageClassification
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
tabby, tabby cat`}}),{c(){c=a("p"),v=n("Example:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Oh(F){let c,v,g,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var E=r(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Dh(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import AutoFeatureExtractor, BeitForSemanticSegmentation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Vh(F){let c,v,g,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var E=r(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Wh(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=n("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Uh(F){let c,v,g,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var E=r(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Rh(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Hh(F){let c,v,g,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var E=r(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,g),e(g,f),e(c,b)},d(l){l&&t(c)}}}function Jh(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=n("Example:"),g=m(),w(f.$$.fragment)},l(l){c=s(l,"P",{});var h=r(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Gh(F){let c,v,g,f,b,l,h,E,hn,ir,me,Ae,Da,Et,fn,Va,un,lr,W,gn,kt,_n,bn,Mt,vn,wn,It,xn,$n,dr,ea,yn,cr,ta,Wa,Tn,mr,oa,Bn,pr,C,M,Fn,aa,En,kn,sa,Mn,In,jt,jn,Pn,ra,Cn,zn,na,An,qn,ia,Ln,Sn,la,Nn,On,Dn,Pt,Vn,Ct,Wn,Un,Rn,zt,Hn,da,Jn,Gn,Xn,pe,Kn,Ua,Yn,Qn,At,Zn,ei,ti,he,oi,qt,ai,si,Lt,ri,ni,ii,O,li,Ra,di,ci,Ha,mi,pi,ca,hi,fi,Ja,ui,gi,hr,qe,fm,fr,St,_i,ma,bi,ur,U,vi,Nt,wi,xi,Ot,$i,yi,Dt,Ti,Bi,gr,fe,Le,Ga,Vt,Fi,Xa,Ei,_r,ue,Wt,ki,Ut,Mi,pa,Ii,ji,br,ge,Rt,Pi,Ht,Ci,ha,zi,Ai,vr,_e,Se,Ka,Jt,qi,Ya,Li,wr,Z,Gt,Si,be,Ni,fa,Oi,Di,Xt,Vi,Wi,Ui,Ne,xr,ve,Oe,Qa,Kt,Ri,Za,Hi,$r,A,Yt,Ji,es,Gi,Xi,Qt,Ki,ua,Yi,Qi,Zi,ie,Zt,el,ts,tl,ol,De,al,Ve,eo,sl,to,rl,ga,nl,il,yr,we,We,os,oo,ll,as,dl,Tr,ee,ao,cl,so,ml,ro,pl,hl,fl,R,no,ul,xe,gl,_a,_l,bl,ss,vl,wl,xl,Ue,$l,Re,Br,$e,He,rs,io,yl,ns,Tl,Fr,te,lo,Bl,oe,Fl,ba,El,kl,va,Ml,Il,co,jl,Pl,Cl,H,mo,zl,ye,Al,wa,ql,Ll,is,Sl,Nl,Ol,Je,Dl,Ge,Er,Te,Xe,ls,po,Vl,ds,Wl,kr,D,ho,Ul,cs,Rl,Hl,fo,Jl,uo,Gl,Xl,Kl,J,go,Yl,Be,Ql,xa,Zl,ed,ms,td,od,ad,Ke,sd,Ye,Mr,Fe,Qe,ps,_o,rd,hs,nd,Ir,V,bo,id,fs,ld,dd,vo,cd,wo,md,pd,hd,G,xo,fd,Ee,ud,$a,gd,_d,us,bd,vd,wd,Ze,xd,et,jr,ke,tt,gs,$o,$d,_s,yd,Pr,I,yo,Td,bs,Bd,Fd,To,Ed,ya,kd,Md,Id,Bo,jd,Fo,Pd,Cd,zd,vs,Ad,qd,ae,ws,Eo,Ld,Sd,xs,ko,Nd,Od,$s,Mo,Dd,Vd,ys,Io,Wd,Ud,X,jo,Rd,Me,Hd,Ts,Jd,Gd,Bs,Xd,Kd,Yd,ot,Qd,at,Cr,Ie,st,Fs,Po,Zd,Es,ec,zr,j,Co,tc,ks,oc,ac,zo,sc,Ta,rc,nc,ic,Ao,lc,qo,dc,cc,mc,Ms,pc,hc,se,Is,Lo,fc,uc,js,So,gc,_c,Ps,No,bc,vc,Cs,Oo,wc,xc,q,Do,$c,je,yc,zs,Tc,Bc,As,Fc,Ec,kc,rt,Mc,Pe,Ic,qs,jc,Pc,Ls,Cc,zc,Ac,nt,Ar,Ce,it,Ss,Vo,qc,Ns,Lc,qr,P,Wo,Sc,Os,Nc,Oc,Uo,Dc,Ba,Vc,Wc,Uc,Ro,Rc,Ho,Hc,Jc,Gc,Ds,Xc,Kc,re,Vs,Jo,Yc,Qc,Ws,Go,Zc,em,Us,Xo,tm,om,Rs,Ko,am,sm,K,Yo,rm,ze,nm,Hs,im,lm,Js,dm,cm,mm,lt,pm,dt,Lr;return l=new Q({}),Et=new Q({}),Vt=new Q({}),Wt=new k({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L69"}}),Rt=new k({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_flax_beit.py#L46"}}),Jt=new Q({}),Gt=new k({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
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
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/configuration_beit.py#L36"}}),Ne=new Tt({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[Ph]},$$scope:{ctx:F}}}),Kt=new Q({}),Yt=new k({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/feature_extraction_beit.py#L39"}}),Zt=new k({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.BeitFeatureExtractor.__call__.segmentation_maps",description:`<strong>segmentation_maps</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding semantic segmentation maps with the pixel-wise annotations.`,name:"segmentation_maps"},{anchor:"transformers.BeitFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.23.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/feature_extraction_beit.py#L100",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>labels</strong> \u2014 Optional labels to be fed to a model (when <code>segmentation_maps</code> are provided)</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),De=new yt({props:{warning:!0,$$slots:{default:[Ch]},$$scope:{ctx:F}}}),eo=new k({props:{name:"post_process_semantic_segmentation",anchor:"transformers.BeitFeatureExtractor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple] = None"}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.post_process_semantic_segmentation.outputs",description:`<strong>outputs</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitForSemanticSegmentation">BeitForSemanticSegmentation</a>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.BeitFeatureExtractor.post_process_semantic_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>) &#x2014;
List of tuples corresponding to the requested final size (height, width) of each prediction. If left to
None, predictions will not be resized.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/feature_extraction_beit.py#L229",returnDescription:`
<p><code>List[torch.Tensor]</code> of length <code>batch_size</code>, where each item is a semantic
segmentation map of shape (height, width) corresponding to the target_sizes entry (if <code>target_sizes</code> is
specified). Each entry of each <code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p>semantic_segmentation</p>
`}}),oo=new Q({}),ao=new k({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L620"}}),no=new k({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L647",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new yt({props:{$$slots:{default:[zh]},$$scope:{ctx:F}}}),Re=new Tt({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[Ah]},$$scope:{ctx:F}}}),io=new Q({}),lo=new k({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L732"}}),mo=new k({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"},{anchor:"transformers.BeitForMaskedImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new yt({props:{$$slots:{default:[qh]},$$scope:{ctx:F}}}),Ge=new Tt({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[Lh]},$$scope:{ctx:F}}}),po=new Q({}),ho=new k({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L832"}}),go=new k({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L845",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new yt({props:{$$slots:{default:[Sh]},$$scope:{ctx:F}}}),Ye=new Tt({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[Nh]},$$scope:{ctx:F}}}),_o=new Q({}),bo=new k({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L1156"}}),xo=new k({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_beit.py#L1200",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new yt({props:{$$slots:{default:[Oh]},$$scope:{ctx:F}}}),et=new Tt({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[Dh]},$$scope:{ctx:F}}}),$o=new Q({}),yo=new k({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_flax_beit.py#L749"}}),jo=new k({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
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
  href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ot=new yt({props:{$$slots:{default:[Vh]},$$scope:{ctx:F}}}),at=new Tt({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[Wh]},$$scope:{ctx:F}}}),Po=new Q({}),Co=new k({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_flax_beit.py#L833"}}),Do=new k({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new yt({props:{$$slots:{default:[Uh]},$$scope:{ctx:F}}}),nt=new Tt({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[Rh]},$$scope:{ctx:F}}}),Vo=new Q({}),Wo=new k({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_flax_beit.py#L920"}}),Yo=new k({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lt=new yt({props:{$$slots:{default:[Hh]},$$scope:{ctx:F}}}),dt=new Tt({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[Jh]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=m(),g=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=m(),E=a("span"),hn=n("BEiT"),ir=m(),me=a("h2"),Ae=a("a"),Da=a("span"),w(Et.$$.fragment),fn=m(),Va=a("span"),un=n("Overview"),lr=m(),W=a("p"),gn=n("The BEiT model was proposed in "),kt=a("a"),_n=n("BEiT: BERT Pre-Training of Image Transformers"),bn=n(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Mt=a("a"),vn=n("original ViT paper"),wn=n(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),It=a("a"),xn=n("DALL-E model"),$n=n(` given masked
patches.`),dr=m(),ea=a("p"),yn=n("The abstract from the paper is the following:"),cr=m(),ta=a("p"),Wa=a("em"),Tn=n(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),mr=m(),oa=a("p"),Bn=n("Tips:"),pr=m(),C=a("ul"),M=a("li"),Fn=n(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),aa=a("a"),En=n("original model (ViT)"),kn=n(" as well as "),sa=a("a"),Mn=n("Data-efficient Image Transformers (DeiT)"),In=n(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),jt=a("a"),jn=n("here"),Pn=n(` (you can just replace
`),ra=a("a"),Cn=n("ViTFeatureExtractor"),zn=n(" by "),na=a("a"),An=n("BeitFeatureExtractor"),qn=n(` and
`),ia=a("a"),Ln=n("ViTForImageClassification"),Sn=n(" by "),la=a("a"),Nn=n("BeitForImageClassification"),On=n(")."),Dn=m(),Pt=a("li"),Vn=n(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Ct=a("a"),Wn=n("here"),Un=n("."),Rn=m(),zt=a("li"),Hn=n(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),da=a("a"),Jn=n("BeitFeatureExtractor"),Gn=n(" to resize (or rescale) and normalize images for the model."),Xn=m(),pe=a("li"),Kn=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ua=a("code"),Yn=n("microsoft/beit-base-patch16-224"),Qn=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),At=a("a"),Zn=n("hub"),ei=n("."),ti=m(),he=a("li"),oi=n("The available checkpoints are either (1) pre-trained on "),qt=a("a"),ai=n("ImageNet-22k"),si=n(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Lt=a("a"),ri=n("ImageNet-1k"),ni=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),ii=m(),O=a("li"),li=n(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Ra=a("code"),di=n("use_relative_position_bias"),ci=n(` or the
`),Ha=a("code"),mi=n("use_relative_position_bias"),pi=n(" attribute of "),ca=a("a"),hi=n("BeitConfig"),fi=n(" to "),Ja=a("code"),ui=n("True"),gi=n(` in order to add
position embeddings.`),hr=m(),qe=a("img"),fr=m(),St=a("small"),_i=n("BEiT pre-training. Taken from the "),ma=a("a"),bi=n("original paper."),ur=m(),U=a("p"),vi=n("This model was contributed by "),Nt=a("a"),wi=n("nielsr"),xi=n(`. The JAX/FLAX version of this model was
contributed by `),Ot=a("a"),$i=n("kamalkraj"),yi=n(". The original code can be found "),Dt=a("a"),Ti=n("here"),Bi=n("."),gr=m(),fe=a("h2"),Le=a("a"),Ga=a("span"),w(Vt.$$.fragment),Fi=m(),Xa=a("span"),Ei=n("BEiT specific outputs"),_r=m(),ue=a("div"),w(Wt.$$.fragment),ki=m(),Ut=a("p"),Mi=n("Class for outputs of "),pa=a("a"),Ii=n("BeitModel"),ji=n("."),br=m(),ge=a("div"),w(Rt.$$.fragment),Pi=m(),Ht=a("p"),Ci=n("Class for outputs of "),ha=a("a"),zi=n("FlaxBeitModel"),Ai=n("."),vr=m(),_e=a("h2"),Se=a("a"),Ka=a("span"),w(Jt.$$.fragment),qi=m(),Ya=a("span"),Li=n("BeitConfig"),wr=m(),Z=a("div"),w(Gt.$$.fragment),Si=m(),be=a("p"),Ni=n("This is the configuration class to store the configuration of a "),fa=a("a"),Oi=n("BeitModel"),Di=n(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Xt=a("a"),Vi=n("microsoft/beit-base-patch16-224-pt22k"),Wi=n(" architecture."),Ui=m(),w(Ne.$$.fragment),xr=m(),ve=a("h2"),Oe=a("a"),Qa=a("span"),w(Kt.$$.fragment),Ri=m(),Za=a("span"),Hi=n("BeitFeatureExtractor"),$r=m(),A=a("div"),w(Yt.$$.fragment),Ji=m(),es=a("p"),Gi=n("Constructs a BEiT feature extractor."),Xi=m(),Qt=a("p"),Ki=n("This feature extractor inherits from "),ua=a("a"),Yi=n("FeatureExtractionMixin"),Qi=n(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Zi=m(),ie=a("div"),w(Zt.$$.fragment),el=m(),ts=a("p"),tl=n("Main method to prepare for the model one or several image(s)."),ol=m(),w(De.$$.fragment),al=m(),Ve=a("div"),w(eo.$$.fragment),sl=m(),to=a("p"),rl=n("Converts the output of "),ga=a("a"),nl=n("BeitForSemanticSegmentation"),il=n(" into semantic segmentation maps. Only supports PyTorch."),yr=m(),we=a("h2"),We=a("a"),os=a("span"),w(oo.$$.fragment),ll=m(),as=a("span"),dl=n("BeitModel"),Tr=m(),ee=a("div"),w(ao.$$.fragment),cl=m(),so=a("p"),ml=n(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ro=a("a"),pl=n("torch.nn.Module"),hl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl=m(),R=a("div"),w(no.$$.fragment),ul=m(),xe=a("p"),gl=n("The "),_a=a("a"),_l=n("BeitModel"),bl=n(" forward method, overrides the "),ss=a("code"),vl=n("__call__"),wl=n(" special method."),xl=m(),w(Ue.$$.fragment),$l=m(),w(Re.$$.fragment),Br=m(),$e=a("h2"),He=a("a"),rs=a("span"),w(io.$$.fragment),yl=m(),ns=a("span"),Tl=n("BeitForMaskedImageModeling"),Fr=m(),te=a("div"),w(lo.$$.fragment),Bl=m(),oe=a("p"),Fl=n(`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ba=a("a"),El=n("AutoModelForMaskedImageModeling"),kl=n(`, so you
will need to use `),va=a("a"),Ml=n("BeitForMaskedImageModeling"),Il=n(` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),co=a("a"),jl=n("torch.nn.Module"),Pl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=m(),H=a("div"),w(mo.$$.fragment),zl=m(),ye=a("p"),Al=n("The "),wa=a("a"),ql=n("BeitForMaskedImageModeling"),Ll=n(" forward method, overrides the "),is=a("code"),Sl=n("__call__"),Nl=n(" special method."),Ol=m(),w(Je.$$.fragment),Dl=m(),w(Ge.$$.fragment),Er=m(),Te=a("h2"),Xe=a("a"),ls=a("span"),w(po.$$.fragment),Vl=m(),ds=a("span"),Wl=n("BeitForImageClassification"),kr=m(),D=a("div"),w(ho.$$.fragment),Ul=m(),cs=a("p"),Rl=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Hl=m(),fo=a("p"),Jl=n("This model is a PyTorch "),uo=a("a"),Gl=n("torch.nn.Module"),Xl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kl=m(),J=a("div"),w(go.$$.fragment),Yl=m(),Be=a("p"),Ql=n("The "),xa=a("a"),Zl=n("BeitForImageClassification"),ed=n(" forward method, overrides the "),ms=a("code"),td=n("__call__"),od=n(" special method."),ad=m(),w(Ke.$$.fragment),sd=m(),w(Ye.$$.fragment),Mr=m(),Fe=a("h2"),Qe=a("a"),ps=a("span"),w(_o.$$.fragment),rd=m(),hs=a("span"),nd=n("BeitForSemanticSegmentation"),Ir=m(),V=a("div"),w(bo.$$.fragment),id=m(),fs=a("p"),ld=n("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),dd=m(),vo=a("p"),cd=n("This model is a PyTorch "),wo=a("a"),md=n("torch.nn.Module"),pd=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hd=m(),G=a("div"),w(xo.$$.fragment),fd=m(),Ee=a("p"),ud=n("The "),$a=a("a"),gd=n("BeitForSemanticSegmentation"),_d=n(" forward method, overrides the "),us=a("code"),bd=n("__call__"),vd=n(" special method."),wd=m(),w(Ze.$$.fragment),xd=m(),w(et.$$.fragment),jr=m(),ke=a("h2"),tt=a("a"),gs=a("span"),w($o.$$.fragment),$d=m(),_s=a("span"),yd=n("FlaxBeitModel"),Pr=m(),I=a("div"),w(yo.$$.fragment),Td=m(),bs=a("p"),Bd=n("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),Fd=m(),To=a("p"),Ed=n("This model inherits from "),ya=a("a"),kd=n("FlaxPreTrainedModel"),Md=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Id=m(),Bo=a("p"),jd=n("This model is also a Flax Linen "),Fo=a("a"),Pd=n("flax.linen.Module"),Cd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zd=m(),vs=a("p"),Ad=n("Finally, this model supports inherent JAX features such as:"),qd=m(),ae=a("ul"),ws=a("li"),Eo=a("a"),Ld=n("Just-In-Time (JIT) compilation"),Sd=m(),xs=a("li"),ko=a("a"),Nd=n("Automatic Differentiation"),Od=m(),$s=a("li"),Mo=a("a"),Dd=n("Vectorization"),Vd=m(),ys=a("li"),Io=a("a"),Wd=n("Parallelization"),Ud=m(),X=a("div"),w(jo.$$.fragment),Rd=m(),Me=a("p"),Hd=n("The "),Ts=a("code"),Jd=n("FlaxBeitPreTrainedModel"),Gd=n(" forward method, overrides the "),Bs=a("code"),Xd=n("__call__"),Kd=n(" special method."),Yd=m(),w(ot.$$.fragment),Qd=m(),w(at.$$.fragment),Cr=m(),Ie=a("h2"),st=a("a"),Fs=a("span"),w(Po.$$.fragment),Zd=m(),Es=a("span"),ec=n("FlaxBeitForMaskedImageModeling"),zr=m(),j=a("div"),w(Co.$$.fragment),tc=m(),ks=a("p"),oc=n("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),ac=m(),zo=a("p"),sc=n("This model inherits from "),Ta=a("a"),rc=n("FlaxPreTrainedModel"),nc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ic=m(),Ao=a("p"),lc=n("This model is also a Flax Linen "),qo=a("a"),dc=n("flax.linen.Module"),cc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mc=m(),Ms=a("p"),pc=n("Finally, this model supports inherent JAX features such as:"),hc=m(),se=a("ul"),Is=a("li"),Lo=a("a"),fc=n("Just-In-Time (JIT) compilation"),uc=m(),js=a("li"),So=a("a"),gc=n("Automatic Differentiation"),_c=m(),Ps=a("li"),No=a("a"),bc=n("Vectorization"),vc=m(),Cs=a("li"),Oo=a("a"),wc=n("Parallelization"),xc=m(),q=a("div"),w(Do.$$.fragment),$c=m(),je=a("p"),yc=n("The "),zs=a("code"),Tc=n("FlaxBeitPreTrainedModel"),Bc=n(" forward method, overrides the "),As=a("code"),Fc=n("__call__"),Ec=n(" special method."),kc=m(),w(rt.$$.fragment),Mc=m(),Pe=a("p"),Ic=n("bool_masked_pos ("),qs=a("code"),jc=n("numpy.ndarray"),Pc=n(" of shape "),Ls=a("code"),Cc=n("(batch_size, num_patches)"),zc=n(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Ac=m(),w(nt.$$.fragment),Ar=m(),Ce=a("h2"),it=a("a"),Ss=a("span"),w(Vo.$$.fragment),qc=m(),Ns=a("span"),Lc=n("FlaxBeitForImageClassification"),qr=m(),P=a("div"),w(Wo.$$.fragment),Sc=m(),Os=a("p"),Nc=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Oc=m(),Uo=a("p"),Dc=n("This model inherits from "),Ba=a("a"),Vc=n("FlaxPreTrainedModel"),Wc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uc=m(),Ro=a("p"),Rc=n("This model is also a Flax Linen "),Ho=a("a"),Hc=n("flax.linen.Module"),Jc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gc=m(),Ds=a("p"),Xc=n("Finally, this model supports inherent JAX features such as:"),Kc=m(),re=a("ul"),Vs=a("li"),Jo=a("a"),Yc=n("Just-In-Time (JIT) compilation"),Qc=m(),Ws=a("li"),Go=a("a"),Zc=n("Automatic Differentiation"),em=m(),Us=a("li"),Xo=a("a"),tm=n("Vectorization"),om=m(),Rs=a("li"),Ko=a("a"),am=n("Parallelization"),sm=m(),K=a("div"),w(Yo.$$.fragment),rm=m(),ze=a("p"),nm=n("The "),Hs=a("code"),im=n("FlaxBeitPreTrainedModel"),lm=n(" forward method, overrides the "),Js=a("code"),dm=n("__call__"),cm=n(" special method."),mm=m(),w(lt.$$.fragment),pm=m(),w(dt.$$.fragment),this.h()},l(o){const u=Mh('[data-svelte="svelte-1phssyn"]',document.head);c=s(u,"META",{name:!0,content:!0}),u.forEach(t),v=p(o),g=s(o,"H1",{class:!0});var Qo=r(g);f=s(Qo,"A",{id:!0,class:!0,href:!0});var Gs=r(f);b=s(Gs,"SPAN",{});var Xs=r(b);x(l.$$.fragment,Xs),Xs.forEach(t),Gs.forEach(t),h=p(Qo),E=s(Qo,"SPAN",{});var Ks=r(E);hn=i(Ks,"BEiT"),Ks.forEach(t),Qo.forEach(t),ir=p(o),me=s(o,"H2",{class:!0});var Zo=r(me);Ae=s(Zo,"A",{id:!0,class:!0,href:!0});var Ys=r(Ae);Da=s(Ys,"SPAN",{});var Qs=r(Da);x(Et.$$.fragment,Qs),Qs.forEach(t),Ys.forEach(t),fn=p(Zo),Va=s(Zo,"SPAN",{});var Zs=r(Va);un=i(Zs,"Overview"),Zs.forEach(t),Zo.forEach(t),lr=p(o),W=s(o,"P",{});var ne=r(W);gn=i(ne,"The BEiT model was proposed in "),kt=s(ne,"A",{href:!0,rel:!0});var er=r(kt);_n=i(er,"BEiT: BERT Pre-Training of Image Transformers"),er.forEach(t),bn=i(ne,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Mt=s(ne,"A",{href:!0,rel:!0});var tr=r(Mt);vn=i(tr,"original ViT paper"),tr.forEach(t),wn=i(ne,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),It=s(ne,"A",{href:!0,rel:!0});var or=r(It);xn=i(or,"DALL-E model"),or.forEach(t),$n=i(ne,` given masked
patches.`),ne.forEach(t),dr=p(o),ea=s(o,"P",{});var ar=r(ea);yn=i(ar,"The abstract from the paper is the following:"),ar.forEach(t),cr=p(o),ta=s(o,"P",{});var sr=r(ta);Wa=s(sr,"EM",{});var rr=r(Wa);Tn=i(rr,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),rr.forEach(t),sr.forEach(t),mr=p(o),oa=s(o,"P",{});var nr=r(oa);Bn=i(nr,"Tips:"),nr.forEach(t),pr=p(o),C=s(o,"UL",{});var Y=r(C);M=s(Y,"LI",{});var z=r(M);Fn=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),aa=s(z,"A",{href:!0});var um=r(aa);En=i(um,"original model (ViT)"),um.forEach(t),kn=i(z," as well as "),sa=s(z,"A",{href:!0});var gm=r(sa);Mn=i(gm,"Data-efficient Image Transformers (DeiT)"),gm.forEach(t),In=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),jt=s(z,"A",{href:!0,rel:!0});var _m=r(jt);jn=i(_m,"here"),_m.forEach(t),Pn=i(z,` (you can just replace
`),ra=s(z,"A",{href:!0});var bm=r(ra);Cn=i(bm,"ViTFeatureExtractor"),bm.forEach(t),zn=i(z," by "),na=s(z,"A",{href:!0});var vm=r(na);An=i(vm,"BeitFeatureExtractor"),vm.forEach(t),qn=i(z,` and
`),ia=s(z,"A",{href:!0});var wm=r(ia);Ln=i(wm,"ViTForImageClassification"),wm.forEach(t),Sn=i(z," by "),la=s(z,"A",{href:!0});var xm=r(la);Nn=i(xm,"BeitForImageClassification"),xm.forEach(t),On=i(z,")."),z.forEach(t),Dn=p(Y),Pt=s(Y,"LI",{});var Sr=r(Pt);Vn=i(Sr,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Ct=s(Sr,"A",{href:!0,rel:!0});var $m=r(Ct);Wn=i($m,"here"),$m.forEach(t),Un=i(Sr,"."),Sr.forEach(t),Rn=p(Y),zt=s(Y,"LI",{});var Nr=r(zt);Hn=i(Nr,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),da=s(Nr,"A",{href:!0});var ym=r(da);Jn=i(ym,"BeitFeatureExtractor"),ym.forEach(t),Gn=i(Nr," to resize (or rescale) and normalize images for the model."),Nr.forEach(t),Xn=p(Y),pe=s(Y,"LI",{});var Fa=r(pe);Kn=i(Fa,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ua=s(Fa,"CODE",{});var Tm=r(Ua);Yn=i(Tm,"microsoft/beit-base-patch16-224"),Tm.forEach(t),Qn=i(Fa,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),At=s(Fa,"A",{href:!0,rel:!0});var Bm=r(At);Zn=i(Bm,"hub"),Bm.forEach(t),ei=i(Fa,"."),Fa.forEach(t),ti=p(Y),he=s(Y,"LI",{});var Ea=r(he);oi=i(Ea,"The available checkpoints are either (1) pre-trained on "),qt=s(Ea,"A",{href:!0,rel:!0});var Fm=r(qt);ai=i(Fm,"ImageNet-22k"),Fm.forEach(t),si=i(Ea,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Lt=s(Ea,"A",{href:!0,rel:!0});var Em=r(Lt);ri=i(Em,"ImageNet-1k"),Em.forEach(t),ni=i(Ea,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Ea.forEach(t),ii=p(Y),O=s(Y,"LI",{});var le=r(O);li=i(le,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Ra=s(le,"CODE",{});var km=r(Ra);di=i(km,"use_relative_position_bias"),km.forEach(t),ci=i(le,` or the
`),Ha=s(le,"CODE",{});var Mm=r(Ha);mi=i(Mm,"use_relative_position_bias"),Mm.forEach(t),pi=i(le," attribute of "),ca=s(le,"A",{href:!0});var Im=r(ca);hi=i(Im,"BeitConfig"),Im.forEach(t),fi=i(le," to "),Ja=s(le,"CODE",{});var jm=r(Ja);ui=i(jm,"True"),jm.forEach(t),gi=i(le,` in order to add
position embeddings.`),le.forEach(t),Y.forEach(t),hr=p(o),qe=s(o,"IMG",{src:!0,alt:!0,width:!0}),fr=p(o),St=s(o,"SMALL",{});var hm=r(St);_i=i(hm,"BEiT pre-training. Taken from the "),ma=s(hm,"A",{href:!0});var Pm=r(ma);bi=i(Pm,"original paper."),Pm.forEach(t),hm.forEach(t),ur=p(o),U=s(o,"P",{});var ct=r(U);vi=i(ct,"This model was contributed by "),Nt=s(ct,"A",{href:!0,rel:!0});var Cm=r(Nt);wi=i(Cm,"nielsr"),Cm.forEach(t),xi=i(ct,`. The JAX/FLAX version of this model was
contributed by `),Ot=s(ct,"A",{href:!0,rel:!0});var zm=r(Ot);$i=i(zm,"kamalkraj"),zm.forEach(t),yi=i(ct,". The original code can be found "),Dt=s(ct,"A",{href:!0,rel:!0});var Am=r(Dt);Ti=i(Am,"here"),Am.forEach(t),Bi=i(ct,"."),ct.forEach(t),gr=p(o),fe=s(o,"H2",{class:!0});var Or=r(fe);Le=s(Or,"A",{id:!0,class:!0,href:!0});var qm=r(Le);Ga=s(qm,"SPAN",{});var Lm=r(Ga);x(Vt.$$.fragment,Lm),Lm.forEach(t),qm.forEach(t),Fi=p(Or),Xa=s(Or,"SPAN",{});var Sm=r(Xa);Ei=i(Sm,"BEiT specific outputs"),Sm.forEach(t),Or.forEach(t),_r=p(o),ue=s(o,"DIV",{class:!0});var Dr=r(ue);x(Wt.$$.fragment,Dr),ki=p(Dr),Ut=s(Dr,"P",{});var Vr=r(Ut);Mi=i(Vr,"Class for outputs of "),pa=s(Vr,"A",{href:!0});var Nm=r(pa);Ii=i(Nm,"BeitModel"),Nm.forEach(t),ji=i(Vr,"."),Vr.forEach(t),Dr.forEach(t),br=p(o),ge=s(o,"DIV",{class:!0});var Wr=r(ge);x(Rt.$$.fragment,Wr),Pi=p(Wr),Ht=s(Wr,"P",{});var Ur=r(Ht);Ci=i(Ur,"Class for outputs of "),ha=s(Ur,"A",{href:!0});var Om=r(ha);zi=i(Om,"FlaxBeitModel"),Om.forEach(t),Ai=i(Ur,"."),Ur.forEach(t),Wr.forEach(t),vr=p(o),_e=s(o,"H2",{class:!0});var Rr=r(_e);Se=s(Rr,"A",{id:!0,class:!0,href:!0});var Dm=r(Se);Ka=s(Dm,"SPAN",{});var Vm=r(Ka);x(Jt.$$.fragment,Vm),Vm.forEach(t),Dm.forEach(t),qi=p(Rr),Ya=s(Rr,"SPAN",{});var Wm=r(Ya);Li=i(Wm,"BeitConfig"),Wm.forEach(t),Rr.forEach(t),wr=p(o),Z=s(o,"DIV",{class:!0});var ka=r(Z);x(Gt.$$.fragment,ka),Si=p(ka),be=s(ka,"P",{});var Ma=r(be);Ni=i(Ma,"This is the configuration class to store the configuration of a "),fa=s(Ma,"A",{href:!0});var Um=r(fa);Oi=i(Um,"BeitModel"),Um.forEach(t),Di=i(Ma,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Xt=s(Ma,"A",{href:!0,rel:!0});var Rm=r(Xt);Vi=i(Rm,"microsoft/beit-base-patch16-224-pt22k"),Rm.forEach(t),Wi=i(Ma," architecture."),Ma.forEach(t),Ui=p(ka),x(Ne.$$.fragment,ka),ka.forEach(t),xr=p(o),ve=s(o,"H2",{class:!0});var Hr=r(ve);Oe=s(Hr,"A",{id:!0,class:!0,href:!0});var Hm=r(Oe);Qa=s(Hm,"SPAN",{});var Jm=r(Qa);x(Kt.$$.fragment,Jm),Jm.forEach(t),Hm.forEach(t),Ri=p(Hr),Za=s(Hr,"SPAN",{});var Gm=r(Za);Hi=i(Gm,"BeitFeatureExtractor"),Gm.forEach(t),Hr.forEach(t),$r=p(o),A=s(o,"DIV",{class:!0});var de=r(A);x(Yt.$$.fragment,de),Ji=p(de),es=s(de,"P",{});var Xm=r(es);Gi=i(Xm,"Constructs a BEiT feature extractor."),Xm.forEach(t),Xi=p(de),Qt=s(de,"P",{});var Jr=r(Qt);Ki=i(Jr,"This feature extractor inherits from "),ua=s(Jr,"A",{href:!0});var Km=r(ua);Yi=i(Km,"FeatureExtractionMixin"),Km.forEach(t),Qi=i(Jr,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Jr.forEach(t),Zi=p(de),ie=s(de,"DIV",{class:!0});var Ia=r(ie);x(Zt.$$.fragment,Ia),el=p(Ia),ts=s(Ia,"P",{});var Ym=r(ts);tl=i(Ym,"Main method to prepare for the model one or several image(s)."),Ym.forEach(t),ol=p(Ia),x(De.$$.fragment,Ia),Ia.forEach(t),al=p(de),Ve=s(de,"DIV",{class:!0});var Gr=r(Ve);x(eo.$$.fragment,Gr),sl=p(Gr),to=s(Gr,"P",{});var Xr=r(to);rl=i(Xr,"Converts the output of "),ga=s(Xr,"A",{href:!0});var Qm=r(ga);nl=i(Qm,"BeitForSemanticSegmentation"),Qm.forEach(t),il=i(Xr," into semantic segmentation maps. Only supports PyTorch."),Xr.forEach(t),Gr.forEach(t),de.forEach(t),yr=p(o),we=s(o,"H2",{class:!0});var Kr=r(we);We=s(Kr,"A",{id:!0,class:!0,href:!0});var Zm=r(We);os=s(Zm,"SPAN",{});var ep=r(os);x(oo.$$.fragment,ep),ep.forEach(t),Zm.forEach(t),ll=p(Kr),as=s(Kr,"SPAN",{});var tp=r(as);dl=i(tp,"BeitModel"),tp.forEach(t),Kr.forEach(t),Tr=p(o),ee=s(o,"DIV",{class:!0});var ja=r(ee);x(ao.$$.fragment,ja),cl=p(ja),so=s(ja,"P",{});var Yr=r(so);ml=i(Yr,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ro=s(Yr,"A",{href:!0,rel:!0});var op=r(ro);pl=i(op,"torch.nn.Module"),op.forEach(t),hl=i(Yr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yr.forEach(t),fl=p(ja),R=s(ja,"DIV",{class:!0});var mt=r(R);x(no.$$.fragment,mt),ul=p(mt),xe=s(mt,"P",{});var Pa=r(xe);gl=i(Pa,"The "),_a=s(Pa,"A",{href:!0});var ap=r(_a);_l=i(ap,"BeitModel"),ap.forEach(t),bl=i(Pa," forward method, overrides the "),ss=s(Pa,"CODE",{});var sp=r(ss);vl=i(sp,"__call__"),sp.forEach(t),wl=i(Pa," special method."),Pa.forEach(t),xl=p(mt),x(Ue.$$.fragment,mt),$l=p(mt),x(Re.$$.fragment,mt),mt.forEach(t),ja.forEach(t),Br=p(o),$e=s(o,"H2",{class:!0});var Qr=r($e);He=s(Qr,"A",{id:!0,class:!0,href:!0});var rp=r(He);rs=s(rp,"SPAN",{});var np=r(rs);x(io.$$.fragment,np),np.forEach(t),rp.forEach(t),yl=p(Qr),ns=s(Qr,"SPAN",{});var ip=r(ns);Tl=i(ip,"BeitForMaskedImageModeling"),ip.forEach(t),Qr.forEach(t),Fr=p(o),te=s(o,"DIV",{class:!0});var Ca=r(te);x(lo.$$.fragment,Ca),Bl=p(Ca),oe=s(Ca,"P",{});var pt=r(oe);Fl=i(pt,`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ba=s(pt,"A",{href:!0});var lp=r(ba);El=i(lp,"AutoModelForMaskedImageModeling"),lp.forEach(t),kl=i(pt,`, so you
will need to use `),va=s(pt,"A",{href:!0});var dp=r(va);Ml=i(dp,"BeitForMaskedImageModeling"),dp.forEach(t),Il=i(pt,` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),co=s(pt,"A",{href:!0,rel:!0});var cp=r(co);jl=i(cp,"torch.nn.Module"),cp.forEach(t),Pl=i(pt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pt.forEach(t),Cl=p(Ca),H=s(Ca,"DIV",{class:!0});var ht=r(H);x(mo.$$.fragment,ht),zl=p(ht),ye=s(ht,"P",{});var za=r(ye);Al=i(za,"The "),wa=s(za,"A",{href:!0});var mp=r(wa);ql=i(mp,"BeitForMaskedImageModeling"),mp.forEach(t),Ll=i(za," forward method, overrides the "),is=s(za,"CODE",{});var pp=r(is);Sl=i(pp,"__call__"),pp.forEach(t),Nl=i(za," special method."),za.forEach(t),Ol=p(ht),x(Je.$$.fragment,ht),Dl=p(ht),x(Ge.$$.fragment,ht),ht.forEach(t),Ca.forEach(t),Er=p(o),Te=s(o,"H2",{class:!0});var Zr=r(Te);Xe=s(Zr,"A",{id:!0,class:!0,href:!0});var hp=r(Xe);ls=s(hp,"SPAN",{});var fp=r(ls);x(po.$$.fragment,fp),fp.forEach(t),hp.forEach(t),Vl=p(Zr),ds=s(Zr,"SPAN",{});var up=r(ds);Wl=i(up,"BeitForImageClassification"),up.forEach(t),Zr.forEach(t),kr=p(o),D=s(o,"DIV",{class:!0});var ft=r(D);x(ho.$$.fragment,ft),Ul=p(ft),cs=s(ft,"P",{});var gp=r(cs);Rl=i(gp,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),gp.forEach(t),Hl=p(ft),fo=s(ft,"P",{});var en=r(fo);Jl=i(en,"This model is a PyTorch "),uo=s(en,"A",{href:!0,rel:!0});var _p=r(uo);Gl=i(_p,"torch.nn.Module"),_p.forEach(t),Xl=i(en,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),en.forEach(t),Kl=p(ft),J=s(ft,"DIV",{class:!0});var ut=r(J);x(go.$$.fragment,ut),Yl=p(ut),Be=s(ut,"P",{});var Aa=r(Be);Ql=i(Aa,"The "),xa=s(Aa,"A",{href:!0});var bp=r(xa);Zl=i(bp,"BeitForImageClassification"),bp.forEach(t),ed=i(Aa," forward method, overrides the "),ms=s(Aa,"CODE",{});var vp=r(ms);td=i(vp,"__call__"),vp.forEach(t),od=i(Aa," special method."),Aa.forEach(t),ad=p(ut),x(Ke.$$.fragment,ut),sd=p(ut),x(Ye.$$.fragment,ut),ut.forEach(t),ft.forEach(t),Mr=p(o),Fe=s(o,"H2",{class:!0});var tn=r(Fe);Qe=s(tn,"A",{id:!0,class:!0,href:!0});var wp=r(Qe);ps=s(wp,"SPAN",{});var xp=r(ps);x(_o.$$.fragment,xp),xp.forEach(t),wp.forEach(t),rd=p(tn),hs=s(tn,"SPAN",{});var $p=r(hs);nd=i($p,"BeitForSemanticSegmentation"),$p.forEach(t),tn.forEach(t),Ir=p(o),V=s(o,"DIV",{class:!0});var gt=r(V);x(bo.$$.fragment,gt),id=p(gt),fs=s(gt,"P",{});var yp=r(fs);ld=i(yp,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),yp.forEach(t),dd=p(gt),vo=s(gt,"P",{});var on=r(vo);cd=i(on,"This model is a PyTorch "),wo=s(on,"A",{href:!0,rel:!0});var Tp=r(wo);md=i(Tp,"torch.nn.Module"),Tp.forEach(t),pd=i(on,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),on.forEach(t),hd=p(gt),G=s(gt,"DIV",{class:!0});var _t=r(G);x(xo.$$.fragment,_t),fd=p(_t),Ee=s(_t,"P",{});var qa=r(Ee);ud=i(qa,"The "),$a=s(qa,"A",{href:!0});var Bp=r($a);gd=i(Bp,"BeitForSemanticSegmentation"),Bp.forEach(t),_d=i(qa," forward method, overrides the "),us=s(qa,"CODE",{});var Fp=r(us);bd=i(Fp,"__call__"),Fp.forEach(t),vd=i(qa," special method."),qa.forEach(t),wd=p(_t),x(Ze.$$.fragment,_t),xd=p(_t),x(et.$$.fragment,_t),_t.forEach(t),gt.forEach(t),jr=p(o),ke=s(o,"H2",{class:!0});var an=r(ke);tt=s(an,"A",{id:!0,class:!0,href:!0});var Ep=r(tt);gs=s(Ep,"SPAN",{});var kp=r(gs);x($o.$$.fragment,kp),kp.forEach(t),Ep.forEach(t),$d=p(an),_s=s(an,"SPAN",{});var Mp=r(_s);yd=i(Mp,"FlaxBeitModel"),Mp.forEach(t),an.forEach(t),Pr=p(o),I=s(o,"DIV",{class:!0});var L=r(I);x(yo.$$.fragment,L),Td=p(L),bs=s(L,"P",{});var Ip=r(bs);Bd=i(Ip,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),Ip.forEach(t),Fd=p(L),To=s(L,"P",{});var sn=r(To);Ed=i(sn,"This model inherits from "),ya=s(sn,"A",{href:!0});var jp=r(ya);kd=i(jp,"FlaxPreTrainedModel"),jp.forEach(t),Md=i(sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sn.forEach(t),Id=p(L),Bo=s(L,"P",{});var rn=r(Bo);jd=i(rn,"This model is also a Flax Linen "),Fo=s(rn,"A",{href:!0,rel:!0});var Pp=r(Fo);Pd=i(Pp,"flax.linen.Module"),Pp.forEach(t),Cd=i(rn,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rn.forEach(t),zd=p(L),vs=s(L,"P",{});var Cp=r(vs);Ad=i(Cp,"Finally, this model supports inherent JAX features such as:"),Cp.forEach(t),qd=p(L),ae=s(L,"UL",{});var bt=r(ae);ws=s(bt,"LI",{});var zp=r(ws);Eo=s(zp,"A",{href:!0,rel:!0});var Ap=r(Eo);Ld=i(Ap,"Just-In-Time (JIT) compilation"),Ap.forEach(t),zp.forEach(t),Sd=p(bt),xs=s(bt,"LI",{});var qp=r(xs);ko=s(qp,"A",{href:!0,rel:!0});var Lp=r(ko);Nd=i(Lp,"Automatic Differentiation"),Lp.forEach(t),qp.forEach(t),Od=p(bt),$s=s(bt,"LI",{});var Sp=r($s);Mo=s(Sp,"A",{href:!0,rel:!0});var Np=r(Mo);Dd=i(Np,"Vectorization"),Np.forEach(t),Sp.forEach(t),Vd=p(bt),ys=s(bt,"LI",{});var Op=r(ys);Io=s(Op,"A",{href:!0,rel:!0});var Dp=r(Io);Wd=i(Dp,"Parallelization"),Dp.forEach(t),Op.forEach(t),bt.forEach(t),Ud=p(L),X=s(L,"DIV",{class:!0});var vt=r(X);x(jo.$$.fragment,vt),Rd=p(vt),Me=s(vt,"P",{});var La=r(Me);Hd=i(La,"The "),Ts=s(La,"CODE",{});var Vp=r(Ts);Jd=i(Vp,"FlaxBeitPreTrainedModel"),Vp.forEach(t),Gd=i(La," forward method, overrides the "),Bs=s(La,"CODE",{});var Wp=r(Bs);Xd=i(Wp,"__call__"),Wp.forEach(t),Kd=i(La," special method."),La.forEach(t),Yd=p(vt),x(ot.$$.fragment,vt),Qd=p(vt),x(at.$$.fragment,vt),vt.forEach(t),L.forEach(t),Cr=p(o),Ie=s(o,"H2",{class:!0});var nn=r(Ie);st=s(nn,"A",{id:!0,class:!0,href:!0});var Up=r(st);Fs=s(Up,"SPAN",{});var Rp=r(Fs);x(Po.$$.fragment,Rp),Rp.forEach(t),Up.forEach(t),Zd=p(nn),Es=s(nn,"SPAN",{});var Hp=r(Es);ec=i(Hp,"FlaxBeitForMaskedImageModeling"),Hp.forEach(t),nn.forEach(t),zr=p(o),j=s(o,"DIV",{class:!0});var S=r(j);x(Co.$$.fragment,S),tc=p(S),ks=s(S,"P",{});var Jp=r(ks);oc=i(Jp,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Jp.forEach(t),ac=p(S),zo=s(S,"P",{});var ln=r(zo);sc=i(ln,"This model inherits from "),Ta=s(ln,"A",{href:!0});var Gp=r(Ta);rc=i(Gp,"FlaxPreTrainedModel"),Gp.forEach(t),nc=i(ln,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ln.forEach(t),ic=p(S),Ao=s(S,"P",{});var dn=r(Ao);lc=i(dn,"This model is also a Flax Linen "),qo=s(dn,"A",{href:!0,rel:!0});var Xp=r(qo);dc=i(Xp,"flax.linen.Module"),Xp.forEach(t),cc=i(dn,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dn.forEach(t),mc=p(S),Ms=s(S,"P",{});var Kp=r(Ms);pc=i(Kp,"Finally, this model supports inherent JAX features such as:"),Kp.forEach(t),hc=p(S),se=s(S,"UL",{});var wt=r(se);Is=s(wt,"LI",{});var Yp=r(Is);Lo=s(Yp,"A",{href:!0,rel:!0});var Qp=r(Lo);fc=i(Qp,"Just-In-Time (JIT) compilation"),Qp.forEach(t),Yp.forEach(t),uc=p(wt),js=s(wt,"LI",{});var Zp=r(js);So=s(Zp,"A",{href:!0,rel:!0});var eh=r(So);gc=i(eh,"Automatic Differentiation"),eh.forEach(t),Zp.forEach(t),_c=p(wt),Ps=s(wt,"LI",{});var th=r(Ps);No=s(th,"A",{href:!0,rel:!0});var oh=r(No);bc=i(oh,"Vectorization"),oh.forEach(t),th.forEach(t),vc=p(wt),Cs=s(wt,"LI",{});var ah=r(Cs);Oo=s(ah,"A",{href:!0,rel:!0});var sh=r(Oo);wc=i(sh,"Parallelization"),sh.forEach(t),ah.forEach(t),wt.forEach(t),xc=p(S),q=s(S,"DIV",{class:!0});var ce=r(q);x(Do.$$.fragment,ce),$c=p(ce),je=s(ce,"P",{});var Sa=r(je);yc=i(Sa,"The "),zs=s(Sa,"CODE",{});var rh=r(zs);Tc=i(rh,"FlaxBeitPreTrainedModel"),rh.forEach(t),Bc=i(Sa," forward method, overrides the "),As=s(Sa,"CODE",{});var nh=r(As);Fc=i(nh,"__call__"),nh.forEach(t),Ec=i(Sa," special method."),Sa.forEach(t),kc=p(ce),x(rt.$$.fragment,ce),Mc=p(ce),Pe=s(ce,"P",{});var Na=r(Pe);Ic=i(Na,"bool_masked_pos ("),qs=s(Na,"CODE",{});var ih=r(qs);jc=i(ih,"numpy.ndarray"),ih.forEach(t),Pc=i(Na," of shape "),Ls=s(Na,"CODE",{});var lh=r(Ls);Cc=i(lh,"(batch_size, num_patches)"),lh.forEach(t),zc=i(Na,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Na.forEach(t),Ac=p(ce),x(nt.$$.fragment,ce),ce.forEach(t),S.forEach(t),Ar=p(o),Ce=s(o,"H2",{class:!0});var cn=r(Ce);it=s(cn,"A",{id:!0,class:!0,href:!0});var dh=r(it);Ss=s(dh,"SPAN",{});var ch=r(Ss);x(Vo.$$.fragment,ch),ch.forEach(t),dh.forEach(t),qc=p(cn),Ns=s(cn,"SPAN",{});var mh=r(Ns);Lc=i(mh,"FlaxBeitForImageClassification"),mh.forEach(t),cn.forEach(t),qr=p(o),P=s(o,"DIV",{class:!0});var N=r(P);x(Wo.$$.fragment,N),Sc=p(N),Os=s(N,"P",{});var ph=r(Os);Nc=i(ph,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),ph.forEach(t),Oc=p(N),Uo=s(N,"P",{});var mn=r(Uo);Dc=i(mn,"This model inherits from "),Ba=s(mn,"A",{href:!0});var hh=r(Ba);Vc=i(hh,"FlaxPreTrainedModel"),hh.forEach(t),Wc=i(mn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mn.forEach(t),Uc=p(N),Ro=s(N,"P",{});var pn=r(Ro);Rc=i(pn,"This model is also a Flax Linen "),Ho=s(pn,"A",{href:!0,rel:!0});var fh=r(Ho);Hc=i(fh,"flax.linen.Module"),fh.forEach(t),Jc=i(pn,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pn.forEach(t),Gc=p(N),Ds=s(N,"P",{});var uh=r(Ds);Xc=i(uh,"Finally, this model supports inherent JAX features such as:"),uh.forEach(t),Kc=p(N),re=s(N,"UL",{});var xt=r(re);Vs=s(xt,"LI",{});var gh=r(Vs);Jo=s(gh,"A",{href:!0,rel:!0});var _h=r(Jo);Yc=i(_h,"Just-In-Time (JIT) compilation"),_h.forEach(t),gh.forEach(t),Qc=p(xt),Ws=s(xt,"LI",{});var bh=r(Ws);Go=s(bh,"A",{href:!0,rel:!0});var vh=r(Go);Zc=i(vh,"Automatic Differentiation"),vh.forEach(t),bh.forEach(t),em=p(xt),Us=s(xt,"LI",{});var wh=r(Us);Xo=s(wh,"A",{href:!0,rel:!0});var xh=r(Xo);tm=i(xh,"Vectorization"),xh.forEach(t),wh.forEach(t),om=p(xt),Rs=s(xt,"LI",{});var $h=r(Rs);Ko=s($h,"A",{href:!0,rel:!0});var yh=r(Ko);am=i(yh,"Parallelization"),yh.forEach(t),$h.forEach(t),xt.forEach(t),sm=p(N),K=s(N,"DIV",{class:!0});var $t=r(K);x(Yo.$$.fragment,$t),rm=p($t),ze=s($t,"P",{});var Oa=r(ze);nm=i(Oa,"The "),Hs=s(Oa,"CODE",{});var Th=r(Hs);im=i(Th,"FlaxBeitPreTrainedModel"),Th.forEach(t),lm=i(Oa," forward method, overrides the "),Js=s(Oa,"CODE",{});var Bh=r(Js);dm=i(Bh,"__call__"),Bh.forEach(t),cm=i(Oa," special method."),Oa.forEach(t),mm=p($t),x(lt.$$.fragment,$t),pm=p($t),x(dt.$$.fragment,$t),$t.forEach(t),N.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Xh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(g,"class","relative group"),d(Ae,"id","overview"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#overview"),d(me,"class","relative group"),d(kt,"href","https://arxiv.org/abs/2106.08254"),d(kt,"rel","nofollow"),d(Mt,"href","https://arxiv.org/abs/2010.11929"),d(Mt,"rel","nofollow"),d(It,"href","https://arxiv.org/abs/2102.12092"),d(It,"rel","nofollow"),d(aa,"href","vit"),d(sa,"href","deit"),d(jt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(jt,"rel","nofollow"),d(ra,"href","/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(na,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(ia,"href","/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTForImageClassification"),d(la,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitForImageClassification"),d(Ct,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(Ct,"rel","nofollow"),d(da,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(At,"href","https://huggingface.co/models?search=microsoft/beit"),d(At,"rel","nofollow"),d(qt,"href","http://www.image-net.org/"),d(qt,"rel","nofollow"),d(Lt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(Lt,"rel","nofollow"),d(ca,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitConfig"),Ih(qe.src,fm="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/beit_architecture.jpg")||d(qe,"src",fm),d(qe,"alt","drawing"),d(qe,"width","600"),d(ma,"href","https://arxiv.org/abs/2106.08254"),d(Nt,"href","https://huggingface.co/nielsr"),d(Nt,"rel","nofollow"),d(Ot,"href","https://huggingface.co/kamalkraj"),d(Ot,"rel","nofollow"),d(Dt,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(Dt,"rel","nofollow"),d(Le,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(fe,"class","relative group"),d(pa,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitModel"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ha,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.FlaxBeitModel"),d(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.BeitConfig"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.BeitConfig"),d(_e,"class","relative group"),d(fa,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitModel"),d(Xt,"href","https://huggingface.co/microsoft/beit-base-patch16-224-pt22k"),d(Xt,"rel","nofollow"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Oe,"id","transformers.BeitFeatureExtractor"),d(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Oe,"href","#transformers.BeitFeatureExtractor"),d(ve,"class","relative group"),d(ua,"href","/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ga,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitModel"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitModel"),d(we,"class","relative group"),d(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ro,"rel","nofollow"),d(_a,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.BeitForMaskedImageModeling"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.BeitForMaskedImageModeling"),d($e,"class","relative group"),d(ba,"href","/docs/transformers/v4.23.0/en/model_doc/auto#transformers.AutoModelForMaskedImageModeling"),d(va,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(co,"rel","nofollow"),d(wa,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForImageClassification"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForImageClassification"),d(Te,"class","relative group"),d(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(uo,"rel","nofollow"),d(xa,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"id","transformers.BeitForSemanticSegmentation"),d(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Qe,"href","#transformers.BeitForSemanticSegmentation"),d(Fe,"class","relative group"),d(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wo,"rel","nofollow"),d($a,"href","/docs/transformers/v4.23.0/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(tt,"id","transformers.FlaxBeitModel"),d(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(tt,"href","#transformers.FlaxBeitModel"),d(ke,"class","relative group"),d(ya,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Fo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Fo,"rel","nofollow"),d(Eo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Eo,"rel","nofollow"),d(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(ko,"rel","nofollow"),d(Mo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Mo,"rel","nofollow"),d(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Io,"rel","nofollow"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(st,"id","transformers.FlaxBeitForMaskedImageModeling"),d(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(st,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(Ie,"class","relative group"),d(Ta,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(qo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(qo,"rel","nofollow"),d(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Lo,"rel","nofollow"),d(So,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(So,"rel","nofollow"),d(No,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(No,"rel","nofollow"),d(Oo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Oo,"rel","nofollow"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(it,"id","transformers.FlaxBeitForImageClassification"),d(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(it,"href","#transformers.FlaxBeitForImageClassification"),d(Ce,"class","relative group"),d(Ba,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Ho,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Ho,"rel","nofollow"),d(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Jo,"rel","nofollow"),d(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Go,"rel","nofollow"),d(Xo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Xo,"rel","nofollow"),d(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ko,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,c),_(o,v,u),_(o,g,u),e(g,f),e(f,b),$(l,b,null),e(g,h),e(g,E),e(E,hn),_(o,ir,u),_(o,me,u),e(me,Ae),e(Ae,Da),$(Et,Da,null),e(me,fn),e(me,Va),e(Va,un),_(o,lr,u),_(o,W,u),e(W,gn),e(W,kt),e(kt,_n),e(W,bn),e(W,Mt),e(Mt,vn),e(W,wn),e(W,It),e(It,xn),e(W,$n),_(o,dr,u),_(o,ea,u),e(ea,yn),_(o,cr,u),_(o,ta,u),e(ta,Wa),e(Wa,Tn),_(o,mr,u),_(o,oa,u),e(oa,Bn),_(o,pr,u),_(o,C,u),e(C,M),e(M,Fn),e(M,aa),e(aa,En),e(M,kn),e(M,sa),e(sa,Mn),e(M,In),e(M,jt),e(jt,jn),e(M,Pn),e(M,ra),e(ra,Cn),e(M,zn),e(M,na),e(na,An),e(M,qn),e(M,ia),e(ia,Ln),e(M,Sn),e(M,la),e(la,Nn),e(M,On),e(C,Dn),e(C,Pt),e(Pt,Vn),e(Pt,Ct),e(Ct,Wn),e(Pt,Un),e(C,Rn),e(C,zt),e(zt,Hn),e(zt,da),e(da,Jn),e(zt,Gn),e(C,Xn),e(C,pe),e(pe,Kn),e(pe,Ua),e(Ua,Yn),e(pe,Qn),e(pe,At),e(At,Zn),e(pe,ei),e(C,ti),e(C,he),e(he,oi),e(he,qt),e(qt,ai),e(he,si),e(he,Lt),e(Lt,ri),e(he,ni),e(C,ii),e(C,O),e(O,li),e(O,Ra),e(Ra,di),e(O,ci),e(O,Ha),e(Ha,mi),e(O,pi),e(O,ca),e(ca,hi),e(O,fi),e(O,Ja),e(Ja,ui),e(O,gi),_(o,hr,u),_(o,qe,u),_(o,fr,u),_(o,St,u),e(St,_i),e(St,ma),e(ma,bi),_(o,ur,u),_(o,U,u),e(U,vi),e(U,Nt),e(Nt,wi),e(U,xi),e(U,Ot),e(Ot,$i),e(U,yi),e(U,Dt),e(Dt,Ti),e(U,Bi),_(o,gr,u),_(o,fe,u),e(fe,Le),e(Le,Ga),$(Vt,Ga,null),e(fe,Fi),e(fe,Xa),e(Xa,Ei),_(o,_r,u),_(o,ue,u),$(Wt,ue,null),e(ue,ki),e(ue,Ut),e(Ut,Mi),e(Ut,pa),e(pa,Ii),e(Ut,ji),_(o,br,u),_(o,ge,u),$(Rt,ge,null),e(ge,Pi),e(ge,Ht),e(Ht,Ci),e(Ht,ha),e(ha,zi),e(Ht,Ai),_(o,vr,u),_(o,_e,u),e(_e,Se),e(Se,Ka),$(Jt,Ka,null),e(_e,qi),e(_e,Ya),e(Ya,Li),_(o,wr,u),_(o,Z,u),$(Gt,Z,null),e(Z,Si),e(Z,be),e(be,Ni),e(be,fa),e(fa,Oi),e(be,Di),e(be,Xt),e(Xt,Vi),e(be,Wi),e(Z,Ui),$(Ne,Z,null),_(o,xr,u),_(o,ve,u),e(ve,Oe),e(Oe,Qa),$(Kt,Qa,null),e(ve,Ri),e(ve,Za),e(Za,Hi),_(o,$r,u),_(o,A,u),$(Yt,A,null),e(A,Ji),e(A,es),e(es,Gi),e(A,Xi),e(A,Qt),e(Qt,Ki),e(Qt,ua),e(ua,Yi),e(Qt,Qi),e(A,Zi),e(A,ie),$(Zt,ie,null),e(ie,el),e(ie,ts),e(ts,tl),e(ie,ol),$(De,ie,null),e(A,al),e(A,Ve),$(eo,Ve,null),e(Ve,sl),e(Ve,to),e(to,rl),e(to,ga),e(ga,nl),e(to,il),_(o,yr,u),_(o,we,u),e(we,We),e(We,os),$(oo,os,null),e(we,ll),e(we,as),e(as,dl),_(o,Tr,u),_(o,ee,u),$(ao,ee,null),e(ee,cl),e(ee,so),e(so,ml),e(so,ro),e(ro,pl),e(so,hl),e(ee,fl),e(ee,R),$(no,R,null),e(R,ul),e(R,xe),e(xe,gl),e(xe,_a),e(_a,_l),e(xe,bl),e(xe,ss),e(ss,vl),e(xe,wl),e(R,xl),$(Ue,R,null),e(R,$l),$(Re,R,null),_(o,Br,u),_(o,$e,u),e($e,He),e(He,rs),$(io,rs,null),e($e,yl),e($e,ns),e(ns,Tl),_(o,Fr,u),_(o,te,u),$(lo,te,null),e(te,Bl),e(te,oe),e(oe,Fl),e(oe,ba),e(ba,El),e(oe,kl),e(oe,va),e(va,Ml),e(oe,Il),e(oe,co),e(co,jl),e(oe,Pl),e(te,Cl),e(te,H),$(mo,H,null),e(H,zl),e(H,ye),e(ye,Al),e(ye,wa),e(wa,ql),e(ye,Ll),e(ye,is),e(is,Sl),e(ye,Nl),e(H,Ol),$(Je,H,null),e(H,Dl),$(Ge,H,null),_(o,Er,u),_(o,Te,u),e(Te,Xe),e(Xe,ls),$(po,ls,null),e(Te,Vl),e(Te,ds),e(ds,Wl),_(o,kr,u),_(o,D,u),$(ho,D,null),e(D,Ul),e(D,cs),e(cs,Rl),e(D,Hl),e(D,fo),e(fo,Jl),e(fo,uo),e(uo,Gl),e(fo,Xl),e(D,Kl),e(D,J),$(go,J,null),e(J,Yl),e(J,Be),e(Be,Ql),e(Be,xa),e(xa,Zl),e(Be,ed),e(Be,ms),e(ms,td),e(Be,od),e(J,ad),$(Ke,J,null),e(J,sd),$(Ye,J,null),_(o,Mr,u),_(o,Fe,u),e(Fe,Qe),e(Qe,ps),$(_o,ps,null),e(Fe,rd),e(Fe,hs),e(hs,nd),_(o,Ir,u),_(o,V,u),$(bo,V,null),e(V,id),e(V,fs),e(fs,ld),e(V,dd),e(V,vo),e(vo,cd),e(vo,wo),e(wo,md),e(vo,pd),e(V,hd),e(V,G),$(xo,G,null),e(G,fd),e(G,Ee),e(Ee,ud),e(Ee,$a),e($a,gd),e(Ee,_d),e(Ee,us),e(us,bd),e(Ee,vd),e(G,wd),$(Ze,G,null),e(G,xd),$(et,G,null),_(o,jr,u),_(o,ke,u),e(ke,tt),e(tt,gs),$($o,gs,null),e(ke,$d),e(ke,_s),e(_s,yd),_(o,Pr,u),_(o,I,u),$(yo,I,null),e(I,Td),e(I,bs),e(bs,Bd),e(I,Fd),e(I,To),e(To,Ed),e(To,ya),e(ya,kd),e(To,Md),e(I,Id),e(I,Bo),e(Bo,jd),e(Bo,Fo),e(Fo,Pd),e(Bo,Cd),e(I,zd),e(I,vs),e(vs,Ad),e(I,qd),e(I,ae),e(ae,ws),e(ws,Eo),e(Eo,Ld),e(ae,Sd),e(ae,xs),e(xs,ko),e(ko,Nd),e(ae,Od),e(ae,$s),e($s,Mo),e(Mo,Dd),e(ae,Vd),e(ae,ys),e(ys,Io),e(Io,Wd),e(I,Ud),e(I,X),$(jo,X,null),e(X,Rd),e(X,Me),e(Me,Hd),e(Me,Ts),e(Ts,Jd),e(Me,Gd),e(Me,Bs),e(Bs,Xd),e(Me,Kd),e(X,Yd),$(ot,X,null),e(X,Qd),$(at,X,null),_(o,Cr,u),_(o,Ie,u),e(Ie,st),e(st,Fs),$(Po,Fs,null),e(Ie,Zd),e(Ie,Es),e(Es,ec),_(o,zr,u),_(o,j,u),$(Co,j,null),e(j,tc),e(j,ks),e(ks,oc),e(j,ac),e(j,zo),e(zo,sc),e(zo,Ta),e(Ta,rc),e(zo,nc),e(j,ic),e(j,Ao),e(Ao,lc),e(Ao,qo),e(qo,dc),e(Ao,cc),e(j,mc),e(j,Ms),e(Ms,pc),e(j,hc),e(j,se),e(se,Is),e(Is,Lo),e(Lo,fc),e(se,uc),e(se,js),e(js,So),e(So,gc),e(se,_c),e(se,Ps),e(Ps,No),e(No,bc),e(se,vc),e(se,Cs),e(Cs,Oo),e(Oo,wc),e(j,xc),e(j,q),$(Do,q,null),e(q,$c),e(q,je),e(je,yc),e(je,zs),e(zs,Tc),e(je,Bc),e(je,As),e(As,Fc),e(je,Ec),e(q,kc),$(rt,q,null),e(q,Mc),e(q,Pe),e(Pe,Ic),e(Pe,qs),e(qs,jc),e(Pe,Pc),e(Pe,Ls),e(Ls,Cc),e(Pe,zc),e(q,Ac),$(nt,q,null),_(o,Ar,u),_(o,Ce,u),e(Ce,it),e(it,Ss),$(Vo,Ss,null),e(Ce,qc),e(Ce,Ns),e(Ns,Lc),_(o,qr,u),_(o,P,u),$(Wo,P,null),e(P,Sc),e(P,Os),e(Os,Nc),e(P,Oc),e(P,Uo),e(Uo,Dc),e(Uo,Ba),e(Ba,Vc),e(Uo,Wc),e(P,Uc),e(P,Ro),e(Ro,Rc),e(Ro,Ho),e(Ho,Hc),e(Ro,Jc),e(P,Gc),e(P,Ds),e(Ds,Xc),e(P,Kc),e(P,re),e(re,Vs),e(Vs,Jo),e(Jo,Yc),e(re,Qc),e(re,Ws),e(Ws,Go),e(Go,Zc),e(re,em),e(re,Us),e(Us,Xo),e(Xo,tm),e(re,om),e(re,Rs),e(Rs,Ko),e(Ko,am),e(P,sm),e(P,K),$(Yo,K,null),e(K,rm),e(K,ze),e(ze,nm),e(ze,Hs),e(Hs,im),e(ze,lm),e(ze,Js),e(Js,dm),e(ze,cm),e(K,mm),$(lt,K,null),e(K,pm),$(dt,K,null),Lr=!0},p(o,[u]){const Qo={};u&2&&(Qo.$$scope={dirty:u,ctx:o}),Ne.$set(Qo);const Gs={};u&2&&(Gs.$$scope={dirty:u,ctx:o}),De.$set(Gs);const Xs={};u&2&&(Xs.$$scope={dirty:u,ctx:o}),Ue.$set(Xs);const Ks={};u&2&&(Ks.$$scope={dirty:u,ctx:o}),Re.$set(Ks);const Zo={};u&2&&(Zo.$$scope={dirty:u,ctx:o}),Je.$set(Zo);const Ys={};u&2&&(Ys.$$scope={dirty:u,ctx:o}),Ge.$set(Ys);const Qs={};u&2&&(Qs.$$scope={dirty:u,ctx:o}),Ke.$set(Qs);const Zs={};u&2&&(Zs.$$scope={dirty:u,ctx:o}),Ye.$set(Zs);const ne={};u&2&&(ne.$$scope={dirty:u,ctx:o}),Ze.$set(ne);const er={};u&2&&(er.$$scope={dirty:u,ctx:o}),et.$set(er);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:o}),ot.$set(tr);const or={};u&2&&(or.$$scope={dirty:u,ctx:o}),at.$set(or);const ar={};u&2&&(ar.$$scope={dirty:u,ctx:o}),rt.$set(ar);const sr={};u&2&&(sr.$$scope={dirty:u,ctx:o}),nt.$set(sr);const rr={};u&2&&(rr.$$scope={dirty:u,ctx:o}),lt.$set(rr);const nr={};u&2&&(nr.$$scope={dirty:u,ctx:o}),dt.$set(nr)},i(o){Lr||(y(l.$$.fragment,o),y(Et.$$.fragment,o),y(Vt.$$.fragment,o),y(Wt.$$.fragment,o),y(Rt.$$.fragment,o),y(Jt.$$.fragment,o),y(Gt.$$.fragment,o),y(Ne.$$.fragment,o),y(Kt.$$.fragment,o),y(Yt.$$.fragment,o),y(Zt.$$.fragment,o),y(De.$$.fragment,o),y(eo.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(no.$$.fragment,o),y(Ue.$$.fragment,o),y(Re.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(mo.$$.fragment,o),y(Je.$$.fragment,o),y(Ge.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(go.$$.fragment,o),y(Ke.$$.fragment,o),y(Ye.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(xo.$$.fragment,o),y(Ze.$$.fragment,o),y(et.$$.fragment,o),y($o.$$.fragment,o),y(yo.$$.fragment,o),y(jo.$$.fragment,o),y(ot.$$.fragment,o),y(at.$$.fragment,o),y(Po.$$.fragment,o),y(Co.$$.fragment,o),y(Do.$$.fragment,o),y(rt.$$.fragment,o),y(nt.$$.fragment,o),y(Vo.$$.fragment,o),y(Wo.$$.fragment,o),y(Yo.$$.fragment,o),y(lt.$$.fragment,o),y(dt.$$.fragment,o),Lr=!0)},o(o){T(l.$$.fragment,o),T(Et.$$.fragment,o),T(Vt.$$.fragment,o),T(Wt.$$.fragment,o),T(Rt.$$.fragment,o),T(Jt.$$.fragment,o),T(Gt.$$.fragment,o),T(Ne.$$.fragment,o),T(Kt.$$.fragment,o),T(Yt.$$.fragment,o),T(Zt.$$.fragment,o),T(De.$$.fragment,o),T(eo.$$.fragment,o),T(oo.$$.fragment,o),T(ao.$$.fragment,o),T(no.$$.fragment,o),T(Ue.$$.fragment,o),T(Re.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(mo.$$.fragment,o),T(Je.$$.fragment,o),T(Ge.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(go.$$.fragment,o),T(Ke.$$.fragment,o),T(Ye.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(xo.$$.fragment,o),T(Ze.$$.fragment,o),T(et.$$.fragment,o),T($o.$$.fragment,o),T(yo.$$.fragment,o),T(jo.$$.fragment,o),T(ot.$$.fragment,o),T(at.$$.fragment,o),T(Po.$$.fragment,o),T(Co.$$.fragment,o),T(Do.$$.fragment,o),T(rt.$$.fragment,o),T(nt.$$.fragment,o),T(Vo.$$.fragment,o),T(Wo.$$.fragment,o),T(Yo.$$.fragment,o),T(lt.$$.fragment,o),T(dt.$$.fragment,o),Lr=!1},d(o){t(c),o&&t(v),o&&t(g),B(l),o&&t(ir),o&&t(me),B(Et),o&&t(lr),o&&t(W),o&&t(dr),o&&t(ea),o&&t(cr),o&&t(ta),o&&t(mr),o&&t(oa),o&&t(pr),o&&t(C),o&&t(hr),o&&t(qe),o&&t(fr),o&&t(St),o&&t(ur),o&&t(U),o&&t(gr),o&&t(fe),B(Vt),o&&t(_r),o&&t(ue),B(Wt),o&&t(br),o&&t(ge),B(Rt),o&&t(vr),o&&t(_e),B(Jt),o&&t(wr),o&&t(Z),B(Gt),B(Ne),o&&t(xr),o&&t(ve),B(Kt),o&&t($r),o&&t(A),B(Yt),B(Zt),B(De),B(eo),o&&t(yr),o&&t(we),B(oo),o&&t(Tr),o&&t(ee),B(ao),B(no),B(Ue),B(Re),o&&t(Br),o&&t($e),B(io),o&&t(Fr),o&&t(te),B(lo),B(mo),B(Je),B(Ge),o&&t(Er),o&&t(Te),B(po),o&&t(kr),o&&t(D),B(ho),B(go),B(Ke),B(Ye),o&&t(Mr),o&&t(Fe),B(_o),o&&t(Ir),o&&t(V),B(bo),B(xo),B(Ze),B(et),o&&t(jr),o&&t(ke),B($o),o&&t(Pr),o&&t(I),B(yo),B(jo),B(ot),B(at),o&&t(Cr),o&&t(Ie),B(Po),o&&t(zr),o&&t(j),B(Co),B(Do),B(rt),B(nt),o&&t(Ar),o&&t(Ce),B(Vo),o&&t(qr),o&&t(P),B(Wo),B(Yo),B(lt),B(dt)}}}const Xh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function Kh(F){return jh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class af extends Fh{constructor(c){super();Eh(this,c,Kh,Gh,kh,{})}}export{af as default,Xh as metadata};
