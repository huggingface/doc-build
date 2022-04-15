import{S as Uy,i as Ry,s as Gy,e as o,k as d,w as $,t as s,M as By,c as n,d as t,m as p,a as r,x as E,h as a,b as h,N as Vy,F as e,g as u,y as F,q as A,o as z,B as x,v as Ky,L as rn}from"../../chunks/vendor-6b77c823.js";import{T as Ms}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-17b815d9.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{F as Cc,M as ln}from"../../chunks/Markdown-9acf6d91.js";function Yy(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),I=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),_=s(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=o("a"),f=s("torch-scatter"),v=s(" dependency:"),b=d(),$(T.$$.fragment),k=d(),y=o("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o("a"),H=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);_=a(M,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=n(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"torch-scatter"),G.forEach(t),v=a(M," dependency:"),M.forEach(t),b=p(w),E(T.$$.fragment,w),k=p(w),y=n(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/rusty1s/pytorch_scatter"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(w,M){u(w,l,M),e(l,_),e(l,c),e(c,f),e(l,v),u(w,b,M),F(T,w,M),u(w,k,M),u(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),u(w,re,M),F(I,w,M),O=!0},p:rn,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(b),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function Jy(U){let l,_;return l=new ln({props:{$$slots:{default:[Yy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Xy(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),I=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),_=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=o("a"),f=s("tensorflow_probability"),v=s(" dependency:"),b=d(),$(T.$$.fragment),k=d(),y=o("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o("a"),H=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TFTapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);_=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=n(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"tensorflow_probability"),G.forEach(t),v=a(M," dependency:"),M.forEach(t),b=p(w),E(T.$$.fragment,w),k=p(w),y=n(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/tensorflow/probability"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(w,M){u(w,l,M),e(l,_),e(l,c),e(c,f),e(l,v),u(w,b,M),F(T,w,M),u(w,k,M),u(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),u(w,re,M),F(I,w,M),O=!0},p:rn,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(b),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function Zy(U){let l,_;return l=new ln({props:{$$slots:{default:[Xy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ek(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,be,g,S,ve,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,ut,mt,pa,ft,gt,Ds,tt,Ns,Os,Ke,Pe,Ls,wt,ke,yt,kt,Qs,qt,jt,Is,$t,vs,Gt,Et,bs,Ye,$e,Ws,Ft,ae,ot,Bt,Hs,At,os,Us,zt,xt,Rs,Ct,ns,Gs,Mt,rs,Bs,Pt,Vs,Le,St,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,nt,Js,Nt,Ot,Xs,Zs,Re,ea,hs,us,et,Lt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o("a"),f=s("TapasTokenizer"),v=s(" to convert table-question pairs into "),b=o("code"),T=s("input_ids"),k=s(", "),y=o("code"),D=s("attention_mask"),q=s(", "),H=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),N=s("Task"),ee=d(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=d(),P=o("tbody"),L=o("tr"),W=o("td"),X=s("Conversational"),Q=d(),Y=o("td"),ge=o("code"),ue=s("input_ids"),_e=s(", "),me=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),be=s("token_type_ids"),g=s(", "),S=o("code"),ve=s("labels"),ze=d(),we=o("tr"),le=o("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=o("td"),de=o("code"),pe=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ye=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ps=s("labels"),Ss=s(", "),ut=o("code"),mt=s("numeric_values"),pa=s(", "),ft=o("code"),gt=s("numeric_values_scale"),Ds=s(", "),tt=o("code"),Ns=s("float_answer"),Os=d(),Ke=o("tr"),Pe=o("td"),Ls=s("Strong supervision for aggregation"),wt=d(),ke=o("td"),yt=o("code"),kt=s("input ids"),Qs=s(", "),qt=o("code"),jt=s("attention mask"),Is=s(", "),$t=o("code"),vs=s("token type ids"),Gt=s(", "),Et=o("code"),bs=s("labels"),Ye=s(", "),$e=o("code"),Ws=s("aggregation_labels"),Ft=d(),ae=o("p"),ot=o("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),At=o("code"),os=s("labels"),Us=s(", "),zt=o("code"),xt=s("numeric_values"),Rs=s(" and "),Ct=o("code"),ns=s("numeric_values_scale"),Gs=s(" based on the "),Mt=o("code"),rs=s("answer_coordinates"),Bs=s(" and "),Pt=o("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),St=o("code"),is=s("float_answer"),Ks=s(" and "),Dt=o("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=o("p"),cs=s("Note that "),nt=o("a"),Js=s("TapasTokenizer"),Nt=s(" expects the data of the table to be "),Ot=o("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=o("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),us=d(),$(et.$$.fragment),this.h()},l(j){l=n(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(t),v=a(J," to convert table-question pairs into "),b=n(J,"CODE",{});var ta=r(b);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=n(J,"CODE",{});var Ca=r(y);D=a(Ca,"attention_mask"),Ca.forEach(t),q=a(J,", "),H=n(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var Qt=r(R);K=a(Qt,"TapasForQuestionAnswering"),Qt.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=n(j,"TABLE",{});var st=r(O);w=n(st,"THEAD",{});var sa=r(w);M=n(sa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var Ma=r(G);C=n(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),Ma.forEach(t),ee=p(rt),te=n(rt,"TH",{});var Pa=r(te);ce=n(Pa,"STRONG",{});var ha=r(ce);oe=a(ha,"Required inputs"),ha.forEach(t),Pa.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=n(st,"TBODY",{});var Ie=r(P);L=n(Ie,"TR",{});var ms=r(L);W=n(ms,"TD",{});var ws=r(W);X=a(ws,"Conversational"),ws.forEach(t),Q=p(ms),Y=n(ms,"TD",{});var Ge=r(Y);ge=n(Ge,"CODE",{});var Sa=r(ge);ue=a(Sa,"input_ids"),Sa.forEach(t),_e=a(Ge,", "),me=n(Ge,"CODE",{});var ua=r(me);ne=a(ua,"attention_mask"),ua.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var ys=r(ie);be=a(ys,"token_type_ids"),ys.forEach(t),g=a(Ge,", "),S=n(Ge,"CODE",{});var oa=r(S);ve=a(oa,"labels"),oa.forEach(t),Ge.forEach(t),ms.forEach(t),ze=p(Ie),we=n(Ie,"TR",{});var fs=r(we);le=n(fs,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(t),Me=p(fs),Z=n(fs,"TD",{});var fe=r(Z);de=n(fe,"CODE",{});var Da=r(de);pe=a(Da,"input_ids"),Da.forEach(t),De=a(fe,", "),je=n(fe,"CODE",{});var ks=r(je);Te=a(ks,"attention_mask"),ks.forEach(t),Ne=a(fe,", "),ye=n(fe,"CODE",{});var Na=r(ye);Ae=a(Na,"token_type_ids"),Na.forEach(t),Oe=a(fe,", "),Ze=n(fe,"CODE",{});var Oa=r(Ze);Ps=a(Oa,"labels"),Oa.forEach(t),Ss=a(fe,", "),ut=n(fe,"CODE",{});var fa=r(ut);mt=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),ft=n(fe,"CODE",{});var _t=r(ft);gt=a(_t,"numeric_values_scale"),_t.forEach(t),Ds=a(fe,", "),tt=n(fe,"CODE",{});var na=r(tt);Ns=a(na,"float_answer"),na.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=n(Ie,"TR",{});var gs=r(Ke);Pe=n(gs,"TD",{});var La=r(Pe);Ls=a(La,"Strong supervision for aggregation"),La.forEach(t),wt=p(gs),ke=n(gs,"TD",{});var Fe=r(ke);yt=n(Fe,"CODE",{});var Qa=r(yt);kt=a(Qa,"input ids"),Qa.forEach(t),Qs=a(Fe,", "),qt=n(Fe,"CODE",{});var ra=r(qt);jt=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),$t=n(Fe,"CODE",{});var Ia=r($t);vs=a(Ia,"token type ids"),Ia.forEach(t),Gt=a(Fe,", "),Et=n(Fe,"CODE",{});var Wa=r(Et);bs=a(Wa,"labels"),Wa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Ha=r($e);Ws=a(Ha,"aggregation_labels"),Ha.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),Ft=p(j),ae=n(j,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Ua=r(ot);Bt=a(Ua,"TapasTokenizer"),Ua.forEach(t),Hs=a(he," creates the "),At=n(he,"CODE",{});var ia=r(At);os=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=n(he,"CODE",{});var Ra=r(zt);xt=a(Ra,"numeric_values"),Ra.forEach(t),Rs=a(he," and "),Ct=n(he,"CODE",{});var Ga=r(Ct);ns=a(Ga,"numeric_values_scale"),Ga.forEach(t),Gs=a(he," based on the "),Mt=n(he,"CODE",{});var ga=r(Mt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),Pt=n(he,"CODE",{});var qs=r(Pt);Vs=a(qs,"answer_text"),qs.forEach(t),Le=a(he," columns of the TSV file. The "),St=n(he,"CODE",{});var Ba=r(St);is=a(Ba,"float_answer"),Ba.forEach(t),Ks=a(he," and "),Dt=n(he,"CODE",{});var _a=r(Dt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=n(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var la=r(nt);Js=a(la,"TapasTokenizer"),la.forEach(t),Nt=a(Ce," expects the data of the table to be "),Ot=n(Ce,"STRONG",{});var It=r(Ot);Xs=a(It,"text-only"),It.forEach(t),Zs=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),us=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ot,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer"),h(nt,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){u(j,l,J),e(l,_),e(l,c),e(c,f),e(l,v),e(l,b),e(b,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),u(j,I,J),u(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,ne),e(Y,qe),e(Y,ie),e(ie,be),e(Y,g),e(Y,S),e(S,ve),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,ut),e(ut,mt),e(Z,pa),e(Z,ft),e(ft,gt),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,wt),e(Ke,ke),e(ke,yt),e(yt,kt),e(ke,Qs),e(ke,qt),e(qt,jt),e(ke,Is),e(ke,$t),e($t,vs),e(ke,Gt),e(ke,Et),e(Et,bs),e(ke,Ye),e(ke,$e),e($e,Ws),u(j,Ft,J),u(j,ae,J),e(ae,ot),e(ot,Bt),e(ae,Hs),e(ae,At),e(At,os),e(ae,Us),e(ae,zt),e(zt,xt),e(ae,Rs),e(ae,Ct),e(Ct,ns),e(ae,Gs),e(ae,Mt),e(Mt,rs),e(ae,Bs),e(ae,Pt),e(Pt,Vs),e(ae,Le),e(ae,St),e(St,is),e(ae,Ks),e(ae,Dt),e(Dt,ls),e(ae,Ys),u(j,ds,J),F(Ue,j,J),u(j,ps,J),u(j,Ee,J),e(Ee,cs),e(Ee,nt),e(nt,Js),e(Ee,Nt),e(Ee,Ot),e(Ot,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),u(j,us,J),F(et,j,J),Lt=!0},p:rn,i(j){Lt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Lt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Lt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(Ft),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(us),x(et,j)}}}function tk(U){let l,_;return l=new ln({props:{$$slots:{default:[ek]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function sk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,be,g,S,ve,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,ut,mt,pa,ft,gt,Ds,tt,Ns,Os,Ke,Pe,Ls,wt,ke,yt,kt,Qs,qt,jt,Is,$t,vs,Gt,Et,bs,Ye,$e,Ws,Ft,ae,ot,Bt,Hs,At,os,Us,zt,xt,Rs,Ct,ns,Gs,Mt,rs,Bs,Pt,Vs,Le,St,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,nt,Js,Nt,Ot,Xs,Zs,Re,ea,hs,us,et,Lt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o("a"),f=s("TapasTokenizer"),v=s(" to convert table-question pairs into "),b=o("code"),T=s("input_ids"),k=s(", "),y=o("code"),D=s("attention_mask"),q=s(", "),H=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TFTapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),N=s("Task"),ee=d(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=d(),P=o("tbody"),L=o("tr"),W=o("td"),X=s("Conversational"),Q=d(),Y=o("td"),ge=o("code"),ue=s("input_ids"),_e=s(", "),me=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),be=s("token_type_ids"),g=s(", "),S=o("code"),ve=s("labels"),ze=d(),we=o("tr"),le=o("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=o("td"),de=o("code"),pe=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ye=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ps=s("labels"),Ss=s(", "),ut=o("code"),mt=s("numeric_values"),pa=s(", "),ft=o("code"),gt=s("numeric_values_scale"),Ds=s(", "),tt=o("code"),Ns=s("float_answer"),Os=d(),Ke=o("tr"),Pe=o("td"),Ls=s("Strong supervision for aggregation"),wt=d(),ke=o("td"),yt=o("code"),kt=s("input ids"),Qs=s(", "),qt=o("code"),jt=s("attention mask"),Is=s(", "),$t=o("code"),vs=s("token type ids"),Gt=s(", "),Et=o("code"),bs=s("labels"),Ye=s(", "),$e=o("code"),Ws=s("aggregation_labels"),Ft=d(),ae=o("p"),ot=o("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),At=o("code"),os=s("labels"),Us=s(", "),zt=o("code"),xt=s("numeric_values"),Rs=s(" and "),Ct=o("code"),ns=s("numeric_values_scale"),Gs=s(" based on the "),Mt=o("code"),rs=s("answer_coordinates"),Bs=s(" and "),Pt=o("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),St=o("code"),is=s("float_answer"),Ks=s(" and "),Dt=o("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=o("p"),cs=s("Note that "),nt=o("a"),Js=s("TapasTokenizer"),Nt=s(" expects the data of the table to be "),Ot=o("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=o("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),us=d(),$(et.$$.fragment),this.h()},l(j){l=n(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(t),v=a(J," to convert table-question pairs into "),b=n(J,"CODE",{});var ta=r(b);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=n(J,"CODE",{});var Ca=r(y);D=a(Ca,"attention_mask"),Ca.forEach(t),q=a(J,", "),H=n(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var Qt=r(R);K=a(Qt,"TFTapasForQuestionAnswering"),Qt.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=n(j,"TABLE",{});var st=r(O);w=n(st,"THEAD",{});var sa=r(w);M=n(sa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var Ma=r(G);C=n(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),Ma.forEach(t),ee=p(rt),te=n(rt,"TH",{});var Pa=r(te);ce=n(Pa,"STRONG",{});var ha=r(ce);oe=a(ha,"Required inputs"),ha.forEach(t),Pa.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=n(st,"TBODY",{});var Ie=r(P);L=n(Ie,"TR",{});var ms=r(L);W=n(ms,"TD",{});var ws=r(W);X=a(ws,"Conversational"),ws.forEach(t),Q=p(ms),Y=n(ms,"TD",{});var Ge=r(Y);ge=n(Ge,"CODE",{});var Sa=r(ge);ue=a(Sa,"input_ids"),Sa.forEach(t),_e=a(Ge,", "),me=n(Ge,"CODE",{});var ua=r(me);ne=a(ua,"attention_mask"),ua.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var ys=r(ie);be=a(ys,"token_type_ids"),ys.forEach(t),g=a(Ge,", "),S=n(Ge,"CODE",{});var oa=r(S);ve=a(oa,"labels"),oa.forEach(t),Ge.forEach(t),ms.forEach(t),ze=p(Ie),we=n(Ie,"TR",{});var fs=r(we);le=n(fs,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(t),Me=p(fs),Z=n(fs,"TD",{});var fe=r(Z);de=n(fe,"CODE",{});var Da=r(de);pe=a(Da,"input_ids"),Da.forEach(t),De=a(fe,", "),je=n(fe,"CODE",{});var ks=r(je);Te=a(ks,"attention_mask"),ks.forEach(t),Ne=a(fe,", "),ye=n(fe,"CODE",{});var Na=r(ye);Ae=a(Na,"token_type_ids"),Na.forEach(t),Oe=a(fe,", "),Ze=n(fe,"CODE",{});var Oa=r(Ze);Ps=a(Oa,"labels"),Oa.forEach(t),Ss=a(fe,", "),ut=n(fe,"CODE",{});var fa=r(ut);mt=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),ft=n(fe,"CODE",{});var _t=r(ft);gt=a(_t,"numeric_values_scale"),_t.forEach(t),Ds=a(fe,", "),tt=n(fe,"CODE",{});var na=r(tt);Ns=a(na,"float_answer"),na.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=n(Ie,"TR",{});var gs=r(Ke);Pe=n(gs,"TD",{});var La=r(Pe);Ls=a(La,"Strong supervision for aggregation"),La.forEach(t),wt=p(gs),ke=n(gs,"TD",{});var Fe=r(ke);yt=n(Fe,"CODE",{});var Qa=r(yt);kt=a(Qa,"input ids"),Qa.forEach(t),Qs=a(Fe,", "),qt=n(Fe,"CODE",{});var ra=r(qt);jt=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),$t=n(Fe,"CODE",{});var Ia=r($t);vs=a(Ia,"token type ids"),Ia.forEach(t),Gt=a(Fe,", "),Et=n(Fe,"CODE",{});var Wa=r(Et);bs=a(Wa,"labels"),Wa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Ha=r($e);Ws=a(Ha,"aggregation_labels"),Ha.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),Ft=p(j),ae=n(j,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Ua=r(ot);Bt=a(Ua,"TapasTokenizer"),Ua.forEach(t),Hs=a(he," creates the "),At=n(he,"CODE",{});var ia=r(At);os=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=n(he,"CODE",{});var Ra=r(zt);xt=a(Ra,"numeric_values"),Ra.forEach(t),Rs=a(he," and "),Ct=n(he,"CODE",{});var Ga=r(Ct);ns=a(Ga,"numeric_values_scale"),Ga.forEach(t),Gs=a(he," based on the "),Mt=n(he,"CODE",{});var ga=r(Mt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),Pt=n(he,"CODE",{});var qs=r(Pt);Vs=a(qs,"answer_text"),qs.forEach(t),Le=a(he," columns of the TSV file. The "),St=n(he,"CODE",{});var Ba=r(St);is=a(Ba,"float_answer"),Ba.forEach(t),Ks=a(he," and "),Dt=n(he,"CODE",{});var _a=r(Dt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=n(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var la=r(nt);Js=a(la,"TapasTokenizer"),la.forEach(t),Nt=a(Ce," expects the data of the table to be "),Ot=n(Ce,"STRONG",{});var It=r(Ot);Xs=a(It,"text-only"),It.forEach(t),Zs=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),us=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ot,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer"),h(nt,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){u(j,l,J),e(l,_),e(l,c),e(c,f),e(l,v),e(l,b),e(b,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),u(j,I,J),u(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,ne),e(Y,qe),e(Y,ie),e(ie,be),e(Y,g),e(Y,S),e(S,ve),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,ut),e(ut,mt),e(Z,pa),e(Z,ft),e(ft,gt),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,wt),e(Ke,ke),e(ke,yt),e(yt,kt),e(ke,Qs),e(ke,qt),e(qt,jt),e(ke,Is),e(ke,$t),e($t,vs),e(ke,Gt),e(ke,Et),e(Et,bs),e(ke,Ye),e(ke,$e),e($e,Ws),u(j,Ft,J),u(j,ae,J),e(ae,ot),e(ot,Bt),e(ae,Hs),e(ae,At),e(At,os),e(ae,Us),e(ae,zt),e(zt,xt),e(ae,Rs),e(ae,Ct),e(Ct,ns),e(ae,Gs),e(ae,Mt),e(Mt,rs),e(ae,Bs),e(ae,Pt),e(Pt,Vs),e(ae,Le),e(ae,St),e(St,is),e(ae,Ks),e(ae,Dt),e(Dt,ls),e(ae,Ys),u(j,ds,J),F(Ue,j,J),u(j,ps,J),u(j,Ee,J),e(Ee,cs),e(Ee,nt),e(nt,Js),e(Ee,Nt),e(Ee,Ot),e(Ot,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),u(j,us,J),F(et,j,J),Lt=!0},p:rn,i(j){Lt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Lt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Lt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(Ft),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(us),x(et,j)}}}function ak(U){let l,_;return l=new ln({props:{$$slots:{default:[sk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ok(U){let l,_,c,f,v,b,T,k;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

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
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=o("p"),_=s("You can then fine-tune "),c=o("a"),f=s("TapasForQuestionAnswering"),v=s(" as follows (shown here for the weak supervision for aggregation case):"),b=d(),$(T.$$.fragment),this.h()},l(y){l=n(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=n(D,"A",{href:!0});var q=r(c);f=a(q,"TapasForQuestionAnswering"),q.forEach(t),v=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),b=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(y,D){u(y,l,D),e(l,_),e(l,c),e(c,f),e(l,v),u(y,b,D),F(T,y,D),k=!0},p:rn,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(b),x(T,y)}}}function nk(U){let l,_;return l=new ln({props:{$$slots:{default:[ok]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function rk(U){let l,_,c,f,v,b,T,k;return T=new Ve({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=o("p"),_=s("You can then fine-tune "),c=o("a"),f=s("TFTapasForQuestionAnswering"),v=s(" as follows (shown here for the weak supervision for aggregation case):"),b=d(),$(T.$$.fragment),this.h()},l(y){l=n(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=n(D,"A",{href:!0});var q=r(c);f=a(q,"TFTapasForQuestionAnswering"),q.forEach(t),v=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),b=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(y,D){u(y,l,D),e(l,_),e(l,c),e(c,f),e(l,v),u(y,b,D),F(T,y,D),k=!0},p:rn,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(b),x(T,y)}}}function ik(U){let l,_;return l=new ln({props:{$$slots:{default:[rk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function lk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W;return L=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),_=s("Here we explain how you can use "),c=o("a"),f=s("TapasForQuestionAnswering"),v=s(" or "),b=o("a"),T=s("TFTapasForQuestionAnswering"),k=s(" for inference (i.e. making predictions on new data). For inference, only "),y=o("code"),D=s("input_ids"),q=s(", "),H=o("code"),B=s("attention_mask"),V=s(" and "),R=o("code"),K=s("token_type_ids"),re=s(" (which you can obtain using "),I=o("a"),O=s("TapasTokenizer"),w=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o("code"),G=s("convert_logits_to_predictions"),C=s(" method to convert these into predicted coordinates and optional aggregation indices."),N=d(),ee=o("p"),te=s("However, note that inference is "),ce=o("strong"),oe=s("different"),se=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),P=d(),$(L.$$.fragment),this.h()},l(X){l=n(X,"P",{});var Q=r(l);_=a(Q,"Here we explain how you can use "),c=n(Q,"A",{href:!0});var Y=r(c);f=a(Y,"TapasForQuestionAnswering"),Y.forEach(t),v=a(Q," or "),b=n(Q,"A",{href:!0});var ge=r(b);T=a(ge,"TFTapasForQuestionAnswering"),ge.forEach(t),k=a(Q," for inference (i.e. making predictions on new data). For inference, only "),y=n(Q,"CODE",{});var ue=r(y);D=a(ue,"input_ids"),ue.forEach(t),q=a(Q,", "),H=n(Q,"CODE",{});var _e=r(H);B=a(_e,"attention_mask"),_e.forEach(t),V=a(Q," and "),R=n(Q,"CODE",{});var me=r(R);K=a(me,"token_type_ids"),me.forEach(t),re=a(Q," (which you can obtain using "),I=n(Q,"A",{href:!0});var ne=r(I);O=a(ne,"TapasTokenizer"),ne.forEach(t),w=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n(Q,"CODE",{});var qe=r(M);G=a(qe,"convert_logits_to_predictions"),qe.forEach(t),C=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(t),N=p(X),ee=n(X,"P",{});var ie=r(ee);te=a(ie,"However, note that inference is "),ce=n(ie,"STRONG",{});var be=r(ce);oe=a(be,"different"),be.forEach(t),se=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(t),P=p(X),E(L.$$.fragment,X),this.h()},h(){h(c,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(b,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(I,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,Q){u(X,l,Q),e(l,_),e(l,c),e(c,f),e(l,v),e(l,b),e(b,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),e(l,M),e(M,G),e(l,C),u(X,N,Q),u(X,ee,Q),e(ee,te),e(ee,ce),e(ce,oe),e(ee,se),u(X,P,Q),F(L,X,Q),W=!0},p:rn,i(X){W||(A(L.$$.fragment,X),W=!0)},o(X){z(L.$$.fragment,X),W=!1},d(X){X&&t(l),X&&t(N),X&&t(ee),X&&t(P),x(L,X)}}}function dk(U){let l,_;return l=new ln({props:{$$slots:{default:[lk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function pk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se;return oe=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),_=s("Here we explain how you can use "),c=o("a"),f=s("TFTapasForQuestionAnswering"),v=s(" for inference (i.e. making predictions on new data). For inference, only "),b=o("code"),T=s("input_ids"),k=s(", "),y=o("code"),D=s("attention_mask"),q=s(" and "),H=o("code"),B=s("token_type_ids"),V=s(" (which you can obtain using "),R=o("a"),K=s("TapasTokenizer"),re=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=o("code"),O=s("convert_logits_to_predictions"),w=s(" method to convert these into predicted coordinates and optional aggregation indices."),M=d(),G=o("p"),C=s("However, note that inference is "),N=o("strong"),ee=s("different"),te=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=d(),$(oe.$$.fragment),this.h()},l(P){l=n(P,"P",{});var L=r(l);_=a(L,"Here we explain how you can use "),c=n(L,"A",{href:!0});var W=r(c);f=a(W,"TFTapasForQuestionAnswering"),W.forEach(t),v=a(L," for inference (i.e. making predictions on new data). For inference, only "),b=n(L,"CODE",{});var X=r(b);T=a(X,"input_ids"),X.forEach(t),k=a(L,", "),y=n(L,"CODE",{});var Q=r(y);D=a(Q,"attention_mask"),Q.forEach(t),q=a(L," and "),H=n(L,"CODE",{});var Y=r(H);B=a(Y,"token_type_ids"),Y.forEach(t),V=a(L," (which you can obtain using "),R=n(L,"A",{href:!0});var ge=r(R);K=a(ge,"TapasTokenizer"),ge.forEach(t),re=a(L,") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=n(L,"CODE",{});var ue=r(I);O=a(ue,"convert_logits_to_predictions"),ue.forEach(t),w=a(L," method to convert these into predicted coordinates and optional aggregation indices."),L.forEach(t),M=p(P),G=n(P,"P",{});var _e=r(G);C=a(_e,"However, note that inference is "),N=n(_e,"STRONG",{});var me=r(N);ee=a(me,"different"),me.forEach(t),te=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(t),ce=p(P),E(oe.$$.fragment,P),this.h()},h(){h(c,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(R,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer")},m(P,L){u(P,l,L),e(l,_),e(l,c),e(c,f),e(l,v),e(l,b),e(b,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),u(P,M,L),u(P,G,L),e(G,C),e(G,N),e(N,ee),e(G,te),u(P,ce,L),F(oe,P,L),se=!0},p:rn,i(P){se||(A(oe.$$.fragment,P),se=!0)},o(P){z(oe.$$.fragment,P),se=!1},d(P){P&&t(l),P&&t(M),P&&t(G),P&&t(ce),x(oe,P)}}}function ck(U){let l,_;return l=new ln({props:{$$slots:{default:[pk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function hk(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function uk(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function mk(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function fk(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function gk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,be;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),v=o("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),be=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var ve=r(f);v=n(ve,"LI",{});var ze=r(v);b=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),k=n(ve,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),ve.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);be=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,b),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,be)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function _k(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function Tk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,be;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),v=o("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),be=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var ve=r(f);v=n(ve,"LI",{});var ze=r(v);b=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),k=n(ve,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),ve.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);be=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,b),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,be)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function vk(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function bk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,be;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),v=o("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),be=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var ve=r(f);v=n(ve,"LI",{});var ze=r(v);b=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),k=n(ve,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),ve.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);be=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,b),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,be)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function wk(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function yk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,be;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),v=o("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),be=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var ve=r(f);v=n(ve,"LI",{});var ze=r(v);b=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),k=n(ve,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),ve.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);be=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,b),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,be)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function kk(U){let l,_,c,f,v;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){l=n(b,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(b,T){u(b,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(b){b&&t(l)}}}function qk(U){let l,_,c,f,v,b,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,be,g,S,ve,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,ut,mt,pa,ft,gt,Ds,tt,Ns,Os,Ke,Pe,Ls,wt,ke,yt,kt,Qs,qt,jt,Is,$t,vs,Gt,Et,bs,Ye,$e,Ws,Ft,ae,ot,Bt,Hs,At,os,Us,zt,xt,Rs,Ct,ns,Gs,Mt,rs,Bs,Pt,Vs,Le,St,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,nt,Js,Nt,Ot,Xs,Zs,Re,ea,hs,us,et,Lt,j,J,xa,ta,Ca,ca,Qt,st,sa,rt,Ma,aa,Pa,ha,Ie,ms,ws,Ge,Sa,ua,ys,oa,fs,ma,fe,Da,ks,Na,Oa,fa,_t,na,gs,La,Fe,Qa,ra,Ia,Wa,Ha,he,Ua,ia,Ra,Ga,ga,qs,Ba,_a,Ce,la,It,da,Ki,Mc,Pc,Yi,Ji,Sc,Dc,Xi,Zi,Nc,Oc,Va,Ka,el,Lc,Qc,tl,Ic,Wc,sl,Hc,Uc,Ya,al,Rc,Gc,ol,Bc,Vc,nl,Kc,Yc,Ja,rl,Jc,Xc,il,Zc,eh,ll,th,sp,qo,ap,jo,sh,dn,ah,oh,op,$o,nh,pn,rh,ih,np,Hr,dl,lh,rp,Eo,dh,cn,ph,ch,ip,We,Ur,pl,hh,uh,mh,Rr,cl,fh,gh,_h,Gr,hl,Th,vh,bh,Br,ul,wh,yh,kh,Vr,ml,qh,jh,$h,Kr,fl,Eh,Fh,Ah,Yr,gl,zh,xh,Ch,Jr,_l,Mh,Ph,Sh,Xr,Tl,Dh,Nh,lp,Tt,Oh,hn,Lh,Qh,un,Ih,Wh,vl,Hh,Uh,bl,Rh,Gh,wl,Bh,Vh,dp,Zr,yl,Kh,pp,Fo,cp,Se,Yh,kl,Jh,Xh,ql,Zh,eu,jl,tu,su,$l,au,ou,El,nu,ru,Fl,iu,lu,ei,du,pu,mn,cu,hu,fn,uu,mu,hp,ti,fu,up,Ao,mp,Xa,zo,Al,gn,gu,zl,_u,fp,xo,gp,vt,Tu,xl,vu,bu,Cl,wu,yu,Ml,ku,qu,_n,ju,$u,Tn,Eu,Fu,_p,Za,Co,Pl,vn,Au,Sl,zu,Tp,eo,bn,xu,wn,Cu,si,Mu,Pu,vp,to,Mo,Dl,yn,Su,Nl,Du,bp,Wt,kn,Nu,_s,Ou,ai,Lu,Qu,Ol,Iu,Wu,Ll,Hu,Uu,oi,Ru,Gu,Bu,qn,Vu,jn,Ku,Yu,Ju,Ql,Xu,Zu,$n,wp,so,Po,Il,En,em,Wl,tm,yp,Be,Fn,sm,Hl,am,om,Qe,nm,ni,rm,im,ri,lm,dm,Ul,pm,cm,Rl,hm,um,Gl,mm,fm,Bl,gm,_m,Vl,Tm,vm,Kl,bm,wm,Yl,ym,km,qm,it,Jl,jm,$m,Xl,Em,Fm,Zl,Am,zm,ed,xm,Cm,td,Mm,Pm,sd,Sm,Dm,ad,Nm,Om,ii,li,Lm,Qm,Im,So,An,Wm,od,Hm,Um,Ta,zn,Rm,xn,Gm,di,Bm,Vm,Km,Cn,Ym,Mn,Jm,Xm,Zm,pi,Pn,kp,ao,Do,nd,Sn,ef,rd,tf,qp,lt,Dn,sf,Nn,af,ci,of,nf,rf,On,lf,Ln,df,pf,cf,Qn,hf,hi,uf,mf,ff,In,gf,Wn,_f,Tf,vf,Vt,Hn,bf,oo,wf,ui,yf,kf,id,qf,jf,$f,No,Ef,ld,Ff,Af,Un,jp,no,Oo,dd,Rn,zf,pd,xf,$p,Ts,Gn,Cf,ro,Mf,cd,Pf,Sf,mi,Df,Nf,Of,Bn,Lf,Vn,Qf,If,Wf,Kt,Kn,Hf,io,Uf,fi,Rf,Gf,hd,Bf,Vf,Kf,Lo,Yf,ud,Jf,Xf,Yn,Ep,lo,Qo,md,Jn,Zf,fd,eg,Fp,Ht,Xn,tg,gd,sg,ag,Zn,og,gi,ng,rg,ig,er,lg,tr,dg,pg,cg,Yt,sr,hg,po,ug,_i,mg,fg,_d,gg,_g,Tg,Io,vg,Td,bg,wg,ar,Ap,co,Wo,vd,or,yg,bd,kg,zp,Ut,nr,qg,ho,jg,wd,$g,Eg,yd,Fg,Ag,zg,rr,xg,Ti,Cg,Mg,Pg,ir,Sg,lr,Dg,Ng,Og,Jt,dr,Lg,uo,Qg,vi,Ig,Wg,kd,Hg,Ug,Rg,Ho,Gg,qd,Bg,Vg,pr,xp,mo,Uo,jd,cr,Kg,$d,Yg,Cp,dt,hr,Jg,Ed,Xg,Zg,ur,e_,bi,t_,s_,a_,mr,o_,fr,n_,r_,i_,Ro,l_,Xt,gr,d_,fo,p_,wi,c_,h_,Fd,u_,m_,f_,Go,g_,Ad,__,T_,_r,Mp,go,Bo,zd,Tr,v_,xd,b_,Pp,pt,vr,w_,br,y_,Cd,k_,q_,j_,wr,$_,yi,E_,F_,A_,yr,z_,kr,x_,C_,M_,Vo,P_,Zt,qr,S_,_o,D_,ki,N_,O_,Md,L_,Q_,I_,Ko,W_,Pd,H_,U_,jr,Sp,To,Yo,Sd,$r,R_,Dd,G_,Dp,ct,Er,B_,Nd,V_,K_,Fr,Y_,qi,J_,X_,Z_,Ar,eT,zr,tT,sT,aT,Jo,oT,es,xr,nT,vo,rT,ji,iT,lT,Od,dT,pT,cT,Xo,hT,Ld,uT,mT,Cr,Np,bo,Zo,Qd,Mr,fT,Id,gT,Op,ht,Pr,_T,wo,TT,Wd,vT,bT,Hd,wT,yT,kT,Sr,qT,$i,jT,$T,ET,Dr,FT,Nr,AT,zT,xT,en,CT,ts,Or,MT,yo,PT,Ei,ST,DT,Ud,NT,OT,LT,tn,QT,Rd,IT,WT,Lr,Lp;return b=new Rt({}),V=new Rt({}),rt=new Rt({}),qo=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Zy],pytorch:[Jy]},$$scope:{ctx:U}}}),Fo=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ak],pytorch:[tk]},$$scope:{ctx:U}}}),Ao=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ik],pytorch:[nk]},$$scope:{ctx:U}}}),gn=new Rt({}),xo=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ck],pytorch:[dk]},$$scope:{ctx:U}}}),vn=new Rt({}),bn=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L106"}}),yn=new Rt({}),kn=new He({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/configuration_tapas.py#L37"}}),$n=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),En=new Rt({}),Fn=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/tokenization_tapas.py#L188"}}),An=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/tokenization_tapas.py#L528"}}),zn=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/tokenization_tapas.py#L1890",returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Pn=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/tokenization_tapas.py#L396"}}),Sn=new Rt({}),Dn=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L856"}}),Hn=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L894",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new Ms({props:{$$slots:{default:[hk]},$$scope:{ctx:U}}}),Un=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Rn=new Rt({}),Gn=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L1009"}}),Kn=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L1028",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new Ms({props:{$$slots:{default:[uk]},$$scope:{ctx:U}}}),Yn=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Jn=new Rt({}),Xn=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L1468"}}),sr=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L1480",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Ms({props:{$$slots:{default:[mk]},$$scope:{ctx:U}}}),ar=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),or=new Rt({}),nr=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L1124"}}),dr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
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
<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tapas.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Ms({props:{$$slots:{default:[fk]},$$scope:{ctx:U}}}),pr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),cr=new Rt({}),hr=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L961"}}),Ro=new Ms({props:{$$slots:{default:[gk]},$$scope:{ctx:U}}}),gr=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L967",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new Ms({props:{$$slots:{default:[_k]},$$scope:{ctx:U}}}),_r=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Tr=new Rt({}),vr=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1036"}}),Vo=new Ms({props:{$$slots:{default:[Tk]},$$scope:{ctx:U}}}),qr=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1052",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ko=new Ms({props:{$$slots:{default:[vk]},$$scope:{ctx:U}}}),jr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$r=new Rt({}),Er=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1574"}}),Jo=new Ms({props:{$$slots:{default:[bk]},$$scope:{ctx:U}}}),xr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1585",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xo=new Ms({props:{$$slots:{default:[wk]},$$scope:{ctx:U}}}),Cr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mr=new Rt({}),Pr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1242"}}),en=new Ms({props:{$$slots:{default:[yk]},$$scope:{ctx:U}}}),Or=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
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
<a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1264",returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"
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
`}}),tn=new Ms({props:{$$slots:{default:[kk]},$$scope:{ctx:U}}}),Lr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("meta"),_=d(),c=o("h1"),f=o("a"),v=o("span"),$(b.$$.fragment),T=d(),k=o("span"),y=s("TAPAS"),D=d(),q=o("h2"),H=o("a"),B=o("span"),$(V.$$.fragment),R=d(),K=o("span"),re=s("Overview"),I=d(),O=o("p"),w=s("The TAPAS model was proposed in "),M=o("a"),G=s("TAPAS: Weakly Supervised Table Parsing via Pre-training"),C=s(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),N=d(),ee=o("p"),te=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=d(),oe=o("ul"),se=o("li"),P=o("a"),L=s("SQA"),W=s(" (Sequential Question Answering by Microsoft)"),X=d(),Q=o("li"),Y=o("a"),ge=s("WTQ"),ue=s(" (Wiki Table Questions by Stanford University)"),_e=d(),me=o("li"),ne=o("a"),qe=s("WikiSQL"),ie=s(" (by Salesforce)."),be=d(),g=o("p"),S=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),ve=d(),ze=o("p"),we=s("The abstract from the paper is the following:"),le=d(),xe=o("p"),Me=o("em"),Z=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),de=d(),pe=o("p"),De=s("In addition, the authors have further pre-trained TAPAS to recognize "),je=o("strong"),Te=s("table entailment"),Ne=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=o("a"),Ae=s("TabFact"),Oe=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o("a"),Ps=s("Understanding tables with intermediate pre-training"),Ss=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),ut=d(),mt=o("img"),ft=d(),gt=o("small"),Ds=s("TAPAS architecture. Taken from the "),tt=o("a"),Ns=s("original blog post"),Os=s("."),Ke=d(),Pe=o("p"),Ls=s("This model was contributed by "),wt=o("a"),ke=s("nielsr"),yt=s(". The Tensorflow version of this model was contributed by "),kt=o("a"),Qs=s("kamalkraj"),qt=s(". The original code can be found "),jt=o("a"),Is=s("here"),$t=s("."),vs=d(),Gt=o("p"),Et=s("Tips:"),bs=d(),Ye=o("ul"),$e=o("li"),Ws=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ft=o("code"),ae=s("reset_position_index_per_cell"),ot=s(" parameter of "),Bt=o("a"),Hs=s("TapasConfig"),At=s(", which is set to "),os=o("code"),Us=s("True"),zt=s(" by default. The default versions of the models available on the "),xt=o("a"),Rs=s("hub"),Ct=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),ns=o("code"),Gs=s('revision="no_reset"'),Mt=s(" when calling the "),rs=o("code"),Bs=s("from_pretrained()"),Pt=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vs=d(),Le=o("li"),St=s("TAPAS is based on BERT, so "),is=o("code"),Ks=s("TAPAS-base"),Dt=s(" for example corresponds to a "),ls=o("code"),Ys=s("BERT-base"),ds=s(" architecture. Of course, "),Ue=o("code"),ps=s("TAPAS-large"),Ee=s(" will result in the best performance (the results reported in the paper are from "),cs=o("code"),nt=s("TAPAS-large"),Js=s("). Results of the various sized models are shown on the "),Nt=o("a"),Ot=s("original Github repository"),Xs=s("."),Zs=d(),Re=o("li"),ea=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=o("code"),us=s("prev_labels"),et=s(" token type ids can be overwritten by the predicted "),Lt=o("code"),j=s("labels"),J=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),xa=d(),ta=o("li"),Ca=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ca=d(),Qt=o("h2"),st=o("a"),sa=o("span"),$(rt.$$.fragment),Ma=d(),aa=o("span"),Pa=s("Usage: fine-tuning"),ha=d(),Ie=o("p"),ms=s("Here we explain how you can fine-tune "),ws=o("a"),Ge=s("TapasForQuestionAnswering"),Sa=s(" on your own dataset."),ua=d(),ys=o("p"),oa=o("strong"),fs=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),ma=d(),fe=o("p"),Da=s("Basically, there are 3 different ways in which one can fine-tune "),ks=o("a"),Na=s("TapasForQuestionAnswering"),Oa=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),fa=d(),_t=o("ol"),na=o("li"),gs=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),La=d(),Fe=o("li"),Qa=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=o("strong"),Ia=s("weak supervision"),Wa=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ha=d(),he=o("li"),Ua=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=o("strong"),Ra=s("strong supervision"),Ga=s(". Here, learning the appropriate aggregation operator is much easier."),ga=d(),qs=o("p"),Ba=s("To summarize:"),_a=d(),Ce=o("table"),la=o("thead"),It=o("tr"),da=o("th"),Ki=o("strong"),Mc=s("Task"),Pc=d(),Yi=o("th"),Ji=o("strong"),Sc=s("Example dataset"),Dc=d(),Xi=o("th"),Zi=o("strong"),Nc=s("Description"),Oc=d(),Va=o("tbody"),Ka=o("tr"),el=o("td"),Lc=s("Conversational"),Qc=d(),tl=o("td"),Ic=s("SQA"),Wc=d(),sl=o("td"),Hc=s("Conversational, only cell selection questions"),Uc=d(),Ya=o("tr"),al=o("td"),Rc=s("Weak supervision for aggregation"),Gc=d(),ol=o("td"),Bc=s("WTQ"),Vc=d(),nl=o("td"),Kc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yc=d(),Ja=o("tr"),rl=o("td"),Jc=s("Strong supervision for aggregation"),Xc=d(),il=o("td"),Zc=s("WikiSQL-supervised"),eh=d(),ll=o("td"),th=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),sp=d(),$(qo.$$.fragment),ap=d(),jo=o("p"),sh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),dn=o("a"),ah=s("here"),oh=s(" for more info."),op=d(),$o=o("p"),nh=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),pn=o("a"),rh=s("here"),ih=s("."),np=d(),Hr=o("p"),dl=o("strong"),lh=s("STEP 2: Prepare your data in the SQA format"),rp=d(),Eo=o("p"),dh=s("Second, no matter what you picked above, you should prepare your dataset in the "),cn=o("a"),ph=s("SQA"),ch=s(" format. This format is a TSV/CSV file with the following columns:"),ip=d(),We=o("ul"),Ur=o("li"),pl=o("code"),hh=s("id"),uh=s(": optional, id of the table-question pair, for bookkeeping purposes."),mh=d(),Rr=o("li"),cl=o("code"),fh=s("annotator"),gh=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),_h=d(),Gr=o("li"),hl=o("code"),Th=s("position"),vh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),bh=d(),Br=o("li"),ul=o("code"),wh=s("question"),yh=s(": string"),kh=d(),Vr=o("li"),ml=o("code"),qh=s("table_file"),jh=s(": string, name of a csv file containing the tabular data"),$h=d(),Kr=o("li"),fl=o("code"),Eh=s("answer_coordinates"),Fh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Ah=d(),Yr=o("li"),gl=o("code"),zh=s("answer_text"),xh=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Ch=d(),Jr=o("li"),_l=o("code"),Mh=s("aggregation_label"),Ph=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Sh=d(),Xr=o("li"),Tl=o("code"),Dh=s("float_answer"),Nh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),lp=d(),Tt=o("p"),Oh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),hn=o("a"),Lh=s("here"),Qh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),un=o("a"),Ih=s("here"),Wh=s(". Interestingly, these conversion scripts are not perfect (the "),vl=o("code"),Hh=s("answer_coordinates"),Uh=s(" and "),bl=o("code"),Rh=s("float_answer"),Gh=s(" fields are populated based on the "),wl=o("code"),Bh=s("answer_text"),Vh=s("), meaning that WTQ and WikiSQL results could actually be improved."),dp=d(),Zr=o("p"),yl=o("strong"),Kh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),pp=d(),$(Fo.$$.fragment),cp=d(),Se=o("p"),Yh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),kl=o("strong"),Jh=s("not conversational"),Xh=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),ql=o("code"),Zh=s("queries"),eu=s(", "),jl=o("code"),tu=s("answer_coordinates"),su=s(" and "),$l=o("code"),au=s("answer_text"),ou=s(" per table (in the order of their "),El=o("code"),nu=s("position"),ru=s(`
index) and batch encode each table with its questions. This will make sure that the `),Fl=o("code"),iu=s("prev_labels"),lu=s(" token types (see docs of "),ei=o("a"),du=s("TapasTokenizer"),pu=s(") are set correctly. See "),mn=o("a"),cu=s("this notebook"),hu=s(" for more info. See "),fn=o("a"),uu=s("this notebook"),mu=s(" for more info regarding using the TensorFlow model."),hp=d(),ti=o("p"),fu=s("**STEP 4: Train (fine-tune) the model"),up=d(),$(Ao.$$.fragment),mp=d(),Xa=o("h2"),zo=o("a"),Al=o("span"),$(gn.$$.fragment),gu=d(),zl=o("span"),_u=s("Usage: inference"),fp=d(),$(xo.$$.fragment),gp=d(),vt=o("p"),Tu=s("In case of a conversational set-up, then each table-question pair must be provided "),xl=o("strong"),vu=s("sequentially"),bu=s(" to the model, such that the "),Cl=o("code"),wu=s("prev_labels"),yu=s(" token types can be overwritten by the predicted "),Ml=o("code"),ku=s("labels"),qu=s(" of the previous table-question pair. Again, more info can be found in "),_n=o("a"),ju=s("this notebook"),$u=s(" (for PyTorch) and "),Tn=o("a"),Eu=s("this notebook"),Fu=s(" (for TensorFlow)."),_p=d(),Za=o("h2"),Co=o("a"),Pl=o("span"),$(vn.$$.fragment),Au=d(),Sl=o("span"),zu=s("TAPAS specific outputs"),Tp=d(),eo=o("div"),$(bn.$$.fragment),xu=d(),wn=o("p"),Cu=s("Output type of "),si=o("a"),Mu=s("TapasForQuestionAnswering"),Pu=s("."),vp=d(),to=o("h2"),Mo=o("a"),Dl=o("span"),$(yn.$$.fragment),Su=d(),Nl=o("span"),Du=s("TapasConfig"),bp=d(),Wt=o("div"),$(kn.$$.fragment),Nu=d(),_s=o("p"),Ou=s("This is the configuration class to store the configuration of a "),ai=o("a"),Lu=s("TapasModel"),Qu=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=o("em"),Iu=s("tapas-base-finetuned-sqa"),Wu=s(` architecture.
Configuration objects inherit from `),Ll=o("code"),Hu=s("PreTrainedConfig"),Uu=s(` and can be used to control the model outputs. Read the
documentation from `),oi=o("a"),Ru=s("PretrainedConfig"),Gu=s(" for more information."),Bu=d(),qn=o("p"),Vu=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),jn=o("a"),Ku=s("https://github.com/google-research/tapas/tree/master"),Yu=s("."),Ju=d(),Ql=o("p"),Xu=s("Example:"),Zu=d(),$($n.$$.fragment),wp=d(),so=o("h2"),Po=o("a"),Il=o("span"),$(En.$$.fragment),em=d(),Wl=o("span"),tm=s("TapasTokenizer"),yp=d(),Be=o("div"),$(Fn.$$.fragment),sm=d(),Hl=o("p"),am=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),om=d(),Qe=o("p"),nm=s("This tokenizer inherits from "),ni=o("a"),rm=s("PreTrainedTokenizer"),im=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=o("a"),lm=s("TapasTokenizer"),dm=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=o("code"),pm=s("segment_ids"),cm=s(`,
`),Rl=o("code"),hm=s("column_ids"),um=s(", "),Gl=o("code"),mm=s("row_ids"),fm=s(", "),Bl=o("code"),gm=s("prev_labels"),_m=s(", "),Vl=o("code"),Tm=s("column_ranks"),vm=s(", "),Kl=o("code"),bm=s("inv_column_ranks"),wm=s(" and "),Yl=o("code"),ym=s("numeric_relations"),km=s(":"),qm=d(),it=o("ul"),Jl=o("li"),jm=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),$m=d(),Xl=o("li"),Em=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Fm=d(),Zl=o("li"),Am=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),zm=d(),ed=o("li"),xm=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Cm=d(),td=o("li"),Mm=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Pm=d(),sd=o("li"),Sm=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Dm=d(),ad=o("li"),Nm=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Om=d(),ii=o("p"),li=o("a"),Lm=s("TapasTokenizer"),Qm=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Im=d(),So=o("div"),$(An.$$.fragment),Wm=d(),od=o("p"),Hm=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Um=d(),Ta=o("div"),$(zn.$$.fragment),Rm=d(),xn=o("p"),Gm=s("Converts logits of "),di=o("a"),Bm=s("TapasForQuestionAnswering"),Vm=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Km=d(),Cn=o("p"),Ym=s(`The original implementation, on which this function is based, can be found
`),Mn=o("a"),Jm=s("here"),Xm=s("."),Zm=d(),pi=o("div"),$(Pn.$$.fragment),kp=d(),ao=o("h2"),Do=o("a"),nd=o("span"),$(Sn.$$.fragment),ef=d(),rd=o("span"),tf=s("TapasModel"),qp=d(),lt=o("div"),$(Dn.$$.fragment),sf=d(),Nn=o("p"),af=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=o("a"),of=s("PreTrainedModel"),nf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf=d(),On=o("p"),lf=s("This model is also a PyTorch "),Ln=o("a"),df=s("torch.nn.Module"),pf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cf=d(),Qn=o("p"),hf=s("This class is a small change compared to "),hi=o("a"),uf=s("BertModel"),mf=s(", taking into account the additional token type ids."),ff=d(),In=o("p"),gf=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wn=o("a"),_f=s(`Attention is
all you need`),Tf=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),vf=d(),Vt=o("div"),$(Hn.$$.fragment),bf=d(),oo=o("p"),wf=s("The "),ui=o("a"),yf=s("TapasModel"),kf=s(" forward method, overrides the "),id=o("code"),qf=s("__call__"),jf=s(" special method."),$f=d(),$(No.$$.fragment),Ef=d(),ld=o("p"),Ff=s("Examples:"),Af=d(),$(Un.$$.fragment),jp=d(),no=o("h2"),Oo=o("a"),dd=o("span"),$(Rn.$$.fragment),zf=d(),pd=o("span"),xf=s("TapasForMaskedLM"),$p=d(),Ts=o("div"),$(Gn.$$.fragment),Cf=d(),ro=o("p"),Mf=s("Tapas Model with a "),cd=o("code"),Pf=s("language modeling"),Sf=s(` head on top.
This model inherits from `),mi=o("a"),Df=s("PreTrainedModel"),Nf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=d(),Bn=o("p"),Lf=s("This model is also a PyTorch "),Vn=o("a"),Qf=s("torch.nn.Module"),If=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wf=d(),Kt=o("div"),$(Kn.$$.fragment),Hf=d(),io=o("p"),Uf=s("The "),fi=o("a"),Rf=s("TapasForMaskedLM"),Gf=s(" forward method, overrides the "),hd=o("code"),Bf=s("__call__"),Vf=s(" special method."),Kf=d(),$(Lo.$$.fragment),Yf=d(),ud=o("p"),Jf=s("Examples:"),Xf=d(),$(Yn.$$.fragment),Ep=d(),lo=o("h2"),Qo=o("a"),md=o("span"),$(Jn.$$.fragment),Zf=d(),fd=o("span"),eg=s("TapasForSequenceClassification"),Fp=d(),Ht=o("div"),$(Xn.$$.fragment),tg=d(),gd=o("p"),sg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),ag=d(),Zn=o("p"),og=s("This model inherits from "),gi=o("a"),ng=s("PreTrainedModel"),rg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=d(),er=o("p"),lg=s("This model is also a PyTorch "),tr=o("a"),dg=s("torch.nn.Module"),pg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cg=d(),Yt=o("div"),$(sr.$$.fragment),hg=d(),po=o("p"),ug=s("The "),_i=o("a"),mg=s("TapasForSequenceClassification"),fg=s(" forward method, overrides the "),_d=o("code"),gg=s("__call__"),_g=s(" special method."),Tg=d(),$(Io.$$.fragment),vg=d(),Td=o("p"),bg=s("Examples:"),wg=d(),$(ar.$$.fragment),Ap=d(),co=o("h2"),Wo=o("a"),vd=o("span"),$(or.$$.fragment),yg=d(),bd=o("span"),kg=s("TapasForQuestionAnswering"),zp=d(),Ut=o("div"),$(nr.$$.fragment),qg=d(),ho=o("p"),jg=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),wd=o("code"),$g=s("logits"),Eg=s(" and optional "),yd=o("code"),Fg=s("logits_aggregation"),Ag=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),zg=d(),rr=o("p"),xg=s("This model inherits from "),Ti=o("a"),Cg=s("PreTrainedModel"),Mg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pg=d(),ir=o("p"),Sg=s("This model is also a PyTorch "),lr=o("a"),Dg=s("torch.nn.Module"),Ng=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Og=d(),Jt=o("div"),$(dr.$$.fragment),Lg=d(),uo=o("p"),Qg=s("The "),vi=o("a"),Ig=s("TapasForQuestionAnswering"),Wg=s(" forward method, overrides the "),kd=o("code"),Hg=s("__call__"),Ug=s(" special method."),Rg=d(),$(Ho.$$.fragment),Gg=d(),qd=o("p"),Bg=s("Examples:"),Vg=d(),$(pr.$$.fragment),xp=d(),mo=o("h2"),Uo=o("a"),jd=o("span"),$(cr.$$.fragment),Kg=d(),$d=o("span"),Yg=s("TFTapasModel"),Cp=d(),dt=o("div"),$(hr.$$.fragment),Jg=d(),Ed=o("p"),Xg=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Zg=d(),ur=o("p"),e_=s("This model inherits from "),bi=o("a"),t_=s("TFPreTrainedModel"),s_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a_=d(),mr=o("p"),o_=s("This model is also a "),fr=o("a"),n_=s("tf.keras.Model"),r_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i_=d(),$(Ro.$$.fragment),l_=d(),Xt=o("div"),$(gr.$$.fragment),d_=d(),fo=o("p"),p_=s("The "),wi=o("a"),c_=s("TFTapasModel"),h_=s(" forward method, overrides the "),Fd=o("code"),u_=s("__call__"),m_=s(" special method."),f_=d(),$(Go.$$.fragment),g_=d(),Ad=o("p"),__=s("Examples:"),T_=d(),$(_r.$$.fragment),Mp=d(),go=o("h2"),Bo=o("a"),zd=o("span"),$(Tr.$$.fragment),v_=d(),xd=o("span"),b_=s("TFTapasForMaskedLM"),Pp=d(),pt=o("div"),$(vr.$$.fragment),w_=d(),br=o("p"),y_=s("Tapas Model with a "),Cd=o("code"),k_=s("language modeling"),q_=s(" head on top."),j_=d(),wr=o("p"),$_=s("This model inherits from "),yi=o("a"),E_=s("TFPreTrainedModel"),F_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_=d(),yr=o("p"),z_=s("This model is also a "),kr=o("a"),x_=s("tf.keras.Model"),C_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),M_=d(),$(Vo.$$.fragment),P_=d(),Zt=o("div"),$(qr.$$.fragment),S_=d(),_o=o("p"),D_=s("The "),ki=o("a"),N_=s("TFTapasForMaskedLM"),O_=s(" forward method, overrides the "),Md=o("code"),L_=s("__call__"),Q_=s(" special method."),I_=d(),$(Ko.$$.fragment),W_=d(),Pd=o("p"),H_=s("Examples:"),U_=d(),$(jr.$$.fragment),Sp=d(),To=o("h2"),Yo=o("a"),Sd=o("span"),$($r.$$.fragment),R_=d(),Dd=o("span"),G_=s("TFTapasForSequenceClassification"),Dp=d(),ct=o("div"),$(Er.$$.fragment),B_=d(),Nd=o("p"),V_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),K_=d(),Fr=o("p"),Y_=s("This model inherits from "),qi=o("a"),J_=s("TFPreTrainedModel"),X_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=d(),Ar=o("p"),eT=s("This model is also a "),zr=o("a"),tT=s("tf.keras.Model"),sT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aT=d(),$(Jo.$$.fragment),oT=d(),es=o("div"),$(xr.$$.fragment),nT=d(),vo=o("p"),rT=s("The "),ji=o("a"),iT=s("TFTapasForSequenceClassification"),lT=s(" forward method, overrides the "),Od=o("code"),dT=s("__call__"),pT=s(" special method."),cT=d(),$(Xo.$$.fragment),hT=d(),Ld=o("p"),uT=s("Examples:"),mT=d(),$(Cr.$$.fragment),Np=d(),bo=o("h2"),Zo=o("a"),Qd=o("span"),$(Mr.$$.fragment),fT=d(),Id=o("span"),gT=s("TFTapasForQuestionAnswering"),Op=d(),ht=o("div"),$(Pr.$$.fragment),_T=d(),wo=o("p"),TT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wd=o("code"),vT=s("logits"),bT=s(" and optional "),Hd=o("code"),wT=s("logits_aggregation"),yT=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),kT=d(),Sr=o("p"),qT=s("This model inherits from "),$i=o("a"),jT=s("TFPreTrainedModel"),$T=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=d(),Dr=o("p"),FT=s("This model is also a "),Nr=o("a"),AT=s("tf.keras.Model"),zT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xT=d(),$(en.$$.fragment),CT=d(),ts=o("div"),$(Or.$$.fragment),MT=d(),yo=o("p"),PT=s("The "),Ei=o("a"),ST=s("TFTapasForQuestionAnswering"),DT=s(" forward method, overrides the "),Ud=o("code"),NT=s("__call__"),OT=s(" special method."),LT=d(),$(tn.$$.fragment),QT=d(),Rd=o("p"),IT=s("Examples:"),WT=d(),$(Lr.$$.fragment),this.h()},l(i){const m=By('[data-svelte="svelte-1phssyn"]',document.head);l=n(m,"META",{name:!0,content:!0}),m.forEach(t),_=p(i),c=n(i,"H1",{class:!0});var Qr=r(c);f=n(Qr,"A",{id:!0,class:!0,href:!0});var Gd=r(f);v=n(Gd,"SPAN",{});var Bd=r(v);E(b.$$.fragment,Bd),Bd.forEach(t),Gd.forEach(t),T=p(Qr),k=n(Qr,"SPAN",{});var Vd=r(k);y=a(Vd,"TAPAS"),Vd.forEach(t),Qr.forEach(t),D=p(i),q=n(i,"H2",{class:!0});var Ir=r(q);H=n(Ir,"A",{id:!0,class:!0,href:!0});var Kd=r(H);B=n(Kd,"SPAN",{});var Yd=r(B);E(V.$$.fragment,Yd),Yd.forEach(t),Kd.forEach(t),R=p(Ir),K=n(Ir,"SPAN",{});var Jd=r(K);re=a(Jd,"Overview"),Jd.forEach(t),Ir.forEach(t),I=p(i),O=n(i,"P",{});var Wr=r(O);w=a(Wr,"The TAPAS model was proposed in "),M=n(Wr,"A",{href:!0,rel:!0});var Xd=r(M);G=a(Xd,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Xd.forEach(t),C=a(Wr,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Wr.forEach(t),N=p(i),ee=n(i,"P",{});var Zd=r(ee);te=a(Zd,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Zd.forEach(t),ce=p(i),oe=n(i,"UL",{});var ko=r(oe);se=n(ko,"LI",{});var Fi=r(se);P=n(Fi,"A",{href:!0,rel:!0});var ep=r(P);L=a(ep,"SQA"),ep.forEach(t),W=a(Fi," (Sequential Question Answering by Microsoft)"),Fi.forEach(t),X=p(ko),Q=n(ko,"LI",{});var Ai=r(Q);Y=n(Ai,"A",{href:!0,rel:!0});var tp=r(Y);ge=a(tp,"WTQ"),tp.forEach(t),ue=a(Ai," (Wiki Table Questions by Stanford University)"),Ai.forEach(t),_e=p(ko),me=n(ko,"LI",{});var HT=r(me);ne=n(HT,"A",{href:!0,rel:!0});var ev=r(ne);qe=a(ev,"WikiSQL"),ev.forEach(t),ie=a(HT," (by Salesforce)."),HT.forEach(t),ko.forEach(t),be=p(i),g=n(i,"P",{});var tv=r(g);S=a(tv,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),tv.forEach(t),ve=p(i),ze=n(i,"P",{});var sv=r(ze);we=a(sv,"The abstract from the paper is the following:"),sv.forEach(t),le=p(i),xe=n(i,"P",{});var av=r(xe);Me=n(av,"EM",{});var ov=r(Me);Z=a(ov,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),ov.forEach(t),av.forEach(t),de=p(i),pe=n(i,"P",{});var sn=r(pe);De=a(sn,"In addition, the authors have further pre-trained TAPAS to recognize "),je=n(sn,"STRONG",{});var nv=r(je);Te=a(nv,"table entailment"),nv.forEach(t),Ne=a(sn,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=n(sn,"A",{href:!0,rel:!0});var rv=r(ye);Ae=a(rv,"TabFact"),rv.forEach(t),Oe=a(sn,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n(sn,"A",{href:!0,rel:!0});var iv=r(Ze);Ps=a(iv,"Understanding tables with intermediate pre-training"),iv.forEach(t),Ss=a(sn," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),sn.forEach(t),ut=p(i),mt=n(i,"IMG",{src:!0,alt:!0,width:!0}),ft=p(i),gt=n(i,"SMALL",{});var Qp=r(gt);Ds=a(Qp,"TAPAS architecture. Taken from the "),tt=n(Qp,"A",{href:!0});var lv=r(tt);Ns=a(lv,"original blog post"),lv.forEach(t),Os=a(Qp,"."),Qp.forEach(t),Ke=p(i),Pe=n(i,"P",{});var an=r(Pe);Ls=a(an,"This model was contributed by "),wt=n(an,"A",{href:!0,rel:!0});var dv=r(wt);ke=a(dv,"nielsr"),dv.forEach(t),yt=a(an,". The Tensorflow version of this model was contributed by "),kt=n(an,"A",{href:!0,rel:!0});var pv=r(kt);Qs=a(pv,"kamalkraj"),pv.forEach(t),qt=a(an,". The original code can be found "),jt=n(an,"A",{href:!0,rel:!0});var cv=r(jt);Is=a(cv,"here"),cv.forEach(t),$t=a(an,"."),an.forEach(t),vs=p(i),Gt=n(i,"P",{});var hv=r(Gt);Et=a(hv,"Tips:"),hv.forEach(t),bs=p(i),Ye=n(i,"UL",{});var on=r(Ye);$e=n(on,"LI",{});var ss=r($e);Ws=a(ss,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ft=n(ss,"CODE",{});var uv=r(Ft);ae=a(uv,"reset_position_index_per_cell"),uv.forEach(t),ot=a(ss," parameter of "),Bt=n(ss,"A",{href:!0});var mv=r(Bt);Hs=a(mv,"TapasConfig"),mv.forEach(t),At=a(ss,", which is set to "),os=n(ss,"CODE",{});var fv=r(os);Us=a(fv,"True"),fv.forEach(t),zt=a(ss," by default. The default versions of the models available on the "),xt=n(ss,"A",{href:!0,rel:!0});var gv=r(xt);Rs=a(gv,"hub"),gv.forEach(t),Ct=a(ss," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),ns=n(ss,"CODE",{});var _v=r(ns);Gs=a(_v,'revision="no_reset"'),_v.forEach(t),Mt=a(ss," when calling the "),rs=n(ss,"CODE",{});var Tv=r(rs);Bs=a(Tv,"from_pretrained()"),Tv.forEach(t),Pt=a(ss," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ss.forEach(t),Vs=p(on),Le=n(on,"LI",{});var js=r(Le);St=a(js,"TAPAS is based on BERT, so "),is=n(js,"CODE",{});var vv=r(is);Ks=a(vv,"TAPAS-base"),vv.forEach(t),Dt=a(js," for example corresponds to a "),ls=n(js,"CODE",{});var bv=r(ls);Ys=a(bv,"BERT-base"),bv.forEach(t),ds=a(js," architecture. Of course, "),Ue=n(js,"CODE",{});var wv=r(Ue);ps=a(wv,"TAPAS-large"),wv.forEach(t),Ee=a(js," will result in the best performance (the results reported in the paper are from "),cs=n(js,"CODE",{});var yv=r(cs);nt=a(yv,"TAPAS-large"),yv.forEach(t),Js=a(js,"). Results of the various sized models are shown on the "),Nt=n(js,"A",{href:!0,rel:!0});var kv=r(Nt);Ot=a(kv,"original Github repository"),kv.forEach(t),Xs=a(js,"."),js.forEach(t),Zs=p(on),Re=n(on,"LI",{});var zi=r(Re);ea=a(zi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=n(zi,"CODE",{});var qv=r(hs);us=a(qv,"prev_labels"),qv.forEach(t),et=a(zi," token type ids can be overwritten by the predicted "),Lt=n(zi,"CODE",{});var jv=r(Lt);j=a(jv,"labels"),jv.forEach(t),J=a(zi," of the model to the previous question. See \u201CUsage\u201D section for more info."),zi.forEach(t),xa=p(on),ta=n(on,"LI",{});var $v=r(ta);Ca=a($v,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),$v.forEach(t),on.forEach(t),ca=p(i),Qt=n(i,"H2",{class:!0});var Ip=r(Qt);st=n(Ip,"A",{id:!0,class:!0,href:!0});var Ev=r(st);sa=n(Ev,"SPAN",{});var Fv=r(sa);E(rt.$$.fragment,Fv),Fv.forEach(t),Ev.forEach(t),Ma=p(Ip),aa=n(Ip,"SPAN",{});var Av=r(aa);Pa=a(Av,"Usage: fine-tuning"),Av.forEach(t),Ip.forEach(t),ha=p(i),Ie=n(i,"P",{});var Wp=r(Ie);ms=a(Wp,"Here we explain how you can fine-tune "),ws=n(Wp,"A",{href:!0});var zv=r(ws);Ge=a(zv,"TapasForQuestionAnswering"),zv.forEach(t),Sa=a(Wp," on your own dataset."),Wp.forEach(t),ua=p(i),ys=n(i,"P",{});var xv=r(ys);oa=n(xv,"STRONG",{});var Cv=r(oa);fs=a(Cv,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Cv.forEach(t),xv.forEach(t),ma=p(i),fe=n(i,"P",{});var Hp=r(fe);Da=a(Hp,"Basically, there are 3 different ways in which one can fine-tune "),ks=n(Hp,"A",{href:!0});var Mv=r(ks);Na=a(Mv,"TapasForQuestionAnswering"),Mv.forEach(t),Oa=a(Hp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Hp.forEach(t),fa=p(i),_t=n(i,"OL",{});var xi=r(_t);na=n(xi,"LI",{});var Pv=r(na);gs=a(Pv,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Pv.forEach(t),La=p(xi),Fe=n(xi,"LI",{});var Up=r(Fe);Qa=a(Up,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=n(Up,"STRONG",{});var Sv=r(ra);Ia=a(Sv,"weak supervision"),Sv.forEach(t),Wa=a(Up,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Up.forEach(t),Ha=p(xi),he=n(xi,"LI",{});var Rp=r(he);Ua=a(Rp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=n(Rp,"STRONG",{});var Dv=r(ia);Ra=a(Dv,"strong supervision"),Dv.forEach(t),Ga=a(Rp,". Here, learning the appropriate aggregation operator is much easier."),Rp.forEach(t),xi.forEach(t),ga=p(i),qs=n(i,"P",{});var Nv=r(qs);Ba=a(Nv,"To summarize:"),Nv.forEach(t),_a=p(i),Ce=n(i,"TABLE",{});var Gp=r(Ce);la=n(Gp,"THEAD",{});var Ov=r(la);It=n(Ov,"TR",{});var Ci=r(It);da=n(Ci,"TH",{});var Lv=r(da);Ki=n(Lv,"STRONG",{});var Qv=r(Ki);Mc=a(Qv,"Task"),Qv.forEach(t),Lv.forEach(t),Pc=p(Ci),Yi=n(Ci,"TH",{});var Iv=r(Yi);Ji=n(Iv,"STRONG",{});var Wv=r(Ji);Sc=a(Wv,"Example dataset"),Wv.forEach(t),Iv.forEach(t),Dc=p(Ci),Xi=n(Ci,"TH",{});var Hv=r(Xi);Zi=n(Hv,"STRONG",{});var Uv=r(Zi);Nc=a(Uv,"Description"),Uv.forEach(t),Hv.forEach(t),Ci.forEach(t),Ov.forEach(t),Oc=p(Gp),Va=n(Gp,"TBODY",{});var Mi=r(Va);Ka=n(Mi,"TR",{});var Pi=r(Ka);el=n(Pi,"TD",{});var Rv=r(el);Lc=a(Rv,"Conversational"),Rv.forEach(t),Qc=p(Pi),tl=n(Pi,"TD",{});var Gv=r(tl);Ic=a(Gv,"SQA"),Gv.forEach(t),Wc=p(Pi),sl=n(Pi,"TD",{});var Bv=r(sl);Hc=a(Bv,"Conversational, only cell selection questions"),Bv.forEach(t),Pi.forEach(t),Uc=p(Mi),Ya=n(Mi,"TR",{});var Si=r(Ya);al=n(Si,"TD",{});var Vv=r(al);Rc=a(Vv,"Weak supervision for aggregation"),Vv.forEach(t),Gc=p(Si),ol=n(Si,"TD",{});var Kv=r(ol);Bc=a(Kv,"WTQ"),Kv.forEach(t),Vc=p(Si),nl=n(Si,"TD",{});var Yv=r(nl);Kc=a(Yv,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yv.forEach(t),Si.forEach(t),Yc=p(Mi),Ja=n(Mi,"TR",{});var Di=r(Ja);rl=n(Di,"TD",{});var Jv=r(rl);Jc=a(Jv,"Strong supervision for aggregation"),Jv.forEach(t),Xc=p(Di),il=n(Di,"TD",{});var Xv=r(il);Zc=a(Xv,"WikiSQL-supervised"),Xv.forEach(t),eh=p(Di),ll=n(Di,"TD",{});var Zv=r(ll);th=a(Zv,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Zv.forEach(t),Di.forEach(t),Mi.forEach(t),Gp.forEach(t),sp=p(i),E(qo.$$.fragment,i),ap=p(i),jo=n(i,"P",{});var Bp=r(jo);sh=a(Bp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),dn=n(Bp,"A",{href:!0,rel:!0});var eb=r(dn);ah=a(eb,"here"),eb.forEach(t),oh=a(Bp," for more info."),Bp.forEach(t),op=p(i),$o=n(i,"P",{});var Vp=r($o);nh=a(Vp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),pn=n(Vp,"A",{href:!0,rel:!0});var tb=r(pn);rh=a(tb,"here"),tb.forEach(t),ih=a(Vp,"."),Vp.forEach(t),np=p(i),Hr=n(i,"P",{});var sb=r(Hr);dl=n(sb,"STRONG",{});var ab=r(dl);lh=a(ab,"STEP 2: Prepare your data in the SQA format"),ab.forEach(t),sb.forEach(t),rp=p(i),Eo=n(i,"P",{});var Kp=r(Eo);dh=a(Kp,"Second, no matter what you picked above, you should prepare your dataset in the "),cn=n(Kp,"A",{href:!0,rel:!0});var ob=r(cn);ph=a(ob,"SQA"),ob.forEach(t),ch=a(Kp," format. This format is a TSV/CSV file with the following columns:"),Kp.forEach(t),ip=p(i),We=n(i,"UL",{});var at=r(We);Ur=n(at,"LI",{});var UT=r(Ur);pl=n(UT,"CODE",{});var nb=r(pl);hh=a(nb,"id"),nb.forEach(t),uh=a(UT,": optional, id of the table-question pair, for bookkeeping purposes."),UT.forEach(t),mh=p(at),Rr=n(at,"LI",{});var RT=r(Rr);cl=n(RT,"CODE",{});var rb=r(cl);fh=a(rb,"annotator"),rb.forEach(t),gh=a(RT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),RT.forEach(t),_h=p(at),Gr=n(at,"LI",{});var GT=r(Gr);hl=n(GT,"CODE",{});var ib=r(hl);Th=a(ib,"position"),ib.forEach(t),vh=a(GT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),GT.forEach(t),bh=p(at),Br=n(at,"LI",{});var BT=r(Br);ul=n(BT,"CODE",{});var lb=r(ul);wh=a(lb,"question"),lb.forEach(t),yh=a(BT,": string"),BT.forEach(t),kh=p(at),Vr=n(at,"LI",{});var VT=r(Vr);ml=n(VT,"CODE",{});var db=r(ml);qh=a(db,"table_file"),db.forEach(t),jh=a(VT,": string, name of a csv file containing the tabular data"),VT.forEach(t),$h=p(at),Kr=n(at,"LI",{});var KT=r(Kr);fl=n(KT,"CODE",{});var pb=r(fl);Eh=a(pb,"answer_coordinates"),pb.forEach(t),Fh=a(KT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),KT.forEach(t),Ah=p(at),Yr=n(at,"LI",{});var YT=r(Yr);gl=n(YT,"CODE",{});var cb=r(gl);zh=a(cb,"answer_text"),cb.forEach(t),xh=a(YT,": list of one or more strings (each string being a cell value that is part of the answer)"),YT.forEach(t),Ch=p(at),Jr=n(at,"LI",{});var JT=r(Jr);_l=n(JT,"CODE",{});var hb=r(_l);Mh=a(hb,"aggregation_label"),hb.forEach(t),Ph=a(JT,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),JT.forEach(t),Sh=p(at),Xr=n(at,"LI",{});var XT=r(Xr);Tl=n(XT,"CODE",{});var ub=r(Tl);Dh=a(ub,"float_answer"),ub.forEach(t),Nh=a(XT,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),XT.forEach(t),at.forEach(t),lp=p(i),Tt=n(i,"P",{});var $s=r(Tt);Oh=a($s,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),hn=n($s,"A",{href:!0,rel:!0});var mb=r(hn);Lh=a(mb,"here"),mb.forEach(t),Qh=a($s,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),un=n($s,"A",{href:!0,rel:!0});var fb=r(un);Ih=a(fb,"here"),fb.forEach(t),Wh=a($s,". Interestingly, these conversion scripts are not perfect (the "),vl=n($s,"CODE",{});var gb=r(vl);Hh=a(gb,"answer_coordinates"),gb.forEach(t),Uh=a($s," and "),bl=n($s,"CODE",{});var _b=r(bl);Rh=a(_b,"float_answer"),_b.forEach(t),Gh=a($s," fields are populated based on the "),wl=n($s,"CODE",{});var Tb=r(wl);Bh=a(Tb,"answer_text"),Tb.forEach(t),Vh=a($s,"), meaning that WTQ and WikiSQL results could actually be improved."),$s.forEach(t),dp=p(i),Zr=n(i,"P",{});var vb=r(Zr);yl=n(vb,"STRONG",{});var bb=r(yl);Kh=a(bb,"STEP 3: Convert your data into tensors using TapasTokenizer"),bb.forEach(t),vb.forEach(t),pp=p(i),E(Fo.$$.fragment,i),cp=p(i),Se=n(i,"P",{});var Je=r(Se);Yh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),kl=n(Je,"STRONG",{});var wb=r(kl);Jh=a(wb,"not conversational"),wb.forEach(t),Xh=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),ql=n(Je,"CODE",{});var yb=r(ql);Zh=a(yb,"queries"),yb.forEach(t),eu=a(Je,", "),jl=n(Je,"CODE",{});var kb=r(jl);tu=a(kb,"answer_coordinates"),kb.forEach(t),su=a(Je," and "),$l=n(Je,"CODE",{});var qb=r($l);au=a(qb,"answer_text"),qb.forEach(t),ou=a(Je," per table (in the order of their "),El=n(Je,"CODE",{});var jb=r(El);nu=a(jb,"position"),jb.forEach(t),ru=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),Fl=n(Je,"CODE",{});var $b=r(Fl);iu=a($b,"prev_labels"),$b.forEach(t),lu=a(Je," token types (see docs of "),ei=n(Je,"A",{href:!0});var Eb=r(ei);du=a(Eb,"TapasTokenizer"),Eb.forEach(t),pu=a(Je,") are set correctly. See "),mn=n(Je,"A",{href:!0,rel:!0});var Fb=r(mn);cu=a(Fb,"this notebook"),Fb.forEach(t),hu=a(Je," for more info. See "),fn=n(Je,"A",{href:!0,rel:!0});var Ab=r(fn);uu=a(Ab,"this notebook"),Ab.forEach(t),mu=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(t),hp=p(i),ti=n(i,"P",{});var zb=r(ti);fu=a(zb,"**STEP 4: Train (fine-tune) the model"),zb.forEach(t),up=p(i),E(Ao.$$.fragment,i),mp=p(i),Xa=n(i,"H2",{class:!0});var Yp=r(Xa);zo=n(Yp,"A",{id:!0,class:!0,href:!0});var xb=r(zo);Al=n(xb,"SPAN",{});var Cb=r(Al);E(gn.$$.fragment,Cb),Cb.forEach(t),xb.forEach(t),gu=p(Yp),zl=n(Yp,"SPAN",{});var Mb=r(zl);_u=a(Mb,"Usage: inference"),Mb.forEach(t),Yp.forEach(t),fp=p(i),E(xo.$$.fragment,i),gp=p(i),vt=n(i,"P",{});var Es=r(vt);Tu=a(Es,"In case of a conversational set-up, then each table-question pair must be provided "),xl=n(Es,"STRONG",{});var Pb=r(xl);vu=a(Pb,"sequentially"),Pb.forEach(t),bu=a(Es," to the model, such that the "),Cl=n(Es,"CODE",{});var Sb=r(Cl);wu=a(Sb,"prev_labels"),Sb.forEach(t),yu=a(Es," token types can be overwritten by the predicted "),Ml=n(Es,"CODE",{});var Db=r(Ml);ku=a(Db,"labels"),Db.forEach(t),qu=a(Es," of the previous table-question pair. Again, more info can be found in "),_n=n(Es,"A",{href:!0,rel:!0});var Nb=r(_n);ju=a(Nb,"this notebook"),Nb.forEach(t),$u=a(Es," (for PyTorch) and "),Tn=n(Es,"A",{href:!0,rel:!0});var Ob=r(Tn);Eu=a(Ob,"this notebook"),Ob.forEach(t),Fu=a(Es," (for TensorFlow)."),Es.forEach(t),_p=p(i),Za=n(i,"H2",{class:!0});var Jp=r(Za);Co=n(Jp,"A",{id:!0,class:!0,href:!0});var Lb=r(Co);Pl=n(Lb,"SPAN",{});var Qb=r(Pl);E(vn.$$.fragment,Qb),Qb.forEach(t),Lb.forEach(t),Au=p(Jp),Sl=n(Jp,"SPAN",{});var Ib=r(Sl);zu=a(Ib,"TAPAS specific outputs"),Ib.forEach(t),Jp.forEach(t),Tp=p(i),eo=n(i,"DIV",{class:!0});var Xp=r(eo);E(bn.$$.fragment,Xp),xu=p(Xp),wn=n(Xp,"P",{});var Zp=r(wn);Cu=a(Zp,"Output type of "),si=n(Zp,"A",{href:!0});var Wb=r(si);Mu=a(Wb,"TapasForQuestionAnswering"),Wb.forEach(t),Pu=a(Zp,"."),Zp.forEach(t),Xp.forEach(t),vp=p(i),to=n(i,"H2",{class:!0});var ec=r(to);Mo=n(ec,"A",{id:!0,class:!0,href:!0});var Hb=r(Mo);Dl=n(Hb,"SPAN",{});var Ub=r(Dl);E(yn.$$.fragment,Ub),Ub.forEach(t),Hb.forEach(t),Su=p(ec),Nl=n(ec,"SPAN",{});var Rb=r(Nl);Du=a(Rb,"TapasConfig"),Rb.forEach(t),ec.forEach(t),bp=p(i),Wt=n(i,"DIV",{class:!0});var va=r(Wt);E(kn.$$.fragment,va),Nu=p(va),_s=n(va,"P",{});var ba=r(_s);Ou=a(ba,"This is the configuration class to store the configuration of a "),ai=n(ba,"A",{href:!0});var Gb=r(ai);Lu=a(Gb,"TapasModel"),Gb.forEach(t),Qu=a(ba,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=n(ba,"EM",{});var Bb=r(Ol);Iu=a(Bb,"tapas-base-finetuned-sqa"),Bb.forEach(t),Wu=a(ba,` architecture.
Configuration objects inherit from `),Ll=n(ba,"CODE",{});var Vb=r(Ll);Hu=a(Vb,"PreTrainedConfig"),Vb.forEach(t),Uu=a(ba,` and can be used to control the model outputs. Read the
documentation from `),oi=n(ba,"A",{href:!0});var Kb=r(oi);Ru=a(Kb,"PretrainedConfig"),Kb.forEach(t),Gu=a(ba," for more information."),ba.forEach(t),Bu=p(va),qn=n(va,"P",{});var tc=r(qn);Vu=a(tc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),jn=n(tc,"A",{href:!0,rel:!0});var Yb=r(jn);Ku=a(Yb,"https://github.com/google-research/tapas/tree/master"),Yb.forEach(t),Yu=a(tc,"."),tc.forEach(t),Ju=p(va),Ql=n(va,"P",{});var Jb=r(Ql);Xu=a(Jb,"Example:"),Jb.forEach(t),Zu=p(va),E($n.$$.fragment,va),va.forEach(t),wp=p(i),so=n(i,"H2",{class:!0});var sc=r(so);Po=n(sc,"A",{id:!0,class:!0,href:!0});var Xb=r(Po);Il=n(Xb,"SPAN",{});var Zb=r(Il);E(En.$$.fragment,Zb),Zb.forEach(t),Xb.forEach(t),em=p(sc),Wl=n(sc,"SPAN",{});var ew=r(Wl);tm=a(ew,"TapasTokenizer"),ew.forEach(t),sc.forEach(t),yp=p(i),Be=n(i,"DIV",{class:!0});var bt=r(Be);E(Fn.$$.fragment,bt),sm=p(bt),Hl=n(bt,"P",{});var tw=r(Hl);am=a(tw,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),tw.forEach(t),om=p(bt),Qe=n(bt,"P",{});var Xe=r(Qe);nm=a(Xe,"This tokenizer inherits from "),ni=n(Xe,"A",{href:!0});var sw=r(ni);rm=a(sw,"PreTrainedTokenizer"),sw.forEach(t),im=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=n(Xe,"A",{href:!0});var aw=r(ri);lm=a(aw,"TapasTokenizer"),aw.forEach(t),dm=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=n(Xe,"CODE",{});var ow=r(Ul);pm=a(ow,"segment_ids"),ow.forEach(t),cm=a(Xe,`,
`),Rl=n(Xe,"CODE",{});var nw=r(Rl);hm=a(nw,"column_ids"),nw.forEach(t),um=a(Xe,", "),Gl=n(Xe,"CODE",{});var rw=r(Gl);mm=a(rw,"row_ids"),rw.forEach(t),fm=a(Xe,", "),Bl=n(Xe,"CODE",{});var iw=r(Bl);gm=a(iw,"prev_labels"),iw.forEach(t),_m=a(Xe,", "),Vl=n(Xe,"CODE",{});var lw=r(Vl);Tm=a(lw,"column_ranks"),lw.forEach(t),vm=a(Xe,", "),Kl=n(Xe,"CODE",{});var dw=r(Kl);bm=a(dw,"inv_column_ranks"),dw.forEach(t),wm=a(Xe," and "),Yl=n(Xe,"CODE",{});var pw=r(Yl);ym=a(pw,"numeric_relations"),pw.forEach(t),km=a(Xe,":"),Xe.forEach(t),qm=p(bt),it=n(bt,"UL",{});var as=r(it);Jl=n(as,"LI",{});var cw=r(Jl);jm=a(cw,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),cw.forEach(t),$m=p(as),Xl=n(as,"LI",{});var hw=r(Xl);Em=a(hw,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),hw.forEach(t),Fm=p(as),Zl=n(as,"LI",{});var uw=r(Zl);Am=a(uw,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),uw.forEach(t),zm=p(as),ed=n(as,"LI",{});var mw=r(ed);xm=a(mw,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),mw.forEach(t),Cm=p(as),td=n(as,"LI",{});var fw=r(td);Mm=a(fw,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),fw.forEach(t),Pm=p(as),sd=n(as,"LI",{});var gw=r(sd);Sm=a(gw,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),gw.forEach(t),Dm=p(as),ad=n(as,"LI",{});var _w=r(ad);Nm=a(_w,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),_w.forEach(t),as.forEach(t),Om=p(bt),ii=n(bt,"P",{});var ZT=r(ii);li=n(ZT,"A",{href:!0});var Tw=r(li);Lm=a(Tw,"TapasTokenizer"),Tw.forEach(t),Qm=a(ZT,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),ZT.forEach(t),Im=p(bt),So=n(bt,"DIV",{class:!0});var ac=r(So);E(An.$$.fragment,ac),Wm=p(ac),od=n(ac,"P",{});var vw=r(od);Hm=a(vw,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),vw.forEach(t),ac.forEach(t),Um=p(bt),Ta=n(bt,"DIV",{class:!0});var Ni=r(Ta);E(zn.$$.fragment,Ni),Rm=p(Ni),xn=n(Ni,"P",{});var oc=r(xn);Gm=a(oc,"Converts logits of "),di=n(oc,"A",{href:!0});var bw=r(di);Bm=a(bw,"TapasForQuestionAnswering"),bw.forEach(t),Vm=a(oc,` to actual predicted answer coordinates and optional
aggregation indices.`),oc.forEach(t),Km=p(Ni),Cn=n(Ni,"P",{});var nc=r(Cn);Ym=a(nc,`The original implementation, on which this function is based, can be found
`),Mn=n(nc,"A",{href:!0,rel:!0});var ww=r(Mn);Jm=a(ww,"here"),ww.forEach(t),Xm=a(nc,"."),nc.forEach(t),Ni.forEach(t),Zm=p(bt),pi=n(bt,"DIV",{class:!0});var yw=r(pi);E(Pn.$$.fragment,yw),yw.forEach(t),bt.forEach(t),kp=p(i),ao=n(i,"H2",{class:!0});var rc=r(ao);Do=n(rc,"A",{id:!0,class:!0,href:!0});var kw=r(Do);nd=n(kw,"SPAN",{});var qw=r(nd);E(Sn.$$.fragment,qw),qw.forEach(t),kw.forEach(t),ef=p(rc),rd=n(rc,"SPAN",{});var jw=r(rd);tf=a(jw,"TapasModel"),jw.forEach(t),rc.forEach(t),qp=p(i),lt=n(i,"DIV",{class:!0});var Fs=r(lt);E(Dn.$$.fragment,Fs),sf=p(Fs),Nn=n(Fs,"P",{});var ic=r(Nn);af=a(ic,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=n(ic,"A",{href:!0});var $w=r(ci);of=a($w,"PreTrainedModel"),$w.forEach(t),nf=a(ic,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),rf=p(Fs),On=n(Fs,"P",{});var lc=r(On);lf=a(lc,"This model is also a PyTorch "),Ln=n(lc,"A",{href:!0,rel:!0});var Ew=r(Ln);df=a(Ew,"torch.nn.Module"),Ew.forEach(t),pf=a(lc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc.forEach(t),cf=p(Fs),Qn=n(Fs,"P",{});var dc=r(Qn);hf=a(dc,"This class is a small change compared to "),hi=n(dc,"A",{href:!0});var Fw=r(hi);uf=a(Fw,"BertModel"),Fw.forEach(t),mf=a(dc,", taking into account the additional token type ids."),dc.forEach(t),ff=p(Fs),In=n(Fs,"P",{});var pc=r(In);gf=a(pc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wn=n(pc,"A",{href:!0,rel:!0});var Aw=r(Wn);_f=a(Aw,`Attention is
all you need`),Aw.forEach(t),Tf=a(pc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),pc.forEach(t),vf=p(Fs),Vt=n(Fs,"DIV",{class:!0});var wa=r(Vt);E(Hn.$$.fragment,wa),bf=p(wa),oo=n(wa,"P",{});var Oi=r(oo);wf=a(Oi,"The "),ui=n(Oi,"A",{href:!0});var zw=r(ui);yf=a(zw,"TapasModel"),zw.forEach(t),kf=a(Oi," forward method, overrides the "),id=n(Oi,"CODE",{});var xw=r(id);qf=a(xw,"__call__"),xw.forEach(t),jf=a(Oi," special method."),Oi.forEach(t),$f=p(wa),E(No.$$.fragment,wa),Ef=p(wa),ld=n(wa,"P",{});var Cw=r(ld);Ff=a(Cw,"Examples:"),Cw.forEach(t),Af=p(wa),E(Un.$$.fragment,wa),wa.forEach(t),Fs.forEach(t),jp=p(i),no=n(i,"H2",{class:!0});var cc=r(no);Oo=n(cc,"A",{id:!0,class:!0,href:!0});var Mw=r(Oo);dd=n(Mw,"SPAN",{});var Pw=r(dd);E(Rn.$$.fragment,Pw),Pw.forEach(t),Mw.forEach(t),zf=p(cc),pd=n(cc,"SPAN",{});var Sw=r(pd);xf=a(Sw,"TapasForMaskedLM"),Sw.forEach(t),cc.forEach(t),$p=p(i),Ts=n(i,"DIV",{class:!0});var nn=r(Ts);E(Gn.$$.fragment,nn),Cf=p(nn),ro=n(nn,"P",{});var Li=r(ro);Mf=a(Li,"Tapas Model with a "),cd=n(Li,"CODE",{});var Dw=r(cd);Pf=a(Dw,"language modeling"),Dw.forEach(t),Sf=a(Li,` head on top.
This model inherits from `),mi=n(Li,"A",{href:!0});var Nw=r(mi);Df=a(Nw,"PreTrainedModel"),Nw.forEach(t),Nf=a(Li,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li.forEach(t),Of=p(nn),Bn=n(nn,"P",{});var hc=r(Bn);Lf=a(hc,"This model is also a PyTorch "),Vn=n(hc,"A",{href:!0,rel:!0});var Ow=r(Vn);Qf=a(Ow,"torch.nn.Module"),Ow.forEach(t),If=a(hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hc.forEach(t),Wf=p(nn),Kt=n(nn,"DIV",{class:!0});var ya=r(Kt);E(Kn.$$.fragment,ya),Hf=p(ya),io=n(ya,"P",{});var Qi=r(io);Uf=a(Qi,"The "),fi=n(Qi,"A",{href:!0});var Lw=r(fi);Rf=a(Lw,"TapasForMaskedLM"),Lw.forEach(t),Gf=a(Qi," forward method, overrides the "),hd=n(Qi,"CODE",{});var Qw=r(hd);Bf=a(Qw,"__call__"),Qw.forEach(t),Vf=a(Qi," special method."),Qi.forEach(t),Kf=p(ya),E(Lo.$$.fragment,ya),Yf=p(ya),ud=n(ya,"P",{});var Iw=r(ud);Jf=a(Iw,"Examples:"),Iw.forEach(t),Xf=p(ya),E(Yn.$$.fragment,ya),ya.forEach(t),nn.forEach(t),Ep=p(i),lo=n(i,"H2",{class:!0});var uc=r(lo);Qo=n(uc,"A",{id:!0,class:!0,href:!0});var Ww=r(Qo);md=n(Ww,"SPAN",{});var Hw=r(md);E(Jn.$$.fragment,Hw),Hw.forEach(t),Ww.forEach(t),Zf=p(uc),fd=n(uc,"SPAN",{});var Uw=r(fd);eg=a(Uw,"TapasForSequenceClassification"),Uw.forEach(t),uc.forEach(t),Fp=p(i),Ht=n(i,"DIV",{class:!0});var ka=r(Ht);E(Xn.$$.fragment,ka),tg=p(ka),gd=n(ka,"P",{});var Rw=r(gd);sg=a(Rw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Rw.forEach(t),ag=p(ka),Zn=n(ka,"P",{});var mc=r(Zn);og=a(mc,"This model inherits from "),gi=n(mc,"A",{href:!0});var Gw=r(gi);ng=a(Gw,"PreTrainedModel"),Gw.forEach(t),rg=a(mc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc.forEach(t),ig=p(ka),er=n(ka,"P",{});var fc=r(er);lg=a(fc,"This model is also a PyTorch "),tr=n(fc,"A",{href:!0,rel:!0});var Bw=r(tr);dg=a(Bw,"torch.nn.Module"),Bw.forEach(t),pg=a(fc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fc.forEach(t),cg=p(ka),Yt=n(ka,"DIV",{class:!0});var qa=r(Yt);E(sr.$$.fragment,qa),hg=p(qa),po=n(qa,"P",{});var Ii=r(po);ug=a(Ii,"The "),_i=n(Ii,"A",{href:!0});var Vw=r(_i);mg=a(Vw,"TapasForSequenceClassification"),Vw.forEach(t),fg=a(Ii," forward method, overrides the "),_d=n(Ii,"CODE",{});var Kw=r(_d);gg=a(Kw,"__call__"),Kw.forEach(t),_g=a(Ii," special method."),Ii.forEach(t),Tg=p(qa),E(Io.$$.fragment,qa),vg=p(qa),Td=n(qa,"P",{});var Yw=r(Td);bg=a(Yw,"Examples:"),Yw.forEach(t),wg=p(qa),E(ar.$$.fragment,qa),qa.forEach(t),ka.forEach(t),Ap=p(i),co=n(i,"H2",{class:!0});var gc=r(co);Wo=n(gc,"A",{id:!0,class:!0,href:!0});var Jw=r(Wo);vd=n(Jw,"SPAN",{});var Xw=r(vd);E(or.$$.fragment,Xw),Xw.forEach(t),Jw.forEach(t),yg=p(gc),bd=n(gc,"SPAN",{});var Zw=r(bd);kg=a(Zw,"TapasForQuestionAnswering"),Zw.forEach(t),gc.forEach(t),zp=p(i),Ut=n(i,"DIV",{class:!0});var ja=r(Ut);E(nr.$$.fragment,ja),qg=p(ja),ho=n(ja,"P",{});var Wi=r(ho);jg=a(Wi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),wd=n(Wi,"CODE",{});var ey=r(wd);$g=a(ey,"logits"),ey.forEach(t),Eg=a(Wi," and optional "),yd=n(Wi,"CODE",{});var ty=r(yd);Fg=a(ty,"logits_aggregation"),ty.forEach(t),Ag=a(Wi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Wi.forEach(t),zg=p(ja),rr=n(ja,"P",{});var _c=r(rr);xg=a(_c,"This model inherits from "),Ti=n(_c,"A",{href:!0});var sy=r(Ti);Cg=a(sy,"PreTrainedModel"),sy.forEach(t),Mg=a(_c,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c.forEach(t),Pg=p(ja),ir=n(ja,"P",{});var Tc=r(ir);Sg=a(Tc,"This model is also a PyTorch "),lr=n(Tc,"A",{href:!0,rel:!0});var ay=r(lr);Dg=a(ay,"torch.nn.Module"),ay.forEach(t),Ng=a(Tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc.forEach(t),Og=p(ja),Jt=n(ja,"DIV",{class:!0});var $a=r(Jt);E(dr.$$.fragment,$a),Lg=p($a),uo=n($a,"P",{});var Hi=r(uo);Qg=a(Hi,"The "),vi=n(Hi,"A",{href:!0});var oy=r(vi);Ig=a(oy,"TapasForQuestionAnswering"),oy.forEach(t),Wg=a(Hi," forward method, overrides the "),kd=n(Hi,"CODE",{});var ny=r(kd);Hg=a(ny,"__call__"),ny.forEach(t),Ug=a(Hi," special method."),Hi.forEach(t),Rg=p($a),E(Ho.$$.fragment,$a),Gg=p($a),qd=n($a,"P",{});var ry=r(qd);Bg=a(ry,"Examples:"),ry.forEach(t),Vg=p($a),E(pr.$$.fragment,$a),$a.forEach(t),ja.forEach(t),xp=p(i),mo=n(i,"H2",{class:!0});var vc=r(mo);Uo=n(vc,"A",{id:!0,class:!0,href:!0});var iy=r(Uo);jd=n(iy,"SPAN",{});var ly=r(jd);E(cr.$$.fragment,ly),ly.forEach(t),iy.forEach(t),Kg=p(vc),$d=n(vc,"SPAN",{});var dy=r($d);Yg=a(dy,"TFTapasModel"),dy.forEach(t),vc.forEach(t),Cp=p(i),dt=n(i,"DIV",{class:!0});var As=r(dt);E(hr.$$.fragment,As),Jg=p(As),Ed=n(As,"P",{});var py=r(Ed);Xg=a(py,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),py.forEach(t),Zg=p(As),ur=n(As,"P",{});var bc=r(ur);e_=a(bc,"This model inherits from "),bi=n(bc,"A",{href:!0});var cy=r(bi);t_=a(cy,"TFPreTrainedModel"),cy.forEach(t),s_=a(bc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc.forEach(t),a_=p(As),mr=n(As,"P",{});var wc=r(mr);o_=a(wc,"This model is also a "),fr=n(wc,"A",{href:!0,rel:!0});var hy=r(fr);n_=a(hy,"tf.keras.Model"),hy.forEach(t),r_=a(wc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wc.forEach(t),i_=p(As),E(Ro.$$.fragment,As),l_=p(As),Xt=n(As,"DIV",{class:!0});var Ea=r(Xt);E(gr.$$.fragment,Ea),d_=p(Ea),fo=n(Ea,"P",{});var Ui=r(fo);p_=a(Ui,"The "),wi=n(Ui,"A",{href:!0});var uy=r(wi);c_=a(uy,"TFTapasModel"),uy.forEach(t),h_=a(Ui," forward method, overrides the "),Fd=n(Ui,"CODE",{});var my=r(Fd);u_=a(my,"__call__"),my.forEach(t),m_=a(Ui," special method."),Ui.forEach(t),f_=p(Ea),E(Go.$$.fragment,Ea),g_=p(Ea),Ad=n(Ea,"P",{});var fy=r(Ad);__=a(fy,"Examples:"),fy.forEach(t),T_=p(Ea),E(_r.$$.fragment,Ea),Ea.forEach(t),As.forEach(t),Mp=p(i),go=n(i,"H2",{class:!0});var yc=r(go);Bo=n(yc,"A",{id:!0,class:!0,href:!0});var gy=r(Bo);zd=n(gy,"SPAN",{});var _y=r(zd);E(Tr.$$.fragment,_y),_y.forEach(t),gy.forEach(t),v_=p(yc),xd=n(yc,"SPAN",{});var Ty=r(xd);b_=a(Ty,"TFTapasForMaskedLM"),Ty.forEach(t),yc.forEach(t),Pp=p(i),pt=n(i,"DIV",{class:!0});var zs=r(pt);E(vr.$$.fragment,zs),w_=p(zs),br=n(zs,"P",{});var kc=r(br);y_=a(kc,"Tapas Model with a "),Cd=n(kc,"CODE",{});var vy=r(Cd);k_=a(vy,"language modeling"),vy.forEach(t),q_=a(kc," head on top."),kc.forEach(t),j_=p(zs),wr=n(zs,"P",{});var qc=r(wr);$_=a(qc,"This model inherits from "),yi=n(qc,"A",{href:!0});var by=r(yi);E_=a(by,"TFPreTrainedModel"),by.forEach(t),F_=a(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),A_=p(zs),yr=n(zs,"P",{});var jc=r(yr);z_=a(jc,"This model is also a "),kr=n(jc,"A",{href:!0,rel:!0});var wy=r(kr);x_=a(wy,"tf.keras.Model"),wy.forEach(t),C_=a(jc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc.forEach(t),M_=p(zs),E(Vo.$$.fragment,zs),P_=p(zs),Zt=n(zs,"DIV",{class:!0});var Fa=r(Zt);E(qr.$$.fragment,Fa),S_=p(Fa),_o=n(Fa,"P",{});var Ri=r(_o);D_=a(Ri,"The "),ki=n(Ri,"A",{href:!0});var yy=r(ki);N_=a(yy,"TFTapasForMaskedLM"),yy.forEach(t),O_=a(Ri," forward method, overrides the "),Md=n(Ri,"CODE",{});var ky=r(Md);L_=a(ky,"__call__"),ky.forEach(t),Q_=a(Ri," special method."),Ri.forEach(t),I_=p(Fa),E(Ko.$$.fragment,Fa),W_=p(Fa),Pd=n(Fa,"P",{});var qy=r(Pd);H_=a(qy,"Examples:"),qy.forEach(t),U_=p(Fa),E(jr.$$.fragment,Fa),Fa.forEach(t),zs.forEach(t),Sp=p(i),To=n(i,"H2",{class:!0});var $c=r(To);Yo=n($c,"A",{id:!0,class:!0,href:!0});var jy=r(Yo);Sd=n(jy,"SPAN",{});var $y=r(Sd);E($r.$$.fragment,$y),$y.forEach(t),jy.forEach(t),R_=p($c),Dd=n($c,"SPAN",{});var Ey=r(Dd);G_=a(Ey,"TFTapasForSequenceClassification"),Ey.forEach(t),$c.forEach(t),Dp=p(i),ct=n(i,"DIV",{class:!0});var xs=r(ct);E(Er.$$.fragment,xs),B_=p(xs),Nd=n(xs,"P",{});var Fy=r(Nd);V_=a(Fy,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Fy.forEach(t),K_=p(xs),Fr=n(xs,"P",{});var Ec=r(Fr);Y_=a(Ec,"This model inherits from "),qi=n(Ec,"A",{href:!0});var Ay=r(qi);J_=a(Ay,"TFPreTrainedModel"),Ay.forEach(t),X_=a(Ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec.forEach(t),Z_=p(xs),Ar=n(xs,"P",{});var Fc=r(Ar);eT=a(Fc,"This model is also a "),zr=n(Fc,"A",{href:!0,rel:!0});var zy=r(zr);tT=a(zy,"tf.keras.Model"),zy.forEach(t),sT=a(Fc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc.forEach(t),aT=p(xs),E(Jo.$$.fragment,xs),oT=p(xs),es=n(xs,"DIV",{class:!0});var Aa=r(es);E(xr.$$.fragment,Aa),nT=p(Aa),vo=n(Aa,"P",{});var Gi=r(vo);rT=a(Gi,"The "),ji=n(Gi,"A",{href:!0});var xy=r(ji);iT=a(xy,"TFTapasForSequenceClassification"),xy.forEach(t),lT=a(Gi," forward method, overrides the "),Od=n(Gi,"CODE",{});var Cy=r(Od);dT=a(Cy,"__call__"),Cy.forEach(t),pT=a(Gi," special method."),Gi.forEach(t),cT=p(Aa),E(Xo.$$.fragment,Aa),hT=p(Aa),Ld=n(Aa,"P",{});var My=r(Ld);uT=a(My,"Examples:"),My.forEach(t),mT=p(Aa),E(Cr.$$.fragment,Aa),Aa.forEach(t),xs.forEach(t),Np=p(i),bo=n(i,"H2",{class:!0});var Ac=r(bo);Zo=n(Ac,"A",{id:!0,class:!0,href:!0});var Py=r(Zo);Qd=n(Py,"SPAN",{});var Sy=r(Qd);E(Mr.$$.fragment,Sy),Sy.forEach(t),Py.forEach(t),fT=p(Ac),Id=n(Ac,"SPAN",{});var Dy=r(Id);gT=a(Dy,"TFTapasForQuestionAnswering"),Dy.forEach(t),Ac.forEach(t),Op=p(i),ht=n(i,"DIV",{class:!0});var Cs=r(ht);E(Pr.$$.fragment,Cs),_T=p(Cs),wo=n(Cs,"P",{});var Bi=r(wo);TT=a(Bi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wd=n(Bi,"CODE",{});var Ny=r(Wd);vT=a(Ny,"logits"),Ny.forEach(t),bT=a(Bi," and optional "),Hd=n(Bi,"CODE",{});var Oy=r(Hd);wT=a(Oy,"logits_aggregation"),Oy.forEach(t),yT=a(Bi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Bi.forEach(t),kT=p(Cs),Sr=n(Cs,"P",{});var zc=r(Sr);qT=a(zc,"This model inherits from "),$i=n(zc,"A",{href:!0});var Ly=r($i);jT=a(Ly,"TFPreTrainedModel"),Ly.forEach(t),$T=a(zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc.forEach(t),ET=p(Cs),Dr=n(Cs,"P",{});var xc=r(Dr);FT=a(xc,"This model is also a "),Nr=n(xc,"A",{href:!0,rel:!0});var Qy=r(Nr);AT=a(Qy,"tf.keras.Model"),Qy.forEach(t),zT=a(xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xc.forEach(t),xT=p(Cs),E(en.$$.fragment,Cs),CT=p(Cs),ts=n(Cs,"DIV",{class:!0});var za=r(ts);E(Or.$$.fragment,za),MT=p(za),yo=n(za,"P",{});var Vi=r(yo);PT=a(Vi,"The "),Ei=n(Vi,"A",{href:!0});var Iy=r(Ei);ST=a(Iy,"TFTapasForQuestionAnswering"),Iy.forEach(t),DT=a(Vi," forward method, overrides the "),Ud=n(Vi,"CODE",{});var Wy=r(Ud);NT=a(Wy,"__call__"),Wy.forEach(t),OT=a(Vi," special method."),Vi.forEach(t),LT=p(za),E(tn.$$.fragment,za),QT=p(za),Rd=n(za,"P",{});var Hy=r(Rd);IT=a(Hy,"Examples:"),Hy.forEach(t),WT=p(za),E(Lr.$$.fragment,za),za.forEach(t),Cs.forEach(t),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(jk)),h(f,"id","tapas"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#tapas"),h(c,"class","relative group"),h(H,"id","overview"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#overview"),h(q,"class","relative group"),h(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),h(M,"rel","nofollow"),h(P,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(P,"rel","nofollow"),h(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),h(Y,"rel","nofollow"),h(ne,"href","https://github.com/salesforce/WikiSQL"),h(ne,"rel","nofollow"),h(ye,"href","https://github.com/wenhuchen/Table-Fact-Checking"),h(ye,"rel","nofollow"),h(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),h(Ze,"rel","nofollow"),Vy(mt.src,pa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||h(mt,"src",pa),h(mt,"alt","drawing"),h(mt,"width","600"),h(tt,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),h(wt,"href","https://huggingface.co/nielsr"),h(wt,"rel","nofollow"),h(kt,"href","https://huggingface.co/kamalkraj"),h(kt,"rel","nofollow"),h(jt,"href","https://github.com/google-research/tapas"),h(jt,"rel","nofollow"),h(Bt,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasConfig"),h(xt,"href","https://huggingface.co/models?search=tapas"),h(xt,"rel","nofollow"),h(Nt,"href","https://github.com/google-research/tapas%3E"),h(Nt,"rel","nofollow"),h(st,"id","usage-finetuning"),h(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(st,"href","#usage-finetuning"),h(Qt,"class","relative group"),h(ws,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ks,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(dn,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),h(dn,"rel","nofollow"),h(pn,"href","https://huggingface.co/models?search=tapas"),h(pn,"rel","nofollow"),h(cn,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(cn,"rel","nofollow"),h(hn,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),h(hn,"rel","nofollow"),h(un,"href","https://github.com/NielsRogge/tapas_utils"),h(un,"rel","nofollow"),h(ei,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer"),h(mn,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(mn,"rel","nofollow"),h(fn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(fn,"rel","nofollow"),h(zo,"id","usage-inference"),h(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zo,"href","#usage-inference"),h(Xa,"class","relative group"),h(_n,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(_n,"rel","nofollow"),h(Tn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(Tn,"rel","nofollow"),h(Co,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Za,"class","relative group"),h(si,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mo,"id","transformers.TapasConfig"),h(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mo,"href","#transformers.TapasConfig"),h(to,"class","relative group"),h(ai,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasModel"),h(oi,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(jn,"href","https://github.com/google-research/tapas/tree/master"),h(jn,"rel","nofollow"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Po,"id","transformers.TapasTokenizer"),h(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Po,"href","#transformers.TapasTokenizer"),h(so,"class","relative group"),h(ni,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ri,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer"),h(li,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasTokenizer"),h(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(di,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Mn,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),h(Mn,"rel","nofollow"),h(Ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Do,"id","transformers.TapasModel"),h(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Do,"href","#transformers.TapasModel"),h(ao,"class","relative group"),h(ci,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ln,"rel","nofollow"),h(hi,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertModel"),h(Wn,"href","https://arxiv.org/abs/1706.03762"),h(Wn,"rel","nofollow"),h(ui,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasModel"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oo,"id","transformers.TapasForMaskedLM"),h(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oo,"href","#transformers.TapasForMaskedLM"),h(no,"class","relative group"),h(mi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Vn,"rel","nofollow"),h(fi,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForMaskedLM"),h(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qo,"id","transformers.TapasForSequenceClassification"),h(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qo,"href","#transformers.TapasForSequenceClassification"),h(lo,"class","relative group"),h(gi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(tr,"rel","nofollow"),h(_i,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForSequenceClassification"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wo,"id","transformers.TapasForQuestionAnswering"),h(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wo,"href","#transformers.TapasForQuestionAnswering"),h(co,"class","relative group"),h(Ti,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(lr,"rel","nofollow"),h(vi,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Uo,"id","transformers.TFTapasModel"),h(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Uo,"href","#transformers.TFTapasModel"),h(mo,"class","relative group"),h(bi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(fr,"rel","nofollow"),h(wi,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"id","transformers.TFTapasForMaskedLM"),h(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bo,"href","#transformers.TFTapasForMaskedLM"),h(go,"class","relative group"),h(yi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(kr,"rel","nofollow"),h(ki,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yo,"id","transformers.TFTapasForSequenceClassification"),h(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yo,"href","#transformers.TFTapasForSequenceClassification"),h(To,"class","relative group"),h(qi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(zr,"rel","nofollow"),h(ji,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),h(es,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zo,"id","transformers.TFTapasForQuestionAnswering"),h(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zo,"href","#transformers.TFTapasForQuestionAnswering"),h(bo,"class","relative group"),h($i,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Nr,"rel","nofollow"),h(Ei,"href","/docs/transformers/v4.18.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,m){e(document.head,l),u(i,_,m),u(i,c,m),e(c,f),e(f,v),F(b,v,null),e(c,T),e(c,k),e(k,y),u(i,D,m),u(i,q,m),e(q,H),e(H,B),F(V,B,null),e(q,R),e(q,K),e(K,re),u(i,I,m),u(i,O,m),e(O,w),e(O,M),e(M,G),e(O,C),u(i,N,m),u(i,ee,m),e(ee,te),u(i,ce,m),u(i,oe,m),e(oe,se),e(se,P),e(P,L),e(se,W),e(oe,X),e(oe,Q),e(Q,Y),e(Y,ge),e(Q,ue),e(oe,_e),e(oe,me),e(me,ne),e(ne,qe),e(me,ie),u(i,be,m),u(i,g,m),e(g,S),u(i,ve,m),u(i,ze,m),e(ze,we),u(i,le,m),u(i,xe,m),e(xe,Me),e(Me,Z),u(i,de,m),u(i,pe,m),e(pe,De),e(pe,je),e(je,Te),e(pe,Ne),e(pe,ye),e(ye,Ae),e(pe,Oe),e(pe,Ze),e(Ze,Ps),e(pe,Ss),u(i,ut,m),u(i,mt,m),u(i,ft,m),u(i,gt,m),e(gt,Ds),e(gt,tt),e(tt,Ns),e(gt,Os),u(i,Ke,m),u(i,Pe,m),e(Pe,Ls),e(Pe,wt),e(wt,ke),e(Pe,yt),e(Pe,kt),e(kt,Qs),e(Pe,qt),e(Pe,jt),e(jt,Is),e(Pe,$t),u(i,vs,m),u(i,Gt,m),e(Gt,Et),u(i,bs,m),u(i,Ye,m),e(Ye,$e),e($e,Ws),e($e,Ft),e(Ft,ae),e($e,ot),e($e,Bt),e(Bt,Hs),e($e,At),e($e,os),e(os,Us),e($e,zt),e($e,xt),e(xt,Rs),e($e,Ct),e($e,ns),e(ns,Gs),e($e,Mt),e($e,rs),e(rs,Bs),e($e,Pt),e(Ye,Vs),e(Ye,Le),e(Le,St),e(Le,is),e(is,Ks),e(Le,Dt),e(Le,ls),e(ls,Ys),e(Le,ds),e(Le,Ue),e(Ue,ps),e(Le,Ee),e(Le,cs),e(cs,nt),e(Le,Js),e(Le,Nt),e(Nt,Ot),e(Le,Xs),e(Ye,Zs),e(Ye,Re),e(Re,ea),e(Re,hs),e(hs,us),e(Re,et),e(Re,Lt),e(Lt,j),e(Re,J),e(Ye,xa),e(Ye,ta),e(ta,Ca),u(i,ca,m),u(i,Qt,m),e(Qt,st),e(st,sa),F(rt,sa,null),e(Qt,Ma),e(Qt,aa),e(aa,Pa),u(i,ha,m),u(i,Ie,m),e(Ie,ms),e(Ie,ws),e(ws,Ge),e(Ie,Sa),u(i,ua,m),u(i,ys,m),e(ys,oa),e(oa,fs),u(i,ma,m),u(i,fe,m),e(fe,Da),e(fe,ks),e(ks,Na),e(fe,Oa),u(i,fa,m),u(i,_t,m),e(_t,na),e(na,gs),e(_t,La),e(_t,Fe),e(Fe,Qa),e(Fe,ra),e(ra,Ia),e(Fe,Wa),e(_t,Ha),e(_t,he),e(he,Ua),e(he,ia),e(ia,Ra),e(he,Ga),u(i,ga,m),u(i,qs,m),e(qs,Ba),u(i,_a,m),u(i,Ce,m),e(Ce,la),e(la,It),e(It,da),e(da,Ki),e(Ki,Mc),e(It,Pc),e(It,Yi),e(Yi,Ji),e(Ji,Sc),e(It,Dc),e(It,Xi),e(Xi,Zi),e(Zi,Nc),e(Ce,Oc),e(Ce,Va),e(Va,Ka),e(Ka,el),e(el,Lc),e(Ka,Qc),e(Ka,tl),e(tl,Ic),e(Ka,Wc),e(Ka,sl),e(sl,Hc),e(Va,Uc),e(Va,Ya),e(Ya,al),e(al,Rc),e(Ya,Gc),e(Ya,ol),e(ol,Bc),e(Ya,Vc),e(Ya,nl),e(nl,Kc),e(Va,Yc),e(Va,Ja),e(Ja,rl),e(rl,Jc),e(Ja,Xc),e(Ja,il),e(il,Zc),e(Ja,eh),e(Ja,ll),e(ll,th),u(i,sp,m),F(qo,i,m),u(i,ap,m),u(i,jo,m),e(jo,sh),e(jo,dn),e(dn,ah),e(jo,oh),u(i,op,m),u(i,$o,m),e($o,nh),e($o,pn),e(pn,rh),e($o,ih),u(i,np,m),u(i,Hr,m),e(Hr,dl),e(dl,lh),u(i,rp,m),u(i,Eo,m),e(Eo,dh),e(Eo,cn),e(cn,ph),e(Eo,ch),u(i,ip,m),u(i,We,m),e(We,Ur),e(Ur,pl),e(pl,hh),e(Ur,uh),e(We,mh),e(We,Rr),e(Rr,cl),e(cl,fh),e(Rr,gh),e(We,_h),e(We,Gr),e(Gr,hl),e(hl,Th),e(Gr,vh),e(We,bh),e(We,Br),e(Br,ul),e(ul,wh),e(Br,yh),e(We,kh),e(We,Vr),e(Vr,ml),e(ml,qh),e(Vr,jh),e(We,$h),e(We,Kr),e(Kr,fl),e(fl,Eh),e(Kr,Fh),e(We,Ah),e(We,Yr),e(Yr,gl),e(gl,zh),e(Yr,xh),e(We,Ch),e(We,Jr),e(Jr,_l),e(_l,Mh),e(Jr,Ph),e(We,Sh),e(We,Xr),e(Xr,Tl),e(Tl,Dh),e(Xr,Nh),u(i,lp,m),u(i,Tt,m),e(Tt,Oh),e(Tt,hn),e(hn,Lh),e(Tt,Qh),e(Tt,un),e(un,Ih),e(Tt,Wh),e(Tt,vl),e(vl,Hh),e(Tt,Uh),e(Tt,bl),e(bl,Rh),e(Tt,Gh),e(Tt,wl),e(wl,Bh),e(Tt,Vh),u(i,dp,m),u(i,Zr,m),e(Zr,yl),e(yl,Kh),u(i,pp,m),F(Fo,i,m),u(i,cp,m),u(i,Se,m),e(Se,Yh),e(Se,kl),e(kl,Jh),e(Se,Xh),e(Se,ql),e(ql,Zh),e(Se,eu),e(Se,jl),e(jl,tu),e(Se,su),e(Se,$l),e($l,au),e(Se,ou),e(Se,El),e(El,nu),e(Se,ru),e(Se,Fl),e(Fl,iu),e(Se,lu),e(Se,ei),e(ei,du),e(Se,pu),e(Se,mn),e(mn,cu),e(Se,hu),e(Se,fn),e(fn,uu),e(Se,mu),u(i,hp,m),u(i,ti,m),e(ti,fu),u(i,up,m),F(Ao,i,m),u(i,mp,m),u(i,Xa,m),e(Xa,zo),e(zo,Al),F(gn,Al,null),e(Xa,gu),e(Xa,zl),e(zl,_u),u(i,fp,m),F(xo,i,m),u(i,gp,m),u(i,vt,m),e(vt,Tu),e(vt,xl),e(xl,vu),e(vt,bu),e(vt,Cl),e(Cl,wu),e(vt,yu),e(vt,Ml),e(Ml,ku),e(vt,qu),e(vt,_n),e(_n,ju),e(vt,$u),e(vt,Tn),e(Tn,Eu),e(vt,Fu),u(i,_p,m),u(i,Za,m),e(Za,Co),e(Co,Pl),F(vn,Pl,null),e(Za,Au),e(Za,Sl),e(Sl,zu),u(i,Tp,m),u(i,eo,m),F(bn,eo,null),e(eo,xu),e(eo,wn),e(wn,Cu),e(wn,si),e(si,Mu),e(wn,Pu),u(i,vp,m),u(i,to,m),e(to,Mo),e(Mo,Dl),F(yn,Dl,null),e(to,Su),e(to,Nl),e(Nl,Du),u(i,bp,m),u(i,Wt,m),F(kn,Wt,null),e(Wt,Nu),e(Wt,_s),e(_s,Ou),e(_s,ai),e(ai,Lu),e(_s,Qu),e(_s,Ol),e(Ol,Iu),e(_s,Wu),e(_s,Ll),e(Ll,Hu),e(_s,Uu),e(_s,oi),e(oi,Ru),e(_s,Gu),e(Wt,Bu),e(Wt,qn),e(qn,Vu),e(qn,jn),e(jn,Ku),e(qn,Yu),e(Wt,Ju),e(Wt,Ql),e(Ql,Xu),e(Wt,Zu),F($n,Wt,null),u(i,wp,m),u(i,so,m),e(so,Po),e(Po,Il),F(En,Il,null),e(so,em),e(so,Wl),e(Wl,tm),u(i,yp,m),u(i,Be,m),F(Fn,Be,null),e(Be,sm),e(Be,Hl),e(Hl,am),e(Be,om),e(Be,Qe),e(Qe,nm),e(Qe,ni),e(ni,rm),e(Qe,im),e(Qe,ri),e(ri,lm),e(Qe,dm),e(Qe,Ul),e(Ul,pm),e(Qe,cm),e(Qe,Rl),e(Rl,hm),e(Qe,um),e(Qe,Gl),e(Gl,mm),e(Qe,fm),e(Qe,Bl),e(Bl,gm),e(Qe,_m),e(Qe,Vl),e(Vl,Tm),e(Qe,vm),e(Qe,Kl),e(Kl,bm),e(Qe,wm),e(Qe,Yl),e(Yl,ym),e(Qe,km),e(Be,qm),e(Be,it),e(it,Jl),e(Jl,jm),e(it,$m),e(it,Xl),e(Xl,Em),e(it,Fm),e(it,Zl),e(Zl,Am),e(it,zm),e(it,ed),e(ed,xm),e(it,Cm),e(it,td),e(td,Mm),e(it,Pm),e(it,sd),e(sd,Sm),e(it,Dm),e(it,ad),e(ad,Nm),e(Be,Om),e(Be,ii),e(ii,li),e(li,Lm),e(ii,Qm),e(Be,Im),e(Be,So),F(An,So,null),e(So,Wm),e(So,od),e(od,Hm),e(Be,Um),e(Be,Ta),F(zn,Ta,null),e(Ta,Rm),e(Ta,xn),e(xn,Gm),e(xn,di),e(di,Bm),e(xn,Vm),e(Ta,Km),e(Ta,Cn),e(Cn,Ym),e(Cn,Mn),e(Mn,Jm),e(Cn,Xm),e(Be,Zm),e(Be,pi),F(Pn,pi,null),u(i,kp,m),u(i,ao,m),e(ao,Do),e(Do,nd),F(Sn,nd,null),e(ao,ef),e(ao,rd),e(rd,tf),u(i,qp,m),u(i,lt,m),F(Dn,lt,null),e(lt,sf),e(lt,Nn),e(Nn,af),e(Nn,ci),e(ci,of),e(Nn,nf),e(lt,rf),e(lt,On),e(On,lf),e(On,Ln),e(Ln,df),e(On,pf),e(lt,cf),e(lt,Qn),e(Qn,hf),e(Qn,hi),e(hi,uf),e(Qn,mf),e(lt,ff),e(lt,In),e(In,gf),e(In,Wn),e(Wn,_f),e(In,Tf),e(lt,vf),e(lt,Vt),F(Hn,Vt,null),e(Vt,bf),e(Vt,oo),e(oo,wf),e(oo,ui),e(ui,yf),e(oo,kf),e(oo,id),e(id,qf),e(oo,jf),e(Vt,$f),F(No,Vt,null),e(Vt,Ef),e(Vt,ld),e(ld,Ff),e(Vt,Af),F(Un,Vt,null),u(i,jp,m),u(i,no,m),e(no,Oo),e(Oo,dd),F(Rn,dd,null),e(no,zf),e(no,pd),e(pd,xf),u(i,$p,m),u(i,Ts,m),F(Gn,Ts,null),e(Ts,Cf),e(Ts,ro),e(ro,Mf),e(ro,cd),e(cd,Pf),e(ro,Sf),e(ro,mi),e(mi,Df),e(ro,Nf),e(Ts,Of),e(Ts,Bn),e(Bn,Lf),e(Bn,Vn),e(Vn,Qf),e(Bn,If),e(Ts,Wf),e(Ts,Kt),F(Kn,Kt,null),e(Kt,Hf),e(Kt,io),e(io,Uf),e(io,fi),e(fi,Rf),e(io,Gf),e(io,hd),e(hd,Bf),e(io,Vf),e(Kt,Kf),F(Lo,Kt,null),e(Kt,Yf),e(Kt,ud),e(ud,Jf),e(Kt,Xf),F(Yn,Kt,null),u(i,Ep,m),u(i,lo,m),e(lo,Qo),e(Qo,md),F(Jn,md,null),e(lo,Zf),e(lo,fd),e(fd,eg),u(i,Fp,m),u(i,Ht,m),F(Xn,Ht,null),e(Ht,tg),e(Ht,gd),e(gd,sg),e(Ht,ag),e(Ht,Zn),e(Zn,og),e(Zn,gi),e(gi,ng),e(Zn,rg),e(Ht,ig),e(Ht,er),e(er,lg),e(er,tr),e(tr,dg),e(er,pg),e(Ht,cg),e(Ht,Yt),F(sr,Yt,null),e(Yt,hg),e(Yt,po),e(po,ug),e(po,_i),e(_i,mg),e(po,fg),e(po,_d),e(_d,gg),e(po,_g),e(Yt,Tg),F(Io,Yt,null),e(Yt,vg),e(Yt,Td),e(Td,bg),e(Yt,wg),F(ar,Yt,null),u(i,Ap,m),u(i,co,m),e(co,Wo),e(Wo,vd),F(or,vd,null),e(co,yg),e(co,bd),e(bd,kg),u(i,zp,m),u(i,Ut,m),F(nr,Ut,null),e(Ut,qg),e(Ut,ho),e(ho,jg),e(ho,wd),e(wd,$g),e(ho,Eg),e(ho,yd),e(yd,Fg),e(ho,Ag),e(Ut,zg),e(Ut,rr),e(rr,xg),e(rr,Ti),e(Ti,Cg),e(rr,Mg),e(Ut,Pg),e(Ut,ir),e(ir,Sg),e(ir,lr),e(lr,Dg),e(ir,Ng),e(Ut,Og),e(Ut,Jt),F(dr,Jt,null),e(Jt,Lg),e(Jt,uo),e(uo,Qg),e(uo,vi),e(vi,Ig),e(uo,Wg),e(uo,kd),e(kd,Hg),e(uo,Ug),e(Jt,Rg),F(Ho,Jt,null),e(Jt,Gg),e(Jt,qd),e(qd,Bg),e(Jt,Vg),F(pr,Jt,null),u(i,xp,m),u(i,mo,m),e(mo,Uo),e(Uo,jd),F(cr,jd,null),e(mo,Kg),e(mo,$d),e($d,Yg),u(i,Cp,m),u(i,dt,m),F(hr,dt,null),e(dt,Jg),e(dt,Ed),e(Ed,Xg),e(dt,Zg),e(dt,ur),e(ur,e_),e(ur,bi),e(bi,t_),e(ur,s_),e(dt,a_),e(dt,mr),e(mr,o_),e(mr,fr),e(fr,n_),e(mr,r_),e(dt,i_),F(Ro,dt,null),e(dt,l_),e(dt,Xt),F(gr,Xt,null),e(Xt,d_),e(Xt,fo),e(fo,p_),e(fo,wi),e(wi,c_),e(fo,h_),e(fo,Fd),e(Fd,u_),e(fo,m_),e(Xt,f_),F(Go,Xt,null),e(Xt,g_),e(Xt,Ad),e(Ad,__),e(Xt,T_),F(_r,Xt,null),u(i,Mp,m),u(i,go,m),e(go,Bo),e(Bo,zd),F(Tr,zd,null),e(go,v_),e(go,xd),e(xd,b_),u(i,Pp,m),u(i,pt,m),F(vr,pt,null),e(pt,w_),e(pt,br),e(br,y_),e(br,Cd),e(Cd,k_),e(br,q_),e(pt,j_),e(pt,wr),e(wr,$_),e(wr,yi),e(yi,E_),e(wr,F_),e(pt,A_),e(pt,yr),e(yr,z_),e(yr,kr),e(kr,x_),e(yr,C_),e(pt,M_),F(Vo,pt,null),e(pt,P_),e(pt,Zt),F(qr,Zt,null),e(Zt,S_),e(Zt,_o),e(_o,D_),e(_o,ki),e(ki,N_),e(_o,O_),e(_o,Md),e(Md,L_),e(_o,Q_),e(Zt,I_),F(Ko,Zt,null),e(Zt,W_),e(Zt,Pd),e(Pd,H_),e(Zt,U_),F(jr,Zt,null),u(i,Sp,m),u(i,To,m),e(To,Yo),e(Yo,Sd),F($r,Sd,null),e(To,R_),e(To,Dd),e(Dd,G_),u(i,Dp,m),u(i,ct,m),F(Er,ct,null),e(ct,B_),e(ct,Nd),e(Nd,V_),e(ct,K_),e(ct,Fr),e(Fr,Y_),e(Fr,qi),e(qi,J_),e(Fr,X_),e(ct,Z_),e(ct,Ar),e(Ar,eT),e(Ar,zr),e(zr,tT),e(Ar,sT),e(ct,aT),F(Jo,ct,null),e(ct,oT),e(ct,es),F(xr,es,null),e(es,nT),e(es,vo),e(vo,rT),e(vo,ji),e(ji,iT),e(vo,lT),e(vo,Od),e(Od,dT),e(vo,pT),e(es,cT),F(Xo,es,null),e(es,hT),e(es,Ld),e(Ld,uT),e(es,mT),F(Cr,es,null),u(i,Np,m),u(i,bo,m),e(bo,Zo),e(Zo,Qd),F(Mr,Qd,null),e(bo,fT),e(bo,Id),e(Id,gT),u(i,Op,m),u(i,ht,m),F(Pr,ht,null),e(ht,_T),e(ht,wo),e(wo,TT),e(wo,Wd),e(Wd,vT),e(wo,bT),e(wo,Hd),e(Hd,wT),e(wo,yT),e(ht,kT),e(ht,Sr),e(Sr,qT),e(Sr,$i),e($i,jT),e(Sr,$T),e(ht,ET),e(ht,Dr),e(Dr,FT),e(Dr,Nr),e(Nr,AT),e(Dr,zT),e(ht,xT),F(en,ht,null),e(ht,CT),e(ht,ts),F(Or,ts,null),e(ts,MT),e(ts,yo),e(yo,PT),e(yo,Ei),e(Ei,ST),e(yo,DT),e(yo,Ud),e(Ud,NT),e(yo,OT),e(ts,LT),F(tn,ts,null),e(ts,QT),e(ts,Rd),e(Rd,IT),e(ts,WT),F(Lr,ts,null),Lp=!0},p(i,[m]){const Qr={};m&2&&(Qr.$$scope={dirty:m,ctx:i}),qo.$set(Qr);const Gd={};m&2&&(Gd.$$scope={dirty:m,ctx:i}),Fo.$set(Gd);const Bd={};m&2&&(Bd.$$scope={dirty:m,ctx:i}),Ao.$set(Bd);const Vd={};m&2&&(Vd.$$scope={dirty:m,ctx:i}),xo.$set(Vd);const Ir={};m&2&&(Ir.$$scope={dirty:m,ctx:i}),No.$set(Ir);const Kd={};m&2&&(Kd.$$scope={dirty:m,ctx:i}),Lo.$set(Kd);const Yd={};m&2&&(Yd.$$scope={dirty:m,ctx:i}),Io.$set(Yd);const Jd={};m&2&&(Jd.$$scope={dirty:m,ctx:i}),Ho.$set(Jd);const Wr={};m&2&&(Wr.$$scope={dirty:m,ctx:i}),Ro.$set(Wr);const Xd={};m&2&&(Xd.$$scope={dirty:m,ctx:i}),Go.$set(Xd);const Zd={};m&2&&(Zd.$$scope={dirty:m,ctx:i}),Vo.$set(Zd);const ko={};m&2&&(ko.$$scope={dirty:m,ctx:i}),Ko.$set(ko);const Fi={};m&2&&(Fi.$$scope={dirty:m,ctx:i}),Jo.$set(Fi);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:i}),Xo.$set(ep);const Ai={};m&2&&(Ai.$$scope={dirty:m,ctx:i}),en.$set(Ai);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:i}),tn.$set(tp)},i(i){Lp||(A(b.$$.fragment,i),A(V.$$.fragment,i),A(rt.$$.fragment,i),A(qo.$$.fragment,i),A(Fo.$$.fragment,i),A(Ao.$$.fragment,i),A(gn.$$.fragment,i),A(xo.$$.fragment,i),A(vn.$$.fragment,i),A(bn.$$.fragment,i),A(yn.$$.fragment,i),A(kn.$$.fragment,i),A($n.$$.fragment,i),A(En.$$.fragment,i),A(Fn.$$.fragment,i),A(An.$$.fragment,i),A(zn.$$.fragment,i),A(Pn.$$.fragment,i),A(Sn.$$.fragment,i),A(Dn.$$.fragment,i),A(Hn.$$.fragment,i),A(No.$$.fragment,i),A(Un.$$.fragment,i),A(Rn.$$.fragment,i),A(Gn.$$.fragment,i),A(Kn.$$.fragment,i),A(Lo.$$.fragment,i),A(Yn.$$.fragment,i),A(Jn.$$.fragment,i),A(Xn.$$.fragment,i),A(sr.$$.fragment,i),A(Io.$$.fragment,i),A(ar.$$.fragment,i),A(or.$$.fragment,i),A(nr.$$.fragment,i),A(dr.$$.fragment,i),A(Ho.$$.fragment,i),A(pr.$$.fragment,i),A(cr.$$.fragment,i),A(hr.$$.fragment,i),A(Ro.$$.fragment,i),A(gr.$$.fragment,i),A(Go.$$.fragment,i),A(_r.$$.fragment,i),A(Tr.$$.fragment,i),A(vr.$$.fragment,i),A(Vo.$$.fragment,i),A(qr.$$.fragment,i),A(Ko.$$.fragment,i),A(jr.$$.fragment,i),A($r.$$.fragment,i),A(Er.$$.fragment,i),A(Jo.$$.fragment,i),A(xr.$$.fragment,i),A(Xo.$$.fragment,i),A(Cr.$$.fragment,i),A(Mr.$$.fragment,i),A(Pr.$$.fragment,i),A(en.$$.fragment,i),A(Or.$$.fragment,i),A(tn.$$.fragment,i),A(Lr.$$.fragment,i),Lp=!0)},o(i){z(b.$$.fragment,i),z(V.$$.fragment,i),z(rt.$$.fragment,i),z(qo.$$.fragment,i),z(Fo.$$.fragment,i),z(Ao.$$.fragment,i),z(gn.$$.fragment,i),z(xo.$$.fragment,i),z(vn.$$.fragment,i),z(bn.$$.fragment,i),z(yn.$$.fragment,i),z(kn.$$.fragment,i),z($n.$$.fragment,i),z(En.$$.fragment,i),z(Fn.$$.fragment,i),z(An.$$.fragment,i),z(zn.$$.fragment,i),z(Pn.$$.fragment,i),z(Sn.$$.fragment,i),z(Dn.$$.fragment,i),z(Hn.$$.fragment,i),z(No.$$.fragment,i),z(Un.$$.fragment,i),z(Rn.$$.fragment,i),z(Gn.$$.fragment,i),z(Kn.$$.fragment,i),z(Lo.$$.fragment,i),z(Yn.$$.fragment,i),z(Jn.$$.fragment,i),z(Xn.$$.fragment,i),z(sr.$$.fragment,i),z(Io.$$.fragment,i),z(ar.$$.fragment,i),z(or.$$.fragment,i),z(nr.$$.fragment,i),z(dr.$$.fragment,i),z(Ho.$$.fragment,i),z(pr.$$.fragment,i),z(cr.$$.fragment,i),z(hr.$$.fragment,i),z(Ro.$$.fragment,i),z(gr.$$.fragment,i),z(Go.$$.fragment,i),z(_r.$$.fragment,i),z(Tr.$$.fragment,i),z(vr.$$.fragment,i),z(Vo.$$.fragment,i),z(qr.$$.fragment,i),z(Ko.$$.fragment,i),z(jr.$$.fragment,i),z($r.$$.fragment,i),z(Er.$$.fragment,i),z(Jo.$$.fragment,i),z(xr.$$.fragment,i),z(Xo.$$.fragment,i),z(Cr.$$.fragment,i),z(Mr.$$.fragment,i),z(Pr.$$.fragment,i),z(en.$$.fragment,i),z(Or.$$.fragment,i),z(tn.$$.fragment,i),z(Lr.$$.fragment,i),Lp=!1},d(i){t(l),i&&t(_),i&&t(c),x(b),i&&t(D),i&&t(q),x(V),i&&t(I),i&&t(O),i&&t(N),i&&t(ee),i&&t(ce),i&&t(oe),i&&t(be),i&&t(g),i&&t(ve),i&&t(ze),i&&t(le),i&&t(xe),i&&t(de),i&&t(pe),i&&t(ut),i&&t(mt),i&&t(ft),i&&t(gt),i&&t(Ke),i&&t(Pe),i&&t(vs),i&&t(Gt),i&&t(bs),i&&t(Ye),i&&t(ca),i&&t(Qt),x(rt),i&&t(ha),i&&t(Ie),i&&t(ua),i&&t(ys),i&&t(ma),i&&t(fe),i&&t(fa),i&&t(_t),i&&t(ga),i&&t(qs),i&&t(_a),i&&t(Ce),i&&t(sp),x(qo,i),i&&t(ap),i&&t(jo),i&&t(op),i&&t($o),i&&t(np),i&&t(Hr),i&&t(rp),i&&t(Eo),i&&t(ip),i&&t(We),i&&t(lp),i&&t(Tt),i&&t(dp),i&&t(Zr),i&&t(pp),x(Fo,i),i&&t(cp),i&&t(Se),i&&t(hp),i&&t(ti),i&&t(up),x(Ao,i),i&&t(mp),i&&t(Xa),x(gn),i&&t(fp),x(xo,i),i&&t(gp),i&&t(vt),i&&t(_p),i&&t(Za),x(vn),i&&t(Tp),i&&t(eo),x(bn),i&&t(vp),i&&t(to),x(yn),i&&t(bp),i&&t(Wt),x(kn),x($n),i&&t(wp),i&&t(so),x(En),i&&t(yp),i&&t(Be),x(Fn),x(An),x(zn),x(Pn),i&&t(kp),i&&t(ao),x(Sn),i&&t(qp),i&&t(lt),x(Dn),x(Hn),x(No),x(Un),i&&t(jp),i&&t(no),x(Rn),i&&t($p),i&&t(Ts),x(Gn),x(Kn),x(Lo),x(Yn),i&&t(Ep),i&&t(lo),x(Jn),i&&t(Fp),i&&t(Ht),x(Xn),x(sr),x(Io),x(ar),i&&t(Ap),i&&t(co),x(or),i&&t(zp),i&&t(Ut),x(nr),x(dr),x(Ho),x(pr),i&&t(xp),i&&t(mo),x(cr),i&&t(Cp),i&&t(dt),x(hr),x(Ro),x(gr),x(Go),x(_r),i&&t(Mp),i&&t(go),x(Tr),i&&t(Pp),i&&t(pt),x(vr),x(Vo),x(qr),x(Ko),x(jr),i&&t(Sp),i&&t(To),x($r),i&&t(Dp),i&&t(ct),x(Er),x(Jo),x(xr),x(Xo),x(Cr),i&&t(Np),i&&t(bo),x(Mr),i&&t(Op),i&&t(ht),x(Pr),x(en),x(Or),x(tn),x(Lr)}}}const jk={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function $k(U){return Ky(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mk extends Uy{constructor(l){super();Ry(this,l,$k,qk,Gy,{})}}export{Mk as default,jk as metadata};
