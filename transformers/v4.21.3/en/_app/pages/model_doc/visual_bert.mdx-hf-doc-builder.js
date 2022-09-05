import{S as md,i as fd,s as gd,e as s,k as p,w as k,t as i,M as _d,c as n,d as o,m as h,a,x as T,h as l,b as c,G as e,g as _,y,q as w,o as $,B as V,v as vd,L as Gt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Eo}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ke}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Kt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bd(B){let d,b,g,m,v;return m=new Ke({props:{code:`from transformers import VisualBertModel, VisualBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function kd(B){let d,b,g,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var q=a(g);m=l(q,"Module"),q.forEach(o),v=l(u,`
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

last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function yd(B){let d,b,g,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var q=a(g);m=l(q,"Module"),q.forEach(o),v=l(u,`
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
seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function $d(B){let d,b,g,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var q=a(g);m=l(q,"Module"),q.forEach(o),v=l(u,`
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
scores = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Bd(B){let d,b,g,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var q=a(g);m=l(q,"Module"),q.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(r,u){_(r,d,u),e(d,b),e(d,g),e(g,m),e(d,v)},d(r){r&&o(d)}}}function qd(B){let d,b,g,m,v;return m=new Ke({props:{code:`# Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.
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
logits = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function zd(B){let d,b,g,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var q=a(g);m=l(q,"Module"),q.forEach(o),v=l(u,`
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
scores = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Fd(B){let d,b,g,m,v;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var q=a(g);m=l(q,"Module"),q.forEach(o),v=l(u,`
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
scores = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),g=p(),k(m.$$.fragment)},l(r){d=n(r,"P",{});var u=a(d);b=l(u,"Example:"),u.forEach(o),g=h(r),T(m.$$.fragment,r)},m(r,u){_(r,d,u),e(d,b),_(r,g,u),y(m,r,u),v=!0},p:Gt,i(r){v||(w(m.$$.fragment,r),v=!0)},o(r){$(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(g),V(m,r)}}}function Ed(B){let d,b,g,m,v,r,u,q,qn,Vs,J,me,Mo,Ge,zn,Ao,xn,Bs,fe,Fn,Je,Pn,En,qs,Jt,Mn,zs,Yt,jo,An,xs,Xt,jn,Fs,ge,Co,Ye,Cn,Zt,Ln,On,Rn,Lo,Oo,Nn,Ps,Y,_e,Ro,Xe,In,No,Dn,Es,eo,Sn,Ms,to,Wn,As,ve,Qn,oo,Hn,Un,js,be,Io,so,Ze,Kn,Gn,Jn,Do,no,et,Yn,Xn,Cs,ke,Zn,ao,ea,ta,Ls,tt,Os,D,oa,ot,sa,na,st,aa,ra,Rs,X,Te,So,nt,ia,Wo,la,Ns,A,at,da,Z,ca,ro,ua,pa,rt,ha,ma,fa,ee,ga,io,_a,va,lo,ba,ka,Ta,ye,Is,te,we,Qo,it,ya,Ho,wa,Ds,z,lt,$a,dt,Va,co,Ba,qa,za,ct,xa,ut,Fa,Pa,Ea,pt,Ma,ht,Aa,ja,Ca,C,mt,La,oe,Oa,uo,Ra,Na,Uo,Ia,Da,Sa,$e,Wa,Ve,Ss,se,Be,Ko,ft,Qa,Go,Ha,Ws,x,gt,Ua,ne,Ka,Jo,Ga,Ja,Yo,Ya,Xa,Za,_t,er,po,tr,or,sr,vt,nr,bt,ar,rr,ir,L,kt,lr,ae,dr,ho,cr,ur,Xo,pr,hr,mr,qe,fr,ze,Qs,re,xe,Zo,Tt,gr,es,_r,Hs,F,yt,vr,ts,br,kr,wt,Tr,mo,yr,wr,$r,$t,Vr,Vt,Br,qr,zr,O,Bt,xr,ie,Fr,fo,Pr,Er,os,Mr,Ar,jr,Fe,Cr,Pe,Us,le,Ee,ss,qt,Lr,ns,Or,Ks,P,zt,Rr,as,Nr,Ir,xt,Dr,go,Sr,Wr,Qr,Ft,Hr,Pt,Ur,Kr,Gr,R,Et,Jr,de,Yr,_o,Xr,Zr,rs,ei,ti,oi,Me,si,Ae,Gs,ce,je,is,Mt,ni,ls,ai,Js,E,At,ri,ds,ii,li,jt,di,vo,ci,ui,pi,Ct,hi,Lt,mi,fi,gi,N,Ot,_i,ue,vi,bo,bi,ki,cs,Ti,yi,wi,Ce,$i,Le,Ys,pe,Oe,us,Rt,Vi,ps,Bi,Xs,M,Nt,qi,hs,zi,xi,It,Fi,ko,Pi,Ei,Mi,Dt,Ai,St,ji,Ci,Li,I,Wt,Oi,he,Ri,To,Ni,Ii,ms,Di,Si,Wi,Re,Qi,Ne,Zs;return r=new G({}),Ge=new G({}),Xe=new G({}),tt=new Ke({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`}}),nt=new G({}),at=new j({props:{name:"class transformers.VisualBertConfig",anchor:"transformers.VisualBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"visual_embedding_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"bypass_transformer",val:" = False"},{name:"special_visual_initialize",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisualBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the VisualBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <code>inputs_ids</code> passed to the forward method of
<a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.VisualBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.VisualBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VisualBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VisualBertConfig.bypass_transformer",description:`<strong>bypass_transformer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should bypass the transformer for the visual embeddings. If set to <code>True</code>, the
model directly concatenates the visual embeddings from <code>VisualBertEmbeddings</code> with text output from
transformers, and then pass it to a self-attention layer.`,name:"bypass_transformer"},{anchor:"transformers.VisualBertConfig.special_visual_initialize",description:`<strong>special_visual_initialize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the visual token type and position type embedding weights should be initialized the same as
the textual token type and positive type embeddings. When set to <code>True</code>, the weights of the textual token
type and position type embeddings are copied to the respective visual embedding layers.`,name:"special_visual_initialize"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/configuration_visual_bert.py#L43"}}),ye=new Kt({props:{anchor:"transformers.VisualBertConfig.example",$$slots:{default:[bd]},$$scope:{ctx:B}}}),it=new G({}),lt=new j({props:{name:"class transformers.VisualBertModel",anchor:"transformers.VisualBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.VisualBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L677"}}),mt=new j({props:{name:"forward",anchor:"transformers.VisualBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.VisualBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L716",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new Eo({props:{$$slots:{default:[kd]},$$scope:{ctx:B}}}),Ve=new Kt({props:{anchor:"transformers.VisualBertModel.forward.example",$$slots:{default:[Td]},$$scope:{ctx:B}}}),ft=new G({}),gt=new j({props:{name:"class transformers.VisualBertForPreTraining",anchor:"transformers.VisualBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L873"}}),kt=new j({props:{name:"forward",anchor:"transformers.VisualBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_image_labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisualBertForPreTraining.forward.sentence_image_labels",description:`<strong>sentence_image_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sentence-image prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a matching pair of sequence A for the given image,</li>
<li>1 indicates sequence B is a random sequence w.r.t A for the given image.</li>
</ul>`,name:"sentence_image_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L889",returnDescription:`
<p>A <code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
`}}),qe=new Eo({props:{$$slots:{default:[yd]},$$scope:{ctx:B}}}),ze=new Kt({props:{anchor:"transformers.VisualBertForPreTraining.forward.example",$$slots:{default:[wd]},$$scope:{ctx:B}}}),Tt=new G({}),yt=new j({props:{name:"class transformers.VisualBertForQuestionAnswering",anchor:"transformers.VisualBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1175"}}),Bt=new j({props:{name:"forward",anchor:"transformers.VisualBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A KLDivLoss is computed between the labels and the returned logits.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fe=new Eo({props:{$$slots:{default:[$d]},$$scope:{ctx:B}}}),Pe=new Kt({props:{anchor:"transformers.VisualBertForQuestionAnswering.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:B}}}),qt=new G({}),zt=new j({props:{name:"class transformers.VisualBertForMultipleChoice",anchor:"transformers.VisualBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1022"}}),Et=new j({props:{name:"forward",anchor:"transformers.VisualBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1033",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Eo({props:{$$slots:{default:[Bd]},$$scope:{ctx:B}}}),Ae=new Kt({props:{anchor:"transformers.VisualBertForMultipleChoice.forward.example",$$slots:{default:[qd]},$$scope:{ctx:B}}}),Mt=new G({}),At=new j({props:{name:"class transformers.VisualBertForVisualReasoning",anchor:"transformers.VisualBertForVisualReasoning",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1301"}}),Ot=new j({props:{name:"forward",anchor:"transformers.VisualBertForVisualReasoning.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForVisualReasoning.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A classification loss is computed (Cross-Entropy) against these labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1313",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Eo({props:{$$slots:{default:[zd]},$$scope:{ctx:B}}}),Le=new Kt({props:{anchor:"transformers.VisualBertForVisualReasoning.forward.example",$$slots:{default:[xd]},$$scope:{ctx:B}}}),Rt=new G({}),Nt=new j({props:{name:"class transformers.VisualBertForRegionToPhraseAlignment",anchor:"transformers.VisualBertForRegionToPhraseAlignment",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1461"}}),Wt=new j({props:{name:"forward",anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"visual_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"visual_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"image_text_alignment",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"region_to_phrase_position",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.region_to_phrase_position",description:`<strong>region_to_phrase_position</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
The positions depicting the position of the image embedding corresponding to the textual tokens.`,name:"region_to_phrase_position"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length, visual_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. KLDivLoss is computed against these labels and the
outputs from the attention layer.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/visual_bert/modeling_visual_bert.py#L1473",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new Eo({props:{$$slots:{default:[Fd]},$$scope:{ctx:B}}}),Ne=new Kt({props:{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.example",$$slots:{default:[Pd]},$$scope:{ctx:B}}}),{c(){d=s("meta"),b=p(),g=s("h1"),m=s("a"),v=s("span"),k(r.$$.fragment),u=p(),q=s("span"),qn=i("VisualBERT"),Vs=p(),J=s("h2"),me=s("a"),Mo=s("span"),k(Ge.$$.fragment),zn=p(),Ao=s("span"),xn=i("Overview"),Bs=p(),fe=s("p"),Fn=i("The VisualBERT model was proposed in "),Je=s("a"),Pn=i("VisualBERT: A Simple and Performant Baseline for Vision and Language"),En=i(` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),qs=p(),Jt=s("p"),Mn=i("The abstract from the paper is the following:"),zs=p(),Yt=s("p"),jo=s("em"),An=i(`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),xs=p(),Xt=s("p"),jn=i("Tips:"),Fs=p(),ge=s("ol"),Co=s("li"),Ye=s("p"),Cn=i("Most of the checkpoints provided work with the "),Zt=s("a"),Ln=i("VisualBertForPreTraining"),On=i(` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),Rn=p(),Lo=s("li"),Oo=s("p"),Nn=i(`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),Ps=p(),Y=s("h2"),_e=s("a"),Ro=s("span"),k(Xe.$$.fragment),In=p(),No=s("span"),Dn=i("Usage"),Es=p(),eo=s("p"),Sn=i(`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),Ms=p(),to=s("p"),Wn=i(`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),As=p(),ve=s("p"),Qn=i("The "),oo=s("a"),Hn=i("BertTokenizer"),Un=i(` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),js=p(),be=s("ul"),Io=s("li"),so=s("p"),Ze=s("a"),Kn=i("VisualBERT VQA demo notebook"),Gn=i(` : This notebook
contains an example on VisualBERT VQA.`),Jn=p(),Do=s("li"),no=s("p"),et=s("a"),Yn=i("Generate Embeddings for VisualBERT (Colab Notebook)"),Xn=i(` : This notebook contains
an example on how to generate visual embeddings.`),Cs=p(),ke=s("p"),Zn=i("The following example shows how to get the last hidden state using "),ao=s("a"),ea=i("VisualBertModel"),ta=i(":"),Ls=p(),k(tt.$$.fragment),Os=p(),D=s("p"),oa=i("This model was contributed by "),ot=s("a"),sa=i("gchhablani"),na=i(". The original code can be found "),st=s("a"),aa=i("here"),ra=i("."),Rs=p(),X=s("h2"),Te=s("a"),So=s("span"),k(nt.$$.fragment),ia=p(),Wo=s("span"),la=i("VisualBertConfig"),Ns=p(),A=s("div"),k(at.$$.fragment),da=p(),Z=s("p"),ca=i("This is the configuration class to store the configuration of a "),ro=s("a"),ua=i("VisualBertModel"),pa=i(`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=s("a"),ha=i("uclanlp/visualbert-vqa-coco-pre"),ma=i(" architecture."),fa=p(),ee=s("p"),ga=i("Configuration objects inherit from "),io=s("a"),_a=i("PretrainedConfig"),va=i(` and can be used to control the model outputs. Read the
documentation from `),lo=s("a"),ba=i("PretrainedConfig"),ka=i(" for more information."),Ta=p(),k(ye.$$.fragment),Is=p(),te=s("h2"),we=s("a"),Qo=s("span"),k(it.$$.fragment),ya=p(),Ho=s("span"),wa=i("VisualBertModel"),Ds=p(),z=s("div"),k(lt.$$.fragment),$a=p(),dt=s("p"),Va=i(`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=s("a"),Ba=i("PreTrainedModel"),qa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),za=p(),ct=s("p"),xa=i("This model is also a PyTorch "),ut=s("a"),Fa=i("torch.nn.Module"),Pa=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ea=p(),pt=s("p"),Ma=i("The model can behave as an encoder (with only self-attention) following the architecture described in "),ht=s("a"),Aa=i(`Attention is
all you need`),ja=i(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ca=p(),C=s("div"),k(mt.$$.fragment),La=p(),oe=s("p"),Oa=i("The "),uo=s("a"),Ra=i("VisualBertModel"),Na=i(" forward method, overrides the "),Uo=s("code"),Ia=i("__call__"),Da=i(" special method."),Sa=p(),k($e.$$.fragment),Wa=p(),k(Ve.$$.fragment),Ss=p(),se=s("h2"),Be=s("a"),Ko=s("span"),k(ft.$$.fragment),Qa=p(),Go=s("span"),Ha=i("VisualBertForPreTraining"),Ws=p(),x=s("div"),k(gt.$$.fragment),Ua=p(),ne=s("p"),Ka=i("VisualBert Model with two heads on top as done during the pretraining: a "),Jo=s("code"),Ga=i("masked language modeling"),Ja=i(` head and a
`),Yo=s("code"),Ya=i("sentence-image prediction (classification)"),Xa=i(" head."),Za=p(),_t=s("p"),er=i("This model inherits from "),po=s("a"),tr=i("PreTrainedModel"),or=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sr=p(),vt=s("p"),nr=i("This model is also a PyTorch "),bt=s("a"),ar=i("torch.nn.Module"),rr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ir=p(),L=s("div"),k(kt.$$.fragment),lr=p(),ae=s("p"),dr=i("The "),ho=s("a"),cr=i("VisualBertForPreTraining"),ur=i(" forward method, overrides the "),Xo=s("code"),pr=i("__call__"),hr=i(" special method."),mr=p(),k(qe.$$.fragment),fr=p(),k(ze.$$.fragment),Qs=p(),re=s("h2"),xe=s("a"),Zo=s("span"),k(Tt.$$.fragment),gr=p(),es=s("span"),_r=i("VisualBertForQuestionAnswering"),Hs=p(),F=s("div"),k(yt.$$.fragment),vr=p(),ts=s("p"),br=i(`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),kr=p(),wt=s("p"),Tr=i("This model inherits from "),mo=s("a"),yr=i("PreTrainedModel"),wr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$r=p(),$t=s("p"),Vr=i("This model is also a PyTorch "),Vt=s("a"),Br=i("torch.nn.Module"),qr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=p(),O=s("div"),k(Bt.$$.fragment),xr=p(),ie=s("p"),Fr=i("The "),fo=s("a"),Pr=i("VisualBertForQuestionAnswering"),Er=i(" forward method, overrides the "),os=s("code"),Mr=i("__call__"),Ar=i(" special method."),jr=p(),k(Fe.$$.fragment),Cr=p(),k(Pe.$$.fragment),Us=p(),le=s("h2"),Ee=s("a"),ss=s("span"),k(qt.$$.fragment),Lr=p(),ns=s("span"),Or=i("VisualBertForMultipleChoice"),Ks=p(),P=s("div"),k(zt.$$.fragment),Rr=p(),as=s("p"),Nr=i(`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Ir=p(),xt=s("p"),Dr=i("This model inherits from "),go=s("a"),Sr=i("PreTrainedModel"),Wr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr=p(),Ft=s("p"),Hr=i("This model is also a PyTorch "),Pt=s("a"),Ur=i("torch.nn.Module"),Kr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr=p(),R=s("div"),k(Et.$$.fragment),Jr=p(),de=s("p"),Yr=i("The "),_o=s("a"),Xr=i("VisualBertForMultipleChoice"),Zr=i(" forward method, overrides the "),rs=s("code"),ei=i("__call__"),ti=i(" special method."),oi=p(),k(Me.$$.fragment),si=p(),k(Ae.$$.fragment),Gs=p(),ce=s("h2"),je=s("a"),is=s("span"),k(Mt.$$.fragment),ni=p(),ls=s("span"),ai=i("VisualBertForVisualReasoning"),Js=p(),E=s("div"),k(At.$$.fragment),ri=p(),ds=s("p"),ii=i(`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),li=p(),jt=s("p"),di=i("This model inherits from "),vo=s("a"),ci=i("PreTrainedModel"),ui=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi=p(),Ct=s("p"),hi=i("This model is also a PyTorch "),Lt=s("a"),mi=i("torch.nn.Module"),fi=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gi=p(),N=s("div"),k(Ot.$$.fragment),_i=p(),ue=s("p"),vi=i("The "),bo=s("a"),bi=i("VisualBertForVisualReasoning"),ki=i(" forward method, overrides the "),cs=s("code"),Ti=i("__call__"),yi=i(" special method."),wi=p(),k(Ce.$$.fragment),$i=p(),k(Le.$$.fragment),Ys=p(),pe=s("h2"),Oe=s("a"),us=s("span"),k(Rt.$$.fragment),Vi=p(),ps=s("span"),Bi=i("VisualBertForRegionToPhraseAlignment"),Xs=p(),M=s("div"),k(Nt.$$.fragment),qi=p(),hs=s("p"),zi=i(`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),xi=p(),It=s("p"),Fi=i("This model inherits from "),ko=s("a"),Pi=i("PreTrainedModel"),Ei=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=p(),Dt=s("p"),Ai=i("This model is also a PyTorch "),St=s("a"),ji=i("torch.nn.Module"),Ci=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Li=p(),I=s("div"),k(Wt.$$.fragment),Oi=p(),he=s("p"),Ri=i("The "),To=s("a"),Ni=i("VisualBertForRegionToPhraseAlignment"),Ii=i(" forward method, overrides the "),ms=s("code"),Di=i("__call__"),Si=i(" special method."),Wi=p(),k(Re.$$.fragment),Qi=p(),k(Ne.$$.fragment),this.h()},l(t){const f=_d('[data-svelte="svelte-1phssyn"]',document.head);d=n(f,"META",{name:!0,content:!0}),f.forEach(o),b=h(t),g=n(t,"H1",{class:!0});var Qt=a(g);m=n(Qt,"A",{id:!0,class:!0,href:!0});var fs=a(m);v=n(fs,"SPAN",{});var gs=a(v);T(r.$$.fragment,gs),gs.forEach(o),fs.forEach(o),u=h(Qt),q=n(Qt,"SPAN",{});var _s=a(q);qn=l(_s,"VisualBERT"),_s.forEach(o),Qt.forEach(o),Vs=h(t),J=n(t,"H2",{class:!0});var Ht=a(J);me=n(Ht,"A",{id:!0,class:!0,href:!0});var vs=a(me);Mo=n(vs,"SPAN",{});var bs=a(Mo);T(Ge.$$.fragment,bs),bs.forEach(o),vs.forEach(o),zn=h(Ht),Ao=n(Ht,"SPAN",{});var ks=a(Ao);xn=l(ks,"Overview"),ks.forEach(o),Ht.forEach(o),Bs=h(t),fe=n(t,"P",{});var Ut=a(fe);Fn=l(Ut,"The VisualBERT model was proposed in "),Je=n(Ut,"A",{href:!0,rel:!0});var Ts=a(Je);Pn=l(Ts,"VisualBERT: A Simple and Performant Baseline for Vision and Language"),Ts.forEach(o),En=l(Ut,` by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`),Ut.forEach(o),qs=h(t),Jt=n(t,"P",{});var ys=a(Jt);Mn=l(ys,"The abstract from the paper is the following:"),ys.forEach(o),zs=h(t),Yt=n(t,"P",{});var ws=a(Yt);jo=n(ws,"EM",{});var $s=a(jo);An=l($s,`We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.`),$s.forEach(o),ws.forEach(o),xs=h(t),Xt=n(t,"P",{});var Ki=a(Xt);jn=l(Ki,"Tips:"),Ki.forEach(o),Fs=h(t),ge=n(t,"OL",{});var en=a(ge);Co=n(en,"LI",{});var Gi=a(Co);Ye=n(Gi,"P",{});var tn=a(Ye);Cn=l(tn,"Most of the checkpoints provided work with the "),Zt=n(tn,"A",{href:!0});var Ji=a(Zt);Ln=l(Ji,"VisualBertForPreTraining"),Ji.forEach(o),On=l(tn,` configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (\u2018visualbert-vqa\u2019), VCR
(\u2018visualbert-vcr\u2019), NLVR2 (\u2018visualbert-nlvr2\u2019). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.`),tn.forEach(o),Gi.forEach(o),Rn=h(en),Lo=n(en,"LI",{});var Yi=a(Lo);Oo=n(Yi,"P",{});var Xi=a(Oo);Nn=l(Xi,`For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.`),Xi.forEach(o),Yi.forEach(o),en.forEach(o),Ps=h(t),Y=n(t,"H2",{class:!0});var on=a(Y);_e=n(on,"A",{id:!0,class:!0,href:!0});var Zi=a(_e);Ro=n(Zi,"SPAN",{});var el=a(Ro);T(Xe.$$.fragment,el),el.forEach(o),Zi.forEach(o),In=h(on),No=n(on,"SPAN",{});var tl=a(No);Dn=l(tl,"Usage"),tl.forEach(o),on.forEach(o),Es=h(t),eo=n(t,"P",{});var ol=a(eo);Sn=l(ol,`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`),ol.forEach(o),Ms=h(t),to=n(t,"P",{});var sl=a(to);Wn=l(sl,`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`),sl.forEach(o),As=h(t),ve=n(t,"P",{});var sn=a(ve);Qn=l(sn,"The "),oo=n(sn,"A",{href:!0});var nl=a(oo);Hn=l(nl,"BertTokenizer"),nl.forEach(o),Un=l(sn,` is used to encode the text. A custom detector/feature extractor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`),sn.forEach(o),js=h(t),be=n(t,"UL",{});var nn=a(be);Io=n(nn,"LI",{});var al=a(Io);so=n(al,"P",{});var Hi=a(so);Ze=n(Hi,"A",{href:!0,rel:!0});var rl=a(Ze);Kn=l(rl,"VisualBERT VQA demo notebook"),rl.forEach(o),Gn=l(Hi,` : This notebook
contains an example on VisualBERT VQA.`),Hi.forEach(o),al.forEach(o),Jn=h(nn),Do=n(nn,"LI",{});var il=a(Do);no=n(il,"P",{});var Ui=a(no);et=n(Ui,"A",{href:!0,rel:!0});var ll=a(et);Yn=l(ll,"Generate Embeddings for VisualBERT (Colab Notebook)"),ll.forEach(o),Xn=l(Ui,` : This notebook contains
an example on how to generate visual embeddings.`),Ui.forEach(o),il.forEach(o),nn.forEach(o),Cs=h(t),ke=n(t,"P",{});var an=a(ke);Zn=l(an,"The following example shows how to get the last hidden state using "),ao=n(an,"A",{href:!0});var dl=a(ao);ea=l(dl,"VisualBertModel"),dl.forEach(o),ta=l(an,":"),an.forEach(o),Ls=h(t),T(tt.$$.fragment,t),Os=h(t),D=n(t,"P",{});var yo=a(D);oa=l(yo,"This model was contributed by "),ot=n(yo,"A",{href:!0,rel:!0});var cl=a(ot);sa=l(cl,"gchhablani"),cl.forEach(o),na=l(yo,". The original code can be found "),st=n(yo,"A",{href:!0,rel:!0});var ul=a(st);aa=l(ul,"here"),ul.forEach(o),ra=l(yo,"."),yo.forEach(o),Rs=h(t),X=n(t,"H2",{class:!0});var rn=a(X);Te=n(rn,"A",{id:!0,class:!0,href:!0});var pl=a(Te);So=n(pl,"SPAN",{});var hl=a(So);T(nt.$$.fragment,hl),hl.forEach(o),pl.forEach(o),ia=h(rn),Wo=n(rn,"SPAN",{});var ml=a(Wo);la=l(ml,"VisualBertConfig"),ml.forEach(o),rn.forEach(o),Ns=h(t),A=n(t,"DIV",{class:!0});var Ie=a(A);T(at.$$.fragment,Ie),da=h(Ie),Z=n(Ie,"P",{});var wo=a(Z);ca=l(wo,"This is the configuration class to store the configuration of a "),ro=n(wo,"A",{href:!0});var fl=a(ro);ua=l(fl,"VisualBertModel"),fl.forEach(o),pa=l(wo,`. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
`),rt=n(wo,"A",{href:!0,rel:!0});var gl=a(rt);ha=l(gl,"uclanlp/visualbert-vqa-coco-pre"),gl.forEach(o),ma=l(wo," architecture."),wo.forEach(o),fa=h(Ie),ee=n(Ie,"P",{});var $o=a(ee);ga=l($o,"Configuration objects inherit from "),io=n($o,"A",{href:!0});var _l=a(io);_a=l(_l,"PretrainedConfig"),_l.forEach(o),va=l($o,` and can be used to control the model outputs. Read the
documentation from `),lo=n($o,"A",{href:!0});var vl=a(lo);ba=l(vl,"PretrainedConfig"),vl.forEach(o),ka=l($o," for more information."),$o.forEach(o),Ta=h(Ie),T(ye.$$.fragment,Ie),Ie.forEach(o),Is=h(t),te=n(t,"H2",{class:!0});var ln=a(te);we=n(ln,"A",{id:!0,class:!0,href:!0});var bl=a(we);Qo=n(bl,"SPAN",{});var kl=a(Qo);T(it.$$.fragment,kl),kl.forEach(o),bl.forEach(o),ya=h(ln),Ho=n(ln,"SPAN",{});var Tl=a(Ho);wa=l(Tl,"VisualBertModel"),Tl.forEach(o),ln.forEach(o),Ds=h(t),z=n(t,"DIV",{class:!0});var S=a(z);T(lt.$$.fragment,S),$a=h(S),dt=n(S,"P",{});var dn=a(dt);Va=l(dn,`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),co=n(dn,"A",{href:!0});var yl=a(co);Ba=l(yl,"PreTrainedModel"),yl.forEach(o),qa=l(dn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dn.forEach(o),za=h(S),ct=n(S,"P",{});var cn=a(ct);xa=l(cn,"This model is also a PyTorch "),ut=n(cn,"A",{href:!0,rel:!0});var wl=a(ut);Fa=l(wl,"torch.nn.Module"),wl.forEach(o),Pa=l(cn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cn.forEach(o),Ea=h(S),pt=n(S,"P",{});var un=a(pt);Ma=l(un,"The model can behave as an encoder (with only self-attention) following the architecture described in "),ht=n(un,"A",{href:!0,rel:!0});var $l=a(ht);Aa=l($l,`Attention is
all you need`),$l.forEach(o),ja=l(un,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),un.forEach(o),Ca=h(S),C=n(S,"DIV",{class:!0});var De=a(C);T(mt.$$.fragment,De),La=h(De),oe=n(De,"P",{});var Vo=a(oe);Oa=l(Vo,"The "),uo=n(Vo,"A",{href:!0});var Vl=a(uo);Ra=l(Vl,"VisualBertModel"),Vl.forEach(o),Na=l(Vo," forward method, overrides the "),Uo=n(Vo,"CODE",{});var Bl=a(Uo);Ia=l(Bl,"__call__"),Bl.forEach(o),Da=l(Vo," special method."),Vo.forEach(o),Sa=h(De),T($e.$$.fragment,De),Wa=h(De),T(Ve.$$.fragment,De),De.forEach(o),S.forEach(o),Ss=h(t),se=n(t,"H2",{class:!0});var pn=a(se);Be=n(pn,"A",{id:!0,class:!0,href:!0});var ql=a(Be);Ko=n(ql,"SPAN",{});var zl=a(Ko);T(ft.$$.fragment,zl),zl.forEach(o),ql.forEach(o),Qa=h(pn),Go=n(pn,"SPAN",{});var xl=a(Go);Ha=l(xl,"VisualBertForPreTraining"),xl.forEach(o),pn.forEach(o),Ws=h(t),x=n(t,"DIV",{class:!0});var W=a(x);T(gt.$$.fragment,W),Ua=h(W),ne=n(W,"P",{});var Bo=a(ne);Ka=l(Bo,"VisualBert Model with two heads on top as done during the pretraining: a "),Jo=n(Bo,"CODE",{});var Fl=a(Jo);Ga=l(Fl,"masked language modeling"),Fl.forEach(o),Ja=l(Bo,` head and a
`),Yo=n(Bo,"CODE",{});var Pl=a(Yo);Ya=l(Pl,"sentence-image prediction (classification)"),Pl.forEach(o),Xa=l(Bo," head."),Bo.forEach(o),Za=h(W),_t=n(W,"P",{});var hn=a(_t);er=l(hn,"This model inherits from "),po=n(hn,"A",{href:!0});var El=a(po);tr=l(El,"PreTrainedModel"),El.forEach(o),or=l(hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hn.forEach(o),sr=h(W),vt=n(W,"P",{});var mn=a(vt);nr=l(mn,"This model is also a PyTorch "),bt=n(mn,"A",{href:!0,rel:!0});var Ml=a(bt);ar=l(Ml,"torch.nn.Module"),Ml.forEach(o),rr=l(mn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mn.forEach(o),ir=h(W),L=n(W,"DIV",{class:!0});var Se=a(L);T(kt.$$.fragment,Se),lr=h(Se),ae=n(Se,"P",{});var qo=a(ae);dr=l(qo,"The "),ho=n(qo,"A",{href:!0});var Al=a(ho);cr=l(Al,"VisualBertForPreTraining"),Al.forEach(o),ur=l(qo," forward method, overrides the "),Xo=n(qo,"CODE",{});var jl=a(Xo);pr=l(jl,"__call__"),jl.forEach(o),hr=l(qo," special method."),qo.forEach(o),mr=h(Se),T(qe.$$.fragment,Se),fr=h(Se),T(ze.$$.fragment,Se),Se.forEach(o),W.forEach(o),Qs=h(t),re=n(t,"H2",{class:!0});var fn=a(re);xe=n(fn,"A",{id:!0,class:!0,href:!0});var Cl=a(xe);Zo=n(Cl,"SPAN",{});var Ll=a(Zo);T(Tt.$$.fragment,Ll),Ll.forEach(o),Cl.forEach(o),gr=h(fn),es=n(fn,"SPAN",{});var Ol=a(es);_r=l(Ol,"VisualBertForQuestionAnswering"),Ol.forEach(o),fn.forEach(o),Hs=h(t),F=n(t,"DIV",{class:!0});var Q=a(F);T(yt.$$.fragment,Q),vr=h(Q),ts=n(Q,"P",{});var Rl=a(ts);br=l(Rl,`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`),Rl.forEach(o),kr=h(Q),wt=n(Q,"P",{});var gn=a(wt);Tr=l(gn,"This model inherits from "),mo=n(gn,"A",{href:!0});var Nl=a(mo);yr=l(Nl,"PreTrainedModel"),Nl.forEach(o),wr=l(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gn.forEach(o),$r=h(Q),$t=n(Q,"P",{});var _n=a($t);Vr=l(_n,"This model is also a PyTorch "),Vt=n(_n,"A",{href:!0,rel:!0});var Il=a(Vt);Br=l(Il,"torch.nn.Module"),Il.forEach(o),qr=l(_n,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_n.forEach(o),zr=h(Q),O=n(Q,"DIV",{class:!0});var We=a(O);T(Bt.$$.fragment,We),xr=h(We),ie=n(We,"P",{});var zo=a(ie);Fr=l(zo,"The "),fo=n(zo,"A",{href:!0});var Dl=a(fo);Pr=l(Dl,"VisualBertForQuestionAnswering"),Dl.forEach(o),Er=l(zo," forward method, overrides the "),os=n(zo,"CODE",{});var Sl=a(os);Mr=l(Sl,"__call__"),Sl.forEach(o),Ar=l(zo," special method."),zo.forEach(o),jr=h(We),T(Fe.$$.fragment,We),Cr=h(We),T(Pe.$$.fragment,We),We.forEach(o),Q.forEach(o),Us=h(t),le=n(t,"H2",{class:!0});var vn=a(le);Ee=n(vn,"A",{id:!0,class:!0,href:!0});var Wl=a(Ee);ss=n(Wl,"SPAN",{});var Ql=a(ss);T(qt.$$.fragment,Ql),Ql.forEach(o),Wl.forEach(o),Lr=h(vn),ns=n(vn,"SPAN",{});var Hl=a(ns);Or=l(Hl,"VisualBertForMultipleChoice"),Hl.forEach(o),vn.forEach(o),Ks=h(t),P=n(t,"DIV",{class:!0});var H=a(P);T(zt.$$.fragment,H),Rr=h(H),as=n(H,"P",{});var Ul=a(as);Nr=l(Ul,`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`),Ul.forEach(o),Ir=h(H),xt=n(H,"P",{});var bn=a(xt);Dr=l(bn,"This model inherits from "),go=n(bn,"A",{href:!0});var Kl=a(go);Sr=l(Kl,"PreTrainedModel"),Kl.forEach(o),Wr=l(bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bn.forEach(o),Qr=h(H),Ft=n(H,"P",{});var kn=a(Ft);Hr=l(kn,"This model is also a PyTorch "),Pt=n(kn,"A",{href:!0,rel:!0});var Gl=a(Pt);Ur=l(Gl,"torch.nn.Module"),Gl.forEach(o),Kr=l(kn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kn.forEach(o),Gr=h(H),R=n(H,"DIV",{class:!0});var Qe=a(R);T(Et.$$.fragment,Qe),Jr=h(Qe),de=n(Qe,"P",{});var xo=a(de);Yr=l(xo,"The "),_o=n(xo,"A",{href:!0});var Jl=a(_o);Xr=l(Jl,"VisualBertForMultipleChoice"),Jl.forEach(o),Zr=l(xo," forward method, overrides the "),rs=n(xo,"CODE",{});var Yl=a(rs);ei=l(Yl,"__call__"),Yl.forEach(o),ti=l(xo," special method."),xo.forEach(o),oi=h(Qe),T(Me.$$.fragment,Qe),si=h(Qe),T(Ae.$$.fragment,Qe),Qe.forEach(o),H.forEach(o),Gs=h(t),ce=n(t,"H2",{class:!0});var Tn=a(ce);je=n(Tn,"A",{id:!0,class:!0,href:!0});var Xl=a(je);is=n(Xl,"SPAN",{});var Zl=a(is);T(Mt.$$.fragment,Zl),Zl.forEach(o),Xl.forEach(o),ni=h(Tn),ls=n(Tn,"SPAN",{});var ed=a(ls);ai=l(ed,"VisualBertForVisualReasoning"),ed.forEach(o),Tn.forEach(o),Js=h(t),E=n(t,"DIV",{class:!0});var U=a(E);T(At.$$.fragment,U),ri=h(U),ds=n(U,"P",{});var td=a(ds);ii=l(td,`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`),td.forEach(o),li=h(U),jt=n(U,"P",{});var yn=a(jt);di=l(yn,"This model inherits from "),vo=n(yn,"A",{href:!0});var od=a(vo);ci=l(od,"PreTrainedModel"),od.forEach(o),ui=l(yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yn.forEach(o),pi=h(U),Ct=n(U,"P",{});var wn=a(Ct);hi=l(wn,"This model is also a PyTorch "),Lt=n(wn,"A",{href:!0,rel:!0});var sd=a(Lt);mi=l(sd,"torch.nn.Module"),sd.forEach(o),fi=l(wn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wn.forEach(o),gi=h(U),N=n(U,"DIV",{class:!0});var He=a(N);T(Ot.$$.fragment,He),_i=h(He),ue=n(He,"P",{});var Fo=a(ue);vi=l(Fo,"The "),bo=n(Fo,"A",{href:!0});var nd=a(bo);bi=l(nd,"VisualBertForVisualReasoning"),nd.forEach(o),ki=l(Fo," forward method, overrides the "),cs=n(Fo,"CODE",{});var ad=a(cs);Ti=l(ad,"__call__"),ad.forEach(o),yi=l(Fo," special method."),Fo.forEach(o),wi=h(He),T(Ce.$$.fragment,He),$i=h(He),T(Le.$$.fragment,He),He.forEach(o),U.forEach(o),Ys=h(t),pe=n(t,"H2",{class:!0});var $n=a(pe);Oe=n($n,"A",{id:!0,class:!0,href:!0});var rd=a(Oe);us=n(rd,"SPAN",{});var id=a(us);T(Rt.$$.fragment,id),id.forEach(o),rd.forEach(o),Vi=h($n),ps=n($n,"SPAN",{});var ld=a(ps);Bi=l(ld,"VisualBertForRegionToPhraseAlignment"),ld.forEach(o),$n.forEach(o),Xs=h(t),M=n(t,"DIV",{class:!0});var K=a(M);T(Nt.$$.fragment,K),qi=h(K),hs=n(K,"P",{});var dd=a(hs);zi=l(dd,`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`),dd.forEach(o),xi=h(K),It=n(K,"P",{});var Vn=a(It);Fi=l(Vn,"This model inherits from "),ko=n(Vn,"A",{href:!0});var cd=a(ko);Pi=l(cd,"PreTrainedModel"),cd.forEach(o),Ei=l(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(o),Mi=h(K),Dt=n(K,"P",{});var Bn=a(Dt);Ai=l(Bn,"This model is also a PyTorch "),St=n(Bn,"A",{href:!0,rel:!0});var ud=a(St);ji=l(ud,"torch.nn.Module"),ud.forEach(o),Ci=l(Bn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bn.forEach(o),Li=h(K),I=n(K,"DIV",{class:!0});var Ue=a(I);T(Wt.$$.fragment,Ue),Oi=h(Ue),he=n(Ue,"P",{});var Po=a(he);Ri=l(Po,"The "),To=n(Po,"A",{href:!0});var pd=a(To);Ni=l(pd,"VisualBertForRegionToPhraseAlignment"),pd.forEach(o),Ii=l(Po," forward method, overrides the "),ms=n(Po,"CODE",{});var hd=a(ms);Di=l(hd,"__call__"),hd.forEach(o),Si=l(Po," special method."),Po.forEach(o),Wi=h(Ue),T(Re.$$.fragment,Ue),Qi=h(Ue),T(Ne.$$.fragment,Ue),Ue.forEach(o),K.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Md)),c(m,"id","visualbert"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#visualbert"),c(g,"class","relative group"),c(me,"id","overview"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#overview"),c(J,"class","relative group"),c(Je,"href","https://arxiv.org/pdf/1908.03557"),c(Je,"rel","nofollow"),c(Zt,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(_e,"id","usage"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#usage"),c(Y,"class","relative group"),c(oo,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer"),c(Ze,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/visual_bert"),c(Ze,"rel","nofollow"),c(et,"href","https://colab.research.google.com/drive/1bLGxKdldwqnMVA5x4neY7-l_8fKGWQYI?usp=sharing"),c(et,"rel","nofollow"),c(ao,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertModel"),c(ot,"href","https://huggingface.co/gchhablani"),c(ot,"rel","nofollow"),c(st,"href","https://github.com/uclanlp/visualbert"),c(st,"rel","nofollow"),c(Te,"id","transformers.VisualBertConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.VisualBertConfig"),c(X,"class","relative group"),c(ro,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertModel"),c(rt,"href","https://huggingface.co/uclanlp/visualbert-vqa-coco-pre"),c(rt,"rel","nofollow"),c(io,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(lo,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(we,"id","transformers.VisualBertModel"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.VisualBertModel"),c(te,"class","relative group"),c(co,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ut,"rel","nofollow"),c(ht,"href","https://arxiv.org/abs/1706.03762"),c(ht,"rel","nofollow"),c(uo,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertModel"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"id","transformers.VisualBertForPreTraining"),c(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Be,"href","#transformers.VisualBertForPreTraining"),c(se,"class","relative group"),c(po,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bt,"rel","nofollow"),c(ho,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertForPreTraining"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.VisualBertForQuestionAnswering"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.VisualBertForQuestionAnswering"),c(re,"class","relative group"),c(mo,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vt,"rel","nofollow"),c(fo,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertForQuestionAnswering"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.VisualBertForMultipleChoice"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.VisualBertForMultipleChoice"),c(le,"class","relative group"),c(go,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Pt,"rel","nofollow"),c(_o,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertForMultipleChoice"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.VisualBertForVisualReasoning"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.VisualBertForVisualReasoning"),c(ce,"class","relative group"),c(vo,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(bo,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertForVisualReasoning"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.VisualBertForRegionToPhraseAlignment"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.VisualBertForRegionToPhraseAlignment"),c(pe,"class","relative group"),c(ko,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(St,"rel","nofollow"),c(To,"href","/docs/transformers/v4.21.3/en/model_doc/visual_bert#transformers.VisualBertForRegionToPhraseAlignment"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,b,f),_(t,g,f),e(g,m),e(m,v),y(r,v,null),e(g,u),e(g,q),e(q,qn),_(t,Vs,f),_(t,J,f),e(J,me),e(me,Mo),y(Ge,Mo,null),e(J,zn),e(J,Ao),e(Ao,xn),_(t,Bs,f),_(t,fe,f),e(fe,Fn),e(fe,Je),e(Je,Pn),e(fe,En),_(t,qs,f),_(t,Jt,f),e(Jt,Mn),_(t,zs,f),_(t,Yt,f),e(Yt,jo),e(jo,An),_(t,xs,f),_(t,Xt,f),e(Xt,jn),_(t,Fs,f),_(t,ge,f),e(ge,Co),e(Co,Ye),e(Ye,Cn),e(Ye,Zt),e(Zt,Ln),e(Ye,On),e(ge,Rn),e(ge,Lo),e(Lo,Oo),e(Oo,Nn),_(t,Ps,f),_(t,Y,f),e(Y,_e),e(_e,Ro),y(Xe,Ro,null),e(Y,In),e(Y,No),e(No,Dn),_(t,Es,f),_(t,eo,f),e(eo,Sn),_(t,Ms,f),_(t,to,f),e(to,Wn),_(t,As,f),_(t,ve,f),e(ve,Qn),e(ve,oo),e(oo,Hn),e(ve,Un),_(t,js,f),_(t,be,f),e(be,Io),e(Io,so),e(so,Ze),e(Ze,Kn),e(so,Gn),e(be,Jn),e(be,Do),e(Do,no),e(no,et),e(et,Yn),e(no,Xn),_(t,Cs,f),_(t,ke,f),e(ke,Zn),e(ke,ao),e(ao,ea),e(ke,ta),_(t,Ls,f),y(tt,t,f),_(t,Os,f),_(t,D,f),e(D,oa),e(D,ot),e(ot,sa),e(D,na),e(D,st),e(st,aa),e(D,ra),_(t,Rs,f),_(t,X,f),e(X,Te),e(Te,So),y(nt,So,null),e(X,ia),e(X,Wo),e(Wo,la),_(t,Ns,f),_(t,A,f),y(at,A,null),e(A,da),e(A,Z),e(Z,ca),e(Z,ro),e(ro,ua),e(Z,pa),e(Z,rt),e(rt,ha),e(Z,ma),e(A,fa),e(A,ee),e(ee,ga),e(ee,io),e(io,_a),e(ee,va),e(ee,lo),e(lo,ba),e(ee,ka),e(A,Ta),y(ye,A,null),_(t,Is,f),_(t,te,f),e(te,we),e(we,Qo),y(it,Qo,null),e(te,ya),e(te,Ho),e(Ho,wa),_(t,Ds,f),_(t,z,f),y(lt,z,null),e(z,$a),e(z,dt),e(dt,Va),e(dt,co),e(co,Ba),e(dt,qa),e(z,za),e(z,ct),e(ct,xa),e(ct,ut),e(ut,Fa),e(ct,Pa),e(z,Ea),e(z,pt),e(pt,Ma),e(pt,ht),e(ht,Aa),e(pt,ja),e(z,Ca),e(z,C),y(mt,C,null),e(C,La),e(C,oe),e(oe,Oa),e(oe,uo),e(uo,Ra),e(oe,Na),e(oe,Uo),e(Uo,Ia),e(oe,Da),e(C,Sa),y($e,C,null),e(C,Wa),y(Ve,C,null),_(t,Ss,f),_(t,se,f),e(se,Be),e(Be,Ko),y(ft,Ko,null),e(se,Qa),e(se,Go),e(Go,Ha),_(t,Ws,f),_(t,x,f),y(gt,x,null),e(x,Ua),e(x,ne),e(ne,Ka),e(ne,Jo),e(Jo,Ga),e(ne,Ja),e(ne,Yo),e(Yo,Ya),e(ne,Xa),e(x,Za),e(x,_t),e(_t,er),e(_t,po),e(po,tr),e(_t,or),e(x,sr),e(x,vt),e(vt,nr),e(vt,bt),e(bt,ar),e(vt,rr),e(x,ir),e(x,L),y(kt,L,null),e(L,lr),e(L,ae),e(ae,dr),e(ae,ho),e(ho,cr),e(ae,ur),e(ae,Xo),e(Xo,pr),e(ae,hr),e(L,mr),y(qe,L,null),e(L,fr),y(ze,L,null),_(t,Qs,f),_(t,re,f),e(re,xe),e(xe,Zo),y(Tt,Zo,null),e(re,gr),e(re,es),e(es,_r),_(t,Hs,f),_(t,F,f),y(yt,F,null),e(F,vr),e(F,ts),e(ts,br),e(F,kr),e(F,wt),e(wt,Tr),e(wt,mo),e(mo,yr),e(wt,wr),e(F,$r),e(F,$t),e($t,Vr),e($t,Vt),e(Vt,Br),e($t,qr),e(F,zr),e(F,O),y(Bt,O,null),e(O,xr),e(O,ie),e(ie,Fr),e(ie,fo),e(fo,Pr),e(ie,Er),e(ie,os),e(os,Mr),e(ie,Ar),e(O,jr),y(Fe,O,null),e(O,Cr),y(Pe,O,null),_(t,Us,f),_(t,le,f),e(le,Ee),e(Ee,ss),y(qt,ss,null),e(le,Lr),e(le,ns),e(ns,Or),_(t,Ks,f),_(t,P,f),y(zt,P,null),e(P,Rr),e(P,as),e(as,Nr),e(P,Ir),e(P,xt),e(xt,Dr),e(xt,go),e(go,Sr),e(xt,Wr),e(P,Qr),e(P,Ft),e(Ft,Hr),e(Ft,Pt),e(Pt,Ur),e(Ft,Kr),e(P,Gr),e(P,R),y(Et,R,null),e(R,Jr),e(R,de),e(de,Yr),e(de,_o),e(_o,Xr),e(de,Zr),e(de,rs),e(rs,ei),e(de,ti),e(R,oi),y(Me,R,null),e(R,si),y(Ae,R,null),_(t,Gs,f),_(t,ce,f),e(ce,je),e(je,is),y(Mt,is,null),e(ce,ni),e(ce,ls),e(ls,ai),_(t,Js,f),_(t,E,f),y(At,E,null),e(E,ri),e(E,ds),e(ds,ii),e(E,li),e(E,jt),e(jt,di),e(jt,vo),e(vo,ci),e(jt,ui),e(E,pi),e(E,Ct),e(Ct,hi),e(Ct,Lt),e(Lt,mi),e(Ct,fi),e(E,gi),e(E,N),y(Ot,N,null),e(N,_i),e(N,ue),e(ue,vi),e(ue,bo),e(bo,bi),e(ue,ki),e(ue,cs),e(cs,Ti),e(ue,yi),e(N,wi),y(Ce,N,null),e(N,$i),y(Le,N,null),_(t,Ys,f),_(t,pe,f),e(pe,Oe),e(Oe,us),y(Rt,us,null),e(pe,Vi),e(pe,ps),e(ps,Bi),_(t,Xs,f),_(t,M,f),y(Nt,M,null),e(M,qi),e(M,hs),e(hs,zi),e(M,xi),e(M,It),e(It,Fi),e(It,ko),e(ko,Pi),e(It,Ei),e(M,Mi),e(M,Dt),e(Dt,Ai),e(Dt,St),e(St,ji),e(Dt,Ci),e(M,Li),e(M,I),y(Wt,I,null),e(I,Oi),e(I,he),e(he,Ri),e(he,To),e(To,Ni),e(he,Ii),e(he,ms),e(ms,Di),e(he,Si),e(I,Wi),y(Re,I,null),e(I,Qi),y(Ne,I,null),Zs=!0},p(t,[f]){const Qt={};f&2&&(Qt.$$scope={dirty:f,ctx:t}),ye.$set(Qt);const fs={};f&2&&(fs.$$scope={dirty:f,ctx:t}),$e.$set(fs);const gs={};f&2&&(gs.$$scope={dirty:f,ctx:t}),Ve.$set(gs);const _s={};f&2&&(_s.$$scope={dirty:f,ctx:t}),qe.$set(_s);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:t}),ze.$set(Ht);const vs={};f&2&&(vs.$$scope={dirty:f,ctx:t}),Fe.$set(vs);const bs={};f&2&&(bs.$$scope={dirty:f,ctx:t}),Pe.$set(bs);const ks={};f&2&&(ks.$$scope={dirty:f,ctx:t}),Me.$set(ks);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:t}),Ae.$set(Ut);const Ts={};f&2&&(Ts.$$scope={dirty:f,ctx:t}),Ce.$set(Ts);const ys={};f&2&&(ys.$$scope={dirty:f,ctx:t}),Le.$set(ys);const ws={};f&2&&(ws.$$scope={dirty:f,ctx:t}),Re.$set(ws);const $s={};f&2&&($s.$$scope={dirty:f,ctx:t}),Ne.$set($s)},i(t){Zs||(w(r.$$.fragment,t),w(Ge.$$.fragment,t),w(Xe.$$.fragment,t),w(tt.$$.fragment,t),w(nt.$$.fragment,t),w(at.$$.fragment,t),w(ye.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(mt.$$.fragment,t),w($e.$$.fragment,t),w(Ve.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(kt.$$.fragment,t),w(qe.$$.fragment,t),w(ze.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(Bt.$$.fragment,t),w(Fe.$$.fragment,t),w(Pe.$$.fragment,t),w(qt.$$.fragment,t),w(zt.$$.fragment,t),w(Et.$$.fragment,t),w(Me.$$.fragment,t),w(Ae.$$.fragment,t),w(Mt.$$.fragment,t),w(At.$$.fragment,t),w(Ot.$$.fragment,t),w(Ce.$$.fragment,t),w(Le.$$.fragment,t),w(Rt.$$.fragment,t),w(Nt.$$.fragment,t),w(Wt.$$.fragment,t),w(Re.$$.fragment,t),w(Ne.$$.fragment,t),Zs=!0)},o(t){$(r.$$.fragment,t),$(Ge.$$.fragment,t),$(Xe.$$.fragment,t),$(tt.$$.fragment,t),$(nt.$$.fragment,t),$(at.$$.fragment,t),$(ye.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(mt.$$.fragment,t),$($e.$$.fragment,t),$(Ve.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(kt.$$.fragment,t),$(qe.$$.fragment,t),$(ze.$$.fragment,t),$(Tt.$$.fragment,t),$(yt.$$.fragment,t),$(Bt.$$.fragment,t),$(Fe.$$.fragment,t),$(Pe.$$.fragment,t),$(qt.$$.fragment,t),$(zt.$$.fragment,t),$(Et.$$.fragment,t),$(Me.$$.fragment,t),$(Ae.$$.fragment,t),$(Mt.$$.fragment,t),$(At.$$.fragment,t),$(Ot.$$.fragment,t),$(Ce.$$.fragment,t),$(Le.$$.fragment,t),$(Rt.$$.fragment,t),$(Nt.$$.fragment,t),$(Wt.$$.fragment,t),$(Re.$$.fragment,t),$(Ne.$$.fragment,t),Zs=!1},d(t){o(d),t&&o(b),t&&o(g),V(r),t&&o(Vs),t&&o(J),V(Ge),t&&o(Bs),t&&o(fe),t&&o(qs),t&&o(Jt),t&&o(zs),t&&o(Yt),t&&o(xs),t&&o(Xt),t&&o(Fs),t&&o(ge),t&&o(Ps),t&&o(Y),V(Xe),t&&o(Es),t&&o(eo),t&&o(Ms),t&&o(to),t&&o(As),t&&o(ve),t&&o(js),t&&o(be),t&&o(Cs),t&&o(ke),t&&o(Ls),V(tt,t),t&&o(Os),t&&o(D),t&&o(Rs),t&&o(X),V(nt),t&&o(Ns),t&&o(A),V(at),V(ye),t&&o(Is),t&&o(te),V(it),t&&o(Ds),t&&o(z),V(lt),V(mt),V($e),V(Ve),t&&o(Ss),t&&o(se),V(ft),t&&o(Ws),t&&o(x),V(gt),V(kt),V(qe),V(ze),t&&o(Qs),t&&o(re),V(Tt),t&&o(Hs),t&&o(F),V(yt),V(Bt),V(Fe),V(Pe),t&&o(Us),t&&o(le),V(qt),t&&o(Ks),t&&o(P),V(zt),V(Et),V(Me),V(Ae),t&&o(Gs),t&&o(ce),V(Mt),t&&o(Js),t&&o(E),V(At),V(Ot),V(Ce),V(Le),t&&o(Ys),t&&o(pe),V(Rt),t&&o(Xs),t&&o(M),V(Nt),V(Wt),V(Re),V(Ne)}}}const Md={local:"visualbert",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.VisualBertConfig",title:"VisualBertConfig"},{local:"transformers.VisualBertModel",title:"VisualBertModel"},{local:"transformers.VisualBertForPreTraining",title:"VisualBertForPreTraining"},{local:"transformers.VisualBertForQuestionAnswering",title:"VisualBertForQuestionAnswering"},{local:"transformers.VisualBertForMultipleChoice",title:"VisualBertForMultipleChoice"},{local:"transformers.VisualBertForVisualReasoning",title:"VisualBertForVisualReasoning"},{local:"transformers.VisualBertForRegionToPhraseAlignment",title:"VisualBertForRegionToPhraseAlignment"}],title:"VisualBERT"};function Ad(B){return vd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Id extends md{constructor(d){super();fd(this,d,Ad,Ed,gd,{})}}export{Id as default,Md as metadata};
