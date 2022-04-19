import{S as Uy,i as Ry,s as Gy,e as n,k as d,w as $,t as s,M as By,c as o,d as t,m as p,a as r,x as E,h as a,b as h,N as Vy,F as e,g as m,y as F,q as A,o as z,B as x,v as Ky,L as ro}from"../../chunks/vendor-6b77c823.js";import{T as Ms}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-1088f2fb.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{F as Cc,M as io}from"../../chunks/Markdown-9acf6d91.js";function Yy(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=n("p"),_=s(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=n("a"),f=s("torch-scatter"),b=s(" dependency:"),v=d(),$(T.$$.fragment),k=d(),y=n("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n("a"),H=s("TapasConfig"),B=s(", and then create a "),V=n("a"),R=s("TapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(w){l=o(w,"P",{});var M=r(l);_=a(M,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=o(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"torch-scatter"),G.forEach(t),b=a(M," dependency:"),M.forEach(t),v=p(w),E(T.$$.fragment,w),k=p(w),y=o(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);R=a(ee,"TapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/rusty1s/pytorch_scatter"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(w,M){m(w,l,M),e(l,_),e(l,c),e(c,f),e(l,b),m(w,v,M),F(T,w,M),m(w,k,M),m(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),m(w,re,M),F(I,w,M),O=!0},p:ro,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(v),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function Jy(U){let l,_;return l=new io({props:{$$slots:{default:[Yy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Xy(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=n("p"),_=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=n("a"),f=s("tensorflow_probability"),b=s(" dependency:"),v=d(),$(T.$$.fragment),k=d(),y=n("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n("a"),H=s("TapasConfig"),B=s(", and then create a "),V=n("a"),R=s("TFTapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(w){l=o(w,"P",{});var M=r(l);_=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=o(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"tensorflow_probability"),G.forEach(t),b=a(M," dependency:"),M.forEach(t),v=p(w),E(T.$$.fragment,w),k=p(w),y=o(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);R=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/tensorflow/probability"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(w,M){m(w,l,M),e(l,_),e(l,c),e(c,f),e(l,b),m(w,v,M),F(T,w,M),m(w,k,M),m(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),m(w,re,M),F(I,w,M),O=!0},p:ro,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(v),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function Zy(U){let l,_;return l=new io({props:{$$slots:{default:[Xy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ek(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,mt,ut,pa,ft,gt,Ds,tt,Ns,Os,Ke,Pe,Ls,wt,ke,yt,kt,Qs,qt,jt,Is,$t,bs,Gt,Et,vs,Ye,$e,Ws,Ft,ae,nt,Bt,Hs,At,ns,Us,zt,xt,Rs,Ct,os,Gs,Mt,rs,Bs,Pt,Vs,Le,St,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Nt,Ot,Xs,Zs,Re,ea,hs,ms,et,Lt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=n("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n("a"),f=s("TapasTokenizer"),b=s(" to convert table-question pairs into "),v=n("code"),T=s("input_ids"),k=s(", "),y=n("code"),D=s("attention_mask"),q=s(", "),H=n("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=n("a"),K=s("TapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=n("table"),w=n("thead"),M=n("tr"),G=n("th"),C=n("strong"),N=s("Task"),ee=d(),te=n("th"),ce=n("strong"),ne=s("Required inputs"),se=d(),P=n("tbody"),L=n("tr"),W=n("td"),X=s("Conversational"),Q=d(),Y=n("td"),ge=n("code"),me=s("input_ids"),_e=s(", "),ue=n("code"),oe=s("attention_mask"),qe=s(", "),ie=n("code"),ve=s("token_type_ids"),g=s(", "),S=n("code"),be=s("labels"),ze=d(),we=n("tr"),le=n("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=n("td"),de=n("code"),pe=s("input_ids"),De=s(", "),je=n("code"),Te=s("attention_mask"),Ne=s(", "),ye=n("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=n("code"),Ps=s("labels"),Ss=s(", "),mt=n("code"),ut=s("numeric_values"),pa=s(", "),ft=n("code"),gt=s("numeric_values_scale"),Ds=s(", "),tt=n("code"),Ns=s("float_answer"),Os=d(),Ke=n("tr"),Pe=n("td"),Ls=s("Strong supervision for aggregation"),wt=d(),ke=n("td"),yt=n("code"),kt=s("input ids"),Qs=s(", "),qt=n("code"),jt=s("attention mask"),Is=s(", "),$t=n("code"),bs=s("token type ids"),Gt=s(", "),Et=n("code"),vs=s("labels"),Ye=s(", "),$e=n("code"),Ws=s("aggregation_labels"),Ft=d(),ae=n("p"),nt=n("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),At=n("code"),ns=s("labels"),Us=s(", "),zt=n("code"),xt=s("numeric_values"),Rs=s(" and "),Ct=n("code"),os=s("numeric_values_scale"),Gs=s(" based on the "),Mt=n("code"),rs=s("answer_coordinates"),Bs=s(" and "),Pt=n("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),St=n("code"),is=s("float_answer"),Ks=s(" and "),Dt=n("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=n("p"),cs=s("Note that "),ot=n("a"),Js=s("TapasTokenizer"),Nt=s(" expects the data of the table to be "),Ot=n("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=n("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ms=d(),$(et.$$.fragment),this.h()},l(j){l=o(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(t),b=a(J," to convert table-question pairs into "),v=o(J,"CODE",{});var ta=r(v);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=o(J,"CODE",{});var Ca=r(y);D=a(Ca,"attention_mask"),Ca.forEach(t),q=a(J,", "),H=o(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=o(J,"A",{href:!0});var Qt=r(R);K=a(Qt,"TapasForQuestionAnswering"),Qt.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=o(j,"TABLE",{});var st=r(O);w=o(st,"THEAD",{});var sa=r(w);M=o(sa,"TR",{});var rt=r(M);G=o(rt,"TH",{});var Ma=r(G);C=o(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),Ma.forEach(t),ee=p(rt),te=o(rt,"TH",{});var Pa=r(te);ce=o(Pa,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(t),Pa.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=o(st,"TBODY",{});var Ie=r(P);L=o(Ie,"TR",{});var us=r(L);W=o(us,"TD",{});var ws=r(W);X=a(ws,"Conversational"),ws.forEach(t),Q=p(us),Y=o(us,"TD",{});var Ge=r(Y);ge=o(Ge,"CODE",{});var Sa=r(ge);me=a(Sa,"input_ids"),Sa.forEach(t),_e=a(Ge,", "),ue=o(Ge,"CODE",{});var ma=r(ue);oe=a(ma,"attention_mask"),ma.forEach(t),qe=a(Ge,", "),ie=o(Ge,"CODE",{});var ys=r(ie);ve=a(ys,"token_type_ids"),ys.forEach(t),g=a(Ge,", "),S=o(Ge,"CODE",{});var na=r(S);be=a(na,"labels"),na.forEach(t),Ge.forEach(t),us.forEach(t),ze=p(Ie),we=o(Ie,"TR",{});var fs=r(we);le=o(fs,"TD",{});var ua=r(le);xe=a(ua,"Weak supervision for aggregation"),ua.forEach(t),Me=p(fs),Z=o(fs,"TD",{});var fe=r(Z);de=o(fe,"CODE",{});var Da=r(de);pe=a(Da,"input_ids"),Da.forEach(t),De=a(fe,", "),je=o(fe,"CODE",{});var ks=r(je);Te=a(ks,"attention_mask"),ks.forEach(t),Ne=a(fe,", "),ye=o(fe,"CODE",{});var Na=r(ye);Ae=a(Na,"token_type_ids"),Na.forEach(t),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Oa=r(Ze);Ps=a(Oa,"labels"),Oa.forEach(t),Ss=a(fe,", "),mt=o(fe,"CODE",{});var fa=r(mt);ut=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),ft=o(fe,"CODE",{});var _t=r(ft);gt=a(_t,"numeric_values_scale"),_t.forEach(t),Ds=a(fe,", "),tt=o(fe,"CODE",{});var oa=r(tt);Ns=a(oa,"float_answer"),oa.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=o(Ie,"TR",{});var gs=r(Ke);Pe=o(gs,"TD",{});var La=r(Pe);Ls=a(La,"Strong supervision for aggregation"),La.forEach(t),wt=p(gs),ke=o(gs,"TD",{});var Fe=r(ke);yt=o(Fe,"CODE",{});var Qa=r(yt);kt=a(Qa,"input ids"),Qa.forEach(t),Qs=a(Fe,", "),qt=o(Fe,"CODE",{});var ra=r(qt);jt=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),$t=o(Fe,"CODE",{});var Ia=r($t);bs=a(Ia,"token type ids"),Ia.forEach(t),Gt=a(Fe,", "),Et=o(Fe,"CODE",{});var Wa=r(Et);vs=a(Wa,"labels"),Wa.forEach(t),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ha=r($e);Ws=a(Ha,"aggregation_labels"),Ha.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),Ft=p(j),ae=o(j,"P",{});var he=r(ae);nt=o(he,"A",{href:!0});var Ua=r(nt);Bt=a(Ua,"TapasTokenizer"),Ua.forEach(t),Hs=a(he," creates the "),At=o(he,"CODE",{});var ia=r(At);ns=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=o(he,"CODE",{});var Ra=r(zt);xt=a(Ra,"numeric_values"),Ra.forEach(t),Rs=a(he," and "),Ct=o(he,"CODE",{});var Ga=r(Ct);os=a(Ga,"numeric_values_scale"),Ga.forEach(t),Gs=a(he," based on the "),Mt=o(he,"CODE",{});var ga=r(Mt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),Pt=o(he,"CODE",{});var qs=r(Pt);Vs=a(qs,"answer_text"),qs.forEach(t),Le=a(he," columns of the TSV file. The "),St=o(he,"CODE",{});var Ba=r(St);is=a(Ba,"float_answer"),Ba.forEach(t),Ks=a(he," and "),Dt=o(he,"CODE",{});var _a=r(Dt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=o(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),ot=o(Ce,"A",{href:!0});var la=r(ot);Js=a(la,"TapasTokenizer"),la.forEach(t),Nt=a(Ce," expects the data of the table to be "),Ot=o(Ce,"STRONG",{});var It=r(Ot);Xs=a(It,"text-only"),It.forEach(t),Zs=a(Ce,". You can use "),Re=o(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),ms=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){m(j,l,J),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),m(j,I,J),m(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,ne),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,me),e(Y,_e),e(Y,ue),e(ue,oe),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,g),e(Y,S),e(S,be),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,mt),e(mt,ut),e(Z,pa),e(Z,ft),e(ft,gt),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,wt),e(Ke,ke),e(ke,yt),e(yt,kt),e(ke,Qs),e(ke,qt),e(qt,jt),e(ke,Is),e(ke,$t),e($t,bs),e(ke,Gt),e(ke,Et),e(Et,vs),e(ke,Ye),e(ke,$e),e($e,Ws),m(j,Ft,J),m(j,ae,J),e(ae,nt),e(nt,Bt),e(ae,Hs),e(ae,At),e(At,ns),e(ae,Us),e(ae,zt),e(zt,xt),e(ae,Rs),e(ae,Ct),e(Ct,os),e(ae,Gs),e(ae,Mt),e(Mt,rs),e(ae,Bs),e(ae,Pt),e(Pt,Vs),e(ae,Le),e(ae,St),e(St,is),e(ae,Ks),e(ae,Dt),e(Dt,ls),e(ae,Ys),m(j,ds,J),F(Ue,j,J),m(j,ps,J),m(j,Ee,J),e(Ee,cs),e(Ee,ot),e(ot,Js),e(Ee,Nt),e(Ee,Ot),e(Ot,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),m(j,ms,J),F(et,j,J),Lt=!0},p:ro,i(j){Lt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Lt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Lt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(Ft),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(ms),x(et,j)}}}function tk(U){let l,_;return l=new io({props:{$$slots:{default:[ek]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function sk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,mt,ut,pa,ft,gt,Ds,tt,Ns,Os,Ke,Pe,Ls,wt,ke,yt,kt,Qs,qt,jt,Is,$t,bs,Gt,Et,vs,Ye,$e,Ws,Ft,ae,nt,Bt,Hs,At,ns,Us,zt,xt,Rs,Ct,os,Gs,Mt,rs,Bs,Pt,Vs,Le,St,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Nt,Ot,Xs,Zs,Re,ea,hs,ms,et,Lt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=n("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n("a"),f=s("TapasTokenizer"),b=s(" to convert table-question pairs into "),v=n("code"),T=s("input_ids"),k=s(", "),y=n("code"),D=s("attention_mask"),q=s(", "),H=n("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=n("a"),K=s("TFTapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=n("table"),w=n("thead"),M=n("tr"),G=n("th"),C=n("strong"),N=s("Task"),ee=d(),te=n("th"),ce=n("strong"),ne=s("Required inputs"),se=d(),P=n("tbody"),L=n("tr"),W=n("td"),X=s("Conversational"),Q=d(),Y=n("td"),ge=n("code"),me=s("input_ids"),_e=s(", "),ue=n("code"),oe=s("attention_mask"),qe=s(", "),ie=n("code"),ve=s("token_type_ids"),g=s(", "),S=n("code"),be=s("labels"),ze=d(),we=n("tr"),le=n("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=n("td"),de=n("code"),pe=s("input_ids"),De=s(", "),je=n("code"),Te=s("attention_mask"),Ne=s(", "),ye=n("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=n("code"),Ps=s("labels"),Ss=s(", "),mt=n("code"),ut=s("numeric_values"),pa=s(", "),ft=n("code"),gt=s("numeric_values_scale"),Ds=s(", "),tt=n("code"),Ns=s("float_answer"),Os=d(),Ke=n("tr"),Pe=n("td"),Ls=s("Strong supervision for aggregation"),wt=d(),ke=n("td"),yt=n("code"),kt=s("input ids"),Qs=s(", "),qt=n("code"),jt=s("attention mask"),Is=s(", "),$t=n("code"),bs=s("token type ids"),Gt=s(", "),Et=n("code"),vs=s("labels"),Ye=s(", "),$e=n("code"),Ws=s("aggregation_labels"),Ft=d(),ae=n("p"),nt=n("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),At=n("code"),ns=s("labels"),Us=s(", "),zt=n("code"),xt=s("numeric_values"),Rs=s(" and "),Ct=n("code"),os=s("numeric_values_scale"),Gs=s(" based on the "),Mt=n("code"),rs=s("answer_coordinates"),Bs=s(" and "),Pt=n("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),St=n("code"),is=s("float_answer"),Ks=s(" and "),Dt=n("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=n("p"),cs=s("Note that "),ot=n("a"),Js=s("TapasTokenizer"),Nt=s(" expects the data of the table to be "),Ot=n("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=n("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ms=d(),$(et.$$.fragment),this.h()},l(j){l=o(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(t),b=a(J," to convert table-question pairs into "),v=o(J,"CODE",{});var ta=r(v);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=o(J,"CODE",{});var Ca=r(y);D=a(Ca,"attention_mask"),Ca.forEach(t),q=a(J,", "),H=o(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=o(J,"A",{href:!0});var Qt=r(R);K=a(Qt,"TFTapasForQuestionAnswering"),Qt.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=o(j,"TABLE",{});var st=r(O);w=o(st,"THEAD",{});var sa=r(w);M=o(sa,"TR",{});var rt=r(M);G=o(rt,"TH",{});var Ma=r(G);C=o(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),Ma.forEach(t),ee=p(rt),te=o(rt,"TH",{});var Pa=r(te);ce=o(Pa,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(t),Pa.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=o(st,"TBODY",{});var Ie=r(P);L=o(Ie,"TR",{});var us=r(L);W=o(us,"TD",{});var ws=r(W);X=a(ws,"Conversational"),ws.forEach(t),Q=p(us),Y=o(us,"TD",{});var Ge=r(Y);ge=o(Ge,"CODE",{});var Sa=r(ge);me=a(Sa,"input_ids"),Sa.forEach(t),_e=a(Ge,", "),ue=o(Ge,"CODE",{});var ma=r(ue);oe=a(ma,"attention_mask"),ma.forEach(t),qe=a(Ge,", "),ie=o(Ge,"CODE",{});var ys=r(ie);ve=a(ys,"token_type_ids"),ys.forEach(t),g=a(Ge,", "),S=o(Ge,"CODE",{});var na=r(S);be=a(na,"labels"),na.forEach(t),Ge.forEach(t),us.forEach(t),ze=p(Ie),we=o(Ie,"TR",{});var fs=r(we);le=o(fs,"TD",{});var ua=r(le);xe=a(ua,"Weak supervision for aggregation"),ua.forEach(t),Me=p(fs),Z=o(fs,"TD",{});var fe=r(Z);de=o(fe,"CODE",{});var Da=r(de);pe=a(Da,"input_ids"),Da.forEach(t),De=a(fe,", "),je=o(fe,"CODE",{});var ks=r(je);Te=a(ks,"attention_mask"),ks.forEach(t),Ne=a(fe,", "),ye=o(fe,"CODE",{});var Na=r(ye);Ae=a(Na,"token_type_ids"),Na.forEach(t),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Oa=r(Ze);Ps=a(Oa,"labels"),Oa.forEach(t),Ss=a(fe,", "),mt=o(fe,"CODE",{});var fa=r(mt);ut=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),ft=o(fe,"CODE",{});var _t=r(ft);gt=a(_t,"numeric_values_scale"),_t.forEach(t),Ds=a(fe,", "),tt=o(fe,"CODE",{});var oa=r(tt);Ns=a(oa,"float_answer"),oa.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=o(Ie,"TR",{});var gs=r(Ke);Pe=o(gs,"TD",{});var La=r(Pe);Ls=a(La,"Strong supervision for aggregation"),La.forEach(t),wt=p(gs),ke=o(gs,"TD",{});var Fe=r(ke);yt=o(Fe,"CODE",{});var Qa=r(yt);kt=a(Qa,"input ids"),Qa.forEach(t),Qs=a(Fe,", "),qt=o(Fe,"CODE",{});var ra=r(qt);jt=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),$t=o(Fe,"CODE",{});var Ia=r($t);bs=a(Ia,"token type ids"),Ia.forEach(t),Gt=a(Fe,", "),Et=o(Fe,"CODE",{});var Wa=r(Et);vs=a(Wa,"labels"),Wa.forEach(t),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ha=r($e);Ws=a(Ha,"aggregation_labels"),Ha.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),Ft=p(j),ae=o(j,"P",{});var he=r(ae);nt=o(he,"A",{href:!0});var Ua=r(nt);Bt=a(Ua,"TapasTokenizer"),Ua.forEach(t),Hs=a(he," creates the "),At=o(he,"CODE",{});var ia=r(At);ns=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=o(he,"CODE",{});var Ra=r(zt);xt=a(Ra,"numeric_values"),Ra.forEach(t),Rs=a(he," and "),Ct=o(he,"CODE",{});var Ga=r(Ct);os=a(Ga,"numeric_values_scale"),Ga.forEach(t),Gs=a(he," based on the "),Mt=o(he,"CODE",{});var ga=r(Mt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),Pt=o(he,"CODE",{});var qs=r(Pt);Vs=a(qs,"answer_text"),qs.forEach(t),Le=a(he," columns of the TSV file. The "),St=o(he,"CODE",{});var Ba=r(St);is=a(Ba,"float_answer"),Ba.forEach(t),Ks=a(he," and "),Dt=o(he,"CODE",{});var _a=r(Dt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=o(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),ot=o(Ce,"A",{href:!0});var la=r(ot);Js=a(la,"TapasTokenizer"),la.forEach(t),Nt=a(Ce," expects the data of the table to be "),Ot=o(Ce,"STRONG",{});var It=r(Ot);Xs=a(It,"text-only"),It.forEach(t),Zs=a(Ce,". You can use "),Re=o(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),ms=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){m(j,l,J),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),m(j,I,J),m(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,ne),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,me),e(Y,_e),e(Y,ue),e(ue,oe),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,g),e(Y,S),e(S,be),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,mt),e(mt,ut),e(Z,pa),e(Z,ft),e(ft,gt),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,wt),e(Ke,ke),e(ke,yt),e(yt,kt),e(ke,Qs),e(ke,qt),e(qt,jt),e(ke,Is),e(ke,$t),e($t,bs),e(ke,Gt),e(ke,Et),e(Et,vs),e(ke,Ye),e(ke,$e),e($e,Ws),m(j,Ft,J),m(j,ae,J),e(ae,nt),e(nt,Bt),e(ae,Hs),e(ae,At),e(At,ns),e(ae,Us),e(ae,zt),e(zt,xt),e(ae,Rs),e(ae,Ct),e(Ct,os),e(ae,Gs),e(ae,Mt),e(Mt,rs),e(ae,Bs),e(ae,Pt),e(Pt,Vs),e(ae,Le),e(ae,St),e(St,is),e(ae,Ks),e(ae,Dt),e(Dt,ls),e(ae,Ys),m(j,ds,J),F(Ue,j,J),m(j,ps,J),m(j,Ee,J),e(Ee,cs),e(Ee,ot),e(ot,Js),e(Ee,Nt),e(Ee,Ot),e(Ot,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),m(j,ms,J),F(et,j,J),Lt=!0},p:ro,i(j){Lt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Lt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Lt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(Ft),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(ms),x(et,j)}}}function ak(U){let l,_;return l=new io({props:{$$slots:{default:[sk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function nk(U){let l,_,c,f,b,v,T,k;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

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
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=n("p"),_=s("You can then fine-tune "),c=n("a"),f=s("TapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),v=d(),$(T.$$.fragment),this.h()},l(y){l=o(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var q=r(c);f=a(q,"TapasForQuestionAnswering"),q.forEach(t),b=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),v=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(y,D){m(y,l,D),e(l,_),e(l,c),e(c,f),e(l,b),m(y,v,D),F(T,y,D),k=!0},p:ro,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(v),x(T,y)}}}function ok(U){let l,_;return l=new io({props:{$$slots:{default:[nk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function rk(U){let l,_,c,f,b,v,T,k;return T=new Ve({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=n("p"),_=s("You can then fine-tune "),c=n("a"),f=s("TFTapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),v=d(),$(T.$$.fragment),this.h()},l(y){l=o(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var q=r(c);f=a(q,"TFTapasForQuestionAnswering"),q.forEach(t),b=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),v=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(y,D){m(y,l,D),e(l,_),e(l,c),e(c,f),e(l,b),m(y,v,D),F(T,y,D),k=!0},p:ro,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(v),x(T,y)}}}function ik(U){let l,_;return l=new io({props:{$$slots:{default:[rk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function lk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W;return L=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=s("Here we explain how you can use "),c=n("a"),f=s("TapasForQuestionAnswering"),b=s(" or "),v=n("a"),T=s("TFTapasForQuestionAnswering"),k=s(" for inference (i.e. making predictions on new data). For inference, only "),y=n("code"),D=s("input_ids"),q=s(", "),H=n("code"),B=s("attention_mask"),V=s(" and "),R=n("code"),K=s("token_type_ids"),re=s(" (which you can obtain using "),I=n("a"),O=s("TapasTokenizer"),w=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n("code"),G=s("convert_logits_to_predictions"),C=s(" method to convert these into predicted coordinates and optional aggregation indices."),N=d(),ee=n("p"),te=s("However, note that inference is "),ce=n("strong"),ne=s("different"),se=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),P=d(),$(L.$$.fragment),this.h()},l(X){l=o(X,"P",{});var Q=r(l);_=a(Q,"Here we explain how you can use "),c=o(Q,"A",{href:!0});var Y=r(c);f=a(Y,"TapasForQuestionAnswering"),Y.forEach(t),b=a(Q," or "),v=o(Q,"A",{href:!0});var ge=r(v);T=a(ge,"TFTapasForQuestionAnswering"),ge.forEach(t),k=a(Q," for inference (i.e. making predictions on new data). For inference, only "),y=o(Q,"CODE",{});var me=r(y);D=a(me,"input_ids"),me.forEach(t),q=a(Q,", "),H=o(Q,"CODE",{});var _e=r(H);B=a(_e,"attention_mask"),_e.forEach(t),V=a(Q," and "),R=o(Q,"CODE",{});var ue=r(R);K=a(ue,"token_type_ids"),ue.forEach(t),re=a(Q," (which you can obtain using "),I=o(Q,"A",{href:!0});var oe=r(I);O=a(oe,"TapasTokenizer"),oe.forEach(t),w=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o(Q,"CODE",{});var qe=r(M);G=a(qe,"convert_logits_to_predictions"),qe.forEach(t),C=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(t),N=p(X),ee=o(X,"P",{});var ie=r(ee);te=a(ie,"However, note that inference is "),ce=o(ie,"STRONG",{});var ve=r(ce);ne=a(ve,"different"),ve.forEach(t),se=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(t),P=p(X),E(L.$$.fragment,X),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(v,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(I,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,Q){m(X,l,Q),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),e(l,M),e(M,G),e(l,C),m(X,N,Q),m(X,ee,Q),e(ee,te),e(ee,ce),e(ce,ne),e(ee,se),m(X,P,Q),F(L,X,Q),W=!0},p:ro,i(X){W||(A(L.$$.fragment,X),W=!0)},o(X){z(L.$$.fragment,X),W=!1},d(X){X&&t(l),X&&t(N),X&&t(ee),X&&t(P),x(L,X)}}}function dk(U){let l,_;return l=new io({props:{$$slots:{default:[lk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function pk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se;return ne=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=s("Here we explain how you can use "),c=n("a"),f=s("TFTapasForQuestionAnswering"),b=s(" for inference (i.e. making predictions on new data). For inference, only "),v=n("code"),T=s("input_ids"),k=s(", "),y=n("code"),D=s("attention_mask"),q=s(" and "),H=n("code"),B=s("token_type_ids"),V=s(" (which you can obtain using "),R=n("a"),K=s("TapasTokenizer"),re=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=n("code"),O=s("convert_logits_to_predictions"),w=s(" method to convert these into predicted coordinates and optional aggregation indices."),M=d(),G=n("p"),C=s("However, note that inference is "),N=n("strong"),ee=s("different"),te=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=d(),$(ne.$$.fragment),this.h()},l(P){l=o(P,"P",{});var L=r(l);_=a(L,"Here we explain how you can use "),c=o(L,"A",{href:!0});var W=r(c);f=a(W,"TFTapasForQuestionAnswering"),W.forEach(t),b=a(L," for inference (i.e. making predictions on new data). For inference, only "),v=o(L,"CODE",{});var X=r(v);T=a(X,"input_ids"),X.forEach(t),k=a(L,", "),y=o(L,"CODE",{});var Q=r(y);D=a(Q,"attention_mask"),Q.forEach(t),q=a(L," and "),H=o(L,"CODE",{});var Y=r(H);B=a(Y,"token_type_ids"),Y.forEach(t),V=a(L," (which you can obtain using "),R=o(L,"A",{href:!0});var ge=r(R);K=a(ge,"TapasTokenizer"),ge.forEach(t),re=a(L,") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=o(L,"CODE",{});var me=r(I);O=a(me,"convert_logits_to_predictions"),me.forEach(t),w=a(L," method to convert these into predicted coordinates and optional aggregation indices."),L.forEach(t),M=p(P),G=o(P,"P",{});var _e=r(G);C=a(_e,"However, note that inference is "),N=o(_e,"STRONG",{});var ue=r(N);ee=a(ue,"different"),ue.forEach(t),te=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(t),ce=p(P),E(ne.$$.fragment,P),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(P,L){m(P,l,L),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),m(P,M,L),m(P,G,L),e(G,C),e(G,N),e(N,ee),e(G,te),m(P,ce,L),F(ne,P,L),se=!0},p:ro,i(P){se||(A(ne.$$.fragment,P),se=!0)},o(P){z(ne.$$.fragment,P),se=!1},d(P){P&&t(l),P&&t(M),P&&t(G),P&&t(ce),x(ne,P)}}}function ck(U){let l,_;return l=new io({props:{$$slots:{default:[pk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function hk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function mk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function uk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function fk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function gk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),b=n("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=n("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),B=n("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),w=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),P=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=o(g,"UL",{});var be=r(f);b=o(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=o(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=o(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=o(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=o(Te,"CODE",{});var ye=r(me);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),ue=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){m(g,l,S),e(l,_),m(g,c,S),m(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),m(g,D,S),m(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),m(g,O,S),m(g,w,S),e(w,M),m(g,G,S),m(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,me),e(me,_e),e(C,ue),e(C,oe),e(oe,qe),e(oe,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function _k(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function Tk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),b=n("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=n("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),B=n("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),w=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),P=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=o(g,"UL",{});var be=r(f);b=o(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=o(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=o(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=o(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=o(Te,"CODE",{});var ye=r(me);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),ue=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){m(g,l,S),e(l,_),m(g,c,S),m(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),m(g,D,S),m(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),m(g,O,S),m(g,w,S),e(w,M),m(g,G,S),m(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,me),e(me,_e),e(C,ue),e(C,oe),e(oe,qe),e(oe,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function bk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function vk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),b=n("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=n("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),B=n("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),w=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),P=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=o(g,"UL",{});var be=r(f);b=o(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=o(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=o(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=o(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=o(Te,"CODE",{});var ye=r(me);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),ue=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){m(g,l,S),e(l,_),m(g,c,S),m(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),m(g,D,S),m(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),m(g,O,S),m(g,w,S),e(w,M),m(g,G,S),m(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,me),e(me,_e),e(C,ue),e(C,oe),e(oe,qe),e(oe,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function wk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function yk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),b=n("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=n("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),B=n("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),w=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),P=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=o(g,"UL",{});var be=r(f);b=o(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=o(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=o(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=o(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=o(Te,"CODE",{});var ye=r(me);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),ue=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){m(g,l,S),e(l,_),m(g,c,S),m(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),m(g,D,S),m(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),m(g,O,S),m(g,w,S),e(w,M),m(g,G,S),m(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,me),e(me,_e),e(C,ue),e(C,oe),e(oe,qe),e(oe,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function kk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function qk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,mt,ut,pa,ft,gt,Ds,tt,Ns,Os,Ke,Pe,Ls,wt,ke,yt,kt,Qs,qt,jt,Is,$t,bs,Gt,Et,vs,Ye,$e,Ws,Ft,ae,nt,Bt,Hs,At,ns,Us,zt,xt,Rs,Ct,os,Gs,Mt,rs,Bs,Pt,Vs,Le,St,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Nt,Ot,Xs,Zs,Re,ea,hs,ms,et,Lt,j,J,xa,ta,Ca,ca,Qt,st,sa,rt,Ma,aa,Pa,ha,Ie,us,ws,Ge,Sa,ma,ys,na,fs,ua,fe,Da,ks,Na,Oa,fa,_t,oa,gs,La,Fe,Qa,ra,Ia,Wa,Ha,he,Ua,ia,Ra,Ga,ga,qs,Ba,_a,Ce,la,It,da,Ki,Mc,Pc,Yi,Ji,Sc,Dc,Xi,Zi,Nc,Oc,Va,Ka,el,Lc,Qc,tl,Ic,Wc,sl,Hc,Uc,Ya,al,Rc,Gc,nl,Bc,Vc,ol,Kc,Yc,Ja,rl,Jc,Xc,il,Zc,eh,ll,th,sp,qn,ap,jn,sh,lo,ah,nh,np,$n,oh,po,rh,ih,op,Hr,dl,lh,rp,En,dh,co,ph,ch,ip,We,Ur,pl,hh,mh,uh,Rr,cl,fh,gh,_h,Gr,hl,Th,bh,vh,Br,ml,wh,yh,kh,Vr,ul,qh,jh,$h,Kr,fl,Eh,Fh,Ah,Yr,gl,zh,xh,Ch,Jr,_l,Mh,Ph,Sh,Xr,Tl,Dh,Nh,lp,Tt,Oh,ho,Lh,Qh,mo,Ih,Wh,bl,Hh,Uh,vl,Rh,Gh,wl,Bh,Vh,dp,Zr,yl,Kh,pp,Fn,cp,Se,Yh,kl,Jh,Xh,ql,Zh,em,jl,tm,sm,$l,am,nm,El,om,rm,Fl,im,lm,ei,dm,pm,uo,cm,hm,fo,mm,um,hp,ti,fm,mp,An,up,Xa,zn,Al,go,gm,zl,_m,fp,xn,gp,bt,Tm,xl,bm,vm,Cl,wm,ym,Ml,km,qm,_o,jm,$m,To,Em,Fm,_p,Za,Cn,Pl,bo,Am,Sl,zm,Tp,en,vo,xm,wo,Cm,si,Mm,Pm,bp,tn,Mn,Dl,yo,Sm,Nl,Dm,vp,Wt,ko,Nm,_s,Om,ai,Lm,Qm,Ol,Im,Wm,Ll,Hm,Um,ni,Rm,Gm,Bm,qo,Vm,jo,Km,Ym,Jm,Ql,Xm,Zm,$o,wp,sn,Pn,Il,Eo,eu,Wl,tu,yp,Be,Fo,su,Hl,au,nu,Qe,ou,oi,ru,iu,ri,lu,du,Ul,pu,cu,Rl,hu,mu,Gl,uu,fu,Bl,gu,_u,Vl,Tu,bu,Kl,vu,wu,Yl,yu,ku,qu,it,Jl,ju,$u,Xl,Eu,Fu,Zl,Au,zu,ed,xu,Cu,td,Mu,Pu,sd,Su,Du,ad,Nu,Ou,ii,li,Lu,Qu,Iu,Sn,Ao,Wu,nd,Hu,Uu,Ta,zo,Ru,xo,Gu,di,Bu,Vu,Ku,Co,Yu,Mo,Ju,Xu,Zu,pi,Po,kp,an,Dn,od,So,ef,rd,tf,qp,lt,Do,sf,No,af,ci,nf,of,rf,Oo,lf,Lo,df,pf,cf,Qo,hf,hi,mf,uf,ff,Io,gf,Wo,_f,Tf,bf,Vt,Ho,vf,nn,wf,mi,yf,kf,id,qf,jf,$f,Nn,Ef,ld,Ff,Af,Uo,jp,on,On,dd,Ro,zf,pd,xf,$p,Ts,Go,Cf,rn,Mf,cd,Pf,Sf,ui,Df,Nf,Of,Bo,Lf,Vo,Qf,If,Wf,Kt,Ko,Hf,ln,Uf,fi,Rf,Gf,hd,Bf,Vf,Kf,Ln,Yf,md,Jf,Xf,Yo,Ep,dn,Qn,ud,Jo,Zf,fd,eg,Fp,Ht,Xo,tg,gd,sg,ag,Zo,ng,gi,og,rg,ig,er,lg,tr,dg,pg,cg,Yt,sr,hg,pn,mg,_i,ug,fg,_d,gg,_g,Tg,In,bg,Td,vg,wg,ar,Ap,cn,Wn,bd,nr,yg,vd,kg,zp,Ut,or,qg,hn,jg,wd,$g,Eg,yd,Fg,Ag,zg,rr,xg,Ti,Cg,Mg,Pg,ir,Sg,lr,Dg,Ng,Og,Jt,dr,Lg,mn,Qg,bi,Ig,Wg,kd,Hg,Ug,Rg,Hn,Gg,qd,Bg,Vg,pr,xp,un,Un,jd,cr,Kg,$d,Yg,Cp,dt,hr,Jg,Ed,Xg,Zg,mr,e_,vi,t_,s_,a_,ur,n_,fr,o_,r_,i_,Rn,l_,Xt,gr,d_,fn,p_,wi,c_,h_,Fd,m_,u_,f_,Gn,g_,Ad,__,T_,_r,Mp,gn,Bn,zd,Tr,b_,xd,v_,Pp,pt,br,w_,vr,y_,Cd,k_,q_,j_,wr,$_,yi,E_,F_,A_,yr,z_,kr,x_,C_,M_,Vn,P_,Zt,qr,S_,_n,D_,ki,N_,O_,Md,L_,Q_,I_,Kn,W_,Pd,H_,U_,jr,Sp,Tn,Yn,Sd,$r,R_,Dd,G_,Dp,ct,Er,B_,Nd,V_,K_,Fr,Y_,qi,J_,X_,Z_,Ar,eT,zr,tT,sT,aT,Jn,nT,es,xr,oT,bn,rT,ji,iT,lT,Od,dT,pT,cT,Xn,hT,Ld,mT,uT,Cr,Np,vn,Zn,Qd,Mr,fT,Id,gT,Op,ht,Pr,_T,wn,TT,Wd,bT,vT,Hd,wT,yT,kT,Sr,qT,$i,jT,$T,ET,Dr,FT,Nr,AT,zT,xT,eo,CT,ts,Or,MT,yn,PT,Ei,ST,DT,Ud,NT,OT,LT,to,QT,Rd,IT,WT,Lr,Lp;return v=new Rt({}),V=new Rt({}),rt=new Rt({}),qn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Zy],pytorch:[Jy]},$$scope:{ctx:U}}}),Fn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ak],pytorch:[tk]},$$scope:{ctx:U}}}),An=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ik],pytorch:[ok]},$$scope:{ctx:U}}}),go=new Rt({}),xn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ck],pytorch:[dk]},$$scope:{ctx:U}}}),bo=new Rt({}),vo=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L102"}}),yo=new Rt({}),ko=new He({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/configuration_tapas.py#L37"}}),$o=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Eo=new Rt({}),Fo=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L188"}}),Ao=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L528"}}),zo=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L1890",returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Po=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L396"}}),So=new Rt({}),Do=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L852"}}),Ho=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L890",returnDescription:`
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
`}}),Nn=new Ms({props:{$$slots:{default:[hk]},$$scope:{ctx:U}}}),Uo=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Rt({}),Go=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1005"}}),Ko=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1024",returnDescription:`
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
`}}),Ln=new Ms({props:{$$slots:{default:[mk]},$$scope:{ctx:U}}}),Yo=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Jo=new Rt({}),Xo=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1464"}}),sr=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1476",returnDescription:`
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
`}}),In=new Ms({props:{$$slots:{default:[uk]},$$scope:{ctx:U}}}),ar=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),nr=new Rt({}),or=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1120"}}),dr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1155",returnDescription:`
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
`}}),Hn=new Ms({props:{$$slots:{default:[fk]},$$scope:{ctx:U}}}),pr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),cr=new Rt({}),hr=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L961"}}),Rn=new Ms({props:{$$slots:{default:[gk]},$$scope:{ctx:U}}}),gr=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L967",returnDescription:`
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
`}}),Gn=new Ms({props:{$$slots:{default:[_k]},$$scope:{ctx:U}}}),_r=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Tr=new Rt({}),br=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1036"}}),Vn=new Ms({props:{$$slots:{default:[Tk]},$$scope:{ctx:U}}}),qr=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1052",returnDescription:`
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
`}}),Kn=new Ms({props:{$$slots:{default:[bk]},$$scope:{ctx:U}}}),jr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$r=new Rt({}),Er=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1574"}}),Jn=new Ms({props:{$$slots:{default:[vk]},$$scope:{ctx:U}}}),xr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1585",returnDescription:`
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
`}}),Xn=new Ms({props:{$$slots:{default:[wk]},$$scope:{ctx:U}}}),Cr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mr=new Rt({}),Pr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1242"}}),eo=new Ms({props:{$$slots:{default:[yk]},$$scope:{ctx:U}}}),Or=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1264",returnDescription:`
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
`}}),to=new Ms({props:{$$slots:{default:[kk]},$$scope:{ctx:U}}}),Lr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=n("meta"),_=d(),c=n("h1"),f=n("a"),b=n("span"),$(v.$$.fragment),T=d(),k=n("span"),y=s("TAPAS"),D=d(),q=n("h2"),H=n("a"),B=n("span"),$(V.$$.fragment),R=d(),K=n("span"),re=s("Overview"),I=d(),O=n("p"),w=s("The TAPAS model was proposed in "),M=n("a"),G=s("TAPAS: Weakly Supervised Table Parsing via Pre-training"),C=s(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),N=d(),ee=n("p"),te=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=d(),ne=n("ul"),se=n("li"),P=n("a"),L=s("SQA"),W=s(" (Sequential Question Answering by Microsoft)"),X=d(),Q=n("li"),Y=n("a"),ge=s("WTQ"),me=s(" (Wiki Table Questions by Stanford University)"),_e=d(),ue=n("li"),oe=n("a"),qe=s("WikiSQL"),ie=s(" (by Salesforce)."),ve=d(),g=n("p"),S=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),be=d(),ze=n("p"),we=s("The abstract from the paper is the following:"),le=d(),xe=n("p"),Me=n("em"),Z=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),de=d(),pe=n("p"),De=s("In addition, the authors have further pre-trained TAPAS to recognize "),je=n("strong"),Te=s("table entailment"),Ne=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=n("a"),Ae=s("TabFact"),Oe=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n("a"),Ps=s("Understanding tables with intermediate pre-training"),Ss=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),mt=d(),ut=n("img"),ft=d(),gt=n("small"),Ds=s("TAPAS architecture. Taken from the "),tt=n("a"),Ns=s("original blog post"),Os=s("."),Ke=d(),Pe=n("p"),Ls=s("This model was contributed by "),wt=n("a"),ke=s("nielsr"),yt=s(". The Tensorflow version of this model was contributed by "),kt=n("a"),Qs=s("kamalkraj"),qt=s(". The original code can be found "),jt=n("a"),Is=s("here"),$t=s("."),bs=d(),Gt=n("p"),Et=s("Tips:"),vs=d(),Ye=n("ul"),$e=n("li"),Ws=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ft=n("code"),ae=s("reset_position_index_per_cell"),nt=s(" parameter of "),Bt=n("a"),Hs=s("TapasConfig"),At=s(", which is set to "),ns=n("code"),Us=s("True"),zt=s(" by default. The default versions of the models available on the "),xt=n("a"),Rs=s("hub"),Ct=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),os=n("code"),Gs=s('revision="no_reset"'),Mt=s(" when calling the "),rs=n("code"),Bs=s("from_pretrained()"),Pt=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vs=d(),Le=n("li"),St=s("TAPAS is based on BERT, so "),is=n("code"),Ks=s("TAPAS-base"),Dt=s(" for example corresponds to a "),ls=n("code"),Ys=s("BERT-base"),ds=s(" architecture. Of course, "),Ue=n("code"),ps=s("TAPAS-large"),Ee=s(" will result in the best performance (the results reported in the paper are from "),cs=n("code"),ot=s("TAPAS-large"),Js=s("). Results of the various sized models are shown on the "),Nt=n("a"),Ot=s("original Github repository"),Xs=s("."),Zs=d(),Re=n("li"),ea=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=n("code"),ms=s("prev_labels"),et=s(" token type ids can be overwritten by the predicted "),Lt=n("code"),j=s("labels"),J=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),xa=d(),ta=n("li"),Ca=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ca=d(),Qt=n("h2"),st=n("a"),sa=n("span"),$(rt.$$.fragment),Ma=d(),aa=n("span"),Pa=s("Usage: fine-tuning"),ha=d(),Ie=n("p"),us=s("Here we explain how you can fine-tune "),ws=n("a"),Ge=s("TapasForQuestionAnswering"),Sa=s(" on your own dataset."),ma=d(),ys=n("p"),na=n("strong"),fs=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),ua=d(),fe=n("p"),Da=s("Basically, there are 3 different ways in which one can fine-tune "),ks=n("a"),Na=s("TapasForQuestionAnswering"),Oa=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),fa=d(),_t=n("ol"),oa=n("li"),gs=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),La=d(),Fe=n("li"),Qa=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=n("strong"),Ia=s("weak supervision"),Wa=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ha=d(),he=n("li"),Ua=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=n("strong"),Ra=s("strong supervision"),Ga=s(". Here, learning the appropriate aggregation operator is much easier."),ga=d(),qs=n("p"),Ba=s("To summarize:"),_a=d(),Ce=n("table"),la=n("thead"),It=n("tr"),da=n("th"),Ki=n("strong"),Mc=s("Task"),Pc=d(),Yi=n("th"),Ji=n("strong"),Sc=s("Example dataset"),Dc=d(),Xi=n("th"),Zi=n("strong"),Nc=s("Description"),Oc=d(),Va=n("tbody"),Ka=n("tr"),el=n("td"),Lc=s("Conversational"),Qc=d(),tl=n("td"),Ic=s("SQA"),Wc=d(),sl=n("td"),Hc=s("Conversational, only cell selection questions"),Uc=d(),Ya=n("tr"),al=n("td"),Rc=s("Weak supervision for aggregation"),Gc=d(),nl=n("td"),Bc=s("WTQ"),Vc=d(),ol=n("td"),Kc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yc=d(),Ja=n("tr"),rl=n("td"),Jc=s("Strong supervision for aggregation"),Xc=d(),il=n("td"),Zc=s("WikiSQL-supervised"),eh=d(),ll=n("td"),th=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),sp=d(),$(qn.$$.fragment),ap=d(),jn=n("p"),sh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=n("a"),ah=s("here"),nh=s(" for more info."),np=d(),$n=n("p"),oh=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=n("a"),rh=s("here"),ih=s("."),op=d(),Hr=n("p"),dl=n("strong"),lh=s("STEP 2: Prepare your data in the SQA format"),rp=d(),En=n("p"),dh=s("Second, no matter what you picked above, you should prepare your dataset in the "),co=n("a"),ph=s("SQA"),ch=s(" format. This format is a TSV/CSV file with the following columns:"),ip=d(),We=n("ul"),Ur=n("li"),pl=n("code"),hh=s("id"),mh=s(": optional, id of the table-question pair, for bookkeeping purposes."),uh=d(),Rr=n("li"),cl=n("code"),fh=s("annotator"),gh=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),_h=d(),Gr=n("li"),hl=n("code"),Th=s("position"),bh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),vh=d(),Br=n("li"),ml=n("code"),wh=s("question"),yh=s(": string"),kh=d(),Vr=n("li"),ul=n("code"),qh=s("table_file"),jh=s(": string, name of a csv file containing the tabular data"),$h=d(),Kr=n("li"),fl=n("code"),Eh=s("answer_coordinates"),Fh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Ah=d(),Yr=n("li"),gl=n("code"),zh=s("answer_text"),xh=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Ch=d(),Jr=n("li"),_l=n("code"),Mh=s("aggregation_label"),Ph=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Sh=d(),Xr=n("li"),Tl=n("code"),Dh=s("float_answer"),Nh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),lp=d(),Tt=n("p"),Oh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=n("a"),Lh=s("here"),Qh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),mo=n("a"),Ih=s("here"),Wh=s(". Interestingly, these conversion scripts are not perfect (the "),bl=n("code"),Hh=s("answer_coordinates"),Uh=s(" and "),vl=n("code"),Rh=s("float_answer"),Gh=s(" fields are populated based on the "),wl=n("code"),Bh=s("answer_text"),Vh=s("), meaning that WTQ and WikiSQL results could actually be improved."),dp=d(),Zr=n("p"),yl=n("strong"),Kh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),pp=d(),$(Fn.$$.fragment),cp=d(),Se=n("p"),Yh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),kl=n("strong"),Jh=s("not conversational"),Xh=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),ql=n("code"),Zh=s("queries"),em=s(", "),jl=n("code"),tm=s("answer_coordinates"),sm=s(" and "),$l=n("code"),am=s("answer_text"),nm=s(" per table (in the order of their "),El=n("code"),om=s("position"),rm=s(`
index) and batch encode each table with its questions. This will make sure that the `),Fl=n("code"),im=s("prev_labels"),lm=s(" token types (see docs of "),ei=n("a"),dm=s("TapasTokenizer"),pm=s(") are set correctly. See "),uo=n("a"),cm=s("this notebook"),hm=s(" for more info. See "),fo=n("a"),mm=s("this notebook"),um=s(" for more info regarding using the TensorFlow model."),hp=d(),ti=n("p"),fm=s("**STEP 4: Train (fine-tune) the model"),mp=d(),$(An.$$.fragment),up=d(),Xa=n("h2"),zn=n("a"),Al=n("span"),$(go.$$.fragment),gm=d(),zl=n("span"),_m=s("Usage: inference"),fp=d(),$(xn.$$.fragment),gp=d(),bt=n("p"),Tm=s("In case of a conversational set-up, then each table-question pair must be provided "),xl=n("strong"),bm=s("sequentially"),vm=s(" to the model, such that the "),Cl=n("code"),wm=s("prev_labels"),ym=s(" token types can be overwritten by the predicted "),Ml=n("code"),km=s("labels"),qm=s(" of the previous table-question pair. Again, more info can be found in "),_o=n("a"),jm=s("this notebook"),$m=s(" (for PyTorch) and "),To=n("a"),Em=s("this notebook"),Fm=s(" (for TensorFlow)."),_p=d(),Za=n("h2"),Cn=n("a"),Pl=n("span"),$(bo.$$.fragment),Am=d(),Sl=n("span"),zm=s("TAPAS specific outputs"),Tp=d(),en=n("div"),$(vo.$$.fragment),xm=d(),wo=n("p"),Cm=s("Output type of "),si=n("a"),Mm=s("TapasForQuestionAnswering"),Pm=s("."),bp=d(),tn=n("h2"),Mn=n("a"),Dl=n("span"),$(yo.$$.fragment),Sm=d(),Nl=n("span"),Dm=s("TapasConfig"),vp=d(),Wt=n("div"),$(ko.$$.fragment),Nm=d(),_s=n("p"),Om=s("This is the configuration class to store the configuration of a "),ai=n("a"),Lm=s("TapasModel"),Qm=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=n("em"),Im=s("tapas-base-finetuned-sqa"),Wm=s(` architecture.
Configuration objects inherit from `),Ll=n("code"),Hm=s("PreTrainedConfig"),Um=s(` and can be used to control the model outputs. Read the
documentation from `),ni=n("a"),Rm=s("PretrainedConfig"),Gm=s(" for more information."),Bm=d(),qo=n("p"),Vm=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),jo=n("a"),Km=s("https://github.com/google-research/tapas/tree/master"),Ym=s("."),Jm=d(),Ql=n("p"),Xm=s("Example:"),Zm=d(),$($o.$$.fragment),wp=d(),sn=n("h2"),Pn=n("a"),Il=n("span"),$(Eo.$$.fragment),eu=d(),Wl=n("span"),tu=s("TapasTokenizer"),yp=d(),Be=n("div"),$(Fo.$$.fragment),su=d(),Hl=n("p"),au=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),nu=d(),Qe=n("p"),ou=s("This tokenizer inherits from "),oi=n("a"),ru=s("PreTrainedTokenizer"),iu=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=n("a"),lu=s("TapasTokenizer"),du=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=n("code"),pu=s("segment_ids"),cu=s(`,
`),Rl=n("code"),hu=s("column_ids"),mu=s(", "),Gl=n("code"),uu=s("row_ids"),fu=s(", "),Bl=n("code"),gu=s("prev_labels"),_u=s(", "),Vl=n("code"),Tu=s("column_ranks"),bu=s(", "),Kl=n("code"),vu=s("inv_column_ranks"),wu=s(" and "),Yl=n("code"),yu=s("numeric_relations"),ku=s(":"),qu=d(),it=n("ul"),Jl=n("li"),ju=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),$u=d(),Xl=n("li"),Eu=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Fu=d(),Zl=n("li"),Au=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),zu=d(),ed=n("li"),xu=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Cu=d(),td=n("li"),Mu=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Pu=d(),sd=n("li"),Su=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Du=d(),ad=n("li"),Nu=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Ou=d(),ii=n("p"),li=n("a"),Lu=s("TapasTokenizer"),Qu=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Iu=d(),Sn=n("div"),$(Ao.$$.fragment),Wu=d(),nd=n("p"),Hu=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Uu=d(),Ta=n("div"),$(zo.$$.fragment),Ru=d(),xo=n("p"),Gu=s("Converts logits of "),di=n("a"),Bu=s("TapasForQuestionAnswering"),Vu=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Ku=d(),Co=n("p"),Yu=s(`The original implementation, on which this function is based, can be found
`),Mo=n("a"),Ju=s("here"),Xu=s("."),Zu=d(),pi=n("div"),$(Po.$$.fragment),kp=d(),an=n("h2"),Dn=n("a"),od=n("span"),$(So.$$.fragment),ef=d(),rd=n("span"),tf=s("TapasModel"),qp=d(),lt=n("div"),$(Do.$$.fragment),sf=d(),No=n("p"),af=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=n("a"),nf=s("PreTrainedModel"),of=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf=d(),Oo=n("p"),lf=s("This model is also a PyTorch "),Lo=n("a"),df=s("torch.nn.Module"),pf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cf=d(),Qo=n("p"),hf=s("This class is a small change compared to "),hi=n("a"),mf=s("BertModel"),uf=s(", taking into account the additional token type ids."),ff=d(),Io=n("p"),gf=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wo=n("a"),_f=s(`Attention is
all you need`),Tf=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),bf=d(),Vt=n("div"),$(Ho.$$.fragment),vf=d(),nn=n("p"),wf=s("The "),mi=n("a"),yf=s("TapasModel"),kf=s(" forward method, overrides the "),id=n("code"),qf=s("__call__"),jf=s(" special method."),$f=d(),$(Nn.$$.fragment),Ef=d(),ld=n("p"),Ff=s("Examples:"),Af=d(),$(Uo.$$.fragment),jp=d(),on=n("h2"),On=n("a"),dd=n("span"),$(Ro.$$.fragment),zf=d(),pd=n("span"),xf=s("TapasForMaskedLM"),$p=d(),Ts=n("div"),$(Go.$$.fragment),Cf=d(),rn=n("p"),Mf=s("Tapas Model with a "),cd=n("code"),Pf=s("language modeling"),Sf=s(` head on top.
This model inherits from `),ui=n("a"),Df=s("PreTrainedModel"),Nf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=d(),Bo=n("p"),Lf=s("This model is also a PyTorch "),Vo=n("a"),Qf=s("torch.nn.Module"),If=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wf=d(),Kt=n("div"),$(Ko.$$.fragment),Hf=d(),ln=n("p"),Uf=s("The "),fi=n("a"),Rf=s("TapasForMaskedLM"),Gf=s(" forward method, overrides the "),hd=n("code"),Bf=s("__call__"),Vf=s(" special method."),Kf=d(),$(Ln.$$.fragment),Yf=d(),md=n("p"),Jf=s("Examples:"),Xf=d(),$(Yo.$$.fragment),Ep=d(),dn=n("h2"),Qn=n("a"),ud=n("span"),$(Jo.$$.fragment),Zf=d(),fd=n("span"),eg=s("TapasForSequenceClassification"),Fp=d(),Ht=n("div"),$(Xo.$$.fragment),tg=d(),gd=n("p"),sg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),ag=d(),Zo=n("p"),ng=s("This model inherits from "),gi=n("a"),og=s("PreTrainedModel"),rg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=d(),er=n("p"),lg=s("This model is also a PyTorch "),tr=n("a"),dg=s("torch.nn.Module"),pg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cg=d(),Yt=n("div"),$(sr.$$.fragment),hg=d(),pn=n("p"),mg=s("The "),_i=n("a"),ug=s("TapasForSequenceClassification"),fg=s(" forward method, overrides the "),_d=n("code"),gg=s("__call__"),_g=s(" special method."),Tg=d(),$(In.$$.fragment),bg=d(),Td=n("p"),vg=s("Examples:"),wg=d(),$(ar.$$.fragment),Ap=d(),cn=n("h2"),Wn=n("a"),bd=n("span"),$(nr.$$.fragment),yg=d(),vd=n("span"),kg=s("TapasForQuestionAnswering"),zp=d(),Ut=n("div"),$(or.$$.fragment),qg=d(),hn=n("p"),jg=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),wd=n("code"),$g=s("logits"),Eg=s(" and optional "),yd=n("code"),Fg=s("logits_aggregation"),Ag=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),zg=d(),rr=n("p"),xg=s("This model inherits from "),Ti=n("a"),Cg=s("PreTrainedModel"),Mg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pg=d(),ir=n("p"),Sg=s("This model is also a PyTorch "),lr=n("a"),Dg=s("torch.nn.Module"),Ng=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Og=d(),Jt=n("div"),$(dr.$$.fragment),Lg=d(),mn=n("p"),Qg=s("The "),bi=n("a"),Ig=s("TapasForQuestionAnswering"),Wg=s(" forward method, overrides the "),kd=n("code"),Hg=s("__call__"),Ug=s(" special method."),Rg=d(),$(Hn.$$.fragment),Gg=d(),qd=n("p"),Bg=s("Examples:"),Vg=d(),$(pr.$$.fragment),xp=d(),un=n("h2"),Un=n("a"),jd=n("span"),$(cr.$$.fragment),Kg=d(),$d=n("span"),Yg=s("TFTapasModel"),Cp=d(),dt=n("div"),$(hr.$$.fragment),Jg=d(),Ed=n("p"),Xg=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Zg=d(),mr=n("p"),e_=s("This model inherits from "),vi=n("a"),t_=s("TFPreTrainedModel"),s_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a_=d(),ur=n("p"),n_=s("This model is also a "),fr=n("a"),o_=s("tf.keras.Model"),r_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i_=d(),$(Rn.$$.fragment),l_=d(),Xt=n("div"),$(gr.$$.fragment),d_=d(),fn=n("p"),p_=s("The "),wi=n("a"),c_=s("TFTapasModel"),h_=s(" forward method, overrides the "),Fd=n("code"),m_=s("__call__"),u_=s(" special method."),f_=d(),$(Gn.$$.fragment),g_=d(),Ad=n("p"),__=s("Examples:"),T_=d(),$(_r.$$.fragment),Mp=d(),gn=n("h2"),Bn=n("a"),zd=n("span"),$(Tr.$$.fragment),b_=d(),xd=n("span"),v_=s("TFTapasForMaskedLM"),Pp=d(),pt=n("div"),$(br.$$.fragment),w_=d(),vr=n("p"),y_=s("Tapas Model with a "),Cd=n("code"),k_=s("language modeling"),q_=s(" head on top."),j_=d(),wr=n("p"),$_=s("This model inherits from "),yi=n("a"),E_=s("TFPreTrainedModel"),F_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_=d(),yr=n("p"),z_=s("This model is also a "),kr=n("a"),x_=s("tf.keras.Model"),C_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),M_=d(),$(Vn.$$.fragment),P_=d(),Zt=n("div"),$(qr.$$.fragment),S_=d(),_n=n("p"),D_=s("The "),ki=n("a"),N_=s("TFTapasForMaskedLM"),O_=s(" forward method, overrides the "),Md=n("code"),L_=s("__call__"),Q_=s(" special method."),I_=d(),$(Kn.$$.fragment),W_=d(),Pd=n("p"),H_=s("Examples:"),U_=d(),$(jr.$$.fragment),Sp=d(),Tn=n("h2"),Yn=n("a"),Sd=n("span"),$($r.$$.fragment),R_=d(),Dd=n("span"),G_=s("TFTapasForSequenceClassification"),Dp=d(),ct=n("div"),$(Er.$$.fragment),B_=d(),Nd=n("p"),V_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),K_=d(),Fr=n("p"),Y_=s("This model inherits from "),qi=n("a"),J_=s("TFPreTrainedModel"),X_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=d(),Ar=n("p"),eT=s("This model is also a "),zr=n("a"),tT=s("tf.keras.Model"),sT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aT=d(),$(Jn.$$.fragment),nT=d(),es=n("div"),$(xr.$$.fragment),oT=d(),bn=n("p"),rT=s("The "),ji=n("a"),iT=s("TFTapasForSequenceClassification"),lT=s(" forward method, overrides the "),Od=n("code"),dT=s("__call__"),pT=s(" special method."),cT=d(),$(Xn.$$.fragment),hT=d(),Ld=n("p"),mT=s("Examples:"),uT=d(),$(Cr.$$.fragment),Np=d(),vn=n("h2"),Zn=n("a"),Qd=n("span"),$(Mr.$$.fragment),fT=d(),Id=n("span"),gT=s("TFTapasForQuestionAnswering"),Op=d(),ht=n("div"),$(Pr.$$.fragment),_T=d(),wn=n("p"),TT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wd=n("code"),bT=s("logits"),vT=s(" and optional "),Hd=n("code"),wT=s("logits_aggregation"),yT=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),kT=d(),Sr=n("p"),qT=s("This model inherits from "),$i=n("a"),jT=s("TFPreTrainedModel"),$T=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=d(),Dr=n("p"),FT=s("This model is also a "),Nr=n("a"),AT=s("tf.keras.Model"),zT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xT=d(),$(eo.$$.fragment),CT=d(),ts=n("div"),$(Or.$$.fragment),MT=d(),yn=n("p"),PT=s("The "),Ei=n("a"),ST=s("TFTapasForQuestionAnswering"),DT=s(" forward method, overrides the "),Ud=n("code"),NT=s("__call__"),OT=s(" special method."),LT=d(),$(to.$$.fragment),QT=d(),Rd=n("p"),IT=s("Examples:"),WT=d(),$(Lr.$$.fragment),this.h()},l(i){const u=By('[data-svelte="svelte-1phssyn"]',document.head);l=o(u,"META",{name:!0,content:!0}),u.forEach(t),_=p(i),c=o(i,"H1",{class:!0});var Qr=r(c);f=o(Qr,"A",{id:!0,class:!0,href:!0});var Gd=r(f);b=o(Gd,"SPAN",{});var Bd=r(b);E(v.$$.fragment,Bd),Bd.forEach(t),Gd.forEach(t),T=p(Qr),k=o(Qr,"SPAN",{});var Vd=r(k);y=a(Vd,"TAPAS"),Vd.forEach(t),Qr.forEach(t),D=p(i),q=o(i,"H2",{class:!0});var Ir=r(q);H=o(Ir,"A",{id:!0,class:!0,href:!0});var Kd=r(H);B=o(Kd,"SPAN",{});var Yd=r(B);E(V.$$.fragment,Yd),Yd.forEach(t),Kd.forEach(t),R=p(Ir),K=o(Ir,"SPAN",{});var Jd=r(K);re=a(Jd,"Overview"),Jd.forEach(t),Ir.forEach(t),I=p(i),O=o(i,"P",{});var Wr=r(O);w=a(Wr,"The TAPAS model was proposed in "),M=o(Wr,"A",{href:!0,rel:!0});var Xd=r(M);G=a(Xd,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Xd.forEach(t),C=a(Wr,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Wr.forEach(t),N=p(i),ee=o(i,"P",{});var Zd=r(ee);te=a(Zd,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Zd.forEach(t),ce=p(i),ne=o(i,"UL",{});var kn=r(ne);se=o(kn,"LI",{});var Fi=r(se);P=o(Fi,"A",{href:!0,rel:!0});var ep=r(P);L=a(ep,"SQA"),ep.forEach(t),W=a(Fi," (Sequential Question Answering by Microsoft)"),Fi.forEach(t),X=p(kn),Q=o(kn,"LI",{});var Ai=r(Q);Y=o(Ai,"A",{href:!0,rel:!0});var tp=r(Y);ge=a(tp,"WTQ"),tp.forEach(t),me=a(Ai," (Wiki Table Questions by Stanford University)"),Ai.forEach(t),_e=p(kn),ue=o(kn,"LI",{});var HT=r(ue);oe=o(HT,"A",{href:!0,rel:!0});var eb=r(oe);qe=a(eb,"WikiSQL"),eb.forEach(t),ie=a(HT," (by Salesforce)."),HT.forEach(t),kn.forEach(t),ve=p(i),g=o(i,"P",{});var tb=r(g);S=a(tb,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),tb.forEach(t),be=p(i),ze=o(i,"P",{});var sb=r(ze);we=a(sb,"The abstract from the paper is the following:"),sb.forEach(t),le=p(i),xe=o(i,"P",{});var ab=r(xe);Me=o(ab,"EM",{});var nb=r(Me);Z=a(nb,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),nb.forEach(t),ab.forEach(t),de=p(i),pe=o(i,"P",{});var so=r(pe);De=a(so,"In addition, the authors have further pre-trained TAPAS to recognize "),je=o(so,"STRONG",{});var ob=r(je);Te=a(ob,"table entailment"),ob.forEach(t),Ne=a(so,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=o(so,"A",{href:!0,rel:!0});var rb=r(ye);Ae=a(rb,"TabFact"),rb.forEach(t),Oe=a(so,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o(so,"A",{href:!0,rel:!0});var ib=r(Ze);Ps=a(ib,"Understanding tables with intermediate pre-training"),ib.forEach(t),Ss=a(so," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),so.forEach(t),mt=p(i),ut=o(i,"IMG",{src:!0,alt:!0,width:!0}),ft=p(i),gt=o(i,"SMALL",{});var Qp=r(gt);Ds=a(Qp,"TAPAS architecture. Taken from the "),tt=o(Qp,"A",{href:!0});var lb=r(tt);Ns=a(lb,"original blog post"),lb.forEach(t),Os=a(Qp,"."),Qp.forEach(t),Ke=p(i),Pe=o(i,"P",{});var ao=r(Pe);Ls=a(ao,"This model was contributed by "),wt=o(ao,"A",{href:!0,rel:!0});var db=r(wt);ke=a(db,"nielsr"),db.forEach(t),yt=a(ao,". The Tensorflow version of this model was contributed by "),kt=o(ao,"A",{href:!0,rel:!0});var pb=r(kt);Qs=a(pb,"kamalkraj"),pb.forEach(t),qt=a(ao,". The original code can be found "),jt=o(ao,"A",{href:!0,rel:!0});var cb=r(jt);Is=a(cb,"here"),cb.forEach(t),$t=a(ao,"."),ao.forEach(t),bs=p(i),Gt=o(i,"P",{});var hb=r(Gt);Et=a(hb,"Tips:"),hb.forEach(t),vs=p(i),Ye=o(i,"UL",{});var no=r(Ye);$e=o(no,"LI",{});var ss=r($e);Ws=a(ss,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ft=o(ss,"CODE",{});var mb=r(Ft);ae=a(mb,"reset_position_index_per_cell"),mb.forEach(t),nt=a(ss," parameter of "),Bt=o(ss,"A",{href:!0});var ub=r(Bt);Hs=a(ub,"TapasConfig"),ub.forEach(t),At=a(ss,", which is set to "),ns=o(ss,"CODE",{});var fb=r(ns);Us=a(fb,"True"),fb.forEach(t),zt=a(ss," by default. The default versions of the models available on the "),xt=o(ss,"A",{href:!0,rel:!0});var gb=r(xt);Rs=a(gb,"hub"),gb.forEach(t),Ct=a(ss," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),os=o(ss,"CODE",{});var _b=r(os);Gs=a(_b,'revision="no_reset"'),_b.forEach(t),Mt=a(ss," when calling the "),rs=o(ss,"CODE",{});var Tb=r(rs);Bs=a(Tb,"from_pretrained()"),Tb.forEach(t),Pt=a(ss," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ss.forEach(t),Vs=p(no),Le=o(no,"LI",{});var js=r(Le);St=a(js,"TAPAS is based on BERT, so "),is=o(js,"CODE",{});var bb=r(is);Ks=a(bb,"TAPAS-base"),bb.forEach(t),Dt=a(js," for example corresponds to a "),ls=o(js,"CODE",{});var vb=r(ls);Ys=a(vb,"BERT-base"),vb.forEach(t),ds=a(js," architecture. Of course, "),Ue=o(js,"CODE",{});var wb=r(Ue);ps=a(wb,"TAPAS-large"),wb.forEach(t),Ee=a(js," will result in the best performance (the results reported in the paper are from "),cs=o(js,"CODE",{});var yb=r(cs);ot=a(yb,"TAPAS-large"),yb.forEach(t),Js=a(js,"). Results of the various sized models are shown on the "),Nt=o(js,"A",{href:!0,rel:!0});var kb=r(Nt);Ot=a(kb,"original Github repository"),kb.forEach(t),Xs=a(js,"."),js.forEach(t),Zs=p(no),Re=o(no,"LI",{});var zi=r(Re);ea=a(zi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=o(zi,"CODE",{});var qb=r(hs);ms=a(qb,"prev_labels"),qb.forEach(t),et=a(zi," token type ids can be overwritten by the predicted "),Lt=o(zi,"CODE",{});var jb=r(Lt);j=a(jb,"labels"),jb.forEach(t),J=a(zi," of the model to the previous question. See \u201CUsage\u201D section for more info."),zi.forEach(t),xa=p(no),ta=o(no,"LI",{});var $b=r(ta);Ca=a($b,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),$b.forEach(t),no.forEach(t),ca=p(i),Qt=o(i,"H2",{class:!0});var Ip=r(Qt);st=o(Ip,"A",{id:!0,class:!0,href:!0});var Eb=r(st);sa=o(Eb,"SPAN",{});var Fb=r(sa);E(rt.$$.fragment,Fb),Fb.forEach(t),Eb.forEach(t),Ma=p(Ip),aa=o(Ip,"SPAN",{});var Ab=r(aa);Pa=a(Ab,"Usage: fine-tuning"),Ab.forEach(t),Ip.forEach(t),ha=p(i),Ie=o(i,"P",{});var Wp=r(Ie);us=a(Wp,"Here we explain how you can fine-tune "),ws=o(Wp,"A",{href:!0});var zb=r(ws);Ge=a(zb,"TapasForQuestionAnswering"),zb.forEach(t),Sa=a(Wp," on your own dataset."),Wp.forEach(t),ma=p(i),ys=o(i,"P",{});var xb=r(ys);na=o(xb,"STRONG",{});var Cb=r(na);fs=a(Cb,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Cb.forEach(t),xb.forEach(t),ua=p(i),fe=o(i,"P",{});var Hp=r(fe);Da=a(Hp,"Basically, there are 3 different ways in which one can fine-tune "),ks=o(Hp,"A",{href:!0});var Mb=r(ks);Na=a(Mb,"TapasForQuestionAnswering"),Mb.forEach(t),Oa=a(Hp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Hp.forEach(t),fa=p(i),_t=o(i,"OL",{});var xi=r(_t);oa=o(xi,"LI",{});var Pb=r(oa);gs=a(Pb,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Pb.forEach(t),La=p(xi),Fe=o(xi,"LI",{});var Up=r(Fe);Qa=a(Up,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=o(Up,"STRONG",{});var Sb=r(ra);Ia=a(Sb,"weak supervision"),Sb.forEach(t),Wa=a(Up,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Up.forEach(t),Ha=p(xi),he=o(xi,"LI",{});var Rp=r(he);Ua=a(Rp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=o(Rp,"STRONG",{});var Db=r(ia);Ra=a(Db,"strong supervision"),Db.forEach(t),Ga=a(Rp,". Here, learning the appropriate aggregation operator is much easier."),Rp.forEach(t),xi.forEach(t),ga=p(i),qs=o(i,"P",{});var Nb=r(qs);Ba=a(Nb,"To summarize:"),Nb.forEach(t),_a=p(i),Ce=o(i,"TABLE",{});var Gp=r(Ce);la=o(Gp,"THEAD",{});var Ob=r(la);It=o(Ob,"TR",{});var Ci=r(It);da=o(Ci,"TH",{});var Lb=r(da);Ki=o(Lb,"STRONG",{});var Qb=r(Ki);Mc=a(Qb,"Task"),Qb.forEach(t),Lb.forEach(t),Pc=p(Ci),Yi=o(Ci,"TH",{});var Ib=r(Yi);Ji=o(Ib,"STRONG",{});var Wb=r(Ji);Sc=a(Wb,"Example dataset"),Wb.forEach(t),Ib.forEach(t),Dc=p(Ci),Xi=o(Ci,"TH",{});var Hb=r(Xi);Zi=o(Hb,"STRONG",{});var Ub=r(Zi);Nc=a(Ub,"Description"),Ub.forEach(t),Hb.forEach(t),Ci.forEach(t),Ob.forEach(t),Oc=p(Gp),Va=o(Gp,"TBODY",{});var Mi=r(Va);Ka=o(Mi,"TR",{});var Pi=r(Ka);el=o(Pi,"TD",{});var Rb=r(el);Lc=a(Rb,"Conversational"),Rb.forEach(t),Qc=p(Pi),tl=o(Pi,"TD",{});var Gb=r(tl);Ic=a(Gb,"SQA"),Gb.forEach(t),Wc=p(Pi),sl=o(Pi,"TD",{});var Bb=r(sl);Hc=a(Bb,"Conversational, only cell selection questions"),Bb.forEach(t),Pi.forEach(t),Uc=p(Mi),Ya=o(Mi,"TR",{});var Si=r(Ya);al=o(Si,"TD",{});var Vb=r(al);Rc=a(Vb,"Weak supervision for aggregation"),Vb.forEach(t),Gc=p(Si),nl=o(Si,"TD",{});var Kb=r(nl);Bc=a(Kb,"WTQ"),Kb.forEach(t),Vc=p(Si),ol=o(Si,"TD",{});var Yb=r(ol);Kc=a(Yb,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yb.forEach(t),Si.forEach(t),Yc=p(Mi),Ja=o(Mi,"TR",{});var Di=r(Ja);rl=o(Di,"TD",{});var Jb=r(rl);Jc=a(Jb,"Strong supervision for aggregation"),Jb.forEach(t),Xc=p(Di),il=o(Di,"TD",{});var Xb=r(il);Zc=a(Xb,"WikiSQL-supervised"),Xb.forEach(t),eh=p(Di),ll=o(Di,"TD",{});var Zb=r(ll);th=a(Zb,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Zb.forEach(t),Di.forEach(t),Mi.forEach(t),Gp.forEach(t),sp=p(i),E(qn.$$.fragment,i),ap=p(i),jn=o(i,"P",{});var Bp=r(jn);sh=a(Bp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=o(Bp,"A",{href:!0,rel:!0});var ev=r(lo);ah=a(ev,"here"),ev.forEach(t),nh=a(Bp," for more info."),Bp.forEach(t),np=p(i),$n=o(i,"P",{});var Vp=r($n);oh=a(Vp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=o(Vp,"A",{href:!0,rel:!0});var tv=r(po);rh=a(tv,"here"),tv.forEach(t),ih=a(Vp,"."),Vp.forEach(t),op=p(i),Hr=o(i,"P",{});var sv=r(Hr);dl=o(sv,"STRONG",{});var av=r(dl);lh=a(av,"STEP 2: Prepare your data in the SQA format"),av.forEach(t),sv.forEach(t),rp=p(i),En=o(i,"P",{});var Kp=r(En);dh=a(Kp,"Second, no matter what you picked above, you should prepare your dataset in the "),co=o(Kp,"A",{href:!0,rel:!0});var nv=r(co);ph=a(nv,"SQA"),nv.forEach(t),ch=a(Kp," format. This format is a TSV/CSV file with the following columns:"),Kp.forEach(t),ip=p(i),We=o(i,"UL",{});var at=r(We);Ur=o(at,"LI",{});var UT=r(Ur);pl=o(UT,"CODE",{});var ov=r(pl);hh=a(ov,"id"),ov.forEach(t),mh=a(UT,": optional, id of the table-question pair, for bookkeeping purposes."),UT.forEach(t),uh=p(at),Rr=o(at,"LI",{});var RT=r(Rr);cl=o(RT,"CODE",{});var rv=r(cl);fh=a(rv,"annotator"),rv.forEach(t),gh=a(RT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),RT.forEach(t),_h=p(at),Gr=o(at,"LI",{});var GT=r(Gr);hl=o(GT,"CODE",{});var iv=r(hl);Th=a(iv,"position"),iv.forEach(t),bh=a(GT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),GT.forEach(t),vh=p(at),Br=o(at,"LI",{});var BT=r(Br);ml=o(BT,"CODE",{});var lv=r(ml);wh=a(lv,"question"),lv.forEach(t),yh=a(BT,": string"),BT.forEach(t),kh=p(at),Vr=o(at,"LI",{});var VT=r(Vr);ul=o(VT,"CODE",{});var dv=r(ul);qh=a(dv,"table_file"),dv.forEach(t),jh=a(VT,": string, name of a csv file containing the tabular data"),VT.forEach(t),$h=p(at),Kr=o(at,"LI",{});var KT=r(Kr);fl=o(KT,"CODE",{});var pv=r(fl);Eh=a(pv,"answer_coordinates"),pv.forEach(t),Fh=a(KT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),KT.forEach(t),Ah=p(at),Yr=o(at,"LI",{});var YT=r(Yr);gl=o(YT,"CODE",{});var cv=r(gl);zh=a(cv,"answer_text"),cv.forEach(t),xh=a(YT,": list of one or more strings (each string being a cell value that is part of the answer)"),YT.forEach(t),Ch=p(at),Jr=o(at,"LI",{});var JT=r(Jr);_l=o(JT,"CODE",{});var hv=r(_l);Mh=a(hv,"aggregation_label"),hv.forEach(t),Ph=a(JT,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),JT.forEach(t),Sh=p(at),Xr=o(at,"LI",{});var XT=r(Xr);Tl=o(XT,"CODE",{});var mv=r(Tl);Dh=a(mv,"float_answer"),mv.forEach(t),Nh=a(XT,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),XT.forEach(t),at.forEach(t),lp=p(i),Tt=o(i,"P",{});var $s=r(Tt);Oh=a($s,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=o($s,"A",{href:!0,rel:!0});var uv=r(ho);Lh=a(uv,"here"),uv.forEach(t),Qh=a($s,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),mo=o($s,"A",{href:!0,rel:!0});var fv=r(mo);Ih=a(fv,"here"),fv.forEach(t),Wh=a($s,". Interestingly, these conversion scripts are not perfect (the "),bl=o($s,"CODE",{});var gv=r(bl);Hh=a(gv,"answer_coordinates"),gv.forEach(t),Uh=a($s," and "),vl=o($s,"CODE",{});var _v=r(vl);Rh=a(_v,"float_answer"),_v.forEach(t),Gh=a($s," fields are populated based on the "),wl=o($s,"CODE",{});var Tv=r(wl);Bh=a(Tv,"answer_text"),Tv.forEach(t),Vh=a($s,"), meaning that WTQ and WikiSQL results could actually be improved."),$s.forEach(t),dp=p(i),Zr=o(i,"P",{});var bv=r(Zr);yl=o(bv,"STRONG",{});var vv=r(yl);Kh=a(vv,"STEP 3: Convert your data into tensors using TapasTokenizer"),vv.forEach(t),bv.forEach(t),pp=p(i),E(Fn.$$.fragment,i),cp=p(i),Se=o(i,"P",{});var Je=r(Se);Yh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),kl=o(Je,"STRONG",{});var wv=r(kl);Jh=a(wv,"not conversational"),wv.forEach(t),Xh=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),ql=o(Je,"CODE",{});var yv=r(ql);Zh=a(yv,"queries"),yv.forEach(t),em=a(Je,", "),jl=o(Je,"CODE",{});var kv=r(jl);tm=a(kv,"answer_coordinates"),kv.forEach(t),sm=a(Je," and "),$l=o(Je,"CODE",{});var qv=r($l);am=a(qv,"answer_text"),qv.forEach(t),nm=a(Je," per table (in the order of their "),El=o(Je,"CODE",{});var jv=r(El);om=a(jv,"position"),jv.forEach(t),rm=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),Fl=o(Je,"CODE",{});var $v=r(Fl);im=a($v,"prev_labels"),$v.forEach(t),lm=a(Je," token types (see docs of "),ei=o(Je,"A",{href:!0});var Ev=r(ei);dm=a(Ev,"TapasTokenizer"),Ev.forEach(t),pm=a(Je,") are set correctly. See "),uo=o(Je,"A",{href:!0,rel:!0});var Fv=r(uo);cm=a(Fv,"this notebook"),Fv.forEach(t),hm=a(Je," for more info. See "),fo=o(Je,"A",{href:!0,rel:!0});var Av=r(fo);mm=a(Av,"this notebook"),Av.forEach(t),um=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(t),hp=p(i),ti=o(i,"P",{});var zv=r(ti);fm=a(zv,"**STEP 4: Train (fine-tune) the model"),zv.forEach(t),mp=p(i),E(An.$$.fragment,i),up=p(i),Xa=o(i,"H2",{class:!0});var Yp=r(Xa);zn=o(Yp,"A",{id:!0,class:!0,href:!0});var xv=r(zn);Al=o(xv,"SPAN",{});var Cv=r(Al);E(go.$$.fragment,Cv),Cv.forEach(t),xv.forEach(t),gm=p(Yp),zl=o(Yp,"SPAN",{});var Mv=r(zl);_m=a(Mv,"Usage: inference"),Mv.forEach(t),Yp.forEach(t),fp=p(i),E(xn.$$.fragment,i),gp=p(i),bt=o(i,"P",{});var Es=r(bt);Tm=a(Es,"In case of a conversational set-up, then each table-question pair must be provided "),xl=o(Es,"STRONG",{});var Pv=r(xl);bm=a(Pv,"sequentially"),Pv.forEach(t),vm=a(Es," to the model, such that the "),Cl=o(Es,"CODE",{});var Sv=r(Cl);wm=a(Sv,"prev_labels"),Sv.forEach(t),ym=a(Es," token types can be overwritten by the predicted "),Ml=o(Es,"CODE",{});var Dv=r(Ml);km=a(Dv,"labels"),Dv.forEach(t),qm=a(Es," of the previous table-question pair. Again, more info can be found in "),_o=o(Es,"A",{href:!0,rel:!0});var Nv=r(_o);jm=a(Nv,"this notebook"),Nv.forEach(t),$m=a(Es," (for PyTorch) and "),To=o(Es,"A",{href:!0,rel:!0});var Ov=r(To);Em=a(Ov,"this notebook"),Ov.forEach(t),Fm=a(Es," (for TensorFlow)."),Es.forEach(t),_p=p(i),Za=o(i,"H2",{class:!0});var Jp=r(Za);Cn=o(Jp,"A",{id:!0,class:!0,href:!0});var Lv=r(Cn);Pl=o(Lv,"SPAN",{});var Qv=r(Pl);E(bo.$$.fragment,Qv),Qv.forEach(t),Lv.forEach(t),Am=p(Jp),Sl=o(Jp,"SPAN",{});var Iv=r(Sl);zm=a(Iv,"TAPAS specific outputs"),Iv.forEach(t),Jp.forEach(t),Tp=p(i),en=o(i,"DIV",{class:!0});var Xp=r(en);E(vo.$$.fragment,Xp),xm=p(Xp),wo=o(Xp,"P",{});var Zp=r(wo);Cm=a(Zp,"Output type of "),si=o(Zp,"A",{href:!0});var Wv=r(si);Mm=a(Wv,"TapasForQuestionAnswering"),Wv.forEach(t),Pm=a(Zp,"."),Zp.forEach(t),Xp.forEach(t),bp=p(i),tn=o(i,"H2",{class:!0});var ec=r(tn);Mn=o(ec,"A",{id:!0,class:!0,href:!0});var Hv=r(Mn);Dl=o(Hv,"SPAN",{});var Uv=r(Dl);E(yo.$$.fragment,Uv),Uv.forEach(t),Hv.forEach(t),Sm=p(ec),Nl=o(ec,"SPAN",{});var Rv=r(Nl);Dm=a(Rv,"TapasConfig"),Rv.forEach(t),ec.forEach(t),vp=p(i),Wt=o(i,"DIV",{class:!0});var ba=r(Wt);E(ko.$$.fragment,ba),Nm=p(ba),_s=o(ba,"P",{});var va=r(_s);Om=a(va,"This is the configuration class to store the configuration of a "),ai=o(va,"A",{href:!0});var Gv=r(ai);Lm=a(Gv,"TapasModel"),Gv.forEach(t),Qm=a(va,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=o(va,"EM",{});var Bv=r(Ol);Im=a(Bv,"tapas-base-finetuned-sqa"),Bv.forEach(t),Wm=a(va,` architecture.
Configuration objects inherit from `),Ll=o(va,"CODE",{});var Vv=r(Ll);Hm=a(Vv,"PreTrainedConfig"),Vv.forEach(t),Um=a(va,` and can be used to control the model outputs. Read the
documentation from `),ni=o(va,"A",{href:!0});var Kv=r(ni);Rm=a(Kv,"PretrainedConfig"),Kv.forEach(t),Gm=a(va," for more information."),va.forEach(t),Bm=p(ba),qo=o(ba,"P",{});var tc=r(qo);Vm=a(tc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),jo=o(tc,"A",{href:!0,rel:!0});var Yv=r(jo);Km=a(Yv,"https://github.com/google-research/tapas/tree/master"),Yv.forEach(t),Ym=a(tc,"."),tc.forEach(t),Jm=p(ba),Ql=o(ba,"P",{});var Jv=r(Ql);Xm=a(Jv,"Example:"),Jv.forEach(t),Zm=p(ba),E($o.$$.fragment,ba),ba.forEach(t),wp=p(i),sn=o(i,"H2",{class:!0});var sc=r(sn);Pn=o(sc,"A",{id:!0,class:!0,href:!0});var Xv=r(Pn);Il=o(Xv,"SPAN",{});var Zv=r(Il);E(Eo.$$.fragment,Zv),Zv.forEach(t),Xv.forEach(t),eu=p(sc),Wl=o(sc,"SPAN",{});var ew=r(Wl);tu=a(ew,"TapasTokenizer"),ew.forEach(t),sc.forEach(t),yp=p(i),Be=o(i,"DIV",{class:!0});var vt=r(Be);E(Fo.$$.fragment,vt),su=p(vt),Hl=o(vt,"P",{});var tw=r(Hl);au=a(tw,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),tw.forEach(t),nu=p(vt),Qe=o(vt,"P",{});var Xe=r(Qe);ou=a(Xe,"This tokenizer inherits from "),oi=o(Xe,"A",{href:!0});var sw=r(oi);ru=a(sw,"PreTrainedTokenizer"),sw.forEach(t),iu=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=o(Xe,"A",{href:!0});var aw=r(ri);lu=a(aw,"TapasTokenizer"),aw.forEach(t),du=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=o(Xe,"CODE",{});var nw=r(Ul);pu=a(nw,"segment_ids"),nw.forEach(t),cu=a(Xe,`,
`),Rl=o(Xe,"CODE",{});var ow=r(Rl);hu=a(ow,"column_ids"),ow.forEach(t),mu=a(Xe,", "),Gl=o(Xe,"CODE",{});var rw=r(Gl);uu=a(rw,"row_ids"),rw.forEach(t),fu=a(Xe,", "),Bl=o(Xe,"CODE",{});var iw=r(Bl);gu=a(iw,"prev_labels"),iw.forEach(t),_u=a(Xe,", "),Vl=o(Xe,"CODE",{});var lw=r(Vl);Tu=a(lw,"column_ranks"),lw.forEach(t),bu=a(Xe,", "),Kl=o(Xe,"CODE",{});var dw=r(Kl);vu=a(dw,"inv_column_ranks"),dw.forEach(t),wu=a(Xe," and "),Yl=o(Xe,"CODE",{});var pw=r(Yl);yu=a(pw,"numeric_relations"),pw.forEach(t),ku=a(Xe,":"),Xe.forEach(t),qu=p(vt),it=o(vt,"UL",{});var as=r(it);Jl=o(as,"LI",{});var cw=r(Jl);ju=a(cw,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),cw.forEach(t),$u=p(as),Xl=o(as,"LI",{});var hw=r(Xl);Eu=a(hw,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),hw.forEach(t),Fu=p(as),Zl=o(as,"LI",{});var mw=r(Zl);Au=a(mw,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),mw.forEach(t),zu=p(as),ed=o(as,"LI",{});var uw=r(ed);xu=a(uw,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),uw.forEach(t),Cu=p(as),td=o(as,"LI",{});var fw=r(td);Mu=a(fw,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),fw.forEach(t),Pu=p(as),sd=o(as,"LI",{});var gw=r(sd);Su=a(gw,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),gw.forEach(t),Du=p(as),ad=o(as,"LI",{});var _w=r(ad);Nu=a(_w,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),_w.forEach(t),as.forEach(t),Ou=p(vt),ii=o(vt,"P",{});var ZT=r(ii);li=o(ZT,"A",{href:!0});var Tw=r(li);Lu=a(Tw,"TapasTokenizer"),Tw.forEach(t),Qu=a(ZT,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),ZT.forEach(t),Iu=p(vt),Sn=o(vt,"DIV",{class:!0});var ac=r(Sn);E(Ao.$$.fragment,ac),Wu=p(ac),nd=o(ac,"P",{});var bw=r(nd);Hu=a(bw,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),bw.forEach(t),ac.forEach(t),Uu=p(vt),Ta=o(vt,"DIV",{class:!0});var Ni=r(Ta);E(zo.$$.fragment,Ni),Ru=p(Ni),xo=o(Ni,"P",{});var nc=r(xo);Gu=a(nc,"Converts logits of "),di=o(nc,"A",{href:!0});var vw=r(di);Bu=a(vw,"TapasForQuestionAnswering"),vw.forEach(t),Vu=a(nc,` to actual predicted answer coordinates and optional
aggregation indices.`),nc.forEach(t),Ku=p(Ni),Co=o(Ni,"P",{});var oc=r(Co);Yu=a(oc,`The original implementation, on which this function is based, can be found
`),Mo=o(oc,"A",{href:!0,rel:!0});var ww=r(Mo);Ju=a(ww,"here"),ww.forEach(t),Xu=a(oc,"."),oc.forEach(t),Ni.forEach(t),Zu=p(vt),pi=o(vt,"DIV",{class:!0});var yw=r(pi);E(Po.$$.fragment,yw),yw.forEach(t),vt.forEach(t),kp=p(i),an=o(i,"H2",{class:!0});var rc=r(an);Dn=o(rc,"A",{id:!0,class:!0,href:!0});var kw=r(Dn);od=o(kw,"SPAN",{});var qw=r(od);E(So.$$.fragment,qw),qw.forEach(t),kw.forEach(t),ef=p(rc),rd=o(rc,"SPAN",{});var jw=r(rd);tf=a(jw,"TapasModel"),jw.forEach(t),rc.forEach(t),qp=p(i),lt=o(i,"DIV",{class:!0});var Fs=r(lt);E(Do.$$.fragment,Fs),sf=p(Fs),No=o(Fs,"P",{});var ic=r(No);af=a(ic,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=o(ic,"A",{href:!0});var $w=r(ci);nf=a($w,"PreTrainedModel"),$w.forEach(t),of=a(ic,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),rf=p(Fs),Oo=o(Fs,"P",{});var lc=r(Oo);lf=a(lc,"This model is also a PyTorch "),Lo=o(lc,"A",{href:!0,rel:!0});var Ew=r(Lo);df=a(Ew,"torch.nn.Module"),Ew.forEach(t),pf=a(lc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc.forEach(t),cf=p(Fs),Qo=o(Fs,"P",{});var dc=r(Qo);hf=a(dc,"This class is a small change compared to "),hi=o(dc,"A",{href:!0});var Fw=r(hi);mf=a(Fw,"BertModel"),Fw.forEach(t),uf=a(dc,", taking into account the additional token type ids."),dc.forEach(t),ff=p(Fs),Io=o(Fs,"P",{});var pc=r(Io);gf=a(pc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wo=o(pc,"A",{href:!0,rel:!0});var Aw=r(Wo);_f=a(Aw,`Attention is
all you need`),Aw.forEach(t),Tf=a(pc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),pc.forEach(t),bf=p(Fs),Vt=o(Fs,"DIV",{class:!0});var wa=r(Vt);E(Ho.$$.fragment,wa),vf=p(wa),nn=o(wa,"P",{});var Oi=r(nn);wf=a(Oi,"The "),mi=o(Oi,"A",{href:!0});var zw=r(mi);yf=a(zw,"TapasModel"),zw.forEach(t),kf=a(Oi," forward method, overrides the "),id=o(Oi,"CODE",{});var xw=r(id);qf=a(xw,"__call__"),xw.forEach(t),jf=a(Oi," special method."),Oi.forEach(t),$f=p(wa),E(Nn.$$.fragment,wa),Ef=p(wa),ld=o(wa,"P",{});var Cw=r(ld);Ff=a(Cw,"Examples:"),Cw.forEach(t),Af=p(wa),E(Uo.$$.fragment,wa),wa.forEach(t),Fs.forEach(t),jp=p(i),on=o(i,"H2",{class:!0});var cc=r(on);On=o(cc,"A",{id:!0,class:!0,href:!0});var Mw=r(On);dd=o(Mw,"SPAN",{});var Pw=r(dd);E(Ro.$$.fragment,Pw),Pw.forEach(t),Mw.forEach(t),zf=p(cc),pd=o(cc,"SPAN",{});var Sw=r(pd);xf=a(Sw,"TapasForMaskedLM"),Sw.forEach(t),cc.forEach(t),$p=p(i),Ts=o(i,"DIV",{class:!0});var oo=r(Ts);E(Go.$$.fragment,oo),Cf=p(oo),rn=o(oo,"P",{});var Li=r(rn);Mf=a(Li,"Tapas Model with a "),cd=o(Li,"CODE",{});var Dw=r(cd);Pf=a(Dw,"language modeling"),Dw.forEach(t),Sf=a(Li,` head on top.
This model inherits from `),ui=o(Li,"A",{href:!0});var Nw=r(ui);Df=a(Nw,"PreTrainedModel"),Nw.forEach(t),Nf=a(Li,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li.forEach(t),Of=p(oo),Bo=o(oo,"P",{});var hc=r(Bo);Lf=a(hc,"This model is also a PyTorch "),Vo=o(hc,"A",{href:!0,rel:!0});var Ow=r(Vo);Qf=a(Ow,"torch.nn.Module"),Ow.forEach(t),If=a(hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hc.forEach(t),Wf=p(oo),Kt=o(oo,"DIV",{class:!0});var ya=r(Kt);E(Ko.$$.fragment,ya),Hf=p(ya),ln=o(ya,"P",{});var Qi=r(ln);Uf=a(Qi,"The "),fi=o(Qi,"A",{href:!0});var Lw=r(fi);Rf=a(Lw,"TapasForMaskedLM"),Lw.forEach(t),Gf=a(Qi," forward method, overrides the "),hd=o(Qi,"CODE",{});var Qw=r(hd);Bf=a(Qw,"__call__"),Qw.forEach(t),Vf=a(Qi," special method."),Qi.forEach(t),Kf=p(ya),E(Ln.$$.fragment,ya),Yf=p(ya),md=o(ya,"P",{});var Iw=r(md);Jf=a(Iw,"Examples:"),Iw.forEach(t),Xf=p(ya),E(Yo.$$.fragment,ya),ya.forEach(t),oo.forEach(t),Ep=p(i),dn=o(i,"H2",{class:!0});var mc=r(dn);Qn=o(mc,"A",{id:!0,class:!0,href:!0});var Ww=r(Qn);ud=o(Ww,"SPAN",{});var Hw=r(ud);E(Jo.$$.fragment,Hw),Hw.forEach(t),Ww.forEach(t),Zf=p(mc),fd=o(mc,"SPAN",{});var Uw=r(fd);eg=a(Uw,"TapasForSequenceClassification"),Uw.forEach(t),mc.forEach(t),Fp=p(i),Ht=o(i,"DIV",{class:!0});var ka=r(Ht);E(Xo.$$.fragment,ka),tg=p(ka),gd=o(ka,"P",{});var Rw=r(gd);sg=a(Rw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Rw.forEach(t),ag=p(ka),Zo=o(ka,"P",{});var uc=r(Zo);ng=a(uc,"This model inherits from "),gi=o(uc,"A",{href:!0});var Gw=r(gi);og=a(Gw,"PreTrainedModel"),Gw.forEach(t),rg=a(uc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc.forEach(t),ig=p(ka),er=o(ka,"P",{});var fc=r(er);lg=a(fc,"This model is also a PyTorch "),tr=o(fc,"A",{href:!0,rel:!0});var Bw=r(tr);dg=a(Bw,"torch.nn.Module"),Bw.forEach(t),pg=a(fc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fc.forEach(t),cg=p(ka),Yt=o(ka,"DIV",{class:!0});var qa=r(Yt);E(sr.$$.fragment,qa),hg=p(qa),pn=o(qa,"P",{});var Ii=r(pn);mg=a(Ii,"The "),_i=o(Ii,"A",{href:!0});var Vw=r(_i);ug=a(Vw,"TapasForSequenceClassification"),Vw.forEach(t),fg=a(Ii," forward method, overrides the "),_d=o(Ii,"CODE",{});var Kw=r(_d);gg=a(Kw,"__call__"),Kw.forEach(t),_g=a(Ii," special method."),Ii.forEach(t),Tg=p(qa),E(In.$$.fragment,qa),bg=p(qa),Td=o(qa,"P",{});var Yw=r(Td);vg=a(Yw,"Examples:"),Yw.forEach(t),wg=p(qa),E(ar.$$.fragment,qa),qa.forEach(t),ka.forEach(t),Ap=p(i),cn=o(i,"H2",{class:!0});var gc=r(cn);Wn=o(gc,"A",{id:!0,class:!0,href:!0});var Jw=r(Wn);bd=o(Jw,"SPAN",{});var Xw=r(bd);E(nr.$$.fragment,Xw),Xw.forEach(t),Jw.forEach(t),yg=p(gc),vd=o(gc,"SPAN",{});var Zw=r(vd);kg=a(Zw,"TapasForQuestionAnswering"),Zw.forEach(t),gc.forEach(t),zp=p(i),Ut=o(i,"DIV",{class:!0});var ja=r(Ut);E(or.$$.fragment,ja),qg=p(ja),hn=o(ja,"P",{});var Wi=r(hn);jg=a(Wi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),wd=o(Wi,"CODE",{});var ey=r(wd);$g=a(ey,"logits"),ey.forEach(t),Eg=a(Wi," and optional "),yd=o(Wi,"CODE",{});var ty=r(yd);Fg=a(ty,"logits_aggregation"),ty.forEach(t),Ag=a(Wi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Wi.forEach(t),zg=p(ja),rr=o(ja,"P",{});var _c=r(rr);xg=a(_c,"This model inherits from "),Ti=o(_c,"A",{href:!0});var sy=r(Ti);Cg=a(sy,"PreTrainedModel"),sy.forEach(t),Mg=a(_c,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c.forEach(t),Pg=p(ja),ir=o(ja,"P",{});var Tc=r(ir);Sg=a(Tc,"This model is also a PyTorch "),lr=o(Tc,"A",{href:!0,rel:!0});var ay=r(lr);Dg=a(ay,"torch.nn.Module"),ay.forEach(t),Ng=a(Tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc.forEach(t),Og=p(ja),Jt=o(ja,"DIV",{class:!0});var $a=r(Jt);E(dr.$$.fragment,$a),Lg=p($a),mn=o($a,"P",{});var Hi=r(mn);Qg=a(Hi,"The "),bi=o(Hi,"A",{href:!0});var ny=r(bi);Ig=a(ny,"TapasForQuestionAnswering"),ny.forEach(t),Wg=a(Hi," forward method, overrides the "),kd=o(Hi,"CODE",{});var oy=r(kd);Hg=a(oy,"__call__"),oy.forEach(t),Ug=a(Hi," special method."),Hi.forEach(t),Rg=p($a),E(Hn.$$.fragment,$a),Gg=p($a),qd=o($a,"P",{});var ry=r(qd);Bg=a(ry,"Examples:"),ry.forEach(t),Vg=p($a),E(pr.$$.fragment,$a),$a.forEach(t),ja.forEach(t),xp=p(i),un=o(i,"H2",{class:!0});var bc=r(un);Un=o(bc,"A",{id:!0,class:!0,href:!0});var iy=r(Un);jd=o(iy,"SPAN",{});var ly=r(jd);E(cr.$$.fragment,ly),ly.forEach(t),iy.forEach(t),Kg=p(bc),$d=o(bc,"SPAN",{});var dy=r($d);Yg=a(dy,"TFTapasModel"),dy.forEach(t),bc.forEach(t),Cp=p(i),dt=o(i,"DIV",{class:!0});var As=r(dt);E(hr.$$.fragment,As),Jg=p(As),Ed=o(As,"P",{});var py=r(Ed);Xg=a(py,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),py.forEach(t),Zg=p(As),mr=o(As,"P",{});var vc=r(mr);e_=a(vc,"This model inherits from "),vi=o(vc,"A",{href:!0});var cy=r(vi);t_=a(cy,"TFPreTrainedModel"),cy.forEach(t),s_=a(vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc.forEach(t),a_=p(As),ur=o(As,"P",{});var wc=r(ur);n_=a(wc,"This model is also a "),fr=o(wc,"A",{href:!0,rel:!0});var hy=r(fr);o_=a(hy,"tf.keras.Model"),hy.forEach(t),r_=a(wc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wc.forEach(t),i_=p(As),E(Rn.$$.fragment,As),l_=p(As),Xt=o(As,"DIV",{class:!0});var Ea=r(Xt);E(gr.$$.fragment,Ea),d_=p(Ea),fn=o(Ea,"P",{});var Ui=r(fn);p_=a(Ui,"The "),wi=o(Ui,"A",{href:!0});var my=r(wi);c_=a(my,"TFTapasModel"),my.forEach(t),h_=a(Ui," forward method, overrides the "),Fd=o(Ui,"CODE",{});var uy=r(Fd);m_=a(uy,"__call__"),uy.forEach(t),u_=a(Ui," special method."),Ui.forEach(t),f_=p(Ea),E(Gn.$$.fragment,Ea),g_=p(Ea),Ad=o(Ea,"P",{});var fy=r(Ad);__=a(fy,"Examples:"),fy.forEach(t),T_=p(Ea),E(_r.$$.fragment,Ea),Ea.forEach(t),As.forEach(t),Mp=p(i),gn=o(i,"H2",{class:!0});var yc=r(gn);Bn=o(yc,"A",{id:!0,class:!0,href:!0});var gy=r(Bn);zd=o(gy,"SPAN",{});var _y=r(zd);E(Tr.$$.fragment,_y),_y.forEach(t),gy.forEach(t),b_=p(yc),xd=o(yc,"SPAN",{});var Ty=r(xd);v_=a(Ty,"TFTapasForMaskedLM"),Ty.forEach(t),yc.forEach(t),Pp=p(i),pt=o(i,"DIV",{class:!0});var zs=r(pt);E(br.$$.fragment,zs),w_=p(zs),vr=o(zs,"P",{});var kc=r(vr);y_=a(kc,"Tapas Model with a "),Cd=o(kc,"CODE",{});var by=r(Cd);k_=a(by,"language modeling"),by.forEach(t),q_=a(kc," head on top."),kc.forEach(t),j_=p(zs),wr=o(zs,"P",{});var qc=r(wr);$_=a(qc,"This model inherits from "),yi=o(qc,"A",{href:!0});var vy=r(yi);E_=a(vy,"TFPreTrainedModel"),vy.forEach(t),F_=a(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),A_=p(zs),yr=o(zs,"P",{});var jc=r(yr);z_=a(jc,"This model is also a "),kr=o(jc,"A",{href:!0,rel:!0});var wy=r(kr);x_=a(wy,"tf.keras.Model"),wy.forEach(t),C_=a(jc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc.forEach(t),M_=p(zs),E(Vn.$$.fragment,zs),P_=p(zs),Zt=o(zs,"DIV",{class:!0});var Fa=r(Zt);E(qr.$$.fragment,Fa),S_=p(Fa),_n=o(Fa,"P",{});var Ri=r(_n);D_=a(Ri,"The "),ki=o(Ri,"A",{href:!0});var yy=r(ki);N_=a(yy,"TFTapasForMaskedLM"),yy.forEach(t),O_=a(Ri," forward method, overrides the "),Md=o(Ri,"CODE",{});var ky=r(Md);L_=a(ky,"__call__"),ky.forEach(t),Q_=a(Ri," special method."),Ri.forEach(t),I_=p(Fa),E(Kn.$$.fragment,Fa),W_=p(Fa),Pd=o(Fa,"P",{});var qy=r(Pd);H_=a(qy,"Examples:"),qy.forEach(t),U_=p(Fa),E(jr.$$.fragment,Fa),Fa.forEach(t),zs.forEach(t),Sp=p(i),Tn=o(i,"H2",{class:!0});var $c=r(Tn);Yn=o($c,"A",{id:!0,class:!0,href:!0});var jy=r(Yn);Sd=o(jy,"SPAN",{});var $y=r(Sd);E($r.$$.fragment,$y),$y.forEach(t),jy.forEach(t),R_=p($c),Dd=o($c,"SPAN",{});var Ey=r(Dd);G_=a(Ey,"TFTapasForSequenceClassification"),Ey.forEach(t),$c.forEach(t),Dp=p(i),ct=o(i,"DIV",{class:!0});var xs=r(ct);E(Er.$$.fragment,xs),B_=p(xs),Nd=o(xs,"P",{});var Fy=r(Nd);V_=a(Fy,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Fy.forEach(t),K_=p(xs),Fr=o(xs,"P",{});var Ec=r(Fr);Y_=a(Ec,"This model inherits from "),qi=o(Ec,"A",{href:!0});var Ay=r(qi);J_=a(Ay,"TFPreTrainedModel"),Ay.forEach(t),X_=a(Ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec.forEach(t),Z_=p(xs),Ar=o(xs,"P",{});var Fc=r(Ar);eT=a(Fc,"This model is also a "),zr=o(Fc,"A",{href:!0,rel:!0});var zy=r(zr);tT=a(zy,"tf.keras.Model"),zy.forEach(t),sT=a(Fc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc.forEach(t),aT=p(xs),E(Jn.$$.fragment,xs),nT=p(xs),es=o(xs,"DIV",{class:!0});var Aa=r(es);E(xr.$$.fragment,Aa),oT=p(Aa),bn=o(Aa,"P",{});var Gi=r(bn);rT=a(Gi,"The "),ji=o(Gi,"A",{href:!0});var xy=r(ji);iT=a(xy,"TFTapasForSequenceClassification"),xy.forEach(t),lT=a(Gi," forward method, overrides the "),Od=o(Gi,"CODE",{});var Cy=r(Od);dT=a(Cy,"__call__"),Cy.forEach(t),pT=a(Gi," special method."),Gi.forEach(t),cT=p(Aa),E(Xn.$$.fragment,Aa),hT=p(Aa),Ld=o(Aa,"P",{});var My=r(Ld);mT=a(My,"Examples:"),My.forEach(t),uT=p(Aa),E(Cr.$$.fragment,Aa),Aa.forEach(t),xs.forEach(t),Np=p(i),vn=o(i,"H2",{class:!0});var Ac=r(vn);Zn=o(Ac,"A",{id:!0,class:!0,href:!0});var Py=r(Zn);Qd=o(Py,"SPAN",{});var Sy=r(Qd);E(Mr.$$.fragment,Sy),Sy.forEach(t),Py.forEach(t),fT=p(Ac),Id=o(Ac,"SPAN",{});var Dy=r(Id);gT=a(Dy,"TFTapasForQuestionAnswering"),Dy.forEach(t),Ac.forEach(t),Op=p(i),ht=o(i,"DIV",{class:!0});var Cs=r(ht);E(Pr.$$.fragment,Cs),_T=p(Cs),wn=o(Cs,"P",{});var Bi=r(wn);TT=a(Bi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wd=o(Bi,"CODE",{});var Ny=r(Wd);bT=a(Ny,"logits"),Ny.forEach(t),vT=a(Bi," and optional "),Hd=o(Bi,"CODE",{});var Oy=r(Hd);wT=a(Oy,"logits_aggregation"),Oy.forEach(t),yT=a(Bi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Bi.forEach(t),kT=p(Cs),Sr=o(Cs,"P",{});var zc=r(Sr);qT=a(zc,"This model inherits from "),$i=o(zc,"A",{href:!0});var Ly=r($i);jT=a(Ly,"TFPreTrainedModel"),Ly.forEach(t),$T=a(zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc.forEach(t),ET=p(Cs),Dr=o(Cs,"P",{});var xc=r(Dr);FT=a(xc,"This model is also a "),Nr=o(xc,"A",{href:!0,rel:!0});var Qy=r(Nr);AT=a(Qy,"tf.keras.Model"),Qy.forEach(t),zT=a(xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xc.forEach(t),xT=p(Cs),E(eo.$$.fragment,Cs),CT=p(Cs),ts=o(Cs,"DIV",{class:!0});var za=r(ts);E(Or.$$.fragment,za),MT=p(za),yn=o(za,"P",{});var Vi=r(yn);PT=a(Vi,"The "),Ei=o(Vi,"A",{href:!0});var Iy=r(Ei);ST=a(Iy,"TFTapasForQuestionAnswering"),Iy.forEach(t),DT=a(Vi," forward method, overrides the "),Ud=o(Vi,"CODE",{});var Wy=r(Ud);NT=a(Wy,"__call__"),Wy.forEach(t),OT=a(Vi," special method."),Vi.forEach(t),LT=p(za),E(to.$$.fragment,za),QT=p(za),Rd=o(za,"P",{});var Hy=r(Rd);IT=a(Hy,"Examples:"),Hy.forEach(t),WT=p(za),E(Lr.$$.fragment,za),za.forEach(t),Cs.forEach(t),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(jk)),h(f,"id","tapas"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#tapas"),h(c,"class","relative group"),h(H,"id","overview"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#overview"),h(q,"class","relative group"),h(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),h(M,"rel","nofollow"),h(P,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(P,"rel","nofollow"),h(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),h(Y,"rel","nofollow"),h(oe,"href","https://github.com/salesforce/WikiSQL"),h(oe,"rel","nofollow"),h(ye,"href","https://github.com/wenhuchen/Table-Fact-Checking"),h(ye,"rel","nofollow"),h(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),h(Ze,"rel","nofollow"),Vy(ut.src,pa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||h(ut,"src",pa),h(ut,"alt","drawing"),h(ut,"width","600"),h(tt,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),h(wt,"href","https://huggingface.co/nielsr"),h(wt,"rel","nofollow"),h(kt,"href","https://huggingface.co/kamalkraj"),h(kt,"rel","nofollow"),h(jt,"href","https://github.com/google-research/tapas"),h(jt,"rel","nofollow"),h(Bt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(xt,"href","https://huggingface.co/models?search=tapas"),h(xt,"rel","nofollow"),h(Nt,"href","https://github.com/google-research/tapas%3E"),h(Nt,"rel","nofollow"),h(st,"id","usage-finetuning"),h(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(st,"href","#usage-finetuning"),h(Qt,"class","relative group"),h(ws,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ks,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(lo,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),h(lo,"rel","nofollow"),h(po,"href","https://huggingface.co/models?search=tapas"),h(po,"rel","nofollow"),h(co,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(co,"rel","nofollow"),h(ho,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),h(ho,"rel","nofollow"),h(mo,"href","https://github.com/NielsRogge/tapas_utils"),h(mo,"rel","nofollow"),h(ei,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(uo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(uo,"rel","nofollow"),h(fo,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(fo,"rel","nofollow"),h(zn,"id","usage-inference"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#usage-inference"),h(Xa,"class","relative group"),h(_o,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(_o,"rel","nofollow"),h(To,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(To,"rel","nofollow"),h(Cn,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Za,"class","relative group"),h(si,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mn,"id","transformers.TapasConfig"),h(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mn,"href","#transformers.TapasConfig"),h(tn,"class","relative group"),h(ai,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),h(ni,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(jo,"href","https://github.com/google-research/tapas/tree/master"),h(jo,"rel","nofollow"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pn,"id","transformers.TapasTokenizer"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#transformers.TapasTokenizer"),h(sn,"class","relative group"),h(oi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ri,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(li,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(di,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Mo,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),h(Mo,"rel","nofollow"),h(Ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Dn,"id","transformers.TapasModel"),h(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dn,"href","#transformers.TapasModel"),h(an,"class","relative group"),h(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Lo,"rel","nofollow"),h(hi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),h(Wo,"href","https://arxiv.org/abs/1706.03762"),h(Wo,"rel","nofollow"),h(mi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(On,"id","transformers.TapasForMaskedLM"),h(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(On,"href","#transformers.TapasForMaskedLM"),h(on,"class","relative group"),h(ui,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Vo,"rel","nofollow"),h(fi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForMaskedLM"),h(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qn,"id","transformers.TapasForSequenceClassification"),h(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qn,"href","#transformers.TapasForSequenceClassification"),h(dn,"class","relative group"),h(gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(tr,"rel","nofollow"),h(_i,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForSequenceClassification"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wn,"id","transformers.TapasForQuestionAnswering"),h(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wn,"href","#transformers.TapasForQuestionAnswering"),h(cn,"class","relative group"),h(Ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(lr,"rel","nofollow"),h(bi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Un,"id","transformers.TFTapasModel"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#transformers.TFTapasModel"),h(un,"class","relative group"),h(vi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(fr,"rel","nofollow"),h(wi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bn,"id","transformers.TFTapasForMaskedLM"),h(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bn,"href","#transformers.TFTapasForMaskedLM"),h(gn,"class","relative group"),h(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(kr,"rel","nofollow"),h(ki,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yn,"id","transformers.TFTapasForSequenceClassification"),h(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yn,"href","#transformers.TFTapasForSequenceClassification"),h(Tn,"class","relative group"),h(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(zr,"rel","nofollow"),h(ji,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),h(es,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zn,"id","transformers.TFTapasForQuestionAnswering"),h(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zn,"href","#transformers.TFTapasForQuestionAnswering"),h(vn,"class","relative group"),h($i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Nr,"rel","nofollow"),h(Ei,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,u){e(document.head,l),m(i,_,u),m(i,c,u),e(c,f),e(f,b),F(v,b,null),e(c,T),e(c,k),e(k,y),m(i,D,u),m(i,q,u),e(q,H),e(H,B),F(V,B,null),e(q,R),e(q,K),e(K,re),m(i,I,u),m(i,O,u),e(O,w),e(O,M),e(M,G),e(O,C),m(i,N,u),m(i,ee,u),e(ee,te),m(i,ce,u),m(i,ne,u),e(ne,se),e(se,P),e(P,L),e(se,W),e(ne,X),e(ne,Q),e(Q,Y),e(Y,ge),e(Q,me),e(ne,_e),e(ne,ue),e(ue,oe),e(oe,qe),e(ue,ie),m(i,ve,u),m(i,g,u),e(g,S),m(i,be,u),m(i,ze,u),e(ze,we),m(i,le,u),m(i,xe,u),e(xe,Me),e(Me,Z),m(i,de,u),m(i,pe,u),e(pe,De),e(pe,je),e(je,Te),e(pe,Ne),e(pe,ye),e(ye,Ae),e(pe,Oe),e(pe,Ze),e(Ze,Ps),e(pe,Ss),m(i,mt,u),m(i,ut,u),m(i,ft,u),m(i,gt,u),e(gt,Ds),e(gt,tt),e(tt,Ns),e(gt,Os),m(i,Ke,u),m(i,Pe,u),e(Pe,Ls),e(Pe,wt),e(wt,ke),e(Pe,yt),e(Pe,kt),e(kt,Qs),e(Pe,qt),e(Pe,jt),e(jt,Is),e(Pe,$t),m(i,bs,u),m(i,Gt,u),e(Gt,Et),m(i,vs,u),m(i,Ye,u),e(Ye,$e),e($e,Ws),e($e,Ft),e(Ft,ae),e($e,nt),e($e,Bt),e(Bt,Hs),e($e,At),e($e,ns),e(ns,Us),e($e,zt),e($e,xt),e(xt,Rs),e($e,Ct),e($e,os),e(os,Gs),e($e,Mt),e($e,rs),e(rs,Bs),e($e,Pt),e(Ye,Vs),e(Ye,Le),e(Le,St),e(Le,is),e(is,Ks),e(Le,Dt),e(Le,ls),e(ls,Ys),e(Le,ds),e(Le,Ue),e(Ue,ps),e(Le,Ee),e(Le,cs),e(cs,ot),e(Le,Js),e(Le,Nt),e(Nt,Ot),e(Le,Xs),e(Ye,Zs),e(Ye,Re),e(Re,ea),e(Re,hs),e(hs,ms),e(Re,et),e(Re,Lt),e(Lt,j),e(Re,J),e(Ye,xa),e(Ye,ta),e(ta,Ca),m(i,ca,u),m(i,Qt,u),e(Qt,st),e(st,sa),F(rt,sa,null),e(Qt,Ma),e(Qt,aa),e(aa,Pa),m(i,ha,u),m(i,Ie,u),e(Ie,us),e(Ie,ws),e(ws,Ge),e(Ie,Sa),m(i,ma,u),m(i,ys,u),e(ys,na),e(na,fs),m(i,ua,u),m(i,fe,u),e(fe,Da),e(fe,ks),e(ks,Na),e(fe,Oa),m(i,fa,u),m(i,_t,u),e(_t,oa),e(oa,gs),e(_t,La),e(_t,Fe),e(Fe,Qa),e(Fe,ra),e(ra,Ia),e(Fe,Wa),e(_t,Ha),e(_t,he),e(he,Ua),e(he,ia),e(ia,Ra),e(he,Ga),m(i,ga,u),m(i,qs,u),e(qs,Ba),m(i,_a,u),m(i,Ce,u),e(Ce,la),e(la,It),e(It,da),e(da,Ki),e(Ki,Mc),e(It,Pc),e(It,Yi),e(Yi,Ji),e(Ji,Sc),e(It,Dc),e(It,Xi),e(Xi,Zi),e(Zi,Nc),e(Ce,Oc),e(Ce,Va),e(Va,Ka),e(Ka,el),e(el,Lc),e(Ka,Qc),e(Ka,tl),e(tl,Ic),e(Ka,Wc),e(Ka,sl),e(sl,Hc),e(Va,Uc),e(Va,Ya),e(Ya,al),e(al,Rc),e(Ya,Gc),e(Ya,nl),e(nl,Bc),e(Ya,Vc),e(Ya,ol),e(ol,Kc),e(Va,Yc),e(Va,Ja),e(Ja,rl),e(rl,Jc),e(Ja,Xc),e(Ja,il),e(il,Zc),e(Ja,eh),e(Ja,ll),e(ll,th),m(i,sp,u),F(qn,i,u),m(i,ap,u),m(i,jn,u),e(jn,sh),e(jn,lo),e(lo,ah),e(jn,nh),m(i,np,u),m(i,$n,u),e($n,oh),e($n,po),e(po,rh),e($n,ih),m(i,op,u),m(i,Hr,u),e(Hr,dl),e(dl,lh),m(i,rp,u),m(i,En,u),e(En,dh),e(En,co),e(co,ph),e(En,ch),m(i,ip,u),m(i,We,u),e(We,Ur),e(Ur,pl),e(pl,hh),e(Ur,mh),e(We,uh),e(We,Rr),e(Rr,cl),e(cl,fh),e(Rr,gh),e(We,_h),e(We,Gr),e(Gr,hl),e(hl,Th),e(Gr,bh),e(We,vh),e(We,Br),e(Br,ml),e(ml,wh),e(Br,yh),e(We,kh),e(We,Vr),e(Vr,ul),e(ul,qh),e(Vr,jh),e(We,$h),e(We,Kr),e(Kr,fl),e(fl,Eh),e(Kr,Fh),e(We,Ah),e(We,Yr),e(Yr,gl),e(gl,zh),e(Yr,xh),e(We,Ch),e(We,Jr),e(Jr,_l),e(_l,Mh),e(Jr,Ph),e(We,Sh),e(We,Xr),e(Xr,Tl),e(Tl,Dh),e(Xr,Nh),m(i,lp,u),m(i,Tt,u),e(Tt,Oh),e(Tt,ho),e(ho,Lh),e(Tt,Qh),e(Tt,mo),e(mo,Ih),e(Tt,Wh),e(Tt,bl),e(bl,Hh),e(Tt,Uh),e(Tt,vl),e(vl,Rh),e(Tt,Gh),e(Tt,wl),e(wl,Bh),e(Tt,Vh),m(i,dp,u),m(i,Zr,u),e(Zr,yl),e(yl,Kh),m(i,pp,u),F(Fn,i,u),m(i,cp,u),m(i,Se,u),e(Se,Yh),e(Se,kl),e(kl,Jh),e(Se,Xh),e(Se,ql),e(ql,Zh),e(Se,em),e(Se,jl),e(jl,tm),e(Se,sm),e(Se,$l),e($l,am),e(Se,nm),e(Se,El),e(El,om),e(Se,rm),e(Se,Fl),e(Fl,im),e(Se,lm),e(Se,ei),e(ei,dm),e(Se,pm),e(Se,uo),e(uo,cm),e(Se,hm),e(Se,fo),e(fo,mm),e(Se,um),m(i,hp,u),m(i,ti,u),e(ti,fm),m(i,mp,u),F(An,i,u),m(i,up,u),m(i,Xa,u),e(Xa,zn),e(zn,Al),F(go,Al,null),e(Xa,gm),e(Xa,zl),e(zl,_m),m(i,fp,u),F(xn,i,u),m(i,gp,u),m(i,bt,u),e(bt,Tm),e(bt,xl),e(xl,bm),e(bt,vm),e(bt,Cl),e(Cl,wm),e(bt,ym),e(bt,Ml),e(Ml,km),e(bt,qm),e(bt,_o),e(_o,jm),e(bt,$m),e(bt,To),e(To,Em),e(bt,Fm),m(i,_p,u),m(i,Za,u),e(Za,Cn),e(Cn,Pl),F(bo,Pl,null),e(Za,Am),e(Za,Sl),e(Sl,zm),m(i,Tp,u),m(i,en,u),F(vo,en,null),e(en,xm),e(en,wo),e(wo,Cm),e(wo,si),e(si,Mm),e(wo,Pm),m(i,bp,u),m(i,tn,u),e(tn,Mn),e(Mn,Dl),F(yo,Dl,null),e(tn,Sm),e(tn,Nl),e(Nl,Dm),m(i,vp,u),m(i,Wt,u),F(ko,Wt,null),e(Wt,Nm),e(Wt,_s),e(_s,Om),e(_s,ai),e(ai,Lm),e(_s,Qm),e(_s,Ol),e(Ol,Im),e(_s,Wm),e(_s,Ll),e(Ll,Hm),e(_s,Um),e(_s,ni),e(ni,Rm),e(_s,Gm),e(Wt,Bm),e(Wt,qo),e(qo,Vm),e(qo,jo),e(jo,Km),e(qo,Ym),e(Wt,Jm),e(Wt,Ql),e(Ql,Xm),e(Wt,Zm),F($o,Wt,null),m(i,wp,u),m(i,sn,u),e(sn,Pn),e(Pn,Il),F(Eo,Il,null),e(sn,eu),e(sn,Wl),e(Wl,tu),m(i,yp,u),m(i,Be,u),F(Fo,Be,null),e(Be,su),e(Be,Hl),e(Hl,au),e(Be,nu),e(Be,Qe),e(Qe,ou),e(Qe,oi),e(oi,ru),e(Qe,iu),e(Qe,ri),e(ri,lu),e(Qe,du),e(Qe,Ul),e(Ul,pu),e(Qe,cu),e(Qe,Rl),e(Rl,hu),e(Qe,mu),e(Qe,Gl),e(Gl,uu),e(Qe,fu),e(Qe,Bl),e(Bl,gu),e(Qe,_u),e(Qe,Vl),e(Vl,Tu),e(Qe,bu),e(Qe,Kl),e(Kl,vu),e(Qe,wu),e(Qe,Yl),e(Yl,yu),e(Qe,ku),e(Be,qu),e(Be,it),e(it,Jl),e(Jl,ju),e(it,$u),e(it,Xl),e(Xl,Eu),e(it,Fu),e(it,Zl),e(Zl,Au),e(it,zu),e(it,ed),e(ed,xu),e(it,Cu),e(it,td),e(td,Mu),e(it,Pu),e(it,sd),e(sd,Su),e(it,Du),e(it,ad),e(ad,Nu),e(Be,Ou),e(Be,ii),e(ii,li),e(li,Lu),e(ii,Qu),e(Be,Iu),e(Be,Sn),F(Ao,Sn,null),e(Sn,Wu),e(Sn,nd),e(nd,Hu),e(Be,Uu),e(Be,Ta),F(zo,Ta,null),e(Ta,Ru),e(Ta,xo),e(xo,Gu),e(xo,di),e(di,Bu),e(xo,Vu),e(Ta,Ku),e(Ta,Co),e(Co,Yu),e(Co,Mo),e(Mo,Ju),e(Co,Xu),e(Be,Zu),e(Be,pi),F(Po,pi,null),m(i,kp,u),m(i,an,u),e(an,Dn),e(Dn,od),F(So,od,null),e(an,ef),e(an,rd),e(rd,tf),m(i,qp,u),m(i,lt,u),F(Do,lt,null),e(lt,sf),e(lt,No),e(No,af),e(No,ci),e(ci,nf),e(No,of),e(lt,rf),e(lt,Oo),e(Oo,lf),e(Oo,Lo),e(Lo,df),e(Oo,pf),e(lt,cf),e(lt,Qo),e(Qo,hf),e(Qo,hi),e(hi,mf),e(Qo,uf),e(lt,ff),e(lt,Io),e(Io,gf),e(Io,Wo),e(Wo,_f),e(Io,Tf),e(lt,bf),e(lt,Vt),F(Ho,Vt,null),e(Vt,vf),e(Vt,nn),e(nn,wf),e(nn,mi),e(mi,yf),e(nn,kf),e(nn,id),e(id,qf),e(nn,jf),e(Vt,$f),F(Nn,Vt,null),e(Vt,Ef),e(Vt,ld),e(ld,Ff),e(Vt,Af),F(Uo,Vt,null),m(i,jp,u),m(i,on,u),e(on,On),e(On,dd),F(Ro,dd,null),e(on,zf),e(on,pd),e(pd,xf),m(i,$p,u),m(i,Ts,u),F(Go,Ts,null),e(Ts,Cf),e(Ts,rn),e(rn,Mf),e(rn,cd),e(cd,Pf),e(rn,Sf),e(rn,ui),e(ui,Df),e(rn,Nf),e(Ts,Of),e(Ts,Bo),e(Bo,Lf),e(Bo,Vo),e(Vo,Qf),e(Bo,If),e(Ts,Wf),e(Ts,Kt),F(Ko,Kt,null),e(Kt,Hf),e(Kt,ln),e(ln,Uf),e(ln,fi),e(fi,Rf),e(ln,Gf),e(ln,hd),e(hd,Bf),e(ln,Vf),e(Kt,Kf),F(Ln,Kt,null),e(Kt,Yf),e(Kt,md),e(md,Jf),e(Kt,Xf),F(Yo,Kt,null),m(i,Ep,u),m(i,dn,u),e(dn,Qn),e(Qn,ud),F(Jo,ud,null),e(dn,Zf),e(dn,fd),e(fd,eg),m(i,Fp,u),m(i,Ht,u),F(Xo,Ht,null),e(Ht,tg),e(Ht,gd),e(gd,sg),e(Ht,ag),e(Ht,Zo),e(Zo,ng),e(Zo,gi),e(gi,og),e(Zo,rg),e(Ht,ig),e(Ht,er),e(er,lg),e(er,tr),e(tr,dg),e(er,pg),e(Ht,cg),e(Ht,Yt),F(sr,Yt,null),e(Yt,hg),e(Yt,pn),e(pn,mg),e(pn,_i),e(_i,ug),e(pn,fg),e(pn,_d),e(_d,gg),e(pn,_g),e(Yt,Tg),F(In,Yt,null),e(Yt,bg),e(Yt,Td),e(Td,vg),e(Yt,wg),F(ar,Yt,null),m(i,Ap,u),m(i,cn,u),e(cn,Wn),e(Wn,bd),F(nr,bd,null),e(cn,yg),e(cn,vd),e(vd,kg),m(i,zp,u),m(i,Ut,u),F(or,Ut,null),e(Ut,qg),e(Ut,hn),e(hn,jg),e(hn,wd),e(wd,$g),e(hn,Eg),e(hn,yd),e(yd,Fg),e(hn,Ag),e(Ut,zg),e(Ut,rr),e(rr,xg),e(rr,Ti),e(Ti,Cg),e(rr,Mg),e(Ut,Pg),e(Ut,ir),e(ir,Sg),e(ir,lr),e(lr,Dg),e(ir,Ng),e(Ut,Og),e(Ut,Jt),F(dr,Jt,null),e(Jt,Lg),e(Jt,mn),e(mn,Qg),e(mn,bi),e(bi,Ig),e(mn,Wg),e(mn,kd),e(kd,Hg),e(mn,Ug),e(Jt,Rg),F(Hn,Jt,null),e(Jt,Gg),e(Jt,qd),e(qd,Bg),e(Jt,Vg),F(pr,Jt,null),m(i,xp,u),m(i,un,u),e(un,Un),e(Un,jd),F(cr,jd,null),e(un,Kg),e(un,$d),e($d,Yg),m(i,Cp,u),m(i,dt,u),F(hr,dt,null),e(dt,Jg),e(dt,Ed),e(Ed,Xg),e(dt,Zg),e(dt,mr),e(mr,e_),e(mr,vi),e(vi,t_),e(mr,s_),e(dt,a_),e(dt,ur),e(ur,n_),e(ur,fr),e(fr,o_),e(ur,r_),e(dt,i_),F(Rn,dt,null),e(dt,l_),e(dt,Xt),F(gr,Xt,null),e(Xt,d_),e(Xt,fn),e(fn,p_),e(fn,wi),e(wi,c_),e(fn,h_),e(fn,Fd),e(Fd,m_),e(fn,u_),e(Xt,f_),F(Gn,Xt,null),e(Xt,g_),e(Xt,Ad),e(Ad,__),e(Xt,T_),F(_r,Xt,null),m(i,Mp,u),m(i,gn,u),e(gn,Bn),e(Bn,zd),F(Tr,zd,null),e(gn,b_),e(gn,xd),e(xd,v_),m(i,Pp,u),m(i,pt,u),F(br,pt,null),e(pt,w_),e(pt,vr),e(vr,y_),e(vr,Cd),e(Cd,k_),e(vr,q_),e(pt,j_),e(pt,wr),e(wr,$_),e(wr,yi),e(yi,E_),e(wr,F_),e(pt,A_),e(pt,yr),e(yr,z_),e(yr,kr),e(kr,x_),e(yr,C_),e(pt,M_),F(Vn,pt,null),e(pt,P_),e(pt,Zt),F(qr,Zt,null),e(Zt,S_),e(Zt,_n),e(_n,D_),e(_n,ki),e(ki,N_),e(_n,O_),e(_n,Md),e(Md,L_),e(_n,Q_),e(Zt,I_),F(Kn,Zt,null),e(Zt,W_),e(Zt,Pd),e(Pd,H_),e(Zt,U_),F(jr,Zt,null),m(i,Sp,u),m(i,Tn,u),e(Tn,Yn),e(Yn,Sd),F($r,Sd,null),e(Tn,R_),e(Tn,Dd),e(Dd,G_),m(i,Dp,u),m(i,ct,u),F(Er,ct,null),e(ct,B_),e(ct,Nd),e(Nd,V_),e(ct,K_),e(ct,Fr),e(Fr,Y_),e(Fr,qi),e(qi,J_),e(Fr,X_),e(ct,Z_),e(ct,Ar),e(Ar,eT),e(Ar,zr),e(zr,tT),e(Ar,sT),e(ct,aT),F(Jn,ct,null),e(ct,nT),e(ct,es),F(xr,es,null),e(es,oT),e(es,bn),e(bn,rT),e(bn,ji),e(ji,iT),e(bn,lT),e(bn,Od),e(Od,dT),e(bn,pT),e(es,cT),F(Xn,es,null),e(es,hT),e(es,Ld),e(Ld,mT),e(es,uT),F(Cr,es,null),m(i,Np,u),m(i,vn,u),e(vn,Zn),e(Zn,Qd),F(Mr,Qd,null),e(vn,fT),e(vn,Id),e(Id,gT),m(i,Op,u),m(i,ht,u),F(Pr,ht,null),e(ht,_T),e(ht,wn),e(wn,TT),e(wn,Wd),e(Wd,bT),e(wn,vT),e(wn,Hd),e(Hd,wT),e(wn,yT),e(ht,kT),e(ht,Sr),e(Sr,qT),e(Sr,$i),e($i,jT),e(Sr,$T),e(ht,ET),e(ht,Dr),e(Dr,FT),e(Dr,Nr),e(Nr,AT),e(Dr,zT),e(ht,xT),F(eo,ht,null),e(ht,CT),e(ht,ts),F(Or,ts,null),e(ts,MT),e(ts,yn),e(yn,PT),e(yn,Ei),e(Ei,ST),e(yn,DT),e(yn,Ud),e(Ud,NT),e(yn,OT),e(ts,LT),F(to,ts,null),e(ts,QT),e(ts,Rd),e(Rd,IT),e(ts,WT),F(Lr,ts,null),Lp=!0},p(i,[u]){const Qr={};u&2&&(Qr.$$scope={dirty:u,ctx:i}),qn.$set(Qr);const Gd={};u&2&&(Gd.$$scope={dirty:u,ctx:i}),Fn.$set(Gd);const Bd={};u&2&&(Bd.$$scope={dirty:u,ctx:i}),An.$set(Bd);const Vd={};u&2&&(Vd.$$scope={dirty:u,ctx:i}),xn.$set(Vd);const Ir={};u&2&&(Ir.$$scope={dirty:u,ctx:i}),Nn.$set(Ir);const Kd={};u&2&&(Kd.$$scope={dirty:u,ctx:i}),Ln.$set(Kd);const Yd={};u&2&&(Yd.$$scope={dirty:u,ctx:i}),In.$set(Yd);const Jd={};u&2&&(Jd.$$scope={dirty:u,ctx:i}),Hn.$set(Jd);const Wr={};u&2&&(Wr.$$scope={dirty:u,ctx:i}),Rn.$set(Wr);const Xd={};u&2&&(Xd.$$scope={dirty:u,ctx:i}),Gn.$set(Xd);const Zd={};u&2&&(Zd.$$scope={dirty:u,ctx:i}),Vn.$set(Zd);const kn={};u&2&&(kn.$$scope={dirty:u,ctx:i}),Kn.$set(kn);const Fi={};u&2&&(Fi.$$scope={dirty:u,ctx:i}),Jn.$set(Fi);const ep={};u&2&&(ep.$$scope={dirty:u,ctx:i}),Xn.$set(ep);const Ai={};u&2&&(Ai.$$scope={dirty:u,ctx:i}),eo.$set(Ai);const tp={};u&2&&(tp.$$scope={dirty:u,ctx:i}),to.$set(tp)},i(i){Lp||(A(v.$$.fragment,i),A(V.$$.fragment,i),A(rt.$$.fragment,i),A(qn.$$.fragment,i),A(Fn.$$.fragment,i),A(An.$$.fragment,i),A(go.$$.fragment,i),A(xn.$$.fragment,i),A(bo.$$.fragment,i),A(vo.$$.fragment,i),A(yo.$$.fragment,i),A(ko.$$.fragment,i),A($o.$$.fragment,i),A(Eo.$$.fragment,i),A(Fo.$$.fragment,i),A(Ao.$$.fragment,i),A(zo.$$.fragment,i),A(Po.$$.fragment,i),A(So.$$.fragment,i),A(Do.$$.fragment,i),A(Ho.$$.fragment,i),A(Nn.$$.fragment,i),A(Uo.$$.fragment,i),A(Ro.$$.fragment,i),A(Go.$$.fragment,i),A(Ko.$$.fragment,i),A(Ln.$$.fragment,i),A(Yo.$$.fragment,i),A(Jo.$$.fragment,i),A(Xo.$$.fragment,i),A(sr.$$.fragment,i),A(In.$$.fragment,i),A(ar.$$.fragment,i),A(nr.$$.fragment,i),A(or.$$.fragment,i),A(dr.$$.fragment,i),A(Hn.$$.fragment,i),A(pr.$$.fragment,i),A(cr.$$.fragment,i),A(hr.$$.fragment,i),A(Rn.$$.fragment,i),A(gr.$$.fragment,i),A(Gn.$$.fragment,i),A(_r.$$.fragment,i),A(Tr.$$.fragment,i),A(br.$$.fragment,i),A(Vn.$$.fragment,i),A(qr.$$.fragment,i),A(Kn.$$.fragment,i),A(jr.$$.fragment,i),A($r.$$.fragment,i),A(Er.$$.fragment,i),A(Jn.$$.fragment,i),A(xr.$$.fragment,i),A(Xn.$$.fragment,i),A(Cr.$$.fragment,i),A(Mr.$$.fragment,i),A(Pr.$$.fragment,i),A(eo.$$.fragment,i),A(Or.$$.fragment,i),A(to.$$.fragment,i),A(Lr.$$.fragment,i),Lp=!0)},o(i){z(v.$$.fragment,i),z(V.$$.fragment,i),z(rt.$$.fragment,i),z(qn.$$.fragment,i),z(Fn.$$.fragment,i),z(An.$$.fragment,i),z(go.$$.fragment,i),z(xn.$$.fragment,i),z(bo.$$.fragment,i),z(vo.$$.fragment,i),z(yo.$$.fragment,i),z(ko.$$.fragment,i),z($o.$$.fragment,i),z(Eo.$$.fragment,i),z(Fo.$$.fragment,i),z(Ao.$$.fragment,i),z(zo.$$.fragment,i),z(Po.$$.fragment,i),z(So.$$.fragment,i),z(Do.$$.fragment,i),z(Ho.$$.fragment,i),z(Nn.$$.fragment,i),z(Uo.$$.fragment,i),z(Ro.$$.fragment,i),z(Go.$$.fragment,i),z(Ko.$$.fragment,i),z(Ln.$$.fragment,i),z(Yo.$$.fragment,i),z(Jo.$$.fragment,i),z(Xo.$$.fragment,i),z(sr.$$.fragment,i),z(In.$$.fragment,i),z(ar.$$.fragment,i),z(nr.$$.fragment,i),z(or.$$.fragment,i),z(dr.$$.fragment,i),z(Hn.$$.fragment,i),z(pr.$$.fragment,i),z(cr.$$.fragment,i),z(hr.$$.fragment,i),z(Rn.$$.fragment,i),z(gr.$$.fragment,i),z(Gn.$$.fragment,i),z(_r.$$.fragment,i),z(Tr.$$.fragment,i),z(br.$$.fragment,i),z(Vn.$$.fragment,i),z(qr.$$.fragment,i),z(Kn.$$.fragment,i),z(jr.$$.fragment,i),z($r.$$.fragment,i),z(Er.$$.fragment,i),z(Jn.$$.fragment,i),z(xr.$$.fragment,i),z(Xn.$$.fragment,i),z(Cr.$$.fragment,i),z(Mr.$$.fragment,i),z(Pr.$$.fragment,i),z(eo.$$.fragment,i),z(Or.$$.fragment,i),z(to.$$.fragment,i),z(Lr.$$.fragment,i),Lp=!1},d(i){t(l),i&&t(_),i&&t(c),x(v),i&&t(D),i&&t(q),x(V),i&&t(I),i&&t(O),i&&t(N),i&&t(ee),i&&t(ce),i&&t(ne),i&&t(ve),i&&t(g),i&&t(be),i&&t(ze),i&&t(le),i&&t(xe),i&&t(de),i&&t(pe),i&&t(mt),i&&t(ut),i&&t(ft),i&&t(gt),i&&t(Ke),i&&t(Pe),i&&t(bs),i&&t(Gt),i&&t(vs),i&&t(Ye),i&&t(ca),i&&t(Qt),x(rt),i&&t(ha),i&&t(Ie),i&&t(ma),i&&t(ys),i&&t(ua),i&&t(fe),i&&t(fa),i&&t(_t),i&&t(ga),i&&t(qs),i&&t(_a),i&&t(Ce),i&&t(sp),x(qn,i),i&&t(ap),i&&t(jn),i&&t(np),i&&t($n),i&&t(op),i&&t(Hr),i&&t(rp),i&&t(En),i&&t(ip),i&&t(We),i&&t(lp),i&&t(Tt),i&&t(dp),i&&t(Zr),i&&t(pp),x(Fn,i),i&&t(cp),i&&t(Se),i&&t(hp),i&&t(ti),i&&t(mp),x(An,i),i&&t(up),i&&t(Xa),x(go),i&&t(fp),x(xn,i),i&&t(gp),i&&t(bt),i&&t(_p),i&&t(Za),x(bo),i&&t(Tp),i&&t(en),x(vo),i&&t(bp),i&&t(tn),x(yo),i&&t(vp),i&&t(Wt),x(ko),x($o),i&&t(wp),i&&t(sn),x(Eo),i&&t(yp),i&&t(Be),x(Fo),x(Ao),x(zo),x(Po),i&&t(kp),i&&t(an),x(So),i&&t(qp),i&&t(lt),x(Do),x(Ho),x(Nn),x(Uo),i&&t(jp),i&&t(on),x(Ro),i&&t($p),i&&t(Ts),x(Go),x(Ko),x(Ln),x(Yo),i&&t(Ep),i&&t(dn),x(Jo),i&&t(Fp),i&&t(Ht),x(Xo),x(sr),x(In),x(ar),i&&t(Ap),i&&t(cn),x(nr),i&&t(zp),i&&t(Ut),x(or),x(dr),x(Hn),x(pr),i&&t(xp),i&&t(un),x(cr),i&&t(Cp),i&&t(dt),x(hr),x(Rn),x(gr),x(Gn),x(_r),i&&t(Mp),i&&t(gn),x(Tr),i&&t(Pp),i&&t(pt),x(br),x(Vn),x(qr),x(Kn),x(jr),i&&t(Sp),i&&t(Tn),x($r),i&&t(Dp),i&&t(ct),x(Er),x(Jn),x(xr),x(Xn),x(Cr),i&&t(Np),i&&t(vn),x(Mr),i&&t(Op),i&&t(ht),x(Pr),x(eo),x(Or),x(to),x(Lr)}}}const jk={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function $k(U){return Ky(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mk extends Uy{constructor(l){super();Ry(this,l,$k,qk,Gy,{})}}export{Mk as default,jk as metadata};
