import{S as Nd,i as Sd,s as Dd,e as n,k as c,w as T,t as r,M as Rd,c as s,d as o,m as p,a,x as k,h as i,b as m,N as Bd,G as e,g as _,y as w,q as x,o as y,B as $,v as Wd,L as Io}from"../../chunks/vendor-hf-doc-builder.js";import{T as Gt}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ao}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as H}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Lo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Qd(V){let d,b,g,u,v;return u=new Ao({props:{code:`from transformers import ViLTModel, ViLTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=r("Example:"),g=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Example:"),f.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),w(u,l,f),v=!0},p:Io,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Ud(V){let d,b;return{c(){d=n("p"),b=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(g){d=s(g,"P",{});var u=a(d);b=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(o)},m(g,u){_(g,d,u),e(d,b)},d(g){g&&o(d)}}}function Hd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Kd(V){let d,b,g,u,v;return u=new Ao({props:{code:`from transformers import ViltProcessor, ViltModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=r("Examples:"),g=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),w(u,l,f),v=!0},p:Io,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Gd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Jd(V){let d,b,g,u,v;return u=new Ao({props:{code:`from transformers import ViltProcessor, ViltForMaskedLM
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
a bunch of cats laying on a couch.`}}),{c(){d=n("p"),b=r("Examples:"),g=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),w(u,l,f),v=!0},p:Io,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Xd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function Zd(V){let d,b,g,u,v;return u=new Ao({props:{code:`from transformers import ViltProcessor, ViltForQuestionAnswering
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
Predicted answer: <span class="hljs-number">2</span>`}}),{c(){d=n("p"),b=r("Examples:"),g=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),w(u,l,f),v=!0},p:Io,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Yd(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function ec(V){let d,b,g,u,v;return u=new Ao({props:{code:`from transformers import ViltProcessor, ViltForImagesAndTextClassification
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
Predicted answer: <span class="hljs-literal">True</span>`}}),{c(){d=n("p"),b=r("Examples:"),g=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),w(u,l,f),v=!0},p:Io,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function tc(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function oc(V){let d,b,g,u,v;return u=new Ao({props:{code:`from transformers import ViltProcessor, ViltForImageAndTextRetrieval
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
<span class="hljs-meta">... </span>    scores[text] = outputs.logits[<span class="hljs-number">0</span>, :].item()`}}),{c(){d=n("p"),b=r("Examples:"),g=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),k(u.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),w(u,l,f),v=!0},p:Io,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function nc(V){let d,b,g,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=a(g);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,u),e(d,v)},d(l){l&&o(d)}}}function sc(V){let d,b,g,u,v,l,f,F,Ns,Wn,Z,ve,Co,rt,Ss,qo,Ds,Qn,be,Rs,it,Bs,Ws,Un,Jt,Qs,Hn,Xt,Oo,Us,Kn,Zt,Hs,Gn,q,lt,Ks,dt,Gs,Js,Xs,B,Zs,No,Ys,ea,So,ta,oa,Yt,na,sa,aa,Y,ra,Do,ia,la,eo,da,ca,pa,Ro,ma,Jn,Te,hl,Xn,ke,ha,to,fa,ua,Zn,K,ga,ct,_a,va,pt,ba,Ta,Yn,oo,ka,es,no,Bo,wa,ts,ee,we,Wo,mt,xa,Qo,ya,os,P,ht,$a,te,Va,Uo,Fa,Ea,ft,Ma,Pa,ja,oe,za,so,La,Ia,ao,Aa,Ca,qa,xe,ns,ne,ye,Ho,ut,Oa,Ko,Na,ss,j,gt,Sa,Go,Da,Ra,_t,Ba,ro,Wa,Qa,Ua,G,vt,Ha,Jo,Ka,Ga,$e,as,se,Ve,Xo,bt,Ja,Zo,Xa,rs,z,Tt,Za,Yo,Ya,er,M,io,tr,or,lo,nr,sr,co,ar,rr,kt,en,ir,lr,dr,tn,cr,pr,mr,J,wt,hr,ae,fr,Fe,ur,on,gr,_r,vr,Ee,br,nn,Tr,kr,wr,xr,sn,yr,is,re,Me,an,xt,$r,rn,Vr,ls,W,yt,Fr,$t,Er,ln,Mr,Pr,jr,O,Vt,zr,ie,Lr,po,Ir,Ar,dn,Cr,qr,Or,Pe,Nr,je,ds,le,ze,cn,Ft,Sr,pn,Dr,cs,L,Et,Rr,mn,Br,Wr,Mt,Qr,hn,Ur,Hr,Kr,N,Pt,Gr,de,Jr,mo,Xr,Zr,fn,Yr,ei,ti,Le,oi,Ie,ps,ce,Ae,un,jt,ni,gn,si,ms,I,zt,ai,_n,ri,ii,Lt,li,vn,di,ci,pi,S,It,mi,pe,hi,ho,fi,ui,bn,gi,_i,vi,Ce,bi,qe,hs,me,Oe,Tn,At,Ti,kn,ki,fs,Q,Ct,wi,wn,xi,yi,D,qt,$i,he,Vi,fo,Fi,Ei,xn,Mi,Pi,ji,Ne,zi,Se,us,fe,De,yn,Ot,Li,$n,Ii,gs,A,Nt,Ai,Vn,Ci,qi,St,Oi,Fn,Ni,Si,Di,R,Dt,Ri,ue,Bi,uo,Wi,Qi,En,Ui,Hi,Ki,Re,Gi,Be,_s,ge,We,Mn,Rt,Ji,Pn,Xi,vs,C,Bt,Zi,jn,Yi,el,Wt,tl,zn,ol,nl,sl,X,Qt,al,_e,rl,go,il,ll,Ln,dl,cl,pl,Qe,bs;return l=new H({}),rt=new H({}),mt=new H({}),ht=new E({props:{name:"class transformers.ViltConfig",anchor:"transformers.ViltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"type_vocab_size",val:" = 2"},{name:"modality_type_vocab_size",val:" = 2"},{name:"max_position_embeddings",val:" = 40"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 32"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"max_image_length",val:" = -1"},{name:"tie_word_embeddings",val:" = False"},{name:"num_images",val:" = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the text part of the model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>.`,name:"vocab_size"},{anchor:"transformers.ViltConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used when encoding
text.`,name:"type_vocab_size"},{anchor:"transformers.ViltConfig.modality_type_vocab_size",description:`<strong>modality_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the modalities passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used after concatening the
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
used by <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> for defining the classifier head.`,name:"num_images"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/configuration_vilt.py#L28"}}),xe=new Lo({props:{anchor:"transformers.ViltConfig.example",$$slots:{default:[Qd]},$$scope:{ctx:V}}}),ut=new H({}),gt=new E({props:{name:"class transformers.ViltFeatureExtractor",anchor:"transformers.ViltFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"size_divisor",val:" = 32"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input based on <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViltFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Resize the shorter side of the input to the given size. Should be an integer. The longer side will be
limited to under int((1333 / 800) * size) while preserving the aspect ratio. Only has an effect if
<code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViltFeatureExtractor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size by which to make sure both the height and width can be divided.`,name:"size_divisor"},{anchor:"transformers.ViltFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.Resampling.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.Resampling.NEAREST</code>,
<code>PIL.Image.Resampling.BOX</code>, <code>PIL.Image.Resampling.BILINEAR</code>, <code>PIL.Image.Resampling.HAMMING</code>,
<code>PIL.Image.Resampling.BICUBIC</code> or <code>PIL.Image.Resampling.LANCZOS</code>. Only has an effect if <code>do_resize</code> is set
to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViltFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViltFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViltFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/feature_extraction_vilt.py#L42"}}),vt=new E({props:{name:"__call__",anchor:"transformers.ViltFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"pad_and_return_pixel_mask",val:": typing.Optional[bool] = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViltFeatureExtractor.__call__.pad_and_return_pixel_mask",description:`<strong>pad_and_return_pixel_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to pad images up to the largest image in a batch and create a pixel mask.</p>
<p>If left to the default, will return a pixel mask that is:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>`,name:"pad_and_return_pixel_mask"},{anchor:"transformers.ViltFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/feature_extraction_vilt.py#L184",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>pixel_mask</strong> \u2014 Pixel mask to be fed to a model (when <code>return_pixel_mask=True</code> or if <em>\u201Cpixel_mask\u201D</em> is
in <code>self.model_input_names</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),$e=new Gt({props:{warning:!0,$$slots:{default:[Ud]},$$scope:{ctx:V}}}),bt=new H({}),Tt=new E({props:{name:"class transformers.ViltProcessor",anchor:"transformers.ViltProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.ViltProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>ViltFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.ViltProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/processing_vilt.py#L26"}}),wt=new E({props:{name:"__call__",anchor:"transformers.ViltProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/processing_vilt.py#L46"}}),xt=new H({}),yt=new E({props:{name:"class transformers.ViltModel",anchor:"transformers.ViltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ViltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L727"}}),Vt=new E({props:{name:"forward",anchor:"transformers.ViltModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_token_type_idx",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L755",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new Gt({props:{$$slots:{default:[Hd]},$$scope:{ctx:V}}}),je=new Lo({props:{anchor:"transformers.ViltModel.forward.example",$$slots:{default:[Kd]},$$scope:{ctx:V}}}),Ft=new H({}),Et=new E({props:{name:"class transformers.ViltForMaskedLM",anchor:"transformers.ViltForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L892"}}),Pt=new E({props:{name:"forward",anchor:"transformers.ViltForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForMaskedLM.forward.labels",description:`<strong>labels</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <em>[-100, 0, &#x2026;,
config.vocab_size]</em> (see <em>input_ids</em> docstring) Tokens with indices set to <em>-100</em> are ignored (masked), the
loss is only computed for the tokens with labels in <em>[0, &#x2026;, config.vocab_size]</em>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L908",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new Gt({props:{$$slots:{default:[Gd]},$$scope:{ctx:V}}}),Ie=new Lo({props:{anchor:"transformers.ViltForMaskedLM.forward.example",$$slots:{default:[Jd]},$$scope:{ctx:V}}}),jt=new H({}),zt=new E({props:{name:"class transformers.ViltForQuestionAnswering",anchor:"transformers.ViltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1064"}}),It=new E({props:{name:"forward",anchor:"transformers.ViltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the visual question answering loss. This tensor must be either a one-hot encoding of
all answers that are applicable for a given example in the batch, or a soft encoding indicating which
answers are applicable, where 1.0 is the highest score.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1082",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Gt({props:{$$slots:{default:[Xd]},$$scope:{ctx:V}}}),qe=new Lo({props:{anchor:"transformers.ViltForQuestionAnswering.forward.example",$$slots:{default:[Zd]},$$scope:{ctx:V}}}),At=new H({}),Ct=new E({props:{name:"class transformers.ViltForImagesAndTextClassification",anchor:"transformers.ViltForImagesAndTextClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_images, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1274"}}),qt=new E({props:{name:"forward",anchor:"transformers.ViltForImagesAndTextClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Binary classification labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1293",returnDescription:`
<p>A <code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig"
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
`}}),Ne=new Gt({props:{$$slots:{default:[Yd]},$$scope:{ctx:V}}}),Se=new Lo({props:{anchor:"transformers.ViltForImagesAndTextClassification.forward.example",$$slots:{default:[ec]},$$scope:{ctx:V}}}),Ot=new H({}),Nt=new E({props:{name:"class transformers.ViltForImageAndTextRetrieval",anchor:"transformers.ViltForImageAndTextRetrieval",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1175"}}),Dt=new E({props:{name:"forward",anchor:"transformers.ViltForImageAndTextRetrieval.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels are currently not supported.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new Gt({props:{$$slots:{default:[tc]},$$scope:{ctx:V}}}),Be=new Lo({props:{anchor:"transformers.ViltForImageAndTextRetrieval.forward.example",$$slots:{default:[oc]},$$scope:{ctx:V}}}),Rt=new H({}),Bt=new E({props:{name:"class transformers.ViltForTokenClassification",anchor:"transformers.ViltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1414"}}),Qt=new E({props:{name:"forward",anchor:"transformers.ViltForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForTokenClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, text_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vilt/modeling_vilt.py#L1430",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new Gt({props:{$$slots:{default:[nc]},$$scope:{ctx:V}}}),{c(){d=n("meta"),b=c(),g=n("h1"),u=n("a"),v=n("span"),T(l.$$.fragment),f=c(),F=n("span"),Ns=r("ViLT"),Wn=c(),Z=n("h2"),ve=n("a"),Co=n("span"),T(rt.$$.fragment),Ss=c(),qo=n("span"),Ds=r("Overview"),Qn=c(),be=n("p"),Rs=r("The ViLT model was proposed in "),it=n("a"),Bs=r("ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),Ws=r(`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Un=c(),Jt=n("p"),Qs=r("The abstract from the paper is the following:"),Hn=c(),Xt=n("p"),Oo=n("em"),Us=r(`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),Kn=c(),Zt=n("p"),Hs=r("Tips:"),Gn=c(),q=n("ul"),lt=n("li"),Ks=r("The quickest way to get started with ViLT is by checking the "),dt=n("a"),Gs=r("example notebooks"),Js=r(`
(which showcase both inference and fine-tuning on custom data).`),Xs=c(),B=n("li"),Zs=r("ViLT is a model that takes both "),No=n("code"),Ys=r("pixel_values"),ea=r(" and "),So=n("code"),ta=r("input_ids"),oa=r(" as input. One can use "),Yt=n("a"),na=r("ViltProcessor"),sa=r(` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),aa=c(),Y=n("li"),ra=r(`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),Do=n("code"),ia=r("pixel_mask"),la=r(` that indicates
which pixel values are real and which are padding. `),eo=n("a"),da=r("ViltProcessor"),ca=r(" automatically creates this for you."),pa=c(),Ro=n("li"),ma=r(`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),Jn=c(),Te=n("img"),Xn=c(),ke=n("small"),ha=r("ViLT architecture. Taken from the "),to=n("a"),fa=r("original paper"),ua=r("."),Zn=c(),K=n("p"),ga=r("This model was contributed by "),ct=n("a"),_a=r("nielsr"),va=r(". The original code can be found "),pt=n("a"),ba=r("here"),Ta=r("."),Yn=c(),oo=n("p"),ka=r("Tips:"),es=c(),no=n("ul"),Bo=n("li"),wa=r("The PyTorch version of this model is only available in torch 1.10 and higher."),ts=c(),ee=n("h2"),we=n("a"),Wo=n("span"),T(mt.$$.fragment),xa=c(),Qo=n("span"),ya=r("ViltConfig"),os=c(),P=n("div"),T(ht.$$.fragment),$a=c(),te=n("p"),Va=r("This is the configuration class to store the configuration of a "),Uo=n("code"),Fa=r("ViLTModel"),Ea=r(`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),ft=n("a"),Ma=r("dandelin/vilt-b32-mlm"),Pa=r(" architecture."),ja=c(),oe=n("p"),za=r("Configuration objects inherit from "),so=n("a"),La=r("PretrainedConfig"),Ia=r(` and can be used to control the model outputs. Read the
documentation from `),ao=n("a"),Aa=r("PretrainedConfig"),Ca=r(" for more information."),qa=c(),T(xe.$$.fragment),ns=c(),ne=n("h2"),ye=n("a"),Ho=n("span"),T(ut.$$.fragment),Oa=c(),Ko=n("span"),Na=r("ViltFeatureExtractor"),ss=c(),j=n("div"),T(gt.$$.fragment),Sa=c(),Go=n("p"),Da=r("Constructs a ViLT feature extractor."),Ra=c(),_t=n("p"),Ba=r("This feature extractor inherits from "),ro=n("a"),Wa=r("FeatureExtractionMixin"),Qa=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ua=c(),G=n("div"),T(vt.$$.fragment),Ha=c(),Jo=n("p"),Ka=r("Main method to prepare for the model one or several image(s)."),Ga=c(),T($e.$$.fragment),as=c(),se=n("h2"),Ve=n("a"),Xo=n("span"),T(bt.$$.fragment),Ja=c(),Zo=n("span"),Xa=r("ViltProcessor"),rs=c(),z=n("div"),T(Tt.$$.fragment),Za=c(),Yo=n("p"),Ya=r("Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),er=c(),M=n("p"),io=n("a"),tr=r("ViltProcessor"),or=r(" offers all the functionalities of "),lo=n("a"),nr=r("ViltFeatureExtractor"),sr=r(" and "),co=n("a"),ar=r("BertTokenizerFast"),rr=r(`. See the
docstring of `),kt=n("a"),en=n("strong"),ir=r("call"),lr=r("()"),dr=r(" and "),tn=n("code"),cr=r("decode()"),pr=r(" for more information."),mr=c(),J=n("div"),T(wt.$$.fragment),hr=c(),ae=n("p"),fr=r("This method uses "),Fe=n("a"),ur=r("ViltFeatureExtractor."),on=n("strong"),gr=r("call"),_r=r("()"),vr=r(` method to prepare image(s) for the model, and
`),Ee=n("a"),br=r("BertTokenizerFast."),nn=n("strong"),Tr=r("call"),kr=r("()"),wr=r(" to prepare text for the model."),xr=c(),sn=n("p"),yr=r("Please refer to the docstring of the above two methods for more information."),is=c(),re=n("h2"),Me=n("a"),an=n("span"),T(xt.$$.fragment),$r=c(),rn=n("span"),Vr=r("ViltModel"),ls=c(),W=n("div"),T(yt.$$.fragment),Fr=c(),$t=n("p"),Er=r(`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ln=n("code"),Mr=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Pr=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jr=c(),O=n("div"),T(Vt.$$.fragment),zr=c(),ie=n("p"),Lr=r("The "),po=n("a"),Ir=r("ViltModel"),Ar=r(" forward method, overrides the "),dn=n("code"),Cr=r("__call__"),qr=r(" special method."),Or=c(),T(Pe.$$.fragment),Nr=c(),T(je.$$.fragment),ds=c(),le=n("h2"),ze=n("a"),cn=n("span"),T(Ft.$$.fragment),Sr=c(),pn=n("span"),Dr=r("ViltForMaskedLM"),cs=c(),L=n("div"),T(Et.$$.fragment),Rr=c(),mn=n("p"),Br=r("ViLT Model with a language modeling head on top as done during pretraining."),Wr=c(),Mt=n("p"),Qr=r("This model is a PyTorch "),hn=n("code"),Ur=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Hr=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kr=c(),N=n("div"),T(Pt.$$.fragment),Gr=c(),de=n("p"),Jr=r("The "),mo=n("a"),Xr=r("ViltForMaskedLM"),Zr=r(" forward method, overrides the "),fn=n("code"),Yr=r("__call__"),ei=r(" special method."),ti=c(),T(Le.$$.fragment),oi=c(),T(Ie.$$.fragment),ps=c(),ce=n("h2"),Ae=n("a"),un=n("span"),T(jt.$$.fragment),ni=c(),gn=n("span"),si=r("ViltForQuestionAnswering"),ms=c(),I=n("div"),T(zt.$$.fragment),ai=c(),_n=n("p"),ri=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),ii=c(),Lt=n("p"),li=r("This model is a PyTorch "),vn=n("code"),di=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ci=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi=c(),S=n("div"),T(It.$$.fragment),mi=c(),pe=n("p"),hi=r("The "),ho=n("a"),fi=r("ViltForQuestionAnswering"),ui=r(" forward method, overrides the "),bn=n("code"),gi=r("__call__"),_i=r(" special method."),vi=c(),T(Ce.$$.fragment),bi=c(),T(qe.$$.fragment),hs=c(),me=n("h2"),Oe=n("a"),Tn=n("span"),T(At.$$.fragment),Ti=c(),kn=n("span"),ki=r("ViltForImagesAndTextClassification"),fs=c(),Q=n("div"),T(Ct.$$.fragment),wi=c(),wn=n("p"),xi=r("Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),yi=c(),D=n("div"),T(qt.$$.fragment),$i=c(),he=n("p"),Vi=r("The "),fo=n("a"),Fi=r("ViltForImagesAndTextClassification"),Ei=r(" forward method, overrides the "),xn=n("code"),Mi=r("__call__"),Pi=r(" special method."),ji=c(),T(Ne.$$.fragment),zi=c(),T(Se.$$.fragment),us=c(),fe=n("h2"),De=n("a"),yn=n("span"),T(Ot.$$.fragment),Li=c(),$n=n("span"),Ii=r("ViltForImageAndTextRetrieval"),gs=c(),A=n("div"),T(Nt.$$.fragment),Ai=c(),Vn=n("p"),Ci=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),qi=c(),St=n("p"),Oi=r("This model is a PyTorch "),Fn=n("code"),Ni=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Si=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Di=c(),R=n("div"),T(Dt.$$.fragment),Ri=c(),ue=n("p"),Bi=r("The "),uo=n("a"),Wi=r("ViltForImageAndTextRetrieval"),Qi=r(" forward method, overrides the "),En=n("code"),Ui=r("__call__"),Hi=r(" special method."),Ki=c(),T(Re.$$.fragment),Gi=c(),T(Be.$$.fragment),_s=c(),ge=n("h2"),We=n("a"),Mn=n("span"),T(Rt.$$.fragment),Ji=c(),Pn=n("span"),Xi=r("ViltForTokenClassification"),vs=c(),C=n("div"),T(Bt.$$.fragment),Zi=c(),jn=n("p"),Yi=r(`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),el=c(),Wt=n("p"),tl=r("This model is a PyTorch "),zn=n("code"),ol=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),nl=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sl=c(),X=n("div"),T(Qt.$$.fragment),al=c(),_e=n("p"),rl=r("The "),go=n("a"),il=r("ViltForTokenClassification"),ll=r(" forward method, overrides the "),Ln=n("code"),dl=r("__call__"),cl=r(" special method."),pl=c(),T(Qe.$$.fragment),this.h()},l(t){const h=Rd('[data-svelte="svelte-1phssyn"]',document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(o),b=p(t),g=s(t,"H1",{class:!0});var Ut=a(g);u=s(Ut,"A",{id:!0,class:!0,href:!0});var In=a(u);v=s(In,"SPAN",{});var An=a(v);k(l.$$.fragment,An),An.forEach(o),In.forEach(o),f=p(Ut),F=s(Ut,"SPAN",{});var Cn=a(F);Ns=i(Cn,"ViLT"),Cn.forEach(o),Ut.forEach(o),Wn=p(t),Z=s(t,"H2",{class:!0});var Ht=a(Z);ve=s(Ht,"A",{id:!0,class:!0,href:!0});var qn=a(ve);Co=s(qn,"SPAN",{});var On=a(Co);k(rt.$$.fragment,On),On.forEach(o),qn.forEach(o),Ss=p(Ht),qo=s(Ht,"SPAN",{});var Nn=a(qo);Ds=i(Nn,"Overview"),Nn.forEach(o),Ht.forEach(o),Qn=p(t),be=s(t,"P",{});var Kt=a(be);Rs=i(Kt,"The ViLT model was proposed in "),it=s(Kt,"A",{href:!0,rel:!0});var Sn=a(it);Bs=i(Sn,"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),Sn.forEach(o),Ws=i(Kt,`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Kt.forEach(o),Un=p(t),Jt=s(t,"P",{});var Dn=a(Jt);Qs=i(Dn,"The abstract from the paper is the following:"),Dn.forEach(o),Hn=p(t),Xt=s(t,"P",{});var Rn=a(Xt);Oo=s(Rn,"EM",{});var Bn=a(Oo);Us=i(Bn,`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),Bn.forEach(o),Rn.forEach(o),Kn=p(t),Zt=s(t,"P",{});var fl=a(Zt);Hs=i(fl,"Tips:"),fl.forEach(o),Gn=p(t),q=s(t,"UL",{});var Ue=a(q);lt=s(Ue,"LI",{});var Ts=a(lt);Ks=i(Ts,"The quickest way to get started with ViLT is by checking the "),dt=s(Ts,"A",{href:!0,rel:!0});var ul=a(dt);Gs=i(ul,"example notebooks"),ul.forEach(o),Js=i(Ts,`
(which showcase both inference and fine-tuning on custom data).`),Ts.forEach(o),Xs=p(Ue),B=s(Ue,"LI",{});var He=a(B);Zs=i(He,"ViLT is a model that takes both "),No=s(He,"CODE",{});var gl=a(No);Ys=i(gl,"pixel_values"),gl.forEach(o),ea=i(He," and "),So=s(He,"CODE",{});var _l=a(So);ta=i(_l,"input_ids"),_l.forEach(o),oa=i(He," as input. One can use "),Yt=s(He,"A",{href:!0});var vl=a(Yt);na=i(vl,"ViltProcessor"),vl.forEach(o),sa=i(He,` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),He.forEach(o),aa=p(Ue),Y=s(Ue,"LI",{});var _o=a(Y);ra=i(_o,`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),Do=s(_o,"CODE",{});var bl=a(Do);ia=i(bl,"pixel_mask"),bl.forEach(o),la=i(_o,` that indicates
which pixel values are real and which are padding. `),eo=s(_o,"A",{href:!0});var Tl=a(eo);da=i(Tl,"ViltProcessor"),Tl.forEach(o),ca=i(_o," automatically creates this for you."),_o.forEach(o),pa=p(Ue),Ro=s(Ue,"LI",{});var kl=a(Ro);ma=i(kl,`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),kl.forEach(o),Ue.forEach(o),Jn=p(t),Te=s(t,"IMG",{src:!0,alt:!0,width:!0}),Xn=p(t),ke=s(t,"SMALL",{});var ks=a(ke);ha=i(ks,"ViLT architecture. Taken from the "),to=s(ks,"A",{href:!0});var wl=a(to);fa=i(wl,"original paper"),wl.forEach(o),ua=i(ks,"."),ks.forEach(o),Zn=p(t),K=s(t,"P",{});var vo=a(K);ga=i(vo,"This model was contributed by "),ct=s(vo,"A",{href:!0,rel:!0});var xl=a(ct);_a=i(xl,"nielsr"),xl.forEach(o),va=i(vo,". The original code can be found "),pt=s(vo,"A",{href:!0,rel:!0});var yl=a(pt);ba=i(yl,"here"),yl.forEach(o),Ta=i(vo,"."),vo.forEach(o),Yn=p(t),oo=s(t,"P",{});var $l=a(oo);ka=i($l,"Tips:"),$l.forEach(o),es=p(t),no=s(t,"UL",{});var Vl=a(no);Bo=s(Vl,"LI",{});var Fl=a(Bo);wa=i(Fl,"The PyTorch version of this model is only available in torch 1.10 and higher."),Fl.forEach(o),Vl.forEach(o),ts=p(t),ee=s(t,"H2",{class:!0});var ws=a(ee);we=s(ws,"A",{id:!0,class:!0,href:!0});var El=a(we);Wo=s(El,"SPAN",{});var Ml=a(Wo);k(mt.$$.fragment,Ml),Ml.forEach(o),El.forEach(o),xa=p(ws),Qo=s(ws,"SPAN",{});var Pl=a(Qo);ya=i(Pl,"ViltConfig"),Pl.forEach(o),ws.forEach(o),os=p(t),P=s(t,"DIV",{class:!0});var Ke=a(P);k(ht.$$.fragment,Ke),$a=p(Ke),te=s(Ke,"P",{});var bo=a(te);Va=i(bo,"This is the configuration class to store the configuration of a "),Uo=s(bo,"CODE",{});var jl=a(Uo);Fa=i(jl,"ViLTModel"),jl.forEach(o),Ea=i(bo,`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),ft=s(bo,"A",{href:!0,rel:!0});var zl=a(ft);Ma=i(zl,"dandelin/vilt-b32-mlm"),zl.forEach(o),Pa=i(bo," architecture."),bo.forEach(o),ja=p(Ke),oe=s(Ke,"P",{});var To=a(oe);za=i(To,"Configuration objects inherit from "),so=s(To,"A",{href:!0});var Ll=a(so);La=i(Ll,"PretrainedConfig"),Ll.forEach(o),Ia=i(To,` and can be used to control the model outputs. Read the
documentation from `),ao=s(To,"A",{href:!0});var Il=a(ao);Aa=i(Il,"PretrainedConfig"),Il.forEach(o),Ca=i(To," for more information."),To.forEach(o),qa=p(Ke),k(xe.$$.fragment,Ke),Ke.forEach(o),ns=p(t),ne=s(t,"H2",{class:!0});var xs=a(ne);ye=s(xs,"A",{id:!0,class:!0,href:!0});var Al=a(ye);Ho=s(Al,"SPAN",{});var Cl=a(Ho);k(ut.$$.fragment,Cl),Cl.forEach(o),Al.forEach(o),Oa=p(xs),Ko=s(xs,"SPAN",{});var ql=a(Ko);Na=i(ql,"ViltFeatureExtractor"),ql.forEach(o),xs.forEach(o),ss=p(t),j=s(t,"DIV",{class:!0});var Ge=a(j);k(gt.$$.fragment,Ge),Sa=p(Ge),Go=s(Ge,"P",{});var Ol=a(Go);Da=i(Ol,"Constructs a ViLT feature extractor."),Ol.forEach(o),Ra=p(Ge),_t=s(Ge,"P",{});var ys=a(_t);Ba=i(ys,"This feature extractor inherits from "),ro=s(ys,"A",{href:!0});var Nl=a(ro);Wa=i(Nl,"FeatureExtractionMixin"),Nl.forEach(o),Qa=i(ys,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ys.forEach(o),Ua=p(Ge),G=s(Ge,"DIV",{class:!0});var ko=a(G);k(vt.$$.fragment,ko),Ha=p(ko),Jo=s(ko,"P",{});var Sl=a(Jo);Ka=i(Sl,"Main method to prepare for the model one or several image(s)."),Sl.forEach(o),Ga=p(ko),k($e.$$.fragment,ko),ko.forEach(o),Ge.forEach(o),as=p(t),se=s(t,"H2",{class:!0});var $s=a(se);Ve=s($s,"A",{id:!0,class:!0,href:!0});var Dl=a(Ve);Xo=s(Dl,"SPAN",{});var Rl=a(Xo);k(bt.$$.fragment,Rl),Rl.forEach(o),Dl.forEach(o),Ja=p($s),Zo=s($s,"SPAN",{});var Bl=a(Zo);Xa=i(Bl,"ViltProcessor"),Bl.forEach(o),$s.forEach(o),rs=p(t),z=s(t,"DIV",{class:!0});var Je=a(z);k(Tt.$$.fragment,Je),Za=p(Je),Yo=s(Je,"P",{});var Wl=a(Yo);Ya=i(Wl,"Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Wl.forEach(o),er=p(Je),M=s(Je,"P",{});var U=a(M);io=s(U,"A",{href:!0});var Ql=a(io);tr=i(Ql,"ViltProcessor"),Ql.forEach(o),or=i(U," offers all the functionalities of "),lo=s(U,"A",{href:!0});var Ul=a(lo);nr=i(Ul,"ViltFeatureExtractor"),Ul.forEach(o),sr=i(U," and "),co=s(U,"A",{href:!0});var Hl=a(co);ar=i(Hl,"BertTokenizerFast"),Hl.forEach(o),rr=i(U,`. See the
docstring of `),kt=s(U,"A",{href:!0});var ml=a(kt);en=s(ml,"STRONG",{});var Kl=a(en);ir=i(Kl,"call"),Kl.forEach(o),lr=i(ml,"()"),ml.forEach(o),dr=i(U," and "),tn=s(U,"CODE",{});var Gl=a(tn);cr=i(Gl,"decode()"),Gl.forEach(o),pr=i(U," for more information."),U.forEach(o),mr=p(Je),J=s(Je,"DIV",{class:!0});var wo=a(J);k(wt.$$.fragment,wo),hr=p(wo),ae=s(wo,"P",{});var xo=a(ae);fr=i(xo,"This method uses "),Fe=s(xo,"A",{href:!0});var Vs=a(Fe);ur=i(Vs,"ViltFeatureExtractor."),on=s(Vs,"STRONG",{});var Jl=a(on);gr=i(Jl,"call"),Jl.forEach(o),_r=i(Vs,"()"),Vs.forEach(o),vr=i(xo,` method to prepare image(s) for the model, and
`),Ee=s(xo,"A",{href:!0});var Fs=a(Ee);br=i(Fs,"BertTokenizerFast."),nn=s(Fs,"STRONG",{});var Xl=a(nn);Tr=i(Xl,"call"),Xl.forEach(o),kr=i(Fs,"()"),Fs.forEach(o),wr=i(xo," to prepare text for the model."),xo.forEach(o),xr=p(wo),sn=s(wo,"P",{});var Zl=a(sn);yr=i(Zl,"Please refer to the docstring of the above two methods for more information."),Zl.forEach(o),wo.forEach(o),Je.forEach(o),is=p(t),re=s(t,"H2",{class:!0});var Es=a(re);Me=s(Es,"A",{id:!0,class:!0,href:!0});var Yl=a(Me);an=s(Yl,"SPAN",{});var ed=a(an);k(xt.$$.fragment,ed),ed.forEach(o),Yl.forEach(o),$r=p(Es),rn=s(Es,"SPAN",{});var td=a(rn);Vr=i(td,"ViltModel"),td.forEach(o),Es.forEach(o),ls=p(t),W=s(t,"DIV",{class:!0});var yo=a(W);k(yt.$$.fragment,yo),Fr=p(yo),$t=s(yo,"P",{});var Ms=a($t);Er=i(Ms,`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ln=s(Ms,"CODE",{});var od=a(ln);Mr=i(od,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),od.forEach(o),Pr=i(Ms,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ms.forEach(o),jr=p(yo),O=s(yo,"DIV",{class:!0});var Xe=a(O);k(Vt.$$.fragment,Xe),zr=p(Xe),ie=s(Xe,"P",{});var $o=a(ie);Lr=i($o,"The "),po=s($o,"A",{href:!0});var nd=a(po);Ir=i(nd,"ViltModel"),nd.forEach(o),Ar=i($o," forward method, overrides the "),dn=s($o,"CODE",{});var sd=a(dn);Cr=i(sd,"__call__"),sd.forEach(o),qr=i($o," special method."),$o.forEach(o),Or=p(Xe),k(Pe.$$.fragment,Xe),Nr=p(Xe),k(je.$$.fragment,Xe),Xe.forEach(o),yo.forEach(o),ds=p(t),le=s(t,"H2",{class:!0});var Ps=a(le);ze=s(Ps,"A",{id:!0,class:!0,href:!0});var ad=a(ze);cn=s(ad,"SPAN",{});var rd=a(cn);k(Ft.$$.fragment,rd),rd.forEach(o),ad.forEach(o),Sr=p(Ps),pn=s(Ps,"SPAN",{});var id=a(pn);Dr=i(id,"ViltForMaskedLM"),id.forEach(o),Ps.forEach(o),cs=p(t),L=s(t,"DIV",{class:!0});var Ze=a(L);k(Et.$$.fragment,Ze),Rr=p(Ze),mn=s(Ze,"P",{});var ld=a(mn);Br=i(ld,"ViLT Model with a language modeling head on top as done during pretraining."),ld.forEach(o),Wr=p(Ze),Mt=s(Ze,"P",{});var js=a(Mt);Qr=i(js,"This model is a PyTorch "),hn=s(js,"CODE",{});var dd=a(hn);Ur=i(dd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),dd.forEach(o),Hr=i(js,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),js.forEach(o),Kr=p(Ze),N=s(Ze,"DIV",{class:!0});var Ye=a(N);k(Pt.$$.fragment,Ye),Gr=p(Ye),de=s(Ye,"P",{});var Vo=a(de);Jr=i(Vo,"The "),mo=s(Vo,"A",{href:!0});var cd=a(mo);Xr=i(cd,"ViltForMaskedLM"),cd.forEach(o),Zr=i(Vo," forward method, overrides the "),fn=s(Vo,"CODE",{});var pd=a(fn);Yr=i(pd,"__call__"),pd.forEach(o),ei=i(Vo," special method."),Vo.forEach(o),ti=p(Ye),k(Le.$$.fragment,Ye),oi=p(Ye),k(Ie.$$.fragment,Ye),Ye.forEach(o),Ze.forEach(o),ps=p(t),ce=s(t,"H2",{class:!0});var zs=a(ce);Ae=s(zs,"A",{id:!0,class:!0,href:!0});var md=a(Ae);un=s(md,"SPAN",{});var hd=a(un);k(jt.$$.fragment,hd),hd.forEach(o),md.forEach(o),ni=p(zs),gn=s(zs,"SPAN",{});var fd=a(gn);si=i(fd,"ViltForQuestionAnswering"),fd.forEach(o),zs.forEach(o),ms=p(t),I=s(t,"DIV",{class:!0});var et=a(I);k(zt.$$.fragment,et),ai=p(et),_n=s(et,"P",{});var ud=a(_n);ri=i(ud,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),ud.forEach(o),ii=p(et),Lt=s(et,"P",{});var Ls=a(Lt);li=i(Ls,"This model is a PyTorch "),vn=s(Ls,"CODE",{});var gd=a(vn);di=i(gd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),gd.forEach(o),ci=i(Ls,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls.forEach(o),pi=p(et),S=s(et,"DIV",{class:!0});var tt=a(S);k(It.$$.fragment,tt),mi=p(tt),pe=s(tt,"P",{});var Fo=a(pe);hi=i(Fo,"The "),ho=s(Fo,"A",{href:!0});var _d=a(ho);fi=i(_d,"ViltForQuestionAnswering"),_d.forEach(o),ui=i(Fo," forward method, overrides the "),bn=s(Fo,"CODE",{});var vd=a(bn);gi=i(vd,"__call__"),vd.forEach(o),_i=i(Fo," special method."),Fo.forEach(o),vi=p(tt),k(Ce.$$.fragment,tt),bi=p(tt),k(qe.$$.fragment,tt),tt.forEach(o),et.forEach(o),hs=p(t),me=s(t,"H2",{class:!0});var Is=a(me);Oe=s(Is,"A",{id:!0,class:!0,href:!0});var bd=a(Oe);Tn=s(bd,"SPAN",{});var Td=a(Tn);k(At.$$.fragment,Td),Td.forEach(o),bd.forEach(o),Ti=p(Is),kn=s(Is,"SPAN",{});var kd=a(kn);ki=i(kd,"ViltForImagesAndTextClassification"),kd.forEach(o),Is.forEach(o),fs=p(t),Q=s(t,"DIV",{class:!0});var Eo=a(Q);k(Ct.$$.fragment,Eo),wi=p(Eo),wn=s(Eo,"P",{});var wd=a(wn);xi=i(wd,"Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),wd.forEach(o),yi=p(Eo),D=s(Eo,"DIV",{class:!0});var ot=a(D);k(qt.$$.fragment,ot),$i=p(ot),he=s(ot,"P",{});var Mo=a(he);Vi=i(Mo,"The "),fo=s(Mo,"A",{href:!0});var xd=a(fo);Fi=i(xd,"ViltForImagesAndTextClassification"),xd.forEach(o),Ei=i(Mo," forward method, overrides the "),xn=s(Mo,"CODE",{});var yd=a(xn);Mi=i(yd,"__call__"),yd.forEach(o),Pi=i(Mo," special method."),Mo.forEach(o),ji=p(ot),k(Ne.$$.fragment,ot),zi=p(ot),k(Se.$$.fragment,ot),ot.forEach(o),Eo.forEach(o),us=p(t),fe=s(t,"H2",{class:!0});var As=a(fe);De=s(As,"A",{id:!0,class:!0,href:!0});var $d=a(De);yn=s($d,"SPAN",{});var Vd=a(yn);k(Ot.$$.fragment,Vd),Vd.forEach(o),$d.forEach(o),Li=p(As),$n=s(As,"SPAN",{});var Fd=a($n);Ii=i(Fd,"ViltForImageAndTextRetrieval"),Fd.forEach(o),As.forEach(o),gs=p(t),A=s(t,"DIV",{class:!0});var nt=a(A);k(Nt.$$.fragment,nt),Ai=p(nt),Vn=s(nt,"P",{});var Ed=a(Vn);Ci=i(Ed,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),Ed.forEach(o),qi=p(nt),St=s(nt,"P",{});var Cs=a(St);Oi=i(Cs,"This model is a PyTorch "),Fn=s(Cs,"CODE",{});var Md=a(Fn);Ni=i(Md,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Md.forEach(o),Si=i(Cs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cs.forEach(o),Di=p(nt),R=s(nt,"DIV",{class:!0});var st=a(R);k(Dt.$$.fragment,st),Ri=p(st),ue=s(st,"P",{});var Po=a(ue);Bi=i(Po,"The "),uo=s(Po,"A",{href:!0});var Pd=a(uo);Wi=i(Pd,"ViltForImageAndTextRetrieval"),Pd.forEach(o),Qi=i(Po," forward method, overrides the "),En=s(Po,"CODE",{});var jd=a(En);Ui=i(jd,"__call__"),jd.forEach(o),Hi=i(Po," special method."),Po.forEach(o),Ki=p(st),k(Re.$$.fragment,st),Gi=p(st),k(Be.$$.fragment,st),st.forEach(o),nt.forEach(o),_s=p(t),ge=s(t,"H2",{class:!0});var qs=a(ge);We=s(qs,"A",{id:!0,class:!0,href:!0});var zd=a(We);Mn=s(zd,"SPAN",{});var Ld=a(Mn);k(Rt.$$.fragment,Ld),Ld.forEach(o),zd.forEach(o),Ji=p(qs),Pn=s(qs,"SPAN",{});var Id=a(Pn);Xi=i(Id,"ViltForTokenClassification"),Id.forEach(o),qs.forEach(o),vs=p(t),C=s(t,"DIV",{class:!0});var at=a(C);k(Bt.$$.fragment,at),Zi=p(at),jn=s(at,"P",{});var Ad=a(jn);Yi=i(Ad,`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),Ad.forEach(o),el=p(at),Wt=s(at,"P",{});var Os=a(Wt);tl=i(Os,"This model is a PyTorch "),zn=s(Os,"CODE",{});var Cd=a(zn);ol=i(Cd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Cd.forEach(o),nl=i(Os,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(o),sl=p(at),X=s(at,"DIV",{class:!0});var jo=a(X);k(Qt.$$.fragment,jo),al=p(jo),_e=s(jo,"P",{});var zo=a(_e);rl=i(zo,"The "),go=s(zo,"A",{href:!0});var qd=a(go);il=i(qd,"ViltForTokenClassification"),qd.forEach(o),ll=i(zo," forward method, overrides the "),Ln=s(zo,"CODE",{});var Od=a(Ln);dl=i(Od,"__call__"),Od.forEach(o),cl=i(zo," special method."),zo.forEach(o),pl=p(jo),k(Qe.$$.fragment,jo),jo.forEach(o),at.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(ac)),m(u,"id","vilt"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#vilt"),m(g,"class","relative group"),m(ve,"id","overview"),m(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ve,"href","#overview"),m(Z,"class","relative group"),m(it,"href","https://arxiv.org/abs/2102.03334"),m(it,"rel","nofollow"),m(dt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ViLT"),m(dt,"rel","nofollow"),m(Yt,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltProcessor"),m(eo,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltProcessor"),Bd(Te.src,hl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vilt_architecture.jpg")||m(Te,"src",hl),m(Te,"alt","drawing"),m(Te,"width","600"),m(to,"href","https://arxiv.org/abs/2102.03334"),m(ct,"href","https://huggingface.co/nielsr"),m(ct,"rel","nofollow"),m(pt,"href","https://github.com/dandelin/ViLT"),m(pt,"rel","nofollow"),m(we,"id","transformers.ViltConfig"),m(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(we,"href","#transformers.ViltConfig"),m(ee,"class","relative group"),m(ft,"href","https://huggingface.co/dandelin/vilt-b32-mlm"),m(ft,"rel","nofollow"),m(so,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(ao,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ye,"id","transformers.ViltFeatureExtractor"),m(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ye,"href","#transformers.ViltFeatureExtractor"),m(ne,"class","relative group"),m(ro,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"id","transformers.ViltProcessor"),m(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ve,"href","#transformers.ViltProcessor"),m(se,"class","relative group"),m(io,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltProcessor"),m(lo,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor"),m(co,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizerFast"),m(kt,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltProcessor.__call__"),m(Fe,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__"),m(Ee,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Me,"id","transformers.ViltModel"),m(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Me,"href","#transformers.ViltModel"),m(re,"class","relative group"),m(po,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltModel"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ze,"id","transformers.ViltForMaskedLM"),m(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ze,"href","#transformers.ViltForMaskedLM"),m(le,"class","relative group"),m(mo,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltForMaskedLM"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"id","transformers.ViltForQuestionAnswering"),m(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ae,"href","#transformers.ViltForQuestionAnswering"),m(ce,"class","relative group"),m(ho,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltForQuestionAnswering"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"id","transformers.ViltForImagesAndTextClassification"),m(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oe,"href","#transformers.ViltForImagesAndTextClassification"),m(me,"class","relative group"),m(fo,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"id","transformers.ViltForImageAndTextRetrieval"),m(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(De,"href","#transformers.ViltForImageAndTextRetrieval"),m(fe,"class","relative group"),m(uo,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltForImageAndTextRetrieval"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.ViltForTokenClassification"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.ViltForTokenClassification"),m(ge,"class","relative group"),m(go,"href","/docs/transformers/v4.24.0/en/model_doc/vilt#transformers.ViltForTokenClassification"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,d),_(t,b,h),_(t,g,h),e(g,u),e(u,v),w(l,v,null),e(g,f),e(g,F),e(F,Ns),_(t,Wn,h),_(t,Z,h),e(Z,ve),e(ve,Co),w(rt,Co,null),e(Z,Ss),e(Z,qo),e(qo,Ds),_(t,Qn,h),_(t,be,h),e(be,Rs),e(be,it),e(it,Bs),e(be,Ws),_(t,Un,h),_(t,Jt,h),e(Jt,Qs),_(t,Hn,h),_(t,Xt,h),e(Xt,Oo),e(Oo,Us),_(t,Kn,h),_(t,Zt,h),e(Zt,Hs),_(t,Gn,h),_(t,q,h),e(q,lt),e(lt,Ks),e(lt,dt),e(dt,Gs),e(lt,Js),e(q,Xs),e(q,B),e(B,Zs),e(B,No),e(No,Ys),e(B,ea),e(B,So),e(So,ta),e(B,oa),e(B,Yt),e(Yt,na),e(B,sa),e(q,aa),e(q,Y),e(Y,ra),e(Y,Do),e(Do,ia),e(Y,la),e(Y,eo),e(eo,da),e(Y,ca),e(q,pa),e(q,Ro),e(Ro,ma),_(t,Jn,h),_(t,Te,h),_(t,Xn,h),_(t,ke,h),e(ke,ha),e(ke,to),e(to,fa),e(ke,ua),_(t,Zn,h),_(t,K,h),e(K,ga),e(K,ct),e(ct,_a),e(K,va),e(K,pt),e(pt,ba),e(K,Ta),_(t,Yn,h),_(t,oo,h),e(oo,ka),_(t,es,h),_(t,no,h),e(no,Bo),e(Bo,wa),_(t,ts,h),_(t,ee,h),e(ee,we),e(we,Wo),w(mt,Wo,null),e(ee,xa),e(ee,Qo),e(Qo,ya),_(t,os,h),_(t,P,h),w(ht,P,null),e(P,$a),e(P,te),e(te,Va),e(te,Uo),e(Uo,Fa),e(te,Ea),e(te,ft),e(ft,Ma),e(te,Pa),e(P,ja),e(P,oe),e(oe,za),e(oe,so),e(so,La),e(oe,Ia),e(oe,ao),e(ao,Aa),e(oe,Ca),e(P,qa),w(xe,P,null),_(t,ns,h),_(t,ne,h),e(ne,ye),e(ye,Ho),w(ut,Ho,null),e(ne,Oa),e(ne,Ko),e(Ko,Na),_(t,ss,h),_(t,j,h),w(gt,j,null),e(j,Sa),e(j,Go),e(Go,Da),e(j,Ra),e(j,_t),e(_t,Ba),e(_t,ro),e(ro,Wa),e(_t,Qa),e(j,Ua),e(j,G),w(vt,G,null),e(G,Ha),e(G,Jo),e(Jo,Ka),e(G,Ga),w($e,G,null),_(t,as,h),_(t,se,h),e(se,Ve),e(Ve,Xo),w(bt,Xo,null),e(se,Ja),e(se,Zo),e(Zo,Xa),_(t,rs,h),_(t,z,h),w(Tt,z,null),e(z,Za),e(z,Yo),e(Yo,Ya),e(z,er),e(z,M),e(M,io),e(io,tr),e(M,or),e(M,lo),e(lo,nr),e(M,sr),e(M,co),e(co,ar),e(M,rr),e(M,kt),e(kt,en),e(en,ir),e(kt,lr),e(M,dr),e(M,tn),e(tn,cr),e(M,pr),e(z,mr),e(z,J),w(wt,J,null),e(J,hr),e(J,ae),e(ae,fr),e(ae,Fe),e(Fe,ur),e(Fe,on),e(on,gr),e(Fe,_r),e(ae,vr),e(ae,Ee),e(Ee,br),e(Ee,nn),e(nn,Tr),e(Ee,kr),e(ae,wr),e(J,xr),e(J,sn),e(sn,yr),_(t,is,h),_(t,re,h),e(re,Me),e(Me,an),w(xt,an,null),e(re,$r),e(re,rn),e(rn,Vr),_(t,ls,h),_(t,W,h),w(yt,W,null),e(W,Fr),e(W,$t),e($t,Er),e($t,ln),e(ln,Mr),e($t,Pr),e(W,jr),e(W,O),w(Vt,O,null),e(O,zr),e(O,ie),e(ie,Lr),e(ie,po),e(po,Ir),e(ie,Ar),e(ie,dn),e(dn,Cr),e(ie,qr),e(O,Or),w(Pe,O,null),e(O,Nr),w(je,O,null),_(t,ds,h),_(t,le,h),e(le,ze),e(ze,cn),w(Ft,cn,null),e(le,Sr),e(le,pn),e(pn,Dr),_(t,cs,h),_(t,L,h),w(Et,L,null),e(L,Rr),e(L,mn),e(mn,Br),e(L,Wr),e(L,Mt),e(Mt,Qr),e(Mt,hn),e(hn,Ur),e(Mt,Hr),e(L,Kr),e(L,N),w(Pt,N,null),e(N,Gr),e(N,de),e(de,Jr),e(de,mo),e(mo,Xr),e(de,Zr),e(de,fn),e(fn,Yr),e(de,ei),e(N,ti),w(Le,N,null),e(N,oi),w(Ie,N,null),_(t,ps,h),_(t,ce,h),e(ce,Ae),e(Ae,un),w(jt,un,null),e(ce,ni),e(ce,gn),e(gn,si),_(t,ms,h),_(t,I,h),w(zt,I,null),e(I,ai),e(I,_n),e(_n,ri),e(I,ii),e(I,Lt),e(Lt,li),e(Lt,vn),e(vn,di),e(Lt,ci),e(I,pi),e(I,S),w(It,S,null),e(S,mi),e(S,pe),e(pe,hi),e(pe,ho),e(ho,fi),e(pe,ui),e(pe,bn),e(bn,gi),e(pe,_i),e(S,vi),w(Ce,S,null),e(S,bi),w(qe,S,null),_(t,hs,h),_(t,me,h),e(me,Oe),e(Oe,Tn),w(At,Tn,null),e(me,Ti),e(me,kn),e(kn,ki),_(t,fs,h),_(t,Q,h),w(Ct,Q,null),e(Q,wi),e(Q,wn),e(wn,xi),e(Q,yi),e(Q,D),w(qt,D,null),e(D,$i),e(D,he),e(he,Vi),e(he,fo),e(fo,Fi),e(he,Ei),e(he,xn),e(xn,Mi),e(he,Pi),e(D,ji),w(Ne,D,null),e(D,zi),w(Se,D,null),_(t,us,h),_(t,fe,h),e(fe,De),e(De,yn),w(Ot,yn,null),e(fe,Li),e(fe,$n),e($n,Ii),_(t,gs,h),_(t,A,h),w(Nt,A,null),e(A,Ai),e(A,Vn),e(Vn,Ci),e(A,qi),e(A,St),e(St,Oi),e(St,Fn),e(Fn,Ni),e(St,Si),e(A,Di),e(A,R),w(Dt,R,null),e(R,Ri),e(R,ue),e(ue,Bi),e(ue,uo),e(uo,Wi),e(ue,Qi),e(ue,En),e(En,Ui),e(ue,Hi),e(R,Ki),w(Re,R,null),e(R,Gi),w(Be,R,null),_(t,_s,h),_(t,ge,h),e(ge,We),e(We,Mn),w(Rt,Mn,null),e(ge,Ji),e(ge,Pn),e(Pn,Xi),_(t,vs,h),_(t,C,h),w(Bt,C,null),e(C,Zi),e(C,jn),e(jn,Yi),e(C,el),e(C,Wt),e(Wt,tl),e(Wt,zn),e(zn,ol),e(Wt,nl),e(C,sl),e(C,X),w(Qt,X,null),e(X,al),e(X,_e),e(_e,rl),e(_e,go),e(go,il),e(_e,ll),e(_e,Ln),e(Ln,dl),e(_e,cl),e(X,pl),w(Qe,X,null),bs=!0},p(t,[h]){const Ut={};h&2&&(Ut.$$scope={dirty:h,ctx:t}),xe.$set(Ut);const In={};h&2&&(In.$$scope={dirty:h,ctx:t}),$e.$set(In);const An={};h&2&&(An.$$scope={dirty:h,ctx:t}),Pe.$set(An);const Cn={};h&2&&(Cn.$$scope={dirty:h,ctx:t}),je.$set(Cn);const Ht={};h&2&&(Ht.$$scope={dirty:h,ctx:t}),Le.$set(Ht);const qn={};h&2&&(qn.$$scope={dirty:h,ctx:t}),Ie.$set(qn);const On={};h&2&&(On.$$scope={dirty:h,ctx:t}),Ce.$set(On);const Nn={};h&2&&(Nn.$$scope={dirty:h,ctx:t}),qe.$set(Nn);const Kt={};h&2&&(Kt.$$scope={dirty:h,ctx:t}),Ne.$set(Kt);const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:t}),Se.$set(Sn);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:t}),Re.$set(Dn);const Rn={};h&2&&(Rn.$$scope={dirty:h,ctx:t}),Be.$set(Rn);const Bn={};h&2&&(Bn.$$scope={dirty:h,ctx:t}),Qe.$set(Bn)},i(t){bs||(x(l.$$.fragment,t),x(rt.$$.fragment,t),x(mt.$$.fragment,t),x(ht.$$.fragment,t),x(xe.$$.fragment,t),x(ut.$$.fragment,t),x(gt.$$.fragment,t),x(vt.$$.fragment,t),x($e.$$.fragment,t),x(bt.$$.fragment,t),x(Tt.$$.fragment,t),x(wt.$$.fragment,t),x(xt.$$.fragment,t),x(yt.$$.fragment,t),x(Vt.$$.fragment,t),x(Pe.$$.fragment,t),x(je.$$.fragment,t),x(Ft.$$.fragment,t),x(Et.$$.fragment,t),x(Pt.$$.fragment,t),x(Le.$$.fragment,t),x(Ie.$$.fragment,t),x(jt.$$.fragment,t),x(zt.$$.fragment,t),x(It.$$.fragment,t),x(Ce.$$.fragment,t),x(qe.$$.fragment,t),x(At.$$.fragment,t),x(Ct.$$.fragment,t),x(qt.$$.fragment,t),x(Ne.$$.fragment,t),x(Se.$$.fragment,t),x(Ot.$$.fragment,t),x(Nt.$$.fragment,t),x(Dt.$$.fragment,t),x(Re.$$.fragment,t),x(Be.$$.fragment,t),x(Rt.$$.fragment,t),x(Bt.$$.fragment,t),x(Qt.$$.fragment,t),x(Qe.$$.fragment,t),bs=!0)},o(t){y(l.$$.fragment,t),y(rt.$$.fragment,t),y(mt.$$.fragment,t),y(ht.$$.fragment,t),y(xe.$$.fragment,t),y(ut.$$.fragment,t),y(gt.$$.fragment,t),y(vt.$$.fragment,t),y($e.$$.fragment,t),y(bt.$$.fragment,t),y(Tt.$$.fragment,t),y(wt.$$.fragment,t),y(xt.$$.fragment,t),y(yt.$$.fragment,t),y(Vt.$$.fragment,t),y(Pe.$$.fragment,t),y(je.$$.fragment,t),y(Ft.$$.fragment,t),y(Et.$$.fragment,t),y(Pt.$$.fragment,t),y(Le.$$.fragment,t),y(Ie.$$.fragment,t),y(jt.$$.fragment,t),y(zt.$$.fragment,t),y(It.$$.fragment,t),y(Ce.$$.fragment,t),y(qe.$$.fragment,t),y(At.$$.fragment,t),y(Ct.$$.fragment,t),y(qt.$$.fragment,t),y(Ne.$$.fragment,t),y(Se.$$.fragment,t),y(Ot.$$.fragment,t),y(Nt.$$.fragment,t),y(Dt.$$.fragment,t),y(Re.$$.fragment,t),y(Be.$$.fragment,t),y(Rt.$$.fragment,t),y(Bt.$$.fragment,t),y(Qt.$$.fragment,t),y(Qe.$$.fragment,t),bs=!1},d(t){o(d),t&&o(b),t&&o(g),$(l),t&&o(Wn),t&&o(Z),$(rt),t&&o(Qn),t&&o(be),t&&o(Un),t&&o(Jt),t&&o(Hn),t&&o(Xt),t&&o(Kn),t&&o(Zt),t&&o(Gn),t&&o(q),t&&o(Jn),t&&o(Te),t&&o(Xn),t&&o(ke),t&&o(Zn),t&&o(K),t&&o(Yn),t&&o(oo),t&&o(es),t&&o(no),t&&o(ts),t&&o(ee),$(mt),t&&o(os),t&&o(P),$(ht),$(xe),t&&o(ns),t&&o(ne),$(ut),t&&o(ss),t&&o(j),$(gt),$(vt),$($e),t&&o(as),t&&o(se),$(bt),t&&o(rs),t&&o(z),$(Tt),$(wt),t&&o(is),t&&o(re),$(xt),t&&o(ls),t&&o(W),$(yt),$(Vt),$(Pe),$(je),t&&o(ds),t&&o(le),$(Ft),t&&o(cs),t&&o(L),$(Et),$(Pt),$(Le),$(Ie),t&&o(ps),t&&o(ce),$(jt),t&&o(ms),t&&o(I),$(zt),$(It),$(Ce),$(qe),t&&o(hs),t&&o(me),$(At),t&&o(fs),t&&o(Q),$(Ct),$(qt),$(Ne),$(Se),t&&o(us),t&&o(fe),$(Ot),t&&o(gs),t&&o(A),$(Nt),$(Dt),$(Re),$(Be),t&&o(_s),t&&o(ge),$(Rt),t&&o(vs),t&&o(C),$(Bt),$(Qt),$(Qe)}}}const ac={local:"vilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViltConfig",title:"ViltConfig"},{local:"transformers.ViltFeatureExtractor",title:"ViltFeatureExtractor"},{local:"transformers.ViltProcessor",title:"ViltProcessor"},{local:"transformers.ViltModel",title:"ViltModel"},{local:"transformers.ViltForMaskedLM",title:"ViltForMaskedLM"},{local:"transformers.ViltForQuestionAnswering",title:"ViltForQuestionAnswering"},{local:"transformers.ViltForImagesAndTextClassification",title:"ViltForImagesAndTextClassification"},{local:"transformers.ViltForImageAndTextRetrieval",title:"ViltForImageAndTextRetrieval"},{local:"transformers.ViltForTokenClassification",title:"ViltForTokenClassification"}],title:"ViLT"};function rc(V){return Wd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hc extends Nd{constructor(d){super();Sd(this,d,rc,sc,Dd,{})}}export{hc as default,ac as metadata};
