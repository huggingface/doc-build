import{S as Nh,i as Lh,s as Dh,e as a,k as p,w as b,t as r,M as Oh,c as n,d as t,m as h,a as s,x as w,h as i,b as c,F as e,g as _,y as $,q as y,o as x,B as F,v as Sh,L as At}from"../../chunks/vendor-6b77c823.js";import{T as _e}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-1088f2fb.js";import{C as qt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Pt}from"../../chunks/ExampleCodeBlock-5212b321.js";function Wh(k){let d,T,u,m,v;return{c(){d=a("p"),T=r(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),u=a("a"),m=r("Github Issue"),v=r("."),this.h()},l(l){d=n(l,"P",{});var f=s(d);T=i(f,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),u=n(f,"A",{href:!0,rel:!0});var V=s(u);m=i(V,"Github Issue"),V.forEach(t),v=i(f,"."),f.forEach(t),this.h()},h(){c(u,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(u,"rel","nofollow")},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function Bh(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTModel, ViTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=r("Example:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Uh(k){let d,T;return{c(){d=a("p"),T=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){d=n(u,"P",{});var m=s(d);T=i(m,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),m.forEach(t)},m(u,m){_(u,d,m),e(d,T)},d(u){u&&t(d)}}}function Rh(k){let d,T,u,m,v;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var V=s(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),T=r("Example:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Jh(k){let d,T,u,m,v;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var V=s(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=a("p"),T=r("Examples:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Examples:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Gh(k){let d,T,u,m,v;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var V=s(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
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
Egyptian cat`}}),{c(){d=a("p"),T=r("Example:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function Zh(k){let d,T,u,m,v,l,f,V,pe,R,M,ee,j,U,K,P,he,G;return{c(){d=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=p(),m=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=p(),M=a("p"),ee=r("This second option is useful when using "),j=a("code"),U=r("tf.keras.Model.fit"),K=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),he=r("model(inputs)"),G=r(".")},l(E){d=n(E,"P",{});var I=s(d);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=h(E),m=n(E,"UL",{});var z=s(m);v=n(z,"LI",{});var $e=s(v);l=i($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),f=h(z),V=n(z,"LI",{});var X=s(V);pe=i(X,"having all inputs as a list, tuple or dict in the first positional arguments."),X.forEach(t),z.forEach(t),R=h(E),M=n(E,"P",{});var L=s(M);ee=i(L,"This second option is useful when using "),j=n(L,"CODE",{});var ye=s(j);U=i(ye,"tf.keras.Model.fit"),ye.forEach(t),K=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=n(L,"CODE",{});var Te=s(P);he=i(Te,"model(inputs)"),Te.forEach(t),G=i(L,"."),L.forEach(t)},m(E,I){_(E,d,I),e(d,T),_(E,u,I),_(E,m,I),e(m,v),e(v,l),e(m,f),e(m,V),e(V,pe),_(E,R,I),_(E,M,I),e(M,ee),e(M,j),e(j,U),e(M,K),e(M,P),e(P,he),e(M,G)},d(E){E&&t(d),E&&t(u),E&&t(m),E&&t(R),E&&t(M)}}}function Qh(k){let d,T,u,m,v;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var V=s(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),T=r("Example:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function em(k){let d,T,u,m,v,l,f,V,pe,R,M,ee,j,U,K,P,he,G;return{c(){d=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=p(),m=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=p(),M=a("p"),ee=r("This second option is useful when using "),j=a("code"),U=r("tf.keras.Model.fit"),K=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),he=r("model(inputs)"),G=r(".")},l(E){d=n(E,"P",{});var I=s(d);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=h(E),m=n(E,"UL",{});var z=s(m);v=n(z,"LI",{});var $e=s(v);l=i($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),f=h(z),V=n(z,"LI",{});var X=s(V);pe=i(X,"having all inputs as a list, tuple or dict in the first positional arguments."),X.forEach(t),z.forEach(t),R=h(E),M=n(E,"P",{});var L=s(M);ee=i(L,"This second option is useful when using "),j=n(L,"CODE",{});var ye=s(j);U=i(ye,"tf.keras.Model.fit"),ye.forEach(t),K=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=n(L,"CODE",{});var Te=s(P);he=i(Te,"model(inputs)"),Te.forEach(t),G=i(L,"."),L.forEach(t)},m(E,I){_(E,d,I),e(d,T),_(E,u,I),_(E,m,I),e(m,v),e(v,l),e(m,f),e(m,V),e(V,pe),_(E,R,I),_(E,M,I),e(M,ee),e(M,j),e(j,U),e(M,K),e(M,P),e(P,he),e(M,G)},d(E){E&&t(d),E&&t(u),E&&t(m),E&&t(R),E&&t(M)}}}function tm(k){let d,T,u,m,v;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var V=s(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
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
Egyptian cat`}}),{c(){d=a("p"),T=r("Example:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function am(k){let d,T,u,m,v;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var V=s(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function nm(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=r("Examples:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Examples:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function sm(k){let d,T,u,m,v;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var V=s(u);m=i(V,"Module"),V.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,T),e(d,u),e(u,m),e(d,v)},d(l){l&&t(d)}}}function rm(k){let d,T,u,m,v;return m=new qt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=a("p"),T=r("Example:"),u=p(),b(m.$$.fragment)},l(l){d=n(l,"P",{});var f=s(d);T=i(f,"Example:"),f.forEach(t),u=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,T),_(l,u,f),$(m,l,f),v=!0},p:At,i(l){v||(y(m.$$.fragment,l),v=!0)},o(l){x(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(m,l)}}}function im(k){let d,T,u,m,v,l,f,V,pe,R,M,ee,j,U,K,P,he,G,E,I,z,$e,X,L,ye,Te,ea,er,rs,ta,Ba,tr,is,oa,or,ls,N,zt,ar,Nt,nr,sr,rr,Ua,ir,lr,Lt,dr,aa,cr,pr,hr,xe,mr,Ra,fr,ur,Dt,gr,_r,vr,Fe,Tr,Ot,br,wr,St,$r,yr,xr,Ve,Fr,Wt,Vr,kr,Bt,Er,Mr,Ir,Ha,jr,ds,na,Cr,cs,te,Ja,C,sa,Pr,Ar,ra,qr,zr,ia,Nr,Lr,Ka,Dr,Or,Ga,Sr,Wr,Xa,Br,Ur,Za,Rr,Hr,la,Jr,Kr,Gr,Qa,da,ca,Xr,Zr,Qr,Ya,Ut,Yr,Rt,ei,ti,oi,en,pa,ha,ai,ni,ps,be,si,Ht,ri,ii,Jt,li,di,hs,He,ci,Kt,pi,hi,ms,ke,Je,tn,Gt,mi,on,fi,fs,Z,Xt,ui,Ee,gi,ma,_i,vi,Zt,Ti,bi,wi,Me,$i,fa,yi,xi,ua,Fi,Vi,ki,Ke,us,Ie,Ge,an,Qt,Ei,nn,Mi,gs,Q,Yt,Ii,sn,ji,Ci,eo,Pi,ga,Ai,qi,zi,we,to,Ni,rn,Li,Di,Xe,_s,je,Ze,ln,oo,Oi,dn,Si,vs,me,ao,Wi,no,Bi,so,Ui,Ri,Hi,oe,ro,Ji,Ce,Ki,_a,Gi,Xi,cn,Zi,Qi,Yi,Qe,el,Ye,Ts,Pe,et,pn,io,tl,hn,ol,bs,fe,lo,al,Ae,nl,mn,sl,rl,co,il,ll,dl,ae,po,cl,qe,pl,va,hl,ml,fn,fl,ul,gl,tt,_l,ot,ws,ze,at,un,ho,vl,gn,Tl,$s,Y,mo,bl,_n,wl,$l,fo,yl,uo,xl,Fl,Vl,ne,go,kl,Ne,El,Ta,Ml,Il,vn,jl,Cl,Pl,nt,Al,st,ys,Le,rt,Tn,_o,ql,bn,zl,xs,D,vo,Nl,wn,Ll,Dl,To,Ol,ba,Sl,Wl,Bl,bo,Ul,wo,Rl,Hl,Jl,it,Kl,se,$o,Gl,De,Xl,wa,Zl,Ql,$n,Yl,ed,td,lt,od,dt,Fs,Oe,ct,yn,yo,ad,xn,nd,Vs,O,xo,sd,Fn,rd,id,Fo,ld,$a,dd,cd,pd,Vo,hd,ko,md,fd,ud,pt,gd,re,Eo,_d,Se,vd,ya,Td,bd,Vn,wd,$d,yd,ht,xd,mt,ks,We,ft,kn,Mo,Fd,En,Vd,Es,A,Io,kd,Mn,Ed,Md,jo,Id,xa,jd,Cd,Pd,Co,Ad,Po,qd,zd,Nd,In,Ld,Dd,ue,jn,Ao,Od,Sd,Cn,qo,Wd,Bd,Pn,zo,Ud,Rd,An,No,Hd,Jd,ie,Lo,Kd,Be,Gd,qn,Xd,Zd,zn,Qd,Yd,ec,ut,tc,gt,Ms,Ue,_t,Nn,Do,oc,Ln,ac,Is,q,Oo,nc,Dn,sc,rc,So,ic,Fa,lc,dc,cc,Wo,pc,Bo,hc,mc,fc,On,uc,gc,ge,Sn,Uo,_c,vc,Wn,Ro,Tc,bc,Bn,Ho,wc,$c,Un,Jo,yc,xc,le,Ko,Fc,Re,Vc,Rn,kc,Ec,Hn,Mc,Ic,jc,vt,Cc,Tt,js;return l=new ve({}),M=new _e({props:{$$slots:{default:[Wh]},$$scope:{ctx:k}}}),P=new ve({}),Gt=new ve({}),Xt=new B({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/configuration_vit.py#L35"}}),Ke=new Pt({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[Bh]},$$scope:{ctx:k}}}),Qt=new ve({}),Yt=new B({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/feature_extraction_vit.py#L36"}}),to=new B({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/feature_extraction_vit.py#L82",returnDescription:`
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
`}}),Xe=new _e({props:{warning:!0,$$slots:{default:[Uh]},$$scope:{ctx:k}}}),oo=new ve({}),ao=new B({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_vit.py#L512"}}),ro=new B({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_vit.py#L537",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new _e({props:{$$slots:{default:[Rh]},$$scope:{ctx:k}}}),Ye=new Pt({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[Hh]},$$scope:{ctx:k}}}),io=new ve({}),lo=new B({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_vit.py#L618"}}),po=new B({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_vit.py#L632",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new _e({props:{$$slots:{default:[Jh]},$$scope:{ctx:k}}}),ot=new Pt({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[Kh]},$$scope:{ctx:k}}}),ho=new ve({}),mo=new B({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_vit.py#L728"}}),go=new B({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_vit.py#L741",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
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
`}}),nt=new _e({props:{$$slots:{default:[Gh]},$$scope:{ctx:k}}}),st=new Pt({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[Xh]},$$scope:{ctx:k}}}),_o=new ve({}),vo=new B({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_tf_vit.py#L649"}}),it=new _e({props:{$$slots:{default:[Zh]},$$scope:{ctx:k}}}),$o=new B({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_tf_vit.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lt=new _e({props:{$$slots:{default:[Qh]},$$scope:{ctx:k}}}),dt=new Pt({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[Yh]},$$scope:{ctx:k}}}),yo=new ve({}),xo=new B({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_tf_vit.py#L727"}}),pt=new _e({props:{$$slots:{default:[em]},$$scope:{ctx:k}}}),Eo=new B({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_tf_vit.py#L741",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ht=new _e({props:{$$slots:{default:[tm]},$$scope:{ctx:k}}}),mt=new Pt({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[om]},$$scope:{ctx:k}}}),Mo=new ve({}),Io=new B({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_flax_vit.py#L529"}}),Lo=new B({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_flax_vit.py#L444",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new _e({props:{$$slots:{default:[am]},$$scope:{ctx:k}}}),gt=new Pt({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[nm]},$$scope:{ctx:k}}}),Do=new ve({}),Oo=new B({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_flax_vit.py#L610"}}),Ko=new B({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/vit/modeling_flax_vit.py#L444",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new _e({props:{$$slots:{default:[sm]},$$scope:{ctx:k}}}),Tt=new Pt({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[rm]},$$scope:{ctx:k}}}),{c(){d=a("meta"),T=p(),u=a("h1"),m=a("a"),v=a("span"),b(l.$$.fragment),f=p(),V=a("span"),pe=r("Vision Transformer (ViT)"),R=p(),b(M.$$.fragment),ee=p(),j=a("h2"),U=a("a"),K=a("span"),b(P.$$.fragment),he=p(),G=a("span"),E=r("Overview"),I=p(),z=a("p"),$e=r("The Vision Transformer (ViT) model was proposed in "),X=a("a"),L=r(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ye=r(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=p(),ea=a("p"),er=r("The abstract from the paper is the following:"),rs=p(),ta=a("p"),Ba=a("em"),tr=r(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),is=p(),oa=a("p"),or=r("Tips:"),ls=p(),N=a("ul"),zt=a("li"),ar=r("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Nt=a("a"),nr=r("here"),sr=r("."),rr=p(),Ua=a("li"),ir=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),lr=p(),Lt=a("li"),dr=r(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),aa=a("a"),cr=r("ViTFeatureExtractor"),pr=r(" to resize (or rescale) and normalize images for the model."),hr=p(),xe=a("li"),mr=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ra=a("code"),fr=r("google/vit-base-patch16-224"),ur=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Dt=a("a"),gr=r("hub"),_r=r("."),vr=p(),Fe=a("li"),Tr=r("The available checkpoints are either (1) pre-trained on "),Ot=a("a"),br=r("ImageNet-21k"),wr=r(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),St=a("a"),$r=r("ImageNet"),yr=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),xr=p(),Ve=a("li"),Fr=r(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Wt=a("a"),Vr=r("(Touvron et al., 2019)"),kr=r(", "),Bt=a("a"),Er=r(`(Kolesnikov
et al., 2020)`),Mr=r(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),Ir=p(),Ha=a("li"),jr=r(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ds=p(),na=a("p"),Cr=r("Following the original Vision Transformer, some follow-up works have been made:"),cs=p(),te=a("ul"),Ja=a("li"),C=a("p"),sa=a("a"),Pr=r("DeiT"),Ar=r(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),ra=a("a"),qr=r("ViTModel"),zr=r(` or
`),ia=a("a"),Nr=r("ViTForImageClassification"),Lr=r(". There are 4 variants available (in 3 different sizes): "),Ka=a("em"),Dr=r("facebook/deit-tiny-patch16-224"),Or=r(`,
`),Ga=a("em"),Sr=r("facebook/deit-small-patch16-224"),Wr=r(", "),Xa=a("em"),Br=r("facebook/deit-base-patch16-224"),Ur=r(" and "),Za=a("em"),Rr=r("facebook/deit-base-patch16-384"),Hr=r(`. Note that one should
use `),la=a("a"),Jr=r("DeiTFeatureExtractor"),Kr=r(" in order to prepare images for the model."),Gr=p(),Qa=a("li"),da=a("p"),ca=a("a"),Xr=r("BEiT"),Zr=r(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Qr=p(),Ya=a("li"),Ut=a("p"),Yr=r(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Rt=a("a"),ei=r("hub"),ti=r("."),oi=p(),en=a("li"),pa=a("p"),ha=a("a"),ai=r("MAE"),ni=r(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),ps=p(),be=a("p"),si=r("This model was contributed by "),Ht=a("a"),ri=r("nielsr"),ii=r(`. The original code (written in JAX) can be
found `),Jt=a("a"),li=r("here"),di=r("."),hs=p(),He=a("p"),ci=r("Note that we converted the weights from Ross Wightman\u2019s "),Kt=a("a"),pi=r("timm library"),hi=r(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),ms=p(),ke=a("h2"),Je=a("a"),tn=a("span"),b(Gt.$$.fragment),mi=p(),on=a("span"),fi=r("ViTConfig"),fs=p(),Z=a("div"),b(Xt.$$.fragment),ui=p(),Ee=a("p"),gi=r("This is the configuration class to store the configuration of a "),ma=a("a"),_i=r("ViTModel"),vi=r(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Zt=a("a"),Ti=r("google/vit-base-patch16-224"),bi=r(" architecture."),wi=p(),Me=a("p"),$i=r("Configuration objects inherit from "),fa=a("a"),yi=r("PretrainedConfig"),xi=r(` and can be used to control the model outputs. Read the
documentation from `),ua=a("a"),Fi=r("PretrainedConfig"),Vi=r(" for more information."),ki=p(),b(Ke.$$.fragment),us=p(),Ie=a("h2"),Ge=a("a"),an=a("span"),b(Qt.$$.fragment),Ei=p(),nn=a("span"),Mi=r("ViTFeatureExtractor"),gs=p(),Q=a("div"),b(Yt.$$.fragment),Ii=p(),sn=a("p"),ji=r("Constructs a ViT feature extractor."),Ci=p(),eo=a("p"),Pi=r("This feature extractor inherits from "),ga=a("a"),Ai=r("FeatureExtractionMixin"),qi=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zi=p(),we=a("div"),b(to.$$.fragment),Ni=p(),rn=a("p"),Li=r("Main method to prepare for the model one or several image(s)."),Di=p(),b(Xe.$$.fragment),_s=p(),je=a("h2"),Ze=a("a"),ln=a("span"),b(oo.$$.fragment),Oi=p(),dn=a("span"),Si=r("ViTModel"),vs=p(),me=a("div"),b(ao.$$.fragment),Wi=p(),no=a("p"),Bi=r(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),so=a("a"),Ui=r("torch.nn.Module"),Ri=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hi=p(),oe=a("div"),b(ro.$$.fragment),Ji=p(),Ce=a("p"),Ki=r("The "),_a=a("a"),Gi=r("ViTModel"),Xi=r(" forward method, overrides the "),cn=a("code"),Zi=r("__call__"),Qi=r(" special method."),Yi=p(),b(Qe.$$.fragment),el=p(),b(Ye.$$.fragment),Ts=p(),Pe=a("h2"),et=a("a"),pn=a("span"),b(io.$$.fragment),tl=p(),hn=a("span"),ol=r("ViTForMaskedImageModeling"),bs=p(),fe=a("div"),b(lo.$$.fragment),al=p(),Ae=a("p"),nl=r("ViT Model with a decoder on top for masked image modeling, as proposed in "),mn=a("code"),sl=r("SimMIM <https://arxiv.org/abs/2111.09886>"),rl=r(`__.
This model is a PyTorch `),co=a("a"),il=r("torch.nn.Module"),ll=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=p(),ae=a("div"),b(po.$$.fragment),cl=p(),qe=a("p"),pl=r("The "),va=a("a"),hl=r("ViTForMaskedImageModeling"),ml=r(" forward method, overrides the "),fn=a("code"),fl=r("__call__"),ul=r(" special method."),gl=p(),b(tt.$$.fragment),_l=p(),b(ot.$$.fragment),ws=p(),ze=a("h2"),at=a("a"),un=a("span"),b(ho.$$.fragment),vl=p(),gn=a("span"),Tl=r("ViTForImageClassification"),$s=p(),Y=a("div"),b(mo.$$.fragment),bl=p(),_n=a("p"),wl=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),$l=p(),fo=a("p"),yl=r("This model is a PyTorch "),uo=a("a"),xl=r("torch.nn.Module"),Fl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vl=p(),ne=a("div"),b(go.$$.fragment),kl=p(),Ne=a("p"),El=r("The "),Ta=a("a"),Ml=r("ViTForImageClassification"),Il=r(" forward method, overrides the "),vn=a("code"),jl=r("__call__"),Cl=r(" special method."),Pl=p(),b(nt.$$.fragment),Al=p(),b(st.$$.fragment),ys=p(),Le=a("h2"),rt=a("a"),Tn=a("span"),b(_o.$$.fragment),ql=p(),bn=a("span"),zl=r("TFViTModel"),xs=p(),D=a("div"),b(vo.$$.fragment),Nl=p(),wn=a("p"),Ll=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Dl=p(),To=a("p"),Ol=r("This model inherits from "),ba=a("a"),Sl=r("TFPreTrainedModel"),Wl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=p(),bo=a("p"),Ul=r("This model is also a "),wo=a("a"),Rl=r("tf.keras.Model"),Hl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jl=p(),b(it.$$.fragment),Kl=p(),se=a("div"),b($o.$$.fragment),Gl=p(),De=a("p"),Xl=r("The "),wa=a("a"),Zl=r("TFViTModel"),Ql=r(" forward method, overrides the "),$n=a("code"),Yl=r("__call__"),ed=r(" special method."),td=p(),b(lt.$$.fragment),od=p(),b(dt.$$.fragment),Fs=p(),Oe=a("h2"),ct=a("a"),yn=a("span"),b(yo.$$.fragment),ad=p(),xn=a("span"),nd=r("TFViTForImageClassification"),Vs=p(),O=a("div"),b(xo.$$.fragment),sd=p(),Fn=a("p"),rd=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),id=p(),Fo=a("p"),ld=r("This model inherits from "),$a=a("a"),dd=r("TFPreTrainedModel"),cd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=p(),Vo=a("p"),hd=r("This model is also a "),ko=a("a"),md=r("tf.keras.Model"),fd=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud=p(),b(pt.$$.fragment),gd=p(),re=a("div"),b(Eo.$$.fragment),_d=p(),Se=a("p"),vd=r("The "),ya=a("a"),Td=r("TFViTForImageClassification"),bd=r(" forward method, overrides the "),Vn=a("code"),wd=r("__call__"),$d=r(" special method."),yd=p(),b(ht.$$.fragment),xd=p(),b(mt.$$.fragment),ks=p(),We=a("h2"),ft=a("a"),kn=a("span"),b(Mo.$$.fragment),Fd=p(),En=a("span"),Vd=r("FlaxVitModel"),Es=p(),A=a("div"),b(Io.$$.fragment),kd=p(),Mn=a("p"),Ed=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Md=p(),jo=a("p"),Id=r("This model inherits from "),xa=a("a"),jd=r("FlaxPreTrainedModel"),Cd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pd=p(),Co=a("p"),Ad=r("This model is also a Flax Linen "),Po=a("a"),qd=r("flax.linen.Module"),zd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nd=p(),In=a("p"),Ld=r("Finally, this model supports inherent JAX features such as:"),Dd=p(),ue=a("ul"),jn=a("li"),Ao=a("a"),Od=r("Just-In-Time (JIT) compilation"),Sd=p(),Cn=a("li"),qo=a("a"),Wd=r("Automatic Differentiation"),Bd=p(),Pn=a("li"),zo=a("a"),Ud=r("Vectorization"),Rd=p(),An=a("li"),No=a("a"),Hd=r("Parallelization"),Jd=p(),ie=a("div"),b(Lo.$$.fragment),Kd=p(),Be=a("p"),Gd=r("The "),qn=a("code"),Xd=r("FlaxViTPreTrainedModel"),Zd=r(" forward method, overrides the "),zn=a("code"),Qd=r("__call__"),Yd=r(" special method."),ec=p(),b(ut.$$.fragment),tc=p(),b(gt.$$.fragment),Ms=p(),Ue=a("h2"),_t=a("a"),Nn=a("span"),b(Do.$$.fragment),oc=p(),Ln=a("span"),ac=r("FlaxViTForImageClassification"),Is=p(),q=a("div"),b(Oo.$$.fragment),nc=p(),Dn=a("p"),sc=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),rc=p(),So=a("p"),ic=r("This model inherits from "),Fa=a("a"),lc=r("FlaxPreTrainedModel"),dc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cc=p(),Wo=a("p"),pc=r("This model is also a Flax Linen "),Bo=a("a"),hc=r("flax.linen.Module"),mc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fc=p(),On=a("p"),uc=r("Finally, this model supports inherent JAX features such as:"),gc=p(),ge=a("ul"),Sn=a("li"),Uo=a("a"),_c=r("Just-In-Time (JIT) compilation"),vc=p(),Wn=a("li"),Ro=a("a"),Tc=r("Automatic Differentiation"),bc=p(),Bn=a("li"),Ho=a("a"),wc=r("Vectorization"),$c=p(),Un=a("li"),Jo=a("a"),yc=r("Parallelization"),xc=p(),le=a("div"),b(Ko.$$.fragment),Fc=p(),Re=a("p"),Vc=r("The "),Rn=a("code"),kc=r("FlaxViTPreTrainedModel"),Ec=r(" forward method, overrides the "),Hn=a("code"),Mc=r("__call__"),Ic=r(" special method."),jc=p(),b(vt.$$.fragment),Cc=p(),b(Tt.$$.fragment),this.h()},l(o){const g=Oh('[data-svelte="svelte-1phssyn"]',document.head);d=n(g,"META",{name:!0,content:!0}),g.forEach(t),T=h(o),u=n(o,"H1",{class:!0});var Go=s(u);m=n(Go,"A",{id:!0,class:!0,href:!0});var Jn=s(m);v=n(Jn,"SPAN",{});var Kn=s(v);w(l.$$.fragment,Kn),Kn.forEach(t),Jn.forEach(t),f=h(Go),V=n(Go,"SPAN",{});var Gn=s(V);pe=i(Gn,"Vision Transformer (ViT)"),Gn.forEach(t),Go.forEach(t),R=h(o),w(M.$$.fragment,o),ee=h(o),j=n(o,"H2",{class:!0});var Xo=s(j);U=n(Xo,"A",{id:!0,class:!0,href:!0});var Xn=s(U);K=n(Xn,"SPAN",{});var Zn=s(K);w(P.$$.fragment,Zn),Zn.forEach(t),Xn.forEach(t),he=h(Xo),G=n(Xo,"SPAN",{});var Qn=s(G);E=i(Qn,"Overview"),Qn.forEach(t),Xo.forEach(t),I=h(o),z=n(o,"P",{});var Zo=s(z);$e=i(Zo,"The Vision Transformer (ViT) model was proposed in "),X=n(Zo,"A",{href:!0,rel:!0});var Yn=s(X);L=i(Yn,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Yn.forEach(t),ye=i(Zo,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Zo.forEach(t),Te=h(o),ea=n(o,"P",{});var es=s(ea);er=i(es,"The abstract from the paper is the following:"),es.forEach(t),rs=h(o),ta=n(o,"P",{});var ts=s(ta);Ba=n(ts,"EM",{});var os=s(Ba);tr=i(os,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),os.forEach(t),ts.forEach(t),is=h(o),oa=n(o,"P",{});var as=s(oa);or=i(as,"Tips:"),as.forEach(t),ls=h(o),N=n(o,"UL",{});var S=s(N);zt=n(S,"LI",{});var Qo=s(zt);ar=i(Qo,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Nt=n(Qo,"A",{href:!0,rel:!0});var ns=s(Nt);nr=i(ns,"here"),ns.forEach(t),sr=i(Qo,"."),Qo.forEach(t),rr=h(S),Ua=n(S,"LI",{});var ss=s(Ua);ir=i(ss,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),ss.forEach(t),lr=h(S),Lt=n(S,"LI",{});var Yo=s(Lt);dr=i(Yo,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),aa=n(Yo,"A",{href:!0});var qc=s(aa);cr=i(qc,"ViTFeatureExtractor"),qc.forEach(t),pr=i(Yo," to resize (or rescale) and normalize images for the model."),Yo.forEach(t),hr=h(S),xe=n(S,"LI",{});var Va=s(xe);mr=i(Va,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ra=n(Va,"CODE",{});var zc=s(Ra);fr=i(zc,"google/vit-base-patch16-224"),zc.forEach(t),ur=i(Va,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Dt=n(Va,"A",{href:!0,rel:!0});var Nc=s(Dt);gr=i(Nc,"hub"),Nc.forEach(t),_r=i(Va,"."),Va.forEach(t),vr=h(S),Fe=n(S,"LI",{});var ka=s(Fe);Tr=i(ka,"The available checkpoints are either (1) pre-trained on "),Ot=n(ka,"A",{href:!0,rel:!0});var Lc=s(Ot);br=i(Lc,"ImageNet-21k"),Lc.forEach(t),wr=i(ka,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),St=n(ka,"A",{href:!0,rel:!0});var Dc=s(St);$r=i(Dc,"ImageNet"),Dc.forEach(t),yr=i(ka,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),ka.forEach(t),xr=h(S),Ve=n(S,"LI",{});var Ea=s(Ve);Fr=i(Ea,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Wt=n(Ea,"A",{href:!0,rel:!0});var Oc=s(Wt);Vr=i(Oc,"(Touvron et al., 2019)"),Oc.forEach(t),kr=i(Ea,", "),Bt=n(Ea,"A",{href:!0,rel:!0});var Sc=s(Bt);Er=i(Sc,`(Kolesnikov
et al., 2020)`),Sc.forEach(t),Mr=i(Ea,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),Ea.forEach(t),Ir=h(S),Ha=n(S,"LI",{});var Wc=s(Ha);jr=i(Wc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Wc.forEach(t),S.forEach(t),ds=h(o),na=n(o,"P",{});var Bc=s(na);Cr=i(Bc,"Following the original Vision Transformer, some follow-up works have been made:"),Bc.forEach(t),cs=h(o),te=n(o,"UL",{});var bt=s(te);Ja=n(bt,"LI",{});var Uc=s(Ja);C=n(Uc,"P",{});var W=s(C);sa=n(W,"A",{href:!0});var Rc=s(sa);Pr=i(Rc,"DeiT"),Rc.forEach(t),Ar=i(W,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),ra=n(W,"A",{href:!0});var Hc=s(ra);qr=i(Hc,"ViTModel"),Hc.forEach(t),zr=i(W,` or
`),ia=n(W,"A",{href:!0});var Jc=s(ia);Nr=i(Jc,"ViTForImageClassification"),Jc.forEach(t),Lr=i(W,". There are 4 variants available (in 3 different sizes): "),Ka=n(W,"EM",{});var Kc=s(Ka);Dr=i(Kc,"facebook/deit-tiny-patch16-224"),Kc.forEach(t),Or=i(W,`,
`),Ga=n(W,"EM",{});var Gc=s(Ga);Sr=i(Gc,"facebook/deit-small-patch16-224"),Gc.forEach(t),Wr=i(W,", "),Xa=n(W,"EM",{});var Xc=s(Xa);Br=i(Xc,"facebook/deit-base-patch16-224"),Xc.forEach(t),Ur=i(W," and "),Za=n(W,"EM",{});var Zc=s(Za);Rr=i(Zc,"facebook/deit-base-patch16-384"),Zc.forEach(t),Hr=i(W,`. Note that one should
use `),la=n(W,"A",{href:!0});var Qc=s(la);Jr=i(Qc,"DeiTFeatureExtractor"),Qc.forEach(t),Kr=i(W," in order to prepare images for the model."),W.forEach(t),Uc.forEach(t),Gr=h(bt),Qa=n(bt,"LI",{});var Yc=s(Qa);da=n(Yc,"P",{});var Pc=s(da);ca=n(Pc,"A",{href:!0});var ep=s(ca);Xr=i(ep,"BEiT"),ep.forEach(t),Zr=i(Pc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Pc.forEach(t),Yc.forEach(t),Qr=h(bt),Ya=n(bt,"LI",{});var tp=s(Ya);Ut=n(tp,"P",{});var Cs=s(Ut);Yr=i(Cs,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Rt=n(Cs,"A",{href:!0,rel:!0});var op=s(Rt);ei=i(op,"hub"),op.forEach(t),ti=i(Cs,"."),Cs.forEach(t),tp.forEach(t),oi=h(bt),en=n(bt,"LI",{});var ap=s(en);pa=n(ap,"P",{});var Ac=s(pa);ha=n(Ac,"A",{href:!0});var np=s(ha);ai=i(np,"MAE"),np.forEach(t),ni=i(Ac,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Ac.forEach(t),ap.forEach(t),bt.forEach(t),ps=h(o),be=n(o,"P",{});var Ma=s(be);si=i(Ma,"This model was contributed by "),Ht=n(Ma,"A",{href:!0,rel:!0});var sp=s(Ht);ri=i(sp,"nielsr"),sp.forEach(t),ii=i(Ma,`. The original code (written in JAX) can be
found `),Jt=n(Ma,"A",{href:!0,rel:!0});var rp=s(Jt);li=i(rp,"here"),rp.forEach(t),di=i(Ma,"."),Ma.forEach(t),hs=h(o),He=n(o,"P",{});var Ps=s(He);ci=i(Ps,"Note that we converted the weights from Ross Wightman\u2019s "),Kt=n(Ps,"A",{href:!0,rel:!0});var ip=s(Kt);pi=i(ip,"timm library"),ip.forEach(t),hi=i(Ps,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Ps.forEach(t),ms=h(o),ke=n(o,"H2",{class:!0});var As=s(ke);Je=n(As,"A",{id:!0,class:!0,href:!0});var lp=s(Je);tn=n(lp,"SPAN",{});var dp=s(tn);w(Gt.$$.fragment,dp),dp.forEach(t),lp.forEach(t),mi=h(As),on=n(As,"SPAN",{});var cp=s(on);fi=i(cp,"ViTConfig"),cp.forEach(t),As.forEach(t),fs=h(o),Z=n(o,"DIV",{class:!0});var wt=s(Z);w(Xt.$$.fragment,wt),ui=h(wt),Ee=n(wt,"P",{});var Ia=s(Ee);gi=i(Ia,"This is the configuration class to store the configuration of a "),ma=n(Ia,"A",{href:!0});var pp=s(ma);_i=i(pp,"ViTModel"),pp.forEach(t),vi=i(Ia,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Zt=n(Ia,"A",{href:!0,rel:!0});var hp=s(Zt);Ti=i(hp,"google/vit-base-patch16-224"),hp.forEach(t),bi=i(Ia," architecture."),Ia.forEach(t),wi=h(wt),Me=n(wt,"P",{});var ja=s(Me);$i=i(ja,"Configuration objects inherit from "),fa=n(ja,"A",{href:!0});var mp=s(fa);yi=i(mp,"PretrainedConfig"),mp.forEach(t),xi=i(ja,` and can be used to control the model outputs. Read the
documentation from `),ua=n(ja,"A",{href:!0});var fp=s(ua);Fi=i(fp,"PretrainedConfig"),fp.forEach(t),Vi=i(ja," for more information."),ja.forEach(t),ki=h(wt),w(Ke.$$.fragment,wt),wt.forEach(t),us=h(o),Ie=n(o,"H2",{class:!0});var qs=s(Ie);Ge=n(qs,"A",{id:!0,class:!0,href:!0});var up=s(Ge);an=n(up,"SPAN",{});var gp=s(an);w(Qt.$$.fragment,gp),gp.forEach(t),up.forEach(t),Ei=h(qs),nn=n(qs,"SPAN",{});var _p=s(nn);Mi=i(_p,"ViTFeatureExtractor"),_p.forEach(t),qs.forEach(t),gs=h(o),Q=n(o,"DIV",{class:!0});var $t=s(Q);w(Yt.$$.fragment,$t),Ii=h($t),sn=n($t,"P",{});var vp=s(sn);ji=i(vp,"Constructs a ViT feature extractor."),vp.forEach(t),Ci=h($t),eo=n($t,"P",{});var zs=s(eo);Pi=i(zs,"This feature extractor inherits from "),ga=n(zs,"A",{href:!0});var Tp=s(ga);Ai=i(Tp,"FeatureExtractionMixin"),Tp.forEach(t),qi=i(zs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zs.forEach(t),zi=h($t),we=n($t,"DIV",{class:!0});var Ca=s(we);w(to.$$.fragment,Ca),Ni=h(Ca),rn=n(Ca,"P",{});var bp=s(rn);Li=i(bp,"Main method to prepare for the model one or several image(s)."),bp.forEach(t),Di=h(Ca),w(Xe.$$.fragment,Ca),Ca.forEach(t),$t.forEach(t),_s=h(o),je=n(o,"H2",{class:!0});var Ns=s(je);Ze=n(Ns,"A",{id:!0,class:!0,href:!0});var wp=s(Ze);ln=n(wp,"SPAN",{});var $p=s(ln);w(oo.$$.fragment,$p),$p.forEach(t),wp.forEach(t),Oi=h(Ns),dn=n(Ns,"SPAN",{});var yp=s(dn);Si=i(yp,"ViTModel"),yp.forEach(t),Ns.forEach(t),vs=h(o),me=n(o,"DIV",{class:!0});var Pa=s(me);w(ao.$$.fragment,Pa),Wi=h(Pa),no=n(Pa,"P",{});var Ls=s(no);Bi=i(Ls,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),so=n(Ls,"A",{href:!0,rel:!0});var xp=s(so);Ui=i(xp,"torch.nn.Module"),xp.forEach(t),Ri=i(Ls,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls.forEach(t),Hi=h(Pa),oe=n(Pa,"DIV",{class:!0});var yt=s(oe);w(ro.$$.fragment,yt),Ji=h(yt),Ce=n(yt,"P",{});var Aa=s(Ce);Ki=i(Aa,"The "),_a=n(Aa,"A",{href:!0});var Fp=s(_a);Gi=i(Fp,"ViTModel"),Fp.forEach(t),Xi=i(Aa," forward method, overrides the "),cn=n(Aa,"CODE",{});var Vp=s(cn);Zi=i(Vp,"__call__"),Vp.forEach(t),Qi=i(Aa," special method."),Aa.forEach(t),Yi=h(yt),w(Qe.$$.fragment,yt),el=h(yt),w(Ye.$$.fragment,yt),yt.forEach(t),Pa.forEach(t),Ts=h(o),Pe=n(o,"H2",{class:!0});var Ds=s(Pe);et=n(Ds,"A",{id:!0,class:!0,href:!0});var kp=s(et);pn=n(kp,"SPAN",{});var Ep=s(pn);w(io.$$.fragment,Ep),Ep.forEach(t),kp.forEach(t),tl=h(Ds),hn=n(Ds,"SPAN",{});var Mp=s(hn);ol=i(Mp,"ViTForMaskedImageModeling"),Mp.forEach(t),Ds.forEach(t),bs=h(o),fe=n(o,"DIV",{class:!0});var qa=s(fe);w(lo.$$.fragment,qa),al=h(qa),Ae=n(qa,"P",{});var za=s(Ae);nl=i(za,"ViT Model with a decoder on top for masked image modeling, as proposed in "),mn=n(za,"CODE",{});var Ip=s(mn);sl=i(Ip,"SimMIM <https://arxiv.org/abs/2111.09886>"),Ip.forEach(t),rl=i(za,`__.
This model is a PyTorch `),co=n(za,"A",{href:!0,rel:!0});var jp=s(co);il=i(jp,"torch.nn.Module"),jp.forEach(t),ll=i(za,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),za.forEach(t),dl=h(qa),ae=n(qa,"DIV",{class:!0});var xt=s(ae);w(po.$$.fragment,xt),cl=h(xt),qe=n(xt,"P",{});var Na=s(qe);pl=i(Na,"The "),va=n(Na,"A",{href:!0});var Cp=s(va);hl=i(Cp,"ViTForMaskedImageModeling"),Cp.forEach(t),ml=i(Na," forward method, overrides the "),fn=n(Na,"CODE",{});var Pp=s(fn);fl=i(Pp,"__call__"),Pp.forEach(t),ul=i(Na," special method."),Na.forEach(t),gl=h(xt),w(tt.$$.fragment,xt),_l=h(xt),w(ot.$$.fragment,xt),xt.forEach(t),qa.forEach(t),ws=h(o),ze=n(o,"H2",{class:!0});var Os=s(ze);at=n(Os,"A",{id:!0,class:!0,href:!0});var Ap=s(at);un=n(Ap,"SPAN",{});var qp=s(un);w(ho.$$.fragment,qp),qp.forEach(t),Ap.forEach(t),vl=h(Os),gn=n(Os,"SPAN",{});var zp=s(gn);Tl=i(zp,"ViTForImageClassification"),zp.forEach(t),Os.forEach(t),$s=h(o),Y=n(o,"DIV",{class:!0});var Ft=s(Y);w(mo.$$.fragment,Ft),bl=h(Ft),_n=n(Ft,"P",{});var Np=s(_n);wl=i(Np,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Np.forEach(t),$l=h(Ft),fo=n(Ft,"P",{});var Ss=s(fo);yl=i(Ss,"This model is a PyTorch "),uo=n(Ss,"A",{href:!0,rel:!0});var Lp=s(uo);xl=i(Lp,"torch.nn.Module"),Lp.forEach(t),Fl=i(Ss,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ss.forEach(t),Vl=h(Ft),ne=n(Ft,"DIV",{class:!0});var Vt=s(ne);w(go.$$.fragment,Vt),kl=h(Vt),Ne=n(Vt,"P",{});var La=s(Ne);El=i(La,"The "),Ta=n(La,"A",{href:!0});var Dp=s(Ta);Ml=i(Dp,"ViTForImageClassification"),Dp.forEach(t),Il=i(La," forward method, overrides the "),vn=n(La,"CODE",{});var Op=s(vn);jl=i(Op,"__call__"),Op.forEach(t),Cl=i(La," special method."),La.forEach(t),Pl=h(Vt),w(nt.$$.fragment,Vt),Al=h(Vt),w(st.$$.fragment,Vt),Vt.forEach(t),Ft.forEach(t),ys=h(o),Le=n(o,"H2",{class:!0});var Ws=s(Le);rt=n(Ws,"A",{id:!0,class:!0,href:!0});var Sp=s(rt);Tn=n(Sp,"SPAN",{});var Wp=s(Tn);w(_o.$$.fragment,Wp),Wp.forEach(t),Sp.forEach(t),ql=h(Ws),bn=n(Ws,"SPAN",{});var Bp=s(bn);zl=i(Bp,"TFViTModel"),Bp.forEach(t),Ws.forEach(t),xs=h(o),D=n(o,"DIV",{class:!0});var de=s(D);w(vo.$$.fragment,de),Nl=h(de),wn=n(de,"P",{});var Up=s(wn);Ll=i(Up,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Up.forEach(t),Dl=h(de),To=n(de,"P",{});var Bs=s(To);Ol=i(Bs,"This model inherits from "),ba=n(Bs,"A",{href:!0});var Rp=s(ba);Sl=i(Rp,"TFPreTrainedModel"),Rp.forEach(t),Wl=i(Bs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bs.forEach(t),Bl=h(de),bo=n(de,"P",{});var Us=s(bo);Ul=i(Us,"This model is also a "),wo=n(Us,"A",{href:!0,rel:!0});var Hp=s(wo);Rl=i(Hp,"tf.keras.Model"),Hp.forEach(t),Hl=i(Us,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Us.forEach(t),Jl=h(de),w(it.$$.fragment,de),Kl=h(de),se=n(de,"DIV",{class:!0});var kt=s(se);w($o.$$.fragment,kt),Gl=h(kt),De=n(kt,"P",{});var Da=s(De);Xl=i(Da,"The "),wa=n(Da,"A",{href:!0});var Jp=s(wa);Zl=i(Jp,"TFViTModel"),Jp.forEach(t),Ql=i(Da," forward method, overrides the "),$n=n(Da,"CODE",{});var Kp=s($n);Yl=i(Kp,"__call__"),Kp.forEach(t),ed=i(Da," special method."),Da.forEach(t),td=h(kt),w(lt.$$.fragment,kt),od=h(kt),w(dt.$$.fragment,kt),kt.forEach(t),de.forEach(t),Fs=h(o),Oe=n(o,"H2",{class:!0});var Rs=s(Oe);ct=n(Rs,"A",{id:!0,class:!0,href:!0});var Gp=s(ct);yn=n(Gp,"SPAN",{});var Xp=s(yn);w(yo.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),ad=h(Rs),xn=n(Rs,"SPAN",{});var Zp=s(xn);nd=i(Zp,"TFViTForImageClassification"),Zp.forEach(t),Rs.forEach(t),Vs=h(o),O=n(o,"DIV",{class:!0});var ce=s(O);w(xo.$$.fragment,ce),sd=h(ce),Fn=n(ce,"P",{});var Qp=s(Fn);rd=i(Qp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qp.forEach(t),id=h(ce),Fo=n(ce,"P",{});var Hs=s(Fo);ld=i(Hs,"This model inherits from "),$a=n(Hs,"A",{href:!0});var Yp=s($a);dd=i(Yp,"TFPreTrainedModel"),Yp.forEach(t),cd=i(Hs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hs.forEach(t),pd=h(ce),Vo=n(ce,"P",{});var Js=s(Vo);hd=i(Js,"This model is also a "),ko=n(Js,"A",{href:!0,rel:!0});var eh=s(ko);md=i(eh,"tf.keras.Model"),eh.forEach(t),fd=i(Js,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Js.forEach(t),ud=h(ce),w(pt.$$.fragment,ce),gd=h(ce),re=n(ce,"DIV",{class:!0});var Et=s(re);w(Eo.$$.fragment,Et),_d=h(Et),Se=n(Et,"P",{});var Oa=s(Se);vd=i(Oa,"The "),ya=n(Oa,"A",{href:!0});var th=s(ya);Td=i(th,"TFViTForImageClassification"),th.forEach(t),bd=i(Oa," forward method, overrides the "),Vn=n(Oa,"CODE",{});var oh=s(Vn);wd=i(oh,"__call__"),oh.forEach(t),$d=i(Oa," special method."),Oa.forEach(t),yd=h(Et),w(ht.$$.fragment,Et),xd=h(Et),w(mt.$$.fragment,Et),Et.forEach(t),ce.forEach(t),ks=h(o),We=n(o,"H2",{class:!0});var Ks=s(We);ft=n(Ks,"A",{id:!0,class:!0,href:!0});var ah=s(ft);kn=n(ah,"SPAN",{});var nh=s(kn);w(Mo.$$.fragment,nh),nh.forEach(t),ah.forEach(t),Fd=h(Ks),En=n(Ks,"SPAN",{});var sh=s(En);Vd=i(sh,"FlaxVitModel"),sh.forEach(t),Ks.forEach(t),Es=h(o),A=n(o,"DIV",{class:!0});var H=s(A);w(Io.$$.fragment,H),kd=h(H),Mn=n(H,"P",{});var rh=s(Mn);Ed=i(rh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),rh.forEach(t),Md=h(H),jo=n(H,"P",{});var Gs=s(jo);Id=i(Gs,"This model inherits from "),xa=n(Gs,"A",{href:!0});var ih=s(xa);jd=i(ih,"FlaxPreTrainedModel"),ih.forEach(t),Cd=i(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gs.forEach(t),Pd=h(H),Co=n(H,"P",{});var Xs=s(Co);Ad=i(Xs,"This model is also a Flax Linen "),Po=n(Xs,"A",{href:!0,rel:!0});var lh=s(Po);qd=i(lh,"flax.linen.Module"),lh.forEach(t),zd=i(Xs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xs.forEach(t),Nd=h(H),In=n(H,"P",{});var dh=s(In);Ld=i(dh,"Finally, this model supports inherent JAX features such as:"),dh.forEach(t),Dd=h(H),ue=n(H,"UL",{});var Mt=s(ue);jn=n(Mt,"LI",{});var ch=s(jn);Ao=n(ch,"A",{href:!0,rel:!0});var ph=s(Ao);Od=i(ph,"Just-In-Time (JIT) compilation"),ph.forEach(t),ch.forEach(t),Sd=h(Mt),Cn=n(Mt,"LI",{});var hh=s(Cn);qo=n(hh,"A",{href:!0,rel:!0});var mh=s(qo);Wd=i(mh,"Automatic Differentiation"),mh.forEach(t),hh.forEach(t),Bd=h(Mt),Pn=n(Mt,"LI",{});var fh=s(Pn);zo=n(fh,"A",{href:!0,rel:!0});var uh=s(zo);Ud=i(uh,"Vectorization"),uh.forEach(t),fh.forEach(t),Rd=h(Mt),An=n(Mt,"LI",{});var gh=s(An);No=n(gh,"A",{href:!0,rel:!0});var _h=s(No);Hd=i(_h,"Parallelization"),_h.forEach(t),gh.forEach(t),Mt.forEach(t),Jd=h(H),ie=n(H,"DIV",{class:!0});var It=s(ie);w(Lo.$$.fragment,It),Kd=h(It),Be=n(It,"P",{});var Sa=s(Be);Gd=i(Sa,"The "),qn=n(Sa,"CODE",{});var vh=s(qn);Xd=i(vh,"FlaxViTPreTrainedModel"),vh.forEach(t),Zd=i(Sa," forward method, overrides the "),zn=n(Sa,"CODE",{});var Th=s(zn);Qd=i(Th,"__call__"),Th.forEach(t),Yd=i(Sa," special method."),Sa.forEach(t),ec=h(It),w(ut.$$.fragment,It),tc=h(It),w(gt.$$.fragment,It),It.forEach(t),H.forEach(t),Ms=h(o),Ue=n(o,"H2",{class:!0});var Zs=s(Ue);_t=n(Zs,"A",{id:!0,class:!0,href:!0});var bh=s(_t);Nn=n(bh,"SPAN",{});var wh=s(Nn);w(Do.$$.fragment,wh),wh.forEach(t),bh.forEach(t),oc=h(Zs),Ln=n(Zs,"SPAN",{});var $h=s(Ln);ac=i($h,"FlaxViTForImageClassification"),$h.forEach(t),Zs.forEach(t),Is=h(o),q=n(o,"DIV",{class:!0});var J=s(q);w(Oo.$$.fragment,J),nc=h(J),Dn=n(J,"P",{});var yh=s(Dn);sc=i(yh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yh.forEach(t),rc=h(J),So=n(J,"P",{});var Qs=s(So);ic=i(Qs,"This model inherits from "),Fa=n(Qs,"A",{href:!0});var xh=s(Fa);lc=i(xh,"FlaxPreTrainedModel"),xh.forEach(t),dc=i(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qs.forEach(t),cc=h(J),Wo=n(J,"P",{});var Ys=s(Wo);pc=i(Ys,"This model is also a Flax Linen "),Bo=n(Ys,"A",{href:!0,rel:!0});var Fh=s(Bo);hc=i(Fh,"flax.linen.Module"),Fh.forEach(t),mc=i(Ys,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ys.forEach(t),fc=h(J),On=n(J,"P",{});var Vh=s(On);uc=i(Vh,"Finally, this model supports inherent JAX features such as:"),Vh.forEach(t),gc=h(J),ge=n(J,"UL",{});var jt=s(ge);Sn=n(jt,"LI",{});var kh=s(Sn);Uo=n(kh,"A",{href:!0,rel:!0});var Eh=s(Uo);_c=i(Eh,"Just-In-Time (JIT) compilation"),Eh.forEach(t),kh.forEach(t),vc=h(jt),Wn=n(jt,"LI",{});var Mh=s(Wn);Ro=n(Mh,"A",{href:!0,rel:!0});var Ih=s(Ro);Tc=i(Ih,"Automatic Differentiation"),Ih.forEach(t),Mh.forEach(t),bc=h(jt),Bn=n(jt,"LI",{});var jh=s(Bn);Ho=n(jh,"A",{href:!0,rel:!0});var Ch=s(Ho);wc=i(Ch,"Vectorization"),Ch.forEach(t),jh.forEach(t),$c=h(jt),Un=n(jt,"LI",{});var Ph=s(Un);Jo=n(Ph,"A",{href:!0,rel:!0});var Ah=s(Jo);yc=i(Ah,"Parallelization"),Ah.forEach(t),Ph.forEach(t),jt.forEach(t),xc=h(J),le=n(J,"DIV",{class:!0});var Ct=s(le);w(Ko.$$.fragment,Ct),Fc=h(Ct),Re=n(Ct,"P",{});var Wa=s(Re);Vc=i(Wa,"The "),Rn=n(Wa,"CODE",{});var qh=s(Rn);kc=i(qh,"FlaxViTPreTrainedModel"),qh.forEach(t),Ec=i(Wa," forward method, overrides the "),Hn=n(Wa,"CODE",{});var zh=s(Hn);Mc=i(zh,"__call__"),zh.forEach(t),Ic=i(Wa," special method."),Wa.forEach(t),jc=h(Ct),w(vt.$$.fragment,Ct),Cc=h(Ct),w(Tt.$$.fragment,Ct),Ct.forEach(t),J.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(lm)),c(m,"id","vision-transformer-vit"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#vision-transformer-vit"),c(u,"class","relative group"),c(U,"id","overview"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#overview"),c(j,"class","relative group"),c(X,"href","https://arxiv.org/abs/2010.11929"),c(X,"rel","nofollow"),c(Nt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(Nt,"rel","nofollow"),c(aa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),c(Dt,"href","https://huggingface.co/models?search=vit"),c(Dt,"rel","nofollow"),c(Ot,"href","http://www.image-net.org/"),c(Ot,"rel","nofollow"),c(St,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(St,"rel","nofollow"),c(Wt,"href","https://arxiv.org/abs/1906.06423"),c(Wt,"rel","nofollow"),c(Bt,"href","https://arxiv.org/abs/1912.11370"),c(Bt,"rel","nofollow"),c(sa,"href","deit"),c(ra,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(ia,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(la,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(ca,"href","beit"),c(Rt,"href","https://huggingface.co/models?other=dino"),c(Rt,"rel","nofollow"),c(ha,"href","vit_mae"),c(Ht,"href","https://huggingface.co/nielsr"),c(Ht,"rel","nofollow"),c(Jt,"href","https://github.com/google-research/vision_transformer"),c(Jt,"rel","nofollow"),c(Kt,"href","https://github.com/rwightman/pytorch-image-models"),c(Kt,"rel","nofollow"),c(Je,"id","transformers.ViTConfig"),c(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Je,"href","#transformers.ViTConfig"),c(ke,"class","relative group"),c(ma,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Zt,"href","https://huggingface.co/google/vit-base-patch16-224"),c(Zt,"rel","nofollow"),c(fa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ua,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.ViTFeatureExtractor"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.ViTFeatureExtractor"),c(Ie,"class","relative group"),c(ga,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"id","transformers.ViTModel"),c(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ze,"href","#transformers.ViTModel"),c(je,"class","relative group"),c(so,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(so,"rel","nofollow"),c(_a,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(et,"id","transformers.ViTForMaskedImageModeling"),c(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(et,"href","#transformers.ViTForMaskedImageModeling"),c(Pe,"class","relative group"),c(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(co,"rel","nofollow"),c(va,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(at,"id","transformers.ViTForImageClassification"),c(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(at,"href","#transformers.ViTForImageClassification"),c(ze,"class","relative group"),c(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(uo,"rel","nofollow"),c(Ta,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(rt,"id","transformers.TFViTModel"),c(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rt,"href","#transformers.TFViTModel"),c(Le,"class","relative group"),c(ba,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wo,"rel","nofollow"),c(wa,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTModel"),c(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ct,"id","transformers.TFViTForImageClassification"),c(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ct,"href","#transformers.TFViTForImageClassification"),c(Oe,"class","relative group"),c($a,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(ko,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ko,"rel","nofollow"),c(ya,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTForImageClassification"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ft,"id","transformers.FlaxViTModel"),c(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ft,"href","#transformers.FlaxViTModel"),c(We,"class","relative group"),c(xa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Po,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Po,"rel","nofollow"),c(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ao,"rel","nofollow"),c(qo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qo,"rel","nofollow"),c(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zo,"rel","nofollow"),c(No,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(No,"rel","nofollow"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_t,"id","transformers.FlaxViTForImageClassification"),c(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_t,"href","#transformers.FlaxViTForImageClassification"),c(Ue,"class","relative group"),c(Fa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Bo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Bo,"rel","nofollow"),c(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Uo,"rel","nofollow"),c(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ro,"rel","nofollow"),c(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ho,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Jo,"rel","nofollow"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,u,g),e(u,m),e(m,v),$(l,v,null),e(u,f),e(u,V),e(V,pe),_(o,R,g),$(M,o,g),_(o,ee,g),_(o,j,g),e(j,U),e(U,K),$(P,K,null),e(j,he),e(j,G),e(G,E),_(o,I,g),_(o,z,g),e(z,$e),e(z,X),e(X,L),e(z,ye),_(o,Te,g),_(o,ea,g),e(ea,er),_(o,rs,g),_(o,ta,g),e(ta,Ba),e(Ba,tr),_(o,is,g),_(o,oa,g),e(oa,or),_(o,ls,g),_(o,N,g),e(N,zt),e(zt,ar),e(zt,Nt),e(Nt,nr),e(zt,sr),e(N,rr),e(N,Ua),e(Ua,ir),e(N,lr),e(N,Lt),e(Lt,dr),e(Lt,aa),e(aa,cr),e(Lt,pr),e(N,hr),e(N,xe),e(xe,mr),e(xe,Ra),e(Ra,fr),e(xe,ur),e(xe,Dt),e(Dt,gr),e(xe,_r),e(N,vr),e(N,Fe),e(Fe,Tr),e(Fe,Ot),e(Ot,br),e(Fe,wr),e(Fe,St),e(St,$r),e(Fe,yr),e(N,xr),e(N,Ve),e(Ve,Fr),e(Ve,Wt),e(Wt,Vr),e(Ve,kr),e(Ve,Bt),e(Bt,Er),e(Ve,Mr),e(N,Ir),e(N,Ha),e(Ha,jr),_(o,ds,g),_(o,na,g),e(na,Cr),_(o,cs,g),_(o,te,g),e(te,Ja),e(Ja,C),e(C,sa),e(sa,Pr),e(C,Ar),e(C,ra),e(ra,qr),e(C,zr),e(C,ia),e(ia,Nr),e(C,Lr),e(C,Ka),e(Ka,Dr),e(C,Or),e(C,Ga),e(Ga,Sr),e(C,Wr),e(C,Xa),e(Xa,Br),e(C,Ur),e(C,Za),e(Za,Rr),e(C,Hr),e(C,la),e(la,Jr),e(C,Kr),e(te,Gr),e(te,Qa),e(Qa,da),e(da,ca),e(ca,Xr),e(da,Zr),e(te,Qr),e(te,Ya),e(Ya,Ut),e(Ut,Yr),e(Ut,Rt),e(Rt,ei),e(Ut,ti),e(te,oi),e(te,en),e(en,pa),e(pa,ha),e(ha,ai),e(pa,ni),_(o,ps,g),_(o,be,g),e(be,si),e(be,Ht),e(Ht,ri),e(be,ii),e(be,Jt),e(Jt,li),e(be,di),_(o,hs,g),_(o,He,g),e(He,ci),e(He,Kt),e(Kt,pi),e(He,hi),_(o,ms,g),_(o,ke,g),e(ke,Je),e(Je,tn),$(Gt,tn,null),e(ke,mi),e(ke,on),e(on,fi),_(o,fs,g),_(o,Z,g),$(Xt,Z,null),e(Z,ui),e(Z,Ee),e(Ee,gi),e(Ee,ma),e(ma,_i),e(Ee,vi),e(Ee,Zt),e(Zt,Ti),e(Ee,bi),e(Z,wi),e(Z,Me),e(Me,$i),e(Me,fa),e(fa,yi),e(Me,xi),e(Me,ua),e(ua,Fi),e(Me,Vi),e(Z,ki),$(Ke,Z,null),_(o,us,g),_(o,Ie,g),e(Ie,Ge),e(Ge,an),$(Qt,an,null),e(Ie,Ei),e(Ie,nn),e(nn,Mi),_(o,gs,g),_(o,Q,g),$(Yt,Q,null),e(Q,Ii),e(Q,sn),e(sn,ji),e(Q,Ci),e(Q,eo),e(eo,Pi),e(eo,ga),e(ga,Ai),e(eo,qi),e(Q,zi),e(Q,we),$(to,we,null),e(we,Ni),e(we,rn),e(rn,Li),e(we,Di),$(Xe,we,null),_(o,_s,g),_(o,je,g),e(je,Ze),e(Ze,ln),$(oo,ln,null),e(je,Oi),e(je,dn),e(dn,Si),_(o,vs,g),_(o,me,g),$(ao,me,null),e(me,Wi),e(me,no),e(no,Bi),e(no,so),e(so,Ui),e(no,Ri),e(me,Hi),e(me,oe),$(ro,oe,null),e(oe,Ji),e(oe,Ce),e(Ce,Ki),e(Ce,_a),e(_a,Gi),e(Ce,Xi),e(Ce,cn),e(cn,Zi),e(Ce,Qi),e(oe,Yi),$(Qe,oe,null),e(oe,el),$(Ye,oe,null),_(o,Ts,g),_(o,Pe,g),e(Pe,et),e(et,pn),$(io,pn,null),e(Pe,tl),e(Pe,hn),e(hn,ol),_(o,bs,g),_(o,fe,g),$(lo,fe,null),e(fe,al),e(fe,Ae),e(Ae,nl),e(Ae,mn),e(mn,sl),e(Ae,rl),e(Ae,co),e(co,il),e(Ae,ll),e(fe,dl),e(fe,ae),$(po,ae,null),e(ae,cl),e(ae,qe),e(qe,pl),e(qe,va),e(va,hl),e(qe,ml),e(qe,fn),e(fn,fl),e(qe,ul),e(ae,gl),$(tt,ae,null),e(ae,_l),$(ot,ae,null),_(o,ws,g),_(o,ze,g),e(ze,at),e(at,un),$(ho,un,null),e(ze,vl),e(ze,gn),e(gn,Tl),_(o,$s,g),_(o,Y,g),$(mo,Y,null),e(Y,bl),e(Y,_n),e(_n,wl),e(Y,$l),e(Y,fo),e(fo,yl),e(fo,uo),e(uo,xl),e(fo,Fl),e(Y,Vl),e(Y,ne),$(go,ne,null),e(ne,kl),e(ne,Ne),e(Ne,El),e(Ne,Ta),e(Ta,Ml),e(Ne,Il),e(Ne,vn),e(vn,jl),e(Ne,Cl),e(ne,Pl),$(nt,ne,null),e(ne,Al),$(st,ne,null),_(o,ys,g),_(o,Le,g),e(Le,rt),e(rt,Tn),$(_o,Tn,null),e(Le,ql),e(Le,bn),e(bn,zl),_(o,xs,g),_(o,D,g),$(vo,D,null),e(D,Nl),e(D,wn),e(wn,Ll),e(D,Dl),e(D,To),e(To,Ol),e(To,ba),e(ba,Sl),e(To,Wl),e(D,Bl),e(D,bo),e(bo,Ul),e(bo,wo),e(wo,Rl),e(bo,Hl),e(D,Jl),$(it,D,null),e(D,Kl),e(D,se),$($o,se,null),e(se,Gl),e(se,De),e(De,Xl),e(De,wa),e(wa,Zl),e(De,Ql),e(De,$n),e($n,Yl),e(De,ed),e(se,td),$(lt,se,null),e(se,od),$(dt,se,null),_(o,Fs,g),_(o,Oe,g),e(Oe,ct),e(ct,yn),$(yo,yn,null),e(Oe,ad),e(Oe,xn),e(xn,nd),_(o,Vs,g),_(o,O,g),$(xo,O,null),e(O,sd),e(O,Fn),e(Fn,rd),e(O,id),e(O,Fo),e(Fo,ld),e(Fo,$a),e($a,dd),e(Fo,cd),e(O,pd),e(O,Vo),e(Vo,hd),e(Vo,ko),e(ko,md),e(Vo,fd),e(O,ud),$(pt,O,null),e(O,gd),e(O,re),$(Eo,re,null),e(re,_d),e(re,Se),e(Se,vd),e(Se,ya),e(ya,Td),e(Se,bd),e(Se,Vn),e(Vn,wd),e(Se,$d),e(re,yd),$(ht,re,null),e(re,xd),$(mt,re,null),_(o,ks,g),_(o,We,g),e(We,ft),e(ft,kn),$(Mo,kn,null),e(We,Fd),e(We,En),e(En,Vd),_(o,Es,g),_(o,A,g),$(Io,A,null),e(A,kd),e(A,Mn),e(Mn,Ed),e(A,Md),e(A,jo),e(jo,Id),e(jo,xa),e(xa,jd),e(jo,Cd),e(A,Pd),e(A,Co),e(Co,Ad),e(Co,Po),e(Po,qd),e(Co,zd),e(A,Nd),e(A,In),e(In,Ld),e(A,Dd),e(A,ue),e(ue,jn),e(jn,Ao),e(Ao,Od),e(ue,Sd),e(ue,Cn),e(Cn,qo),e(qo,Wd),e(ue,Bd),e(ue,Pn),e(Pn,zo),e(zo,Ud),e(ue,Rd),e(ue,An),e(An,No),e(No,Hd),e(A,Jd),e(A,ie),$(Lo,ie,null),e(ie,Kd),e(ie,Be),e(Be,Gd),e(Be,qn),e(qn,Xd),e(Be,Zd),e(Be,zn),e(zn,Qd),e(Be,Yd),e(ie,ec),$(ut,ie,null),e(ie,tc),$(gt,ie,null),_(o,Ms,g),_(o,Ue,g),e(Ue,_t),e(_t,Nn),$(Do,Nn,null),e(Ue,oc),e(Ue,Ln),e(Ln,ac),_(o,Is,g),_(o,q,g),$(Oo,q,null),e(q,nc),e(q,Dn),e(Dn,sc),e(q,rc),e(q,So),e(So,ic),e(So,Fa),e(Fa,lc),e(So,dc),e(q,cc),e(q,Wo),e(Wo,pc),e(Wo,Bo),e(Bo,hc),e(Wo,mc),e(q,fc),e(q,On),e(On,uc),e(q,gc),e(q,ge),e(ge,Sn),e(Sn,Uo),e(Uo,_c),e(ge,vc),e(ge,Wn),e(Wn,Ro),e(Ro,Tc),e(ge,bc),e(ge,Bn),e(Bn,Ho),e(Ho,wc),e(ge,$c),e(ge,Un),e(Un,Jo),e(Jo,yc),e(q,xc),e(q,le),$(Ko,le,null),e(le,Fc),e(le,Re),e(Re,Vc),e(Re,Rn),e(Rn,kc),e(Re,Ec),e(Re,Hn),e(Hn,Mc),e(Re,Ic),e(le,jc),$(vt,le,null),e(le,Cc),$(Tt,le,null),js=!0},p(o,[g]){const Go={};g&2&&(Go.$$scope={dirty:g,ctx:o}),M.$set(Go);const Jn={};g&2&&(Jn.$$scope={dirty:g,ctx:o}),Ke.$set(Jn);const Kn={};g&2&&(Kn.$$scope={dirty:g,ctx:o}),Xe.$set(Kn);const Gn={};g&2&&(Gn.$$scope={dirty:g,ctx:o}),Qe.$set(Gn);const Xo={};g&2&&(Xo.$$scope={dirty:g,ctx:o}),Ye.$set(Xo);const Xn={};g&2&&(Xn.$$scope={dirty:g,ctx:o}),tt.$set(Xn);const Zn={};g&2&&(Zn.$$scope={dirty:g,ctx:o}),ot.$set(Zn);const Qn={};g&2&&(Qn.$$scope={dirty:g,ctx:o}),nt.$set(Qn);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:o}),st.$set(Zo);const Yn={};g&2&&(Yn.$$scope={dirty:g,ctx:o}),it.$set(Yn);const es={};g&2&&(es.$$scope={dirty:g,ctx:o}),lt.$set(es);const ts={};g&2&&(ts.$$scope={dirty:g,ctx:o}),dt.$set(ts);const os={};g&2&&(os.$$scope={dirty:g,ctx:o}),pt.$set(os);const as={};g&2&&(as.$$scope={dirty:g,ctx:o}),ht.$set(as);const S={};g&2&&(S.$$scope={dirty:g,ctx:o}),mt.$set(S);const Qo={};g&2&&(Qo.$$scope={dirty:g,ctx:o}),ut.$set(Qo);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:o}),gt.$set(ns);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:o}),vt.$set(ss);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:o}),Tt.$set(Yo)},i(o){js||(y(l.$$.fragment,o),y(M.$$.fragment,o),y(P.$$.fragment,o),y(Gt.$$.fragment,o),y(Xt.$$.fragment,o),y(Ke.$$.fragment,o),y(Qt.$$.fragment,o),y(Yt.$$.fragment,o),y(to.$$.fragment,o),y(Xe.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(Qe.$$.fragment,o),y(Ye.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(po.$$.fragment,o),y(tt.$$.fragment,o),y(ot.$$.fragment,o),y(ho.$$.fragment,o),y(mo.$$.fragment,o),y(go.$$.fragment,o),y(nt.$$.fragment,o),y(st.$$.fragment,o),y(_o.$$.fragment,o),y(vo.$$.fragment,o),y(it.$$.fragment,o),y($o.$$.fragment,o),y(lt.$$.fragment,o),y(dt.$$.fragment,o),y(yo.$$.fragment,o),y(xo.$$.fragment,o),y(pt.$$.fragment,o),y(Eo.$$.fragment,o),y(ht.$$.fragment,o),y(mt.$$.fragment,o),y(Mo.$$.fragment,o),y(Io.$$.fragment,o),y(Lo.$$.fragment,o),y(ut.$$.fragment,o),y(gt.$$.fragment,o),y(Do.$$.fragment,o),y(Oo.$$.fragment,o),y(Ko.$$.fragment,o),y(vt.$$.fragment,o),y(Tt.$$.fragment,o),js=!0)},o(o){x(l.$$.fragment,o),x(M.$$.fragment,o),x(P.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Ke.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(to.$$.fragment,o),x(Xe.$$.fragment,o),x(oo.$$.fragment,o),x(ao.$$.fragment,o),x(ro.$$.fragment,o),x(Qe.$$.fragment,o),x(Ye.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(po.$$.fragment,o),x(tt.$$.fragment,o),x(ot.$$.fragment,o),x(ho.$$.fragment,o),x(mo.$$.fragment,o),x(go.$$.fragment,o),x(nt.$$.fragment,o),x(st.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(it.$$.fragment,o),x($o.$$.fragment,o),x(lt.$$.fragment,o),x(dt.$$.fragment,o),x(yo.$$.fragment,o),x(xo.$$.fragment,o),x(pt.$$.fragment,o),x(Eo.$$.fragment,o),x(ht.$$.fragment,o),x(mt.$$.fragment,o),x(Mo.$$.fragment,o),x(Io.$$.fragment,o),x(Lo.$$.fragment,o),x(ut.$$.fragment,o),x(gt.$$.fragment,o),x(Do.$$.fragment,o),x(Oo.$$.fragment,o),x(Ko.$$.fragment,o),x(vt.$$.fragment,o),x(Tt.$$.fragment,o),js=!1},d(o){t(d),o&&t(T),o&&t(u),F(l),o&&t(R),F(M,o),o&&t(ee),o&&t(j),F(P),o&&t(I),o&&t(z),o&&t(Te),o&&t(ea),o&&t(rs),o&&t(ta),o&&t(is),o&&t(oa),o&&t(ls),o&&t(N),o&&t(ds),o&&t(na),o&&t(cs),o&&t(te),o&&t(ps),o&&t(be),o&&t(hs),o&&t(He),o&&t(ms),o&&t(ke),F(Gt),o&&t(fs),o&&t(Z),F(Xt),F(Ke),o&&t(us),o&&t(Ie),F(Qt),o&&t(gs),o&&t(Q),F(Yt),F(to),F(Xe),o&&t(_s),o&&t(je),F(oo),o&&t(vs),o&&t(me),F(ao),F(ro),F(Qe),F(Ye),o&&t(Ts),o&&t(Pe),F(io),o&&t(bs),o&&t(fe),F(lo),F(po),F(tt),F(ot),o&&t(ws),o&&t(ze),F(ho),o&&t($s),o&&t(Y),F(mo),F(go),F(nt),F(st),o&&t(ys),o&&t(Le),F(_o),o&&t(xs),o&&t(D),F(vo),F(it),F($o),F(lt),F(dt),o&&t(Fs),o&&t(Oe),F(yo),o&&t(Vs),o&&t(O),F(xo),F(pt),F(Eo),F(ht),F(mt),o&&t(ks),o&&t(We),F(Mo),o&&t(Es),o&&t(A),F(Io),F(Lo),F(ut),F(gt),o&&t(Ms),o&&t(Ue),F(Do),o&&t(Is),o&&t(q),F(Oo),F(Ko),F(vt),F(Tt)}}}const lm={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function dm(k){return Sh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gm extends Nh{constructor(d){super();Lh(this,d,dm,im,Dh,{})}}export{gm as default,lm as metadata};
