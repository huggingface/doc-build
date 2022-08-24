import{S as Eb,i as jb,s as Gb,e as s,k as p,w as T,t as o,M as Mb,c as a,d as t,m as h,a as d,x as w,h as n,b as l,G as e,g as v,y as k,q,o as y,B as x,v as Ab,L as cn}from"../../chunks/vendor-hf-doc-builder.js";import{T as ge}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ln}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as dn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Pb(F){let c,b,u,g,f;return g=new ln({props:{code:`# To load the default "wiki_dpr" dataset with 21M passages from wikipedia (index name is 'compressed' or 'exact')
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

<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, index_name=<span class="hljs-string">&quot;legacy&quot;</span>)`}}),{c(){c=s("p"),b=o("Examples:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Examples:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:cn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Nb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Ob(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Cb(F){let c,b,u,g,f;return g=new ln({props:{code:`from transformers import RagTokenizer, RagRetriever, RagModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:cn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Lb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Sb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Db(F){let c,b,u,g,f;return g=new ln({props:{code:`from transformers import RagTokenizer, RagRetriever, RagSequenceForGeneration
import torch

tokenizer = RagTokenizer.from_pretrained("facebook/rag-sequence-nq")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-sequence-nq", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = RagSequenceForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

inputs = tokenizer("How many people live in Paris?", return_tensors="pt")
with tokenizer.as_target_tokenizer():
    targets = tokenizer("In Paris, there are 10 million people.", return_tensors="pt")
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    targets = tokenizer(<span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
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
<span class="hljs-meta">... </span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:cn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Ib(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Wb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Hb(F){let c,b,u,g,f;return g=new ln({props:{code:`from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch

tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
retriever = RagRetriever.from_pretrained(
    "facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True
)
# initialize with RagRetriever to do everything in one forward call
model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

inputs = tokenizer("How many people live in Paris?", return_tensors="pt")
with tokenizer.as_target_tokenizer():
    targets = tokenizer("In Paris, there are 10 million people.", return_tensors="pt")
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    targets = tokenizer(<span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:cn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Bb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Qb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Ub(F){let c,b,u,g,f;return g=new ln({props:{code:`from transformers import RagTokenizer, RagRetriever, TFRagModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:cn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Vb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Kb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Yb(F){let c,b,u,g,f;return g=new ln({props:{code:`from transformers import RagTokenizer, RagRetriever, TFRagSequenceForGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:cn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function Jb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Xb(F){let c,b,u,g,f;return{c(){c=s("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),g=o("Module"),f=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(m,"CODE",{});var R=d(u);g=n(R,"Module"),R.forEach(t),f=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){v(i,c,m),e(c,b),e(c,u),e(u,g),e(c,f)},d(i){i&&t(c)}}}function Zb(F){let c,b,u,g,f;return g=new ln({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),b=o("Example:"),u=p(),T(g.$$.fragment)},l(i){c=a(i,"P",{});var m=d(c);b=n(m,"Example:"),m.forEach(t),u=h(i),w(g.$$.fragment,i)},m(i,m){v(i,c,m),e(c,b),v(i,u,m),k(g,i,m),f=!0},p:cn,i(i){f||(q(g.$$.fragment,i),f=!0)},o(i){y(g.$$.fragment,i),f=!1},d(i){i&&t(c),i&&t(u),x(g,i)}}}function eT(F){let c,b,u,g,f,i,m,R,ti,Wa,qe,Ye,jr,Bt,oi,Gr,ni,Ha,pn,ri,Ba,Je,si,Qt,ai,di,Qa,hn,ii,Ua,mn,Mr,ci,Va,Xe,li,Ut,pi,hi,Ka,ye,Ze,Ar,Vt,mi,Pr,ui,Ya,ee,Kt,gi,de,un,_i,fi,Nr,vi,bi,gn,Ti,wi,_n,ki,qi,yi,et,Yt,xi,Jt,Ri,fn,Fi,$i,zi,tt,Xt,Ei,Zt,ji,vn,Gi,Mi,Ja,xe,ot,Or,eo,Ai,Cr,Pi,Xa,Re,to,Ni,nt,oo,Oi,Lr,Ci,Za,Fe,rt,Sr,no,Li,Dr,Si,ed,$e,ro,Di,Ir,Ii,td,so,ao,od,ze,st,Wr,io,Wi,Hr,Hi,nd,Z,co,Bi,Br,Qi,Ui,at,Vi,dt,lo,Ki,Qr,Yi,Ji,it,po,Xi,Ee,Zi,Ur,ec,tc,Vr,oc,nc,rc,ct,ho,sc,mo,ac,Kr,dc,ic,rd,je,lt,Yr,uo,cc,Jr,lc,sd,L,go,pc,Ge,hc,bn,mc,uc,Xr,gc,_c,fc,pt,vc,Zr,bc,Tc,te,wc,es,kc,qc,Tn,yc,xc,ts,Rc,Fc,wn,$c,zc,Ec,M,jc,kn,Gc,Mc,os,Ac,Pc,ns,Nc,Oc,rs,Cc,Lc,ss,Sc,Dc,qn,Ic,Wc,as,Hc,Bc,yn,Qc,Uc,xn,Vc,Kc,ds,Yc,Jc,Xc,_o,Zc,Rn,el,tl,ol,fo,nl,vo,rl,sl,al,ie,bo,dl,Me,il,Fn,cl,ll,is,pl,hl,ml,ht,ul,mt,ad,Ae,ut,cs,To,gl,ls,_l,dd,E,wo,fl,Pe,vl,$n,bl,Tl,ps,wl,kl,ql,gt,yl,hs,xl,Rl,ms,Fl,$l,oe,zl,us,El,jl,zn,Gl,Ml,gs,Al,Pl,En,Nl,Ol,Cl,A,Ll,jn,Sl,Dl,_s,Il,Wl,fs,Hl,Bl,vs,Ql,Ul,bs,Vl,Kl,Gn,Yl,Jl,Ts,Xl,Zl,Mn,ep,tp,An,op,np,ws,rp,sp,ap,ko,dp,Pn,ip,cp,lp,qo,pp,yo,hp,mp,up,ce,xo,gp,Ne,_p,Nn,fp,vp,ks,bp,Tp,wp,_t,kp,ft,qp,vt,Ro,yp,Fo,xp,On,Rp,Fp,id,Oe,bt,qs,$o,$p,ys,zp,cd,j,zo,Ep,Ce,jp,Cn,Gp,Mp,xs,Ap,Pp,Np,Tt,Op,Rs,Cp,Lp,Fs,Sp,Dp,ne,Ip,$s,Wp,Hp,Ln,Bp,Qp,zs,Up,Vp,Sn,Kp,Yp,Jp,P,Xp,Dn,Zp,eh,Es,th,oh,js,nh,rh,Gs,sh,ah,Ms,dh,ih,In,ch,lh,As,ph,hh,Wn,mh,uh,Hn,gh,_h,Ps,fh,vh,bh,Eo,Th,Bn,wh,kh,qh,jo,yh,Go,xh,Rh,Fh,le,Mo,$h,Le,zh,Qn,Eh,jh,Ns,Gh,Mh,Ah,wt,Ph,kt,Nh,qt,Ao,Oh,Os,Ch,ld,Se,yt,Cs,Po,Lh,Ls,Sh,pd,N,No,Dh,De,Ih,Un,Wh,Hh,Ss,Bh,Qh,Uh,xt,Vh,Ds,Kh,Yh,re,Jh,Is,Xh,Zh,Vn,em,tm,Ws,om,nm,Kn,rm,sm,am,S,dm,Yn,im,cm,Hs,lm,pm,Bs,hm,mm,Qs,um,gm,Us,_m,fm,Jn,vm,bm,Vs,Tm,wm,Xn,km,qm,Ks,ym,xm,Rm,Oo,Fm,Zn,$m,zm,Em,Co,jm,Lo,Gm,Mm,Am,Ys,Pm,Nm,pe,So,Om,Ie,Cm,er,Lm,Sm,Js,Dm,Im,Wm,Rt,Hm,Ft,hd,We,$t,Xs,Do,Bm,Zs,Qm,md,$,Io,Um,He,Vm,tr,Km,Ym,ea,Jm,Xm,Zm,zt,eu,ta,tu,ou,oa,nu,ru,se,su,na,au,du,or,iu,cu,ra,lu,pu,nr,hu,mu,uu,D,gu,rr,_u,fu,sa,vu,bu,aa,Tu,wu,da,ku,qu,ia,yu,xu,sr,Ru,Fu,ca,$u,zu,ar,Eu,ju,la,Gu,Mu,Au,Wo,Pu,dr,Nu,Ou,Cu,Ho,Lu,Bo,Su,Du,Iu,pa,Wu,Hu,he,Qo,Bu,Be,Qu,ir,Uu,Vu,ha,Ku,Yu,Ju,Et,Xu,jt,Zu,Gt,Uo,eg,Vo,tg,cr,og,ng,ud,Qe,Mt,ma,Ko,rg,ua,sg,gd,z,Yo,ag,Ue,dg,lr,ig,cg,ga,lg,pg,hg,At,mg,_a,ug,gg,fa,_g,fg,ae,vg,va,bg,Tg,pr,wg,kg,ba,qg,yg,hr,xg,Rg,Fg,I,$g,mr,zg,Eg,Ta,jg,Gg,wa,Mg,Ag,ka,Pg,Ng,qa,Og,Cg,ur,Lg,Sg,ya,Dg,Ig,gr,Wg,Hg,xa,Bg,Qg,Ug,Jo,Vg,_r,Kg,Yg,Jg,Xo,Xg,Zo,Zg,e_,t_,Ra,o_,n_,me,en,r_,Ve,s_,fr,a_,d_,Fa,i_,c_,l_,Pt,p_,Nt,h_,Ot,tn,m_,$a,u_,_d;return i=new _e({}),Bt=new _e({}),Vt=new _e({}),Kt=new G({props:{name:"class transformers.RagConfig",anchor:"transformers.RagConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"is_encoder_decoder",val:" = True"},{name:"prefix",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"title_sep",val:" = ' / '"},{name:"doc_sep",val:" = ' // '"},{name:"n_docs",val:" = 5"},{name:"max_combined_length",val:" = 300"},{name:"retrieval_vector_size",val:" = 768"},{name:"retrieval_batch_size",val:" = 8"},{name:"dataset",val:" = 'wiki_dpr'"},{name:"dataset_split",val:" = 'train'"},{name:"index_name",val:" = 'compressed'"},{name:"index_path",val:" = None"},{name:"passages_path",val:" = None"},{name:"use_dummy_dataset",val:" = False"},{name:"reduce_loss",val:" = False"},{name:"label_smoothing",val:" = 0.0"},{name:"do_deduplication",val:" = True"},{name:"exclude_bos_score",val:" = False"},{name:"do_marginalize",val:" = False"},{name:"output_retrieved",val:" = False"},{name:"use_cache",val:" = True"},{name:"forced_eos_token_id",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagConfig.title_sep",description:`<strong>title_sep</strong> (<code>str</code>, <em>optional</em>, defaults to  <code>&quot; / &quot;</code>) &#x2014;
Separator inserted between the title and the text of the retrieved document when calling <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"title_sep"},{anchor:"transformers.RagConfig.doc_sep",description:`<strong>doc_sep</strong> (<code>str</code>, <em>optional</em>, defaults to  <code>&quot; // &quot;</code>) &#x2014;
Separator inserted between the text of the retrieved document and the original input when calling
<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"doc_sep"},{anchor:"transformers.RagConfig.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of documents to retrieve.`,name:"n_docs"},{anchor:"transformers.RagConfig.max_combined_length",description:`<strong>max_combined_length</strong> (<code>int</code>, <em>optional</em>, defaults to 300) &#x2014;
Max length of contextualized input returned by <code>__call__()</code>.`,name:"max_combined_length"},{anchor:"transformers.RagConfig.retrieval_vector_size",description:`<strong>retrieval_vector_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the document embeddings indexed by <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"retrieval_vector_size"},{anchor:"transformers.RagConfig.retrieval_batch_size",description:`<strong>retrieval_batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Retrieval batch size, defined as the number of queries issues concurrently to the faiss index encapsulated
<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"retrieval_batch_size"},{anchor:"transformers.RagConfig.dataset",description:`<strong>dataset</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;wiki_dpr&quot;</code>) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/configuration_rag.py#L82"}}),Yt=new G({props:{name:"from_question_encoder_generator_configs",anchor:"transformers.RagConfig.from_question_encoder_generator_configs",parameters:[{name:"question_encoder_config",val:": PretrainedConfig"},{name:"generator_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/configuration_rag.py#L170",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Xt=new G({props:{name:"to_dict",anchor:"transformers.RagConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/configuration_rag.py#L183",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),eo=new _e({}),to=new G({props:{name:"class transformers.RagTokenizer",anchor:"transformers.RagTokenizer",parameters:[{name:"question_encoder",val:""},{name:"generator",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/tokenization_rag.py#L29"}}),oo=new G({props:{name:"as_target_tokenizer",anchor:"transformers.RagTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/tokenization_rag.py#L71"}}),no=new _e({}),ro=new G({props:{name:"class transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"doc_scores",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"retrieved_doc_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"retrieved_doc_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"question_encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"question_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"generator_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
weighted average in the cross-attention heads.`,name:"generator_cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L40"}}),ao=new G({props:{name:"class transformers.models.rag.modeling_rag.RetrievAugLMOutput",anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput",parameters:[{name:"logits",val:": FloatTensor = None"},{name:"doc_scores",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"retrieved_doc_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"retrieved_doc_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"question_encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"question_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"generator_enc_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_enc_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_dec_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"generator_cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
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
weighted average in the cross-attention heads.`,name:"generator_cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L135"}}),io=new _e({}),co=new G({props:{name:"class transformers.RagRetriever",anchor:"transformers.RagRetriever",parameters:[{name:"config",val:""},{name:"question_encoder_tokenizer",val:""},{name:"generator_tokenizer",val:""},{name:"index",val:" = None"},{name:"init_retrieval",val:" = True"}],parametersDescription:[{anchor:"transformers.RagRetriever.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
The configuration of the RAG model this Retriever is used with. Contains parameters indicating which
<code>Index</code> to build. You can load your own custom dataset with <code>config.index_name=&quot;custom&quot;</code> or use a canonical
one (default) from the datasets library with <code>config.index_name=&quot;wiki_dpr&quot;</code> for example.`,name:"config"},{anchor:"transformers.RagRetriever.question_encoder_tokenizer",description:`<strong>question_encoder_tokenizer</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer that was used to tokenize the question. It is used to decode the question and then use the
generator_tokenizer.`,name:"question_encoder_tokenizer"},{anchor:"transformers.RagRetriever.generator_tokenizer",description:`<strong>generator_tokenizer</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer used for the generator part of the RagModel.`,name:"generator_tokenizer"},{anchor:"transformers.RagRetriever.index",description:`<strong>index</strong> (<code>Index</code>, optional, defaults to the one defined by the configuration) &#x2014;
If specified, use this index instead of the one built using the configuration`,name:"index"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/retrieval_rag.py#L324"}}),at=new dn({props:{anchor:"transformers.RagRetriever.example",$$slots:{default:[Pb]},$$scope:{ctx:F}}}),lo=new G({props:{name:"init_retrieval",anchor:"transformers.RagRetriever.init_retrieval",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/retrieval_rag.py#L458"}}),po=new G({props:{name:"postprocess_docs",anchor:"transformers.RagRetriever.postprocess_docs",parameters:[{name:"docs",val:""},{name:"input_strings",val:""},{name:"prefix",val:""},{name:"n_docs",val:""},{name:"return_tensors",val:" = None"}],parametersDescription:[{anchor:"transformers.RagRetriever.postprocess_docs.docs",description:`<strong>docs</strong>  (<code>dict</code>) &#x2014;
Retrieved documents.`,name:"docs"},{anchor:"transformers.RagRetriever.postprocess_docs.input_strings",description:`<strong>input_strings</strong> (<code>str</code>) &#x2014;
Input strings decoded by <code>preprocess_query</code>.`,name:"input_strings"},{anchor:"transformers.RagRetriever.postprocess_docs.prefix",description:`<strong>prefix</strong> (<code>str</code>) &#x2014;
Prefix added at the beginning of each input, typically used with T5-based models.`,name:"prefix"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/retrieval_rag.py#L466",returnDescription:`
<p>a tuple consisting of two elements: contextualized <code>input_ids</code> and a compatible
<code>attention_mask</code>.</p>
`,returnType:`
<p><code>tuple(tensors)</code></p>
`}}),ho=new G({props:{name:"retrieve",anchor:"transformers.RagRetriever.retrieve",parameters:[{name:"question_hidden_states",val:": ndarray"},{name:"n_docs",val:": int"}],parametersDescription:[{anchor:"transformers.RagRetriever.retrieve.question_hidden_states",description:`<strong>question_hidden_states</strong> (<code>np.ndarray</code> of shape <code>(batch_size, vector_size)</code>) &#x2014;
A batch of query vectors to retrieve with.`,name:"question_hidden_states"},{anchor:"transformers.RagRetriever.retrieve.n_docs",description:`<strong>n_docs</strong> (<code>int</code>) &#x2014;
The number of docs retrieved per query.`,name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/retrieval_rag.py#L538",returnDescription:`
<p>A tuple with the following objects:</p>
<ul>
<li><strong>retrieved_doc_embeds</strong> (<code>np.ndarray</code> of shape <code>(batch_size, n_docs, dim)</code>) \u2014 The retrieval embeddings
of the retrieved docs per query.</li>
<li><strong>doc_ids</strong> (<code>np.ndarray</code> of shape <code>(batch_size, n_docs)</code>) \u2014 The ids of the documents in the index</li>
<li><strong>doc_dicts</strong> (<code>List[dict]</code>): The <code>retrieved_doc_embeds</code> examples per query.</li>
</ul>
`,returnType:`
<p><code>Tuple[np.ndarray, np.ndarray, List[dict]]</code></p>
`}}),uo=new _e({}),go=new G({props:{name:"class transformers.RagModel",anchor:"transformers.RagModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"question_encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"generator",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"retriever",val:": typing.Optional[transformers.models.rag.retrieval_rag.RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagModel.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagModel.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagModel.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L495"}}),pt=new ge({props:{$$slots:{default:[Nb]},$$scope:{ctx:F}}}),bo=new G({props:{name:"forward",anchor:"transformers.RagModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"n_docs",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"transformers.RagModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
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
<p>Used by the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagModel.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
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
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagModel.forward.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L538",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig"
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
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new ge({props:{$$slots:{default:[Ob]},$$scope:{ctx:F}}}),mt=new dn({props:{anchor:"transformers.RagModel.forward.example",$$slots:{default:[Cb]},$$scope:{ctx:F}}}),To=new _e({}),wo=new G({props:{name:"class transformers.RagSequenceForGeneration",anchor:"transformers.RagSequenceForGeneration",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"question_encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"generator",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"retriever",val:": typing.Optional[transformers.models.rag.retrieval_rag.RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L743"}}),gt=new ge({props:{$$slots:{default:[Lb]},$$scope:{ctx:F}}}),xo=new G({props:{name:"forward",anchor:"transformers.RagSequenceForGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"exclude_bos_score",val:": typing.Optional[bool] = None"},{name:"reduce_loss",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
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
<p>Used by the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagSequenceForGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagSequenceForGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagSequenceForGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagSequenceForGeneration.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
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
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig"
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
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new ge({props:{$$slots:{default:[Sb]},$$scope:{ctx:F}}}),ft=new dn({props:{anchor:"transformers.RagSequenceForGeneration.forward.example",$$slots:{default:[Db]},$$scope:{ctx:F}}}),Ro=new G({props:{name:"generate",anchor:"transformers.RagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"do_deduplication",val:": typing.Optional[bool] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate)</code>
function, where we set <code>num_return_sequences</code> to <code>num_beams</code>.`,name:"num_return_sequences(int,"},{anchor:"transformers.RagSequenceForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.RagSequenceForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.
kwargs &#x2014;
Additional kwargs will be passed to <a href="/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate">generate()</a>.`,name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L914",returnDescription:`
<p>The generated
sequences. The second dimension (sequence length) is either equal to <code>max_length</code> or shorter if all batches
finished early due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>torch.LongTensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),$o=new _e({}),zo=new G({props:{name:"class transformers.RagTokenForGeneration",anchor:"transformers.RagTokenForGeneration",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"question_encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"generator",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"retriever",val:": typing.Optional[transformers.models.rag.retrieval_rag.RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagTokenForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagTokenForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagTokenForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L1142"}}),Tt=new ge({props:{$$slots:{default:[Ib]},$$scope:{ctx:F}}}),Mo=new G({props:{name:"forward",anchor:"transformers.RagTokenForGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_retrieved",val:": typing.Optional[bool] = None"},{name:"do_marginalize",val:": typing.Optional[bool] = None"},{name:"reduce_loss",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
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
<p>Used by the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagTokenForGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagTokenForGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagTokenForGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagTokenForGeneration.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
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
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L1241",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig"
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
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wt=new ge({props:{$$slots:{default:[Wb]},$$scope:{ctx:F}}}),kt=new dn({props:{anchor:"transformers.RagTokenForGeneration.forward.example",$$slots:{default:[Hb]},$$scope:{ctx:F}}}),Ao=new G({props:{name:"generate",anchor:"transformers.RagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"context_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"doc_scores",val:": typing.Optional[torch.FloatTensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.List[typing.List[int]]] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"n_docs",val:": typing.Optional[int] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Callable[[int, torch.Tensor], typing.List[int]] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"renormalize_logits",val:": typing.Optional[bool] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[typing.Union[int, float]], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate) function, where we set </code>num_return_sequences<code>to</code>num_beams<code>. decoder_start_token_id (</code>int\`, <em>optional</em>): If an
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
crash. Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_rag.py#L1383",returnDescription:`
<p>The generated
sequences. The second dimension (sequence_length) is either equal to <code>max_length</code> or shorter if all batches
finished early due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>torch.LongTensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),Po=new _e({}),No=new G({props:{name:"class transformers.TFRagModel",anchor:"transformers.TFRagModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagModel.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagModel.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagModel.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L485"}}),xt=new ge({props:{$$slots:{default:[Bb]},$$scope:{ctx:F}}}),So=new G({props:{name:"call",anchor:"transformers.TFRagModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"doc_scores",val:" = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_retrieved",val:" = None"},{name:"n_docs",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
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
<p>Used by the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagModel.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
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
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagModel.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L536",returnDescription:`
<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig"
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
`}}),Rt=new ge({props:{$$slots:{default:[Qb]},$$scope:{ctx:F}}}),Ft=new dn({props:{anchor:"transformers.TFRagModel.call.example",$$slots:{default:[Ub]},$$scope:{ctx:F}}}),Do=new _e({}),Io=new G({props:{name:"class transformers.TFRagSequenceForGeneration",anchor:"transformers.TFRagSequenceForGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L1371"}}),zt=new ge({props:{$$slots:{default:[Vb]},$$scope:{ctx:F}}}),Qo=new G({props:{name:"call",anchor:"transformers.TFRagSequenceForGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"doc_scores",val:" = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_retrieved",val:" = None"},{name:"n_docs",val:" = None"},{name:"exclude_bos_score",val:" = None"},{name:"labels",val:" = None"},{name:"reduce_loss",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
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
<p>Used by the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagSequenceForGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagSequenceForGeneration.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
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
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L1419",returnDescription:`
<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig"
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
`}}),Et=new ge({props:{$$slots:{default:[Kb]},$$scope:{ctx:F}}}),jt=new dn({props:{anchor:"transformers.TFRagSequenceForGeneration.call.example",$$slots:{default:[Yb]},$$scope:{ctx:F}}}),Uo=new G({props:{name:"generate",anchor:"transformers.TFRagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"do_deduplication",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"num_beams",val:" = None"},{name:"n_docs",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate)</code>
function, where we set <code>num_return_sequences</code> to <code>num_beams</code>.`,name:"num_return_sequences(int,"},{anchor:"transformers.TFRagSequenceForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.TFRagSequenceForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.
kwargs &#x2014;
Additional kwargs will be passed to <a href="/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate">generate()</a>`,name:"n_docs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L1651",returnDescription:`
<p>The generated sequences. The
second dimension (sequence length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),Ko=new _e({}),Yo=new G({props:{name:"class transformers.TFRagTokenForGeneration",anchor:"transformers.TFRagTokenForGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagTokenForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagTokenForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagTokenForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L720"}}),At=new ge({props:{$$slots:{default:[Jb]},$$scope:{ctx:F}}}),en=new G({props:{name:"call",anchor:"transformers.TFRagTokenForGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"doc_scores",val:" = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_retrieved",val:" = None"},{name:"n_docs",val:" = None"},{name:"do_marginalize",val:" = None"},{name:"labels",val:" = None"},{name:"reduce_loss",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
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
<p>Used by the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagTokenForGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagTokenForGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagTokenForGeneration.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
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
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L826",returnDescription:`
<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig"
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
`}}),Pt=new ge({props:{$$slots:{default:[Xb]},$$scope:{ctx:F}}}),Nt=new dn({props:{anchor:"transformers.TFRagTokenForGeneration.call.example",$$slots:{default:[Zb]},$$scope:{ctx:F}}}),tn=new G({props:{name:"generate",anchor:"transformers.TFRagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"early_stopping",val:" = None"},{name:"use_cache",val:" = None"},{name:"num_beams",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"n_docs",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate) function, where we set </code>num_return_sequences<code>to</code>num_beams<code>. decoder_start_token_id (</code>int\`, <em>optional</em>): If an
encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.`,name:"num_return_sequences(int,"},{anchor:"transformers.TFRagTokenForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.`,name:"n_docs"},{anchor:"transformers.TFRagTokenForGeneration.generate.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.TFRagTokenForGeneration.generate.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.TFRagTokenForGeneration.generate.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.TFRagTokenForGeneration.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.
model_specific_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"return_dict_in_generate"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/rag/modeling_tf_rag.py#L981",returnDescription:`
<p>The generated sequences. The
second dimension (sequence_length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`
<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),{c(){c=s("meta"),b=p(),u=s("h1"),g=s("a"),f=s("span"),T(i.$$.fragment),m=p(),R=s("span"),ti=o("RAG"),Wa=p(),qe=s("h2"),Ye=s("a"),jr=s("span"),T(Bt.$$.fragment),oi=p(),Gr=s("span"),ni=o("Overview"),Ha=p(),pn=s("p"),ri=o(`Retrieval-augmented generation (\u201CRAG\u201D) models combine the powers of pretrained dense retrieval (DPR) and
sequence-to-sequence models. RAG models retrieve documents, pass them to a seq2seq model, then marginalize to generate
outputs. The retriever and seq2seq modules are initialized from pretrained models, and fine-tuned jointly, allowing
both retrieval and generation to adapt to downstream tasks.`),Ba=p(),Je=s("p"),si=o("It is based on the paper "),Qt=s("a"),ai=o("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"),di=o(` by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich K\xFCttler, Mike Lewis, Wen-tau Yih, Tim Rockt\xE4schel, Sebastian Riedel, Douwe Kiela.`),Qa=p(),hn=s("p"),ii=o("The abstract from the paper is the following:"),Ua=p(),mn=s("p"),Mr=s("em"),ci=o(`Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve
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
parametric-only seq2seq baseline.`),Va=p(),Xe=s("p"),li=o("This model was contributed by "),Ut=s("a"),pi=o("ola13"),hi=o("."),Ka=p(),ye=s("h2"),Ze=s("a"),Ar=s("span"),T(Vt.$$.fragment),mi=p(),Pr=s("span"),ui=o("RagConfig"),Ya=p(),ee=s("div"),T(Kt.$$.fragment),gi=p(),de=s("p"),un=s("a"),_i=o("RagConfig"),fi=o(" stores the configuration of a "),Nr=s("em"),vi=o("RagModel"),bi=o(". Configuration objects inherit from "),gn=s("a"),Ti=o("PretrainedConfig"),wi=o(` and
can be used to control the model outputs. Read the documentation from `),_n=s("a"),ki=o("PretrainedConfig"),qi=o(" for more information."),yi=p(),et=s("div"),T(Yt.$$.fragment),xi=p(),Jt=s("p"),Ri=o("Instantiate a "),fn=s("a"),Fi=o("EncoderDecoderConfig"),$i=o(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),zi=p(),tt=s("div"),T(Xt.$$.fragment),Ei=p(),Zt=s("p"),ji=o("Serializes this instance to a Python dictionary. Override the default "),vn=s("a"),Gi=o("to_dict()"),Mi=o("."),Ja=p(),xe=s("h2"),ot=s("a"),Or=s("span"),T(eo.$$.fragment),Ai=p(),Cr=s("span"),Pi=o("RagTokenizer"),Xa=p(),Re=s("div"),T(to.$$.fragment),Ni=p(),nt=s("div"),T(oo.$$.fragment),Oi=p(),Lr=s("p"),Ci=o(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Za=p(),Fe=s("h2"),rt=s("a"),Sr=s("span"),T(no.$$.fragment),Li=p(),Dr=s("span"),Si=o("Rag specific outputs"),ed=p(),$e=s("div"),T(ro.$$.fragment),Di=p(),Ir=s("p"),Ii=o("Base class for retriever augmented marginalized models outputs."),td=p(),so=s("div"),T(ao.$$.fragment),od=p(),ze=s("h2"),st=s("a"),Wr=s("span"),T(io.$$.fragment),Wi=p(),Hr=s("span"),Hi=o("RagRetriever"),nd=p(),Z=s("div"),T(co.$$.fragment),Bi=p(),Br=s("p"),Qi=o(`Retriever used to get documents from vector queries. It retrieves the documents embeddings as well as the documents
contents, and it formats them to be used with a RagModel.`),Ui=p(),T(at.$$.fragment),Vi=p(),dt=s("div"),T(lo.$$.fragment),Ki=p(),Qr=s("p"),Yi=o("Retriever initialization function. It loads the index into memory."),Ji=p(),it=s("div"),T(po.$$.fragment),Xi=p(),Ee=s("p"),Zi=o("Postprocessing retrieved "),Ur=s("code"),ec=o("docs"),tc=o(" and combining them with "),Vr=s("code"),oc=o("input_strings"),nc=o("."),rc=p(),ct=s("div"),T(ho.$$.fragment),sc=p(),mo=s("p"),ac=o("Retrieves documents for specified "),Kr=s("code"),dc=o("question_hidden_states"),ic=o("."),rd=p(),je=s("h2"),lt=s("a"),Yr=s("span"),T(uo.$$.fragment),cc=p(),Jr=s("span"),lc=o("RagModel"),sd=p(),L=s("div"),T(go.$$.fragment),pc=p(),Ge=s("p"),hc=o("The "),bn=s("a"),mc=o("RagModel"),uc=o(" forward method, overrides the "),Xr=s("code"),gc=o("__call__"),_c=o(" special method."),fc=p(),T(pt.$$.fragment),vc=p(),Zr=s("p"),bc=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Tc=p(),te=s("p"),wc=o("The question encoder can be any "),es=s("em"),kc=o("autoencoding"),qc=o(" model, preferably "),Tn=s("a"),yc=o("DPRQuestionEncoder"),xc=o(`, and the generator can be
any `),ts=s("em"),Rc=o("seq2seq"),Fc=o(" model, preferably "),wn=s("a"),$c=o("BartForConditionalGeneration"),zc=o("."),Ec=p(),M=s("p"),jc=o("The model can be initialized with a "),kn=s("a"),Gc=o("RagRetriever"),Mc=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),os=s("em"),Ac=o("autoencoding"),Pc=o(" model as the "),ns=s("code"),Nc=o("question_encoder"),Oc=o(" and any "),rs=s("em"),Cc=o("seq2seq"),Lc=o(" model with language model head as the "),ss=s("code"),Sc=o("generator"),Dc=o(`.
It has been tested with `),qn=s("a"),Ic=o("DPRQuestionEncoder"),Wc=o(" as the "),as=s("code"),Hc=o("question_encoder"),Bc=o(" and "),yn=s("a"),Qc=o("BartForConditionalGeneration"),Uc=o(` or
`),xn=s("a"),Vc=o("T5ForConditionalGeneration"),Kc=o(" as the "),ds=s("code"),Yc=o("generator"),Jc=o("."),Xc=p(),_o=s("p"),Zc=o("This model inherits from "),Rn=s("a"),el=o("PreTrainedModel"),tl=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ol=p(),fo=s("p"),nl=o("This model is also a PyTorch "),vo=s("a"),rl=o("torch.nn.Module"),sl=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),al=p(),ie=s("div"),T(bo.$$.fragment),dl=p(),Me=s("p"),il=o("The "),Fn=s("a"),cl=o("RagModel"),ll=o(" forward method, overrides the "),is=s("code"),pl=o("__call__"),hl=o(" special method."),ml=p(),T(ht.$$.fragment),ul=p(),T(mt.$$.fragment),ad=p(),Ae=s("h2"),ut=s("a"),cs=s("span"),T(To.$$.fragment),gl=p(),ls=s("span"),_l=o("RagSequenceForGeneration"),dd=p(),E=s("div"),T(wo.$$.fragment),fl=p(),Pe=s("p"),vl=o("The "),$n=s("a"),bl=o("RagSequenceForGeneration"),Tl=o(" forward method, overrides the "),ps=s("code"),wl=o("__call__"),kl=o(" special method."),ql=p(),T(gt.$$.fragment),yl=p(),hs=s("p"),xl=o("A RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),Rl=p(),ms=s("p"),Fl=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),$l=p(),oe=s("p"),zl=o("The question encoder can be any "),us=s("em"),El=o("autoencoding"),jl=o(" model, preferably "),zn=s("a"),Gl=o("DPRQuestionEncoder"),Ml=o(`, and the generator can be
any `),gs=s("em"),Al=o("seq2seq"),Pl=o(" model, preferably "),En=s("a"),Nl=o("BartForConditionalGeneration"),Ol=o("."),Cl=p(),A=s("p"),Ll=o("The model can be initialized with a "),jn=s("a"),Sl=o("RagRetriever"),Dl=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),_s=s("em"),Il=o("autoencoding"),Wl=o(" model as the "),fs=s("code"),Hl=o("question_encoder"),Bl=o(" and any "),vs=s("em"),Ql=o("seq2seq"),Ul=o(" model with language model head as the "),bs=s("code"),Vl=o("generator"),Kl=o(`.
It has been tested with `),Gn=s("a"),Yl=o("DPRQuestionEncoder"),Jl=o(" as the "),Ts=s("code"),Xl=o("question_encoder"),Zl=o(" and "),Mn=s("a"),ep=o("BartForConditionalGeneration"),tp=o(` or
`),An=s("a"),op=o("T5ForConditionalGeneration"),np=o(" as the "),ws=s("code"),rp=o("generator"),sp=o("."),ap=p(),ko=s("p"),dp=o("This model inherits from "),Pn=s("a"),ip=o("PreTrainedModel"),cp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=p(),qo=s("p"),pp=o("This model is also a PyTorch "),yo=s("a"),hp=o("torch.nn.Module"),mp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up=p(),ce=s("div"),T(xo.$$.fragment),gp=p(),Ne=s("p"),_p=o("The "),Nn=s("a"),fp=o("RagSequenceForGeneration"),vp=o(" forward method, overrides the "),ks=s("code"),bp=o("__call__"),Tp=o(" special method."),wp=p(),T(_t.$$.fragment),kp=p(),T(ft.$$.fragment),qp=p(),vt=s("div"),T(Ro.$$.fragment),yp=p(),Fo=s("p"),xp=o("Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),On=s("a"),Rp=o("generate()"),Fp=o("`\ndocumentation for more information on how to set other generate input parameters."),id=p(),Oe=s("h2"),bt=s("a"),qs=s("span"),T($o.$$.fragment),$p=p(),ys=s("span"),zp=o("RagTokenForGeneration"),cd=p(),j=s("div"),T(zo.$$.fragment),Ep=p(),Ce=s("p"),jp=o("The "),Cn=s("a"),Gp=o("RagTokenForGeneration"),Mp=o(" forward method, overrides the "),xs=s("code"),Ap=o("__call__"),Pp=o(" special method."),Np=p(),T(Tt.$$.fragment),Op=p(),Rs=s("p"),Cp=o("A RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),Lp=p(),Fs=s("p"),Sp=o(`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),Dp=p(),ne=s("p"),Ip=o("The question encoder can be any "),$s=s("em"),Wp=o("autoencoding"),Hp=o(" model, preferably "),Ln=s("a"),Bp=o("DPRQuestionEncoder"),Qp=o(`, and the generator can be
any `),zs=s("em"),Up=o("seq2seq"),Vp=o(" model, preferably "),Sn=s("a"),Kp=o("BartForConditionalGeneration"),Yp=o("."),Jp=p(),P=s("p"),Xp=o("The model can be initialized with a "),Dn=s("a"),Zp=o("RagRetriever"),eh=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Es=s("em"),th=o("autoencoding"),oh=o(" model as the "),js=s("code"),nh=o("question_encoder"),rh=o(" and any "),Gs=s("em"),sh=o("seq2seq"),ah=o(" model with language model head as the "),Ms=s("code"),dh=o("generator"),ih=o(`.
It has been tested with `),In=s("a"),ch=o("DPRQuestionEncoder"),lh=o(" as the "),As=s("code"),ph=o("question_encoder"),hh=o(" and "),Wn=s("a"),mh=o("BartForConditionalGeneration"),uh=o(` or
`),Hn=s("a"),gh=o("T5ForConditionalGeneration"),_h=o(" as the "),Ps=s("code"),fh=o("generator"),vh=o("."),bh=p(),Eo=s("p"),Th=o("This model inherits from "),Bn=s("a"),wh=o("PreTrainedModel"),kh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh=p(),jo=s("p"),yh=o("This model is also a PyTorch "),Go=s("a"),xh=o("torch.nn.Module"),Rh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh=p(),le=s("div"),T(Mo.$$.fragment),$h=p(),Le=s("p"),zh=o("The "),Qn=s("a"),Eh=o("RagTokenForGeneration"),jh=o(" forward method, overrides the "),Ns=s("code"),Gh=o("__call__"),Mh=o(" special method."),Ah=p(),T(wt.$$.fragment),Ph=p(),T(kt.$$.fragment),Nh=p(),qt=s("div"),T(Ao.$$.fragment),Oh=p(),Os=s("p"),Ch=o("Implements RAG token decoding."),ld=p(),Se=s("h2"),yt=s("a"),Cs=s("span"),T(Po.$$.fragment),Lh=p(),Ls=s("span"),Sh=o("TFRagModel"),pd=p(),N=s("div"),T(No.$$.fragment),Dh=p(),De=s("p"),Ih=o("The "),Un=s("a"),Wh=o("TFRagModel"),Hh=o(" forward method, overrides the "),Ss=s("code"),Bh=o("__call__"),Qh=o(" special method."),Uh=p(),T(xt.$$.fragment),Vh=p(),Ds=s("p"),Kh=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Yh=p(),re=s("p"),Jh=o("The question encoder can be any "),Is=s("em"),Xh=o("autoencoding"),Zh=o(" model, preferably "),Vn=s("a"),em=o("TFDPRQuestionEncoder"),tm=o(`, and the generator can be
any `),Ws=s("em"),om=o("seq2seq"),nm=o(" model, preferably "),Kn=s("a"),rm=o("TFBartForConditionalGeneration"),sm=o("."),am=p(),S=s("p"),dm=o("The model can be initialized with a "),Yn=s("a"),im=o("RagRetriever"),cm=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Hs=s("em"),lm=o("autoencoding"),pm=o(" model as the "),Bs=s("code"),hm=o("question_encoder"),mm=o(" and any "),Qs=s("em"),um=o("seq2seq"),gm=o(" model with language model head as the "),Us=s("code"),_m=o("generator"),fm=o(`.
It has been tested with `),Jn=s("a"),vm=o("TFDPRQuestionEncoder"),bm=o(" as the "),Vs=s("code"),Tm=o("question_encoder"),wm=o(" and "),Xn=s("a"),km=o("TFBartForConditionalGeneration"),qm=o(`
as the `),Ks=s("code"),ym=o("generator"),xm=o("."),Rm=p(),Oo=s("p"),Fm=o("This model inherits from "),Zn=s("a"),$m=o("TFPreTrainedModel"),zm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Em=p(),Co=s("p"),jm=o("This model is also a Tensorflow "),Lo=s("a"),Gm=o("tf.keras.Model"),Mm=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Am=p(),Ys=s("p"),Pm=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Nm=p(),pe=s("div"),T(So.$$.fragment),Om=p(),Ie=s("p"),Cm=o("The "),er=s("a"),Lm=o("TFRagModel"),Sm=o(" forward method, overrides the "),Js=s("code"),Dm=o("__call__"),Im=o(" special method."),Wm=p(),T(Rt.$$.fragment),Hm=p(),T(Ft.$$.fragment),hd=p(),We=s("h2"),$t=s("a"),Xs=s("span"),T(Do.$$.fragment),Bm=p(),Zs=s("span"),Qm=o("TFRagSequenceForGeneration"),md=p(),$=s("div"),T(Io.$$.fragment),Um=p(),He=s("p"),Vm=o("The "),tr=s("a"),Km=o("TFRagSequenceForGeneration"),Ym=o(" forward method, overrides the "),ea=s("code"),Jm=o("__call__"),Xm=o(" special method."),Zm=p(),T(zt.$$.fragment),eu=p(),ta=s("p"),tu=o("A TF RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),ou=p(),oa=s("p"),nu=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),ru=p(),se=s("p"),su=o("The question encoder can be any "),na=s("em"),au=o("autoencoding"),du=o(" model, preferably "),or=s("a"),iu=o("TFDPRQuestionEncoder"),cu=o(`, and the generator can be
any `),ra=s("em"),lu=o("seq2seq"),pu=o(" model, preferably "),nr=s("a"),hu=o("TFBartForConditionalGeneration"),mu=o("."),uu=p(),D=s("p"),gu=o("The model can be initialized with a "),rr=s("a"),_u=o("RagRetriever"),fu=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),sa=s("em"),vu=o("autoencoding"),bu=o(" model as the "),aa=s("code"),Tu=o("question_encoder"),wu=o(" and any "),da=s("em"),ku=o("seq2seq"),qu=o(" model with language model head as the "),ia=s("code"),yu=o("generator"),xu=o(`.
It has been tested with `),sr=s("a"),Ru=o("TFDPRQuestionEncoder"),Fu=o(" as the "),ca=s("code"),$u=o("question_encoder"),zu=o(" and "),ar=s("a"),Eu=o("TFBartForConditionalGeneration"),ju=o(`
as the `),la=s("code"),Gu=o("generator"),Mu=o("."),Au=p(),Wo=s("p"),Pu=o("This model inherits from "),dr=s("a"),Nu=o("TFPreTrainedModel"),Ou=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu=p(),Ho=s("p"),Lu=o("This model is also a Tensorflow "),Bo=s("a"),Su=o("tf.keras.Model"),Du=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Iu=p(),pa=s("p"),Wu=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Hu=p(),he=s("div"),T(Qo.$$.fragment),Bu=p(),Be=s("p"),Qu=o("The "),ir=s("a"),Uu=o("TFRagSequenceForGeneration"),Vu=o(" forward method, overrides the "),ha=s("code"),Ku=o("__call__"),Yu=o(" special method."),Ju=p(),T(Et.$$.fragment),Xu=p(),T(jt.$$.fragment),Zu=p(),Gt=s("div"),T(Uo.$$.fragment),eg=p(),Vo=s("p"),tg=o("Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),cr=s("a"),og=o("generate()"),ng=o("`\ndocumentation for more information on how to set other generate input parameters"),ud=p(),Qe=s("h2"),Mt=s("a"),ma=s("span"),T(Ko.$$.fragment),rg=p(),ua=s("span"),sg=o("TFRagTokenForGeneration"),gd=p(),z=s("div"),T(Yo.$$.fragment),ag=p(),Ue=s("p"),dg=o("The "),lr=s("a"),ig=o("TFRagTokenForGeneration"),cg=o(" forward method, overrides the "),ga=s("code"),lg=o("__call__"),pg=o(" special method."),hg=p(),T(At.$$.fragment),mg=p(),_a=s("p"),ug=o("A TF RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),gg=p(),fa=s("p"),_g=o(`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),fg=p(),ae=s("p"),vg=o("The question encoder can be any "),va=s("em"),bg=o("autoencoding"),Tg=o(" model, preferably "),pr=s("a"),wg=o("TFDPRQuestionEncoder"),kg=o(`, and the generator can be
any `),ba=s("em"),qg=o("seq2seq"),yg=o(" model, preferably "),hr=s("a"),xg=o("TFBartForConditionalGeneration"),Rg=o("."),Fg=p(),I=s("p"),$g=o("The model can be initialized with a "),mr=s("a"),zg=o("RagRetriever"),Eg=o(` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Ta=s("em"),jg=o("autoencoding"),Gg=o(" model as the "),wa=s("code"),Mg=o("question_encoder"),Ag=o(" and any "),ka=s("em"),Pg=o("seq2seq"),Ng=o(" model with language model head as the "),qa=s("code"),Og=o("generator"),Cg=o(`.
It has been tested with `),ur=s("a"),Lg=o("TFDPRQuestionEncoder"),Sg=o(" as the "),ya=s("code"),Dg=o("question_encoder"),Ig=o(" and "),gr=s("a"),Wg=o("TFBartForConditionalGeneration"),Hg=o(`
as the `),xa=s("code"),Bg=o("generator"),Qg=o("."),Ug=p(),Jo=s("p"),Vg=o("This model inherits from "),_r=s("a"),Kg=o("TFPreTrainedModel"),Yg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jg=p(),Xo=s("p"),Xg=o("This model is also a Tensorflow "),Zo=s("a"),Zg=o("tf.keras.Model"),e_=o(`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),t_=p(),Ra=s("p"),o_=o(`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),n_=p(),me=s("div"),T(en.$$.fragment),r_=p(),Ve=s("p"),s_=o("The "),fr=s("a"),a_=o("TFRagTokenForGeneration"),d_=o(" forward method, overrides the "),Fa=s("code"),i_=o("__call__"),c_=o(" special method."),l_=p(),T(Pt.$$.fragment),p_=p(),T(Nt.$$.fragment),h_=p(),Ot=s("div"),T(tn.$$.fragment),m_=p(),$a=s("p"),u_=o("Implements TFRAG token decoding."),this.h()},l(r){const _=Mb('[data-svelte="svelte-1phssyn"]',document.head);c=a(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(r),u=a(r,"H1",{class:!0});var on=d(u);g=a(on,"A",{id:!0,class:!0,href:!0});var za=d(g);f=a(za,"SPAN",{});var Ea=d(f);w(i.$$.fragment,Ea),Ea.forEach(t),za.forEach(t),m=h(on),R=a(on,"SPAN",{});var ja=d(R);ti=n(ja,"RAG"),ja.forEach(t),on.forEach(t),Wa=h(r),qe=a(r,"H2",{class:!0});var nn=d(qe);Ye=a(nn,"A",{id:!0,class:!0,href:!0});var Ga=d(Ye);jr=a(Ga,"SPAN",{});var Ma=d(jr);w(Bt.$$.fragment,Ma),Ma.forEach(t),Ga.forEach(t),oi=h(nn),Gr=a(nn,"SPAN",{});var Aa=d(Gr);ni=n(Aa,"Overview"),Aa.forEach(t),nn.forEach(t),Ha=h(r),pn=a(r,"P",{});var Pa=d(pn);ri=n(Pa,`Retrieval-augmented generation (\u201CRAG\u201D) models combine the powers of pretrained dense retrieval (DPR) and
sequence-to-sequence models. RAG models retrieve documents, pass them to a seq2seq model, then marginalize to generate
outputs. The retriever and seq2seq modules are initialized from pretrained models, and fine-tuned jointly, allowing
both retrieval and generation to adapt to downstream tasks.`),Pa.forEach(t),Ba=h(r),Je=a(r,"P",{});var rn=d(Je);si=n(rn,"It is based on the paper "),Qt=a(rn,"A",{href:!0,rel:!0});var Na=d(Qt);ai=n(Na,"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"),Na.forEach(t),di=n(rn,` by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich K\xFCttler, Mike Lewis, Wen-tau Yih, Tim Rockt\xE4schel, Sebastian Riedel, Douwe Kiela.`),rn.forEach(t),Qa=h(r),hn=a(r,"P",{});var Oa=d(hn);ii=n(Oa,"The abstract from the paper is the following:"),Oa.forEach(t),Ua=h(r),mn=a(r,"P",{});var Ca=d(mn);Mr=a(Ca,"EM",{});var La=d(Mr);ci=n(La,`Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve
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
parametric-only seq2seq baseline.`),La.forEach(t),Ca.forEach(t),Va=h(r),Xe=a(r,"P",{});var sn=d(Xe);li=n(sn,"This model was contributed by "),Ut=a(sn,"A",{href:!0,rel:!0});var Sa=d(Ut);pi=n(Sa,"ola13"),Sa.forEach(t),hi=n(sn,"."),sn.forEach(t),Ka=h(r),ye=a(r,"H2",{class:!0});var an=d(ye);Ze=a(an,"A",{id:!0,class:!0,href:!0});var Da=d(Ze);Ar=a(Da,"SPAN",{});var Ia=d(Ar);w(Vt.$$.fragment,Ia),Ia.forEach(t),Da.forEach(t),mi=h(an),Pr=a(an,"SPAN",{});var g_=d(Pr);ui=n(g_,"RagConfig"),g_.forEach(t),an.forEach(t),Ya=h(r),ee=a(r,"DIV",{class:!0});var Ct=d(ee);w(Kt.$$.fragment,Ct),gi=h(Ct),de=a(Ct,"P",{});var Ke=d(de);un=a(Ke,"A",{href:!0});var __=d(un);_i=n(__,"RagConfig"),__.forEach(t),fi=n(Ke," stores the configuration of a "),Nr=a(Ke,"EM",{});var f_=d(Nr);vi=n(f_,"RagModel"),f_.forEach(t),bi=n(Ke,". Configuration objects inherit from "),gn=a(Ke,"A",{href:!0});var v_=d(gn);Ti=n(v_,"PretrainedConfig"),v_.forEach(t),wi=n(Ke,` and
can be used to control the model outputs. Read the documentation from `),_n=a(Ke,"A",{href:!0});var b_=d(_n);ki=n(b_,"PretrainedConfig"),b_.forEach(t),qi=n(Ke," for more information."),Ke.forEach(t),yi=h(Ct),et=a(Ct,"DIV",{class:!0});var fd=d(et);w(Yt.$$.fragment,fd),xi=h(fd),Jt=a(fd,"P",{});var vd=d(Jt);Ri=n(vd,"Instantiate a "),fn=a(vd,"A",{href:!0});var T_=d(fn);Fi=n(T_,"EncoderDecoderConfig"),T_.forEach(t),$i=n(vd,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),vd.forEach(t),fd.forEach(t),zi=h(Ct),tt=a(Ct,"DIV",{class:!0});var bd=d(tt);w(Xt.$$.fragment,bd),Ei=h(bd),Zt=a(bd,"P",{});var Td=d(Zt);ji=n(Td,"Serializes this instance to a Python dictionary. Override the default "),vn=a(Td,"A",{href:!0});var w_=d(vn);Gi=n(w_,"to_dict()"),w_.forEach(t),Mi=n(Td,"."),Td.forEach(t),bd.forEach(t),Ct.forEach(t),Ja=h(r),xe=a(r,"H2",{class:!0});var wd=d(xe);ot=a(wd,"A",{id:!0,class:!0,href:!0});var k_=d(ot);Or=a(k_,"SPAN",{});var q_=d(Or);w(eo.$$.fragment,q_),q_.forEach(t),k_.forEach(t),Ai=h(wd),Cr=a(wd,"SPAN",{});var y_=d(Cr);Pi=n(y_,"RagTokenizer"),y_.forEach(t),wd.forEach(t),Xa=h(r),Re=a(r,"DIV",{class:!0});var kd=d(Re);w(to.$$.fragment,kd),Ni=h(kd),nt=a(kd,"DIV",{class:!0});var qd=d(nt);w(oo.$$.fragment,qd),Oi=h(qd),Lr=a(qd,"P",{});var x_=d(Lr);Ci=n(x_,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),x_.forEach(t),qd.forEach(t),kd.forEach(t),Za=h(r),Fe=a(r,"H2",{class:!0});var yd=d(Fe);rt=a(yd,"A",{id:!0,class:!0,href:!0});var R_=d(rt);Sr=a(R_,"SPAN",{});var F_=d(Sr);w(no.$$.fragment,F_),F_.forEach(t),R_.forEach(t),Li=h(yd),Dr=a(yd,"SPAN",{});var $_=d(Dr);Si=n($_,"Rag specific outputs"),$_.forEach(t),yd.forEach(t),ed=h(r),$e=a(r,"DIV",{class:!0});var xd=d($e);w(ro.$$.fragment,xd),Di=h(xd),Ir=a(xd,"P",{});var z_=d(Ir);Ii=n(z_,"Base class for retriever augmented marginalized models outputs."),z_.forEach(t),xd.forEach(t),td=h(r),so=a(r,"DIV",{class:!0});var E_=d(so);w(ao.$$.fragment,E_),E_.forEach(t),od=h(r),ze=a(r,"H2",{class:!0});var Rd=d(ze);st=a(Rd,"A",{id:!0,class:!0,href:!0});var j_=d(st);Wr=a(j_,"SPAN",{});var G_=d(Wr);w(io.$$.fragment,G_),G_.forEach(t),j_.forEach(t),Wi=h(Rd),Hr=a(Rd,"SPAN",{});var M_=d(Hr);Hi=n(M_,"RagRetriever"),M_.forEach(t),Rd.forEach(t),nd=h(r),Z=a(r,"DIV",{class:!0});var ue=d(Z);w(co.$$.fragment,ue),Bi=h(ue),Br=a(ue,"P",{});var A_=d(Br);Qi=n(A_,`Retriever used to get documents from vector queries. It retrieves the documents embeddings as well as the documents
contents, and it formats them to be used with a RagModel.`),A_.forEach(t),Ui=h(ue),w(at.$$.fragment,ue),Vi=h(ue),dt=a(ue,"DIV",{class:!0});var Fd=d(dt);w(lo.$$.fragment,Fd),Ki=h(Fd),Qr=a(Fd,"P",{});var P_=d(Qr);Yi=n(P_,"Retriever initialization function. It loads the index into memory."),P_.forEach(t),Fd.forEach(t),Ji=h(ue),it=a(ue,"DIV",{class:!0});var $d=d(it);w(po.$$.fragment,$d),Xi=h($d),Ee=a($d,"P",{});var vr=d(Ee);Zi=n(vr,"Postprocessing retrieved "),Ur=a(vr,"CODE",{});var N_=d(Ur);ec=n(N_,"docs"),N_.forEach(t),tc=n(vr," and combining them with "),Vr=a(vr,"CODE",{});var O_=d(Vr);oc=n(O_,"input_strings"),O_.forEach(t),nc=n(vr,"."),vr.forEach(t),$d.forEach(t),rc=h(ue),ct=a(ue,"DIV",{class:!0});var zd=d(ct);w(ho.$$.fragment,zd),sc=h(zd),mo=a(zd,"P",{});var Ed=d(mo);ac=n(Ed,"Retrieves documents for specified "),Kr=a(Ed,"CODE",{});var C_=d(Kr);dc=n(C_,"question_hidden_states"),C_.forEach(t),ic=n(Ed,"."),Ed.forEach(t),zd.forEach(t),ue.forEach(t),rd=h(r),je=a(r,"H2",{class:!0});var jd=d(je);lt=a(jd,"A",{id:!0,class:!0,href:!0});var L_=d(lt);Yr=a(L_,"SPAN",{});var S_=d(Yr);w(uo.$$.fragment,S_),S_.forEach(t),L_.forEach(t),cc=h(jd),Jr=a(jd,"SPAN",{});var D_=d(Jr);lc=n(D_,"RagModel"),D_.forEach(t),jd.forEach(t),sd=h(r),L=a(r,"DIV",{class:!0});var X=d(L);w(go.$$.fragment,X),pc=h(X),Ge=a(X,"P",{});var br=d(Ge);hc=n(br,"The "),bn=a(br,"A",{href:!0});var I_=d(bn);mc=n(I_,"RagModel"),I_.forEach(t),uc=n(br," forward method, overrides the "),Xr=a(br,"CODE",{});var W_=d(Xr);gc=n(W_,"__call__"),W_.forEach(t),_c=n(br," special method."),br.forEach(t),fc=h(X),w(pt.$$.fragment,X),vc=h(X),Zr=a(X,"P",{});var H_=d(Zr);bc=n(H_,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),H_.forEach(t),Tc=h(X),te=a(X,"P",{});var fe=d(te);wc=n(fe,"The question encoder can be any "),es=a(fe,"EM",{});var B_=d(es);kc=n(B_,"autoencoding"),B_.forEach(t),qc=n(fe," model, preferably "),Tn=a(fe,"A",{href:!0});var Q_=d(Tn);yc=n(Q_,"DPRQuestionEncoder"),Q_.forEach(t),xc=n(fe,`, and the generator can be
any `),ts=a(fe,"EM",{});var U_=d(ts);Rc=n(U_,"seq2seq"),U_.forEach(t),Fc=n(fe," model, preferably "),wn=a(fe,"A",{href:!0});var V_=d(wn);$c=n(V_,"BartForConditionalGeneration"),V_.forEach(t),zc=n(fe,"."),fe.forEach(t),Ec=h(X),M=a(X,"P",{});var W=d(M);jc=n(W,"The model can be initialized with a "),kn=a(W,"A",{href:!0});var K_=d(kn);Gc=n(K_,"RagRetriever"),K_.forEach(t),Mc=n(W,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),os=a(W,"EM",{});var Y_=d(os);Ac=n(Y_,"autoencoding"),Y_.forEach(t),Pc=n(W," model as the "),ns=a(W,"CODE",{});var J_=d(ns);Nc=n(J_,"question_encoder"),J_.forEach(t),Oc=n(W," and any "),rs=a(W,"EM",{});var X_=d(rs);Cc=n(X_,"seq2seq"),X_.forEach(t),Lc=n(W," model with language model head as the "),ss=a(W,"CODE",{});var Z_=d(ss);Sc=n(Z_,"generator"),Z_.forEach(t),Dc=n(W,`.
It has been tested with `),qn=a(W,"A",{href:!0});var ef=d(qn);Ic=n(ef,"DPRQuestionEncoder"),ef.forEach(t),Wc=n(W," as the "),as=a(W,"CODE",{});var tf=d(as);Hc=n(tf,"question_encoder"),tf.forEach(t),Bc=n(W," and "),yn=a(W,"A",{href:!0});var of=d(yn);Qc=n(of,"BartForConditionalGeneration"),of.forEach(t),Uc=n(W,` or
`),xn=a(W,"A",{href:!0});var nf=d(xn);Vc=n(nf,"T5ForConditionalGeneration"),nf.forEach(t),Kc=n(W," as the "),ds=a(W,"CODE",{});var rf=d(ds);Yc=n(rf,"generator"),rf.forEach(t),Jc=n(W,"."),W.forEach(t),Xc=h(X),_o=a(X,"P",{});var Gd=d(_o);Zc=n(Gd,"This model inherits from "),Rn=a(Gd,"A",{href:!0});var sf=d(Rn);el=n(sf,"PreTrainedModel"),sf.forEach(t),tl=n(Gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gd.forEach(t),ol=h(X),fo=a(X,"P",{});var Md=d(fo);nl=n(Md,"This model is also a PyTorch "),vo=a(Md,"A",{href:!0,rel:!0});var af=d(vo);rl=n(af,"torch.nn.Module"),af.forEach(t),sl=n(Md,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Md.forEach(t),al=h(X),ie=a(X,"DIV",{class:!0});var Lt=d(ie);w(bo.$$.fragment,Lt),dl=h(Lt),Me=a(Lt,"P",{});var Tr=d(Me);il=n(Tr,"The "),Fn=a(Tr,"A",{href:!0});var df=d(Fn);cl=n(df,"RagModel"),df.forEach(t),ll=n(Tr," forward method, overrides the "),is=a(Tr,"CODE",{});var cf=d(is);pl=n(cf,"__call__"),cf.forEach(t),hl=n(Tr," special method."),Tr.forEach(t),ml=h(Lt),w(ht.$$.fragment,Lt),ul=h(Lt),w(mt.$$.fragment,Lt),Lt.forEach(t),X.forEach(t),ad=h(r),Ae=a(r,"H2",{class:!0});var Ad=d(Ae);ut=a(Ad,"A",{id:!0,class:!0,href:!0});var lf=d(ut);cs=a(lf,"SPAN",{});var pf=d(cs);w(To.$$.fragment,pf),pf.forEach(t),lf.forEach(t),gl=h(Ad),ls=a(Ad,"SPAN",{});var hf=d(ls);_l=n(hf,"RagSequenceForGeneration"),hf.forEach(t),Ad.forEach(t),dd=h(r),E=a(r,"DIV",{class:!0});var H=d(E);w(wo.$$.fragment,H),fl=h(H),Pe=a(H,"P",{});var wr=d(Pe);vl=n(wr,"The "),$n=a(wr,"A",{href:!0});var mf=d($n);bl=n(mf,"RagSequenceForGeneration"),mf.forEach(t),Tl=n(wr," forward method, overrides the "),ps=a(wr,"CODE",{});var uf=d(ps);wl=n(uf,"__call__"),uf.forEach(t),kl=n(wr," special method."),wr.forEach(t),ql=h(H),w(gt.$$.fragment,H),yl=h(H),hs=a(H,"P",{});var gf=d(hs);xl=n(gf,"A RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),gf.forEach(t),Rl=h(H),ms=a(H,"P",{});var _f=d(ms);Fl=n(_f,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),_f.forEach(t),$l=h(H),oe=a(H,"P",{});var ve=d(oe);zl=n(ve,"The question encoder can be any "),us=a(ve,"EM",{});var ff=d(us);El=n(ff,"autoencoding"),ff.forEach(t),jl=n(ve," model, preferably "),zn=a(ve,"A",{href:!0});var vf=d(zn);Gl=n(vf,"DPRQuestionEncoder"),vf.forEach(t),Ml=n(ve,`, and the generator can be
any `),gs=a(ve,"EM",{});var bf=d(gs);Al=n(bf,"seq2seq"),bf.forEach(t),Pl=n(ve," model, preferably "),En=a(ve,"A",{href:!0});var Tf=d(En);Nl=n(Tf,"BartForConditionalGeneration"),Tf.forEach(t),Ol=n(ve,"."),ve.forEach(t),Cl=h(H),A=a(H,"P",{});var B=d(A);Ll=n(B,"The model can be initialized with a "),jn=a(B,"A",{href:!0});var wf=d(jn);Sl=n(wf,"RagRetriever"),wf.forEach(t),Dl=n(B,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),_s=a(B,"EM",{});var kf=d(_s);Il=n(kf,"autoencoding"),kf.forEach(t),Wl=n(B," model as the "),fs=a(B,"CODE",{});var qf=d(fs);Hl=n(qf,"question_encoder"),qf.forEach(t),Bl=n(B," and any "),vs=a(B,"EM",{});var yf=d(vs);Ql=n(yf,"seq2seq"),yf.forEach(t),Ul=n(B," model with language model head as the "),bs=a(B,"CODE",{});var xf=d(bs);Vl=n(xf,"generator"),xf.forEach(t),Kl=n(B,`.
It has been tested with `),Gn=a(B,"A",{href:!0});var Rf=d(Gn);Yl=n(Rf,"DPRQuestionEncoder"),Rf.forEach(t),Jl=n(B," as the "),Ts=a(B,"CODE",{});var Ff=d(Ts);Xl=n(Ff,"question_encoder"),Ff.forEach(t),Zl=n(B," and "),Mn=a(B,"A",{href:!0});var $f=d(Mn);ep=n($f,"BartForConditionalGeneration"),$f.forEach(t),tp=n(B,` or
`),An=a(B,"A",{href:!0});var zf=d(An);op=n(zf,"T5ForConditionalGeneration"),zf.forEach(t),np=n(B," as the "),ws=a(B,"CODE",{});var Ef=d(ws);rp=n(Ef,"generator"),Ef.forEach(t),sp=n(B,"."),B.forEach(t),ap=h(H),ko=a(H,"P",{});var Pd=d(ko);dp=n(Pd,"This model inherits from "),Pn=a(Pd,"A",{href:!0});var jf=d(Pn);ip=n(jf,"PreTrainedModel"),jf.forEach(t),cp=n(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),lp=h(H),qo=a(H,"P",{});var Nd=d(qo);pp=n(Nd,"This model is also a PyTorch "),yo=a(Nd,"A",{href:!0,rel:!0});var Gf=d(yo);hp=n(Gf,"torch.nn.Module"),Gf.forEach(t),mp=n(Nd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd.forEach(t),up=h(H),ce=a(H,"DIV",{class:!0});var St=d(ce);w(xo.$$.fragment,St),gp=h(St),Ne=a(St,"P",{});var kr=d(Ne);_p=n(kr,"The "),Nn=a(kr,"A",{href:!0});var Mf=d(Nn);fp=n(Mf,"RagSequenceForGeneration"),Mf.forEach(t),vp=n(kr," forward method, overrides the "),ks=a(kr,"CODE",{});var Af=d(ks);bp=n(Af,"__call__"),Af.forEach(t),Tp=n(kr," special method."),kr.forEach(t),wp=h(St),w(_t.$$.fragment,St),kp=h(St),w(ft.$$.fragment,St),St.forEach(t),qp=h(H),vt=a(H,"DIV",{class:!0});var Od=d(vt);w(Ro.$$.fragment,Od),yp=h(Od),Fo=a(Od,"P",{});var Cd=d(Fo);xp=n(Cd,"Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),On=a(Cd,"A",{href:!0});var Pf=d(On);Rp=n(Pf,"generate()"),Pf.forEach(t),Fp=n(Cd,"`\ndocumentation for more information on how to set other generate input parameters."),Cd.forEach(t),Od.forEach(t),H.forEach(t),id=h(r),Oe=a(r,"H2",{class:!0});var Ld=d(Oe);bt=a(Ld,"A",{id:!0,class:!0,href:!0});var Nf=d(bt);qs=a(Nf,"SPAN",{});var Of=d(qs);w($o.$$.fragment,Of),Of.forEach(t),Nf.forEach(t),$p=h(Ld),ys=a(Ld,"SPAN",{});var Cf=d(ys);zp=n(Cf,"RagTokenForGeneration"),Cf.forEach(t),Ld.forEach(t),cd=h(r),j=a(r,"DIV",{class:!0});var Q=d(j);w(zo.$$.fragment,Q),Ep=h(Q),Ce=a(Q,"P",{});var qr=d(Ce);jp=n(qr,"The "),Cn=a(qr,"A",{href:!0});var Lf=d(Cn);Gp=n(Lf,"RagTokenForGeneration"),Lf.forEach(t),Mp=n(qr," forward method, overrides the "),xs=a(qr,"CODE",{});var Sf=d(xs);Ap=n(Sf,"__call__"),Sf.forEach(t),Pp=n(qr," special method."),qr.forEach(t),Np=h(Q),w(Tt.$$.fragment,Q),Op=h(Q),Rs=a(Q,"P",{});var Df=d(Rs);Cp=n(Df,"A RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),Df.forEach(t),Lp=h(Q),Fs=a(Q,"P",{});var If=d(Fs);Sp=n(If,`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`),If.forEach(t),Dp=h(Q),ne=a(Q,"P",{});var be=d(ne);Ip=n(be,"The question encoder can be any "),$s=a(be,"EM",{});var Wf=d($s);Wp=n(Wf,"autoencoding"),Wf.forEach(t),Hp=n(be," model, preferably "),Ln=a(be,"A",{href:!0});var Hf=d(Ln);Bp=n(Hf,"DPRQuestionEncoder"),Hf.forEach(t),Qp=n(be,`, and the generator can be
any `),zs=a(be,"EM",{});var Bf=d(zs);Up=n(Bf,"seq2seq"),Bf.forEach(t),Vp=n(be," model, preferably "),Sn=a(be,"A",{href:!0});var Qf=d(Sn);Kp=n(Qf,"BartForConditionalGeneration"),Qf.forEach(t),Yp=n(be,"."),be.forEach(t),Jp=h(Q),P=a(Q,"P",{});var U=d(P);Xp=n(U,"The model can be initialized with a "),Dn=a(U,"A",{href:!0});var Uf=d(Dn);Zp=n(Uf,"RagRetriever"),Uf.forEach(t),eh=n(U,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Es=a(U,"EM",{});var Vf=d(Es);th=n(Vf,"autoencoding"),Vf.forEach(t),oh=n(U," model as the "),js=a(U,"CODE",{});var Kf=d(js);nh=n(Kf,"question_encoder"),Kf.forEach(t),rh=n(U," and any "),Gs=a(U,"EM",{});var Yf=d(Gs);sh=n(Yf,"seq2seq"),Yf.forEach(t),ah=n(U," model with language model head as the "),Ms=a(U,"CODE",{});var Jf=d(Ms);dh=n(Jf,"generator"),Jf.forEach(t),ih=n(U,`.
It has been tested with `),In=a(U,"A",{href:!0});var Xf=d(In);ch=n(Xf,"DPRQuestionEncoder"),Xf.forEach(t),lh=n(U," as the "),As=a(U,"CODE",{});var Zf=d(As);ph=n(Zf,"question_encoder"),Zf.forEach(t),hh=n(U," and "),Wn=a(U,"A",{href:!0});var ev=d(Wn);mh=n(ev,"BartForConditionalGeneration"),ev.forEach(t),uh=n(U,` or
`),Hn=a(U,"A",{href:!0});var tv=d(Hn);gh=n(tv,"T5ForConditionalGeneration"),tv.forEach(t),_h=n(U," as the "),Ps=a(U,"CODE",{});var ov=d(Ps);fh=n(ov,"generator"),ov.forEach(t),vh=n(U,"."),U.forEach(t),bh=h(Q),Eo=a(Q,"P",{});var Sd=d(Eo);Th=n(Sd,"This model inherits from "),Bn=a(Sd,"A",{href:!0});var nv=d(Bn);wh=n(nv,"PreTrainedModel"),nv.forEach(t),kh=n(Sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd.forEach(t),qh=h(Q),jo=a(Q,"P",{});var Dd=d(jo);yh=n(Dd,"This model is also a PyTorch "),Go=a(Dd,"A",{href:!0,rel:!0});var rv=d(Go);xh=n(rv,"torch.nn.Module"),rv.forEach(t),Rh=n(Dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd.forEach(t),Fh=h(Q),le=a(Q,"DIV",{class:!0});var Dt=d(le);w(Mo.$$.fragment,Dt),$h=h(Dt),Le=a(Dt,"P",{});var yr=d(Le);zh=n(yr,"The "),Qn=a(yr,"A",{href:!0});var sv=d(Qn);Eh=n(sv,"RagTokenForGeneration"),sv.forEach(t),jh=n(yr," forward method, overrides the "),Ns=a(yr,"CODE",{});var av=d(Ns);Gh=n(av,"__call__"),av.forEach(t),Mh=n(yr," special method."),yr.forEach(t),Ah=h(Dt),w(wt.$$.fragment,Dt),Ph=h(Dt),w(kt.$$.fragment,Dt),Dt.forEach(t),Nh=h(Q),qt=a(Q,"DIV",{class:!0});var Id=d(qt);w(Ao.$$.fragment,Id),Oh=h(Id),Os=a(Id,"P",{});var dv=d(Os);Ch=n(dv,"Implements RAG token decoding."),dv.forEach(t),Id.forEach(t),Q.forEach(t),ld=h(r),Se=a(r,"H2",{class:!0});var Wd=d(Se);yt=a(Wd,"A",{id:!0,class:!0,href:!0});var iv=d(yt);Cs=a(iv,"SPAN",{});var cv=d(Cs);w(Po.$$.fragment,cv),cv.forEach(t),iv.forEach(t),Lh=h(Wd),Ls=a(Wd,"SPAN",{});var lv=d(Ls);Sh=n(lv,"TFRagModel"),lv.forEach(t),Wd.forEach(t),pd=h(r),N=a(r,"DIV",{class:!0});var V=d(N);w(No.$$.fragment,V),Dh=h(V),De=a(V,"P",{});var xr=d(De);Ih=n(xr,"The "),Un=a(xr,"A",{href:!0});var pv=d(Un);Wh=n(pv,"TFRagModel"),pv.forEach(t),Hh=n(xr," forward method, overrides the "),Ss=a(xr,"CODE",{});var hv=d(Ss);Bh=n(hv,"__call__"),hv.forEach(t),Qh=n(xr," special method."),xr.forEach(t),Uh=h(V),w(xt.$$.fragment,V),Vh=h(V),Ds=a(V,"P",{});var mv=d(Ds);Kh=n(mv,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),mv.forEach(t),Yh=h(V),re=a(V,"P",{});var Te=d(re);Jh=n(Te,"The question encoder can be any "),Is=a(Te,"EM",{});var uv=d(Is);Xh=n(uv,"autoencoding"),uv.forEach(t),Zh=n(Te," model, preferably "),Vn=a(Te,"A",{href:!0});var gv=d(Vn);em=n(gv,"TFDPRQuestionEncoder"),gv.forEach(t),tm=n(Te,`, and the generator can be
any `),Ws=a(Te,"EM",{});var _v=d(Ws);om=n(_v,"seq2seq"),_v.forEach(t),nm=n(Te," model, preferably "),Kn=a(Te,"A",{href:!0});var fv=d(Kn);rm=n(fv,"TFBartForConditionalGeneration"),fv.forEach(t),sm=n(Te,"."),Te.forEach(t),am=h(V),S=a(V,"P",{});var K=d(S);dm=n(K,"The model can be initialized with a "),Yn=a(K,"A",{href:!0});var vv=d(Yn);im=n(vv,"RagRetriever"),vv.forEach(t),cm=n(K,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Hs=a(K,"EM",{});var bv=d(Hs);lm=n(bv,"autoencoding"),bv.forEach(t),pm=n(K," model as the "),Bs=a(K,"CODE",{});var Tv=d(Bs);hm=n(Tv,"question_encoder"),Tv.forEach(t),mm=n(K," and any "),Qs=a(K,"EM",{});var wv=d(Qs);um=n(wv,"seq2seq"),wv.forEach(t),gm=n(K," model with language model head as the "),Us=a(K,"CODE",{});var kv=d(Us);_m=n(kv,"generator"),kv.forEach(t),fm=n(K,`.
It has been tested with `),Jn=a(K,"A",{href:!0});var qv=d(Jn);vm=n(qv,"TFDPRQuestionEncoder"),qv.forEach(t),bm=n(K," as the "),Vs=a(K,"CODE",{});var yv=d(Vs);Tm=n(yv,"question_encoder"),yv.forEach(t),wm=n(K," and "),Xn=a(K,"A",{href:!0});var xv=d(Xn);km=n(xv,"TFBartForConditionalGeneration"),xv.forEach(t),qm=n(K,`
as the `),Ks=a(K,"CODE",{});var Rv=d(Ks);ym=n(Rv,"generator"),Rv.forEach(t),xm=n(K,"."),K.forEach(t),Rm=h(V),Oo=a(V,"P",{});var Hd=d(Oo);Fm=n(Hd,"This model inherits from "),Zn=a(Hd,"A",{href:!0});var Fv=d(Zn);$m=n(Fv,"TFPreTrainedModel"),Fv.forEach(t),zm=n(Hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hd.forEach(t),Em=h(V),Co=a(V,"P",{});var Bd=d(Co);jm=n(Bd,"This model is also a Tensorflow "),Lo=a(Bd,"A",{href:!0,rel:!0});var $v=d(Lo);Gm=n($v,"tf.keras.Model"),$v.forEach(t),Mm=n(Bd,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Bd.forEach(t),Am=h(V),Ys=a(V,"P",{});var zv=d(Ys);Pm=n(zv,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),zv.forEach(t),Nm=h(V),pe=a(V,"DIV",{class:!0});var It=d(pe);w(So.$$.fragment,It),Om=h(It),Ie=a(It,"P",{});var Rr=d(Ie);Cm=n(Rr,"The "),er=a(Rr,"A",{href:!0});var Ev=d(er);Lm=n(Ev,"TFRagModel"),Ev.forEach(t),Sm=n(Rr," forward method, overrides the "),Js=a(Rr,"CODE",{});var jv=d(Js);Dm=n(jv,"__call__"),jv.forEach(t),Im=n(Rr," special method."),Rr.forEach(t),Wm=h(It),w(Rt.$$.fragment,It),Hm=h(It),w(Ft.$$.fragment,It),It.forEach(t),V.forEach(t),hd=h(r),We=a(r,"H2",{class:!0});var Qd=d(We);$t=a(Qd,"A",{id:!0,class:!0,href:!0});var Gv=d($t);Xs=a(Gv,"SPAN",{});var Mv=d(Xs);w(Do.$$.fragment,Mv),Mv.forEach(t),Gv.forEach(t),Bm=h(Qd),Zs=a(Qd,"SPAN",{});var Av=d(Zs);Qm=n(Av,"TFRagSequenceForGeneration"),Av.forEach(t),Qd.forEach(t),md=h(r),$=a(r,"DIV",{class:!0});var O=d($);w(Io.$$.fragment,O),Um=h(O),He=a(O,"P",{});var Fr=d(He);Vm=n(Fr,"The "),tr=a(Fr,"A",{href:!0});var Pv=d(tr);Km=n(Pv,"TFRagSequenceForGeneration"),Pv.forEach(t),Ym=n(Fr," forward method, overrides the "),ea=a(Fr,"CODE",{});var Nv=d(ea);Jm=n(Nv,"__call__"),Nv.forEach(t),Xm=n(Fr," special method."),Fr.forEach(t),Zm=h(O),w(zt.$$.fragment,O),eu=h(O),ta=a(O,"P",{});var Ov=d(ta);tu=n(Ov,"A TF RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass."),Ov.forEach(t),ou=h(O),oa=a(O,"P",{});var Cv=d(oa);nu=n(Cv,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),Cv.forEach(t),ru=h(O),se=a(O,"P",{});var we=d(se);su=n(we,"The question encoder can be any "),na=a(we,"EM",{});var Lv=d(na);au=n(Lv,"autoencoding"),Lv.forEach(t),du=n(we," model, preferably "),or=a(we,"A",{href:!0});var Sv=d(or);iu=n(Sv,"TFDPRQuestionEncoder"),Sv.forEach(t),cu=n(we,`, and the generator can be
any `),ra=a(we,"EM",{});var Dv=d(ra);lu=n(Dv,"seq2seq"),Dv.forEach(t),pu=n(we," model, preferably "),nr=a(we,"A",{href:!0});var Iv=d(nr);hu=n(Iv,"TFBartForConditionalGeneration"),Iv.forEach(t),mu=n(we,"."),we.forEach(t),uu=h(O),D=a(O,"P",{});var Y=d(D);gu=n(Y,"The model can be initialized with a "),rr=a(Y,"A",{href:!0});var Wv=d(rr);_u=n(Wv,"RagRetriever"),Wv.forEach(t),fu=n(Y,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),sa=a(Y,"EM",{});var Hv=d(sa);vu=n(Hv,"autoencoding"),Hv.forEach(t),bu=n(Y," model as the "),aa=a(Y,"CODE",{});var Bv=d(aa);Tu=n(Bv,"question_encoder"),Bv.forEach(t),wu=n(Y," and any "),da=a(Y,"EM",{});var Qv=d(da);ku=n(Qv,"seq2seq"),Qv.forEach(t),qu=n(Y," model with language model head as the "),ia=a(Y,"CODE",{});var Uv=d(ia);yu=n(Uv,"generator"),Uv.forEach(t),xu=n(Y,`.
It has been tested with `),sr=a(Y,"A",{href:!0});var Vv=d(sr);Ru=n(Vv,"TFDPRQuestionEncoder"),Vv.forEach(t),Fu=n(Y," as the "),ca=a(Y,"CODE",{});var Kv=d(ca);$u=n(Kv,"question_encoder"),Kv.forEach(t),zu=n(Y," and "),ar=a(Y,"A",{href:!0});var Yv=d(ar);Eu=n(Yv,"TFBartForConditionalGeneration"),Yv.forEach(t),ju=n(Y,`
as the `),la=a(Y,"CODE",{});var Jv=d(la);Gu=n(Jv,"generator"),Jv.forEach(t),Mu=n(Y,"."),Y.forEach(t),Au=h(O),Wo=a(O,"P",{});var Ud=d(Wo);Pu=n(Ud,"This model inherits from "),dr=a(Ud,"A",{href:!0});var Xv=d(dr);Nu=n(Xv,"TFPreTrainedModel"),Xv.forEach(t),Ou=n(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),Cu=h(O),Ho=a(O,"P",{});var Vd=d(Ho);Lu=n(Vd,"This model is also a Tensorflow "),Bo=a(Vd,"A",{href:!0,rel:!0});var Zv=d(Bo);Su=n(Zv,"tf.keras.Model"),Zv.forEach(t),Du=n(Vd,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Vd.forEach(t),Iu=h(O),pa=a(O,"P",{});var eb=d(pa);Wu=n(eb,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),eb.forEach(t),Hu=h(O),he=a(O,"DIV",{class:!0});var Wt=d(he);w(Qo.$$.fragment,Wt),Bu=h(Wt),Be=a(Wt,"P",{});var $r=d(Be);Qu=n($r,"The "),ir=a($r,"A",{href:!0});var tb=d(ir);Uu=n(tb,"TFRagSequenceForGeneration"),tb.forEach(t),Vu=n($r," forward method, overrides the "),ha=a($r,"CODE",{});var ob=d(ha);Ku=n(ob,"__call__"),ob.forEach(t),Yu=n($r," special method."),$r.forEach(t),Ju=h(Wt),w(Et.$$.fragment,Wt),Xu=h(Wt),w(jt.$$.fragment,Wt),Wt.forEach(t),Zu=h(O),Gt=a(O,"DIV",{class:!0});var Kd=d(Gt);w(Uo.$$.fragment,Kd),eg=h(Kd),Vo=a(Kd,"P",{});var Yd=d(Vo);tg=n(Yd,"Implements RAG sequence \u201Cthorough\u201D decoding. Read the "),cr=a(Yd,"A",{href:!0});var nb=d(cr);og=n(nb,"generate()"),nb.forEach(t),ng=n(Yd,"`\ndocumentation for more information on how to set other generate input parameters"),Yd.forEach(t),Kd.forEach(t),O.forEach(t),ud=h(r),Qe=a(r,"H2",{class:!0});var Jd=d(Qe);Mt=a(Jd,"A",{id:!0,class:!0,href:!0});var rb=d(Mt);ma=a(rb,"SPAN",{});var sb=d(ma);w(Ko.$$.fragment,sb),sb.forEach(t),rb.forEach(t),rg=h(Jd),ua=a(Jd,"SPAN",{});var ab=d(ua);sg=n(ab,"TFRagTokenForGeneration"),ab.forEach(t),Jd.forEach(t),gd=h(r),z=a(r,"DIV",{class:!0});var C=d(z);w(Yo.$$.fragment,C),ag=h(C),Ue=a(C,"P",{});var zr=d(Ue);dg=n(zr,"The "),lr=a(zr,"A",{href:!0});var db=d(lr);ig=n(db,"TFRagTokenForGeneration"),db.forEach(t),cg=n(zr," forward method, overrides the "),ga=a(zr,"CODE",{});var ib=d(ga);lg=n(ib,"__call__"),ib.forEach(t),pg=n(zr," special method."),zr.forEach(t),hg=h(C),w(At.$$.fragment,C),mg=h(C),_a=a(C,"P",{});var cb=d(_a);ug=n(cb,"A TF RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass."),cb.forEach(t),gg=h(C),fa=a(C,"P",{});var lb=d(fa);_g=n(lb,`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`),lb.forEach(t),fg=h(C),ae=a(C,"P",{});var ke=d(ae);vg=n(ke,"The question encoder can be any "),va=a(ke,"EM",{});var pb=d(va);bg=n(pb,"autoencoding"),pb.forEach(t),Tg=n(ke," model, preferably "),pr=a(ke,"A",{href:!0});var hb=d(pr);wg=n(hb,"TFDPRQuestionEncoder"),hb.forEach(t),kg=n(ke,`, and the generator can be
any `),ba=a(ke,"EM",{});var mb=d(ba);qg=n(mb,"seq2seq"),mb.forEach(t),yg=n(ke," model, preferably "),hr=a(ke,"A",{href:!0});var ub=d(hr);xg=n(ub,"TFBartForConditionalGeneration"),ub.forEach(t),Rg=n(ke,"."),ke.forEach(t),Fg=h(C),I=a(C,"P",{});var J=d(I);$g=n(J,"The model can be initialized with a "),mr=a(J,"A",{href:!0});var gb=d(mr);zg=n(gb,"RagRetriever"),gb.forEach(t),Eg=n(J,` for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
`),Ta=a(J,"EM",{});var _b=d(Ta);jg=n(_b,"autoencoding"),_b.forEach(t),Gg=n(J," model as the "),wa=a(J,"CODE",{});var fb=d(wa);Mg=n(fb,"question_encoder"),fb.forEach(t),Ag=n(J," and any "),ka=a(J,"EM",{});var vb=d(ka);Pg=n(vb,"seq2seq"),vb.forEach(t),Ng=n(J," model with language model head as the "),qa=a(J,"CODE",{});var bb=d(qa);Og=n(bb,"generator"),bb.forEach(t),Cg=n(J,`.
It has been tested with `),ur=a(J,"A",{href:!0});var Tb=d(ur);Lg=n(Tb,"TFDPRQuestionEncoder"),Tb.forEach(t),Sg=n(J," as the "),ya=a(J,"CODE",{});var wb=d(ya);Dg=n(wb,"question_encoder"),wb.forEach(t),Ig=n(J," and "),gr=a(J,"A",{href:!0});var kb=d(gr);Wg=n(kb,"TFBartForConditionalGeneration"),kb.forEach(t),Hg=n(J,`
as the `),xa=a(J,"CODE",{});var qb=d(xa);Bg=n(qb,"generator"),qb.forEach(t),Qg=n(J,"."),J.forEach(t),Ug=h(C),Jo=a(C,"P",{});var Xd=d(Jo);Vg=n(Xd,"This model inherits from "),_r=a(Xd,"A",{href:!0});var yb=d(_r);Kg=n(yb,"TFPreTrainedModel"),yb.forEach(t),Yg=n(Xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd.forEach(t),Jg=h(C),Xo=a(C,"P",{});var Zd=d(Xo);Xg=n(Zd,"This model is also a Tensorflow "),Zo=a(Zd,"A",{href:!0,rel:!0});var xb=d(Zo);Zg=n(xb,"tf.keras.Model"),xb.forEach(t),e_=n(Zd,`
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`),Zd.forEach(t),t_=h(C),Ra=a(C,"P",{});var Rb=d(Ra);o_=n(Rb,`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`),Rb.forEach(t),n_=h(C),me=a(C,"DIV",{class:!0});var Ht=d(me);w(en.$$.fragment,Ht),r_=h(Ht),Ve=a(Ht,"P",{});var Er=d(Ve);s_=n(Er,"The "),fr=a(Er,"A",{href:!0});var Fb=d(fr);a_=n(Fb,"TFRagTokenForGeneration"),Fb.forEach(t),d_=n(Er," forward method, overrides the "),Fa=a(Er,"CODE",{});var $b=d(Fa);i_=n($b,"__call__"),$b.forEach(t),c_=n(Er," special method."),Er.forEach(t),l_=h(Ht),w(Pt.$$.fragment,Ht),p_=h(Ht),w(Nt.$$.fragment,Ht),Ht.forEach(t),h_=h(C),Ot=a(C,"DIV",{class:!0});var ei=d(Ot);w(tn.$$.fragment,ei),m_=h(ei),$a=a(ei,"P",{});var zb=d($a);u_=n(zb,"Implements TFRAG token decoding."),zb.forEach(t),ei.forEach(t),C.forEach(t),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(tT)),l(g,"id","rag"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#rag"),l(u,"class","relative group"),l(Ye,"id","overview"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#overview"),l(qe,"class","relative group"),l(Qt,"href","https://arxiv.org/abs/2005.11401"),l(Qt,"rel","nofollow"),l(Ut,"href","https://huggingface.co/ola13"),l(Ut,"rel","nofollow"),l(Ze,"id","transformers.RagConfig"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#transformers.RagConfig"),l(ye,"class","relative group"),l(un,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagConfig"),l(gn,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(_n,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(fn,"href","/docs/transformers/v4.21.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(vn,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.RagTokenizer"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.RagTokenizer"),l(xe,"class","relative group"),l(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"id","transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"),l(Fe,"class","relative group"),l($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"id","transformers.RagRetriever"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.RagRetriever"),l(ze,"class","relative group"),l(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lt,"id","transformers.RagModel"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.RagModel"),l(je,"class","relative group"),l(bn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagModel"),l(Tn,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(wn,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(kn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever"),l(qn,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(yn,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(xn,"href","/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(Rn,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),l(vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(vo,"rel","nofollow"),l(Fn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagModel"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ut,"id","transformers.RagSequenceForGeneration"),l(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ut,"href","#transformers.RagSequenceForGeneration"),l(Ae,"class","relative group"),l($n,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagSequenceForGeneration"),l(zn,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(En,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(jn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever"),l(Gn,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(Mn,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(An,"href","/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(Pn,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),l(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(yo,"rel","nofollow"),l(Nn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagSequenceForGeneration"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(On,"href","/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(bt,"id","transformers.RagTokenForGeneration"),l(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(bt,"href","#transformers.RagTokenForGeneration"),l(Oe,"class","relative group"),l(Cn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration"),l(Ln,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(Sn,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Dn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever"),l(In,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.DPRQuestionEncoder"),l(Wn,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),l(Hn,"href","/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),l(Bn,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),l(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Go,"rel","nofollow"),l(Qn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagTokenForGeneration"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(yt,"id","transformers.TFRagModel"),l(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(yt,"href","#transformers.TFRagModel"),l(Se,"class","relative group"),l(Un,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagModel"),l(Vn,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(Kn,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(Yn,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever"),l(Jn,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(Xn,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(Zn,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),l(Lo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Lo,"rel","nofollow"),l(er,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagModel"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($t,"id","transformers.TFRagSequenceForGeneration"),l($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($t,"href","#transformers.TFRagSequenceForGeneration"),l(We,"class","relative group"),l(tr,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagSequenceForGeneration"),l(or,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(nr,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(rr,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever"),l(sr,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(ar,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(dr,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),l(Bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Bo,"rel","nofollow"),l(ir,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagSequenceForGeneration"),l(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(cr,"href","/docs/transformers/v4.21.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Mt,"id","transformers.TFRagTokenForGeneration"),l(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Mt,"href","#transformers.TFRagTokenForGeneration"),l(Qe,"class","relative group"),l(lr,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagTokenForGeneration"),l(pr,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(hr,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(mr,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.RagRetriever"),l(ur,"href","/docs/transformers/v4.21.2/en/model_doc/dpr#transformers.TFDPRQuestionEncoder"),l(gr,"href","/docs/transformers/v4.21.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),l(_r,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),l(Zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Zo,"rel","nofollow"),l(fr,"href","/docs/transformers/v4.21.2/en/model_doc/rag#transformers.TFRagTokenForGeneration"),l(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,_){e(document.head,c),v(r,b,_),v(r,u,_),e(u,g),e(g,f),k(i,f,null),e(u,m),e(u,R),e(R,ti),v(r,Wa,_),v(r,qe,_),e(qe,Ye),e(Ye,jr),k(Bt,jr,null),e(qe,oi),e(qe,Gr),e(Gr,ni),v(r,Ha,_),v(r,pn,_),e(pn,ri),v(r,Ba,_),v(r,Je,_),e(Je,si),e(Je,Qt),e(Qt,ai),e(Je,di),v(r,Qa,_),v(r,hn,_),e(hn,ii),v(r,Ua,_),v(r,mn,_),e(mn,Mr),e(Mr,ci),v(r,Va,_),v(r,Xe,_),e(Xe,li),e(Xe,Ut),e(Ut,pi),e(Xe,hi),v(r,Ka,_),v(r,ye,_),e(ye,Ze),e(Ze,Ar),k(Vt,Ar,null),e(ye,mi),e(ye,Pr),e(Pr,ui),v(r,Ya,_),v(r,ee,_),k(Kt,ee,null),e(ee,gi),e(ee,de),e(de,un),e(un,_i),e(de,fi),e(de,Nr),e(Nr,vi),e(de,bi),e(de,gn),e(gn,Ti),e(de,wi),e(de,_n),e(_n,ki),e(de,qi),e(ee,yi),e(ee,et),k(Yt,et,null),e(et,xi),e(et,Jt),e(Jt,Ri),e(Jt,fn),e(fn,Fi),e(Jt,$i),e(ee,zi),e(ee,tt),k(Xt,tt,null),e(tt,Ei),e(tt,Zt),e(Zt,ji),e(Zt,vn),e(vn,Gi),e(Zt,Mi),v(r,Ja,_),v(r,xe,_),e(xe,ot),e(ot,Or),k(eo,Or,null),e(xe,Ai),e(xe,Cr),e(Cr,Pi),v(r,Xa,_),v(r,Re,_),k(to,Re,null),e(Re,Ni),e(Re,nt),k(oo,nt,null),e(nt,Oi),e(nt,Lr),e(Lr,Ci),v(r,Za,_),v(r,Fe,_),e(Fe,rt),e(rt,Sr),k(no,Sr,null),e(Fe,Li),e(Fe,Dr),e(Dr,Si),v(r,ed,_),v(r,$e,_),k(ro,$e,null),e($e,Di),e($e,Ir),e(Ir,Ii),v(r,td,_),v(r,so,_),k(ao,so,null),v(r,od,_),v(r,ze,_),e(ze,st),e(st,Wr),k(io,Wr,null),e(ze,Wi),e(ze,Hr),e(Hr,Hi),v(r,nd,_),v(r,Z,_),k(co,Z,null),e(Z,Bi),e(Z,Br),e(Br,Qi),e(Z,Ui),k(at,Z,null),e(Z,Vi),e(Z,dt),k(lo,dt,null),e(dt,Ki),e(dt,Qr),e(Qr,Yi),e(Z,Ji),e(Z,it),k(po,it,null),e(it,Xi),e(it,Ee),e(Ee,Zi),e(Ee,Ur),e(Ur,ec),e(Ee,tc),e(Ee,Vr),e(Vr,oc),e(Ee,nc),e(Z,rc),e(Z,ct),k(ho,ct,null),e(ct,sc),e(ct,mo),e(mo,ac),e(mo,Kr),e(Kr,dc),e(mo,ic),v(r,rd,_),v(r,je,_),e(je,lt),e(lt,Yr),k(uo,Yr,null),e(je,cc),e(je,Jr),e(Jr,lc),v(r,sd,_),v(r,L,_),k(go,L,null),e(L,pc),e(L,Ge),e(Ge,hc),e(Ge,bn),e(bn,mc),e(Ge,uc),e(Ge,Xr),e(Xr,gc),e(Ge,_c),e(L,fc),k(pt,L,null),e(L,vc),e(L,Zr),e(Zr,bc),e(L,Tc),e(L,te),e(te,wc),e(te,es),e(es,kc),e(te,qc),e(te,Tn),e(Tn,yc),e(te,xc),e(te,ts),e(ts,Rc),e(te,Fc),e(te,wn),e(wn,$c),e(te,zc),e(L,Ec),e(L,M),e(M,jc),e(M,kn),e(kn,Gc),e(M,Mc),e(M,os),e(os,Ac),e(M,Pc),e(M,ns),e(ns,Nc),e(M,Oc),e(M,rs),e(rs,Cc),e(M,Lc),e(M,ss),e(ss,Sc),e(M,Dc),e(M,qn),e(qn,Ic),e(M,Wc),e(M,as),e(as,Hc),e(M,Bc),e(M,yn),e(yn,Qc),e(M,Uc),e(M,xn),e(xn,Vc),e(M,Kc),e(M,ds),e(ds,Yc),e(M,Jc),e(L,Xc),e(L,_o),e(_o,Zc),e(_o,Rn),e(Rn,el),e(_o,tl),e(L,ol),e(L,fo),e(fo,nl),e(fo,vo),e(vo,rl),e(fo,sl),e(L,al),e(L,ie),k(bo,ie,null),e(ie,dl),e(ie,Me),e(Me,il),e(Me,Fn),e(Fn,cl),e(Me,ll),e(Me,is),e(is,pl),e(Me,hl),e(ie,ml),k(ht,ie,null),e(ie,ul),k(mt,ie,null),v(r,ad,_),v(r,Ae,_),e(Ae,ut),e(ut,cs),k(To,cs,null),e(Ae,gl),e(Ae,ls),e(ls,_l),v(r,dd,_),v(r,E,_),k(wo,E,null),e(E,fl),e(E,Pe),e(Pe,vl),e(Pe,$n),e($n,bl),e(Pe,Tl),e(Pe,ps),e(ps,wl),e(Pe,kl),e(E,ql),k(gt,E,null),e(E,yl),e(E,hs),e(hs,xl),e(E,Rl),e(E,ms),e(ms,Fl),e(E,$l),e(E,oe),e(oe,zl),e(oe,us),e(us,El),e(oe,jl),e(oe,zn),e(zn,Gl),e(oe,Ml),e(oe,gs),e(gs,Al),e(oe,Pl),e(oe,En),e(En,Nl),e(oe,Ol),e(E,Cl),e(E,A),e(A,Ll),e(A,jn),e(jn,Sl),e(A,Dl),e(A,_s),e(_s,Il),e(A,Wl),e(A,fs),e(fs,Hl),e(A,Bl),e(A,vs),e(vs,Ql),e(A,Ul),e(A,bs),e(bs,Vl),e(A,Kl),e(A,Gn),e(Gn,Yl),e(A,Jl),e(A,Ts),e(Ts,Xl),e(A,Zl),e(A,Mn),e(Mn,ep),e(A,tp),e(A,An),e(An,op),e(A,np),e(A,ws),e(ws,rp),e(A,sp),e(E,ap),e(E,ko),e(ko,dp),e(ko,Pn),e(Pn,ip),e(ko,cp),e(E,lp),e(E,qo),e(qo,pp),e(qo,yo),e(yo,hp),e(qo,mp),e(E,up),e(E,ce),k(xo,ce,null),e(ce,gp),e(ce,Ne),e(Ne,_p),e(Ne,Nn),e(Nn,fp),e(Ne,vp),e(Ne,ks),e(ks,bp),e(Ne,Tp),e(ce,wp),k(_t,ce,null),e(ce,kp),k(ft,ce,null),e(E,qp),e(E,vt),k(Ro,vt,null),e(vt,yp),e(vt,Fo),e(Fo,xp),e(Fo,On),e(On,Rp),e(Fo,Fp),v(r,id,_),v(r,Oe,_),e(Oe,bt),e(bt,qs),k($o,qs,null),e(Oe,$p),e(Oe,ys),e(ys,zp),v(r,cd,_),v(r,j,_),k(zo,j,null),e(j,Ep),e(j,Ce),e(Ce,jp),e(Ce,Cn),e(Cn,Gp),e(Ce,Mp),e(Ce,xs),e(xs,Ap),e(Ce,Pp),e(j,Np),k(Tt,j,null),e(j,Op),e(j,Rs),e(Rs,Cp),e(j,Lp),e(j,Fs),e(Fs,Sp),e(j,Dp),e(j,ne),e(ne,Ip),e(ne,$s),e($s,Wp),e(ne,Hp),e(ne,Ln),e(Ln,Bp),e(ne,Qp),e(ne,zs),e(zs,Up),e(ne,Vp),e(ne,Sn),e(Sn,Kp),e(ne,Yp),e(j,Jp),e(j,P),e(P,Xp),e(P,Dn),e(Dn,Zp),e(P,eh),e(P,Es),e(Es,th),e(P,oh),e(P,js),e(js,nh),e(P,rh),e(P,Gs),e(Gs,sh),e(P,ah),e(P,Ms),e(Ms,dh),e(P,ih),e(P,In),e(In,ch),e(P,lh),e(P,As),e(As,ph),e(P,hh),e(P,Wn),e(Wn,mh),e(P,uh),e(P,Hn),e(Hn,gh),e(P,_h),e(P,Ps),e(Ps,fh),e(P,vh),e(j,bh),e(j,Eo),e(Eo,Th),e(Eo,Bn),e(Bn,wh),e(Eo,kh),e(j,qh),e(j,jo),e(jo,yh),e(jo,Go),e(Go,xh),e(jo,Rh),e(j,Fh),e(j,le),k(Mo,le,null),e(le,$h),e(le,Le),e(Le,zh),e(Le,Qn),e(Qn,Eh),e(Le,jh),e(Le,Ns),e(Ns,Gh),e(Le,Mh),e(le,Ah),k(wt,le,null),e(le,Ph),k(kt,le,null),e(j,Nh),e(j,qt),k(Ao,qt,null),e(qt,Oh),e(qt,Os),e(Os,Ch),v(r,ld,_),v(r,Se,_),e(Se,yt),e(yt,Cs),k(Po,Cs,null),e(Se,Lh),e(Se,Ls),e(Ls,Sh),v(r,pd,_),v(r,N,_),k(No,N,null),e(N,Dh),e(N,De),e(De,Ih),e(De,Un),e(Un,Wh),e(De,Hh),e(De,Ss),e(Ss,Bh),e(De,Qh),e(N,Uh),k(xt,N,null),e(N,Vh),e(N,Ds),e(Ds,Kh),e(N,Yh),e(N,re),e(re,Jh),e(re,Is),e(Is,Xh),e(re,Zh),e(re,Vn),e(Vn,em),e(re,tm),e(re,Ws),e(Ws,om),e(re,nm),e(re,Kn),e(Kn,rm),e(re,sm),e(N,am),e(N,S),e(S,dm),e(S,Yn),e(Yn,im),e(S,cm),e(S,Hs),e(Hs,lm),e(S,pm),e(S,Bs),e(Bs,hm),e(S,mm),e(S,Qs),e(Qs,um),e(S,gm),e(S,Us),e(Us,_m),e(S,fm),e(S,Jn),e(Jn,vm),e(S,bm),e(S,Vs),e(Vs,Tm),e(S,wm),e(S,Xn),e(Xn,km),e(S,qm),e(S,Ks),e(Ks,ym),e(S,xm),e(N,Rm),e(N,Oo),e(Oo,Fm),e(Oo,Zn),e(Zn,$m),e(Oo,zm),e(N,Em),e(N,Co),e(Co,jm),e(Co,Lo),e(Lo,Gm),e(Co,Mm),e(N,Am),e(N,Ys),e(Ys,Pm),e(N,Nm),e(N,pe),k(So,pe,null),e(pe,Om),e(pe,Ie),e(Ie,Cm),e(Ie,er),e(er,Lm),e(Ie,Sm),e(Ie,Js),e(Js,Dm),e(Ie,Im),e(pe,Wm),k(Rt,pe,null),e(pe,Hm),k(Ft,pe,null),v(r,hd,_),v(r,We,_),e(We,$t),e($t,Xs),k(Do,Xs,null),e(We,Bm),e(We,Zs),e(Zs,Qm),v(r,md,_),v(r,$,_),k(Io,$,null),e($,Um),e($,He),e(He,Vm),e(He,tr),e(tr,Km),e(He,Ym),e(He,ea),e(ea,Jm),e(He,Xm),e($,Zm),k(zt,$,null),e($,eu),e($,ta),e(ta,tu),e($,ou),e($,oa),e(oa,nu),e($,ru),e($,se),e(se,su),e(se,na),e(na,au),e(se,du),e(se,or),e(or,iu),e(se,cu),e(se,ra),e(ra,lu),e(se,pu),e(se,nr),e(nr,hu),e(se,mu),e($,uu),e($,D),e(D,gu),e(D,rr),e(rr,_u),e(D,fu),e(D,sa),e(sa,vu),e(D,bu),e(D,aa),e(aa,Tu),e(D,wu),e(D,da),e(da,ku),e(D,qu),e(D,ia),e(ia,yu),e(D,xu),e(D,sr),e(sr,Ru),e(D,Fu),e(D,ca),e(ca,$u),e(D,zu),e(D,ar),e(ar,Eu),e(D,ju),e(D,la),e(la,Gu),e(D,Mu),e($,Au),e($,Wo),e(Wo,Pu),e(Wo,dr),e(dr,Nu),e(Wo,Ou),e($,Cu),e($,Ho),e(Ho,Lu),e(Ho,Bo),e(Bo,Su),e(Ho,Du),e($,Iu),e($,pa),e(pa,Wu),e($,Hu),e($,he),k(Qo,he,null),e(he,Bu),e(he,Be),e(Be,Qu),e(Be,ir),e(ir,Uu),e(Be,Vu),e(Be,ha),e(ha,Ku),e(Be,Yu),e(he,Ju),k(Et,he,null),e(he,Xu),k(jt,he,null),e($,Zu),e($,Gt),k(Uo,Gt,null),e(Gt,eg),e(Gt,Vo),e(Vo,tg),e(Vo,cr),e(cr,og),e(Vo,ng),v(r,ud,_),v(r,Qe,_),e(Qe,Mt),e(Mt,ma),k(Ko,ma,null),e(Qe,rg),e(Qe,ua),e(ua,sg),v(r,gd,_),v(r,z,_),k(Yo,z,null),e(z,ag),e(z,Ue),e(Ue,dg),e(Ue,lr),e(lr,ig),e(Ue,cg),e(Ue,ga),e(ga,lg),e(Ue,pg),e(z,hg),k(At,z,null),e(z,mg),e(z,_a),e(_a,ug),e(z,gg),e(z,fa),e(fa,_g),e(z,fg),e(z,ae),e(ae,vg),e(ae,va),e(va,bg),e(ae,Tg),e(ae,pr),e(pr,wg),e(ae,kg),e(ae,ba),e(ba,qg),e(ae,yg),e(ae,hr),e(hr,xg),e(ae,Rg),e(z,Fg),e(z,I),e(I,$g),e(I,mr),e(mr,zg),e(I,Eg),e(I,Ta),e(Ta,jg),e(I,Gg),e(I,wa),e(wa,Mg),e(I,Ag),e(I,ka),e(ka,Pg),e(I,Ng),e(I,qa),e(qa,Og),e(I,Cg),e(I,ur),e(ur,Lg),e(I,Sg),e(I,ya),e(ya,Dg),e(I,Ig),e(I,gr),e(gr,Wg),e(I,Hg),e(I,xa),e(xa,Bg),e(I,Qg),e(z,Ug),e(z,Jo),e(Jo,Vg),e(Jo,_r),e(_r,Kg),e(Jo,Yg),e(z,Jg),e(z,Xo),e(Xo,Xg),e(Xo,Zo),e(Zo,Zg),e(Xo,e_),e(z,t_),e(z,Ra),e(Ra,o_),e(z,n_),e(z,me),k(en,me,null),e(me,r_),e(me,Ve),e(Ve,s_),e(Ve,fr),e(fr,a_),e(Ve,d_),e(Ve,Fa),e(Fa,i_),e(Ve,c_),e(me,l_),k(Pt,me,null),e(me,p_),k(Nt,me,null),e(z,h_),e(z,Ot),k(tn,Ot,null),e(Ot,m_),e(Ot,$a),e($a,u_),_d=!0},p(r,[_]){const on={};_&2&&(on.$$scope={dirty:_,ctx:r}),at.$set(on);const za={};_&2&&(za.$$scope={dirty:_,ctx:r}),pt.$set(za);const Ea={};_&2&&(Ea.$$scope={dirty:_,ctx:r}),ht.$set(Ea);const ja={};_&2&&(ja.$$scope={dirty:_,ctx:r}),mt.$set(ja);const nn={};_&2&&(nn.$$scope={dirty:_,ctx:r}),gt.$set(nn);const Ga={};_&2&&(Ga.$$scope={dirty:_,ctx:r}),_t.$set(Ga);const Ma={};_&2&&(Ma.$$scope={dirty:_,ctx:r}),ft.$set(Ma);const Aa={};_&2&&(Aa.$$scope={dirty:_,ctx:r}),Tt.$set(Aa);const Pa={};_&2&&(Pa.$$scope={dirty:_,ctx:r}),wt.$set(Pa);const rn={};_&2&&(rn.$$scope={dirty:_,ctx:r}),kt.$set(rn);const Na={};_&2&&(Na.$$scope={dirty:_,ctx:r}),xt.$set(Na);const Oa={};_&2&&(Oa.$$scope={dirty:_,ctx:r}),Rt.$set(Oa);const Ca={};_&2&&(Ca.$$scope={dirty:_,ctx:r}),Ft.$set(Ca);const La={};_&2&&(La.$$scope={dirty:_,ctx:r}),zt.$set(La);const sn={};_&2&&(sn.$$scope={dirty:_,ctx:r}),Et.$set(sn);const Sa={};_&2&&(Sa.$$scope={dirty:_,ctx:r}),jt.$set(Sa);const an={};_&2&&(an.$$scope={dirty:_,ctx:r}),At.$set(an);const Da={};_&2&&(Da.$$scope={dirty:_,ctx:r}),Pt.$set(Da);const Ia={};_&2&&(Ia.$$scope={dirty:_,ctx:r}),Nt.$set(Ia)},i(r){_d||(q(i.$$.fragment,r),q(Bt.$$.fragment,r),q(Vt.$$.fragment,r),q(Kt.$$.fragment,r),q(Yt.$$.fragment,r),q(Xt.$$.fragment,r),q(eo.$$.fragment,r),q(to.$$.fragment,r),q(oo.$$.fragment,r),q(no.$$.fragment,r),q(ro.$$.fragment,r),q(ao.$$.fragment,r),q(io.$$.fragment,r),q(co.$$.fragment,r),q(at.$$.fragment,r),q(lo.$$.fragment,r),q(po.$$.fragment,r),q(ho.$$.fragment,r),q(uo.$$.fragment,r),q(go.$$.fragment,r),q(pt.$$.fragment,r),q(bo.$$.fragment,r),q(ht.$$.fragment,r),q(mt.$$.fragment,r),q(To.$$.fragment,r),q(wo.$$.fragment,r),q(gt.$$.fragment,r),q(xo.$$.fragment,r),q(_t.$$.fragment,r),q(ft.$$.fragment,r),q(Ro.$$.fragment,r),q($o.$$.fragment,r),q(zo.$$.fragment,r),q(Tt.$$.fragment,r),q(Mo.$$.fragment,r),q(wt.$$.fragment,r),q(kt.$$.fragment,r),q(Ao.$$.fragment,r),q(Po.$$.fragment,r),q(No.$$.fragment,r),q(xt.$$.fragment,r),q(So.$$.fragment,r),q(Rt.$$.fragment,r),q(Ft.$$.fragment,r),q(Do.$$.fragment,r),q(Io.$$.fragment,r),q(zt.$$.fragment,r),q(Qo.$$.fragment,r),q(Et.$$.fragment,r),q(jt.$$.fragment,r),q(Uo.$$.fragment,r),q(Ko.$$.fragment,r),q(Yo.$$.fragment,r),q(At.$$.fragment,r),q(en.$$.fragment,r),q(Pt.$$.fragment,r),q(Nt.$$.fragment,r),q(tn.$$.fragment,r),_d=!0)},o(r){y(i.$$.fragment,r),y(Bt.$$.fragment,r),y(Vt.$$.fragment,r),y(Kt.$$.fragment,r),y(Yt.$$.fragment,r),y(Xt.$$.fragment,r),y(eo.$$.fragment,r),y(to.$$.fragment,r),y(oo.$$.fragment,r),y(no.$$.fragment,r),y(ro.$$.fragment,r),y(ao.$$.fragment,r),y(io.$$.fragment,r),y(co.$$.fragment,r),y(at.$$.fragment,r),y(lo.$$.fragment,r),y(po.$$.fragment,r),y(ho.$$.fragment,r),y(uo.$$.fragment,r),y(go.$$.fragment,r),y(pt.$$.fragment,r),y(bo.$$.fragment,r),y(ht.$$.fragment,r),y(mt.$$.fragment,r),y(To.$$.fragment,r),y(wo.$$.fragment,r),y(gt.$$.fragment,r),y(xo.$$.fragment,r),y(_t.$$.fragment,r),y(ft.$$.fragment,r),y(Ro.$$.fragment,r),y($o.$$.fragment,r),y(zo.$$.fragment,r),y(Tt.$$.fragment,r),y(Mo.$$.fragment,r),y(wt.$$.fragment,r),y(kt.$$.fragment,r),y(Ao.$$.fragment,r),y(Po.$$.fragment,r),y(No.$$.fragment,r),y(xt.$$.fragment,r),y(So.$$.fragment,r),y(Rt.$$.fragment,r),y(Ft.$$.fragment,r),y(Do.$$.fragment,r),y(Io.$$.fragment,r),y(zt.$$.fragment,r),y(Qo.$$.fragment,r),y(Et.$$.fragment,r),y(jt.$$.fragment,r),y(Uo.$$.fragment,r),y(Ko.$$.fragment,r),y(Yo.$$.fragment,r),y(At.$$.fragment,r),y(en.$$.fragment,r),y(Pt.$$.fragment,r),y(Nt.$$.fragment,r),y(tn.$$.fragment,r),_d=!1},d(r){t(c),r&&t(b),r&&t(u),x(i),r&&t(Wa),r&&t(qe),x(Bt),r&&t(Ha),r&&t(pn),r&&t(Ba),r&&t(Je),r&&t(Qa),r&&t(hn),r&&t(Ua),r&&t(mn),r&&t(Va),r&&t(Xe),r&&t(Ka),r&&t(ye),x(Vt),r&&t(Ya),r&&t(ee),x(Kt),x(Yt),x(Xt),r&&t(Ja),r&&t(xe),x(eo),r&&t(Xa),r&&t(Re),x(to),x(oo),r&&t(Za),r&&t(Fe),x(no),r&&t(ed),r&&t($e),x(ro),r&&t(td),r&&t(so),x(ao),r&&t(od),r&&t(ze),x(io),r&&t(nd),r&&t(Z),x(co),x(at),x(lo),x(po),x(ho),r&&t(rd),r&&t(je),x(uo),r&&t(sd),r&&t(L),x(go),x(pt),x(bo),x(ht),x(mt),r&&t(ad),r&&t(Ae),x(To),r&&t(dd),r&&t(E),x(wo),x(gt),x(xo),x(_t),x(ft),x(Ro),r&&t(id),r&&t(Oe),x($o),r&&t(cd),r&&t(j),x(zo),x(Tt),x(Mo),x(wt),x(kt),x(Ao),r&&t(ld),r&&t(Se),x(Po),r&&t(pd),r&&t(N),x(No),x(xt),x(So),x(Rt),x(Ft),r&&t(hd),r&&t(We),x(Do),r&&t(md),r&&t($),x(Io),x(zt),x(Qo),x(Et),x(jt),x(Uo),r&&t(ud),r&&t(Qe),x(Ko),r&&t(gd),r&&t(z),x(Yo),x(At),x(en),x(Pt),x(Nt),x(tn)}}}const tT={local:"rag",sections:[{local:"overview",title:"Overview"},{local:"transformers.RagConfig",title:"RagConfig"},{local:"transformers.RagTokenizer",title:"RagTokenizer"},{local:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",title:"Rag specific outputs"},{local:"transformers.RagRetriever",title:"RagRetriever"},{local:"transformers.RagModel",title:"RagModel"},{local:"transformers.RagSequenceForGeneration",title:"RagSequenceForGeneration"},{local:"transformers.RagTokenForGeneration",title:"RagTokenForGeneration"},{local:"transformers.TFRagModel",title:"TFRagModel"},{local:"transformers.TFRagSequenceForGeneration",title:"TFRagSequenceForGeneration"},{local:"transformers.TFRagTokenForGeneration",title:"TFRagTokenForGeneration"}],title:"RAG"};function oT(F){return Ab(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cT extends Eb{constructor(c){super();jb(this,c,oT,eT,Gb,{})}}export{cT as default,tT as metadata};
