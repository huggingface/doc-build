import{S as kb,i as qb,s as yb,e as a,k as p,w as T,t as o,M as xb,c as s,d as t,m as h,a as d,x as w,h as n,b as l,G as e,g as v,y as k,q,o as y,B as x,v as Rb,L as sn}from"../../chunks/vendor-hf-doc-builder.js";import{T as ge}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as an}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fb(F){let c,b,u,g,f;return g=new dn({props:{code:`# To load the default "wiki_dpr" dataset with 21M passages from wikipedia (index name is 'compressed' or 'exact')
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

<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, index_name=<span class="hljs-string">&quot;legacy&quot;</span>)`}}),{c(){c=a("p"),b=o("Examples:"),u=p(),T(g.$$.fragment)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Examples:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:sn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function $b(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function zb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),{c(){c=a("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:sn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function jb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Gb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
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
<span class="hljs-meta">... </span>)`}}),{c(){c=a("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:sn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Ab(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Pb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Nb(F){let c,b,u,g,f;return g=new dn({props:{code:`from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=a("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:sn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Ob(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Cb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Sb(F){let c,b,u,g,f;return g=new dn({props:{code:`from transformers import RagTokenizer, RagRetriever, TFRagModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){c=a("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:sn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Lb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Db(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=a("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:sn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Wb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Hb(F){let c,b,u,g,f;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Bb(F){let c,b,u,g,f;return g=new dn({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=a("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=s(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:sn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Qb(F){let c,b,u,g,f,i,m,R,Yd,Ls,qe,Ke,zr,Wt,Jd,Er,Xd,Ds,cn,Zd,Is,Ye,ei,Ht,ti,oi,Ws,ln,ni,Hs,pn,jr,ri,Bs,Je,ai,Bt,si,di,Qs,ye,Xe,Gr,Qt,ii,Mr,ci,Us,ee,Ut,li,de,hn,pi,hi,Ar,mi,ui,mn,gi,_i,un,fi,vi,bi,Ze,Vt,Ti,Kt,wi,gn,ki,qi,yi,et,Yt,xi,Jt,Ri,_n,Fi,$i,Vs,xe,tt,Pr,Xt,zi,Nr,Ei,Ks,Zt,eo,Ys,Re,ot,Or,to,ji,Cr,Gi,Js,Fe,oo,Mi,Sr,Ai,Xs,no,ro,Zs,$e,nt,Lr,ao,Pi,Dr,Ni,ed,Z,so,Oi,Ir,Ci,Si,rt,Li,at,io,Di,Wr,Ii,Wi,st,co,Hi,ze,Bi,Hr,Qi,Ui,Br,Vi,Ki,Yi,dt,lo,Ji,po,Xi,Qr,Zi,ec,td,Ee,it,Ur,ho,tc,Vr,oc,od,S,mo,nc,je,rc,fn,ac,sc,Kr,dc,ic,cc,ct,lc,Yr,pc,hc,te,mc,Jr,uc,gc,vn,_c,fc,Xr,vc,bc,bn,Tc,wc,kc,M,qc,Tn,yc,xc,Zr,Rc,Fc,ea,$c,zc,ta,Ec,jc,oa,Gc,Mc,wn,Ac,Pc,na,Nc,Oc,kn,Cc,Sc,qn,Lc,Dc,ra,Ic,Wc,Hc,uo,Bc,yn,Qc,Uc,Vc,go,Kc,_o,Yc,Jc,Xc,ie,fo,Zc,Ge,el,xn,tl,ol,aa,nl,rl,al,lt,sl,pt,nd,Me,ht,sa,vo,dl,da,il,rd,E,bo,cl,Ae,ll,Rn,pl,hl,ia,ml,ul,gl,mt,_l,ca,fl,vl,la,bl,Tl,oe,wl,pa,kl,ql,Fn,yl,xl,ha,Rl,Fl,$n,$l,zl,El,A,jl,zn,Gl,Ml,ma,Al,Pl,ua,Nl,Ol,ga,Cl,Sl,_a,Ll,Dl,En,Il,Wl,fa,Hl,Bl,jn,Ql,Ul,Gn,Vl,Kl,va,Yl,Jl,Xl,To,Zl,Mn,ep,tp,op,wo,np,ko,rp,ap,sp,ce,qo,dp,Pe,ip,An,cp,lp,ba,pp,hp,mp,ut,up,gt,gp,_t,yo,_p,xo,fp,Pn,vp,bp,ad,Ne,ft,Ta,Ro,Tp,wa,wp,sd,j,Fo,kp,Oe,qp,Nn,yp,xp,ka,Rp,Fp,$p,vt,zp,qa,Ep,jp,ya,Gp,Mp,ne,Ap,xa,Pp,Np,On,Op,Cp,Ra,Sp,Lp,Cn,Dp,Ip,Wp,P,Hp,Sn,Bp,Qp,Fa,Up,Vp,$a,Kp,Yp,za,Jp,Xp,Ea,Zp,eh,Ln,th,oh,ja,nh,rh,Dn,ah,sh,In,dh,ih,Ga,ch,lh,ph,$o,hh,Wn,mh,uh,gh,zo,_h,Eo,fh,vh,bh,le,jo,Th,Ce,wh,Hn,kh,qh,Ma,yh,xh,Rh,bt,Fh,Tt,$h,wt,Go,zh,Aa,Eh,dd,Se,kt,Pa,Mo,jh,Na,Gh,id,N,Ao,Mh,Le,Ah,Bn,Ph,Nh,Oa,Oh,Ch,Sh,qt,Lh,Ca,Dh,Ih,re,Wh,Sa,Hh,Bh,Qn,Qh,Uh,La,Vh,Kh,Un,Yh,Jh,Xh,L,Zh,Vn,em,tm,Da,om,nm,Ia,rm,am,Wa,sm,dm,Ha,im,cm,Kn,lm,pm,Ba,hm,mm,Yn,um,gm,Qa,_m,fm,vm,Po,bm,Jn,Tm,wm,km,No,qm,Oo,ym,xm,Rm,Ua,Fm,$m,pe,Co,zm,De,Em,Xn,jm,Gm,Va,Mm,Am,Pm,yt,Nm,xt,cd,Ie,Rt,Ka,So,Om,Ya,Cm,ld,$,Lo,Sm,We,Lm,Zn,Dm,Im,Ja,Wm,Hm,Bm,Ft,Qm,Xa,Um,Vm,Za,Km,Ym,ae,Jm,es,Xm,Zm,er,eu,tu,ts,ou,nu,tr,ru,au,su,D,du,or,iu,cu,os,lu,pu,ns,hu,mu,rs,uu,gu,as,_u,fu,nr,vu,bu,ss,Tu,wu,rr,ku,qu,ds,yu,xu,Ru,Do,Fu,ar,$u,zu,Eu,Io,ju,Wo,Gu,Mu,Au,is,Pu,Nu,he,Ho,Ou,He,Cu,sr,Su,Lu,cs,Du,Iu,Wu,$t,Hu,zt,Bu,Et,Bo,Qu,Qo,Uu,dr,Vu,Ku,pd,Be,jt,ls,Uo,Yu,ps,Ju,hd,z,Vo,Xu,Qe,Zu,ir,eg,tg,hs,og,ng,rg,Gt,ag,ms,sg,dg,us,ig,cg,se,lg,gs,pg,hg,cr,mg,ug,_s,gg,_g,lr,fg,vg,bg,I,Tg,pr,wg,kg,fs,qg,yg,vs,xg,Rg,bs,Fg,$g,Ts,zg,Eg,hr,jg,Gg,ws,Mg,Ag,mr,Pg,Ng,ks,Og,Cg,Sg,Ko,Lg,ur,Dg,Ig,Wg,Yo,Hg,Jo,Bg,Qg,Ug,qs,Vg,Kg,me,Xo,Yg,Ue,Jg,gr,Xg,Zg,ys,e_,t_,o_,Mt,n_,At,r_,Pt,Zo,a_,xs,s_,md;return i=new _e({}),Wt=new _e({}),Qt=new _e({}),Ut=new G({props:{name:"class transformers.RagConfig",anchor:"transformers.RagConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"is_encoder_decoder",val:" = True"},{name:"prefix",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"title_sep",val:" = ' / '"},{name:"doc_sep",val:" = ' // '"},{name:"n_docs",val:" = 5"},{name:"max_combined_length",val:" = 300"},{name:"retrieval_vector_size",val:" = 768"},{name:"retrieval_batch_size",val:" = 8"},{name:"dataset",val:" = 'wiki_dpr'"},{name:"dataset_split",val:" = 'train'"},{name:"index_name",val:" = 'compressed'"},{name:"index_path",val:" = None"},{name:"passages_path",val:" = None"},{name:"use_dummy_dataset",val:" = False"},{name:"reduce_loss",val:" = False"},{name:"label_smoothing",val:" = 0.0"},{name:"do_deduplication",val:" = True"},{name:"exclude_bos_score",val:" = False"},{name:"do_marginalize",val:" = False"},{name:"output_retrieved",val:" = False"},{name:"use_cache",val:" = True"},{name:"forced_eos_token_id",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagConfig.title_sep",description:`<strong>title_sep</strong> (<code>str</code>, <em>optional</em>, defaults to  <code>&quot; / &quot;</code>) &#x2014;
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
The path to the serialized faiss index on disk.
passages_path &#x2014; (<code>str</code>, <em>optional</em>):
A path to text passages compatible with the faiss index. Required if using
<code>LegacyIndex</code>`,name:"index_path"},{anchor:"transformers.RagConfig.use_dummy_dataset",description:`<strong>use_dummy_dataset</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/configuration_rag.py#L82"}}),Vt=new G({props:{name:"from_question_encoder_generator_configs",anchor:"transformers.RagConfig.from_question_encoder_generator_configs",parameters:[{name:"question_encoder_config",val:": PretrainedConfig"},{name:"generator_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/configuration_rag.py#L170",returnDescription:`
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
weighted average in the cross-attention heads.`,name:"generator_cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L135"}}),ao=new _e({}),so=new G({props:{name:"class transformers.RagRetriever",anchor:"transformers.RagRetriever",parameters:[{name:"config",val:""},{name:"question_encoder_tokenizer",val:""},{name:"generator_tokenizer",val:""},{name:"index",val:" = None"},{name:"init_retrieval",val:" = True"}],parametersDescription:[{anchor:"transformers.RagRetriever.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
The configuration of the RAG model this Retriever is used with. Contains parameters indicating which
<code>Index</code> to build. You can load your own custom dataset with <code>config.index_name=&quot;custom&quot;</code> or use a canonical
one (default) from the datasets library with <code>config.index_name=&quot;wiki_dpr&quot;</code> for example.`,name:"config"},{anchor:"transformers.RagRetriever.question_encoder_tokenizer",description:`<strong>question_encoder_tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer that was used to tokenize the question. It is used to decode the question and then use the
generator_tokenizer.`,name:"question_encoder_tokenizer"},{anchor:"transformers.RagRetriever.generator_tokenizer",description:`<strong>generator_tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer used for the generator part of the RagModel.`,name:"generator_tokenizer"},{anchor:"transformers.RagRetriever.index",description:`<strong>index</strong> (<code>Index</code>, optional, defaults to the one defined by the configuration) &#x2014;
If specified, use this index instead of the one built using the configuration`,name:"index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L323"}}),rt=new an({props:{anchor:"transformers.RagRetriever.example",$$slots:{default:[Fb]},$$scope:{ctx:F}}}),io=new G({props:{name:"init_retrieval",anchor:"transformers.RagRetriever.init_retrieval",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L457"}}),co=new G({props:{name:"postprocess_docs",anchor:"transformers.RagRetriever.postprocess_docs",parameters:[{name:"docs",val:""},{name:"input_strings",val:""},{name:"prefix",val:""},{name:"n_docs",val:""},{name:"return_tensors",val:" = None"}],parametersDescription:[{anchor:"transformers.RagRetriever.postprocess_docs.docs",description:`<strong>docs</strong>  (<code>dict</code>) &#x2014;
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
`}}),lt=new ge({props:{$$slots:{default:[zb]},$$scope:{ctx:F}}}),pt=new an({props:{anchor:"transformers.RagModel.forward.example",$$slots:{default:[Eb]},$$scope:{ctx:F}}}),vo=new _e({}),bo=new G({props:{name:"class transformers.RagSequenceForGeneration",anchor:"transformers.RagSequenceForGeneration",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"question_encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"generator",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"retriever",val:": typing.Optional[transformers.models.rag.retrieval_rag.RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L743"}}),mt=new ge({props:{$$slots:{default:[jb]},$$scope:{ctx:F}}}),qo=new G({props:{name:"forward",anchor:"transformers.RagSequenceForGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"exclude_bos_score",val:": typing.Optional[bool] = None"},{name:"reduce_loss",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ut=new ge({props:{$$slots:{default:[Gb]},$$scope:{ctx:F}}}),gt=new an({props:{anchor:"transformers.RagSequenceForGeneration.forward.example",$$slots:{default:[Mb]},$$scope:{ctx:F}}}),yo=new G({props:{name:"generate",anchor:"transformers.RagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"do_deduplication",val:": typing.Optional[bool] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),bt=new ge({props:{$$slots:{default:[Pb]},$$scope:{ctx:F}}}),Tt=new an({props:{anchor:"transformers.RagTokenForGeneration.forward.example",$$slots:{default:[Nb]},$$scope:{ctx:F}}}),Go=new G({props:{name:"generate",anchor:"transformers.RagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Callable[[int, torch.Tensor], typing.List[int]] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"renormalize_logits",val:": typing.Optional[bool] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[typing.Union[int, float]], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Exponential penalty to the length. 1.0 means no penalty.</p>
<p>Set to values &lt; 1.0 in order to encourage the model to generate shorter sequences, to a value &gt; 1.0 in
order to encourage the model to produce longer sequences.`,name:"length_penalty"},{anchor:"transformers.RagTokenForGeneration.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
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
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L485"}}),qt=new ge({props:{$$slots:{default:[Ob]},$$scope:{ctx:F}}}),Co=new G({props:{name:"call",anchor:"transformers.TFRagModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"doc_scores",val:" = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_retrieved",val:" = None"},{name:"n_docs",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagModel.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L536",returnDescription:`
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
`}}),yt=new ge({props:{$$slots:{default:[Cb]},$$scope:{ctx:F}}}),xt=new an({props:{anchor:"transformers.TFRagModel.call.example",$$slots:{default:[Sb]},$$scope:{ctx:F}}}),So=new _e({}),Lo=new G({props:{name:"class transformers.TFRagSequenceForGeneration",anchor:"transformers.TFRagSequenceForGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1371"}}),Ft=new ge({props:{$$slots:{default:[Lb]},$$scope:{ctx:F}}}),Ho=new G({props:{name:"call",anchor:"transformers.TFRagSequenceForGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"doc_scores",val:" = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_retrieved",val:" = None"},{name:"n_docs",val:" = None"},{name:"exclude_bos_score",val:" = None"},{name:"labels",val:" = None"},{name:"reduce_loss",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1419",returnDescription:`
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
`}}),$t=new ge({props:{$$slots:{default:[Db]},$$scope:{ctx:F}}}),zt=new an({props:{anchor:"transformers.TFRagSequenceForGeneration.call.example",$$slots:{default:[Ib]},$$scope:{ctx:F}}}),Bo=new G({props:{name:"generate",anchor:"transformers.TFRagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"do_deduplication",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"num_beams",val:" = None"},{name:"n_docs",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Additional kwargs will be passed to <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate">generate()</a>`,name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1651",returnDescription:`
<p>The generated sequences. The
second dimension (sequence length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),Uo=new _e({}),Vo=new G({props:{name:"class transformers.TFRagTokenForGeneration",anchor:"transformers.TFRagTokenForGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagTokenForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagTokenForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagTokenForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L720"}}),Gt=new ge({props:{$$slots:{default:[Wb]},$$scope:{ctx:F}}}),Xo=new G({props:{name:"call",anchor:"transformers.TFRagTokenForGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"doc_scores",val:" = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_retrieved",val:" = None"},{name:"n_docs",val:" = None"},{name:"do_marginalize",val:" = None"},{name:"labels",val:" = None"},{name:"reduce_loss",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L826",returnDescription:`
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
`}}),Mt=new ge({props:{$$slots:{default:[Hb]},$$scope:{ctx:F}}}),At=new an({props:{anchor:"transformers.TFRagTokenForGeneration.call.example",$$slots:{default:[Bb]},$$scope:{ctx:F}}}),Zo=new G({props:{name:"generate",anchor:"transformers.TFRagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"early_stopping",val:" = None"},{name:"use_cache",val:" = None"},{name:"num_beams",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"n_docs",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Exponential penalty to the length. 1.0 means no penalty.</p>
<p>Set to values &lt; 1.0 in order to encourage the model to generate shorter sequences, to a value &gt; 1.0 in
order to encourage the model to produce longer sequences.`,name:"length_penalty"},{anchor:"transformers.TFRagTokenForGeneration.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
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
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"return_dict_in_generate"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L981",returnDescription:`
<p>The generated sequences. The
second dimension (sequence_length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),{c(){c=a("meta"),b=p(),u=a("h1"),g=a("a"),f=a("span"),T(i.$$.fragment),m=p(),R=a("span"),Yd=o("RAG"),Ls=p(),qe=a("h2"),Ke=a("a"),zr=a("span"),T(Wt.$$.fragment),Jd=p(),Er=a("span"),Xd=o("Overview"),Ds=p(),cn=a("p"),Zd=o(`Retrieval-augmented generation (\u201CRAG\u201D) models combine the powers of pretrained dense retrieval (DPR) and
sequence-to-sequence models. RAG models retrieve documents, pass them to a seq2seq model, then marginalize to generate
outputs. The retriever and seq2seq modules are initialized from pretrained models, and fine-tuned jointly, allowing
both retrieval and generation to adapt to downstream tasks.`),Is=p(),Ye=a("p"),ei=o("It is based on the paper "),Ht=a("a"),ti=o("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"),oi=o(` by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich K\xFCttler, Mike Lewis, Wen-tau Yih, Tim Rockt\xE4schel, Sebastian Riedel, Douwe Kiela.`),Ws=p(),ln=a("p"),ni=o("The abstract from the paper is the following:"),Hs=p(),pn=a("p"),jr=a("em"),ri=o(`Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve
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
parametric-only seq2seq baseline.`),Bs=p(),Je=a("p"),ai=o("This model was contributed by "),Bt=a("a"),si=o("ola13"),di=o("."),Qs=p(),ye=a("h2"),Xe=a("a"),Gr=a("span"),T(Qt.$$.fragment),ii=p(),Mr=a("span"),ci=o("RagConfig"),Us=p(),ee=a("div"),T(Ut.$$.fragment),li=p(),de=a("p"),hn=a("a"),pi=o("RagConfig"),hi=o(" stores the configuration of a "),Ar=a("em"),mi=o("RagModel"),ui=o(". Configuration objects inherit from "),mn=a("a"),gi=o("PretrainedConfig"),_i=o(` and
can be used to control the model outputs. Read the documentation from `),un=a("a"),fi=o("PretrainedConfig"),vi=o(" for more information."),bi=p(),Ze=a("div"),T(Vt.$$.fragment),Ti=p(),Kt=a("p"),wi=o("Instantiate a "),gn=a("a"),ki=o("EncoderDecoderConfig"),qi=o(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),yi=p(),et=a("div"),T(Yt.$$.fragment),xi=p(),Jt=a("p"),Ri=o("Serializes this instance to a Python dictionary. Override the default "),_n=a("a"),Fi=o("to_dict()"),$i=o("."),Vs=p(),xe=a("h2"),tt=a("a"),Pr=a("span"),T(Xt.$$.fragment),zi=p(),Nr=a("span"),Ei=o("RagTokenizer"),Ks=p(),Zt=a("div"),T(eo.$$.fragment),Ys=p(),Re=a("h2"),ot=a("a"),Or=a("span"),T(to.$$.fragment),ji=p(),Cr=a("span"),Gi=o("Rag specific outputs"),Js=p(),Fe=a("div"),T(oo.$$.fragment),Mi=p(),Sr=a("p"),Ai=o("Base class for retriever augmented marginalized models outputs."),Xs=p(),no=a("div"),T(ro.$$.fragment),Zs=p(),$e=a("h2"),nt=a("a"),Lr=a("span"),T(ao.$$.fragment),Pi=p(),Dr=a("span"),Ni=o("RagRetriever"),ed=p(),Z=a("div"),T(so.$$.fragment),Oi=p(),Ir=a("p"),Ci=o(`Retriever used to get documents from vector queries. It retrieves the documents embeddings as well as the documents
contents, and it formats them to be used with a RagModel.`),Si=p(),T(rt.$$.fragment),Li=p(),at=a("div"),T(io.$$.fragment),Di=p(),Wr=a("p"),Ii=o("Retriever initialization function. It loads the index into memory."),Wi=p(),st=a("div"),T(co.$$.fragment),Hi=p(),ze=a("p"),Bi=o("Postprocessing retrieved "),Hr=a("code"),Qi=o("docs"),Ui=o(" and combining them with "),Br=a("code"),Vi=o("input_strings"),Ki=o("."),Yi=p(),dt=a("div"),T(lo.$$.fragment),Ji=p(),po=a("p"),Xi=o("Retrieves documents for specified "),Qr=a("code"),Zi=o("question_hidden_states"),ec=o("."),td=p(),Ee=a("h2"),it=a("a"),Ur=a("span"),T(ho.$$.fragment),tc=p(),Vr=a("span"),oc=o("RagModel"),od=p(),S=a("div"),T(mo.$$.fragment),nc=p(),je=a("p"),rc=o("The "),fn=a("a"),ac=o("RagModel"),sc=o(" forward method, overrides the "),Kr=a("code"),dc=o("__call__"),ic=o(" special method."),cc=p(),T(ct.$$.fragment),lc=p(),Yr=a("p"),pc=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),hc=p(),te=a("p"),mc=o("The question encoder can be any "),Jr=a("em"),uc=o("autoencoding"),gc=o(" model, preferably "),vn=a("a"),_c=o("DPRQuestionEncoder"),fc=o(`, and the generator can be
any `),Xr=a("em"),vc=o("seq2seq"),bc=o(" model, preferably "),bn=a("a"),Tc=o("BartForConditionalGeneration"),wc=o("."),kc=p(),M=a("p"),qc=o("The model can be initialized with a "),Tn=a("a"),yc=o("RagRetriever"),xc=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Zr=a("em"),Rc=o("autoencoding"),Fc=o(" model as the "),ea=a("code"),$c=o("question_encoder"),zc=o(" and any "),ta=a("em"),Ec=o("seq2seq"),jc=o(" model with language model head as the "),oa=a("code"),Gc=o("generator"),Mc=o(`.
It has been tested with `),wn=a("a"),Ac=o("DPRQuestionEncoder"),Pc=o(" as the "),na=a("code"),Nc=o("question_encoder"),Oc=o(" and "),kn=a("a"),Cc=o("BartForConditionalGeneration"),Sc=o(` or
`),qn=a("a"),Lc=o("T5ForConditionalGeneration"),Dc=o(" as the "),ra=a("code"),Ic=o("generator"),Wc=o("."),Hc=p(),uo=a("p"),Bc=o("This model inherits from "),yn=a("a"),Qc=o("PreTrainedModel"),Uc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc=p(),go=a("p"),Kc=o("This model is also a PyTorch "),_o=a("a"),Yc=o("torch.nn.Module"),Jc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc=p(),ie=a("div"),T(fo.$$.fragment),Zc=p(),Ge=a("p"),el=o("The "),xn=a("a"),tl=o("RagModel"),ol=o(" forward method, overrides the "),aa=a("code"),nl=o("__call__"),rl=o(" special method."),al=p(),T(lt.$$.fragment),sl=p(),T(pt.$$.fragment),nd=p(),Me=a("h2"),ht=a("a"),sa=a("span"),T(vo.$$.fragment),dl=p(),da=a("span"),il=o("RagSequenceForGeneration"),rd=p(),E=a("div"),T(bo.$$.fragment),cl=p(),Ae=a("p"),ll=o("The "),Rn=a("a"),pl=o("RagSequenceForGeneration"),hl=o(" forward method, overrides the "),ia=a("code"),ml=o("__call__"),ul=o(" special method."),gl=p(),T(mt.$$.fragment),_l=p(),ca=a("p"),fl=o("A RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),vl=p(),la=a("p"),bl=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Tl=p(),oe=a("p"),wl=o("The question encoder can be any "),pa=a("em"),kl=o("autoencoding"),ql=o(" model, preferably "),Fn=a("a"),yl=o("DPRQuestionEncoder"),xl=o(`, and the generator can be
any `),ha=a("em"),Rl=o("seq2seq"),Fl=o(" model, preferably "),$n=a("a"),$l=o("BartForConditionalGeneration"),zl=o("."),El=p(),A=a("p"),jl=o("The model can be initialized with a "),zn=a("a"),Gl=o("RagRetriever"),Ml=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),ma=a("em"),Al=o("autoencoding"),Pl=o(" model as the "),ua=a("code"),Nl=o("question_encoder"),Ol=o(" and any "),ga=a("em"),Cl=o("seq2seq"),Sl=o(" model with language model head as the "),_a=a("code"),Ll=o("generator"),Dl=o(`.
It has been tested with `),En=a("a"),Il=o("DPRQuestionEncoder"),Wl=o(" as the "),fa=a("code"),Hl=o("question_encoder"),Bl=o(" and "),jn=a("a"),Ql=o("BartForConditionalGeneration"),Ul=o(` or
`),Gn=a("a"),Vl=o("T5ForConditionalGeneration"),Kl=o(" as the "),va=a("code"),Yl=o("generator"),Jl=o("."),Xl=p(),To=a("p"),Zl=o("This model inherits from "),Mn=a("a"),ep=o("PreTrainedModel"),tp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),op=p(),wo=a("p"),np=o("This model is also a PyTorch "),ko=a("a"),rp=o("torch.nn.Module"),ap=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sp=p(),ce=a("div"),T(qo.$$.fragment),dp=p(),Pe=a("p"),ip=o("The "),An=a("a"),cp=o("RagSequenceForGeneration"),lp=o(" forward method, overrides the "),ba=a("code"),pp=o("__call__"),hp=o(" special method."),mp=p(),T(ut.$$.fragment),up=p(),T(gt.$$.fragment),gp=p(),_t=a("div"),T(yo.$$.fragment),_p=p(),xo=a("p"),fp=o("Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),Pn=a("a"),vp=o("generate()"),bp=o("`\ndocumentation for more information on how to set other generate input parameters."),ad=p(),Ne=a("h2"),ft=a("a"),Ta=a("span"),T(Ro.$$.fragment),Tp=p(),wa=a("span"),wp=o("RagTokenForGeneration"),sd=p(),j=a("div"),T(Fo.$$.fragment),kp=p(),Oe=a("p"),qp=o("The "),Nn=a("a"),yp=o("RagTokenForGeneration"),xp=o(" forward method, overrides the "),ka=a("code"),Rp=o("__call__"),Fp=o(" special method."),$p=p(),T(vt.$$.fragment),zp=p(),qa=a("p"),Ep=o("A RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),jp=p(),ya=a("p"),Gp=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Mp=p(),ne=a("p"),Ap=o("The question encoder can be any "),xa=a("em"),Pp=o("autoencoding"),Np=o(" model, preferably "),On=a("a"),Op=o("DPRQuestionEncoder"),Cp=o(`, and the generator can be
any `),Ra=a("em"),Sp=o("seq2seq"),Lp=o(" model, preferably "),Cn=a("a"),Dp=o("BartForConditionalGeneration"),Ip=o("."),Wp=p(),P=a("p"),Hp=o("The model can be initialized with a "),Sn=a("a"),Bp=o("RagRetriever"),Qp=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Fa=a("em"),Up=o("autoencoding"),Vp=o(" model as the "),$a=a("code"),Kp=o("question_encoder"),Yp=o(" and any "),za=a("em"),Jp=o("seq2seq"),Xp=o(" model with language model head as the "),Ea=a("code"),Zp=o("generator"),eh=o(`.
It has been tested with `),Ln=a("a"),th=o("DPRQuestionEncoder"),oh=o(" as the "),ja=a("code"),nh=o("question_encoder"),rh=o(" and "),Dn=a("a"),ah=o("BartForConditionalGeneration"),sh=o(` or
`),In=a("a"),dh=o("T5ForConditionalGeneration"),ih=o(" as the "),Ga=a("code"),ch=o("generator"),lh=o("."),ph=p(),$o=a("p"),hh=o("This model inherits from "),Wn=a("a"),mh=o("PreTrainedModel"),uh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=p(),zo=a("p"),_h=o("This model is also a PyTorch "),Eo=a("a"),fh=o("torch.nn.Module"),vh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bh=p(),le=a("div"),T(jo.$$.fragment),Th=p(),Ce=a("p"),wh=o("The "),Hn=a("a"),kh=o("RagTokenForGeneration"),qh=o(" forward method, overrides the "),Ma=a("code"),yh=o("__call__"),xh=o(" special method."),Rh=p(),T(bt.$$.fragment),Fh=p(),T(Tt.$$.fragment),$h=p(),wt=a("div"),T(Go.$$.fragment),zh=p(),Aa=a("p"),Eh=o("Implements RAG token decoding."),dd=p(),Se=a("h2"),kt=a("a"),Pa=a("span"),T(Mo.$$.fragment),jh=p(),Na=a("span"),Gh=o("TFRagModel"),id=p(),N=a("div"),T(Ao.$$.fragment),Mh=p(),Le=a("p"),Ah=o("The "),Bn=a("a"),Ph=o("TFRagModel"),Nh=o(" forward method, overrides the "),Oa=a("code"),Oh=o("__call__"),Ch=o(" special method."),Sh=p(),T(qt.$$.fragment),Lh=p(),Ca=a("p"),Dh=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Ih=p(),re=a("p"),Wh=o("The question encoder can be any "),Sa=a("em"),Hh=o("autoencoding"),Bh=o(" model, preferably "),Qn=a("a"),Qh=o("TFDPRQuestionEncoder"),Uh=o(`, and the generator can be
any `),La=a("em"),Vh=o("seq2seq"),Kh=o(" model, preferably "),Un=a("a"),Yh=o("TFBartForConditionalGeneration"),Jh=o("."),Xh=p(),L=a("p"),Zh=o("The model can be initialized with a "),Vn=a("a"),em=o("RagRetriever"),tm=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Da=a("em"),om=o("autoencoding"),nm=o(" model as the "),Ia=a("code"),rm=o("question_encoder"),am=o(" and any "),Wa=a("em"),sm=o("seq2seq"),dm=o(" model with language model head as the "),Ha=a("code"),im=o("generator"),cm=o(`.
It has been tested with `),Kn=a("a"),lm=o("TFDPRQuestionEncoder"),pm=o(" as the "),Ba=a("code"),hm=o("question_encoder"),mm=o(" and "),Yn=a("a"),um=o("TFBartForConditionalGeneration"),gm=o(`
as the `),Qa=a("code"),_m=o("generator"),fm=o("."),vm=p(),Po=a("p"),bm=o("This model inherits from "),Jn=a("a"),Tm=o("TFPreTrainedModel"),wm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),km=p(),No=a("p"),qm=o("This model is also a Tensorflow "),Oo=a("a"),ym=o("tf.keras.Model"),xm=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Rm=p(),Ua=a("p"),Fm=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),$m=p(),pe=a("div"),T(Co.$$.fragment),zm=p(),De=a("p"),Em=o("The "),Xn=a("a"),jm=o("TFRagModel"),Gm=o(" forward method, overrides the "),Va=a("code"),Mm=o("__call__"),Am=o(" special method."),Pm=p(),T(yt.$$.fragment),Nm=p(),T(xt.$$.fragment),cd=p(),Ie=a("h2"),Rt=a("a"),Ka=a("span"),T(So.$$.fragment),Om=p(),Ya=a("span"),Cm=o("TFRagSequenceForGeneration"),ld=p(),$=a("div"),T(Lo.$$.fragment),Sm=p(),We=a("p"),Lm=o("The "),Zn=a("a"),Dm=o("TFRagSequenceForGeneration"),Im=o(" forward method, overrides the "),Ja=a("code"),Wm=o("__call__"),Hm=o(" special method."),Bm=p(),T(Ft.$$.fragment),Qm=p(),Xa=a("p"),Um=o("A TF RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),Vm=p(),Za=a("p"),Km=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Ym=p(),ae=a("p"),Jm=o("The question encoder can be any "),es=a("em"),Xm=o("autoencoding"),Zm=o(" model, preferably "),er=a("a"),eu=o("TFDPRQuestionEncoder"),tu=o(`, and the generator can be
any `),ts=a("em"),ou=o("seq2seq"),nu=o(" model, preferably "),tr=a("a"),ru=o("TFBartForConditionalGeneration"),au=o("."),su=p(),D=a("p"),du=o("The model can be initialized with a "),or=a("a"),iu=o("RagRetriever"),cu=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),os=a("em"),lu=o("autoencoding"),pu=o(" model as the "),ns=a("code"),hu=o("question_encoder"),mu=o(" and any "),rs=a("em"),uu=o("seq2seq"),gu=o(" model with language model head as the "),as=a("code"),_u=o("generator"),fu=o(`.
It has been tested with `),nr=a("a"),vu=o("TFDPRQuestionEncoder"),bu=o(" as the "),ss=a("code"),Tu=o("question_encoder"),wu=o(" and "),rr=a("a"),ku=o("TFBartForConditionalGeneration"),qu=o(`
as the `),ds=a("code"),yu=o("generator"),xu=o("."),Ru=p(),Do=a("p"),Fu=o("This model inherits from "),ar=a("a"),$u=o("TFPreTrainedModel"),zu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu=p(),Io=a("p"),ju=o("This model is also a Tensorflow "),Wo=a("a"),Gu=o("tf.keras.Model"),Mu=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Au=p(),is=a("p"),Pu=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Nu=p(),he=a("div"),T(Ho.$$.fragment),Ou=p(),He=a("p"),Cu=o("The "),sr=a("a"),Su=o("TFRagSequenceForGeneration"),Lu=o(" forward method, overrides the "),cs=a("code"),Du=o("__call__"),Iu=o(" special method."),Wu=p(),T($t.$$.fragment),Hu=p(),T(zt.$$.fragment),Bu=p(),Et=a("div"),T(Bo.$$.fragment),Qu=p(),Qo=a("p"),Uu=o("Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),dr=a("a"),Vu=o("generate()"),Ku=o("`\ndocumentation for more information on how to set other generate input parameters"),pd=p(),Be=a("h2"),jt=a("a"),ls=a("span"),T(Uo.$$.fragment),Yu=p(),ps=a("span"),Ju=o("TFRagTokenForGeneration"),hd=p(),z=a("div"),T(Vo.$$.fragment),Xu=p(),Qe=a("p"),Zu=o("The "),ir=a("a"),eg=o("TFRagTokenForGeneration"),tg=o(" forward method, overrides the "),hs=a("code"),og=o("__call__"),ng=o(" special method."),rg=p(),T(Gt.$$.fragment),ag=p(),ms=a("p"),sg=o("A TF RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),dg=p(),us=a("p"),ig=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),cg=p(),se=a("p"),lg=o("The question encoder can be any "),gs=a("em"),pg=o("autoencoding"),hg=o(" model, preferably "),cr=a("a"),mg=o("TFDPRQuestionEncoder"),ug=o(`, and the generator can be
any `),_s=a("em"),gg=o("seq2seq"),_g=o(" model, preferably "),lr=a("a"),fg=o("TFBartForConditionalGeneration"),vg=o("."),bg=p(),I=a("p"),Tg=o("The model can be initialized with a "),pr=a("a"),wg=o("RagRetriever"),kg=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),fs=a("em"),qg=o("autoencoding"),yg=o(" model as the "),vs=a("code"),xg=o("question_encoder"),Rg=o(" and any "),bs=a("em"),Fg=o("seq2seq"),$g=o(" model with language model head as the "),Ts=a("code"),zg=o("generator"),Eg=o(`.
It has been tested with `),hr=a("a"),jg=o("TFDPRQuestionEncoder"),Gg=o(" as the "),ws=a("code"),Mg=o("question_encoder"),Ag=o(" and "),mr=a("a"),Pg=o("TFBartForConditionalGeneration"),Ng=o(`
as the `),ks=a("code"),Og=o("generator"),Cg=o("."),Sg=p(),Ko=a("p"),Lg=o("This model inherits from "),ur=a("a"),Dg=o("TFPreTrainedModel"),Ig=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wg=p(),Yo=a("p"),Hg=o("This model is also a Tensorflow "),Jo=a("a"),Bg=o("tf.keras.Model"),Qg=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Ug=p(),qs=a("p"),Vg=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Kg=p(),me=a("div"),T(Xo.$$.fragment),Yg=p(),Ue=a("p"),Jg=o("The "),gr=a("a"),Xg=o("TFRagTokenForGeneration"),Zg=o(" forward method, overrides the "),ys=a("code"),e_=o("__call__"),t_=o(" special method."),o_=p(),T(Mt.$$.fragment),n_=p(),T(At.$$.fragment),r_=p(),Pt=a("div"),T(Zo.$$.fragment),a_=p(),xs=a("p"),s_=o("Implements TFRAG token decoding."),this.h()},l(r){const _=xb('[data-svelte="svelte-1phssyn"]',document.head);c=s(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(r),u=s(r,"H1",{class:!0});var en=d(u);g=s(en,"A",{id:!0,class:!0,href:!0});var Rs=d(g);f=s(Rs,"SPAN",{});var Fs=d(f);w(i.$$.fragment,Fs),Fs.forEach(t),Rs.forEach(t),m=h(en),R=s(en,"SPAN",{});var $s=d(R);Yd=n($s,"RAG"),$s.forEach(t),en.forEach(t),Ls=h(r),qe=s(r,"H2",{class:!0});var tn=d(qe);Ke=s(tn,"A",{id:!0,class:!0,href:!0});var zs=d(Ke);zr=s(zs,"SPAN",{});var Es=d(zr);w(Wt.$$.fragment,Es),Es.forEach(t),zs.forEach(t),Jd=h(tn),Er=s(tn,"SPAN",{});var js=d(Er);Xd=n(js,"Overview"),js.forEach(t),tn.forEach(t),Ds=h(r),cn=s(r,"P",{});var Gs=d(cn);Zd=n(Gs,`Retrieval-augmented generation (\u201CRAG\u201D) models combine the powers of pretrained dense retrieval (DPR) and
sequence-to-sequence models. RAG models retrieve documents, pass them to a seq2seq model, then marginalize to generate
outputs. The retriever and seq2seq modules are initialized from pretrained models, and fine-tuned jointly, allowing
both retrieval and generation to adapt to downstream tasks.`),Gs.forEach(t),Is=h(r),Ye=s(r,"P",{});var on=d(Ye);ei=n(on,"It is based on the paper "),Ht=s(on,"A",{href:!0,rel:!0});var Ms=d(Ht);ti=n(Ms,"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"),Ms.forEach(t),oi=n(on,` by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich K\xFCttler, Mike Lewis, Wen-tau Yih, Tim Rockt\xE4schel, Sebastian Riedel, Douwe Kiela.`),on.forEach(t),Ws=h(r),ln=s(r,"P",{});var As=d(ln);ni=n(As,"The abstract from the paper is the following:"),As.forEach(t),Hs=h(r),pn=s(r,"P",{});var Ps=d(pn);jr=s(Ps,"EM",{});var Ns=d(jr);ri=n(Ns,`Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve
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
parametric-only seq2seq baseline.`),Ns.forEach(t),Ps.forEach(t),Bs=h(r),Je=s(r,"P",{});var nn=d(Je);ai=n(nn,"This model was contributed by "),Bt=s(nn,"A",{href:!0,rel:!0});var Os=d(Bt);si=n(Os,"ola13"),Os.forEach(t),di=n(nn,"."),nn.forEach(t),Qs=h(r),ye=s(r,"H2",{class:!0});var rn=d(ye);Xe=s(rn,"A",{id:!0,class:!0,href:!0});var Cs=d(Xe);Gr=s(Cs,"SPAN",{});var Ss=d(Gr);w(Qt.$$.fragment,Ss),Ss.forEach(t),Cs.forEach(t),ii=h(rn),Mr=s(rn,"SPAN",{});var d_=d(Mr);ci=n(d_,"RagConfig"),d_.forEach(t),rn.forEach(t),Us=h(r),ee=s(r,"DIV",{class:!0});var Nt=d(ee);w(Ut.$$.fragment,Nt),li=h(Nt),de=s(Nt,"P",{});var Ve=d(de);hn=s(Ve,"A",{href:!0});var i_=d(hn);pi=n(i_,"RagConfig"),i_.forEach(t),hi=n(Ve," stores the configuration of a "),Ar=s(Ve,"EM",{});var c_=d(Ar);mi=n(c_,"RagModel"),c_.forEach(t),ui=n(Ve,". Configuration objects inherit from "),mn=s(Ve,"A",{href:!0});var l_=d(mn);gi=n(l_,"PretrainedConfig"),l_.forEach(t),_i=n(Ve,` and
can be used to control the model outputs. Read the documentation from `),un=s(Ve,"A",{href:!0});var p_=d(un);fi=n(p_,"PretrainedConfig"),p_.forEach(t),vi=n(Ve," for more information."),Ve.forEach(t),bi=h(Nt),Ze=s(Nt,"DIV",{class:!0});var ud=d(Ze);w(Vt.$$.fragment,ud),Ti=h(ud),Kt=s(ud,"P",{});var gd=d(Kt);wi=n(gd,"Instantiate a "),gn=s(gd,"A",{href:!0});var h_=d(gn);ki=n(h_,"EncoderDecoderConfig"),h_.forEach(t),qi=n(gd,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),gd.forEach(t),ud.forEach(t),yi=h(Nt),et=s(Nt,"DIV",{class:!0});var _d=d(et);w(Yt.$$.fragment,_d),xi=h(_d),Jt=s(_d,"P",{});var fd=d(Jt);Ri=n(fd,"Serializes this instance to a Python dictionary. Override the default "),_n=s(fd,"A",{href:!0});var m_=d(_n);Fi=n(m_,"to_dict()"),m_.forEach(t),$i=n(fd,"."),fd.forEach(t),_d.forEach(t),Nt.forEach(t),Vs=h(r),xe=s(r,"H2",{class:!0});var vd=d(xe);tt=s(vd,"A",{id:!0,class:!0,href:!0});var u_=d(tt);Pr=s(u_,"SPAN",{});var g_=d(Pr);w(Xt.$$.fragment,g_),g_.forEach(t),u_.forEach(t),zi=h(vd),Nr=s(vd,"SPAN",{});var __=d(Nr);Ei=n(__,"RagTokenizer"),__.forEach(t),vd.forEach(t),Ks=h(r),Zt=s(r,"DIV",{class:!0});var f_=d(Zt);w(eo.$$.fragment,f_),f_.forEach(t),Ys=h(r),Re=s(r,"H2",{class:!0});var bd=d(Re);ot=s(bd,"A",{id:!0,class:!0,href:!0});var v_=d(ot);Or=s(v_,"SPAN",{});var b_=d(Or);w(to.$$.fragment,b_),b_.forEach(t),v_.forEach(t),ji=h(bd),Cr=s(bd,"SPAN",{});var T_=d(Cr);Gi=n(T_,"Rag specific outputs"),T_.forEach(t),bd.forEach(t),Js=h(r),Fe=s(r,"DIV",{class:!0});var Td=d(Fe);w(oo.$$.fragment,Td),Mi=h(Td),Sr=s(Td,"P",{});var w_=d(Sr);Ai=n(w_,"Base class for retriever augmented marginalized models outputs."),w_.forEach(t),Td.forEach(t),Xs=h(r),no=s(r,"DIV",{class:!0});var k_=d(no);w(ro.$$.fragment,k_),k_.forEach(t),Zs=h(r),$e=s(r,"H2",{class:!0});var wd=d($e);nt=s(wd,"A",{id:!0,class:!0,href:!0});var q_=d(nt);Lr=s(q_,"SPAN",{});var y_=d(Lr);w(ao.$$.fragment,y_),y_.forEach(t),q_.forEach(t),Pi=h(wd),Dr=s(wd,"SPAN",{});var x_=d(Dr);Ni=n(x_,"RagRetriever"),x_.forEach(t),wd.forEach(t),ed=h(r),Z=s(r,"DIV",{class:!0});var ue=d(Z);w(so.$$.fragment,ue),Oi=h(ue),Ir=s(ue,"P",{});var R_=d(Ir);Ci=n(R_,`Retriever used to get documents from vector queries. It retrieves the documents embeddings as well as the documents
contents, and it formats them to be used with a RagModel.`),R_.forEach(t),Si=h(ue),w(rt.$$.fragment,ue),Li=h(ue),at=s(ue,"DIV",{class:!0});var kd=d(at);w(io.$$.fragment,kd),Di=h(kd),Wr=s(kd,"P",{});var F_=d(Wr);Ii=n(F_,"Retriever initialization function. It loads the index into memory."),F_.forEach(t),kd.forEach(t),Wi=h(ue),st=s(ue,"DIV",{class:!0});var qd=d(st);w(co.$$.fragment,qd),Hi=h(qd),ze=s(qd,"P",{});var _r=d(ze);Bi=n(_r,"Postprocessing retrieved "),Hr=s(_r,"CODE",{});var $_=d(Hr);Qi=n($_,"docs"),$_.forEach(t),Ui=n(_r," and combining them with "),Br=s(_r,"CODE",{});var z_=d(Br);Vi=n(z_,"input_strings"),z_.forEach(t),Ki=n(_r,"."),_r.forEach(t),qd.forEach(t),Yi=h(ue),dt=s(ue,"DIV",{class:!0});var yd=d(dt);w(lo.$$.fragment,yd),Ji=h(yd),po=s(yd,"P",{});var xd=d(po);Xi=n(xd,"Retrieves documents for specified "),Qr=s(xd,"CODE",{});var E_=d(Qr);Zi=n(E_,"question_hidden_states"),E_.forEach(t),ec=n(xd,"."),xd.forEach(t),yd.forEach(t),ue.forEach(t),td=h(r),Ee=s(r,"H2",{class:!0});var Rd=d(Ee);it=s(Rd,"A",{id:!0,class:!0,href:!0});var j_=d(it);Ur=s(j_,"SPAN",{});var G_=d(Ur);w(ho.$$.fragment,G_),G_.forEach(t),j_.forEach(t),tc=h(Rd),Vr=s(Rd,"SPAN",{});var M_=d(Vr);oc=n(M_,"RagModel"),M_.forEach(t),Rd.forEach(t),od=h(r),S=s(r,"DIV",{class:!0});var X=d(S);w(mo.$$.fragment,X),nc=h(X),je=s(X,"P",{});var fr=d(je);rc=n(fr,"The "),fn=s(fr,"A",{href:!0});var A_=d(fn);ac=n(A_,"RagModel"),A_.forEach(t),sc=n(fr," forward method, overrides the "),Kr=s(fr,"CODE",{});var P_=d(Kr);dc=n(P_,"__call__"),P_.forEach(t),ic=n(fr," special method."),fr.forEach(t),cc=h(X),w(ct.$$.fragment,X),lc=h(X),Yr=s(X,"P",{});var N_=d(Yr);pc=n(N_,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),N_.forEach(t),hc=h(X),te=s(X,"P",{});var fe=d(te);mc=n(fe,"The question encoder can be any "),Jr=s(fe,"EM",{});var O_=d(Jr);uc=n(O_,"autoencoding"),O_.forEach(t),gc=n(fe," model, preferably "),vn=s(fe,"A",{href:!0});var C_=d(vn);_c=n(C_,"DPRQuestionEncoder"),C_.forEach(t),fc=n(fe,`, and the generator can be
any `),Xr=s(fe,"EM",{});var S_=d(Xr);vc=n(S_,"seq2seq"),S_.forEach(t),bc=n(fe," model, preferably "),bn=s(fe,"A",{href:!0});var L_=d(bn);Tc=n(L_,"BartForConditionalGeneration"),L_.forEach(t),wc=n(fe,"."),fe.forEach(t),kc=h(X),M=s(X,"P",{});var W=d(M);qc=n(W,"The model can be initialized with a "),Tn=s(W,"A",{href:!0});var D_=d(Tn);yc=n(D_,"RagRetriever"),D_.forEach(t),xc=n(W,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Zr=s(W,"EM",{});var I_=d(Zr);Rc=n(I_,"autoencoding"),I_.forEach(t),Fc=n(W," model as the "),ea=s(W,"CODE",{});var W_=d(ea);$c=n(W_,"question_encoder"),W_.forEach(t),zc=n(W," and any "),ta=s(W,"EM",{});var H_=d(ta);Ec=n(H_,"seq2seq"),H_.forEach(t),jc=n(W," model with language model head as the "),oa=s(W,"CODE",{});var B_=d(oa);Gc=n(B_,"generator"),B_.forEach(t),Mc=n(W,`.
It has been tested with `),wn=s(W,"A",{href:!0});var Q_=d(wn);Ac=n(Q_,"DPRQuestionEncoder"),Q_.forEach(t),Pc=n(W," as the "),na=s(W,"CODE",{});var U_=d(na);Nc=n(U_,"question_encoder"),U_.forEach(t),Oc=n(W," and "),kn=s(W,"A",{href:!0});var V_=d(kn);Cc=n(V_,"BartForConditionalGeneration"),V_.forEach(t),Sc=n(W,` or
`),qn=s(W,"A",{href:!0});var K_=d(qn);Lc=n(K_,"T5ForConditionalGeneration"),K_.forEach(t),Dc=n(W," as the "),ra=s(W,"CODE",{});var Y_=d(ra);Ic=n(Y_,"generator"),Y_.forEach(t),Wc=n(W,"."),W.forEach(t),Hc=h(X),uo=s(X,"P",{});var Fd=d(uo);Bc=n(Fd,"This model inherits from "),yn=s(Fd,"A",{href:!0});var J_=d(yn);Qc=n(J_,"PreTrainedModel"),J_.forEach(t),Uc=n(Fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd.forEach(t),Vc=h(X),go=s(X,"P",{});var $d=d(go);Kc=n($d,"This model is also a PyTorch "),_o=s($d,"A",{href:!0,rel:!0});var X_=d(_o);Yc=n(X_,"torch.nn.Module"),X_.forEach(t),Jc=n($d,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$d.forEach(t),Xc=h(X),ie=s(X,"DIV",{class:!0});var Ot=d(ie);w(fo.$$.fragment,Ot),Zc=h(Ot),Ge=s(Ot,"P",{});var vr=d(Ge);el=n(vr,"The "),xn=s(vr,"A",{href:!0});var Z_=d(xn);tl=n(Z_,"RagModel"),Z_.forEach(t),ol=n(vr," forward method, overrides the "),aa=s(vr,"CODE",{});var ef=d(aa);nl=n(ef,"__call__"),ef.forEach(t),rl=n(vr," special method."),vr.forEach(t),al=h(Ot),w(lt.$$.fragment,Ot),sl=h(Ot),w(pt.$$.fragment,Ot),Ot.forEach(t),X.forEach(t),nd=h(r),Me=s(r,"H2",{class:!0});var zd=d(Me);ht=s(zd,"A",{id:!0,class:!0,href:!0});var tf=d(ht);sa=s(tf,"SPAN",{});var of=d(sa);w(vo.$$.fragment,of),of.forEach(t),tf.forEach(t),dl=h(zd),da=s(zd,"SPAN",{});var nf=d(da);il=n(nf,"RagSequenceForGeneration"),nf.forEach(t),zd.forEach(t),rd=h(r),E=s(r,"DIV",{class:!0});var H=d(E);w(bo.$$.fragment,H),cl=h(H),Ae=s(H,"P",{});var br=d(Ae);ll=n(br,"The "),Rn=s(br,"A",{href:!0});var rf=d(Rn);pl=n(rf,"RagSequenceForGeneration"),rf.forEach(t),hl=n(br," forward method, overrides the "),ia=s(br,"CODE",{});var af=d(ia);ml=n(af,"__call__"),af.forEach(t),ul=n(br," special method."),br.forEach(t),gl=h(H),w(mt.$$.fragment,H),_l=h(H),ca=s(H,"P",{});var sf=d(ca);fl=n(sf,"A RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),sf.forEach(t),vl=h(H),la=s(H,"P",{});var df=d(la);bl=n(df,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),df.forEach(t),Tl=h(H),oe=s(H,"P",{});var ve=d(oe);wl=n(ve,"The question encoder can be any "),pa=s(ve,"EM",{});var cf=d(pa);kl=n(cf,"autoencoding"),cf.forEach(t),ql=n(ve," model, preferably "),Fn=s(ve,"A",{href:!0});var lf=d(Fn);yl=n(lf,"DPRQuestionEncoder"),lf.forEach(t),xl=n(ve,`, and the generator can be
any `),ha=s(ve,"EM",{});var pf=d(ha);Rl=n(pf,"seq2seq"),pf.forEach(t),Fl=n(ve," model, preferably "),$n=s(ve,"A",{href:!0});var hf=d($n);$l=n(hf,"BartForConditionalGeneration"),hf.forEach(t),zl=n(ve,"."),ve.forEach(t),El=h(H),A=s(H,"P",{});var B=d(A);jl=n(B,"The model can be initialized with a "),zn=s(B,"A",{href:!0});var mf=d(zn);Gl=n(mf,"RagRetriever"),mf.forEach(t),Ml=n(B,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),ma=s(B,"EM",{});var uf=d(ma);Al=n(uf,"autoencoding"),uf.forEach(t),Pl=n(B," model as the "),ua=s(B,"CODE",{});var gf=d(ua);Nl=n(gf,"question_encoder"),gf.forEach(t),Ol=n(B," and any "),ga=s(B,"EM",{});var _f=d(ga);Cl=n(_f,"seq2seq"),_f.forEach(t),Sl=n(B," model with language model head as the "),_a=s(B,"CODE",{});var ff=d(_a);Ll=n(ff,"generator"),ff.forEach(t),Dl=n(B,`.
It has been tested with `),En=s(B,"A",{href:!0});var vf=d(En);Il=n(vf,"DPRQuestionEncoder"),vf.forEach(t),Wl=n(B," as the "),fa=s(B,"CODE",{});var bf=d(fa);Hl=n(bf,"question_encoder"),bf.forEach(t),Bl=n(B," and "),jn=s(B,"A",{href:!0});var Tf=d(jn);Ql=n(Tf,"BartForConditionalGeneration"),Tf.forEach(t),Ul=n(B,` or
`),Gn=s(B,"A",{href:!0});var wf=d(Gn);Vl=n(wf,"T5ForConditionalGeneration"),wf.forEach(t),Kl=n(B," as the "),va=s(B,"CODE",{});var kf=d(va);Yl=n(kf,"generator"),kf.forEach(t),Jl=n(B,"."),B.forEach(t),Xl=h(H),To=s(H,"P",{});var Ed=d(To);Zl=n(Ed,"This model inherits from "),Mn=s(Ed,"A",{href:!0});var qf=d(Mn);ep=n(qf,"PreTrainedModel"),qf.forEach(t),tp=n(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),op=h(H),wo=s(H,"P",{});var jd=d(wo);np=n(jd,"This model is also a PyTorch "),ko=s(jd,"A",{href:!0,rel:!0});var yf=d(ko);rp=n(yf,"torch.nn.Module"),yf.forEach(t),ap=n(jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd.forEach(t),sp=h(H),ce=s(H,"DIV",{class:!0});var Ct=d(ce);w(qo.$$.fragment,Ct),dp=h(Ct),Pe=s(Ct,"P",{});var Tr=d(Pe);ip=n(Tr,"The "),An=s(Tr,"A",{href:!0});var xf=d(An);cp=n(xf,"RagSequenceForGeneration"),xf.forEach(t),lp=n(Tr," forward method, overrides the "),ba=s(Tr,"CODE",{});var Rf=d(ba);pp=n(Rf,"__call__"),Rf.forEach(t),hp=n(Tr," special method."),Tr.forEach(t),mp=h(Ct),w(ut.$$.fragment,Ct),up=h(Ct),w(gt.$$.fragment,Ct),Ct.forEach(t),gp=h(H),_t=s(H,"DIV",{class:!0});var Gd=d(_t);w(yo.$$.fragment,Gd),_p=h(Gd),xo=s(Gd,"P",{});var Md=d(xo);fp=n(Md,"Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),Pn=s(Md,"A",{href:!0});var Ff=d(Pn);vp=n(Ff,"generate()"),Ff.forEach(t),bp=n(Md,"`\ndocumentation for more information on how to set other generate input parameters."),Md.forEach(t),Gd.forEach(t),H.forEach(t),ad=h(r),Ne=s(r,"H2",{class:!0});var Ad=d(Ne);ft=s(Ad,"A",{id:!0,class:!0,href:!0});var $f=d(ft);Ta=s($f,"SPAN",{});var zf=d(Ta);w(Ro.$$.fragment,zf),zf.forEach(t),$f.forEach(t),Tp=h(Ad),wa=s(Ad,"SPAN",{});var Ef=d(wa);wp=n(Ef,"RagTokenForGeneration"),Ef.forEach(t),Ad.forEach(t),sd=h(r),j=s(r,"DIV",{class:!0});var Q=d(j);w(Fo.$$.fragment,Q),kp=h(Q),Oe=s(Q,"P",{});var wr=d(Oe);qp=n(wr,"The "),Nn=s(wr,"A",{href:!0});var jf=d(Nn);yp=n(jf,"RagTokenForGeneration"),jf.forEach(t),xp=n(wr," forward method, overrides the "),ka=s(wr,"CODE",{});var Gf=d(ka);Rp=n(Gf,"__call__"),Gf.forEach(t),Fp=n(wr," special method."),wr.forEach(t),$p=h(Q),w(vt.$$.fragment,Q),zp=h(Q),qa=s(Q,"P",{});var Mf=d(qa);Ep=n(Mf,"A RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),Mf.forEach(t),jp=h(Q),ya=s(Q,"P",{});var Af=d(ya);Gp=n(Af,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Af.forEach(t),Mp=h(Q),ne=s(Q,"P",{});var be=d(ne);Ap=n(be,"The question encoder can be any "),xa=s(be,"EM",{});var Pf=d(xa);Pp=n(Pf,"autoencoding"),Pf.forEach(t),Np=n(be," model, preferably "),On=s(be,"A",{href:!0});var Nf=d(On);Op=n(Nf,"DPRQuestionEncoder"),Nf.forEach(t),Cp=n(be,`, and the generator can be
any `),Ra=s(be,"EM",{});var Of=d(Ra);Sp=n(Of,"seq2seq"),Of.forEach(t),Lp=n(be," model, preferably "),Cn=s(be,"A",{href:!0});var Cf=d(Cn);Dp=n(Cf,"BartForConditionalGeneration"),Cf.forEach(t),Ip=n(be,"."),be.forEach(t),Wp=h(Q),P=s(Q,"P",{});var U=d(P);Hp=n(U,"The model can be initialized with a "),Sn=s(U,"A",{href:!0});var Sf=d(Sn);Bp=n(Sf,"RagRetriever"),Sf.forEach(t),Qp=n(U,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Fa=s(U,"EM",{});var Lf=d(Fa);Up=n(Lf,"autoencoding"),Lf.forEach(t),Vp=n(U," model as the "),$a=s(U,"CODE",{});var Df=d($a);Kp=n(Df,"question_encoder"),Df.forEach(t),Yp=n(U," and any "),za=s(U,"EM",{});var If=d(za);Jp=n(If,"seq2seq"),If.forEach(t),Xp=n(U," model with language model head as the "),Ea=s(U,"CODE",{});var Wf=d(Ea);Zp=n(Wf,"generator"),Wf.forEach(t),eh=n(U,`.
It has been tested with `),Ln=s(U,"A",{href:!0});var Hf=d(Ln);th=n(Hf,"DPRQuestionEncoder"),Hf.forEach(t),oh=n(U," as the "),ja=s(U,"CODE",{});var Bf=d(ja);nh=n(Bf,"question_encoder"),Bf.forEach(t),rh=n(U," and "),Dn=s(U,"A",{href:!0});var Qf=d(Dn);ah=n(Qf,"BartForConditionalGeneration"),Qf.forEach(t),sh=n(U,` or
`),In=s(U,"A",{href:!0});var Uf=d(In);dh=n(Uf,"T5ForConditionalGeneration"),Uf.forEach(t),ih=n(U," as the "),Ga=s(U,"CODE",{});var Vf=d(Ga);ch=n(Vf,"generator"),Vf.forEach(t),lh=n(U,"."),U.forEach(t),ph=h(Q),$o=s(Q,"P",{});var Pd=d($o);hh=n(Pd,"This model inherits from "),Wn=s(Pd,"A",{href:!0});var Kf=d(Wn);mh=n(Kf,"PreTrainedModel"),Kf.forEach(t),uh=n(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),gh=h(Q),zo=s(Q,"P",{});var Nd=d(zo);_h=n(Nd,"This model is also a PyTorch "),Eo=s(Nd,"A",{href:!0,rel:!0});var Yf=d(Eo);fh=n(Yf,"torch.nn.Module"),Yf.forEach(t),vh=n(Nd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd.forEach(t),bh=h(Q),le=s(Q,"DIV",{class:!0});var St=d(le);w(jo.$$.fragment,St),Th=h(St),Ce=s(St,"P",{});var kr=d(Ce);wh=n(kr,"The "),Hn=s(kr,"A",{href:!0});var Jf=d(Hn);kh=n(Jf,"RagTokenForGeneration"),Jf.forEach(t),qh=n(kr," forward method, overrides the "),Ma=s(kr,"CODE",{});var Xf=d(Ma);yh=n(Xf,"__call__"),Xf.forEach(t),xh=n(kr," special method."),kr.forEach(t),Rh=h(St),w(bt.$$.fragment,St),Fh=h(St),w(Tt.$$.fragment,St),St.forEach(t),$h=h(Q),wt=s(Q,"DIV",{class:!0});var Od=d(wt);w(Go.$$.fragment,Od),zh=h(Od),Aa=s(Od,"P",{});var Zf=d(Aa);Eh=n(Zf,"Implements RAG token decoding."),Zf.forEach(t),Od.forEach(t),Q.forEach(t),dd=h(r),Se=s(r,"H2",{class:!0});var Cd=d(Se);kt=s(Cd,"A",{id:!0,class:!0,href:!0});var ev=d(kt);Pa=s(ev,"SPAN",{});var tv=d(Pa);w(Mo.$$.fragment,tv),tv.forEach(t),ev.forEach(t),jh=h(Cd),Na=s(Cd,"SPAN",{});var ov=d(Na);Gh=n(ov,"TFRagModel"),ov.forEach(t),Cd.forEach(t),id=h(r),N=s(r,"DIV",{class:!0});var V=d(N);w(Ao.$$.fragment,V),Mh=h(V),Le=s(V,"P",{});var qr=d(Le);Ah=n(qr,"The "),Bn=s(qr,"A",{href:!0});var nv=d(Bn);Ph=n(nv,"TFRagModel"),nv.forEach(t),Nh=n(qr," forward method, overrides the "),Oa=s(qr,"CODE",{});var rv=d(Oa);Oh=n(rv,"__call__"),rv.forEach(t),Ch=n(qr," special method."),qr.forEach(t),Sh=h(V),w(qt.$$.fragment,V),Lh=h(V),Ca=s(V,"P",{});var av=d(Ca);Dh=n(av,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),av.forEach(t),Ih=h(V),re=s(V,"P",{});var Te=d(re);Wh=n(Te,"The question encoder can be any "),Sa=s(Te,"EM",{});var sv=d(Sa);Hh=n(sv,"autoencoding"),sv.forEach(t),Bh=n(Te," model, preferably "),Qn=s(Te,"A",{href:!0});var dv=d(Qn);Qh=n(dv,"TFDPRQuestionEncoder"),dv.forEach(t),Uh=n(Te,`, and the generator can be
any `),La=s(Te,"EM",{});var iv=d(La);Vh=n(iv,"seq2seq"),iv.forEach(t),Kh=n(Te," model, preferably "),Un=s(Te,"A",{href:!0});var cv=d(Un);Yh=n(cv,"TFBartForConditionalGeneration"),cv.forEach(t),Jh=n(Te,"."),Te.forEach(t),Xh=h(V),L=s(V,"P",{});var K=d(L);Zh=n(K,"The model can be initialized with a "),Vn=s(K,"A",{href:!0});var lv=d(Vn);em=n(lv,"RagRetriever"),lv.forEach(t),tm=n(K,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Da=s(K,"EM",{});var pv=d(Da);om=n(pv,"autoencoding"),pv.forEach(t),nm=n(K," model as the "),Ia=s(K,"CODE",{});var hv=d(Ia);rm=n(hv,"question_encoder"),hv.forEach(t),am=n(K," and any "),Wa=s(K,"EM",{});var mv=d(Wa);sm=n(mv,"seq2seq"),mv.forEach(t),dm=n(K," model with language model head as the "),Ha=s(K,"CODE",{});var uv=d(Ha);im=n(uv,"generator"),uv.forEach(t),cm=n(K,`.
It has been tested with `),Kn=s(K,"A",{href:!0});var gv=d(Kn);lm=n(gv,"TFDPRQuestionEncoder"),gv.forEach(t),pm=n(K," as the "),Ba=s(K,"CODE",{});var _v=d(Ba);hm=n(_v,"question_encoder"),_v.forEach(t),mm=n(K," and "),Yn=s(K,"A",{href:!0});var fv=d(Yn);um=n(fv,"TFBartForConditionalGeneration"),fv.forEach(t),gm=n(K,`
as the `),Qa=s(K,"CODE",{});var vv=d(Qa);_m=n(vv,"generator"),vv.forEach(t),fm=n(K,"."),K.forEach(t),vm=h(V),Po=s(V,"P",{});var Sd=d(Po);bm=n(Sd,"This model inherits from "),Jn=s(Sd,"A",{href:!0});var bv=d(Jn);Tm=n(bv,"TFPreTrainedModel"),bv.forEach(t),wm=n(Sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd.forEach(t),km=h(V),No=s(V,"P",{});var Ld=d(No);qm=n(Ld,"This model is also a Tensorflow "),Oo=s(Ld,"A",{href:!0,rel:!0});var Tv=d(Oo);ym=n(Tv,"tf.keras.Model"),Tv.forEach(t),xm=n(Ld,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Ld.forEach(t),Rm=h(V),Ua=s(V,"P",{});var wv=d(Ua);Fm=n(wv,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),wv.forEach(t),$m=h(V),pe=s(V,"DIV",{class:!0});var Lt=d(pe);w(Co.$$.fragment,Lt),zm=h(Lt),De=s(Lt,"P",{});var yr=d(De);Em=n(yr,"The "),Xn=s(yr,"A",{href:!0});var kv=d(Xn);jm=n(kv,"TFRagModel"),kv.forEach(t),Gm=n(yr," forward method, overrides the "),Va=s(yr,"CODE",{});var qv=d(Va);Mm=n(qv,"__call__"),qv.forEach(t),Am=n(yr," special method."),yr.forEach(t),Pm=h(Lt),w(yt.$$.fragment,Lt),Nm=h(Lt),w(xt.$$.fragment,Lt),Lt.forEach(t),V.forEach(t),cd=h(r),Ie=s(r,"H2",{class:!0});var Dd=d(Ie);Rt=s(Dd,"A",{id:!0,class:!0,href:!0});var yv=d(Rt);Ka=s(yv,"SPAN",{});var xv=d(Ka);w(So.$$.fragment,xv),xv.forEach(t),yv.forEach(t),Om=h(Dd),Ya=s(Dd,"SPAN",{});var Rv=d(Ya);Cm=n(Rv,"TFRagSequenceForGeneration"),Rv.forEach(t),Dd.forEach(t),ld=h(r),$=s(r,"DIV",{class:!0});var O=d($);w(Lo.$$.fragment,O),Sm=h(O),We=s(O,"P",{});var xr=d(We);Lm=n(xr,"The "),Zn=s(xr,"A",{href:!0});var Fv=d(Zn);Dm=n(Fv,"TFRagSequenceForGeneration"),Fv.forEach(t),Im=n(xr," forward method, overrides the "),Ja=s(xr,"CODE",{});var $v=d(Ja);Wm=n($v,"__call__"),$v.forEach(t),Hm=n(xr," special method."),xr.forEach(t),Bm=h(O),w(Ft.$$.fragment,O),Qm=h(O),Xa=s(O,"P",{});var zv=d(Xa);Um=n(zv,"A TF RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),zv.forEach(t),Vm=h(O),Za=s(O,"P",{});var Ev=d(Za);Km=n(Ev,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Ev.forEach(t),Ym=h(O),ae=s(O,"P",{});var we=d(ae);Jm=n(we,"The question encoder can be any "),es=s(we,"EM",{});var jv=d(es);Xm=n(jv,"autoencoding"),jv.forEach(t),Zm=n(we," model, preferably "),er=s(we,"A",{href:!0});var Gv=d(er);eu=n(Gv,"TFDPRQuestionEncoder"),Gv.forEach(t),tu=n(we,`, and the generator can be
any `),ts=s(we,"EM",{});var Mv=d(ts);ou=n(Mv,"seq2seq"),Mv.forEach(t),nu=n(we," model, preferably "),tr=s(we,"A",{href:!0});var Av=d(tr);ru=n(Av,"TFBartForConditionalGeneration"),Av.forEach(t),au=n(we,"."),we.forEach(t),su=h(O),D=s(O,"P",{});var Y=d(D);du=n(Y,"The model can be initialized with a "),or=s(Y,"A",{href:!0});var Pv=d(or);iu=n(Pv,"RagRetriever"),Pv.forEach(t),cu=n(Y,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),os=s(Y,"EM",{});var Nv=d(os);lu=n(Nv,"autoencoding"),Nv.forEach(t),pu=n(Y," model as the "),ns=s(Y,"CODE",{});var Ov=d(ns);hu=n(Ov,"question_encoder"),Ov.forEach(t),mu=n(Y," and any "),rs=s(Y,"EM",{});var Cv=d(rs);uu=n(Cv,"seq2seq"),Cv.forEach(t),gu=n(Y," model with language model head as the "),as=s(Y,"CODE",{});var Sv=d(as);_u=n(Sv,"generator"),Sv.forEach(t),fu=n(Y,`.
It has been tested with `),nr=s(Y,"A",{href:!0});var Lv=d(nr);vu=n(Lv,"TFDPRQuestionEncoder"),Lv.forEach(t),bu=n(Y," as the "),ss=s(Y,"CODE",{});var Dv=d(ss);Tu=n(Dv,"question_encoder"),Dv.forEach(t),wu=n(Y," and "),rr=s(Y,"A",{href:!0});var Iv=d(rr);ku=n(Iv,"TFBartForConditionalGeneration"),Iv.forEach(t),qu=n(Y,`
as the `),ds=s(Y,"CODE",{});var Wv=d(ds);yu=n(Wv,"generator"),Wv.forEach(t),xu=n(Y,"."),Y.forEach(t),Ru=h(O),Do=s(O,"P",{});var Id=d(Do);Fu=n(Id,"This model inherits from "),ar=s(Id,"A",{href:!0});var Hv=d(ar);$u=n(Hv,"TFPreTrainedModel"),Hv.forEach(t),zu=n(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Eu=h(O),Io=s(O,"P",{});var Wd=d(Io);ju=n(Wd,"This model is also a Tensorflow "),Wo=s(Wd,"A",{href:!0,rel:!0});var Bv=d(Wo);Gu=n(Bv,"tf.keras.Model"),Bv.forEach(t),Mu=n(Wd,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Wd.forEach(t),Au=h(O),is=s(O,"P",{});var Qv=d(is);Pu=n(Qv,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Qv.forEach(t),Nu=h(O),he=s(O,"DIV",{class:!0});var Dt=d(he);w(Ho.$$.fragment,Dt),Ou=h(Dt),He=s(Dt,"P",{});var Rr=d(He);Cu=n(Rr,"The "),sr=s(Rr,"A",{href:!0});var Uv=d(sr);Su=n(Uv,"TFRagSequenceForGeneration"),Uv.forEach(t),Lu=n(Rr," forward method, overrides the "),cs=s(Rr,"CODE",{});var Vv=d(cs);Du=n(Vv,"__call__"),Vv.forEach(t),Iu=n(Rr," special method."),Rr.forEach(t),Wu=h(Dt),w($t.$$.fragment,Dt),Hu=h(Dt),w(zt.$$.fragment,Dt),Dt.forEach(t),Bu=h(O),Et=s(O,"DIV",{class:!0});var Hd=d(Et);w(Bo.$$.fragment,Hd),Qu=h(Hd),Qo=s(Hd,"P",{});var Bd=d(Qo);Uu=n(Bd,"Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),dr=s(Bd,"A",{href:!0});var Kv=d(dr);Vu=n(Kv,"generate()"),Kv.forEach(t),Ku=n(Bd,"`\ndocumentation for more information on how to set other generate input parameters"),Bd.forEach(t),Hd.forEach(t),O.forEach(t),pd=h(r),Be=s(r,"H2",{class:!0});var Qd=d(Be);jt=s(Qd,"A",{id:!0,class:!0,href:!0});var Yv=d(jt);ls=s(Yv,"SPAN",{});var Jv=d(ls);w(Uo.$$.fragment,Jv),Jv.forEach(t),Yv.forEach(t),Yu=h(Qd),ps=s(Qd,"SPAN",{});var Xv=d(ps);Ju=n(Xv,"TFRagTokenForGeneration"),Xv.forEach(t),Qd.forEach(t),hd=h(r),z=s(r,"DIV",{class:!0});var C=d(z);w(Vo.$$.fragment,C),Xu=h(C),Qe=s(C,"P",{});var Fr=d(Qe);Zu=n(Fr,"The "),ir=s(Fr,"A",{href:!0});var Zv=d(ir);eg=n(Zv,"TFRagTokenForGeneration"),Zv.forEach(t),tg=n(Fr," forward method, overrides the "),hs=s(Fr,"CODE",{});var eb=d(hs);og=n(eb,"__call__"),eb.forEach(t),ng=n(Fr," special method."),Fr.forEach(t),rg=h(C),w(Gt.$$.fragment,C),ag=h(C),ms=s(C,"P",{});var tb=d(ms);sg=n(tb,"A TF RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),tb.forEach(t),dg=h(C),us=s(C,"P",{});var ob=d(us);ig=n(ob,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),ob.forEach(t),cg=h(C),se=s(C,"P",{});var ke=d(se);lg=n(ke,"The question encoder can be any "),gs=s(ke,"EM",{});var nb=d(gs);pg=n(nb,"autoencoding"),nb.forEach(t),hg=n(ke," model, preferably "),cr=s(ke,"A",{href:!0});var rb=d(cr);mg=n(rb,"TFDPRQuestionEncoder"),rb.forEach(t),ug=n(ke,`, and the generator can be
any `),_s=s(ke,"EM",{});var ab=d(_s);gg=n(ab,"seq2seq"),ab.forEach(t),_g=n(ke," model, preferably "),lr=s(ke,"A",{href:!0});var sb=d(lr);fg=n(sb,"TFBartForConditionalGeneration"),sb.forEach(t),vg=n(ke,"."),ke.forEach(t),bg=h(C),I=s(C,"P",{});var J=d(I);Tg=n(J,"The model can be initialized with a "),pr=s(J,"A",{href:!0});var db=d(pr);wg=n(db,"RagRetriever"),db.forEach(t),kg=n(J,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),fs=s(J,"EM",{});var ib=d(fs);qg=n(ib,"autoencoding"),ib.forEach(t),yg=n(J," model as the "),vs=s(J,"CODE",{});var cb=d(vs);xg=n(cb,"question_encoder"),cb.forEach(t),Rg=n(J," and any "),bs=s(J,"EM",{});var lb=d(bs);Fg=n(lb,"seq2seq"),lb.forEach(t),$g=n(J," model with language model head as the "),Ts=s(J,"CODE",{});var pb=d(Ts);zg=n(pb,"generator"),pb.forEach(t),Eg=n(J,`.
It has been tested with `),hr=s(J,"A",{href:!0});var hb=d(hr);jg=n(hb,"TFDPRQuestionEncoder"),hb.forEach(t),Gg=n(J," as the "),ws=s(J,"CODE",{});var mb=d(ws);Mg=n(mb,"question_encoder"),mb.forEach(t),Ag=n(J," and "),mr=s(J,"A",{href:!0});var ub=d(mr);Pg=n(ub,"TFBartForConditionalGeneration"),ub.forEach(t),Ng=n(J,`
as the `),ks=s(J,"CODE",{});var gb=d(ks);Og=n(gb,"generator"),gb.forEach(t),Cg=n(J,"."),J.forEach(t),Sg=h(C),Ko=s(C,"P",{});var Ud=d(Ko);Lg=n(Ud,"This model inherits from "),ur=s(Ud,"A",{href:!0});var _b=d(ur);Dg=n(_b,"TFPreTrainedModel"),_b.forEach(t),Ig=n(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),Wg=h(C),Yo=s(C,"P",{});var Vd=d(Yo);Hg=n(Vd,"This model is also a Tensorflow "),Jo=s(Vd,"A",{href:!0,rel:!0});var fb=d(Jo);Bg=n(fb,"tf.keras.Model"),fb.forEach(t),Qg=n(Vd,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Vd.forEach(t),Ug=h(C),qs=s(C,"P",{});var vb=d(qs);Vg=n(vb,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),vb.forEach(t),Kg=h(C),me=s(C,"DIV",{class:!0});var It=d(me);w(Xo.$$.fragment,It),Yg=h(It),Ue=s(It,"P",{});var $r=d(Ue);Jg=n($r,"The "),gr=s($r,"A",{href:!0});var bb=d(gr);Xg=n(bb,"TFRagTokenForGeneration"),bb.forEach(t),Zg=n($r," forward method, overrides the "),ys=s($r,"CODE",{});var Tb=d(ys);e_=n(Tb,"__call__"),Tb.forEach(t),t_=n($r," special method."),$r.forEach(t),o_=h(It),w(Mt.$$.fragment,It),n_=h(It),w(At.$$.fragment,It),It.forEach(t),r_=h(C),Pt=s(C,"DIV",{class:!0});var Kd=d(Pt);w(Zo.$$.fragment,Kd),a_=h(Kd),xs=s(Kd,"P",{});var wb=d(xs);s_=n(wb,"Implements TFRAG token decoding."),wb.forEach(t),Kd.forEach(t),C.forEach(t),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(Ub)),l(g,"id","rag"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#rag"),l(u,"class","relative group"),l(Ke,"id","overview"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#overview"),l(qe,"class","relative group"),l(Ht,"href","https://arxiv.org/abs/2005.11401"),l(Ht,"rel","nofollow"),l(Bt,"href","https://huggingface.co/ola13"),l(Bt,"rel","nofollow"),l(Xe,"id","transformers.RagConfig"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.RagConfig"),l(ye,"class","relative group"),l(hn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"),l(mn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(un,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(gn,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_n,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(tt,"id","transformers.RagTokenizer"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.RagTokenizer"),l(xe,"class","relative group"),l(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"),l(Re,"class","relative group"),l(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(nt,"id","transformers.RagRetriever"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.RagRetriever"),l($e,"class","relative group"),l(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(it,"id","transformers.RagModel"),l(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(it,"href","#transformers.RagModel"),l(Ee,"class","relative group"),l(fn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagModel"),l(vn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(bn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Tn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(wn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(kn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(qn,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(yn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(_o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(_o,"rel","nofollow"),l(xn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagModel"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"id","transformers.RagSequenceForGeneration"),l(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ht,"href","#transformers.RagSequenceForGeneration"),l(Me,"class","relative group"),l(Rn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagSequenceForGeneration"),l(Fn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l($n,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(zn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(En,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(jn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Gn,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(Mn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ko,"rel","nofollow"),l(An,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagSequenceForGeneration"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Pn,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ft,"id","transformers.RagTokenForGeneration"),l(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ft,"href","#transformers.RagTokenForGeneration"),l(Ne,"class","relative group"),l(Nn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration"),l(On,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(Cn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Sn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(Ln,"href","/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(Dn,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(In,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(Wn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Eo,"rel","nofollow"),l(Hn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(kt,"id","transformers.TFRagModel"),l(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(kt,"href","#transformers.TFRagModel"),l(Se,"class","relative group"),l(Bn,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel"),l(Qn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(Un,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(Vn,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(Kn,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(Yn,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(Jn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(Oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Oo,"rel","nofollow"),l(Xn,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Rt,"id","transformers.TFRagSequenceForGeneration"),l(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Rt,"href","#transformers.TFRagSequenceForGeneration"),l(Ie,"class","relative group"),l(Zn,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagSequenceForGeneration"),l(er,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(tr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(or,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(nr,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(rr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(ar,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Wo,"rel","nofollow"),l(sr,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagSequenceForGeneration"),l(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(dr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(jt,"id","transformers.TFRagTokenForGeneration"),l(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(jt,"href","#transformers.TFRagTokenForGeneration"),l(Be,"class","relative group"),l(ir,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagTokenForGeneration"),l(cr,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(lr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(pr,"href","/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever"),l(hr,"href","/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(mr,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(Jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Jo,"rel","nofollow"),l(gr,"href","/docs/transformers/main/en/model_doc/rag#transformers.TFRagTokenForGeneration"),l(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,_){e(document.head,c),v(r,b,_),v(r,u,_),e(u,g),e(g,f),k(i,f,null),e(u,m),e(u,R),e(R,Yd),v(r,Ls,_),v(r,qe,_),e(qe,Ke),e(Ke,zr),k(Wt,zr,null),e(qe,Jd),e(qe,Er),e(Er,Xd),v(r,Ds,_),v(r,cn,_),e(cn,Zd),v(r,Is,_),v(r,Ye,_),e(Ye,ei),e(Ye,Ht),e(Ht,ti),e(Ye,oi),v(r,Ws,_),v(r,ln,_),e(ln,ni),v(r,Hs,_),v(r,pn,_),e(pn,jr),e(jr,ri),v(r,Bs,_),v(r,Je,_),e(Je,ai),e(Je,Bt),e(Bt,si),e(Je,di),v(r,Qs,_),v(r,ye,_),e(ye,Xe),e(Xe,Gr),k(Qt,Gr,null),e(ye,ii),e(ye,Mr),e(Mr,ci),v(r,Us,_),v(r,ee,_),k(Ut,ee,null),e(ee,li),e(ee,de),e(de,hn),e(hn,pi),e(de,hi),e(de,Ar),e(Ar,mi),e(de,ui),e(de,mn),e(mn,gi),e(de,_i),e(de,un),e(un,fi),e(de,vi),e(ee,bi),e(ee,Ze),k(Vt,Ze,null),e(Ze,Ti),e(Ze,Kt),e(Kt,wi),e(Kt,gn),e(gn,ki),e(Kt,qi),e(ee,yi),e(ee,et),k(Yt,et,null),e(et,xi),e(et,Jt),e(Jt,Ri),e(Jt,_n),e(_n,Fi),e(Jt,$i),v(r,Vs,_),v(r,xe,_),e(xe,tt),e(tt,Pr),k(Xt,Pr,null),e(xe,zi),e(xe,Nr),e(Nr,Ei),v(r,Ks,_),v(r,Zt,_),k(eo,Zt,null),v(r,Ys,_),v(r,Re,_),e(Re,ot),e(ot,Or),k(to,Or,null),e(Re,ji),e(Re,Cr),e(Cr,Gi),v(r,Js,_),v(r,Fe,_),k(oo,Fe,null),e(Fe,Mi),e(Fe,Sr),e(Sr,Ai),v(r,Xs,_),v(r,no,_),k(ro,no,null),v(r,Zs,_),v(r,$e,_),e($e,nt),e(nt,Lr),k(ao,Lr,null),e($e,Pi),e($e,Dr),e(Dr,Ni),v(r,ed,_),v(r,Z,_),k(so,Z,null),e(Z,Oi),e(Z,Ir),e(Ir,Ci),e(Z,Si),k(rt,Z,null),e(Z,Li),e(Z,at),k(io,at,null),e(at,Di),e(at,Wr),e(Wr,Ii),e(Z,Wi),e(Z,st),k(co,st,null),e(st,Hi),e(st,ze),e(ze,Bi),e(ze,Hr),e(Hr,Qi),e(ze,Ui),e(ze,Br),e(Br,Vi),e(ze,Ki),e(Z,Yi),e(Z,dt),k(lo,dt,null),e(dt,Ji),e(dt,po),e(po,Xi),e(po,Qr),e(Qr,Zi),e(po,ec),v(r,td,_),v(r,Ee,_),e(Ee,it),e(it,Ur),k(ho,Ur,null),e(Ee,tc),e(Ee,Vr),e(Vr,oc),v(r,od,_),v(r,S,_),k(mo,S,null),e(S,nc),e(S,je),e(je,rc),e(je,fn),e(fn,ac),e(je,sc),e(je,Kr),e(Kr,dc),e(je,ic),e(S,cc),k(ct,S,null),e(S,lc),e(S,Yr),e(Yr,pc),e(S,hc),e(S,te),e(te,mc),e(te,Jr),e(Jr,uc),e(te,gc),e(te,vn),e(vn,_c),e(te,fc),e(te,Xr),e(Xr,vc),e(te,bc),e(te,bn),e(bn,Tc),e(te,wc),e(S,kc),e(S,M),e(M,qc),e(M,Tn),e(Tn,yc),e(M,xc),e(M,Zr),e(Zr,Rc),e(M,Fc),e(M,ea),e(ea,$c),e(M,zc),e(M,ta),e(ta,Ec),e(M,jc),e(M,oa),e(oa,Gc),e(M,Mc),e(M,wn),e(wn,Ac),e(M,Pc),e(M,na),e(na,Nc),e(M,Oc),e(M,kn),e(kn,Cc),e(M,Sc),e(M,qn),e(qn,Lc),e(M,Dc),e(M,ra),e(ra,Ic),e(M,Wc),e(S,Hc),e(S,uo),e(uo,Bc),e(uo,yn),e(yn,Qc),e(uo,Uc),e(S,Vc),e(S,go),e(go,Kc),e(go,_o),e(_o,Yc),e(go,Jc),e(S,Xc),e(S,ie),k(fo,ie,null),e(ie,Zc),e(ie,Ge),e(Ge,el),e(Ge,xn),e(xn,tl),e(Ge,ol),e(Ge,aa),e(aa,nl),e(Ge,rl),e(ie,al),k(lt,ie,null),e(ie,sl),k(pt,ie,null),v(r,nd,_),v(r,Me,_),e(Me,ht),e(ht,sa),k(vo,sa,null),e(Me,dl),e(Me,da),e(da,il),v(r,rd,_),v(r,E,_),k(bo,E,null),e(E,cl),e(E,Ae),e(Ae,ll),e(Ae,Rn),e(Rn,pl),e(Ae,hl),e(Ae,ia),e(ia,ml),e(Ae,ul),e(E,gl),k(mt,E,null),e(E,_l),e(E,ca),e(ca,fl),e(E,vl),e(E,la),e(la,bl),e(E,Tl),e(E,oe),e(oe,wl),e(oe,pa),e(pa,kl),e(oe,ql),e(oe,Fn),e(Fn,yl),e(oe,xl),e(oe,ha),e(ha,Rl),e(oe,Fl),e(oe,$n),e($n,$l),e(oe,zl),e(E,El),e(E,A),e(A,jl),e(A,zn),e(zn,Gl),e(A,Ml),e(A,ma),e(ma,Al),e(A,Pl),e(A,ua),e(ua,Nl),e(A,Ol),e(A,ga),e(ga,Cl),e(A,Sl),e(A,_a),e(_a,Ll),e(A,Dl),e(A,En),e(En,Il),e(A,Wl),e(A,fa),e(fa,Hl),e(A,Bl),e(A,jn),e(jn,Ql),e(A,Ul),e(A,Gn),e(Gn,Vl),e(A,Kl),e(A,va),e(va,Yl),e(A,Jl),e(E,Xl),e(E,To),e(To,Zl),e(To,Mn),e(Mn,ep),e(To,tp),e(E,op),e(E,wo),e(wo,np),e(wo,ko),e(ko,rp),e(wo,ap),e(E,sp),e(E,ce),k(qo,ce,null),e(ce,dp),e(ce,Pe),e(Pe,ip),e(Pe,An),e(An,cp),e(Pe,lp),e(Pe,ba),e(ba,pp),e(Pe,hp),e(ce,mp),k(ut,ce,null),e(ce,up),k(gt,ce,null),e(E,gp),e(E,_t),k(yo,_t,null),e(_t,_p),e(_t,xo),e(xo,fp),e(xo,Pn),e(Pn,vp),e(xo,bp),v(r,ad,_),v(r,Ne,_),e(Ne,ft),e(ft,Ta),k(Ro,Ta,null),e(Ne,Tp),e(Ne,wa),e(wa,wp),v(r,sd,_),v(r,j,_),k(Fo,j,null),e(j,kp),e(j,Oe),e(Oe,qp),e(Oe,Nn),e(Nn,yp),e(Oe,xp),e(Oe,ka),e(ka,Rp),e(Oe,Fp),e(j,$p),k(vt,j,null),e(j,zp),e(j,qa),e(qa,Ep),e(j,jp),e(j,ya),e(ya,Gp),e(j,Mp),e(j,ne),e(ne,Ap),e(ne,xa),e(xa,Pp),e(ne,Np),e(ne,On),e(On,Op),e(ne,Cp),e(ne,Ra),e(Ra,Sp),e(ne,Lp),e(ne,Cn),e(Cn,Dp),e(ne,Ip),e(j,Wp),e(j,P),e(P,Hp),e(P,Sn),e(Sn,Bp),e(P,Qp),e(P,Fa),e(Fa,Up),e(P,Vp),e(P,$a),e($a,Kp),e(P,Yp),e(P,za),e(za,Jp),e(P,Xp),e(P,Ea),e(Ea,Zp),e(P,eh),e(P,Ln),e(Ln,th),e(P,oh),e(P,ja),e(ja,nh),e(P,rh),e(P,Dn),e(Dn,ah),e(P,sh),e(P,In),e(In,dh),e(P,ih),e(P,Ga),e(Ga,ch),e(P,lh),e(j,ph),e(j,$o),e($o,hh),e($o,Wn),e(Wn,mh),e($o,uh),e(j,gh),e(j,zo),e(zo,_h),e(zo,Eo),e(Eo,fh),e(zo,vh),e(j,bh),e(j,le),k(jo,le,null),e(le,Th),e(le,Ce),e(Ce,wh),e(Ce,Hn),e(Hn,kh),e(Ce,qh),e(Ce,Ma),e(Ma,yh),e(Ce,xh),e(le,Rh),k(bt,le,null),e(le,Fh),k(Tt,le,null),e(j,$h),e(j,wt),k(Go,wt,null),e(wt,zh),e(wt,Aa),e(Aa,Eh),v(r,dd,_),v(r,Se,_),e(Se,kt),e(kt,Pa),k(Mo,Pa,null),e(Se,jh),e(Se,Na),e(Na,Gh),v(r,id,_),v(r,N,_),k(Ao,N,null),e(N,Mh),e(N,Le),e(Le,Ah),e(Le,Bn),e(Bn,Ph),e(Le,Nh),e(Le,Oa),e(Oa,Oh),e(Le,Ch),e(N,Sh),k(qt,N,null),e(N,Lh),e(N,Ca),e(Ca,Dh),e(N,Ih),e(N,re),e(re,Wh),e(re,Sa),e(Sa,Hh),e(re,Bh),e(re,Qn),e(Qn,Qh),e(re,Uh),e(re,La),e(La,Vh),e(re,Kh),e(re,Un),e(Un,Yh),e(re,Jh),e(N,Xh),e(N,L),e(L,Zh),e(L,Vn),e(Vn,em),e(L,tm),e(L,Da),e(Da,om),e(L,nm),e(L,Ia),e(Ia,rm),e(L,am),e(L,Wa),e(Wa,sm),e(L,dm),e(L,Ha),e(Ha,im),e(L,cm),e(L,Kn),e(Kn,lm),e(L,pm),e(L,Ba),e(Ba,hm),e(L,mm),e(L,Yn),e(Yn,um),e(L,gm),e(L,Qa),e(Qa,_m),e(L,fm),e(N,vm),e(N,Po),e(Po,bm),e(Po,Jn),e(Jn,Tm),e(Po,wm),e(N,km),e(N,No),e(No,qm),e(No,Oo),e(Oo,ym),e(No,xm),e(N,Rm),e(N,Ua),e(Ua,Fm),e(N,$m),e(N,pe),k(Co,pe,null),e(pe,zm),e(pe,De),e(De,Em),e(De,Xn),e(Xn,jm),e(De,Gm),e(De,Va),e(Va,Mm),e(De,Am),e(pe,Pm),k(yt,pe,null),e(pe,Nm),k(xt,pe,null),v(r,cd,_),v(r,Ie,_),e(Ie,Rt),e(Rt,Ka),k(So,Ka,null),e(Ie,Om),e(Ie,Ya),e(Ya,Cm),v(r,ld,_),v(r,$,_),k(Lo,$,null),e($,Sm),e($,We),e(We,Lm),e(We,Zn),e(Zn,Dm),e(We,Im),e(We,Ja),e(Ja,Wm),e(We,Hm),e($,Bm),k(Ft,$,null),e($,Qm),e($,Xa),e(Xa,Um),e($,Vm),e($,Za),e(Za,Km),e($,Ym),e($,ae),e(ae,Jm),e(ae,es),e(es,Xm),e(ae,Zm),e(ae,er),e(er,eu),e(ae,tu),e(ae,ts),e(ts,ou),e(ae,nu),e(ae,tr),e(tr,ru),e(ae,au),e($,su),e($,D),e(D,du),e(D,or),e(or,iu),e(D,cu),e(D,os),e(os,lu),e(D,pu),e(D,ns),e(ns,hu),e(D,mu),e(D,rs),e(rs,uu),e(D,gu),e(D,as),e(as,_u),e(D,fu),e(D,nr),e(nr,vu),e(D,bu),e(D,ss),e(ss,Tu),e(D,wu),e(D,rr),e(rr,ku),e(D,qu),e(D,ds),e(ds,yu),e(D,xu),e($,Ru),e($,Do),e(Do,Fu),e(Do,ar),e(ar,$u),e(Do,zu),e($,Eu),e($,Io),e(Io,ju),e(Io,Wo),e(Wo,Gu),e(Io,Mu),e($,Au),e($,is),e(is,Pu),e($,Nu),e($,he),k(Ho,he,null),e(he,Ou),e(he,He),e(He,Cu),e(He,sr),e(sr,Su),e(He,Lu),e(He,cs),e(cs,Du),e(He,Iu),e(he,Wu),k($t,he,null),e(he,Hu),k(zt,he,null),e($,Bu),e($,Et),k(Bo,Et,null),e(Et,Qu),e(Et,Qo),e(Qo,Uu),e(Qo,dr),e(dr,Vu),e(Qo,Ku),v(r,pd,_),v(r,Be,_),e(Be,jt),e(jt,ls),k(Uo,ls,null),e(Be,Yu),e(Be,ps),e(ps,Ju),v(r,hd,_),v(r,z,_),k(Vo,z,null),e(z,Xu),e(z,Qe),e(Qe,Zu),e(Qe,ir),e(ir,eg),e(Qe,tg),e(Qe,hs),e(hs,og),e(Qe,ng),e(z,rg),k(Gt,z,null),e(z,ag),e(z,ms),e(ms,sg),e(z,dg),e(z,us),e(us,ig),e(z,cg),e(z,se),e(se,lg),e(se,gs),e(gs,pg),e(se,hg),e(se,cr),e(cr,mg),e(se,ug),e(se,_s),e(_s,gg),e(se,_g),e(se,lr),e(lr,fg),e(se,vg),e(z,bg),e(z,I),e(I,Tg),e(I,pr),e(pr,wg),e(I,kg),e(I,fs),e(fs,qg),e(I,yg),e(I,vs),e(vs,xg),e(I,Rg),e(I,bs),e(bs,Fg),e(I,$g),e(I,Ts),e(Ts,zg),e(I,Eg),e(I,hr),e(hr,jg),e(I,Gg),e(I,ws),e(ws,Mg),e(I,Ag),e(I,mr),e(mr,Pg),e(I,Ng),e(I,ks),e(ks,Og),e(I,Cg),e(z,Sg),e(z,Ko),e(Ko,Lg),e(Ko,ur),e(ur,Dg),e(Ko,Ig),e(z,Wg),e(z,Yo),e(Yo,Hg),e(Yo,Jo),e(Jo,Bg),e(Yo,Qg),e(z,Ug),e(z,qs),e(qs,Vg),e(z,Kg),e(z,me),k(Xo,me,null),e(me,Yg),e(me,Ue),e(Ue,Jg),e(Ue,gr),e(gr,Xg),e(Ue,Zg),e(Ue,ys),e(ys,e_),e(Ue,t_),e(me,o_),k(Mt,me,null),e(me,n_),k(At,me,null),e(z,r_),e(z,Pt),k(Zo,Pt,null),e(Pt,a_),e(Pt,xs),e(xs,s_),md=!0},p(r,[_]){const en={};_&2&&(en.$$scope={dirty:_,ctx:r}),rt.$set(en);const Rs={};_&2&&(Rs.$$scope={dirty:_,ctx:r}),ct.$set(Rs);const Fs={};_&2&&(Fs.$$scope={dirty:_,ctx:r}),lt.$set(Fs);const $s={};_&2&&($s.$$scope={dirty:_,ctx:r}),pt.$set($s);const tn={};_&2&&(tn.$$scope={dirty:_,ctx:r}),mt.$set(tn);const zs={};_&2&&(zs.$$scope={dirty:_,ctx:r}),ut.$set(zs);const Es={};_&2&&(Es.$$scope={dirty:_,ctx:r}),gt.$set(Es);const js={};_&2&&(js.$$scope={dirty:_,ctx:r}),vt.$set(js);const Gs={};_&2&&(Gs.$$scope={dirty:_,ctx:r}),bt.$set(Gs);const on={};_&2&&(on.$$scope={dirty:_,ctx:r}),Tt.$set(on);const Ms={};_&2&&(Ms.$$scope={dirty:_,ctx:r}),qt.$set(Ms);const As={};_&2&&(As.$$scope={dirty:_,ctx:r}),yt.$set(As);const Ps={};_&2&&(Ps.$$scope={dirty:_,ctx:r}),xt.$set(Ps);const Ns={};_&2&&(Ns.$$scope={dirty:_,ctx:r}),Ft.$set(Ns);const nn={};_&2&&(nn.$$scope={dirty:_,ctx:r}),$t.$set(nn);const Os={};_&2&&(Os.$$scope={dirty:_,ctx:r}),zt.$set(Os);const rn={};_&2&&(rn.$$scope={dirty:_,ctx:r}),Gt.$set(rn);const Cs={};_&2&&(Cs.$$scope={dirty:_,ctx:r}),Mt.$set(Cs);const Ss={};_&2&&(Ss.$$scope={dirty:_,ctx:r}),At.$set(Ss)},i(r){md||(q(i.$$.fragment,r),q(Wt.$$.fragment,r),q(Qt.$$.fragment,r),q(Ut.$$.fragment,r),q(Vt.$$.fragment,r),q(Yt.$$.fragment,r),q(Xt.$$.fragment,r),q(eo.$$.fragment,r),q(to.$$.fragment,r),q(oo.$$.fragment,r),q(ro.$$.fragment,r),q(ao.$$.fragment,r),q(so.$$.fragment,r),q(rt.$$.fragment,r),q(io.$$.fragment,r),q(co.$$.fragment,r),q(lo.$$.fragment,r),q(ho.$$.fragment,r),q(mo.$$.fragment,r),q(ct.$$.fragment,r),q(fo.$$.fragment,r),q(lt.$$.fragment,r),q(pt.$$.fragment,r),q(vo.$$.fragment,r),q(bo.$$.fragment,r),q(mt.$$.fragment,r),q(qo.$$.fragment,r),q(ut.$$.fragment,r),q(gt.$$.fragment,r),q(yo.$$.fragment,r),q(Ro.$$.fragment,r),q(Fo.$$.fragment,r),q(vt.$$.fragment,r),q(jo.$$.fragment,r),q(bt.$$.fragment,r),q(Tt.$$.fragment,r),q(Go.$$.fragment,r),q(Mo.$$.fragment,r),q(Ao.$$.fragment,r),q(qt.$$.fragment,r),q(Co.$$.fragment,r),q(yt.$$.fragment,r),q(xt.$$.fragment,r),q(So.$$.fragment,r),q(Lo.$$.fragment,r),q(Ft.$$.fragment,r),q(Ho.$$.fragment,r),q($t.$$.fragment,r),q(zt.$$.fragment,r),q(Bo.$$.fragment,r),q(Uo.$$.fragment,r),q(Vo.$$.fragment,r),q(Gt.$$.fragment,r),q(Xo.$$.fragment,r),q(Mt.$$.fragment,r),q(At.$$.fragment,r),q(Zo.$$.fragment,r),md=!0)},o(r){y(i.$$.fragment,r),y(Wt.$$.fragment,r),y(Qt.$$.fragment,r),y(Ut.$$.fragment,r),y(Vt.$$.fragment,r),y(Yt.$$.fragment,r),y(Xt.$$.fragment,r),y(eo.$$.fragment,r),y(to.$$.fragment,r),y(oo.$$.fragment,r),y(ro.$$.fragment,r),y(ao.$$.fragment,r),y(so.$$.fragment,r),y(rt.$$.fragment,r),y(io.$$.fragment,r),y(co.$$.fragment,r),y(lo.$$.fragment,r),y(ho.$$.fragment,r),y(mo.$$.fragment,r),y(ct.$$.fragment,r),y(fo.$$.fragment,r),y(lt.$$.fragment,r),y(pt.$$.fragment,r),y(vo.$$.fragment,r),y(bo.$$.fragment,r),y(mt.$$.fragment,r),y(qo.$$.fragment,r),y(ut.$$.fragment,r),y(gt.$$.fragment,r),y(yo.$$.fragment,r),y(Ro.$$.fragment,r),y(Fo.$$.fragment,r),y(vt.$$.fragment,r),y(jo.$$.fragment,r),y(bt.$$.fragment,r),y(Tt.$$.fragment,r),y(Go.$$.fragment,r),y(Mo.$$.fragment,r),y(Ao.$$.fragment,r),y(qt.$$.fragment,r),y(Co.$$.fragment,r),y(yt.$$.fragment,r),y(xt.$$.fragment,r),y(So.$$.fragment,r),y(Lo.$$.fragment,r),y(Ft.$$.fragment,r),y(Ho.$$.fragment,r),y($t.$$.fragment,r),y(zt.$$.fragment,r),y(Bo.$$.fragment,r),y(Uo.$$.fragment,r),y(Vo.$$.fragment,r),y(Gt.$$.fragment,r),y(Xo.$$.fragment,r),y(Mt.$$.fragment,r),y(At.$$.fragment,r),y(Zo.$$.fragment,r),md=!1},d(r){t(c),r&&t(b),r&&t(u),x(i),r&&t(Ls),r&&t(qe),x(Wt),r&&t(Ds),r&&t(cn),r&&t(Is),r&&t(Ye),r&&t(Ws),r&&t(ln),r&&t(Hs),r&&t(pn),r&&t(Bs),r&&t(Je),r&&t(Qs),r&&t(ye),x(Qt),r&&t(Us),r&&t(ee),x(Ut),x(Vt),x(Yt),r&&t(Vs),r&&t(xe),x(Xt),r&&t(Ks),r&&t(Zt),x(eo),r&&t(Ys),r&&t(Re),x(to),r&&t(Js),r&&t(Fe),x(oo),r&&t(Xs),r&&t(no),x(ro),r&&t(Zs),r&&t($e),x(ao),r&&t(ed),r&&t(Z),x(so),x(rt),x(io),x(co),x(lo),r&&t(td),r&&t(Ee),x(ho),r&&t(od),r&&t(S),x(mo),x(ct),x(fo),x(lt),x(pt),r&&t(nd),r&&t(Me),x(vo),r&&t(rd),r&&t(E),x(bo),x(mt),x(qo),x(ut),x(gt),x(yo),r&&t(ad),r&&t(Ne),x(Ro),r&&t(sd),r&&t(j),x(Fo),x(vt),x(jo),x(bt),x(Tt),x(Go),r&&t(dd),r&&t(Se),x(Mo),r&&t(id),r&&t(N),x(Ao),x(qt),x(Co),x(yt),x(xt),r&&t(cd),r&&t(Ie),x(So),r&&t(ld),r&&t($),x(Lo),x(Ft),x(Ho),x($t),x(zt),x(Bo),r&&t(pd),r&&t(Be),x(Uo),r&&t(hd),r&&t(z),x(Vo),x(Gt),x(Xo),x(Mt),x(At),x(Zo)}}}const Ub={local:"rag",sections:[{local:"overview",title:"Overview"},{local:"transformers.RagConfig",title:"RagConfig"},{local:"transformers.RagTokenizer",title:"RagTokenizer"},{local:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",title:"Rag specific outputs"},{local:"transformers.RagRetriever",title:"RagRetriever"},{local:"transformers.RagModel",title:"RagModel"},{local:"transformers.RagSequenceForGeneration",title:"RagSequenceForGeneration"},{local:"transformers.RagTokenForGeneration",title:"RagTokenForGeneration"},{local:"transformers.TFRagModel",title:"TFRagModel"},{local:"transformers.TFRagSequenceForGeneration",title:"TFRagSequenceForGeneration"},{local:"transformers.TFRagTokenForGeneration",title:"TFRagTokenForGeneration"}],title:"RAG"};function Vb(F){return Rb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tT extends kb{constructor(c){super();qb(this,c,Vb,Qb,yb,{})}}export{tT as default,Ub as metadata};
