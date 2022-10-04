import{S as yb,i as kb,s as qb,e as s,k as p,w as T,t as o,M as xb,c as a,d as t,m as h,a as d,x as w,h as n,b as l,G as e,g as v,y,q as k,o as q,B as x,v as Rb,L as an}from"../../chunks/vendor-hf-doc-builder.js";import{T as ge}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as sn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fb(F){let c,b,u,g,f;return g=new dn({props:{code:`# To load the default "wiki_dpr" dataset with 21M passages from wikipedia (index name is 'compressed' or 'exact')
from transformers import RagRetriever

retriever = RagRetriever.from_pretrained(
    "facebook/dpr-ctx_encoder-single-nq-base", dataset="wiki_dpr", index_name="compressed"
)

# To load your own indexed dataset built with the datasets library. More info on how to build the indexed dataset in examples/rag/use_own_knowledge_dataset.py
from transformers import RagRetriever

dataset = (
    ...
)  # dataset must be a datasets.Datasets object with columns "title", "text" and "embeddings", and it must have a faiss index
retriever = RagRetriever.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base", indexed_dataset=dataset)

# To load your own indexed dataset built with the datasets library that was saved on disk. More info in examples/rag/use_own_knowledge_dataset.py
from transformers import RagRetriever

dataset_path = "path/to/my/dataset"  # dataset saved via *dataset.save_to_disk(...)*
index_path = "path/to/my/index.faiss"  # faiss index saved via *dataset.get_index("embeddings").save(...)*
retriever = RagRetriever.from_pretrained(
    "facebook/dpr-ctx_encoder-single-nq-base",
    index_name="custom",
    passages_path=dataset_path,
    index_path=index_path,
)

# To load the legacy index built originally for Rag's paper
from transformers import RagRetriever

retriever = RagRetriever.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base", index_name="legacy")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load the default &quot;wiki_dpr&quot; dataset with 21M passages from wikipedia (index name is &#x27;compressed&#x27; or &#x27;exact&#x27;)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, dataset=<span class="hljs-string">&quot;wiki_dpr&quot;</span>, index_name=<span class="hljs-string">&quot;compressed&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load your own indexed dataset built with the datasets library. More info on how to build the indexed dataset in examples/rag/use_own_knowledge_dataset.py</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = (
<span class="hljs-meta">... </span>    ...
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># dataset must be a datasets.Datasets object with columns &quot;title&quot;, &quot;text&quot; and &quot;embeddings&quot;, and it must have a faiss index</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, indexed_dataset=dataset)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load your own indexed dataset built with the datasets library that was saved on disk. More info in examples/rag/use_own_knowledge_dataset.py</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_path = <span class="hljs-string">&quot;path/to/my/dataset&quot;</span>  <span class="hljs-comment"># dataset saved via *dataset.save_to_disk(...)*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>index_path = <span class="hljs-string">&quot;path/to/my/index.faiss&quot;</span>  <span class="hljs-comment"># faiss index saved via *dataset.get_index(&quot;embeddings&quot;).save(...)*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>,
<span class="hljs-meta">... </span>    index_name=<span class="hljs-string">&quot;custom&quot;</span>,
<span class="hljs-meta">... </span>    passages_path=dataset_path,
<span class="hljs-meta">... </span>    index_path=index_path,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load the legacy index built originally for Rag&#x27;s paper</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, index_name=<span class="hljs-string">&quot;legacy&quot;</span>)`}}),{c(){c=s("p"),b=o("Examples:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Examples:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),y(g,i,m),f=!0},p:an,i(i){f||(k(g.$$.fragment,i),f=!0)},o(i){q(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function $b(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function zb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Eb(F){let c,b,u,g,f;return g=new dn({props:{code:`from transformers import RagTokenizer, RagRetriever, RagModel
import torch

tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-base")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-token-base", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = RagModel.from_pretrained("facebook/rag-token-base", retriever=retriever)

inputs = tokenizer("How many people live in Paris?", return_tensors="pt")
outputs = model(input_ids=inputs["input_ids"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagTokenizer, RagRetriever, RagModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RagTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagModel.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, retriever=retriever)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),y(g,i,m),f=!0},p:an,i(i){f||(k(g.$$.fragment,i),f=!0)},o(i){q(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function jb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Gb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Mb(F){let c,b,u,g,f;return g=new dn({props:{code:`from transformers import RagTokenizer, RagRetriever, RagSequenceForGeneration
import torch

tokenizer = RagTokenizer.from_pretrained("facebook/rag-sequence-nq")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-sequence-nq", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = RagSequenceForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

inputs = tokenizer("How many people live in Paris?", return_tensors="pt")
targets = tokenizer(text_target="In Paris, there are 10 million people.", return_tensors="pt")
input_ids = inputs["input_ids"]
labels = targets["input_ids"]
outputs = model(input_ids=input_ids, labels=labels)

# or use retriever separately
model = RagSequenceForGeneration.from_pretrained("facebook/rag-sequence-nq", use_dummy_dataset=True)
# 1. Encode
question_hidden_states = model.question_encoder(input_ids)[0]
# 2. Retrieve
docs_dict = retriever(input_ids.numpy(), question_hidden_states.detach().numpy(), return_tensors="pt")
doc_scores = torch.bmm(
    question_hidden_states.unsqueeze(1), docs_dict["retrieved_doc_embeds"].float().transpose(1, 2)
).squeeze(1)
# 3. Forward to generator
outputs = model(
    context_input_ids=docs_dict["context_input_ids"],
    context_attention_mask=docs_dict["context_attention_mask"],
    doc_scores=doc_scores,
    decoder_input_ids=labels,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagTokenizer, RagRetriever, RagSequenceForGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RagTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagSequenceForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, retriever=retriever)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>targets = tokenizer(text_target=<span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = targets[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagSequenceForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.detach().numpy(), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = torch.bmm(
<span class="hljs-meta">... </span>    question_hidden_states.unsqueeze(<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>].<span class="hljs-built_in">float</span>().transpose(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)
<span class="hljs-meta">... </span>).squeeze(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=labels,
<span class="hljs-meta">... </span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),y(g,i,m),f=!0},p:an,i(i){f||(k(g.$$.fragment,i),f=!0)},o(i){q(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Ab(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Nb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Pb(F){let c,b,u,g,f;return g=new dn({props:{code:`from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch

tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

inputs = tokenizer("How many people live in Paris?", return_tensors="pt")
targets = tokenizer(text_target="In Paris, there are 10 million people.", return_tensors="pt")
input_ids = inputs["input_ids"]
labels = targets["input_ids"]
outputs = model(input_ids=input_ids, labels=labels)

# or use retriever separately
model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", use_dummy_dataset=True)
# 1. Encode
question_hidden_states = model.question_encoder(input_ids)[0]
# 2. Retrieve
docs_dict = retriever(input_ids.numpy(), question_hidden_states.detach().numpy(), return_tensors="pt")
doc_scores = torch.bmm(
    question_hidden_states.unsqueeze(1), docs_dict["retrieved_doc_embeds"].float().transpose(1, 2)
).squeeze(1)
# 3. Forward to generator
outputs = model(
    context_input_ids=docs_dict["context_input_ids"],
    context_attention_mask=docs_dict["context_attention_mask"],
    doc_scores=doc_scores,
    decoder_input_ids=labels,
)

# or directly generate
generated = model.generate(
    context_input_ids=docs_dict["context_input_ids"],
    context_attention_mask=docs_dict["context_attention_mask"],
    doc_scores=doc_scores,
)
generated_string = tokenizer.batch_decode(generated, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagTokenizer, RagRetriever, RagTokenForGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RagTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagTokenForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, retriever=retriever)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>targets = tokenizer(text_target=<span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = targets[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagTokenForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.detach().numpy(), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = torch.bmm(
<span class="hljs-meta">... </span>    question_hidden_states.unsqueeze(<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>].<span class="hljs-built_in">float</span>().transpose(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)
<span class="hljs-meta">... </span>).squeeze(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or directly generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),y(g,i,m),f=!0},p:an,i(i){f||(k(g.$$.fragment,i),f=!0)},o(i){q(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Ob(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Cb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Lb(F){let c,b,u,g,f;return g=new dn({props:{code:`from transformers import RagTokenizer, RagRetriever, TFRagModel
import torch

tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-base")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-token-base", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = TFRagModel.from_pretrained("facebook/rag-token-base", retriever=retriever, from_pt=True)

input_dict = tokenizer.prepare_seq2seq_batch(
    "How many people live in Paris?", "In Paris, there are 10 million people.", return_tensors="tf"
)
input_ids = input_dict["input_ids"]
outputs = model(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagTokenizer, RagRetriever, TFRagModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RagTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRagModel.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, retriever=retriever, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer.prepare_seq2seq_batch(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, <span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),y(g,i,m),f=!0},p:an,i(i){f||(k(g.$$.fragment,i),f=!0)},o(i){q(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Sb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Db(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Ib(F){let c,b,u,g,f;return g=new dn({props:{code:`from transformers import RagTokenizer, RagRetriever, TFRagSequenceForGeneration

tokenizer = RagTokenizer.from_pretrained("facebook/rag-sequence-nq")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-sequence-nq", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = TFRagSequenceForGeneration.from_pretrained(
    "facebook/rag-sequence-nq", retriever=retriever, from_pt=True
)

input_dict = tokenizer.prepare_seq2seq_batch(
    "How many people live in Paris?", "In Paris, there are 10 million people.", return_tensors="tf"
)
outputs = model(input_dict, output_retrieved=True)

# or use retriever separately
# 1. Encode
input_ids = input_dict["input_ids"]
question_hidden_states = model.question_encoder(input_ids)[0]
# 2. Retrieve
docs_dict = retriever(input_ids.numpy(), question_hidden_states.numpy(), return_tensors="tf")
doc_scores = tf.squeeze(
    tf.matmul(
        tf.expand_dims(question_hidden_states, axis=1), docs_dict["retrieved_doc_embeds"], transpose_b=True
    ),
    axis=1,
)
# 3. Forward to generator
outputs = model(
    inputs=None,
    context_input_ids=docs_dict["context_input_ids"],
    context_attention_mask=docs_dict["context_attention_mask"],
    doc_scores=doc_scores,
    decoder_input_ids=input_dict["labels"],
)

# or directly generate
generated = model.generate(
    context_input_ids=docs_dict["context_input_ids"],
    context_attention_mask=docs_dict["context_attention_mask"],
    doc_scores=doc_scores,
)
generated_string = tokenizer.batch_decode(generated, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagTokenizer, RagRetriever, TFRagSequenceForGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RagTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRagSequenceForGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, retriever=retriever, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer.prepare_seq2seq_batch(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, <span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict, output_retrieved=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.numpy(), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = tf.squeeze(
<span class="hljs-meta">... </span>    tf.matmul(
<span class="hljs-meta">... </span>        tf.expand_dims(question_hidden_states, axis=<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>], transpose_b=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    ),
<span class="hljs-meta">... </span>    axis=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    inputs=<span class="hljs-literal">None</span>,
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=input_dict[<span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or directly generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),y(g,i,m),f=!0},p:an,i(i){f||(k(g.$$.fragment,i),f=!0)},o(i){q(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Ub(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Wb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Hb(F){let c,b,u,g,f;return g=new dn({props:{code:`import tensorflow as tf
from transformers import RagTokenizer, RagRetriever, TFRagTokenForGeneration

tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = TFRagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever, from_pt=True)

input_dict = tokenizer.prepare_seq2seq_batch(
    "How many people live in Paris?", "In Paris, there are 10 million people.", return_tensors="tf"
)
outputs = model(input_dict, output_retrieved=True)

# or use retriever separately
# 1. Encode
input_ids = input_dict["input_ids"]
question_hidden_states = model.question_encoder(input_ids)[0]
# 2. Retrieve
docs_dict = retriever(input_ids.numpy(), question_hidden_states.numpy(), return_tensors="tf")
doc_scores = tf.squeeze(
    tf.matmul(
        tf.expand_dims(question_hidden_states, axis=1), docs_dict["retrieved_doc_embeds"], transpose_b=True
    ),
    axis=1,
)
# 3. Forward to generator
outputs = model(
    inputs=None,
    context_input_ids=docs_dict["context_input_ids"],
    context_attention_mask=docs_dict["context_attention_mask"],
    doc_scores=doc_scores,
    decoder_input_ids=input_dict["labels"],
)

# or directly generate
generated = model.generate(
    context_input_ids=docs_dict["context_input_ids"],
    context_attention_mask=docs_dict["context_attention_mask"],
    doc_scores=doc_scores,
)
generated_string = tokenizer.batch_decode(generated, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagTokenizer, RagRetriever, TFRagTokenForGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RagTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRagTokenForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, retriever=retriever, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer.prepare_seq2seq_batch(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, <span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict, output_retrieved=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.numpy(), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = tf.squeeze(
<span class="hljs-meta">... </span>    tf.matmul(
<span class="hljs-meta">... </span>        tf.expand_dims(question_hidden_states, axis=<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>], transpose_b=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    ),
<span class="hljs-meta">... </span>    axis=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    inputs=<span class="hljs-literal">None</span>,
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=input_dict[<span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or directly generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),y(g,i,m),f=!0},p:an,i(i){f||(k(g.$$.fragment,i),f=!0)},o(i){q(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Bb(F){let c,b,u,g,f,i,m,R,Yd,Sa,ke,Ve,zr,Ut,Jd,Er,Xd,Da,cn,Zd,Ia,Ye,ei,Wt,ti,oi,Ua,ln,ni,Wa,pn,jr,ri,Ha,Je,si,Ht,ai,di,Ba,qe,Xe,Gr,Bt,ii,Mr,ci,Qa,ee,Qt,li,de,hn,pi,hi,Ar,mi,ui,mn,gi,_i,un,fi,vi,bi,Ze,Kt,Ti,Vt,wi,gn,yi,ki,qi,et,Yt,xi,Jt,Ri,_n,Fi,$i,Ka,xe,tt,Nr,Xt,zi,Pr,Ei,Va,Zt,eo,Ya,Re,ot,Or,to,ji,Cr,Gi,Ja,Fe,oo,Mi,Lr,Ai,Xa,no,ro,Za,$e,nt,Sr,so,Ni,Dr,Pi,ed,Z,ao,Oi,Ir,Ci,Li,rt,Si,st,io,Di,Ur,Ii,Ui,at,co,Wi,ze,Hi,Wr,Bi,Qi,Hr,Ki,Vi,Yi,dt,lo,Ji,po,Xi,Br,Zi,ec,td,Ee,it,Qr,ho,tc,Kr,oc,od,L,mo,nc,je,rc,fn,sc,ac,Vr,dc,ic,cc,ct,lc,Yr,pc,hc,te,mc,Jr,uc,gc,vn,_c,fc,Xr,vc,bc,bn,Tc,wc,yc,M,kc,Tn,qc,xc,Zr,Rc,Fc,es,$c,zc,ts,Ec,jc,os,Gc,Mc,wn,Ac,Nc,ns,Pc,Oc,yn,Cc,Lc,kn,Sc,Dc,rs,Ic,Uc,Wc,uo,Hc,qn,Bc,Qc,Kc,go,Vc,_o,Yc,Jc,Xc,ie,fo,Zc,Ge,el,xn,tl,ol,ss,nl,rl,sl,lt,al,pt,nd,Me,ht,as,vo,dl,ds,il,rd,E,bo,cl,Ae,ll,Rn,pl,hl,is,ml,ul,gl,mt,_l,cs,fl,vl,ls,bl,Tl,oe,wl,ps,yl,kl,Fn,ql,xl,hs,Rl,Fl,$n,$l,zl,El,A,jl,zn,Gl,Ml,ms,Al,Nl,us,Pl,Ol,gs,Cl,Ll,_s,Sl,Dl,En,Il,Ul,fs,Wl,Hl,jn,Bl,Ql,Gn,Kl,Vl,vs,Yl,Jl,Xl,To,Zl,Mn,ep,tp,op,wo,np,yo,rp,sp,ap,ce,ko,dp,Ne,ip,An,cp,lp,bs,pp,hp,mp,ut,up,gt,gp,_t,qo,_p,xo,fp,Nn,vp,bp,sd,Pe,ft,Ts,Ro,Tp,ws,wp,ad,j,Fo,yp,Oe,kp,Pn,qp,xp,ys,Rp,Fp,$p,vt,zp,ks,Ep,jp,qs,Gp,Mp,ne,Ap,xs,Np,Pp,On,Op,Cp,Rs,Lp,Sp,Cn,Dp,Ip,Up,N,Wp,Ln,Hp,Bp,Fs,Qp,Kp,$s,Vp,Yp,zs,Jp,Xp,Es,Zp,eh,Sn,th,oh,js,nh,rh,Dn,sh,ah,In,dh,ih,Gs,ch,lh,ph,$o,hh,Un,mh,uh,gh,zo,_h,Eo,fh,vh,bh,le,jo,Th,Ce,wh,Wn,yh,kh,Ms,qh,xh,Rh,bt,Fh,Tt,$h,wt,Go,zh,As,Eh,dd,Le,yt,Ns,Mo,jh,Ps,Gh,id,P,Ao,Mh,Se,Ah,Hn,Nh,Ph,Os,Oh,Ch,Lh,kt,Sh,Cs,Dh,Ih,re,Uh,Ls,Wh,Hh,Bn,Bh,Qh,Ss,Kh,Vh,Qn,Yh,Jh,Xh,S,Zh,Kn,em,tm,Ds,om,nm,Is,rm,sm,Us,am,dm,Ws,im,cm,Vn,lm,pm,Hs,hm,mm,Yn,um,gm,Bs,_m,fm,vm,No,bm,Jn,Tm,wm,ym,Po,km,Oo,qm,xm,Rm,Qs,Fm,$m,pe,Co,zm,De,Em,Xn,jm,Gm,Ks,Mm,Am,Nm,qt,Pm,xt,cd,Ie,Rt,Vs,Lo,Om,Ys,Cm,ld,$,So,Lm,Ue,Sm,Zn,Dm,Im,Js,Um,Wm,Hm,Ft,Bm,Xs,Qm,Km,Zs,Vm,Ym,se,Jm,ea,Xm,Zm,er,eu,tu,ta,ou,nu,tr,ru,su,au,D,du,or,iu,cu,oa,lu,pu,na,hu,mu,ra,uu,gu,sa,_u,fu,nr,vu,bu,aa,Tu,wu,rr,yu,ku,da,qu,xu,Ru,Do,Fu,sr,$u,zu,Eu,Io,ju,Uo,Gu,Mu,Au,ia,Nu,Pu,he,Wo,Ou,We,Cu,ar,Lu,Su,ca,Du,Iu,Uu,$t,Wu,zt,Hu,Et,Ho,Bu,Bo,Qu,dr,Ku,Vu,pd,He,jt,la,Qo,Yu,pa,Ju,hd,z,Ko,Xu,Be,Zu,ir,eg,tg,ha,og,ng,rg,Gt,sg,ma,ag,dg,ua,ig,cg,ae,lg,ga,pg,hg,cr,mg,ug,_a,gg,_g,lr,fg,vg,bg,I,Tg,pr,wg,yg,fa,kg,qg,va,xg,Rg,ba,Fg,$g,Ta,zg,Eg,hr,jg,Gg,wa,Mg,Ag,mr,Ng,Pg,ya,Og,Cg,Lg,Vo,Sg,ur,Dg,Ig,Ug,Yo,Wg,Jo,Hg,Bg,Qg,ka,Kg,Vg,me,Xo,Yg,Qe,Jg,gr,Xg,Zg,qa,e_,t_,o_,Mt,n_,At,r_,Nt,Zo,s_,xa,a_,md;return i=new _e({}),Ut=new _e({}),Bt=new _e({}),Qt=new G({props:{name:"class transformers.RagConfig",anchor:"transformers.RagConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"is_encoder_decoder",val:" = True"},{name:"prefix",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"title_sep",val:" = ' / '"},{name:"doc_sep",val:" = ' // '"},{name:"n_docs",val:" = 5"},{name:"max_combined_length",val:" = 300"},{name:"retrieval_vector_size",val:" = 768"},{name:"retrieval_batch_size",val:" = 8"},{name:"dataset",val:" = 'wiki_dpr'"},{name:"dataset_split",val:" = 'train'"},{name:"index_name",val:" = 'compressed'"},{name:"index_path",val:" = None"},{name:"passages_path",val:" = None"},{name:"use_dummy_dataset",val:" = False"},{name:"reduce_loss",val:" = False"},{name:"label_smoothing",val:" = 0.0"},{name:"do_deduplication",val:" = True"},{name:"exclude_bos_score",val:" = False"},{name:"do_marginalize",val:" = False"},{name:"output_retrieved",val:" = False"},{name:"use_cache",val:" = True"},{name:"forced_eos_token_id",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagConfig.title_sep",description:`<strong>title_sep</strong> (<code>str</code>, <em>optional</em>, defaults to  <code>&quot; / &quot;</code>) &#x2014;
Separator inserted between the title and the text of the retrieved document when calling <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"title_sep"},{anchor:"transformers.RagConfig.doc_sep",description:`<strong>doc_sep</strong> (<code>str</code>, <em>optional</em>, defaults to  <code>&quot; // &quot;</code>) &#x2014;
Separator inserted between the text of the retrieved document and the original input when calling
<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"doc_sep"},{anchor:"transformers.RagConfig.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of documents to retrieve.`,name:"n_docs"},{anchor:"transformers.RagConfig.max_combined_length",description:`<strong>max_combined_length</strong> (<code>int</code>, <em>optional</em>, defaults to 300) &#x2014;
Max length of contextualized input returned by <code>__call__()</code>.`,name:"max_combined_length"},{anchor:"transformers.RagConfig.retrieval_vector_size",description:`<strong>retrieval_vector_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the document embeddings indexed by <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"retrieval_vector_size"},{anchor:"transformers.RagConfig.retrieval_batch_size",description:`<strong>retrieval_batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Retrieval batch size, defined as the number of queries issues concurrently to the faiss index encapsulated
<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"retrieval_batch_size"},{anchor:"transformers.RagConfig.dataset",description:`<strong>dataset</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;wiki_dpr&quot;</code>) &#x2014;
A dataset identifier of the indexed dataset in HuggingFace Datasets (list all available datasets and ids
using <code>datasets.list_datasets()</code>).`,name:"dataset"},{anchor:"transformers.RagConfig.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;train&quot;</code>) &#x2014;
Which split of the <code>dataset</code> to load.`,name:"dataset_split"},{anchor:"transformers.RagConfig.index_name",description:`<strong>index_name</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;compressed&quot;</code>) &#x2014;
The index name of the index associated with the <code>dataset</code>. One can choose between <code>&quot;legacy&quot;</code>, <code>&quot;exact&quot;</code> and
<code>&quot;compressed&quot;</code>.`,name:"index_name"},{anchor:"transformers.RagConfig.index_path",description:`<strong>index_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The path to the serialized faiss index on disk.`,name:"index_path"},{anchor:"transformers.RagConfig.passages_path",description:`<strong>passages_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to text passages compatible with the faiss index. Required if using
<code>LegacyIndex</code>`,name:"passages_path"},{anchor:"transformers.RagConfig.use_dummy_dataset",description:`<strong>use_dummy_dataset</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to load a &#x201C;dummy&#x201D; variant of the dataset specified by <code>dataset</code>.`,name:"use_dummy_dataset"},{anchor:"transformers.RagConfig.label_smoothing",description:`<strong>label_smoothing</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Only relevant if <code>return_loss</code> is set to <code>True</code>. Controls the <code>epsilon</code> parameter value for label smoothing
in the loss calculation. If set to 0, no label smoothing is performed.`,name:"label_smoothing"},{anchor:"transformers.RagConfig.do_marginalize",description:`<strong>do_marginalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the logits are marginalized over all documents by making use of
<code>torch.nn.functional.log_softmax</code>.`,name:"do_marginalize"},{anchor:"transformers.RagConfig.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to reduce the NLL loss using the <code>torch.Tensor.sum</code> operation.`,name:"reduce_loss"},{anchor:"transformers.RagConfig.do_deduplication",description:`<strong>do_deduplication</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to deduplicate the generations from different context documents for a given input. Has to be
set to <code>False</code> if used while training with distributed backend.`,name:"do_deduplication"},{anchor:"transformers.RagConfig.exclude_bos_score",description:`<strong>exclude_bos_score</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to disregard the BOS token when computing the loss.`,name:"exclude_bos_score"},{anchor:"transformers.RagConfig.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code>, <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code> are returned. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.RagConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/configuration_rag.py#L82"}}),Kt=new G({props:{name:"from_question_encoder_generator_configs",anchor:"transformers.RagConfig.from_question_encoder_generator_configs",parameters:[{name:"question_encoder_config",val:": PretrainedConfig"},{name:"generator_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/configuration_rag.py#L170",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Yt=new G({props:{name:"to_dict",anchor:"transformers.RagConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/configuration_rag.py#L183",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Xt=new _e({}),eo=new G({props:{name:"class transformers.RagTokenizer",anchor:"transformers.RagTokenizer",parameters:[{name:"question_encoder",val:""},{name:"generator",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/tokenization_rag.py#L28"}}),to=new _e({}),oo=new G({props:{name:"class transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"doc_scores",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"retrieved_doc_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"retrieved_doc_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"question_encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"question_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"generator_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.`,name:"logits"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.`,name:"doc_scores"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.retrieved_doc_embeds",description:`<strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.`,name:"retrieved_doc_embeds"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.retrieved_doc_ids",description:`<strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
The indexes of the embedded documents retrieved by the retriever.`,name:"retrieved_doc_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.`,name:"context_input_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.`,name:"context_attention_mask"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.question_encoder_last_hidden_state",description:`<strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.`,name:"question_encoder_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.question_enc_hidden_states",description:`<strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.`,name:"question_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.question_enc_attentions",description:`<strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"question_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_enc_last_hidden_state",description:`<strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the generator encoder of the model.`,name:"generator_enc_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_enc_hidden_states",description:`<strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.`,name:"generator_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_enc_attentions",description:`<strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_dec_hidden_states",description:`<strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.`,name:"generator_dec_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_dec_attentions",description:`<strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_dec_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_cross_attentions",description:`<strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"generator_cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L40"}}),ro=new G({props:{name:"class transformers.models.rag.modeling_rag.RetrievAugLMOutput",anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput",parameters:[{name:"logits",val:": FloatTensor = None"},{name:"doc_scores",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"retrieved_doc_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"retrieved_doc_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"question_encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"question_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"generator_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.`,name:"logits"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.`,name:"doc_scores"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.retrieved_doc_embeds",description:`<strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.`,name:"retrieved_doc_embeds"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.retrieved_doc_ids",description:`<strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
The indexes of the embedded documents retrieved by the retriever.`,name:"retrieved_doc_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.`,name:"context_input_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.`,name:"context_attention_mask"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.question_encoder_last_hidden_state",description:`<strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.`,name:"question_encoder_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.question_enc_hidden_states",description:`<strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.`,name:"question_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.question_enc_attentions",description:`<strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"question_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_enc_last_hidden_state",description:`<strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the generator encoder of the model.`,name:"generator_enc_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_enc_hidden_states",description:`<strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.`,name:"generator_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_enc_attentions",description:`<strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_dec_hidden_states",description:`<strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.`,name:"generator_dec_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_dec_attentions",description:`<strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_dec_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_cross_attentions",description:`<strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"generator_cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L135"}}),so=new _e({}),ao=new G({props:{name:"class transformers.RagRetriever",anchor:"transformers.RagRetriever",parameters:[{name:"config",val:""},{name:"question_encoder_tokenizer",val:""},{name:"generator_tokenizer",val:""},{name:"index",val:" = None"},{name:"init_retrieval",val:" = True"}],parametersDescription:[{anchor:"transformers.RagRetriever.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
The configuration of the RAG model this Retriever is used with. Contains parameters indicating which
<code>Index</code> to build. You can load your own custom dataset with <code>config.index_name=&quot;custom&quot;</code> or use a canonical
one (default) from the datasets library with <code>config.index_name=&quot;wiki_dpr&quot;</code> for example.`,name:"config"},{anchor:"transformers.RagRetriever.question_encoder_tokenizer",description:`<strong>question_encoder_tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer that was used to tokenize the question. It is used to decode the question and then use the
generator_tokenizer.`,name:"question_encoder_tokenizer"},{anchor:"transformers.RagRetriever.generator_tokenizer",description:`<strong>generator_tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer used for the generator part of the RagModel.`,name:"generator_tokenizer"},{anchor:"transformers.RagRetriever.index",description:`<strong>index</strong> (<code>Index</code>, optional, defaults to the one defined by the configuration) &#x2014;
If specified, use this index instead of the one built using the configuration`,name:"index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L323"}}),rt=new sn({props:{anchor:"transformers.RagRetriever.example",$$slots:{default:[Fb]},$$scope:{ctx:F}}}),io=new G({props:{name:"init_retrieval",anchor:"transformers.RagRetriever.init_retrieval",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L457"}}),co=new G({props:{name:"postprocess_docs",anchor:"transformers.RagRetriever.postprocess_docs",parameters:[{name:"docs",val:""},{name:"input_strings",val:""},{name:"prefix",val:""},{name:"n_docs",val:""},{name:"return_tensors",val:" = None"}],parametersDescription:[{anchor:"transformers.RagRetriever.postprocess_docs.docs",description:`<strong>docs</strong>  (<code>dict</code>) &#x2014;
Retrieved documents.`,name:"docs"},{anchor:"transformers.RagRetriever.postprocess_docs.input_strings",description:`<strong>input_strings</strong> (<code>str</code>) &#x2014;
Input strings decoded by <code>preprocess_query</code>.`,name:"input_strings"},{anchor:"transformers.RagRetriever.postprocess_docs.prefix",description:`<strong>prefix</strong> (<code>str</code>) &#x2014;
Prefix added at the beginning of each input, typically used with T5-based models.`,name:"prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L465",returnDescription:`
<p>a tuple consisting of two elements: contextualized <code>input_ids</code> and a compatible
<code>attention_mask</code>.</p>
`,returnType:`
<p><code>tuple(tensors)</code></p>
`}}),lo=new G({props:{name:"retrieve",anchor:"transformers.RagRetriever.retrieve",parameters:[{name:"question_hidden_states",val:": ndarray"},{name:"n_docs",val:": int"}],parametersDescription:[{anchor:"transformers.RagRetriever.retrieve.question_hidden_states",description:`<strong>question_hidden_states</strong> (<code>np.ndarray</code> of shape <code>(batch_size, vector_size)</code>) &#x2014;
A batch of query vectors to retrieve with.`,name:"question_hidden_states"},{anchor:"transformers.RagRetriever.retrieve.n_docs",description:`<strong>n_docs</strong> (<code>int</code>) &#x2014;
The number of docs retrieved per query.`,name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L537",returnDescription:`
<p>A tuple with the following objects:</p>
<ul>
<li><strong>retrieved_doc_embeds</strong> (<code>np.ndarray</code> of shape <code>(batch_size, n_docs, dim)</code>) \u2014 The retrieval embeddings
of the retrieved docs per query.</li>
<li><strong>doc_ids</strong> (<code>np.ndarray</code> of shape <code>(batch_size, n_docs)</code>) \u2014 The ids of the documents in the index</li>
<li><strong>doc_dicts</strong> (<code>List[dict]</code>): The <code>retrieved_doc_embeds</code> examples per query.</li>
</ul>
`,returnType:`
<p><code>Tuple[np.ndarray, np.ndarray, List[dict]]</code></p>
`}}),ho=new _e({}),mo=new G({props:{name:"class transformers.RagModel",anchor:"transformers.RagModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"question_encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"generator",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"retriever",val:": typing.Optional[transformers.models.rag.retrieval_rag.RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagModel.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagModel.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagModel.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L495"}}),ct=new ge({props:{$$slots:{default:[$b]},$$scope:{ctx:F}}}),fo=new G({props:{name:"forward",anchor:"transformers.RagModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"n_docs",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"transformers.RagModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RagModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagModel.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.RagModel.forward.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>,
returned when <em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the
question encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.RagModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RagModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RagModel.forward.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagModel.forward.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L538",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) \u2014 Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lt=new ge({props:{$$slots:{default:[zb]},$$scope:{ctx:F}}}),pt=new sn({props:{anchor:"transformers.RagModel.forward.example",$$slots:{default:[Eb]},$$scope:{ctx:F}}}),vo=new _e({}),bo=new G({props:{name:"class transformers.RagSequenceForGeneration",anchor:"transformers.RagSequenceForGeneration",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"question_encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"generator",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"retriever",val:": typing.Optional[transformers.models.rag.retrieval_rag.RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L743"}}),mt=new ge({props:{$$slots:{default:[jb]},$$scope:{ctx:F}}}),ko=new G({props:{name:"forward",anchor:"transformers.RagSequenceForGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"exclude_bos_score",val:": typing.Optional[bool] = None"},{name:"reduce_loss",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RagSequenceForGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagSequenceForGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagSequenceForGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagSequenceForGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagSequenceForGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagSequenceForGeneration.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.RagSequenceForGeneration.forward.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>,
returned when <em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the
question encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagSequenceForGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.RagSequenceForGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RagSequenceForGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RagSequenceForGeneration.forward.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagSequenceForGeneration.forward.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.RagSequenceForGeneration.forward.exclude_bos_score",description:`<strong>exclude_bos_score</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the score of the BOS token is disregarded when computing
the loss.`,name:"exclude_bos_score"},{anchor:"transformers.RagSequenceForGeneration.forward.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>torch.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.RagSequenceForGeneration.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) \u2014 Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new ge({props:{$$slots:{default:[Gb]},$$scope:{ctx:F}}}),gt=new sn({props:{anchor:"transformers.RagSequenceForGeneration.forward.example",$$slots:{default:[Mb]},$$scope:{ctx:F}}}),qo=new G({props:{name:"generate",anchor:"transformers.RagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"do_deduplication",val:": typing.Optional[bool] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.RagSequenceForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagSequenceForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder input_ids by the
retriever.`,name:"context_input_ids"},{anchor:"transformers.RagSequenceForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model is not initialized with a <code>retriever</code> or <code>input_ids</code> is not given, <code>context_input_ids</code> and
<code>context_attention_mask</code> have to be provided to the forward pass. They are returned by
<code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.RagSequenceForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
<p>If the model is not initialized with a <code>retriever</code> or <code>input_ids</code> is not given, <code>doc_scores</code> has to be
provided to the forward pass. <code>doc_scores</code> are returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.RagSequenceForGeneration.generate.do_deduplication",description:`<strong>do_deduplication</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to deduplicate the generations from different context documents for a given input. Has
to be set to <code>False</code> if used while training with distributed backend.`,name:"do_deduplication"},{anchor:"transformers.RagSequenceForGeneration.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch. Note that this
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate)</code>
function, where we set <code>num_return_sequences</code> to <code>num_beams</code>.`,name:"num_return_sequences(int,"},{anchor:"transformers.RagSequenceForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.RagSequenceForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.
kwargs &#x2014;
Additional kwargs will be passed to <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate">generate()</a>.`,name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L913",returnDescription:`
<p>The generated
sequences. The second dimension (sequence length) is either equal to <code>max_length</code> or shorter if all batches
finished early due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>torch.LongTensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),Ro=new _e({}),Fo=new G({props:{name:"class transformers.RagTokenForGeneration",anchor:"transformers.RagTokenForGeneration",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"question_encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"generator",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"retriever",val:": typing.Optional[transformers.models.rag.retrieval_rag.RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagTokenForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagTokenForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagTokenForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L1141"}}),vt=new ge({props:{$$slots:{default:[Ab]},$$scope:{ctx:F}}}),jo=new G({props:{name:"forward",anchor:"transformers.RagTokenForGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"do_marginalize",val:": typing.Optional[bool] = None"},{name:"reduce_loss",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RagTokenForGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagTokenForGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagTokenForGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagTokenForGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagTokenForGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagTokenForGeneration.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.RagTokenForGeneration.forward.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>,
returned when <em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the
question encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagTokenForGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.RagTokenForGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RagTokenForGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RagTokenForGeneration.forward.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagTokenForGeneration.forward.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.RagTokenForGeneration.forward.do_marginalize",description:`<strong>do_marginalize</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If <code>True</code>, the logits are marginalized over all documents by making use of
<code>torch.nn.functional.log_softmax</code>.`,name:"do_marginalize"},{anchor:"transformers.RagTokenForGeneration.forward.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>torch.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.RagTokenForGeneration.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) \u2014 Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bt=new ge({props:{$$slots:{default:[Nb]},$$scope:{ctx:F}}}),Tt=new sn({props:{anchor:"transformers.RagTokenForGeneration.forward.example",$$slots:{default:[Pb]},$$scope:{ctx:F}}}),Go=new G({props:{name:"generate",anchor:"transformers.RagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Callable[[int, torch.Tensor], typing.List[int]] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"renormalize_logits",val:": typing.Optional[bool] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[typing.Union[int, float]], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.RagTokenForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagTokenForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagTokenForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.RagTokenForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.RagTokenForGeneration.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.RagTokenForGeneration.generate.min_length",description:`<strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The minimum length of the sequence to be generated.`,name:"min_length"},{anchor:"transformers.RagTokenForGeneration.generate.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to stop the beam search when at least <code>num_beams</code> sentences are finished per batch or
not.
use_cache &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"early_stopping"},{anchor:"transformers.RagTokenForGeneration.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.RagTokenForGeneration.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.RagTokenForGeneration.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.RagTokenForGeneration.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Exponential penalty to the length that is used with beam-based generation. It is applied as an exponent
to the sequence length, which in turn is used to divide the score of the sequence. Since the score is
the log likelihood of the sequence (i.e. negative), <code>length_penalty</code> &gt; 0.0 promotes longer sequences,
while <code>length_penalty</code> &lt; 0.0 encourages shorter sequences.`,name:"length_penalty"},{anchor:"transformers.RagTokenForGeneration.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.RagTokenForGeneration.generate.encoder_no_repeat_ngram_size",description:`<strong>encoder_no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size that occur in the <code>encoder_input_ids</code> cannot occur in the
<code>decoder_input_ids</code>.`,name:"encoder_no_repeat_ngram_size"},{anchor:"transformers.RagTokenForGeneration.generate.bad_words_ids(List[int],",description:`<strong>bad_words_ids(<code>List[int]</code>,</strong> <em>optional</em>) &#x2014;
List of token ids that are not allowed to be generated. In order to get the tokens of the words that
should not appear in the generated text, use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.`,name:"bad_words_ids(List[int],"},{anchor:"transformers.RagTokenForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.RagTokenForGeneration.generate.num_beam_groups",description:`<strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups to divide <code>num_beams</code> into in order to ensure diversity among different groups of
beams. <a href="https://arxiv.org/pdf/1610.02424.pdf" rel="nofollow">this paper</a> for more details.`,name:"num_beam_groups"},{anchor:"transformers.RagTokenForGeneration.generate.diversity_penalty",description:`<strong>diversity_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
This value is subtracted from a beam&#x2019;s score if it generates a token same as any beam from other group
at a particular time. Note that <code>diversity_penalty</code> is only effective if <code>group beam search</code> is
enabled.`,name:"diversity_penalty"},{anchor:"transformers.RagTokenForGeneration.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch. Note that this
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate) function, where we set </code>num_return_sequences<code>to</code>num_beams<code>. decoder_start_token_id (</code>int\`, <em>optional</em>): If an
encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.`,name:"num_return_sequences(int,"},{anchor:"transformers.RagTokenForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.
prefix_allowed_tokens_fn &#x2014; (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>):
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments <code>inputs_ids</code> and the batch ID
<code>batch_id</code>. It has to return a list with the allowed tokens for the next generation step conditioned on
the previously generated tokens <code>inputs_ids</code> and the batch ID <code>batch_id</code>. This argument is useful for
constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"n_docs"},{anchor:"transformers.RagTokenForGeneration.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and a
model&#x2019;s config. If a logit processor is passed that is already created with the arguments or a model&#x2019;s
config an error is thrown.`,name:"logits_processor"},{anchor:"transformers.RagTokenForGeneration.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
Custom stopping criteria that complement the default stopping criteria built from arguments and a
model&#x2019;s config. If a stopping criteria is passed that is already created with the arguments or a
model&#x2019;s config an error is thrown.`,name:"stopping_criteria"},{anchor:"transformers.RagTokenForGeneration.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.RagTokenForGeneration.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.`,name:"forced_eos_token_id"},{anchor:"transformers.RagTokenForGeneration.generate.remove_invalid_values",description:`<strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to
crash. Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L1381",returnDescription:`
<p>The generated
sequences. The second dimension (sequence_length) is either equal to <code>max_length</code> or shorter if all batches
finished early due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>torch.LongTensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),Mo=new _e({}),Ao=new G({props:{name:"class transformers.TFRagModel",anchor:"transformers.TFRagModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagModel.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagModel.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagModel.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L491"}}),kt=new ge({props:{$$slots:{default:[Ob]},$$scope:{ctx:F}}}),Co=new G({props:{name:"call",anchor:"transformers.TFRagModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"doc_scores",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"context_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"context_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.`,name:"input_ids"},{anchor:"transformers.TFRagModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagModel.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.TFRagModel.call.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when
<em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the question
encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFRagModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFRagModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRagModel.call.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.TFRagModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagModel.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L542",returnDescription:`
<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) \u2014 Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),qt=new ge({props:{$$slots:{default:[Cb]},$$scope:{ctx:F}}}),xt=new sn({props:{anchor:"transformers.TFRagModel.call.example",$$slots:{default:[Lb]},$$scope:{ctx:F}}}),Lo=new _e({}),So=new G({props:{name:"class transformers.TFRagSequenceForGeneration",anchor:"transformers.TFRagSequenceForGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1381"}}),Ft=new ge({props:{$$slots:{default:[Sb]},$$scope:{ctx:F}}}),Wo=new G({props:{name:"call",anchor:"transformers.TFRagSequenceForGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"doc_scores",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"context_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"context_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"exclude_bos_score",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"reduce_loss",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.`,name:"input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagSequenceForGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagSequenceForGeneration.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.TFRagSequenceForGeneration.call.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when
<em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the question
encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFRagSequenceForGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFRagSequenceForGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRagSequenceForGeneration.call.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.TFRagSequenceForGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagSequenceForGeneration.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.TFRagSequenceForGeneration.call.exclude_bos_score",description:`<strong>exclude_bos_score</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the score of the BOS token is disregarded when computing
the loss.`,name:"exclude_bos_score"},{anchor:"transformers.TFRagSequenceForGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss according to Rag-Sequence model formulation See
<a href="https://arxiv.org/pdf/2005.11401.pdf" rel="nofollow">https://arxiv.org/pdf/2005.11401.pdf</a> Section 2.1 for details about Rag-Sequence formulation. Indices should
be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"},{anchor:"transformers.TFRagSequenceForGeneration.call.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>tf.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.TFRagSequenceForGeneration.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1429",returnDescription:`
<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) \u2014 Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>tf.Tensor</code>(int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),$t=new ge({props:{$$slots:{default:[Db]},$$scope:{ctx:F}}}),zt=new sn({props:{anchor:"transformers.TFRagSequenceForGeneration.call.example",$$slots:{default:[Ib]},$$scope:{ctx:F}}}),Ho=new G({props:{name:"generate",anchor:"transformers.TFRagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"do_deduplication",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"num_beams",val:" = None"},{name:"n_docs",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: - 1 for
tokens that are <strong>not masked</strong>, - 0 for tokens that are <strong>masked</strong>. <a href="../glossary#attention-mask">What are attention
masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder input_ids by the
retriever.`,name:"context_input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model has is not initialized with a <code>retriever</code> or <code>input_ids</code> is not given,
<code>context_input_ids</code> and <code>context_attention_mask</code> have to be provided to the forward pass. They are
returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> or
<code>input_ids</code> is not given, <code>doc_scores</code> has to be provided to the forward pass. <code>doc_scores</code> are
returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.TFRagSequenceForGeneration.generate.do_deduplication",description:`<strong>do_deduplication</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to deduplicate the generations from different context documents for a given input. Has
to be set to <code>False</code> if used while training with distributed backend.`,name:"do_deduplication"},{anchor:"transformers.TFRagSequenceForGeneration.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch. Note that this
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate)</code>
function, where we set <code>num_return_sequences</code> to <code>num_beams</code>.`,name:"num_return_sequences(int,"},{anchor:"transformers.TFRagSequenceForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.TFRagSequenceForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.
kwargs &#x2014;
Additional kwargs will be passed to <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate">generate()</a>`,name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1664",returnDescription:`
<p>The generated sequences. The
second dimension (sequence length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),Qo=new _e({}),Ko=new G({props:{name:"class transformers.TFRagTokenForGeneration",anchor:"transformers.TFRagTokenForGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagTokenForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagTokenForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagTokenForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L726"}}),Gt=new ge({props:{$$slots:{default:[Ub]},$$scope:{ctx:F}}}),Xo=new G({props:{name:"call",anchor:"transformers.TFRagTokenForGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"doc_scores",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"context_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"context_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"do_marginalize",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"reduce_loss",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.`,name:"input_ids"},{anchor:"transformers.TFRagTokenForGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagTokenForGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagTokenForGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagTokenForGeneration.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.TFRagTokenForGeneration.call.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when
<em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the question
encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagTokenForGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFRagTokenForGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFRagTokenForGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRagTokenForGeneration.call.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.TFRagTokenForGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagTokenForGeneration.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.TFRagTokenForGeneration.call.do_marginalize",description:`<strong>do_marginalize</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If <code>True</code>, the logits are marginalized over all documents by making use of
<code>torch.nn.functional.log_softmax</code>.`,name:"do_marginalize"},{anchor:"transformers.TFRagTokenForGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss according to Rag-Token model formulation See
<a href="https://arxiv.org/pdf/2005.11401.pdf" rel="nofollow">https://arxiv.org/pdf/2005.11401.pdf</a> Section 2.1 for details about Rag-Token formulation. Indices should be
in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"},{anchor:"transformers.TFRagTokenForGeneration.call.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>tf.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.TFRagTokenForGeneration.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L832",returnDescription:`
<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) \u2014 Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>tf.Tensor</code>(int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) \u2014 Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Mt=new ge({props:{$$slots:{default:[Wb]},$$scope:{ctx:F}}}),At=new sn({props:{anchor:"transformers.TFRagTokenForGeneration.call.example",$$slots:{default:[Hb]},$$scope:{ctx:F}}}),Zo=new G({props:{name:"generate",anchor:"transformers.TFRagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"early_stopping",val:" = None"},{name:"use_cache",val:" = None"},{name:"num_beams",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"n_docs",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.TFRagTokenForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagTokenForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.TFRagTokenForGeneration.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.TFRagTokenForGeneration.generate.min_length",description:`<strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The minimum length of the sequence to be generated.`,name:"min_length"},{anchor:"transformers.TFRagTokenForGeneration.generate.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to stop the beam search when at least <code>num_beams</code> sentences are finished per batch or
not.
use_cache &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"early_stopping"},{anchor:"transformers.TFRagTokenForGeneration.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.TFRagTokenForGeneration.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.TFRagTokenForGeneration.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.TFRagTokenForGeneration.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Exponential penalty to the length that is used with beam-based generation. It is applied as an exponent
to the sequence length, which in turn is used to divide the score of the sequence. Since the score is
the log likelihood of the sequence (i.e. negative), <code>length_penalty</code> &gt; 0.0 promotes longer sequences,
while <code>length_penalty</code> &lt; 0.0 encourages shorter sequences.`,name:"length_penalty"},{anchor:"transformers.TFRagTokenForGeneration.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.TFRagTokenForGeneration.generate.bad_words_ids(List[int],",description:`<strong>bad_words_ids(<code>List[int]</code>,</strong> <em>optional</em>) &#x2014;
List of token ids that are not allowed to be generated. In order to get the tokens of the words that
should not appear in the generated text, use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.`,name:"bad_words_ids(List[int],"},{anchor:"transformers.TFRagTokenForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.TFRagTokenForGeneration.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch. Note that this
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate) function, where we set </code>num_return_sequences<code>to</code>num_beams<code>. decoder_start_token_id (</code>int\`, <em>optional</em>): If an
encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.`,name:"num_return_sequences(int,"},{anchor:"transformers.TFRagTokenForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.`,name:"n_docs"},{anchor:"transformers.TFRagTokenForGeneration.generate.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.TFRagTokenForGeneration.generate.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.TFRagTokenForGeneration.generate.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.TFRagTokenForGeneration.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.
model_specific_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"return_dict_in_generate"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L987",returnDescription:`
<p>The generated sequences. The
second dimension (sequence_length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),{c(){c=s("meta"),b=p(),u=s("h1"),g=s("a"),f=s("span"),T(i.$$.fragment),m=p(),R=s("span"),Yd=o("RAG"),Sa=p(),ke=s("h2"),Ve=s("a"),zr=s("span"),T(Ut.$$.fragment),Jd=p(),Er=s("span"),Xd=o("Overview"),Da=p(),cn=s("p"),Zd=o(`Retrieval-augmented generation (\u201CRAG\u201D) models combine the powers of pretrained dense retrieval (DPR) and
sequence-to-sequence models. RAG models retrieve documents, pass them to a seq2seq model, then marginalize to generate
outputs. The retriever and seq2seq modules are initialized from pretrained models, and fine-tuned jointly, allowing
both retrieval and generation to adapt to downstream tasks.`),Ia=p(),Ye=s("p"),ei=o("It is based on the paper "),Wt=s("a"),ti=o("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"),oi=o(` by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich K\xFCttler, Mike Lewis, Wen-tau Yih, Tim Rockt\xE4schel, Sebastian Riedel, Douwe Kiela.`),Ua=p(),ln=s("p"),ni=o("The abstract from the paper is the following:"),Wa=p(),pn=s("p"),jr=s("em"),ri=o(`Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve
state-of-the-art results when fine-tuned on downstream NLP tasks. However, their ability to access and precisely
manipulate knowledge is still limited, and hence on knowledge-intensive tasks, their performance lags behind
task-specific architectures. Additionally, providing provenance for their decisions and updating their world knowledge
remain open research problems. Pre-trained models with a differentiable access mechanism to explicit nonparametric
memory can overcome this issue, but have so far been only investigated for extractive downstream tasks. We explore a
general-purpose fine-tuning recipe for retrieval-augmented generation (RAG) \u2014 models which combine pre-trained
parametric and non-parametric memory for language generation. We introduce RAG models where the parametric memory is a
pre-trained seq2seq model and the non-parametric memory is a dense vector index of Wikipedia, accessed with a
pre-trained neural retriever. We compare two RAG formulations, one which conditions on the same retrieved passages
across the whole generated sequence, the other can use different passages per token. We fine-tune and evaluate our
models on a wide range of knowledge-intensive NLP tasks and set the state-of-the-art on three open domain QA tasks,
outperforming parametric seq2seq models and task-specific retrieve-and-extract architectures. For language generation
tasks, we find that RAG models generate more specific, diverse and factual language than a state-of-the-art
parametric-only seq2seq baseline.`),Ha=p(),Je=s("p"),si=o("This model was contributed by "),Ht=s("a"),ai=o("ola13"),di=o("."),Ba=p(),qe=s("h2"),Xe=s("a"),Gr=s("span"),T(Bt.$$.fragment),ii=p(),Mr=s("span"),ci=o("RagConfig"),Qa=p(),ee=s("div"),T(Qt.$$.fragment),li=p(),de=s("p"),hn=s("a"),pi=o("RagConfig"),hi=o(" stores the configuration of a "),Ar=s("em"),mi=o("RagModel"),ui=o(". Configuration objects inherit from "),mn=s("a"),gi=o("PretrainedConfig"),_i=o(` and
can be used to control the model outputs. Read the documentation from `),un=s("a"),fi=o("PretrainedConfig"),vi=o(" for more information."),bi=p(),Ze=s("div"),T(Kt.$$.fragment),Ti=p(),Vt=s("p"),wi=o("Instantiate a "),gn=s("a"),yi=o("EncoderDecoderConfig"),ki=o(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),qi=p(),et=s("div"),T(Yt.$$.fragment),xi=p(),Jt=s("p"),Ri=o("Serializes this instance to a Python dictionary. Override the default "),_n=s("a"),Fi=o("to_dict()"),$i=o("."),Ka=p(),xe=s("h2"),tt=s("a"),Nr=s("span"),T(Xt.$$.fragment),zi=p(),Pr=s("span"),Ei=o("RagTokenizer"),Va=p(),Zt=s("div"),T(eo.$$.fragment),Ya=p(),Re=s("h2"),ot=s("a"),Or=s("span"),T(to.$$.fragment),ji=p(),Cr=s("span"),Gi=o("Rag specific outputs"),Ja=p(),Fe=s("div"),T(oo.$$.fragment),Mi=p(),Lr=s("p"),Ai=o("Base class for retriever augmented marginalized models outputs."),Xa=p(),no=s("div"),T(ro.$$.fragment),Za=p(),$e=s("h2"),nt=s("a"),Sr=s("span"),T(so.$$.fragment),Ni=p(),Dr=s("span"),Pi=o("RagRetriever"),ed=p(),Z=s("div"),T(ao.$$.fragment),Oi=p(),Ir=s("p"),Ci=o(`Retriever used to get documents from vector queries. It retrieves the documents embeddings as well as the documents
contents, and it formats them to be used with a RagModel.`),Li=p(),T(rt.$$.fragment),Si=p(),st=s("div"),T(io.$$.fragment),Di=p(),Ur=s("p"),Ii=o("Retriever initialization function. It loads the index into memory."),Ui=p(),at=s("div"),T(co.$$.fragment),Wi=p(),ze=s("p"),Hi=o("Postprocessing retrieved "),Wr=s("code"),Bi=o("docs"),Qi=o(" and combining them with "),Hr=s("code"),Ki=o("input_strings"),Vi=o("."),Yi=p(),dt=s("div"),T(lo.$$.fragment),Ji=p(),po=s("p"),Xi=o("Retrieves documents for specified "),Br=s("code"),Zi=o("question_hidden_states"),ec=o("."),td=p(),Ee=s("h2"),it=s("a"),Qr=s("span"),T(ho.$$.fragment),tc=p(),Kr=s("span"),oc=o("RagModel"),od=p(),L=s("div"),T(mo.$$.fragment),nc=p(),je=s("p"),rc=o("The "),fn=s("a"),sc=o("RagModel"),ac=o(" forward method, overrides the "),Vr=s("code"),dc=o("__call__"),ic=o(" special method."),cc=p(),T(ct.$$.fragment),lc=p(),Yr=s("p"),pc=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),hc=p(),te=s("p"),mc=o("The question encoder can be any "),Jr=s("em"),uc=o("autoencoding"),gc=o(" model, preferably "),vn=s("a"),_c=o("DPRQuestionEncoder"),fc=o(`, and the generator can be
any `),Xr=s("em"),vc=o("seq2seq"),bc=o(" model, preferably "),bn=s("a"),Tc=o("BartForConditionalGeneration"),wc=o("."),yc=p(),M=s("p"),kc=o("The model can be initialized with a "),Tn=s("a"),qc=o("RagRetriever"),xc=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Zr=s("em"),Rc=o("autoencoding"),Fc=o(" model as the "),es=s("code"),$c=o("question_encoder"),zc=o(" and any "),ts=s("em"),Ec=o("seq2seq"),jc=o(" model with language model head as the "),os=s("code"),Gc=o("generator"),Mc=o(`.
It has been tested with `),wn=s("a"),Ac=o("DPRQuestionEncoder"),Nc=o(" as the "),ns=s("code"),Pc=o("question_encoder"),Oc=o(" and "),yn=s("a"),Cc=o("BartForConditionalGeneration"),Lc=o(` or
`),kn=s("a"),Sc=o("T5ForConditionalGeneration"),Dc=o(" as the "),rs=s("code"),Ic=o("generator"),Uc=o("."),Wc=p(),uo=s("p"),Hc=o("This model inherits from "),qn=s("a"),Bc=o("PreTrainedModel"),Qc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc=p(),go=s("p"),Vc=o("This model is also a PyTorch "),_o=s("a"),Yc=o("torch.nn.Module"),Jc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc=p(),ie=s("div"),T(fo.$$.fragment),Zc=p(),Ge=s("p"),el=o("The "),xn=s("a"),tl=o("RagModel"),ol=o(" forward method, overrides the "),ss=s("code"),nl=o("__call__"),rl=o(" special method."),sl=p(),T(lt.$$.fragment),al=p(),T(pt.$$.fragment),nd=p(),Me=s("h2"),ht=s("a"),as=s("span"),T(vo.$$.fragment),dl=p(),ds=s("span"),il=o("RagSequenceForGeneration"),rd=p(),E=s("div"),T(bo.$$.fragment),cl=p(),Ae=s("p"),ll=o("The "),Rn=s("a"),pl=o("RagSequenceForGeneration"),hl=o(" forward method, overrides the "),is=s("code"),ml=o("__call__"),ul=o(" special method."),gl=p(),T(mt.$$.fragment),_l=p(),cs=s("p"),fl=o("A RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),vl=p(),ls=s("p"),bl=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Tl=p(),oe=s("p"),wl=o("The question encoder can be any "),ps=s("em"),yl=o("autoencoding"),kl=o(" model, preferably "),Fn=s("a"),ql=o("DPRQuestionEncoder"),xl=o(`, and the generator can be
any `),hs=s("em"),Rl=o("seq2seq"),Fl=o(" model, preferably "),$n=s("a"),$l=o("BartForConditionalGeneration"),zl=o("."),El=p(),A=s("p"),jl=o("The model can be initialized with a "),zn=s("a"),Gl=o("RagRetriever"),Ml=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),ms=s("em"),Al=o("autoencoding"),Nl=o(" model as the "),us=s("code"),Pl=o("question_encoder"),Ol=o(" and any "),gs=s("em"),Cl=o("seq2seq"),Ll=o(" model with language model head as the "),_s=s("code"),Sl=o("generator"),Dl=o(`.
It has been tested with `),En=s("a"),Il=o("DPRQuestionEncoder"),Ul=o(" as the "),fs=s("code"),Wl=o("question_encoder"),Hl=o(" and "),jn=s("a"),Bl=o("BartForConditionalGeneration"),Ql=o(` or
`),Gn=s("a"),Kl=o("T5ForConditionalGeneration"),Vl=o(" as the "),vs=s("code"),Yl=o("generator"),Jl=o("."),Xl=p(),To=s("p"),Zl=o("This model inherits from "),Mn=s("a"),ep=o("PreTrainedModel"),tp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),op=p(),wo=s("p"),np=o("This model is also a PyTorch "),yo=s("a"),rp=o("torch.nn.Module"),sp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ap=p(),ce=s("div"),T(ko.$$.fragment),dp=p(),Ne=s("p"),ip=o("The "),An=s("a"),cp=o("RagSequenceForGeneration"),lp=o(" forward method, overrides the "),bs=s("code"),pp=o("__call__"),hp=o(" special method."),mp=p(),T(ut.$$.fragment),up=p(),T(gt.$$.fragment),gp=p(),_t=s("div"),T(qo.$$.fragment),_p=p(),xo=s("p"),fp=o("Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),Nn=s("a"),vp=o("generate()"),bp=o("`\ndocumentation for more information on how to set other generate input parameters."),sd=p(),Pe=s("h2"),ft=s("a"),Ts=s("span"),T(Ro.$$.fragment),Tp=p(),ws=s("span"),wp=o("RagTokenForGeneration"),ad=p(),j=s("div"),T(Fo.$$.fragment),yp=p(),Oe=s("p"),kp=o("The "),Pn=s("a"),qp=o("RagTokenForGeneration"),xp=o(" forward method, overrides the "),ys=s("code"),Rp=o("__call__"),Fp=o(" special method."),$p=p(),T(vt.$$.fragment),zp=p(),ks=s("p"),Ep=o("A RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),jp=p(),qs=s("p"),Gp=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Mp=p(),ne=s("p"),Ap=o("The question encoder can be any "),xs=s("em"),Np=o("autoencoding"),Pp=o(" model, preferably "),On=s("a"),Op=o("DPRQuestionEncoder"),Cp=o(`, and the generator can be
any `),Rs=s("em"),Lp=o("seq2seq"),Sp=o(" model, preferably "),Cn=s("a"),Dp=o("BartForConditionalGeneration"),Ip=o("."),Up=p(),N=s("p"),Wp=o("The model can be initialized with a "),Ln=s("a"),Hp=o("RagRetriever"),Bp=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Fs=s("em"),Qp=o("autoencoding"),Kp=o(" model as the "),$s=s("code"),Vp=o("question_encoder"),Yp=o(" and any "),zs=s("em"),Jp=o("seq2seq"),Xp=o(" model with language model head as the "),Es=s("code"),Zp=o("generator"),eh=o(`.
It has been tested with `),Sn=s("a"),th=o("DPRQuestionEncoder"),oh=o(" as the "),js=s("code"),nh=o("question_encoder"),rh=o(" and "),Dn=s("a"),sh=o("BartForConditionalGeneration"),ah=o(` or
`),In=s("a"),dh=o("T5ForConditionalGeneration"),ih=o(" as the "),Gs=s("code"),ch=o("generator"),lh=o("."),ph=p(),$o=s("p"),hh=o("This model inherits from "),Un=s("a"),mh=o("PreTrainedModel"),uh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=p(),zo=s("p"),_h=o("This model is also a PyTorch "),Eo=s("a"),fh=o("torch.nn.Module"),vh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bh=p(),le=s("div"),T(jo.$$.fragment),Th=p(),Ce=s("p"),wh=o("The "),Wn=s("a"),yh=o("RagTokenForGeneration"),kh=o(" forward method, overrides the "),Ms=s("code"),qh=o("__call__"),xh=o(" special method."),Rh=p(),T(bt.$$.fragment),Fh=p(),T(Tt.$$.fragment),$h=p(),wt=s("div"),T(Go.$$.fragment),zh=p(),As=s("p"),Eh=o("Implements RAG token decoding."),dd=p(),Le=s("h2"),yt=s("a"),Ns=s("span"),T(Mo.$$.fragment),jh=p(),Ps=s("span"),Gh=o("TFRagModel"),id=p(),P=s("div"),T(Ao.$$.fragment),Mh=p(),Se=s("p"),Ah=o("The "),Hn=s("a"),Nh=o("TFRagModel"),Ph=o(" forward method, overrides the "),Os=s("code"),Oh=o("__call__"),Ch=o(" special method."),Lh=p(),T(kt.$$.fragment),Sh=p(),Cs=s("p"),Dh=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Ih=p(),re=s("p"),Uh=o("The question encoder can be any "),Ls=s("em"),Wh=o("autoencoding"),Hh=o(" model, preferably "),Bn=s("a"),Bh=o("TFDPRQuestionEncoder"),Qh=o(`, and the generator can be
any `),Ss=s("em"),Kh=o("seq2seq"),Vh=o(" model, preferably "),Qn=s("a"),Yh=o("TFBartForConditionalGeneration"),Jh=o("."),Xh=p(),S=s("p"),Zh=o("The model can be initialized with a "),Kn=s("a"),em=o("RagRetriever"),tm=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Ds=s("em"),om=o("autoencoding"),nm=o(" model as the "),Is=s("code"),rm=o("question_encoder"),sm=o(" and any "),Us=s("em"),am=o("seq2seq"),dm=o(" model with language model head as the "),Ws=s("code"),im=o("generator"),cm=o(`.
It has been tested with `),Vn=s("a"),lm=o("TFDPRQuestionEncoder"),pm=o(" as the "),Hs=s("code"),hm=o("question_encoder"),mm=o(" and "),Yn=s("a"),um=o("TFBartForConditionalGeneration"),gm=o(`
as the `),Bs=s("code"),_m=o("generator"),fm=o("."),vm=p(),No=s("p"),bm=o("This model inherits from "),Jn=s("a"),Tm=o("TFPreTrainedModel"),wm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym=p(),Po=s("p"),km=o("This model is also a Tensorflow "),Oo=s("a"),qm=o("tf.keras.Model"),xm=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Rm=p(),Qs=s("p"),Fm=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),$m=p(),pe=s("div"),T(Co.$$.fragment),zm=p(),De=s("p"),Em=o("The "),Xn=s("a"),jm=o("TFRagModel"),Gm=o(" forward method, overrides the "),Ks=s("code"),Mm=o("__call__"),Am=o(" special method."),Nm=p(),T(qt.$$.fragment),Pm=p(),T(xt.$$.fragment),cd=p(),Ie=s("h2"),Rt=s("a"),Vs=s("span"),T(Lo.$$.fragment),Om=p(),Ys=s("span"),Cm=o("TFRagSequenceForGeneration"),ld=p(),$=s("div"),T(So.$$.fragment),Lm=p(),Ue=s("p"),Sm=o("The "),Zn=s("a"),Dm=o("TFRagSequenceForGeneration"),Im=o(" forward method, overrides the "),Js=s("code"),Um=o("__call__"),Wm=o(" special method."),Hm=p(),T(Ft.$$.fragment),Bm=p(),Xs=s("p"),Qm=o("A TF RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),Km=p(),Zs=s("p"),Vm=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Ym=p(),se=s("p"),Jm=o("The question encoder can be any "),ea=s("em"),Xm=o("autoencoding"),Zm=o(" model, preferably "),er=s("a"),eu=o("TFDPRQuestionEncoder"),tu=o(`, and the generator can be
any `),ta=s("em"),ou=o("seq2seq"),nu=o(" model, preferably "),tr=s("a"),ru=o("TFBartForConditionalGeneration"),su=o("."),au=p(),D=s("p"),du=o("The model can be initialized with a "),or=s("a"),iu=o("RagRetriever"),cu=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),oa=s("em"),lu=o("autoencoding"),pu=o(" model as the "),na=s("code"),hu=o("question_encoder"),mu=o(" and any "),ra=s("em"),uu=o("seq2seq"),gu=o(" model with language model head as the "),sa=s("code"),_u=o("generator"),fu=o(`.
It has been tested with `),nr=s("a"),vu=o("TFDPRQuestionEncoder"),bu=o(" as the "),aa=s("code"),Tu=o("question_encoder"),wu=o(" and "),rr=s("a"),yu=o("TFBartForConditionalGeneration"),ku=o(`
as the `),da=s("code"),qu=o("generator"),xu=o("."),Ru=p(),Do=s("p"),Fu=o("This model inherits from "),sr=s("a"),$u=o("TFPreTrainedModel"),zu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu=p(),Io=s("p"),ju=o("This model is also a Tensorflow "),Uo=s("a"),Gu=o("tf.keras.Model"),Mu=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Au=p(),ia=s("p"),Nu=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Pu=p(),he=s("div"),T(Wo.$$.fragment),Ou=p(),We=s("p"),Cu=o("The "),ar=s("a"),Lu=o("TFRagSequenceForGeneration"),Su=o(" forward method, overrides the "),ca=s("code"),Du=o("__call__"),Iu=o(" special method."),Uu=p(),T($t.$$.fragment),Wu=p(),T(zt.$$.fragment),Hu=p(),Et=s("div"),T(Ho.$$.fragment),Bu=p(),Bo=s("p"),Qu=o("Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),dr=s("a"),Ku=o("generate()"),Vu=o("`\ndocumentation for more information on how to set other generate input parameters"),pd=p(),He=s("h2"),jt=s("a"),la=s("span"),T(Qo.$$.fragment),Yu=p(),pa=s("span"),Ju=o("TFRagTokenForGeneration"),hd=p(),z=s("div"),T(Ko.$$.fragment),Xu=p(),Be=s("p"),Zu=o("The "),ir=s("a"),eg=o("TFRagTokenForGeneration"),tg=o(" forward method, overrides the "),ha=s("code"),og=o("__call__"),ng=o(" special method."),rg=p(),T(Gt.$$.fragment),sg=p(),ma=s("p"),ag=o("A TF RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),dg=p(),ua=s("p"),ig=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),cg=p(),ae=s("p"),lg=o("The question encoder can be any "),ga=s("em"),pg=o("autoencoding"),hg=o(" model, preferably "),cr=s("a"),mg=o("TFDPRQuestionEncoder"),ug=o(`, and the generator can be
any `),_a=s("em"),gg=o("seq2seq"),_g=o(" model, preferably "),lr=s("a"),fg=o("TFBartForConditionalGeneration"),vg=o("."),bg=p(),I=s("p"),Tg=o("The model can be initialized with a "),pr=s("a"),wg=o("RagRetriever"),yg=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),fa=s("em"),kg=o("autoencoding"),qg=o(" model as the "),va=s("code"),xg=o("question_encoder"),Rg=o(" and any "),ba=s("em"),Fg=o("seq2seq"),$g=o(" model with language model head as the "),Ta=s("code"),zg=o("generator"),Eg=o(`.
It has been tested with `),hr=s("a"),jg=o("TFDPRQuestionEncoder"),Gg=o(" as the "),wa=s("code"),Mg=o("question_encoder"),Ag=o(" and "),mr=s("a"),Ng=o("TFBartForConditionalGeneration"),Pg=o(`
as the `),ya=s("code"),Og=o("generator"),Cg=o("."),Lg=p(),Vo=s("p"),Sg=o("This model inherits from "),ur=s("a"),Dg=o("TFPreTrainedModel"),Ig=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=p(),Yo=s("p"),Wg=o("This model is also a Tensorflow "),Jo=s("a"),Hg=o("tf.keras.Model"),Bg=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Qg=p(),ka=s("p"),Kg=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Vg=p(),me=s("div"),T(Xo.$$.fragment),Yg=p(),Qe=s("p"),Jg=o("The "),gr=s("a"),Xg=o("TFRagTokenForGeneration"),Zg=o(" forward method, overrides the "),qa=s("code"),e_=o("__call__"),t_=o(" special method."),o_=p(),T(Mt.$$.fragment),n_=p(),T(At.$$.fragment),r_=p(),Nt=s("div"),T(Zo.$$.fragment),s_=p(),xa=s("p"),a_=o("Implements TFRAG token decoding."),this.h()},l(r){const _=xb('[data-svelte="svelte-1phssyn"]',document.head);c=a(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(r),u=a(r,"H1",{class:!0});var en=d(u);g=a(en,"A",{id:!0,class:!0,href:!0});var Ra=d(g);f=a(Ra,"SPAN",{});var Fa=d(f);w(i.$$.fragment,Fa),Fa.forEach(t),Ra.forEach(t),m=h(en),R=a(en,"SPAN",{});var $a=d(R);Yd=n($a,"RAG"),$a.forEach(t),en.forEach(t),Sa=h(r),ke=a(r,"H2",{class:!0});var tn=d(ke);Ve=a(tn,"A",{id:!0,class:!0,href:!0});var za=d(Ve);zr=a(za,"SPAN",{});var Ea=d(zr);w(Ut.$$.fragment,Ea),Ea.forEach(t),za.forEach(t),Jd=h(tn),Er=a(tn,"SPAN",{});var ja=d(Er);Xd=n(ja,"Overview"),ja.forEach(t),tn.forEach(t),Da=h(r),cn=a(r,"P",{});var Ga=d(cn);Zd=n(Ga,`Retrieval-augmented generation (\u201CRAG\u201D) models combine the powers of pretrained dense retrieval (DPR) and
sequence-to-sequence models. RAG models retrieve documents, pass them to a seq2seq model, then marginalize to generate
outputs. The retriever and seq2seq modules are initialized from pretrained models, and fine-tuned jointly, allowing
both retrieval and generation to adapt to downstream tasks.`),Ga.forEach(t),Ia=h(r),Ye=a(r,"P",{});var on=d(Ye);ei=n(on,"It is based on the paper "),Wt=a(on,"A",{href:!0,rel:!0});var Ma=d(Wt);ti=n(Ma,"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"),Ma.forEach(t),oi=n(on,` by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich K\xFCttler, Mike Lewis, Wen-tau Yih, Tim Rockt\xE4schel, Sebastian Riedel, Douwe Kiela.`),on.forEach(t),Ua=h(r),ln=a(r,"P",{});var Aa=d(ln);ni=n(Aa,"The abstract from the paper is the following:"),Aa.forEach(t),Wa=h(r),pn=a(r,"P",{});var Na=d(pn);jr=a(Na,"EM",{});var Pa=d(jr);ri=n(Pa,`Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve
state-of-the-art results when fine-tuned on downstream NLP tasks. However, their ability to access and precisely
manipulate knowledge is still limited, and hence on knowledge-intensive tasks, their performance lags behind
task-specific architectures. Additionally, providing provenance for their decisions and updating their world knowledge
remain open research problems. Pre-trained models with a differentiable access mechanism to explicit nonparametric
memory can overcome this issue, but have so far been only investigated for extractive downstream tasks. We explore a
general-purpose fine-tuning recipe for retrieval-augmented generation (RAG) \u2014 models which combine pre-trained
parametric and non-parametric memory for language generation. We introduce RAG models where the parametric memory is a
pre-trained seq2seq model and the non-parametric memory is a dense vector index of Wikipedia, accessed with a
pre-trained neural retriever. We compare two RAG formulations, one which conditions on the same retrieved passages
across the whole generated sequence, the other can use different passages per token. We fine-tune and evaluate our
models on a wide range of knowledge-intensive NLP tasks and set the state-of-the-art on three open domain QA tasks,
outperforming parametric seq2seq models and task-specific retrieve-and-extract architectures. For language generation
tasks, we find that RAG models generate more specific, diverse and factual language than a state-of-the-art
parametric-only seq2seq baseline.`),Pa.forEach(t),Na.forEach(t),Ha=h(r),Je=a(r,"P",{});var nn=d(Je);si=n(nn,"This model was contributed by "),Ht=a(nn,"A",{href:!0,rel:!0});var Oa=d(Ht);ai=n(Oa,"ola13"),Oa.forEach(t),di=n(nn,"."),nn.forEach(t),Ba=h(r),qe=a(r,"H2",{class:!0});var rn=d(qe);Xe=a(rn,"A",{id:!0,class:!0,href:!0});var Ca=d(Xe);Gr=a(Ca,"SPAN",{});var La=d(Gr);w(Bt.$$.fragment,La),La.forEach(t),Ca.forEach(t),ii=h(rn),Mr=a(rn,"SPAN",{});var d_=d(Mr);ci=n(d_,"RagConfig"),d_.forEach(t),rn.forEach(t),Qa=h(r),ee=a(r,"DIV",{class:!0});var Pt=d(ee);w(Qt.$$.fragment,Pt),li=h(Pt),de=a(Pt,"P",{});var Ke=d(de);hn=a(Ke,"A",{href:!0});var i_=d(hn);pi=n(i_,"RagConfig"),i_.forEach(t),hi=n(Ke," stores the configuration of a "),Ar=a(Ke,"EM",{});var c_=d(Ar);mi=n(c_,"RagModel"),c_.forEach(t),ui=n(Ke,". Configuration objects inherit from "),mn=a(Ke,"A",{href:!0});var l_=d(mn);gi=n(l_,"PretrainedConfig"),l_.forEach(t),_i=n(Ke,` and
can be used to control the model outputs. Read the documentation from `),un=a(Ke,"A",{href:!0});var p_=d(un);fi=n(p_,"PretrainedConfig"),p_.forEach(t),vi=n(Ke," for more information."),Ke.forEach(t),bi=h(Pt),Ze=a(Pt,"DIV",{class:!0});var ud=d(Ze);w(Kt.$$.fragment,ud),Ti=h(ud),Vt=a(ud,"P",{});var gd=d(Vt);wi=n(gd,"Instantiate a "),gn=a(gd,"A",{href:!0});var h_=d(gn);yi=n(h_,"EncoderDecoderConfig"),h_.forEach(t),ki=n(gd,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),gd.forEach(t),ud.forEach(t),qi=h(Pt),et=a(Pt,"DIV",{class:!0});var _d=d(et);w(Yt.$$.fragment,_d),xi=h(_d),Jt=a(_d,"P",{});var fd=d(Jt);Ri=n(fd,"Serializes this instance to a Python dictionary. Override the default "),_n=a(fd,"A",{href:!0});var m_=d(_n);Fi=n(m_,"to_dict()"),m_.forEach(t),$i=n(fd,"."),fd.forEach(t),_d.forEach(t),Pt.forEach(t),Ka=h(r),xe=a(r,"H2",{class:!0});var vd=d(xe);tt=a(vd,"A",{id:!0,class:!0,href:!0});var u_=d(tt);Nr=a(u_,"SPAN",{});var g_=d(Nr);w(Xt.$$.fragment,g_),g_.forEach(t),u_.forEach(t),zi=h(vd),Pr=a(vd,"SPAN",{});var __=d(Pr);Ei=n(__,"RagTokenizer"),__.forEach(t),vd.forEach(t),Va=h(r),Zt=a(r,"DIV",{class:!0});var f_=d(Zt);w(eo.$$.fragment,f_),f_.forEach(t),Ya=h(r),Re=a(r,"H2",{class:!0});var bd=d(Re);ot=a(bd,"A",{id:!0,class:!0,href:!0});var v_=d(ot);Or=a(v_,"SPAN",{});var b_=d(Or);w(to.$$.fragment,b_),b_.forEach(t),v_.forEach(t),ji=h(bd),Cr=a(bd,"SPAN",{});var T_=d(Cr);Gi=n(T_,"Rag specific outputs"),T_.forEach(t),bd.forEach(t),Ja=h(r),Fe=a(r,"DIV",{class:!0});var Td=d(Fe);w(oo.$$.fragment,Td),Mi=h(Td),Lr=a(Td,"P",{});var w_=d(Lr);Ai=n(w_,"Base class for retriever augmented marginalized models outputs."),w_.forEach(t),Td.forEach(t),Xa=h(r),no=a(r,"DIV",{class:!0});var y_=d(no);w(ro.$$.fragment,y_),y_.forEach(t),Za=h(r),$e=a(r,"H2",{class:!0});var wd=d($e);nt=a(wd,"A",{id:!0,class:!0,href:!0});var k_=d(nt);Sr=a(k_,"SPAN",{});var q_=d(Sr);w(so.$$.fragment,q_),q_.forEach(t),k_.forEach(t),Ni=h(wd),Dr=a(wd,"SPAN",{});var x_=d(Dr);Pi=n(x_,"RagRetriever"),x_.forEach(t),wd.forEach(t),ed=h(r),Z=a(r,"DIV",{class:!0});var ue=d(Z);w(ao.$$.fragment,ue),Oi=h(ue),Ir=a(ue,"P",{});var R_=d(Ir);Ci=n(R_,`Retriever used to get documents from vector queries. It retrieves the documents embeddings as well as the documents
contents, and it formats them to be used with a RagModel.`),R_.forEach(t),Li=h(ue),w(rt.$$.fragment,ue),Si=h(ue),st=a(ue,"DIV",{class:!0});var yd=d(st);w(io.$$.fragment,yd),Di=h(yd),Ur=a(yd,"P",{});var F_=d(Ur);Ii=n(F_,"Retriever initialization function. It loads the index into memory."),F_.forEach(t),yd.forEach(t),Ui=h(ue),at=a(ue,"DIV",{class:!0});var kd=d(at);w(co.$$.fragment,kd),Wi=h(kd),ze=a(kd,"P",{});var _r=d(ze);Hi=n(_r,"Postprocessing retrieved "),Wr=a(_r,"CODE",{});var $_=d(Wr);Bi=n($_,"docs"),$_.forEach(t),Qi=n(_r," and combining them with "),Hr=a(_r,"CODE",{});var z_=d(Hr);Ki=n(z_,"input_strings"),z_.forEach(t),Vi=n(_r,"."),_r.forEach(t),kd.forEach(t),Yi=h(ue),dt=a(ue,"DIV",{class:!0});var qd=d(dt);w(lo.$$.fragment,qd),Ji=h(qd),po=a(qd,"P",{});var xd=d(po);Xi=n(xd,"Retrieves documents for specified "),Br=a(xd,"CODE",{});var E_=d(Br);Zi=n(E_,"question_hidden_states"),E_.forEach(t),ec=n(xd,"."),xd.forEach(t),qd.forEach(t),ue.forEach(t),td=h(r),Ee=a(r,"H2",{class:!0});var Rd=d(Ee);it=a(Rd,"A",{id:!0,class:!0,href:!0});var j_=d(it);Qr=a(j_,"SPAN",{});var G_=d(Qr);w(ho.$$.fragment,G_),G_.forEach(t),j_.forEach(t),tc=h(Rd),Kr=a(Rd,"SPAN",{});var M_=d(Kr);oc=n(M_,"RagModel"),M_.forEach(t),Rd.forEach(t),od=h(r),L=a(r,"DIV",{class:!0});var X=d(L);w(mo.$$.fragment,X),nc=h(X),je=a(X,"P",{});var fr=d(je);rc=n(fr,"The "),fn=a(fr,"A",{href:!0});var A_=d(fn);sc=n(A_,"RagModel"),A_.forEach(t),ac=n(fr," forward method, overrides the "),Vr=a(fr,"CODE",{});var N_=d(Vr);dc=n(N_,"__call__"),N_.forEach(t),ic=n(fr," special method."),fr.forEach(t),cc=h(X),w(ct.$$.fragment,X),lc=h(X),Yr=a(X,"P",{});var P_=d(Yr);pc=n(P_,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),P_.forEach(t),hc=h(X),te=a(X,"P",{});var fe=d(te);mc=n(fe,"The question encoder can be any "),Jr=a(fe,"EM",{});var O_=d(Jr);uc=n(O_,"autoencoding"),O_.forEach(t),gc=n(fe," model, preferably "),vn=a(fe,"A",{href:!0});var C_=d(vn);_c=n(C_,"DPRQuestionEncoder"),C_.forEach(t),fc=n(fe,`, and the generator can be
any `),Xr=a(fe,"EM",{});var L_=d(Xr);vc=n(L_,"seq2seq"),L_.forEach(t),bc=n(fe," model, preferably "),bn=a(fe,"A",{href:!0});var S_=d(bn);Tc=n(S_,"BartForConditionalGeneration"),S_.forEach(t),wc=n(fe,"."),fe.forEach(t),yc=h(X),M=a(X,"P",{});var U=d(M);kc=n(U,"The model can be initialized with a "),Tn=a(U,"A",{href:!0});var D_=d(Tn);qc=n(D_,"RagRetriever"),D_.forEach(t),xc=n(U,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Zr=a(U,"EM",{});var I_=d(Zr);Rc=n(I_,"autoencoding"),I_.forEach(t),Fc=n(U," model as the "),es=a(U,"CODE",{});var U_=d(es);$c=n(U_,"question_encoder"),U_.forEach(t),zc=n(U," and any "),ts=a(U,"EM",{});var W_=d(ts);Ec=n(W_,"seq2seq"),W_.forEach(t),jc=n(U," model with language model head as the "),os=a(U,"CODE",{});var H_=d(os);Gc=n(H_,"generator"),H_.forEach(t),Mc=n(U,`.
It has been tested with `),wn=a(U,"A",{href:!0});var B_=d(wn);Ac=n(B_,"DPRQuestionEncoder"),B_.forEach(t),Nc=n(U," as the "),ns=a(U,"CODE",{});var Q_=d(ns);Pc=n(Q_,"question_encoder"),Q_.forEach(t),Oc=n(U," and "),yn=a(U,"A",{href:!0});var K_=d(yn);Cc=n(K_,"BartForConditionalGeneration"),K_.forEach(t),Lc=n(U,` or
`),kn=a(U,"A",{href:!0});var V_=d(kn);Sc=n(V_,"T5ForConditionalGeneration"),V_.forEach(t),Dc=n(U," as the "),rs=a(U,"CODE",{});var Y_=d(rs);Ic=n(Y_,"generator"),Y_.forEach(t),Uc=n(U,"."),U.forEach(t),Wc=h(X),uo=a(X,"P",{});var Fd=d(uo);Hc=n(Fd,"This model inherits from "),qn=a(Fd,"A",{href:!0});var J_=d(qn);Bc=n(J_,"PreTrainedModel"),J_.forEach(t),Qc=n(Fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd.forEach(t),Kc=h(X),go=a(X,"P",{});var $d=d(go);Vc=n($d,"This model is also a PyTorch "),_o=a($d,"A",{href:!0,rel:!0});var X_=d(_o);Yc=n(X_,"torch.nn.Module"),X_.forEach(t),Jc=n($d,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$d.forEach(t),Xc=h(X),ie=a(X,"DIV",{class:!0});var Ot=d(ie);w(fo.$$.fragment,Ot),Zc=h(Ot),Ge=a(Ot,"P",{});var vr=d(Ge);el=n(vr,"The "),xn=a(vr,"A",{href:!0});var Z_=d(xn);tl=n(Z_,"RagModel"),Z_.forEach(t),ol=n(vr," forward method, overrides the "),ss=a(vr,"CODE",{});var ef=d(ss);nl=n(ef,"__call__"),ef.forEach(t),rl=n(vr," special method."),vr.forEach(t),sl=h(Ot),w(lt.$$.fragment,Ot),al=h(Ot),w(pt.$$.fragment,Ot),Ot.forEach(t),X.forEach(t),nd=h(r),Me=a(r,"H2",{class:!0});var zd=d(Me);ht=a(zd,"A",{id:!0,class:!0,href:!0});var tf=d(ht);as=a(tf,"SPAN",{});var of=d(as);w(vo.$$.fragment,of),of.forEach(t),tf.forEach(t),dl=h(zd),ds=a(zd,"SPAN",{});var nf=d(ds);il=n(nf,"RagSequenceForGeneration"),nf.forEach(t),zd.forEach(t),rd=h(r),E=a(r,"DIV",{class:!0});var W=d(E);w(bo.$$.fragment,W),cl=h(W),Ae=a(W,"P",{});var br=d(Ae);ll=n(br,"The "),Rn=a(br,"A",{href:!0});var rf=d(Rn);pl=n(rf,"RagSequenceForGeneration"),rf.forEach(t),hl=n(br," forward method, overrides the "),is=a(br,"CODE",{});var sf=d(is);ml=n(sf,"__call__"),sf.forEach(t),ul=n(br," special method."),br.forEach(t),gl=h(W),w(mt.$$.fragment,W),_l=h(W),cs=a(W,"P",{});var af=d(cs);fl=n(af,"A RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),af.forEach(t),vl=h(W),ls=a(W,"P",{});var df=d(ls);bl=n(df,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),df.forEach(t),Tl=h(W),oe=a(W,"P",{});var ve=d(oe);wl=n(ve,"The question encoder can be any "),ps=a(ve,"EM",{});var cf=d(ps);yl=n(cf,"autoencoding"),cf.forEach(t),kl=n(ve," model, preferably "),Fn=a(ve,"A",{href:!0});var lf=d(Fn);ql=n(lf,"DPRQuestionEncoder"),lf.forEach(t),xl=n(ve,`, and the generator can be
any `),hs=a(ve,"EM",{});var pf=d(hs);Rl=n(pf,"seq2seq"),pf.forEach(t),Fl=n(ve," model, preferably "),$n=a(ve,"A",{href:!0});var hf=d($n);$l=n(hf,"BartForConditionalGeneration"),hf.forEach(t),zl=n(ve,"."),ve.forEach(t),El=h(W),A=a(W,"P",{});var H=d(A);jl=n(H,"The model can be initialized with a "),zn=a(H,"A",{href:!0});var mf=d(zn);Gl=n(mf,"RagRetriever"),mf.forEach(t),Ml=n(H,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),ms=a(H,"EM",{});var uf=d(ms);Al=n(uf,"autoencoding"),uf.forEach(t),Nl=n(H," model as the "),us=a(H,"CODE",{});var gf=d(us);Pl=n(gf,"question_encoder"),gf.forEach(t),Ol=n(H," and any "),gs=a(H,"EM",{});var _f=d(gs);Cl=n(_f,"seq2seq"),_f.forEach(t),Ll=n(H," model with language model head as the "),_s=a(H,"CODE",{});var ff=d(_s);Sl=n(ff,"generator"),ff.forEach(t),Dl=n(H,`.
It has been tested with `),En=a(H,"A",{href:!0});var vf=d(En);Il=n(vf,"DPRQuestionEncoder"),vf.forEach(t),Ul=n(H," as the "),fs=a(H,"CODE",{});var bf=d(fs);Wl=n(bf,"question_encoder"),bf.forEach(t),Hl=n(H," and "),jn=a(H,"A",{href:!0});var Tf=d(jn);Bl=n(Tf,"BartForConditionalGeneration"),Tf.forEach(t),Ql=n(H,` or
`),Gn=a(H,"A",{href:!0});var wf=d(Gn);Kl=n(wf,"T5ForConditionalGeneration"),wf.forEach(t),Vl=n(H," as the "),vs=a(H,"CODE",{});var yf=d(vs);Yl=n(yf,"generator"),yf.forEach(t),Jl=n(H,"."),H.forEach(t),Xl=h(W),To=a(W,"P",{});var Ed=d(To);Zl=n(Ed,"This model inherits from "),Mn=a(Ed,"A",{href:!0});var kf=d(Mn);ep=n(kf,"PreTrainedModel"),kf.forEach(t),tp=n(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),op=h(W),wo=a(W,"P",{});var jd=d(wo);np=n(jd,"This model is also a PyTorch "),yo=a(jd,"A",{href:!0,rel:!0});var qf=d(yo);rp=n(qf,"torch.nn.Module"),qf.forEach(t),sp=n(jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd.forEach(t),ap=h(W),ce=a(W,"DIV",{class:!0});var Ct=d(ce);w(ko.$$.fragment,Ct),dp=h(Ct),Ne=a(Ct,"P",{});var Tr=d(Ne);ip=n(Tr,"The "),An=a(Tr,"A",{href:!0});var xf=d(An);cp=n(xf,"RagSequenceForGeneration"),xf.forEach(t),lp=n(Tr," forward method, overrides the "),bs=a(Tr,"CODE",{});var Rf=d(bs);pp=n(Rf,"__call__"),Rf.forEach(t),hp=n(Tr," special method."),Tr.forEach(t),mp=h(Ct),w(ut.$$.fragment,Ct),up=h(Ct),w(gt.$$.fragment,Ct),Ct.forEach(t),gp=h(W),_t=a(W,"DIV",{class:!0});var Gd=d(_t);w(qo.$$.fragment,Gd),_p=h(Gd),xo=a(Gd,"P",{});var Md=d(xo);fp=n(Md,"Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),Nn=a(Md,"A",{href:!0});var Ff=d(Nn);vp=n(Ff,"generate()"),Ff.forEach(t),bp=n(Md,"`\ndocumentation for more information on how to set other generate input parameters."),Md.forEach(t),Gd.forEach(t),W.forEach(t),sd=h(r),Pe=a(r,"H2",{class:!0});var Ad=d(Pe);ft=a(Ad,"A",{id:!0,class:!0,href:!0});var $f=d(ft);Ts=a($f,"SPAN",{});var zf=d(Ts);w(Ro.$$.fragment,zf),zf.forEach(t),$f.forEach(t),Tp=h(Ad),ws=a(Ad,"SPAN",{});var Ef=d(ws);wp=n(Ef,"RagTokenForGeneration"),Ef.forEach(t),Ad.forEach(t),ad=h(r),j=a(r,"DIV",{class:!0});var B=d(j);w(Fo.$$.fragment,B),yp=h(B),Oe=a(B,"P",{});var wr=d(Oe);kp=n(wr,"The "),Pn=a(wr,"A",{href:!0});var jf=d(Pn);qp=n(jf,"RagTokenForGeneration"),jf.forEach(t),xp=n(wr," forward method, overrides the "),ys=a(wr,"CODE",{});var Gf=d(ys);Rp=n(Gf,"__call__"),Gf.forEach(t),Fp=n(wr," special method."),wr.forEach(t),$p=h(B),w(vt.$$.fragment,B),zp=h(B),ks=a(B,"P",{});var Mf=d(ks);Ep=n(Mf,"A RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),Mf.forEach(t),jp=h(B),qs=a(B,"P",{});var Af=d(qs);Gp=n(Af,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Af.forEach(t),Mp=h(B),ne=a(B,"P",{});var be=d(ne);Ap=n(be,"The question encoder can be any "),xs=a(be,"EM",{});var Nf=d(xs);Np=n(Nf,"autoencoding"),Nf.forEach(t),Pp=n(be," model, preferably "),On=a(be,"A",{href:!0});var Pf=d(On);Op=n(Pf,"DPRQuestionEncoder"),Pf.forEach(t),Cp=n(be,`, and the generator can be
any `),Rs=a(be,"EM",{});var Of=d(Rs);Lp=n(Of,"seq2seq"),Of.forEach(t),Sp=n(be," model, preferably "),Cn=a(be,"A",{href:!0});var Cf=d(Cn);Dp=n(Cf,"BartForConditionalGeneration"),Cf.forEach(t),Ip=n(be,"."),be.forEach(t),Up=h(B),N=a(B,"P",{});var Q=d(N);Wp=n(Q,"The model can be initialized with a "),Ln=a(Q,"A",{href:!0});var Lf=d(Ln);Hp=n(Lf,"RagRetriever"),Lf.forEach(t),Bp=n(Q,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Fs=a(Q,"EM",{});var Sf=d(Fs);Qp=n(Sf,"autoencoding"),Sf.forEach(t),Kp=n(Q," model as the "),$s=a(Q,"CODE",{});var Df=d($s);Vp=n(Df,"question_encoder"),Df.forEach(t),Yp=n(Q," and any "),zs=a(Q,"EM",{});var If=d(zs);Jp=n(If,"seq2seq"),If.forEach(t),Xp=n(Q," model with language model head as the "),Es=a(Q,"CODE",{});var Uf=d(Es);Zp=n(Uf,"generator"),Uf.forEach(t),eh=n(Q,`.
It has been tested with `),Sn=a(Q,"A",{href:!0});var Wf=d(Sn);th=n(Wf,"DPRQuestionEncoder"),Wf.forEach(t),oh=n(Q," as the "),js=a(Q,"CODE",{});var Hf=d(js);nh=n(Hf,"question_encoder"),Hf.forEach(t),rh=n(Q," and "),Dn=a(Q,"A",{href:!0});var Bf=d(Dn);sh=n(Bf,"BartForConditionalGeneration"),Bf.forEach(t),ah=n(Q,` or
`),In=a(Q,"A",{href:!0});var Qf=d(In);dh=n(Qf,"T5ForConditionalGeneration"),Qf.forEach(t),ih=n(Q," as the "),Gs=a(Q,"CODE",{});var Kf=d(Gs);ch=n(Kf,"generator"),Kf.forEach(t),lh=n(Q,"."),Q.forEach(t),ph=h(B),$o=a(B,"P",{});var Nd=d($o);hh=n(Nd,"This model inherits from "),Un=a(Nd,"A",{href:!0});var Vf=d(Un);mh=n(Vf,"PreTrainedModel"),Vf.forEach(t),uh=n(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),gh=h(B),zo=a(B,"P",{});var Pd=d(zo);_h=n(Pd,"This model is also a PyTorch "),Eo=a(Pd,"A",{href:!0,rel:!0});var Yf=d(Eo);fh=n(Yf,"torch.nn.Module"),Yf.forEach(t),vh=n(Pd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pd.forEach(t),bh=h(B),le=a(B,"DIV",{class:!0});var Lt=d(le);w(jo.$$.fragment,Lt),Th=h(Lt),Ce=a(Lt,"P",{});var yr=d(Ce);wh=n(yr,"The "),Wn=a(yr,"A",{href:!0});var Jf=d(Wn);yh=n(Jf,"RagTokenForGeneration"),Jf.forEach(t),kh=n(yr," forward method, overrides the "),Ms=a(yr,"CODE",{});var Xf=d(Ms);qh=n(Xf,"__call__"),Xf.forEach(t),xh=n(yr," special method."),yr.forEach(t),Rh=h(Lt),w(bt.$$.fragment,Lt),Fh=h(Lt),w(Tt.$$.fragment,Lt),Lt.forEach(t),$h=h(B),wt=a(B,"DIV",{class:!0});var Od=d(wt);w(Go.$$.fragment,Od),zh=h(Od),As=a(Od,"P",{});var Zf=d(As);Eh=n(Zf,"Implements RAG token decoding."),Zf.forEach(t),Od.forEach(t),B.forEach(t),dd=h(r),Le=a(r,"H2",{class:!0});var Cd=d(Le);yt=a(Cd,"A",{id:!0,class:!0,href:!0});var ev=d(yt);Ns=a(ev,"SPAN",{});var tv=d(Ns);w(Mo.$$.fragment,tv),tv.forEach(t),ev.forEach(t),jh=h(Cd),Ps=a(Cd,"SPAN",{});var ov=d(Ps);Gh=n(ov,"TFRagModel"),ov.forEach(t),Cd.forEach(t),id=h(r),P=a(r,"DIV",{class:!0});var K=d(P);w(Ao.$$.fragment,K),Mh=h(K),Se=a(K,"P",{});var kr=d(Se);Ah=n(kr,"The "),Hn=a(kr,"A",{href:!0});var nv=d(Hn);Nh=n(nv,"TFRagModel"),nv.forEach(t),Ph=n(kr," forward method, overrides the "),Os=a(kr,"CODE",{});var rv=d(Os);Oh=n(rv,"__call__"),rv.forEach(t),Ch=n(kr," special method."),kr.forEach(t),Lh=h(K),w(kt.$$.fragment,K),Sh=h(K),Cs=a(K,"P",{});var sv=d(Cs);Dh=n(sv,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),sv.forEach(t),Ih=h(K),re=a(K,"P",{});var Te=d(re);Uh=n(Te,"The question encoder can be any "),Ls=a(Te,"EM",{});var av=d(Ls);Wh=n(av,"autoencoding"),av.forEach(t),Hh=n(Te," model, preferably "),Bn=a(Te,"A",{href:!0});var dv=d(Bn);Bh=n(dv,"TFDPRQuestionEncoder"),dv.forEach(t),Qh=n(Te,`, and the generator can be
any `),Ss=a(Te,"EM",{});var iv=d(Ss);Kh=n(iv,"seq2seq"),iv.forEach(t),Vh=n(Te," model, preferably "),Qn=a(Te,"A",{href:!0});var cv=d(Qn);Yh=n(cv,"TFBartForConditionalGeneration"),cv.forEach(t),Jh=n(Te,"."),Te.forEach(t),Xh=h(K),S=a(K,"P",{});var V=d(S);Zh=n(V,"The model can be initialized with a "),Kn=a(V,"A",{href:!0});var lv=d(Kn);em=n(lv,"RagRetriever"),lv.forEach(t),tm=n(V,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Ds=a(V,"EM",{});var pv=d(Ds);om=n(pv,"autoencoding"),pv.forEach(t),nm=n(V," model as the "),Is=a(V,"CODE",{});var hv=d(Is);rm=n(hv,"question_encoder"),hv.forEach(t),sm=n(V," and any "),Us=a(V,"EM",{});var mv=d(Us);am=n(mv,"seq2seq"),mv.forEach(t),dm=n(V," model with language model head as the "),Ws=a(V,"CODE",{});var uv=d(Ws);im=n(uv,"generator"),uv.forEach(t),cm=n(V,`.
It has been tested with `),Vn=a(V,"A",{href:!0});var gv=d(Vn);lm=n(gv,"TFDPRQuestionEncoder"),gv.forEach(t),pm=n(V," as the "),Hs=a(V,"CODE",{});var _v=d(Hs);hm=n(_v,"question_encoder"),_v.forEach(t),mm=n(V," and "),Yn=a(V,"A",{href:!0});var fv=d(Yn);um=n(fv,"TFBartForConditionalGeneration"),fv.forEach(t),gm=n(V,`
as the `),Bs=a(V,"CODE",{});var vv=d(Bs);_m=n(vv,"generator"),vv.forEach(t),fm=n(V,"."),V.forEach(t),vm=h(K),No=a(K,"P",{});var Ld=d(No);bm=n(Ld,"This model inherits from "),Jn=a(Ld,"A",{href:!0});var bv=d(Jn);Tm=n(bv,"TFPreTrainedModel"),bv.forEach(t),wm=n(Ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld.forEach(t),ym=h(K),Po=a(K,"P",{});var Sd=d(Po);km=n(Sd,"This model is also a Tensorflow "),Oo=a(Sd,"A",{href:!0,rel:!0});var Tv=d(Oo);qm=n(Tv,"tf.keras.Model"),Tv.forEach(t),xm=n(Sd,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Sd.forEach(t),Rm=h(K),Qs=a(K,"P",{});var wv=d(Qs);Fm=n(wv,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),wv.forEach(t),$m=h(K),pe=a(K,"DIV",{class:!0});var St=d(pe);w(Co.$$.fragment,St),zm=h(St),De=a(St,"P",{});var qr=d(De);Em=n(qr,"The "),Xn=a(qr,"A",{href:!0});var yv=d(Xn);jm=n(yv,"TFRagModel"),yv.forEach(t),Gm=n(qr," forward method, overrides the "),Ks=a(qr,"CODE",{});var kv=d(Ks);Mm=n(kv,"__call__"),kv.forEach(t),Am=n(qr," special method."),qr.forEach(t),Nm=h(St),w(qt.$$.fragment,St),Pm=h(St),w(xt.$$.fragment,St),St.forEach(t),K.forEach(t),cd=h(r),Ie=a(r,"H2",{class:!0});var Dd=d(Ie);Rt=a(Dd,"A",{id:!0,class:!0,href:!0});var qv=d(Rt);Vs=a(qv,"SPAN",{});var xv=d(Vs);w(Lo.$$.fragment,xv),xv.forEach(t),qv.forEach(t),Om=h(Dd),Ys=a(Dd,"SPAN",{});var Rv=d(Ys);Cm=n(Rv,"TFRagSequenceForGeneration"),Rv.forEach(t),Dd.forEach(t),ld=h(r),$=a(r,"DIV",{class:!0});var O=d($);w(So.$$.fragment,O),Lm=h(O),Ue=a(O,"P",{});var xr=d(Ue);Sm=n(xr,"The "),Zn=a(xr,"A",{href:!0});var Fv=d(Zn);Dm=n(Fv,"TFRagSequenceForGeneration"),Fv.forEach(t),Im=n(xr," forward method, overrides the "),Js=a(xr,"CODE",{});var $v=d(Js);Um=n($v,"__call__"),$v.forEach(t),Wm=n(xr," special method."),xr.forEach(t),Hm=h(O),w(Ft.$$.fragment,O),Bm=h(O),Xs=a(O,"P",{});var zv=d(Xs);Qm=n(zv,"A TF RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),zv.forEach(t),Km=h(O),Zs=a(O,"P",{});var Ev=d(Zs);Vm=n(Ev,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Ev.forEach(t),Ym=h(O),se=a(O,"P",{});var we=d(se);Jm=n(we,"The question encoder can be any "),ea=a(we,"EM",{});var jv=d(ea);Xm=n(jv,"autoencoding"),jv.forEach(t),Zm=n(we," model, preferably "),er=a(we,"A",{href:!0});var Gv=d(er);eu=n(Gv,"TFDPRQuestionEncoder"),Gv.forEach(t),tu=n(we,`, and the generator can be
any `),ta=a(we,"EM",{});var Mv=d(ta);ou=n(Mv,"seq2seq"),Mv.forEach(t),nu=n(we," model, preferably "),tr=a(we,"A",{href:!0});var Av=d(tr);ru=n(Av,"TFBartForConditionalGeneration"),Av.forEach(t),su=n(we,"."),we.forEach(t),au=h(O),D=a(O,"P",{});var Y=d(D);du=n(Y,"The model can be initialized with a "),or=a(Y,"A",{href:!0});var Nv=d(or);iu=n(Nv,"RagRetriever"),Nv.forEach(t),cu=n(Y,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),oa=a(Y,"EM",{});var Pv=d(oa);lu=n(Pv,"autoencoding"),Pv.forEach(t),pu=n(Y," model as the "),na=a(Y,"CODE",{});var Ov=d(na);hu=n(Ov,"question_encoder"),Ov.forEach(t),mu=n(Y," and any "),ra=a(Y,"EM",{});var Cv=d(ra);uu=n(Cv,"seq2seq"),Cv.forEach(t),gu=n(Y," model with language model head as the "),sa=a(Y,"CODE",{});var Lv=d(sa);_u=n(Lv,"generator"),Lv.forEach(t),fu=n(Y,`.
It has been tested with `),nr=a(Y,"A",{href:!0});var Sv=d(nr);vu=n(Sv,"TFDPRQuestionEncoder"),Sv.forEach(t),bu=n(Y," as the "),aa=a(Y,"CODE",{});var Dv=d(aa);Tu=n(Dv,"question_encoder"),Dv.forEach(t),wu=n(Y," and "),rr=a(Y,"A",{href:!0});var Iv=d(rr);yu=n(Iv,"TFBartForConditionalGeneration"),Iv.forEach(t),ku=n(Y,`
as the `),da=a(Y,"CODE",{});var Uv=d(da);qu=n(Uv,"generator"),Uv.forEach(t),xu=n(Y,"."),Y.forEach(t),Ru=h(O),Do=a(O,"P",{});var Id=d(Do);Fu=n(Id,"This model inherits from "),sr=a(Id,"A",{href:!0});var Wv=d(sr);$u=n(Wv,"TFPreTrainedModel"),Wv.forEach(t),zu=n(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Eu=h(O),Io=a(O,"P",{});var Ud=d(Io);ju=n(Ud,"This model is also a Tensorflow "),Uo=a(Ud,"A",{href:!0,rel:!0});var Hv=d(Uo);Gu=n(Hv,"tf.keras.Model"),Hv.forEach(t),Mu=n(Ud,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Ud.forEach(t),Au=h(O),ia=a(O,"P",{});var Bv=d(ia);Nu=n(Bv,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Bv.forEach(t),Pu=h(O),he=a(O,"DIV",{class:!0});var Dt=d(he);w(Wo.$$.fragment,Dt),Ou=h(Dt),We=a(Dt,"P",{});var Rr=d(We);Cu=n(Rr,"The "),ar=a(Rr,"A",{href:!0});var Qv=d(ar);Lu=n(Qv,"TFRagSequenceForGeneration"),Qv.forEach(t),Su=n(Rr," forward method, overrides the "),ca=a(Rr,"CODE",{});var Kv=d(ca);Du=n(Kv,"__call__"),Kv.forEach(t),Iu=n(Rr," special method."),Rr.forEach(t),Uu=h(Dt),w($t.$$.fragment,Dt),Wu=h(Dt),w(zt.$$.fragment,Dt),Dt.forEach(t),Hu=h(O),Et=a(O,"DIV",{class:!0});var Wd=d(Et);w(Ho.$$.fragment,Wd),Bu=h(Wd),Bo=a(Wd,"P",{});var Hd=d(Bo);Qu=n(Hd,"Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),dr=a(Hd,"A",{href:!0});var Vv=d(dr);Ku=n(Vv,"generate()"),Vv.forEach(t),Vu=n(Hd,"`\ndocumentation for more information on how to set other generate input parameters"),Hd.forEach(t),Wd.forEach(t),O.forEach(t),pd=h(r),He=a(r,"H2",{class:!0});var Bd=d(He);jt=a(Bd,"A",{id:!0,class:!0,href:!0});var Yv=d(jt);la=a(Yv,"SPAN",{});var Jv=d(la);w(Qo.$$.fragment,Jv),Jv.forEach(t),Yv.forEach(t),Yu=h(Bd),pa=a(Bd,"SPAN",{});var Xv=d(pa);Ju=n(Xv,"TFRagTokenForGeneration"),Xv.forEach(t),Bd.forEach(t),hd=h(r),z=a(r,"DIV",{class:!0});var C=d(z);w(Ko.$$.fragment,C),Xu=h(C),Be=a(C,"P",{});var Fr=d(Be);Zu=n(Fr,"The "),ir=a(Fr,"A",{href:!0});var Zv=d(ir);eg=n(Zv,"TFRagTokenForGeneration"),Zv.forEach(t),tg=n(Fr," forward method, overrides the "),ha=a(Fr,"CODE",{});var eb=d(ha);og=n(eb,"__call__"),eb.forEach(t),ng=n(Fr," special method."),Fr.forEach(t),rg=h(C),w(Gt.$$.fragment,C),sg=h(C),ma=a(C,"P",{});var tb=d(ma);ag=n(tb,"A TF RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),tb.forEach(t),dg=h(C),ua=a(C,"P",{});var ob=d(ua);ig=n(ob,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),ob.forEach(t),cg=h(C),ae=a(C,"P",{});var ye=d(ae);lg=n(ye,"The question encoder can be any "),ga=a(ye,"EM",{});var nb=d(ga);pg=n(nb,"autoencoding"),nb.forEach(t),hg=n(ye," model, preferably "),cr=a(ye,"A",{href:!0});var rb=d(cr);mg=n(rb,"TFDPRQuestionEncoder"),rb.forEach(t),ug=n(ye,`, and the generator can be
any `),_a=a(ye,"EM",{});var sb=d(_a);gg=n(sb,"seq2seq"),sb.forEach(t),_g=n(ye," model, preferably "),lr=a(ye,"A",{href:!0});var ab=d(lr);fg=n(ab,"TFBartForConditionalGeneration"),ab.forEach(t),vg=n(ye,"."),ye.forEach(t),bg=h(C),I=a(C,"P",{});var J=d(I);Tg=n(J,"The model can be initialized with a "),pr=a(J,"A",{href:!0});var db=d(pr);wg=n(db,"RagRetriever"),db.forEach(t),yg=n(J,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),fa=a(J,"EM",{});var ib=d(fa);kg=n(ib,"autoencoding"),ib.forEach(t),qg=n(J," model as the "),va=a(J,"CODE",{});var cb=d(va);xg=n(cb,"question_encoder"),cb.forEach(t),Rg=n(J," and any "),ba=a(J,"EM",{});var lb=d(ba);Fg=n(lb,"seq2seq"),lb.forEach(t),$g=n(J," model with language model head as the "),Ta=a(J,"CODE",{});var pb=d(Ta);zg=n(pb,"generator"),pb.forEach(t),Eg=n(J,`.
It has been tested with `),hr=a(J,"A",{href:!0});var hb=d(hr);jg=n(hb,"TFDPRQuestionEncoder"),hb.forEach(t),Gg=n(J," as the "),wa=a(J,"CODE",{});var mb=d(wa);Mg=n(mb,"question_encoder"),mb.forEach(t),Ag=n(J," and "),mr=a(J,"A",{href:!0});var ub=d(mr);Ng=n(ub,"TFBartForConditionalGeneration"),ub.forEach(t),Pg=n(J,`
as the `),ya=a(J,"CODE",{});var gb=d(ya);Og=n(gb,"generator"),gb.forEach(t),Cg=n(J,"."),J.forEach(t),Lg=h(C),Vo=a(C,"P",{});var Qd=d(Vo);Sg=n(Qd,"This model inherits from "),ur=a(Qd,"A",{href:!0});var _b=d(ur);Dg=n(_b,"TFPreTrainedModel"),_b.forEach(t),Ig=n(Qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd.forEach(t),Ug=h(C),Yo=a(C,"P",{});var Kd=d(Yo);Wg=n(Kd,"This model is also a Tensorflow "),Jo=a(Kd,"A",{href:!0,rel:!0});var fb=d(Jo);Hg=n(fb,"tf.keras.Model"),fb.forEach(t),Bg=n(Kd,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Kd.forEach(t),Qg=h(C),ka=a(C,"P",{});var vb=d(ka);Kg=n(vb,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),vb.forEach(t),Vg=h(C),me=a(C,"DIV",{class:!0});var It=d(me);w(Xo.$$.fragment,It),Yg=h(It),Qe=a(It,"P",{});var $r=d(Qe);Jg=n($r,"The "),gr=a($r,"A",{href:!0});var bb=d(gr);Xg=n(bb,"TFRagTokenForGeneration"),bb.forEach(t),Zg=n($r," forward method, overrides the "),qa=a($r,"CODE",{});var Tb=d(qa);e_=n(Tb,"__call__"),Tb.forEach(t),t_=n($r," special method."),$r.forEach(t),o_=h(It),w(Mt.$$.fragment,It),n_=h(It),w(At.$$.fragment,It),It.forEach(t),r_=h(C),Nt=a(C,"DIV",{class:!0});var Vd=d(Nt);w(Zo.$$.fragment,Vd),s_=h(Vd),xa=a(Vd,"P",{});var wb=d(xa);a_=n(wb,"Implements TFRAG token decoding."),wb.forEach(t),Vd.forEach(t),C.forEach(t),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(Qb)),l(g,"id","rag"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#rag"),l(u,"class","relative group"),l(Ve,"id","overview"),l(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ve,"href","#overview"),l(ke,"class","relative group"),l(Wt,"href","https://arxiv.org/abs/2005.11401"),l(Wt,"rel","nofollow"),l(Ht,"href","https://huggingface.co/ola13"),l(Ht,"rel","nofollow"),l(Xe,"id","transformers.RagConfig"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.RagConfig"),l(qe,"class","relative group"),l(hn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"),l(mn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(un,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(gn,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_n,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(tt,"id","transformers.RagTokenizer"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.RagTokenizer"),l(xe,"class","relative group"),l(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"),l(Re,"class","relative group"),l(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(nt,"id","transformers.RagRetriever"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.RagRetriever"),l($e,"class","relative group"),l(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(it,"id","transformers.RagModel"),l(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(it,"href","#transformers.RagModel"),l(Ee,"class","relative group"),l(fn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagModel"),l(vn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(bn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Tn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(wn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(yn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(kn,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(qn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(_o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(_o,"rel","nofollow"),l(xn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagModel"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"id","transformers.RagSequenceForGeneration"),l(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ht,"href","#transformers.RagSequenceForGeneration"),l(Me,"class","relative group"),l(Rn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagSequenceForGeneration"),l(Fn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l($n,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(zn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(En,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(jn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Gn,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(Mn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(yo,"rel","nofollow"),l(An,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagSequenceForGeneration"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Nn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ft,"id","transformers.RagTokenForGeneration"),l(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ft,"href","#transformers.RagTokenForGeneration"),l(Pe,"class","relative group"),l(Pn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration"),l(On,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(Cn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Ln,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(Sn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(Dn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(In,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(Un,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Eo,"rel","nofollow"),l(Wn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(yt,"id","transformers.TFRagModel"),l(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(yt,"href","#transformers.TFRagModel"),l(Le,"class","relative group"),l(Hn,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel"),l(Bn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(Qn,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(Kn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(Vn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(Yn,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(Jn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(Oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Oo,"rel","nofollow"),l(Xn,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Rt,"id","transformers.TFRagSequenceForGeneration"),l(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Rt,"href","#transformers.TFRagSequenceForGeneration"),l(Ie,"class","relative group"),l(Zn,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagSequenceForGeneration"),l(er,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(tr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(or,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(nr,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(rr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(sr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(Uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Uo,"rel","nofollow"),l(ar,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagSequenceForGeneration"),l(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(dr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(jt,"id","transformers.TFRagTokenForGeneration"),l(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(jt,"href","#transformers.TFRagTokenForGeneration"),l(He,"class","relative group"),l(ir,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagTokenForGeneration"),l(cr,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(lr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(pr,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(hr,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(mr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(Jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Jo,"rel","nofollow"),l(gr,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagTokenForGeneration"),l(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,_){e(document.head,c),v(r,b,_),v(r,u,_),e(u,g),e(g,f),y(i,f,null),e(u,m),e(u,R),e(R,Yd),v(r,Sa,_),v(r,ke,_),e(ke,Ve),e(Ve,zr),y(Ut,zr,null),e(ke,Jd),e(ke,Er),e(Er,Xd),v(r,Da,_),v(r,cn,_),e(cn,Zd),v(r,Ia,_),v(r,Ye,_),e(Ye,ei),e(Ye,Wt),e(Wt,ti),e(Ye,oi),v(r,Ua,_),v(r,ln,_),e(ln,ni),v(r,Wa,_),v(r,pn,_),e(pn,jr),e(jr,ri),v(r,Ha,_),v(r,Je,_),e(Je,si),e(Je,Ht),e(Ht,ai),e(Je,di),v(r,Ba,_),v(r,qe,_),e(qe,Xe),e(Xe,Gr),y(Bt,Gr,null),e(qe,ii),e(qe,Mr),e(Mr,ci),v(r,Qa,_),v(r,ee,_),y(Qt,ee,null),e(ee,li),e(ee,de),e(de,hn),e(hn,pi),e(de,hi),e(de,Ar),e(Ar,mi),e(de,ui),e(de,mn),e(mn,gi),e(de,_i),e(de,un),e(un,fi),e(de,vi),e(ee,bi),e(ee,Ze),y(Kt,Ze,null),e(Ze,Ti),e(Ze,Vt),e(Vt,wi),e(Vt,gn),e(gn,yi),e(Vt,ki),e(ee,qi),e(ee,et),y(Yt,et,null),e(et,xi),e(et,Jt),e(Jt,Ri),e(Jt,_n),e(_n,Fi),e(Jt,$i),v(r,Ka,_),v(r,xe,_),e(xe,tt),e(tt,Nr),y(Xt,Nr,null),e(xe,zi),e(xe,Pr),e(Pr,Ei),v(r,Va,_),v(r,Zt,_),y(eo,Zt,null),v(r,Ya,_),v(r,Re,_),e(Re,ot),e(ot,Or),y(to,Or,null),e(Re,ji),e(Re,Cr),e(Cr,Gi),v(r,Ja,_),v(r,Fe,_),y(oo,Fe,null),e(Fe,Mi),e(Fe,Lr),e(Lr,Ai),v(r,Xa,_),v(r,no,_),y(ro,no,null),v(r,Za,_),v(r,$e,_),e($e,nt),e(nt,Sr),y(so,Sr,null),e($e,Ni),e($e,Dr),e(Dr,Pi),v(r,ed,_),v(r,Z,_),y(ao,Z,null),e(Z,Oi),e(Z,Ir),e(Ir,Ci),e(Z,Li),y(rt,Z,null),e(Z,Si),e(Z,st),y(io,st,null),e(st,Di),e(st,Ur),e(Ur,Ii),e(Z,Ui),e(Z,at),y(co,at,null),e(at,Wi),e(at,ze),e(ze,Hi),e(ze,Wr),e(Wr,Bi),e(ze,Qi),e(ze,Hr),e(Hr,Ki),e(ze,Vi),e(Z,Yi),e(Z,dt),y(lo,dt,null),e(dt,Ji),e(dt,po),e(po,Xi),e(po,Br),e(Br,Zi),e(po,ec),v(r,td,_),v(r,Ee,_),e(Ee,it),e(it,Qr),y(ho,Qr,null),e(Ee,tc),e(Ee,Kr),e(Kr,oc),v(r,od,_),v(r,L,_),y(mo,L,null),e(L,nc),e(L,je),e(je,rc),e(je,fn),e(fn,sc),e(je,ac),e(je,Vr),e(Vr,dc),e(je,ic),e(L,cc),y(ct,L,null),e(L,lc),e(L,Yr),e(Yr,pc),e(L,hc),e(L,te),e(te,mc),e(te,Jr),e(Jr,uc),e(te,gc),e(te,vn),e(vn,_c),e(te,fc),e(te,Xr),e(Xr,vc),e(te,bc),e(te,bn),e(bn,Tc),e(te,wc),e(L,yc),e(L,M),e(M,kc),e(M,Tn),e(Tn,qc),e(M,xc),e(M,Zr),e(Zr,Rc),e(M,Fc),e(M,es),e(es,$c),e(M,zc),e(M,ts),e(ts,Ec),e(M,jc),e(M,os),e(os,Gc),e(M,Mc),e(M,wn),e(wn,Ac),e(M,Nc),e(M,ns),e(ns,Pc),e(M,Oc),e(M,yn),e(yn,Cc),e(M,Lc),e(M,kn),e(kn,Sc),e(M,Dc),e(M,rs),e(rs,Ic),e(M,Uc),e(L,Wc),e(L,uo),e(uo,Hc),e(uo,qn),e(qn,Bc),e(uo,Qc),e(L,Kc),e(L,go),e(go,Vc),e(go,_o),e(_o,Yc),e(go,Jc),e(L,Xc),e(L,ie),y(fo,ie,null),e(ie,Zc),e(ie,Ge),e(Ge,el),e(Ge,xn),e(xn,tl),e(Ge,ol),e(Ge,ss),e(ss,nl),e(Ge,rl),e(ie,sl),y(lt,ie,null),e(ie,al),y(pt,ie,null),v(r,nd,_),v(r,Me,_),e(Me,ht),e(ht,as),y(vo,as,null),e(Me,dl),e(Me,ds),e(ds,il),v(r,rd,_),v(r,E,_),y(bo,E,null),e(E,cl),e(E,Ae),e(Ae,ll),e(Ae,Rn),e(Rn,pl),e(Ae,hl),e(Ae,is),e(is,ml),e(Ae,ul),e(E,gl),y(mt,E,null),e(E,_l),e(E,cs),e(cs,fl),e(E,vl),e(E,ls),e(ls,bl),e(E,Tl),e(E,oe),e(oe,wl),e(oe,ps),e(ps,yl),e(oe,kl),e(oe,Fn),e(Fn,ql),e(oe,xl),e(oe,hs),e(hs,Rl),e(oe,Fl),e(oe,$n),e($n,$l),e(oe,zl),e(E,El),e(E,A),e(A,jl),e(A,zn),e(zn,Gl),e(A,Ml),e(A,ms),e(ms,Al),e(A,Nl),e(A,us),e(us,Pl),e(A,Ol),e(A,gs),e(gs,Cl),e(A,Ll),e(A,_s),e(_s,Sl),e(A,Dl),e(A,En),e(En,Il),e(A,Ul),e(A,fs),e(fs,Wl),e(A,Hl),e(A,jn),e(jn,Bl),e(A,Ql),e(A,Gn),e(Gn,Kl),e(A,Vl),e(A,vs),e(vs,Yl),e(A,Jl),e(E,Xl),e(E,To),e(To,Zl),e(To,Mn),e(Mn,ep),e(To,tp),e(E,op),e(E,wo),e(wo,np),e(wo,yo),e(yo,rp),e(wo,sp),e(E,ap),e(E,ce),y(ko,ce,null),e(ce,dp),e(ce,Ne),e(Ne,ip),e(Ne,An),e(An,cp),e(Ne,lp),e(Ne,bs),e(bs,pp),e(Ne,hp),e(ce,mp),y(ut,ce,null),e(ce,up),y(gt,ce,null),e(E,gp),e(E,_t),y(qo,_t,null),e(_t,_p),e(_t,xo),e(xo,fp),e(xo,Nn),e(Nn,vp),e(xo,bp),v(r,sd,_),v(r,Pe,_),e(Pe,ft),e(ft,Ts),y(Ro,Ts,null),e(Pe,Tp),e(Pe,ws),e(ws,wp),v(r,ad,_),v(r,j,_),y(Fo,j,null),e(j,yp),e(j,Oe),e(Oe,kp),e(Oe,Pn),e(Pn,qp),e(Oe,xp),e(Oe,ys),e(ys,Rp),e(Oe,Fp),e(j,$p),y(vt,j,null),e(j,zp),e(j,ks),e(ks,Ep),e(j,jp),e(j,qs),e(qs,Gp),e(j,Mp),e(j,ne),e(ne,Ap),e(ne,xs),e(xs,Np),e(ne,Pp),e(ne,On),e(On,Op),e(ne,Cp),e(ne,Rs),e(Rs,Lp),e(ne,Sp),e(ne,Cn),e(Cn,Dp),e(ne,Ip),e(j,Up),e(j,N),e(N,Wp),e(N,Ln),e(Ln,Hp),e(N,Bp),e(N,Fs),e(Fs,Qp),e(N,Kp),e(N,$s),e($s,Vp),e(N,Yp),e(N,zs),e(zs,Jp),e(N,Xp),e(N,Es),e(Es,Zp),e(N,eh),e(N,Sn),e(Sn,th),e(N,oh),e(N,js),e(js,nh),e(N,rh),e(N,Dn),e(Dn,sh),e(N,ah),e(N,In),e(In,dh),e(N,ih),e(N,Gs),e(Gs,ch),e(N,lh),e(j,ph),e(j,$o),e($o,hh),e($o,Un),e(Un,mh),e($o,uh),e(j,gh),e(j,zo),e(zo,_h),e(zo,Eo),e(Eo,fh),e(zo,vh),e(j,bh),e(j,le),y(jo,le,null),e(le,Th),e(le,Ce),e(Ce,wh),e(Ce,Wn),e(Wn,yh),e(Ce,kh),e(Ce,Ms),e(Ms,qh),e(Ce,xh),e(le,Rh),y(bt,le,null),e(le,Fh),y(Tt,le,null),e(j,$h),e(j,wt),y(Go,wt,null),e(wt,zh),e(wt,As),e(As,Eh),v(r,dd,_),v(r,Le,_),e(Le,yt),e(yt,Ns),y(Mo,Ns,null),e(Le,jh),e(Le,Ps),e(Ps,Gh),v(r,id,_),v(r,P,_),y(Ao,P,null),e(P,Mh),e(P,Se),e(Se,Ah),e(Se,Hn),e(Hn,Nh),e(Se,Ph),e(Se,Os),e(Os,Oh),e(Se,Ch),e(P,Lh),y(kt,P,null),e(P,Sh),e(P,Cs),e(Cs,Dh),e(P,Ih),e(P,re),e(re,Uh),e(re,Ls),e(Ls,Wh),e(re,Hh),e(re,Bn),e(Bn,Bh),e(re,Qh),e(re,Ss),e(Ss,Kh),e(re,Vh),e(re,Qn),e(Qn,Yh),e(re,Jh),e(P,Xh),e(P,S),e(S,Zh),e(S,Kn),e(Kn,em),e(S,tm),e(S,Ds),e(Ds,om),e(S,nm),e(S,Is),e(Is,rm),e(S,sm),e(S,Us),e(Us,am),e(S,dm),e(S,Ws),e(Ws,im),e(S,cm),e(S,Vn),e(Vn,lm),e(S,pm),e(S,Hs),e(Hs,hm),e(S,mm),e(S,Yn),e(Yn,um),e(S,gm),e(S,Bs),e(Bs,_m),e(S,fm),e(P,vm),e(P,No),e(No,bm),e(No,Jn),e(Jn,Tm),e(No,wm),e(P,ym),e(P,Po),e(Po,km),e(Po,Oo),e(Oo,qm),e(Po,xm),e(P,Rm),e(P,Qs),e(Qs,Fm),e(P,$m),e(P,pe),y(Co,pe,null),e(pe,zm),e(pe,De),e(De,Em),e(De,Xn),e(Xn,jm),e(De,Gm),e(De,Ks),e(Ks,Mm),e(De,Am),e(pe,Nm),y(qt,pe,null),e(pe,Pm),y(xt,pe,null),v(r,cd,_),v(r,Ie,_),e(Ie,Rt),e(Rt,Vs),y(Lo,Vs,null),e(Ie,Om),e(Ie,Ys),e(Ys,Cm),v(r,ld,_),v(r,$,_),y(So,$,null),e($,Lm),e($,Ue),e(Ue,Sm),e(Ue,Zn),e(Zn,Dm),e(Ue,Im),e(Ue,Js),e(Js,Um),e(Ue,Wm),e($,Hm),y(Ft,$,null),e($,Bm),e($,Xs),e(Xs,Qm),e($,Km),e($,Zs),e(Zs,Vm),e($,Ym),e($,se),e(se,Jm),e(se,ea),e(ea,Xm),e(se,Zm),e(se,er),e(er,eu),e(se,tu),e(se,ta),e(ta,ou),e(se,nu),e(se,tr),e(tr,ru),e(se,su),e($,au),e($,D),e(D,du),e(D,or),e(or,iu),e(D,cu),e(D,oa),e(oa,lu),e(D,pu),e(D,na),e(na,hu),e(D,mu),e(D,ra),e(ra,uu),e(D,gu),e(D,sa),e(sa,_u),e(D,fu),e(D,nr),e(nr,vu),e(D,bu),e(D,aa),e(aa,Tu),e(D,wu),e(D,rr),e(rr,yu),e(D,ku),e(D,da),e(da,qu),e(D,xu),e($,Ru),e($,Do),e(Do,Fu),e(Do,sr),e(sr,$u),e(Do,zu),e($,Eu),e($,Io),e(Io,ju),e(Io,Uo),e(Uo,Gu),e(Io,Mu),e($,Au),e($,ia),e(ia,Nu),e($,Pu),e($,he),y(Wo,he,null),e(he,Ou),e(he,We),e(We,Cu),e(We,ar),e(ar,Lu),e(We,Su),e(We,ca),e(ca,Du),e(We,Iu),e(he,Uu),y($t,he,null),e(he,Wu),y(zt,he,null),e($,Hu),e($,Et),y(Ho,Et,null),e(Et,Bu),e(Et,Bo),e(Bo,Qu),e(Bo,dr),e(dr,Ku),e(Bo,Vu),v(r,pd,_),v(r,He,_),e(He,jt),e(jt,la),y(Qo,la,null),e(He,Yu),e(He,pa),e(pa,Ju),v(r,hd,_),v(r,z,_),y(Ko,z,null),e(z,Xu),e(z,Be),e(Be,Zu),e(Be,ir),e(ir,eg),e(Be,tg),e(Be,ha),e(ha,og),e(Be,ng),e(z,rg),y(Gt,z,null),e(z,sg),e(z,ma),e(ma,ag),e(z,dg),e(z,ua),e(ua,ig),e(z,cg),e(z,ae),e(ae,lg),e(ae,ga),e(ga,pg),e(ae,hg),e(ae,cr),e(cr,mg),e(ae,ug),e(ae,_a),e(_a,gg),e(ae,_g),e(ae,lr),e(lr,fg),e(ae,vg),e(z,bg),e(z,I),e(I,Tg),e(I,pr),e(pr,wg),e(I,yg),e(I,fa),e(fa,kg),e(I,qg),e(I,va),e(va,xg),e(I,Rg),e(I,ba),e(ba,Fg),e(I,$g),e(I,Ta),e(Ta,zg),e(I,Eg),e(I,hr),e(hr,jg),e(I,Gg),e(I,wa),e(wa,Mg),e(I,Ag),e(I,mr),e(mr,Ng),e(I,Pg),e(I,ya),e(ya,Og),e(I,Cg),e(z,Lg),e(z,Vo),e(Vo,Sg),e(Vo,ur),e(ur,Dg),e(Vo,Ig),e(z,Ug),e(z,Yo),e(Yo,Wg),e(Yo,Jo),e(Jo,Hg),e(Yo,Bg),e(z,Qg),e(z,ka),e(ka,Kg),e(z,Vg),e(z,me),y(Xo,me,null),e(me,Yg),e(me,Qe),e(Qe,Jg),e(Qe,gr),e(gr,Xg),e(Qe,Zg),e(Qe,qa),e(qa,e_),e(Qe,t_),e(me,o_),y(Mt,me,null),e(me,n_),y(At,me,null),e(z,r_),e(z,Nt),y(Zo,Nt,null),e(Nt,s_),e(Nt,xa),e(xa,a_),md=!0},p(r,[_]){const en={};_&2&&(en.$$scope={dirty:_,ctx:r}),rt.$set(en);const Ra={};_&2&&(Ra.$$scope={dirty:_,ctx:r}),ct.$set(Ra);const Fa={};_&2&&(Fa.$$scope={dirty:_,ctx:r}),lt.$set(Fa);const $a={};_&2&&($a.$$scope={dirty:_,ctx:r}),pt.$set($a);const tn={};_&2&&(tn.$$scope={dirty:_,ctx:r}),mt.$set(tn);const za={};_&2&&(za.$$scope={dirty:_,ctx:r}),ut.$set(za);const Ea={};_&2&&(Ea.$$scope={dirty:_,ctx:r}),gt.$set(Ea);const ja={};_&2&&(ja.$$scope={dirty:_,ctx:r}),vt.$set(ja);const Ga={};_&2&&(Ga.$$scope={dirty:_,ctx:r}),bt.$set(Ga);const on={};_&2&&(on.$$scope={dirty:_,ctx:r}),Tt.$set(on);const Ma={};_&2&&(Ma.$$scope={dirty:_,ctx:r}),kt.$set(Ma);const Aa={};_&2&&(Aa.$$scope={dirty:_,ctx:r}),qt.$set(Aa);const Na={};_&2&&(Na.$$scope={dirty:_,ctx:r}),xt.$set(Na);const Pa={};_&2&&(Pa.$$scope={dirty:_,ctx:r}),Ft.$set(Pa);const nn={};_&2&&(nn.$$scope={dirty:_,ctx:r}),$t.$set(nn);const Oa={};_&2&&(Oa.$$scope={dirty:_,ctx:r}),zt.$set(Oa);const rn={};_&2&&(rn.$$scope={dirty:_,ctx:r}),Gt.$set(rn);const Ca={};_&2&&(Ca.$$scope={dirty:_,ctx:r}),Mt.$set(Ca);const La={};_&2&&(La.$$scope={dirty:_,ctx:r}),At.$set(La)},i(r){md||(k(i.$$.fragment,r),k(Ut.$$.fragment,r),k(Bt.$$.fragment,r),k(Qt.$$.fragment,r),k(Kt.$$.fragment,r),k(Yt.$$.fragment,r),k(Xt.$$.fragment,r),k(eo.$$.fragment,r),k(to.$$.fragment,r),k(oo.$$.fragment,r),k(ro.$$.fragment,r),k(so.$$.fragment,r),k(ao.$$.fragment,r),k(rt.$$.fragment,r),k(io.$$.fragment,r),k(co.$$.fragment,r),k(lo.$$.fragment,r),k(ho.$$.fragment,r),k(mo.$$.fragment,r),k(ct.$$.fragment,r),k(fo.$$.fragment,r),k(lt.$$.fragment,r),k(pt.$$.fragment,r),k(vo.$$.fragment,r),k(bo.$$.fragment,r),k(mt.$$.fragment,r),k(ko.$$.fragment,r),k(ut.$$.fragment,r),k(gt.$$.fragment,r),k(qo.$$.fragment,r),k(Ro.$$.fragment,r),k(Fo.$$.fragment,r),k(vt.$$.fragment,r),k(jo.$$.fragment,r),k(bt.$$.fragment,r),k(Tt.$$.fragment,r),k(Go.$$.fragment,r),k(Mo.$$.fragment,r),k(Ao.$$.fragment,r),k(kt.$$.fragment,r),k(Co.$$.fragment,r),k(qt.$$.fragment,r),k(xt.$$.fragment,r),k(Lo.$$.fragment,r),k(So.$$.fragment,r),k(Ft.$$.fragment,r),k(Wo.$$.fragment,r),k($t.$$.fragment,r),k(zt.$$.fragment,r),k(Ho.$$.fragment,r),k(Qo.$$.fragment,r),k(Ko.$$.fragment,r),k(Gt.$$.fragment,r),k(Xo.$$.fragment,r),k(Mt.$$.fragment,r),k(At.$$.fragment,r),k(Zo.$$.fragment,r),md=!0)},o(r){q(i.$$.fragment,r),q(Ut.$$.fragment,r),q(Bt.$$.fragment,r),q(Qt.$$.fragment,r),q(Kt.$$.fragment,r),q(Yt.$$.fragment,r),q(Xt.$$.fragment,r),q(eo.$$.fragment,r),q(to.$$.fragment,r),q(oo.$$.fragment,r),q(ro.$$.fragment,r),q(so.$$.fragment,r),q(ao.$$.fragment,r),q(rt.$$.fragment,r),q(io.$$.fragment,r),q(co.$$.fragment,r),q(lo.$$.fragment,r),q(ho.$$.fragment,r),q(mo.$$.fragment,r),q(ct.$$.fragment,r),q(fo.$$.fragment,r),q(lt.$$.fragment,r),q(pt.$$.fragment,r),q(vo.$$.fragment,r),q(bo.$$.fragment,r),q(mt.$$.fragment,r),q(ko.$$.fragment,r),q(ut.$$.fragment,r),q(gt.$$.fragment,r),q(qo.$$.fragment,r),q(Ro.$$.fragment,r),q(Fo.$$.fragment,r),q(vt.$$.fragment,r),q(jo.$$.fragment,r),q(bt.$$.fragment,r),q(Tt.$$.fragment,r),q(Go.$$.fragment,r),q(Mo.$$.fragment,r),q(Ao.$$.fragment,r),q(kt.$$.fragment,r),q(Co.$$.fragment,r),q(qt.$$.fragment,r),q(xt.$$.fragment,r),q(Lo.$$.fragment,r),q(So.$$.fragment,r),q(Ft.$$.fragment,r),q(Wo.$$.fragment,r),q($t.$$.fragment,r),q(zt.$$.fragment,r),q(Ho.$$.fragment,r),q(Qo.$$.fragment,r),q(Ko.$$.fragment,r),q(Gt.$$.fragment,r),q(Xo.$$.fragment,r),q(Mt.$$.fragment,r),q(At.$$.fragment,r),q(Zo.$$.fragment,r),md=!1},d(r){t(c),r&&t(b),r&&t(u),x(i),r&&t(Sa),r&&t(ke),x(Ut),r&&t(Da),r&&t(cn),r&&t(Ia),r&&t(Ye),r&&t(Ua),r&&t(ln),r&&t(Wa),r&&t(pn),r&&t(Ha),r&&t(Je),r&&t(Ba),r&&t(qe),x(Bt),r&&t(Qa),r&&t(ee),x(Qt),x(Kt),x(Yt),r&&t(Ka),r&&t(xe),x(Xt),r&&t(Va),r&&t(Zt),x(eo),r&&t(Ya),r&&t(Re),x(to),r&&t(Ja),r&&t(Fe),x(oo),r&&t(Xa),r&&t(no),x(ro),r&&t(Za),r&&t($e),x(so),r&&t(ed),r&&t(Z),x(ao),x(rt),x(io),x(co),x(lo),r&&t(td),r&&t(Ee),x(ho),r&&t(od),r&&t(L),x(mo),x(ct),x(fo),x(lt),x(pt),r&&t(nd),r&&t(Me),x(vo),r&&t(rd),r&&t(E),x(bo),x(mt),x(ko),x(ut),x(gt),x(qo),r&&t(sd),r&&t(Pe),x(Ro),r&&t(ad),r&&t(j),x(Fo),x(vt),x(jo),x(bt),x(Tt),x(Go),r&&t(dd),r&&t(Le),x(Mo),r&&t(id),r&&t(P),x(Ao),x(kt),x(Co),x(qt),x(xt),r&&t(cd),r&&t(Ie),x(Lo),r&&t(ld),r&&t($),x(So),x(Ft),x(Wo),x($t),x(zt),x(Ho),r&&t(pd),r&&t(He),x(Qo),r&&t(hd),r&&t(z),x(Ko),x(Gt),x(Xo),x(Mt),x(At),x(Zo)}}}const Qb={local:"rag",sections:[{local:"overview",title:"Overview"},{local:"transformers.RagConfig",title:"RagConfig"},{local:"transformers.RagTokenizer",title:"RagTokenizer"},{local:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",title:"Rag specific outputs"},{local:"transformers.RagRetriever",title:"RagRetriever"},{local:"transformers.RagModel",title:"RagModel"},{local:"transformers.RagSequenceForGeneration",title:"RagSequenceForGeneration"},{local:"transformers.RagTokenForGeneration",title:"RagTokenForGeneration"},{local:"transformers.TFRagModel",title:"TFRagModel"},{local:"transformers.TFRagSequenceForGeneration",title:"TFRagSequenceForGeneration"},{local:"transformers.TFRagTokenForGeneration",title:"TFRagTokenForGeneration"}],title:"RAG"};function Kb(F){return Rb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tT extends yb{constructor(c){super();kb(this,c,Kb,Bb,qb,{})}}export{tT as default,Qb as metadata};
