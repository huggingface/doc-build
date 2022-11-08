import{S as nc,i as sc,s as ac,e as n,k as c,w as T,t as r,M as rc,c as s,d as o,m,a,x as y,h as i,b as p,N as ic,G as e,g,y as k,q as w,o as x,B as $,v as lc,L as Oo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ao}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as No}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as R}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as qo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function dc(V){let d,b,_,u,v;return u=new No({props:{code:`from transformers import ViLTModel, ViLTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=r("Example:"),_=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Example:"),f.forEach(o),_=m(l),y(u.$$.fragment,l)},m(l,f){g(l,d,f),e(d,b),g(l,_,f),k(u,l,f),v=!0},p:Oo,i(l){v||(w(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(u,l)}}}function cc(V){let d,b,_,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){g(l,d,f),e(d,b),e(d,_),e(_,u),e(d,v)},d(l){l&&o(d)}}}function mc(V){let d,b,_,u,v;return u=new No({props:{code:`from transformers import ViltProcessor, ViltModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),y(u.$$.fragment,l)},m(l,f){g(l,d,f),e(d,b),g(l,_,f),k(u,l,f),v=!0},p:Oo,i(l){v||(w(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(u,l)}}}function pc(V){let d,b,_,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){g(l,d,f),e(d,b),e(d,_),e(_,u),e(d,v)},d(l){l&&o(d)}}}function hc(V){let d,b,_,u,v;return u=new No({props:{code:`from transformers import ViltProcessor, ViltForMaskedLM
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
a bunch of cats laying on a couch.`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),y(u.$$.fragment,l)},m(l,f){g(l,d,f),e(d,b),g(l,_,f),k(u,l,f),v=!0},p:Oo,i(l){v||(w(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(u,l)}}}function fc(V){let d,b,_,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){g(l,d,f),e(d,b),e(d,_),e(_,u),e(d,v)},d(l){l&&o(d)}}}function gc(V){let d,b,_,u,v;return u=new No({props:{code:`from transformers import ViltProcessor, ViltForQuestionAnswering
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
Predicted answer: <span class="hljs-number">2</span>`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),y(u.$$.fragment,l)},m(l,f){g(l,d,f),e(d,b),g(l,_,f),k(u,l,f),v=!0},p:Oo,i(l){v||(w(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(u,l)}}}function uc(V){let d,b,_,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){g(l,d,f),e(d,b),e(d,_),e(_,u),e(d,v)},d(l){l&&o(d)}}}function _c(V){let d,b,_,u,v;return u=new No({props:{code:`from transformers import ViltProcessor, ViltForImagesAndTextClassification
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
Predicted answer: <span class="hljs-literal">True</span>`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),y(u.$$.fragment,l)},m(l,f){g(l,d,f),e(d,b),g(l,_,f),k(u,l,f),v=!0},p:Oo,i(l){v||(w(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(u,l)}}}function vc(V){let d,b,_,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){g(l,d,f),e(d,b),e(d,_),e(_,u),e(d,v)},d(l){l&&o(d)}}}function bc(V){let d,b,_,u,v;return u=new No({props:{code:`from transformers import ViltProcessor, ViltForImageAndTextRetrieval
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
<span class="hljs-meta">... </span>    scores[text] = outputs.logits[<span class="hljs-number">0</span>, :].item()`}}),{c(){d=n("p"),b=r("Examples:"),_=c(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Examples:"),f.forEach(o),_=m(l),y(u.$$.fragment,l)},m(l,f){g(l,d,f),e(d,b),g(l,_,f),k(u,l,f),v=!0},p:Oo,i(l){v||(w(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(_),$(u,l)}}}function Tc(V){let d,b,_,u,v;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(f,"CODE",{});var F=a(_);u=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){g(l,d,f),e(d,b),e(d,_),e(_,u),e(d,v)},d(l){l&&o(d)}}}function yc(V){let d,b,_,u,v,l,f,F,Js,Yn,X,be,So,lt,Ys,Do,Xs,Xn,Te,Zs,dt,ea,ta,Zn,Zt,oa,es,eo,Ro,na,ts,to,sa,os,A,ct,aa,mt,ra,ia,la,W,da,Wo,ca,ma,Bo,pa,ha,oo,fa,ga,ua,Z,_a,Uo,va,ba,no,Ta,ya,ka,Qo,wa,ns,ye,Vl,ss,ke,xa,so,$a,Va,as,G,Fa,pt,za,Pa,ht,Ia,Ma,rs,ao,La,is,ro,Ho,Ea,ls,ee,we,Ko,ft,Ca,Go,ja,ds,I,gt,Aa,te,qa,Jo,Oa,Na,ut,Sa,Da,Ra,oe,Wa,io,Ba,Ua,lo,Qa,Ha,Ka,xe,cs,ne,$e,Yo,_t,Ga,Xo,Ja,ms,B,vt,Ya,Zo,Xa,Za,Ve,bt,er,en,tr,ps,se,Fe,tn,Tt,or,on,nr,hs,U,yt,sr,nn,ar,rr,ze,kt,ir,sn,lr,fs,ae,Pe,an,wt,dr,rn,cr,gs,M,xt,mr,ln,pr,hr,P,co,fr,gr,mo,ur,_r,po,vr,br,$t,dn,Tr,yr,kr,cn,wr,xr,$r,J,Vt,Vr,re,Fr,Ie,zr,mn,Pr,Ir,Mr,Me,Lr,pn,Er,Cr,jr,Ar,hn,qr,us,ie,Le,fn,Ft,Or,gn,Nr,_s,Q,zt,Sr,Pt,Dr,un,Rr,Wr,Br,q,It,Ur,le,Qr,ho,Hr,Kr,_n,Gr,Jr,Yr,Ee,Xr,Ce,vs,de,je,vn,Mt,Zr,bn,ei,bs,L,Lt,ti,Tn,oi,ni,Et,si,yn,ai,ri,ii,O,Ct,li,ce,di,fo,ci,mi,kn,pi,hi,fi,Ae,gi,qe,Ts,me,Oe,wn,jt,ui,xn,_i,ys,E,At,vi,$n,bi,Ti,qt,yi,Vn,ki,wi,xi,N,Ot,$i,pe,Vi,go,Fi,zi,Fn,Pi,Ii,Mi,Ne,Li,Se,ks,he,De,zn,Nt,Ei,Pn,Ci,ws,H,St,ji,In,Ai,qi,S,Dt,Oi,fe,Ni,uo,Si,Di,Mn,Ri,Wi,Bi,Re,Ui,We,xs,ge,Be,Ln,Rt,Qi,En,Hi,$s,C,Wt,Ki,Cn,Gi,Ji,Bt,Yi,jn,Xi,Zi,el,D,Ut,tl,ue,ol,_o,nl,sl,An,al,rl,il,Ue,ll,Qe,Vs,_e,He,qn,Qt,dl,On,cl,Fs,j,Ht,ml,Nn,pl,hl,Kt,fl,Sn,gl,ul,_l,Y,Gt,vl,ve,bl,vo,Tl,yl,Dn,kl,wl,xl,Ke,zs;return l=new R({}),lt=new R({}),ft=new R({}),gt=new z({props:{name:"class transformers.ViltConfig",anchor:"transformers.ViltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"type_vocab_size",val:" = 2"},{name:"modality_type_vocab_size",val:" = 2"},{name:"max_position_embeddings",val:" = 40"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 32"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"max_image_length",val:" = -1"},{name:"tie_word_embeddings",val:" = False"},{name:"num_images",val:" = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
used by <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> for defining the classifier head.`,name:"num_images"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/configuration_vilt.py#L28"}}),xe=new qo({props:{anchor:"transformers.ViltConfig.example",$$slots:{default:[dc]},$$scope:{ctx:V}}}),_t=new R({}),vt=new z({props:{name:"class transformers.ViltImageProcessor",anchor:"transformers.ViltImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"size_divisor",val:": int = 32"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_pad",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.ViltImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 384}</code>):
Resize the shorter side of the input to <code>size[&quot;shortest_edge&quot;]</code>. The longer side will be limited to under
<code>int((1333 / 800) * size[&quot;shortest_edge&quot;])</code> while preserving the aspect ratio. Only has an effect if
<code>do_resize</code> is set to <code>True</code>. Can be overridden by the <code>size</code> parameter in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.ViltImageProcessor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size by which to make sure both the height and width can be divided. Only has an effect if <code>do_resize</code>
is set to <code>True</code>. Can be overridden by the <code>size_divisor</code> parameter in the <code>preprocess</code> method.`,name:"size_divisor"},{anchor:"transformers.ViltImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Only has an effect if <code>do_resize</code> is set to <code>True</code>. Can be
overridden by the <code>resample</code> parameter in the <code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.ViltImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Wwhether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the
<code>do_rescale</code> parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.ViltImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Only has an effect if <code>do_rescale</code> is set to <code>True</code>. Can be
overridden by the <code>rescale_factor</code> parameter in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.ViltImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code> method.`,name:"do_normalize"},{anchor:"transformers.ViltImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method. Can be
overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.ViltImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.
Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"},{anchor:"transformers.ViltImageProcessor.do_pad",description:`<strong>do_pad</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to pad the image to the <code>(max_height, max_width)</code> of the images in the batch. Can be overridden by
the <code>do_pad</code> parameter in the <code>preprocess</code> method.`,name:"do_pad"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/image_processing_vilt.py#L154"}}),bt=new z({props:{name:"__call__",anchor:"transformers.ViltImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L435"}}),Tt=new R({}),yt=new z({props:{name:"class transformers.ViltImageProcessor",anchor:"transformers.ViltImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"size_divisor",val:": int = 32"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_pad",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.ViltImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 384}</code>):
Resize the shorter side of the input to <code>size[&quot;shortest_edge&quot;]</code>. The longer side will be limited to under
<code>int((1333 / 800) * size[&quot;shortest_edge&quot;])</code> while preserving the aspect ratio. Only has an effect if
<code>do_resize</code> is set to <code>True</code>. Can be overridden by the <code>size</code> parameter in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.ViltImageProcessor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size by which to make sure both the height and width can be divided. Only has an effect if <code>do_resize</code>
is set to <code>True</code>. Can be overridden by the <code>size_divisor</code> parameter in the <code>preprocess</code> method.`,name:"size_divisor"},{anchor:"transformers.ViltImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Only has an effect if <code>do_resize</code> is set to <code>True</code>. Can be
overridden by the <code>resample</code> parameter in the <code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.ViltImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Wwhether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the
<code>do_rescale</code> parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.ViltImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Only has an effect if <code>do_rescale</code> is set to <code>True</code>. Can be
overridden by the <code>rescale_factor</code> parameter in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.ViltImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code> method.`,name:"do_normalize"},{anchor:"transformers.ViltImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method. Can be
overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.ViltImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.
Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"},{anchor:"transformers.ViltImageProcessor.do_pad",description:`<strong>do_pad</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to pad the image to the <code>(max_height, max_width)</code> of the images in the batch. Can be overridden by
the <code>do_pad</code> parameter in the <code>preprocess</code> method.`,name:"do_pad"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/image_processing_vilt.py#L154"}}),kt=new z({props:{name:"preprocess",anchor:"transformers.ViltImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": typing.Optional[bool] = None"},{name:"size",val:": typing.Union[typing.Dict[str, int], NoneType] = None"},{name:"size_divisor",val:": typing.Optional[int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_rescale",val:": typing.Optional[bool] = None"},{name:"rescale_factor",val:": typing.Optional[float] = None"},{name:"do_normalize",val:": typing.Optional[bool] = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_pad",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.ViltImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.ViltImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Controls the size of the image after <code>resize</code>. The shortest edge of the image is resized to
<code>size[&quot;shortest_edge&quot;]</code> whilst preserving the aspect ratio. If the longest edge of this resized image
is &gt; <code>int(size[&quot;shortest_edge&quot;] * (1333 / 800))</code>, then the image is resized again to make the longest
edge equal to <code>int(size[&quot;shortest_edge&quot;] * (1333 / 800))</code>.`,name:"size"},{anchor:"transformers.ViltImageProcessor.preprocess.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.size_divisor</code>) &#x2014;
The image is resized to a size that is a multiple of this value.`,name:"size_divisor"},{anchor:"transformers.ViltImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViltImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image values between [0 - 1].`,name:"do_rescale"},{anchor:"transformers.ViltImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.ViltImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.ViltImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean to normalize the image by if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_mean"},{anchor:"transformers.ViltImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation to normalize the image by if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_std"},{anchor:"transformers.ViltImageProcessor.preprocess.do_pad",description:`<strong>do_pad</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_pad</code>) &#x2014;
Whether to pad the image to the (max_height, max_width) in the batch. If <code>True</code>, a pixel mask is also
created and returned.`,name:"do_pad"},{anchor:"transformers.ViltImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.ViltImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/image_processing_vilt.py#L377"}}),wt=new R({}),xt=new z({props:{name:"class transformers.ViltProcessor",anchor:"transformers.ViltProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.ViltProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>ViltFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.ViltProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L26"}}),Vt=new z({props:{name:"__call__",anchor:"transformers.ViltProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L46"}}),Ft=new R({}),zt=new z({props:{name:"class transformers.ViltModel",anchor:"transformers.ViltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ViltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L727"}}),It=new z({props:{name:"forward",anchor:"transformers.ViltModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_token_type_idx",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
`}}),Ee=new Ao({props:{$$slots:{default:[cc]},$$scope:{ctx:V}}}),Ce=new qo({props:{anchor:"transformers.ViltModel.forward.example",$$slots:{default:[mc]},$$scope:{ctx:V}}}),Mt=new R({}),Lt=new z({props:{name:"class transformers.ViltForMaskedLM",anchor:"transformers.ViltForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L892"}}),Ct=new z({props:{name:"forward",anchor:"transformers.ViltForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
`}}),Ae=new Ao({props:{$$slots:{default:[pc]},$$scope:{ctx:V}}}),qe=new qo({props:{anchor:"transformers.ViltForMaskedLM.forward.example",$$slots:{default:[hc]},$$scope:{ctx:V}}}),jt=new R({}),At=new z({props:{name:"class transformers.ViltForQuestionAnswering",anchor:"transformers.ViltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1064"}}),Ot=new z({props:{name:"forward",anchor:"transformers.ViltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
`}}),Ne=new Ao({props:{$$slots:{default:[fc]},$$scope:{ctx:V}}}),Se=new qo({props:{anchor:"transformers.ViltForQuestionAnswering.forward.example",$$slots:{default:[gc]},$$scope:{ctx:V}}}),Nt=new R({}),St=new z({props:{name:"class transformers.ViltForImagesAndTextClassification",anchor:"transformers.ViltForImagesAndTextClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_images, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1274"}}),Dt=new z({props:{name:"forward",anchor:"transformers.ViltForImagesAndTextClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
`}}),Re=new Ao({props:{$$slots:{default:[uc]},$$scope:{ctx:V}}}),We=new qo({props:{anchor:"transformers.ViltForImagesAndTextClassification.forward.example",$$slots:{default:[_c]},$$scope:{ctx:V}}}),Rt=new R({}),Wt=new z({props:{name:"class transformers.ViltForImageAndTextRetrieval",anchor:"transformers.ViltForImageAndTextRetrieval",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1175"}}),Ut=new z({props:{name:"forward",anchor:"transformers.ViltForImageAndTextRetrieval.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
`}}),Ue=new Ao({props:{$$slots:{default:[vc]},$$scope:{ctx:V}}}),Qe=new qo({props:{anchor:"transformers.ViltForImageAndTextRetrieval.forward.example",$$slots:{default:[bc]},$$scope:{ctx:V}}}),Qt=new R({}),Ht=new z({props:{name:"class transformers.ViltForTokenClassification",anchor:"transformers.ViltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1414"}}),Gt=new z({props:{name:"forward",anchor:"transformers.ViltForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"image_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForTokenClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
`}}),Ke=new Ao({props:{$$slots:{default:[Tc]},$$scope:{ctx:V}}}),{c(){d=n("meta"),b=c(),_=n("h1"),u=n("a"),v=n("span"),T(l.$$.fragment),f=c(),F=n("span"),Js=r("ViLT"),Yn=c(),X=n("h2"),be=n("a"),So=n("span"),T(lt.$$.fragment),Ys=c(),Do=n("span"),Xs=r("Overview"),Xn=c(),Te=n("p"),Zs=r("The ViLT model was proposed in "),dt=n("a"),ea=r("ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),ta=r(`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Zn=c(),Zt=n("p"),oa=r("The abstract from the paper is the following:"),es=c(),eo=n("p"),Ro=n("em"),na=r(`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),ts=c(),to=n("p"),sa=r("Tips:"),os=c(),A=n("ul"),ct=n("li"),aa=r("The quickest way to get started with ViLT is by checking the "),mt=n("a"),ra=r("example notebooks"),ia=r(`
(which showcase both inference and fine-tuning on custom data).`),la=c(),W=n("li"),da=r("ViLT is a model that takes both "),Wo=n("code"),ca=r("pixel_values"),ma=r(" and "),Bo=n("code"),pa=r("input_ids"),ha=r(" as input. One can use "),oo=n("a"),fa=r("ViltProcessor"),ga=r(` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),ua=c(),Z=n("li"),_a=r(`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),Uo=n("code"),va=r("pixel_mask"),ba=r(` that indicates
which pixel values are real and which are padding. `),no=n("a"),Ta=r("ViltProcessor"),ya=r(" automatically creates this for you."),ka=c(),Qo=n("li"),wa=r(`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),ns=c(),ye=n("img"),ss=c(),ke=n("small"),xa=r("ViLT architecture. Taken from the "),so=n("a"),$a=r("original paper"),Va=r("."),as=c(),G=n("p"),Fa=r("This model was contributed by "),pt=n("a"),za=r("nielsr"),Pa=r(". The original code can be found "),ht=n("a"),Ia=r("here"),Ma=r("."),rs=c(),ao=n("p"),La=r("Tips:"),is=c(),ro=n("ul"),Ho=n("li"),Ea=r("The PyTorch version of this model is only available in torch 1.10 and higher."),ls=c(),ee=n("h2"),we=n("a"),Ko=n("span"),T(ft.$$.fragment),Ca=c(),Go=n("span"),ja=r("ViltConfig"),ds=c(),I=n("div"),T(gt.$$.fragment),Aa=c(),te=n("p"),qa=r("This is the configuration class to store the configuration of a "),Jo=n("code"),Oa=r("ViLTModel"),Na=r(`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),ut=n("a"),Sa=r("dandelin/vilt-b32-mlm"),Da=r(" architecture."),Ra=c(),oe=n("p"),Wa=r("Configuration objects inherit from "),io=n("a"),Ba=r("PretrainedConfig"),Ua=r(` and can be used to control the model outputs. Read the
documentation from `),lo=n("a"),Qa=r("PretrainedConfig"),Ha=r(" for more information."),Ka=c(),T(xe.$$.fragment),cs=c(),ne=n("h2"),$e=n("a"),Yo=n("span"),T(_t.$$.fragment),Ga=c(),Xo=n("span"),Ja=r("ViltFeatureExtractor"),ms=c(),B=n("div"),T(vt.$$.fragment),Ya=c(),Zo=n("p"),Xa=r("Constructs a ViLT image processor."),Za=c(),Ve=n("div"),T(bt.$$.fragment),er=c(),en=n("p"),tr=r("Preprocess an image or a batch of images."),ps=c(),se=n("h2"),Fe=n("a"),tn=n("span"),T(Tt.$$.fragment),or=c(),on=n("span"),nr=r("ViltImageProcessor"),hs=c(),U=n("div"),T(yt.$$.fragment),sr=c(),nn=n("p"),ar=r("Constructs a ViLT image processor."),rr=c(),ze=n("div"),T(kt.$$.fragment),ir=c(),sn=n("p"),lr=r("Preprocess an image or batch of images."),fs=c(),ae=n("h2"),Pe=n("a"),an=n("span"),T(wt.$$.fragment),dr=c(),rn=n("span"),cr=r("ViltProcessor"),gs=c(),M=n("div"),T(xt.$$.fragment),mr=c(),ln=n("p"),pr=r("Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),hr=c(),P=n("p"),co=n("a"),fr=r("ViltProcessor"),gr=r(" offers all the functionalities of "),mo=n("a"),ur=r("ViltFeatureExtractor"),_r=r(" and "),po=n("a"),vr=r("BertTokenizerFast"),br=r(`. See the
docstring of `),$t=n("a"),dn=n("strong"),Tr=r("call"),yr=r("()"),kr=r(" and "),cn=n("code"),wr=r("decode()"),xr=r(" for more information."),$r=c(),J=n("div"),T(Vt.$$.fragment),Vr=c(),re=n("p"),Fr=r("This method uses "),Ie=n("a"),zr=r("ViltFeatureExtractor."),mn=n("strong"),Pr=r("call"),Ir=r("()"),Mr=r(` method to prepare image(s) for the model, and
`),Me=n("a"),Lr=r("BertTokenizerFast."),pn=n("strong"),Er=r("call"),Cr=r("()"),jr=r(" to prepare text for the model."),Ar=c(),hn=n("p"),qr=r("Please refer to the docstring of the above two methods for more information."),us=c(),ie=n("h2"),Le=n("a"),fn=n("span"),T(Ft.$$.fragment),Or=c(),gn=n("span"),Nr=r("ViltModel"),_s=c(),Q=n("div"),T(zt.$$.fragment),Sr=c(),Pt=n("p"),Dr=r(`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),un=n("code"),Rr=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Wr=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Br=c(),q=n("div"),T(It.$$.fragment),Ur=c(),le=n("p"),Qr=r("The "),ho=n("a"),Hr=r("ViltModel"),Kr=r(" forward method, overrides the "),_n=n("code"),Gr=r("__call__"),Jr=r(" special method."),Yr=c(),T(Ee.$$.fragment),Xr=c(),T(Ce.$$.fragment),vs=c(),de=n("h2"),je=n("a"),vn=n("span"),T(Mt.$$.fragment),Zr=c(),bn=n("span"),ei=r("ViltForMaskedLM"),bs=c(),L=n("div"),T(Lt.$$.fragment),ti=c(),Tn=n("p"),oi=r("ViLT Model with a language modeling head on top as done during pretraining."),ni=c(),Et=n("p"),si=r("This model is a PyTorch "),yn=n("code"),ai=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ri=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ii=c(),O=n("div"),T(Ct.$$.fragment),li=c(),ce=n("p"),di=r("The "),fo=n("a"),ci=r("ViltForMaskedLM"),mi=r(" forward method, overrides the "),kn=n("code"),pi=r("__call__"),hi=r(" special method."),fi=c(),T(Ae.$$.fragment),gi=c(),T(qe.$$.fragment),Ts=c(),me=n("h2"),Oe=n("a"),wn=n("span"),T(jt.$$.fragment),ui=c(),xn=n("span"),_i=r("ViltForQuestionAnswering"),ys=c(),E=n("div"),T(At.$$.fragment),vi=c(),$n=n("p"),bi=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),Ti=c(),qt=n("p"),yi=r("This model is a PyTorch "),Vn=n("code"),ki=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),wi=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xi=c(),N=n("div"),T(Ot.$$.fragment),$i=c(),pe=n("p"),Vi=r("The "),go=n("a"),Fi=r("ViltForQuestionAnswering"),zi=r(" forward method, overrides the "),Fn=n("code"),Pi=r("__call__"),Ii=r(" special method."),Mi=c(),T(Ne.$$.fragment),Li=c(),T(Se.$$.fragment),ks=c(),he=n("h2"),De=n("a"),zn=n("span"),T(Nt.$$.fragment),Ei=c(),Pn=n("span"),Ci=r("ViltForImagesAndTextClassification"),ws=c(),H=n("div"),T(St.$$.fragment),ji=c(),In=n("p"),Ai=r("Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),qi=c(),S=n("div"),T(Dt.$$.fragment),Oi=c(),fe=n("p"),Ni=r("The "),uo=n("a"),Si=r("ViltForImagesAndTextClassification"),Di=r(" forward method, overrides the "),Mn=n("code"),Ri=r("__call__"),Wi=r(" special method."),Bi=c(),T(Re.$$.fragment),Ui=c(),T(We.$$.fragment),xs=c(),ge=n("h2"),Be=n("a"),Ln=n("span"),T(Rt.$$.fragment),Qi=c(),En=n("span"),Hi=r("ViltForImageAndTextRetrieval"),$s=c(),C=n("div"),T(Wt.$$.fragment),Ki=c(),Cn=n("p"),Gi=r(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),Ji=c(),Bt=n("p"),Yi=r("This model is a PyTorch "),jn=n("code"),Xi=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Zi=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),el=c(),D=n("div"),T(Ut.$$.fragment),tl=c(),ue=n("p"),ol=r("The "),_o=n("a"),nl=r("ViltForImageAndTextRetrieval"),sl=r(" forward method, overrides the "),An=n("code"),al=r("__call__"),rl=r(" special method."),il=c(),T(Ue.$$.fragment),ll=c(),T(Qe.$$.fragment),Vs=c(),_e=n("h2"),He=n("a"),qn=n("span"),T(Qt.$$.fragment),dl=c(),On=n("span"),cl=r("ViltForTokenClassification"),Fs=c(),j=n("div"),T(Ht.$$.fragment),ml=c(),Nn=n("p"),pl=r(`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),hl=c(),Kt=n("p"),fl=r("This model is a PyTorch "),Sn=n("code"),gl=r("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ul=r(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l=c(),Y=n("div"),T(Gt.$$.fragment),vl=c(),ve=n("p"),bl=r("The "),vo=n("a"),Tl=r("ViltForTokenClassification"),yl=r(" forward method, overrides the "),Dn=n("code"),kl=r("__call__"),wl=r(" special method."),xl=c(),T(Ke.$$.fragment),this.h()},l(t){const h=rc('[data-svelte="svelte-1phssyn"]',document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(o),b=m(t),_=s(t,"H1",{class:!0});var Jt=a(_);u=s(Jt,"A",{id:!0,class:!0,href:!0});var Rn=a(u);v=s(Rn,"SPAN",{});var Wn=a(v);y(l.$$.fragment,Wn),Wn.forEach(o),Rn.forEach(o),f=m(Jt),F=s(Jt,"SPAN",{});var Bn=a(F);Js=i(Bn,"ViLT"),Bn.forEach(o),Jt.forEach(o),Yn=m(t),X=s(t,"H2",{class:!0});var Yt=a(X);be=s(Yt,"A",{id:!0,class:!0,href:!0});var Un=a(be);So=s(Un,"SPAN",{});var Qn=a(So);y(lt.$$.fragment,Qn),Qn.forEach(o),Un.forEach(o),Ys=m(Yt),Do=s(Yt,"SPAN",{});var Hn=a(Do);Xs=i(Hn,"Overview"),Hn.forEach(o),Yt.forEach(o),Xn=m(t),Te=s(t,"P",{});var Xt=a(Te);Zs=i(Xt,"The ViLT model was proposed in "),dt=s(Xt,"A",{href:!0,rel:!0});var Kn=a(dt);ea=i(Kn,"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),Kn.forEach(o),ta=i(Xt,`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Xt.forEach(o),Zn=m(t),Zt=s(t,"P",{});var Gn=a(Zt);oa=i(Gn,"The abstract from the paper is the following:"),Gn.forEach(o),es=m(t),eo=s(t,"P",{});var Jn=a(eo);Ro=s(Jn,"EM",{});var Fl=a(Ro);na=i(Fl,`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),Fl.forEach(o),Jn.forEach(o),ts=m(t),to=s(t,"P",{});var zl=a(to);sa=i(zl,"Tips:"),zl.forEach(o),os=m(t),A=s(t,"UL",{});var Ge=a(A);ct=s(Ge,"LI",{});var Ps=a(ct);aa=i(Ps,"The quickest way to get started with ViLT is by checking the "),mt=s(Ps,"A",{href:!0,rel:!0});var Pl=a(mt);ra=i(Pl,"example notebooks"),Pl.forEach(o),ia=i(Ps,`
(which showcase both inference and fine-tuning on custom data).`),Ps.forEach(o),la=m(Ge),W=s(Ge,"LI",{});var Je=a(W);da=i(Je,"ViLT is a model that takes both "),Wo=s(Je,"CODE",{});var Il=a(Wo);ca=i(Il,"pixel_values"),Il.forEach(o),ma=i(Je," and "),Bo=s(Je,"CODE",{});var Ml=a(Bo);pa=i(Ml,"input_ids"),Ml.forEach(o),ha=i(Je," as input. One can use "),oo=s(Je,"A",{href:!0});var Ll=a(oo);fa=i(Ll,"ViltProcessor"),Ll.forEach(o),ga=i(Je,` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),Je.forEach(o),ua=m(Ge),Z=s(Ge,"LI",{});var bo=a(Z);_a=i(bo,`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),Uo=s(bo,"CODE",{});var El=a(Uo);va=i(El,"pixel_mask"),El.forEach(o),ba=i(bo,` that indicates
which pixel values are real and which are padding. `),no=s(bo,"A",{href:!0});var Cl=a(no);Ta=i(Cl,"ViltProcessor"),Cl.forEach(o),ya=i(bo," automatically creates this for you."),bo.forEach(o),ka=m(Ge),Qo=s(Ge,"LI",{});var jl=a(Qo);wa=i(jl,`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),jl.forEach(o),Ge.forEach(o),ns=m(t),ye=s(t,"IMG",{src:!0,alt:!0,width:!0}),ss=m(t),ke=s(t,"SMALL",{});var Is=a(ke);xa=i(Is,"ViLT architecture. Taken from the "),so=s(Is,"A",{href:!0});var Al=a(so);$a=i(Al,"original paper"),Al.forEach(o),Va=i(Is,"."),Is.forEach(o),as=m(t),G=s(t,"P",{});var To=a(G);Fa=i(To,"This model was contributed by "),pt=s(To,"A",{href:!0,rel:!0});var ql=a(pt);za=i(ql,"nielsr"),ql.forEach(o),Pa=i(To,". The original code can be found "),ht=s(To,"A",{href:!0,rel:!0});var Ol=a(ht);Ia=i(Ol,"here"),Ol.forEach(o),Ma=i(To,"."),To.forEach(o),rs=m(t),ao=s(t,"P",{});var Nl=a(ao);La=i(Nl,"Tips:"),Nl.forEach(o),is=m(t),ro=s(t,"UL",{});var Sl=a(ro);Ho=s(Sl,"LI",{});var Dl=a(Ho);Ea=i(Dl,"The PyTorch version of this model is only available in torch 1.10 and higher."),Dl.forEach(o),Sl.forEach(o),ls=m(t),ee=s(t,"H2",{class:!0});var Ms=a(ee);we=s(Ms,"A",{id:!0,class:!0,href:!0});var Rl=a(we);Ko=s(Rl,"SPAN",{});var Wl=a(Ko);y(ft.$$.fragment,Wl),Wl.forEach(o),Rl.forEach(o),Ca=m(Ms),Go=s(Ms,"SPAN",{});var Bl=a(Go);ja=i(Bl,"ViltConfig"),Bl.forEach(o),Ms.forEach(o),ds=m(t),I=s(t,"DIV",{class:!0});var Ye=a(I);y(gt.$$.fragment,Ye),Aa=m(Ye),te=s(Ye,"P",{});var yo=a(te);qa=i(yo,"This is the configuration class to store the configuration of a "),Jo=s(yo,"CODE",{});var Ul=a(Jo);Oa=i(Ul,"ViLTModel"),Ul.forEach(o),Na=i(yo,`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),ut=s(yo,"A",{href:!0,rel:!0});var Ql=a(ut);Sa=i(Ql,"dandelin/vilt-b32-mlm"),Ql.forEach(o),Da=i(yo," architecture."),yo.forEach(o),Ra=m(Ye),oe=s(Ye,"P",{});var ko=a(oe);Wa=i(ko,"Configuration objects inherit from "),io=s(ko,"A",{href:!0});var Hl=a(io);Ba=i(Hl,"PretrainedConfig"),Hl.forEach(o),Ua=i(ko,` and can be used to control the model outputs. Read the
documentation from `),lo=s(ko,"A",{href:!0});var Kl=a(lo);Qa=i(Kl,"PretrainedConfig"),Kl.forEach(o),Ha=i(ko," for more information."),ko.forEach(o),Ka=m(Ye),y(xe.$$.fragment,Ye),Ye.forEach(o),cs=m(t),ne=s(t,"H2",{class:!0});var Ls=a(ne);$e=s(Ls,"A",{id:!0,class:!0,href:!0});var Gl=a($e);Yo=s(Gl,"SPAN",{});var Jl=a(Yo);y(_t.$$.fragment,Jl),Jl.forEach(o),Gl.forEach(o),Ga=m(Ls),Xo=s(Ls,"SPAN",{});var Yl=a(Xo);Ja=i(Yl,"ViltFeatureExtractor"),Yl.forEach(o),Ls.forEach(o),ms=m(t),B=s(t,"DIV",{class:!0});var wo=a(B);y(vt.$$.fragment,wo),Ya=m(wo),Zo=s(wo,"P",{});var Xl=a(Zo);Xa=i(Xl,"Constructs a ViLT image processor."),Xl.forEach(o),Za=m(wo),Ve=s(wo,"DIV",{class:!0});var Es=a(Ve);y(bt.$$.fragment,Es),er=m(Es),en=s(Es,"P",{});var Zl=a(en);tr=i(Zl,"Preprocess an image or a batch of images."),Zl.forEach(o),Es.forEach(o),wo.forEach(o),ps=m(t),se=s(t,"H2",{class:!0});var Cs=a(se);Fe=s(Cs,"A",{id:!0,class:!0,href:!0});var ed=a(Fe);tn=s(ed,"SPAN",{});var td=a(tn);y(Tt.$$.fragment,td),td.forEach(o),ed.forEach(o),or=m(Cs),on=s(Cs,"SPAN",{});var od=a(on);nr=i(od,"ViltImageProcessor"),od.forEach(o),Cs.forEach(o),hs=m(t),U=s(t,"DIV",{class:!0});var xo=a(U);y(yt.$$.fragment,xo),sr=m(xo),nn=s(xo,"P",{});var nd=a(nn);ar=i(nd,"Constructs a ViLT image processor."),nd.forEach(o),rr=m(xo),ze=s(xo,"DIV",{class:!0});var js=a(ze);y(kt.$$.fragment,js),ir=m(js),sn=s(js,"P",{});var sd=a(sn);lr=i(sd,"Preprocess an image or batch of images."),sd.forEach(o),js.forEach(o),xo.forEach(o),fs=m(t),ae=s(t,"H2",{class:!0});var As=a(ae);Pe=s(As,"A",{id:!0,class:!0,href:!0});var ad=a(Pe);an=s(ad,"SPAN",{});var rd=a(an);y(wt.$$.fragment,rd),rd.forEach(o),ad.forEach(o),dr=m(As),rn=s(As,"SPAN",{});var id=a(rn);cr=i(id,"ViltProcessor"),id.forEach(o),As.forEach(o),gs=m(t),M=s(t,"DIV",{class:!0});var Xe=a(M);y(xt.$$.fragment,Xe),mr=m(Xe),ln=s(Xe,"P",{});var ld=a(ln);pr=i(ld,"Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),ld.forEach(o),hr=m(Xe),P=s(Xe,"P",{});var K=a(P);co=s(K,"A",{href:!0});var dd=a(co);fr=i(dd,"ViltProcessor"),dd.forEach(o),gr=i(K," offers all the functionalities of "),mo=s(K,"A",{href:!0});var cd=a(mo);ur=i(cd,"ViltFeatureExtractor"),cd.forEach(o),_r=i(K," and "),po=s(K,"A",{href:!0});var md=a(po);vr=i(md,"BertTokenizerFast"),md.forEach(o),br=i(K,`. See the
docstring of `),$t=s(K,"A",{href:!0});var $l=a($t);dn=s($l,"STRONG",{});var pd=a(dn);Tr=i(pd,"call"),pd.forEach(o),yr=i($l,"()"),$l.forEach(o),kr=i(K," and "),cn=s(K,"CODE",{});var hd=a(cn);wr=i(hd,"decode()"),hd.forEach(o),xr=i(K," for more information."),K.forEach(o),$r=m(Xe),J=s(Xe,"DIV",{class:!0});var $o=a(J);y(Vt.$$.fragment,$o),Vr=m($o),re=s($o,"P",{});var Vo=a(re);Fr=i(Vo,"This method uses "),Ie=s(Vo,"A",{href:!0});var qs=a(Ie);zr=i(qs,"ViltFeatureExtractor."),mn=s(qs,"STRONG",{});var fd=a(mn);Pr=i(fd,"call"),fd.forEach(o),Ir=i(qs,"()"),qs.forEach(o),Mr=i(Vo,` method to prepare image(s) for the model, and
`),Me=s(Vo,"A",{href:!0});var Os=a(Me);Lr=i(Os,"BertTokenizerFast."),pn=s(Os,"STRONG",{});var gd=a(pn);Er=i(gd,"call"),gd.forEach(o),Cr=i(Os,"()"),Os.forEach(o),jr=i(Vo," to prepare text for the model."),Vo.forEach(o),Ar=m($o),hn=s($o,"P",{});var ud=a(hn);qr=i(ud,"Please refer to the docstring of the above two methods for more information."),ud.forEach(o),$o.forEach(o),Xe.forEach(o),us=m(t),ie=s(t,"H2",{class:!0});var Ns=a(ie);Le=s(Ns,"A",{id:!0,class:!0,href:!0});var _d=a(Le);fn=s(_d,"SPAN",{});var vd=a(fn);y(Ft.$$.fragment,vd),vd.forEach(o),_d.forEach(o),Or=m(Ns),gn=s(Ns,"SPAN",{});var bd=a(gn);Nr=i(bd,"ViltModel"),bd.forEach(o),Ns.forEach(o),_s=m(t),Q=s(t,"DIV",{class:!0});var Fo=a(Q);y(zt.$$.fragment,Fo),Sr=m(Fo),Pt=s(Fo,"P",{});var Ss=a(Pt);Dr=i(Ss,`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),un=s(Ss,"CODE",{});var Td=a(un);Rr=i(Td,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Td.forEach(o),Wr=i(Ss,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ss.forEach(o),Br=m(Fo),q=s(Fo,"DIV",{class:!0});var Ze=a(q);y(It.$$.fragment,Ze),Ur=m(Ze),le=s(Ze,"P",{});var zo=a(le);Qr=i(zo,"The "),ho=s(zo,"A",{href:!0});var yd=a(ho);Hr=i(yd,"ViltModel"),yd.forEach(o),Kr=i(zo," forward method, overrides the "),_n=s(zo,"CODE",{});var kd=a(_n);Gr=i(kd,"__call__"),kd.forEach(o),Jr=i(zo," special method."),zo.forEach(o),Yr=m(Ze),y(Ee.$$.fragment,Ze),Xr=m(Ze),y(Ce.$$.fragment,Ze),Ze.forEach(o),Fo.forEach(o),vs=m(t),de=s(t,"H2",{class:!0});var Ds=a(de);je=s(Ds,"A",{id:!0,class:!0,href:!0});var wd=a(je);vn=s(wd,"SPAN",{});var xd=a(vn);y(Mt.$$.fragment,xd),xd.forEach(o),wd.forEach(o),Zr=m(Ds),bn=s(Ds,"SPAN",{});var $d=a(bn);ei=i($d,"ViltForMaskedLM"),$d.forEach(o),Ds.forEach(o),bs=m(t),L=s(t,"DIV",{class:!0});var et=a(L);y(Lt.$$.fragment,et),ti=m(et),Tn=s(et,"P",{});var Vd=a(Tn);oi=i(Vd,"ViLT Model with a language modeling head on top as done during pretraining."),Vd.forEach(o),ni=m(et),Et=s(et,"P",{});var Rs=a(Et);si=i(Rs,"This model is a PyTorch "),yn=s(Rs,"CODE",{});var Fd=a(yn);ai=i(Fd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Fd.forEach(o),ri=i(Rs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rs.forEach(o),ii=m(et),O=s(et,"DIV",{class:!0});var tt=a(O);y(Ct.$$.fragment,tt),li=m(tt),ce=s(tt,"P",{});var Po=a(ce);di=i(Po,"The "),fo=s(Po,"A",{href:!0});var zd=a(fo);ci=i(zd,"ViltForMaskedLM"),zd.forEach(o),mi=i(Po," forward method, overrides the "),kn=s(Po,"CODE",{});var Pd=a(kn);pi=i(Pd,"__call__"),Pd.forEach(o),hi=i(Po," special method."),Po.forEach(o),fi=m(tt),y(Ae.$$.fragment,tt),gi=m(tt),y(qe.$$.fragment,tt),tt.forEach(o),et.forEach(o),Ts=m(t),me=s(t,"H2",{class:!0});var Ws=a(me);Oe=s(Ws,"A",{id:!0,class:!0,href:!0});var Id=a(Oe);wn=s(Id,"SPAN",{});var Md=a(wn);y(jt.$$.fragment,Md),Md.forEach(o),Id.forEach(o),ui=m(Ws),xn=s(Ws,"SPAN",{});var Ld=a(xn);_i=i(Ld,"ViltForQuestionAnswering"),Ld.forEach(o),Ws.forEach(o),ys=m(t),E=s(t,"DIV",{class:!0});var ot=a(E);y(At.$$.fragment,ot),vi=m(ot),$n=s(ot,"P",{});var Ed=a($n);bi=i(Ed,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),Ed.forEach(o),Ti=m(ot),qt=s(ot,"P",{});var Bs=a(qt);yi=i(Bs,"This model is a PyTorch "),Vn=s(Bs,"CODE",{});var Cd=a(Vn);ki=i(Cd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Cd.forEach(o),wi=i(Bs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bs.forEach(o),xi=m(ot),N=s(ot,"DIV",{class:!0});var nt=a(N);y(Ot.$$.fragment,nt),$i=m(nt),pe=s(nt,"P",{});var Io=a(pe);Vi=i(Io,"The "),go=s(Io,"A",{href:!0});var jd=a(go);Fi=i(jd,"ViltForQuestionAnswering"),jd.forEach(o),zi=i(Io," forward method, overrides the "),Fn=s(Io,"CODE",{});var Ad=a(Fn);Pi=i(Ad,"__call__"),Ad.forEach(o),Ii=i(Io," special method."),Io.forEach(o),Mi=m(nt),y(Ne.$$.fragment,nt),Li=m(nt),y(Se.$$.fragment,nt),nt.forEach(o),ot.forEach(o),ks=m(t),he=s(t,"H2",{class:!0});var Us=a(he);De=s(Us,"A",{id:!0,class:!0,href:!0});var qd=a(De);zn=s(qd,"SPAN",{});var Od=a(zn);y(Nt.$$.fragment,Od),Od.forEach(o),qd.forEach(o),Ei=m(Us),Pn=s(Us,"SPAN",{});var Nd=a(Pn);Ci=i(Nd,"ViltForImagesAndTextClassification"),Nd.forEach(o),Us.forEach(o),ws=m(t),H=s(t,"DIV",{class:!0});var Mo=a(H);y(St.$$.fragment,Mo),ji=m(Mo),In=s(Mo,"P",{});var Sd=a(In);Ai=i(Sd,"Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),Sd.forEach(o),qi=m(Mo),S=s(Mo,"DIV",{class:!0});var st=a(S);y(Dt.$$.fragment,st),Oi=m(st),fe=s(st,"P",{});var Lo=a(fe);Ni=i(Lo,"The "),uo=s(Lo,"A",{href:!0});var Dd=a(uo);Si=i(Dd,"ViltForImagesAndTextClassification"),Dd.forEach(o),Di=i(Lo," forward method, overrides the "),Mn=s(Lo,"CODE",{});var Rd=a(Mn);Ri=i(Rd,"__call__"),Rd.forEach(o),Wi=i(Lo," special method."),Lo.forEach(o),Bi=m(st),y(Re.$$.fragment,st),Ui=m(st),y(We.$$.fragment,st),st.forEach(o),Mo.forEach(o),xs=m(t),ge=s(t,"H2",{class:!0});var Qs=a(ge);Be=s(Qs,"A",{id:!0,class:!0,href:!0});var Wd=a(Be);Ln=s(Wd,"SPAN",{});var Bd=a(Ln);y(Rt.$$.fragment,Bd),Bd.forEach(o),Wd.forEach(o),Qi=m(Qs),En=s(Qs,"SPAN",{});var Ud=a(En);Hi=i(Ud,"ViltForImageAndTextRetrieval"),Ud.forEach(o),Qs.forEach(o),$s=m(t),C=s(t,"DIV",{class:!0});var at=a(C);y(Wt.$$.fragment,at),Ki=m(at),Cn=s(at,"P",{});var Qd=a(Cn);Gi=i(Qd,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),Qd.forEach(o),Ji=m(at),Bt=s(at,"P",{});var Hs=a(Bt);Yi=i(Hs,"This model is a PyTorch "),jn=s(Hs,"CODE",{});var Hd=a(jn);Xi=i(Hd,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Hd.forEach(o),Zi=i(Hs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hs.forEach(o),el=m(at),D=s(at,"DIV",{class:!0});var rt=a(D);y(Ut.$$.fragment,rt),tl=m(rt),ue=s(rt,"P",{});var Eo=a(ue);ol=i(Eo,"The "),_o=s(Eo,"A",{href:!0});var Kd=a(_o);nl=i(Kd,"ViltForImageAndTextRetrieval"),Kd.forEach(o),sl=i(Eo," forward method, overrides the "),An=s(Eo,"CODE",{});var Gd=a(An);al=i(Gd,"__call__"),Gd.forEach(o),rl=i(Eo," special method."),Eo.forEach(o),il=m(rt),y(Ue.$$.fragment,rt),ll=m(rt),y(Qe.$$.fragment,rt),rt.forEach(o),at.forEach(o),Vs=m(t),_e=s(t,"H2",{class:!0});var Ks=a(_e);He=s(Ks,"A",{id:!0,class:!0,href:!0});var Jd=a(He);qn=s(Jd,"SPAN",{});var Yd=a(qn);y(Qt.$$.fragment,Yd),Yd.forEach(o),Jd.forEach(o),dl=m(Ks),On=s(Ks,"SPAN",{});var Xd=a(On);cl=i(Xd,"ViltForTokenClassification"),Xd.forEach(o),Ks.forEach(o),Fs=m(t),j=s(t,"DIV",{class:!0});var it=a(j);y(Ht.$$.fragment,it),ml=m(it),Nn=s(it,"P",{});var Zd=a(Nn);pl=i(Zd,`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`),Zd.forEach(o),hl=m(it),Kt=s(it,"P",{});var Gs=a(Kt);fl=i(Gs,"This model is a PyTorch "),Sn=s(Gs,"CODE",{});var ec=a(Sn);gl=i(ec,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ec.forEach(o),ul=i(Gs,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gs.forEach(o),_l=m(it),Y=s(it,"DIV",{class:!0});var Co=a(Y);y(Gt.$$.fragment,Co),vl=m(Co),ve=s(Co,"P",{});var jo=a(ve);bl=i(jo,"The "),vo=s(jo,"A",{href:!0});var tc=a(vo);Tl=i(tc,"ViltForTokenClassification"),tc.forEach(o),yl=i(jo," forward method, overrides the "),Dn=s(jo,"CODE",{});var oc=a(Dn);kl=i(oc,"__call__"),oc.forEach(o),wl=i(jo," special method."),jo.forEach(o),xl=m(Co),y(Ke.$$.fragment,Co),Co.forEach(o),it.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(kc)),p(u,"id","vilt"),p(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(u,"href","#vilt"),p(_,"class","relative group"),p(be,"id","overview"),p(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(be,"href","#overview"),p(X,"class","relative group"),p(dt,"href","https://arxiv.org/abs/2102.03334"),p(dt,"rel","nofollow"),p(mt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ViLT"),p(mt,"rel","nofollow"),p(oo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),p(no,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),ic(ye.src,Vl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vilt_architecture.jpg")||p(ye,"src",Vl),p(ye,"alt","drawing"),p(ye,"width","600"),p(so,"href","https://arxiv.org/abs/2102.03334"),p(pt,"href","https://huggingface.co/nielsr"),p(pt,"rel","nofollow"),p(ht,"href","https://github.com/dandelin/ViLT"),p(ht,"rel","nofollow"),p(we,"id","transformers.ViltConfig"),p(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(we,"href","#transformers.ViltConfig"),p(ee,"class","relative group"),p(ut,"href","https://huggingface.co/dandelin/vilt-b32-mlm"),p(ut,"rel","nofollow"),p(io,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(lo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($e,"id","transformers.ViltImageProcessor"),p($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($e,"href","#transformers.ViltImageProcessor"),p(ne,"class","relative group"),p(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Fe,"id","transformers.ViltImageProcessor"),p(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Fe,"href","#transformers.ViltImageProcessor"),p(se,"class","relative group"),p(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"id","transformers.ViltProcessor"),p(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pe,"href","#transformers.ViltProcessor"),p(ae,"class","relative group"),p(co,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor"),p(mo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor"),p(po,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),p($t,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor.__call__"),p(Ie,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__"),p(Me,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Le,"id","transformers.ViltModel"),p(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Le,"href","#transformers.ViltModel"),p(ie,"class","relative group"),p(ho,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(je,"id","transformers.ViltForMaskedLM"),p(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(je,"href","#transformers.ViltForMaskedLM"),p(de,"class","relative group"),p(fo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForMaskedLM"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Oe,"id","transformers.ViltForQuestionAnswering"),p(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Oe,"href","#transformers.ViltForQuestionAnswering"),p(me,"class","relative group"),p(go,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForQuestionAnswering"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(De,"id","transformers.ViltForImagesAndTextClassification"),p(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(De,"href","#transformers.ViltForImagesAndTextClassification"),p(he,"class","relative group"),p(uo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Be,"id","transformers.ViltForImageAndTextRetrieval"),p(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Be,"href","#transformers.ViltForImageAndTextRetrieval"),p(ge,"class","relative group"),p(_o,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImageAndTextRetrieval"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(He,"id","transformers.ViltForTokenClassification"),p(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(He,"href","#transformers.ViltForTokenClassification"),p(_e,"class","relative group"),p(vo,"href","/docs/transformers/main/en/model_doc/vilt#transformers.ViltForTokenClassification"),p(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,d),g(t,b,h),g(t,_,h),e(_,u),e(u,v),k(l,v,null),e(_,f),e(_,F),e(F,Js),g(t,Yn,h),g(t,X,h),e(X,be),e(be,So),k(lt,So,null),e(X,Ys),e(X,Do),e(Do,Xs),g(t,Xn,h),g(t,Te,h),e(Te,Zs),e(Te,dt),e(dt,ea),e(Te,ta),g(t,Zn,h),g(t,Zt,h),e(Zt,oa),g(t,es,h),g(t,eo,h),e(eo,Ro),e(Ro,na),g(t,ts,h),g(t,to,h),e(to,sa),g(t,os,h),g(t,A,h),e(A,ct),e(ct,aa),e(ct,mt),e(mt,ra),e(ct,ia),e(A,la),e(A,W),e(W,da),e(W,Wo),e(Wo,ca),e(W,ma),e(W,Bo),e(Bo,pa),e(W,ha),e(W,oo),e(oo,fa),e(W,ga),e(A,ua),e(A,Z),e(Z,_a),e(Z,Uo),e(Uo,va),e(Z,ba),e(Z,no),e(no,Ta),e(Z,ya),e(A,ka),e(A,Qo),e(Qo,wa),g(t,ns,h),g(t,ye,h),g(t,ss,h),g(t,ke,h),e(ke,xa),e(ke,so),e(so,$a),e(ke,Va),g(t,as,h),g(t,G,h),e(G,Fa),e(G,pt),e(pt,za),e(G,Pa),e(G,ht),e(ht,Ia),e(G,Ma),g(t,rs,h),g(t,ao,h),e(ao,La),g(t,is,h),g(t,ro,h),e(ro,Ho),e(Ho,Ea),g(t,ls,h),g(t,ee,h),e(ee,we),e(we,Ko),k(ft,Ko,null),e(ee,Ca),e(ee,Go),e(Go,ja),g(t,ds,h),g(t,I,h),k(gt,I,null),e(I,Aa),e(I,te),e(te,qa),e(te,Jo),e(Jo,Oa),e(te,Na),e(te,ut),e(ut,Sa),e(te,Da),e(I,Ra),e(I,oe),e(oe,Wa),e(oe,io),e(io,Ba),e(oe,Ua),e(oe,lo),e(lo,Qa),e(oe,Ha),e(I,Ka),k(xe,I,null),g(t,cs,h),g(t,ne,h),e(ne,$e),e($e,Yo),k(_t,Yo,null),e(ne,Ga),e(ne,Xo),e(Xo,Ja),g(t,ms,h),g(t,B,h),k(vt,B,null),e(B,Ya),e(B,Zo),e(Zo,Xa),e(B,Za),e(B,Ve),k(bt,Ve,null),e(Ve,er),e(Ve,en),e(en,tr),g(t,ps,h),g(t,se,h),e(se,Fe),e(Fe,tn),k(Tt,tn,null),e(se,or),e(se,on),e(on,nr),g(t,hs,h),g(t,U,h),k(yt,U,null),e(U,sr),e(U,nn),e(nn,ar),e(U,rr),e(U,ze),k(kt,ze,null),e(ze,ir),e(ze,sn),e(sn,lr),g(t,fs,h),g(t,ae,h),e(ae,Pe),e(Pe,an),k(wt,an,null),e(ae,dr),e(ae,rn),e(rn,cr),g(t,gs,h),g(t,M,h),k(xt,M,null),e(M,mr),e(M,ln),e(ln,pr),e(M,hr),e(M,P),e(P,co),e(co,fr),e(P,gr),e(P,mo),e(mo,ur),e(P,_r),e(P,po),e(po,vr),e(P,br),e(P,$t),e($t,dn),e(dn,Tr),e($t,yr),e(P,kr),e(P,cn),e(cn,wr),e(P,xr),e(M,$r),e(M,J),k(Vt,J,null),e(J,Vr),e(J,re),e(re,Fr),e(re,Ie),e(Ie,zr),e(Ie,mn),e(mn,Pr),e(Ie,Ir),e(re,Mr),e(re,Me),e(Me,Lr),e(Me,pn),e(pn,Er),e(Me,Cr),e(re,jr),e(J,Ar),e(J,hn),e(hn,qr),g(t,us,h),g(t,ie,h),e(ie,Le),e(Le,fn),k(Ft,fn,null),e(ie,Or),e(ie,gn),e(gn,Nr),g(t,_s,h),g(t,Q,h),k(zt,Q,null),e(Q,Sr),e(Q,Pt),e(Pt,Dr),e(Pt,un),e(un,Rr),e(Pt,Wr),e(Q,Br),e(Q,q),k(It,q,null),e(q,Ur),e(q,le),e(le,Qr),e(le,ho),e(ho,Hr),e(le,Kr),e(le,_n),e(_n,Gr),e(le,Jr),e(q,Yr),k(Ee,q,null),e(q,Xr),k(Ce,q,null),g(t,vs,h),g(t,de,h),e(de,je),e(je,vn),k(Mt,vn,null),e(de,Zr),e(de,bn),e(bn,ei),g(t,bs,h),g(t,L,h),k(Lt,L,null),e(L,ti),e(L,Tn),e(Tn,oi),e(L,ni),e(L,Et),e(Et,si),e(Et,yn),e(yn,ai),e(Et,ri),e(L,ii),e(L,O),k(Ct,O,null),e(O,li),e(O,ce),e(ce,di),e(ce,fo),e(fo,ci),e(ce,mi),e(ce,kn),e(kn,pi),e(ce,hi),e(O,fi),k(Ae,O,null),e(O,gi),k(qe,O,null),g(t,Ts,h),g(t,me,h),e(me,Oe),e(Oe,wn),k(jt,wn,null),e(me,ui),e(me,xn),e(xn,_i),g(t,ys,h),g(t,E,h),k(At,E,null),e(E,vi),e(E,$n),e($n,bi),e(E,Ti),e(E,qt),e(qt,yi),e(qt,Vn),e(Vn,ki),e(qt,wi),e(E,xi),e(E,N),k(Ot,N,null),e(N,$i),e(N,pe),e(pe,Vi),e(pe,go),e(go,Fi),e(pe,zi),e(pe,Fn),e(Fn,Pi),e(pe,Ii),e(N,Mi),k(Ne,N,null),e(N,Li),k(Se,N,null),g(t,ks,h),g(t,he,h),e(he,De),e(De,zn),k(Nt,zn,null),e(he,Ei),e(he,Pn),e(Pn,Ci),g(t,ws,h),g(t,H,h),k(St,H,null),e(H,ji),e(H,In),e(In,Ai),e(H,qi),e(H,S),k(Dt,S,null),e(S,Oi),e(S,fe),e(fe,Ni),e(fe,uo),e(uo,Si),e(fe,Di),e(fe,Mn),e(Mn,Ri),e(fe,Wi),e(S,Bi),k(Re,S,null),e(S,Ui),k(We,S,null),g(t,xs,h),g(t,ge,h),e(ge,Be),e(Be,Ln),k(Rt,Ln,null),e(ge,Qi),e(ge,En),e(En,Hi),g(t,$s,h),g(t,C,h),k(Wt,C,null),e(C,Ki),e(C,Cn),e(Cn,Gi),e(C,Ji),e(C,Bt),e(Bt,Yi),e(Bt,jn),e(jn,Xi),e(Bt,Zi),e(C,el),e(C,D),k(Ut,D,null),e(D,tl),e(D,ue),e(ue,ol),e(ue,_o),e(_o,nl),e(ue,sl),e(ue,An),e(An,al),e(ue,rl),e(D,il),k(Ue,D,null),e(D,ll),k(Qe,D,null),g(t,Vs,h),g(t,_e,h),e(_e,He),e(He,qn),k(Qt,qn,null),e(_e,dl),e(_e,On),e(On,cl),g(t,Fs,h),g(t,j,h),k(Ht,j,null),e(j,ml),e(j,Nn),e(Nn,pl),e(j,hl),e(j,Kt),e(Kt,fl),e(Kt,Sn),e(Sn,gl),e(Kt,ul),e(j,_l),e(j,Y),k(Gt,Y,null),e(Y,vl),e(Y,ve),e(ve,bl),e(ve,vo),e(vo,Tl),e(ve,yl),e(ve,Dn),e(Dn,kl),e(ve,wl),e(Y,xl),k(Ke,Y,null),zs=!0},p(t,[h]){const Jt={};h&2&&(Jt.$$scope={dirty:h,ctx:t}),xe.$set(Jt);const Rn={};h&2&&(Rn.$$scope={dirty:h,ctx:t}),Ee.$set(Rn);const Wn={};h&2&&(Wn.$$scope={dirty:h,ctx:t}),Ce.$set(Wn);const Bn={};h&2&&(Bn.$$scope={dirty:h,ctx:t}),Ae.$set(Bn);const Yt={};h&2&&(Yt.$$scope={dirty:h,ctx:t}),qe.$set(Yt);const Un={};h&2&&(Un.$$scope={dirty:h,ctx:t}),Ne.$set(Un);const Qn={};h&2&&(Qn.$$scope={dirty:h,ctx:t}),Se.$set(Qn);const Hn={};h&2&&(Hn.$$scope={dirty:h,ctx:t}),Re.$set(Hn);const Xt={};h&2&&(Xt.$$scope={dirty:h,ctx:t}),We.$set(Xt);const Kn={};h&2&&(Kn.$$scope={dirty:h,ctx:t}),Ue.$set(Kn);const Gn={};h&2&&(Gn.$$scope={dirty:h,ctx:t}),Qe.$set(Gn);const Jn={};h&2&&(Jn.$$scope={dirty:h,ctx:t}),Ke.$set(Jn)},i(t){zs||(w(l.$$.fragment,t),w(lt.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(xe.$$.fragment,t),w(_t.$$.fragment,t),w(vt.$$.fragment,t),w(bt.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(kt.$$.fragment,t),w(wt.$$.fragment,t),w(xt.$$.fragment,t),w(Vt.$$.fragment,t),w(Ft.$$.fragment,t),w(zt.$$.fragment,t),w(It.$$.fragment,t),w(Ee.$$.fragment,t),w(Ce.$$.fragment,t),w(Mt.$$.fragment,t),w(Lt.$$.fragment,t),w(Ct.$$.fragment,t),w(Ae.$$.fragment,t),w(qe.$$.fragment,t),w(jt.$$.fragment,t),w(At.$$.fragment,t),w(Ot.$$.fragment,t),w(Ne.$$.fragment,t),w(Se.$$.fragment,t),w(Nt.$$.fragment,t),w(St.$$.fragment,t),w(Dt.$$.fragment,t),w(Re.$$.fragment,t),w(We.$$.fragment,t),w(Rt.$$.fragment,t),w(Wt.$$.fragment,t),w(Ut.$$.fragment,t),w(Ue.$$.fragment,t),w(Qe.$$.fragment,t),w(Qt.$$.fragment,t),w(Ht.$$.fragment,t),w(Gt.$$.fragment,t),w(Ke.$$.fragment,t),zs=!0)},o(t){x(l.$$.fragment,t),x(lt.$$.fragment,t),x(ft.$$.fragment,t),x(gt.$$.fragment,t),x(xe.$$.fragment,t),x(_t.$$.fragment,t),x(vt.$$.fragment,t),x(bt.$$.fragment,t),x(Tt.$$.fragment,t),x(yt.$$.fragment,t),x(kt.$$.fragment,t),x(wt.$$.fragment,t),x(xt.$$.fragment,t),x(Vt.$$.fragment,t),x(Ft.$$.fragment,t),x(zt.$$.fragment,t),x(It.$$.fragment,t),x(Ee.$$.fragment,t),x(Ce.$$.fragment,t),x(Mt.$$.fragment,t),x(Lt.$$.fragment,t),x(Ct.$$.fragment,t),x(Ae.$$.fragment,t),x(qe.$$.fragment,t),x(jt.$$.fragment,t),x(At.$$.fragment,t),x(Ot.$$.fragment,t),x(Ne.$$.fragment,t),x(Se.$$.fragment,t),x(Nt.$$.fragment,t),x(St.$$.fragment,t),x(Dt.$$.fragment,t),x(Re.$$.fragment,t),x(We.$$.fragment,t),x(Rt.$$.fragment,t),x(Wt.$$.fragment,t),x(Ut.$$.fragment,t),x(Ue.$$.fragment,t),x(Qe.$$.fragment,t),x(Qt.$$.fragment,t),x(Ht.$$.fragment,t),x(Gt.$$.fragment,t),x(Ke.$$.fragment,t),zs=!1},d(t){o(d),t&&o(b),t&&o(_),$(l),t&&o(Yn),t&&o(X),$(lt),t&&o(Xn),t&&o(Te),t&&o(Zn),t&&o(Zt),t&&o(es),t&&o(eo),t&&o(ts),t&&o(to),t&&o(os),t&&o(A),t&&o(ns),t&&o(ye),t&&o(ss),t&&o(ke),t&&o(as),t&&o(G),t&&o(rs),t&&o(ao),t&&o(is),t&&o(ro),t&&o(ls),t&&o(ee),$(ft),t&&o(ds),t&&o(I),$(gt),$(xe),t&&o(cs),t&&o(ne),$(_t),t&&o(ms),t&&o(B),$(vt),$(bt),t&&o(ps),t&&o(se),$(Tt),t&&o(hs),t&&o(U),$(yt),$(kt),t&&o(fs),t&&o(ae),$(wt),t&&o(gs),t&&o(M),$(xt),$(Vt),t&&o(us),t&&o(ie),$(Ft),t&&o(_s),t&&o(Q),$(zt),$(It),$(Ee),$(Ce),t&&o(vs),t&&o(de),$(Mt),t&&o(bs),t&&o(L),$(Lt),$(Ct),$(Ae),$(qe),t&&o(Ts),t&&o(me),$(jt),t&&o(ys),t&&o(E),$(At),$(Ot),$(Ne),$(Se),t&&o(ks),t&&o(he),$(Nt),t&&o(ws),t&&o(H),$(St),$(Dt),$(Re),$(We),t&&o(xs),t&&o(ge),$(Rt),t&&o($s),t&&o(C),$(Wt),$(Ut),$(Ue),$(Qe),t&&o(Vs),t&&o(_e),$(Qt),t&&o(Fs),t&&o(j),$(Ht),$(Gt),$(Ke)}}}const kc={local:"vilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViltConfig",title:"ViltConfig"},{local:"transformers.ViltImageProcessor",title:"ViltFeatureExtractor"},{local:"transformers.ViltImageProcessor",title:"ViltImageProcessor"},{local:"transformers.ViltProcessor",title:"ViltProcessor"},{local:"transformers.ViltModel",title:"ViltModel"},{local:"transformers.ViltForMaskedLM",title:"ViltForMaskedLM"},{local:"transformers.ViltForQuestionAnswering",title:"ViltForQuestionAnswering"},{local:"transformers.ViltForImagesAndTextClassification",title:"ViltForImagesAndTextClassification"},{local:"transformers.ViltForImageAndTextRetrieval",title:"ViltForImageAndTextRetrieval"},{local:"transformers.ViltForTokenClassification",title:"ViltForTokenClassification"}],title:"ViLT"};function wc(V){return lc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ic extends nc{constructor(d){super();sc(this,d,wc,yc,ac,{})}}export{Ic as default,kc as metadata};
