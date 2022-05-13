import{S as Nh,i as Lh,s as Dh,e as a,k as p,w as b,t as n,M as Oh,c as s,d as t,m as h,a as r,x as w,h as i,b as c,F as e,g as _,y as $,q as y,o as x,B as F,v as Sh,L as At}from"../../chunks/vendor-6b77c823.js";import{T as _e}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-1088f2fb.js";import{C as qt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Pt}from"../../chunks/ExampleCodeBlock-5212b321.js";function Wh(k){let d,T,u,m,v;return{c(){d=a("p"),T=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),u=a("a"),m=n("Github Issue"),v=n("."),this.h()},l(l){d=s(l,"P",{});var f=r(d);T=i(f,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),u=s(f,"A",{href:!0,rel:!0});var V=r(u);m=i(V,"Github Issue"),V.forEach(t),v=i(f,"."),f.forEach(t),this.h()},h(){c(u,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(u,"rel","nofollow")},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Bh(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Uh(k){let d,T;return{c(){d=a("p"),T=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){d=s(u,"P",{});var m=r(d);T=i(m,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),m.forEach(t)},m(u,m){_(u,d,m),e(d,T)},d(u){u&&t(d)}}}function Rh(k){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var V=r(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Hh(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Jh(k){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var V=r(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Kh(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTForMaskedImageModeling.from_pretrained("google/vit-base-patch16-224-in21k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=a("p"),T=n("Examples:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Examples:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Gh(k){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var V=r(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Xh(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Zh(k){let d,T,u,m,v,l,f,V,pe,R,M,ee,j,U,K,P,he,G;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),u=p(),m=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=p(),M=a("p"),ee=n("This second option is useful when using "),j=a("code"),U=n("tf.keras.Model.fit"),K=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),he=n("model(inputs)"),G=n(".")},l(E){d=s(E,"P",{});var I=r(d);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=h(E),m=s(E,"UL",{});var z=r(m);v=s(z,"LI",{});var $e=r(v);l=i($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),f=h(z),V=s(z,"LI",{});var X=r(V);pe=i(X,"having all inputs as a list, tuple or dict in the first positional arguments."),X.forEach(t),z.forEach(t),R=h(E),M=s(E,"P",{});var L=r(M);ee=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var ye=r(j);U=i(ye,"tf.keras.Model.fit"),ye.forEach(t),K=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=s(L,"CODE",{});var Te=r(P);he=i(Te,"model(inputs)"),Te.forEach(t),G=i(L,"."),L.forEach(t)},m(E,I){_(E,d,I),e(d,T),_(E,u,I),_(E,m,I),e(m,v),e(v,l),e(m,f),e(m,V),e(V,pe),_(E,R,I),_(E,M,I),e(M,ee),e(M,j),e(j,U),e(M,K),e(M,P),e(P,he),e(M,G)},d(E){E&&t(d),E&&t(u),E&&t(m),E&&t(R),E&&t(M)}}}function Qh(k){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var V=r(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Yh(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function em(k){let d,T,u,m,v,l,f,V,pe,R,M,ee,j,U,K,P,he,G;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),u=p(),m=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=p(),M=a("p"),ee=n("This second option is useful when using "),j=a("code"),U=n("tf.keras.Model.fit"),K=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),he=n("model(inputs)"),G=n(".")},l(E){d=s(E,"P",{});var I=r(d);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=h(E),m=s(E,"UL",{});var z=r(m);v=s(z,"LI",{});var $e=r(v);l=i($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),f=h(z),V=s(z,"LI",{});var X=r(V);pe=i(X,"having all inputs as a list, tuple or dict in the first positional arguments."),X.forEach(t),z.forEach(t),R=h(E),M=s(E,"P",{});var L=r(M);ee=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var ye=r(j);U=i(ye,"tf.keras.Model.fit"),ye.forEach(t),K=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=s(L,"CODE",{});var Te=r(P);he=i(Te,"model(inputs)"),Te.forEach(t),G=i(L,"."),L.forEach(t)},m(E,I){_(E,d,I),e(d,T),_(E,u,I),_(E,m,I),e(m,v),e(v,l),e(m,f),e(m,V),e(V,pe),_(E,R,I),_(E,M,I),e(M,ee),e(M,j),e(j,U),e(M,K),e(M,P),e(P,he),e(M,G)},d(E){E&&t(d),E&&t(u),E&&t(m),E&&t(R),E&&t(M)}}}function tm(k){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var V=r(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function om(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function am(k){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var V=r(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function sm(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Examples:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Examples:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function rm(k){let d,T,u,m,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var V=r(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function nm(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
from PIL import Image
import jax
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = FlaxViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits

# model predicts one of the 1000 ImageNet classes
predicted_class_idx = jax.numpy.argmax(logits, axis=-1)
print("Predicted class:", model.config.id2label[predicted_class_idx.item()])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = jax.numpy.argmax(logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function im(k){let d,T,u,m,v,l,f,V,pe,R,M,ee,j,U,K,P,he,G,E,I,z,$e,X,L,ye,Te,ea,Yr,rr,ta,Ba,en,nr,oa,tn,ir,N,zt,on,Nt,an,sn,rn,Ua,nn,ln,Lt,dn,aa,cn,pn,hn,xe,mn,Ra,fn,un,Dt,gn,_n,vn,Fe,Tn,Ot,bn,wn,St,$n,yn,xn,Ve,Fn,Wt,Vn,kn,Bt,En,Mn,In,Ha,jn,lr,sa,Cn,dr,te,Ja,C,ra,Pn,An,na,qn,zn,ia,Nn,Ln,Ka,Dn,On,Ga,Sn,Wn,Xa,Bn,Un,Za,Rn,Hn,la,Jn,Kn,Gn,Qa,da,ca,Xn,Zn,Qn,Ya,Ut,Yn,Rt,ei,ti,oi,es,pa,ha,ai,si,cr,be,ri,Ht,ni,ii,Jt,li,di,pr,He,ci,Kt,pi,hi,hr,ke,Je,ts,Gt,mi,os,fi,mr,Z,Xt,ui,Ee,gi,ma,_i,vi,Zt,Ti,bi,wi,Me,$i,fa,yi,xi,ua,Fi,Vi,ki,Ke,fr,Ie,Ge,as,Qt,Ei,ss,Mi,ur,Q,Yt,Ii,rs,ji,Ci,eo,Pi,ga,Ai,qi,zi,we,to,Ni,ns,Li,Di,Xe,gr,je,Ze,is,oo,Oi,ls,Si,_r,me,ao,Wi,so,Bi,ro,Ui,Ri,Hi,oe,no,Ji,Ce,Ki,_a,Gi,Xi,ds,Zi,Qi,Yi,Qe,el,Ye,vr,Pe,et,cs,io,tl,ps,ol,Tr,fe,lo,al,Ae,sl,hs,rl,nl,co,il,ll,dl,ae,po,cl,qe,pl,va,hl,ml,ms,fl,ul,gl,tt,_l,ot,br,ze,at,fs,ho,vl,us,Tl,wr,Y,mo,bl,gs,wl,$l,fo,yl,uo,xl,Fl,Vl,se,go,kl,Ne,El,Ta,Ml,Il,_s,jl,Cl,Pl,st,Al,rt,$r,Le,nt,vs,_o,ql,Ts,zl,yr,D,vo,Nl,bs,Ll,Dl,To,Ol,ba,Sl,Wl,Bl,bo,Ul,wo,Rl,Hl,Jl,it,Kl,re,$o,Gl,De,Xl,wa,Zl,Ql,ws,Yl,ed,td,lt,od,dt,xr,Oe,ct,$s,yo,ad,ys,sd,Fr,O,xo,rd,xs,nd,id,Fo,ld,$a,dd,cd,pd,Vo,hd,ko,md,fd,ud,pt,gd,ne,Eo,_d,Se,vd,ya,Td,bd,Fs,wd,$d,yd,ht,xd,mt,Vr,We,ft,Vs,Mo,Fd,ks,Vd,kr,A,Io,kd,Es,Ed,Md,jo,Id,xa,jd,Cd,Pd,Co,Ad,Po,qd,zd,Nd,Ms,Ld,Dd,ue,Is,Ao,Od,Sd,js,qo,Wd,Bd,Cs,zo,Ud,Rd,Ps,No,Hd,Jd,ie,Lo,Kd,Be,Gd,As,Xd,Zd,qs,Qd,Yd,ec,ut,tc,gt,Er,Ue,_t,zs,Do,oc,Ns,ac,Mr,q,Oo,sc,Ls,rc,nc,So,ic,Fa,lc,dc,cc,Wo,pc,Bo,hc,mc,fc,Ds,uc,gc,ge,Os,Uo,_c,vc,Ss,Ro,Tc,bc,Ws,Ho,wc,$c,Bs,Jo,yc,xc,le,Ko,Fc,Re,Vc,Us,kc,Ec,Rs,Mc,Ic,jc,vt,Cc,Tt,Ir;return l=new ve({}),M=new _e({props:{$$slots:{default:[Wh]},$$scope:{ctx:k}}}),P=new ve({}),Gt=new ve({}),Xt=new B({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/configuration_vit.py#L35"}}),Ke=new Pt({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[Bh]},$$scope:{ctx:k}}}),Qt=new ve({}),Yt=new B({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/feature_extraction_vit.py#L36"}}),to=new B({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.19.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/feature_extraction_vit.py#L82",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Xe=new _e({props:{warning:!0,$$slots:{default:[Uh]},$$scope:{ctx:k}}}),oo=new ve({}),ao=new B({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_vit.py#L512"}}),no=new B({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTModel.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_vit.py#L537",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new _e({props:{$$slots:{default:[Rh]},$$scope:{ctx:k}}}),Ye=new Pt({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[Hh]},$$scope:{ctx:k}}}),io=new ve({}),lo=new B({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_vit.py#L618"}}),po=new B({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForMaskedImageModeling.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_vit.py#L632",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new _e({props:{$$slots:{default:[Jh]},$$scope:{ctx:k}}}),ot=new Pt({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[Kh]},$$scope:{ctx:k}}}),ho=new ve({}),mo=new B({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_vit.py#L728"}}),go=new B({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForImageClassification.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_vit.py#L741",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
<p><code>transformers.modeling_outputs.ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new _e({props:{$$slots:{default:[Gh]},$$scope:{ctx:k}}}),rt=new Pt({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[Xh]},$$scope:{ctx:k}}}),_o=new ve({}),vo=new B({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_tf_vit.py#L649"}}),it=new _e({props:{$$slots:{default:[Zh]},$$scope:{ctx:k}}}),$o=new B({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTModel.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_tf_vit.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lt=new _e({props:{$$slots:{default:[Qh]},$$scope:{ctx:k}}}),dt=new Pt({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[Yh]},$$scope:{ctx:k}}}),yo=new ve({}),xo=new B({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_tf_vit.py#L727"}}),pt=new _e({props:{$$slots:{default:[em]},$$scope:{ctx:k}}}),Eo=new B({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTForImageClassification.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_tf_vit.py#L741",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ht=new _e({props:{$$slots:{default:[tm]},$$scope:{ctx:k}}}),mt=new Pt({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[om]},$$scope:{ctx:k}}}),Mo=new ve({}),Io=new B({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_flax_vit.py#L529"}}),Lo=new B({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_flax_vit.py#L444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new _e({props:{$$slots:{default:[am]},$$scope:{ctx:k}}}),gt=new Pt({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[sm]},$$scope:{ctx:k}}}),Do=new ve({}),Oo=new B({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_flax_vit.py#L610"}}),Ko=new B({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/vit/modeling_flax_vit.py#L444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new _e({props:{$$slots:{default:[rm]},$$scope:{ctx:k}}}),Tt=new Pt({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[nm]},$$scope:{ctx:k}}}),{c(){d=a("meta"),T=p(),u=a("h1"),m=a("a"),v=a("span"),b(l.$$.fragment),f=p(),V=a("span"),pe=n("Vision Transformer (ViT)"),R=p(),b(M.$$.fragment),ee=p(),j=a("h2"),U=a("a"),K=a("span"),b(P.$$.fragment),he=p(),G=a("span"),E=n("Overview"),I=p(),z=a("p"),$e=n("The Vision Transformer (ViT) model was proposed in "),X=a("a"),L=n(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ye=n(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=p(),ea=a("p"),Yr=n("The abstract from the paper is the following:"),rr=p(),ta=a("p"),Ba=a("em"),en=n(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),nr=p(),oa=a("p"),tn=n("Tips:"),ir=p(),N=a("ul"),zt=a("li"),on=n("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Nt=a("a"),an=n("here"),sn=n("."),rn=p(),Ua=a("li"),nn=n(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),ln=p(),Lt=a("li"),dn=n(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),aa=a("a"),cn=n("ViTFeatureExtractor"),pn=n(" to resize (or rescale) and normalize images for the model."),hn=p(),xe=a("li"),mn=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ra=a("code"),fn=n("google/vit-base-patch16-224"),un=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Dt=a("a"),gn=n("hub"),_n=n("."),vn=p(),Fe=a("li"),Tn=n("The available checkpoints are either (1) pre-trained on "),Ot=a("a"),bn=n("ImageNet-21k"),wn=n(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),St=a("a"),$n=n("ImageNet"),yn=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),xn=p(),Ve=a("li"),Fn=n(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Wt=a("a"),Vn=n("(Touvron et al., 2019)"),kn=n(", "),Bt=a("a"),En=n(`(Kolesnikov
et al., 2020)`),Mn=n(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),In=p(),Ha=a("li"),jn=n(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),lr=p(),sa=a("p"),Cn=n("Following the original Vision Transformer, some follow-up works have been made:"),dr=p(),te=a("ul"),Ja=a("li"),C=a("p"),ra=a("a"),Pn=n("DeiT"),An=n(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),na=a("a"),qn=n("ViTModel"),zn=n(` or
`),ia=a("a"),Nn=n("ViTForImageClassification"),Ln=n(". There are 4 variants available (in 3 different sizes): "),Ka=a("em"),Dn=n("facebook/deit-tiny-patch16-224"),On=n(`,
`),Ga=a("em"),Sn=n("facebook/deit-small-patch16-224"),Wn=n(", "),Xa=a("em"),Bn=n("facebook/deit-base-patch16-224"),Un=n(" and "),Za=a("em"),Rn=n("facebook/deit-base-patch16-384"),Hn=n(`. Note that one should
use `),la=a("a"),Jn=n("DeiTFeatureExtractor"),Kn=n(" in order to prepare images for the model."),Gn=p(),Qa=a("li"),da=a("p"),ca=a("a"),Xn=n("BEiT"),Zn=n(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Qn=p(),Ya=a("li"),Ut=a("p"),Yn=n(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Rt=a("a"),ei=n("hub"),ti=n("."),oi=p(),es=a("li"),pa=a("p"),ha=a("a"),ai=n("MAE"),si=n(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),cr=p(),be=a("p"),ri=n("This model was contributed by "),Ht=a("a"),ni=n("nielsr"),ii=n(`. The original code (written in JAX) can be
found `),Jt=a("a"),li=n("here"),di=n("."),pr=p(),He=a("p"),ci=n("Note that we converted the weights from Ross Wightman\u2019s "),Kt=a("a"),pi=n("timm library"),hi=n(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),hr=p(),ke=a("h2"),Je=a("a"),ts=a("span"),b(Gt.$$.fragment),mi=p(),os=a("span"),fi=n("ViTConfig"),mr=p(),Z=a("div"),b(Xt.$$.fragment),ui=p(),Ee=a("p"),gi=n("This is the configuration class to store the configuration of a "),ma=a("a"),_i=n("ViTModel"),vi=n(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Zt=a("a"),Ti=n("google/vit-base-patch16-224"),bi=n(" architecture."),wi=p(),Me=a("p"),$i=n("Configuration objects inherit from "),fa=a("a"),yi=n("PretrainedConfig"),xi=n(` and can be used to control the model outputs. Read the
documentation from `),ua=a("a"),Fi=n("PretrainedConfig"),Vi=n(" for more information."),ki=p(),b(Ke.$$.fragment),fr=p(),Ie=a("h2"),Ge=a("a"),as=a("span"),b(Qt.$$.fragment),Ei=p(),ss=a("span"),Mi=n("ViTFeatureExtractor"),ur=p(),Q=a("div"),b(Yt.$$.fragment),Ii=p(),rs=a("p"),ji=n("Constructs a ViT feature extractor."),Ci=p(),eo=a("p"),Pi=n("This feature extractor inherits from "),ga=a("a"),Ai=n("FeatureExtractionMixin"),qi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zi=p(),we=a("div"),b(to.$$.fragment),Ni=p(),ns=a("p"),Li=n("Main method to prepare for the model one or several image(s)."),Di=p(),b(Xe.$$.fragment),gr=p(),je=a("h2"),Ze=a("a"),is=a("span"),b(oo.$$.fragment),Oi=p(),ls=a("span"),Si=n("ViTModel"),_r=p(),me=a("div"),b(ao.$$.fragment),Wi=p(),so=a("p"),Bi=n(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ro=a("a"),Ui=n("torch.nn.Module"),Ri=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hi=p(),oe=a("div"),b(no.$$.fragment),Ji=p(),Ce=a("p"),Ki=n("The "),_a=a("a"),Gi=n("ViTModel"),Xi=n(" forward method, overrides the "),ds=a("code"),Zi=n("__call__"),Qi=n(" special method."),Yi=p(),b(Qe.$$.fragment),el=p(),b(Ye.$$.fragment),vr=p(),Pe=a("h2"),et=a("a"),cs=a("span"),b(io.$$.fragment),tl=p(),ps=a("span"),ol=n("ViTForMaskedImageModeling"),Tr=p(),fe=a("div"),b(lo.$$.fragment),al=p(),Ae=a("p"),sl=n("ViT Model with a decoder on top for masked image modeling, as proposed in "),hs=a("code"),rl=n("SimMIM <https://arxiv.org/abs/2111.09886>"),nl=n(`__.
This model is a PyTorch `),co=a("a"),il=n("torch.nn.Module"),ll=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=p(),ae=a("div"),b(po.$$.fragment),cl=p(),qe=a("p"),pl=n("The "),va=a("a"),hl=n("ViTForMaskedImageModeling"),ml=n(" forward method, overrides the "),ms=a("code"),fl=n("__call__"),ul=n(" special method."),gl=p(),b(tt.$$.fragment),_l=p(),b(ot.$$.fragment),br=p(),ze=a("h2"),at=a("a"),fs=a("span"),b(ho.$$.fragment),vl=p(),us=a("span"),Tl=n("ViTForImageClassification"),wr=p(),Y=a("div"),b(mo.$$.fragment),bl=p(),gs=a("p"),wl=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),$l=p(),fo=a("p"),yl=n("This model is a PyTorch "),uo=a("a"),xl=n("torch.nn.Module"),Fl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vl=p(),se=a("div"),b(go.$$.fragment),kl=p(),Ne=a("p"),El=n("The "),Ta=a("a"),Ml=n("ViTForImageClassification"),Il=n(" forward method, overrides the "),_s=a("code"),jl=n("__call__"),Cl=n(" special method."),Pl=p(),b(st.$$.fragment),Al=p(),b(rt.$$.fragment),$r=p(),Le=a("h2"),nt=a("a"),vs=a("span"),b(_o.$$.fragment),ql=p(),Ts=a("span"),zl=n("TFViTModel"),yr=p(),D=a("div"),b(vo.$$.fragment),Nl=p(),bs=a("p"),Ll=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Dl=p(),To=a("p"),Ol=n("This model inherits from "),ba=a("a"),Sl=n("TFPreTrainedModel"),Wl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=p(),bo=a("p"),Ul=n("This model is also a "),wo=a("a"),Rl=n("tf.keras.Model"),Hl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jl=p(),b(it.$$.fragment),Kl=p(),re=a("div"),b($o.$$.fragment),Gl=p(),De=a("p"),Xl=n("The "),wa=a("a"),Zl=n("TFViTModel"),Ql=n(" forward method, overrides the "),ws=a("code"),Yl=n("__call__"),ed=n(" special method."),td=p(),b(lt.$$.fragment),od=p(),b(dt.$$.fragment),xr=p(),Oe=a("h2"),ct=a("a"),$s=a("span"),b(yo.$$.fragment),ad=p(),ys=a("span"),sd=n("TFViTForImageClassification"),Fr=p(),O=a("div"),b(xo.$$.fragment),rd=p(),xs=a("p"),nd=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),id=p(),Fo=a("p"),ld=n("This model inherits from "),$a=a("a"),dd=n("TFPreTrainedModel"),cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=p(),Vo=a("p"),hd=n("This model is also a "),ko=a("a"),md=n("tf.keras.Model"),fd=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud=p(),b(pt.$$.fragment),gd=p(),ne=a("div"),b(Eo.$$.fragment),_d=p(),Se=a("p"),vd=n("The "),ya=a("a"),Td=n("TFViTForImageClassification"),bd=n(" forward method, overrides the "),Fs=a("code"),wd=n("__call__"),$d=n(" special method."),yd=p(),b(ht.$$.fragment),xd=p(),b(mt.$$.fragment),Vr=p(),We=a("h2"),ft=a("a"),Vs=a("span"),b(Mo.$$.fragment),Fd=p(),ks=a("span"),Vd=n("FlaxVitModel"),kr=p(),A=a("div"),b(Io.$$.fragment),kd=p(),Es=a("p"),Ed=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Md=p(),jo=a("p"),Id=n("This model inherits from "),xa=a("a"),jd=n("FlaxPreTrainedModel"),Cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pd=p(),Co=a("p"),Ad=n("This model is also a Flax Linen "),Po=a("a"),qd=n("flax.linen.Module"),zd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nd=p(),Ms=a("p"),Ld=n("Finally, this model supports inherent JAX features such as:"),Dd=p(),ue=a("ul"),Is=a("li"),Ao=a("a"),Od=n("Just-In-Time (JIT) compilation"),Sd=p(),js=a("li"),qo=a("a"),Wd=n("Automatic Differentiation"),Bd=p(),Cs=a("li"),zo=a("a"),Ud=n("Vectorization"),Rd=p(),Ps=a("li"),No=a("a"),Hd=n("Parallelization"),Jd=p(),ie=a("div"),b(Lo.$$.fragment),Kd=p(),Be=a("p"),Gd=n("The "),As=a("code"),Xd=n("FlaxViTPreTrainedModel"),Zd=n(" forward method, overrides the "),qs=a("code"),Qd=n("__call__"),Yd=n(" special method."),ec=p(),b(ut.$$.fragment),tc=p(),b(gt.$$.fragment),Er=p(),Ue=a("h2"),_t=a("a"),zs=a("span"),b(Do.$$.fragment),oc=p(),Ns=a("span"),ac=n("FlaxViTForImageClassification"),Mr=p(),q=a("div"),b(Oo.$$.fragment),sc=p(),Ls=a("p"),rc=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),nc=p(),So=a("p"),ic=n("This model inherits from "),Fa=a("a"),lc=n("FlaxPreTrainedModel"),dc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cc=p(),Wo=a("p"),pc=n("This model is also a Flax Linen "),Bo=a("a"),hc=n("flax.linen.Module"),mc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fc=p(),Ds=a("p"),uc=n("Finally, this model supports inherent JAX features such as:"),gc=p(),ge=a("ul"),Os=a("li"),Uo=a("a"),_c=n("Just-In-Time (JIT) compilation"),vc=p(),Ss=a("li"),Ro=a("a"),Tc=n("Automatic Differentiation"),bc=p(),Ws=a("li"),Ho=a("a"),wc=n("Vectorization"),$c=p(),Bs=a("li"),Jo=a("a"),yc=n("Parallelization"),xc=p(),le=a("div"),b(Ko.$$.fragment),Fc=p(),Re=a("p"),Vc=n("The "),Us=a("code"),kc=n("FlaxViTPreTrainedModel"),Ec=n(" forward method, overrides the "),Rs=a("code"),Mc=n("__call__"),Ic=n(" special method."),jc=p(),b(vt.$$.fragment),Cc=p(),b(Tt.$$.fragment),this.h()},l(o){const g=Oh('[data-svelte="svelte-1phssyn"]',document.head);d=s(g,"META",{name:!0,content:!0}),g.forEach(t),T=h(o),u=s(o,"H1",{class:!0});var Go=r(u);m=s(Go,"A",{id:!0,class:!0,href:!0});var Hs=r(m);v=s(Hs,"SPAN",{});var Js=r(v);w(l.$$.fragment,Js),Js.forEach(t),Hs.forEach(t),f=h(Go),V=s(Go,"SPAN",{});var Ks=r(V);pe=i(Ks,"Vision Transformer (ViT)"),Ks.forEach(t),Go.forEach(t),R=h(o),w(M.$$.fragment,o),ee=h(o),j=s(o,"H2",{class:!0});var Xo=r(j);U=s(Xo,"A",{id:!0,class:!0,href:!0});var Gs=r(U);K=s(Gs,"SPAN",{});var Xs=r(K);w(P.$$.fragment,Xs),Xs.forEach(t),Gs.forEach(t),he=h(Xo),G=s(Xo,"SPAN",{});var Zs=r(G);E=i(Zs,"Overview"),Zs.forEach(t),Xo.forEach(t),I=h(o),z=s(o,"P",{});var Zo=r(z);$e=i(Zo,"The Vision Transformer (ViT) model was proposed in "),X=s(Zo,"A",{href:!0,rel:!0});var Qs=r(X);L=i(Qs,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Qs.forEach(t),ye=i(Zo,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Zo.forEach(t),Te=h(o),ea=s(o,"P",{});var Ys=r(ea);Yr=i(Ys,"The abstract from the paper is the following:"),Ys.forEach(t),rr=h(o),ta=s(o,"P",{});var er=r(ta);Ba=s(er,"EM",{});var tr=r(Ba);en=i(tr,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),tr.forEach(t),er.forEach(t),nr=h(o),oa=s(o,"P",{});var or=r(oa);tn=i(or,"Tips:"),or.forEach(t),ir=h(o),N=s(o,"UL",{});var S=r(N);zt=s(S,"LI",{});var Qo=r(zt);on=i(Qo,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Nt=s(Qo,"A",{href:!0,rel:!0});var ar=r(Nt);an=i(ar,"here"),ar.forEach(t),sn=i(Qo,"."),Qo.forEach(t),rn=h(S),Ua=s(S,"LI",{});var sr=r(Ua);nn=i(sr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),sr.forEach(t),ln=h(S),Lt=s(S,"LI",{});var Yo=r(Lt);dn=i(Yo,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),aa=s(Yo,"A",{href:!0});var qc=r(aa);cn=i(qc,"ViTFeatureExtractor"),qc.forEach(t),pn=i(Yo," to resize (or rescale) and normalize images for the model."),Yo.forEach(t),hn=h(S),xe=s(S,"LI",{});var Va=r(xe);mn=i(Va,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ra=s(Va,"CODE",{});var zc=r(Ra);fn=i(zc,"google/vit-base-patch16-224"),zc.forEach(t),un=i(Va,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Dt=s(Va,"A",{href:!0,rel:!0});var Nc=r(Dt);gn=i(Nc,"hub"),Nc.forEach(t),_n=i(Va,"."),Va.forEach(t),vn=h(S),Fe=s(S,"LI",{});var ka=r(Fe);Tn=i(ka,"The available checkpoints are either (1) pre-trained on "),Ot=s(ka,"A",{href:!0,rel:!0});var Lc=r(Ot);bn=i(Lc,"ImageNet-21k"),Lc.forEach(t),wn=i(ka,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),St=s(ka,"A",{href:!0,rel:!0});var Dc=r(St);$n=i(Dc,"ImageNet"),Dc.forEach(t),yn=i(ka,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),ka.forEach(t),xn=h(S),Ve=s(S,"LI",{});var Ea=r(Ve);Fn=i(Ea,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Wt=s(Ea,"A",{href:!0,rel:!0});var Oc=r(Wt);Vn=i(Oc,"(Touvron et al., 2019)"),Oc.forEach(t),kn=i(Ea,", "),Bt=s(Ea,"A",{href:!0,rel:!0});var Sc=r(Bt);En=i(Sc,`(Kolesnikov
et al., 2020)`),Sc.forEach(t),Mn=i(Ea,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),Ea.forEach(t),In=h(S),Ha=s(S,"LI",{});var Wc=r(Ha);jn=i(Wc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Wc.forEach(t),S.forEach(t),lr=h(o),sa=s(o,"P",{});var Bc=r(sa);Cn=i(Bc,"Following the original Vision Transformer, some follow-up works have been made:"),Bc.forEach(t),dr=h(o),te=s(o,"UL",{});var bt=r(te);Ja=s(bt,"LI",{});var Uc=r(Ja);C=s(Uc,"P",{});var W=r(C);ra=s(W,"A",{href:!0});var Rc=r(ra);Pn=i(Rc,"DeiT"),Rc.forEach(t),An=i(W,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),na=s(W,"A",{href:!0});var Hc=r(na);qn=i(Hc,"ViTModel"),Hc.forEach(t),zn=i(W,` or
`),ia=s(W,"A",{href:!0});var Jc=r(ia);Nn=i(Jc,"ViTForImageClassification"),Jc.forEach(t),Ln=i(W,". There are 4 variants available (in 3 different sizes): "),Ka=s(W,"EM",{});var Kc=r(Ka);Dn=i(Kc,"facebook/deit-tiny-patch16-224"),Kc.forEach(t),On=i(W,`,
`),Ga=s(W,"EM",{});var Gc=r(Ga);Sn=i(Gc,"facebook/deit-small-patch16-224"),Gc.forEach(t),Wn=i(W,", "),Xa=s(W,"EM",{});var Xc=r(Xa);Bn=i(Xc,"facebook/deit-base-patch16-224"),Xc.forEach(t),Un=i(W," and "),Za=s(W,"EM",{});var Zc=r(Za);Rn=i(Zc,"facebook/deit-base-patch16-384"),Zc.forEach(t),Hn=i(W,`. Note that one should
use `),la=s(W,"A",{href:!0});var Qc=r(la);Jn=i(Qc,"DeiTFeatureExtractor"),Qc.forEach(t),Kn=i(W," in order to prepare images for the model."),W.forEach(t),Uc.forEach(t),Gn=h(bt),Qa=s(bt,"LI",{});var Yc=r(Qa);da=s(Yc,"P",{});var Pc=r(da);ca=s(Pc,"A",{href:!0});var ep=r(ca);Xn=i(ep,"BEiT"),ep.forEach(t),Zn=i(Pc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Pc.forEach(t),Yc.forEach(t),Qn=h(bt),Ya=s(bt,"LI",{});var tp=r(Ya);Ut=s(tp,"P",{});var jr=r(Ut);Yn=i(jr,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Rt=s(jr,"A",{href:!0,rel:!0});var op=r(Rt);ei=i(op,"hub"),op.forEach(t),ti=i(jr,"."),jr.forEach(t),tp.forEach(t),oi=h(bt),es=s(bt,"LI",{});var ap=r(es);pa=s(ap,"P",{});var Ac=r(pa);ha=s(Ac,"A",{href:!0});var sp=r(ha);ai=i(sp,"MAE"),sp.forEach(t),si=i(Ac,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Ac.forEach(t),ap.forEach(t),bt.forEach(t),cr=h(o),be=s(o,"P",{});var Ma=r(be);ri=i(Ma,"This model was contributed by "),Ht=s(Ma,"A",{href:!0,rel:!0});var rp=r(Ht);ni=i(rp,"nielsr"),rp.forEach(t),ii=i(Ma,`. The original code (written in JAX) can be
found `),Jt=s(Ma,"A",{href:!0,rel:!0});var np=r(Jt);li=i(np,"here"),np.forEach(t),di=i(Ma,"."),Ma.forEach(t),pr=h(o),He=s(o,"P",{});var Cr=r(He);ci=i(Cr,"Note that we converted the weights from Ross Wightman\u2019s "),Kt=s(Cr,"A",{href:!0,rel:!0});var ip=r(Kt);pi=i(ip,"timm library"),ip.forEach(t),hi=i(Cr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Cr.forEach(t),hr=h(o),ke=s(o,"H2",{class:!0});var Pr=r(ke);Je=s(Pr,"A",{id:!0,class:!0,href:!0});var lp=r(Je);ts=s(lp,"SPAN",{});var dp=r(ts);w(Gt.$$.fragment,dp),dp.forEach(t),lp.forEach(t),mi=h(Pr),os=s(Pr,"SPAN",{});var cp=r(os);fi=i(cp,"ViTConfig"),cp.forEach(t),Pr.forEach(t),mr=h(o),Z=s(o,"DIV",{class:!0});var wt=r(Z);w(Xt.$$.fragment,wt),ui=h(wt),Ee=s(wt,"P",{});var Ia=r(Ee);gi=i(Ia,"This is the configuration class to store the configuration of a "),ma=s(Ia,"A",{href:!0});var pp=r(ma);_i=i(pp,"ViTModel"),pp.forEach(t),vi=i(Ia,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Zt=s(Ia,"A",{href:!0,rel:!0});var hp=r(Zt);Ti=i(hp,"google/vit-base-patch16-224"),hp.forEach(t),bi=i(Ia," architecture."),Ia.forEach(t),wi=h(wt),Me=s(wt,"P",{});var ja=r(Me);$i=i(ja,"Configuration objects inherit from "),fa=s(ja,"A",{href:!0});var mp=r(fa);yi=i(mp,"PretrainedConfig"),mp.forEach(t),xi=i(ja,` and can be used to control the model outputs. Read the
documentation from `),ua=s(ja,"A",{href:!0});var fp=r(ua);Fi=i(fp,"PretrainedConfig"),fp.forEach(t),Vi=i(ja," for more information."),ja.forEach(t),ki=h(wt),w(Ke.$$.fragment,wt),wt.forEach(t),fr=h(o),Ie=s(o,"H2",{class:!0});var Ar=r(Ie);Ge=s(Ar,"A",{id:!0,class:!0,href:!0});var up=r(Ge);as=s(up,"SPAN",{});var gp=r(as);w(Qt.$$.fragment,gp),gp.forEach(t),up.forEach(t),Ei=h(Ar),ss=s(Ar,"SPAN",{});var _p=r(ss);Mi=i(_p,"ViTFeatureExtractor"),_p.forEach(t),Ar.forEach(t),ur=h(o),Q=s(o,"DIV",{class:!0});var $t=r(Q);w(Yt.$$.fragment,$t),Ii=h($t),rs=s($t,"P",{});var vp=r(rs);ji=i(vp,"Constructs a ViT feature extractor."),vp.forEach(t),Ci=h($t),eo=s($t,"P",{});var qr=r(eo);Pi=i(qr,"This feature extractor inherits from "),ga=s(qr,"A",{href:!0});var Tp=r(ga);Ai=i(Tp,"FeatureExtractionMixin"),Tp.forEach(t),qi=i(qr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),qr.forEach(t),zi=h($t),we=s($t,"DIV",{class:!0});var Ca=r(we);w(to.$$.fragment,Ca),Ni=h(Ca),ns=s(Ca,"P",{});var bp=r(ns);Li=i(bp,"Main method to prepare for the model one or several image(s)."),bp.forEach(t),Di=h(Ca),w(Xe.$$.fragment,Ca),Ca.forEach(t),$t.forEach(t),gr=h(o),je=s(o,"H2",{class:!0});var zr=r(je);Ze=s(zr,"A",{id:!0,class:!0,href:!0});var wp=r(Ze);is=s(wp,"SPAN",{});var $p=r(is);w(oo.$$.fragment,$p),$p.forEach(t),wp.forEach(t),Oi=h(zr),ls=s(zr,"SPAN",{});var yp=r(ls);Si=i(yp,"ViTModel"),yp.forEach(t),zr.forEach(t),_r=h(o),me=s(o,"DIV",{class:!0});var Pa=r(me);w(ao.$$.fragment,Pa),Wi=h(Pa),so=s(Pa,"P",{});var Nr=r(so);Bi=i(Nr,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ro=s(Nr,"A",{href:!0,rel:!0});var xp=r(ro);Ui=i(xp,"torch.nn.Module"),xp.forEach(t),Ri=i(Nr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nr.forEach(t),Hi=h(Pa),oe=s(Pa,"DIV",{class:!0});var yt=r(oe);w(no.$$.fragment,yt),Ji=h(yt),Ce=s(yt,"P",{});var Aa=r(Ce);Ki=i(Aa,"The "),_a=s(Aa,"A",{href:!0});var Fp=r(_a);Gi=i(Fp,"ViTModel"),Fp.forEach(t),Xi=i(Aa," forward method, overrides the "),ds=s(Aa,"CODE",{});var Vp=r(ds);Zi=i(Vp,"__call__"),Vp.forEach(t),Qi=i(Aa," special method."),Aa.forEach(t),Yi=h(yt),w(Qe.$$.fragment,yt),el=h(yt),w(Ye.$$.fragment,yt),yt.forEach(t),Pa.forEach(t),vr=h(o),Pe=s(o,"H2",{class:!0});var Lr=r(Pe);et=s(Lr,"A",{id:!0,class:!0,href:!0});var kp=r(et);cs=s(kp,"SPAN",{});var Ep=r(cs);w(io.$$.fragment,Ep),Ep.forEach(t),kp.forEach(t),tl=h(Lr),ps=s(Lr,"SPAN",{});var Mp=r(ps);ol=i(Mp,"ViTForMaskedImageModeling"),Mp.forEach(t),Lr.forEach(t),Tr=h(o),fe=s(o,"DIV",{class:!0});var qa=r(fe);w(lo.$$.fragment,qa),al=h(qa),Ae=s(qa,"P",{});var za=r(Ae);sl=i(za,"ViT Model with a decoder on top for masked image modeling, as proposed in "),hs=s(za,"CODE",{});var Ip=r(hs);rl=i(Ip,"SimMIM <https://arxiv.org/abs/2111.09886>"),Ip.forEach(t),nl=i(za,`__.
This model is a PyTorch `),co=s(za,"A",{href:!0,rel:!0});var jp=r(co);il=i(jp,"torch.nn.Module"),jp.forEach(t),ll=i(za,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),za.forEach(t),dl=h(qa),ae=s(qa,"DIV",{class:!0});var xt=r(ae);w(po.$$.fragment,xt),cl=h(xt),qe=s(xt,"P",{});var Na=r(qe);pl=i(Na,"The "),va=s(Na,"A",{href:!0});var Cp=r(va);hl=i(Cp,"ViTForMaskedImageModeling"),Cp.forEach(t),ml=i(Na," forward method, overrides the "),ms=s(Na,"CODE",{});var Pp=r(ms);fl=i(Pp,"__call__"),Pp.forEach(t),ul=i(Na," special method."),Na.forEach(t),gl=h(xt),w(tt.$$.fragment,xt),_l=h(xt),w(ot.$$.fragment,xt),xt.forEach(t),qa.forEach(t),br=h(o),ze=s(o,"H2",{class:!0});var Dr=r(ze);at=s(Dr,"A",{id:!0,class:!0,href:!0});var Ap=r(at);fs=s(Ap,"SPAN",{});var qp=r(fs);w(ho.$$.fragment,qp),qp.forEach(t),Ap.forEach(t),vl=h(Dr),us=s(Dr,"SPAN",{});var zp=r(us);Tl=i(zp,"ViTForImageClassification"),zp.forEach(t),Dr.forEach(t),wr=h(o),Y=s(o,"DIV",{class:!0});var Ft=r(Y);w(mo.$$.fragment,Ft),bl=h(Ft),gs=s(Ft,"P",{});var Np=r(gs);wl=i(Np,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Np.forEach(t),$l=h(Ft),fo=s(Ft,"P",{});var Or=r(fo);yl=i(Or,"This model is a PyTorch "),uo=s(Or,"A",{href:!0,rel:!0});var Lp=r(uo);xl=i(Lp,"torch.nn.Module"),Lp.forEach(t),Fl=i(Or,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Or.forEach(t),Vl=h(Ft),se=s(Ft,"DIV",{class:!0});var Vt=r(se);w(go.$$.fragment,Vt),kl=h(Vt),Ne=s(Vt,"P",{});var La=r(Ne);El=i(La,"The "),Ta=s(La,"A",{href:!0});var Dp=r(Ta);Ml=i(Dp,"ViTForImageClassification"),Dp.forEach(t),Il=i(La," forward method, overrides the "),_s=s(La,"CODE",{});var Op=r(_s);jl=i(Op,"__call__"),Op.forEach(t),Cl=i(La," special method."),La.forEach(t),Pl=h(Vt),w(st.$$.fragment,Vt),Al=h(Vt),w(rt.$$.fragment,Vt),Vt.forEach(t),Ft.forEach(t),$r=h(o),Le=s(o,"H2",{class:!0});var Sr=r(Le);nt=s(Sr,"A",{id:!0,class:!0,href:!0});var Sp=r(nt);vs=s(Sp,"SPAN",{});var Wp=r(vs);w(_o.$$.fragment,Wp),Wp.forEach(t),Sp.forEach(t),ql=h(Sr),Ts=s(Sr,"SPAN",{});var Bp=r(Ts);zl=i(Bp,"TFViTModel"),Bp.forEach(t),Sr.forEach(t),yr=h(o),D=s(o,"DIV",{class:!0});var de=r(D);w(vo.$$.fragment,de),Nl=h(de),bs=s(de,"P",{});var Up=r(bs);Ll=i(Up,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Up.forEach(t),Dl=h(de),To=s(de,"P",{});var Wr=r(To);Ol=i(Wr,"This model inherits from "),ba=s(Wr,"A",{href:!0});var Rp=r(ba);Sl=i(Rp,"TFPreTrainedModel"),Rp.forEach(t),Wl=i(Wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr.forEach(t),Bl=h(de),bo=s(de,"P",{});var Br=r(bo);Ul=i(Br,"This model is also a "),wo=s(Br,"A",{href:!0,rel:!0});var Hp=r(wo);Rl=i(Hp,"tf.keras.Model"),Hp.forEach(t),Hl=i(Br,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Br.forEach(t),Jl=h(de),w(it.$$.fragment,de),Kl=h(de),re=s(de,"DIV",{class:!0});var kt=r(re);w($o.$$.fragment,kt),Gl=h(kt),De=s(kt,"P",{});var Da=r(De);Xl=i(Da,"The "),wa=s(Da,"A",{href:!0});var Jp=r(wa);Zl=i(Jp,"TFViTModel"),Jp.forEach(t),Ql=i(Da," forward method, overrides the "),ws=s(Da,"CODE",{});var Kp=r(ws);Yl=i(Kp,"__call__"),Kp.forEach(t),ed=i(Da," special method."),Da.forEach(t),td=h(kt),w(lt.$$.fragment,kt),od=h(kt),w(dt.$$.fragment,kt),kt.forEach(t),de.forEach(t),xr=h(o),Oe=s(o,"H2",{class:!0});var Ur=r(Oe);ct=s(Ur,"A",{id:!0,class:!0,href:!0});var Gp=r(ct);$s=s(Gp,"SPAN",{});var Xp=r($s);w(yo.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),ad=h(Ur),ys=s(Ur,"SPAN",{});var Zp=r(ys);sd=i(Zp,"TFViTForImageClassification"),Zp.forEach(t),Ur.forEach(t),Fr=h(o),O=s(o,"DIV",{class:!0});var ce=r(O);w(xo.$$.fragment,ce),rd=h(ce),xs=s(ce,"P",{});var Qp=r(xs);nd=i(Qp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qp.forEach(t),id=h(ce),Fo=s(ce,"P",{});var Rr=r(Fo);ld=i(Rr,"This model inherits from "),$a=s(Rr,"A",{href:!0});var Yp=r($a);dd=i(Yp,"TFPreTrainedModel"),Yp.forEach(t),cd=i(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr.forEach(t),pd=h(ce),Vo=s(ce,"P",{});var Hr=r(Vo);hd=i(Hr,"This model is also a "),ko=s(Hr,"A",{href:!0,rel:!0});var eh=r(ko);md=i(eh,"tf.keras.Model"),eh.forEach(t),fd=i(Hr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hr.forEach(t),ud=h(ce),w(pt.$$.fragment,ce),gd=h(ce),ne=s(ce,"DIV",{class:!0});var Et=r(ne);w(Eo.$$.fragment,Et),_d=h(Et),Se=s(Et,"P",{});var Oa=r(Se);vd=i(Oa,"The "),ya=s(Oa,"A",{href:!0});var th=r(ya);Td=i(th,"TFViTForImageClassification"),th.forEach(t),bd=i(Oa," forward method, overrides the "),Fs=s(Oa,"CODE",{});var oh=r(Fs);wd=i(oh,"__call__"),oh.forEach(t),$d=i(Oa," special method."),Oa.forEach(t),yd=h(Et),w(ht.$$.fragment,Et),xd=h(Et),w(mt.$$.fragment,Et),Et.forEach(t),ce.forEach(t),Vr=h(o),We=s(o,"H2",{class:!0});var Jr=r(We);ft=s(Jr,"A",{id:!0,class:!0,href:!0});var ah=r(ft);Vs=s(ah,"SPAN",{});var sh=r(Vs);w(Mo.$$.fragment,sh),sh.forEach(t),ah.forEach(t),Fd=h(Jr),ks=s(Jr,"SPAN",{});var rh=r(ks);Vd=i(rh,"FlaxVitModel"),rh.forEach(t),Jr.forEach(t),kr=h(o),A=s(o,"DIV",{class:!0});var H=r(A);w(Io.$$.fragment,H),kd=h(H),Es=s(H,"P",{});var nh=r(Es);Ed=i(nh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),nh.forEach(t),Md=h(H),jo=s(H,"P",{});var Kr=r(jo);Id=i(Kr,"This model inherits from "),xa=s(Kr,"A",{href:!0});var ih=r(xa);jd=i(ih,"FlaxPreTrainedModel"),ih.forEach(t),Cd=i(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kr.forEach(t),Pd=h(H),Co=s(H,"P",{});var Gr=r(Co);Ad=i(Gr,"This model is also a Flax Linen "),Po=s(Gr,"A",{href:!0,rel:!0});var lh=r(Po);qd=i(lh,"flax.linen.Module"),lh.forEach(t),zd=i(Gr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gr.forEach(t),Nd=h(H),Ms=s(H,"P",{});var dh=r(Ms);Ld=i(dh,"Finally, this model supports inherent JAX features such as:"),dh.forEach(t),Dd=h(H),ue=s(H,"UL",{});var Mt=r(ue);Is=s(Mt,"LI",{});var ch=r(Is);Ao=s(ch,"A",{href:!0,rel:!0});var ph=r(Ao);Od=i(ph,"Just-In-Time (JIT) compilation"),ph.forEach(t),ch.forEach(t),Sd=h(Mt),js=s(Mt,"LI",{});var hh=r(js);qo=s(hh,"A",{href:!0,rel:!0});var mh=r(qo);Wd=i(mh,"Automatic Differentiation"),mh.forEach(t),hh.forEach(t),Bd=h(Mt),Cs=s(Mt,"LI",{});var fh=r(Cs);zo=s(fh,"A",{href:!0,rel:!0});var uh=r(zo);Ud=i(uh,"Vectorization"),uh.forEach(t),fh.forEach(t),Rd=h(Mt),Ps=s(Mt,"LI",{});var gh=r(Ps);No=s(gh,"A",{href:!0,rel:!0});var _h=r(No);Hd=i(_h,"Parallelization"),_h.forEach(t),gh.forEach(t),Mt.forEach(t),Jd=h(H),ie=s(H,"DIV",{class:!0});var It=r(ie);w(Lo.$$.fragment,It),Kd=h(It),Be=s(It,"P",{});var Sa=r(Be);Gd=i(Sa,"The "),As=s(Sa,"CODE",{});var vh=r(As);Xd=i(vh,"FlaxViTPreTrainedModel"),vh.forEach(t),Zd=i(Sa," forward method, overrides the "),qs=s(Sa,"CODE",{});var Th=r(qs);Qd=i(Th,"__call__"),Th.forEach(t),Yd=i(Sa," special method."),Sa.forEach(t),ec=h(It),w(ut.$$.fragment,It),tc=h(It),w(gt.$$.fragment,It),It.forEach(t),H.forEach(t),Er=h(o),Ue=s(o,"H2",{class:!0});var Xr=r(Ue);_t=s(Xr,"A",{id:!0,class:!0,href:!0});var bh=r(_t);zs=s(bh,"SPAN",{});var wh=r(zs);w(Do.$$.fragment,wh),wh.forEach(t),bh.forEach(t),oc=h(Xr),Ns=s(Xr,"SPAN",{});var $h=r(Ns);ac=i($h,"FlaxViTForImageClassification"),$h.forEach(t),Xr.forEach(t),Mr=h(o),q=s(o,"DIV",{class:!0});var J=r(q);w(Oo.$$.fragment,J),sc=h(J),Ls=s(J,"P",{});var yh=r(Ls);rc=i(yh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yh.forEach(t),nc=h(J),So=s(J,"P",{});var Zr=r(So);ic=i(Zr,"This model inherits from "),Fa=s(Zr,"A",{href:!0});var xh=r(Fa);lc=i(xh,"FlaxPreTrainedModel"),xh.forEach(t),dc=i(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zr.forEach(t),cc=h(J),Wo=s(J,"P",{});var Qr=r(Wo);pc=i(Qr,"This model is also a Flax Linen "),Bo=s(Qr,"A",{href:!0,rel:!0});var Fh=r(Bo);hc=i(Fh,"flax.linen.Module"),Fh.forEach(t),mc=i(Qr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qr.forEach(t),fc=h(J),Ds=s(J,"P",{});var Vh=r(Ds);uc=i(Vh,"Finally, this model supports inherent JAX features such as:"),Vh.forEach(t),gc=h(J),ge=s(J,"UL",{});var jt=r(ge);Os=s(jt,"LI",{});var kh=r(Os);Uo=s(kh,"A",{href:!0,rel:!0});var Eh=r(Uo);_c=i(Eh,"Just-In-Time (JIT) compilation"),Eh.forEach(t),kh.forEach(t),vc=h(jt),Ss=s(jt,"LI",{});var Mh=r(Ss);Ro=s(Mh,"A",{href:!0,rel:!0});var Ih=r(Ro);Tc=i(Ih,"Automatic Differentiation"),Ih.forEach(t),Mh.forEach(t),bc=h(jt),Ws=s(jt,"LI",{});var jh=r(Ws);Ho=s(jh,"A",{href:!0,rel:!0});var Ch=r(Ho);wc=i(Ch,"Vectorization"),Ch.forEach(t),jh.forEach(t),$c=h(jt),Bs=s(jt,"LI",{});var Ph=r(Bs);Jo=s(Ph,"A",{href:!0,rel:!0});var Ah=r(Jo);yc=i(Ah,"Parallelization"),Ah.forEach(t),Ph.forEach(t),jt.forEach(t),xc=h(J),le=s(J,"DIV",{class:!0});var Ct=r(le);w(Ko.$$.fragment,Ct),Fc=h(Ct),Re=s(Ct,"P",{});var Wa=r(Re);Vc=i(Wa,"The "),Us=s(Wa,"CODE",{});var qh=r(Us);kc=i(qh,"FlaxViTPreTrainedModel"),qh.forEach(t),Ec=i(Wa," forward method, overrides the "),Rs=s(Wa,"CODE",{});var zh=r(Rs);Mc=i(zh,"__call__"),zh.forEach(t),Ic=i(Wa," special method."),Wa.forEach(t),jc=h(Ct),w(vt.$$.fragment,Ct),Cc=h(Ct),w(Tt.$$.fragment,Ct),Ct.forEach(t),J.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(lm)),c(m,"id","vision-transformer-vit"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#vision-transformer-vit"),c(u,"class","relative group"),c(U,"id","overview"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#overview"),c(j,"class","relative group"),c(X,"href","https://arxiv.org/abs/2010.11929"),c(X,"rel","nofollow"),c(Nt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(Nt,"rel","nofollow"),c(aa,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTFeatureExtractor"),c(Dt,"href","https://huggingface.co/models?search=vit"),c(Dt,"rel","nofollow"),c(Ot,"href","http://www.image-net.org/"),c(Ot,"rel","nofollow"),c(St,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(St,"rel","nofollow"),c(Wt,"href","https://arxiv.org/abs/1906.06423"),c(Wt,"rel","nofollow"),c(Bt,"href","https://arxiv.org/abs/1912.11370"),c(Bt,"rel","nofollow"),c(ra,"href","deit"),c(na,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTModel"),c(ia,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTForImageClassification"),c(la,"href","/docs/transformers/v4.19.1/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(ca,"href","beit"),c(Rt,"href","https://huggingface.co/models?other=dino"),c(Rt,"rel","nofollow"),c(ha,"href","vit_mae"),c(Ht,"href","https://huggingface.co/nielsr"),c(Ht,"rel","nofollow"),c(Jt,"href","https://github.com/google-research/vision_transformer"),c(Jt,"rel","nofollow"),c(Kt,"href","https://github.com/rwightman/pytorch-image-models"),c(Kt,"rel","nofollow"),c(Je,"id","transformers.ViTConfig"),c(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Je,"href","#transformers.ViTConfig"),c(ke,"class","relative group"),c(ma,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTModel"),c(Zt,"href","https://huggingface.co/google/vit-base-patch16-224"),c(Zt,"rel","nofollow"),c(fa,"href","/docs/transformers/v4.19.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(ua,"href","/docs/transformers/v4.19.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.ViTFeatureExtractor"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.ViTFeatureExtractor"),c(Ie,"class","relative group"),c(ga,"href","/docs/transformers/v4.19.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"id","transformers.ViTModel"),c(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ze,"href","#transformers.ViTModel"),c(je,"class","relative group"),c(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ro,"rel","nofollow"),c(_a,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTModel"),c(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(et,"id","transformers.ViTForMaskedImageModeling"),c(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(et,"href","#transformers.ViTForMaskedImageModeling"),c(Pe,"class","relative group"),c(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(co,"rel","nofollow"),c(va,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(at,"id","transformers.ViTForImageClassification"),c(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(at,"href","#transformers.ViTForImageClassification"),c(ze,"class","relative group"),c(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(uo,"rel","nofollow"),c(Ta,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.ViTForImageClassification"),c(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nt,"id","transformers.TFViTModel"),c(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nt,"href","#transformers.TFViTModel"),c(Le,"class","relative group"),c(ba,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wo,"rel","nofollow"),c(wa,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.TFViTModel"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ct,"id","transformers.TFViTForImageClassification"),c(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ct,"href","#transformers.TFViTForImageClassification"),c(Oe,"class","relative group"),c($a,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(ko,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ko,"rel","nofollow"),c(ya,"href","/docs/transformers/v4.19.1/en/model_doc/vit#transformers.TFViTForImageClassification"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ft,"id","transformers.FlaxViTModel"),c(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ft,"href","#transformers.FlaxViTModel"),c(We,"class","relative group"),c(xa,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Po,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Po,"rel","nofollow"),c(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ao,"rel","nofollow"),c(qo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qo,"rel","nofollow"),c(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zo,"rel","nofollow"),c(No,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(No,"rel","nofollow"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_t,"id","transformers.FlaxViTForImageClassification"),c(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_t,"href","#transformers.FlaxViTForImageClassification"),c(Ue,"class","relative group"),c(Fa,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Bo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Bo,"rel","nofollow"),c(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Uo,"rel","nofollow"),c(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ro,"rel","nofollow"),c(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ho,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Jo,"rel","nofollow"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,u,g),e(u,m),e(m,v),$(l,v,null),e(u,f),e(u,V),e(V,pe),_(o,R,g),$(M,o,g),_(o,ee,g),_(o,j,g),e(j,U),e(U,K),$(P,K,null),e(j,he),e(j,G),e(G,E),_(o,I,g),_(o,z,g),e(z,$e),e(z,X),e(X,L),e(z,ye),_(o,Te,g),_(o,ea,g),e(ea,Yr),_(o,rr,g),_(o,ta,g),e(ta,Ba),e(Ba,en),_(o,nr,g),_(o,oa,g),e(oa,tn),_(o,ir,g),_(o,N,g),e(N,zt),e(zt,on),e(zt,Nt),e(Nt,an),e(zt,sn),e(N,rn),e(N,Ua),e(Ua,nn),e(N,ln),e(N,Lt),e(Lt,dn),e(Lt,aa),e(aa,cn),e(Lt,pn),e(N,hn),e(N,xe),e(xe,mn),e(xe,Ra),e(Ra,fn),e(xe,un),e(xe,Dt),e(Dt,gn),e(xe,_n),e(N,vn),e(N,Fe),e(Fe,Tn),e(Fe,Ot),e(Ot,bn),e(Fe,wn),e(Fe,St),e(St,$n),e(Fe,yn),e(N,xn),e(N,Ve),e(Ve,Fn),e(Ve,Wt),e(Wt,Vn),e(Ve,kn),e(Ve,Bt),e(Bt,En),e(Ve,Mn),e(N,In),e(N,Ha),e(Ha,jn),_(o,lr,g),_(o,sa,g),e(sa,Cn),_(o,dr,g),_(o,te,g),e(te,Ja),e(Ja,C),e(C,ra),e(ra,Pn),e(C,An),e(C,na),e(na,qn),e(C,zn),e(C,ia),e(ia,Nn),e(C,Ln),e(C,Ka),e(Ka,Dn),e(C,On),e(C,Ga),e(Ga,Sn),e(C,Wn),e(C,Xa),e(Xa,Bn),e(C,Un),e(C,Za),e(Za,Rn),e(C,Hn),e(C,la),e(la,Jn),e(C,Kn),e(te,Gn),e(te,Qa),e(Qa,da),e(da,ca),e(ca,Xn),e(da,Zn),e(te,Qn),e(te,Ya),e(Ya,Ut),e(Ut,Yn),e(Ut,Rt),e(Rt,ei),e(Ut,ti),e(te,oi),e(te,es),e(es,pa),e(pa,ha),e(ha,ai),e(pa,si),_(o,cr,g),_(o,be,g),e(be,ri),e(be,Ht),e(Ht,ni),e(be,ii),e(be,Jt),e(Jt,li),e(be,di),_(o,pr,g),_(o,He,g),e(He,ci),e(He,Kt),e(Kt,pi),e(He,hi),_(o,hr,g),_(o,ke,g),e(ke,Je),e(Je,ts),$(Gt,ts,null),e(ke,mi),e(ke,os),e(os,fi),_(o,mr,g),_(o,Z,g),$(Xt,Z,null),e(Z,ui),e(Z,Ee),e(Ee,gi),e(Ee,ma),e(ma,_i),e(Ee,vi),e(Ee,Zt),e(Zt,Ti),e(Ee,bi),e(Z,wi),e(Z,Me),e(Me,$i),e(Me,fa),e(fa,yi),e(Me,xi),e(Me,ua),e(ua,Fi),e(Me,Vi),e(Z,ki),$(Ke,Z,null),_(o,fr,g),_(o,Ie,g),e(Ie,Ge),e(Ge,as),$(Qt,as,null),e(Ie,Ei),e(Ie,ss),e(ss,Mi),_(o,ur,g),_(o,Q,g),$(Yt,Q,null),e(Q,Ii),e(Q,rs),e(rs,ji),e(Q,Ci),e(Q,eo),e(eo,Pi),e(eo,ga),e(ga,Ai),e(eo,qi),e(Q,zi),e(Q,we),$(to,we,null),e(we,Ni),e(we,ns),e(ns,Li),e(we,Di),$(Xe,we,null),_(o,gr,g),_(o,je,g),e(je,Ze),e(Ze,is),$(oo,is,null),e(je,Oi),e(je,ls),e(ls,Si),_(o,_r,g),_(o,me,g),$(ao,me,null),e(me,Wi),e(me,so),e(so,Bi),e(so,ro),e(ro,Ui),e(so,Ri),e(me,Hi),e(me,oe),$(no,oe,null),e(oe,Ji),e(oe,Ce),e(Ce,Ki),e(Ce,_a),e(_a,Gi),e(Ce,Xi),e(Ce,ds),e(ds,Zi),e(Ce,Qi),e(oe,Yi),$(Qe,oe,null),e(oe,el),$(Ye,oe,null),_(o,vr,g),_(o,Pe,g),e(Pe,et),e(et,cs),$(io,cs,null),e(Pe,tl),e(Pe,ps),e(ps,ol),_(o,Tr,g),_(o,fe,g),$(lo,fe,null),e(fe,al),e(fe,Ae),e(Ae,sl),e(Ae,hs),e(hs,rl),e(Ae,nl),e(Ae,co),e(co,il),e(Ae,ll),e(fe,dl),e(fe,ae),$(po,ae,null),e(ae,cl),e(ae,qe),e(qe,pl),e(qe,va),e(va,hl),e(qe,ml),e(qe,ms),e(ms,fl),e(qe,ul),e(ae,gl),$(tt,ae,null),e(ae,_l),$(ot,ae,null),_(o,br,g),_(o,ze,g),e(ze,at),e(at,fs),$(ho,fs,null),e(ze,vl),e(ze,us),e(us,Tl),_(o,wr,g),_(o,Y,g),$(mo,Y,null),e(Y,bl),e(Y,gs),e(gs,wl),e(Y,$l),e(Y,fo),e(fo,yl),e(fo,uo),e(uo,xl),e(fo,Fl),e(Y,Vl),e(Y,se),$(go,se,null),e(se,kl),e(se,Ne),e(Ne,El),e(Ne,Ta),e(Ta,Ml),e(Ne,Il),e(Ne,_s),e(_s,jl),e(Ne,Cl),e(se,Pl),$(st,se,null),e(se,Al),$(rt,se,null),_(o,$r,g),_(o,Le,g),e(Le,nt),e(nt,vs),$(_o,vs,null),e(Le,ql),e(Le,Ts),e(Ts,zl),_(o,yr,g),_(o,D,g),$(vo,D,null),e(D,Nl),e(D,bs),e(bs,Ll),e(D,Dl),e(D,To),e(To,Ol),e(To,ba),e(ba,Sl),e(To,Wl),e(D,Bl),e(D,bo),e(bo,Ul),e(bo,wo),e(wo,Rl),e(bo,Hl),e(D,Jl),$(it,D,null),e(D,Kl),e(D,re),$($o,re,null),e(re,Gl),e(re,De),e(De,Xl),e(De,wa),e(wa,Zl),e(De,Ql),e(De,ws),e(ws,Yl),e(De,ed),e(re,td),$(lt,re,null),e(re,od),$(dt,re,null),_(o,xr,g),_(o,Oe,g),e(Oe,ct),e(ct,$s),$(yo,$s,null),e(Oe,ad),e(Oe,ys),e(ys,sd),_(o,Fr,g),_(o,O,g),$(xo,O,null),e(O,rd),e(O,xs),e(xs,nd),e(O,id),e(O,Fo),e(Fo,ld),e(Fo,$a),e($a,dd),e(Fo,cd),e(O,pd),e(O,Vo),e(Vo,hd),e(Vo,ko),e(ko,md),e(Vo,fd),e(O,ud),$(pt,O,null),e(O,gd),e(O,ne),$(Eo,ne,null),e(ne,_d),e(ne,Se),e(Se,vd),e(Se,ya),e(ya,Td),e(Se,bd),e(Se,Fs),e(Fs,wd),e(Se,$d),e(ne,yd),$(ht,ne,null),e(ne,xd),$(mt,ne,null),_(o,Vr,g),_(o,We,g),e(We,ft),e(ft,Vs),$(Mo,Vs,null),e(We,Fd),e(We,ks),e(ks,Vd),_(o,kr,g),_(o,A,g),$(Io,A,null),e(A,kd),e(A,Es),e(Es,Ed),e(A,Md),e(A,jo),e(jo,Id),e(jo,xa),e(xa,jd),e(jo,Cd),e(A,Pd),e(A,Co),e(Co,Ad),e(Co,Po),e(Po,qd),e(Co,zd),e(A,Nd),e(A,Ms),e(Ms,Ld),e(A,Dd),e(A,ue),e(ue,Is),e(Is,Ao),e(Ao,Od),e(ue,Sd),e(ue,js),e(js,qo),e(qo,Wd),e(ue,Bd),e(ue,Cs),e(Cs,zo),e(zo,Ud),e(ue,Rd),e(ue,Ps),e(Ps,No),e(No,Hd),e(A,Jd),e(A,ie),$(Lo,ie,null),e(ie,Kd),e(ie,Be),e(Be,Gd),e(Be,As),e(As,Xd),e(Be,Zd),e(Be,qs),e(qs,Qd),e(Be,Yd),e(ie,ec),$(ut,ie,null),e(ie,tc),$(gt,ie,null),_(o,Er,g),_(o,Ue,g),e(Ue,_t),e(_t,zs),$(Do,zs,null),e(Ue,oc),e(Ue,Ns),e(Ns,ac),_(o,Mr,g),_(o,q,g),$(Oo,q,null),e(q,sc),e(q,Ls),e(Ls,rc),e(q,nc),e(q,So),e(So,ic),e(So,Fa),e(Fa,lc),e(So,dc),e(q,cc),e(q,Wo),e(Wo,pc),e(Wo,Bo),e(Bo,hc),e(Wo,mc),e(q,fc),e(q,Ds),e(Ds,uc),e(q,gc),e(q,ge),e(ge,Os),e(Os,Uo),e(Uo,_c),e(ge,vc),e(ge,Ss),e(Ss,Ro),e(Ro,Tc),e(ge,bc),e(ge,Ws),e(Ws,Ho),e(Ho,wc),e(ge,$c),e(ge,Bs),e(Bs,Jo),e(Jo,yc),e(q,xc),e(q,le),$(Ko,le,null),e(le,Fc),e(le,Re),e(Re,Vc),e(Re,Us),e(Us,kc),e(Re,Ec),e(Re,Rs),e(Rs,Mc),e(Re,Ic),e(le,jc),$(vt,le,null),e(le,Cc),$(Tt,le,null),Ir=!0},p(o,[g]){const Go={};g&2&&(Go.$$scope={dirty:g,ctx:o}),M.$set(Go);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:o}),Ke.$set(Hs);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:o}),Xe.$set(Js);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:o}),Qe.$set(Ks);const Xo={};g&2&&(Xo.$$scope={dirty:g,ctx:o}),Ye.$set(Xo);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:o}),tt.$set(Gs);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:o}),ot.$set(Xs);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:o}),st.$set(Zs);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:o}),rt.$set(Zo);const Qs={};g&2&&(Qs.$$scope={dirty:g,ctx:o}),it.$set(Qs);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:o}),lt.$set(Ys);const er={};g&2&&(er.$$scope={dirty:g,ctx:o}),dt.$set(er);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:o}),pt.$set(tr);const or={};g&2&&(or.$$scope={dirty:g,ctx:o}),ht.$set(or);const S={};g&2&&(S.$$scope={dirty:g,ctx:o}),mt.$set(S);const Qo={};g&2&&(Qo.$$scope={dirty:g,ctx:o}),ut.$set(Qo);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:o}),gt.$set(ar);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:o}),vt.$set(sr);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:o}),Tt.$set(Yo)},i(o){Ir||(y(l.$$.fragment,o),y(M.$$.fragment,o),y(P.$$.fragment,o),y(Gt.$$.fragment,o),y(Xt.$$.fragment,o),y(Ke.$$.fragment,o),y(Qt.$$.fragment,o),y(Yt.$$.fragment,o),y(to.$$.fragment,o),y(Xe.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(no.$$.fragment,o),y(Qe.$$.fragment,o),y(Ye.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(po.$$.fragment,o),y(tt.$$.fragment,o),y(ot.$$.fragment,o),y(ho.$$.fragment,o),y(mo.$$.fragment,o),y(go.$$.fragment,o),y(st.$$.fragment,o),y(rt.$$.fragment,o),y(_o.$$.fragment,o),y(vo.$$.fragment,o),y(it.$$.fragment,o),y($o.$$.fragment,o),y(lt.$$.fragment,o),y(dt.$$.fragment,o),y(yo.$$.fragment,o),y(xo.$$.fragment,o),y(pt.$$.fragment,o),y(Eo.$$.fragment,o),y(ht.$$.fragment,o),y(mt.$$.fragment,o),y(Mo.$$.fragment,o),y(Io.$$.fragment,o),y(Lo.$$.fragment,o),y(ut.$$.fragment,o),y(gt.$$.fragment,o),y(Do.$$.fragment,o),y(Oo.$$.fragment,o),y(Ko.$$.fragment,o),y(vt.$$.fragment,o),y(Tt.$$.fragment,o),Ir=!0)},o(o){x(l.$$.fragment,o),x(M.$$.fragment,o),x(P.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Ke.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(to.$$.fragment,o),x(Xe.$$.fragment,o),x(oo.$$.fragment,o),x(ao.$$.fragment,o),x(no.$$.fragment,o),x(Qe.$$.fragment,o),x(Ye.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(po.$$.fragment,o),x(tt.$$.fragment,o),x(ot.$$.fragment,o),x(ho.$$.fragment,o),x(mo.$$.fragment,o),x(go.$$.fragment,o),x(st.$$.fragment,o),x(rt.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(it.$$.fragment,o),x($o.$$.fragment,o),x(lt.$$.fragment,o),x(dt.$$.fragment,o),x(yo.$$.fragment,o),x(xo.$$.fragment,o),x(pt.$$.fragment,o),x(Eo.$$.fragment,o),x(ht.$$.fragment,o),x(mt.$$.fragment,o),x(Mo.$$.fragment,o),x(Io.$$.fragment,o),x(Lo.$$.fragment,o),x(ut.$$.fragment,o),x(gt.$$.fragment,o),x(Do.$$.fragment,o),x(Oo.$$.fragment,o),x(Ko.$$.fragment,o),x(vt.$$.fragment,o),x(Tt.$$.fragment,o),Ir=!1},d(o){t(d),o&&t(T),o&&t(u),F(l),o&&t(R),F(M,o),o&&t(ee),o&&t(j),F(P),o&&t(I),o&&t(z),o&&t(Te),o&&t(ea),o&&t(rr),o&&t(ta),o&&t(nr),o&&t(oa),o&&t(ir),o&&t(N),o&&t(lr),o&&t(sa),o&&t(dr),o&&t(te),o&&t(cr),o&&t(be),o&&t(pr),o&&t(He),o&&t(hr),o&&t(ke),F(Gt),o&&t(mr),o&&t(Z),F(Xt),F(Ke),o&&t(fr),o&&t(Ie),F(Qt),o&&t(ur),o&&t(Q),F(Yt),F(to),F(Xe),o&&t(gr),o&&t(je),F(oo),o&&t(_r),o&&t(me),F(ao),F(no),F(Qe),F(Ye),o&&t(vr),o&&t(Pe),F(io),o&&t(Tr),o&&t(fe),F(lo),F(po),F(tt),F(ot),o&&t(br),o&&t(ze),F(ho),o&&t(wr),o&&t(Y),F(mo),F(go),F(st),F(rt),o&&t($r),o&&t(Le),F(_o),o&&t(yr),o&&t(D),F(vo),F(it),F($o),F(lt),F(dt),o&&t(xr),o&&t(Oe),F(yo),o&&t(Fr),o&&t(O),F(xo),F(pt),F(Eo),F(ht),F(mt),o&&t(Vr),o&&t(We),F(Mo),o&&t(kr),o&&t(A),F(Io),F(Lo),F(ut),F(gt),o&&t(Er),o&&t(Ue),F(Do),o&&t(Mr),o&&t(q),F(Oo),F(Ko),F(vt),F(Tt)}}}const lm={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function dm(k){return Sh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gm extends Nh{constructor(d){super();Lh(this,d,dm,im,Dh,{})}}export{gm as default,lm as metadata};
