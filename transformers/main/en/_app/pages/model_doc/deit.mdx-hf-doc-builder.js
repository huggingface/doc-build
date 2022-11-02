import{S as jc,i as Ec,s as Cc,e as s,k as f,w as v,t as i,M as Pc,c as n,d as o,m as g,a as r,x as w,h as l,b as m,G as e,g as T,y as $,q as y,o as D,B as k,v as qc,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ee}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=s("a"),h=i("Github Issue"),_=i("."),this.h()},l(a){d=n(a,"P",{});var c=r(d);b=l(c,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=n(c,"A",{href:!0,rel:!0});var x=r(p);h=l(x,"Github Issue"),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(p,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),m(p,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Ac(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTConfig, DeiTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Nc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Oc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Lc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Note that we provide a script to pre-train this model on custom data in our "),p=s("a"),h=i(`examples
directory`),_=i("."),this.h()},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Note that we provide a script to pre-train this model on custom data in our "),p=n(c,"A",{href:!0,rel:!0});var x=r(p);h=l(x,`examples
directory`),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(p,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),m(p,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Wc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Sc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Vc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Hc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: magpie`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Bc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Uc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Rc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Gc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Jc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Kc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Qc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Xc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassification
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
Predicted <span class="hljs-keyword">class</span>: little blue heron, Egretta caerulea`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Yc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(c,"CODE",{});var x=r(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Zc(F){let d,b,p,h,_;return h=new Ee({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
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
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=n(a,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),p=g(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function eh(F){let d,b,p,h,_,a,c,x,rn,ms,Ce,ps,ne,Pe,sa,vt,ln,na,dn,fs,L,cn,wt,hn,mn,$o,pn,fn,$t,gn,un,gs,yo,_n,us,Do,ra,Tn,_s,ko,bn,Ts,q,ia,vn,wn,re,$n,Fo,yn,Dn,xo,kn,Fn,xn,la,Mn,In,da,jn,En,M,Cn,Mo,Pn,qn,Io,zn,An,ca,Nn,On,ha,Ln,Wn,ma,Sn,Vn,pa,Hn,Bn,jo,Un,Rn,bs,oe,Gn,yt,Jn,Kn,Dt,Qn,Xn,vs,ie,qe,fa,kt,Yn,ga,Zn,ws,z,Ft,er,le,tr,Eo,or,ar,xt,sr,nr,rr,de,ir,Co,lr,dr,Po,cr,hr,mr,ze,$s,ce,Ae,ua,Mt,pr,_a,fr,ys,X,It,gr,Ta,ur,_r,Ne,jt,Tr,ba,br,Ds,he,Oe,va,Et,vr,wa,wr,ks,Y,Ct,$r,Pt,yr,qt,Dr,kr,Fr,W,zt,xr,me,Mr,qo,Ir,jr,$a,Er,Cr,Pr,Le,qr,We,Fs,pe,Se,ya,At,zr,Da,Ar,xs,P,Nt,Nr,Ot,Or,Lt,Lr,Wr,Sr,Ve,Vr,Wt,Hr,St,Br,Ur,Rr,S,Vt,Gr,fe,Jr,zo,Kr,Qr,ka,Xr,Yr,Zr,He,ei,Be,Ms,ge,Ue,Fa,Ht,ti,xa,oi,Is,A,Bt,ai,Ma,si,ni,Ut,ri,Rt,ii,li,di,V,Gt,ci,ue,hi,Ao,mi,pi,Ia,fi,gi,ui,Re,_i,Ge,js,_e,Je,ja,Jt,Ti,Ea,bi,Es,j,Kt,vi,Ca,wi,$i,Pa,yi,Di,qa,ki,Fi,Qt,xi,Xt,Mi,Ii,ji,H,Yt,Ei,Te,Ci,No,Pi,qi,za,zi,Ai,Ni,Ke,Oi,Qe,Cs,be,Xe,Aa,Zt,Li,Na,Wi,Ps,Z,eo,Si,to,Vi,oo,Hi,Bi,Ui,B,ao,Ri,ve,Gi,Oo,Ji,Ki,Oa,Qi,Xi,Yi,Ye,Zi,Ze,qs,we,et,La,so,el,Wa,tl,zs,ee,no,ol,$e,al,ro,sl,nl,io,rl,il,ll,U,lo,dl,ye,cl,Lo,hl,ml,Sa,pl,fl,gl,tt,ul,ot,As,De,at,Va,co,_l,Ha,Tl,Ns,N,ho,bl,Ba,vl,wl,mo,$l,po,yl,Dl,kl,R,fo,Fl,ke,xl,Wo,Ml,Il,Ua,jl,El,Cl,st,Pl,nt,Os,Fe,rt,Ra,go,ql,Ga,zl,Ls,E,uo,Al,Ja,Nl,Ol,Ka,Ll,Wl,Qa,Sl,Vl,_o,Hl,To,Bl,Ul,Rl,G,bo,Gl,xe,Jl,So,Kl,Ql,Xa,Xl,Yl,Zl,it,ed,lt,Ws;return a=new Q({}),Ce=new se({props:{$$slots:{default:[zc]},$$scope:{ctx:F}}}),vt=new Q({}),kt=new Q({}),Ft=new I({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/configuration_deit.py#L37"}}),ze=new Ie({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[Ac]},$$scope:{ctx:F}}}),Mt=new Q({}),It=new I({props:{name:"class transformers.models.deit.image_processing_deit.DeiTImageProcessor",anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_rescale",val:": bool = True"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by
<code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 256, &quot;width&quot;: 256}</code>):
Size of the image after <code>resize</code>. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code> filter, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image. If the input size is smaller than <code>crop_size</code> along any edge, the image
is padded with 0&#x2019;s and then center cropped. Can be overridden by <code>do_center_crop</code> in <code>preprocess</code>.`,name:"do_center_crop"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Desired output size when applying center-cropping. Can be overridden by <code>crop_size</code> in <code>preprocess</code>.`,name:"crop_size"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter in the
<code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/image_processing_deit.py#L46"}}),jt=new I({props:{name:"__call__",anchor:"transformers.models.deit.image_processing_deit.DeiTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),Et=new Q({}),Ct=new I({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L455"}}),zt=new I({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Le=new se({props:{$$slots:{default:[Nc]},$$scope:{ctx:F}}}),We=new Ie({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[Oc]},$$scope:{ctx:F}}}),At=new Q({}),Nt=new I({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L567"}}),Ve=new se({props:{$$slots:{default:[Lc]},$$scope:{ctx:F}}}),Vt=new I({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),He=new se({props:{$$slots:{default:[Wc]},$$scope:{ctx:F}}}),Be=new Ie({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[Sc]},$$scope:{ctx:F}}}),Ht=new Q({}),Bt=new I({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L679"}}),Gt=new I({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Re=new se({props:{$$slots:{default:[Vc]},$$scope:{ctx:F}}}),Ge=new Ie({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[Hc]},$$scope:{ctx:F}}}),Jt=new Q({}),Kt=new I({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_deit.py#L828"}}),Yt=new I({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Ke=new se({props:{$$slots:{default:[Bc]},$$scope:{ctx:F}}}),Qe=new Ie({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[Uc]},$$scope:{ctx:F}}}),Zt=new Q({}),eo=new I({props:{name:"class transformers.TFDeiTModel",anchor:"transformers.TFDeiTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L641"}}),ao=new I({props:{name:"call",anchor:"transformers.TFDeiTModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Ye=new se({props:{$$slots:{default:[Rc]},$$scope:{ctx:F}}}),Ze=new Ie({props:{anchor:"transformers.TFDeiTModel.call.example",$$slots:{default:[Gc]},$$scope:{ctx:F}}}),so=new Q({}),no=new I({props:{name:"class transformers.TFDeiTForMaskedImageModeling",anchor:"transformers.TFDeiTForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L761"}}),lo=new I({props:{name:"call",anchor:"transformers.TFDeiTForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),tt=new se({props:{$$slots:{default:[Jc]},$$scope:{ctx:F}}}),ot=new Ie({props:{anchor:"transformers.TFDeiTForMaskedImageModeling.call.example",$$slots:{default:[Kc]},$$scope:{ctx:F}}}),co=new Q({}),ho=new I({props:{name:"class transformers.TFDeiTForImageClassification",anchor:"transformers.TFDeiTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L882"}}),fo=new I({props:{name:"call",anchor:"transformers.TFDeiTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),st=new se({props:{$$slots:{default:[Qc]},$$scope:{ctx:F}}}),nt=new Ie({props:{anchor:"transformers.TFDeiTForImageClassification.call.example",$$slots:{default:[Xc]},$$scope:{ctx:F}}}),go=new Q({}),uo=new I({props:{name:"class transformers.TFDeiTForImageClassificationWithTeacher",anchor:"transformers.TFDeiTForImageClassificationWithTeacher",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deit/modeling_tf_deit.py#L990"}}),bo=new I({props:{name:"call",anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),it=new se({props:{$$slots:{default:[Yc]},$$scope:{ctx:F}}}),lt=new Ie({props:{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.example",$$slots:{default:[Zc]},$$scope:{ctx:F}}}),{c(){d=s("meta"),b=f(),p=s("h1"),h=s("a"),_=s("span"),v(a.$$.fragment),c=f(),x=s("span"),rn=i("DeiT"),ms=f(),v(Ce.$$.fragment),ps=f(),ne=s("h2"),Pe=s("a"),sa=s("span"),v(vt.$$.fragment),ln=f(),na=s("span"),dn=i("Overview"),fs=f(),L=s("p"),cn=i("The DeiT model was proposed in "),wt=s("a"),hn=i("Training data-efficient image transformers & distillation through attention"),mn=i(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),$o=s("a"),pn=i("Vision Transformer (ViT)"),fn=i(" introduced in "),$t=s("a"),gn=i("Dosovitskiy et al., 2020"),un=i(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),gs=f(),yo=s("p"),_n=i("The abstract from the paper is the following:"),us=f(),Do=s("p"),ra=s("em"),Tn=i(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),_s=f(),ko=s("p"),bn=i("Tips:"),Ts=f(),q=s("ul"),ia=s("li"),vn=i(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),wn=f(),re=s("li"),$n=i(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Fo=s("a"),yn=i("DeiTForImageClassification"),Dn=i(` and (2) corresponds to
`),xo=s("a"),kn=i("DeiTForImageClassificationWithTeacher"),Fn=i("."),xn=f(),la=s("li"),Mn=i(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),In=f(),da=s("li"),jn=i(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),En=f(),M=s("li"),Cn=i(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Mo=s("a"),Pn=i("ViTModel"),qn=i(" or "),Io=s("a"),zn=i("ViTForImageClassification"),An=i(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ca=s("em"),Nn=i("facebook/deit-tiny-patch16-224"),On=i(", "),ha=s("em"),Ln=i("facebook/deit-small-patch16-224"),Wn=i(", "),ma=s("em"),Sn=i("facebook/deit-base-patch16-224"),Vn=i(` and
`),pa=s("em"),Hn=i("facebook/deit-base-patch16-384"),Bn=i(". Note that one should use "),jo=s("a"),Un=i("DeiTFeatureExtractor"),Rn=i(` in order to
prepare images for the model.`),bs=f(),oe=s("p"),Gn=i("This model was contributed by "),yt=s("a"),Jn=i("nielsr"),Kn=i(". The TensorFlow version of this model was added by "),Dt=s("a"),Qn=i("amyeroberts"),Xn=i("."),vs=f(),ie=s("h2"),qe=s("a"),fa=s("span"),v(kt.$$.fragment),Yn=f(),ga=s("span"),Zn=i("DeiTConfig"),ws=f(),z=s("div"),v(Ft.$$.fragment),er=f(),le=s("p"),tr=i("This is the configuration class to store the configuration of a "),Eo=s("a"),or=i("DeiTModel"),ar=i(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),xt=s("a"),sr=i("facebook/deit-base-distilled-patch16-224"),nr=i(`
architecture.`),rr=f(),de=s("p"),ir=i("Configuration objects inherit from "),Co=s("a"),lr=i("PretrainedConfig"),dr=i(` and can be used to control the model outputs. Read the
documentation from `),Po=s("a"),cr=i("PretrainedConfig"),hr=i(" for more information."),mr=f(),v(ze.$$.fragment),$s=f(),ce=s("h2"),Ae=s("a"),ua=s("span"),v(Mt.$$.fragment),pr=f(),_a=s("span"),fr=i("DeiTFeatureExtractor"),ys=f(),X=s("div"),v(It.$$.fragment),gr=f(),Ta=s("p"),ur=i("Constructs a DeiT image processor."),_r=f(),Ne=s("div"),v(jt.$$.fragment),Tr=f(),ba=s("p"),br=i("Preprocess an image or a batch of images."),Ds=f(),he=s("h2"),Oe=s("a"),va=s("span"),v(Et.$$.fragment),vr=f(),wa=s("span"),wr=i("DeiTModel"),ks=f(),Y=s("div"),v(Ct.$$.fragment),$r=f(),Pt=s("p"),yr=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),qt=s("a"),Dr=i("torch.nn.Module"),kr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fr=f(),W=s("div"),v(zt.$$.fragment),xr=f(),me=s("p"),Mr=i("The "),qo=s("a"),Ir=i("DeiTModel"),jr=i(" forward method, overrides the "),$a=s("code"),Er=i("__call__"),Cr=i(" special method."),Pr=f(),v(Le.$$.fragment),qr=f(),v(We.$$.fragment),Fs=f(),pe=s("h2"),Se=s("a"),ya=s("span"),v(At.$$.fragment),zr=f(),Da=s("span"),Ar=i("DeiTForMaskedImageModeling"),xs=f(),P=s("div"),v(Nt.$$.fragment),Nr=f(),Ot=s("p"),Or=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Lt=s("a"),Lr=i("SimMIM"),Wr=i("."),Sr=f(),v(Ve.$$.fragment),Vr=f(),Wt=s("p"),Hr=i("This model is a PyTorch "),St=s("a"),Br=i("torch.nn.Module"),Ur=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rr=f(),S=s("div"),v(Vt.$$.fragment),Gr=f(),fe=s("p"),Jr=i("The "),zo=s("a"),Kr=i("DeiTForMaskedImageModeling"),Qr=i(" forward method, overrides the "),ka=s("code"),Xr=i("__call__"),Yr=i(" special method."),Zr=f(),v(He.$$.fragment),ei=f(),v(Be.$$.fragment),Ms=f(),ge=s("h2"),Ue=s("a"),Fa=s("span"),v(Ht.$$.fragment),ti=f(),xa=s("span"),oi=i("DeiTForImageClassification"),Is=f(),A=s("div"),v(Bt.$$.fragment),ai=f(),Ma=s("p"),si=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ni=f(),Ut=s("p"),ri=i("This model is a PyTorch "),Rt=s("a"),ii=i("torch.nn.Module"),li=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),di=f(),V=s("div"),v(Gt.$$.fragment),ci=f(),ue=s("p"),hi=i("The "),Ao=s("a"),mi=i("DeiTForImageClassification"),pi=i(" forward method, overrides the "),Ia=s("code"),fi=i("__call__"),gi=i(" special method."),ui=f(),v(Re.$$.fragment),_i=f(),v(Ge.$$.fragment),js=f(),_e=s("h2"),Je=s("a"),ja=s("span"),v(Jt.$$.fragment),Ti=f(),Ea=s("span"),bi=i("DeiTForImageClassificationWithTeacher"),Es=f(),j=s("div"),v(Kt.$$.fragment),vi=f(),Ca=s("p"),wi=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),$i=f(),Pa=s("p"),yi=i(".. warning::"),Di=f(),qa=s("p"),ki=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Fi=f(),Qt=s("p"),xi=i("This model is a PyTorch "),Xt=s("a"),Mi=i("torch.nn.Module"),Ii=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ji=f(),H=s("div"),v(Yt.$$.fragment),Ei=f(),Te=s("p"),Ci=i("The "),No=s("a"),Pi=i("DeiTForImageClassificationWithTeacher"),qi=i(" forward method, overrides the "),za=s("code"),zi=i("__call__"),Ai=i(" special method."),Ni=f(),v(Ke.$$.fragment),Oi=f(),v(Qe.$$.fragment),Cs=f(),be=s("h2"),Xe=s("a"),Aa=s("span"),v(Zt.$$.fragment),Li=f(),Na=s("span"),Wi=i("TFDeiTModel"),Ps=f(),Z=s("div"),v(eo.$$.fragment),Si=f(),to=s("p"),Vi=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),oo=s("a"),Hi=i("tf.keras.layers.Layer"),Bi=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Ui=f(),B=s("div"),v(ao.$$.fragment),Ri=f(),ve=s("p"),Gi=i("The "),Oo=s("a"),Ji=i("TFDeiTModel"),Ki=i(" forward method, overrides the "),Oa=s("code"),Qi=i("__call__"),Xi=i(" special method."),Yi=f(),v(Ye.$$.fragment),Zi=f(),v(Ze.$$.fragment),qs=f(),we=s("h2"),et=s("a"),La=s("span"),v(so.$$.fragment),el=f(),Wa=s("span"),tl=i("TFDeiTForMaskedImageModeling"),zs=f(),ee=s("div"),v(no.$$.fragment),ol=f(),$e=s("p"),al=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),ro=s("a"),sl=i("SimMIM"),nl=i(`.
This model is a TensorFlow
`),io=s("a"),rl=i("tf.keras.layers.Layer"),il=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),ll=f(),U=s("div"),v(lo.$$.fragment),dl=f(),ye=s("p"),cl=i("The "),Lo=s("a"),hl=i("TFDeiTForMaskedImageModeling"),ml=i(" forward method, overrides the "),Sa=s("code"),pl=i("__call__"),fl=i(" special method."),gl=f(),v(tt.$$.fragment),ul=f(),v(ot.$$.fragment),As=f(),De=s("h2"),at=s("a"),Va=s("span"),v(co.$$.fragment),_l=f(),Ha=s("span"),Tl=i("TFDeiTForImageClassification"),Ns=f(),N=s("div"),v(ho.$$.fragment),bl=f(),Ba=s("p"),vl=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),wl=f(),mo=s("p"),$l=i(`This model is a TensorFlow
`),po=s("a"),yl=i("tf.keras.layers.Layer"),Dl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),kl=f(),R=s("div"),v(fo.$$.fragment),Fl=f(),ke=s("p"),xl=i("The "),Wo=s("a"),Ml=i("TFDeiTForImageClassification"),Il=i(" forward method, overrides the "),Ua=s("code"),jl=i("__call__"),El=i(" special method."),Cl=f(),v(st.$$.fragment),Pl=f(),v(nt.$$.fragment),Os=f(),Fe=s("h2"),rt=s("a"),Ra=s("span"),v(go.$$.fragment),ql=f(),Ga=s("span"),zl=i("TFDeiTForImageClassificationWithTeacher"),Ls=f(),E=s("div"),v(uo.$$.fragment),Al=f(),Ja=s("p"),Nl=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Ol=f(),Ka=s("p"),Ll=i(".. warning::"),Wl=f(),Qa=s("p"),Sl=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Vl=f(),_o=s("p"),Hl=i(`This model is a TensorFlow
`),To=s("a"),Bl=i("tf.keras.layers.Layer"),Ul=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Rl=f(),G=s("div"),v(bo.$$.fragment),Gl=f(),xe=s("p"),Jl=i("The "),So=s("a"),Kl=i("TFDeiTForImageClassificationWithTeacher"),Ql=i(" forward method, overrides the "),Xa=s("code"),Xl=i("__call__"),Yl=i(" special method."),Zl=f(),v(it.$$.fragment),ed=f(),v(lt.$$.fragment),this.h()},l(t){const u=Pc('[data-svelte="svelte-1phssyn"]',document.head);d=n(u,"META",{name:!0,content:!0}),u.forEach(o),b=g(t),p=n(t,"H1",{class:!0});var vo=r(p);h=n(vo,"A",{id:!0,class:!0,href:!0});var Ya=r(h);_=n(Ya,"SPAN",{});var Za=r(_);w(a.$$.fragment,Za),Za.forEach(o),Ya.forEach(o),c=g(vo),x=n(vo,"SPAN",{});var es=r(x);rn=l(es,"DeiT"),es.forEach(o),vo.forEach(o),ms=g(t),w(Ce.$$.fragment,t),ps=g(t),ne=n(t,"H2",{class:!0});var wo=r(ne);Pe=n(wo,"A",{id:!0,class:!0,href:!0});var ts=r(Pe);sa=n(ts,"SPAN",{});var os=r(sa);w(vt.$$.fragment,os),os.forEach(o),ts.forEach(o),ln=g(wo),na=n(wo,"SPAN",{});var as=r(na);dn=l(as,"Overview"),as.forEach(o),wo.forEach(o),fs=g(t),L=n(t,"P",{});var te=r(L);cn=l(te,"The DeiT model was proposed in "),wt=n(te,"A",{href:!0,rel:!0});var ss=r(wt);hn=l(ss,"Training data-efficient image transformers & distillation through attention"),ss.forEach(o),mn=l(te,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),$o=n(te,"A",{href:!0});var ns=r($o);pn=l(ns,"Vision Transformer (ViT)"),ns.forEach(o),fn=l(te," introduced in "),$t=n(te,"A",{href:!0,rel:!0});var rs=r($t);gn=l(rs,"Dosovitskiy et al., 2020"),rs.forEach(o),un=l(te,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),te.forEach(o),gs=g(t),yo=n(t,"P",{});var is=r(yo);_n=l(is,"The abstract from the paper is the following:"),is.forEach(o),us=g(t),Do=n(t,"P",{});var ls=r(Do);ra=n(ls,"EM",{});var ds=r(ra);Tn=l(ds,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ds.forEach(o),ls.forEach(o),_s=g(t),ko=n(t,"P",{});var cs=r(ko);bn=l(cs,"Tips:"),cs.forEach(o),Ts=g(t),q=n(t,"UL",{});var O=r(q);ia=n(O,"LI",{});var hs=r(ia);vn=l(hs,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),hs.forEach(o),wn=g(O),re=n(O,"LI",{});var Me=r(re);$n=l(Me,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Fo=n(Me,"A",{href:!0});var td=r(Fo);yn=l(td,"DeiTForImageClassification"),td.forEach(o),Dn=l(Me,` and (2) corresponds to
`),xo=n(Me,"A",{href:!0});var od=r(xo);kn=l(od,"DeiTForImageClassificationWithTeacher"),od.forEach(o),Fn=l(Me,"."),Me.forEach(o),xn=g(O),la=n(O,"LI",{});var ad=r(la);Mn=l(ad,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),ad.forEach(o),In=g(O),da=n(O,"LI",{});var sd=r(da);jn=l(sd,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),sd.forEach(o),En=g(O),M=n(O,"LI",{});var C=r(M);Cn=l(C,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Mo=n(C,"A",{href:!0});var nd=r(Mo);Pn=l(nd,"ViTModel"),nd.forEach(o),qn=l(C," or "),Io=n(C,"A",{href:!0});var rd=r(Io);zn=l(rd,"ViTForImageClassification"),rd.forEach(o),An=l(C,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ca=n(C,"EM",{});var id=r(ca);Nn=l(id,"facebook/deit-tiny-patch16-224"),id.forEach(o),On=l(C,", "),ha=n(C,"EM",{});var ld=r(ha);Ln=l(ld,"facebook/deit-small-patch16-224"),ld.forEach(o),Wn=l(C,", "),ma=n(C,"EM",{});var dd=r(ma);Sn=l(dd,"facebook/deit-base-patch16-224"),dd.forEach(o),Vn=l(C,` and
`),pa=n(C,"EM",{});var cd=r(pa);Hn=l(cd,"facebook/deit-base-patch16-384"),cd.forEach(o),Bn=l(C,". Note that one should use "),jo=n(C,"A",{href:!0});var hd=r(jo);Un=l(hd,"DeiTFeatureExtractor"),hd.forEach(o),Rn=l(C,` in order to
prepare images for the model.`),C.forEach(o),O.forEach(o),bs=g(t),oe=n(t,"P",{});var Vo=r(oe);Gn=l(Vo,"This model was contributed by "),yt=n(Vo,"A",{href:!0,rel:!0});var md=r(yt);Jn=l(md,"nielsr"),md.forEach(o),Kn=l(Vo,". The TensorFlow version of this model was added by "),Dt=n(Vo,"A",{href:!0,rel:!0});var pd=r(Dt);Qn=l(pd,"amyeroberts"),pd.forEach(o),Xn=l(Vo,"."),Vo.forEach(o),vs=g(t),ie=n(t,"H2",{class:!0});var Ss=r(ie);qe=n(Ss,"A",{id:!0,class:!0,href:!0});var fd=r(qe);fa=n(fd,"SPAN",{});var gd=r(fa);w(kt.$$.fragment,gd),gd.forEach(o),fd.forEach(o),Yn=g(Ss),ga=n(Ss,"SPAN",{});var ud=r(ga);Zn=l(ud,"DeiTConfig"),ud.forEach(o),Ss.forEach(o),ws=g(t),z=n(t,"DIV",{class:!0});var dt=r(z);w(Ft.$$.fragment,dt),er=g(dt),le=n(dt,"P",{});var Ho=r(le);tr=l(Ho,"This is the configuration class to store the configuration of a "),Eo=n(Ho,"A",{href:!0});var _d=r(Eo);or=l(_d,"DeiTModel"),_d.forEach(o),ar=l(Ho,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),xt=n(Ho,"A",{href:!0,rel:!0});var Td=r(xt);sr=l(Td,"facebook/deit-base-distilled-patch16-224"),Td.forEach(o),nr=l(Ho,`
architecture.`),Ho.forEach(o),rr=g(dt),de=n(dt,"P",{});var Bo=r(de);ir=l(Bo,"Configuration objects inherit from "),Co=n(Bo,"A",{href:!0});var bd=r(Co);lr=l(bd,"PretrainedConfig"),bd.forEach(o),dr=l(Bo,` and can be used to control the model outputs. Read the
documentation from `),Po=n(Bo,"A",{href:!0});var vd=r(Po);cr=l(vd,"PretrainedConfig"),vd.forEach(o),hr=l(Bo," for more information."),Bo.forEach(o),mr=g(dt),w(ze.$$.fragment,dt),dt.forEach(o),$s=g(t),ce=n(t,"H2",{class:!0});var Vs=r(ce);Ae=n(Vs,"A",{id:!0,class:!0,href:!0});var wd=r(Ae);ua=n(wd,"SPAN",{});var $d=r(ua);w(Mt.$$.fragment,$d),$d.forEach(o),wd.forEach(o),pr=g(Vs),_a=n(Vs,"SPAN",{});var yd=r(_a);fr=l(yd,"DeiTFeatureExtractor"),yd.forEach(o),Vs.forEach(o),ys=g(t),X=n(t,"DIV",{class:!0});var Uo=r(X);w(It.$$.fragment,Uo),gr=g(Uo),Ta=n(Uo,"P",{});var Dd=r(Ta);ur=l(Dd,"Constructs a DeiT image processor."),Dd.forEach(o),_r=g(Uo),Ne=n(Uo,"DIV",{class:!0});var Hs=r(Ne);w(jt.$$.fragment,Hs),Tr=g(Hs),ba=n(Hs,"P",{});var kd=r(ba);br=l(kd,"Preprocess an image or a batch of images."),kd.forEach(o),Hs.forEach(o),Uo.forEach(o),Ds=g(t),he=n(t,"H2",{class:!0});var Bs=r(he);Oe=n(Bs,"A",{id:!0,class:!0,href:!0});var Fd=r(Oe);va=n(Fd,"SPAN",{});var xd=r(va);w(Et.$$.fragment,xd),xd.forEach(o),Fd.forEach(o),vr=g(Bs),wa=n(Bs,"SPAN",{});var Md=r(wa);wr=l(Md,"DeiTModel"),Md.forEach(o),Bs.forEach(o),ks=g(t),Y=n(t,"DIV",{class:!0});var Ro=r(Y);w(Ct.$$.fragment,Ro),$r=g(Ro),Pt=n(Ro,"P",{});var Us=r(Pt);yr=l(Us,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),qt=n(Us,"A",{href:!0,rel:!0});var Id=r(qt);Dr=l(Id,"torch.nn.Module"),Id.forEach(o),kr=l(Us,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Us.forEach(o),Fr=g(Ro),W=n(Ro,"DIV",{class:!0});var ct=r(W);w(zt.$$.fragment,ct),xr=g(ct),me=n(ct,"P",{});var Go=r(me);Mr=l(Go,"The "),qo=n(Go,"A",{href:!0});var jd=r(qo);Ir=l(jd,"DeiTModel"),jd.forEach(o),jr=l(Go," forward method, overrides the "),$a=n(Go,"CODE",{});var Ed=r($a);Er=l(Ed,"__call__"),Ed.forEach(o),Cr=l(Go," special method."),Go.forEach(o),Pr=g(ct),w(Le.$$.fragment,ct),qr=g(ct),w(We.$$.fragment,ct),ct.forEach(o),Ro.forEach(o),Fs=g(t),pe=n(t,"H2",{class:!0});var Rs=r(pe);Se=n(Rs,"A",{id:!0,class:!0,href:!0});var Cd=r(Se);ya=n(Cd,"SPAN",{});var Pd=r(ya);w(At.$$.fragment,Pd),Pd.forEach(o),Cd.forEach(o),zr=g(Rs),Da=n(Rs,"SPAN",{});var qd=r(Da);Ar=l(qd,"DeiTForMaskedImageModeling"),qd.forEach(o),Rs.forEach(o),xs=g(t),P=n(t,"DIV",{class:!0});var ae=r(P);w(Nt.$$.fragment,ae),Nr=g(ae),Ot=n(ae,"P",{});var Gs=r(Ot);Or=l(Gs,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Lt=n(Gs,"A",{href:!0,rel:!0});var zd=r(Lt);Lr=l(zd,"SimMIM"),zd.forEach(o),Wr=l(Gs,"."),Gs.forEach(o),Sr=g(ae),w(Ve.$$.fragment,ae),Vr=g(ae),Wt=n(ae,"P",{});var Js=r(Wt);Hr=l(Js,"This model is a PyTorch "),St=n(Js,"A",{href:!0,rel:!0});var Ad=r(St);Br=l(Ad,"torch.nn.Module"),Ad.forEach(o),Ur=l(Js,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Js.forEach(o),Rr=g(ae),S=n(ae,"DIV",{class:!0});var ht=r(S);w(Vt.$$.fragment,ht),Gr=g(ht),fe=n(ht,"P",{});var Jo=r(fe);Jr=l(Jo,"The "),zo=n(Jo,"A",{href:!0});var Nd=r(zo);Kr=l(Nd,"DeiTForMaskedImageModeling"),Nd.forEach(o),Qr=l(Jo," forward method, overrides the "),ka=n(Jo,"CODE",{});var Od=r(ka);Xr=l(Od,"__call__"),Od.forEach(o),Yr=l(Jo," special method."),Jo.forEach(o),Zr=g(ht),w(He.$$.fragment,ht),ei=g(ht),w(Be.$$.fragment,ht),ht.forEach(o),ae.forEach(o),Ms=g(t),ge=n(t,"H2",{class:!0});var Ks=r(ge);Ue=n(Ks,"A",{id:!0,class:!0,href:!0});var Ld=r(Ue);Fa=n(Ld,"SPAN",{});var Wd=r(Fa);w(Ht.$$.fragment,Wd),Wd.forEach(o),Ld.forEach(o),ti=g(Ks),xa=n(Ks,"SPAN",{});var Sd=r(xa);oi=l(Sd,"DeiTForImageClassification"),Sd.forEach(o),Ks.forEach(o),Is=g(t),A=n(t,"DIV",{class:!0});var mt=r(A);w(Bt.$$.fragment,mt),ai=g(mt),Ma=n(mt,"P",{});var Vd=r(Ma);si=l(Vd,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vd.forEach(o),ni=g(mt),Ut=n(mt,"P",{});var Qs=r(Ut);ri=l(Qs,"This model is a PyTorch "),Rt=n(Qs,"A",{href:!0,rel:!0});var Hd=r(Rt);ii=l(Hd,"torch.nn.Module"),Hd.forEach(o),li=l(Qs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qs.forEach(o),di=g(mt),V=n(mt,"DIV",{class:!0});var pt=r(V);w(Gt.$$.fragment,pt),ci=g(pt),ue=n(pt,"P",{});var Ko=r(ue);hi=l(Ko,"The "),Ao=n(Ko,"A",{href:!0});var Bd=r(Ao);mi=l(Bd,"DeiTForImageClassification"),Bd.forEach(o),pi=l(Ko," forward method, overrides the "),Ia=n(Ko,"CODE",{});var Ud=r(Ia);fi=l(Ud,"__call__"),Ud.forEach(o),gi=l(Ko," special method."),Ko.forEach(o),ui=g(pt),w(Re.$$.fragment,pt),_i=g(pt),w(Ge.$$.fragment,pt),pt.forEach(o),mt.forEach(o),js=g(t),_e=n(t,"H2",{class:!0});var Xs=r(_e);Je=n(Xs,"A",{id:!0,class:!0,href:!0});var Rd=r(Je);ja=n(Rd,"SPAN",{});var Gd=r(ja);w(Jt.$$.fragment,Gd),Gd.forEach(o),Rd.forEach(o),Ti=g(Xs),Ea=n(Xs,"SPAN",{});var Jd=r(Ea);bi=l(Jd,"DeiTForImageClassificationWithTeacher"),Jd.forEach(o),Xs.forEach(o),Es=g(t),j=n(t,"DIV",{class:!0});var J=r(j);w(Kt.$$.fragment,J),vi=g(J),Ca=n(J,"P",{});var Kd=r(Ca);wi=l(Kd,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Kd.forEach(o),$i=g(J),Pa=n(J,"P",{});var Qd=r(Pa);yi=l(Qd,".. warning::"),Qd.forEach(o),Di=g(J),qa=n(J,"P",{});var Xd=r(qa);ki=l(Xd,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Xd.forEach(o),Fi=g(J),Qt=n(J,"P",{});var Ys=r(Qt);xi=l(Ys,"This model is a PyTorch "),Xt=n(Ys,"A",{href:!0,rel:!0});var Yd=r(Xt);Mi=l(Yd,"torch.nn.Module"),Yd.forEach(o),Ii=l(Ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys.forEach(o),ji=g(J),H=n(J,"DIV",{class:!0});var ft=r(H);w(Yt.$$.fragment,ft),Ei=g(ft),Te=n(ft,"P",{});var Qo=r(Te);Ci=l(Qo,"The "),No=n(Qo,"A",{href:!0});var Zd=r(No);Pi=l(Zd,"DeiTForImageClassificationWithTeacher"),Zd.forEach(o),qi=l(Qo," forward method, overrides the "),za=n(Qo,"CODE",{});var ec=r(za);zi=l(ec,"__call__"),ec.forEach(o),Ai=l(Qo," special method."),Qo.forEach(o),Ni=g(ft),w(Ke.$$.fragment,ft),Oi=g(ft),w(Qe.$$.fragment,ft),ft.forEach(o),J.forEach(o),Cs=g(t),be=n(t,"H2",{class:!0});var Zs=r(be);Xe=n(Zs,"A",{id:!0,class:!0,href:!0});var tc=r(Xe);Aa=n(tc,"SPAN",{});var oc=r(Aa);w(Zt.$$.fragment,oc),oc.forEach(o),tc.forEach(o),Li=g(Zs),Na=n(Zs,"SPAN",{});var ac=r(Na);Wi=l(ac,"TFDeiTModel"),ac.forEach(o),Zs.forEach(o),Ps=g(t),Z=n(t,"DIV",{class:!0});var Xo=r(Z);w(eo.$$.fragment,Xo),Si=g(Xo),to=n(Xo,"P",{});var en=r(to);Vi=l(en,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),oo=n(en,"A",{href:!0,rel:!0});var sc=r(oo);Hi=l(sc,"tf.keras.layers.Layer"),sc.forEach(o),Bi=l(en,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),en.forEach(o),Ui=g(Xo),B=n(Xo,"DIV",{class:!0});var gt=r(B);w(ao.$$.fragment,gt),Ri=g(gt),ve=n(gt,"P",{});var Yo=r(ve);Gi=l(Yo,"The "),Oo=n(Yo,"A",{href:!0});var nc=r(Oo);Ji=l(nc,"TFDeiTModel"),nc.forEach(o),Ki=l(Yo," forward method, overrides the "),Oa=n(Yo,"CODE",{});var rc=r(Oa);Qi=l(rc,"__call__"),rc.forEach(o),Xi=l(Yo," special method."),Yo.forEach(o),Yi=g(gt),w(Ye.$$.fragment,gt),Zi=g(gt),w(Ze.$$.fragment,gt),gt.forEach(o),Xo.forEach(o),qs=g(t),we=n(t,"H2",{class:!0});var tn=r(we);et=n(tn,"A",{id:!0,class:!0,href:!0});var ic=r(et);La=n(ic,"SPAN",{});var lc=r(La);w(so.$$.fragment,lc),lc.forEach(o),ic.forEach(o),el=g(tn),Wa=n(tn,"SPAN",{});var dc=r(Wa);tl=l(dc,"TFDeiTForMaskedImageModeling"),dc.forEach(o),tn.forEach(o),zs=g(t),ee=n(t,"DIV",{class:!0});var Zo=r(ee);w(no.$$.fragment,Zo),ol=g(Zo),$e=n(Zo,"P",{});var ea=r($e);al=l(ea,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),ro=n(ea,"A",{href:!0,rel:!0});var cc=r(ro);sl=l(cc,"SimMIM"),cc.forEach(o),nl=l(ea,`.
This model is a TensorFlow
`),io=n(ea,"A",{href:!0,rel:!0});var hc=r(io);rl=l(hc,"tf.keras.layers.Layer"),hc.forEach(o),il=l(ea,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),ea.forEach(o),ll=g(Zo),U=n(Zo,"DIV",{class:!0});var ut=r(U);w(lo.$$.fragment,ut),dl=g(ut),ye=n(ut,"P",{});var ta=r(ye);cl=l(ta,"The "),Lo=n(ta,"A",{href:!0});var mc=r(Lo);hl=l(mc,"TFDeiTForMaskedImageModeling"),mc.forEach(o),ml=l(ta," forward method, overrides the "),Sa=n(ta,"CODE",{});var pc=r(Sa);pl=l(pc,"__call__"),pc.forEach(o),fl=l(ta," special method."),ta.forEach(o),gl=g(ut),w(tt.$$.fragment,ut),ul=g(ut),w(ot.$$.fragment,ut),ut.forEach(o),Zo.forEach(o),As=g(t),De=n(t,"H2",{class:!0});var on=r(De);at=n(on,"A",{id:!0,class:!0,href:!0});var fc=r(at);Va=n(fc,"SPAN",{});var gc=r(Va);w(co.$$.fragment,gc),gc.forEach(o),fc.forEach(o),_l=g(on),Ha=n(on,"SPAN",{});var uc=r(Ha);Tl=l(uc,"TFDeiTForImageClassification"),uc.forEach(o),on.forEach(o),Ns=g(t),N=n(t,"DIV",{class:!0});var _t=r(N);w(ho.$$.fragment,_t),bl=g(_t),Ba=n(_t,"P",{});var _c=r(Ba);vl=l(_c,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),_c.forEach(o),wl=g(_t),mo=n(_t,"P",{});var an=r(mo);$l=l(an,`This model is a TensorFlow
`),po=n(an,"A",{href:!0,rel:!0});var Tc=r(po);yl=l(Tc,"tf.keras.layers.Layer"),Tc.forEach(o),Dl=l(an,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),an.forEach(o),kl=g(_t),R=n(_t,"DIV",{class:!0});var Tt=r(R);w(fo.$$.fragment,Tt),Fl=g(Tt),ke=n(Tt,"P",{});var oa=r(ke);xl=l(oa,"The "),Wo=n(oa,"A",{href:!0});var bc=r(Wo);Ml=l(bc,"TFDeiTForImageClassification"),bc.forEach(o),Il=l(oa," forward method, overrides the "),Ua=n(oa,"CODE",{});var vc=r(Ua);jl=l(vc,"__call__"),vc.forEach(o),El=l(oa," special method."),oa.forEach(o),Cl=g(Tt),w(st.$$.fragment,Tt),Pl=g(Tt),w(nt.$$.fragment,Tt),Tt.forEach(o),_t.forEach(o),Os=g(t),Fe=n(t,"H2",{class:!0});var sn=r(Fe);rt=n(sn,"A",{id:!0,class:!0,href:!0});var wc=r(rt);Ra=n(wc,"SPAN",{});var $c=r(Ra);w(go.$$.fragment,$c),$c.forEach(o),wc.forEach(o),ql=g(sn),Ga=n(sn,"SPAN",{});var yc=r(Ga);zl=l(yc,"TFDeiTForImageClassificationWithTeacher"),yc.forEach(o),sn.forEach(o),Ls=g(t),E=n(t,"DIV",{class:!0});var K=r(E);w(uo.$$.fragment,K),Al=g(K),Ja=n(K,"P",{});var Dc=r(Ja);Nl=l(Dc,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Dc.forEach(o),Ol=g(K),Ka=n(K,"P",{});var kc=r(Ka);Ll=l(kc,".. warning::"),kc.forEach(o),Wl=g(K),Qa=n(K,"P",{});var Fc=r(Qa);Sl=l(Fc,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Fc.forEach(o),Vl=g(K),_o=n(K,"P",{});var nn=r(_o);Hl=l(nn,`This model is a TensorFlow
`),To=n(nn,"A",{href:!0,rel:!0});var xc=r(To);Bl=l(xc,"tf.keras.layers.Layer"),xc.forEach(o),Ul=l(nn,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),nn.forEach(o),Rl=g(K),G=n(K,"DIV",{class:!0});var bt=r(G);w(bo.$$.fragment,bt),Gl=g(bt),xe=n(bt,"P",{});var aa=r(xe);Jl=l(aa,"The "),So=n(aa,"A",{href:!0});var Mc=r(So);Kl=l(Mc,"TFDeiTForImageClassificationWithTeacher"),Mc.forEach(o),Ql=l(aa," forward method, overrides the "),Xa=n(aa,"CODE",{});var Ic=r(Xa);Xl=l(Ic,"__call__"),Ic.forEach(o),Yl=l(aa," special method."),aa.forEach(o),Zl=g(bt),w(it.$$.fragment,bt),ed=g(bt),w(lt.$$.fragment,bt),bt.forEach(o),K.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(th)),m(h,"id","deit"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#deit"),m(p,"class","relative group"),m(Pe,"id","overview"),m(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pe,"href","#overview"),m(ne,"class","relative group"),m(wt,"href","https://arxiv.org/abs/2012.12877"),m(wt,"rel","nofollow"),m($o,"href","vit"),m($t,"href","https://arxiv.org/abs/2010.11929"),m($t,"rel","nofollow"),m(Fo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),m(xo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(Mo,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),m(Io,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),m(jo,"href","/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor"),m(yt,"href","https://huggingface.co/nielsr"),m(yt,"rel","nofollow"),m(Dt,"href","https://huggingface.co/amyeroberts"),m(Dt,"rel","nofollow"),m(qe,"id","transformers.DeiTConfig"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.DeiTConfig"),m(ie,"class","relative group"),m(Eo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),m(xt,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),m(xt,"rel","nofollow"),m(Co,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Po,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"id","transformers.models.deit.image_processing_deit.DeiTImageProcessor"),m(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ae,"href","#transformers.models.deit.image_processing_deit.DeiTImageProcessor"),m(ce,"class","relative group"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"id","transformers.DeiTModel"),m(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oe,"href","#transformers.DeiTModel"),m(he,"class","relative group"),m(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qt,"rel","nofollow"),m(qo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTModel"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"id","transformers.DeiTForMaskedImageModeling"),m(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Se,"href","#transformers.DeiTForMaskedImageModeling"),m(pe,"class","relative group"),m(Lt,"href","https://arxiv.org/abs/2111.09886"),m(Lt,"rel","nofollow"),m(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(St,"rel","nofollow"),m(zo,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"id","transformers.DeiTForImageClassification"),m(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ue,"href","#transformers.DeiTForImageClassification"),m(ge,"class","relative group"),m(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Rt,"rel","nofollow"),m(Ao,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassification"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"id","transformers.DeiTForImageClassificationWithTeacher"),m(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Je,"href","#transformers.DeiTForImageClassificationWithTeacher"),m(_e,"class","relative group"),m(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Xt,"rel","nofollow"),m(No,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"id","transformers.TFDeiTModel"),m(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xe,"href","#transformers.TFDeiTModel"),m(be,"class","relative group"),m(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(oo,"rel","nofollow"),m(Oo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTModel"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"id","transformers.TFDeiTForMaskedImageModeling"),m(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(et,"href","#transformers.TFDeiTForMaskedImageModeling"),m(we,"class","relative group"),m(ro,"href","https://arxiv.org/abs/2111.09886"),m(ro,"rel","nofollow"),m(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(io,"rel","nofollow"),m(Lo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForMaskedImageModeling"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"id","transformers.TFDeiTForImageClassification"),m(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(at,"href","#transformers.TFDeiTForImageClassification"),m(De,"class","relative group"),m(po,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(po,"rel","nofollow"),m(Wo,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassification"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"id","transformers.TFDeiTForImageClassificationWithTeacher"),m(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(rt,"href","#transformers.TFDeiTForImageClassificationWithTeacher"),m(Fe,"class","relative group"),m(To,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(To,"rel","nofollow"),m(So,"href","/docs/transformers/main/en/model_doc/deit#transformers.TFDeiTForImageClassificationWithTeacher"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),T(t,b,u),T(t,p,u),e(p,h),e(h,_),$(a,_,null),e(p,c),e(p,x),e(x,rn),T(t,ms,u),$(Ce,t,u),T(t,ps,u),T(t,ne,u),e(ne,Pe),e(Pe,sa),$(vt,sa,null),e(ne,ln),e(ne,na),e(na,dn),T(t,fs,u),T(t,L,u),e(L,cn),e(L,wt),e(wt,hn),e(L,mn),e(L,$o),e($o,pn),e(L,fn),e(L,$t),e($t,gn),e(L,un),T(t,gs,u),T(t,yo,u),e(yo,_n),T(t,us,u),T(t,Do,u),e(Do,ra),e(ra,Tn),T(t,_s,u),T(t,ko,u),e(ko,bn),T(t,Ts,u),T(t,q,u),e(q,ia),e(ia,vn),e(q,wn),e(q,re),e(re,$n),e(re,Fo),e(Fo,yn),e(re,Dn),e(re,xo),e(xo,kn),e(re,Fn),e(q,xn),e(q,la),e(la,Mn),e(q,In),e(q,da),e(da,jn),e(q,En),e(q,M),e(M,Cn),e(M,Mo),e(Mo,Pn),e(M,qn),e(M,Io),e(Io,zn),e(M,An),e(M,ca),e(ca,Nn),e(M,On),e(M,ha),e(ha,Ln),e(M,Wn),e(M,ma),e(ma,Sn),e(M,Vn),e(M,pa),e(pa,Hn),e(M,Bn),e(M,jo),e(jo,Un),e(M,Rn),T(t,bs,u),T(t,oe,u),e(oe,Gn),e(oe,yt),e(yt,Jn),e(oe,Kn),e(oe,Dt),e(Dt,Qn),e(oe,Xn),T(t,vs,u),T(t,ie,u),e(ie,qe),e(qe,fa),$(kt,fa,null),e(ie,Yn),e(ie,ga),e(ga,Zn),T(t,ws,u),T(t,z,u),$(Ft,z,null),e(z,er),e(z,le),e(le,tr),e(le,Eo),e(Eo,or),e(le,ar),e(le,xt),e(xt,sr),e(le,nr),e(z,rr),e(z,de),e(de,ir),e(de,Co),e(Co,lr),e(de,dr),e(de,Po),e(Po,cr),e(de,hr),e(z,mr),$(ze,z,null),T(t,$s,u),T(t,ce,u),e(ce,Ae),e(Ae,ua),$(Mt,ua,null),e(ce,pr),e(ce,_a),e(_a,fr),T(t,ys,u),T(t,X,u),$(It,X,null),e(X,gr),e(X,Ta),e(Ta,ur),e(X,_r),e(X,Ne),$(jt,Ne,null),e(Ne,Tr),e(Ne,ba),e(ba,br),T(t,Ds,u),T(t,he,u),e(he,Oe),e(Oe,va),$(Et,va,null),e(he,vr),e(he,wa),e(wa,wr),T(t,ks,u),T(t,Y,u),$(Ct,Y,null),e(Y,$r),e(Y,Pt),e(Pt,yr),e(Pt,qt),e(qt,Dr),e(Pt,kr),e(Y,Fr),e(Y,W),$(zt,W,null),e(W,xr),e(W,me),e(me,Mr),e(me,qo),e(qo,Ir),e(me,jr),e(me,$a),e($a,Er),e(me,Cr),e(W,Pr),$(Le,W,null),e(W,qr),$(We,W,null),T(t,Fs,u),T(t,pe,u),e(pe,Se),e(Se,ya),$(At,ya,null),e(pe,zr),e(pe,Da),e(Da,Ar),T(t,xs,u),T(t,P,u),$(Nt,P,null),e(P,Nr),e(P,Ot),e(Ot,Or),e(Ot,Lt),e(Lt,Lr),e(Ot,Wr),e(P,Sr),$(Ve,P,null),e(P,Vr),e(P,Wt),e(Wt,Hr),e(Wt,St),e(St,Br),e(Wt,Ur),e(P,Rr),e(P,S),$(Vt,S,null),e(S,Gr),e(S,fe),e(fe,Jr),e(fe,zo),e(zo,Kr),e(fe,Qr),e(fe,ka),e(ka,Xr),e(fe,Yr),e(S,Zr),$(He,S,null),e(S,ei),$(Be,S,null),T(t,Ms,u),T(t,ge,u),e(ge,Ue),e(Ue,Fa),$(Ht,Fa,null),e(ge,ti),e(ge,xa),e(xa,oi),T(t,Is,u),T(t,A,u),$(Bt,A,null),e(A,ai),e(A,Ma),e(Ma,si),e(A,ni),e(A,Ut),e(Ut,ri),e(Ut,Rt),e(Rt,ii),e(Ut,li),e(A,di),e(A,V),$(Gt,V,null),e(V,ci),e(V,ue),e(ue,hi),e(ue,Ao),e(Ao,mi),e(ue,pi),e(ue,Ia),e(Ia,fi),e(ue,gi),e(V,ui),$(Re,V,null),e(V,_i),$(Ge,V,null),T(t,js,u),T(t,_e,u),e(_e,Je),e(Je,ja),$(Jt,ja,null),e(_e,Ti),e(_e,Ea),e(Ea,bi),T(t,Es,u),T(t,j,u),$(Kt,j,null),e(j,vi),e(j,Ca),e(Ca,wi),e(j,$i),e(j,Pa),e(Pa,yi),e(j,Di),e(j,qa),e(qa,ki),e(j,Fi),e(j,Qt),e(Qt,xi),e(Qt,Xt),e(Xt,Mi),e(Qt,Ii),e(j,ji),e(j,H),$(Yt,H,null),e(H,Ei),e(H,Te),e(Te,Ci),e(Te,No),e(No,Pi),e(Te,qi),e(Te,za),e(za,zi),e(Te,Ai),e(H,Ni),$(Ke,H,null),e(H,Oi),$(Qe,H,null),T(t,Cs,u),T(t,be,u),e(be,Xe),e(Xe,Aa),$(Zt,Aa,null),e(be,Li),e(be,Na),e(Na,Wi),T(t,Ps,u),T(t,Z,u),$(eo,Z,null),e(Z,Si),e(Z,to),e(to,Vi),e(to,oo),e(oo,Hi),e(to,Bi),e(Z,Ui),e(Z,B),$(ao,B,null),e(B,Ri),e(B,ve),e(ve,Gi),e(ve,Oo),e(Oo,Ji),e(ve,Ki),e(ve,Oa),e(Oa,Qi),e(ve,Xi),e(B,Yi),$(Ye,B,null),e(B,Zi),$(Ze,B,null),T(t,qs,u),T(t,we,u),e(we,et),e(et,La),$(so,La,null),e(we,el),e(we,Wa),e(Wa,tl),T(t,zs,u),T(t,ee,u),$(no,ee,null),e(ee,ol),e(ee,$e),e($e,al),e($e,ro),e(ro,sl),e($e,nl),e($e,io),e(io,rl),e($e,il),e(ee,ll),e(ee,U),$(lo,U,null),e(U,dl),e(U,ye),e(ye,cl),e(ye,Lo),e(Lo,hl),e(ye,ml),e(ye,Sa),e(Sa,pl),e(ye,fl),e(U,gl),$(tt,U,null),e(U,ul),$(ot,U,null),T(t,As,u),T(t,De,u),e(De,at),e(at,Va),$(co,Va,null),e(De,_l),e(De,Ha),e(Ha,Tl),T(t,Ns,u),T(t,N,u),$(ho,N,null),e(N,bl),e(N,Ba),e(Ba,vl),e(N,wl),e(N,mo),e(mo,$l),e(mo,po),e(po,yl),e(mo,Dl),e(N,kl),e(N,R),$(fo,R,null),e(R,Fl),e(R,ke),e(ke,xl),e(ke,Wo),e(Wo,Ml),e(ke,Il),e(ke,Ua),e(Ua,jl),e(ke,El),e(R,Cl),$(st,R,null),e(R,Pl),$(nt,R,null),T(t,Os,u),T(t,Fe,u),e(Fe,rt),e(rt,Ra),$(go,Ra,null),e(Fe,ql),e(Fe,Ga),e(Ga,zl),T(t,Ls,u),T(t,E,u),$(uo,E,null),e(E,Al),e(E,Ja),e(Ja,Nl),e(E,Ol),e(E,Ka),e(Ka,Ll),e(E,Wl),e(E,Qa),e(Qa,Sl),e(E,Vl),e(E,_o),e(_o,Hl),e(_o,To),e(To,Bl),e(_o,Ul),e(E,Rl),e(E,G),$(bo,G,null),e(G,Gl),e(G,xe),e(xe,Jl),e(xe,So),e(So,Kl),e(xe,Ql),e(xe,Xa),e(Xa,Xl),e(xe,Yl),e(G,Zl),$(it,G,null),e(G,ed),$(lt,G,null),Ws=!0},p(t,[u]){const vo={};u&2&&(vo.$$scope={dirty:u,ctx:t}),Ce.$set(vo);const Ya={};u&2&&(Ya.$$scope={dirty:u,ctx:t}),ze.$set(Ya);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:t}),Le.$set(Za);const es={};u&2&&(es.$$scope={dirty:u,ctx:t}),We.$set(es);const wo={};u&2&&(wo.$$scope={dirty:u,ctx:t}),Ve.$set(wo);const ts={};u&2&&(ts.$$scope={dirty:u,ctx:t}),He.$set(ts);const os={};u&2&&(os.$$scope={dirty:u,ctx:t}),Be.$set(os);const as={};u&2&&(as.$$scope={dirty:u,ctx:t}),Re.$set(as);const te={};u&2&&(te.$$scope={dirty:u,ctx:t}),Ge.$set(te);const ss={};u&2&&(ss.$$scope={dirty:u,ctx:t}),Ke.$set(ss);const ns={};u&2&&(ns.$$scope={dirty:u,ctx:t}),Qe.$set(ns);const rs={};u&2&&(rs.$$scope={dirty:u,ctx:t}),Ye.$set(rs);const is={};u&2&&(is.$$scope={dirty:u,ctx:t}),Ze.$set(is);const ls={};u&2&&(ls.$$scope={dirty:u,ctx:t}),tt.$set(ls);const ds={};u&2&&(ds.$$scope={dirty:u,ctx:t}),ot.$set(ds);const cs={};u&2&&(cs.$$scope={dirty:u,ctx:t}),st.$set(cs);const O={};u&2&&(O.$$scope={dirty:u,ctx:t}),nt.$set(O);const hs={};u&2&&(hs.$$scope={dirty:u,ctx:t}),it.$set(hs);const Me={};u&2&&(Me.$$scope={dirty:u,ctx:t}),lt.$set(Me)},i(t){Ws||(y(a.$$.fragment,t),y(Ce.$$.fragment,t),y(vt.$$.fragment,t),y(kt.$$.fragment,t),y(Ft.$$.fragment,t),y(ze.$$.fragment,t),y(Mt.$$.fragment,t),y(It.$$.fragment,t),y(jt.$$.fragment,t),y(Et.$$.fragment,t),y(Ct.$$.fragment,t),y(zt.$$.fragment,t),y(Le.$$.fragment,t),y(We.$$.fragment,t),y(At.$$.fragment,t),y(Nt.$$.fragment,t),y(Ve.$$.fragment,t),y(Vt.$$.fragment,t),y(He.$$.fragment,t),y(Be.$$.fragment,t),y(Ht.$$.fragment,t),y(Bt.$$.fragment,t),y(Gt.$$.fragment,t),y(Re.$$.fragment,t),y(Ge.$$.fragment,t),y(Jt.$$.fragment,t),y(Kt.$$.fragment,t),y(Yt.$$.fragment,t),y(Ke.$$.fragment,t),y(Qe.$$.fragment,t),y(Zt.$$.fragment,t),y(eo.$$.fragment,t),y(ao.$$.fragment,t),y(Ye.$$.fragment,t),y(Ze.$$.fragment,t),y(so.$$.fragment,t),y(no.$$.fragment,t),y(lo.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(co.$$.fragment,t),y(ho.$$.fragment,t),y(fo.$$.fragment,t),y(st.$$.fragment,t),y(nt.$$.fragment,t),y(go.$$.fragment,t),y(uo.$$.fragment,t),y(bo.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),Ws=!0)},o(t){D(a.$$.fragment,t),D(Ce.$$.fragment,t),D(vt.$$.fragment,t),D(kt.$$.fragment,t),D(Ft.$$.fragment,t),D(ze.$$.fragment,t),D(Mt.$$.fragment,t),D(It.$$.fragment,t),D(jt.$$.fragment,t),D(Et.$$.fragment,t),D(Ct.$$.fragment,t),D(zt.$$.fragment,t),D(Le.$$.fragment,t),D(We.$$.fragment,t),D(At.$$.fragment,t),D(Nt.$$.fragment,t),D(Ve.$$.fragment,t),D(Vt.$$.fragment,t),D(He.$$.fragment,t),D(Be.$$.fragment,t),D(Ht.$$.fragment,t),D(Bt.$$.fragment,t),D(Gt.$$.fragment,t),D(Re.$$.fragment,t),D(Ge.$$.fragment,t),D(Jt.$$.fragment,t),D(Kt.$$.fragment,t),D(Yt.$$.fragment,t),D(Ke.$$.fragment,t),D(Qe.$$.fragment,t),D(Zt.$$.fragment,t),D(eo.$$.fragment,t),D(ao.$$.fragment,t),D(Ye.$$.fragment,t),D(Ze.$$.fragment,t),D(so.$$.fragment,t),D(no.$$.fragment,t),D(lo.$$.fragment,t),D(tt.$$.fragment,t),D(ot.$$.fragment,t),D(co.$$.fragment,t),D(ho.$$.fragment,t),D(fo.$$.fragment,t),D(st.$$.fragment,t),D(nt.$$.fragment,t),D(go.$$.fragment,t),D(uo.$$.fragment,t),D(bo.$$.fragment,t),D(it.$$.fragment,t),D(lt.$$.fragment,t),Ws=!1},d(t){o(d),t&&o(b),t&&o(p),k(a),t&&o(ms),k(Ce,t),t&&o(ps),t&&o(ne),k(vt),t&&o(fs),t&&o(L),t&&o(gs),t&&o(yo),t&&o(us),t&&o(Do),t&&o(_s),t&&o(ko),t&&o(Ts),t&&o(q),t&&o(bs),t&&o(oe),t&&o(vs),t&&o(ie),k(kt),t&&o(ws),t&&o(z),k(Ft),k(ze),t&&o($s),t&&o(ce),k(Mt),t&&o(ys),t&&o(X),k(It),k(jt),t&&o(Ds),t&&o(he),k(Et),t&&o(ks),t&&o(Y),k(Ct),k(zt),k(Le),k(We),t&&o(Fs),t&&o(pe),k(At),t&&o(xs),t&&o(P),k(Nt),k(Ve),k(Vt),k(He),k(Be),t&&o(Ms),t&&o(ge),k(Ht),t&&o(Is),t&&o(A),k(Bt),k(Gt),k(Re),k(Ge),t&&o(js),t&&o(_e),k(Jt),t&&o(Es),t&&o(j),k(Kt),k(Yt),k(Ke),k(Qe),t&&o(Cs),t&&o(be),k(Zt),t&&o(Ps),t&&o(Z),k(eo),k(ao),k(Ye),k(Ze),t&&o(qs),t&&o(we),k(so),t&&o(zs),t&&o(ee),k(no),k(lo),k(tt),k(ot),t&&o(As),t&&o(De),k(co),t&&o(Ns),t&&o(N),k(ho),k(fo),k(st),k(nt),t&&o(Os),t&&o(Fe),k(go),t&&o(Ls),t&&o(E),k(uo),k(bo),k(it),k(lt)}}}const th={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.models.deit.image_processing_deit.DeiTImageProcessor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"},{local:"transformers.TFDeiTModel",title:"TFDeiTModel"},{local:"transformers.TFDeiTForMaskedImageModeling",title:"TFDeiTForMaskedImageModeling"},{local:"transformers.TFDeiTForImageClassification",title:"TFDeiTForImageClassification"},{local:"transformers.TFDeiTForImageClassificationWithTeacher",title:"TFDeiTForImageClassificationWithTeacher"}],title:"DeiT"};function oh(F){return qc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dh extends jc{constructor(d){super();Ec(this,d,oh,eh,Cc,{})}}export{dh as default,th as metadata};
