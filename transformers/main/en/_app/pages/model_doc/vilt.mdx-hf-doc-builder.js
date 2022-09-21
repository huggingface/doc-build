import{S as Md,i as Pd,s as jd,e as n,k as m,w as T,t as r,M as zd,c as s,d as o,m as p,a,x as k,h as i,b as c,N as Ld,G as e,g as _,y as w,q as x,o as y,B as $,v as Id,L as zo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Gt}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Lo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as H}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as jo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ad(V){let d,b,g,u,v;return u=new Lo({props:{code:`from transformers import ViLTModel, ViLTConfig

# Initializing a ViLT dandelin/vilt-b32-mlm style configuration
configuration = ViLTConfig()

# Initializing a model from the dandelin/vilt-b32-mlm style configuration
model = ViLTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViLTModel, ViLTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViLT dandelin/vilt-b32-mlm style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViLTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the dandelin/vilt-b32-mlm style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViLTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=r("Example:"),g=m(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Example:"),h.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,g,h),w(u,l,h),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Cd(V){let d,b;return{c(){d=n("p"),b=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(g){d=s(g,"P",{});var u=a(d);b=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(o)},m(g,u){_(g,d,u),e(d,b)},d(g){g&&o(d)}}}function qd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){_(l,d,h),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Od(V){let d,b,g,u,v;return u=new Lo({props:{code:`from transformers import ViltProcessor, ViltModel
from PIL import Image
import requests

# prepare image and text
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
text = "hello world"

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-mlm")
model = ViltModel.from_pretrained("dandelin/vilt-b32-mlm")

inputs = processor(image, text, return_tensors="pt")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image and text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltModel.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=r("Examples:"),g=m(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Examples:"),h.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,g,h),w(u,l,h),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Nd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){_(l,d,h),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Sd(V){let d,b,g,u,v;return u=new Lo({props:{code:`from transformers import ViltProcessor, ViltForMaskedLM
import requests
from PIL import Image
import re
import torch

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
text = "a bunch of [MASK] laying on a [MASK]."

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-mlm")
model = ViltForMaskedLM.from_pretrained("dandelin/vilt-b32-mlm")

# prepare inputs
encoding = processor(image, text, return_tensors="pt")

# forward pass
outputs = model(**encoding)

tl = len(re.findall("\\[MASK\\]", text))
inferred_token = [text]

# gradually fill in the MASK tokens, one by one
with torch.no_grad():
    for i in range(tl):
        encoded = processor.tokenizer(inferred_token)
        input_ids = torch.tensor(encoded.input_ids)
        encoded = encoded["input_ids"][0][1:-1]
        outputs = model(input_ids=input_ids, pixel_values=encoding.pixel_values)
        mlm_logits = outputs.logits[0]  # shape (seq_len, vocab_size)
        # only take into account text features (minus CLS and SEP token)
        mlm_logits = mlm_logits[1 : input_ids.shape[1] - 1, :]
        mlm_values, mlm_ids = mlm_logits.softmax(dim=-1).max(dim=-1)
        # only take into account text
        mlm_values[torch.tensor(encoded) != 103] = 0
        select = mlm_values.argmax().item()
        encoded[select] = mlm_ids[select].item()
        inferred_token = [processor.decode(encoded)]

selected_token = ""
encoded = processor.tokenizer(inferred_token)
output = processor.decode(encoded.input_ids[0], skip_special_tokens=True)
print(output)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> re
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;a bunch of [MASK] laying on a [MASK].&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForMaskedLM.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>tl = <span class="hljs-built_in">len</span>(re.findall(<span class="hljs-string">&quot;\\[MASK\\]&quot;</span>, text))
<span class="hljs-meta">&gt;&gt;&gt; </span>inferred_token = [text]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># gradually fill in the MASK tokens, one by one</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(tl):
<span class="hljs-meta">... </span>        encoded = processor.tokenizer(inferred_token)
<span class="hljs-meta">... </span>        input_ids = torch.tensor(encoded.input_ids)
<span class="hljs-meta">... </span>        encoded = encoded[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-number">1</span>:-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        outputs = model(input_ids=input_ids, pixel_values=encoding.pixel_values)
<span class="hljs-meta">... </span>        mlm_logits = outputs.logits[<span class="hljs-number">0</span>]  <span class="hljs-comment"># shape (seq_len, vocab_size)</span>
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only take into account text features (minus CLS and SEP token)</span>
<span class="hljs-meta">... </span>        mlm_logits = mlm_logits[<span class="hljs-number">1</span> : input_ids.shape[<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, :]
<span class="hljs-meta">... </span>        mlm_values, mlm_ids = mlm_logits.softmax(dim=-<span class="hljs-number">1</span>).<span class="hljs-built_in">max</span>(dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only take into account text</span>
<span class="hljs-meta">... </span>        mlm_values[torch.tensor(encoded) != <span class="hljs-number">103</span>] = <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>        select = mlm_values.argmax().item()
<span class="hljs-meta">... </span>        encoded[select] = mlm_ids[select].item()
<span class="hljs-meta">... </span>        inferred_token = [processor.decode(encoded)]

<span class="hljs-meta">&gt;&gt;&gt; </span>selected_token = <span class="hljs-string">&quot;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded = processor.tokenizer(inferred_token)
<span class="hljs-meta">&gt;&gt;&gt; </span>output = processor.decode(encoded.input_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(output)
a bunch of cats laying on a couch.`}}),{c(){d=n("p"),b=r("Examples:"),g=m(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Examples:"),h.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,g,h),w(u,l,h),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Dd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){_(l,d,h),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Wd(V){let d,b,g,u,v;return u=new Lo({props:{code:`from transformers import ViltProcessor, ViltForQuestionAnswering
import requests
from PIL import Image

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
text = "How many cats are there?"

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-vqa")
model = ViltForQuestionAnswering.from_pretrained("dandelin/vilt-b32-finetuned-vqa")

# prepare inputs
encoding = processor(image, text, return_tensors="pt")

# forward pass
outputs = model(**encoding)
logits = outputs.logits
idx = logits.argmax(-1).item()
print("Predicted answer:", model.config.id2label[idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;How many cats are there?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-vqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-vqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer:&quot;</span>, model.config.id2label[idx])
Predicted answer: <span class="hljs-number">2</span>`}}),{c(){d=n("p"),b=r("Examples:"),g=m(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Examples:"),h.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,g,h),w(u,l,h),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Rd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){_(l,d,h),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Bd(V){let d,b,g,u,v;return u=new Lo({props:{code:`from transformers import ViltProcessor, ViltForImagesAndTextClassification
import requests
from PIL import Image

image1 = Image.open(requests.get("https://lil.nlp.cornell.edu/nlvr/exs/ex0_0.jpg", stream=True).raw)
image2 = Image.open(requests.get("https://lil.nlp.cornell.edu/nlvr/exs/ex0_1.jpg", stream=True).raw)
text = "The left image contains twice the number of dogs as the right image."

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-nlvr2")
model = ViltForImagesAndTextClassification.from_pretrained("dandelin/vilt-b32-finetuned-nlvr2")

# prepare inputs
encoding = processor([image1, image2], text, return_tensors="pt")

# forward pass
outputs = model(input_ids=encoding.input_ids, pixel_values=encoding.pixel_values.unsqueeze(0))
logits = outputs.logits
idx = logits.argmax(-1).item()
print("Predicted answer:", model.config.id2label[idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForImagesAndTextClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image1 = Image.<span class="hljs-built_in">open</span>(requests.get(<span class="hljs-string">&quot;https://lil.nlp.cornell.edu/nlvr/exs/ex0_0.jpg&quot;</span>, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>image2 = Image.<span class="hljs-built_in">open</span>(requests.get(<span class="hljs-string">&quot;https://lil.nlp.cornell.edu/nlvr/exs/ex0_1.jpg&quot;</span>, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;The left image contains twice the number of dogs as the right image.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-nlvr2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForImagesAndTextClassification.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-nlvr2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor([image1, image2], text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=encoding.input_ids, pixel_values=encoding.pixel_values.unsqueeze(<span class="hljs-number">0</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer:&quot;</span>, model.config.id2label[idx])
Predicted answer: <span class="hljs-literal">True</span>`}}),{c(){d=n("p"),b=r("Examples:"),g=m(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Examples:"),h.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,g,h),w(u,l,h),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Qd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){_(l,d,h),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Ud(V){let d,b,g,u,v;return u=new Lo({props:{code:`from transformers import ViltProcessor, ViltForImageAndTextRetrieval
import requests
from PIL import Image

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
texts = ["An image of two cats chilling on a couch", "A football player scoring a goal"]

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-coco")
model = ViltForImageAndTextRetrieval.from_pretrained("dandelin/vilt-b32-finetuned-coco")

# forward pass
scores = dict()
for text in texts:
    # prepare inputs
    encoding = processor(image, text, return_tensors="pt")
    outputs = model(**encoding)
    scores[text] = outputs.logits[0, :].item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForImageAndTextRetrieval
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>texts = [<span class="hljs-string">&quot;An image of two cats chilling on a couch&quot;</span>, <span class="hljs-string">&quot;A football player scoring a goal&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-coco&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForImageAndTextRetrieval.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-coco&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> text <span class="hljs-keyword">in</span> texts:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">... </span>    encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">... </span>    outputs = model(**encoding)
<span class="hljs-meta">... </span>    scores[text] = outputs.logits[<span class="hljs-number">0</span>, :].item()`}}),{c(){d=n("p"),b=r("Examples:"),g=m(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Examples:"),h.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,g,h),w(u,l,h),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Hd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var h=a(d);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(l,h){_(l,d,h),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Kd(V){let d,b,g,u,v,l,h,F,Is,Dn,Z,ve,Io,rt,As,Ao,Cs,Wn,be,qs,it,Os,Ns,Rn,Jt,Ss,Bn,Xt,Co,Ds,Qn,Zt,Ws,Un,q,lt,Rs,dt,Bs,Qs,Us,R,Hs,qo,Ks,Gs,Oo,Js,Xs,Yt,Zs,Ys,ea,Y,ta,No,oa,na,eo,sa,aa,ra,So,ia,Hn,Te,rl,Kn,ke,la,to,da,ca,Gn,K,ma,ct,pa,ha,mt,fa,ua,Jn,ee,we,Do,pt,ga,Wo,_a,Xn,P,ht,va,te,ba,Ro,Ta,ka,ft,wa,xa,ya,oe,$a,oo,Va,Fa,no,Ea,Ma,Pa,xe,Zn,ne,ye,Bo,ut,ja,Qo,za,Yn,j,gt,La,Uo,Ia,Aa,_t,Ca,so,qa,Oa,Na,G,vt,Sa,Ho,Da,Wa,$e,es,se,Ve,Ko,bt,Ra,Go,Ba,ts,z,Tt,Qa,Jo,Ua,Ha,M,ao,Ka,Ga,ro,Ja,Xa,io,Za,Ya,kt,Xo,er,tr,or,Zo,nr,sr,ar,J,wt,rr,ae,ir,Fe,lr,Yo,dr,cr,mr,Ee,pr,en,hr,fr,ur,gr,tn,_r,os,re,Me,on,xt,vr,nn,br,ns,B,yt,Tr,$t,kr,sn,wr,xr,yr,O,Vt,$r,ie,Vr,lo,Fr,Er,an,Mr,Pr,jr,Pe,zr,je,ss,le,ze,rn,Ft,Lr,ln,Ir,as,L,Et,Ar,dn,Cr,qr,Mt,Or,cn,Nr,Sr,Dr,N,Pt,Wr,de,Rr,co,Br,Qr,mn,Ur,Hr,Kr,Le,Gr,Ie,rs,ce,Ae,pn,jt,Jr,hn,Xr,is,I,zt,Zr,fn,Yr,ei,Lt,ti,un,oi,ni,si,S,It,ai,me,ri,mo,ii,li,gn,di,ci,mi,Ce,pi,qe,ls,pe,Oe,_n,At,hi,vn,fi,ds,Q,Ct,ui,bn,gi,_i,D,qt,vi,he,bi,po,Ti,ki,Tn,wi,xi,yi,Ne,$i,Se,cs,fe,De,kn,Ot,Vi,wn,Fi,ms,A,Nt,Ei,xn,Mi,Pi,St,ji,yn,zi,Li,Ii,W,Dt,Ai,ue,Ci,ho,qi,Oi,$n,Ni,Si,Di,We,Wi,Re,ps,ge,Be,Vn,Wt,Ri,Fn,Bi,hs,C,Rt,Qi,En,Ui,Hi,Bt,Ki,Mn,Gi,Ji,Xi,X,Qt,Zi,_e,Yi,fo,el,tl,Pn,ol,nl,sl,Qe,fs;return l=new H({}),rt=new H({}),pt=new H({}),ht=new E({props:{name:"class transformers.ViltConfig",anchor:"transformers.ViltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"type_vocab_size",val:" = 2"},{name:"modality_type_vocab_size",val:" = 2"},{name:"max_position_embeddings",val:" = 40"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 32"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"max_image_length",val:" = -1"},{name:"tie_word_embeddings",val:" = False"},{name:"num_images",val:" = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the text part of the model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>.`,name:"vocab_size"},{anchor:"transformers.ViltConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used when encoding
text.`,name:"type_vocab_size"},{anchor:"transformers.ViltConfig.modality_type_vocab_size",description:`<strong>modality_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the modalities passed when calling <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used after concatening the
embeddings of the text and image modalities.`,name:"modality_type_vocab_size"},{anchor:"transformers.ViltConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The maximum sequence length that this model might ever be used with.`,name:"max_position_embeddings"},{anchor:"transformers.ViltConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViltConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViltConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViltConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViltConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViltConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViltConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViltConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViltConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViltConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViltConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViltConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViltConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViltConfig.max_image_length",description:`<strong>max_image_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The maximum number of patches to take as input for the Transformer encoder. If set to a positive integer,
the encoder will sample <code>max_image_length</code> patches at maximum. If set to -1, will not be taken into
account.`,name:"max_image_length"},{anchor:"transformers.ViltConfig.num_images",description:`<strong>num_images</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The number of images to use for natural language visual reasoning. If set to a positive integer, will be
used by <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> for defining the classifier head.`,name:"num_images"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/configuration_vilt.py#L28"}}),xe=new jo({props:{anchor:"transformers.ViltConfig.example",$$slots:{default:[Ad]},$$scope:{ctx:V}}}),ut=new H({}),gt=new E({props:{name:"class transformers.ViltFeatureExtractor",anchor:"transformers.ViltFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"size_divisor",val:" = 32"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input based on <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViltFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Resize the shorter side of the input to the given size. Should be an integer. The longer side will be
limited to under int((1333 / 800) * size) while preserving the aspect ratio. Only has an effect if
<code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViltFeatureExtractor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size by which to make sure both the height and width can be divided.`,name:"size_divisor"},{anchor:"transformers.ViltFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViltFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViltFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViltFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/feature_extraction_vilt.py#L40"}}),vt=new E({props:{name:"__call__",anchor:"transformers.ViltFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"pad_and_return_pixel_mask",val:": typing.Optional[bool] = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViltFeatureExtractor.__call__.pad_and_return_pixel_mask",description:`<strong>pad_and_return_pixel_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to pad images up to the largest image in a batch and create a pixel mask.</p>
<p>If left to the default, will return a pixel mask that is:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>`,name:"pad_and_return_pixel_mask"},{anchor:"transformers.ViltFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/feature_extraction_vilt.py#L181",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>pixel_mask</strong> \u2014 Pixel mask to be fed to a model (when <code>return_pixel_mask=True</code> or if <em>\u201Cpixel_mask\u201D</em> is
in <code>self.model_input_names</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),$e=new Gt({props:{warning:!0,$$slots:{default:[Cd]},$$scope:{ctx:V}}}),bt=new H({}),Tt=new E({props:{name:"class transformers.ViltProcessor",anchor:"transformers.ViltProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.ViltProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>ViltFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.ViltProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L26"}}),wt=new E({props:{name:"__call__",anchor:"transformers.ViltProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L46"}}),xt=new H({}),yt=new E({props:{name:"class transformers.ViltModel",anchor:"transformers.ViltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ViltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L724"}}),Vt=new E({props:{name:"forward",anchor:"transformers.ViltModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_token_type_idx",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltModel.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L752",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
`}}),Pe=new Gt({props:{$$slots:{default:[qd]},$$scope:{ctx:V}}}),je=new jo({props:{anchor:"transformers.ViltModel.forward.example",$$slots:{default:[Od]},$$scope:{ctx:V}}}),Ft=new H({}),Et=new E({props:{name:"class transformers.ViltForMaskedLM",anchor:"transformers.ViltForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L889"}}),Pt=new E({props:{name:"forward",anchor:"transformers.ViltForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForMaskedLM.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForMaskedLM.forward.labels",description:`<strong>labels</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <em>[-100, 0, &#x2026;,
config.vocab_size]</em> (see <em>input_ids</em> docstring) Tokens with indices set to <em>-100</em> are ignored (masked), the
loss is only computed for the tokens with labels in <em>[0, &#x2026;, config.vocab_size]</em>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L905",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
`}}),Le=new Gt({props:{$$slots:{default:[Nd]},$$scope:{ctx:V}}}),Ie=new jo({props:{anchor:"transformers.ViltForMaskedLM.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:V}}}),jt=new H({}),zt=new E({props:{name:"class transformers.ViltForQuestionAnswering",anchor:"transformers.ViltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1061"}}),It=new E({props:{name:"forward",anchor:"transformers.ViltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForQuestionAnswering.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the visual question answering loss. This tensor must be either a one-hot encoding of
all answers that are applicable for a given example in the batch, or a soft encoding indicating which
answers are applicable, where 1.0 is the highest score.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Gt({props:{$$slots:{default:[Dd]},$$scope:{ctx:V}}}),qe=new jo({props:{anchor:"transformers.ViltForQuestionAnswering.forward.example",$$slots:{default:[Wd]},$$scope:{ctx:V}}}),At=new H({}),Ct=new E({props:{name:"class transformers.ViltForImagesAndTextClassification",anchor:"transformers.ViltForImagesAndTextClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_images, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_images, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_images, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImagesAndTextClassification.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImagesAndTextClassification.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1271"}}),qt=new E({props:{name:"forward",anchor:"transformers.ViltForImagesAndTextClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Binary classification labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1290",returnDescription:`
<p>A <code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>List[tuple(torch.FloatTensor)]</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 List of tuples of <code>torch.FloatTensor</code> (one for each image-text pair, each tuple containing the output of
the embeddings + one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.
Hidden-states of the model at the output of each layer plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>List[tuple(torch.FloatTensor)]</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 List of tuples of <code>torch.FloatTensor</code> (one for each image-text pair, each tuple containing the attention
weights of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the
attention softmax, used to compute the weighted average in the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new Gt({props:{$$slots:{default:[Rd]},$$scope:{ctx:V}}}),Se=new jo({props:{anchor:"transformers.ViltForImagesAndTextClassification.forward.example",$$slots:{default:[Bd]},$$scope:{ctx:V}}}),Ot=new H({}),Nt=new E({props:{name:"class transformers.ViltForImageAndTextRetrieval",anchor:"transformers.ViltForImageAndTextRetrieval",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1172"}}),Dt=new E({props:{name:"forward",anchor:"transformers.ViltForImageAndTextRetrieval.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels are currently not supported.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new Gt({props:{$$slots:{default:[Qd]},$$scope:{ctx:V}}}),Re=new jo({props:{anchor:"transformers.ViltForImageAndTextRetrieval.forward.example",$$slots:{default:[Ud]},$$scope:{ctx:V}}}),Wt=new H({}),Rt=new E({props:{name:"class transformers.ViltForTokenClassification",anchor:"transformers.ViltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1411"}}),Qt=new E({props:{name:"forward",anchor:"transformers.ViltForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForTokenClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForTokenClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForTokenClassification.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, text_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1427",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new Gt({props:{$$slots:{default:[Hd]},$$scope:{ctx:V}}}),{c(){d=n("meta"),b=m(),g=n("h1"),u=n("a"),v=n("span"),T(l.$$.fragment),h=m(),F=n("span"),Is=r("ViLT"),Dn=m(),Z=n("h2"),ve=n("a"),Io=n("span"),T(rt.$$.fragment),As=m(),Ao=n("span"),Cs=r("Overview"),Wn=m(),be=n("p"),qs=r("The ViLT model was proposed in "),it=n("a"),Os=r("ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),Ns=r(`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Rn=m(),Jt=n("p"),Ss=r("The abstract from the paper is the following:"),Bn=m(),Xt=n("p"),Co=n("em"),Ds=r(`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),Qn=m(),Zt=n("p"),Ws=r("Tips:"),Un=m(),q=n("ul"),lt=n("li"),Rs=r("The quickest way to get started with ViLT is by checking the "),dt=n("a"),Bs=r("example notebooks"),Qs=r(`
(which showcase both inference and fine-tuning on custom data).`),Us=m(),R=n("li"),Hs=r("ViLT is a model that takes both "),qo=n("code"),Ks=r("pixel_values"),Gs=r(" and "),Oo=n("code"),Js=r("input_ids"),Xs=r(" as input. One can use "),Yt=n("a"),Zs=r("ViltProcessor"),Ys=r(` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),ea=m(),Y=n("li"),ta=r(`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),No=n("code"),oa=r("pixel_mask"),na=r(` that indicates
which pixel values are real and which are padding. `),eo=n("a"),sa=r("ViltProcessor"),aa=r(" automatically creates this for you."),ra=m(),So=n("li"),ia=r(`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),Hn=m(),Te=n("img"),Kn=m(),ke=n("small"),la=r("ViLT architecture. Taken from the "),to=n("a"),da=r("original paper"),ca=r("."),Gn=m(),K=n("p"),ma=r("This model was contributed by "),ct=n("a"),pa=r("nielsr"),ha=r(". The original code can be found "),mt=n("a"),fa=r("here"),ua=r("."),Jn=m(),ee=n("h2"),we=n("a"),Do=n("span"),T(pt.$$.fragment),ga=m(),Wo=n("span"),_a=r("ViltConfig"),Xn=m(),P=n("div"),T(ht.$$.fragment),va=m(),te=n("p"),ba=r("This is the configuration class to store the configuration of a "),Ro=n("code"),Ta=r("ViLTModel"),ka=r(`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),ft=n("a"),wa=r("dandelin/vilt-b32-mlm"),xa=r(" architecture."),ya=m(),oe=n("p"),$a=r("Configuration objects inherit from "),oo=n("a"),Va=r("PretrainedConfig"),Fa=r(` and can be used to control the model outputs. Read the
documentation from `),no=n("a"),Ea=r("PretrainedConfig"),Ma=r(" for more information."),Pa=m(),T(xe.$$.fragment),Zn=m(),ne=n("h2"),ye=n("a"),Bo=n("span"),T(ut.$$.fragment),ja=m(),Qo=n("span"),za=r("ViltFeatureExtractor"),Yn=m(),j=n("div"),T(gt.$$.fragment),La=m(),Uo=n("p"),Ia=r("Constructs a ViLT feature extractor."),Aa=m(),_t=n("p"),Ca=r("This feature extractor inherits from "),so=n("a"),qa=r("FeatureExtractionMixin"),Oa=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Na=m(),G=n("div"),T(vt.$$.fragment),Sa=m(),Ho=n("p"),Da=r("Main method to prepare for the model one or several image(s)."),Wa=m(),T($e.$$.fragment),es=m(),se=n("h2"),Ve=n("a"),Ko=n("span"),T(bt.$$.fragment),Ra=m(),Go=n("span"),Ba=r("ViltProcessor"),ts=m(),z=n("div"),T(Tt.$$.fragment),Qa=m(),Jo=n("p"),Ua=r("Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Ha=m(),M=n("p"),ao=n("a"),Ka=r("ViltProcessor"),Ga=r(" offers all the functionalities of "),ro=n("a"),Ja=r("ViltFeatureExtractor"),Xa=r(" and "),io=n("a"),Za=r("BertTokenizerFast"),Ya=r(`. See the
docstring of `),kt=n("a"),Xo=n("strong"),er=r("call"),tr=r("()"),or=r(" and "),Zo=n("code"),nr=r("decode()"),sr=r(" for more information."),ar=m(),J=n("div"),T(wt.$$.fragment),rr=m(),ae=n("p"),ir=r("This method uses "),Fe=n("a"),lr=r("ViltFeatureExtractor."),Yo=n("strong"),dr=r("call"),cr=r("()"),mr=r(` method to prepare image(s) for the model, and
`),Ee=n("a"),pr=r("BertTokenizerFast."),en=n("strong"),hr=r("call"),fr=r("()"),ur=r(" to prepare text for the model."),gr=m(),tn=n("p"),_r=r("Please refer to the docstring of the above two methods for more information."),os=m(),re=n("h2"),Me=n("a"),on=n("span"),T(xt.$$.fragment),vr=m(),nn=n("span"),br=r("ViltModel"),ns=m(),B=n("div"),T(yt.$$.fragment),Tr=m(),$t=n("p"),kr=r(`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),sn=n("code"),wr=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),xr=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yr=m(),O=n("div"),T(Vt.$$.fragment),$r=m(),ie=n("p"),Vr=r("The "),lo=n("a"),Fr=r("ViltModel"),Er=r(" forward method, overrides the "),an=n("code"),Mr=r("__call__"),Pr=r(" special method."),jr=m(),T(Pe.$$.fragment),zr=m(),T(je.$$.fragment),ss=m(),le=n("h2"),ze=n("a"),rn=n("span"),T(Ft.$$.fragment),Lr=m(),ln=n("span"),Ir=r("ViltForMaskedLM"),as=m(),L=n("div"),T(Et.$$.fragment),Ar=m(),dn=n("p"),Cr=r("ViLT Model with a language modeling head on top as done during pretraining."),qr=m(),Mt=n("p"),Or=r("This model is a PyTorch "),cn=n("code"),Nr=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Sr=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dr=m(),N=n("div"),T(Pt.$$.fragment),Wr=m(),de=n("p"),Rr=r("The "),co=n("a"),Br=r("ViltForMaskedLM"),Qr=r(" forward method, overrides the "),mn=n("code"),Ur=r("__call__"),Hr=r(" special method."),Kr=m(),T(Le.$$.fragment),Gr=m(),T(Ie.$$.fragment),rs=m(),ce=n("h2"),Ae=n("a"),pn=n("span"),T(jt.$$.fragment),Jr=m(),hn=n("span"),Xr=r("ViltForQuestionAnswering"),is=m(),I=n("div"),T(zt.$$.fragment),Zr=m(),fn=n("p"),Yr=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),ei=m(),Lt=n("p"),ti=r("This model is a PyTorch "),un=n("code"),oi=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ni=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),si=m(),S=n("div"),T(It.$$.fragment),ai=m(),me=n("p"),ri=r("The "),mo=n("a"),ii=r("ViltForQuestionAnswering"),li=r(" forward method, overrides the "),gn=n("code"),di=r("__call__"),ci=r(" special method."),mi=m(),T(Ce.$$.fragment),pi=m(),T(qe.$$.fragment),ls=m(),pe=n("h2"),Oe=n("a"),_n=n("span"),T(At.$$.fragment),hi=m(),vn=n("span"),fi=r("ViltForImagesAndTextClassification"),ds=m(),Q=n("div"),T(Ct.$$.fragment),ui=m(),bn=n("p"),gi=r("Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),_i=m(),D=n("div"),T(qt.$$.fragment),vi=m(),he=n("p"),bi=r("The "),po=n("a"),Ti=r("ViltForImagesAndTextClassification"),ki=r(" forward method, overrides the "),Tn=n("code"),wi=r("__call__"),xi=r(" special method."),yi=m(),T(Ne.$$.fragment),$i=m(),T(Se.$$.fragment),cs=m(),fe=n("h2"),De=n("a"),kn=n("span"),T(Ot.$$.fragment),Vi=m(),wn=n("span"),Fi=r("ViltForImageAndTextRetrieval"),ms=m(),A=n("div"),T(Nt.$$.fragment),Ei=m(),xn=n("p"),Mi=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),Pi=m(),St=n("p"),ji=r("This model is a PyTorch "),yn=n("code"),zi=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Li=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ii=m(),W=n("div"),T(Dt.$$.fragment),Ai=m(),ue=n("p"),Ci=r("The "),ho=n("a"),qi=r("ViltForImageAndTextRetrieval"),Oi=r(" forward method, overrides the "),$n=n("code"),Ni=r("__call__"),Si=r(" special method."),Di=m(),T(We.$$.fragment),Wi=m(),T(Re.$$.fragment),ps=m(),ge=n("h2"),Be=n("a"),Vn=n("span"),T(Wt.$$.fragment),Ri=m(),Fn=n("span"),Bi=r("ViltForTokenClassification"),hs=m(),C=n("div"),T(Rt.$$.fragment),Qi=m(),En=n("p"),Ui=r(`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),Hi=m(),Bt=n("p"),Ki=r("This model is a PyTorch "),Mn=n("code"),Gi=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Ji=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi=m(),X=n("div"),T(Qt.$$.fragment),Zi=m(),_e=n("p"),Yi=r("The "),fo=n("a"),el=r("ViltForTokenClassification"),tl=r(" forward method, overrides the "),Pn=n("code"),ol=r("__call__"),nl=r(" special method."),sl=m(),T(Qe.$$.fragment),this.h()},l(t){const f=zd('[data-svelte="svelte-1phssyn"]',document.head);d=s(f,"META",{name:!0,content:!0}),f.forEach(o),b=p(t),g=s(t,"H1",{class:!0});var Ut=a(g);u=s(Ut,"A",{id:!0,class:!0,href:!0});var jn=a(u);v=s(jn,"SPAN",{});var zn=a(v);k(l.$$.fragment,zn),zn.forEach(o),jn.forEach(o),h=p(Ut),F=s(Ut,"SPAN",{});var Ln=a(F);Is=i(Ln,"ViLT"),Ln.forEach(o),Ut.forEach(o),Dn=p(t),Z=s(t,"H2",{class:!0});var Ht=a(Z);ve=s(Ht,"A",{id:!0,class:!0,href:!0});var In=a(ve);Io=s(In,"SPAN",{});var An=a(Io);k(rt.$$.fragment,An),An.forEach(o),In.forEach(o),As=p(Ht),Ao=s(Ht,"SPAN",{});var Cn=a(Ao);Cs=i(Cn,"Overview"),Cn.forEach(o),Ht.forEach(o),Wn=p(t),be=s(t,"P",{});var Kt=a(be);qs=i(Kt,"The ViLT model was proposed in "),it=s(Kt,"A",{href:!0,rel:!0});var qn=a(it);Os=i(qn,"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),qn.forEach(o),Ns=i(Kt,`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Kt.forEach(o),Rn=p(t),Jt=s(t,"P",{});var On=a(Jt);Ss=i(On,"The abstract from the paper is the following:"),On.forEach(o),Bn=p(t),Xt=s(t,"P",{});var Nn=a(Xt);Co=s(Nn,"EM",{});var Sn=a(Co);Ds=i(Sn,`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),Sn.forEach(o),Nn.forEach(o),Qn=p(t),Zt=s(t,"P",{});var il=a(Zt);Ws=i(il,"Tips:"),il.forEach(o),Un=p(t),q=s(t,"UL",{});var Ue=a(q);lt=s(Ue,"LI",{});var us=a(lt);Rs=i(us,"The quickest way to get started with ViLT is by checking the "),dt=s(us,"A",{href:!0,rel:!0});var ll=a(dt);Bs=i(ll,"example notebooks"),ll.forEach(o),Qs=i(us,`
(which showcase both inference and fine-tuning on custom data).`),us.forEach(o),Us=p(Ue),R=s(Ue,"LI",{});var He=a(R);Hs=i(He,"ViLT is a model that takes both "),qo=s(He,"CODE",{});var dl=a(qo);Ks=i(dl,"pixel_values"),dl.forEach(o),Gs=i(He," and "),Oo=s(He,"CODE",{});var cl=a(Oo);Js=i(cl,"input_ids"),cl.forEach(o),Xs=i(He," as input. One can use "),Yt=s(He,"A",{href:!0});var ml=a(Yt);Zs=i(ml,"ViltProcessor"),ml.forEach(o),Ys=i(He,` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),He.forEach(o),ea=p(Ue),Y=s(Ue,"LI",{});var uo=a(Y);ta=i(uo,`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),No=s(uo,"CODE",{});var pl=a(No);oa=i(pl,"pixel_mask"),pl.forEach(o),na=i(uo,` that indicates
which pixel values are real and which are padding. `),eo=s(uo,"A",{href:!0});var hl=a(eo);sa=i(hl,"ViltProcessor"),hl.forEach(o),aa=i(uo," automatically creates this for you."),uo.forEach(o),ra=p(Ue),So=s(Ue,"LI",{});var fl=a(So);ia=i(fl,`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),fl.forEach(o),Ue.forEach(o),Hn=p(t),Te=s(t,"IMG",{src:!0,alt:!0,width:!0}),Kn=p(t),ke=s(t,"SMALL",{});var gs=a(ke);la=i(gs,"ViLT architecture. Taken from the "),to=s(gs,"A",{href:!0});var ul=a(to);da=i(ul,"original paper"),ul.forEach(o),ca=i(gs,"."),gs.forEach(o),Gn=p(t),K=s(t,"P",{});var go=a(K);ma=i(go,"This model was contributed by "),ct=s(go,"A",{href:!0,rel:!0});var gl=a(ct);pa=i(gl,"nielsr"),gl.forEach(o),ha=i(go,". The original code can be found "),mt=s(go,"A",{href:!0,rel:!0});var _l=a(mt);fa=i(_l,"here"),_l.forEach(o),ua=i(go,"."),go.forEach(o),Jn=p(t),ee=s(t,"H2",{class:!0});var _s=a(ee);we=s(_s,"A",{id:!0,class:!0,href:!0});var vl=a(we);Do=s(vl,"SPAN",{});var bl=a(Do);k(pt.$$.fragment,bl),bl.forEach(o),vl.forEach(o),ga=p(_s),Wo=s(_s,"SPAN",{});var Tl=a(Wo);_a=i(Tl,"ViltConfig"),Tl.forEach(o),_s.forEach(o),Xn=p(t),P=s(t,"DIV",{class:!0});var Ke=a(P);k(ht.$$.fragment,Ke),va=p(Ke),te=s(Ke,"P",{});var _o=a(te);ba=i(_o,"This is the configuration class to store the configuration of a "),Ro=s(_o,"CODE",{});var kl=a(Ro);Ta=i(kl,"ViLTModel"),kl.forEach(o),ka=i(_o,`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),ft=s(_o,"A",{href:!0,rel:!0});var wl=a(ft);wa=i(wl,"dandelin/vilt-b32-mlm"),wl.forEach(o),xa=i(_o," architecture."),_o.forEach(o),ya=p(Ke),oe=s(Ke,"P",{});var vo=a(oe);$a=i(vo,"Configuration objects inherit from "),oo=s(vo,"A",{href:!0});var xl=a(oo);Va=i(xl,"PretrainedConfig"),xl.forEach(o),Fa=i(vo,` and can be used to control the model outputs. Read the
documentation from `),no=s(vo,"A",{href:!0});var yl=a(no);Ea=i(yl,"PretrainedConfig"),yl.forEach(o),Ma=i(vo," for more information."),vo.forEach(o),Pa=p(Ke),k(xe.$$.fragment,Ke),Ke.forEach(o),Zn=p(t),ne=s(t,"H2",{class:!0});var vs=a(ne);ye=s(vs,"A",{id:!0,class:!0,href:!0});var $l=a(ye);Bo=s($l,"SPAN",{});var Vl=a(Bo);k(ut.$$.fragment,Vl),Vl.forEach(o),$l.forEach(o),ja=p(vs),Qo=s(vs,"SPAN",{});var Fl=a(Qo);za=i(Fl,"ViltFeatureExtractor"),Fl.forEach(o),vs.forEach(o),Yn=p(t),j=s(t,"DIV",{class:!0});var Ge=a(j);k(gt.$$.fragment,Ge),La=p(Ge),Uo=s(Ge,"P",{});var El=a(Uo);Ia=i(El,"Constructs a ViLT feature extractor."),El.forEach(o),Aa=p(Ge),_t=s(Ge,"P",{});var bs=a(_t);Ca=i(bs,"This feature extractor inherits from "),so=s(bs,"A",{href:!0});var Ml=a(so);qa=i(Ml,"FeatureExtractionMixin"),Ml.forEach(o),Oa=i(bs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),bs.forEach(o),Na=p(Ge),G=s(Ge,"DIV",{class:!0});var bo=a(G);k(vt.$$.fragment,bo),Sa=p(bo),Ho=s(bo,"P",{});var Pl=a(Ho);Da=i(Pl,"Main method to prepare for the model one or several image(s)."),Pl.forEach(o),Wa=p(bo),k($e.$$.fragment,bo),bo.forEach(o),Ge.forEach(o),es=p(t),se=s(t,"H2",{class:!0});var Ts=a(se);Ve=s(Ts,"A",{id:!0,class:!0,href:!0});var jl=a(Ve);Ko=s(jl,"SPAN",{});var zl=a(Ko);k(bt.$$.fragment,zl),zl.forEach(o),jl.forEach(o),Ra=p(Ts),Go=s(Ts,"SPAN",{});var Ll=a(Go);Ba=i(Ll,"ViltProcessor"),Ll.forEach(o),Ts.forEach(o),ts=p(t),z=s(t,"DIV",{class:!0});var Je=a(z);k(Tt.$$.fragment,Je),Qa=p(Je),Jo=s(Je,"P",{});var Il=a(Jo);Ua=i(Il,"Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Il.forEach(o),Ha=p(Je),M=s(Je,"P",{});var U=a(M);ao=s(U,"A",{href:!0});var Al=a(ao);Ka=i(Al,"ViltProcessor"),Al.forEach(o),Ga=i(U," offers all the functionalities of "),ro=s(U,"A",{href:!0});var Cl=a(ro);Ja=i(Cl,"ViltFeatureExtractor"),Cl.forEach(o),Xa=i(U," and "),io=s(U,"A",{href:!0});var ql=a(io);Za=i(ql,"BertTokenizerFast"),ql.forEach(o),Ya=i(U,`. See the
docstring of `),kt=s(U,"A",{href:!0});var al=a(kt);Xo=s(al,"STRONG",{});var Ol=a(Xo);er=i(Ol,"call"),Ol.forEach(o),tr=i(al,"()"),al.forEach(o),or=i(U," and "),Zo=s(U,"CODE",{});var Nl=a(Zo);nr=i(Nl,"decode()"),Nl.forEach(o),sr=i(U," for more information."),U.forEach(o),ar=p(Je),J=s(Je,"DIV",{class:!0});var To=a(J);k(wt.$$.fragment,To),rr=p(To),ae=s(To,"P",{});var ko=a(ae);ir=i(ko,"This method uses "),Fe=s(ko,"A",{href:!0});var ks=a(Fe);lr=i(ks,"ViltFeatureExtractor."),Yo=s(ks,"STRONG",{});var Sl=a(Yo);dr=i(Sl,"call"),Sl.forEach(o),cr=i(ks,"()"),ks.forEach(o),mr=i(ko,` method to prepare image(s) for the model, and
`),Ee=s(ko,"A",{href:!0});var ws=a(Ee);pr=i(ws,"BertTokenizerFast."),en=s(ws,"STRONG",{});var Dl=a(en);hr=i(Dl,"call"),Dl.forEach(o),fr=i(ws,"()"),ws.forEach(o),ur=i(ko," to prepare text for the model."),ko.forEach(o),gr=p(To),tn=s(To,"P",{});var Wl=a(tn);_r=i(Wl,"Please refer to the docstring of the above two methods for more information."),Wl.forEach(o),To.forEach(o),Je.forEach(o),os=p(t),re=s(t,"H2",{class:!0});var xs=a(re);Me=s(xs,"A",{id:!0,class:!0,href:!0});var Rl=a(Me);on=s(Rl,"SPAN",{});var Bl=a(on);k(xt.$$.fragment,Bl),Bl.forEach(o),Rl.forEach(o),vr=p(xs),nn=s(xs,"SPAN",{});var Ql=a(nn);br=i(Ql,"ViltModel"),Ql.forEach(o),xs.forEach(o),ns=p(t),B=s(t,"DIV",{class:!0});var wo=a(B);k(yt.$$.fragment,wo),Tr=p(wo),$t=s(wo,"P",{});var ys=a($t);kr=i(ys,`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),sn=s(ys,"CODE",{});var Ul=a(sn);wr=i(Ul,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Ul.forEach(o),xr=i(ys,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ys.forEach(o),yr=p(wo),O=s(wo,"DIV",{class:!0});var Xe=a(O);k(Vt.$$.fragment,Xe),$r=p(Xe),ie=s(Xe,"P",{});var xo=a(ie);Vr=i(xo,"The "),lo=s(xo,"A",{href:!0});var Hl=a(lo);Fr=i(Hl,"ViltModel"),Hl.forEach(o),Er=i(xo," forward method, overrides the "),an=s(xo,"CODE",{});var Kl=a(an);Mr=i(Kl,"__call__"),Kl.forEach(o),Pr=i(xo," special method."),xo.forEach(o),jr=p(Xe),k(Pe.$$.fragment,Xe),zr=p(Xe),k(je.$$.fragment,Xe),Xe.forEach(o),wo.forEach(o),ss=p(t),le=s(t,"H2",{class:!0});var $s=a(le);ze=s($s,"A",{id:!0,class:!0,href:!0});var Gl=a(ze);rn=s(Gl,"SPAN",{});var Jl=a(rn);k(Ft.$$.fragment,Jl),Jl.forEach(o),Gl.forEach(o),Lr=p($s),ln=s($s,"SPAN",{});var Xl=a(ln);Ir=i(Xl,"ViltForMaskedLM"),Xl.forEach(o),$s.forEach(o),as=p(t),L=s(t,"DIV",{class:!0});var Ze=a(L);k(Et.$$.fragment,Ze),Ar=p(Ze),dn=s(Ze,"P",{});var Zl=a(dn);Cr=i(Zl,"ViLT Model with a language modeling head on top as done during pretraining."),Zl.forEach(o),qr=p(Ze),Mt=s(Ze,"P",{});var Vs=a(Mt);Or=i(Vs,"This model is a PyTorch "),cn=s(Vs,"CODE",{});var Yl=a(cn);Nr=i(Yl,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Yl.forEach(o),Sr=i(Vs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vs.forEach(o),Dr=p(Ze),N=s(Ze,"DIV",{class:!0});var Ye=a(N);k(Pt.$$.fragment,Ye),Wr=p(Ye),de=s(Ye,"P",{});var yo=a(de);Rr=i(yo,"The "),co=s(yo,"A",{href:!0});var ed=a(co);Br=i(ed,"ViltForMaskedLM"),ed.forEach(o),Qr=i(yo," forward method, overrides the "),mn=s(yo,"CODE",{});var td=a(mn);Ur=i(td,"__call__"),td.forEach(o),Hr=i(yo," special method."),yo.forEach(o),Kr=p(Ye),k(Le.$$.fragment,Ye),Gr=p(Ye),k(Ie.$$.fragment,Ye),Ye.forEach(o),Ze.forEach(o),rs=p(t),ce=s(t,"H2",{class:!0});var Fs=a(ce);Ae=s(Fs,"A",{id:!0,class:!0,href:!0});var od=a(Ae);pn=s(od,"SPAN",{});var nd=a(pn);k(jt.$$.fragment,nd),nd.forEach(o),od.forEach(o),Jr=p(Fs),hn=s(Fs,"SPAN",{});var sd=a(hn);Xr=i(sd,"ViltForQuestionAnswering"),sd.forEach(o),Fs.forEach(o),is=p(t),I=s(t,"DIV",{class:!0});var et=a(I);k(zt.$$.fragment,et),Zr=p(et),fn=s(et,"P",{});var ad=a(fn);Yr=i(ad,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),ad.forEach(o),ei=p(et),Lt=s(et,"P",{});var Es=a(Lt);ti=i(Es,"This model is a PyTorch "),un=s(Es,"CODE",{});var rd=a(un);oi=i(rd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),rd.forEach(o),ni=i(Es,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Es.forEach(o),si=p(et),S=s(et,"DIV",{class:!0});var tt=a(S);k(It.$$.fragment,tt),ai=p(tt),me=s(tt,"P",{});var $o=a(me);ri=i($o,"The "),mo=s($o,"A",{href:!0});var id=a(mo);ii=i(id,"ViltForQuestionAnswering"),id.forEach(o),li=i($o," forward method, overrides the "),gn=s($o,"CODE",{});var ld=a(gn);di=i(ld,"__call__"),ld.forEach(o),ci=i($o," special method."),$o.forEach(o),mi=p(tt),k(Ce.$$.fragment,tt),pi=p(tt),k(qe.$$.fragment,tt),tt.forEach(o),et.forEach(o),ls=p(t),pe=s(t,"H2",{class:!0});var Ms=a(pe);Oe=s(Ms,"A",{id:!0,class:!0,href:!0});var dd=a(Oe);_n=s(dd,"SPAN",{});var cd=a(_n);k(At.$$.fragment,cd),cd.forEach(o),dd.forEach(o),hi=p(Ms),vn=s(Ms,"SPAN",{});var md=a(vn);fi=i(md,"ViltForImagesAndTextClassification"),md.forEach(o),Ms.forEach(o),ds=p(t),Q=s(t,"DIV",{class:!0});var Vo=a(Q);k(Ct.$$.fragment,Vo),ui=p(Vo),bn=s(Vo,"P",{});var pd=a(bn);gi=i(pd,"Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),pd.forEach(o),_i=p(Vo),D=s(Vo,"DIV",{class:!0});var ot=a(D);k(qt.$$.fragment,ot),vi=p(ot),he=s(ot,"P",{});var Fo=a(he);bi=i(Fo,"The "),po=s(Fo,"A",{href:!0});var hd=a(po);Ti=i(hd,"ViltForImagesAndTextClassification"),hd.forEach(o),ki=i(Fo," forward method, overrides the "),Tn=s(Fo,"CODE",{});var fd=a(Tn);wi=i(fd,"__call__"),fd.forEach(o),xi=i(Fo," special method."),Fo.forEach(o),yi=p(ot),k(Ne.$$.fragment,ot),$i=p(ot),k(Se.$$.fragment,ot),ot.forEach(o),Vo.forEach(o),cs=p(t),fe=s(t,"H2",{class:!0});var Ps=a(fe);De=s(Ps,"A",{id:!0,class:!0,href:!0});var ud=a(De);kn=s(ud,"SPAN",{});var gd=a(kn);k(Ot.$$.fragment,gd),gd.forEach(o),ud.forEach(o),Vi=p(Ps),wn=s(Ps,"SPAN",{});var _d=a(wn);Fi=i(_d,"ViltForImageAndTextRetrieval"),_d.forEach(o),Ps.forEach(o),ms=p(t),A=s(t,"DIV",{class:!0});var nt=a(A);k(Nt.$$.fragment,nt),Ei=p(nt),xn=s(nt,"P",{});var vd=a(xn);Mi=i(vd,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),vd.forEach(o),Pi=p(nt),St=s(nt,"P",{});var js=a(St);ji=i(js,"This model is a PyTorch "),yn=s(js,"CODE",{});var bd=a(yn);zi=i(bd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),bd.forEach(o),Li=i(js,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),js.forEach(o),Ii=p(nt),W=s(nt,"DIV",{class:!0});var st=a(W);k(Dt.$$.fragment,st),Ai=p(st),ue=s(st,"P",{});var Eo=a(ue);Ci=i(Eo,"The "),ho=s(Eo,"A",{href:!0});var Td=a(ho);qi=i(Td,"ViltForImageAndTextRetrieval"),Td.forEach(o),Oi=i(Eo," forward method, overrides the "),$n=s(Eo,"CODE",{});var kd=a($n);Ni=i(kd,"__call__"),kd.forEach(o),Si=i(Eo," special method."),Eo.forEach(o),Di=p(st),k(We.$$.fragment,st),Wi=p(st),k(Re.$$.fragment,st),st.forEach(o),nt.forEach(o),ps=p(t),ge=s(t,"H2",{class:!0});var zs=a(ge);Be=s(zs,"A",{id:!0,class:!0,href:!0});var wd=a(Be);Vn=s(wd,"SPAN",{});var xd=a(Vn);k(Wt.$$.fragment,xd),xd.forEach(o),wd.forEach(o),Ri=p(zs),Fn=s(zs,"SPAN",{});var yd=a(Fn);Bi=i(yd,"ViltForTokenClassification"),yd.forEach(o),zs.forEach(o),hs=p(t),C=s(t,"DIV",{class:!0});var at=a(C);k(Rt.$$.fragment,at),Qi=p(at),En=s(at,"P",{});var $d=a(En);Ui=i($d,`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),$d.forEach(o),Hi=p(at),Bt=s(at,"P",{});var Ls=a(Bt);Ki=i(Ls,"This model is a PyTorch "),Mn=s(Ls,"CODE",{});var Vd=a(Mn);Gi=i(Vd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Vd.forEach(o),Ji=i(Ls,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls.forEach(o),Xi=p(at),X=s(at,"DIV",{class:!0});var Mo=a(X);k(Qt.$$.fragment,Mo),Zi=p(Mo),_e=s(Mo,"P",{});var Po=a(_e);Yi=i(Po,"The "),fo=s(Po,"A",{href:!0});var Fd=a(fo);el=i(Fd,"ViltForTokenClassification"),Fd.forEach(o),tl=i(Po," forward method, overrides the "),Pn=s(Po,"CODE",{});var Ed=a(Pn);ol=i(Ed,"__call__"),Ed.forEach(o),nl=i(Po," special method."),Po.forEach(o),sl=p(Mo),k(Qe.$$.fragment,Mo),Mo.forEach(o),at.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Gd)),c(u,"id","vilt"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#vilt"),c(g,"class","relative group"),c(ve,"id","overview"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#overview"),c(Z,"class","relative group"),c(it,"href","https://arxiv.org/abs/2102.03334"),c(it,"rel","nofollow"),c(dt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ViLT"),c(dt,"rel","nofollow"),c(Yt,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),c(eo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),Ld(Te.src,rl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vilt_architecture.jpg")||c(Te,"src",rl),c(Te,"alt","drawing"),c(Te,"width","600"),c(to,"href","https://arxiv.org/abs/2102.03334"),c(ct,"href","https://huggingface.co/nielsr"),c(ct,"rel","nofollow"),c(mt,"href","https://github.com/dandelin/ViLT"),c(mt,"rel","nofollow"),c(we,"id","transformers.ViltConfig"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.ViltConfig"),c(ee,"class","relative group"),c(ft,"href","https://huggingface.co/dandelin/vilt-b32-mlm"),c(ft,"rel","nofollow"),c(oo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(no,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.ViltFeatureExtractor"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.ViltFeatureExtractor"),c(ne,"class","relative group"),c(so,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ve,"id","transformers.ViltProcessor"),c(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ve,"href","#transformers.ViltProcessor"),c(se,"class","relative group"),c(ao,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),c(ro,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor"),c(io,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),c(kt,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor.__call__"),c(Fe,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__"),c(Ee,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"id","transformers.ViltModel"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#transformers.ViltModel"),c(re,"class","relative group"),c(lo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"id","transformers.ViltForMaskedLM"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.ViltForMaskedLM"),c(le,"class","relative group"),c(co,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForMaskedLM"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.ViltForQuestionAnswering"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.ViltForQuestionAnswering"),c(ce,"class","relative group"),c(mo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForQuestionAnswering"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.ViltForImagesAndTextClassification"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.ViltForImagesAndTextClassification"),c(pe,"class","relative group"),c(po,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(De,"id","transformers.ViltForImageAndTextRetrieval"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#transformers.ViltForImageAndTextRetrieval"),c(fe,"class","relative group"),c(ho,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImageAndTextRetrieval"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"id","transformers.ViltForTokenClassification"),c(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Be,"href","#transformers.ViltForTokenClassification"),c(ge,"class","relative group"),c(fo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForTokenClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,b,f),_(t,g,f),e(g,u),e(u,v),w(l,v,null),e(g,h),e(g,F),e(F,Is),_(t,Dn,f),_(t,Z,f),e(Z,ve),e(ve,Io),w(rt,Io,null),e(Z,As),e(Z,Ao),e(Ao,Cs),_(t,Wn,f),_(t,be,f),e(be,qs),e(be,it),e(it,Os),e(be,Ns),_(t,Rn,f),_(t,Jt,f),e(Jt,Ss),_(t,Bn,f),_(t,Xt,f),e(Xt,Co),e(Co,Ds),_(t,Qn,f),_(t,Zt,f),e(Zt,Ws),_(t,Un,f),_(t,q,f),e(q,lt),e(lt,Rs),e(lt,dt),e(dt,Bs),e(lt,Qs),e(q,Us),e(q,R),e(R,Hs),e(R,qo),e(qo,Ks),e(R,Gs),e(R,Oo),e(Oo,Js),e(R,Xs),e(R,Yt),e(Yt,Zs),e(R,Ys),e(q,ea),e(q,Y),e(Y,ta),e(Y,No),e(No,oa),e(Y,na),e(Y,eo),e(eo,sa),e(Y,aa),e(q,ra),e(q,So),e(So,ia),_(t,Hn,f),_(t,Te,f),_(t,Kn,f),_(t,ke,f),e(ke,la),e(ke,to),e(to,da),e(ke,ca),_(t,Gn,f),_(t,K,f),e(K,ma),e(K,ct),e(ct,pa),e(K,ha),e(K,mt),e(mt,fa),e(K,ua),_(t,Jn,f),_(t,ee,f),e(ee,we),e(we,Do),w(pt,Do,null),e(ee,ga),e(ee,Wo),e(Wo,_a),_(t,Xn,f),_(t,P,f),w(ht,P,null),e(P,va),e(P,te),e(te,ba),e(te,Ro),e(Ro,Ta),e(te,ka),e(te,ft),e(ft,wa),e(te,xa),e(P,ya),e(P,oe),e(oe,$a),e(oe,oo),e(oo,Va),e(oe,Fa),e(oe,no),e(no,Ea),e(oe,Ma),e(P,Pa),w(xe,P,null),_(t,Zn,f),_(t,ne,f),e(ne,ye),e(ye,Bo),w(ut,Bo,null),e(ne,ja),e(ne,Qo),e(Qo,za),_(t,Yn,f),_(t,j,f),w(gt,j,null),e(j,La),e(j,Uo),e(Uo,Ia),e(j,Aa),e(j,_t),e(_t,Ca),e(_t,so),e(so,qa),e(_t,Oa),e(j,Na),e(j,G),w(vt,G,null),e(G,Sa),e(G,Ho),e(Ho,Da),e(G,Wa),w($e,G,null),_(t,es,f),_(t,se,f),e(se,Ve),e(Ve,Ko),w(bt,Ko,null),e(se,Ra),e(se,Go),e(Go,Ba),_(t,ts,f),_(t,z,f),w(Tt,z,null),e(z,Qa),e(z,Jo),e(Jo,Ua),e(z,Ha),e(z,M),e(M,ao),e(ao,Ka),e(M,Ga),e(M,ro),e(ro,Ja),e(M,Xa),e(M,io),e(io,Za),e(M,Ya),e(M,kt),e(kt,Xo),e(Xo,er),e(kt,tr),e(M,or),e(M,Zo),e(Zo,nr),e(M,sr),e(z,ar),e(z,J),w(wt,J,null),e(J,rr),e(J,ae),e(ae,ir),e(ae,Fe),e(Fe,lr),e(Fe,Yo),e(Yo,dr),e(Fe,cr),e(ae,mr),e(ae,Ee),e(Ee,pr),e(Ee,en),e(en,hr),e(Ee,fr),e(ae,ur),e(J,gr),e(J,tn),e(tn,_r),_(t,os,f),_(t,re,f),e(re,Me),e(Me,on),w(xt,on,null),e(re,vr),e(re,nn),e(nn,br),_(t,ns,f),_(t,B,f),w(yt,B,null),e(B,Tr),e(B,$t),e($t,kr),e($t,sn),e(sn,wr),e($t,xr),e(B,yr),e(B,O),w(Vt,O,null),e(O,$r),e(O,ie),e(ie,Vr),e(ie,lo),e(lo,Fr),e(ie,Er),e(ie,an),e(an,Mr),e(ie,Pr),e(O,jr),w(Pe,O,null),e(O,zr),w(je,O,null),_(t,ss,f),_(t,le,f),e(le,ze),e(ze,rn),w(Ft,rn,null),e(le,Lr),e(le,ln),e(ln,Ir),_(t,as,f),_(t,L,f),w(Et,L,null),e(L,Ar),e(L,dn),e(dn,Cr),e(L,qr),e(L,Mt),e(Mt,Or),e(Mt,cn),e(cn,Nr),e(Mt,Sr),e(L,Dr),e(L,N),w(Pt,N,null),e(N,Wr),e(N,de),e(de,Rr),e(de,co),e(co,Br),e(de,Qr),e(de,mn),e(mn,Ur),e(de,Hr),e(N,Kr),w(Le,N,null),e(N,Gr),w(Ie,N,null),_(t,rs,f),_(t,ce,f),e(ce,Ae),e(Ae,pn),w(jt,pn,null),e(ce,Jr),e(ce,hn),e(hn,Xr),_(t,is,f),_(t,I,f),w(zt,I,null),e(I,Zr),e(I,fn),e(fn,Yr),e(I,ei),e(I,Lt),e(Lt,ti),e(Lt,un),e(un,oi),e(Lt,ni),e(I,si),e(I,S),w(It,S,null),e(S,ai),e(S,me),e(me,ri),e(me,mo),e(mo,ii),e(me,li),e(me,gn),e(gn,di),e(me,ci),e(S,mi),w(Ce,S,null),e(S,pi),w(qe,S,null),_(t,ls,f),_(t,pe,f),e(pe,Oe),e(Oe,_n),w(At,_n,null),e(pe,hi),e(pe,vn),e(vn,fi),_(t,ds,f),_(t,Q,f),w(Ct,Q,null),e(Q,ui),e(Q,bn),e(bn,gi),e(Q,_i),e(Q,D),w(qt,D,null),e(D,vi),e(D,he),e(he,bi),e(he,po),e(po,Ti),e(he,ki),e(he,Tn),e(Tn,wi),e(he,xi),e(D,yi),w(Ne,D,null),e(D,$i),w(Se,D,null),_(t,cs,f),_(t,fe,f),e(fe,De),e(De,kn),w(Ot,kn,null),e(fe,Vi),e(fe,wn),e(wn,Fi),_(t,ms,f),_(t,A,f),w(Nt,A,null),e(A,Ei),e(A,xn),e(xn,Mi),e(A,Pi),e(A,St),e(St,ji),e(St,yn),e(yn,zi),e(St,Li),e(A,Ii),e(A,W),w(Dt,W,null),e(W,Ai),e(W,ue),e(ue,Ci),e(ue,ho),e(ho,qi),e(ue,Oi),e(ue,$n),e($n,Ni),e(ue,Si),e(W,Di),w(We,W,null),e(W,Wi),w(Re,W,null),_(t,ps,f),_(t,ge,f),e(ge,Be),e(Be,Vn),w(Wt,Vn,null),e(ge,Ri),e(ge,Fn),e(Fn,Bi),_(t,hs,f),_(t,C,f),w(Rt,C,null),e(C,Qi),e(C,En),e(En,Ui),e(C,Hi),e(C,Bt),e(Bt,Ki),e(Bt,Mn),e(Mn,Gi),e(Bt,Ji),e(C,Xi),e(C,X),w(Qt,X,null),e(X,Zi),e(X,_e),e(_e,Yi),e(_e,fo),e(fo,el),e(_e,tl),e(_e,Pn),e(Pn,ol),e(_e,nl),e(X,sl),w(Qe,X,null),fs=!0},p(t,[f]){const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:t}),xe.$set(Ut);const jn={};f&2&&(jn.$$scope={dirty:f,ctx:t}),$e.$set(jn);const zn={};f&2&&(zn.$$scope={dirty:f,ctx:t}),Pe.$set(zn);const Ln={};f&2&&(Ln.$$scope={dirty:f,ctx:t}),je.$set(Ln);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:t}),Le.$set(Ht);const In={};f&2&&(In.$$scope={dirty:f,ctx:t}),Ie.$set(In);const An={};f&2&&(An.$$scope={dirty:f,ctx:t}),Ce.$set(An);const Cn={};f&2&&(Cn.$$scope={dirty:f,ctx:t}),qe.$set(Cn);const Kt={};f&2&&(Kt.$$scope={dirty:f,ctx:t}),Ne.$set(Kt);const qn={};f&2&&(qn.$$scope={dirty:f,ctx:t}),Se.$set(qn);const On={};f&2&&(On.$$scope={dirty:f,ctx:t}),We.$set(On);const Nn={};f&2&&(Nn.$$scope={dirty:f,ctx:t}),Re.$set(Nn);const Sn={};f&2&&(Sn.$$scope={dirty:f,ctx:t}),Qe.$set(Sn)},i(t){fs||(x(l.$$.fragment,t),x(rt.$$.fragment,t),x(pt.$$.fragment,t),x(ht.$$.fragment,t),x(xe.$$.fragment,t),x(ut.$$.fragment,t),x(gt.$$.fragment,t),x(vt.$$.fragment,t),x($e.$$.fragment,t),x(bt.$$.fragment,t),x(Tt.$$.fragment,t),x(wt.$$.fragment,t),x(xt.$$.fragment,t),x(yt.$$.fragment,t),x(Vt.$$.fragment,t),x(Pe.$$.fragment,t),x(je.$$.fragment,t),x(Ft.$$.fragment,t),x(Et.$$.fragment,t),x(Pt.$$.fragment,t),x(Le.$$.fragment,t),x(Ie.$$.fragment,t),x(jt.$$.fragment,t),x(zt.$$.fragment,t),x(It.$$.fragment,t),x(Ce.$$.fragment,t),x(qe.$$.fragment,t),x(At.$$.fragment,t),x(Ct.$$.fragment,t),x(qt.$$.fragment,t),x(Ne.$$.fragment,t),x(Se.$$.fragment,t),x(Ot.$$.fragment,t),x(Nt.$$.fragment,t),x(Dt.$$.fragment,t),x(We.$$.fragment,t),x(Re.$$.fragment,t),x(Wt.$$.fragment,t),x(Rt.$$.fragment,t),x(Qt.$$.fragment,t),x(Qe.$$.fragment,t),fs=!0)},o(t){y(l.$$.fragment,t),y(rt.$$.fragment,t),y(pt.$$.fragment,t),y(ht.$$.fragment,t),y(xe.$$.fragment,t),y(ut.$$.fragment,t),y(gt.$$.fragment,t),y(vt.$$.fragment,t),y($e.$$.fragment,t),y(bt.$$.fragment,t),y(Tt.$$.fragment,t),y(wt.$$.fragment,t),y(xt.$$.fragment,t),y(yt.$$.fragment,t),y(Vt.$$.fragment,t),y(Pe.$$.fragment,t),y(je.$$.fragment,t),y(Ft.$$.fragment,t),y(Et.$$.fragment,t),y(Pt.$$.fragment,t),y(Le.$$.fragment,t),y(Ie.$$.fragment,t),y(jt.$$.fragment,t),y(zt.$$.fragment,t),y(It.$$.fragment,t),y(Ce.$$.fragment,t),y(qe.$$.fragment,t),y(At.$$.fragment,t),y(Ct.$$.fragment,t),y(qt.$$.fragment,t),y(Ne.$$.fragment,t),y(Se.$$.fragment,t),y(Ot.$$.fragment,t),y(Nt.$$.fragment,t),y(Dt.$$.fragment,t),y(We.$$.fragment,t),y(Re.$$.fragment,t),y(Wt.$$.fragment,t),y(Rt.$$.fragment,t),y(Qt.$$.fragment,t),y(Qe.$$.fragment,t),fs=!1},d(t){o(d),t&&o(b),t&&o(g),$(l),t&&o(Dn),t&&o(Z),$(rt),t&&o(Wn),t&&o(be),t&&o(Rn),t&&o(Jt),t&&o(Bn),t&&o(Xt),t&&o(Qn),t&&o(Zt),t&&o(Un),t&&o(q),t&&o(Hn),t&&o(Te),t&&o(Kn),t&&o(ke),t&&o(Gn),t&&o(K),t&&o(Jn),t&&o(ee),$(pt),t&&o(Xn),t&&o(P),$(ht),$(xe),t&&o(Zn),t&&o(ne),$(ut),t&&o(Yn),t&&o(j),$(gt),$(vt),$($e),t&&o(es),t&&o(se),$(bt),t&&o(ts),t&&o(z),$(Tt),$(wt),t&&o(os),t&&o(re),$(xt),t&&o(ns),t&&o(B),$(yt),$(Vt),$(Pe),$(je),t&&o(ss),t&&o(le),$(Ft),t&&o(as),t&&o(L),$(Et),$(Pt),$(Le),$(Ie),t&&o(rs),t&&o(ce),$(jt),t&&o(is),t&&o(I),$(zt),$(It),$(Ce),$(qe),t&&o(ls),t&&o(pe),$(At),t&&o(ds),t&&o(Q),$(Ct),$(qt),$(Ne),$(Se),t&&o(cs),t&&o(fe),$(Ot),t&&o(ms),t&&o(A),$(Nt),$(Dt),$(We),$(Re),t&&o(ps),t&&o(ge),$(Wt),t&&o(hs),t&&o(C),$(Rt),$(Qt),$(Qe)}}}const Gd={local:"vilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViltConfig",title:"ViltConfig"},{local:"transformers.ViltFeatureExtractor",title:"ViltFeatureExtractor"},{local:"transformers.ViltProcessor",title:"ViltProcessor"},{local:"transformers.ViltModel",title:"ViltModel"},{local:"transformers.ViltForMaskedLM",title:"ViltForMaskedLM"},{local:"transformers.ViltForQuestionAnswering",title:"ViltForQuestionAnswering"},{local:"transformers.ViltForImagesAndTextClassification",title:"ViltForImagesAndTextClassification"},{local:"transformers.ViltForImageAndTextRetrieval",title:"ViltForImageAndTextRetrieval"},{local:"transformers.ViltForTokenClassification",title:"ViltForTokenClassification"}],title:"ViLT"};function Jd(V){return Id(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class nc extends Md{constructor(d){super();Pd(this,d,Jd,Kd,jd,{})}}export{nc as default,Gd as metadata};
