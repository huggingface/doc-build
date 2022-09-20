import{S as Fh,i as Eh,s as kh,e as a,k as m,w,t as r,M as Mh,c as n,d as t,m as p,a as s,x,h as i,b as d,N as Ih,G as e,g as _,y as $,q as y,o as T,B,v as jh,L as Bt}from"../../chunks/vendor-hf-doc-builder.js";import{T as yt}from"../../chunks/Tip-hf-doc-builder.js";import{D as k}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ft}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Tt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ph(F){let c,v,g,f,b;return f=new Ft({props:{code:`from transformers import BeitModel, BeitConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Ch(F){let c,v;return{c(){c=a("p"),v=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(g){c=n(g,"P",{});var f=s(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(g,f){_(g,c,f),e(c,v)},d(g){g&&t(c)}}}function zh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function qh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Sh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
tabby, tabby cat`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Oh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Vh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Uh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=r("Examples:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Hh(F){let c,v,g,f,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(h,"CODE",{});var E=s(g);f=i(E,"Module"),E.forEach(t),b=i(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=r("Example:"),g=m(),w(f.$$.fragment)},l(l){c=n(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),g=p(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,g,h),$(f,l,h),b=!0},p:Bt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(g),B(f,l)}}}function Gh(F){let c,v,g,f,b,l,h,E,hr,ls,me,Ae,Da,Et,fr,Va,ur,ds,W,gr,kt,_r,br,Mt,vr,wr,It,xr,$r,cs,ea,yr,ms,ta,Wa,Tr,ps,oa,Br,hs,C,M,Fr,aa,Er,kr,na,Mr,Ir,jt,jr,Pr,sa,Cr,zr,ra,Ar,qr,ia,Lr,Sr,la,Nr,Or,Dr,Pt,Vr,Ct,Wr,Ur,Rr,zt,Hr,da,Jr,Gr,Xr,pe,Kr,Ua,Yr,Qr,At,Zr,ei,ti,he,oi,qt,ai,ni,Lt,si,ri,ii,O,li,Ra,di,ci,Ha,mi,pi,ca,hi,fi,Ja,ui,gi,fs,qe,fm,us,St,_i,ma,bi,gs,U,vi,Nt,wi,xi,Ot,$i,yi,Dt,Ti,Bi,_s,fe,Le,Ga,Vt,Fi,Xa,Ei,bs,ue,Wt,ki,Ut,Mi,pa,Ii,ji,vs,ge,Rt,Pi,Ht,Ci,ha,zi,Ai,ws,_e,Se,Ka,Jt,qi,Ya,Li,xs,Z,Gt,Si,be,Ni,fa,Oi,Di,Xt,Vi,Wi,Ui,Ne,$s,ve,Oe,Qa,Kt,Ri,Za,Hi,ys,A,Yt,Ji,en,Gi,Xi,Qt,Ki,ua,Yi,Qi,Zi,ie,Zt,el,tn,tl,ol,De,al,Ve,eo,nl,to,sl,ga,rl,il,Ts,we,We,on,oo,ll,an,dl,Bs,ee,ao,cl,no,ml,so,pl,hl,fl,R,ro,ul,xe,gl,_a,_l,bl,nn,vl,wl,xl,Ue,$l,Re,Fs,$e,He,sn,io,yl,rn,Tl,Es,te,lo,Bl,oe,Fl,ba,El,kl,va,Ml,Il,co,jl,Pl,Cl,H,mo,zl,ye,Al,wa,ql,Ll,ln,Sl,Nl,Ol,Je,Dl,Ge,ks,Te,Xe,dn,po,Vl,cn,Wl,Ms,D,ho,Ul,mn,Rl,Hl,fo,Jl,uo,Gl,Xl,Kl,J,go,Yl,Be,Ql,xa,Zl,ed,pn,td,od,ad,Ke,nd,Ye,Is,Fe,Qe,hn,_o,sd,fn,rd,js,V,bo,id,un,ld,dd,vo,cd,wo,md,pd,hd,G,xo,fd,Ee,ud,$a,gd,_d,gn,bd,vd,wd,Ze,xd,et,Ps,ke,tt,_n,$o,$d,bn,yd,Cs,I,yo,Td,vn,Bd,Fd,To,Ed,ya,kd,Md,Id,Bo,jd,Fo,Pd,Cd,zd,wn,Ad,qd,ae,xn,Eo,Ld,Sd,$n,ko,Nd,Od,yn,Mo,Dd,Vd,Tn,Io,Wd,Ud,X,jo,Rd,Me,Hd,Bn,Jd,Gd,Fn,Xd,Kd,Yd,ot,Qd,at,zs,Ie,nt,En,Po,Zd,kn,ec,As,j,Co,tc,Mn,oc,ac,zo,nc,Ta,sc,rc,ic,Ao,lc,qo,dc,cc,mc,In,pc,hc,ne,jn,Lo,fc,uc,Pn,So,gc,_c,Cn,No,bc,vc,zn,Oo,wc,xc,q,Do,$c,je,yc,An,Tc,Bc,qn,Fc,Ec,kc,st,Mc,Pe,Ic,Ln,jc,Pc,Sn,Cc,zc,Ac,rt,qs,Ce,it,Nn,Vo,qc,On,Lc,Ls,P,Wo,Sc,Dn,Nc,Oc,Uo,Dc,Ba,Vc,Wc,Uc,Ro,Rc,Ho,Hc,Jc,Gc,Vn,Xc,Kc,se,Wn,Jo,Yc,Qc,Un,Go,Zc,em,Rn,Xo,tm,om,Hn,Ko,am,nm,K,Yo,sm,ze,rm,Jn,im,lm,Gn,dm,cm,mm,lt,pm,dt,Ss;return l=new Q({}),Et=new Q({}),Vt=new Q({}),Wt=new k({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L69"}}),Rt=new k({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L46"}}),Jt=new Q({}),Gt=new k({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
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
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/configuration_beit.py#L36"}}),Ne=new Tt({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[Ph]},$$scope:{ctx:F}}}),Kt=new Q({}),Yt=new k({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/feature_extraction_beit.py#L39"}}),Zt=new k({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/feature_extraction_beit.py#L100",returnDescription:`
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
`}}),De=new yt({props:{warning:!0,$$slots:{default:[Ch]},$$scope:{ctx:F}}}),eo=new k({props:{name:"post_process_semantic_segmentation",anchor:"transformers.BeitFeatureExtractor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple] = None"}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.post_process_semantic_segmentation.outputs",description:`<strong>outputs</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitForSemanticSegmentation">BeitForSemanticSegmentation</a>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.BeitFeatureExtractor.post_process_semantic_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>) &#x2014;
List of tuples corresponding to the requested final size (height, width) of each prediction. If left to
None, predictions will not be resized.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/feature_extraction_beit.py#L229",returnDescription:`
<p><code>List[torch.Tensor]</code> of length <code>batch_size</code>, where each item is a semantic
segmentation map of shape (height, width) corresponding to the target_sizes entry (if <code>target_sizes</code> is
specified). Each entry of each <code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p>semantic_segmentation</p>
`}}),oo=new Q({}),ao=new k({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L620"}}),ro=new k({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Ue=new yt({props:{$$slots:{default:[zh]},$$scope:{ctx:F}}}),Re=new Tt({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[Ah]},$$scope:{ctx:F}}}),io=new Q({}),lo=new k({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L732"}}),mo=new k({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Je=new yt({props:{$$slots:{default:[qh]},$$scope:{ctx:F}}}),Ge=new Tt({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[Lh]},$$scope:{ctx:F}}}),po=new Q({}),ho=new k({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L832"}}),go=new k({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Ke=new yt({props:{$$slots:{default:[Sh]},$$scope:{ctx:F}}}),Ye=new Tt({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[Nh]},$$scope:{ctx:F}}}),_o=new Q({}),bo=new k({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_beit.py#L1156"}}),xo=new k({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Ze=new yt({props:{$$slots:{default:[Oh]},$$scope:{ctx:F}}}),et=new Tt({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[Dh]},$$scope:{ctx:F}}}),$o=new Q({}),yo=new k({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L749"}}),jo=new k({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
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
`}}),ot=new yt({props:{$$slots:{default:[Vh]},$$scope:{ctx:F}}}),at=new Tt({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[Wh]},$$scope:{ctx:F}}}),Po=new Q({}),Co=new k({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L833"}}),Do=new k({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
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
`}}),st=new yt({props:{$$slots:{default:[Uh]},$$scope:{ctx:F}}}),rt=new Tt({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[Rh]},$$scope:{ctx:F}}}),Vo=new Q({}),Wo=new k({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L920"}}),Yo=new k({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
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
`}}),lt=new yt({props:{$$slots:{default:[Hh]},$$scope:{ctx:F}}}),dt=new Tt({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[Jh]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=m(),g=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=m(),E=a("span"),hr=r("BEiT"),ls=m(),me=a("h2"),Ae=a("a"),Da=a("span"),w(Et.$$.fragment),fr=m(),Va=a("span"),ur=r("Overview"),ds=m(),W=a("p"),gr=r("The BEiT model was proposed in "),kt=a("a"),_r=r("BEiT: BERT Pre-Training of Image Transformers"),br=r(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Mt=a("a"),vr=r("original ViT paper"),wr=r(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),It=a("a"),xr=r("DALL-E model"),$r=r(` given masked
patches.`),cs=m(),ea=a("p"),yr=r("The abstract from the paper is the following:"),ms=m(),ta=a("p"),Wa=a("em"),Tr=r(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),ps=m(),oa=a("p"),Br=r("Tips:"),hs=m(),C=a("ul"),M=a("li"),Fr=r(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),aa=a("a"),Er=r("original model (ViT)"),kr=r(" as well as "),na=a("a"),Mr=r("Data-efficient Image Transformers (DeiT)"),Ir=r(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),jt=a("a"),jr=r("here"),Pr=r(` (you can just replace
`),sa=a("a"),Cr=r("ViTFeatureExtractor"),zr=r(" by "),ra=a("a"),Ar=r("BeitFeatureExtractor"),qr=r(` and
`),ia=a("a"),Lr=r("ViTForImageClassification"),Sr=r(" by "),la=a("a"),Nr=r("BeitForImageClassification"),Or=r(")."),Dr=m(),Pt=a("li"),Vr=r(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Ct=a("a"),Wr=r("here"),Ur=r("."),Rr=m(),zt=a("li"),Hr=r(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),da=a("a"),Jr=r("BeitFeatureExtractor"),Gr=r(" to resize (or rescale) and normalize images for the model."),Xr=m(),pe=a("li"),Kr=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ua=a("code"),Yr=r("microsoft/beit-base-patch16-224"),Qr=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),At=a("a"),Zr=r("hub"),ei=r("."),ti=m(),he=a("li"),oi=r("The available checkpoints are either (1) pre-trained on "),qt=a("a"),ai=r("ImageNet-22k"),ni=r(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Lt=a("a"),si=r("ImageNet-1k"),ri=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),ii=m(),O=a("li"),li=r(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Ra=a("code"),di=r("use_relative_position_bias"),ci=r(` or the
`),Ha=a("code"),mi=r("use_relative_position_bias"),pi=r(" attribute of "),ca=a("a"),hi=r("BeitConfig"),fi=r(" to "),Ja=a("code"),ui=r("True"),gi=r(` in order to add
position embeddings.`),fs=m(),qe=a("img"),us=m(),St=a("small"),_i=r("BEiT pre-training. Taken from the "),ma=a("a"),bi=r("original paper."),gs=m(),U=a("p"),vi=r("This model was contributed by "),Nt=a("a"),wi=r("nielsr"),xi=r(`. The JAX/FLAX version of this model was
contributed by `),Ot=a("a"),$i=r("kamalkraj"),yi=r(". The original code can be found "),Dt=a("a"),Ti=r("here"),Bi=r("."),_s=m(),fe=a("h2"),Le=a("a"),Ga=a("span"),w(Vt.$$.fragment),Fi=m(),Xa=a("span"),Ei=r("BEiT specific outputs"),bs=m(),ue=a("div"),w(Wt.$$.fragment),ki=m(),Ut=a("p"),Mi=r("Class for outputs of "),pa=a("a"),Ii=r("BeitModel"),ji=r("."),vs=m(),ge=a("div"),w(Rt.$$.fragment),Pi=m(),Ht=a("p"),Ci=r("Class for outputs of "),ha=a("a"),zi=r("FlaxBeitModel"),Ai=r("."),ws=m(),_e=a("h2"),Se=a("a"),Ka=a("span"),w(Jt.$$.fragment),qi=m(),Ya=a("span"),Li=r("BeitConfig"),xs=m(),Z=a("div"),w(Gt.$$.fragment),Si=m(),be=a("p"),Ni=r("This is the configuration class to store the configuration of a "),fa=a("a"),Oi=r("BeitModel"),Di=r(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Xt=a("a"),Vi=r("microsoft/beit-base-patch16-224-pt22k"),Wi=r(" architecture."),Ui=m(),w(Ne.$$.fragment),$s=m(),ve=a("h2"),Oe=a("a"),Qa=a("span"),w(Kt.$$.fragment),Ri=m(),Za=a("span"),Hi=r("BeitFeatureExtractor"),ys=m(),A=a("div"),w(Yt.$$.fragment),Ji=m(),en=a("p"),Gi=r("Constructs a BEiT feature extractor."),Xi=m(),Qt=a("p"),Ki=r("This feature extractor inherits from "),ua=a("a"),Yi=r("FeatureExtractionMixin"),Qi=r(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Zi=m(),ie=a("div"),w(Zt.$$.fragment),el=m(),tn=a("p"),tl=r("Main method to prepare for the model one or several image(s)."),ol=m(),w(De.$$.fragment),al=m(),Ve=a("div"),w(eo.$$.fragment),nl=m(),to=a("p"),sl=r("Converts the output of "),ga=a("a"),rl=r("BeitForSemanticSegmentation"),il=r(" into semantic segmentation maps. Only supports PyTorch."),Ts=m(),we=a("h2"),We=a("a"),on=a("span"),w(oo.$$.fragment),ll=m(),an=a("span"),dl=r("BeitModel"),Bs=m(),ee=a("div"),w(ao.$$.fragment),cl=m(),no=a("p"),ml=r(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),so=a("a"),pl=r("torch.nn.Module"),hl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl=m(),R=a("div"),w(ro.$$.fragment),ul=m(),xe=a("p"),gl=r("The "),_a=a("a"),_l=r("BeitModel"),bl=r(" forward method, overrides the "),nn=a("code"),vl=r("__call__"),wl=r(" special method."),xl=m(),w(Ue.$$.fragment),$l=m(),w(Re.$$.fragment),Fs=m(),$e=a("h2"),He=a("a"),sn=a("span"),w(io.$$.fragment),yl=m(),rn=a("span"),Tl=r("BeitForMaskedImageModeling"),Es=m(),te=a("div"),w(lo.$$.fragment),Bl=m(),oe=a("p"),Fl=r(`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ba=a("a"),El=r("AutoModelForMaskedImageModeling"),kl=r(`, so you
will need to use `),va=a("a"),Ml=r("BeitForMaskedImageModeling"),Il=r(` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),co=a("a"),jl=r("torch.nn.Module"),Pl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=m(),H=a("div"),w(mo.$$.fragment),zl=m(),ye=a("p"),Al=r("The "),wa=a("a"),ql=r("BeitForMaskedImageModeling"),Ll=r(" forward method, overrides the "),ln=a("code"),Sl=r("__call__"),Nl=r(" special method."),Ol=m(),w(Je.$$.fragment),Dl=m(),w(Ge.$$.fragment),ks=m(),Te=a("h2"),Xe=a("a"),dn=a("span"),w(po.$$.fragment),Vl=m(),cn=a("span"),Wl=r("BeitForImageClassification"),Ms=m(),D=a("div"),w(ho.$$.fragment),Ul=m(),mn=a("p"),Rl=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Hl=m(),fo=a("p"),Jl=r("This model is a PyTorch "),uo=a("a"),Gl=r("torch.nn.Module"),Xl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kl=m(),J=a("div"),w(go.$$.fragment),Yl=m(),Be=a("p"),Ql=r("The "),xa=a("a"),Zl=r("BeitForImageClassification"),ed=r(" forward method, overrides the "),pn=a("code"),td=r("__call__"),od=r(" special method."),ad=m(),w(Ke.$$.fragment),nd=m(),w(Ye.$$.fragment),Is=m(),Fe=a("h2"),Qe=a("a"),hn=a("span"),w(_o.$$.fragment),sd=m(),fn=a("span"),rd=r("BeitForSemanticSegmentation"),js=m(),V=a("div"),w(bo.$$.fragment),id=m(),un=a("p"),ld=r("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),dd=m(),vo=a("p"),cd=r("This model is a PyTorch "),wo=a("a"),md=r("torch.nn.Module"),pd=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hd=m(),G=a("div"),w(xo.$$.fragment),fd=m(),Ee=a("p"),ud=r("The "),$a=a("a"),gd=r("BeitForSemanticSegmentation"),_d=r(" forward method, overrides the "),gn=a("code"),bd=r("__call__"),vd=r(" special method."),wd=m(),w(Ze.$$.fragment),xd=m(),w(et.$$.fragment),Ps=m(),ke=a("h2"),tt=a("a"),_n=a("span"),w($o.$$.fragment),$d=m(),bn=a("span"),yd=r("FlaxBeitModel"),Cs=m(),I=a("div"),w(yo.$$.fragment),Td=m(),vn=a("p"),Bd=r("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),Fd=m(),To=a("p"),Ed=r("This model inherits from "),ya=a("a"),kd=r("FlaxPreTrainedModel"),Md=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Id=m(),Bo=a("p"),jd=r("This model is also a Flax Linen "),Fo=a("a"),Pd=r("flax.linen.Module"),Cd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zd=m(),wn=a("p"),Ad=r("Finally, this model supports inherent JAX features such as:"),qd=m(),ae=a("ul"),xn=a("li"),Eo=a("a"),Ld=r("Just-In-Time (JIT) compilation"),Sd=m(),$n=a("li"),ko=a("a"),Nd=r("Automatic Differentiation"),Od=m(),yn=a("li"),Mo=a("a"),Dd=r("Vectorization"),Vd=m(),Tn=a("li"),Io=a("a"),Wd=r("Parallelization"),Ud=m(),X=a("div"),w(jo.$$.fragment),Rd=m(),Me=a("p"),Hd=r("The "),Bn=a("code"),Jd=r("FlaxBeitPreTrainedModel"),Gd=r(" forward method, overrides the "),Fn=a("code"),Xd=r("__call__"),Kd=r(" special method."),Yd=m(),w(ot.$$.fragment),Qd=m(),w(at.$$.fragment),zs=m(),Ie=a("h2"),nt=a("a"),En=a("span"),w(Po.$$.fragment),Zd=m(),kn=a("span"),ec=r("FlaxBeitForMaskedImageModeling"),As=m(),j=a("div"),w(Co.$$.fragment),tc=m(),Mn=a("p"),oc=r("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),ac=m(),zo=a("p"),nc=r("This model inherits from "),Ta=a("a"),sc=r("FlaxPreTrainedModel"),rc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ic=m(),Ao=a("p"),lc=r("This model is also a Flax Linen "),qo=a("a"),dc=r("flax.linen.Module"),cc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mc=m(),In=a("p"),pc=r("Finally, this model supports inherent JAX features such as:"),hc=m(),ne=a("ul"),jn=a("li"),Lo=a("a"),fc=r("Just-In-Time (JIT) compilation"),uc=m(),Pn=a("li"),So=a("a"),gc=r("Automatic Differentiation"),_c=m(),Cn=a("li"),No=a("a"),bc=r("Vectorization"),vc=m(),zn=a("li"),Oo=a("a"),wc=r("Parallelization"),xc=m(),q=a("div"),w(Do.$$.fragment),$c=m(),je=a("p"),yc=r("The "),An=a("code"),Tc=r("FlaxBeitPreTrainedModel"),Bc=r(" forward method, overrides the "),qn=a("code"),Fc=r("__call__"),Ec=r(" special method."),kc=m(),w(st.$$.fragment),Mc=m(),Pe=a("p"),Ic=r("bool_masked_pos ("),Ln=a("code"),jc=r("numpy.ndarray"),Pc=r(" of shape "),Sn=a("code"),Cc=r("(batch_size, num_patches)"),zc=r(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Ac=m(),w(rt.$$.fragment),qs=m(),Ce=a("h2"),it=a("a"),Nn=a("span"),w(Vo.$$.fragment),qc=m(),On=a("span"),Lc=r("FlaxBeitForImageClassification"),Ls=m(),P=a("div"),w(Wo.$$.fragment),Sc=m(),Dn=a("p"),Nc=r(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Oc=m(),Uo=a("p"),Dc=r("This model inherits from "),Ba=a("a"),Vc=r("FlaxPreTrainedModel"),Wc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uc=m(),Ro=a("p"),Rc=r("This model is also a Flax Linen "),Ho=a("a"),Hc=r("flax.linen.Module"),Jc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gc=m(),Vn=a("p"),Xc=r("Finally, this model supports inherent JAX features such as:"),Kc=m(),se=a("ul"),Wn=a("li"),Jo=a("a"),Yc=r("Just-In-Time (JIT) compilation"),Qc=m(),Un=a("li"),Go=a("a"),Zc=r("Automatic Differentiation"),em=m(),Rn=a("li"),Xo=a("a"),tm=r("Vectorization"),om=m(),Hn=a("li"),Ko=a("a"),am=r("Parallelization"),nm=m(),K=a("div"),w(Yo.$$.fragment),sm=m(),ze=a("p"),rm=r("The "),Jn=a("code"),im=r("FlaxBeitPreTrainedModel"),lm=r(" forward method, overrides the "),Gn=a("code"),dm=r("__call__"),cm=r(" special method."),mm=m(),w(lt.$$.fragment),pm=m(),w(dt.$$.fragment),this.h()},l(o){const u=Mh('[data-svelte="svelte-1phssyn"]',document.head);c=n(u,"META",{name:!0,content:!0}),u.forEach(t),v=p(o),g=n(o,"H1",{class:!0});var Qo=s(g);f=n(Qo,"A",{id:!0,class:!0,href:!0});var Xn=s(f);b=n(Xn,"SPAN",{});var Kn=s(b);x(l.$$.fragment,Kn),Kn.forEach(t),Xn.forEach(t),h=p(Qo),E=n(Qo,"SPAN",{});var Yn=s(E);hr=i(Yn,"BEiT"),Yn.forEach(t),Qo.forEach(t),ls=p(o),me=n(o,"H2",{class:!0});var Zo=s(me);Ae=n(Zo,"A",{id:!0,class:!0,href:!0});var Qn=s(Ae);Da=n(Qn,"SPAN",{});var Zn=s(Da);x(Et.$$.fragment,Zn),Zn.forEach(t),Qn.forEach(t),fr=p(Zo),Va=n(Zo,"SPAN",{});var es=s(Va);ur=i(es,"Overview"),es.forEach(t),Zo.forEach(t),ds=p(o),W=n(o,"P",{});var re=s(W);gr=i(re,"The BEiT model was proposed in "),kt=n(re,"A",{href:!0,rel:!0});var ts=s(kt);_r=i(ts,"BEiT: BERT Pre-Training of Image Transformers"),ts.forEach(t),br=i(re,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Mt=n(re,"A",{href:!0,rel:!0});var os=s(Mt);vr=i(os,"original ViT paper"),os.forEach(t),wr=i(re,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),It=n(re,"A",{href:!0,rel:!0});var as=s(It);xr=i(as,"DALL-E model"),as.forEach(t),$r=i(re,` given masked
patches.`),re.forEach(t),cs=p(o),ea=n(o,"P",{});var ns=s(ea);yr=i(ns,"The abstract from the paper is the following:"),ns.forEach(t),ms=p(o),ta=n(o,"P",{});var ss=s(ta);Wa=n(ss,"EM",{});var rs=s(Wa);Tr=i(rs,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),rs.forEach(t),ss.forEach(t),ps=p(o),oa=n(o,"P",{});var is=s(oa);Br=i(is,"Tips:"),is.forEach(t),hs=p(o),C=n(o,"UL",{});var Y=s(C);M=n(Y,"LI",{});var z=s(M);Fr=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),aa=n(z,"A",{href:!0});var um=s(aa);Er=i(um,"original model (ViT)"),um.forEach(t),kr=i(z," as well as "),na=n(z,"A",{href:!0});var gm=s(na);Mr=i(gm,"Data-efficient Image Transformers (DeiT)"),gm.forEach(t),Ir=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),jt=n(z,"A",{href:!0,rel:!0});var _m=s(jt);jr=i(_m,"here"),_m.forEach(t),Pr=i(z,` (you can just replace
`),sa=n(z,"A",{href:!0});var bm=s(sa);Cr=i(bm,"ViTFeatureExtractor"),bm.forEach(t),zr=i(z," by "),ra=n(z,"A",{href:!0});var vm=s(ra);Ar=i(vm,"BeitFeatureExtractor"),vm.forEach(t),qr=i(z,` and
`),ia=n(z,"A",{href:!0});var wm=s(ia);Lr=i(wm,"ViTForImageClassification"),wm.forEach(t),Sr=i(z," by "),la=n(z,"A",{href:!0});var xm=s(la);Nr=i(xm,"BeitForImageClassification"),xm.forEach(t),Or=i(z,")."),z.forEach(t),Dr=p(Y),Pt=n(Y,"LI",{});var Ns=s(Pt);Vr=i(Ns,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Ct=n(Ns,"A",{href:!0,rel:!0});var $m=s(Ct);Wr=i($m,"here"),$m.forEach(t),Ur=i(Ns,"."),Ns.forEach(t),Rr=p(Y),zt=n(Y,"LI",{});var Os=s(zt);Hr=i(Os,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),da=n(Os,"A",{href:!0});var ym=s(da);Jr=i(ym,"BeitFeatureExtractor"),ym.forEach(t),Gr=i(Os," to resize (or rescale) and normalize images for the model."),Os.forEach(t),Xr=p(Y),pe=n(Y,"LI",{});var Fa=s(pe);Kr=i(Fa,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ua=n(Fa,"CODE",{});var Tm=s(Ua);Yr=i(Tm,"microsoft/beit-base-patch16-224"),Tm.forEach(t),Qr=i(Fa,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),At=n(Fa,"A",{href:!0,rel:!0});var Bm=s(At);Zr=i(Bm,"hub"),Bm.forEach(t),ei=i(Fa,"."),Fa.forEach(t),ti=p(Y),he=n(Y,"LI",{});var Ea=s(he);oi=i(Ea,"The available checkpoints are either (1) pre-trained on "),qt=n(Ea,"A",{href:!0,rel:!0});var Fm=s(qt);ai=i(Fm,"ImageNet-22k"),Fm.forEach(t),ni=i(Ea,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Lt=n(Ea,"A",{href:!0,rel:!0});var Em=s(Lt);si=i(Em,"ImageNet-1k"),Em.forEach(t),ri=i(Ea,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Ea.forEach(t),ii=p(Y),O=n(Y,"LI",{});var le=s(O);li=i(le,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Ra=n(le,"CODE",{});var km=s(Ra);di=i(km,"use_relative_position_bias"),km.forEach(t),ci=i(le,` or the
`),Ha=n(le,"CODE",{});var Mm=s(Ha);mi=i(Mm,"use_relative_position_bias"),Mm.forEach(t),pi=i(le," attribute of "),ca=n(le,"A",{href:!0});var Im=s(ca);hi=i(Im,"BeitConfig"),Im.forEach(t),fi=i(le," to "),Ja=n(le,"CODE",{});var jm=s(Ja);ui=i(jm,"True"),jm.forEach(t),gi=i(le,` in order to add
position embeddings.`),le.forEach(t),Y.forEach(t),fs=p(o),qe=n(o,"IMG",{src:!0,alt:!0,width:!0}),us=p(o),St=n(o,"SMALL",{});var hm=s(St);_i=i(hm,"BEiT pre-training. Taken from the "),ma=n(hm,"A",{href:!0});var Pm=s(ma);bi=i(Pm,"original paper."),Pm.forEach(t),hm.forEach(t),gs=p(o),U=n(o,"P",{});var ct=s(U);vi=i(ct,"This model was contributed by "),Nt=n(ct,"A",{href:!0,rel:!0});var Cm=s(Nt);wi=i(Cm,"nielsr"),Cm.forEach(t),xi=i(ct,`. The JAX/FLAX version of this model was
contributed by `),Ot=n(ct,"A",{href:!0,rel:!0});var zm=s(Ot);$i=i(zm,"kamalkraj"),zm.forEach(t),yi=i(ct,". The original code can be found "),Dt=n(ct,"A",{href:!0,rel:!0});var Am=s(Dt);Ti=i(Am,"here"),Am.forEach(t),Bi=i(ct,"."),ct.forEach(t),_s=p(o),fe=n(o,"H2",{class:!0});var Ds=s(fe);Le=n(Ds,"A",{id:!0,class:!0,href:!0});var qm=s(Le);Ga=n(qm,"SPAN",{});var Lm=s(Ga);x(Vt.$$.fragment,Lm),Lm.forEach(t),qm.forEach(t),Fi=p(Ds),Xa=n(Ds,"SPAN",{});var Sm=s(Xa);Ei=i(Sm,"BEiT specific outputs"),Sm.forEach(t),Ds.forEach(t),bs=p(o),ue=n(o,"DIV",{class:!0});var Vs=s(ue);x(Wt.$$.fragment,Vs),ki=p(Vs),Ut=n(Vs,"P",{});var Ws=s(Ut);Mi=i(Ws,"Class for outputs of "),pa=n(Ws,"A",{href:!0});var Nm=s(pa);Ii=i(Nm,"BeitModel"),Nm.forEach(t),ji=i(Ws,"."),Ws.forEach(t),Vs.forEach(t),vs=p(o),ge=n(o,"DIV",{class:!0});var Us=s(ge);x(Rt.$$.fragment,Us),Pi=p(Us),Ht=n(Us,"P",{});var Rs=s(Ht);Ci=i(Rs,"Class for outputs of "),ha=n(Rs,"A",{href:!0});var Om=s(ha);zi=i(Om,"FlaxBeitModel"),Om.forEach(t),Ai=i(Rs,"."),Rs.forEach(t),Us.forEach(t),ws=p(o),_e=n(o,"H2",{class:!0});var Hs=s(_e);Se=n(Hs,"A",{id:!0,class:!0,href:!0});var Dm=s(Se);Ka=n(Dm,"SPAN",{});var Vm=s(Ka);x(Jt.$$.fragment,Vm),Vm.forEach(t),Dm.forEach(t),qi=p(Hs),Ya=n(Hs,"SPAN",{});var Wm=s(Ya);Li=i(Wm,"BeitConfig"),Wm.forEach(t),Hs.forEach(t),xs=p(o),Z=n(o,"DIV",{class:!0});var ka=s(Z);x(Gt.$$.fragment,ka),Si=p(ka),be=n(ka,"P",{});var Ma=s(be);Ni=i(Ma,"This is the configuration class to store the configuration of a "),fa=n(Ma,"A",{href:!0});var Um=s(fa);Oi=i(Um,"BeitModel"),Um.forEach(t),Di=i(Ma,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Xt=n(Ma,"A",{href:!0,rel:!0});var Rm=s(Xt);Vi=i(Rm,"microsoft/beit-base-patch16-224-pt22k"),Rm.forEach(t),Wi=i(Ma," architecture."),Ma.forEach(t),Ui=p(ka),x(Ne.$$.fragment,ka),ka.forEach(t),$s=p(o),ve=n(o,"H2",{class:!0});var Js=s(ve);Oe=n(Js,"A",{id:!0,class:!0,href:!0});var Hm=s(Oe);Qa=n(Hm,"SPAN",{});var Jm=s(Qa);x(Kt.$$.fragment,Jm),Jm.forEach(t),Hm.forEach(t),Ri=p(Js),Za=n(Js,"SPAN",{});var Gm=s(Za);Hi=i(Gm,"BeitFeatureExtractor"),Gm.forEach(t),Js.forEach(t),ys=p(o),A=n(o,"DIV",{class:!0});var de=s(A);x(Yt.$$.fragment,de),Ji=p(de),en=n(de,"P",{});var Xm=s(en);Gi=i(Xm,"Constructs a BEiT feature extractor."),Xm.forEach(t),Xi=p(de),Qt=n(de,"P",{});var Gs=s(Qt);Ki=i(Gs,"This feature extractor inherits from "),ua=n(Gs,"A",{href:!0});var Km=s(ua);Yi=i(Km,"FeatureExtractionMixin"),Km.forEach(t),Qi=i(Gs,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Gs.forEach(t),Zi=p(de),ie=n(de,"DIV",{class:!0});var Ia=s(ie);x(Zt.$$.fragment,Ia),el=p(Ia),tn=n(Ia,"P",{});var Ym=s(tn);tl=i(Ym,"Main method to prepare for the model one or several image(s)."),Ym.forEach(t),ol=p(Ia),x(De.$$.fragment,Ia),Ia.forEach(t),al=p(de),Ve=n(de,"DIV",{class:!0});var Xs=s(Ve);x(eo.$$.fragment,Xs),nl=p(Xs),to=n(Xs,"P",{});var Ks=s(to);sl=i(Ks,"Converts the output of "),ga=n(Ks,"A",{href:!0});var Qm=s(ga);rl=i(Qm,"BeitForSemanticSegmentation"),Qm.forEach(t),il=i(Ks," into semantic segmentation maps. Only supports PyTorch."),Ks.forEach(t),Xs.forEach(t),de.forEach(t),Ts=p(o),we=n(o,"H2",{class:!0});var Ys=s(we);We=n(Ys,"A",{id:!0,class:!0,href:!0});var Zm=s(We);on=n(Zm,"SPAN",{});var ep=s(on);x(oo.$$.fragment,ep),ep.forEach(t),Zm.forEach(t),ll=p(Ys),an=n(Ys,"SPAN",{});var tp=s(an);dl=i(tp,"BeitModel"),tp.forEach(t),Ys.forEach(t),Bs=p(o),ee=n(o,"DIV",{class:!0});var ja=s(ee);x(ao.$$.fragment,ja),cl=p(ja),no=n(ja,"P",{});var Qs=s(no);ml=i(Qs,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),so=n(Qs,"A",{href:!0,rel:!0});var op=s(so);pl=i(op,"torch.nn.Module"),op.forEach(t),hl=i(Qs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qs.forEach(t),fl=p(ja),R=n(ja,"DIV",{class:!0});var mt=s(R);x(ro.$$.fragment,mt),ul=p(mt),xe=n(mt,"P",{});var Pa=s(xe);gl=i(Pa,"The "),_a=n(Pa,"A",{href:!0});var ap=s(_a);_l=i(ap,"BeitModel"),ap.forEach(t),bl=i(Pa," forward method, overrides the "),nn=n(Pa,"CODE",{});var np=s(nn);vl=i(np,"__call__"),np.forEach(t),wl=i(Pa," special method."),Pa.forEach(t),xl=p(mt),x(Ue.$$.fragment,mt),$l=p(mt),x(Re.$$.fragment,mt),mt.forEach(t),ja.forEach(t),Fs=p(o),$e=n(o,"H2",{class:!0});var Zs=s($e);He=n(Zs,"A",{id:!0,class:!0,href:!0});var sp=s(He);sn=n(sp,"SPAN",{});var rp=s(sn);x(io.$$.fragment,rp),rp.forEach(t),sp.forEach(t),yl=p(Zs),rn=n(Zs,"SPAN",{});var ip=s(rn);Tl=i(ip,"BeitForMaskedImageModeling"),ip.forEach(t),Zs.forEach(t),Es=p(o),te=n(o,"DIV",{class:!0});var Ca=s(te);x(lo.$$.fragment,Ca),Bl=p(Ca),oe=n(Ca,"P",{});var pt=s(oe);Fl=i(pt,`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),ba=n(pt,"A",{href:!0});var lp=s(ba);El=i(lp,"AutoModelForMaskedImageModeling"),lp.forEach(t),kl=i(pt,`, so you
will need to use `),va=n(pt,"A",{href:!0});var dp=s(va);Ml=i(dp,"BeitForMaskedImageModeling"),dp.forEach(t),Il=i(pt,` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),co=n(pt,"A",{href:!0,rel:!0});var cp=s(co);jl=i(cp,"torch.nn.Module"),cp.forEach(t),Pl=i(pt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pt.forEach(t),Cl=p(Ca),H=n(Ca,"DIV",{class:!0});var ht=s(H);x(mo.$$.fragment,ht),zl=p(ht),ye=n(ht,"P",{});var za=s(ye);Al=i(za,"The "),wa=n(za,"A",{href:!0});var mp=s(wa);ql=i(mp,"BeitForMaskedImageModeling"),mp.forEach(t),Ll=i(za," forward method, overrides the "),ln=n(za,"CODE",{});var pp=s(ln);Sl=i(pp,"__call__"),pp.forEach(t),Nl=i(za," special method."),za.forEach(t),Ol=p(ht),x(Je.$$.fragment,ht),Dl=p(ht),x(Ge.$$.fragment,ht),ht.forEach(t),Ca.forEach(t),ks=p(o),Te=n(o,"H2",{class:!0});var er=s(Te);Xe=n(er,"A",{id:!0,class:!0,href:!0});var hp=s(Xe);dn=n(hp,"SPAN",{});var fp=s(dn);x(po.$$.fragment,fp),fp.forEach(t),hp.forEach(t),Vl=p(er),cn=n(er,"SPAN",{});var up=s(cn);Wl=i(up,"BeitForImageClassification"),up.forEach(t),er.forEach(t),Ms=p(o),D=n(o,"DIV",{class:!0});var ft=s(D);x(ho.$$.fragment,ft),Ul=p(ft),mn=n(ft,"P",{});var gp=s(mn);Rl=i(gp,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),gp.forEach(t),Hl=p(ft),fo=n(ft,"P",{});var tr=s(fo);Jl=i(tr,"This model is a PyTorch "),uo=n(tr,"A",{href:!0,rel:!0});var _p=s(uo);Gl=i(_p,"torch.nn.Module"),_p.forEach(t),Xl=i(tr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tr.forEach(t),Kl=p(ft),J=n(ft,"DIV",{class:!0});var ut=s(J);x(go.$$.fragment,ut),Yl=p(ut),Be=n(ut,"P",{});var Aa=s(Be);Ql=i(Aa,"The "),xa=n(Aa,"A",{href:!0});var bp=s(xa);Zl=i(bp,"BeitForImageClassification"),bp.forEach(t),ed=i(Aa," forward method, overrides the "),pn=n(Aa,"CODE",{});var vp=s(pn);td=i(vp,"__call__"),vp.forEach(t),od=i(Aa," special method."),Aa.forEach(t),ad=p(ut),x(Ke.$$.fragment,ut),nd=p(ut),x(Ye.$$.fragment,ut),ut.forEach(t),ft.forEach(t),Is=p(o),Fe=n(o,"H2",{class:!0});var or=s(Fe);Qe=n(or,"A",{id:!0,class:!0,href:!0});var wp=s(Qe);hn=n(wp,"SPAN",{});var xp=s(hn);x(_o.$$.fragment,xp),xp.forEach(t),wp.forEach(t),sd=p(or),fn=n(or,"SPAN",{});var $p=s(fn);rd=i($p,"BeitForSemanticSegmentation"),$p.forEach(t),or.forEach(t),js=p(o),V=n(o,"DIV",{class:!0});var gt=s(V);x(bo.$$.fragment,gt),id=p(gt),un=n(gt,"P",{});var yp=s(un);ld=i(yp,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),yp.forEach(t),dd=p(gt),vo=n(gt,"P",{});var ar=s(vo);cd=i(ar,"This model is a PyTorch "),wo=n(ar,"A",{href:!0,rel:!0});var Tp=s(wo);md=i(Tp,"torch.nn.Module"),Tp.forEach(t),pd=i(ar,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ar.forEach(t),hd=p(gt),G=n(gt,"DIV",{class:!0});var _t=s(G);x(xo.$$.fragment,_t),fd=p(_t),Ee=n(_t,"P",{});var qa=s(Ee);ud=i(qa,"The "),$a=n(qa,"A",{href:!0});var Bp=s($a);gd=i(Bp,"BeitForSemanticSegmentation"),Bp.forEach(t),_d=i(qa," forward method, overrides the "),gn=n(qa,"CODE",{});var Fp=s(gn);bd=i(Fp,"__call__"),Fp.forEach(t),vd=i(qa," special method."),qa.forEach(t),wd=p(_t),x(Ze.$$.fragment,_t),xd=p(_t),x(et.$$.fragment,_t),_t.forEach(t),gt.forEach(t),Ps=p(o),ke=n(o,"H2",{class:!0});var nr=s(ke);tt=n(nr,"A",{id:!0,class:!0,href:!0});var Ep=s(tt);_n=n(Ep,"SPAN",{});var kp=s(_n);x($o.$$.fragment,kp),kp.forEach(t),Ep.forEach(t),$d=p(nr),bn=n(nr,"SPAN",{});var Mp=s(bn);yd=i(Mp,"FlaxBeitModel"),Mp.forEach(t),nr.forEach(t),Cs=p(o),I=n(o,"DIV",{class:!0});var L=s(I);x(yo.$$.fragment,L),Td=p(L),vn=n(L,"P",{});var Ip=s(vn);Bd=i(Ip,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),Ip.forEach(t),Fd=p(L),To=n(L,"P",{});var sr=s(To);Ed=i(sr,"This model inherits from "),ya=n(sr,"A",{href:!0});var jp=s(ya);kd=i(jp,"FlaxPreTrainedModel"),jp.forEach(t),Md=i(sr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sr.forEach(t),Id=p(L),Bo=n(L,"P",{});var rr=s(Bo);jd=i(rr,"This model is also a Flax Linen "),Fo=n(rr,"A",{href:!0,rel:!0});var Pp=s(Fo);Pd=i(Pp,"flax.linen.Module"),Pp.forEach(t),Cd=i(rr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rr.forEach(t),zd=p(L),wn=n(L,"P",{});var Cp=s(wn);Ad=i(Cp,"Finally, this model supports inherent JAX features such as:"),Cp.forEach(t),qd=p(L),ae=n(L,"UL",{});var bt=s(ae);xn=n(bt,"LI",{});var zp=s(xn);Eo=n(zp,"A",{href:!0,rel:!0});var Ap=s(Eo);Ld=i(Ap,"Just-In-Time (JIT) compilation"),Ap.forEach(t),zp.forEach(t),Sd=p(bt),$n=n(bt,"LI",{});var qp=s($n);ko=n(qp,"A",{href:!0,rel:!0});var Lp=s(ko);Nd=i(Lp,"Automatic Differentiation"),Lp.forEach(t),qp.forEach(t),Od=p(bt),yn=n(bt,"LI",{});var Sp=s(yn);Mo=n(Sp,"A",{href:!0,rel:!0});var Np=s(Mo);Dd=i(Np,"Vectorization"),Np.forEach(t),Sp.forEach(t),Vd=p(bt),Tn=n(bt,"LI",{});var Op=s(Tn);Io=n(Op,"A",{href:!0,rel:!0});var Dp=s(Io);Wd=i(Dp,"Parallelization"),Dp.forEach(t),Op.forEach(t),bt.forEach(t),Ud=p(L),X=n(L,"DIV",{class:!0});var vt=s(X);x(jo.$$.fragment,vt),Rd=p(vt),Me=n(vt,"P",{});var La=s(Me);Hd=i(La,"The "),Bn=n(La,"CODE",{});var Vp=s(Bn);Jd=i(Vp,"FlaxBeitPreTrainedModel"),Vp.forEach(t),Gd=i(La," forward method, overrides the "),Fn=n(La,"CODE",{});var Wp=s(Fn);Xd=i(Wp,"__call__"),Wp.forEach(t),Kd=i(La," special method."),La.forEach(t),Yd=p(vt),x(ot.$$.fragment,vt),Qd=p(vt),x(at.$$.fragment,vt),vt.forEach(t),L.forEach(t),zs=p(o),Ie=n(o,"H2",{class:!0});var ir=s(Ie);nt=n(ir,"A",{id:!0,class:!0,href:!0});var Up=s(nt);En=n(Up,"SPAN",{});var Rp=s(En);x(Po.$$.fragment,Rp),Rp.forEach(t),Up.forEach(t),Zd=p(ir),kn=n(ir,"SPAN",{});var Hp=s(kn);ec=i(Hp,"FlaxBeitForMaskedImageModeling"),Hp.forEach(t),ir.forEach(t),As=p(o),j=n(o,"DIV",{class:!0});var S=s(j);x(Co.$$.fragment,S),tc=p(S),Mn=n(S,"P",{});var Jp=s(Mn);oc=i(Jp,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Jp.forEach(t),ac=p(S),zo=n(S,"P",{});var lr=s(zo);nc=i(lr,"This model inherits from "),Ta=n(lr,"A",{href:!0});var Gp=s(Ta);sc=i(Gp,"FlaxPreTrainedModel"),Gp.forEach(t),rc=i(lr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lr.forEach(t),ic=p(S),Ao=n(S,"P",{});var dr=s(Ao);lc=i(dr,"This model is also a Flax Linen "),qo=n(dr,"A",{href:!0,rel:!0});var Xp=s(qo);dc=i(Xp,"flax.linen.Module"),Xp.forEach(t),cc=i(dr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dr.forEach(t),mc=p(S),In=n(S,"P",{});var Kp=s(In);pc=i(Kp,"Finally, this model supports inherent JAX features such as:"),Kp.forEach(t),hc=p(S),ne=n(S,"UL",{});var wt=s(ne);jn=n(wt,"LI",{});var Yp=s(jn);Lo=n(Yp,"A",{href:!0,rel:!0});var Qp=s(Lo);fc=i(Qp,"Just-In-Time (JIT) compilation"),Qp.forEach(t),Yp.forEach(t),uc=p(wt),Pn=n(wt,"LI",{});var Zp=s(Pn);So=n(Zp,"A",{href:!0,rel:!0});var eh=s(So);gc=i(eh,"Automatic Differentiation"),eh.forEach(t),Zp.forEach(t),_c=p(wt),Cn=n(wt,"LI",{});var th=s(Cn);No=n(th,"A",{href:!0,rel:!0});var oh=s(No);bc=i(oh,"Vectorization"),oh.forEach(t),th.forEach(t),vc=p(wt),zn=n(wt,"LI",{});var ah=s(zn);Oo=n(ah,"A",{href:!0,rel:!0});var nh=s(Oo);wc=i(nh,"Parallelization"),nh.forEach(t),ah.forEach(t),wt.forEach(t),xc=p(S),q=n(S,"DIV",{class:!0});var ce=s(q);x(Do.$$.fragment,ce),$c=p(ce),je=n(ce,"P",{});var Sa=s(je);yc=i(Sa,"The "),An=n(Sa,"CODE",{});var sh=s(An);Tc=i(sh,"FlaxBeitPreTrainedModel"),sh.forEach(t),Bc=i(Sa," forward method, overrides the "),qn=n(Sa,"CODE",{});var rh=s(qn);Fc=i(rh,"__call__"),rh.forEach(t),Ec=i(Sa," special method."),Sa.forEach(t),kc=p(ce),x(st.$$.fragment,ce),Mc=p(ce),Pe=n(ce,"P",{});var Na=s(Pe);Ic=i(Na,"bool_masked_pos ("),Ln=n(Na,"CODE",{});var ih=s(Ln);jc=i(ih,"numpy.ndarray"),ih.forEach(t),Pc=i(Na," of shape "),Sn=n(Na,"CODE",{});var lh=s(Sn);Cc=i(lh,"(batch_size, num_patches)"),lh.forEach(t),zc=i(Na,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Na.forEach(t),Ac=p(ce),x(rt.$$.fragment,ce),ce.forEach(t),S.forEach(t),qs=p(o),Ce=n(o,"H2",{class:!0});var cr=s(Ce);it=n(cr,"A",{id:!0,class:!0,href:!0});var dh=s(it);Nn=n(dh,"SPAN",{});var ch=s(Nn);x(Vo.$$.fragment,ch),ch.forEach(t),dh.forEach(t),qc=p(cr),On=n(cr,"SPAN",{});var mh=s(On);Lc=i(mh,"FlaxBeitForImageClassification"),mh.forEach(t),cr.forEach(t),Ls=p(o),P=n(o,"DIV",{class:!0});var N=s(P);x(Wo.$$.fragment,N),Sc=p(N),Dn=n(N,"P",{});var ph=s(Dn);Nc=i(ph,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),ph.forEach(t),Oc=p(N),Uo=n(N,"P",{});var mr=s(Uo);Dc=i(mr,"This model inherits from "),Ba=n(mr,"A",{href:!0});var hh=s(Ba);Vc=i(hh,"FlaxPreTrainedModel"),hh.forEach(t),Wc=i(mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mr.forEach(t),Uc=p(N),Ro=n(N,"P",{});var pr=s(Ro);Rc=i(pr,"This model is also a Flax Linen "),Ho=n(pr,"A",{href:!0,rel:!0});var fh=s(Ho);Hc=i(fh,"flax.linen.Module"),fh.forEach(t),Jc=i(pr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pr.forEach(t),Gc=p(N),Vn=n(N,"P",{});var uh=s(Vn);Xc=i(uh,"Finally, this model supports inherent JAX features such as:"),uh.forEach(t),Kc=p(N),se=n(N,"UL",{});var xt=s(se);Wn=n(xt,"LI",{});var gh=s(Wn);Jo=n(gh,"A",{href:!0,rel:!0});var _h=s(Jo);Yc=i(_h,"Just-In-Time (JIT) compilation"),_h.forEach(t),gh.forEach(t),Qc=p(xt),Un=n(xt,"LI",{});var bh=s(Un);Go=n(bh,"A",{href:!0,rel:!0});var vh=s(Go);Zc=i(vh,"Automatic Differentiation"),vh.forEach(t),bh.forEach(t),em=p(xt),Rn=n(xt,"LI",{});var wh=s(Rn);Xo=n(wh,"A",{href:!0,rel:!0});var xh=s(Xo);tm=i(xh,"Vectorization"),xh.forEach(t),wh.forEach(t),om=p(xt),Hn=n(xt,"LI",{});var $h=s(Hn);Ko=n($h,"A",{href:!0,rel:!0});var yh=s(Ko);am=i(yh,"Parallelization"),yh.forEach(t),$h.forEach(t),xt.forEach(t),nm=p(N),K=n(N,"DIV",{class:!0});var $t=s(K);x(Yo.$$.fragment,$t),sm=p($t),ze=n($t,"P",{});var Oa=s(ze);rm=i(Oa,"The "),Jn=n(Oa,"CODE",{});var Th=s(Jn);im=i(Th,"FlaxBeitPreTrainedModel"),Th.forEach(t),lm=i(Oa," forward method, overrides the "),Gn=n(Oa,"CODE",{});var Bh=s(Gn);dm=i(Bh,"__call__"),Bh.forEach(t),cm=i(Oa," special method."),Oa.forEach(t),mm=p($t),x(lt.$$.fragment,$t),pm=p($t),x(dt.$$.fragment,$t),$t.forEach(t),N.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Xh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(g,"class","relative group"),d(Ae,"id","overview"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#overview"),d(me,"class","relative group"),d(kt,"href","https://arxiv.org/abs/2106.08254"),d(kt,"rel","nofollow"),d(Mt,"href","https://arxiv.org/abs/2010.11929"),d(Mt,"rel","nofollow"),d(It,"href","https://arxiv.org/abs/2102.12092"),d(It,"rel","nofollow"),d(aa,"href","vit"),d(na,"href","deit"),d(jt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(jt,"rel","nofollow"),d(sa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(ra,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(ia,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),d(la,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(Ct,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(Ct,"rel","nofollow"),d(da,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(At,"href","https://huggingface.co/models?search=microsoft/beit"),d(At,"rel","nofollow"),d(qt,"href","http://www.image-net.org/"),d(qt,"rel","nofollow"),d(Lt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(Lt,"rel","nofollow"),d(ca,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitConfig"),Ih(qe.src,fm="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/beit_architecture.jpg")||d(qe,"src",fm),d(qe,"alt","drawing"),d(qe,"width","600"),d(ma,"href","https://arxiv.org/abs/2106.08254"),d(Nt,"href","https://huggingface.co/nielsr"),d(Nt,"rel","nofollow"),d(Ot,"href","https://huggingface.co/kamalkraj"),d(Ot,"rel","nofollow"),d(Dt,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(Dt,"rel","nofollow"),d(Le,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(fe,"class","relative group"),d(pa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ha,"href","/docs/transformers/main/en/model_doc/beit#transformers.FlaxBeitModel"),d(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.BeitConfig"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.BeitConfig"),d(_e,"class","relative group"),d(fa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(Xt,"href","https://huggingface.co/microsoft/beit-base-patch16-224-pt22k"),d(Xt,"rel","nofollow"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Oe,"id","transformers.BeitFeatureExtractor"),d(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Oe,"href","#transformers.BeitFeatureExtractor"),d(ve,"class","relative group"),d(ua,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ga,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitModel"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitModel"),d(we,"class","relative group"),d(so,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(so,"rel","nofollow"),d(_a,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.BeitForMaskedImageModeling"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.BeitForMaskedImageModeling"),d($e,"class","relative group"),d(ba,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoModelForMaskedImageModeling"),d(va,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(co,"rel","nofollow"),d(wa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForImageClassification"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForImageClassification"),d(Te,"class","relative group"),d(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(uo,"rel","nofollow"),d(xa,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"id","transformers.BeitForSemanticSegmentation"),d(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Qe,"href","#transformers.BeitForSemanticSegmentation"),d(Fe,"class","relative group"),d(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wo,"rel","nofollow"),d($a,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(tt,"id","transformers.FlaxBeitModel"),d(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(tt,"href","#transformers.FlaxBeitModel"),d(ke,"class","relative group"),d(ya,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Fo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Fo,"rel","nofollow"),d(Eo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Eo,"rel","nofollow"),d(ko,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(ko,"rel","nofollow"),d(Mo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Mo,"rel","nofollow"),d(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Io,"rel","nofollow"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(nt,"id","transformers.FlaxBeitForMaskedImageModeling"),d(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(nt,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(Ie,"class","relative group"),d(Ta,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(qo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(qo,"rel","nofollow"),d(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Lo,"rel","nofollow"),d(So,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(So,"rel","nofollow"),d(No,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(No,"rel","nofollow"),d(Oo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Oo,"rel","nofollow"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(it,"id","transformers.FlaxBeitForImageClassification"),d(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(it,"href","#transformers.FlaxBeitForImageClassification"),d(Ce,"class","relative group"),d(Ba,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Ho,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Ho,"rel","nofollow"),d(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Jo,"rel","nofollow"),d(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Go,"rel","nofollow"),d(Xo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Xo,"rel","nofollow"),d(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ko,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,c),_(o,v,u),_(o,g,u),e(g,f),e(f,b),$(l,b,null),e(g,h),e(g,E),e(E,hr),_(o,ls,u),_(o,me,u),e(me,Ae),e(Ae,Da),$(Et,Da,null),e(me,fr),e(me,Va),e(Va,ur),_(o,ds,u),_(o,W,u),e(W,gr),e(W,kt),e(kt,_r),e(W,br),e(W,Mt),e(Mt,vr),e(W,wr),e(W,It),e(It,xr),e(W,$r),_(o,cs,u),_(o,ea,u),e(ea,yr),_(o,ms,u),_(o,ta,u),e(ta,Wa),e(Wa,Tr),_(o,ps,u),_(o,oa,u),e(oa,Br),_(o,hs,u),_(o,C,u),e(C,M),e(M,Fr),e(M,aa),e(aa,Er),e(M,kr),e(M,na),e(na,Mr),e(M,Ir),e(M,jt),e(jt,jr),e(M,Pr),e(M,sa),e(sa,Cr),e(M,zr),e(M,ra),e(ra,Ar),e(M,qr),e(M,ia),e(ia,Lr),e(M,Sr),e(M,la),e(la,Nr),e(M,Or),e(C,Dr),e(C,Pt),e(Pt,Vr),e(Pt,Ct),e(Ct,Wr),e(Pt,Ur),e(C,Rr),e(C,zt),e(zt,Hr),e(zt,da),e(da,Jr),e(zt,Gr),e(C,Xr),e(C,pe),e(pe,Kr),e(pe,Ua),e(Ua,Yr),e(pe,Qr),e(pe,At),e(At,Zr),e(pe,ei),e(C,ti),e(C,he),e(he,oi),e(he,qt),e(qt,ai),e(he,ni),e(he,Lt),e(Lt,si),e(he,ri),e(C,ii),e(C,O),e(O,li),e(O,Ra),e(Ra,di),e(O,ci),e(O,Ha),e(Ha,mi),e(O,pi),e(O,ca),e(ca,hi),e(O,fi),e(O,Ja),e(Ja,ui),e(O,gi),_(o,fs,u),_(o,qe,u),_(o,us,u),_(o,St,u),e(St,_i),e(St,ma),e(ma,bi),_(o,gs,u),_(o,U,u),e(U,vi),e(U,Nt),e(Nt,wi),e(U,xi),e(U,Ot),e(Ot,$i),e(U,yi),e(U,Dt),e(Dt,Ti),e(U,Bi),_(o,_s,u),_(o,fe,u),e(fe,Le),e(Le,Ga),$(Vt,Ga,null),e(fe,Fi),e(fe,Xa),e(Xa,Ei),_(o,bs,u),_(o,ue,u),$(Wt,ue,null),e(ue,ki),e(ue,Ut),e(Ut,Mi),e(Ut,pa),e(pa,Ii),e(Ut,ji),_(o,vs,u),_(o,ge,u),$(Rt,ge,null),e(ge,Pi),e(ge,Ht),e(Ht,Ci),e(Ht,ha),e(ha,zi),e(Ht,Ai),_(o,ws,u),_(o,_e,u),e(_e,Se),e(Se,Ka),$(Jt,Ka,null),e(_e,qi),e(_e,Ya),e(Ya,Li),_(o,xs,u),_(o,Z,u),$(Gt,Z,null),e(Z,Si),e(Z,be),e(be,Ni),e(be,fa),e(fa,Oi),e(be,Di),e(be,Xt),e(Xt,Vi),e(be,Wi),e(Z,Ui),$(Ne,Z,null),_(o,$s,u),_(o,ve,u),e(ve,Oe),e(Oe,Qa),$(Kt,Qa,null),e(ve,Ri),e(ve,Za),e(Za,Hi),_(o,ys,u),_(o,A,u),$(Yt,A,null),e(A,Ji),e(A,en),e(en,Gi),e(A,Xi),e(A,Qt),e(Qt,Ki),e(Qt,ua),e(ua,Yi),e(Qt,Qi),e(A,Zi),e(A,ie),$(Zt,ie,null),e(ie,el),e(ie,tn),e(tn,tl),e(ie,ol),$(De,ie,null),e(A,al),e(A,Ve),$(eo,Ve,null),e(Ve,nl),e(Ve,to),e(to,sl),e(to,ga),e(ga,rl),e(to,il),_(o,Ts,u),_(o,we,u),e(we,We),e(We,on),$(oo,on,null),e(we,ll),e(we,an),e(an,dl),_(o,Bs,u),_(o,ee,u),$(ao,ee,null),e(ee,cl),e(ee,no),e(no,ml),e(no,so),e(so,pl),e(no,hl),e(ee,fl),e(ee,R),$(ro,R,null),e(R,ul),e(R,xe),e(xe,gl),e(xe,_a),e(_a,_l),e(xe,bl),e(xe,nn),e(nn,vl),e(xe,wl),e(R,xl),$(Ue,R,null),e(R,$l),$(Re,R,null),_(o,Fs,u),_(o,$e,u),e($e,He),e(He,sn),$(io,sn,null),e($e,yl),e($e,rn),e(rn,Tl),_(o,Es,u),_(o,te,u),$(lo,te,null),e(te,Bl),e(te,oe),e(oe,Fl),e(oe,ba),e(ba,El),e(oe,kl),e(oe,va),e(va,Ml),e(oe,Il),e(oe,co),e(co,jl),e(oe,Pl),e(te,Cl),e(te,H),$(mo,H,null),e(H,zl),e(H,ye),e(ye,Al),e(ye,wa),e(wa,ql),e(ye,Ll),e(ye,ln),e(ln,Sl),e(ye,Nl),e(H,Ol),$(Je,H,null),e(H,Dl),$(Ge,H,null),_(o,ks,u),_(o,Te,u),e(Te,Xe),e(Xe,dn),$(po,dn,null),e(Te,Vl),e(Te,cn),e(cn,Wl),_(o,Ms,u),_(o,D,u),$(ho,D,null),e(D,Ul),e(D,mn),e(mn,Rl),e(D,Hl),e(D,fo),e(fo,Jl),e(fo,uo),e(uo,Gl),e(fo,Xl),e(D,Kl),e(D,J),$(go,J,null),e(J,Yl),e(J,Be),e(Be,Ql),e(Be,xa),e(xa,Zl),e(Be,ed),e(Be,pn),e(pn,td),e(Be,od),e(J,ad),$(Ke,J,null),e(J,nd),$(Ye,J,null),_(o,Is,u),_(o,Fe,u),e(Fe,Qe),e(Qe,hn),$(_o,hn,null),e(Fe,sd),e(Fe,fn),e(fn,rd),_(o,js,u),_(o,V,u),$(bo,V,null),e(V,id),e(V,un),e(un,ld),e(V,dd),e(V,vo),e(vo,cd),e(vo,wo),e(wo,md),e(vo,pd),e(V,hd),e(V,G),$(xo,G,null),e(G,fd),e(G,Ee),e(Ee,ud),e(Ee,$a),e($a,gd),e(Ee,_d),e(Ee,gn),e(gn,bd),e(Ee,vd),e(G,wd),$(Ze,G,null),e(G,xd),$(et,G,null),_(o,Ps,u),_(o,ke,u),e(ke,tt),e(tt,_n),$($o,_n,null),e(ke,$d),e(ke,bn),e(bn,yd),_(o,Cs,u),_(o,I,u),$(yo,I,null),e(I,Td),e(I,vn),e(vn,Bd),e(I,Fd),e(I,To),e(To,Ed),e(To,ya),e(ya,kd),e(To,Md),e(I,Id),e(I,Bo),e(Bo,jd),e(Bo,Fo),e(Fo,Pd),e(Bo,Cd),e(I,zd),e(I,wn),e(wn,Ad),e(I,qd),e(I,ae),e(ae,xn),e(xn,Eo),e(Eo,Ld),e(ae,Sd),e(ae,$n),e($n,ko),e(ko,Nd),e(ae,Od),e(ae,yn),e(yn,Mo),e(Mo,Dd),e(ae,Vd),e(ae,Tn),e(Tn,Io),e(Io,Wd),e(I,Ud),e(I,X),$(jo,X,null),e(X,Rd),e(X,Me),e(Me,Hd),e(Me,Bn),e(Bn,Jd),e(Me,Gd),e(Me,Fn),e(Fn,Xd),e(Me,Kd),e(X,Yd),$(ot,X,null),e(X,Qd),$(at,X,null),_(o,zs,u),_(o,Ie,u),e(Ie,nt),e(nt,En),$(Po,En,null),e(Ie,Zd),e(Ie,kn),e(kn,ec),_(o,As,u),_(o,j,u),$(Co,j,null),e(j,tc),e(j,Mn),e(Mn,oc),e(j,ac),e(j,zo),e(zo,nc),e(zo,Ta),e(Ta,sc),e(zo,rc),e(j,ic),e(j,Ao),e(Ao,lc),e(Ao,qo),e(qo,dc),e(Ao,cc),e(j,mc),e(j,In),e(In,pc),e(j,hc),e(j,ne),e(ne,jn),e(jn,Lo),e(Lo,fc),e(ne,uc),e(ne,Pn),e(Pn,So),e(So,gc),e(ne,_c),e(ne,Cn),e(Cn,No),e(No,bc),e(ne,vc),e(ne,zn),e(zn,Oo),e(Oo,wc),e(j,xc),e(j,q),$(Do,q,null),e(q,$c),e(q,je),e(je,yc),e(je,An),e(An,Tc),e(je,Bc),e(je,qn),e(qn,Fc),e(je,Ec),e(q,kc),$(st,q,null),e(q,Mc),e(q,Pe),e(Pe,Ic),e(Pe,Ln),e(Ln,jc),e(Pe,Pc),e(Pe,Sn),e(Sn,Cc),e(Pe,zc),e(q,Ac),$(rt,q,null),_(o,qs,u),_(o,Ce,u),e(Ce,it),e(it,Nn),$(Vo,Nn,null),e(Ce,qc),e(Ce,On),e(On,Lc),_(o,Ls,u),_(o,P,u),$(Wo,P,null),e(P,Sc),e(P,Dn),e(Dn,Nc),e(P,Oc),e(P,Uo),e(Uo,Dc),e(Uo,Ba),e(Ba,Vc),e(Uo,Wc),e(P,Uc),e(P,Ro),e(Ro,Rc),e(Ro,Ho),e(Ho,Hc),e(Ro,Jc),e(P,Gc),e(P,Vn),e(Vn,Xc),e(P,Kc),e(P,se),e(se,Wn),e(Wn,Jo),e(Jo,Yc),e(se,Qc),e(se,Un),e(Un,Go),e(Go,Zc),e(se,em),e(se,Rn),e(Rn,Xo),e(Xo,tm),e(se,om),e(se,Hn),e(Hn,Ko),e(Ko,am),e(P,nm),e(P,K),$(Yo,K,null),e(K,sm),e(K,ze),e(ze,rm),e(ze,Jn),e(Jn,im),e(ze,lm),e(ze,Gn),e(Gn,dm),e(ze,cm),e(K,mm),$(lt,K,null),e(K,pm),$(dt,K,null),Ss=!0},p(o,[u]){const Qo={};u&2&&(Qo.$$scope={dirty:u,ctx:o}),Ne.$set(Qo);const Xn={};u&2&&(Xn.$$scope={dirty:u,ctx:o}),De.$set(Xn);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:o}),Ue.$set(Kn);const Yn={};u&2&&(Yn.$$scope={dirty:u,ctx:o}),Re.$set(Yn);const Zo={};u&2&&(Zo.$$scope={dirty:u,ctx:o}),Je.$set(Zo);const Qn={};u&2&&(Qn.$$scope={dirty:u,ctx:o}),Ge.$set(Qn);const Zn={};u&2&&(Zn.$$scope={dirty:u,ctx:o}),Ke.$set(Zn);const es={};u&2&&(es.$$scope={dirty:u,ctx:o}),Ye.$set(es);const re={};u&2&&(re.$$scope={dirty:u,ctx:o}),Ze.$set(re);const ts={};u&2&&(ts.$$scope={dirty:u,ctx:o}),et.$set(ts);const os={};u&2&&(os.$$scope={dirty:u,ctx:o}),ot.$set(os);const as={};u&2&&(as.$$scope={dirty:u,ctx:o}),at.$set(as);const ns={};u&2&&(ns.$$scope={dirty:u,ctx:o}),st.$set(ns);const ss={};u&2&&(ss.$$scope={dirty:u,ctx:o}),rt.$set(ss);const rs={};u&2&&(rs.$$scope={dirty:u,ctx:o}),lt.$set(rs);const is={};u&2&&(is.$$scope={dirty:u,ctx:o}),dt.$set(is)},i(o){Ss||(y(l.$$.fragment,o),y(Et.$$.fragment,o),y(Vt.$$.fragment,o),y(Wt.$$.fragment,o),y(Rt.$$.fragment,o),y(Jt.$$.fragment,o),y(Gt.$$.fragment,o),y(Ne.$$.fragment,o),y(Kt.$$.fragment,o),y(Yt.$$.fragment,o),y(Zt.$$.fragment,o),y(De.$$.fragment,o),y(eo.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(Ue.$$.fragment,o),y(Re.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(mo.$$.fragment,o),y(Je.$$.fragment,o),y(Ge.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(go.$$.fragment,o),y(Ke.$$.fragment,o),y(Ye.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(xo.$$.fragment,o),y(Ze.$$.fragment,o),y(et.$$.fragment,o),y($o.$$.fragment,o),y(yo.$$.fragment,o),y(jo.$$.fragment,o),y(ot.$$.fragment,o),y(at.$$.fragment,o),y(Po.$$.fragment,o),y(Co.$$.fragment,o),y(Do.$$.fragment,o),y(st.$$.fragment,o),y(rt.$$.fragment,o),y(Vo.$$.fragment,o),y(Wo.$$.fragment,o),y(Yo.$$.fragment,o),y(lt.$$.fragment,o),y(dt.$$.fragment,o),Ss=!0)},o(o){T(l.$$.fragment,o),T(Et.$$.fragment,o),T(Vt.$$.fragment,o),T(Wt.$$.fragment,o),T(Rt.$$.fragment,o),T(Jt.$$.fragment,o),T(Gt.$$.fragment,o),T(Ne.$$.fragment,o),T(Kt.$$.fragment,o),T(Yt.$$.fragment,o),T(Zt.$$.fragment,o),T(De.$$.fragment,o),T(eo.$$.fragment,o),T(oo.$$.fragment,o),T(ao.$$.fragment,o),T(ro.$$.fragment,o),T(Ue.$$.fragment,o),T(Re.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(mo.$$.fragment,o),T(Je.$$.fragment,o),T(Ge.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(go.$$.fragment,o),T(Ke.$$.fragment,o),T(Ye.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(xo.$$.fragment,o),T(Ze.$$.fragment,o),T(et.$$.fragment,o),T($o.$$.fragment,o),T(yo.$$.fragment,o),T(jo.$$.fragment,o),T(ot.$$.fragment,o),T(at.$$.fragment,o),T(Po.$$.fragment,o),T(Co.$$.fragment,o),T(Do.$$.fragment,o),T(st.$$.fragment,o),T(rt.$$.fragment,o),T(Vo.$$.fragment,o),T(Wo.$$.fragment,o),T(Yo.$$.fragment,o),T(lt.$$.fragment,o),T(dt.$$.fragment,o),Ss=!1},d(o){t(c),o&&t(v),o&&t(g),B(l),o&&t(ls),o&&t(me),B(Et),o&&t(ds),o&&t(W),o&&t(cs),o&&t(ea),o&&t(ms),o&&t(ta),o&&t(ps),o&&t(oa),o&&t(hs),o&&t(C),o&&t(fs),o&&t(qe),o&&t(us),o&&t(St),o&&t(gs),o&&t(U),o&&t(_s),o&&t(fe),B(Vt),o&&t(bs),o&&t(ue),B(Wt),o&&t(vs),o&&t(ge),B(Rt),o&&t(ws),o&&t(_e),B(Jt),o&&t(xs),o&&t(Z),B(Gt),B(Ne),o&&t($s),o&&t(ve),B(Kt),o&&t(ys),o&&t(A),B(Yt),B(Zt),B(De),B(eo),o&&t(Ts),o&&t(we),B(oo),o&&t(Bs),o&&t(ee),B(ao),B(ro),B(Ue),B(Re),o&&t(Fs),o&&t($e),B(io),o&&t(Es),o&&t(te),B(lo),B(mo),B(Je),B(Ge),o&&t(ks),o&&t(Te),B(po),o&&t(Ms),o&&t(D),B(ho),B(go),B(Ke),B(Ye),o&&t(Is),o&&t(Fe),B(_o),o&&t(js),o&&t(V),B(bo),B(xo),B(Ze),B(et),o&&t(Ps),o&&t(ke),B($o),o&&t(Cs),o&&t(I),B(yo),B(jo),B(ot),B(at),o&&t(zs),o&&t(Ie),B(Po),o&&t(As),o&&t(j),B(Co),B(Do),B(st),B(rt),o&&t(qs),o&&t(Ce),B(Vo),o&&t(Ls),o&&t(P),B(Wo),B(Yo),B(lt),B(dt)}}}const Xh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function Kh(F){return jh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class af extends Fh{constructor(c){super();Eh(this,c,Kh,Gh,kh,{})}}export{af as default,Xh as metadata};
