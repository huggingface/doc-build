import{S as md,i as fd,s as gd,e as n,k as p,w as k,t as i,M as _d,c as s,d as o,m as h,a,x as T,h as l,b as c,G as e,g as _,y,q as w,o as $,B as V,v as vd,L as Gt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Eo}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ke}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Kt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bd(B){let d,b,g,m,v;return m=new Ke({props:{code:`from transformers import VisualBertModel, VisualBertConfig

# Initializing a VisualBERT visualbert-vqa-coco-pre style configuration
configuration = VisualBertConfig.from_pretrained("visualbert-vqa-coco-pre")

# Initializing a model from the visualbert-vqa-coco-pre style configuration
model = VisualBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisualBertModel, VisualBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a VisualBERT visualbert-vqa-coco-pre style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VisualBertConfig.from_pretrained(<span class="hljs-string">&quot;visualbert-vqa-coco-pre&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the visualbert-vqa-coco-pre style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisualBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function kd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var z=a(g);m=l(z,"Module"),z.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(r,u){_(r,d,u),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function Td(B){let d,b,g,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image.
from transformers import BertTokenizer, VisualBertModel
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertModel.from_pretrained("uclanlp/visualbert-vqa-coco-pre")

inputs = tokenizer("The capital of France is Paris.", return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertModel
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function yd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var z=a(g);m=l(z,"Module"),z.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(r,u){_(r,d,u),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function wd(B){let d,b,g,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForPreTraining.from_pretrained("uclanlp/visualbert-vqa-coco-pre")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)
max_length = inputs["input_ids"].shape[-1] + visual_embeds.shape[-2]
labels = tokenizer(
    "The capital of France is Paris.", return_tensors="pt", padding="max_length", max_length=max_length
)["input_ids"]
sentence_image_labels = torch.tensor(1).unsqueeze(0)  # Batch_size


outputs = model(**inputs, labels=labels, sentence_image_labels=sentence_image_labels)
loss = outputs.loss
prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForPreTraining

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)
max_length = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>]
labels = tokenizer(
    <span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=max_length
)[<span class="hljs-string">&quot;input_ids&quot;</span>]
sentence_image_labels = torch.tensor(<span class="hljs-number">1</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch_size</span>


outputs = model(**inputs, labels=labels, sentence_image_labels=sentence_image_labels)
loss = outputs.loss
prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function $d(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var z=a(g);m=l(z,"Module"),z.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(r,u){_(r,d,u),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function Vd(B){let d,b,g,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForQuestionAnswering.from_pretrained("uclanlp/visualbert-vqa")

text = "Who is eating the apple?"
inputs = tokenizer(text, return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

labels = torch.tensor([[0.0, 1.0]]).unsqueeze(0)  # Batch size 1, Num labels 2

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForQuestionAnswering
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.tensor([[<span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>]]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, Num labels 2</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Bd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var z=a(g);m=l(z,"Module"),z.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(r,u){_(r,d,u),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function zd(B){let d,b,g,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForMultipleChoice.from_pretrained("uclanlp/visualbert-vcr")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

visual_embeds = get_visual_embeddings(image)
# (batch_size, num_choices, visual_seq_length, visual_embedding_dim)
visual_embeds = visual_embeds.expand(1, 2, *visual_embeds.shape)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, prompt], [choice0, choice1]], return_tensors="pt", padding=True)
# batch size is 1
inputs_dict = {k: v.unsqueeze(0) for k, v in encoding.items()}
inputs_dict.update(
    {
        "visual_embeds": visual_embeds,
        "visual_attention_mask": visual_attention_mask,
        "visual_token_type_ids": visual_token_type_ids,
        "labels": labels,
    }
)
outputs = model(**inputs_dict)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForMultipleChoice
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vcr&quot;</span>)

prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

visual_embeds = get_visual_embeddings(image)
<span class="hljs-comment"># (batch_size, num_choices, visual_seq_length, visual_embedding_dim)</span>
visual_embeds = visual_embeds.expand(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, *visual_embeds.shape)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

encoding = tokenizer([[prompt, prompt], [choice0, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># batch size is 1</span>
inputs_dict = {k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
inputs_dict.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;labels&quot;</span>: labels,
    }
)
outputs = model(**inputs_dict)

loss = outputs.loss
logits = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function qd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var z=a(g);m=l(z,"Module"),z.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(r,u){_(r,d,u),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function xd(B){let d,b,g,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForVisualReasoning
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForVisualReasoning.from_pretrained("uclanlp/visualbert-nlvr2")

text = "Who is eating the apple?"
inputs = tokenizer(text, return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)

inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

labels = torch.tensor(1).unsqueeze(0)  # Batch size 1, Num choices 2

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForVisualReasoning
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForVisualReasoning.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-nlvr2&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.tensor(<span class="hljs-number">1</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, Num choices 2</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Fd(B){let d,b,g,m,v;return{c(){d=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var z=a(g);m=l(z,"Module"),z.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(r,u){_(r,d,u),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function Pd(B){let d,b,g,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
from transformers import BertTokenizer, VisualBertForRegionToPhraseAlignment
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisualBertForRegionToPhraseAlignment.from_pretrained("uclanlp/visualbert-vqa-coco-pre")

text = "Who is eating the apple?"
inputs = tokenizer(text, return_tensors="pt")
visual_embeds = get_visual_embeddings(image).unsqueeze(0)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)
region_to_phrase_position = torch.ones((1, inputs["input_ids"].shape[-1] + visual_embeds.shape[-2]))

inputs.update(
    {
        "region_to_phrase_position": region_to_phrase_position,
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)

labels = torch.ones(
    (1, inputs["input_ids"].shape[-1] + visual_embeds.shape[-2], visual_embeds.shape[-2])
)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertForRegionToPhraseAlignment
<span class="hljs-keyword">import</span> torch

tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
model = VisualBertForRegionToPhraseAlignment.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)
region_to_phrase_position = torch.ones((<span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>]))

inputs.update(
    {
        <span class="hljs-string">&quot;region_to_phrase_position&quot;</span>: region_to_phrase_position,
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.ones(
    (<span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>], visual_embeds.shape[-<span class="hljs-number">2</span>])
)  <span class="hljs-comment"># Batch size 1</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`}}),{c(){d=n("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=s(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Ed(B){let d,b,g,m,v,r,u,z,zs,Bn,J,me,Mo,Ge,qs,Ao,xs,zn,fe,Fs,Je,Ps,Es,qn,Jt,Ms,xn,Yt,jo,As,Fn,Xt,js,Pn,ge,Co,Ye,Cs,Zt,Ls,Os,Rs,Lo,Oo,Ns,En,Y,_e,Ro,Xe,Is,No,Ds,Mn,eo,Ss,An,to,Ws,jn,ve,Qs,oo,Hs,Us,Cn,be,Io,no,Ze,Ks,Gs,Js,Do,so,et,Ys,Xs,Ln,ke,Zs,ao,ea,ta,On,tt,Rn,D,oa,ot,na,sa,nt,aa,ra,Nn,X,Te,So,st,ia,Wo,la,In,A,at,da,Z,ca,ro,ua,pa,rt,ha,ma,fa,ee,ga,io,_a,va,lo,ba,ka,Ta,ye,Dn,te,we,Qo,it,ya,Ho,wa,Sn,q,lt,$a,dt,Va,co,Ba,za,qa,ct,xa,ut,Fa,Pa,Ea,pt,Ma,ht,Aa,ja,Ca,C,mt,La,oe,Oa,uo,Ra,Na,Uo,Ia,Da,Sa,$e,Wa,Ve,Wn,ne,Be,Ko,ft,Qa,Go,Ha,Qn,x,gt,Ua,se,Ka,Jo,Ga,Ja,Yo,Ya,Xa,Za,_t,er,po,tr,or,nr,vt,sr,bt,ar,rr,ir,L,kt,lr,ae,dr,ho,cr,ur,Xo,pr,hr,mr,ze,fr,qe,Hn,re,xe,Zo,Tt,gr,en,_r,Un,F,yt,vr,tn,br,kr,wt,Tr,mo,yr,wr,$r,$t,Vr,Vt,Br,zr,qr,O,Bt,xr,ie,Fr,fo,Pr,Er,on,Mr,Ar,jr,Fe,Cr,Pe,Kn,le,Ee,nn,zt,Lr,sn,Or,Gn,P,qt,Rr,an,Nr,Ir,xt,Dr,go,Sr,Wr,Qr,Ft,Hr,Pt,Ur,Kr,Gr,R,Et,Jr,de,Yr,_o,Xr,Zr,rn,ei,ti,oi,Me,ni,Ae,Jn,ce,je,ln,Mt,si,dn,ai,Yn,E,At,ri,cn,ii,li,jt,di,vo,ci,ui,pi,Ct,hi,Lt,mi,fi,gi,N,Ot,_i,ue,vi,bo,bi,ki,un,Ti,yi,wi,Ce,$i,Le,Xn,pe,Oe,pn,Rt,Vi,hn,Bi,Zn,M,Nt,zi,mn,qi,xi,It,Fi,ko,Pi,Ei,Mi,Dt,Ai,St,ji,Ci,Li,I,Wt,Oi,he,Ri,To,Ni,Ii,fn,Di,Si,Wi,Re,Qi,Ne,es;return r=new G({}),Ge=new G({}),Xe=new G({}),tt=new Ke({props:{code:`import torch
from transformers import BertTokenizer, VisualBertModel

model = VisualBertModel.from_pretrained("uclanlp/visualbert-vqa-coco-pre")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

inputs = tokenizer("What is the man eating?", return_tensors="pt")
# this is a custom function that returns the visual embeddings given the image path
visual_embeds = get_visual_embeddings(image_path)

visual_token_type_ids = torch.ones(visual_embeds.shape[:-1], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-1], dtype=torch.float)
inputs.update(
    {
        "visual_embeds": visual_embeds,
        "visual_token_type_ids": visual_token_type_ids,
        "visual_attention_mask": visual_attention_mask,
    }
)
outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisualBertModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;What is the man eating?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is a custom function that returns the visual embeddings given the image path</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>visual_embeds = get_visual_embeddings(image_path)

<span class="hljs-meta">&gt;&gt;&gt; </span>visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.update(
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`}}),st=new G({}),at=new j({props:{name:"class transformers.VisualBertConfig",anchor:"transformers.VisualBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"visual_embedding_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"bypass_transformer",val:" = False"},{name:"special_visual_initialize",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisualBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the VisualBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <code>inputs_ids</code> passed to the forward method of
<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.VisualBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.VisualBertConfig.visual_embedding_dim",description:`<strong>visual_embedding_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the visual embeddings to be passed to the model.`,name:"visual_embedding_dim"},{anchor:"transformers.VisualBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.VisualBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.VisualBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.VisualBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VisualBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.VisualBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.VisualBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.VisualBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.VisualBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VisualBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VisualBertConfig.bypass_transformer",description:`<strong>bypass_transformer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should bypass the transformer for the visual embeddings. If set to <code>True</code>, the
model directly concatenates the visual embeddings from <code>VisualBertEmbeddings</code> with text output from
transformers, and then pass it to a self-attention layer.`,name:"bypass_transformer"},{anchor:"transformers.VisualBertConfig.special_visual_initialize",description:`<strong>special_visual_initialize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the visual token type and position type embedding weights should be initialized the same as
the textual token type and positive type embeddings. When set to <code>True</code>, the weights of the textual token
type and position type embeddings are copied to the respective visual embedding layers.`,name:"special_visual_initialize"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/configuration_visual_bert.py#L43"}}),ye=new Kt({props:{anchor:"transformers.VisualBertConfig.example",$$slots:{default:[bd]},$$scope:{ctx:B}}}),it=new G({}),lt=new j({props:{name:"class transformers.VisualBertModel",anchor:"transformers.VisualBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.VisualBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L677"}}),mt=new j({props:{name:"forward",anchor:"transformers.VisualBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.VisualBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertModel.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertModel.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertModel.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertModel.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L716",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
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
`}}),$e=new Eo({props:{$$slots:{default:[kd]},$$scope:{ctx:B}}}),Ve=new Kt({props:{anchor:"transformers.VisualBertModel.forward.example",$$slots:{default:[Td]},$$scope:{ctx:B}}}),ft=new G({}),gt=new j({props:{name:"class transformers.VisualBertForPreTraining",anchor:"transformers.VisualBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L873"}}),kt=new j({props:{name:"forward",anchor:"transformers.VisualBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_image_labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisualBertForPreTraining.forward.sentence_image_labels",description:`<strong>sentence_image_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sentence-image prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a matching pair of sequence A for the given image,</li>
<li>1 indicates sequence B is a random sequence w.r.t A for the given image.</li>
</ul>`,name:"sentence_image_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L889",returnDescription:`
<p>A <code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the sentence-image prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the sentence-image prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new Eo({props:{$$slots:{default:[yd]},$$scope:{ctx:B}}}),qe=new Kt({props:{anchor:"transformers.VisualBertForPreTraining.forward.example",$$slots:{default:[wd]},$$scope:{ctx:B}}}),Tt=new G({}),yt=new j({props:{name:"class transformers.VisualBertForQuestionAnswering",anchor:"transformers.VisualBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1175"}}),Bt=new j({props:{name:"forward",anchor:"transformers.VisualBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A KLDivLoss is computed between the labels and the returned logits.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
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
`}}),Fe=new Eo({props:{$$slots:{default:[$d]},$$scope:{ctx:B}}}),Pe=new Kt({props:{anchor:"transformers.VisualBertForQuestionAnswering.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:B}}}),zt=new G({}),qt=new j({props:{name:"class transformers.VisualBertForMultipleChoice",anchor:"transformers.VisualBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1022"}}),Et=new j({props:{name:"forward",anchor:"transformers.VisualBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1033",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Eo({props:{$$slots:{default:[Bd]},$$scope:{ctx:B}}}),Ae=new Kt({props:{anchor:"transformers.VisualBertForMultipleChoice.forward.example",$$slots:{default:[zd]},$$scope:{ctx:B}}}),Mt=new G({}),At=new j({props:{name:"class transformers.VisualBertForVisualReasoning",anchor:"transformers.VisualBertForVisualReasoning",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1301"}}),Ot=new j({props:{name:"forward",anchor:"transformers.VisualBertForVisualReasoning.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForVisualReasoning.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForVisualReasoning.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForVisualReasoning.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForVisualReasoning.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A classification loss is computed (Cross-Entropy) against these labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1313",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
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
`}}),Ce=new Eo({props:{$$slots:{default:[qd]},$$scope:{ctx:B}}}),Le=new Kt({props:{anchor:"transformers.VisualBertForVisualReasoning.forward.example",$$slots:{default:[xd]},$$scope:{ctx:B}}}),Rt=new G({}),Nt=new j({props:{name:"class transformers.VisualBertForRegionToPhraseAlignment",anchor:"transformers.VisualBertForRegionToPhraseAlignment",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1461"}}),Wt=new j({props:{name:"forward",anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"region_to_phrase_position",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.region_to_phrase_position",description:`<strong>region_to_phrase_position</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
The positions depicting the position of the image embedding corresponding to the textual tokens.`,name:"region_to_phrase_position"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length, visual_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. KLDivLoss is computed against these labels and the
outputs from the attention layer.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1473",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
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
`}}),Re=new Eo({props:{$$slots:{default:[Fd]},$$scope:{ctx:B}}}),Ne=new Kt({props:{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.example",$$slots:{default:[Pd]},$$scope:{ctx:B}}}),{c(){d=n("meta"),b=p(),g=n("h1"),m=n("a"),v=n("span"),k(r.$$.fragment),u=p(),z=n("span"),zs=i("VisualBERT"),Bn=p(),J=n("h2"),me=n("a"),Mo=n("span"),k(Ge.$$.fragment),qs=p(),Ao=n("span"),xs=i("Overview"),zn=p(),fe=n("p"),Fs=i("The VisualBERT model was proposed in "),Je=n("a"),Ps=i("VisualBERT: A Simple and Performant Baseline for Vision and Language"),Es=i(` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),qn=p(),Jt=n("p"),Ms=i("The abstract from the paper is the following:"),xn=p(),Yt=n("p"),jo=n("em"),As=i(`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),Fn=p(),Xt=n("p"),js=i("Tips:"),Pn=p(),ge=n("ol"),Co=n("li"),Ye=n("p"),Cs=i("Most of the checkpoints provided work with the "),Zt=n("a"),Ls=i("VisualBertForPreTraining"),Os=i(` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),Rs=p(),Lo=n("li"),Oo=n("p"),Ns=i(`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),En=p(),Y=n("h2"),_e=n("a"),Ro=n("span"),k(Xe.$$.fragment),Is=p(),No=n("span"),Ds=i("Usage"),Mn=p(),eo=n("p"),Ss=i(`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),An=p(),to=n("p"),Ws=i(`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),jn=p(),ve=n("p"),Qs=i("The "),oo=n("a"),Hs=i("BertTokenizer"),Us=i(` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),Cn=p(),be=n("ul"),Io=n("li"),no=n("p"),Ze=n("a"),Ks=i("VisualBERT VQA demo notebook"),Gs=i(` : This notebook
contains an example on VisualBERT VQA.`),Js=p(),Do=n("li"),so=n("p"),et=n("a"),Ys=i("Generate Embeddings for VisualBERT (Colab Notebook)"),Xs=i(` : This notebook contains
an example on how to generate visual embeddings.`),Ln=p(),ke=n("p"),Zs=i("The following example shows how to get the last hidden state using "),ao=n("a"),ea=i("VisualBertModel"),ta=i(":"),On=p(),k(tt.$$.fragment),Rn=p(),D=n("p"),oa=i("This model was contributed by "),ot=n("a"),na=i("gchhablani"),sa=i(". The original code can be found "),nt=n("a"),aa=i("here"),ra=i("."),Nn=p(),X=n("h2"),Te=n("a"),So=n("span"),k(st.$$.fragment),ia=p(),Wo=n("span"),la=i("VisualBertConfig"),In=p(),A=n("div"),k(at.$$.fragment),da=p(),Z=n("p"),ca=i("This is the configuration class to store the configuration of a "),ro=n("a"),ua=i("VisualBertModel"),pa=i(`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=n("a"),ha=i("uclanlp/visualbert-vqa-coco-pre"),ma=i(" architecture."),fa=p(),ee=n("p"),ga=i("Configuration objects inherit from "),io=n("a"),_a=i("PretrainedConfig"),va=i(` and can be used to control the model outputs. Read the
documentation from `),lo=n("a"),ba=i("PretrainedConfig"),ka=i(" for more information."),Ta=p(),k(ye.$$.fragment),Dn=p(),te=n("h2"),we=n("a"),Qo=n("span"),k(it.$$.fragment),ya=p(),Ho=n("span"),wa=i("VisualBertModel"),Sn=p(),q=n("div"),k(lt.$$.fragment),$a=p(),dt=n("p"),Va=i(`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=n("a"),Ba=i("PreTrainedModel"),za=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa=p(),ct=n("p"),xa=i("This model is also a PyTorch "),ut=n("a"),Fa=i("torch.nn.Module"),Pa=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ea=p(),pt=n("p"),Ma=i("The model can behave as an encoder (with only self-attention) following the architecture described in "),ht=n("a"),Aa=i(`Attention is
all you need`),ja=i(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ca=p(),C=n("div"),k(mt.$$.fragment),La=p(),oe=n("p"),Oa=i("The "),uo=n("a"),Ra=i("VisualBertModel"),Na=i(" forward method, overrides the "),Uo=n("code"),Ia=i("__call__"),Da=i(" special method."),Sa=p(),k($e.$$.fragment),Wa=p(),k(Ve.$$.fragment),Wn=p(),ne=n("h2"),Be=n("a"),Ko=n("span"),k(ft.$$.fragment),Qa=p(),Go=n("span"),Ha=i("VisualBertForPreTraining"),Qn=p(),x=n("div"),k(gt.$$.fragment),Ua=p(),se=n("p"),Ka=i("VisualBert Model with two heads on top as done during the pretraining: a "),Jo=n("code"),Ga=i("masked language modeling"),Ja=i(` head and a
`),Yo=n("code"),Ya=i("sentence-image prediction (classification)"),Xa=i(" head."),Za=p(),_t=n("p"),er=i("This model inherits from "),po=n("a"),tr=i("PreTrainedModel"),or=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nr=p(),vt=n("p"),sr=i("This model is also a PyTorch "),bt=n("a"),ar=i("torch.nn.Module"),rr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ir=p(),L=n("div"),k(kt.$$.fragment),lr=p(),ae=n("p"),dr=i("The "),ho=n("a"),cr=i("VisualBertForPreTraining"),ur=i(" forward method, overrides the "),Xo=n("code"),pr=i("__call__"),hr=i(" special method."),mr=p(),k(ze.$$.fragment),fr=p(),k(qe.$$.fragment),Hn=p(),re=n("h2"),xe=n("a"),Zo=n("span"),k(Tt.$$.fragment),gr=p(),en=n("span"),_r=i("VisualBertForQuestionAnswering"),Un=p(),F=n("div"),k(yt.$$.fragment),vr=p(),tn=n("p"),br=i(`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),kr=p(),wt=n("p"),Tr=i("This model inherits from "),mo=n("a"),yr=i("PreTrainedModel"),wr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$r=p(),$t=n("p"),Vr=i("This model is also a PyTorch "),Vt=n("a"),Br=i("torch.nn.Module"),zr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qr=p(),O=n("div"),k(Bt.$$.fragment),xr=p(),ie=n("p"),Fr=i("The "),fo=n("a"),Pr=i("VisualBertForQuestionAnswering"),Er=i(" forward method, overrides the "),on=n("code"),Mr=i("__call__"),Ar=i(" special method."),jr=p(),k(Fe.$$.fragment),Cr=p(),k(Pe.$$.fragment),Kn=p(),le=n("h2"),Ee=n("a"),nn=n("span"),k(zt.$$.fragment),Lr=p(),sn=n("span"),Or=i("VisualBertForMultipleChoice"),Gn=p(),P=n("div"),k(qt.$$.fragment),Rr=p(),an=n("p"),Nr=i(`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Ir=p(),xt=n("p"),Dr=i("This model inherits from "),go=n("a"),Sr=i("PreTrainedModel"),Wr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr=p(),Ft=n("p"),Hr=i("This model is also a PyTorch "),Pt=n("a"),Ur=i("torch.nn.Module"),Kr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr=p(),R=n("div"),k(Et.$$.fragment),Jr=p(),de=n("p"),Yr=i("The "),_o=n("a"),Xr=i("VisualBertForMultipleChoice"),Zr=i(" forward method, overrides the "),rn=n("code"),ei=i("__call__"),ti=i(" special method."),oi=p(),k(Me.$$.fragment),ni=p(),k(Ae.$$.fragment),Jn=p(),ce=n("h2"),je=n("a"),ln=n("span"),k(Mt.$$.fragment),si=p(),dn=n("span"),ai=i("VisualBertForVisualReasoning"),Yn=p(),E=n("div"),k(At.$$.fragment),ri=p(),cn=n("p"),ii=i(`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),li=p(),jt=n("p"),di=i("This model inherits from "),vo=n("a"),ci=i("PreTrainedModel"),ui=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi=p(),Ct=n("p"),hi=i("This model is also a PyTorch "),Lt=n("a"),mi=i("torch.nn.Module"),fi=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gi=p(),N=n("div"),k(Ot.$$.fragment),_i=p(),ue=n("p"),vi=i("The "),bo=n("a"),bi=i("VisualBertForVisualReasoning"),ki=i(" forward method, overrides the "),un=n("code"),Ti=i("__call__"),yi=i(" special method."),wi=p(),k(Ce.$$.fragment),$i=p(),k(Le.$$.fragment),Xn=p(),pe=n("h2"),Oe=n("a"),pn=n("span"),k(Rt.$$.fragment),Vi=p(),hn=n("span"),Bi=i("VisualBertForRegionToPhraseAlignment"),Zn=p(),M=n("div"),k(Nt.$$.fragment),zi=p(),mn=n("p"),qi=i(`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),xi=p(),It=n("p"),Fi=i("This model inherits from "),ko=n("a"),Pi=i("PreTrainedModel"),Ei=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=p(),Dt=n("p"),Ai=i("This model is also a PyTorch "),St=n("a"),ji=i("torch.nn.Module"),Ci=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Li=p(),I=n("div"),k(Wt.$$.fragment),Oi=p(),he=n("p"),Ri=i("The "),To=n("a"),Ni=i("VisualBertForRegionToPhraseAlignment"),Ii=i(" forward method, overrides the "),fn=n("code"),Di=i("__call__"),Si=i(" special method."),Wi=p(),k(Re.$$.fragment),Qi=p(),k(Ne.$$.fragment),this.h()},l(t){const f=_d('[data-svelte="svelte-1phssyn"]',document.head);d=s(f,"META",{name:!0,content:!0}),f.forEach(o),b=h(t),g=s(t,"H1",{class:!0});var Qt=a(g);m=s(Qt,"A",{id:!0,class:!0,href:!0});var gn=a(m);v=s(gn,"SPAN",{});var _n=a(v);T(r.$$.fragment,_n),_n.forEach(o),gn.forEach(o),u=h(Qt),z=s(Qt,"SPAN",{});var vn=a(z);zs=l(vn,"VisualBERT"),vn.forEach(o),Qt.forEach(o),Bn=h(t),J=s(t,"H2",{class:!0});var Ht=a(J);me=s(Ht,"A",{id:!0,class:!0,href:!0});var bn=a(me);Mo=s(bn,"SPAN",{});var kn=a(Mo);T(Ge.$$.fragment,kn),kn.forEach(o),bn.forEach(o),qs=h(Ht),Ao=s(Ht,"SPAN",{});var Tn=a(Ao);xs=l(Tn,"Overview"),Tn.forEach(o),Ht.forEach(o),zn=h(t),fe=s(t,"P",{});var Ut=a(fe);Fs=l(Ut,"The VisualBERT model was proposed in "),Je=s(Ut,"A",{href:!0,rel:!0});var yn=a(Je);Ps=l(yn,"VisualBERT: A Simple and Performant Baseline for Vision and Language"),yn.forEach(o),Es=l(Ut,` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),Ut.forEach(o),qn=h(t),Jt=s(t,"P",{});var wn=a(Jt);Ms=l(wn,"The abstract from the paper is the following:"),wn.forEach(o),xn=h(t),Yt=s(t,"P",{});var $n=a(Yt);jo=s($n,"EM",{});var Vn=a(jo);As=l(Vn,`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),Vn.forEach(o),$n.forEach(o),Fn=h(t),Xt=s(t,"P",{});var Ki=a(Xt);js=l(Ki,"Tips:"),Ki.forEach(o),Pn=h(t),ge=s(t,"OL",{});var ts=a(ge);Co=s(ts,"LI",{});var Gi=a(Co);Ye=s(Gi,"P",{});var os=a(Ye);Cs=l(os,"Most of the checkpoints provided work with the "),Zt=s(os,"A",{href:!0});var Ji=a(Zt);Ls=l(Ji,"VisualBertForPreTraining"),Ji.forEach(o),Os=l(os,` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),os.forEach(o),Gi.forEach(o),Rs=h(ts),Lo=s(ts,"LI",{});var Yi=a(Lo);Oo=s(Yi,"P",{});var Xi=a(Oo);Ns=l(Xi,`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),Xi.forEach(o),Yi.forEach(o),ts.forEach(o),En=h(t),Y=s(t,"H2",{class:!0});var ns=a(Y);_e=s(ns,"A",{id:!0,class:!0,href:!0});var Zi=a(_e);Ro=s(Zi,"SPAN",{});var el=a(Ro);T(Xe.$$.fragment,el),el.forEach(o),Zi.forEach(o),Is=h(ns),No=s(ns,"SPAN",{});var tl=a(No);Ds=l(tl,"Usage"),tl.forEach(o),ns.forEach(o),Mn=h(t),eo=s(t,"P",{});var ol=a(eo);Ss=l(ol,`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),ol.forEach(o),An=h(t),to=s(t,"P",{});var nl=a(to);Ws=l(nl,`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),nl.forEach(o),jn=h(t),ve=s(t,"P",{});var ss=a(ve);Qs=l(ss,"The "),oo=s(ss,"A",{href:!0});var sl=a(oo);Hs=l(sl,"BertTokenizer"),sl.forEach(o),Us=l(ss,` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),ss.forEach(o),Cn=h(t),be=s(t,"UL",{});var as=a(be);Io=s(as,"LI",{});var al=a(Io);no=s(al,"P",{});var Hi=a(no);Ze=s(Hi,"A",{href:!0,rel:!0});var rl=a(Ze);Ks=l(rl,"VisualBERT VQA demo notebook"),rl.forEach(o),Gs=l(Hi,` : This notebook
contains an example on VisualBERT VQA.`),Hi.forEach(o),al.forEach(o),Js=h(as),Do=s(as,"LI",{});var il=a(Do);so=s(il,"P",{});var Ui=a(so);et=s(Ui,"A",{href:!0,rel:!0});var ll=a(et);Ys=l(ll,"Generate Embeddings for VisualBERT (Colab Notebook)"),ll.forEach(o),Xs=l(Ui,` : This notebook contains
an example on how to generate visual embeddings.`),Ui.forEach(o),il.forEach(o),as.forEach(o),Ln=h(t),ke=s(t,"P",{});var rs=a(ke);Zs=l(rs,"The following example shows how to get the last hidden state using "),ao=s(rs,"A",{href:!0});var dl=a(ao);ea=l(dl,"VisualBertModel"),dl.forEach(o),ta=l(rs,":"),rs.forEach(o),On=h(t),T(tt.$$.fragment,t),Rn=h(t),D=s(t,"P",{});var yo=a(D);oa=l(yo,"This model was contributed by "),ot=s(yo,"A",{href:!0,rel:!0});var cl=a(ot);na=l(cl,"gchhablani"),cl.forEach(o),sa=l(yo,". The original code can be found "),nt=s(yo,"A",{href:!0,rel:!0});var ul=a(nt);aa=l(ul,"here"),ul.forEach(o),ra=l(yo,"."),yo.forEach(o),Nn=h(t),X=s(t,"H2",{class:!0});var is=a(X);Te=s(is,"A",{id:!0,class:!0,href:!0});var pl=a(Te);So=s(pl,"SPAN",{});var hl=a(So);T(st.$$.fragment,hl),hl.forEach(o),pl.forEach(o),ia=h(is),Wo=s(is,"SPAN",{});var ml=a(Wo);la=l(ml,"VisualBertConfig"),ml.forEach(o),is.forEach(o),In=h(t),A=s(t,"DIV",{class:!0});var Ie=a(A);T(at.$$.fragment,Ie),da=h(Ie),Z=s(Ie,"P",{});var wo=a(Z);ca=l(wo,"This is the configuration class to store the configuration of a "),ro=s(wo,"A",{href:!0});var fl=a(ro);ua=l(fl,"VisualBertModel"),fl.forEach(o),pa=l(wo,`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=s(wo,"A",{href:!0,rel:!0});var gl=a(rt);ha=l(gl,"uclanlp/visualbert-vqa-coco-pre"),gl.forEach(o),ma=l(wo," architecture."),wo.forEach(o),fa=h(Ie),ee=s(Ie,"P",{});var $o=a(ee);ga=l($o,"Configuration objects inherit from "),io=s($o,"A",{href:!0});var _l=a(io);_a=l(_l,"PretrainedConfig"),_l.forEach(o),va=l($o,` and can be used to control the model outputs. Read the
documentation from `),lo=s($o,"A",{href:!0});var vl=a(lo);ba=l(vl,"PretrainedConfig"),vl.forEach(o),ka=l($o," for more information."),$o.forEach(o),Ta=h(Ie),T(ye.$$.fragment,Ie),Ie.forEach(o),Dn=h(t),te=s(t,"H2",{class:!0});var ls=a(te);we=s(ls,"A",{id:!0,class:!0,href:!0});var bl=a(we);Qo=s(bl,"SPAN",{});var kl=a(Qo);T(it.$$.fragment,kl),kl.forEach(o),bl.forEach(o),ya=h(ls),Ho=s(ls,"SPAN",{});var Tl=a(Ho);wa=l(Tl,"VisualBertModel"),Tl.forEach(o),ls.forEach(o),Sn=h(t),q=s(t,"DIV",{class:!0});var S=a(q);T(lt.$$.fragment,S),$a=h(S),dt=s(S,"P",{});var ds=a(dt);Va=l(ds,`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=s(ds,"A",{href:!0});var yl=a(co);Ba=l(yl,"PreTrainedModel"),yl.forEach(o),za=l(ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ds.forEach(o),qa=h(S),ct=s(S,"P",{});var cs=a(ct);xa=l(cs,"This model is also a PyTorch "),ut=s(cs,"A",{href:!0,rel:!0});var wl=a(ut);Fa=l(wl,"torch.nn.Module"),wl.forEach(o),Pa=l(cs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cs.forEach(o),Ea=h(S),pt=s(S,"P",{});var us=a(pt);Ma=l(us,"The model can behave as an encoder (with only self-attention) following the architecture described in "),ht=s(us,"A",{href:!0,rel:!0});var $l=a(ht);Aa=l($l,`Attention is
all you need`),$l.forEach(o),ja=l(us,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),us.forEach(o),Ca=h(S),C=s(S,"DIV",{class:!0});var De=a(C);T(mt.$$.fragment,De),La=h(De),oe=s(De,"P",{});var Vo=a(oe);Oa=l(Vo,"The "),uo=s(Vo,"A",{href:!0});var Vl=a(uo);Ra=l(Vl,"VisualBertModel"),Vl.forEach(o),Na=l(Vo," forward method, overrides the "),Uo=s(Vo,"CODE",{});var Bl=a(Uo);Ia=l(Bl,"__call__"),Bl.forEach(o),Da=l(Vo," special method."),Vo.forEach(o),Sa=h(De),T($e.$$.fragment,De),Wa=h(De),T(Ve.$$.fragment,De),De.forEach(o),S.forEach(o),Wn=h(t),ne=s(t,"H2",{class:!0});var ps=a(ne);Be=s(ps,"A",{id:!0,class:!0,href:!0});var zl=a(Be);Ko=s(zl,"SPAN",{});var ql=a(Ko);T(ft.$$.fragment,ql),ql.forEach(o),zl.forEach(o),Qa=h(ps),Go=s(ps,"SPAN",{});var xl=a(Go);Ha=l(xl,"VisualBertForPreTraining"),xl.forEach(o),ps.forEach(o),Qn=h(t),x=s(t,"DIV",{class:!0});var W=a(x);T(gt.$$.fragment,W),Ua=h(W),se=s(W,"P",{});var Bo=a(se);Ka=l(Bo,"VisualBert Model with two heads on top as done during the pretraining: a "),Jo=s(Bo,"CODE",{});var Fl=a(Jo);Ga=l(Fl,"masked language modeling"),Fl.forEach(o),Ja=l(Bo,` head and a
`),Yo=s(Bo,"CODE",{});var Pl=a(Yo);Ya=l(Pl,"sentence-image prediction (classification)"),Pl.forEach(o),Xa=l(Bo," head."),Bo.forEach(o),Za=h(W),_t=s(W,"P",{});var hs=a(_t);er=l(hs,"This model inherits from "),po=s(hs,"A",{href:!0});var El=a(po);tr=l(El,"PreTrainedModel"),El.forEach(o),or=l(hs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hs.forEach(o),nr=h(W),vt=s(W,"P",{});var ms=a(vt);sr=l(ms,"This model is also a PyTorch "),bt=s(ms,"A",{href:!0,rel:!0});var Ml=a(bt);ar=l(Ml,"torch.nn.Module"),Ml.forEach(o),rr=l(ms,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ms.forEach(o),ir=h(W),L=s(W,"DIV",{class:!0});var Se=a(L);T(kt.$$.fragment,Se),lr=h(Se),ae=s(Se,"P",{});var zo=a(ae);dr=l(zo,"The "),ho=s(zo,"A",{href:!0});var Al=a(ho);cr=l(Al,"VisualBertForPreTraining"),Al.forEach(o),ur=l(zo," forward method, overrides the "),Xo=s(zo,"CODE",{});var jl=a(Xo);pr=l(jl,"__call__"),jl.forEach(o),hr=l(zo," special method."),zo.forEach(o),mr=h(Se),T(ze.$$.fragment,Se),fr=h(Se),T(qe.$$.fragment,Se),Se.forEach(o),W.forEach(o),Hn=h(t),re=s(t,"H2",{class:!0});var fs=a(re);xe=s(fs,"A",{id:!0,class:!0,href:!0});var Cl=a(xe);Zo=s(Cl,"SPAN",{});var Ll=a(Zo);T(Tt.$$.fragment,Ll),Ll.forEach(o),Cl.forEach(o),gr=h(fs),en=s(fs,"SPAN",{});var Ol=a(en);_r=l(Ol,"VisualBertForQuestionAnswering"),Ol.forEach(o),fs.forEach(o),Un=h(t),F=s(t,"DIV",{class:!0});var Q=a(F);T(yt.$$.fragment,Q),vr=h(Q),tn=s(Q,"P",{});var Rl=a(tn);br=l(Rl,`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),Rl.forEach(o),kr=h(Q),wt=s(Q,"P",{});var gs=a(wt);Tr=l(gs,"This model inherits from "),mo=s(gs,"A",{href:!0});var Nl=a(mo);yr=l(Nl,"PreTrainedModel"),Nl.forEach(o),wr=l(gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gs.forEach(o),$r=h(Q),$t=s(Q,"P",{});var _s=a($t);Vr=l(_s,"This model is also a PyTorch "),Vt=s(_s,"A",{href:!0,rel:!0});var Il=a(Vt);Br=l(Il,"torch.nn.Module"),Il.forEach(o),zr=l(_s,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_s.forEach(o),qr=h(Q),O=s(Q,"DIV",{class:!0});var We=a(O);T(Bt.$$.fragment,We),xr=h(We),ie=s(We,"P",{});var qo=a(ie);Fr=l(qo,"The "),fo=s(qo,"A",{href:!0});var Dl=a(fo);Pr=l(Dl,"VisualBertForQuestionAnswering"),Dl.forEach(o),Er=l(qo," forward method, overrides the "),on=s(qo,"CODE",{});var Sl=a(on);Mr=l(Sl,"__call__"),Sl.forEach(o),Ar=l(qo," special method."),qo.forEach(o),jr=h(We),T(Fe.$$.fragment,We),Cr=h(We),T(Pe.$$.fragment,We),We.forEach(o),Q.forEach(o),Kn=h(t),le=s(t,"H2",{class:!0});var vs=a(le);Ee=s(vs,"A",{id:!0,class:!0,href:!0});var Wl=a(Ee);nn=s(Wl,"SPAN",{});var Ql=a(nn);T(zt.$$.fragment,Ql),Ql.forEach(o),Wl.forEach(o),Lr=h(vs),sn=s(vs,"SPAN",{});var Hl=a(sn);Or=l(Hl,"VisualBertForMultipleChoice"),Hl.forEach(o),vs.forEach(o),Gn=h(t),P=s(t,"DIV",{class:!0});var H=a(P);T(qt.$$.fragment,H),Rr=h(H),an=s(H,"P",{});var Ul=a(an);Nr=l(Ul,`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Ul.forEach(o),Ir=h(H),xt=s(H,"P",{});var bs=a(xt);Dr=l(bs,"This model inherits from "),go=s(bs,"A",{href:!0});var Kl=a(go);Sr=l(Kl,"PreTrainedModel"),Kl.forEach(o),Wr=l(bs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bs.forEach(o),Qr=h(H),Ft=s(H,"P",{});var ks=a(Ft);Hr=l(ks,"This model is also a PyTorch "),Pt=s(ks,"A",{href:!0,rel:!0});var Gl=a(Pt);Ur=l(Gl,"torch.nn.Module"),Gl.forEach(o),Kr=l(ks,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ks.forEach(o),Gr=h(H),R=s(H,"DIV",{class:!0});var Qe=a(R);T(Et.$$.fragment,Qe),Jr=h(Qe),de=s(Qe,"P",{});var xo=a(de);Yr=l(xo,"The "),_o=s(xo,"A",{href:!0});var Jl=a(_o);Xr=l(Jl,"VisualBertForMultipleChoice"),Jl.forEach(o),Zr=l(xo," forward method, overrides the "),rn=s(xo,"CODE",{});var Yl=a(rn);ei=l(Yl,"__call__"),Yl.forEach(o),ti=l(xo," special method."),xo.forEach(o),oi=h(Qe),T(Me.$$.fragment,Qe),ni=h(Qe),T(Ae.$$.fragment,Qe),Qe.forEach(o),H.forEach(o),Jn=h(t),ce=s(t,"H2",{class:!0});var Ts=a(ce);je=s(Ts,"A",{id:!0,class:!0,href:!0});var Xl=a(je);ln=s(Xl,"SPAN",{});var Zl=a(ln);T(Mt.$$.fragment,Zl),Zl.forEach(o),Xl.forEach(o),si=h(Ts),dn=s(Ts,"SPAN",{});var ed=a(dn);ai=l(ed,"VisualBertForVisualReasoning"),ed.forEach(o),Ts.forEach(o),Yn=h(t),E=s(t,"DIV",{class:!0});var U=a(E);T(At.$$.fragment,U),ri=h(U),cn=s(U,"P",{});var td=a(cn);ii=l(td,`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),td.forEach(o),li=h(U),jt=s(U,"P",{});var ys=a(jt);di=l(ys,"This model inherits from "),vo=s(ys,"A",{href:!0});var od=a(vo);ci=l(od,"PreTrainedModel"),od.forEach(o),ui=l(ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ys.forEach(o),pi=h(U),Ct=s(U,"P",{});var ws=a(Ct);hi=l(ws,"This model is also a PyTorch "),Lt=s(ws,"A",{href:!0,rel:!0});var nd=a(Lt);mi=l(nd,"torch.nn.Module"),nd.forEach(o),fi=l(ws,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ws.forEach(o),gi=h(U),N=s(U,"DIV",{class:!0});var He=a(N);T(Ot.$$.fragment,He),_i=h(He),ue=s(He,"P",{});var Fo=a(ue);vi=l(Fo,"The "),bo=s(Fo,"A",{href:!0});var sd=a(bo);bi=l(sd,"VisualBertForVisualReasoning"),sd.forEach(o),ki=l(Fo," forward method, overrides the "),un=s(Fo,"CODE",{});var ad=a(un);Ti=l(ad,"__call__"),ad.forEach(o),yi=l(Fo," special method."),Fo.forEach(o),wi=h(He),T(Ce.$$.fragment,He),$i=h(He),T(Le.$$.fragment,He),He.forEach(o),U.forEach(o),Xn=h(t),pe=s(t,"H2",{class:!0});var $s=a(pe);Oe=s($s,"A",{id:!0,class:!0,href:!0});var rd=a(Oe);pn=s(rd,"SPAN",{});var id=a(pn);T(Rt.$$.fragment,id),id.forEach(o),rd.forEach(o),Vi=h($s),hn=s($s,"SPAN",{});var ld=a(hn);Bi=l(ld,"VisualBertForRegionToPhraseAlignment"),ld.forEach(o),$s.forEach(o),Zn=h(t),M=s(t,"DIV",{class:!0});var K=a(M);T(Nt.$$.fragment,K),zi=h(K),mn=s(K,"P",{});var dd=a(mn);qi=l(dd,`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),dd.forEach(o),xi=h(K),It=s(K,"P",{});var Vs=a(It);Fi=l(Vs,"This model inherits from "),ko=s(Vs,"A",{href:!0});var cd=a(ko);Pi=l(cd,"PreTrainedModel"),cd.forEach(o),Ei=l(Vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs.forEach(o),Mi=h(K),Dt=s(K,"P",{});var Bs=a(Dt);Ai=l(Bs,"This model is also a PyTorch "),St=s(Bs,"A",{href:!0,rel:!0});var ud=a(St);ji=l(ud,"torch.nn.Module"),ud.forEach(o),Ci=l(Bs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bs.forEach(o),Li=h(K),I=s(K,"DIV",{class:!0});var Ue=a(I);T(Wt.$$.fragment,Ue),Oi=h(Ue),he=s(Ue,"P",{});var Po=a(he);Ri=l(Po,"The "),To=s(Po,"A",{href:!0});var pd=a(To);Ni=l(pd,"VisualBertForRegionToPhraseAlignment"),pd.forEach(o),Ii=l(Po," forward method, overrides the "),fn=s(Po,"CODE",{});var hd=a(fn);Di=l(hd,"__call__"),hd.forEach(o),Si=l(Po," special method."),Po.forEach(o),Wi=h(Ue),T(Re.$$.fragment,Ue),Qi=h(Ue),T(Ne.$$.fragment,Ue),Ue.forEach(o),K.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Md)),c(m,"id","visualbert"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#visualbert"),c(g,"class","relative group"),c(me,"id","overview"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#overview"),c(J,"class","relative group"),c(Je,"href","https://arxiv.org/pdf/1908.03557"),c(Je,"rel","nofollow"),c(Zt,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(_e,"id","usage"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#usage"),c(Y,"class","relative group"),c(oo,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),c(Ze,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/visual_bert"),c(Ze,"rel","nofollow"),c(et,"href","https://colab.research.google.com/drive/1bLGxKdldwqnMVA5x4neY7-l_8fKGWQYI?usp=sharing"),c(et,"rel","nofollow"),c(ao,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel"),c(ot,"href","https://huggingface.co/gchhablani"),c(ot,"rel","nofollow"),c(nt,"href","https://github.com/uclanlp/visualbert"),c(nt,"rel","nofollow"),c(Te,"id","transformers.VisualBertConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.VisualBertConfig"),c(X,"class","relative group"),c(ro,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel"),c(rt,"href","https://huggingface.co/uclanlp/visualbert-vqa-coco-pre"),c(rt,"rel","nofollow"),c(io,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(lo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(we,"id","transformers.VisualBertModel"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.VisualBertModel"),c(te,"class","relative group"),c(co,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ut,"rel","nofollow"),c(ht,"href","https://arxiv.org/abs/1706.03762"),c(ht,"rel","nofollow"),c(uo,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"id","transformers.VisualBertForPreTraining"),c(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Be,"href","#transformers.VisualBertForPreTraining"),c(ne,"class","relative group"),c(po,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bt,"rel","nofollow"),c(ho,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.VisualBertForQuestionAnswering"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.VisualBertForQuestionAnswering"),c(re,"class","relative group"),c(mo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vt,"rel","nofollow"),c(fo,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForQuestionAnswering"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.VisualBertForMultipleChoice"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.VisualBertForMultipleChoice"),c(le,"class","relative group"),c(go,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Pt,"rel","nofollow"),c(_o,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForMultipleChoice"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.VisualBertForVisualReasoning"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.VisualBertForVisualReasoning"),c(ce,"class","relative group"),c(vo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(bo,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForVisualReasoning"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.VisualBertForRegionToPhraseAlignment"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.VisualBertForRegionToPhraseAlignment"),c(pe,"class","relative group"),c(ko,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(St,"rel","nofollow"),c(To,"href","/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForRegionToPhraseAlignment"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,b,f),_(t,g,f),e(g,m),e(m,v),y(r,v,null),e(g,u),e(g,z),e(z,zs),_(t,Bn,f),_(t,J,f),e(J,me),e(me,Mo),y(Ge,Mo,null),e(J,qs),e(J,Ao),e(Ao,xs),_(t,zn,f),_(t,fe,f),e(fe,Fs),e(fe,Je),e(Je,Ps),e(fe,Es),_(t,qn,f),_(t,Jt,f),e(Jt,Ms),_(t,xn,f),_(t,Yt,f),e(Yt,jo),e(jo,As),_(t,Fn,f),_(t,Xt,f),e(Xt,js),_(t,Pn,f),_(t,ge,f),e(ge,Co),e(Co,Ye),e(Ye,Cs),e(Ye,Zt),e(Zt,Ls),e(Ye,Os),e(ge,Rs),e(ge,Lo),e(Lo,Oo),e(Oo,Ns),_(t,En,f),_(t,Y,f),e(Y,_e),e(_e,Ro),y(Xe,Ro,null),e(Y,Is),e(Y,No),e(No,Ds),_(t,Mn,f),_(t,eo,f),e(eo,Ss),_(t,An,f),_(t,to,f),e(to,Ws),_(t,jn,f),_(t,ve,f),e(ve,Qs),e(ve,oo),e(oo,Hs),e(ve,Us),_(t,Cn,f),_(t,be,f),e(be,Io),e(Io,no),e(no,Ze),e(Ze,Ks),e(no,Gs),e(be,Js),e(be,Do),e(Do,so),e(so,et),e(et,Ys),e(so,Xs),_(t,Ln,f),_(t,ke,f),e(ke,Zs),e(ke,ao),e(ao,ea),e(ke,ta),_(t,On,f),y(tt,t,f),_(t,Rn,f),_(t,D,f),e(D,oa),e(D,ot),e(ot,na),e(D,sa),e(D,nt),e(nt,aa),e(D,ra),_(t,Nn,f),_(t,X,f),e(X,Te),e(Te,So),y(st,So,null),e(X,ia),e(X,Wo),e(Wo,la),_(t,In,f),_(t,A,f),y(at,A,null),e(A,da),e(A,Z),e(Z,ca),e(Z,ro),e(ro,ua),e(Z,pa),e(Z,rt),e(rt,ha),e(Z,ma),e(A,fa),e(A,ee),e(ee,ga),e(ee,io),e(io,_a),e(ee,va),e(ee,lo),e(lo,ba),e(ee,ka),e(A,Ta),y(ye,A,null),_(t,Dn,f),_(t,te,f),e(te,we),e(we,Qo),y(it,Qo,null),e(te,ya),e(te,Ho),e(Ho,wa),_(t,Sn,f),_(t,q,f),y(lt,q,null),e(q,$a),e(q,dt),e(dt,Va),e(dt,co),e(co,Ba),e(dt,za),e(q,qa),e(q,ct),e(ct,xa),e(ct,ut),e(ut,Fa),e(ct,Pa),e(q,Ea),e(q,pt),e(pt,Ma),e(pt,ht),e(ht,Aa),e(pt,ja),e(q,Ca),e(q,C),y(mt,C,null),e(C,La),e(C,oe),e(oe,Oa),e(oe,uo),e(uo,Ra),e(oe,Na),e(oe,Uo),e(Uo,Ia),e(oe,Da),e(C,Sa),y($e,C,null),e(C,Wa),y(Ve,C,null),_(t,Wn,f),_(t,ne,f),e(ne,Be),e(Be,Ko),y(ft,Ko,null),e(ne,Qa),e(ne,Go),e(Go,Ha),_(t,Qn,f),_(t,x,f),y(gt,x,null),e(x,Ua),e(x,se),e(se,Ka),e(se,Jo),e(Jo,Ga),e(se,Ja),e(se,Yo),e(Yo,Ya),e(se,Xa),e(x,Za),e(x,_t),e(_t,er),e(_t,po),e(po,tr),e(_t,or),e(x,nr),e(x,vt),e(vt,sr),e(vt,bt),e(bt,ar),e(vt,rr),e(x,ir),e(x,L),y(kt,L,null),e(L,lr),e(L,ae),e(ae,dr),e(ae,ho),e(ho,cr),e(ae,ur),e(ae,Xo),e(Xo,pr),e(ae,hr),e(L,mr),y(ze,L,null),e(L,fr),y(qe,L,null),_(t,Hn,f),_(t,re,f),e(re,xe),e(xe,Zo),y(Tt,Zo,null),e(re,gr),e(re,en),e(en,_r),_(t,Un,f),_(t,F,f),y(yt,F,null),e(F,vr),e(F,tn),e(tn,br),e(F,kr),e(F,wt),e(wt,Tr),e(wt,mo),e(mo,yr),e(wt,wr),e(F,$r),e(F,$t),e($t,Vr),e($t,Vt),e(Vt,Br),e($t,zr),e(F,qr),e(F,O),y(Bt,O,null),e(O,xr),e(O,ie),e(ie,Fr),e(ie,fo),e(fo,Pr),e(ie,Er),e(ie,on),e(on,Mr),e(ie,Ar),e(O,jr),y(Fe,O,null),e(O,Cr),y(Pe,O,null),_(t,Kn,f),_(t,le,f),e(le,Ee),e(Ee,nn),y(zt,nn,null),e(le,Lr),e(le,sn),e(sn,Or),_(t,Gn,f),_(t,P,f),y(qt,P,null),e(P,Rr),e(P,an),e(an,Nr),e(P,Ir),e(P,xt),e(xt,Dr),e(xt,go),e(go,Sr),e(xt,Wr),e(P,Qr),e(P,Ft),e(Ft,Hr),e(Ft,Pt),e(Pt,Ur),e(Ft,Kr),e(P,Gr),e(P,R),y(Et,R,null),e(R,Jr),e(R,de),e(de,Yr),e(de,_o),e(_o,Xr),e(de,Zr),e(de,rn),e(rn,ei),e(de,ti),e(R,oi),y(Me,R,null),e(R,ni),y(Ae,R,null),_(t,Jn,f),_(t,ce,f),e(ce,je),e(je,ln),y(Mt,ln,null),e(ce,si),e(ce,dn),e(dn,ai),_(t,Yn,f),_(t,E,f),y(At,E,null),e(E,ri),e(E,cn),e(cn,ii),e(E,li),e(E,jt),e(jt,di),e(jt,vo),e(vo,ci),e(jt,ui),e(E,pi),e(E,Ct),e(Ct,hi),e(Ct,Lt),e(Lt,mi),e(Ct,fi),e(E,gi),e(E,N),y(Ot,N,null),e(N,_i),e(N,ue),e(ue,vi),e(ue,bo),e(bo,bi),e(ue,ki),e(ue,un),e(un,Ti),e(ue,yi),e(N,wi),y(Ce,N,null),e(N,$i),y(Le,N,null),_(t,Xn,f),_(t,pe,f),e(pe,Oe),e(Oe,pn),y(Rt,pn,null),e(pe,Vi),e(pe,hn),e(hn,Bi),_(t,Zn,f),_(t,M,f),y(Nt,M,null),e(M,zi),e(M,mn),e(mn,qi),e(M,xi),e(M,It),e(It,Fi),e(It,ko),e(ko,Pi),e(It,Ei),e(M,Mi),e(M,Dt),e(Dt,Ai),e(Dt,St),e(St,ji),e(Dt,Ci),e(M,Li),e(M,I),y(Wt,I,null),e(I,Oi),e(I,he),e(he,Ri),e(he,To),e(To,Ni),e(he,Ii),e(he,fn),e(fn,Di),e(he,Si),e(I,Wi),y(Re,I,null),e(I,Qi),y(Ne,I,null),es=!0},p(t,[f]){const Qt={};f&2&&(Qt.$$scope={dirty:f,ctx:t}),ye.$set(Qt);const gn={};f&2&&(gn.$$scope={dirty:f,ctx:t}),$e.$set(gn);const _n={};f&2&&(_n.$$scope={dirty:f,ctx:t}),Ve.$set(_n);const vn={};f&2&&(vn.$$scope={dirty:f,ctx:t}),ze.$set(vn);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:t}),qe.$set(Ht);const bn={};f&2&&(bn.$$scope={dirty:f,ctx:t}),Fe.$set(bn);const kn={};f&2&&(kn.$$scope={dirty:f,ctx:t}),Pe.$set(kn);const Tn={};f&2&&(Tn.$$scope={dirty:f,ctx:t}),Me.$set(Tn);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:t}),Ae.$set(Ut);const yn={};f&2&&(yn.$$scope={dirty:f,ctx:t}),Ce.$set(yn);const wn={};f&2&&(wn.$$scope={dirty:f,ctx:t}),Le.$set(wn);const $n={};f&2&&($n.$$scope={dirty:f,ctx:t}),Re.$set($n);const Vn={};f&2&&(Vn.$$scope={dirty:f,ctx:t}),Ne.$set(Vn)},i(t){es||(w(r.$$.fragment,t),w(Ge.$$.fragment,t),w(Xe.$$.fragment,t),w(tt.$$.fragment,t),w(st.$$.fragment,t),w(at.$$.fragment,t),w(ye.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(mt.$$.fragment,t),w($e.$$.fragment,t),w(Ve.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(kt.$$.fragment,t),w(ze.$$.fragment,t),w(qe.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(Bt.$$.fragment,t),w(Fe.$$.fragment,t),w(Pe.$$.fragment,t),w(zt.$$.fragment,t),w(qt.$$.fragment,t),w(Et.$$.fragment,t),w(Me.$$.fragment,t),w(Ae.$$.fragment,t),w(Mt.$$.fragment,t),w(At.$$.fragment,t),w(Ot.$$.fragment,t),w(Ce.$$.fragment,t),w(Le.$$.fragment,t),w(Rt.$$.fragment,t),w(Nt.$$.fragment,t),w(Wt.$$.fragment,t),w(Re.$$.fragment,t),w(Ne.$$.fragment,t),es=!0)},o(t){$(r.$$.fragment,t),$(Ge.$$.fragment,t),$(Xe.$$.fragment,t),$(tt.$$.fragment,t),$(st.$$.fragment,t),$(at.$$.fragment,t),$(ye.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(mt.$$.fragment,t),$($e.$$.fragment,t),$(Ve.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(kt.$$.fragment,t),$(ze.$$.fragment,t),$(qe.$$.fragment,t),$(Tt.$$.fragment,t),$(yt.$$.fragment,t),$(Bt.$$.fragment,t),$(Fe.$$.fragment,t),$(Pe.$$.fragment,t),$(zt.$$.fragment,t),$(qt.$$.fragment,t),$(Et.$$.fragment,t),$(Me.$$.fragment,t),$(Ae.$$.fragment,t),$(Mt.$$.fragment,t),$(At.$$.fragment,t),$(Ot.$$.fragment,t),$(Ce.$$.fragment,t),$(Le.$$.fragment,t),$(Rt.$$.fragment,t),$(Nt.$$.fragment,t),$(Wt.$$.fragment,t),$(Re.$$.fragment,t),$(Ne.$$.fragment,t),es=!1},d(t){o(d),t&&o(b),t&&o(g),V(r),t&&o(Bn),t&&o(J),V(Ge),t&&o(zn),t&&o(fe),t&&o(qn),t&&o(Jt),t&&o(xn),t&&o(Yt),t&&o(Fn),t&&o(Xt),t&&o(Pn),t&&o(ge),t&&o(En),t&&o(Y),V(Xe),t&&o(Mn),t&&o(eo),t&&o(An),t&&o(to),t&&o(jn),t&&o(ve),t&&o(Cn),t&&o(be),t&&o(Ln),t&&o(ke),t&&o(On),V(tt,t),t&&o(Rn),t&&o(D),t&&o(Nn),t&&o(X),V(st),t&&o(In),t&&o(A),V(at),V(ye),t&&o(Dn),t&&o(te),V(it),t&&o(Sn),t&&o(q),V(lt),V(mt),V($e),V(Ve),t&&o(Wn),t&&o(ne),V(ft),t&&o(Qn),t&&o(x),V(gt),V(kt),V(ze),V(qe),t&&o(Hn),t&&o(re),V(Tt),t&&o(Un),t&&o(F),V(yt),V(Bt),V(Fe),V(Pe),t&&o(Kn),t&&o(le),V(zt),t&&o(Gn),t&&o(P),V(qt),V(Et),V(Me),V(Ae),t&&o(Jn),t&&o(ce),V(Mt),t&&o(Yn),t&&o(E),V(At),V(Ot),V(Ce),V(Le),t&&o(Xn),t&&o(pe),V(Rt),t&&o(Zn),t&&o(M),V(Nt),V(Wt),V(Re),V(Ne)}}}const Md={local:"visualbert",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.VisualBertConfig",title:"VisualBertConfig"},{local:"transformers.VisualBertModel",title:"VisualBertModel"},{local:"transformers.VisualBertForPreTraining",title:"VisualBertForPreTraining"},{local:"transformers.VisualBertForQuestionAnswering",title:"VisualBertForQuestionAnswering"},{local:"transformers.VisualBertForMultipleChoice",title:"VisualBertForMultipleChoice"},{local:"transformers.VisualBertForVisualReasoning",title:"VisualBertForVisualReasoning"},{local:"transformers.VisualBertForRegionToPhraseAlignment",title:"VisualBertForRegionToPhraseAlignment"}],title:"VisualBERT"};function Ad(B){return vd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Id extends md{constructor(d){super();fd(this,d,Ad,Ed,gd,{})}}export{Id as default,Md as metadata};
