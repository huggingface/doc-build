import{S as sm,i as rm,s as nm,e as s,k as f,w as v,t as i,M as im,c as r,d as o,m as g,a as n,x as w,h as l,b as m,G as e,g as T,y as $,q as y,o as D,B as k,v as lm,L as Ce}from"../../chunks/vendor-hf-doc-builder.js";import{T as re}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Pe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as O}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as je}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function dm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),h=s("a"),p=i("Github Issue"),_=i("."),this.h()},l(a){d=r(a,"P",{});var c=n(d);b=l(c,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),h=r(c,"A",{href:!0,rel:!0});var I=n(h);p=l(I,"Github Issue"),I.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(h,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),m(h,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function cm(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTConfig, DeiTModel

# Initializing a DeiT deit-base-distilled-patch16-224 style configuration
configuration = DeiTConfig()

# Initializing a model (with random weights) from the deit-base-distilled-patch16-224 style configuration
model = DeiTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTConfig, DeiTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeiT deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DeiTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function mm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function pm(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function hm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Note that we provide a script to pre-train this model on custom data in our "),h=s("a"),p=i(`examples
directory`),_=i("."),this.h()},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Note that we provide a script to pre-train this model on custom data in our "),h=r(c,"A",{href:!0,rel:!0});var I=n(h);p=l(I,`examples
directory`),I.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(h,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),m(h,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function fm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function gm(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function um(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function _m(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: magpie`}}),{c(){d=s("p"),b=i("Examples:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function Tm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function bm(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function vm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function wm(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function $m(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function ym(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function Dm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function km(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassification
import tensorflow as tf
from PIL import Image
import requests

tf.keras.utils.set_random_seed(3)
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tf.keras.utils.set_random_seed(<span class="hljs-number">3</span>)
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
Predicted <span class="hljs-keyword">class</span>: little blue heron, Egretta caerulea`}}),{c(){d=s("p"),b=i("Examples:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function Fm(F){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(c,"CODE",{});var I=n(h);p=l(I,"Module"),I.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(a){a&&o(d)}}}function Im(F){let d,b,h,p,_;return p=new Pe({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),h=f(),v(p.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),h=g(a),w(p.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,h,c),$(p,a,c),_=!0},p:Ce,i(a){_||(y(p.$$.fragment,a),_=!0)},o(a){D(p.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(h),k(p,a)}}}function xm(F){let d,b,h,p,_,a,c,I,$r,Ds,ze,ks,ne,qe,pa,Dt,yr,ha,Dr,Fs,W,kr,kt,Fr,Ir,Mo,xr,Mr,Ft,Er,jr,Is,Eo,Cr,xs,jo,fa,Pr,Ms,Co,zr,Es,z,ga,qr,Nr,ie,Ar,Po,Lr,Or,zo,Wr,Sr,Rr,ua,Vr,Ur,_a,Hr,Br,M,Gr,qo,Jr,Kr,No,Yr,Xr,Ta,Qr,Zr,ba,en,tn,va,on,an,wa,sn,rn,Ao,nn,ln,js,ae,dn,It,cn,mn,xt,pn,hn,Cs,le,Ne,$a,Mt,fn,ya,gn,Ps,q,Et,un,de,_n,Lo,Tn,bn,jt,vn,wn,$n,ce,yn,Oo,Dn,kn,Wo,Fn,In,xn,Ae,zs,me,Le,Da,Ct,Mn,ka,En,qs,X,Pt,jn,Fa,Cn,Pn,Oe,zt,zn,Ia,qn,Ns,pe,We,xa,qt,Nn,Ma,An,As,Q,Nt,Ln,Ea,On,Wn,Se,At,Sn,ja,Rn,Ls,he,Re,Ca,Lt,Vn,Pa,Un,Os,Z,Ot,Hn,Wt,Bn,St,Gn,Jn,Kn,S,Rt,Yn,fe,Xn,So,Qn,Zn,za,ei,ti,oi,Ve,ai,Ue,Ws,ge,He,qa,Vt,si,Na,ri,Ss,P,Ut,ni,Ht,ii,Bt,li,di,ci,Be,mi,Gt,pi,Jt,hi,fi,gi,R,Kt,ui,ue,_i,Ro,Ti,bi,Aa,vi,wi,$i,Ge,yi,Je,Rs,_e,Ke,La,Yt,Di,Oa,ki,Vs,N,Xt,Fi,Wa,Ii,xi,Qt,Mi,Zt,Ei,ji,Ci,V,eo,Pi,Te,zi,Vo,qi,Ni,Sa,Ai,Li,Oi,Ye,Wi,Xe,Us,be,Qe,Ra,to,Si,Va,Ri,Hs,E,oo,Vi,Ua,Ui,Hi,Ha,Bi,Gi,Ba,Ji,Ki,ao,Yi,so,Xi,Qi,Zi,U,ro,el,ve,tl,Uo,ol,al,Ga,sl,rl,nl,Ze,il,et,Bs,we,tt,Ja,no,ll,Ka,dl,Gs,ee,io,cl,lo,ml,co,pl,hl,fl,H,mo,gl,$e,ul,Ho,_l,Tl,Ya,bl,vl,wl,ot,$l,at,Js,ye,st,Xa,po,yl,Qa,Dl,Ks,te,ho,kl,De,Fl,fo,Il,xl,go,Ml,El,jl,B,uo,Cl,ke,Pl,Bo,zl,ql,Za,Nl,Al,Ll,rt,Ol,nt,Ys,Fe,it,es,_o,Wl,ts,Sl,Xs,A,To,Rl,os,Vl,Ul,bo,Hl,vo,Bl,Gl,Jl,G,wo,Kl,Ie,Yl,Go,Xl,Ql,as,Zl,ed,td,lt,od,dt,Qs,xe,ct,ss,$o,ad,rs,sd,Zs,j,yo,rd,ns,nd,id,is,ld,dd,ls,cd,md,Do,pd,ko,hd,fd,gd,J,Fo,ud,Me,_d,Jo,Td,bd,ds,vd,wd,$d,mt,yd,pt,er;return a=new O({}),ze=new re({props:{$$slots:{default:[dm]},$$scope:{ctx:F}}}),Dt=new O({}),Mt=new O({}),Et=new x({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/configuration_deit.py#L37"}}),Ae=new je({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[cm]},$$scope:{ctx:F}}}),Ct=new O({}),Pt=new x({props:{name:"class transformers.DeiTImageProcessor",anchor:"transformers.DeiTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_rescale",val:": bool = True"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by
<code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.DeiTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 256, &quot;width&quot;: 256}</code>):
Size of the image after <code>resize</code>. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.DeiTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code> filter, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.DeiTImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image. If the input size is smaller than <code>crop_size</code> along any edge, the image
is padded with 0&#x2019;s and then center cropped. Can be overridden by <code>do_center_crop</code> in <code>preprocess</code>.`,name:"do_center_crop"},{anchor:"transformers.DeiTImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Desired output size when applying center-cropping. Can be overridden by <code>crop_size</code> in <code>preprocess</code>.`,name:"crop_size"},{anchor:"transformers.DeiTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.DeiTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter in the
<code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.DeiTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.DeiTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.DeiTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/image_processing_deit.py#L46"}}),zt=new x({props:{name:"__call__",anchor:"transformers.DeiTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L435"}}),qt=new O({}),Nt=new x({props:{name:"class transformers.DeiTImageProcessor",anchor:"transformers.DeiTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_rescale",val:": bool = True"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by
<code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.DeiTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 256, &quot;width&quot;: 256}</code>):
Size of the image after <code>resize</code>. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.DeiTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code> filter, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.DeiTImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image. If the input size is smaller than <code>crop_size</code> along any edge, the image
is padded with 0&#x2019;s and then center cropped. Can be overridden by <code>do_center_crop</code> in <code>preprocess</code>.`,name:"do_center_crop"},{anchor:"transformers.DeiTImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Desired output size when applying center-cropping. Can be overridden by <code>crop_size</code> in <code>preprocess</code>.`,name:"crop_size"},{anchor:"transformers.DeiTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.DeiTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter in the
<code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.DeiTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.DeiTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.DeiTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/image_processing_deit.py#L46"}}),At=new x({props:{name:"preprocess",anchor:"transformers.DeiTImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:" = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.DeiTImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.DeiTImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after <code>resize</code>.`,name:"size"},{anchor:"transformers.DeiTImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
PILImageResampling filter to use if resizing the image Only has an effect if <code>do_resize</code> is set to
<code>True</code>.`,name:"resample"},{anchor:"transformers.DeiTImageProcessor.preprocess.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_center_crop</code>) &#x2014;
Whether to center crop the image.`,name:"do_center_crop"},{anchor:"transformers.DeiTImageProcessor.preprocess.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.crop_size</code>) &#x2014;
Size of the image after center crop. If one edge the image is smaller than <code>crop_size</code>, it will be
padded with zeros and then cropped`,name:"crop_size"},{anchor:"transformers.DeiTImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image values between [0 - 1].`,name:"do_rescale"},{anchor:"transformers.DeiTImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.DeiTImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.DeiTImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.DeiTImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.DeiTImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li><code>None</code>: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.DeiTImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/image_processing_deit.py#L206"}}),Lt=new O({}),Ot=new x({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L455"}}),Rt=new x({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L480",returnDescription:`
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
`}}),Ve=new re({props:{$$slots:{default:[mm]},$$scope:{ctx:F}}}),Ue=new je({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[pm]},$$scope:{ctx:F}}}),Vt=new O({}),Ut=new x({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L567"}}),Be=new re({props:{$$slots:{default:[hm]},$$scope:{ctx:F}}}),Kt=new x({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L585",returnDescription:`
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
`}}),Ge=new re({props:{$$slots:{default:[fm]},$$scope:{ctx:F}}}),Je=new je({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[gm]},$$scope:{ctx:F}}}),Yt=new O({}),Xt=new x({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L679"}}),eo=new x({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L692",returnDescription:`
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
`}}),Ye=new re({props:{$$slots:{default:[um]},$$scope:{ctx:F}}}),Xe=new je({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[_m]},$$scope:{ctx:F}}}),to=new O({}),oo=new x({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L828"}}),ro=new x({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L846",returnDescription:`
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
`}}),Ze=new re({props:{$$slots:{default:[Tm]},$$scope:{ctx:F}}}),et=new je({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[bm]},$$scope:{ctx:F}}}),no=new O({}),io=new x({props:{name:"class transformers.TFDeiTModel",anchor:"transformers.TFDeiTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L641"}}),mo=new x({props:{name:"call",anchor:"transformers.TFDeiTModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),ot=new re({props:{$$slots:{default:[vm]},$$scope:{ctx:F}}}),at=new je({props:{anchor:"transformers.TFDeiTModel.call.example",$$slots:{default:[wm]},$$scope:{ctx:F}}}),po=new O({}),ho=new x({props:{name:"class transformers.TFDeiTForMaskedImageModeling",anchor:"transformers.TFDeiTForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L761"}}),uo=new x({props:{name:"call",anchor:"transformers.TFDeiTForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),rt=new re({props:{$$slots:{default:[$m]},$$scope:{ctx:F}}}),nt=new je({props:{anchor:"transformers.TFDeiTForMaskedImageModeling.call.example",$$slots:{default:[ym]},$$scope:{ctx:F}}}),_o=new O({}),To=new x({props:{name:"class transformers.TFDeiTForImageClassification",anchor:"transformers.TFDeiTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L882"}}),wo=new x({props:{name:"call",anchor:"transformers.TFDeiTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),lt=new re({props:{$$slots:{default:[Dm]},$$scope:{ctx:F}}}),dt=new je({props:{anchor:"transformers.TFDeiTForImageClassification.call.example",$$slots:{default:[km]},$$scope:{ctx:F}}}),$o=new O({}),yo=new x({props:{name:"class transformers.TFDeiTForImageClassificationWithTeacher",anchor:"transformers.TFDeiTForImageClassificationWithTeacher",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L990"}}),Fo=new x({props:{name:"call",anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),mt=new re({props:{$$slots:{default:[Fm]},$$scope:{ctx:F}}}),pt=new je({props:{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.example",$$slots:{default:[Im]},$$scope:{ctx:F}}}),{c(){d=s("meta"),b=f(),h=s("h1"),p=s("a"),_=s("span"),v(a.$$.fragment),c=f(),I=s("span"),$r=i("DeiT"),Ds=f(),v(ze.$$.fragment),ks=f(),ne=s("h2"),qe=s("a"),pa=s("span"),v(Dt.$$.fragment),yr=f(),ha=s("span"),Dr=i("Overview"),Fs=f(),W=s("p"),kr=i("The DeiT model was proposed in "),kt=s("a"),Fr=i("Training data-efficient image transformers & distillation through attention"),Ir=i(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),Mo=s("a"),xr=i("Vision Transformer (ViT)"),Mr=i(" introduced in "),Ft=s("a"),Er=i("Dosovitskiy et al., 2020"),jr=i(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),Is=f(),Eo=s("p"),Cr=i("The abstract from the paper is the following:"),xs=f(),jo=s("p"),fa=s("em"),Pr=i(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),Ms=f(),Co=s("p"),zr=i("Tips:"),Es=f(),z=s("ul"),ga=s("li"),qr=i(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),Nr=f(),ie=s("li"),Ar=i(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Po=s("a"),Lr=i("DeiTForImageClassification"),Or=i(` and (2) corresponds to
`),zo=s("a"),Wr=i("DeiTForImageClassificationWithTeacher"),Sr=i("."),Rr=f(),ua=s("li"),Vr=i(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Ur=f(),_a=s("li"),Hr=i(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),Br=f(),M=s("li"),Gr=i(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),qo=s("a"),Jr=i("ViTModel"),Kr=i(" or "),No=s("a"),Yr=i("ViTForImageClassification"),Xr=i(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),Ta=s("em"),Qr=i("facebook/deit-tiny-patch16-224"),Zr=i(", "),ba=s("em"),en=i("facebook/deit-small-patch16-224"),tn=i(", "),va=s("em"),on=i("facebook/deit-base-patch16-224"),an=i(` and
`),wa=s("em"),sn=i("facebook/deit-base-patch16-384"),rn=i(". Note that one should use "),Ao=s("a"),nn=i("DeiTFeatureExtractor"),ln=i(` in order to
prepare images for the model.`),js=f(),ae=s("p"),dn=i("This model was contributed by "),It=s("a"),cn=i("nielsr"),mn=i(". The TensorFlow version of this model was added by "),xt=s("a"),pn=i("amyeroberts"),hn=i("."),Cs=f(),le=s("h2"),Ne=s("a"),$a=s("span"),v(Mt.$$.fragment),fn=f(),ya=s("span"),gn=i("DeiTConfig"),Ps=f(),q=s("div"),v(Et.$$.fragment),un=f(),de=s("p"),_n=i("This is the configuration class to store the configuration of a "),Lo=s("a"),Tn=i("DeiTModel"),bn=i(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),jt=s("a"),vn=i("facebook/deit-base-distilled-patch16-224"),wn=i(`
architecture.`),$n=f(),ce=s("p"),yn=i("Configuration objects inherit from "),Oo=s("a"),Dn=i("PretrainedConfig"),kn=i(` and can be used to control the model outputs. Read the
documentation from `),Wo=s("a"),Fn=i("PretrainedConfig"),In=i(" for more information."),xn=f(),v(Ae.$$.fragment),zs=f(),me=s("h2"),Le=s("a"),Da=s("span"),v(Ct.$$.fragment),Mn=f(),ka=s("span"),En=i("DeiTFeatureExtractor"),qs=f(),X=s("div"),v(Pt.$$.fragment),jn=f(),Fa=s("p"),Cn=i("Constructs a DeiT image processor."),Pn=f(),Oe=s("div"),v(zt.$$.fragment),zn=f(),Ia=s("p"),qn=i("Preprocess an image or a batch of images."),Ns=f(),pe=s("h2"),We=s("a"),xa=s("span"),v(qt.$$.fragment),Nn=f(),Ma=s("span"),An=i("DeiTImageProcessor"),As=f(),Q=s("div"),v(Nt.$$.fragment),Ln=f(),Ea=s("p"),On=i("Constructs a DeiT image processor."),Wn=f(),Se=s("div"),v(At.$$.fragment),Sn=f(),ja=s("p"),Rn=i("Preprocess an image or batch of images."),Ls=f(),he=s("h2"),Re=s("a"),Ca=s("span"),v(Lt.$$.fragment),Vn=f(),Pa=s("span"),Un=i("DeiTModel"),Os=f(),Z=s("div"),v(Ot.$$.fragment),Hn=f(),Wt=s("p"),Bn=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=s("a"),Gn=i("torch.nn.Module"),Jn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kn=f(),S=s("div"),v(Rt.$$.fragment),Yn=f(),fe=s("p"),Xn=i("The "),So=s("a"),Qn=i("DeiTModel"),Zn=i(" forward method, overrides the "),za=s("code"),ei=i("__call__"),ti=i(" special method."),oi=f(),v(Ve.$$.fragment),ai=f(),v(Ue.$$.fragment),Ws=f(),ge=s("h2"),He=s("a"),qa=s("span"),v(Vt.$$.fragment),si=f(),Na=s("span"),ri=i("DeiTForMaskedImageModeling"),Ss=f(),P=s("div"),v(Ut.$$.fragment),ni=f(),Ht=s("p"),ii=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Bt=s("a"),li=i("SimMIM"),di=i("."),ci=f(),v(Be.$$.fragment),mi=f(),Gt=s("p"),pi=i("This model is a PyTorch "),Jt=s("a"),hi=i("torch.nn.Module"),fi=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gi=f(),R=s("div"),v(Kt.$$.fragment),ui=f(),ue=s("p"),_i=i("The "),Ro=s("a"),Ti=i("DeiTForMaskedImageModeling"),bi=i(" forward method, overrides the "),Aa=s("code"),vi=i("__call__"),wi=i(" special method."),$i=f(),v(Ge.$$.fragment),yi=f(),v(Je.$$.fragment),Rs=f(),_e=s("h2"),Ke=s("a"),La=s("span"),v(Yt.$$.fragment),Di=f(),Oa=s("span"),ki=i("DeiTForImageClassification"),Vs=f(),N=s("div"),v(Xt.$$.fragment),Fi=f(),Wa=s("p"),Ii=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),xi=f(),Qt=s("p"),Mi=i("This model is a PyTorch "),Zt=s("a"),Ei=i("torch.nn.Module"),ji=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ci=f(),V=s("div"),v(eo.$$.fragment),Pi=f(),Te=s("p"),zi=i("The "),Vo=s("a"),qi=i("DeiTForImageClassification"),Ni=i(" forward method, overrides the "),Sa=s("code"),Ai=i("__call__"),Li=i(" special method."),Oi=f(),v(Ye.$$.fragment),Wi=f(),v(Xe.$$.fragment),Us=f(),be=s("h2"),Qe=s("a"),Ra=s("span"),v(to.$$.fragment),Si=f(),Va=s("span"),Ri=i("DeiTForImageClassificationWithTeacher"),Hs=f(),E=s("div"),v(oo.$$.fragment),Vi=f(),Ua=s("p"),Ui=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Hi=f(),Ha=s("p"),Bi=i(".. warning::"),Gi=f(),Ba=s("p"),Ji=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ki=f(),ao=s("p"),Yi=i("This model is a PyTorch "),so=s("a"),Xi=i("torch.nn.Module"),Qi=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zi=f(),U=s("div"),v(ro.$$.fragment),el=f(),ve=s("p"),tl=i("The "),Uo=s("a"),ol=i("DeiTForImageClassificationWithTeacher"),al=i(" forward method, overrides the "),Ga=s("code"),sl=i("__call__"),rl=i(" special method."),nl=f(),v(Ze.$$.fragment),il=f(),v(et.$$.fragment),Bs=f(),we=s("h2"),tt=s("a"),Ja=s("span"),v(no.$$.fragment),ll=f(),Ka=s("span"),dl=i("TFDeiTModel"),Gs=f(),ee=s("div"),v(io.$$.fragment),cl=f(),lo=s("p"),ml=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),co=s("a"),pl=i("tf.keras.layers.Layer"),hl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),fl=f(),H=s("div"),v(mo.$$.fragment),gl=f(),$e=s("p"),ul=i("The "),Ho=s("a"),_l=i("TFDeiTModel"),Tl=i(" forward method, overrides the "),Ya=s("code"),bl=i("__call__"),vl=i(" special method."),wl=f(),v(ot.$$.fragment),$l=f(),v(at.$$.fragment),Js=f(),ye=s("h2"),st=s("a"),Xa=s("span"),v(po.$$.fragment),yl=f(),Qa=s("span"),Dl=i("TFDeiTForMaskedImageModeling"),Ks=f(),te=s("div"),v(ho.$$.fragment),kl=f(),De=s("p"),Fl=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),fo=s("a"),Il=i("SimMIM"),xl=i(`.
This model is a TensorFlow
`),go=s("a"),Ml=i("tf.keras.layers.Layer"),El=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),jl=f(),B=s("div"),v(uo.$$.fragment),Cl=f(),ke=s("p"),Pl=i("The "),Bo=s("a"),zl=i("TFDeiTForMaskedImageModeling"),ql=i(" forward method, overrides the "),Za=s("code"),Nl=i("__call__"),Al=i(" special method."),Ll=f(),v(rt.$$.fragment),Ol=f(),v(nt.$$.fragment),Ys=f(),Fe=s("h2"),it=s("a"),es=s("span"),v(_o.$$.fragment),Wl=f(),ts=s("span"),Sl=i("TFDeiTForImageClassification"),Xs=f(),A=s("div"),v(To.$$.fragment),Rl=f(),os=s("p"),Vl=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Ul=f(),bo=s("p"),Hl=i(`This model is a TensorFlow
`),vo=s("a"),Bl=i("tf.keras.layers.Layer"),Gl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Jl=f(),G=s("div"),v(wo.$$.fragment),Kl=f(),Ie=s("p"),Yl=i("The "),Go=s("a"),Xl=i("TFDeiTForImageClassification"),Ql=i(" forward method, overrides the "),as=s("code"),Zl=i("__call__"),ed=i(" special method."),td=f(),v(lt.$$.fragment),od=f(),v(dt.$$.fragment),Qs=f(),xe=s("h2"),ct=s("a"),ss=s("span"),v($o.$$.fragment),ad=f(),rs=s("span"),sd=i("TFDeiTForImageClassificationWithTeacher"),Zs=f(),j=s("div"),v(yo.$$.fragment),rd=f(),ns=s("p"),nd=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),id=f(),is=s("p"),ld=i(".. warning::"),dd=f(),ls=s("p"),cd=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),md=f(),Do=s("p"),pd=i(`This model is a TensorFlow
`),ko=s("a"),hd=i("tf.keras.layers.Layer"),fd=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),gd=f(),J=s("div"),v(Fo.$$.fragment),ud=f(),Me=s("p"),_d=i("The "),Jo=s("a"),Td=i("TFDeiTForImageClassificationWithTeacher"),bd=i(" forward method, overrides the "),ds=s("code"),vd=i("__call__"),wd=i(" special method."),$d=f(),v(mt.$$.fragment),yd=f(),v(pt.$$.fragment),this.h()},l(t){const u=im('[data-svelte="svelte-1phssyn"]',document.head);d=r(u,"META",{name:!0,content:!0}),u.forEach(o),b=g(t),h=r(t,"H1",{class:!0});var Io=n(h);p=r(Io,"A",{id:!0,class:!0,href:!0});var cs=n(p);_=r(cs,"SPAN",{});var ms=n(_);w(a.$$.fragment,ms),ms.forEach(o),cs.forEach(o),c=g(Io),I=r(Io,"SPAN",{});var ps=n(I);$r=l(ps,"DeiT"),ps.forEach(o),Io.forEach(o),Ds=g(t),w(ze.$$.fragment,t),ks=g(t),ne=r(t,"H2",{class:!0});var xo=n(ne);qe=r(xo,"A",{id:!0,class:!0,href:!0});var hs=n(qe);pa=r(hs,"SPAN",{});var fs=n(pa);w(Dt.$$.fragment,fs),fs.forEach(o),hs.forEach(o),yr=g(xo),ha=r(xo,"SPAN",{});var gs=n(ha);Dr=l(gs,"Overview"),gs.forEach(o),xo.forEach(o),Fs=g(t),W=r(t,"P",{});var oe=n(W);kr=l(oe,"The DeiT model was proposed in "),kt=r(oe,"A",{href:!0,rel:!0});var us=n(kt);Fr=l(us,"Training data-efficient image transformers & distillation through attention"),us.forEach(o),Ir=l(oe,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),Mo=r(oe,"A",{href:!0});var _s=n(Mo);xr=l(_s,"Vision Transformer (ViT)"),_s.forEach(o),Mr=l(oe," introduced in "),Ft=r(oe,"A",{href:!0,rel:!0});var Ts=n(Ft);Er=l(Ts,"Dosovitskiy et al., 2020"),Ts.forEach(o),jr=l(oe,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),oe.forEach(o),Is=g(t),Eo=r(t,"P",{});var bs=n(Eo);Cr=l(bs,"The abstract from the paper is the following:"),bs.forEach(o),xs=g(t),jo=r(t,"P",{});var vs=n(jo);fa=r(vs,"EM",{});var ws=n(fa);Pr=l(ws,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ws.forEach(o),vs.forEach(o),Ms=g(t),Co=r(t,"P",{});var $s=n(Co);zr=l($s,"Tips:"),$s.forEach(o),Es=g(t),z=r(t,"UL",{});var L=n(z);ga=r(L,"LI",{});var ys=n(ga);qr=l(ys,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),ys.forEach(o),Nr=g(L),ie=r(L,"LI",{});var Ee=n(ie);Ar=l(Ee,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Po=r(Ee,"A",{href:!0});var Dd=n(Po);Lr=l(Dd,"DeiTForImageClassification"),Dd.forEach(o),Or=l(Ee,` and (2) corresponds to
`),zo=r(Ee,"A",{href:!0});var kd=n(zo);Wr=l(kd,"DeiTForImageClassificationWithTeacher"),kd.forEach(o),Sr=l(Ee,"."),Ee.forEach(o),Rr=g(L),ua=r(L,"LI",{});var Fd=n(ua);Vr=l(Fd,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Fd.forEach(o),Ur=g(L),_a=r(L,"LI",{});var Id=n(_a);Hr=l(Id,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),Id.forEach(o),Br=g(L),M=r(L,"LI",{});var C=n(M);Gr=l(C,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),qo=r(C,"A",{href:!0});var xd=n(qo);Jr=l(xd,"ViTModel"),xd.forEach(o),Kr=l(C," or "),No=r(C,"A",{href:!0});var Md=n(No);Yr=l(Md,"ViTForImageClassification"),Md.forEach(o),Xr=l(C,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),Ta=r(C,"EM",{});var Ed=n(Ta);Qr=l(Ed,"facebook/deit-tiny-patch16-224"),Ed.forEach(o),Zr=l(C,", "),ba=r(C,"EM",{});var jd=n(ba);en=l(jd,"facebook/deit-small-patch16-224"),jd.forEach(o),tn=l(C,", "),va=r(C,"EM",{});var Cd=n(va);on=l(Cd,"facebook/deit-base-patch16-224"),Cd.forEach(o),an=l(C,` and
`),wa=r(C,"EM",{});var Pd=n(wa);sn=l(Pd,"facebook/deit-base-patch16-384"),Pd.forEach(o),rn=l(C,". Note that one should use "),Ao=r(C,"A",{href:!0});var zd=n(Ao);nn=l(zd,"DeiTFeatureExtractor"),zd.forEach(o),ln=l(C,` in order to
prepare images for the model.`),C.forEach(o),L.forEach(o),js=g(t),ae=r(t,"P",{});var Ko=n(ae);dn=l(Ko,"This model was contributed by "),It=r(Ko,"A",{href:!0,rel:!0});var qd=n(It);cn=l(qd,"nielsr"),qd.forEach(o),mn=l(Ko,". The TensorFlow version of this model was added by "),xt=r(Ko,"A",{href:!0,rel:!0});var Nd=n(xt);pn=l(Nd,"amyeroberts"),Nd.forEach(o),hn=l(Ko,"."),Ko.forEach(o),Cs=g(t),le=r(t,"H2",{class:!0});var tr=n(le);Ne=r(tr,"A",{id:!0,class:!0,href:!0});var Ad=n(Ne);$a=r(Ad,"SPAN",{});var Ld=n($a);w(Mt.$$.fragment,Ld),Ld.forEach(o),Ad.forEach(o),fn=g(tr),ya=r(tr,"SPAN",{});var Od=n(ya);gn=l(Od,"DeiTConfig"),Od.forEach(o),tr.forEach(o),Ps=g(t),q=r(t,"DIV",{class:!0});var ht=n(q);w(Et.$$.fragment,ht),un=g(ht),de=r(ht,"P",{});var Yo=n(de);_n=l(Yo,"This is the configuration class to store the configuration of a "),Lo=r(Yo,"A",{href:!0});var Wd=n(Lo);Tn=l(Wd,"DeiTModel"),Wd.forEach(o),bn=l(Yo,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),jt=r(Yo,"A",{href:!0,rel:!0});var Sd=n(jt);vn=l(Sd,"facebook/deit-base-distilled-patch16-224"),Sd.forEach(o),wn=l(Yo,`
architecture.`),Yo.forEach(o),$n=g(ht),ce=r(ht,"P",{});var Xo=n(ce);yn=l(Xo,"Configuration objects inherit from "),Oo=r(Xo,"A",{href:!0});var Rd=n(Oo);Dn=l(Rd,"PretrainedConfig"),Rd.forEach(o),kn=l(Xo,` and can be used to control the model outputs. Read the
documentation from `),Wo=r(Xo,"A",{href:!0});var Vd=n(Wo);Fn=l(Vd,"PretrainedConfig"),Vd.forEach(o),In=l(Xo," for more information."),Xo.forEach(o),xn=g(ht),w(Ae.$$.fragment,ht),ht.forEach(o),zs=g(t),me=r(t,"H2",{class:!0});var or=n(me);Le=r(or,"A",{id:!0,class:!0,href:!0});var Ud=n(Le);Da=r(Ud,"SPAN",{});var Hd=n(Da);w(Ct.$$.fragment,Hd),Hd.forEach(o),Ud.forEach(o),Mn=g(or),ka=r(or,"SPAN",{});var Bd=n(ka);En=l(Bd,"DeiTFeatureExtractor"),Bd.forEach(o),or.forEach(o),qs=g(t),X=r(t,"DIV",{class:!0});var Qo=n(X);w(Pt.$$.fragment,Qo),jn=g(Qo),Fa=r(Qo,"P",{});var Gd=n(Fa);Cn=l(Gd,"Constructs a DeiT image processor."),Gd.forEach(o),Pn=g(Qo),Oe=r(Qo,"DIV",{class:!0});var ar=n(Oe);w(zt.$$.fragment,ar),zn=g(ar),Ia=r(ar,"P",{});var Jd=n(Ia);qn=l(Jd,"Preprocess an image or a batch of images."),Jd.forEach(o),ar.forEach(o),Qo.forEach(o),Ns=g(t),pe=r(t,"H2",{class:!0});var sr=n(pe);We=r(sr,"A",{id:!0,class:!0,href:!0});var Kd=n(We);xa=r(Kd,"SPAN",{});var Yd=n(xa);w(qt.$$.fragment,Yd),Yd.forEach(o),Kd.forEach(o),Nn=g(sr),Ma=r(sr,"SPAN",{});var Xd=n(Ma);An=l(Xd,"DeiTImageProcessor"),Xd.forEach(o),sr.forEach(o),As=g(t),Q=r(t,"DIV",{class:!0});var Zo=n(Q);w(Nt.$$.fragment,Zo),Ln=g(Zo),Ea=r(Zo,"P",{});var Qd=n(Ea);On=l(Qd,"Constructs a DeiT image processor."),Qd.forEach(o),Wn=g(Zo),Se=r(Zo,"DIV",{class:!0});var rr=n(Se);w(At.$$.fragment,rr),Sn=g(rr),ja=r(rr,"P",{});var Zd=n(ja);Rn=l(Zd,"Preprocess an image or batch of images."),Zd.forEach(o),rr.forEach(o),Zo.forEach(o),Ls=g(t),he=r(t,"H2",{class:!0});var nr=n(he);Re=r(nr,"A",{id:!0,class:!0,href:!0});var ec=n(Re);Ca=r(ec,"SPAN",{});var tc=n(Ca);w(Lt.$$.fragment,tc),tc.forEach(o),ec.forEach(o),Vn=g(nr),Pa=r(nr,"SPAN",{});var oc=n(Pa);Un=l(oc,"DeiTModel"),oc.forEach(o),nr.forEach(o),Os=g(t),Z=r(t,"DIV",{class:!0});var ea=n(Z);w(Ot.$$.fragment,ea),Hn=g(ea),Wt=r(ea,"P",{});var ir=n(Wt);Bn=l(ir,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),St=r(ir,"A",{href:!0,rel:!0});var ac=n(St);Gn=l(ac,"torch.nn.Module"),ac.forEach(o),Jn=l(ir,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ir.forEach(o),Kn=g(ea),S=r(ea,"DIV",{class:!0});var ft=n(S);w(Rt.$$.fragment,ft),Yn=g(ft),fe=r(ft,"P",{});var ta=n(fe);Xn=l(ta,"The "),So=r(ta,"A",{href:!0});var sc=n(So);Qn=l(sc,"DeiTModel"),sc.forEach(o),Zn=l(ta," forward method, overrides the "),za=r(ta,"CODE",{});var rc=n(za);ei=l(rc,"__call__"),rc.forEach(o),ti=l(ta," special method."),ta.forEach(o),oi=g(ft),w(Ve.$$.fragment,ft),ai=g(ft),w(Ue.$$.fragment,ft),ft.forEach(o),ea.forEach(o),Ws=g(t),ge=r(t,"H2",{class:!0});var lr=n(ge);He=r(lr,"A",{id:!0,class:!0,href:!0});var nc=n(He);qa=r(nc,"SPAN",{});var ic=n(qa);w(Vt.$$.fragment,ic),ic.forEach(o),nc.forEach(o),si=g(lr),Na=r(lr,"SPAN",{});var lc=n(Na);ri=l(lc,"DeiTForMaskedImageModeling"),lc.forEach(o),lr.forEach(o),Ss=g(t),P=r(t,"DIV",{class:!0});var se=n(P);w(Ut.$$.fragment,se),ni=g(se),Ht=r(se,"P",{});var dr=n(Ht);ii=l(dr,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Bt=r(dr,"A",{href:!0,rel:!0});var dc=n(Bt);li=l(dc,"SimMIM"),dc.forEach(o),di=l(dr,"."),dr.forEach(o),ci=g(se),w(Be.$$.fragment,se),mi=g(se),Gt=r(se,"P",{});var cr=n(Gt);pi=l(cr,"This model is a PyTorch "),Jt=r(cr,"A",{href:!0,rel:!0});var cc=n(Jt);hi=l(cc,"torch.nn.Module"),cc.forEach(o),fi=l(cr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cr.forEach(o),gi=g(se),R=r(se,"DIV",{class:!0});var gt=n(R);w(Kt.$$.fragment,gt),ui=g(gt),ue=r(gt,"P",{});var oa=n(ue);_i=l(oa,"The "),Ro=r(oa,"A",{href:!0});var mc=n(Ro);Ti=l(mc,"DeiTForMaskedImageModeling"),mc.forEach(o),bi=l(oa," forward method, overrides the "),Aa=r(oa,"CODE",{});var pc=n(Aa);vi=l(pc,"__call__"),pc.forEach(o),wi=l(oa," special method."),oa.forEach(o),$i=g(gt),w(Ge.$$.fragment,gt),yi=g(gt),w(Je.$$.fragment,gt),gt.forEach(o),se.forEach(o),Rs=g(t),_e=r(t,"H2",{class:!0});var mr=n(_e);Ke=r(mr,"A",{id:!0,class:!0,href:!0});var hc=n(Ke);La=r(hc,"SPAN",{});var fc=n(La);w(Yt.$$.fragment,fc),fc.forEach(o),hc.forEach(o),Di=g(mr),Oa=r(mr,"SPAN",{});var gc=n(Oa);ki=l(gc,"DeiTForImageClassification"),gc.forEach(o),mr.forEach(o),Vs=g(t),N=r(t,"DIV",{class:!0});var ut=n(N);w(Xt.$$.fragment,ut),Fi=g(ut),Wa=r(ut,"P",{});var uc=n(Wa);Ii=l(uc,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),uc.forEach(o),xi=g(ut),Qt=r(ut,"P",{});var pr=n(Qt);Mi=l(pr,"This model is a PyTorch "),Zt=r(pr,"A",{href:!0,rel:!0});var _c=n(Zt);Ei=l(_c,"torch.nn.Module"),_c.forEach(o),ji=l(pr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pr.forEach(o),Ci=g(ut),V=r(ut,"DIV",{class:!0});var _t=n(V);w(eo.$$.fragment,_t),Pi=g(_t),Te=r(_t,"P",{});var aa=n(Te);zi=l(aa,"The "),Vo=r(aa,"A",{href:!0});var Tc=n(Vo);qi=l(Tc,"DeiTForImageClassification"),Tc.forEach(o),Ni=l(aa," forward method, overrides the "),Sa=r(aa,"CODE",{});var bc=n(Sa);Ai=l(bc,"__call__"),bc.forEach(o),Li=l(aa," special method."),aa.forEach(o),Oi=g(_t),w(Ye.$$.fragment,_t),Wi=g(_t),w(Xe.$$.fragment,_t),_t.forEach(o),ut.forEach(o),Us=g(t),be=r(t,"H2",{class:!0});var hr=n(be);Qe=r(hr,"A",{id:!0,class:!0,href:!0});var vc=n(Qe);Ra=r(vc,"SPAN",{});var wc=n(Ra);w(to.$$.fragment,wc),wc.forEach(o),vc.forEach(o),Si=g(hr),Va=r(hr,"SPAN",{});var $c=n(Va);Ri=l($c,"DeiTForImageClassificationWithTeacher"),$c.forEach(o),hr.forEach(o),Hs=g(t),E=r(t,"DIV",{class:!0});var K=n(E);w(oo.$$.fragment,K),Vi=g(K),Ua=r(K,"P",{});var yc=n(Ua);Ui=l(yc,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),yc.forEach(o),Hi=g(K),Ha=r(K,"P",{});var Dc=n(Ha);Bi=l(Dc,".. warning::"),Dc.forEach(o),Gi=g(K),Ba=r(K,"P",{});var kc=n(Ba);Ji=l(kc,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),kc.forEach(o),Ki=g(K),ao=r(K,"P",{});var fr=n(ao);Yi=l(fr,"This model is a PyTorch "),so=r(fr,"A",{href:!0,rel:!0});var Fc=n(so);Xi=l(Fc,"torch.nn.Module"),Fc.forEach(o),Qi=l(fr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fr.forEach(o),Zi=g(K),U=r(K,"DIV",{class:!0});var Tt=n(U);w(ro.$$.fragment,Tt),el=g(Tt),ve=r(Tt,"P",{});var sa=n(ve);tl=l(sa,"The "),Uo=r(sa,"A",{href:!0});var Ic=n(Uo);ol=l(Ic,"DeiTForImageClassificationWithTeacher"),Ic.forEach(o),al=l(sa," forward method, overrides the "),Ga=r(sa,"CODE",{});var xc=n(Ga);sl=l(xc,"__call__"),xc.forEach(o),rl=l(sa," special method."),sa.forEach(o),nl=g(Tt),w(Ze.$$.fragment,Tt),il=g(Tt),w(et.$$.fragment,Tt),Tt.forEach(o),K.forEach(o),Bs=g(t),we=r(t,"H2",{class:!0});var gr=n(we);tt=r(gr,"A",{id:!0,class:!0,href:!0});var Mc=n(tt);Ja=r(Mc,"SPAN",{});var Ec=n(Ja);w(no.$$.fragment,Ec),Ec.forEach(o),Mc.forEach(o),ll=g(gr),Ka=r(gr,"SPAN",{});var jc=n(Ka);dl=l(jc,"TFDeiTModel"),jc.forEach(o),gr.forEach(o),Gs=g(t),ee=r(t,"DIV",{class:!0});var ra=n(ee);w(io.$$.fragment,ra),cl=g(ra),lo=r(ra,"P",{});var ur=n(lo);ml=l(ur,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),co=r(ur,"A",{href:!0,rel:!0});var Cc=n(co);pl=l(Cc,"tf.keras.layers.Layer"),Cc.forEach(o),hl=l(ur,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),ur.forEach(o),fl=g(ra),H=r(ra,"DIV",{class:!0});var bt=n(H);w(mo.$$.fragment,bt),gl=g(bt),$e=r(bt,"P",{});var na=n($e);ul=l(na,"The "),Ho=r(na,"A",{href:!0});var Pc=n(Ho);_l=l(Pc,"TFDeiTModel"),Pc.forEach(o),Tl=l(na," forward method, overrides the "),Ya=r(na,"CODE",{});var zc=n(Ya);bl=l(zc,"__call__"),zc.forEach(o),vl=l(na," special method."),na.forEach(o),wl=g(bt),w(ot.$$.fragment,bt),$l=g(bt),w(at.$$.fragment,bt),bt.forEach(o),ra.forEach(o),Js=g(t),ye=r(t,"H2",{class:!0});var _r=n(ye);st=r(_r,"A",{id:!0,class:!0,href:!0});var qc=n(st);Xa=r(qc,"SPAN",{});var Nc=n(Xa);w(po.$$.fragment,Nc),Nc.forEach(o),qc.forEach(o),yl=g(_r),Qa=r(_r,"SPAN",{});var Ac=n(Qa);Dl=l(Ac,"TFDeiTForMaskedImageModeling"),Ac.forEach(o),_r.forEach(o),Ks=g(t),te=r(t,"DIV",{class:!0});var ia=n(te);w(ho.$$.fragment,ia),kl=g(ia),De=r(ia,"P",{});var la=n(De);Fl=l(la,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),fo=r(la,"A",{href:!0,rel:!0});var Lc=n(fo);Il=l(Lc,"SimMIM"),Lc.forEach(o),xl=l(la,`.
This model is a TensorFlow
`),go=r(la,"A",{href:!0,rel:!0});var Oc=n(go);Ml=l(Oc,"tf.keras.layers.Layer"),Oc.forEach(o),El=l(la,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),la.forEach(o),jl=g(ia),B=r(ia,"DIV",{class:!0});var vt=n(B);w(uo.$$.fragment,vt),Cl=g(vt),ke=r(vt,"P",{});var da=n(ke);Pl=l(da,"The "),Bo=r(da,"A",{href:!0});var Wc=n(Bo);zl=l(Wc,"TFDeiTForMaskedImageModeling"),Wc.forEach(o),ql=l(da," forward method, overrides the "),Za=r(da,"CODE",{});var Sc=n(Za);Nl=l(Sc,"__call__"),Sc.forEach(o),Al=l(da," special method."),da.forEach(o),Ll=g(vt),w(rt.$$.fragment,vt),Ol=g(vt),w(nt.$$.fragment,vt),vt.forEach(o),ia.forEach(o),Ys=g(t),Fe=r(t,"H2",{class:!0});var Tr=n(Fe);it=r(Tr,"A",{id:!0,class:!0,href:!0});var Rc=n(it);es=r(Rc,"SPAN",{});var Vc=n(es);w(_o.$$.fragment,Vc),Vc.forEach(o),Rc.forEach(o),Wl=g(Tr),ts=r(Tr,"SPAN",{});var Uc=n(ts);Sl=l(Uc,"TFDeiTForImageClassification"),Uc.forEach(o),Tr.forEach(o),Xs=g(t),A=r(t,"DIV",{class:!0});var wt=n(A);w(To.$$.fragment,wt),Rl=g(wt),os=r(wt,"P",{});var Hc=n(os);Vl=l(Hc,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Hc.forEach(o),Ul=g(wt),bo=r(wt,"P",{});var br=n(bo);Hl=l(br,`This model is a TensorFlow
`),vo=r(br,"A",{href:!0,rel:!0});var Bc=n(vo);Bl=l(Bc,"tf.keras.layers.Layer"),Bc.forEach(o),Gl=l(br,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),br.forEach(o),Jl=g(wt),G=r(wt,"DIV",{class:!0});var $t=n(G);w(wo.$$.fragment,$t),Kl=g($t),Ie=r($t,"P",{});var ca=n(Ie);Yl=l(ca,"The "),Go=r(ca,"A",{href:!0});var Gc=n(Go);Xl=l(Gc,"TFDeiTForImageClassification"),Gc.forEach(o),Ql=l(ca," forward method, overrides the "),as=r(ca,"CODE",{});var Jc=n(as);Zl=l(Jc,"__call__"),Jc.forEach(o),ed=l(ca," special method."),ca.forEach(o),td=g($t),w(lt.$$.fragment,$t),od=g($t),w(dt.$$.fragment,$t),$t.forEach(o),wt.forEach(o),Qs=g(t),xe=r(t,"H2",{class:!0});var vr=n(xe);ct=r(vr,"A",{id:!0,class:!0,href:!0});var Kc=n(ct);ss=r(Kc,"SPAN",{});var Yc=n(ss);w($o.$$.fragment,Yc),Yc.forEach(o),Kc.forEach(o),ad=g(vr),rs=r(vr,"SPAN",{});var Xc=n(rs);sd=l(Xc,"TFDeiTForImageClassificationWithTeacher"),Xc.forEach(o),vr.forEach(o),Zs=g(t),j=r(t,"DIV",{class:!0});var Y=n(j);w(yo.$$.fragment,Y),rd=g(Y),ns=r(Y,"P",{});var Qc=n(ns);nd=l(Qc,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Qc.forEach(o),id=g(Y),is=r(Y,"P",{});var Zc=n(is);ld=l(Zc,".. warning::"),Zc.forEach(o),dd=g(Y),ls=r(Y,"P",{});var em=n(ls);cd=l(em,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),em.forEach(o),md=g(Y),Do=r(Y,"P",{});var wr=n(Do);pd=l(wr,`This model is a TensorFlow
`),ko=r(wr,"A",{href:!0,rel:!0});var tm=n(ko);hd=l(tm,"tf.keras.layers.Layer"),tm.forEach(o),fd=l(wr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),wr.forEach(o),gd=g(Y),J=r(Y,"DIV",{class:!0});var yt=n(J);w(Fo.$$.fragment,yt),ud=g(yt),Me=r(yt,"P",{});var ma=n(Me);_d=l(ma,"The "),Jo=r(ma,"A",{href:!0});var om=n(Jo);Td=l(om,"TFDeiTForImageClassificationWithTeacher"),om.forEach(o),bd=l(ma," forward method, overrides the "),ds=r(ma,"CODE",{});var am=n(ds);vd=l(am,"__call__"),am.forEach(o),wd=l(ma," special method."),ma.forEach(o),$d=g(yt),w(mt.$$.fragment,yt),yd=g(yt),w(pt.$$.fragment,yt),yt.forEach(o),Y.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(Mm)),m(p,"id","deit"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#deit"),m(h,"class","relative group"),m(qe,"id","overview"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#overview"),m(ne,"class","relative group"),m(kt,"href","https://arxiv.org/abs/2012.12877"),m(kt,"rel","nofollow"),m(Mo,"href","vit"),m(Ft,"href","https://arxiv.org/abs/2010.11929"),m(Ft,"rel","nofollow"),m(Po,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),m(zo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(qo,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),m(No,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),m(Ao,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor"),m(It,"href","https://huggingface.co/nielsr"),m(It,"rel","nofollow"),m(xt,"href","https://huggingface.co/amyeroberts"),m(xt,"rel","nofollow"),m(Ne,"id","transformers.DeiTConfig"),m(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ne,"href","#transformers.DeiTConfig"),m(le,"class","relative group"),m(Lo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),m(jt,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),m(jt,"rel","nofollow"),m(Oo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Wo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"id","transformers.DeiTImageProcessor"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.DeiTImageProcessor"),m(me,"class","relative group"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.DeiTImageProcessor"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.DeiTImageProcessor"),m(pe,"class","relative group"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Re,"id","transformers.DeiTModel"),m(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Re,"href","#transformers.DeiTModel"),m(he,"class","relative group"),m(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(St,"rel","nofollow"),m(So,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"id","transformers.DeiTForMaskedImageModeling"),m(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(He,"href","#transformers.DeiTForMaskedImageModeling"),m(ge,"class","relative group"),m(Bt,"href","https://arxiv.org/abs/2111.09886"),m(Bt,"rel","nofollow"),m(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jt,"rel","nofollow"),m(Ro,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ke,"id","transformers.DeiTForImageClassification"),m(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ke,"href","#transformers.DeiTForImageClassification"),m(_e,"class","relative group"),m(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Zt,"rel","nofollow"),m(Vo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"id","transformers.DeiTForImageClassificationWithTeacher"),m(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qe,"href","#transformers.DeiTForImageClassificationWithTeacher"),m(be,"class","relative group"),m(so,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(so,"rel","nofollow"),m(Uo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"id","transformers.TFDeiTModel"),m(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(tt,"href","#transformers.TFDeiTModel"),m(we,"class","relative group"),m(co,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(co,"rel","nofollow"),m(Ho,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTModel"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(st,"id","transformers.TFDeiTForMaskedImageModeling"),m(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(st,"href","#transformers.TFDeiTForMaskedImageModeling"),m(ye,"class","relative group"),m(fo,"href","https://arxiv.org/abs/2111.09886"),m(fo,"rel","nofollow"),m(go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(go,"rel","nofollow"),m(Bo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForMaskedImageModeling"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(it,"id","transformers.TFDeiTForImageClassification"),m(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(it,"href","#transformers.TFDeiTForImageClassification"),m(Fe,"class","relative group"),m(vo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(vo,"rel","nofollow"),m(Go,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassification"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ct,"id","transformers.TFDeiTForImageClassificationWithTeacher"),m(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ct,"href","#transformers.TFDeiTForImageClassificationWithTeacher"),m(xe,"class","relative group"),m(ko,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ko,"rel","nofollow"),m(Jo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassificationWithTeacher"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),T(t,b,u),T(t,h,u),e(h,p),e(p,_),$(a,_,null),e(h,c),e(h,I),e(I,$r),T(t,Ds,u),$(ze,t,u),T(t,ks,u),T(t,ne,u),e(ne,qe),e(qe,pa),$(Dt,pa,null),e(ne,yr),e(ne,ha),e(ha,Dr),T(t,Fs,u),T(t,W,u),e(W,kr),e(W,kt),e(kt,Fr),e(W,Ir),e(W,Mo),e(Mo,xr),e(W,Mr),e(W,Ft),e(Ft,Er),e(W,jr),T(t,Is,u),T(t,Eo,u),e(Eo,Cr),T(t,xs,u),T(t,jo,u),e(jo,fa),e(fa,Pr),T(t,Ms,u),T(t,Co,u),e(Co,zr),T(t,Es,u),T(t,z,u),e(z,ga),e(ga,qr),e(z,Nr),e(z,ie),e(ie,Ar),e(ie,Po),e(Po,Lr),e(ie,Or),e(ie,zo),e(zo,Wr),e(ie,Sr),e(z,Rr),e(z,ua),e(ua,Vr),e(z,Ur),e(z,_a),e(_a,Hr),e(z,Br),e(z,M),e(M,Gr),e(M,qo),e(qo,Jr),e(M,Kr),e(M,No),e(No,Yr),e(M,Xr),e(M,Ta),e(Ta,Qr),e(M,Zr),e(M,ba),e(ba,en),e(M,tn),e(M,va),e(va,on),e(M,an),e(M,wa),e(wa,sn),e(M,rn),e(M,Ao),e(Ao,nn),e(M,ln),T(t,js,u),T(t,ae,u),e(ae,dn),e(ae,It),e(It,cn),e(ae,mn),e(ae,xt),e(xt,pn),e(ae,hn),T(t,Cs,u),T(t,le,u),e(le,Ne),e(Ne,$a),$(Mt,$a,null),e(le,fn),e(le,ya),e(ya,gn),T(t,Ps,u),T(t,q,u),$(Et,q,null),e(q,un),e(q,de),e(de,_n),e(de,Lo),e(Lo,Tn),e(de,bn),e(de,jt),e(jt,vn),e(de,wn),e(q,$n),e(q,ce),e(ce,yn),e(ce,Oo),e(Oo,Dn),e(ce,kn),e(ce,Wo),e(Wo,Fn),e(ce,In),e(q,xn),$(Ae,q,null),T(t,zs,u),T(t,me,u),e(me,Le),e(Le,Da),$(Ct,Da,null),e(me,Mn),e(me,ka),e(ka,En),T(t,qs,u),T(t,X,u),$(Pt,X,null),e(X,jn),e(X,Fa),e(Fa,Cn),e(X,Pn),e(X,Oe),$(zt,Oe,null),e(Oe,zn),e(Oe,Ia),e(Ia,qn),T(t,Ns,u),T(t,pe,u),e(pe,We),e(We,xa),$(qt,xa,null),e(pe,Nn),e(pe,Ma),e(Ma,An),T(t,As,u),T(t,Q,u),$(Nt,Q,null),e(Q,Ln),e(Q,Ea),e(Ea,On),e(Q,Wn),e(Q,Se),$(At,Se,null),e(Se,Sn),e(Se,ja),e(ja,Rn),T(t,Ls,u),T(t,he,u),e(he,Re),e(Re,Ca),$(Lt,Ca,null),e(he,Vn),e(he,Pa),e(Pa,Un),T(t,Os,u),T(t,Z,u),$(Ot,Z,null),e(Z,Hn),e(Z,Wt),e(Wt,Bn),e(Wt,St),e(St,Gn),e(Wt,Jn),e(Z,Kn),e(Z,S),$(Rt,S,null),e(S,Yn),e(S,fe),e(fe,Xn),e(fe,So),e(So,Qn),e(fe,Zn),e(fe,za),e(za,ei),e(fe,ti),e(S,oi),$(Ve,S,null),e(S,ai),$(Ue,S,null),T(t,Ws,u),T(t,ge,u),e(ge,He),e(He,qa),$(Vt,qa,null),e(ge,si),e(ge,Na),e(Na,ri),T(t,Ss,u),T(t,P,u),$(Ut,P,null),e(P,ni),e(P,Ht),e(Ht,ii),e(Ht,Bt),e(Bt,li),e(Ht,di),e(P,ci),$(Be,P,null),e(P,mi),e(P,Gt),e(Gt,pi),e(Gt,Jt),e(Jt,hi),e(Gt,fi),e(P,gi),e(P,R),$(Kt,R,null),e(R,ui),e(R,ue),e(ue,_i),e(ue,Ro),e(Ro,Ti),e(ue,bi),e(ue,Aa),e(Aa,vi),e(ue,wi),e(R,$i),$(Ge,R,null),e(R,yi),$(Je,R,null),T(t,Rs,u),T(t,_e,u),e(_e,Ke),e(Ke,La),$(Yt,La,null),e(_e,Di),e(_e,Oa),e(Oa,ki),T(t,Vs,u),T(t,N,u),$(Xt,N,null),e(N,Fi),e(N,Wa),e(Wa,Ii),e(N,xi),e(N,Qt),e(Qt,Mi),e(Qt,Zt),e(Zt,Ei),e(Qt,ji),e(N,Ci),e(N,V),$(eo,V,null),e(V,Pi),e(V,Te),e(Te,zi),e(Te,Vo),e(Vo,qi),e(Te,Ni),e(Te,Sa),e(Sa,Ai),e(Te,Li),e(V,Oi),$(Ye,V,null),e(V,Wi),$(Xe,V,null),T(t,Us,u),T(t,be,u),e(be,Qe),e(Qe,Ra),$(to,Ra,null),e(be,Si),e(be,Va),e(Va,Ri),T(t,Hs,u),T(t,E,u),$(oo,E,null),e(E,Vi),e(E,Ua),e(Ua,Ui),e(E,Hi),e(E,Ha),e(Ha,Bi),e(E,Gi),e(E,Ba),e(Ba,Ji),e(E,Ki),e(E,ao),e(ao,Yi),e(ao,so),e(so,Xi),e(ao,Qi),e(E,Zi),e(E,U),$(ro,U,null),e(U,el),e(U,ve),e(ve,tl),e(ve,Uo),e(Uo,ol),e(ve,al),e(ve,Ga),e(Ga,sl),e(ve,rl),e(U,nl),$(Ze,U,null),e(U,il),$(et,U,null),T(t,Bs,u),T(t,we,u),e(we,tt),e(tt,Ja),$(no,Ja,null),e(we,ll),e(we,Ka),e(Ka,dl),T(t,Gs,u),T(t,ee,u),$(io,ee,null),e(ee,cl),e(ee,lo),e(lo,ml),e(lo,co),e(co,pl),e(lo,hl),e(ee,fl),e(ee,H),$(mo,H,null),e(H,gl),e(H,$e),e($e,ul),e($e,Ho),e(Ho,_l),e($e,Tl),e($e,Ya),e(Ya,bl),e($e,vl),e(H,wl),$(ot,H,null),e(H,$l),$(at,H,null),T(t,Js,u),T(t,ye,u),e(ye,st),e(st,Xa),$(po,Xa,null),e(ye,yl),e(ye,Qa),e(Qa,Dl),T(t,Ks,u),T(t,te,u),$(ho,te,null),e(te,kl),e(te,De),e(De,Fl),e(De,fo),e(fo,Il),e(De,xl),e(De,go),e(go,Ml),e(De,El),e(te,jl),e(te,B),$(uo,B,null),e(B,Cl),e(B,ke),e(ke,Pl),e(ke,Bo),e(Bo,zl),e(ke,ql),e(ke,Za),e(Za,Nl),e(ke,Al),e(B,Ll),$(rt,B,null),e(B,Ol),$(nt,B,null),T(t,Ys,u),T(t,Fe,u),e(Fe,it),e(it,es),$(_o,es,null),e(Fe,Wl),e(Fe,ts),e(ts,Sl),T(t,Xs,u),T(t,A,u),$(To,A,null),e(A,Rl),e(A,os),e(os,Vl),e(A,Ul),e(A,bo),e(bo,Hl),e(bo,vo),e(vo,Bl),e(bo,Gl),e(A,Jl),e(A,G),$(wo,G,null),e(G,Kl),e(G,Ie),e(Ie,Yl),e(Ie,Go),e(Go,Xl),e(Ie,Ql),e(Ie,as),e(as,Zl),e(Ie,ed),e(G,td),$(lt,G,null),e(G,od),$(dt,G,null),T(t,Qs,u),T(t,xe,u),e(xe,ct),e(ct,ss),$($o,ss,null),e(xe,ad),e(xe,rs),e(rs,sd),T(t,Zs,u),T(t,j,u),$(yo,j,null),e(j,rd),e(j,ns),e(ns,nd),e(j,id),e(j,is),e(is,ld),e(j,dd),e(j,ls),e(ls,cd),e(j,md),e(j,Do),e(Do,pd),e(Do,ko),e(ko,hd),e(Do,fd),e(j,gd),e(j,J),$(Fo,J,null),e(J,ud),e(J,Me),e(Me,_d),e(Me,Jo),e(Jo,Td),e(Me,bd),e(Me,ds),e(ds,vd),e(Me,wd),e(J,$d),$(mt,J,null),e(J,yd),$(pt,J,null),er=!0},p(t,[u]){const Io={};u&2&&(Io.$$scope={dirty:u,ctx:t}),ze.$set(Io);const cs={};u&2&&(cs.$$scope={dirty:u,ctx:t}),Ae.$set(cs);const ms={};u&2&&(ms.$$scope={dirty:u,ctx:t}),Ve.$set(ms);const ps={};u&2&&(ps.$$scope={dirty:u,ctx:t}),Ue.$set(ps);const xo={};u&2&&(xo.$$scope={dirty:u,ctx:t}),Be.$set(xo);const hs={};u&2&&(hs.$$scope={dirty:u,ctx:t}),Ge.$set(hs);const fs={};u&2&&(fs.$$scope={dirty:u,ctx:t}),Je.$set(fs);const gs={};u&2&&(gs.$$scope={dirty:u,ctx:t}),Ye.$set(gs);const oe={};u&2&&(oe.$$scope={dirty:u,ctx:t}),Xe.$set(oe);const us={};u&2&&(us.$$scope={dirty:u,ctx:t}),Ze.$set(us);const _s={};u&2&&(_s.$$scope={dirty:u,ctx:t}),et.$set(_s);const Ts={};u&2&&(Ts.$$scope={dirty:u,ctx:t}),ot.$set(Ts);const bs={};u&2&&(bs.$$scope={dirty:u,ctx:t}),at.$set(bs);const vs={};u&2&&(vs.$$scope={dirty:u,ctx:t}),rt.$set(vs);const ws={};u&2&&(ws.$$scope={dirty:u,ctx:t}),nt.$set(ws);const $s={};u&2&&($s.$$scope={dirty:u,ctx:t}),lt.$set($s);const L={};u&2&&(L.$$scope={dirty:u,ctx:t}),dt.$set(L);const ys={};u&2&&(ys.$$scope={dirty:u,ctx:t}),mt.$set(ys);const Ee={};u&2&&(Ee.$$scope={dirty:u,ctx:t}),pt.$set(Ee)},i(t){er||(y(a.$$.fragment,t),y(ze.$$.fragment,t),y(Dt.$$.fragment,t),y(Mt.$$.fragment,t),y(Et.$$.fragment,t),y(Ae.$$.fragment,t),y(Ct.$$.fragment,t),y(Pt.$$.fragment,t),y(zt.$$.fragment,t),y(qt.$$.fragment,t),y(Nt.$$.fragment,t),y(At.$$.fragment,t),y(Lt.$$.fragment,t),y(Ot.$$.fragment,t),y(Rt.$$.fragment,t),y(Ve.$$.fragment,t),y(Ue.$$.fragment,t),y(Vt.$$.fragment,t),y(Ut.$$.fragment,t),y(Be.$$.fragment,t),y(Kt.$$.fragment,t),y(Ge.$$.fragment,t),y(Je.$$.fragment,t),y(Yt.$$.fragment,t),y(Xt.$$.fragment,t),y(eo.$$.fragment,t),y(Ye.$$.fragment,t),y(Xe.$$.fragment,t),y(to.$$.fragment,t),y(oo.$$.fragment,t),y(ro.$$.fragment,t),y(Ze.$$.fragment,t),y(et.$$.fragment,t),y(no.$$.fragment,t),y(io.$$.fragment,t),y(mo.$$.fragment,t),y(ot.$$.fragment,t),y(at.$$.fragment,t),y(po.$$.fragment,t),y(ho.$$.fragment,t),y(uo.$$.fragment,t),y(rt.$$.fragment,t),y(nt.$$.fragment,t),y(_o.$$.fragment,t),y(To.$$.fragment,t),y(wo.$$.fragment,t),y(lt.$$.fragment,t),y(dt.$$.fragment,t),y($o.$$.fragment,t),y(yo.$$.fragment,t),y(Fo.$$.fragment,t),y(mt.$$.fragment,t),y(pt.$$.fragment,t),er=!0)},o(t){D(a.$$.fragment,t),D(ze.$$.fragment,t),D(Dt.$$.fragment,t),D(Mt.$$.fragment,t),D(Et.$$.fragment,t),D(Ae.$$.fragment,t),D(Ct.$$.fragment,t),D(Pt.$$.fragment,t),D(zt.$$.fragment,t),D(qt.$$.fragment,t),D(Nt.$$.fragment,t),D(At.$$.fragment,t),D(Lt.$$.fragment,t),D(Ot.$$.fragment,t),D(Rt.$$.fragment,t),D(Ve.$$.fragment,t),D(Ue.$$.fragment,t),D(Vt.$$.fragment,t),D(Ut.$$.fragment,t),D(Be.$$.fragment,t),D(Kt.$$.fragment,t),D(Ge.$$.fragment,t),D(Je.$$.fragment,t),D(Yt.$$.fragment,t),D(Xt.$$.fragment,t),D(eo.$$.fragment,t),D(Ye.$$.fragment,t),D(Xe.$$.fragment,t),D(to.$$.fragment,t),D(oo.$$.fragment,t),D(ro.$$.fragment,t),D(Ze.$$.fragment,t),D(et.$$.fragment,t),D(no.$$.fragment,t),D(io.$$.fragment,t),D(mo.$$.fragment,t),D(ot.$$.fragment,t),D(at.$$.fragment,t),D(po.$$.fragment,t),D(ho.$$.fragment,t),D(uo.$$.fragment,t),D(rt.$$.fragment,t),D(nt.$$.fragment,t),D(_o.$$.fragment,t),D(To.$$.fragment,t),D(wo.$$.fragment,t),D(lt.$$.fragment,t),D(dt.$$.fragment,t),D($o.$$.fragment,t),D(yo.$$.fragment,t),D(Fo.$$.fragment,t),D(mt.$$.fragment,t),D(pt.$$.fragment,t),er=!1},d(t){o(d),t&&o(b),t&&o(h),k(a),t&&o(Ds),k(ze,t),t&&o(ks),t&&o(ne),k(Dt),t&&o(Fs),t&&o(W),t&&o(Is),t&&o(Eo),t&&o(xs),t&&o(jo),t&&o(Ms),t&&o(Co),t&&o(Es),t&&o(z),t&&o(js),t&&o(ae),t&&o(Cs),t&&o(le),k(Mt),t&&o(Ps),t&&o(q),k(Et),k(Ae),t&&o(zs),t&&o(me),k(Ct),t&&o(qs),t&&o(X),k(Pt),k(zt),t&&o(Ns),t&&o(pe),k(qt),t&&o(As),t&&o(Q),k(Nt),k(At),t&&o(Ls),t&&o(he),k(Lt),t&&o(Os),t&&o(Z),k(Ot),k(Rt),k(Ve),k(Ue),t&&o(Ws),t&&o(ge),k(Vt),t&&o(Ss),t&&o(P),k(Ut),k(Be),k(Kt),k(Ge),k(Je),t&&o(Rs),t&&o(_e),k(Yt),t&&o(Vs),t&&o(N),k(Xt),k(eo),k(Ye),k(Xe),t&&o(Us),t&&o(be),k(to),t&&o(Hs),t&&o(E),k(oo),k(ro),k(Ze),k(et),t&&o(Bs),t&&o(we),k(no),t&&o(Gs),t&&o(ee),k(io),k(mo),k(ot),k(at),t&&o(Js),t&&o(ye),k(po),t&&o(Ks),t&&o(te),k(ho),k(uo),k(rt),k(nt),t&&o(Ys),t&&o(Fe),k(_o),t&&o(Xs),t&&o(A),k(To),k(wo),k(lt),k(dt),t&&o(Qs),t&&o(xe),k($o),t&&o(Zs),t&&o(j),k(yo),k(Fo),k(mt),k(pt)}}}const Mm={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTImageProcessor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTImageProcessor",title:"DeiTImageProcessor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"},{local:"transformers.TFDeiTModel",title:"TFDeiTModel"},{local:"transformers.TFDeiTForMaskedImageModeling",title:"TFDeiTForMaskedImageModeling"},{local:"transformers.TFDeiTForImageClassification",title:"TFDeiTForImageClassification"},{local:"transformers.TFDeiTForImageClassificationWithTeacher",title:"TFDeiTForImageClassificationWithTeacher"}],title:"DeiT"};function Em(F){return lm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Am extends sm{constructor(d){super();rm(this,d,Em,xm,nm,{})}}export{Am as default,Mm as metadata};
