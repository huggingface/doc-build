import{S as Wc,i as Sc,s as Vc,e as s,k as f,w,t as i,M as Bc,c as n,d as o,m as u,a as r,x as v,h as l,b as m,G as e,g as T,y as $,q as y,o as D,B as F,v as Hc,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as oe}from"../../chunks/Tip-hf-doc-builder.js";import{D as M}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ce}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Uc(k){let d,b,p,h,_;return{c(){d=s("p"),b=i(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=s("a"),h=i("Github Issue"),_=i("."),this.h()},l(a){d=n(a,"P",{});var c=r(d);b=l(c,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=n(c,"A",{href:!0,rel:!0});var x=r(p);h=l(x,"Github Issue"),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(p,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),m(p,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Rc(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTModel, DeiTConfig

# Initializing a DeiT deit-base-distilled-patch16-224 style configuration
configuration = DeiTConfig()

# Initializing a model from the deit-base-distilled-patch16-224 style configuration
model = DeiTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTModel, DeiTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeiT deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DeiTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function Jc(k){let d,b;return{c(){d=s("p"),b=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(p){d=n(p,"P",{});var h=r(d);b=l(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(p,h){T(p,d,h),e(d,b)},d(p){p&&o(d)}}}function Gc(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Kc(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function Xc(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Note that we provide a script to pre-train this model on custom data in our "),p=s("a"),h=i(`examples
directory`),_=i("."),this.h()},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Note that we provide a script to pre-train this model on custom data in our "),p=n(c,"A",{href:!0,rel:!0});var x=r(p);h=l(x,`examples
directory`),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(p,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),m(p,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Zc(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Qc(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function Yc(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function eh(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function th(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function oh(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function ah(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function sh(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function nh(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function rh(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function ih(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function lh(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: little blue heron, Egretta caerulea`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function dh(k){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function ch(k){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),p=f(),w(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=u(a),v(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),F(h,a)}}}function hh(k){let d,b,p,h,_,a,c,x,pn,_s,Pe,Ts,re,qe,la,$t,mn,da,fn,bs,W,un,yt,gn,_n,Fo,Tn,bn,Dt,wn,vn,ws,ko,$n,vs,xo,ca,yn,$s,Io,Dn,ys,q,ha,Fn,kn,ie,xn,Mo,In,Mn,Eo,En,jn,Cn,pa,Pn,qn,ma,zn,An,I,Nn,jo,On,Ln,Co,Wn,Sn,fa,Vn,Bn,ua,Hn,Un,ga,Rn,Jn,_a,Gn,Kn,Po,Xn,Zn,Ds,ae,Qn,Ft,Yn,er,kt,tr,or,Fs,le,ze,Ta,xt,ar,ba,sr,ks,z,It,nr,de,rr,qo,ir,lr,Mt,dr,cr,hr,ce,pr,zo,mr,fr,Ao,ur,gr,_r,Ae,xs,he,Ne,wa,Et,Tr,va,br,Is,A,jt,wr,$a,vr,$r,Ct,yr,No,Dr,Fr,kr,se,Pt,xr,ya,Ir,Mr,Oe,Ms,pe,Le,Da,qt,Er,Fa,jr,Es,Q,zt,Cr,At,Pr,Nt,qr,zr,Ar,S,Ot,Nr,me,Or,Oo,Lr,Wr,ka,Sr,Vr,Br,We,Hr,Se,js,fe,Ve,xa,Lt,Ur,Ia,Rr,Cs,P,Wt,Jr,St,Gr,Vt,Kr,Xr,Zr,Be,Qr,Bt,Yr,Ht,ei,ti,oi,V,Ut,ai,ue,si,Lo,ni,ri,Ma,ii,li,di,He,ci,Ue,Ps,ge,Re,Ea,Rt,hi,ja,pi,qs,N,Jt,mi,Ca,fi,ui,Gt,gi,Kt,_i,Ti,bi,B,Xt,wi,_e,vi,Wo,$i,yi,Pa,Di,Fi,ki,Je,xi,Ge,zs,Te,Ke,qa,Zt,Ii,za,Mi,As,E,Qt,Ei,Aa,ji,Ci,Na,Pi,qi,Oa,zi,Ai,Yt,Ni,eo,Oi,Li,Wi,H,to,Si,be,Vi,So,Bi,Hi,La,Ui,Ri,Ji,Xe,Gi,Ze,Ns,we,Qe,Wa,oo,Ki,Sa,Xi,Os,Y,ao,Zi,so,Qi,no,Yi,el,tl,U,ro,ol,ve,al,Vo,sl,nl,Va,rl,il,ll,Ye,dl,et,Ls,$e,tt,Ba,io,cl,Ha,hl,Ws,ee,lo,pl,ye,ml,co,fl,ul,ho,gl,_l,Tl,R,po,bl,De,wl,Bo,vl,$l,Ua,yl,Dl,Fl,ot,kl,at,Ss,Fe,st,Ra,mo,xl,Ja,Il,Vs,O,fo,Ml,Ga,El,jl,uo,Cl,go,Pl,ql,zl,J,_o,Al,ke,Nl,Ho,Ol,Ll,Ka,Wl,Sl,Vl,nt,Bl,rt,Bs,xe,it,Xa,To,Hl,Za,Ul,Hs,j,bo,Rl,Qa,Jl,Gl,Ya,Kl,Xl,es,Zl,Ql,wo,Yl,vo,ed,td,od,G,$o,ad,Ie,sd,Uo,nd,rd,ts,id,ld,dd,lt,cd,dt,Us;return a=new Z({}),Pe=new oe({props:{$$slots:{default:[Uc]},$$scope:{ctx:k}}}),$t=new Z({}),xt=new Z({}),It=new M({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/configuration_deit.py#L37"}}),Ae=new Ee({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[Rc]},$$scope:{ctx:k}}}),Et=new Z({}),jt=new M({props:{name:"class transformers.DeiTFeatureExtractor",anchor:"transformers.DeiTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DeiTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DeiTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DeiTFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.DeiTFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.DeiTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.DeiTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DeiTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/feature_extraction_deit.py#L36"}}),Pt=new M({props:{name:"__call__",anchor:"transformers.DeiTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DeiTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/feature_extraction_deit.py#L91",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Oe=new oe({props:{warning:!0,$$slots:{default:[Jc]},$$scope:{ctx:k}}}),qt=new Z({}),zt=new M({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L455"}}),Ot=new M({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),We=new oe({props:{$$slots:{default:[Gc]},$$scope:{ctx:k}}}),Se=new Ee({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[Kc]},$$scope:{ctx:k}}}),Lt=new Z({}),Wt=new M({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L567"}}),Be=new oe({props:{$$slots:{default:[Xc]},$$scope:{ctx:k}}}),Ut=new M({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),He=new oe({props:{$$slots:{default:[Zc]},$$scope:{ctx:k}}}),Ue=new Ee({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[Qc]},$$scope:{ctx:k}}}),Rt=new Z({}),Jt=new M({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L679"}}),Xt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Je=new oe({props:{$$slots:{default:[Yc]},$$scope:{ctx:k}}}),Ge=new Ee({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[eh]},$$scope:{ctx:k}}}),Zt=new Z({}),Qt=new M({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L828"}}),to=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Xe=new oe({props:{$$slots:{default:[th]},$$scope:{ctx:k}}}),Ze=new Ee({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[oh]},$$scope:{ctx:k}}}),oo=new Z({}),ao=new M({props:{name:"class transformers.TFDeiTModel",anchor:"transformers.TFDeiTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L641"}}),ro=new M({props:{name:"call",anchor:"transformers.TFDeiTModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Ye=new oe({props:{$$slots:{default:[ah]},$$scope:{ctx:k}}}),et=new Ee({props:{anchor:"transformers.TFDeiTModel.call.example",$$slots:{default:[sh]},$$scope:{ctx:k}}}),io=new Z({}),lo=new M({props:{name:"class transformers.TFDeiTForMaskedImageModeling",anchor:"transformers.TFDeiTForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L761"}}),po=new M({props:{name:"call",anchor:"transformers.TFDeiTForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),ot=new oe({props:{$$slots:{default:[nh]},$$scope:{ctx:k}}}),at=new Ee({props:{anchor:"transformers.TFDeiTForMaskedImageModeling.call.example",$$slots:{default:[rh]},$$scope:{ctx:k}}}),mo=new Z({}),fo=new M({props:{name:"class transformers.TFDeiTForImageClassification",anchor:"transformers.TFDeiTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L882"}}),_o=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),nt=new oe({props:{$$slots:{default:[ih]},$$scope:{ctx:k}}}),rt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassification.call.example",$$slots:{default:[lh]},$$scope:{ctx:k}}}),To=new Z({}),bo=new M({props:{name:"class transformers.TFDeiTForImageClassificationWithTeacher",anchor:"transformers.TFDeiTForImageClassificationWithTeacher",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L990"}}),$o=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),lt=new oe({props:{$$slots:{default:[dh]},$$scope:{ctx:k}}}),dt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.example",$$slots:{default:[ch]},$$scope:{ctx:k}}}),{c(){d=s("meta"),b=f(),p=s("h1"),h=s("a"),_=s("span"),w(a.$$.fragment),c=f(),x=s("span"),pn=i("DeiT"),_s=f(),w(Pe.$$.fragment),Ts=f(),re=s("h2"),qe=s("a"),la=s("span"),w($t.$$.fragment),mn=f(),da=s("span"),fn=i("Overview"),bs=f(),W=s("p"),un=i("The DeiT model was proposed in "),yt=s("a"),gn=i("Training data-efficient image transformers & distillation through attention"),_n=i(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),Fo=s("a"),Tn=i("Vision Transformer (ViT)"),bn=i(" introduced in "),Dt=s("a"),wn=i("Dosovitskiy et al., 2020"),vn=i(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),ws=f(),ko=s("p"),$n=i("The abstract from the paper is the following:"),vs=f(),xo=s("p"),ca=s("em"),yn=i(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),$s=f(),Io=s("p"),Dn=i("Tips:"),ys=f(),q=s("ul"),ha=s("li"),Fn=i(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),kn=f(),ie=s("li"),xn=i(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Mo=s("a"),In=i("DeiTForImageClassification"),Mn=i(` and (2) corresponds to
`),Eo=s("a"),En=i("DeiTForImageClassificationWithTeacher"),jn=i("."),Cn=f(),pa=s("li"),Pn=i(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),qn=f(),ma=s("li"),zn=i(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),An=f(),I=s("li"),Nn=i(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),jo=s("a"),On=i("ViTModel"),Ln=i(" or "),Co=s("a"),Wn=i("ViTForImageClassification"),Sn=i(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),fa=s("em"),Vn=i("facebook/deit-tiny-patch16-224"),Bn=i(", "),ua=s("em"),Hn=i("facebook/deit-small-patch16-224"),Un=i(", "),ga=s("em"),Rn=i("facebook/deit-base-patch16-224"),Jn=i(` and
`),_a=s("em"),Gn=i("facebook/deit-base-patch16-384"),Kn=i(". Note that one should use "),Po=s("a"),Xn=i("DeiTFeatureExtractor"),Zn=i(` in order to
prepare images for the model.`),Ds=f(),ae=s("p"),Qn=i("This model was contributed by "),Ft=s("a"),Yn=i("nielsr"),er=i(". The TensorFlow version of this model was added by "),kt=s("a"),tr=i("amyeroberts"),or=i("."),Fs=f(),le=s("h2"),ze=s("a"),Ta=s("span"),w(xt.$$.fragment),ar=f(),ba=s("span"),sr=i("DeiTConfig"),ks=f(),z=s("div"),w(It.$$.fragment),nr=f(),de=s("p"),rr=i("This is the configuration class to store the configuration of a "),qo=s("a"),ir=i("DeiTModel"),lr=i(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Mt=s("a"),dr=i("facebook/deit-base-distilled-patch16-224"),cr=i(`
architecture.`),hr=f(),ce=s("p"),pr=i("Configuration objects inherit from "),zo=s("a"),mr=i("PretrainedConfig"),fr=i(` and can be used to control the model outputs. Read the
documentation from `),Ao=s("a"),ur=i("PretrainedConfig"),gr=i(" for more information."),_r=f(),w(Ae.$$.fragment),xs=f(),he=s("h2"),Ne=s("a"),wa=s("span"),w(Et.$$.fragment),Tr=f(),va=s("span"),br=i("DeiTFeatureExtractor"),Is=f(),A=s("div"),w(jt.$$.fragment),wr=f(),$a=s("p"),vr=i("Constructs a DeiT feature extractor."),$r=f(),Ct=s("p"),yr=i("This feature extractor inherits from "),No=s("a"),Dr=i("FeatureExtractionMixin"),Fr=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),kr=f(),se=s("div"),w(Pt.$$.fragment),xr=f(),ya=s("p"),Ir=i("Main method to prepare for the model one or several image(s)."),Mr=f(),w(Oe.$$.fragment),Ms=f(),pe=s("h2"),Le=s("a"),Da=s("span"),w(qt.$$.fragment),Er=f(),Fa=s("span"),jr=i("DeiTModel"),Es=f(),Q=s("div"),w(zt.$$.fragment),Cr=f(),At=s("p"),Pr=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nt=s("a"),qr=i("torch.nn.Module"),zr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ar=f(),S=s("div"),w(Ot.$$.fragment),Nr=f(),me=s("p"),Or=i("The "),Oo=s("a"),Lr=i("DeiTModel"),Wr=i(" forward method, overrides the "),ka=s("code"),Sr=i("__call__"),Vr=i(" special method."),Br=f(),w(We.$$.fragment),Hr=f(),w(Se.$$.fragment),js=f(),fe=s("h2"),Ve=s("a"),xa=s("span"),w(Lt.$$.fragment),Ur=f(),Ia=s("span"),Rr=i("DeiTForMaskedImageModeling"),Cs=f(),P=s("div"),w(Wt.$$.fragment),Jr=f(),St=s("p"),Gr=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Vt=s("a"),Kr=i("SimMIM"),Xr=i("."),Zr=f(),w(Be.$$.fragment),Qr=f(),Bt=s("p"),Yr=i("This model is a PyTorch "),Ht=s("a"),ei=i("torch.nn.Module"),ti=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oi=f(),V=s("div"),w(Ut.$$.fragment),ai=f(),ue=s("p"),si=i("The "),Lo=s("a"),ni=i("DeiTForMaskedImageModeling"),ri=i(" forward method, overrides the "),Ma=s("code"),ii=i("__call__"),li=i(" special method."),di=f(),w(He.$$.fragment),ci=f(),w(Ue.$$.fragment),Ps=f(),ge=s("h2"),Re=s("a"),Ea=s("span"),w(Rt.$$.fragment),hi=f(),ja=s("span"),pi=i("DeiTForImageClassification"),qs=f(),N=s("div"),w(Jt.$$.fragment),mi=f(),Ca=s("p"),fi=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ui=f(),Gt=s("p"),gi=i("This model is a PyTorch "),Kt=s("a"),_i=i("torch.nn.Module"),Ti=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bi=f(),B=s("div"),w(Xt.$$.fragment),wi=f(),_e=s("p"),vi=i("The "),Wo=s("a"),$i=i("DeiTForImageClassification"),yi=i(" forward method, overrides the "),Pa=s("code"),Di=i("__call__"),Fi=i(" special method."),ki=f(),w(Je.$$.fragment),xi=f(),w(Ge.$$.fragment),zs=f(),Te=s("h2"),Ke=s("a"),qa=s("span"),w(Zt.$$.fragment),Ii=f(),za=s("span"),Mi=i("DeiTForImageClassificationWithTeacher"),As=f(),E=s("div"),w(Qt.$$.fragment),Ei=f(),Aa=s("p"),ji=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Ci=f(),Na=s("p"),Pi=i(".. warning::"),qi=f(),Oa=s("p"),zi=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ai=f(),Yt=s("p"),Ni=i("This model is a PyTorch "),eo=s("a"),Oi=i("torch.nn.Module"),Li=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi=f(),H=s("div"),w(to.$$.fragment),Si=f(),be=s("p"),Vi=i("The "),So=s("a"),Bi=i("DeiTForImageClassificationWithTeacher"),Hi=i(" forward method, overrides the "),La=s("code"),Ui=i("__call__"),Ri=i(" special method."),Ji=f(),w(Xe.$$.fragment),Gi=f(),w(Ze.$$.fragment),Ns=f(),we=s("h2"),Qe=s("a"),Wa=s("span"),w(oo.$$.fragment),Ki=f(),Sa=s("span"),Xi=i("TFDeiTModel"),Os=f(),Y=s("div"),w(ao.$$.fragment),Zi=f(),so=s("p"),Qi=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),no=s("a"),Yi=i("tf.keras.layers.Layer"),el=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),tl=f(),U=s("div"),w(ro.$$.fragment),ol=f(),ve=s("p"),al=i("The "),Vo=s("a"),sl=i("TFDeiTModel"),nl=i(" forward method, overrides the "),Va=s("code"),rl=i("__call__"),il=i(" special method."),ll=f(),w(Ye.$$.fragment),dl=f(),w(et.$$.fragment),Ls=f(),$e=s("h2"),tt=s("a"),Ba=s("span"),w(io.$$.fragment),cl=f(),Ha=s("span"),hl=i("TFDeiTForMaskedImageModeling"),Ws=f(),ee=s("div"),w(lo.$$.fragment),pl=f(),ye=s("p"),ml=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=s("a"),fl=i("SimMIM"),ul=i(`.
This model is a TensorFlow
`),ho=s("a"),gl=i("tf.keras.layers.Layer"),_l=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Tl=f(),R=s("div"),w(po.$$.fragment),bl=f(),De=s("p"),wl=i("The "),Bo=s("a"),vl=i("TFDeiTForMaskedImageModeling"),$l=i(" forward method, overrides the "),Ua=s("code"),yl=i("__call__"),Dl=i(" special method."),Fl=f(),w(ot.$$.fragment),kl=f(),w(at.$$.fragment),Ss=f(),Fe=s("h2"),st=s("a"),Ra=s("span"),w(mo.$$.fragment),xl=f(),Ja=s("span"),Il=i("TFDeiTForImageClassification"),Vs=f(),O=s("div"),w(fo.$$.fragment),Ml=f(),Ga=s("p"),El=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),jl=f(),uo=s("p"),Cl=i(`This model is a TensorFlow
`),go=s("a"),Pl=i("tf.keras.layers.Layer"),ql=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),zl=f(),J=s("div"),w(_o.$$.fragment),Al=f(),ke=s("p"),Nl=i("The "),Ho=s("a"),Ol=i("TFDeiTForImageClassification"),Ll=i(" forward method, overrides the "),Ka=s("code"),Wl=i("__call__"),Sl=i(" special method."),Vl=f(),w(nt.$$.fragment),Bl=f(),w(rt.$$.fragment),Bs=f(),xe=s("h2"),it=s("a"),Xa=s("span"),w(To.$$.fragment),Hl=f(),Za=s("span"),Ul=i("TFDeiTForImageClassificationWithTeacher"),Hs=f(),j=s("div"),w(bo.$$.fragment),Rl=f(),Qa=s("p"),Jl=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Gl=f(),Ya=s("p"),Kl=i(".. warning::"),Xl=f(),es=s("p"),Zl=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ql=f(),wo=s("p"),Yl=i(`This model is a TensorFlow
`),vo=s("a"),ed=i("tf.keras.layers.Layer"),td=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),od=f(),G=s("div"),w($o.$$.fragment),ad=f(),Ie=s("p"),sd=i("The "),Uo=s("a"),nd=i("TFDeiTForImageClassificationWithTeacher"),rd=i(" forward method, overrides the "),ts=s("code"),id=i("__call__"),ld=i(" special method."),dd=f(),w(lt.$$.fragment),cd=f(),w(dt.$$.fragment),this.h()},l(t){const g=Bc('[data-svelte="svelte-1phssyn"]',document.head);d=n(g,"META",{name:!0,content:!0}),g.forEach(o),b=u(t),p=n(t,"H1",{class:!0});var yo=r(p);h=n(yo,"A",{id:!0,class:!0,href:!0});var os=r(h);_=n(os,"SPAN",{});var as=r(_);v(a.$$.fragment,as),as.forEach(o),os.forEach(o),c=u(yo),x=n(yo,"SPAN",{});var ss=r(x);pn=l(ss,"DeiT"),ss.forEach(o),yo.forEach(o),_s=u(t),v(Pe.$$.fragment,t),Ts=u(t),re=n(t,"H2",{class:!0});var Do=r(re);qe=n(Do,"A",{id:!0,class:!0,href:!0});var ns=r(qe);la=n(ns,"SPAN",{});var rs=r(la);v($t.$$.fragment,rs),rs.forEach(o),ns.forEach(o),mn=u(Do),da=n(Do,"SPAN",{});var is=r(da);fn=l(is,"Overview"),is.forEach(o),Do.forEach(o),bs=u(t),W=n(t,"P",{});var te=r(W);un=l(te,"The DeiT model was proposed in "),yt=n(te,"A",{href:!0,rel:!0});var ls=r(yt);gn=l(ls,"Training data-efficient image transformers & distillation through attention"),ls.forEach(o),_n=l(te,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),Fo=n(te,"A",{href:!0});var ds=r(Fo);Tn=l(ds,"Vision Transformer (ViT)"),ds.forEach(o),bn=l(te," introduced in "),Dt=n(te,"A",{href:!0,rel:!0});var cs=r(Dt);wn=l(cs,"Dosovitskiy et al., 2020"),cs.forEach(o),vn=l(te,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),te.forEach(o),ws=u(t),ko=n(t,"P",{});var hs=r(ko);$n=l(hs,"The abstract from the paper is the following:"),hs.forEach(o),vs=u(t),xo=n(t,"P",{});var ps=r(xo);ca=n(ps,"EM",{});var ms=r(ca);yn=l(ms,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ms.forEach(o),ps.forEach(o),$s=u(t),Io=n(t,"P",{});var fs=r(Io);Dn=l(fs,"Tips:"),fs.forEach(o),ys=u(t),q=n(t,"UL",{});var L=r(q);ha=n(L,"LI",{});var us=r(ha);Fn=l(us,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),us.forEach(o),kn=u(L),ie=n(L,"LI",{});var Me=r(ie);xn=l(Me,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Mo=n(Me,"A",{href:!0});var gs=r(Mo);In=l(gs,"DeiTForImageClassification"),gs.forEach(o),Mn=l(Me,` and (2) corresponds to
`),Eo=n(Me,"A",{href:!0});var hd=r(Eo);En=l(hd,"DeiTForImageClassificationWithTeacher"),hd.forEach(o),jn=l(Me,"."),Me.forEach(o),Cn=u(L),pa=n(L,"LI",{});var pd=r(pa);Pn=l(pd,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),pd.forEach(o),qn=u(L),ma=n(L,"LI",{});var md=r(ma);zn=l(md,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),md.forEach(o),An=u(L),I=n(L,"LI",{});var C=r(I);Nn=l(C,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),jo=n(C,"A",{href:!0});var fd=r(jo);On=l(fd,"ViTModel"),fd.forEach(o),Ln=l(C," or "),Co=n(C,"A",{href:!0});var ud=r(Co);Wn=l(ud,"ViTForImageClassification"),ud.forEach(o),Sn=l(C,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),fa=n(C,"EM",{});var gd=r(fa);Vn=l(gd,"facebook/deit-tiny-patch16-224"),gd.forEach(o),Bn=l(C,", "),ua=n(C,"EM",{});var _d=r(ua);Hn=l(_d,"facebook/deit-small-patch16-224"),_d.forEach(o),Un=l(C,", "),ga=n(C,"EM",{});var Td=r(ga);Rn=l(Td,"facebook/deit-base-patch16-224"),Td.forEach(o),Jn=l(C,` and
`),_a=n(C,"EM",{});var bd=r(_a);Gn=l(bd,"facebook/deit-base-patch16-384"),bd.forEach(o),Kn=l(C,". Note that one should use "),Po=n(C,"A",{href:!0});var wd=r(Po);Xn=l(wd,"DeiTFeatureExtractor"),wd.forEach(o),Zn=l(C,` in order to
prepare images for the model.`),C.forEach(o),L.forEach(o),Ds=u(t),ae=n(t,"P",{});var Ro=r(ae);Qn=l(Ro,"This model was contributed by "),Ft=n(Ro,"A",{href:!0,rel:!0});var vd=r(Ft);Yn=l(vd,"nielsr"),vd.forEach(o),er=l(Ro,". The TensorFlow version of this model was added by "),kt=n(Ro,"A",{href:!0,rel:!0});var $d=r(kt);tr=l($d,"amyeroberts"),$d.forEach(o),or=l(Ro,"."),Ro.forEach(o),Fs=u(t),le=n(t,"H2",{class:!0});var Rs=r(le);ze=n(Rs,"A",{id:!0,class:!0,href:!0});var yd=r(ze);Ta=n(yd,"SPAN",{});var Dd=r(Ta);v(xt.$$.fragment,Dd),Dd.forEach(o),yd.forEach(o),ar=u(Rs),ba=n(Rs,"SPAN",{});var Fd=r(ba);sr=l(Fd,"DeiTConfig"),Fd.forEach(o),Rs.forEach(o),ks=u(t),z=n(t,"DIV",{class:!0});var ct=r(z);v(It.$$.fragment,ct),nr=u(ct),de=n(ct,"P",{});var Jo=r(de);rr=l(Jo,"This is the configuration class to store the configuration of a "),qo=n(Jo,"A",{href:!0});var kd=r(qo);ir=l(kd,"DeiTModel"),kd.forEach(o),lr=l(Jo,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Mt=n(Jo,"A",{href:!0,rel:!0});var xd=r(Mt);dr=l(xd,"facebook/deit-base-distilled-patch16-224"),xd.forEach(o),cr=l(Jo,`
architecture.`),Jo.forEach(o),hr=u(ct),ce=n(ct,"P",{});var Go=r(ce);pr=l(Go,"Configuration objects inherit from "),zo=n(Go,"A",{href:!0});var Id=r(zo);mr=l(Id,"PretrainedConfig"),Id.forEach(o),fr=l(Go,` and can be used to control the model outputs. Read the
documentation from `),Ao=n(Go,"A",{href:!0});var Md=r(Ao);ur=l(Md,"PretrainedConfig"),Md.forEach(o),gr=l(Go," for more information."),Go.forEach(o),_r=u(ct),v(Ae.$$.fragment,ct),ct.forEach(o),xs=u(t),he=n(t,"H2",{class:!0});var Js=r(he);Ne=n(Js,"A",{id:!0,class:!0,href:!0});var Ed=r(Ne);wa=n(Ed,"SPAN",{});var jd=r(wa);v(Et.$$.fragment,jd),jd.forEach(o),Ed.forEach(o),Tr=u(Js),va=n(Js,"SPAN",{});var Cd=r(va);br=l(Cd,"DeiTFeatureExtractor"),Cd.forEach(o),Js.forEach(o),Is=u(t),A=n(t,"DIV",{class:!0});var ht=r(A);v(jt.$$.fragment,ht),wr=u(ht),$a=n(ht,"P",{});var Pd=r($a);vr=l(Pd,"Constructs a DeiT feature extractor."),Pd.forEach(o),$r=u(ht),Ct=n(ht,"P",{});var Gs=r(Ct);yr=l(Gs,"This feature extractor inherits from "),No=n(Gs,"A",{href:!0});var qd=r(No);Dr=l(qd,"FeatureExtractionMixin"),qd.forEach(o),Fr=l(Gs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Gs.forEach(o),kr=u(ht),se=n(ht,"DIV",{class:!0});var Ko=r(se);v(Pt.$$.fragment,Ko),xr=u(Ko),ya=n(Ko,"P",{});var zd=r(ya);Ir=l(zd,"Main method to prepare for the model one or several image(s)."),zd.forEach(o),Mr=u(Ko),v(Oe.$$.fragment,Ko),Ko.forEach(o),ht.forEach(o),Ms=u(t),pe=n(t,"H2",{class:!0});var Ks=r(pe);Le=n(Ks,"A",{id:!0,class:!0,href:!0});var Ad=r(Le);Da=n(Ad,"SPAN",{});var Nd=r(Da);v(qt.$$.fragment,Nd),Nd.forEach(o),Ad.forEach(o),Er=u(Ks),Fa=n(Ks,"SPAN",{});var Od=r(Fa);jr=l(Od,"DeiTModel"),Od.forEach(o),Ks.forEach(o),Es=u(t),Q=n(t,"DIV",{class:!0});var Xo=r(Q);v(zt.$$.fragment,Xo),Cr=u(Xo),At=n(Xo,"P",{});var Xs=r(At);Pr=l(Xs,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nt=n(Xs,"A",{href:!0,rel:!0});var Ld=r(Nt);qr=l(Ld,"torch.nn.Module"),Ld.forEach(o),zr=l(Xs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xs.forEach(o),Ar=u(Xo),S=n(Xo,"DIV",{class:!0});var pt=r(S);v(Ot.$$.fragment,pt),Nr=u(pt),me=n(pt,"P",{});var Zo=r(me);Or=l(Zo,"The "),Oo=n(Zo,"A",{href:!0});var Wd=r(Oo);Lr=l(Wd,"DeiTModel"),Wd.forEach(o),Wr=l(Zo," forward method, overrides the "),ka=n(Zo,"CODE",{});var Sd=r(ka);Sr=l(Sd,"__call__"),Sd.forEach(o),Vr=l(Zo," special method."),Zo.forEach(o),Br=u(pt),v(We.$$.fragment,pt),Hr=u(pt),v(Se.$$.fragment,pt),pt.forEach(o),Xo.forEach(o),js=u(t),fe=n(t,"H2",{class:!0});var Zs=r(fe);Ve=n(Zs,"A",{id:!0,class:!0,href:!0});var Vd=r(Ve);xa=n(Vd,"SPAN",{});var Bd=r(xa);v(Lt.$$.fragment,Bd),Bd.forEach(o),Vd.forEach(o),Ur=u(Zs),Ia=n(Zs,"SPAN",{});var Hd=r(Ia);Rr=l(Hd,"DeiTForMaskedImageModeling"),Hd.forEach(o),Zs.forEach(o),Cs=u(t),P=n(t,"DIV",{class:!0});var ne=r(P);v(Wt.$$.fragment,ne),Jr=u(ne),St=n(ne,"P",{});var Qs=r(St);Gr=l(Qs,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Vt=n(Qs,"A",{href:!0,rel:!0});var Ud=r(Vt);Kr=l(Ud,"SimMIM"),Ud.forEach(o),Xr=l(Qs,"."),Qs.forEach(o),Zr=u(ne),v(Be.$$.fragment,ne),Qr=u(ne),Bt=n(ne,"P",{});var Ys=r(Bt);Yr=l(Ys,"This model is a PyTorch "),Ht=n(Ys,"A",{href:!0,rel:!0});var Rd=r(Ht);ei=l(Rd,"torch.nn.Module"),Rd.forEach(o),ti=l(Ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys.forEach(o),oi=u(ne),V=n(ne,"DIV",{class:!0});var mt=r(V);v(Ut.$$.fragment,mt),ai=u(mt),ue=n(mt,"P",{});var Qo=r(ue);si=l(Qo,"The "),Lo=n(Qo,"A",{href:!0});var Jd=r(Lo);ni=l(Jd,"DeiTForMaskedImageModeling"),Jd.forEach(o),ri=l(Qo," forward method, overrides the "),Ma=n(Qo,"CODE",{});var Gd=r(Ma);ii=l(Gd,"__call__"),Gd.forEach(o),li=l(Qo," special method."),Qo.forEach(o),di=u(mt),v(He.$$.fragment,mt),ci=u(mt),v(Ue.$$.fragment,mt),mt.forEach(o),ne.forEach(o),Ps=u(t),ge=n(t,"H2",{class:!0});var en=r(ge);Re=n(en,"A",{id:!0,class:!0,href:!0});var Kd=r(Re);Ea=n(Kd,"SPAN",{});var Xd=r(Ea);v(Rt.$$.fragment,Xd),Xd.forEach(o),Kd.forEach(o),hi=u(en),ja=n(en,"SPAN",{});var Zd=r(ja);pi=l(Zd,"DeiTForImageClassification"),Zd.forEach(o),en.forEach(o),qs=u(t),N=n(t,"DIV",{class:!0});var ft=r(N);v(Jt.$$.fragment,ft),mi=u(ft),Ca=n(ft,"P",{});var Qd=r(Ca);fi=l(Qd,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qd.forEach(o),ui=u(ft),Gt=n(ft,"P",{});var tn=r(Gt);gi=l(tn,"This model is a PyTorch "),Kt=n(tn,"A",{href:!0,rel:!0});var Yd=r(Kt);_i=l(Yd,"torch.nn.Module"),Yd.forEach(o),Ti=l(tn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tn.forEach(o),bi=u(ft),B=n(ft,"DIV",{class:!0});var ut=r(B);v(Xt.$$.fragment,ut),wi=u(ut),_e=n(ut,"P",{});var Yo=r(_e);vi=l(Yo,"The "),Wo=n(Yo,"A",{href:!0});var ec=r(Wo);$i=l(ec,"DeiTForImageClassification"),ec.forEach(o),yi=l(Yo," forward method, overrides the "),Pa=n(Yo,"CODE",{});var tc=r(Pa);Di=l(tc,"__call__"),tc.forEach(o),Fi=l(Yo," special method."),Yo.forEach(o),ki=u(ut),v(Je.$$.fragment,ut),xi=u(ut),v(Ge.$$.fragment,ut),ut.forEach(o),ft.forEach(o),zs=u(t),Te=n(t,"H2",{class:!0});var on=r(Te);Ke=n(on,"A",{id:!0,class:!0,href:!0});var oc=r(Ke);qa=n(oc,"SPAN",{});var ac=r(qa);v(Zt.$$.fragment,ac),ac.forEach(o),oc.forEach(o),Ii=u(on),za=n(on,"SPAN",{});var sc=r(za);Mi=l(sc,"DeiTForImageClassificationWithTeacher"),sc.forEach(o),on.forEach(o),As=u(t),E=n(t,"DIV",{class:!0});var K=r(E);v(Qt.$$.fragment,K),Ei=u(K),Aa=n(K,"P",{});var nc=r(Aa);ji=l(nc,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),nc.forEach(o),Ci=u(K),Na=n(K,"P",{});var rc=r(Na);Pi=l(rc,".. warning::"),rc.forEach(o),qi=u(K),Oa=n(K,"P",{});var ic=r(Oa);zi=l(ic,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),ic.forEach(o),Ai=u(K),Yt=n(K,"P",{});var an=r(Yt);Ni=l(an,"This model is a PyTorch "),eo=n(an,"A",{href:!0,rel:!0});var lc=r(eo);Oi=l(lc,"torch.nn.Module"),lc.forEach(o),Li=l(an,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),an.forEach(o),Wi=u(K),H=n(K,"DIV",{class:!0});var gt=r(H);v(to.$$.fragment,gt),Si=u(gt),be=n(gt,"P",{});var ea=r(be);Vi=l(ea,"The "),So=n(ea,"A",{href:!0});var dc=r(So);Bi=l(dc,"DeiTForImageClassificationWithTeacher"),dc.forEach(o),Hi=l(ea," forward method, overrides the "),La=n(ea,"CODE",{});var cc=r(La);Ui=l(cc,"__call__"),cc.forEach(o),Ri=l(ea," special method."),ea.forEach(o),Ji=u(gt),v(Xe.$$.fragment,gt),Gi=u(gt),v(Ze.$$.fragment,gt),gt.forEach(o),K.forEach(o),Ns=u(t),we=n(t,"H2",{class:!0});var sn=r(we);Qe=n(sn,"A",{id:!0,class:!0,href:!0});var hc=r(Qe);Wa=n(hc,"SPAN",{});var pc=r(Wa);v(oo.$$.fragment,pc),pc.forEach(o),hc.forEach(o),Ki=u(sn),Sa=n(sn,"SPAN",{});var mc=r(Sa);Xi=l(mc,"TFDeiTModel"),mc.forEach(o),sn.forEach(o),Os=u(t),Y=n(t,"DIV",{class:!0});var ta=r(Y);v(ao.$$.fragment,ta),Zi=u(ta),so=n(ta,"P",{});var nn=r(so);Qi=l(nn,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),no=n(nn,"A",{href:!0,rel:!0});var fc=r(no);Yi=l(fc,"tf.keras.layers.Layer"),fc.forEach(o),el=l(nn,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),nn.forEach(o),tl=u(ta),U=n(ta,"DIV",{class:!0});var _t=r(U);v(ro.$$.fragment,_t),ol=u(_t),ve=n(_t,"P",{});var oa=r(ve);al=l(oa,"The "),Vo=n(oa,"A",{href:!0});var uc=r(Vo);sl=l(uc,"TFDeiTModel"),uc.forEach(o),nl=l(oa," forward method, overrides the "),Va=n(oa,"CODE",{});var gc=r(Va);rl=l(gc,"__call__"),gc.forEach(o),il=l(oa," special method."),oa.forEach(o),ll=u(_t),v(Ye.$$.fragment,_t),dl=u(_t),v(et.$$.fragment,_t),_t.forEach(o),ta.forEach(o),Ls=u(t),$e=n(t,"H2",{class:!0});var rn=r($e);tt=n(rn,"A",{id:!0,class:!0,href:!0});var _c=r(tt);Ba=n(_c,"SPAN",{});var Tc=r(Ba);v(io.$$.fragment,Tc),Tc.forEach(o),_c.forEach(o),cl=u(rn),Ha=n(rn,"SPAN",{});var bc=r(Ha);hl=l(bc,"TFDeiTForMaskedImageModeling"),bc.forEach(o),rn.forEach(o),Ws=u(t),ee=n(t,"DIV",{class:!0});var aa=r(ee);v(lo.$$.fragment,aa),pl=u(aa),ye=n(aa,"P",{});var sa=r(ye);ml=l(sa,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=n(sa,"A",{href:!0,rel:!0});var wc=r(co);fl=l(wc,"SimMIM"),wc.forEach(o),ul=l(sa,`.
This model is a TensorFlow
`),ho=n(sa,"A",{href:!0,rel:!0});var vc=r(ho);gl=l(vc,"tf.keras.layers.Layer"),vc.forEach(o),_l=l(sa,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),sa.forEach(o),Tl=u(aa),R=n(aa,"DIV",{class:!0});var Tt=r(R);v(po.$$.fragment,Tt),bl=u(Tt),De=n(Tt,"P",{});var na=r(De);wl=l(na,"The "),Bo=n(na,"A",{href:!0});var $c=r(Bo);vl=l($c,"TFDeiTForMaskedImageModeling"),$c.forEach(o),$l=l(na," forward method, overrides the "),Ua=n(na,"CODE",{});var yc=r(Ua);yl=l(yc,"__call__"),yc.forEach(o),Dl=l(na," special method."),na.forEach(o),Fl=u(Tt),v(ot.$$.fragment,Tt),kl=u(Tt),v(at.$$.fragment,Tt),Tt.forEach(o),aa.forEach(o),Ss=u(t),Fe=n(t,"H2",{class:!0});var ln=r(Fe);st=n(ln,"A",{id:!0,class:!0,href:!0});var Dc=r(st);Ra=n(Dc,"SPAN",{});var Fc=r(Ra);v(mo.$$.fragment,Fc),Fc.forEach(o),Dc.forEach(o),xl=u(ln),Ja=n(ln,"SPAN",{});var kc=r(Ja);Il=l(kc,"TFDeiTForImageClassification"),kc.forEach(o),ln.forEach(o),Vs=u(t),O=n(t,"DIV",{class:!0});var bt=r(O);v(fo.$$.fragment,bt),Ml=u(bt),Ga=n(bt,"P",{});var xc=r(Ga);El=l(xc,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),xc.forEach(o),jl=u(bt),uo=n(bt,"P",{});var dn=r(uo);Cl=l(dn,`This model is a TensorFlow
`),go=n(dn,"A",{href:!0,rel:!0});var Ic=r(go);Pl=l(Ic,"tf.keras.layers.Layer"),Ic.forEach(o),ql=l(dn,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),dn.forEach(o),zl=u(bt),J=n(bt,"DIV",{class:!0});var wt=r(J);v(_o.$$.fragment,wt),Al=u(wt),ke=n(wt,"P",{});var ra=r(ke);Nl=l(ra,"The "),Ho=n(ra,"A",{href:!0});var Mc=r(Ho);Ol=l(Mc,"TFDeiTForImageClassification"),Mc.forEach(o),Ll=l(ra," forward method, overrides the "),Ka=n(ra,"CODE",{});var Ec=r(Ka);Wl=l(Ec,"__call__"),Ec.forEach(o),Sl=l(ra," special method."),ra.forEach(o),Vl=u(wt),v(nt.$$.fragment,wt),Bl=u(wt),v(rt.$$.fragment,wt),wt.forEach(o),bt.forEach(o),Bs=u(t),xe=n(t,"H2",{class:!0});var cn=r(xe);it=n(cn,"A",{id:!0,class:!0,href:!0});var jc=r(it);Xa=n(jc,"SPAN",{});var Cc=r(Xa);v(To.$$.fragment,Cc),Cc.forEach(o),jc.forEach(o),Hl=u(cn),Za=n(cn,"SPAN",{});var Pc=r(Za);Ul=l(Pc,"TFDeiTForImageClassificationWithTeacher"),Pc.forEach(o),cn.forEach(o),Hs=u(t),j=n(t,"DIV",{class:!0});var X=r(j);v(bo.$$.fragment,X),Rl=u(X),Qa=n(X,"P",{});var qc=r(Qa);Jl=l(qc,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),qc.forEach(o),Gl=u(X),Ya=n(X,"P",{});var zc=r(Ya);Kl=l(zc,".. warning::"),zc.forEach(o),Xl=u(X),es=n(X,"P",{});var Ac=r(es);Zl=l(Ac,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ac.forEach(o),Ql=u(X),wo=n(X,"P",{});var hn=r(wo);Yl=l(hn,`This model is a TensorFlow
`),vo=n(hn,"A",{href:!0,rel:!0});var Nc=r(vo);ed=l(Nc,"tf.keras.layers.Layer"),Nc.forEach(o),td=l(hn,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),hn.forEach(o),od=u(X),G=n(X,"DIV",{class:!0});var vt=r(G);v($o.$$.fragment,vt),ad=u(vt),Ie=n(vt,"P",{});var ia=r(Ie);sd=l(ia,"The "),Uo=n(ia,"A",{href:!0});var Oc=r(Uo);nd=l(Oc,"TFDeiTForImageClassificationWithTeacher"),Oc.forEach(o),rd=l(ia," forward method, overrides the "),ts=n(ia,"CODE",{});var Lc=r(ts);id=l(Lc,"__call__"),Lc.forEach(o),ld=l(ia," special method."),ia.forEach(o),dd=u(vt),v(lt.$$.fragment,vt),cd=u(vt),v(dt.$$.fragment,vt),vt.forEach(o),X.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(ph)),m(h,"id","deit"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#deit"),m(p,"class","relative group"),m(qe,"id","overview"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#overview"),m(re,"class","relative group"),m(yt,"href","https://arxiv.org/abs/2012.12877"),m(yt,"rel","nofollow"),m(Fo,"href","vit"),m(Dt,"href","https://arxiv.org/abs/2010.11929"),m(Dt,"rel","nofollow"),m(Mo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),m(Eo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(jo,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),m(Co,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),m(Po,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor"),m(Ft,"href","https://huggingface.co/nielsr"),m(Ft,"rel","nofollow"),m(kt,"href","https://huggingface.co/amyeroberts"),m(kt,"rel","nofollow"),m(ze,"id","transformers.DeiTConfig"),m(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ze,"href","#transformers.DeiTConfig"),m(le,"class","relative group"),m(qo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),m(Mt,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),m(Mt,"rel","nofollow"),m(zo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Ao,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"id","transformers.DeiTFeatureExtractor"),m(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ne,"href","#transformers.DeiTFeatureExtractor"),m(he,"class","relative group"),m(No,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),m(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"id","transformers.DeiTModel"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.DeiTModel"),m(pe,"class","relative group"),m(Nt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Nt,"rel","nofollow"),m(Oo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"id","transformers.DeiTForMaskedImageModeling"),m(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ve,"href","#transformers.DeiTForMaskedImageModeling"),m(fe,"class","relative group"),m(Vt,"href","https://arxiv.org/abs/2111.09886"),m(Vt,"rel","nofollow"),m(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ht,"rel","nofollow"),m(Lo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Re,"id","transformers.DeiTForImageClassification"),m(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Re,"href","#transformers.DeiTForImageClassification"),m(ge,"class","relative group"),m(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Kt,"rel","nofollow"),m(Wo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ke,"id","transformers.DeiTForImageClassificationWithTeacher"),m(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ke,"href","#transformers.DeiTForImageClassificationWithTeacher"),m(Te,"class","relative group"),m(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(eo,"rel","nofollow"),m(So,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"id","transformers.TFDeiTModel"),m(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qe,"href","#transformers.TFDeiTModel"),m(we,"class","relative group"),m(no,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(no,"rel","nofollow"),m(Vo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTModel"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"id","transformers.TFDeiTForMaskedImageModeling"),m(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(tt,"href","#transformers.TFDeiTForMaskedImageModeling"),m($e,"class","relative group"),m(co,"href","https://arxiv.org/abs/2111.09886"),m(co,"rel","nofollow"),m(ho,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ho,"rel","nofollow"),m(Bo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForMaskedImageModeling"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(st,"id","transformers.TFDeiTForImageClassification"),m(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(st,"href","#transformers.TFDeiTForImageClassification"),m(Fe,"class","relative group"),m(go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(go,"rel","nofollow"),m(Ho,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassification"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(it,"id","transformers.TFDeiTForImageClassificationWithTeacher"),m(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(it,"href","#transformers.TFDeiTForImageClassificationWithTeacher"),m(xe,"class","relative group"),m(vo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(vo,"rel","nofollow"),m(Uo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassificationWithTeacher"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),T(t,b,g),T(t,p,g),e(p,h),e(h,_),$(a,_,null),e(p,c),e(p,x),e(x,pn),T(t,_s,g),$(Pe,t,g),T(t,Ts,g),T(t,re,g),e(re,qe),e(qe,la),$($t,la,null),e(re,mn),e(re,da),e(da,fn),T(t,bs,g),T(t,W,g),e(W,un),e(W,yt),e(yt,gn),e(W,_n),e(W,Fo),e(Fo,Tn),e(W,bn),e(W,Dt),e(Dt,wn),e(W,vn),T(t,ws,g),T(t,ko,g),e(ko,$n),T(t,vs,g),T(t,xo,g),e(xo,ca),e(ca,yn),T(t,$s,g),T(t,Io,g),e(Io,Dn),T(t,ys,g),T(t,q,g),e(q,ha),e(ha,Fn),e(q,kn),e(q,ie),e(ie,xn),e(ie,Mo),e(Mo,In),e(ie,Mn),e(ie,Eo),e(Eo,En),e(ie,jn),e(q,Cn),e(q,pa),e(pa,Pn),e(q,qn),e(q,ma),e(ma,zn),e(q,An),e(q,I),e(I,Nn),e(I,jo),e(jo,On),e(I,Ln),e(I,Co),e(Co,Wn),e(I,Sn),e(I,fa),e(fa,Vn),e(I,Bn),e(I,ua),e(ua,Hn),e(I,Un),e(I,ga),e(ga,Rn),e(I,Jn),e(I,_a),e(_a,Gn),e(I,Kn),e(I,Po),e(Po,Xn),e(I,Zn),T(t,Ds,g),T(t,ae,g),e(ae,Qn),e(ae,Ft),e(Ft,Yn),e(ae,er),e(ae,kt),e(kt,tr),e(ae,or),T(t,Fs,g),T(t,le,g),e(le,ze),e(ze,Ta),$(xt,Ta,null),e(le,ar),e(le,ba),e(ba,sr),T(t,ks,g),T(t,z,g),$(It,z,null),e(z,nr),e(z,de),e(de,rr),e(de,qo),e(qo,ir),e(de,lr),e(de,Mt),e(Mt,dr),e(de,cr),e(z,hr),e(z,ce),e(ce,pr),e(ce,zo),e(zo,mr),e(ce,fr),e(ce,Ao),e(Ao,ur),e(ce,gr),e(z,_r),$(Ae,z,null),T(t,xs,g),T(t,he,g),e(he,Ne),e(Ne,wa),$(Et,wa,null),e(he,Tr),e(he,va),e(va,br),T(t,Is,g),T(t,A,g),$(jt,A,null),e(A,wr),e(A,$a),e($a,vr),e(A,$r),e(A,Ct),e(Ct,yr),e(Ct,No),e(No,Dr),e(Ct,Fr),e(A,kr),e(A,se),$(Pt,se,null),e(se,xr),e(se,ya),e(ya,Ir),e(se,Mr),$(Oe,se,null),T(t,Ms,g),T(t,pe,g),e(pe,Le),e(Le,Da),$(qt,Da,null),e(pe,Er),e(pe,Fa),e(Fa,jr),T(t,Es,g),T(t,Q,g),$(zt,Q,null),e(Q,Cr),e(Q,At),e(At,Pr),e(At,Nt),e(Nt,qr),e(At,zr),e(Q,Ar),e(Q,S),$(Ot,S,null),e(S,Nr),e(S,me),e(me,Or),e(me,Oo),e(Oo,Lr),e(me,Wr),e(me,ka),e(ka,Sr),e(me,Vr),e(S,Br),$(We,S,null),e(S,Hr),$(Se,S,null),T(t,js,g),T(t,fe,g),e(fe,Ve),e(Ve,xa),$(Lt,xa,null),e(fe,Ur),e(fe,Ia),e(Ia,Rr),T(t,Cs,g),T(t,P,g),$(Wt,P,null),e(P,Jr),e(P,St),e(St,Gr),e(St,Vt),e(Vt,Kr),e(St,Xr),e(P,Zr),$(Be,P,null),e(P,Qr),e(P,Bt),e(Bt,Yr),e(Bt,Ht),e(Ht,ei),e(Bt,ti),e(P,oi),e(P,V),$(Ut,V,null),e(V,ai),e(V,ue),e(ue,si),e(ue,Lo),e(Lo,ni),e(ue,ri),e(ue,Ma),e(Ma,ii),e(ue,li),e(V,di),$(He,V,null),e(V,ci),$(Ue,V,null),T(t,Ps,g),T(t,ge,g),e(ge,Re),e(Re,Ea),$(Rt,Ea,null),e(ge,hi),e(ge,ja),e(ja,pi),T(t,qs,g),T(t,N,g),$(Jt,N,null),e(N,mi),e(N,Ca),e(Ca,fi),e(N,ui),e(N,Gt),e(Gt,gi),e(Gt,Kt),e(Kt,_i),e(Gt,Ti),e(N,bi),e(N,B),$(Xt,B,null),e(B,wi),e(B,_e),e(_e,vi),e(_e,Wo),e(Wo,$i),e(_e,yi),e(_e,Pa),e(Pa,Di),e(_e,Fi),e(B,ki),$(Je,B,null),e(B,xi),$(Ge,B,null),T(t,zs,g),T(t,Te,g),e(Te,Ke),e(Ke,qa),$(Zt,qa,null),e(Te,Ii),e(Te,za),e(za,Mi),T(t,As,g),T(t,E,g),$(Qt,E,null),e(E,Ei),e(E,Aa),e(Aa,ji),e(E,Ci),e(E,Na),e(Na,Pi),e(E,qi),e(E,Oa),e(Oa,zi),e(E,Ai),e(E,Yt),e(Yt,Ni),e(Yt,eo),e(eo,Oi),e(Yt,Li),e(E,Wi),e(E,H),$(to,H,null),e(H,Si),e(H,be),e(be,Vi),e(be,So),e(So,Bi),e(be,Hi),e(be,La),e(La,Ui),e(be,Ri),e(H,Ji),$(Xe,H,null),e(H,Gi),$(Ze,H,null),T(t,Ns,g),T(t,we,g),e(we,Qe),e(Qe,Wa),$(oo,Wa,null),e(we,Ki),e(we,Sa),e(Sa,Xi),T(t,Os,g),T(t,Y,g),$(ao,Y,null),e(Y,Zi),e(Y,so),e(so,Qi),e(so,no),e(no,Yi),e(so,el),e(Y,tl),e(Y,U),$(ro,U,null),e(U,ol),e(U,ve),e(ve,al),e(ve,Vo),e(Vo,sl),e(ve,nl),e(ve,Va),e(Va,rl),e(ve,il),e(U,ll),$(Ye,U,null),e(U,dl),$(et,U,null),T(t,Ls,g),T(t,$e,g),e($e,tt),e(tt,Ba),$(io,Ba,null),e($e,cl),e($e,Ha),e(Ha,hl),T(t,Ws,g),T(t,ee,g),$(lo,ee,null),e(ee,pl),e(ee,ye),e(ye,ml),e(ye,co),e(co,fl),e(ye,ul),e(ye,ho),e(ho,gl),e(ye,_l),e(ee,Tl),e(ee,R),$(po,R,null),e(R,bl),e(R,De),e(De,wl),e(De,Bo),e(Bo,vl),e(De,$l),e(De,Ua),e(Ua,yl),e(De,Dl),e(R,Fl),$(ot,R,null),e(R,kl),$(at,R,null),T(t,Ss,g),T(t,Fe,g),e(Fe,st),e(st,Ra),$(mo,Ra,null),e(Fe,xl),e(Fe,Ja),e(Ja,Il),T(t,Vs,g),T(t,O,g),$(fo,O,null),e(O,Ml),e(O,Ga),e(Ga,El),e(O,jl),e(O,uo),e(uo,Cl),e(uo,go),e(go,Pl),e(uo,ql),e(O,zl),e(O,J),$(_o,J,null),e(J,Al),e(J,ke),e(ke,Nl),e(ke,Ho),e(Ho,Ol),e(ke,Ll),e(ke,Ka),e(Ka,Wl),e(ke,Sl),e(J,Vl),$(nt,J,null),e(J,Bl),$(rt,J,null),T(t,Bs,g),T(t,xe,g),e(xe,it),e(it,Xa),$(To,Xa,null),e(xe,Hl),e(xe,Za),e(Za,Ul),T(t,Hs,g),T(t,j,g),$(bo,j,null),e(j,Rl),e(j,Qa),e(Qa,Jl),e(j,Gl),e(j,Ya),e(Ya,Kl),e(j,Xl),e(j,es),e(es,Zl),e(j,Ql),e(j,wo),e(wo,Yl),e(wo,vo),e(vo,ed),e(wo,td),e(j,od),e(j,G),$($o,G,null),e(G,ad),e(G,Ie),e(Ie,sd),e(Ie,Uo),e(Uo,nd),e(Ie,rd),e(Ie,ts),e(ts,id),e(Ie,ld),e(G,dd),$(lt,G,null),e(G,cd),$(dt,G,null),Us=!0},p(t,[g]){const yo={};g&2&&(yo.$$scope={dirty:g,ctx:t}),Pe.$set(yo);const os={};g&2&&(os.$$scope={dirty:g,ctx:t}),Ae.$set(os);const as={};g&2&&(as.$$scope={dirty:g,ctx:t}),Oe.$set(as);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:t}),We.$set(ss);const Do={};g&2&&(Do.$$scope={dirty:g,ctx:t}),Se.$set(Do);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:t}),Be.$set(ns);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:t}),He.$set(rs);const is={};g&2&&(is.$$scope={dirty:g,ctx:t}),Ue.$set(is);const te={};g&2&&(te.$$scope={dirty:g,ctx:t}),Je.$set(te);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:t}),Ge.$set(ls);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:t}),Xe.$set(ds);const cs={};g&2&&(cs.$$scope={dirty:g,ctx:t}),Ze.$set(cs);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:t}),Ye.$set(hs);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:t}),et.$set(ps);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:t}),ot.$set(ms);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:t}),at.$set(fs);const L={};g&2&&(L.$$scope={dirty:g,ctx:t}),nt.$set(L);const us={};g&2&&(us.$$scope={dirty:g,ctx:t}),rt.$set(us);const Me={};g&2&&(Me.$$scope={dirty:g,ctx:t}),lt.$set(Me);const gs={};g&2&&(gs.$$scope={dirty:g,ctx:t}),dt.$set(gs)},i(t){Us||(y(a.$$.fragment,t),y(Pe.$$.fragment,t),y($t.$$.fragment,t),y(xt.$$.fragment,t),y(It.$$.fragment,t),y(Ae.$$.fragment,t),y(Et.$$.fragment,t),y(jt.$$.fragment,t),y(Pt.$$.fragment,t),y(Oe.$$.fragment,t),y(qt.$$.fragment,t),y(zt.$$.fragment,t),y(Ot.$$.fragment,t),y(We.$$.fragment,t),y(Se.$$.fragment,t),y(Lt.$$.fragment,t),y(Wt.$$.fragment,t),y(Be.$$.fragment,t),y(Ut.$$.fragment,t),y(He.$$.fragment,t),y(Ue.$$.fragment,t),y(Rt.$$.fragment,t),y(Jt.$$.fragment,t),y(Xt.$$.fragment,t),y(Je.$$.fragment,t),y(Ge.$$.fragment,t),y(Zt.$$.fragment,t),y(Qt.$$.fragment,t),y(to.$$.fragment,t),y(Xe.$$.fragment,t),y(Ze.$$.fragment,t),y(oo.$$.fragment,t),y(ao.$$.fragment,t),y(ro.$$.fragment,t),y(Ye.$$.fragment,t),y(et.$$.fragment,t),y(io.$$.fragment,t),y(lo.$$.fragment,t),y(po.$$.fragment,t),y(ot.$$.fragment,t),y(at.$$.fragment,t),y(mo.$$.fragment,t),y(fo.$$.fragment,t),y(_o.$$.fragment,t),y(nt.$$.fragment,t),y(rt.$$.fragment,t),y(To.$$.fragment,t),y(bo.$$.fragment,t),y($o.$$.fragment,t),y(lt.$$.fragment,t),y(dt.$$.fragment,t),Us=!0)},o(t){D(a.$$.fragment,t),D(Pe.$$.fragment,t),D($t.$$.fragment,t),D(xt.$$.fragment,t),D(It.$$.fragment,t),D(Ae.$$.fragment,t),D(Et.$$.fragment,t),D(jt.$$.fragment,t),D(Pt.$$.fragment,t),D(Oe.$$.fragment,t),D(qt.$$.fragment,t),D(zt.$$.fragment,t),D(Ot.$$.fragment,t),D(We.$$.fragment,t),D(Se.$$.fragment,t),D(Lt.$$.fragment,t),D(Wt.$$.fragment,t),D(Be.$$.fragment,t),D(Ut.$$.fragment,t),D(He.$$.fragment,t),D(Ue.$$.fragment,t),D(Rt.$$.fragment,t),D(Jt.$$.fragment,t),D(Xt.$$.fragment,t),D(Je.$$.fragment,t),D(Ge.$$.fragment,t),D(Zt.$$.fragment,t),D(Qt.$$.fragment,t),D(to.$$.fragment,t),D(Xe.$$.fragment,t),D(Ze.$$.fragment,t),D(oo.$$.fragment,t),D(ao.$$.fragment,t),D(ro.$$.fragment,t),D(Ye.$$.fragment,t),D(et.$$.fragment,t),D(io.$$.fragment,t),D(lo.$$.fragment,t),D(po.$$.fragment,t),D(ot.$$.fragment,t),D(at.$$.fragment,t),D(mo.$$.fragment,t),D(fo.$$.fragment,t),D(_o.$$.fragment,t),D(nt.$$.fragment,t),D(rt.$$.fragment,t),D(To.$$.fragment,t),D(bo.$$.fragment,t),D($o.$$.fragment,t),D(lt.$$.fragment,t),D(dt.$$.fragment,t),Us=!1},d(t){o(d),t&&o(b),t&&o(p),F(a),t&&o(_s),F(Pe,t),t&&o(Ts),t&&o(re),F($t),t&&o(bs),t&&o(W),t&&o(ws),t&&o(ko),t&&o(vs),t&&o(xo),t&&o($s),t&&o(Io),t&&o(ys),t&&o(q),t&&o(Ds),t&&o(ae),t&&o(Fs),t&&o(le),F(xt),t&&o(ks),t&&o(z),F(It),F(Ae),t&&o(xs),t&&o(he),F(Et),t&&o(Is),t&&o(A),F(jt),F(Pt),F(Oe),t&&o(Ms),t&&o(pe),F(qt),t&&o(Es),t&&o(Q),F(zt),F(Ot),F(We),F(Se),t&&o(js),t&&o(fe),F(Lt),t&&o(Cs),t&&o(P),F(Wt),F(Be),F(Ut),F(He),F(Ue),t&&o(Ps),t&&o(ge),F(Rt),t&&o(qs),t&&o(N),F(Jt),F(Xt),F(Je),F(Ge),t&&o(zs),t&&o(Te),F(Zt),t&&o(As),t&&o(E),F(Qt),F(to),F(Xe),F(Ze),t&&o(Ns),t&&o(we),F(oo),t&&o(Os),t&&o(Y),F(ao),F(ro),F(Ye),F(et),t&&o(Ls),t&&o($e),F(io),t&&o(Ws),t&&o(ee),F(lo),F(po),F(ot),F(at),t&&o(Ss),t&&o(Fe),F(mo),t&&o(Vs),t&&o(O),F(fo),F(_o),F(nt),F(rt),t&&o(Bs),t&&o(xe),F(To),t&&o(Hs),t&&o(j),F(bo),F($o),F(lt),F(dt)}}}const ph={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTFeatureExtractor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"},{local:"transformers.TFDeiTModel",title:"TFDeiTModel"},{local:"transformers.TFDeiTForMaskedImageModeling",title:"TFDeiTForMaskedImageModeling"},{local:"transformers.TFDeiTForImageClassification",title:"TFDeiTForImageClassification"},{local:"transformers.TFDeiTForImageClassificationWithTeacher",title:"TFDeiTForImageClassificationWithTeacher"}],title:"DeiT"};function mh(k){return Hc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wh extends Wc{constructor(d){super();Sc(this,d,mh,hh,Vc,{})}}export{wh as default,ph as metadata};
