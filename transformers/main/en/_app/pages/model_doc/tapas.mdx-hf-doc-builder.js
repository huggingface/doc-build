import{S as mk,i as uk,s as fk,e as o,k as c,w as y,t as s,M as gk,c as n,d as t,m as h,a as r,x as q,h as a,b as f,N as _k,G as e,g as u,y as j,q as $,o as E,B as F,v as Tk,L as mt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ms}from"../../chunks/Tip-hf-doc-builder.js";import{D as He}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Gt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{F as Pc,M as Tn}from"../../chunks/Markdown-hf-doc-builder.js";import{E as To}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L;return g=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),W=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),b=s(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),d=o("a"),m=s("torch-scatter"),T=s(" dependency:"),p=c(),y(g.$$.fragment),A=c(),k=o("p"),N=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=o("a"),U=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=c(),y(W.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);b=a(M,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),d=n(M,"A",{href:!0,rel:!0});var G=r(d);m=a(G,"torch-scatter"),G.forEach(t),T=a(M," dependency:"),M.forEach(t),p=h(w),q(g.$$.fragment,w),A=h(w),k=n(w,"P",{});var C=r(k);N=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=n(C,"A",{href:!0});var O=r(x);U=a(O,"TapasConfig"),O.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=h(w),q(W.$$.fragment,w),this.h()},h(){f(d,"href","https://github.com/rusty1s/pytorch_scatter"),f(d,"rel","nofollow"),f(x,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),f(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(w,M){u(w,l,M),e(l,b),e(l,d),e(d,m),e(l,T),u(w,p,M),j(g,w,M),u(w,A,M),u(w,k,M),e(k,N),e(k,x),e(x,U),e(k,B),e(k,V),e(V,R),e(k,K),u(w,re,M),j(W,w,M),L=!0},p:mt,i(w){L||($(g.$$.fragment,w),$(W.$$.fragment,w),L=!0)},o(w){E(g.$$.fragment,w),E(W.$$.fragment,w),L=!1},d(w){w&&t(l),w&&t(p),F(g,w),w&&t(A),w&&t(k),w&&t(re),F(W,w)}}}function vk(P){let l,b;return l=new Tn({props:{$$slots:{default:[bk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function wk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L;return g=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),W=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),b=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),d=o("a"),m=s("tensorflow_probability"),T=s(" dependency:"),p=c(),y(g.$$.fragment),A=c(),k=o("p"),N=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=o("a"),U=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TFTapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=c(),y(W.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);b=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),d=n(M,"A",{href:!0,rel:!0});var G=r(d);m=a(G,"tensorflow_probability"),G.forEach(t),T=a(M," dependency:"),M.forEach(t),p=h(w),q(g.$$.fragment,w),A=h(w),k=n(w,"P",{});var C=r(k);N=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=n(C,"A",{href:!0});var O=r(x);U=a(O,"TapasConfig"),O.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=h(w),q(W.$$.fragment,w),this.h()},h(){f(d,"href","https://github.com/tensorflow/probability"),f(d,"rel","nofollow"),f(x,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),f(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(w,M){u(w,l,M),e(l,b),e(l,d),e(d,m),e(l,T),u(w,p,M),j(g,w,M),u(w,A,M),u(w,k,M),e(k,N),e(k,x),e(x,U),e(k,B),e(k,V),e(V,R),e(k,K),u(w,re,M),j(W,w,M),L=!0},p:mt,i(w){L||($(g.$$.fragment,w),$(W.$$.fragment,w),L=!0)},o(w){E(g.$$.fragment,w),E(W.$$.fragment,w),L=!1},d(w){w&&t(l),w&&t(p),F(g,w),w&&t(A),w&&t(k),w&&t(re),F(W,w)}}}function kk(P){let l,b;return l=new Tn({props:{$$slots:{default:[wk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function yk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,ge,me,_e,ue,ne,qe,ie,ve,v,D,be,xe,we,le,ze,Me,Z,de,pe,De,je,Te,Ne,ke,Ae,Oe,Ze,Ps,Ss,ut,ft,ca,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,kt,ye,yt,qt,Qs,jt,$t,Is,Et,cs,Bt,Ft,hs,Ye,$e,Ws,At,ae,ot,Vt,Hs,xt,Jt,Us,zt,Ct,Rs,Mt,Xt,Gs,Pt,Zt,Bs,St,Vs,Le,Dt,es,Ks,Nt,ts,Ys,ss,Ue,as,Ee,os,nt,Js,Ot,Lt,Xs,Zs,Re,ea,ns,rs,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="pt",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),et=new Ve({props:{code:`import torch
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset(torch.utils.data.Dataset):
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __getitem__(self, idx):
        item = data.iloc[idx]
        table = pd.read_csv(table_csv_path + item.table_file).astype(
            str
        )  # be sure to make your table data text only
        encoding = self.tokenizer(
            table=table,
            queries=item.question,
            answer_coordinates=item.answer_coordinates,
            answer_text=item.answer_text,
            truncation=True,
            padding="max_length",
            return_tensors="pt",
        )
        # remove the batch dimension which the tokenizer adds by default
        encoding = {key: val.squeeze(0) for key, val in encoding.items()}
        # add the float_answer which is also required (weak supervision for aggregation case)
        encoding["float_answer"] = torch.tensor(item.float_answer)
        return encoding

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
<span class="hljs-meta">... </span>        item = data.iloc[idx]
<span class="hljs-meta">... </span>        table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>            <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>        )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>        encoding = self.tokenizer(
<span class="hljs-meta">... </span>            table=table,
<span class="hljs-meta">... </span>            queries=item.question,
<span class="hljs-meta">... </span>            answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>            answer_text=item.answer_text,
<span class="hljs-meta">... </span>            truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>            padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> encoding

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),b=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=o("a"),m=s("TapasTokenizer"),T=s(" to convert table-question pairs into "),p=o("code"),g=s("input_ids"),A=s(", "),k=o("code"),N=s("attention_mask"),x=s(", "),U=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),W=c(),L=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),O=s("Task"),ee=c(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=c(),S=o("tbody"),Q=o("tr"),H=o("td"),X=s("Conversational"),I=c(),Y=o("td"),ge=o("code"),me=s("input_ids"),_e=s(", "),ue=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),ve=s("token_type_ids"),v=s(", "),D=o("code"),be=s("labels"),xe=c(),we=o("tr"),le=o("td"),ze=s("Weak supervision for aggregation"),Me=c(),Z=o("td"),de=o("code"),pe=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ke=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ps=s("labels"),Ss=s(", "),ut=o("code"),ft=s("numeric_values"),ca=s(", "),gt=o("code"),_t=s("numeric_values_scale"),Ds=s(", "),tt=o("code"),Ns=s("float_answer"),Os=c(),Ke=o("tr"),Pe=o("td"),Ls=s("Strong supervision for aggregation"),kt=c(),ye=o("td"),yt=o("code"),qt=s("input ids"),Qs=s(", "),jt=o("code"),$t=s("attention mask"),Is=s(", "),Et=o("code"),cs=s("token type ids"),Bt=s(", "),Ft=o("code"),hs=s("labels"),Ye=s(", "),$e=o("code"),Ws=s("aggregation_labels"),At=c(),ae=o("p"),ot=o("a"),Vt=s("TapasTokenizer"),Hs=s(" creates the "),xt=o("code"),Jt=s("labels"),Us=s(", "),zt=o("code"),Ct=s("numeric_values"),Rs=s(" and "),Mt=o("code"),Xt=s("numeric_values_scale"),Gs=s(" based on the "),Pt=o("code"),Zt=s("answer_coordinates"),Bs=s(" and "),St=o("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=o("code"),es=s("float_answer"),Ks=s(" and "),Nt=o("code"),ts=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ss=c(),y(Ue.$$.fragment),as=c(),Ee=o("p"),os=s("Note that "),nt=o("a"),Js=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=o("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=o("code"),ea=s(".astype(str)"),ns=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),rs=c(),y(et.$$.fragment),this.h()},l(z){l=n(z,"P",{});var J=r(l);b=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=n(J,"A",{href:!0});var ya=r(d);m=a(ya,"TapasTokenizer"),ya.forEach(t),T=a(J," to convert table-question pairs into "),p=n(J,"CODE",{});var ta=r(p);g=a(ta,"input_ids"),ta.forEach(t),A=a(J,", "),k=n(J,"CODE",{});var qa=r(k);N=a(qa,"attention_mask"),qa.forEach(t),x=a(J,", "),U=n(J,"CODE",{});var ha=r(U);B=a(ha,"token_type_ids"),ha.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var It=r(R);K=a(It,"TapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),W=h(z),L=n(z,"TABLE",{});var st=r(L);w=n(st,"THEAD",{});var sa=r(w);M=n(sa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var ja=r(G);C=n(ja,"STRONG",{});var aa=r(C);O=a(aa,"Task"),aa.forEach(t),ja.forEach(t),ee=h(rt),te=n(rt,"TH",{});var $a=r(te);ce=n($a,"STRONG",{});var ma=r(ce);oe=a(ma,"Required inputs"),ma.forEach(t),$a.forEach(t),rt.forEach(t),sa.forEach(t),se=h(st),S=n(st,"TBODY",{});var Ie=r(S);Q=n(Ie,"TR",{});var is=r(Q);H=n(is,"TD",{});var ms=r(H);X=a(ms,"Conversational"),ms.forEach(t),I=h(is),Y=n(is,"TD",{});var Ge=r(Y);ge=n(Ge,"CODE",{});var Ea=r(ge);me=a(Ea,"input_ids"),Ea.forEach(t),_e=a(Ge,", "),ue=n(Ge,"CODE",{});var ua=r(ue);ne=a(ua,"attention_mask"),ua.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var us=r(ie);ve=a(us,"token_type_ids"),us.forEach(t),v=a(Ge,", "),D=n(Ge,"CODE",{});var oa=r(D);be=a(oa,"labels"),oa.forEach(t),Ge.forEach(t),is.forEach(t),xe=h(Ie),we=n(Ie,"TR",{});var ls=r(we);le=n(ls,"TD",{});var fa=r(le);ze=a(fa,"Weak supervision for aggregation"),fa.forEach(t),Me=h(ls),Z=n(ls,"TD",{});var fe=r(Z);de=n(fe,"CODE",{});var Fa=r(de);pe=a(Fa,"input_ids"),Fa.forEach(t),De=a(fe,", "),je=n(fe,"CODE",{});var fs=r(je);Te=a(fs,"attention_mask"),fs.forEach(t),Ne=a(fe,", "),ke=n(fe,"CODE",{});var Aa=r(ke);Ae=a(Aa,"token_type_ids"),Aa.forEach(t),Oe=a(fe,", "),Ze=n(fe,"CODE",{});var xa=r(Ze);Ps=a(xa,"labels"),xa.forEach(t),Ss=a(fe,", "),ut=n(fe,"CODE",{});var ga=r(ut);ft=a(ga,"numeric_values"),ga.forEach(t),ca=a(fe,", "),gt=n(fe,"CODE",{});var Tt=r(gt);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ds=a(fe,", "),tt=n(fe,"CODE",{});var na=r(tt);Ns=a(na,"float_answer"),na.forEach(t),fe.forEach(t),ls.forEach(t),Os=h(Ie),Ke=n(Ie,"TR",{});var ds=r(Ke);Pe=n(ds,"TD",{});var za=r(Pe);Ls=a(za,"Strong supervision for aggregation"),za.forEach(t),kt=h(ds),ye=n(ds,"TD",{});var Fe=r(ye);yt=n(Fe,"CODE",{});var Ca=r(yt);qt=a(Ca,"input ids"),Ca.forEach(t),Qs=a(Fe,", "),jt=n(Fe,"CODE",{});var ra=r(jt);$t=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),Et=n(Fe,"CODE",{});var Ma=r(Et);cs=a(Ma,"token type ids"),Ma.forEach(t),Bt=a(Fe,", "),Ft=n(Fe,"CODE",{});var Pa=r(Ft);hs=a(Pa,"labels"),Pa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Sa=r($e);Ws=a(Sa,"aggregation_labels"),Sa.forEach(t),Fe.forEach(t),ds.forEach(t),Ie.forEach(t),st.forEach(t),At=h(z),ae=n(z,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Da=r(ot);Vt=a(Da,"TapasTokenizer"),Da.forEach(t),Hs=a(he," creates the "),xt=n(he,"CODE",{});var ia=r(xt);Jt=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=n(he,"CODE",{});var Na=r(zt);Ct=a(Na,"numeric_values"),Na.forEach(t),Rs=a(he," and "),Mt=n(he,"CODE",{});var Oa=r(Mt);Xt=a(Oa,"numeric_values_scale"),Oa.forEach(t),Gs=a(he," based on the "),Pt=n(he,"CODE",{});var _a=r(Pt);Zt=a(_a,"answer_coordinates"),_a.forEach(t),Bs=a(he," and "),St=n(he,"CODE",{});var gs=r(St);Vs=a(gs,"answer_text"),gs.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=n(he,"CODE",{});var La=r(Dt);es=a(La,"float_answer"),La.forEach(t),Ks=a(he," and "),Nt=n(he,"CODE",{});var Ta=r(Nt);ts=a(Ta,"aggregation_labels"),Ta.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ss=h(z),q(Ue.$$.fragment,z),as=h(z),Ee=n(z,"P",{});var Ce=r(Ee);os=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var la=r(nt);Js=a(la,"TapasTokenizer"),la.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=n(Ce,"STRONG",{});var Wt=r(Lt);Xs=a(Wt,"text-only"),Wt.forEach(t),Zs=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),ns=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),rs=h(z),q(et.$$.fragment,z),this.h()},h(){f(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),f(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),f(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),f(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(z,J){u(z,l,J),e(l,b),e(l,d),e(d,m),e(l,T),e(l,p),e(p,g),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),u(z,W,J),u(z,L,J),e(L,w),e(w,M),e(M,G),e(G,C),e(C,O),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(L,se),e(L,S),e(S,Q),e(Q,H),e(H,X),e(Q,I),e(Q,Y),e(Y,ge),e(ge,me),e(Y,_e),e(Y,ue),e(ue,ne),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,v),e(Y,D),e(D,be),e(S,xe),e(S,we),e(we,le),e(le,ze),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,ut),e(ut,ft),e(Z,ca),e(Z,gt),e(gt,_t),e(Z,Ds),e(Z,tt),e(tt,Ns),e(S,Os),e(S,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,kt),e(Ke,ye),e(ye,yt),e(yt,qt),e(ye,Qs),e(ye,jt),e(jt,$t),e(ye,Is),e(ye,Et),e(Et,cs),e(ye,Bt),e(ye,Ft),e(Ft,hs),e(ye,Ye),e(ye,$e),e($e,Ws),u(z,At,J),u(z,ae,J),e(ae,ot),e(ot,Vt),e(ae,Hs),e(ae,xt),e(xt,Jt),e(ae,Us),e(ae,zt),e(zt,Ct),e(ae,Rs),e(ae,Mt),e(Mt,Xt),e(ae,Gs),e(ae,Pt),e(Pt,Zt),e(ae,Bs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Dt),e(Dt,es),e(ae,Ks),e(ae,Nt),e(Nt,ts),e(ae,Ys),u(z,ss,J),j(Ue,z,J),u(z,as,J),u(z,Ee,J),e(Ee,os),e(Ee,nt),e(nt,Js),e(Ee,Ot),e(Ee,Lt),e(Lt,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,ns),u(z,rs,J),j(et,z,J),Qt=!0},p:mt,i(z){Qt||($(Ue.$$.fragment,z),$(et.$$.fragment,z),Qt=!0)},o(z){E(Ue.$$.fragment,z),E(et.$$.fragment,z),Qt=!1},d(z){z&&t(l),z&&t(W),z&&t(L),z&&t(At),z&&t(ae),z&&t(ss),F(Ue,z),z&&t(as),z&&t(Ee),z&&t(rs),F(et,z)}}}function qk(P){let l,b;return l=new Tn({props:{$$slots:{default:[yk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function jk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,ge,me,_e,ue,ne,qe,ie,ve,v,D,be,xe,we,le,ze,Me,Z,de,pe,De,je,Te,Ne,ke,Ae,Oe,Ze,Ps,Ss,ut,ft,ca,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,kt,ye,yt,qt,Qs,jt,$t,Is,Et,cs,Bt,Ft,hs,Ye,$e,Ws,At,ae,ot,Vt,Hs,xt,Jt,Us,zt,Ct,Rs,Mt,Xt,Gs,Pt,Zt,Bs,St,Vs,Le,Dt,es,Ks,Nt,ts,Ys,ss,Ue,as,Ee,os,nt,Js,Ot,Lt,Xs,Zs,Re,ea,ns,rs,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="tf",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),et=new Ve({props:{code:`import tensorflow as tf
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset:
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __iter__(self):
        for idx in range(self.__len__()):
            item = self.data.iloc[idx]
            table = pd.read_csv(table_csv_path + item.table_file).astype(
                str
            )  # be sure to make your table data text only
            encoding = self.tokenizer(
                table=table,
                queries=item.question,
                answer_coordinates=item.answer_coordinates,
                answer_text=item.answer_text,
                truncation=True,
                padding="max_length",
                return_tensors="tf",
            )
            # remove the batch dimension which the tokenizer adds by default
            encoding = {key: tf.squeeze(val, 0) for key, val in encoding.items()}
            # add the float_answer which is also required (weak supervision for aggregation case)
            encoding["float_answer"] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
            yield encoding["input_ids"], encoding["attention_mask"], encoding["numeric_values"], encoding[
                "numeric_values_scale"
            ], encoding["token_type_ids"], encoding["labels"], encoding["float_answer"]

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
output_signature = (
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512, 7), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
)
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):
<span class="hljs-meta">... </span>            item = self.data.iloc[idx]
<span class="hljs-meta">... </span>            table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>                <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>            )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>            encoding = self.tokenizer(
<span class="hljs-meta">... </span>                table=table,
<span class="hljs-meta">... </span>                queries=item.question,
<span class="hljs-meta">... </span>                answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>                answer_text=item.answer_text,
<span class="hljs-meta">... </span>                truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>            encoding = {key: tf.squeeze(val, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>], encoding[<span class="hljs-string">&quot;numeric_values&quot;</span>], encoding[
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;numeric_values_scale&quot;</span>
<span class="hljs-meta">... </span>            ], encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>], encoding[<span class="hljs-string">&quot;labels&quot;</span>], encoding[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_signature = (
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>, <span class="hljs-number">7</span>), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),b=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=o("a"),m=s("TapasTokenizer"),T=s(" to convert table-question pairs into "),p=o("code"),g=s("input_ids"),A=s(", "),k=o("code"),N=s("attention_mask"),x=s(", "),U=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TFTapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),W=c(),L=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),O=s("Task"),ee=c(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=c(),S=o("tbody"),Q=o("tr"),H=o("td"),X=s("Conversational"),I=c(),Y=o("td"),ge=o("code"),me=s("input_ids"),_e=s(", "),ue=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),ve=s("token_type_ids"),v=s(", "),D=o("code"),be=s("labels"),xe=c(),we=o("tr"),le=o("td"),ze=s("Weak supervision for aggregation"),Me=c(),Z=o("td"),de=o("code"),pe=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ke=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ps=s("labels"),Ss=s(", "),ut=o("code"),ft=s("numeric_values"),ca=s(", "),gt=o("code"),_t=s("numeric_values_scale"),Ds=s(", "),tt=o("code"),Ns=s("float_answer"),Os=c(),Ke=o("tr"),Pe=o("td"),Ls=s("Strong supervision for aggregation"),kt=c(),ye=o("td"),yt=o("code"),qt=s("input ids"),Qs=s(", "),jt=o("code"),$t=s("attention mask"),Is=s(", "),Et=o("code"),cs=s("token type ids"),Bt=s(", "),Ft=o("code"),hs=s("labels"),Ye=s(", "),$e=o("code"),Ws=s("aggregation_labels"),At=c(),ae=o("p"),ot=o("a"),Vt=s("TapasTokenizer"),Hs=s(" creates the "),xt=o("code"),Jt=s("labels"),Us=s(", "),zt=o("code"),Ct=s("numeric_values"),Rs=s(" and "),Mt=o("code"),Xt=s("numeric_values_scale"),Gs=s(" based on the "),Pt=o("code"),Zt=s("answer_coordinates"),Bs=s(" and "),St=o("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=o("code"),es=s("float_answer"),Ks=s(" and "),Nt=o("code"),ts=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ss=c(),y(Ue.$$.fragment),as=c(),Ee=o("p"),os=s("Note that "),nt=o("a"),Js=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=o("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=o("code"),ea=s(".astype(str)"),ns=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),rs=c(),y(et.$$.fragment),this.h()},l(z){l=n(z,"P",{});var J=r(l);b=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=n(J,"A",{href:!0});var ya=r(d);m=a(ya,"TapasTokenizer"),ya.forEach(t),T=a(J," to convert table-question pairs into "),p=n(J,"CODE",{});var ta=r(p);g=a(ta,"input_ids"),ta.forEach(t),A=a(J,", "),k=n(J,"CODE",{});var qa=r(k);N=a(qa,"attention_mask"),qa.forEach(t),x=a(J,", "),U=n(J,"CODE",{});var ha=r(U);B=a(ha,"token_type_ids"),ha.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var It=r(R);K=a(It,"TFTapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),W=h(z),L=n(z,"TABLE",{});var st=r(L);w=n(st,"THEAD",{});var sa=r(w);M=n(sa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var ja=r(G);C=n(ja,"STRONG",{});var aa=r(C);O=a(aa,"Task"),aa.forEach(t),ja.forEach(t),ee=h(rt),te=n(rt,"TH",{});var $a=r(te);ce=n($a,"STRONG",{});var ma=r(ce);oe=a(ma,"Required inputs"),ma.forEach(t),$a.forEach(t),rt.forEach(t),sa.forEach(t),se=h(st),S=n(st,"TBODY",{});var Ie=r(S);Q=n(Ie,"TR",{});var is=r(Q);H=n(is,"TD",{});var ms=r(H);X=a(ms,"Conversational"),ms.forEach(t),I=h(is),Y=n(is,"TD",{});var Ge=r(Y);ge=n(Ge,"CODE",{});var Ea=r(ge);me=a(Ea,"input_ids"),Ea.forEach(t),_e=a(Ge,", "),ue=n(Ge,"CODE",{});var ua=r(ue);ne=a(ua,"attention_mask"),ua.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var us=r(ie);ve=a(us,"token_type_ids"),us.forEach(t),v=a(Ge,", "),D=n(Ge,"CODE",{});var oa=r(D);be=a(oa,"labels"),oa.forEach(t),Ge.forEach(t),is.forEach(t),xe=h(Ie),we=n(Ie,"TR",{});var ls=r(we);le=n(ls,"TD",{});var fa=r(le);ze=a(fa,"Weak supervision for aggregation"),fa.forEach(t),Me=h(ls),Z=n(ls,"TD",{});var fe=r(Z);de=n(fe,"CODE",{});var Fa=r(de);pe=a(Fa,"input_ids"),Fa.forEach(t),De=a(fe,", "),je=n(fe,"CODE",{});var fs=r(je);Te=a(fs,"attention_mask"),fs.forEach(t),Ne=a(fe,", "),ke=n(fe,"CODE",{});var Aa=r(ke);Ae=a(Aa,"token_type_ids"),Aa.forEach(t),Oe=a(fe,", "),Ze=n(fe,"CODE",{});var xa=r(Ze);Ps=a(xa,"labels"),xa.forEach(t),Ss=a(fe,", "),ut=n(fe,"CODE",{});var ga=r(ut);ft=a(ga,"numeric_values"),ga.forEach(t),ca=a(fe,", "),gt=n(fe,"CODE",{});var Tt=r(gt);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ds=a(fe,", "),tt=n(fe,"CODE",{});var na=r(tt);Ns=a(na,"float_answer"),na.forEach(t),fe.forEach(t),ls.forEach(t),Os=h(Ie),Ke=n(Ie,"TR",{});var ds=r(Ke);Pe=n(ds,"TD",{});var za=r(Pe);Ls=a(za,"Strong supervision for aggregation"),za.forEach(t),kt=h(ds),ye=n(ds,"TD",{});var Fe=r(ye);yt=n(Fe,"CODE",{});var Ca=r(yt);qt=a(Ca,"input ids"),Ca.forEach(t),Qs=a(Fe,", "),jt=n(Fe,"CODE",{});var ra=r(jt);$t=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),Et=n(Fe,"CODE",{});var Ma=r(Et);cs=a(Ma,"token type ids"),Ma.forEach(t),Bt=a(Fe,", "),Ft=n(Fe,"CODE",{});var Pa=r(Ft);hs=a(Pa,"labels"),Pa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Sa=r($e);Ws=a(Sa,"aggregation_labels"),Sa.forEach(t),Fe.forEach(t),ds.forEach(t),Ie.forEach(t),st.forEach(t),At=h(z),ae=n(z,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Da=r(ot);Vt=a(Da,"TapasTokenizer"),Da.forEach(t),Hs=a(he," creates the "),xt=n(he,"CODE",{});var ia=r(xt);Jt=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=n(he,"CODE",{});var Na=r(zt);Ct=a(Na,"numeric_values"),Na.forEach(t),Rs=a(he," and "),Mt=n(he,"CODE",{});var Oa=r(Mt);Xt=a(Oa,"numeric_values_scale"),Oa.forEach(t),Gs=a(he," based on the "),Pt=n(he,"CODE",{});var _a=r(Pt);Zt=a(_a,"answer_coordinates"),_a.forEach(t),Bs=a(he," and "),St=n(he,"CODE",{});var gs=r(St);Vs=a(gs,"answer_text"),gs.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=n(he,"CODE",{});var La=r(Dt);es=a(La,"float_answer"),La.forEach(t),Ks=a(he," and "),Nt=n(he,"CODE",{});var Ta=r(Nt);ts=a(Ta,"aggregation_labels"),Ta.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ss=h(z),q(Ue.$$.fragment,z),as=h(z),Ee=n(z,"P",{});var Ce=r(Ee);os=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var la=r(nt);Js=a(la,"TapasTokenizer"),la.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=n(Ce,"STRONG",{});var Wt=r(Lt);Xs=a(Wt,"text-only"),Wt.forEach(t),Zs=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),ns=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),rs=h(z),q(et.$$.fragment,z),this.h()},h(){f(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),f(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),f(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),f(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(z,J){u(z,l,J),e(l,b),e(l,d),e(d,m),e(l,T),e(l,p),e(p,g),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),u(z,W,J),u(z,L,J),e(L,w),e(w,M),e(M,G),e(G,C),e(C,O),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(L,se),e(L,S),e(S,Q),e(Q,H),e(H,X),e(Q,I),e(Q,Y),e(Y,ge),e(ge,me),e(Y,_e),e(Y,ue),e(ue,ne),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,v),e(Y,D),e(D,be),e(S,xe),e(S,we),e(we,le),e(le,ze),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,ut),e(ut,ft),e(Z,ca),e(Z,gt),e(gt,_t),e(Z,Ds),e(Z,tt),e(tt,Ns),e(S,Os),e(S,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,kt),e(Ke,ye),e(ye,yt),e(yt,qt),e(ye,Qs),e(ye,jt),e(jt,$t),e(ye,Is),e(ye,Et),e(Et,cs),e(ye,Bt),e(ye,Ft),e(Ft,hs),e(ye,Ye),e(ye,$e),e($e,Ws),u(z,At,J),u(z,ae,J),e(ae,ot),e(ot,Vt),e(ae,Hs),e(ae,xt),e(xt,Jt),e(ae,Us),e(ae,zt),e(zt,Ct),e(ae,Rs),e(ae,Mt),e(Mt,Xt),e(ae,Gs),e(ae,Pt),e(Pt,Zt),e(ae,Bs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Dt),e(Dt,es),e(ae,Ks),e(ae,Nt),e(Nt,ts),e(ae,Ys),u(z,ss,J),j(Ue,z,J),u(z,as,J),u(z,Ee,J),e(Ee,os),e(Ee,nt),e(nt,Js),e(Ee,Ot),e(Ee,Lt),e(Lt,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,ns),u(z,rs,J),j(et,z,J),Qt=!0},p:mt,i(z){Qt||($(Ue.$$.fragment,z),$(et.$$.fragment,z),Qt=!0)},o(z){E(Ue.$$.fragment,z),E(et.$$.fragment,z),Qt=!1},d(z){z&&t(l),z&&t(W),z&&t(L),z&&t(At),z&&t(ae),z&&t(ss),F(Ue,z),z&&t(as),z&&t(Ee),z&&t(rs),F(et,z)}}}function $k(P){let l,b;return l=new Tn({props:{$$slots:{default:[jk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function Ek(P){let l,b,d,m,T,p,g,A;return g=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = AdamW(model.parameters(), lr=5e-5)

model.train()
for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch["input_ids"]
        attention_mask = batch["attention_mask"]
        token_type_ids = batch["token_type_ids"]
        labels = batch["labels"]
        numeric_values = batch["numeric_values"]
        numeric_values_scale = batch["numeric_values_scale"]
        float_answer = batch["float_answer"]

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
            labels=labels,
            numeric_values=numeric_values,
            numeric_values_scale=numeric_values_scale,
            float_answer=float_answer,
        )
        loss = outputs.loss
        loss.backward()
        optimizer.step()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">... </span>        labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-string">&quot;numeric_values&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-string">&quot;numeric_values_scale&quot;</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># zero the parameter gradients</span>
<span class="hljs-meta">... </span>        optimizer.zero_grad()

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        outputs = model(
<span class="hljs-meta">... </span>            input_ids=input_ids,
<span class="hljs-meta">... </span>            attention_mask=attention_mask,
<span class="hljs-meta">... </span>            token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>            labels=labels,
<span class="hljs-meta">... </span>            numeric_values=numeric_values,
<span class="hljs-meta">... </span>            numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>            float_answer=float_answer,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        loss.backward()
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=o("p"),b=s("You can then fine-tune "),d=o("a"),m=s("TapasForQuestionAnswering"),T=s(" as follows (shown here for the weak supervision for aggregation case):"),p=c(),y(g.$$.fragment),this.h()},l(k){l=n(k,"P",{});var N=r(l);b=a(N,"You can then fine-tune "),d=n(N,"A",{href:!0});var x=r(d);m=a(x,"TapasForQuestionAnswering"),x.forEach(t),T=a(N," as follows (shown here for the weak supervision for aggregation case):"),N.forEach(t),p=h(k),q(g.$$.fragment,k),this.h()},h(){f(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(k,N){u(k,l,N),e(l,b),e(l,d),e(d,m),e(l,T),u(k,p,N),j(g,k,N),A=!0},p:mt,i(k){A||($(g.$$.fragment,k),A=!0)},o(k){E(g.$$.fragment,k),A=!1},d(k){k&&t(l),k&&t(p),F(g,k)}}}function Fk(P){let l,b;return l=new Tn({props:{$$slots:{default:[Ek]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function Ak(P){let l,b,d,m,T,p,g,A;return g=new Ve({props:{code:`import tensorflow as tf
from transformers import TapasConfig, TFTapasForQuestionAnswering

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = tf.keras.optimizers.Adam(learning_rate=5e-5)

for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch[0]
        attention_mask = batch[1]
        token_type_ids = batch[4]
        labels = batch[-1]
        numeric_values = batch[2]
        numeric_values_scale = batch[3]
        float_answer = batch[6]

        # forward + backward + optimize
        with tf.GradientTape() as tape:
            outputs = model(
                input_ids=input_ids,
                attention_mask=attention_mask,
                token_type_ids=token_type_ids,
                labels=labels,
                numeric_values=numeric_values,
                numeric_values_scale=numeric_values_scale,
                float_answer=float_answer,
            )
        grads = tape.gradient(outputs.loss, model.trainable_weights)
        optimizer.apply_gradients(zip(grads, model.trainable_weights))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-number">4</span>]
<span class="hljs-meta">... </span>        labels = batch[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-number">2</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-number">3</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-number">6</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:
<span class="hljs-meta">... </span>            outputs = model(
<span class="hljs-meta">... </span>                input_ids=input_ids,
<span class="hljs-meta">... </span>                attention_mask=attention_mask,
<span class="hljs-meta">... </span>                token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=labels,
<span class="hljs-meta">... </span>                numeric_values=numeric_values,
<span class="hljs-meta">... </span>                numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>                float_answer=float_answer,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>        grads = tape.gradient(outputs.loss, model.trainable_weights)
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=o("p"),b=s("You can then fine-tune "),d=o("a"),m=s("TFTapasForQuestionAnswering"),T=s(" as follows (shown here for the weak supervision for aggregation case):"),p=c(),y(g.$$.fragment),this.h()},l(k){l=n(k,"P",{});var N=r(l);b=a(N,"You can then fine-tune "),d=n(N,"A",{href:!0});var x=r(d);m=a(x,"TFTapasForQuestionAnswering"),x.forEach(t),T=a(N," as follows (shown here for the weak supervision for aggregation case):"),N.forEach(t),p=h(k),q(g.$$.fragment,k),this.h()},h(){f(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(k,N){u(k,l,N),e(l,b),e(l,d),e(d,m),e(l,T),u(k,p,N),j(g,k,N),A=!0},p:mt,i(k){A||($(g.$$.fragment,k),A=!0)},o(k){E(g.$$.fragment,k),A=!1},d(k){k&&t(l),k&&t(p),F(g,k)}}}function xk(P){let l,b;return l=new Tn({props:{$$slots:{default:[Ak]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function zk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H;return Q=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),b=s("Here we explain how you can use "),d=o("a"),m=s("TapasForQuestionAnswering"),T=s(" or "),p=o("a"),g=s("TFTapasForQuestionAnswering"),A=s(" for inference (i.e. making predictions on new data). For inference, only "),k=o("code"),N=s("input_ids"),x=s(", "),U=o("code"),B=s("attention_mask"),V=s(" and "),R=o("code"),K=s("token_type_ids"),re=s(" (which you can obtain using "),W=o("a"),L=s("TapasTokenizer"),w=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o("code"),G=s("convert_logits_to_predictions"),C=s(" method to convert these into predicted coordinates and optional aggregation indices."),O=c(),ee=o("p"),te=s("However, note that inference is "),ce=o("strong"),oe=s("different"),se=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),S=c(),y(Q.$$.fragment),this.h()},l(X){l=n(X,"P",{});var I=r(l);b=a(I,"Here we explain how you can use "),d=n(I,"A",{href:!0});var Y=r(d);m=a(Y,"TapasForQuestionAnswering"),Y.forEach(t),T=a(I," or "),p=n(I,"A",{href:!0});var ge=r(p);g=a(ge,"TFTapasForQuestionAnswering"),ge.forEach(t),A=a(I," for inference (i.e. making predictions on new data). For inference, only "),k=n(I,"CODE",{});var me=r(k);N=a(me,"input_ids"),me.forEach(t),x=a(I,", "),U=n(I,"CODE",{});var _e=r(U);B=a(_e,"attention_mask"),_e.forEach(t),V=a(I," and "),R=n(I,"CODE",{});var ue=r(R);K=a(ue,"token_type_ids"),ue.forEach(t),re=a(I," (which you can obtain using "),W=n(I,"A",{href:!0});var ne=r(W);L=a(ne,"TapasTokenizer"),ne.forEach(t),w=a(I,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n(I,"CODE",{});var qe=r(M);G=a(qe,"convert_logits_to_predictions"),qe.forEach(t),C=a(I," method to convert these into predicted coordinates and optional aggregation indices."),I.forEach(t),O=h(X),ee=n(X,"P",{});var ie=r(ee);te=a(ie,"However, note that inference is "),ce=n(ie,"STRONG",{});var ve=r(ce);oe=a(ve,"different"),ve.forEach(t),se=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(t),S=h(X),q(Q.$$.fragment,X),this.h()},h(){f(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),f(p,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),f(W,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,I){u(X,l,I),e(l,b),e(l,d),e(d,m),e(l,T),e(l,p),e(p,g),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,W),e(W,L),e(l,w),e(l,M),e(M,G),e(l,C),u(X,O,I),u(X,ee,I),e(ee,te),e(ee,ce),e(ce,oe),e(ee,se),u(X,S,I),j(Q,X,I),H=!0},p:mt,i(X){H||($(Q.$$.fragment,X),H=!0)},o(X){E(Q.$$.fragment,X),H=!1},d(X){X&&t(l),X&&t(O),X&&t(ee),X&&t(S),F(Q,X)}}}function Ck(P){let l,b;return l=new Tn({props:{$$slots:{default:[zk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function Mk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se;return oe=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TFTapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits, outputs.logits_aggregation
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits, outputs.logits_aggregation
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),b=s("Here we explain how you can use "),d=o("a"),m=s("TFTapasForQuestionAnswering"),T=s(" for inference (i.e. making predictions on new data). For inference, only "),p=o("code"),g=s("input_ids"),A=s(", "),k=o("code"),N=s("attention_mask"),x=s(" and "),U=o("code"),B=s("token_type_ids"),V=s(" (which you can obtain using "),R=o("a"),K=s("TapasTokenizer"),re=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),W=o("code"),L=s("convert_logits_to_predictions"),w=s(" method to convert these into predicted coordinates and optional aggregation indices."),M=c(),G=o("p"),C=s("However, note that inference is "),O=o("strong"),ee=s("different"),te=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=c(),y(oe.$$.fragment),this.h()},l(S){l=n(S,"P",{});var Q=r(l);b=a(Q,"Here we explain how you can use "),d=n(Q,"A",{href:!0});var H=r(d);m=a(H,"TFTapasForQuestionAnswering"),H.forEach(t),T=a(Q," for inference (i.e. making predictions on new data). For inference, only "),p=n(Q,"CODE",{});var X=r(p);g=a(X,"input_ids"),X.forEach(t),A=a(Q,", "),k=n(Q,"CODE",{});var I=r(k);N=a(I,"attention_mask"),I.forEach(t),x=a(Q," and "),U=n(Q,"CODE",{});var Y=r(U);B=a(Y,"token_type_ids"),Y.forEach(t),V=a(Q," (which you can obtain using "),R=n(Q,"A",{href:!0});var ge=r(R);K=a(ge,"TapasTokenizer"),ge.forEach(t),re=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),W=n(Q,"CODE",{});var me=r(W);L=a(me,"convert_logits_to_predictions"),me.forEach(t),w=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(t),M=h(S),G=n(S,"P",{});var _e=r(G);C=a(_e,"However, note that inference is "),O=n(_e,"STRONG",{});var ue=r(O);ee=a(ue,"different"),ue.forEach(t),te=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(t),ce=h(S),q(oe.$$.fragment,S),this.h()},h(){f(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),f(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(S,Q){u(S,l,Q),e(l,b),e(l,d),e(d,m),e(l,T),e(l,p),e(p,g),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,W),e(W,L),e(l,w),u(S,M,Q),u(S,G,Q),e(G,C),e(G,O),e(O,ee),e(G,te),u(S,ce,Q),j(oe,S,Q),se=!0},p:mt,i(S){se||($(oe.$$.fragment,S),se=!0)},o(S){E(oe.$$.fragment,S),se=!1},d(S){S&&t(l),S&&t(M),S&&t(G),S&&t(ce),F(oe,S)}}}function Pk(P){let l,b;return l=new Tn({props:{$$slots:{default:[Mk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,m){j(l,d,m),b=!0},p(d,m){const T={};m&2&&(T.$$scope={dirty:m,ctx:d}),l.$set(T)},i(d){b||($(l.$$.fragment,d),b=!0)},o(d){E(l.$$.fragment,d),b=!1},d(d){F(l,d)}}}function Sk(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

# Initializing a default (SQA) Tapas configuration
configuration = TapasConfig()
# Initializing a model from the configuration
model = TapasModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasModel, TapasConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default (SQA) Tapas configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TapasConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=o("p"),b=s("Example:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Example:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Dk(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function Nk(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Ok(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function Lk(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="pt"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="pt"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Qk(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function Ik(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import torch
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
labels = torch.tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Wk(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function Hk(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Uk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,ge,me,_e,ue,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),d=c(),m=o("ul"),T=o("li"),p=s("having all inputs as keyword arguments (like PyTorch models), or"),g=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),d=h(v),m=n(v,"UL",{});var be=r(m);T=n(be,"LI",{});var xe=r(T);p=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),g=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var de=r(C);O=n(de,"LI",{});var pe=r(O);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),Q=h(de),H=n(de,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=n(Te,"CODE",{});var ke=r(me);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),ue=h(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(v,D){u(v,l,D),e(l,b),u(v,d,D),u(v,m,D),e(m,T),e(T,p),e(m,g),e(m,A),e(A,k),u(v,N,D),u(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),u(v,L,D),u(v,w,D),e(w,M),u(v,G,D),u(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,ge),e(H,me),e(me,_e),e(C,ue),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(d),v&&t(m),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function Rk(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function Gk(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Bk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,ge,me,_e,ue,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),d=c(),m=o("ul"),T=o("li"),p=s("having all inputs as keyword arguments (like PyTorch models), or"),g=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),d=h(v),m=n(v,"UL",{});var be=r(m);T=n(be,"LI",{});var xe=r(T);p=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),g=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var de=r(C);O=n(de,"LI",{});var pe=r(O);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),Q=h(de),H=n(de,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=n(Te,"CODE",{});var ke=r(me);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),ue=h(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(v,D){u(v,l,D),e(l,b),u(v,d,D),u(v,m,D),e(m,T),e(T,p),e(m,g),e(m,A),e(A,k),u(v,N,D),u(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),u(v,L,D),u(v,w,D),e(w,M),u(v,G,D),u(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,ge),e(H,me),e(me,_e),e(C,ue),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(d),v&&t(m),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function Vk(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function Kk(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="tf"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="tf"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Yk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,ge,me,_e,ue,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),d=c(),m=o("ul"),T=o("li"),p=s("having all inputs as keyword arguments (like PyTorch models), or"),g=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),d=h(v),m=n(v,"UL",{});var be=r(m);T=n(be,"LI",{});var xe=r(T);p=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),g=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var de=r(C);O=n(de,"LI",{});var pe=r(O);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),Q=h(de),H=n(de,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=n(Te,"CODE",{});var ke=r(me);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),ue=h(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(v,D){u(v,l,D),e(l,b),u(v,d,D),u(v,m,D),e(m,T),e(T,p),e(m,g),e(m,A),e(A,k),u(v,N,D),u(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),u(v,L,D),u(v,w,D),e(w,M),u(v,G,D),u(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,ge),e(H,me),e(me,_e),e(C,ue),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(d),v&&t(m),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function Jk(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function Xk(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
labels = tf.convert_to_tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function Zk(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,ge,me,_e,ue,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),d=c(),m=o("ul"),T=o("li"),p=s("having all inputs as keyword arguments (like PyTorch models), or"),g=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),d=h(v),m=n(v,"UL",{});var be=r(m);T=n(be,"LI",{});var xe=r(T);p=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),g=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var de=r(C);O=n(de,"LI",{});var pe=r(O);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),Q=h(de),H=n(de,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=n(Te,"CODE",{});var ke=r(me);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),ue=h(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(v,D){u(v,l,D),e(l,b),u(v,d,D),u(v,m,D),e(m,T),e(T,p),e(m,g),e(m,A),e(A,k),u(v,N,D),u(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),u(v,L,D),u(v,w,D),e(w,M),u(v,G,D),u(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,ge),e(H,me),e(me,_e),e(C,ue),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(d),v&&t(m),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function ey(P){let l,b,d,m,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),m=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(g,"CODE",{});var A=r(d);m=a(A,"Module"),A.forEach(t),T=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(p,g){u(p,l,g),e(l,b),e(l,d),e(d,m),e(l,T)},d(p){p&&t(l)}}}function ty(P){let l,b,d,m,T;return m=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("p"),b=s("Examples:"),d=c(),y(m.$$.fragment)},l(p){l=n(p,"P",{});var g=r(l);b=a(g,"Examples:"),g.forEach(t),d=h(p),q(m.$$.fragment,p)},m(p,g){u(p,l,g),e(l,b),u(p,d,g),j(m,p,g),T=!0},p:mt,i(p){T||($(m.$$.fragment,p),T=!0)},o(p){E(m.$$.fragment,p),T=!1},d(p){p&&t(l),p&&t(d),F(m,p)}}}function sy(P){let l,b,d,m,T,p,g,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,ge,me,_e,ue,ne,qe,ie,ve,v,D,be,xe,we,le,ze,Me,Z,de,pe,De,je,Te,Ne,ke,Ae,Oe,Ze,Ps,Ss,ut,ft,ca,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,kt,ye,yt,qt,Qs,jt,$t,Is,Et,cs,Bt,Ft,hs,Ye,$e,Ws,At,ae,ot,Vt,Hs,xt,Jt,Us,zt,Ct,Rs,Mt,Xt,Gs,Pt,Zt,Bs,St,Vs,Le,Dt,es,Ks,Nt,ts,Ys,ss,Ue,as,Ee,os,nt,Js,Ot,Lt,Xs,Zs,Re,ea,ns,rs,et,Qt,z,J,ya,ta,qa,ha,It,st,sa,rt,ja,aa,$a,ma,Ie,is,ms,Ge,Ea,ua,us,oa,ls,fa,fe,Fa,fs,Aa,xa,ga,Tt,na,ds,za,Fe,Ca,ra,Ma,Pa,Sa,he,Da,ia,Na,Oa,_a,gs,La,Ta,Ce,la,Wt,da,el,Sc,Dc,tl,sl,Nc,Oc,al,ol,Lc,Qc,Qa,Ia,nl,Ic,Wc,rl,Hc,Uc,il,Rc,Gc,Wa,ll,Bc,Vc,dl,Kc,Yc,pl,Jc,Xc,Ha,cl,Zc,eh,hl,th,sh,ml,ah,op,bo,np,vo,oh,bn,nh,rh,rp,wo,ih,vn,lh,dh,ip,Rr,ul,ph,lp,ko,ch,wn,hh,mh,dp,We,Gr,fl,uh,fh,gh,Br,gl,_h,Th,bh,Vr,_l,vh,wh,kh,Kr,Tl,yh,qh,jh,Yr,bl,$h,Eh,Fh,Jr,vl,Ah,xh,zh,Xr,wl,Ch,Mh,Ph,Zr,kl,Sh,Dh,Nh,ei,yl,Oh,Lh,pp,bt,Qh,kn,Ih,Wh,yn,Hh,Uh,ql,Rh,Gh,jl,Bh,Vh,$l,Kh,Yh,cp,ti,El,Jh,hp,yo,mp,Se,Xh,Fl,Zh,em,Al,tm,sm,xl,am,om,zl,nm,rm,Cl,im,lm,Ml,dm,pm,si,cm,hm,qn,mm,um,jn,fm,gm,up,ai,_m,fp,qo,gp,Ua,jo,Pl,$n,Tm,Sl,bm,_p,$o,Tp,vt,vm,Dl,wm,km,Nl,ym,qm,Ol,jm,$m,En,Em,Fm,Fn,Am,xm,bp,Ra,Eo,Ll,An,zm,Ql,Cm,vp,Ga,xn,Mm,zn,Pm,oi,Sm,Dm,wp,Ba,Fo,Il,Cn,Nm,Wl,Om,kp,Ht,Mn,Lm,Va,Qm,ni,Im,Wm,Pn,Hm,Um,Rm,Ka,Gm,Hl,Bm,Vm,ri,Km,Ym,Jm,Sn,Xm,Dn,Zm,eu,tu,Ao,yp,Ya,xo,Ul,Nn,su,Rl,au,qp,Be,On,ou,Gl,nu,ru,Qe,iu,ii,lu,du,li,pu,cu,Bl,hu,mu,Vl,uu,fu,Kl,gu,_u,Yl,Tu,bu,Jl,vu,wu,Xl,ku,yu,Zl,qu,ju,$u,it,ed,Eu,Fu,td,Au,xu,sd,zu,Cu,ad,Mu,Pu,od,Su,Du,nd,Nu,Ou,rd,Lu,Qu,di,pi,Iu,Wu,Hu,zo,Ln,Uu,id,Ru,Gu,ba,Qn,Bu,In,Vu,ci,Ku,Yu,Ju,Wn,Xu,Hn,Zu,ef,tf,hi,Un,jp,Ja,Co,ld,Rn,sf,dd,af,$p,lt,Gn,of,Bn,nf,mi,rf,lf,df,Vn,pf,Kn,cf,hf,mf,Yn,uf,ui,ff,gf,_f,Jn,Tf,Xn,bf,vf,wf,_s,Zn,kf,Xa,yf,fi,qf,jf,pd,$f,Ef,Ff,Mo,Af,Po,Ep,Za,So,cd,er,xf,hd,zf,Fp,ps,tr,Cf,eo,Mf,md,Pf,Sf,gi,Df,Nf,Of,sr,Lf,ar,Qf,If,Wf,Ts,or,Hf,to,Uf,_i,Rf,Gf,ud,Bf,Vf,Kf,Do,Yf,No,Ap,so,Oo,fd,nr,Jf,gd,Xf,xp,Ut,rr,Zf,_d,eg,tg,ir,sg,Ti,ag,og,ng,lr,rg,dr,ig,lg,dg,bs,pr,pg,ao,cg,bi,hg,mg,Td,ug,fg,gg,Lo,_g,Qo,zp,oo,Io,bd,cr,Tg,vd,bg,Cp,Rt,hr,vg,no,wg,wd,kg,yg,kd,qg,jg,$g,mr,Eg,vi,Fg,Ag,xg,ur,zg,fr,Cg,Mg,Pg,vs,gr,Sg,ro,Dg,wi,Ng,Og,yd,Lg,Qg,Ig,Wo,Wg,Ho,Mp,io,Uo,qd,_r,Hg,jd,Ug,Pp,dt,Tr,Rg,$d,Gg,Bg,br,Vg,ki,Kg,Yg,Jg,vr,Xg,wr,Zg,e_,t_,Ro,s_,ws,kr,a_,lo,o_,yi,n_,r_,Ed,i_,l_,d_,Go,p_,Bo,Sp,po,Vo,Fd,yr,c_,Ad,h_,Dp,pt,qr,m_,jr,u_,xd,f_,g_,__,$r,T_,qi,b_,v_,w_,Er,k_,Fr,y_,q_,j_,Ko,$_,ks,Ar,E_,co,F_,ji,A_,x_,zd,z_,C_,M_,Yo,P_,Jo,Np,ho,Xo,Cd,xr,S_,Md,D_,Op,ct,zr,N_,Pd,O_,L_,Cr,Q_,$i,I_,W_,H_,Mr,U_,Pr,R_,G_,B_,Zo,V_,ys,Sr,K_,mo,Y_,Ei,J_,X_,Sd,Z_,eT,tT,en,sT,tn,Lp,uo,sn,Dd,Dr,aT,Nd,oT,Qp,ht,Nr,nT,fo,rT,Od,iT,lT,Ld,dT,pT,cT,Or,hT,Fi,mT,uT,fT,Lr,gT,Qr,_T,TT,bT,an,vT,qs,Ir,wT,go,kT,Ai,yT,qT,Qd,jT,$T,ET,on,FT,nn,Ip;return p=new Gt({}),V=new Gt({}),rt=new Gt({}),bo=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[kk],pytorch:[vk]},$$scope:{ctx:P}}}),yo=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[$k],pytorch:[qk]},$$scope:{ctx:P}}}),qo=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[xk],pytorch:[Fk]},$$scope:{ctx:P}}}),$n=new Gt({}),$o=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Pk],pytorch:[Ck]},$$scope:{ctx:P}}}),An=new Gt({}),xn=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L102"}}),Cn=new Gt({}),Mn=new He({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.TapasConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.TapasConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.TapasConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.TapasConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;swish&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TapasConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.TapasConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.TapasConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TapasConfig.type_vocab_sizes",description:`<strong>type_vocab_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 256, 256, 2, 256, 256, 10]</code>) &#x2014;
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.TapasConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.TapasConfig.positive_label_weight",description:`<strong>positive_label_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 10.0) &#x2014;
Weight for positive labels.`,name:"positive_label_weight"},{anchor:"transformers.TapasConfig.num_aggregation_labels",description:`<strong>num_aggregation_labels</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of aggregation operators to predict.`,name:"num_aggregation_labels"},{anchor:"transformers.TapasConfig.aggregation_loss_weight",description:`<strong>aggregation_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the aggregation loss.`,name:"aggregation_loss_weight"},{anchor:"transformers.TapasConfig.use_answer_as_supervision",description:`<strong>use_answer_as_supervision</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to use the answer as the only supervision for aggregation examples.`,name:"use_answer_as_supervision"},{anchor:"transformers.TapasConfig.answer_loss_importance",description:`<strong>answer_loss_importance</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the regression loss.`,name:"answer_loss_importance"},{anchor:"transformers.TapasConfig.use_normalized_answer_loss",description:`<strong>use_normalized_answer_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the answer loss by the maximum of the predicted and expected value.`,name:"use_normalized_answer_loss"},{anchor:"transformers.TapasConfig.huber_loss_delta",description:`<strong>huber_loss_delta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Delta parameter used to calculate the regression loss.`,name:"huber_loss_delta"},{anchor:"transformers.TapasConfig.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Value used to control (OR change) the skewness of cell logits probabilities.`,name:"temperature"},{anchor:"transformers.TapasConfig.aggregation_temperature",description:`<strong>aggregation_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Scales aggregation logits to control the skewness of probabilities.`,name:"aggregation_temperature"},{anchor:"transformers.TapasConfig.use_gumbel_for_cells",description:`<strong>use_gumbel_for_cells</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to cell selection.`,name:"use_gumbel_for_cells"},{anchor:"transformers.TapasConfig.use_gumbel_for_aggregation",description:`<strong>use_gumbel_for_aggregation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to aggregation selection.`,name:"use_gumbel_for_aggregation"},{anchor:"transformers.TapasConfig.average_approximation_function",description:`<strong>average_approximation_function</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;ratio&quot;</code>) &#x2014;
Method to calculate the expected average of cells in the weak supervision case. One of <code>&quot;ratio&quot;</code>,
<code>&quot;first_order&quot;</code> or <code>&quot;second_order&quot;</code>.`,name:"average_approximation_function"},{anchor:"transformers.TapasConfig.cell_selection_preference",description:`<strong>cell_selection_preference</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Preference for cell selection in ambiguous cases. Only applicable in case of weak supervision for
aggregation (WTQ, WikiSQL). If the total mass of the aggregation probabilities (excluding the &#x201C;NONE&#x201D;
operator) is higher than this hyperparameter, then aggregation is predicted for an example.`,name:"cell_selection_preference"},{anchor:"transformers.TapasConfig.answer_loss_cutoff",description:`<strong>answer_loss_cutoff</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Ignore examples with answer loss larger than cutoff.`,name:"answer_loss_cutoff"},{anchor:"transformers.TapasConfig.max_num_rows",description:`<strong>max_num_rows</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Maximum number of rows.`,name:"max_num_rows"},{anchor:"transformers.TapasConfig.max_num_columns",description:`<strong>max_num_columns</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Maximum number of columns.`,name:"max_num_columns"},{anchor:"transformers.TapasConfig.average_logits_per_cell",description:`<strong>average_logits_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to average logits per cell.`,name:"average_logits_per_cell"},{anchor:"transformers.TapasConfig.select_one_column",description:`<strong>select_one_column</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to constrain the model to only select cells from a single column.`,name:"select_one_column"},{anchor:"transformers.TapasConfig.allow_empty_column_selection",description:`<strong>allow_empty_column_selection</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to allow not to select any column.`,name:"allow_empty_column_selection"},{anchor:"transformers.TapasConfig.init_cell_selection_weights_to_zero",description:`<strong>init_cell_selection_weights_to_zero</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to initialize cell selection weights to 0 so that the initial probabilities are 50%.`,name:"init_cell_selection_weights_to_zero"},{anchor:"transformers.TapasConfig.reset_position_index_per_cell",description:`<strong>reset_position_index_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to restart position indexes at every cell (i.e. use relative position embeddings).`,name:"reset_position_index_per_cell"},{anchor:"transformers.TapasConfig.disable_per_token_loss",description:`<strong>disable_per_token_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to disable any (strong or weak) supervision on cells.`,name:"disable_per_token_loss"},{anchor:"transformers.TapasConfig.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>Dict[int, label]</code>, <em>optional</em>) &#x2014;
The aggregation labels used to aggregate the results. For example, the WTQ models have the following
aggregation labels: <code>{0: &quot;NONE&quot;, 1: &quot;SUM&quot;, 2: &quot;AVERAGE&quot;, 3: &quot;COUNT&quot;}</code>`,name:"aggregation_labels"},{anchor:"transformers.TapasConfig.no_aggregation_label_index",description:`<strong>no_aggregation_label_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If the aggregation labels are defined and one of these labels represents &#x201C;No aggregation&#x201D;, this should be
set to its index. For example, the WTQ models have the &#x201C;NONE&#x201D; aggregation label at index 0, so that value
should be set to 0 for these models.`,name:"no_aggregation_label_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/configuration_tapas.py#L45"}}),Ao=new To({props:{anchor:"transformers.TapasConfig.example",$$slots:{default:[Sk]},$$scope:{ctx:P}}}),Nn=new Gt({}),On=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.TapasTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapasTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.TapasTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.TapasTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapasTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapasTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapasTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapasTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapasTokenizer.empty_token",description:`<strong>empty_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[EMPTY]&quot;</code>) &#x2014;
The token used for empty cell values in a table. Empty cell values include &quot;&quot;, &#x201C;n/a&#x201D;, &#x201C;nan&#x201D; and &#x201D;?&#x201C;.`,name:"empty_token"},{anchor:"transformers.TapasTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L236"}}),Ln=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
Table containing tabular data. Note that all cell values must be text. Use <em>.astype(str)</em> on a Pandas
dataframe to convert it to string.`,name:"table"},{anchor:"transformers.TapasTokenizer.__call__.queries",description:`<strong>queries</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
Question or batch of questions related to a table to be encoded. Note that in case of a batch, all
questions must refer to the <strong>same</strong> table.`,name:"queries"},{anchor:"transformers.TapasTokenizer.__call__.answer_coordinates",description:`<strong>answer_coordinates</strong> (<code>List[Tuple]</code> or <code>List[List[Tuple]]</code>, <em>optional</em>) &#x2014;
Answer coordinates of each table-question pair in the batch. In case only a single table-question pair
is provided, then the answer_coordinates must be a single list of one or more tuples. Each tuple must
be a (row_index, column_index) pair. The first data row (not the column header row) has index 0. The
first column has index 0. In case a batch of table-question pairs is provided, then the
answer_coordinates must be a list of lists of tuples (each list corresponding to a single
table-question pair).`,name:"answer_coordinates"},{anchor:"transformers.TapasTokenizer.__call__.answer_text",description:`<strong>answer_text</strong> (<code>List[str]</code> or <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
Answer text of each table-question pair in the batch. In case only a single table-question pair is
provided, then the answer_text must be a single list of one or more strings. Each string must be the
answer text of a corresponding answer coordinate. In case a batch of table-question pairs is provided,
then the answer_coordinates must be a list of lists of strings (each list corresponding to a single
table-question pair).`,name:"answer_text"},{anchor:"transformers.TapasTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapasTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <code>TapasTruncationStrategy</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code>
or to the maximum acceptable input length for the model if that argument is not provided. This will
truncate row by row, removing rows from the table.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapasTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapasTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapasTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L576"}}),Qn=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L1939",returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Un=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L444"}}),Rn=new Gt({}),Gn=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L853"}}),Zn=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L891",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
`}}),Mo=new Ms({props:{$$slots:{default:[Dk]},$$scope:{ctx:P}}}),Po=new To({props:{anchor:"transformers.TapasModel.forward.example",$$slots:{default:[Nk]},$$scope:{ctx:P}}}),er=new Gt({}),tr=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1006"}}),or=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1025",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
`}}),Do=new Ms({props:{$$slots:{default:[Ok]},$$scope:{ctx:P}}}),No=new To({props:{anchor:"transformers.TapasForMaskedLM.forward.example",$$slots:{default:[Lk]},$$scope:{ctx:P}}}),nr=new Gt({}),rr=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1466"}}),pr=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
`}}),Lo=new Ms({props:{$$slots:{default:[Qk]},$$scope:{ctx:P}}}),Qo=new To({props:{anchor:"transformers.TapasForSequenceClassification.forward.example",$$slots:{default:[Ik]},$$scope:{ctx:P}}}),cr=new Gt({}),hr=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1121"}}),gr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.float_answer",description:`<strong>float_answer</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values",description:`<strong>numeric_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1156",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new Ms({props:{$$slots:{default:[Wk]},$$scope:{ctx:P}}}),Ho=new To({props:{anchor:"transformers.TapasForQuestionAnswering.forward.example",$$slots:{default:[Hk]},$$scope:{ctx:P}}}),_r=new Gt({}),Tr=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L974"}}),Ro=new Ms({props:{$$slots:{default:[Uk]},$$scope:{ctx:P}}}),kr=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L980",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new Ms({props:{$$slots:{default:[Rk]},$$scope:{ctx:P}}}),Bo=new To({props:{anchor:"transformers.TFTapasModel.call.example",$$slots:{default:[Gk]},$$scope:{ctx:P}}}),yr=new Gt({}),qr=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1049"}}),Ko=new Ms({props:{$$slots:{default:[Bk]},$$scope:{ctx:P}}}),Ar=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1065",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new Ms({props:{$$slots:{default:[Vk]},$$scope:{ctx:P}}}),Jo=new To({props:{anchor:"transformers.TFTapasForMaskedLM.call.example",$$slots:{default:[Kk]},$$scope:{ctx:P}}}),xr=new Gt({}),zr=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1591"}}),Zo=new Ms({props:{$$slots:{default:[Yk]},$$scope:{ctx:P}}}),Sr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1602",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new Ms({props:{$$slots:{default:[Jk]},$$scope:{ctx:P}}}),tn=new To({props:{anchor:"transformers.TFTapasForSequenceClassification.call.example",$$slots:{default:[Xk]},$$scope:{ctx:P}}}),Dr=new Gt({}),Nr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1255"}}),an=new Ms({props:{$$slots:{default:[Zk]},$$scope:{ctx:P}}}),Ir=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1277",returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>tf.Tensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new Ms({props:{$$slots:{default:[ey]},$$scope:{ctx:P}}}),nn=new To({props:{anchor:"transformers.TFTapasForQuestionAnswering.call.example",$$slots:{default:[ty]},$$scope:{ctx:P}}}),{c(){l=o("meta"),b=c(),d=o("h1"),m=o("a"),T=o("span"),y(p.$$.fragment),g=c(),A=o("span"),k=s("TAPAS"),N=c(),x=o("h2"),U=o("a"),B=o("span"),y(V.$$.fragment),R=c(),K=o("span"),re=s("Overview"),W=c(),L=o("p"),w=s("The TAPAS model was proposed in "),M=o("a"),G=s("TAPAS: Weakly Supervised Table Parsing via Pre-training"),C=s(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),O=c(),ee=o("p"),te=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=c(),oe=o("ul"),se=o("li"),S=o("a"),Q=s("SQA"),H=s(" (Sequential Question Answering by Microsoft)"),X=c(),I=o("li"),Y=o("a"),ge=s("WTQ"),me=s(" (Wiki Table Questions by Stanford University)"),_e=c(),ue=o("li"),ne=o("a"),qe=s("WikiSQL"),ie=s(" (by Salesforce)."),ve=c(),v=o("p"),D=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),be=c(),xe=o("p"),we=s("The abstract from the paper is the following:"),le=c(),ze=o("p"),Me=o("em"),Z=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),de=c(),pe=o("p"),De=s("In addition, the authors have further pre-trained TAPAS to recognize "),je=o("strong"),Te=s("table entailment"),Ne=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=o("a"),Ae=s("TabFact"),Oe=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o("a"),Ps=s("Understanding tables with intermediate pre-training"),Ss=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),ut=c(),ft=o("img"),gt=c(),_t=o("small"),Ds=s("TAPAS architecture. Taken from the "),tt=o("a"),Ns=s("original blog post"),Os=s("."),Ke=c(),Pe=o("p"),Ls=s("This model was contributed by "),kt=o("a"),ye=s("nielsr"),yt=s(". The Tensorflow version of this model was contributed by "),qt=o("a"),Qs=s("kamalkraj"),jt=s(". The original code can be found "),$t=o("a"),Is=s("here"),Et=s("."),cs=c(),Bt=o("p"),Ft=s("Tips:"),hs=c(),Ye=o("ul"),$e=o("li"),Ws=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=o("code"),ae=s("reset_position_index_per_cell"),ot=s(" parameter of "),Vt=o("a"),Hs=s("TapasConfig"),xt=s(", which is set to "),Jt=o("code"),Us=s("True"),zt=s(" by default. The default versions of the models available on the "),Ct=o("a"),Rs=s("hub"),Mt=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Xt=o("code"),Gs=s('revision="no_reset"'),Pt=s(" when calling the "),Zt=o("code"),Bs=s("from_pretrained()"),St=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vs=c(),Le=o("li"),Dt=s("TAPAS is based on BERT, so "),es=o("code"),Ks=s("TAPAS-base"),Nt=s(" for example corresponds to a "),ts=o("code"),Ys=s("BERT-base"),ss=s(" architecture. Of course, "),Ue=o("code"),as=s("TAPAS-large"),Ee=s(" will result in the best performance (the results reported in the paper are from "),os=o("code"),nt=s("TAPAS-large"),Js=s("). Results of the various sized models are shown on the "),Ot=o("a"),Lt=s("original Github repository"),Xs=s("."),Zs=c(),Re=o("li"),ea=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),ns=o("code"),rs=s("prev_labels"),et=s(" token type ids can be overwritten by the predicted "),Qt=o("code"),z=s("labels"),J=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),ya=c(),ta=o("li"),qa=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ha=c(),It=o("h2"),st=o("a"),sa=o("span"),y(rt.$$.fragment),ja=c(),aa=o("span"),$a=s("Usage: fine-tuning"),ma=c(),Ie=o("p"),is=s("Here we explain how you can fine-tune "),ms=o("a"),Ge=s("TapasForQuestionAnswering"),Ea=s(" on your own dataset."),ua=c(),us=o("p"),oa=o("strong"),ls=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),fa=c(),fe=o("p"),Fa=s("Basically, there are 3 different ways in which one can fine-tune "),fs=o("a"),Aa=s("TapasForQuestionAnswering"),xa=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),ga=c(),Tt=o("ol"),na=o("li"),ds=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),za=c(),Fe=o("li"),Ca=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=o("strong"),Ma=s("weak supervision"),Pa=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Sa=c(),he=o("li"),Da=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=o("strong"),Na=s("strong supervision"),Oa=s(". Here, learning the appropriate aggregation operator is much easier."),_a=c(),gs=o("p"),La=s("To summarize:"),Ta=c(),Ce=o("table"),la=o("thead"),Wt=o("tr"),da=o("th"),el=o("strong"),Sc=s("Task"),Dc=c(),tl=o("th"),sl=o("strong"),Nc=s("Example dataset"),Oc=c(),al=o("th"),ol=o("strong"),Lc=s("Description"),Qc=c(),Qa=o("tbody"),Ia=o("tr"),nl=o("td"),Ic=s("Conversational"),Wc=c(),rl=o("td"),Hc=s("SQA"),Uc=c(),il=o("td"),Rc=s("Conversational, only cell selection questions"),Gc=c(),Wa=o("tr"),ll=o("td"),Bc=s("Weak supervision for aggregation"),Vc=c(),dl=o("td"),Kc=s("WTQ"),Yc=c(),pl=o("td"),Jc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Xc=c(),Ha=o("tr"),cl=o("td"),Zc=s("Strong supervision for aggregation"),eh=c(),hl=o("td"),th=s("WikiSQL-supervised"),sh=c(),ml=o("td"),ah=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),op=c(),y(bo.$$.fragment),np=c(),vo=o("p"),oh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),bn=o("a"),nh=s("here"),rh=s(" for more info."),rp=c(),wo=o("p"),ih=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),vn=o("a"),lh=s("here"),dh=s("."),ip=c(),Rr=o("p"),ul=o("strong"),ph=s("STEP 2: Prepare your data in the SQA format"),lp=c(),ko=o("p"),ch=s("Second, no matter what you picked above, you should prepare your dataset in the "),wn=o("a"),hh=s("SQA"),mh=s(" format. This format is a TSV/CSV file with the following columns:"),dp=c(),We=o("ul"),Gr=o("li"),fl=o("code"),uh=s("id"),fh=s(": optional, id of the table-question pair, for bookkeeping purposes."),gh=c(),Br=o("li"),gl=o("code"),_h=s("annotator"),Th=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),bh=c(),Vr=o("li"),_l=o("code"),vh=s("position"),wh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),kh=c(),Kr=o("li"),Tl=o("code"),yh=s("question"),qh=s(": string"),jh=c(),Yr=o("li"),bl=o("code"),$h=s("table_file"),Eh=s(": string, name of a csv file containing the tabular data"),Fh=c(),Jr=o("li"),vl=o("code"),Ah=s("answer_coordinates"),xh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),zh=c(),Xr=o("li"),wl=o("code"),Ch=s("answer_text"),Mh=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Ph=c(),Zr=o("li"),kl=o("code"),Sh=s("aggregation_label"),Dh=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Nh=c(),ei=o("li"),yl=o("code"),Oh=s("float_answer"),Lh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),pp=c(),bt=o("p"),Qh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),kn=o("a"),Ih=s("here"),Wh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),yn=o("a"),Hh=s("here"),Uh=s(". Interestingly, these conversion scripts are not perfect (the "),ql=o("code"),Rh=s("answer_coordinates"),Gh=s(" and "),jl=o("code"),Bh=s("float_answer"),Vh=s(" fields are populated based on the "),$l=o("code"),Kh=s("answer_text"),Yh=s("), meaning that WTQ and WikiSQL results could actually be improved."),cp=c(),ti=o("p"),El=o("strong"),Jh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),hp=c(),y(yo.$$.fragment),mp=c(),Se=o("p"),Xh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),Fl=o("strong"),Zh=s("not conversational"),em=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),Al=o("code"),tm=s("queries"),sm=s(", "),xl=o("code"),am=s("answer_coordinates"),om=s(" and "),zl=o("code"),nm=s("answer_text"),rm=s(" per table (in the order of their "),Cl=o("code"),im=s("position"),lm=s(`
index) and batch encode each table with its questions. This will make sure that the `),Ml=o("code"),dm=s("prev_labels"),pm=s(" token types (see docs of "),si=o("a"),cm=s("TapasTokenizer"),hm=s(") are set correctly. See "),qn=o("a"),mm=s("this notebook"),um=s(" for more info. See "),jn=o("a"),fm=s("this notebook"),gm=s(" for more info regarding using the TensorFlow model."),up=c(),ai=o("p"),_m=s("**STEP 4: Train (fine-tune) the model"),fp=c(),y(qo.$$.fragment),gp=c(),Ua=o("h2"),jo=o("a"),Pl=o("span"),y($n.$$.fragment),Tm=c(),Sl=o("span"),bm=s("Usage: inference"),_p=c(),y($o.$$.fragment),Tp=c(),vt=o("p"),vm=s("In case of a conversational set-up, then each table-question pair must be provided "),Dl=o("strong"),wm=s("sequentially"),km=s(" to the model, such that the "),Nl=o("code"),ym=s("prev_labels"),qm=s(" token types can be overwritten by the predicted "),Ol=o("code"),jm=s("labels"),$m=s(" of the previous table-question pair. Again, more info can be found in "),En=o("a"),Em=s("this notebook"),Fm=s(" (for PyTorch) and "),Fn=o("a"),Am=s("this notebook"),xm=s(" (for TensorFlow)."),bp=c(),Ra=o("h2"),Eo=o("a"),Ll=o("span"),y(An.$$.fragment),zm=c(),Ql=o("span"),Cm=s("TAPAS specific outputs"),vp=c(),Ga=o("div"),y(xn.$$.fragment),Mm=c(),zn=o("p"),Pm=s("Output type of "),oi=o("a"),Sm=s("TapasForQuestionAnswering"),Dm=s("."),wp=c(),Ba=o("h2"),Fo=o("a"),Il=o("span"),y(Cn.$$.fragment),Nm=c(),Wl=o("span"),Om=s("TapasConfig"),kp=c(),Ht=o("div"),y(Mn.$$.fragment),Lm=c(),Va=o("p"),Qm=s("This is the configuration class to store the configuration of a "),ni=o("a"),Im=s("TapasModel"),Wm=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),Pn=o("a"),Hm=s("google/tapas-base-finetuned-sqa"),Um=s(" architecture."),Rm=c(),Ka=o("p"),Gm=s("Configuration objects inherit from "),Hl=o("code"),Bm=s("PreTrainedConfig"),Vm=s(` and can be used to control the model outputs. Read the
documentation from `),ri=o("a"),Km=s("PretrainedConfig"),Ym=s(" for more information."),Jm=c(),Sn=o("p"),Xm=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Dn=o("a"),Zm=s("https://github.com/google-research/tapas/tree/master"),eu=s("."),tu=c(),y(Ao.$$.fragment),yp=c(),Ya=o("h2"),xo=o("a"),Ul=o("span"),y(Nn.$$.fragment),su=c(),Rl=o("span"),au=s("TapasTokenizer"),qp=c(),Be=o("div"),y(On.$$.fragment),ou=c(),Gl=o("p"),nu=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),ru=c(),Qe=o("p"),iu=s("This tokenizer inherits from "),ii=o("a"),lu=s("PreTrainedTokenizer"),du=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),li=o("a"),pu=s("TapasTokenizer"),cu=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Bl=o("code"),hu=s("segment_ids"),mu=s(`,
`),Vl=o("code"),uu=s("column_ids"),fu=s(", "),Kl=o("code"),gu=s("row_ids"),_u=s(", "),Yl=o("code"),Tu=s("prev_labels"),bu=s(", "),Jl=o("code"),vu=s("column_ranks"),wu=s(", "),Xl=o("code"),ku=s("inv_column_ranks"),yu=s(" and "),Zl=o("code"),qu=s("numeric_relations"),ju=s(":"),$u=c(),it=o("ul"),ed=o("li"),Eu=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),Fu=c(),td=o("li"),Au=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),xu=c(),sd=o("li"),zu=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Cu=c(),ad=o("li"),Mu=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Pu=c(),od=o("li"),Su=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Du=c(),nd=o("li"),Nu=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Ou=c(),rd=o("li"),Lu=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Qu=c(),di=o("p"),pi=o("a"),Iu=s("TapasTokenizer"),Wu=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Hu=c(),zo=o("div"),y(Ln.$$.fragment),Uu=c(),id=o("p"),Ru=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Gu=c(),ba=o("div"),y(Qn.$$.fragment),Bu=c(),In=o("p"),Vu=s("Converts logits of "),ci=o("a"),Ku=s("TapasForQuestionAnswering"),Yu=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Ju=c(),Wn=o("p"),Xu=s(`The original implementation, on which this function is based, can be found
`),Hn=o("a"),Zu=s("here"),ef=s("."),tf=c(),hi=o("div"),y(Un.$$.fragment),jp=c(),Ja=o("h2"),Co=o("a"),ld=o("span"),y(Rn.$$.fragment),sf=c(),dd=o("span"),af=s("TapasModel"),$p=c(),lt=o("div"),y(Gn.$$.fragment),of=c(),Bn=o("p"),nf=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),mi=o("a"),rf=s("PreTrainedModel"),lf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),df=c(),Vn=o("p"),pf=s("This model is also a PyTorch "),Kn=o("a"),cf=s("torch.nn.Module"),hf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mf=c(),Yn=o("p"),uf=s("This class is a small change compared to "),ui=o("a"),ff=s("BertModel"),gf=s(", taking into account the additional token type ids."),_f=c(),Jn=o("p"),Tf=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Xn=o("a"),bf=s(`Attention is
all you need`),vf=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),wf=c(),_s=o("div"),y(Zn.$$.fragment),kf=c(),Xa=o("p"),yf=s("The "),fi=o("a"),qf=s("TapasModel"),jf=s(" forward method, overrides the "),pd=o("code"),$f=s("__call__"),Ef=s(" special method."),Ff=c(),y(Mo.$$.fragment),Af=c(),y(Po.$$.fragment),Ep=c(),Za=o("h2"),So=o("a"),cd=o("span"),y(er.$$.fragment),xf=c(),hd=o("span"),zf=s("TapasForMaskedLM"),Fp=c(),ps=o("div"),y(tr.$$.fragment),Cf=c(),eo=o("p"),Mf=s("Tapas Model with a "),md=o("code"),Pf=s("language modeling"),Sf=s(` head on top.
This model inherits from `),gi=o("a"),Df=s("PreTrainedModel"),Nf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=c(),sr=o("p"),Lf=s("This model is also a PyTorch "),ar=o("a"),Qf=s("torch.nn.Module"),If=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wf=c(),Ts=o("div"),y(or.$$.fragment),Hf=c(),to=o("p"),Uf=s("The "),_i=o("a"),Rf=s("TapasForMaskedLM"),Gf=s(" forward method, overrides the "),ud=o("code"),Bf=s("__call__"),Vf=s(" special method."),Kf=c(),y(Do.$$.fragment),Yf=c(),y(No.$$.fragment),Ap=c(),so=o("h2"),Oo=o("a"),fd=o("span"),y(nr.$$.fragment),Jf=c(),gd=o("span"),Xf=s("TapasForSequenceClassification"),xp=c(),Ut=o("div"),y(rr.$$.fragment),Zf=c(),_d=o("p"),eg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),tg=c(),ir=o("p"),sg=s("This model inherits from "),Ti=o("a"),ag=s("PreTrainedModel"),og=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng=c(),lr=o("p"),rg=s("This model is also a PyTorch "),dr=o("a"),ig=s("torch.nn.Module"),lg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dg=c(),bs=o("div"),y(pr.$$.fragment),pg=c(),ao=o("p"),cg=s("The "),bi=o("a"),hg=s("TapasForSequenceClassification"),mg=s(" forward method, overrides the "),Td=o("code"),ug=s("__call__"),fg=s(" special method."),gg=c(),y(Lo.$$.fragment),_g=c(),y(Qo.$$.fragment),zp=c(),oo=o("h2"),Io=o("a"),bd=o("span"),y(cr.$$.fragment),Tg=c(),vd=o("span"),bg=s("TapasForQuestionAnswering"),Cp=c(),Rt=o("div"),y(hr.$$.fragment),vg=c(),no=o("p"),wg=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),wd=o("code"),kg=s("logits"),yg=s(" and optional "),kd=o("code"),qg=s("logits_aggregation"),jg=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),$g=c(),mr=o("p"),Eg=s("This model inherits from "),vi=o("a"),Fg=s("PreTrainedModel"),Ag=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xg=c(),ur=o("p"),zg=s("This model is also a PyTorch "),fr=o("a"),Cg=s("torch.nn.Module"),Mg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pg=c(),vs=o("div"),y(gr.$$.fragment),Sg=c(),ro=o("p"),Dg=s("The "),wi=o("a"),Ng=s("TapasForQuestionAnswering"),Og=s(" forward method, overrides the "),yd=o("code"),Lg=s("__call__"),Qg=s(" special method."),Ig=c(),y(Wo.$$.fragment),Wg=c(),y(Ho.$$.fragment),Mp=c(),io=o("h2"),Uo=o("a"),qd=o("span"),y(_r.$$.fragment),Hg=c(),jd=o("span"),Ug=s("TFTapasModel"),Pp=c(),dt=o("div"),y(Tr.$$.fragment),Rg=c(),$d=o("p"),Gg=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Bg=c(),br=o("p"),Vg=s("This model inherits from "),ki=o("a"),Kg=s("TFPreTrainedModel"),Yg=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jg=c(),vr=o("p"),Xg=s("This model is also a "),wr=o("a"),Zg=s("tf.keras.Model"),e_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),t_=c(),y(Ro.$$.fragment),s_=c(),ws=o("div"),y(kr.$$.fragment),a_=c(),lo=o("p"),o_=s("The "),yi=o("a"),n_=s("TFTapasModel"),r_=s(" forward method, overrides the "),Ed=o("code"),i_=s("__call__"),l_=s(" special method."),d_=c(),y(Go.$$.fragment),p_=c(),y(Bo.$$.fragment),Sp=c(),po=o("h2"),Vo=o("a"),Fd=o("span"),y(yr.$$.fragment),c_=c(),Ad=o("span"),h_=s("TFTapasForMaskedLM"),Dp=c(),pt=o("div"),y(qr.$$.fragment),m_=c(),jr=o("p"),u_=s("Tapas Model with a "),xd=o("code"),f_=s("language modeling"),g_=s(" head on top."),__=c(),$r=o("p"),T_=s("This model inherits from "),qi=o("a"),b_=s("TFPreTrainedModel"),v_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),w_=c(),Er=o("p"),k_=s("This model is also a "),Fr=o("a"),y_=s("tf.keras.Model"),q_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),j_=c(),y(Ko.$$.fragment),$_=c(),ks=o("div"),y(Ar.$$.fragment),E_=c(),co=o("p"),F_=s("The "),ji=o("a"),A_=s("TFTapasForMaskedLM"),x_=s(" forward method, overrides the "),zd=o("code"),z_=s("__call__"),C_=s(" special method."),M_=c(),y(Yo.$$.fragment),P_=c(),y(Jo.$$.fragment),Np=c(),ho=o("h2"),Xo=o("a"),Cd=o("span"),y(xr.$$.fragment),S_=c(),Md=o("span"),D_=s("TFTapasForSequenceClassification"),Op=c(),ct=o("div"),y(zr.$$.fragment),N_=c(),Pd=o("p"),O_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),L_=c(),Cr=o("p"),Q_=s("This model inherits from "),$i=o("a"),I_=s("TFPreTrainedModel"),W_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H_=c(),Mr=o("p"),U_=s("This model is also a "),Pr=o("a"),R_=s("tf.keras.Model"),G_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),B_=c(),y(Zo.$$.fragment),V_=c(),ys=o("div"),y(Sr.$$.fragment),K_=c(),mo=o("p"),Y_=s("The "),Ei=o("a"),J_=s("TFTapasForSequenceClassification"),X_=s(" forward method, overrides the "),Sd=o("code"),Z_=s("__call__"),eT=s(" special method."),tT=c(),y(en.$$.fragment),sT=c(),y(tn.$$.fragment),Lp=c(),uo=o("h2"),sn=o("a"),Dd=o("span"),y(Dr.$$.fragment),aT=c(),Nd=o("span"),oT=s("TFTapasForQuestionAnswering"),Qp=c(),ht=o("div"),y(Nr.$$.fragment),nT=c(),fo=o("p"),rT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Od=o("code"),iT=s("logits"),lT=s(" and optional "),Ld=o("code"),dT=s("logits_aggregation"),pT=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),cT=c(),Or=o("p"),hT=s("This model inherits from "),Fi=o("a"),mT=s("TFPreTrainedModel"),uT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fT=c(),Lr=o("p"),gT=s("This model is also a "),Qr=o("a"),_T=s("tf.keras.Model"),TT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bT=c(),y(an.$$.fragment),vT=c(),qs=o("div"),y(Ir.$$.fragment),wT=c(),go=o("p"),kT=s("The "),Ai=o("a"),yT=s("TFTapasForQuestionAnswering"),qT=s(" forward method, overrides the "),Qd=o("code"),jT=s("__call__"),$T=s(" special method."),ET=c(),y(on.$$.fragment),FT=c(),y(nn.$$.fragment),this.h()},l(i){const _=gk('[data-svelte="svelte-1phssyn"]',document.head);l=n(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(i),d=n(i,"H1",{class:!0});var Wr=r(d);m=n(Wr,"A",{id:!0,class:!0,href:!0});var Id=r(m);T=n(Id,"SPAN",{});var Wd=r(T);q(p.$$.fragment,Wd),Wd.forEach(t),Id.forEach(t),g=h(Wr),A=n(Wr,"SPAN",{});var Hd=r(A);k=a(Hd,"TAPAS"),Hd.forEach(t),Wr.forEach(t),N=h(i),x=n(i,"H2",{class:!0});var Hr=r(x);U=n(Hr,"A",{id:!0,class:!0,href:!0});var Ud=r(U);B=n(Ud,"SPAN",{});var Rd=r(B);q(V.$$.fragment,Rd),Rd.forEach(t),Ud.forEach(t),R=h(Hr),K=n(Hr,"SPAN",{});var Gd=r(K);re=a(Gd,"Overview"),Gd.forEach(t),Hr.forEach(t),W=h(i),L=n(i,"P",{});var Ur=r(L);w=a(Ur,"The TAPAS model was proposed in "),M=n(Ur,"A",{href:!0,rel:!0});var Bd=r(M);G=a(Bd,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Bd.forEach(t),C=a(Ur,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Ur.forEach(t),O=h(i),ee=n(i,"P",{});var Vd=r(ee);te=a(Vd,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Vd.forEach(t),ce=h(i),oe=n(i,"UL",{});var _o=r(oe);se=n(_o,"LI",{});var xi=r(se);S=n(xi,"A",{href:!0,rel:!0});var Kd=r(S);Q=a(Kd,"SQA"),Kd.forEach(t),H=a(xi," (Sequential Question Answering by Microsoft)"),xi.forEach(t),X=h(_o),I=n(_o,"LI",{});var zi=r(I);Y=n(zi,"A",{href:!0,rel:!0});var Yd=r(Y);ge=a(Yd,"WTQ"),Yd.forEach(t),me=a(zi," (Wiki Table Questions by Stanford University)"),zi.forEach(t),_e=h(_o),ue=n(_o,"LI",{});var Ci=r(ue);ne=n(Ci,"A",{href:!0,rel:!0});var Jd=r(ne);qe=a(Jd,"WikiSQL"),Jd.forEach(t),ie=a(Ci," (by Salesforce)."),Ci.forEach(t),_o.forEach(t),ve=h(i),v=n(i,"P",{});var Xd=r(v);D=a(Xd,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),Xd.forEach(t),be=h(i),xe=n(i,"P",{});var Zd=r(xe);we=a(Zd,"The abstract from the paper is the following:"),Zd.forEach(t),le=h(i),ze=n(i,"P",{});var ep=r(ze);Me=n(ep,"EM",{});var tp=r(Me);Z=a(tp,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),tp.forEach(t),ep.forEach(t),de=h(i),pe=n(i,"P",{});var pa=r(pe);De=a(pa,"In addition, the authors have further pre-trained TAPAS to recognize "),je=n(pa,"STRONG",{});var sp=r(je);Te=a(sp,"table entailment"),sp.forEach(t),Ne=a(pa,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=n(pa,"A",{href:!0,rel:!0});var ap=r(ke);Ae=a(ap,"TabFact"),ap.forEach(t),Oe=a(pa,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n(pa,"A",{href:!0,rel:!0});var LT=r(Ze);Ps=a(LT,"Understanding tables with intermediate pre-training"),LT.forEach(t),Ss=a(pa," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),pa.forEach(t),ut=h(i),ft=n(i,"IMG",{src:!0,alt:!0,width:!0}),gt=h(i),_t=n(i,"SMALL",{});var Wp=r(_t);Ds=a(Wp,"TAPAS architecture. Taken from the "),tt=n(Wp,"A",{href:!0});var QT=r(tt);Ns=a(QT,"original blog post"),QT.forEach(t),Os=a(Wp,"."),Wp.forEach(t),Ke=h(i),Pe=n(i,"P",{});var rn=r(Pe);Ls=a(rn,"This model was contributed by "),kt=n(rn,"A",{href:!0,rel:!0});var IT=r(kt);ye=a(IT,"nielsr"),IT.forEach(t),yt=a(rn,". The Tensorflow version of this model was contributed by "),qt=n(rn,"A",{href:!0,rel:!0});var WT=r(qt);Qs=a(WT,"kamalkraj"),WT.forEach(t),jt=a(rn,". The original code can be found "),$t=n(rn,"A",{href:!0,rel:!0});var HT=r($t);Is=a(HT,"here"),HT.forEach(t),Et=a(rn,"."),rn.forEach(t),cs=h(i),Bt=n(i,"P",{});var UT=r(Bt);Ft=a(UT,"Tips:"),UT.forEach(t),hs=h(i),Ye=n(i,"UL",{});var ln=r(Ye);$e=n(ln,"LI",{});var Kt=r($e);Ws=a(Kt,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=n(Kt,"CODE",{});var RT=r(At);ae=a(RT,"reset_position_index_per_cell"),RT.forEach(t),ot=a(Kt," parameter of "),Vt=n(Kt,"A",{href:!0});var GT=r(Vt);Hs=a(GT,"TapasConfig"),GT.forEach(t),xt=a(Kt,", which is set to "),Jt=n(Kt,"CODE",{});var BT=r(Jt);Us=a(BT,"True"),BT.forEach(t),zt=a(Kt," by default. The default versions of the models available on the "),Ct=n(Kt,"A",{href:!0,rel:!0});var VT=r(Ct);Rs=a(VT,"hub"),VT.forEach(t),Mt=a(Kt," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Xt=n(Kt,"CODE",{});var KT=r(Xt);Gs=a(KT,'revision="no_reset"'),KT.forEach(t),Pt=a(Kt," when calling the "),Zt=n(Kt,"CODE",{});var YT=r(Zt);Bs=a(YT,"from_pretrained()"),YT.forEach(t),St=a(Kt," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Kt.forEach(t),Vs=h(ln),Le=n(ln,"LI",{});var js=r(Le);Dt=a(js,"TAPAS is based on BERT, so "),es=n(js,"CODE",{});var JT=r(es);Ks=a(JT,"TAPAS-base"),JT.forEach(t),Nt=a(js," for example corresponds to a "),ts=n(js,"CODE",{});var XT=r(ts);Ys=a(XT,"BERT-base"),XT.forEach(t),ss=a(js," architecture. Of course, "),Ue=n(js,"CODE",{});var ZT=r(Ue);as=a(ZT,"TAPAS-large"),ZT.forEach(t),Ee=a(js," will result in the best performance (the results reported in the paper are from "),os=n(js,"CODE",{});var eb=r(os);nt=a(eb,"TAPAS-large"),eb.forEach(t),Js=a(js,"). Results of the various sized models are shown on the "),Ot=n(js,"A",{href:!0,rel:!0});var tb=r(Ot);Lt=a(tb,"original Github repository"),tb.forEach(t),Xs=a(js,"."),js.forEach(t),Zs=h(ln),Re=n(ln,"LI",{});var Mi=r(Re);ea=a(Mi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),ns=n(Mi,"CODE",{});var sb=r(ns);rs=a(sb,"prev_labels"),sb.forEach(t),et=a(Mi," token type ids can be overwritten by the predicted "),Qt=n(Mi,"CODE",{});var ab=r(Qt);z=a(ab,"labels"),ab.forEach(t),J=a(Mi," of the model to the previous question. See \u201CUsage\u201D section for more info."),Mi.forEach(t),ya=h(ln),ta=n(ln,"LI",{});var ob=r(ta);qa=a(ob,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ob.forEach(t),ln.forEach(t),ha=h(i),It=n(i,"H2",{class:!0});var Hp=r(It);st=n(Hp,"A",{id:!0,class:!0,href:!0});var nb=r(st);sa=n(nb,"SPAN",{});var rb=r(sa);q(rt.$$.fragment,rb),rb.forEach(t),nb.forEach(t),ja=h(Hp),aa=n(Hp,"SPAN",{});var ib=r(aa);$a=a(ib,"Usage: fine-tuning"),ib.forEach(t),Hp.forEach(t),ma=h(i),Ie=n(i,"P",{});var Up=r(Ie);is=a(Up,"Here we explain how you can fine-tune "),ms=n(Up,"A",{href:!0});var lb=r(ms);Ge=a(lb,"TapasForQuestionAnswering"),lb.forEach(t),Ea=a(Up," on your own dataset."),Up.forEach(t),ua=h(i),us=n(i,"P",{});var db=r(us);oa=n(db,"STRONG",{});var pb=r(oa);ls=a(pb,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),pb.forEach(t),db.forEach(t),fa=h(i),fe=n(i,"P",{});var Rp=r(fe);Fa=a(Rp,"Basically, there are 3 different ways in which one can fine-tune "),fs=n(Rp,"A",{href:!0});var cb=r(fs);Aa=a(cb,"TapasForQuestionAnswering"),cb.forEach(t),xa=a(Rp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Rp.forEach(t),ga=h(i),Tt=n(i,"OL",{});var Pi=r(Tt);na=n(Pi,"LI",{});var hb=r(na);ds=a(hb,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),hb.forEach(t),za=h(Pi),Fe=n(Pi,"LI",{});var Gp=r(Fe);Ca=a(Gp,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=n(Gp,"STRONG",{});var mb=r(ra);Ma=a(mb,"weak supervision"),mb.forEach(t),Pa=a(Gp,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Gp.forEach(t),Sa=h(Pi),he=n(Pi,"LI",{});var Bp=r(he);Da=a(Bp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=n(Bp,"STRONG",{});var ub=r(ia);Na=a(ub,"strong supervision"),ub.forEach(t),Oa=a(Bp,". Here, learning the appropriate aggregation operator is much easier."),Bp.forEach(t),Pi.forEach(t),_a=h(i),gs=n(i,"P",{});var fb=r(gs);La=a(fb,"To summarize:"),fb.forEach(t),Ta=h(i),Ce=n(i,"TABLE",{});var Vp=r(Ce);la=n(Vp,"THEAD",{});var gb=r(la);Wt=n(gb,"TR",{});var Si=r(Wt);da=n(Si,"TH",{});var _b=r(da);el=n(_b,"STRONG",{});var Tb=r(el);Sc=a(Tb,"Task"),Tb.forEach(t),_b.forEach(t),Dc=h(Si),tl=n(Si,"TH",{});var bb=r(tl);sl=n(bb,"STRONG",{});var vb=r(sl);Nc=a(vb,"Example dataset"),vb.forEach(t),bb.forEach(t),Oc=h(Si),al=n(Si,"TH",{});var wb=r(al);ol=n(wb,"STRONG",{});var kb=r(ol);Lc=a(kb,"Description"),kb.forEach(t),wb.forEach(t),Si.forEach(t),gb.forEach(t),Qc=h(Vp),Qa=n(Vp,"TBODY",{});var Di=r(Qa);Ia=n(Di,"TR",{});var Ni=r(Ia);nl=n(Ni,"TD",{});var yb=r(nl);Ic=a(yb,"Conversational"),yb.forEach(t),Wc=h(Ni),rl=n(Ni,"TD",{});var qb=r(rl);Hc=a(qb,"SQA"),qb.forEach(t),Uc=h(Ni),il=n(Ni,"TD",{});var jb=r(il);Rc=a(jb,"Conversational, only cell selection questions"),jb.forEach(t),Ni.forEach(t),Gc=h(Di),Wa=n(Di,"TR",{});var Oi=r(Wa);ll=n(Oi,"TD",{});var $b=r(ll);Bc=a($b,"Weak supervision for aggregation"),$b.forEach(t),Vc=h(Oi),dl=n(Oi,"TD",{});var Eb=r(dl);Kc=a(Eb,"WTQ"),Eb.forEach(t),Yc=h(Oi),pl=n(Oi,"TD",{});var Fb=r(pl);Jc=a(Fb,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Fb.forEach(t),Oi.forEach(t),Xc=h(Di),Ha=n(Di,"TR",{});var Li=r(Ha);cl=n(Li,"TD",{});var Ab=r(cl);Zc=a(Ab,"Strong supervision for aggregation"),Ab.forEach(t),eh=h(Li),hl=n(Li,"TD",{});var xb=r(hl);th=a(xb,"WikiSQL-supervised"),xb.forEach(t),sh=h(Li),ml=n(Li,"TD",{});var zb=r(ml);ah=a(zb,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),zb.forEach(t),Li.forEach(t),Di.forEach(t),Vp.forEach(t),op=h(i),q(bo.$$.fragment,i),np=h(i),vo=n(i,"P",{});var Kp=r(vo);oh=a(Kp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),bn=n(Kp,"A",{href:!0,rel:!0});var Cb=r(bn);nh=a(Cb,"here"),Cb.forEach(t),rh=a(Kp," for more info."),Kp.forEach(t),rp=h(i),wo=n(i,"P",{});var Yp=r(wo);ih=a(Yp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),vn=n(Yp,"A",{href:!0,rel:!0});var Mb=r(vn);lh=a(Mb,"here"),Mb.forEach(t),dh=a(Yp,"."),Yp.forEach(t),ip=h(i),Rr=n(i,"P",{});var Pb=r(Rr);ul=n(Pb,"STRONG",{});var Sb=r(ul);ph=a(Sb,"STEP 2: Prepare your data in the SQA format"),Sb.forEach(t),Pb.forEach(t),lp=h(i),ko=n(i,"P",{});var Jp=r(ko);ch=a(Jp,"Second, no matter what you picked above, you should prepare your dataset in the "),wn=n(Jp,"A",{href:!0,rel:!0});var Db=r(wn);hh=a(Db,"SQA"),Db.forEach(t),mh=a(Jp," format. This format is a TSV/CSV file with the following columns:"),Jp.forEach(t),dp=h(i),We=n(i,"UL",{});var at=r(We);Gr=n(at,"LI",{});var AT=r(Gr);fl=n(AT,"CODE",{});var Nb=r(fl);uh=a(Nb,"id"),Nb.forEach(t),fh=a(AT,": optional, id of the table-question pair, for bookkeeping purposes."),AT.forEach(t),gh=h(at),Br=n(at,"LI",{});var xT=r(Br);gl=n(xT,"CODE",{});var Ob=r(gl);_h=a(Ob,"annotator"),Ob.forEach(t),Th=a(xT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),xT.forEach(t),bh=h(at),Vr=n(at,"LI",{});var zT=r(Vr);_l=n(zT,"CODE",{});var Lb=r(_l);vh=a(Lb,"position"),Lb.forEach(t),wh=a(zT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),zT.forEach(t),kh=h(at),Kr=n(at,"LI",{});var CT=r(Kr);Tl=n(CT,"CODE",{});var Qb=r(Tl);yh=a(Qb,"question"),Qb.forEach(t),qh=a(CT,": string"),CT.forEach(t),jh=h(at),Yr=n(at,"LI",{});var MT=r(Yr);bl=n(MT,"CODE",{});var Ib=r(bl);$h=a(Ib,"table_file"),Ib.forEach(t),Eh=a(MT,": string, name of a csv file containing the tabular data"),MT.forEach(t),Fh=h(at),Jr=n(at,"LI",{});var PT=r(Jr);vl=n(PT,"CODE",{});var Wb=r(vl);Ah=a(Wb,"answer_coordinates"),Wb.forEach(t),xh=a(PT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),PT.forEach(t),zh=h(at),Xr=n(at,"LI",{});var ST=r(Xr);wl=n(ST,"CODE",{});var Hb=r(wl);Ch=a(Hb,"answer_text"),Hb.forEach(t),Mh=a(ST,": list of one or more strings (each string being a cell value that is part of the answer)"),ST.forEach(t),Ph=h(at),Zr=n(at,"LI",{});var DT=r(Zr);kl=n(DT,"CODE",{});var Ub=r(kl);Sh=a(Ub,"aggregation_label"),Ub.forEach(t),Dh=a(DT,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),DT.forEach(t),Nh=h(at),ei=n(at,"LI",{});var NT=r(ei);yl=n(NT,"CODE",{});var Rb=r(yl);Oh=a(Rb,"float_answer"),Rb.forEach(t),Lh=a(NT,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),NT.forEach(t),at.forEach(t),pp=h(i),bt=n(i,"P",{});var $s=r(bt);Qh=a($s,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),kn=n($s,"A",{href:!0,rel:!0});var Gb=r(kn);Ih=a(Gb,"here"),Gb.forEach(t),Wh=a($s,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),yn=n($s,"A",{href:!0,rel:!0});var Bb=r(yn);Hh=a(Bb,"here"),Bb.forEach(t),Uh=a($s,". Interestingly, these conversion scripts are not perfect (the "),ql=n($s,"CODE",{});var Vb=r(ql);Rh=a(Vb,"answer_coordinates"),Vb.forEach(t),Gh=a($s," and "),jl=n($s,"CODE",{});var Kb=r(jl);Bh=a(Kb,"float_answer"),Kb.forEach(t),Vh=a($s," fields are populated based on the "),$l=n($s,"CODE",{});var Yb=r($l);Kh=a(Yb,"answer_text"),Yb.forEach(t),Yh=a($s,"), meaning that WTQ and WikiSQL results could actually be improved."),$s.forEach(t),cp=h(i),ti=n(i,"P",{});var Jb=r(ti);El=n(Jb,"STRONG",{});var Xb=r(El);Jh=a(Xb,"STEP 3: Convert your data into tensors using TapasTokenizer"),Xb.forEach(t),Jb.forEach(t),hp=h(i),q(yo.$$.fragment,i),mp=h(i),Se=n(i,"P",{});var Je=r(Se);Xh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),Fl=n(Je,"STRONG",{});var Zb=r(Fl);Zh=a(Zb,"not conversational"),Zb.forEach(t),em=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),Al=n(Je,"CODE",{});var ev=r(Al);tm=a(ev,"queries"),ev.forEach(t),sm=a(Je,", "),xl=n(Je,"CODE",{});var tv=r(xl);am=a(tv,"answer_coordinates"),tv.forEach(t),om=a(Je," and "),zl=n(Je,"CODE",{});var sv=r(zl);nm=a(sv,"answer_text"),sv.forEach(t),rm=a(Je," per table (in the order of their "),Cl=n(Je,"CODE",{});var av=r(Cl);im=a(av,"position"),av.forEach(t),lm=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),Ml=n(Je,"CODE",{});var ov=r(Ml);dm=a(ov,"prev_labels"),ov.forEach(t),pm=a(Je," token types (see docs of "),si=n(Je,"A",{href:!0});var nv=r(si);cm=a(nv,"TapasTokenizer"),nv.forEach(t),hm=a(Je,") are set correctly. See "),qn=n(Je,"A",{href:!0,rel:!0});var rv=r(qn);mm=a(rv,"this notebook"),rv.forEach(t),um=a(Je," for more info. See "),jn=n(Je,"A",{href:!0,rel:!0});var iv=r(jn);fm=a(iv,"this notebook"),iv.forEach(t),gm=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(t),up=h(i),ai=n(i,"P",{});var lv=r(ai);_m=a(lv,"**STEP 4: Train (fine-tune) the model"),lv.forEach(t),fp=h(i),q(qo.$$.fragment,i),gp=h(i),Ua=n(i,"H2",{class:!0});var Xp=r(Ua);jo=n(Xp,"A",{id:!0,class:!0,href:!0});var dv=r(jo);Pl=n(dv,"SPAN",{});var pv=r(Pl);q($n.$$.fragment,pv),pv.forEach(t),dv.forEach(t),Tm=h(Xp),Sl=n(Xp,"SPAN",{});var cv=r(Sl);bm=a(cv,"Usage: inference"),cv.forEach(t),Xp.forEach(t),_p=h(i),q($o.$$.fragment,i),Tp=h(i),vt=n(i,"P",{});var Es=r(vt);vm=a(Es,"In case of a conversational set-up, then each table-question pair must be provided "),Dl=n(Es,"STRONG",{});var hv=r(Dl);wm=a(hv,"sequentially"),hv.forEach(t),km=a(Es," to the model, such that the "),Nl=n(Es,"CODE",{});var mv=r(Nl);ym=a(mv,"prev_labels"),mv.forEach(t),qm=a(Es," token types can be overwritten by the predicted "),Ol=n(Es,"CODE",{});var uv=r(Ol);jm=a(uv,"labels"),uv.forEach(t),$m=a(Es," of the previous table-question pair. Again, more info can be found in "),En=n(Es,"A",{href:!0,rel:!0});var fv=r(En);Em=a(fv,"this notebook"),fv.forEach(t),Fm=a(Es," (for PyTorch) and "),Fn=n(Es,"A",{href:!0,rel:!0});var gv=r(Fn);Am=a(gv,"this notebook"),gv.forEach(t),xm=a(Es," (for TensorFlow)."),Es.forEach(t),bp=h(i),Ra=n(i,"H2",{class:!0});var Zp=r(Ra);Eo=n(Zp,"A",{id:!0,class:!0,href:!0});var _v=r(Eo);Ll=n(_v,"SPAN",{});var Tv=r(Ll);q(An.$$.fragment,Tv),Tv.forEach(t),_v.forEach(t),zm=h(Zp),Ql=n(Zp,"SPAN",{});var bv=r(Ql);Cm=a(bv,"TAPAS specific outputs"),bv.forEach(t),Zp.forEach(t),vp=h(i),Ga=n(i,"DIV",{class:!0});var ec=r(Ga);q(xn.$$.fragment,ec),Mm=h(ec),zn=n(ec,"P",{});var tc=r(zn);Pm=a(tc,"Output type of "),oi=n(tc,"A",{href:!0});var vv=r(oi);Sm=a(vv,"TapasForQuestionAnswering"),vv.forEach(t),Dm=a(tc,"."),tc.forEach(t),ec.forEach(t),wp=h(i),Ba=n(i,"H2",{class:!0});var sc=r(Ba);Fo=n(sc,"A",{id:!0,class:!0,href:!0});var wv=r(Fo);Il=n(wv,"SPAN",{});var kv=r(Il);q(Cn.$$.fragment,kv),kv.forEach(t),wv.forEach(t),Nm=h(sc),Wl=n(sc,"SPAN",{});var yv=r(Wl);Om=a(yv,"TapasConfig"),yv.forEach(t),sc.forEach(t),kp=h(i),Ht=n(i,"DIV",{class:!0});var va=r(Ht);q(Mn.$$.fragment,va),Lm=h(va),Va=n(va,"P",{});var Qi=r(Va);Qm=a(Qi,"This is the configuration class to store the configuration of a "),ni=n(Qi,"A",{href:!0});var qv=r(ni);Im=a(qv,"TapasModel"),qv.forEach(t),Wm=a(Qi,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),Pn=n(Qi,"A",{href:!0,rel:!0});var jv=r(Pn);Hm=a(jv,"google/tapas-base-finetuned-sqa"),jv.forEach(t),Um=a(Qi," architecture."),Qi.forEach(t),Rm=h(va),Ka=n(va,"P",{});var Ii=r(Ka);Gm=a(Ii,"Configuration objects inherit from "),Hl=n(Ii,"CODE",{});var $v=r(Hl);Bm=a($v,"PreTrainedConfig"),$v.forEach(t),Vm=a(Ii,` and can be used to control the model outputs. Read the
documentation from `),ri=n(Ii,"A",{href:!0});var Ev=r(ri);Km=a(Ev,"PretrainedConfig"),Ev.forEach(t),Ym=a(Ii," for more information."),Ii.forEach(t),Jm=h(va),Sn=n(va,"P",{});var ac=r(Sn);Xm=a(ac,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Dn=n(ac,"A",{href:!0,rel:!0});var Fv=r(Dn);Zm=a(Fv,"https://github.com/google-research/tapas/tree/master"),Fv.forEach(t),eu=a(ac,"."),ac.forEach(t),tu=h(va),q(Ao.$$.fragment,va),va.forEach(t),yp=h(i),Ya=n(i,"H2",{class:!0});var oc=r(Ya);xo=n(oc,"A",{id:!0,class:!0,href:!0});var Av=r(xo);Ul=n(Av,"SPAN",{});var xv=r(Ul);q(Nn.$$.fragment,xv),xv.forEach(t),Av.forEach(t),su=h(oc),Rl=n(oc,"SPAN",{});var zv=r(Rl);au=a(zv,"TapasTokenizer"),zv.forEach(t),oc.forEach(t),qp=h(i),Be=n(i,"DIV",{class:!0});var wt=r(Be);q(On.$$.fragment,wt),ou=h(wt),Gl=n(wt,"P",{});var Cv=r(Gl);nu=a(Cv,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),Cv.forEach(t),ru=h(wt),Qe=n(wt,"P",{});var Xe=r(Qe);iu=a(Xe,"This tokenizer inherits from "),ii=n(Xe,"A",{href:!0});var Mv=r(ii);lu=a(Mv,"PreTrainedTokenizer"),Mv.forEach(t),du=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),li=n(Xe,"A",{href:!0});var Pv=r(li);pu=a(Pv,"TapasTokenizer"),Pv.forEach(t),cu=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Bl=n(Xe,"CODE",{});var Sv=r(Bl);hu=a(Sv,"segment_ids"),Sv.forEach(t),mu=a(Xe,`,
`),Vl=n(Xe,"CODE",{});var Dv=r(Vl);uu=a(Dv,"column_ids"),Dv.forEach(t),fu=a(Xe,", "),Kl=n(Xe,"CODE",{});var Nv=r(Kl);gu=a(Nv,"row_ids"),Nv.forEach(t),_u=a(Xe,", "),Yl=n(Xe,"CODE",{});var Ov=r(Yl);Tu=a(Ov,"prev_labels"),Ov.forEach(t),bu=a(Xe,", "),Jl=n(Xe,"CODE",{});var Lv=r(Jl);vu=a(Lv,"column_ranks"),Lv.forEach(t),wu=a(Xe,", "),Xl=n(Xe,"CODE",{});var Qv=r(Xl);ku=a(Qv,"inv_column_ranks"),Qv.forEach(t),yu=a(Xe," and "),Zl=n(Xe,"CODE",{});var Iv=r(Zl);qu=a(Iv,"numeric_relations"),Iv.forEach(t),ju=a(Xe,":"),Xe.forEach(t),$u=h(wt),it=n(wt,"UL",{});var Yt=r(it);ed=n(Yt,"LI",{});var Wv=r(ed);Eu=a(Wv,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),Wv.forEach(t),Fu=h(Yt),td=n(Yt,"LI",{});var Hv=r(td);Au=a(Hv,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Hv.forEach(t),xu=h(Yt),sd=n(Yt,"LI",{});var Uv=r(sd);zu=a(Uv,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Uv.forEach(t),Cu=h(Yt),ad=n(Yt,"LI",{});var Rv=r(ad);Mu=a(Rv,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Rv.forEach(t),Pu=h(Yt),od=n(Yt,"LI",{});var Gv=r(od);Su=a(Gv,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Gv.forEach(t),Du=h(Yt),nd=n(Yt,"LI",{});var Bv=r(nd);Nu=a(Bv,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Bv.forEach(t),Ou=h(Yt),rd=n(Yt,"LI",{});var Vv=r(rd);Lu=a(Vv,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Vv.forEach(t),Yt.forEach(t),Qu=h(wt),di=n(wt,"P",{});var OT=r(di);pi=n(OT,"A",{href:!0});var Kv=r(pi);Iu=a(Kv,"TapasTokenizer"),Kv.forEach(t),Wu=a(OT,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),OT.forEach(t),Hu=h(wt),zo=n(wt,"DIV",{class:!0});var nc=r(zo);q(Ln.$$.fragment,nc),Uu=h(nc),id=n(nc,"P",{});var Yv=r(id);Ru=a(Yv,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Yv.forEach(t),nc.forEach(t),Gu=h(wt),ba=n(wt,"DIV",{class:!0});var Wi=r(ba);q(Qn.$$.fragment,Wi),Bu=h(Wi),In=n(Wi,"P",{});var rc=r(In);Vu=a(rc,"Converts logits of "),ci=n(rc,"A",{href:!0});var Jv=r(ci);Ku=a(Jv,"TapasForQuestionAnswering"),Jv.forEach(t),Yu=a(rc,` to actual predicted answer coordinates and optional
aggregation indices.`),rc.forEach(t),Ju=h(Wi),Wn=n(Wi,"P",{});var ic=r(Wn);Xu=a(ic,`The original implementation, on which this function is based, can be found
`),Hn=n(ic,"A",{href:!0,rel:!0});var Xv=r(Hn);Zu=a(Xv,"here"),Xv.forEach(t),ef=a(ic,"."),ic.forEach(t),Wi.forEach(t),tf=h(wt),hi=n(wt,"DIV",{class:!0});var Zv=r(hi);q(Un.$$.fragment,Zv),Zv.forEach(t),wt.forEach(t),jp=h(i),Ja=n(i,"H2",{class:!0});var lc=r(Ja);Co=n(lc,"A",{id:!0,class:!0,href:!0});var ew=r(Co);ld=n(ew,"SPAN",{});var tw=r(ld);q(Rn.$$.fragment,tw),tw.forEach(t),ew.forEach(t),sf=h(lc),dd=n(lc,"SPAN",{});var sw=r(dd);af=a(sw,"TapasModel"),sw.forEach(t),lc.forEach(t),$p=h(i),lt=n(i,"DIV",{class:!0});var Fs=r(lt);q(Gn.$$.fragment,Fs),of=h(Fs),Bn=n(Fs,"P",{});var dc=r(Bn);nf=a(dc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),mi=n(dc,"A",{href:!0});var aw=r(mi);rf=a(aw,"PreTrainedModel"),aw.forEach(t),lf=a(dc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc.forEach(t),df=h(Fs),Vn=n(Fs,"P",{});var pc=r(Vn);pf=a(pc,"This model is also a PyTorch "),Kn=n(pc,"A",{href:!0,rel:!0});var ow=r(Kn);cf=a(ow,"torch.nn.Module"),ow.forEach(t),hf=a(pc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pc.forEach(t),mf=h(Fs),Yn=n(Fs,"P",{});var cc=r(Yn);uf=a(cc,"This class is a small change compared to "),ui=n(cc,"A",{href:!0});var nw=r(ui);ff=a(nw,"BertModel"),nw.forEach(t),gf=a(cc,", taking into account the additional token type ids."),cc.forEach(t),_f=h(Fs),Jn=n(Fs,"P",{});var hc=r(Jn);Tf=a(hc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Xn=n(hc,"A",{href:!0,rel:!0});var rw=r(Xn);bf=a(rw,`Attention is
all you need`),rw.forEach(t),vf=a(hc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),hc.forEach(t),wf=h(Fs),_s=n(Fs,"DIV",{class:!0});var dn=r(_s);q(Zn.$$.fragment,dn),kf=h(dn),Xa=n(dn,"P",{});var Hi=r(Xa);yf=a(Hi,"The "),fi=n(Hi,"A",{href:!0});var iw=r(fi);qf=a(iw,"TapasModel"),iw.forEach(t),jf=a(Hi," forward method, overrides the "),pd=n(Hi,"CODE",{});var lw=r(pd);$f=a(lw,"__call__"),lw.forEach(t),Ef=a(Hi," special method."),Hi.forEach(t),Ff=h(dn),q(Mo.$$.fragment,dn),Af=h(dn),q(Po.$$.fragment,dn),dn.forEach(t),Fs.forEach(t),Ep=h(i),Za=n(i,"H2",{class:!0});var mc=r(Za);So=n(mc,"A",{id:!0,class:!0,href:!0});var dw=r(So);cd=n(dw,"SPAN",{});var pw=r(cd);q(er.$$.fragment,pw),pw.forEach(t),dw.forEach(t),xf=h(mc),hd=n(mc,"SPAN",{});var cw=r(hd);zf=a(cw,"TapasForMaskedLM"),cw.forEach(t),mc.forEach(t),Fp=h(i),ps=n(i,"DIV",{class:!0});var pn=r(ps);q(tr.$$.fragment,pn),Cf=h(pn),eo=n(pn,"P",{});var Ui=r(eo);Mf=a(Ui,"Tapas Model with a "),md=n(Ui,"CODE",{});var hw=r(md);Pf=a(hw,"language modeling"),hw.forEach(t),Sf=a(Ui,` head on top.
This model inherits from `),gi=n(Ui,"A",{href:!0});var mw=r(gi);Df=a(mw,"PreTrainedModel"),mw.forEach(t),Nf=a(Ui,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ui.forEach(t),Of=h(pn),sr=n(pn,"P",{});var uc=r(sr);Lf=a(uc,"This model is also a PyTorch "),ar=n(uc,"A",{href:!0,rel:!0});var uw=r(ar);Qf=a(uw,"torch.nn.Module"),uw.forEach(t),If=a(uc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uc.forEach(t),Wf=h(pn),Ts=n(pn,"DIV",{class:!0});var cn=r(Ts);q(or.$$.fragment,cn),Hf=h(cn),to=n(cn,"P",{});var Ri=r(to);Uf=a(Ri,"The "),_i=n(Ri,"A",{href:!0});var fw=r(_i);Rf=a(fw,"TapasForMaskedLM"),fw.forEach(t),Gf=a(Ri," forward method, overrides the "),ud=n(Ri,"CODE",{});var gw=r(ud);Bf=a(gw,"__call__"),gw.forEach(t),Vf=a(Ri," special method."),Ri.forEach(t),Kf=h(cn),q(Do.$$.fragment,cn),Yf=h(cn),q(No.$$.fragment,cn),cn.forEach(t),pn.forEach(t),Ap=h(i),so=n(i,"H2",{class:!0});var fc=r(so);Oo=n(fc,"A",{id:!0,class:!0,href:!0});var _w=r(Oo);fd=n(_w,"SPAN",{});var Tw=r(fd);q(nr.$$.fragment,Tw),Tw.forEach(t),_w.forEach(t),Jf=h(fc),gd=n(fc,"SPAN",{});var bw=r(gd);Xf=a(bw,"TapasForSequenceClassification"),bw.forEach(t),fc.forEach(t),xp=h(i),Ut=n(i,"DIV",{class:!0});var wa=r(Ut);q(rr.$$.fragment,wa),Zf=h(wa),_d=n(wa,"P",{});var vw=r(_d);eg=a(vw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),vw.forEach(t),tg=h(wa),ir=n(wa,"P",{});var gc=r(ir);sg=a(gc,"This model inherits from "),Ti=n(gc,"A",{href:!0});var ww=r(Ti);ag=a(ww,"PreTrainedModel"),ww.forEach(t),og=a(gc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc.forEach(t),ng=h(wa),lr=n(wa,"P",{});var _c=r(lr);rg=a(_c,"This model is also a PyTorch "),dr=n(_c,"A",{href:!0,rel:!0});var kw=r(dr);ig=a(kw,"torch.nn.Module"),kw.forEach(t),lg=a(_c,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c.forEach(t),dg=h(wa),bs=n(wa,"DIV",{class:!0});var hn=r(bs);q(pr.$$.fragment,hn),pg=h(hn),ao=n(hn,"P",{});var Gi=r(ao);cg=a(Gi,"The "),bi=n(Gi,"A",{href:!0});var yw=r(bi);hg=a(yw,"TapasForSequenceClassification"),yw.forEach(t),mg=a(Gi," forward method, overrides the "),Td=n(Gi,"CODE",{});var qw=r(Td);ug=a(qw,"__call__"),qw.forEach(t),fg=a(Gi," special method."),Gi.forEach(t),gg=h(hn),q(Lo.$$.fragment,hn),_g=h(hn),q(Qo.$$.fragment,hn),hn.forEach(t),wa.forEach(t),zp=h(i),oo=n(i,"H2",{class:!0});var Tc=r(oo);Io=n(Tc,"A",{id:!0,class:!0,href:!0});var jw=r(Io);bd=n(jw,"SPAN",{});var $w=r(bd);q(cr.$$.fragment,$w),$w.forEach(t),jw.forEach(t),Tg=h(Tc),vd=n(Tc,"SPAN",{});var Ew=r(vd);bg=a(Ew,"TapasForQuestionAnswering"),Ew.forEach(t),Tc.forEach(t),Cp=h(i),Rt=n(i,"DIV",{class:!0});var ka=r(Rt);q(hr.$$.fragment,ka),vg=h(ka),no=n(ka,"P",{});var Bi=r(no);wg=a(Bi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),wd=n(Bi,"CODE",{});var Fw=r(wd);kg=a(Fw,"logits"),Fw.forEach(t),yg=a(Bi," and optional "),kd=n(Bi,"CODE",{});var Aw=r(kd);qg=a(Aw,"logits_aggregation"),Aw.forEach(t),jg=a(Bi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Bi.forEach(t),$g=h(ka),mr=n(ka,"P",{});var bc=r(mr);Eg=a(bc,"This model inherits from "),vi=n(bc,"A",{href:!0});var xw=r(vi);Fg=a(xw,"PreTrainedModel"),xw.forEach(t),Ag=a(bc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc.forEach(t),xg=h(ka),ur=n(ka,"P",{});var vc=r(ur);zg=a(vc,"This model is also a PyTorch "),fr=n(vc,"A",{href:!0,rel:!0});var zw=r(fr);Cg=a(zw,"torch.nn.Module"),zw.forEach(t),Mg=a(vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc.forEach(t),Pg=h(ka),vs=n(ka,"DIV",{class:!0});var mn=r(vs);q(gr.$$.fragment,mn),Sg=h(mn),ro=n(mn,"P",{});var Vi=r(ro);Dg=a(Vi,"The "),wi=n(Vi,"A",{href:!0});var Cw=r(wi);Ng=a(Cw,"TapasForQuestionAnswering"),Cw.forEach(t),Og=a(Vi," forward method, overrides the "),yd=n(Vi,"CODE",{});var Mw=r(yd);Lg=a(Mw,"__call__"),Mw.forEach(t),Qg=a(Vi," special method."),Vi.forEach(t),Ig=h(mn),q(Wo.$$.fragment,mn),Wg=h(mn),q(Ho.$$.fragment,mn),mn.forEach(t),ka.forEach(t),Mp=h(i),io=n(i,"H2",{class:!0});var wc=r(io);Uo=n(wc,"A",{id:!0,class:!0,href:!0});var Pw=r(Uo);qd=n(Pw,"SPAN",{});var Sw=r(qd);q(_r.$$.fragment,Sw),Sw.forEach(t),Pw.forEach(t),Hg=h(wc),jd=n(wc,"SPAN",{});var Dw=r(jd);Ug=a(Dw,"TFTapasModel"),Dw.forEach(t),wc.forEach(t),Pp=h(i),dt=n(i,"DIV",{class:!0});var As=r(dt);q(Tr.$$.fragment,As),Rg=h(As),$d=n(As,"P",{});var Nw=r($d);Gg=a(Nw,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Nw.forEach(t),Bg=h(As),br=n(As,"P",{});var kc=r(br);Vg=a(kc,"This model inherits from "),ki=n(kc,"A",{href:!0});var Ow=r(ki);Kg=a(Ow,"TFPreTrainedModel"),Ow.forEach(t),Yg=a(kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc.forEach(t),Jg=h(As),vr=n(As,"P",{});var yc=r(vr);Xg=a(yc,"This model is also a "),wr=n(yc,"A",{href:!0,rel:!0});var Lw=r(wr);Zg=a(Lw,"tf.keras.Model"),Lw.forEach(t),e_=a(yc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yc.forEach(t),t_=h(As),q(Ro.$$.fragment,As),s_=h(As),ws=n(As,"DIV",{class:!0});var un=r(ws);q(kr.$$.fragment,un),a_=h(un),lo=n(un,"P",{});var Ki=r(lo);o_=a(Ki,"The "),yi=n(Ki,"A",{href:!0});var Qw=r(yi);n_=a(Qw,"TFTapasModel"),Qw.forEach(t),r_=a(Ki," forward method, overrides the "),Ed=n(Ki,"CODE",{});var Iw=r(Ed);i_=a(Iw,"__call__"),Iw.forEach(t),l_=a(Ki," special method."),Ki.forEach(t),d_=h(un),q(Go.$$.fragment,un),p_=h(un),q(Bo.$$.fragment,un),un.forEach(t),As.forEach(t),Sp=h(i),po=n(i,"H2",{class:!0});var qc=r(po);Vo=n(qc,"A",{id:!0,class:!0,href:!0});var Ww=r(Vo);Fd=n(Ww,"SPAN",{});var Hw=r(Fd);q(yr.$$.fragment,Hw),Hw.forEach(t),Ww.forEach(t),c_=h(qc),Ad=n(qc,"SPAN",{});var Uw=r(Ad);h_=a(Uw,"TFTapasForMaskedLM"),Uw.forEach(t),qc.forEach(t),Dp=h(i),pt=n(i,"DIV",{class:!0});var xs=r(pt);q(qr.$$.fragment,xs),m_=h(xs),jr=n(xs,"P",{});var jc=r(jr);u_=a(jc,"Tapas Model with a "),xd=n(jc,"CODE",{});var Rw=r(xd);f_=a(Rw,"language modeling"),Rw.forEach(t),g_=a(jc," head on top."),jc.forEach(t),__=h(xs),$r=n(xs,"P",{});var $c=r($r);T_=a($c,"This model inherits from "),qi=n($c,"A",{href:!0});var Gw=r(qi);b_=a(Gw,"TFPreTrainedModel"),Gw.forEach(t),v_=a($c,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c.forEach(t),w_=h(xs),Er=n(xs,"P",{});var Ec=r(Er);k_=a(Ec,"This model is also a "),Fr=n(Ec,"A",{href:!0,rel:!0});var Bw=r(Fr);y_=a(Bw,"tf.keras.Model"),Bw.forEach(t),q_=a(Ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec.forEach(t),j_=h(xs),q(Ko.$$.fragment,xs),$_=h(xs),ks=n(xs,"DIV",{class:!0});var fn=r(ks);q(Ar.$$.fragment,fn),E_=h(fn),co=n(fn,"P",{});var Yi=r(co);F_=a(Yi,"The "),ji=n(Yi,"A",{href:!0});var Vw=r(ji);A_=a(Vw,"TFTapasForMaskedLM"),Vw.forEach(t),x_=a(Yi," forward method, overrides the "),zd=n(Yi,"CODE",{});var Kw=r(zd);z_=a(Kw,"__call__"),Kw.forEach(t),C_=a(Yi," special method."),Yi.forEach(t),M_=h(fn),q(Yo.$$.fragment,fn),P_=h(fn),q(Jo.$$.fragment,fn),fn.forEach(t),xs.forEach(t),Np=h(i),ho=n(i,"H2",{class:!0});var Fc=r(ho);Xo=n(Fc,"A",{id:!0,class:!0,href:!0});var Yw=r(Xo);Cd=n(Yw,"SPAN",{});var Jw=r(Cd);q(xr.$$.fragment,Jw),Jw.forEach(t),Yw.forEach(t),S_=h(Fc),Md=n(Fc,"SPAN",{});var Xw=r(Md);D_=a(Xw,"TFTapasForSequenceClassification"),Xw.forEach(t),Fc.forEach(t),Op=h(i),ct=n(i,"DIV",{class:!0});var zs=r(ct);q(zr.$$.fragment,zs),N_=h(zs),Pd=n(zs,"P",{});var Zw=r(Pd);O_=a(Zw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Zw.forEach(t),L_=h(zs),Cr=n(zs,"P",{});var Ac=r(Cr);Q_=a(Ac,"This model inherits from "),$i=n(Ac,"A",{href:!0});var ek=r($i);I_=a(ek,"TFPreTrainedModel"),ek.forEach(t),W_=a(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),H_=h(zs),Mr=n(zs,"P",{});var xc=r(Mr);U_=a(xc,"This model is also a "),Pr=n(xc,"A",{href:!0,rel:!0});var tk=r(Pr);R_=a(tk,"tf.keras.Model"),tk.forEach(t),G_=a(xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xc.forEach(t),B_=h(zs),q(Zo.$$.fragment,zs),V_=h(zs),ys=n(zs,"DIV",{class:!0});var gn=r(ys);q(Sr.$$.fragment,gn),K_=h(gn),mo=n(gn,"P",{});var Ji=r(mo);Y_=a(Ji,"The "),Ei=n(Ji,"A",{href:!0});var sk=r(Ei);J_=a(sk,"TFTapasForSequenceClassification"),sk.forEach(t),X_=a(Ji," forward method, overrides the "),Sd=n(Ji,"CODE",{});var ak=r(Sd);Z_=a(ak,"__call__"),ak.forEach(t),eT=a(Ji," special method."),Ji.forEach(t),tT=h(gn),q(en.$$.fragment,gn),sT=h(gn),q(tn.$$.fragment,gn),gn.forEach(t),zs.forEach(t),Lp=h(i),uo=n(i,"H2",{class:!0});var zc=r(uo);sn=n(zc,"A",{id:!0,class:!0,href:!0});var ok=r(sn);Dd=n(ok,"SPAN",{});var nk=r(Dd);q(Dr.$$.fragment,nk),nk.forEach(t),ok.forEach(t),aT=h(zc),Nd=n(zc,"SPAN",{});var rk=r(Nd);oT=a(rk,"TFTapasForQuestionAnswering"),rk.forEach(t),zc.forEach(t),Qp=h(i),ht=n(i,"DIV",{class:!0});var Cs=r(ht);q(Nr.$$.fragment,Cs),nT=h(Cs),fo=n(Cs,"P",{});var Xi=r(fo);rT=a(Xi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Od=n(Xi,"CODE",{});var ik=r(Od);iT=a(ik,"logits"),ik.forEach(t),lT=a(Xi," and optional "),Ld=n(Xi,"CODE",{});var lk=r(Ld);dT=a(lk,"logits_aggregation"),lk.forEach(t),pT=a(Xi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Xi.forEach(t),cT=h(Cs),Or=n(Cs,"P",{});var Cc=r(Or);hT=a(Cc,"This model inherits from "),Fi=n(Cc,"A",{href:!0});var dk=r(Fi);mT=a(dk,"TFPreTrainedModel"),dk.forEach(t),uT=a(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),fT=h(Cs),Lr=n(Cs,"P",{});var Mc=r(Lr);gT=a(Mc,"This model is also a "),Qr=n(Mc,"A",{href:!0,rel:!0});var pk=r(Qr);_T=a(pk,"tf.keras.Model"),pk.forEach(t),TT=a(Mc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mc.forEach(t),bT=h(Cs),q(an.$$.fragment,Cs),vT=h(Cs),qs=n(Cs,"DIV",{class:!0});var _n=r(qs);q(Ir.$$.fragment,_n),wT=h(_n),go=n(_n,"P",{});var Zi=r(go);kT=a(Zi,"The "),Ai=n(Zi,"A",{href:!0});var ck=r(Ai);yT=a(ck,"TFTapasForQuestionAnswering"),ck.forEach(t),qT=a(Zi," forward method, overrides the "),Qd=n(Zi,"CODE",{});var hk=r(Qd);jT=a(hk,"__call__"),hk.forEach(t),$T=a(Zi," special method."),Zi.forEach(t),ET=h(_n),q(on.$$.fragment,_n),FT=h(_n),q(nn.$$.fragment,_n),_n.forEach(t),Cs.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(ay)),f(m,"id","tapas"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#tapas"),f(d,"class","relative group"),f(U,"id","overview"),f(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(U,"href","#overview"),f(x,"class","relative group"),f(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),f(M,"rel","nofollow"),f(S,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),f(S,"rel","nofollow"),f(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),f(Y,"rel","nofollow"),f(ne,"href","https://github.com/salesforce/WikiSQL"),f(ne,"rel","nofollow"),f(ke,"href","https://github.com/wenhuchen/Table-Fact-Checking"),f(ke,"rel","nofollow"),f(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),f(Ze,"rel","nofollow"),_k(ft.src,ca="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||f(ft,"src",ca),f(ft,"alt","drawing"),f(ft,"width","600"),f(tt,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),f(kt,"href","https://huggingface.co/nielsr"),f(kt,"rel","nofollow"),f(qt,"href","https://huggingface.co/kamalkraj"),f(qt,"rel","nofollow"),f($t,"href","https://github.com/google-research/tapas"),f($t,"rel","nofollow"),f(Vt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),f(Ct,"href","https://huggingface.co/models?search=tapas"),f(Ct,"rel","nofollow"),f(Ot,"href","https://github.com/google-research/tapas%3E"),f(Ot,"rel","nofollow"),f(st,"id","usage-finetuning"),f(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(st,"href","#usage-finetuning"),f(It,"class","relative group"),f(ms,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),f(fs,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),f(bn,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),f(bn,"rel","nofollow"),f(vn,"href","https://huggingface.co/models?search=tapas"),f(vn,"rel","nofollow"),f(wn,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),f(wn,"rel","nofollow"),f(kn,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),f(kn,"rel","nofollow"),f(yn,"href","https://github.com/NielsRogge/tapas_utils"),f(yn,"rel","nofollow"),f(si,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),f(qn,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),f(qn,"rel","nofollow"),f(jn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),f(jn,"rel","nofollow"),f(jo,"id","usage-inference"),f(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jo,"href","#usage-inference"),f(Ua,"class","relative group"),f(En,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),f(En,"rel","nofollow"),f(Fn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),f(Fn,"rel","nofollow"),f(Eo,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),f(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Eo,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),f(Ra,"class","relative group"),f(oi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),f(Ga,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.TapasConfig"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.TapasConfig"),f(Ba,"class","relative group"),f(ni,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),f(Pn,"href","https://huggingface.co/google/tapas-base-finetuned-sqa"),f(Pn,"rel","nofollow"),f(ri,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Dn,"href","https://github.com/google-research/tapas/tree/master"),f(Dn,"rel","nofollow"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xo,"id","transformers.TapasTokenizer"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#transformers.TapasTokenizer"),f(Ya,"class","relative group"),f(ii,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(li,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),f(pi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),f(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ci,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),f(Hn,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),f(Hn,"rel","nofollow"),f(ba,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.TapasModel"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.TapasModel"),f(Ja,"class","relative group"),f(mi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Kn,"rel","nofollow"),f(ui,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),f(Xn,"href","https://arxiv.org/abs/1706.03762"),f(Xn,"rel","nofollow"),f(fi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),f(_s,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.TapasForMaskedLM"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.TapasForMaskedLM"),f(Za,"class","relative group"),f(gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ar,"rel","nofollow"),f(_i,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForMaskedLM"),f(Ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ps,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"id","transformers.TapasForSequenceClassification"),f(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oo,"href","#transformers.TapasForSequenceClassification"),f(so,"class","relative group"),f(Ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(dr,"rel","nofollow"),f(bi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForSequenceClassification"),f(bs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"id","transformers.TapasForQuestionAnswering"),f(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Io,"href","#transformers.TapasForQuestionAnswering"),f(oo,"class","relative group"),f(vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(fr,"rel","nofollow"),f(wi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),f(vs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.TFTapasModel"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.TFTapasModel"),f(io,"class","relative group"),f(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(wr,"rel","nofollow"),f(yi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasModel"),f(ws,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vo,"id","transformers.TFTapasForMaskedLM"),f(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vo,"href","#transformers.TFTapasForMaskedLM"),f(po,"class","relative group"),f(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Fr,"rel","nofollow"),f(ji,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),f(ks,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"id","transformers.TFTapasForSequenceClassification"),f(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xo,"href","#transformers.TFTapasForSequenceClassification"),f(ho,"class","relative group"),f($i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Pr,"rel","nofollow"),f(Ei,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),f(ys,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(sn,"id","transformers.TFTapasForQuestionAnswering"),f(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(sn,"href","#transformers.TFTapasForQuestionAnswering"),f(uo,"class","relative group"),f(Fi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Qr,"rel","nofollow"),f(Ai,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),f(qs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,_){e(document.head,l),u(i,b,_),u(i,d,_),e(d,m),e(m,T),j(p,T,null),e(d,g),e(d,A),e(A,k),u(i,N,_),u(i,x,_),e(x,U),e(U,B),j(V,B,null),e(x,R),e(x,K),e(K,re),u(i,W,_),u(i,L,_),e(L,w),e(L,M),e(M,G),e(L,C),u(i,O,_),u(i,ee,_),e(ee,te),u(i,ce,_),u(i,oe,_),e(oe,se),e(se,S),e(S,Q),e(se,H),e(oe,X),e(oe,I),e(I,Y),e(Y,ge),e(I,me),e(oe,_e),e(oe,ue),e(ue,ne),e(ne,qe),e(ue,ie),u(i,ve,_),u(i,v,_),e(v,D),u(i,be,_),u(i,xe,_),e(xe,we),u(i,le,_),u(i,ze,_),e(ze,Me),e(Me,Z),u(i,de,_),u(i,pe,_),e(pe,De),e(pe,je),e(je,Te),e(pe,Ne),e(pe,ke),e(ke,Ae),e(pe,Oe),e(pe,Ze),e(Ze,Ps),e(pe,Ss),u(i,ut,_),u(i,ft,_),u(i,gt,_),u(i,_t,_),e(_t,Ds),e(_t,tt),e(tt,Ns),e(_t,Os),u(i,Ke,_),u(i,Pe,_),e(Pe,Ls),e(Pe,kt),e(kt,ye),e(Pe,yt),e(Pe,qt),e(qt,Qs),e(Pe,jt),e(Pe,$t),e($t,Is),e(Pe,Et),u(i,cs,_),u(i,Bt,_),e(Bt,Ft),u(i,hs,_),u(i,Ye,_),e(Ye,$e),e($e,Ws),e($e,At),e(At,ae),e($e,ot),e($e,Vt),e(Vt,Hs),e($e,xt),e($e,Jt),e(Jt,Us),e($e,zt),e($e,Ct),e(Ct,Rs),e($e,Mt),e($e,Xt),e(Xt,Gs),e($e,Pt),e($e,Zt),e(Zt,Bs),e($e,St),e(Ye,Vs),e(Ye,Le),e(Le,Dt),e(Le,es),e(es,Ks),e(Le,Nt),e(Le,ts),e(ts,Ys),e(Le,ss),e(Le,Ue),e(Ue,as),e(Le,Ee),e(Le,os),e(os,nt),e(Le,Js),e(Le,Ot),e(Ot,Lt),e(Le,Xs),e(Ye,Zs),e(Ye,Re),e(Re,ea),e(Re,ns),e(ns,rs),e(Re,et),e(Re,Qt),e(Qt,z),e(Re,J),e(Ye,ya),e(Ye,ta),e(ta,qa),u(i,ha,_),u(i,It,_),e(It,st),e(st,sa),j(rt,sa,null),e(It,ja),e(It,aa),e(aa,$a),u(i,ma,_),u(i,Ie,_),e(Ie,is),e(Ie,ms),e(ms,Ge),e(Ie,Ea),u(i,ua,_),u(i,us,_),e(us,oa),e(oa,ls),u(i,fa,_),u(i,fe,_),e(fe,Fa),e(fe,fs),e(fs,Aa),e(fe,xa),u(i,ga,_),u(i,Tt,_),e(Tt,na),e(na,ds),e(Tt,za),e(Tt,Fe),e(Fe,Ca),e(Fe,ra),e(ra,Ma),e(Fe,Pa),e(Tt,Sa),e(Tt,he),e(he,Da),e(he,ia),e(ia,Na),e(he,Oa),u(i,_a,_),u(i,gs,_),e(gs,La),u(i,Ta,_),u(i,Ce,_),e(Ce,la),e(la,Wt),e(Wt,da),e(da,el),e(el,Sc),e(Wt,Dc),e(Wt,tl),e(tl,sl),e(sl,Nc),e(Wt,Oc),e(Wt,al),e(al,ol),e(ol,Lc),e(Ce,Qc),e(Ce,Qa),e(Qa,Ia),e(Ia,nl),e(nl,Ic),e(Ia,Wc),e(Ia,rl),e(rl,Hc),e(Ia,Uc),e(Ia,il),e(il,Rc),e(Qa,Gc),e(Qa,Wa),e(Wa,ll),e(ll,Bc),e(Wa,Vc),e(Wa,dl),e(dl,Kc),e(Wa,Yc),e(Wa,pl),e(pl,Jc),e(Qa,Xc),e(Qa,Ha),e(Ha,cl),e(cl,Zc),e(Ha,eh),e(Ha,hl),e(hl,th),e(Ha,sh),e(Ha,ml),e(ml,ah),u(i,op,_),j(bo,i,_),u(i,np,_),u(i,vo,_),e(vo,oh),e(vo,bn),e(bn,nh),e(vo,rh),u(i,rp,_),u(i,wo,_),e(wo,ih),e(wo,vn),e(vn,lh),e(wo,dh),u(i,ip,_),u(i,Rr,_),e(Rr,ul),e(ul,ph),u(i,lp,_),u(i,ko,_),e(ko,ch),e(ko,wn),e(wn,hh),e(ko,mh),u(i,dp,_),u(i,We,_),e(We,Gr),e(Gr,fl),e(fl,uh),e(Gr,fh),e(We,gh),e(We,Br),e(Br,gl),e(gl,_h),e(Br,Th),e(We,bh),e(We,Vr),e(Vr,_l),e(_l,vh),e(Vr,wh),e(We,kh),e(We,Kr),e(Kr,Tl),e(Tl,yh),e(Kr,qh),e(We,jh),e(We,Yr),e(Yr,bl),e(bl,$h),e(Yr,Eh),e(We,Fh),e(We,Jr),e(Jr,vl),e(vl,Ah),e(Jr,xh),e(We,zh),e(We,Xr),e(Xr,wl),e(wl,Ch),e(Xr,Mh),e(We,Ph),e(We,Zr),e(Zr,kl),e(kl,Sh),e(Zr,Dh),e(We,Nh),e(We,ei),e(ei,yl),e(yl,Oh),e(ei,Lh),u(i,pp,_),u(i,bt,_),e(bt,Qh),e(bt,kn),e(kn,Ih),e(bt,Wh),e(bt,yn),e(yn,Hh),e(bt,Uh),e(bt,ql),e(ql,Rh),e(bt,Gh),e(bt,jl),e(jl,Bh),e(bt,Vh),e(bt,$l),e($l,Kh),e(bt,Yh),u(i,cp,_),u(i,ti,_),e(ti,El),e(El,Jh),u(i,hp,_),j(yo,i,_),u(i,mp,_),u(i,Se,_),e(Se,Xh),e(Se,Fl),e(Fl,Zh),e(Se,em),e(Se,Al),e(Al,tm),e(Se,sm),e(Se,xl),e(xl,am),e(Se,om),e(Se,zl),e(zl,nm),e(Se,rm),e(Se,Cl),e(Cl,im),e(Se,lm),e(Se,Ml),e(Ml,dm),e(Se,pm),e(Se,si),e(si,cm),e(Se,hm),e(Se,qn),e(qn,mm),e(Se,um),e(Se,jn),e(jn,fm),e(Se,gm),u(i,up,_),u(i,ai,_),e(ai,_m),u(i,fp,_),j(qo,i,_),u(i,gp,_),u(i,Ua,_),e(Ua,jo),e(jo,Pl),j($n,Pl,null),e(Ua,Tm),e(Ua,Sl),e(Sl,bm),u(i,_p,_),j($o,i,_),u(i,Tp,_),u(i,vt,_),e(vt,vm),e(vt,Dl),e(Dl,wm),e(vt,km),e(vt,Nl),e(Nl,ym),e(vt,qm),e(vt,Ol),e(Ol,jm),e(vt,$m),e(vt,En),e(En,Em),e(vt,Fm),e(vt,Fn),e(Fn,Am),e(vt,xm),u(i,bp,_),u(i,Ra,_),e(Ra,Eo),e(Eo,Ll),j(An,Ll,null),e(Ra,zm),e(Ra,Ql),e(Ql,Cm),u(i,vp,_),u(i,Ga,_),j(xn,Ga,null),e(Ga,Mm),e(Ga,zn),e(zn,Pm),e(zn,oi),e(oi,Sm),e(zn,Dm),u(i,wp,_),u(i,Ba,_),e(Ba,Fo),e(Fo,Il),j(Cn,Il,null),e(Ba,Nm),e(Ba,Wl),e(Wl,Om),u(i,kp,_),u(i,Ht,_),j(Mn,Ht,null),e(Ht,Lm),e(Ht,Va),e(Va,Qm),e(Va,ni),e(ni,Im),e(Va,Wm),e(Va,Pn),e(Pn,Hm),e(Va,Um),e(Ht,Rm),e(Ht,Ka),e(Ka,Gm),e(Ka,Hl),e(Hl,Bm),e(Ka,Vm),e(Ka,ri),e(ri,Km),e(Ka,Ym),e(Ht,Jm),e(Ht,Sn),e(Sn,Xm),e(Sn,Dn),e(Dn,Zm),e(Sn,eu),e(Ht,tu),j(Ao,Ht,null),u(i,yp,_),u(i,Ya,_),e(Ya,xo),e(xo,Ul),j(Nn,Ul,null),e(Ya,su),e(Ya,Rl),e(Rl,au),u(i,qp,_),u(i,Be,_),j(On,Be,null),e(Be,ou),e(Be,Gl),e(Gl,nu),e(Be,ru),e(Be,Qe),e(Qe,iu),e(Qe,ii),e(ii,lu),e(Qe,du),e(Qe,li),e(li,pu),e(Qe,cu),e(Qe,Bl),e(Bl,hu),e(Qe,mu),e(Qe,Vl),e(Vl,uu),e(Qe,fu),e(Qe,Kl),e(Kl,gu),e(Qe,_u),e(Qe,Yl),e(Yl,Tu),e(Qe,bu),e(Qe,Jl),e(Jl,vu),e(Qe,wu),e(Qe,Xl),e(Xl,ku),e(Qe,yu),e(Qe,Zl),e(Zl,qu),e(Qe,ju),e(Be,$u),e(Be,it),e(it,ed),e(ed,Eu),e(it,Fu),e(it,td),e(td,Au),e(it,xu),e(it,sd),e(sd,zu),e(it,Cu),e(it,ad),e(ad,Mu),e(it,Pu),e(it,od),e(od,Su),e(it,Du),e(it,nd),e(nd,Nu),e(it,Ou),e(it,rd),e(rd,Lu),e(Be,Qu),e(Be,di),e(di,pi),e(pi,Iu),e(di,Wu),e(Be,Hu),e(Be,zo),j(Ln,zo,null),e(zo,Uu),e(zo,id),e(id,Ru),e(Be,Gu),e(Be,ba),j(Qn,ba,null),e(ba,Bu),e(ba,In),e(In,Vu),e(In,ci),e(ci,Ku),e(In,Yu),e(ba,Ju),e(ba,Wn),e(Wn,Xu),e(Wn,Hn),e(Hn,Zu),e(Wn,ef),e(Be,tf),e(Be,hi),j(Un,hi,null),u(i,jp,_),u(i,Ja,_),e(Ja,Co),e(Co,ld),j(Rn,ld,null),e(Ja,sf),e(Ja,dd),e(dd,af),u(i,$p,_),u(i,lt,_),j(Gn,lt,null),e(lt,of),e(lt,Bn),e(Bn,nf),e(Bn,mi),e(mi,rf),e(Bn,lf),e(lt,df),e(lt,Vn),e(Vn,pf),e(Vn,Kn),e(Kn,cf),e(Vn,hf),e(lt,mf),e(lt,Yn),e(Yn,uf),e(Yn,ui),e(ui,ff),e(Yn,gf),e(lt,_f),e(lt,Jn),e(Jn,Tf),e(Jn,Xn),e(Xn,bf),e(Jn,vf),e(lt,wf),e(lt,_s),j(Zn,_s,null),e(_s,kf),e(_s,Xa),e(Xa,yf),e(Xa,fi),e(fi,qf),e(Xa,jf),e(Xa,pd),e(pd,$f),e(Xa,Ef),e(_s,Ff),j(Mo,_s,null),e(_s,Af),j(Po,_s,null),u(i,Ep,_),u(i,Za,_),e(Za,So),e(So,cd),j(er,cd,null),e(Za,xf),e(Za,hd),e(hd,zf),u(i,Fp,_),u(i,ps,_),j(tr,ps,null),e(ps,Cf),e(ps,eo),e(eo,Mf),e(eo,md),e(md,Pf),e(eo,Sf),e(eo,gi),e(gi,Df),e(eo,Nf),e(ps,Of),e(ps,sr),e(sr,Lf),e(sr,ar),e(ar,Qf),e(sr,If),e(ps,Wf),e(ps,Ts),j(or,Ts,null),e(Ts,Hf),e(Ts,to),e(to,Uf),e(to,_i),e(_i,Rf),e(to,Gf),e(to,ud),e(ud,Bf),e(to,Vf),e(Ts,Kf),j(Do,Ts,null),e(Ts,Yf),j(No,Ts,null),u(i,Ap,_),u(i,so,_),e(so,Oo),e(Oo,fd),j(nr,fd,null),e(so,Jf),e(so,gd),e(gd,Xf),u(i,xp,_),u(i,Ut,_),j(rr,Ut,null),e(Ut,Zf),e(Ut,_d),e(_d,eg),e(Ut,tg),e(Ut,ir),e(ir,sg),e(ir,Ti),e(Ti,ag),e(ir,og),e(Ut,ng),e(Ut,lr),e(lr,rg),e(lr,dr),e(dr,ig),e(lr,lg),e(Ut,dg),e(Ut,bs),j(pr,bs,null),e(bs,pg),e(bs,ao),e(ao,cg),e(ao,bi),e(bi,hg),e(ao,mg),e(ao,Td),e(Td,ug),e(ao,fg),e(bs,gg),j(Lo,bs,null),e(bs,_g),j(Qo,bs,null),u(i,zp,_),u(i,oo,_),e(oo,Io),e(Io,bd),j(cr,bd,null),e(oo,Tg),e(oo,vd),e(vd,bg),u(i,Cp,_),u(i,Rt,_),j(hr,Rt,null),e(Rt,vg),e(Rt,no),e(no,wg),e(no,wd),e(wd,kg),e(no,yg),e(no,kd),e(kd,qg),e(no,jg),e(Rt,$g),e(Rt,mr),e(mr,Eg),e(mr,vi),e(vi,Fg),e(mr,Ag),e(Rt,xg),e(Rt,ur),e(ur,zg),e(ur,fr),e(fr,Cg),e(ur,Mg),e(Rt,Pg),e(Rt,vs),j(gr,vs,null),e(vs,Sg),e(vs,ro),e(ro,Dg),e(ro,wi),e(wi,Ng),e(ro,Og),e(ro,yd),e(yd,Lg),e(ro,Qg),e(vs,Ig),j(Wo,vs,null),e(vs,Wg),j(Ho,vs,null),u(i,Mp,_),u(i,io,_),e(io,Uo),e(Uo,qd),j(_r,qd,null),e(io,Hg),e(io,jd),e(jd,Ug),u(i,Pp,_),u(i,dt,_),j(Tr,dt,null),e(dt,Rg),e(dt,$d),e($d,Gg),e(dt,Bg),e(dt,br),e(br,Vg),e(br,ki),e(ki,Kg),e(br,Yg),e(dt,Jg),e(dt,vr),e(vr,Xg),e(vr,wr),e(wr,Zg),e(vr,e_),e(dt,t_),j(Ro,dt,null),e(dt,s_),e(dt,ws),j(kr,ws,null),e(ws,a_),e(ws,lo),e(lo,o_),e(lo,yi),e(yi,n_),e(lo,r_),e(lo,Ed),e(Ed,i_),e(lo,l_),e(ws,d_),j(Go,ws,null),e(ws,p_),j(Bo,ws,null),u(i,Sp,_),u(i,po,_),e(po,Vo),e(Vo,Fd),j(yr,Fd,null),e(po,c_),e(po,Ad),e(Ad,h_),u(i,Dp,_),u(i,pt,_),j(qr,pt,null),e(pt,m_),e(pt,jr),e(jr,u_),e(jr,xd),e(xd,f_),e(jr,g_),e(pt,__),e(pt,$r),e($r,T_),e($r,qi),e(qi,b_),e($r,v_),e(pt,w_),e(pt,Er),e(Er,k_),e(Er,Fr),e(Fr,y_),e(Er,q_),e(pt,j_),j(Ko,pt,null),e(pt,$_),e(pt,ks),j(Ar,ks,null),e(ks,E_),e(ks,co),e(co,F_),e(co,ji),e(ji,A_),e(co,x_),e(co,zd),e(zd,z_),e(co,C_),e(ks,M_),j(Yo,ks,null),e(ks,P_),j(Jo,ks,null),u(i,Np,_),u(i,ho,_),e(ho,Xo),e(Xo,Cd),j(xr,Cd,null),e(ho,S_),e(ho,Md),e(Md,D_),u(i,Op,_),u(i,ct,_),j(zr,ct,null),e(ct,N_),e(ct,Pd),e(Pd,O_),e(ct,L_),e(ct,Cr),e(Cr,Q_),e(Cr,$i),e($i,I_),e(Cr,W_),e(ct,H_),e(ct,Mr),e(Mr,U_),e(Mr,Pr),e(Pr,R_),e(Mr,G_),e(ct,B_),j(Zo,ct,null),e(ct,V_),e(ct,ys),j(Sr,ys,null),e(ys,K_),e(ys,mo),e(mo,Y_),e(mo,Ei),e(Ei,J_),e(mo,X_),e(mo,Sd),e(Sd,Z_),e(mo,eT),e(ys,tT),j(en,ys,null),e(ys,sT),j(tn,ys,null),u(i,Lp,_),u(i,uo,_),e(uo,sn),e(sn,Dd),j(Dr,Dd,null),e(uo,aT),e(uo,Nd),e(Nd,oT),u(i,Qp,_),u(i,ht,_),j(Nr,ht,null),e(ht,nT),e(ht,fo),e(fo,rT),e(fo,Od),e(Od,iT),e(fo,lT),e(fo,Ld),e(Ld,dT),e(fo,pT),e(ht,cT),e(ht,Or),e(Or,hT),e(Or,Fi),e(Fi,mT),e(Or,uT),e(ht,fT),e(ht,Lr),e(Lr,gT),e(Lr,Qr),e(Qr,_T),e(Lr,TT),e(ht,bT),j(an,ht,null),e(ht,vT),e(ht,qs),j(Ir,qs,null),e(qs,wT),e(qs,go),e(go,kT),e(go,Ai),e(Ai,yT),e(go,qT),e(go,Qd),e(Qd,jT),e(go,$T),e(qs,ET),j(on,qs,null),e(qs,FT),j(nn,qs,null),Ip=!0},p(i,[_]){const Wr={};_&2&&(Wr.$$scope={dirty:_,ctx:i}),bo.$set(Wr);const Id={};_&2&&(Id.$$scope={dirty:_,ctx:i}),yo.$set(Id);const Wd={};_&2&&(Wd.$$scope={dirty:_,ctx:i}),qo.$set(Wd);const Hd={};_&2&&(Hd.$$scope={dirty:_,ctx:i}),$o.$set(Hd);const Hr={};_&2&&(Hr.$$scope={dirty:_,ctx:i}),Ao.$set(Hr);const Ud={};_&2&&(Ud.$$scope={dirty:_,ctx:i}),Mo.$set(Ud);const Rd={};_&2&&(Rd.$$scope={dirty:_,ctx:i}),Po.$set(Rd);const Gd={};_&2&&(Gd.$$scope={dirty:_,ctx:i}),Do.$set(Gd);const Ur={};_&2&&(Ur.$$scope={dirty:_,ctx:i}),No.$set(Ur);const Bd={};_&2&&(Bd.$$scope={dirty:_,ctx:i}),Lo.$set(Bd);const Vd={};_&2&&(Vd.$$scope={dirty:_,ctx:i}),Qo.$set(Vd);const _o={};_&2&&(_o.$$scope={dirty:_,ctx:i}),Wo.$set(_o);const xi={};_&2&&(xi.$$scope={dirty:_,ctx:i}),Ho.$set(xi);const Kd={};_&2&&(Kd.$$scope={dirty:_,ctx:i}),Ro.$set(Kd);const zi={};_&2&&(zi.$$scope={dirty:_,ctx:i}),Go.$set(zi);const Yd={};_&2&&(Yd.$$scope={dirty:_,ctx:i}),Bo.$set(Yd);const Ci={};_&2&&(Ci.$$scope={dirty:_,ctx:i}),Ko.$set(Ci);const Jd={};_&2&&(Jd.$$scope={dirty:_,ctx:i}),Yo.$set(Jd);const Xd={};_&2&&(Xd.$$scope={dirty:_,ctx:i}),Jo.$set(Xd);const Zd={};_&2&&(Zd.$$scope={dirty:_,ctx:i}),Zo.$set(Zd);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:i}),en.$set(ep);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:i}),tn.$set(tp);const pa={};_&2&&(pa.$$scope={dirty:_,ctx:i}),an.$set(pa);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:i}),on.$set(sp);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:i}),nn.$set(ap)},i(i){Ip||($(p.$$.fragment,i),$(V.$$.fragment,i),$(rt.$$.fragment,i),$(bo.$$.fragment,i),$(yo.$$.fragment,i),$(qo.$$.fragment,i),$($n.$$.fragment,i),$($o.$$.fragment,i),$(An.$$.fragment,i),$(xn.$$.fragment,i),$(Cn.$$.fragment,i),$(Mn.$$.fragment,i),$(Ao.$$.fragment,i),$(Nn.$$.fragment,i),$(On.$$.fragment,i),$(Ln.$$.fragment,i),$(Qn.$$.fragment,i),$(Un.$$.fragment,i),$(Rn.$$.fragment,i),$(Gn.$$.fragment,i),$(Zn.$$.fragment,i),$(Mo.$$.fragment,i),$(Po.$$.fragment,i),$(er.$$.fragment,i),$(tr.$$.fragment,i),$(or.$$.fragment,i),$(Do.$$.fragment,i),$(No.$$.fragment,i),$(nr.$$.fragment,i),$(rr.$$.fragment,i),$(pr.$$.fragment,i),$(Lo.$$.fragment,i),$(Qo.$$.fragment,i),$(cr.$$.fragment,i),$(hr.$$.fragment,i),$(gr.$$.fragment,i),$(Wo.$$.fragment,i),$(Ho.$$.fragment,i),$(_r.$$.fragment,i),$(Tr.$$.fragment,i),$(Ro.$$.fragment,i),$(kr.$$.fragment,i),$(Go.$$.fragment,i),$(Bo.$$.fragment,i),$(yr.$$.fragment,i),$(qr.$$.fragment,i),$(Ko.$$.fragment,i),$(Ar.$$.fragment,i),$(Yo.$$.fragment,i),$(Jo.$$.fragment,i),$(xr.$$.fragment,i),$(zr.$$.fragment,i),$(Zo.$$.fragment,i),$(Sr.$$.fragment,i),$(en.$$.fragment,i),$(tn.$$.fragment,i),$(Dr.$$.fragment,i),$(Nr.$$.fragment,i),$(an.$$.fragment,i),$(Ir.$$.fragment,i),$(on.$$.fragment,i),$(nn.$$.fragment,i),Ip=!0)},o(i){E(p.$$.fragment,i),E(V.$$.fragment,i),E(rt.$$.fragment,i),E(bo.$$.fragment,i),E(yo.$$.fragment,i),E(qo.$$.fragment,i),E($n.$$.fragment,i),E($o.$$.fragment,i),E(An.$$.fragment,i),E(xn.$$.fragment,i),E(Cn.$$.fragment,i),E(Mn.$$.fragment,i),E(Ao.$$.fragment,i),E(Nn.$$.fragment,i),E(On.$$.fragment,i),E(Ln.$$.fragment,i),E(Qn.$$.fragment,i),E(Un.$$.fragment,i),E(Rn.$$.fragment,i),E(Gn.$$.fragment,i),E(Zn.$$.fragment,i),E(Mo.$$.fragment,i),E(Po.$$.fragment,i),E(er.$$.fragment,i),E(tr.$$.fragment,i),E(or.$$.fragment,i),E(Do.$$.fragment,i),E(No.$$.fragment,i),E(nr.$$.fragment,i),E(rr.$$.fragment,i),E(pr.$$.fragment,i),E(Lo.$$.fragment,i),E(Qo.$$.fragment,i),E(cr.$$.fragment,i),E(hr.$$.fragment,i),E(gr.$$.fragment,i),E(Wo.$$.fragment,i),E(Ho.$$.fragment,i),E(_r.$$.fragment,i),E(Tr.$$.fragment,i),E(Ro.$$.fragment,i),E(kr.$$.fragment,i),E(Go.$$.fragment,i),E(Bo.$$.fragment,i),E(yr.$$.fragment,i),E(qr.$$.fragment,i),E(Ko.$$.fragment,i),E(Ar.$$.fragment,i),E(Yo.$$.fragment,i),E(Jo.$$.fragment,i),E(xr.$$.fragment,i),E(zr.$$.fragment,i),E(Zo.$$.fragment,i),E(Sr.$$.fragment,i),E(en.$$.fragment,i),E(tn.$$.fragment,i),E(Dr.$$.fragment,i),E(Nr.$$.fragment,i),E(an.$$.fragment,i),E(Ir.$$.fragment,i),E(on.$$.fragment,i),E(nn.$$.fragment,i),Ip=!1},d(i){t(l),i&&t(b),i&&t(d),F(p),i&&t(N),i&&t(x),F(V),i&&t(W),i&&t(L),i&&t(O),i&&t(ee),i&&t(ce),i&&t(oe),i&&t(ve),i&&t(v),i&&t(be),i&&t(xe),i&&t(le),i&&t(ze),i&&t(de),i&&t(pe),i&&t(ut),i&&t(ft),i&&t(gt),i&&t(_t),i&&t(Ke),i&&t(Pe),i&&t(cs),i&&t(Bt),i&&t(hs),i&&t(Ye),i&&t(ha),i&&t(It),F(rt),i&&t(ma),i&&t(Ie),i&&t(ua),i&&t(us),i&&t(fa),i&&t(fe),i&&t(ga),i&&t(Tt),i&&t(_a),i&&t(gs),i&&t(Ta),i&&t(Ce),i&&t(op),F(bo,i),i&&t(np),i&&t(vo),i&&t(rp),i&&t(wo),i&&t(ip),i&&t(Rr),i&&t(lp),i&&t(ko),i&&t(dp),i&&t(We),i&&t(pp),i&&t(bt),i&&t(cp),i&&t(ti),i&&t(hp),F(yo,i),i&&t(mp),i&&t(Se),i&&t(up),i&&t(ai),i&&t(fp),F(qo,i),i&&t(gp),i&&t(Ua),F($n),i&&t(_p),F($o,i),i&&t(Tp),i&&t(vt),i&&t(bp),i&&t(Ra),F(An),i&&t(vp),i&&t(Ga),F(xn),i&&t(wp),i&&t(Ba),F(Cn),i&&t(kp),i&&t(Ht),F(Mn),F(Ao),i&&t(yp),i&&t(Ya),F(Nn),i&&t(qp),i&&t(Be),F(On),F(Ln),F(Qn),F(Un),i&&t(jp),i&&t(Ja),F(Rn),i&&t($p),i&&t(lt),F(Gn),F(Zn),F(Mo),F(Po),i&&t(Ep),i&&t(Za),F(er),i&&t(Fp),i&&t(ps),F(tr),F(or),F(Do),F(No),i&&t(Ap),i&&t(so),F(nr),i&&t(xp),i&&t(Ut),F(rr),F(pr),F(Lo),F(Qo),i&&t(zp),i&&t(oo),F(cr),i&&t(Cp),i&&t(Rt),F(hr),F(gr),F(Wo),F(Ho),i&&t(Mp),i&&t(io),F(_r),i&&t(Pp),i&&t(dt),F(Tr),F(Ro),F(kr),F(Go),F(Bo),i&&t(Sp),i&&t(po),F(yr),i&&t(Dp),i&&t(pt),F(qr),F(Ko),F(Ar),F(Yo),F(Jo),i&&t(Np),i&&t(ho),F(xr),i&&t(Op),i&&t(ct),F(zr),F(Zo),F(Sr),F(en),F(tn),i&&t(Lp),i&&t(uo),F(Dr),i&&t(Qp),i&&t(ht),F(Nr),F(an),F(Ir),F(on),F(nn)}}}const ay={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function oy(P){return Tk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hy extends mk{constructor(l){super();uk(this,l,oy,sy,fk,{})}}export{hy as default,ay as metadata};
