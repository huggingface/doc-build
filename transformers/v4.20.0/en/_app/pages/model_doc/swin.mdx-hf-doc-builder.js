import{S as Ui,i as Vi,s as Bi,e as n,k as u,w as b,t as r,M as Ki,c as a,d as o,m as g,a as l,x as $,h as i,b as p,N as Ri,G as e,g as _,y as T,q as y,o as S,B as k,v as Yi,L as At}from"../../chunks/vendor-hf-doc-builder.js";import{T as po}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ct}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Zi(F){let d,v;return d=new qt({props:{code:`from transformers import SwinModel, SwinConfig

# Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration
configuration = SwinConfig()

# Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration
model = SwinModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SwinModel, SwinConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SwinConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(h){$(d.$$.fragment,h)},m(h,m){T(d,h,m),v=!0},p:At,i(h){v||(y(d.$$.fragment,h),v=!0)},o(h){S(d.$$.fragment,h),v=!1},d(h){k(d,h)}}}function Gi(F){let d,v,h,m,w;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=l(h);m=i(x,"Module"),x.forEach(o),w=i(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,v),e(d,h),e(h,m),e(d,w)},d(s){s&&o(d)}}}function Ji(F){let d,v,h,m,w;return m=new qt({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinModel.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),v=r("Example:"),h=u(),b(m.$$.fragment)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Example:"),c.forEach(o),h=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,v),_(s,h,c),T(m,s,c),w=!0},p:At,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),k(m,s)}}}function Qi(F){let d,v,h,m,w;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=l(h);m=i(x,"Module"),x.forEach(o),w=i(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,v),e(d,h),e(h,m),e(d,w)},d(s){s&&o(d)}}}function Xi(F){let d,v,h,m,w;return m=new qt({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForMaskedImageModeling.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),v=r("Examples:"),h=u(),b(m.$$.fragment)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Examples:"),c.forEach(o),h=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,v),_(s,h,c),T(m,s,c),w=!0},p:At,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),k(m,s)}}}function el(F){let d,v,h,m,w;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=l(h);m=i(x,"Module"),x.forEach(o),w=i(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,v),e(d,h),e(h,m),e(d,w)},d(s){s&&o(d)}}}function tl(F){let d,v,h,m,w;return m=new qt({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForImageClassification.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=n("p"),v=r("Example:"),h=u(),b(m.$$.fragment)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Example:"),c.forEach(o),h=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,v),_(s,h,c),T(m,s,c),w=!0},p:At,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),k(m,s)}}}function ol(F){let d,v,h,m,w;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=l(h);m=i(x,"Module"),x.forEach(o),w=i(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,v),e(d,h),e(h,m),e(d,w)},d(s){s&&o(d)}}}function sl(F){let d,v,h,m,w;return m=new qt({props:{code:`from transformers import AutoFeatureExtractor, TFSwinModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = TFSwinModel.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFSwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinModel.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),v=r("Example:"),h=u(),b(m.$$.fragment)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Example:"),c.forEach(o),h=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,v),_(s,h,c),T(m,s,c),w=!0},p:At,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),k(m,s)}}}function nl(F){let d,v,h,m,w;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=l(h);m=i(x,"Module"),x.forEach(o),w=i(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,v),e(d,h),e(h,m),e(d,w)},d(s){s&&o(d)}}}function al(F){let d,v,h,m,w;return m=new qt({props:{code:`from transformers import AutoFeatureExtractor, TFSwinForMaskedImageModeling
import tensorflow as tf
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = TFSwinForMaskedImageModeling.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="tf").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = tf.random.uniform((1, num_patches)) >= 0.5

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFSwinForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = tf.random.uniform((<span class="hljs-number">1</span>, num_patches)) &gt;= <span class="hljs-number">0.5</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),v=r("Examples:"),h=u(),b(m.$$.fragment)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Examples:"),c.forEach(o),h=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,v),_(s,h,c),T(m,s,c),w=!0},p:At,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),k(m,s)}}}function rl(F){let d,v,h,m,w;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=l(h);m=i(x,"Module"),x.forEach(o),w=i(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,v),e(d,h),e(h,m),e(d,w)},d(s){s&&o(d)}}}function il(F){let d,v,h,m,w;return m=new qt({props:{code:`from transformers import AutoFeatureExtractor, TFSwinForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = TFSwinForImageClassification.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFSwinForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=n("p"),v=r("Example:"),h=u(),b(m.$$.fragment)},l(s){d=a(s,"P",{});var c=l(d);v=i(c,"Example:"),c.forEach(o),h=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,v),_(s,h,c),T(m,s,c),w=!0},p:At,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),k(m,s)}}}function ll(F){let d,v,h,m,w,s,c,x,Hs,ss,K,pe,ho,Be,Ws,mo,Us,ns,he,Vs,Ke,Bs,Ks,as,Pt,Rs,rs,zt,fo,Ys,is,Ot,Zs,ls,B,Re,Gs,Nt,Js,Qs,Xs,Ye,en,uo,tn,on,sn,M,nn,go,an,rn,_o,ln,dn,wo,cn,pn,vo,hn,mn,bo,fn,un,$o,gn,_n,To,wn,vn,ds,me,Pr,cs,fe,bn,Dt,$n,Tn,ps,q,yn,Ze,Sn,kn,Ge,Fn,xn,Je,Mn,En,hs,R,ue,yo,Qe,jn,So,In,ms,j,Xe,Cn,Y,An,Lt,qn,Pn,et,zn,On,Nn,Z,Dn,Ht,Ln,Hn,Wt,Wn,Un,Vn,ge,fs,G,_e,ko,tt,Bn,Fo,Kn,us,H,ot,Rn,st,Yn,nt,Zn,Gn,Jn,P,at,Qn,J,Xn,Ut,ea,ta,xo,oa,sa,na,we,aa,ve,gs,Q,be,Mo,rt,ra,Eo,ia,_s,W,it,la,X,da,jo,ca,pa,lt,ha,ma,fa,z,dt,ua,ee,ga,Vt,_a,wa,Io,va,ba,$a,$e,Ta,Te,ws,te,ye,Co,ct,ya,Ao,Sa,vs,I,pt,ka,qo,Fa,xa,ht,Ma,mt,Ea,ja,Ia,O,ft,Ca,oe,Aa,Bt,qa,Pa,Po,za,Oa,Na,Se,Da,ke,bs,se,Fe,zo,ut,La,Oo,Ha,$s,U,gt,Wa,_t,Ua,wt,Va,Ba,Ka,N,vt,Ra,ne,Ya,Kt,Za,Ga,No,Ja,Qa,Xa,xe,er,Me,Ts,ae,Ee,Do,bt,tr,Lo,or,ys,V,$t,sr,re,nr,Ho,ar,rr,Tt,ir,lr,dr,D,yt,cr,ie,pr,Rt,hr,mr,Wo,fr,ur,gr,je,_r,Ie,Ss,le,Ce,Uo,St,wr,Vo,vr,ks,C,kt,br,Bo,$r,Tr,Ft,yr,xt,Sr,kr,Fr,L,Mt,xr,de,Mr,Yt,Er,jr,Ko,Ir,Cr,Ar,Ae,qr,qe,Fs;return s=new ce({}),Be=new ce({}),Qe=new ce({}),Xe=new A({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.SwinConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.SwinConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.SwinConfig.embed_dim",description:`<strong>embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 96) &#x2014;
Dimensionality of patch embedding.`,name:"embed_dim"},{anchor:"transformers.SwinConfig.depths",description:`<strong>depths</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [2, 2, 6, 2]) &#x2014;
Depth of each layer in the Transformer encoder.`,name:"depths"},{anchor:"transformers.SwinConfig.num_heads",description:`<strong>num_heads</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [3, 6, 12, 24]) &#x2014;
Number of attention heads in each layer of the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.SwinConfig.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Size of windows.`,name:"window_size"},{anchor:"transformers.SwinConfig.mlp_ratio",description:`<strong>mlp_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to 4.0) &#x2014;
Ratio of MLP hidden dimensionality to embedding dimensionality.`,name:"mlp_ratio"},{anchor:"transformers.SwinConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not a learnable bias should be added to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.SwinConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.SwinConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SwinConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"},{anchor:"transformers.SwinConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SwinConfig.use_absolute_embeddings",description:`<strong>use_absolute_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to False) &#x2014;
Whether or not to add absolute position embeddings to the patch embeddings.`,name:"use_absolute_embeddings"},{anchor:"transformers.SwinConfig.patch_norm",description:`<strong>patch_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not to add layer normalization after patch embedding.`,name:"patch_norm"},{anchor:"transformers.SwinConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SwinConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SwinConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 32) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.</p>
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/configuration_swin.py#L31"}}),ge=new Ct({props:{anchor:"transformers.SwinConfig.example",$$slots:{default:[Zi]},$$scope:{ctx:F}}}),tt=new ce({}),ot=new A({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_swin.py#L905"}}),at=new A({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.SwinModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_swin.py#L932",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new po({props:{$$slots:{default:[Gi]},$$scope:{ctx:F}}}),ve=new Ct({props:{anchor:"transformers.SwinModel.forward.example",$$slots:{default:[Ji]},$$scope:{ctx:F}}}),rt=new ce({}),it=new A({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_swin.py#L1004"}}),dt=new A({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.SwinForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_swin.py#L1019",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>bool_masked_pos</code> is provided) \u2014 Masked image modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Reconstructed pixel values.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new po({props:{$$slots:{default:[Qi]},$$scope:{ctx:F}}}),Te=new Ct({props:{anchor:"transformers.SwinForMaskedImageModeling.forward.example",$$slots:{default:[Xi]},$$scope:{ctx:F}}}),ct=new ce({}),pt=new A({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_swin.py#L1113"}}),ft=new A({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.SwinForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_swin.py#L1128",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new po({props:{$$slots:{default:[el]},$$scope:{ctx:F}}}),ke=new Ct({props:{anchor:"transformers.SwinForImageClassification.forward.example",$$slots:{default:[tl]},$$scope:{ctx:F}}}),ut=new ce({}),gt=new A({props:{name:"class transformers.TFSwinModel",anchor:"transformers.TFSwinModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_tf_swin.py#L1178"}}),vt=new A({props:{name:"call",anchor:"transformers.TFSwinModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_tf_swin.py#L1186",returnDescription:`
<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_tf_swin.TFSwinModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),xe=new po({props:{$$slots:{default:[ol]},$$scope:{ctx:F}}}),Me=new Ct({props:{anchor:"transformers.TFSwinModel.call.example",$$slots:{default:[sl]},$$scope:{ctx:F}}}),bt=new ce({}),$t=new A({props:{name:"class transformers.TFSwinForMaskedImageModeling",anchor:"transformers.TFSwinForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_tf_swin.py#L1287"}}),yt=new A({props:{name:"call",anchor:"transformers.TFSwinForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_tf_swin.py#L1295",returnDescription:`
<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinMaskedImageModelingOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>bool_masked_pos</code> is provided) \u2014 Masked image modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Reconstructed pixel values.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_tf_swin.TFSwinMaskedImageModelingOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),je=new po({props:{$$slots:{default:[nl]},$$scope:{ctx:F}}}),Ie=new Ct({props:{anchor:"transformers.TFSwinForMaskedImageModeling.call.example",$$slots:{default:[al]},$$scope:{ctx:F}}}),St=new ce({}),kt=new A({props:{name:"class transformers.TFSwinForImageClassification",anchor:"transformers.TFSwinForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_tf_swin.py#L1398"}}),Mt=new A({props:{name:"call",anchor:"transformers.TFSwinForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/swin/modeling_tf_swin.py#L1412",returnDescription:`
<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_tf_swin.TFSwinImageClassifierOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Ae=new po({props:{$$slots:{default:[rl]},$$scope:{ctx:F}}}),qe=new Ct({props:{anchor:"transformers.TFSwinForImageClassification.call.example",$$slots:{default:[il]},$$scope:{ctx:F}}}),{c(){d=n("meta"),v=u(),h=n("h1"),m=n("a"),w=n("span"),b(s.$$.fragment),c=u(),x=n("span"),Hs=r("Swin Transformer"),ss=u(),K=n("h2"),pe=n("a"),ho=n("span"),b(Be.$$.fragment),Ws=u(),mo=n("span"),Us=r("Overview"),ns=u(),he=n("p"),Vs=r("The Swin Transformer was proposed in "),Ke=n("a"),Bs=r("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),Ks=r(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),as=u(),Pt=n("p"),Rs=r("The abstract from the paper is the following:"),rs=u(),zt=n("p"),fo=n("em"),Ys=r(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains,
such as large variations in the scale of visual entities and the high resolution of pixels in images compared to words in text.
To address these differences, we propose a hierarchical Transformer whose representation is computed with \\bold{S}hifted
\\bold{win}dows. The shifted windowing scheme brings greater efficiency by limiting self-attention computation to non-overlapping
local windows while also allowing for cross-window connection. This hierarchical architecture has the flexibility to model at
various scales and has linear computational complexity with respect to image size. These qualities of Swin Transformer make it
compatible with a broad range of vision tasks, including image classification (87.3 top-1 accuracy on ImageNet-1K) and dense
prediction tasks such as object detection (58.7 box AP and 51.1 mask AP on COCO test-dev) and semantic segmentation
(53.5 mIoU on ADE20K val). Its performance surpasses the previous state-of-the-art by a large margin of +2.7 box AP and
+2.6 mask AP on COCO, and +3.2 mIoU on ADE20K, demonstrating the potential of Transformer-based models as vision backbones.
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),is=u(),Ot=n("p"),Zs=r("Tips:"),ls=u(),B=n("ul"),Re=n("li"),Gs=r("One can use the "),Nt=n("a"),Js=r("AutoFeatureExtractor"),Qs=r(" API to prepare images for the model."),Xs=u(),Ye=n("li"),en=r("Swin pads the inputs supporting any input height and width (if divisible by "),uo=n("code"),tn=r("32"),on=r(")."),sn=u(),M=n("li"),nn=r("Swin can be used as a "),go=n("em"),an=r("backbone"),rn=r(". When "),_o=n("code"),ln=r("output_hidden_states = True"),dn=r(", it will output both "),wo=n("code"),cn=r("hidden_states"),pn=r(" and "),vo=n("code"),hn=r("reshaped_hidden_states"),mn=r(". The "),bo=n("code"),fn=r("reshaped_hidden_states"),un=r(" have a shape of "),$o=n("code"),gn=r("(batch, num_channels, height, width)"),_n=r(" rather than "),To=n("code"),wn=r("(batch_size, sequence_length, num_channels)"),vn=r("."),ds=u(),me=n("img"),cs=u(),fe=n("small"),bn=r("Swin Transformer architecture. Taken from the "),Dt=n("a"),$n=r("original paper"),Tn=r("."),ps=u(),q=n("p"),yn=r("This model was contributed by "),Ze=n("a"),Sn=r("novice03"),kn=r(". The Tensorflow version of this model was contributed by "),Ge=n("a"),Fn=r("amyeroberts"),xn=r(". The original code can be found "),Je=n("a"),Mn=r("here"),En=r("."),hs=u(),R=n("h2"),ue=n("a"),yo=n("span"),b(Qe.$$.fragment),jn=u(),So=n("span"),In=r("SwinConfig"),ms=u(),j=n("div"),b(Xe.$$.fragment),Cn=u(),Y=n("p"),An=r("This is the configuration class to store the configuration of a "),Lt=n("a"),qn=r("SwinModel"),Pn=r(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),et=n("a"),zn=r("microsoft/swin-tiny-patch4-window7-224"),On=r(`
architecture.`),Nn=u(),Z=n("p"),Dn=r("Configuration objects inherit from "),Ht=n("a"),Ln=r("PretrainedConfig"),Hn=r(` and can be used to control the model outputs. Read the
documentation from `),Wt=n("a"),Wn=r("PretrainedConfig"),Un=r(" for more information."),Vn=u(),b(ge.$$.fragment),fs=u(),G=n("h2"),_e=n("a"),ko=n("span"),b(tt.$$.fragment),Bn=u(),Fo=n("span"),Kn=r("SwinModel"),us=u(),H=n("div"),b(ot.$$.fragment),Rn=u(),st=n("p"),Yn=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),nt=n("a"),Zn=r("torch.nn.Module"),Gn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jn=u(),P=n("div"),b(at.$$.fragment),Qn=u(),J=n("p"),Xn=r("The "),Ut=n("a"),ea=r("SwinModel"),ta=r(" forward method, overrides the "),xo=n("code"),oa=r("__call__"),sa=r(" special method."),na=u(),b(we.$$.fragment),aa=u(),b(ve.$$.fragment),gs=u(),Q=n("h2"),be=n("a"),Mo=n("span"),b(rt.$$.fragment),ra=u(),Eo=n("span"),ia=r("SwinForMaskedImageModeling"),_s=u(),W=n("div"),b(it.$$.fragment),la=u(),X=n("p"),da=r("Swin Model with a decoder on top for masked image modeling, as proposed in "),jo=n("code"),ca=r("SimMIM <https://arxiv.org/abs/2111.09886>"),pa=r(`__.
This model is a PyTorch `),lt=n("a"),ha=r("torch.nn.Module"),ma=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fa=u(),z=n("div"),b(dt.$$.fragment),ua=u(),ee=n("p"),ga=r("The "),Vt=n("a"),_a=r("SwinForMaskedImageModeling"),wa=r(" forward method, overrides the "),Io=n("code"),va=r("__call__"),ba=r(" special method."),$a=u(),b($e.$$.fragment),Ta=u(),b(Te.$$.fragment),ws=u(),te=n("h2"),ye=n("a"),Co=n("span"),b(ct.$$.fragment),ya=u(),Ao=n("span"),Sa=r("SwinForImageClassification"),vs=u(),I=n("div"),b(pt.$$.fragment),ka=u(),qo=n("p"),Fa=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),xa=u(),ht=n("p"),Ma=r("This model is a PyTorch "),mt=n("a"),Ea=r("torch.nn.Module"),ja=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ia=u(),O=n("div"),b(ft.$$.fragment),Ca=u(),oe=n("p"),Aa=r("The "),Bt=n("a"),qa=r("SwinForImageClassification"),Pa=r(" forward method, overrides the "),Po=n("code"),za=r("__call__"),Oa=r(" special method."),Na=u(),b(Se.$$.fragment),Da=u(),b(ke.$$.fragment),bs=u(),se=n("h2"),Fe=n("a"),zo=n("span"),b(ut.$$.fragment),La=u(),Oo=n("span"),Ha=r("TFSwinModel"),$s=u(),U=n("div"),b(gt.$$.fragment),Wa=u(),_t=n("p"),Ua=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a Tensorflow
`),wt=n("a"),Va=r("tf.keras.layers.Layer"),Ba=r(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Ka=u(),N=n("div"),b(vt.$$.fragment),Ra=u(),ne=n("p"),Ya=r("The "),Kt=n("a"),Za=r("TFSwinModel"),Ga=r(" forward method, overrides the "),No=n("code"),Ja=r("__call__"),Qa=r(" special method."),Xa=u(),b(xe.$$.fragment),er=u(),b(Me.$$.fragment),Ts=u(),ae=n("h2"),Ee=n("a"),Do=n("span"),b(bt.$$.fragment),tr=u(),Lo=n("span"),or=r("TFSwinForMaskedImageModeling"),ys=u(),V=n("div"),b($t.$$.fragment),sr=u(),re=n("p"),nr=r("Swin Model with a decoder on top for masked image modeling, as proposed in "),Ho=n("code"),ar=r("SimMIM <https://arxiv.org/abs/2111.09886>"),rr=r(`__.
This model is a Tensorflow
`),Tt=n("a"),ir=r("tf.keras.layers.Layer"),lr=r(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),dr=u(),D=n("div"),b(yt.$$.fragment),cr=u(),ie=n("p"),pr=r("The "),Rt=n("a"),hr=r("TFSwinForMaskedImageModeling"),mr=r(" forward method, overrides the "),Wo=n("code"),fr=r("__call__"),ur=r(" special method."),gr=u(),b(je.$$.fragment),_r=u(),b(Ie.$$.fragment),Ss=u(),le=n("h2"),Ce=n("a"),Uo=n("span"),b(St.$$.fragment),wr=u(),Vo=n("span"),vr=r("TFSwinForImageClassification"),ks=u(),C=n("div"),b(kt.$$.fragment),br=u(),Bo=n("p"),$r=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Tr=u(),Ft=n("p"),yr=r(`This model is a Tensorflow
`),xt=n("a"),Sr=r("tf.keras.layers.Layer"),kr=r(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Fr=u(),L=n("div"),b(Mt.$$.fragment),xr=u(),de=n("p"),Mr=r("The "),Yt=n("a"),Er=r("TFSwinForImageClassification"),jr=r(" forward method, overrides the "),Ko=n("code"),Ir=r("__call__"),Cr=r(" special method."),Ar=u(),b(Ae.$$.fragment),qr=u(),b(qe.$$.fragment),this.h()},l(t){const f=Ki('[data-svelte="svelte-1phssyn"]',document.head);d=a(f,"META",{name:!0,content:!0}),f.forEach(o),v=g(t),h=a(t,"H1",{class:!0});var Et=l(h);m=a(Et,"A",{id:!0,class:!0,href:!0});var Ro=l(m);w=a(Ro,"SPAN",{});var Yo=l(w);$(s.$$.fragment,Yo),Yo.forEach(o),Ro.forEach(o),c=g(Et),x=a(Et,"SPAN",{});var Zo=l(x);Hs=i(Zo,"Swin Transformer"),Zo.forEach(o),Et.forEach(o),ss=g(t),K=a(t,"H2",{class:!0});var jt=l(K);pe=a(jt,"A",{id:!0,class:!0,href:!0});var Go=l(pe);ho=a(Go,"SPAN",{});var Jo=l(ho);$(Be.$$.fragment,Jo),Jo.forEach(o),Go.forEach(o),Ws=g(jt),mo=a(jt,"SPAN",{});var Qo=l(mo);Us=i(Qo,"Overview"),Qo.forEach(o),jt.forEach(o),ns=g(t),he=a(t,"P",{});var It=l(he);Vs=i(It,"The Swin Transformer was proposed in "),Ke=a(It,"A",{href:!0,rel:!0});var Xo=l(Ke);Bs=i(Xo,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),Xo.forEach(o),Ks=i(It,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),It.forEach(o),as=g(t),Pt=a(t,"P",{});var es=l(Pt);Rs=i(es,"The abstract from the paper is the following:"),es.forEach(o),rs=g(t),zt=a(t,"P",{});var ts=l(zt);fo=a(ts,"EM",{});var os=l(fo);Ys=i(os,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains,
such as large variations in the scale of visual entities and the high resolution of pixels in images compared to words in text.
To address these differences, we propose a hierarchical Transformer whose representation is computed with \\bold{S}hifted
\\bold{win}dows. The shifted windowing scheme brings greater efficiency by limiting self-attention computation to non-overlapping
local windows while also allowing for cross-window connection. This hierarchical architecture has the flexibility to model at
various scales and has linear computational complexity with respect to image size. These qualities of Swin Transformer make it
compatible with a broad range of vision tasks, including image classification (87.3 top-1 accuracy on ImageNet-1K) and dense
prediction tasks such as object detection (58.7 box AP and 51.1 mask AP on COCO test-dev) and semantic segmentation
(53.5 mIoU on ADE20K val). Its performance surpasses the previous state-of-the-art by a large margin of +2.7 box AP and
+2.6 mask AP on COCO, and +3.2 mIoU on ADE20K, demonstrating the potential of Transformer-based models as vision backbones.
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),os.forEach(o),ts.forEach(o),is=g(t),Ot=a(t,"P",{});var zr=l(Ot);Zs=i(zr,"Tips:"),zr.forEach(o),ls=g(t),B=a(t,"UL",{});var Zt=l(B);Re=a(Zt,"LI",{});var xs=l(Re);Gs=i(xs,"One can use the "),Nt=a(xs,"A",{href:!0});var Or=l(Nt);Js=i(Or,"AutoFeatureExtractor"),Or.forEach(o),Qs=i(xs," API to prepare images for the model."),xs.forEach(o),Xs=g(Zt),Ye=a(Zt,"LI",{});var Ms=l(Ye);en=i(Ms,"Swin pads the inputs supporting any input height and width (if divisible by "),uo=a(Ms,"CODE",{});var Nr=l(uo);tn=i(Nr,"32"),Nr.forEach(o),on=i(Ms,")."),Ms.forEach(o),sn=g(Zt),M=a(Zt,"LI",{});var E=l(M);nn=i(E,"Swin can be used as a "),go=a(E,"EM",{});var Dr=l(go);an=i(Dr,"backbone"),Dr.forEach(o),rn=i(E,". When "),_o=a(E,"CODE",{});var Lr=l(_o);ln=i(Lr,"output_hidden_states = True"),Lr.forEach(o),dn=i(E,", it will output both "),wo=a(E,"CODE",{});var Hr=l(wo);cn=i(Hr,"hidden_states"),Hr.forEach(o),pn=i(E," and "),vo=a(E,"CODE",{});var Wr=l(vo);hn=i(Wr,"reshaped_hidden_states"),Wr.forEach(o),mn=i(E,". The "),bo=a(E,"CODE",{});var Ur=l(bo);fn=i(Ur,"reshaped_hidden_states"),Ur.forEach(o),un=i(E," have a shape of "),$o=a(E,"CODE",{});var Vr=l($o);gn=i(Vr,"(batch, num_channels, height, width)"),Vr.forEach(o),_n=i(E," rather than "),To=a(E,"CODE",{});var Br=l(To);wn=i(Br,"(batch_size, sequence_length, num_channels)"),Br.forEach(o),vn=i(E,"."),E.forEach(o),Zt.forEach(o),ds=g(t),me=a(t,"IMG",{src:!0,alt:!0,width:!0}),cs=g(t),fe=a(t,"SMALL",{});var Es=l(fe);bn=i(Es,"Swin Transformer architecture. Taken from the "),Dt=a(Es,"A",{href:!0});var Kr=l(Dt);$n=i(Kr,"original paper"),Kr.forEach(o),Tn=i(Es,"."),Es.forEach(o),ps=g(t),q=a(t,"P",{});var Pe=l(q);yn=i(Pe,"This model was contributed by "),Ze=a(Pe,"A",{href:!0,rel:!0});var Rr=l(Ze);Sn=i(Rr,"novice03"),Rr.forEach(o),kn=i(Pe,". The Tensorflow version of this model was contributed by "),Ge=a(Pe,"A",{href:!0,rel:!0});var Yr=l(Ge);Fn=i(Yr,"amyeroberts"),Yr.forEach(o),xn=i(Pe,". The original code can be found "),Je=a(Pe,"A",{href:!0,rel:!0});var Zr=l(Je);Mn=i(Zr,"here"),Zr.forEach(o),En=i(Pe,"."),Pe.forEach(o),hs=g(t),R=a(t,"H2",{class:!0});var js=l(R);ue=a(js,"A",{id:!0,class:!0,href:!0});var Gr=l(ue);yo=a(Gr,"SPAN",{});var Jr=l(yo);$(Qe.$$.fragment,Jr),Jr.forEach(o),Gr.forEach(o),jn=g(js),So=a(js,"SPAN",{});var Qr=l(So);In=i(Qr,"SwinConfig"),Qr.forEach(o),js.forEach(o),ms=g(t),j=a(t,"DIV",{class:!0});var ze=l(j);$(Xe.$$.fragment,ze),Cn=g(ze),Y=a(ze,"P",{});var Gt=l(Y);An=i(Gt,"This is the configuration class to store the configuration of a "),Lt=a(Gt,"A",{href:!0});var Xr=l(Lt);qn=i(Xr,"SwinModel"),Xr.forEach(o),Pn=i(Gt,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),et=a(Gt,"A",{href:!0,rel:!0});var ei=l(et);zn=i(ei,"microsoft/swin-tiny-patch4-window7-224"),ei.forEach(o),On=i(Gt,`
architecture.`),Gt.forEach(o),Nn=g(ze),Z=a(ze,"P",{});var Jt=l(Z);Dn=i(Jt,"Configuration objects inherit from "),Ht=a(Jt,"A",{href:!0});var ti=l(Ht);Ln=i(ti,"PretrainedConfig"),ti.forEach(o),Hn=i(Jt,` and can be used to control the model outputs. Read the
documentation from `),Wt=a(Jt,"A",{href:!0});var oi=l(Wt);Wn=i(oi,"PretrainedConfig"),oi.forEach(o),Un=i(Jt," for more information."),Jt.forEach(o),Vn=g(ze),$(ge.$$.fragment,ze),ze.forEach(o),fs=g(t),G=a(t,"H2",{class:!0});var Is=l(G);_e=a(Is,"A",{id:!0,class:!0,href:!0});var si=l(_e);ko=a(si,"SPAN",{});var ni=l(ko);$(tt.$$.fragment,ni),ni.forEach(o),si.forEach(o),Bn=g(Is),Fo=a(Is,"SPAN",{});var ai=l(Fo);Kn=i(ai,"SwinModel"),ai.forEach(o),Is.forEach(o),us=g(t),H=a(t,"DIV",{class:!0});var Qt=l(H);$(ot.$$.fragment,Qt),Rn=g(Qt),st=a(Qt,"P",{});var Cs=l(st);Yn=i(Cs,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),nt=a(Cs,"A",{href:!0,rel:!0});var ri=l(nt);Zn=i(ri,"torch.nn.Module"),ri.forEach(o),Gn=i(Cs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cs.forEach(o),Jn=g(Qt),P=a(Qt,"DIV",{class:!0});var Oe=l(P);$(at.$$.fragment,Oe),Qn=g(Oe),J=a(Oe,"P",{});var Xt=l(J);Xn=i(Xt,"The "),Ut=a(Xt,"A",{href:!0});var ii=l(Ut);ea=i(ii,"SwinModel"),ii.forEach(o),ta=i(Xt," forward method, overrides the "),xo=a(Xt,"CODE",{});var li=l(xo);oa=i(li,"__call__"),li.forEach(o),sa=i(Xt," special method."),Xt.forEach(o),na=g(Oe),$(we.$$.fragment,Oe),aa=g(Oe),$(ve.$$.fragment,Oe),Oe.forEach(o),Qt.forEach(o),gs=g(t),Q=a(t,"H2",{class:!0});var As=l(Q);be=a(As,"A",{id:!0,class:!0,href:!0});var di=l(be);Mo=a(di,"SPAN",{});var ci=l(Mo);$(rt.$$.fragment,ci),ci.forEach(o),di.forEach(o),ra=g(As),Eo=a(As,"SPAN",{});var pi=l(Eo);ia=i(pi,"SwinForMaskedImageModeling"),pi.forEach(o),As.forEach(o),_s=g(t),W=a(t,"DIV",{class:!0});var eo=l(W);$(it.$$.fragment,eo),la=g(eo),X=a(eo,"P",{});var to=l(X);da=i(to,"Swin Model with a decoder on top for masked image modeling, as proposed in "),jo=a(to,"CODE",{});var hi=l(jo);ca=i(hi,"SimMIM <https://arxiv.org/abs/2111.09886>"),hi.forEach(o),pa=i(to,`__.
This model is a PyTorch `),lt=a(to,"A",{href:!0,rel:!0});var mi=l(lt);ha=i(mi,"torch.nn.Module"),mi.forEach(o),ma=i(to,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),to.forEach(o),fa=g(eo),z=a(eo,"DIV",{class:!0});var Ne=l(z);$(dt.$$.fragment,Ne),ua=g(Ne),ee=a(Ne,"P",{});var oo=l(ee);ga=i(oo,"The "),Vt=a(oo,"A",{href:!0});var fi=l(Vt);_a=i(fi,"SwinForMaskedImageModeling"),fi.forEach(o),wa=i(oo," forward method, overrides the "),Io=a(oo,"CODE",{});var ui=l(Io);va=i(ui,"__call__"),ui.forEach(o),ba=i(oo," special method."),oo.forEach(o),$a=g(Ne),$($e.$$.fragment,Ne),Ta=g(Ne),$(Te.$$.fragment,Ne),Ne.forEach(o),eo.forEach(o),ws=g(t),te=a(t,"H2",{class:!0});var qs=l(te);ye=a(qs,"A",{id:!0,class:!0,href:!0});var gi=l(ye);Co=a(gi,"SPAN",{});var _i=l(Co);$(ct.$$.fragment,_i),_i.forEach(o),gi.forEach(o),ya=g(qs),Ao=a(qs,"SPAN",{});var wi=l(Ao);Sa=i(wi,"SwinForImageClassification"),wi.forEach(o),qs.forEach(o),vs=g(t),I=a(t,"DIV",{class:!0});var De=l(I);$(pt.$$.fragment,De),ka=g(De),qo=a(De,"P",{});var vi=l(qo);Fa=i(vi,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),vi.forEach(o),xa=g(De),ht=a(De,"P",{});var Ps=l(ht);Ma=i(Ps,"This model is a PyTorch "),mt=a(Ps,"A",{href:!0,rel:!0});var bi=l(mt);Ea=i(bi,"torch.nn.Module"),bi.forEach(o),ja=i(Ps,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ps.forEach(o),Ia=g(De),O=a(De,"DIV",{class:!0});var Le=l(O);$(ft.$$.fragment,Le),Ca=g(Le),oe=a(Le,"P",{});var so=l(oe);Aa=i(so,"The "),Bt=a(so,"A",{href:!0});var $i=l(Bt);qa=i($i,"SwinForImageClassification"),$i.forEach(o),Pa=i(so," forward method, overrides the "),Po=a(so,"CODE",{});var Ti=l(Po);za=i(Ti,"__call__"),Ti.forEach(o),Oa=i(so," special method."),so.forEach(o),Na=g(Le),$(Se.$$.fragment,Le),Da=g(Le),$(ke.$$.fragment,Le),Le.forEach(o),De.forEach(o),bs=g(t),se=a(t,"H2",{class:!0});var zs=l(se);Fe=a(zs,"A",{id:!0,class:!0,href:!0});var yi=l(Fe);zo=a(yi,"SPAN",{});var Si=l(zo);$(ut.$$.fragment,Si),Si.forEach(o),yi.forEach(o),La=g(zs),Oo=a(zs,"SPAN",{});var ki=l(Oo);Ha=i(ki,"TFSwinModel"),ki.forEach(o),zs.forEach(o),$s=g(t),U=a(t,"DIV",{class:!0});var no=l(U);$(gt.$$.fragment,no),Wa=g(no),_t=a(no,"P",{});var Os=l(_t);Ua=i(Os,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a Tensorflow
`),wt=a(Os,"A",{href:!0,rel:!0});var Fi=l(wt);Va=i(Fi,"tf.keras.layers.Layer"),Fi.forEach(o),Ba=i(Os,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Os.forEach(o),Ka=g(no),N=a(no,"DIV",{class:!0});var He=l(N);$(vt.$$.fragment,He),Ra=g(He),ne=a(He,"P",{});var ao=l(ne);Ya=i(ao,"The "),Kt=a(ao,"A",{href:!0});var xi=l(Kt);Za=i(xi,"TFSwinModel"),xi.forEach(o),Ga=i(ao," forward method, overrides the "),No=a(ao,"CODE",{});var Mi=l(No);Ja=i(Mi,"__call__"),Mi.forEach(o),Qa=i(ao," special method."),ao.forEach(o),Xa=g(He),$(xe.$$.fragment,He),er=g(He),$(Me.$$.fragment,He),He.forEach(o),no.forEach(o),Ts=g(t),ae=a(t,"H2",{class:!0});var Ns=l(ae);Ee=a(Ns,"A",{id:!0,class:!0,href:!0});var Ei=l(Ee);Do=a(Ei,"SPAN",{});var ji=l(Do);$(bt.$$.fragment,ji),ji.forEach(o),Ei.forEach(o),tr=g(Ns),Lo=a(Ns,"SPAN",{});var Ii=l(Lo);or=i(Ii,"TFSwinForMaskedImageModeling"),Ii.forEach(o),Ns.forEach(o),ys=g(t),V=a(t,"DIV",{class:!0});var ro=l(V);$($t.$$.fragment,ro),sr=g(ro),re=a(ro,"P",{});var io=l(re);nr=i(io,"Swin Model with a decoder on top for masked image modeling, as proposed in "),Ho=a(io,"CODE",{});var Ci=l(Ho);ar=i(Ci,"SimMIM <https://arxiv.org/abs/2111.09886>"),Ci.forEach(o),rr=i(io,`__.
This model is a Tensorflow
`),Tt=a(io,"A",{href:!0,rel:!0});var Ai=l(Tt);ir=i(Ai,"tf.keras.layers.Layer"),Ai.forEach(o),lr=i(io,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),io.forEach(o),dr=g(ro),D=a(ro,"DIV",{class:!0});var We=l(D);$(yt.$$.fragment,We),cr=g(We),ie=a(We,"P",{});var lo=l(ie);pr=i(lo,"The "),Rt=a(lo,"A",{href:!0});var qi=l(Rt);hr=i(qi,"TFSwinForMaskedImageModeling"),qi.forEach(o),mr=i(lo," forward method, overrides the "),Wo=a(lo,"CODE",{});var Pi=l(Wo);fr=i(Pi,"__call__"),Pi.forEach(o),ur=i(lo," special method."),lo.forEach(o),gr=g(We),$(je.$$.fragment,We),_r=g(We),$(Ie.$$.fragment,We),We.forEach(o),ro.forEach(o),Ss=g(t),le=a(t,"H2",{class:!0});var Ds=l(le);Ce=a(Ds,"A",{id:!0,class:!0,href:!0});var zi=l(Ce);Uo=a(zi,"SPAN",{});var Oi=l(Uo);$(St.$$.fragment,Oi),Oi.forEach(o),zi.forEach(o),wr=g(Ds),Vo=a(Ds,"SPAN",{});var Ni=l(Vo);vr=i(Ni,"TFSwinForImageClassification"),Ni.forEach(o),Ds.forEach(o),ks=g(t),C=a(t,"DIV",{class:!0});var Ue=l(C);$(kt.$$.fragment,Ue),br=g(Ue),Bo=a(Ue,"P",{});var Di=l(Bo);$r=i(Di,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Di.forEach(o),Tr=g(Ue),Ft=a(Ue,"P",{});var Ls=l(Ft);yr=i(Ls,`This model is a Tensorflow
`),xt=a(Ls,"A",{href:!0,rel:!0});var Li=l(xt);Sr=i(Li,"tf.keras.layers.Layer"),Li.forEach(o),kr=i(Ls,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Ls.forEach(o),Fr=g(Ue),L=a(Ue,"DIV",{class:!0});var Ve=l(L);$(Mt.$$.fragment,Ve),xr=g(Ve),de=a(Ve,"P",{});var co=l(de);Mr=i(co,"The "),Yt=a(co,"A",{href:!0});var Hi=l(Yt);Er=i(Hi,"TFSwinForImageClassification"),Hi.forEach(o),jr=i(co," forward method, overrides the "),Ko=a(co,"CODE",{});var Wi=l(Ko);Ir=i(Wi,"__call__"),Wi.forEach(o),Cr=i(co," special method."),co.forEach(o),Ar=g(Ve),$(Ae.$$.fragment,Ve),qr=g(Ve),$(qe.$$.fragment,Ve),Ve.forEach(o),Ue.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(dl)),p(m,"id","swin-transformer"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#swin-transformer"),p(h,"class","relative group"),p(pe,"id","overview"),p(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(pe,"href","#overview"),p(K,"class","relative group"),p(Ke,"href","https://arxiv.org/abs/2103.14030"),p(Ke,"rel","nofollow"),p(Nt,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),Ri(me.src,Pr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||p(me,"src",Pr),p(me,"alt","drawing"),p(me,"width","600"),p(Dt,"href","https://arxiv.org/abs/2102.03334"),p(Ze,"href","https://huggingface.co/novice03%3E"),p(Ze,"rel","nofollow"),p(Ge,"href","https://huggingface.co/amyeroberts"),p(Ge,"rel","nofollow"),p(Je,"href","https://github.com/microsoft/Swin-Transformer"),p(Je,"rel","nofollow"),p(ue,"id","transformers.SwinConfig"),p(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ue,"href","#transformers.SwinConfig"),p(R,"class","relative group"),p(Lt,"href","/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinModel"),p(et,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),p(et,"rel","nofollow"),p(Ht,"href","/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig"),p(Wt,"href","/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_e,"id","transformers.SwinModel"),p(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_e,"href","#transformers.SwinModel"),p(G,"class","relative group"),p(nt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(nt,"rel","nofollow"),p(Ut,"href","/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinModel"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(be,"id","transformers.SwinForMaskedImageModeling"),p(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(be,"href","#transformers.SwinForMaskedImageModeling"),p(Q,"class","relative group"),p(lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(lt,"rel","nofollow"),p(Vt,"href","/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),p(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ye,"id","transformers.SwinForImageClassification"),p(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ye,"href","#transformers.SwinForImageClassification"),p(te,"class","relative group"),p(mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(mt,"rel","nofollow"),p(Bt,"href","/docs/transformers/v4.20.0/en/model_doc/swin#transformers.SwinForImageClassification"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Fe,"id","transformers.TFSwinModel"),p(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Fe,"href","#transformers.TFSwinModel"),p(se,"class","relative group"),p(wt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(wt,"rel","nofollow"),p(Kt,"href","/docs/transformers/v4.20.0/en/model_doc/swin#transformers.TFSwinModel"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ee,"id","transformers.TFSwinForMaskedImageModeling"),p(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ee,"href","#transformers.TFSwinForMaskedImageModeling"),p(ae,"class","relative group"),p(Tt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(Tt,"rel","nofollow"),p(Rt,"href","/docs/transformers/v4.20.0/en/model_doc/swin#transformers.TFSwinForMaskedImageModeling"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ce,"id","transformers.TFSwinForImageClassification"),p(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ce,"href","#transformers.TFSwinForImageClassification"),p(le,"class","relative group"),p(xt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),p(xt,"rel","nofollow"),p(Yt,"href","/docs/transformers/v4.20.0/en/model_doc/swin#transformers.TFSwinForImageClassification"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,v,f),_(t,h,f),e(h,m),e(m,w),T(s,w,null),e(h,c),e(h,x),e(x,Hs),_(t,ss,f),_(t,K,f),e(K,pe),e(pe,ho),T(Be,ho,null),e(K,Ws),e(K,mo),e(mo,Us),_(t,ns,f),_(t,he,f),e(he,Vs),e(he,Ke),e(Ke,Bs),e(he,Ks),_(t,as,f),_(t,Pt,f),e(Pt,Rs),_(t,rs,f),_(t,zt,f),e(zt,fo),e(fo,Ys),_(t,is,f),_(t,Ot,f),e(Ot,Zs),_(t,ls,f),_(t,B,f),e(B,Re),e(Re,Gs),e(Re,Nt),e(Nt,Js),e(Re,Qs),e(B,Xs),e(B,Ye),e(Ye,en),e(Ye,uo),e(uo,tn),e(Ye,on),e(B,sn),e(B,M),e(M,nn),e(M,go),e(go,an),e(M,rn),e(M,_o),e(_o,ln),e(M,dn),e(M,wo),e(wo,cn),e(M,pn),e(M,vo),e(vo,hn),e(M,mn),e(M,bo),e(bo,fn),e(M,un),e(M,$o),e($o,gn),e(M,_n),e(M,To),e(To,wn),e(M,vn),_(t,ds,f),_(t,me,f),_(t,cs,f),_(t,fe,f),e(fe,bn),e(fe,Dt),e(Dt,$n),e(fe,Tn),_(t,ps,f),_(t,q,f),e(q,yn),e(q,Ze),e(Ze,Sn),e(q,kn),e(q,Ge),e(Ge,Fn),e(q,xn),e(q,Je),e(Je,Mn),e(q,En),_(t,hs,f),_(t,R,f),e(R,ue),e(ue,yo),T(Qe,yo,null),e(R,jn),e(R,So),e(So,In),_(t,ms,f),_(t,j,f),T(Xe,j,null),e(j,Cn),e(j,Y),e(Y,An),e(Y,Lt),e(Lt,qn),e(Y,Pn),e(Y,et),e(et,zn),e(Y,On),e(j,Nn),e(j,Z),e(Z,Dn),e(Z,Ht),e(Ht,Ln),e(Z,Hn),e(Z,Wt),e(Wt,Wn),e(Z,Un),e(j,Vn),T(ge,j,null),_(t,fs,f),_(t,G,f),e(G,_e),e(_e,ko),T(tt,ko,null),e(G,Bn),e(G,Fo),e(Fo,Kn),_(t,us,f),_(t,H,f),T(ot,H,null),e(H,Rn),e(H,st),e(st,Yn),e(st,nt),e(nt,Zn),e(st,Gn),e(H,Jn),e(H,P),T(at,P,null),e(P,Qn),e(P,J),e(J,Xn),e(J,Ut),e(Ut,ea),e(J,ta),e(J,xo),e(xo,oa),e(J,sa),e(P,na),T(we,P,null),e(P,aa),T(ve,P,null),_(t,gs,f),_(t,Q,f),e(Q,be),e(be,Mo),T(rt,Mo,null),e(Q,ra),e(Q,Eo),e(Eo,ia),_(t,_s,f),_(t,W,f),T(it,W,null),e(W,la),e(W,X),e(X,da),e(X,jo),e(jo,ca),e(X,pa),e(X,lt),e(lt,ha),e(X,ma),e(W,fa),e(W,z),T(dt,z,null),e(z,ua),e(z,ee),e(ee,ga),e(ee,Vt),e(Vt,_a),e(ee,wa),e(ee,Io),e(Io,va),e(ee,ba),e(z,$a),T($e,z,null),e(z,Ta),T(Te,z,null),_(t,ws,f),_(t,te,f),e(te,ye),e(ye,Co),T(ct,Co,null),e(te,ya),e(te,Ao),e(Ao,Sa),_(t,vs,f),_(t,I,f),T(pt,I,null),e(I,ka),e(I,qo),e(qo,Fa),e(I,xa),e(I,ht),e(ht,Ma),e(ht,mt),e(mt,Ea),e(ht,ja),e(I,Ia),e(I,O),T(ft,O,null),e(O,Ca),e(O,oe),e(oe,Aa),e(oe,Bt),e(Bt,qa),e(oe,Pa),e(oe,Po),e(Po,za),e(oe,Oa),e(O,Na),T(Se,O,null),e(O,Da),T(ke,O,null),_(t,bs,f),_(t,se,f),e(se,Fe),e(Fe,zo),T(ut,zo,null),e(se,La),e(se,Oo),e(Oo,Ha),_(t,$s,f),_(t,U,f),T(gt,U,null),e(U,Wa),e(U,_t),e(_t,Ua),e(_t,wt),e(wt,Va),e(_t,Ba),e(U,Ka),e(U,N),T(vt,N,null),e(N,Ra),e(N,ne),e(ne,Ya),e(ne,Kt),e(Kt,Za),e(ne,Ga),e(ne,No),e(No,Ja),e(ne,Qa),e(N,Xa),T(xe,N,null),e(N,er),T(Me,N,null),_(t,Ts,f),_(t,ae,f),e(ae,Ee),e(Ee,Do),T(bt,Do,null),e(ae,tr),e(ae,Lo),e(Lo,or),_(t,ys,f),_(t,V,f),T($t,V,null),e(V,sr),e(V,re),e(re,nr),e(re,Ho),e(Ho,ar),e(re,rr),e(re,Tt),e(Tt,ir),e(re,lr),e(V,dr),e(V,D),T(yt,D,null),e(D,cr),e(D,ie),e(ie,pr),e(ie,Rt),e(Rt,hr),e(ie,mr),e(ie,Wo),e(Wo,fr),e(ie,ur),e(D,gr),T(je,D,null),e(D,_r),T(Ie,D,null),_(t,Ss,f),_(t,le,f),e(le,Ce),e(Ce,Uo),T(St,Uo,null),e(le,wr),e(le,Vo),e(Vo,vr),_(t,ks,f),_(t,C,f),T(kt,C,null),e(C,br),e(C,Bo),e(Bo,$r),e(C,Tr),e(C,Ft),e(Ft,yr),e(Ft,xt),e(xt,Sr),e(Ft,kr),e(C,Fr),e(C,L),T(Mt,L,null),e(L,xr),e(L,de),e(de,Mr),e(de,Yt),e(Yt,Er),e(de,jr),e(de,Ko),e(Ko,Ir),e(de,Cr),e(L,Ar),T(Ae,L,null),e(L,qr),T(qe,L,null),Fs=!0},p(t,[f]){const Et={};f&2&&(Et.$$scope={dirty:f,ctx:t}),ge.$set(Et);const Ro={};f&2&&(Ro.$$scope={dirty:f,ctx:t}),we.$set(Ro);const Yo={};f&2&&(Yo.$$scope={dirty:f,ctx:t}),ve.$set(Yo);const Zo={};f&2&&(Zo.$$scope={dirty:f,ctx:t}),$e.$set(Zo);const jt={};f&2&&(jt.$$scope={dirty:f,ctx:t}),Te.$set(jt);const Go={};f&2&&(Go.$$scope={dirty:f,ctx:t}),Se.$set(Go);const Jo={};f&2&&(Jo.$$scope={dirty:f,ctx:t}),ke.$set(Jo);const Qo={};f&2&&(Qo.$$scope={dirty:f,ctx:t}),xe.$set(Qo);const It={};f&2&&(It.$$scope={dirty:f,ctx:t}),Me.$set(It);const Xo={};f&2&&(Xo.$$scope={dirty:f,ctx:t}),je.$set(Xo);const es={};f&2&&(es.$$scope={dirty:f,ctx:t}),Ie.$set(es);const ts={};f&2&&(ts.$$scope={dirty:f,ctx:t}),Ae.$set(ts);const os={};f&2&&(os.$$scope={dirty:f,ctx:t}),qe.$set(os)},i(t){Fs||(y(s.$$.fragment,t),y(Be.$$.fragment,t),y(Qe.$$.fragment,t),y(Xe.$$.fragment,t),y(ge.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(at.$$.fragment,t),y(we.$$.fragment,t),y(ve.$$.fragment,t),y(rt.$$.fragment,t),y(it.$$.fragment,t),y(dt.$$.fragment,t),y($e.$$.fragment,t),y(Te.$$.fragment,t),y(ct.$$.fragment,t),y(pt.$$.fragment,t),y(ft.$$.fragment,t),y(Se.$$.fragment,t),y(ke.$$.fragment,t),y(ut.$$.fragment,t),y(gt.$$.fragment,t),y(vt.$$.fragment,t),y(xe.$$.fragment,t),y(Me.$$.fragment,t),y(bt.$$.fragment,t),y($t.$$.fragment,t),y(yt.$$.fragment,t),y(je.$$.fragment,t),y(Ie.$$.fragment,t),y(St.$$.fragment,t),y(kt.$$.fragment,t),y(Mt.$$.fragment,t),y(Ae.$$.fragment,t),y(qe.$$.fragment,t),Fs=!0)},o(t){S(s.$$.fragment,t),S(Be.$$.fragment,t),S(Qe.$$.fragment,t),S(Xe.$$.fragment,t),S(ge.$$.fragment,t),S(tt.$$.fragment,t),S(ot.$$.fragment,t),S(at.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S(rt.$$.fragment,t),S(it.$$.fragment,t),S(dt.$$.fragment,t),S($e.$$.fragment,t),S(Te.$$.fragment,t),S(ct.$$.fragment,t),S(pt.$$.fragment,t),S(ft.$$.fragment,t),S(Se.$$.fragment,t),S(ke.$$.fragment,t),S(ut.$$.fragment,t),S(gt.$$.fragment,t),S(vt.$$.fragment,t),S(xe.$$.fragment,t),S(Me.$$.fragment,t),S(bt.$$.fragment,t),S($t.$$.fragment,t),S(yt.$$.fragment,t),S(je.$$.fragment,t),S(Ie.$$.fragment,t),S(St.$$.fragment,t),S(kt.$$.fragment,t),S(Mt.$$.fragment,t),S(Ae.$$.fragment,t),S(qe.$$.fragment,t),Fs=!1},d(t){o(d),t&&o(v),t&&o(h),k(s),t&&o(ss),t&&o(K),k(Be),t&&o(ns),t&&o(he),t&&o(as),t&&o(Pt),t&&o(rs),t&&o(zt),t&&o(is),t&&o(Ot),t&&o(ls),t&&o(B),t&&o(ds),t&&o(me),t&&o(cs),t&&o(fe),t&&o(ps),t&&o(q),t&&o(hs),t&&o(R),k(Qe),t&&o(ms),t&&o(j),k(Xe),k(ge),t&&o(fs),t&&o(G),k(tt),t&&o(us),t&&o(H),k(ot),k(at),k(we),k(ve),t&&o(gs),t&&o(Q),k(rt),t&&o(_s),t&&o(W),k(it),k(dt),k($e),k(Te),t&&o(ws),t&&o(te),k(ct),t&&o(vs),t&&o(I),k(pt),k(ft),k(Se),k(ke),t&&o(bs),t&&o(se),k(ut),t&&o($s),t&&o(U),k(gt),k(vt),k(xe),k(Me),t&&o(Ts),t&&o(ae),k(bt),t&&o(ys),t&&o(V),k($t),k(yt),k(je),k(Ie),t&&o(Ss),t&&o(le),k(St),t&&o(ks),t&&o(C),k(kt),k(Mt),k(Ae),k(qe)}}}const dl={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"},{local:"transformers.TFSwinModel",title:"TFSwinModel"},{local:"transformers.TFSwinForMaskedImageModeling",title:"TFSwinForMaskedImageModeling"},{local:"transformers.TFSwinForImageClassification",title:"TFSwinForImageClassification"}],title:"Swin Transformer"};function cl(F){return Yi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _l extends Ui{constructor(d){super();Vi(this,d,cl,ll,Bi,{})}}export{_l as default,dl as metadata};
