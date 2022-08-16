import{S as ym,i as Em,s as zm,e as n,k as d,w as b,t as i,M as xm,c as r,d as t,m as c,a,x as w,h as l,b as p,G as e,g as _,y as $,q as R,o as T,B as y,v as qm,L as rt}from"../../chunks/vendor-hf-doc-builder.js";import{T as yr}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as at}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as X}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as nt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Am(E){let m,v,u,f,k;return f=new at({props:{code:`from transformers import RealmEmbedder, RealmConfig

# Initializing a REALM realm-cc-news-pretrained-* style configuration
configuration = RealmConfig()

# Initializing a model from the google/realm-cc-news-pretrained-embedder style configuration
model = RealmEmbedder(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RealmEmbedder, RealmConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a REALM realm-cc-news-pretrained-* style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RealmConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google/realm-cc-news-pretrained-embedder style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RealmEmbedder(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=n("p"),v=i("Example:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Example:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function Pm(E){let m,v,u,f,k;return f=new at({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){m=n("p"),v=i("pair mask has the following format:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"pair mask has the following format:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function jm(E){let m,v,u,f,k;return f=new at({props:{code:`from transformers import RealmTokenizer

# batch_size = 2, num_candidates = 2
text = [["Hello world!", "Nice to meet you!"], ["The cute cat.", "The adorable dog."]]

tokenizer = RealmTokenizer.from_pretrained("google/realm-cc-news-pretrained-encoder")
tokenized_text = tokenizer.batch_encode_candidates(text, max_length=10, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RealmTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># batch_size = 2, num_candidates = 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>text = [[<span class="hljs-string">&quot;Hello world!&quot;</span>, <span class="hljs-string">&quot;Nice to meet you!&quot;</span>], [<span class="hljs-string">&quot;The cute cat.&quot;</span>, <span class="hljs-string">&quot;The adorable dog.&quot;</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RealmTokenizer.from_pretrained(<span class="hljs-string">&quot;google/realm-cc-news-pretrained-encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_text = tokenizer.batch_encode_candidates(text, max_length=<span class="hljs-number">10</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){m=n("p"),v=i("Example:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Example:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function Lm(E){let m,v,u,f,k;return f=new at({props:{code:`from transformers import RealmTokenizerFast

# batch_size = 2, num_candidates = 2
text = [["Hello world!", "Nice to meet you!"], ["The cute cat.", "The adorable dog."]]

tokenizer = RealmTokenizerFast.from_pretrained("google/realm-cc-news-pretrained-encoder")
tokenized_text = tokenizer.batch_encode_candidates(text, max_length=10, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RealmTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># batch_size = 2, num_candidates = 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>text = [[<span class="hljs-string">&quot;Hello world!&quot;</span>, <span class="hljs-string">&quot;Nice to meet you!&quot;</span>], [<span class="hljs-string">&quot;The cute cat.&quot;</span>, <span class="hljs-string">&quot;The adorable dog.&quot;</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RealmTokenizerFast.from_pretrained(<span class="hljs-string">&quot;google/realm-cc-news-pretrained-encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_text = tokenizer.batch_encode_candidates(text, max_length=<span class="hljs-number">10</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){m=n("p"),v=i("Example:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Example:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function Mm(E){let m,v,u,f,k;return{c(){m=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var q=a(u);f=l(q,"Module"),q.forEach(t),k=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){_(s,m,h),e(m,v),e(m,u),e(u,f),e(m,k)},d(s){s&&t(m)}}}function Fm(E){let m,v,u,f,k;return f=new at({props:{code:`from transformers import RealmTokenizer, RealmEmbedder
import torch

tokenizer = RealmTokenizer.from_pretrained("google/realm-cc-news-pretrained-embedder")
model = RealmEmbedder.from_pretrained("google/realm-cc-news-pretrained-embedder")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

projected_score = outputs.projected_score`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RealmTokenizer, RealmEmbedder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RealmTokenizer.from_pretrained(<span class="hljs-string">&quot;google/realm-cc-news-pretrained-embedder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RealmEmbedder.from_pretrained(<span class="hljs-string">&quot;google/realm-cc-news-pretrained-embedder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>projected_score = outputs.projected_score`}}),{c(){m=n("p"),v=i("Example:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Example:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function Sm(E){let m,v,u,f,k;return{c(){m=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var q=a(u);f=l(q,"Module"),q.forEach(t),k=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){_(s,m,h),e(m,v),e(m,u),e(u,f),e(m,k)},d(s){s&&t(m)}}}function Cm(E){let m,v,u,f,k;return f=new at({props:{code:`import torch
from transformers import RealmTokenizer, RealmScorer

tokenizer = RealmTokenizer.from_pretrained("google/realm-cc-news-pretrained-scorer")
model = RealmScorer.from_pretrained("google/realm-cc-news-pretrained-scorer", num_candidates=2)

# batch_size = 2, num_candidates = 2
input_texts = ["How are you?", "What is the item in the picture?"]
candidates_texts = [["Hello world!", "Nice to meet you!"], ["A cute cat.", "An adorable dog."]]

inputs = tokenizer(input_texts, return_tensors="pt")
candidates_inputs = tokenizer.batch_encode_candidates(candidates_texts, max_length=10, return_tensors="pt")

outputs = model(
    **inputs,
    candidate_input_ids=candidates_inputs.input_ids,
    candidate_attention_mask=candidates_inputs.attention_mask,
    candidate_token_type_ids=candidates_inputs.token_type_ids,
)
relevance_score = outputs.relevance_score`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RealmTokenizer, RealmScorer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RealmTokenizer.from_pretrained(<span class="hljs-string">&quot;google/realm-cc-news-pretrained-scorer&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RealmScorer.from_pretrained(<span class="hljs-string">&quot;google/realm-cc-news-pretrained-scorer&quot;</span>, num_candidates=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># batch_size = 2, num_candidates = 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_texts = [<span class="hljs-string">&quot;How are you?&quot;</span>, <span class="hljs-string">&quot;What is the item in the picture?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>candidates_texts = [[<span class="hljs-string">&quot;Hello world!&quot;</span>, <span class="hljs-string">&quot;Nice to meet you!&quot;</span>], [<span class="hljs-string">&quot;A cute cat.&quot;</span>, <span class="hljs-string">&quot;An adorable dog.&quot;</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(input_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>candidates_inputs = tokenizer.batch_encode_candidates(candidates_texts, max_length=<span class="hljs-number">10</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    **inputs,
<span class="hljs-meta">... </span>    candidate_input_ids=candidates_inputs.input_ids,
<span class="hljs-meta">... </span>    candidate_attention_mask=candidates_inputs.attention_mask,
<span class="hljs-meta">... </span>    candidate_token_type_ids=candidates_inputs.token_type_ids,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>relevance_score = outputs.relevance_score`}}),{c(){m=n("p"),v=i("Example:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Example:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function Im(E){let m,v,u,f,k;return{c(){m=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var q=a(u);f=l(q,"Module"),q.forEach(t),k=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){_(s,m,h),e(m,v),e(m,u),e(u,f),e(m,k)},d(s){s&&t(m)}}}function Dm(E){let m,v,u,f,k;return f=new at({props:{code:`import torch
from transformers import RealmTokenizer, RealmKnowledgeAugEncoder

tokenizer = RealmTokenizer.from_pretrained("google/realm-cc-news-pretrained-encoder")
model = RealmKnowledgeAugEncoder.from_pretrained(
    "google/realm-cc-news-pretrained-encoder", num_candidates=2
)

# batch_size = 2, num_candidates = 2
text = [["Hello world!", "Nice to meet you!"], ["The cute cat.", "The adorable dog."]]

inputs = tokenizer.batch_encode_candidates(text, max_length=10, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RealmTokenizer, RealmKnowledgeAugEncoder

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RealmTokenizer.from_pretrained(<span class="hljs-string">&quot;google/realm-cc-news-pretrained-encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RealmKnowledgeAugEncoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/realm-cc-news-pretrained-encoder&quot;</span>, num_candidates=<span class="hljs-number">2</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># batch_size = 2, num_candidates = 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>text = [[<span class="hljs-string">&quot;Hello world!&quot;</span>, <span class="hljs-string">&quot;Nice to meet you!&quot;</span>], [<span class="hljs-string">&quot;The cute cat.&quot;</span>, <span class="hljs-string">&quot;The adorable dog.&quot;</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.batch_encode_candidates(text, max_length=<span class="hljs-number">10</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=n("p"),v=i("Example:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Example:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function Nm(E){let m,v,u,f,k;return{c(){m=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var q=a(u);f=l(q,"Module"),q.forEach(t),k=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){_(s,m,h),e(m,v),e(m,u),e(u,f),e(m,k)},d(s){s&&t(m)}}}function Om(E){let m,v,u,f,k;return{c(){m=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var q=a(u);f=l(q,"Module"),q.forEach(t),k=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){_(s,m,h),e(m,v),e(m,u),e(u,f),e(m,k)},d(s){s&&t(m)}}}function Wm(E){let m,v,u,f,k;return f=new at({props:{code:`import torch
from transformers import RealmForOpenQA, RealmRetriever, RealmTokenizer

retriever = RealmRetriever.from_pretrained("google/realm-orqa-nq-openqa")
tokenizer = RealmTokenizer.from_pretrained("google/realm-orqa-nq-openqa")
model = RealmForOpenQA.from_pretrained("google/realm-orqa-nq-openqa", retriever=retriever)

question = "Who is the pioneer in modern computer science?"
question_ids = tokenizer([question], return_tensors="pt")
answer_ids = tokenizer(
    ["alan mathison turing"],
    add_special_tokens=False,
    return_token_type_ids=False,
    return_attention_mask=False,
).input_ids

reader_output, predicted_answer_ids = model(**question_ids, answer_ids=answer_ids, return_dict=False)
predicted_answer = tokenizer.decode(predicted_answer_ids)
loss = reader_output.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RealmForOpenQA, RealmRetriever, RealmTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RealmRetriever.from_pretrained(<span class="hljs-string">&quot;google/realm-orqa-nq-openqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RealmTokenizer.from_pretrained(<span class="hljs-string">&quot;google/realm-orqa-nq-openqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RealmForOpenQA.from_pretrained(<span class="hljs-string">&quot;google/realm-orqa-nq-openqa&quot;</span>, retriever=retriever)

<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Who is the pioneer in modern computer science?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_ids = tokenizer([question], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_ids = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;alan mathison turing&quot;</span>],
<span class="hljs-meta">... </span>    add_special_tokens=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    return_token_type_ids=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    return_attention_mask=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>reader_output, predicted_answer_ids = model(**question_ids, answer_ids=answer_ids, return_dict=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = tokenizer.decode(predicted_answer_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = reader_output.loss`}}),{c(){m=n("p"),v=i("Example:"),u=d(),b(f.$$.fragment)},l(s){m=r(s,"P",{});var h=a(m);v=l(h,"Example:"),h.forEach(t),u=c(s),w(f.$$.fragment,s)},m(s,h){_(s,m,h),e(m,v),_(s,u,h),$(f,s,h),k=!0},p:rt,i(s){k||(R(f.$$.fragment,s),k=!0)},o(s){T(f.$$.fragment,s),k=!1},d(s){s&&t(m),s&&t(u),y(f,s)}}}function Km(E){let m,v,u,f,k,s,h,q,za,Er,oe,we,ln,st,xa,dn,qa,zr,$e,Aa,it,Pa,ja,xr,go,La,qr,_o,cn,Ma,Ar,G,Fa,lt,Sa,Ca,dt,Ia,Da,Pr,ne,Re,mn,ct,Na,pn,Oa,jr,P,mt,Wa,hn,Ka,Qa,j,fn,ko,Ba,Ha,un,vo,Va,Ua,gn,bo,Xa,Ga,_n,wo,Ja,Za,kn,$o,Ya,es,vn,Ro,ts,os,pt,ns,ht,rs,as,ss,re,is,To,ls,ds,yo,cs,ms,ps,Te,Lr,ae,ye,bn,ft,hs,wn,fs,Mr,z,ut,us,$n,gs,_s,Ee,Eo,ks,vs,zo,bs,ws,$s,gt,Rs,xo,Ts,ys,Es,J,_t,zs,Rn,xs,qs,kt,qo,As,Tn,Ps,js,Ao,Ls,yn,Ms,Fs,ze,vt,Ss,bt,Cs,En,Is,Ds,Ns,C,wt,Os,zn,Ws,Ks,xe,Qs,se,Bs,xn,Hs,Vs,qn,Us,Xs,Gs,Po,$t,Js,M,Rt,Zs,Tt,Ys,An,ei,ti,oi,ie,Pn,ni,ri,yt,ai,jn,si,ii,li,Et,di,Ln,ci,mi,pi,zt,jo,hi,Mn,fi,ui,Lo,gi,Fn,_i,ki,qe,Fr,le,Ae,Sn,xt,vi,Cn,bi,Sr,L,qt,wi,At,$i,In,Ri,Ti,yi,Pe,Mo,Ei,zi,Fo,xi,qi,Ai,Pt,Pi,So,ji,Li,Mi,F,jt,Fi,Lt,Si,Dn,Ci,Ii,Di,de,Nn,Ni,Oi,Mt,Wi,On,Ki,Qi,Bi,Ft,Hi,Wn,Vi,Ui,Xi,St,Co,Gi,Kn,Ji,Zi,Io,Yi,Qn,el,tl,je,Cr,ce,Le,Bn,Ct,ol,Hn,nl,Ir,Q,It,rl,Vn,al,sl,Me,Dt,il,Un,ll,Dr,me,Fe,Xn,Nt,dl,Gn,cl,Nr,B,Ot,ml,Wt,pl,Kt,hl,fl,ul,I,Qt,gl,pe,_l,Do,kl,vl,Jn,bl,wl,$l,Se,Rl,Ce,Or,he,Ie,Zn,Bt,Tl,Yn,yl,Wr,H,Ht,El,Vt,zl,Ut,xl,ql,Al,D,Xt,Pl,fe,jl,No,Ll,Ml,er,Fl,Sl,Cl,De,Il,Ne,Kr,ue,Oe,tr,Gt,Dl,or,Nl,Qr,V,Jt,Ol,Zt,Wl,Yt,Kl,Ql,Bl,N,eo,Hl,ge,Vl,Oo,Ul,Xl,nr,Gl,Jl,Zl,We,Yl,Ke,Br,_e,Qe,rr,to,ed,ar,td,Hr,U,oo,od,no,nd,ro,rd,ad,sd,Z,ao,id,ke,ld,Wo,dd,cd,sr,md,pd,hd,Be,Vr,ve,He,ir,so,fd,lr,ud,Ur,S,io,gd,Ve,dr,_d,kd,lo,vd,bd,wd,Ue,co,$d,mo,Rd,cr,Td,yd,Ed,O,po,zd,be,xd,Ko,qd,Ad,mr,Pd,jd,Ld,Xe,Md,Ge,Xr;return s=new X({}),st=new X({}),ct=new X({}),mt=new x({props:{name:"class transformers.RealmConfig",anchor:"transformers.RealmConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"retriever_proj_size",val:" = 128"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_candidates",val:" = 8"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"span_hidden_size",val:" = 256"},{name:"max_span_width",val:" = 10"},{name:"reader_layer_norm_eps",val:" = 0.001"},{name:"reader_beam_size",val:" = 5"},{name:"reader_seq_len",val:" = 320"},{name:"num_block_records",val:" = 13353718"},{name:"searcher_beam_size",val:" = 5000"},{name:"searcher_seq_len",val:" = 64"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RealmConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the REALM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmEmbedder">RealmEmbedder</a>, <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmScorer">RealmScorer</a>, <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmKnowledgeAugEncoder">RealmKnowledgeAugEncoder</a>, or
<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmReader">RealmReader</a>.`,name:"vocab_size"},{anchor:"transformers.RealmConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RealmConfig.retriever_proj_size",description:`<strong>retriever_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the retriever(embedder) projection.`,name:"retriever_proj_size"},{anchor:"transformers.RealmConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RealmConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RealmConfig.num_candidates",description:`<strong>num_candidates</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of candidates inputted to the RealmScorer or RealmKnowledgeAugEncoder.`,name:"num_candidates"},{anchor:"transformers.RealmConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RealmConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RealmConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RealmConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RealmConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RealmConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmEmbedder">RealmEmbedder</a>, <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmScorer">RealmScorer</a>,
<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmKnowledgeAugEncoder">RealmKnowledgeAugEncoder</a>, or <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmReader">RealmReader</a>.`,name:"type_vocab_size"},{anchor:"transformers.RealmConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RealmConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RealmConfig.span_hidden_size",description:`<strong>span_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimension of the reader&#x2019;s spans.`,name:"span_hidden_size"},{anchor:"transformers.RealmConfig.max_span_width",description:`<strong>max_span_width</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Max span width of the reader.`,name:"max_span_width"},{anchor:"transformers.RealmConfig.reader_layer_norm_eps",description:`<strong>reader_layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-3) &#x2014;
The epsilon used by the reader&#x2019;s layer normalization layers.`,name:"reader_layer_norm_eps"},{anchor:"transformers.RealmConfig.reader_beam_size",description:`<strong>reader_beam_size</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Beam size of the reader.`,name:"reader_beam_size"},{anchor:"transformers.RealmConfig.reader_seq_len",description:`<strong>reader_seq_len</strong> (<code>int</code>, <em>optional</em>, defaults to 288+32) &#x2014;
Maximum sequence length of the reader.`,name:"reader_seq_len"},{anchor:"transformers.RealmConfig.num_block_records",description:`<strong>num_block_records</strong> (<code>int</code>, <em>optional</em>, defaults to 13353718) &#x2014;
Number of block records.`,name:"num_block_records"},{anchor:"transformers.RealmConfig.searcher_beam_size",description:`<strong>searcher_beam_size</strong> (<code>int</code>, <em>optional</em>, defaults to 5000) &#x2014;
Beam size of the searcher. Note that when eval mode is enabled, <em>searcher_beam_size</em> will be the same as
<em>reader_beam_size</em>.`,name:"searcher_beam_size"},{anchor:"transformers.RealmConfig.searcher_seq_len",description:`<strong>searcher_seq_len</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Maximum sequence length of the searcher.`,name:"searcher_seq_len"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/configuration_realm.py#L44"}}),Te=new nt({props:{anchor:"transformers.RealmConfig.example",$$slots:{default:[Am]},$$scope:{ctx:E}}}),ft=new X({}),ut=new x({props:{name:"class transformers.RealmTokenizer",anchor:"transformers.RealmTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RealmTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.RealmTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RealmTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.RealmTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.RealmTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RealmTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RealmTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RealmTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RealmTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RealmTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm.py#L95"}}),_t=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RealmTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RealmTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RealmTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm.py#L302",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vt=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.RealmTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RealmTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RealmTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RealmTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm.py#L327",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wt=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RealmTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RealmTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RealmTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm.py#L355",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xe=new nt({props:{anchor:"transformers.RealmTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Pm]},$$scope:{ctx:E}}}),$t=new x({props:{name:"save_vocabulary",anchor:"transformers.RealmTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm.py#L384"}}),Rt=new x({props:{name:"batch_encode_candidates",anchor:"transformers.RealmTokenizer.batch_encode_candidates",parameters:[{name:"text",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RealmTokenizer.batch_encode_candidates.text",description:`<strong>text</strong> (<code>List[List[str]]</code>) &#x2014;
The batch of sequences to be encoded. Each sequence must be in this format: (batch_size,
num_candidates, text).`,name:"text"},{anchor:"transformers.RealmTokenizer.batch_encode_candidates.text_pair",description:`<strong>text_pair</strong> (<code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The batch of sequences to be encoded. Each sequence must be in this format: (batch_size,
num_candidates, text).
**kwargs &#x2014;
Keyword arguments of the <strong>call</strong> method.`,name:"text_pair"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm.py#L229",returnDescription:`
<p>Encoded text or text pair.</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),qe=new nt({props:{anchor:"transformers.RealmTokenizer.batch_encode_candidates.example",$$slots:{default:[jm]},$$scope:{ctx:E}}}),xt=new X({}),qt=new x({props:{name:"class transformers.RealmTokenizerFast",anchor:"transformers.RealmTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RealmTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.RealmTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RealmTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RealmTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RealmTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RealmTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RealmTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RealmTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.RealmTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.RealmTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"},{anchor:"transformers.RealmTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm_fast.py#L102"}}),jt=new x({props:{name:"batch_encode_candidates",anchor:"transformers.RealmTokenizerFast.batch_encode_candidates",parameters:[{name:"text",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RealmTokenizerFast.batch_encode_candidates.text",description:`<strong>text</strong> (<code>List[List[str]]</code>) &#x2014;
The batch of sequences to be encoded. Each sequence must be in this format: (batch_size,
num_candidates, text).`,name:"text"},{anchor:"transformers.RealmTokenizerFast.batch_encode_candidates.text_pair",description:`<strong>text_pair</strong> (<code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The batch of sequences to be encoded. Each sequence must be in this format: (batch_size,
num_candidates, text).
**kwargs &#x2014;
Keyword arguments of the <strong>call</strong> method.`,name:"text_pair"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/tokenization_realm_fast.py#L193",returnDescription:`
<p>Encoded text or text pair.</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),je=new nt({props:{anchor:"transformers.RealmTokenizerFast.batch_encode_candidates.example",$$slots:{default:[Lm]},$$scope:{ctx:E}}}),Ct=new X({}),It=new x({props:{name:"class transformers.RealmRetriever",anchor:"transformers.RealmRetriever",parameters:[{name:"block_records",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.RealmRetriever.block_records",description:`<strong>block_records</strong> (<code>np.ndarray</code>) &#x2014;
A numpy array which cantains evidence texts.`,name:"block_records"},{anchor:"transformers.RealmRetriever.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer">RealmTokenizer</a>) &#x2014;
The tokenizer to encode retrieved texts.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/retrieval_realm.py#L73"}}),Dt=new x({props:{name:"block_has_answer",anchor:"transformers.RealmRetriever.block_has_answer",parameters:[{name:"concat_inputs",val:""},{name:"answer_ids",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/retrieval_realm.py#L130"}}),Nt=new X({}),Ot=new x({props:{name:"class transformers.RealmEmbedder",anchor:"transformers.RealmEmbedder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RealmEmbedder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig">RealmConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1150"}}),Qt=new x({props:{name:"forward",anchor:"transformers.RealmEmbedder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RealmEmbedder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer">RealmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RealmEmbedder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RealmEmbedder.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RealmEmbedder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RealmEmbedder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RealmEmbedder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RealmEmbedder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RealmEmbedder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RealmEmbedder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1164",returnDescription:`
<p>A <code>transformers.models.realm.modeling_realm.RealmEmbedderOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig"
>RealmConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>projected_score</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.retriever_proj_size)</code>) \u2014 Projected score.</p>
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
<p><code>transformers.models.realm.modeling_realm.RealmEmbedderOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new yr({props:{$$slots:{default:[Mm]},$$scope:{ctx:E}}}),Ce=new nt({props:{anchor:"transformers.RealmEmbedder.forward.example",$$slots:{default:[Fm]},$$scope:{ctx:E}}}),Bt=new X({}),Ht=new x({props:{name:"class transformers.RealmScorer",anchor:"transformers.RealmScorer",parameters:[{name:"config",val:""},{name:"query_embedder",val:" = None"}],parametersDescription:[{anchor:"transformers.RealmScorer.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig">RealmConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RealmScorer.query_embedder",description:`<strong>query_embedder</strong> (<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmEmbedder">RealmEmbedder</a>) &#x2014;
Embedder for input sequences. If not specified, it will use the same embedder as candidate sequences.`,name:"query_embedder"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1230"}}),Xt=new x({props:{name:"forward",anchor:"transformers.RealmScorer.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"candidate_input_ids",val:" = None"},{name:"candidate_attention_mask",val:" = None"},{name:"candidate_token_type_ids",val:" = None"},{name:"candidate_inputs_embeds",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RealmScorer.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer">RealmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RealmScorer.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RealmScorer.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RealmScorer.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RealmScorer.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RealmScorer.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RealmScorer.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RealmScorer.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RealmScorer.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RealmScorer.forward.candidate_input_ids",description:`<strong>candidate_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_candidates, sequence_length)</code>) &#x2014;
Indices of candidate input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer">RealmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"candidate_input_ids"},{anchor:"transformers.RealmScorer.forward.candidate_attention_mask",description:`<strong>candidate_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_candidates, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"candidate_attention_mask"},{anchor:"transformers.RealmScorer.forward.candidate_token_type_ids",description:`<strong>candidate_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_candidates, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"candidate_token_type_ids"},{anchor:"transformers.RealmScorer.forward.candidate_inputs_embeds",description:`<strong>candidate_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size * num_candidates, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>candidate_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <em>candidate_input_ids</em> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"candidate_inputs_embeds"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1246",returnDescription:`
<p>A <code>transformers.models.realm.modeling_realm.RealmScorerOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig"
>RealmConfig</a>) and inputs.</p>
<ul>
<li><strong>relevance_score</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_candidates)</code>) \u2014 The relevance score of document candidates (before softmax).</li>
<li><strong>query_score</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.retriever_proj_size)</code>) \u2014 Query score derived from the query embedder.</li>
<li><strong>candidate_score</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_candidates, config.retriever_proj_size)</code>) \u2014 Candidate score derived from the embedder.</li>
</ul>
`,returnType:`
<p><code>transformers.models.realm.modeling_realm.RealmScorerOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new yr({props:{$$slots:{default:[Sm]},$$scope:{ctx:E}}}),Ne=new nt({props:{anchor:"transformers.RealmScorer.forward.example",$$slots:{default:[Cm]},$$scope:{ctx:E}}}),Gt=new X({}),Jt=new x({props:{name:"class transformers.RealmKnowledgeAugEncoder",anchor:"transformers.RealmKnowledgeAugEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RealmKnowledgeAugEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig">RealmConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1378"}}),eo=new x({props:{name:"forward",anchor:"transformers.RealmKnowledgeAugEncoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"relevance_score",val:" = None"},{name:"labels",val:" = None"},{name:"mlm_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RealmKnowledgeAugEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_candidates, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer">RealmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_candidates, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_candidates, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_candidates, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_candidates, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.relevance_score",description:`<strong>relevance_score</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_candidates)</code>, <em>optional</em>) &#x2014;
Relevance score derived from RealmScorer, must be specified if you want to compute the masked language
modeling loss.`,name:"relevance_score"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RealmKnowledgeAugEncoder.forward.mlm_mask",description:`<strong>mlm_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid calculating joint loss on certain positions. If not specified, the loss will not be masked.
Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"mlm_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1397",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig"
>RealmConfig</a>) and inputs.</p>
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
`}}),We=new yr({props:{$$slots:{default:[Im]},$$scope:{ctx:E}}}),Ke=new nt({props:{anchor:"transformers.RealmKnowledgeAugEncoder.forward.example",$$slots:{default:[Dm]},$$scope:{ctx:E}}}),to=new X({}),oo=new x({props:{name:"class transformers.RealmReader",anchor:"transformers.RealmReader",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RealmReader.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig">RealmConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1526"}}),ao=new x({props:{name:"forward",anchor:"transformers.RealmReader.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"relevance_score",val:" = None"},{name:"block_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"has_answers",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RealmReader.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(reader_beam_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer">RealmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RealmReader.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(reader_beam_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RealmReader.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(reader_beam_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RealmReader.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(reader_beam_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RealmReader.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RealmReader.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(reader_beam_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RealmReader.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RealmReader.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RealmReader.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RealmReader.forward.relevance_score",description:`<strong>relevance_score</strong> (<code>torch.FloatTensor</code> of shape <code>(searcher_beam_size,)</code>, <em>optional</em>) &#x2014;
Relevance score, which must be specified if you want to compute the logits and marginal log loss.`,name:"relevance_score"},{anchor:"transformers.RealmReader.forward.block_mask",description:`<strong>block_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(searcher_beam_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The mask of the evidence block, which must be specified if you want to compute the logits and marginal log
loss.`,name:"block_mask"},{anchor:"transformers.RealmReader.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(searcher_beam_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RealmReader.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(searcher_beam_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.RealmReader.forward.has_answers",description:`<strong>has_answers</strong> (<code>torch.BoolTensor</code> of shape <code>(searcher_beam_size,)</code>, <em>optional</em>) &#x2014;
Whether or not the evidence block has answer(s).`,name:"has_answers"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1540",returnDescription:`
<p>A <code>transformers.models.realm.modeling_realm.RealmReaderOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig"
>RealmConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>start_positions</code>, <code>end_positions</code>, <code>has_answers</code> are provided) \u2014 Total loss.</p>
</li>
<li>
<p><strong>retriever_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>start_positions</code>, <code>end_positions</code>, <code>has_answers</code> are provided) \u2014 Retriever loss.</p>
</li>
<li>
<p><strong>reader_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>start_positions</code>, <code>end_positions</code>, <code>has_answers</code> are provided) \u2014 Reader loss.</p>
</li>
<li>
<p><strong>retriever_correct</strong> (<code>torch.BoolTensor</code> of shape <code>(config.searcher_beam_size,)</code>, <em>optional</em>) \u2014 Whether or not an evidence block contains answer.</p>
</li>
<li>
<p><strong>reader_correct</strong> (<code>torch.BoolTensor</code> of shape <code>(config.reader_beam_size, num_candidates)</code>, <em>optional</em>) \u2014 Whether or not a span candidate contains answer.</p>
</li>
<li>
<p><strong>block_idx</strong> (<code>torch.LongTensor</code> of shape <code>()</code>) \u2014 The index of the retrieved evidence block in which the predicted answer is most likely.</p>
</li>
<li>
<p><strong>candidate</strong> (<code>torch.LongTensor</code> of shape <code>()</code>) \u2014 The index of the retrieved span candidates in which the predicted answer is most likely.</p>
</li>
<li>
<p><strong>start_pos</strong> (<code>torch.IntTensor</code> of shape <code>()</code>) \u2014 Predicted answer starting position in <em>RealmReader</em>\u2019s inputs.</p>
</li>
<li>
<p><strong>end_pos:</strong> (<code>torch.IntTensor</code> of shape <code>()</code>) \u2014 Predicted answer ending position in <em>RealmReader</em>\u2019s inputs.</p>
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
<p><code>transformers.models.realm.modeling_realm.RealmReaderOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new yr({props:{$$slots:{default:[Nm]},$$scope:{ctx:E}}}),so=new X({}),io=new x({props:{name:"class transformers.RealmForOpenQA",anchor:"transformers.RealmForOpenQA",parameters:[{name:"config",val:""},{name:"retriever",val:" = None"}],parametersDescription:[{anchor:"transformers.RealmForOpenQA.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig">RealmConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1733"}}),co=new x({props:{name:"block_embedding_to",anchor:"transformers.RealmForOpenQA.block_embedding_to",parameters:[{name:"device",val:""}],parametersDescription:[{anchor:"transformers.RealmForOpenQA.block_embedding_to.device",description:`<strong>device</strong> (<code>str</code> or <code>torch.device</code>) &#x2014;
The device to which <code>self.block_emb</code> will be sent.`,name:"device"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1756"}}),po=new x({props:{name:"forward",anchor:"transformers.RealmForOpenQA.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"answer_ids",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RealmForOpenQA.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(1, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer">RealmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RealmForOpenQA.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(1, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RealmForOpenQA.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(1, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token (should not be used in this model by design).</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RealmForOpenQA.forward.answer_ids",description:`<strong>answer_ids</strong> (<code>list</code> of shape <code>(num_answers, answer_length)</code>, <em>optional</em>) &#x2014;
Answer ids for computing the marginal log-likelihood loss. Indices should be in <code>[-1, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-1</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"answer_ids"},{anchor:"transformers.RealmForOpenQA.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/realm/modeling_realm.py#L1766",returnDescription:`
<p>A <code>transformers.models.realm.modeling_realm.RealmForOpenQAOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/realm#transformers.RealmConfig"
>RealmConfig</a>) and inputs.</p>
<ul>
<li><strong>reader_output</strong> (<code>dict</code>) \u2014 Reader output.</li>
<li><strong>predicted_answer_ids</strong> (<code>torch.LongTensor</code> of shape <code>(answer_sequence_length)</code>) \u2014 Predicted answer ids.</li>
</ul>
`,returnType:`
<p><code>transformers.models.realm.modeling_realm.RealmForOpenQAOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new yr({props:{$$slots:{default:[Om]},$$scope:{ctx:E}}}),Ge=new nt({props:{anchor:"transformers.RealmForOpenQA.forward.example",$$slots:{default:[Wm]},$$scope:{ctx:E}}}),{c(){m=n("meta"),v=d(),u=n("h1"),f=n("a"),k=n("span"),b(s.$$.fragment),h=d(),q=n("span"),za=i("REALM"),Er=d(),oe=n("h2"),we=n("a"),ln=n("span"),b(st.$$.fragment),xa=d(),dn=n("span"),qa=i("Overview"),zr=d(),$e=n("p"),Aa=i("The REALM model was proposed in "),it=n("a"),Pa=i("REALM: Retrieval-Augmented Language Model Pre-Training"),ja=i(` by Kelvin Guu, Kenton Lee, Zora Tung, Panupong Pasupat and Ming-Wei Chang. It\u2019s a
retrieval-augmented language model that firstly retrieves documents from a textual knowledge corpus and then
utilizes retrieved documents to process question answering tasks.`),xr=d(),go=n("p"),La=i("The abstract from the paper is the following:"),qr=d(),_o=n("p"),cn=n("em"),Ma=i(`Language model pre-training has been shown to capture a surprising amount of world knowledge, crucial for NLP tasks
such as question answering. However, this knowledge is stored implicitly in the parameters of a neural network,
requiring ever-larger networks to cover more facts. To capture knowledge in a more modular and interpretable way, we
augment language model pre-training with a latent knowledge retriever, which allows the model to retrieve and attend
over documents from a large corpus such as Wikipedia, used during pre-training, fine-tuning and inference. For the
first time, we show how to pre-train such a knowledge retriever in an unsupervised manner, using masked language
modeling as the learning signal and backpropagating through a retrieval step that considers millions of documents. We
demonstrate the effectiveness of Retrieval-Augmented Language Model pre-training (REALM) by fine-tuning on the
challenging task of Open-domain Question Answering (Open-QA). We compare against state-of-the-art models for both
explicit and implicit knowledge storage on three popular Open-QA benchmarks, and find that we outperform all previous
methods by a significant margin (4-16% absolute accuracy), while also providing qualitative benefits such as
interpretability and modularity.`),Ar=d(),G=n("p"),Fa=i("This model was contributed by "),lt=n("a"),Sa=i("qqaatw"),Ca=i(`. The original code can be found
`),dt=n("a"),Ia=i("here"),Da=i("."),Pr=d(),ne=n("h2"),Re=n("a"),mn=n("span"),b(ct.$$.fragment),Na=d(),pn=n("span"),Oa=i("RealmConfig"),jr=d(),P=n("div"),b(mt.$$.fragment),Wa=d(),hn=n("p"),Ka=i("This is the configuration class to store the configuration of"),Qa=d(),j=n("ol"),fn=n("li"),ko=n("a"),Ba=i("RealmEmbedder"),Ha=d(),un=n("li"),vo=n("a"),Va=i("RealmScorer"),Ua=d(),gn=n("li"),bo=n("a"),Xa=i("RealmKnowledgeAugEncoder"),Ga=d(),_n=n("li"),wo=n("a"),Ja=i("RealmRetriever"),Za=d(),kn=n("li"),$o=n("a"),Ya=i("RealmReader"),es=d(),vn=n("li"),Ro=n("a"),ts=i("RealmForOpenQA"),os=d(),pt=n("p"),ns=i(`It is used to instantiate an REALM model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the REALM
`),ht=n("a"),rs=i("google/realm-cc-news-pretrained-embedder"),as=i(`
architecture.`),ss=d(),re=n("p"),is=i("Configuration objects inherit from "),To=n("a"),ls=i("PretrainedConfig"),ds=i(` and can be used to control the model outputs. Read the
documentation from `),yo=n("a"),cs=i("PretrainedConfig"),ms=i(" for more information."),ps=d(),b(Te.$$.fragment),Lr=d(),ae=n("h2"),ye=n("a"),bn=n("span"),b(ft.$$.fragment),hs=d(),wn=n("span"),fs=i("RealmTokenizer"),Mr=d(),z=n("div"),b(ut.$$.fragment),us=d(),$n=n("p"),gs=i("Construct a REALM tokenizer."),_s=d(),Ee=n("p"),Eo=n("a"),ks=i("RealmTokenizer"),vs=i(" is identical to "),zo=n("a"),bs=i("BertTokenizer"),ws=i(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),$s=d(),gt=n("p"),Rs=i("This tokenizer inherits from "),xo=n("a"),Ts=i("PreTrainedTokenizer"),ys=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Es=d(),J=n("div"),b(_t.$$.fragment),zs=d(),Rn=n("p"),xs=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REALM sequence has the following format:`),qs=d(),kt=n("ul"),qo=n("li"),As=i("single sequence: "),Tn=n("code"),Ps=i("[CLS] X [SEP]"),js=d(),Ao=n("li"),Ls=i("pair of sequences: "),yn=n("code"),Ms=i("[CLS] A [SEP] B [SEP]"),Fs=d(),ze=n("div"),b(vt.$$.fragment),Ss=d(),bt=n("p"),Cs=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),En=n("code"),Is=i("prepare_for_model"),Ds=i(" method."),Ns=d(),C=n("div"),b(wt.$$.fragment),Os=d(),zn=n("p"),Ws=i("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A REALM sequence"),Ks=d(),b(xe.$$.fragment),Qs=d(),se=n("p"),Bs=i("If "),xn=n("code"),Hs=i("token_ids_1"),Vs=i(" is "),qn=n("code"),Us=i("None"),Xs=i(", this method only returns the first portion of the mask (0s)."),Gs=d(),Po=n("div"),b($t.$$.fragment),Js=d(),M=n("div"),b(Rt.$$.fragment),Zs=d(),Tt=n("p"),Ys=i("Encode a batch of text or text pair. This method is similar to regular "),An=n("strong"),ei=i("call"),ti=i(` method but has the following
differences:`),oi=d(),ie=n("ol"),Pn=n("li"),ni=i("Handle additional num_candidate axis. (batch_size, num_candidates, text)"),ri=d(),yt=n("li"),ai=i("Always pad the sequences to "),jn=n("em"),si=i("max_length"),ii=i("."),li=d(),Et=n("li"),di=i("Must specify "),Ln=n("em"),ci=i("max_length"),mi=i(" in order to stack packs of candidates into a batch."),pi=d(),zt=n("ul"),jo=n("li"),hi=i("single sequence: "),Mn=n("code"),fi=i("[CLS] X [SEP]"),ui=d(),Lo=n("li"),gi=i("pair of sequences: "),Fn=n("code"),_i=i("[CLS] A [SEP] B [SEP]"),ki=d(),b(qe.$$.fragment),Fr=d(),le=n("h2"),Ae=n("a"),Sn=n("span"),b(xt.$$.fragment),vi=d(),Cn=n("span"),bi=i("RealmTokenizerFast"),Sr=d(),L=n("div"),b(qt.$$.fragment),wi=d(),At=n("p"),$i=i("Construct a \u201Cfast\u201D REALM tokenizer (backed by HuggingFace\u2019s "),In=n("em"),Ri=i("tokenizers"),Ti=i(" library). Based on WordPiece."),yi=d(),Pe=n("p"),Mo=n("a"),Ei=i("RealmTokenizerFast"),zi=i(" is identical to "),Fo=n("a"),xi=i("BertTokenizerFast"),qi=i(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Ai=d(),Pt=n("p"),Pi=i("This tokenizer inherits from "),So=n("a"),ji=i("PreTrainedTokenizerFast"),Li=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Mi=d(),F=n("div"),b(jt.$$.fragment),Fi=d(),Lt=n("p"),Si=i("Encode a batch of text or text pair. This method is similar to regular "),Dn=n("strong"),Ci=i("call"),Ii=i(` method but has the following
differences:`),Di=d(),de=n("ol"),Nn=n("li"),Ni=i("Handle additional num_candidate axis. (batch_size, num_candidates, text)"),Oi=d(),Mt=n("li"),Wi=i("Always pad the sequences to "),On=n("em"),Ki=i("max_length"),Qi=i("."),Bi=d(),Ft=n("li"),Hi=i("Must specify "),Wn=n("em"),Vi=i("max_length"),Ui=i(" in order to stack packs of candidates into a batch."),Xi=d(),St=n("ul"),Co=n("li"),Gi=i("single sequence: "),Kn=n("code"),Ji=i("[CLS] X [SEP]"),Zi=d(),Io=n("li"),Yi=i("pair of sequences: "),Qn=n("code"),el=i("[CLS] A [SEP] B [SEP]"),tl=d(),b(je.$$.fragment),Cr=d(),ce=n("h2"),Le=n("a"),Bn=n("span"),b(Ct.$$.fragment),ol=d(),Hn=n("span"),nl=i("RealmRetriever"),Ir=d(),Q=n("div"),b(It.$$.fragment),rl=d(),Vn=n("p"),al=i(`The retriever of REALM outputting the retrieved evidence block and whether the block has answers as well as answer
positions.\u201D`),sl=d(),Me=n("div"),b(Dt.$$.fragment),il=d(),Un=n("p"),ll=i("check if retrieved_blocks has answers."),Dr=d(),me=n("h2"),Fe=n("a"),Xn=n("span"),b(Nt.$$.fragment),dl=d(),Gn=n("span"),cl=i("RealmEmbedder"),Nr=d(),B=n("div"),b(Ot.$$.fragment),ml=d(),Wt=n("p"),pl=i(`The embedder of REALM outputting projected score that will be used to calculate relevance score.
This model is a PyTorch `),Kt=n("a"),hl=i("torch.nn.Module"),fl=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul=d(),I=n("div"),b(Qt.$$.fragment),gl=d(),pe=n("p"),_l=i("The "),Do=n("a"),kl=i("RealmEmbedder"),vl=i(" forward method, overrides the "),Jn=n("code"),bl=i("__call__"),wl=i(" special method."),$l=d(),b(Se.$$.fragment),Rl=d(),b(Ce.$$.fragment),Or=d(),he=n("h2"),Ie=n("a"),Zn=n("span"),b(Bt.$$.fragment),Tl=d(),Yn=n("span"),yl=i("RealmScorer"),Wr=d(),H=n("div"),b(Ht.$$.fragment),El=d(),Vt=n("p"),zl=i(`The scorer of REALM outputting relevance scores representing the score of document candidates (before softmax).
This model is a PyTorch `),Ut=n("a"),xl=i("torch.nn.Module"),ql=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Al=d(),D=n("div"),b(Xt.$$.fragment),Pl=d(),fe=n("p"),jl=i("The "),No=n("a"),Ll=i("RealmScorer"),Ml=i(" forward method, overrides the "),er=n("code"),Fl=i("__call__"),Sl=i(" special method."),Cl=d(),b(De.$$.fragment),Il=d(),b(Ne.$$.fragment),Kr=d(),ue=n("h2"),Oe=n("a"),tr=n("span"),b(Gt.$$.fragment),Dl=d(),or=n("span"),Nl=i("RealmKnowledgeAugEncoder"),Qr=d(),V=n("div"),b(Jt.$$.fragment),Ol=d(),Zt=n("p"),Wl=i(`The knowledge-augmented encoder of REALM outputting masked language model logits and marginal log-likelihood loss.
This model is a PyTorch `),Yt=n("a"),Kl=i("torch.nn.Module"),Ql=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bl=d(),N=n("div"),b(eo.$$.fragment),Hl=d(),ge=n("p"),Vl=i("The "),Oo=n("a"),Ul=i("RealmKnowledgeAugEncoder"),Xl=i(" forward method, overrides the "),nr=n("code"),Gl=i("__call__"),Jl=i(" special method."),Zl=d(),b(We.$$.fragment),Yl=d(),b(Ke.$$.fragment),Br=d(),_e=n("h2"),Qe=n("a"),rr=n("span"),b(to.$$.fragment),ed=d(),ar=n("span"),td=i("RealmReader"),Hr=d(),U=n("div"),b(oo.$$.fragment),od=d(),no=n("p"),nd=i(`The reader of REALM.
This model is a PyTorch `),ro=n("a"),rd=i("torch.nn.Module"),ad=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sd=d(),Z=n("div"),b(ao.$$.fragment),id=d(),ke=n("p"),ld=i("The "),Wo=n("a"),dd=i("RealmReader"),cd=i(" forward method, overrides the "),sr=n("code"),md=i("__call__"),pd=i(" special method."),hd=d(),b(Be.$$.fragment),Vr=d(),ve=n("h2"),He=n("a"),ir=n("span"),b(so.$$.fragment),fd=d(),lr=n("span"),ud=i("RealmForOpenQA"),Ur=d(),S=n("div"),b(io.$$.fragment),gd=d(),Ve=n("p"),dr=n("code"),_d=i("RealmForOpenQA"),kd=i(` for end-to-end open domain question answering.
This model is a PyTorch `),lo=n("a"),vd=i("torch.nn.Module"),bd=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wd=d(),Ue=n("div"),b(co.$$.fragment),$d=d(),mo=n("p"),Rd=i("Send "),cr=n("code"),Td=i("self.block_emb"),yd=i(" to a specific device."),Ed=d(),O=n("div"),b(po.$$.fragment),zd=d(),be=n("p"),xd=i("The "),Ko=n("a"),qd=i("RealmForOpenQA"),Ad=i(" forward method, overrides the "),mr=n("code"),Pd=i("__call__"),jd=i(" special method."),Ld=d(),b(Xe.$$.fragment),Md=d(),b(Ge.$$.fragment),this.h()},l(o){const g=xm('[data-svelte="svelte-1phssyn"]',document.head);m=r(g,"META",{name:!0,content:!0}),g.forEach(t),v=c(o),u=r(o,"H1",{class:!0});var ho=a(u);f=r(ho,"A",{id:!0,class:!0,href:!0});var pr=a(f);k=r(pr,"SPAN",{});var hr=a(k);w(s.$$.fragment,hr),hr.forEach(t),pr.forEach(t),h=c(ho),q=r(ho,"SPAN",{});var fr=a(q);za=l(fr,"REALM"),fr.forEach(t),ho.forEach(t),Er=c(o),oe=r(o,"H2",{class:!0});var fo=a(oe);we=r(fo,"A",{id:!0,class:!0,href:!0});var ur=a(we);ln=r(ur,"SPAN",{});var gr=a(ln);w(st.$$.fragment,gr),gr.forEach(t),ur.forEach(t),xa=c(fo),dn=r(fo,"SPAN",{});var _r=a(dn);qa=l(_r,"Overview"),_r.forEach(t),fo.forEach(t),zr=c(o),$e=r(o,"P",{});var uo=a($e);Aa=l(uo,"The REALM model was proposed in "),it=r(uo,"A",{href:!0,rel:!0});var kr=a(it);Pa=l(kr,"REALM: Retrieval-Augmented Language Model Pre-Training"),kr.forEach(t),ja=l(uo,` by Kelvin Guu, Kenton Lee, Zora Tung, Panupong Pasupat and Ming-Wei Chang. It\u2019s a
retrieval-augmented language model that firstly retrieves documents from a textual knowledge corpus and then
utilizes retrieved documents to process question answering tasks.`),uo.forEach(t),xr=c(o),go=r(o,"P",{});var vr=a(go);La=l(vr,"The abstract from the paper is the following:"),vr.forEach(t),qr=c(o),_o=r(o,"P",{});var br=a(_o);cn=r(br,"EM",{});var wr=a(cn);Ma=l(wr,`Language model pre-training has been shown to capture a surprising amount of world knowledge, crucial for NLP tasks
such as question answering. However, this knowledge is stored implicitly in the parameters of a neural network,
requiring ever-larger networks to cover more facts. To capture knowledge in a more modular and interpretable way, we
augment language model pre-training with a latent knowledge retriever, which allows the model to retrieve and attend
over documents from a large corpus such as Wikipedia, used during pre-training, fine-tuning and inference. For the
first time, we show how to pre-train such a knowledge retriever in an unsupervised manner, using masked language
modeling as the learning signal and backpropagating through a retrieval step that considers millions of documents. We
demonstrate the effectiveness of Retrieval-Augmented Language Model pre-training (REALM) by fine-tuning on the
challenging task of Open-domain Question Answering (Open-QA). We compare against state-of-the-art models for both
explicit and implicit knowledge storage on three popular Open-QA benchmarks, and find that we outperform all previous
methods by a significant margin (4-16% absolute accuracy), while also providing qualitative benefits such as
interpretability and modularity.`),wr.forEach(t),br.forEach(t),Ar=c(o),G=r(o,"P",{});var Qo=a(G);Fa=l(Qo,"This model was contributed by "),lt=r(Qo,"A",{href:!0,rel:!0});var Od=a(lt);Sa=l(Od,"qqaatw"),Od.forEach(t),Ca=l(Qo,`. The original code can be found
`),dt=r(Qo,"A",{href:!0,rel:!0});var Wd=a(dt);Ia=l(Wd,"here"),Wd.forEach(t),Da=l(Qo,"."),Qo.forEach(t),Pr=c(o),ne=r(o,"H2",{class:!0});var Gr=a(ne);Re=r(Gr,"A",{id:!0,class:!0,href:!0});var Kd=a(Re);mn=r(Kd,"SPAN",{});var Qd=a(mn);w(ct.$$.fragment,Qd),Qd.forEach(t),Kd.forEach(t),Na=c(Gr),pn=r(Gr,"SPAN",{});var Bd=a(pn);Oa=l(Bd,"RealmConfig"),Bd.forEach(t),Gr.forEach(t),jr=c(o),P=r(o,"DIV",{class:!0});var W=a(P);w(mt.$$.fragment,W),Wa=c(W),hn=r(W,"P",{});var Hd=a(hn);Ka=l(Hd,"This is the configuration class to store the configuration of"),Hd.forEach(t),Qa=c(W),j=r(W,"OL",{});var K=a(j);fn=r(K,"LI",{});var Vd=a(fn);ko=r(Vd,"A",{href:!0});var Ud=a(ko);Ba=l(Ud,"RealmEmbedder"),Ud.forEach(t),Vd.forEach(t),Ha=c(K),un=r(K,"LI",{});var Xd=a(un);vo=r(Xd,"A",{href:!0});var Gd=a(vo);Va=l(Gd,"RealmScorer"),Gd.forEach(t),Xd.forEach(t),Ua=c(K),gn=r(K,"LI",{});var Jd=a(gn);bo=r(Jd,"A",{href:!0});var Zd=a(bo);Xa=l(Zd,"RealmKnowledgeAugEncoder"),Zd.forEach(t),Jd.forEach(t),Ga=c(K),_n=r(K,"LI",{});var Yd=a(_n);wo=r(Yd,"A",{href:!0});var ec=a(wo);Ja=l(ec,"RealmRetriever"),ec.forEach(t),Yd.forEach(t),Za=c(K),kn=r(K,"LI",{});var tc=a(kn);$o=r(tc,"A",{href:!0});var oc=a($o);Ya=l(oc,"RealmReader"),oc.forEach(t),tc.forEach(t),es=c(K),vn=r(K,"LI",{});var nc=a(vn);Ro=r(nc,"A",{href:!0});var rc=a(Ro);ts=l(rc,"RealmForOpenQA"),rc.forEach(t),nc.forEach(t),K.forEach(t),os=c(W),pt=r(W,"P",{});var Jr=a(pt);ns=l(Jr,`It is used to instantiate an REALM model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the REALM
`),ht=r(Jr,"A",{href:!0,rel:!0});var ac=a(ht);rs=l(ac,"google/realm-cc-news-pretrained-embedder"),ac.forEach(t),as=l(Jr,`
architecture.`),Jr.forEach(t),ss=c(W),re=r(W,"P",{});var Bo=a(re);is=l(Bo,"Configuration objects inherit from "),To=r(Bo,"A",{href:!0});var sc=a(To);ls=l(sc,"PretrainedConfig"),sc.forEach(t),ds=l(Bo,` and can be used to control the model outputs. Read the
documentation from `),yo=r(Bo,"A",{href:!0});var ic=a(yo);cs=l(ic,"PretrainedConfig"),ic.forEach(t),ms=l(Bo," for more information."),Bo.forEach(t),ps=c(W),w(Te.$$.fragment,W),W.forEach(t),Lr=c(o),ae=r(o,"H2",{class:!0});var Zr=a(ae);ye=r(Zr,"A",{id:!0,class:!0,href:!0});var lc=a(ye);bn=r(lc,"SPAN",{});var dc=a(bn);w(ft.$$.fragment,dc),dc.forEach(t),lc.forEach(t),hs=c(Zr),wn=r(Zr,"SPAN",{});var cc=a(wn);fs=l(cc,"RealmTokenizer"),cc.forEach(t),Zr.forEach(t),Mr=c(o),z=r(o,"DIV",{class:!0});var A=a(z);w(ut.$$.fragment,A),us=c(A),$n=r(A,"P",{});var mc=a($n);gs=l(mc,"Construct a REALM tokenizer."),mc.forEach(t),_s=c(A),Ee=r(A,"P",{});var $r=a(Ee);Eo=r($r,"A",{href:!0});var pc=a(Eo);ks=l(pc,"RealmTokenizer"),pc.forEach(t),vs=l($r," is identical to "),zo=r($r,"A",{href:!0});var hc=a(zo);bs=l(hc,"BertTokenizer"),hc.forEach(t),ws=l($r,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),$r.forEach(t),$s=c(A),gt=r(A,"P",{});var Yr=a(gt);Rs=l(Yr,"This tokenizer inherits from "),xo=r(Yr,"A",{href:!0});var fc=a(xo);Ts=l(fc,"PreTrainedTokenizer"),fc.forEach(t),ys=l(Yr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Yr.forEach(t),Es=c(A),J=r(A,"DIV",{class:!0});var Ho=a(J);w(_t.$$.fragment,Ho),zs=c(Ho),Rn=r(Ho,"P",{});var uc=a(Rn);xs=l(uc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REALM sequence has the following format:`),uc.forEach(t),qs=c(Ho),kt=r(Ho,"UL",{});var ea=a(kt);qo=r(ea,"LI",{});var Fd=a(qo);As=l(Fd,"single sequence: "),Tn=r(Fd,"CODE",{});var gc=a(Tn);Ps=l(gc,"[CLS] X [SEP]"),gc.forEach(t),Fd.forEach(t),js=c(ea),Ao=r(ea,"LI",{});var Sd=a(Ao);Ls=l(Sd,"pair of sequences: "),yn=r(Sd,"CODE",{});var _c=a(yn);Ms=l(_c,"[CLS] A [SEP] B [SEP]"),_c.forEach(t),Sd.forEach(t),ea.forEach(t),Ho.forEach(t),Fs=c(A),ze=r(A,"DIV",{class:!0});var ta=a(ze);w(vt.$$.fragment,ta),Ss=c(ta),bt=r(ta,"P",{});var oa=a(bt);Cs=l(oa,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),En=r(oa,"CODE",{});var kc=a(En);Is=l(kc,"prepare_for_model"),kc.forEach(t),Ds=l(oa," method."),oa.forEach(t),ta.forEach(t),Ns=c(A),C=r(A,"DIV",{class:!0});var Je=a(C);w(wt.$$.fragment,Je),Os=c(Je),zn=r(Je,"P",{});var vc=a(zn);Ws=l(vc,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A REALM sequence"),vc.forEach(t),Ks=c(Je),w(xe.$$.fragment,Je),Qs=c(Je),se=r(Je,"P",{});var Vo=a(se);Bs=l(Vo,"If "),xn=r(Vo,"CODE",{});var bc=a(xn);Hs=l(bc,"token_ids_1"),bc.forEach(t),Vs=l(Vo," is "),qn=r(Vo,"CODE",{});var wc=a(qn);Us=l(wc,"None"),wc.forEach(t),Xs=l(Vo,", this method only returns the first portion of the mask (0s)."),Vo.forEach(t),Je.forEach(t),Gs=c(A),Po=r(A,"DIV",{class:!0});var $c=a(Po);w($t.$$.fragment,$c),$c.forEach(t),Js=c(A),M=r(A,"DIV",{class:!0});var Y=a(M);w(Rt.$$.fragment,Y),Zs=c(Y),Tt=r(Y,"P",{});var na=a(Tt);Ys=l(na,"Encode a batch of text or text pair. This method is similar to regular "),An=r(na,"STRONG",{});var Rc=a(An);ei=l(Rc,"call"),Rc.forEach(t),ti=l(na,` method but has the following
differences:`),na.forEach(t),oi=c(Y),ie=r(Y,"OL",{});var Uo=a(ie);Pn=r(Uo,"LI",{});var Tc=a(Pn);ni=l(Tc,"Handle additional num_candidate axis. (batch_size, num_candidates, text)"),Tc.forEach(t),ri=c(Uo),yt=r(Uo,"LI",{});var ra=a(yt);ai=l(ra,"Always pad the sequences to "),jn=r(ra,"EM",{});var yc=a(jn);si=l(yc,"max_length"),yc.forEach(t),ii=l(ra,"."),ra.forEach(t),li=c(Uo),Et=r(Uo,"LI",{});var aa=a(Et);di=l(aa,"Must specify "),Ln=r(aa,"EM",{});var Ec=a(Ln);ci=l(Ec,"max_length"),Ec.forEach(t),mi=l(aa," in order to stack packs of candidates into a batch."),aa.forEach(t),Uo.forEach(t),pi=c(Y),zt=r(Y,"UL",{});var sa=a(zt);jo=r(sa,"LI",{});var Cd=a(jo);hi=l(Cd,"single sequence: "),Mn=r(Cd,"CODE",{});var zc=a(Mn);fi=l(zc,"[CLS] X [SEP]"),zc.forEach(t),Cd.forEach(t),ui=c(sa),Lo=r(sa,"LI",{});var Id=a(Lo);gi=l(Id,"pair of sequences: "),Fn=r(Id,"CODE",{});var xc=a(Fn);_i=l(xc,"[CLS] A [SEP] B [SEP]"),xc.forEach(t),Id.forEach(t),sa.forEach(t),ki=c(Y),w(qe.$$.fragment,Y),Y.forEach(t),A.forEach(t),Fr=c(o),le=r(o,"H2",{class:!0});var ia=a(le);Ae=r(ia,"A",{id:!0,class:!0,href:!0});var qc=a(Ae);Sn=r(qc,"SPAN",{});var Ac=a(Sn);w(xt.$$.fragment,Ac),Ac.forEach(t),qc.forEach(t),vi=c(ia),Cn=r(ia,"SPAN",{});var Pc=a(Cn);bi=l(Pc,"RealmTokenizerFast"),Pc.forEach(t),ia.forEach(t),Sr=c(o),L=r(o,"DIV",{class:!0});var ee=a(L);w(qt.$$.fragment,ee),wi=c(ee),At=r(ee,"P",{});var la=a(At);$i=l(la,"Construct a \u201Cfast\u201D REALM tokenizer (backed by HuggingFace\u2019s "),In=r(la,"EM",{});var jc=a(In);Ri=l(jc,"tokenizers"),jc.forEach(t),Ti=l(la," library). Based on WordPiece."),la.forEach(t),yi=c(ee),Pe=r(ee,"P",{});var Rr=a(Pe);Mo=r(Rr,"A",{href:!0});var Lc=a(Mo);Ei=l(Lc,"RealmTokenizerFast"),Lc.forEach(t),zi=l(Rr," is identical to "),Fo=r(Rr,"A",{href:!0});var Mc=a(Fo);xi=l(Mc,"BertTokenizerFast"),Mc.forEach(t),qi=l(Rr,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Rr.forEach(t),Ai=c(ee),Pt=r(ee,"P",{});var da=a(Pt);Pi=l(da,"This tokenizer inherits from "),So=r(da,"A",{href:!0});var Fc=a(So);ji=l(Fc,"PreTrainedTokenizerFast"),Fc.forEach(t),Li=l(da,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),da.forEach(t),Mi=c(ee),F=r(ee,"DIV",{class:!0});var te=a(F);w(jt.$$.fragment,te),Fi=c(te),Lt=r(te,"P",{});var ca=a(Lt);Si=l(ca,"Encode a batch of text or text pair. This method is similar to regular "),Dn=r(ca,"STRONG",{});var Sc=a(Dn);Ci=l(Sc,"call"),Sc.forEach(t),Ii=l(ca,` method but has the following
differences:`),ca.forEach(t),Di=c(te),de=r(te,"OL",{});var Xo=a(de);Nn=r(Xo,"LI",{});var Cc=a(Nn);Ni=l(Cc,"Handle additional num_candidate axis. (batch_size, num_candidates, text)"),Cc.forEach(t),Oi=c(Xo),Mt=r(Xo,"LI",{});var ma=a(Mt);Wi=l(ma,"Always pad the sequences to "),On=r(ma,"EM",{});var Ic=a(On);Ki=l(Ic,"max_length"),Ic.forEach(t),Qi=l(ma,"."),ma.forEach(t),Bi=c(Xo),Ft=r(Xo,"LI",{});var pa=a(Ft);Hi=l(pa,"Must specify "),Wn=r(pa,"EM",{});var Dc=a(Wn);Vi=l(Dc,"max_length"),Dc.forEach(t),Ui=l(pa," in order to stack packs of candidates into a batch."),pa.forEach(t),Xo.forEach(t),Xi=c(te),St=r(te,"UL",{});var ha=a(St);Co=r(ha,"LI",{});var Dd=a(Co);Gi=l(Dd,"single sequence: "),Kn=r(Dd,"CODE",{});var Nc=a(Kn);Ji=l(Nc,"[CLS] X [SEP]"),Nc.forEach(t),Dd.forEach(t),Zi=c(ha),Io=r(ha,"LI",{});var Nd=a(Io);Yi=l(Nd,"pair of sequences: "),Qn=r(Nd,"CODE",{});var Oc=a(Qn);el=l(Oc,"[CLS] A [SEP] B [SEP]"),Oc.forEach(t),Nd.forEach(t),ha.forEach(t),tl=c(te),w(je.$$.fragment,te),te.forEach(t),ee.forEach(t),Cr=c(o),ce=r(o,"H2",{class:!0});var fa=a(ce);Le=r(fa,"A",{id:!0,class:!0,href:!0});var Wc=a(Le);Bn=r(Wc,"SPAN",{});var Kc=a(Bn);w(Ct.$$.fragment,Kc),Kc.forEach(t),Wc.forEach(t),ol=c(fa),Hn=r(fa,"SPAN",{});var Qc=a(Hn);nl=l(Qc,"RealmRetriever"),Qc.forEach(t),fa.forEach(t),Ir=c(o),Q=r(o,"DIV",{class:!0});var Go=a(Q);w(It.$$.fragment,Go),rl=c(Go),Vn=r(Go,"P",{});var Bc=a(Vn);al=l(Bc,`The retriever of REALM outputting the retrieved evidence block and whether the block has answers as well as answer
positions.\u201D`),Bc.forEach(t),sl=c(Go),Me=r(Go,"DIV",{class:!0});var ua=a(Me);w(Dt.$$.fragment,ua),il=c(ua),Un=r(ua,"P",{});var Hc=a(Un);ll=l(Hc,"check if retrieved_blocks has answers."),Hc.forEach(t),ua.forEach(t),Go.forEach(t),Dr=c(o),me=r(o,"H2",{class:!0});var ga=a(me);Fe=r(ga,"A",{id:!0,class:!0,href:!0});var Vc=a(Fe);Xn=r(Vc,"SPAN",{});var Uc=a(Xn);w(Nt.$$.fragment,Uc),Uc.forEach(t),Vc.forEach(t),dl=c(ga),Gn=r(ga,"SPAN",{});var Xc=a(Gn);cl=l(Xc,"RealmEmbedder"),Xc.forEach(t),ga.forEach(t),Nr=c(o),B=r(o,"DIV",{class:!0});var Jo=a(B);w(Ot.$$.fragment,Jo),ml=c(Jo),Wt=r(Jo,"P",{});var _a=a(Wt);pl=l(_a,`The embedder of REALM outputting projected score that will be used to calculate relevance score.
This model is a PyTorch `),Kt=r(_a,"A",{href:!0,rel:!0});var Gc=a(Kt);hl=l(Gc,"torch.nn.Module"),Gc.forEach(t),fl=l(_a,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_a.forEach(t),ul=c(Jo),I=r(Jo,"DIV",{class:!0});var Ze=a(I);w(Qt.$$.fragment,Ze),gl=c(Ze),pe=r(Ze,"P",{});var Zo=a(pe);_l=l(Zo,"The "),Do=r(Zo,"A",{href:!0});var Jc=a(Do);kl=l(Jc,"RealmEmbedder"),Jc.forEach(t),vl=l(Zo," forward method, overrides the "),Jn=r(Zo,"CODE",{});var Zc=a(Jn);bl=l(Zc,"__call__"),Zc.forEach(t),wl=l(Zo," special method."),Zo.forEach(t),$l=c(Ze),w(Se.$$.fragment,Ze),Rl=c(Ze),w(Ce.$$.fragment,Ze),Ze.forEach(t),Jo.forEach(t),Or=c(o),he=r(o,"H2",{class:!0});var ka=a(he);Ie=r(ka,"A",{id:!0,class:!0,href:!0});var Yc=a(Ie);Zn=r(Yc,"SPAN",{});var em=a(Zn);w(Bt.$$.fragment,em),em.forEach(t),Yc.forEach(t),Tl=c(ka),Yn=r(ka,"SPAN",{});var tm=a(Yn);yl=l(tm,"RealmScorer"),tm.forEach(t),ka.forEach(t),Wr=c(o),H=r(o,"DIV",{class:!0});var Yo=a(H);w(Ht.$$.fragment,Yo),El=c(Yo),Vt=r(Yo,"P",{});var va=a(Vt);zl=l(va,`The scorer of REALM outputting relevance scores representing the score of document candidates (before softmax).
This model is a PyTorch `),Ut=r(va,"A",{href:!0,rel:!0});var om=a(Ut);xl=l(om,"torch.nn.Module"),om.forEach(t),ql=l(va,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),va.forEach(t),Al=c(Yo),D=r(Yo,"DIV",{class:!0});var Ye=a(D);w(Xt.$$.fragment,Ye),Pl=c(Ye),fe=r(Ye,"P",{});var en=a(fe);jl=l(en,"The "),No=r(en,"A",{href:!0});var nm=a(No);Ll=l(nm,"RealmScorer"),nm.forEach(t),Ml=l(en," forward method, overrides the "),er=r(en,"CODE",{});var rm=a(er);Fl=l(rm,"__call__"),rm.forEach(t),Sl=l(en," special method."),en.forEach(t),Cl=c(Ye),w(De.$$.fragment,Ye),Il=c(Ye),w(Ne.$$.fragment,Ye),Ye.forEach(t),Yo.forEach(t),Kr=c(o),ue=r(o,"H2",{class:!0});var ba=a(ue);Oe=r(ba,"A",{id:!0,class:!0,href:!0});var am=a(Oe);tr=r(am,"SPAN",{});var sm=a(tr);w(Gt.$$.fragment,sm),sm.forEach(t),am.forEach(t),Dl=c(ba),or=r(ba,"SPAN",{});var im=a(or);Nl=l(im,"RealmKnowledgeAugEncoder"),im.forEach(t),ba.forEach(t),Qr=c(o),V=r(o,"DIV",{class:!0});var tn=a(V);w(Jt.$$.fragment,tn),Ol=c(tn),Zt=r(tn,"P",{});var wa=a(Zt);Wl=l(wa,`The knowledge-augmented encoder of REALM outputting masked language model logits and marginal log-likelihood loss.
This model is a PyTorch `),Yt=r(wa,"A",{href:!0,rel:!0});var lm=a(Yt);Kl=l(lm,"torch.nn.Module"),lm.forEach(t),Ql=l(wa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wa.forEach(t),Bl=c(tn),N=r(tn,"DIV",{class:!0});var et=a(N);w(eo.$$.fragment,et),Hl=c(et),ge=r(et,"P",{});var on=a(ge);Vl=l(on,"The "),Oo=r(on,"A",{href:!0});var dm=a(Oo);Ul=l(dm,"RealmKnowledgeAugEncoder"),dm.forEach(t),Xl=l(on," forward method, overrides the "),nr=r(on,"CODE",{});var cm=a(nr);Gl=l(cm,"__call__"),cm.forEach(t),Jl=l(on," special method."),on.forEach(t),Zl=c(et),w(We.$$.fragment,et),Yl=c(et),w(Ke.$$.fragment,et),et.forEach(t),tn.forEach(t),Br=c(o),_e=r(o,"H2",{class:!0});var $a=a(_e);Qe=r($a,"A",{id:!0,class:!0,href:!0});var mm=a(Qe);rr=r(mm,"SPAN",{});var pm=a(rr);w(to.$$.fragment,pm),pm.forEach(t),mm.forEach(t),ed=c($a),ar=r($a,"SPAN",{});var hm=a(ar);td=l(hm,"RealmReader"),hm.forEach(t),$a.forEach(t),Hr=c(o),U=r(o,"DIV",{class:!0});var nn=a(U);w(oo.$$.fragment,nn),od=c(nn),no=r(nn,"P",{});var Ra=a(no);nd=l(Ra,`The reader of REALM.
This model is a PyTorch `),ro=r(Ra,"A",{href:!0,rel:!0});var fm=a(ro);rd=l(fm,"torch.nn.Module"),fm.forEach(t),ad=l(Ra,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ra.forEach(t),sd=c(nn),Z=r(nn,"DIV",{class:!0});var rn=a(Z);w(ao.$$.fragment,rn),id=c(rn),ke=r(rn,"P",{});var an=a(ke);ld=l(an,"The "),Wo=r(an,"A",{href:!0});var um=a(Wo);dd=l(um,"RealmReader"),um.forEach(t),cd=l(an," forward method, overrides the "),sr=r(an,"CODE",{});var gm=a(sr);md=l(gm,"__call__"),gm.forEach(t),pd=l(an," special method."),an.forEach(t),hd=c(rn),w(Be.$$.fragment,rn),rn.forEach(t),nn.forEach(t),Vr=c(o),ve=r(o,"H2",{class:!0});var Ta=a(ve);He=r(Ta,"A",{id:!0,class:!0,href:!0});var _m=a(He);ir=r(_m,"SPAN",{});var km=a(ir);w(so.$$.fragment,km),km.forEach(t),_m.forEach(t),fd=c(Ta),lr=r(Ta,"SPAN",{});var vm=a(lr);ud=l(vm,"RealmForOpenQA"),vm.forEach(t),Ta.forEach(t),Ur=c(o),S=r(o,"DIV",{class:!0});var tt=a(S);w(io.$$.fragment,tt),gd=c(tt),Ve=r(tt,"P",{});var Tr=a(Ve);dr=r(Tr,"CODE",{});var bm=a(dr);_d=l(bm,"RealmForOpenQA"),bm.forEach(t),kd=l(Tr,` for end-to-end open domain question answering.
This model is a PyTorch `),lo=r(Tr,"A",{href:!0,rel:!0});var wm=a(lo);vd=l(wm,"torch.nn.Module"),wm.forEach(t),bd=l(Tr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tr.forEach(t),wd=c(tt),Ue=r(tt,"DIV",{class:!0});var ya=a(Ue);w(co.$$.fragment,ya),$d=c(ya),mo=r(ya,"P",{});var Ea=a(mo);Rd=l(Ea,"Send "),cr=r(Ea,"CODE",{});var $m=a(cr);Td=l($m,"self.block_emb"),$m.forEach(t),yd=l(Ea," to a specific device."),Ea.forEach(t),ya.forEach(t),Ed=c(tt),O=r(tt,"DIV",{class:!0});var ot=a(O);w(po.$$.fragment,ot),zd=c(ot),be=r(ot,"P",{});var sn=a(be);xd=l(sn,"The "),Ko=r(sn,"A",{href:!0});var Rm=a(Ko);qd=l(Rm,"RealmForOpenQA"),Rm.forEach(t),Ad=l(sn," forward method, overrides the "),mr=r(sn,"CODE",{});var Tm=a(mr);Pd=l(Tm,"__call__"),Tm.forEach(t),jd=l(sn," special method."),sn.forEach(t),Ld=c(ot),w(Xe.$$.fragment,ot),Md=c(ot),w(Ge.$$.fragment,ot),ot.forEach(t),tt.forEach(t),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(Qm)),p(f,"id","realm"),p(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(f,"href","#realm"),p(u,"class","relative group"),p(we,"id","overview"),p(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(we,"href","#overview"),p(oe,"class","relative group"),p(it,"href","https://arxiv.org/abs/2002.08909"),p(it,"rel","nofollow"),p(lt,"href","https://huggingface.co/qqaatw"),p(lt,"rel","nofollow"),p(dt,"href","https://github.com/google-research/language/tree/master/language/realm"),p(dt,"rel","nofollow"),p(Re,"id","transformers.RealmConfig"),p(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Re,"href","#transformers.RealmConfig"),p(ne,"class","relative group"),p(ko,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmEmbedder"),p(vo,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmScorer"),p(bo,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmKnowledgeAugEncoder"),p(wo,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmRetriever"),p($o,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmReader"),p(Ro,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmForOpenQA"),p(ht,"href","https://huggingface.co/google/realm-cc-news-pretrained-embedder"),p(ht,"rel","nofollow"),p(To,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(yo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ye,"id","transformers.RealmTokenizer"),p(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ye,"href","#transformers.RealmTokenizer"),p(ae,"class","relative group"),p(Eo,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizer"),p(zo,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),p(xo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ae,"id","transformers.RealmTokenizerFast"),p(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ae,"href","#transformers.RealmTokenizerFast"),p(le,"class","relative group"),p(Mo,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmTokenizerFast"),p(Fo,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),p(So,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Le,"id","transformers.RealmRetriever"),p(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Le,"href","#transformers.RealmRetriever"),p(ce,"class","relative group"),p(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Fe,"id","transformers.RealmEmbedder"),p(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Fe,"href","#transformers.RealmEmbedder"),p(me,"class","relative group"),p(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Kt,"rel","nofollow"),p(Do,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmEmbedder"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ie,"id","transformers.RealmScorer"),p(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ie,"href","#transformers.RealmScorer"),p(he,"class","relative group"),p(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Ut,"rel","nofollow"),p(No,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmScorer"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Oe,"id","transformers.RealmKnowledgeAugEncoder"),p(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Oe,"href","#transformers.RealmKnowledgeAugEncoder"),p(ue,"class","relative group"),p(Yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Yt,"rel","nofollow"),p(Oo,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmKnowledgeAugEncoder"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Qe,"id","transformers.RealmReader"),p(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qe,"href","#transformers.RealmReader"),p(_e,"class","relative group"),p(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ro,"rel","nofollow"),p(Wo,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmReader"),p(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(He,"id","transformers.RealmForOpenQA"),p(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(He,"href","#transformers.RealmForOpenQA"),p(ve,"class","relative group"),p(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(lo,"rel","nofollow"),p(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ko,"href","/docs/transformers/main/en/model_doc/realm#transformers.RealmForOpenQA"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,m),_(o,v,g),_(o,u,g),e(u,f),e(f,k),$(s,k,null),e(u,h),e(u,q),e(q,za),_(o,Er,g),_(o,oe,g),e(oe,we),e(we,ln),$(st,ln,null),e(oe,xa),e(oe,dn),e(dn,qa),_(o,zr,g),_(o,$e,g),e($e,Aa),e($e,it),e(it,Pa),e($e,ja),_(o,xr,g),_(o,go,g),e(go,La),_(o,qr,g),_(o,_o,g),e(_o,cn),e(cn,Ma),_(o,Ar,g),_(o,G,g),e(G,Fa),e(G,lt),e(lt,Sa),e(G,Ca),e(G,dt),e(dt,Ia),e(G,Da),_(o,Pr,g),_(o,ne,g),e(ne,Re),e(Re,mn),$(ct,mn,null),e(ne,Na),e(ne,pn),e(pn,Oa),_(o,jr,g),_(o,P,g),$(mt,P,null),e(P,Wa),e(P,hn),e(hn,Ka),e(P,Qa),e(P,j),e(j,fn),e(fn,ko),e(ko,Ba),e(j,Ha),e(j,un),e(un,vo),e(vo,Va),e(j,Ua),e(j,gn),e(gn,bo),e(bo,Xa),e(j,Ga),e(j,_n),e(_n,wo),e(wo,Ja),e(j,Za),e(j,kn),e(kn,$o),e($o,Ya),e(j,es),e(j,vn),e(vn,Ro),e(Ro,ts),e(P,os),e(P,pt),e(pt,ns),e(pt,ht),e(ht,rs),e(pt,as),e(P,ss),e(P,re),e(re,is),e(re,To),e(To,ls),e(re,ds),e(re,yo),e(yo,cs),e(re,ms),e(P,ps),$(Te,P,null),_(o,Lr,g),_(o,ae,g),e(ae,ye),e(ye,bn),$(ft,bn,null),e(ae,hs),e(ae,wn),e(wn,fs),_(o,Mr,g),_(o,z,g),$(ut,z,null),e(z,us),e(z,$n),e($n,gs),e(z,_s),e(z,Ee),e(Ee,Eo),e(Eo,ks),e(Ee,vs),e(Ee,zo),e(zo,bs),e(Ee,ws),e(z,$s),e(z,gt),e(gt,Rs),e(gt,xo),e(xo,Ts),e(gt,ys),e(z,Es),e(z,J),$(_t,J,null),e(J,zs),e(J,Rn),e(Rn,xs),e(J,qs),e(J,kt),e(kt,qo),e(qo,As),e(qo,Tn),e(Tn,Ps),e(kt,js),e(kt,Ao),e(Ao,Ls),e(Ao,yn),e(yn,Ms),e(z,Fs),e(z,ze),$(vt,ze,null),e(ze,Ss),e(ze,bt),e(bt,Cs),e(bt,En),e(En,Is),e(bt,Ds),e(z,Ns),e(z,C),$(wt,C,null),e(C,Os),e(C,zn),e(zn,Ws),e(C,Ks),$(xe,C,null),e(C,Qs),e(C,se),e(se,Bs),e(se,xn),e(xn,Hs),e(se,Vs),e(se,qn),e(qn,Us),e(se,Xs),e(z,Gs),e(z,Po),$($t,Po,null),e(z,Js),e(z,M),$(Rt,M,null),e(M,Zs),e(M,Tt),e(Tt,Ys),e(Tt,An),e(An,ei),e(Tt,ti),e(M,oi),e(M,ie),e(ie,Pn),e(Pn,ni),e(ie,ri),e(ie,yt),e(yt,ai),e(yt,jn),e(jn,si),e(yt,ii),e(ie,li),e(ie,Et),e(Et,di),e(Et,Ln),e(Ln,ci),e(Et,mi),e(M,pi),e(M,zt),e(zt,jo),e(jo,hi),e(jo,Mn),e(Mn,fi),e(zt,ui),e(zt,Lo),e(Lo,gi),e(Lo,Fn),e(Fn,_i),e(M,ki),$(qe,M,null),_(o,Fr,g),_(o,le,g),e(le,Ae),e(Ae,Sn),$(xt,Sn,null),e(le,vi),e(le,Cn),e(Cn,bi),_(o,Sr,g),_(o,L,g),$(qt,L,null),e(L,wi),e(L,At),e(At,$i),e(At,In),e(In,Ri),e(At,Ti),e(L,yi),e(L,Pe),e(Pe,Mo),e(Mo,Ei),e(Pe,zi),e(Pe,Fo),e(Fo,xi),e(Pe,qi),e(L,Ai),e(L,Pt),e(Pt,Pi),e(Pt,So),e(So,ji),e(Pt,Li),e(L,Mi),e(L,F),$(jt,F,null),e(F,Fi),e(F,Lt),e(Lt,Si),e(Lt,Dn),e(Dn,Ci),e(Lt,Ii),e(F,Di),e(F,de),e(de,Nn),e(Nn,Ni),e(de,Oi),e(de,Mt),e(Mt,Wi),e(Mt,On),e(On,Ki),e(Mt,Qi),e(de,Bi),e(de,Ft),e(Ft,Hi),e(Ft,Wn),e(Wn,Vi),e(Ft,Ui),e(F,Xi),e(F,St),e(St,Co),e(Co,Gi),e(Co,Kn),e(Kn,Ji),e(St,Zi),e(St,Io),e(Io,Yi),e(Io,Qn),e(Qn,el),e(F,tl),$(je,F,null),_(o,Cr,g),_(o,ce,g),e(ce,Le),e(Le,Bn),$(Ct,Bn,null),e(ce,ol),e(ce,Hn),e(Hn,nl),_(o,Ir,g),_(o,Q,g),$(It,Q,null),e(Q,rl),e(Q,Vn),e(Vn,al),e(Q,sl),e(Q,Me),$(Dt,Me,null),e(Me,il),e(Me,Un),e(Un,ll),_(o,Dr,g),_(o,me,g),e(me,Fe),e(Fe,Xn),$(Nt,Xn,null),e(me,dl),e(me,Gn),e(Gn,cl),_(o,Nr,g),_(o,B,g),$(Ot,B,null),e(B,ml),e(B,Wt),e(Wt,pl),e(Wt,Kt),e(Kt,hl),e(Wt,fl),e(B,ul),e(B,I),$(Qt,I,null),e(I,gl),e(I,pe),e(pe,_l),e(pe,Do),e(Do,kl),e(pe,vl),e(pe,Jn),e(Jn,bl),e(pe,wl),e(I,$l),$(Se,I,null),e(I,Rl),$(Ce,I,null),_(o,Or,g),_(o,he,g),e(he,Ie),e(Ie,Zn),$(Bt,Zn,null),e(he,Tl),e(he,Yn),e(Yn,yl),_(o,Wr,g),_(o,H,g),$(Ht,H,null),e(H,El),e(H,Vt),e(Vt,zl),e(Vt,Ut),e(Ut,xl),e(Vt,ql),e(H,Al),e(H,D),$(Xt,D,null),e(D,Pl),e(D,fe),e(fe,jl),e(fe,No),e(No,Ll),e(fe,Ml),e(fe,er),e(er,Fl),e(fe,Sl),e(D,Cl),$(De,D,null),e(D,Il),$(Ne,D,null),_(o,Kr,g),_(o,ue,g),e(ue,Oe),e(Oe,tr),$(Gt,tr,null),e(ue,Dl),e(ue,or),e(or,Nl),_(o,Qr,g),_(o,V,g),$(Jt,V,null),e(V,Ol),e(V,Zt),e(Zt,Wl),e(Zt,Yt),e(Yt,Kl),e(Zt,Ql),e(V,Bl),e(V,N),$(eo,N,null),e(N,Hl),e(N,ge),e(ge,Vl),e(ge,Oo),e(Oo,Ul),e(ge,Xl),e(ge,nr),e(nr,Gl),e(ge,Jl),e(N,Zl),$(We,N,null),e(N,Yl),$(Ke,N,null),_(o,Br,g),_(o,_e,g),e(_e,Qe),e(Qe,rr),$(to,rr,null),e(_e,ed),e(_e,ar),e(ar,td),_(o,Hr,g),_(o,U,g),$(oo,U,null),e(U,od),e(U,no),e(no,nd),e(no,ro),e(ro,rd),e(no,ad),e(U,sd),e(U,Z),$(ao,Z,null),e(Z,id),e(Z,ke),e(ke,ld),e(ke,Wo),e(Wo,dd),e(ke,cd),e(ke,sr),e(sr,md),e(ke,pd),e(Z,hd),$(Be,Z,null),_(o,Vr,g),_(o,ve,g),e(ve,He),e(He,ir),$(so,ir,null),e(ve,fd),e(ve,lr),e(lr,ud),_(o,Ur,g),_(o,S,g),$(io,S,null),e(S,gd),e(S,Ve),e(Ve,dr),e(dr,_d),e(Ve,kd),e(Ve,lo),e(lo,vd),e(Ve,bd),e(S,wd),e(S,Ue),$(co,Ue,null),e(Ue,$d),e(Ue,mo),e(mo,Rd),e(mo,cr),e(cr,Td),e(mo,yd),e(S,Ed),e(S,O),$(po,O,null),e(O,zd),e(O,be),e(be,xd),e(be,Ko),e(Ko,qd),e(be,Ad),e(be,mr),e(mr,Pd),e(be,jd),e(O,Ld),$(Xe,O,null),e(O,Md),$(Ge,O,null),Xr=!0},p(o,[g]){const ho={};g&2&&(ho.$$scope={dirty:g,ctx:o}),Te.$set(ho);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:o}),xe.$set(pr);const hr={};g&2&&(hr.$$scope={dirty:g,ctx:o}),qe.$set(hr);const fr={};g&2&&(fr.$$scope={dirty:g,ctx:o}),je.$set(fr);const fo={};g&2&&(fo.$$scope={dirty:g,ctx:o}),Se.$set(fo);const ur={};g&2&&(ur.$$scope={dirty:g,ctx:o}),Ce.$set(ur);const gr={};g&2&&(gr.$$scope={dirty:g,ctx:o}),De.$set(gr);const _r={};g&2&&(_r.$$scope={dirty:g,ctx:o}),Ne.$set(_r);const uo={};g&2&&(uo.$$scope={dirty:g,ctx:o}),We.$set(uo);const kr={};g&2&&(kr.$$scope={dirty:g,ctx:o}),Ke.$set(kr);const vr={};g&2&&(vr.$$scope={dirty:g,ctx:o}),Be.$set(vr);const br={};g&2&&(br.$$scope={dirty:g,ctx:o}),Xe.$set(br);const wr={};g&2&&(wr.$$scope={dirty:g,ctx:o}),Ge.$set(wr)},i(o){Xr||(R(s.$$.fragment,o),R(st.$$.fragment,o),R(ct.$$.fragment,o),R(mt.$$.fragment,o),R(Te.$$.fragment,o),R(ft.$$.fragment,o),R(ut.$$.fragment,o),R(_t.$$.fragment,o),R(vt.$$.fragment,o),R(wt.$$.fragment,o),R(xe.$$.fragment,o),R($t.$$.fragment,o),R(Rt.$$.fragment,o),R(qe.$$.fragment,o),R(xt.$$.fragment,o),R(qt.$$.fragment,o),R(jt.$$.fragment,o),R(je.$$.fragment,o),R(Ct.$$.fragment,o),R(It.$$.fragment,o),R(Dt.$$.fragment,o),R(Nt.$$.fragment,o),R(Ot.$$.fragment,o),R(Qt.$$.fragment,o),R(Se.$$.fragment,o),R(Ce.$$.fragment,o),R(Bt.$$.fragment,o),R(Ht.$$.fragment,o),R(Xt.$$.fragment,o),R(De.$$.fragment,o),R(Ne.$$.fragment,o),R(Gt.$$.fragment,o),R(Jt.$$.fragment,o),R(eo.$$.fragment,o),R(We.$$.fragment,o),R(Ke.$$.fragment,o),R(to.$$.fragment,o),R(oo.$$.fragment,o),R(ao.$$.fragment,o),R(Be.$$.fragment,o),R(so.$$.fragment,o),R(io.$$.fragment,o),R(co.$$.fragment,o),R(po.$$.fragment,o),R(Xe.$$.fragment,o),R(Ge.$$.fragment,o),Xr=!0)},o(o){T(s.$$.fragment,o),T(st.$$.fragment,o),T(ct.$$.fragment,o),T(mt.$$.fragment,o),T(Te.$$.fragment,o),T(ft.$$.fragment,o),T(ut.$$.fragment,o),T(_t.$$.fragment,o),T(vt.$$.fragment,o),T(wt.$$.fragment,o),T(xe.$$.fragment,o),T($t.$$.fragment,o),T(Rt.$$.fragment,o),T(qe.$$.fragment,o),T(xt.$$.fragment,o),T(qt.$$.fragment,o),T(jt.$$.fragment,o),T(je.$$.fragment,o),T(Ct.$$.fragment,o),T(It.$$.fragment,o),T(Dt.$$.fragment,o),T(Nt.$$.fragment,o),T(Ot.$$.fragment,o),T(Qt.$$.fragment,o),T(Se.$$.fragment,o),T(Ce.$$.fragment,o),T(Bt.$$.fragment,o),T(Ht.$$.fragment,o),T(Xt.$$.fragment,o),T(De.$$.fragment,o),T(Ne.$$.fragment,o),T(Gt.$$.fragment,o),T(Jt.$$.fragment,o),T(eo.$$.fragment,o),T(We.$$.fragment,o),T(Ke.$$.fragment,o),T(to.$$.fragment,o),T(oo.$$.fragment,o),T(ao.$$.fragment,o),T(Be.$$.fragment,o),T(so.$$.fragment,o),T(io.$$.fragment,o),T(co.$$.fragment,o),T(po.$$.fragment,o),T(Xe.$$.fragment,o),T(Ge.$$.fragment,o),Xr=!1},d(o){t(m),o&&t(v),o&&t(u),y(s),o&&t(Er),o&&t(oe),y(st),o&&t(zr),o&&t($e),o&&t(xr),o&&t(go),o&&t(qr),o&&t(_o),o&&t(Ar),o&&t(G),o&&t(Pr),o&&t(ne),y(ct),o&&t(jr),o&&t(P),y(mt),y(Te),o&&t(Lr),o&&t(ae),y(ft),o&&t(Mr),o&&t(z),y(ut),y(_t),y(vt),y(wt),y(xe),y($t),y(Rt),y(qe),o&&t(Fr),o&&t(le),y(xt),o&&t(Sr),o&&t(L),y(qt),y(jt),y(je),o&&t(Cr),o&&t(ce),y(Ct),o&&t(Ir),o&&t(Q),y(It),y(Dt),o&&t(Dr),o&&t(me),y(Nt),o&&t(Nr),o&&t(B),y(Ot),y(Qt),y(Se),y(Ce),o&&t(Or),o&&t(he),y(Bt),o&&t(Wr),o&&t(H),y(Ht),y(Xt),y(De),y(Ne),o&&t(Kr),o&&t(ue),y(Gt),o&&t(Qr),o&&t(V),y(Jt),y(eo),y(We),y(Ke),o&&t(Br),o&&t(_e),y(to),o&&t(Hr),o&&t(U),y(oo),y(ao),y(Be),o&&t(Vr),o&&t(ve),y(so),o&&t(Ur),o&&t(S),y(io),y(co),y(po),y(Xe),y(Ge)}}}const Qm={local:"realm",sections:[{local:"overview",title:"Overview"},{local:"transformers.RealmConfig",title:"RealmConfig"},{local:"transformers.RealmTokenizer",title:"RealmTokenizer"},{local:"transformers.RealmTokenizerFast",title:"RealmTokenizerFast"},{local:"transformers.RealmRetriever",title:"RealmRetriever"},{local:"transformers.RealmEmbedder",title:"RealmEmbedder"},{local:"transformers.RealmScorer",title:"RealmScorer"},{local:"transformers.RealmKnowledgeAugEncoder",title:"RealmKnowledgeAugEncoder"},{local:"transformers.RealmReader",title:"RealmReader"},{local:"transformers.RealmForOpenQA",title:"RealmForOpenQA"}],title:"REALM"};function Bm(E){return qm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zm extends ym{constructor(m){super();Em(this,m,Bm,Km,zm,{})}}export{Zm as default,Qm as metadata};
