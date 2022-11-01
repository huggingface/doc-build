import{S as Wc,i as Sc,s as Vc,e as s,k as f,w as b,t as i,M as Bc,c as r,d as o,m as u,a as n,x as w,h as l,b as m,G as e,g as T,y as $,q as y,o as D,B as F,v as Hc,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as oe}from"../../chunks/Tip-hf-doc-builder.js";import{D as M}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ce}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Rc(k){let d,v,p,h,_;return{c(){d=s("p"),v=i(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=s("a"),h=i("Github Issue"),_=i("."),this.h()},l(a){d=r(a,"P",{});var c=n(d);v=l(c,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=r(c,"A",{href:!0,rel:!0});var x=n(p);h=l(x,"Github Issue"),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(p,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),m(p,"rel","nofollow")},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Uc(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTConfig, DeiTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),v=i("Example:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function Jc(k){let d,v;return{c(){d=s("p"),v=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(p){d=r(p,"P",{});var h=n(d);v=l(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(p,h){T(p,d,h),e(d,v)},d(p){p&&o(d)}}}function Gc(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Kc(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),v=i("Example:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function Xc(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Note that we provide a script to pre-train this model on custom data in our "),p=s("a"),h=i(`examples
directory`),_=i("."),this.h()},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Note that we provide a script to pre-train this model on custom data in our "),p=r(c,"A",{href:!0,rel:!0});var x=n(p);h=l(x,`examples
directory`),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(p,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),m(p,"rel","nofollow")},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Zc(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Qc(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),v=i("Examples:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function Yc(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function eh(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: magpie`}}),{c(){d=s("p"),v=i("Examples:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function th(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function oh(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),v=i("Example:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function ah(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function sh(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),v=i("Example:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function rh(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function nh(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),v=i("Examples:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function ih(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function lh(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: little blue heron, Egretta caerulea`}}),{c(){d=s("p"),v=i("Examples:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function dh(k){let d,v,p,h,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,v),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function ch(k){let d,v,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),v=i("Example:"),p=f(),b(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);v=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,v),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function hh(k){let d,v,p,h,_,a,c,x,hr,_s,Pe,Ts,ne,qe,la,$t,pr,da,mr,vs,W,fr,yt,ur,gr,Fo,_r,Tr,Dt,vr,br,bs,ko,wr,ws,xo,ca,$r,$s,Io,yr,ys,q,ha,Dr,Fr,ie,kr,Mo,xr,Ir,Eo,Mr,Er,jr,pa,Cr,Pr,ma,qr,zr,I,Ar,jo,Nr,Or,Co,Lr,Wr,fa,Sr,Vr,ua,Br,Hr,ga,Rr,Ur,_a,Jr,Gr,Po,Kr,Xr,Ds,ae,Zr,Ft,Qr,Yr,kt,en,tn,Fs,le,ze,Ta,xt,on,va,an,ks,z,It,sn,de,rn,qo,nn,ln,Mt,dn,cn,hn,ce,pn,zo,mn,fn,Ao,un,gn,_n,Ae,xs,he,Ne,ba,Et,Tn,wa,vn,Is,A,jt,bn,$a,wn,$n,Ct,yn,No,Dn,Fn,kn,se,Pt,xn,ya,In,Mn,Oe,Ms,pe,Le,Da,qt,En,Fa,jn,Es,Q,zt,Cn,At,Pn,Nt,qn,zn,An,S,Ot,Nn,me,On,Oo,Ln,Wn,ka,Sn,Vn,Bn,We,Hn,Se,js,fe,Ve,xa,Lt,Rn,Ia,Un,Cs,P,Wt,Jn,St,Gn,Vt,Kn,Xn,Zn,Be,Qn,Bt,Yn,Ht,ei,ti,oi,V,Rt,ai,ue,si,Lo,ri,ni,Ma,ii,li,di,He,ci,Re,Ps,ge,Ue,Ea,Ut,hi,ja,pi,qs,N,Jt,mi,Ca,fi,ui,Gt,gi,Kt,_i,Ti,vi,B,Xt,bi,_e,wi,Wo,$i,yi,Pa,Di,Fi,ki,Je,xi,Ge,zs,Te,Ke,qa,Zt,Ii,za,Mi,As,E,Qt,Ei,Aa,ji,Ci,Na,Pi,qi,Oa,zi,Ai,Yt,Ni,eo,Oi,Li,Wi,H,to,Si,ve,Vi,So,Bi,Hi,La,Ri,Ui,Ji,Xe,Gi,Ze,Ns,be,Qe,Wa,oo,Ki,Sa,Xi,Os,Y,ao,Zi,so,Qi,ro,Yi,el,tl,R,no,ol,we,al,Vo,sl,rl,Va,nl,il,ll,Ye,dl,et,Ls,$e,tt,Ba,io,cl,Ha,hl,Ws,ee,lo,pl,ye,ml,co,fl,ul,ho,gl,_l,Tl,U,po,vl,De,bl,Bo,wl,$l,Ra,yl,Dl,Fl,ot,kl,at,Ss,Fe,st,Ua,mo,xl,Ja,Il,Vs,O,fo,Ml,Ga,El,jl,uo,Cl,go,Pl,ql,zl,J,_o,Al,ke,Nl,Ho,Ol,Ll,Ka,Wl,Sl,Vl,rt,Bl,nt,Bs,xe,it,Xa,To,Hl,Za,Rl,Hs,j,vo,Ul,Qa,Jl,Gl,Ya,Kl,Xl,es,Zl,Ql,bo,Yl,wo,ed,td,od,G,$o,ad,Ie,sd,Ro,rd,nd,ts,id,ld,dd,lt,cd,dt,Rs;return a=new Z({}),Pe=new oe({props:{$$slots:{default:[Rc]},$$scope:{ctx:k}}}),$t=new Z({}),xt=new Z({}),It=new M({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/configuration_deit.py#L37"}}),Ae=new Ee({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[Uc]},$$scope:{ctx:k}}}),Et=new Z({}),jt=new M({props:{name:"class transformers.DeiTFeatureExtractor",anchor:"transformers.DeiTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DeiTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DeiTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.Resampling.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.Resampling.NEAREST</code>,
<code>PIL.Image.Resampling.BOX</code>, <code>PIL.Image.Resampling.BILINEAR</code>, <code>PIL.Image.Resampling.HAMMING</code>,
<code>PIL.Image.Resampling.BICUBIC</code> or <code>PIL.Image.Resampling.LANCZOS</code>. Only has an effect if <code>do_resize</code> is set
to <code>True</code>.`,name:"resample"},{anchor:"transformers.DeiTFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.DeiTFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.DeiTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.DeiTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DeiTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/feature_extraction_deit.py#L38"}}),Pt=new M({props:{name:"__call__",anchor:"transformers.DeiTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DeiTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/feature_extraction_deit.py#L94",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Oe=new oe({props:{warning:!0,$$slots:{default:[Jc]},$$scope:{ctx:k}}}),qt=new Z({}),zt=new M({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L455"}}),Ot=new M({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L480",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new oe({props:{$$slots:{default:[Gc]},$$scope:{ctx:k}}}),Se=new Ee({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[Kc]},$$scope:{ctx:k}}}),Lt=new Z({}),Wt=new M({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L567"}}),Be=new oe({props:{$$slots:{default:[Xc]},$$scope:{ctx:k}}}),Rt=new M({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L585",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new oe({props:{$$slots:{default:[Zc]},$$scope:{ctx:k}}}),Re=new Ee({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[Qc]},$$scope:{ctx:k}}}),Ut=new Z({}),Jt=new M({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L679"}}),Xt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L692",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new oe({props:{$$slots:{default:[Yc]},$$scope:{ctx:k}}}),Ge=new Ee({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[eh]},$$scope:{ctx:k}}}),Zt=new Z({}),Qt=new M({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L828"}}),to=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_deit.py#L846",returnDescription:`
<p>A <code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
`}}),Xe=new oe({props:{$$slots:{default:[th]},$$scope:{ctx:k}}}),Ze=new Ee({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[oh]},$$scope:{ctx:k}}}),oo=new Z({}),ao=new M({props:{name:"class transformers.TFDeiTModel",anchor:"transformers.TFDeiTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L641"}}),no=new M({props:{name:"call",anchor:"transformers.TFDeiTModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L651",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ye=new oe({props:{$$slots:{default:[ah]},$$scope:{ctx:k}}}),et=new Ee({props:{anchor:"transformers.TFDeiTModel.call.example",$$slots:{default:[sh]},$$scope:{ctx:k}}}),io=new Z({}),lo=new M({props:{name:"class transformers.TFDeiTForMaskedImageModeling",anchor:"transformers.TFDeiTForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L761"}}),po=new M({props:{name:"call",anchor:"transformers.TFDeiTForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of type bool and shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L768",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ot=new oe({props:{$$slots:{default:[rh]},$$scope:{ctx:k}}}),at=new Ee({props:{anchor:"transformers.TFDeiTForMaskedImageModeling.call.example",$$slots:{default:[nh]},$$scope:{ctx:k}}}),mo=new Z({}),fo=new M({props:{name:"class transformers.TFDeiTForImageClassification",anchor:"transformers.TFDeiTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L882"}}),_o=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L896",returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
`}}),rt=new oe({props:{$$slots:{default:[ih]},$$scope:{ctx:k}}}),nt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassification.call.example",$$slots:{default:[lh]},$$scope:{ctx:k}}}),To=new Z({}),vo=new M({props:{name:"class transformers.TFDeiTForImageClassificationWithTeacher",anchor:"transformers.TFDeiTForImageClassificationWithTeacher",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L990"}}),$o=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deit/modeling_tf_deit.py#L1009",returnDescription:`
<p>A <code>transformers.models.deit.modeling_tf_deit.TFDeiTForImageClassificationWithTeacherOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTConfig"
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
`}}),lt=new oe({props:{$$slots:{default:[dh]},$$scope:{ctx:k}}}),dt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.example",$$slots:{default:[ch]},$$scope:{ctx:k}}}),{c(){d=s("meta"),v=f(),p=s("h1"),h=s("a"),_=s("span"),b(a.$$.fragment),c=f(),x=s("span"),hr=i("DeiT"),_s=f(),b(Pe.$$.fragment),Ts=f(),ne=s("h2"),qe=s("a"),la=s("span"),b($t.$$.fragment),pr=f(),da=s("span"),mr=i("Overview"),vs=f(),W=s("p"),fr=i("The DeiT model was proposed in "),yt=s("a"),ur=i("Training data-efficient image transformers & distillation through attention"),gr=i(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),Fo=s("a"),_r=i("Vision Transformer (ViT)"),Tr=i(" introduced in "),Dt=s("a"),vr=i("Dosovitskiy et al., 2020"),br=i(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),bs=f(),ko=s("p"),wr=i("The abstract from the paper is the following:"),ws=f(),xo=s("p"),ca=s("em"),$r=i(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),$s=f(),Io=s("p"),yr=i("Tips:"),ys=f(),q=s("ul"),ha=s("li"),Dr=i(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),Fr=f(),ie=s("li"),kr=i(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Mo=s("a"),xr=i("DeiTForImageClassification"),Ir=i(` and (2) corresponds to
`),Eo=s("a"),Mr=i("DeiTForImageClassificationWithTeacher"),Er=i("."),jr=f(),pa=s("li"),Cr=i(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Pr=f(),ma=s("li"),qr=i(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),zr=f(),I=s("li"),Ar=i(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),jo=s("a"),Nr=i("ViTModel"),Or=i(" or "),Co=s("a"),Lr=i("ViTForImageClassification"),Wr=i(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),fa=s("em"),Sr=i("facebook/deit-tiny-patch16-224"),Vr=i(", "),ua=s("em"),Br=i("facebook/deit-small-patch16-224"),Hr=i(", "),ga=s("em"),Rr=i("facebook/deit-base-patch16-224"),Ur=i(` and
`),_a=s("em"),Jr=i("facebook/deit-base-patch16-384"),Gr=i(". Note that one should use "),Po=s("a"),Kr=i("DeiTFeatureExtractor"),Xr=i(` in order to
prepare images for the model.`),Ds=f(),ae=s("p"),Zr=i("This model was contributed by "),Ft=s("a"),Qr=i("nielsr"),Yr=i(". The TensorFlow version of this model was added by "),kt=s("a"),en=i("amyeroberts"),tn=i("."),Fs=f(),le=s("h2"),ze=s("a"),Ta=s("span"),b(xt.$$.fragment),on=f(),va=s("span"),an=i("DeiTConfig"),ks=f(),z=s("div"),b(It.$$.fragment),sn=f(),de=s("p"),rn=i("This is the configuration class to store the configuration of a "),qo=s("a"),nn=i("DeiTModel"),ln=i(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Mt=s("a"),dn=i("facebook/deit-base-distilled-patch16-224"),cn=i(`
architecture.`),hn=f(),ce=s("p"),pn=i("Configuration objects inherit from "),zo=s("a"),mn=i("PretrainedConfig"),fn=i(` and can be used to control the model outputs. Read the
documentation from `),Ao=s("a"),un=i("PretrainedConfig"),gn=i(" for more information."),_n=f(),b(Ae.$$.fragment),xs=f(),he=s("h2"),Ne=s("a"),ba=s("span"),b(Et.$$.fragment),Tn=f(),wa=s("span"),vn=i("DeiTFeatureExtractor"),Is=f(),A=s("div"),b(jt.$$.fragment),bn=f(),$a=s("p"),wn=i("Constructs a DeiT feature extractor."),$n=f(),Ct=s("p"),yn=i("This feature extractor inherits from "),No=s("a"),Dn=i("FeatureExtractionMixin"),Fn=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),kn=f(),se=s("div"),b(Pt.$$.fragment),xn=f(),ya=s("p"),In=i("Main method to prepare for the model one or several image(s)."),Mn=f(),b(Oe.$$.fragment),Ms=f(),pe=s("h2"),Le=s("a"),Da=s("span"),b(qt.$$.fragment),En=f(),Fa=s("span"),jn=i("DeiTModel"),Es=f(),Q=s("div"),b(zt.$$.fragment),Cn=f(),At=s("p"),Pn=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nt=s("a"),qn=i("torch.nn.Module"),zn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),An=f(),S=s("div"),b(Ot.$$.fragment),Nn=f(),me=s("p"),On=i("The "),Oo=s("a"),Ln=i("DeiTModel"),Wn=i(" forward method, overrides the "),ka=s("code"),Sn=i("__call__"),Vn=i(" special method."),Bn=f(),b(We.$$.fragment),Hn=f(),b(Se.$$.fragment),js=f(),fe=s("h2"),Ve=s("a"),xa=s("span"),b(Lt.$$.fragment),Rn=f(),Ia=s("span"),Un=i("DeiTForMaskedImageModeling"),Cs=f(),P=s("div"),b(Wt.$$.fragment),Jn=f(),St=s("p"),Gn=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Vt=s("a"),Kn=i("SimMIM"),Xn=i("."),Zn=f(),b(Be.$$.fragment),Qn=f(),Bt=s("p"),Yn=i("This model is a PyTorch "),Ht=s("a"),ei=i("torch.nn.Module"),ti=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oi=f(),V=s("div"),b(Rt.$$.fragment),ai=f(),ue=s("p"),si=i("The "),Lo=s("a"),ri=i("DeiTForMaskedImageModeling"),ni=i(" forward method, overrides the "),Ma=s("code"),ii=i("__call__"),li=i(" special method."),di=f(),b(He.$$.fragment),ci=f(),b(Re.$$.fragment),Ps=f(),ge=s("h2"),Ue=s("a"),Ea=s("span"),b(Ut.$$.fragment),hi=f(),ja=s("span"),pi=i("DeiTForImageClassification"),qs=f(),N=s("div"),b(Jt.$$.fragment),mi=f(),Ca=s("p"),fi=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ui=f(),Gt=s("p"),gi=i("This model is a PyTorch "),Kt=s("a"),_i=i("torch.nn.Module"),Ti=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vi=f(),B=s("div"),b(Xt.$$.fragment),bi=f(),_e=s("p"),wi=i("The "),Wo=s("a"),$i=i("DeiTForImageClassification"),yi=i(" forward method, overrides the "),Pa=s("code"),Di=i("__call__"),Fi=i(" special method."),ki=f(),b(Je.$$.fragment),xi=f(),b(Ge.$$.fragment),zs=f(),Te=s("h2"),Ke=s("a"),qa=s("span"),b(Zt.$$.fragment),Ii=f(),za=s("span"),Mi=i("DeiTForImageClassificationWithTeacher"),As=f(),E=s("div"),b(Qt.$$.fragment),Ei=f(),Aa=s("p"),ji=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Ci=f(),Na=s("p"),Pi=i(".. warning::"),qi=f(),Oa=s("p"),zi=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ai=f(),Yt=s("p"),Ni=i("This model is a PyTorch "),eo=s("a"),Oi=i("torch.nn.Module"),Li=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi=f(),H=s("div"),b(to.$$.fragment),Si=f(),ve=s("p"),Vi=i("The "),So=s("a"),Bi=i("DeiTForImageClassificationWithTeacher"),Hi=i(" forward method, overrides the "),La=s("code"),Ri=i("__call__"),Ui=i(" special method."),Ji=f(),b(Xe.$$.fragment),Gi=f(),b(Ze.$$.fragment),Ns=f(),be=s("h2"),Qe=s("a"),Wa=s("span"),b(oo.$$.fragment),Ki=f(),Sa=s("span"),Xi=i("TFDeiTModel"),Os=f(),Y=s("div"),b(ao.$$.fragment),Zi=f(),so=s("p"),Qi=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),ro=s("a"),Yi=i("tf.keras.layers.Layer"),el=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),tl=f(),R=s("div"),b(no.$$.fragment),ol=f(),we=s("p"),al=i("The "),Vo=s("a"),sl=i("TFDeiTModel"),rl=i(" forward method, overrides the "),Va=s("code"),nl=i("__call__"),il=i(" special method."),ll=f(),b(Ye.$$.fragment),dl=f(),b(et.$$.fragment),Ls=f(),$e=s("h2"),tt=s("a"),Ba=s("span"),b(io.$$.fragment),cl=f(),Ha=s("span"),hl=i("TFDeiTForMaskedImageModeling"),Ws=f(),ee=s("div"),b(lo.$$.fragment),pl=f(),ye=s("p"),ml=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=s("a"),fl=i("SimMIM"),ul=i(`.
This model is a TensorFlow
`),ho=s("a"),gl=i("tf.keras.layers.Layer"),_l=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Tl=f(),U=s("div"),b(po.$$.fragment),vl=f(),De=s("p"),bl=i("The "),Bo=s("a"),wl=i("TFDeiTForMaskedImageModeling"),$l=i(" forward method, overrides the "),Ra=s("code"),yl=i("__call__"),Dl=i(" special method."),Fl=f(),b(ot.$$.fragment),kl=f(),b(at.$$.fragment),Ss=f(),Fe=s("h2"),st=s("a"),Ua=s("span"),b(mo.$$.fragment),xl=f(),Ja=s("span"),Il=i("TFDeiTForImageClassification"),Vs=f(),O=s("div"),b(fo.$$.fragment),Ml=f(),Ga=s("p"),El=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),jl=f(),uo=s("p"),Cl=i(`This model is a TensorFlow
`),go=s("a"),Pl=i("tf.keras.layers.Layer"),ql=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),zl=f(),J=s("div"),b(_o.$$.fragment),Al=f(),ke=s("p"),Nl=i("The "),Ho=s("a"),Ol=i("TFDeiTForImageClassification"),Ll=i(" forward method, overrides the "),Ka=s("code"),Wl=i("__call__"),Sl=i(" special method."),Vl=f(),b(rt.$$.fragment),Bl=f(),b(nt.$$.fragment),Bs=f(),xe=s("h2"),it=s("a"),Xa=s("span"),b(To.$$.fragment),Hl=f(),Za=s("span"),Rl=i("TFDeiTForImageClassificationWithTeacher"),Hs=f(),j=s("div"),b(vo.$$.fragment),Ul=f(),Qa=s("p"),Jl=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Gl=f(),Ya=s("p"),Kl=i(".. warning::"),Xl=f(),es=s("p"),Zl=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ql=f(),bo=s("p"),Yl=i(`This model is a TensorFlow
`),wo=s("a"),ed=i("tf.keras.layers.Layer"),td=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),od=f(),G=s("div"),b($o.$$.fragment),ad=f(),Ie=s("p"),sd=i("The "),Ro=s("a"),rd=i("TFDeiTForImageClassificationWithTeacher"),nd=i(" forward method, overrides the "),ts=s("code"),id=i("__call__"),ld=i(" special method."),dd=f(),b(lt.$$.fragment),cd=f(),b(dt.$$.fragment),this.h()},l(t){const g=Bc('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),v=u(t),p=r(t,"H1",{class:!0});var yo=n(p);h=r(yo,"A",{id:!0,class:!0,href:!0});var os=n(h);_=r(os,"SPAN",{});var as=n(_);w(a.$$.fragment,as),as.forEach(o),os.forEach(o),c=u(yo),x=r(yo,"SPAN",{});var ss=n(x);hr=l(ss,"DeiT"),ss.forEach(o),yo.forEach(o),_s=u(t),w(Pe.$$.fragment,t),Ts=u(t),ne=r(t,"H2",{class:!0});var Do=n(ne);qe=r(Do,"A",{id:!0,class:!0,href:!0});var rs=n(qe);la=r(rs,"SPAN",{});var ns=n(la);w($t.$$.fragment,ns),ns.forEach(o),rs.forEach(o),pr=u(Do),da=r(Do,"SPAN",{});var is=n(da);mr=l(is,"Overview"),is.forEach(o),Do.forEach(o),vs=u(t),W=r(t,"P",{});var te=n(W);fr=l(te,"The DeiT model was proposed in "),yt=r(te,"A",{href:!0,rel:!0});var ls=n(yt);ur=l(ls,"Training data-efficient image transformers & distillation through attention"),ls.forEach(o),gr=l(te,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),Fo=r(te,"A",{href:!0});var ds=n(Fo);_r=l(ds,"Vision Transformer (ViT)"),ds.forEach(o),Tr=l(te," introduced in "),Dt=r(te,"A",{href:!0,rel:!0});var cs=n(Dt);vr=l(cs,"Dosovitskiy et al., 2020"),cs.forEach(o),br=l(te,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),te.forEach(o),bs=u(t),ko=r(t,"P",{});var hs=n(ko);wr=l(hs,"The abstract from the paper is the following:"),hs.forEach(o),ws=u(t),xo=r(t,"P",{});var ps=n(xo);ca=r(ps,"EM",{});var ms=n(ca);$r=l(ms,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ms.forEach(o),ps.forEach(o),$s=u(t),Io=r(t,"P",{});var fs=n(Io);yr=l(fs,"Tips:"),fs.forEach(o),ys=u(t),q=r(t,"UL",{});var L=n(q);ha=r(L,"LI",{});var us=n(ha);Dr=l(us,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),us.forEach(o),Fr=u(L),ie=r(L,"LI",{});var Me=n(ie);kr=l(Me,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Mo=r(Me,"A",{href:!0});var gs=n(Mo);xr=l(gs,"DeiTForImageClassification"),gs.forEach(o),Ir=l(Me,` and (2) corresponds to
`),Eo=r(Me,"A",{href:!0});var hd=n(Eo);Mr=l(hd,"DeiTForImageClassificationWithTeacher"),hd.forEach(o),Er=l(Me,"."),Me.forEach(o),jr=u(L),pa=r(L,"LI",{});var pd=n(pa);Cr=l(pd,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),pd.forEach(o),Pr=u(L),ma=r(L,"LI",{});var md=n(ma);qr=l(md,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),md.forEach(o),zr=u(L),I=r(L,"LI",{});var C=n(I);Ar=l(C,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),jo=r(C,"A",{href:!0});var fd=n(jo);Nr=l(fd,"ViTModel"),fd.forEach(o),Or=l(C," or "),Co=r(C,"A",{href:!0});var ud=n(Co);Lr=l(ud,"ViTForImageClassification"),ud.forEach(o),Wr=l(C,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),fa=r(C,"EM",{});var gd=n(fa);Sr=l(gd,"facebook/deit-tiny-patch16-224"),gd.forEach(o),Vr=l(C,", "),ua=r(C,"EM",{});var _d=n(ua);Br=l(_d,"facebook/deit-small-patch16-224"),_d.forEach(o),Hr=l(C,", "),ga=r(C,"EM",{});var Td=n(ga);Rr=l(Td,"facebook/deit-base-patch16-224"),Td.forEach(o),Ur=l(C,` and
`),_a=r(C,"EM",{});var vd=n(_a);Jr=l(vd,"facebook/deit-base-patch16-384"),vd.forEach(o),Gr=l(C,". Note that one should use "),Po=r(C,"A",{href:!0});var bd=n(Po);Kr=l(bd,"DeiTFeatureExtractor"),bd.forEach(o),Xr=l(C,` in order to
prepare images for the model.`),C.forEach(o),L.forEach(o),Ds=u(t),ae=r(t,"P",{});var Uo=n(ae);Zr=l(Uo,"This model was contributed by "),Ft=r(Uo,"A",{href:!0,rel:!0});var wd=n(Ft);Qr=l(wd,"nielsr"),wd.forEach(o),Yr=l(Uo,". The TensorFlow version of this model was added by "),kt=r(Uo,"A",{href:!0,rel:!0});var $d=n(kt);en=l($d,"amyeroberts"),$d.forEach(o),tn=l(Uo,"."),Uo.forEach(o),Fs=u(t),le=r(t,"H2",{class:!0});var Us=n(le);ze=r(Us,"A",{id:!0,class:!0,href:!0});var yd=n(ze);Ta=r(yd,"SPAN",{});var Dd=n(Ta);w(xt.$$.fragment,Dd),Dd.forEach(o),yd.forEach(o),on=u(Us),va=r(Us,"SPAN",{});var Fd=n(va);an=l(Fd,"DeiTConfig"),Fd.forEach(o),Us.forEach(o),ks=u(t),z=r(t,"DIV",{class:!0});var ct=n(z);w(It.$$.fragment,ct),sn=u(ct),de=r(ct,"P",{});var Jo=n(de);rn=l(Jo,"This is the configuration class to store the configuration of a "),qo=r(Jo,"A",{href:!0});var kd=n(qo);nn=l(kd,"DeiTModel"),kd.forEach(o),ln=l(Jo,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Mt=r(Jo,"A",{href:!0,rel:!0});var xd=n(Mt);dn=l(xd,"facebook/deit-base-distilled-patch16-224"),xd.forEach(o),cn=l(Jo,`
architecture.`),Jo.forEach(o),hn=u(ct),ce=r(ct,"P",{});var Go=n(ce);pn=l(Go,"Configuration objects inherit from "),zo=r(Go,"A",{href:!0});var Id=n(zo);mn=l(Id,"PretrainedConfig"),Id.forEach(o),fn=l(Go,` and can be used to control the model outputs. Read the
documentation from `),Ao=r(Go,"A",{href:!0});var Md=n(Ao);un=l(Md,"PretrainedConfig"),Md.forEach(o),gn=l(Go," for more information."),Go.forEach(o),_n=u(ct),w(Ae.$$.fragment,ct),ct.forEach(o),xs=u(t),he=r(t,"H2",{class:!0});var Js=n(he);Ne=r(Js,"A",{id:!0,class:!0,href:!0});var Ed=n(Ne);ba=r(Ed,"SPAN",{});var jd=n(ba);w(Et.$$.fragment,jd),jd.forEach(o),Ed.forEach(o),Tn=u(Js),wa=r(Js,"SPAN",{});var Cd=n(wa);vn=l(Cd,"DeiTFeatureExtractor"),Cd.forEach(o),Js.forEach(o),Is=u(t),A=r(t,"DIV",{class:!0});var ht=n(A);w(jt.$$.fragment,ht),bn=u(ht),$a=r(ht,"P",{});var Pd=n($a);wn=l(Pd,"Constructs a DeiT feature extractor."),Pd.forEach(o),$n=u(ht),Ct=r(ht,"P",{});var Gs=n(Ct);yn=l(Gs,"This feature extractor inherits from "),No=r(Gs,"A",{href:!0});var qd=n(No);Dn=l(qd,"FeatureExtractionMixin"),qd.forEach(o),Fn=l(Gs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Gs.forEach(o),kn=u(ht),se=r(ht,"DIV",{class:!0});var Ko=n(se);w(Pt.$$.fragment,Ko),xn=u(Ko),ya=r(Ko,"P",{});var zd=n(ya);In=l(zd,"Main method to prepare for the model one or several image(s)."),zd.forEach(o),Mn=u(Ko),w(Oe.$$.fragment,Ko),Ko.forEach(o),ht.forEach(o),Ms=u(t),pe=r(t,"H2",{class:!0});var Ks=n(pe);Le=r(Ks,"A",{id:!0,class:!0,href:!0});var Ad=n(Le);Da=r(Ad,"SPAN",{});var Nd=n(Da);w(qt.$$.fragment,Nd),Nd.forEach(o),Ad.forEach(o),En=u(Ks),Fa=r(Ks,"SPAN",{});var Od=n(Fa);jn=l(Od,"DeiTModel"),Od.forEach(o),Ks.forEach(o),Es=u(t),Q=r(t,"DIV",{class:!0});var Xo=n(Q);w(zt.$$.fragment,Xo),Cn=u(Xo),At=r(Xo,"P",{});var Xs=n(At);Pn=l(Xs,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nt=r(Xs,"A",{href:!0,rel:!0});var Ld=n(Nt);qn=l(Ld,"torch.nn.Module"),Ld.forEach(o),zn=l(Xs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xs.forEach(o),An=u(Xo),S=r(Xo,"DIV",{class:!0});var pt=n(S);w(Ot.$$.fragment,pt),Nn=u(pt),me=r(pt,"P",{});var Zo=n(me);On=l(Zo,"The "),Oo=r(Zo,"A",{href:!0});var Wd=n(Oo);Ln=l(Wd,"DeiTModel"),Wd.forEach(o),Wn=l(Zo," forward method, overrides the "),ka=r(Zo,"CODE",{});var Sd=n(ka);Sn=l(Sd,"__call__"),Sd.forEach(o),Vn=l(Zo," special method."),Zo.forEach(o),Bn=u(pt),w(We.$$.fragment,pt),Hn=u(pt),w(Se.$$.fragment,pt),pt.forEach(o),Xo.forEach(o),js=u(t),fe=r(t,"H2",{class:!0});var Zs=n(fe);Ve=r(Zs,"A",{id:!0,class:!0,href:!0});var Vd=n(Ve);xa=r(Vd,"SPAN",{});var Bd=n(xa);w(Lt.$$.fragment,Bd),Bd.forEach(o),Vd.forEach(o),Rn=u(Zs),Ia=r(Zs,"SPAN",{});var Hd=n(Ia);Un=l(Hd,"DeiTForMaskedImageModeling"),Hd.forEach(o),Zs.forEach(o),Cs=u(t),P=r(t,"DIV",{class:!0});var re=n(P);w(Wt.$$.fragment,re),Jn=u(re),St=r(re,"P",{});var Qs=n(St);Gn=l(Qs,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Vt=r(Qs,"A",{href:!0,rel:!0});var Rd=n(Vt);Kn=l(Rd,"SimMIM"),Rd.forEach(o),Xn=l(Qs,"."),Qs.forEach(o),Zn=u(re),w(Be.$$.fragment,re),Qn=u(re),Bt=r(re,"P",{});var Ys=n(Bt);Yn=l(Ys,"This model is a PyTorch "),Ht=r(Ys,"A",{href:!0,rel:!0});var Ud=n(Ht);ei=l(Ud,"torch.nn.Module"),Ud.forEach(o),ti=l(Ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys.forEach(o),oi=u(re),V=r(re,"DIV",{class:!0});var mt=n(V);w(Rt.$$.fragment,mt),ai=u(mt),ue=r(mt,"P",{});var Qo=n(ue);si=l(Qo,"The "),Lo=r(Qo,"A",{href:!0});var Jd=n(Lo);ri=l(Jd,"DeiTForMaskedImageModeling"),Jd.forEach(o),ni=l(Qo," forward method, overrides the "),Ma=r(Qo,"CODE",{});var Gd=n(Ma);ii=l(Gd,"__call__"),Gd.forEach(o),li=l(Qo," special method."),Qo.forEach(o),di=u(mt),w(He.$$.fragment,mt),ci=u(mt),w(Re.$$.fragment,mt),mt.forEach(o),re.forEach(o),Ps=u(t),ge=r(t,"H2",{class:!0});var er=n(ge);Ue=r(er,"A",{id:!0,class:!0,href:!0});var Kd=n(Ue);Ea=r(Kd,"SPAN",{});var Xd=n(Ea);w(Ut.$$.fragment,Xd),Xd.forEach(o),Kd.forEach(o),hi=u(er),ja=r(er,"SPAN",{});var Zd=n(ja);pi=l(Zd,"DeiTForImageClassification"),Zd.forEach(o),er.forEach(o),qs=u(t),N=r(t,"DIV",{class:!0});var ft=n(N);w(Jt.$$.fragment,ft),mi=u(ft),Ca=r(ft,"P",{});var Qd=n(Ca);fi=l(Qd,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qd.forEach(o),ui=u(ft),Gt=r(ft,"P",{});var tr=n(Gt);gi=l(tr,"This model is a PyTorch "),Kt=r(tr,"A",{href:!0,rel:!0});var Yd=n(Kt);_i=l(Yd,"torch.nn.Module"),Yd.forEach(o),Ti=l(tr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tr.forEach(o),vi=u(ft),B=r(ft,"DIV",{class:!0});var ut=n(B);w(Xt.$$.fragment,ut),bi=u(ut),_e=r(ut,"P",{});var Yo=n(_e);wi=l(Yo,"The "),Wo=r(Yo,"A",{href:!0});var ec=n(Wo);$i=l(ec,"DeiTForImageClassification"),ec.forEach(o),yi=l(Yo," forward method, overrides the "),Pa=r(Yo,"CODE",{});var tc=n(Pa);Di=l(tc,"__call__"),tc.forEach(o),Fi=l(Yo," special method."),Yo.forEach(o),ki=u(ut),w(Je.$$.fragment,ut),xi=u(ut),w(Ge.$$.fragment,ut),ut.forEach(o),ft.forEach(o),zs=u(t),Te=r(t,"H2",{class:!0});var or=n(Te);Ke=r(or,"A",{id:!0,class:!0,href:!0});var oc=n(Ke);qa=r(oc,"SPAN",{});var ac=n(qa);w(Zt.$$.fragment,ac),ac.forEach(o),oc.forEach(o),Ii=u(or),za=r(or,"SPAN",{});var sc=n(za);Mi=l(sc,"DeiTForImageClassificationWithTeacher"),sc.forEach(o),or.forEach(o),As=u(t),E=r(t,"DIV",{class:!0});var K=n(E);w(Qt.$$.fragment,K),Ei=u(K),Aa=r(K,"P",{});var rc=n(Aa);ji=l(rc,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),rc.forEach(o),Ci=u(K),Na=r(K,"P",{});var nc=n(Na);Pi=l(nc,".. warning::"),nc.forEach(o),qi=u(K),Oa=r(K,"P",{});var ic=n(Oa);zi=l(ic,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),ic.forEach(o),Ai=u(K),Yt=r(K,"P",{});var ar=n(Yt);Ni=l(ar,"This model is a PyTorch "),eo=r(ar,"A",{href:!0,rel:!0});var lc=n(eo);Oi=l(lc,"torch.nn.Module"),lc.forEach(o),Li=l(ar,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ar.forEach(o),Wi=u(K),H=r(K,"DIV",{class:!0});var gt=n(H);w(to.$$.fragment,gt),Si=u(gt),ve=r(gt,"P",{});var ea=n(ve);Vi=l(ea,"The "),So=r(ea,"A",{href:!0});var dc=n(So);Bi=l(dc,"DeiTForImageClassificationWithTeacher"),dc.forEach(o),Hi=l(ea," forward method, overrides the "),La=r(ea,"CODE",{});var cc=n(La);Ri=l(cc,"__call__"),cc.forEach(o),Ui=l(ea," special method."),ea.forEach(o),Ji=u(gt),w(Xe.$$.fragment,gt),Gi=u(gt),w(Ze.$$.fragment,gt),gt.forEach(o),K.forEach(o),Ns=u(t),be=r(t,"H2",{class:!0});var sr=n(be);Qe=r(sr,"A",{id:!0,class:!0,href:!0});var hc=n(Qe);Wa=r(hc,"SPAN",{});var pc=n(Wa);w(oo.$$.fragment,pc),pc.forEach(o),hc.forEach(o),Ki=u(sr),Sa=r(sr,"SPAN",{});var mc=n(Sa);Xi=l(mc,"TFDeiTModel"),mc.forEach(o),sr.forEach(o),Os=u(t),Y=r(t,"DIV",{class:!0});var ta=n(Y);w(ao.$$.fragment,ta),Zi=u(ta),so=r(ta,"P",{});var rr=n(so);Qi=l(rr,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),ro=r(rr,"A",{href:!0,rel:!0});var fc=n(ro);Yi=l(fc,"tf.keras.layers.Layer"),fc.forEach(o),el=l(rr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),rr.forEach(o),tl=u(ta),R=r(ta,"DIV",{class:!0});var _t=n(R);w(no.$$.fragment,_t),ol=u(_t),we=r(_t,"P",{});var oa=n(we);al=l(oa,"The "),Vo=r(oa,"A",{href:!0});var uc=n(Vo);sl=l(uc,"TFDeiTModel"),uc.forEach(o),rl=l(oa," forward method, overrides the "),Va=r(oa,"CODE",{});var gc=n(Va);nl=l(gc,"__call__"),gc.forEach(o),il=l(oa," special method."),oa.forEach(o),ll=u(_t),w(Ye.$$.fragment,_t),dl=u(_t),w(et.$$.fragment,_t),_t.forEach(o),ta.forEach(o),Ls=u(t),$e=r(t,"H2",{class:!0});var nr=n($e);tt=r(nr,"A",{id:!0,class:!0,href:!0});var _c=n(tt);Ba=r(_c,"SPAN",{});var Tc=n(Ba);w(io.$$.fragment,Tc),Tc.forEach(o),_c.forEach(o),cl=u(nr),Ha=r(nr,"SPAN",{});var vc=n(Ha);hl=l(vc,"TFDeiTForMaskedImageModeling"),vc.forEach(o),nr.forEach(o),Ws=u(t),ee=r(t,"DIV",{class:!0});var aa=n(ee);w(lo.$$.fragment,aa),pl=u(aa),ye=r(aa,"P",{});var sa=n(ye);ml=l(sa,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=r(sa,"A",{href:!0,rel:!0});var bc=n(co);fl=l(bc,"SimMIM"),bc.forEach(o),ul=l(sa,`.
This model is a TensorFlow
`),ho=r(sa,"A",{href:!0,rel:!0});var wc=n(ho);gl=l(wc,"tf.keras.layers.Layer"),wc.forEach(o),_l=l(sa,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),sa.forEach(o),Tl=u(aa),U=r(aa,"DIV",{class:!0});var Tt=n(U);w(po.$$.fragment,Tt),vl=u(Tt),De=r(Tt,"P",{});var ra=n(De);bl=l(ra,"The "),Bo=r(ra,"A",{href:!0});var $c=n(Bo);wl=l($c,"TFDeiTForMaskedImageModeling"),$c.forEach(o),$l=l(ra," forward method, overrides the "),Ra=r(ra,"CODE",{});var yc=n(Ra);yl=l(yc,"__call__"),yc.forEach(o),Dl=l(ra," special method."),ra.forEach(o),Fl=u(Tt),w(ot.$$.fragment,Tt),kl=u(Tt),w(at.$$.fragment,Tt),Tt.forEach(o),aa.forEach(o),Ss=u(t),Fe=r(t,"H2",{class:!0});var ir=n(Fe);st=r(ir,"A",{id:!0,class:!0,href:!0});var Dc=n(st);Ua=r(Dc,"SPAN",{});var Fc=n(Ua);w(mo.$$.fragment,Fc),Fc.forEach(o),Dc.forEach(o),xl=u(ir),Ja=r(ir,"SPAN",{});var kc=n(Ja);Il=l(kc,"TFDeiTForImageClassification"),kc.forEach(o),ir.forEach(o),Vs=u(t),O=r(t,"DIV",{class:!0});var vt=n(O);w(fo.$$.fragment,vt),Ml=u(vt),Ga=r(vt,"P",{});var xc=n(Ga);El=l(xc,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),xc.forEach(o),jl=u(vt),uo=r(vt,"P",{});var lr=n(uo);Cl=l(lr,`This model is a TensorFlow
`),go=r(lr,"A",{href:!0,rel:!0});var Ic=n(go);Pl=l(Ic,"tf.keras.layers.Layer"),Ic.forEach(o),ql=l(lr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),lr.forEach(o),zl=u(vt),J=r(vt,"DIV",{class:!0});var bt=n(J);w(_o.$$.fragment,bt),Al=u(bt),ke=r(bt,"P",{});var na=n(ke);Nl=l(na,"The "),Ho=r(na,"A",{href:!0});var Mc=n(Ho);Ol=l(Mc,"TFDeiTForImageClassification"),Mc.forEach(o),Ll=l(na," forward method, overrides the "),Ka=r(na,"CODE",{});var Ec=n(Ka);Wl=l(Ec,"__call__"),Ec.forEach(o),Sl=l(na," special method."),na.forEach(o),Vl=u(bt),w(rt.$$.fragment,bt),Bl=u(bt),w(nt.$$.fragment,bt),bt.forEach(o),vt.forEach(o),Bs=u(t),xe=r(t,"H2",{class:!0});var dr=n(xe);it=r(dr,"A",{id:!0,class:!0,href:!0});var jc=n(it);Xa=r(jc,"SPAN",{});var Cc=n(Xa);w(To.$$.fragment,Cc),Cc.forEach(o),jc.forEach(o),Hl=u(dr),Za=r(dr,"SPAN",{});var Pc=n(Za);Rl=l(Pc,"TFDeiTForImageClassificationWithTeacher"),Pc.forEach(o),dr.forEach(o),Hs=u(t),j=r(t,"DIV",{class:!0});var X=n(j);w(vo.$$.fragment,X),Ul=u(X),Qa=r(X,"P",{});var qc=n(Qa);Jl=l(qc,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),qc.forEach(o),Gl=u(X),Ya=r(X,"P",{});var zc=n(Ya);Kl=l(zc,".. warning::"),zc.forEach(o),Xl=u(X),es=r(X,"P",{});var Ac=n(es);Zl=l(Ac,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ac.forEach(o),Ql=u(X),bo=r(X,"P",{});var cr=n(bo);Yl=l(cr,`This model is a TensorFlow
`),wo=r(cr,"A",{href:!0,rel:!0});var Nc=n(wo);ed=l(Nc,"tf.keras.layers.Layer"),Nc.forEach(o),td=l(cr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),cr.forEach(o),od=u(X),G=r(X,"DIV",{class:!0});var wt=n(G);w($o.$$.fragment,wt),ad=u(wt),Ie=r(wt,"P",{});var ia=n(Ie);sd=l(ia,"The "),Ro=r(ia,"A",{href:!0});var Oc=n(Ro);rd=l(Oc,"TFDeiTForImageClassificationWithTeacher"),Oc.forEach(o),nd=l(ia," forward method, overrides the "),ts=r(ia,"CODE",{});var Lc=n(ts);id=l(Lc,"__call__"),Lc.forEach(o),ld=l(ia," special method."),ia.forEach(o),dd=u(wt),w(lt.$$.fragment,wt),cd=u(wt),w(dt.$$.fragment,wt),wt.forEach(o),X.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(ph)),m(h,"id","deit"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#deit"),m(p,"class","relative group"),m(qe,"id","overview"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#overview"),m(ne,"class","relative group"),m(yt,"href","https://arxiv.org/abs/2012.12877"),m(yt,"rel","nofollow"),m(Fo,"href","vit"),m(Dt,"href","https://arxiv.org/abs/2010.11929"),m(Dt,"rel","nofollow"),m(Mo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTForImageClassification"),m(Eo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(jo,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTModel"),m(Co,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTForImageClassification"),m(Po,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor"),m(Ft,"href","https://huggingface.co/nielsr"),m(Ft,"rel","nofollow"),m(kt,"href","https://huggingface.co/amyeroberts"),m(kt,"rel","nofollow"),m(ze,"id","transformers.DeiTConfig"),m(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ze,"href","#transformers.DeiTConfig"),m(le,"class","relative group"),m(qo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTModel"),m(Mt,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),m(Mt,"rel","nofollow"),m(zo,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(Ao,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"id","transformers.DeiTFeatureExtractor"),m(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ne,"href","#transformers.DeiTFeatureExtractor"),m(he,"class","relative group"),m(No,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),m(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"id","transformers.DeiTModel"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.DeiTModel"),m(pe,"class","relative group"),m(Nt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Nt,"rel","nofollow"),m(Oo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTModel"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"id","transformers.DeiTForMaskedImageModeling"),m(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ve,"href","#transformers.DeiTForMaskedImageModeling"),m(fe,"class","relative group"),m(Vt,"href","https://arxiv.org/abs/2111.09886"),m(Vt,"rel","nofollow"),m(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ht,"rel","nofollow"),m(Lo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"id","transformers.DeiTForImageClassification"),m(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ue,"href","#transformers.DeiTForImageClassification"),m(ge,"class","relative group"),m(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Kt,"rel","nofollow"),m(Wo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTForImageClassification"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ke,"id","transformers.DeiTForImageClassificationWithTeacher"),m(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ke,"href","#transformers.DeiTForImageClassificationWithTeacher"),m(Te,"class","relative group"),m(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(eo,"rel","nofollow"),m(So,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"id","transformers.TFDeiTModel"),m(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qe,"href","#transformers.TFDeiTModel"),m(be,"class","relative group"),m(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ro,"rel","nofollow"),m(Vo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.TFDeiTModel"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"id","transformers.TFDeiTForMaskedImageModeling"),m(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(tt,"href","#transformers.TFDeiTForMaskedImageModeling"),m($e,"class","relative group"),m(co,"href","https://arxiv.org/abs/2111.09886"),m(co,"rel","nofollow"),m(ho,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ho,"rel","nofollow"),m(Bo,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.TFDeiTForMaskedImageModeling"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(st,"id","transformers.TFDeiTForImageClassification"),m(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(st,"href","#transformers.TFDeiTForImageClassification"),m(Fe,"class","relative group"),m(go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(go,"rel","nofollow"),m(Ho,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.TFDeiTForImageClassification"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(it,"id","transformers.TFDeiTForImageClassificationWithTeacher"),m(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(it,"href","#transformers.TFDeiTForImageClassificationWithTeacher"),m(xe,"class","relative group"),m(wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(wo,"rel","nofollow"),m(Ro,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.TFDeiTForImageClassificationWithTeacher"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),T(t,v,g),T(t,p,g),e(p,h),e(h,_),$(a,_,null),e(p,c),e(p,x),e(x,hr),T(t,_s,g),$(Pe,t,g),T(t,Ts,g),T(t,ne,g),e(ne,qe),e(qe,la),$($t,la,null),e(ne,pr),e(ne,da),e(da,mr),T(t,vs,g),T(t,W,g),e(W,fr),e(W,yt),e(yt,ur),e(W,gr),e(W,Fo),e(Fo,_r),e(W,Tr),e(W,Dt),e(Dt,vr),e(W,br),T(t,bs,g),T(t,ko,g),e(ko,wr),T(t,ws,g),T(t,xo,g),e(xo,ca),e(ca,$r),T(t,$s,g),T(t,Io,g),e(Io,yr),T(t,ys,g),T(t,q,g),e(q,ha),e(ha,Dr),e(q,Fr),e(q,ie),e(ie,kr),e(ie,Mo),e(Mo,xr),e(ie,Ir),e(ie,Eo),e(Eo,Mr),e(ie,Er),e(q,jr),e(q,pa),e(pa,Cr),e(q,Pr),e(q,ma),e(ma,qr),e(q,zr),e(q,I),e(I,Ar),e(I,jo),e(jo,Nr),e(I,Or),e(I,Co),e(Co,Lr),e(I,Wr),e(I,fa),e(fa,Sr),e(I,Vr),e(I,ua),e(ua,Br),e(I,Hr),e(I,ga),e(ga,Rr),e(I,Ur),e(I,_a),e(_a,Jr),e(I,Gr),e(I,Po),e(Po,Kr),e(I,Xr),T(t,Ds,g),T(t,ae,g),e(ae,Zr),e(ae,Ft),e(Ft,Qr),e(ae,Yr),e(ae,kt),e(kt,en),e(ae,tn),T(t,Fs,g),T(t,le,g),e(le,ze),e(ze,Ta),$(xt,Ta,null),e(le,on),e(le,va),e(va,an),T(t,ks,g),T(t,z,g),$(It,z,null),e(z,sn),e(z,de),e(de,rn),e(de,qo),e(qo,nn),e(de,ln),e(de,Mt),e(Mt,dn),e(de,cn),e(z,hn),e(z,ce),e(ce,pn),e(ce,zo),e(zo,mn),e(ce,fn),e(ce,Ao),e(Ao,un),e(ce,gn),e(z,_n),$(Ae,z,null),T(t,xs,g),T(t,he,g),e(he,Ne),e(Ne,ba),$(Et,ba,null),e(he,Tn),e(he,wa),e(wa,vn),T(t,Is,g),T(t,A,g),$(jt,A,null),e(A,bn),e(A,$a),e($a,wn),e(A,$n),e(A,Ct),e(Ct,yn),e(Ct,No),e(No,Dn),e(Ct,Fn),e(A,kn),e(A,se),$(Pt,se,null),e(se,xn),e(se,ya),e(ya,In),e(se,Mn),$(Oe,se,null),T(t,Ms,g),T(t,pe,g),e(pe,Le),e(Le,Da),$(qt,Da,null),e(pe,En),e(pe,Fa),e(Fa,jn),T(t,Es,g),T(t,Q,g),$(zt,Q,null),e(Q,Cn),e(Q,At),e(At,Pn),e(At,Nt),e(Nt,qn),e(At,zn),e(Q,An),e(Q,S),$(Ot,S,null),e(S,Nn),e(S,me),e(me,On),e(me,Oo),e(Oo,Ln),e(me,Wn),e(me,ka),e(ka,Sn),e(me,Vn),e(S,Bn),$(We,S,null),e(S,Hn),$(Se,S,null),T(t,js,g),T(t,fe,g),e(fe,Ve),e(Ve,xa),$(Lt,xa,null),e(fe,Rn),e(fe,Ia),e(Ia,Un),T(t,Cs,g),T(t,P,g),$(Wt,P,null),e(P,Jn),e(P,St),e(St,Gn),e(St,Vt),e(Vt,Kn),e(St,Xn),e(P,Zn),$(Be,P,null),e(P,Qn),e(P,Bt),e(Bt,Yn),e(Bt,Ht),e(Ht,ei),e(Bt,ti),e(P,oi),e(P,V),$(Rt,V,null),e(V,ai),e(V,ue),e(ue,si),e(ue,Lo),e(Lo,ri),e(ue,ni),e(ue,Ma),e(Ma,ii),e(ue,li),e(V,di),$(He,V,null),e(V,ci),$(Re,V,null),T(t,Ps,g),T(t,ge,g),e(ge,Ue),e(Ue,Ea),$(Ut,Ea,null),e(ge,hi),e(ge,ja),e(ja,pi),T(t,qs,g),T(t,N,g),$(Jt,N,null),e(N,mi),e(N,Ca),e(Ca,fi),e(N,ui),e(N,Gt),e(Gt,gi),e(Gt,Kt),e(Kt,_i),e(Gt,Ti),e(N,vi),e(N,B),$(Xt,B,null),e(B,bi),e(B,_e),e(_e,wi),e(_e,Wo),e(Wo,$i),e(_e,yi),e(_e,Pa),e(Pa,Di),e(_e,Fi),e(B,ki),$(Je,B,null),e(B,xi),$(Ge,B,null),T(t,zs,g),T(t,Te,g),e(Te,Ke),e(Ke,qa),$(Zt,qa,null),e(Te,Ii),e(Te,za),e(za,Mi),T(t,As,g),T(t,E,g),$(Qt,E,null),e(E,Ei),e(E,Aa),e(Aa,ji),e(E,Ci),e(E,Na),e(Na,Pi),e(E,qi),e(E,Oa),e(Oa,zi),e(E,Ai),e(E,Yt),e(Yt,Ni),e(Yt,eo),e(eo,Oi),e(Yt,Li),e(E,Wi),e(E,H),$(to,H,null),e(H,Si),e(H,ve),e(ve,Vi),e(ve,So),e(So,Bi),e(ve,Hi),e(ve,La),e(La,Ri),e(ve,Ui),e(H,Ji),$(Xe,H,null),e(H,Gi),$(Ze,H,null),T(t,Ns,g),T(t,be,g),e(be,Qe),e(Qe,Wa),$(oo,Wa,null),e(be,Ki),e(be,Sa),e(Sa,Xi),T(t,Os,g),T(t,Y,g),$(ao,Y,null),e(Y,Zi),e(Y,so),e(so,Qi),e(so,ro),e(ro,Yi),e(so,el),e(Y,tl),e(Y,R),$(no,R,null),e(R,ol),e(R,we),e(we,al),e(we,Vo),e(Vo,sl),e(we,rl),e(we,Va),e(Va,nl),e(we,il),e(R,ll),$(Ye,R,null),e(R,dl),$(et,R,null),T(t,Ls,g),T(t,$e,g),e($e,tt),e(tt,Ba),$(io,Ba,null),e($e,cl),e($e,Ha),e(Ha,hl),T(t,Ws,g),T(t,ee,g),$(lo,ee,null),e(ee,pl),e(ee,ye),e(ye,ml),e(ye,co),e(co,fl),e(ye,ul),e(ye,ho),e(ho,gl),e(ye,_l),e(ee,Tl),e(ee,U),$(po,U,null),e(U,vl),e(U,De),e(De,bl),e(De,Bo),e(Bo,wl),e(De,$l),e(De,Ra),e(Ra,yl),e(De,Dl),e(U,Fl),$(ot,U,null),e(U,kl),$(at,U,null),T(t,Ss,g),T(t,Fe,g),e(Fe,st),e(st,Ua),$(mo,Ua,null),e(Fe,xl),e(Fe,Ja),e(Ja,Il),T(t,Vs,g),T(t,O,g),$(fo,O,null),e(O,Ml),e(O,Ga),e(Ga,El),e(O,jl),e(O,uo),e(uo,Cl),e(uo,go),e(go,Pl),e(uo,ql),e(O,zl),e(O,J),$(_o,J,null),e(J,Al),e(J,ke),e(ke,Nl),e(ke,Ho),e(Ho,Ol),e(ke,Ll),e(ke,Ka),e(Ka,Wl),e(ke,Sl),e(J,Vl),$(rt,J,null),e(J,Bl),$(nt,J,null),T(t,Bs,g),T(t,xe,g),e(xe,it),e(it,Xa),$(To,Xa,null),e(xe,Hl),e(xe,Za),e(Za,Rl),T(t,Hs,g),T(t,j,g),$(vo,j,null),e(j,Ul),e(j,Qa),e(Qa,Jl),e(j,Gl),e(j,Ya),e(Ya,Kl),e(j,Xl),e(j,es),e(es,Zl),e(j,Ql),e(j,bo),e(bo,Yl),e(bo,wo),e(wo,ed),e(bo,td),e(j,od),e(j,G),$($o,G,null),e(G,ad),e(G,Ie),e(Ie,sd),e(Ie,Ro),e(Ro,rd),e(Ie,nd),e(Ie,ts),e(ts,id),e(Ie,ld),e(G,dd),$(lt,G,null),e(G,cd),$(dt,G,null),Rs=!0},p(t,[g]){const yo={};g&2&&(yo.$$scope={dirty:g,ctx:t}),Pe.$set(yo);const os={};g&2&&(os.$$scope={dirty:g,ctx:t}),Ae.$set(os);const as={};g&2&&(as.$$scope={dirty:g,ctx:t}),Oe.$set(as);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:t}),We.$set(ss);const Do={};g&2&&(Do.$$scope={dirty:g,ctx:t}),Se.$set(Do);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:t}),Be.$set(rs);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:t}),He.$set(ns);const is={};g&2&&(is.$$scope={dirty:g,ctx:t}),Re.$set(is);const te={};g&2&&(te.$$scope={dirty:g,ctx:t}),Je.$set(te);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:t}),Ge.$set(ls);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:t}),Xe.$set(ds);const cs={};g&2&&(cs.$$scope={dirty:g,ctx:t}),Ze.$set(cs);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:t}),Ye.$set(hs);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:t}),et.$set(ps);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:t}),ot.$set(ms);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:t}),at.$set(fs);const L={};g&2&&(L.$$scope={dirty:g,ctx:t}),rt.$set(L);const us={};g&2&&(us.$$scope={dirty:g,ctx:t}),nt.$set(us);const Me={};g&2&&(Me.$$scope={dirty:g,ctx:t}),lt.$set(Me);const gs={};g&2&&(gs.$$scope={dirty:g,ctx:t}),dt.$set(gs)},i(t){Rs||(y(a.$$.fragment,t),y(Pe.$$.fragment,t),y($t.$$.fragment,t),y(xt.$$.fragment,t),y(It.$$.fragment,t),y(Ae.$$.fragment,t),y(Et.$$.fragment,t),y(jt.$$.fragment,t),y(Pt.$$.fragment,t),y(Oe.$$.fragment,t),y(qt.$$.fragment,t),y(zt.$$.fragment,t),y(Ot.$$.fragment,t),y(We.$$.fragment,t),y(Se.$$.fragment,t),y(Lt.$$.fragment,t),y(Wt.$$.fragment,t),y(Be.$$.fragment,t),y(Rt.$$.fragment,t),y(He.$$.fragment,t),y(Re.$$.fragment,t),y(Ut.$$.fragment,t),y(Jt.$$.fragment,t),y(Xt.$$.fragment,t),y(Je.$$.fragment,t),y(Ge.$$.fragment,t),y(Zt.$$.fragment,t),y(Qt.$$.fragment,t),y(to.$$.fragment,t),y(Xe.$$.fragment,t),y(Ze.$$.fragment,t),y(oo.$$.fragment,t),y(ao.$$.fragment,t),y(no.$$.fragment,t),y(Ye.$$.fragment,t),y(et.$$.fragment,t),y(io.$$.fragment,t),y(lo.$$.fragment,t),y(po.$$.fragment,t),y(ot.$$.fragment,t),y(at.$$.fragment,t),y(mo.$$.fragment,t),y(fo.$$.fragment,t),y(_o.$$.fragment,t),y(rt.$$.fragment,t),y(nt.$$.fragment,t),y(To.$$.fragment,t),y(vo.$$.fragment,t),y($o.$$.fragment,t),y(lt.$$.fragment,t),y(dt.$$.fragment,t),Rs=!0)},o(t){D(a.$$.fragment,t),D(Pe.$$.fragment,t),D($t.$$.fragment,t),D(xt.$$.fragment,t),D(It.$$.fragment,t),D(Ae.$$.fragment,t),D(Et.$$.fragment,t),D(jt.$$.fragment,t),D(Pt.$$.fragment,t),D(Oe.$$.fragment,t),D(qt.$$.fragment,t),D(zt.$$.fragment,t),D(Ot.$$.fragment,t),D(We.$$.fragment,t),D(Se.$$.fragment,t),D(Lt.$$.fragment,t),D(Wt.$$.fragment,t),D(Be.$$.fragment,t),D(Rt.$$.fragment,t),D(He.$$.fragment,t),D(Re.$$.fragment,t),D(Ut.$$.fragment,t),D(Jt.$$.fragment,t),D(Xt.$$.fragment,t),D(Je.$$.fragment,t),D(Ge.$$.fragment,t),D(Zt.$$.fragment,t),D(Qt.$$.fragment,t),D(to.$$.fragment,t),D(Xe.$$.fragment,t),D(Ze.$$.fragment,t),D(oo.$$.fragment,t),D(ao.$$.fragment,t),D(no.$$.fragment,t),D(Ye.$$.fragment,t),D(et.$$.fragment,t),D(io.$$.fragment,t),D(lo.$$.fragment,t),D(po.$$.fragment,t),D(ot.$$.fragment,t),D(at.$$.fragment,t),D(mo.$$.fragment,t),D(fo.$$.fragment,t),D(_o.$$.fragment,t),D(rt.$$.fragment,t),D(nt.$$.fragment,t),D(To.$$.fragment,t),D(vo.$$.fragment,t),D($o.$$.fragment,t),D(lt.$$.fragment,t),D(dt.$$.fragment,t),Rs=!1},d(t){o(d),t&&o(v),t&&o(p),F(a),t&&o(_s),F(Pe,t),t&&o(Ts),t&&o(ne),F($t),t&&o(vs),t&&o(W),t&&o(bs),t&&o(ko),t&&o(ws),t&&o(xo),t&&o($s),t&&o(Io),t&&o(ys),t&&o(q),t&&o(Ds),t&&o(ae),t&&o(Fs),t&&o(le),F(xt),t&&o(ks),t&&o(z),F(It),F(Ae),t&&o(xs),t&&o(he),F(Et),t&&o(Is),t&&o(A),F(jt),F(Pt),F(Oe),t&&o(Ms),t&&o(pe),F(qt),t&&o(Es),t&&o(Q),F(zt),F(Ot),F(We),F(Se),t&&o(js),t&&o(fe),F(Lt),t&&o(Cs),t&&o(P),F(Wt),F(Be),F(Rt),F(He),F(Re),t&&o(Ps),t&&o(ge),F(Ut),t&&o(qs),t&&o(N),F(Jt),F(Xt),F(Je),F(Ge),t&&o(zs),t&&o(Te),F(Zt),t&&o(As),t&&o(E),F(Qt),F(to),F(Xe),F(Ze),t&&o(Ns),t&&o(be),F(oo),t&&o(Os),t&&o(Y),F(ao),F(no),F(Ye),F(et),t&&o(Ls),t&&o($e),F(io),t&&o(Ws),t&&o(ee),F(lo),F(po),F(ot),F(at),t&&o(Ss),t&&o(Fe),F(mo),t&&o(Vs),t&&o(O),F(fo),F(_o),F(rt),F(nt),t&&o(Bs),t&&o(xe),F(To),t&&o(Hs),t&&o(j),F(vo),F($o),F(lt),F(dt)}}}const ph={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTFeatureExtractor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"},{local:"transformers.TFDeiTModel",title:"TFDeiTModel"},{local:"transformers.TFDeiTForMaskedImageModeling",title:"TFDeiTForMaskedImageModeling"},{local:"transformers.TFDeiTForImageClassification",title:"TFDeiTForImageClassification"},{local:"transformers.TFDeiTForImageClassificationWithTeacher",title:"TFDeiTForImageClassificationWithTeacher"}],title:"DeiT"};function mh(k){return Hc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bh extends Wc{constructor(d){super();Sc(this,d,mh,hh,Vc,{})}}export{bh as default,ph as metadata};
