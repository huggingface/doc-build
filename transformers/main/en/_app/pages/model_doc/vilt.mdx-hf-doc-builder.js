import{S as Md,i as jd,s as zd,e as n,k as c,w as T,t as r,M as Ed,c as s,d as o,m,a,x as k,h as i,b as p,N as Ld,G as e,g as u,y,q as w,o as x,B as $,v as Id,L as jo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Po}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as zo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as H}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Mo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ad(V){let d,b,_,g,v;return g=new zo({props:{code:`from transformers import ViLTModel, ViLTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=r("Example:"),_=c(),T(g.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Example:"),f.forEach(o),_=m(l),k(g.$$.fragment,l)},m(l,f){u(l,d,f),e(d,b),u(l,_,f),y(g,l,f),v=!0},p:jo,i(l){v||(w(g.$$.fragment,l),v=!0)},o(l){x(g.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(g,l)}}}function Cd(V){let d,b,_,g,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);g=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){u(l,d,f),e(d,b),e(d,_),e(_,g),e(d,v)},d(l){l&&o(d)}}}function qd(V){let d,b,_,g,v;return g=new zo({props:{code:`from transformers import ViltProcessor, ViltModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(g.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),k(g.$$.fragment,l)},m(l,f){u(l,d,f),e(d,b),u(l,_,f),y(g,l,f),v=!0},p:jo,i(l){v||(w(g.$$.fragment,l),v=!0)},o(l){x(g.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(g,l)}}}function Od(V){let d,b,_,g,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);g=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){u(l,d,f),e(d,b),e(d,_),e(_,g),e(d,v)},d(l){l&&o(d)}}}function Nd(V){let d,b,_,g,v;return g=new zo({props:{code:`from transformers import ViltProcessor, ViltForMaskedLM
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
a bunch of cats laying on a couch.`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(g.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),k(g.$$.fragment,l)},m(l,f){u(l,d,f),e(d,b),u(l,_,f),y(g,l,f),v=!0},p:jo,i(l){v||(w(g.$$.fragment,l),v=!0)},o(l){x(g.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(g,l)}}}function Sd(V){let d,b,_,g,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);g=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){u(l,d,f),e(d,b),e(d,_),e(_,g),e(d,v)},d(l){l&&o(d)}}}function Dd(V){let d,b,_,g,v;return g=new zo({props:{code:`from transformers import ViltProcessor, ViltForQuestionAnswering
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
Predicted answer: <span class="hljs-number">2</span>`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(g.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),k(g.$$.fragment,l)},m(l,f){u(l,d,f),e(d,b),u(l,_,f),y(g,l,f),v=!0},p:jo,i(l){v||(w(g.$$.fragment,l),v=!0)},o(l){x(g.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(g,l)}}}function Wd(V){let d,b,_,g,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);g=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){u(l,d,f),e(d,b),e(d,_),e(_,g),e(d,v)},d(l){l&&o(d)}}}function Bd(V){let d,b,_,g,v;return g=new zo({props:{code:`from transformers import ViltProcessor, ViltForImagesAndTextClassification
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
Predicted answer: <span class="hljs-literal">True</span>`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(g.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),k(g.$$.fragment,l)},m(l,f){u(l,d,f),e(d,b),u(l,_,f),y(g,l,f),v=!0},p:jo,i(l){v||(w(g.$$.fragment,l),v=!0)},o(l){x(g.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(g,l)}}}function Rd(V){let d,b,_,g,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);g=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){u(l,d,f),e(d,b),e(d,_),e(_,g),e(d,v)},d(l){l&&o(d)}}}function Qd(V){let d,b,_,g,v;return g=new zo({props:{code:`from transformers import ViltProcessor, ViltForImageAndTextRetrieval
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
<span class="hljs-meta">... </span>    scores[text] = outputs.logits[<span class="hljs-number">0</span>, :].item()`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(g.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),k(g.$$.fragment,l)},m(l,f){u(l,d,f),e(d,b),u(l,_,f),y(g,l,f),v=!0},p:jo,i(l){v||(w(g.$$.fragment,l),v=!0)},o(l){x(g.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(g,l)}}}function Ud(V){let d,b,_,g,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);g=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){u(l,d,f),e(d,b),e(d,_),e(_,g),e(d,v)},d(l){l&&o(d)}}}function Hd(V){let d,b,_,g,v,l,f,F,Is,Nn,X,_e,Eo,st,As,Lo,Cs,Sn,ve,qs,at,Os,Ns,Dn,Ut,Ss,Wn,Ht,Io,Ds,Bn,Kt,Ws,Rn,C,rt,Bs,it,Rs,Qs,Us,W,Hs,Ao,Ks,Gs,Co,Js,Xs,Gt,Ys,Zs,ea,Y,ta,qo,oa,na,Jt,sa,aa,ra,Oo,ia,Qn,be,nl,Un,Te,la,Xt,da,ca,Hn,K,ma,lt,pa,ha,dt,fa,ga,Kn,Yt,ua,Gn,Zt,No,_a,Jn,Z,ke,So,ct,va,Do,ba,Xn,j,mt,Ta,ee,ka,Wo,ya,wa,pt,xa,$a,Va,te,Fa,eo,Pa,Ma,to,ja,za,Ea,ye,Yn,oe,we,Bo,ht,La,Ro,Ia,Zn,B,ft,Aa,Qo,Ca,qa,xe,gt,Oa,Uo,Na,es,ne,$e,Ho,ut,Sa,Ko,Da,ts,z,_t,Wa,Go,Ba,Ra,M,oo,Qa,Ua,no,Ha,Ka,so,Ga,Ja,vt,Jo,Xa,Ya,Za,Xo,er,tr,or,G,bt,nr,se,sr,Ve,ar,Yo,rr,ir,lr,Fe,dr,Zo,cr,mr,pr,hr,en,fr,os,ae,Pe,tn,Tt,gr,on,ur,ns,R,kt,_r,yt,vr,nn,br,Tr,kr,q,wt,yr,re,wr,ao,xr,$r,sn,Vr,Fr,Pr,Me,Mr,je,ss,ie,ze,an,xt,jr,rn,zr,as,E,$t,Er,ln,Lr,Ir,Vt,Ar,dn,Cr,qr,Or,O,Ft,Nr,le,Sr,ro,Dr,Wr,cn,Br,Rr,Qr,Ee,Ur,Le,rs,de,Ie,mn,Pt,Hr,pn,Kr,is,L,Mt,Gr,hn,Jr,Xr,jt,Yr,fn,Zr,ei,ti,N,zt,oi,ce,ni,io,si,ai,gn,ri,ii,li,Ae,di,Ce,ls,me,qe,un,Et,ci,_n,mi,ds,Q,Lt,pi,vn,hi,fi,S,It,gi,pe,ui,lo,_i,vi,bn,bi,Ti,ki,Oe,yi,Ne,cs,he,Se,Tn,At,wi,kn,xi,ms,I,Ct,$i,yn,Vi,Fi,qt,Pi,wn,Mi,ji,zi,D,Ot,Ei,fe,Li,co,Ii,Ai,xn,Ci,qi,Oi,De,Ni,We,ps,ge,Be,$n,Nt,Si,Vn,Di,hs,A,St,Wi,Fn,Bi,Ri,Dt,Qi,Pn,Ui,Hi,Ki,J,Wt,Gi,ue,Ji,mo,Xi,Yi,Mn,Zi,el,tl,Re,fs;return l=new H({}),st=new H({}),ct=new H({}),mt=new P({props:{name:"class transformers.ViltConfig",anchor:"transformers.ViltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"type_vocab_size",val:" = 2"},{name:"modality_type_vocab_size",val:" = 2"},{name:"max_position_embeddings",val:" = 40"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 32"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"max_image_length",val:" = -1"},{name:"tie_word_embeddings",val:" = False"},{name:"num_images",val:" = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
used by <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> for defining the classifier head.`,name:"num_images"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/configuration_vilt.py#L28"}}),ye=new Mo({props:{anchor:"transformers.ViltConfig.example",$$slots:{default:[Ad]},$$scope:{ctx:V}}}),ht=new H({}),ft=new P({props:{name:"class transformers.models.vilt.image_processing_vilt.ViltImageProcessor",anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"size_divisor",val:": int = 32"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_pad",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 384}</code>):
Resize the shorter side of the input to <code>size[&quot;shortest_edge&quot;]</code>. The longer side will be limited to under
<code>int((1333 / 800) * size[&quot;shortest_edge&quot;])</code> while preserving the aspect ratio. Only has an effect if
<code>do_resize</code> is set to <code>True</code>. Can be overridden by the <code>size</code> parameter in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size by which to make sure both the height and width can be divided. Only has an effect if <code>do_resize</code>
is set to <code>True</code>. Can be overridden by the <code>size_divisor</code> parameter in the <code>preprocess</code> method.`,name:"size_divisor"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Only has an effect if <code>do_resize</code> is set to <code>True</code>. Can be
overridden by the <code>resample</code> parameter in the <code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Wwhether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the
<code>do_rescale</code> parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Only has an effect if <code>do_rescale</code> is set to <code>True</code>. Can be
overridden by the <code>rescale_factor</code> parameter in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code> method.`,name:"do_normalize"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method. Can be
overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.
Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"},{anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.do_pad",description:`<strong>do_pad</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to pad the image to the <code>(max_height, max_width)</code> of the images in the batch. Can be overridden by
the <code>do_pad</code> parameter in the <code>preprocess</code> method.`,name:"do_pad"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/image_processing_vilt.py#L154"}}),gt=new P({props:{name:"__call__",anchor:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),ut=new H({}),_t=new P({props:{name:"class transformers.ViltProcessor",anchor:"transformers.ViltProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.ViltProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>ViltFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.ViltProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L26"}}),bt=new P({props:{name:"__call__",anchor:"transformers.ViltProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L46"}}),Tt=new H({}),kt=new P({props:{name:"class transformers.ViltModel",anchor:"transformers.ViltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ViltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L727"}}),wt=new P({props:{name:"forward",anchor:"transformers.ViltModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_token_type_idx",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L755",returnDescription:`
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
`}}),Me=new Po({props:{$$slots:{default:[Cd]},$$scope:{ctx:V}}}),je=new Mo({props:{anchor:"transformers.ViltModel.forward.example",$$slots:{default:[qd]},$$scope:{ctx:V}}}),xt=new H({}),$t=new P({props:{name:"class transformers.ViltForMaskedLM",anchor:"transformers.ViltForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L892"}}),Ft=new P({props:{name:"forward",anchor:"transformers.ViltForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
loss is only computed for the tokens with labels in <em>[0, &#x2026;, config.vocab_size]</em>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L908",returnDescription:`
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
`}}),Ee=new Po({props:{$$slots:{default:[Od]},$$scope:{ctx:V}}}),Le=new Mo({props:{anchor:"transformers.ViltForMaskedLM.forward.example",$$slots:{default:[Nd]},$$scope:{ctx:V}}}),Pt=new H({}),Mt=new P({props:{name:"class transformers.ViltForQuestionAnswering",anchor:"transformers.ViltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1064"}}),zt=new P({props:{name:"forward",anchor:"transformers.ViltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
answers are applicable, where 1.0 is the highest score.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1082",returnDescription:`
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
`}}),Ae=new Po({props:{$$slots:{default:[Sd]},$$scope:{ctx:V}}}),Ce=new Mo({props:{anchor:"transformers.ViltForQuestionAnswering.forward.example",$$slots:{default:[Dd]},$$scope:{ctx:V}}}),Et=new H({}),Lt=new P({props:{name:"class transformers.ViltForImagesAndTextClassification",anchor:"transformers.ViltForImagesAndTextClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_images, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1274"}}),It=new P({props:{name:"forward",anchor:"transformers.ViltForImagesAndTextClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Binary classification labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1293",returnDescription:`
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
`}}),Oe=new Po({props:{$$slots:{default:[Wd]},$$scope:{ctx:V}}}),Ne=new Mo({props:{anchor:"transformers.ViltForImagesAndTextClassification.forward.example",$$slots:{default:[Bd]},$$scope:{ctx:V}}}),At=new H({}),Ct=new P({props:{name:"class transformers.ViltForImageAndTextRetrieval",anchor:"transformers.ViltForImageAndTextRetrieval",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1175"}}),Ot=new P({props:{name:"forward",anchor:"transformers.ViltForImageAndTextRetrieval.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Labels are currently not supported.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1187",returnDescription:`
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
`}}),De=new Po({props:{$$slots:{default:[Rd]},$$scope:{ctx:V}}}),We=new Mo({props:{anchor:"transformers.ViltForImageAndTextRetrieval.forward.example",$$slots:{default:[Qd]},$$scope:{ctx:V}}}),Nt=new H({}),St=new P({props:{name:"class transformers.ViltForTokenClassification",anchor:"transformers.ViltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1414"}}),Wt=new P({props:{name:"forward",anchor:"transformers.ViltForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForTokenClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1430",returnDescription:`
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
`}}),Re=new Po({props:{$$slots:{default:[Ud]},$$scope:{ctx:V}}}),{c(){d=n("meta"),b=c(),_=n("h1"),g=n("a"),v=n("span"),T(l.$$.fragment),f=c(),F=n("span"),Is=r("ViLT"),Nn=c(),X=n("h2"),_e=n("a"),Eo=n("span"),T(st.$$.fragment),As=c(),Lo=n("span"),Cs=r("Overview"),Sn=c(),ve=n("p"),qs=r("The ViLT model was proposed in "),at=n("a"),Os=r("ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),Ns=r(`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Dn=c(),Ut=n("p"),Ss=r("The abstract from the paper is the following:"),Wn=c(),Ht=n("p"),Io=n("em"),Ds=r(`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),Bn=c(),Kt=n("p"),Ws=r("Tips:"),Rn=c(),C=n("ul"),rt=n("li"),Bs=r("The quickest way to get started with ViLT is by checking the "),it=n("a"),Rs=r("example notebooks"),Qs=r(`
(which showcase both inference and fine-tuning on custom data).`),Us=c(),W=n("li"),Hs=r("ViLT is a model that takes both "),Ao=n("code"),Ks=r("pixel_values"),Gs=r(" and "),Co=n("code"),Js=r("input_ids"),Xs=r(" as input. One can use "),Gt=n("a"),Ys=r("ViltProcessor"),Zs=r(` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),ea=c(),Y=n("li"),ta=r(`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),qo=n("code"),oa=r("pixel_mask"),na=r(` that indicates
which pixel values are real and which are padding. `),Jt=n("a"),sa=r("ViltProcessor"),aa=r(" automatically creates this for you."),ra=c(),Oo=n("li"),ia=r(`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),Qn=c(),be=n("img"),Un=c(),Te=n("small"),la=r("ViLT architecture. Taken from the "),Xt=n("a"),da=r("original paper"),ca=r("."),Hn=c(),K=n("p"),ma=r("This model was contributed by "),lt=n("a"),pa=r("nielsr"),ha=r(". The original code can be found "),dt=n("a"),fa=r("here"),ga=r("."),Kn=c(),Yt=n("p"),ua=r("Tips:"),Gn=c(),Zt=n("ul"),No=n("li"),_a=r("The PyTorch version of this model is only available in torch 1.10 and higher."),Jn=c(),Z=n("h2"),ke=n("a"),So=n("span"),T(ct.$$.fragment),va=c(),Do=n("span"),ba=r("ViltConfig"),Xn=c(),j=n("div"),T(mt.$$.fragment),Ta=c(),ee=n("p"),ka=r("This is the configuration class to store the configuration of a "),Wo=n("code"),ya=r("ViLTModel"),wa=r(`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),pt=n("a"),xa=r("dandelin/vilt-b32-mlm"),$a=r(" architecture."),Va=c(),te=n("p"),Fa=r("Configuration objects inherit from "),eo=n("a"),Pa=r("PretrainedConfig"),Ma=r(` and can be used to control the model outputs. Read the
documentation from `),to=n("a"),ja=r("PretrainedConfig"),za=r(" for more information."),Ea=c(),T(ye.$$.fragment),Yn=c(),oe=n("h2"),we=n("a"),Bo=n("span"),T(ht.$$.fragment),La=c(),Ro=n("span"),Ia=r("ViltFeatureExtractor"),Zn=c(),B=n("div"),T(ft.$$.fragment),Aa=c(),Qo=n("p"),Ca=r("Constructs a ViLT image processor."),qa=c(),xe=n("div"),T(gt.$$.fragment),Oa=c(),Uo=n("p"),Na=r("Preprocess an image or a batch of images."),es=c(),ne=n("h2"),$e=n("a"),Ho=n("span"),T(ut.$$.fragment),Sa=c(),Ko=n("span"),Da=r("ViltProcessor"),ts=c(),z=n("div"),T(_t.$$.fragment),Wa=c(),Go=n("p"),Ba=r("Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Ra=c(),M=n("p"),oo=n("a"),Qa=r("ViltProcessor"),Ua=r(" offers all the functionalities of "),no=n("a"),Ha=r("ViltFeatureExtractor"),Ka=r(" and "),so=n("a"),Ga=r("BertTokenizerFast"),Ja=r(`. See the
docstring of `),vt=n("a"),Jo=n("strong"),Xa=r("call"),Ya=r("()"),Za=r(" and "),Xo=n("code"),er=r("decode()"),tr=r(" for more information."),or=c(),G=n("div"),T(bt.$$.fragment),nr=c(),se=n("p"),sr=r("This method uses "),Ve=n("a"),ar=r("ViltFeatureExtractor."),Yo=n("strong"),rr=r("call"),ir=r("()"),lr=r(` method to prepare image(s) for the model, and
`),Fe=n("a"),dr=r("BertTokenizerFast."),Zo=n("strong"),cr=r("call"),mr=r("()"),pr=r(" to prepare text for the model."),hr=c(),en=n("p"),fr=r("Please refer to the docstring of the above two methods for more information."),os=c(),ae=n("h2"),Pe=n("a"),tn=n("span"),T(Tt.$$.fragment),gr=c(),on=n("span"),ur=r("ViltModel"),ns=c(),R=n("div"),T(kt.$$.fragment),_r=c(),yt=n("p"),vr=r(`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),nn=n("code"),br=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Tr=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr=c(),q=n("div"),T(wt.$$.fragment),yr=c(),re=n("p"),wr=r("The "),ao=n("a"),xr=r("ViltModel"),$r=r(" forward method, overrides the "),sn=n("code"),Vr=r("__call__"),Fr=r(" special method."),Pr=c(),T(Me.$$.fragment),Mr=c(),T(je.$$.fragment),ss=c(),ie=n("h2"),ze=n("a"),an=n("span"),T(xt.$$.fragment),jr=c(),rn=n("span"),zr=r("ViltForMaskedLM"),as=c(),E=n("div"),T($t.$$.fragment),Er=c(),ln=n("p"),Lr=r("ViLT Model with a language modeling head on top as done during pretraining."),Ir=c(),Vt=n("p"),Ar=r("This model is a PyTorch "),dn=n("code"),Cr=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),qr=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Or=c(),O=n("div"),T(Ft.$$.fragment),Nr=c(),le=n("p"),Sr=r("The "),ro=n("a"),Dr=r("ViltForMaskedLM"),Wr=r(" forward method, overrides the "),cn=n("code"),Br=r("__call__"),Rr=r(" special method."),Qr=c(),T(Ee.$$.fragment),Ur=c(),T(Le.$$.fragment),rs=c(),de=n("h2"),Ie=n("a"),mn=n("span"),T(Pt.$$.fragment),Hr=c(),pn=n("span"),Kr=r("ViltForQuestionAnswering"),is=c(),L=n("div"),T(Mt.$$.fragment),Gr=c(),hn=n("p"),Jr=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),Xr=c(),jt=n("p"),Yr=r("This model is a PyTorch "),fn=n("code"),Zr=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ei=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ti=c(),N=n("div"),T(zt.$$.fragment),oi=c(),ce=n("p"),ni=r("The "),io=n("a"),si=r("ViltForQuestionAnswering"),ai=r(" forward method, overrides the "),gn=n("code"),ri=r("__call__"),ii=r(" special method."),li=c(),T(Ae.$$.fragment),di=c(),T(Ce.$$.fragment),ls=c(),me=n("h2"),qe=n("a"),un=n("span"),T(Et.$$.fragment),ci=c(),_n=n("span"),mi=r("ViltForImagesAndTextClassification"),ds=c(),Q=n("div"),T(Lt.$$.fragment),pi=c(),vn=n("p"),hi=r("Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),fi=c(),S=n("div"),T(It.$$.fragment),gi=c(),pe=n("p"),ui=r("The "),lo=n("a"),_i=r("ViltForImagesAndTextClassification"),vi=r(" forward method, overrides the "),bn=n("code"),bi=r("__call__"),Ti=r(" special method."),ki=c(),T(Oe.$$.fragment),yi=c(),T(Ne.$$.fragment),cs=c(),he=n("h2"),Se=n("a"),Tn=n("span"),T(At.$$.fragment),wi=c(),kn=n("span"),xi=r("ViltForImageAndTextRetrieval"),ms=c(),I=n("div"),T(Ct.$$.fragment),$i=c(),yn=n("p"),Vi=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),Fi=c(),qt=n("p"),Pi=r("This model is a PyTorch "),wn=n("code"),Mi=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ji=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zi=c(),D=n("div"),T(Ot.$$.fragment),Ei=c(),fe=n("p"),Li=r("The "),co=n("a"),Ii=r("ViltForImageAndTextRetrieval"),Ai=r(" forward method, overrides the "),xn=n("code"),Ci=r("__call__"),qi=r(" special method."),Oi=c(),T(De.$$.fragment),Ni=c(),T(We.$$.fragment),ps=c(),ge=n("h2"),Be=n("a"),$n=n("span"),T(Nt.$$.fragment),Si=c(),Vn=n("span"),Di=r("ViltForTokenClassification"),hs=c(),A=n("div"),T(St.$$.fragment),Wi=c(),Fn=n("p"),Bi=r(`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),Ri=c(),Dt=n("p"),Qi=r("This model is a PyTorch "),Pn=n("code"),Ui=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Hi=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ki=c(),J=n("div"),T(Wt.$$.fragment),Gi=c(),ue=n("p"),Ji=r("The "),mo=n("a"),Xi=r("ViltForTokenClassification"),Yi=r(" forward method, overrides the "),Mn=n("code"),Zi=r("__call__"),el=r(" special method."),tl=c(),T(Re.$$.fragment),this.h()},l(t){const h=Ed('[data-svelte="svelte-1phssyn"]',document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(o),b=m(t),_=s(t,"H1",{class:!0});var Bt=a(_);g=s(Bt,"A",{id:!0,class:!0,href:!0});var jn=a(g);v=s(jn,"SPAN",{});var zn=a(v);k(l.$$.fragment,zn),zn.forEach(o),jn.forEach(o),f=m(Bt),F=s(Bt,"SPAN",{});var En=a(F);Is=i(En,"ViLT"),En.forEach(o),Bt.forEach(o),Nn=m(t),X=s(t,"H2",{class:!0});var Rt=a(X);_e=s(Rt,"A",{id:!0,class:!0,href:!0});var Ln=a(_e);Eo=s(Ln,"SPAN",{});var In=a(Eo);k(st.$$.fragment,In),In.forEach(o),Ln.forEach(o),As=m(Rt),Lo=s(Rt,"SPAN",{});var An=a(Lo);Cs=i(An,"Overview"),An.forEach(o),Rt.forEach(o),Sn=m(t),ve=s(t,"P",{});var Qt=a(ve);qs=i(Qt,"The ViLT model was proposed in "),at=s(Qt,"A",{href:!0,rel:!0});var Cn=a(at);Os=i(Cn,"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),Cn.forEach(o),Ns=i(Qt,`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Qt.forEach(o),Dn=m(t),Ut=s(t,"P",{});var qn=a(Ut);Ss=i(qn,"The abstract from the paper is the following:"),qn.forEach(o),Wn=m(t),Ht=s(t,"P",{});var On=a(Ht);Io=s(On,"EM",{});var sl=a(Io);Ds=i(sl,`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),sl.forEach(o),On.forEach(o),Bn=m(t),Kt=s(t,"P",{});var al=a(Kt);Ws=i(al,"Tips:"),al.forEach(o),Rn=m(t),C=s(t,"UL",{});var Qe=a(C);rt=s(Qe,"LI",{});var gs=a(rt);Bs=i(gs,"The quickest way to get started with ViLT is by checking the "),it=s(gs,"A",{href:!0,rel:!0});var rl=a(it);Rs=i(rl,"example notebooks"),rl.forEach(o),Qs=i(gs,`
(which showcase both inference and fine-tuning on custom data).`),gs.forEach(o),Us=m(Qe),W=s(Qe,"LI",{});var Ue=a(W);Hs=i(Ue,"ViLT is a model that takes both "),Ao=s(Ue,"CODE",{});var il=a(Ao);Ks=i(il,"pixel_values"),il.forEach(o),Gs=i(Ue," and "),Co=s(Ue,"CODE",{});var ll=a(Co);Js=i(ll,"input_ids"),ll.forEach(o),Xs=i(Ue," as input. One can use "),Gt=s(Ue,"A",{href:!0});var dl=a(Gt);Ys=i(dl,"ViltProcessor"),dl.forEach(o),Zs=i(Ue,` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),Ue.forEach(o),ea=m(Qe),Y=s(Qe,"LI",{});var po=a(Y);ta=i(po,`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),qo=s(po,"CODE",{});var cl=a(qo);oa=i(cl,"pixel_mask"),cl.forEach(o),na=i(po,` that indicates
which pixel values are real and which are padding. `),Jt=s(po,"A",{href:!0});var ml=a(Jt);sa=i(ml,"ViltProcessor"),ml.forEach(o),aa=i(po," automatically creates this for you."),po.forEach(o),ra=m(Qe),Oo=s(Qe,"LI",{});var pl=a(Oo);ia=i(pl,`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),pl.forEach(o),Qe.forEach(o),Qn=m(t),be=s(t,"IMG",{src:!0,alt:!0,width:!0}),Un=m(t),Te=s(t,"SMALL",{});var us=a(Te);la=i(us,"ViLT architecture. Taken from the "),Xt=s(us,"A",{href:!0});var hl=a(Xt);da=i(hl,"original paper"),hl.forEach(o),ca=i(us,"."),us.forEach(o),Hn=m(t),K=s(t,"P",{});var ho=a(K);ma=i(ho,"This model was contributed by "),lt=s(ho,"A",{href:!0,rel:!0});var fl=a(lt);pa=i(fl,"nielsr"),fl.forEach(o),ha=i(ho,". The original code can be found "),dt=s(ho,"A",{href:!0,rel:!0});var gl=a(dt);fa=i(gl,"here"),gl.forEach(o),ga=i(ho,"."),ho.forEach(o),Kn=m(t),Yt=s(t,"P",{});var ul=a(Yt);ua=i(ul,"Tips:"),ul.forEach(o),Gn=m(t),Zt=s(t,"UL",{});var _l=a(Zt);No=s(_l,"LI",{});var vl=a(No);_a=i(vl,"The PyTorch version of this model is only available in torch 1.10 and higher."),vl.forEach(o),_l.forEach(o),Jn=m(t),Z=s(t,"H2",{class:!0});var _s=a(Z);ke=s(_s,"A",{id:!0,class:!0,href:!0});var bl=a(ke);So=s(bl,"SPAN",{});var Tl=a(So);k(ct.$$.fragment,Tl),Tl.forEach(o),bl.forEach(o),va=m(_s),Do=s(_s,"SPAN",{});var kl=a(Do);ba=i(kl,"ViltConfig"),kl.forEach(o),_s.forEach(o),Xn=m(t),j=s(t,"DIV",{class:!0});var He=a(j);k(mt.$$.fragment,He),Ta=m(He),ee=s(He,"P",{});var fo=a(ee);ka=i(fo,"This is the configuration class to store the configuration of a "),Wo=s(fo,"CODE",{});var yl=a(Wo);ya=i(yl,"ViLTModel"),yl.forEach(o),wa=i(fo,`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),pt=s(fo,"A",{href:!0,rel:!0});var wl=a(pt);xa=i(wl,"dandelin/vilt-b32-mlm"),wl.forEach(o),$a=i(fo," architecture."),fo.forEach(o),Va=m(He),te=s(He,"P",{});var go=a(te);Fa=i(go,"Configuration objects inherit from "),eo=s(go,"A",{href:!0});var xl=a(eo);Pa=i(xl,"PretrainedConfig"),xl.forEach(o),Ma=i(go,` and can be used to control the model outputs. Read the
documentation from `),to=s(go,"A",{href:!0});var $l=a(to);ja=i($l,"PretrainedConfig"),$l.forEach(o),za=i(go," for more information."),go.forEach(o),Ea=m(He),k(ye.$$.fragment,He),He.forEach(o),Yn=m(t),oe=s(t,"H2",{class:!0});var vs=a(oe);we=s(vs,"A",{id:!0,class:!0,href:!0});var Vl=a(we);Bo=s(Vl,"SPAN",{});var Fl=a(Bo);k(ht.$$.fragment,Fl),Fl.forEach(o),Vl.forEach(o),La=m(vs),Ro=s(vs,"SPAN",{});var Pl=a(Ro);Ia=i(Pl,"ViltFeatureExtractor"),Pl.forEach(o),vs.forEach(o),Zn=m(t),B=s(t,"DIV",{class:!0});var uo=a(B);k(ft.$$.fragment,uo),Aa=m(uo),Qo=s(uo,"P",{});var Ml=a(Qo);Ca=i(Ml,"Constructs a ViLT image processor."),Ml.forEach(o),qa=m(uo),xe=s(uo,"DIV",{class:!0});var bs=a(xe);k(gt.$$.fragment,bs),Oa=m(bs),Uo=s(bs,"P",{});var jl=a(Uo);Na=i(jl,"Preprocess an image or a batch of images."),jl.forEach(o),bs.forEach(o),uo.forEach(o),es=m(t),ne=s(t,"H2",{class:!0});var Ts=a(ne);$e=s(Ts,"A",{id:!0,class:!0,href:!0});var zl=a($e);Ho=s(zl,"SPAN",{});var El=a(Ho);k(ut.$$.fragment,El),El.forEach(o),zl.forEach(o),Sa=m(Ts),Ko=s(Ts,"SPAN",{});var Ll=a(Ko);Da=i(Ll,"ViltProcessor"),Ll.forEach(o),Ts.forEach(o),ts=m(t),z=s(t,"DIV",{class:!0});var Ke=a(z);k(_t.$$.fragment,Ke),Wa=m(Ke),Go=s(Ke,"P",{});var Il=a(Go);Ba=i(Il,"Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Il.forEach(o),Ra=m(Ke),M=s(Ke,"P",{});var U=a(M);oo=s(U,"A",{href:!0});var Al=a(oo);Qa=i(Al,"ViltProcessor"),Al.forEach(o),Ua=i(U," offers all the functionalities of "),no=s(U,"A",{href:!0});var Cl=a(no);Ha=i(Cl,"ViltFeatureExtractor"),Cl.forEach(o),Ka=i(U," and "),so=s(U,"A",{href:!0});var ql=a(so);Ga=i(ql,"BertTokenizerFast"),ql.forEach(o),Ja=i(U,`. See the
docstring of `),vt=s(U,"A",{href:!0});var ol=a(vt);Jo=s(ol,"STRONG",{});var Ol=a(Jo);Xa=i(Ol,"call"),Ol.forEach(o),Ya=i(ol,"()"),ol.forEach(o),Za=i(U," and "),Xo=s(U,"CODE",{});var Nl=a(Xo);er=i(Nl,"decode()"),Nl.forEach(o),tr=i(U," for more information."),U.forEach(o),or=m(Ke),G=s(Ke,"DIV",{class:!0});var _o=a(G);k(bt.$$.fragment,_o),nr=m(_o),se=s(_o,"P",{});var vo=a(se);sr=i(vo,"This method uses "),Ve=s(vo,"A",{href:!0});var ks=a(Ve);ar=i(ks,"ViltFeatureExtractor."),Yo=s(ks,"STRONG",{});var Sl=a(Yo);rr=i(Sl,"call"),Sl.forEach(o),ir=i(ks,"()"),ks.forEach(o),lr=i(vo,` method to prepare image(s) for the model, and
`),Fe=s(vo,"A",{href:!0});var ys=a(Fe);dr=i(ys,"BertTokenizerFast."),Zo=s(ys,"STRONG",{});var Dl=a(Zo);cr=i(Dl,"call"),Dl.forEach(o),mr=i(ys,"()"),ys.forEach(o),pr=i(vo," to prepare text for the model."),vo.forEach(o),hr=m(_o),en=s(_o,"P",{});var Wl=a(en);fr=i(Wl,"Please refer to the docstring of the above two methods for more information."),Wl.forEach(o),_o.forEach(o),Ke.forEach(o),os=m(t),ae=s(t,"H2",{class:!0});var ws=a(ae);Pe=s(ws,"A",{id:!0,class:!0,href:!0});var Bl=a(Pe);tn=s(Bl,"SPAN",{});var Rl=a(tn);k(Tt.$$.fragment,Rl),Rl.forEach(o),Bl.forEach(o),gr=m(ws),on=s(ws,"SPAN",{});var Ql=a(on);ur=i(Ql,"ViltModel"),Ql.forEach(o),ws.forEach(o),ns=m(t),R=s(t,"DIV",{class:!0});var bo=a(R);k(kt.$$.fragment,bo),_r=m(bo),yt=s(bo,"P",{});var xs=a(yt);vr=i(xs,`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),nn=s(xs,"CODE",{});var Ul=a(nn);br=i(Ul,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Ul.forEach(o),Tr=i(xs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xs.forEach(o),kr=m(bo),q=s(bo,"DIV",{class:!0});var Ge=a(q);k(wt.$$.fragment,Ge),yr=m(Ge),re=s(Ge,"P",{});var To=a(re);wr=i(To,"The "),ao=s(To,"A",{href:!0});var Hl=a(ao);xr=i(Hl,"ViltModel"),Hl.forEach(o),$r=i(To," forward method, overrides the "),sn=s(To,"CODE",{});var Kl=a(sn);Vr=i(Kl,"__call__"),Kl.forEach(o),Fr=i(To," special method."),To.forEach(o),Pr=m(Ge),k(Me.$$.fragment,Ge),Mr=m(Ge),k(je.$$.fragment,Ge),Ge.forEach(o),bo.forEach(o),ss=m(t),ie=s(t,"H2",{class:!0});var $s=a(ie);ze=s($s,"A",{id:!0,class:!0,href:!0});var Gl=a(ze);an=s(Gl,"SPAN",{});var Jl=a(an);k(xt.$$.fragment,Jl),Jl.forEach(o),Gl.forEach(o),jr=m($s),rn=s($s,"SPAN",{});var Xl=a(rn);zr=i(Xl,"ViltForMaskedLM"),Xl.forEach(o),$s.forEach(o),as=m(t),E=s(t,"DIV",{class:!0});var Je=a(E);k($t.$$.fragment,Je),Er=m(Je),ln=s(Je,"P",{});var Yl=a(ln);Lr=i(Yl,"ViLT Model with a language modeling head on top as done during pretraining."),Yl.forEach(o),Ir=m(Je),Vt=s(Je,"P",{});var Vs=a(Vt);Ar=i(Vs,"This model is a PyTorch "),dn=s(Vs,"CODE",{});var Zl=a(dn);Cr=i(Zl,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Zl.forEach(o),qr=i(Vs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vs.forEach(o),Or=m(Je),O=s(Je,"DIV",{class:!0});var Xe=a(O);k(Ft.$$.fragment,Xe),Nr=m(Xe),le=s(Xe,"P",{});var ko=a(le);Sr=i(ko,"The "),ro=s(ko,"A",{href:!0});var ed=a(ro);Dr=i(ed,"ViltForMaskedLM"),ed.forEach(o),Wr=i(ko," forward method, overrides the "),cn=s(ko,"CODE",{});var td=a(cn);Br=i(td,"__call__"),td.forEach(o),Rr=i(ko," special method."),ko.forEach(o),Qr=m(Xe),k(Ee.$$.fragment,Xe),Ur=m(Xe),k(Le.$$.fragment,Xe),Xe.forEach(o),Je.forEach(o),rs=m(t),de=s(t,"H2",{class:!0});var Fs=a(de);Ie=s(Fs,"A",{id:!0,class:!0,href:!0});var od=a(Ie);mn=s(od,"SPAN",{});var nd=a(mn);k(Pt.$$.fragment,nd),nd.forEach(o),od.forEach(o),Hr=m(Fs),pn=s(Fs,"SPAN",{});var sd=a(pn);Kr=i(sd,"ViltForQuestionAnswering"),sd.forEach(o),Fs.forEach(o),is=m(t),L=s(t,"DIV",{class:!0});var Ye=a(L);k(Mt.$$.fragment,Ye),Gr=m(Ye),hn=s(Ye,"P",{});var ad=a(hn);Jr=i(ad,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),ad.forEach(o),Xr=m(Ye),jt=s(Ye,"P",{});var Ps=a(jt);Yr=i(Ps,"This model is a PyTorch "),fn=s(Ps,"CODE",{});var rd=a(fn);Zr=i(rd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),rd.forEach(o),ei=i(Ps,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ps.forEach(o),ti=m(Ye),N=s(Ye,"DIV",{class:!0});var Ze=a(N);k(zt.$$.fragment,Ze),oi=m(Ze),ce=s(Ze,"P",{});var yo=a(ce);ni=i(yo,"The "),io=s(yo,"A",{href:!0});var id=a(io);si=i(id,"ViltForQuestionAnswering"),id.forEach(o),ai=i(yo," forward method, overrides the "),gn=s(yo,"CODE",{});var ld=a(gn);ri=i(ld,"__call__"),ld.forEach(o),ii=i(yo," special method."),yo.forEach(o),li=m(Ze),k(Ae.$$.fragment,Ze),di=m(Ze),k(Ce.$$.fragment,Ze),Ze.forEach(o),Ye.forEach(o),ls=m(t),me=s(t,"H2",{class:!0});var Ms=a(me);qe=s(Ms,"A",{id:!0,class:!0,href:!0});var dd=a(qe);un=s(dd,"SPAN",{});var cd=a(un);k(Et.$$.fragment,cd),cd.forEach(o),dd.forEach(o),ci=m(Ms),_n=s(Ms,"SPAN",{});var md=a(_n);mi=i(md,"ViltForImagesAndTextClassification"),md.forEach(o),Ms.forEach(o),ds=m(t),Q=s(t,"DIV",{class:!0});var wo=a(Q);k(Lt.$$.fragment,wo),pi=m(wo),vn=s(wo,"P",{});var pd=a(vn);hi=i(pd,"Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),pd.forEach(o),fi=m(wo),S=s(wo,"DIV",{class:!0});var et=a(S);k(It.$$.fragment,et),gi=m(et),pe=s(et,"P",{});var xo=a(pe);ui=i(xo,"The "),lo=s(xo,"A",{href:!0});var hd=a(lo);_i=i(hd,"ViltForImagesAndTextClassification"),hd.forEach(o),vi=i(xo," forward method, overrides the "),bn=s(xo,"CODE",{});var fd=a(bn);bi=i(fd,"__call__"),fd.forEach(o),Ti=i(xo," special method."),xo.forEach(o),ki=m(et),k(Oe.$$.fragment,et),yi=m(et),k(Ne.$$.fragment,et),et.forEach(o),wo.forEach(o),cs=m(t),he=s(t,"H2",{class:!0});var js=a(he);Se=s(js,"A",{id:!0,class:!0,href:!0});var gd=a(Se);Tn=s(gd,"SPAN",{});var ud=a(Tn);k(At.$$.fragment,ud),ud.forEach(o),gd.forEach(o),wi=m(js),kn=s(js,"SPAN",{});var _d=a(kn);xi=i(_d,"ViltForImageAndTextRetrieval"),_d.forEach(o),js.forEach(o),ms=m(t),I=s(t,"DIV",{class:!0});var tt=a(I);k(Ct.$$.fragment,tt),$i=m(tt),yn=s(tt,"P",{});var vd=a(yn);Vi=i(vd,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),vd.forEach(o),Fi=m(tt),qt=s(tt,"P",{});var zs=a(qt);Pi=i(zs,"This model is a PyTorch "),wn=s(zs,"CODE",{});var bd=a(wn);Mi=i(bd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),bd.forEach(o),ji=i(zs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zs.forEach(o),zi=m(tt),D=s(tt,"DIV",{class:!0});var ot=a(D);k(Ot.$$.fragment,ot),Ei=m(ot),fe=s(ot,"P",{});var $o=a(fe);Li=i($o,"The "),co=s($o,"A",{href:!0});var Td=a(co);Ii=i(Td,"ViltForImageAndTextRetrieval"),Td.forEach(o),Ai=i($o," forward method, overrides the "),xn=s($o,"CODE",{});var kd=a(xn);Ci=i(kd,"__call__"),kd.forEach(o),qi=i($o," special method."),$o.forEach(o),Oi=m(ot),k(De.$$.fragment,ot),Ni=m(ot),k(We.$$.fragment,ot),ot.forEach(o),tt.forEach(o),ps=m(t),ge=s(t,"H2",{class:!0});var Es=a(ge);Be=s(Es,"A",{id:!0,class:!0,href:!0});var yd=a(Be);$n=s(yd,"SPAN",{});var wd=a($n);k(Nt.$$.fragment,wd),wd.forEach(o),yd.forEach(o),Si=m(Es),Vn=s(Es,"SPAN",{});var xd=a(Vn);Di=i(xd,"ViltForTokenClassification"),xd.forEach(o),Es.forEach(o),hs=m(t),A=s(t,"DIV",{class:!0});var nt=a(A);k(St.$$.fragment,nt),Wi=m(nt),Fn=s(nt,"P",{});var $d=a(Fn);Bi=i($d,`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),$d.forEach(o),Ri=m(nt),Dt=s(nt,"P",{});var Ls=a(Dt);Qi=i(Ls,"This model is a PyTorch "),Pn=s(Ls,"CODE",{});var Vd=a(Pn);Ui=i(Vd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Vd.forEach(o),Hi=i(Ls,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls.forEach(o),Ki=m(nt),J=s(nt,"DIV",{class:!0});var Vo=a(J);k(Wt.$$.fragment,Vo),Gi=m(Vo),ue=s(Vo,"P",{});var Fo=a(ue);Ji=i(Fo,"The "),mo=s(Fo,"A",{href:!0});var Fd=a(mo);Xi=i(Fd,"ViltForTokenClassification"),Fd.forEach(o),Yi=i(Fo," forward method, overrides the "),Mn=s(Fo,"CODE",{});var Pd=a(Mn);Zi=i(Pd,"__call__"),Pd.forEach(o),el=i(Fo," special method."),Fo.forEach(o),tl=m(Vo),k(Re.$$.fragment,Vo),Vo.forEach(o),nt.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(Kd)),p(g,"id","vilt"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#vilt"),p(_,"class","relative group"),p(_e,"id","overview"),p(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_e,"href","#overview"),p(X,"class","relative group"),p(at,"href","https://arxiv.org/abs/2102.03334"),p(at,"rel","nofollow"),p(it,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ViLT"),p(it,"rel","nofollow"),p(Gt,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),p(Jt,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),Ld(be.src,nl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vilt_architecture.jpg")||p(be,"src",nl),p(be,"alt","drawing"),p(be,"width","600"),p(Xt,"href","https://arxiv.org/abs/2102.03334"),p(lt,"href","https://huggingface.co/nielsr"),p(lt,"rel","nofollow"),p(dt,"href","https://github.com/dandelin/ViLT"),p(dt,"rel","nofollow"),p(ke,"id","transformers.ViltConfig"),p(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ke,"href","#transformers.ViltConfig"),p(Z,"class","relative group"),p(pt,"href","https://huggingface.co/dandelin/vilt-b32-mlm"),p(pt,"rel","nofollow"),p(eo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(to,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(we,"id","transformers.models.vilt.image_processing_vilt.ViltImageProcessor"),p(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(we,"href","#transformers.models.vilt.image_processing_vilt.ViltImageProcessor"),p(oe,"class","relative group"),p(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($e,"id","transformers.ViltProcessor"),p($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($e,"href","#transformers.ViltProcessor"),p(ne,"class","relative group"),p(oo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),p(no,"href","/docs/transformers/main/en/model_doc/vilt#transformers.models.vilt.image_processing_vilt.ViltImageProcessor"),p(so,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),p(vt,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor.__call__"),p(Ve,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__"),p(Fe,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),p(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"id","transformers.ViltModel"),p(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pe,"href","#transformers.ViltModel"),p(ae,"class","relative group"),p(ao,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ze,"id","transformers.ViltForMaskedLM"),p(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ze,"href","#transformers.ViltForMaskedLM"),p(ie,"class","relative group"),p(ro,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForMaskedLM"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ie,"id","transformers.ViltForQuestionAnswering"),p(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ie,"href","#transformers.ViltForQuestionAnswering"),p(de,"class","relative group"),p(io,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForQuestionAnswering"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(qe,"id","transformers.ViltForImagesAndTextClassification"),p(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qe,"href","#transformers.ViltForImagesAndTextClassification"),p(me,"class","relative group"),p(lo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Se,"id","transformers.ViltForImageAndTextRetrieval"),p(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Se,"href","#transformers.ViltForImageAndTextRetrieval"),p(he,"class","relative group"),p(co,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImageAndTextRetrieval"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Be,"id","transformers.ViltForTokenClassification"),p(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Be,"href","#transformers.ViltForTokenClassification"),p(ge,"class","relative group"),p(mo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForTokenClassification"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,d),u(t,b,h),u(t,_,h),e(_,g),e(g,v),y(l,v,null),e(_,f),e(_,F),e(F,Is),u(t,Nn,h),u(t,X,h),e(X,_e),e(_e,Eo),y(st,Eo,null),e(X,As),e(X,Lo),e(Lo,Cs),u(t,Sn,h),u(t,ve,h),e(ve,qs),e(ve,at),e(at,Os),e(ve,Ns),u(t,Dn,h),u(t,Ut,h),e(Ut,Ss),u(t,Wn,h),u(t,Ht,h),e(Ht,Io),e(Io,Ds),u(t,Bn,h),u(t,Kt,h),e(Kt,Ws),u(t,Rn,h),u(t,C,h),e(C,rt),e(rt,Bs),e(rt,it),e(it,Rs),e(rt,Qs),e(C,Us),e(C,W),e(W,Hs),e(W,Ao),e(Ao,Ks),e(W,Gs),e(W,Co),e(Co,Js),e(W,Xs),e(W,Gt),e(Gt,Ys),e(W,Zs),e(C,ea),e(C,Y),e(Y,ta),e(Y,qo),e(qo,oa),e(Y,na),e(Y,Jt),e(Jt,sa),e(Y,aa),e(C,ra),e(C,Oo),e(Oo,ia),u(t,Qn,h),u(t,be,h),u(t,Un,h),u(t,Te,h),e(Te,la),e(Te,Xt),e(Xt,da),e(Te,ca),u(t,Hn,h),u(t,K,h),e(K,ma),e(K,lt),e(lt,pa),e(K,ha),e(K,dt),e(dt,fa),e(K,ga),u(t,Kn,h),u(t,Yt,h),e(Yt,ua),u(t,Gn,h),u(t,Zt,h),e(Zt,No),e(No,_a),u(t,Jn,h),u(t,Z,h),e(Z,ke),e(ke,So),y(ct,So,null),e(Z,va),e(Z,Do),e(Do,ba),u(t,Xn,h),u(t,j,h),y(mt,j,null),e(j,Ta),e(j,ee),e(ee,ka),e(ee,Wo),e(Wo,ya),e(ee,wa),e(ee,pt),e(pt,xa),e(ee,$a),e(j,Va),e(j,te),e(te,Fa),e(te,eo),e(eo,Pa),e(te,Ma),e(te,to),e(to,ja),e(te,za),e(j,Ea),y(ye,j,null),u(t,Yn,h),u(t,oe,h),e(oe,we),e(we,Bo),y(ht,Bo,null),e(oe,La),e(oe,Ro),e(Ro,Ia),u(t,Zn,h),u(t,B,h),y(ft,B,null),e(B,Aa),e(B,Qo),e(Qo,Ca),e(B,qa),e(B,xe),y(gt,xe,null),e(xe,Oa),e(xe,Uo),e(Uo,Na),u(t,es,h),u(t,ne,h),e(ne,$e),e($e,Ho),y(ut,Ho,null),e(ne,Sa),e(ne,Ko),e(Ko,Da),u(t,ts,h),u(t,z,h),y(_t,z,null),e(z,Wa),e(z,Go),e(Go,Ba),e(z,Ra),e(z,M),e(M,oo),e(oo,Qa),e(M,Ua),e(M,no),e(no,Ha),e(M,Ka),e(M,so),e(so,Ga),e(M,Ja),e(M,vt),e(vt,Jo),e(Jo,Xa),e(vt,Ya),e(M,Za),e(M,Xo),e(Xo,er),e(M,tr),e(z,or),e(z,G),y(bt,G,null),e(G,nr),e(G,se),e(se,sr),e(se,Ve),e(Ve,ar),e(Ve,Yo),e(Yo,rr),e(Ve,ir),e(se,lr),e(se,Fe),e(Fe,dr),e(Fe,Zo),e(Zo,cr),e(Fe,mr),e(se,pr),e(G,hr),e(G,en),e(en,fr),u(t,os,h),u(t,ae,h),e(ae,Pe),e(Pe,tn),y(Tt,tn,null),e(ae,gr),e(ae,on),e(on,ur),u(t,ns,h),u(t,R,h),y(kt,R,null),e(R,_r),e(R,yt),e(yt,vr),e(yt,nn),e(nn,br),e(yt,Tr),e(R,kr),e(R,q),y(wt,q,null),e(q,yr),e(q,re),e(re,wr),e(re,ao),e(ao,xr),e(re,$r),e(re,sn),e(sn,Vr),e(re,Fr),e(q,Pr),y(Me,q,null),e(q,Mr),y(je,q,null),u(t,ss,h),u(t,ie,h),e(ie,ze),e(ze,an),y(xt,an,null),e(ie,jr),e(ie,rn),e(rn,zr),u(t,as,h),u(t,E,h),y($t,E,null),e(E,Er),e(E,ln),e(ln,Lr),e(E,Ir),e(E,Vt),e(Vt,Ar),e(Vt,dn),e(dn,Cr),e(Vt,qr),e(E,Or),e(E,O),y(Ft,O,null),e(O,Nr),e(O,le),e(le,Sr),e(le,ro),e(ro,Dr),e(le,Wr),e(le,cn),e(cn,Br),e(le,Rr),e(O,Qr),y(Ee,O,null),e(O,Ur),y(Le,O,null),u(t,rs,h),u(t,de,h),e(de,Ie),e(Ie,mn),y(Pt,mn,null),e(de,Hr),e(de,pn),e(pn,Kr),u(t,is,h),u(t,L,h),y(Mt,L,null),e(L,Gr),e(L,hn),e(hn,Jr),e(L,Xr),e(L,jt),e(jt,Yr),e(jt,fn),e(fn,Zr),e(jt,ei),e(L,ti),e(L,N),y(zt,N,null),e(N,oi),e(N,ce),e(ce,ni),e(ce,io),e(io,si),e(ce,ai),e(ce,gn),e(gn,ri),e(ce,ii),e(N,li),y(Ae,N,null),e(N,di),y(Ce,N,null),u(t,ls,h),u(t,me,h),e(me,qe),e(qe,un),y(Et,un,null),e(me,ci),e(me,_n),e(_n,mi),u(t,ds,h),u(t,Q,h),y(Lt,Q,null),e(Q,pi),e(Q,vn),e(vn,hi),e(Q,fi),e(Q,S),y(It,S,null),e(S,gi),e(S,pe),e(pe,ui),e(pe,lo),e(lo,_i),e(pe,vi),e(pe,bn),e(bn,bi),e(pe,Ti),e(S,ki),y(Oe,S,null),e(S,yi),y(Ne,S,null),u(t,cs,h),u(t,he,h),e(he,Se),e(Se,Tn),y(At,Tn,null),e(he,wi),e(he,kn),e(kn,xi),u(t,ms,h),u(t,I,h),y(Ct,I,null),e(I,$i),e(I,yn),e(yn,Vi),e(I,Fi),e(I,qt),e(qt,Pi),e(qt,wn),e(wn,Mi),e(qt,ji),e(I,zi),e(I,D),y(Ot,D,null),e(D,Ei),e(D,fe),e(fe,Li),e(fe,co),e(co,Ii),e(fe,Ai),e(fe,xn),e(xn,Ci),e(fe,qi),e(D,Oi),y(De,D,null),e(D,Ni),y(We,D,null),u(t,ps,h),u(t,ge,h),e(ge,Be),e(Be,$n),y(Nt,$n,null),e(ge,Si),e(ge,Vn),e(Vn,Di),u(t,hs,h),u(t,A,h),y(St,A,null),e(A,Wi),e(A,Fn),e(Fn,Bi),e(A,Ri),e(A,Dt),e(Dt,Qi),e(Dt,Pn),e(Pn,Ui),e(Dt,Hi),e(A,Ki),e(A,J),y(Wt,J,null),e(J,Gi),e(J,ue),e(ue,Ji),e(ue,mo),e(mo,Xi),e(ue,Yi),e(ue,Mn),e(Mn,Zi),e(ue,el),e(J,tl),y(Re,J,null),fs=!0},p(t,[h]){const Bt={};h&2&&(Bt.$$scope={dirty:h,ctx:t}),ye.$set(Bt);const jn={};h&2&&(jn.$$scope={dirty:h,ctx:t}),Me.$set(jn);const zn={};h&2&&(zn.$$scope={dirty:h,ctx:t}),je.$set(zn);const En={};h&2&&(En.$$scope={dirty:h,ctx:t}),Ee.$set(En);const Rt={};h&2&&(Rt.$$scope={dirty:h,ctx:t}),Le.$set(Rt);const Ln={};h&2&&(Ln.$$scope={dirty:h,ctx:t}),Ae.$set(Ln);const In={};h&2&&(In.$$scope={dirty:h,ctx:t}),Ce.$set(In);const An={};h&2&&(An.$$scope={dirty:h,ctx:t}),Oe.$set(An);const Qt={};h&2&&(Qt.$$scope={dirty:h,ctx:t}),Ne.$set(Qt);const Cn={};h&2&&(Cn.$$scope={dirty:h,ctx:t}),De.$set(Cn);const qn={};h&2&&(qn.$$scope={dirty:h,ctx:t}),We.$set(qn);const On={};h&2&&(On.$$scope={dirty:h,ctx:t}),Re.$set(On)},i(t){fs||(w(l.$$.fragment,t),w(st.$$.fragment,t),w(ct.$$.fragment,t),w(mt.$$.fragment,t),w(ye.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(ut.$$.fragment,t),w(_t.$$.fragment,t),w(bt.$$.fragment,t),w(Tt.$$.fragment,t),w(kt.$$.fragment,t),w(wt.$$.fragment,t),w(Me.$$.fragment,t),w(je.$$.fragment,t),w(xt.$$.fragment,t),w($t.$$.fragment,t),w(Ft.$$.fragment,t),w(Ee.$$.fragment,t),w(Le.$$.fragment,t),w(Pt.$$.fragment,t),w(Mt.$$.fragment,t),w(zt.$$.fragment,t),w(Ae.$$.fragment,t),w(Ce.$$.fragment,t),w(Et.$$.fragment,t),w(Lt.$$.fragment,t),w(It.$$.fragment,t),w(Oe.$$.fragment,t),w(Ne.$$.fragment,t),w(At.$$.fragment,t),w(Ct.$$.fragment,t),w(Ot.$$.fragment,t),w(De.$$.fragment,t),w(We.$$.fragment,t),w(Nt.$$.fragment,t),w(St.$$.fragment,t),w(Wt.$$.fragment,t),w(Re.$$.fragment,t),fs=!0)},o(t){x(l.$$.fragment,t),x(st.$$.fragment,t),x(ct.$$.fragment,t),x(mt.$$.fragment,t),x(ye.$$.fragment,t),x(ht.$$.fragment,t),x(ft.$$.fragment,t),x(gt.$$.fragment,t),x(ut.$$.fragment,t),x(_t.$$.fragment,t),x(bt.$$.fragment,t),x(Tt.$$.fragment,t),x(kt.$$.fragment,t),x(wt.$$.fragment,t),x(Me.$$.fragment,t),x(je.$$.fragment,t),x(xt.$$.fragment,t),x($t.$$.fragment,t),x(Ft.$$.fragment,t),x(Ee.$$.fragment,t),x(Le.$$.fragment,t),x(Pt.$$.fragment,t),x(Mt.$$.fragment,t),x(zt.$$.fragment,t),x(Ae.$$.fragment,t),x(Ce.$$.fragment,t),x(Et.$$.fragment,t),x(Lt.$$.fragment,t),x(It.$$.fragment,t),x(Oe.$$.fragment,t),x(Ne.$$.fragment,t),x(At.$$.fragment,t),x(Ct.$$.fragment,t),x(Ot.$$.fragment,t),x(De.$$.fragment,t),x(We.$$.fragment,t),x(Nt.$$.fragment,t),x(St.$$.fragment,t),x(Wt.$$.fragment,t),x(Re.$$.fragment,t),fs=!1},d(t){o(d),t&&o(b),t&&o(_),$(l),t&&o(Nn),t&&o(X),$(st),t&&o(Sn),t&&o(ve),t&&o(Dn),t&&o(Ut),t&&o(Wn),t&&o(Ht),t&&o(Bn),t&&o(Kt),t&&o(Rn),t&&o(C),t&&o(Qn),t&&o(be),t&&o(Un),t&&o(Te),t&&o(Hn),t&&o(K),t&&o(Kn),t&&o(Yt),t&&o(Gn),t&&o(Zt),t&&o(Jn),t&&o(Z),$(ct),t&&o(Xn),t&&o(j),$(mt),$(ye),t&&o(Yn),t&&o(oe),$(ht),t&&o(Zn),t&&o(B),$(ft),$(gt),t&&o(es),t&&o(ne),$(ut),t&&o(ts),t&&o(z),$(_t),$(bt),t&&o(os),t&&o(ae),$(Tt),t&&o(ns),t&&o(R),$(kt),$(wt),$(Me),$(je),t&&o(ss),t&&o(ie),$(xt),t&&o(as),t&&o(E),$($t),$(Ft),$(Ee),$(Le),t&&o(rs),t&&o(de),$(Pt),t&&o(is),t&&o(L),$(Mt),$(zt),$(Ae),$(Ce),t&&o(ls),t&&o(me),$(Et),t&&o(ds),t&&o(Q),$(Lt),$(It),$(Oe),$(Ne),t&&o(cs),t&&o(he),$(At),t&&o(ms),t&&o(I),$(Ct),$(Ot),$(De),$(We),t&&o(ps),t&&o(ge),$(Nt),t&&o(hs),t&&o(A),$(St),$(Wt),$(Re)}}}const Kd={local:"vilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViltConfig",title:"ViltConfig"},{local:"transformers.models.vilt.image_processing_vilt.ViltImageProcessor",title:"ViltFeatureExtractor"},{local:"transformers.ViltProcessor",title:"ViltProcessor"},{local:"transformers.ViltModel",title:"ViltModel"},{local:"transformers.ViltForMaskedLM",title:"ViltForMaskedLM"},{local:"transformers.ViltForQuestionAnswering",title:"ViltForQuestionAnswering"},{local:"transformers.ViltForImagesAndTextClassification",title:"ViltForImagesAndTextClassification"},{local:"transformers.ViltForImageAndTextRetrieval",title:"ViltForImageAndTextRetrieval"},{local:"transformers.ViltForTokenClassification",title:"ViltForTokenClassification"}],title:"ViLT"};function Gd(V){return Id(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oc extends Md{constructor(d){super();jd(this,d,Gd,Hd,zd,{})}}export{oc as default,Kd as metadata};
