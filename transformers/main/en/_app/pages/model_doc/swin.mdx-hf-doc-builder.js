import{S as Zi,i as Gi,s as Ji,e as r,k as u,w as v,t as n,M as Qi,c as i,d as o,m as g,a as l,x as $,h as a,b as h,N as Xi,G as e,g as _,y as T,q as y,o as S,B as k,v as el,L as Dt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ot}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Lt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Nt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function tl(F){let d,b;return d=new Lt({props:{code:`from transformers import SwinModel, SwinConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){v(d.$$.fragment)},l(p){$(d.$$.fragment,p)},m(p,m){T(d,p,m),b=!0},p:Dt,i(p){b||(y(d.$$.fragment,p),b=!0)},o(p){S(d.$$.fragment,p),b=!1},d(p){k(d,p)}}}function ol(F){let d,b,p,m,w;return{c(){d=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i(c,"CODE",{});var x=l(p);m=a(x,"Module"),x.forEach(o),w=a(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,b),e(d,p),e(p,m),e(d,w)},d(s){s&&o(d)}}}function sl(F){let d,b,p,m,w;return m=new Lt({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){d=r("p"),b=n("Example:"),p=u(),v(m.$$.fragment)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Example:"),c.forEach(o),p=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,b),_(s,p,c),T(m,s,c),w=!0},p:Dt,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(p),k(m,s)}}}function nl(F){let d,b,p,m,w;return{c(){d=r("p"),b=n("Note that we provide a script to pre-train this model on custom data in our "),p=r("a"),m=n(`examples
directory`),w=n("."),this.h()},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Note that we provide a script to pre-train this model on custom data in our "),p=i(c,"A",{href:!0,rel:!0});var x=l(p);m=a(x,`examples
directory`),x.forEach(o),w=a(c,"."),c.forEach(o),this.h()},h(){h(p,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),h(p,"rel","nofollow")},m(s,c){_(s,d,c),e(d,b),e(d,p),e(p,m),e(d,w)},d(s){s&&o(d)}}}function al(F){let d,b,p,m,w;return{c(){d=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i(c,"CODE",{});var x=l(p);m=a(x,"Module"),x.forEach(o),w=a(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,b),e(d,p),e(p,m),e(d,w)},d(s){s&&o(d)}}}function rl(F){let d,b,p,m,w;return m=new Lt({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=r("p"),b=n("Examples:"),p=u(),v(m.$$.fragment)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Examples:"),c.forEach(o),p=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,b),_(s,p,c),T(m,s,c),w=!0},p:Dt,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(p),k(m,s)}}}function il(F){let d,b,p,m,w;return{c(){d=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i(c,"CODE",{});var x=l(p);m=a(x,"Module"),x.forEach(o),w=a(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,b),e(d,p),e(p,m),e(d,w)},d(s){s&&o(d)}}}function ll(F){let d,b,p,m,w;return m=new Lt({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
tabby, tabby cat`}}),{c(){d=r("p"),b=n("Example:"),p=u(),v(m.$$.fragment)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Example:"),c.forEach(o),p=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,b),_(s,p,c),T(m,s,c),w=!0},p:Dt,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(p),k(m,s)}}}function dl(F){let d,b,p,m,w;return{c(){d=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i(c,"CODE",{});var x=l(p);m=a(x,"Module"),x.forEach(o),w=a(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,b),e(d,p),e(p,m),e(d,w)},d(s){s&&o(d)}}}function cl(F){let d,b,p,m,w;return m=new Lt({props:{code:`from transformers import AutoFeatureExtractor, TFSwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){d=r("p"),b=n("Example:"),p=u(),v(m.$$.fragment)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Example:"),c.forEach(o),p=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,b),_(s,p,c),T(m,s,c),w=!0},p:Dt,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(p),k(m,s)}}}function pl(F){let d,b,p,m,w;return{c(){d=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i(c,"CODE",{});var x=l(p);m=a(x,"Module"),x.forEach(o),w=a(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,b),e(d,p),e(p,m),e(d,w)},d(s){s&&o(d)}}}function hl(F){let d,b,p,m,w;return m=new Lt({props:{code:`from transformers import AutoFeatureExtractor, TFSwinForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=r("p"),b=n("Examples:"),p=u(),v(m.$$.fragment)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Examples:"),c.forEach(o),p=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,b),_(s,p,c),T(m,s,c),w=!0},p:Dt,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(p),k(m,s)}}}function ml(F){let d,b,p,m,w;return{c(){d=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i(c,"CODE",{});var x=l(p);m=a(x,"Module"),x.forEach(o),w=a(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,d,c),e(d,b),e(d,p),e(p,m),e(d,w)},d(s){s&&o(d)}}}function fl(F){let d,b,p,m,w;return m=new Lt({props:{code:`from transformers import AutoFeatureExtractor, TFSwinForImageClassification
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
tabby, tabby cat`}}),{c(){d=r("p"),b=n("Example:"),p=u(),v(m.$$.fragment)},l(s){d=i(s,"P",{});var c=l(d);b=a(c,"Example:"),c.forEach(o),p=g(s),$(m.$$.fragment,s)},m(s,c){_(s,d,c),e(d,b),_(s,p,c),T(m,s,c),w=!0},p:Dt,i(s){w||(y(m.$$.fragment,s),w=!0)},o(s){S(m.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(p),k(m,s)}}}function ul(F){let d,b,p,m,w,s,c,x,Bs,as,R,pe,uo,Ke,Ks,go,Rs,rs,he,Ys,Re,Zs,Gs,is,Ht,Js,ls,Wt,_o,Qs,ds,Ut,Xs,cs,B,Ye,en,Vt,tn,on,sn,Ze,nn,wo,an,rn,ln,M,dn,bo,cn,pn,vo,hn,mn,$o,fn,un,To,gn,_n,yo,wn,bn,So,vn,$n,ko,Tn,yn,ps,me,Wr,hs,fe,Sn,Bt,kn,Fn,ms,P,xn,Ge,Mn,En,Je,jn,In,Qe,Cn,An,fs,Y,ue,Fo,Xe,qn,xo,Pn,us,I,et,zn,Z,On,Kt,Nn,Dn,tt,Ln,Hn,Wn,G,Un,Rt,Vn,Bn,Yt,Kn,Rn,Yn,ge,gs,J,_e,Mo,ot,Zn,Eo,Gn,_s,W,st,Jn,nt,Qn,at,Xn,ea,ta,z,rt,oa,Q,sa,Zt,na,aa,jo,ra,ia,la,we,da,be,ws,X,ve,Io,it,ca,Co,pa,bs,j,lt,ha,dt,ma,ct,fa,ua,ga,$e,_a,pt,wa,ht,ba,va,$a,O,mt,Ta,ee,ya,Gt,Sa,ka,Ao,Fa,xa,Ma,Te,Ea,ye,vs,te,Se,qo,ft,ja,Po,Ia,$s,C,ut,Ca,zo,Aa,qa,gt,Pa,_t,za,Oa,Na,N,wt,Da,oe,La,Jt,Ha,Wa,Oo,Ua,Va,Ba,ke,Ka,Fe,Ts,se,xe,No,bt,Ra,Do,Ya,ys,U,vt,Za,$t,Ga,Tt,Ja,Qa,Xa,D,yt,er,ne,tr,Qt,or,sr,Lo,nr,ar,rr,Me,ir,Ee,Ss,ae,je,Ho,St,lr,Wo,dr,ks,V,kt,cr,re,pr,Ft,hr,mr,xt,fr,ur,gr,L,Mt,_r,ie,wr,Xt,br,vr,Uo,$r,Tr,yr,Ie,Sr,Ce,Fs,le,Ae,Vo,Et,kr,Bo,Fr,xs,A,jt,xr,Ko,Mr,Er,It,jr,Ct,Ir,Cr,Ar,H,At,qr,de,Pr,eo,zr,Or,Ro,Nr,Dr,Lr,qe,Hr,Pe,Ms;return s=new ce({}),Ke=new ce({}),Xe=new ce({}),et=new q({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/configuration_swin.py#L31"}}),ge=new Nt({props:{anchor:"transformers.SwinConfig.example",$$slots:{default:[tl]},$$scope:{ctx:F}}}),ot=new ce({}),st=new q({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L915"}}),rt=new q({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L942",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>, <em>optional</em>, returned when <code>add_pooling_layer=True</code> is passed) \u2014 Average pooling of the last layer hidden-state.</p>
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
`}}),we=new Ot({props:{$$slots:{default:[ol]},$$scope:{ctx:F}}}),be=new Nt({props:{anchor:"transformers.SwinModel.forward.example",$$slots:{default:[sl]},$$scope:{ctx:F}}}),it=new ce({}),lt=new q({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1021"}}),$e=new Ot({props:{$$slots:{default:[nl]},$$scope:{ctx:F}}}),mt=new q({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1038",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
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
`}}),Te=new Ot({props:{$$slots:{default:[al]},$$scope:{ctx:F}}}),ye=new Nt({props:{anchor:"transformers.SwinForMaskedImageModeling.forward.example",$$slots:{default:[rl]},$$scope:{ctx:F}}}),ft=new ce({}),ut=new q({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1132"}}),wt=new q({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1147",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
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
`}}),ke=new Ot({props:{$$slots:{default:[il]},$$scope:{ctx:F}}}),Fe=new Nt({props:{anchor:"transformers.SwinForImageClassification.forward.example",$$slots:{default:[ll]},$$scope:{ctx:F}}}),bt=new ce({}),vt=new q({props:{name:"class transformers.TFSwinModel",anchor:"transformers.TFSwinModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1185"}}),yt=new q({props:{name:"call",anchor:"transformers.TFSwinModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1193",returnDescription:`
<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>, <em>optional</em>, returned when <code>add_pooling_layer=True</code> is passed) \u2014 Average pooling of the last layer hidden-state.</p>
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
`}}),Me=new Ot({props:{$$slots:{default:[dl]},$$scope:{ctx:F}}}),Ee=new Nt({props:{anchor:"transformers.TFSwinModel.call.example",$$slots:{default:[cl]},$$scope:{ctx:F}}}),St=new ce({}),kt=new q({props:{name:"class transformers.TFSwinForMaskedImageModeling",anchor:"transformers.TFSwinForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1295"}}),Mt=new q({props:{name:"call",anchor:"transformers.TFSwinForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1303",returnDescription:`
<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinMaskedImageModelingOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
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
`}}),Ie=new Ot({props:{$$slots:{default:[pl]},$$scope:{ctx:F}}}),Ce=new Nt({props:{anchor:"transformers.TFSwinForMaskedImageModeling.call.example",$$slots:{default:[hl]},$$scope:{ctx:F}}}),Et=new ce({}),jt=new q({props:{name:"class transformers.TFSwinForImageClassification",anchor:"transformers.TFSwinForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1416"}}),At=new q({props:{name:"call",anchor:"transformers.TFSwinForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1430",returnDescription:`
<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
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
`}}),qe=new Ot({props:{$$slots:{default:[ml]},$$scope:{ctx:F}}}),Pe=new Nt({props:{anchor:"transformers.TFSwinForImageClassification.call.example",$$slots:{default:[fl]},$$scope:{ctx:F}}}),{c(){d=r("meta"),b=u(),p=r("h1"),m=r("a"),w=r("span"),v(s.$$.fragment),c=u(),x=r("span"),Bs=n("Swin Transformer"),as=u(),R=r("h2"),pe=r("a"),uo=r("span"),v(Ke.$$.fragment),Ks=u(),go=r("span"),Rs=n("Overview"),rs=u(),he=r("p"),Ys=n("The Swin Transformer was proposed in "),Re=r("a"),Zs=n("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),Gs=n(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),is=u(),Ht=r("p"),Js=n("The abstract from the paper is the following:"),ls=u(),Wt=r("p"),_o=r("em"),Qs=n(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),ds=u(),Ut=r("p"),Xs=n("Tips:"),cs=u(),B=r("ul"),Ye=r("li"),en=n("One can use the "),Vt=r("a"),tn=n("AutoFeatureExtractor"),on=n(" API to prepare images for the model."),sn=u(),Ze=r("li"),nn=n("Swin pads the inputs supporting any input height and width (if divisible by "),wo=r("code"),an=n("32"),rn=n(")."),ln=u(),M=r("li"),dn=n("Swin can be used as a "),bo=r("em"),cn=n("backbone"),pn=n(". When "),vo=r("code"),hn=n("output_hidden_states = True"),mn=n(", it will output both "),$o=r("code"),fn=n("hidden_states"),un=n(" and "),To=r("code"),gn=n("reshaped_hidden_states"),_n=n(". The "),yo=r("code"),wn=n("reshaped_hidden_states"),bn=n(" have a shape of "),So=r("code"),vn=n("(batch, num_channels, height, width)"),$n=n(" rather than "),ko=r("code"),Tn=n("(batch_size, sequence_length, num_channels)"),yn=n("."),ps=u(),me=r("img"),hs=u(),fe=r("small"),Sn=n("Swin Transformer architecture. Taken from the "),Bt=r("a"),kn=n("original paper"),Fn=n("."),ms=u(),P=r("p"),xn=n("This model was contributed by "),Ge=r("a"),Mn=n("novice03"),En=n(". The Tensorflow version of this model was contributed by "),Je=r("a"),jn=n("amyeroberts"),In=n(". The original code can be found "),Qe=r("a"),Cn=n("here"),An=n("."),fs=u(),Y=r("h2"),ue=r("a"),Fo=r("span"),v(Xe.$$.fragment),qn=u(),xo=r("span"),Pn=n("SwinConfig"),us=u(),I=r("div"),v(et.$$.fragment),zn=u(),Z=r("p"),On=n("This is the configuration class to store the configuration of a "),Kt=r("a"),Nn=n("SwinModel"),Dn=n(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),tt=r("a"),Ln=n("microsoft/swin-tiny-patch4-window7-224"),Hn=n(`
architecture.`),Wn=u(),G=r("p"),Un=n("Configuration objects inherit from "),Rt=r("a"),Vn=n("PretrainedConfig"),Bn=n(` and can be used to control the model outputs. Read the
documentation from `),Yt=r("a"),Kn=n("PretrainedConfig"),Rn=n(" for more information."),Yn=u(),v(ge.$$.fragment),gs=u(),J=r("h2"),_e=r("a"),Mo=r("span"),v(ot.$$.fragment),Zn=u(),Eo=r("span"),Gn=n("SwinModel"),_s=u(),W=r("div"),v(st.$$.fragment),Jn=u(),nt=r("p"),Qn=n(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),at=r("a"),Xn=n("torch.nn.Module"),ea=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ta=u(),z=r("div"),v(rt.$$.fragment),oa=u(),Q=r("p"),sa=n("The "),Zt=r("a"),na=n("SwinModel"),aa=n(" forward method, overrides the "),jo=r("code"),ra=n("__call__"),ia=n(" special method."),la=u(),v(we.$$.fragment),da=u(),v(be.$$.fragment),ws=u(),X=r("h2"),ve=r("a"),Io=r("span"),v(it.$$.fragment),ca=u(),Co=r("span"),pa=n("SwinForMaskedImageModeling"),bs=u(),j=r("div"),v(lt.$$.fragment),ha=u(),dt=r("p"),ma=n("Swin Model with a decoder on top for masked image modeling, as proposed in "),ct=r("a"),fa=n("SimMIM"),ua=n("."),ga=u(),v($e.$$.fragment),_a=u(),pt=r("p"),wa=n("This model is a PyTorch "),ht=r("a"),ba=n("torch.nn.Module"),va=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$a=u(),O=r("div"),v(mt.$$.fragment),Ta=u(),ee=r("p"),ya=n("The "),Gt=r("a"),Sa=n("SwinForMaskedImageModeling"),ka=n(" forward method, overrides the "),Ao=r("code"),Fa=n("__call__"),xa=n(" special method."),Ma=u(),v(Te.$$.fragment),Ea=u(),v(ye.$$.fragment),vs=u(),te=r("h2"),Se=r("a"),qo=r("span"),v(ft.$$.fragment),ja=u(),Po=r("span"),Ia=n("SwinForImageClassification"),$s=u(),C=r("div"),v(ut.$$.fragment),Ca=u(),zo=r("p"),Aa=n(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),qa=u(),gt=r("p"),Pa=n("This model is a PyTorch "),_t=r("a"),za=n("torch.nn.Module"),Oa=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Na=u(),N=r("div"),v(wt.$$.fragment),Da=u(),oe=r("p"),La=n("The "),Jt=r("a"),Ha=n("SwinForImageClassification"),Wa=n(" forward method, overrides the "),Oo=r("code"),Ua=n("__call__"),Va=n(" special method."),Ba=u(),v(ke.$$.fragment),Ka=u(),v(Fe.$$.fragment),Ts=u(),se=r("h2"),xe=r("a"),No=r("span"),v(bt.$$.fragment),Ra=u(),Do=r("span"),Ya=n("TFSwinModel"),ys=u(),U=r("div"),v(vt.$$.fragment),Za=u(),$t=r("p"),Ga=n(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a Tensorflow
`),Tt=r("a"),Ja=n("tf.keras.layers.Layer"),Qa=n(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Xa=u(),D=r("div"),v(yt.$$.fragment),er=u(),ne=r("p"),tr=n("The "),Qt=r("a"),or=n("TFSwinModel"),sr=n(" forward method, overrides the "),Lo=r("code"),nr=n("__call__"),ar=n(" special method."),rr=u(),v(Me.$$.fragment),ir=u(),v(Ee.$$.fragment),Ss=u(),ae=r("h2"),je=r("a"),Ho=r("span"),v(St.$$.fragment),lr=u(),Wo=r("span"),dr=n("TFSwinForMaskedImageModeling"),ks=u(),V=r("div"),v(kt.$$.fragment),cr=u(),re=r("p"),pr=n("Swin Model with a decoder on top for masked image modeling, as proposed in "),Ft=r("a"),hr=n("SimMIM"),mr=n(`.
This model is a Tensorflow
`),xt=r("a"),fr=n("tf.keras.layers.Layer"),ur=n(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),gr=u(),L=r("div"),v(Mt.$$.fragment),_r=u(),ie=r("p"),wr=n("The "),Xt=r("a"),br=n("TFSwinForMaskedImageModeling"),vr=n(" forward method, overrides the "),Uo=r("code"),$r=n("__call__"),Tr=n(" special method."),yr=u(),v(Ie.$$.fragment),Sr=u(),v(Ce.$$.fragment),Fs=u(),le=r("h2"),Ae=r("a"),Vo=r("span"),v(Et.$$.fragment),kr=u(),Bo=r("span"),Fr=n("TFSwinForImageClassification"),xs=u(),A=r("div"),v(jt.$$.fragment),xr=u(),Ko=r("p"),Mr=n(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Er=u(),It=r("p"),jr=n(`This model is a Tensorflow
`),Ct=r("a"),Ir=n("tf.keras.layers.Layer"),Cr=n(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Ar=u(),H=r("div"),v(At.$$.fragment),qr=u(),de=r("p"),Pr=n("The "),eo=r("a"),zr=n("TFSwinForImageClassification"),Or=n(" forward method, overrides the "),Ro=r("code"),Nr=n("__call__"),Dr=n(" special method."),Lr=u(),v(qe.$$.fragment),Hr=u(),v(Pe.$$.fragment),this.h()},l(t){const f=Qi('[data-svelte="svelte-1phssyn"]',document.head);d=i(f,"META",{name:!0,content:!0}),f.forEach(o),b=g(t),p=i(t,"H1",{class:!0});var qt=l(p);m=i(qt,"A",{id:!0,class:!0,href:!0});var Yo=l(m);w=i(Yo,"SPAN",{});var Zo=l(w);$(s.$$.fragment,Zo),Zo.forEach(o),Yo.forEach(o),c=g(qt),x=i(qt,"SPAN",{});var Go=l(x);Bs=a(Go,"Swin Transformer"),Go.forEach(o),qt.forEach(o),as=g(t),R=i(t,"H2",{class:!0});var Pt=l(R);pe=i(Pt,"A",{id:!0,class:!0,href:!0});var Jo=l(pe);uo=i(Jo,"SPAN",{});var Qo=l(uo);$(Ke.$$.fragment,Qo),Qo.forEach(o),Jo.forEach(o),Ks=g(Pt),go=i(Pt,"SPAN",{});var Xo=l(go);Rs=a(Xo,"Overview"),Xo.forEach(o),Pt.forEach(o),rs=g(t),he=i(t,"P",{});var zt=l(he);Ys=a(zt,"The Swin Transformer was proposed in "),Re=i(zt,"A",{href:!0,rel:!0});var es=l(Re);Zs=a(es,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),es.forEach(o),Gs=a(zt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),zt.forEach(o),is=g(t),Ht=i(t,"P",{});var ts=l(Ht);Js=a(ts,"The abstract from the paper is the following:"),ts.forEach(o),ls=g(t),Wt=i(t,"P",{});var os=l(Wt);_o=i(os,"EM",{});var ss=l(_o);Qs=a(ss,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),ss.forEach(o),os.forEach(o),ds=g(t),Ut=i(t,"P",{});var ns=l(Ut);Xs=a(ns,"Tips:"),ns.forEach(o),cs=g(t),B=i(t,"UL",{});var to=l(B);Ye=i(to,"LI",{});var Es=l(Ye);en=a(Es,"One can use the "),Vt=i(Es,"A",{href:!0});var Ur=l(Vt);tn=a(Ur,"AutoFeatureExtractor"),Ur.forEach(o),on=a(Es," API to prepare images for the model."),Es.forEach(o),sn=g(to),Ze=i(to,"LI",{});var js=l(Ze);nn=a(js,"Swin pads the inputs supporting any input height and width (if divisible by "),wo=i(js,"CODE",{});var Vr=l(wo);an=a(Vr,"32"),Vr.forEach(o),rn=a(js,")."),js.forEach(o),ln=g(to),M=i(to,"LI",{});var E=l(M);dn=a(E,"Swin can be used as a "),bo=i(E,"EM",{});var Br=l(bo);cn=a(Br,"backbone"),Br.forEach(o),pn=a(E,". When "),vo=i(E,"CODE",{});var Kr=l(vo);hn=a(Kr,"output_hidden_states = True"),Kr.forEach(o),mn=a(E,", it will output both "),$o=i(E,"CODE",{});var Rr=l($o);fn=a(Rr,"hidden_states"),Rr.forEach(o),un=a(E," and "),To=i(E,"CODE",{});var Yr=l(To);gn=a(Yr,"reshaped_hidden_states"),Yr.forEach(o),_n=a(E,". The "),yo=i(E,"CODE",{});var Zr=l(yo);wn=a(Zr,"reshaped_hidden_states"),Zr.forEach(o),bn=a(E," have a shape of "),So=i(E,"CODE",{});var Gr=l(So);vn=a(Gr,"(batch, num_channels, height, width)"),Gr.forEach(o),$n=a(E," rather than "),ko=i(E,"CODE",{});var Jr=l(ko);Tn=a(Jr,"(batch_size, sequence_length, num_channels)"),Jr.forEach(o),yn=a(E,"."),E.forEach(o),to.forEach(o),ps=g(t),me=i(t,"IMG",{src:!0,alt:!0,width:!0}),hs=g(t),fe=i(t,"SMALL",{});var Is=l(fe);Sn=a(Is,"Swin Transformer architecture. Taken from the "),Bt=i(Is,"A",{href:!0});var Qr=l(Bt);kn=a(Qr,"original paper"),Qr.forEach(o),Fn=a(Is,"."),Is.forEach(o),ms=g(t),P=i(t,"P",{});var ze=l(P);xn=a(ze,"This model was contributed by "),Ge=i(ze,"A",{href:!0,rel:!0});var Xr=l(Ge);Mn=a(Xr,"novice03"),Xr.forEach(o),En=a(ze,". The Tensorflow version of this model was contributed by "),Je=i(ze,"A",{href:!0,rel:!0});var ei=l(Je);jn=a(ei,"amyeroberts"),ei.forEach(o),In=a(ze,". The original code can be found "),Qe=i(ze,"A",{href:!0,rel:!0});var ti=l(Qe);Cn=a(ti,"here"),ti.forEach(o),An=a(ze,"."),ze.forEach(o),fs=g(t),Y=i(t,"H2",{class:!0});var Cs=l(Y);ue=i(Cs,"A",{id:!0,class:!0,href:!0});var oi=l(ue);Fo=i(oi,"SPAN",{});var si=l(Fo);$(Xe.$$.fragment,si),si.forEach(o),oi.forEach(o),qn=g(Cs),xo=i(Cs,"SPAN",{});var ni=l(xo);Pn=a(ni,"SwinConfig"),ni.forEach(o),Cs.forEach(o),us=g(t),I=i(t,"DIV",{class:!0});var Oe=l(I);$(et.$$.fragment,Oe),zn=g(Oe),Z=i(Oe,"P",{});var oo=l(Z);On=a(oo,"This is the configuration class to store the configuration of a "),Kt=i(oo,"A",{href:!0});var ai=l(Kt);Nn=a(ai,"SwinModel"),ai.forEach(o),Dn=a(oo,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),tt=i(oo,"A",{href:!0,rel:!0});var ri=l(tt);Ln=a(ri,"microsoft/swin-tiny-patch4-window7-224"),ri.forEach(o),Hn=a(oo,`
architecture.`),oo.forEach(o),Wn=g(Oe),G=i(Oe,"P",{});var so=l(G);Un=a(so,"Configuration objects inherit from "),Rt=i(so,"A",{href:!0});var ii=l(Rt);Vn=a(ii,"PretrainedConfig"),ii.forEach(o),Bn=a(so,` and can be used to control the model outputs. Read the
documentation from `),Yt=i(so,"A",{href:!0});var li=l(Yt);Kn=a(li,"PretrainedConfig"),li.forEach(o),Rn=a(so," for more information."),so.forEach(o),Yn=g(Oe),$(ge.$$.fragment,Oe),Oe.forEach(o),gs=g(t),J=i(t,"H2",{class:!0});var As=l(J);_e=i(As,"A",{id:!0,class:!0,href:!0});var di=l(_e);Mo=i(di,"SPAN",{});var ci=l(Mo);$(ot.$$.fragment,ci),ci.forEach(o),di.forEach(o),Zn=g(As),Eo=i(As,"SPAN",{});var pi=l(Eo);Gn=a(pi,"SwinModel"),pi.forEach(o),As.forEach(o),_s=g(t),W=i(t,"DIV",{class:!0});var no=l(W);$(st.$$.fragment,no),Jn=g(no),nt=i(no,"P",{});var qs=l(nt);Qn=a(qs,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),at=i(qs,"A",{href:!0,rel:!0});var hi=l(at);Xn=a(hi,"torch.nn.Module"),hi.forEach(o),ea=a(qs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qs.forEach(o),ta=g(no),z=i(no,"DIV",{class:!0});var Ne=l(z);$(rt.$$.fragment,Ne),oa=g(Ne),Q=i(Ne,"P",{});var ao=l(Q);sa=a(ao,"The "),Zt=i(ao,"A",{href:!0});var mi=l(Zt);na=a(mi,"SwinModel"),mi.forEach(o),aa=a(ao," forward method, overrides the "),jo=i(ao,"CODE",{});var fi=l(jo);ra=a(fi,"__call__"),fi.forEach(o),ia=a(ao," special method."),ao.forEach(o),la=g(Ne),$(we.$$.fragment,Ne),da=g(Ne),$(be.$$.fragment,Ne),Ne.forEach(o),no.forEach(o),ws=g(t),X=i(t,"H2",{class:!0});var Ps=l(X);ve=i(Ps,"A",{id:!0,class:!0,href:!0});var ui=l(ve);Io=i(ui,"SPAN",{});var gi=l(Io);$(it.$$.fragment,gi),gi.forEach(o),ui.forEach(o),ca=g(Ps),Co=i(Ps,"SPAN",{});var _i=l(Co);pa=a(_i,"SwinForMaskedImageModeling"),_i.forEach(o),Ps.forEach(o),bs=g(t),j=i(t,"DIV",{class:!0});var K=l(j);$(lt.$$.fragment,K),ha=g(K),dt=i(K,"P",{});var zs=l(dt);ma=a(zs,"Swin Model with a decoder on top for masked image modeling, as proposed in "),ct=i(zs,"A",{href:!0,rel:!0});var wi=l(ct);fa=a(wi,"SimMIM"),wi.forEach(o),ua=a(zs,"."),zs.forEach(o),ga=g(K),$($e.$$.fragment,K),_a=g(K),pt=i(K,"P",{});var Os=l(pt);wa=a(Os,"This model is a PyTorch "),ht=i(Os,"A",{href:!0,rel:!0});var bi=l(ht);ba=a(bi,"torch.nn.Module"),bi.forEach(o),va=a(Os,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(o),$a=g(K),O=i(K,"DIV",{class:!0});var De=l(O);$(mt.$$.fragment,De),Ta=g(De),ee=i(De,"P",{});var ro=l(ee);ya=a(ro,"The "),Gt=i(ro,"A",{href:!0});var vi=l(Gt);Sa=a(vi,"SwinForMaskedImageModeling"),vi.forEach(o),ka=a(ro," forward method, overrides the "),Ao=i(ro,"CODE",{});var $i=l(Ao);Fa=a($i,"__call__"),$i.forEach(o),xa=a(ro," special method."),ro.forEach(o),Ma=g(De),$(Te.$$.fragment,De),Ea=g(De),$(ye.$$.fragment,De),De.forEach(o),K.forEach(o),vs=g(t),te=i(t,"H2",{class:!0});var Ns=l(te);Se=i(Ns,"A",{id:!0,class:!0,href:!0});var Ti=l(Se);qo=i(Ti,"SPAN",{});var yi=l(qo);$(ft.$$.fragment,yi),yi.forEach(o),Ti.forEach(o),ja=g(Ns),Po=i(Ns,"SPAN",{});var Si=l(Po);Ia=a(Si,"SwinForImageClassification"),Si.forEach(o),Ns.forEach(o),$s=g(t),C=i(t,"DIV",{class:!0});var Le=l(C);$(ut.$$.fragment,Le),Ca=g(Le),zo=i(Le,"P",{});var ki=l(zo);Aa=a(ki,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ki.forEach(o),qa=g(Le),gt=i(Le,"P",{});var Ds=l(gt);Pa=a(Ds,"This model is a PyTorch "),_t=i(Ds,"A",{href:!0,rel:!0});var Fi=l(_t);za=a(Fi,"torch.nn.Module"),Fi.forEach(o),Oa=a(Ds,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds.forEach(o),Na=g(Le),N=i(Le,"DIV",{class:!0});var He=l(N);$(wt.$$.fragment,He),Da=g(He),oe=i(He,"P",{});var io=l(oe);La=a(io,"The "),Jt=i(io,"A",{href:!0});var xi=l(Jt);Ha=a(xi,"SwinForImageClassification"),xi.forEach(o),Wa=a(io," forward method, overrides the "),Oo=i(io,"CODE",{});var Mi=l(Oo);Ua=a(Mi,"__call__"),Mi.forEach(o),Va=a(io," special method."),io.forEach(o),Ba=g(He),$(ke.$$.fragment,He),Ka=g(He),$(Fe.$$.fragment,He),He.forEach(o),Le.forEach(o),Ts=g(t),se=i(t,"H2",{class:!0});var Ls=l(se);xe=i(Ls,"A",{id:!0,class:!0,href:!0});var Ei=l(xe);No=i(Ei,"SPAN",{});var ji=l(No);$(bt.$$.fragment,ji),ji.forEach(o),Ei.forEach(o),Ra=g(Ls),Do=i(Ls,"SPAN",{});var Ii=l(Do);Ya=a(Ii,"TFSwinModel"),Ii.forEach(o),Ls.forEach(o),ys=g(t),U=i(t,"DIV",{class:!0});var lo=l(U);$(vt.$$.fragment,lo),Za=g(lo),$t=i(lo,"P",{});var Hs=l($t);Ga=a(Hs,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a Tensorflow
`),Tt=i(Hs,"A",{href:!0,rel:!0});var Ci=l(Tt);Ja=a(Ci,"tf.keras.layers.Layer"),Ci.forEach(o),Qa=a(Hs,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Hs.forEach(o),Xa=g(lo),D=i(lo,"DIV",{class:!0});var We=l(D);$(yt.$$.fragment,We),er=g(We),ne=i(We,"P",{});var co=l(ne);tr=a(co,"The "),Qt=i(co,"A",{href:!0});var Ai=l(Qt);or=a(Ai,"TFSwinModel"),Ai.forEach(o),sr=a(co," forward method, overrides the "),Lo=i(co,"CODE",{});var qi=l(Lo);nr=a(qi,"__call__"),qi.forEach(o),ar=a(co," special method."),co.forEach(o),rr=g(We),$(Me.$$.fragment,We),ir=g(We),$(Ee.$$.fragment,We),We.forEach(o),lo.forEach(o),Ss=g(t),ae=i(t,"H2",{class:!0});var Ws=l(ae);je=i(Ws,"A",{id:!0,class:!0,href:!0});var Pi=l(je);Ho=i(Pi,"SPAN",{});var zi=l(Ho);$(St.$$.fragment,zi),zi.forEach(o),Pi.forEach(o),lr=g(Ws),Wo=i(Ws,"SPAN",{});var Oi=l(Wo);dr=a(Oi,"TFSwinForMaskedImageModeling"),Oi.forEach(o),Ws.forEach(o),ks=g(t),V=i(t,"DIV",{class:!0});var po=l(V);$(kt.$$.fragment,po),cr=g(po),re=i(po,"P",{});var ho=l(re);pr=a(ho,"Swin Model with a decoder on top for masked image modeling, as proposed in "),Ft=i(ho,"A",{href:!0,rel:!0});var Ni=l(Ft);hr=a(Ni,"SimMIM"),Ni.forEach(o),mr=a(ho,`.
This model is a Tensorflow
`),xt=i(ho,"A",{href:!0,rel:!0});var Di=l(xt);fr=a(Di,"tf.keras.layers.Layer"),Di.forEach(o),ur=a(ho,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),ho.forEach(o),gr=g(po),L=i(po,"DIV",{class:!0});var Ue=l(L);$(Mt.$$.fragment,Ue),_r=g(Ue),ie=i(Ue,"P",{});var mo=l(ie);wr=a(mo,"The "),Xt=i(mo,"A",{href:!0});var Li=l(Xt);br=a(Li,"TFSwinForMaskedImageModeling"),Li.forEach(o),vr=a(mo," forward method, overrides the "),Uo=i(mo,"CODE",{});var Hi=l(Uo);$r=a(Hi,"__call__"),Hi.forEach(o),Tr=a(mo," special method."),mo.forEach(o),yr=g(Ue),$(Ie.$$.fragment,Ue),Sr=g(Ue),$(Ce.$$.fragment,Ue),Ue.forEach(o),po.forEach(o),Fs=g(t),le=i(t,"H2",{class:!0});var Us=l(le);Ae=i(Us,"A",{id:!0,class:!0,href:!0});var Wi=l(Ae);Vo=i(Wi,"SPAN",{});var Ui=l(Vo);$(Et.$$.fragment,Ui),Ui.forEach(o),Wi.forEach(o),kr=g(Us),Bo=i(Us,"SPAN",{});var Vi=l(Bo);Fr=a(Vi,"TFSwinForImageClassification"),Vi.forEach(o),Us.forEach(o),xs=g(t),A=i(t,"DIV",{class:!0});var Ve=l(A);$(jt.$$.fragment,Ve),xr=g(Ve),Ko=i(Ve,"P",{});var Bi=l(Ko);Mr=a(Bi,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Bi.forEach(o),Er=g(Ve),It=i(Ve,"P",{});var Vs=l(It);jr=a(Vs,`This model is a Tensorflow
`),Ct=i(Vs,"A",{href:!0,rel:!0});var Ki=l(Ct);Ir=a(Ki,"tf.keras.layers.Layer"),Ki.forEach(o),Cr=a(Vs,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Vs.forEach(o),Ar=g(Ve),H=i(Ve,"DIV",{class:!0});var Be=l(H);$(At.$$.fragment,Be),qr=g(Be),de=i(Be,"P",{});var fo=l(de);Pr=a(fo,"The "),eo=i(fo,"A",{href:!0});var Ri=l(eo);zr=a(Ri,"TFSwinForImageClassification"),Ri.forEach(o),Or=a(fo," forward method, overrides the "),Ro=i(fo,"CODE",{});var Yi=l(Ro);Nr=a(Yi,"__call__"),Yi.forEach(o),Dr=a(fo," special method."),fo.forEach(o),Lr=g(Be),$(qe.$$.fragment,Be),Hr=g(Be),$(Pe.$$.fragment,Be),Be.forEach(o),Ve.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(gl)),h(m,"id","swin-transformer"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#swin-transformer"),h(p,"class","relative group"),h(pe,"id","overview"),h(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pe,"href","#overview"),h(R,"class","relative group"),h(Re,"href","https://arxiv.org/abs/2103.14030"),h(Re,"rel","nofollow"),h(Vt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),Xi(me.src,Wr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||h(me,"src",Wr),h(me,"alt","drawing"),h(me,"width","600"),h(Bt,"href","https://arxiv.org/abs/2102.03334"),h(Ge,"href","https://huggingface.co/novice03%3E"),h(Ge,"rel","nofollow"),h(Je,"href","https://huggingface.co/amyeroberts"),h(Je,"rel","nofollow"),h(Qe,"href","https://github.com/microsoft/Swin-Transformer"),h(Qe,"rel","nofollow"),h(ue,"id","transformers.SwinConfig"),h(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ue,"href","#transformers.SwinConfig"),h(Y,"class","relative group"),h(Kt,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinModel"),h(tt,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),h(tt,"rel","nofollow"),h(Rt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Yt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_e,"id","transformers.SwinModel"),h(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_e,"href","#transformers.SwinModel"),h(J,"class","relative group"),h(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(at,"rel","nofollow"),h(Zt,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinModel"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"id","transformers.SwinForMaskedImageModeling"),h(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ve,"href","#transformers.SwinForMaskedImageModeling"),h(X,"class","relative group"),h(ct,"href","https://arxiv.org/abs/2111.09886"),h(ct,"rel","nofollow"),h(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ht,"rel","nofollow"),h(Gt,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"id","transformers.SwinForImageClassification"),h(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Se,"href","#transformers.SwinForImageClassification"),h(te,"class","relative group"),h(_t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(_t,"rel","nofollow"),h(Jt,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinForImageClassification"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xe,"id","transformers.TFSwinModel"),h(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xe,"href","#transformers.TFSwinModel"),h(se,"class","relative group"),h(Tt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),h(Tt,"rel","nofollow"),h(Qt,"href","/docs/transformers/main/en/model_doc/swin#transformers.TFSwinModel"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(je,"id","transformers.TFSwinForMaskedImageModeling"),h(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(je,"href","#transformers.TFSwinForMaskedImageModeling"),h(ae,"class","relative group"),h(Ft,"href","https://arxiv.org/abs/2111.09886"),h(Ft,"rel","nofollow"),h(xt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),h(xt,"rel","nofollow"),h(Xt,"href","/docs/transformers/main/en/model_doc/swin#transformers.TFSwinForMaskedImageModeling"),h(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ae,"id","transformers.TFSwinForImageClassification"),h(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ae,"href","#transformers.TFSwinForImageClassification"),h(le,"class","relative group"),h(Ct,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),h(Ct,"rel","nofollow"),h(eo,"href","/docs/transformers/main/en/model_doc/swin#transformers.TFSwinForImageClassification"),h(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,b,f),_(t,p,f),e(p,m),e(m,w),T(s,w,null),e(p,c),e(p,x),e(x,Bs),_(t,as,f),_(t,R,f),e(R,pe),e(pe,uo),T(Ke,uo,null),e(R,Ks),e(R,go),e(go,Rs),_(t,rs,f),_(t,he,f),e(he,Ys),e(he,Re),e(Re,Zs),e(he,Gs),_(t,is,f),_(t,Ht,f),e(Ht,Js),_(t,ls,f),_(t,Wt,f),e(Wt,_o),e(_o,Qs),_(t,ds,f),_(t,Ut,f),e(Ut,Xs),_(t,cs,f),_(t,B,f),e(B,Ye),e(Ye,en),e(Ye,Vt),e(Vt,tn),e(Ye,on),e(B,sn),e(B,Ze),e(Ze,nn),e(Ze,wo),e(wo,an),e(Ze,rn),e(B,ln),e(B,M),e(M,dn),e(M,bo),e(bo,cn),e(M,pn),e(M,vo),e(vo,hn),e(M,mn),e(M,$o),e($o,fn),e(M,un),e(M,To),e(To,gn),e(M,_n),e(M,yo),e(yo,wn),e(M,bn),e(M,So),e(So,vn),e(M,$n),e(M,ko),e(ko,Tn),e(M,yn),_(t,ps,f),_(t,me,f),_(t,hs,f),_(t,fe,f),e(fe,Sn),e(fe,Bt),e(Bt,kn),e(fe,Fn),_(t,ms,f),_(t,P,f),e(P,xn),e(P,Ge),e(Ge,Mn),e(P,En),e(P,Je),e(Je,jn),e(P,In),e(P,Qe),e(Qe,Cn),e(P,An),_(t,fs,f),_(t,Y,f),e(Y,ue),e(ue,Fo),T(Xe,Fo,null),e(Y,qn),e(Y,xo),e(xo,Pn),_(t,us,f),_(t,I,f),T(et,I,null),e(I,zn),e(I,Z),e(Z,On),e(Z,Kt),e(Kt,Nn),e(Z,Dn),e(Z,tt),e(tt,Ln),e(Z,Hn),e(I,Wn),e(I,G),e(G,Un),e(G,Rt),e(Rt,Vn),e(G,Bn),e(G,Yt),e(Yt,Kn),e(G,Rn),e(I,Yn),T(ge,I,null),_(t,gs,f),_(t,J,f),e(J,_e),e(_e,Mo),T(ot,Mo,null),e(J,Zn),e(J,Eo),e(Eo,Gn),_(t,_s,f),_(t,W,f),T(st,W,null),e(W,Jn),e(W,nt),e(nt,Qn),e(nt,at),e(at,Xn),e(nt,ea),e(W,ta),e(W,z),T(rt,z,null),e(z,oa),e(z,Q),e(Q,sa),e(Q,Zt),e(Zt,na),e(Q,aa),e(Q,jo),e(jo,ra),e(Q,ia),e(z,la),T(we,z,null),e(z,da),T(be,z,null),_(t,ws,f),_(t,X,f),e(X,ve),e(ve,Io),T(it,Io,null),e(X,ca),e(X,Co),e(Co,pa),_(t,bs,f),_(t,j,f),T(lt,j,null),e(j,ha),e(j,dt),e(dt,ma),e(dt,ct),e(ct,fa),e(dt,ua),e(j,ga),T($e,j,null),e(j,_a),e(j,pt),e(pt,wa),e(pt,ht),e(ht,ba),e(pt,va),e(j,$a),e(j,O),T(mt,O,null),e(O,Ta),e(O,ee),e(ee,ya),e(ee,Gt),e(Gt,Sa),e(ee,ka),e(ee,Ao),e(Ao,Fa),e(ee,xa),e(O,Ma),T(Te,O,null),e(O,Ea),T(ye,O,null),_(t,vs,f),_(t,te,f),e(te,Se),e(Se,qo),T(ft,qo,null),e(te,ja),e(te,Po),e(Po,Ia),_(t,$s,f),_(t,C,f),T(ut,C,null),e(C,Ca),e(C,zo),e(zo,Aa),e(C,qa),e(C,gt),e(gt,Pa),e(gt,_t),e(_t,za),e(gt,Oa),e(C,Na),e(C,N),T(wt,N,null),e(N,Da),e(N,oe),e(oe,La),e(oe,Jt),e(Jt,Ha),e(oe,Wa),e(oe,Oo),e(Oo,Ua),e(oe,Va),e(N,Ba),T(ke,N,null),e(N,Ka),T(Fe,N,null),_(t,Ts,f),_(t,se,f),e(se,xe),e(xe,No),T(bt,No,null),e(se,Ra),e(se,Do),e(Do,Ya),_(t,ys,f),_(t,U,f),T(vt,U,null),e(U,Za),e(U,$t),e($t,Ga),e($t,Tt),e(Tt,Ja),e($t,Qa),e(U,Xa),e(U,D),T(yt,D,null),e(D,er),e(D,ne),e(ne,tr),e(ne,Qt),e(Qt,or),e(ne,sr),e(ne,Lo),e(Lo,nr),e(ne,ar),e(D,rr),T(Me,D,null),e(D,ir),T(Ee,D,null),_(t,Ss,f),_(t,ae,f),e(ae,je),e(je,Ho),T(St,Ho,null),e(ae,lr),e(ae,Wo),e(Wo,dr),_(t,ks,f),_(t,V,f),T(kt,V,null),e(V,cr),e(V,re),e(re,pr),e(re,Ft),e(Ft,hr),e(re,mr),e(re,xt),e(xt,fr),e(re,ur),e(V,gr),e(V,L),T(Mt,L,null),e(L,_r),e(L,ie),e(ie,wr),e(ie,Xt),e(Xt,br),e(ie,vr),e(ie,Uo),e(Uo,$r),e(ie,Tr),e(L,yr),T(Ie,L,null),e(L,Sr),T(Ce,L,null),_(t,Fs,f),_(t,le,f),e(le,Ae),e(Ae,Vo),T(Et,Vo,null),e(le,kr),e(le,Bo),e(Bo,Fr),_(t,xs,f),_(t,A,f),T(jt,A,null),e(A,xr),e(A,Ko),e(Ko,Mr),e(A,Er),e(A,It),e(It,jr),e(It,Ct),e(Ct,Ir),e(It,Cr),e(A,Ar),e(A,H),T(At,H,null),e(H,qr),e(H,de),e(de,Pr),e(de,eo),e(eo,zr),e(de,Or),e(de,Ro),e(Ro,Nr),e(de,Dr),e(H,Lr),T(qe,H,null),e(H,Hr),T(Pe,H,null),Ms=!0},p(t,[f]){const qt={};f&2&&(qt.$$scope={dirty:f,ctx:t}),ge.$set(qt);const Yo={};f&2&&(Yo.$$scope={dirty:f,ctx:t}),we.$set(Yo);const Zo={};f&2&&(Zo.$$scope={dirty:f,ctx:t}),be.$set(Zo);const Go={};f&2&&(Go.$$scope={dirty:f,ctx:t}),$e.$set(Go);const Pt={};f&2&&(Pt.$$scope={dirty:f,ctx:t}),Te.$set(Pt);const Jo={};f&2&&(Jo.$$scope={dirty:f,ctx:t}),ye.$set(Jo);const Qo={};f&2&&(Qo.$$scope={dirty:f,ctx:t}),ke.$set(Qo);const Xo={};f&2&&(Xo.$$scope={dirty:f,ctx:t}),Fe.$set(Xo);const zt={};f&2&&(zt.$$scope={dirty:f,ctx:t}),Me.$set(zt);const es={};f&2&&(es.$$scope={dirty:f,ctx:t}),Ee.$set(es);const ts={};f&2&&(ts.$$scope={dirty:f,ctx:t}),Ie.$set(ts);const os={};f&2&&(os.$$scope={dirty:f,ctx:t}),Ce.$set(os);const ss={};f&2&&(ss.$$scope={dirty:f,ctx:t}),qe.$set(ss);const ns={};f&2&&(ns.$$scope={dirty:f,ctx:t}),Pe.$set(ns)},i(t){Ms||(y(s.$$.fragment,t),y(Ke.$$.fragment,t),y(Xe.$$.fragment,t),y(et.$$.fragment,t),y(ge.$$.fragment,t),y(ot.$$.fragment,t),y(st.$$.fragment,t),y(rt.$$.fragment,t),y(we.$$.fragment,t),y(be.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),y($e.$$.fragment,t),y(mt.$$.fragment,t),y(Te.$$.fragment,t),y(ye.$$.fragment,t),y(ft.$$.fragment,t),y(ut.$$.fragment,t),y(wt.$$.fragment,t),y(ke.$$.fragment,t),y(Fe.$$.fragment,t),y(bt.$$.fragment,t),y(vt.$$.fragment,t),y(yt.$$.fragment,t),y(Me.$$.fragment,t),y(Ee.$$.fragment,t),y(St.$$.fragment,t),y(kt.$$.fragment,t),y(Mt.$$.fragment,t),y(Ie.$$.fragment,t),y(Ce.$$.fragment,t),y(Et.$$.fragment,t),y(jt.$$.fragment,t),y(At.$$.fragment,t),y(qe.$$.fragment,t),y(Pe.$$.fragment,t),Ms=!0)},o(t){S(s.$$.fragment,t),S(Ke.$$.fragment,t),S(Xe.$$.fragment,t),S(et.$$.fragment,t),S(ge.$$.fragment,t),S(ot.$$.fragment,t),S(st.$$.fragment,t),S(rt.$$.fragment,t),S(we.$$.fragment,t),S(be.$$.fragment,t),S(it.$$.fragment,t),S(lt.$$.fragment,t),S($e.$$.fragment,t),S(mt.$$.fragment,t),S(Te.$$.fragment,t),S(ye.$$.fragment,t),S(ft.$$.fragment,t),S(ut.$$.fragment,t),S(wt.$$.fragment,t),S(ke.$$.fragment,t),S(Fe.$$.fragment,t),S(bt.$$.fragment,t),S(vt.$$.fragment,t),S(yt.$$.fragment,t),S(Me.$$.fragment,t),S(Ee.$$.fragment,t),S(St.$$.fragment,t),S(kt.$$.fragment,t),S(Mt.$$.fragment,t),S(Ie.$$.fragment,t),S(Ce.$$.fragment,t),S(Et.$$.fragment,t),S(jt.$$.fragment,t),S(At.$$.fragment,t),S(qe.$$.fragment,t),S(Pe.$$.fragment,t),Ms=!1},d(t){o(d),t&&o(b),t&&o(p),k(s),t&&o(as),t&&o(R),k(Ke),t&&o(rs),t&&o(he),t&&o(is),t&&o(Ht),t&&o(ls),t&&o(Wt),t&&o(ds),t&&o(Ut),t&&o(cs),t&&o(B),t&&o(ps),t&&o(me),t&&o(hs),t&&o(fe),t&&o(ms),t&&o(P),t&&o(fs),t&&o(Y),k(Xe),t&&o(us),t&&o(I),k(et),k(ge),t&&o(gs),t&&o(J),k(ot),t&&o(_s),t&&o(W),k(st),k(rt),k(we),k(be),t&&o(ws),t&&o(X),k(it),t&&o(bs),t&&o(j),k(lt),k($e),k(mt),k(Te),k(ye),t&&o(vs),t&&o(te),k(ft),t&&o($s),t&&o(C),k(ut),k(wt),k(ke),k(Fe),t&&o(Ts),t&&o(se),k(bt),t&&o(ys),t&&o(U),k(vt),k(yt),k(Me),k(Ee),t&&o(Ss),t&&o(ae),k(St),t&&o(ks),t&&o(V),k(kt),k(Mt),k(Ie),k(Ce),t&&o(Fs),t&&o(le),k(Et),t&&o(xs),t&&o(A),k(jt),k(At),k(qe),k(Pe)}}}const gl={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"},{local:"transformers.TFSwinModel",title:"TFSwinModel"},{local:"transformers.TFSwinForMaskedImageModeling",title:"TFSwinForMaskedImageModeling"},{local:"transformers.TFSwinForImageClassification",title:"TFSwinForImageClassification"}],title:"Swin Transformer"};function _l(F){return el(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Sl extends Zi{constructor(d){super();Gi(this,d,_l,ul,Ji,{})}}export{Sl as default,gl as metadata};
